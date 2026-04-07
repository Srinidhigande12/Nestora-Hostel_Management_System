package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    // ✅ SIGNUP
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        try {
            return ResponseEntity.ok(authService.signup(user));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // ✅ FIX
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Signup failed");
        }
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(
                authService.login(user.getUsername(), user.getPassword())
            );
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // ✅ FIX
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Login failed");
        }
    }
}