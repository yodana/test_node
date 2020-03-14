var express = require('express');
var cookie = require('cookie-session');
var bodyParser = require('body-parser');

var app = express();
var listes = ["lol", "lol"];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('test.ejs', {liste:listes});
});

app.post('/', function(req, res){
    //listes.push(req.body.listes);
});

app.listen(8080);
/*var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/plain"});
});*/
//server.close();