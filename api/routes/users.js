const express = require('express');
const router = express.Router();

const { addUser } = require('../db/users/addUser');
const { getUser } = require("../db/users/getUser");
const { getUserPosts } = require("../db/users/getUserPosts");
const { getUserRooms } = require("../db/users/getUserRooms");
const { getAllUsersName } = require("../db/users/getAllUsersName");


router.get('/all', (req, res, next) => {
  getAllUsersName(req, res);
});

router.post('/', (req, res, next) => {
  getUser(req, res);
});

router.post('/signup', (req, res, next) => {
  addUser(req, res);
});

router.post('/posts', (req, res, next) => {
  getUserPosts(req, res);
});

router.post('/rooms', (req, res, next) => {
  getUserRooms(req, res);
});


module.exports = router;
