/*jshint node:true*/
module.exports = {
  description: 'Installs additional dependencies needed at top level for ember-addon',

  // this prevents an error when the entityName is
  // not specified (since that doesn't actually matter
  // to us)
  normalizeEntityName: function(entityName) {
    return entityName;
  },

  afterInstall: function(options) {
    return this.addPackagesToProject([
      { name: 'ember-browserify' },
      { name: '../core-library' }
    ]);
  }
};
