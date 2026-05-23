package com.example.practiceEnglishApp.activityLog;

import com.example.practiceEnglishApp.dto.DashboardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/dashboard")
@RequiredArgsConstructor
public class ActivityController {
    private final ActivityService activityService;

    @GetMapping
    public DashboardResponse getDashboard() {
        return activityService.getDashboardData();
    }
}
