var express = require('express');
var cookie = require('cookie-session');
var bodyParser = require('body-parser');

var app = express();

app.use(cookie({
    secret: 'todotopsecret'}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
    if (typeof(req.session.listes) == 'undefined') {
        req.session.listes = [];
    }
    next();
})

app.get('/', function(req, res){
    res.render('test.ejs', {liste:req.session.listes});
});

app.get('/supprimer/:id', function(req, res){
    var id = req.params.id;
    req.session.listes.splice(id, 1);
    res.render('test.ejs', {liste:req.session.listes});
});

app.post('/ajouter', function(req, res){
    req.session.listes.push(req.body.listes);
    res.render('test.ejs', {liste:req.session.listes});
});

app.listen(8080);
/*var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/plain"});
});*/
//server.close();