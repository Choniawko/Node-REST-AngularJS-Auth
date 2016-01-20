var express    = require('express');
var faker      = require('faker');
var cors       = require('cors');
var bodyParser = require('body-parser');
var jwt        = require('jsonwebtoken'); 


var jwtSecret = 'fjkdlsdjfoew23d053/3uk';

var user = {
	username: 'admin',
	password: 'admin'
}	

var app = express();
app.use(cors());
app.use(bodyParser.json());



app.get('/random-user', function(req, res) {
	var user = faker.Helpers.userCard();
	user.avatar = faker.Image.avatar();
	res.json(user);
});

app.post('/login', authenticate, function(req, res) {
	var token = jwt.sign({
		username: user.username
	}, jwtSecret);
	res.send({
		token: token,
		user: user
	});
});

app.listen(3000, function () {
	console.log('Aplikacja nasłuchuje na porcie 3000');
});

function authenticate(req, res, next) {
	var body = req.body;
	if (!body.username || !body.password) {
		res.status(400).end('Musisz wprowadzić nazwę użytkownika i hasło');
	}
	if (body.username !== user.username || body.password !== user.password) {
		res.satus(401).end('Nazwa użytkownika lub hasło st nieprawidłowe');
	}
	next();
}