package com.example.practiceEnglishApp.examples;

import com.example.practiceEnglishApp.word.Word;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table
public class Example {
    @Id
    @SequenceGenerator(
            name = "example_sequence",
            sequenceName = "example_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "example_sequence"
    )

    private long id;
    private String example;
    @ManyToOne
    @JoinColumn(name = "word_id", nullable = false)
    @JsonIgnore
    private Word word;

    public Example() {

    }

    public Example(String example,
                   Word word) {
        this.example = example;
        this.word = word;
    }

    public Example(String example) {
        this.example = example;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getExample() {
        return example;
    }

    public void setExample(String example) {
        this.example = example;
    }

    public Word getWord() {
        return word;
    }

    public void setWord(Word word) {
        this.word = word;
    }

    @Override
    public String toString() {
        return "Example{" +
                "id=" + id +
                ", example='" + example + '\'' +
                ", word=" + word +
                '}';
    }
}
