const db = require("../dbConnect");

/**
 * Adds post to database.
 * @module addPost
 * @param {Object} req - Request form data.
 * @param {object} res
 */
exports.addPost = (req, res) => {
  const sql = `INSERT INTO posts (content, room_id, user_id) VALUES (?, ?, ?);`;
  db.query(sql, [req.body.post, req.body.roomID, req.body.userID], err => {
    if (err) throw err;
    res.json({
      status: "200",
      message: "Insert post successful."
    });
  });
}
