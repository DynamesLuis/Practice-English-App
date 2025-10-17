package com.example.practiceEnglishApp.text;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class TextConfiguration {
    @Bean
    CommandLineRunner commandLineRunnerText(TextRepository textRepository) {
        return args -> {
            Text text1 = new Text("Modeling girl", "some texttt");
            Text text2 = new Text("Triplet survivor", "some texottoto");
            textRepository.saveAll(List.of(text1, text2));
        };
    }
}
