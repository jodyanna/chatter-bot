const express = require('express');
const router = express.Router();

const { addPost } = require('../db/addPost');


router.post('/', (req, res, next) => {
  addPost(req, res);
});

module.exports = router;