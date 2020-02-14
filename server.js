
// DEPENDENCIES
var express = require("express");
var mysql = require("mysql");
var express = require("express");
var path = require("path");

// SETS UP THE EXPRESS APP
var app = express();
var PORT = 3001;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/assets", express.static("assets"))


// ROUTES
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/create", function(req, res) {
  res.sendFile(path.join(__dirname, "create.html"))
});
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "login.html"))
});


// DB CONNECTION
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sportsCorner",
  port: 3306,
});
// CONNECTION RESPONSE
connection.connect(function (err) {
  console.log("SQL connected as id " + connection.threadId)
});  





// CREATE ACCOUNT FORM
app.post('/create', function (req, res) {

  // USER INPUT CA FROM
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var passW = req.body.password;

  // SEND CA INFO TO DB (WORKING)
  var sql = `INSERT INTO loginInfo VALUES (NULL, ?, ?, ?, ?)`;
  connection.query(sql, [firstName, lastName, email, passW], function (err, res) {
    if (err) throw err;
    console.log("Inserted ...")
  });

  // GET LOGIN INFO FROM DB (WORKING)
  connection.query('SELECT * from loginInfo', function (err, res) {
    if (err) throw err;
    // console.log(res)
    console.log("Got Response (not display)")
  })
});





// USER INPUT FORM LOGIN
app.post('/lgnfrm', function (req, res) {

    var usrEmail= req.body.usrEmail;
    var usrPassw = req.body.usrPass;

    // WORKING WHEN SEARCHING THE CORRECT EMAIL/IF ITS NOT CORRECT EMAIL ITS RETURNS = []
    var sql = 'SELECT * FROM loginInfo WHERE email = (?)'
    connection.query(sql, [usrEmail], function (err, res) {
      console.log(res)
    })
})




// START SERVER
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});