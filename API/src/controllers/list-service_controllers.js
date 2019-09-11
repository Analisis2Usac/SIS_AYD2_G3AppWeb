const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM lista_servicio', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id, id2 } = req.params;
    mysqlConnection.query('SELECT * FROM lista_servicio WHERE id_empresa = ? AND id_servicio = ?', [id, id2], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_empresa, id_servicio, precio } = req.body;

    const query = `CALL list_serviceAdd(?, ?, ?)`;

    mysqlConnection.query(query, [id_empresa, id_servicio, precio], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Lista Servicio Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { precio } = req.body;
    const { id_empresa, id_servicio } = req.params;

    const query = 'CALL list_serviceEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_empresa, id_servicio, precio], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Lista Servicio updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteListServ = (req, res) => {
    const { id, id2 } = req.params;

    mysqlConnection.query('DELETE FROM lista_servicio WHERE id_empresa = ? AND id_servicio = ?', [id, id2], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Lista Servicio deleted!' });
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
    deleteListServ: deleteListServ
}