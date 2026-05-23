package com.example.practiceEnglishApp.configuration;

import com.example.practiceEnglishApp.activityLog.*;
import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.definition.DefinitionRepository;
import com.example.practiceEnglishApp.examples.Example;
import com.example.practiceEnglishApp.examples.ExampleRepository;
import com.example.practiceEnglishApp.text.Text;
import com.example.practiceEnglishApp.text.TextRepository;
import com.example.practiceEnglishApp.user.Role;
import com.example.practiceEnglishApp.user.User;
import com.example.practiceEnglishApp.user.UserRepository;
import com.example.practiceEnglishApp.word.Word;
import com.example.practiceEnglishApp.word.WordRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
public class DataSeeder {
    @Bean
    CommandLineRunner commandLineRunner(TextRepository textRepository,
                                        WordRepository wordRepository,
                                        DefinitionRepository definitionRepository,
                                        ExampleRepository exampleRepository,
                                        UserRepository userRepository,
                                        PasswordEncoder passwordEncoder,
                                        ActivityLogRepository activityLogRepository) {
        return args -> {
            User user = User.builder()
                    .username("gaborex")
                    .password(passwordEncoder.encode("12345"))
                    .role(Role.USER)
                    .build();

            userRepository.save(user);

            Word word1 = new Word("serendipity");
            Word word2 = new Word("gorgeous");
            Word word3 = new Word("reluctant");
            Word word4 = new Word("outcome");
            Word word5 = new Word("maintain");
            Definition def1 = new Definition("the occurrence and development of events by chance in a happy or beneficial way");
            Definition def2 = new Definition("beautiful; very attractive");
            Definition def3 = new Definition("Feeling unsure or unwilling to do something");
            Definition def4 = new Definition("The final result of a situation or event");
            Definition def5 = new Definition("To keep something in good condition or continue something at the same level");
            Example example1 = new Example("Success often depends on serendipity and clues turned up by other investigations");
            Example example2 = new Example("she was the most gorgeous woman I'd ever seen");
            Example example3 = new Example("She was reluctant to speak in front of the entire class");
            Example example4 = new Example("The outcome of the experiment surprised the researchers");
            Example example5 = new Example("It is important to maintain good communication with your team");
            word1.setUser(user);
            word2.setUser(user);
            word3.setUser(user);
            word4.setUser(user);
            word5.setUser(user);

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
            wordRepository.saveAll(List.of(word1, word2,word3,word4,word5));
            definitionRepository.saveAll(List.of(def1, def2,def3,def4,def5));
            exampleRepository.saveAll(List.of(example1, example2, example3, example4, example5));
            Text text1 = new Text("modeling girl", "some texttt");
            Text text2 = new Text("triplet survivor", "some texottoto");
            Text text3 = new Text("random adventure", "some some text");
            Text text4 = new Text("my family is happy", "toooo much text");
            Text text5 = new Text("god bless you", "i don't lnow what to write");
            text1.setUser(user);
            text2.setUser(user);
            text3.setUser(user);
            text4.setUser(user);
            text5.setUser(user);
            textRepository.saveAll(List.of(text1, text2, text3, text4, text5));

            ActivityLog log1 = new ActivityLog();
            log1.setUser(user);
            log1.setActivity_type(ActivityType.ADD);
            log1.setEntity_type(EntityType.WORD);
            log1.setEntityId(word1.getId());
            ActivityLog log2 = new ActivityLog();
            log2.setUser(user);
            log2.setActivity_type(ActivityType.ADD);
            log2.setEntity_type(EntityType.WORD);
            log2.setEntityId(word2.getId());
            ActivityLog log3 = new ActivityLog();
            log3.setUser(user);
            log3.setActivity_type(ActivityType.ADD);
            log3.setEntity_type(EntityType.WORD);
            log3.setEntityId(word3.getId());
            ActivityLog log4 = new ActivityLog();
            log4.setUser(user);
            log4.setActivity_type(ActivityType.ADD);
            log4.setEntity_type(EntityType.WORD);
            log4.setEntityId(word4.getId());
            ActivityLog log5 = new ActivityLog();
            log5.setUser(user);
            log5.setActivity_type(ActivityType.ADD);
            log5.setEntity_type(EntityType.WORD);
            log5.setEntityId(word5.getId());
            ActivityLog log6 = new ActivityLog();
            log6.setUser(user);
            log6.setActivity_type(ActivityType.ADD);
            log6.setEntity_type(EntityType.TEXT);
            log6.setEntityId(text1.getId());
            ActivityLog log7 = new ActivityLog();
            log7.setUser(user);
            log7.setActivity_type(ActivityType.ADD);
            log7.setEntity_type(EntityType.TEXT);
            log7.setEntityId(text2.getId());
            ActivityLog log8 = new ActivityLog();
            log8.setUser(user);
            log8.setActivity_type(ActivityType.ADD);
            log8.setEntity_type(EntityType.TEXT);
            log8.setEntityId(text3.getId());
            ActivityLog log9 = new ActivityLog();
            log9.setUser(user);
            log9.setActivity_type(ActivityType.ADD);
            log9.setEntity_type(EntityType.TEXT);
            log9.setEntityId(text4.getId());
            ActivityLog log10 = new ActivityLog();
            log10.setUser(user);
            log10.setActivity_type(ActivityType.ADD);
            log10.setEntity_type(EntityType.TEXT);
            log10.setEntityId(text5.getId());
            activityLogRepository.saveAll(List.of(log1, log2, log3, log4, log5, log6, log7, log8, log9, log10));
        };
    }
}
