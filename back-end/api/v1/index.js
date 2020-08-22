const express = require('express');
const url = require('./url.js');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('<h1>API v1 Home</h1>');
});

router.use('/url', url);

module.exports = router;