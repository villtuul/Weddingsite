package com.villtuul.weddingsite.repository;

import com.villtuul.weddingsite.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface GuestsRepository extends JpaRepository<Guest, Integer>, JpaSpecificationExecutor<Guest>{}
