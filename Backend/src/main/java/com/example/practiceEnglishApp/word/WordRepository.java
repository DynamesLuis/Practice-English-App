package com.example.practiceEnglishApp.word;

import com.example.practiceEnglishApp.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
    @Query("SELECT MAX(w.id) FROM Word w WHERE w.user = :user")
    Long findMaxIdByUser(@Param("user") User user);
    Page<Word> findByUser(User user, Pageable pageable);
    Page<Word> findByUserAndWordContainingIgnoreCase(User user,String word, Pageable pageable);
    Optional<Word> findFirstByUserAndIdGreaterThanEqual(User user, Long id);
    Optional<Word> findFirstByUserOrderByIdAsc(User user);
    Optional<Word> findByIdAndUser(Long id, User user);
    int countByUserId(Long userId);
    List<Word> findTop5ByUserIdOrderByCreatedAtDesc(Long userId);
}
