"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$2 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var isSimpleType = function isSimpleType(type) {
    return function (value) {
      return _typeof(value) === type;
    };
  };

  var isFunction = isSimpleType('function');
  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');
  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('save_enablewhendirty', {
      processor: 'boolean',
      "default": true
    });
    registerOption('save_onsavecallback', {
      processor: 'function'
    });
    registerOption('save_oncancelcallback', {
      processor: 'function'
    });
  };

  var enableWhenDirty = option('save_enablewhendirty');
  var getOnSaveCallback = option('save_onsavecallback');
  var getOnCancelCallback = option('save_oncancelcallback');

  var displayErrorMessage = function displayErrorMessage(editor, message) {
    editor.notificationManager.open({
      text: message,
      type: 'error'
    });
  };

  var save = function save(editor) {
    var formObj = global$1.DOM.getParent(editor.id, 'form');

    if (enableWhenDirty(editor) && !editor.isDirty()) {
      return;
    }

    editor.save();
    var onSaveCallback = getOnSaveCallback(editor);

    if (isFunction(onSaveCallback)) {
      onSaveCallback.call(editor, editor);
      editor.nodeChanged();
      return;
    }

    if (formObj) {
      editor.setDirty(false);

      if (!formObj.onsubmit || formObj.onsubmit()) {
        if (typeof formObj.submit === 'function') {
          formObj.submit();
        } else {
          displayErrorMessage(editor, 'Error: Form submit field collision.');
        }
      }

      editor.nodeChanged();
    } else {
      displayErrorMessage(editor, 'Error: No form element found.');
    }
  };

  var cancel = function cancel(editor) {
    var h = global.trim(editor.startContent);
    var onCancelCallback = getOnCancelCallback(editor);

    if (isFunction(onCancelCallback)) {
      onCancelCallback.call(editor, editor);
      return;
    }

    editor.resetContent(h);
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mceSave', function () {
      save(editor);
    });
    editor.addCommand('mceCancel', function () {
      cancel(editor);
    });
  };

  var stateToggle = function stateToggle(editor) {
    return function (api) {
      var handler = function handler() {
        api.setEnabled(!enableWhenDirty(editor) || editor.isDirty());
      };

      handler();
      editor.on('NodeChange dirty', handler);
      return function () {
        return editor.off('NodeChange dirty', handler);
      };
    };
  };

  var register = function register(editor) {
    editor.ui.registry.addButton('save', {
      icon: 'save',
      tooltip: 'Save',
      enabled: false,
      onAction: function onAction() {
        return editor.execCommand('mceSave');
      },
      onSetup: stateToggle(editor)
    });
    editor.ui.registry.addButton('cancel', {
      icon: 'cancel',
      tooltip: 'Cancel',
      enabled: false,
      onAction: function onAction() {
        return editor.execCommand('mceCancel');
      },
      onSetup: stateToggle(editor)
    });
    editor.addShortcut('Meta+S', '', 'mceSave');
  };

  var Plugin = function Plugin() {
    global$2.add('save', function (editor) {
      register$2(editor);
      register(editor);
      register$1(editor);
    });
  };

  Plugin();
})();