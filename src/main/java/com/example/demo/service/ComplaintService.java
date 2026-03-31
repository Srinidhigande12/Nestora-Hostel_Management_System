package com.example.demo.service;

import com.example.demo.model.Complaint;
import com.example.demo.repository.ComplaintRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {

    private final ComplaintRepository repo;

    public ComplaintService(ComplaintRepository repo) {
        this.repo = repo;
    }

    public Complaint addComplaint(Complaint c) {
        return repo.save(c);
    }

    public List<Complaint> getAll() {
        try {
            return repo.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return List.of();
        }
    }

    public Complaint updateStatus(Long id, String status) {
        Complaint c = repo.findById(id).orElseThrow();
        c.setStatus(status);
        return repo.save(c);
    }
}