package com.example.practiceEnglishApp.text;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TextRepository extends JpaRepository<Text, Long> {

    Optional<Text> findByTitle(String title);
}
