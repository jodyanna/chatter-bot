CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  email VARCHAR(255),
  birth_date DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (name, password) VALUES ('admin', 'hifriends');
INSERT INTO users (name, password) VALUES ('anonymous', 'password');