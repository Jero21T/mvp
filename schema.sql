DROP DATABASE IF EXISTS dogdb;

CREATE DATABASE dogdb;

USE dogdb;

CREATE TABLE breeds (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  PRIMARY KEY(ID)
);

CREATE TABLE urls (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(510),
  PRIMARY KEY(ID)
)





-- INSERT INTO dogs (name,photo) VALUES ('ugly',"https:\/\/dog.ceo\/api\/img\/kelpie\/n02105412_4038.jpg");
