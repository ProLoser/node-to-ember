# Ember Addon

This package serves as a wrapper that introduces additional node-specific logic
and configuration of the node library for ember applications.

It is not necessary to create an addon for node packages to use them in
your application!

### Installation

We will use `ember-browserify` to consume a node package inside this addon.

**Easy Installation:**

1. Install addon into application: `ember install ember-addon`

This performs additional dependency installs that I placed in my
[ember postInstall hook](blueprints/ember-addon/index.js#L12-L17)! This is
equivalent to:

**Direct Installation:**

1. Install addon into app: `npm install ember-addon --save`
2. Add browserification to your app: `npm install ember-browserify --save`
3. Add the node package you **_your app_**: `npm install core-library --save`

### Getting browserify working for addons

So there's a bit of a limitation with `ember-browserify` - it won't automatically scan the `addon`
folder for imports [\[1\]](https://www.npmjs.com/package/ember-browserify#using-ember-browserify-in-addons).

Luckily the fix is simple: [perform the import at least once anywhere in your app
folder](app/browserify-dependencies.js). You don't even need to execute the file!
I use this as a way to clearly document what node packages the addon will consume.

### Notes About Structure

Your final structure might look like this:

```
ember-app/
  node_modules/
    ember-addon/
    ember-browserify/
    core-library/
      // If this package gets transpiled:
      package.json // contains browserify plugin configuration and dependencies
      node_modules/
        babelify/
        babel-preset-es2015/
```

As you can see, both `ember-addon` and `core-library` are directly installed as
siblings into `ember-app`. That's because `ember-browserify` only supports node
packages installed directly into `ember-app`.

Because `core-library` is installed directly into the app, `ember-app` can choose
to access it's code directly as well as use the additional functionality provided
by `ember-addon`.
