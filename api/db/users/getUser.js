const db = require("../dbConnect");


exports.getUser = (req, res) => {
  const sql = `SELECT * FROM users WHERE name=? AND password=?;`;
  db.query(sql, [req.body.user.name, req.body.user.password], (err, data) => {
    if (err) throw err;
    res.json({
      status: "200",
      user: data,
      message: "Get user successful."
    });
  });
}