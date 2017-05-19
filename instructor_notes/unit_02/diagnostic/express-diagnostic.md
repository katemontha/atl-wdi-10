# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
  A user types in a URL and the browser makes a REQUEST for that url. The router maps the url to the correct controller and passes back (REPSONDS) with the correct action to handle the request.

### Question 2: What are the differences between a GET request and a POST request?
  When the method is GET information is appended to the URL as query string parameters. With POST, data appears in the body of the HTTP request.

### Question 3: What does `npm init` do?
  Asks you questions and creates a package.json in the directory the command was initiated.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
  Create Read Update Delete. Post Get Put Delete.

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?


### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

  Sends the form data to myScript.js file.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
  app.post('/menus', function (req, res) {
  res.redirect('/homepage')
  })

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  var id = req.params.id;
  var song_id = req.params.song_id;
}
```

### Question 9: What is MVC? How have we been using it so far?


## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
