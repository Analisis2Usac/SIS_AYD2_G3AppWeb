const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM suscripcion', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM suscripcion WHERE id_suscripcion = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_suscripcion, total, fecha_inicio, fecha_final, limite_servicios, id_empresa } = req.body;

    const query = `CALL subscriptionAddOrEdit(?, ?, ?, ?, ?, ?)`;

    mysqlConnection.query(query, [id_suscripcion, total, fecha_inicio, fecha_final, limite_servicios, id_empresa], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Suscripción Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { total, fecha_inicio, fecha_final, limite_servicios, id_empresa } = req.body;
    const { id_suscripcion } = req.params;

    const query = 'CALL subscriptionAddOrEdit (?, ?, ?, ?, ?, ?)';

    mysqlConnection.query(query, [id_suscripcion, total, fecha_inicio, fecha_final, limite_servicios, id_empresa], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Suscripción updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteSubs = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM suscripcion WHERE id_suscripcion = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Suscripción deleted!' });
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
    deleteSubs: deleteSubs
}