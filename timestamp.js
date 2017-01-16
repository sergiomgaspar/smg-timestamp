/*
	Hello world
*/
var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var port = process.env.PORT || 3000;

var html = fs.readFileSync('index.html');

app.get('/home', function(req, res) {
    res.end('Hello World! \nNode running on port: '+ app.get('port'));
});

/* / path, return default html */
app.get('/', function(req, res) {
	res.writeHead(200);
	res.write(html);
	res.end();
});

// Listen on port 3000, IP defaults to 127.0.0.1
app.listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');