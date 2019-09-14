const express = require('express');
const { json } = require('express');

const muniRoutes = require('./routes/municipio_routes');
const categoryRoutes = require('./routes/category_routes');
const serviceRoutes = require('./routes/service_routes');
const listserviceRoutes = require('./routes/list-service_routes');
const subscriptionRoutes = require('./routes/subscription_routes');
const empresaRoutes = require('./routes/empresa_routes');
const empleadoRoutes = require('./routes/empleado_routes');
const photoRoutes = require('./routes/photo_routes');
const docRoutes = require('./routes/doc_routes');

const app = express();

//middlewares
app.use(json());

//routes
app.use("/municipio", muniRoutes);
app.use("/categoria", categoryRoutes);
app.use("/servicio", serviceRoutes);
app.use("/lista-servicio", listserviceRoutes);
app.use("/suscripcion", subscriptionRoutes);
app.use("/empresa", empresaRoutes);
app.use("/empleado", empleadoRoutes);
app.use("/foto", photoRoutes);
app.use("/documento", docRoutes);

module.exports = app;