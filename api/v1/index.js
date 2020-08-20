const express = require('express');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('<h1>API v1 Home</h1>');
});

module.exports = router;