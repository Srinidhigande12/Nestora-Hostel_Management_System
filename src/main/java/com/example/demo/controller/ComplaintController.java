package com.example.demo.controller;

import com.example.demo.model.Complaint;
import com.example.demo.service.ComplaintService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/complaint")
@CrossOrigin
public class ComplaintController {

    private final ComplaintService service;

    public ComplaintController(ComplaintService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public Complaint add(@RequestBody Complaint c) {
        return service.addComplaint(c);
    }

    @GetMapping("/all")
    public List<Complaint> getAll() {
        return service.getAll();
    }

    @PutMapping("/update/{id}")
    public Complaint update(@PathVariable Long id, @RequestParam String status) {
        return service.updateStatus(id, status);
    }
}