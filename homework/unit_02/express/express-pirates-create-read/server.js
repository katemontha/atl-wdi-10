// Loading the express module on our server
var express = require('express');
// Creates a new instance of express on our server
var app = express();
//controllers for `/pirates` resource
/*
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);
*/

// when a request comes in at localhost:3000, it will respond
app.get('/', function(req, res) {

});

// tells the server where to listen for requests
var port = process.env.PORT || 3000;

// tells the server where to listen for requests on port 3000
app.listen(port, function() {

//console.log if server is running
console.log('express-pirates is listening on port ' + port);
});
