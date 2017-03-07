console.log('Starting up the server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var books = require('./routes/books');
var port = 3000;

app.use(express.static('server/public'));

app.use(bodyParser.json()); // this creates req.body
app.use(bodyParser.urlencoded({extended:true}));

app.use('/books', books);

app.listen(port, function() {
  console.log('We are running on port: ', port);
});
