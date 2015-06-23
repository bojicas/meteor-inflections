// Write your package code here!
this._ = _;

if (Meteor.isClient) {
  // implement pluralize helper
  Template.registerHelper('pluralize', function (singular, count, includeCount) {
    if (includeCount === true) {
      return _(singular).pluralize(count, includeCount);
    } else {
      return _(singular).pluralize(count);
    }
  });
}
