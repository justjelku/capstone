"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

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

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var fireVisualBlocks = function fireVisualBlocks(editor, state) {
    editor.dispatch('VisualBlocks', {
      state: state
    });
  };

  var toggleVisualBlocks = function toggleVisualBlocks(editor, pluginUrl, enabledState) {
    var dom = editor.dom;
    dom.toggleClass(editor.getBody(), 'mce-visualblocks');
    enabledState.set(!enabledState.get());
    fireVisualBlocks(editor, enabledState.get());
  };

  var register$2 = function register$2(editor, pluginUrl, enabledState) {
    editor.addCommand('mceVisualBlocks', function () {
      toggleVisualBlocks(editor, pluginUrl, enabledState);
    });
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;
    registerOption('visualblocks_default_state', {
      processor: 'boolean',
      "default": false
    });
  };

  var isEnabledByDefault = option('visualblocks_default_state');

  var setup = function setup(editor, pluginUrl, enabledState) {
    editor.on('PreviewFormats AfterPreviewFormats', function (e) {
      if (enabledState.get()) {
        editor.dom.toggleClass(editor.getBody(), 'mce-visualblocks', e.type === 'afterpreviewformats');
      }
    });
    editor.on('init', function () {
      if (isEnabledByDefault(editor)) {
        toggleVisualBlocks(editor, pluginUrl, enabledState);
      }
    });
  };

  var toggleActiveState = function toggleActiveState(editor, enabledState) {
    return function (api) {
      api.setActive(enabledState.get());

      var editorEventCallback = function editorEventCallback(e) {
        return api.setActive(e.state);
      };

      editor.on('VisualBlocks', editorEventCallback);
      return function () {
        return editor.off('VisualBlocks', editorEventCallback);
      };
    };
  };

  var register = function register(editor, enabledState) {
    var onAction = function onAction() {
      return editor.execCommand('mceVisualBlocks');
    };

    editor.ui.registry.addToggleButton('visualblocks', {
      icon: 'visualblocks',
      tooltip: 'Show blocks',
      onAction: onAction,
      onSetup: toggleActiveState(editor, enabledState)
    });
    editor.ui.registry.addToggleMenuItem('visualblocks', {
      text: 'Show blocks',
      icon: 'visualblocks',
      onAction: onAction,
      onSetup: toggleActiveState(editor, enabledState)
    });
  };

  var Plugin = function Plugin() {
    global.add('visualblocks', function (editor, pluginUrl) {
      register$1(editor);
      var enabledState = Cell(false);
      register$2(editor, pluginUrl, enabledState);
      register(editor, enabledState);
      setup(editor, pluginUrl, enabledState);
    });
  };

  Plugin();
})();