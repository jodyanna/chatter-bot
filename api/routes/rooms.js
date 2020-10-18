const express = require('express');
const router = express.Router();

const { getAllRooms } = require('../db/getAllRooms');


router.get('/all', (req, res, next) => {
  getAllRooms(req, res);
});


module.exports = router;