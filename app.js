const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const api = require('./api/v1/index.js');

require('dotenv').config();


app.use(express.json());

app.use('/api/v1', api);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

app.get('/', (req,res) => {
  res.send('<h1>Backend Home</h1>');
});