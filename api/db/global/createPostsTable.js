const db = require("../dbConnect");


const sql = `CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  content VARCHAR(255), 
  birth_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  room_id INT,
  user_id INT,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
  );
`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Posts table created.");
})