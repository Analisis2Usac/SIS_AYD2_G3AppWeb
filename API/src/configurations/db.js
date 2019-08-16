const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'mysql-4291-0.cloudclusters.net',
    port: '10017',
    user: 'root_ayd2',
    password: 'ayd2_g3',
    database: 'sis_db'
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected!');
    }
});

module.exports = mysqlConnection;