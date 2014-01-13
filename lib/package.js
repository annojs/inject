'use strict';

var requireDir = require('require-dir');

var deps = require('./dependencies');


module.exports = function(parentDir) {
    return function() {
        var expected = arguments;
        var modules = requireDir(parentDir);

        delete modules.index;

        return function() {
            var dependencies = arguments;
            var ret = {};

            if(!deps.validate(dependencies, expected)) {
                throw new Error('Passed dependencies are not valid!\n' +
                    'Dependencies: ' + deps.getNames(dependencies).join(', ') + '\n' +
                    'Expected: ' + expected);
            }

            Object.keys(modules).forEach(function(k) {
                ret[k] = modules[k].apply(null, dependencies);
            });

            return ret;
        };
    };
};
