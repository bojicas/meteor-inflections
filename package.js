Package.describe({
  name: 'bojicas:inflections',
  version: '0.0.2',
  summary: 'Meteor wrapper and template hepers for underscore.inflection',
  git: 'https://github.com/bojicas/meteor-inflections',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('underscore');

  api.addFiles([
    'inflections.js',
    'vendor/lib/underscore.inflection.js'
  ]);
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bojicas:inflections');
  api.addFiles('inflections-tests.js');
});
