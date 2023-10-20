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

  var global$2 = tinymce.util.Tools.resolve('tinymce.PluginManager');

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

  var isString = isType('string');
  var isBoolean = isSimpleType('boolean');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isFunction = isSimpleType('function');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register = function register(editor) {
    var registerOption = editor.options.register;

    var toolbarProcessor = function toolbarProcessor(defaultValue) {
      return function (value) {
        var valid = isBoolean(value) || isString(value);

        if (valid) {
          if (isBoolean(value)) {
            return {
              value: value ? defaultValue : '',
              valid: valid
            };
          } else {
            return {
              value: value.trim(),
              valid: valid
            };
          }
        } else {
          return {
            valid: false,
            message: 'Must be a boolean or string.'
          };
        }
      };
    };

    var defaultSelectionToolbar = 'bold italic | quicklink h2 h3 blockquote';
    registerOption('quickbars_selection_toolbar', {
      processor: toolbarProcessor(defaultSelectionToolbar),
      "default": defaultSelectionToolbar
    });
    var defaultInsertToolbar = 'quickimage quicktable';
    registerOption('quickbars_insert_toolbar', {
      processor: toolbarProcessor(defaultInsertToolbar),
      "default": defaultInsertToolbar
    });
    var defaultImageToolbar = 'alignleft aligncenter alignright';
    registerOption('quickbars_image_toolbar', {
      processor: toolbarProcessor(defaultImageToolbar),
      "default": defaultImageToolbar
    });
  };

  var getTextSelectionToolbarItems = option('quickbars_selection_toolbar');
  var getInsertToolbarItems = option('quickbars_insert_toolbar');
  var getImageToolbarItems = option('quickbars_image_toolbar');
  var unique = 0;

  var generate = function generate(prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };

  var insertTable = function insertTable(editor, columns, rows) {
    editor.execCommand('mceInsertTable', false, {
      rows: rows,
      columns: columns
    });
  };

  var insertBlob = function insertBlob(editor, base64, blob) {
    var blobCache = editor.editorUpload.blobCache;
    var blobInfo = blobCache.create(generate('mceu'), blob, base64);
    blobCache.add(blobInfo);
    editor.insertContent(editor.dom.createHTML('img', {
      src: blobInfo.blobUri()
    }));
  };

  var blobToBase64 = function blobToBase64(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();

      reader.onloadend = function () {
        resolve(reader.result.split(',')[1]);
      };

      reader.readAsDataURL(blob);
    });
  };

  var global$1 = tinymce.util.Tools.resolve('tinymce.Env');
  var global = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var pickFile = function pickFile(editor) {
    return new Promise(function (resolve) {
      var fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.position = 'fixed';
      fileInput.style.left = '0';
      fileInput.style.top = '0';
      fileInput.style.opacity = '0.001';
      document.body.appendChild(fileInput);

      var changeHandler = function changeHandler(e) {
        resolve(Array.prototype.slice.call(e.target.files));
      };

      fileInput.addEventListener('change', changeHandler);

      var cancelHandler = function cancelHandler(e) {
        var cleanup = function cleanup() {
          resolve([]);
          fileInput.parentNode.removeChild(fileInput);
        };

        if (global$1.os.isAndroid() && e.type !== 'remove') {
          global.setEditorTimeout(editor, cleanup, 0);
        } else {
          cleanup();
        }

        editor.off('focusin remove', cancelHandler);
      };

      editor.on('focusin remove', cancelHandler);
      fileInput.click();
    });
  };

  var setupButtons = function setupButtons(editor) {
    editor.ui.registry.addButton('quickimage', {
      icon: 'image',
      tooltip: 'Insert image',
      onAction: function onAction() {
        pickFile(editor).then(function (files) {
          if (files.length > 0) {
            var blob = files[0];
            blobToBase64(blob).then(function (base64) {
              insertBlob(editor, base64, blob);
            });
          }
        });
      }
    });
    editor.ui.registry.addButton('quicktable', {
      icon: 'table',
      tooltip: 'Insert table',
      onAction: function onAction() {
        insertTable(editor, 2, 2);
      }
    });
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

  var ClosestOrAncestor = function ClosestOrAncestor(is, ancestor, scope, a, isRoot) {
    if (is(scope, a)) {
      return Optional.some(scope);
    } else if (isFunction(isRoot) && isRoot(scope)) {
      return Optional.none();
    } else {
      return ancestor(scope, a, isRoot);
    }
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

  var closest$1 = function closest$1(scope, predicate, isRoot) {
    var is = function is(s, test) {
      return test(s);
    };

    return ClosestOrAncestor(is, ancestor$1, scope, predicate, isRoot);
  };

  var ancestor = function ancestor(scope, selector, isRoot) {
    return ancestor$1(scope, function (e) {
      return is(e, selector);
    }, isRoot);
  };

  var closest = function closest(scope, selector, isRoot) {
    var is$1 = function is$1(element, selector) {
      return is(element, selector);
    };

    return ClosestOrAncestor(is$1, ancestor, scope, selector, isRoot);
  };

  var addToEditor$1 = function addToEditor$1(editor) {
    var insertToolbarItems = getInsertToolbarItems(editor);

    if (insertToolbarItems.length > 0) {
      editor.ui.registry.addContextToolbar('quickblock', {
        predicate: function predicate(node) {
          var sugarNode = SugarElement.fromDom(node);
          var textBlockElementsMap = editor.schema.getTextBlockElements();

          var isRoot = function isRoot(elem) {
            return elem.dom === editor.getBody();
          };

          return closest(sugarNode, 'table', isRoot).fold(function () {
            return closest$1(sugarNode, function (elem) {
              return name(elem) in textBlockElementsMap && editor.dom.isEmpty(elem.dom);
            }, isRoot).isSome();
          }, never);
        },
        items: insertToolbarItems,
        position: 'line',
        scope: 'editor'
      });
    }
  };

  var addToEditor = function addToEditor(editor) {
    var isEditable = function isEditable(node) {
      return editor.dom.getContentEditableParent(node) !== 'false';
    };

    var isImage = function isImage(node) {
      return node.nodeName === 'IMG' || node.nodeName === 'FIGURE' && /image/i.test(node.className);
    };

    var imageToolbarItems = getImageToolbarItems(editor);

    if (imageToolbarItems.length > 0) {
      editor.ui.registry.addContextToolbar('imageselection', {
        predicate: isImage,
        items: imageToolbarItems,
        position: 'node'
      });
    }

    var textToolbarItems = getTextSelectionToolbarItems(editor);

    if (textToolbarItems.length > 0) {
      editor.ui.registry.addContextToolbar('textselection', {
        predicate: function predicate(node) {
          return !isImage(node) && !editor.selection.isCollapsed() && isEditable(node);
        },
        items: textToolbarItems,
        position: 'selection',
        scope: 'editor'
      });
    }
  };

  var Plugin = function Plugin() {
    global$2.add('quickbars', function (editor) {
      register(editor);
      setupButtons(editor);
      addToEditor$1(editor);
      addToEditor(editor);
    });
  };

  Plugin();
})();