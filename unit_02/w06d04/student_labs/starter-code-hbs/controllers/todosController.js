var express = require('express');
var todosRouter = express.Router();

/* INDEX TODOS */
todosRouter.get('/', function(req,res) {
  var seededTodos = [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    }, {
      description: "practice express router",
      urgent: true
    }
  ];

  var numberOfTodos = seededTodos.length;

  res.render('todos/index', {
    todos: seededTodos
    numberOfTodos: numberOfTodos
  });
});

module.exports = todosRouter;
