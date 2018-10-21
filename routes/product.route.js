var express = require('express');
var route = express.Router();
// var userValidate = require('../validate/user.validate');
var productController = require('../controllers/ProductController');
// var authMiddleware = require('../middleware/auth.middleware');
module.exports = route;

route.get('/', productController.index); 