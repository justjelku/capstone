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

  var isType = function isType(type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };

  var isString = isType('string');
  var isObject = isType('object');
  var isArray = isType('array');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
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
  var nativePush = Array.prototype.push;

  var each$1 = function each$1(xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i);
    }
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

  var get$1 = function get$1(obj, key) {
    return has(obj, key) ? Optional.from(obj[key]) : Optional.none();
  };

  var has = function has(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('audio_template_callback', {
      processor: 'function'
    });
    registerOption('video_template_callback', {
      processor: 'function'
    });
    registerOption('iframe_template_callback', {
      processor: 'function'
    });
    registerOption('media_live_embeds', {
      processor: 'boolean',
      "default": true
    });
    registerOption('media_filter_html', {
      processor: 'boolean',
      "default": true
    });
    registerOption('media_url_resolver', {
      processor: 'function'
    });
    registerOption('media_alt_source', {
      processor: 'boolean',
      "default": true
    });
    registerOption('media_poster', {
      processor: 'boolean',
      "default": true
    });
    registerOption('media_dimensions', {
      processor: 'boolean',
      "default": true
    });
  };

  var getAudioTemplateCallback = option('audio_template_callback');
  var getVideoTemplateCallback = option('video_template_callback');
  var getIframeTemplateCallback = option('iframe_template_callback');
  var hasLiveEmbeds = option('media_live_embeds');
  var shouldFilterHtml = option('media_filter_html');
  var getUrlResolver = option('media_url_resolver');
  var hasAltSource = option('media_alt_source');
  var hasPoster = option('media_poster');
  var hasDimensions = option('media_dimensions');
  var global$5 = tinymce.util.Tools.resolve('tinymce.util.Tools');
  var global$4 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');
  var global$3 = tinymce.util.Tools.resolve('tinymce.html.DomParser');
  var DOM$1 = global$4.DOM;

  var trimPx = function trimPx(value) {
    return value.replace(/px$/, '');
  };

  var getEphoxEmbedData = function getEphoxEmbedData(node) {
    var style = node.attr('style');
    var styles = style ? DOM$1.parseStyle(style) : {};
    return {
      type: 'ephox-embed-iri',
      source: node.attr('data-ephox-embed-iri'),
      altsource: '',
      poster: '',
      width: get$1(styles, 'max-width').map(trimPx).getOr(''),
      height: get$1(styles, 'max-height').map(trimPx).getOr('')
    };
  };

  var htmlToData = function htmlToData(html, schema) {
    var data = {};
    var parser = global$3({
      validate: false,
      forced_root_block: false
    }, schema);
    var rootNode = parser.parse(html);

    for (var node = rootNode; node; node = node.walk()) {
      if (node.type === 1) {
        var name = node.name;

        if (node.attr('data-ephox-embed-iri')) {
          data = getEphoxEmbedData(node);
          break;
        } else {
          if (!data.source && name === 'param') {
            data.source = node.attr('movie');
          }

          if (name === 'iframe' || name === 'object' || name === 'embed' || name === 'video' || name === 'audio') {
            if (!data.type) {
              data.type = name;
            }

            data = global$5.extend(node.attributes.map, data);
          }

          if (name === 'script') {
            data = {
              type: 'script',
              source: node.attr('src')
            };
          }

          if (name === 'source') {
            if (!data.source) {
              data.source = node.attr('src');
            } else if (!data.altsource) {
              data.altsource = node.attr('src');
            }
          }

          if (name === 'img' && !data.poster) {
            data.poster = node.attr('src');
          }
        }
      }
    }

    data.source = data.source || data.src || data.data;
    data.altsource = data.altsource || '';
    data.poster = data.poster || '';
    return data;
  };

  var guess = function guess(url) {
    var mimes = {
      mp3: 'audio/mpeg',
      m4a: 'audio/x-m4a',
      wav: 'audio/wav',
      mp4: 'video/mp4',
      webm: 'video/webm',
      ogg: 'video/ogg',
      swf: 'application/x-shockwave-flash'
    };
    var fileEnd = url.toLowerCase().split('.').pop();
    var mime = mimes[fileEnd];
    return mime ? mime : '';
  };

  var global$2 = tinymce.util.Tools.resolve('tinymce.html.Node');
  var global$1 = tinymce.util.Tools.resolve('tinymce.html.Serializer');

  var Parser = function Parser(schema) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return global$3(_objectSpread({
      forced_root_block: false,
      validate: false,
      allow_conditional_comments: true
    }, settings), schema);
  };

  var DOM = global$4.DOM;

  var addPx = function addPx(value) {
    return /^[0-9.]+$/.test(value) ? value + 'px' : value;
  };

  var updateEphoxEmbed = function updateEphoxEmbed(data, node) {
    var style = node.attr('style');
    var styleMap = style ? DOM.parseStyle(style) : {};
    styleMap['max-width'] = addPx(data.width);
    styleMap['max-height'] = addPx(data.height);
    node.attr('style', DOM.serializeStyle(styleMap));
  };

  var sources = ['source', 'altsource'];

  var updateHtml = function updateHtml(html, data, updateAll, schema) {
    var numSources = 0;
    var sourceCount = 0;
    var parser = Parser(schema);
    parser.addNodeFilter('source', function (nodes) {
      return numSources = nodes.length;
    });
    var rootNode = parser.parse(html);

    for (var node = rootNode; node; node = node.walk()) {
      if (node.type === 1) {
        var name = node.name;

        if (node.attr('data-ephox-embed-iri')) {
          updateEphoxEmbed(data, node);
          break;
        } else {
          switch (name) {
            case 'video':
            case 'object':
            case 'embed':
            case 'img':
            case 'iframe':
              if (data.height !== undefined && data.width !== undefined) {
                node.attr('width', data.width);
                node.attr('height', data.height);
              }

              break;
          }

          if (updateAll) {
            switch (name) {
              case 'video':
                node.attr('poster', data.poster);
                node.attr('src', null);

                for (var index = numSources; index < 2; index++) {
                  if (data[sources[index]]) {
                    var source = new global$2('source', 1);
                    source.attr('src', data[sources[index]]);
                    source.attr('type', data[sources[index] + 'mime'] || null);
                    node.append(source);
                  }
                }

                break;

              case 'iframe':
                node.attr('src', data.source);
                break;

              case 'object':
                var hasImage = node.getAll('img').length > 0;

                if (data.poster && !hasImage) {
                  node.attr('src', data.poster);
                  var img = new global$2('img', 1);
                  img.attr('src', data.poster);
                  img.attr('width', data.width);
                  img.attr('height', data.height);
                  node.append(img);
                }

                break;

              case 'source':
                if (sourceCount < 2) {
                  node.attr('src', data[sources[sourceCount]]);
                  node.attr('type', data[sources[sourceCount] + 'mime'] || null);

                  if (!data[sources[sourceCount]]) {
                    node.remove();
                    continue;
                  }
                }

                sourceCount++;
                break;

              case 'img':
                if (!data.poster) {
                  node.remove();
                }

                break;
            }
          }
        }
      }
    }

    return global$1({}, schema).serialize(rootNode);
  };

  var urlPatterns = [{
    regex: /youtu\.be\/([\w\-_\?&=.]+)/i,
    type: 'iframe',
    w: 560,
    h: 314,
    url: 'www.youtube.com/embed/$1',
    allowFullscreen: true
  }, {
    regex: /youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,
    type: 'iframe',
    w: 560,
    h: 314,
    url: 'www.youtube.com/embed/$2?$4',
    allowFullscreen: true
  }, {
    regex: /youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,
    type: 'iframe',
    w: 560,
    h: 314,
    url: 'www.youtube.com/embed/$1',
    allowFullscreen: true
  }, {
    regex: /vimeo\.com\/([0-9]+)/,
    type: 'iframe',
    w: 425,
    h: 350,
    url: 'player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc',
    allowFullscreen: true
  }, {
    regex: /vimeo\.com\/(.*)\/([0-9]+)/,
    type: 'iframe',
    w: 425,
    h: 350,
    url: 'player.vimeo.com/video/$2?title=0&amp;byline=0',
    allowFullscreen: true
  }, {
    regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
    type: 'iframe',
    w: 425,
    h: 350,
    url: 'maps.google.com/maps/ms?msid=$2&output=embed"',
    allowFullscreen: false
  }, {
    regex: /dailymotion\.com\/video\/([^_]+)/,
    type: 'iframe',
    w: 480,
    h: 270,
    url: 'www.dailymotion.com/embed/video/$1',
    allowFullscreen: true
  }, {
    regex: /dai\.ly\/([^_]+)/,
    type: 'iframe',
    w: 480,
    h: 270,
    url: 'www.dailymotion.com/embed/video/$1',
    allowFullscreen: true
  }];

  var getProtocol = function getProtocol(url) {
    var protocolMatches = url.match(/^(https?:\/\/|www\.)(.+)$/i);

    if (protocolMatches && protocolMatches.length > 1) {
      return protocolMatches[1] === 'www.' ? 'https://' : protocolMatches[1];
    } else {
      return 'https://';
    }
  };

  var getUrl = function getUrl(pattern, url) {
    var protocol = getProtocol(url);
    var match = pattern.regex.exec(url);
    var newUrl = protocol + pattern.url;

    var _loop = function _loop(i) {
      newUrl = newUrl.replace('$' + i, function () {
        return match[i] ? match[i] : '';
      });
    };

    for (var i = 0; i < match.length; i++) {
      _loop(i);
    }

    return newUrl.replace(/\?$/, '');
  };

  var matchPattern = function matchPattern(url) {
    var patterns = urlPatterns.filter(function (pattern) {
      return pattern.regex.test(url);
    });

    if (patterns.length > 0) {
      return global$5.extend({}, patterns[0], {
        url: getUrl(patterns[0], url)
      });
    } else {
      return null;
    }
  };

  var getIframeHtml = function getIframeHtml(data, iframeTemplateCallback) {
    if (iframeTemplateCallback) {
      return iframeTemplateCallback(data);
    } else {
      var allowFullscreen = data.allowfullscreen ? ' allowFullscreen="1"' : '';
      return '<iframe src="' + data.source + '" width="' + data.width + '" height="' + data.height + '"' + allowFullscreen + '></iframe>';
    }
  };

  var getFlashHtml = function getFlashHtml(data) {
    var html = '<object data="' + data.source + '" width="' + data.width + '" height="' + data.height + '" type="application/x-shockwave-flash">';

    if (data.poster) {
      html += '<img src="' + data.poster + '" width="' + data.width + '" height="' + data.height + '" />';
    }

    html += '</object>';
    return html;
  };

  var getAudioHtml = function getAudioHtml(data, audioTemplateCallback) {
    if (audioTemplateCallback) {
      return audioTemplateCallback(data);
    } else {
      return '<audio controls="controls" src="' + data.source + '">' + (data.altsource ? '\n<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</audio>';
    }
  };

  var getVideoHtml = function getVideoHtml(data, videoTemplateCallback) {
    if (videoTemplateCallback) {
      return videoTemplateCallback(data);
    } else {
      return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' />\n' + (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</video>';
    }
  };

  var getScriptHtml = function getScriptHtml(data) {
    return '<script src="' + data.source + '"></script>';
  };

  var dataToHtml = function dataToHtml(editor, dataIn) {
    var data = global$5.extend({}, dataIn);

    if (!data.source) {
      global$5.extend(data, htmlToData(data.embed, editor.schema));

      if (!data.source) {
        return '';
      }
    }

    if (!data.altsource) {
      data.altsource = '';
    }

    if (!data.poster) {
      data.poster = '';
    }

    data.source = editor.convertURL(data.source, 'source');
    data.altsource = editor.convertURL(data.altsource, 'source');
    data.sourcemime = guess(data.source);
    data.altsourcemime = guess(data.altsource);
    data.poster = editor.convertURL(data.poster, 'poster');
    var pattern = matchPattern(data.source);

    if (pattern) {
      data.source = pattern.url;
      data.type = pattern.type;
      data.allowfullscreen = pattern.allowFullscreen;
      data.width = data.width || String(pattern.w);
      data.height = data.height || String(pattern.h);
    }

    if (data.embed) {
      return updateHtml(data.embed, data, true, editor.schema);
    } else {
      var audioTemplateCallback = getAudioTemplateCallback(editor);
      var videoTemplateCallback = getVideoTemplateCallback(editor);
      var iframeTemplateCallback = getIframeTemplateCallback(editor);
      data.width = data.width || '300';
      data.height = data.height || '150';
      global$5.each(data, function (value, key) {
        data[key] = editor.dom.encode('' + value);
      });

      if (data.type === 'iframe') {
        return getIframeHtml(data, iframeTemplateCallback);
      } else if (data.sourcemime === 'application/x-shockwave-flash') {
        return getFlashHtml(data);
      } else if (data.sourcemime.indexOf('audio') !== -1) {
        return getAudioHtml(data, audioTemplateCallback);
      } else if (data.type === 'script') {
        return getScriptHtml(data);
      } else {
        return getVideoHtml(data, videoTemplateCallback);
      }
    }
  };

  var isMediaElement = function isMediaElement(element) {
    return element.hasAttribute('data-mce-object') || element.hasAttribute('data-ephox-embed-iri');
  };

  var setup$2 = function setup$2(editor) {
    editor.on('click keyup touchend', function () {
      var selectedNode = editor.selection.getNode();

      if (selectedNode && editor.dom.hasClass(selectedNode, 'mce-preview-object')) {
        if (editor.dom.getAttrib(selectedNode, 'data-mce-selected')) {
          selectedNode.setAttribute('data-mce-selected', '2');
        }
      }
    });
    editor.on('ObjectSelected', function (e) {
      var objectType = e.target.getAttribute('data-mce-object');

      if (objectType === 'script') {
        e.preventDefault();
      }
    });
    editor.on('ObjectResized', function (e) {
      var target = e.target;

      if (target.getAttribute('data-mce-object')) {
        var html = target.getAttribute('data-mce-html');

        if (html) {
          html = unescape(html);
          target.setAttribute('data-mce-html', escape(updateHtml(html, {
            width: String(e.width),
            height: String(e.height)
          }, false, editor.schema)));
        }
      }
    });
  };

  var cache = {};

  var embedPromise = function embedPromise(data, dataToHtml, handler) {
    return new Promise(function (res, rej) {
      var wrappedResolve = function wrappedResolve(response) {
        if (response.html) {
          cache[data.source] = response;
        }

        return res({
          url: data.source,
          html: response.html ? response.html : dataToHtml(data)
        });
      };

      if (cache[data.source]) {
        wrappedResolve(cache[data.source]);
      } else {
        handler({
          url: data.source
        }, wrappedResolve, rej);
      }
    });
  };

  var defaultPromise = function defaultPromise(data, dataToHtml) {
    return Promise.resolve({
      html: dataToHtml(data),
      url: data.source
    });
  };

  var loadedData = function loadedData(editor) {
    return function (data) {
      return dataToHtml(editor, data);
    };
  };

  var getEmbedHtml = function getEmbedHtml(editor, data) {
    var embedHandler = getUrlResolver(editor);
    return embedHandler ? embedPromise(data, loadedData(editor), embedHandler) : defaultPromise(data, loadedData(editor));
  };

  var isCached = function isCached(url) {
    return has(cache, url);
  };

  var extractMeta = function extractMeta(sourceInput, data) {
    return get$1(data, sourceInput).bind(function (mainData) {
      return get$1(mainData, 'meta');
    });
  };

  var getValue = function getValue(data, metaData, sourceInput) {
    return function (prop) {
      var getFromData = function getFromData() {
        return get$1(data, prop);
      };

      var getFromMetaData = function getFromMetaData() {
        return get$1(metaData, prop);
      };

      var getNonEmptyValue = function getNonEmptyValue(c) {
        return get$1(c, 'value').bind(function (v) {
          return v.length > 0 ? Optional.some(v) : Optional.none();
        });
      };

      var getFromValueFirst = function getFromValueFirst() {
        return getFromData().bind(function (child) {
          return isObject(child) ? getNonEmptyValue(child).orThunk(getFromMetaData) : getFromMetaData().orThunk(function () {
            return Optional.from(child);
          });
        });
      };

      var getFromMetaFirst = function getFromMetaFirst() {
        return getFromMetaData().orThunk(function () {
          return getFromData().bind(function (child) {
            return isObject(child) ? getNonEmptyValue(child) : Optional.from(child);
          });
        });
      };

      return _defineProperty({}, prop, (prop === sourceInput ? getFromValueFirst() : getFromMetaFirst()).getOr(''));
    };
  };

  var getDimensions = function getDimensions(data, metaData) {
    var dimensions = {};
    get$1(data, 'dimensions').each(function (dims) {
      each$1(['width', 'height'], function (prop) {
        get$1(metaData, prop).orThunk(function () {
          return get$1(dims, prop);
        }).each(function (value) {
          return dimensions[prop] = value;
        });
      });
    });
    return dimensions;
  };

  var unwrap = function unwrap(data, sourceInput) {
    var metaData = sourceInput ? extractMeta(sourceInput, data).getOr({}) : {};
    var get = getValue(data, metaData, sourceInput);
    return _objectSpread({}, get('source'), {}, get('altsource'), {}, get('poster'), {}, get('embed'), {}, getDimensions(data, metaData));
  };

  var wrap = function wrap(data) {
    var wrapped = _objectSpread({}, data, {
      source: {
        value: get$1(data, 'source').getOr('')
      },
      altsource: {
        value: get$1(data, 'altsource').getOr('')
      },
      poster: {
        value: get$1(data, 'poster').getOr('')
      }
    });

    each$1(['width', 'height'], function (prop) {
      get$1(data, prop).each(function (value) {
        var dimensions = wrapped.dimensions || {};
        dimensions[prop] = value;
        wrapped.dimensions = dimensions;
      });
    });
    return wrapped;
  };

  var handleError = function handleError(editor) {
    return function (error) {
      var errorMessage = error && error.msg ? 'Media embed handler error: ' + error.msg : 'Media embed handler threw unknown error.';
      editor.notificationManager.open({
        type: 'error',
        text: errorMessage
      });
    };
  };

  var getEditorData = function getEditorData(editor) {
    var element = editor.selection.getNode();
    var snippet = isMediaElement(element) ? editor.serializer.serialize(element, {
      selection: true
    }) : '';
    return _objectSpread({
      embed: snippet
    }, htmlToData(snippet, editor.schema));
  };

  var addEmbedHtml = function addEmbedHtml(api, editor) {
    return function (response) {
      if (isString(response.url) && response.url.trim().length > 0) {
        var html = response.html;
        var snippetData = htmlToData(html, editor.schema);

        var nuData = _objectSpread({}, snippetData, {
          source: response.url,
          embed: html
        });

        api.setData(wrap(nuData));
      }
    };
  };

  var selectPlaceholder = function selectPlaceholder(editor, beforeObjects) {
    var afterObjects = editor.dom.select('*[data-mce-object]');

    for (var i = 0; i < beforeObjects.length; i++) {
      for (var y = afterObjects.length - 1; y >= 0; y--) {
        if (beforeObjects[i] === afterObjects[y]) {
          afterObjects.splice(y, 1);
        }
      }
    }

    editor.selection.select(afterObjects[0]);
  };

  var handleInsert = function handleInsert(editor, html) {
    var beforeObjects = editor.dom.select('*[data-mce-object]');
    editor.insertContent(html);
    selectPlaceholder(editor, beforeObjects);
    editor.nodeChanged();
  };

  var submitForm = function submitForm(prevData, newData, editor) {
    newData.embed = updateHtml(newData.embed, newData, false, editor.schema);

    if (newData.embed && (prevData.source === newData.source || isCached(newData.source))) {
      handleInsert(editor, newData.embed);
    } else {
      getEmbedHtml(editor, newData).then(function (response) {
        handleInsert(editor, response.html);
      })["catch"](handleError(editor));
    }
  };

  var showDialog = function showDialog(editor) {
    var editorData = getEditorData(editor);
    var currentData = Cell(editorData);
    var initialData = wrap(editorData);

    var handleSource = function handleSource(prevData, api) {
      var serviceData = unwrap(api.getData(), 'source');

      if (prevData.source !== serviceData.source) {
        addEmbedHtml(win, editor)({
          url: serviceData.source,
          html: ''
        });
        getEmbedHtml(editor, serviceData).then(addEmbedHtml(win, editor))["catch"](handleError(editor));
      }
    };

    var handleEmbed = function handleEmbed(api) {
      var data = unwrap(api.getData());
      var dataFromEmbed = htmlToData(data.embed, editor.schema);
      api.setData(wrap(dataFromEmbed));
    };

    var handleUpdate = function handleUpdate(api, sourceInput) {
      var data = unwrap(api.getData(), sourceInput);
      var embed = dataToHtml(editor, data);
      api.setData(wrap(_objectSpread({}, data, {
        embed: embed
      })));
    };

    var mediaInput = [{
      name: 'source',
      type: 'urlinput',
      filetype: 'media',
      label: 'Source'
    }];
    var sizeInput = !hasDimensions(editor) ? [] : [{
      type: 'sizeinput',
      name: 'dimensions',
      label: 'Constrain proportions',
      constrain: true
    }];
    var generalTab = {
      title: 'General',
      name: 'general',
      items: flatten([mediaInput, sizeInput])
    };
    var embedTextarea = {
      type: 'textarea',
      name: 'embed',
      label: 'Paste your embed code below:'
    };
    var embedTab = {
      title: 'Embed',
      items: [embedTextarea]
    };
    var advancedFormItems = [];

    if (hasAltSource(editor)) {
      advancedFormItems.push({
        name: 'altsource',
        type: 'urlinput',
        filetype: 'media',
        label: 'Alternative source URL'
      });
    }

    if (hasPoster(editor)) {
      advancedFormItems.push({
        name: 'poster',
        type: 'urlinput',
        filetype: 'image',
        label: 'Media poster (Image URL)'
      });
    }

    var advancedTab = {
      title: 'Advanced',
      name: 'advanced',
      items: advancedFormItems
    };
    var tabs = [generalTab, embedTab];

    if (advancedFormItems.length > 0) {
      tabs.push(advancedTab);
    }

    var body = {
      type: 'tabpanel',
      tabs: tabs
    };
    var win = editor.windowManager.open({
      title: 'Insert/Edit Media',
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
      onSubmit: function onSubmit(api) {
        var serviceData = unwrap(api.getData());
        submitForm(currentData.get(), serviceData, editor);
        api.close();
      },
      onChange: function onChange(api, detail) {
        switch (detail.name) {
          case 'source':
            handleSource(currentData.get(), api);
            break;

          case 'embed':
            handleEmbed(api);
            break;

          case 'dimensions':
          case 'altsource':
          case 'poster':
            handleUpdate(api, detail.name);
            break;
        }

        currentData.set(unwrap(api.getData()));
      },
      initialData: initialData
    });
  };

  var get = function get(editor) {
    var showDialog$1 = function showDialog$1() {
      showDialog(editor);
    };

    return {
      showDialog: showDialog$1
    };
  };

  var register$1 = function register$1(editor) {
    var showDialog$1 = function showDialog$1() {
      showDialog(editor);
    };

    editor.addCommand('mceMedia', showDialog$1);
  };

  var checkRange = function checkRange(str, substr, start) {
    return substr === '' || str.length >= substr.length && str.substr(start, start + substr.length) === substr;
  };

  var startsWith = function startsWith(str, prefix) {
    return checkRange(str, prefix, 0);
  };

  var global = tinymce.util.Tools.resolve('tinymce.Env');

  var isLiveEmbedNode = function isLiveEmbedNode(node) {
    var name = node.name;
    return name === 'iframe' || name === 'video' || name === 'audio';
  };

  var getDimension = function getDimension(node, styles, dimension) {
    var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var value = node.attr(dimension);

    if (isNonNullable(value)) {
      return value;
    } else if (!has(styles, dimension)) {
      return defaultValue;
    } else {
      return null;
    }
  };

  var setDimensions = function setDimensions(node, previewNode, styles) {
    var useDefaults = previewNode.name === 'img' || node.name === 'video';
    var defaultWidth = useDefaults ? '300' : null;
    var fallbackHeight = node.name === 'audio' ? '30' : '150';
    var defaultHeight = useDefaults ? fallbackHeight : null;
    previewNode.attr({
      width: getDimension(node, styles, 'width', defaultWidth),
      height: getDimension(node, styles, 'height', defaultHeight)
    });
  };

  var appendNodeContent = function appendNodeContent(editor, nodeName, previewNode, html) {
    var newNode = Parser(editor.schema).parse(html, {
      context: nodeName
    });

    while (newNode.firstChild) {
      previewNode.append(newNode.firstChild);
    }
  };

  var createPlaceholderNode = function createPlaceholderNode(editor, node) {
    var name = node.name;
    var placeHolder = new global$2('img', 1);
    retainAttributesAndInnerHtml(editor, node, placeHolder);
    setDimensions(node, placeHolder, {});
    placeHolder.attr({
      'style': node.attr('style'),
      'src': global.transparentSrc,
      'data-mce-object': name,
      'class': 'mce-object mce-object-' + name
    });
    return placeHolder;
  };

  var createPreviewNode = function createPreviewNode(editor, node) {
    var name = node.name;
    var previewWrapper = new global$2('span', 1);
    previewWrapper.attr({
      'contentEditable': 'false',
      'style': node.attr('style'),
      'data-mce-object': name,
      'class': 'mce-preview-object mce-object-' + name
    });
    retainAttributesAndInnerHtml(editor, node, previewWrapper);
    var styles = editor.dom.parseStyle(node.attr('style'));
    var previewNode = new global$2(name, 1);
    setDimensions(node, previewNode, styles);
    previewNode.attr({
      src: node.attr('src'),
      style: node.attr('style'),
      "class": node.attr('class')
    });

    if (name === 'iframe') {
      previewNode.attr({
        allowfullscreen: node.attr('allowfullscreen'),
        frameborder: '0'
      });
    } else {
      var attrs = ['controls', 'crossorigin', 'currentTime', 'loop', 'muted', 'poster', 'preload'];
      each$1(attrs, function (attrName) {
        previewNode.attr(attrName, node.attr(attrName));
      });
      var sanitizedHtml = previewWrapper.attr('data-mce-html');

      if (isNonNullable(sanitizedHtml)) {
        appendNodeContent(editor, name, previewNode, unescape(sanitizedHtml));
      }
    }

    var shimNode = new global$2('span', 1);
    shimNode.attr('class', 'mce-shim');
    previewWrapper.append(previewNode);
    previewWrapper.append(shimNode);
    return previewWrapper;
  };

  var retainAttributesAndInnerHtml = function retainAttributesAndInnerHtml(editor, sourceNode, targetNode) {
    var attribs = sourceNode.attributes;
    var ai = attribs.length;

    while (ai--) {
      var attrName = attribs[ai].name;
      var attrValue = attribs[ai].value;

      if (attrName !== 'width' && attrName !== 'height' && attrName !== 'style' && !startsWith(attrName, 'data-mce-')) {
        if (attrName === 'data' || attrName === 'src') {
          attrValue = editor.convertURL(attrValue, attrName);
        }

        targetNode.attr('data-mce-p-' + attrName, attrValue);
      }
    }

    var serializer = global$1({
      inner: true
    }, editor.schema);
    var tempNode = new global$2('div', 1);
    each$1(sourceNode.children(), function (child) {
      return tempNode.append(child);
    });
    var innerHtml = serializer.serialize(tempNode);

    if (innerHtml) {
      targetNode.attr('data-mce-html', escape(innerHtml));
      targetNode.empty();
    }
  };

  var isPageEmbedWrapper = function isPageEmbedWrapper(node) {
    var nodeClass = node.attr('class');
    return nodeClass && /\btiny-pageembed\b/.test(nodeClass);
  };

  var isWithinEmbedWrapper = function isWithinEmbedWrapper(node) {
    while (node = node.parent) {
      if (node.attr('data-ephox-embed-iri') || isPageEmbedWrapper(node)) {
        return true;
      }
    }

    return false;
  };

  var placeHolderConverter = function placeHolderConverter(editor) {
    return function (nodes) {
      var i = nodes.length;
      var node;

      while (i--) {
        node = nodes[i];

        if (!node.parent) {
          continue;
        }

        if (node.parent.attr('data-mce-object')) {
          continue;
        }

        if (isLiveEmbedNode(node) && hasLiveEmbeds(editor)) {
          if (!isWithinEmbedWrapper(node)) {
            node.replace(createPreviewNode(editor, node));
          }
        } else {
          if (!isWithinEmbedWrapper(node)) {
            node.replace(createPlaceholderNode(editor, node));
          }
        }
      }
    };
  };

  var parseAndSanitize = function parseAndSanitize(editor, context, html) {
    var validate = shouldFilterHtml(editor);
    return Parser(editor.schema, {
      validate: validate
    }).parse(html, {
      context: context
    });
  };

  var setup$1 = function setup$1(editor) {
    editor.on('PreInit', function () {
      var schema = editor.schema,
          serializer = editor.serializer,
          parser = editor.parser;
      var boolAttrs = schema.getBoolAttrs();
      each$1('webkitallowfullscreen mozallowfullscreen'.split(' '), function (name) {
        boolAttrs[name] = {};
      });
      each({
        embed: ['wmode']
      }, function (attrs, name) {
        var rule = schema.getElementRule(name);
        each$1(attrs, function (attr) {
          rule.attributes[attr] = {};
          rule.attributesOrder.push(attr);
        });
      });
      parser.addNodeFilter('iframe,video,audio,object,embed,script', placeHolderConverter(editor));
      serializer.addAttributeFilter('data-mce-object', function (nodes, name) {
        var i = nodes.length;

        var _loop2 = function _loop2() {
          var node = nodes[i];

          if (!node.parent) {
            return "continue";
          }

          var realElmName = node.attr(name);
          var realElm = new global$2(realElmName, 1);

          if (realElmName !== 'audio' && realElmName !== 'script') {
            var className = node.attr('class');

            if (className && className.indexOf('mce-preview-object') !== -1) {
              realElm.attr({
                width: node.firstChild.attr('width'),
                height: node.firstChild.attr('height')
              });
            } else {
              realElm.attr({
                width: node.attr('width'),
                height: node.attr('height')
              });
            }
          }

          realElm.attr({
            style: node.attr('style')
          });
          var attribs = node.attributes;
          var ai = attribs.length;

          while (ai--) {
            var attrName = attribs[ai].name;

            if (attrName.indexOf('data-mce-p-') === 0) {
              realElm.attr(attrName.substr(11), attribs[ai].value);
            }
          }

          if (realElmName === 'script') {
            realElm.attr('type', 'text/javascript');
          }

          var innerHtml = node.attr('data-mce-html');

          if (innerHtml) {
            var fragment = parseAndSanitize(editor, realElmName, unescape(innerHtml));
            each$1(fragment.children(), function (child) {
              return realElm.append(child);
            });
          }

          node.replace(realElm);
        };

        while (i--) {
          var _ret = _loop2();

          if (_ret === "continue") continue;
        }
      });
    });
    editor.on('SetContent', function () {
      var dom = editor.dom;
      each$1(dom.select('span.mce-preview-object'), function (elm) {
        if (dom.select('span.mce-shim', elm).length === 0) {
          dom.add(elm, 'span', {
            "class": 'mce-shim'
          });
        }
      });
    });
  };

  var setup = function setup(editor) {
    editor.on('ResolveName', function (e) {
      var name;

      if (e.target.nodeType === 1 && (name = e.target.getAttribute('data-mce-object'))) {
        e.name = name;
      }
    });
  };

  var register = function register(editor) {
    var onAction = function onAction() {
      return editor.execCommand('mceMedia');
    };

    editor.ui.registry.addToggleButton('media', {
      tooltip: 'Insert/edit media',
      icon: 'embed',
      onAction: onAction,
      onSetup: function onSetup(buttonApi) {
        var selection = editor.selection;
        buttonApi.setActive(isMediaElement(selection.getNode()));
        return selection.selectorChangedWithUnbind('img[data-mce-object],span[data-mce-object],div[data-ephox-embed-iri]', buttonApi.setActive).unbind;
      }
    });
    editor.ui.registry.addMenuItem('media', {
      icon: 'embed',
      text: 'Media...',
      onAction: onAction
    });
  };

  var Plugin = function Plugin() {
    global$6.add('media', function (editor) {
      register$2(editor);
      register$1(editor);
      register(editor);
      setup(editor);
      setup$1(editor);
      setup$2(editor);
      return get(editor);
    });
  };

  Plugin();
})();