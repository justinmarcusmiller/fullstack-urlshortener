const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const router = express.Router();
const app = express();

require('dotenv').config();
const api = require('./api/v1/index.js');
const middlewares = require('./middlewares');

app.use(express.json());

app.get('/', (req,res) => {
  res.json({
    message: 'You are home.'
  });
});

app.use('/api/v1', api);

module.exports = app;