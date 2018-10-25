var express = require('express');
var router = express.Router();
var productController = require('../controllers/CartController');
router.get('/add/:productId', productController.addToCart);
module.exports = router;