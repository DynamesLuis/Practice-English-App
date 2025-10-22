package com.example.practiceEnglishApp.word;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/word")
public class WordController {
    private final WordService wordService;

    @Autowired
    public WordController(WordService wordService) {
        this.wordService = wordService;
    }

    @GetMapping
    public List<Word> getWords() {
        return wordService.getWords();
    }

    @GetMapping(path = {"{word}"})
    public ResponseEntity<Word> getWord(@PathVariable("word") String word) {
        Word searchedWord = wordService.getWordByWord(word);
        if (searchedWord != null) {
            return new ResponseEntity<>(searchedWord, HttpStatus.FOUND );
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}