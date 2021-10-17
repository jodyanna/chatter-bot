const db = require("../dbConnect");

exports.getAllUsersName = (req, res) => {
  const sql = `SELECT name, id FROM users;`;
  db.query(sql, [], (err, data) => {
    if (err) throw err;
    res.json({
      status: "200",
      body: data,
      message: "Get user successful."
    });
  });
}