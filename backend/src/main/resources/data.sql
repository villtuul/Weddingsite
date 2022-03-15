DROP TABLE IF EXISTS GUEST;
CREATE TABLE GUEST (
                      id INT AUTO_INCREMENT  PRIMARY KEY,
                      first_name VARCHAR(50),
                      last_name VARCHAR(50),
                      is_participating BIT,
                      message VARCHAR(400),
                      createdt TIMESTAMP
);

insert into guest (first_name, last_name,is_participating,message,createdt)
values ('Ville','Testaaja',1,'Moikkamoi',CURRENT_TIMESTAMP()),
       ('Kaisa','Kokki',1,'Heiheihei',CURRENT_TIMESTAMP()),
       ('Joulu','Pukki',1,'Joojoojoo',CURRENT_TIMESTAMP()),
       ('Muumi','Peikko',1,'Nåniin',CURRENT_TIMESTAMP());