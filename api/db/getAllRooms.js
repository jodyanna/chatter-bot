const db = require('./dbConnect');


exports.getAllRooms = (req, res) => {
  const sql = "SELECT name FROM rooms ORDER BY date DESC;";
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get all room names successful."
    });
  });
}