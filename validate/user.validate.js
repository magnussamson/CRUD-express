module.exports.postCreate = function (req, res, next) {
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

    // you can save variables you want to send to the next middleware example: res.locals.success = true; and console.log(res.locals) in postCreate module in UserController.js
    next();//if missing next() the page will loading forever and timeout at sometime 
};