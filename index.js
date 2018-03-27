'use strict'

const weakable = require('weakable')

const _map = Symbol('map')
const _strong = Symbol('strong')
const _weak = Symbol('weak')

module.exports = class WeakishMap {
  constructor (items) {
    this[_strong] = new Map()
    this[_weak] = new WeakMap()
  }

  [_map] (key) { return weakable(key) ? this[_weak] : this[_strong] }

  has (key) { return this[_map](key).has(key) }
  get (key) { return this[_map](key).get(key) }
  set (key, value) { return this[_map](key).set(key, value) }
  delete (key) { return this[_map](key).delete(key) }

  clear () {
    this[_strong].clear()
    this[_weak] = new WeakMap()
  }
}
