package com.example.practiceEnglishApp.text;

import jakarta.persistence.*;

@Entity
@Table
public class Text {
    @Id
    @SequenceGenerator(
            name = "text_sequence",
            sequenceName = "text_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "text_sequence"
    )

    private long id;
    private String title;
    private String text;

    public Text() {

    }

    public Text(long id,
                String title,
                String text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }

    public Text(String title,
                String text) {
        this.title = title;
        this.text = text;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public String getTitle() {
        return title;
    }

    @Override
    public String toString() {
        return "Text{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}
