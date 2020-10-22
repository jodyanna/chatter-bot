const db = require("../dbConnect");


const sql = `CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  email VARCHAR(255),
  birth_date DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  INSERT INTO users (name, password) VALUES ('admin', ${process.env.DB_ADMIN_PW});
  INSERT INTO users (name, password) VALUES ('anonymous', 'password');
`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Users table created.");
})