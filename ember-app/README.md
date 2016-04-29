# Ember Application

This is an ember application that is capable of consuming addons and node packages.

### ember-browserify

Consuming node packages in ember can be painless and easy. Follow these steps to
consume node packages directly:

1. Install the ember-cli plugin: `npm install ember-browserify --save`
2. Install the node package: `npm install some-package --save`
3. Prefix your imports: `import 'npm:some-package'`
4. Serve your app normally: `ember server` browserification will occur automatically

### Running

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Notes About Structure

Your final structure might look like this:

```
ember-app/
  node_modules/
    ember-browserify/
    core-library/
      // If this package gets transpiled:
      package.json // contains browserify plugin configuration and dependencies
      node_modules/
        babelify/
        babel-preset-es2015/
```
