"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var link = function link() {
    return /(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-.~*+=!;:'%@$(),\/\w]*[-~*+=%@$()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g;
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register = function register(editor) {
    var registerOption = editor.options.register;
    registerOption('autolink_pattern', {
      processor: 'regexp',
      "default": new RegExp('^' + link().source + '$', 'i')
    });
    registerOption('link_default_target', {
      processor: 'string'
    });
    registerOption('link_default_protocol', {
      processor: 'string',
      "default": 'https'
    });
  };

  var getAutoLinkPattern = option('autolink_pattern');
  var getDefaultLinkTarget = option('link_default_target');
  var getDefaultLinkProtocol = option('link_default_protocol');

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

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
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

  var rangeEqualsBracketOrSpace = function rangeEqualsBracketOrSpace(rangeString) {
    return /^[(\[{ \u00a0]$/.test(rangeString);
  };

  var isTextNode = function isTextNode(node) {
    return node.nodeType === 3;
  };

  var isElement = function isElement(node) {
    return node.nodeType === 1;
  };

  var scopeIndex = function scopeIndex(container, index) {
    if (index < 0) {
      index = 0;
    }

    if (isTextNode(container)) {
      var len = container.data.length;

      if (index > len) {
        index = len;
      }
    }

    return index;
  };

  var setStart = function setStart(rng, container, offset) {
    if (!isElement(container) || container.hasChildNodes()) {
      rng.setStart(container, scopeIndex(container, offset));
    } else {
      rng.setStartBefore(container);
    }
  };

  var setEnd = function setEnd(rng, container, offset) {
    if (!isElement(container) || container.hasChildNodes()) {
      rng.setEnd(container, scopeIndex(container, offset));
    } else {
      rng.setEndAfter(container);
    }
  };

  var hasProtocol = function hasProtocol(url) {
    return /^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(url);
  };

  var isPunctuation = function isPunctuation(_char) {
    return /[?!,.;:]/.test(_char);
  };

  var parseCurrentLine = function parseCurrentLine(editor, endOffset) {
    var end, endContainer, text, prev, len, rngText;
    var autoLinkPattern = getAutoLinkPattern(editor);

    if (editor.dom.getParent(editor.selection.getNode(), 'a[href]') !== null) {
      return;
    }

    var rng = editor.selection.getRng().cloneRange();

    if (rng.startOffset < 5) {
      prev = rng.endContainer.previousSibling;

      if (!prev) {
        if (!rng.endContainer.firstChild || !rng.endContainer.firstChild.nextSibling) {
          return;
        }

        prev = rng.endContainer.firstChild.nextSibling;
      }

      len = prev.length;
      setStart(rng, prev, len);
      setEnd(rng, prev, len);

      if (rng.endOffset < 5) {
        return;
      }

      end = rng.endOffset;
      endContainer = prev;
    } else {
      endContainer = rng.endContainer;

      if (!isTextNode(endContainer) && endContainer.firstChild) {
        while (!isTextNode(endContainer) && endContainer.firstChild) {
          endContainer = endContainer.firstChild;
        }

        if (isTextNode(endContainer)) {
          setStart(rng, endContainer, 0);
          setEnd(rng, endContainer, endContainer.nodeValue.length);
        }
      }

      if (rng.endOffset === 1) {
        end = 2;
      } else {
        end = rng.endOffset - 1 - endOffset;
      }
    }

    var start = end;

    do {
      setStart(rng, endContainer, end >= 2 ? end - 2 : 0);
      setEnd(rng, endContainer, end >= 1 ? end - 1 : 0);
      end -= 1;
      rngText = rng.toString();
    } while (!rangeEqualsBracketOrSpace(rngText) && end - 2 >= 0);

    if (rangeEqualsBracketOrSpace(rng.toString())) {
      setStart(rng, endContainer, end);
      setEnd(rng, endContainer, start);
      end += 1;
    } else if (rng.startOffset === 0) {
      setStart(rng, endContainer, 0);
      setEnd(rng, endContainer, start);
    } else {
      setStart(rng, endContainer, end);
      setEnd(rng, endContainer, start);
    }

    text = rng.toString();

    if (isPunctuation(text.charAt(text.length - 1))) {
      setEnd(rng, endContainer, start - 1);
    }

    text = rng.toString().trim();
    var matches = text.match(autoLinkPattern);
    var protocol = getDefaultLinkProtocol(editor);

    if (matches) {
      var url = matches[0];

      if (startsWith(url, 'www.')) {
        url = protocol + '://' + url;
      } else if (contains(url, '@') && !hasProtocol(url)) {
        url = 'mailto:' + url;
      }

      return {
        rng: rng,
        url: url
      };
    } else {
      return null;
    }
  };

  var convertToLink = function convertToLink(editor, result) {
    var defaultLinkTarget = getDefaultLinkTarget(editor);
    var rng = result.rng,
        url = result.url;
    var bookmark = editor.selection.getBookmark();
    editor.selection.setRng(rng);
    var command = 'createlink';
    var args = {
      command: command,
      ui: false,
      value: url
    };
    var beforeExecEvent = editor.dispatch('BeforeExecCommand', args);

    if (!beforeExecEvent.isDefaultPrevented()) {
      editor.getDoc().execCommand(command, false, url);
      editor.dispatch('ExecCommand', args);

      if (isString(defaultLinkTarget)) {
        editor.dom.setAttrib(editor.selection.getNode(), 'target', defaultLinkTarget);
      }
    }

    editor.selection.moveToBookmark(bookmark);
    editor.nodeChanged();
  };

  var handleSpacebar = function handleSpacebar(editor) {
    var result = parseCurrentLine(editor, 0);

    if (isNonNullable(result)) {
      convertToLink(editor, result);
    }
  };

  var handleBracket = handleSpacebar;

  var handleEnter = function handleEnter(editor) {
    var result = parseCurrentLine(editor, -1);

    if (isNonNullable(result)) {
      convertToLink(editor, result);
    }
  };

  var setup = function setup(editor) {
    editor.on('keydown', function (e) {
      if (e.keyCode === 13 && !e.isDefaultPrevented()) {
        handleEnter(editor);
      }
    });
    editor.on('keyup', function (e) {
      if (e.keyCode === 32) {
        handleSpacebar(editor);
      } else if (e.keyCode === 48 && e.shiftKey || e.keyCode === 221) {
        handleBracket(editor);
      }
    });
  };

  var Plugin = function Plugin() {
    global.add('autolink', function (editor) {
      register(editor);
      setup(editor);
    });
  };

  Plugin();
})();