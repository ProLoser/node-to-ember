# Core library

Written as a node module.

Code does not need to be compiled to run in node!

### ES6 [DEPRECATED]

> **[DEPRECATED]** I no longer recommend using this spotty reliance on node support for ES6 as it requires developers to be aware of what ES6 features they can and cannot use.

Node actually supports some ES6 features natively without the need for `--harmony` flags: https://nodejs.org/en/docs/es6/#which-features-ship-with-node-js-by-default-no-runtime-flag-required

All you have to do is place a `'use strict'` at the top of every file that uses
ES6 and use Node \*v4.4.2+

You can now run, debug and develop your code natively in ES6.

#### ES6 in Node.js Alternative

If you do not want to worry about inconsistent ES6 feature support for Node.js consumers, I recommend compiling the ES6 to an ES5 `build` tree that is identical to the `src` tree. By keeping a roughly identical file structure to your source code, running, debugging and developing in Node should still be fairly painless.

> Note: Don't use browserify to compile the `build` tree. The `build` tree is _only_ for Node.js consumers!

I recommend having Node consumers use your `build` tree and Browserify consumers use your `src` tree. This can be easily configured in your `package.json` like this:

```json
{
  "main": "build/index.js", // Consumed by node
  "browser": "src/index.js", // Consumed by browserify
}
```

### Browserify

If a non-node consumer (browsers) whishes to use this code, they are encouraged to do so via
[Browserify](browserify.org) in their build process, allowing you to consume almost any node package without minimal effort.

Since browsers don't support ES6, this source code should be transpiled during browserification using [babelify](https://github.com/babel/babelify).

This can be setup automatically:

1. The browserify plugins (babelify + babel-presets) are added to production dependencies ([package.json](package.json#L24-L25))
2. A `browserify` configuration is added ([package.json](package.json#L16-L20))
3. Browserify as you would normally!

Browserify will automatically detect the configuration and use
the plugins listed as dependencies in this package.

### Developing

If you want to develop this code while it's being consumed in another project,
simply use [npm link](https://docs.npmjs.com/cli/link) as you would normally.
