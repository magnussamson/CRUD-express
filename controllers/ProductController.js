var db = require('../db');
var md5 = require('md5');
var shortid = require('shortid');
module.exports.index = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    var start = (page - 1) * perPage;
    var end = (page - 1) * perPage + perPage;
    var drop = (page - 1) * perPage;
    res.render("products/index", {
        // products: db.get('products').value().splice(start, end)
        //other way
        products: db.get('products').drop(drop).take(perPage).value(),
        
    });
} 