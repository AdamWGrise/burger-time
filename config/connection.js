var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "aiur1j8rk0f4wtvi",
  password: "em0f5gtn6kxd0kr7",
  database: "q63aj1zpw3udvgfj"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
