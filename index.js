'use strict';
//Palomo Infrastructure
let InfaStruc = require("./modules/PalomoLibs/Palomo.Infrastructure");
// app.js
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("views"));
app.use(InfaStruc.functions.expresslogger)

app.get('/', function(req, res,next) {
    res.render("index",{InfaStruc:InfaStruc});
});

server.listen(InfaStruc.properties.server.port,() => {
    console.log("Server Listening on port " + InfaStruc.properties.server.port);
});