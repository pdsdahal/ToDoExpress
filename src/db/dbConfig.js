const mysql = require('mysql');
require('dotenv').config();

const { HOSTNAME, DBUSER, DBPASSWORD, DATABASENAME } = process.env;


const connection = mysql.createConnection({
    host: HOSTNAME,
    user: DBUSER,
    password: DBPASSWORD,
    database: DATABASENAME
});


connection.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log('Database connected Successfully!');
    }
});


module.exports = connection;