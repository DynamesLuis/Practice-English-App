package com.example.practiceEnglishApp.text;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TextRepository extends JpaRepository<Text, Long> {
    @Query("SELECT MAX(t.id) FROM Text t")
    Long findMaxId();
    Page<Text> findByTitleContaining(String title, Pageable pageable);
    Optional<Text> findFirstByIdGreaterThanEqual(Long id);
    Optional<Text> findFirstByOrderByIdAsc();
}
