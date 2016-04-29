# Core library

Written as a node module.

Code does not need to be compiled to run in node!

### ES6

Node actually supports some ES6 features natively without the need for `--harmony` flags: https://nodejs.org/en/docs/es6/#which-features-ship-with-node-js-by-default-no-runtime-flag-required

All you have to do is place a `'use strict'` at the top of every file that uses
ES6 and use Node \*v4.4.2+

You can now run, debug and develop your code natively in ES6.

### Browserify

If a non-node consumer (browsers) whishes to use this code, they are encouraged to do so via
[Browserify](browserify.org) in their build process, allowing you to consume almost any node package without minimal effort.

Since browsers don't support ES6, this code must be transpiled during browserification using [babelify](https://github.com/babel/babelify).

This can be setup automatically:

1. The browserify plugins (babelify + babel-presets) are added to production dependencies ([package.json](package.json#L24-L25))
2. A `browserify` configuration is added ([package.json](package.json#L14-L18))
3. Browserify as you would normally!

Browserify will automatically detect the configuration and use
the plugins listed as dependencies in this package.

### Developing

If you want to develop this code while it's being consumed in another project,
simply use [npm link](https://docs.npmjs.com/cli/link) as you would normally.
