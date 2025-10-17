package com.example.practiceEnglishApp.word;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class WordConfiguration {
    @Bean
    CommandLineRunner commandLineRunnerWord(WordRepository wordRepository) {
        return args -> {
            Word word1 = new Word("serendipity");
            Word word2 = new Word("gorgeous");
            wordRepository.saveAll(List.of(word1, word2));
        };
    }
}
