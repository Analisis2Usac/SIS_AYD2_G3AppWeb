const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM empresa', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM empresa WHERE id_empresa = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_empresa, nit, nombre, direccion, telefono, zona, latitud, longitud, id_municipio, email, password } = req.body;

    const query = `CALL empresaAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    mysqlConnection.query(query, [id_empresa, nit, nombre, direccion, telefono, zona, latitud, longitud, id_municipio, email, password], (err, rows, fields) => {
        if (!err) {
            res.json("Empresa Saved");
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { nit, nombre, direccion, telefono, zona, latitud, longitud, id_municipio, email, password } = req.body;
    const { id_empresa } = req.params;

    const query = 'CALL empresaAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    mysqlConnection.query(query, [id_empresa, nit, nombre, direccion, telefono, zona, latitud, longitud, id_municipio, email, password], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empresa updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteEmp = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM empresa WHERE id_empresa = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Empresa deleted!' });
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
    deleteEmp: deleteEmp
}