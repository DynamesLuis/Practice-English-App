package com.example.practiceEnglishApp.text;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TextService {
    private final TextRepository textRepository;

    @Autowired
    public TextService(TextRepository textRepository) {
        this.textRepository = textRepository;
    }

    public List<Text> getTexts() {
        return textRepository.findAll();
    }

    public Text getOneText(String title) {
        Optional<Text> searchedText = textRepository.findByTitle(title);
        return searchedText.orElse(null);
    }

    public Text addNewText(Text text) {
        textRepository.save(text);
        return text;
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
            title.length() > 0 &&
            !Objects.equals(existingText.getTitle(), title)) {
            existingText.setTitle(title);
        }

        if (text != null &&
                text.length() > 0 &&
                !Objects.equals(existingText.getText(), text)) {
            existingText.setText(text);
        }

        return existingText;
    }
}
