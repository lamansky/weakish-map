'use strict'

const assert = require('assert')
const WeakishMap = require('.')

describe('WeakishMap', function () {
  describe('set()', function () {
    it('should work for objects', function () {
      const map = new WeakishMap()
      map.set({}, 'value')
    })

    it('should work for strings', function () {
      const map = new WeakishMap()
      map.set('test', 'value')
    })
  })

  describe('has()', function () {
    it('should work for objects', function () {
      const map = new WeakishMap()
      const key = {}
      map.set(key, 'value')
      assert(map.has(key))
    })

    it('should work for strings', function () {
      const map = new WeakishMap()
      const key = 'test'
      map.set(key, 'value')
      assert(map.has(key))
    })
  })

  describe('get()', function () {
    it('should work for objects', function () {
      const map = new WeakishMap()
      const key = {}
      map.set(key, 'value')
      assert.strictEqual(map.get(key), 'value')
    })

    it('should work for strings', function () {
      const map = new WeakishMap()
      const key = 'test'
      map.set(key, 'value')
      assert.strictEqual(map.get(key), 'value')
    })
  })

  describe('delete()', function () {
    it('should work for objects', function () {
      const map = new WeakishMap()
      const key = {}
      map.set(key, 'value')
      assert(map.has(key))
      map.delete(key)
      assert(!map.has(key))
    })

    it('should work for strings', function () {
      const map = new WeakishMap()
      const key = 'test'
      map.set(key, 'value')
      assert(map.has(key))
      map.delete(key)
      assert(!map.has(key))
    })
  })

  describe('clear()', function () {
    it('should work for objects', function () {
      const map = new WeakishMap()
      const key = {}
      map.set(key, 'value')
      assert(map.has(key))
      map.clear()
      assert(!map.has(key))
    })

    it('should work for strings', function () {
      const map = new WeakishMap()
      const key = 'test'
      map.set(key, 'value')
      assert(map.has(key))
      map.clear()
      assert(!map.has(key))
    })
  })

  describe('entries()', function () {
    it('should return non-object entries', function () {
      const map = new WeakishMap()
      map.set({}, 'object')
      map.set('key', 'value')
      assert.strictEqual(JSON.stringify(Array.from(map.entries())), JSON.stringify([['key', 'value']]))
    })
  })

  describe('forEach()', function () {
    it('should operate on non-object entries', function () {
      const map = new WeakishMap()
      map.set({}, 'object')
      map.set('key', 'value')

      let times = 0
      map.forEach((value, key) => {
        assert.strictEqual(value, 'value')
        assert.strictEqual(key, 'key')
        times++
      })
      assert.strictEqual(times, 1)
    })
  })

  describe('keys()', function () {
    it('should return non-object keys', function () {
      const map = new WeakishMap()
      map.set({}, 'object')
      map.set('key', 'value')
      assert.strictEqual(JSON.stringify(Array.from(map.keys())), JSON.stringify(['key']))
    })
  })

  describe('values()', function () {
    it('should return non-object values', function () {
      const map = new WeakishMap()
      map.set({}, 'object')
      map.set('key', 'value')
      assert.strictEqual(JSON.stringify(Array.from(map.values())), JSON.stringify(['value']))
    })
  })
})
