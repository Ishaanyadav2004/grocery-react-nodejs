const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'ishaan4504',
    database: 'grocery_shop',
};

const db = mysql.createConnection(dbConfig);

module.exports = db;