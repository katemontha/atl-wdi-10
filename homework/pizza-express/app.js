// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;
//require handlebars
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

//homepage
app.get('/', function(req, res, next) {
  res.render("index.hbs", {
  message: "Welcome to Pizza Express!"
  });
});

//topping route
app.get('/toppings/:type', function(req, res, next) {
  res.render("toppings.hbs", {
  topping: req.params.type
  });
});

//order route
app.get('/order/:amount/:size', function(req, res, next) {
  res.render("order.hbs", {
  amount: req.params.amount,
  size: req.params.size
  });
 });

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});


