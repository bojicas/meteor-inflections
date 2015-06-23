// Write your package code here!
this._ = _;

if (Meteor.isClient) {
  Template.registerHelper('pluralize', function (singular, count) {
    return _(singular).pluralize(count);
  });
}
