const db = require('./dbConnect');

// Read single random post from database
exports.getRecentPosts = (req, res) => {
  const sql = `SELECT content, date FROM posts WHERE room_id=(?) ORDER BY date DESC;`;
  db.query(sql, [req.body.room.id], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get recent post successful."
    });
  });
}