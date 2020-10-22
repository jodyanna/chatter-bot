const db = require('../dbConnect');


exports.getRecentPosts = (req, res) => {
  const sql = `SELECT content, birth_date FROM posts WHERE room_id=(?) ORDER BY birth_date DESC;`;
  db.query(sql, [req.body.room.id], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get recent post successful."
    });
  });
}