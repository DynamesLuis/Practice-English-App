package com.example.practiceEnglishApp.word;

import com.example.practiceEnglishApp.activityLog.ActivityService;
import com.example.practiceEnglishApp.activityLog.ActivityType;
import com.example.practiceEnglishApp.activityLog.EntityType;
import com.example.practiceEnglishApp.auth.AuthService;
import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.examples.Example;
import com.example.practiceEnglishApp.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class WordService {
    private final WordRepository wordRepository;
    private final AuthService authService;
    private final Random random = new Random();
    private final ActivityService activityService;

    @Autowired
    public WordService(WordRepository wordRepository,
                       AuthService authService,
                       ActivityService activityService) {
        this.wordRepository = wordRepository;
        this.authService = authService;
        this.activityService = activityService;
    }

    public Page<Word> getWords(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        User user = authService.getCurrentUser();
        return wordRepository.findByUser(user, pageable);
    }

    public Page<Word> getWordByWord(String word, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        User user = authService.getCurrentUser();
        return wordRepository.findByUserAndWordContainingIgnoreCase(user ,word, pageable);
    }

    public Word getRandomWord() {
        User user = authService.getCurrentUser();
        Long maxId = wordRepository.findMaxIdByUser(user);
        if (maxId == null) {
            throw new RuntimeException("No words in database");
        }
        long randomId = 1 + random.nextLong(maxId);
        Word word = wordRepository
                .findFirstByUserAndIdGreaterThanEqual(user,randomId)
                .orElseGet(() -> wordRepository.findFirstByUserOrderByIdAsc(user).orElseThrow());
        activityService.logActivity(
                user,
                ActivityType.VIEW,
                EntityType.WORD,
                word.getId()
        );
        return word;
    }

    public Word addWord(Word newWord) {
        User user = authService.getCurrentUser();

        if ((newWord.getDefinitions() == null || newWord.getDefinitions().isEmpty()) ||
            (newWord.getExamples() == null || newWord.getExamples().isEmpty())) {
            throw new IllegalArgumentException("A word must have at least one definition and one example.");
        }

        newWord.setWord(normalize(newWord.getWord()));

        for (Definition definition : newWord.getDefinitions()) {
            definition.setWord(newWord);
        }

        for (Example example : newWord.getExamples()) {
            example.setWord(newWord);
        }

        newWord.setUser(user);
        Word saved = wordRepository.save(newWord);

        activityService.logActivity(
                user,
                ActivityType.ADD,
                EntityType.WORD,
                saved.getId()
        );

        return saved;
    }

    public void deleteWord(Long wordId) {
        User user = authService.getCurrentUser();
        Word word = wordRepository.findByIdAndUser(wordId, user)
                .orElseThrow(() -> new RuntimeException("Word not found"));
        wordRepository.delete(word);
        activityService.logActivity(
                user,
                ActivityType.DELETE,
                EntityType.WORD,
                word.getId()
        );
    }

    @Transactional
    public Word updateWord(Long wordId, Word wordToUpdate) {
        User user = authService.getCurrentUser();
        Word word = wordRepository.findByIdAndUser(wordId, user)
                .orElseThrow(() -> new RuntimeException("Word not found"));

        if (wordToUpdate.getWord() != null &&
                !wordToUpdate.getWord().isEmpty() &&
                !Objects.equals(word.getWord(), wordToUpdate.getWord())) {
            word.setWord(wordToUpdate.getWord());
        }

        if(wordToUpdate.getDefinitions().isEmpty()){
            throw new RuntimeException("At least one definition required");
        }

        if(wordToUpdate.getExamples().isEmpty()){
            throw new RuntimeException("At least one example required");
        }

        updateDefinitions(word, wordToUpdate.getDefinitions());
        updateExamples(word, wordToUpdate.getExamples());

        Word updated = wordRepository.save(word);

        activityService.logActivity(
                user,
                ActivityType.EDIT,
                EntityType.WORD,
                updated.getId()
        );

        return updated;
    }

    private void  updateDefinitions(Word existingWord, Set<Definition> incomingDefinitions) {
        Set<Definition> existingDefinitions = existingWord.getDefinitions();
        Map<Long, Definition> existingMap = existingDefinitions.stream()
                .filter(definition -> definition.getId() != null)
                .collect(Collectors.toMap(Definition::getId, definition -> definition));
        Set<Definition> resultDefinitions = new HashSet<>();
        for (Definition incomingDefinition: incomingDefinitions) {
            if (incomingDefinition.getId() != null && existingMap.containsKey(incomingDefinition.getId())) {
                Definition existing = existingMap.get(incomingDefinition.getId());
                existing.setDefinition(incomingDefinition.getDefinition());
                resultDefinitions.add(existing);
            } else {
                incomingDefinition.setWord(existingWord);
                resultDefinitions.add(incomingDefinition);
            }
        }
        existingDefinitions.clear();
        existingDefinitions.addAll(resultDefinitions);
    }

    private void updateExamples(Word existingWord, Set<Example> incomingExamples) {
        Set<Example> existingExamples = existingWord.getExamples();
        Map<Long, Example> existingMap = existingExamples.stream()
                .filter(example -> example.getId() != null)
                .collect(Collectors.toMap(Example::getId, example -> example));
        Set<Example> resultsExamples = new HashSet<>();
        for (Example incomingExample: incomingExamples) {
            if (incomingExample.getId() != null && existingMap.containsKey(incomingExample.getId())) {
                Example existing = existingMap.get(incomingExample.getId());
                existing.setExample(incomingExample.getExample());
                resultsExamples.add(existing);
            } else {
                incomingExample.setWord(existingWord);
                resultsExamples.add(incomingExample);
            }
        }
        existingExamples.clear();
        existingExamples.addAll(resultsExamples);
    }

    private String normalize(String text) {
        return text.trim().toLowerCase();
    }

}

