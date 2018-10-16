var express = require('express');
var route = express.Router();

var userController = require('../controllers/UserController');
module.exports = route;

route.get('/', userController.index);
route.get('/search', userController.search);
route.get('/create', userController.create);
route.get('/:id', userController.get);
route.post('/create', userController.postCreate);