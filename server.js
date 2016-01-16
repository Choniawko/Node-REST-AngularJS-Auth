var express = require('express');
var faker   = require('faker');

var app = express();

var users = [];
	for (var i = 1; i <= 6; i++) {
		user = faker.Helpers.userCard();
		user.id = i;
	 	users.push(user);
	 }; 

app.get('/random-user', function(req, res) {
	res.json(users);
});

app.listen(3000, function () {
	console.log('Aplikacja nasłuchuje na porcie 3000');
});