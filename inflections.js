// Write your package code here!
this._ = _;

if (Meteor.isClient) {
  // implement pluralize helper
  Template.registerHelper('pluralize', function (singular, count, withOutput) {
    return _(singular).pluralize(count, withOutput);
  });
}
