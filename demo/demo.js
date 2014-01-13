module.exports = require('../')(['db', 'config'], function(imports) {
    console.log('\ninjected config', imports);

    return function() {
        console.log('\ndo something with', imports);
    };
});

