const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  return res.send("Welcome to listen-bot API.");
});

router.post('/', (req, res, next) => {
  return res.send("Post request received.");
});

router.put('/', (req, res, next) => {
  return res.send("Put request received.");
});

router.delete('/', (req, res, next) => {
  return res.send("Delete request received.");
});


module.exports = router;
