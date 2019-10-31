const express = require('express');
const router = express.Router();
const sitio_controller = require('../controllers/sitio_controller');
const cargar_vistas = require('../controllers/carga_datos_a_vista');


router.get('/', (req, res) => {
    res.render('index.html');
});


router.get('/prueba', (req, res) => {
    
    
    console.log(process.env.HOST);
    console.log(process.env.PORT);
});



router.get('/login', (req, res) => {
    res.render('login.html');
});


router.get('/register-ind', (req, res) => {
    res.render('registration-individual.html');
});

router.get('/catalog-page', (req, res) => {
    res.render('catalog-page.html');
});

router.get('/category-page',cargar_vistas.MostrarCategoria);

router.get('/register-comp', (req, res) => {
    res.render('registration-company.html');
});

router.get('/registration', (req, res) => {
    res.render('registration.html');
});

router.post('/createRegister',sitio_controller.crearRegistro);

module.exports = router;

