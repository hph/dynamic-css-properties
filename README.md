dynamic-css-properties
======================

This tiny library exposes a single function in order to dynamically set custom
CSS properties ([CSS variables](https://www.w3.org/TR/css-variables/)).

### Features

- Simple API - takes an object of properties and values to update and
  automatically converts `camelCased` property names to `--kebab-case` for you.
- Defaults to `document.documentElement`, i.e. the root node, but allows you to
  specify a subnode to update instead (custom CSS properties follow the
  standard cascading rules).
- It doesn't do much, but it still feels like magic!

### Install

    yarn add dynamic-css-properties

### Usage

#### Importing the library

ES6 modules:

```javascript
import setCustomProperties from 'dynamic-css-properties';
```

CommonJS:

```javascript
const setCustomProperties = require('dynamic-css-properties');
```

Script tag (adds a `setCustomProperties` global):

```html
<script src="https://unpkg.com/dynamic-css-properties@latest/dist/dynamic-css-properties.min.js"></script>
```

#### Using the library

A minimal example:

```javascript
setCustomProperties({
  primaryTextColor: 'hotpink',
  backgroundColor: 'papayawhip',
});
```

Now simply use the variables:

```css
body {
  color: var(--primary-text-color, #1e1e1e);
  background-color: var(--background-color, #fff);
}
```

As soon as the code is executed, the custom properties will be added to the
document. Should you wish to only update part of the document you may specify a
particular node as the second argument, and only it and its children will be
affected.

### Caveat

Using this for serious business is not a good idea, unless you know that all
your users are running browsers or environments (such as Electron) that support
custom CSS properties. See [here](http://caniuse.com/#feat=css-variables).
