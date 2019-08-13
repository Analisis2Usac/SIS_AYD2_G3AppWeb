var app = require('express')(); // Express App include
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
const ip = process.env.IP;
const usr = process.env.USR;
const pass = process.env.PASS;
const db_name = process.env.DB_NAME;
const port_num = process.env.DB_PORT;
var connection = mysql.createConnection({ // Mysql Connection
    host : ip,
    user : usr,
    password : pass,
    database : db_name,
    port : port_num,
   // insecureAuth : true,
   // socketPath: '/var/run/mysqld/mysqld.sock',
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/', (req, res) => {
    res.send('Probando si funciona esta cosa\n');
  });


/*
    **************************************************************************
    ******************************** EMPRESAS ********************************
    **************************************************************************
 */
// Obtiene todas las empresas asociadas al sistema.
app.get('/Empresa/Todos',function(req,res){
    var data = {
        "error":true,
        "Empresa":""
    };

    connection.query("SELECT * from empresa",function(err, rows, fields){
        if(rows.length != 0){
            res.json(rows);
        }else{
            data["error"] = true;
            data["Empresa"] = 'No se encontró ninguna empresa';
            res.json(data);
        }
    });
});

// Agregar una nueva empresa
app.post('/Empresa/Nueva',function(req,res){
    var a1 = req.body.nit;
    var a2 = req.body.nombre;
    var a3 = req.body.direccion;
    var a4 = req.body.telefono;
    var a5 = req.body.zona;
    var a6 = req.body.latitud;
    var a7 = req.body.logitud;
    var a8 = req.body.municipio;
    var a9 = req.body.email;
    var a10 = req.body.password;
    var data = {
        "error":true,
        "Message":""
    };

    if(!!a1 && !!a2 && !!a3 && !!a4 && !!a5 && !!a6 && !!a7 && !!a8 && !!a9 && !!a10){
        connection.query("INSERT INTO empresa (nit, nombre, direccion, telefono, zona, latitud, longitud, id_municipio, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10],function(err, rows, fields){
            if(!!err){
                data["Message"] = "Error: No se pudo ingresar";
            }else{
                data["error"] = false;
                data["Message"] = "Exito";
            }
            res.json(data);
        });
    }else{
        data["error"] = true;
        data["Message"] = "Error: Faltan campos: " + a1 + ", " + a2 + ", " + a3 + "," + a4 + ", " + a5 + ", " + a6 + ", " + a7 + "," + a8 + ", " + a9 + ", " + a10;
        res.json(data);
    }
});

// Obtener una empresa por su id
app.get('/Empresa/:eid',function(req,res){
    const eid = req.params.eid;
    var data = {
        "error":true,
        "Empresa":""
    };
    
    connection.query('SELECT * FROM empresa where uid = "' + eid +'"',function(err, rows, fields){
        if(rows.length != 0){
            data["error"] = false;
            data["Empresa"] = rows;
            res.json(data);
        }else{
            data["error"] = true;
            data["Empresa"] = 'No se encontró la empresa ' + eid;
            res.json(data);
        }
    });
});

// Actualizar información de la empresa
app.put('/Empresa/Actualizar',function(req,res){
    var Mid = req.body.mid;
    var Message = req.body.message;
    var Uid = 1;
    var data = {
        "error":true,
        "Message":""
    };
    
    if(!!Mid && !!Message && !!Uid){
        connection.query("Update messages SET message =? where mid =? and uid_fk =?",[Message,Mid,Uid],function(err, rows, fields){
            if(!!err){
                data["Message"] = "Error Updating Message Data for User " + Uid;
            }else{
                data["error"] = false;
                data["Message"] = "Updated Message Successfully";
            }
            res.json(data);
        });
    }else{
        data["error"] = true;
        data["Message"] = "Please provide all required data (i.e :Mid, Message, Uid)";
        res.json(data);
    }
});

app.put('/employees', function (req, res) {
    connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //rest api to delete record from mysql database
app.delete('/Empresa', function (req, res) {
    console.log(req.body);
    connection.query("DELETE FROM empresa WHERE id=?", [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

app.listen(3000, function(){
    console.log('Connected & Listen to port 3000');
});
