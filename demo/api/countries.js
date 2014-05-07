module.exports = function(modules) {
    console.log('\ninjected config', modules.config, modules.items);

    return function() {
        console.log('\nshould get countries now');
    };
};

