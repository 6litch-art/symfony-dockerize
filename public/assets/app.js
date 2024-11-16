/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/controllers sync recursive ./var/modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!***************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./var/modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \***************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./var/modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./var/modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!***********************************************************************************************!*\
  !*** ./var/modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./var/modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./var/modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./var/modules/@hotwired/stimulus/dist/stimulus.js":
/*!*********************************************************!*\
  !*** ./var/modules/@hotwired/stimulus/dist/stimulus.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Application: () => (/* binding */ Application),
/* harmony export */   AttributeObserver: () => (/* binding */ AttributeObserver),
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   Controller: () => (/* binding */ Controller),
/* harmony export */   ElementObserver: () => (/* binding */ ElementObserver),
/* harmony export */   IndexedMultimap: () => (/* binding */ IndexedMultimap),
/* harmony export */   Multimap: () => (/* binding */ Multimap),
/* harmony export */   SelectorObserver: () => (/* binding */ SelectorObserver),
/* harmony export */   StringMapObserver: () => (/* binding */ StringMapObserver),
/* harmony export */   TokenListObserver: () => (/* binding */ TokenListObserver),
/* harmony export */   ValueListObserver: () => (/* binding */ ValueListObserver),
/* harmony export */   add: () => (/* binding */ _add),
/* harmony export */   defaultSchema: () => (/* binding */ defaultSchema),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   fetch: () => (/* binding */ fetch),
/* harmony export */   prune: () => (/* binding */ prune)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
Stimulus 3.2.1
Copyright © 2023 Basecamp, LLC
 */
