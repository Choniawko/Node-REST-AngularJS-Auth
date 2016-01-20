var express = require('express');
var faker   = require('faker');
var cors    = require('cors');
var bodyParser = require('body-parser');

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

})

app.listen(3000, function () {
	console.log('Aplikacja nasłuchuje na porcie 3000');
});

function authenticate(req, res, next) {

}