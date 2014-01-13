'use strict';

var deps = require('./dependencies');


module.exports = function(expected, fn) {
    return function() {
        var dependencies = arguments;

        if(!deps.validate(dependencies, expected)) {
            throw new Error('Passed dependencies are not valid!\n' +
                'Dependencies: ' + deps.getNames(dependencies).join(', ') + '\n' +
                'Expected: ' + expected);
        }

        return fn.apply(null, arguments);
    };
};
