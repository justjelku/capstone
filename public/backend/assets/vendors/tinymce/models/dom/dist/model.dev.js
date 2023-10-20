"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.ModelManager');

  var hasProto = function hasProto(v, constructor, predicate) {
    var _a;

    if (predicate(v, constructor.prototype)) {
      return true;
    } else {
      return ((_a = v.constructor) === null || _a === void 0 ? void 0 : _a.name) === constructor.name;
    }
  };

  var typeOf = function typeOf(x) {
    var t = _typeof(x);

    if (x === null) {
      return 'null';
    } else if (t === 'object' && Array.isArray(x)) {
      return 'array';
    } else if (t === 'object' && hasProto(x, String, function (o, proto) {
      return proto.isPrototypeOf(o);
    })) {
      return 'string';
    } else {
      return t;
    }
  };

  var isType$1 = function isType$1(type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };

  var isSimpleType = function isSimpleType(type) {
    return function (value) {
      return _typeof(value) === type;
    };
  };

  var eq$2 = function eq$2(t) {
    return function (a) {
      return t === a;
    };
  };

  var isString = isType$1('string');
  var isObject = isType$1('object');
  var isArray = isType$1('array');
  var isNull = eq$2(null);
  var isBoolean = isSimpleType('boolean');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isFunction = isSimpleType('function');
  var isNumber = isSimpleType('number');

  var noop = function noop() {};

  var compose = function compose(fa, fb) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fa(fb.apply(null, args));
    };
  };

  var compose1 = function compose1(fbc, fab) {
    return function (a) {
      return fbc(fab(a));
    };
  };

  var constant = function constant(value) {
    return function () {
      return value;
    };
  };

  var identity = function identity(x) {
    return x;
  };

  var tripleEquals = function tripleEquals(a, b) {
    return a === b;
  };

  function curry(fn) {
    for (var _len2 = arguments.length, initialArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      initialArgs[_key2 - 1] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, restArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        restArgs[_key3] = arguments[_key3];
      }

      var all = initialArgs.concat(restArgs);
      return fn.apply(null, all);
    };
  }

  var not = function not(f) {
    return function (t) {
      return !f(t);
    };
  };

  var die = function die(msg) {
    return function () {
      throw new Error(msg);
    };
  };

  var apply = function apply(f) {
    return f();
  };

  var never = constant(false);
  var always = constant(true);

  var Optional =
  /*#__PURE__*/
  function () {
    function Optional(tag, value) {
      _classCallCheck(this, Optional);

      this.tag = tag;
      this.value = value;
    }

    _createClass(Optional, [{
      key: "fold",
      value: function fold(onNone, onSome) {
        if (this.tag) {
          return onSome(this.value);
        } else {
          return onNone();
        }
      }
    }, {
      key: "isSome",
      value: function isSome() {
        return this.tag;
      }
    }, {
      key: "isNone",
      value: function isNone() {
        return !this.tag;
      }
    }, {
      key: "map",
      value: function map(mapper) {
        if (this.tag) {
          return Optional.some(mapper(this.value));
        } else {
          return Optional.none();
        }
      }
    }, {
      key: "bind",
      value: function bind(binder) {
        if (this.tag) {
          return binder(this.value);
        } else {
          return Optional.none();
        }
      }
    }, {
      key: "exists",
      value: function exists(predicate) {
        return this.tag && predicate(this.value);
      }
    }, {
      key: "forall",
      value: function forall(predicate) {
        return !this.tag || predicate(this.value);
      }
    }, {
      key: "filter",
      value: function filter(predicate) {
        if (!this.tag || predicate(this.value)) {
          return this;
        } else {
          return Optional.none();
        }
      }
    }, {
      key: "getOr",
      value: function getOr(replacement) {
        return this.tag ? this.value : replacement;
      }
    }, {
      key: "or",
      value: function or(replacement) {
        return this.tag ? this : replacement;
      }
    }, {
      key: "getOrThunk",
      value: function getOrThunk(thunk) {
        return this.tag ? this.value : thunk();
      }
    }, {
      key: "orThunk",
      value: function orThunk(thunk) {
        return this.tag ? this : thunk();
      }
    }, {
      key: "getOrDie",
      value: function getOrDie(message) {
        if (!this.tag) {
          throw new Error(message !== null && message !== void 0 ? message : 'Called getOrDie on None');
        } else {
          return this.value;
        }
      }
    }, {
      key: "getOrNull",
      value: function getOrNull() {
        return this.tag ? this.value : null;
      }
    }, {
      key: "getOrUndefined",
      value: function getOrUndefined() {
        return this.value;
      }
    }, {
      key: "each",
      value: function each(worker) {
        if (this.tag) {
          worker(this.value);
        }
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.tag ? [this.value] : [];
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.tag ? "some(".concat(this.value, ")") : 'none()';
      }
    }], [{
      key: "some",
      value: function some(value) {
        return new Optional(true, value);
      }
    }, {
      key: "none",
      value: function none() {
        return Optional.singletonNone;
      }
    }, {
      key: "from",
      value: function from(value) {
        return isNonNullable(value) ? Optional.some(value) : Optional.none();
      }
    }]);

    return Optional;
  }();

  Optional.singletonNone = new Optional(false);
  var nativeSlice = Array.prototype.slice;
  var nativeIndexOf = Array.prototype.indexOf;
  var nativePush = Array.prototype.push;

  var rawIndexOf = function rawIndexOf(ts, t) {
    return nativeIndexOf.call(ts, t);
  };

  var contains$2 = function contains$2(xs, x) {
    return rawIndexOf(xs, x) > -1;
  };

  var exists = function exists(xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        return true;
      }
    }

    return false;
  };

  var range$1 = function range$1(num, f) {
    var r = [];

    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }

    return r;
  };

  var map$1 = function map$1(xs, f) {
    var len = xs.length;
    var r = new Array(len);

    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i);
    }

    return r;
  };

  var each$2 = function each$2(xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i);
    }
  };

  var eachr = function eachr(xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i);
    }
  };

  var partition = function partition(xs, pred) {
    var pass = [];
    var fail = [];

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i) ? pass : fail;
      arr.push(x);
    }

    return {
      pass: pass,
      fail: fail
    };
  };

  var filter$2 = function filter$2(xs, pred) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        r.push(x);
      }
    }

    return r;
  };

  var foldr = function foldr(xs, f, acc) {
    eachr(xs, function (x, i) {
      acc = f(acc, x, i);
    });
    return acc;
  };

  var foldl = function foldl(xs, f, acc) {
    each$2(xs, function (x, i) {
      acc = f(acc, x, i);
    });
    return acc;
  };

  var findUntil = function findUntil(xs, pred, until) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        return Optional.some(x);
      } else if (until(x, i)) {
        break;
      }
    }

    return Optional.none();
  };

  var find$1 = function find$1(xs, pred) {
    return findUntil(xs, pred, never);
  };

  var findIndex = function findIndex(xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        return Optional.some(i);
      }
    }

    return Optional.none();
  };

  var flatten = function flatten(xs) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!isArray(xs[i])) {
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      }

      nativePush.apply(r, xs[i]);
    }

    return r;
  };

  var bind$2 = function bind$2(xs, f) {
    return flatten(map$1(xs, f));
  };

  var forall = function forall(xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];

      if (pred(x, i) !== true) {
        return false;
      }
    }

    return true;
  };

  var reverse = function reverse(xs) {
    var r = nativeSlice.call(xs, 0);
    r.reverse();
    return r;
  };

  var mapToObject = function mapToObject(xs, f) {
    var r = {};

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }

    return r;
  };

  var sort$1 = function sort$1(xs, comparator) {
    var copy = nativeSlice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };

  var get$d = function get$d(xs, i) {
    return i >= 0 && i < xs.length ? Optional.some(xs[i]) : Optional.none();
  };

  var head = function head(xs) {
    return get$d(xs, 0);
  };

  var last$2 = function last$2(xs) {
    return get$d(xs, xs.length - 1);
  };

  var findMap = function findMap(arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var _r = f(arr[i], i);

      if (_r.isSome()) {
        return _r;
      }
    }

    return Optional.none();
  };

  var keys = Object.keys;
  var hasOwnProperty = Object.hasOwnProperty;

  var each$1 = function each$1(obj, f) {
    var props = keys(obj);

    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i);
    }
  };

  var map = function map(obj, f) {
    return tupleMap(obj, function (x, i) {
      return {
        k: i,
        v: f(x, i)
      };
    });
  };

  var tupleMap = function tupleMap(obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i);
      r[tuple.k] = tuple.v;
    });
    return r;
  };

  var objAcc = function objAcc(r) {
    return function (x, i) {
      r[i] = x;
    };
  };

  var internalFilter = function internalFilter(obj, pred, onTrue, onFalse) {
    var r = {};
    each$1(obj, function (x, i) {
      (pred(x, i) ? onTrue : onFalse)(x, i);
    });
    return r;
  };

  var filter$1 = function filter$1(obj, pred) {
    var t = {};
    internalFilter(obj, pred, objAcc(t), noop);
    return t;
  };

  var mapToArray = function mapToArray(obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };

  var values = function values(obj) {
    return mapToArray(obj, identity);
  };

  var get$c = function get$c(obj, key) {
    return has$1(obj, key) ? Optional.from(obj[key]) : Optional.none();
  };

  var has$1 = function has$1(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var hasNonNullableKey = function hasNonNullableKey(obj, key) {
    return has$1(obj, key) && obj[key] !== undefined && obj[key] !== null;
  };

  var isEmpty = function isEmpty(r) {
    for (var x in r) {
      if (hasOwnProperty.call(r, x)) {
        return false;
      }
    }

    return true;
  };

  typeof window !== 'undefined' ? window : Function('return this;')();
  var COMMENT = 8;
  var DOCUMENT = 9;
  var DOCUMENT_FRAGMENT = 11;
  var ELEMENT = 1;
  var TEXT = 3;

  var name = function name(element) {
    var r = element.dom.nodeName;
    return r.toLowerCase();
  };

  var type = function type(element) {
    return element.dom.nodeType;
  };

  var isType = function isType(t) {
    return function (element) {
      return type(element) === t;
    };
  };

  var isComment = function isComment(element) {
    return type(element) === COMMENT || name(element) === '#comment';
  };

  var isElement = isType(ELEMENT);
  var isText = isType(TEXT);
  var isDocument = isType(DOCUMENT);
  var isDocumentFragment = isType(DOCUMENT_FRAGMENT);

  var isTag = function isTag(tag) {
    return function (e) {
      return isElement(e) && name(e) === tag;
    };
  };

  var rawSet = function rawSet(dom, key, value) {
    if (isString(value) || isBoolean(value) || isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attribute.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };

  var set$2 = function set$2(element, key, value) {
    rawSet(element.dom, key, value);
  };

  var setAll$1 = function setAll$1(element, attrs) {
    var dom = element.dom;
    each$1(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };

  var setOptions = function setOptions(element, attrs) {
    each$1(attrs, function (v, k) {
      v.fold(function () {
        remove$7(element, k);
      }, function (value) {
        rawSet(element.dom, k, value);
      });
    });
  };

  var get$b = function get$b(element, key) {
    var v = element.dom.getAttribute(key);
    return v === null ? undefined : v;
  };

  var getOpt = function getOpt(element, key) {
    return Optional.from(get$b(element, key));
  };

  var remove$7 = function remove$7(element, key) {
    element.dom.removeAttribute(key);
  };

  var clone$2 = function clone$2(element) {
    return foldl(element.dom.attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };

  var fromHtml$1 = function fromHtml$1(html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;

    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      var message = 'HTML does not have a single root node';
      console.error(message, html);
      throw new Error(message);
    }

    return fromDom$1(div.childNodes[0]);
  };

  var fromTag = function fromTag(tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom$1(node);
  };

  var fromText = function fromText(text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom$1(node);
  };

  var fromDom$1 = function fromDom$1(node) {
    if (node === null || node === undefined) {
      throw new Error('Node cannot be null or undefined');
    }

    return {
      dom: node
    };
  };

  var fromPoint$1 = function fromPoint$1(docElm, x, y) {
    return Optional.from(docElm.dom.elementFromPoint(x, y)).map(fromDom$1);
  };

  var SugarElement = {
    fromHtml: fromHtml$1,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom$1,
    fromPoint: fromPoint$1
  };

  var is$2 = function is$2(element, selector) {
    var dom = element.dom;

    if (dom.nodeType !== ELEMENT) {
      return false;
    } else {
      var elem = dom;

      if (elem.matches !== undefined) {
        return elem.matches(selector);
      } else if (elem.msMatchesSelector !== undefined) {
        return elem.msMatchesSelector(selector);
      } else if (elem.webkitMatchesSelector !== undefined) {
        return elem.webkitMatchesSelector(selector);
      } else if (elem.mozMatchesSelector !== undefined) {
        return elem.mozMatchesSelector(selector);
      } else {
        throw new Error('Browser lacks native selectors');
      }
    }
  };

  var bypassSelector = function bypassSelector(dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT && dom.nodeType !== DOCUMENT_FRAGMENT || dom.childElementCount === 0;
  };

  var all$1 = function all$1(selector, scope) {
    var base = scope === undefined ? document : scope.dom;
    return bypassSelector(base) ? [] : map$1(base.querySelectorAll(selector), SugarElement.fromDom);
  };

  var one = function one(selector, scope) {
    var base = scope === undefined ? document : scope.dom;
    return bypassSelector(base) ? Optional.none() : Optional.from(base.querySelector(selector)).map(SugarElement.fromDom);
  };

  var eq$1 = function eq$1(e1, e2) {
    return e1.dom === e2.dom;
  };

  var contains$1 = function contains$1(e1, e2) {
    var d1 = e1.dom;
    var d2 = e2.dom;
    return d1 === d2 ? false : d1.contains(d2);
  };

  var is$1 = is$2;

  var owner = function owner(element) {
    return SugarElement.fromDom(element.dom.ownerDocument);
  };

  var documentOrOwner = function documentOrOwner(dos) {
    return isDocument(dos) ? dos : owner(dos);
  };

  var documentElement = function documentElement(element) {
    return SugarElement.fromDom(documentOrOwner(element).dom.documentElement);
  };

  var defaultView = function defaultView(element) {
    return SugarElement.fromDom(documentOrOwner(element).dom.defaultView);
  };

  var parent = function parent(element) {
    return Optional.from(element.dom.parentNode).map(SugarElement.fromDom);
  };

  var parentElement = function parentElement(element) {
    return Optional.from(element.dom.parentElement).map(SugarElement.fromDom);
  };

  var parents = function parents(element, isRoot) {
    var stop = isFunction(isRoot) ? isRoot : never;
    var dom = element.dom;
    var ret = [];

    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var p = SugarElement.fromDom(rawParent);
      ret.push(p);

      if (stop(p) === true) {
        break;
      } else {
        dom = rawParent;
      }
    }

    return ret;
  };

  var prevSibling = function prevSibling(element) {
    return Optional.from(element.dom.previousSibling).map(SugarElement.fromDom);
  };

  var nextSibling = function nextSibling(element) {
    return Optional.from(element.dom.nextSibling).map(SugarElement.fromDom);
  };

  var children$2 = function children$2(element) {
    return map$1(element.dom.childNodes, SugarElement.fromDom);
  };

  var child$2 = function child$2(element, index) {
    var cs = element.dom.childNodes;
    return Optional.from(cs[index]).map(SugarElement.fromDom);
  };

  var firstChild = function firstChild(element) {
    return child$2(element, 0);
  };

  var before$3 = function before$3(marker, element) {
    var parent$1 = parent(marker);
    parent$1.each(function (v) {
      v.dom.insertBefore(element.dom, marker.dom);
    });
  };

  var after$5 = function after$5(marker, element) {
    var sibling = nextSibling(marker);
    sibling.fold(function () {
      var parent$1 = parent(marker);
      parent$1.each(function (v) {
        append$1(v, element);
      });
    }, function (v) {
      before$3(v, element);
    });
  };

  var prepend = function prepend(parent, element) {
    var firstChild$1 = firstChild(parent);
    firstChild$1.fold(function () {
      append$1(parent, element);
    }, function (v) {
      parent.dom.insertBefore(element.dom, v.dom);
    });
  };

  var append$1 = function append$1(parent, element) {
    parent.dom.appendChild(element.dom);
  };

  var appendAt = function appendAt(parent, element, index) {
    child$2(parent, index).fold(function () {
      append$1(parent, element);
    }, function (v) {
      before$3(v, element);
    });
  };

  var wrap = function wrap(element, wrapper) {
    before$3(element, wrapper);
    append$1(wrapper, element);
  };

  var after$4 = function after$4(marker, elements) {
    each$2(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      after$5(e, x);
    });
  };

  var append = function append(parent, elements) {
    each$2(elements, function (x) {
      append$1(parent, x);
    });
  };

  var empty = function empty(element) {
    element.dom.textContent = '';
    each$2(children$2(element), function (rogue) {
      remove$6(rogue);
    });
  };

  var remove$6 = function remove$6(element) {
    var dom = element.dom;

    if (dom.parentNode !== null) {
      dom.parentNode.removeChild(dom);
    }
  };

  var unwrap = function unwrap(wrapper) {
    var children = children$2(wrapper);

    if (children.length > 0) {
      after$4(wrapper, children);
    }

    remove$6(wrapper);
  };

  var clone$1 = function clone$1(original, isDeep) {
    return SugarElement.fromDom(original.dom.cloneNode(isDeep));
  };

  var shallow = function shallow(original) {
    return clone$1(original, false);
  };

  var deep = function deep(original) {
    return clone$1(original, true);
  };

  var shallowAs = function shallowAs(original, tag) {
    var nu = SugarElement.fromTag(tag);
    var attributes = clone$2(original);
    setAll$1(nu, attributes);
    return nu;
  };

  var copy$2 = function copy$2(original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = children$2(deep(original));
    append(nu, cloneChildren);
    return nu;
  };

  var mutate$1 = function mutate$1(original, tag) {
    var nu = shallowAs(original, tag);
    after$5(original, nu);
    var children = children$2(original);
    append(nu, children);
    remove$6(original);
    return nu;
  };

  var validSectionList = ['tfoot', 'thead', 'tbody', 'colgroup'];

  var isValidSection = function isValidSection(parentName) {
    return contains$2(validSectionList, parentName);
  };

  var grid = function grid(rows, columns) {
    return {
      rows: rows,
      columns: columns
    };
  };

  var address = function address(row, column) {
    return {
      row: row,
      column: column
    };
  };

  var detail = function detail(element, rowspan, colspan) {
    return {
      element: element,
      rowspan: rowspan,
      colspan: colspan
    };
  };

  var detailnew = function detailnew(element, rowspan, colspan, isNew) {
    return {
      element: element,
      rowspan: rowspan,
      colspan: colspan,
      isNew: isNew
    };
  };

  var extended = function extended(element, rowspan, colspan, row, column, isLocked) {
    return {
      element: element,
      rowspan: rowspan,
      colspan: colspan,
      row: row,
      column: column,
      isLocked: isLocked
    };
  };

  var rowdetail = function rowdetail(element, cells, section) {
    return {
      element: element,
      cells: cells,
      section: section
    };
  };

  var rowdetailnew = function rowdetailnew(element, cells, section, isNew) {
    return {
      element: element,
      cells: cells,
      section: section,
      isNew: isNew
    };
  };

  var elementnew = function elementnew(element, isNew, isLocked) {
    return {
      element: element,
      isNew: isNew,
      isLocked: isLocked
    };
  };

  var rowcells = function rowcells(element, cells, section, isNew) {
    return {
      element: element,
      cells: cells,
      section: section,
      isNew: isNew
    };
  };

  var bounds = function bounds(startRow, startCol, finishRow, finishCol) {
    return {
      startRow: startRow,
      startCol: startCol,
      finishRow: finishRow,
      finishCol: finishCol
    };
  };

  var columnext = function columnext(element, colspan, column) {
    return {
      element: element,
      colspan: colspan,
      column: column
    };
  };

  var colgroup = function colgroup(element, columns) {
    return {
      element: element,
      columns: columns
    };
  };

  var isShadowRoot = function isShadowRoot(dos) {
    return isDocumentFragment(dos) && isNonNullable(dos.dom.host);
  };

  var supported = isFunction(Element.prototype.attachShadow) && isFunction(Node.prototype.getRootNode);
  var isSupported$1 = constant(supported);
  var getRootNode = supported ? function (e) {
    return SugarElement.fromDom(e.dom.getRootNode());
  } : documentOrOwner;

  var getShadowRoot = function getShadowRoot(e) {
    var r = getRootNode(e);
    return isShadowRoot(r) ? Optional.some(r) : Optional.none();
  };

  var getShadowHost = function getShadowHost(e) {
    return SugarElement.fromDom(e.dom.host);
  };

  var getOriginalEventTarget = function getOriginalEventTarget(event) {
    if (isSupported$1() && isNonNullable(event.target)) {
      var el = SugarElement.fromDom(event.target);

      if (isElement(el) && isOpenShadowHost(el)) {
        if (event.composed && event.composedPath) {
          var composedPath = event.composedPath();

          if (composedPath) {
            return head(composedPath);
          }
        }
      }
    }

    return Optional.from(event.target);
  };

  var isOpenShadowHost = function isOpenShadowHost(element) {
    return isNonNullable(element.dom.shadowRoot);
  };

  var inBody = function inBody(element) {
    var dom = isText(element) ? element.dom.parentNode : element.dom;

    if (dom === undefined || dom === null || dom.ownerDocument === null) {
      return false;
    }

    var doc = dom.ownerDocument;
    return getShadowRoot(SugarElement.fromDom(dom)).fold(function () {
      return doc.body.contains(dom);
    }, compose1(inBody, getShadowHost));
  };

  var body$1 = function body$1() {
    return getBody$1(SugarElement.fromDom(document));
  };

  var getBody$1 = function getBody$1(doc) {
    var b = doc.dom.body;

    if (b === null || b === undefined) {
      throw new Error('Body is not available yet');
    }

    return SugarElement.fromDom(b);
  };

  var ancestors$4 = function ancestors$4(scope, predicate, isRoot) {
    return filter$2(parents(scope, isRoot), predicate);
  };

  var children$1 = function children$1(scope, predicate) {
    return filter$2(children$2(scope), predicate);
  };

  var descendants$1 = function descendants$1(scope, predicate) {
    var result = [];
    each$2(children$2(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }

      result = result.concat(descendants$1(x, predicate));
    });
    return result;
  };

  var ancestors$3 = function ancestors$3(scope, selector, isRoot) {
    return ancestors$4(scope, function (e) {
      return is$2(e, selector);
    }, isRoot);
  };

  var children = function children(scope, selector) {
    return children$1(scope, function (e) {
      return is$2(e, selector);
    });
  };

  var descendants = function descendants(scope, selector) {
    return all$1(selector, scope);
  };

  var ClosestOrAncestor = function ClosestOrAncestor(is, ancestor, scope, a, isRoot) {
    if (is(scope, a)) {
      return Optional.some(scope);
    } else if (isFunction(isRoot) && isRoot(scope)) {
      return Optional.none();
    } else {
      return ancestor(scope, a, isRoot);
    }
  };

  var ancestor$2 = function ancestor$2(scope, predicate, isRoot) {
    var element = scope.dom;
    var stop = isFunction(isRoot) ? isRoot : never;

    while (element.parentNode) {
      element = element.parentNode;
      var el = SugarElement.fromDom(element);

      if (predicate(el)) {
        return Optional.some(el);
      } else if (stop(el)) {
        break;
      }
    }

    return Optional.none();
  };

  var closest$2 = function closest$2(scope, predicate, isRoot) {
    var is = function is(s, test) {
      return test(s);
    };

    return ClosestOrAncestor(is, ancestor$2, scope, predicate, isRoot);
  };

  var child$1 = function child$1(scope, predicate) {
    var pred = function pred(node) {
      return predicate(SugarElement.fromDom(node));
    };

    var result = find$1(scope.dom.childNodes, pred);
    return result.map(SugarElement.fromDom);
  };

  var descendant$1 = function descendant$1(scope, predicate) {
    var descend = function descend(node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var _child = SugarElement.fromDom(node.childNodes[i]);

        if (predicate(_child)) {
          return Optional.some(_child);
        }

        var res = descend(node.childNodes[i]);

        if (res.isSome()) {
          return res;
        }
      }

      return Optional.none();
    };

    return descend(scope.dom);
  };

  var ancestor$1 = function ancestor$1(scope, selector, isRoot) {
    return ancestor$2(scope, function (e) {
      return is$2(e, selector);
    }, isRoot);
  };

  var child = function child(scope, selector) {
    return child$1(scope, function (e) {
      return is$2(e, selector);
    });
  };

  var descendant = function descendant(scope, selector) {
    return one(selector, scope);
  };

  var closest$1 = function closest$1(scope, selector, isRoot) {
    var is = function is(element, selector) {
      return is$2(element, selector);
    };

    return ClosestOrAncestor(is, ancestor$1, scope, selector, isRoot);
  };

  var is = function is(lhs, rhs) {
    var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : tripleEquals;
    return lhs.exists(function (left) {
      return comparator(left, rhs);
    });
  };

  var cat = function cat(arr) {
    var r = [];

    var push = function push(x) {
      r.push(x);
    };

    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }

    return r;
  };

  var bindFrom = function bindFrom(a, f) {
    return a !== undefined && a !== null ? f(a) : Optional.none();
  };

  var someIf = function someIf(b, a) {
    return b ? Optional.some(a) : Optional.none();
  };

  var checkRange = function checkRange(str, substr, start) {
    return substr === '' || str.length >= substr.length && str.substr(start, start + substr.length) === substr;
  };

  var contains = function contains(str, substr) {
    return str.indexOf(substr) !== -1;
  };

  var startsWith = function startsWith(str, prefix) {
    return checkRange(str, prefix, 0);
  };

  var endsWith = function endsWith(str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };

  var blank = function blank(r) {
    return function (s) {
      return s.replace(r, '');
    };
  };

  var trim = blank(/^\s+|\s+$/g);

  var isNotEmpty = function isNotEmpty(s) {
    return s.length > 0;
  };

  var toFloat = function toFloat(value) {
    var num = parseFloat(value);
    return isNaN(num) ? Optional.none() : Optional.some(num);
  };

  var isSupported = function isSupported(dom) {
    return dom.style !== undefined && isFunction(dom.style.getPropertyValue);
  };

  var internalSet = function internalSet(dom, property, value) {
    if (!isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }

    if (isSupported(dom)) {
      dom.style.setProperty(property, value);
    }
  };

  var internalRemove = function internalRemove(dom, property) {
    if (isSupported(dom)) {
      dom.style.removeProperty(property);
    }
  };

  var set$1 = function set$1(element, property, value) {
    var dom = element.dom;
    internalSet(dom, property, value);
  };

  var setAll = function setAll(element, css) {
    var dom = element.dom;
    each$1(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };

  var get$a = function get$a(element, property) {
    var dom = element.dom;
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    return r === '' && !inBody(element) ? getUnsafeProperty(dom, property) : r;
  };

  var getUnsafeProperty = function getUnsafeProperty(dom, property) {
    return isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };

  var getRaw$2 = function getRaw$2(element, property) {
    var dom = element.dom;
    var raw = getUnsafeProperty(dom, property);
    return Optional.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };

  var remove$5 = function remove$5(element, property) {
    var dom = element.dom;
    internalRemove(dom, property);

    if (is(getOpt(element, 'style').map(trim), '')) {
      remove$7(element, 'style');
    }
  };

  var copy$1 = function copy$1(source, target) {
    var sourceDom = source.dom;
    var targetDom = target.dom;

    if (isSupported(sourceDom) && isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };

  var getAttrValue = function getAttrValue(cell, name) {
    var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return getOpt(cell, name).map(function (value) {
      return parseInt(value, 10);
    }).getOr(fallback);
  };

  var getSpan = function getSpan(cell, type) {
    return getAttrValue(cell, type, 1);
  };

  var hasColspan = function hasColspan(cellOrCol) {
    if (isTag('col')(cellOrCol)) {
      return getAttrValue(cellOrCol, 'span', 1) > 1;
    } else {
      return getSpan(cellOrCol, 'colspan') > 1;
    }
  };

  var hasRowspan = function hasRowspan(cell) {
    return getSpan(cell, 'rowspan') > 1;
  };

  var getCssValue = function getCssValue(element, property) {
    return parseInt(get$a(element, property), 10);
  };

  var minWidth = constant(10);
  var minHeight = constant(10);

  var firstLayer = function firstLayer(scope, selector) {
    return filterFirstLayer(scope, selector, always);
  };

  var filterFirstLayer = function filterFirstLayer(scope, selector, predicate) {
    return bind$2(children$2(scope), function (x) {
      if (is$2(x, selector)) {
        return predicate(x) ? [x] : [];
      } else {
        return filterFirstLayer(x, selector, predicate);
      }
    });
  };

  var lookup = function lookup(tags, element) {
    var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : never;

    if (isRoot(element)) {
      return Optional.none();
    }

    if (contains$2(tags, name(element))) {
      return Optional.some(element);
    }

    var isRootOrUpperTable = function isRootOrUpperTable(elm) {
      return is$2(elm, 'table') || isRoot(elm);
    };

    return ancestor$1(element, tags.join(','), isRootOrUpperTable);
  };

  var cell = function cell(element, isRoot) {
    return lookup(['td', 'th'], element, isRoot);
  };

  var cells$1 = function cells$1(ancestor) {
    return firstLayer(ancestor, 'th,td');
  };

  var columns$1 = function columns$1(ancestor) {
    if (is$2(ancestor, 'colgroup')) {
      return children(ancestor, 'col');
    } else {
      return bind$2(columnGroups(ancestor), function (columnGroup) {
        return children(columnGroup, 'col');
      });
    }
  };

  var table = function table(element, isRoot) {
    return closest$1(element, 'table', isRoot);
  };

  var rows$1 = function rows$1(ancestor) {
    return firstLayer(ancestor, 'tr');
  };

  var columnGroups = function columnGroups(ancestor) {
    return table(ancestor).fold(constant([]), function (table) {
      return children(table, 'colgroup');
    });
  };

  var fromRowsOrColGroups = function fromRowsOrColGroups(elems, getSection) {
    return map$1(elems, function (row) {
      if (name(row) === 'colgroup') {
        var _cells = map$1(columns$1(row), function (column) {
          var colspan = getAttrValue(column, 'span', 1);
          return detail(column, 1, colspan);
        });

        return rowdetail(row, _cells, 'colgroup');
      } else {
        var _cells2 = map$1(cells$1(row), function (cell) {
          var rowspan = getAttrValue(cell, 'rowspan', 1);
          var colspan = getAttrValue(cell, 'colspan', 1);
          return detail(cell, rowspan, colspan);
        });

        return rowdetail(row, _cells2, getSection(row));
      }
    });
  };

  var getParentSection = function getParentSection(group) {
    return parent(group).map(function (parent) {
      var parentName = name(parent);
      return isValidSection(parentName) ? parentName : 'tbody';
    }).getOr('tbody');
  };

  var fromTable$1 = function fromTable$1(table) {
    var rows = rows$1(table);
    var columnGroups$1 = columnGroups(table);
    var elems = [].concat(_toConsumableArray(columnGroups$1), _toConsumableArray(rows));
    return fromRowsOrColGroups(elems, getParentSection);
  };

  var fromPastedRows = function fromPastedRows(elems, section) {
    return fromRowsOrColGroups(elems, function () {
      return section;
    });
  };

  var cached = function cached(f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        r = f.apply(null, args);
      }

      return r;
    };
  };

  var DeviceType = function DeviceType(os, browser, userAgent, mediaMatch) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isMobile = os.isiOS() || os.isAndroid();
    var isTouch = isMobile || mediaMatch('(pointer:coarse)');
    var isTablet = isiPad || !isiPhone && isMobile && mediaMatch('(min-device-width:768px)');
    var isPhone = isiPhone || isMobile && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    var isDesktop = !isPhone && !isTablet && !iOSwebview;
    return {
      isiPad: constant(isiPad),
      isiPhone: constant(isiPhone),
      isTablet: constant(isTablet),
      isPhone: constant(isPhone),
      isTouch: constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: constant(iOSwebview),
      isDesktop: constant(isDesktop)
    };
  };

  var firstMatch = function firstMatch(regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];

      if (x.test(s)) {
        return x;
      }
    }

    return undefined;
  };

  var find = function find(regexes, agent) {
    var r = firstMatch(regexes, agent);

    if (!r) {
      return {
        major: 0,
        minor: 0
      };
    }

    var group = function group(i) {
      return Number(agent.replace(r, '$' + i));
    };

    return nu$2(group(1), group(2));
  };

  var detect$5 = function detect$5(versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();

    if (versionRegexes.length === 0) {
      return unknown$2();
    }

    return find(versionRegexes, cleanedAgent);
  };

  var unknown$2 = function unknown$2() {
    return nu$2(0, 0);
  };

  var nu$2 = function nu$2(major, minor) {
    return {
      major: major,
      minor: minor
    };
  };

  var Version = {
    nu: nu$2,
    detect: detect$5,
    unknown: unknown$2
  };

  var detectBrowser$1 = function detectBrowser$1(browsers, userAgentData) {
    return findMap(userAgentData.brands, function (uaBrand) {
      var lcBrand = uaBrand.brand.toLowerCase();
      return find$1(browsers, function (browser) {
        var _a;

        return lcBrand === ((_a = browser.brand) === null || _a === void 0 ? void 0 : _a.toLowerCase());
      }).map(function (info) {
        return {
          current: info.name,
          version: Version.nu(parseInt(uaBrand.version, 10), 0)
        };
      });
    });
  };

  var detect$4 = function detect$4(candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return find$1(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };

  var detectBrowser = function detectBrowser(browsers, userAgent) {
    return detect$4(browsers, userAgent).map(function (browser) {
      var version = Version.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };

  var detectOs = function detectOs(oses, userAgent) {
    return detect$4(oses, userAgent).map(function (os) {
      var version = Version.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;

  var checkContains = function checkContains(target) {
    return function (uastring) {
      return contains(uastring, target);
    };
  };

  var browsers = [{
    name: 'Edge',
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(uastring) {
      return contains(uastring, 'edge/') && contains(uastring, 'chrome') && contains(uastring, 'safari') && contains(uastring, 'applewebkit');
    }
  }, {
    name: 'Chromium',
    brand: 'Chromium',
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, normalVersionRegex],
    search: function search(uastring) {
      return contains(uastring, 'chrome') && !contains(uastring, 'chromeframe');
    }
  }, {
    name: 'IE',
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(uastring) {
      return contains(uastring, 'msie') || contains(uastring, 'trident');
    }
  }, {
    name: 'Opera',
    versionRegexes: [normalVersionRegex, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: checkContains('opera')
  }, {
    name: 'Firefox',
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: checkContains('firefox')
  }, {
    name: 'Safari',
    versionRegexes: [normalVersionRegex, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(uastring) {
      return (contains(uastring, 'safari') || contains(uastring, 'mobile/')) && contains(uastring, 'applewebkit');
    }
  }];
  var oses = [{
    name: 'Windows',
    search: checkContains('win'),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: 'iOS',
    search: function search(uastring) {
      return contains(uastring, 'iphone') || contains(uastring, 'ipad');
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: 'Android',
    search: checkContains('android'),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: 'macOS',
    search: checkContains('mac os x'),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: 'Linux',
    search: checkContains('linux'),
    versionRegexes: []
  }, {
    name: 'Solaris',
    search: checkContains('sunos'),
    versionRegexes: []
  }, {
    name: 'FreeBSD',
    search: checkContains('freebsd'),
    versionRegexes: []
  }, {
    name: 'ChromeOS',
    search: checkContains('cros'),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }];
  var PlatformInfo = {
    browsers: constant(browsers),
    oses: constant(oses)
  };
  var edge = 'Edge';
  var chromium = 'Chromium';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';

  var unknown$1 = function unknown$1() {
    return nu$1({
      current: undefined,
      version: Version.unknown()
    });
  };

  var nu$1 = function nu$1(info) {
    var current = info.current;
    var version = info.version;

    var isBrowser = function isBrowser(name) {
      return function () {
        return current === name;
      };
    };

    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge),
      isChromium: isBrowser(chromium),
      isIE: isBrowser(ie),
      isOpera: isBrowser(opera),
      isFirefox: isBrowser(firefox),
      isSafari: isBrowser(safari)
    };
  };

  var Browser = {
    unknown: unknown$1,
    nu: nu$1,
    edge: constant(edge),
    chromium: constant(chromium),
    ie: constant(ie),
    opera: constant(opera),
    firefox: constant(firefox),
    safari: constant(safari)
  };
  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var macos = 'macOS';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var chromeos = 'ChromeOS';

  var unknown = function unknown() {
    return nu({
      current: undefined,
      version: Version.unknown()
    });
  };

  var nu = function nu(info) {
    var current = info.current;
    var version = info.version;

    var isOS = function isOS(name) {
      return function () {
        return current === name;
      };
    };

    return {
      current: current,
      version: version,
      isWindows: isOS(windows),
      isiOS: isOS(ios),
      isAndroid: isOS(android),
      isMacOS: isOS(macos),
      isLinux: isOS(linux),
      isSolaris: isOS(solaris),
      isFreeBSD: isOS(freebsd),
      isChromeOS: isOS(chromeos)
    };
  };

  var OperatingSystem = {
    unknown: unknown,
    nu: nu,
    windows: constant(windows),
    ios: constant(ios),
    android: constant(android),
    linux: constant(linux),
    macos: constant(macos),
    solaris: constant(solaris),
    freebsd: constant(freebsd),
    chromeos: constant(chromeos)
  };

  var detect$3 = function detect$3(userAgent, userAgentDataOpt, mediaMatch) {
    var browsers = PlatformInfo.browsers();
    var oses = PlatformInfo.oses();
    var browser = userAgentDataOpt.bind(function (userAgentData) {
      return detectBrowser$1(browsers, userAgentData);
    }).orThunk(function () {
      return detectBrowser(browsers, userAgent);
    }).fold(Browser.unknown, Browser.nu);
    var os = detectOs(oses, userAgent).fold(OperatingSystem.unknown, OperatingSystem.nu);
    var deviceType = DeviceType(os, browser, userAgent, mediaMatch);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };

  var PlatformDetection = {
    detect: detect$3
  };

  var mediaMatch = function mediaMatch(query) {
    return window.matchMedia(query).matches;
  };

  var platform = cached(function () {
    return PlatformDetection.detect(navigator.userAgent, Optional.from(navigator.userAgentData), mediaMatch);
  });

  var detect$2 = function detect$2() {
    return platform();
  };

  var Dimension = function Dimension(name, getOffset) {
    var set = function set(element, h) {
      if (!isNumber(h) && !h.match(/^[0-9]+$/)) {
        throw new Error(name + '.set accepts only positive integer values. Value was ' + h);
      }

      var dom = element.dom;

      if (isSupported(dom)) {
        dom.style[name] = h + 'px';
      }
    };

    var get = function get(element) {
      var r = getOffset(element);

      if (r <= 0 || r === null) {
        var _css = get$a(element, name);

        return parseFloat(_css) || 0;
      }

      return r;
    };

    var getOuter = get;

    var aggregate = function aggregate(element, properties) {
      return foldl(properties, function (acc, property) {
        var val = get$a(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };

    var max = function max(element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };

    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  };

  var toNumber = function toNumber(px, fallback) {
    return toFloat(px).getOr(fallback);
  };

  var getProp = function getProp(element, name, fallback) {
    return toNumber(get$a(element, name), fallback);
  };

  var calcContentBoxSize = function calcContentBoxSize(element, size, upper, lower) {
    var paddingUpper = getProp(element, "padding-".concat(upper), 0);
    var paddingLower = getProp(element, "padding-".concat(lower), 0);
    var borderUpper = getProp(element, "border-".concat(upper, "-width"), 0);
    var borderLower = getProp(element, "border-".concat(lower, "-width"), 0);
    return size - paddingUpper - paddingLower - borderUpper - borderLower;
  };

  var getCalculatedWidth = function getCalculatedWidth(element, boxSizing) {
    var dom = element.dom;
    var width = dom.getBoundingClientRect().width || dom.offsetWidth;
    return boxSizing === 'border-box' ? width : calcContentBoxSize(element, width, 'left', 'right');
  };

  var getHeight$1 = function getHeight$1(element) {
    return getProp(element, 'height', element.dom.offsetHeight);
  };

  var getWidth = function getWidth(element) {
    return getProp(element, 'width', element.dom.offsetWidth);
  };

  var getInnerWidth = function getInnerWidth(element) {
    return getCalculatedWidth(element, 'content-box');
  };

  var api$2 = Dimension('width', function (element) {
    return element.dom.offsetWidth;
  });

  var get$9 = function get$9(element) {
    return api$2.get(element);
  };

  var getOuter$2 = function getOuter$2(element) {
    return api$2.getOuter(element);
  };

  var getInner = getInnerWidth;
  var getRuntime$1 = getWidth;

  var addCells = function addCells(gridRow, index, cells) {
    var existingCells = gridRow.cells;
    var before = existingCells.slice(0, index);
    var after = existingCells.slice(index);
    var newCells = before.concat(cells).concat(after);
    return setCells(gridRow, newCells);
  };

  var addCell = function addCell(gridRow, index, cell) {
    return addCells(gridRow, index, [cell]);
  };

  var mutateCell = function mutateCell(gridRow, index, cell) {
    var cells = gridRow.cells;
    cells[index] = cell;
  };

  var setCells = function setCells(gridRow, cells) {
    return rowcells(gridRow.element, cells, gridRow.section, gridRow.isNew);
  };

  var mapCells = function mapCells(gridRow, f) {
    var cells = gridRow.cells;
    var r = map$1(cells, f);
    return rowcells(gridRow.element, r, gridRow.section, gridRow.isNew);
  };

  var getCell = function getCell(gridRow, index) {
    return gridRow.cells[index];
  };

  var getCellElement = function getCellElement(gridRow, index) {
    return getCell(gridRow, index).element;
  };

  var cellLength = function cellLength(gridRow) {
    return gridRow.cells.length;
  };

  var extractGridDetails = function extractGridDetails(grid) {
    var result = partition(grid, function (row) {
      return row.section === 'colgroup';
    });
    return {
      rows: result.fail,
      cols: result.pass
    };
  };

  var clone = function clone(gridRow, cloneRow, cloneCell) {
    var newCells = map$1(gridRow.cells, cloneCell);
    return rowcells(cloneRow(gridRow.element), newCells, gridRow.section, true);
  };

  var LOCKED_COL_ATTR = 'data-snooker-locked-cols';

  var getLockedColumnsFromTable = function getLockedColumnsFromTable(table) {
    return getOpt(table, LOCKED_COL_ATTR).bind(function (lockedColStr) {
      return Optional.from(lockedColStr.match(/\d+/g));
    }).map(function (lockedCols) {
      return mapToObject(lockedCols, always);
    });
  };

  var getLockedColumnsFromGrid = function getLockedColumnsFromGrid(grid) {
    var locked = foldl(extractGridDetails(grid).rows, function (acc, row) {
      each$2(row.cells, function (cell, idx) {
        if (cell.isLocked) {
          acc[idx] = true;
        }
      });
      return acc;
    }, {});
    var lockedArr = mapToArray(locked, function (_val, key) {
      return parseInt(key, 10);
    });
    return sort$1(lockedArr);
  };

  var key = function key(row, column) {
    return row + ',' + column;
  };

  var getAt = function getAt(warehouse, row, column) {
    return Optional.from(warehouse.access[key(row, column)]);
  };

  var findItem = function findItem(warehouse, item, comparator) {
    var filtered = filterItems(warehouse, function (detail) {
      return comparator(item, detail.element);
    });
    return filtered.length > 0 ? Optional.some(filtered[0]) : Optional.none();
  };

  var filterItems = function filterItems(warehouse, predicate) {
    var all = bind$2(warehouse.all, function (r) {
      return r.cells;
    });
    return filter$2(all, predicate);
  };

  var generateColumns = function generateColumns(rowData) {
    var columnsGroup = {};
    var index = 0;
    each$2(rowData.cells, function (column) {
      var colspan = column.colspan;
      range$1(colspan, function (columnIndex) {
        var colIndex = index + columnIndex;
        columnsGroup[colIndex] = columnext(column.element, colspan, colIndex);
      });
      index += colspan;
    });
    return columnsGroup;
  };

  var generate$1 = function generate$1(list) {
    var access = {};
    var cells = [];
    var tableOpt = head(list).map(function (rowData) {
      return rowData.element;
    }).bind(table);
    var lockedColumns = tableOpt.bind(getLockedColumnsFromTable).getOr({});
    var maxRows = 0;
    var maxColumns = 0;
    var rowCount = 0;

    var _partition = partition(list, function (rowData) {
      return rowData.section === 'colgroup';
    }),
        colgroupRows = _partition.pass,
        rows = _partition.fail;

    each$2(rows, function (rowData) {
      var currentRow = [];
      each$2(rowData.cells, function (rowCell) {
        var start = 0;

        while (access[key(rowCount, start)] !== undefined) {
          start++;
        }

        var isLocked = hasNonNullableKey(lockedColumns, start.toString());
        var current = extended(rowCell.element, rowCell.rowspan, rowCell.colspan, rowCount, start, isLocked);

        for (var occupiedColumnPosition = 0; occupiedColumnPosition < rowCell.colspan; occupiedColumnPosition++) {
          for (var occupiedRowPosition = 0; occupiedRowPosition < rowCell.rowspan; occupiedRowPosition++) {
            var rowPosition = rowCount + occupiedRowPosition;
            var columnPosition = start + occupiedColumnPosition;
            var newpos = key(rowPosition, columnPosition);
            access[newpos] = current;
            maxColumns = Math.max(maxColumns, columnPosition + 1);
          }
        }

        currentRow.push(current);
      });
      maxRows++;
      cells.push(rowdetail(rowData.element, currentRow, rowData.section));
      rowCount++;
    });

    var _last$2$map$getOrThun = last$2(colgroupRows).map(function (rowData) {
      var columns = generateColumns(rowData);
      var colgroup$1 = colgroup(rowData.element, values(columns));
      return {
        colgroups: [colgroup$1],
        columns: columns
      };
    }).getOrThunk(function () {
      return {
        colgroups: [],
        columns: {}
      };
    }),
        columns = _last$2$map$getOrThun.columns,
        colgroups = _last$2$map$getOrThun.colgroups;

    var grid$1 = grid(maxRows, maxColumns);
    return {
      grid: grid$1,
      access: access,
      all: cells,
      columns: columns,
      colgroups: colgroups
    };
  };

  var fromTable = function fromTable(table) {
    var list = fromTable$1(table);
    return generate$1(list);
  };

  var justCells = function justCells(warehouse) {
    return bind$2(warehouse.all, function (w) {
      return w.cells;
    });
  };

  var justColumns = function justColumns(warehouse) {
    return values(warehouse.columns);
  };

  var hasColumns = function hasColumns(warehouse) {
    return keys(warehouse.columns).length > 0;
  };

  var getColumnAt = function getColumnAt(warehouse, columnIndex) {
    return Optional.from(warehouse.columns[columnIndex]);
  };

  var Warehouse = {
    fromTable: fromTable,
    generate: generate$1,
    getAt: getAt,
    findItem: findItem,
    filterItems: filterItems,
    justCells: justCells,
    justColumns: justColumns,
    hasColumns: hasColumns,
    getColumnAt: getColumnAt
  };

  var columns = function columns(warehouse) {
    var isValidCell = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : always;
    var grid = warehouse.grid;
    var cols = range$1(grid.columns, identity);
    var rowsArr = range$1(grid.rows, identity);
    return map$1(cols, function (col) {
      var getBlock = function getBlock() {
        return bind$2(rowsArr, function (r) {
          return Warehouse.getAt(warehouse, r, col).filter(function (detail) {
            return detail.column === col;
          }).toArray();
        });
      };

      var isValid = function isValid(detail) {
        return detail.colspan === 1 && isValidCell(detail.element);
      };

      var getFallback = function getFallback() {
        return Warehouse.getAt(warehouse, 0, col);
      };

      return decide(getBlock, isValid, getFallback);
    });
  };

  var decide = function decide(getBlock, isValid, getFallback) {
    var inBlock = getBlock();
    var validInBlock = find$1(inBlock, isValid);
    var detailOption = validInBlock.orThunk(function () {
      return Optional.from(inBlock[0]).orThunk(getFallback);
    });
    return detailOption.map(function (detail) {
      return detail.element;
    });
  };

  var rows = function rows(warehouse) {
    var grid = warehouse.grid;
    var rowsArr = range$1(grid.rows, identity);
    var cols = range$1(grid.columns, identity);
    return map$1(rowsArr, function (row) {
      var getBlock = function getBlock() {
        return bind$2(cols, function (c) {
          return Warehouse.getAt(warehouse, row, c).filter(function (detail) {
            return detail.row === row;
          }).fold(constant([]), function (detail) {
            return [detail];
          });
        });
      };

      var isSingle = function isSingle(detail) {
        return detail.rowspan === 1;
      };

      var getFallback = function getFallback() {
        return Warehouse.getAt(warehouse, row, 0);
      };

      return decide(getBlock, isSingle, getFallback);
    });
  };

  var deduce = function deduce(xs, index) {
    if (index < 0 || index >= xs.length - 1) {
      return Optional.none();
    }

    var current = xs[index].fold(function () {
      var rest = reverse(xs.slice(0, index));
      return findMap(rest, function (a, i) {
        return a.map(function (aa) {
          return {
            value: aa,
            delta: i + 1
          };
        });
      });
    }, function (c) {
      return Optional.some({
        value: c,
        delta: 0
      });
    });
    var next = xs[index + 1].fold(function () {
      var rest = xs.slice(index + 1);
      return findMap(rest, function (a, i) {
        return a.map(function (aa) {
          return {
            value: aa,
            delta: i + 1
          };
        });
      });
    }, function (n) {
      return Optional.some({
        value: n,
        delta: 1
      });
    });
    return current.bind(function (c) {
      return next.map(function (n) {
        var extras = n.delta + c.delta;
        return Math.abs(n.value - c.value) / extras;
      });
    });
  };

  var onDirection = function onDirection(isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };

  var getDirection = function getDirection(element) {
    return get$a(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };

  var api$1 = Dimension('height', function (element) {
    var dom = element.dom;
    return inBody(element) ? dom.getBoundingClientRect().height : dom.offsetHeight;
  });

  var get$8 = function get$8(element) {
    return api$1.get(element);
  };

  var getOuter$1 = function getOuter$1(element) {
    return api$1.getOuter(element);
  };

  var getRuntime = getHeight$1;

  var r = function r(left, top) {
    var translate = function translate(x, y) {
      return r(left + x, top + y);
    };

    return {
      left: left,
      top: top,
      translate: translate
    };
  };

  var SugarPosition = r;

  var boxPosition = function boxPosition(dom) {
    var box = dom.getBoundingClientRect();
    return SugarPosition(box.left, box.top);
  };

  var firstDefinedOrZero = function firstDefinedOrZero(a, b) {
    if (a !== undefined) {
      return a;
    } else {
      return b !== undefined ? b : 0;
    }
  };

  var absolute = function absolute(element) {
    var doc = element.dom.ownerDocument;
    var body = doc.body;
    var win = doc.defaultView;
    var html = doc.documentElement;

    if (body === element.dom) {
      return SugarPosition(body.offsetLeft, body.offsetTop);
    }

    var scrollTop = firstDefinedOrZero(win === null || win === void 0 ? void 0 : win.pageYOffset, html.scrollTop);
    var scrollLeft = firstDefinedOrZero(win === null || win === void 0 ? void 0 : win.pageXOffset, html.scrollLeft);
    var clientTop = firstDefinedOrZero(html.clientTop, body.clientTop);
    var clientLeft = firstDefinedOrZero(html.clientLeft, body.clientLeft);
    return viewport(element).translate(scrollLeft - clientLeft, scrollTop - clientTop);
  };

  var viewport = function viewport(element) {
    var dom = element.dom;
    var doc = dom.ownerDocument;
    var body = doc.body;

    if (body === dom) {
      return SugarPosition(body.offsetLeft, body.offsetTop);
    }

    if (!inBody(element)) {
      return SugarPosition(0, 0);
    }

    return boxPosition(dom);
  };

  var rowInfo = function rowInfo(row, y) {
    return {
      row: row,
      y: y
    };
  };

  var colInfo = function colInfo(col, x) {
    return {
      col: col,
      x: x
    };
  };

  var rtlEdge = function rtlEdge(cell) {
    var pos = absolute(cell);
    return pos.left + getOuter$2(cell);
  };

  var ltrEdge = function ltrEdge(cell) {
    return absolute(cell).left;
  };

  var getLeftEdge = function getLeftEdge(index, cell) {
    return colInfo(index, ltrEdge(cell));
  };

  var getRightEdge = function getRightEdge(index, cell) {
    return colInfo(index, rtlEdge(cell));
  };

  var getTop$1 = function getTop$1(cell) {
    return absolute(cell).top;
  };

  var getTopEdge = function getTopEdge(index, cell) {
    return rowInfo(index, getTop$1(cell));
  };

  var getBottomEdge = function getBottomEdge(index, cell) {
    return rowInfo(index, getTop$1(cell) + getOuter$1(cell));
  };

  var findPositions = function findPositions(getInnerEdge, getOuterEdge, array) {
    if (array.length === 0) {
      return [];
    }

    var lines = map$1(array.slice(1), function (cellOption, index) {
      return cellOption.map(function (cell) {
        return getInnerEdge(index, cell);
      });
    });
    var lastLine = array[array.length - 1].map(function (cell) {
      return getOuterEdge(array.length - 1, cell);
    });
    return lines.concat([lastLine]);
  };

  var negate = function negate(step) {
    return -step;
  };

  var height = {
    delta: identity,
    positions: function positions(optElements) {
      return findPositions(getTopEdge, getBottomEdge, optElements);
    },
    edge: getTop$1
  };
  var ltr$1 = {
    delta: identity,
    edge: ltrEdge,
    positions: function positions(optElements) {
      return findPositions(getLeftEdge, getRightEdge, optElements);
    }
  };
  var rtl$1 = {
    delta: negate,
    edge: rtlEdge,
    positions: function positions(optElements) {
      return findPositions(getRightEdge, getLeftEdge, optElements);
    }
  };
  var detect$1 = onDirection(ltr$1, rtl$1);
  var width = {
    delta: function delta(amount, table) {
      return detect$1(table).delta(amount, table);
    },
    positions: function positions(cols, table) {
      return detect$1(table).positions(cols, table);
    },
    edge: function edge(cell) {
      return detect$1(cell).edge(cell);
    }
  };
  var units = {
    unsupportedLength: ['em', 'ex', 'cap', 'ch', 'ic', 'rem', 'lh', 'rlh', 'vw', 'vh', 'vi', 'vb', 'vmin', 'vmax', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'px'],
    fixed: ['px', 'pt'],
    relative: ['%'],
    empty: ['']
  };

  var pattern = function () {
    var decimalDigits = '[0-9]+';
    var signedInteger = '[+-]?' + decimalDigits;
    var exponentPart = '[eE]' + signedInteger;
    var dot = '\\.';

    var opt = function opt(input) {
      return "(?:".concat(input, ")?");
    };

    var unsignedDecimalLiteral = ['Infinity', decimalDigits + dot + opt(decimalDigits) + opt(exponentPart), dot + decimalDigits + opt(exponentPart), decimalDigits + opt(exponentPart)].join('|');

    var _float = "[+-]?(?:".concat(unsignedDecimalLiteral, ")");

    return new RegExp("^(".concat(_float, ")(.*)$"));
  }();

  var isUnit = function isUnit(unit, accepted) {
    return exists(accepted, function (acc) {
      return exists(units[acc], function (check) {
        return unit === check;
      });
    });
  };

  var parse = function parse(input, accepted) {
    var match = Optional.from(pattern.exec(input));
    return match.bind(function (array) {
      var value = Number(array[1]);
      var unitRaw = array[2];

      if (isUnit(unitRaw, accepted)) {
        return Optional.some({
          value: value,
          unit: unitRaw
        });
      } else {
        return Optional.none();
      }
    });
  };

  var rPercentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
  var rPixelBasedSizeRegex = /(\d+(\.\d+)?)px|em/;
  var isCol$2 = isTag('col');

  var getPercentSize = function getPercentSize(elm, outerGetter, innerGetter) {
    var relativeParent = parentElement(elm).getOrThunk(function () {
      return getBody$1(owner(elm));
    });
    return outerGetter(elm) / innerGetter(relativeParent) * 100;
  };

  var setPixelWidth = function setPixelWidth(cell, amount) {
    set$1(cell, 'width', amount + 'px');
  };

  var setPercentageWidth = function setPercentageWidth(cell, amount) {
    set$1(cell, 'width', amount + '%');
  };

  var setHeight = function setHeight(cell, amount) {
    set$1(cell, 'height', amount + 'px');
  };

  var getHeightValue = function getHeightValue(cell) {
    return getRuntime(cell) + 'px';
  };

  var convert = function convert(cell, number, getter, setter) {
    var newSize = table(cell).map(function (table) {
      var total = getter(table);
      return Math.floor(number / 100 * total);
    }).getOr(number);
    setter(cell, newSize);
    return newSize;
  };

  var normalizePixelSize = function normalizePixelSize(value, cell, getter, setter) {
    var number = parseFloat(value);
    return endsWith(value, '%') && name(cell) !== 'table' ? convert(cell, number, getter, setter) : number;
  };

  var getTotalHeight = function getTotalHeight(cell) {
    var value = getHeightValue(cell);

    if (!value) {
      return get$8(cell);
    }

    return normalizePixelSize(value, cell, get$8, setHeight);
  };

  var get$7 = function get$7(cell, type, f) {
    var v = f(cell);
    var span = getSpan(cell, type);
    return v / span;
  };

  var getRaw$1 = function getRaw$1(element, prop) {
    return getRaw$2(element, prop).orThunk(function () {
      return getOpt(element, prop).map(function (val) {
        return val + 'px';
      });
    });
  };

  var getRawWidth$1 = function getRawWidth$1(element) {
    return getRaw$1(element, 'width');
  };

  var getRawHeight = function getRawHeight(element) {
    return getRaw$1(element, 'height');
  };

  var getPercentageWidth = function getPercentageWidth(cell) {
    return getPercentSize(cell, get$9, getInner);
  };

  var getPixelWidth$1 = function getPixelWidth$1(cell) {
    return isCol$2(cell) ? get$9(cell) : getRuntime$1(cell);
  };

  var getHeight = function getHeight(cell) {
    return get$7(cell, 'rowspan', getTotalHeight);
  };

  var getGenericWidth = function getGenericWidth(cell) {
    var width = getRawWidth$1(cell);
    return width.bind(function (w) {
      return parse(w, ['fixed', 'relative', 'empty']);
    });
  };

  var setGenericWidth = function setGenericWidth(cell, amount, unit) {
    set$1(cell, 'width', amount + unit);
  };

  var getPixelTableWidth = function getPixelTableWidth(table) {
    return get$9(table) + 'px';
  };

  var getPercentTableWidth = function getPercentTableWidth(table) {
    return getPercentSize(table, get$9, getInner) + '%';
  };

  var isPercentSizing$1 = function isPercentSizing$1(table) {
    return getRawWidth$1(table).exists(function (size) {
      return rPercentageBasedSizeRegex.test(size);
    });
  };

  var isPixelSizing$1 = function isPixelSizing$1(table) {
    return getRawWidth$1(table).exists(function (size) {
      return rPixelBasedSizeRegex.test(size);
    });
  };

  var isNoneSizing$1 = function isNoneSizing$1(table) {
    return getRawWidth$1(table).isNone();
  };

  var percentageBasedSizeRegex = constant(rPercentageBasedSizeRegex);
  var isCol$1 = isTag('col');

  var getRawW = function getRawW(cell) {
    return getRawWidth$1(cell).getOrThunk(function () {
      return getPixelWidth$1(cell) + 'px';
    });
  };

  var getRawH = function getRawH(cell) {
    return getRawHeight(cell).getOrThunk(function () {
      return getHeight(cell) + 'px';
    });
  };

  var justCols = function justCols(warehouse) {
    return map$1(Warehouse.justColumns(warehouse), function (column) {
      return Optional.from(column.element);
    });
  };

  var isValidColumn = function isValidColumn(cell) {
    var browser = detect$2().browser;
    var supportsColWidths = browser.isChromium() || browser.isFirefox();
    return isCol$1(cell) ? supportsColWidths : true;
  };

  var getDimension = function getDimension(cellOpt, index, backups, filter, getter, fallback) {
    return cellOpt.filter(filter).fold(function () {
      return fallback(deduce(backups, index));
    }, function (cell) {
      return getter(cell);
    });
  };

  var getWidthFrom = function getWidthFrom(warehouse, table, getWidth, fallback) {
    var columnCells = columns(warehouse);
    var columns$1 = Warehouse.hasColumns(warehouse) ? justCols(warehouse) : columnCells;
    var backups = [Optional.some(width.edge(table))].concat(map$1(width.positions(columnCells, table), function (pos) {
      return pos.map(function (p) {
        return p.x;
      });
    }));
    var colFilter = not(hasColspan);
    return map$1(columns$1, function (cellOption, c) {
      return getDimension(cellOption, c, backups, colFilter, function (column) {
        if (isValidColumn(column)) {
          return getWidth(column);
        } else {
          var _cell2 = bindFrom(columnCells[c], identity);

          return getDimension(_cell2, c, backups, colFilter, function (cell) {
            return fallback(Optional.some(get$9(cell)));
          }, fallback);
        }
      }, fallback);
    });
  };

  var getDeduced = function getDeduced(deduced) {
    return deduced.map(function (d) {
      return d + 'px';
    }).getOr('');
  };

  var getRawWidths = function getRawWidths(warehouse, table) {
    return getWidthFrom(warehouse, table, getRawW, getDeduced);
  };

  var getPercentageWidths = function getPercentageWidths(warehouse, table, tableSize) {
    return getWidthFrom(warehouse, table, getPercentageWidth, function (deduced) {
      return deduced.fold(function () {
        return tableSize.minCellWidth();
      }, function (cellWidth) {
        return cellWidth / tableSize.pixelWidth() * 100;
      });
    });
  };

  var getPixelWidths = function getPixelWidths(warehouse, table, tableSize) {
    return getWidthFrom(warehouse, table, getPixelWidth$1, function (deduced) {
      return deduced.getOrThunk(tableSize.minCellWidth);
    });
  };

  var getHeightFrom = function getHeightFrom(warehouse, table, direction, getHeight, fallback) {
    var rows$1 = rows(warehouse);
    var backups = [Optional.some(direction.edge(table))].concat(map$1(direction.positions(rows$1, table), function (pos) {
      return pos.map(function (p) {
        return p.y;
      });
    }));
    return map$1(rows$1, function (cellOption, c) {
      return getDimension(cellOption, c, backups, not(hasRowspan), getHeight, fallback);
    });
  };

  var getPixelHeights = function getPixelHeights(warehouse, table, direction) {
    return getHeightFrom(warehouse, table, direction, getHeight, function (deduced) {
      return deduced.getOrThunk(minHeight);
    });
  };

  var getRawHeights = function getRawHeights(warehouse, table, direction) {
    return getHeightFrom(warehouse, table, direction, getRawH, getDeduced);
  };

  var widthLookup = function widthLookup(table, getter) {
    return function () {
      if (inBody(table)) {
        return getter(table);
      } else {
        return parseFloat(getRaw$2(table, 'width').getOr('0'));
      }
    };
  };

  var noneSize = function noneSize(table) {
    var getWidth = widthLookup(table, get$9);
    var zero = constant(0);

    var getWidths = function getWidths(warehouse, tableSize) {
      return getPixelWidths(warehouse, table, tableSize);
    };

    return {
      width: getWidth,
      pixelWidth: getWidth,
      getWidths: getWidths,
      getCellDelta: zero,
      singleColumnWidth: constant([0]),
      minCellWidth: zero,
      setElementWidth: noop,
      adjustTableWidth: noop,
      isRelative: true,
      label: 'none'
    };
  };

  var percentageSize = function percentageSize(table) {
    var getFloatWidth = widthLookup(table, function (elem) {
      return parseFloat(getPercentTableWidth(elem));
    });
    var getWidth = widthLookup(table, get$9);

    var getCellDelta = function getCellDelta(delta) {
      return delta / getWidth() * 100;
    };

    var singleColumnWidth = function singleColumnWidth(w, _delta) {
      return [100 - w];
    };

    var minCellWidth = function minCellWidth() {
      return minWidth() / getWidth() * 100;
    };

    var adjustTableWidth = function adjustTableWidth(delta) {
      var currentWidth = getFloatWidth();
      var change = delta / 100 * currentWidth;
      var newWidth = currentWidth + change;
      setPercentageWidth(table, newWidth);
    };

    var getWidths = function getWidths(warehouse, tableSize) {
      return getPercentageWidths(warehouse, table, tableSize);
    };

    return {
      width: getFloatWidth,
      pixelWidth: getWidth,
      getWidths: getWidths,
      getCellDelta: getCellDelta,
      singleColumnWidth: singleColumnWidth,
      minCellWidth: minCellWidth,
      setElementWidth: setPercentageWidth,
      adjustTableWidth: adjustTableWidth,
      isRelative: true,
      label: 'percent'
    };
  };

  var pixelSize = function pixelSize(table) {
    var getWidth = widthLookup(table, get$9);
    var getCellDelta = identity;

    var singleColumnWidth = function singleColumnWidth(w, delta) {
      var newNext = Math.max(minWidth(), w + delta);
      return [newNext - w];
    };

    var adjustTableWidth = function adjustTableWidth(delta) {
      var newWidth = getWidth() + delta;
      setPixelWidth(table, newWidth);
    };

    var getWidths = function getWidths(warehouse, tableSize) {
      return getPixelWidths(warehouse, table, tableSize);
    };

    return {
      width: getWidth,
      pixelWidth: getWidth,
      getWidths: getWidths,
      getCellDelta: getCellDelta,
      singleColumnWidth: singleColumnWidth,
      minCellWidth: minWidth,
      setElementWidth: setPixelWidth,
      adjustTableWidth: adjustTableWidth,
      isRelative: false,
      label: 'pixel'
    };
  };

  var chooseSize = function chooseSize(element, width) {
    var percentMatch = percentageBasedSizeRegex().exec(width);

    if (percentMatch !== null) {
      return percentageSize(element);
    } else {
      return pixelSize(element);
    }
  };

  var getTableSize = function getTableSize(table) {
    var width = getRawWidth$1(table);
    return width.fold(function () {
      return noneSize(table);
    }, function (w) {
      return chooseSize(table, w);
    });
  };

  var TableSize = {
    getTableSize: getTableSize,
    pixelSize: pixelSize,
    percentageSize: percentageSize,
    noneSize: noneSize
  };

  var statsStruct = function statsStruct(minRow, minCol, maxRow, maxCol, allCells, selectedCells) {
    return {
      minRow: minRow,
      minCol: minCol,
      maxRow: maxRow,
      maxCol: maxCol,
      allCells: allCells,
      selectedCells: selectedCells
    };
  };

  var findSelectedStats = function findSelectedStats(house, isSelected) {
    var totalColumns = house.grid.columns;
    var totalRows = house.grid.rows;
    var minRow = totalRows;
    var minCol = totalColumns;
    var maxRow = 0;
    var maxCol = 0;
    var allCells = [];
    var selectedCells = [];
    each$1(house.access, function (detail) {
      allCells.push(detail);

      if (isSelected(detail)) {
        selectedCells.push(detail);
        var startRow = detail.row;
        var endRow = startRow + detail.rowspan - 1;
        var startCol = detail.column;
        var endCol = startCol + detail.colspan - 1;

        if (startRow < minRow) {
          minRow = startRow;
        } else if (endRow > maxRow) {
          maxRow = endRow;
        }

        if (startCol < minCol) {
          minCol = startCol;
        } else if (endCol > maxCol) {
          maxCol = endCol;
        }
      }
    });
    return statsStruct(minRow, minCol, maxRow, maxCol, allCells, selectedCells);
  };

  var makeCell = function makeCell(list, seenSelected, rowIndex) {
    var row = list[rowIndex].element;
    var td = SugarElement.fromTag('td');
    append$1(td, SugarElement.fromTag('br'));
    var f = seenSelected ? append$1 : prepend;
    f(row, td);
  };

  var fillInGaps = function fillInGaps(list, house, stats, isSelected) {
    var rows = filter$2(list, function (row) {
      return row.section !== 'colgroup';
    });
    var totalColumns = house.grid.columns;
    var totalRows = house.grid.rows;

    for (var i = 0; i < totalRows; i++) {
      var seenSelected = false;

      for (var j = 0; j < totalColumns; j++) {
        if (!(i < stats.minRow || i > stats.maxRow || j < stats.minCol || j > stats.maxCol)) {
          var needCell = Warehouse.getAt(house, i, j).filter(isSelected).isNone();

          if (needCell) {
            makeCell(rows, seenSelected, i);
          } else {
            seenSelected = true;
          }
        }
      }
    }
  };

  var clean = function clean(replica, stats, house, widthDelta) {
    each$1(house.columns, function (col) {
      if (col.column < stats.minCol || col.column > stats.maxCol) {
        remove$6(col.element);
      }
    });
    var emptyRows = filter$2(firstLayer(replica, 'tr'), function (row) {
      return row.dom.childElementCount === 0;
    });
    each$2(emptyRows, remove$6);

    if (stats.minCol === stats.maxCol || stats.minRow === stats.maxRow) {
      each$2(firstLayer(replica, 'th,td'), function (cell) {
        remove$7(cell, 'rowspan');
        remove$7(cell, 'colspan');
      });
    }

    remove$7(replica, LOCKED_COL_ATTR);
    remove$7(replica, 'data-snooker-col-series');
    var tableSize = TableSize.getTableSize(replica);
    tableSize.adjustTableWidth(widthDelta);
  };

  var getTableWidthDelta = function getTableWidthDelta(table, warehouse, tableSize, stats) {
    if (stats.minCol === 0 && warehouse.grid.columns === stats.maxCol + 1) {
      return 0;
    }

    var colWidths = getPixelWidths(warehouse, table, tableSize);
    var allColsWidth = foldl(colWidths, function (acc, width) {
      return acc + width;
    }, 0);
    var selectedColsWidth = foldl(colWidths.slice(stats.minCol, stats.maxCol + 1), function (acc, width) {
      return acc + width;
    }, 0);
    var newWidth = selectedColsWidth / allColsWidth * tableSize.pixelWidth();
    var delta = newWidth - tableSize.pixelWidth();
    return tableSize.getCellDelta(delta);
  };

  var extract$1 = function extract$1(table, selectedSelector) {
    var isSelected = function isSelected(detail) {
      return is$2(detail.element, selectedSelector);
    };

    var replica = deep(table);
    var list = fromTable$1(replica);
    var tableSize = TableSize.getTableSize(table);
    var replicaHouse = Warehouse.generate(list);
    var replicaStats = findSelectedStats(replicaHouse, isSelected);
    var selector = 'th:not(' + selectedSelector + ')' + ',td:not(' + selectedSelector + ')';
    var unselectedCells = filterFirstLayer(replica, 'th,td', function (cell) {
      return is$2(cell, selector);
    });
    each$2(unselectedCells, remove$6);
    fillInGaps(list, replicaHouse, replicaStats, isSelected);
    var house = Warehouse.fromTable(table);
    var widthDelta = getTableWidthDelta(table, house, tableSize, replicaStats);
    clean(replica, replicaStats, replicaHouse, widthDelta);
    return replica;
  };

  var nbsp = '\xA0';

  var NodeValue = function NodeValue(is, name) {
    var get = function get(element) {
      if (!is(element)) {
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      }

      return getOption(element).getOr('');
    };

    var getOption = function getOption(element) {
      return is(element) ? Optional.from(element.dom.nodeValue) : Optional.none();
    };

    var set = function set(element, value) {
      if (!is(element)) {
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      }

      element.dom.nodeValue = value;
    };

    return {
      get: get,
      getOption: getOption,
      set: set
    };
  };

  var api = NodeValue(isText, 'text');

  var get$6 = function get$6(element) {
    return api.get(element);
  };

  var getOption = function getOption(element) {
    return api.getOption(element);
  };

  var set = function set(element, value) {
    return api.set(element, value);
  };

  var getEnd = function getEnd(element) {
    return name(element) === 'img' ? 1 : getOption(element).fold(function () {
      return children$2(element).length;
    }, function (v) {
      return v.length;
    });
  };

  var isTextNodeWithCursorPosition = function isTextNodeWithCursorPosition(el) {
    return getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(nbsp) > -1;
    }).isSome();
  };

  var elementsWithCursorPosition = ['img', 'br'];

  var isCursorPosition = function isCursorPosition(elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || contains$2(elementsWithCursorPosition, name(elem));
  };

  var first = function first(element) {
    return descendant$1(element, isCursorPosition);
  };

  var last$1 = function last$1(element) {
    return descendantRtl(element, isCursorPosition);
  };

  var descendantRtl = function descendantRtl(scope, predicate) {
    var descend = function descend(element) {
      var children = children$2(element);

      for (var i = children.length - 1; i >= 0; i--) {
        var _child2 = children[i];

        if (predicate(_child2)) {
          return Optional.some(_child2);
        }

        var res = descend(_child2);

        if (res.isSome()) {
          return res;
        }
      }

      return Optional.none();
    };

    return descend(scope);
  };

  var transferableAttributes = {
    scope: ['row', 'col']
  };

  var createCell = function createCell(doc) {
    return function () {
      var td = SugarElement.fromTag('td', doc.dom);
      append$1(td, SugarElement.fromTag('br', doc.dom));
      return td;
    };
  };

  var createCol = function createCol(doc) {
    return function () {
      return SugarElement.fromTag('col', doc.dom);
    };
  };

  var createColgroup = function createColgroup(doc) {
    return function () {
      return SugarElement.fromTag('colgroup', doc.dom);
    };
  };

  var createRow$1 = function createRow$1(doc) {
    return function () {
      return SugarElement.fromTag('tr', doc.dom);
    };
  };

  var replace$1 = function replace$1(cell, tag, attrs) {
    var replica = copy$2(cell, tag);
    each$1(attrs, function (v, k) {
      if (v === null) {
        remove$7(replica, k);
      } else {
        set$2(replica, k, v);
      }
    });
    return replica;
  };

  var pasteReplace = function pasteReplace(cell) {
    return cell;
  };

  var cloneFormats = function cloneFormats(oldCell, newCell, formats) {
    var first$1 = first(oldCell);
    return first$1.map(function (firstText) {
      var formatSelector = formats.join(',');
      var parents = ancestors$3(firstText, formatSelector, function (element) {
        return eq$1(element, oldCell);
      });
      return foldr(parents, function (last, parent) {
        var clonedFormat = shallow(parent);
        remove$7(clonedFormat, 'contenteditable');
        append$1(last, clonedFormat);
        return clonedFormat;
      }, newCell);
    }).getOr(newCell);
  };

  var cloneAppropriateAttributes = function cloneAppropriateAttributes(original, clone) {
    each$1(transferableAttributes, function (validAttributes, attributeName) {
      return getOpt(original, attributeName).filter(function (attribute) {
        return contains$2(validAttributes, attribute);
      }).each(function (attribute) {
        return set$2(clone, attributeName, attribute);
      });
    });
  };

  var cellOperations = function cellOperations(mutate, doc, formatsToClone) {
    var cloneCss = function cloneCss(prev, clone) {
      copy$1(prev.element, clone);
      remove$5(clone, 'height');

      if (prev.colspan !== 1) {
        remove$5(clone, 'width');
      }
    };

    var newCell = function newCell(prev) {
      var td = SugarElement.fromTag(name(prev.element), doc.dom);
      var formats = formatsToClone.getOr(['strong', 'em', 'b', 'i', 'span', 'font', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div']);
      var lastNode = formats.length > 0 ? cloneFormats(prev.element, td, formats) : td;
      append$1(lastNode, SugarElement.fromTag('br'));
      cloneCss(prev, td);
      cloneAppropriateAttributes(prev.element, td);
      mutate(prev.element, td);
      return td;
    };

    var newCol = function newCol(prev) {
      var col = SugarElement.fromTag(name(prev.element), doc.dom);
      cloneCss(prev, col);
      mutate(prev.element, col);
      return col;
    };

    return {
      col: newCol,
      colgroup: createColgroup(doc),
      row: createRow$1(doc),
      cell: newCell,
      replace: replace$1,
      colGap: createCol(doc),
      gap: createCell(doc)
    };
  };

  var paste$1 = function paste$1(doc) {
    return {
      col: createCol(doc),
      colgroup: createColgroup(doc),
      row: createRow$1(doc),
      cell: createCell(doc),
      replace: pasteReplace,
      colGap: createCol(doc),
      gap: createCell(doc)
    };
  };

  var fromHtml = function fromHtml(html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return children$2(SugarElement.fromDom(div));
  };

  var fromDom = function fromDom(nodes) {
    return map$1(nodes, SugarElement.fromDom);
  };

  var getBody = function getBody(editor) {
    return SugarElement.fromDom(editor.getBody());
  };

  var getIsRoot = function getIsRoot(editor) {
    return function (element) {
      return eq$1(element, getBody(editor));
    };
  };

  var removeDataStyle = function removeDataStyle(table) {
    remove$7(table, 'data-mce-style');

    var removeStyleAttribute = function removeStyleAttribute(element) {
      return remove$7(element, 'data-mce-style');
    };

    each$2(cells$1(table), removeStyleAttribute);
    each$2(columns$1(table), removeStyleAttribute);
    each$2(rows$1(table), removeStyleAttribute);
  };

  var getSelectionStart = function getSelectionStart(editor) {
    return SugarElement.fromDom(editor.selection.getStart());
  };

  var getPixelWidth = function getPixelWidth(elm) {
    return elm.getBoundingClientRect().width;
  };

  var getPixelHeight = function getPixelHeight(elm) {
    return elm.getBoundingClientRect().height;
  };

  var getRawWidth = function getRawWidth(editor, elm) {
    var raw = editor.dom.getStyle(elm, 'width') || editor.dom.getAttrib(elm, 'width');
    return Optional.from(raw).filter(isNotEmpty);
  };

  var isPercentage$1 = function isPercentage$1(value) {
    return /^(\d+(\.\d+)?)%$/.test(value);
  };

  var isPixel = function isPixel(value) {
    return /^(\d+(\.\d+)?)px$/.test(value);
  };

  var inSelection = function inSelection(bounds, detail) {
    var leftEdge = detail.column;
    var rightEdge = detail.column + detail.colspan - 1;
    var topEdge = detail.row;
    var bottomEdge = detail.row + detail.rowspan - 1;
    return leftEdge <= bounds.finishCol && rightEdge >= bounds.startCol && topEdge <= bounds.finishRow && bottomEdge >= bounds.startRow;
  };

  var isWithin = function isWithin(bounds, detail) {
    return detail.column >= bounds.startCol && detail.column + detail.colspan - 1 <= bounds.finishCol && detail.row >= bounds.startRow && detail.row + detail.rowspan - 1 <= bounds.finishRow;
  };

  var isRectangular = function isRectangular(warehouse, bounds) {
    var isRect = true;
    var detailIsWithin = curry(isWithin, bounds);

    for (var i = bounds.startRow; i <= bounds.finishRow; i++) {
      for (var j = bounds.startCol; j <= bounds.finishCol; j++) {
        isRect = isRect && Warehouse.getAt(warehouse, i, j).exists(detailIsWithin);
      }
    }

    return isRect ? Optional.some(bounds) : Optional.none();
  };

  var getBounds = function getBounds(detailA, detailB) {
    return bounds(Math.min(detailA.row, detailB.row), Math.min(detailA.column, detailB.column), Math.max(detailA.row + detailA.rowspan - 1, detailB.row + detailB.rowspan - 1), Math.max(detailA.column + detailA.colspan - 1, detailB.column + detailB.colspan - 1));
  };

  var getAnyBox = function getAnyBox(warehouse, startCell, finishCell) {
    var startCoords = Warehouse.findItem(warehouse, startCell, eq$1);
    var finishCoords = Warehouse.findItem(warehouse, finishCell, eq$1);
    return startCoords.bind(function (sc) {
      return finishCoords.map(function (fc) {
        return getBounds(sc, fc);
      });
    });
  };

  var getBox$1 = function getBox$1(warehouse, startCell, finishCell) {
    return getAnyBox(warehouse, startCell, finishCell).bind(function (bounds) {
      return isRectangular(warehouse, bounds);
    });
  };

  var moveBy$1 = function moveBy$1(warehouse, cell, row, column) {
    return Warehouse.findItem(warehouse, cell, eq$1).bind(function (detail) {
      var startRow = row > 0 ? detail.row + detail.rowspan - 1 : detail.row;
      var startCol = column > 0 ? detail.column + detail.colspan - 1 : detail.column;
      var dest = Warehouse.getAt(warehouse, startRow + row, startCol + column);
      return dest.map(function (d) {
        return d.element;
      });
    });
  };

  var intercepts$1 = function intercepts$1(warehouse, start, finish) {
    return getAnyBox(warehouse, start, finish).map(function (bounds) {
      var inside = Warehouse.filterItems(warehouse, curry(inSelection, bounds));
      return map$1(inside, function (detail) {
        return detail.element;
      });
    });
  };

  var parentCell = function parentCell(warehouse, innerCell) {
    var isContainedBy = function isContainedBy(c1, c2) {
      return contains$1(c2, c1);
    };

    return Warehouse.findItem(warehouse, innerCell, isContainedBy).map(function (detail) {
      return detail.element;
    });
  };

  var moveBy = function moveBy(cell, deltaRow, deltaColumn) {
    return table(cell).bind(function (table) {
      var warehouse = getWarehouse(table);
      return moveBy$1(warehouse, cell, deltaRow, deltaColumn);
    });
  };

  var intercepts = function intercepts(table, first, last) {
    var warehouse = getWarehouse(table);
    return intercepts$1(warehouse, first, last);
  };

  var nestedIntercepts = function nestedIntercepts(table, first, firstTable, last, lastTable) {
    var warehouse = getWarehouse(table);
    var optStartCell = eq$1(table, firstTable) ? Optional.some(first) : parentCell(warehouse, first);
    var optLastCell = eq$1(table, lastTable) ? Optional.some(last) : parentCell(warehouse, last);
    return optStartCell.bind(function (startCell) {
      return optLastCell.bind(function (lastCell) {
        return intercepts$1(warehouse, startCell, lastCell);
      });
    });
  };

  var getBox = function getBox(table, first, last) {
    var warehouse = getWarehouse(table);
    return getBox$1(warehouse, first, last);
  };

  var getWarehouse = Warehouse.fromTable;
  var TagBoundaries = ['body', 'p', 'div', 'article', 'aside', 'figcaption', 'figure', 'footer', 'header', 'nav', 'section', 'ol', 'ul', 'li', 'table', 'thead', 'tbody', 'tfoot', 'caption', 'tr', 'td', 'th', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'address'];

  var DomUniverse = function DomUniverse() {
    var clone = function clone(element) {
      return SugarElement.fromDom(element.dom.cloneNode(false));
    };

    var document = function document(element) {
      return documentOrOwner(element).dom;
    };

    var isBoundary = function isBoundary(element) {
      if (!isElement(element)) {
        return false;
      }

      if (name(element) === 'body') {
        return true;
      }

      return contains$2(TagBoundaries, name(element));
    };

    var isEmptyTag = function isEmptyTag(element) {
      if (!isElement(element)) {
        return false;
      }

      return contains$2(['br', 'img', 'hr', 'input'], name(element));
    };

    var isNonEditable = function isNonEditable(element) {
      return isElement(element) && get$b(element, 'contenteditable') === 'false';
    };

    var comparePosition = function comparePosition(element, other) {
      return element.dom.compareDocumentPosition(other.dom);
    };

    var copyAttributesTo = function copyAttributesTo(source, destination) {
      var as = clone$2(source);
      setAll$1(destination, as);
    };

    var isSpecial = function isSpecial(element) {
      var tag = name(element);
      return contains$2(['script', 'noscript', 'iframe', 'noframes', 'noembed', 'title', 'style', 'textarea', 'xmp'], tag);
    };

    var getLanguage = function getLanguage(element) {
      return isElement(element) ? getOpt(element, 'lang') : Optional.none();
    };

    return {
      up: constant({
        selector: ancestor$1,
        closest: closest$1,
        predicate: ancestor$2,
        all: parents
      }),
      down: constant({
        selector: descendants,
        predicate: descendants$1
      }),
      styles: constant({
        get: get$a,
        getRaw: getRaw$2,
        set: set$1,
        remove: remove$5
      }),
      attrs: constant({
        get: get$b,
        set: set$2,
        remove: remove$7,
        copyTo: copyAttributesTo
      }),
      insert: constant({
        before: before$3,
        after: after$5,
        afterAll: after$4,
        append: append$1,
        appendAll: append,
        prepend: prepend,
        wrap: wrap
      }),
      remove: constant({
        unwrap: unwrap,
        remove: remove$6
      }),
      create: constant({
        nu: SugarElement.fromTag,
        clone: clone,
        text: SugarElement.fromText
      }),
      query: constant({
        comparePosition: comparePosition,
        prevSibling: prevSibling,
        nextSibling: nextSibling
      }),
      property: constant({
        children: children$2,
        name: name,
        parent: parent,
        document: document,
        isText: isText,
        isComment: isComment,
        isElement: isElement,
        isSpecial: isSpecial,
        getLanguage: getLanguage,
        getText: get$6,
        setText: set,
        isBoundary: isBoundary,
        isEmptyTag: isEmptyTag,
        isNonEditable: isNonEditable
      }),
      eq: eq$1,
      is: is$1
    };
  };

  var all = function all(universe, look, elements, f) {
    var head = elements[0];
    var tail = elements.slice(1);
    return f(universe, look, head, tail);
  };

  var oneAll = function oneAll(universe, look, elements) {
    return elements.length > 0 ? all(universe, look, elements, unsafeOne) : Optional.none();
  };

  var unsafeOne = function unsafeOne(universe, look, head, tail) {
    var start = look(universe, head);
    return foldr(tail, function (b, a) {
      var current = look(universe, a);
      return commonElement(universe, b, current);
    }, start);
  };

  var commonElement = function commonElement(universe, start, end) {
    return start.bind(function (s) {
      return end.filter(curry(universe.eq, s));
    });
  };

  var eq = function eq(universe, item) {
    return curry(universe.eq, item);
  };

  var ancestors$2 = function ancestors$2(universe, start, end) {
    var isRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : never;
    var ps1 = [start].concat(universe.up().all(start));
    var ps2 = [end].concat(universe.up().all(end));

    var prune = function prune(path) {
      var index = findIndex(path, isRoot);
      return index.fold(function () {
        return path;
      }, function (ind) {
        return path.slice(0, ind + 1);
      });
    };

    var pruned1 = prune(ps1);
    var pruned2 = prune(ps2);
    var shared = find$1(pruned1, function (x) {
      return exists(pruned2, eq(universe, x));
    });
    return {
      firstpath: pruned1,
      secondpath: pruned2,
      shared: shared
    };
  };

  var sharedOne$1 = oneAll;
  var ancestors$1 = ancestors$2;
  var universe$3 = DomUniverse();

  var sharedOne = function sharedOne(look, elements) {
    return sharedOne$1(universe$3, function (_universe, element) {
      return look(element);
    }, elements);
  };

  var ancestors = function ancestors(start, finish, isRoot) {
    return ancestors$1(universe$3, start, finish, isRoot);
  };

  var lookupTable = function lookupTable(container) {
    return ancestor$1(container, 'table');
  };

  var identify = function identify(start, finish, isRoot) {
    var getIsRoot = function getIsRoot(rootTable) {
      return function (element) {
        return isRoot !== undefined && isRoot(element) || eq$1(element, rootTable);
      };
    };

    if (eq$1(start, finish)) {
      return Optional.some({
        boxes: Optional.some([start]),
        start: start,
        finish: finish
      });
    } else {
      return lookupTable(start).bind(function (startTable) {
        return lookupTable(finish).bind(function (finishTable) {
          if (eq$1(startTable, finishTable)) {
            return Optional.some({
              boxes: intercepts(startTable, start, finish),
              start: start,
              finish: finish
            });
          } else if (contains$1(startTable, finishTable)) {
            var ancestorCells = ancestors$3(finish, 'td,th', getIsRoot(startTable));
            var finishCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : finish;
            return Optional.some({
              boxes: nestedIntercepts(startTable, start, startTable, finish, finishTable),
              start: start,
              finish: finishCell
            });
          } else if (contains$1(finishTable, startTable)) {
            var _ancestorCells = ancestors$3(start, 'td,th', getIsRoot(finishTable));

            var startCell = _ancestorCells.length > 0 ? _ancestorCells[_ancestorCells.length - 1] : start;
            return Optional.some({
              boxes: nestedIntercepts(finishTable, start, startTable, finish, finishTable),
              start: start,
              finish: startCell
            });
          } else {
            return ancestors(start, finish).shared.bind(function (lca) {
              return closest$1(lca, 'table', isRoot).bind(function (lcaTable) {
                var finishAncestorCells = ancestors$3(finish, 'td,th', getIsRoot(lcaTable));
                var finishCell = finishAncestorCells.length > 0 ? finishAncestorCells[finishAncestorCells.length - 1] : finish;
                var startAncestorCells = ancestors$3(start, 'td,th', getIsRoot(lcaTable));
                var startCell = startAncestorCells.length > 0 ? startAncestorCells[startAncestorCells.length - 1] : start;
                return Optional.some({
                  boxes: nestedIntercepts(lcaTable, start, startTable, finish, finishTable),
                  start: startCell,
                  finish: finishCell
                });
              });
            });
          }
        });
      });
    }
  };

  var retrieve$1 = function retrieve$1(container, selector) {
    var sels = descendants(container, selector);
    return sels.length > 0 ? Optional.some(sels) : Optional.none();
  };

  var getLast = function getLast(boxes, lastSelectedSelector) {
    return find$1(boxes, function (box) {
      return is$2(box, lastSelectedSelector);
    });
  };

  var getEdges = function getEdges(container, firstSelectedSelector, lastSelectedSelector) {
    return descendant(container, firstSelectedSelector).bind(function (first) {
      return descendant(container, lastSelectedSelector).bind(function (last) {
        return sharedOne(lookupTable, [first, last]).map(function (table) {
          return {
            first: first,
            last: last,
            table: table
          };
        });
      });
    });
  };

  var expandTo = function expandTo(finish, firstSelectedSelector) {
    return ancestor$1(finish, 'table').bind(function (table) {
      return descendant(table, firstSelectedSelector).bind(function (start) {
        return identify(start, finish).bind(function (identified) {
          return identified.boxes.map(function (boxes) {
            return {
              boxes: boxes,
              start: identified.start,
              finish: identified.finish
            };
          });
        });
      });
    });
  };

  var shiftSelection = function shiftSelection(boxes, deltaRow, deltaColumn, firstSelectedSelector, lastSelectedSelector) {
    return getLast(boxes, lastSelectedSelector).bind(function (last) {
      return moveBy(last, deltaRow, deltaColumn).bind(function (finish) {
        return expandTo(finish, firstSelectedSelector);
      });
    });
  };

  var retrieve = function retrieve(container, selector) {
    return retrieve$1(container, selector);
  };

  var retrieveBox = function retrieveBox(container, firstSelectedSelector, lastSelectedSelector) {
    return getEdges(container, firstSelectedSelector, lastSelectedSelector).bind(function (edges) {
      var isRoot = function isRoot(ancestor) {
        return eq$1(container, ancestor);
      };

      var sectionSelector = 'thead,tfoot,tbody,table';
      var firstAncestor = ancestor$1(edges.first, sectionSelector, isRoot);
      var lastAncestor = ancestor$1(edges.last, sectionSelector, isRoot);
      return firstAncestor.bind(function (fA) {
        return lastAncestor.bind(function (lA) {
          return eq$1(fA, lA) ? getBox(edges.table, edges.first, edges.last) : Optional.none();
        });
      });
    });
  };

  var selection = identity;

  var unmergable = function unmergable(selectedCells) {
    var hasSpan = function hasSpan(elem, type) {
      return getOpt(elem, type).exists(function (span) {
        return parseInt(span, 10) > 1;
      });
    };

    var hasRowOrColSpan = function hasRowOrColSpan(elem) {
      return hasSpan(elem, 'rowspan') || hasSpan(elem, 'colspan');
    };

    return selectedCells.length > 0 && forall(selectedCells, hasRowOrColSpan) ? Optional.some(selectedCells) : Optional.none();
  };

  var mergable = function mergable(table, selectedCells, ephemera) {
    if (selectedCells.length <= 1) {
      return Optional.none();
    } else {
      return retrieveBox(table, ephemera.firstSelectedSelector, ephemera.lastSelectedSelector).map(function (bounds) {
        return {
          bounds: bounds,
          cells: selectedCells
        };
      });
    }
  };

  var strSelected = 'data-mce-selected';
  var strSelectedSelector = 'td[' + strSelected + '],th[' + strSelected + ']';
  var strAttributeSelector = '[' + strSelected + ']';
  var strFirstSelected = 'data-mce-first-selected';
  var strFirstSelectedSelector = 'td[' + strFirstSelected + '],th[' + strFirstSelected + ']';
  var strLastSelected = 'data-mce-last-selected';
  var strLastSelectedSelector = 'td[' + strLastSelected + '],th[' + strLastSelected + ']';
  var attributeSelector = strAttributeSelector;
  var ephemera = {
    selected: strSelected,
    selectedSelector: strSelectedSelector,
    firstSelected: strFirstSelected,
    firstSelectedSelector: strFirstSelectedSelector,
    lastSelected: strLastSelected,
    lastSelectedSelector: strLastSelectedSelector
  };

  var forMenu = function forMenu(selectedCells, table, cell) {
    return {
      element: cell,
      mergable: mergable(table, selectedCells, ephemera),
      unmergable: unmergable(selectedCells),
      selection: selection(selectedCells)
    };
  };

  var paste = function paste(element, clipboard, generators) {
    return {
      element: element,
      clipboard: clipboard,
      generators: generators
    };
  };

  var pasteRows = function pasteRows(selectedCells, _cell, clipboard, generators) {
    return {
      selection: selection(selectedCells),
      clipboard: clipboard,
      generators: generators
    };
  };

  var getSelectionCellFallback = function getSelectionCellFallback(element) {
    return table(element).bind(function (table) {
      return retrieve(table, ephemera.firstSelectedSelector);
    }).fold(constant(element), function (cells) {
      return cells[0];
    });
  };

  var getSelectionFromSelector = function getSelectionFromSelector(selector) {
    return function (initCell, isRoot) {
      var cellName = name(initCell);
      var cell = cellName === 'col' || cellName === 'colgroup' ? getSelectionCellFallback(initCell) : initCell;
      return closest$1(cell, selector, isRoot);
    };
  };

  var getSelectionCellOrCaption = getSelectionFromSelector('th,td,caption');
  var getSelectionCell = getSelectionFromSelector('th,td');

  var getCellsFromSelection = function getCellsFromSelection(editor) {
    return fromDom(editor.model.table.getSelectedCells());
  };

  var getCellsFromFakeSelection = function getCellsFromFakeSelection(editor) {
    return filter$2(getCellsFromSelection(editor), function (cell) {
      return is$2(cell, ephemera.selectedSelector);
    });
  };

  var extractSelected = function extractSelected(cells) {
    return table(cells[0]).map(function (table) {
      var replica = extract$1(table, attributeSelector);
      removeDataStyle(replica);
      return [replica];
    });
  };

  var serializeElements = function serializeElements(editor, elements) {
    return map$1(elements, function (elm) {
      return editor.selection.serializer.serialize(elm.dom, {});
    }).join('');
  };

  var getTextContent = function getTextContent(elements) {
    return map$1(elements, function (element) {
      return element.dom.innerText;
    }).join('');
  };

  var registerEvents = function registerEvents(editor, actions) {
    editor.on('BeforeGetContent', function (e) {
      var multiCellContext = function multiCellContext(cells) {
        e.preventDefault();
        extractSelected(cells).each(function (elements) {
          e.content = e.format === 'text' ? getTextContent(elements) : serializeElements(editor, elements);
        });
      };

      if (e.selection === true) {
        var _cells3 = getCellsFromFakeSelection(editor);

        if (_cells3.length >= 1) {
          multiCellContext(_cells3);
        }
      }
    });
    editor.on('BeforeSetContent', function (e) {
      if (e.selection === true && e.paste === true) {
        var selectedCells = getCellsFromSelection(editor);
        head(selectedCells).each(function (cell) {
          table(cell).each(function (table) {
            var elements = filter$2(fromHtml(e.content), function (content) {
              return name(content) !== 'meta';
            });
            var isTable = isTag('table');

            if (elements.length === 1 && isTable(elements[0])) {
              e.preventDefault();
              var doc = SugarElement.fromDom(editor.getDoc());
              var generators = paste$1(doc);
              var targets = paste(cell, elements[0], generators);
              actions.pasteCells(table, targets).each(function () {
                editor.focus();
              });
            }
          });
        });
      }
    });
  };

  var point = function point(element, offset) {
    return {
      element: element,
      offset: offset
    };
  };

  var scan$1 = function scan$1(universe, element, direction) {
    if (universe.property().isText(element) && universe.property().getText(element).trim().length === 0 || universe.property().isComment(element)) {
      return direction(element).bind(function (elem) {
        return scan$1(universe, elem, direction).orThunk(function () {
          return Optional.some(elem);
        });
      });
    } else {
      return Optional.none();
    }
  };

  var toEnd = function toEnd(universe, element) {
    if (universe.property().isText(element)) {
      return universe.property().getText(element).length;
    }

    var children = universe.property().children(element);
    return children.length;
  };

  var freefallRtl$2 = function freefallRtl$2(universe, element) {
    var candidate = scan$1(universe, element, universe.query().prevSibling).getOr(element);

    if (universe.property().isText(candidate)) {
      return point(candidate, toEnd(universe, candidate));
    }

    var children = universe.property().children(candidate);
    return children.length > 0 ? freefallRtl$2(universe, children[children.length - 1]) : point(candidate, toEnd(universe, candidate));
  };

  var freefallRtl$1 = freefallRtl$2;
  var universe$2 = DomUniverse();

  var freefallRtl = function freefallRtl(element) {
    return freefallRtl$1(universe$2, element);
  };

  var halve = function halve(main, other) {
    if (!hasColspan(main)) {
      var _width = getGenericWidth(main);

      _width.each(function (w) {
        var newWidth = w.value / 2;
        setGenericWidth(main, newWidth, w.unit);
        setGenericWidth(other, newWidth, w.unit);
      });
    }
  };

  var zero = function zero(array) {
    return map$1(array, constant(0));
  };

  var surround = function surround(sizes, startIndex, endIndex, results, f) {
    return f(sizes.slice(0, startIndex)).concat(results).concat(f(sizes.slice(endIndex)));
  };

  var clampDeltaHelper = function clampDeltaHelper(predicate) {
    return function (sizes, index, delta, minCellSize) {
      if (!predicate(delta)) {
        return delta;
      } else {
        var newSize = Math.max(minCellSize, sizes[index] - Math.abs(delta));
        var diff = Math.abs(newSize - sizes[index]);
        return delta >= 0 ? diff : -diff;
      }
    };
  };

  var clampNegativeDelta = clampDeltaHelper(function (delta) {
    return delta < 0;
  });
  var clampDelta = clampDeltaHelper(always);

  var resizeTable = function resizeTable() {
    var calcFixedDeltas = function calcFixedDeltas(sizes, index, next, delta, minCellSize) {
      var clampedDelta = clampNegativeDelta(sizes, index, delta, minCellSize);
      return surround(sizes, index, next + 1, [clampedDelta, 0], zero);
    };

    var calcRelativeDeltas = function calcRelativeDeltas(sizes, index, delta, minCellSize) {
      var ratio = (100 + delta) / 100;
      var newThis = Math.max(minCellSize, (sizes[index] + delta) / ratio);
      return map$1(sizes, function (size, idx) {
        var newSize = idx === index ? newThis : size / ratio;
        return newSize - size;
      });
    };

    var calcLeftEdgeDeltas = function calcLeftEdgeDeltas(sizes, index, next, delta, minCellSize, isRelative) {
      if (isRelative) {
        return calcRelativeDeltas(sizes, index, delta, minCellSize);
      } else {
        return calcFixedDeltas(sizes, index, next, delta, minCellSize);
      }
    };

    var calcMiddleDeltas = function calcMiddleDeltas(sizes, _prev, index, next, delta, minCellSize, isRelative) {
      return calcLeftEdgeDeltas(sizes, index, next, delta, minCellSize, isRelative);
    };

    var resizeTable = function resizeTable(resizer, delta) {
      return resizer(delta);
    };

    var calcRightEdgeDeltas = function calcRightEdgeDeltas(sizes, _prev, index, delta, minCellSize, isRelative) {
      if (isRelative) {
        return calcRelativeDeltas(sizes, index, delta, minCellSize);
      } else {
        var clampedDelta = clampNegativeDelta(sizes, index, delta, minCellSize);
        return zero(sizes.slice(0, index)).concat([clampedDelta]);
      }
    };

    var calcRedestributedWidths = function calcRedestributedWidths(sizes, totalWidth, pixelDelta, isRelative) {
      if (isRelative) {
        var tableWidth = totalWidth + pixelDelta;
        var ratio = tableWidth / totalWidth;
        var newSizes = map$1(sizes, function (size) {
          return size / ratio;
        });
        return {
          delta: ratio * 100 - 100,
          newSizes: newSizes
        };
      } else {
        return {
          delta: pixelDelta,
          newSizes: sizes
        };
      }
    };

    return {
      resizeTable: resizeTable,
      clampTableDelta: clampNegativeDelta,
      calcLeftEdgeDeltas: calcLeftEdgeDeltas,
      calcMiddleDeltas: calcMiddleDeltas,
      calcRightEdgeDeltas: calcRightEdgeDeltas,
      calcRedestributedWidths: calcRedestributedWidths
    };
  };

  var preserveTable = function preserveTable() {
    var calcLeftEdgeDeltas = function calcLeftEdgeDeltas(sizes, index, next, delta, minCellSize) {
      var idx = delta >= 0 ? next : index;
      var clampedDelta = clampDelta(sizes, idx, delta, minCellSize);
      return surround(sizes, index, next + 1, [clampedDelta, -clampedDelta], zero);
    };

    var calcMiddleDeltas = function calcMiddleDeltas(sizes, _prev, index, next, delta, minCellSize) {
      return calcLeftEdgeDeltas(sizes, index, next, delta, minCellSize);
    };

    var resizeTable = function resizeTable(resizer, delta, isLastColumn) {
      if (isLastColumn) {
        resizer(delta);
      }
    };

    var calcRightEdgeDeltas = function calcRightEdgeDeltas(sizes, _prev, _index, delta, _minCellSize, isRelative) {
      if (isRelative) {
        return zero(sizes);
      } else {
        var diff = delta / sizes.length;
        return map$1(sizes, constant(diff));
      }
    };

    var clampTableDelta = function clampTableDelta(sizes, index, delta, minCellSize, isLastColumn) {
      if (isLastColumn) {
        if (delta >= 0) {
          return delta;
        } else {
          var maxDelta = foldl(sizes, function (a, b) {
            return a + b - minCellSize;
          }, 0);
          return Math.max(-maxDelta, delta);
        }
      } else {
        return clampNegativeDelta(sizes, index, delta, minCellSize);
      }
    };

    var calcRedestributedWidths = function calcRedestributedWidths(sizes, _totalWidth, _pixelDelta, _isRelative) {
      return {
        delta: 0,
        newSizes: sizes
      };
    };

    return {
      resizeTable: resizeTable,
      clampTableDelta: clampTableDelta,
      calcLeftEdgeDeltas: calcLeftEdgeDeltas,
      calcMiddleDeltas: calcMiddleDeltas,
      calcRightEdgeDeltas: calcRightEdgeDeltas,
      calcRedestributedWidths: calcRedestributedWidths
    };
  };

  var getGridSize = function getGridSize(table) {
    var warehouse = Warehouse.fromTable(table);
    return warehouse.grid;
  };

  var isHeaderCell = isTag('th');

  var isHeaderCells = function isHeaderCells(cells) {
    return forall(cells, function (cell) {
      return isHeaderCell(cell.element);
    });
  };

  var getRowHeaderType = function getRowHeaderType(isHeaderRow, isHeaderCells) {
    if (isHeaderRow && isHeaderCells) {
      return 'sectionCells';
    } else if (isHeaderRow) {
      return 'section';
    } else {
      return 'cells';
    }
  };

  var getRowType = function getRowType(row) {
    var isHeaderRow = row.section === 'thead';
    var isHeaderCells = is(findCommonCellType(row.cells), 'th');

    if (row.section === 'tfoot') {
      return {
        type: 'footer'
      };
    } else if (isHeaderRow || isHeaderCells) {
      return {
        type: 'header',
        subType: getRowHeaderType(isHeaderRow, isHeaderCells)
      };
    } else {
      return {
        type: 'body'
      };
    }
  };

  var findCommonCellType = function findCommonCellType(cells) {
    var headerCells = filter$2(cells, function (cell) {
      return isHeaderCell(cell.element);
    });

    if (headerCells.length === 0) {
      return Optional.some('td');
    } else if (headerCells.length === cells.length) {
      return Optional.some('th');
    } else {
      return Optional.none();
    }
  };

  var findCommonRowType = function findCommonRowType(rows) {
    var rowTypes = map$1(rows, function (row) {
      return getRowType(row).type;
    });
    var hasHeader = contains$2(rowTypes, 'header');
    var hasFooter = contains$2(rowTypes, 'footer');

    if (!hasHeader && !hasFooter) {
      return Optional.some('body');
    } else {
      var hasBody = contains$2(rowTypes, 'body');

      if (hasHeader && !hasBody && !hasFooter) {
        return Optional.some('header');
      } else if (!hasHeader && !hasBody && hasFooter) {
        return Optional.some('footer');
      } else {
        return Optional.none();
      }
    }
  };

  var findTableRowHeaderType = function findTableRowHeaderType(warehouse) {
    return findMap(warehouse.all, function (row) {
      var rowType = getRowType(row);
      return rowType.type === 'header' ? Optional.from(rowType.subType) : Optional.none();
    });
  };

  var transformCell = function transformCell(cell, comparator, substitution) {
    return elementnew(substitution(cell.element, comparator), true, cell.isLocked);
  };

  var _transformRow = function transformRow(row, section) {
    return row.section !== section ? rowcells(row.element, row.cells, section, row.isNew) : row;
  };

  var section = function section() {
    return {
      transformRow: _transformRow,
      transformCell: function transformCell(cell, comparator, substitution) {
        var newCell = substitution(cell.element, comparator);
        var fixedCell = name(newCell) !== 'td' ? mutate$1(newCell, 'td') : newCell;
        return elementnew(fixedCell, cell.isNew, cell.isLocked);
      }
    };
  };

  var sectionCells = function sectionCells() {
    return {
      transformRow: _transformRow,
      transformCell: transformCell
    };
  };

  var cells = function cells() {
    return {
      transformRow: function transformRow(row, section) {
        var newSection = section === 'thead' ? 'tbody' : section;
        return _transformRow(row, newSection);
      },
      transformCell: transformCell
    };
  };

  var fallback = function fallback() {
    return {
      transformRow: identity,
      transformCell: transformCell
    };
  };

  var getTableSectionType = function getTableSectionType(table, fallback) {
    var warehouse = Warehouse.fromTable(table);
    var type = findTableRowHeaderType(warehouse).getOr(fallback);

    switch (type) {
      case 'section':
        return section();

      case 'sectionCells':
        return sectionCells();

      case 'cells':
        return cells();
    }
  };

  var TableSection = {
    getTableSectionType: getTableSectionType,
    section: section,
    sectionCells: sectionCells,
    cells: cells,
    fallback: fallback
  };

  var closest = function closest(target) {
    return closest$1(target, '[contenteditable]');
  };

  var isEditable$1 = function isEditable$1(element) {
    var assumeEditable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (inBody(element)) {
      return element.dom.isContentEditable;
    } else {
      return closest(element).fold(constant(assumeEditable), function (editable) {
        return getRaw(editable) === 'true';
      });
    }
  };

  var getRaw = function getRaw(element) {
    return element.dom.contentEditable;
  };

  var setIfNot = function setIfNot(element, property, value, ignore) {
    if (value === ignore) {
      remove$7(element, property);
    } else {
      set$2(element, property, value);
    }
  };

  var insert$1 = function insert$1(table, selector, element) {
    last$2(children(table, selector)).fold(function () {
      return prepend(table, element);
    }, function (child) {
      return after$5(child, element);
    });
  };

  var generateSection = function generateSection(table, sectionName) {
    var section = child(table, sectionName).getOrThunk(function () {
      var newSection = SugarElement.fromTag(sectionName, owner(table).dom);

      if (sectionName === 'thead') {
        insert$1(table, 'caption,colgroup', newSection);
      } else if (sectionName === 'colgroup') {
        insert$1(table, 'caption', newSection);
      } else {
        append$1(table, newSection);
      }

      return newSection;
    });
    empty(section);
    return section;
  };

  var render$1 = function render$1(table, grid) {
    var newRows = [];
    var newCells = [];

    var syncRows = function syncRows(gridSection) {
      return map$1(gridSection, function (row) {
        if (row.isNew) {
          newRows.push(row.element);
        }

        var tr = row.element;
        empty(tr);
        each$2(row.cells, function (cell) {
          if (cell.isNew) {
            newCells.push(cell.element);
          }

          setIfNot(cell.element, 'colspan', cell.colspan, 1);
          setIfNot(cell.element, 'rowspan', cell.rowspan, 1);
          append$1(tr, cell.element);
        });
        return tr;
      });
    };

    var syncColGroup = function syncColGroup(gridSection) {
      return bind$2(gridSection, function (colGroup) {
        return map$1(colGroup.cells, function (col) {
          setIfNot(col.element, 'span', col.colspan, 1);
          return col.element;
        });
      });
    };

    var renderSection = function renderSection(gridSection, sectionName) {
      var section = generateSection(table, sectionName);
      var sync = sectionName === 'colgroup' ? syncColGroup : syncRows;
      var sectionElems = sync(gridSection);
      append(section, sectionElems);
    };

    var removeSection = function removeSection(sectionName) {
      child(table, sectionName).each(remove$6);
    };

    var renderOrRemoveSection = function renderOrRemoveSection(gridSection, sectionName) {
      if (gridSection.length > 0) {
        renderSection(gridSection, sectionName);
      } else {
        removeSection(sectionName);
      }
    };

    var headSection = [];
    var bodySection = [];
    var footSection = [];
    var columnGroupsSection = [];
    each$2(grid, function (row) {
      switch (row.section) {
        case 'thead':
          headSection.push(row);
          break;

        case 'tbody':
          bodySection.push(row);
          break;

        case 'tfoot':
          footSection.push(row);
          break;

        case 'colgroup':
          columnGroupsSection.push(row);
          break;
      }
    });
    renderOrRemoveSection(columnGroupsSection, 'colgroup');
    renderOrRemoveSection(headSection, 'thead');
    renderOrRemoveSection(bodySection, 'tbody');
    renderOrRemoveSection(footSection, 'tfoot');
    return {
      newRows: newRows,
      newCells: newCells
    };
  };

  var copy = function copy(grid) {
    return map$1(grid, function (row) {
      var tr = shallow(row.element);
      each$2(row.cells, function (cell) {
        var clonedCell = deep(cell.element);
        setIfNot(clonedCell, 'colspan', cell.colspan, 1);
        setIfNot(clonedCell, 'rowspan', cell.rowspan, 1);
        append$1(tr, clonedCell);
      });
      return tr;
    });
  };

  var getColumn = function getColumn(grid, index) {
    return map$1(grid, function (row) {
      return getCell(row, index);
    });
  };

  var getRow = function getRow(grid, index) {
    return grid[index];
  };

  var findDiff = function findDiff(xs, comp) {
    if (xs.length === 0) {
      return 0;
    }

    var first = xs[0];
    var index = findIndex(xs, function (x) {
      return !comp(first.element, x.element);
    });
    return index.getOr(xs.length);
  };

  var subgrid = function subgrid(grid, row, column, comparator) {
    var gridRow = getRow(grid, row);
    var isColRow = gridRow.section === 'colgroup';
    var colspan = findDiff(gridRow.cells.slice(column), comparator);
    var rowspan = isColRow ? 1 : findDiff(getColumn(grid.slice(row), column), comparator);
    return {
      colspan: colspan,
      rowspan: rowspan
    };
  };

  var toDetails = function toDetails(grid, comparator) {
    var seen = map$1(grid, function (row) {
      return map$1(row.cells, never);
    });

    var updateSeen = function updateSeen(rowIndex, columnIndex, rowspan, colspan) {
      for (var _row = rowIndex; _row < rowIndex + rowspan; _row++) {
        for (var column = columnIndex; column < columnIndex + colspan; column++) {
          seen[_row][column] = true;
        }
      }
    };

    return map$1(grid, function (row, rowIndex) {
      var details = bind$2(row.cells, function (cell, columnIndex) {
        if (seen[rowIndex][columnIndex] === false) {
          var result = subgrid(grid, rowIndex, columnIndex, comparator);
          updateSeen(rowIndex, columnIndex, result.rowspan, result.colspan);
          return [detailnew(cell.element, result.rowspan, result.colspan, cell.isNew)];
        } else {
          return [];
        }
      });
      return rowdetailnew(row.element, details, row.section, row.isNew);
    });
  };

  var toGrid = function toGrid(warehouse, generators, isNew) {
    var grid = [];
    each$2(warehouse.colgroups, function (colgroup) {
      var colgroupCols = [];

      for (var columnIndex = 0; columnIndex < warehouse.grid.columns; columnIndex++) {
        var element = Warehouse.getColumnAt(warehouse, columnIndex).map(function (column) {
          return elementnew(column.element, isNew, false);
        }).getOrThunk(function () {
          return elementnew(generators.colGap(), true, false);
        });
        colgroupCols.push(element);
      }

      grid.push(rowcells(colgroup.element, colgroupCols, 'colgroup', isNew));
    });

    for (var rowIndex = 0; rowIndex < warehouse.grid.rows; rowIndex++) {
      var rowCells = [];

      for (var columnIndex = 0; columnIndex < warehouse.grid.columns; columnIndex++) {
        var element = Warehouse.getAt(warehouse, rowIndex, columnIndex).map(function (item) {
          return elementnew(item.element, isNew, item.isLocked);
        }).getOrThunk(function () {
          return elementnew(generators.gap(), true, false);
        });
        rowCells.push(element);
      }

      var rowDetail = warehouse.all[rowIndex];

      var _row2 = rowcells(rowDetail.element, rowCells, rowDetail.section, isNew);

      grid.push(_row2);
    }

    return grid;
  };

  var fromWarehouse = function fromWarehouse(warehouse, generators) {
    return toGrid(warehouse, generators, false);
  };

  var toDetailList = function toDetailList(grid) {
    return toDetails(grid, eq$1);
  };

  var findInWarehouse = function findInWarehouse(warehouse, element) {
    return findMap(warehouse.all, function (r) {
      return find$1(r.cells, function (e) {
        return eq$1(element, e.element);
      });
    });
  };

  var extractCells = function extractCells(warehouse, target, predicate) {
    var details = map$1(target.selection, function (cell$1) {
      return cell(cell$1).bind(function (lc) {
        return findInWarehouse(warehouse, lc);
      }).filter(predicate);
    });
    var cells = cat(details);
    return someIf(cells.length > 0, cells);
  };

  var run = function run(operation, extract, adjustment, postAction, genWrappers) {
    return function (table, target, generators, behaviours) {
      var warehouse = Warehouse.fromTable(table);
      var tableSection = Optional.from(behaviours === null || behaviours === void 0 ? void 0 : behaviours.section).getOrThunk(TableSection.fallback);
      var output = extract(warehouse, target).map(function (info) {
        var model = fromWarehouse(warehouse, generators);
        var result = operation(model, info, eq$1, genWrappers(generators), tableSection);
        var lockedColumns = getLockedColumnsFromGrid(result.grid);
        var grid = toDetailList(result.grid);
        return {
          info: info,
          grid: grid,
          cursor: result.cursor,
          lockedColumns: lockedColumns
        };
      });
      return output.bind(function (out) {
        var newElements = render$1(table, out.grid);
        var tableSizing = Optional.from(behaviours === null || behaviours === void 0 ? void 0 : behaviours.sizing).getOrThunk(function () {
          return TableSize.getTableSize(table);
        });
        var resizing = Optional.from(behaviours === null || behaviours === void 0 ? void 0 : behaviours.resize).getOrThunk(preserveTable);
        adjustment(table, out.grid, out.info, {
          sizing: tableSizing,
          resize: resizing,
          section: tableSection
        });
        postAction(table);
        remove$7(table, LOCKED_COL_ATTR);

        if (out.lockedColumns.length > 0) {
          set$2(table, LOCKED_COL_ATTR, out.lockedColumns.join(','));
        }

        return Optional.some({
          cursor: out.cursor,
          newRows: newElements.newRows,
          newCells: newElements.newCells
        });
      });
    };
  };

  var onPaste = function onPaste(warehouse, target) {
    return cell(target.element).bind(function (cell) {
      return findInWarehouse(warehouse, cell).map(function (details) {
        var value = _objectSpread({}, details, {
          generators: target.generators,
          clipboard: target.clipboard
        });

        return value;
      });
    });
  };

  var onPasteByEditor = function onPasteByEditor(warehouse, target) {
    return extractCells(warehouse, target, always).map(function (cells) {
      return {
        cells: cells,
        generators: target.generators,
        clipboard: target.clipboard
      };
    });
  };

  var onMergable = function onMergable(_warehouse, target) {
    return target.mergable;
  };

  var onUnmergable = function onUnmergable(_warehouse, target) {
    return target.unmergable;
  };

  var onCells = function onCells(warehouse, target) {
    return extractCells(warehouse, target, always);
  };

  var onUnlockedCells = function onUnlockedCells(warehouse, target) {
    return extractCells(warehouse, target, function (detail) {
      return !detail.isLocked;
    });
  };

  var isUnlockedTableCell = function isUnlockedTableCell(warehouse, cell) {
    return findInWarehouse(warehouse, cell).exists(function (detail) {
      return !detail.isLocked;
    });
  };

  var allUnlocked = function allUnlocked(warehouse, cells) {
    return forall(cells, function (cell) {
      return isUnlockedTableCell(warehouse, cell);
    });
  };

  var onUnlockedMergable = function onUnlockedMergable(warehouse, target) {
    return onMergable(warehouse, target).filter(function (mergeable) {
      return allUnlocked(warehouse, mergeable.cells);
    });
  };

  var onUnlockedUnmergable = function onUnlockedUnmergable(warehouse, target) {
    return onUnmergable(warehouse, target).filter(function (cells) {
      return allUnlocked(warehouse, cells);
    });
  };

  var merge$2 = function merge$2(grid, bounds, comparator, substitution) {
    var rows = extractGridDetails(grid).rows;

    if (rows.length === 0) {
      return grid;
    }

    for (var i = bounds.startRow; i <= bounds.finishRow; i++) {
      for (var j = bounds.startCol; j <= bounds.finishCol; j++) {
        var _row3 = rows[i];
        var isLocked = getCell(_row3, j).isLocked;
        mutateCell(_row3, j, elementnew(substitution(), false, isLocked));
      }
    }

    return grid;
  };

  var unmerge = function unmerge(grid, target, comparator, substitution) {
    var rows = extractGridDetails(grid).rows;
    var first = true;

    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < cellLength(rows[0]); j++) {
        var _row4 = rows[i];
        var currentCell = getCell(_row4, j);
        var currentCellElm = currentCell.element;
        var isToReplace = comparator(currentCellElm, target);

        if (isToReplace && !first) {
          mutateCell(_row4, j, elementnew(substitution(), true, currentCell.isLocked));
        } else if (isToReplace) {
          first = false;
        }
      }
    }

    return grid;
  };

  var uniqueCells = function uniqueCells(row, comparator) {
    return foldl(row, function (rest, cell) {
      return exists(rest, function (currentCell) {
        return comparator(currentCell.element, cell.element);
      }) ? rest : rest.concat([cell]);
    }, []);
  };

  var splitCols = function splitCols(grid, index, comparator, substitution) {
    if (index > 0 && index < grid[0].cells.length) {
      each$2(grid, function (row) {
        var prevCell = row.cells[index - 1];
        var offset = 0;
        var substitute = substitution();

        while (row.cells.length > index + offset && comparator(prevCell.element, row.cells[index + offset].element)) {
          mutateCell(row, index + offset, elementnew(substitute, true, row.cells[index + offset].isLocked));
          offset++;
        }
      });
    }

    return grid;
  };

  var splitRows = function splitRows(grid, index, comparator, substitution) {
    var rows = extractGridDetails(grid).rows;

    if (index > 0 && index < rows.length) {
      var rowPrevCells = rows[index - 1].cells;

      var _cells4 = uniqueCells(rowPrevCells, comparator);

      each$2(_cells4, function (cell) {
        var replacement = Optional.none();

        for (var i = index; i < rows.length; i++) {
          var _loop = function _loop(j) {
            var row = rows[i];
            var current = getCell(row, j);
            var isToReplace = comparator(current.element, cell.element);

            if (isToReplace) {
              if (replacement.isNone()) {
                replacement = Optional.some(substitution());
              }

              replacement.each(function (sub) {
                mutateCell(row, j, elementnew(sub, true, current.isLocked));
              });
            }
          };

          for (var j = 0; j < cellLength(rows[0]); j++) {
            _loop(j);
          }
        }
      });
    }

    return grid;
  };

  var value$1 = function value$1(value) {
    var applyHelper = function applyHelper(fn) {
      return fn(value);
    };

    var constHelper = constant(value);

    var outputHelper = function outputHelper() {
      return output;
    };

    var output = {
      tag: true,
      inner: value,
      fold: function fold(_onError, onValue) {
        return onValue(value);
      },
      isValue: always,
      isError: never,
      map: function map(mapper) {
        return Result.value(mapper(value));
      },
      mapError: outputHelper,
      bind: applyHelper,
      exists: applyHelper,
      forall: applyHelper,
      getOr: constHelper,
      or: outputHelper,
      getOrThunk: constHelper,
      orThunk: outputHelper,
      getOrDie: constHelper,
      each: function each(fn) {
        fn(value);
      },
      toOptional: function toOptional() {
        return Optional.some(value);
      }
    };
    return output;
  };

  var error = function error(_error) {
    var outputHelper = function outputHelper() {
      return output;
    };

    var output = {
      tag: false,
      inner: _error,
      fold: function fold(onError, _onValue) {
        return onError(_error);
      },
      isValue: never,
      isError: always,
      map: outputHelper,
      mapError: function mapError(mapper) {
        return Result.error(mapper(_error));
      },
      bind: outputHelper,
      exists: never,
      forall: always,
      getOr: identity,
      or: identity,
      getOrThunk: apply,
      orThunk: apply,
      getOrDie: die(String(_error)),
      each: noop,
      toOptional: Optional.none
    };
    return output;
  };

  var fromOption = function fromOption(optional, err) {
    return optional.fold(function () {
      return error(err);
    }, value$1);
  };

  var Result = {
    value: value$1,
    error: error,
    fromOption: fromOption
  };

  var measure = function measure(startAddress, gridA, gridB) {
    if (startAddress.row >= gridA.length || startAddress.column > cellLength(gridA[0])) {
      return Result.error('invalid start address out of table bounds, row: ' + startAddress.row + ', column: ' + startAddress.column);
    }

    var rowRemainder = gridA.slice(startAddress.row);
    var colRemainder = rowRemainder[0].cells.slice(startAddress.column);
    var colRequired = cellLength(gridB[0]);
    var rowRequired = gridB.length;
    return Result.value({
      rowDelta: rowRemainder.length - rowRequired,
      colDelta: colRemainder.length - colRequired
    });
  };

  var measureWidth = function measureWidth(gridA, gridB) {
    var colLengthA = cellLength(gridA[0]);
    var colLengthB = cellLength(gridB[0]);
    return {
      rowDelta: 0,
      colDelta: colLengthA - colLengthB
    };
  };

  var measureHeight = function measureHeight(gridA, gridB) {
    var rowLengthA = gridA.length;
    var rowLengthB = gridB.length;
    return {
      rowDelta: rowLengthA - rowLengthB,
      colDelta: 0
    };
  };

  var generateElements = function generateElements(amount, row, generators, isLocked) {
    var generator = row.section === 'colgroup' ? generators.col : generators.cell;
    return range$1(amount, function (idx) {
      return elementnew(generator(), true, isLocked(idx));
    });
  };

  var rowFill = function rowFill(grid, amount, generators, lockedColumns) {
    var exampleRow = grid[grid.length - 1];
    return grid.concat(range$1(amount, function () {
      var generator = exampleRow.section === 'colgroup' ? generators.colgroup : generators.row;
      var row = clone(exampleRow, generator, identity);
      var elements = generateElements(row.cells.length, row, generators, function (idx) {
        return has$1(lockedColumns, idx.toString());
      });
      return setCells(row, elements);
    }));
  };

  var colFill = function colFill(grid, amount, generators, startIndex) {
    return map$1(grid, function (row) {
      var newChildren = generateElements(amount, row, generators, never);
      return addCells(row, startIndex, newChildren);
    });
  };

  var lockedColFill = function lockedColFill(grid, generators, lockedColumns) {
    return map$1(grid, function (row) {
      return foldl(lockedColumns, function (acc, colNum) {
        var newChild = generateElements(1, row, generators, always)[0];
        return addCell(acc, colNum, newChild);
      }, row);
    });
  };

  var tailor = function tailor(gridA, delta, generators) {
    var fillCols = delta.colDelta < 0 ? colFill : identity;
    var fillRows = delta.rowDelta < 0 ? rowFill : identity;
    var lockedColumns = getLockedColumnsFromGrid(gridA);
    var gridWidth = cellLength(gridA[0]);
    var isLastColLocked = exists(lockedColumns, function (locked) {
      return locked === gridWidth - 1;
    });
    var modifiedCols = fillCols(gridA, Math.abs(delta.colDelta), generators, isLastColLocked ? gridWidth - 1 : gridWidth);
    var newLockedColumns = getLockedColumnsFromGrid(modifiedCols);
    return fillRows(modifiedCols, Math.abs(delta.rowDelta), generators, mapToObject(newLockedColumns, always));
  };

  var isSpanning = function isSpanning(grid, row, col, comparator) {
    var candidate = getCell(grid[row], col);
    var matching = curry(comparator, candidate.element);
    var currentRow = grid[row];
    return grid.length > 1 && cellLength(currentRow) > 1 && (col > 0 && matching(getCellElement(currentRow, col - 1)) || col < currentRow.cells.length - 1 && matching(getCellElement(currentRow, col + 1)) || row > 0 && matching(getCellElement(grid[row - 1], col)) || row < grid.length - 1 && matching(getCellElement(grid[row + 1], col)));
  };

  var mergeTables = function mergeTables(startAddress, gridA, gridBRows, generator, comparator, lockedColumns) {
    var startRow = startAddress.row;
    var startCol = startAddress.column;
    var mergeHeight = gridBRows.length;
    var mergeWidth = cellLength(gridBRows[0]);
    var endRow = startRow + mergeHeight;
    var endCol = startCol + mergeWidth + lockedColumns.length;
    var lockedColumnObj = mapToObject(lockedColumns, always);

    for (var _r2 = startRow; _r2 < endRow; _r2++) {
      var skippedCol = 0;

      for (var c = startCol; c < endCol; c++) {
        if (lockedColumnObj[c]) {
          skippedCol++;
          continue;
        }

        if (isSpanning(gridA, _r2, c, comparator)) {
          unmerge(gridA, getCellElement(gridA[_r2], c), comparator, generator.cell);
        }

        var gridBColIndex = c - startCol - skippedCol;
        var newCell = getCell(gridBRows[_r2 - startRow], gridBColIndex);
        var newCellElm = newCell.element;
        var replacement = generator.replace(newCellElm);
        mutateCell(gridA[_r2], c, elementnew(replacement, true, newCell.isLocked));
      }
    }

    return gridA;
  };

  var getValidStartAddress = function getValidStartAddress(currentStartAddress, grid, lockedColumns) {
    var gridColLength = cellLength(grid[0]);
    var adjustedRowAddress = extractGridDetails(grid).cols.length + currentStartAddress.row;
    var possibleColAddresses = range$1(gridColLength - currentStartAddress.column, function (num) {
      return num + currentStartAddress.column;
    });
    var validColAddress = find$1(possibleColAddresses, function (num) {
      return forall(lockedColumns, function (col) {
        return col !== num;
      });
    }).getOr(gridColLength - 1);
    return {
      row: adjustedRowAddress,
      column: validColAddress
    };
  };

  var getLockedColumnsWithinBounds = function getLockedColumnsWithinBounds(startAddress, rows, lockedColumns) {
    return filter$2(lockedColumns, function (colNum) {
      return colNum >= startAddress.column && colNum <= cellLength(rows[0]) + startAddress.column;
    });
  };

  var merge$1 = function merge$1(startAddress, gridA, gridB, generator, comparator) {
    var lockedColumns = getLockedColumnsFromGrid(gridA);
    var validStartAddress = getValidStartAddress(startAddress, gridA, lockedColumns);
    var gridBRows = extractGridDetails(gridB).rows;
    var lockedColumnsWithinBounds = getLockedColumnsWithinBounds(validStartAddress, gridBRows, lockedColumns);
    var result = measure(validStartAddress, gridA, gridBRows);
    return result.map(function (diff) {
      var delta = _objectSpread({}, diff, {
        colDelta: diff.colDelta - lockedColumnsWithinBounds.length
      });

      var fittedGrid = tailor(gridA, delta, generator);
      var newLockedColumns = getLockedColumnsFromGrid(fittedGrid);
      var newLockedColumnsWithinBounds = getLockedColumnsWithinBounds(validStartAddress, gridBRows, newLockedColumns);
      return mergeTables(validStartAddress, fittedGrid, gridBRows, generator, comparator, newLockedColumnsWithinBounds);
    });
  };

  var insertCols = function insertCols(index, gridA, gridB, generator, comparator) {
    splitCols(gridA, index, comparator, generator.cell);
    var delta = measureHeight(gridB, gridA);
    var fittedNewGrid = tailor(gridB, delta, generator);
    var secondDelta = measureHeight(gridA, fittedNewGrid);
    var fittedOldGrid = tailor(gridA, secondDelta, generator);
    return map$1(fittedOldGrid, function (gridRow, i) {
      return addCells(gridRow, index, fittedNewGrid[i].cells);
    });
  };

  var insertRows = function insertRows(index, gridA, gridB, generator, comparator) {
    splitRows(gridA, index, comparator, generator.cell);
    var locked = getLockedColumnsFromGrid(gridA);
    var diff = measureWidth(gridA, gridB);

    var delta = _objectSpread({}, diff, {
      colDelta: diff.colDelta - locked.length
    });

    var fittedOldGrid = tailor(gridA, delta, generator);

    var _extractGridDetails = extractGridDetails(fittedOldGrid),
        oldCols = _extractGridDetails.cols,
        oldRows = _extractGridDetails.rows;

    var newLocked = getLockedColumnsFromGrid(fittedOldGrid);
    var secondDiff = measureWidth(gridB, gridA);

    var secondDelta = _objectSpread({}, secondDiff, {
      colDelta: secondDiff.colDelta + newLocked.length
    });

    var fittedGridB = lockedColFill(gridB, generator, newLocked);
    var fittedNewGrid = tailor(fittedGridB, secondDelta, generator);
    return [].concat(_toConsumableArray(oldCols), _toConsumableArray(oldRows.slice(0, index)), _toConsumableArray(fittedNewGrid), _toConsumableArray(oldRows.slice(index, oldRows.length)));
  };

  var cloneRow = function cloneRow(row, cloneCell, comparator, substitution) {
    return clone(row, function (elem) {
      return substitution(elem, comparator);
    }, cloneCell);
  };

  var insertRowAt = function insertRowAt(grid, index, example, comparator, substitution) {
    var _extractGridDetails2 = extractGridDetails(grid),
        rows = _extractGridDetails2.rows,
        cols = _extractGridDetails2.cols;

    var before = rows.slice(0, index);
    var after = rows.slice(index);
    var newRow = cloneRow(rows[example], function (ex, c) {
      var withinSpan = index > 0 && index < rows.length && comparator(getCellElement(rows[index - 1], c), getCellElement(rows[index], c));
      var ret = withinSpan ? getCell(rows[index], c) : elementnew(substitution(ex.element, comparator), true, ex.isLocked);
      return ret;
    }, comparator, substitution);
    return [].concat(_toConsumableArray(cols), _toConsumableArray(before), [newRow], _toConsumableArray(after));
  };

  var getElementFor = function getElementFor(row, column, section, withinSpan, example, comparator, substitution) {
    if (section === 'colgroup' || !withinSpan) {
      var _cell3 = getCell(row, example);

      return elementnew(substitution(_cell3.element, comparator), true, false);
    } else {
      return getCell(row, column);
    }
  };

  var insertColumnAt = function insertColumnAt(grid, index, example, comparator, substitution) {
    return map$1(grid, function (row) {
      var withinSpan = index > 0 && index < cellLength(row) && comparator(getCellElement(row, index - 1), getCellElement(row, index));
      var sub = getElementFor(row, index, row.section, withinSpan, example, comparator, substitution);
      return addCell(row, index, sub);
    });
  };

  var deleteColumnsAt = function deleteColumnsAt(grid, columns) {
    return bind$2(grid, function (row) {
      var existingCells = row.cells;
      var cells = foldr(columns, function (acc, column) {
        return column >= 0 && column < acc.length ? acc.slice(0, column).concat(acc.slice(column + 1)) : acc;
      }, existingCells);
      return cells.length > 0 ? [rowcells(row.element, cells, row.section, row.isNew)] : [];
    });
  };

  var deleteRowsAt = function deleteRowsAt(grid, start, finish) {
    var _extractGridDetails3 = extractGridDetails(grid),
        rows = _extractGridDetails3.rows,
        cols = _extractGridDetails3.cols;

    return [].concat(_toConsumableArray(cols), _toConsumableArray(rows.slice(0, start)), _toConsumableArray(rows.slice(finish + 1)));
  };

  var notInStartRow = function notInStartRow(grid, rowIndex, colIndex, comparator) {
    return getCellElement(grid[rowIndex], colIndex) !== undefined && rowIndex > 0 && comparator(getCellElement(grid[rowIndex - 1], colIndex), getCellElement(grid[rowIndex], colIndex));
  };

  var notInStartColumn = function notInStartColumn(row, index, comparator) {
    return index > 0 && comparator(getCellElement(row, index - 1), getCellElement(row, index));
  };

  var isDuplicatedCell = function isDuplicatedCell(grid, rowIndex, colIndex, comparator) {
    return notInStartRow(grid, rowIndex, colIndex, comparator) || notInStartColumn(grid[rowIndex], colIndex, comparator);
  };

  var rowReplacerPredicate = function rowReplacerPredicate(targetRow, columnHeaders) {
    var entireTableIsHeader = forall(columnHeaders, identity) && isHeaderCells(targetRow.cells);
    return entireTableIsHeader ? always : function (cell, _rowIndex, colIndex) {
      var type = name(cell.element);
      return !(type === 'th' && columnHeaders[colIndex]);
    };
  };

  var columnReplacePredicate = function columnReplacePredicate(targetColumn, rowHeaders) {
    var entireTableIsHeader = forall(rowHeaders, identity) && isHeaderCells(targetColumn);
    return entireTableIsHeader ? always : function (cell, rowIndex, _colIndex) {
      var type = name(cell.element);
      return !(type === 'th' && rowHeaders[rowIndex]);
    };
  };

  var determineScope = function determineScope(applyScope, cell, newScope, isInHeader) {
    var hasSpan = function hasSpan(scope) {
      return scope === 'row' ? hasRowspan(cell) : hasColspan(cell);
    };

    var getScope = function getScope(scope) {
      return hasSpan(scope) ? "".concat(scope, "group") : scope;
    };

    if (applyScope) {
      return isHeaderCell(cell) ? getScope(newScope) : null;
    } else if (isInHeader && isHeaderCell(cell)) {
      var oppositeScope = newScope === 'row' ? 'col' : 'row';
      return getScope(oppositeScope);
    } else {
      return null;
    }
  };

  var rowScopeGenerator = function rowScopeGenerator(applyScope, columnHeaders) {
    return function (cell, rowIndex, columnIndex) {
      return Optional.some(determineScope(applyScope, cell.element, 'col', columnHeaders[columnIndex]));
    };
  };

  var columnScopeGenerator = function columnScopeGenerator(applyScope, rowHeaders) {
    return function (cell, rowIndex) {
      return Optional.some(determineScope(applyScope, cell.element, 'row', rowHeaders[rowIndex]));
    };
  };

  var replace = function replace(cell, comparator, substitute) {
    return elementnew(substitute(cell.element, comparator), true, cell.isLocked);
  };

  var replaceIn = function replaceIn(grid, targets, comparator, substitute, replacer, genScope, shouldReplace) {
    var isTarget = function isTarget(cell) {
      return exists(targets, function (target) {
        return comparator(cell.element, target.element);
      });
    };

    return map$1(grid, function (row, rowIndex) {
      return mapCells(row, function (cell, colIndex) {
        if (isTarget(cell)) {
          var newCell = shouldReplace(cell, rowIndex, colIndex) ? replacer(cell, comparator, substitute) : cell;
          genScope(newCell, rowIndex, colIndex).each(function (scope) {
            setOptions(newCell.element, {
              scope: Optional.from(scope)
            });
          });
          return newCell;
        } else {
          return cell;
        }
      });
    });
  };

  var getColumnCells = function getColumnCells(rows, columnIndex, comparator) {
    return bind$2(rows, function (row, i) {
      return isDuplicatedCell(rows, i, columnIndex, comparator) ? [] : [getCell(row, columnIndex)];
    });
  };

  var getRowCells = function getRowCells(rows, rowIndex, comparator) {
    var targetRow = rows[rowIndex];
    return bind$2(targetRow.cells, function (item, i) {
      return isDuplicatedCell(rows, rowIndex, i, comparator) ? [] : [item];
    });
  };

  var replaceColumns = function replaceColumns(grid, indexes, applyScope, comparator, substitution) {
    var rows = extractGridDetails(grid).rows;
    var targets = bind$2(indexes, function (index) {
      return getColumnCells(rows, index, comparator);
    });
    var rowHeaders = map$1(rows, function (row) {
      return isHeaderCells(row.cells);
    });
    var shouldReplaceCell = columnReplacePredicate(targets, rowHeaders);
    var scopeGenerator = columnScopeGenerator(applyScope, rowHeaders);
    return replaceIn(grid, targets, comparator, substitution, replace, scopeGenerator, shouldReplaceCell);
  };

  var replaceRows = function replaceRows(grid, indexes, section, applyScope, comparator, substitution, tableSection) {
    var _extractGridDetails4 = extractGridDetails(grid),
        cols = _extractGridDetails4.cols,
        rows = _extractGridDetails4.rows;

    var targetRow = rows[indexes[0]];
    var targets = bind$2(indexes, function (index) {
      return getRowCells(rows, index, comparator);
    });
    var columnHeaders = map$1(targetRow.cells, function (_cell, index) {
      return isHeaderCells(getColumnCells(rows, index, comparator));
    });

    var newRows = _toConsumableArray(rows);

    each$2(indexes, function (index) {
      newRows[index] = tableSection.transformRow(rows[index], section);
    });
    var newGrid = [].concat(_toConsumableArray(cols), _toConsumableArray(newRows));
    var shouldReplaceCell = rowReplacerPredicate(targetRow, columnHeaders);
    var scopeGenerator = rowScopeGenerator(applyScope, columnHeaders);
    return replaceIn(newGrid, targets, comparator, substitution, tableSection.transformCell, scopeGenerator, shouldReplaceCell);
  };

  var replaceCells = function replaceCells(grid, details, comparator, substitution) {
    var rows = extractGridDetails(grid).rows;
    var targetCells = map$1(details, function (detail) {
      return getCell(rows[detail.row], detail.column);
    });
    return replaceIn(grid, targetCells, comparator, substitution, replace, Optional.none, always);
  };

  var generate = function generate(cases) {
    if (!isArray(cases)) {
      throw new Error('cases must be an array');
    }

    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }

    var constructors = [];
    var adt = {};
    each$2(cases, function (acase, count) {
      var keys$1 = keys(acase);

      if (keys$1.length !== 1) {
        throw new Error('one and only one name per case');
      }

      var key = keys$1[0];
      var value = acase[key];

      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!isArray(value)) {
        throw new Error('case arguments must be an array');
      }

      constructors.push(key);

      adt[key] = function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        var argLength = args.length;

        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }

        var match = function match(branches) {
          var branchKeys = keys(branches);

          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }

          var allReqd = forall(constructors, function (reqKey) {
            return contains$2(branchKeys, reqKey);
          });

          if (!allReqd) {
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          }

          return branches[key].apply(null, args);
        };

        return {
          fold: function fold() {
            for (var _len6 = arguments.length, foldArgs = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              foldArgs[_key6] = arguments[_key6];
            }

            if (foldArgs.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + foldArgs.length);
            }

            var target = foldArgs[count];
            return target.apply(null, args);
          },
          match: match,
          log: function log(label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };

  var Adt = {
    generate: generate
  };
  var adt$6 = Adt.generate([{
    none: []
  }, {
    only: ['index']
  }, {
    left: ['index', 'next']
  }, {
    middle: ['prev', 'index', 'next']
  }, {
    right: ['prev', 'index']
  }]);

  var ColumnContext = _objectSpread({}, adt$6);

  var neighbours = function neighbours(input, index) {
    if (input.length === 0) {
      return ColumnContext.none();
    }

    if (input.length === 1) {
      return ColumnContext.only(0);
    }

    if (index === 0) {
      return ColumnContext.left(0, 1);
    }

    if (index === input.length - 1) {
      return ColumnContext.right(index - 1, index);
    }

    if (index > 0 && index < input.length - 1) {
      return ColumnContext.middle(index - 1, index, index + 1);
    }

    return ColumnContext.none();
  };

  var determine = function determine(input, column, step, tableSize, resize) {
    var result = input.slice(0);
    var context = neighbours(input, column);
    var onNone = constant(map$1(result, constant(0)));

    var onOnly = function onOnly(index) {
      return tableSize.singleColumnWidth(result[index], step);
    };

    var onLeft = function onLeft(index, next) {
      return resize.calcLeftEdgeDeltas(result, index, next, step, tableSize.minCellWidth(), tableSize.isRelative);
    };

    var onMiddle = function onMiddle(prev, index, next) {
      return resize.calcMiddleDeltas(result, prev, index, next, step, tableSize.minCellWidth(), tableSize.isRelative);
    };

    var onRight = function onRight(prev, index) {
      return resize.calcRightEdgeDeltas(result, prev, index, step, tableSize.minCellWidth(), tableSize.isRelative);
    };

    return context.fold(onNone, onOnly, onLeft, onMiddle, onRight);
  };

  var total = function total(start, end, measures) {
    var r = 0;

    for (var i = start; i < end; i++) {
      r += measures[i] !== undefined ? measures[i] : 0;
    }

    return r;
  };

  var recalculateWidthForCells = function recalculateWidthForCells(warehouse, widths) {
    var all = Warehouse.justCells(warehouse);
    return map$1(all, function (cell) {
      var width = total(cell.column, cell.column + cell.colspan, widths);
      return {
        element: cell.element,
        width: width,
        colspan: cell.colspan
      };
    });
  };

  var recalculateWidthForColumns = function recalculateWidthForColumns(warehouse, widths) {
    var groups = Warehouse.justColumns(warehouse);
    return map$1(groups, function (column, index) {
      return {
        element: column.element,
        width: widths[index],
        colspan: column.colspan
      };
    });
  };

  var recalculateHeightForCells = function recalculateHeightForCells(warehouse, heights) {
    var all = Warehouse.justCells(warehouse);
    return map$1(all, function (cell) {
      var height = total(cell.row, cell.row + cell.rowspan, heights);
      return {
        element: cell.element,
        height: height,
        rowspan: cell.rowspan
      };
    });
  };

  var matchRowHeight = function matchRowHeight(warehouse, heights) {
    return map$1(warehouse.all, function (row, i) {
      return {
        element: row.element,
        height: heights[i]
      };
    });
  };

  var sumUp = function sumUp(newSize) {
    return foldr(newSize, function (b, a) {
      return b + a;
    }, 0);
  };

  var recalculate = function recalculate(warehouse, widths) {
    if (Warehouse.hasColumns(warehouse)) {
      return recalculateWidthForColumns(warehouse, widths);
    } else {
      return recalculateWidthForCells(warehouse, widths);
    }
  };

  var recalculateAndApply = function recalculateAndApply(warehouse, widths, tableSize) {
    var newSizes = recalculate(warehouse, widths);
    each$2(newSizes, function (cell) {
      tableSize.setElementWidth(cell.element, cell.width);
    });
  };

  var adjustWidth = function adjustWidth(table, delta, index, resizing, tableSize) {
    var warehouse = Warehouse.fromTable(table);
    var step = tableSize.getCellDelta(delta);
    var widths = tableSize.getWidths(warehouse, tableSize);
    var isLastColumn = index === warehouse.grid.columns - 1;
    var clampedStep = resizing.clampTableDelta(widths, index, step, tableSize.minCellWidth(), isLastColumn);
    var deltas = determine(widths, index, clampedStep, tableSize, resizing);
    var newWidths = map$1(deltas, function (dx, i) {
      return dx + widths[i];
    });
    recalculateAndApply(warehouse, newWidths, tableSize);
    resizing.resizeTable(tableSize.adjustTableWidth, clampedStep, isLastColumn);
  };

  var adjustHeight = function adjustHeight(table, delta, index, direction) {
    var warehouse = Warehouse.fromTable(table);
    var heights = getPixelHeights(warehouse, table, direction);
    var newHeights = map$1(heights, function (dy, i) {
      return index === i ? Math.max(delta + dy, minHeight()) : dy;
    });
    var newCellSizes = recalculateHeightForCells(warehouse, newHeights);
    var newRowSizes = matchRowHeight(warehouse, newHeights);
    each$2(newRowSizes, function (row) {
      setHeight(row.element, row.height);
    });
    each$2(newCellSizes, function (cell) {
      setHeight(cell.element, cell.height);
    });
    var total = sumUp(newHeights);
    setHeight(table, total);
  };

  var adjustAndRedistributeWidths$1 = function adjustAndRedistributeWidths$1(_table, list, details, tableSize, resizeBehaviour) {
    var warehouse = Warehouse.generate(list);
    var sizes = tableSize.getWidths(warehouse, tableSize);
    var tablePixelWidth = tableSize.pixelWidth();

    var _resizeBehaviour$calc = resizeBehaviour.calcRedestributedWidths(sizes, tablePixelWidth, details.pixelDelta, tableSize.isRelative),
        newSizes = _resizeBehaviour$calc.newSizes,
        delta = _resizeBehaviour$calc.delta;

    recalculateAndApply(warehouse, newSizes, tableSize);
    tableSize.adjustTableWidth(delta);
  };

  var adjustWidthTo = function adjustWidthTo(_table, list, _info, tableSize) {
    var warehouse = Warehouse.generate(list);
    var widths = tableSize.getWidths(warehouse, tableSize);
    recalculateAndApply(warehouse, widths, tableSize);
  };

  var uniqueColumns = function uniqueColumns(details) {
    var uniqueCheck = function uniqueCheck(rest, detail) {
      var columnExists = exists(rest, function (currentDetail) {
        return currentDetail.column === detail.column;
      });
      return columnExists ? rest : rest.concat([detail]);
    };

    return foldl(details, uniqueCheck, []).sort(function (detailA, detailB) {
      return detailA.column - detailB.column;
    });
  };

  var isCol = isTag('col');
  var isColgroup = isTag('colgroup');

  var isRow$1 = function isRow$1(element) {
    return name(element) === 'tr' || isColgroup(element);
  };

  var elementToData = function elementToData(element) {
    var colspan = getAttrValue(element, 'colspan', 1);
    var rowspan = getAttrValue(element, 'rowspan', 1);
    return {
      element: element,
      colspan: colspan,
      rowspan: rowspan
    };
  };

  var modification = function modification(generators) {
    var toData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : elementToData;

    var nuCell = function nuCell(data) {
      return isCol(data.element) ? generators.col(data) : generators.cell(data);
    };

    var nuRow = function nuRow(data) {
      return isColgroup(data.element) ? generators.colgroup(data) : generators.row(data);
    };

    var add = function add(element) {
      if (isRow$1(element)) {
        return nuRow({
          element: element
        });
      } else {
        var _cell4 = element;
        var replacement = nuCell(toData(_cell4));
        recent = Optional.some({
          item: _cell4,
          replacement: replacement
        });
        return replacement;
      }
    };

    var recent = Optional.none();

    var getOrInit = function getOrInit(element, comparator) {
      return recent.fold(function () {
        return add(element);
      }, function (p) {
        return comparator(element, p.item) ? p.replacement : add(element);
      });
    };

    return {
      getOrInit: getOrInit
    };
  };

  var transform$1 = function transform$1(tag) {
    return function (generators) {
      var list = [];

      var find = function find(element, comparator) {
        return find$1(list, function (x) {
          return comparator(x.item, element);
        });
      };

      var makeNew = function makeNew(element) {
        var attrs = tag === 'td' ? {
          scope: null
        } : {};
        var cell = generators.replace(element, tag, attrs);
        list.push({
          item: element,
          sub: cell
        });
        return cell;
      };

      var replaceOrInit = function replaceOrInit(element, comparator) {
        if (isRow$1(element) || isCol(element)) {
          return element;
        } else {
          var _cell5 = element;
          return find(_cell5, comparator).fold(function () {
            return makeNew(_cell5);
          }, function (p) {
            return comparator(element, p.item) ? p.sub : makeNew(_cell5);
          });
        }
      };

      return {
        replaceOrInit: replaceOrInit
      };
    };
  };

  var getScopeAttribute = function getScopeAttribute(cell) {
    return getOpt(cell, 'scope').map(function (attribute) {
      return attribute.substr(0, 3);
    });
  };

  var merging = function merging(generators) {
    var unmerge = function unmerge(cell) {
      var scope = getScopeAttribute(cell);
      scope.each(function (attribute) {
        return set$2(cell, 'scope', attribute);
      });
      return function () {
        var raw = generators.cell({
          element: cell,
          colspan: 1,
          rowspan: 1
        });
        remove$5(raw, 'width');
        remove$5(cell, 'width');
        scope.each(function (attribute) {
          return set$2(raw, 'scope', attribute);
        });
        return raw;
      };
    };

    var merge = function merge(cells) {
      var getScopeProperty = function getScopeProperty() {
        var stringAttributes = cat(map$1(cells, getScopeAttribute));

        if (stringAttributes.length === 0) {
          return Optional.none();
        } else {
          var baseScope = stringAttributes[0];
          var scopes = ['row', 'col'];
          var isMixed = exists(stringAttributes, function (attribute) {
            return attribute !== baseScope && contains$2(scopes, attribute);
          });
          return isMixed ? Optional.none() : Optional.from(baseScope);
        }
      };

      remove$5(cells[0], 'width');
      getScopeProperty().fold(function () {
        return remove$7(cells[0], 'scope');
      }, function (attribute) {
        return set$2(cells[0], 'scope', attribute + 'group');
      });
      return constant(cells[0]);
    };

    return {
      unmerge: unmerge,
      merge: merge
    };
  };

  var Generators = {
    modification: modification,
    transform: transform$1,
    merging: merging
  };
  var blockList = ['body', 'p', 'div', 'article', 'aside', 'figcaption', 'figure', 'footer', 'header', 'nav', 'section', 'ol', 'ul', 'table', 'thead', 'tfoot', 'tbody', 'caption', 'tr', 'td', 'th', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'address'];

  var isList$1 = function isList$1(universe, item) {
    var tagName = universe.property().name(item);
    return contains$2(['ol', 'ul'], tagName);
  };

  var isBlock$1 = function isBlock$1(universe, item) {
    var tagName = universe.property().name(item);
    return contains$2(blockList, tagName);
  };

  var isEmptyTag$1 = function isEmptyTag$1(universe, item) {
    return contains$2(['br', 'img', 'hr', 'input'], universe.property().name(item));
  };

  var universe$1 = DomUniverse();

  var isBlock = function isBlock(element) {
    return isBlock$1(universe$1, element);
  };

  var isList = function isList(element) {
    return isList$1(universe$1, element);
  };

  var isEmptyTag = function isEmptyTag(element) {
    return isEmptyTag$1(universe$1, element);
  };

  var merge = function merge(cells) {
    var isBr = isTag('br');

    var advancedBr = function advancedBr(children) {
      return forall(children, function (c) {
        return isBr(c) || isText(c) && get$6(c).trim().length === 0;
      });
    };

    var isListItem = function isListItem(el) {
      return name(el) === 'li' || ancestor$2(el, isList).isSome();
    };

    var siblingIsBlock = function siblingIsBlock(el) {
      return nextSibling(el).map(function (rightSibling) {
        if (isBlock(rightSibling)) {
          return true;
        }

        if (isEmptyTag(rightSibling)) {
          return name(rightSibling) === 'img' ? false : true;
        }

        return false;
      }).getOr(false);
    };

    var markCell = function markCell(cell) {
      return last$1(cell).bind(function (rightEdge) {
        var rightSiblingIsBlock = siblingIsBlock(rightEdge);
        return parent(rightEdge).map(function (parent) {
          return rightSiblingIsBlock === true || isListItem(parent) || isBr(rightEdge) || isBlock(parent) && !eq$1(cell, parent) ? [] : [SugarElement.fromTag('br')];
        });
      }).getOr([]);
    };

    var markContent = function markContent() {
      var content = bind$2(cells, function (cell) {
        var children = children$2(cell);
        return advancedBr(children) ? [] : children.concat(markCell(cell));
      });
      return content.length === 0 ? [SugarElement.fromTag('br')] : content;
    };

    var contents = markContent();
    empty(cells[0]);
    append(cells[0], contents);
  };

  var isEditable = function isEditable(elem) {
    return isEditable$1(elem, true);
  };

  var prune = function prune(table) {
    var cells = cells$1(table);

    if (cells.length === 0) {
      remove$6(table);
    }
  };

  var outcome = function outcome(grid, cursor) {
    return {
      grid: grid,
      cursor: cursor
    };
  };

  var findEditableCursorPosition = function findEditableCursorPosition(rows) {
    return findMap(rows, function (row) {
      return findMap(row.cells, function (cell) {
        var elem = cell.element;
        return someIf(isEditable(elem), elem);
      });
    });
  };

  var elementFromGrid = function elementFromGrid(grid, row, column) {
    var _a, _b;

    var rows = extractGridDetails(grid).rows;
    return Optional.from((_b = (_a = rows[row]) === null || _a === void 0 ? void 0 : _a.cells[column]) === null || _b === void 0 ? void 0 : _b.element).filter(isEditable).orThunk(function () {
      return findEditableCursorPosition(rows);
    });
  };

  var bundle = function bundle(grid, row, column) {
    var cursorElement = elementFromGrid(grid, row, column);
    return outcome(grid, cursorElement);
  };

  var uniqueRows = function uniqueRows(details) {
    var rowCompilation = function rowCompilation(rest, detail) {
      var rowExists = exists(rest, function (currentDetail) {
        return currentDetail.row === detail.row;
      });
      return rowExists ? rest : rest.concat([detail]);
    };

    return foldl(details, rowCompilation, []).sort(function (detailA, detailB) {
      return detailA.row - detailB.row;
    });
  };

  var opInsertRowsBefore = function opInsertRowsBefore(grid, details, comparator, genWrappers) {
    var targetIndex = details[0].row;
    var rows = uniqueRows(details);
    var newGrid = foldr(rows, function (acc, row) {
      var newG = insertRowAt(acc.grid, targetIndex, row.row + acc.delta, comparator, genWrappers.getOrInit);
      return {
        grid: newG,
        delta: acc.delta + 1
      };
    }, {
      grid: grid,
      delta: 0
    }).grid;
    return bundle(newGrid, targetIndex, details[0].column);
  };

  var opInsertRowsAfter = function opInsertRowsAfter(grid, details, comparator, genWrappers) {
    var rows = uniqueRows(details);
    var target = rows[rows.length - 1];
    var targetIndex = target.row + target.rowspan;
    var newGrid = foldr(rows, function (newG, row) {
      return insertRowAt(newG, targetIndex, row.row, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, targetIndex, details[0].column);
  };

  var opInsertColumnsBefore = function opInsertColumnsBefore(grid, extractDetail, comparator, genWrappers) {
    var details = extractDetail.details;
    var columns = uniqueColumns(details);
    var targetIndex = columns[0].column;
    var newGrid = foldr(columns, function (acc, col) {
      var newG = insertColumnAt(acc.grid, targetIndex, col.column + acc.delta, comparator, genWrappers.getOrInit);
      return {
        grid: newG,
        delta: acc.delta + 1
      };
    }, {
      grid: grid,
      delta: 0
    }).grid;
    return bundle(newGrid, details[0].row, targetIndex);
  };

  var opInsertColumnsAfter = function opInsertColumnsAfter(grid, extractDetail, comparator, genWrappers) {
    var details = extractDetail.details;
    var target = details[details.length - 1];
    var targetIndex = target.column + target.colspan;
    var columns = uniqueColumns(details);
    var newGrid = foldr(columns, function (newG, col) {
      return insertColumnAt(newG, targetIndex, col.column, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, details[0].row, targetIndex);
  };

  var opMakeColumnsHeader = function opMakeColumnsHeader(initialGrid, details, comparator, genWrappers) {
    var columns = uniqueColumns(details);
    var columnIndexes = map$1(columns, function (detail) {
      return detail.column;
    });
    var newGrid = replaceColumns(initialGrid, columnIndexes, true, comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, details[0].row, details[0].column);
  };

  var opMakeCellsHeader = function opMakeCellsHeader(initialGrid, details, comparator, genWrappers) {
    var newGrid = replaceCells(initialGrid, details, comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, details[0].row, details[0].column);
  };

  var opUnmakeColumnsHeader = function opUnmakeColumnsHeader(initialGrid, details, comparator, genWrappers) {
    var columns = uniqueColumns(details);
    var columnIndexes = map$1(columns, function (detail) {
      return detail.column;
    });
    var newGrid = replaceColumns(initialGrid, columnIndexes, false, comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, details[0].row, details[0].column);
  };

  var opUnmakeCellsHeader = function opUnmakeCellsHeader(initialGrid, details, comparator, genWrappers) {
    var newGrid = replaceCells(initialGrid, details, comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, details[0].row, details[0].column);
  };

  var makeRowsSection = function makeRowsSection(section, applyScope) {
    return function (initialGrid, details, comparator, genWrappers, tableSection) {
      var rows = uniqueRows(details);
      var rowIndexes = map$1(rows, function (detail) {
        return detail.row;
      });
      var newGrid = replaceRows(initialGrid, rowIndexes, section, applyScope, comparator, genWrappers.replaceOrInit, tableSection);
      return bundle(newGrid, details[0].row, details[0].column);
    };
  };

  var opMakeRowsHeader = makeRowsSection('thead', true);
  var opMakeRowsBody = makeRowsSection('tbody', false);
  var opMakeRowsFooter = makeRowsSection('tfoot', false);

  var opEraseColumns = function opEraseColumns(grid, extractDetail, _comparator, _genWrappers) {
    var columns = uniqueColumns(extractDetail.details);
    var newGrid = deleteColumnsAt(grid, map$1(columns, function (column) {
      return column.column;
    }));
    var maxColIndex = newGrid.length > 0 ? newGrid[0].cells.length - 1 : 0;
    return bundle(newGrid, columns[0].row, Math.min(columns[0].column, maxColIndex));
  };

  var opEraseRows = function opEraseRows(grid, details, _comparator, _genWrappers) {
    var rows = uniqueRows(details);
    var newGrid = deleteRowsAt(grid, rows[0].row, rows[rows.length - 1].row);
    var maxRowIndex = newGrid.length > 0 ? newGrid.length - 1 : 0;
    return bundle(newGrid, Math.min(details[0].row, maxRowIndex), details[0].column);
  };

  var opMergeCells = function opMergeCells(grid, mergable, comparator, genWrappers) {
    var cells = mergable.cells;
    merge(cells);
    var newGrid = merge$2(grid, mergable.bounds, comparator, genWrappers.merge(cells));
    return outcome(newGrid, Optional.from(cells[0]));
  };

  var opUnmergeCells = function opUnmergeCells(grid, unmergable, comparator, genWrappers) {
    var unmerge$1 = function unmerge$1(b, cell) {
      return unmerge(b, cell, comparator, genWrappers.unmerge(cell));
    };

    var newGrid = foldr(unmergable, unmerge$1, grid);
    return outcome(newGrid, Optional.from(unmergable[0]));
  };

  var opPasteCells = function opPasteCells(grid, pasteDetails, comparator, _genWrappers) {
    var gridify = function gridify(table, generators) {
      var wh = Warehouse.fromTable(table);
      return toGrid(wh, generators, true);
    };

    var gridB = gridify(pasteDetails.clipboard, pasteDetails.generators);
    var startAddress = address(pasteDetails.row, pasteDetails.column);
    var mergedGrid = merge$1(startAddress, grid, gridB, pasteDetails.generators, comparator);
    return mergedGrid.fold(function () {
      return outcome(grid, Optional.some(pasteDetails.element));
    }, function (newGrid) {
      return bundle(newGrid, pasteDetails.row, pasteDetails.column);
    });
  };

  var gridifyRows = function gridifyRows(rows, generators, context) {
    var pasteDetails = fromPastedRows(rows, context.section);
    var wh = Warehouse.generate(pasteDetails);
    return toGrid(wh, generators, true);
  };

  var opPasteColsBefore = function opPasteColsBefore(grid, pasteDetails, comparator, _genWrappers) {
    var rows = extractGridDetails(grid).rows;
    var index = pasteDetails.cells[0].column;
    var context = rows[pasteDetails.cells[0].row];
    var gridB = gridifyRows(pasteDetails.clipboard, pasteDetails.generators, context);
    var mergedGrid = insertCols(index, grid, gridB, pasteDetails.generators, comparator);
    return bundle(mergedGrid, pasteDetails.cells[0].row, pasteDetails.cells[0].column);
  };

  var opPasteColsAfter = function opPasteColsAfter(grid, pasteDetails, comparator, _genWrappers) {
    var rows = extractGridDetails(grid).rows;
    var index = pasteDetails.cells[pasteDetails.cells.length - 1].column + pasteDetails.cells[pasteDetails.cells.length - 1].colspan;
    var context = rows[pasteDetails.cells[0].row];
    var gridB = gridifyRows(pasteDetails.clipboard, pasteDetails.generators, context);
    var mergedGrid = insertCols(index, grid, gridB, pasteDetails.generators, comparator);
    return bundle(mergedGrid, pasteDetails.cells[0].row, pasteDetails.cells[0].column);
  };

  var opPasteRowsBefore = function opPasteRowsBefore(grid, pasteDetails, comparator, _genWrappers) {
    var rows = extractGridDetails(grid).rows;
    var index = pasteDetails.cells[0].row;
    var context = rows[index];
    var gridB = gridifyRows(pasteDetails.clipboard, pasteDetails.generators, context);
    var mergedGrid = insertRows(index, grid, gridB, pasteDetails.generators, comparator);
    return bundle(mergedGrid, pasteDetails.cells[0].row, pasteDetails.cells[0].column);
  };

  var opPasteRowsAfter = function opPasteRowsAfter(grid, pasteDetails, comparator, _genWrappers) {
    var rows = extractGridDetails(grid).rows;
    var index = pasteDetails.cells[pasteDetails.cells.length - 1].row + pasteDetails.cells[pasteDetails.cells.length - 1].rowspan;
    var context = rows[pasteDetails.cells[0].row];
    var gridB = gridifyRows(pasteDetails.clipboard, pasteDetails.generators, context);
    var mergedGrid = insertRows(index, grid, gridB, pasteDetails.generators, comparator);
    return bundle(mergedGrid, pasteDetails.cells[0].row, pasteDetails.cells[0].column);
  };

  var opGetColumnsType = function opGetColumnsType(table, target) {
    var house = Warehouse.fromTable(table);
    var details = onCells(house, target);
    return details.bind(function (selectedCells) {
      var lastSelectedCell = selectedCells[selectedCells.length - 1];
      var minColRange = selectedCells[0].column;
      var maxColRange = lastSelectedCell.column + lastSelectedCell.colspan;
      var selectedColumnCells = flatten(map$1(house.all, function (row) {
        return filter$2(row.cells, function (cell) {
          return cell.column >= minColRange && cell.column < maxColRange;
        });
      }));
      return findCommonCellType(selectedColumnCells);
    }).getOr('');
  };

  var opGetCellsType = function opGetCellsType(table, target) {
    var house = Warehouse.fromTable(table);
    var details = onCells(house, target);
    return details.bind(findCommonCellType).getOr('');
  };

  var opGetRowsType = function opGetRowsType(table, target) {
    var house = Warehouse.fromTable(table);
    var details = onCells(house, target);
    return details.bind(function (selectedCells) {
      var lastSelectedCell = selectedCells[selectedCells.length - 1];
      var minRowRange = selectedCells[0].row;
      var maxRowRange = lastSelectedCell.row + lastSelectedCell.rowspan;
      var selectedRows = house.all.slice(minRowRange, maxRowRange);
      return findCommonRowType(selectedRows);
    }).getOr('');
  };

  var resize = function resize(table, list, details, behaviours) {
    return adjustWidthTo(table, list, details, behaviours.sizing);
  };

  var adjustAndRedistributeWidths = function adjustAndRedistributeWidths(table, list, details, behaviours) {
    return adjustAndRedistributeWidths$1(table, list, details, behaviours.sizing, behaviours.resize);
  };

  var firstColumnIsLocked = function firstColumnIsLocked(_warehouse, details) {
    return exists(details, function (detail) {
      return detail.column === 0 && detail.isLocked;
    });
  };

  var lastColumnIsLocked = function lastColumnIsLocked(warehouse, details) {
    return exists(details, function (detail) {
      return detail.column + detail.colspan >= warehouse.grid.columns && detail.isLocked;
    });
  };

  var getColumnsWidth = function getColumnsWidth(warehouse, details) {
    var columns$1 = columns(warehouse);
    var uniqueCols = uniqueColumns(details);
    return foldl(uniqueCols, function (acc, detail) {
      var column = columns$1[detail.column];
      var colWidth = column.map(getOuter$2).getOr(0);
      return acc + colWidth;
    }, 0);
  };

  var insertColumnsExtractor = function insertColumnsExtractor(before) {
    return function (warehouse, target) {
      return onCells(warehouse, target).filter(function (details) {
        var checkLocked = before ? firstColumnIsLocked : lastColumnIsLocked;
        return !checkLocked(warehouse, details);
      }).map(function (details) {
        return {
          details: details,
          pixelDelta: getColumnsWidth(warehouse, details)
        };
      });
    };
  };

  var eraseColumnsExtractor = function eraseColumnsExtractor(warehouse, target) {
    return onUnlockedCells(warehouse, target).map(function (details) {
      return {
        details: details,
        pixelDelta: -getColumnsWidth(warehouse, details)
      };
    });
  };

  var pasteColumnsExtractor = function pasteColumnsExtractor(before) {
    return function (warehouse, target) {
      return onPasteByEditor(warehouse, target).filter(function (details) {
        var checkLocked = before ? firstColumnIsLocked : lastColumnIsLocked;
        return !checkLocked(warehouse, details.cells);
      });
    };
  };

  var headerCellGenerator = Generators.transform('th');
  var bodyCellGenerator = Generators.transform('td');
  var insertRowsBefore = run(opInsertRowsBefore, onCells, noop, noop, Generators.modification);
  var insertRowsAfter = run(opInsertRowsAfter, onCells, noop, noop, Generators.modification);
  var insertColumnsBefore = run(opInsertColumnsBefore, insertColumnsExtractor(true), adjustAndRedistributeWidths, noop, Generators.modification);
  var insertColumnsAfter = run(opInsertColumnsAfter, insertColumnsExtractor(false), adjustAndRedistributeWidths, noop, Generators.modification);
  var eraseColumns = run(opEraseColumns, eraseColumnsExtractor, adjustAndRedistributeWidths, prune, Generators.modification);
  var eraseRows = run(opEraseRows, onCells, noop, prune, Generators.modification);
  var makeColumnsHeader = run(opMakeColumnsHeader, onUnlockedCells, noop, noop, headerCellGenerator);
  var unmakeColumnsHeader = run(opUnmakeColumnsHeader, onUnlockedCells, noop, noop, bodyCellGenerator);
  var makeRowsHeader = run(opMakeRowsHeader, onUnlockedCells, noop, noop, headerCellGenerator);
  var makeRowsBody = run(opMakeRowsBody, onUnlockedCells, noop, noop, bodyCellGenerator);
  var makeRowsFooter = run(opMakeRowsFooter, onUnlockedCells, noop, noop, bodyCellGenerator);
  var makeCellsHeader = run(opMakeCellsHeader, onUnlockedCells, noop, noop, headerCellGenerator);
  var unmakeCellsHeader = run(opUnmakeCellsHeader, onUnlockedCells, noop, noop, bodyCellGenerator);
  var mergeCells = run(opMergeCells, onUnlockedMergable, resize, noop, Generators.merging);
  var unmergeCells = run(opUnmergeCells, onUnlockedUnmergable, resize, noop, Generators.merging);
  var pasteCells = run(opPasteCells, onPaste, resize, noop, Generators.modification);
  var pasteColsBefore = run(opPasteColsBefore, pasteColumnsExtractor(true), noop, noop, Generators.modification);
  var pasteColsAfter = run(opPasteColsAfter, pasteColumnsExtractor(false), noop, noop, Generators.modification);
  var pasteRowsBefore = run(opPasteRowsBefore, onPasteByEditor, noop, noop, Generators.modification);
  var pasteRowsAfter = run(opPasteRowsAfter, onPasteByEditor, noop, noop, Generators.modification);
  var getColumnsType = opGetColumnsType;
  var getCellsType = opGetCellsType;
  var getRowsType = opGetRowsType;

  var fireNewRow = function fireNewRow(editor, row) {
    return editor.dispatch('NewRow', {
      node: row
    });
  };

  var fireNewCell = function fireNewCell(editor, cell) {
    return editor.dispatch('NewCell', {
      node: cell
    });
  };

  var fireTableModified = function fireTableModified(editor, table, data) {
    editor.dispatch('TableModified', _objectSpread({}, data, {
      table: table
    }));
  };

  var fireTableSelectionChange = function fireTableSelectionChange(editor, cells, start, finish, otherCells) {
    editor.dispatch('TableSelectionChange', {
      cells: cells,
      start: start,
      finish: finish,
      otherCells: otherCells
    });
  };

  var fireTableSelectionClear = function fireTableSelectionClear(editor) {
    editor.dispatch('TableSelectionClear');
  };

  var fireObjectResizeStart = function fireObjectResizeStart(editor, target, width, height, origin) {
    editor.dispatch('ObjectResizeStart', {
      target: target,
      width: width,
      height: height,
      origin: origin
    });
  };

  var fireObjectResized = function fireObjectResized(editor, target, width, height, origin) {
    editor.dispatch('ObjectResized', {
      target: target,
      width: width,
      height: height,
      origin: origin
    });
  };

  var styleModified = {
    structure: false,
    style: true
  };
  var structureModified = {
    structure: true,
    style: false
  };
  var styleAndStructureModified = {
    structure: true,
    style: true
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var defaultWidth = '100%';

  var getPixelForcedWidth = function getPixelForcedWidth(editor) {
    var _a;

    var dom = editor.dom;
    var parentBlock = (_a = dom.getParent(editor.selection.getStart(), dom.isBlock)) !== null && _a !== void 0 ? _a : editor.getBody();
    return getInner(SugarElement.fromDom(parentBlock)) + 'px';
  };

  var determineDefaultTableStyles = function determineDefaultTableStyles(editor, defaultStyles) {
    if (isTableResponsiveForced(editor) || !shouldStyleWithCss(editor)) {
      return defaultStyles;
    } else if (isTablePixelsForced(editor)) {
      return _objectSpread({}, defaultStyles, {
        width: getPixelForcedWidth(editor)
      });
    } else {
      return _objectSpread({}, defaultStyles, {
        width: defaultWidth
      });
    }
  };

  var determineDefaultTableAttributes = function determineDefaultTableAttributes(editor, defaultAttributes) {
    if (isTableResponsiveForced(editor) || shouldStyleWithCss(editor)) {
      return defaultAttributes;
    } else if (isTablePixelsForced(editor)) {
      return _objectSpread({}, defaultAttributes, {
        width: getPixelForcedWidth(editor)
      });
    } else {
      return _objectSpread({}, defaultAttributes, {
        width: defaultWidth
      });
    }
  };

  var register = function register(editor) {
    var registerOption = editor.options.register;
    registerOption('table_clone_elements', {
      processor: 'string[]'
    });
    registerOption('table_use_colgroups', {
      processor: 'boolean',
      "default": true
    });
    registerOption('table_header_type', {
      processor: function processor(value) {
        var valid = contains$2(['section', 'cells', 'sectionCells', 'auto'], value);
        return valid ? {
          value: value,
          valid: valid
        } : {
          valid: false,
          message: 'Must be one of: section, cells, sectionCells or auto.'
        };
      },
      "default": 'section'
    });
    registerOption('table_sizing_mode', {
      processor: 'string',
      "default": 'auto'
    });
    registerOption('table_default_attributes', {
      processor: 'object',
      "default": {
        border: '1'
      }
    });
    registerOption('table_default_styles', {
      processor: 'object',
      "default": {
        'border-collapse': 'collapse'
      }
    });
    registerOption('table_column_resizing', {
      processor: function processor(value) {
        var valid = contains$2(['preservetable', 'resizetable'], value);
        return valid ? {
          value: value,
          valid: valid
        } : {
          valid: false,
          message: 'Must be preservetable, or resizetable.'
        };
      },
      "default": 'preservetable'
    });
    registerOption('table_resize_bars', {
      processor: 'boolean',
      "default": true
    });
    registerOption('table_style_by_css', {
      processor: 'boolean',
      "default": true
    });
  };

  var getTableCloneElements = function getTableCloneElements(editor) {
    return Optional.from(editor.options.get('table_clone_elements'));
  };

  var hasTableObjectResizing = function hasTableObjectResizing(editor) {
    var objectResizing = editor.options.get('object_resizing');
    return contains$2(objectResizing.split(','), 'table');
  };

  var getTableHeaderType = option('table_header_type');
  var getTableColumnResizingBehaviour = option('table_column_resizing');

  var isPreserveTableColumnResizing = function isPreserveTableColumnResizing(editor) {
    return getTableColumnResizingBehaviour(editor) === 'preservetable';
  };

  var isResizeTableColumnResizing = function isResizeTableColumnResizing(editor) {
    return getTableColumnResizingBehaviour(editor) === 'resizetable';
  };

  var getTableSizingMode = option('table_sizing_mode');

  var isTablePercentagesForced = function isTablePercentagesForced(editor) {
    return getTableSizingMode(editor) === 'relative';
  };

  var isTablePixelsForced = function isTablePixelsForced(editor) {
    return getTableSizingMode(editor) === 'fixed';
  };

  var isTableResponsiveForced = function isTableResponsiveForced(editor) {
    return getTableSizingMode(editor) === 'responsive';
  };

  var hasTableResizeBars = option('table_resize_bars');
  var shouldStyleWithCss = option('table_style_by_css');

  var getTableDefaultAttributes = function getTableDefaultAttributes(editor) {
    var options = editor.options;
    var defaultAttributes = options.get('table_default_attributes');
    return options.isSet('table_default_attributes') ? defaultAttributes : determineDefaultTableAttributes(editor, defaultAttributes);
  };

  var getTableDefaultStyles = function getTableDefaultStyles(editor) {
    var options = editor.options;
    var defaultStyles = options.get('table_default_styles');
    return options.isSet('table_default_styles') ? defaultStyles : determineDefaultTableStyles(editor, defaultStyles);
  };

  var tableUseColumnGroup = option('table_use_colgroups');

  var get$5 = function get$5(editor, table) {
    if (isTablePercentagesForced(editor)) {
      return TableSize.percentageSize(table);
    } else if (isTablePixelsForced(editor)) {
      return TableSize.pixelSize(table);
    } else {
      return TableSize.getTableSize(table);
    }
  };

  var TableActions = function TableActions(editor, resizeHandler, cellSelectionHandler) {
    var isTableBody = function isTableBody(editor) {
      return name(getBody(editor)) === 'table';
    };

    var lastRowGuard = function lastRowGuard(table) {
      return isTableBody(editor) === false || getGridSize(table).rows > 1;
    };

    var lastColumnGuard = function lastColumnGuard(table) {
      return isTableBody(editor) === false || getGridSize(table).columns > 1;
    };

    var cloneFormats = getTableCloneElements(editor);
    var colMutationOp = isResizeTableColumnResizing(editor) ? noop : halve;

    var getTableSectionType = function getTableSectionType(table) {
      switch (getTableHeaderType(editor)) {
        case 'section':
          return TableSection.section();

        case 'sectionCells':
          return TableSection.sectionCells();

        case 'cells':
          return TableSection.cells();

        default:
          return TableSection.getTableSectionType(table, 'section');
      }
    };

    var setSelectionFromAction = function setSelectionFromAction(table, result) {
      return result.cursor.fold(function () {
        var cells = cells$1(table);
        return head(cells).filter(inBody).map(function (firstCell) {
          cellSelectionHandler.clearSelectedCells(table.dom);
          var rng = editor.dom.createRng();
          rng.selectNode(firstCell.dom);
          editor.selection.setRng(rng);
          set$2(firstCell, 'data-mce-selected', '1');
          return rng;
        });
      }, function (cell) {
        var des = freefallRtl(cell);
        var rng = editor.dom.createRng();
        rng.setStart(des.element.dom, des.offset);
        rng.setEnd(des.element.dom, des.offset);
        editor.selection.setRng(rng);
        cellSelectionHandler.clearSelectedCells(table.dom);
        return Optional.some(rng);
      });
    };

    var execute = function execute(operation, guard, mutate, effect) {
      return function (table, target) {
        var noEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        removeDataStyle(table);
        var doc = SugarElement.fromDom(editor.getDoc());
        var generators = cellOperations(mutate, doc, cloneFormats);
        var behaviours = {
          sizing: get$5(editor, table),
          resize: isResizeTableColumnResizing(editor) ? resizeTable() : preserveTable(),
          section: getTableSectionType(table)
        };
        return guard(table) ? operation(table, target, generators, behaviours).bind(function (result) {
          resizeHandler.refresh(table.dom);
          each$2(result.newRows, function (row) {
            fireNewRow(editor, row.dom);
          });
          each$2(result.newCells, function (cell) {
            fireNewCell(editor, cell.dom);
          });
          var range = setSelectionFromAction(table, result);

          if (inBody(table)) {
            removeDataStyle(table);

            if (!noEvents) {
              fireTableModified(editor, table.dom, effect);
            }
          }

          return range.map(function (rng) {
            return {
              rng: rng,
              effect: effect
            };
          });
        }) : Optional.none();
      };
    };

    var deleteRow = execute(eraseRows, lastRowGuard, noop, structureModified);
    var deleteColumn = execute(eraseColumns, lastColumnGuard, noop, structureModified);
    var insertRowsBefore$1 = execute(insertRowsBefore, always, noop, structureModified);
    var insertRowsAfter$1 = execute(insertRowsAfter, always, noop, structureModified);
    var insertColumnsBefore$1 = execute(insertColumnsBefore, always, colMutationOp, structureModified);
    var insertColumnsAfter$1 = execute(insertColumnsAfter, always, colMutationOp, structureModified);
    var mergeCells$1 = execute(mergeCells, always, noop, structureModified);
    var unmergeCells$1 = execute(unmergeCells, always, noop, structureModified);
    var pasteColsBefore$1 = execute(pasteColsBefore, always, noop, structureModified);
    var pasteColsAfter$1 = execute(pasteColsAfter, always, noop, structureModified);
    var pasteRowsBefore$1 = execute(pasteRowsBefore, always, noop, structureModified);
    var pasteRowsAfter$1 = execute(pasteRowsAfter, always, noop, structureModified);
    var pasteCells$1 = execute(pasteCells, always, noop, styleAndStructureModified);
    var makeCellsHeader$1 = execute(makeCellsHeader, always, noop, structureModified);
    var unmakeCellsHeader$1 = execute(unmakeCellsHeader, always, noop, structureModified);
    var makeColumnsHeader$1 = execute(makeColumnsHeader, always, noop, structureModified);
    var unmakeColumnsHeader$1 = execute(unmakeColumnsHeader, always, noop, structureModified);
    var makeRowsHeader$1 = execute(makeRowsHeader, always, noop, structureModified);
    var makeRowsBody$1 = execute(makeRowsBody, always, noop, structureModified);
    var makeRowsFooter$1 = execute(makeRowsFooter, always, noop, structureModified);
    var getTableCellType = getCellsType;
    var getTableColType = getColumnsType;
    var getTableRowType = getRowsType;
    return {
      deleteRow: deleteRow,
      deleteColumn: deleteColumn,
      insertRowsBefore: insertRowsBefore$1,
      insertRowsAfter: insertRowsAfter$1,
      insertColumnsBefore: insertColumnsBefore$1,
      insertColumnsAfter: insertColumnsAfter$1,
      mergeCells: mergeCells$1,
      unmergeCells: unmergeCells$1,
      pasteColsBefore: pasteColsBefore$1,
      pasteColsAfter: pasteColsAfter$1,
      pasteRowsBefore: pasteRowsBefore$1,
      pasteRowsAfter: pasteRowsAfter$1,
      pasteCells: pasteCells$1,
      makeCellsHeader: makeCellsHeader$1,
      unmakeCellsHeader: unmakeCellsHeader$1,
      makeColumnsHeader: makeColumnsHeader$1,
      unmakeColumnsHeader: unmakeColumnsHeader$1,
      makeRowsHeader: makeRowsHeader$1,
      makeRowsBody: makeRowsBody$1,
      makeRowsFooter: makeRowsFooter$1,
      getTableRowType: getTableRowType,
      getTableCellType: getTableCellType,
      getTableColType: getTableColType
    };
  };

  var constrainSpan = function constrainSpan(element, property, value) {
    var currentColspan = getAttrValue(element, property, 1);

    if (value === 1 || currentColspan <= 1) {
      remove$7(element, property);
    } else {
      set$2(element, property, Math.min(value, currentColspan));
    }
  };

  var isColInRange = function isColInRange(minColRange, maxColRange) {
    return function (cell) {
      var endCol = cell.column + cell.colspan - 1;
      var startCol = cell.column;
      return endCol >= minColRange && startCol < maxColRange;
    };
  };

  var generateColGroup = function generateColGroup(house, minColRange, maxColRange) {
    if (Warehouse.hasColumns(house)) {
      var colsToCopy = filter$2(Warehouse.justColumns(house), isColInRange(minColRange, maxColRange));
      var copiedCols = map$1(colsToCopy, function (c) {
        var clonedCol = deep(c.element);
        constrainSpan(clonedCol, 'span', maxColRange - minColRange);
        return clonedCol;
      });
      var fakeColgroup = SugarElement.fromTag('colgroup');
      append(fakeColgroup, copiedCols);
      return [fakeColgroup];
    } else {
      return [];
    }
  };

  var generateRows = function generateRows(house, minColRange, maxColRange) {
    return map$1(house.all, function (row) {
      var cellsToCopy = filter$2(row.cells, isColInRange(minColRange, maxColRange));
      var copiedCells = map$1(cellsToCopy, function (cell) {
        var clonedCell = deep(cell.element);
        constrainSpan(clonedCell, 'colspan', maxColRange - minColRange);
        return clonedCell;
      });
      var fakeTR = SugarElement.fromTag('tr');
      append(fakeTR, copiedCells);
      return fakeTR;
    });
  };

  var copyCols = function copyCols(table, target) {
    var house = Warehouse.fromTable(table);
    var details = onUnlockedCells(house, target);
    return details.map(function (selectedCells) {
      var lastSelectedCell = selectedCells[selectedCells.length - 1];
      var minColRange = selectedCells[0].column;
      var maxColRange = lastSelectedCell.column + lastSelectedCell.colspan;
      var fakeColGroups = generateColGroup(house, minColRange, maxColRange);
      var fakeRows = generateRows(house, minColRange, maxColRange);
      return [].concat(_toConsumableArray(fakeColGroups), _toConsumableArray(fakeRows));
    });
  };

  var copyRows = function copyRows(table, target, generators) {
    var warehouse = Warehouse.fromTable(table);
    var details = onCells(warehouse, target);
    return details.bind(function (selectedCells) {
      var grid = toGrid(warehouse, generators, false);
      var rows = extractGridDetails(grid).rows;
      var slicedGrid = rows.slice(selectedCells[0].row, selectedCells[selectedCells.length - 1].row + selectedCells[selectedCells.length - 1].rowspan);
      var filteredGrid = bind$2(slicedGrid, function (row) {
        var newCells = filter$2(row.cells, function (cell) {
          return !cell.isLocked;
        });
        return newCells.length > 0 ? [_objectSpread({}, row, {
          cells: newCells
        })] : [];
      });
      var slicedDetails = toDetailList(filteredGrid);
      return someIf(slicedDetails.length > 0, slicedDetails);
    }).map(function (slicedDetails) {
      return copy(slicedDetails);
    });
  };

  var adt$5 = Adt.generate([{
    invalid: ['raw']
  }, {
    pixels: ['value']
  }, {
    percent: ['value']
  }]);

  var validateFor = function validateFor(suffix, type, value) {
    var rawAmount = value.substring(0, value.length - suffix.length);
    var amount = parseFloat(rawAmount);
    return rawAmount === amount.toString() ? type(amount) : adt$5.invalid(value);
  };

  var from = function from(value) {
    if (endsWith(value, '%')) {
      return validateFor('%', adt$5.percent, value);
    }

    if (endsWith(value, 'px')) {
      return validateFor('px', adt$5.pixels, value);
    }

    return adt$5.invalid(value);
  };

  var Size = _objectSpread({}, adt$5, {
    from: from
  });

  var redistributeToPercent = function redistributeToPercent(widths, totalWidth) {
    return map$1(widths, function (w) {
      var colType = Size.from(w);
      return colType.fold(function () {
        return w;
      }, function (px) {
        var ratio = px / totalWidth * 100;
        return ratio + '%';
      }, function (pc) {
        return pc + '%';
      });
    });
  };

  var redistributeToPx = function redistributeToPx(widths, totalWidth, newTotalWidth) {
    var scale = newTotalWidth / totalWidth;
    return map$1(widths, function (w) {
      var colType = Size.from(w);
      return colType.fold(function () {
        return w;
      }, function (px) {
        return px * scale + 'px';
      }, function (pc) {
        return pc / 100 * newTotalWidth + 'px';
      });
    });
  };

  var redistributeEmpty = function redistributeEmpty(newWidthType, columns) {
    var f = newWidthType.fold(function () {
      return constant('');
    }, function (pixels) {
      var num = pixels / columns;
      return constant(num + 'px');
    }, function () {
      var num = 100 / columns;
      return constant(num + '%');
    });
    return range$1(columns, f);
  };

  var redistributeValues = function redistributeValues(newWidthType, widths, totalWidth) {
    return newWidthType.fold(function () {
      return widths;
    }, function (px) {
      return redistributeToPx(widths, totalWidth, px);
    }, function (_pc) {
      return redistributeToPercent(widths, totalWidth);
    });
  };

  var redistribute$1 = function redistribute$1(widths, totalWidth, newWidth) {
    var newType = Size.from(newWidth);
    var floats = forall(widths, function (s) {
      return s === '0px';
    }) ? redistributeEmpty(newType, widths.length) : redistributeValues(newType, widths, totalWidth);
    return normalize(floats);
  };

  var sum = function sum(values, fallback) {
    if (values.length === 0) {
      return fallback;
    }

    return foldr(values, function (rest, v) {
      return Size.from(v).fold(constant(0), identity, identity) + rest;
    }, 0);
  };

  var roundDown = function roundDown(num, unit) {
    var floored = Math.floor(num);
    return {
      value: floored + unit,
      remainder: num - floored
    };
  };

  var add$3 = function add$3(value, amount) {
    return Size.from(value).fold(constant(value), function (px) {
      return px + amount + 'px';
    }, function (pc) {
      return pc + amount + '%';
    });
  };

  var normalize = function normalize(values) {
    if (values.length === 0) {
      return values;
    }

    var scan = foldr(values, function (rest, value) {
      var info = Size.from(value).fold(function () {
        return {
          value: value,
          remainder: 0
        };
      }, function (num) {
        return roundDown(num, 'px');
      }, function (num) {
        return {
          value: num + '%',
          remainder: 0
        };
      });
      return {
        output: [info.value].concat(rest.output),
        remainder: rest.remainder + info.remainder
      };
    }, {
      output: [],
      remainder: 0
    });
    var r = scan.output;
    return r.slice(0, r.length - 1).concat([add$3(r[r.length - 1], Math.round(scan.remainder))]);
  };

  var validate = Size.from;

  var redistributeToW = function redistributeToW(newWidths, cells, unit) {
    each$2(cells, function (cell) {
      var widths = newWidths.slice(cell.column, cell.colspan + cell.column);
      var w = sum(widths, minWidth());
      set$1(cell.element, 'width', w + unit);
    });
  };

  var redistributeToColumns = function redistributeToColumns(newWidths, columns, unit) {
    each$2(columns, function (column, index) {
      var width = sum([newWidths[index]], minWidth());
      set$1(column.element, 'width', width + unit);
    });
  };

  var redistributeToH = function redistributeToH(newHeights, rows, cells, unit) {
    each$2(cells, function (cell) {
      var heights = newHeights.slice(cell.row, cell.rowspan + cell.row);
      var h = sum(heights, minHeight());
      set$1(cell.element, 'height', h + unit);
    });
    each$2(rows, function (row, i) {
      set$1(row.element, 'height', newHeights[i]);
    });
  };

  var getUnit = function getUnit(newSize) {
    return validate(newSize).fold(constant('px'), constant('px'), constant('%'));
  };

  var redistribute = function redistribute(table, optWidth, optHeight) {
    var warehouse = Warehouse.fromTable(table);
    var rows = warehouse.all;
    var cells = Warehouse.justCells(warehouse);
    var columns = Warehouse.justColumns(warehouse);
    optWidth.each(function (newWidth) {
      var widthUnit = getUnit(newWidth);
      var totalWidth = get$9(table);
      var oldWidths = getRawWidths(warehouse, table);
      var nuWidths = redistribute$1(oldWidths, totalWidth, newWidth);

      if (Warehouse.hasColumns(warehouse)) {
        redistributeToColumns(nuWidths, columns, widthUnit);
      } else {
        redistributeToW(nuWidths, cells, widthUnit);
      }

      set$1(table, 'width', newWidth);
    });
    optHeight.each(function (newHeight) {
      var hUnit = getUnit(newHeight);
      var totalHeight = get$8(table);
      var oldHeights = getRawHeights(warehouse, table, height);
      var nuHeights = redistribute$1(oldHeights, totalHeight, newHeight);
      redistributeToH(nuHeights, rows, cells, hUnit);
      set$1(table, 'height', newHeight);
    });
  };

  var isPercentSizing = isPercentSizing$1;
  var isPixelSizing = isPixelSizing$1;
  var isNoneSizing = isNoneSizing$1;

  var cleanupLegacyAttributes = function cleanupLegacyAttributes(element) {
    remove$7(element, 'width');
  };

  var convertToPercentSize = function convertToPercentSize(table) {
    var newWidth = getPercentTableWidth(table);
    redistribute(table, Optional.some(newWidth), Optional.none());
    cleanupLegacyAttributes(table);
  };

  var convertToPixelSize = function convertToPixelSize(table) {
    var newWidth = getPixelTableWidth(table);
    redistribute(table, Optional.some(newWidth), Optional.none());
    cleanupLegacyAttributes(table);
  };

  var convertToNoneSize = function convertToNoneSize(table) {
    remove$5(table, 'width');
    var columns = columns$1(table);
    var rowElements = columns.length > 0 ? columns : cells$1(table);
    each$2(rowElements, function (cell) {
      remove$5(cell, 'width');
      cleanupLegacyAttributes(cell);
    });
    cleanupLegacyAttributes(table);
  };

  var DefaultRenderOptions = {
    styles: {
      'border-collapse': 'collapse',
      'width': '100%'
    },
    attributes: {
      border: '1'
    },
    colGroups: false
  };

  var tableHeaderCell = function tableHeaderCell() {
    return SugarElement.fromTag('th');
  };

  var tableCell = function tableCell() {
    return SugarElement.fromTag('td');
  };

  var tableColumn = function tableColumn() {
    return SugarElement.fromTag('col');
  };

  var createRow = function createRow(columns, rowHeaders, columnHeaders, rowIndex) {
    var tr = SugarElement.fromTag('tr');

    for (var j = 0; j < columns; j++) {
      var td = rowIndex < rowHeaders || j < columnHeaders ? tableHeaderCell() : tableCell();

      if (j < columnHeaders) {
        set$2(td, 'scope', 'row');
      }

      if (rowIndex < rowHeaders) {
        set$2(td, 'scope', 'col');
      }

      append$1(td, SugarElement.fromTag('br'));
      append$1(tr, td);
    }

    return tr;
  };

  var createGroupRow = function createGroupRow(columns) {
    var columnGroup = SugarElement.fromTag('colgroup');
    range$1(columns, function () {
      return append$1(columnGroup, tableColumn());
    });
    return columnGroup;
  };

  var createRows = function createRows(rows, columns, rowHeaders, columnHeaders) {
    return range$1(rows, function (r) {
      return createRow(columns, rowHeaders, columnHeaders, r);
    });
  };

  var render = function render(rows, columns, rowHeaders, columnHeaders, headerType) {
    var renderOpts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DefaultRenderOptions;
    var table = SugarElement.fromTag('table');
    var rowHeadersGoInThead = headerType !== 'cells';
    setAll(table, renderOpts.styles);
    setAll$1(table, renderOpts.attributes);

    if (renderOpts.colGroups) {
      append$1(table, createGroupRow(columns));
    }

    var actualRowHeaders = Math.min(rows, rowHeaders);

    if (rowHeadersGoInThead && rowHeaders > 0) {
      var thead = SugarElement.fromTag('thead');
      append$1(table, thead);
      var theadRowHeaders = headerType === 'sectionCells' ? actualRowHeaders : 0;
      var theadRows = createRows(rowHeaders, columns, theadRowHeaders, columnHeaders);
      append(thead, theadRows);
    }

    var tbody = SugarElement.fromTag('tbody');
    append$1(table, tbody);
    var numRows = rowHeadersGoInThead ? rows - actualRowHeaders : rows;
    var numRowHeaders = rowHeadersGoInThead ? 0 : rowHeaders;
    var tbodyRows = createRows(numRows, columns, numRowHeaders, columnHeaders);
    append(tbody, tbodyRows);
    return table;
  };

  var get$4 = function get$4(element) {
    return element.dom.innerHTML;
  };

  var getOuter = function getOuter(element) {
    var container = SugarElement.fromTag('div');
    var clone = SugarElement.fromDom(element.dom.cloneNode(true));
    append$1(container, clone);
    return get$4(container);
  };

  var placeCaretInCell = function placeCaretInCell(editor, cell) {
    editor.selection.select(cell.dom, true);
    editor.selection.collapse(true);
  };

  var selectFirstCellInTable = function selectFirstCellInTable(editor, tableElm) {
    descendant(tableElm, 'td,th').each(curry(placeCaretInCell, editor));
  };

  var fireEvents = function fireEvents(editor, table) {
    each$2(descendants(table, 'tr'), function (row) {
      fireNewRow(editor, row.dom);
      each$2(descendants(row, 'th,td'), function (cell) {
        fireNewCell(editor, cell.dom);
      });
    });
  };

  var isPercentage = function isPercentage(width) {
    return isString(width) && width.indexOf('%') !== -1;
  };

  var insert = function insert(editor, columns, rows, colHeaders, rowHeaders) {
    var defaultStyles = getTableDefaultStyles(editor);
    var options = {
      styles: defaultStyles,
      attributes: getTableDefaultAttributes(editor),
      colGroups: tableUseColumnGroup(editor)
    };
    editor.undoManager.ignore(function () {
      var table = render(rows, columns, rowHeaders, colHeaders, getTableHeaderType(editor), options);
      set$2(table, 'data-mce-id', '__mce');
      var html = getOuter(table);
      editor.insertContent(html);
      editor.addVisual();
    });
    return descendant(getBody(editor), 'table[data-mce-id="__mce"]').map(function (table) {
      if (isTablePixelsForced(editor)) {
        convertToPixelSize(table);
      } else if (isTableResponsiveForced(editor)) {
        convertToNoneSize(table);
      } else if (isTablePercentagesForced(editor) || isPercentage(defaultStyles.width)) {
        convertToPercentSize(table);
      }

      removeDataStyle(table);
      remove$7(table, 'data-mce-id');
      fireEvents(editor, table);
      selectFirstCellInTable(editor, table);
      return table.dom;
    }).getOr(null);
  };

  var insertTable = function insertTable(editor, rows, columns) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var checkInput = function checkInput(val) {
      return isNumber(val) && val > 0;
    };

    if (checkInput(rows) && checkInput(columns)) {
      var headerRows = options.headerRows || 0;
      var headerColumns = options.headerColumns || 0;
      return insert(editor, columns, rows, headerColumns, headerRows);
    } else {
      console.error('Invalid values for mceInsertTable - rows and columns values are required to insert a table.');
      return null;
    }
  };

  var global = tinymce.util.Tools.resolve('tinymce.FakeClipboard');
  var tableTypeBase = 'x-tinymce/dom-table-';
  var tableTypeRow = tableTypeBase + 'rows';
  var tableTypeColumn = tableTypeBase + 'columns';

  var setData = function setData(items) {
    var fakeClipboardItem = global.FakeClipboardItem(items);
    global.write([fakeClipboardItem]);
  };

  var getData = function getData(type) {
    var _a;

    var items = (_a = global.read()) !== null && _a !== void 0 ? _a : [];
    return findMap(items, function (item) {
      return Optional.from(item.getType(type));
    });
  };

  var clearData = function clearData(type) {
    if (getData(type).isSome()) {
      global.clear();
    }
  };

  var setRows = function setRows(rowsOpt) {
    rowsOpt.fold(clearRows, function (rows) {
      return setData(_defineProperty({}, tableTypeRow, rows));
    });
  };

  var getRows = function getRows() {
    return getData(tableTypeRow);
  };

  var clearRows = function clearRows() {
    return clearData(tableTypeRow);
  };

  var setColumns = function setColumns(columnsOpt) {
    columnsOpt.fold(clearColumns, function (columns) {
      return setData(_defineProperty({}, tableTypeColumn, columns));
    });
  };

  var getColumns = function getColumns() {
    return getData(tableTypeColumn);
  };

  var clearColumns = function clearColumns() {
    return clearData(tableTypeColumn);
  };

  var getSelectionStartCellOrCaption = function getSelectionStartCellOrCaption(editor) {
    return getSelectionCellOrCaption(getSelectionStart(editor), getIsRoot(editor));
  };

  var getSelectionStartCell = function getSelectionStartCell(editor) {
    return getSelectionCell(getSelectionStart(editor), getIsRoot(editor));
  };

  var registerCommands = function registerCommands(editor, actions) {
    var isRoot = getIsRoot(editor);

    var eraseTable = function eraseTable() {
      return getSelectionStartCellOrCaption(editor).each(function (cellOrCaption) {
        table(cellOrCaption, isRoot).filter(not(isRoot)).each(function (table) {
          var cursor = SugarElement.fromText('');
          after$5(table, cursor);
          remove$6(table);

          if (editor.dom.isEmpty(editor.getBody())) {
            editor.setContent('');
            editor.selection.setCursorLocation();
          } else {
            var rng = editor.dom.createRng();
            rng.setStart(cursor.dom, 0);
            rng.setEnd(cursor.dom, 0);
            editor.selection.setRng(rng);
            editor.nodeChanged();
          }
        });
      });
    };

    var setSizingMode = function setSizingMode(sizing) {
      return getSelectionStartCellOrCaption(editor).each(function (cellOrCaption) {
        var isForcedSizing = isTableResponsiveForced(editor) || isTablePixelsForced(editor) || isTablePercentagesForced(editor);

        if (!isForcedSizing) {
          table(cellOrCaption, isRoot).each(function (table) {
            if (sizing === 'relative' && !isPercentSizing(table)) {
              convertToPercentSize(table);
            } else if (sizing === 'fixed' && !isPixelSizing(table)) {
              convertToPixelSize(table);
            } else if (sizing === 'responsive' && !isNoneSizing(table)) {
              convertToNoneSize(table);
            }

            removeDataStyle(table);
            fireTableModified(editor, table.dom, structureModified);
          });
        }
      });
    };

    var getTableFromCell = function getTableFromCell(cell) {
      return table(cell, isRoot);
    };

    var performActionOnSelection = function performActionOnSelection(action) {
      return getSelectionStartCell(editor).bind(function (cell) {
        return getTableFromCell(cell).map(function (table) {
          return action(table, cell);
        });
      });
    };

    var toggleTableClass = function toggleTableClass(_ui, clazz) {
      performActionOnSelection(function (table) {
        editor.formatter.toggle('tableclass', {
          value: clazz
        }, table.dom);
        fireTableModified(editor, table.dom, styleModified);
      });
    };

    var toggleTableCellClass = function toggleTableCellClass(_ui, clazz) {
      performActionOnSelection(function (table) {
        var selectedCells = getCellsFromSelection(editor);
        var allHaveClass = forall(selectedCells, function (cell) {
          return editor.formatter.match('tablecellclass', {
            value: clazz
          }, cell.dom);
        });
        var formatterAction = allHaveClass ? editor.formatter.remove : editor.formatter.apply;
        each$2(selectedCells, function (cell) {
          return formatterAction('tablecellclass', {
            value: clazz
          }, cell.dom);
        });
        fireTableModified(editor, table.dom, styleModified);
      });
    };

    var toggleCaption = function toggleCaption() {
      getSelectionStartCellOrCaption(editor).each(function (cellOrCaption) {
        table(cellOrCaption, isRoot).each(function (table) {
          child(table, 'caption').fold(function () {
            var caption = SugarElement.fromTag('caption');
            append$1(caption, SugarElement.fromText('Caption'));
            appendAt(table, caption, 0);
            editor.selection.setCursorLocation(caption.dom, 0);
          }, function (caption) {
            if (isTag('caption')(cellOrCaption)) {
              one('td', table).each(function (td) {
                return editor.selection.setCursorLocation(td.dom, 0);
              });
            }

            remove$6(caption);
          });
          fireTableModified(editor, table.dom, structureModified);
        });
      });
    };

    var postExecute = function postExecute(_data) {
      editor.focus();
    };

    var actOnSelection = function actOnSelection(execute) {
      var noEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return performActionOnSelection(function (table, startCell) {
        var targets = forMenu(getCellsFromSelection(editor), table, startCell);
        execute(table, targets, noEvents).each(postExecute);
      });
    };

    var copyRowSelection = function copyRowSelection() {
      return performActionOnSelection(function (table, startCell) {
        var targets = forMenu(getCellsFromSelection(editor), table, startCell);
        var generators = cellOperations(noop, SugarElement.fromDom(editor.getDoc()), Optional.none());
        return copyRows(table, targets, generators);
      });
    };

    var copyColSelection = function copyColSelection() {
      return performActionOnSelection(function (table, startCell) {
        var targets = forMenu(getCellsFromSelection(editor), table, startCell);
        return copyCols(table, targets);
      });
    };

    var pasteOnSelection = function pasteOnSelection(execute, getRows) {
      return getRows().each(function (rows) {
        var clonedRows = map$1(rows, function (row) {
          return deep(row);
        });
        performActionOnSelection(function (table, startCell) {
          var generators = paste$1(SugarElement.fromDom(editor.getDoc()));
          var targets = pasteRows(getCellsFromSelection(editor), startCell, clonedRows, generators);
          execute(table, targets).each(postExecute);
        });
      });
    };

    var actOnType = function actOnType(getAction) {
      return function (_ui, args) {
        return get$c(args, 'type').each(function (type) {
          actOnSelection(getAction(type), args.no_events);
        });
      };
    };

    each$1({
      mceTableSplitCells: function mceTableSplitCells() {
        return actOnSelection(actions.unmergeCells);
      },
      mceTableMergeCells: function mceTableMergeCells() {
        return actOnSelection(actions.mergeCells);
      },
      mceTableInsertRowBefore: function mceTableInsertRowBefore() {
        return actOnSelection(actions.insertRowsBefore);
      },
      mceTableInsertRowAfter: function mceTableInsertRowAfter() {
        return actOnSelection(actions.insertRowsAfter);
      },
      mceTableInsertColBefore: function mceTableInsertColBefore() {
        return actOnSelection(actions.insertColumnsBefore);
      },
      mceTableInsertColAfter: function mceTableInsertColAfter() {
        return actOnSelection(actions.insertColumnsAfter);
      },
      mceTableDeleteCol: function mceTableDeleteCol() {
        return actOnSelection(actions.deleteColumn);
      },
      mceTableDeleteRow: function mceTableDeleteRow() {
        return actOnSelection(actions.deleteRow);
      },
      mceTableCutCol: function mceTableCutCol() {
        return copyColSelection().each(function (selection) {
          setColumns(selection);
          actOnSelection(actions.deleteColumn);
        });
      },
      mceTableCutRow: function mceTableCutRow() {
        return copyRowSelection().each(function (selection) {
          setRows(selection);
          actOnSelection(actions.deleteRow);
        });
      },
      mceTableCopyCol: function mceTableCopyCol() {
        return copyColSelection().each(function (selection) {
          return setColumns(selection);
        });
      },
      mceTableCopyRow: function mceTableCopyRow() {
        return copyRowSelection().each(function (selection) {
          return setRows(selection);
        });
      },
      mceTablePasteColBefore: function mceTablePasteColBefore() {
        return pasteOnSelection(actions.pasteColsBefore, getColumns);
      },
      mceTablePasteColAfter: function mceTablePasteColAfter() {
        return pasteOnSelection(actions.pasteColsAfter, getColumns);
      },
      mceTablePasteRowBefore: function mceTablePasteRowBefore() {
        return pasteOnSelection(actions.pasteRowsBefore, getRows);
      },
      mceTablePasteRowAfter: function mceTablePasteRowAfter() {
        return pasteOnSelection(actions.pasteRowsAfter, getRows);
      },
      mceTableDelete: eraseTable,
      mceTableCellToggleClass: toggleTableCellClass,
      mceTableToggleClass: toggleTableClass,
      mceTableToggleCaption: toggleCaption,
      mceTableSizingMode: function mceTableSizingMode(_ui, sizing) {
        return setSizingMode(sizing);
      },
      mceTableCellType: actOnType(function (type) {
        return type === 'th' ? actions.makeCellsHeader : actions.unmakeCellsHeader;
      }),
      mceTableColType: actOnType(function (type) {
        return type === 'th' ? actions.makeColumnsHeader : actions.unmakeColumnsHeader;
      }),
      mceTableRowType: actOnType(function (type) {
        switch (type) {
          case 'header':
            return actions.makeRowsHeader;

          case 'footer':
            return actions.makeRowsFooter;

          default:
            return actions.makeRowsBody;
        }
      })
    }, function (func, name) {
      return editor.addCommand(name, func);
    });
    editor.addCommand('mceInsertTable', function (_ui, args) {
      insertTable(editor, args.rows, args.columns, args.options);
    });
    editor.addCommand('mceTableApplyCellStyle', function (_ui, args) {
      var getFormatName = function getFormatName(style) {
        return 'tablecell' + style.toLowerCase().replace('-', '');
      };

      if (!isObject(args)) {
        return;
      }

      var cells = getCellsFromSelection(editor);

      if (cells.length === 0) {
        return;
      }

      var validArgs = filter$1(args, function (value, style) {
        return editor.formatter.has(getFormatName(style)) && isString(value);
      });

      if (isEmpty(validArgs)) {
        return;
      }

      each$1(validArgs, function (value, style) {
        var formatName = getFormatName(style);
        each$2(cells, function (cell) {
          if (value === '') {
            editor.formatter.remove(formatName, {
              value: null
            }, cell.dom, true);
          } else {
            editor.formatter.apply(formatName, {
              value: value
            }, cell.dom);
          }
        });
      });
      getTableFromCell(cells[0]).each(function (table) {
        return fireTableModified(editor, table.dom, styleModified);
      });
    });
  };

  var registerQueryCommands = function registerQueryCommands(editor, actions) {
    var isRoot = getIsRoot(editor);

    var lookupOnSelection = function lookupOnSelection(action) {
      return getSelectionCell(getSelectionStart(editor)).bind(function (cell) {
        return table(cell, isRoot).map(function (table) {
          var targets = forMenu(getCellsFromSelection(editor), table, cell);
          return action(table, targets);
        });
      }).getOr('');
    };

    each$1({
      mceTableRowType: function mceTableRowType() {
        return lookupOnSelection(actions.getTableRowType);
      },
      mceTableCellType: function mceTableCellType() {
        return lookupOnSelection(actions.getTableCellType);
      },
      mceTableColType: function mceTableColType() {
        return lookupOnSelection(actions.getTableColType);
      }
    }, function (func, name) {
      return editor.addQueryValueHandler(name, func);
    });
  };

  var adt$4 = Adt.generate([{
    before: ['element']
  }, {
    on: ['element', 'offset']
  }, {
    after: ['element']
  }]);

  var cata$1 = function cata$1(subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };

  var getStart$1 = function getStart$1(situ) {
    return situ.fold(identity, identity, identity);
  };

  var before$2 = adt$4.before;
  var on = adt$4.on;
  var after$3 = adt$4.after;
  var Situ = {
    before: before$2,
    on: on,
    after: after$3,
    cata: cata$1,
    getStart: getStart$1
  };

  var create$4 = function create$4(selection, kill) {
    return {
      selection: selection,
      kill: kill
    };
  };

  var Response = {
    create: create$4
  };

  var selectNode = function selectNode(win, element) {
    var rng = win.document.createRange();
    rng.selectNode(element.dom);
    return rng;
  };

  var selectNodeContents = function selectNodeContents(win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };

  var selectNodeContentsUsing = function selectNodeContentsUsing(rng, element) {
    return rng.selectNodeContents(element.dom);
  };

  var setStart = function setStart(rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom);
    }, function (e, o) {
      rng.setStart(e.dom, o);
    }, function (e) {
      rng.setStartAfter(e.dom);
    });
  };

  var setFinish = function setFinish(rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom);
    }, function (e, o) {
      rng.setEnd(e.dom, o);
    }, function (e) {
      rng.setEndAfter(e.dom);
    });
  };

  var relativeToNative = function relativeToNative(win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };

  var exactToNative = function exactToNative(win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom, soffset);
    rng.setEnd(finish.dom, foffset);
    return rng;
  };

  var toRect = function toRect(rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height
    };
  };

  var getFirstRect$1 = function getFirstRect$1(rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Optional.some(rect).map(toRect) : Optional.none();
  };

  var adt$3 = Adt.generate([{
    ltr: ['start', 'soffset', 'finish', 'foffset']
  }, {
    rtl: ['start', 'soffset', 'finish', 'foffset']
  }]);

  var fromRange = function fromRange(win, type, range) {
    return type(SugarElement.fromDom(range.startContainer), range.startOffset, SugarElement.fromDom(range.endContainer), range.endOffset);
  };

  var getRanges = function getRanges(win, selection) {
    return selection.match({
      domRange: function domRange(rng) {
        return {
          ltr: constant(rng),
          rtl: Optional.none
        };
      },
      relative: function relative(startSitu, finishSitu) {
        return {
          ltr: cached(function () {
            return relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: cached(function () {
            return Optional.some(relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function exact(start, soffset, finish, foffset) {
        return {
          ltr: cached(function () {
            return exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: cached(function () {
            return Optional.some(exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };

  var doDiagnose = function doDiagnose(win, ranges) {
    var rng = ranges.ltr();

    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$3.rtl(SugarElement.fromDom(rev.endContainer), rev.endOffset, SugarElement.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$3.ltr, rng);
      });
    } else {
      return fromRange(win, adt$3.ltr, rng);
    }
  };

  var diagnose = function diagnose(win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };

  var asLtrRange = function asLtrRange(win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function ltr(start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom, soffset);
        rng.setEnd(finish.dom, foffset);
        return rng;
      },
      rtl: function rtl(start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom, foffset);
        rng.setEnd(start.dom, soffset);
        return rng;
      }
    });
  };

  adt$3.ltr;
  adt$3.rtl;

  var create$3 = function create$3(start, soffset, finish, foffset) {
    return {
      start: start,
      soffset: soffset,
      finish: finish,
      foffset: foffset
    };
  };

  var SimRange = {
    create: create$3
  };

  var create$2 = function create$2(start, soffset, finish, foffset) {
    return {
      start: Situ.on(start, soffset),
      finish: Situ.on(finish, foffset)
    };
  };

  var Situs = {
    create: create$2
  };

  var convertToRange = function convertToRange(win, selection) {
    var rng = asLtrRange(win, selection);
    return SimRange.create(SugarElement.fromDom(rng.startContainer), rng.startOffset, SugarElement.fromDom(rng.endContainer), rng.endOffset);
  };

  var makeSitus = Situs.create;

  var sync = function sync(container, isRoot, start, soffset, finish, foffset, selectRange) {
    if (!(eq$1(start, finish) && soffset === foffset)) {
      return closest$1(start, 'td,th', isRoot).bind(function (s) {
        return closest$1(finish, 'td,th', isRoot).bind(function (f) {
          return detect(container, isRoot, s, f, selectRange);
        });
      });
    } else {
      return Optional.none();
    }
  };

  var detect = function detect(container, isRoot, start, finish, selectRange) {
    if (!eq$1(start, finish)) {
      return identify(start, finish, isRoot).bind(function (cellSel) {
        var boxes = cellSel.boxes.getOr([]);

        if (boxes.length > 1) {
          selectRange(container, boxes, cellSel.start, cellSel.finish);
          return Optional.some(Response.create(Optional.some(makeSitus(start, 0, start, getEnd(start))), true));
        } else {
          return Optional.none();
        }
      });
    } else {
      return Optional.none();
    }
  };

  var update = function update(rows, columns, container, selected, annotations) {
    var updateSelection = function updateSelection(newSels) {
      annotations.clearBeforeUpdate(container);
      annotations.selectRange(container, newSels.boxes, newSels.start, newSels.finish);
      return newSels.boxes;
    };

    return shiftSelection(selected, rows, columns, annotations.firstSelectedSelector, annotations.lastSelectedSelector).map(updateSelection);
  };

  var traverse = function traverse(item, mode) {
    return {
      item: item,
      mode: mode
    };
  };

  var backtrack = function backtrack(universe, item, _direction) {
    var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sidestep;
    return universe.property().parent(item).map(function (p) {
      return traverse(p, transition);
    });
  };

  var sidestep = function sidestep(universe, item, direction) {
    var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : advance;
    return direction.sibling(universe, item).map(function (p) {
      return traverse(p, transition);
    });
  };

  var advance = function advance(universe, item, direction) {
    var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : advance;
    var children = universe.property().children(item);
    var result = direction.first(children);
    return result.map(function (r) {
      return traverse(r, transition);
    });
  };

  var successors = [{
    current: backtrack,
    next: sidestep,
    fallback: Optional.none()
  }, {
    current: sidestep,
    next: advance,
    fallback: Optional.some(backtrack)
  }, {
    current: advance,
    next: advance,
    fallback: Optional.some(sidestep)
  }];

  var go = function go(universe, item, mode, direction) {
    var rules = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : successors;
    var ruleOpt = find$1(rules, function (succ) {
      return succ.current === mode;
    });
    return ruleOpt.bind(function (rule) {
      return rule.current(universe, item, direction, rule.next).orThunk(function () {
        return rule.fallback.bind(function (fb) {
          return go(universe, item, fb, direction);
        });
      });
    });
  };

  var left$1 = function left$1() {
    var sibling = function sibling(universe, item) {
      return universe.query().prevSibling(item);
    };

    var first = function first(children) {
      return children.length > 0 ? Optional.some(children[children.length - 1]) : Optional.none();
    };

    return {
      sibling: sibling,
      first: first
    };
  };

  var right$1 = function right$1() {
    var sibling = function sibling(universe, item) {
      return universe.query().nextSibling(item);
    };

    var first = function first(children) {
      return children.length > 0 ? Optional.some(children[0]) : Optional.none();
    };

    return {
      sibling: sibling,
      first: first
    };
  };

  var Walkers = {
    left: left$1,
    right: right$1
  };

  var hone = function hone(universe, item, predicate, mode, direction, isRoot) {
    var next = go(universe, item, mode, direction);
    return next.bind(function (n) {
      if (isRoot(n.item)) {
        return Optional.none();
      } else {
        return predicate(n.item) ? Optional.some(n.item) : hone(universe, n.item, predicate, n.mode, direction, isRoot);
      }
    });
  };

  var left = function left(universe, item, predicate, isRoot) {
    return hone(universe, item, predicate, sidestep, Walkers.left(), isRoot);
  };

  var right = function right(universe, item, predicate, isRoot) {
    return hone(universe, item, predicate, sidestep, Walkers.right(), isRoot);
  };

  var isLeaf = function isLeaf(universe) {
    return function (element) {
      return universe.property().children(element).length === 0;
    };
  };

  var before$1 = function before$1(universe, item, isRoot) {
    return seekLeft$1(universe, item, isLeaf(universe), isRoot);
  };

  var after$2 = function after$2(universe, item, isRoot) {
    return seekRight$1(universe, item, isLeaf(universe), isRoot);
  };

  var seekLeft$1 = left;
  var seekRight$1 = right;
  var universe = DomUniverse();

  var before = function before(element, isRoot) {
    return before$1(universe, element, isRoot);
  };

  var after$1 = function after$1(element, isRoot) {
    return after$2(universe, element, isRoot);
  };

  var seekLeft = function seekLeft(element, predicate, isRoot) {
    return seekLeft$1(universe, element, predicate, isRoot);
  };

  var seekRight = function seekRight(element, predicate, isRoot) {
    return seekRight$1(universe, element, predicate, isRoot);
  };

  var ancestor = function ancestor(scope, predicate, isRoot) {
    return ancestor$2(scope, predicate, isRoot).isSome();
  };

  var adt$2 = Adt.generate([{
    none: ['message']
  }, {
    success: []
  }, {
    failedUp: ['cell']
  }, {
    failedDown: ['cell']
  }]);

  var isOverlapping = function isOverlapping(bridge, before, after) {
    var beforeBounds = bridge.getRect(before);
    var afterBounds = bridge.getRect(after);
    return afterBounds.right > beforeBounds.left && afterBounds.left < beforeBounds.right;
  };

  var isRow = function isRow(elem) {
    return closest$1(elem, 'tr');
  };

  var verify = function verify(bridge, before, beforeOffset, after, afterOffset, failure, isRoot) {
    return closest$1(after, 'td,th', isRoot).bind(function (afterCell) {
      return closest$1(before, 'td,th', isRoot).map(function (beforeCell) {
        if (!eq$1(afterCell, beforeCell)) {
          return sharedOne(isRow, [afterCell, beforeCell]).fold(function () {
            return isOverlapping(bridge, beforeCell, afterCell) ? adt$2.success() : failure(beforeCell);
          }, function (_sharedRow) {
            return failure(beforeCell);
          });
        } else {
          return eq$1(after, afterCell) && getEnd(afterCell) === afterOffset ? failure(beforeCell) : adt$2.none('in same cell');
        }
      });
    }).getOr(adt$2.none('default'));
  };

  var cata = function cata(subject, onNone, onSuccess, onFailedUp, onFailedDown) {
    return subject.fold(onNone, onSuccess, onFailedUp, onFailedDown);
  };

  var BeforeAfter = _objectSpread({}, adt$2, {
    verify: verify,
    cata: cata
  });

  var inParent = function inParent(parent, children, element, index) {
    return {
      parent: parent,
      children: children,
      element: element,
      index: index
    };
  };

  var indexInParent = function indexInParent(element) {
    return parent(element).bind(function (parent) {
      var children = children$2(parent);
      return indexOf(children, element).map(function (index) {
        return inParent(parent, children, element, index);
      });
    });
  };

  var indexOf = function indexOf(elements, element) {
    return findIndex(elements, curry(eq$1, element));
  };

  var isBr = isTag('br');

  var gatherer = function gatherer(cand, gather, isRoot) {
    return gather(cand, isRoot).bind(function (target) {
      return isText(target) && get$6(target).trim().length === 0 ? gatherer(target, gather, isRoot) : Optional.some(target);
    });
  };

  var handleBr = function handleBr(isRoot, element, direction) {
    return direction.traverse(element).orThunk(function () {
      return gatherer(element, direction.gather, isRoot);
    }).map(direction.relative);
  };

  var findBr = function findBr(element, offset) {
    return child$2(element, offset).filter(isBr).orThunk(function () {
      return child$2(element, offset - 1).filter(isBr);
    });
  };

  var handleParent = function handleParent(isRoot, element, offset, direction) {
    return findBr(element, offset).bind(function (br) {
      return direction.traverse(br).fold(function () {
        return gatherer(br, direction.gather, isRoot).map(direction.relative);
      }, function (adjacent) {
        return indexInParent(adjacent).map(function (info) {
          return Situ.on(info.parent, info.index);
        });
      });
    });
  };

  var tryBr = function tryBr(isRoot, element, offset, direction) {
    var target = isBr(element) ? handleBr(isRoot, element, direction) : handleParent(isRoot, element, offset, direction);
    return target.map(function (tgt) {
      return {
        start: tgt,
        finish: tgt
      };
    });
  };

  var process = function process(analysis) {
    return BeforeAfter.cata(analysis, function (_message) {
      return Optional.none();
    }, function () {
      return Optional.none();
    }, function (cell) {
      return Optional.some(point(cell, 0));
    }, function (cell) {
      return Optional.some(point(cell, getEnd(cell)));
    });
  };

  var moveDown = function moveDown(caret, amount) {
    return {
      left: caret.left,
      top: caret.top + amount,
      right: caret.right,
      bottom: caret.bottom + amount
    };
  };

  var moveUp = function moveUp(caret, amount) {
    return {
      left: caret.left,
      top: caret.top - amount,
      right: caret.right,
      bottom: caret.bottom - amount
    };
  };

  var translate = function translate(caret, xDelta, yDelta) {
    return {
      left: caret.left + xDelta,
      top: caret.top + yDelta,
      right: caret.right + xDelta,
      bottom: caret.bottom + yDelta
    };
  };

  var getTop = function getTop(caret) {
    return caret.top;
  };

  var getBottom = function getBottom(caret) {
    return caret.bottom;
  };

  var getPartialBox = function getPartialBox(bridge, element, offset) {
    if (offset >= 0 && offset < getEnd(element)) {
      return bridge.getRangedRect(element, offset, element, offset + 1);
    } else if (offset > 0) {
      return bridge.getRangedRect(element, offset - 1, element, offset);
    }

    return Optional.none();
  };

  var toCaret = function toCaret(rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom
    };
  };

  var getElemBox = function getElemBox(bridge, element) {
    return Optional.some(bridge.getRect(element));
  };

  var getBoxAt = function getBoxAt(bridge, element, offset) {
    if (isElement(element)) {
      return getElemBox(bridge, element).map(toCaret);
    } else if (isText(element)) {
      return getPartialBox(bridge, element, offset).map(toCaret);
    } else {
      return Optional.none();
    }
  };

  var getEntireBox = function getEntireBox(bridge, element) {
    if (isElement(element)) {
      return getElemBox(bridge, element).map(toCaret);
    } else if (isText(element)) {
      return bridge.getRangedRect(element, 0, element, getEnd(element)).map(toCaret);
    } else {
      return Optional.none();
    }
  };

  var JUMP_SIZE = 5;
  var NUM_RETRIES = 100;
  var adt$1 = Adt.generate([{
    none: []
  }, {
    retry: ['caret']
  }]);

  var isOutside = function isOutside(caret, box) {
    return caret.left < box.left || Math.abs(box.right - caret.left) < 1 || caret.left > box.right;
  };

  var inOutsideBlock = function inOutsideBlock(bridge, element, caret) {
    return closest$2(element, isBlock).fold(never, function (cell) {
      return getEntireBox(bridge, cell).exists(function (box) {
        return isOutside(caret, box);
      });
    });
  };

  var adjustDown = function adjustDown(bridge, element, guessBox, original, caret) {
    var lowerCaret = moveDown(caret, JUMP_SIZE);

    if (Math.abs(guessBox.bottom - original.bottom) < 1) {
      return adt$1.retry(lowerCaret);
    } else if (guessBox.top > caret.bottom) {
      return adt$1.retry(lowerCaret);
    } else if (guessBox.top === caret.bottom) {
      return adt$1.retry(moveDown(caret, 1));
    } else {
      return inOutsideBlock(bridge, element, caret) ? adt$1.retry(translate(lowerCaret, JUMP_SIZE, 0)) : adt$1.none();
    }
  };

  var adjustUp = function adjustUp(bridge, element, guessBox, original, caret) {
    var higherCaret = moveUp(caret, JUMP_SIZE);

    if (Math.abs(guessBox.top - original.top) < 1) {
      return adt$1.retry(higherCaret);
    } else if (guessBox.bottom < caret.top) {
      return adt$1.retry(higherCaret);
    } else if (guessBox.bottom === caret.top) {
      return adt$1.retry(moveUp(caret, 1));
    } else {
      return inOutsideBlock(bridge, element, caret) ? adt$1.retry(translate(higherCaret, JUMP_SIZE, 0)) : adt$1.none();
    }
  };

  var upMovement = {
    point: getTop,
    adjuster: adjustUp,
    move: moveUp,
    gather: before
  };
  var downMovement = {
    point: getBottom,
    adjuster: adjustDown,
    move: moveDown,
    gather: after$1
  };

  var isAtTable = function isAtTable(bridge, x, y) {
    return bridge.elementFromPoint(x, y).filter(function (elm) {
      return name(elm) === 'table';
    }).isSome();
  };

  var adjustForTable = function adjustForTable(bridge, movement, original, caret, numRetries) {
    return adjustTil(bridge, movement, original, movement.move(caret, JUMP_SIZE), numRetries);
  };

  var adjustTil = function adjustTil(bridge, movement, original, caret, numRetries) {
    if (numRetries === 0) {
      return Optional.some(caret);
    }

    if (isAtTable(bridge, caret.left, movement.point(caret))) {
      return adjustForTable(bridge, movement, original, caret, numRetries - 1);
    }

    return bridge.situsFromPoint(caret.left, movement.point(caret)).bind(function (guess) {
      return guess.start.fold(Optional.none, function (element) {
        return getEntireBox(bridge, element).bind(function (guessBox) {
          return movement.adjuster(bridge, element, guessBox, original, caret).fold(Optional.none, function (newCaret) {
            return adjustTil(bridge, movement, original, newCaret, numRetries - 1);
          });
        }).orThunk(function () {
          return Optional.some(caret);
        });
      }, Optional.none);
    });
  };

  var checkScroll = function checkScroll(movement, adjusted, bridge) {
    if (movement.point(adjusted) > bridge.getInnerHeight()) {
      return Optional.some(movement.point(adjusted) - bridge.getInnerHeight());
    } else if (movement.point(adjusted) < 0) {
      return Optional.some(-movement.point(adjusted));
    } else {
      return Optional.none();
    }
  };

  var retry = function retry(movement, bridge, caret) {
    var moved = movement.move(caret, JUMP_SIZE);
    var adjusted = adjustTil(bridge, movement, caret, moved, NUM_RETRIES).getOr(moved);
    return checkScroll(movement, adjusted, bridge).fold(function () {
      return bridge.situsFromPoint(adjusted.left, movement.point(adjusted));
    }, function (delta) {
      bridge.scrollBy(0, delta);
      return bridge.situsFromPoint(adjusted.left, movement.point(adjusted) - delta);
    });
  };

  var Retries = {
    tryUp: curry(retry, upMovement),
    tryDown: curry(retry, downMovement),
    getJumpSize: constant(JUMP_SIZE)
  };
  var MAX_RETRIES = 20;

  var findSpot = function findSpot(bridge, isRoot, direction) {
    return bridge.getSelection().bind(function (sel) {
      return tryBr(isRoot, sel.finish, sel.foffset, direction).fold(function () {
        return Optional.some(point(sel.finish, sel.foffset));
      }, function (brNeighbour) {
        var range = bridge.fromSitus(brNeighbour);
        var analysis = BeforeAfter.verify(bridge, sel.finish, sel.foffset, range.finish, range.foffset, direction.failure, isRoot);
        return process(analysis);
      });
    });
  };

  var scan = function scan(bridge, isRoot, element, offset, direction, numRetries) {
    if (numRetries === 0) {
      return Optional.none();
    }

    return tryCursor(bridge, isRoot, element, offset, direction).bind(function (situs) {
      var range = bridge.fromSitus(situs);
      var analysis = BeforeAfter.verify(bridge, element, offset, range.finish, range.foffset, direction.failure, isRoot);
      return BeforeAfter.cata(analysis, function () {
        return Optional.none();
      }, function () {
        return Optional.some(situs);
      }, function (cell) {
        if (eq$1(element, cell) && offset === 0) {
          return tryAgain(bridge, element, offset, moveUp, direction);
        } else {
          return scan(bridge, isRoot, cell, 0, direction, numRetries - 1);
        }
      }, function (cell) {
        if (eq$1(element, cell) && offset === getEnd(cell)) {
          return tryAgain(bridge, element, offset, moveDown, direction);
        } else {
          return scan(bridge, isRoot, cell, getEnd(cell), direction, numRetries - 1);
        }
      });
    });
  };

  var tryAgain = function tryAgain(bridge, element, offset, move, direction) {
    return getBoxAt(bridge, element, offset).bind(function (box) {
      return tryAt(bridge, direction, move(box, Retries.getJumpSize()));
    });
  };

  var tryAt = function tryAt(bridge, direction, box) {
    var browser = detect$2().browser;

    if (browser.isChromium() || browser.isSafari() || browser.isFirefox()) {
      return direction.retry(bridge, box);
    } else {
      return Optional.none();
    }
  };

  var tryCursor = function tryCursor(bridge, isRoot, element, offset, direction) {
    return getBoxAt(bridge, element, offset).bind(function (box) {
      return tryAt(bridge, direction, box);
    });
  };

  var handle$1 = function handle$1(bridge, isRoot, direction) {
    return findSpot(bridge, isRoot, direction).bind(function (spot) {
      return scan(bridge, isRoot, spot.element, spot.offset, direction, MAX_RETRIES).map(bridge.fromSitus);
    });
  };

  var inSameTable = function inSameTable(elem, table) {
    return ancestor(elem, function (e) {
      return parent(e).exists(function (p) {
        return eq$1(p, table);
      });
    });
  };

  var simulate = function simulate(bridge, isRoot, direction, initial, anchor) {
    return closest$1(initial, 'td,th', isRoot).bind(function (start) {
      return closest$1(start, 'table', isRoot).bind(function (table) {
        if (!inSameTable(anchor, table)) {
          return Optional.none();
        }

        return handle$1(bridge, isRoot, direction).bind(function (range) {
          return closest$1(range.finish, 'td,th', isRoot).map(function (finish) {
            return {
              start: start,
              finish: finish,
              range: range
            };
          });
        });
      });
    });
  };

  var navigate = function navigate(bridge, isRoot, direction, initial, anchor, precheck) {
    return precheck(initial, isRoot).orThunk(function () {
      return simulate(bridge, isRoot, direction, initial, anchor).map(function (info) {
        var range = info.range;
        return Response.create(Optional.some(makeSitus(range.start, range.soffset, range.finish, range.foffset)), true);
      });
    });
  };

  var firstUpCheck = function firstUpCheck(initial, isRoot) {
    return closest$1(initial, 'tr', isRoot).bind(function (startRow) {
      return closest$1(startRow, 'table', isRoot).bind(function (table) {
        var rows = descendants(table, 'tr');

        if (eq$1(startRow, rows[0])) {
          return seekLeft(table, function (element) {
            return last$1(element).isSome();
          }, isRoot).map(function (last) {
            var lastOffset = getEnd(last);
            return Response.create(Optional.some(makeSitus(last, lastOffset, last, lastOffset)), true);
          });
        } else {
          return Optional.none();
        }
      });
    });
  };

  var lastDownCheck = function lastDownCheck(initial, isRoot) {
    return closest$1(initial, 'tr', isRoot).bind(function (startRow) {
      return closest$1(startRow, 'table', isRoot).bind(function (table) {
        var rows = descendants(table, 'tr');

        if (eq$1(startRow, rows[rows.length - 1])) {
          return seekRight(table, function (element) {
            return first(element).isSome();
          }, isRoot).map(function (first) {
            return Response.create(Optional.some(makeSitus(first, 0, first, 0)), true);
          });
        } else {
          return Optional.none();
        }
      });
    });
  };

  var select = function select(bridge, container, isRoot, direction, initial, anchor, selectRange) {
    return simulate(bridge, isRoot, direction, initial, anchor).bind(function (info) {
      return detect(container, isRoot, info.start, info.finish, selectRange);
    });
  };

  var Cell = function Cell(initial) {
    var value = initial;

    var get = function get() {
      return value;
    };

    var set = function set(v) {
      value = v;
    };

    return {
      get: get,
      set: set
    };
  };

  var singleton = function singleton(doRevoke) {
    var subject = Cell(Optional.none());

    var revoke = function revoke() {
      return subject.get().each(doRevoke);
    };

    var clear = function clear() {
      revoke();
      subject.set(Optional.none());
    };

    var isSet = function isSet() {
      return subject.get().isSome();
    };

    var get = function get() {
      return subject.get();
    };

    var set = function set(s) {
      revoke();
      subject.set(Optional.some(s));
    };

    return {
      clear: clear,
      isSet: isSet,
      get: get,
      set: set
    };
  };

  var value = function value() {
    var subject = singleton(noop);

    var on = function on(f) {
      return subject.get().each(f);
    };

    return _objectSpread({}, subject, {
      on: on
    });
  };

  var findCell = function findCell(target, isRoot) {
    return closest$1(target, 'td,th', isRoot);
  };

  var MouseSelection = function MouseSelection(bridge, container, isRoot, annotations) {
    var cursor = value();
    var clearstate = cursor.clear;

    var applySelection = function applySelection(event) {
      cursor.on(function (start) {
        annotations.clearBeforeUpdate(container);
        findCell(event.target, isRoot).each(function (finish) {
          identify(start, finish, isRoot).each(function (cellSel) {
            var boxes = cellSel.boxes.getOr([]);

            if (boxes.length === 1) {
              var singleCell = boxes[0];
              var isNonEditableCell = getRaw(singleCell) === 'false';
              var isCellClosestContentEditable = is(closest(event.target), singleCell, eq$1);

              if (isNonEditableCell && isCellClosestContentEditable) {
                annotations.selectRange(container, boxes, singleCell, singleCell);
                bridge.selectContents(singleCell);
              }
            } else if (boxes.length > 1) {
              annotations.selectRange(container, boxes, cellSel.start, cellSel.finish);
              bridge.selectContents(finish);
            }
          });
        });
      });
    };

    var mousedown = function mousedown(event) {
      annotations.clear(container);
      findCell(event.target, isRoot).each(cursor.set);
    };

    var mouseover = function mouseover(event) {
      applySelection(event);
    };

    var mouseup = function mouseup(event) {
      applySelection(event);
      clearstate();
    };

    return {
      clearstate: clearstate,
      mousedown: mousedown,
      mouseover: mouseover,
      mouseup: mouseup
    };
  };

  var down = {
    traverse: nextSibling,
    gather: after$1,
    relative: Situ.before,
    retry: Retries.tryDown,
    failure: BeforeAfter.failedDown
  };
  var up = {
    traverse: prevSibling,
    gather: before,
    relative: Situ.before,
    retry: Retries.tryUp,
    failure: BeforeAfter.failedUp
  };

  var isKey = function isKey(key) {
    return function (keycode) {
      return keycode === key;
    };
  };

  var isUp = isKey(38);
  var isDown = isKey(40);

  var isNavigation = function isNavigation(keycode) {
    return keycode >= 37 && keycode <= 40;
  };

  var ltr = {
    isBackward: isKey(37),
    isForward: isKey(39)
  };
  var rtl = {
    isBackward: isKey(39),
    isForward: isKey(37)
  };

  var get$3 = function get$3(_DOC) {
    var doc = _DOC !== undefined ? _DOC.dom : document;
    var x = doc.body.scrollLeft || doc.documentElement.scrollLeft;
    var y = doc.body.scrollTop || doc.documentElement.scrollTop;
    return SugarPosition(x, y);
  };

  var by = function by(x, y, _DOC) {
    var doc = _DOC !== undefined ? _DOC.dom : document;
    var win = doc.defaultView;

    if (win) {
      win.scrollBy(x, y);
    }
  };

  var adt = Adt.generate([{
    domRange: ['rng']
  }, {
    relative: ['startSitu', 'finishSitu']
  }, {
    exact: ['start', 'soffset', 'finish', 'foffset']
  }]);

  var exactFromRange = function exactFromRange(simRange) {
    return adt.exact(simRange.start, simRange.soffset, simRange.finish, simRange.foffset);
  };

  var getStart = function getStart(selection) {
    return selection.match({
      domRange: function domRange(rng) {
        return SugarElement.fromDom(rng.startContainer);
      },
      relative: function relative(startSitu, _finishSitu) {
        return Situ.getStart(startSitu);
      },
      exact: function exact(start, _soffset, _finish, _foffset) {
        return start;
      }
    });
  };

  var domRange = adt.domRange;
  var relative = adt.relative;
  var exact = adt.exact;

  var getWin = function getWin(selection) {
    var start = getStart(selection);
    return defaultView(start);
  };

  var range = SimRange.create;
  var SimSelection = {
    domRange: domRange,
    relative: relative,
    exact: exact,
    exactFromRange: exactFromRange,
    getWin: getWin,
    range: range
  };

  var caretPositionFromPoint = function caretPositionFromPoint(doc, x, y) {
    var _a, _b;

    return Optional.from((_b = (_a = doc.dom).caretPositionFromPoint) === null || _b === void 0 ? void 0 : _b.call(_a, x, y)).bind(function (pos) {
      if (pos.offsetNode === null) {
        return Optional.none();
      }

      var r = doc.dom.createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Optional.some(r);
    });
  };

  var caretRangeFromPoint = function caretRangeFromPoint(doc, x, y) {
    var _a, _b;

    return Optional.from((_b = (_a = doc.dom).caretRangeFromPoint) === null || _b === void 0 ? void 0 : _b.call(_a, x, y));
  };

  var availableSearch = function () {
    if (document.caretPositionFromPoint) {
      return caretPositionFromPoint;
    } else if (document.caretRangeFromPoint) {
      return caretRangeFromPoint;
    } else {
      return Optional.none;
    }
  }();

  var fromPoint = function fromPoint(win, x, y) {
    var doc = SugarElement.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return SimRange.create(SugarElement.fromDom(rng.startContainer), rng.startOffset, SugarElement.fromDom(rng.endContainer), rng.endOffset);
    });
  };

  var beforeSpecial = function beforeSpecial(element, offset) {
    var name$1 = name(element);

    if ('input' === name$1) {
      return Situ.after(element);
    } else if (!contains$2(['br', 'img'], name$1)) {
      return Situ.on(element, offset);
    } else {
      return offset === 0 ? Situ.before(element) : Situ.after(element);
    }
  };

  var preprocessRelative = function preprocessRelative(startSitu, finishSitu) {
    var start = startSitu.fold(Situ.before, beforeSpecial, Situ.after);
    var finish = finishSitu.fold(Situ.before, beforeSpecial, Situ.after);
    return SimSelection.relative(start, finish);
  };

  var preprocessExact = function preprocessExact(start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return SimSelection.relative(startSitu, finishSitu);
  };

  var makeRange = function makeRange(start, soffset, finish, foffset) {
    var doc = owner(start);
    var rng = doc.dom.createRange();
    rng.setStart(start.dom, soffset);
    rng.setEnd(finish.dom, foffset);
    return rng;
  };

  var after = function after(start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = eq$1(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };

  var getNativeSelection = function getNativeSelection(win) {
    return Optional.from(win.getSelection());
  };

  var doSetNativeRange = function doSetNativeRange(win, rng) {
    getNativeSelection(win).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };

  var doSetRange = function doSetRange(win, start, soffset, finish, foffset) {
    var rng = exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };

  var setLegacyRtlRange = function setLegacyRtlRange(win, selection, start, soffset, finish, foffset) {
    selection.collapse(start.dom, soffset);
    selection.extend(finish.dom, foffset);
  };

  var setRangeFromRelative = function setRangeFromRelative(win, relative) {
    return diagnose(win, relative).match({
      ltr: function ltr(start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function rtl(start, soffset, finish, foffset) {
        getNativeSelection(win).each(function (selection) {
          if (selection.setBaseAndExtent) {
            selection.setBaseAndExtent(start.dom, soffset, finish.dom, foffset);
          } else if (selection.extend) {
            try {
              setLegacyRtlRange(win, selection, start, soffset, finish, foffset);
            } catch (e) {
              doSetRange(win, finish, foffset, start, soffset);
            }
          } else {
            doSetRange(win, finish, foffset, start, soffset);
          }
        });
      }
    });
  };

  var setExact = function setExact(win, start, soffset, finish, foffset) {
    var relative = preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };

  var setRelative = function setRelative(win, startSitu, finishSitu) {
    var relative = preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };

  var readRange = function readRange(selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Optional.some(SimRange.create(SugarElement.fromDom(firstRng.startContainer), firstRng.startOffset, SugarElement.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Optional.none();
    }
  };

  var doGetExact = function doGetExact(selection) {
    if (selection.anchorNode === null || selection.focusNode === null) {
      return readRange(selection);
    } else {
      var anchor = SugarElement.fromDom(selection.anchorNode);
      var focus = SugarElement.fromDom(selection.focusNode);
      return after(anchor, selection.anchorOffset, focus, selection.focusOffset) ? Optional.some(SimRange.create(anchor, selection.anchorOffset, focus, selection.focusOffset)) : readRange(selection);
    }
  };

  var setToElement = function setToElement(win, element) {
    var selectNodeContents$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var rngGetter = selectNodeContents$1 ? selectNodeContents : selectNode;
    var rng = rngGetter(win, element);
    doSetNativeRange(win, rng);
  };

  var getExact = function getExact(win) {
    return getNativeSelection(win).filter(function (sel) {
      return sel.rangeCount > 0;
    }).bind(doGetExact);
  };

  var get$2 = function get$2(win) {
    return getExact(win).map(function (range) {
      return SimSelection.exact(range.start, range.soffset, range.finish, range.foffset);
    });
  };

  var getFirstRect = function getFirstRect(win, selection) {
    var rng = asLtrRange(win, selection);
    return getFirstRect$1(rng);
  };

  var getAtPoint = function getAtPoint(win, x, y) {
    return fromPoint(win, x, y);
  };

  var clear = function clear(win) {
    getNativeSelection(win).each(function (selection) {
      return selection.removeAllRanges();
    });
  };

  var WindowBridge = function WindowBridge(win) {
    var elementFromPoint = function elementFromPoint(x, y) {
      return SugarElement.fromPoint(SugarElement.fromDom(win.document), x, y);
    };

    var getRect = function getRect(element) {
      return element.dom.getBoundingClientRect();
    };

    var getRangedRect = function getRangedRect(start, soffset, finish, foffset) {
      var sel = SimSelection.exact(start, soffset, finish, foffset);
      return getFirstRect(win, sel);
    };

    var getSelection = function getSelection() {
      return get$2(win).map(function (exactAdt) {
        return convertToRange(win, exactAdt);
      });
    };

    var fromSitus = function fromSitus(situs) {
      var relative = SimSelection.relative(situs.start, situs.finish);
      return convertToRange(win, relative);
    };

    var situsFromPoint = function situsFromPoint(x, y) {
      return getAtPoint(win, x, y).map(function (exact) {
        return Situs.create(exact.start, exact.soffset, exact.finish, exact.foffset);
      });
    };

    var clearSelection = function clearSelection() {
      clear(win);
    };

    var collapseSelection = function collapseSelection() {
      var toStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      get$2(win).each(function (sel) {
        return sel.fold(function (rng) {
          return rng.collapse(toStart);
        }, function (startSitu, finishSitu) {
          var situ = toStart ? startSitu : finishSitu;
          setRelative(win, situ, situ);
        }, function (start, soffset, finish, foffset) {
          var node = toStart ? start : finish;
          var offset = toStart ? soffset : foffset;
          setExact(win, node, offset, node, offset);
        });
      });
    };

    var selectNode = function selectNode(element) {
      setToElement(win, element, false);
    };

    var selectContents = function selectContents(element) {
      setToElement(win, element);
    };

    var setSelection = function setSelection(sel) {
      setExact(win, sel.start, sel.soffset, sel.finish, sel.foffset);
    };

    var setRelativeSelection = function setRelativeSelection(start, finish) {
      setRelative(win, start, finish);
    };

    var getInnerHeight = function getInnerHeight() {
      return win.innerHeight;
    };

    var getScrollY = function getScrollY() {
      var pos = get$3(SugarElement.fromDom(win.document));
      return pos.top;
    };

    var scrollBy = function scrollBy(x, y) {
      by(x, y, SugarElement.fromDom(win.document));
    };

    return {
      elementFromPoint: elementFromPoint,
      getRect: getRect,
      getRangedRect: getRangedRect,
      getSelection: getSelection,
      fromSitus: fromSitus,
      situsFromPoint: situsFromPoint,
      clearSelection: clearSelection,
      collapseSelection: collapseSelection,
      setSelection: setSelection,
      setRelativeSelection: setRelativeSelection,
      selectNode: selectNode,
      selectContents: selectContents,
      getInnerHeight: getInnerHeight,
      getScrollY: getScrollY,
      scrollBy: scrollBy
    };
  };

  var rc = function rc(rows, cols) {
    return {
      rows: rows,
      cols: cols
    };
  };

  var mouse = function mouse(win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);
    var handlers = MouseSelection(bridge, container, isRoot, annotations);
    return {
      clearstate: handlers.clearstate,
      mousedown: handlers.mousedown,
      mouseover: handlers.mouseover,
      mouseup: handlers.mouseup
    };
  };

  var keyboard = function keyboard(win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);

    var clearToNavigate = function clearToNavigate() {
      annotations.clear(container);
      return Optional.none();
    };

    var keydown = function keydown(event, start, soffset, finish, foffset, direction) {
      var realEvent = event.raw;
      var keycode = realEvent.which;
      var shiftKey = realEvent.shiftKey === true;
      var handler = retrieve$1(container, annotations.selectedSelector).fold(function () {
        if (isNavigation(keycode) && !shiftKey) {
          annotations.clearBeforeUpdate(container);
        }

        if (isDown(keycode) && shiftKey) {
          return curry(select, bridge, container, isRoot, down, finish, start, annotations.selectRange);
        } else if (isUp(keycode) && shiftKey) {
          return curry(select, bridge, container, isRoot, up, finish, start, annotations.selectRange);
        } else if (isDown(keycode)) {
          return curry(navigate, bridge, isRoot, down, finish, start, lastDownCheck);
        } else if (isUp(keycode)) {
          return curry(navigate, bridge, isRoot, up, finish, start, firstUpCheck);
        } else {
          return Optional.none;
        }
      }, function (selected) {
        var update$1 = function update$1(attempts) {
          return function () {
            var navigation = findMap(attempts, function (delta) {
              return update(delta.rows, delta.cols, container, selected, annotations);
            });
            return navigation.fold(function () {
              return getEdges(container, annotations.firstSelectedSelector, annotations.lastSelectedSelector).map(function (edges) {
                var relative = isDown(keycode) || direction.isForward(keycode) ? Situ.after : Situ.before;
                bridge.setRelativeSelection(Situ.on(edges.first, 0), relative(edges.table));
                annotations.clear(container);
                return Response.create(Optional.none(), true);
              });
            }, function (_) {
              return Optional.some(Response.create(Optional.none(), true));
            });
          };
        };

        if (isDown(keycode) && shiftKey) {
          return update$1([rc(+1, 0)]);
        } else if (isUp(keycode) && shiftKey) {
          return update$1([rc(-1, 0)]);
        } else if (direction.isBackward(keycode) && shiftKey) {
          return update$1([rc(0, -1), rc(-1, 0)]);
        } else if (direction.isForward(keycode) && shiftKey) {
          return update$1([rc(0, +1), rc(+1, 0)]);
        } else if (isNavigation(keycode) && !shiftKey) {
          return clearToNavigate;
        } else {
          return Optional.none;
        }
      });
      return handler();
    };

    var keyup = function keyup(event, start, soffset, finish, foffset) {
      return retrieve$1(container, annotations.selectedSelector).fold(function () {
        var realEvent = event.raw;
        var keycode = realEvent.which;
        var shiftKey = realEvent.shiftKey === true;

        if (!shiftKey) {
          return Optional.none();
        }

        if (isNavigation(keycode)) {
          return sync(container, isRoot, start, soffset, finish, foffset, annotations.selectRange);
        } else {
          return Optional.none();
        }
      }, Optional.none);
    };

    return {
      keydown: keydown,
      keyup: keyup
    };
  };

  var external = function external(win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);
    return function (start, finish) {
      annotations.clearBeforeUpdate(container);
      identify(start, finish, isRoot).each(function (cellSel) {
        var boxes = cellSel.boxes.getOr([]);
        annotations.selectRange(container, boxes, cellSel.start, cellSel.finish);
        bridge.selectContents(finish);
        bridge.collapseSelection();
      });
    };
  };

  var read = function read(element, attr) {
    var value = get$b(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };

  var add$2 = function add$2(element, attr, id) {
    var old = read(element, attr);
    var nu = old.concat([id]);
    set$2(element, attr, nu.join(' '));
    return true;
  };

  var remove$4 = function remove$4(element, attr, id) {
    var nu = filter$2(read(element, attr), function (v) {
      return v !== id;
    });

    if (nu.length > 0) {
      set$2(element, attr, nu.join(' '));
    } else {
      remove$7(element, attr);
    }

    return false;
  };

  var supports = function supports(element) {
    return element.dom.classList !== undefined;
  };

  var get$1 = function get$1(element) {
    return read(element, 'class');
  };

  var add$1 = function add$1(element, clazz) {
    return add$2(element, 'class', clazz);
  };

  var remove$3 = function remove$3(element, clazz) {
    return remove$4(element, 'class', clazz);
  };

  var add = function add(element, clazz) {
    if (supports(element)) {
      element.dom.classList.add(clazz);
    } else {
      add$1(element, clazz);
    }
  };

  var cleanClass = function cleanClass(element) {
    var classList = supports(element) ? element.dom.classList : get$1(element);

    if (classList.length === 0) {
      remove$7(element, 'class');
    }
  };

  var remove$2 = function remove$2(element, clazz) {
    if (supports(element)) {
      var classList = element.dom.classList;
      classList.remove(clazz);
    } else {
      remove$3(element, clazz);
    }

    cleanClass(element);
  };

  var has = function has(element, clazz) {
    return supports(element) && element.dom.classList.contains(clazz);
  };

  var remove$1 = function remove$1(element, classes) {
    each$2(classes, function (x) {
      remove$2(element, x);
    });
  };

  var addClass = function addClass(clazz) {
    return function (element) {
      add(element, clazz);
    };
  };

  var removeClasses = function removeClasses(classes) {
    return function (element) {
      remove$1(element, classes);
    };
  };

  var byClass = function byClass(ephemera) {
    var addSelectionClass = addClass(ephemera.selected);
    var removeSelectionClasses = removeClasses([ephemera.selected, ephemera.lastSelected, ephemera.firstSelected]);

    var clear = function clear(container) {
      var sels = descendants(container, ephemera.selectedSelector);
      each$2(sels, removeSelectionClasses);
    };

    var selectRange = function selectRange(container, cells, start, finish) {
      clear(container);
      each$2(cells, addSelectionClass);
      add(start, ephemera.firstSelected);
      add(finish, ephemera.lastSelected);
    };

    return {
      clearBeforeUpdate: clear,
      clear: clear,
      selectRange: selectRange,
      selectedSelector: ephemera.selectedSelector,
      firstSelectedSelector: ephemera.firstSelectedSelector,
      lastSelectedSelector: ephemera.lastSelectedSelector
    };
  };

  var byAttr = function byAttr(ephemera, onSelection, onClear) {
    var removeSelectionAttributes = function removeSelectionAttributes(element) {
      remove$7(element, ephemera.selected);
      remove$7(element, ephemera.firstSelected);
      remove$7(element, ephemera.lastSelected);
    };

    var addSelectionAttribute = function addSelectionAttribute(element) {
      set$2(element, ephemera.selected, '1');
    };

    var clear = function clear(container) {
      clearBeforeUpdate(container);
      onClear();
    };

    var clearBeforeUpdate = function clearBeforeUpdate(container) {
      var sels = descendants(container, "".concat(ephemera.selectedSelector, ",").concat(ephemera.firstSelectedSelector, ",").concat(ephemera.lastSelectedSelector));
      each$2(sels, removeSelectionAttributes);
    };

    var selectRange = function selectRange(container, cells, start, finish) {
      clear(container);
      each$2(cells, addSelectionAttribute);
      set$2(start, ephemera.firstSelected, '1');
      set$2(finish, ephemera.lastSelected, '1');
      onSelection(cells, start, finish);
    };

    return {
      clearBeforeUpdate: clearBeforeUpdate,
      clear: clear,
      selectRange: selectRange,
      selectedSelector: ephemera.selectedSelector,
      firstSelectedSelector: ephemera.firstSelectedSelector,
      lastSelectedSelector: ephemera.lastSelectedSelector
    };
  };

  var SelectionAnnotation = {
    byClass: byClass,
    byAttr: byAttr
  };

  var fold = function fold(subject, onNone, onMultiple, onSingle) {
    switch (subject.tag) {
      case 'none':
        return onNone();

      case 'single':
        return onSingle(subject.element);

      case 'multiple':
        return onMultiple(subject.elements);
    }
  };

  var none = function none() {
    return {
      tag: 'none'
    };
  };

  var multiple = function multiple(elements) {
    return {
      tag: 'multiple',
      elements: elements
    };
  };

  var single = function single(element) {
    return {
      tag: 'single',
      element: element
    };
  };

  var Selections = function Selections(lazyRoot, getStart, selectedSelector) {
    var get = function get() {
      return retrieve(lazyRoot(), selectedSelector).fold(function () {
        return getStart().fold(none, single);
      }, multiple);
    };

    return {
      get: get
    };
  };

  var getUpOrLeftCells = function getUpOrLeftCells(grid, selectedCells) {
    var upGrid = grid.slice(0, selectedCells[selectedCells.length - 1].row + 1);
    var upDetails = toDetailList(upGrid);
    return bind$2(upDetails, function (detail) {
      var slicedCells = detail.cells.slice(0, selectedCells[selectedCells.length - 1].column + 1);
      return map$1(slicedCells, function (cell) {
        return cell.element;
      });
    });
  };

  var getDownOrRightCells = function getDownOrRightCells(grid, selectedCells) {
    var downGrid = grid.slice(selectedCells[0].row + selectedCells[0].rowspan - 1, grid.length);
    var downDetails = toDetailList(downGrid);
    return bind$2(downDetails, function (detail) {
      var slicedCells = detail.cells.slice(selectedCells[0].column + selectedCells[0].colspan - 1, detail.cells.length);
      return map$1(slicedCells, function (cell) {
        return cell.element;
      });
    });
  };

  var getOtherCells = function getOtherCells(table, target, generators) {
    var warehouse = Warehouse.fromTable(table);
    var details = onCells(warehouse, target);
    return details.map(function (selectedCells) {
      var grid = toGrid(warehouse, generators, false);

      var _extractGridDetails5 = extractGridDetails(grid),
          rows = _extractGridDetails5.rows;

      var upOrLeftCells = getUpOrLeftCells(rows, selectedCells);
      var downOrRightCells = getDownOrRightCells(rows, selectedCells);
      return {
        upOrLeftCells: upOrLeftCells,
        downOrRightCells: downOrRightCells
      };
    });
  };

  var mkEvent = function mkEvent(target, x, y, stop, prevent, kill, raw) {
    return {
      target: target,
      x: x,
      y: y,
      stop: stop,
      prevent: prevent,
      kill: kill,
      raw: raw
    };
  };

  var fromRawEvent$1 = function fromRawEvent$1(rawEvent) {
    var target = SugarElement.fromDom(getOriginalEventTarget(rawEvent).getOr(rawEvent.target));

    var stop = function stop() {
      return rawEvent.stopPropagation();
    };

    var prevent = function prevent() {
      return rawEvent.preventDefault();
    };

    var kill = compose(prevent, stop);
    return mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
  };

  var handle = function handle(filter, handler) {
    return function (rawEvent) {
      if (filter(rawEvent)) {
        handler(fromRawEvent$1(rawEvent));
      }
    };
  };

  var binder = function binder(element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom.addEventListener(event, wrapped, useCapture);
    return {
      unbind: curry(unbind, element, event, wrapped, useCapture)
    };
  };

  var bind$1 = function bind$1(element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };

  var unbind = function unbind(element, event, handler, useCapture) {
    element.dom.removeEventListener(event, handler, useCapture);
  };

  var filter = always;

  var bind = function bind(element, event, handler) {
    return bind$1(element, event, filter, handler);
  };

  var fromRawEvent = fromRawEvent$1;

  var hasInternalTarget = function hasInternalTarget(e) {
    return has(SugarElement.fromDom(e.target), 'ephox-snooker-resizer-bar') === false;
  };

  var TableCellSelectionHandler = function TableCellSelectionHandler(editor, resizeHandler) {
    var cellSelection = Selections(function () {
      return SugarElement.fromDom(editor.getBody());
    }, function () {
      return getSelectionCell(getSelectionStart(editor), getIsRoot(editor));
    }, ephemera.selectedSelector);

    var onSelection = function onSelection(cells, start, finish) {
      var tableOpt = table(start);
      tableOpt.each(function (table) {
        var cloneFormats = getTableCloneElements(editor);
        var generators = cellOperations(noop, SugarElement.fromDom(editor.getDoc()), cloneFormats);
        var selectedCells = getCellsFromSelection(editor);
        var otherCells = getOtherCells(table, {
          selection: selectedCells
        }, generators);
        fireTableSelectionChange(editor, cells, start, finish, otherCells);
      });
    };

    var onClear = function onClear() {
      return fireTableSelectionClear(editor);
    };

    var annotations = SelectionAnnotation.byAttr(ephemera, onSelection, onClear);
    editor.on('init', function (_e) {
      var win = editor.getWin();
      var body = getBody(editor);
      var isRoot = getIsRoot(editor);

      var syncSelection = function syncSelection() {
        var sel = editor.selection;
        var start = SugarElement.fromDom(sel.getStart());
        var end = SugarElement.fromDom(sel.getEnd());
        var shared = sharedOne(table, [start, end]);
        shared.fold(function () {
          return annotations.clear(body);
        }, noop);
      };

      var mouseHandlers = mouse(win, body, isRoot, annotations);
      var keyHandlers = keyboard(win, body, isRoot, annotations);
      var external$1 = external(win, body, isRoot, annotations);

      var hasShiftKey = function hasShiftKey(event) {
        return event.raw.shiftKey === true;
      };

      editor.on('TableSelectorChange', function (e) {
        return external$1(e.start, e.finish);
      });

      var handleResponse = function handleResponse(event, response) {
        if (!hasShiftKey(event)) {
          return;
        }

        if (response.kill) {
          event.kill();
        }

        response.selection.each(function (ns) {
          var relative = SimSelection.relative(ns.start, ns.finish);
          var rng = asLtrRange(win, relative);
          editor.selection.setRng(rng);
        });
      };

      var keyup = function keyup(event) {
        var wrappedEvent = fromRawEvent(event);

        if (wrappedEvent.raw.shiftKey && isNavigation(wrappedEvent.raw.which)) {
          var rng = editor.selection.getRng();
          var start = SugarElement.fromDom(rng.startContainer);
          var end = SugarElement.fromDom(rng.endContainer);
          keyHandlers.keyup(wrappedEvent, start, rng.startOffset, end, rng.endOffset).each(function (response) {
            handleResponse(wrappedEvent, response);
          });
        }
      };

      var keydown = function keydown(event) {
        var wrappedEvent = fromRawEvent(event);
        resizeHandler.hide();
        var rng = editor.selection.getRng();
        var start = SugarElement.fromDom(rng.startContainer);
        var end = SugarElement.fromDom(rng.endContainer);
        var direction = onDirection(ltr, rtl)(SugarElement.fromDom(editor.selection.getStart()));
        keyHandlers.keydown(wrappedEvent, start, rng.startOffset, end, rng.endOffset, direction).each(function (response) {
          handleResponse(wrappedEvent, response);
        });
        resizeHandler.show();
      };

      var isLeftMouse = function isLeftMouse(raw) {
        return raw.button === 0;
      };

      var isLeftButtonPressed = function isLeftButtonPressed(raw) {
        if (raw.buttons === undefined) {
          return true;
        }

        return (raw.buttons & 1) !== 0;
      };

      var dragStart = function dragStart(_e) {
        mouseHandlers.clearstate();
      };

      var mouseDown = function mouseDown(e) {
        if (isLeftMouse(e) && hasInternalTarget(e)) {
          mouseHandlers.mousedown(fromRawEvent(e));
        }
      };

      var mouseOver = function mouseOver(e) {
        if (isLeftButtonPressed(e) && hasInternalTarget(e)) {
          mouseHandlers.mouseover(fromRawEvent(e));
        }
      };

      var mouseUp = function mouseUp(e) {
        if (isLeftMouse(e) && hasInternalTarget(e)) {
          mouseHandlers.mouseup(fromRawEvent(e));
        }
      };

      var getDoubleTap = function getDoubleTap() {
        var lastTarget = Cell(SugarElement.fromDom(body));
        var lastTimeStamp = Cell(0);

        var touchEnd = function touchEnd(t) {
          var target = SugarElement.fromDom(t.target);

          if (isTag('td')(target) || isTag('th')(target)) {
            var lT = lastTarget.get();
            var lTS = lastTimeStamp.get();

            if (eq$1(lT, target) && t.timeStamp - lTS < 300) {
              t.preventDefault();
              external$1(target, target);
            }
          }

          lastTarget.set(target);
          lastTimeStamp.set(t.timeStamp);
        };

        return {
          touchEnd: touchEnd
        };
      };

      var doubleTap = getDoubleTap();
      editor.on('dragstart', dragStart);
      editor.on('mousedown', mouseDown);
      editor.on('mouseover', mouseOver);
      editor.on('mouseup', mouseUp);
      editor.on('touchend', doubleTap.touchEnd);
      editor.on('keyup', keyup);
      editor.on('keydown', keydown);
      editor.on('NodeChange', syncSelection);
    });
    editor.on('PreInit', function () {
      editor.serializer.addTempAttr(ephemera.firstSelected);
      editor.serializer.addTempAttr(ephemera.lastSelected);
    });

    var clearSelectedCells = function clearSelectedCells(container) {
      return annotations.clear(SugarElement.fromDom(container));
    };

    var getSelectedCells = function getSelectedCells() {
      return fold(cellSelection.get(), constant([]), function (cells) {
        return map$1(cells, function (cell) {
          return cell.dom;
        });
      }, function (cell) {
        return [cell.dom];
      });
    };

    return {
      getSelectedCells: getSelectedCells,
      clearSelectedCells: clearSelectedCells
    };
  };

  var Event = function Event(fields) {
    var handlers = [];

    var bind = function bind(handler) {
      if (handler === undefined) {
        throw new Error('Event bind error: undefined handler');
      }

      handlers.push(handler);
    };

    var unbind = function unbind(handler) {
      handlers = filter$2(handlers, function (h) {
        return h !== handler;
      });
    };

    var trigger = function trigger() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var event = {};
      each$2(fields, function (name, i) {
        event[name] = args[i];
      });
      each$2(handlers, function (handler) {
        handler(event);
      });
    };

    return {
      bind: bind,
      unbind: unbind,
      trigger: trigger
    };
  };

  var create$1 = function create$1(typeDefs) {
    var registry = map(typeDefs, function (event) {
      return {
        bind: event.bind,
        unbind: event.unbind
      };
    });
    var trigger = map(typeDefs, function (event) {
      return event.trigger;
    });
    return {
      registry: registry,
      trigger: trigger
    };
  };

  var last = function last(fn, rate) {
    var timer = null;

    var cancel = function cancel() {
      if (!isNull(timer)) {
        clearTimeout(timer);
        timer = null;
      }
    };

    var throttle = function throttle() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      cancel();
      timer = setTimeout(function () {
        timer = null;
        fn.apply(null, args);
      }, rate);
    };

    return {
      cancel: cancel,
      throttle: throttle
    };
  };

  var sort = function sort(arr) {
    return arr.slice(0).sort();
  };

  var reqMessage = function reqMessage(required, keys) {
    throw new Error('All required keys (' + sort(required).join(', ') + ') were not specified. Specified keys were: ' + sort(keys).join(', ') + '.');
  };

  var unsuppMessage = function unsuppMessage(unsupported) {
    throw new Error('Unsupported keys for object: ' + sort(unsupported).join(', '));
  };

  var validateStrArr = function validateStrArr(label, array) {
    if (!isArray(array)) {
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    }

    each$2(array, function (a) {
      if (!isString(a)) {
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
      }
    });
  };

  var invalidTypeMessage = function invalidTypeMessage(incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort(incorrect).join(', ') + ') were not.');
  };

  var checkDupes = function checkDupes(everything) {
    var sorted = sort(everything);
    var dupe = find$1(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };

  var base = function base(handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: isFunction,
      label: 'function'
    });
  };

  var baseWith = function baseWith(handleUnsupported, required, pred) {
    if (required.length === 0) {
      throw new Error('You must specify at least one required field.');
    }

    validateStrArr('required', required);
    checkDupes(required);
    return function (obj) {
      var keys$1 = keys(obj);
      var allReqd = forall(required, function (req) {
        return contains$2(keys$1, req);
      });

      if (!allReqd) {
        reqMessage(required, keys$1);
      }

      handleUnsupported(required, keys$1);
      var invalidKeys = filter$2(required, function (key) {
        return !pred.validate(obj[key], key);
      });

      if (invalidKeys.length > 0) {
        invalidTypeMessage(invalidKeys, pred.label);
      }

      return obj;
    };
  };

  var handleExact = function handleExact(required, keys) {
    var unsupported = filter$2(keys, function (key) {
      return !contains$2(required, key);
    });

    if (unsupported.length > 0) {
      unsuppMessage(unsupported);
    }
  };

  var exactly = function exactly(required) {
    return base(handleExact, required);
  };

  var DragMode = exactly(['compare', 'extract', 'mutate', 'sink']);
  var DragSink = exactly(['element', 'start', 'stop', 'destroy']);
  var DragApi = exactly(['forceDrop', 'drop', 'move', 'delayDrop']);

  var InDrag = function InDrag() {
    var previous = Optional.none();

    var reset = function reset() {
      previous = Optional.none();
    };

    var update = function update(mode, nu) {
      var result = previous.map(function (old) {
        return mode.compare(old, nu);
      });
      previous = Optional.some(nu);
      return result;
    };

    var onEvent = function onEvent(event, mode) {
      var dataOption = mode.extract(event);
      dataOption.each(function (data) {
        var offset = update(mode, data);
        offset.each(function (d) {
          events.trigger.move(d);
        });
      });
    };

    var events = create$1({
      move: Event(['info'])
    });
    return {
      onEvent: onEvent,
      reset: reset,
      events: events.registry
    };
  };

  var NoDrag = function NoDrag() {
    var events = create$1({
      move: Event(['info'])
    });
    return {
      onEvent: noop,
      reset: noop,
      events: events.registry
    };
  };

  var Movement = function Movement() {
    var noDragState = NoDrag();
    var inDragState = InDrag();
    var dragState = noDragState;

    var on = function on() {
      dragState.reset();
      dragState = inDragState;
    };

    var off = function off() {
      dragState.reset();
      dragState = noDragState;
    };

    var onEvent = function onEvent(event, mode) {
      dragState.onEvent(event, mode);
    };

    var isOn = function isOn() {
      return dragState === inDragState;
    };

    return {
      on: on,
      off: off,
      isOn: isOn,
      onEvent: onEvent,
      events: inDragState.events
    };
  };

  var setup = function setup(mutation, mode, settings) {
    var active = false;
    var events = create$1({
      start: Event([]),
      stop: Event([])
    });
    var movement = Movement();

    var drop = function drop() {
      sink.stop();

      if (movement.isOn()) {
        movement.off();
        events.trigger.stop();
      }
    };

    var throttledDrop = last(drop, 200);

    var go = function go(parent) {
      sink.start(parent);
      movement.on();
      events.trigger.start();
    };

    var mousemove = function mousemove(event) {
      throttledDrop.cancel();
      movement.onEvent(event, mode);
    };

    movement.events.move.bind(function (event) {
      mode.mutate(mutation, event.info);
    });

    var on = function on() {
      active = true;
    };

    var off = function off() {
      active = false;
    };

    var runIfActive = function runIfActive(f) {
      return function () {
        if (active) {
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          f.apply(null, args);
        }
      };
    };

    var sink = mode.sink(DragApi({
      forceDrop: drop,
      drop: runIfActive(drop),
      move: runIfActive(mousemove),
      delayDrop: runIfActive(throttledDrop.throttle)
    }), settings);

    var destroy = function destroy() {
      sink.destroy();
    };

    return {
      element: sink.element,
      go: go,
      on: on,
      off: off,
      destroy: destroy,
      events: events.registry
    };
  };

  var css = function css(namespace) {
    var dashNamespace = namespace.replace(/\./g, '-');

    var resolve = function resolve(str) {
      return dashNamespace + '-' + str;
    };

    return {
      resolve: resolve
    };
  };

  var styles$1 = css('ephox-dragster');
  var resolve$1 = styles$1.resolve;

  var Blocker = function Blocker(options) {
    var settings = _objectSpread({
      layerClass: resolve$1('blocker')
    }, options);

    var div = SugarElement.fromTag('div');
    set$2(div, 'role', 'presentation');
    setAll(div, {
      position: 'fixed',
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%'
    });
    add(div, resolve$1('blocker'));
    add(div, settings.layerClass);
    var element = constant(div);

    var destroy = function destroy() {
      remove$6(div);
    };

    return {
      element: element,
      destroy: destroy
    };
  };

  var compare = function compare(old, nu) {
    return SugarPosition(nu.left - old.left, nu.top - old.top);
  };

  var extract = function extract(event) {
    return Optional.some(SugarPosition(event.x, event.y));
  };

  var mutate = function mutate(mutation, info) {
    mutation.mutate(info.left, info.top);
  };

  var sink = function sink(dragApi, settings) {
    var blocker = Blocker(settings);
    var mdown = bind(blocker.element(), 'mousedown', dragApi.forceDrop);
    var mup = bind(blocker.element(), 'mouseup', dragApi.drop);
    var mmove = bind(blocker.element(), 'mousemove', dragApi.move);
    var mout = bind(blocker.element(), 'mouseout', dragApi.delayDrop);

    var destroy = function destroy() {
      blocker.destroy();
      mup.unbind();
      mmove.unbind();
      mout.unbind();
      mdown.unbind();
    };

    var start = function start(parent) {
      append$1(parent, blocker.element());
    };

    var stop = function stop() {
      remove$6(blocker.element());
    };

    return DragSink({
      element: blocker.element,
      start: start,
      stop: stop,
      destroy: destroy
    });
  };

  var MouseDrag = DragMode({
    compare: compare,
    extract: extract,
    sink: sink,
    mutate: mutate
  });

  var transform = function transform(mutation) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _a;

    var mode = (_a = settings.mode) !== null && _a !== void 0 ? _a : MouseDrag;
    return setup(mutation, mode, settings);
  };

  var styles = css('ephox-snooker');
  var resolve = styles.resolve;

  var Mutation = function Mutation() {
    var events = create$1({
      drag: Event(['xDelta', 'yDelta'])
    });

    var mutate = function mutate(x, y) {
      events.trigger.drag(x, y);
    };

    return {
      mutate: mutate,
      events: events.registry
    };
  };

  var BarMutation = function BarMutation() {
    var events = create$1({
      drag: Event(['xDelta', 'yDelta', 'target'])
    });
    var target = Optional.none();
    var delegate = Mutation();
    delegate.events.drag.bind(function (event) {
      target.each(function (t) {
        events.trigger.drag(event.xDelta, event.yDelta, t);
      });
    });

    var assign = function assign(t) {
      target = Optional.some(t);
    };

    var get = function get() {
      return target;
    };

    return {
      assign: assign,
      get: get,
      mutate: delegate.mutate,
      events: events.registry
    };
  };

  var col = function col(column, x, y, w, h) {
    var bar = SugarElement.fromTag('div');
    setAll(bar, {
      position: 'absolute',
      left: x - w / 2 + 'px',
      top: y + 'px',
      height: h + 'px',
      width: w + 'px'
    });
    setAll$1(bar, {
      'data-column': column,
      'role': 'presentation'
    });
    return bar;
  };

  var row = function row(r, x, y, w, h) {
    var bar = SugarElement.fromTag('div');
    setAll(bar, {
      position: 'absolute',
      left: x + 'px',
      top: y - h / 2 + 'px',
      height: h + 'px',
      width: w + 'px'
    });
    setAll$1(bar, {
      'data-row': r,
      'role': 'presentation'
    });
    return bar;
  };

  var resizeBar = resolve('resizer-bar');
  var resizeRowBar = resolve('resizer-rows');
  var resizeColBar = resolve('resizer-cols');
  var BAR_THICKNESS = 7;

  var resizableRows = function resizableRows(warehouse, isResizable) {
    return bind$2(warehouse.all, function (row, i) {
      return isResizable(row.element) ? [i] : [];
    });
  };

  var resizableColumns = function resizableColumns(warehouse, isResizable) {
    var resizableCols = [];
    range$1(warehouse.grid.columns, function (index) {
      var colElmOpt = Warehouse.getColumnAt(warehouse, index).map(function (col) {
        return col.element;
      });

      if (colElmOpt.forall(isResizable)) {
        resizableCols.push(index);
      }
    });
    return filter$2(resizableCols, function (colIndex) {
      var columnCells = Warehouse.filterItems(warehouse, function (cell) {
        return cell.column === colIndex;
      });
      return forall(columnCells, function (cell) {
        return isResizable(cell.element);
      });
    });
  };

  var destroy = function destroy(wire) {
    var previous = descendants(wire.parent(), '.' + resizeBar);
    each$2(previous, remove$6);
  };

  var drawBar = function drawBar(wire, positions, create) {
    var origin = wire.origin();
    each$2(positions, function (cpOption) {
      cpOption.each(function (cp) {
        var bar = create(origin, cp);
        add(bar, resizeBar);
        append$1(wire.parent(), bar);
      });
    });
  };

  var refreshCol = function refreshCol(wire, colPositions, position, tableHeight) {
    drawBar(wire, colPositions, function (origin, cp) {
      var colBar = col(cp.col, cp.x - origin.left, position.top - origin.top, BAR_THICKNESS, tableHeight);
      add(colBar, resizeColBar);
      return colBar;
    });
  };

  var refreshRow = function refreshRow(wire, rowPositions, position, tableWidth) {
    drawBar(wire, rowPositions, function (origin, cp) {
      var rowBar = row(cp.row, position.left - origin.left, cp.y - origin.top, tableWidth, BAR_THICKNESS);
      add(rowBar, resizeRowBar);
      return rowBar;
    });
  };

  var refreshGrid = function refreshGrid(warhouse, wire, table, rows, cols) {
    var position = absolute(table);
    var isResizable = wire.isResizable;
    var rowPositions = rows.length > 0 ? height.positions(rows, table) : [];
    var resizableRowBars = rowPositions.length > 0 ? resizableRows(warhouse, isResizable) : [];
    var resizableRowPositions = filter$2(rowPositions, function (_pos, i) {
      return exists(resizableRowBars, function (barIndex) {
        return i === barIndex;
      });
    });
    refreshRow(wire, resizableRowPositions, position, getOuter$2(table));
    var colPositions = cols.length > 0 ? width.positions(cols, table) : [];
    var resizableColBars = colPositions.length > 0 ? resizableColumns(warhouse, isResizable) : [];
    var resizableColPositions = filter$2(colPositions, function (_pos, i) {
      return exists(resizableColBars, function (barIndex) {
        return i === barIndex;
      });
    });
    refreshCol(wire, resizableColPositions, position, getOuter$1(table));
  };

  var refresh = function refresh(wire, table) {
    destroy(wire);

    if (wire.isResizable(table)) {
      var warehouse = Warehouse.fromTable(table);

      var _rows$ = rows(warehouse);

      var cols = columns(warehouse);
      refreshGrid(warehouse, wire, table, _rows$, cols);
    }
  };

  var each = function each(wire, f) {
    var bars = descendants(wire.parent(), '.' + resizeBar);
    each$2(bars, f);
  };

  var hide = function hide(wire) {
    each(wire, function (bar) {
      set$1(bar, 'display', 'none');
    });
  };

  var show = function show(wire) {
    each(wire, function (bar) {
      set$1(bar, 'display', 'block');
    });
  };

  var isRowBar = function isRowBar(element) {
    return has(element, resizeRowBar);
  };

  var isColBar = function isColBar(element) {
    return has(element, resizeColBar);
  };

  var resizeBarDragging = resolve('resizer-bar-dragging');

  var BarManager = function BarManager(wire) {
    var mutation = BarMutation();
    var resizing = transform(mutation, {});
    var hoverTable = Optional.none();

    var getResizer = function getResizer(element, type) {
      return Optional.from(get$b(element, type));
    };

    mutation.events.drag.bind(function (event) {
      getResizer(event.target, 'data-row').each(function (_dataRow) {
        var currentRow = getCssValue(event.target, 'top');
        set$1(event.target, 'top', currentRow + event.yDelta + 'px');
      });
      getResizer(event.target, 'data-column').each(function (_dataCol) {
        var currentCol = getCssValue(event.target, 'left');
        set$1(event.target, 'left', currentCol + event.xDelta + 'px');
      });
    });

    var getDelta = function getDelta(target, dir) {
      var newX = getCssValue(target, dir);
      var oldX = getAttrValue(target, 'data-initial-' + dir, 0);
      return newX - oldX;
    };

    resizing.events.stop.bind(function () {
      mutation.get().each(function (target) {
        hoverTable.each(function (table) {
          getResizer(target, 'data-row').each(function (row) {
            var delta = getDelta(target, 'top');
            remove$7(target, 'data-initial-top');
            events.trigger.adjustHeight(table, delta, parseInt(row, 10));
          });
          getResizer(target, 'data-column').each(function (column) {
            var delta = getDelta(target, 'left');
            remove$7(target, 'data-initial-left');
            events.trigger.adjustWidth(table, delta, parseInt(column, 10));
          });
          refresh(wire, table);
        });
      });
    });

    var handler = function handler(target, dir) {
      events.trigger.startAdjust();
      mutation.assign(target);
      set$2(target, 'data-initial-' + dir, getCssValue(target, dir));
      add(target, resizeBarDragging);
      set$1(target, 'opacity', '0.2');
      resizing.go(wire.parent());
    };

    var mousedown = bind(wire.parent(), 'mousedown', function (event) {
      if (isRowBar(event.target)) {
        handler(event.target, 'top');
      }

      if (isColBar(event.target)) {
        handler(event.target, 'left');
      }
    });

    var isRoot = function isRoot(e) {
      return eq$1(e, wire.view());
    };

    var findClosestEditableTable = function findClosestEditableTable(target) {
      return closest$1(target, 'table', isRoot).filter(isEditable$1);
    };

    var mouseover = bind(wire.view(), 'mouseover', function (event) {
      findClosestEditableTable(event.target).fold(function () {
        if (inBody(event.target)) {
          destroy(wire);
        }
      }, function (table) {
        hoverTable = Optional.some(table);
        refresh(wire, table);
      });
    });

    var destroy$1 = function destroy$1() {
      mousedown.unbind();
      mouseover.unbind();
      resizing.destroy();
      destroy(wire);
    };

    var refresh$1 = function refresh$1(tbl) {
      refresh(wire, tbl);
    };

    var events = create$1({
      adjustHeight: Event(['table', 'delta', 'row']),
      adjustWidth: Event(['table', 'delta', 'column']),
      startAdjust: Event([])
    });
    return {
      destroy: destroy$1,
      refresh: refresh$1,
      on: resizing.on,
      off: resizing.off,
      hideBars: curry(hide, wire),
      showBars: curry(show, wire),
      events: events.registry
    };
  };

  var create = function create(wire, resizing, lazySizing) {
    var hdirection = height;
    var vdirection = width;
    var manager = BarManager(wire);
    var events = create$1({
      beforeResize: Event(['table', 'type']),
      afterResize: Event(['table', 'type']),
      startDrag: Event([])
    });
    manager.events.adjustHeight.bind(function (event) {
      var table = event.table;
      events.trigger.beforeResize(table, 'row');
      var delta = hdirection.delta(event.delta, table);
      adjustHeight(table, delta, event.row, hdirection);
      events.trigger.afterResize(table, 'row');
    });
    manager.events.startAdjust.bind(function (_event) {
      events.trigger.startDrag();
    });
    manager.events.adjustWidth.bind(function (event) {
      var table = event.table;
      events.trigger.beforeResize(table, 'col');
      var delta = vdirection.delta(event.delta, table);
      var tableSize = lazySizing(table);
      adjustWidth(table, delta, event.column, resizing, tableSize);
      events.trigger.afterResize(table, 'col');
    });
    return {
      on: manager.on,
      off: manager.off,
      refreshBars: manager.refresh,
      hideBars: manager.hideBars,
      showBars: manager.showBars,
      destroy: manager.destroy,
      events: events.registry
    };
  };

  var TableResize = {
    create: create
  };

  var only = function only(element, isResizable) {
    var parent = isDocument(element) ? documentElement(element) : element;
    return {
      parent: constant(parent),
      view: constant(element),
      origin: constant(SugarPosition(0, 0)),
      isResizable: isResizable
    };
  };

  var detached = function detached(editable, chrome, isResizable) {
    var origin = function origin() {
      return absolute(chrome);
    };

    return {
      parent: constant(chrome),
      view: constant(editable),
      origin: origin,
      isResizable: isResizable
    };
  };

  var body = function body(editable, chrome, isResizable) {
    return {
      parent: constant(chrome),
      view: constant(editable),
      origin: constant(SugarPosition(0, 0)),
      isResizable: isResizable
    };
  };

  var ResizeWire = {
    only: only,
    detached: detached,
    body: body
  };

  var createContainer = function createContainer() {
    var container = SugarElement.fromTag('div');
    setAll(container, {
      position: 'static',
      height: '0',
      width: '0',
      padding: '0',
      margin: '0',
      border: '0'
    });
    append$1(body$1(), container);
    return container;
  };

  var get = function get(editor, isResizable) {
    return editor.inline ? ResizeWire.body(SugarElement.fromDom(editor.getBody()), createContainer(), isResizable) : ResizeWire.only(SugarElement.fromDom(editor.getDoc()), isResizable);
  };

  var remove = function remove(editor, wire) {
    if (editor.inline) {
      remove$6(wire.parent());
    }
  };

  var isTable = function isTable(node) {
    return isNonNullable(node) && node.tagName === 'TABLE';
  };

  var barResizerPrefix = 'bar-';

  var isResizable = function isResizable(elm) {
    return get$b(elm, 'data-mce-resize') !== 'false';
  };

  var syncPixels = function syncPixels(table) {
    var warehouse = Warehouse.fromTable(table);

    if (!Warehouse.hasColumns(warehouse)) {
      each$2(cells$1(table), function (cell) {
        var computedWidth = get$a(cell, 'width');
        set$1(cell, 'width', computedWidth);
        remove$7(cell, 'width');
      });
    }
  };

  var TableResizeHandler = function TableResizeHandler(editor) {
    var selectionRng = value();
    var tableResize = value();
    var resizeWire = value();
    var startW;
    var startRawW;

    var lazySizing = function lazySizing(table) {
      return get$5(editor, table);
    };

    var lazyResizingBehaviour = function lazyResizingBehaviour() {
      return isPreserveTableColumnResizing(editor) ? preserveTable() : resizeTable();
    };

    var getNumColumns = function getNumColumns(table) {
      return getGridSize(table).columns;
    };

    var afterCornerResize = function afterCornerResize(table, origin, width) {
      var isRightEdgeResize = endsWith(origin, 'e');

      if (startRawW === '') {
        convertToPercentSize(table);
      }

      if (width !== startW && startRawW !== '') {
        set$1(table, 'width', startRawW);
        var resizing = lazyResizingBehaviour();
        var tableSize = lazySizing(table);

        var _col = isPreserveTableColumnResizing(editor) || isRightEdgeResize ? getNumColumns(table) - 1 : 0;

        adjustWidth(table, width - startW, _col, resizing, tableSize);
      } else if (isPercentage$1(startRawW)) {
        var percentW = parseFloat(startRawW.replace('%', ''));
        var targetPercentW = width * percentW / startW;
        set$1(table, 'width', targetPercentW + '%');
      }

      if (isPixel(startRawW)) {
        syncPixels(table);
      }
    };

    var destroy = function destroy() {
      tableResize.on(function (sz) {
        sz.destroy();
      });
      resizeWire.on(function (w) {
        remove(editor, w);
      });
    };

    editor.on('init', function () {
      var rawWire = get(editor, isResizable);
      resizeWire.set(rawWire);

      if (hasTableObjectResizing(editor) && hasTableResizeBars(editor)) {
        var resizing = lazyResizingBehaviour();
        var sz = TableResize.create(rawWire, resizing, lazySizing);
        sz.on();
        sz.events.startDrag.bind(function (_event) {
          selectionRng.set(editor.selection.getRng());
        });
        sz.events.beforeResize.bind(function (event) {
          var rawTable = event.table.dom;
          fireObjectResizeStart(editor, rawTable, getPixelWidth(rawTable), getPixelHeight(rawTable), barResizerPrefix + event.type);
        });
        sz.events.afterResize.bind(function (event) {
          var table = event.table;
          var rawTable = table.dom;
          removeDataStyle(table);
          selectionRng.on(function (rng) {
            editor.selection.setRng(rng);
            editor.focus();
          });
          fireObjectResized(editor, rawTable, getPixelWidth(rawTable), getPixelHeight(rawTable), barResizerPrefix + event.type);
          editor.undoManager.add();
        });
        tableResize.set(sz);
      }
    });
    editor.on('ObjectResizeStart', function (e) {
      var targetElm = e.target;

      if (isTable(targetElm)) {
        var _table2 = SugarElement.fromDom(targetElm);

        each$2(editor.dom.select('.mce-clonedresizable'), function (clone) {
          editor.dom.addClass(clone, 'mce-' + getTableColumnResizingBehaviour(editor) + '-columns');
        });

        if (!isPixelSizing(_table2) && isTablePixelsForced(editor)) {
          convertToPixelSize(_table2);
        } else if (!isPercentSizing(_table2) && isTablePercentagesForced(editor)) {
          convertToPercentSize(_table2);
        }

        if (isNoneSizing(_table2) && startsWith(e.origin, barResizerPrefix)) {
          convertToPercentSize(_table2);
        }

        startW = e.width;
        startRawW = isTableResponsiveForced(editor) ? '' : getRawWidth(editor, targetElm).getOr('');
      }
    });
    editor.on('ObjectResized', function (e) {
      var targetElm = e.target;

      if (isTable(targetElm)) {
        var _table3 = SugarElement.fromDom(targetElm);

        var origin = e.origin;

        if (startsWith(origin, 'corner-')) {
          afterCornerResize(_table3, origin, e.width);
        }

        removeDataStyle(_table3);
        fireTableModified(editor, _table3.dom, styleModified);
      }
    });
    editor.on('SwitchMode', function () {
      tableResize.on(function (resize) {
        if (editor.mode.isReadOnly()) {
          resize.hideBars();
        } else {
          resize.showBars();
        }
      });
    });
    editor.on('remove', function () {
      destroy();
    });

    var refresh = function refresh(table) {
      tableResize.on(function (resize) {
        return resize.refreshBars(SugarElement.fromDom(table));
      });
    };

    var hide = function hide() {
      tableResize.on(function (resize) {
        return resize.hideBars();
      });
    };

    var show = function show() {
      tableResize.on(function (resize) {
        return resize.showBars();
      });
    };

    return {
      refresh: refresh,
      hide: hide,
      show: show
    };
  };

  var setupTable = function setupTable(editor) {
    register(editor);
    var resizeHandler = TableResizeHandler(editor);
    var cellSelectionHandler = TableCellSelectionHandler(editor, resizeHandler);
    var actions = TableActions(editor, resizeHandler, cellSelectionHandler);
    registerCommands(editor, actions);
    registerQueryCommands(editor, actions);
    registerEvents(editor, actions);
    return {
      getSelectedCells: cellSelectionHandler.getSelectedCells,
      clearSelectedCells: cellSelectionHandler.clearSelectedCells
    };
  };

  var DomModel = function DomModel(editor) {
    var table = setupTable(editor);
    return {
      table: table
    };
  };

  var Model = function Model() {
    global$1.add('dom', DomModel);
  };

  Model();
})();