
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
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {

  
    // change the file name to switch that to my new html file.
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/create", function(req, res) {
  res.sendFile(path.join(__dirname, "create.html"))
});

app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "login.html"))
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });