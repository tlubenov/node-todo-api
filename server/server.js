var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new ToDo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.status(201).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    console.log(todo);
});

app.get('/todos', (req, res) => {
    ToDo.find().then((todos) => {
        res.send({todos: todos});
    }, (e) => {
        res.status(400).send(e);
    });
});





var port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log('Server listening on port: ', port)
});

module.exports = {
    app: app
}



// var newUser = new User({
//     firstName: '      Todor      ',
//     email: '      test@mail.bg         '
// });

// newUser.save().then((doc) => {
//     console.log('Save as ', doc);
// }, (e) => {
//     console.log(e.message);
// });

// var newTodo = new ToDo({
//     text: 'To Do something',
//     completedAt: 1234
// });

// newTodo.save().then((doc) => {
//     console.log('Save as ', doc);
// }, (e) => {
//     console.log(e.message);
// });
