package com.example.practiceEnglishApp.text;

import com.example.practiceEnglishApp.auth.AuthService;
import com.example.practiceEnglishApp.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Random;

@Service
public class TextService {
    private final TextRepository textRepository;
    private final AuthService authService;
    private final Random random = new Random();

    @Autowired
    public TextService(TextRepository textRepository,
                       AuthService authService) {
        this.textRepository = textRepository;
        this.authService = authService;
    }

    public Page<Text> getTexts(int page, int size) {
        User user = authService.getCurrentUser();
        Pageable pageable = PageRequest.of(page, size);
        return textRepository.findByUser(user, pageable);
    }

    public Page<Text> getOneText(String title, int page, int size) {
        User user = authService.getCurrentUser();
        Pageable pageable = PageRequest.of(page, size);
        return textRepository.findByUserAndTitleContainingIgnoreCase(user, title, pageable);
    }

    public Text getRandomText() {
        User user = authService.getCurrentUser();
        Long maxId = textRepository.findMaxIdByUser(user);
        if (maxId == null) {
            throw new RuntimeException("No texts in database");
        }
        long randomId = 1 + random.nextLong(maxId);
        return textRepository.findFirstByUserAndIdGreaterThanEqual(user, randomId)
                .orElseGet(() -> textRepository.findFirstByUserOrderByIdAsc(user).orElseThrow());
    }

    public Text addNewText(Text text) {
        User user = authService.getCurrentUser();
        text.setTitle(normalize(text.getTitle()));
        text.setUser(user);
        return textRepository.save(text);
    }

    public void deleteText(Long textId) {
        User user = authService.getCurrentUser();
        Text text = textRepository.findByIdAndUser(textId, user)
                .orElseThrow(() -> new RuntimeException("Text not found"));

        textRepository.delete(text);
    }

    @Transactional
    public Text updateText(Long textId, String title, String text) {
        User user = authService.getCurrentUser();
        Text existingText =textRepository.findByIdAndUser(textId, user)
                .orElseThrow(() -> new RuntimeException("Text not found"));

        if (title != null &&
                !title.isEmpty() &&
            !Objects.equals(existingText.getTitle(), title)) {
            existingText.setTitle(title);
        }

        if (text != null &&
                !text.isEmpty() &&
                !Objects.equals(existingText.getText(), text)) {
            existingText.setText(text);
        }

        return existingText;
    }

    private String normalize(String text) {
        return text.trim().toLowerCase();
    }
}
