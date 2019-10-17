const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM foto', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM foto WHERE id_foto = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_foto, ruta, id_empleado } = req.body;

    const query = `CALL fotoAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_foto, ruta, id_empleado], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Foto Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { ruta, id_empleado } = req.body;
    const { id_foto } = req.params;

    const query = 'CALL fotoAddOrEdit(?, ?, ?)';

    mysqlConnection.query(query, [id_foto, ruta, id_empleado], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Foto updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteFoto = (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM foto WHERE id_foto = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Foto deleted!' });
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
    deleteFoto: deleteFoto
}