const db = require("./dbConnect");


const sql = `CREATE TABLE posts (
  post_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  content VARCHAR(255), 
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  room_id INT,
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
  );
`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Posts table created.");
})