require('dotenv').config({path: __dirname + '../bin/.env'});
const mysql = require('mysql2');

if (process.env.DB_PORT == null) console.log("env variables are undefined.")

const conn = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  port: process.env.DB_PORT,
  dateStrings: true,
  timezone : "+00:00"
});

conn.connect(err => {
  if (err) throw err;
  console.log("Connected to db successfully.")
});

module.exports = conn;