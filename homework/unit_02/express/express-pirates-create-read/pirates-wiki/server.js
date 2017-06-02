var express = require('express'); // Loading the express module on our server
var bodyParser = require('body-parser');
var pirateController = require('./controllers/pirates.js'); //controllers for `/pirates` resource

// Creates a new instance of express on our server
var app = express();

app.use("/pirates", pirateController);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
