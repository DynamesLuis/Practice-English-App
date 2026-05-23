package com.example.practiceEnglishApp.text;

import com.example.practiceEnglishApp.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TextRepository extends JpaRepository<Text, Long> {
    @Query("SELECT MAX(t.id) FROM Text t WHERE t.user = :user")
    Long findMaxIdByUser(@Param("user") User user);
    Page<Text> findByUser(User user, Pageable pageable);
    Page<Text> findByUserAndTitleContainingIgnoreCase(User user, String title, Pageable pageable);
    Optional<Text> findFirstByUserAndIdGreaterThanEqual(User user,Long id);
    Optional<Text> findFirstByUserOrderByIdAsc(User user);
    Optional<Text> findByIdAndUser(Long id, User user);
    int countByUserId(Long userId);
}
