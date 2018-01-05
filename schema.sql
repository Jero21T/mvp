DROP DATABASE IF EXISTS dogdb;

CREATE DATABASE dogdb;

USE dogdb;

CREATE TABLE dogs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  PRIMARY KEY(ID)
);


-- INSERT INTO dogs (name,photo) VALUES ('ugly',"https:\/\/dog.ceo\/api\/img\/kelpie\/n02105412_4038.jpg");
