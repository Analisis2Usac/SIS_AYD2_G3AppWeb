const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM forma_pago', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id_pago } = req.params;
    mysqlConnection.query('SELECT * FROM forma_pago WHERE id_pago = ?', [id_pago], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_pago, forma } = req.body;

    const query = `CALL formaAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_pago, forma], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Forma de Pago Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { forma } = req.body;
    const { id_pago } = req.params;

    const query = 'CALL formaAddOrEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_pago, forma], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Forma de Pago updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteForma = (req, res) => {
    const { id_pago } = req.params;

    mysqlConnection.query('DELETE FROM forma_pago WHERE id_pago = ?', [id_pago], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Forma de Pago deleted!' });
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
    deleteForma: deleteForma
}