const express = require('express');
const router = express.Router();

const login = require('../controllers/controller_login_web');
const controller_register = require('../controllers/controller_register');
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




router.get('/register-service', (req, res) => {
    res.render('registration-service.html');
});

/*router.get('/register-comp', (req, res) => {
    res.render('registration-company.html');
});
*/
router.get('/registration', (req, res) => {
    res.render('registration.html');
});

/*router.get('/catalog-page/', (req, res) => {
    res.render('catalog-page.html');
});
*/

router.get('/pricing', (req, res) => {
    res.render('pricing.html');
});


router.get('/about-us', (req, res) => {
    res.render('about-us.html');
});

/*router.get('/category_page', (req, res) => {
    res.render('category_page');
});

router.get('/category-page/:id', (req, res) => {

    res.send(req.params.id);
});*/


/*router.get('/category-page/:id', (req, res) => {

    res.send(req.params.id);


});
*/



//POST
router.post('/createRegister',controller_register.crearRegistroComprador);
router.post('/register-service',controller_register.crearRegistroServicio);
router.post('/login',login.loginWeb);

router.get('/category-page',cargar_vistas.MostrarCategoria);
router.get('/catalog-page',cargar_vistas.MostrarServicios);
router.get('/category-page/:id',cargar_vistas.MostrarServiciosPorCategoria);


module.exports = router;

