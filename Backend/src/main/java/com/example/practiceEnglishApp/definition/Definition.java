package com.example.practiceEnglishApp.definition;

import com.example.practiceEnglishApp.word.Word;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table
public class Definition {
    @Id
    @SequenceGenerator(
            name = "definition_sequence",
            sequenceName = "definition_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "definition_sequence"
    )

    private long id;
    private String definition;
    @ManyToOne
    @JoinColumn(name = "word_id", nullable = false)
    @JsonIgnore
    private Word word;

    public Definition() {

    }

    public Definition(long id,
                      String definition,
                      Word word) {
        this.id = id;
        this.definition = definition;
    }

    public Definition(String definition,
                      Word word) {
        this.definition = definition;
    }

    public Definition(String definition) {
        this.definition = definition;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public Word getWord() {
        return word;
    }

    public void setWord(Word word) {
        this.word = word;
    }

    @Override
    public String toString() {
        return "Definition{" +
                "id=" + id +
                ", definition='" + definition + '\'' +
                ", word=" + word +
                '}';
    }
}
