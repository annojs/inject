[![build status](https://secure.travis-ci.org/annojs/inject)](http://travis-ci.org/annojs/inject)
# inject - Injects dependencies to JavaScript modules and packages

Default `require` provided by Node.js isn't that flexible. Let's say you want to test a module and inject a mock database driver and configuration there. What to do? One alternative is to use a dependency injection pattern like this:

main.js:

```js
var db = require('./db');
var config = require('./config');
var api = require('./api')({
    db: db,
    config: config
});
```

api.js:

```js
module.exports = function(imports) {
    return function() {
        // do something with imports.db, imports.config
        // ...
    };
};
```

## Module Injection

`annoinject` provides a set of utilities that build upon this idea and make sure all imports needed actually have been injected. In `inject`'s case we would write the following:

api.js:

```js
module.exports = require('annoinject')(['db', 'config'], function(imports) {
    // do something with imports.db, imports.config
});
```

Yes, there's more to write but at the same time it is more explicit. In addition `annoinject` performs the extra check I mentioned about. It will give you a nice error in case some dependency hasn't been satisfied.

## Package Injection

There are time when you would you like to inject the same dependencies for the whole package. You could for instance want to use the same configuration for each module included. In this case we can use a package level injector like this:

api/main.js:

```js
var config = {
    apikey: 'foobar'
};
var api = require('./api')(config);

// then we can do
api.countries();
```

api/index.js:

```js
module.exports = require('annoinject')('config');
```

api/countries.js:

```js
module.exports = function(imports) {
    // do something with imports.config now

    return function() {
        console.log('get countries now');
    };
};
```

Just like the module injector, the package injector will make sure all required modules will get injected and give an Error in case they are not.

## License

`annoinject` is available under MIT. See LICENSE for more details.

