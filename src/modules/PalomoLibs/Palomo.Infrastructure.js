'use strict';
const fs = require("fs");
const moment = require("moment");
let properties_path = __dirname + "/../../ServerProperties.json"

let struc = {}

struc.vars =
{

}

struc.functions =
{
    "timestemp": () => { return moment().format("YYYY_MM_DD : HH:mm:ss") },
    "expresslogger": (req, res, next) => {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        let string = `${struc.functions.timestemp()} -> ${ip} <- (${req.method}) ${req.originalUrl}`
        console.log(string);
        next();
    }
}


if (fs.existsSync(properties_path))
    struc.properties = require(properties_path);
else
    console.dir(fs.existsSync(properties_path) + " " + properties_path);



module.exports = struc;