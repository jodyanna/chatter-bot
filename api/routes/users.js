const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  return res.send("Get request received.");
});

router.post('/', (req, res, next) => {
  return res.send("Post request received for /users.");
});

router.put('/:id', (req, res, next) => {
  return res.send(`Put request received for /users/${req.params.id}.`);
});

router.delete('/:id', (req, res, next) => {
  return res.send(`Delete request received for /users/${req.params.id}.`);
});


module.exports = router;
