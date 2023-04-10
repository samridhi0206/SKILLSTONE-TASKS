// Exercise1

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('my first express http server');
// });

// // On localhost:3000/welcome
// app.get('/welcome', function (req, res) {
//     res.send('Hello! welcome to my http server made with express');
// });

// app.use(function(req, res, next) {
//     res.status(404).send("Not found :)");
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000.');
// });


//Exercise2

var express = require('express');
var app = express();

var print = require('./myFirstModule');

app.use(function (req, res) { 
  res.send(print.text()); 
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000.');
});


