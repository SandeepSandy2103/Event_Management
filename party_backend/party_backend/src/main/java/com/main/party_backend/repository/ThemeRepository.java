package com.main.party_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.party_backend.model.ThemeModel;

public interface ThemeRepository extends JpaRepository<ThemeModel,Integer> {

}
