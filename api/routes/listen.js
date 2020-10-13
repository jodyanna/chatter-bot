const express = require('express');
const router = express.Router();

const { addPost } = require('../db/addPost');


router.post('/', (req, res, next) => {
  addPost(req, res);
  return res.send(res.message);
});

module.exports = router;