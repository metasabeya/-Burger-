// MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

}else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'enguMY@2019',
    database: 'todoagain_db'
  })
};
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "enguMY@2019",
//   database: "burgers_db"
// });


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   //console.log("connected as id: " + connection.threadId);
// });


connection.connect();
// Export connection for ORM 
module.exports = connection;
