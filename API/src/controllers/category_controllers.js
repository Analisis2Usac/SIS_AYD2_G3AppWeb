const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM categoria', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM categoria WHERE id_categoria = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_categoria, nombre } = req.body;

    const query = `CALL categoryAddOrEdit(?, ?)`;

    mysqlConnection.query(query, [id_categoria, nombre], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Categoría Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { nombre } = req.body;
    const { id_categoria } = req.params;

    const query = 'CALL categoryAddOrEdit (?, ?)';

    mysqlConnection.query(query, [id_categoria, nombre], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Categoría updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteCate = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM categoria WHERE id_categoria = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Categoría deleted!' });
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
    deleteCate: deleteCate
}