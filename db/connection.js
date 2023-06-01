require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'web',
    port: '3306',
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('DB 연결');
});

module.exports = connection;