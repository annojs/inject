#!/usr/bin/env node

var config = require('./config');
var db = require('./db');
var demo = require('./demo')({
    config: config,
    db: db
});
var api = require('./api')({
    config: config
});


main();

function main() {
    demo();

    api.countries();
}

