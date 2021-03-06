/// <reference path="../typings/nconf/nconf" />
/// <reference path="../typings/node/node" />
"use strict";

let nconf = require("nconf");
let path = require("path");

function Run(): void {
    // #1 Command-line arguments
    nconf.argv();
    // #2 Environment variables
    nconf.env();
    // #3 A file located at '{.}config.json'
    nconf.file({
        file: "./config.json"
    });
    // #4 Defaults
    // default name for Azure Store Table
    nconf.defaults({
        "Azure:Store:TableName": "table-name"
    });
    console.log(JSON.stringify(nconf.get(null), null, "\t"));
}

//
Run();
