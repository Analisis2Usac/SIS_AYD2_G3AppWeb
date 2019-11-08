const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM detalle_contrato', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id_contrato } = req.params;
    mysqlConnection.query('SELECT * FROM detalle_contrato WHERE id_contrato = ?', [id_contrato], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_contrato, fecha, id_empresa, id_servicio, id_pago, email } = req.body;

    const query = `CALL detalleAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_contrato, fecha, id_empresa, id_servicio, id_pago, email], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Detalle de Contrato Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { fecha, id_empresa, id_servicio, id_pago, email } = req.body;
    const { id_contrato } = req.params;

    const query = 'CALL detalleAddOrEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_contrato, fecha, id_empresa, id_servicio, id_pago, email], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Detalle de Contrato updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteDetalle = (req, res) => {
    const { id_contrato } = req.params;

    mysqlConnection.query('DELETE FROM detalle_contrato WHERE id_contrato = ?', [id_contrato], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Detalle de Contrato deleted!' });
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
    deleteDetalle: deleteDetalle
}