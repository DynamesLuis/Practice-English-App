package com.example.practiceEnglishApp.text;

import org.apache.tomcat.util.http.parser.TE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/text")
public class TextController {
    private final TextService textService;

    @Autowired
    public TextController(TextService textService) {
        this.textService = textService;
    }

    @GetMapping
    public List<Text> getTexts() {
        return textService.getTexts();
    }

    @GetMapping(path = "/search")
    public ResponseEntity<Text> getOneText(@RequestParam(required = true) String title) {
        Text searchedText = textService.getOneText(title);
        if (searchedText != null) {
            return new ResponseEntity<>(searchedText, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Text> addNewText(@RequestBody Text text) {
        Text addedText = textService.addNewText(text);
        return new ResponseEntity<>(addedText, HttpStatus.CREATED);
    }

    @DeleteMapping(path = {"{textId}"})
    public ResponseEntity<String> deleteText(@PathVariable("textId") Long textId) {
        textService.deleteText(textId);
        return new ResponseEntity<>("Text deleted successfully", HttpStatus.OK);
    }

    @PutMapping(path = {"{textId}"})
    public ResponseEntity<Text> updateText(@PathVariable("textId") Long textId,
                           @RequestParam(required = false) String title,
                           @RequestParam(required = false) String text) {
        Text searchedTex = textService.updateText(textId, title, text);
        return new ResponseEntity<>(searchedTex, HttpStatus.OK);
    }
}
