package com.example.demo.service;

import com.example.demo.model.Resident;
import com.example.demo.repository.ResidentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResidentService {

    private final ResidentRepository residentRepository;

    public ResidentService(ResidentRepository residentRepository) {
        this.residentRepository = residentRepository;
    }

    // 🔹 SAVE RESIDENT
    public Resident saveResident(Resident resident) {
        return residentRepository.save(resident);
    }

    // 🔹 GET ALL RESIDENTS
    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }

    // 🔹 GET RESIDENT BY ID (UPDATED)
    public Resident getResidentById(Long id) {
        return residentRepository.findById(id).orElse(null);
    }

    // 🔹 DELETE RESIDENT
    public void deleteResident(Long id) {
        residentRepository.deleteById(id);
    }
}