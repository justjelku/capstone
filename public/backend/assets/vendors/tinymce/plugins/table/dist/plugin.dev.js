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

  var global$3 = tinymce.util.Tools.resolve('tinymce.PluginManager');

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

  var eq$1 = function eq$1(t) {
    return function (a) {
      return t === a;
    };
  };

  var isString = isType$1('string');
  var isArray = isType$1('array');
  var isBoolean = isSimpleType('boolean');
  var isUndefined = eq$1(undefined);

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isFunction = isSimpleType('function');
  var isNumber = isSimpleType('number');

  var noop = function noop() {};

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
    for (var _len = arguments.length, initialArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      initialArgs[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      var all = initialArgs.concat(restArgs);
      return fn.apply(null, all);
    };
  }

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

  var size = function size(obj) {
    return keys(obj).length;
  };

  var get$4 = function get$4(obj, key) {
    return has(obj, key) ? Optional.from(obj[key]) : Optional.none();
  };

  var has = function has(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var hasNonNullableKey = function hasNonNullableKey(obj, key) {
    return has(obj, key) && obj[key] !== undefined && obj[key] !== null;
  };

  var nativeIndexOf = Array.prototype.indexOf;
  var nativePush = Array.prototype.push;

  var rawIndexOf = function rawIndexOf(ts, t) {
    return nativeIndexOf.call(ts, t);
  };

  var contains = function contains(xs, x) {
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

  var range = function range(num, f) {
    var r = [];

    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }

    return r;
  };

  var map = function map(xs, f) {
    var len = xs.length;
    var r = new Array(len);

    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i);
    }

    return r;
  };

  var each = function each(xs, f) {
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

  var filter = function filter(xs, pred) {
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
    each(xs, function (x, i) {
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

  var find = function find(xs, pred) {
    return findUntil(xs, pred, never);
  };

  var flatten$1 = function flatten$1(xs) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!isArray(xs[i])) {
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      }

      nativePush.apply(r, xs[i]);
    }

    return r;
  };

  var bind = function bind(xs, f) {
    return flatten$1(map(xs, f));
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

  var mapToObject = function mapToObject(xs, f) {
    var r = {};

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }

    return r;
  };

  var get$3 = function get$3(xs, i) {
    return i >= 0 && i < xs.length ? Optional.some(xs[i]) : Optional.none();
  };

  var head = function head(xs) {
    return get$3(xs, 0);
  };

  var last = function last(xs) {
    return get$3(xs, xs.length - 1);
  };

  var findMap = function findMap(arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);

      if (r.isSome()) {
        return r;
      }
    }

    return Optional.none();
  };

  var fromHtml = function fromHtml(html, scope) {
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

  var fromPoint = function fromPoint(docElm, x, y) {
    return Optional.from(docElm.dom.elementFromPoint(x, y)).map(fromDom$1);
  };

  var SugarElement = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom$1,
    fromPoint: fromPoint
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
    return bypassSelector(base) ? [] : map(base.querySelectorAll(selector), SugarElement.fromDom);
  };

  var one = function one(selector, scope) {
    var base = scope === undefined ? document : scope.dom;
    return bypassSelector(base) ? Optional.none() : Optional.from(base.querySelector(selector)).map(SugarElement.fromDom);
  };

  var eq = function eq(e1, e2) {
    return e1.dom === e2.dom;
  };

  var is$1 = is$2;

  var owner = function owner(element) {
    return SugarElement.fromDom(element.dom.ownerDocument);
  };

  var documentOrOwner = function documentOrOwner(dos) {
    return isDocument(dos) ? dos : owner(dos);
  };

  var parent = function parent(element) {
    return Optional.from(element.dom.parentNode).map(SugarElement.fromDom);
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

  var children$3 = function children$3(element) {
    return map(element.dom.childNodes, SugarElement.fromDom);
  };

  var child$3 = function child$3(element, index) {
    var cs = element.dom.childNodes;
    return Optional.from(cs[index]).map(SugarElement.fromDom);
  };

  var firstChild = function firstChild(element) {
    return child$3(element, 0);
  };

  var isShadowRoot = function isShadowRoot(dos) {
    return isDocumentFragment(dos) && isNonNullable(dos.dom.host);
  };

  var supported = isFunction(Element.prototype.attachShadow) && isFunction(Node.prototype.getRootNode);
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

  var children$2 = function children$2(scope, predicate) {
    return filter(children$3(scope), predicate);
  };

  var descendants$1 = function descendants$1(scope, predicate) {
    var result = [];
    each(children$3(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }

      result = result.concat(descendants$1(x, predicate));
    });
    return result;
  };

  var children$1 = function children$1(scope, selector) {
    return children$2(scope, function (e) {
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

  var ancestor$1 = function ancestor$1(scope, predicate, isRoot) {
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

  var child$2 = function child$2(scope, predicate) {
    var pred = function pred(node) {
      return predicate(SugarElement.fromDom(node));
    };

    var result = find(scope.dom.childNodes, pred);
    return result.map(SugarElement.fromDom);
  };

  var ancestor = function ancestor(scope, selector, isRoot) {
    return ancestor$1(scope, function (e) {
      return is$2(e, selector);
    }, isRoot);
  };

  var child$1 = function child$1(scope, selector) {
    return child$2(scope, function (e) {
      return is$2(e, selector);
    });
  };

  var descendant = function descendant(scope, selector) {
    return one(selector, scope);
  };

  var closest = function closest(scope, selector, isRoot) {
    var is = function is(element, selector) {
      return is$2(element, selector);
    };

    return ClosestOrAncestor(is, ancestor, scope, selector, isRoot);
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

  var setAll = function setAll(element, attrs) {
    var dom = element.dom;
    each$1(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };

  var get$2 = function get$2(element, key) {
    var v = element.dom.getAttribute(key);
    return v === null ? undefined : v;
  };

  var getOpt = function getOpt(element, key) {
    return Optional.from(get$2(element, key));
  };

  var remove$2 = function remove$2(element, key) {
    element.dom.removeAttribute(key);
  };

  var clone = function clone(element) {
    return foldl(element.dom.attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
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

  var lift2 = function lift2(oa, ob, f) {
    return oa.isSome() && ob.isSome() ? Optional.some(f(oa.getOrDie(), ob.getOrDie())) : Optional.none();
  };

  var flatten = function flatten(oot) {
    return oot.bind(identity);
  };

  var someIf = function someIf(b, a) {
    return b ? Optional.some(a) : Optional.none();
  };

  var removeFromStart = function removeFromStart(str, numChars) {
    return str.substring(numChars);
  };

  var checkRange = function checkRange(str, substr, start) {
    return substr === '' || str.length >= substr.length && str.substr(start, start + substr.length) === substr;
  };

  var removeLeading = function removeLeading(str, prefix) {
    return startsWith(str, prefix) ? removeFromStart(str, prefix.length) : str;
  };

  var startsWith = function startsWith(str, prefix) {
    return checkRange(str, prefix, 0);
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

  var isEmpty = function isEmpty(s) {
    return !isNotEmpty(s);
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

  var get$1 = function get$1(element, property) {
    var dom = element.dom;
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    return r === '' && !inBody(element) ? getUnsafeProperty(dom, property) : r;
  };

  var getUnsafeProperty = function getUnsafeProperty(dom, property) {
    return isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };

  var getRaw = function getRaw(element, property) {
    var dom = element.dom;
    var raw = getUnsafeProperty(dom, property);
    return Optional.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };

  var remove$1 = function remove$1(element, property) {
    var dom = element.dom;
    internalRemove(dom, property);

    if (is(getOpt(element, 'style').map(trim), '')) {
      remove$2(element, 'style');
    }
  };

  var getAttrValue = function getAttrValue(cell, name) {
    var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return getOpt(cell, name).map(function (value) {
      return parseInt(value, 10);
    }).getOr(fallback);
  };

  var firstLayer = function firstLayer(scope, selector) {
    return filterFirstLayer(scope, selector, always);
  };

  var filterFirstLayer = function filterFirstLayer(scope, selector, predicate) {
    return bind(children$3(scope), function (x) {
      if (is$2(x, selector)) {
        return predicate(x) ? [x] : [];
      } else {
        return filterFirstLayer(x, selector, predicate);
      }
    });
  };

  var validSectionList = ['tfoot', 'thead', 'tbody', 'colgroup'];

  var isValidSection = function isValidSection(parentName) {
    return contains(validSectionList, parentName);
  };

  var grid = function grid(rows, columns) {
    return {
      rows: rows,
      columns: columns
    };
  };

  var detail = function detail(element, rowspan, colspan) {
    return {
      element: element,
      rowspan: rowspan,
      colspan: colspan
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

  var lookup = function lookup(tags, element) {
    var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : never;

    if (isRoot(element)) {
      return Optional.none();
    }

    if (contains(tags, name(element))) {
      return Optional.some(element);
    }

    var isRootOrUpperTable = function isRootOrUpperTable(elm) {
      return is$2(elm, 'table') || isRoot(elm);
    };

    return ancestor(element, tags.join(','), isRootOrUpperTable);
  };

  var cell = function cell(element, isRoot) {
    return lookup(['td', 'th'], element, isRoot);
  };

  var cells = function cells(ancestor) {
    return firstLayer(ancestor, 'th,td');
  };

  var columns = function columns(ancestor) {
    if (is$2(ancestor, 'colgroup')) {
      return children$1(ancestor, 'col');
    } else {
      return bind(columnGroups(ancestor), function (columnGroup) {
        return children$1(columnGroup, 'col');
      });
    }
  };

  var table = function table(element, isRoot) {
    return closest(element, 'table', isRoot);
  };

  var rows = function rows(ancestor) {
    return firstLayer(ancestor, 'tr');
  };

  var columnGroups = function columnGroups(ancestor) {
    return table(ancestor).fold(constant([]), function (table) {
      return children$1(table, 'colgroup');
    });
  };

  var fromRowsOrColGroups = function fromRowsOrColGroups(elems, getSection) {
    return map(elems, function (row) {
      if (name(row) === 'colgroup') {
        var _cells = map(columns(row), function (column) {
          var colspan = getAttrValue(column, 'span', 1);
          return detail(column, 1, colspan);
        });

        return rowdetail(row, _cells, 'colgroup');
      } else {
        var cells$1 = map(cells(row), function (cell) {
          var rowspan = getAttrValue(cell, 'rowspan', 1);
          var colspan = getAttrValue(cell, 'colspan', 1);
          return detail(cell, rowspan, colspan);
        });
        return rowdetail(row, cells$1, getSection(row));
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
    var rows$1 = rows(table);
    var columnGroups$1 = columnGroups(table);
    var elems = [].concat(_toConsumableArray(columnGroups$1), _toConsumableArray(rows$1));
    return fromRowsOrColGroups(elems, getParentSection);
  };

  var LOCKED_COL_ATTR = 'data-snooker-locked-cols';

  var getLockedColumnsFromTable = function getLockedColumnsFromTable(table) {
    return getOpt(table, LOCKED_COL_ATTR).bind(function (lockedColStr) {
      return Optional.from(lockedColStr.match(/\d+/g));
    }).map(function (lockedCols) {
      return mapToObject(lockedCols, always);
    });
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
    var all = bind(warehouse.all, function (r) {
      return r.cells;
    });
    return filter(all, predicate);
  };

  var generateColumns = function generateColumns(rowData) {
    var columnsGroup = {};
    var index = 0;
    each(rowData.cells, function (column) {
      var colspan = column.colspan;
      range(colspan, function (columnIndex) {
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

    each(rows, function (rowData) {
      var currentRow = [];
      each(rowData.cells, function (rowCell) {
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

    var _last$map$getOrThunk = last(colgroupRows).map(function (rowData) {
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
        columns = _last$map$getOrThunk.columns,
        colgroups = _last$map$getOrThunk.colgroups;

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
    return bind(warehouse.all, function (w) {
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
  var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var getTDTHOverallStyle = function getTDTHOverallStyle(dom, elm, name) {
    var cells = dom.select('td,th', elm);
    var firstChildStyle;

    var checkChildren = function checkChildren(firstChildStyle, elms) {
      for (var i = 0; i < elms.length; i++) {
        var currentStyle = dom.getStyle(elms[i], name);

        if (typeof firstChildStyle === 'undefined') {
          firstChildStyle = currentStyle;
        }

        if (firstChildStyle !== currentStyle) {
          return '';
        }
      }

      return firstChildStyle;
    };

    return checkChildren(firstChildStyle, cells);
  };

  var setAlign = function setAlign(editor, elm, name) {
    global$2.each('left center right'.split(' '), function (align) {
      if (align !== name) {
        editor.formatter.remove('align' + align, {}, elm);
      }
    });

    if (name) {
      editor.formatter.apply('align' + name, {}, elm);
    }
  };

  var setVAlign = function setVAlign(editor, elm, name) {
    global$2.each('top middle bottom'.split(' '), function (align) {
      if (align !== name) {
        editor.formatter.remove('valign' + align, {}, elm);
      }
    });

    if (name) {
      editor.formatter.apply('valign' + name, {}, elm);
    }
  };

  var fireTableModified = function fireTableModified(editor, table, data) {
    editor.dispatch('TableModified', _objectSpread({}, data, {
      table: table
    }));
  };

  var toNumber = function toNumber(px, fallback) {
    return toFloat(px).getOr(fallback);
  };

  var getProp = function getProp(element, name, fallback) {
    return toNumber(get$1(element, name), fallback);
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

  var getInnerWidth = function getInnerWidth(element) {
    return getCalculatedWidth(element, 'content-box');
  };

  var getInner = getInnerWidth;
  var global$1 = tinymce.util.Tools.resolve('tinymce.Env');
  var defaultTableToolbar = 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol';
  var defaultCellBorderWidths = range(5, function (i) {
    var size = "".concat(i + 1, "px");
    return {
      title: size,
      value: size
    };
  });
  var defaultCellBorderStyles = map(['Solid', 'Dotted', 'Dashed', 'Double', 'Groove', 'Ridge', 'Inset', 'Outset', 'None', 'Hidden'], function (type) {
    return {
      title: type,
      value: type.toLowerCase()
    };
  });
  var defaultWidth = '100%';

  var getPixelForcedWidth = function getPixelForcedWidth(editor) {
    var _a;

    var dom = editor.dom;
    var parentBlock = (_a = dom.getParent(editor.selection.getStart(), dom.isBlock)) !== null && _a !== void 0 ? _a : editor.getBody();
    return getInner(SugarElement.fromDom(parentBlock)) + 'px';
  };

  var determineDefaultStyles = function determineDefaultStyles(editor, defaultStyles) {
    if (isResponsiveForced(editor) || !shouldStyleWithCss(editor)) {
      return defaultStyles;
    } else if (isPixelsForced(editor)) {
      return _objectSpread({}, defaultStyles, {
        width: getPixelForcedWidth(editor)
      });
    } else {
      return _objectSpread({}, defaultStyles, {
        width: defaultWidth
      });
    }
  };

  var determineDefaultAttributes = function determineDefaultAttributes(editor, defaultAttributes) {
    if (isResponsiveForced(editor) || shouldStyleWithCss(editor)) {
      return defaultAttributes;
    } else if (isPixelsForced(editor)) {
      return _objectSpread({}, defaultAttributes, {
        width: getPixelForcedWidth(editor)
      });
    } else {
      return _objectSpread({}, defaultAttributes, {
        width: defaultWidth
      });
    }
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register = function register(editor) {
    var registerOption = editor.options.register;
    registerOption('table_border_widths', {
      processor: 'object[]',
      "default": defaultCellBorderWidths
    });
    registerOption('table_border_styles', {
      processor: 'object[]',
      "default": defaultCellBorderStyles
    });
    registerOption('table_cell_advtab', {
      processor: 'boolean',
      "default": true
    });
    registerOption('table_row_advtab', {
      processor: 'boolean',
      "default": true
    });
    registerOption('table_advtab', {
      processor: 'boolean',
      "default": true
    });
    registerOption('table_appearance_options', {
      processor: 'boolean',
      "default": true
    });
    registerOption('table_grid', {
      processor: 'boolean',
      "default": !global$1.deviceType.isTouch()
    });
    registerOption('table_cell_class_list', {
      processor: 'object[]',
      "default": []
    });
    registerOption('table_row_class_list', {
      processor: 'object[]',
      "default": []
    });
    registerOption('table_class_list', {
      processor: 'object[]',
      "default": []
    });
    registerOption('table_toolbar', {
      processor: 'string',
      "default": defaultTableToolbar
    });
    registerOption('table_background_color_map', {
      processor: 'object[]',
      "default": []
    });
    registerOption('table_border_color_map', {
      processor: 'object[]',
      "default": []
    });
  };

  var getTableSizingMode = option('table_sizing_mode');
  var getTableBorderWidths = option('table_border_widths');
  var getTableBorderStyles = option('table_border_styles');
  var hasAdvancedCellTab = option('table_cell_advtab');
  var hasAdvancedRowTab = option('table_row_advtab');
  var hasAdvancedTableTab = option('table_advtab');
  var hasAppearanceOptions = option('table_appearance_options');
  var hasTableGrid = option('table_grid');
  var shouldStyleWithCss = option('table_style_by_css');
  var getCellClassList = option('table_cell_class_list');
  var getRowClassList = option('table_row_class_list');
  var getTableClassList = option('table_class_list');
  var getToolbar = option('table_toolbar');
  var getTableBackgroundColorMap = option('table_background_color_map');
  var getTableBorderColorMap = option('table_border_color_map');

  var isPixelsForced = function isPixelsForced(editor) {
    return getTableSizingMode(editor) === 'fixed';
  };

  var isResponsiveForced = function isResponsiveForced(editor) {
    return getTableSizingMode(editor) === 'responsive';
  };

  var getDefaultStyles = function getDefaultStyles(editor) {
    var options = editor.options;
    var defaultStyles = options.get('table_default_styles');
    return options.isSet('table_default_styles') ? defaultStyles : determineDefaultStyles(editor, defaultStyles);
  };

  var getDefaultAttributes = function getDefaultAttributes(editor) {
    var options = editor.options;
    var defaultAttributes = options.get('table_default_attributes');
    return options.isSet('table_default_attributes') ? defaultAttributes : determineDefaultAttributes(editor, defaultAttributes);
  };

  var getNodeName = function getNodeName(elm) {
    return elm.nodeName.toLowerCase();
  };

  var getBody = function getBody(editor) {
    return SugarElement.fromDom(editor.getBody());
  };

  var getIsRoot = function getIsRoot(editor) {
    return function (element) {
      return eq(element, getBody(editor));
    };
  };

  var removePxSuffix = function removePxSuffix(size) {
    return size ? size.replace(/px$/, '') : '';
  };

  var addPxSuffix = function addPxSuffix(size) {
    return /^\d+(\.\d+)?$/.test(size) ? size + 'px' : size;
  };

  var getSelectionStart = function getSelectionStart(editor) {
    return SugarElement.fromDom(editor.selection.getStart());
  };

  var getSelectionEnd = function getSelectionEnd(editor) {
    return SugarElement.fromDom(editor.selection.getEnd());
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
    var startCoords = Warehouse.findItem(warehouse, startCell, eq);
    var finishCoords = Warehouse.findItem(warehouse, finishCell, eq);
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

  var getBox = function getBox(table, first, last) {
    var warehouse = getWarehouse(table);
    return getBox$1(warehouse, first, last);
  };

  var getWarehouse = Warehouse.fromTable;

  var before = function before(marker, element) {
    var parent$1 = parent(marker);
    parent$1.each(function (v) {
      v.dom.insertBefore(element.dom, marker.dom);
    });
  };

  var after$1 = function after$1(marker, element) {
    var sibling = nextSibling(marker);
    sibling.fold(function () {
      var parent$1 = parent(marker);
      parent$1.each(function (v) {
        append$1(v, element);
      });
    }, function (v) {
      before(v, element);
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

  var wrap = function wrap(element, wrapper) {
    before(element, wrapper);
    append$1(wrapper, element);
  };

  var after = function after(marker, elements) {
    each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      after$1(e, x);
    });
  };

  var append = function append(parent, elements) {
    each(elements, function (x) {
      append$1(parent, x);
    });
  };

  var remove = function remove(element) {
    var dom = element.dom;

    if (dom.parentNode !== null) {
      dom.parentNode.removeChild(dom);
    }
  };

  var unwrap = function unwrap(wrapper) {
    var children = children$3(wrapper);

    if (children.length > 0) {
      after(wrapper, children);
    }

    remove(wrapper);
  };

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

  var get = function get(element) {
    return api.get(element);
  };

  var set = function set(element, value) {
    return api.set(element, value);
  };

  var TagBoundaries = ['body', 'p', 'div', 'article', 'aside', 'figcaption', 'figure', 'footer', 'header', 'nav', 'section', 'ol', 'ul', 'li', 'table', 'thead', 'tbody', 'tfoot', 'caption', 'tr', 'td', 'th', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'address'];

  var DomUniverse = function DomUniverse() {
    var clone$1 = function clone$1(element) {
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

      return contains(TagBoundaries, name(element));
    };

    var isEmptyTag = function isEmptyTag(element) {
      if (!isElement(element)) {
        return false;
      }

      return contains(['br', 'img', 'hr', 'input'], name(element));
    };

    var isNonEditable = function isNonEditable(element) {
      return isElement(element) && get$2(element, 'contenteditable') === 'false';
    };

    var comparePosition = function comparePosition(element, other) {
      return element.dom.compareDocumentPosition(other.dom);
    };

    var copyAttributesTo = function copyAttributesTo(source, destination) {
      var as = clone(source);
      setAll(destination, as);
    };

    var isSpecial = function isSpecial(element) {
      var tag = name(element);
      return contains(['script', 'noscript', 'iframe', 'noframes', 'noembed', 'title', 'style', 'textarea', 'xmp'], tag);
    };

    var getLanguage = function getLanguage(element) {
      return isElement(element) ? getOpt(element, 'lang') : Optional.none();
    };

    return {
      up: constant({
        selector: ancestor,
        closest: closest,
        predicate: ancestor$1,
        all: parents
      }),
      down: constant({
        selector: descendants,
        predicate: descendants$1
      }),
      styles: constant({
        get: get$1,
        getRaw: getRaw,
        set: set$1,
        remove: remove$1
      }),
      attrs: constant({
        get: get$2,
        set: set$2,
        remove: remove$2,
        copyTo: copyAttributesTo
      }),
      insert: constant({
        before: before,
        after: after$1,
        afterAll: after,
        append: append$1,
        appendAll: append,
        prepend: prepend,
        wrap: wrap
      }),
      remove: constant({
        unwrap: unwrap,
        remove: remove
      }),
      create: constant({
        nu: SugarElement.fromTag,
        clone: clone$1,
        text: SugarElement.fromText
      }),
      query: constant({
        comparePosition: comparePosition,
        prevSibling: prevSibling,
        nextSibling: nextSibling
      }),
      property: constant({
        children: children$3,
        name: name,
        parent: parent,
        document: document,
        isText: isText,
        isComment: isComment,
        isElement: isElement,
        isSpecial: isSpecial,
        getLanguage: getLanguage,
        getText: get,
        setText: set,
        isBoundary: isBoundary,
        isEmptyTag: isEmptyTag,
        isNonEditable: isNonEditable
      }),
      eq: eq,
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

  var sharedOne$1 = oneAll;
  var universe = DomUniverse();

  var sharedOne = function sharedOne(look, elements) {
    return sharedOne$1(universe, function (_universe, element) {
      return look(element);
    }, elements);
  };

  var lookupTable = function lookupTable(container) {
    return ancestor(container, 'table');
  };

  var retrieve$1 = function retrieve$1(container, selector) {
    var sels = descendants(container, selector);
    return sels.length > 0 ? Optional.some(sels) : Optional.none();
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

  var retrieve = function retrieve(container, selector) {
    return retrieve$1(container, selector);
  };

  var retrieveBox = function retrieveBox(container, firstSelectedSelector, lastSelectedSelector) {
    return getEdges(container, firstSelectedSelector, lastSelectedSelector).bind(function (edges) {
      var isRoot = function isRoot(ancestor) {
        return eq(container, ancestor);
      };

      var sectionSelector = 'thead,tfoot,tbody,table';
      var firstAncestor = ancestor(edges.first, sectionSelector, isRoot);
      var lastAncestor = ancestor(edges.last, sectionSelector, isRoot);
      return firstAncestor.bind(function (fA) {
        return lastAncestor.bind(function (lA) {
          return eq(fA, lA) ? getBox(edges.table, edges.first, edges.last) : Optional.none();
        });
      });
    });
  };

  var fromDom = function fromDom(nodes) {
    return map(nodes, SugarElement.fromDom);
  };

  var strSelected = 'data-mce-selected';
  var strSelectedSelector = 'td[' + strSelected + '],th[' + strSelected + ']';
  var strFirstSelected = 'data-mce-first-selected';
  var strFirstSelectedSelector = 'td[' + strFirstSelected + '],th[' + strFirstSelected + ']';
  var strLastSelected = 'data-mce-last-selected';
  var strLastSelectedSelector = 'td[' + strLastSelected + '],th[' + strLastSelected + ']';
  var ephemera = {
    selected: strSelected,
    selectedSelector: strSelectedSelector,
    firstSelected: strFirstSelected,
    firstSelectedSelector: strFirstSelectedSelector,
    lastSelected: strLastSelected,
    lastSelectedSelector: strLastSelectedSelector
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
      return closest(cell, selector, isRoot);
    };
  };

  var getSelectionCellOrCaption = getSelectionFromSelector('th,td,caption');
  var getSelectionCell = getSelectionFromSelector('th,td');

  var getCellsFromSelection = function getCellsFromSelection(editor) {
    return fromDom(editor.model.table.getSelectedCells());
  };

  var getRowsFromSelection = function getRowsFromSelection(selected, selector) {
    var cellOpt = getSelectionCell(selected);
    var rowsOpt = cellOpt.bind(function (cell) {
      return table(cell);
    }).map(function (table) {
      return rows(table);
    });
    return lift2(cellOpt, rowsOpt, function (cell, rows) {
      return filter(rows, function (row) {
        return exists(fromDom(row.dom.cells), function (rowCell) {
          return get$2(rowCell, selector) === '1' || eq(rowCell, cell);
        });
      });
    }).getOr([]);
  };

  var verticalAlignValues = [{
    text: 'None',
    value: ''
  }, {
    text: 'Top',
    value: 'top'
  }, {
    text: 'Middle',
    value: 'middle'
  }, {
    text: 'Bottom',
    value: 'bottom'
  }];

  var hexColour = function hexColour(value) {
    return {
      value: value
    };
  };

  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  var isHexString = function isHexString(hex) {
    return shorthandRegex.test(hex) || longformRegex.test(hex);
  };

  var normalizeHex = function normalizeHex(hex) {
    return removeLeading(hex, '#').toUpperCase();
  };

  var fromString$1 = function fromString$1(hex) {
    return isHexString(hex) ? Optional.some({
      value: normalizeHex(hex)
    }) : Optional.none();
  };

  var toHex = function toHex(component) {
    var hex = component.toString(16);
    return (hex.length === 1 ? '0' + hex : hex).toUpperCase();
  };

  var fromRgba = function fromRgba(rgbaColour) {
    var value = toHex(rgbaColour.red) + toHex(rgbaColour.green) + toHex(rgbaColour.blue);
    return hexColour(value);
  };

  var rgbRegex = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i;
  var rgbaRegex = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i;

  var rgbaColour = function rgbaColour(red, green, blue, alpha) {
    return {
      red: red,
      green: green,
      blue: blue,
      alpha: alpha
    };
  };

  var fromStringValues = function fromStringValues(red, green, blue, alpha) {
    var r = parseInt(red, 10);
    var g = parseInt(green, 10);
    var b = parseInt(blue, 10);
    var a = parseFloat(alpha);
    return rgbaColour(r, g, b, a);
  };

  var fromString = function fromString(rgbaString) {
    if (rgbaString === 'transparent') {
      return Optional.some(rgbaColour(0, 0, 0, 0));
    }

    var rgbMatch = rgbRegex.exec(rgbaString);

    if (rgbMatch !== null) {
      return Optional.some(fromStringValues(rgbMatch[1], rgbMatch[2], rgbMatch[3], '1'));
    }

    var rgbaMatch = rgbaRegex.exec(rgbaString);

    if (rgbaMatch !== null) {
      return Optional.some(fromStringValues(rgbaMatch[1], rgbaMatch[2], rgbaMatch[3], rgbaMatch[4]));
    }

    return Optional.none();
  };

  var anyToHex = function anyToHex(color) {
    return fromString$1(color).orThunk(function () {
      return fromString(color).map(fromRgba);
    }).getOrThunk(function () {
      var canvas = document.createElement('canvas');
      canvas.height = 1;
      canvas.width = 1;
      var canvasContext = canvas.getContext('2d');
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      canvasContext.fillStyle = '#FFFFFF';
      canvasContext.fillStyle = color;
      canvasContext.fillRect(0, 0, 1, 1);
      var rgba = canvasContext.getImageData(0, 0, 1, 1).data;
      var r = rgba[0];
      var g = rgba[1];
      var b = rgba[2];
      var a = rgba[3];
      return fromRgba(rgbaColour(r, g, b, a));
    });
  };

  var rgbaToHexString = function rgbaToHexString(color) {
    return fromString(color).map(fromRgba).map(function (h) {
      return '#' + h.value;
    }).getOr(color);
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

  var unbindable = function unbindable() {
    return singleton(function (s) {
      return s.unbind();
    });
  };

  var onSetupToggle = function onSetupToggle(editor, formatName, formatValue) {
    return function (api) {
      var boundCallback = unbindable();
      var isNone = isEmpty(formatValue);

      var init = function init() {
        var selectedCells = getCellsFromSelection(editor);

        var checkNode = function checkNode(cell) {
          return editor.formatter.match(formatName, {
            value: formatValue
          }, cell.dom, isNone);
        };

        if (isNone) {
          api.setActive(!exists(selectedCells, checkNode));
          boundCallback.set(editor.formatter.formatChanged(formatName, function (match) {
            return api.setActive(!match);
          }, true));
        } else {
          api.setActive(forall(selectedCells, checkNode));
          boundCallback.set(editor.formatter.formatChanged(formatName, api.setActive, false, {
            value: formatValue
          }));
        }
      };

      editor.initialized ? init() : editor.on('init', init);
      return boundCallback.clear;
    };
  };

  var isListGroup = function isListGroup(item) {
    return hasNonNullableKey(item, 'menu');
  };

  var buildListItems = function buildListItems(items) {
    return map(items, function (item) {
      var text = item.text || item.title;

      if (isListGroup(item)) {
        return {
          text: text,
          items: buildListItems(item.menu)
        };
      } else {
        return {
          text: text,
          value: item.value
        };
      }
    });
  };

  var buildMenuItems = function buildMenuItems(editor, items, format, _onAction) {
    return map(items, function (item) {
      var text = item.text || item.title;

      if (isListGroup(item)) {
        return {
          type: 'nestedmenuitem',
          text: text,
          getSubmenuItems: function getSubmenuItems() {
            return buildMenuItems(editor, item.menu, format, _onAction);
          }
        };
      } else {
        return {
          text: text,
          type: 'togglemenuitem',
          onAction: function onAction() {
            return _onAction(item.value);
          },
          onSetup: onSetupToggle(editor, format, item.value)
        };
      }
    });
  };

  var applyTableCellStyle = function applyTableCellStyle(editor, style) {
    return function (value) {
      editor.execCommand('mceTableApplyCellStyle', false, _defineProperty({}, style, value));
    };
  };

  var filterNoneItem = function filterNoneItem(list) {
    return bind(list, function (item) {
      if (isListGroup(item)) {
        return [_objectSpread({}, item, {
          menu: filterNoneItem(item.menu)
        })];
      } else {
        return isNotEmpty(item.value) ? [item] : [];
      }
    });
  };

  var generateMenuItemsCallback = function generateMenuItemsCallback(editor, items, format, onAction) {
    return function (callback) {
      return callback(buildMenuItems(editor, items, format, onAction));
    };
  };

  var buildColorMenu = function buildColorMenu(editor, colorList, style) {
    var colorMap = map(colorList, function (entry) {
      return {
        text: entry.title,
        value: '#' + anyToHex(entry.value).value,
        type: 'choiceitem'
      };
    });
    return [{
      type: 'fancymenuitem',
      fancytype: 'colorswatch',
      initData: {
        colors: colorMap.length > 0 ? colorMap : undefined,
        allowCustomColors: false
      },
      onAction: function onAction(data) {
        var value = data.value === 'remove' ? '' : data.value;
        editor.execCommand('mceTableApplyCellStyle', false, _defineProperty({}, style, value));
      }
    }];
  };

  var changeRowHeader = function changeRowHeader(editor) {
    return function () {
      var currentType = editor.queryCommandValue('mceTableRowType');
      var newType = currentType === 'header' ? 'body' : 'header';
      editor.execCommand('mceTableRowType', false, {
        type: newType
      });
    };
  };

  var changeColumnHeader = function changeColumnHeader(editor) {
    return function () {
      var currentType = editor.queryCommandValue('mceTableColType');
      var newType = currentType === 'th' ? 'td' : 'th';
      editor.execCommand('mceTableColType', false, {
        type: newType
      });
    };
  };

  var getClassList$1 = function getClassList$1(editor) {
    var classes = buildListItems(getCellClassList(editor));

    if (classes.length > 0) {
      return Optional.some({
        name: 'class',
        type: 'listbox',
        label: 'Class',
        items: classes
      });
    }

    return Optional.none();
  };

  var children = [{
    name: 'width',
    type: 'input',
    label: 'Width'
  }, {
    name: 'height',
    type: 'input',
    label: 'Height'
  }, {
    name: 'celltype',
    type: 'listbox',
    label: 'Cell type',
    items: [{
      text: 'Cell',
      value: 'td'
    }, {
      text: 'Header cell',
      value: 'th'
    }]
  }, {
    name: 'scope',
    type: 'listbox',
    label: 'Scope',
    items: [{
      text: 'None',
      value: ''
    }, {
      text: 'Row',
      value: 'row'
    }, {
      text: 'Column',
      value: 'col'
    }, {
      text: 'Row group',
      value: 'rowgroup'
    }, {
      text: 'Column group',
      value: 'colgroup'
    }]
  }, {
    name: 'halign',
    type: 'listbox',
    label: 'Horizontal align',
    items: [{
      text: 'None',
      value: ''
    }, {
      text: 'Left',
      value: 'left'
    }, {
      text: 'Center',
      value: 'center'
    }, {
      text: 'Right',
      value: 'right'
    }]
  }, {
    name: 'valign',
    type: 'listbox',
    label: 'Vertical align',
    items: verticalAlignValues
  }];

  var getItems$2 = function getItems$2(editor) {
    return children.concat(getClassList$1(editor).toArray());
  };

  var getAdvancedTab = function getAdvancedTab(editor, dialogName) {
    var emptyBorderStyle = [{
      text: 'Select...',
      value: ''
    }];
    var advTabItems = [{
      name: 'borderstyle',
      type: 'listbox',
      label: 'Border style',
      items: emptyBorderStyle.concat(buildListItems(getTableBorderStyles(editor)))
    }, {
      name: 'bordercolor',
      type: 'colorinput',
      label: 'Border color'
    }, {
      name: 'backgroundcolor',
      type: 'colorinput',
      label: 'Background color'
    }];
    var borderWidth = {
      name: 'borderwidth',
      type: 'input',
      label: 'Border width'
    };
    var items = dialogName === 'cell' ? [borderWidth].concat(advTabItems) : advTabItems;
    return {
      title: 'Advanced',
      name: 'advanced',
      items: items
    };
  };

  var normal = function normal(editor, element) {
    var dom = editor.dom;

    var setAttrib = function setAttrib(attr, value) {
      dom.setAttrib(element, attr, value);
    };

    var setStyle = function setStyle(prop, value) {
      dom.setStyle(element, prop, value);
    };

    var setFormat = function setFormat(formatName, value) {
      if (value === '') {
        editor.formatter.remove(formatName, {
          value: null
        }, element, true);
      } else {
        editor.formatter.apply(formatName, {
          value: value
        }, element);
      }
    };

    return {
      setAttrib: setAttrib,
      setStyle: setStyle,
      setFormat: setFormat
    };
  };

  var DomModifier = {
    normal: normal
  };
  var isHeaderCell = isTag('th');

  var getRowHeaderType = function getRowHeaderType(isHeaderRow, isHeaderCells) {
    if (isHeaderRow && isHeaderCells) {
      return 'sectionCells';
    } else if (isHeaderRow) {
      return 'section';
    } else {
      return 'cells';
    }
  };

  var getRowType$1 = function getRowType$1(row) {
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
    var headerCells = filter(cells, function (cell) {
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
    var rowTypes = map(rows, function (row) {
      return getRowType$1(row).type;
    });
    var hasHeader = contains(rowTypes, 'header');
    var hasFooter = contains(rowTypes, 'footer');

    if (!hasHeader && !hasFooter) {
      return Optional.some('body');
    } else {
      var hasBody = contains(rowTypes, 'body');

      if (hasHeader && !hasBody && !hasFooter) {
        return Optional.some('header');
      } else if (!hasHeader && !hasBody && hasFooter) {
        return Optional.some('footer');
      } else {
        return Optional.none();
      }
    }
  };

  var cached = function cached(f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        r = f.apply(null, args);
      }

      return r;
    };
  };

  var findInWarehouse = function findInWarehouse(warehouse, element) {
    return findMap(warehouse.all, function (r) {
      return find(r.cells, function (e) {
        return eq(element, e.element);
      });
    });
  };

  var extractCells = function extractCells(warehouse, target, predicate) {
    var details = map(target.selection, function (cell$1) {
      return cell(cell$1).bind(function (lc) {
        return findInWarehouse(warehouse, lc);
      }).filter(predicate);
    });
    var cells = cat(details);
    return someIf(cells.length > 0, cells);
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

  var generate = function generate(cases) {
    if (!isArray(cases)) {
      throw new Error('cases must be an array');
    }

    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }

    var constructors = [];
    var adt = {};
    each(cases, function (acase, count) {
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
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
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
            return contains(branchKeys, reqKey);
          });

          if (!allReqd) {
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          }

          return branches[key].apply(null, args);
        };

        return {
          fold: function fold() {
            for (var _len5 = arguments.length, foldArgs = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              foldArgs[_key5] = arguments[_key5];
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
  var adt = Adt.generate([{
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

  _objectSpread({}, adt);

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

  var getRowsType = opGetRowsType;

  var rgbToHex = function rgbToHex(value) {
    return startsWith(value, 'rgb') ? rgbaToHexString(value) : value;
  };

  var extractAdvancedStyles = function extractAdvancedStyles(elm) {
    var element = SugarElement.fromDom(elm);
    return {
      borderwidth: getRaw(element, 'border-width').getOr(''),
      borderstyle: getRaw(element, 'border-style').getOr(''),
      bordercolor: getRaw(element, 'border-color').map(rgbToHex).getOr(''),
      backgroundcolor: getRaw(element, 'background-color').map(rgbToHex).getOr('')
    };
  };

  var getSharedValues = function getSharedValues(data) {
    var baseData = data[0];
    var comparisonData = data.slice(1);
    each(comparisonData, function (items) {
      each(keys(baseData), function (key) {
        each$1(items, function (itemValue, itemKey) {
          var comparisonValue = baseData[key];

          if (comparisonValue !== '' && key === itemKey) {
            if (comparisonValue !== itemValue) {
              baseData[key] = '';
            }
          }
        });
      });
    });
    return baseData;
  };

  var getAlignment = function getAlignment(formats, formatName, editor, elm) {
    return find(formats, function (name) {
      return !isUndefined(editor.formatter.matchNode(elm, formatName + name));
    }).getOr('');
  };

  var getHAlignment = curry(getAlignment, ['left', 'center', 'right'], 'align');
  var getVAlignment = curry(getAlignment, ['top', 'middle', 'bottom'], 'valign');

  var extractDataFromSettings = function extractDataFromSettings(editor, hasAdvTableTab) {
    var style = getDefaultStyles(editor);
    var attrs = getDefaultAttributes(editor);

    var extractAdvancedStyleData = function extractAdvancedStyleData() {
      return {
        borderstyle: get$4(style, 'border-style').getOr(''),
        bordercolor: rgbToHex(get$4(style, 'border-color').getOr('')),
        backgroundcolor: rgbToHex(get$4(style, 'background-color').getOr(''))
      };
    };

    var defaultData = {
      height: '',
      width: '100%',
      cellspacing: '',
      cellpadding: '',
      caption: false,
      "class": '',
      align: '',
      border: ''
    };

    var getBorder = function getBorder() {
      var borderWidth = style['border-width'];

      if (shouldStyleWithCss(editor) && borderWidth) {
        return {
          border: borderWidth
        };
      }

      return get$4(attrs, 'border').fold(function () {
        return {};
      }, function (border) {
        return {
          border: border
        };
      });
    };

    var advStyle = hasAdvTableTab ? extractAdvancedStyleData() : {};

    var getCellPaddingCellSpacing = function getCellPaddingCellSpacing() {
      var spacing = get$4(style, 'border-spacing').or(get$4(attrs, 'cellspacing')).fold(function () {
        return {};
      }, function (cellspacing) {
        return {
          cellspacing: cellspacing
        };
      });
      var padding = get$4(style, 'border-padding').or(get$4(attrs, 'cellpadding')).fold(function () {
        return {};
      }, function (cellpadding) {
        return {
          cellpadding: cellpadding
        };
      });
      return _objectSpread({}, spacing, {}, padding);
    };

    var data = _objectSpread({}, defaultData, {}, style, {}, attrs, {}, advStyle, {}, getBorder(), {}, getCellPaddingCellSpacing());

    return data;
  };

  var getRowType = function getRowType(elm) {
    return table(SugarElement.fromDom(elm)).map(function (table) {
      var target = {
        selection: fromDom(elm.cells)
      };
      return getRowsType(table, target);
    }).getOr('');
  };

  var extractDataFromTableElement = function extractDataFromTableElement(editor, elm, hasAdvTableTab) {
    var getBorder = function getBorder(dom, elm) {
      var optBorderWidth = getRaw(SugarElement.fromDom(elm), 'border-width');

      if (shouldStyleWithCss(editor) && optBorderWidth.isSome()) {
        return optBorderWidth.getOr('');
      }

      return dom.getAttrib(elm, 'border') || getTDTHOverallStyle(editor.dom, elm, 'border-width') || getTDTHOverallStyle(editor.dom, elm, 'border');
    };

    var dom = editor.dom;
    var cellspacing = shouldStyleWithCss(editor) ? dom.getStyle(elm, 'border-spacing') || dom.getAttrib(elm, 'cellspacing') : dom.getAttrib(elm, 'cellspacing') || dom.getStyle(elm, 'border-spacing');
    var cellpadding = shouldStyleWithCss(editor) ? getTDTHOverallStyle(dom, elm, 'padding') || dom.getAttrib(elm, 'cellpadding') : dom.getAttrib(elm, 'cellpadding') || getTDTHOverallStyle(dom, elm, 'padding');
    return _objectSpread({
      width: dom.getStyle(elm, 'width') || dom.getAttrib(elm, 'width'),
      height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
      cellspacing: cellspacing,
      cellpadding: cellpadding,
      border: getBorder(dom, elm),
      caption: !!dom.select('caption', elm)[0],
      "class": dom.getAttrib(elm, 'class', ''),
      align: getHAlignment(editor, elm)
    }, hasAdvTableTab ? extractAdvancedStyles(elm) : {});
  };

  var extractDataFromRowElement = function extractDataFromRowElement(editor, elm, hasAdvancedRowTab) {
    var dom = editor.dom;
    return _objectSpread({
      height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
      "class": dom.getAttrib(elm, 'class', ''),
      type: getRowType(elm),
      align: getHAlignment(editor, elm)
    }, hasAdvancedRowTab ? extractAdvancedStyles(elm) : {});
  };

  var extractDataFromCellElement = function extractDataFromCellElement(editor, cell, hasAdvancedCellTab, column) {
    var dom = editor.dom;
    var colElm = column.getOr(cell);

    var getStyle = function getStyle(element, style) {
      return dom.getStyle(element, style) || dom.getAttrib(element, style);
    };

    return _objectSpread({
      width: getStyle(colElm, 'width'),
      height: getStyle(cell, 'height'),
      scope: dom.getAttrib(cell, 'scope'),
      celltype: getNodeName(cell),
      "class": dom.getAttrib(cell, 'class', ''),
      halign: getHAlignment(editor, cell),
      valign: getVAlignment(editor, cell)
    }, hasAdvancedCellTab ? extractAdvancedStyles(cell) : {});
  };

  var getSelectedCells = function getSelectedCells(table, cells) {
    var warehouse = Warehouse.fromTable(table);
    var allCells = Warehouse.justCells(warehouse);
    var filtered = filter(allCells, function (cellA) {
      return exists(cells, function (cellB) {
        return eq(cellA.element, cellB);
      });
    });
    return map(filtered, function (cell) {
      return {
        element: cell.element.dom,
        column: Warehouse.getColumnAt(warehouse, cell.column).map(function (col) {
          return col.element.dom;
        })
      };
    });
  };

  var updateSimpleProps$1 = function updateSimpleProps$1(modifier, colModifier, data, shouldUpdate) {
    if (shouldUpdate('scope')) {
      modifier.setAttrib('scope', data.scope);
    }

    if (shouldUpdate('class')) {
      modifier.setAttrib('class', data["class"]);
    }

    if (shouldUpdate('height')) {
      modifier.setStyle('height', addPxSuffix(data.height));
    }

    if (shouldUpdate('width')) {
      colModifier.setStyle('width', addPxSuffix(data.width));
    }
  };

  var updateAdvancedProps$1 = function updateAdvancedProps$1(modifier, data, shouldUpdate) {
    if (shouldUpdate('backgroundcolor')) {
      modifier.setFormat('tablecellbackgroundcolor', data.backgroundcolor);
    }

    if (shouldUpdate('bordercolor')) {
      modifier.setFormat('tablecellbordercolor', data.bordercolor);
    }

    if (shouldUpdate('borderstyle')) {
      modifier.setFormat('tablecellborderstyle', data.borderstyle);
    }

    if (shouldUpdate('borderwidth')) {
      modifier.setFormat('tablecellborderwidth', addPxSuffix(data.borderwidth));
    }
  };

  var applyStyleData$1 = function applyStyleData$1(editor, cells, data, wasChanged) {
    var isSingleCell = cells.length === 1;
    each(cells, function (item) {
      var cellElm = item.element;
      var shouldOverrideCurrentValue = isSingleCell ? always : wasChanged;
      var modifier = DomModifier.normal(editor, cellElm);
      var colModifier = item.column.map(function (col) {
        return DomModifier.normal(editor, col);
      }).getOr(modifier);
      updateSimpleProps$1(modifier, colModifier, data, shouldOverrideCurrentValue);

      if (hasAdvancedCellTab(editor)) {
        updateAdvancedProps$1(modifier, data, shouldOverrideCurrentValue);
      }

      if (wasChanged('halign')) {
        setAlign(editor, cellElm, data.halign);
      }

      if (wasChanged('valign')) {
        setVAlign(editor, cellElm, data.valign);
      }
    });
  };

  var applyStructureData$1 = function applyStructureData$1(editor, data) {
    editor.execCommand('mceTableCellType', false, {
      type: data.celltype,
      no_events: true
    });
  };

  var applyCellData = function applyCellData(editor, cells, oldData, data) {
    var modifiedData = filter$1(data, function (value, key) {
      return oldData[key] !== value;
    });

    if (size(modifiedData) > 0 && cells.length >= 1) {
      table(cells[0]).each(function (table) {
        var selectedCells = getSelectedCells(table, cells);
        var styleModified = size(filter$1(modifiedData, function (_value, key) {
          return key !== 'scope' && key !== 'celltype';
        })) > 0;
        var structureModified = has(modifiedData, 'celltype');

        if (styleModified || has(modifiedData, 'scope')) {
          applyStyleData$1(editor, selectedCells, data, curry(has, modifiedData));
        }

        if (structureModified) {
          applyStructureData$1(editor, data);
        }

        fireTableModified(editor, table.dom, {
          structure: structureModified,
          style: styleModified
        });
      });
    }
  };

  var onSubmitCellForm = function onSubmitCellForm(editor, cells, oldData, api) {
    var data = api.getData();
    api.close();
    editor.undoManager.transact(function () {
      applyCellData(editor, cells, oldData, data);
      editor.focus();
    });
  };

  var getData$1 = function getData$1(editor, cells) {
    var cellsData = table(cells[0]).map(function (table) {
      return map(getSelectedCells(table, cells), function (item) {
        return extractDataFromCellElement(editor, item.element, hasAdvancedCellTab(editor), item.column);
      });
    });
    return getSharedValues(cellsData.getOrDie());
  };

  var open$2 = function open$2(editor) {
    var cells = getCellsFromSelection(editor);

    if (cells.length === 0) {
      return;
    }

    var data = getData$1(editor, cells);
    var dialogTabPanel = {
      type: 'tabpanel',
      tabs: [{
        title: 'General',
        name: 'general',
        items: getItems$2(editor)
      }, getAdvancedTab(editor, 'cell')]
    };
    var dialogPanel = {
      type: 'panel',
      items: [{
        type: 'grid',
        columns: 2,
        items: getItems$2(editor)
      }]
    };
    editor.windowManager.open({
      title: 'Cell Properties',
      size: 'normal',
      body: hasAdvancedCellTab(editor) ? dialogTabPanel : dialogPanel,
      buttons: [{
        type: 'cancel',
        name: 'cancel',
        text: 'Cancel'
      }, {
        type: 'submit',
        name: 'save',
        text: 'Save',
        primary: true
      }],
      initialData: data,
      onSubmit: curry(onSubmitCellForm, editor, cells, data)
    });
  };

  var getClassList = function getClassList(editor) {
    var classes = buildListItems(getRowClassList(editor));

    if (classes.length > 0) {
      return Optional.some({
        name: 'class',
        type: 'listbox',
        label: 'Class',
        items: classes
      });
    }

    return Optional.none();
  };

  var formChildren = [{
    type: 'listbox',
    name: 'type',
    label: 'Row type',
    items: [{
      text: 'Header',
      value: 'header'
    }, {
      text: 'Body',
      value: 'body'
    }, {
      text: 'Footer',
      value: 'footer'
    }]
  }, {
    type: 'listbox',
    name: 'align',
    label: 'Alignment',
    items: [{
      text: 'None',
      value: ''
    }, {
      text: 'Left',
      value: 'left'
    }, {
      text: 'Center',
      value: 'center'
    }, {
      text: 'Right',
      value: 'right'
    }]
  }, {
    label: 'Height',
    name: 'height',
    type: 'input'
  }];

  var getItems$1 = function getItems$1(editor) {
    return formChildren.concat(getClassList(editor).toArray());
  };

  var updateSimpleProps = function updateSimpleProps(modifier, data, shouldUpdate) {
    if (shouldUpdate('class')) {
      modifier.setAttrib('class', data["class"]);
    }

    if (shouldUpdate('height')) {
      modifier.setStyle('height', addPxSuffix(data.height));
    }
  };

  var updateAdvancedProps = function updateAdvancedProps(modifier, data, shouldUpdate) {
    if (shouldUpdate('backgroundcolor')) {
      modifier.setStyle('background-color', data.backgroundcolor);
    }

    if (shouldUpdate('bordercolor')) {
      modifier.setStyle('border-color', data.bordercolor);
    }

    if (shouldUpdate('borderstyle')) {
      modifier.setStyle('border-style', data.borderstyle);
    }
  };

  var applyStyleData = function applyStyleData(editor, rows, data, wasChanged) {
    var isSingleRow = rows.length === 1;
    var shouldOverrideCurrentValue = isSingleRow ? always : wasChanged;
    each(rows, function (rowElm) {
      var modifier = DomModifier.normal(editor, rowElm);
      updateSimpleProps(modifier, data, shouldOverrideCurrentValue);

      if (hasAdvancedRowTab(editor)) {
        updateAdvancedProps(modifier, data, shouldOverrideCurrentValue);
      }

      if (wasChanged('align')) {
        setAlign(editor, rowElm, data.align);
      }
    });
  };

  var applyStructureData = function applyStructureData(editor, data) {
    editor.execCommand('mceTableRowType', false, {
      type: data.type,
      no_events: true
    });
  };

  var applyRowData = function applyRowData(editor, rows, oldData, data) {
    var modifiedData = filter$1(data, function (value, key) {
      return oldData[key] !== value;
    });

    if (size(modifiedData) > 0) {
      var typeModified = has(modifiedData, 'type');
      var styleModified = typeModified ? size(modifiedData) > 1 : true;

      if (styleModified) {
        applyStyleData(editor, rows, data, curry(has, modifiedData));
      }

      if (typeModified) {
        applyStructureData(editor, data);
      }

      table(SugarElement.fromDom(rows[0])).each(function (table) {
        return fireTableModified(editor, table.dom, {
          structure: typeModified,
          style: styleModified
        });
      });
    }
  };

  var onSubmitRowForm = function onSubmitRowForm(editor, rows, oldData, api) {
    var data = api.getData();
    api.close();
    editor.undoManager.transact(function () {
      applyRowData(editor, rows, oldData, data);
      editor.focus();
    });
  };

  var open$1 = function open$1(editor) {
    var rows = getRowsFromSelection(getSelectionStart(editor), ephemera.selected);

    if (rows.length === 0) {
      return;
    }

    var rowsData = map(rows, function (rowElm) {
      return extractDataFromRowElement(editor, rowElm.dom, hasAdvancedRowTab(editor));
    });
    var data = getSharedValues(rowsData);
    var dialogTabPanel = {
      type: 'tabpanel',
      tabs: [{
        title: 'General',
        name: 'general',
        items: getItems$1(editor)
      }, getAdvancedTab(editor, 'row')]
    };
    var dialogPanel = {
      type: 'panel',
      items: [{
        type: 'grid',
        columns: 2,
        items: getItems$1(editor)
      }]
    };
    editor.windowManager.open({
      title: 'Row Properties',
      size: 'normal',
      body: hasAdvancedRowTab(editor) ? dialogTabPanel : dialogPanel,
      buttons: [{
        type: 'cancel',
        name: 'cancel',
        text: 'Cancel'
      }, {
        type: 'submit',
        name: 'save',
        text: 'Save',
        primary: true
      }],
      initialData: data,
      onSubmit: curry(onSubmitRowForm, editor, map(rows, function (r) {
        return r.dom;
      }), data)
    });
  };

  var getItems = function getItems(editor, classes, insertNewTable) {
    var rowColCountItems = !insertNewTable ? [] : [{
      type: 'input',
      name: 'cols',
      label: 'Cols',
      inputMode: 'numeric'
    }, {
      type: 'input',
      name: 'rows',
      label: 'Rows',
      inputMode: 'numeric'
    }];
    var alwaysItems = [{
      type: 'input',
      name: 'width',
      label: 'Width'
    }, {
      type: 'input',
      name: 'height',
      label: 'Height'
    }];
    var appearanceItems = hasAppearanceOptions(editor) ? [{
      type: 'input',
      name: 'cellspacing',
      label: 'Cell spacing',
      inputMode: 'numeric'
    }, {
      type: 'input',
      name: 'cellpadding',
      label: 'Cell padding',
      inputMode: 'numeric'
    }, {
      type: 'input',
      name: 'border',
      label: 'Border width'
    }, {
      type: 'label',
      label: 'Caption',
      items: [{
        type: 'checkbox',
        name: 'caption',
        label: 'Show caption'
      }]
    }] : [];
    var alignmentItem = [{
      type: 'listbox',
      name: 'align',
      label: 'Alignment',
      items: [{
        text: 'None',
        value: ''
      }, {
        text: 'Left',
        value: 'left'
      }, {
        text: 'Center',
        value: 'center'
      }, {
        text: 'Right',
        value: 'right'
      }]
    }];
    var classListItem = classes.length > 0 ? [{
      type: 'listbox',
      name: 'class',
      label: 'Class',
      items: classes
    }] : [];
    return rowColCountItems.concat(alwaysItems).concat(appearanceItems).concat(alignmentItem).concat(classListItem);
  };

  var styleTDTH = function styleTDTH(dom, elm, name, value) {
    if (elm.tagName === 'TD' || elm.tagName === 'TH') {
      if (isString(name)) {
        dom.setStyle(elm, name, value);
      } else {
        dom.setStyles(elm, name);
      }
    } else {
      if (elm.children) {
        for (var i = 0; i < elm.children.length; i++) {
          styleTDTH(dom, elm.children[i], name, value);
        }
      }
    }
  };

  var applyDataToElement = function applyDataToElement(editor, tableElm, data) {
    var dom = editor.dom;
    var attrs = {};
    var styles = {};
    attrs["class"] = data["class"];
    styles.height = addPxSuffix(data.height);

    if (shouldStyleWithCss(editor)) {
      styles.width = addPxSuffix(data.width);
    } else if (dom.getAttrib(tableElm, 'width')) {
      attrs.width = removePxSuffix(data.width);
    }

    if (shouldStyleWithCss(editor)) {
      styles['border-width'] = addPxSuffix(data.border);
      styles['border-spacing'] = addPxSuffix(data.cellspacing);
    } else {
      attrs.border = data.border;
      attrs.cellpadding = data.cellpadding;
      attrs.cellspacing = data.cellspacing;
    }

    if (shouldStyleWithCss(editor) && tableElm.children) {
      for (var i = 0; i < tableElm.children.length; i++) {
        styleTDTH(dom, tableElm.children[i], {
          'border-width': addPxSuffix(data.border),
          'padding': addPxSuffix(data.cellpadding)
        });

        if (hasAdvancedTableTab(editor)) {
          styleTDTH(dom, tableElm.children[i], {
            'border-color': data.bordercolor
          });
        }
      }
    }

    if (hasAdvancedTableTab(editor)) {
      styles['background-color'] = data.backgroundcolor;
      styles['border-color'] = data.bordercolor;
      styles['border-style'] = data.borderstyle;
    }

    attrs.style = dom.serializeStyle(_objectSpread({}, getDefaultStyles(editor), {}, styles));
    dom.setAttribs(tableElm, _objectSpread({}, getDefaultAttributes(editor), {}, attrs));
  };

  var onSubmitTableForm = function onSubmitTableForm(editor, tableElm, oldData, api) {
    var dom = editor.dom;
    var data = api.getData();
    var modifiedData = filter$1(data, function (value, key) {
      return oldData[key] !== value;
    });
    api.close();

    if (data["class"] === '') {
      delete data["class"];
    }

    editor.undoManager.transact(function () {
      if (!tableElm) {
        var cols = parseInt(data.cols, 10) || 1;

        var _rows = parseInt(data.rows, 10) || 1;

        editor.execCommand('mceInsertTable', false, {
          rows: _rows,
          columns: cols
        });
        tableElm = getSelectionCell(getSelectionStart(editor), getIsRoot(editor)).bind(function (cell) {
          return table(cell, getIsRoot(editor));
        }).map(function (table) {
          return table.dom;
        }).getOrUndefined();
      }

      if (size(modifiedData) > 0) {
        applyDataToElement(editor, tableElm, data);
        var captionElm = dom.select('caption', tableElm)[0];

        if (captionElm && !data.caption || !captionElm && data.caption) {
          editor.execCommand('mceTableToggleCaption');
        }

        setAlign(editor, tableElm, data.align);
      }

      editor.focus();
      editor.addVisual();

      if (size(modifiedData) > 0) {
        var captionModified = has(modifiedData, 'caption');
        var styleModified = captionModified ? size(modifiedData) > 1 : true;
        fireTableModified(editor, tableElm, {
          structure: captionModified,
          style: styleModified
        });
      }
    });
  };

  var open = function open(editor, insertNewTable) {
    var dom = editor.dom;
    var tableElm;
    var data = extractDataFromSettings(editor, hasAdvancedTableTab(editor));

    if (insertNewTable === false) {
      tableElm = dom.getParent(editor.selection.getStart(), 'table', editor.getBody());

      if (tableElm) {
        data = extractDataFromTableElement(editor, tableElm, hasAdvancedTableTab(editor));
      } else {
        if (hasAdvancedTableTab(editor)) {
          data.borderstyle = '';
          data.bordercolor = '';
          data.backgroundcolor = '';
        }
      }
    } else {
      data.cols = '1';
      data.rows = '1';

      if (hasAdvancedTableTab(editor)) {
        data.borderstyle = '';
        data.bordercolor = '';
        data.backgroundcolor = '';
      }
    }

    var classes = buildListItems(getTableClassList(editor));

    if (classes.length > 0) {
      if (data["class"]) {
        data["class"] = data["class"].replace(/\s*mce\-item\-table\s*/g, '');
      }
    }

    var generalPanel = {
      type: 'grid',
      columns: 2,
      items: getItems(editor, classes, insertNewTable)
    };

    var nonAdvancedForm = function nonAdvancedForm() {
      return {
        type: 'panel',
        items: [generalPanel]
      };
    };

    var advancedForm = function advancedForm() {
      return {
        type: 'tabpanel',
        tabs: [{
          title: 'General',
          name: 'general',
          items: [generalPanel]
        }, getAdvancedTab(editor, 'table')]
      };
    };

    var dialogBody = hasAdvancedTableTab(editor) ? advancedForm() : nonAdvancedForm();
    editor.windowManager.open({
      title: 'Table Properties',
      size: 'normal',
      body: dialogBody,
      onSubmit: curry(onSubmitTableForm, editor, tableElm, data),
      buttons: [{
        type: 'cancel',
        name: 'cancel',
        text: 'Cancel'
      }, {
        type: 'submit',
        name: 'save',
        text: 'Save',
        primary: true
      }],
      initialData: data
    });
  };

  var registerCommands = function registerCommands(editor) {
    each$1({
      mceTableProps: curry(open, editor, false),
      mceTableRowProps: curry(open$1, editor),
      mceTableCellProps: curry(open$2, editor)
    }, function (func, name) {
      return editor.addCommand(name, function () {
        return func();
      });
    });
    editor.addCommand('mceInsertTableDialog', function (_ui) {
      open(editor, true);
    });
  };

  var child = function child(scope, selector) {
    return child$1(scope, selector).isSome();
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

  var noMenu = function noMenu(cell) {
    return {
      element: cell,
      mergable: Optional.none(),
      unmergable: Optional.none(),
      selection: [cell]
    };
  };

  var forMenu = function forMenu(selectedCells, table, cell) {
    return {
      element: cell,
      mergable: mergable(table, selectedCells, ephemera),
      unmergable: unmergable(selectedCells),
      selection: selection(selectedCells)
    };
  };

  var getSelectionTargets = function getSelectionTargets(editor) {
    var targets = Cell(Optional.none());
    var changeHandlers = Cell([]);
    var selectionDetails = Optional.none();
    var isCaption = isTag('caption');

    var isDisabledForSelection = function isDisabledForSelection(key) {
      return selectionDetails.forall(function (details) {
        return !details[key];
      });
    };

    var getStart = function getStart() {
      return getSelectionCellOrCaption(getSelectionStart(editor), getIsRoot(editor));
    };

    var getEnd = function getEnd() {
      return getSelectionCellOrCaption(getSelectionEnd(editor), getIsRoot(editor));
    };

    var findTargets = function findTargets() {
      return getStart().bind(function (startCellOrCaption) {
        return flatten(lift2(table(startCellOrCaption), getEnd().bind(table), function (startTable, endTable) {
          if (eq(startTable, endTable)) {
            if (isCaption(startCellOrCaption)) {
              return Optional.some(noMenu(startCellOrCaption));
            } else {
              return Optional.some(forMenu(getCellsFromSelection(editor), startTable, startCellOrCaption));
            }
          }

          return Optional.none();
        }));
      });
    };

    var getExtractedDetails = function getExtractedDetails(targets) {
      var tableOpt = table(targets.element);
      return tableOpt.map(function (table) {
        var warehouse = Warehouse.fromTable(table);
        var selectedCells = onCells(warehouse, targets).getOr([]);
        var locked = foldl(selectedCells, function (acc, cell) {
          if (cell.isLocked) {
            acc.onAny = true;

            if (cell.column === 0) {
              acc.onFirst = true;
            } else if (cell.column + cell.colspan >= warehouse.grid.columns) {
              acc.onLast = true;
            }
          }

          return acc;
        }, {
          onAny: false,
          onFirst: false,
          onLast: false
        });
        return {
          mergeable: onUnlockedMergable(warehouse, targets).isSome(),
          unmergeable: onUnlockedUnmergable(warehouse, targets).isSome(),
          locked: locked
        };
      });
    };

    var resetTargets = function resetTargets() {
      targets.set(cached(findTargets)());
      selectionDetails = targets.get().bind(getExtractedDetails);
      each(changeHandlers.get(), function (handler) {
        return handler();
      });
    };

    var setupHandler = function setupHandler(handler) {
      handler();
      changeHandlers.set(changeHandlers.get().concat([handler]));
      return function () {
        changeHandlers.set(filter(changeHandlers.get(), function (h) {
          return h !== handler;
        }));
      };
    };

    var onSetup = function onSetup(api, isDisabled) {
      return setupHandler(function () {
        return targets.get().fold(function () {
          api.setEnabled(false);
        }, function (targets) {
          api.setEnabled(!isDisabled(targets));
        });
      });
    };

    var onSetupWithToggle = function onSetupWithToggle(api, isDisabled, isActive) {
      return setupHandler(function () {
        return targets.get().fold(function () {
          api.setEnabled(false);
          api.setActive(false);
        }, function (targets) {
          api.setEnabled(!isDisabled(targets));
          api.setActive(isActive(targets));
        });
      });
    };

    var isDisabledFromLocked = function isDisabledFromLocked(lockedDisable) {
      return selectionDetails.exists(function (details) {
        return details.locked[lockedDisable];
      });
    };

    var onSetupTable = function onSetupTable(api) {
      return onSetup(api, function (_) {
        return false;
      });
    };

    var onSetupCellOrRow = function onSetupCellOrRow(api) {
      return onSetup(api, function (targets) {
        return isCaption(targets.element);
      });
    };

    var onSetupColumn = function onSetupColumn(lockedDisable) {
      return function (api) {
        return onSetup(api, function (targets) {
          return isCaption(targets.element) || isDisabledFromLocked(lockedDisable);
        });
      };
    };

    var onSetupPasteable = function onSetupPasteable(getClipboardData) {
      return function (api) {
        return onSetup(api, function (targets) {
          return isCaption(targets.element) || getClipboardData().isNone();
        });
      };
    };

    var onSetupPasteableColumn = function onSetupPasteableColumn(getClipboardData, lockedDisable) {
      return function (api) {
        return onSetup(api, function (targets) {
          return isCaption(targets.element) || getClipboardData().isNone() || isDisabledFromLocked(lockedDisable);
        });
      };
    };

    var onSetupMergeable = function onSetupMergeable(api) {
      return onSetup(api, function (_targets) {
        return isDisabledForSelection('mergeable');
      });
    };

    var onSetupUnmergeable = function onSetupUnmergeable(api) {
      return onSetup(api, function (_targets) {
        return isDisabledForSelection('unmergeable');
      });
    };

    var onSetupTableWithCaption = function onSetupTableWithCaption(api) {
      return onSetupWithToggle(api, never, function (targets) {
        var tableOpt = table(targets.element, getIsRoot(editor));
        return tableOpt.exists(function (table) {
          return child(table, 'caption');
        });
      });
    };

    var onSetupTableHeaders = function onSetupTableHeaders(command, headerType) {
      return function (api) {
        return onSetupWithToggle(api, function (targets) {
          return isCaption(targets.element);
        }, function () {
          return editor.queryCommandValue(command) === headerType;
        });
      };
    };

    var onSetupTableRowHeaders = onSetupTableHeaders('mceTableRowType', 'header');
    var onSetupTableColumnHeaders = onSetupTableHeaders('mceTableColType', 'th');
    editor.on('NodeChange ExecCommand TableSelectorChange', resetTargets);
    return {
      onSetupTable: onSetupTable,
      onSetupCellOrRow: onSetupCellOrRow,
      onSetupColumn: onSetupColumn,
      onSetupPasteable: onSetupPasteable,
      onSetupPasteableColumn: onSetupPasteableColumn,
      onSetupMergeable: onSetupMergeable,
      onSetupUnmergeable: onSetupUnmergeable,
      resetTargets: resetTargets,
      onSetupTableWithCaption: onSetupTableWithCaption,
      onSetupTableRowHeaders: onSetupTableRowHeaders,
      onSetupTableColumnHeaders: onSetupTableColumnHeaders,
      targets: targets.get
    };
  };

  var global = tinymce.util.Tools.resolve('tinymce.FakeClipboard');
  var tableTypeBase = 'x-tinymce/dom-table-';
  var tableTypeRow = tableTypeBase + 'rows';
  var tableTypeColumn = tableTypeBase + 'columns';

  var getData = function getData(type) {
    var _a;

    var items = (_a = global.read()) !== null && _a !== void 0 ? _a : [];
    return findMap(items, function (item) {
      return Optional.from(item.getType(type));
    });
  };

  var getRows = function getRows() {
    return getData(tableTypeRow);
  };

  var getColumns = function getColumns() {
    return getData(tableTypeColumn);
  };

  var addButtons = function addButtons(editor, selectionTargets) {
    editor.ui.registry.addMenuButton('table', {
      tooltip: 'Table',
      icon: 'table',
      fetch: function fetch(callback) {
        return callback('inserttable | cell row column | advtablesort | tableprops deletetable');
      }
    });

    var cmd = function cmd(command) {
      return function () {
        return editor.execCommand(command);
      };
    };

    var addButtonIfRegistered = function addButtonIfRegistered(name, spec) {
      if (editor.queryCommandSupported(spec.command)) {
        editor.ui.registry.addButton(name, _objectSpread({}, spec, {
          onAction: isFunction(spec.onAction) ? spec.onAction : cmd(spec.command)
        }));
      }
    };

    var addToggleButtonIfRegistered = function addToggleButtonIfRegistered(name, spec) {
      if (editor.queryCommandSupported(spec.command)) {
        editor.ui.registry.addToggleButton(name, _objectSpread({}, spec, {
          onAction: isFunction(spec.onAction) ? spec.onAction : cmd(spec.command)
        }));
      }
    };

    addButtonIfRegistered('tableprops', {
      tooltip: 'Table properties',
      command: 'mceTableProps',
      icon: 'table',
      onSetup: selectionTargets.onSetupTable
    });
    addButtonIfRegistered('tabledelete', {
      tooltip: 'Delete table',
      command: 'mceTableDelete',
      icon: 'table-delete-table',
      onSetup: selectionTargets.onSetupTable
    });
    addButtonIfRegistered('tablecellprops', {
      tooltip: 'Cell properties',
      command: 'mceTableCellProps',
      icon: 'table-cell-properties',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tablemergecells', {
      tooltip: 'Merge cells',
      command: 'mceTableMergeCells',
      icon: 'table-merge-cells',
      onSetup: selectionTargets.onSetupMergeable
    });
    addButtonIfRegistered('tablesplitcells', {
      tooltip: 'Split cell',
      command: 'mceTableSplitCells',
      icon: 'table-split-cells',
      onSetup: selectionTargets.onSetupUnmergeable
    });
    addButtonIfRegistered('tableinsertrowbefore', {
      tooltip: 'Insert row before',
      command: 'mceTableInsertRowBefore',
      icon: 'table-insert-row-above',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tableinsertrowafter', {
      tooltip: 'Insert row after',
      command: 'mceTableInsertRowAfter',
      icon: 'table-insert-row-after',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tabledeleterow', {
      tooltip: 'Delete row',
      command: 'mceTableDeleteRow',
      icon: 'table-delete-row',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tablerowprops', {
      tooltip: 'Row properties',
      command: 'mceTableRowProps',
      icon: 'table-row-properties',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tableinsertcolbefore', {
      tooltip: 'Insert column before',
      command: 'mceTableInsertColBefore',
      icon: 'table-insert-column-before',
      onSetup: selectionTargets.onSetupColumn('onFirst')
    });
    addButtonIfRegistered('tableinsertcolafter', {
      tooltip: 'Insert column after',
      command: 'mceTableInsertColAfter',
      icon: 'table-insert-column-after',
      onSetup: selectionTargets.onSetupColumn('onLast')
    });
    addButtonIfRegistered('tabledeletecol', {
      tooltip: 'Delete column',
      command: 'mceTableDeleteCol',
      icon: 'table-delete-column',
      onSetup: selectionTargets.onSetupColumn('onAny')
    });
    addButtonIfRegistered('tablecutrow', {
      tooltip: 'Cut row',
      command: 'mceTableCutRow',
      icon: 'cut-row',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tablecopyrow', {
      tooltip: 'Copy row',
      command: 'mceTableCopyRow',
      icon: 'duplicate-row',
      onSetup: selectionTargets.onSetupCellOrRow
    });
    addButtonIfRegistered('tablepasterowbefore', {
      tooltip: 'Paste row before',
      command: 'mceTablePasteRowBefore',
      icon: 'paste-row-before',
      onSetup: selectionTargets.onSetupPasteable(getRows)
    });
    addButtonIfRegistered('tablepasterowafter', {
      tooltip: 'Paste row after',
      command: 'mceTablePasteRowAfter',
      icon: 'paste-row-after',
      onSetup: selectionTargets.onSetupPasteable(getRows)
    });
    addButtonIfRegistered('tablecutcol', {
      tooltip: 'Cut column',
      command: 'mceTableCutCol',
      icon: 'cut-column',
      onSetup: selectionTargets.onSetupColumn('onAny')
    });
    addButtonIfRegistered('tablecopycol', {
      tooltip: 'Copy column',
      command: 'mceTableCopyCol',
      icon: 'duplicate-column',
      onSetup: selectionTargets.onSetupColumn('onAny')
    });
    addButtonIfRegistered('tablepastecolbefore', {
      tooltip: 'Paste column before',
      command: 'mceTablePasteColBefore',
      icon: 'paste-column-before',
      onSetup: selectionTargets.onSetupPasteableColumn(getColumns, 'onFirst')
    });
    addButtonIfRegistered('tablepastecolafter', {
      tooltip: 'Paste column after',
      command: 'mceTablePasteColAfter',
      icon: 'paste-column-after',
      onSetup: selectionTargets.onSetupPasteableColumn(getColumns, 'onLast')
    });
    addButtonIfRegistered('tableinsertdialog', {
      tooltip: 'Insert table',
      command: 'mceInsertTableDialog',
      icon: 'table'
    });
    var tableClassList = filterNoneItem(getTableClassList(editor));

    if (tableClassList.length !== 0 && editor.queryCommandSupported('mceTableToggleClass')) {
      editor.ui.registry.addMenuButton('tableclass', {
        icon: 'table-classes',
        tooltip: 'Table styles',
        fetch: generateMenuItemsCallback(editor, tableClassList, 'tableclass', function (value) {
          return editor.execCommand('mceTableToggleClass', false, value);
        }),
        onSetup: selectionTargets.onSetupTable
      });
    }

    var tableCellClassList = filterNoneItem(getCellClassList(editor));

    if (tableCellClassList.length !== 0 && editor.queryCommandSupported('mceTableCellToggleClass')) {
      editor.ui.registry.addMenuButton('tablecellclass', {
        icon: 'table-cell-classes',
        tooltip: 'Cell styles',
        fetch: generateMenuItemsCallback(editor, tableCellClassList, 'tablecellclass', function (value) {
          return editor.execCommand('mceTableCellToggleClass', false, value);
        }),
        onSetup: selectionTargets.onSetupCellOrRow
      });
    }

    if (editor.queryCommandSupported('mceTableApplyCellStyle')) {
      editor.ui.registry.addMenuButton('tablecellvalign', {
        icon: 'vertical-align',
        tooltip: 'Vertical align',
        fetch: generateMenuItemsCallback(editor, verticalAlignValues, 'tablecellverticalalign', applyTableCellStyle(editor, 'vertical-align')),
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addMenuButton('tablecellborderwidth', {
        icon: 'border-width',
        tooltip: 'Border width',
        fetch: generateMenuItemsCallback(editor, getTableBorderWidths(editor), 'tablecellborderwidth', applyTableCellStyle(editor, 'border-width')),
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addMenuButton('tablecellborderstyle', {
        icon: 'border-style',
        tooltip: 'Border style',
        fetch: generateMenuItemsCallback(editor, getTableBorderStyles(editor), 'tablecellborderstyle', applyTableCellStyle(editor, 'border-style')),
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addMenuButton('tablecellbackgroundcolor', {
        icon: 'cell-background-color',
        tooltip: 'Background color',
        fetch: function fetch(callback) {
          return callback(buildColorMenu(editor, getTableBackgroundColorMap(editor), 'background-color'));
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addMenuButton('tablecellbordercolor', {
        icon: 'cell-border-color',
        tooltip: 'Border color',
        fetch: function fetch(callback) {
          return callback(buildColorMenu(editor, getTableBorderColorMap(editor), 'border-color'));
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
    }

    addToggleButtonIfRegistered('tablecaption', {
      tooltip: 'Table caption',
      icon: 'table-caption',
      command: 'mceTableToggleCaption',
      onSetup: selectionTargets.onSetupTableWithCaption
    });
    addToggleButtonIfRegistered('tablerowheader', {
      tooltip: 'Row header',
      icon: 'table-top-header',
      command: 'mceTableRowType',
      onAction: changeRowHeader(editor),
      onSetup: selectionTargets.onSetupTableRowHeaders
    });
    addToggleButtonIfRegistered('tablecolheader', {
      tooltip: 'Column header',
      icon: 'table-left-header',
      command: 'mceTableColType',
      onAction: changeColumnHeader(editor),
      onSetup: selectionTargets.onSetupTableColumnHeaders
    });
  };

  var addToolbars = function addToolbars(editor) {
    var isTable = function isTable(table) {
      return editor.dom.is(table, 'table') && editor.getBody().contains(table);
    };

    var toolbar = getToolbar(editor);

    if (toolbar.length > 0) {
      editor.ui.registry.addContextToolbar('table', {
        predicate: isTable,
        items: toolbar,
        scope: 'node',
        position: 'node'
      });
    }
  };

  var addMenuItems = function addMenuItems(editor, selectionTargets) {
    var cmd = function cmd(command) {
      return function () {
        return editor.execCommand(command);
      };
    };

    var addMenuIfRegistered = function addMenuIfRegistered(name, spec) {
      if (editor.queryCommandSupported(spec.command)) {
        editor.ui.registry.addMenuItem(name, _objectSpread({}, spec, {
          onAction: isFunction(spec.onAction) ? spec.onAction : cmd(spec.command)
        }));
        return true;
      } else {
        return false;
      }
    };

    var addToggleMenuIfRegistered = function addToggleMenuIfRegistered(name, spec) {
      if (editor.queryCommandSupported(spec.command)) {
        editor.ui.registry.addToggleMenuItem(name, _objectSpread({}, spec, {
          onAction: isFunction(spec.onAction) ? spec.onAction : cmd(spec.command)
        }));
      }
    };

    var insertTableAction = function insertTableAction(data) {
      editor.execCommand('mceInsertTable', false, {
        rows: data.numRows,
        columns: data.numColumns
      });
    };

    var hasRowMenuItems = [addMenuIfRegistered('tableinsertrowbefore', {
      text: 'Insert row before',
      icon: 'table-insert-row-above',
      command: 'mceTableInsertRowBefore',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tableinsertrowafter', {
      text: 'Insert row after',
      icon: 'table-insert-row-after',
      command: 'mceTableInsertRowAfter',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tabledeleterow', {
      text: 'Delete row',
      icon: 'table-delete-row',
      command: 'mceTableDeleteRow',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tablerowprops', {
      text: 'Row properties',
      icon: 'table-row-properties',
      command: 'mceTableRowProps',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tablecutrow', {
      text: 'Cut row',
      icon: 'cut-row',
      command: 'mceTableCutRow',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tablecopyrow', {
      text: 'Copy row',
      icon: 'duplicate-row',
      command: 'mceTableCopyRow',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tablepasterowbefore', {
      text: 'Paste row before',
      icon: 'paste-row-before',
      command: 'mceTablePasteRowBefore',
      onSetup: selectionTargets.onSetupPasteable(getRows)
    }), addMenuIfRegistered('tablepasterowafter', {
      text: 'Paste row after',
      icon: 'paste-row-after',
      command: 'mceTablePasteRowAfter',
      onSetup: selectionTargets.onSetupPasteable(getRows)
    })];
    var hasColumnMenuItems = [addMenuIfRegistered('tableinsertcolumnbefore', {
      text: 'Insert column before',
      icon: 'table-insert-column-before',
      command: 'mceTableInsertColBefore',
      onSetup: selectionTargets.onSetupColumn('onFirst')
    }), addMenuIfRegistered('tableinsertcolumnafter', {
      text: 'Insert column after',
      icon: 'table-insert-column-after',
      command: 'mceTableInsertColAfter',
      onSetup: selectionTargets.onSetupColumn('onLast')
    }), addMenuIfRegistered('tabledeletecolumn', {
      text: 'Delete column',
      icon: 'table-delete-column',
      command: 'mceTableDeleteCol',
      onSetup: selectionTargets.onSetupColumn('onAny')
    }), addMenuIfRegistered('tablecutcolumn', {
      text: 'Cut column',
      icon: 'cut-column',
      command: 'mceTableCutCol',
      onSetup: selectionTargets.onSetupColumn('onAny')
    }), addMenuIfRegistered('tablecopycolumn', {
      text: 'Copy column',
      icon: 'duplicate-column',
      command: 'mceTableCopyCol',
      onSetup: selectionTargets.onSetupColumn('onAny')
    }), addMenuIfRegistered('tablepastecolumnbefore', {
      text: 'Paste column before',
      icon: 'paste-column-before',
      command: 'mceTablePasteColBefore',
      onSetup: selectionTargets.onSetupPasteableColumn(getColumns, 'onFirst')
    }), addMenuIfRegistered('tablepastecolumnafter', {
      text: 'Paste column after',
      icon: 'paste-column-after',
      command: 'mceTablePasteColAfter',
      onSetup: selectionTargets.onSetupPasteableColumn(getColumns, 'onLast')
    })];
    var hasCellMenuItems = [addMenuIfRegistered('tablecellprops', {
      text: 'Cell properties',
      icon: 'table-cell-properties',
      command: 'mceTableCellProps',
      onSetup: selectionTargets.onSetupCellOrRow
    }), addMenuIfRegistered('tablemergecells', {
      text: 'Merge cells',
      icon: 'table-merge-cells',
      command: 'mceTableMergeCells',
      onSetup: selectionTargets.onSetupMergeable
    }), addMenuIfRegistered('tablesplitcells', {
      text: 'Split cell',
      icon: 'table-split-cells',
      command: 'mceTableSplitCells',
      onSetup: selectionTargets.onSetupUnmergeable
    })];

    if (!hasTableGrid(editor)) {
      editor.ui.registry.addMenuItem('inserttable', {
        text: 'Table',
        icon: 'table',
        onAction: cmd('mceInsertTableDialog')
      });
    } else {
      editor.ui.registry.addNestedMenuItem('inserttable', {
        text: 'Table',
        icon: 'table',
        getSubmenuItems: function getSubmenuItems() {
          return [{
            type: 'fancymenuitem',
            fancytype: 'inserttable',
            onAction: insertTableAction
          }];
        }
      });
    }

    editor.ui.registry.addMenuItem('inserttabledialog', {
      text: 'Insert table',
      icon: 'table',
      onAction: cmd('mceInsertTableDialog')
    });
    addMenuIfRegistered('tableprops', {
      text: 'Table properties',
      onSetup: selectionTargets.onSetupTable,
      command: 'mceTableProps'
    });
    addMenuIfRegistered('deletetable', {
      text: 'Delete table',
      icon: 'table-delete-table',
      onSetup: selectionTargets.onSetupTable,
      command: 'mceTableDelete'
    });

    if (contains(hasRowMenuItems, true)) {
      editor.ui.registry.addNestedMenuItem('row', {
        type: 'nestedmenuitem',
        text: 'Row',
        getSubmenuItems: constant('tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter')
      });
    }

    if (contains(hasColumnMenuItems, true)) {
      editor.ui.registry.addNestedMenuItem('column', {
        type: 'nestedmenuitem',
        text: 'Column',
        getSubmenuItems: constant('tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter')
      });
    }

    if (contains(hasCellMenuItems, true)) {
      editor.ui.registry.addNestedMenuItem('cell', {
        type: 'nestedmenuitem',
        text: 'Cell',
        getSubmenuItems: constant('tablecellprops tablemergecells tablesplitcells')
      });
    }

    editor.ui.registry.addContextMenu('table', {
      update: function update() {
        selectionTargets.resetTargets();
        return selectionTargets.targets().fold(constant(''), function (targets) {
          if (name(targets.element) === 'caption') {
            return 'tableprops deletetable';
          } else {
            return 'cell row column | advtablesort | tableprops deletetable';
          }
        });
      }
    });
    var tableClassList = filterNoneItem(getTableClassList(editor));

    if (tableClassList.length !== 0 && editor.queryCommandSupported('mceTableToggleClass')) {
      editor.ui.registry.addNestedMenuItem('tableclass', {
        icon: 'table-classes',
        text: 'Table styles',
        getSubmenuItems: function getSubmenuItems() {
          return buildMenuItems(editor, tableClassList, 'tableclass', function (value) {
            return editor.execCommand('mceTableToggleClass', false, value);
          });
        },
        onSetup: selectionTargets.onSetupTable
      });
    }

    var tableCellClassList = filterNoneItem(getCellClassList(editor));

    if (tableCellClassList.length !== 0 && editor.queryCommandSupported('mceTableCellToggleClass')) {
      editor.ui.registry.addNestedMenuItem('tablecellclass', {
        icon: 'table-cell-classes',
        text: 'Cell styles',
        getSubmenuItems: function getSubmenuItems() {
          return buildMenuItems(editor, tableCellClassList, 'tablecellclass', function (value) {
            return editor.execCommand('mceTableCellToggleClass', false, value);
          });
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
    }

    if (editor.queryCommandSupported('mceTableApplyCellStyle')) {
      editor.ui.registry.addNestedMenuItem('tablecellvalign', {
        icon: 'vertical-align',
        text: 'Vertical align',
        getSubmenuItems: function getSubmenuItems() {
          return buildMenuItems(editor, verticalAlignValues, 'tablecellverticalalign', applyTableCellStyle(editor, 'vertical-align'));
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addNestedMenuItem('tablecellborderwidth', {
        icon: 'border-width',
        text: 'Border width',
        getSubmenuItems: function getSubmenuItems() {
          return buildMenuItems(editor, getTableBorderWidths(editor), 'tablecellborderwidth', applyTableCellStyle(editor, 'border-width'));
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addNestedMenuItem('tablecellborderstyle', {
        icon: 'border-style',
        text: 'Border style',
        getSubmenuItems: function getSubmenuItems() {
          return buildMenuItems(editor, getTableBorderStyles(editor), 'tablecellborderstyle', applyTableCellStyle(editor, 'border-style'));
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addNestedMenuItem('tablecellbackgroundcolor', {
        icon: 'cell-background-color',
        text: 'Background color',
        getSubmenuItems: function getSubmenuItems() {
          return buildColorMenu(editor, getTableBackgroundColorMap(editor), 'background-color');
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
      editor.ui.registry.addNestedMenuItem('tablecellbordercolor', {
        icon: 'cell-border-color',
        text: 'Border color',
        getSubmenuItems: function getSubmenuItems() {
          return buildColorMenu(editor, getTableBorderColorMap(editor), 'border-color');
        },
        onSetup: selectionTargets.onSetupCellOrRow
      });
    }

    addToggleMenuIfRegistered('tablecaption', {
      icon: 'table-caption',
      text: 'Table caption',
      command: 'mceTableToggleCaption',
      onSetup: selectionTargets.onSetupTableWithCaption
    });
    addToggleMenuIfRegistered('tablerowheader', {
      text: 'Row header',
      icon: 'table-top-header',
      command: 'mceTableRowType',
      onAction: changeRowHeader(editor),
      onSetup: selectionTargets.onSetupTableRowHeaders
    });
    addToggleMenuIfRegistered('tablecolheader', {
      text: 'Column header',
      icon: 'table-left-header',
      command: 'mceTableColType',
      onAction: changeColumnHeader(editor),
      onSetup: selectionTargets.onSetupTableRowHeaders
    });
  };

  var Plugin = function Plugin(editor) {
    var selectionTargets = getSelectionTargets(editor);
    register(editor);
    registerCommands(editor);
    addMenuItems(editor, selectionTargets);
    addButtons(editor, selectionTargets);
    addToolbars(editor);
  };

  var Plugin$1 = function Plugin$1() {
    global$3.add('table', Plugin);
  };

  Plugin$1();
})();