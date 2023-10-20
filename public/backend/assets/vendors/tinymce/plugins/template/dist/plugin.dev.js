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
  var isObject = isType('object');
  var isArray = isType('array');

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

  var constant = function constant(value) {
    return function () {
      return value;
    };
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

  var escape = function escape(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('template_cdate_classes', {
      processor: 'string',
      "default": 'cdate'
    });
    registerOption('template_mdate_classes', {
      processor: 'string',
      "default": 'mdate'
    });
    registerOption('template_selected_content_classes', {
      processor: 'string',
      "default": 'selcontent'
    });
    registerOption('template_preview_replace_values', {
      processor: 'object'
    });
    registerOption('template_replace_values', {
      processor: 'object'
    });
    registerOption('templates', {
      processor: function processor(value) {
        return isString(value) || isArrayOf(value, isObject) || isFunction(value);
      }
    });
    registerOption('template_cdate_format', {
      processor: 'string',
      "default": editor.translate('%Y-%m-%d')
    });
    registerOption('template_mdate_format', {
      processor: 'string',
      "default": editor.translate('%Y-%m-%d')
    });
  };

  var getCreationDateClasses = option('template_cdate_classes');
  var getModificationDateClasses = option('template_mdate_classes');
  var getSelectedContentClasses = option('template_selected_content_classes');
  var getPreviewReplaceValues = option('template_preview_replace_values');
  var getTemplateReplaceValues = option('template_replace_values');
  var getTemplates = option('templates');
  var getCdateFormat = option('template_cdate_format');
  var getMdateFormat = option('template_mdate_format');
  var getContentStyle = option('content_style');
  var shouldUseContentCssCors = option('content_css_cors');
  var getBodyClass = option('body_class');

  var addZeros = function addZeros(value, len) {
    value = '' + value;

    if (value.length < len) {
      for (var i = 0; i < len - value.length; i++) {
        value = '0' + value;
      }
    }

    return value;
  };

  var getDateTime = function getDateTime(editor, fmt) {
    var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    var daysShort = 'Sun Mon Tue Wed Thu Fri Sat Sun'.split(' ');
    var daysLong = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');
    var monthsShort = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    var monthsLong = 'January February March April May June July August September October November December'.split(' ');
    fmt = fmt.replace('%D', '%m/%d/%Y');
    fmt = fmt.replace('%r', '%I:%M:%S %p');
    fmt = fmt.replace('%Y', '' + date.getFullYear());
    fmt = fmt.replace('%y', '' + date.getYear());
    fmt = fmt.replace('%m', addZeros(date.getMonth() + 1, 2));
    fmt = fmt.replace('%d', addZeros(date.getDate(), 2));
    fmt = fmt.replace('%H', '' + addZeros(date.getHours(), 2));
    fmt = fmt.replace('%M', '' + addZeros(date.getMinutes(), 2));
    fmt = fmt.replace('%S', '' + addZeros(date.getSeconds(), 2));
    fmt = fmt.replace('%I', '' + ((date.getHours() + 11) % 12 + 1));
    fmt = fmt.replace('%p', '' + (date.getHours() < 12 ? 'AM' : 'PM'));
    fmt = fmt.replace('%B', '' + editor.translate(monthsLong[date.getMonth()]));
    fmt = fmt.replace('%b', '' + editor.translate(monthsShort[date.getMonth()]));
    fmt = fmt.replace('%A', '' + editor.translate(daysLong[date.getDay()]));
    fmt = fmt.replace('%a', '' + editor.translate(daysShort[date.getDay()]));
    fmt = fmt.replace('%%', '%');
    return fmt;
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

  var hasOwnProperty = Object.hasOwnProperty;

  var get = function get(obj, key) {
    return has(obj, key) ? Optional.from(obj[key]) : Optional.none();
  };

  var has = function has(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var entitiesAttr = {
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\'': '&#039;'
  };

  var htmlEscape = function htmlEscape(html) {
    return html.replace(/["'<>&]/g, function (match) {
      return get(entitiesAttr, match).getOr(match);
    });
  };

  var hasAnyClasses = function hasAnyClasses(dom, n, classes) {
    return exists(classes.split(/\s+/), function (c) {
      return dom.hasClass(n, c);
    });
  };

  var createTemplateList = function createTemplateList(editor, callback) {
    return function () {
      var templateList = getTemplates(editor);

      if (isFunction(templateList)) {
        templateList(callback);
      } else if (isString(templateList)) {
        fetch(templateList).then(function (res) {
          if (res.ok) {
            res.json().then(callback);
          }
        });
      } else {
        callback(templateList);
      }
    };
  };

  var replaceTemplateValues = function replaceTemplateValues(html, templateValues) {
    global$1.each(templateValues, function (v, k) {
      if (isFunction(v)) {
        v = v(k);
      }

      html = html.replace(new RegExp('\\{\\$' + escape(k) + '\\}', 'g'), v);
    });
    return html;
  };

  var replaceVals = function replaceVals(editor, scope) {
    var dom = editor.dom,
        vl = getTemplateReplaceValues(editor);
    global$1.each(dom.select('*', scope), function (e) {
      global$1.each(vl, function (v, k) {
        if (dom.hasClass(e, k)) {
          if (isFunction(v)) {
            v(e);
          }
        }
      });
    });
  };

  var insertTemplate = function insertTemplate(editor, _ui, html) {
    var dom = editor.dom;
    var sel = editor.selection.getContent();
    html = replaceTemplateValues(html, getTemplateReplaceValues(editor));
    var el = dom.create('div', null, html);
    var n = dom.select('.mceTmpl', el);

    if (n && n.length > 0) {
      el = dom.create('div', null);
      el.appendChild(n[0].cloneNode(true));
    }

    global$1.each(dom.select('*', el), function (n) {
      if (hasAnyClasses(dom, n, getCreationDateClasses(editor))) {
        n.innerHTML = getDateTime(editor, getCdateFormat(editor));
      }

      if (hasAnyClasses(dom, n, getModificationDateClasses(editor))) {
        n.innerHTML = getDateTime(editor, getMdateFormat(editor));
      }

      if (hasAnyClasses(dom, n, getSelectedContentClasses(editor))) {
        n.innerHTML = sel;
      }
    });
    replaceVals(editor, el);
    editor.execCommand('mceInsertContent', false, el.innerHTML);
    editor.addVisual();
  };

  var global = tinymce.util.Tools.resolve('tinymce.Env');

  var getPreviewContent = function getPreviewContent(editor, html) {
    var _a;

    if (html.indexOf('<html>') === -1) {
      var contentCssEntries = '';
      var contentStyle = (_a = getContentStyle(editor)) !== null && _a !== void 0 ? _a : '';
      var cors = shouldUseContentCssCors(editor) ? ' crossorigin="anonymous"' : '';
      global$1.each(editor.contentCSS, function (url) {
        contentCssEntries += '<link type="text/css" rel="stylesheet" href="' + editor.documentBaseURI.toAbsolute(url) + '"' + cors + '>';
      });

      if (contentStyle) {
        contentCssEntries += '<style type="text/css">' + contentStyle + '</style>';
      }

      var bodyClass = getBodyClass(editor);
      var encode = editor.dom.encode;
      var isMetaKeyPressed = global.os.isMacOS() || global.os.isiOS() ? 'e.metaKey' : 'e.ctrlKey && !e.altKey';
      var preventClicksOnLinksScript = '<script>' + 'document.addEventListener && document.addEventListener("click", function(e) {' + 'for (var elm = e.target; elm; elm = elm.parentNode) {' + 'if (elm.nodeName === "A" && !(' + isMetaKeyPressed + ')) {' + 'e.preventDefault();' + '}' + '}' + '}, false);' + '</script> ';
      var directionality = editor.getBody().dir;
      var dirAttr = directionality ? ' dir="' + encode(directionality) + '"' : '';
      html = '<!DOCTYPE html>' + '<html>' + '<head>' + '<base href="' + encode(editor.documentBaseURI.getURI()) + '">' + contentCssEntries + preventClicksOnLinksScript + '</head>' + '<body class="' + encode(bodyClass) + '"' + dirAttr + '>' + html + '</body>' + '</html>';
    }

    return replaceTemplateValues(html, getPreviewReplaceValues(editor));
  };

  var open = function open(editor, templateList) {
    var createTemplates = function createTemplates() {
      if (!templateList || templateList.length === 0) {
        var message = editor.translate('No templates defined.');
        editor.notificationManager.open({
          text: message,
          type: 'info'
        });
        return Optional.none();
      }

      return Optional.from(global$1.map(templateList, function (template, index) {
        var isUrlTemplate = function isUrlTemplate(t) {
          return t.url !== undefined;
        };

        return {
          selected: index === 0,
          text: template.title,
          value: {
            url: isUrlTemplate(template) ? Optional.from(template.url) : Optional.none(),
            content: !isUrlTemplate(template) ? Optional.from(template.content) : Optional.none(),
            description: template.description
          }
        };
      }));
    };

    var createSelectBoxItems = function createSelectBoxItems(templates) {
      return map(templates, function (t) {
        return {
          text: t.text,
          value: t.text
        };
      });
    };

    var findTemplate = function findTemplate(templates, templateTitle) {
      return find(templates, function (t) {
        return t.text === templateTitle;
      });
    };

    var loadFailedAlert = function loadFailedAlert(api) {
      editor.windowManager.alert('Could not load the specified template.', function () {
        return api.focus('template');
      });
    };

    var getTemplateContent = function getTemplateContent(t) {
      return t.value.url.fold(function () {
        return Promise.resolve(t.value.content.getOr(''));
      }, function (url) {
        return fetch(url).then(function (res) {
          return res.ok ? res.text() : Promise.reject();
        });
      });
    };

    var onChange = function onChange(templates, updateDialog) {
      return function (api, change) {
        if (change.name === 'template') {
          var newTemplateTitle = api.getData().template;
          findTemplate(templates, newTemplateTitle).each(function (t) {
            api.block('Loading...');
            getTemplateContent(t).then(function (previewHtml) {
              updateDialog(api, t, previewHtml);
            })["catch"](function () {
              updateDialog(api, t, '');
              api.setEnabled('save', false);
              loadFailedAlert(api);
            });
          });
        }
      };
    };

    var onSubmit = function onSubmit(templates) {
      return function (api) {
        var data = api.getData();
        findTemplate(templates, data.template).each(function (t) {
          getTemplateContent(t).then(function (previewHtml) {
            editor.execCommand('mceInsertTemplate', false, previewHtml);
            api.close();
          })["catch"](function () {
            api.setEnabled('save', false);
            loadFailedAlert(api);
          });
        });
      };
    };

    var openDialog = function openDialog(templates) {
      var selectBoxItems = createSelectBoxItems(templates);

      var buildDialogSpec = function buildDialogSpec(bodyItems, initialData) {
        return {
          title: 'Insert Template',
          size: 'large',
          body: {
            type: 'panel',
            items: bodyItems
          },
          initialData: initialData,
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
          onSubmit: onSubmit(templates),
          onChange: onChange(templates, updateDialog)
        };
      };

      var updateDialog = function updateDialog(dialogApi, template, previewHtml) {
        var content = getPreviewContent(editor, previewHtml);
        var bodyItems = [{
          type: 'selectbox',
          name: 'template',
          label: 'Templates',
          items: selectBoxItems
        }, {
          type: 'htmlpanel',
          html: "<p aria-live=\"polite\">".concat(htmlEscape(template.value.description), "</p>")
        }, {
          label: 'Preview',
          type: 'iframe',
          name: 'preview',
          sandboxed: false,
          transparent: false
        }];
        var initialData = {
          template: template.text,
          preview: content
        };
        dialogApi.unblock();
        dialogApi.redial(buildDialogSpec(bodyItems, initialData));
        dialogApi.focus('template');
      };

      var dialogApi = editor.windowManager.open(buildDialogSpec([], {
        template: '',
        preview: ''
      }));
      dialogApi.block('Loading...');
      getTemplateContent(templates[0]).then(function (previewHtml) {
        updateDialog(dialogApi, templates[0], previewHtml);
      })["catch"](function () {
        updateDialog(dialogApi, templates[0], '');
        dialogApi.setEnabled('save', false);
        loadFailedAlert(dialogApi);
      });
    };

    var optTemplates = createTemplates();
    optTemplates.each(openDialog);
  };

  var showDialog = function showDialog(editor) {
    return function (templates) {
      open(editor, templates);
    };
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mceInsertTemplate', curry(insertTemplate, editor));
    editor.addCommand('mceTemplate', createTemplateList(editor, showDialog(editor)));
  };

  var setup = function setup(editor) {
    editor.on('PreProcess', function (o) {
      var dom = editor.dom,
          dateFormat = getMdateFormat(editor);
      global$1.each(dom.select('div', o.node), function (e) {
        if (dom.hasClass(e, 'mceTmpl')) {
          global$1.each(dom.select('*', e), function (e) {
            if (hasAnyClasses(dom, e, getModificationDateClasses(editor))) {
              e.innerHTML = getDateTime(editor, dateFormat);
            }
          });
          replaceVals(editor, e);
        }
      });
    });
  };

  var register = function register(editor) {
    var onAction = function onAction() {
      return editor.execCommand('mceTemplate');
    };

    editor.ui.registry.addButton('template', {
      icon: 'template',
      tooltip: 'Insert template',
      onAction: onAction
    });
    editor.ui.registry.addMenuItem('template', {
      icon: 'template',
      text: 'Insert template...',
      onAction: onAction
    });
  };

  var Plugin = function Plugin() {
    global$2.add('template', function (editor) {
      register$2(editor);
      register(editor);
      register$1(editor);
      setup(editor);
    });
  };

  Plugin();
})();