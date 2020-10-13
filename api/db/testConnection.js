const connection = require("./dbConnect");

connection.connect(err => {
  if (err) throw err;
  console.log("Connection successful.")
});