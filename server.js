
// Require/import the HTTP module
var express = require("express");
var http = require("http");
var mysql = require("mysql");
var fs = require("fs");

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("assets"))



// home page route
app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "index.html"));
  });
// create account route
app.get("/create", function(req, res) {
  res.sendFile(path.join(__dirname, "create.html"))
});
// login route
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "login.html"))
});

// thinking we will have todo a connection to push data in and then pull it out 
// DB Connection
var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "sportsCorner",
      port: 3306,
  });
 
  connection.connect(function (err) {
      console.log("connected as id " + connection.threadId)
      afterConnection()
  });  

  function afterConnection() {

    connection.query('SELECT * FROM loginInfo', function (err, res) {
      if (err) throw err;

      console.log(res)

      connection.end()
    })

  }

  



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });