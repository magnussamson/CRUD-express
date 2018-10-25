require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var port = 4000;
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var sessionMiddleware = require('./middleware/session.middleware');
var app = express();
var authMiddleware = require('./middleware/auth.middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render("index");
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/auth', authRoute);
app.listen(port, function() {
    console.log("example app listening on port " + port);
});



