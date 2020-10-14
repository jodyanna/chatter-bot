const db = require('./dbConnect');

// Read single random post from database
exports.getRandPost = (req, res) => {
  const sql = "SELECT post_text, post_date FROM posts ORDER BY RAND() LIMIT 1;";
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      post: data[0],
      message: "Get rand post successful."
    });
  });
}