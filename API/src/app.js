const express = require('express');
const { json } = require('express');

const app = express();

//middlewares
app.use(json());

//routes

module.exports = app;