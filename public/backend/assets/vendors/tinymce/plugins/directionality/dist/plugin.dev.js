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

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

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
  var isBoolean = isSimpleType('boolean');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isFunction = isSimpleType('function');
  var isNumber = isSimpleType('number');

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

  var DOCUMENT = 9;
  var DOCUMENT_FRAGMENT = 11;
  var ELEMENT = 1;
  var TEXT = 3;

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

  var is = function is(element, selector) {
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
  var isText = isType(TEXT);
  var isDocument = isType(DOCUMENT);
  var isDocumentFragment = isType(DOCUMENT_FRAGMENT);

  var isTag = function isTag(tag) {
    return function (e) {
      return isElement(e) && name(e) === tag;
    };
  };

  var owner = function owner(element) {
    return SugarElement.fromDom(element.dom.ownerDocument);
  };

  var documentOrOwner = function documentOrOwner(dos) {
    return isDocument(dos) ? dos : owner(dos);
  };

  var parent = function parent(element) {
    return Optional.from(element.dom.parentNode).map(SugarElement.fromDom);
  };

  var children$2 = function children$2(element) {
    return map(element.dom.childNodes, SugarElement.fromDom);
  };

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

  var remove = function remove(element, key) {
    element.dom.removeAttribute(key);
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

  var ancestor = function ancestor(scope, selector, isRoot) {
    return ancestor$1(scope, function (e) {
      return is(e, selector);
    }, isRoot);
  };

  var isSupported = function isSupported(dom) {
    return dom.style !== undefined && isFunction(dom.style.getPropertyValue);
  };

  var get = function get(element, property) {
    var dom = element.dom;
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    return r === '' && !inBody(element) ? getUnsafeProperty(dom, property) : r;
  };

  var getUnsafeProperty = function getUnsafeProperty(dom, property) {
    return isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };

  var getDirection = function getDirection(element) {
    return get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };

  var children$1 = function children$1(scope, predicate) {
    return filter(children$2(scope), predicate);
  };

  var children = function children(scope, selector) {
    return children$1(scope, function (e) {
      return is(e, selector);
    });
  };

  var getParentElement = function getParentElement(element) {
    return parent(element).filter(isElement);
  };

  var getNormalizedBlock = function getNormalizedBlock(element, isListItem) {
    var normalizedElement = isListItem ? ancestor(element, 'ol,ul') : Optional.some(element);
    return normalizedElement.getOr(element);
  };

  var isListItem = isTag('li');

  var setDir = function setDir(editor, dir) {
    var selectedBlocks = editor.selection.getSelectedBlocks();

    if (selectedBlocks.length > 0) {
      each(selectedBlocks, function (block) {
        var blockElement = SugarElement.fromDom(block);
        var isBlockElementListItem = isListItem(blockElement);
        var normalizedBlock = getNormalizedBlock(blockElement, isBlockElementListItem);
        var normalizedBlockParent = getParentElement(normalizedBlock);
        normalizedBlockParent.each(function (parent) {
          var parentDirection = getDirection(parent);

          if (parentDirection !== dir) {
            set(normalizedBlock, 'dir', dir);
          } else if (getDirection(normalizedBlock) !== dir) {
            remove(normalizedBlock, 'dir');
          }

          if (isBlockElementListItem) {
            var listItems = children(normalizedBlock, 'li[dir]');
            each(listItems, function (listItem) {
              return remove(listItem, 'dir');
            });
          }
        });
      });
      editor.nodeChanged();
    }
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mceDirectionLTR', function () {
      setDir(editor, 'ltr');
    });
    editor.addCommand('mceDirectionRTL', function () {
      setDir(editor, 'rtl');
    });
  };

  var getNodeChangeHandler = function getNodeChangeHandler(editor, dir) {
    return function (api) {
      var nodeChangeHandler = function nodeChangeHandler(e) {
        var element = SugarElement.fromDom(e.element);
        api.setActive(getDirection(element) === dir);
      };

      editor.on('NodeChange', nodeChangeHandler);
      return function () {
        return editor.off('NodeChange', nodeChangeHandler);
      };
    };
  };

  var register = function register(editor) {
    editor.ui.registry.addToggleButton('ltr', {
      tooltip: 'Left to right',
      icon: 'ltr',
      onAction: function onAction() {
        return editor.execCommand('mceDirectionLTR');
      },
      onSetup: getNodeChangeHandler(editor, 'ltr')
    });
    editor.ui.registry.addToggleButton('rtl', {
      tooltip: 'Right to left',
      icon: 'rtl',
      onAction: function onAction() {
        return editor.execCommand('mceDirectionRTL');
      },
      onSetup: getNodeChangeHandler(editor, 'rtl')
    });
  };

  var Plugin = function Plugin() {
    global.add('directionality', function (editor) {
      register$1(editor);
      register(editor);
    });
  };

  Plugin();
})();