const db = require('../dbConnect');


exports.getAllRooms = (req, res) => {
  const sql = "SELECT * FROM rooms ORDER BY birth_date DESC;";
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      rooms: data,
      message: "Get all room names successful."
    });
  });
}