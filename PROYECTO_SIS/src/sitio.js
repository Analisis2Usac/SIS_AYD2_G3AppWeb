const express=require('express');
const app=express();
const path = require('path');
const bodyParser = require('body-parser');


app.set('host','0.0.0.0');
app.set('port','3000');

//settings
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);//decimos que usaremos la sintaxis y extension html , pero con el motor de plantillas ejs incluido
app.set ('views',path.join(__dirname,'views'));//establecemos la ubicacion de la carpeta view de nuestro proyecto
app.set('view engine', 'ejs');  //decimos que usaremos el motor de plantillas ejs



//static files
app.use(express.static(path.join(__dirname, 'public')));




//Rutas
app.use(require('./routes/routes'));


app.listen(app.get('port'),app.get('host'),()=>{
console.log(`Running on http://${app.get('host')}:${app.get('port')}`);
//console.log(__dirname);
});