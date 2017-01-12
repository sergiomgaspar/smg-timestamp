/*
	Hello world
*/
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/home', function(req, res) {
    res.end('Hello World! \nNode running on port: '+ app.get('port'));
});
//app.listen(process.argv[2]);
