var request = require("request");

const host = process.env.HOST;
const port = process.env.PORT;

//este metodo consume la api de login
const loginWeb = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var tipousuario = req.body.tipousuario;

    var options = {
        method: 'POST',
        url: `http://${host}:${port}/loginApi`,
        qs: { id: email, pass: password },

    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        var estado_login = JSON.parse(body);//al consumir la api , devuelve OK si el usuario existe 

        if (estado_login == 'OK') {

        //1 Usuario Comprador
        //2 Usuario Oferente de Servicio
        //3 Usuario Empresa oferente de servicios

            if (tipousuario == '1') {
                res.redirect('catalog-page');
            }else{}



        } else {
            res.render('login.html', { credenciales: 'incorrect' });
        }







    });







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
    loginWeb: loginWeb
}