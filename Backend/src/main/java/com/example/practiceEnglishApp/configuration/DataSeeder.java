package com.example.practiceEnglishApp.configuration;

import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.definition.DefinitionRepository;
import com.example.practiceEnglishApp.examples.Example;
import com.example.practiceEnglishApp.examples.ExampleRepository;
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
                                        DefinitionRepository definitionRepository,
                                        ExampleRepository exampleRepository) {
        return args -> {
            Word word1 = new Word("serendipity");
            Word word2 = new Word("gorgeous");
            Definition def1 = new Definition("the occurrence and development of events by chance in a happy or beneficial way");
            Definition def2 = new Definition("beautiful; very attractive");
            Example example1 = new Example("Success often depends on serendipity and clues turned up by other investigations");
            Example example2 = new Example("she was the most gorgeous woman I'd ever seen");
            word1.addDefinition(def1);
            word1.addExample(example1);
            word2.addDefinition(def2);
            word2.addExample(example2);
            wordRepository.saveAll(List.of(word1, word2));
            definitionRepository.saveAll(List.of(def1, def2));
            exampleRepository.saveAll(List.of(example1, example2));
            Text text1 = new Text("Modeling girl", "some texttt");
            Text text2 = new Text("Triplet survivor", "some texottoto");
            textRepository.saveAll(List.of(text1, text2));
        };
    }
}
