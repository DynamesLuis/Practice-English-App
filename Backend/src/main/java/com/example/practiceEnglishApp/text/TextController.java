package com.example.practiceEnglishApp.text;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping
    public void addNewText(@RequestBody Text text) {
        textService.addNewText(text);
    }

    @DeleteMapping(path = {"{textId}"})
    public void deleteText(@PathVariable("textId") Long textId) {
        textService.deleteText(textId);
    }

    @PutMapping(path = {"{textId}"})
    public void updateText(@PathVariable("textId") Long textId,
                           @RequestParam(required = false) String title,
                           @RequestParam(required = false) String text) {
        textService.updateText(textId, title, text);
    }
}
