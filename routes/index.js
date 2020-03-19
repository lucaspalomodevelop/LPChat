//import
var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render(__dirname +"/../views/login.ejs")
  });

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.send("login");
  }); 

/* POST regist page. */
router.post('/login', function(req, res, next) {
   res.redirect('/home');
  });  

/* GET regist page. */
router.get('/regist', function(req, res, next) {
    res.render(__dirname +"/../views/index.ejs")
  });  

/* POST regist page. */
router.post('/regist', function(req, res, next) {
    res.render(__dirname +"/../views/index.ejs")
  });    


  module.exports = router;