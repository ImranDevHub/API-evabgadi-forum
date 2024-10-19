const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10
});

module.exports = connection.promise();