var EventListener = /*#__PURE__*/function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    _classCallCheck(this, EventListener);
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }
  return _createClass(EventListener, [{
    key: "connect",
    value: function connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.unorderedBindings["delete"](binding);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var extendedEvent = extendEvent(event);
      var _iterator = _createForOfIteratorHelper(this.bindings),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var binding = _step.value;
          if (extendedEvent.immediatePropagationStopped) {
            break;
          } else {
            binding.handleEvent(extendedEvent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "hasBindings",
    value: function hasBindings() {
      return this.unorderedBindings.size > 0;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
          rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  }]);
}();
function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var _stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        _stopImmediatePropagation.call(this);
      }
    });
  }
}
var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(application) {
    _classCallCheck(this, Dispatcher);
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }
  return _createClass(Dispatcher, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.connect();
        });
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.disconnect();
        });
      }
    }
  }, {
    key: "eventListeners",
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      var clearEventListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
      if (clearEventListeners) this.clearEventListenersForBinding(binding);
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "clearEventListenersForBinding",
    value: function clearEventListenersForBinding(binding) {
      var eventListener = this.fetchEventListenerForBinding(binding);
      if (!eventListener.hasBindings()) {
        eventListener.disconnect();
        this.removeMappedEventListenerFor(binding);
      }
    }
  }, {
    key: "removeMappedEventListenerFor",
    value: function removeMappedEventListenerFor(binding) {
      var eventTarget = binding.eventTarget,
        eventName = binding.eventName,
        eventOptions = binding.eventOptions;
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      eventListenerMap["delete"](cacheKey);
      if (eventListenerMap.size == 0) this.eventListenerMaps["delete"](eventTarget);
    }
  }, {
    key: "fetchEventListenerForBinding",
    value: function fetchEventListenerForBinding(binding) {
      var eventTarget = binding.eventTarget,
        eventName = binding.eventName,
        eventOptions = binding.eventOptions;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
  }, {
    key: "fetchEventListener",
    value: function fetchEventListener(eventTarget, eventName, eventOptions) {
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      var eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
  }, {
    key: "createEventListener",
    value: function createEventListener(eventTarget, eventName, eventOptions) {
      var eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
  }, {
    key: "fetchEventListenerMapForEventTarget",
    value: function fetchEventListenerMapForEventTarget(eventTarget) {
      var eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(eventName, eventOptions) {
      var parts = [eventName];
      Object.keys(eventOptions).sort().forEach(function (key) {
        parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
      });
      return parts.join(":");
    }
  }]);
}();
var defaultActionDescriptorFilters = {
  stop: function stop(_ref) {
    var event = _ref.event,
      value = _ref.value;
    if (value) event.stopPropagation();
    return true;
  },
  prevent: function prevent(_ref2) {
    var event = _ref2.event,
      value = _ref2.value;
    if (value) event.preventDefault();
    return true;
  },
  self: function self(_ref3) {
    var event = _ref3.event,
      value = _ref3.value,
      element = _ref3.element;
    if (value) {
      return element === event.target;
    } else {
      return true;
    }
  }
};
var descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  var eventName = matches[2];
  var keyFilter = matches[3];
  if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
    eventName += ".".concat(keyFilter);
    keyFilter = "";
  }
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: eventName,
    eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
    identifier: matches[5],
    methodName: matches[6],
    keyFilter: matches[1] || keyFilter
  };
}
function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}
function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    return Object.assign(options, _defineProperty({}, token.replace(/^!/, ""), !/^!/.test(token)));
  }, {});
}
function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}
function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, _char) {
    return _char.toUpperCase();
  });
}
function namespaceCamelize(value) {
  return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
}
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, _char2) {
    return "-".concat(_char2.toLowerCase());
  });
}
function tokenize(value) {
  return value.match(/[^\s]+/g) || [];
}
function isSomething(object) {
  return object !== null && object !== undefined;
}
function hasProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
var allModifiers = ["meta", "ctrl", "alt", "shift"];
var Action = /*#__PURE__*/function () {
  function Action(element, index, descriptor, schema) {
    _classCallCheck(this, Action);
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
    this.keyFilter = descriptor.keyFilter || "";
    this.schema = schema;
  }
  return _createClass(Action, [{
    key: "toString",
    value: function toString() {
      var eventFilter = this.keyFilter ? ".".concat(this.keyFilter) : "";
      var eventTarget = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
      return "".concat(this.eventName).concat(eventFilter).concat(eventTarget, "->").concat(this.identifier, "#").concat(this.methodName);
    }
  }, {
    key: "shouldIgnoreKeyboardEvent",
    value: function shouldIgnoreKeyboardEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      var filters = this.keyFilter.split("+");
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      var standardFilter = filters.filter(function (key) {
        return !allModifiers.includes(key);
      })[0];
      if (!standardFilter) {
        return false;
      }
      if (!hasProperty(this.keyMappings, standardFilter)) {
        error("contains unknown key filter: ".concat(this.keyFilter));
      }
      return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
  }, {
    key: "shouldIgnoreMouseEvent",
    value: function shouldIgnoreMouseEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      var filters = [this.keyFilter];
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      return false;
    }
  }, {
    key: "params",
    get: function get() {
      var params = {};
      var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"), "i");
      for (var _i = 0, _Array$from = Array.from(this.element.attributes); _i < _Array$from.length; _i++) {
        var _Array$from$_i = _Array$from[_i],
          name = _Array$from$_i.name,
          value = _Array$from$_i.value;
        var match = name.match(pattern);
        var key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
  }, {
    key: "eventTargetName",
    get: function get() {
      return stringifyEventTarget(this.eventTarget);
    }
  }, {
    key: "keyMappings",
    get: function get() {
      return this.schema.keyMappings;
    }
  }, {
    key: "keyFilterDissatisfied",
    value: function keyFilterDissatisfied(event, filters) {
      var _allModifiers$map = allModifiers.map(function (modifier) {
          return filters.includes(modifier);
        }),
        _allModifiers$map2 = _slicedToArray(_allModifiers$map, 4),
        meta = _allModifiers$map2[0],
        ctrl = _allModifiers$map2[1],
        alt = _allModifiers$map2[2],
        shift = _allModifiers$map2[3];
      return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
  }], [{
    key: "forToken",
    value: function forToken(token, schema) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
  }]);
}();
var defaultEventNames = {
  a: function a() {
    return "click";
  },
  button: function button() {
    return "click";
  },
  form: function form() {
    return "submit";
  },
  details: function details() {
    return "toggle";
  },
  input: function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  select: function select() {
    return "change";
  },
  textarea: function textarea() {
    return "input";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();
  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}
function error(message) {
  throw new Error(message);
}
function typecast(value) {
  try {
    return JSON.parse(value);
  } catch (o_O) {
    return value;
  }
}
var Binding = /*#__PURE__*/function () {
  function Binding(context, action) {
    _classCallCheck(this, Binding);
    this.context = context;
    this.action = action;
  }
  return _createClass(Binding, [{
    key: "index",
    get: function get() {
      return this.action.index;
    }
  }, {
    key: "eventTarget",
    get: function get() {
      return this.action.eventTarget;
    }
  }, {
    key: "eventOptions",
    get: function get() {
      return this.action.eventOptions;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var actionEvent = this.prepareActionEvent(event);
      if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
        this.invokeWithEvent(actionEvent);
      }
    }
  }, {
    key: "eventName",
    get: function get() {
      return this.action.eventName;
    }
  }, {
    key: "method",
    get: function get() {
      var method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
    }
  }, {
    key: "applyEventModifiers",
    value: function applyEventModifiers(event) {
      var element = this.action.element;
      var actionDescriptorFilters = this.context.application.actionDescriptorFilters;
      var controller = this.context.controller;
      var passes = true;
      for (var _i2 = 0, _Object$entries = Object.entries(this.eventOptions); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          name = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (name in actionDescriptorFilters) {
          var filter = actionDescriptorFilters[name];
          passes = passes && filter({
            name: name,
            value: value,
            event: event,
            element: element,
            controller: controller
          });
        } else {
          continue;
        }
      }
      return passes;
    }
  }, {
    key: "prepareActionEvent",
    value: function prepareActionEvent(event) {
      return Object.assign(event, {
        params: this.action.params
      });
    }
  }, {
    key: "invokeWithEvent",
    value: function invokeWithEvent(event) {
      var target = event.target,
        currentTarget = event.currentTarget;
      try {
        this.method.call(this.controller, event);
        this.context.logDebugActivity(this.methodName, {
          event: event,
          target: target,
          currentTarget: currentTarget,
          action: this.methodName
        });
      } catch (error) {
        var identifier = this.identifier,
          controller = this.controller,
          element = this.element,
          index = this.index;
        var detail = {
          identifier: identifier,
          controller: controller,
          element: element,
          index: index,
          event: event
        };
        this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
      }
    }
  }, {
    key: "willBeInvokedByEvent",
    value: function willBeInvokedByEvent(event) {
      var eventTarget = event.target;
      if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
        return false;
      }
      if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
        return false;
      }
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "methodName",
    get: function get() {
      return this.action.methodName;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);
}();
var ElementObserver = /*#__PURE__*/function () {
  function ElementObserver(element, delegate) {
    var _this = this;
    _classCallCheck(this, ElementObserver);
    this.mutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    };
    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }
  return _createClass(ElementObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var matches = new Set(this.matchElementsInTree());
        for (var _i3 = 0, _Array$from2 = Array.from(this.elements); _i3 < _Array$from2.length; _i3++) {
          var element = _Array$from2[_i3];
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (var _i4 = 0, _Array$from3 = Array.from(matches); _i4 < _Array$from3.length; _i4++) {
          var _element2 = _Array$from3[_i4];
          this.addElement(_element2);
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator2 = _createForOfIteratorHelper(mutations),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mutation = _step2.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
  }, {
    key: "processAttributeChange",
    value: function processAttributeChange(element, attributeName) {
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
  }, {
    key: "processRemovedNodes",
    value: function processRemovedNodes(nodes) {
      for (var _i5 = 0, _Array$from4 = Array.from(nodes); _i5 < _Array$from4.length; _i5++) {
        var node = _Array$from4[_i5];
        var element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
  }, {
    key: "processAddedNodes",
    value: function processAddedNodes(nodes) {
      for (var _i6 = 0, _Array$from5 = Array.from(nodes); _i6 < _Array$from5.length; _i6++) {
        var node = _Array$from5[_i6];
        var element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return this.delegate.matchElement(element);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree() {
      var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
      return this.delegate.matchElementsInTree(tree);
    }
  }, {
    key: "processTree",
    value: function processTree(tree, processor) {
      var _iterator3 = _createForOfIteratorHelper(this.matchElementsInTree(tree)),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          processor.call(this, element);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "elementFromNode",
    value: function elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
  }, {
    key: "elementIsActive",
    value: function elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      if (this.elements.has(element)) {
        this.elements["delete"](element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  }]);
}();
var AttributeObserver = /*#__PURE__*/function () {
  function AttributeObserver(element, attributeName, delegate) {
    _classCallCheck(this, AttributeObserver);
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this);
  }
  return _createClass(AttributeObserver, [{
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "selector",
    get: function get() {
      return "[".concat(this.attributeName, "]");
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.elementObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var match = this.matchElement(tree) ? [tree] : [];
      var matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  }]);
}();
function _add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key)["delete"](value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);
  if (!values) {
    values = new Set();
    map.set(key, values);
  }
  return values;
}
function prune(map, key) {
  var values = map.get(key);
  if (values != null && values.size == 0) {
    map["delete"](key);
  }
}
var Multimap = /*#__PURE__*/function () {
  function Multimap() {
    _classCallCheck(this, Multimap);
    this.valuesByKey = new Map();
  }
  return _createClass(Multimap, [{
    key: "keys",
    get: function get() {
      return Array.from(this.valuesByKey.keys());
    }
  }, {
    key: "values",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    }
  }, {
    key: "size",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _add(this.valuesByKey, key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      del(this.valuesByKey, key, value);
    }
  }, {
    key: "has",
    value: function has(key, value) {
      var values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.valuesByKey.has(key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      var sets = Array.from(this.valuesByKey.values());
      return sets.some(function (set) {
        return set.has(value);
      });
    }
  }, {
    key: "getValuesForKey",
    value: function getValuesForKey(key) {
      var values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          _key = _ref5[0],
          values = _ref5[1];
        return values.has(value);
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          key = _ref7[0],
          _values = _ref7[1];
        return key;
      });
    }
  }]);
}();
var IndexedMultimap = /*#__PURE__*/function (_Multimap) {
  function IndexedMultimap() {
    var _this2;
    _classCallCheck(this, IndexedMultimap);
    _this2 = _callSuper(this, IndexedMultimap);
    _this2.keysByValue = new Map();
    return _this2;
  }
  _inherits(IndexedMultimap, _Multimap);
  return _createClass(IndexedMultimap, [{
    key: "values",
    get: function get() {
      return Array.from(this.keysByValue.keys());
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _superPropGet(IndexedMultimap, "add", this, 3)([key, value]);
      _add(this.keysByValue, value, key);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      _superPropGet(IndexedMultimap, "delete", this, 3)([key, value]);
      del(this.keysByValue, value, key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.keysByValue.has(value);
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      var set = this.keysByValue.get(value);
      return set ? Array.from(set) : [];
    }
  }]);
}(Multimap);
var SelectorObserver = /*#__PURE__*/function () {
  function SelectorObserver(element, selector, delegate, details) {
    _classCallCheck(this, SelectorObserver);
    this._selector = selector;
    this.details = details;
    this.elementObserver = new ElementObserver(element, this);
    this.delegate = delegate;
    this.matchesByElement = new Multimap();
  }
  return _createClass(SelectorObserver, [{
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "selector",
    get: function get() {
      return this._selector;
    },
    set: function set(selector) {
      this._selector = selector;
      this.refresh();
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.elementObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      var selector = this.selector;
      if (selector) {
        var matches = element.matches(selector);
        if (this.delegate.selectorMatchElement) {
          return matches && this.delegate.selectorMatchElement(element, this.details);
        }
        return matches;
      } else {
        return false;
      }
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var _this3 = this;
      var selector = this.selector;
      if (selector) {
        var match = this.matchElement(tree) ? [tree] : [];
        var matches = Array.from(tree.querySelectorAll(selector)).filter(function (match) {
          return _this3.matchElement(match);
        });
        return match.concat(matches);
      } else {
        return [];
      }
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      var selector = this.selector;
      if (selector) {
        this.selectorMatched(element, selector);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      var selectors = this.matchesByElement.getKeysForValue(element);
      var _iterator4 = _createForOfIteratorHelper(selectors),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var selector = _step4.value;
          this.selectorUnmatched(element, selector);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, _attributeName) {
      var selector = this.selector;
      if (selector) {
        var matches = this.matchElement(element);
        var matchedBefore = this.matchesByElement.has(selector, element);
        if (matches && !matchedBefore) {
          this.selectorMatched(element, selector);
        } else if (!matches && matchedBefore) {
          this.selectorUnmatched(element, selector);
        }
      }
    }
  }, {
    key: "selectorMatched",
    value: function selectorMatched(element, selector) {
      this.delegate.selectorMatched(element, selector, this.details);
      this.matchesByElement.add(selector, element);
    }
  }, {
    key: "selectorUnmatched",
    value: function selectorUnmatched(element, selector) {
      this.delegate.selectorUnmatched(element, selector, this.details);
      this.matchesByElement["delete"](selector, element);
    }
  }]);
}();
var StringMapObserver = /*#__PURE__*/function () {
  function StringMapObserver(element, delegate) {
    var _this4 = this;
    _classCallCheck(this, StringMapObserver);
    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this4.processMutations(mutations);
    });
  }
  return _createClass(StringMapObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeOldValue: true
        });
        this.refresh();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var _iterator5 = _createForOfIteratorHelper(this.knownAttributeNames),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var attributeName = _step5.value;
            this.refreshAttribute(attributeName, null);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator6 = _createForOfIteratorHelper(mutations),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var mutation = _step6.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      var attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
  }, {
    key: "refreshAttribute",
    value: function refreshAttribute(attributeName, oldValue) {
      var key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        var value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          var _oldValue = this.stringMap.get(attributeName);
          this.stringMap["delete"](attributeName);
          if (_oldValue) this.stringMapKeyRemoved(key, attributeName, _oldValue);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
  }, {
    key: "knownAttributeNames",
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
  }, {
    key: "currentAttributeNames",
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    }
  }, {
    key: "recordedAttributeNames",
    get: function get() {
      return Array.from(this.stringMap.keys());
    }
  }]);
}();
var TokenListObserver = /*#__PURE__*/function () {
  function TokenListObserver(element, attributeName, delegate) {
    _classCallCheck(this, TokenListObserver);
    this.attributeObserver = new AttributeObserver(element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new Multimap();
  }
  return _createClass(TokenListObserver, [{
    key: "started",
    get: function get() {
      return this.attributeObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.attributeObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.attributeObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.attributeObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.attributeObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.attributeObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.attributeObserver.attributeName;
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(element) {
      var _this$refreshTokensFo = this.refreshTokensForElement(element),
        _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2),
        unmatchedTokens = _this$refreshTokensFo2[0],
        matchedTokens = _this$refreshTokensFo2[1];
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
  }, {
    key: "tokensMatched",
    value: function tokensMatched(tokens) {
      var _this5 = this;
      tokens.forEach(function (token) {
        return _this5.tokenMatched(token);
      });
    }
  }, {
    key: "tokensUnmatched",
    value: function tokensUnmatched(tokens) {
      var _this6 = this;
      tokens.forEach(function (token) {
        return _this6.tokenUnmatched(token);
      });
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement["delete"](token.element, token);
    }
  }, {
    key: "refreshTokensForElement",
    value: function refreshTokensForElement(element) {
      var previousTokens = this.tokensByElement.getValuesForKey(element);
      var currentTokens = this.readTokensForElement(element);
      var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
          previousToken = _ref9[0],
          currentToken = _ref9[1];
        return !tokensAreEqual(previousToken, currentToken);
      });
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
  }, {
    key: "readTokensForElement",
    value: function readTokensForElement(element) {
      var attributeName = this.attributeName;
      var tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  }]);
}();
function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}
function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}
function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}
var ValueListObserver = /*#__PURE__*/function () {
  function ValueListObserver(element, attributeName, delegate) {
    _classCallCheck(this, ValueListObserver);
    this.tokenListObserver = new TokenListObserver(element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }
  return _createClass(ValueListObserver, [{
    key: "started",
    get: function get() {
      return this.tokenListObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.tokenListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenListObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.tokenListObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.tokenListObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.tokenListObserver.attributeName;
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      var element = token.element;
      var _this$fetchParseResul = this.fetchParseResultForToken(token),
        value = _this$fetchParseResul.value;
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      var element = token.element;
      var _this$fetchParseResul2 = this.fetchParseResultForToken(token),
        value = _this$fetchParseResul2.value;
      if (value) {
        this.fetchValuesByTokenForElement(element)["delete"](token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
  }, {
    key: "fetchParseResultForToken",
    value: function fetchParseResultForToken(token) {
      var parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
  }, {
    key: "fetchValuesByTokenForElement",
    value: function fetchValuesByTokenForElement(element) {
      var valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
  }, {
    key: "parseToken",
    value: function parseToken(token) {
      try {
        var value = this.delegate.parseValueForToken(token);
        return {
          value: value
        };
      } catch (error) {
        return {
          error: error
        };
      }
    }
  }]);
}();
var BindingObserver = /*#__PURE__*/function () {
  function BindingObserver(context, delegate) {
    _classCallCheck(this, BindingObserver);
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }
  return _createClass(BindingObserver, [{
    key: "start",
    value: function start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "actionAttribute",
    get: function get() {
      return this.schema.actionAttribute;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    }
  }, {
    key: "connectAction",
    value: function connectAction(action) {
      var binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
  }, {
    key: "disconnectAction",
    value: function disconnectAction(action) {
      var binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction["delete"](action);
        this.delegate.bindingDisconnected(binding);
      }
    }
  }, {
    key: "disconnectAllActions",
    value: function disconnectAllActions() {
      var _this7 = this;
      this.bindings.forEach(function (binding) {
        return _this7.delegate.bindingDisconnected(binding, true);
      });
      this.bindingsByAction.clear();
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var action = Action.forToken(token, this.schema);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, action) {
      this.connectAction(action);
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  }]);
}();
var ValueObserver = /*#__PURE__*/function () {
  function ValueObserver(context, receiver) {
    _classCallCheck(this, ValueObserver);
    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
  }
  return _createClass(ValueObserver, [{
    key: "start",
    value: function start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stringMapObserver.stop();
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "getStringMapKeyForAttribute",
    value: function getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      var descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, name, oldValue) {
      var descriptor = this.valueDescriptorNameMap[name];
      if (value === null) return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      var descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
  }, {
    key: "invokeChangedCallbacksForDefaultValues",
    value: function invokeChangedCallbacksForDefaultValues() {
      var _iterator7 = _createForOfIteratorHelper(this.valueDescriptors),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = _step7.value,
            key = _step7$value.key,
            name = _step7$value.name,
            defaultValue = _step7$value.defaultValue,
            writer = _step7$value.writer;
          if (defaultValue != undefined && !this.controller.data.has(key)) {
            this.invokeChangedCallback(name, writer(defaultValue), undefined);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "invokeChangedCallback",
    value: function invokeChangedCallback(name, rawValue, rawOldValue) {
      var changedMethodName = "".concat(name, "Changed");
      var changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        var descriptor = this.valueDescriptorNameMap[name];
        try {
          var value = descriptor.reader(rawValue);
          var oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error) {
          if (error instanceof TypeError) {
            error.message = "Stimulus Value \"".concat(this.context.identifier, ".").concat(descriptor.name, "\" - ").concat(error.message);
          }
          throw error;
        }
      }
    }
  }, {
    key: "valueDescriptors",
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    }
  }, {
    key: "valueDescriptorNameMap",
    get: function get() {
      var _this8 = this;
      var descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach(function (key) {
        var descriptor = _this8.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
  }, {
    key: "hasValue",
    value: function hasValue(attributeName) {
      var descriptor = this.valueDescriptorNameMap[attributeName];
      var hasMethodName = "has".concat(capitalize(descriptor.name));
      return this.receiver[hasMethodName];
    }
  }]);
}();
var TargetObserver = /*#__PURE__*/function () {
  function TargetObserver(context, delegate) {
    _classCallCheck(this, TargetObserver);
    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap();
  }
  return _createClass(TargetObserver, [{
    key: "start",
    value: function start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(_ref10) {
      var element = _ref10.element,
        name = _ref10.content;
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(_ref11) {
      var element = _ref11.element,
        name = _ref11.content;
      this.disconnectTarget(element, name);
    }
  }, {
    key: "connectTarget",
    value: function connectTarget(element, name) {
      var _this9 = this;
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this9.delegate.targetConnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectTarget",
    value: function disconnectTarget(element, name) {
      var _this10 = this;
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName["delete"](name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this10.delegate.targetDisconnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectAllTargets",
    value: function disconnectAllTargets() {
      var _iterator8 = _createForOfIteratorHelper(this.targetsByName.keys),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var name = _step8.value;
          var _iterator9 = _createForOfIteratorHelper(this.targetsByName.getValuesForKey(name)),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var element = _step9.value;
              this.disconnectTarget(element, name);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "attributeName",
    get: function get() {
      return "data-".concat(this.context.identifier, "-target");
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);
}();
function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, _toConsumableArray(getOwnStaticObjectPairs(constructor, propertyName)));
    return pairs;
  }, []);
}
function getAncestorsForConstructor(constructor) {
  var ancestors = [];
  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }
  return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}
var OutletObserver = /*#__PURE__*/function () {
  function OutletObserver(context, delegate) {
    _classCallCheck(this, OutletObserver);
    this.started = false;
    this.context = context;
    this.delegate = delegate;
    this.outletsByName = new Multimap();
    this.outletElementsByName = new Multimap();
    this.selectorObserverMap = new Map();
    this.attributeObserverMap = new Map();
  }
  return _createClass(OutletObserver, [{
    key: "start",
    value: function start() {
      var _this11 = this;
      if (!this.started) {
        this.outletDefinitions.forEach(function (outletName) {
          _this11.setupSelectorObserverForOutlet(outletName);
          _this11.setupAttributeObserverForOutlet(outletName);
        });
        this.started = true;
        this.dependentContexts.forEach(function (context) {
          return context.refresh();
        });
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.selectorObserverMap.forEach(function (observer) {
        return observer.refresh();
      });
      this.attributeObserverMap.forEach(function (observer) {
        return observer.refresh();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.disconnectAllOutlets();
        this.stopSelectorObservers();
        this.stopAttributeObservers();
      }
    }
  }, {
    key: "stopSelectorObservers",
    value: function stopSelectorObservers() {
      if (this.selectorObserverMap.size > 0) {
        this.selectorObserverMap.forEach(function (observer) {
          return observer.stop();
        });
        this.selectorObserverMap.clear();
      }
    }
  }, {
    key: "stopAttributeObservers",
    value: function stopAttributeObservers() {
      if (this.attributeObserverMap.size > 0) {
        this.attributeObserverMap.forEach(function (observer) {
          return observer.stop();
        });
        this.attributeObserverMap.clear();
      }
    }
  }, {
    key: "selectorMatched",
    value: function selectorMatched(element, _selector, _ref12) {
      var outletName = _ref12.outletName;
      var outlet = this.getOutlet(element, outletName);
      if (outlet) {
        this.connectOutlet(outlet, element, outletName);
      }
    }
  }, {
    key: "selectorUnmatched",
    value: function selectorUnmatched(element, _selector, _ref13) {
      var outletName = _ref13.outletName;
      var outlet = this.getOutletFromMap(element, outletName);
      if (outlet) {
        this.disconnectOutlet(outlet, element, outletName);
      }
    }
  }, {
    key: "selectorMatchElement",
    value: function selectorMatchElement(element, _ref14) {
      var outletName = _ref14.outletName;
      var selector = this.selector(outletName);
      var hasOutlet = this.hasOutlet(element, outletName);
      var hasOutletController = element.matches("[".concat(this.schema.controllerAttribute, "~=").concat(outletName, "]"));
      if (selector) {
        return hasOutlet && hasOutletController && element.matches(selector);
      } else {
        return false;
      }
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(_element, attributeName) {
      var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(_element, attributeName) {
      var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(_element, attributeName) {
      var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
  }, {
    key: "connectOutlet",
    value: function connectOutlet(outlet, element, outletName) {
      var _this12 = this;
      var _a;
      if (!this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.add(outletName, outlet);
        this.outletElementsByName.add(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this12.delegate.outletConnected(outlet, element, outletName);
        });
      }
    }
  }, {
    key: "disconnectOutlet",
    value: function disconnectOutlet(outlet, element, outletName) {
      var _this13 = this;
      var _a;
      if (this.outletElementsByName.has(outletName, element)) {
        this.outletsByName["delete"](outletName, outlet);
        this.outletElementsByName["delete"](outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this13.delegate.outletDisconnected(outlet, element, outletName);
        });
      }
    }
  }, {
    key: "disconnectAllOutlets",
    value: function disconnectAllOutlets() {
      var _iterator10 = _createForOfIteratorHelper(this.outletElementsByName.keys),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var outletName = _step10.value;
          var _iterator11 = _createForOfIteratorHelper(this.outletElementsByName.getValuesForKey(outletName)),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var element = _step11.value;
              var _iterator12 = _createForOfIteratorHelper(this.outletsByName.getValuesForKey(outletName)),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var outlet = _step12.value;
                  this.disconnectOutlet(outlet, element, outletName);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }, {
    key: "updateSelectorObserverForOutlet",
    value: function updateSelectorObserverForOutlet(outletName) {
      var observer = this.selectorObserverMap.get(outletName);
      if (observer) {
        observer.selector = this.selector(outletName);
      }
    }
  }, {
    key: "setupSelectorObserverForOutlet",
    value: function setupSelectorObserverForOutlet(outletName) {
      var selector = this.selector(outletName);
      var selectorObserver = new SelectorObserver(document.body, selector, this, {
        outletName: outletName
      });
      this.selectorObserverMap.set(outletName, selectorObserver);
      selectorObserver.start();
    }
  }, {
    key: "setupAttributeObserverForOutlet",
    value: function setupAttributeObserverForOutlet(outletName) {
      var attributeName = this.attributeNameForOutletName(outletName);
      var attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
      this.attributeObserverMap.set(outletName, attributeObserver);
      attributeObserver.start();
    }
  }, {
    key: "selector",
    value: function selector(outletName) {
      return this.scope.outlets.getSelectorForOutletName(outletName);
    }
  }, {
    key: "attributeNameForOutletName",
    value: function attributeNameForOutletName(outletName) {
      return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
  }, {
    key: "getOutletNameFromOutletAttributeName",
    value: function getOutletNameFromOutletAttributeName(attributeName) {
      var _this14 = this;
      return this.outletDefinitions.find(function (outletName) {
        return _this14.attributeNameForOutletName(outletName) === attributeName;
      });
    }
  }, {
    key: "outletDependencies",
    get: function get() {
      var dependencies = new Multimap();
      this.router.modules.forEach(function (module) {
        var constructor = module.definition.controllerConstructor;
        var outlets = readInheritableStaticArrayValues(constructor, "outlets");
        outlets.forEach(function (outlet) {
          return dependencies.add(outlet, module.identifier);
        });
      });
      return dependencies;
    }
  }, {
    key: "outletDefinitions",
    get: function get() {
      return this.outletDependencies.getKeysForValue(this.identifier);
    }
  }, {
    key: "dependentControllerIdentifiers",
    get: function get() {
      return this.outletDependencies.getValuesForKey(this.identifier);
    }
  }, {
    key: "dependentContexts",
    get: function get() {
      var identifiers = this.dependentControllerIdentifiers;
      return this.router.contexts.filter(function (context) {
        return identifiers.includes(context.identifier);
      });
    }
  }, {
    key: "hasOutlet",
    value: function hasOutlet(element, outletName) {
      return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
  }, {
    key: "getOutlet",
    value: function getOutlet(element, outletName) {
      return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
  }, {
    key: "getOutletFromMap",
    value: function getOutletFromMap(element, outletName) {
      return this.outletsByName.getValuesForKey(outletName).find(function (outlet) {
        return outlet.element === element;
      });
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "router",
    get: function get() {
      return this.application.router;
    }
  }]);
}();
var Context = /*#__PURE__*/function () {
  function Context(module, scope) {
    var _this15 = this;
    _classCallCheck(this, Context);
    this.logDebugActivity = function (functionName) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var identifier = _this15.identifier,
        controller = _this15.controller,
        element = _this15.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      _this15.application.logDebugActivity(_this15.identifier, functionName, detail);
    };
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new BindingObserver(this, this.dispatcher);
    this.valueObserver = new ValueObserver(this, this.controller);
    this.targetObserver = new TargetObserver(this, this);
    this.outletObserver = new OutletObserver(this, this);
    try {
      this.controller.initialize();
      this.logDebugActivity("initialize");
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }
  return _createClass(Context, [{
    key: "connect",
    value: function connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      this.outletObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error) {
        this.handleError(error, "connecting controller");
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.outletObserver.refresh();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error) {
        this.handleError(error, "disconnecting controller");
      }
      this.outletObserver.stop();
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
  }, {
    key: "application",
    get: function get() {
      return this.module.application;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.module.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "dispatcher",
    get: function get() {
      return this.application.dispatcher;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return this.element.parentElement;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var identifier = this.identifier,
        controller = this.controller,
        element = this.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "targetConnected",
    value: function targetConnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
    }
  }, {
    key: "targetDisconnected",
    value: function targetDisconnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
    }
  }, {
    key: "outletConnected",
    value: function outletConnected(outlet, element, name) {
      this.invokeControllerMethod("".concat(namespaceCamelize(name), "OutletConnected"), outlet, element);
    }
  }, {
    key: "outletDisconnected",
    value: function outletDisconnected(outlet, element, name) {
      this.invokeControllerMethod("".concat(namespaceCamelize(name), "OutletDisconnected"), outlet, element);
    }
  }, {
    key: "invokeControllerMethod",
    value: function invokeControllerMethod(methodName) {
      var controller = this.controller;
      if (typeof controller[methodName] == "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        controller[methodName].apply(controller, args);
      }
    }
  }]);
}();
function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}
function getBlessedProperties(constructor) {
  var blessings = readInheritableStaticArrayValues(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);
    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }
    return blessedProperties;
  }, {});
}
function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var descriptor = getShadowedDescriptor(prototype, properties, key);
    if (descriptor) {
      Object.assign(shadowProperties, _defineProperty({}, key, descriptor));
    }
    return shadowProperties;
  }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }
    return descriptor;
  }
}
var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return [].concat(_toConsumableArray(Object.getOwnPropertyNames(object)), _toConsumableArray(Object.getOwnPropertySymbols(object)));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();
var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      return Reflect.construct(constructor, arguments, this instanceof extended ? this.constructor : void 0);
    }
    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }
  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };
    var b = extendWithReflect(a);
    b.prototype.a = function () {};
    return new b();
  }
  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return /*#__PURE__*/function (_constructor) {
        function extended() {
          _classCallCheck(this, extended);
          return _callSuper(this, extended, arguments);
        }
        _inherits(extended, _constructor);
        return _createClass(extended);
      }(constructor);
    };
  }
}();
function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor)
  };
}
var Module = /*#__PURE__*/function () {
  function Module(application, definition) {
    _classCallCheck(this, Module);
    this.application = application;
    this.definition = blessDefinition(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }
  return _createClass(Module, [{
    key: "identifier",
    get: function get() {
      return this.definition.identifier;
    }
  }, {
    key: "controllerConstructor",
    get: function get() {
      return this.definition.controllerConstructor;
    }
  }, {
    key: "contexts",
    get: function get() {
      return Array.from(this.connectedContexts);
    }
  }, {
    key: "connectContextForScope",
    value: function connectContextForScope(scope) {
      var context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
  }, {
    key: "disconnectContextForScope",
    value: function disconnectContextForScope(scope) {
      var context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts["delete"](context);
        context.disconnect();
      }
    }
  }, {
    key: "fetchContextForScope",
    value: function fetchContextForScope(scope) {
      var context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    }
  }]);
}();
var ClassMap = /*#__PURE__*/function () {
  function ClassMap(scope) {
    _classCallCheck(this, ClassMap);
    this.scope = scope;
  }
  return _createClass(ClassMap, [{
    key: "has",
    value: function has(name) {
      return this.data.has(this.getDataKey(name));
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.getAll(name)[0];
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
  }, {
    key: "getDataKey",
    value: function getDataKey(name) {
      return "".concat(name, "-class");
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }]);
}();
var DataMap = /*#__PURE__*/function () {
  function DataMap(scope) {
    _classCallCheck(this, DataMap);
    this.scope = scope;
  }
  return _createClass(DataMap, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "get",
    value: function get(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.has(key)) {
        var name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getAttributeNameForKey",
    value: function getAttributeNameForKey(key) {
      return "data-".concat(this.identifier, "-").concat(dasherize(key));
    }
  }]);
}();
var Guide = /*#__PURE__*/function () {
  function Guide(logger) {
    _classCallCheck(this, Guide);
    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }
  return _createClass(Guide, [{
    key: "warn",
    value: function warn(object, key, message) {
      var warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  }]);
}();
function attributeValueContainsToken(attributeName, token) {
  return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}
var TargetSet = /*#__PURE__*/function () {
  function TargetSet(scope) {
    _classCallCheck(this, TargetSet);
    this.scope = scope;
  }
  return _createClass(TargetSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(targetName) {
      return this.find(targetName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this16 = this;
      for (var _len2 = arguments.length, targetNames = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        targetNames[_key3] = arguments[_key3];
      }
      return targetNames.reduce(function (target, targetName) {
        return target || _this16.findTarget(targetName) || _this16.findLegacyTarget(targetName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this17 = this;
      for (var _len3 = arguments.length, targetNames = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        targetNames[_key4] = arguments[_key4];
      }
      return targetNames.reduce(function (targets, targetName) {
        return [].concat(_toConsumableArray(targets), _toConsumableArray(_this17.findAllTargets(targetName)), _toConsumableArray(_this17.findAllLegacyTargets(targetName)));
      }, []);
    }
  }, {
    key: "findTarget",
    value: function findTarget(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
  }, {
    key: "findAllTargets",
    value: function findAllTargets(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
  }, {
    key: "getSelectorForTargetName",
    value: function getSelectorForTargetName(targetName) {
      var attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
  }, {
    key: "findLegacyTarget",
    value: function findLegacyTarget(targetName) {
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
  }, {
    key: "findAllLegacyTargets",
    value: function findAllLegacyTargets(targetName) {
      var _this18 = this;
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map(function (element) {
        return _this18.deprecate(element, targetName);
      });
    }
  }, {
    key: "getLegacySelectorForTargetName",
    value: function getLegacySelectorForTargetName(targetName) {
      var targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
  }, {
    key: "deprecate",
    value: function deprecate(element, targetName) {
      if (element) {
        var identifier = this.identifier;
        var attributeName = this.schema.targetAttribute;
        var revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, "=\"").concat(identifier, ".").concat(targetName, "\" with ").concat(revisedAttributeName, "=\"").concat(targetName, "\". ") + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
      }
      return element;
    }
  }, {
    key: "guide",
    get: function get() {
      return this.scope.guide;
    }
  }]);
}();
var OutletSet = /*#__PURE__*/function () {
  function OutletSet(scope, controllerElement) {
    _classCallCheck(this, OutletSet);
    this.scope = scope;
    this.controllerElement = controllerElement;
  }
  return _createClass(OutletSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(outletName) {
      return this.find(outletName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this19 = this;
      for (var _len4 = arguments.length, outletNames = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
        outletNames[_key5] = arguments[_key5];
      }
      return outletNames.reduce(function (outlet, outletName) {
        return outlet || _this19.findOutlet(outletName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this20 = this;
      for (var _len5 = arguments.length, outletNames = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
        outletNames[_key6] = arguments[_key6];
      }
      return outletNames.reduce(function (outlets, outletName) {
        return [].concat(_toConsumableArray(outlets), _toConsumableArray(_this20.findAllOutlets(outletName)));
      }, []);
    }
  }, {
    key: "getSelectorForOutletName",
    value: function getSelectorForOutletName(outletName) {
      var attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
      return this.controllerElement.getAttribute(attributeName);
    }
  }, {
    key: "findOutlet",
    value: function findOutlet(outletName) {
      var selector = this.getSelectorForOutletName(outletName);
      if (selector) return this.findElement(selector, outletName);
    }
  }, {
    key: "findAllOutlets",
    value: function findAllOutlets(outletName) {
      var selector = this.getSelectorForOutletName(outletName);
      return selector ? this.findAllElements(selector, outletName) : [];
    }
  }, {
    key: "findElement",
    value: function findElement(selector, outletName) {
      var _this21 = this;
      var elements = this.scope.queryElements(selector);
      return elements.filter(function (element) {
        return _this21.matchesElement(element, selector, outletName);
      })[0];
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector, outletName) {
      var _this22 = this;
      var elements = this.scope.queryElements(selector);
      return elements.filter(function (element) {
        return _this22.matchesElement(element, selector, outletName);
      });
    }
  }, {
    key: "matchesElement",
    value: function matchesElement(element, selector, outletName) {
      var controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
      return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
  }]);
}();
var Scope = /*#__PURE__*/function () {
  function Scope(schema, element, identifier, logger) {
    var _this23 = this;
    _classCallCheck(this, Scope);
    this.targets = new TargetSet(this);
    this.classes = new ClassMap(this);
    this.data = new DataMap(this);
    this.containsElement = function (element) {
      return element.closest(_this23.controllerSelector) === _this23.element;
    };
    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger);
    this.outlets = new OutletSet(this.documentScope, element);
  }
  return _createClass(Scope, [{
    key: "findElement",
    value: function findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector) {
      return [].concat(_toConsumableArray(this.element.matches(selector) ? [this.element] : []), _toConsumableArray(this.queryElements(selector).filter(this.containsElement)));
    }
  }, {
    key: "queryElements",
    value: function queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
  }, {
    key: "controllerSelector",
    get: function get() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
  }, {
    key: "isDocumentScope",
    get: function get() {
      return this.element === document.documentElement;
    }
  }, {
    key: "documentScope",
    get: function get() {
      return this.isDocumentScope ? this : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
  }]);
}();
var ScopeObserver = /*#__PURE__*/function () {
  function ScopeObserver(element, schema, delegate) {
    _classCallCheck(this, ScopeObserver);
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }
  return _createClass(ScopeObserver, [{
    key: "start",
    value: function start() {
      this.valueListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.valueListObserver.stop();
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var element = token.element,
        identifier = token.content;
      return this.parseValueForElementAndIdentifier(element, identifier);
    }
  }, {
    key: "parseValueForElementAndIdentifier",
    value: function parseValueForElementAndIdentifier(element, identifier) {
      var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      var scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, value) {
      var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, value) {
      var referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
  }, {
    key: "fetchScopesByIdentifierForElement",
    value: function fetchScopesByIdentifierForElement(element) {
      var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  }]);
}();
var Router = /*#__PURE__*/function () {
  function Router(application) {
    _classCallCheck(this, Router);
    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
    this.scopesByIdentifier = new Multimap();
    this.modulesByIdentifier = new Map();
  }
  return _createClass(Router, [{
    key: "element",
    get: function get() {
      return this.application.element;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "logger",
    get: function get() {
      return this.application.logger;
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "modules",
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    }
  }, {
    key: "contexts",
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    }
  }, {
    key: "start",
    value: function start() {
      this.scopeObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scopeObserver.stop();
    }
  }, {
    key: "loadDefinition",
    value: function loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      var module = new Module(this.application, definition);
      this.connectModule(module);
      var afterLoad = definition.controllerConstructor.afterLoad;
      if (afterLoad) {
        afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
      }
    }
  }, {
    key: "unloadIdentifier",
    value: function unloadIdentifier(identifier) {
      var module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
  }, {
    key: "getContextForElementAndIdentifier",
    value: function getContextForElementAndIdentifier(element, identifier) {
      var module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find(function (context) {
          return context.element == element;
        });
      }
    }
  }, {
    key: "proposeToConnectScopeForElementAndIdentifier",
    value: function proposeToConnectScopeForElementAndIdentifier(element, identifier) {
      var scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
      if (scope) {
        this.scopeObserver.elementMatchedValue(scope.element, scope);
      } else {
        console.error("Couldn't find or create scope for identifier: \"".concat(identifier, "\" and element:"), element);
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      this.application.handleError(error, message, detail);
    }
  }, {
    key: "createScopeForElementAndIdentifier",
    value: function createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
  }, {
    key: "scopeConnected",
    value: function scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    }
  }, {
    key: "scopeDisconnected",
    value: function scopeDisconnected(scope) {
      this.scopesByIdentifier["delete"](scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
  }, {
    key: "connectModule",
    value: function connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.connectContextForScope(scope);
      });
    }
  }, {
    key: "disconnectModule",
    value: function disconnectModule(module) {
      this.modulesByIdentifier["delete"](module.identifier);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.disconnectContextForScope(scope);
      });
    }
  }]);
}();
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: function targetAttributeForScope(identifier) {
    return "data-".concat(identifier, "-target");
  },
  outletAttributeForScope: function outletAttributeForScope(identifier, outlet) {
    return "data-".concat(identifier, "-").concat(outlet, "-outlet");
  },
  keyMappings: Object.assign(Object.assign({
    enter: "Enter",
    tab: "Tab",
    esc: "Escape",
    space: " ",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    home: "Home",
    end: "End",
    page_up: "PageUp",
    page_down: "PageDown"
  }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map(function (c) {
    return [c, c];
  }))), objectFromEntries("0123456789".split("").map(function (n) {
    return [n, n];
  })))
};
function objectFromEntries(array) {
  return array.reduce(function (memo, _ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
      k = _ref16[0],
      v = _ref16[1];
    return Object.assign(Object.assign({}, memo), _defineProperty({}, k, v));
  }, {});
}
var Application = /*#__PURE__*/function () {
  function Application() {
    var _this24 = this;
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;
    _classCallCheck(this, Application);
    this.logger = console;
    this.debug = false;
    this.logDebugActivity = function (identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (_this24.debug) {
        _this24.logFormattedMessage(identifier, functionName, detail);
      }
    };
    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this);
    this.router = new Router(this);
    this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
  }
  return _createClass(Application, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return domReady();
            case 2:
              this.logDebugActivity("application", "starting");
              this.dispatcher.start();
              this.router.start();
              this.logDebugActivity("application", "start");
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
  }, {
    key: "register",
    value: function register(identifier, controllerConstructor) {
      this.load({
        identifier: identifier,
        controllerConstructor: controllerConstructor
      });
    }
  }, {
    key: "registerActionOption",
    value: function registerActionOption(name, filter) {
      this.actionDescriptorFilters[name] = filter;
    }
  }, {
    key: "load",
    value: function load(head) {
      var _this25 = this;
      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key7 = 1; _key7 < _len6; _key7++) {
        rest[_key7 - 1] = arguments[_key7];
      }
      var definitions = Array.isArray(head) ? head : [head].concat(rest);
      definitions.forEach(function (definition) {
        if (definition.controllerConstructor.shouldLoad) {
          _this25.router.loadDefinition(definition);
        }
      });
    }
  }, {
    key: "unload",
    value: function unload(head) {
      var _this26 = this;
      for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key8 = 1; _key8 < _len7; _key8++) {
        rest[_key8 - 1] = arguments[_key8];
      }
      var identifiers = Array.isArray(head) ? head : [head].concat(rest);
      identifiers.forEach(function (identifier) {
        return _this26.router.unloadIdentifier(identifier);
      });
    }
  }, {
    key: "controllers",
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    }
  }, {
    key: "getControllerForElementAndIdentifier",
    value: function getControllerForElementAndIdentifier(element, identifier) {
      var context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      var _a;
      this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
    }
  }, {
    key: "logFormattedMessage",
    value: function logFormattedMessage(identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      detail = Object.assign({
        application: this
      }, detail);
      this.logger.groupCollapsed("".concat(identifier, " #").concat(functionName));
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  }], [{
    key: "start",
    value: function start(element, schema) {
      var application = new this(element, schema);
      application.start();
      return application;
    }
  }]);
}();
function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return resolve();
      });
    } else {
      resolve();
    }
  });
}
function ClassPropertiesBlessing(constructor) {
  var classes = readInheritableStaticArrayValues(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}
function propertiesForClassDefinition(key) {
  return _defineProperty(_defineProperty(_defineProperty({}, "".concat(key, "Class"), {
    get: function get() {
      var classes = this.classes;
      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"".concat(attribute, "\""));
      }
    }
  }), "".concat(key, "Classes"), {
    get: function get() {
      return this.classes.getAll(key);
    }
  }), "has".concat(capitalize(key), "Class"), {
    get: function get() {
      return this.classes.has(key);
    }
  });
}
function OutletPropertiesBlessing(constructor) {
  var outlets = readInheritableStaticArrayValues(constructor, "outlets");
  return outlets.reduce(function (properties, outletDefinition) {
    return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
  }, {});
}
function getOutletController(controller, element, identifier) {
  return controller.application.getControllerForElementAndIdentifier(element, identifier);
}
function getControllerAndEnsureConnectedScope(controller, element, outletName) {
  var outletController = getOutletController(controller, element, outletName);
  if (outletController) return outletController;
  controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
  outletController = getOutletController(controller, element, outletName);
  if (outletController) return outletController;
}
function propertiesForOutletDefinition(name) {
  var camelizedName = namespaceCamelize(name);
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(camelizedName, "Outlet"), {
    get: function get() {
      var outletElement = this.outlets.find(name);
      var selector = this.outlets.getSelectorForOutletName(name);
      if (outletElement) {
        var outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
        if (outletController) return outletController;
        throw new Error("The provided outlet element is missing an outlet controller \"".concat(name, "\" instance for host controller \"").concat(this.identifier, "\""));
      }
      throw new Error("Missing outlet element \"".concat(name, "\" for host controller \"").concat(this.identifier, "\". Stimulus couldn't find a matching outlet element using selector \"").concat(selector, "\"."));
    }
  }), "".concat(camelizedName, "Outlets"), {
    get: function get() {
      var _this27 = this;
      var outlets = this.outlets.findAll(name);
      if (outlets.length > 0) {
        return outlets.map(function (outletElement) {
          var outletController = getControllerAndEnsureConnectedScope(_this27, outletElement, name);
          if (outletController) return outletController;
          console.warn("The provided outlet element is missing an outlet controller \"".concat(name, "\" instance for host controller \"").concat(_this27.identifier, "\""), outletElement);
        }).filter(function (controller) {
          return controller;
        });
      }
      return [];
    }
  }), "".concat(camelizedName, "OutletElement"), {
    get: function get() {
      var outletElement = this.outlets.find(name);
      var selector = this.outlets.getSelectorForOutletName(name);
      if (outletElement) {
        return outletElement;
      } else {
        throw new Error("Missing outlet element \"".concat(name, "\" for host controller \"").concat(this.identifier, "\". Stimulus couldn't find a matching outlet element using selector \"").concat(selector, "\"."));
      }
    }
  }), "".concat(camelizedName, "OutletElements"), {
    get: function get() {
      return this.outlets.findAll(name);
    }
  }), "has".concat(capitalize(camelizedName), "Outlet"), {
    get: function get() {
      return this.outlets.has(name);
    }
  });
}
function TargetPropertiesBlessing(constructor) {
  var targets = readInheritableStaticArrayValues(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}
function propertiesForTargetDefinition(name) {
  return _defineProperty(_defineProperty(_defineProperty({}, "".concat(name, "Target"), {
    get: function get() {
      var target = this.targets.find(name);
      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
      }
    }
  }), "".concat(name, "Targets"), {
    get: function get() {
      return this.targets.findAll(name);
    }
  }), "has".concat(capitalize(name), "Target"), {
    get: function get() {
      return this.targets.has(name);
    }
  });
}
function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this28 = this;
        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, _this28.identifier);
          var attributeName = _this28.data.getAttributeNameForKey(valueDescriptor.key);
          return Object.assign(result, _defineProperty({}, attributeName, valueDescriptor));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
  var definition = parseValueDefinitionPair(valueDefinitionPair, controller);
  var key = definition.key,
    name = definition.name,
    read = definition.reader,
    write = definition.writer;
  return _defineProperty(_defineProperty({}, name, {
    get: function get() {
      var value = this.data.get(key);
      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data["delete"](key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }), "has".concat(capitalize(name)), {
    get: function get() {
      return this.data.has(key) || definition.hasCustomDefaultValue;
    }
  });
}
function parseValueDefinitionPair(_ref21, controller) {
  var _ref22 = _slicedToArray(_ref21, 2),
    token = _ref22[0],
    typeDefinition = _ref22[1];
  return valueDescriptorForTokenAndTypeDefinition({
    controller: controller,
    token: token,
    typeDefinition: typeDefinition
  });
}
function parseValueTypeConstant(constant) {
  switch (constant) {
    case Array:
      return "array";
    case Boolean:
      return "boolean";
    case Number:
      return "number";
    case Object:
      return "object";
    case String:
      return "string";
  }
}
function parseValueTypeDefault(defaultValue) {
  switch (_typeof(defaultValue)) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
  }
  if (Array.isArray(defaultValue)) return "array";
  if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}
