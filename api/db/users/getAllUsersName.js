const db = require("../dbConnect");

exports.getAllUsersName = (req, res) => {
  const sql = `SELECT name FROM users;`;
  db.query(sql, [], (err, data) => {
    if (err) throw err;
    res.json({
      status: "200",
      names: data,
      message: "Get user successful."
    });
  });
}