//import
var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 //   res.render("../views/index.ejs")
 res.render(__dirname +"/../views/chat/index.ejs")
  });



  // io.on('connection', function(socket){
  //   var USER = socket.handshake.address;
  //   io.sockets.emit("allmsg", allmsg);
 
  //  socket.on('chat message', function(msg){
  //    var regex = /(&nbsp;|<([^>]+)>)/ig
  //    var filterstring = msg.replace(regex,"");
  //     nmsg = `[${USER}] `+ filterstring
  //    allmsg += nmsg + ";";
  //    io.sockets.emit('newmsg', nmsg);
  //  });
// });

  module.exports = router;