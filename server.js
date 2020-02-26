
// DEPENDENCIES
var express
var express = require("express");
var mysql = require("mysql");
var express = require("express");
var path = require("path");
require('dotenv').config();



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
    res.sendFile(path.join(__dirname, "login.html"));
  });
app.get("/create", function(req, res) {
  res.sendFile(path.join(__dirname, "create.html"))
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
});

var loggedIn = false;

// DB CONNECTION
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Oct0ber1st!",
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
    console.log("INSERTED VALUE(s) INTO DB")
  });

  // GET LOGIN INFO FROM DB (WORKING)
  connection.query('SELECT * from loginInfo', function (err, res) {
    if (err) throw err;
    // console.log(res)
    console.log("GOT ALL VALUES BACK FROM DB")
  })
});





// USER INPUT FORM LOGIN
app.post('/lgnfrm', function (req, res) {

    var usrEmail= req.body.usrEmail;
    var usrPassw = req.body.usrPass;

    // INSERT WORKING
    var sql = 'SELECT * FROM loginInfo WHERE email = (?)'
    connection.query(sql, [usrEmail], function (err, results) {

 
      // IF/ELSE CHECKING IF PASSWORD AND EMAIL MATCH DB VALUES
      if (err) {
        //
        console.log(err)

      } else {
        // CHECKS IF THE EMAIL MATCHES DB
        if (results.length > 0){

          // IF EMAIL VALID, CHECK PASSWORD
          if (results[0].passW == usrPassw) {
            loggedIn = true;
          } else {
            // INCORRECT PASSWORD
            console.log("USERNAME / PASSWORD INCORRECT");
          }
        }
      }
      if(loggedIn === true) {
        console.log("Signed In")
        res.redirect('/home');
      }
    })
 })




// START SERVER
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});