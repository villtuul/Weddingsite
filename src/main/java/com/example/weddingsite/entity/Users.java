package com.example.weddingsite.entity;

import javax.persistence.*;


import lombok.Data;

@Entity
@Data
public class Users {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
    private int id;

    @Column
    private String firstName;
    
    @Column
    private String lastName;
    
    @Column
    private String message;

    @Column
    private boolean isParticipating;

}
