package com.example.demo.service;

import com.example.demo.model.Fees;
import com.example.demo.model.FeesRequest;
import com.example.demo.model.Resident;
import com.example.demo.repository.FeesRepository;
import com.example.demo.repository.ResidentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FeesService {

    private final FeesRepository feesRepository;
    private final ResidentRepository residentRepository;

    public FeesService(FeesRepository feesRepository, ResidentRepository residentRepository) {
        this.feesRepository = feesRepository;
        this.residentRepository = residentRepository;
    }

    public Fees addFee(FeesRequest request) {

        Resident resident = residentRepository.findById(request.getResidentId())
                .orElseThrow(() -> new RuntimeException("Resident not found"));

        Fees fee = new Fees();
        fee.setAmount(request.getAmount());
        fee.setResident(resident);
        fee.setStatus("PENDING");

        return feesRepository.save(fee);
    }

    public List<Fees> getAllFees() {
        return feesRepository.findAll();
    }

    public Fees payFee(Long id) {
        Fees fee = feesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Fee not found"));

        fee.setStatus("PAID");
        fee.setPaidDate(LocalDateTime.now());

        return feesRepository.save(fee);
    }
}