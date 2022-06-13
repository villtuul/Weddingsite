package com.villtuul.weddingsite.entity;

import javax.persistence.*;

import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Guest {
	
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

    @Basic(optional = false)
    @Column(name = "createdt", insertable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdt;

}
