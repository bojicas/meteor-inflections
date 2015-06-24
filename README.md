Meteor Inflections
==================

Meteor wrapper and template helpers for [underscore.inflection](https://github.com/jeremyruppel/underscore.inflection)

It exposes on both, server and client side, following inflections:

* pluralize
* singularize
* gsub
* ordinalize
* titleize

## Meteor Helpers

### pluralize

Signature:

<code>{{pluralize singular count include-count}}</code>

* <code>singular</code> is the word to which we apply pluralize in singular
* <code>count</code> is the count number <code>1</code>, <code>2</code>, <code>3</code>, etc...
* <code>include-count</code> is a boolean and optional. If <code>false</code>,
the count will not be displayed.

Examples:

* <code>{{pluralize 'person'}}</code> outputs <code>people</code>
* <code>{{pluralize 'person' 1}}</code> outputs <code>1 person</code>
* <code>{{pluralize 'person' 2}}</code> outputs <code>2 people</code>
* <code>{{pluralize 'person' 3 true}}</code> outputs <code>3 people</code>
* <code>{{pluralize 'person' 3 false}}</code> outputs <code>people</code>

### singularize

Signature:

<code>{{singularize word}}</code>

* <code>word</code> is a noun, generally in plural form
 
Example:

* <code>{{singularize 'people'}}</code> outputs <code>person</code>

### ordinalize

Signature:

<code>{{ordinalize number}}</code>

Examples:

* <code>{{ordinalize 1}}</code> outputs <code>1st</code>
* <code>{{ordinalize '2'}}</code> outputs <code>2nd</code>

### titleize

Signature:

<code>{{titleize words}}</code>

Examples:

* <code>{{titleize 'apple'}}</code> outputs <code>Apple</code>
* <code>{{titleize 'apple pie'}}</code> outputs <code>Apple Pie</code>
