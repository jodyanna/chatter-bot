const db = require("../dbConnect");


const sql = `CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255), 
  date DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  INSERT INTO users (name) VALUES ('admin');
  INSERT INTO users (name) VALUES ('anonymous');
`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Rooms table created.");
})