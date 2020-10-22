const db = require("../dbConnect");


const sql = `CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255), 
  birth_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
  );
  INSERT INTO rooms (name, user_id) VALUES ('home', 1);
`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Rooms table created.");
})