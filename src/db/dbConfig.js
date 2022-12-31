const mysql = require('mysql')

const hostname = 'localhost';
const dbuser = 'sqluser';
const dbPassword = 'password';
const databaseName = 'canteen';

const connection = mysql.createConnection({
    host: hostname,
    user: dbuser,
    password: dbPassword,
    database: databaseName
});


connection.connect((error) => {
    if (error) {
        throw error;
    } else {
        console.log('Database connected Successfully!');
    }
});


module.exports = connection;