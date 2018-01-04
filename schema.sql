DROP DATABASE IF EXISTS dogdb;

CREATE DATABASE dogdb;

USE dogdb;

CREATE TABLE dogs (
  id int NOT NULL AUTO_INCREMENT,
  photo varchar(500),
  PRIMARY KEY(ID)
);


INSERT INTO dogs (photo) VALUES ("https:\/\/dog.ceo\/api\/img\/kelpie\/n02105412_4038.jpg");
