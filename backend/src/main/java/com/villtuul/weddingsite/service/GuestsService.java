package com.villtuul.weddingsite.service;

import java.util.List;

import com.villtuul.weddingsite.entity.Guest;
import org.springframework.stereotype.Component;

import com.villtuul.weddingsite.repository.GuestsRepository;

@Component
public class GuestsService {
	
	private GuestsRepository guestsRepository;

    public GuestsService(GuestsRepository guestsRepository) {
        this.guestsRepository = guestsRepository;
    }

    public List<Guest> getGuests() {
        return guestsRepository.findAll();
    }

    public Guest saveGuest(Guest guest) {
    	return guestsRepository.save(guest);
    }

}
