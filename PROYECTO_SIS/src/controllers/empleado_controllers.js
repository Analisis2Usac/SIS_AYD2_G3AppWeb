const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM trabajador', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM trabajador WHERE id_empleado = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_empleado, id_empresa, email } = req.body;

    const query = `CALL trabajadorAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_empleado, id_empresa, email], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { id_empresa, email } = req.body;
    const { id_empleado } = req.params;

    const query = 'CALL trabajadorAddOrEdit(?, ?, ?)';

    mysqlConnection.query(query, [id_empleado, id_empresa, email], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteEmpl = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM trabajador WHERE id_empleado = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Empleado deleted!' });
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
    deleteEmpl: deleteEmpl
}