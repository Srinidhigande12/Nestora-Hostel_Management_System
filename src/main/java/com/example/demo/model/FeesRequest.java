package com.example.demo.model;

public class FeesRequest {

    private double amount;
    private Long residentId;

    // GETTERS

    public double getAmount() {
        return amount;
    }

    public Long getResidentId() {
        return residentId;
    }

    // SETTERS

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setResidentId(Long residentId) {
        this.residentId = residentId;
    }
}