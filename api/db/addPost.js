const db = require("./dbConnect");

// Add post to database
exports.addPost = (req, res) => {
  const sql = `INSERT INTO posts (post_text) VALUES (?);`;
  db.query(sql, [req.body.post], err => {
    if (err) throw err;
  });
}
