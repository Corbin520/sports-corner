

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
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // testing

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





// DB Connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Oct0ber1st!",
  database: "sportsCorner",
  port: 3306,
});

connection.connect(function (err) {
  console.log("connected as id " + connection.threadId)
  afterConnection()
});  

// Takes the data from our login form
app.post('/handler', function (req, res) {

  // taking and sending our data
  // console.log(req.body.firstName);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var password = req.body.password

console.log("F: " + firstName, "L: " + lastName, "E: " + email, "P: " + password)

  // res.send(req.body);

  connection.query('INSERT INTO loginInfo', VALUES(firstName, lastName, email, password), function (err, res) {
    if (err) throw err;
  })

});

function afterConnection() {

// connection.query('INSERT INTO loginInfo VALUES("test2","test3", "test4", "test5")', function (err, res) {
//   if (err) throw err;

// })



connection.query('SELECT * from loginInfo', function (err, res) {
  if (err) throw err;

  console.log(res)

  connection.end()
})

}

  

// Start Server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });