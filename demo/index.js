#!/usr/bin/env node
'use strict';

var config = require('./config');
var db = require('./db');
var demo = require('./demo')({
    config: config,
    db: db
});
var api = require('./api')({
    config: config,
    items: ['foo', 'bar', 'baz']
});


main();

function main() {
    demo();

    api.countries();
}

