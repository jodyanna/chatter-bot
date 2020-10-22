const db = require("../dbConnect");


exports.addPost = (req, res) => {
  const sql = `INSERT INTO posts (content, room_id, user_id) VALUES (?, ?, ?);`;
  db.query(sql, [req.body.post, req.body.room.id, req.body.user.id], err => {
    if (err) throw err;
    res.json({
      status: "200",
      message: "Insert post successful."
    });
  });
}
