'use strict'

const weakable = require('weakable')

const _map = Symbol('map')
const _strong = Symbol('strong')
const _newWeak = Symbol('newWeak')
const _weak = Symbol('weak')

module.exports = class WeakishMap {
  constructor (items = [], {StrongMap: Strong = Map, strongMap = () => new Strong(), WeakMap: Weak = WeakMap, weakMap = () => new Weak()} = {}) {
    this[_strong] = strongMap()
    this[_weak] = weakMap()
    this[_newWeak] = weakMap
    for (const [k, v] of items) this.set(k, v)
  }

  [_map] (key) { return weakable(key) ? this[_weak] : this[_strong] }

  has (key) { return this[_map](key).has(key) }
  get (key) { return this[_map](key).get(key) }
  set (key, value) { return this[_map](key).set(key, value) }
  delete (key) { return this[_map](key).delete(key) }
  clear () { this[_strong].clear(); this[_weak] = this[_newWeak]() }

  entries (...args) { return this[_strong].entries(...args) }
  forEach (...args) { return this[_strong].forEach(...args) }
  keys (...args) { return this[_strong].keys(...args) }
  values (...args) { return this[_strong].values(...args) }
}
