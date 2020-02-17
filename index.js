'use strict';
//Palomo Infrastructure
const InfaStruc = require("./modules/PalomoLibs/Palomo.Infrastructure");
// app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//let connection = mysql.createConnection(InfaStruc.properties.mysql);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(InfaStruc.functions.expresslogger)
app.use(express.static("views"));
app.use("/static",express.static("static"));
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
    res.render("login");
});

app.get('/home', function (req, res) {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('Please login to view this page!');
    }
    res.end();
});

app.post('/auth', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    console.log(`${username} : ${password}`);
    // if (username && password) {
    //     connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
    //         if (results.length > 0) {
    //             req.session.loggedin = true;
    //             req.session.username = username;
    //             res.redirect('/home');
    //         } else {
    //             res.send('Incorrect Username and/or Password!');
    //         }
    //         res.end();
    //     });
    // } else {
    //     res.send('Please enter Username and Password!');
    //     res.end();
    // }

    res.send(`<h1>${username} : ${password}</h1>`);
});



server.listen(InfaStruc.properties.server.port, () => {
    console.log("Server Listening on port " + InfaStruc.properties.server.port);
    console.log("http://127.0.0.1:" + InfaStruc.properties.server.port)
});