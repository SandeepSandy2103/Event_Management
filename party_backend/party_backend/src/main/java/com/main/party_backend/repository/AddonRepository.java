package com.main.party_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.party_backend.model.AddonModel;

public interface AddonRepository extends JpaRepository<AddonModel,Integer> {

}
