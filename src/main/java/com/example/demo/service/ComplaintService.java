package com.example.demo.service;

import com.example.demo.model.Complaint;
import com.example.demo.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public Complaint addComplaint(Complaint c) {
        c.setStatus("PENDING");
        return complaintRepository.save(c);
    }

    public List<Complaint> getUserComplaints(String username) {
        return complaintRepository.findByUsername(username);
    }

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }
}