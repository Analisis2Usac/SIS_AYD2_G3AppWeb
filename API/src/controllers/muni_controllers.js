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

module.exports = {
    get: get
}