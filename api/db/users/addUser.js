const db = require("../dbConnect");


exports.addUser = (req, res) => {
  const sql = `INSERT INTO users (name, password, email) VALUES (?, ?, ?);`;
  db.query(sql, [req.body.user.name, req.body.user.password, req.body.user.email], err => {
    if (err) throw err;
    res.json({
      status: "200",
      message: "Insert user successful."
    });
  });
}