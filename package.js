Package.describe({
  name: 'bojicas:inflections',
  version: '0.0.1',
  summary: 'Meteor wrapper and template hepers for unserscore.inflection',
  git: 'https://github.com/bojicas/meteor-inflections',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('inflections.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bojicas:inflections');
  api.addFiles('inflections-tests.js');
});
