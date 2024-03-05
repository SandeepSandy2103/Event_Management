package com.main.party_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.party_backend.model.EventModel;


public interface EventRepository extends JpaRepository<EventModel,Integer> {

}
