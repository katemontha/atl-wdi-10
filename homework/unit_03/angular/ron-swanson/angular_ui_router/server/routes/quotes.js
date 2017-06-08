var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

// GET
router.get('/', function(request, response) {
  Quote.find({}).exec(function(error, quotes) {
    if(error) { console.log(error); }
    console.log(quotes)
    response.json({quotes});
  })
});

// POST
router.post('/', function(request, response){
console.log(request.body); 
  Quote.create( request.body )
  .then(function(quote) {
    console.log('succces', quote)
    response.json({
      data: quote
    })
  })
});

module.exports = router;
