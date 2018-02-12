var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var ToDoSchema = mongoose.Schema({
    text: String,
    completed: Boolean,
    completedAt: Number
});
var ToDo = mongoose.model('Todo', ToDoSchema);

var User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    position: String
});


var newTodo = new ToDo({
    text: 'test',
    completed: false,
    completedAt: 1234
});

newTodo.save().then((doc) => {
    console.log('Save as ', doc);
}, (e) => {
    console.log(e.message);
});
