package com.villtuul.weddingsite.controller;

import java.util.List;
import com.villtuul.weddingsite.entity.Guest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.villtuul.weddingsite.links.GuestLinks;
import com.villtuul.weddingsite.service.GuestsService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/")
public class GuestsController {
	
	@Autowired
    GuestsService guestsService;
	
	@GetMapping(path = GuestLinks.LIST_GUESTS)
    public ResponseEntity<?> listGuests() {
        log.info("GuestsController:  list guests");
        List<Guest> resource = guestsService.getGuests();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = GuestLinks.ADD_GUEST)
	public ResponseEntity<?> saveGuest(@RequestBody Guest guest) {
        log.info("GuestsController:  list guest");
        Guest resource = guestsService.saveGuest(guest);
        return ResponseEntity.ok(resource);
    }
}
