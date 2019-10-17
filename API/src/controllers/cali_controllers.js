const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM calificacion', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id_calificacion } = req.params;
    mysqlConnection.query('SELECT * FROM calificacion WHERE id_calificacion = ?', [id_comentario], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_calificacion, calificacion, id_contrato } = req.body;

    const query = `CALL caliAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_calificacion, calificacion, id_contrato], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Calificacion Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { calificacion, id_contrato } = req.body;
    const { id_calificacion } = req.params;

    const query = 'CALL caliAddOrEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_calificacion, calificacion, id_contrato], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Calificacion updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteCali = (req, res) => {
    const { id_calificacion } = req.params;

    mysqlConnection.query('DELETE FROM comentario WHERE id_calificacion = ?', [id_calificacion], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Calificacion deleted!' });
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
    deleteCali: deleteCali
}