var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var uc = require('upper-case');


 
var router = express.Router();

console.log('Start First NODE JS Application');

app.use(express.static('public'));

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port   
   console.log("Example app listening at http://%s:%s", host, port)
})