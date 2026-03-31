package com.example.demo.repository;

import com.example.demo.model.Fees;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeesRepository extends JpaRepository<Fees, Long> {
}