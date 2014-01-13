'use strict';

var path = require('path');

var annotate = require('annotate');
var is = require('annois');

var mod = require('./module');
var pkg = require('./package');

// borrowed from require-dir
// make a note of the calling file's path, so that we can resolve relative
// paths. this only works if a fresh version of this module is run on every
// require(), so important: we clear the require() cache each time!
var parentDir = path.dirname(module.parent.filename);
delete require.cache[__filename];


module.exports = annotate('inject', 'Injects given dependencies to module or package and checks that they exist').
    on(is.array, is.fn, mod).
    on([is.string], pkg(parentDir)).
    satisfies(is.fn);
