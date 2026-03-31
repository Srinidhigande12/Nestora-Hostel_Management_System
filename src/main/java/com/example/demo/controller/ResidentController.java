package com.example.demo.controller;

import com.example.demo.model.Resident;
import com.example.demo.service.ResidentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resident")
@CrossOrigin // 🔥 IMPORTANT for frontend later
public class ResidentController {

    private final ResidentService residentService;

    public ResidentController(ResidentService residentService) {
        this.residentService = residentService;
    }

    // 🔹 ADD RESIDENT
    @PostMapping("/add")
    public Resident addResident(@RequestBody Resident resident) {
        return residentService.saveResident(resident);
    }

    // 🔹 GET ALL RESIDENTS
    @GetMapping("/all")
    public List<Resident> getAllResidents() {
        return residentService.getAllResidents();
    }

    // 🔹 GET RESIDENT BY ID (NEW)
    @GetMapping("/{id}")
    public Resident getResidentById(@PathVariable Long id) {
        return residentService.getResidentById(id);
    }

    // 🔹 DELETE RESIDENT (NEW)
    @DeleteMapping("/delete/{id}")
    public String deleteResident(@PathVariable Long id) {
        residentService.deleteResident(id);
        return "Resident deleted successfully";
    }
}