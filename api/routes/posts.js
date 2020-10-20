const express = require('express');
const router = express.Router();

const { addPost } = require('../db/posts/addPost');
const { getRandPosts } = require("../db/posts/getRandPosts");
const { getRecentPosts } = require('../db/posts/getRecentPosts');



router.get('/random', (req, res, next) => {
  getRandPosts(req, res);
});

router.post('/recent', (req, res, next) => {
  getRecentPosts(req, res);
});


router.post('/add', (req, res, next) => {
  addPost(req, res);
});


module.exports = router;