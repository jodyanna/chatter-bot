const db = require("../dbConnect");
const bcrypt = require("bcrypt");


exports.addUser = (req, res) => {
  bcrypt.hash(req.body.user.password, 10, (err, hash) => {
    const sql = `INSERT INTO users (name, password, email) VALUES (?, ?, ?);`;
    db.query(sql, [req.body.user.name, hash, req.body.user.email], err => {
      if (err) throw err;
      res.json({
        status: "200",
        message: "Insert user successful."
      });
    });
  });
}