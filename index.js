var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = 4000;
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var app = express();

var authMiddleware = require('./middleware/auth.middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render("index");
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.listen(port, function() {
    console.log("example app listening on port " + port);
});



