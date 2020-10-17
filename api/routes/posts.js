const express = require('express');
const router = express.Router();

const { addPost } = require('../db/addPost');
const { getRandPosts } = require("../db/getRandPosts");
const { getRecentPosts } = require('../db/getRecentPosts');



router.get('/random', (req, res, next) => {
  getRandPosts(req, res);
});

router.get('/recent', (req, res, next) => {
  getRecentPosts(req, res);
});



router.post('/add', (req, res, next) => {
  addPost(req, res);
});


module.exports = router;