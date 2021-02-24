const db = require('../dbConnect');

/**
 * Selects all posts from database ordered randomly.
 * @module getRandPosts
 * @param {object} req
 * @param {object} res
 */
exports.getRandPosts = (req, res) => {
  const sql = "SELECT * FROM posts ORDER BY RAND();";
  db.query(sql, [], (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: "200",
      posts: data,
      message: "Get rand post successful."
    });
  });
}