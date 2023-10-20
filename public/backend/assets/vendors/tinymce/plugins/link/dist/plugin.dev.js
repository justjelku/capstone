"use strict";

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

  var global$5 = tinymce.util.Tools.resolve('tinymce.PluginManager');

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

  var isType = function isType(type) {
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

  var isString = isType('string');
  var isObject = isType('object');
  var isArray = isType('array');
  var isNull = eq(null);
  var isBoolean = isSimpleType('boolean');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isFunction = isSimpleType('function');

  var isArrayOf = function isArrayOf(value, pred) {
    if (isArray(value)) {
      for (var i = 0, len = value.length; i < len; ++i) {
        if (!pred(value[i])) {
          return false;
        }
      }

      return true;
    }

    return false;
  };

  var noop = function noop() {};

  var tripleEquals = function tripleEquals(a, b) {
    return a === b;
  };

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
  var nativeIndexOf = Array.prototype.indexOf;
  var nativePush = Array.prototype.push;

  var rawIndexOf = function rawIndexOf(ts, t) {
    return nativeIndexOf.call(ts, t);
  };

  var contains = function contains(xs, x) {
    return rawIndexOf(xs, x) > -1;
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

  var foldl = function foldl(xs, f, acc) {
    each$1(xs, function (x, i) {
      acc = f(acc, x, i);
    });
    return acc;
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

  var findMap = function findMap(arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);

      if (r.isSome()) {
        return r;
      }
    }

    return Optional.none();
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

  var someIf = function someIf(b, a) {
    return b ? Optional.some(a) : Optional.none();
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;
    registerOption('link_assume_external_targets', {
      processor: function processor(value) {
        var valid = isString(value) || isBoolean(value);

        if (valid) {
          if (value === true) {
            return {
              value: 1,
              valid: valid
            };
          } else if (value === 'http' || value === 'https') {
            return {
              value: value,
              valid: valid
            };
          } else {
            return {
              value: 0,
              valid: valid
            };
          }
        } else {
          return {
            valid: false,
            message: 'Must be a string or a boolean.'
          };
        }
      },
      "default": false
    });
    registerOption('link_context_toolbar', {
      processor: 'boolean',
      "default": false
    });
    registerOption('link_list', {
      processor: function processor(value) {
        return isString(value) || isFunction(value) || isArrayOf(value, isObject);
      }
    });
    registerOption('link_default_target', {
      processor: 'string'
    });
    registerOption('link_default_protocol', {
      processor: 'string',
      "default": 'https'
    });
    registerOption('link_target_list', {
      processor: function processor(value) {
        return isBoolean(value) || isArrayOf(value, isObject);
      },
      "default": true
    });
    registerOption('link_rel_list', {
      processor: 'object[]',
      "default": []
    });
    registerOption('link_class_list', {
      processor: 'object[]',
      "default": []
    });
    registerOption('link_title', {
      processor: 'boolean',
      "default": true
    });
    registerOption('allow_unsafe_link_target', {
      processor: 'boolean',
      "default": false
    });
    registerOption('link_quicklink', {
      processor: 'boolean',
      "default": false
    });
  };

  var assumeExternalTargets = option('link_assume_external_targets');
  var hasContextToolbar = option('link_context_toolbar');
  var getLinkList = option('link_list');
  var getDefaultLinkTarget = option('link_default_target');
  var getDefaultLinkProtocol = option('link_default_protocol');
  var getTargetList = option('link_target_list');
  var getRelList = option('link_rel_list');
  var getLinkClassList = option('link_class_list');
  var shouldShowLinkTitle = option('link_title');
  var allowUnsafeLinkTarget = option('allow_unsafe_link_target');
  var useQuickLink = option('link_quicklink');
  var global$4 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var getValue = function getValue(item) {
    return isString(item.value) ? item.value : '';
  };

  var getText = function getText(item) {
    if (isString(item.text)) {
      return item.text;
    } else if (isString(item.title)) {
      return item.title;
    } else {
      return '';
    }
  };

  var sanitizeList = function sanitizeList(list, extractValue) {
    var out = [];
    global$4.each(list, function (item) {
      var text = getText(item);

      if (item.menu !== undefined) {
        var items = sanitizeList(item.menu, extractValue);
        out.push({
          text: text,
          items: items
        });
      } else {
        var value = extractValue(item);
        out.push({
          text: text,
          value: value
        });
      }
    });
    return out;
  };

  var sanitizeWith = function sanitizeWith() {
    var extracter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue;
    return function (list) {
      return Optional.from(list).map(function (list) {
        return sanitizeList(list, extracter);
      });
    };
  };

  var sanitize = function sanitize(list) {
    return sanitizeWith(getValue)(list);
  };

  var createUi = function createUi(name, label) {
    return function (items) {
      return {
        name: name,
        type: 'listbox',
        label: label,
        items: items
      };
    };
  };

  var ListOptions = {
    sanitize: sanitize,
    sanitizeWith: sanitizeWith,
    createUi: createUi,
    getValue: getValue
  };
  var keys = Object.keys;
  var hasOwnProperty = Object.hasOwnProperty;

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

  var has = function has(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var hasNonNullableKey = function hasNonNullableKey(obj, key) {
    return has(obj, key) && obj[key] !== undefined && obj[key] !== null;
  };

  var global$3 = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');
  var global$2 = tinymce.util.Tools.resolve('tinymce.util.URI');

  var isAnchor = function isAnchor(elm) {
    return elm && elm.nodeName.toLowerCase() === 'a';
  };

  var isLink = function isLink(elm) {
    return isAnchor(elm) && !!getHref(elm);
  };

  var collectNodesInRange = function collectNodesInRange(rng, predicate) {
    if (rng.collapsed) {
      return [];
    } else {
      var contents = rng.cloneContents();
      var walker = new global$3(contents.firstChild, contents);
      var elements = [];
      var current = contents.firstChild;

      do {
        if (predicate(current)) {
          elements.push(current);
        }
      } while (current = walker.next());

      return elements;
    }
  };

  var hasProtocol = function hasProtocol(url) {
    return /^\w+:/i.test(url);
  };

  var getHref = function getHref(elm) {
    var href = elm.getAttribute('data-mce-href');
    return href ? href : elm.getAttribute('href');
  };

  var applyRelTargetRules = function applyRelTargetRules(rel, isUnsafe) {
    var rules = ['noopener'];
    var rels = rel ? rel.split(/\s+/) : [];

    var toString = function toString(rels) {
      return global$4.trim(rels.sort().join(' '));
    };

    var addTargetRules = function addTargetRules(rels) {
      rels = removeTargetRules(rels);
      return rels.length > 0 ? rels.concat(rules) : rules;
    };

    var removeTargetRules = function removeTargetRules(rels) {
      return rels.filter(function (val) {
        return global$4.inArray(rules, val) === -1;
      });
    };

    var newRels = isUnsafe ? addTargetRules(rels) : removeTargetRules(rels);
    return newRels.length > 0 ? toString(newRels) : '';
  };

  var trimCaretContainers = function trimCaretContainers(text) {
    return text.replace(/\uFEFF/g, '');
  };

  var getAnchorElement = function getAnchorElement(editor, selectedElm) {
    selectedElm = selectedElm || editor.selection.getNode();

    if (isImageFigure(selectedElm)) {
      return editor.dom.select('a[href]', selectedElm)[0];
    } else {
      return editor.dom.getParent(selectedElm, 'a[href]');
    }
  };

  var getAnchorText = function getAnchorText(selection, anchorElm) {
    var text = anchorElm ? anchorElm.innerText || anchorElm.textContent : selection.getContent({
      format: 'text'
    });
    return trimCaretContainers(text);
  };

  var hasLinks = function hasLinks(elements) {
    return global$4.grep(elements, isLink).length > 0;
  };

  var hasLinksInSelection = function hasLinksInSelection(rng) {
    return collectNodesInRange(rng, isLink).length > 0;
  };

  var isOnlyTextSelected = function isOnlyTextSelected(editor) {
    var inlineTextElements = editor.schema.getTextInlineElements();

    var isElement = function isElement(elm) {
      return elm.nodeType === 1 && !isAnchor(elm) && !has(inlineTextElements, elm.nodeName.toLowerCase());
    };

    var elements = collectNodesInRange(editor.selection.getRng(), isElement);
    return elements.length === 0;
  };

  var isImageFigure = function isImageFigure(elm) {
    return elm && elm.nodeName === 'FIGURE' && /\bimage\b/i.test(elm.className);
  };

  var getLinkAttrs = function getLinkAttrs(data) {
    var attrs = ['title', 'rel', 'class', 'target'];
    return foldl(attrs, function (acc, key) {
      data[key].each(function (value) {
        acc[key] = value.length > 0 ? value : null;
      });
      return acc;
    }, {
      href: data.href
    });
  };

  var handleExternalTargets = function handleExternalTargets(href, assumeExternalTargets) {
    if ((assumeExternalTargets === 'http' || assumeExternalTargets === 'https') && !hasProtocol(href)) {
      return assumeExternalTargets + '://' + href;
    }

    return href;
  };

  var applyLinkOverrides = function applyLinkOverrides(editor, linkAttrs) {
    var newLinkAttrs = _objectSpread({}, linkAttrs);

    if (getRelList(editor).length === 0 && !allowUnsafeLinkTarget(editor)) {
      var newRel = applyRelTargetRules(newLinkAttrs.rel, newLinkAttrs.target === '_blank');
      newLinkAttrs.rel = newRel ? newRel : null;
    }

    if (Optional.from(newLinkAttrs.target).isNone() && getTargetList(editor) === false) {
      newLinkAttrs.target = getDefaultLinkTarget(editor);
    }

    newLinkAttrs.href = handleExternalTargets(newLinkAttrs.href, assumeExternalTargets(editor));
    return newLinkAttrs;
  };

  var updateLink = function updateLink(editor, anchorElm, text, linkAttrs) {
    text.each(function (text) {
      if (has(anchorElm, 'innerText')) {
        anchorElm.innerText = text;
      } else {
        anchorElm.textContent = text;
      }
    });
    editor.dom.setAttribs(anchorElm, linkAttrs);
    editor.selection.select(anchorElm);
  };

  var createLink = function createLink(editor, selectedElm, text, linkAttrs) {
    if (isImageFigure(selectedElm)) {
      linkImageFigure(editor, selectedElm, linkAttrs);
    } else {
      text.fold(function () {
        editor.execCommand('mceInsertLink', false, linkAttrs);
      }, function (text) {
        editor.insertContent(editor.dom.createHTML('a', linkAttrs, editor.dom.encode(text)));
      });
    }
  };

  var linkDomMutation = function linkDomMutation(editor, attachState, data) {
    var selectedElm = editor.selection.getNode();
    var anchorElm = getAnchorElement(editor, selectedElm);
    var linkAttrs = applyLinkOverrides(editor, getLinkAttrs(data));
    editor.undoManager.transact(function () {
      if (data.href === attachState.href) {
        attachState.attach();
      }

      if (anchorElm) {
        editor.focus();
        updateLink(editor, anchorElm, data.text, linkAttrs);
      } else {
        createLink(editor, selectedElm, data.text, linkAttrs);
      }
    });
  };

  var unlinkSelection = function unlinkSelection(editor) {
    var dom = editor.dom,
        selection = editor.selection;
    var bookmark = selection.getBookmark();
    var rng = selection.getRng().cloneRange();
    var startAnchorElm = dom.getParent(rng.startContainer, 'a[href]', editor.getBody());
    var endAnchorElm = dom.getParent(rng.endContainer, 'a[href]', editor.getBody());

    if (startAnchorElm) {
      rng.setStartBefore(startAnchorElm);
    }

    if (endAnchorElm) {
      rng.setEndAfter(endAnchorElm);
    }

    selection.setRng(rng);
    editor.execCommand('unlink');
    selection.moveToBookmark(bookmark);
  };

  var unlinkDomMutation = function unlinkDomMutation(editor) {
    editor.undoManager.transact(function () {
      var node = editor.selection.getNode();

      if (isImageFigure(node)) {
        unlinkImageFigure(editor, node);
      } else {
        unlinkSelection(editor);
      }

      editor.focus();
    });
  };

  var unwrapOptions = function unwrapOptions(data) {
    var cls = data["class"],
        href = data.href,
        rel = data.rel,
        target = data.target,
        text = data.text,
        title = data.title;
    return filter({
      "class": cls.getOrNull(),
      href: href,
      rel: rel.getOrNull(),
      target: target.getOrNull(),
      text: text.getOrNull(),
      title: title.getOrNull()
    }, function (v, _k) {
      return isNull(v) === false;
    });
  };

  var sanitizeData = function sanitizeData(editor, data) {
    var getOption = editor.options.get;
    var uriOptions = {
      allow_html_data_urls: getOption('allow_html_data_urls'),
      allow_script_urls: getOption('allow_script_urls'),
      allow_svg_data_urls: getOption('allow_svg_data_urls')
    };
    var href = data.href;
    return _objectSpread({}, data, {
      href: global$2.isDomSafe(href, 'a', uriOptions) ? href : ''
    });
  };

  var link = function link(editor, attachState, data) {
    var sanitizedData = sanitizeData(editor, data);
    editor.hasPlugin('rtc', true) ? editor.execCommand('createlink', false, unwrapOptions(sanitizedData)) : linkDomMutation(editor, attachState, sanitizedData);
  };

  var unlink = function unlink(editor) {
    editor.hasPlugin('rtc', true) ? editor.execCommand('unlink') : unlinkDomMutation(editor);
  };

  var unlinkImageFigure = function unlinkImageFigure(editor, fig) {
    var img = editor.dom.select('img', fig)[0];

    if (img) {
      var a = editor.dom.getParents(img, 'a[href]', fig)[0];

      if (a) {
        a.parentNode.insertBefore(img, a);
        editor.dom.remove(a);
      }
    }
  };

  var linkImageFigure = function linkImageFigure(editor, fig, attrs) {
    var img = editor.dom.select('img', fig)[0];

    if (img) {
      var a = editor.dom.create('a', attrs);
      img.parentNode.insertBefore(a, img);
      a.appendChild(img);
    }
  };

  var isListGroup = function isListGroup(item) {
    return hasNonNullableKey(item, 'items');
  };

  var findTextByValue = function findTextByValue(value, catalog) {
    return findMap(catalog, function (item) {
      if (isListGroup(item)) {
        return findTextByValue(value, item.items);
      } else {
        return someIf(item.value === value, item);
      }
    });
  };

  var getDelta = function getDelta(persistentText, fieldName, catalog, data) {
    var value = data[fieldName];
    var hasPersistentText = persistentText.length > 0;
    return value !== undefined ? findTextByValue(value, catalog).map(function (i) {
      return {
        url: {
          value: i.value,
          meta: {
            text: hasPersistentText ? persistentText : i.text,
            attach: noop
          }
        },
        text: hasPersistentText ? persistentText : i.text
      };
    }) : Optional.none();
  };

  var findCatalog = function findCatalog(catalogs, fieldName) {
    if (fieldName === 'link') {
      return catalogs.link;
    } else if (fieldName === 'anchor') {
      return catalogs.anchor;
    } else {
      return Optional.none();
    }
  };

  var init = function init(initialData, linkCatalog) {
    var persistentData = {
      text: initialData.text,
      title: initialData.title
    };

    var getTitleFromUrlChange = function getTitleFromUrlChange(url) {
      return someIf(persistentData.title.length <= 0, Optional.from(url.meta.title).getOr(''));
    };

    var getTextFromUrlChange = function getTextFromUrlChange(url) {
      return someIf(persistentData.text.length <= 0, Optional.from(url.meta.text).getOr(url.value));
    };

    var onUrlChange = function onUrlChange(data) {
      var text = getTextFromUrlChange(data.url);
      var title = getTitleFromUrlChange(data.url);

      if (text.isSome() || title.isSome()) {
        return Optional.some(_objectSpread({}, text.map(function (text) {
          return {
            text: text
          };
        }).getOr({}), {}, title.map(function (title) {
          return {
            title: title
          };
        }).getOr({})));
      } else {
        return Optional.none();
      }
    };

    var onCatalogChange = function onCatalogChange(data, change) {
      var catalog = findCatalog(linkCatalog, change.name).getOr([]);
      return getDelta(persistentData.text, change.name, catalog, data);
    };

    var onChange = function onChange(getData, change) {
      var name = change.name;

      if (name === 'url') {
        return onUrlChange(getData());
      } else if (contains(['anchor', 'link'], name)) {
        return onCatalogChange(getData(), change);
      } else if (name === 'text' || name === 'title') {
        persistentData[name] = getData()[name];
        return Optional.none();
      } else {
        return Optional.none();
      }
    };

    return {
      onChange: onChange
    };
  };

  var DialogChanges = {
    init: init,
    getDelta: getDelta
  };
  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var delayedConfirm = function delayedConfirm(editor, message, callback) {
    var rng = editor.selection.getRng();
    global$1.setEditorTimeout(editor, function () {
      editor.windowManager.confirm(message, function (state) {
        editor.selection.setRng(rng);
        callback(state);
      });
    });
  };

  var tryEmailTransform = function tryEmailTransform(data) {
    var url = data.href;
    var suggestMailTo = url.indexOf('@') > 0 && url.indexOf('/') === -1 && url.indexOf('mailto:') === -1;
    return suggestMailTo ? Optional.some({
      message: 'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?',
      preprocess: function preprocess(oldData) {
        return _objectSpread({}, oldData, {
          href: 'mailto:' + url
        });
      }
    }) : Optional.none();
  };

  var tryProtocolTransform = function tryProtocolTransform(assumeExternalTargets, defaultLinkProtocol) {
    return function (data) {
      var url = data.href;
      var suggestProtocol = assumeExternalTargets === 1 && !hasProtocol(url) || assumeExternalTargets === 0 && /^\s*www(\.|\d\.)/i.test(url);
      return suggestProtocol ? Optional.some({
        message: "The URL you entered seems to be an external link. Do you want to add the required ".concat(defaultLinkProtocol, ":// prefix?"),
        preprocess: function preprocess(oldData) {
          return _objectSpread({}, oldData, {
            href: defaultLinkProtocol + '://' + url
          });
        }
      }) : Optional.none();
    };
  };

  var preprocess = function preprocess(editor, data) {
    return findMap([tryEmailTransform, tryProtocolTransform(assumeExternalTargets(editor), getDefaultLinkProtocol(editor))], function (f) {
      return f(data);
    }).fold(function () {
      return Promise.resolve(data);
    }, function (transform) {
      return new Promise(function (callback) {
        delayedConfirm(editor, transform.message, function (state) {
          callback(state ? transform.preprocess(data) : data);
        });
      });
    });
  };

  var DialogConfirms = {
    preprocess: preprocess
  };

  var getAnchors = function getAnchors(editor) {
    var anchorNodes = editor.dom.select('a:not([href])');
    var anchors = bind(anchorNodes, function (anchor) {
      var id = anchor.name || anchor.id;
      return id ? [{
        text: id,
        value: '#' + id
      }] : [];
    });
    return anchors.length > 0 ? Optional.some([{
      text: 'None',
      value: ''
    }].concat(anchors)) : Optional.none();
  };

  var AnchorListOptions = {
    getAnchors: getAnchors
  };

  var getClasses = function getClasses(editor) {
    var list = getLinkClassList(editor);

    if (list.length > 0) {
      return ListOptions.sanitize(list);
    }

    return Optional.none();
  };

  var ClassListOptions = {
    getClasses: getClasses
  };

  var parseJson = function parseJson(text) {
    try {
      return Optional.some(JSON.parse(text));
    } catch (err) {
      return Optional.none();
    }
  };

  var getLinks = function getLinks(editor) {
    var extractor = function extractor(item) {
      return editor.convertURL(item.value || item.url, 'href');
    };

    var linkList = getLinkList(editor);
    return new Promise(function (resolve) {
      if (isString(linkList)) {
        fetch(linkList).then(function (res) {
          return res.ok ? res.text().then(parseJson) : Promise.reject();
        }).then(resolve, function () {
          return resolve(Optional.none());
        });
      } else if (isFunction(linkList)) {
        linkList(function (output) {
          return resolve(Optional.some(output));
        });
      } else {
        resolve(Optional.from(linkList));
      }
    }).then(function (optItems) {
      return optItems.bind(ListOptions.sanitizeWith(extractor)).map(function (items) {
        if (items.length > 0) {
          var noneItem = [{
            text: 'None',
            value: ''
          }];
          return noneItem.concat(items);
        } else {
          return items;
        }
      });
    });
  };

  var LinkListOptions = {
    getLinks: getLinks
  };

  var getRels = function getRels(editor, initialTarget) {
    var list = getRelList(editor);

    if (list.length > 0) {
      var isTargetBlank = is(initialTarget, '_blank');
      var enforceSafe = allowUnsafeLinkTarget(editor) === false;

      var safeRelExtractor = function safeRelExtractor(item) {
        return applyRelTargetRules(ListOptions.getValue(item), isTargetBlank);
      };

      var sanitizer = enforceSafe ? ListOptions.sanitizeWith(safeRelExtractor) : ListOptions.sanitize;
      return sanitizer(list);
    }

    return Optional.none();
  };

  var RelOptions = {
    getRels: getRels
  };
  var fallbacks = [{
    text: 'Current window',
    value: ''
  }, {
    text: 'New window',
    value: '_blank'
  }];

  var getTargets = function getTargets(editor) {
    var list = getTargetList(editor);

    if (isArray(list)) {
      return ListOptions.sanitize(list).orThunk(function () {
        return Optional.some(fallbacks);
      });
    } else if (list === false) {
      return Optional.none();
    }

    return Optional.some(fallbacks);
  };

  var TargetOptions = {
    getTargets: getTargets
  };

  var nonEmptyAttr = function nonEmptyAttr(dom, elem, name) {
    var val = dom.getAttrib(elem, name);
    return val !== null && val.length > 0 ? Optional.some(val) : Optional.none();
  };

  var extractFromAnchor = function extractFromAnchor(editor, anchor) {
    var dom = editor.dom;
    var onlyText = isOnlyTextSelected(editor);
    var text = onlyText ? Optional.some(getAnchorText(editor.selection, anchor)) : Optional.none();
    var url = anchor ? Optional.some(dom.getAttrib(anchor, 'href')) : Optional.none();
    var target = anchor ? Optional.from(dom.getAttrib(anchor, 'target')) : Optional.none();
    var rel = nonEmptyAttr(dom, anchor, 'rel');
    var linkClass = nonEmptyAttr(dom, anchor, 'class');
    var title = nonEmptyAttr(dom, anchor, 'title');
    return {
      url: url,
      text: text,
      title: title,
      target: target,
      rel: rel,
      linkClass: linkClass
    };
  };

  var collect = function collect(editor, linkNode) {
    return LinkListOptions.getLinks(editor).then(function (links) {
      var anchor = extractFromAnchor(editor, linkNode);
      return {
        anchor: anchor,
        catalogs: {
          targets: TargetOptions.getTargets(editor),
          rels: RelOptions.getRels(editor, anchor.target),
          classes: ClassListOptions.getClasses(editor),
          anchor: AnchorListOptions.getAnchors(editor),
          link: links
        },
        optNode: Optional.from(linkNode),
        flags: {
          titleEnabled: shouldShowLinkTitle(editor)
        }
      };
    });
  };

  var DialogInfo = {
    collect: collect
  };

  var handleSubmit = function handleSubmit(editor, info) {
    return function (api) {
      var data = api.getData();

      if (!data.url.value) {
        unlink(editor);
        api.close();
        return;
      }

      var getChangedValue = function getChangedValue(key) {
        return Optional.from(data[key]).filter(function (value) {
          return !is(info.anchor[key], value);
        });
      };

      var changedData = {
        href: data.url.value,
        text: getChangedValue('text'),
        target: getChangedValue('target'),
        rel: getChangedValue('rel'),
        "class": getChangedValue('linkClass'),
        title: getChangedValue('title')
      };
      var attachState = {
        href: data.url.value,
        attach: data.url.meta !== undefined && data.url.meta.attach ? data.url.meta.attach : noop
      };
      DialogConfirms.preprocess(editor, changedData).then(function (pData) {
        link(editor, attachState, pData);
      });
      api.close();
    };
  };

  var collectData = function collectData(editor) {
    var anchorNode = getAnchorElement(editor);
    return DialogInfo.collect(editor, anchorNode);
  };

  var getInitialData = function getInitialData(info, defaultTarget) {
    var anchor = info.anchor;
    var url = anchor.url.getOr('');
    return {
      url: {
        value: url,
        meta: {
          original: {
            value: url
          }
        }
      },
      text: anchor.text.getOr(''),
      title: anchor.title.getOr(''),
      anchor: url,
      link: url,
      rel: anchor.rel.getOr(''),
      target: anchor.target.or(defaultTarget).getOr(''),
      linkClass: anchor.linkClass.getOr('')
    };
  };

  var makeDialog = function makeDialog(settings, onSubmit, editor) {
    var urlInput = [{
      name: 'url',
      type: 'urlinput',
      filetype: 'file',
      label: 'URL'
    }];
    var displayText = settings.anchor.text.map(function () {
      return {
        name: 'text',
        type: 'input',
        label: 'Text to display'
      };
    }).toArray();
    var titleText = settings.flags.titleEnabled ? [{
      name: 'title',
      type: 'input',
      label: 'Title'
    }] : [];
    var defaultTarget = Optional.from(getDefaultLinkTarget(editor));
    var initialData = getInitialData(settings, defaultTarget);
    var catalogs = settings.catalogs;
    var dialogDelta = DialogChanges.init(initialData, catalogs);
    var body = {
      type: 'panel',
      items: flatten([urlInput, displayText, titleText, cat([catalogs.anchor.map(ListOptions.createUi('anchor', 'Anchors')), catalogs.rels.map(ListOptions.createUi('rel', 'Rel')), catalogs.targets.map(ListOptions.createUi('target', 'Open link in...')), catalogs.link.map(ListOptions.createUi('link', 'Link list')), catalogs.classes.map(ListOptions.createUi('linkClass', 'Class'))])])
    };
    return {
      title: 'Insert/Edit Link',
      size: 'normal',
      body: body,
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
      initialData: initialData,
      onChange: function onChange(api, _ref) {
        var name = _ref.name;
        dialogDelta.onChange(api.getData, {
          name: name
        }).each(function (newData) {
          api.setData(newData);
        });
      },
      onSubmit: onSubmit
    };
  };

  var open$1 = function open$1(editor) {
    var data = collectData(editor);
    data.then(function (info) {
      var onSubmit = handleSubmit(editor, info);
      return makeDialog(info, onSubmit, editor);
    }).then(function (spec) {
      editor.windowManager.open(spec);
    });
  };

  var register = function register(editor) {
    editor.addCommand('mceLink', function (_ui, value) {
      if ((value === null || value === void 0 ? void 0 : value.dialog) === true || !useQuickLink(editor)) {
        open$1(editor);
      } else {
        editor.dispatch('contexttoolbar-show', {
          toolbarKey: 'quicklink'
        });
      }
    });
  };

  var global = tinymce.util.Tools.resolve('tinymce.util.VK');

  var appendClickRemove = function appendClickRemove(link, evt) {
    document.body.appendChild(link);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
  };

  var open = function open(url) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.rel = 'noreferrer noopener';
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    appendClickRemove(link, evt);
  };

  var getLink = function getLink(editor, elm) {
    return editor.dom.getParent(elm, 'a[href]');
  };

  var getSelectedLink = function getSelectedLink(editor) {
    return getLink(editor, editor.selection.getStart());
  };

  var hasOnlyAltModifier = function hasOnlyAltModifier(e) {
    return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
  };

  var gotoLink = function gotoLink(editor, a) {
    if (a) {
      var href = getHref(a);

      if (/^#/.test(href)) {
        var targetEl = editor.dom.select(href);

        if (targetEl.length) {
          editor.selection.scrollIntoView(targetEl[0], true);
        }
      } else {
        open(a.href);
      }
    }
  };

  var openDialog = function openDialog(editor) {
    return function () {
      editor.execCommand('mceLink', false, {
        dialog: true
      });
    };
  };

  var gotoSelectedLink = function gotoSelectedLink(editor) {
    return function () {
      gotoLink(editor, getSelectedLink(editor));
    };
  };

  var setupGotoLinks = function setupGotoLinks(editor) {
    editor.on('click', function (e) {
      var link = getLink(editor, e.target);

      if (link && global.metaKeyPressed(e)) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    });
    editor.on('keydown', function (e) {
      if (!e.isDefaultPrevented() && e.keyCode === 13 && hasOnlyAltModifier(e)) {
        var _link = getSelectedLink(editor);

        if (_link) {
          e.preventDefault();
          gotoLink(editor, _link);
        }
      }
    });
  };

  var toggleState = function toggleState(editor, toggler) {
    editor.on('NodeChange', toggler);
    return function () {
      return editor.off('NodeChange', toggler);
    };
  };

  var toggleActiveState = function toggleActiveState(editor) {
    return function (api) {
      var updateState = function updateState() {
        return api.setActive(!editor.mode.isReadOnly() && getAnchorElement(editor, editor.selection.getNode()) !== null);
      };

      updateState();
      return toggleState(editor, updateState);
    };
  };

  var toggleEnabledState = function toggleEnabledState(editor) {
    return function (api) {
      var updateState = function updateState() {
        return api.setEnabled(getAnchorElement(editor, editor.selection.getNode()) !== null);
      };

      updateState();
      return toggleState(editor, updateState);
    };
  };

  var toggleUnlinkState = function toggleUnlinkState(editor) {
    return function (api) {
      var hasLinks$1 = function hasLinks$1(parents) {
        return hasLinks(parents) || hasLinksInSelection(editor.selection.getRng());
      };

      var parents = editor.dom.getParents(editor.selection.getStart());
      api.setEnabled(hasLinks$1(parents));
      return toggleState(editor, function (e) {
        return api.setEnabled(hasLinks$1(e.parents));
      });
    };
  };

  var setup = function setup(editor) {
    editor.addShortcut('Meta+K', '', function () {
      editor.execCommand('mceLink');
    });
  };

  var setupButtons = function setupButtons(editor) {
    editor.ui.registry.addToggleButton('link', {
      icon: 'link',
      tooltip: 'Insert/edit link',
      onAction: openDialog(editor),
      onSetup: toggleActiveState(editor)
    });
    editor.ui.registry.addButton('openlink', {
      icon: 'new-tab',
      tooltip: 'Open link',
      onAction: gotoSelectedLink(editor),
      onSetup: toggleEnabledState(editor)
    });
    editor.ui.registry.addButton('unlink', {
      icon: 'unlink',
      tooltip: 'Remove link',
      onAction: function onAction() {
        return unlink(editor);
      },
      onSetup: toggleUnlinkState(editor)
    });
  };

  var setupMenuItems = function setupMenuItems(editor) {
    editor.ui.registry.addMenuItem('openlink', {
      text: 'Open link',
      icon: 'new-tab',
      onAction: gotoSelectedLink(editor),
      onSetup: toggleEnabledState(editor)
    });
    editor.ui.registry.addMenuItem('link', {
      icon: 'link',
      text: 'Link...',
      shortcut: 'Meta+K',
      onAction: openDialog(editor)
    });
    editor.ui.registry.addMenuItem('unlink', {
      icon: 'unlink',
      text: 'Remove link',
      onAction: function onAction() {
        return unlink(editor);
      },
      onSetup: toggleUnlinkState(editor)
    });
  };

  var setupContextMenu = function setupContextMenu(editor) {
    var inLink = 'link unlink openlink';
    var noLink = 'link';
    editor.ui.registry.addContextMenu('link', {
      update: function update(element) {
        return hasLinks(editor.dom.getParents(element, 'a')) ? inLink : noLink;
      }
    });
  };

  var setupContextToolbars = function setupContextToolbars(editor) {
    var collapseSelectionToEnd = function collapseSelectionToEnd(editor) {
      editor.selection.collapse(false);
    };

    var onSetupLink = function onSetupLink(buttonApi) {
      var node = editor.selection.getNode();
      buttonApi.setEnabled(getAnchorElement(editor, node) !== null);
      return noop;
    };

    var getLinkText = function getLinkText(value) {
      var anchor = getAnchorElement(editor);
      var onlyText = isOnlyTextSelected(editor);

      if (!anchor && onlyText) {
        var text = getAnchorText(editor.selection, anchor);
        return Optional.some(text.length > 0 ? text : value);
      } else {
        return Optional.none();
      }
    };

    editor.ui.registry.addContextForm('quicklink', {
      launch: {
        type: 'contextformtogglebutton',
        icon: 'link',
        tooltip: 'Link',
        onSetup: toggleActiveState(editor)
      },
      label: 'Link',
      predicate: function predicate(node) {
        return !!getAnchorElement(editor, node) && hasContextToolbar(editor);
      },
      initValue: function initValue() {
        var elm = getAnchorElement(editor);
        return !!elm ? getHref(elm) : '';
      },
      commands: [{
        type: 'contextformtogglebutton',
        icon: 'link',
        tooltip: 'Link',
        primary: true,
        onSetup: function onSetup(buttonApi) {
          var node = editor.selection.getNode();
          buttonApi.setActive(!!getAnchorElement(editor, node));
          return toggleActiveState(editor)(buttonApi);
        },
        onAction: function onAction(formApi) {
          var value = formApi.getValue();
          var text = getLinkText(value);
          var attachState = {
            href: value,
            attach: noop
          };
          link(editor, attachState, {
            href: value,
            text: text,
            title: Optional.none(),
            rel: Optional.none(),
            target: Optional.none(),
            "class": Optional.none()
          });
          collapseSelectionToEnd(editor);
          formApi.hide();
        }
      }, {
        type: 'contextformbutton',
        icon: 'unlink',
        tooltip: 'Remove link',
        onSetup: onSetupLink,
        onAction: function onAction(formApi) {
          unlink(editor);
          formApi.hide();
        }
      }, {
        type: 'contextformbutton',
        icon: 'new-tab',
        tooltip: 'Open link',
        onSetup: onSetupLink,
        onAction: function onAction(formApi) {
          gotoSelectedLink(editor)();
          formApi.hide();
        }
      }]
    });
  };

  var Plugin = function Plugin() {
    global$5.add('link', function (editor) {
      register$1(editor);
      setupButtons(editor);
      setupMenuItems(editor);
      setupContextMenu(editor);
      setupContextToolbars(editor);
      setupGotoLinks(editor);
      register(editor);
      setup(editor);
    });
  };

  Plugin();
})();