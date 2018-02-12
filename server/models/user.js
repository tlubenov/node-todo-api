var {mongoose} = require('../db/mongoose');

var User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    lastName: String,
    email: {
        type: String,
        trim: true,
        minlength: 5
    },
    position: String,
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = {
    User: User
};
