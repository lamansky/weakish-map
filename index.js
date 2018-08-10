'use strict'

const weakable = require('weakable')

const _map = Symbol('map')
const _strong = Symbol('strong')
const _weak = Symbol('weak')
const _WeakMap = Symbol('WeakMap')

module.exports = class WeakishMap {
  constructor (items = [], {StrongMap: Strong = Map, WeakMap: Weak = WeakMap} = {}) {
    this[_strong] = new Strong()
    this[_weak] = new Weak()
    this[_WeakMap] = Weak
    for (const [k, v] of items) this.set(k, v)
  }

  [_map] (key) { return weakable(key) ? this[_weak] : this[_strong] }

  has (key) { return this[_map](key).has(key) }
  get (key) { return this[_map](key).get(key) }
  set (key, value) { return this[_map](key).set(key, value) }
  delete (key) { return this[_map](key).delete(key) }
  clear () { this[_strong].clear(); this[_weak] = new this[_WeakMap]() }

  entries (...args) { return this[_strong].entries(...args) }
  forEach (...args) { return this[_strong].forEach(...args) }
  keys (...args) { return this[_strong].keys(...args) }
  values (...args) { return this[_strong].values(...args) }
}
