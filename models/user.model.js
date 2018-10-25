var mongoose = require('mongoose');

// use schema to declare fields in object
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String,
    address: String
});

var User = mongoose.model('User', userSchema, 'users');
module.exports = User;