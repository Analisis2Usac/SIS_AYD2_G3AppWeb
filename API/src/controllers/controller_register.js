const express = require('express');
var http = require('http');
var Request = require("request");
const host = process.env.HOST;
const port = process.env.PORT;


const crearRegistroComprador = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var passwordconfirm = req.body.passwordconfirm;
    //comprobamos que las contraseñas coincidan
    if (password !== passwordconfirm) {
        //si son diferentes redige a una pagina de error
        res.render('error-page.html', {
            title: "Contraseñas dispajeras",
            message: "Debe ingresar la misma contraseña en ambos campos",
            enlace: "registration",
            button: "Volver a registro"
        });
    } else {
        //si son iguales , continua el flujo y realiza una consulta a la api para ver si el usuario existe
        const optionsGetuser = {
            url: `http://${host}:${port}/usuario`,
            method: 'GET'
        };


        Request.get(optionsGetuser, (error, response, body) => { //se consume la api usuarios
            if (error) {
                res.render('error-page.html', Alerta());
                return console.dir(error);
            } else {
                users = JSON.parse(body); //obtenemos los usuarios existentes y lo almacenamos en una variable con formato json
                var contenido = "";
                for (var i = 0; i <= users.length - 1; i++) {

                    if (users[i].email == email) {
                        contenido = "si" //si encuentra el usuario se detiene el ciclo
                        break;
                    } else {
                        contenido = "no"
                    }

                }
                //si el usuario existe no dejar realizar el registro
                if (contenido == "si") {

                    res.render('error-page.html', {
                        title: "Error al registrar",
                        message: "Ya existe un usuario con este nombre , porfavor intente con un nuevo usuario",
                        enlace: "registration",
                        button: "Volver a registro"
                    });


                } else {
                    //si el usuario no existe dejar realizar el registro , 
                    const optionsInsertUser = {
                        url: `http://${host}:${port}/usuario`,
                        method: 'POST',
                        json: {
                            "email": email,
                            "password": password,
                            "id_muni": "1"
                        }
                    };


                    Request.post(optionsInsertUser, (error, response, body) => {
                        if (error) {
                            res.render('error-page.html', Alerta())
                            return console.dir(error);
                        } else {
                            res.render('error-page.html', {
                                title: "Registro exitoso",
                                message: "El usario fue registrado exitosamente , porfavor ingrese a su cuenta",
                                enlace: "login",
                                button: "Ingresar"
                            });

                        }
                    })




                }



            }
        })



    }


}



const crearRegistroServicio = (req, res) => {
    var email = req.body.email;
    var empresa = req.body.empresa;
    var nit = req.body.nit;
    var telefono = req.body.telefono;
    var ciudad = req.body.ciudad;
    var direccion = req.body.direccion;
    var password = req.body.password;
    var passwordconfirm = req.body.passwordconfirm;


    if (password !== passwordconfirm) {
        //si son diferentes se muestra un mensaje de alerta
        res.render('registration-service.html', {estado: "incorrectpassword",message:"La contraseña no coincide"});
    } else {

        //SI SON IGUALES CONTINUAMOS CON EL REGISTRO
        res.send('iguales')       ;


    }
    
    
}



function Alerta(title, message, enlace, button) {
    var error = {
        title: "Error en la info.",
        message: "No existe información para mostrar",
        enlace: "registration",
        button: "Volver a registro"
    }
    return error;
}


module.exports = {
    crearRegistroComprador: crearRegistroComprador,
    crearRegistroServicio:crearRegistroServicio
    
}