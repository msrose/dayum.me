(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dayum = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @author Michael Rose
 * @license https://github.com/msrose/dayum/blob/master/LICENSE
 */

'use strict';

/**
 * Generates a two-syllable damn
 * @param {number} [count=1] The number of "a"s in the two-syllable damn
 * @returns {string} A string representation of the two-syllable damn
 * @example
 * const dayum = require('dayum');
 * dayum(5); // 'daaaaayum'
 */

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var dayum = function dayum() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var tsd = 'da';
  while (count-- > 1) {
    tsd += 'a';
  }
  tsd += 'yum';
  return tsd;
};

/**
 * Generates a two-syllable damn of random length
 * @param {number} [min=1] The fewest possible number of "a"s in the daymn
 * @param {number} [max=100] The greatest possible number of "a"s in the daymn
 * @returns {string} A string representation of the two-syllable damn
 * @example
 * const dayum = require('dayum');
 * dayum.random(5, 15); // 'daaaaaaaaaaayum'
 */
dayum.random = function () {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : min;

  if (min >= max) min = 1;
  return dayum(Math.max(Math.floor(Math.random() * (max - min + 1)) + min, 1));
};

var dayumRegex = /^d(a+)yum$/;

var createRandomDayumRange = function createRandomDayumRange(midpoint) {
  var variance = Math.max(Math.floor(midpoint / 2), 1);
  return dayum.random.bind(dayum, midpoint - variance, midpoint + variance);
};

/**
 * Adds all possible dayum methods to the given object.
 * If the environment supports proxies (and no `count` is specified),
 * you'll be able to call any `/da+yum/` method. Any dayum method returns a random two-syllable
 * dayum based on the number of "a"s in the method.
 * If there are no proxies (and no `count` is specified),
 * you'll only be able to call `/da{1,50}yum/` by default. :'(
 * @param {object} object The object to dayumify.
 * @param {number} [count=0] The number of dayum methods to add to `object`. 0 indicates all possible methods.
 * @returns {object} A shallow copy of the given `object`, dayumified
 * @example
 * const dayum = require('dayum');
 * const x = dayum.dayumify({ prop: 'hi!' });
 * x.prop; // 'hi!'
 * x.daaaaaaaaaayum(); // equivalent to dayum.random(5, 15)
 */
dayum.dayumify = function (object) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (count === 0 && typeof Proxy !== 'undefined') {
    return new Proxy(object, {
      get: function get(obj, prop) {
        var result = dayumRegex.exec(String(prop));
        if (result) {
          var _result = _slicedToArray(result, 2),
              allAys = _result[1];

          return createRandomDayumRange(allAys.length);
        }
        return obj[prop];
      }
    });
  } else {
    if (count === 0) {
      count = 50;
    }
    var dayumifiedObject = {};
    for (var prop in object) {
      if (Object.prototype.hasOwnProperty.call(object, prop)) {
        dayumifiedObject[prop] = object[prop];
      }
    }
    for (var i = 1; i <= count; i++) {
      dayumifiedObject[dayum(i)] = createRandomDayumRange(i);
    }
    return dayumifiedObject;
  }
};

dayum = dayum.dayumify(dayum);

module.exports = dayum;

},{}]},{},[1])(1)
});