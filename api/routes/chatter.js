const express = require('express');
const router = express.Router();

const { getRandPost } = require("../db/getRandPost");


router.get('/', (req, res, next) => {
  getRandPost(req, res);
});

module.exports = router;