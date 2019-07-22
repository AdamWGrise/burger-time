CREATE DATABASE burgerdb;

USE burgerdb;

CREATE TABLE burgers
(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN,
    date_devoured TIMESTAMP,
    PRIMARY KEY (id)
);
