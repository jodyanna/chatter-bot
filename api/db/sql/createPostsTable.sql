CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  content VARCHAR(255), 
  birth_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  room_id INT,
  user_id INT,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);