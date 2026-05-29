package com.example.practiceEnglishApp.dto;

import com.example.practiceEnglishApp.activityLog.ActivityLog;
import com.example.practiceEnglishApp.text.Text;
import com.example.practiceEnglishApp.word.Word;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponse {
    public int totalWords;
    public int totalTexts;
    public int streak;
    public int textsRead;
    public long progress;
    public List<ActivityLog> recentActivity;
    public List<Word> newWords;
    public List<Text> newTexts;
}
