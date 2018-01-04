DROP DATABASE IF EXISTS dinofarm;

CREATE DATABASE dinofarm;

USE dinofarm;

CREATE TABLE dinosaurs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  type varchar(100) NOT NULL,
  PRIMARY KEY(ID)
);


INSERT INTO dinosaurs (name,type) VALUES ('Trex', 'carnivor');
INSERT INTO dinosaurs (name,type) VALUES ('Iguanodon', 'herbivor');
INSERT INTO dinosaurs (name,type) VALUES ('Blabladon', 'carnivor');
INSERT INTO dinosaurs (name,type) VALUES ('Megalosaurus', 'herbivor');