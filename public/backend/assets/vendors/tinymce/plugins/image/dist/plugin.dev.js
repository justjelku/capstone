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

  var global$4 = tinymce.util.Tools.resolve('tinymce.PluginManager');
  var getPrototypeOf = Object.getPrototypeOf;

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

  var is = function is(value, constructor) {
    return isObject(value) && hasProto(value, constructor, function (o, proto) {
      return getPrototypeOf(o) === proto;
    });
  };

  var isString = isType('string');
  var isObject = isType('object');

  var isPlainObject = function isPlainObject(value) {
    return is(value, Object);
  };

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
  var isNumber = isSimpleType('number');

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

  var nativePush = Array.prototype.push;

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

  var get = function get(xs, i) {
    return i >= 0 && i < xs.length ? Optional.some(xs[i]) : Optional.none();
  };

  var head = function head(xs) {
    return get(xs, 0);
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

  typeof window !== 'undefined' ? window : Function('return this;')();

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
  var global$3 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');
  var global$2 = tinymce.util.Tools.resolve('tinymce.util.URI');

  var isNotEmpty = function isNotEmpty(s) {
    return s.length > 0;
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('image_dimensions', {
      processor: 'boolean',
      "default": true
    });
    registerOption('image_advtab', {
      processor: 'boolean',
      "default": false
    });
    registerOption('image_uploadtab', {
      processor: 'boolean',
      "default": true
    });
    registerOption('image_prepend_url', {
      processor: 'string',
      "default": ''
    });
    registerOption('image_class_list', {
      processor: 'object[]'
    });
    registerOption('image_description', {
      processor: 'boolean',
      "default": true
    });
    registerOption('image_title', {
      processor: 'boolean',
      "default": false
    });
    registerOption('image_caption', {
      processor: 'boolean',
      "default": false
    });
    registerOption('image_list', {
      processor: function processor(value) {
        var valid = value === false || isString(value) || isArrayOf(value, isObject) || isFunction(value);
        return valid ? {
          value: value,
          valid: valid
        } : {
          valid: false,
          message: 'Must be false, a string, an array or a function.'
        };
      },
      "default": false
    });
  };

  var hasDimensions = option('image_dimensions');
  var hasAdvTab = option('image_advtab');
  var hasUploadTab = option('image_uploadtab');
  var getPrependUrl = option('image_prepend_url');
  var getClassList = option('image_class_list');
  var hasDescription = option('image_description');
  var hasImageTitle = option('image_title');
  var hasImageCaption = option('image_caption');
  var getImageList = option('image_list');
  var showAccessibilityOptions = option('a11y_advanced_options');
  var isAutomaticUploadsEnabled = option('automatic_uploads');

  var hasUploadUrl = function hasUploadUrl(editor) {
    return isNotEmpty(editor.options.get('images_upload_url'));
  };

  var hasUploadHandler = function hasUploadHandler(editor) {
    return isNonNullable(editor.options.get('images_upload_handler'));
  };

  var parseIntAndGetMax = function parseIntAndGetMax(val1, val2) {
    return Math.max(parseInt(val1, 10), parseInt(val2, 10));
  };

  var getImageSize = function getImageSize(url) {
    return new Promise(function (callback) {
      var img = document.createElement('img');

      var done = function done(dimensions) {
        img.onload = img.onerror = null;

        if (img.parentNode) {
          img.parentNode.removeChild(img);
        }

        callback(dimensions);
      };

      img.onload = function () {
        var width = parseIntAndGetMax(img.width, img.clientWidth);
        var height = parseIntAndGetMax(img.height, img.clientHeight);
        var dimensions = {
          width: width,
          height: height
        };
        done(Promise.resolve(dimensions));
      };

      img.onerror = function () {
        done(Promise.reject("Failed to get image dimensions for: ".concat(url)));
      };

      var style = img.style;
      style.visibility = 'hidden';
      style.position = 'fixed';
      style.bottom = style.left = '0px';
      style.width = style.height = 'auto';
      document.body.appendChild(img);
      img.src = url;
    });
  };

  var removePixelSuffix = function removePixelSuffix(value) {
    if (value) {
      value = value.replace(/px$/, '');
    }

    return value;
  };

  var addPixelSuffix = function addPixelSuffix(value) {
    if (value.length > 0 && /^[0-9]+$/.test(value)) {
      value += 'px';
    }

    return value;
  };

  var mergeMargins = function mergeMargins(css) {
    if (css.margin) {
      var splitMargin = String(css.margin).split(' ');

      switch (splitMargin.length) {
        case 1:
          css['margin-top'] = css['margin-top'] || splitMargin[0];
          css['margin-right'] = css['margin-right'] || splitMargin[0];
          css['margin-bottom'] = css['margin-bottom'] || splitMargin[0];
          css['margin-left'] = css['margin-left'] || splitMargin[0];
          break;

        case 2:
          css['margin-top'] = css['margin-top'] || splitMargin[0];
          css['margin-right'] = css['margin-right'] || splitMargin[1];
          css['margin-bottom'] = css['margin-bottom'] || splitMargin[0];
          css['margin-left'] = css['margin-left'] || splitMargin[1];
          break;

        case 3:
          css['margin-top'] = css['margin-top'] || splitMargin[0];
          css['margin-right'] = css['margin-right'] || splitMargin[1];
          css['margin-bottom'] = css['margin-bottom'] || splitMargin[2];
          css['margin-left'] = css['margin-left'] || splitMargin[1];
          break;

        case 4:
          css['margin-top'] = css['margin-top'] || splitMargin[0];
          css['margin-right'] = css['margin-right'] || splitMargin[1];
          css['margin-bottom'] = css['margin-bottom'] || splitMargin[2];
          css['margin-left'] = css['margin-left'] || splitMargin[3];
      }

      delete css.margin;
    }

    return css;
  };

  var createImageList = function createImageList(editor, callback) {
    var imageList = getImageList(editor);

    if (isString(imageList)) {
      fetch(imageList).then(function (res) {
        if (res.ok) {
          res.json().then(callback);
        }
      });
    } else if (isFunction(imageList)) {
      imageList(callback);
    } else {
      callback(imageList);
    }
  };

  var waitLoadImage = function waitLoadImage(editor, data, imgElm) {
    var selectImage = function selectImage() {
      imgElm.onload = imgElm.onerror = null;

      if (editor.selection) {
        editor.selection.select(imgElm);
        editor.nodeChanged();
      }
    };

    imgElm.onload = function () {
      if (!data.width && !data.height && hasDimensions(editor)) {
        editor.dom.setAttribs(imgElm, {
          width: String(imgElm.clientWidth),
          height: String(imgElm.clientHeight)
        });
      }

      selectImage();
    };

    imgElm.onerror = selectImage;
  };

  var blobToDataUri = function blobToDataUri(blob) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error.message);
      };

      reader.readAsDataURL(blob);
    });
  };

  var isPlaceholderImage = function isPlaceholderImage(imgElm) {
    return imgElm.nodeName === 'IMG' && (imgElm.hasAttribute('data-mce-object') || imgElm.hasAttribute('data-mce-placeholder'));
  };

  var isSafeImageUrl = function isSafeImageUrl(editor, src) {
    var getOption = editor.options.get;
    return global$2.isDomSafe(src, 'img', {
      allow_html_data_urls: getOption('allow_html_data_urls'),
      allow_script_urls: getOption('allow_script_urls'),
      allow_svg_data_urls: getOption('allow_svg_data_urls')
    });
  };

  var DOM = global$3.DOM;

  var getHspace = function getHspace(image) {
    if (image.style.marginLeft && image.style.marginRight && image.style.marginLeft === image.style.marginRight) {
      return removePixelSuffix(image.style.marginLeft);
    } else {
      return '';
    }
  };

  var getVspace = function getVspace(image) {
    if (image.style.marginTop && image.style.marginBottom && image.style.marginTop === image.style.marginBottom) {
      return removePixelSuffix(image.style.marginTop);
    } else {
      return '';
    }
  };

  var getBorder = function getBorder(image) {
    if (image.style.borderWidth) {
      return removePixelSuffix(image.style.borderWidth);
    } else {
      return '';
    }
  };

  var getAttrib = function getAttrib(image, name) {
    if (image.hasAttribute(name)) {
      return image.getAttribute(name);
    } else {
      return '';
    }
  };

  var getStyle = function getStyle(image, name) {
    return image.style[name] ? image.style[name] : '';
  };

  var hasCaption = function hasCaption(image) {
    return image.parentNode !== null && image.parentNode.nodeName === 'FIGURE';
  };

  var updateAttrib = function updateAttrib(image, name, value) {
    if (value === '') {
      image.removeAttribute(name);
    } else {
      image.setAttribute(name, value);
    }
  };

  var wrapInFigure = function wrapInFigure(image) {
    var figureElm = DOM.create('figure', {
      "class": 'image'
    });
    DOM.insertAfter(figureElm, image);
    figureElm.appendChild(image);
    figureElm.appendChild(DOM.create('figcaption', {
      contentEditable: 'true'
    }, 'Caption'));
    figureElm.contentEditable = 'false';
  };

  var removeFigure = function removeFigure(image) {
    var figureElm = image.parentNode;
    DOM.insertAfter(image, figureElm);
    DOM.remove(figureElm);
  };

  var toggleCaption = function toggleCaption(image) {
    if (hasCaption(image)) {
      removeFigure(image);
    } else {
      wrapInFigure(image);
    }
  };

  var normalizeStyle = function normalizeStyle(image, normalizeCss) {
    var attrValue = image.getAttribute('style');
    var value = normalizeCss(attrValue !== null ? attrValue : '');

    if (value.length > 0) {
      image.setAttribute('style', value);
      image.setAttribute('data-mce-style', value);
    } else {
      image.removeAttribute('style');
    }
  };

  var setSize = function setSize(name, normalizeCss) {
    return function (image, name, value) {
      if (image.style[name]) {
        image.style[name] = addPixelSuffix(value);
        normalizeStyle(image, normalizeCss);
      } else {
        updateAttrib(image, name, value);
      }
    };
  };

  var getSize = function getSize(image, name) {
    if (image.style[name]) {
      return removePixelSuffix(image.style[name]);
    } else {
      return getAttrib(image, name);
    }
  };

  var setHspace = function setHspace(image, value) {
    var pxValue = addPixelSuffix(value);
    image.style.marginLeft = pxValue;
    image.style.marginRight = pxValue;
  };

  var setVspace = function setVspace(image, value) {
    var pxValue = addPixelSuffix(value);
    image.style.marginTop = pxValue;
    image.style.marginBottom = pxValue;
  };

  var setBorder = function setBorder(image, value) {
    var pxValue = addPixelSuffix(value);
    image.style.borderWidth = pxValue;
  };

  var setBorderStyle = function setBorderStyle(image, value) {
    image.style.borderStyle = value;
  };

  var getBorderStyle = function getBorderStyle(image) {
    return getStyle(image, 'borderStyle');
  };

  var isFigure = function isFigure(elm) {
    return elm.nodeName === 'FIGURE';
  };

  var isImage = function isImage(elm) {
    return elm.nodeName === 'IMG';
  };

  var getIsDecorative = function getIsDecorative(image) {
    return DOM.getAttrib(image, 'alt').length === 0 && DOM.getAttrib(image, 'role') === 'presentation';
  };

  var getAlt = function getAlt(image) {
    if (getIsDecorative(image)) {
      return '';
    } else {
      return getAttrib(image, 'alt');
    }
  };

  var defaultData = function defaultData() {
    return {
      src: '',
      alt: '',
      title: '',
      width: '',
      height: '',
      "class": '',
      style: '',
      caption: false,
      hspace: '',
      vspace: '',
      border: '',
      borderStyle: '',
      isDecorative: false
    };
  };

  var getStyleValue = function getStyleValue(normalizeCss, data) {
    var image = document.createElement('img');
    updateAttrib(image, 'style', data.style);

    if (getHspace(image) || data.hspace !== '') {
      setHspace(image, data.hspace);
    }

    if (getVspace(image) || data.vspace !== '') {
      setVspace(image, data.vspace);
    }

    if (getBorder(image) || data.border !== '') {
      setBorder(image, data.border);
    }

    if (getBorderStyle(image) || data.borderStyle !== '') {
      setBorderStyle(image, data.borderStyle);
    }

    return normalizeCss(image.getAttribute('style'));
  };

  var create = function create(normalizeCss, data) {
    var image = document.createElement('img');
    write(normalizeCss, _objectSpread({}, data, {
      caption: false
    }), image);
    setAlt(image, data.alt, data.isDecorative);

    if (data.caption) {
      var figure = DOM.create('figure', {
        "class": 'image'
      });
      figure.appendChild(image);
      figure.appendChild(DOM.create('figcaption', {
        contentEditable: 'true'
      }, 'Caption'));
      figure.contentEditable = 'false';
      return figure;
    } else {
      return image;
    }
  };

  var read = function read(normalizeCss, image) {
    return {
      src: getAttrib(image, 'src'),
      alt: getAlt(image),
      title: getAttrib(image, 'title'),
      width: getSize(image, 'width'),
      height: getSize(image, 'height'),
      "class": getAttrib(image, 'class'),
      style: normalizeCss(getAttrib(image, 'style')),
      caption: hasCaption(image),
      hspace: getHspace(image),
      vspace: getVspace(image),
      border: getBorder(image),
      borderStyle: getStyle(image, 'borderStyle'),
      isDecorative: getIsDecorative(image)
    };
  };

  var updateProp = function updateProp(image, oldData, newData, name, set) {
    if (newData[name] !== oldData[name]) {
      set(image, name, newData[name]);
    }
  };

  var setAlt = function setAlt(image, alt, isDecorative) {
    if (isDecorative) {
      DOM.setAttrib(image, 'role', 'presentation');
      var sugarImage = SugarElement.fromDom(image);
      set(sugarImage, 'alt', '');
    } else {
      if (isNull(alt)) {
        var _sugarImage = SugarElement.fromDom(image);

        remove(_sugarImage, 'alt');
      } else {
        var _sugarImage2 = SugarElement.fromDom(image);

        set(_sugarImage2, 'alt', alt);
      }

      if (DOM.getAttrib(image, 'role') === 'presentation') {
        DOM.setAttrib(image, 'role', '');
      }
    }
  };

  var updateAlt = function updateAlt(image, oldData, newData) {
    if (newData.alt !== oldData.alt || newData.isDecorative !== oldData.isDecorative) {
      setAlt(image, newData.alt, newData.isDecorative);
    }
  };

  var normalized = function normalized(set, normalizeCss) {
    return function (image, name, value) {
      set(image, value);
      normalizeStyle(image, normalizeCss);
    };
  };

  var write = function write(normalizeCss, newData, image) {
    var oldData = read(normalizeCss, image);
    updateProp(image, oldData, newData, 'caption', function (image, _name, _value) {
      return toggleCaption(image);
    });
    updateProp(image, oldData, newData, 'src', updateAttrib);
    updateProp(image, oldData, newData, 'title', updateAttrib);
    updateProp(image, oldData, newData, 'width', setSize('width', normalizeCss));
    updateProp(image, oldData, newData, 'height', setSize('height', normalizeCss));
    updateProp(image, oldData, newData, 'class', updateAttrib);
    updateProp(image, oldData, newData, 'style', normalized(function (image, value) {
      return updateAttrib(image, 'style', value);
    }, normalizeCss));
    updateProp(image, oldData, newData, 'hspace', normalized(setHspace, normalizeCss));
    updateProp(image, oldData, newData, 'vspace', normalized(setVspace, normalizeCss));
    updateProp(image, oldData, newData, 'border', normalized(setBorder, normalizeCss));
    updateProp(image, oldData, newData, 'borderStyle', normalized(setBorderStyle, normalizeCss));
    updateAlt(image, oldData, newData);
  };

  var normalizeCss$1 = function normalizeCss$1(editor, cssText) {
    var css = editor.dom.styles.parse(cssText);
    var mergedCss = mergeMargins(css);
    var compressed = editor.dom.styles.parse(editor.dom.styles.serialize(mergedCss));
    return editor.dom.styles.serialize(compressed);
  };

  var getSelectedImage = function getSelectedImage(editor) {
    var imgElm = editor.selection.getNode();
    var figureElm = editor.dom.getParent(imgElm, 'figure.image');

    if (figureElm) {
      return editor.dom.select('img', figureElm)[0];
    }

    if (imgElm && (imgElm.nodeName !== 'IMG' || isPlaceholderImage(imgElm))) {
      return null;
    }

    return imgElm;
  };

  var splitTextBlock = function splitTextBlock(editor, figure) {
    var dom = editor.dom;
    var textBlockElements = filter(editor.schema.getTextBlockElements(), function (_, parentElm) {
      return !editor.schema.isValidChild(parentElm, 'figure');
    });
    var textBlock = dom.getParent(figure.parentNode, function (node) {
      return hasNonNullableKey(textBlockElements, node.nodeName);
    }, editor.getBody());

    if (textBlock) {
      return dom.split(textBlock, figure);
    } else {
      return figure;
    }
  };

  var readImageDataFromSelection = function readImageDataFromSelection(editor) {
    var image = getSelectedImage(editor);
    return image ? read(function (css) {
      return normalizeCss$1(editor, css);
    }, image) : defaultData();
  };

  var insertImageAtCaret = function insertImageAtCaret(editor, data) {
    var elm = create(function (css) {
      return normalizeCss$1(editor, css);
    }, data);
    editor.dom.setAttrib(elm, 'data-mce-id', '__mcenew');
    editor.focus();
    editor.selection.setContent(elm.outerHTML);
    var insertedElm = editor.dom.select('*[data-mce-id="__mcenew"]')[0];
    editor.dom.setAttrib(insertedElm, 'data-mce-id', null);

    if (isFigure(insertedElm)) {
      var figure = splitTextBlock(editor, insertedElm);
      editor.selection.select(figure);
    } else {
      editor.selection.select(insertedElm);
    }
  };

  var syncSrcAttr = function syncSrcAttr(editor, image) {
    editor.dom.setAttrib(image, 'src', image.getAttribute('src'));
  };

  var deleteImage = function deleteImage(editor, image) {
    if (image) {
      var elm = editor.dom.is(image.parentNode, 'figure.image') ? image.parentNode : image;
      editor.dom.remove(elm);
      editor.focus();
      editor.nodeChanged();

      if (editor.dom.isEmpty(editor.getBody())) {
        editor.setContent('');
        editor.selection.setCursorLocation();
      }
    }
  };

  var writeImageDataToSelection = function writeImageDataToSelection(editor, data) {
    var image = getSelectedImage(editor);
    write(function (css) {
      return normalizeCss$1(editor, css);
    }, data, image);
    syncSrcAttr(editor, image);

    if (isFigure(image.parentNode)) {
      var figure = image.parentNode;
      splitTextBlock(editor, figure);
      editor.selection.select(image.parentNode);
    } else {
      editor.selection.select(image);
      waitLoadImage(editor, data, image);
    }
  };

  var sanitizeImageData = function sanitizeImageData(editor, data) {
    var src = data.src;
    return _objectSpread({}, data, {
      src: isSafeImageUrl(editor, src) ? src : ''
    });
  };

  var insertOrUpdateImage = function insertOrUpdateImage(editor, partialData) {
    var image = getSelectedImage(editor);

    if (image) {
      var selectedImageData = read(function (css) {
        return normalizeCss$1(editor, css);
      }, image);

      var data = _objectSpread({}, selectedImageData, {}, partialData);

      var sanitizedData = sanitizeImageData(editor, data);

      if (data.src) {
        writeImageDataToSelection(editor, sanitizedData);
      } else {
        deleteImage(editor, image);
      }
    } else if (partialData.src) {
      insertImageAtCaret(editor, _objectSpread({}, defaultData(), {}, partialData));
    }
  };

  var deep = function deep(old, nu) {
    var bothObjects = isPlainObject(old) && isPlainObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };

  var baseMerge = function baseMerge(merger) {
    return function () {
      if (arguments.length === 0) {
        throw new Error("Can't merge zero objects");
      }

      var ret = {};

      for (var j = 0; j < arguments.length; j++) {
        var curObject = j < 0 || arguments.length <= j ? undefined : arguments[j];

        for (var key in curObject) {
          if (has(curObject, key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
        }
      }

      return ret;
    };
  };

  var deepMerge = baseMerge(deep);
  var global$1 = tinymce.util.Tools.resolve('tinymce.util.ImageUploader');
  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

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
    global.each(list, function (item) {
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

  var sanitizer = function sanitizer() {
    var extractor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue;
    return function (list) {
      if (list) {
        return Optional.from(list).map(function (list) {
          return sanitizeList(list, extractor);
        });
      } else {
        return Optional.none();
      }
    };
  };

  var sanitize = function sanitize(list) {
    return sanitizer(getValue)(list);
  };

  var isGroup = function isGroup(item) {
    return has(item, 'items');
  };

  var findEntryDelegate = function findEntryDelegate(list, value) {
    return findMap(list, function (item) {
      if (isGroup(item)) {
        return findEntryDelegate(item.items, value);
      } else if (item.value === value) {
        return Optional.some(item);
      } else {
        return Optional.none();
      }
    });
  };

  var findEntry = function findEntry(optList, value) {
    return optList.bind(function (list) {
      return findEntryDelegate(list, value);
    });
  };

  var ListUtils = {
    sanitizer: sanitizer,
    sanitize: sanitize,
    findEntry: findEntry
  };

  var makeTab$2 = function makeTab$2(_info) {
    return {
      title: 'Advanced',
      name: 'advanced',
      items: [{
        type: 'grid',
        columns: 2,
        items: [{
          type: 'input',
          label: 'Vertical space',
          name: 'vspace',
          inputMode: 'numeric'
        }, {
          type: 'input',
          label: 'Horizontal space',
          name: 'hspace',
          inputMode: 'numeric'
        }, {
          type: 'input',
          label: 'Border width',
          name: 'border',
          inputMode: 'numeric'
        }, {
          type: 'listbox',
          name: 'borderstyle',
          label: 'Border style',
          items: [{
            text: 'Select...',
            value: ''
          }, {
            text: 'Solid',
            value: 'solid'
          }, {
            text: 'Dotted',
            value: 'dotted'
          }, {
            text: 'Dashed',
            value: 'dashed'
          }, {
            text: 'Double',
            value: 'double'
          }, {
            text: 'Groove',
            value: 'groove'
          }, {
            text: 'Ridge',
            value: 'ridge'
          }, {
            text: 'Inset',
            value: 'inset'
          }, {
            text: 'Outset',
            value: 'outset'
          }, {
            text: 'None',
            value: 'none'
          }, {
            text: 'Hidden',
            value: 'hidden'
          }]
        }]
      }]
    };
  };

  var AdvTab = {
    makeTab: makeTab$2
  };

  var collect = function collect(editor) {
    var urlListSanitizer = ListUtils.sanitizer(function (item) {
      return editor.convertURL(item.value || item.url, 'src');
    });
    var futureImageList = new Promise(function (completer) {
      createImageList(editor, function (imageList) {
        completer(urlListSanitizer(imageList).map(function (items) {
          return flatten([[{
            text: 'None',
            value: ''
          }], items]);
        }));
      });
    });
    var classList = ListUtils.sanitize(getClassList(editor));
    var hasAdvTab$1 = hasAdvTab(editor);
    var hasUploadTab$1 = hasUploadTab(editor);
    var hasUploadUrl$1 = hasUploadUrl(editor);
    var hasUploadHandler$1 = hasUploadHandler(editor);
    var image = readImageDataFromSelection(editor);
    var hasDescription$1 = hasDescription(editor);
    var hasImageTitle$1 = hasImageTitle(editor);
    var hasDimensions$1 = hasDimensions(editor);
    var hasImageCaption$1 = hasImageCaption(editor);
    var hasAccessibilityOptions = showAccessibilityOptions(editor);
    var automaticUploads = isAutomaticUploadsEnabled(editor);
    var prependURL = Optional.some(getPrependUrl(editor)).filter(function (preUrl) {
      return isString(preUrl) && preUrl.length > 0;
    });
    return futureImageList.then(function (imageList) {
      return {
        image: image,
        imageList: imageList,
        classList: classList,
        hasAdvTab: hasAdvTab$1,
        hasUploadTab: hasUploadTab$1,
        hasUploadUrl: hasUploadUrl$1,
        hasUploadHandler: hasUploadHandler$1,
        hasDescription: hasDescription$1,
        hasImageTitle: hasImageTitle$1,
        hasDimensions: hasDimensions$1,
        hasImageCaption: hasImageCaption$1,
        prependURL: prependURL,
        hasAccessibilityOptions: hasAccessibilityOptions,
        automaticUploads: automaticUploads
      };
    });
  };

  var makeItems = function makeItems(info) {
    var imageUrl = {
      name: 'src',
      type: 'urlinput',
      filetype: 'image',
      label: 'Source'
    };
    var imageList = info.imageList.map(function (items) {
      return {
        name: 'images',
        type: 'listbox',
        label: 'Image list',
        items: items
      };
    });
    var imageDescription = {
      name: 'alt',
      type: 'input',
      label: 'Alternative description',
      enabled: !(info.hasAccessibilityOptions && info.image.isDecorative)
    };
    var imageTitle = {
      name: 'title',
      type: 'input',
      label: 'Image title'
    };
    var imageDimensions = {
      name: 'dimensions',
      type: 'sizeinput'
    };
    var isDecorative = {
      type: 'label',
      label: 'Accessibility',
      items: [{
        name: 'isDecorative',
        type: 'checkbox',
        label: 'Image is decorative'
      }]
    };
    var classList = info.classList.map(function (items) {
      return {
        name: 'classes',
        type: 'listbox',
        label: 'Class',
        items: items
      };
    });
    var caption = {
      type: 'label',
      label: 'Caption',
      items: [{
        type: 'checkbox',
        name: 'caption',
        label: 'Show caption'
      }]
    };

    var getDialogContainerType = function getDialogContainerType(useColumns) {
      return useColumns ? {
        type: 'grid',
        columns: 2
      } : {
        type: 'panel'
      };
    };

    return flatten([[imageUrl], imageList.toArray(), info.hasAccessibilityOptions && info.hasDescription ? [isDecorative] : [], info.hasDescription ? [imageDescription] : [], info.hasImageTitle ? [imageTitle] : [], info.hasDimensions ? [imageDimensions] : [], [_objectSpread({}, getDialogContainerType(info.classList.isSome() && info.hasImageCaption), {
      items: flatten([classList.toArray(), info.hasImageCaption ? [caption] : []])
    })]]);
  };

  var makeTab$1 = function makeTab$1(info) {
    return {
      title: 'General',
      name: 'general',
      items: makeItems(info)
    };
  };

  var MainTab = {
    makeTab: makeTab$1,
    makeItems: makeItems
  };

  var makeTab = function makeTab(_info) {
    var items = [{
      type: 'dropzone',
      name: 'fileinput'
    }];
    return {
      title: 'Upload',
      name: 'upload',
      items: items
    };
  };

  var UploadTab = {
    makeTab: makeTab
  };

  var createState = function createState(info) {
    return {
      prevImage: ListUtils.findEntry(info.imageList, info.image.src),
      prevAlt: info.image.alt,
      open: true
    };
  };

  var fromImageData = function fromImageData(image) {
    return {
      src: {
        value: image.src,
        meta: {}
      },
      images: image.src,
      alt: image.alt,
      title: image.title,
      dimensions: {
        width: image.width,
        height: image.height
      },
      classes: image["class"],
      caption: image.caption,
      style: image.style,
      vspace: image.vspace,
      border: image.border,
      hspace: image.hspace,
      borderstyle: image.borderStyle,
      fileinput: [],
      isDecorative: image.isDecorative
    };
  };

  var toImageData = function toImageData(data, removeEmptyAlt) {
    return {
      src: data.src.value,
      alt: data.alt.length === 0 && removeEmptyAlt ? null : data.alt,
      title: data.title,
      width: data.dimensions.width,
      height: data.dimensions.height,
      "class": data.classes,
      style: data.style,
      caption: data.caption,
      hspace: data.hspace,
      vspace: data.vspace,
      border: data.border,
      borderStyle: data.borderstyle,
      isDecorative: data.isDecorative
    };
  };

  var addPrependUrl2 = function addPrependUrl2(info, srcURL) {
    if (!/^(?:[a-zA-Z]+:)?\/\//.test(srcURL)) {
      return info.prependURL.bind(function (prependUrl) {
        if (srcURL.substring(0, prependUrl.length) !== prependUrl) {
          return Optional.some(prependUrl + srcURL);
        }

        return Optional.none();
      });
    }

    return Optional.none();
  };

  var addPrependUrl = function addPrependUrl(info, api) {
    var data = api.getData();
    addPrependUrl2(info, data.src.value).each(function (srcURL) {
      api.setData({
        src: {
          value: srcURL,
          meta: data.src.meta
        }
      });
    });
  };

  var formFillFromMeta2 = function formFillFromMeta2(info, data, meta) {
    if (info.hasDescription && isString(meta.alt)) {
      data.alt = meta.alt;
    }

    if (info.hasAccessibilityOptions) {
      data.isDecorative = meta.isDecorative || data.isDecorative || false;
    }

    if (info.hasImageTitle && isString(meta.title)) {
      data.title = meta.title;
    }

    if (info.hasDimensions) {
      if (isString(meta.width)) {
        data.dimensions.width = meta.width;
      }

      if (isString(meta.height)) {
        data.dimensions.height = meta.height;
      }
    }

    if (isString(meta["class"])) {
      ListUtils.findEntry(info.classList, meta["class"]).each(function (entry) {
        data.classes = entry.value;
      });
    }

    if (info.hasImageCaption) {
      if (isBoolean(meta.caption)) {
        data.caption = meta.caption;
      }
    }

    if (info.hasAdvTab) {
      if (isString(meta.style)) {
        data.style = meta.style;
      }

      if (isString(meta.vspace)) {
        data.vspace = meta.vspace;
      }

      if (isString(meta.border)) {
        data.border = meta.border;
      }

      if (isString(meta.hspace)) {
        data.hspace = meta.hspace;
      }

      if (isString(meta.borderstyle)) {
        data.borderstyle = meta.borderstyle;
      }
    }
  };

  var formFillFromMeta = function formFillFromMeta(info, api) {
    var data = api.getData();
    var meta = data.src.meta;

    if (meta !== undefined) {
      var newData = deepMerge({}, data);
      formFillFromMeta2(info, newData, meta);
      api.setData(newData);
    }
  };

  var calculateImageSize = function calculateImageSize(helpers, info, state, api) {
    var data = api.getData();
    var url = data.src.value;
    var meta = data.src.meta || {};

    if (!meta.width && !meta.height && info.hasDimensions) {
      if (isNotEmpty(url)) {
        helpers.imageSize(url).then(function (size) {
          if (state.open) {
            api.setData({
              dimensions: size
            });
          }
        })["catch"](function (e) {
          return console.error(e);
        });
      } else {
        api.setData({
          dimensions: {
            width: '',
            height: ''
          }
        });
      }
    }
  };

  var updateImagesDropdown = function updateImagesDropdown(info, state, api) {
    var data = api.getData();
    var image = ListUtils.findEntry(info.imageList, data.src.value);
    state.prevImage = image;
    api.setData({
      images: image.map(function (entry) {
        return entry.value;
      }).getOr('')
    });
  };

  var changeSrc = function changeSrc(helpers, info, state, api) {
    addPrependUrl(info, api);
    formFillFromMeta(info, api);
    calculateImageSize(helpers, info, state, api);
    updateImagesDropdown(info, state, api);
  };

  var changeImages = function changeImages(helpers, info, state, api) {
    var data = api.getData();
    var image = ListUtils.findEntry(info.imageList, data.images);
    image.each(function (img) {
      var updateAlt = data.alt === '' || state.prevImage.map(function (image) {
        return image.text === data.alt;
      }).getOr(false);

      if (updateAlt) {
        if (img.value === '') {
          api.setData({
            src: img,
            alt: state.prevAlt
          });
        } else {
          api.setData({
            src: img,
            alt: img.text
          });
        }
      } else {
        api.setData({
          src: img
        });
      }
    });
    state.prevImage = image;
    changeSrc(helpers, info, state, api);
  };

  var changeFileInput = function changeFileInput(helpers, info, state, api) {
    var data = api.getData();
    api.block('Uploading image');
    head(data.fileinput).fold(function () {
      api.unblock();
    }, function (file) {
      var blobUri = URL.createObjectURL(file);

      var finalize = function finalize() {
        api.unblock();
        URL.revokeObjectURL(blobUri);
      };

      var updateSrcAndSwitchTab = function updateSrcAndSwitchTab(url) {
        api.setData({
          src: {
            value: url,
            meta: {}
          }
        });
        api.showTab('general');
        changeSrc(helpers, info, state, api);
      };

      blobToDataUri(file).then(function (dataUrl) {
        var blobInfo = helpers.createBlobCache(file, blobUri, dataUrl);

        if (info.automaticUploads) {
          helpers.uploadImage(blobInfo).then(function (result) {
            updateSrcAndSwitchTab(result.url);
            finalize();
          })["catch"](function (err) {
            finalize();
            helpers.alertErr(err);
          });
        } else {
          helpers.addToBlobCache(blobInfo);
          updateSrcAndSwitchTab(blobInfo.blobUri());
          api.unblock();
        }
      });
    });
  };

  var changeHandler = function changeHandler(helpers, info, state) {
    return function (api, evt) {
      if (evt.name === 'src') {
        changeSrc(helpers, info, state, api);
      } else if (evt.name === 'images') {
        changeImages(helpers, info, state, api);
      } else if (evt.name === 'alt') {
        state.prevAlt = api.getData().alt;
      } else if (evt.name === 'fileinput') {
        changeFileInput(helpers, info, state, api);
      } else if (evt.name === 'isDecorative') {
        api.setEnabled('alt', !api.getData().isDecorative);
      }
    };
  };

  var closeHandler = function closeHandler(state) {
    return function () {
      state.open = false;
    };
  };

  var makeDialogBody = function makeDialogBody(info) {
    if (info.hasAdvTab || info.hasUploadUrl || info.hasUploadHandler) {
      var tabPanel = {
        type: 'tabpanel',
        tabs: flatten([[MainTab.makeTab(info)], info.hasAdvTab ? [AdvTab.makeTab(info)] : [], info.hasUploadTab && (info.hasUploadUrl || info.hasUploadHandler) ? [UploadTab.makeTab(info)] : []])
      };
      return tabPanel;
    } else {
      var panel = {
        type: 'panel',
        items: MainTab.makeItems(info)
      };
      return panel;
    }
  };

  var submitHandler = function submitHandler(editor, info, helpers) {
    return function (api) {
      var data = deepMerge(fromImageData(info.image), api.getData());

      var finalData = _objectSpread({}, data, {
        style: getStyleValue(helpers.normalizeCss, toImageData(data, false))
      });

      editor.execCommand('mceUpdateImage', false, toImageData(finalData, info.hasAccessibilityOptions));
      editor.editorUpload.uploadImagesAuto();
      api.close();
    };
  };

  var imageSize = function imageSize(editor) {
    return function (url) {
      if (!isSafeImageUrl(editor, url)) {
        return Promise.resolve({
          width: '',
          height: ''
        });
      } else {
        return getImageSize(editor.documentBaseURI.toAbsolute(url)).then(function (dimensions) {
          return {
            width: String(dimensions.width),
            height: String(dimensions.height)
          };
        });
      }
    };
  };

  var createBlobCache = function createBlobCache(editor) {
    return function (file, blobUri, dataUrl) {
      return editor.editorUpload.blobCache.create({
        blob: file,
        blobUri: blobUri,
        name: file.name ? file.name.replace(/\.[^\.]+$/, '') : null,
        filename: file.name,
        base64: dataUrl.split(',')[1]
      });
    };
  };

  var addToBlobCache = function addToBlobCache(editor) {
    return function (blobInfo) {
      editor.editorUpload.blobCache.add(blobInfo);
    };
  };

  var alertErr = function alertErr(editor) {
    return function (message) {
      editor.windowManager.alert(message);
    };
  };

  var normalizeCss = function normalizeCss(editor) {
    return function (cssText) {
      return normalizeCss$1(editor, cssText);
    };
  };

  var parseStyle = function parseStyle(editor) {
    return function (cssText) {
      return editor.dom.parseStyle(cssText);
    };
  };

  var serializeStyle = function serializeStyle(editor) {
    return function (stylesArg, name) {
      return editor.dom.serializeStyle(stylesArg, name);
    };
  };

  var uploadImage = function uploadImage(editor) {
    return function (blobInfo) {
      return global$1(editor).upload([blobInfo], false).then(function (results) {
        if (results.length === 0) {
          return Promise.reject('Failed to upload image');
        } else if (results[0].status === false) {
          return Promise.reject(results[0].error.message);
        } else {
          return results[0];
        }
      });
    };
  };

  var Dialog = function Dialog(editor) {
    var helpers = {
      imageSize: imageSize(editor),
      addToBlobCache: addToBlobCache(editor),
      createBlobCache: createBlobCache(editor),
      alertErr: alertErr(editor),
      normalizeCss: normalizeCss(editor),
      parseStyle: parseStyle(editor),
      serializeStyle: serializeStyle(editor),
      uploadImage: uploadImage(editor)
    };

    var open = function open() {
      collect(editor).then(function (info) {
        var state = createState(info);
        return {
          title: 'Insert/Edit Image',
          size: 'normal',
          body: makeDialogBody(info),
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
          initialData: fromImageData(info.image),
          onSubmit: submitHandler(editor, info, helpers),
          onChange: changeHandler(helpers, info, state),
          onClose: closeHandler(state)
        };
      }).then(editor.windowManager.open);
    };

    return {
      open: open
    };
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mceImage', Dialog(editor).open);
    editor.addCommand('mceUpdateImage', function (_ui, data) {
      editor.undoManager.transact(function () {
        return insertOrUpdateImage(editor, data);
      });
    });
  };

  var hasImageClass = function hasImageClass(node) {
    var className = node.attr('class');
    return className && /\bimage\b/.test(className);
  };

  var toggleContentEditableState = function toggleContentEditableState(state) {
    return function (nodes) {
      var i = nodes.length;

      var toggleContentEditable = function toggleContentEditable(node) {
        node.attr('contenteditable', state ? 'true' : null);
      };

      while (i--) {
        var node = nodes[i];

        if (hasImageClass(node)) {
          node.attr('contenteditable', state ? 'false' : null);
          global.each(node.getAll('figcaption'), toggleContentEditable);
        }
      }
    };
  };

  var setup = function setup(editor) {
    editor.on('PreInit', function () {
      editor.parser.addNodeFilter('figure', toggleContentEditableState(true));
      editor.serializer.addNodeFilter('figure', toggleContentEditableState(false));
    });
  };

  var register = function register(editor) {
    editor.ui.registry.addToggleButton('image', {
      icon: 'image',
      tooltip: 'Insert/edit image',
      onAction: Dialog(editor).open,
      onSetup: function onSetup(buttonApi) {
        buttonApi.setActive(isNonNullable(getSelectedImage(editor)));
        return editor.selection.selectorChangedWithUnbind('img:not([data-mce-object]):not([data-mce-placeholder]),figure.image', buttonApi.setActive).unbind;
      }
    });
    editor.ui.registry.addMenuItem('image', {
      icon: 'image',
      text: 'Image...',
      onAction: Dialog(editor).open
    });
    editor.ui.registry.addContextMenu('image', {
      update: function update(element) {
        return isFigure(element) || isImage(element) && !isPlaceholderImage(element) ? ['image'] : [];
      }
    });
  };

  var Plugin = function Plugin() {
    global$4.add('image', function (editor) {
      register$2(editor);
      setup(editor);
      register(editor);
      register$1(editor);
    });
  };

  Plugin();
})();