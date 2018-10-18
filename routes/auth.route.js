var express = require('express');
var route = express.Router();
var authController = require('../controllers/AuthController');
module.exports = route;

route.get('/', authController.login);
route.post('/login', authController.postLogin);
