const express = require('express');
var http = require('http');
var Request = require("request");
const host = process.env.HOST;
const port = process.env.PORT;

const MostrarCategoria = (req, res) => {
    const optionsGetuser = {
        url: `http://${host}:${port}/categoria`,
        method: 'GET'
    };

    Request.get(optionsGetuser, (error, response, body) => { //se consume la api categoria
        if (error) {
            res.render('error-page.html', Alerta());
            return console.dir(error);
        } else {
            categoria = JSON.parse(body); //obtenemos las categorias existentes en formato json
            res.render('category-page.html', categoria);
        }
    }


    )
};


const MostrarServicios = (req, res) => {
    const optionsGetuser = {
        url: `http://${host}:${port}/servicio`,
        method: 'GET'
    };

    Request.get(optionsGetuser, (error, response, body) => { //se consume la api categoria
        if (error) {
            res.render('error-page.html', Alerta());
            return console.dir(error);
        } else {
            servicio = JSON.parse(body); //obtenemos las categorias existentes en formato json
            res.render('catalog-page.html', servicio);
        }
    }


    )
};


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
    MostrarCategoria: MostrarCategoria,
    MostrarServicios: MostrarServicios,
}