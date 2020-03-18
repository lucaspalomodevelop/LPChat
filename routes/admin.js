//import modules
var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/admin-panel', function(req, res, next){
    res.send("Admin-panel");
});


module.exports = router; 