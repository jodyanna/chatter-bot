const db = require('./dbConnect');

// Read single random post from database
exports.getRecentPosts = (req, res) => {
  const sql = "SELECT * FROM posts ORDER BY post_date DESC;";
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get recent post successful."
    });
  });
}