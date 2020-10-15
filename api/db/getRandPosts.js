const db = require('./dbConnect');

// Read single random post from database
exports.getRandPosts = (req, res) => {
  const sql = "SELECT post_text, post_date FROM posts ORDER BY RAND() LIMIT 10;";
  console.log(req.body.amount)
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get rand post successful."
    });
  });
}