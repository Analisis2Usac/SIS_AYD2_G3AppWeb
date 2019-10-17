const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { email } = req.params;
    mysqlConnection.query('SELECT * FROM usuario WHERE email = ?', [email], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { email, password, dpi, nombre, apellido, direccion, telefono, zona, latitud, longitud, id_muni } = req.body;

    const query = `CALL usuAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    mysqlConnection.query(query, [email, password, dpi, nombre, apellido, direccion, telefono, zona, latitud, longitud, id_muni], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { password, dpi, nombre, apellido, direccion, telefono, zona, latitud, longitud, id_muni } = req.body;
    const { email } = req.params;

    const query = 'CALL usuAddOrEdit (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    mysqlConnection.query(query, [email, password, dpi, nombre, apellido, direccion, telefono, zona, latitud, longitud, id_muni], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteUsu = (req, res) => {
    const { email } = req.params;

    mysqlConnection.query('DELETE FROM usuario WHERE email = ?', [email], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario deleted!' });
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    get: get,
    getOne: getOne,
    insert: insert,
    update: update,
    deleteUsu: deleteUsu
}