"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$4 = tinymce.util.Tools.resolve('tinymce.PluginManager');

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

  var eq = function eq(t) {
    return function (a) {
      return t === a;
    };
  };

  var isString = isType('string');
  var isUndefined = eq(undefined);
  var global$3 = tinymce.util.Tools.resolve('tinymce.util.Delay');
  var global$2 = tinymce.util.Tools.resolve('tinymce.util.LocalStorage');
  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var fireRestoreDraft = function fireRestoreDraft(editor) {
    return editor.dispatch('RestoreDraft');
  };

  var fireStoreDraft = function fireStoreDraft(editor) {
    return editor.dispatch('StoreDraft');
  };

  var fireRemoveDraft = function fireRemoveDraft(editor) {
    return editor.dispatch('RemoveDraft');
  };

  var parse = function parse(timeString) {
    var multiples = {
      s: 1000,
      m: 60000
    };
    var parsedTime = /^(\d+)([ms]?)$/.exec(timeString);
    return (parsedTime[2] ? multiples[parsedTime[2]] : 1) * parseInt(timeString, 10);
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;

    var timeProcessor = function timeProcessor(value) {
      var valid = isString(value);

      if (valid) {
        return {
          value: parse(value),
          valid: valid
        };
      } else {
        return {
          valid: false,
          message: 'Must be a string.'
        };
      }
    };

    registerOption('autosave_ask_before_unload', {
      processor: 'boolean',
      "default": true
    });
    registerOption('autosave_prefix', {
      processor: 'string',
      "default": 'tinymce-autosave-{path}{query}{hash}-{id}-'
    });
    registerOption('autosave_restore_when_empty', {
      processor: 'boolean',
      "default": false
    });
    registerOption('autosave_interval', {
      processor: timeProcessor,
      "default": '30s'
    });
    registerOption('autosave_retention', {
      processor: timeProcessor,
      "default": '20m'
    });
  };

  var shouldAskBeforeUnload = option('autosave_ask_before_unload');
  var shouldRestoreWhenEmpty = option('autosave_restore_when_empty');
  var getAutoSaveInterval = option('autosave_interval');
  var getAutoSaveRetention = option('autosave_retention');

  var getAutoSavePrefix = function getAutoSavePrefix(editor) {
    var location = document.location;
    return editor.options.get('autosave_prefix').replace(/{path}/g, location.pathname).replace(/{query}/g, location.search).replace(/{hash}/g, location.hash).replace(/{id}/g, editor.id);
  };

  var _isEmpty = function isEmpty(editor, html) {
    if (isUndefined(html)) {
      return editor.dom.isEmpty(editor.getBody());
    } else {
      var trimmedHtml = global$1.trim(html);

      if (trimmedHtml === '') {
        return true;
      } else {
        var fragment = new DOMParser().parseFromString(trimmedHtml, 'text/html');
        return editor.dom.isEmpty(fragment);
      }
    }
  };

  var _hasDraft = function hasDraft(editor) {
    var time = parseInt(global$2.getItem(getAutoSavePrefix(editor) + 'time'), 10) || 0;

    if (new Date().getTime() - time > getAutoSaveRetention(editor)) {
      _removeDraft(editor, false);

      return false;
    }

    return true;
  };

  var _removeDraft = function removeDraft(editor, fire) {
    var prefix = getAutoSavePrefix(editor);
    global$2.removeItem(prefix + 'draft');
    global$2.removeItem(prefix + 'time');

    if (fire !== false) {
      fireRemoveDraft(editor);
    }
  };

  var _storeDraft = function storeDraft(editor) {
    var prefix = getAutoSavePrefix(editor);

    if (!_isEmpty(editor) && editor.isDirty()) {
      global$2.setItem(prefix + 'draft', editor.getContent({
        format: 'raw',
        no_events: true
      }));
      global$2.setItem(prefix + 'time', new Date().getTime().toString());
      fireStoreDraft(editor);
    }
  };

  var _restoreDraft = function restoreDraft(editor) {
    var prefix = getAutoSavePrefix(editor);

    if (_hasDraft(editor)) {
      editor.setContent(global$2.getItem(prefix + 'draft'), {
        format: 'raw'
      });
      fireRestoreDraft(editor);
    }
  };

  var startStoreDraft = function startStoreDraft(editor) {
    var interval = getAutoSaveInterval(editor);
    global$3.setEditorInterval(editor, function () {
      _storeDraft(editor);
    }, interval);
  };

  var restoreLastDraft = function restoreLastDraft(editor) {
    editor.undoManager.transact(function () {
      _restoreDraft(editor);

      _removeDraft(editor);
    });
    editor.focus();
  };

  var get = function get(editor) {
    return {
      hasDraft: function hasDraft() {
        return _hasDraft(editor);
      },
      storeDraft: function storeDraft() {
        return _storeDraft(editor);
      },
      restoreDraft: function restoreDraft() {
        return _restoreDraft(editor);
      },
      removeDraft: function removeDraft(fire) {
        return _removeDraft(editor, fire);
      },
      isEmpty: function isEmpty(html) {
        return _isEmpty(editor, html);
      }
    };
  };

  var global = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var setup = function setup(editor) {
    editor.editorManager.on('BeforeUnload', function (e) {
      var msg;
      global$1.each(global.get(), function (editor) {
        if (editor.plugins.autosave) {
          editor.plugins.autosave.storeDraft();
        }

        if (!msg && editor.isDirty() && shouldAskBeforeUnload(editor)) {
          msg = editor.translate('You have unsaved changes are you sure you want to navigate away?');
        }
      });

      if (msg) {
        e.preventDefault();
        e.returnValue = msg;
      }
    });
  };

  var makeSetupHandler = function makeSetupHandler(editor) {
    return function (api) {
      api.setEnabled(_hasDraft(editor));

      var editorEventCallback = function editorEventCallback() {
        return api.setEnabled(_hasDraft(editor));
      };

      editor.on('StoreDraft RestoreDraft RemoveDraft', editorEventCallback);
      return function () {
        return editor.off('StoreDraft RestoreDraft RemoveDraft', editorEventCallback);
      };
    };
  };

  var register = function register(editor) {
    startStoreDraft(editor);
    editor.ui.registry.addButton('restoredraft', {
      tooltip: 'Restore last draft',
      icon: 'restore-draft',
      onAction: function onAction() {
        restoreLastDraft(editor);
      },
      onSetup: makeSetupHandler(editor)
    });
    editor.ui.registry.addMenuItem('restoredraft', {
      text: 'Restore last draft',
      icon: 'restore-draft',
      onAction: function onAction() {
        restoreLastDraft(editor);
      },
      onSetup: makeSetupHandler(editor)
    });
  };

  var Plugin = function Plugin() {
    global$4.add('autosave', function (editor) {
      register$1(editor);
      setup(editor);
      register(editor);
      editor.on('init', function () {
        if (shouldRestoreWhenEmpty(editor) && editor.dom.isEmpty(editor.getBody())) {
          _restoreDraft(editor);
        }
      });
      return get(editor);
    });
  };

  Plugin();
})();