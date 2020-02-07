'use strict';
//Palomo Infrastructure
let InfaStruc = require("./modules/PalomoLibs/Palomo.Infrastructure");
// app.js
let express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'LPChat'
});

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(InfaStruc.functions.expresslogger)
app.use(express.static("views"));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    res.redirect("/login");
});


app.get('/login', function (req, res, next) {
    res.render("index", { InfaStruc: InfaStruc });
});

app.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.post('/auth', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});



server.listen(InfaStruc.properties.server.port, () => {
    console.log("Server Listening on port " + InfaStruc.properties.server.port);
    console.log("http://127.0.0.1:" + InfaStruc.properties.server.port)
});