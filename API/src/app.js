const express = require('express');
const { json } = require('express');

const path = require('path');
const bodyParser = require('body-parser');


const muniRoutes = require('./routes/municipio_routes');
const usuRoutes = require('./routes/usuario_routes');
const videoRoutes = require('./routes/video_routes');
const comenRoutes = require('./routes/comentario_routes');
const caliRoutes = require('./routes/calificacion_routes');
const formaRoutes = require('./routes/forma_routes');
const detalleRoutes = require('./routes/detalle_routes');
const categoryRoutes = require('./routes/category_routes');
const serviceRoutes = require('./routes/service_routes');
const listserviceRoutes = require('./routes/list-service_routes');
const subscriptionRoutes = require('./routes/subscription_routes');
const empresaRoutes = require('./routes/empresa_routes');
const empleadoRoutes = require('./routes/empleado_routes');
const photoRoutes = require('./routes/photo_routes');
const docRoutes = require('./routes/doc_routes');

const sitioWeb = require('./routes/sitio_routes');






const app = express();
//settings
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);//decimos que usaremos la sintaxis y extension html , pero con el motor de plantillas ejs incluido
app.set ('views',path.join(__dirname,'views'));//establecemos la ubicacion de la carpeta view de nuestro proyecto
app.set('view engine', 'ejs');  //decimos que usaremos el motor de plantillas ejs

//static files
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(json());

//routes
app.use("/municipio", muniRoutes);
app.use("/usuario", usuRoutes);
app.use("/video", videoRoutes);
app.use("/comentario", comenRoutes);
app.use("/calificacion", caliRoutes);
app.use("/formapago", formaRoutes);
app.use("/detalle", detalleRoutes);
app.use("/categoria", categoryRoutes);
app.use("/servicio", serviceRoutes);
app.use("/lista-servicio", listserviceRoutes);
app.use("/suscripcion", subscriptionRoutes);
app.use("/empresa", empresaRoutes);
app.use("/empleado", empleadoRoutes);
app.use("/foto", photoRoutes);
app.use("/documento", docRoutes);
app.use(require('./routes/sitio_routes'));


module.exports = app;