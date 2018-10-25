var User = require('../models/user.model');
var md5 = require('md5');
// var shortid = require('shortid');
module.exports.index = async function(req, res) {
    var users = await User.find();
    res.render("users/index", {
        users: users
    });
} 

module.exports.search = async function(req, res) {
    var q = req.query.q;
    var matchedUser = db.get('users').value().filter( function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('user/index', {
        users: matchedUser
    });
}

module.exports.create = function(req, res) {
    console.log(req.cookies);
    res.render('users/create')
}

module.exports.get = async function(req, res) {
    var id = req.params.id;
    var user = await User.findById(id);
    res.render('users/view', {
        user: user
    });
}

module.exports.getUpdate = async function(req, res) {
    var id = req.params.id;
    var user = await User.findById(id);
    res.render('users/update', {
        user: user
    }); 
}

module.exports.postUpdate = async function(req, res) {
    // var errors = [];
    // if (!req.body.name) {
    //     errors.push('Name is required.');
    // } 
    // if (!req.body.age) {
    //     errors.push('Age is required.');
    // } 
    // if (!req.body.phone) {
    //     errors.push('Telephone number is required.');
    // } 

    // if (errors.length) {
    //     res.render('users/update', {
    //         errors: errors, 
    //         values: req.body
    //     });
    //     return;
    // }

    var id = req.body.id;
    User.findByIdAndUpdate(
        id,
        req.body, 
        {new: true}, 
        function(err, data) {
            // if (err) return res.status(500).send();
            return res.send(data);
    });
    var users = await User.find();
    res.render('/users/index', {
        users: users
    });
}

module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    req.body.password = md5(req.body.password);
    db.get('users').push(req.body).write();
    res.redirect('/users');
}