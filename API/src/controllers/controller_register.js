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
    const { email, empresa, nit, telefono, ciudad, direccion, password, passwordconfirm } = req.body;

    if (password !== passwordconfirm) {
        //si son diferentes se llama a una funcion que retorna un mensaje de alerta y se envia a la vista

        res.render('registration-service.html', { estado: "incorrectpassword", message: Alerta("La contraseña no coincide", "warning") });
    } else {
        //SI SON IGUALES CONTINUAMOS CON EL REGISTRO
        //Verificamos que el correo o el nit ingresado no exista 
        var options = {
            method: 'GET',
            url: `http://${host}:${port}/empresa`,
        };

        Request(options, function (error, response, body) {
            if (error) throw new Error(error);

            var empresa_busqueda = JSON.parse(body); //obtenemos las empresas existentes y las almacenamos en una variable con formato json
            var encontrado = "";
            for (var i = 0; i <= empresa_busqueda.length - 1; i++) {

                if (empresa_busqueda[i].email == email) {
                    encontrado = "si" //si encuentra a la empresa se detiene el ciclo
                    break;
                } else {
                    encontrado = "no"
                }

            }

            if (encontrado == "si") {
                res.render('registration-service.html', { estado: "existing_email", message: Alerta("Ya existe una cuenta con este email", "warning") });

            } else {

                //Si el usuario no existe , se procede con el registro

                //API que registra una nueva empresa
                var options = {
                    method: 'POST',
                    url: `http://${host}:${port}/empresa`,
                    headers:
                        { 'content-type': 'application/json' },
                    body:
                    {
                        id_empresa: 0,
                        nit: nit,
                        nombre: empresa,
                        direccion: direccion,
                        telefono: telefono,
                        zona: "1",
                        latitud: "0",
                        longitud: "0",
                        id_municipio: "1",
                        email: email,
                        password: password
                    },
                    json: true
                };

                Request(options, function (error, response, body) {
                    if (error) throw new Error(error);


                   
                    //si la api devuelve Empresa Saved , el registro se ha realizado correctamente

                   if (body== 'Empresa Saved') {
                        res.render('registration-service.html', { estado: "Successful", message: Alerta("Registro exitoso , porfavor ingrese a su cuenta", "success") });
                    } else {
                        res.render('registration-service.html', { estado: "NoSuccessful", message: Alerta("Error al Registrarse , porfavor intentelo de nuevo", "danger") });
                    }

                });
                

            }

        });

    }


}



function Alerta(message, tipo) {

    var estructura = `
        <div class="alert text-center bg-${tipo} border rounded shadow" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button><span class="text-light">
            <strong>${message}!&nbsp;</strong></span>
        </div>`;

    return estructura;
}


module.exports = {
    crearRegistroComprador: crearRegistroComprador,
    crearRegistroServicio: crearRegistroServicio

}