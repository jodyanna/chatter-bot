const db = require("../dbConnect");


exports.getUserPosts = (req, res) => {
  const sql = `SELECT content FROM posts WHERE user_id=?;`;
  db.query(sql, [req.body.user.id], (err, data) => {
    if (err) throw err;
    res.json({
      status: "200",
      user: data,
      message: "Get user successful."
    });
  });
}