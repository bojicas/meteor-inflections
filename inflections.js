// Write your package code here!
this._ = _;

if (Meteor.isClient) {
  Template.registerHelper('pluralize', function (singular, count, includeCount) {
    return _.pluralize(singular, count, includeCount);
  });

  Template.registerHelper('singularize', function (word) {
    return _.singularize(word);
  });

  Template.registerHelper('ordinalize', function (number) {
    return _.ordinalize(number);
  });

  Template.registerHelper('titleize', function (words) {
    return _.titleize(words);
  });
}
