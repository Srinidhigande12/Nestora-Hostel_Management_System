package com.example.demo.controller;

import com.example.demo.model.Fees;
import com.example.demo.model.FeesRequest;
import com.example.demo.service.FeesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fees")
@CrossOrigin
public class FeesController {

    private final FeesService feesService;

    public FeesController(FeesService feesService) {
        this.feesService = feesService;
    }

    @PostMapping
    public Fees addFee(@RequestBody FeesRequest request) {
        return feesService.addFee(request);
    }

    @GetMapping
    public List<Fees> getAllFees() {
        return feesService.getAllFees();
    }

    @PutMapping("/pay/{id}")
    public Fees payFee(@PathVariable Long id) {
        return feesService.payFee(id);
    }
}