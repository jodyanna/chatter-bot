const db = require("./dbConnect");

// Add post to database
exports.addPost = (req, res) => {
  const sql = `INSERT INTO posts (content) VALUES (?);`;
  db.query(sql, [req.body.post], err => {
    if (err) throw err;
    res.json({
      status: "200",
      message: "Insert post successful."
    });
  });

}
