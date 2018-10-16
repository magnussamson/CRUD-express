var express = require('express');
var bodyParser = require('body-parser');

var port = 4000;
var userRoute = require('./routes/user.route');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render("index");
});

app.use('/users', userRoute);
app.listen(port, function() {
    console.log("example app listening on port " + port);
});



