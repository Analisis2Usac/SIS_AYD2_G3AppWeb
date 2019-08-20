const express = require('express');
const { json } = require('express');

const muniRoutes = require('./routes/municipio_routes');
const categoryRoutes = require('./routes/category_routes');
const serviceRoutes = require('./routes/service_routes');
const listserviceRoutes = require('./routes/list-service_routes');

const app = express();

//middlewares
app.use(json());

//routes
app.use("/municipio", muniRoutes);
app.use("/categoria", categoryRoutes);
app.use("/servicio", serviceRoutes);
app.use("/lista-servicio", listserviceRoutes);

module.exports = app;