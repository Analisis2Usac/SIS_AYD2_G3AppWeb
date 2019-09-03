const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM video', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { id_video } = req.params;
    mysqlConnection.query('SELECT * FROM video WHERE id_video = ?', [id_video], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { id_video, ruta_video, id_empleado } = req.body;

    const query = `CALL videoAddOrEdit(?, ?, ?)`;

    mysqlConnection.query(query, [id_video, ruta_video, id_empleado], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Video Saved!' });
        } else {
            console.log(err);
        }
    });
}

const update = (req, res) => {
    const { ruta_video, id_empleado } = req.body;
    const { id_video } = req.params;

    const query = 'CALL videoAddOrEdit (?, ?, ?)';

    mysqlConnection.query(query, [id_video, ruta_video, id_empleado], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Video updated!' });
        } else {
            console.log(err);
        }
    });
}

const deleteVideo = (req, res) => {
    const { id_video } = req.params;

    mysqlConnection.query('DELETE FROM video WHERE id_video = ?', [id_video], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Video deleted!' });
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
    deleteVideo: deleteVideo
}