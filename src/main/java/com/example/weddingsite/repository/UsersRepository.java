package com.example.weddingsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.weddingsite.entity.Users;

@RepositoryRestResource()
public interface UsersRepository extends JpaRepository<Users, Integer>, JpaSpecificationExecutor<Users>{}
