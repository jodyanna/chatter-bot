const db = require('./dbConnect');

// Read single random post from database
exports.getRecentPosts = (req, res) => {
  const sql = "SELECT content, date FROM posts ORDER BY date DESC;";
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get recent post successful."
    });
  });
}