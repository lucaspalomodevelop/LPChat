'use strict';
let fs = require("fs");
var moment = require("moment");
let properties_path = __dirname + "/../../ServerProperties.json"

let struc = {}

struc.vars = 
{
 
    timestemp : moment().format("YYYY_MM_DD : HH:mm:ss")
}

struc.functions =
{
    "expresslogger" : (req, res,next) => {
    
        let string = `${struc.vars.timestemp} (${req.method})`
    console.log(string);
    next();
    }
}


if(fs.existsSync(properties_path))
struc.properties = require(properties_path);
else
console.dir(fs.existsSync(properties_path) + " " + properties_path);



module.exports = struc;