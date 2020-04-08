
  //import modules
var express = require('express');
var router = express.Router();

/* GET user page. */
router.get('/:id', function(req, res, next) {
    res.render(__dirname +"/../views/user/index.ejs")
  });  


module.exports = router; 