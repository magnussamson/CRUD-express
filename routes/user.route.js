var express = require('express');
var route = express.Router();
var userValidate = require('../validate/user.validate');
var userController = require('../controllers/UserController');
module.exports = route;

route.get('/', userController.index);
route.get('/search', userController.search);
route.get('/create', userController.create);
route.get('/:id', userController.get);
route.get('/update/:id',userController.getUpdate)
route.post('/update', userController.postUpdate)
route.post('/create',userValidate.postCreate, userController.postCreate) 