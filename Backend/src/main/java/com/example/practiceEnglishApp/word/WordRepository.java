package com.example.practiceEnglishApp.word;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
    @Query("SELECT MAX(w.id) FROM Word w")
    Long findMaxId();
    Optional<Word> findByWord(String word);
    Optional<Word> findFirstByIdGreaterThanEqual(Long id);
    Optional<Word> findFirstByOrderByIdAsc();
}
