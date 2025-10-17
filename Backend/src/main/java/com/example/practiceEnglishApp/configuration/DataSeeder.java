package com.example.practiceEnglishApp.configuration;

import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.definition.DefinitionRepository;
import com.example.practiceEnglishApp.text.Text;
import com.example.practiceEnglishApp.text.TextRepository;
import com.example.practiceEnglishApp.word.Word;
import com.example.practiceEnglishApp.word.WordRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataSeeder {
    @Bean
    CommandLineRunner commandLineRunner(TextRepository textRepository,
                                        WordRepository wordRepository,
                                        DefinitionRepository definitionRepository) {
        return args -> {
            Word word1 = new Word("serendipity");
            Word word2 = new Word("gorgeous");
            Definition def1 = new Definition("the occurrence and development of events by chance in a happy or beneficial way");
            Definition def2 = new Definition("beautiful; very attractive");
            word1.addDefinition(def1);
            word2.addDefinition(def2);
            wordRepository.saveAll(List.of(word1, word2));
            definitionRepository.saveAll(List.of(def1, def2));
            Text text1 = new Text("Modeling girl", "some texttt");
            Text text2 = new Text("Triplet survivor", "some texottoto");
            textRepository.saveAll(List.of(text1, text2));
        };
    }
}
