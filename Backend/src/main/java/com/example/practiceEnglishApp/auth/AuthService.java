package com.example.practiceEnglishApp.auth;

import com.example.practiceEnglishApp.dto.AuthResponse;
import com.example.practiceEnglishApp.dto.LoginRequest;
import com.example.practiceEnglishApp.dto.RegisterRequest;
import com.example.practiceEnglishApp.jwt.JwtService;
import com.example.practiceEnglishApp.user.Role;
import com.example.practiceEnglishApp.user.User;
import com.example.practiceEnglishApp.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
       authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
       UserDetails user = userRepository.findByUsername(request.getUsername()).orElseThrow();
       String token = jwtService.getToken(user);
       return AuthResponse.builder()
               .token(token)
               .build();
    }

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}
