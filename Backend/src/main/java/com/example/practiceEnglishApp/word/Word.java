package com.example.practiceEnglishApp.word;

import com.example.practiceEnglishApp.definition.Definition;
import com.example.practiceEnglishApp.examples.Example;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table
public class Word {
    @Id
    @SequenceGenerator(
            name = "word_sequence",
            sequenceName = "word_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "word_sequence"
    )

    private long id;
    private String word;
    @OneToMany(mappedBy="word")
    private Set<Definition> definitions = new HashSet<>();
    @OneToMany(mappedBy = "word")
    private Set<Example> examples = new HashSet<>();

    public Word() {

    }

    public Word(long id, String word) {
        this.id = id;
        this.word = word;
    }

    public Word(String word) {
        this.word = word;
    }

    public long getId() {
        return id;
    }

    public String getWord() {
        return word;
    }

    public Set<Definition> getDefinitions() {
        return definitions;
    }
    public Set<Example> getExamples() {
        return examples;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public void setDefinitions(Set<Definition> definitions) {
        this.definitions = definitions;
    }

    public void setExamples(Set<Example> examples) {
        this.examples = examples;
    }

    public void addDefinition(Definition definition) {
        definitions.add(definition);
        definition.setWord(this);
    }

    public void removeDefinition(Definition definition) {
        definitions.remove(definition);
        definition.setWord(null);
    }

    public void addExample(Example example) {
        examples.add(example);
        example.setWord(this);
    }

    public void removeExample(Example example) {
        examples.remove(example);
        example.setWord(null);
    }

    @Override
    public String toString() {
        return "Word{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", definitions=" + definitions +
                ", examples=" + examples +
                '}';
    }
}
