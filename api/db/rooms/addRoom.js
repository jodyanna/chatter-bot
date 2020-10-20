const db = require("../dbConnect");


exports.addRoom = (req, res) => {
  const sql = `INSERT INTO rooms (name) VALUES (?);`;
  db.query(sql, [req.body.room.name], err => {
    if (err) throw err;
    res.json({
      status: "200",
      message: "Insert room successful."
    });
  });
}