# unbuilding-for-ember
A demo repo showing how to make node and ember play nicely together

* [core-library:](core-library/README.md) The core logic lacking any ember-specific code.
* [ember-addon:](ember-addon/README.md) A wrapper for _core-library_ that adds ember-specific logic, configures `core-library` for ember, and exposes functionality in an ember-like manner.
* [ember-app:](ember-app/README.md) Top level ember application and consumer. Can access the node library directly or go through the addon.