function parseValueTypeObject(payload) {
  var controller = payload.controller,
    token = payload.token,
    typeObject = payload.typeObject;
  var hasType = isSomething(typeObject.type);
  var hasDefault = isSomething(typeObject["default"]);
  var fullObject = hasType && hasDefault;
  var onlyType = hasType && !hasDefault;
  var onlyDefault = !hasType && hasDefault;
  var typeFromObject = parseValueTypeConstant(typeObject.type);
  var typeFromDefaultValue = parseValueTypeDefault(payload.typeObject["default"]);
  if (onlyType) return typeFromObject;
  if (onlyDefault) return typeFromDefaultValue;
  if (typeFromObject !== typeFromDefaultValue) {
    var propertyPath = controller ? "".concat(controller, ".").concat(token) : token;
    throw new Error("The specified default value for the Stimulus Value \"".concat(propertyPath, "\" must match the defined type \"").concat(typeFromObject, "\". The provided default value of \"").concat(typeObject["default"], "\" is of type \"").concat(typeFromDefaultValue, "\"."));
  }
  if (fullObject) return typeFromObject;
}
function parseValueTypeDefinition(payload) {
  var controller = payload.controller,
    token = payload.token,
    typeDefinition = payload.typeDefinition;
  var typeObject = {
    controller: controller,
    token: token,
    typeObject: typeDefinition
  };
  var typeFromObject = parseValueTypeObject(typeObject);
  var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
  var typeFromConstant = parseValueTypeConstant(typeDefinition);
  var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type) return type;
  var propertyPath = controller ? "".concat(controller, ".").concat(typeDefinition) : token;
  throw new Error("Unknown value type \"".concat(propertyPath, "\" for \"").concat(token, "\" value"));
}
function defaultValueForDefinition(typeDefinition) {
  var constant = parseValueTypeConstant(typeDefinition);
  if (constant) return defaultValuesByType[constant];
  var hasDefault = hasProperty(typeDefinition, "default");
  var hasType = hasProperty(typeDefinition, "type");
  var typeObject = typeDefinition;
  if (hasDefault) return typeObject["default"];
  if (hasType) {
    var type = typeObject.type;
    var constantFromType = parseValueTypeConstant(type);
    if (constantFromType) return defaultValuesByType[constantFromType];
  }
  return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(payload) {
  var token = payload.token,
    typeDefinition = payload.typeDefinition;
  var key = "".concat(dasherize(token), "-value");
  var type = parseValueTypeDefinition(payload);
  return {
    type: type,
    key: key,
    name: camelize(key),
    get defaultValue() {
      return defaultValueForDefinition(typeDefinition);
    },
    get hasCustomDefaultValue() {
      return parseValueTypeDefault(typeDefinition) !== undefined;
    },
    reader: readers[type],
    writer: writers[type] || writers["default"]
  };
}
var defaultValuesByType = {
  get array() {
    return [];
  },
  "boolean": false,
  number: 0,
  get object() {
    return {};
  },
  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);
    if (!Array.isArray(array)) {
      throw new TypeError("expected value of type \"array\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(array), "\""));
    }
    return array;
  },
  "boolean": function boolean(value) {
    return !(value == "0" || String(value).toLowerCase() == "false");
  },
  number: function number(value) {
    return Number(value.replace(/_/g, ""));
  },
  object: function object(value) {
    var object = JSON.parse(value);
    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("expected value of type \"object\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(object), "\""));
    }
    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  "default": writeString,
  array: writeJSON,
  object: writeJSON
};
function writeJSON(value) {
  return JSON.stringify(value);
}
function writeString(value) {
  return "".concat(value);
}
var Controller = /*#__PURE__*/function () {
  function Controller(context) {
    _classCallCheck(this, Controller);
    this.context = context;
  }
  return _createClass(Controller, [{
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "targets",
    get: function get() {
      return this.scope.targets;
    }
  }, {
    key: "outlets",
    get: function get() {
      return this.scope.outlets;
    }
  }, {
    key: "classes",
    get: function get() {
      return this.scope.classes;
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var _ref23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref23$target = _ref23.target,
        target = _ref23$target === void 0 ? this.element : _ref23$target,
        _ref23$detail = _ref23.detail,
        detail = _ref23$detail === void 0 ? {} : _ref23$detail,
        _ref23$prefix = _ref23.prefix,
        prefix = _ref23$prefix === void 0 ? this.identifier : _ref23$prefix,
        _ref23$bubbles = _ref23.bubbles,
        bubbles = _ref23$bubbles === void 0 ? true : _ref23$bubbles,
        _ref23$cancelable = _ref23.cancelable,
        cancelable = _ref23$cancelable === void 0 ? true : _ref23$cancelable;
      var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
      var event = new CustomEvent(type, {
        detail: detail,
        bubbles: bubbles,
        cancelable: cancelable
      });
      target.dispatchEvent(event);
      return event;
    }
  }], [{
    key: "shouldLoad",
    get: function get() {
      return true;
    }
  }, {
    key: "afterLoad",
    value: function afterLoad(_identifier, _application) {
      return;
    }
  }]);
}();
Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing, OutletPropertiesBlessing];
Controller.targets = [];
Controller.outlets = [];
Controller.values = {};


/***/ }),

/***/ "./var/modules/@symfony/stimulus-bridge/dist/index.js":
/*!************************************************************!*\
  !*** ./var/modules/@symfony/stimulus-bridge/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStimulusApp: () => (/* binding */ startStimulusApp)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./var/modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpack/loader!@symfony/stimulus-bridge/controllers.json */ "./var/modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json");



/*
Stimulus Webpack Helpers 1.0.0
Copyright © 2021 Basecamp, LLC
 */
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}
function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);
  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}
function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module["default"];
  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}
