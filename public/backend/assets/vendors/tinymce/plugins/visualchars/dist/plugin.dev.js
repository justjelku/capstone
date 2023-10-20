"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

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

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var get$2 = function get$2(toggleState) {
    var isEnabled = function isEnabled() {
      return toggleState.get();
    };

    return {
      isEnabled: isEnabled
    };
  };

  var fireVisualChars = function fireVisualChars(editor, state) {
    return editor.dispatch('VisualChars', {
      state: state
    });
  };

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

  var eq = function eq(t) {
    return function (a) {
      return t === a;
    };
  };

  var isString = isType$1('string');
  var isNull = eq(null);
  var isBoolean = isSimpleType('boolean');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isNumber = isSimpleType('number');

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

  var keys = Object.keys;

  var each = function each(obj, f) {
    var props = keys(obj);

    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i);
    }
  };

  typeof window !== 'undefined' ? window : Function('return this;')();
  var TEXT = 3;

  var type = function type(element) {
    return element.dom.nodeType;
  };

  var value = function value(element) {
    return element.dom.nodeValue;
  };

  var isType = function isType(t) {
    return function (element) {
      return type(element) === t;
    };
  };

  var isText = isType(TEXT);

  var rawSet = function rawSet(dom, key, value) {
    if (isString(value) || isBoolean(value) || isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attribute.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };

  var set = function set(element, key, value) {
    rawSet(element.dom, key, value);
  };

  var get$1 = function get$1(element, key) {
    var v = element.dom.getAttribute(key);
    return v === null ? undefined : v;
  };

  var remove$3 = function remove$3(element, key) {
    element.dom.removeAttribute(key);
  };

  var read = function read(element, attr) {
    var value = get$1(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };

  var add$2 = function add$2(element, attr, id) {
    var old = read(element, attr);
    var nu = old.concat([id]);
    set(element, attr, nu.join(' '));
    return true;
  };

  var remove$2 = function remove$2(element, attr, id) {
    var nu = filter(read(element, attr), function (v) {
      return v !== id;
    });

    if (nu.length > 0) {
      set(element, attr, nu.join(' '));
    } else {
      remove$3(element, attr);
    }

    return false;
  };

  var supports = function supports(element) {
    return element.dom.classList !== undefined;
  };

  var get = function get(element) {
    return read(element, 'class');
  };

  var add$1 = function add$1(element, clazz) {
    return add$2(element, 'class', clazz);
  };

  var remove$1 = function remove$1(element, clazz) {
    return remove$2(element, 'class', clazz);
  };

  var add = function add(element, clazz) {
    if (supports(element)) {
      element.dom.classList.add(clazz);
    } else {
      add$1(element, clazz);
    }
  };

  var cleanClass = function cleanClass(element) {
    var classList = supports(element) ? element.dom.classList : get(element);

    if (classList.length === 0) {
      remove$3(element, 'class');
    }
  };

  var remove = function remove(element, clazz) {
    if (supports(element)) {
      var classList = element.dom.classList;
      classList.remove(clazz);
    } else {
      remove$1(element, clazz);
    }

    cleanClass(element);
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
  var charMap = {
    '\xA0': 'nbsp',
    '\xAD': 'shy'
  };

  var charMapToRegExp = function charMapToRegExp(charMap, global) {
    var regExp = '';
    each(charMap, function (_value, key) {
      regExp += key;
    });
    return new RegExp('[' + regExp + ']', global ? 'g' : '');
  };

  var charMapToSelector = function charMapToSelector(charMap) {
    var selector = '';
    each(charMap, function (value) {
      if (selector) {
        selector += ',';
      }

      selector += 'span.mce-' + value;
    });
    return selector;
  };

  var regExp = charMapToRegExp(charMap);
  var regExpGlobal = charMapToRegExp(charMap, true);
  var selector = charMapToSelector(charMap);
  var nbspClass = 'mce-nbsp';

  var wrapCharWithSpan = function wrapCharWithSpan(value) {
    return '<span data-mce-bogus="1" class="mce-' + charMap[value] + '">' + value + '</span>';
  };

  var isMatch = function isMatch(n) {
    var value$1 = value(n);
    return isText(n) && value$1 !== undefined && regExp.test(value$1);
  };

  var filterDescendants = function filterDescendants(scope, predicate) {
    var result = [];
    var dom = scope.dom;
    var children = map(dom.childNodes, SugarElement.fromDom);
    each$1(children, function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }

      result = result.concat(filterDescendants(x, predicate));
    });
    return result;
  };

  var findParentElm = function findParentElm(elm, rootElm) {
    while (elm.parentNode) {
      if (elm.parentNode === rootElm) {
        return elm;
      }

      elm = elm.parentNode;
    }
  };

  var replaceWithSpans = function replaceWithSpans(text) {
    return text.replace(regExpGlobal, wrapCharWithSpan);
  };

  var isWrappedNbsp = function isWrappedNbsp(node) {
    return node.nodeName.toLowerCase() === 'span' && node.classList.contains('mce-nbsp-wrap');
  };

  var show = function show(editor, rootElm) {
    var nodeList = filterDescendants(SugarElement.fromDom(rootElm), isMatch);
    each$1(nodeList, function (n) {
      var parent = n.dom.parentNode;

      if (isWrappedNbsp(parent)) {
        add(SugarElement.fromDom(parent), nbspClass);
      } else {
        var withSpans = replaceWithSpans(editor.dom.encode(value(n)));
        var div = editor.dom.create('div', null, withSpans);
        var node;

        while (node = div.lastChild) {
          editor.dom.insertAfter(node, n.dom);
        }

        editor.dom.remove(n.dom);
      }
    });
  };

  var hide = function hide(editor, rootElm) {
    var nodeList = editor.dom.select(selector, rootElm);
    each$1(nodeList, function (node) {
      if (isWrappedNbsp(node)) {
        remove(SugarElement.fromDom(node), nbspClass);
      } else {
        editor.dom.remove(node, true);
      }
    });
  };

  var toggle = function toggle(editor) {
    var body = editor.getBody();
    var bookmark = editor.selection.getBookmark();
    var parentNode = findParentElm(editor.selection.getNode(), body);
    parentNode = parentNode !== undefined ? parentNode : body;
    hide(editor, parentNode);
    show(editor, parentNode);
    editor.selection.moveToBookmark(bookmark);
  };

  var applyVisualChars = function applyVisualChars(editor, toggleState) {
    fireVisualChars(editor, toggleState.get());
    var body = editor.getBody();

    if (toggleState.get() === true) {
      show(editor, body);
    } else {
      hide(editor, body);
    }
  };

  var toggleVisualChars = function toggleVisualChars(editor, toggleState) {
    toggleState.set(!toggleState.get());
    var bookmark = editor.selection.getBookmark();
    applyVisualChars(editor, toggleState);
    editor.selection.moveToBookmark(bookmark);
  };

  var register$2 = function register$2(editor, toggleState) {
    editor.addCommand('mceVisualChars', function () {
      toggleVisualChars(editor, toggleState);
    });
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;
    registerOption('visualchars_default_state', {
      processor: 'boolean',
      "default": false
    });
  };

  var isEnabledByDefault = option('visualchars_default_state');

  var setup$1 = function setup$1(editor, toggleState) {
    editor.on('init', function () {
      applyVisualChars(editor, toggleState);
    });
  };

  var first = function first(fn, rate) {
    var timer = null;

    var cancel = function cancel() {
      if (!isNull(timer)) {
        clearTimeout(timer);
        timer = null;
      }
    };

    var throttle = function throttle() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (isNull(timer)) {
        timer = setTimeout(function () {
          timer = null;
          fn.apply(null, args);
        }, rate);
      }
    };

    return {
      cancel: cancel,
      throttle: throttle
    };
  };

  var setup = function setup(editor, toggleState) {
    var debouncedToggle = first(function () {
      toggle(editor);
    }, 300);
    editor.on('keydown', function (e) {
      if (toggleState.get() === true) {
        e.keyCode === 13 ? toggle(editor) : debouncedToggle.throttle();
      }
    });
    editor.on('remove', debouncedToggle.cancel);
  };

  var toggleActiveState = function toggleActiveState(editor, enabledStated) {
    return function (api) {
      api.setActive(enabledStated.get());

      var editorEventCallback = function editorEventCallback(e) {
        return api.setActive(e.state);
      };

      editor.on('VisualChars', editorEventCallback);
      return function () {
        return editor.off('VisualChars', editorEventCallback);
      };
    };
  };

  var register = function register(editor, toggleState) {
    var onAction = function onAction() {
      return editor.execCommand('mceVisualChars');
    };

    editor.ui.registry.addToggleButton('visualchars', {
      tooltip: 'Show invisible characters',
      icon: 'visualchars',
      onAction: onAction,
      onSetup: toggleActiveState(editor, toggleState)
    });
    editor.ui.registry.addToggleMenuItem('visualchars', {
      text: 'Show invisible characters',
      icon: 'visualchars',
      onAction: onAction,
      onSetup: toggleActiveState(editor, toggleState)
    });
  };

  var Plugin = function Plugin() {
    global.add('visualchars', function (editor) {
      register$1(editor);
      var toggleState = Cell(isEnabledByDefault(editor));
      register$2(editor, toggleState);
      register(editor, toggleState);
      setup(editor, toggleState);
      setup$1(editor, toggleState);
      return get$2(toggleState);
    });
  };

  Plugin();
})();