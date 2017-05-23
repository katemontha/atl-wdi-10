var express = require('express');
var router = express.Router();
var data = require('../data.js');

/* INDEX TODOS */
TodosRouter.get('/', function(req,res) {

  res.render('todos/index', {
    todos: data.seededTodos
  });
});

/* NEW TODO */
todosRouter.get('/new', function(req, res){
  res.render('todos/new');
});

//edit todo
todosRouter.get('/:id/edit', function (req, res){
  var id = req.params.id;
  res.render('todos/edit', {
    id: id,
    description: seededTodos[id].description;
  })
})

/* SHOW TODO */
TodosRouter.get('/:id', function(req,res) {
  var todo = data.seededTodos[req.params.id];

  res.render('todos/show', {
    todo: todo
  });
});

//change todos
todosRouter.put('/:id', function (req,res){
  var todoIndex =
})

/* CREATE/POST TODO */
TodosRouter.post('/', function(req, res){
  var newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };

  data.seededTodos.push(newTodo);
  // res.send("Create a new todo is working!");
  res.redirect('/todos');
});


module.exports = router;