function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}
function startStimulusApp(context) {
  var application = _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Application.start();
  if (true) {
    application.debug = true;
  }
  if (context) {
    application.load(definitionsFromContext(context));
  }
  for (var controllerName in _webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (!_webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty(controllerName)) {
      continue;
    }
    application.register(controllerName, _webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__["default"][controllerName]);
  }
  return application;
}


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ053Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92YXIvbW9kdWxlcy9AaG90d2lyZWQvc3RpbXVsdXMvZGlzdC9zdGltdWx1cy5qcyIsIndlYnBhY2s6Ly8vLi92YXIvbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/N2QyNiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL3Zhci9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8qXG5TdGltdWx1cyAzLjIuMVxuQ29weXJpZ2h0IMKpIDIwMjMgQmFzZWNhbXAsIExMQ1xuICovXG5jbGFzcyBFdmVudExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5ldmVudE9wdGlvbnMgPSBldmVudE9wdGlvbnM7XG4gICAgICAgIHRoaXMudW5vcmRlcmVkQmluZGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcywgdGhpcy5ldmVudE9wdGlvbnMpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMsIHRoaXMuZXZlbnRPcHRpb25zKTtcbiAgICB9XG4gICAgYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMudW5vcmRlcmVkQmluZGluZ3MuYWRkKGJpbmRpbmcpO1xuICAgIH1cbiAgICBiaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy51bm9yZGVyZWRCaW5kaW5ncy5kZWxldGUoYmluZGluZyk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV4dGVuZGVkRXZlbnQgPSBleHRlbmRFdmVudChldmVudCk7XG4gICAgICAgIGZvciAoY29uc3QgYmluZGluZyBvZiB0aGlzLmJpbmRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoZXh0ZW5kZWRFdmVudC5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuaGFuZGxlRXZlbnQoZXh0ZW5kZWRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFzQmluZGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVub3JkZXJlZEJpbmRpbmdzLnNpemUgPiAwO1xuICAgIH1cbiAgICBnZXQgYmluZGluZ3MoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5vcmRlcmVkQmluZGluZ3MpLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0SW5kZXggPSBsZWZ0LmluZGV4LCByaWdodEluZGV4ID0gcmlnaHQuaW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gbGVmdEluZGV4IDwgcmlnaHRJbmRleCA/IC0xIDogbGVmdEluZGV4ID4gcmlnaHRJbmRleCA/IDEgOiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBleHRlbmRFdmVudChldmVudCkge1xuICAgIGlmIChcImltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZFwiIGluIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIH0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXZlbnQsIHtcbiAgICAgICAgICAgIGltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogZmFsc2UsXG4gICAgICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBEaXNwYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IGV2ZW50TGlzdGVuZXIuY29ubmVjdCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4gZXZlbnRMaXN0ZW5lci5kaXNjb25uZWN0KCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBldmVudExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5ldmVudExpc3RlbmVyTWFwcy52YWx1ZXMoKSkucmVkdWNlKChsaXN0ZW5lcnMsIG1hcCkgPT4gbGlzdGVuZXJzLmNvbmNhdChBcnJheS5mcm9tKG1hcC52YWx1ZXMoKSkpLCBbXSk7XG4gICAgfVxuICAgIGJpbmRpbmdDb25uZWN0ZWQoYmluZGluZykge1xuICAgICAgICB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lckZvckJpbmRpbmcoYmluZGluZykuYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICB9XG4gICAgYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nLCBjbGVhckV2ZW50TGlzdGVuZXJzID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpLmJpbmRpbmdEaXNjb25uZWN0ZWQoYmluZGluZyk7XG4gICAgICAgIGlmIChjbGVhckV2ZW50TGlzdGVuZXJzKVxuICAgICAgICAgICAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzRm9yQmluZGluZyhiaW5kaW5nKTtcbiAgICB9XG4gICAgaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCA9IHt9KSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uaGFuZGxlRXJyb3IoZXJyb3IsIGBFcnJvciAke21lc3NhZ2V9YCwgZGV0YWlsKTtcbiAgICB9XG4gICAgY2xlYXJFdmVudExpc3RlbmVyc0ZvckJpbmRpbmcoYmluZGluZykge1xuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpO1xuICAgICAgICBpZiAoIWV2ZW50TGlzdGVuZXIuaGFzQmluZGluZ3MoKSkge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU1hcHBlZEV2ZW50TGlzdGVuZXJGb3IoYmluZGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlTWFwcGVkRXZlbnRMaXN0ZW5lckZvcihiaW5kaW5nKSB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zIH0gPSBiaW5kaW5nO1xuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyTWFwID0gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldChldmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5jYWNoZUtleShldmVudE5hbWUsIGV2ZW50T3B0aW9ucyk7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJNYXAuZGVsZXRlKGNhY2hlS2V5KTtcbiAgICAgICAgaWYgKGV2ZW50TGlzdGVuZXJNYXAuc2l6ZSA9PSAwKVxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyTWFwcy5kZWxldGUoZXZlbnRUYXJnZXQpO1xuICAgIH1cbiAgICBmZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgeyBldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMgfSA9IGJpbmRpbmc7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xuICAgIH1cbiAgICBmZXRjaEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJNYXAgPSB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lck1hcEZvckV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmNhY2hlS2V5KGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcbiAgICAgICAgbGV0IGV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVyTWFwLmdldChjYWNoZUtleSk7XG4gICAgICAgIGlmICghZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lck1hcC5zZXQoY2FjaGVLZXksIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICAgIH1cbiAgICBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucykge1xuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG4gICAgfVxuICAgIGZldGNoRXZlbnRMaXN0ZW5lck1hcEZvckV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIGxldCBldmVudExpc3RlbmVyTWFwID0gdGhpcy5ldmVudExpc3RlbmVyTWFwcy5nZXQoZXZlbnRUYXJnZXQpO1xuICAgICAgICBpZiAoIWV2ZW50TGlzdGVuZXJNYXApIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJNYXBzLnNldChldmVudFRhcmdldCwgZXZlbnRMaXN0ZW5lck1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50TGlzdGVuZXJNYXA7XG4gICAgfVxuICAgIGNhY2hlS2V5KGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gW2V2ZW50TmFtZV07XG4gICAgICAgIE9iamVjdC5rZXlzKGV2ZW50T3B0aW9ucylcbiAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goYCR7ZXZlbnRPcHRpb25zW2tleV0gPyBcIlwiIDogXCIhXCJ9JHtrZXl9YCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIjpcIik7XG4gICAgfVxufVxuXG5jb25zdCBkZWZhdWx0QWN0aW9uRGVzY3JpcHRvckZpbHRlcnMgPSB7XG4gICAgc3RvcCh7IGV2ZW50LCB2YWx1ZSB9KSB7XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHByZXZlbnQoeyBldmVudCwgdmFsdWUgfSkge1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHNlbGYoeyBldmVudCwgdmFsdWUsIGVsZW1lbnQgfSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ID09PSBldmVudC50YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuY29uc3QgZGVzY3JpcHRvclBhdHRlcm4gPSAvXig/Oig/OihbXi5dKz8pXFwrKT8oLis/KSg/OlxcLiguKz8pKT8oPzpAKHdpbmRvd3xkb2N1bWVudCkpPy0+KT8oLis/KSg/OiMoW146XSs/KSkoPzo6KC4rKSk/JC87XG5mdW5jdGlvbiBwYXJzZUFjdGlvbkRlc2NyaXB0b3JTdHJpbmcoZGVzY3JpcHRvclN0cmluZykge1xuICAgIGNvbnN0IHNvdXJjZSA9IGRlc2NyaXB0b3JTdHJpbmcudHJpbSgpO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzb3VyY2UubWF0Y2goZGVzY3JpcHRvclBhdHRlcm4pIHx8IFtdO1xuICAgIGxldCBldmVudE5hbWUgPSBtYXRjaGVzWzJdO1xuICAgIGxldCBrZXlGaWx0ZXIgPSBtYXRjaGVzWzNdO1xuICAgIGlmIChrZXlGaWx0ZXIgJiYgIVtcImtleWRvd25cIiwgXCJrZXl1cFwiLCBcImtleXByZXNzXCJdLmluY2x1ZGVzKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgZXZlbnROYW1lICs9IGAuJHtrZXlGaWx0ZXJ9YDtcbiAgICAgICAga2V5RmlsdGVyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXZlbnRUYXJnZXQ6IHBhcnNlRXZlbnRUYXJnZXQobWF0Y2hlc1s0XSksXG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgZXZlbnRPcHRpb25zOiBtYXRjaGVzWzddID8gcGFyc2VFdmVudE9wdGlvbnMobWF0Y2hlc1s3XSkgOiB7fSxcbiAgICAgICAgaWRlbnRpZmllcjogbWF0Y2hlc1s1XSxcbiAgICAgICAgbWV0aG9kTmFtZTogbWF0Y2hlc1s2XSxcbiAgICAgICAga2V5RmlsdGVyOiBtYXRjaGVzWzFdIHx8IGtleUZpbHRlcixcbiAgICB9O1xufVxuZnVuY3Rpb24gcGFyc2VFdmVudFRhcmdldChldmVudFRhcmdldE5hbWUpIHtcbiAgICBpZiAoZXZlbnRUYXJnZXROYW1lID09IFwid2luZG93XCIpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRUYXJnZXROYW1lID09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2VFdmVudE9wdGlvbnMoZXZlbnRPcHRpb25zKSB7XG4gICAgcmV0dXJuIGV2ZW50T3B0aW9uc1xuICAgICAgICAuc3BsaXQoXCI6XCIpXG4gICAgICAgIC5yZWR1Y2UoKG9wdGlvbnMsIHRva2VuKSA9PiBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHsgW3Rva2VuLnJlcGxhY2UoL14hLywgXCJcIildOiAhL14hLy50ZXN0KHRva2VuKSB9KSwge30pO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5RXZlbnRUYXJnZXQoZXZlbnRUYXJnZXQpIHtcbiAgICBpZiAoZXZlbnRUYXJnZXQgPT0gd2luZG93KSB7XG4gICAgICAgIHJldHVybiBcIndpbmRvd1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudFRhcmdldCA9PSBkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gXCJkb2N1bWVudFwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FtZWxpemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKD86W18tXSkoW2EtejAtOV0pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gbmFtZXNwYWNlQ2FtZWxpemUodmFsdWUpIHtcbiAgICByZXR1cm4gY2FtZWxpemUodmFsdWUucmVwbGFjZSgvLS0vZywgXCItXCIpLnJlcGxhY2UoL19fL2csIFwiX1wiKSk7XG59XG5mdW5jdGlvbiBjYXBpdGFsaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG59XG5mdW5jdGlvbiBkYXNoZXJpemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKFtBLVpdKS9nLCAoXywgY2hhcikgPT4gYC0ke2NoYXIudG9Mb3dlckNhc2UoKX1gKTtcbn1cbmZ1bmN0aW9uIHRva2VuaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hdGNoKC9bXlxcc10rL2cpIHx8IFtdO1xufVxuXG5mdW5jdGlvbiBpc1NvbWV0aGluZyhvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG59XG5cbmNvbnN0IGFsbE1vZGlmaWVycyA9IFtcIm1ldGFcIiwgXCJjdHJsXCIsIFwiYWx0XCIsIFwic2hpZnRcIl07XG5jbGFzcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGluZGV4LCBkZXNjcmlwdG9yLCBzY2hlbWEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gZGVzY3JpcHRvci5ldmVudFRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGRlc2NyaXB0b3IuZXZlbnROYW1lIHx8IGdldERlZmF1bHRFdmVudE5hbWVGb3JFbGVtZW50KGVsZW1lbnQpIHx8IGVycm9yKFwibWlzc2luZyBldmVudCBuYW1lXCIpO1xuICAgICAgICB0aGlzLmV2ZW50T3B0aW9ucyA9IGRlc2NyaXB0b3IuZXZlbnRPcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBkZXNjcmlwdG9yLmlkZW50aWZpZXIgfHwgZXJyb3IoXCJtaXNzaW5nIGlkZW50aWZpZXJcIik7XG4gICAgICAgIHRoaXMubWV0aG9kTmFtZSA9IGRlc2NyaXB0b3IubWV0aG9kTmFtZSB8fCBlcnJvcihcIm1pc3NpbmcgbWV0aG9kIG5hbWVcIik7XG4gICAgICAgIHRoaXMua2V5RmlsdGVyID0gZGVzY3JpcHRvci5rZXlGaWx0ZXIgfHwgXCJcIjtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgfVxuICAgIHN0YXRpYyBmb3JUb2tlbih0b2tlbiwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyh0b2tlbi5lbGVtZW50LCB0b2tlbi5pbmRleCwgcGFyc2VBY3Rpb25EZXNjcmlwdG9yU3RyaW5nKHRva2VuLmNvbnRlbnQpLCBzY2hlbWEpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgZXZlbnRGaWx0ZXIgPSB0aGlzLmtleUZpbHRlciA/IGAuJHt0aGlzLmtleUZpbHRlcn1gIDogXCJcIjtcbiAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0TmFtZSA/IGBAJHt0aGlzLmV2ZW50VGFyZ2V0TmFtZX1gIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZXZlbnROYW1lfSR7ZXZlbnRGaWx0ZXJ9JHtldmVudFRhcmdldH0tPiR7dGhpcy5pZGVudGlmaWVyfSMke3RoaXMubWV0aG9kTmFtZX1gO1xuICAgIH1cbiAgICBzaG91bGRJZ25vcmVLZXlib2FyZEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlGaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5rZXlGaWx0ZXIuc3BsaXQoXCIrXCIpO1xuICAgICAgICBpZiAodGhpcy5rZXlGaWx0ZXJEaXNzYXRpc2ZpZWQoZXZlbnQsIGZpbHRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFuZGFyZEZpbHRlciA9IGZpbHRlcnMuZmlsdGVyKChrZXkpID0+ICFhbGxNb2RpZmllcnMuaW5jbHVkZXMoa2V5KSlbMF07XG4gICAgICAgIGlmICghc3RhbmRhcmRGaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc1Byb3BlcnR5KHRoaXMua2V5TWFwcGluZ3MsIHN0YW5kYXJkRmlsdGVyKSkge1xuICAgICAgICAgICAgZXJyb3IoYGNvbnRhaW5zIHVua25vd24ga2V5IGZpbHRlcjogJHt0aGlzLmtleUZpbHRlcn1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlNYXBwaW5nc1tzdGFuZGFyZEZpbHRlcl0udG9Mb3dlckNhc2UoKSAhPT0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHNob3VsZElnbm9yZU1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleUZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBbdGhpcy5rZXlGaWx0ZXJdO1xuICAgICAgICBpZiAodGhpcy5rZXlGaWx0ZXJEaXNzYXRpc2ZpZWQoZXZlbnQsIGZpbHRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBwYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXmRhdGEtJHt0aGlzLmlkZW50aWZpZXJ9LSguKyktcGFyYW0kYCwgXCJpXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgdmFsdWUgfSBvZiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBuYW1lLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2NhbWVsaXplKGtleSldID0gdHlwZWNhc3QodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGdldCBldmVudFRhcmdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdpZnlFdmVudFRhcmdldCh0aGlzLmV2ZW50VGFyZ2V0KTtcbiAgICB9XG4gICAgZ2V0IGtleU1hcHBpbmdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEua2V5TWFwcGluZ3M7XG4gICAgfVxuICAgIGtleUZpbHRlckRpc3NhdGlzZmllZChldmVudCwgZmlsdGVycykge1xuICAgICAgICBjb25zdCBbbWV0YSwgY3RybCwgYWx0LCBzaGlmdF0gPSBhbGxNb2RpZmllcnMubWFwKChtb2RpZmllcikgPT4gZmlsdGVycy5pbmNsdWRlcyhtb2RpZmllcikpO1xuICAgICAgICByZXR1cm4gZXZlbnQubWV0YUtleSAhPT0gbWV0YSB8fCBldmVudC5jdHJsS2V5ICE9PSBjdHJsIHx8IGV2ZW50LmFsdEtleSAhPT0gYWx0IHx8IGV2ZW50LnNoaWZ0S2V5ICE9PSBzaGlmdDtcbiAgICB9XG59XG5jb25zdCBkZWZhdWx0RXZlbnROYW1lcyA9IHtcbiAgICBhOiAoKSA9PiBcImNsaWNrXCIsXG4gICAgYnV0dG9uOiAoKSA9PiBcImNsaWNrXCIsXG4gICAgZm9ybTogKCkgPT4gXCJzdWJtaXRcIixcbiAgICBkZXRhaWxzOiAoKSA9PiBcInRvZ2dsZVwiLFxuICAgIGlucHV0OiAoZSkgPT4gKGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PSBcInN1Ym1pdFwiID8gXCJjbGlja1wiIDogXCJpbnB1dFwiKSxcbiAgICBzZWxlY3Q6ICgpID0+IFwiY2hhbmdlXCIsXG4gICAgdGV4dGFyZWE6ICgpID0+IFwiaW5wdXRcIixcbn07XG5mdW5jdGlvbiBnZXREZWZhdWx0RXZlbnROYW1lRm9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0YWdOYW1lIGluIGRlZmF1bHRFdmVudE5hbWVzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RXZlbnROYW1lc1t0YWdOYW1lXShlbGVtZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gdHlwZWNhc3QodmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChvX08pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIH1cbiAgICBnZXQgaW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5pbmRleDtcbiAgICB9XG4gICAgZ2V0IGV2ZW50VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnRUYXJnZXQ7XG4gICAgfVxuICAgIGdldCBldmVudE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5ldmVudE9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlkZW50aWZpZXI7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbkV2ZW50ID0gdGhpcy5wcmVwYXJlQWN0aW9uRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy53aWxsQmVJbnZva2VkQnlFdmVudChldmVudCkgJiYgdGhpcy5hcHBseUV2ZW50TW9kaWZpZXJzKGFjdGlvbkV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5pbnZva2VXaXRoRXZlbnQoYWN0aW9uRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBldmVudE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5ldmVudE5hbWU7XG4gICAgfVxuICAgIGdldCBtZXRob2QoKSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuY29udHJvbGxlclt0aGlzLm1ldGhvZE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3Rpb24gXCIke3RoaXMuYWN0aW9ufVwiIHJlZmVyZW5jZXMgdW5kZWZpbmVkIG1ldGhvZCBcIiR7dGhpcy5tZXRob2ROYW1lfVwiYCk7XG4gICAgfVxuICAgIGFwcGx5RXZlbnRNb2RpZmllcnMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLmFjdGlvbjtcbiAgICAgICAgY29uc3QgeyBhY3Rpb25EZXNjcmlwdG9yRmlsdGVycyB9ID0gdGhpcy5jb250ZXh0LmFwcGxpY2F0aW9uO1xuICAgICAgICBjb25zdCB7IGNvbnRyb2xsZXIgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgbGV0IHBhc3NlcyA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmV2ZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmIChuYW1lIGluIGFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gYWN0aW9uRGVzY3JpcHRvckZpbHRlcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgcGFzc2VzID0gcGFzc2VzICYmIGZpbHRlcih7IG5hbWUsIHZhbHVlLCBldmVudCwgZWxlbWVudCwgY29udHJvbGxlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXNzZXM7XG4gICAgfVxuICAgIHByZXBhcmVBY3Rpb25FdmVudChldmVudCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihldmVudCwgeyBwYXJhbXM6IHRoaXMuYWN0aW9uLnBhcmFtcyB9KTtcbiAgICB9XG4gICAgaW52b2tlV2l0aEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0LCBjdXJyZW50VGFyZ2V0IH0gPSBldmVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kLmNhbGwodGhpcy5jb250cm9sbGVyLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubG9nRGVidWdBY3Rpdml0eSh0aGlzLm1ldGhvZE5hbWUsIHsgZXZlbnQsIHRhcmdldCwgY3VycmVudFRhcmdldCwgYWN0aW9uOiB0aGlzLm1ldGhvZE5hbWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlkZW50aWZpZXIsIGNvbnRyb2xsZXIsIGVsZW1lbnQsIGluZGV4IH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsID0geyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50LCBpbmRleCwgZXZlbnQgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5oYW5kbGVFcnJvcihlcnJvciwgYGludm9raW5nIGFjdGlvbiBcIiR7dGhpcy5hY3Rpb259XCJgLCBkZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdpbGxCZUludm9rZWRCeUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIHRoaXMuYWN0aW9uLnNob3VsZElnbm9yZUtleWJvYXJkRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCAmJiB0aGlzLmFjdGlvbi5zaG91bGRJZ25vcmVNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT09IGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50VGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuY29udGFpbnNFbGVtZW50KGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmNvbnRhaW5zRWxlbWVudCh0aGlzLmFjdGlvbi5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY29udHJvbGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jb250cm9sbGVyO1xuICAgIH1cbiAgICBnZXQgbWV0aG9kTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLm1ldGhvZE5hbWU7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XG4gICAgfVxufVxuXG5jbGFzcyBFbGVtZW50T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlckluaXQgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB0aGlzLnByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwgdGhpcy5tdXRhdGlvbk9ic2VydmVySW5pdCk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwgdGhpcy5tdXRhdGlvbk9ic2VydmVySW5pdCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBuZXcgU2V0KHRoaXMubWF0Y2hFbGVtZW50c0luVHJlZSgpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIEFycmF5LmZyb20obWF0Y2hlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbihtdXRhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc011dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NBdHRyaWJ1dGVDaGFuZ2UobXV0YXRpb24udGFyZ2V0LCBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlbW92ZWROb2RlcyhtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQWRkZWROb2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzQXR0cmlidXRlQ2hhbmdlKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50QXR0cmlidXRlQ2hhbmdlZCAmJiB0aGlzLm1hdGNoRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzUmVtb3ZlZE5vZGVzKG5vZGVzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG5vZGVzKSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudEZyb21Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NUcmVlKGVsZW1lbnQsIHRoaXMucmVtb3ZlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc0FkZGVkTm9kZXMobm9kZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obm9kZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50RnJvbU5vZGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0aGlzLmVsZW1lbnRJc0FjdGl2ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1RyZWUoZWxlbWVudCwgdGhpcy5hZGRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXRjaEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tYXRjaEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIG1hdGNoRWxlbWVudHNJblRyZWUodHJlZSA9IHRoaXMuZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUpO1xuICAgIH1cbiAgICBwcm9jZXNzVHJlZSh0cmVlLCBwcm9jZXNzb3IpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMubWF0Y2hFbGVtZW50c0luVHJlZSh0cmVlKSkge1xuICAgICAgICAgICAgcHJvY2Vzc29yLmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudEZyb21Ob2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRJc0FjdGl2ZShlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmlzQ29ubmVjdGVkICE9IHRoaXMuZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jb250YWlucyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudElzQWN0aXZlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50TWF0Y2hlZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBBdHRyaWJ1dGVPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlciA9IG5ldyBFbGVtZW50T2JzZXJ2ZXIoZWxlbWVudCwgdGhpcyk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JzZXJ2ZXIuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gYFske3RoaXMuYXR0cmlidXRlTmFtZX1dYDtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHBhdXNlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnBhdXNlKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGdldCBzdGFydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnRlZDtcbiAgICB9XG4gICAgbWF0Y2hFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSk7XG4gICAgfVxuICAgIG1hdGNoRWxlbWVudHNJblRyZWUodHJlZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2hFbGVtZW50KHRyZWUpID8gW3RyZWVdIDogW107XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKHRyZWUucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKSk7XG4gICAgICAgIHJldHVybiBtYXRjaC5jb25jYXQobWF0Y2hlcyk7XG4gICAgfVxuICAgIGVsZW1lbnRNYXRjaGVkKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50VW5tYXRjaGVkKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkQXR0cmlidXRlKGVsZW1lbnQsIHRoaXMuYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50QXR0cmlidXRlVmFsdWVDaGFuZ2VkICYmIHRoaXMuYXR0cmlidXRlTmFtZSA9PSBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRBdHRyaWJ1dGVWYWx1ZUNoYW5nZWQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZChtYXAsIGtleSwgdmFsdWUpIHtcbiAgICBmZXRjaChtYXAsIGtleSkuYWRkKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGRlbChtYXAsIGtleSwgdmFsdWUpIHtcbiAgICBmZXRjaChtYXAsIGtleSkuZGVsZXRlKHZhbHVlKTtcbiAgICBwcnVuZShtYXAsIGtleSk7XG59XG5mdW5jdGlvbiBmZXRjaChtYXAsIGtleSkge1xuICAgIGxldCB2YWx1ZXMgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKCF2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzID0gbmV3IFNldCgpO1xuICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cbmZ1bmN0aW9uIHBydW5lKG1hcCwga2V5KSB7XG4gICAgY29uc3QgdmFsdWVzID0gbWFwLmdldChrZXkpO1xuICAgIGlmICh2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMuc2l6ZSA9PSAwKSB7XG4gICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICB9XG59XG5cbmNsYXNzIE11bHRpbWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNCeUtleSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0IGtleXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudmFsdWVzQnlLZXkua2V5cygpKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlcygpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XG4gICAgICAgIHJldHVybiBzZXRzLnJlZHVjZSgodmFsdWVzLCBzZXQpID0+IHZhbHVlcy5jb25jYXQoQXJyYXkuZnJvbShzZXQpKSwgW10pO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XG4gICAgICAgIHJldHVybiBzZXRzLnJlZHVjZSgoc2l6ZSwgc2V0KSA9PiBzaXplICsgc2V0LnNpemUsIDApO1xuICAgIH1cbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhZGQodGhpcy52YWx1ZXNCeUtleSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGRlbGV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGRlbCh0aGlzLnZhbHVlc0J5S2V5LCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgaGFzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXNCeUtleS5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5oYXModmFsdWUpO1xuICAgIH1cbiAgICBoYXNLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc0J5S2V5LmhhcyhrZXkpO1xuICAgIH1cbiAgICBoYXNWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBzZXRzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5LnZhbHVlcygpKTtcbiAgICAgICAgcmV0dXJuIHNldHMuc29tZSgoc2V0KSA9PiBzZXQuaGFzKHZhbHVlKSk7XG4gICAgfVxuICAgIGdldFZhbHVlc0ZvcktleShrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXNCeUtleS5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyA/IEFycmF5LmZyb20odmFsdWVzKSA6IFtdO1xuICAgIH1cbiAgICBnZXRLZXlzRm9yVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleSlcbiAgICAgICAgICAgIC5maWx0ZXIoKFtfa2V5LCB2YWx1ZXNdKSA9PiB2YWx1ZXMuaGFzKHZhbHVlKSlcbiAgICAgICAgICAgIC5tYXAoKFtrZXksIF92YWx1ZXNdKSA9PiBrZXkpO1xuICAgIH1cbn1cblxuY2xhc3MgSW5kZXhlZE11bHRpbWFwIGV4dGVuZHMgTXVsdGltYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXNCeVZhbHVlID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBnZXQgdmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmtleXNCeVZhbHVlLmtleXMoKSk7XG4gICAgfVxuICAgIGFkZChrZXksIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFkZChrZXksIHZhbHVlKTtcbiAgICAgICAgYWRkKHRoaXMua2V5c0J5VmFsdWUsIHZhbHVlLCBrZXkpO1xuICAgIH1cbiAgICBkZWxldGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBzdXBlci5kZWxldGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIGRlbCh0aGlzLmtleXNCeVZhbHVlLCB2YWx1ZSwga2V5KTtcbiAgICB9XG4gICAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c0J5VmFsdWUuaGFzKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0S2V5c0ZvclZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNldCA9IHRoaXMua2V5c0J5VmFsdWUuZ2V0KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHNldCA/IEFycmF5LmZyb20oc2V0KSA6IFtdO1xuICAgIH1cbn1cblxuY2xhc3MgU2VsZWN0b3JPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2VsZWN0b3IsIGRlbGVnYXRlLCBkZXRhaWxzKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyID0gbmV3IEVsZW1lbnRPYnNlcnZlcihlbGVtZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLm1hdGNoZXNCeUVsZW1lbnQgPSBuZXcgTXVsdGltYXAoKTtcbiAgICB9XG4gICAgZ2V0IHN0YXJ0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRPYnNlcnZlci5zdGFydGVkO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RvcjtcbiAgICB9XG4gICAgc2V0IHNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgcGF1c2UoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIucGF1c2UoY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5zdG9wKCk7XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRPYnNlcnZlci5lbGVtZW50O1xuICAgIH1cbiAgICBtYXRjaEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdG9yIH0gPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuc2VsZWN0b3JNYXRjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcyAmJiB0aGlzLmRlbGVnYXRlLnNlbGVjdG9yTWF0Y2hFbGVtZW50KGVsZW1lbnQsIHRoaXMuZGV0YWlscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RvciB9ID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2hFbGVtZW50KHRyZWUpID8gW3RyZWVdIDogW107XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gQXJyYXkuZnJvbSh0cmVlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5maWx0ZXIoKG1hdGNoKSA9PiB0aGlzLm1hdGNoRWxlbWVudChtYXRjaCkpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNvbmNhdChtYXRjaGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50TWF0Y2hlZChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0b3IgfSA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rvck1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRVbm1hdGNoZWQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLm1hdGNoZXNCeUVsZW1lbnQuZ2V0S2V5c0ZvclZhbHVlKGVsZW1lbnQpO1xuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQoZWxlbWVudCwgX2F0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RvciB9ID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkQmVmb3JlID0gdGhpcy5tYXRjaGVzQnlFbGVtZW50LmhhcyhzZWxlY3RvciwgZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiAhbWF0Y2hlZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JNYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFtYXRjaGVzICYmIG1hdGNoZWRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yVW5tYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3Rvck1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zZWxlY3Rvck1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IsIHRoaXMuZGV0YWlscyk7XG4gICAgICAgIHRoaXMubWF0Y2hlc0J5RWxlbWVudC5hZGQoc2VsZWN0b3IsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBzZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnNlbGVjdG9yVW5tYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yLCB0aGlzLmRldGFpbHMpO1xuICAgICAgICB0aGlzLm1hdGNoZXNCeUVsZW1lbnQuZGVsZXRlKHNlbGVjdG9yLCBlbGVtZW50KTtcbiAgICB9XG59XG5cbmNsYXNzIFN0cmluZ01hcE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0cmluZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4gdGhpcy5wcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZU5hbWUgb2YgdGhpcy5rbm93bkF0dHJpYnV0ZU5hbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVmcmVzaEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmRlbGVnYXRlLmdldFN0cmluZ01hcEtleUZvckF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RyaW5nTWFwLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwS2V5QWRkZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmluZ01hcC5nZXQoYXR0cmlidXRlTmFtZSkgIT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcFZhbHVlQ2hhbmdlZCh2YWx1ZSwga2V5LCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5zdHJpbmdNYXAuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwLmRlbGV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwS2V5UmVtb3ZlZChrZXksIGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwLnNldChhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyaW5nTWFwS2V5QWRkZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLnN0cmluZ01hcEtleUFkZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnN0cmluZ01hcEtleUFkZGVkKGtleSwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyaW5nTWFwVmFsdWVDaGFuZ2VkKHZhbHVlLCBrZXksIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLnN0cmluZ01hcFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBWYWx1ZUNoYW5nZWQodmFsdWUsIGtleSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmluZ01hcEtleVJlbW92ZWQoa2V5LCBhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlSZW1vdmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnN0cmluZ01hcEtleVJlbW92ZWQoa2V5LCBhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGtub3duQXR0cmlidXRlTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5jdXJyZW50QXR0cmlidXRlTmFtZXMuY29uY2F0KHRoaXMucmVjb3JkZWRBdHRyaWJ1dGVOYW1lcykpKTtcbiAgICB9XG4gICAgZ2V0IGN1cnJlbnRBdHRyaWJ1dGVOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LmF0dHJpYnV0ZXMpLm1hcCgoYXR0cmlidXRlKSA9PiBhdHRyaWJ1dGUubmFtZSk7XG4gICAgfVxuICAgIGdldCByZWNvcmRlZEF0dHJpYnV0ZU5hbWVzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0cmluZ01hcC5rZXlzKCkpO1xuICAgIH1cbn1cblxuY2xhc3MgVG9rZW5MaXN0T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIgPSBuZXcgQXR0cmlidXRlT2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy50b2tlbnNCeUVsZW1lbnQgPSBuZXcgTXVsdGltYXAoKTtcbiAgICB9XG4gICAgZ2V0IHN0YXJ0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnN0YXJ0ZWQ7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHBhdXNlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIucGF1c2UoY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgYXR0cmlidXRlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuYXR0cmlidXRlTmFtZTtcbiAgICB9XG4gICAgZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnRva2Vuc01hdGNoZWQodGhpcy5yZWFkVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KSk7XG4gICAgfVxuICAgIGVsZW1lbnRBdHRyaWJ1dGVWYWx1ZUNoYW5nZWQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBbdW5tYXRjaGVkVG9rZW5zLCBtYXRjaGVkVG9rZW5zXSA9IHRoaXMucmVmcmVzaFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9rZW5zVW5tYXRjaGVkKHVubWF0Y2hlZFRva2Vucyk7XG4gICAgICAgIHRoaXMudG9rZW5zTWF0Y2hlZChtYXRjaGVkVG9rZW5zKTtcbiAgICB9XG4gICAgZWxlbWVudFVubWF0Y2hlZEF0dHJpYnV0ZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMudG9rZW5zVW5tYXRjaGVkKHRoaXMudG9rZW5zQnlFbGVtZW50LmdldFZhbHVlc0ZvcktleShlbGVtZW50KSk7XG4gICAgfVxuICAgIHRva2Vuc01hdGNoZWQodG9rZW5zKSB7XG4gICAgICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4gdGhpcy50b2tlbk1hdGNoZWQodG9rZW4pKTtcbiAgICB9XG4gICAgdG9rZW5zVW5tYXRjaGVkKHRva2Vucykge1xuICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHRoaXMudG9rZW5Vbm1hdGNoZWQodG9rZW4pKTtcbiAgICB9XG4gICAgdG9rZW5NYXRjaGVkKHRva2VuKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudG9rZW5NYXRjaGVkKHRva2VuKTtcbiAgICAgICAgdGhpcy50b2tlbnNCeUVsZW1lbnQuYWRkKHRva2VuLmVsZW1lbnQsIHRva2VuKTtcbiAgICB9XG4gICAgdG9rZW5Vbm1hdGNoZWQodG9rZW4pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS50b2tlblVubWF0Y2hlZCh0b2tlbik7XG4gICAgICAgIHRoaXMudG9rZW5zQnlFbGVtZW50LmRlbGV0ZSh0b2tlbi5lbGVtZW50LCB0b2tlbik7XG4gICAgfVxuICAgIHJlZnJlc2hUb2tlbnNGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbnMgPSB0aGlzLnRva2Vuc0J5RWxlbWVudC5nZXRWYWx1ZXNGb3JLZXkoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb2tlbnMgPSB0aGlzLnJlYWRUb2tlbnNGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBmaXJzdERpZmZlcmluZ0luZGV4ID0gemlwKHByZXZpb3VzVG9rZW5zLCBjdXJyZW50VG9rZW5zKS5maW5kSW5kZXgoKFtwcmV2aW91c1Rva2VuLCBjdXJyZW50VG9rZW5dKSA9PiAhdG9rZW5zQXJlRXF1YWwocHJldmlvdXNUb2tlbiwgY3VycmVudFRva2VuKSk7XG4gICAgICAgIGlmIChmaXJzdERpZmZlcmluZ0luZGV4ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gW1tdLCBbXV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3ByZXZpb3VzVG9rZW5zLnNsaWNlKGZpcnN0RGlmZmVyaW5nSW5kZXgpLCBjdXJyZW50VG9rZW5zLnNsaWNlKGZpcnN0RGlmZmVyaW5nSW5kZXgpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWFkVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIGNvbnN0IHRva2VuU3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgfHwgXCJcIjtcbiAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5TdHJpbmcodG9rZW5TdHJpbmcsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVG9rZW5TdHJpbmcodG9rZW5TdHJpbmcsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gdG9rZW5TdHJpbmdcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgICAuZmlsdGVyKChjb250ZW50KSA9PiBjb250ZW50Lmxlbmd0aClcbiAgICAgICAgLm1hcCgoY29udGVudCwgaW5kZXgpID0+ICh7IGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGNvbnRlbnQsIGluZGV4IH0pKTtcbn1cbmZ1bmN0aW9uIHppcChsZWZ0LCByaWdodCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KGxlZnQubGVuZ3RoLCByaWdodC5sZW5ndGgpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBpbmRleCkgPT4gW2xlZnRbaW5kZXhdLCByaWdodFtpbmRleF1dKTtcbn1cbmZ1bmN0aW9uIHRva2Vuc0FyZUVxdWFsKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIGxlZnQgJiYgcmlnaHQgJiYgbGVmdC5pbmRleCA9PSByaWdodC5pbmRleCAmJiBsZWZ0LmNvbnRlbnQgPT0gcmlnaHQuY29udGVudDtcbn1cblxuY2xhc3MgVmFsdWVMaXN0T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIgPSBuZXcgVG9rZW5MaXN0T2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5wYXJzZVJlc3VsdHNCeVRva2VuID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy52YWx1ZXNCeVRva2VuQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbiAgICB9XG4gICAgZ2V0IHN0YXJ0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0YXJ0ZWQ7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuTGlzdE9ic2VydmVyLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBhdHRyaWJ1dGVOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5hdHRyaWJ1dGVOYW1lO1xuICAgIH1cbiAgICB0b2tlbk1hdGNoZWQodG9rZW4pIHtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0b2tlbjtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXNCeVRva2VuRm9yRWxlbWVudChlbGVtZW50KS5zZXQodG9rZW4sIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRWYWx1ZShlbGVtZW50LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9rZW5Vbm1hdGNoZWQodG9rZW4pIHtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0b2tlbjtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXNCeVRva2VuRm9yRWxlbWVudChlbGVtZW50KS5kZWxldGUodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkVmFsdWUoZWxlbWVudCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZldGNoUGFyc2VSZXN1bHRGb3JUb2tlbih0b2tlbikge1xuICAgICAgICBsZXQgcGFyc2VSZXN1bHQgPSB0aGlzLnBhcnNlUmVzdWx0c0J5VG9rZW4uZ2V0KHRva2VuKTtcbiAgICAgICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgICAgICAgcGFyc2VSZXN1bHQgPSB0aGlzLnBhcnNlVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5wYXJzZVJlc3VsdHNCeVRva2VuLnNldCh0b2tlbiwgcGFyc2VSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZVJlc3VsdDtcbiAgICB9XG4gICAgZmV0Y2hWYWx1ZXNCeVRva2VuRm9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGxldCB2YWx1ZXNCeVRva2VuID0gdGhpcy52YWx1ZXNCeVRva2VuQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKCF2YWx1ZXNCeVRva2VuKSB7XG4gICAgICAgICAgICB2YWx1ZXNCeVRva2VuID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNCeVRva2VuQnlFbGVtZW50LnNldChlbGVtZW50LCB2YWx1ZXNCeVRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzQnlUb2tlbjtcbiAgICB9XG4gICAgcGFyc2VUb2tlbih0b2tlbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRlbGVnYXRlLnBhcnNlVmFsdWVGb3JUb2tlbih0b2tlbik7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQmluZGluZ09ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuYmluZGluZ3NCeUFjdGlvbiA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZUxpc3RPYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlciA9IG5ldyBWYWx1ZUxpc3RPYnNlcnZlcih0aGlzLmVsZW1lbnQsIHRoaXMuYWN0aW9uQXR0cmlidXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZUxpc3RPYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdG9wKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZUxpc3RPYnNlcnZlcjtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdEFsbEFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQgYWN0aW9uQXR0cmlidXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuYWN0aW9uQXR0cmlidXRlO1xuICAgIH1cbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjaGVtYTtcbiAgICB9XG4gICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmJpbmRpbmdzQnlBY3Rpb24udmFsdWVzKCkpO1xuICAgIH1cbiAgICBjb25uZWN0QWN0aW9uKGFjdGlvbikge1xuICAgICAgICBjb25zdCBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5jb250ZXh0LCBhY3Rpb24pO1xuICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uc2V0KGFjdGlvbiwgYmluZGluZyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdEFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgYmluZGluZyA9IHRoaXMuYmluZGluZ3NCeUFjdGlvbi5nZXQoYWN0aW9uKTtcbiAgICAgICAgaWYgKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NCeUFjdGlvbi5kZWxldGUoYWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0QWxsQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKChiaW5kaW5nKSA9PiB0aGlzLmRlbGVnYXRlLmJpbmRpbmdEaXNjb25uZWN0ZWQoYmluZGluZywgdHJ1ZSkpO1xuICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uY2xlYXIoKTtcbiAgICB9XG4gICAgcGFyc2VWYWx1ZUZvclRva2VuKHRva2VuKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbi5mb3JUb2tlbih0b2tlbiwgdGhpcy5zY2hlbWEpO1xuICAgICAgICBpZiAoYWN0aW9uLmlkZW50aWZpZXIgPT0gdGhpcy5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRNYXRjaGVkVmFsdWUoZWxlbWVudCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdEFjdGlvbihhY3Rpb24pO1xuICAgIH1cbiAgICBlbGVtZW50VW5tYXRjaGVkVmFsdWUoZWxlbWVudCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdEFjdGlvbihhY3Rpb24pO1xuICAgIH1cbn1cblxuY2xhc3MgVmFsdWVPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICB0aGlzLnN0cmluZ01hcE9ic2VydmVyID0gbmV3IFN0cmluZ01hcE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwID0gdGhpcy5jb250cm9sbGVyLnZhbHVlRGVzY3JpcHRvck1hcDtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nTWFwT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2tzRm9yRGVmYXVsdFZhbHVlcygpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnN0cmluZ01hcE9ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGNvbnRyb2xsZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0U3RyaW5nTWFwS2V5Rm9yQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgaW4gdGhpcy52YWx1ZURlc2NyaXB0b3JNYXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcFthdHRyaWJ1dGVOYW1lXS5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmluZ01hcEtleUFkZGVkKGtleSwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy52YWx1ZURlc2NyaXB0b3JNYXBbYXR0cmlidXRlTmFtZV07XG4gICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmludm9rZUNoYW5nZWRDYWxsYmFjayhrZXksIGRlc2NyaXB0b3Iud3JpdGVyKHRoaXMucmVjZWl2ZXJba2V5XSksIGRlc2NyaXB0b3Iud3JpdGVyKGRlc2NyaXB0b3IuZGVmYXVsdFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RyaW5nTWFwVmFsdWVDaGFuZ2VkKHZhbHVlLCBuYW1lLCBvbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy52YWx1ZURlc2NyaXB0b3JOYW1lTWFwW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLndyaXRlcihkZXNjcmlwdG9yLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gICAgc3RyaW5nTWFwS2V5UmVtb3ZlZChrZXksIGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLnZhbHVlRGVzY3JpcHRvck5hbWVNYXBba2V5XTtcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2soa2V5LCBkZXNjcmlwdG9yLndyaXRlcih0aGlzLnJlY2VpdmVyW2tleV0pLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludm9rZUNoYW5nZWRDYWxsYmFjayhrZXksIGRlc2NyaXB0b3Iud3JpdGVyKGRlc2NyaXB0b3IuZGVmYXVsdFZhbHVlKSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGludm9rZUNoYW5nZWRDYWxsYmFja3NGb3JEZWZhdWx0VmFsdWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHsga2V5LCBuYW1lLCBkZWZhdWx0VmFsdWUsIHdyaXRlciB9IG9mIHRoaXMudmFsdWVEZXNjcmlwdG9ycykge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSAhPSB1bmRlZmluZWQgJiYgIXRoaXMuY29udHJvbGxlci5kYXRhLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgd3JpdGVyKGRlZmF1bHRWYWx1ZSksIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW52b2tlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIHJhd1ZhbHVlLCByYXdPbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkTWV0aG9kTmFtZSA9IGAke25hbWV9Q2hhbmdlZGA7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRNZXRob2QgPSB0aGlzLnJlY2VpdmVyW2NoYW5nZWRNZXRob2ROYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGFuZ2VkTWV0aG9kID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTmFtZU1hcFtuYW1lXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkZXNjcmlwdG9yLnJlYWRlcihyYXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgbGV0IG9sZFZhbHVlID0gcmF3T2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHJhd09sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gZGVzY3JpcHRvci5yZWFkZXIocmF3T2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGFuZ2VkTWV0aG9kLmNhbGwodGhpcy5yZWNlaXZlciwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gYFN0aW11bHVzIFZhbHVlIFwiJHt0aGlzLmNvbnRleHQuaWRlbnRpZmllcn0uJHtkZXNjcmlwdG9yLm5hbWV9XCIgLSAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlRGVzY3JpcHRvcnMoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVEZXNjcmlwdG9yTWFwIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWVEZXNjcmlwdG9yTWFwKS5tYXAoKGtleSkgPT4gdmFsdWVEZXNjcmlwdG9yTWFwW2tleV0pO1xuICAgIH1cbiAgICBnZXQgdmFsdWVEZXNjcmlwdG9yTmFtZU1hcCgpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy52YWx1ZURlc2NyaXB0b3JNYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwW2tleV07XG4gICAgICAgICAgICBkZXNjcmlwdG9yc1tkZXNjcmlwdG9yLm5hbWVdID0gZGVzY3JpcHRvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgICB9XG4gICAgaGFzVmFsdWUoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy52YWx1ZURlc2NyaXB0b3JOYW1lTWFwW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICBjb25zdCBoYXNNZXRob2ROYW1lID0gYGhhcyR7Y2FwaXRhbGl6ZShkZXNjcmlwdG9yLm5hbWUpfWA7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY2VpdmVyW2hhc01ldGhvZE5hbWVdO1xuICAgIH1cbn1cblxuY2xhc3MgVGFyZ2V0T2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy50YXJnZXRzQnlOYW1lID0gbmV3IE11bHRpbWFwKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIgPSBuZXcgVG9rZW5MaXN0T2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLmF0dHJpYnV0ZU5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2VuTGlzdE9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBbGxUYXJnZXRzKCk7XG4gICAgICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0b3AoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRva2VuTGlzdE9ic2VydmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRva2VuTWF0Y2hlZCh7IGVsZW1lbnQsIGNvbnRlbnQ6IG5hbWUgfSkge1xuICAgICAgICBpZiAodGhpcy5zY29wZS5jb250YWluc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFRhcmdldChlbGVtZW50LCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2tlblVubWF0Y2hlZCh7IGVsZW1lbnQsIGNvbnRlbnQ6IG5hbWUgfSkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RUYXJnZXQoZWxlbWVudCwgbmFtZSk7XG4gICAgfVxuICAgIGNvbm5lY3RUYXJnZXQoZWxlbWVudCwgbmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXRzQnlOYW1lLmhhcyhuYW1lLCBlbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzQnlOYW1lLmFkZChuYW1lLCBlbGVtZW50KTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXVzZSgoKSA9PiB0aGlzLmRlbGVnYXRlLnRhcmdldENvbm5lY3RlZChlbGVtZW50LCBuYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdFRhcmdldChlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0c0J5TmFtZS5oYXMobmFtZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0c0J5TmFtZS5kZWxldGUobmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnRva2VuTGlzdE9ic2VydmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGF1c2UoKCkgPT4gdGhpcy5kZWxlZ2F0ZS50YXJnZXREaXNjb25uZWN0ZWQoZWxlbWVudCwgbmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RBbGxUYXJnZXRzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy50YXJnZXRzQnlOYW1lLmtleXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLnRhcmdldHNCeU5hbWUuZ2V0VmFsdWVzRm9yS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0VGFyZ2V0KGVsZW1lbnQsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBhdHRyaWJ1dGVOYW1lKCkge1xuICAgICAgICByZXR1cm4gYGRhdGEtJHt0aGlzLmNvbnRleHQuaWRlbnRpZmllcn0tdGFyZ2V0YDtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjb3BlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGFuY2VzdG9ycyA9IGdldEFuY2VzdG9yc0ZvckNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhbmNlc3RvcnMucmVkdWNlKCh2YWx1ZXMsIGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgIGdldE93blN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpLmZvckVhY2goKG5hbWUpID0+IHZhbHVlcy5hZGQobmFtZSkpO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH0sIG5ldyBTZXQoKSkpO1xufVxuZnVuY3Rpb24gcmVhZEluaGVyaXRhYmxlU3RhdGljT2JqZWN0UGFpcnMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGFuY2VzdG9ycyA9IGdldEFuY2VzdG9yc0ZvckNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgICByZXR1cm4gYW5jZXN0b3JzLnJlZHVjZSgocGFpcnMsIGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgIHBhaXJzLnB1c2goLi4uZ2V0T3duU3RhdGljT2JqZWN0UGFpcnMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkpO1xuICAgICAgICByZXR1cm4gcGFpcnM7XG4gICAgfSwgW10pO1xufVxuZnVuY3Rpb24gZ2V0QW5jZXN0b3JzRm9yQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICBjb25zdCBhbmNlc3RvcnMgPSBbXTtcbiAgICB3aGlsZSAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgYW5jZXN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgICAgICBjb25zdHJ1Y3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBhbmNlc3RvcnMucmV2ZXJzZSgpO1xufVxuZnVuY3Rpb24gZ2V0T3duU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBjb25zdHJ1Y3Rvcltwcm9wZXJ0eU5hbWVdO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRlZmluaXRpb24pID8gZGVmaW5pdGlvbiA6IFtdO1xufVxuZnVuY3Rpb24gZ2V0T3duU3RhdGljT2JqZWN0UGFpcnMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBjb25zdHJ1Y3Rvcltwcm9wZXJ0eU5hbWVdO1xuICAgIHJldHVybiBkZWZpbml0aW9uID8gT2JqZWN0LmtleXMoZGVmaW5pdGlvbikubWFwKChrZXkpID0+IFtrZXksIGRlZmluaXRpb25ba2V5XV0pIDogW107XG59XG5cbmNsYXNzIE91dGxldE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLm91dGxldHNCeU5hbWUgPSBuZXcgTXVsdGltYXAoKTtcbiAgICAgICAgdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZSA9IG5ldyBNdWx0aW1hcCgpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5vdXRsZXREZWZpbml0aW9ucy5mb3JFYWNoKChvdXRsZXROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cEF0dHJpYnV0ZU9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kZXBlbmRlbnRDb250ZXh0cy5mb3JFYWNoKChjb250ZXh0KSA9PiBjb250ZXh0LnJlZnJlc2goKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci5yZWZyZXNoKCkpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyTWFwLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci5yZWZyZXNoKCkpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdEFsbE91dGxldHMoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNlbGVjdG9yT2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BBdHRyaWJ1dGVPYnNlcnZlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wU2VsZWN0b3JPYnNlcnZlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcC5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIuc3RvcCgpKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3BBdHRyaWJ1dGVPYnNlcnZlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZU9ic2VydmVyTWFwLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyTWFwLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci5zdG9wKCkpO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlck1hcC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdG9yTWF0Y2hlZChlbGVtZW50LCBfc2VsZWN0b3IsIHsgb3V0bGV0TmFtZSB9KSB7XG4gICAgICAgIGNvbnN0IG91dGxldCA9IHRoaXMuZ2V0T3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpO1xuICAgICAgICBpZiAob3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RPdXRsZXQob3V0bGV0LCBlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBfc2VsZWN0b3IsIHsgb3V0bGV0TmFtZSB9KSB7XG4gICAgICAgIGNvbnN0IG91dGxldCA9IHRoaXMuZ2V0T3V0bGV0RnJvbU1hcChlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICAgICAgaWYgKG91dGxldCkge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0T3V0bGV0KG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0b3JNYXRjaEVsZW1lbnQoZWxlbWVudCwgeyBvdXRsZXROYW1lIH0pIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yKG91dGxldE5hbWUpO1xuICAgICAgICBjb25zdCBoYXNPdXRsZXQgPSB0aGlzLmhhc091dGxldChlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICAgICAgY29uc3QgaGFzT3V0bGV0Q29udHJvbGxlciA9IGVsZW1lbnQubWF0Y2hlcyhgWyR7dGhpcy5zY2hlbWEuY29udHJvbGxlckF0dHJpYnV0ZX1+PSR7b3V0bGV0TmFtZX1dYCk7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIGhhc091dGxldCAmJiBoYXNPdXRsZXRDb250cm9sbGVyICYmIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUoX2VsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgb3V0bGV0TmFtZSA9IHRoaXMuZ2V0T3V0bGV0TmFtZUZyb21PdXRsZXRBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob3V0bGV0TmFtZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRBdHRyaWJ1dGVWYWx1ZUNoYW5nZWQoX2VsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgb3V0bGV0TmFtZSA9IHRoaXMuZ2V0T3V0bGV0TmFtZUZyb21PdXRsZXRBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob3V0bGV0TmFtZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUoX2VsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgb3V0bGV0TmFtZSA9IHRoaXMuZ2V0T3V0bGV0TmFtZUZyb21PdXRsZXRBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBpZiAob3V0bGV0TmFtZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3RPdXRsZXQob3V0bGV0LCBlbGVtZW50LCBvdXRsZXROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLm91dGxldEVsZW1lbnRzQnlOYW1lLmhhcyhvdXRsZXROYW1lLCBlbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsZXRzQnlOYW1lLmFkZChvdXRsZXROYW1lLCBvdXRsZXQpO1xuICAgICAgICAgICAgdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZS5hZGQob3V0bGV0TmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuZ2V0KG91dGxldE5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGF1c2UoKCkgPT4gdGhpcy5kZWxlZ2F0ZS5vdXRsZXRDb25uZWN0ZWQob3V0bGV0LCBlbGVtZW50LCBvdXRsZXROYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdE91dGxldChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZS5oYXMob3V0bGV0TmFtZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGV0c0J5TmFtZS5kZWxldGUob3V0bGV0TmFtZSwgb3V0bGV0KTtcbiAgICAgICAgICAgIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuZGVsZXRlKG91dGxldE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwXG4gICAgICAgICAgICAgICAgLmdldChvdXRsZXROYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdXNlKCgpID0+IHRoaXMuZGVsZWdhdGUub3V0bGV0RGlzY29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RBbGxPdXRsZXRzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IG91dGxldE5hbWUgb2YgdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZS5rZXlzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZS5nZXRWYWx1ZXNGb3JLZXkob3V0bGV0TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG91dGxldCBvZiB0aGlzLm91dGxldHNCeU5hbWUuZ2V0VmFsdWVzRm9yS2V5KG91dGxldE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE91dGxldChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuZ2V0KG91dGxldE5hbWUpO1xuICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcihvdXRsZXROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXR1cFNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3Iob3V0bGV0TmFtZSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yT2JzZXJ2ZXIgPSBuZXcgU2VsZWN0b3JPYnNlcnZlcihkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdGhpcywgeyBvdXRsZXROYW1lIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuc2V0KG91dGxldE5hbWUsIHNlbGVjdG9yT2JzZXJ2ZXIpO1xuICAgICAgICBzZWxlY3Rvck9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHNldHVwQXR0cmlidXRlT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlT2JzZXJ2ZXIgPSBuZXcgQXR0cmlidXRlT2JzZXJ2ZXIodGhpcy5zY29wZS5lbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlck1hcC5zZXQob3V0bGV0TmFtZSwgYXR0cmlidXRlT2JzZXJ2ZXIpO1xuICAgICAgICBhdHRyaWJ1dGVPYnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICBzZWxlY3RvcihvdXRsZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLm91dGxldHMuZ2V0U2VsZWN0b3JGb3JPdXRsZXROYW1lKG91dGxldE5hbWUpO1xuICAgIH1cbiAgICBhdHRyaWJ1dGVOYW1lRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnNjaGVtYS5vdXRsZXRBdHRyaWJ1dGVGb3JTY29wZSh0aGlzLmlkZW50aWZpZXIsIG91dGxldE5hbWUpO1xuICAgIH1cbiAgICBnZXRPdXRsZXROYW1lRnJvbU91dGxldEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXREZWZpbml0aW9ucy5maW5kKChvdXRsZXROYW1lKSA9PiB0aGlzLmF0dHJpYnV0ZU5hbWVGb3JPdXRsZXROYW1lKG91dGxldE5hbWUpID09PSBhdHRyaWJ1dGVOYW1lKTtcbiAgICB9XG4gICAgZ2V0IG91dGxldERlcGVuZGVuY2llcygpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gbmV3IE11bHRpbWFwKCk7XG4gICAgICAgIHRoaXMucm91dGVyLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG1vZHVsZS5kZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGNvbnN0IG91dGxldHMgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgXCJvdXRsZXRzXCIpO1xuICAgICAgICAgICAgb3V0bGV0cy5mb3JFYWNoKChvdXRsZXQpID0+IGRlcGVuZGVuY2llcy5hZGQob3V0bGV0LCBtb2R1bGUuaWRlbnRpZmllcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgICB9XG4gICAgZ2V0IG91dGxldERlZmluaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXREZXBlbmRlbmNpZXMuZ2V0S2V5c0ZvclZhbHVlKHRoaXMuaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGdldCBkZXBlbmRlbnRDb250cm9sbGVySWRlbnRpZmllcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dGxldERlcGVuZGVuY2llcy5nZXRWYWx1ZXNGb3JLZXkodGhpcy5pZGVudGlmaWVyKTtcbiAgICB9XG4gICAgZ2V0IGRlcGVuZGVudENvbnRleHRzKCkge1xuICAgICAgICBjb25zdCBpZGVudGlmaWVycyA9IHRoaXMuZGVwZW5kZW50Q29udHJvbGxlcklkZW50aWZpZXJzO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY29udGV4dHMuZmlsdGVyKChjb250ZXh0KSA9PiBpZGVudGlmaWVycy5pbmNsdWRlcyhjb250ZXh0LmlkZW50aWZpZXIpKTtcbiAgICB9XG4gICAgaGFzT3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRPdXRsZXQoZWxlbWVudCwgb3V0bGV0TmFtZSkgfHwgISF0aGlzLmdldE91dGxldEZyb21NYXAoZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgfVxuICAgIGdldE91dGxldChlbGVtZW50LCBvdXRsZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmdldENvbnRyb2xsZXJGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICB9XG4gICAgZ2V0T3V0bGV0RnJvbU1hcChlbGVtZW50LCBvdXRsZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dGxldHNCeU5hbWUuZ2V0VmFsdWVzRm9yS2V5KG91dGxldE5hbWUpLmZpbmQoKG91dGxldCkgPT4gb3V0bGV0LmVsZW1lbnQgPT09IGVsZW1lbnQpO1xuICAgIH1cbiAgICBnZXQgc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XG4gICAgfVxuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NoZW1hO1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuYXBwbGljYXRpb247XG4gICAgfVxuICAgIGdldCByb3V0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnJvdXRlcjtcbiAgICB9XG59XG5cbmNsYXNzIENvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSwgc2NvcGUpIHtcbiAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5ID0gKGZ1bmN0aW9uTmFtZSwgZGV0YWlsID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCB9ID0gdGhpcztcbiAgICAgICAgICAgIGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50IH0sIGRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmxvZ0RlYnVnQWN0aXZpdHkodGhpcy5pZGVudGlmaWVyLCBmdW5jdGlvbk5hbWUsIGRldGFpbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBtb2R1bGUuY29udHJvbGxlckNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLmJpbmRpbmdPYnNlcnZlciA9IG5ldyBCaW5kaW5nT2JzZXJ2ZXIodGhpcywgdGhpcy5kaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy52YWx1ZU9ic2VydmVyID0gbmV3IFZhbHVlT2JzZXJ2ZXIodGhpcywgdGhpcy5jb250cm9sbGVyKTtcbiAgICAgICAgdGhpcy50YXJnZXRPYnNlcnZlciA9IG5ldyBUYXJnZXRPYnNlcnZlcih0aGlzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vdXRsZXRPYnNlcnZlciA9IG5ldyBPdXRsZXRPYnNlcnZlcih0aGlzLCB0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJpbml0aWFsaXplXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgXCJpbml0aWFsaXppbmcgY29udHJvbGxlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB0aGlzLnZhbHVlT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy50YXJnZXRPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB0aGlzLm91dGxldE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5KFwiY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIFwiY29ubmVjdGluZyBjb250cm9sbGVyXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMub3V0bGV0T2JzZXJ2ZXIucmVmcmVzaCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBcImRpc2Nvbm5lY3RpbmcgY29udHJvbGxlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm91dGxldE9ic2VydmVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy50YXJnZXRPYnNlcnZlci5zdG9wKCk7XG4gICAgICAgIHRoaXMudmFsdWVPYnNlcnZlci5zdG9wKCk7XG4gICAgICAgIHRoaXMuYmluZGluZ09ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuYXBwbGljYXRpb247XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUuaWRlbnRpZmllcjtcbiAgICB9XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uc2NoZW1hO1xuICAgIH1cbiAgICBnZXQgZGlzcGF0Y2hlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBwYXJlbnRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwgPSB7fSkge1xuICAgICAgICBjb25zdCB7IGlkZW50aWZpZXIsIGNvbnRyb2xsZXIsIGVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICAgIGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50IH0sIGRldGFpbCk7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uaGFuZGxlRXJyb3IoZXJyb3IsIGBFcnJvciAke21lc3NhZ2V9YCwgZGV0YWlsKTtcbiAgICB9XG4gICAgdGFyZ2V0Q29ubmVjdGVkKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5pbnZva2VDb250cm9sbGVyTWV0aG9kKGAke25hbWV9VGFyZ2V0Q29ubmVjdGVkYCwgZWxlbWVudCk7XG4gICAgfVxuICAgIHRhcmdldERpc2Nvbm5lY3RlZChlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lfVRhcmdldERpc2Nvbm5lY3RlZGAsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBvdXRsZXRDb25uZWN0ZWQob3V0bGV0LCBlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lc3BhY2VDYW1lbGl6ZShuYW1lKX1PdXRsZXRDb25uZWN0ZWRgLCBvdXRsZXQsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBvdXRsZXREaXNjb25uZWN0ZWQob3V0bGV0LCBlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lc3BhY2VDYW1lbGl6ZShuYW1lKX1PdXRsZXREaXNjb25uZWN0ZWRgLCBvdXRsZXQsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBpbnZva2VDb250cm9sbGVyTWV0aG9kKG1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250cm9sbGVyW21ldGhvZE5hbWVdID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29udHJvbGxlclttZXRob2ROYW1lXSguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYmxlc3MoY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gc2hhZG93KGNvbnN0cnVjdG9yLCBnZXRCbGVzc2VkUHJvcGVydGllcyhjb25zdHJ1Y3RvcikpO1xufVxuZnVuY3Rpb24gc2hhZG93KGNvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgc2hhZG93Q29uc3RydWN0b3IgPSBleHRlbmQoY29uc3RydWN0b3IpO1xuICAgIGNvbnN0IHNoYWRvd1Byb3BlcnRpZXMgPSBnZXRTaGFkb3dQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcGVydGllcyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc2hhZG93Q29uc3RydWN0b3IucHJvdG90eXBlLCBzaGFkb3dQcm9wZXJ0aWVzKTtcbiAgICByZXR1cm4gc2hhZG93Q29uc3RydWN0b3I7XG59XG5mdW5jdGlvbiBnZXRCbGVzc2VkUHJvcGVydGllcyhjb25zdHJ1Y3Rvcikge1xuICAgIGNvbnN0IGJsZXNzaW5ncyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcImJsZXNzaW5nc1wiKTtcbiAgICByZXR1cm4gYmxlc3NpbmdzLnJlZHVjZSgoYmxlc3NlZFByb3BlcnRpZXMsIGJsZXNzaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBibGVzc2luZyhjb25zdHJ1Y3Rvcik7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBibGVzc2VkUHJvcGVydGllc1trZXldIHx8IHt9O1xuICAgICAgICAgICAgYmxlc3NlZFByb3BlcnRpZXNba2V5XSA9IE9iamVjdC5hc3NpZ24oZGVzY3JpcHRvciwgcHJvcGVydGllc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxlc3NlZFByb3BlcnRpZXM7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0U2hhZG93UHJvcGVydGllcyhwcm90b3R5cGUsIHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gZ2V0T3duS2V5cyhwcm9wZXJ0aWVzKS5yZWR1Y2UoKHNoYWRvd1Byb3BlcnRpZXMsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0U2hhZG93ZWREZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcGVydGllcywga2V5KTtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2hhZG93UHJvcGVydGllcywgeyBba2V5XTogZGVzY3JpcHRvciB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93UHJvcGVydGllcztcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBnZXRTaGFkb3dlZERlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wZXJ0aWVzLCBrZXkpIHtcbiAgICBjb25zdCBzaGFkb3dpbmdEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGtleSk7XG4gICAgY29uc3Qgc2hhZG93ZWRCeVZhbHVlID0gc2hhZG93aW5nRGVzY3JpcHRvciAmJiBcInZhbHVlXCIgaW4gc2hhZG93aW5nRGVzY3JpcHRvcjtcbiAgICBpZiAoIXNoYWRvd2VkQnlWYWx1ZSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm9wZXJ0aWVzLCBrZXkpLnZhbHVlO1xuICAgICAgICBpZiAoc2hhZG93aW5nRGVzY3JpcHRvcikge1xuICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBzaGFkb3dpbmdEZXNjcmlwdG9yLmdldCB8fCBkZXNjcmlwdG9yLmdldDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gc2hhZG93aW5nRGVzY3JpcHRvci5zZXQgfHwgZGVzY3JpcHRvci5zZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfVxufVxuY29uc3QgZ2V0T3duS2V5cyA9ICgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKG9iamVjdCkgPT4gWy4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCksIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gICAgfVxufSkoKTtcbmNvbnN0IGV4dGVuZCA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZXh0ZW5kV2l0aFJlZmxlY3QoY29uc3RydWN0b3IpIHtcbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoY29uc3RydWN0b3IsIGFyZ3VtZW50cywgbmV3LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5kZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBleHRlbmRlZCB9LFxuICAgICAgICB9KTtcbiAgICAgICAgUmVmbGVjdC5zZXRQcm90b3R5cGVPZihleHRlbmRlZCwgY29uc3RydWN0b3IpO1xuICAgICAgICByZXR1cm4gZXh0ZW5kZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RSZWZsZWN0RXh0ZW5zaW9uKCkge1xuICAgICAgICBjb25zdCBhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5hLmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGIgPSBleHRlbmRXaXRoUmVmbGVjdChhKTtcbiAgICAgICAgYi5wcm90b3R5cGUuYSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBiKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHRlc3RSZWZsZWN0RXh0ZW5zaW9uKCk7XG4gICAgICAgIHJldHVybiBleHRlbmRXaXRoUmVmbGVjdDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAoY29uc3RydWN0b3IpID0+IGNsYXNzIGV4dGVuZGVkIGV4dGVuZHMgY29uc3RydWN0b3Ige1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGJsZXNzRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWRlbnRpZmllcjogZGVmaW5pdGlvbi5pZGVudGlmaWVyLFxuICAgICAgICBjb250cm9sbGVyQ29uc3RydWN0b3I6IGJsZXNzKGRlZmluaXRpb24uY29udHJvbGxlckNvbnN0cnVjdG9yKSxcbiAgICB9O1xufVxuXG5jbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gYmxlc3NEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgICAgICB0aGlzLmNvbnRleHRzQnlTY29wZSA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ29udGV4dHMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmlkZW50aWZpZXI7XG4gICAgfVxuICAgIGdldCBjb250cm9sbGVyQ29uc3RydWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY29udHJvbGxlckNvbnN0cnVjdG9yO1xuICAgIH1cbiAgICBnZXQgY29udGV4dHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY29ubmVjdGVkQ29udGV4dHMpO1xuICAgIH1cbiAgICBjb25uZWN0Q29udGV4dEZvclNjb3BlKHNjb3BlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmZldGNoQ29udGV4dEZvclNjb3BlKHNjb3BlKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDb250ZXh0cy5hZGQoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuY29ubmVjdCgpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0Q29udGV4dEZvclNjb3BlKHNjb3BlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzQnlTY29wZS5nZXQoc2NvcGUpO1xuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDb250ZXh0cy5kZWxldGUoY29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmZXRjaENvbnRleHRGb3JTY29wZShzY29wZSkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNCeVNjb3BlLmdldChzY29wZSk7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMsIHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNCeVNjb3BlLnNldChzY29wZSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxufVxuXG5jbGFzcyBDbGFzc01hcCB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhcyh0aGlzLmdldERhdGFLZXkobmFtZSkpO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwobmFtZSlbMF07XG4gICAgfVxuICAgIGdldEFsbChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHRva2VuU3RyaW5nID0gdGhpcy5kYXRhLmdldCh0aGlzLmdldERhdGFLZXkobmFtZSkpIHx8IFwiXCI7XG4gICAgICAgIHJldHVybiB0b2tlbml6ZSh0b2tlblN0cmluZyk7XG4gICAgfVxuICAgIGdldEF0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkodGhpcy5nZXREYXRhS2V5KG5hbWUpKTtcbiAgICB9XG4gICAgZ2V0RGF0YUtleShuYW1lKSB7XG4gICAgICAgIHJldHVybiBgJHtuYW1lfS1jbGFzc2A7XG4gICAgfVxuICAgIGdldCBkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5kYXRhO1xuICAgIH1cbn1cblxuY2xhc3MgRGF0YU1hcCB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZUZvcktleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZUZvcktleShrZXkpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZUZvcktleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZUZvcktleShrZXkpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiBgZGF0YS0ke3RoaXMuaWRlbnRpZmllcn0tJHtkYXNoZXJpemUoa2V5KX1gO1xuICAgIH1cbn1cblxuY2xhc3MgR3VpZGUge1xuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcikge1xuICAgICAgICB0aGlzLndhcm5lZEtleXNCeU9iamVjdCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cbiAgICB3YXJuKG9iamVjdCwga2V5LCBtZXNzYWdlKSB7XG4gICAgICAgIGxldCB3YXJuZWRLZXlzID0gdGhpcy53YXJuZWRLZXlzQnlPYmplY3QuZ2V0KG9iamVjdCk7XG4gICAgICAgIGlmICghd2FybmVkS2V5cykge1xuICAgICAgICAgICAgd2FybmVkS2V5cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHRoaXMud2FybmVkS2V5c0J5T2JqZWN0LnNldChvYmplY3QsIHdhcm5lZEtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2FybmVkS2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgd2FybmVkS2V5cy5hZGQoa2V5KTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4obWVzc2FnZSwgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKGF0dHJpYnV0ZU5hbWUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGBbJHthdHRyaWJ1dGVOYW1lfX49XCIke3Rva2VufVwiXWA7XG59XG5cbmNsYXNzIFRhcmdldFNldCB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XG4gICAgfVxuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnNjaGVtYTtcbiAgICB9XG4gICAgaGFzKHRhcmdldE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZCh0YXJnZXROYW1lKSAhPSBudWxsO1xuICAgIH1cbiAgICBmaW5kKC4uLnRhcmdldE5hbWVzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXROYW1lcy5yZWR1Y2UoKHRhcmdldCwgdGFyZ2V0TmFtZSkgPT4gdGFyZ2V0IHx8IHRoaXMuZmluZFRhcmdldCh0YXJnZXROYW1lKSB8fCB0aGlzLmZpbmRMZWdhY3lUYXJnZXQodGFyZ2V0TmFtZSksIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGZpbmRBbGwoLi4udGFyZ2V0TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldE5hbWVzLnJlZHVjZSgodGFyZ2V0cywgdGFyZ2V0TmFtZSkgPT4gW1xuICAgICAgICAgICAgLi4udGFyZ2V0cyxcbiAgICAgICAgICAgIC4uLnRoaXMuZmluZEFsbFRhcmdldHModGFyZ2V0TmFtZSksXG4gICAgICAgICAgICAuLi50aGlzLmZpbmRBbGxMZWdhY3lUYXJnZXRzKHRhcmdldE5hbWUpLFxuICAgICAgICBdLCBbXSk7XG4gICAgfVxuICAgIGZpbmRUYXJnZXQodGFyZ2V0TmFtZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5maW5kRWxlbWVudChzZWxlY3Rvcik7XG4gICAgfVxuICAgIGZpbmRBbGxUYXJnZXRzKHRhcmdldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuc2NoZW1hLnRhcmdldEF0dHJpYnV0ZUZvclNjb3BlKHRoaXMuaWRlbnRpZmllcik7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZUNvbnRhaW5zVG9rZW4oYXR0cmlidXRlTmFtZSwgdGFyZ2V0TmFtZSk7XG4gICAgfVxuICAgIGZpbmRMZWdhY3lUYXJnZXQodGFyZ2V0TmFtZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0TGVnYWN5U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXByZWNhdGUodGhpcy5zY29wZS5maW5kRWxlbWVudChzZWxlY3RvciksIHRhcmdldE5hbWUpO1xuICAgIH1cbiAgICBmaW5kQWxsTGVnYWN5VGFyZ2V0cyh0YXJnZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUodGFyZ2V0TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmZpbmRBbGxFbGVtZW50cyhzZWxlY3RvcikubWFwKChlbGVtZW50KSA9PiB0aGlzLmRlcHJlY2F0ZShlbGVtZW50LCB0YXJnZXROYW1lKSk7XG4gICAgfVxuICAgIGdldExlZ2FjeVNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldERlc2NyaXB0b3IgPSBgJHt0aGlzLmlkZW50aWZpZXJ9LiR7dGFyZ2V0TmFtZX1gO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKHRoaXMuc2NoZW1hLnRhcmdldEF0dHJpYnV0ZSwgdGFyZ2V0RGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGRlcHJlY2F0ZShlbGVtZW50LCB0YXJnZXROYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gdGhpcy5zY2hlbWEudGFyZ2V0QXR0cmlidXRlO1xuICAgICAgICAgICAgY29uc3QgcmV2aXNlZEF0dHJpYnV0ZU5hbWUgPSB0aGlzLnNjaGVtYS50YXJnZXRBdHRyaWJ1dGVGb3JTY29wZShpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUud2FybihlbGVtZW50LCBgdGFyZ2V0OiR7dGFyZ2V0TmFtZX1gLCBgUGxlYXNlIHJlcGxhY2UgJHthdHRyaWJ1dGVOYW1lfT1cIiR7aWRlbnRpZmllcn0uJHt0YXJnZXROYW1lfVwiIHdpdGggJHtyZXZpc2VkQXR0cmlidXRlTmFtZX09XCIke3RhcmdldE5hbWV9XCIuIGAgK1xuICAgICAgICAgICAgICAgIGBUaGUgJHthdHRyaWJ1dGVOYW1lfSBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgU3RpbXVsdXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBndWlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZ3VpZGU7XG4gICAgfVxufVxuXG5jbGFzcyBPdXRsZXRTZXQge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBjb250cm9sbGVyRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY29udHJvbGxlckVsZW1lbnQgPSBjb250cm9sbGVyRWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5zY2hlbWE7XG4gICAgfVxuICAgIGhhcyhvdXRsZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmQob3V0bGV0TmFtZSkgIT0gbnVsbDtcbiAgICB9XG4gICAgZmluZCguLi5vdXRsZXROYW1lcykge1xuICAgICAgICByZXR1cm4gb3V0bGV0TmFtZXMucmVkdWNlKChvdXRsZXQsIG91dGxldE5hbWUpID0+IG91dGxldCB8fCB0aGlzLmZpbmRPdXRsZXQob3V0bGV0TmFtZSksIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGZpbmRBbGwoLi4ub3V0bGV0TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIG91dGxldE5hbWVzLnJlZHVjZSgob3V0bGV0cywgb3V0bGV0TmFtZSkgPT4gWy4uLm91dGxldHMsIC4uLnRoaXMuZmluZEFsbE91dGxldHMob3V0bGV0TmFtZSldLCBbXSk7XG4gICAgfVxuICAgIGdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLnNjaGVtYS5vdXRsZXRBdHRyaWJ1dGVGb3JTY29wZSh0aGlzLmlkZW50aWZpZXIsIG91dGxldE5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyRWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgfVxuICAgIGZpbmRPdXRsZXQob3V0bGV0TmFtZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3JGb3JPdXRsZXROYW1lKG91dGxldE5hbWUpO1xuICAgICAgICBpZiAoc2VsZWN0b3IpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kRWxlbWVudChzZWxlY3Rvciwgb3V0bGV0TmFtZSk7XG4gICAgfVxuICAgIGZpbmRBbGxPdXRsZXRzKG91dGxldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yID8gdGhpcy5maW5kQWxsRWxlbWVudHMoc2VsZWN0b3IsIG91dGxldE5hbWUpIDogW107XG4gICAgfVxuICAgIGZpbmRFbGVtZW50KHNlbGVjdG9yLCBvdXRsZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zY29wZS5xdWVyeUVsZW1lbnRzKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzLmZpbHRlcigoZWxlbWVudCkgPT4gdGhpcy5tYXRjaGVzRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvciwgb3V0bGV0TmFtZSkpWzBdO1xuICAgIH1cbiAgICBmaW5kQWxsRWxlbWVudHMoc2VsZWN0b3IsIG91dGxldE5hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnNjb3BlLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChlbGVtZW50KSA9PiB0aGlzLm1hdGNoZXNFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yLCBvdXRsZXROYW1lKSk7XG4gICAgfVxuICAgIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yLCBvdXRsZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXJBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLnNjb3BlLnNjaGVtYS5jb250cm9sbGVyQXR0cmlidXRlKSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSAmJiBjb250cm9sbGVyQXR0cmlidXRlLnNwbGl0KFwiIFwiKS5pbmNsdWRlcyhvdXRsZXROYW1lKTtcbiAgICB9XG59XG5cbmNsYXNzIFNjb3BlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2hlbWEsIGVsZW1lbnQsIGlkZW50aWZpZXIsIGxvZ2dlcikge1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBuZXcgVGFyZ2V0U2V0KHRoaXMpO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSBuZXcgQ2xhc3NNYXAodGhpcyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRhTWFwKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRhaW5zRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHRoaXMuY29udHJvbGxlclNlbGVjdG9yKSA9PT0gdGhpcy5lbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5ndWlkZSA9IG5ldyBHdWlkZShsb2dnZXIpO1xuICAgICAgICB0aGlzLm91dGxldHMgPSBuZXcgT3V0bGV0U2V0KHRoaXMuZG9jdW1lbnRTY29wZSwgZWxlbWVudCk7XG4gICAgfVxuICAgIGZpbmRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgPyB0aGlzLmVsZW1lbnQgOiB0aGlzLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpLmZpbmQodGhpcy5jb250YWluc0VsZW1lbnQpO1xuICAgIH1cbiAgICBmaW5kQWxsRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLih0aGlzLmVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgPyBbdGhpcy5lbGVtZW50XSA6IFtdKSxcbiAgICAgICAgICAgIC4uLnRoaXMucXVlcnlFbGVtZW50cyhzZWxlY3RvcikuZmlsdGVyKHRoaXMuY29udGFpbnNFbGVtZW50KSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgcXVlcnlFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIH1cbiAgICBnZXQgY29udHJvbGxlclNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGUsIHRoaXMuaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGdldCBpc0RvY3VtZW50U2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGRvY3VtZW50U2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRG9jdW1lbnRTY29wZVxuICAgICAgICAgICAgPyB0aGlzXG4gICAgICAgICAgICA6IG5ldyBTY29wZSh0aGlzLnNjaGVtYSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLmlkZW50aWZpZXIsIHRoaXMuZ3VpZGUubG9nZ2VyKTtcbiAgICB9XG59XG5cbmNsYXNzIFNjb3BlT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNjaGVtYSwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlciA9IG5ldyBWYWx1ZUxpc3RPYnNlcnZlcih0aGlzLmVsZW1lbnQsIHRoaXMuY29udHJvbGxlckF0dHJpYnV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH1cbiAgICBnZXQgY29udHJvbGxlckF0dHJpYnV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGU7XG4gICAgfVxuICAgIHBhcnNlVmFsdWVGb3JUb2tlbih0b2tlbikge1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIGNvbnRlbnQ6IGlkZW50aWZpZXIgfSA9IHRva2VuO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVZhbHVlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHBhcnNlVmFsdWVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3Blc0J5SWRlbnRpZmllciA9IHRoaXMuZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBsZXQgc2NvcGUgPSBzY29wZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZSA9IHRoaXMuZGVsZWdhdGUuY3JlYXRlU2NvcGVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHNjb3Blc0J5SWRlbnRpZmllci5zZXQoaWRlbnRpZmllciwgc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29wZTtcbiAgICB9XG4gICAgZWxlbWVudE1hdGNoZWRWYWx1ZShlbGVtZW50LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VDb3VudCA9ICh0aGlzLnNjb3BlUmVmZXJlbmNlQ291bnRzLmdldCh2YWx1ZSkgfHwgMCkgKyAxO1xuICAgICAgICB0aGlzLnNjb3BlUmVmZXJlbmNlQ291bnRzLnNldCh2YWx1ZSwgcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICBpZiAocmVmZXJlbmNlQ291bnQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zY29wZUNvbm5lY3RlZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudFVubWF0Y2hlZFZhbHVlKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5nZXQodmFsdWUpO1xuICAgICAgICBpZiAocmVmZXJlbmNlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuc2V0KHZhbHVlLCByZWZlcmVuY2VDb3VudCAtIDEpO1xuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnNjb3BlRGlzY29ubmVjdGVkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFNjb3Blc0J5SWRlbnRpZmllckZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBsZXQgc2NvcGVzQnlJZGVudGlmaWVyID0gdGhpcy5zY29wZXNCeUlkZW50aWZpZXJCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgICAgICBpZiAoIXNjb3Blc0J5SWRlbnRpZmllcikge1xuICAgICAgICAgICAgc2NvcGVzQnlJZGVudGlmaWVyID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXJCeUVsZW1lbnQuc2V0KGVsZW1lbnQsIHNjb3Blc0J5SWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjb3Blc0J5SWRlbnRpZmllcjtcbiAgICB9XG59XG5cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IoYXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLnNjb3BlT2JzZXJ2ZXIgPSBuZXcgU2NvcGVPYnNlcnZlcih0aGlzLmVsZW1lbnQsIHRoaXMuc2NoZW1hLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXIgPSBuZXcgTXVsdGltYXAoKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uc2NoZW1hO1xuICAgIH1cbiAgICBnZXQgbG9nZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5sb2dnZXI7XG4gICAgfVxuICAgIGdldCBjb250cm9sbGVyQXR0cmlidXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29udHJvbGxlckF0dHJpYnV0ZTtcbiAgICB9XG4gICAgZ2V0IG1vZHVsZXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci52YWx1ZXMoKSk7XG4gICAgfVxuICAgIGdldCBjb250ZXh0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlcy5yZWR1Y2UoKGNvbnRleHRzLCBtb2R1bGUpID0+IGNvbnRleHRzLmNvbmNhdChtb2R1bGUuY29udGV4dHMpLCBbXSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNjb3BlT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zY29wZU9ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgbG9hZERlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgICAgICB0aGlzLnVubG9hZElkZW50aWZpZXIoZGVmaW5pdGlvbi5pZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZSh0aGlzLmFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0TW9kdWxlKG1vZHVsZSk7XG4gICAgICAgIGNvbnN0IGFmdGVyTG9hZCA9IGRlZmluaXRpb24uY29udHJvbGxlckNvbnN0cnVjdG9yLmFmdGVyTG9hZDtcbiAgICAgICAgaWYgKGFmdGVyTG9hZCkge1xuICAgICAgICAgICAgYWZ0ZXJMb2FkLmNhbGwoZGVmaW5pdGlvbi5jb250cm9sbGVyQ29uc3RydWN0b3IsIGRlZmluaXRpb24uaWRlbnRpZmllciwgdGhpcy5hcHBsaWNhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5sb2FkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE1vZHVsZShtb2R1bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENvbnRleHRGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuY29udGV4dHMuZmluZCgoY29udGV4dCkgPT4gY29udGV4dC5lbGVtZW50ID09IGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3Bvc2VUb0Nvbm5lY3RTY29wZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzLnNjb3BlT2JzZXJ2ZXIucGFyc2VWYWx1ZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVPYnNlcnZlci5lbGVtZW50TWF0Y2hlZFZhbHVlKHNjb3BlLmVsZW1lbnQsIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkbid0IGZpbmQgb3IgY3JlYXRlIHNjb3BlIGZvciBpZGVudGlmaWVyOiBcIiR7aWRlbnRpZmllcn1cIiBhbmQgZWxlbWVudDpgLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVFcnJvcihlcnJvciwgbWVzc2FnZSwgZGV0YWlsKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCk7XG4gICAgfVxuICAgIGNyZWF0ZVNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gbmV3IFNjb3BlKHRoaXMuc2NoZW1hLCBlbGVtZW50LCBpZGVudGlmaWVyLCB0aGlzLmxvZ2dlcik7XG4gICAgfVxuICAgIHNjb3BlQ29ubmVjdGVkKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmFkZChzY29wZS5pZGVudGlmaWVyLCBzY29wZSk7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoc2NvcGUuaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIG1vZHVsZS5jb25uZWN0Q29udGV4dEZvclNjb3BlKHNjb3BlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzY29wZURpc2Nvbm5lY3RlZChzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5kZWxldGUoc2NvcGUuaWRlbnRpZmllciwgc2NvcGUpO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KHNjb3BlLmlkZW50aWZpZXIpO1xuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGUuZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29ubmVjdE1vZHVsZShtb2R1bGUpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLnNldChtb2R1bGUuaWRlbnRpZmllciwgbW9kdWxlKTtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gdGhpcy5zY29wZXNCeUlkZW50aWZpZXIuZ2V0VmFsdWVzRm9yS2V5KG1vZHVsZS5pZGVudGlmaWVyKTtcbiAgICAgICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBtb2R1bGUuY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSkpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0TW9kdWxlKG1vZHVsZSkge1xuICAgICAgICB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZGVsZXRlKG1vZHVsZS5pZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gdGhpcy5zY29wZXNCeUlkZW50aWZpZXIuZ2V0VmFsdWVzRm9yS2V5KG1vZHVsZS5pZGVudGlmaWVyKTtcbiAgICAgICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBtb2R1bGUuZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSkpO1xuICAgIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjaGVtYSA9IHtcbiAgICBjb250cm9sbGVyQXR0cmlidXRlOiBcImRhdGEtY29udHJvbGxlclwiLFxuICAgIGFjdGlvbkF0dHJpYnV0ZTogXCJkYXRhLWFjdGlvblwiLFxuICAgIHRhcmdldEF0dHJpYnV0ZTogXCJkYXRhLXRhcmdldFwiLFxuICAgIHRhcmdldEF0dHJpYnV0ZUZvclNjb3BlOiAoaWRlbnRpZmllcikgPT4gYGRhdGEtJHtpZGVudGlmaWVyfS10YXJnZXRgLFxuICAgIG91dGxldEF0dHJpYnV0ZUZvclNjb3BlOiAoaWRlbnRpZmllciwgb3V0bGV0KSA9PiBgZGF0YS0ke2lkZW50aWZpZXJ9LSR7b3V0bGV0fS1vdXRsZXRgLFxuICAgIGtleU1hcHBpbmdzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBlbnRlcjogXCJFbnRlclwiLCB0YWI6IFwiVGFiXCIsIGVzYzogXCJFc2NhcGVcIiwgc3BhY2U6IFwiIFwiLCB1cDogXCJBcnJvd1VwXCIsIGRvd246IFwiQXJyb3dEb3duXCIsIGxlZnQ6IFwiQXJyb3dMZWZ0XCIsIHJpZ2h0OiBcIkFycm93UmlnaHRcIiwgaG9tZTogXCJIb21lXCIsIGVuZDogXCJFbmRcIiwgcGFnZV91cDogXCJQYWdlVXBcIiwgcGFnZV9kb3duOiBcIlBhZ2VEb3duXCIgfSwgb2JqZWN0RnJvbUVudHJpZXMoXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpLm1hcCgoYykgPT4gW2MsIGNdKSkpLCBvYmplY3RGcm9tRW50cmllcyhcIjAxMjM0NTY3ODlcIi5zcGxpdChcIlwiKS5tYXAoKG4pID0+IFtuLCBuXSkpKSxcbn07XG5mdW5jdGlvbiBvYmplY3RGcm9tRW50cmllcyhhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKG1lbW8sIFtrLCB2XSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWVtbyksIHsgW2tdOiB2IH0pKSwge30pO1xufVxuXG5jbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc2NoZW1hID0gZGVmYXVsdFNjaGVtYSkge1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5ID0gKGlkZW50aWZpZXIsIGZ1bmN0aW9uTmFtZSwgZGV0YWlsID0ge30pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dGb3JtYXR0ZWRNZXNzYWdlKGlkZW50aWZpZXIsIGZ1bmN0aW9uTmFtZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKHRoaXMpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMuYWN0aW9uRGVzY3JpcHRvckZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0QWN0aW9uRGVzY3JpcHRvckZpbHRlcnMpO1xuICAgIH1cbiAgICBzdGF0aWMgc3RhcnQoZWxlbWVudCwgc2NoZW1hKSB7XG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IHRoaXMoZWxlbWVudCwgc2NoZW1hKTtcbiAgICAgICAgYXBwbGljYXRpb24uc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uO1xuICAgIH1cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgYXdhaXQgZG9tUmVhZHkoKTtcbiAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5KFwiYXBwbGljYXRpb25cIiwgXCJzdGFydGluZ1wiKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImFwcGxpY2F0aW9uXCIsIFwic3RhcnRcIik7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImFwcGxpY2F0aW9uXCIsIFwic3RvcHBpbmdcIik7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5zdG9wKCk7XG4gICAgICAgIHRoaXMucm91dGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5KFwiYXBwbGljYXRpb25cIiwgXCJzdG9wXCIpO1xuICAgIH1cbiAgICByZWdpc3RlcihpZGVudGlmaWVyLCBjb250cm9sbGVyQ29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5sb2FkKHsgaWRlbnRpZmllciwgY29udHJvbGxlckNvbnN0cnVjdG9yIH0pO1xuICAgIH1cbiAgICByZWdpc3RlckFjdGlvbk9wdGlvbihuYW1lLCBmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25EZXNjcmlwdG9yRmlsdGVyc1tuYW1lXSA9IGZpbHRlcjtcbiAgICB9XG4gICAgbG9hZChoZWFkLCAuLi5yZXN0KSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zID0gQXJyYXkuaXNBcnJheShoZWFkKSA/IGhlYWQgOiBbaGVhZCwgLi4ucmVzdF07XG4gICAgICAgIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3Rvci5zaG91bGRMb2FkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubG9hZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bmxvYWQoaGVhZCwgLi4ucmVzdCkge1xuICAgICAgICBjb25zdCBpZGVudGlmaWVycyA9IEFycmF5LmlzQXJyYXkoaGVhZCkgPyBoZWFkIDogW2hlYWQsIC4uLnJlc3RdO1xuICAgICAgICBpZGVudGlmaWVycy5mb3JFYWNoKChpZGVudGlmaWVyKSA9PiB0aGlzLnJvdXRlci51bmxvYWRJZGVudGlmaWVyKGlkZW50aWZpZXIpKTtcbiAgICB9XG4gICAgZ2V0IGNvbnRyb2xsZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY29udGV4dHMubWFwKChjb250ZXh0KSA9PiBjb250ZXh0LmNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBnZXRDb250cm9sbGVyRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5yb3V0ZXIuZ2V0Q29udGV4dEZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gY29udGV4dCA/IGNvbnRleHQuY29udHJvbGxlciA6IG51bGw7XG4gICAgfVxuICAgIGhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgJXNcXG5cXG4lb1xcblxcbiVvYCwgbWVzc2FnZSwgZXJyb3IsIGRldGFpbCk7XG4gICAgICAgIChfYSA9IHdpbmRvdy5vbmVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh3aW5kb3csIG1lc3NhZ2UsIFwiXCIsIDAsIDAsIGVycm9yKTtcbiAgICB9XG4gICAgbG9nRm9ybWF0dGVkTWVzc2FnZShpZGVudGlmaWVyLCBmdW5jdGlvbk5hbWUsIGRldGFpbCA9IHt9KSB7XG4gICAgICAgIGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBhcHBsaWNhdGlvbjogdGhpcyB9LCBkZXRhaWwpO1xuICAgICAgICB0aGlzLmxvZ2dlci5ncm91cENvbGxhcHNlZChgJHtpZGVudGlmaWVyfSAjJHtmdW5jdGlvbk5hbWV9YCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhcImRldGFpbHM6XCIsIE9iamVjdC5hc3NpZ24oe30sIGRldGFpbCkpO1xuICAgICAgICB0aGlzLmxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRvbVJlYWR5KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImxvYWRpbmdcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBDbGFzc1Byb3BlcnRpZXNCbGVzc2luZyhjb25zdHJ1Y3Rvcikge1xuICAgIGNvbnN0IGNsYXNzZXMgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgXCJjbGFzc2VzXCIpO1xuICAgIHJldHVybiBjbGFzc2VzLnJlZHVjZSgocHJvcGVydGllcywgY2xhc3NEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JDbGFzc0RlZmluaXRpb24oY2xhc3NEZWZpbml0aW9uKSk7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gcHJvcGVydGllc0ZvckNsYXNzRGVmaW5pdGlvbihrZXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbYCR7a2V5fUNsYXNzYF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBjbGFzc2VzLmdldEF0dHJpYnV0ZU5hbWUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGF0dHJpYnV0ZSBcIiR7YXR0cmlidXRlfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake2tleX1DbGFzc2VzYF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2VzLmdldEFsbChrZXkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW2BoYXMke2NhcGl0YWxpemUoa2V5KX1DbGFzc2BdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5oYXMoa2V5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gT3V0bGV0UHJvcGVydGllc0JsZXNzaW5nKGNvbnN0cnVjdG9yKSB7XG4gICAgY29uc3Qgb3V0bGV0cyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcIm91dGxldHNcIik7XG4gICAgcmV0dXJuIG91dGxldHMucmVkdWNlKChwcm9wZXJ0aWVzLCBvdXRsZXREZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JPdXRsZXREZWZpbml0aW9uKG91dGxldERlZmluaXRpb24pKTtcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBnZXRPdXRsZXRDb250cm9sbGVyKGNvbnRyb2xsZXIsIGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gY29udHJvbGxlci5hcHBsaWNhdGlvbi5nZXRDb250cm9sbGVyRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XG59XG5mdW5jdGlvbiBnZXRDb250cm9sbGVyQW5kRW5zdXJlQ29ubmVjdGVkU2NvcGUoY29udHJvbGxlciwgZWxlbWVudCwgb3V0bGV0TmFtZSkge1xuICAgIGxldCBvdXRsZXRDb250cm9sbGVyID0gZ2V0T3V0bGV0Q29udHJvbGxlcihjb250cm9sbGVyLCBlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICBpZiAob3V0bGV0Q29udHJvbGxlcilcbiAgICAgICAgcmV0dXJuIG91dGxldENvbnRyb2xsZXI7XG4gICAgY29udHJvbGxlci5hcHBsaWNhdGlvbi5yb3V0ZXIucHJvcG9zZVRvQ29ubmVjdFNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgb3V0bGV0Q29udHJvbGxlciA9IGdldE91dGxldENvbnRyb2xsZXIoY29udHJvbGxlciwgZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgaWYgKG91dGxldENvbnRyb2xsZXIpXG4gICAgICAgIHJldHVybiBvdXRsZXRDb250cm9sbGVyO1xufVxuZnVuY3Rpb24gcHJvcGVydGllc0Zvck91dGxldERlZmluaXRpb24obmFtZSkge1xuICAgIGNvbnN0IGNhbWVsaXplZE5hbWUgPSBuYW1lc3BhY2VDYW1lbGl6ZShuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldEVsZW1lbnQgPSB0aGlzLm91dGxldHMuZmluZChuYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMub3V0bGV0cy5nZXRTZWxlY3RvckZvck91dGxldE5hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG91dGxldEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0bGV0Q29udHJvbGxlciA9IGdldENvbnRyb2xsZXJBbmRFbnN1cmVDb25uZWN0ZWRTY29wZSh0aGlzLCBvdXRsZXRFbGVtZW50LCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dGxldENvbnRyb2xsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0bGV0Q29udHJvbGxlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgb3V0bGV0IGVsZW1lbnQgaXMgbWlzc2luZyBhbiBvdXRsZXQgY29udHJvbGxlciBcIiR7bmFtZX1cIiBpbnN0YW5jZSBmb3IgaG9zdCBjb250cm9sbGVyIFwiJHt0aGlzLmlkZW50aWZpZXJ9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIG91dGxldCBlbGVtZW50IFwiJHtuYW1lfVwiIGZvciBob3N0IGNvbnRyb2xsZXIgXCIke3RoaXMuaWRlbnRpZmllcn1cIi4gU3RpbXVsdXMgY291bGRuJ3QgZmluZCBhIG1hdGNoaW5nIG91dGxldCBlbGVtZW50IHVzaW5nIHNlbGVjdG9yIFwiJHtzZWxlY3Rvcn1cIi5gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjYW1lbGl6ZWROYW1lfU91dGxldHNgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldHMgPSB0aGlzLm91dGxldHMuZmluZEFsbChuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0bGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRsZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChvdXRsZXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRsZXRDb250cm9sbGVyID0gZ2V0Q29udHJvbGxlckFuZEVuc3VyZUNvbm5lY3RlZFNjb3BlKHRoaXMsIG91dGxldEVsZW1lbnQsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dGxldENvbnRyb2xsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dGxldENvbnRyb2xsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm92aWRlZCBvdXRsZXQgZWxlbWVudCBpcyBtaXNzaW5nIGFuIG91dGxldCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGluc3RhbmNlIGZvciBob3N0IGNvbnRyb2xsZXIgXCIke3RoaXMuaWRlbnRpZmllcn1cImAsIG91dGxldEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoY29udHJvbGxlcikgPT4gY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjYW1lbGl6ZWROYW1lfU91dGxldEVsZW1lbnRgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldEVsZW1lbnQgPSB0aGlzLm91dGxldHMuZmluZChuYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMub3V0bGV0cy5nZXRTZWxlY3RvckZvck91dGxldE5hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG91dGxldEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dGxldEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgb3V0bGV0IGVsZW1lbnQgXCIke25hbWV9XCIgZm9yIGhvc3QgY29udHJvbGxlciBcIiR7dGhpcy5pZGVudGlmaWVyfVwiLiBTdGltdWx1cyBjb3VsZG4ndCBmaW5kIGEgbWF0Y2hpbmcgb3V0bGV0IGVsZW1lbnQgdXNpbmcgc2VsZWN0b3IgXCIke3NlbGVjdG9yfVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtjYW1lbGl6ZWROYW1lfU91dGxldEVsZW1lbnRzYF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXRzLmZpbmRBbGwobmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbYGhhcyR7Y2FwaXRhbGl6ZShjYW1lbGl6ZWROYW1lKX1PdXRsZXRgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm91dGxldHMuaGFzKG5hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBUYXJnZXRQcm9wZXJ0aWVzQmxlc3NpbmcoY29uc3RydWN0b3IpIHtcbiAgICBjb25zdCB0YXJnZXRzID0gcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIFwidGFyZ2V0c1wiKTtcbiAgICByZXR1cm4gdGFyZ2V0cy5yZWR1Y2UoKHByb3BlcnRpZXMsIHRhcmdldERlZmluaXRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgcHJvcGVydGllc0ZvclRhcmdldERlZmluaXRpb24odGFyZ2V0RGVmaW5pdGlvbikpO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIHByb3BlcnRpZXNGb3JUYXJnZXREZWZpbml0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbYCR7bmFtZX1UYXJnZXRgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0cy5maW5kKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyB0YXJnZXQgZWxlbWVudCBcIiR7bmFtZX1cIiBmb3IgXCIke3RoaXMuaWRlbnRpZmllcn1cIiBjb250cm9sbGVyYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake25hbWV9VGFyZ2V0c2BdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5maW5kQWxsKG5hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW2BoYXMke2NhcGl0YWxpemUobmFtZSl9VGFyZ2V0YF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzLmhhcyhuYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gVmFsdWVQcm9wZXJ0aWVzQmxlc3NpbmcoY29uc3RydWN0b3IpIHtcbiAgICBjb25zdCB2YWx1ZURlZmluaXRpb25QYWlycyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBcInZhbHVlc1wiKTtcbiAgICBjb25zdCBwcm9wZXJ0eURlc2NyaXB0b3JNYXAgPSB7XG4gICAgICAgIHZhbHVlRGVzY3JpcHRvck1hcDoge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZURlZmluaXRpb25QYWlycy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWVEZWZpbml0aW9uUGFpcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZURlc2NyaXB0b3IgPSBwYXJzZVZhbHVlRGVmaW5pdGlvblBhaXIodmFsdWVEZWZpbml0aW9uUGFpciwgdGhpcy5pZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuZGF0YS5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KHZhbHVlRGVzY3JpcHRvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2F0dHJpYnV0ZU5hbWVdOiB2YWx1ZURlc2NyaXB0b3IgfSk7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB2YWx1ZURlZmluaXRpb25QYWlycy5yZWR1Y2UoKHByb3BlcnRpZXMsIHZhbHVlRGVmaW5pdGlvblBhaXIpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgcHJvcGVydGllc0ZvclZhbHVlRGVmaW5pdGlvblBhaXIodmFsdWVEZWZpbml0aW9uUGFpcikpO1xuICAgIH0sIHByb3BlcnR5RGVzY3JpcHRvck1hcCk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0aWVzRm9yVmFsdWVEZWZpbml0aW9uUGFpcih2YWx1ZURlZmluaXRpb25QYWlyLCBjb250cm9sbGVyKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHBhcnNlVmFsdWVEZWZpbml0aW9uUGFpcih2YWx1ZURlZmluaXRpb25QYWlyLCBjb250cm9sbGVyKTtcbiAgICBjb25zdCB7IGtleSwgbmFtZSwgcmVhZGVyOiByZWFkLCB3cml0ZXI6IHdyaXRlIH0gPSBkZWZpbml0aW9uO1xuICAgIHJldHVybiB7XG4gICAgICAgIFtuYW1lXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB3cml0ZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgaGFzJHtjYXBpdGFsaXplKG5hbWUpfWBdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYXMoa2V5KSB8fCBkZWZpbml0aW9uLmhhc0N1c3RvbURlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWVEZWZpbml0aW9uUGFpcihbdG9rZW4sIHR5cGVEZWZpbml0aW9uXSwgY29udHJvbGxlcikge1xuICAgIHJldHVybiB2YWx1ZURlc2NyaXB0b3JGb3JUb2tlbkFuZFR5cGVEZWZpbml0aW9uKHtcbiAgICAgICAgY29udHJvbGxlcixcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHR5cGVEZWZpbml0aW9uLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VWYWx1ZVR5cGVDb25zdGFudChjb25zdGFudCkge1xuICAgIHN3aXRjaCAoY29uc3RhbnQpIHtcbiAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgIHJldHVybiBcImFycmF5XCI7XG4gICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgIHJldHVybiBcImJvb2xlYW5cIjtcbiAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICByZXR1cm4gXCJvYmplY3RcIjtcbiAgICAgICAgY2FzZSBTdHJpbmc6XG4gICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlVHlwZURlZmF1bHQoZGVmYXVsdFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJib29sZWFuXCI7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIm51bWJlclwiO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKSlcbiAgICAgICAgcmV0dXJuIFwiYXJyYXlcIjtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRlZmF1bHRWYWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpXG4gICAgICAgIHJldHVybiBcIm9iamVjdFwiO1xufVxuZnVuY3Rpb24gcGFyc2VWYWx1ZVR5cGVPYmplY3QocGF5bG9hZCkge1xuICAgIGNvbnN0IHsgY29udHJvbGxlciwgdG9rZW4sIHR5cGVPYmplY3QgfSA9IHBheWxvYWQ7XG4gICAgY29uc3QgaGFzVHlwZSA9IGlzU29tZXRoaW5nKHR5cGVPYmplY3QudHlwZSk7XG4gICAgY29uc3QgaGFzRGVmYXVsdCA9IGlzU29tZXRoaW5nKHR5cGVPYmplY3QuZGVmYXVsdCk7XG4gICAgY29uc3QgZnVsbE9iamVjdCA9IGhhc1R5cGUgJiYgaGFzRGVmYXVsdDtcbiAgICBjb25zdCBvbmx5VHlwZSA9IGhhc1R5cGUgJiYgIWhhc0RlZmF1bHQ7XG4gICAgY29uc3Qgb25seURlZmF1bHQgPSAhaGFzVHlwZSAmJiBoYXNEZWZhdWx0O1xuICAgIGNvbnN0IHR5cGVGcm9tT2JqZWN0ID0gcGFyc2VWYWx1ZVR5cGVDb25zdGFudCh0eXBlT2JqZWN0LnR5cGUpO1xuICAgIGNvbnN0IHR5cGVGcm9tRGVmYXVsdFZhbHVlID0gcGFyc2VWYWx1ZVR5cGVEZWZhdWx0KHBheWxvYWQudHlwZU9iamVjdC5kZWZhdWx0KTtcbiAgICBpZiAob25seVR5cGUpXG4gICAgICAgIHJldHVybiB0eXBlRnJvbU9iamVjdDtcbiAgICBpZiAob25seURlZmF1bHQpXG4gICAgICAgIHJldHVybiB0eXBlRnJvbURlZmF1bHRWYWx1ZTtcbiAgICBpZiAodHlwZUZyb21PYmplY3QgIT09IHR5cGVGcm9tRGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5UGF0aCA9IGNvbnRyb2xsZXIgPyBgJHtjb250cm9sbGVyfS4ke3Rva2VufWAgOiB0b2tlbjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgc3BlY2lmaWVkIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBTdGltdWx1cyBWYWx1ZSBcIiR7cHJvcGVydHlQYXRofVwiIG11c3QgbWF0Y2ggdGhlIGRlZmluZWQgdHlwZSBcIiR7dHlwZUZyb21PYmplY3R9XCIuIFRoZSBwcm92aWRlZCBkZWZhdWx0IHZhbHVlIG9mIFwiJHt0eXBlT2JqZWN0LmRlZmF1bHR9XCIgaXMgb2YgdHlwZSBcIiR7dHlwZUZyb21EZWZhdWx0VmFsdWV9XCIuYCk7XG4gICAgfVxuICAgIGlmIChmdWxsT2JqZWN0KVxuICAgICAgICByZXR1cm4gdHlwZUZyb21PYmplY3Q7XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlVHlwZURlZmluaXRpb24ocGF5bG9hZCkge1xuICAgIGNvbnN0IHsgY29udHJvbGxlciwgdG9rZW4sIHR5cGVEZWZpbml0aW9uIH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IHR5cGVPYmplY3QgPSB7IGNvbnRyb2xsZXIsIHRva2VuLCB0eXBlT2JqZWN0OiB0eXBlRGVmaW5pdGlvbiB9O1xuICAgIGNvbnN0IHR5cGVGcm9tT2JqZWN0ID0gcGFyc2VWYWx1ZVR5cGVPYmplY3QodHlwZU9iamVjdCk7XG4gICAgY29uc3QgdHlwZUZyb21EZWZhdWx0VmFsdWUgPSBwYXJzZVZhbHVlVHlwZURlZmF1bHQodHlwZURlZmluaXRpb24pO1xuICAgIGNvbnN0IHR5cGVGcm9tQ29uc3RhbnQgPSBwYXJzZVZhbHVlVHlwZUNvbnN0YW50KHR5cGVEZWZpbml0aW9uKTtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21PYmplY3QgfHwgdHlwZUZyb21EZWZhdWx0VmFsdWUgfHwgdHlwZUZyb21Db25zdGFudDtcbiAgICBpZiAodHlwZSlcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgY29uc3QgcHJvcGVydHlQYXRoID0gY29udHJvbGxlciA/IGAke2NvbnRyb2xsZXJ9LiR7dHlwZURlZmluaXRpb259YCA6IHRva2VuO1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB2YWx1ZSB0eXBlIFwiJHtwcm9wZXJ0eVBhdGh9XCIgZm9yIFwiJHt0b2tlbn1cIiB2YWx1ZWApO1xufVxuZnVuY3Rpb24gZGVmYXVsdFZhbHVlRm9yRGVmaW5pdGlvbih0eXBlRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGNvbnN0YW50ID0gcGFyc2VWYWx1ZVR5cGVDb25zdGFudCh0eXBlRGVmaW5pdGlvbik7XG4gICAgaWYgKGNvbnN0YW50KVxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlc0J5VHlwZVtjb25zdGFudF07XG4gICAgY29uc3QgaGFzRGVmYXVsdCA9IGhhc1Byb3BlcnR5KHR5cGVEZWZpbml0aW9uLCBcImRlZmF1bHRcIik7XG4gICAgY29uc3QgaGFzVHlwZSA9IGhhc1Byb3BlcnR5KHR5cGVEZWZpbml0aW9uLCBcInR5cGVcIik7XG4gICAgY29uc3QgdHlwZU9iamVjdCA9IHR5cGVEZWZpbml0aW9uO1xuICAgIGlmIChoYXNEZWZhdWx0KVxuICAgICAgICByZXR1cm4gdHlwZU9iamVjdC5kZWZhdWx0O1xuICAgIGlmIChoYXNUeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdHlwZU9iamVjdDtcbiAgICAgICAgY29uc3QgY29uc3RhbnRGcm9tVHlwZSA9IHBhcnNlVmFsdWVUeXBlQ29uc3RhbnQodHlwZSk7XG4gICAgICAgIGlmIChjb25zdGFudEZyb21UeXBlKVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXNCeVR5cGVbY29uc3RhbnRGcm9tVHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0eXBlRGVmaW5pdGlvbjtcbn1cbmZ1bmN0aW9uIHZhbHVlRGVzY3JpcHRvckZvclRva2VuQW5kVHlwZURlZmluaXRpb24ocGF5bG9hZCkge1xuICAgIGNvbnN0IHsgdG9rZW4sIHR5cGVEZWZpbml0aW9uIH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IGtleSA9IGAke2Rhc2hlcml6ZSh0b2tlbil9LXZhbHVlYDtcbiAgICBjb25zdCB0eXBlID0gcGFyc2VWYWx1ZVR5cGVEZWZpbml0aW9uKHBheWxvYWQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGtleSxcbiAgICAgICAgbmFtZTogY2FtZWxpemUoa2V5KSxcbiAgICAgICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVGb3JEZWZpbml0aW9uKHR5cGVEZWZpbml0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhhc0N1c3RvbURlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVZhbHVlVHlwZURlZmF1bHQodHlwZURlZmluaXRpb24pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRlcjogcmVhZGVyc1t0eXBlXSxcbiAgICAgICAgd3JpdGVyOiB3cml0ZXJzW3R5cGVdIHx8IHdyaXRlcnMuZGVmYXVsdCxcbiAgICB9O1xufVxuY29uc3QgZGVmYXVsdFZhbHVlc0J5VHlwZSA9IHtcbiAgICBnZXQgYXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGJvb2xlYW46IGZhbHNlLFxuICAgIG51bWJlcjogMCxcbiAgICBnZXQgb2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBzdHJpbmc6IFwiXCIsXG59O1xuY29uc3QgcmVhZGVycyA9IHtcbiAgICBhcnJheSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBleHBlY3RlZCB2YWx1ZSBvZiB0eXBlIFwiYXJyYXlcIiBidXQgaW5zdGVhZCBnb3QgdmFsdWUgXCIke3ZhbHVlfVwiIG9mIHR5cGUgXCIke3BhcnNlVmFsdWVUeXBlRGVmYXVsdChhcnJheSl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSxcbiAgICBib29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhKHZhbHVlID09IFwiMFwiIHx8IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSA9PSBcImZhbHNlXCIpO1xuICAgIH0sXG4gICAgbnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZSgvXy9nLCBcIlwiKSk7XG4gICAgfSxcbiAgICBvYmplY3QodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgdHlwZW9mIG9iamVjdCAhPSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZXhwZWN0ZWQgdmFsdWUgb2YgdHlwZSBcIm9iamVjdFwiIGJ1dCBpbnN0ZWFkIGdvdCB2YWx1ZSBcIiR7dmFsdWV9XCIgb2YgdHlwZSBcIiR7cGFyc2VWYWx1ZVR5cGVEZWZhdWx0KG9iamVjdCl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sXG4gICAgc3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxufTtcbmNvbnN0IHdyaXRlcnMgPSB7XG4gICAgZGVmYXVsdDogd3JpdGVTdHJpbmcsXG4gICAgYXJyYXk6IHdyaXRlSlNPTixcbiAgICBvYmplY3Q6IHdyaXRlSlNPTixcbn07XG5mdW5jdGlvbiB3cml0ZUpTT04odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xufVxuZnVuY3Rpb24gd3JpdGVTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9YDtcbn1cblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHNob3VsZExvYWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgYWZ0ZXJMb2FkKF9pZGVudGlmaWVyLCBfYXBwbGljYXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuYXBwbGljYXRpb247XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zY29wZTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQgdGFyZ2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUudGFyZ2V0cztcbiAgICB9XG4gICAgZ2V0IG91dGxldHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLm91dGxldHM7XG4gICAgfVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5jbGFzc2VzO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZGF0YTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICB9XG4gICAgZGlzcGF0Y2goZXZlbnROYW1lLCB7IHRhcmdldCA9IHRoaXMuZWxlbWVudCwgZGV0YWlsID0ge30sIHByZWZpeCA9IHRoaXMuaWRlbnRpZmllciwgYnViYmxlcyA9IHRydWUsIGNhbmNlbGFibGUgPSB0cnVlLCB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHByZWZpeCA/IGAke3ByZWZpeH06JHtldmVudE5hbWV9YCA6IGV2ZW50TmFtZTtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgeyBkZXRhaWwsIGJ1YmJsZXMsIGNhbmNlbGFibGUgfSk7XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbn1cbkNvbnRyb2xsZXIuYmxlc3NpbmdzID0gW1xuICAgIENsYXNzUHJvcGVydGllc0JsZXNzaW5nLFxuICAgIFRhcmdldFByb3BlcnRpZXNCbGVzc2luZyxcbiAgICBWYWx1ZVByb3BlcnRpZXNCbGVzc2luZyxcbiAgICBPdXRsZXRQcm9wZXJ0aWVzQmxlc3NpbmcsXG5dO1xuQ29udHJvbGxlci50YXJnZXRzID0gW107XG5Db250cm9sbGVyLm91dGxldHMgPSBbXTtcbkNvbnRyb2xsZXIudmFsdWVzID0ge307XG5cbmV4cG9ydCB7IEFwcGxpY2F0aW9uLCBBdHRyaWJ1dGVPYnNlcnZlciwgQ29udGV4dCwgQ29udHJvbGxlciwgRWxlbWVudE9ic2VydmVyLCBJbmRleGVkTXVsdGltYXAsIE11bHRpbWFwLCBTZWxlY3Rvck9ic2VydmVyLCBTdHJpbmdNYXBPYnNlcnZlciwgVG9rZW5MaXN0T2JzZXJ2ZXIsIFZhbHVlTGlzdE9ic2VydmVyLCBhZGQsIGRlZmF1bHRTY2hlbWEsIGRlbCwgZmV0Y2gsIHBydW5lIH07XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgc3ltZm9ueUNvbnRyb2xsZXJzIGZyb20gJy4vd2VicGFjay9sb2FkZXIhQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2NvbnRyb2xsZXJzLmpzb24nO1xuXG4vKlxuU3RpbXVsdXMgV2VicGFjayBIZWxwZXJzIDEuMC4wXG5Db3B5cmlnaHQgwqkgMjAyMSBCYXNlY2FtcCwgTExDXG4gKi9cbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LmtleXMoKVxuICAgICAgICAubWFwKChrZXkpID0+IGRlZmluaXRpb25Gb3JNb2R1bGVXaXRoQ29udGV4dEFuZEtleShjb250ZXh0LCBrZXkpKVxuICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpO1xufVxuZnVuY3Rpb24gZGVmaW5pdGlvbkZvck1vZHVsZVdpdGhDb250ZXh0QW5kS2V5KGNvbnRleHQsIGtleSkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRm9yQ29udGV4dEtleShrZXkpO1xuICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uRm9yTW9kdWxlQW5kSWRlbnRpZmllcihjb250ZXh0KGtleSksIGlkZW50aWZpZXIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmluaXRpb25Gb3JNb2R1bGVBbmRJZGVudGlmaWVyKG1vZHVsZSwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRyb2xsZXJDb25zdHJ1Y3RvciA9IG1vZHVsZS5kZWZhdWx0O1xuICAgIGlmICh0eXBlb2YgY29udHJvbGxlckNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4geyBpZGVudGlmaWVyLCBjb250cm9sbGVyQ29uc3RydWN0b3IgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBpZGVudGlmaWVyRm9yQ29udGV4dEtleShrZXkpIHtcbiAgICBjb25zdCBsb2dpY2FsTmFtZSA9IChrZXkubWF0Y2goL14oPzpcXC5cXC8pPyguKykoPzpbXy1dY29udHJvbGxlclxcLi4rPykkLykgfHwgW10pWzFdO1xuICAgIGlmIChsb2dpY2FsTmFtZSkge1xuICAgICAgICByZXR1cm4gbG9naWNhbE5hbWUucmVwbGFjZSgvXy9nLCBcIi1cIikucmVwbGFjZSgvXFwvL2csIFwiLS1cIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFN0aW11bHVzQXBwKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IEFwcGxpY2F0aW9uLnN0YXJ0KCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgYXBwbGljYXRpb24ubG9hZChkZWZpbml0aW9uc0Zyb21Db250ZXh0KGNvbnRleHQpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjb250cm9sbGVyTmFtZSBpbiBzeW1mb255Q29udHJvbGxlcnMpIHtcbiAgICAgICAgaWYgKCFzeW1mb255Q29udHJvbGxlcnMuaGFzT3duUHJvcGVydHkoY29udHJvbGxlck5hbWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBhcHBsaWNhdGlvbi5yZWdpc3Rlcihjb250cm9sbGVyTmFtZSwgc3ltZm9ueUNvbnRyb2xsZXJzW2NvbnRyb2xsZXJOYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbn1cblxuZXhwb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcblxuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG4iXSwibmFtZXMiOlsic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX3N1cGVyUHJvcEdldCIsIl9nZXQiLCJnZXQiLCJiaW5kIiwiX3N1cGVyUHJvcEJhc2UiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfaW5oZXJpdHMiLCJfc2V0UHJvdG90eXBlT2YiLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJfZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX24iLCJGIiwidG9TdHJpbmciLCJ0ZXN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnRpZXMiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkV2ZW50TGlzdGVuZXIiLCJldmVudFRhcmdldCIsImV2ZW50TmFtZSIsImV2ZW50T3B0aW9ucyIsInVub3JkZXJlZEJpbmRpbmdzIiwiU2V0IiwiY29ubmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJpbmRpbmdDb25uZWN0ZWQiLCJiaW5kaW5nIiwiYWRkIiwiYmluZGluZ0Rpc2Nvbm5lY3RlZCIsImhhbmRsZUV2ZW50IiwiZXZlbnQiLCJleHRlbmRlZEV2ZW50IiwiZXh0ZW5kRXZlbnQiLCJfaXRlcmF0b3IiLCJiaW5kaW5ncyIsIl9zdGVwIiwiaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiZXJyIiwiaGFzQmluZGluZ3MiLCJzaXplIiwic29ydCIsImxlZnQiLCJyaWdodCIsImxlZnRJbmRleCIsImluZGV4IiwicmlnaHRJbmRleCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFzc2lnbiIsIkRpc3BhdGNoZXIiLCJhcHBsaWNhdGlvbiIsImV2ZW50TGlzdGVuZXJNYXBzIiwiTWFwIiwic3RhcnRlZCIsInN0YXJ0IiwiZXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwicmVkdWNlIiwibGlzdGVuZXJzIiwibWFwIiwiY29uY2F0IiwiZmV0Y2hFdmVudExpc3RlbmVyRm9yQmluZGluZyIsImNsZWFyRXZlbnRMaXN0ZW5lcnMiLCJ1bmRlZmluZWQiLCJjbGVhckV2ZW50TGlzdGVuZXJzRm9yQmluZGluZyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGV0YWlsIiwicmVtb3ZlTWFwcGVkRXZlbnRMaXN0ZW5lckZvciIsImV2ZW50TGlzdGVuZXJNYXAiLCJmZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldCIsImNhY2hlS2V5IiwiZmV0Y2hFdmVudExpc3RlbmVyIiwiY3JlYXRlRXZlbnRMaXN0ZW5lciIsInNldCIsInBhcnRzIiwiam9pbiIsImRlZmF1bHRBY3Rpb25EZXNjcmlwdG9yRmlsdGVycyIsIl9yZWYiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50IiwiX3JlZjIiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGYiLCJfcmVmMyIsImVsZW1lbnQiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yUGF0dGVybiIsInBhcnNlQWN0aW9uRGVzY3JpcHRvclN0cmluZyIsImRlc2NyaXB0b3JTdHJpbmciLCJzb3VyY2UiLCJ0cmltIiwibWF0Y2hlcyIsIm1hdGNoIiwia2V5RmlsdGVyIiwiaW5jbHVkZXMiLCJwYXJzZUV2ZW50VGFyZ2V0IiwicGFyc2VFdmVudE9wdGlvbnMiLCJpZGVudGlmaWVyIiwibWV0aG9kTmFtZSIsImV2ZW50VGFyZ2V0TmFtZSIsIndpbmRvdyIsImRvY3VtZW50Iiwic3BsaXQiLCJvcHRpb25zIiwidG9rZW4iLCJyZXBsYWNlIiwic3RyaW5naWZ5RXZlbnRUYXJnZXQiLCJjYW1lbGl6ZSIsIl8iLCJjaGFyIiwidG9VcHBlckNhc2UiLCJuYW1lc3BhY2VDYW1lbGl6ZSIsImNhcGl0YWxpemUiLCJkYXNoZXJpemUiLCJ0b0xvd2VyQ2FzZSIsInRva2VuaXplIiwiaXNTb21ldGhpbmciLCJvYmplY3QiLCJoYXNQcm9wZXJ0eSIsInByb3BlcnR5IiwiYWxsTW9kaWZpZXJzIiwiQWN0aW9uIiwiZGVzY3JpcHRvciIsInNjaGVtYSIsImdldERlZmF1bHRFdmVudE5hbWVGb3JFbGVtZW50IiwiZXZlbnRGaWx0ZXIiLCJzaG91bGRJZ25vcmVLZXlib2FyZEV2ZW50IiwiZmlsdGVycyIsImtleUZpbHRlckRpc3NhdGlzZmllZCIsInN0YW5kYXJkRmlsdGVyIiwiZmlsdGVyIiwia2V5TWFwcGluZ3MiLCJzaG91bGRJZ25vcmVNb3VzZUV2ZW50IiwicGFyYW1zIiwicGF0dGVybiIsIlJlZ0V4cCIsIl9pIiwiX0FycmF5JGZyb20iLCJhdHRyaWJ1dGVzIiwiX0FycmF5JGZyb20kX2kiLCJ0eXBlY2FzdCIsIl9hbGxNb2RpZmllcnMkbWFwIiwibW9kaWZpZXIiLCJfYWxsTW9kaWZpZXJzJG1hcDIiLCJtZXRhIiwiY3RybCIsImFsdCIsInNoaWZ0IiwibWV0YUtleSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsImZvclRva2VuIiwiY29udGVudCIsImRlZmF1bHRFdmVudE5hbWVzIiwiYnV0dG9uIiwiZm9ybSIsImRldGFpbHMiLCJpbnB1dCIsImdldEF0dHJpYnV0ZSIsInNlbGVjdCIsInRleHRhcmVhIiwidGFnTmFtZSIsIkpTT04iLCJwYXJzZSIsIm9fTyIsIkJpbmRpbmciLCJhY3Rpb24iLCJhY3Rpb25FdmVudCIsInByZXBhcmVBY3Rpb25FdmVudCIsIndpbGxCZUludm9rZWRCeUV2ZW50IiwiYXBwbHlFdmVudE1vZGlmaWVycyIsImludm9rZVdpdGhFdmVudCIsImNvbnRyb2xsZXIiLCJhY3Rpb25EZXNjcmlwdG9yRmlsdGVycyIsInBhc3NlcyIsIl9pMiIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJjdXJyZW50VGFyZ2V0IiwibG9nRGVidWdBY3Rpdml0eSIsIktleWJvYXJkRXZlbnQiLCJNb3VzZUV2ZW50IiwiRWxlbWVudCIsImNvbnRhaW5zIiwic2NvcGUiLCJjb250YWluc0VsZW1lbnQiLCJFbGVtZW50T2JzZXJ2ZXIiLCJfdGhpcyIsIm11dGF0aW9uT2JzZXJ2ZXJJbml0IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1lbnRzIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJwcm9jZXNzTXV0YXRpb25zIiwib2JzZXJ2ZSIsInJlZnJlc2giLCJwYXVzZSIsImNhbGxiYWNrIiwidGFrZVJlY29yZHMiLCJtYXRjaEVsZW1lbnRzSW5UcmVlIiwiX2kzIiwiX0FycmF5JGZyb20yIiwiaGFzIiwicmVtb3ZlRWxlbWVudCIsIl9pNCIsIl9BcnJheSRmcm9tMyIsImFkZEVsZW1lbnQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibXV0YXRpb24iLCJwcm9jZXNzTXV0YXRpb24iLCJwcm9jZXNzQXR0cmlidXRlQ2hhbmdlIiwiYXR0cmlidXRlTmFtZSIsInByb2Nlc3NSZW1vdmVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJwcm9jZXNzQWRkZWROb2RlcyIsImFkZGVkTm9kZXMiLCJlbGVtZW50QXR0cmlidXRlQ2hhbmdlZCIsIm1hdGNoRWxlbWVudCIsIm5vZGVzIiwiX2k1IiwiX0FycmF5JGZyb200Iiwibm9kZSIsImVsZW1lbnRGcm9tTm9kZSIsInByb2Nlc3NUcmVlIiwiX2k2IiwiX0FycmF5JGZyb201IiwiZWxlbWVudElzQWN0aXZlIiwidHJlZSIsInByb2Nlc3NvciIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJpc0Nvbm5lY3RlZCIsImVsZW1lbnRNYXRjaGVkIiwiZWxlbWVudFVubWF0Y2hlZCIsIkF0dHJpYnV0ZU9ic2VydmVyIiwiZWxlbWVudE9ic2VydmVyIiwiaGFzQXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdG9yIiwiZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUiLCJlbGVtZW50VW5tYXRjaGVkQXR0cmlidXRlIiwiZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCIsImZldGNoIiwiZGVsIiwicHJ1bmUiLCJNdWx0aW1hcCIsInZhbHVlc0J5S2V5Iiwic2V0cyIsImRlbGV0ZSIsImhhc0tleSIsImhhc1ZhbHVlIiwic29tZSIsImdldFZhbHVlc0ZvcktleSIsImdldEtleXNGb3JWYWx1ZSIsIl9yZWY0IiwiX3JlZjUiLCJfa2V5IiwiX3JlZjYiLCJfcmVmNyIsIl92YWx1ZXMiLCJJbmRleGVkTXVsdGltYXAiLCJfTXVsdGltYXAiLCJfdGhpczIiLCJrZXlzQnlWYWx1ZSIsIlNlbGVjdG9yT2JzZXJ2ZXIiLCJfc2VsZWN0b3IiLCJtYXRjaGVzQnlFbGVtZW50Iiwic2VsZWN0b3JNYXRjaEVsZW1lbnQiLCJfdGhpczMiLCJzZWxlY3Rvck1hdGNoZWQiLCJzZWxlY3RvcnMiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0Iiwic2VsZWN0b3JVbm1hdGNoZWQiLCJfYXR0cmlidXRlTmFtZSIsIm1hdGNoZWRCZWZvcmUiLCJTdHJpbmdNYXBPYnNlcnZlciIsIl90aGlzNCIsInN0cmluZ01hcCIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiX2l0ZXJhdG9yNSIsImtub3duQXR0cmlidXRlTmFtZXMiLCJfc3RlcDUiLCJyZWZyZXNoQXR0cmlidXRlIiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsIm9sZFZhbHVlIiwiZ2V0U3RyaW5nTWFwS2V5Rm9yQXR0cmlidXRlIiwic3RyaW5nTWFwS2V5QWRkZWQiLCJzdHJpbmdNYXBWYWx1ZUNoYW5nZWQiLCJzdHJpbmdNYXBLZXlSZW1vdmVkIiwiY3VycmVudEF0dHJpYnV0ZU5hbWVzIiwicmVjb3JkZWRBdHRyaWJ1dGVOYW1lcyIsImF0dHJpYnV0ZSIsIlRva2VuTGlzdE9ic2VydmVyIiwiYXR0cmlidXRlT2JzZXJ2ZXIiLCJ0b2tlbnNCeUVsZW1lbnQiLCJ0b2tlbnNNYXRjaGVkIiwicmVhZFRva2Vuc0ZvckVsZW1lbnQiLCJfdGhpcyRyZWZyZXNoVG9rZW5zRm8iLCJyZWZyZXNoVG9rZW5zRm9yRWxlbWVudCIsIl90aGlzJHJlZnJlc2hUb2tlbnNGbzIiLCJ1bm1hdGNoZWRUb2tlbnMiLCJtYXRjaGVkVG9rZW5zIiwidG9rZW5zVW5tYXRjaGVkIiwidG9rZW5zIiwiX3RoaXM1IiwidG9rZW5NYXRjaGVkIiwiX3RoaXM2IiwidG9rZW5Vbm1hdGNoZWQiLCJwcmV2aW91c1Rva2VucyIsImN1cnJlbnRUb2tlbnMiLCJmaXJzdERpZmZlcmluZ0luZGV4IiwiemlwIiwiZmluZEluZGV4IiwiX3JlZjgiLCJfcmVmOSIsInByZXZpb3VzVG9rZW4iLCJjdXJyZW50VG9rZW4iLCJ0b2tlbnNBcmVFcXVhbCIsInRva2VuU3RyaW5nIiwicGFyc2VUb2tlblN0cmluZyIsIk1hdGgiLCJtYXgiLCJWYWx1ZUxpc3RPYnNlcnZlciIsInRva2VuTGlzdE9ic2VydmVyIiwicGFyc2VSZXN1bHRzQnlUb2tlbiIsIldlYWtNYXAiLCJ2YWx1ZXNCeVRva2VuQnlFbGVtZW50IiwiX3RoaXMkZmV0Y2hQYXJzZVJlc3VsIiwiZmV0Y2hQYXJzZVJlc3VsdEZvclRva2VuIiwiZmV0Y2hWYWx1ZXNCeVRva2VuRm9yRWxlbWVudCIsImVsZW1lbnRNYXRjaGVkVmFsdWUiLCJfdGhpcyRmZXRjaFBhcnNlUmVzdWwyIiwiZWxlbWVudFVubWF0Y2hlZFZhbHVlIiwicGFyc2VSZXN1bHQiLCJwYXJzZVRva2VuIiwidmFsdWVzQnlUb2tlbiIsInBhcnNlVmFsdWVGb3JUb2tlbiIsIkJpbmRpbmdPYnNlcnZlciIsImJpbmRpbmdzQnlBY3Rpb24iLCJ2YWx1ZUxpc3RPYnNlcnZlciIsImFjdGlvbkF0dHJpYnV0ZSIsImRpc2Nvbm5lY3RBbGxBY3Rpb25zIiwiY29ubmVjdEFjdGlvbiIsImRpc2Nvbm5lY3RBY3Rpb24iLCJfdGhpczciLCJjbGVhciIsIlZhbHVlT2JzZXJ2ZXIiLCJyZWNlaXZlciIsInN0cmluZ01hcE9ic2VydmVyIiwidmFsdWVEZXNjcmlwdG9yTWFwIiwiaW52b2tlQ2hhbmdlZENhbGxiYWNrc0ZvckRlZmF1bHRWYWx1ZXMiLCJpbnZva2VDaGFuZ2VkQ2FsbGJhY2siLCJ3cml0ZXIiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZURlc2NyaXB0b3JOYW1lTWFwIiwiX2l0ZXJhdG9yNyIsInZhbHVlRGVzY3JpcHRvcnMiLCJfc3RlcDciLCJfc3RlcDckdmFsdWUiLCJkYXRhIiwicmF3VmFsdWUiLCJyYXdPbGRWYWx1ZSIsImNoYW5nZWRNZXRob2ROYW1lIiwiY2hhbmdlZE1ldGhvZCIsInJlYWRlciIsIl90aGlzOCIsImRlc2NyaXB0b3JzIiwiaGFzTWV0aG9kTmFtZSIsIlRhcmdldE9ic2VydmVyIiwidGFyZ2V0c0J5TmFtZSIsImRpc2Nvbm5lY3RBbGxUYXJnZXRzIiwiX3JlZjEwIiwiY29ubmVjdFRhcmdldCIsIl9yZWYxMSIsImRpc2Nvbm5lY3RUYXJnZXQiLCJfdGhpczkiLCJfYSIsInRhcmdldENvbm5lY3RlZCIsIl90aGlzMTAiLCJ0YXJnZXREaXNjb25uZWN0ZWQiLCJfaXRlcmF0b3I4IiwiX3N0ZXA4IiwiX2l0ZXJhdG9yOSIsIl9zdGVwOSIsInJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzIiwicHJvcGVydHlOYW1lIiwiYW5jZXN0b3JzIiwiZ2V0QW5jZXN0b3JzRm9yQ29uc3RydWN0b3IiLCJnZXRPd25TdGF0aWNBcnJheVZhbHVlcyIsInJlYWRJbmhlcml0YWJsZVN0YXRpY09iamVjdFBhaXJzIiwicGFpcnMiLCJnZXRPd25TdGF0aWNPYmplY3RQYWlycyIsImRlZmluaXRpb24iLCJPdXRsZXRPYnNlcnZlciIsIm91dGxldHNCeU5hbWUiLCJvdXRsZXRFbGVtZW50c0J5TmFtZSIsInNlbGVjdG9yT2JzZXJ2ZXJNYXAiLCJhdHRyaWJ1dGVPYnNlcnZlck1hcCIsIl90aGlzMTEiLCJvdXRsZXREZWZpbml0aW9ucyIsIm91dGxldE5hbWUiLCJzZXR1cFNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQiLCJzZXR1cEF0dHJpYnV0ZU9ic2VydmVyRm9yT3V0bGV0IiwiZGVwZW5kZW50Q29udGV4dHMiLCJvYnNlcnZlciIsImRpc2Nvbm5lY3RBbGxPdXRsZXRzIiwic3RvcFNlbGVjdG9yT2JzZXJ2ZXJzIiwic3RvcEF0dHJpYnV0ZU9ic2VydmVycyIsIl9yZWYxMiIsIm91dGxldCIsImdldE91dGxldCIsImNvbm5lY3RPdXRsZXQiLCJfcmVmMTMiLCJnZXRPdXRsZXRGcm9tTWFwIiwiZGlzY29ubmVjdE91dGxldCIsIl9yZWYxNCIsImhhc091dGxldCIsImhhc091dGxldENvbnRyb2xsZXIiLCJjb250cm9sbGVyQXR0cmlidXRlIiwiX2VsZW1lbnQiLCJnZXRPdXRsZXROYW1lRnJvbU91dGxldEF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0IiwiX3RoaXMxMiIsIm91dGxldENvbm5lY3RlZCIsIl90aGlzMTMiLCJvdXRsZXREaXNjb25uZWN0ZWQiLCJfaXRlcmF0b3IxMCIsIl9zdGVwMTAiLCJfaXRlcmF0b3IxMSIsIl9zdGVwMTEiLCJfaXRlcmF0b3IxMiIsIl9zdGVwMTIiLCJzZWxlY3Rvck9ic2VydmVyIiwiYm9keSIsImF0dHJpYnV0ZU5hbWVGb3JPdXRsZXROYW1lIiwib3V0bGV0cyIsImdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZSIsIm91dGxldEF0dHJpYnV0ZUZvclNjb3BlIiwiX3RoaXMxNCIsImZpbmQiLCJkZXBlbmRlbmNpZXMiLCJyb3V0ZXIiLCJtb2R1bGVzIiwibW9kdWxlIiwiY29udHJvbGxlckNvbnN0cnVjdG9yIiwib3V0bGV0RGVwZW5kZW5jaWVzIiwiaWRlbnRpZmllcnMiLCJkZXBlbmRlbnRDb250cm9sbGVySWRlbnRpZmllcnMiLCJjb250ZXh0cyIsImdldENvbnRyb2xsZXJGb3JFbGVtZW50QW5kSWRlbnRpZmllciIsIl90aGlzMTUiLCJmdW5jdGlvbk5hbWUiLCJiaW5kaW5nT2JzZXJ2ZXIiLCJkaXNwYXRjaGVyIiwidmFsdWVPYnNlcnZlciIsInRhcmdldE9ic2VydmVyIiwib3V0bGV0T2JzZXJ2ZXIiLCJpbml0aWFsaXplIiwicGFyZW50RWxlbWVudCIsImludm9rZUNvbnRyb2xsZXJNZXRob2QiLCJfbGVuIiwiYXJncyIsIl9rZXkyIiwiYmxlc3MiLCJzaGFkb3ciLCJnZXRCbGVzc2VkUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJzaGFkb3dDb25zdHJ1Y3RvciIsImV4dGVuZCIsInNoYWRvd1Byb3BlcnRpZXMiLCJnZXRTaGFkb3dQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydGllcyIsImJsZXNzaW5ncyIsImJsZXNzZWRQcm9wZXJ0aWVzIiwiYmxlc3NpbmciLCJnZXRPd25LZXlzIiwiZ2V0U2hhZG93ZWREZXNjcmlwdG9yIiwic2hhZG93aW5nRGVzY3JpcHRvciIsInNoYWRvd2VkQnlWYWx1ZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJleHRlbmRXaXRoUmVmbGVjdCIsImV4dGVuZGVkIiwidGVzdFJlZmxlY3RFeHRlbnNpb24iLCJiIiwiX2NvbnN0cnVjdG9yIiwiYmxlc3NEZWZpbml0aW9uIiwiTW9kdWxlIiwiY29udGV4dHNCeVNjb3BlIiwiY29ubmVjdGVkQ29udGV4dHMiLCJjb25uZWN0Q29udGV4dEZvclNjb3BlIiwiZmV0Y2hDb250ZXh0Rm9yU2NvcGUiLCJkaXNjb25uZWN0Q29udGV4dEZvclNjb3BlIiwiQ2xhc3NNYXAiLCJnZXREYXRhS2V5IiwiZ2V0QWxsIiwiZ2V0QXR0cmlidXRlTmFtZSIsImdldEF0dHJpYnV0ZU5hbWVGb3JLZXkiLCJEYXRhTWFwIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiR3VpZGUiLCJsb2dnZXIiLCJ3YXJuZWRLZXlzQnlPYmplY3QiLCJ3YXJuIiwid2FybmVkS2V5cyIsImF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbiIsIlRhcmdldFNldCIsInRhcmdldE5hbWUiLCJfdGhpczE2IiwiX2xlbjIiLCJ0YXJnZXROYW1lcyIsIl9rZXkzIiwiZmluZFRhcmdldCIsImZpbmRMZWdhY3lUYXJnZXQiLCJmaW5kQWxsIiwiX3RoaXMxNyIsIl9sZW4zIiwiX2tleTQiLCJ0YXJnZXRzIiwiZmluZEFsbFRhcmdldHMiLCJmaW5kQWxsTGVnYWN5VGFyZ2V0cyIsImdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSIsImZpbmRFbGVtZW50IiwiZmluZEFsbEVsZW1lbnRzIiwidGFyZ2V0QXR0cmlidXRlRm9yU2NvcGUiLCJnZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUiLCJkZXByZWNhdGUiLCJfdGhpczE4IiwidGFyZ2V0RGVzY3JpcHRvciIsInRhcmdldEF0dHJpYnV0ZSIsInJldmlzZWRBdHRyaWJ1dGVOYW1lIiwiZ3VpZGUiLCJPdXRsZXRTZXQiLCJjb250cm9sbGVyRWxlbWVudCIsIl90aGlzMTkiLCJfbGVuNCIsIm91dGxldE5hbWVzIiwiX2tleTUiLCJmaW5kT3V0bGV0IiwiX3RoaXMyMCIsIl9sZW41IiwiX2tleTYiLCJmaW5kQWxsT3V0bGV0cyIsIl90aGlzMjEiLCJxdWVyeUVsZW1lbnRzIiwibWF0Y2hlc0VsZW1lbnQiLCJfdGhpczIyIiwiU2NvcGUiLCJfdGhpczIzIiwiY2xhc3NlcyIsImNsb3Nlc3QiLCJjb250cm9sbGVyU2VsZWN0b3IiLCJkb2N1bWVudFNjb3BlIiwiZG9jdW1lbnRFbGVtZW50IiwiaXNEb2N1bWVudFNjb3BlIiwiU2NvcGVPYnNlcnZlciIsInNjb3Blc0J5SWRlbnRpZmllckJ5RWxlbWVudCIsInNjb3BlUmVmZXJlbmNlQ291bnRzIiwicGFyc2VWYWx1ZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyIiwic2NvcGVzQnlJZGVudGlmaWVyIiwiZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50IiwiY3JlYXRlU2NvcGVGb3JFbGVtZW50QW5kSWRlbnRpZmllciIsInJlZmVyZW5jZUNvdW50Iiwic2NvcGVDb25uZWN0ZWQiLCJzY29wZURpc2Nvbm5lY3RlZCIsIlJvdXRlciIsInNjb3BlT2JzZXJ2ZXIiLCJtb2R1bGVzQnlJZGVudGlmaWVyIiwibG9hZERlZmluaXRpb24iLCJ1bmxvYWRJZGVudGlmaWVyIiwiY29ubmVjdE1vZHVsZSIsImFmdGVyTG9hZCIsImRpc2Nvbm5lY3RNb2R1bGUiLCJnZXRDb250ZXh0Rm9yRWxlbWVudEFuZElkZW50aWZpZXIiLCJwcm9wb3NlVG9Db25uZWN0U2NvcGVGb3JFbGVtZW50QW5kSWRlbnRpZmllciIsImNvbnNvbGUiLCJzY29wZXMiLCJkZWZhdWx0U2NoZW1hIiwiZW50ZXIiLCJ0YWIiLCJlc2MiLCJzcGFjZSIsInVwIiwiZG93biIsImhvbWUiLCJlbmQiLCJwYWdlX3VwIiwicGFnZV9kb3duIiwib2JqZWN0RnJvbUVudHJpZXMiLCJhcnJheSIsIm1lbW8iLCJfcmVmMTUiLCJfcmVmMTYiLCJrIiwiQXBwbGljYXRpb24iLCJfdGhpczI0IiwiZGVidWciLCJsb2dGb3JtYXR0ZWRNZXNzYWdlIiwiX3N0YXJ0IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJkb21SZWFkeSIsInJlZ2lzdGVyIiwibG9hZCIsInJlZ2lzdGVyQWN0aW9uT3B0aW9uIiwiaGVhZCIsIl90aGlzMjUiLCJfbGVuNiIsInJlc3QiLCJfa2V5NyIsImRlZmluaXRpb25zIiwic2hvdWxkTG9hZCIsInVubG9hZCIsIl90aGlzMjYiLCJfbGVuNyIsIl9rZXk4Iiwib25lcnJvciIsImdyb3VwQ29sbGFwc2VkIiwibG9nIiwiZ3JvdXBFbmQiLCJyZWFkeVN0YXRlIiwiQ2xhc3NQcm9wZXJ0aWVzQmxlc3NpbmciLCJjbGFzc0RlZmluaXRpb24iLCJwcm9wZXJ0aWVzRm9yQ2xhc3NEZWZpbml0aW9uIiwiT3V0bGV0UHJvcGVydGllc0JsZXNzaW5nIiwib3V0bGV0RGVmaW5pdGlvbiIsInByb3BlcnRpZXNGb3JPdXRsZXREZWZpbml0aW9uIiwiZ2V0T3V0bGV0Q29udHJvbGxlciIsImdldENvbnRyb2xsZXJBbmRFbnN1cmVDb25uZWN0ZWRTY29wZSIsIm91dGxldENvbnRyb2xsZXIiLCJjYW1lbGl6ZWROYW1lIiwib3V0bGV0RWxlbWVudCIsIl90aGlzMjciLCJUYXJnZXRQcm9wZXJ0aWVzQmxlc3NpbmciLCJ0YXJnZXREZWZpbml0aW9uIiwicHJvcGVydGllc0ZvclRhcmdldERlZmluaXRpb24iLCJWYWx1ZVByb3BlcnRpZXNCbGVzc2luZyIsInZhbHVlRGVmaW5pdGlvblBhaXJzIiwicHJvcGVydHlEZXNjcmlwdG9yTWFwIiwiX3RoaXMyOCIsInJlc3VsdCIsInZhbHVlRGVmaW5pdGlvblBhaXIiLCJ2YWx1ZURlc2NyaXB0b3IiLCJwYXJzZVZhbHVlRGVmaW5pdGlvblBhaXIiLCJwcm9wZXJ0aWVzRm9yVmFsdWVEZWZpbml0aW9uUGFpciIsInJlYWQiLCJ3cml0ZSIsImhhc0N1c3RvbURlZmF1bHRWYWx1ZSIsIl9yZWYyMSIsIl9yZWYyMiIsInR5cGVEZWZpbml0aW9uIiwidmFsdWVEZXNjcmlwdG9yRm9yVG9rZW5BbmRUeXBlRGVmaW5pdGlvbiIsInBhcnNlVmFsdWVUeXBlQ29uc3RhbnQiLCJjb25zdGFudCIsInBhcnNlVmFsdWVUeXBlRGVmYXVsdCIsInBhcnNlVmFsdWVUeXBlT2JqZWN0IiwicGF5bG9hZCIsInR5cGVPYmplY3QiLCJoYXNUeXBlIiwiaGFzRGVmYXVsdCIsImZ1bGxPYmplY3QiLCJvbmx5VHlwZSIsIm9ubHlEZWZhdWx0IiwidHlwZUZyb21PYmplY3QiLCJ0eXBlRnJvbURlZmF1bHRWYWx1ZSIsInByb3BlcnR5UGF0aCIsInBhcnNlVmFsdWVUeXBlRGVmaW5pdGlvbiIsInR5cGVGcm9tQ29uc3RhbnQiLCJkZWZhdWx0VmFsdWVGb3JEZWZpbml0aW9uIiwiZGVmYXVsdFZhbHVlc0J5VHlwZSIsImNvbnN0YW50RnJvbVR5cGUiLCJyZWFkZXJzIiwid3JpdGVycyIsIm51bWJlciIsInN0cmluZyIsImJvb2xlYW4iLCJ3cml0ZVN0cmluZyIsIndyaXRlSlNPTiIsInN0cmluZ2lmeSIsIkNvbnRyb2xsZXIiLCJkaXNwYXRjaCIsIl9yZWYyMyIsIl9yZWYyMyR0YXJnZXQiLCJfcmVmMjMkZGV0YWlsIiwiX3JlZjIzJHByZWZpeCIsInByZWZpeCIsIl9yZWYyMyRidWJibGVzIiwiYnViYmxlcyIsIl9yZWYyMyRjYW5jZWxhYmxlIiwiY2FuY2VsYWJsZSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIl9pZGVudGlmaWVyIiwiX2FwcGxpY2F0aW9uIiwic3ltZm9ueUNvbnRyb2xsZXJzIiwiZGVmaW5pdGlvbnNGcm9tQ29udGV4dCIsImRlZmluaXRpb25Gb3JNb2R1bGVXaXRoQ29udGV4dEFuZEtleSIsImlkZW50aWZpZXJGb3JDb250ZXh0S2V5IiwiZGVmaW5pdGlvbkZvck1vZHVsZUFuZElkZW50aWZpZXIiLCJsb2dpY2FsTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbnRyb2xsZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==