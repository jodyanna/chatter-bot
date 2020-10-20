const db = require("../dbConnect");


const sql = `CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255), 
  date DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  INSERT INTO rooms VALUES ('no_name');
`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Rooms table created.");
})