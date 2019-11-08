const mysql = require('mysql');

let env = process.env.NODE_ENV || 'development';
let mysqlConnection;
let db = '';

if (env == "development") {
    mysqlConnection = mysql.createConnection({
        host: 'mysql-4291-0.cloudclusters.net',
        port: '10017',
        user: 'root_ayd2',
        password: 'ayd2_g3',
        database: 'sis_db'
    });
    db = 'production';
} else {
    mysqlConnection = mysql.createConnection({
        host: 'mysql-4291-0.cloudclusters.net',
        port: '10017',
        user: 'root_ayd2',
        password: 'ayd2_g3',
        database: 'sis_db'
    });
    db = 'test';
}

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        // console.log('DB is connected! ' + db);
    }
});

module.exports = mysqlConnection;