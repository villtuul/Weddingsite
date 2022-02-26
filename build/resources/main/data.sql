DROP TABLE IF EXISTS users;

CREATE TABLE users (
                       id INT PRIMARY KEY,
                       FIRST_NAME VARCHAR(250) NOT NULL,
                       LAST_NAME VARCHAR(250) NOT NULL,
                       NOTES VARCHAR(250),
                       IS_PARTICIPATING INT
);

INSERT INTO users (ID, FIRST_NAME, LAST_NAME, NOTES, IS_PARTICIPATING) VALUES
                                                         (1, 'isparticipating1', 'last 1', 'asdfasdf', 1),
                                                         (2, 'notparticipating1', 'last 2', 'gadfgfdgdfg', 0),
                                                         (3, 'isparticipating2', 'last 3', '',1);