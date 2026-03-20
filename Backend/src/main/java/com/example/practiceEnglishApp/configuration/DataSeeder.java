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
            Word word3 = new Word("reluctant");
            Word word4 = new Word("outcome");
            Word word5 = new Word("maintain");
            Word word6 = new Word("insight");
            Definition def1 = new Definition("the occurrence and development of events by chance in a happy or beneficial way");
            Definition def2 = new Definition("beautiful; very attractive");
            Definition def3 = new Definition("Feeling unsure or unwilling to do something");
            Definition def4 = new Definition("The final result of a situation or event");
            Definition def5 = new Definition("To keep something in good condition or continue something at the same level");
            Definition def6 = new Definition("A clear and deep understanding of a situation or problem");
            Example example1 = new Example("Success often depends on serendipity and clues turned up by other investigations");
            Example example2 = new Example("she was the most gorgeous woman I'd ever seen");
            Example example3 = new Example("She was reluctant to speak in front of the entire class");
            Example example4 = new Example("The outcome of the experiment surprised the researchers");
            Example example5 = new Example("It is important to maintain good communication with your team");
            Example example6 = new Example("The book gives valuable insight into how successful companies operate");
            word1.addDefinition(def1);
            word1.addExample(example1);
            word2.addDefinition(def2);
            word2.addExample(example2);
            word3.addDefinition(def3);
            word3.addExample(example3);
            word4.addDefinition(def4);
            word4.addExample(example4);
            word5.addDefinition(def5);
            word5.addExample(example5);
            word6.addDefinition(def6);
            word6.addExample(example6);
            wordRepository.saveAll(List.of(word1, word2,word3,word4,word5,word6));
            definitionRepository.saveAll(List.of(def1, def2,def3,def4,def5,def6));
            exampleRepository.saveAll(List.of(example1, example2, example3, example4, example5, example6));
            Text text1 = new Text("modeling girl", "some texttt");
            Text text2 = new Text("triplet survivor", "some texottoto");
            Text text3 = new Text("random adventure", "some some text");
            Text text4 = new Text("my family is happy", "toooo much text");
            Text text5 = new Text("god bless you", "i don't lnow what to write");
            textRepository.saveAll(List.of(text1, text2, text3, text4, text5));
        };
    }
}
