const express = require('express');
const { json } = require('express');

const muniRoutes = require('./routes/municipio_routes');

const app = express();

//middlewares
app.use(json());

//routes
app.use("/municipio", muniRoutes);

module.exports = app;