const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});


router.get('/login', (req, res) => {
    res.render('login.html');
});


router.get('/registration', (req, res) => {
    res.render('registration.html');
});


router.post('/createRegister', (req, res) => {
    var email=req.body.email;
    var password=req.body.password;
    var passwordconfirm=req.body.passwordconfirm;

    res.send(`Correo:${email},Password:${password},PasswordRepeat:${passwordconfirm}`);
});
module.exports = router;