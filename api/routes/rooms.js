const express = require('express');
const router = express.Router();

const { getAllRooms } = require('../db/rooms/getAllRooms');
const { addRoom } = require('../db/rooms/addRoom');


router.get('/all', (req, res, next) => {
  getAllRooms(req, res);
});

router.post('/add', (req, res, next) => {
  addRoom(req, res);
});

module.exports = router;