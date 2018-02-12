var {mongoose} = require('../db/mongoose');
// var mongoose = require('mongoose');

var ToDoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: Number
});
var ToDo = mongoose.model('Todo', ToDoSchema);

module.exports = {
    ToDo: ToDo
};
