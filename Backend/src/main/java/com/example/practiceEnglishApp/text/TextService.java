package com.example.practiceEnglishApp.text;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;

@Service
public class TextService {
    private final TextRepository textRepository;
    private final Random random = new Random();

    @Autowired
    public TextService(TextRepository textRepository) {
        this.textRepository = textRepository;
    }

    public Page<Text> getTexts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return textRepository.findAll(pageable);
    }

    public Page<Text> getOneText(String title, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return textRepository.findByTitleContaining(title, pageable);
    }

    public Text getRandomText() {
        Long maxId = textRepository.findMaxId();
        if (maxId == null) {
            throw new RuntimeException("No texts in database");
        }
        long randomId = 1 + random.nextLong(maxId);
        return textRepository.findFirstByIdGreaterThanEqual(randomId)
                .orElseGet(() -> textRepository.findFirstByOrderByIdAsc().orElseThrow());
    }

    public Text addNewText(Text text) {
        text.setTitle(normalize(text.getTitle()));
        return textRepository.save(text);
    }

    public void deleteText(Long textId) {
        boolean textExisted = textRepository.existsById(textId);

        if (!textExisted) {
            throw new EntityNotFoundException("The text with id " + textId + " doesn't exist");
        }
        textRepository.deleteById(textId);
    }

    @Transactional
    public Text updateText(Long textId, String title, String text) {
        Text existingText = textRepository.findById(textId)
                .orElseThrow(()->  new EntityNotFoundException("The text with id " + textId + "doesn't exist"));

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
