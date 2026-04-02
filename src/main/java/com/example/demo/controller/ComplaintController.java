package com.example.demo.controller;

import com.example.demo.model.Complaint;
import com.example.demo.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/complaints")
@CrossOrigin
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @PostMapping
    public Complaint add(@RequestBody Complaint c) {
        return complaintService.addComplaint(c);
    }

    @GetMapping("/{username}")
    public List<Complaint> getUser(@PathVariable String username) {
        return complaintService.getUserComplaints(username);
    }

    @GetMapping
    public List<Complaint> all() {
        return complaintService.getAllComplaints();
    }
}