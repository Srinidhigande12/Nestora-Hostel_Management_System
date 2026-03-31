package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long complaintId;

    private String description;

    private String status;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "resident_id")
    private Resident resident;

    public Complaint() {
        this.createdAt = LocalDateTime.now();
        this.status = "OPEN";
    }

    public Long getComplaintId() {
        return complaintId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public Resident getResident() {
        return resident;
    }

    public void setResident(Resident resident) {
        this.resident = resident;
    }
}