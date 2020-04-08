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

//set routers
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var homeRouter = require('./routes/home');
var chatRouter = require('./routes/chat');

//let connection = mysql.createConnection(InfaStruc.properties.mysql);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(InfaStruc.functions.expresslogger)
// app.use(function(req, res, next) {
//     req.io = io;
//     next();
//   });
//app.use(express.static("views"));
app.use("/static",express.static("static"));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/home', homeRouter);
app.use('/admin', adminRouter);
app.use('/chat', chatRouter);
app.use('/', indexRouter);


server.listen(InfaStruc.properties.server.port, () => {
    console.log("Server Listening on port " + InfaStruc.properties.server.port);
    console.log("http://127.0.0.1:" + InfaStruc.properties.server.port)
});