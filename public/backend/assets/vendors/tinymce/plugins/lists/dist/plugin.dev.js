"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$6 = tinymce.util.Tools.resolve('tinymce.PluginManager');

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

  var isString = isType$1('string');
  var isObject = isType$1('object');
  var isArray = isType$1('array');
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

  var constant = function constant(value) {
    return function () {
      return value;
    };
  };

  var tripleEquals = function tripleEquals(a, b) {
    return a === b;
  };

  var not = function not(f) {
    return function (t) {
      return !f(t);
    };
  };

  var never = constant(false);

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

  var contains$1 = function contains$1(xs, x) {
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

  var map = function map(xs, f) {
    var len = xs.length;
    var r = new Array(len);

    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i);
    }

    return r;
  };

  var each$1 = function each$1(xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i);
    }
  };

  var filter$1 = function filter$1(xs, pred) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        r.push(x);
      }
    }

    return r;
  };

  var groupBy = function groupBy(xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];

      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];

        var _type = f(x);

        if (_type !== wasType) {
          r.push(group);
          group = [];
        }

        wasType = _type;
        group.push(x);
      }

      if (group.length !== 0) {
        r.push(group);
      }

      return r;
    }
  };

  var foldl = function foldl(xs, f, acc) {
    each$1(xs, function (x, i) {
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

  var bind = function bind(xs, f) {
    return flatten(map(xs, f));
  };

  var reverse = function reverse(xs) {
    var r = nativeSlice.call(xs, 0);
    r.reverse();
    return r;
  };

  var get$1 = function get$1(xs, i) {
    return i >= 0 && i < xs.length ? Optional.some(xs[i]) : Optional.none();
  };

  var head = function head(xs) {
    return get$1(xs, 0);
  };

  var last = function last(xs) {
    return get$1(xs, xs.length - 1);
  };

  var unique = function unique(xs, comparator) {
    var r = [];
    var isDuplicated = isFunction(comparator) ? function (x) {
      return exists(r, function (i) {
        return comparator(i, x);
      });
    } : function (x) {
      return contains$1(r, x);
    };

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (!isDuplicated(x)) {
        r.push(x);
      }
    }

    return r;
  };

  var is$2 = function is$2(lhs, rhs) {
    var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : tripleEquals;
    return lhs.exists(function (left) {
      return comparator(left, rhs);
    });
  };

  var equals = function equals(lhs, rhs) {
    var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : tripleEquals;
    return lift2(lhs, rhs, comparator).getOr(lhs.isNone() && rhs.isNone());
  };

  var lift2 = function lift2(oa, ob, f) {
    return oa.isSome() && ob.isSome() ? Optional.some(f(oa.getOrDie(), ob.getOrDie())) : Optional.none();
  };

  var ELEMENT = 1;

  var fromHtml = function fromHtml(html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;

    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      var message = 'HTML does not have a single root node';
      console.error(message, html);
      throw new Error(message);
    }

    return fromDom(div.childNodes[0]);
  };

  var fromTag = function fromTag(tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };

  var fromText = function fromText(text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };

  var fromDom = function fromDom(node) {
    if (node === null || node === undefined) {
      throw new Error('Node cannot be null or undefined');
    }

    return {
      dom: node
    };
  };

  var fromPoint = function fromPoint(docElm, x, y) {
    return Optional.from(docElm.dom.elementFromPoint(x, y)).map(fromDom);
  };

  var SugarElement = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var is$1 = function is$1(element, selector) {
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

  var eq = function eq(e1, e2) {
    return e1.dom === e2.dom;
  };

  var contains = function contains(e1, e2) {
    var d1 = e1.dom;
    var d2 = e2.dom;
    return d1 === d2 ? false : d1.contains(d2);
  };

  var is = is$1;

  var ClosestOrAncestor = function ClosestOrAncestor(is, ancestor, scope, a, isRoot) {
    if (is(scope, a)) {
      return Optional.some(scope);
    } else if (isFunction(isRoot) && isRoot(scope)) {
      return Optional.none();
    } else {
      return ancestor(scope, a, isRoot);
    }
  };

  typeof window !== 'undefined' ? window : Function('return this;')();

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

  var isElement = isType(ELEMENT);

  var isTag = function isTag(tag) {
    return function (e) {
      return isElement(e) && name(e) === tag;
    };
  };

  var parent = function parent(element) {
    return Optional.from(element.dom.parentNode).map(SugarElement.fromDom);
  };

  var nextSibling = function nextSibling(element) {
    return Optional.from(element.dom.nextSibling).map(SugarElement.fromDom);
  };

  var children = function children(element) {
    return map(element.dom.childNodes, SugarElement.fromDom);
  };

  var child = function child(element, index) {
    var cs = element.dom.childNodes;
    return Optional.from(cs[index]).map(SugarElement.fromDom);
  };

  var firstChild = function firstChild(element) {
    return child(element, 0);
  };

  var lastChild = function lastChild(element) {
    return child(element, element.dom.childNodes.length - 1);
  };

  var ancestor = function ancestor(scope, predicate, isRoot) {
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

  var closest = function closest(scope, predicate, isRoot) {
    var is = function is(s, test) {
      return test(s);
    };

    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };

  var before$1 = function before$1(marker, element) {
    var parent$1 = parent(marker);
    parent$1.each(function (v) {
      v.dom.insertBefore(element.dom, marker.dom);
    });
  };

  var after = function after(marker, element) {
    var sibling = nextSibling(marker);
    sibling.fold(function () {
      var parent$1 = parent(marker);
      parent$1.each(function (v) {
        append$1(v, element);
      });
    }, function (v) {
      before$1(v, element);
    });
  };

  var append$1 = function append$1(parent, element) {
    parent.dom.appendChild(element.dom);
  };

  var before = function before(marker, elements) {
    each$1(elements, function (x) {
      before$1(marker, x);
    });
  };

  var append = function append(parent, elements) {
    each$1(elements, function (x) {
      append$1(parent, x);
    });
  };

  var empty = function empty(element) {
    element.dom.textContent = '';
    each$1(children(element), function (rogue) {
      remove(rogue);
    });
  };

  var remove = function remove(element) {
    var dom = element.dom;

    if (dom.parentNode !== null) {
      dom.parentNode.removeChild(dom);
    }
  };

  var global$5 = tinymce.util.Tools.resolve('tinymce.dom.RangeUtils');
  var global$4 = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');
  var global$3 = tinymce.util.Tools.resolve('tinymce.util.VK');
  var keys = Object.keys;

  var each = function each(obj, f) {
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
    each(obj, function (x, i) {
      (pred(x, i) ? onTrue : onFalse)(x, i);
    });
    return r;
  };

  var filter = function filter(obj, pred) {
    var t = {};
    internalFilter(obj, pred, objAcc(t), noop);
    return t;
  };

  var rawSet = function rawSet(dom, key, value) {
    if (isString(value) || isBoolean(value) || isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attribute.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };

  var setAll = function setAll(element, attrs) {
    var dom = element.dom;
    each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };

  var clone$1 = function clone$1(element) {
    return foldl(element.dom.attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };

  var clone = function clone(original, isDeep) {
    return SugarElement.fromDom(original.dom.cloneNode(isDeep));
  };

  var deep = function deep(original) {
    return clone(original, true);
  };

  var shallowAs = function shallowAs(original, tag) {
    var nu = SugarElement.fromTag(tag);
    var attributes = clone$1(original);
    setAll(nu, attributes);
    return nu;
  };

  var mutate = function mutate(original, tag) {
    var nu = shallowAs(original, tag);
    after(original, nu);
    var children$1 = children(original);
    append(nu, children$1);
    remove(original);
    return nu;
  };

  var global$2 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');
  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var matchNodeName = function matchNodeName(name) {
    return function (node) {
      return node && node.nodeName.toLowerCase() === name;
    };
  };

  var matchNodeNames = function matchNodeNames(regex) {
    return function (node) {
      return node && regex.test(node.nodeName);
    };
  };

  var isTextNode = function isTextNode(node) {
    return node && node.nodeType === 3;
  };

  var isListNode = matchNodeNames(/^(OL|UL|DL)$/);
  var isOlUlNode = matchNodeNames(/^(OL|UL)$/);
  var isOlNode = matchNodeName('ol');
  var isListItemNode = matchNodeNames(/^(LI|DT|DD)$/);
  var isDlItemNode = matchNodeNames(/^(DT|DD)$/);
  var isTableCellNode = matchNodeNames(/^(TH|TD)$/);
  var isBr = matchNodeName('br');

  var isFirstChild = function isFirstChild(node) {
    return node.parentNode.firstChild === node;
  };

  var isTextBlock = function isTextBlock(editor, node) {
    return node && !!editor.schema.getTextBlockElements()[node.nodeName];
  };

  var isBlock = function isBlock(node, blockElements) {
    return node && node.nodeName in blockElements;
  };

  var isBogusBr = function isBogusBr(dom, node) {
    if (!isBr(node)) {
      return false;
    }

    return dom.isBlock(node.nextSibling) && !isBr(node.previousSibling);
  };

  var isEmpty$1 = function isEmpty$1(dom, elm, keepBookmarks) {
    var empty = dom.isEmpty(elm);

    if (keepBookmarks && dom.select('span[data-mce-type=bookmark]', elm).length > 0) {
      return false;
    }

    return empty;
  };

  var isChildOfBody = function isChildOfBody(dom, elm) {
    return dom.isChildOf(elm, dom.getRoot());
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$3 = function register$3(editor) {
    var registerOption = editor.options.register;
    registerOption('lists_indent_on_tab', {
      processor: 'boolean',
      "default": true
    });
  };

  var shouldIndentOnTab = option('lists_indent_on_tab');
  var getForcedRootBlock = option('forced_root_block');
  var getForcedRootBlockAttrs = option('forced_root_block_attrs');

  var createTextBlock = function createTextBlock(editor, contentNode) {
    var dom = editor.dom;
    var blockElements = editor.schema.getBlockElements();
    var fragment = dom.createFragment();
    var blockName = getForcedRootBlock(editor);
    var blockAttrs = getForcedRootBlockAttrs(editor);
    var node, textBlock, hasContentNode;
    textBlock = dom.create(blockName, blockAttrs);

    if (!isBlock(contentNode.firstChild, blockElements)) {
      fragment.appendChild(textBlock);
    }

    while (node = contentNode.firstChild) {
      var nodeName = node.nodeName;

      if (!hasContentNode && (nodeName !== 'SPAN' || node.getAttribute('data-mce-type') !== 'bookmark')) {
        hasContentNode = true;
      }

      if (isBlock(node, blockElements)) {
        fragment.appendChild(node);
        textBlock = null;
      } else {
        if (!textBlock) {
          textBlock = dom.create(blockName, blockAttrs);
          fragment.appendChild(textBlock);
        }

        textBlock.appendChild(node);
      }
    }

    if (!hasContentNode) {
      textBlock.appendChild(dom.create('br', {
        'data-mce-bogus': '1'
      }));
    }

    return fragment;
  };

  var DOM$2 = global$2.DOM;

  var splitList = function splitList(editor, list, li) {
    var removeAndKeepBookmarks = function removeAndKeepBookmarks(targetNode) {
      global$1.each(bookmarks, function (node) {
        targetNode.parentNode.insertBefore(node, li.parentNode);
      });
      DOM$2.remove(targetNode);
    };

    var bookmarks = DOM$2.select('span[data-mce-type="bookmark"]', list);
    var newBlock = createTextBlock(editor, li);
    var tmpRng = DOM$2.createRng();
    tmpRng.setStartAfter(li);
    tmpRng.setEndAfter(list);
    var fragment = tmpRng.extractContents();

    for (var node = fragment.firstChild; node; node = node.firstChild) {
      if (node.nodeName === 'LI' && editor.dom.isEmpty(node)) {
        DOM$2.remove(node);
        break;
      }
    }

    if (!editor.dom.isEmpty(fragment)) {
      DOM$2.insertAfter(fragment, list);
    }

    DOM$2.insertAfter(newBlock, list);

    if (isEmpty$1(editor.dom, li.parentNode)) {
      removeAndKeepBookmarks(li.parentNode);
    }

    DOM$2.remove(li);

    if (isEmpty$1(editor.dom, list)) {
      DOM$2.remove(list);
    }
  };

  var isDescriptionDetail = isTag('dd');
  var isDescriptionTerm = isTag('dt');

  var outdentDlItem = function outdentDlItem(editor, item) {
    if (isDescriptionDetail(item)) {
      mutate(item, 'dt');
    } else if (isDescriptionTerm(item)) {
      parent(item).each(function (dl) {
        return splitList(editor, dl.dom, item.dom);
      });
    }
  };

  var indentDlItem = function indentDlItem(item) {
    if (isDescriptionTerm(item)) {
      mutate(item, 'dd');
    }
  };

  var dlIndentation = function dlIndentation(editor, indentation, dlItems) {
    if (indentation === 'Indent') {
      each$1(dlItems, indentDlItem);
    } else {
      each$1(dlItems, function (item) {
        return outdentDlItem(editor, item);
      });
    }
  };

  var getNormalizedPoint = function getNormalizedPoint(container, offset) {
    if (isTextNode(container)) {
      return {
        container: container,
        offset: offset
      };
    }

    var node = global$5.getNode(container, offset);

    if (isTextNode(node)) {
      return {
        container: node,
        offset: offset >= container.childNodes.length ? node.data.length : 0
      };
    } else if (node.previousSibling && isTextNode(node.previousSibling)) {
      return {
        container: node.previousSibling,
        offset: node.previousSibling.data.length
      };
    } else if (node.nextSibling && isTextNode(node.nextSibling)) {
      return {
        container: node.nextSibling,
        offset: 0
      };
    }

    return {
      container: container,
      offset: offset
    };
  };

  var normalizeRange = function normalizeRange(rng) {
    var outRng = rng.cloneRange();
    var rangeStart = getNormalizedPoint(rng.startContainer, rng.startOffset);
    outRng.setStart(rangeStart.container, rangeStart.offset);
    var rangeEnd = getNormalizedPoint(rng.endContainer, rng.endOffset);
    outRng.setEnd(rangeEnd.container, rangeEnd.offset);
    return outRng;
  };

  var listNames = ['OL', 'UL', 'DL'];
  var listSelector = listNames.join(',');

  var getParentList = function getParentList(editor, node) {
    var selectionStart = node || editor.selection.getStart(true);
    return editor.dom.getParent(selectionStart, listSelector, getClosestListHost(editor, selectionStart));
  };

  var isParentListSelected = function isParentListSelected(parentList, selectedBlocks) {
    return parentList && selectedBlocks.length === 1 && selectedBlocks[0] === parentList;
  };

  var findSubLists = function findSubLists(parentList) {
    return filter$1(parentList.querySelectorAll(listSelector), isListNode);
  };

  var getSelectedSubLists = function getSelectedSubLists(editor) {
    var parentList = getParentList(editor);
    var selectedBlocks = editor.selection.getSelectedBlocks();

    if (isParentListSelected(parentList, selectedBlocks)) {
      return findSubLists(parentList);
    } else {
      return filter$1(selectedBlocks, function (elm) {
        return isListNode(elm) && parentList !== elm;
      });
    }
  };

  var findParentListItemsNodes = function findParentListItemsNodes(editor, elms) {
    var listItemsElms = global$1.map(elms, function (elm) {
      var parentLi = editor.dom.getParent(elm, 'li,dd,dt', getClosestListHost(editor, elm));
      return parentLi ? parentLi : elm;
    });
    return unique(listItemsElms);
  };

  var getSelectedListItems = function getSelectedListItems(editor) {
    var selectedBlocks = editor.selection.getSelectedBlocks();
    return filter$1(findParentListItemsNodes(editor, selectedBlocks), isListItemNode);
  };

  var getSelectedDlItems = function getSelectedDlItems(editor) {
    return filter$1(getSelectedListItems(editor), isDlItemNode);
  };

  var getClosestEditingHost = function getClosestEditingHost(editor, elm) {
    var parentTableCell = editor.dom.getParents(elm, 'TD,TH');
    return parentTableCell.length > 0 ? parentTableCell[0] : editor.getBody();
  };

  var isListHost = function isListHost(schema, node) {
    return !isListNode(node) && !isListItemNode(node) && exists(listNames, function (listName) {
      return schema.isValidChild(node.nodeName, listName);
    });
  };

  var getClosestListHost = function getClosestListHost(editor, elm) {
    var parentBlocks = editor.dom.getParents(elm, editor.dom.isBlock);
    var parentBlock = find(parentBlocks, function (elm) {
      return isListHost(editor.schema, elm);
    });
    return parentBlock.getOr(editor.getBody());
  };

  var findLastParentListNode = function findLastParentListNode(editor, elm) {
    var parentLists = editor.dom.getParents(elm, 'ol,ul', getClosestListHost(editor, elm));
    return last(parentLists);
  };

  var getSelectedLists = function getSelectedLists(editor) {
    var firstList = findLastParentListNode(editor, editor.selection.getStart());
    var subsequentLists = filter$1(editor.selection.getSelectedBlocks(), isOlUlNode);
    return firstList.toArray().concat(subsequentLists);
  };

  var getSelectedListRoots = function getSelectedListRoots(editor) {
    var selectedLists = getSelectedLists(editor);
    return getUniqueListRoots(editor, selectedLists);
  };

  var getUniqueListRoots = function getUniqueListRoots(editor, lists) {
    var listRoots = map(lists, function (list) {
      return findLastParentListNode(editor, list).getOr(list);
    });
    return unique(listRoots);
  };

  var fromElements = function fromElements(elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    each$1(elements, function (element) {
      fragment.appendChild(element.dom);
    });
    return SugarElement.fromDom(fragment);
  };

  var fireListEvent = function fireListEvent(editor, action, element) {
    return editor.dispatch('ListMutation', {
      action: action,
      element: element
    });
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

  var set = function set(element, property, value) {
    var dom = element.dom;
    internalSet(dom, property, value);
  };

  var joinSegment = function joinSegment(parent, child) {
    append$1(parent.item, child.list);
  };

  var joinSegments = function joinSegments(segments) {
    for (var i = 1; i < segments.length; i++) {
      joinSegment(segments[i - 1], segments[i]);
    }
  };

  var appendSegments = function appendSegments(head$1, tail) {
    lift2(last(head$1), head(tail), joinSegment);
  };

  var createSegment = function createSegment(scope, listType) {
    var segment = {
      list: SugarElement.fromTag(listType, scope),
      item: SugarElement.fromTag('li', scope)
    };
    append$1(segment.list, segment.item);
    return segment;
  };

  var createSegments = function createSegments(scope, entry, size) {
    var segments = [];

    for (var i = 0; i < size; i++) {
      segments.push(createSegment(scope, entry.listType));
    }

    return segments;
  };

  var populateSegments = function populateSegments(segments, entry) {
    for (var i = 0; i < segments.length - 1; i++) {
      set(segments[i].item, 'list-style-type', 'none');
    }

    last(segments).each(function (segment) {
      setAll(segment.list, entry.listAttributes);
      setAll(segment.item, entry.itemAttributes);
      append(segment.item, entry.content);
    });
  };

  var normalizeSegment = function normalizeSegment(segment, entry) {
    if (name(segment.list) !== entry.listType) {
      segment.list = mutate(segment.list, entry.listType);
    }

    setAll(segment.list, entry.listAttributes);
  };

  var createItem = function createItem(scope, attr, content) {
    var item = SugarElement.fromTag('li', scope);
    setAll(item, attr);
    append(item, content);
    return item;
  };

  var appendItem = function appendItem(segment, item) {
    append$1(segment.list, item);
    segment.item = item;
  };

  var writeShallow = function writeShallow(scope, cast, entry) {
    var newCast = cast.slice(0, entry.depth);
    last(newCast).each(function (segment) {
      var item = createItem(scope, entry.itemAttributes, entry.content);
      appendItem(segment, item);
      normalizeSegment(segment, entry);
    });
    return newCast;
  };

  var writeDeep = function writeDeep(scope, cast, entry) {
    var segments = createSegments(scope, entry, entry.depth - cast.length);
    joinSegments(segments);
    populateSegments(segments, entry);
    appendSegments(cast, segments);
    return cast.concat(segments);
  };

  var composeList = function composeList(scope, entries) {
    var cast = foldl(entries, function (cast, entry) {
      return entry.depth > cast.length ? writeDeep(scope, cast, entry) : writeShallow(scope, cast, entry);
    }, []);
    return head(cast).map(function (segment) {
      return segment.list;
    });
  };

  var isList = function isList(el) {
    return is(el, 'OL,UL');
  };

  var hasFirstChildList = function hasFirstChildList(el) {
    return firstChild(el).exists(isList);
  };

  var hasLastChildList = function hasLastChildList(el) {
    return lastChild(el).exists(isList);
  };

  var isIndented = function isIndented(entry) {
    return entry.depth > 0;
  };

  var isSelected = function isSelected(entry) {
    return entry.isSelected;
  };

  var cloneItemContent = function cloneItemContent(li) {
    var children$1 = children(li);
    var content = hasLastChildList(li) ? children$1.slice(0, -1) : children$1;
    return map(content, deep);
  };

  var createEntry = function createEntry(li, depth, isSelected) {
    return parent(li).filter(isElement).map(function (list) {
      return {
        depth: depth,
        dirty: false,
        isSelected: isSelected,
        content: cloneItemContent(li),
        itemAttributes: clone$1(li),
        listAttributes: clone$1(list),
        listType: name(list)
      };
    });
  };

  var indentEntry = function indentEntry(indentation, entry) {
    switch (indentation) {
      case 'Indent':
        entry.depth++;
        break;

      case 'Outdent':
        entry.depth--;
        break;

      case 'Flatten':
        entry.depth = 0;
    }

    entry.dirty = true;
  };

  var cloneListProperties = function cloneListProperties(target, source) {
    target.listType = source.listType;
    target.listAttributes = _objectSpread({}, source.listAttributes);
  };

  var cleanListProperties = function cleanListProperties(entry) {
    entry.listAttributes = filter(entry.listAttributes, function (_value, key) {
      return key !== 'start';
    });
  };

  var closestSiblingEntry = function closestSiblingEntry(entries, start) {
    var depth = entries[start].depth;

    var matches = function matches(entry) {
      return entry.depth === depth && !entry.dirty;
    };

    var until = function until(entry) {
      return entry.depth < depth;
    };

    return findUntil(reverse(entries.slice(0, start)), matches, until).orThunk(function () {
      return findUntil(entries.slice(start + 1), matches, until);
    });
  };

  var normalizeEntries = function normalizeEntries(entries) {
    each$1(entries, function (entry, i) {
      closestSiblingEntry(entries, i).fold(function () {
        if (entry.dirty) {
          cleanListProperties(entry);
        }
      }, function (matchingEntry) {
        return cloneListProperties(entry, matchingEntry);
      });
    });
    return entries;
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

  var parseItem = function parseItem(depth, itemSelection, selectionState, item) {
    return firstChild(item).filter(isList).fold(function () {
      itemSelection.each(function (selection) {
        if (eq(selection.start, item)) {
          selectionState.set(true);
        }
      });
      var currentItemEntry = createEntry(item, depth, selectionState.get());
      itemSelection.each(function (selection) {
        if (eq(selection.end, item)) {
          selectionState.set(false);
        }
      });
      var childListEntries = lastChild(item).filter(isList).map(function (list) {
        return parseList(depth, itemSelection, selectionState, list);
      }).getOr([]);
      return currentItemEntry.toArray().concat(childListEntries);
    }, function (list) {
      return parseList(depth, itemSelection, selectionState, list);
    });
  };

  var parseList = function parseList(depth, itemSelection, selectionState, list) {
    return bind(children(list), function (element) {
      var parser = isList(element) ? parseList : parseItem;
      var newDepth = depth + 1;
      return parser(newDepth, itemSelection, selectionState, element);
    });
  };

  var parseLists = function parseLists(lists, itemSelection) {
    var selectionState = Cell(false);
    var initialDepth = 0;
    return map(lists, function (list) {
      return {
        sourceList: list,
        entries: parseList(initialDepth, itemSelection, selectionState, list)
      };
    });
  };

  var outdentedComposer = function outdentedComposer(editor, entries) {
    var normalizedEntries = normalizeEntries(entries);
    return map(normalizedEntries, function (entry) {
      var content = fromElements(entry.content);
      return SugarElement.fromDom(createTextBlock(editor, content.dom));
    });
  };

  var indentedComposer = function indentedComposer(editor, entries) {
    var normalizedEntries = normalizeEntries(entries);
    return composeList(editor.contentDocument, normalizedEntries).toArray();
  };

  var composeEntries = function composeEntries(editor, entries) {
    return bind(groupBy(entries, isIndented), function (entries) {
      var groupIsIndented = head(entries).exists(isIndented);
      return groupIsIndented ? indentedComposer(editor, entries) : outdentedComposer(editor, entries);
    });
  };

  var indentSelectedEntries = function indentSelectedEntries(entries, indentation) {
    each$1(filter$1(entries, isSelected), function (entry) {
      return indentEntry(indentation, entry);
    });
  };

  var getItemSelection = function getItemSelection(editor) {
    var selectedListItems = map(getSelectedListItems(editor), SugarElement.fromDom);
    return lift2(find(selectedListItems, not(hasFirstChildList)), find(reverse(selectedListItems), not(hasFirstChildList)), function (start, end) {
      return {
        start: start,
        end: end
      };
    });
  };

  var listIndentation = function listIndentation(editor, lists, indentation) {
    var entrySets = parseLists(lists, getItemSelection(editor));
    each$1(entrySets, function (entrySet) {
      indentSelectedEntries(entrySet.entries, indentation);
      var composedLists = composeEntries(editor, entrySet.entries);
      each$1(composedLists, function (composedList) {
        fireListEvent(editor, indentation === 'Indent' ? 'IndentList' : 'OutdentList', composedList.dom);
      });
      before(entrySet.sourceList, composedLists);
      remove(entrySet.sourceList);
    });
  };

  var selectionIndentation = function selectionIndentation(editor, indentation) {
    var lists = map(getSelectedListRoots(editor), SugarElement.fromDom);
    var dlItems = map(getSelectedDlItems(editor), SugarElement.fromDom);
    var isHandled = false;

    if (lists.length || dlItems.length) {
      var bookmark = editor.selection.getBookmark();
      listIndentation(editor, lists, indentation);
      dlIndentation(editor, indentation, dlItems);
      editor.selection.moveToBookmark(bookmark);
      editor.selection.setRng(normalizeRange(editor.selection.getRng()));
      editor.nodeChanged();
      isHandled = true;
    }

    return isHandled;
  };

  var indentListSelection = function indentListSelection(editor) {
    return selectionIndentation(editor, 'Indent');
  };

  var outdentListSelection = function outdentListSelection(editor) {
    return selectionIndentation(editor, 'Outdent');
  };

  var flattenListSelection = function flattenListSelection(editor) {
    return selectionIndentation(editor, 'Flatten');
  };

  var global = tinymce.util.Tools.resolve('tinymce.dom.BookmarkManager');
  var DOM$1 = global$2.DOM;

  var createBookmark = function createBookmark(rng) {
    var bookmark = {};

    var setupEndPoint = function setupEndPoint(start) {
      var container = rng[start ? 'startContainer' : 'endContainer'];
      var offset = rng[start ? 'startOffset' : 'endOffset'];

      if (container.nodeType === 1) {
        var offsetNode = DOM$1.create('span', {
          'data-mce-type': 'bookmark'
        });

        if (container.hasChildNodes()) {
          offset = Math.min(offset, container.childNodes.length - 1);

          if (start) {
            container.insertBefore(offsetNode, container.childNodes[offset]);
          } else {
            DOM$1.insertAfter(offsetNode, container.childNodes[offset]);
          }
        } else {
          container.appendChild(offsetNode);
        }

        container = offsetNode;
        offset = 0;
      }

      bookmark[start ? 'startContainer' : 'endContainer'] = container;
      bookmark[start ? 'startOffset' : 'endOffset'] = offset;
    };

    setupEndPoint(true);

    if (!rng.collapsed) {
      setupEndPoint();
    }

    return bookmark;
  };

  var resolveBookmark = function resolveBookmark(bookmark) {
    var restoreEndPoint = function restoreEndPoint(start) {
      var node;

      var nodeIndex = function nodeIndex(container) {
        var node = container.parentNode.firstChild,
            idx = 0;

        while (node) {
          if (node === container) {
            return idx;
          }

          if (node.nodeType !== 1 || node.getAttribute('data-mce-type') !== 'bookmark') {
            idx++;
          }

          node = node.nextSibling;
        }

        return -1;
      };

      var container = node = bookmark[start ? 'startContainer' : 'endContainer'];
      var offset = bookmark[start ? 'startOffset' : 'endOffset'];

      if (!container) {
        return;
      }

      if (container.nodeType === 1) {
        offset = nodeIndex(container);
        container = container.parentNode;
        DOM$1.remove(node);

        if (!container.hasChildNodes() && DOM$1.isBlock(container)) {
          container.appendChild(DOM$1.create('br'));
        }
      }

      bookmark[start ? 'startContainer' : 'endContainer'] = container;
      bookmark[start ? 'startOffset' : 'endOffset'] = offset;
    };

    restoreEndPoint(true);
    restoreEndPoint();
    var rng = DOM$1.createRng();
    rng.setStart(bookmark.startContainer, bookmark.startOffset);

    if (bookmark.endContainer) {
      rng.setEnd(bookmark.endContainer, bookmark.endOffset);
    }

    return normalizeRange(rng);
  };

  var listToggleActionFromListName = function listToggleActionFromListName(listName) {
    switch (listName) {
      case 'UL':
        return 'ToggleUlList';

      case 'OL':
        return 'ToggleOlList';

      case 'DL':
        return 'ToggleDLList';
    }
  };

  var isCustomList = function isCustomList(list) {
    return /\btox\-/.test(list.className);
  };

  var listState = function listState(editor, listName, activate) {
    var nodeChangeHandler = function nodeChangeHandler(e) {
      var inList = findUntil(e.parents, isListNode, isTableCellNode).filter(function (list) {
        return list.nodeName === listName && !isCustomList(list);
      }).isSome();
      activate(inList);
    };

    var parents = editor.dom.getParents(editor.selection.getNode());
    nodeChangeHandler({
      parents: parents
    });
    editor.on('NodeChange', nodeChangeHandler);
    return function () {
      return editor.off('NodeChange', nodeChangeHandler);
    };
  };

  var updateListStyle = function updateListStyle(dom, el, detail) {
    var type = detail['list-style-type'] ? detail['list-style-type'] : null;
    dom.setStyle(el, 'list-style-type', type);
  };

  var setAttribs = function setAttribs(elm, attrs) {
    global$1.each(attrs, function (value, key) {
      elm.setAttribute(key, value);
    });
  };

  var updateListAttrs = function updateListAttrs(dom, el, detail) {
    setAttribs(el, detail['list-attributes']);
    global$1.each(dom.select('li', el), function (li) {
      setAttribs(li, detail['list-item-attributes']);
    });
  };

  var updateListWithDetails = function updateListWithDetails(dom, el, detail) {
    updateListStyle(dom, el, detail);
    updateListAttrs(dom, el, detail);
  };

  var removeStyles = function removeStyles(dom, element, styles) {
    global$1.each(styles, function (style) {
      return dom.setStyle(element, style, '');
    });
  };

  var getEndPointNode = function getEndPointNode(editor, rng, start, root) {
    var container = rng[start ? 'startContainer' : 'endContainer'];
    var offset = rng[start ? 'startOffset' : 'endOffset'];

    if (container.nodeType === 1) {
      container = container.childNodes[Math.min(offset, container.childNodes.length - 1)] || container;
    }

    if (!start && isBr(container.nextSibling)) {
      container = container.nextSibling;
    }

    while (container.parentNode !== root) {
      if (isTextBlock(editor, container)) {
        return container;
      }

      if (/^(TD|TH)$/.test(container.parentNode.nodeName)) {
        return container;
      }

      container = container.parentNode;
    }

    return container;
  };

  var getSelectedTextBlocks = function getSelectedTextBlocks(editor, rng, root) {
    var textBlocks = [];
    var dom = editor.dom;
    var startNode = getEndPointNode(editor, rng, true, root);
    var endNode = getEndPointNode(editor, rng, false, root);
    var block;
    var siblings = [];

    for (var node = startNode; node; node = node.nextSibling) {
      siblings.push(node);

      if (node === endNode) {
        break;
      }
    }

    global$1.each(siblings, function (node) {
      if (isTextBlock(editor, node)) {
        textBlocks.push(node);
        block = null;
        return;
      }

      if (dom.isBlock(node) || isBr(node)) {
        if (isBr(node)) {
          dom.remove(node);
        }

        block = null;
        return;
      }

      var nextSibling = node.nextSibling;

      if (global.isBookmarkNode(node)) {
        if (isListNode(nextSibling) || isTextBlock(editor, nextSibling) || !nextSibling && node.parentNode === root) {
          block = null;
          return;
        }
      }

      if (!block) {
        block = dom.create('p');
        node.parentNode.insertBefore(block, node);
        textBlocks.push(block);
      }

      block.appendChild(node);
    });
    return textBlocks;
  };

  var hasCompatibleStyle = function hasCompatibleStyle(dom, sib, detail) {
    var sibStyle = dom.getStyle(sib, 'list-style-type');
    var detailStyle = detail ? detail['list-style-type'] : '';
    detailStyle = detailStyle === null ? '' : detailStyle;
    return sibStyle === detailStyle;
  };

  var applyList = function applyList(editor, listName, detail) {
    var rng = editor.selection.getRng();
    var listItemName = 'LI';
    var root = getClosestListHost(editor, editor.selection.getStart(true));
    var dom = editor.dom;

    if (dom.getContentEditable(editor.selection.getNode()) === 'false') {
      return;
    }

    listName = listName.toUpperCase();

    if (listName === 'DL') {
      listItemName = 'DT';
    }

    var bookmark = createBookmark(rng);
    var selectedTextBlocks = getSelectedTextBlocks(editor, rng, root);
    global$1.each(selectedTextBlocks, function (block) {
      var listBlock;
      var sibling = block.previousSibling;
      var parent = block.parentNode;

      if (!isListItemNode(parent)) {
        if (sibling && isListNode(sibling) && sibling.nodeName === listName && hasCompatibleStyle(dom, sibling, detail)) {
          listBlock = sibling;
          block = dom.rename(block, listItemName);
          sibling.appendChild(block);
        } else {
          listBlock = dom.create(listName);
          block.parentNode.insertBefore(listBlock, block);
          listBlock.appendChild(block);
          block = dom.rename(block, listItemName);
        }

        removeStyles(dom, block, ['margin', 'margin-right', 'margin-bottom', 'margin-left', 'margin-top', 'padding', 'padding-right', 'padding-bottom', 'padding-left', 'padding-top']);
        updateListWithDetails(dom, listBlock, detail);
        mergeWithAdjacentLists(editor.dom, listBlock);
      }
    });
    editor.selection.setRng(resolveBookmark(bookmark));
  };

  var isValidLists = function isValidLists(list1, list2) {
    return list1 && list2 && isListNode(list1) && list1.nodeName === list2.nodeName;
  };

  var hasSameListStyle = function hasSameListStyle(dom, list1, list2) {
    var targetStyle = dom.getStyle(list1, 'list-style-type', true);
    var style = dom.getStyle(list2, 'list-style-type', true);
    return targetStyle === style;
  };

  var hasSameClasses = function hasSameClasses(elm1, elm2) {
    return elm1.className === elm2.className;
  };

  var shouldMerge = function shouldMerge(dom, list1, list2) {
    return isValidLists(list1, list2) && hasSameListStyle(dom, list1, list2) && hasSameClasses(list1, list2);
  };

  var mergeWithAdjacentLists = function mergeWithAdjacentLists(dom, listBlock) {
    var sibling, node;
    sibling = listBlock.nextSibling;

    if (shouldMerge(dom, listBlock, sibling)) {
      while (node = sibling.firstChild) {
        listBlock.appendChild(node);
      }

      dom.remove(sibling);
    }

    sibling = listBlock.previousSibling;

    if (shouldMerge(dom, listBlock, sibling)) {
      while (node = sibling.lastChild) {
        listBlock.insertBefore(node, listBlock.firstChild);
      }

      dom.remove(sibling);
    }
  };

  var updateList$1 = function updateList$1(editor, list, listName, detail) {
    if (list.nodeName !== listName) {
      var newList = editor.dom.rename(list, listName);
      updateListWithDetails(editor.dom, newList, detail);
      fireListEvent(editor, listToggleActionFromListName(listName), newList);
    } else {
      updateListWithDetails(editor.dom, list, detail);
      fireListEvent(editor, listToggleActionFromListName(listName), list);
    }
  };

  var toggleMultipleLists = function toggleMultipleLists(editor, parentList, lists, listName, detail) {
    var parentIsList = isListNode(parentList);

    if (parentIsList && parentList.nodeName === listName && !hasListStyleDetail(detail)) {
      flattenListSelection(editor);
    } else {
      applyList(editor, listName, detail);
      var bookmark = createBookmark(editor.selection.getRng());
      var allLists = parentIsList ? [parentList].concat(_toConsumableArray(lists)) : lists;
      global$1.each(allLists, function (elm) {
        updateList$1(editor, elm, listName, detail);
      });
      editor.selection.setRng(resolveBookmark(bookmark));
    }
  };

  var hasListStyleDetail = function hasListStyleDetail(detail) {
    return 'list-style-type' in detail;
  };

  var toggleSingleList = function toggleSingleList(editor, parentList, listName, detail) {
    if (parentList === editor.getBody()) {
      return;
    }

    if (parentList) {
      if (parentList.nodeName === listName && !hasListStyleDetail(detail) && !isCustomList(parentList)) {
        flattenListSelection(editor);
      } else {
        var bookmark = createBookmark(editor.selection.getRng());
        updateListWithDetails(editor.dom, parentList, detail);
        var newList = editor.dom.rename(parentList, listName);
        mergeWithAdjacentLists(editor.dom, newList);
        editor.selection.setRng(resolveBookmark(bookmark));
        applyList(editor, listName, detail);
        fireListEvent(editor, listToggleActionFromListName(listName), newList);
      }
    } else {
      applyList(editor, listName, detail);
      fireListEvent(editor, listToggleActionFromListName(listName), parentList);
    }
  };

  var toggleList = function toggleList(editor, listName, _detail) {
    var parentList = getParentList(editor);
    var selectedSubLists = getSelectedSubLists(editor);
    var detail = isObject(_detail) ? _detail : {};

    if (selectedSubLists.length > 0) {
      toggleMultipleLists(editor, parentList, selectedSubLists, listName, detail);
    } else {
      toggleSingleList(editor, parentList, listName, detail);
    }
  };

  var DOM = global$2.DOM;

  var normalizeList = function normalizeList(dom, list) {
    var parentNode = list.parentNode;

    if (parentNode.nodeName === 'LI' && parentNode.firstChild === list) {
      var sibling = parentNode.previousSibling;

      if (sibling && sibling.nodeName === 'LI') {
        sibling.appendChild(list);

        if (isEmpty$1(dom, parentNode)) {
          DOM.remove(parentNode);
        }
      } else {
        DOM.setStyle(parentNode, 'listStyleType', 'none');
      }
    }

    if (isListNode(parentNode)) {
      var _sibling = parentNode.previousSibling;

      if (_sibling && _sibling.nodeName === 'LI') {
        _sibling.appendChild(list);
      }
    }
  };

  var normalizeLists = function normalizeLists(dom, element) {
    var lists = global$1.grep(dom.select('ol,ul', element));
    global$1.each(lists, function (list) {
      normalizeList(dom, list);
    });
  };

  var findNextCaretContainer = function findNextCaretContainer(editor, rng, isForward, root) {
    var node = rng.startContainer;
    var offset = rng.startOffset;

    if (isTextNode(node) && (isForward ? offset < node.data.length : offset > 0)) {
      return node;
    }

    var nonEmptyBlocks = editor.schema.getNonEmptyElements();

    if (node.nodeType === 1) {
      node = global$5.getNode(node, offset);
    }

    var walker = new global$4(node, root);

    if (isForward) {
      if (isBogusBr(editor.dom, node)) {
        walker.next();
      }
    }

    var walkFn = isForward ? walker.next.bind(walker) : walker.prev2.bind(walker);

    while (node = walkFn()) {
      if (node.nodeName === 'LI' && !node.hasChildNodes()) {
        return node;
      }

      if (nonEmptyBlocks[node.nodeName]) {
        return node;
      }

      if (isTextNode(node) && node.data.length > 0) {
        return node;
      }
    }
  };

  var hasOnlyOneBlockChild = function hasOnlyOneBlockChild(dom, elm) {
    var childNodes = elm.childNodes;
    return childNodes.length === 1 && !isListNode(childNodes[0]) && dom.isBlock(childNodes[0]);
  };

  var unwrapSingleBlockChild = function unwrapSingleBlockChild(dom, elm) {
    if (hasOnlyOneBlockChild(dom, elm)) {
      dom.remove(elm.firstChild, true);
    }
  };

  var moveChildren = function moveChildren(dom, fromElm, toElm) {
    var node;
    var targetElm = hasOnlyOneBlockChild(dom, toElm) ? toElm.firstChild : toElm;
    unwrapSingleBlockChild(dom, fromElm);

    if (!isEmpty$1(dom, fromElm, true)) {
      while (node = fromElm.firstChild) {
        targetElm.appendChild(node);
      }
    }
  };

  var mergeLiElements = function mergeLiElements(dom, fromElm, toElm) {
    var listNode;
    var ul = fromElm.parentNode;

    if (!isChildOfBody(dom, fromElm) || !isChildOfBody(dom, toElm)) {
      return;
    }

    if (isListNode(toElm.lastChild)) {
      listNode = toElm.lastChild;
    }

    if (ul === toElm.lastChild) {
      if (isBr(ul.previousSibling)) {
        dom.remove(ul.previousSibling);
      }
    }

    var node = toElm.lastChild;

    if (node && isBr(node) && fromElm.hasChildNodes()) {
      dom.remove(node);
    }

    if (isEmpty$1(dom, toElm, true)) {
      empty(SugarElement.fromDom(toElm));
    }

    moveChildren(dom, fromElm, toElm);

    if (listNode) {
      toElm.appendChild(listNode);
    }

    var contains$1 = contains(SugarElement.fromDom(toElm), SugarElement.fromDom(fromElm));
    var nestedLists = contains$1 ? dom.getParents(fromElm, isListNode, toElm) : [];
    dom.remove(fromElm);
    each$1(nestedLists, function (list) {
      if (isEmpty$1(dom, list) && list !== dom.getRoot()) {
        dom.remove(list);
      }
    });
  };

  var mergeIntoEmptyLi = function mergeIntoEmptyLi(editor, fromLi, toLi) {
    empty(SugarElement.fromDom(toLi));
    mergeLiElements(editor.dom, fromLi, toLi);
    editor.selection.setCursorLocation(toLi, 0);
  };

  var mergeForward = function mergeForward(editor, rng, fromLi, toLi) {
    var dom = editor.dom;

    if (dom.isEmpty(toLi)) {
      mergeIntoEmptyLi(editor, fromLi, toLi);
    } else {
      var bookmark = createBookmark(rng);
      mergeLiElements(dom, fromLi, toLi);
      editor.selection.setRng(resolveBookmark(bookmark));
    }
  };

  var mergeBackward = function mergeBackward(editor, rng, fromLi, toLi) {
    var bookmark = createBookmark(rng);
    mergeLiElements(editor.dom, fromLi, toLi);
    var resolvedBookmark = resolveBookmark(bookmark);
    editor.selection.setRng(resolvedBookmark);
  };

  var backspaceDeleteFromListToListCaret = function backspaceDeleteFromListToListCaret(editor, isForward) {
    var dom = editor.dom,
        selection = editor.selection;
    var selectionStartElm = selection.getStart();
    var root = getClosestEditingHost(editor, selectionStartElm);
    var li = dom.getParent(selection.getStart(), 'LI', root);

    if (li) {
      var ul = li.parentNode;

      if (ul === editor.getBody() && isEmpty$1(dom, ul)) {
        return true;
      }

      var rng = normalizeRange(selection.getRng());
      var otherLi = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);

      if (otherLi && otherLi !== li) {
        editor.undoManager.transact(function () {
          if (isForward) {
            mergeForward(editor, rng, otherLi, li);
          } else {
            if (isFirstChild(li)) {
              outdentListSelection(editor);
            } else {
              mergeBackward(editor, rng, li, otherLi);
            }
          }
        });
        return true;
      } else if (!otherLi) {
        if (!isForward && rng.startOffset === 0 && rng.endOffset === 0) {
          editor.undoManager.transact(function () {
            flattenListSelection(editor);
          });
          return true;
        }
      }
    }

    return false;
  };

  var removeBlock = function removeBlock(dom, block, root) {
    var parentBlock = dom.getParent(block.parentNode, dom.isBlock, root);
    dom.remove(block);

    if (parentBlock && dom.isEmpty(parentBlock)) {
      dom.remove(parentBlock);
    }
  };

  var backspaceDeleteIntoListCaret = function backspaceDeleteIntoListCaret(editor, isForward) {
    var dom = editor.dom;
    var selectionStartElm = editor.selection.getStart();
    var root = getClosestEditingHost(editor, selectionStartElm);
    var block = dom.getParent(selectionStartElm, dom.isBlock, root);

    if (block && dom.isEmpty(block)) {
      var rng = normalizeRange(editor.selection.getRng());
      var otherLi = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);

      if (otherLi) {
        var findValidElement = function findValidElement(element) {
          return contains$1(['td', 'th', 'caption'], name(element));
        };

        var findRoot = function findRoot(node) {
          return node.dom === root;
        };

        var otherLiCell = closest(SugarElement.fromDom(otherLi), findValidElement, findRoot);
        var caretCell = closest(SugarElement.fromDom(rng.startContainer), findValidElement, findRoot);

        if (!equals(otherLiCell, caretCell, eq)) {
          return false;
        }

        editor.undoManager.transact(function () {
          removeBlock(dom, block, root);
          mergeWithAdjacentLists(dom, otherLi.parentNode);
          editor.selection.select(otherLi, true);
          editor.selection.collapse(isForward);
        });
        return true;
      }
    }

    return false;
  };

  var backspaceDeleteCaret = function backspaceDeleteCaret(editor, isForward) {
    return backspaceDeleteFromListToListCaret(editor, isForward) || backspaceDeleteIntoListCaret(editor, isForward);
  };

  var hasListSelection = function hasListSelection(editor) {
    var selectionStartElm = editor.selection.getStart();
    var root = getClosestEditingHost(editor, selectionStartElm);
    var startListParent = editor.dom.getParent(selectionStartElm, 'LI,DT,DD', root);
    return startListParent || getSelectedListItems(editor).length > 0;
  };

  var backspaceDeleteRange = function backspaceDeleteRange(editor) {
    if (hasListSelection(editor)) {
      editor.undoManager.transact(function () {
        editor.execCommand('Delete');
        normalizeLists(editor.dom, editor.getBody());
      });
      return true;
    }

    return false;
  };

  var _backspaceDelete = function backspaceDelete(editor, isForward) {
    return editor.selection.isCollapsed() ? backspaceDeleteCaret(editor, isForward) : backspaceDeleteRange(editor);
  };

  var setup$1 = function setup$1(editor) {
    editor.on('ExecCommand', function (e) {
      var cmd = e.command.toLowerCase();

      if ((cmd === 'delete' || cmd === 'forwarddelete') && hasListSelection(editor)) {
        normalizeLists(editor.dom, editor.getBody());
      }
    });
    editor.on('keydown', function (e) {
      if (e.keyCode === global$3.BACKSPACE) {
        if (_backspaceDelete(editor, false)) {
          e.preventDefault();
        }
      } else if (e.keyCode === global$3.DELETE) {
        if (_backspaceDelete(editor, true)) {
          e.preventDefault();
        }
      }
    });
  };

  var get = function get(editor) {
    return {
      backspaceDelete: function backspaceDelete(isForward) {
        _backspaceDelete(editor, isForward);
      }
    };
  };

  var updateList = function updateList(editor, update) {
    var parentList = getParentList(editor);
    editor.undoManager.transact(function () {
      if (isObject(update.styles)) {
        editor.dom.setStyles(parentList, update.styles);
      }

      if (isObject(update.attrs)) {
        each(update.attrs, function (v, k) {
          return editor.dom.setAttrib(parentList, k, v);
        });
      }
    });
  };

  var parseAlphabeticBase26 = function parseAlphabeticBase26(str) {
    var chars = reverse(trim(str).split(''));
    var values = map(chars, function (_char, i) {
      var charValue = _char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      return Math.pow(26, i) * charValue;
    });
    return foldl(values, function (sum, v) {
      return sum + v;
    }, 0);
  };

  var composeAlphabeticBase26 = function composeAlphabeticBase26(value) {
    value--;

    if (value < 0) {
      return '';
    } else {
      var remainder = value % 26;
      var quotient = Math.floor(value / 26);
      var rest = composeAlphabeticBase26(quotient);

      var _char2 = String.fromCharCode('A'.charCodeAt(0) + remainder);

      return rest + _char2;
    }
  };

  var isUppercase = function isUppercase(str) {
    return /^[A-Z]+$/.test(str);
  };

  var isLowercase = function isLowercase(str) {
    return /^[a-z]+$/.test(str);
  };

  var isNumeric = function isNumeric(str) {
    return /^[0-9]+$/.test(str);
  };

  var deduceListType = function deduceListType(start) {
    if (isNumeric(start)) {
      return 2;
    } else if (isUppercase(start)) {
      return 0;
    } else if (isLowercase(start)) {
      return 1;
    } else if (isEmpty(start)) {
      return 3;
    } else {
      return 4;
    }
  };

  var parseStartValue = function parseStartValue(start) {
    switch (deduceListType(start)) {
      case 2:
        return Optional.some({
          listStyleType: Optional.none(),
          start: start
        });

      case 0:
        return Optional.some({
          listStyleType: Optional.some('upper-alpha'),
          start: parseAlphabeticBase26(start).toString()
        });

      case 1:
        return Optional.some({
          listStyleType: Optional.some('lower-alpha'),
          start: parseAlphabeticBase26(start).toString()
        });

      case 3:
        return Optional.some({
          listStyleType: Optional.none(),
          start: ''
        });

      case 4:
        return Optional.none();
    }
  };

  var parseDetail = function parseDetail(detail) {
    var start = parseInt(detail.start, 10);

    if (is$2(detail.listStyleType, 'upper-alpha')) {
      return composeAlphabeticBase26(start);
    } else if (is$2(detail.listStyleType, 'lower-alpha')) {
      return composeAlphabeticBase26(start).toLowerCase();
    } else {
      return detail.start;
    }
  };

  var open = function open(editor) {
    var currentList = getParentList(editor);

    if (!isOlNode(currentList)) {
      return;
    }

    editor.windowManager.open({
      title: 'List Properties',
      body: {
        type: 'panel',
        items: [{
          type: 'input',
          name: 'start',
          label: 'Start list at number',
          inputMode: 'numeric'
        }]
      },
      initialData: {
        start: parseDetail({
          start: editor.dom.getAttrib(currentList, 'start', '1'),
          listStyleType: Optional.some(editor.dom.getStyle(currentList, 'list-style-type'))
        })
      },
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
      onSubmit: function onSubmit(api) {
        var data = api.getData();
        parseStartValue(data.start).each(function (detail) {
          editor.execCommand('mceListUpdate', false, {
            attrs: {
              start: detail.start === '1' ? '' : detail.start
            },
            styles: {
              'list-style-type': detail.listStyleType.getOr('')
            }
          });
        });
        api.close();
      }
    });
  };

  var queryListCommandState = function queryListCommandState(editor, listName) {
    return function () {
      var parentList = getParentList(editor);
      return parentList && parentList.nodeName === listName;
    };
  };

  var registerDialog = function registerDialog(editor) {
    editor.addCommand('mceListProps', function () {
      open(editor);
    });
  };

  var register$2 = function register$2(editor) {
    editor.on('BeforeExecCommand', function (e) {
      var cmd = e.command.toLowerCase();

      if (cmd === 'indent') {
        indentListSelection(editor);
      } else if (cmd === 'outdent') {
        outdentListSelection(editor);
      }
    });
    editor.addCommand('InsertUnorderedList', function (ui, detail) {
      toggleList(editor, 'UL', detail);
    });
    editor.addCommand('InsertOrderedList', function (ui, detail) {
      toggleList(editor, 'OL', detail);
    });
    editor.addCommand('InsertDefinitionList', function (ui, detail) {
      toggleList(editor, 'DL', detail);
    });
    editor.addCommand('RemoveList', function () {
      flattenListSelection(editor);
    });
    registerDialog(editor);
    editor.addCommand('mceListUpdate', function (ui, detail) {
      if (isObject(detail)) {
        updateList(editor, detail);
      }
    });
    editor.addQueryStateHandler('InsertUnorderedList', queryListCommandState(editor, 'UL'));
    editor.addQueryStateHandler('InsertOrderedList', queryListCommandState(editor, 'OL'));
    editor.addQueryStateHandler('InsertDefinitionList', queryListCommandState(editor, 'DL'));
  };

  var setupTabKey = function setupTabKey(editor) {
    editor.on('keydown', function (e) {
      if (e.keyCode !== global$3.TAB || global$3.metaKeyPressed(e)) {
        return;
      }

      editor.undoManager.transact(function () {
        if (e.shiftKey ? outdentListSelection(editor) : indentListSelection(editor)) {
          e.preventDefault();
        }
      });
    });
  };

  var setup = function setup(editor) {
    if (shouldIndentOnTab(editor)) {
      setupTabKey(editor);
    }

    setup$1(editor);
  };

  var register$1 = function register$1(editor) {
    var exec = function exec(command) {
      return function () {
        return editor.execCommand(command);
      };
    };

    if (!editor.hasPlugin('advlist')) {
      editor.ui.registry.addToggleButton('numlist', {
        icon: 'ordered-list',
        active: false,
        tooltip: 'Numbered list',
        onAction: exec('InsertOrderedList'),
        onSetup: function onSetup(api) {
          return listState(editor, 'OL', api.setActive);
        }
      });
      editor.ui.registry.addToggleButton('bullist', {
        icon: 'unordered-list',
        active: false,
        tooltip: 'Bullet list',
        onAction: exec('InsertUnorderedList'),
        onSetup: function onSetup(api) {
          return listState(editor, 'UL', api.setActive);
        }
      });
    }
  };

  var register = function register(editor) {
    var listProperties = {
      text: 'List properties...',
      icon: 'ordered-list',
      onAction: function onAction() {
        return editor.execCommand('mceListProps');
      },
      onSetup: function onSetup(api) {
        return listState(editor, 'OL', api.setEnabled);
      }
    };
    editor.ui.registry.addMenuItem('listprops', listProperties);
    editor.ui.registry.addContextMenu('lists', {
      update: function update(node) {
        var parentList = getParentList(editor, node);
        return isOlNode(parentList) ? ['listprops'] : [];
      }
    });
  };

  var Plugin = function Plugin() {
    global$6.add('lists', function (editor) {
      register$3(editor);

      if (editor.hasPlugin('rtc', true) === false) {
        setup(editor);
        register$2(editor);
      } else {
        registerDialog(editor);
      }

      register$1(editor);
      register(editor);
      return get(editor);
    });
  };

  Plugin();
})();