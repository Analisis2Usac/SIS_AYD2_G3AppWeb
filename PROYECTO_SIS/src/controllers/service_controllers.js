const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM servicio', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM servicio WHERE id_categoria = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_servicio, nombre, id_categoria } = req.body;

    const query = `CALL serviceAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_servicio, nombre, id_categoria], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Servicio Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { nombre, id_categoria } = req.body;
    const { id_servicio } = req.params;

    const query = 'CALL serviceAddOrEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_servicio, nombre, id_categoria], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Servicio updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteServ = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM servicio WHERE id_servicio = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Servicio deleted!' });
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
    deleteServ: deleteServ
}