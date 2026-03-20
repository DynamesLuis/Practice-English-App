package com.example.practiceEnglishApp.word;

import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.examples.Example;
import jakarta.persistence.EntityNotFoundException;
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
    private final Random random = new Random();

    @Autowired
    public WordService(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    public Page<Word> getWords(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return wordRepository.findAll(pageable);
    }

    public Page<Word> getWordByWord(String word, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return wordRepository.findByWordContaining(word, pageable);
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

        newWord.setWord(normalize(newWord.getWord()));

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

    @Transactional
    public Word updateWord(Long wordId, Word wordToUpdate) {
        Word existingWord = wordRepository.findById(wordId)
                .orElseThrow(() -> new EntityNotFoundException("The word with id " + wordId + " does not exist"));

        if (wordToUpdate.getWord() != null &&
                !wordToUpdate.getWord().isEmpty() &&
                !Objects.equals(existingWord.getWord(), wordToUpdate.getWord())) {
            existingWord.setWord(wordToUpdate.getWord());
        }

        if(wordToUpdate.getDefinitions().isEmpty()){
            throw new RuntimeException("At least one definition required");
        }

        if(wordToUpdate.getExamples().isEmpty()){
            throw new RuntimeException("At least one example required");
        }

        updateDefinitions(existingWord, wordToUpdate.getDefinitions());
        updateExamples(existingWord, wordToUpdate.getExamples());

        return wordRepository.save(existingWord);
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

    public void updateExamples(Word existingWord, Set<Example> incomingExamples) {
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

