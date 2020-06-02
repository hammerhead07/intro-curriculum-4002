'use strict';
const express = require('express');
const router = express.Router();

router.get('/:input', (req, res, next) => {
  res.send(req.params.input);
});

module.exports = router;