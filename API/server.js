var app = require('express')(); // Express App include
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
const ip = 127.17.0.2;//process.env.IP;
const usr = 'daniel';//process.env.USR;
const pass = 'daniel';//process.env.PASS;
var connection = mysql.createConnection({ // Mysql Connection
    host : ip,
    user : usr,
    password : pass,
    database : 'company',
   // insecureAuth : true,
   // socketPath: '/var/run/mysqld/mysqld.sock',
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/', (req, res) => {
    res.send('Probando si funciona esta cosa\n');
  });

// fetch all users from users table in DB.
app.get('/todos',function(req,res){
    var data = {
        "error":true,
        "Users":""
    };

    connection.query("SELECT * from employees",function(err, rows, fields){
        if(rows.length != 0){
            res.json(rows);
        }else{
            data["error"] = true;
            data["Users"] = 'No users Found..';
            res.json(data);
        }
    });
});

// agregar un nuevo empleado
app.post('/nuevo',function(req,res){
    var a1 = req.body.nombre;
    var a2 = req.body.apellido;
    var a3 = req.body.depto;
    var a4 = req.body.email;
    var data = {
        "error":true,
        "Message":""
    };

    if(!!a1 && !!a2 && !!a3 && !!a4){
        connection.query("INSERT INTO employees (first_name, last_name, department, email) VALUES (?, ?, ?, ?)",[a1,a2,a3,a4],function(err, rows, fields){
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
        data["Message"] = "Error: Faltan campos: " + a1 + ", " + a2 + ", " + a3 + "," + a4;
        res.json(data);
    }
});

app.listen(3000, function(){
    console.log('Connected & Listen to port 3000');
});
