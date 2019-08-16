const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM municipio', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM municipio WHERE id_municipio = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id, nombre } = req.body;

    const query = `CALL muniAddOrEdit(?, ?)`;

    mysqlConnection.query(query, [id, nombre], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Municipio Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;

    const query = 'CALL muniAddOrEdit (?, ?)';

    mysqlConnection.query(query, [id, nombre], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Municipio updated!' });
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    get: get,
    getOne: getOne,
    insert: insert,
    update: update
}