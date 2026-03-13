package com.example.practiceEnglishApp.word;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    public Page<Word> getWords(@RequestParam int page, @RequestParam int size) {
        return wordService.getWords(page, size);
    }

    @GetMapping("/search")
    public Page<Word> getWord(@RequestParam String word ,@RequestParam int page, @RequestParam int size) {
        return wordService.getWordByWord(word, page, size);
    }

    @GetMapping("/random")
    public ResponseEntity<Word> getRandomWord() {
        Word randomWord = wordService.getRandomWord();
        return new ResponseEntity<>(randomWord, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<Word> addWord(@RequestBody Word newWord) {
        Word addedWord = wordService.addWord(newWord);
        return new ResponseEntity<>(addedWord, HttpStatus.CREATED);
    }

    @DeleteMapping(path = {"{wordId}"})
    public ResponseEntity<String> deleteWord(@PathVariable("wordId") Long wordId) {
        wordService.deleteWord(wordId);
        return new ResponseEntity<>("Word deleted successfully", HttpStatus.OK);
    }

    @PutMapping(path = {"{wordId}"})
    public ResponseEntity<Word> updateWord(@PathVariable("wordId") Long wordId, @RequestBody Word wordToUpdate) {
        Word updatedWord = wordService.updateWord(wordId, wordToUpdate);
        return new ResponseEntity<>(updatedWord, HttpStatus.OK);
    }
}