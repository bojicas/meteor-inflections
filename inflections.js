// Write your package code here!
this._ = _;

if (Meteor.isClient) {
  Template.registerHelper('pluralize', function (singular, count, includeCount) {
    if (includeCount === true) {
      return _(singular).pluralize(count, includeCount);
    } else {
      return _(singular).pluralize(count);
    }
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
