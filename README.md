Meteor Inflections
==================

Meteor wrapper and template helpers for [underscore.inflection](https://github.com/jeremyruppel/underscore.inflection)

It exposes on both, server and client side, following inflections like:

* pluralize
* singularize
* gsub
* ordinalize
* titleize

## Meteor Helpers

### Pluralize

General form:

<code>{{pluralize singular count include-count-output}}</code>

* <code>singular</code> is the word to which we apply pluralize in singular
* <code>count</code> is the count number <code>1</code>, <code>2</code>, <code>3</code>, etc...
* <code>include-count</code> is a boolean. If included and <code>true</code>,
the count will be displayed as well.

Examples:

* <code>{{pluralize 'person'}}</code> outputs <code>people</code>
* <code>{{pluralize 'person' 1}}</code> outputs <code>person</code>
* <code>{{pluralize 'person' 2}}</code> outputs <code>people</code>
* <code>{{pluralize 'person' 3 true}}</code> outputs <code>3 people</code>
* <code>{{pluralize 'person' 3 false}}</code> outputs <code>people</code>
