package com.example.weddingsite.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.weddingsite.entity.Users;
import com.example.weddingsite.repository.UsersRepository;

@Component
public class UsersService {
	
	private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public Users saveUser(Users users) {
    	return usersRepository.save(users);
    }

}
