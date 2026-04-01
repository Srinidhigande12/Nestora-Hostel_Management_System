package com.example.demo.controller;

import com.example.demo.model.Resident;
import com.example.demo.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/residents")
@CrossOrigin
public class ResidentController {

    @Autowired
    private ResidentRepository residentRepository;

    // ✅ GET ALL RESIDENTS
    @GetMapping
    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }

    // ✅ ADD RESIDENT (SIMPLE VERSION)
    @PostMapping
    public Resident addResident(@RequestBody Resident resident) {
        return residentRepository.save(resident);
    }
}