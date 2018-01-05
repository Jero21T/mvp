DROP DATABASE IF EXISTS dogdb;

CREATE DATABASE dogdb;

USE dogdb;

CREATE TABLE breeds (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100),
  PRIMARY KEY(id),
  UNIQUE(name)
);



CREATE TABLE urls (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(510),
  breed_id int, 
  PRIMARY KEY(id),
  UNIQUE(url)
)

-- ALTER TABLE urls ADD UNIQUE (
-- url 
-- );



-- INSERT INTO dogs (name,photo) VALUES ('ugly',"https:\/\/dog.ceo\/api\/img\/kelpie\/n02105412_4038.jpg");
