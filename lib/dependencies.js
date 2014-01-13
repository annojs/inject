'use strict';

exports.validate = function(dependencies, expected) {
    var ilen = expected.length;
    var jlen = dependencies.length;
    var i, j, exp, dep, found;

    for(i = 0; i < ilen; i++) {
        found = false;
        exp = expected[i];

        for(j = 0; j < jlen; j++) {
            dep = dependencies[j];

            if(exp in dep) {
                found = true;
                break;
            }
        }

        if(!found) {
            return false;
        }
    }

    return true;
};

exports.getNames = function(dependencies) {
    var ret = [];
    var len = dependencies.length;
    var i;

    for(i = 0; i < len; i++) {
        ret = ret.concat(Object.keys(dependencies[i]));
    }

    return ret;
};
