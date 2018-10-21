var db = require('../db');
var md5 = require('md5');
var shortid = require('shortid');
module.exports.index = function(req, res) {
    res.render("products/index", {
        products: db.get('products').value()
    });
} 