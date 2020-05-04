const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'temp',
    password: 'a200562031',
});

module.exports = pool.promise();
