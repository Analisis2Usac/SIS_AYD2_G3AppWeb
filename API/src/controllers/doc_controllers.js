const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM documento', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM documento WHERE id_documento = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_documento, documento, id_empleado } = req.body;

    const query = `CALL docAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_documento, documento, id_empleado], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Documento Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { documento, id_empleado } = req.body;
    const { id_documento } = req.params;

    const query = 'CALL docAddOrEdit(?, ?, ?)';

    mysqlConnection.query(query, [id_documento, documento, id_empleado], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Documento updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteDoc = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM documento WHERE id_documento = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Documento deleted!' });
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
    deleteDoc: deleteDoc
}