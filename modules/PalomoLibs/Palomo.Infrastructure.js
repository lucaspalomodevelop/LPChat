'use strict';
let fs = require("fs");
var moment = require("moment");
let properties_path = __dirname + "/../../ServerProperties.json"

let struc = {}

struc.vars = 
{

}

struc.functions =
{
    "timestemp" : () => { return moment().format("YYYY_MM_DD : HH:mm:ss")},
    "expresslogger" : (req, res,next) => {
    
        let string = `${struc.functions.timestemp()} (${req.method})`
    console.log(string);
    next();
    }
}


if(fs.existsSync(properties_path))
struc.properties = require(properties_path);
else
console.dir(fs.existsSync(properties_path) + " " + properties_path);



module.exports = struc;