require('dotenv').config();
const mysql = require('mysql2');

console.log(require('dotenv').config())

const conn = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : "",
  database : process.env.DB_NAME,
  port: process.env.DB_PORT
});


module.exports = conn;
