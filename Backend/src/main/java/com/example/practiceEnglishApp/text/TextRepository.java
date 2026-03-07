package com.example.practiceEnglishApp.text;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TextRepository extends JpaRepository<Text, Long> {
    @Query("SELECT MAX(t.id) FROM Text t")
    Long findMaxId();
    Optional<Text> findByTitle(String title);
    Optional<Text> findFirstByIdGreaterThanEqual(Long id);
    Optional<Text> findFirstByOrderByIdAsc();
}
