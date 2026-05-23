package com.example.practiceEnglishApp.activityLog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface ActivityLogRepository extends JpaRepository<ActivityLog, Long> {
    @Query("""
            SELECT COUNT(a)
            FROM ActivityLog a
            WHERE a.user.id = :userId
            AND a.activity_type = :type
            AND a.createdAt >= :startOfDay
            """)
    long countTodayActivity(@Param("userId") Long userId,
                            @Param("startOfDay") LocalDateTime startOfDay,
                            @Param("type") ActivityType type);
    @Query("""
            SELECT DISTINCT DATE(a.createdAt)
            FROM ActivityLog a
            WHERE a.user.id = :userId
            AND a.activity_type = :type
            ORDER BY DATE(a.createdAt) DESC
            """)
    List<LocalDate> findActiveDays(@Param("userId") Long userId,
                                   @Param("type") ActivityType type);
    @Query("""
            SELECT COUNT(DISTINCT a.entityId)
            FROM ActivityLog a
            WHERE a.user.id = :userId
            AND a.activity_type = :type
            AND a.entity_type = :entityType
            """)
    int countDistinctTextsRead(@Param("userId") Long userId,
                               @Param("type") ActivityType type,
                               @Param("entityType")EntityType entityType);
    List<ActivityLog> findTop5ByUserIdOrderByCreatedAtDesc(Long userId);

}
