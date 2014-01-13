module.exports = function(modules) {
    console.log('\ninjected config', modules.config);

    return function() {
        console.log('\nshould get countries now');
    };
};

