'use strict';
let fs = require("fs");
let properties_path = __dirname + "/../../ServerProperties.json"

let struc = {}

struc.expresslogger = (req, res,next) => {
    let string = `${Date.now()} (${req.method})`
console.log(string);
next();
}

if(fs.existsSync(properties_path))
struc.Properties = require(properties_path);
else
console.dir(fs.existsSync(properties_path) + " " + properties_path);



module.exports = struc;