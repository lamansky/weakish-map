# WeakishMap

It’s like WeakMap but it supports non-objects.

## Installation

Requires [Node.js](https://nodejs.org/) 4.0.0 or above.

```bash
npm i weakish-map
```

## API

The module exposes a single class. Instances of this class have the following methods, which behave just like the corresponding methods on `Map` and `WeakMap`:

* `get()`
* `set()`
* `has()`
* `delete()`
* `clear()`

Instances also have methods which only work on non-objects:

* `entries()`
* `forEach()`
* `keys()`
* `values()`

## Example

```javascript
// Before
const map1 = new WeakMap()
map1.set({}, 'value')
map1.set('key', 'value') // Uncaught TypeError: Invalid value used as weak map key

// After
const WeakishMap = require('weakish-map')
const map2 = new WeakishMap()
map2.set({}, 'value')
map2.set('key', 'value')
map2.get('key') // 'value'
Array.from(map2.keys()) // ['key']
```

## Related

* [weakish-set](https://github.com/lamansky/weakish-set)
