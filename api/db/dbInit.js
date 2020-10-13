const db = require("./dbConnect");

// Create 'posts' table
const sql = `CREATE TABLE posts (post_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, post_text VARCHAR(255), post_date 
  DATETIME DEFAULT CURRENT_TIMESTAMP);`;

db.query(sql, err => {
  if (err) throw err;
  console.log("Table created.");
})