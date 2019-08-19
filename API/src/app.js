const express = require('express');
const { json } = require('express');

const muniRoutes = require('./routes/municipio_routes');
const usuRoutes = require('./routes/usuario_routes');
const videoRoutes = require('./routes/video_routes');
const comenRoutes = require('./routes/comen_routes');

const app = express();

//middlewares
app.use(json());

//routes
app.use("/municipio", muniRoutes);
app.use("/usuario", usuRoutes);
app.use("/video", videoRoutes);
app.use("/comentario", comenRoutes);

module.exports = app;