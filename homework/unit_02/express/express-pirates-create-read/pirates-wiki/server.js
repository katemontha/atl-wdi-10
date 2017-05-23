//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);
