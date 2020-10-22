const db = require("../dbConnect");


exports.addRoom = (req, res) => {
  const sql = `INSERT INTO users (name) VALUES (?);`;
  db.query(sql, [req.body.user.name], err => {
    if (err) throw err;
    res.json({
      status: "200",
      message: "Insert user successful."
    });
  });
}