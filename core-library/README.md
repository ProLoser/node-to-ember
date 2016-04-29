# Core library

This code is written for node and is not hindered by context or environment.

There is no necessary build process to run this library in node.

### ES6

Node actually supports some ES6 features natively without the need for `--harmony` flags: https://nodejs.org/en/docs/es6/#which-features-ship-with-node-js-by-default-no-runtime-flag-required

All you have to do is place a `'use strict'` at the top of every file that uses
ES6 and use Node \*v4.4.2+

You can now run, debug and develop your code natively in ES6.

### Browserify

If a non-node consumer whishes to use this code, they are encouraged to do so via
[Browserify](browserify.org) in their build process. They will likely find that
introducing browserify into their existing workflow will give them the immediate
benefits of being able to cleanly consume almost any node package without any
extra hoop jumping.

Since browsers don't support ES6, this code must be transpiled during browserification,
using the babelify addon for browserify. Luckily, this can be hidden from consumers:

1. The browserify plugins (babelify + babel-presets) are added as production dependencies to [package.json](package.json#L24-L25)
2. A `browserify` configuration block is added to [package.json](package.json#L11-L22)
3. Consume this package with browserify as you would normally

Browserify will automatically detect configurations of each package and leverage
the plugins that were installed as dependencies in this package.

### Developing

If you want to develop this code while it's being consumed in another project,
simply use [npm link](https://docs.npmjs.com/cli/link) as you would normally.
