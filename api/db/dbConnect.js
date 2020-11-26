require('dotenv').config({path: '../bin/.env'});
const mysql = require('mysql2');

const conn = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  port: process.env.DB_PORT,
  dateStrings: true,
  timezone : "+00:00"
});

module.exports = conn;