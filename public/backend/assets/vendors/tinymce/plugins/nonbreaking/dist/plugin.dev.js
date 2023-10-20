"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var isSimpleType = function isSimpleType(type) {
    return function (value) {
      return _typeof(value) === type;
    };
  };

  var isBoolean = isSimpleType('boolean');
  var isNumber = isSimpleType('number');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('nonbreaking_force_tab', {
      processor: function processor(value) {
        if (isBoolean(value)) {
          return {
            value: value ? 3 : 0,
            valid: true
          };
        } else if (isNumber(value)) {
          return {
            value: value,
            valid: true
          };
        } else {
          return {
            valid: false,
            message: 'Must be a boolean or number.'
          };
        }
      },
      "default": false
    });
    registerOption('nonbreaking_wrap', {
      processor: 'boolean',
      "default": true
    });
  };

  var getKeyboardSpaces = option('nonbreaking_force_tab');
  var wrapNbsps = option('nonbreaking_wrap');

  var stringRepeat = function stringRepeat(string, repeats) {
    var str = '';

    for (var index = 0; index < repeats; index++) {
      str += string;
    }

    return str;
  };

  var isVisualCharsEnabled = function isVisualCharsEnabled(editor) {
    return editor.plugins.visualchars ? editor.plugins.visualchars.isEnabled() : false;
  };

  var insertNbsp = function insertNbsp(editor, times) {
    var classes = function classes() {
      return isVisualCharsEnabled(editor) ? 'mce-nbsp-wrap mce-nbsp' : 'mce-nbsp-wrap';
    };

    var nbspSpan = function nbspSpan() {
      return "<span class=\"".concat(classes(), "\" contenteditable=\"false\">").concat(stringRepeat('&nbsp;', times), "</span>");
    };

    var shouldWrap = wrapNbsps(editor);
    var html = shouldWrap || editor.plugins.visualchars ? nbspSpan() : stringRepeat('&nbsp;', times);
    editor.undoManager.transact(function () {
      return editor.insertContent(html);
    });
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mceNonBreaking', function () {
      insertNbsp(editor, 1);
    });
  };

  var global = tinymce.util.Tools.resolve('tinymce.util.VK');

  var setup = function setup(editor) {
    var spaces = getKeyboardSpaces(editor);

    if (spaces > 0) {
      editor.on('keydown', function (e) {
        if (e.keyCode === global.TAB && !e.isDefaultPrevented()) {
          if (e.shiftKey) {
            return;
          }

          e.preventDefault();
          e.stopImmediatePropagation();
          insertNbsp(editor, spaces);
        }
      });
    }
  };

  var register = function register(editor) {
    var onAction = function onAction() {
      return editor.execCommand('mceNonBreaking');
    };

    editor.ui.registry.addButton('nonbreaking', {
      icon: 'non-breaking',
      tooltip: 'Nonbreaking space',
      onAction: onAction
    });
    editor.ui.registry.addMenuItem('nonbreaking', {
      icon: 'non-breaking',
      text: 'Nonbreaking space',
      onAction: onAction
    });
  };

  var Plugin = function Plugin() {
    global$1.add('nonbreaking', function (editor) {
      register$2(editor);
      register$1(editor);
      register(editor);
      setup(editor);
    });
  };

  Plugin();
})();