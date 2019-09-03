const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM comentario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id_comentario } = req.params;
    mysqlConnection.query('SELECT * FROM comentario WHERE id_comentario = ?', [id_comentario], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_comentario, comentario, id_contrato } = req.body;

    const query = `CALL comenAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_comentario, comentario, id_contrato], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Comentario Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { comentario, id_contrato } = req.body;
    const { id_comentario } = req.params;

    const query = 'CALL comenAddOrEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_comentario, comentario, id_contrato], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Comentario updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteComen = (req, res) => {
    const { id_comentario } = req.params;

    mysqlConnection.query('DELETE FROM comentario WHERE id_comentario = ?', [id_comentario], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Comentario deleted!' });
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
    deleteComen: deleteComen
}