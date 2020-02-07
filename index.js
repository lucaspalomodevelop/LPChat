// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.port = 4200;
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("views"));

app.get('/', function(req, res,next) {
    res.render("index");
});

server.listen(server.port,() => {
    console.log("Server Listening on port " + server.port);
});