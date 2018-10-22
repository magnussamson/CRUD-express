var express = require('express');
var route = express.Router();
var userValidate = require('../validate/user.validate');
var userController = require('../controllers/UserController');
var authMiddleware = require('../middleware/auth.middleware');
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });
module.exports = route;

route.get('/',authMiddleware.requireAuth, userController.index);
route.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('Hello Dai');
});
route.get('/search', userController.search);
route.get('/create', userController.create);
route.get('/:id', userController.get);
route.get('/update/:id',userController.getUpdate)
route.post('/update', userController.postUpdate)
route.post('/create', 
    upload.single('avatar'),
    userValidate.postCreate,
    userController.postCreate
);  