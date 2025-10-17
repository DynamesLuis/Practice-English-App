package com.example.practiceEnglishApp.word;

import com.example.practiceEnglishApp.definition.Definition;
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

    public void setId(long id) {
        this.id = id;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public void setDefinitions(Set<Definition> definitions) {
        this.definitions = definitions;
    }

    @Override
    public String toString() {
        return "Word{" +
                "id=" + id +
                ", word='" + word + '\'' +
                '}';
    }
}
