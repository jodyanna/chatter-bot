const db = require("../dbConnect");
const bcrypt = require("bcrypt");


exports.getUser = (req, res) => {
  const sql = `SELECT * FROM users WHERE name=?;`;
  db.query(sql, [req.body.user.name], (err, data) => {
    if (err) throw err;
    if (data.length < 1) res.status(401).send('Unauthorized')
    else if (bcrypt.compareSync(req.body.user.password, data[0]["password"])) {
      res.json({
        status: "200",
        user: data,
        message: "Get user successful."
      })
    }
    else res.status(401).send('Unauthorized')
  });

}