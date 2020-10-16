const express = require('express');
const router = express.Router();

const { addPost } = require('../db/addPost');
const { getRandPosts } = require("../db/getRandPosts");



router.get('/rand-posts', (req, res, next) => {
  getRandPosts(req, res);
});

router.post('/add', (req, res, next) => {
  addPost(req, res);
});


module.exports = router;