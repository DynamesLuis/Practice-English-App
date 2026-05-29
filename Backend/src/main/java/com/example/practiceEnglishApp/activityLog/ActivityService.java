package com.example.practiceEnglishApp.activityLog;

import com.example.practiceEnglishApp.auth.AuthService;
import com.example.practiceEnglishApp.dto.DashboardResponse;
import com.example.practiceEnglishApp.text.Text;
import com.example.practiceEnglishApp.text.TextRepository;
import com.example.practiceEnglishApp.user.User;
import com.example.practiceEnglishApp.word.Word;
import com.example.practiceEnglishApp.word.WordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {
    private final ActivityLogRepository activityLogRepository;
    private final WordRepository wordRepository;
    private final TextRepository textRepository;
    private final AuthService authService;

    public DashboardResponse getDashboardData() {
        User user = authService.getCurrentUser();

        int totalWord = getTotalWords(user.getId());
        int totalTexts = getTotalTexts(user.getId());
        int streak = calculateStreak(user.getId());
        int textsRead = countTextsRead(user.getId());
        long todayProgress = countTodayActivity(user.getId());
        List<ActivityLog> recentActivity = getRecentActivity(user.getId());
        List<Word> newWords = getRecentWords(user.getId());
        List<Text> newTexts = getRecentTexts(user.getId());
        return DashboardResponse.builder()
                .totalWords(totalWord)
                .totalTexts(totalTexts)
                .streak(streak)
                .textsRead(textsRead)
                .progress(todayProgress)
                .recentActivity(recentActivity)
                .newWords(newWords)
                .newTexts(newTexts)
                .build();
    }

    public void logActivity(User user,
                            ActivityType type,
                            EntityType entityType,
                            Long entityId) {
        ActivityLog newLog = new ActivityLog();
        newLog.setUser(user);
        newLog.setActivity_type(type);
        newLog.setEntity_type(entityType);
        newLog.setEntityId(entityId);

        activityLogRepository.save(newLog);
    }

    private int calculateStreak(Long userId) {
        List<LocalDate> activeDays = activityLogRepository.findActiveDays(userId, ActivityType.VIEW);

        int streak = 0;
        LocalDate today = LocalDate.now();

        for (LocalDate date : activeDays) {
            if (date.equals(today.minusDays(streak))) {
                streak++;
            } else {
                break;
            }
        }

        return streak;
    }

    private long countTodayActivity(Long userId) {
        LocalDateTime startOfDay = LocalDate.now().atStartOfDay();
        return activityLogRepository.countTodayActivity(userId, startOfDay, ActivityType.VIEW);
    }

    private List<ActivityLog> getRecentActivity(Long userId) {
        return activityLogRepository.findTop5ByUserIdOrderByCreatedAtDesc(userId);
    }

    private int getTotalWords(Long userId) {
        return wordRepository.countByUserId(userId);
    }

    private int getTotalTexts(Long userId) {
        return textRepository.countByUserId(userId);
    }

    private int countTextsRead(Long userId) {
        return activityLogRepository.countDistinctTextsRead(userId, ActivityType.READ, EntityType.TEXT);
    }

    private List<Word> getRecentWords(Long userId) {
        return wordRepository.findTop5ByUserIdOrderByCreatedAtDesc(userId);
    }

    private List<Text> getRecentTexts(Long userId) {
        return textRepository.findTop5ByUserIdOrderByCreatedAtDesc(userId);
    }
}
