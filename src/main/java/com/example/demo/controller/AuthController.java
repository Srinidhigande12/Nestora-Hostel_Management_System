package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // 🔹 SIGNUP
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return authService.signup(user);
    }

    // 🔹 LOGIN
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return authService.login(user.getEmail(), user.getPassword());
    }

}