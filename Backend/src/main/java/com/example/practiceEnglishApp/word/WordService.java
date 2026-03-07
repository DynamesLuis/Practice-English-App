package com.example.practiceEnglishApp.word;

import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.examples.Example;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class WordService {
    private final WordRepository wordRepository;
    private final Random random = new Random();

    @Autowired
    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    public List<Word> getWords() {
        return wordRepository.findAll();
    }

    public Word getWordByWord(String word) {
        Optional<Word> searchedWord = wordRepository.findByWord(word);
        return searchedWord.orElse(null);
    }

    public Word getRandomWord() {
        Long maxId = wordRepository.findMaxId();
        if (maxId == null) {
            throw new RuntimeException("No words in database");
        }
        long randomId = 1 + random.nextLong(maxId);
        return wordRepository
                .findFirstByIdGreaterThanEqual(randomId)
                .orElseGet(() -> wordRepository.findFirstByOrderByIdAsc().orElseThrow());
    }

    public Word addWord(Word newWord) {
        if ((newWord.getDefinitions() == null || newWord.getDefinitions().isEmpty()) ||
            (newWord.getExamples() == null || newWord.getExamples().isEmpty())) {
            throw new IllegalArgumentException("A word must have at least one definition and one example.");
        }

        for (Definition definition : newWord.getDefinitions()) {
            definition.setWord(newWord);
        }

        for (Example example : newWord.getExamples()) {
            example.setWord(newWord);
        }

        return wordRepository.save(newWord);
    }

    public void deleteWord(Long wordId) {
        boolean wordExisted = wordRepository.existsById(wordId);

        if (!wordExisted) {
            throw new EntityNotFoundException("The word with id " + wordId + " doesn't exist");
        }
        wordRepository.deleteById(wordId);
    }
}
