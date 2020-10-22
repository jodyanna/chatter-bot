const db = require("../dbConnect");


exports.getUserRooms = (req, res) => {
  const sql = `SELECT name FROM rooms WHERE user_id=?;`;
  db.query(sql, [req.body.user.id], (err, data) => {
    if (err) throw err;
    res.json({
      status: "200",
      user: data,
      message: "Get user successful."
    });
  });
}