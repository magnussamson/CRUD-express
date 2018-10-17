var db = require('../db');
var shortid = require('shortid');
module.exports.index = function(req, res) {
    res.render("users/index", {
        users: db.get('users').value()
    });
} 

module.exports.search = function(req, res) {
    var q = req.query.q;
    var matchedUser = db.get('users').value().filter( function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('user/index', {
        users: matchedUser
    });
}

module.exports.create = function(req, res) {
    res.render('users/create')
}

module.exports.get = function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    });
}

module.exports.getUpdate = function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id}).value();
    res.render('users/update', {
        user: user
    }); 
}

module.exports.postUpdate = function(req, res) {
    var errors = [];
    if (!req.body.name) {
        errors.push('Name is required.');
    } 
    if (!req.body.age) {
        errors.push('Age is required.');
    } 
    if (!req.body.phone) {
        errors.push('Telephone number is required.');
    } 

    if (errors.length) {
        res.render('users/update', {
            errors: errors, 
            values: req.body
        });
        return;
    }

    db.get('users').push(req.body).write();
    res.redirect('/users');
}

module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate();
    var errors = [];
    if (!req.body.name) {
        errors.push('Name is required.');
    } 
    if (!req.body.age) {
        errors.push('Age is required.');
    } 
    if (!req.body.phone) {
        errors.push('Telephone number is required.');
    } 

    if (errors.length) {
        res.render('users/create', {
            errors: errors, 
            values: req.body
        });
        return;
    }

    db.get('users').push(req.body).write();
    res.redirect('/users');
}