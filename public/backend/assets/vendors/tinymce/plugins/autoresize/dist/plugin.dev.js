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

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');
  var global = tinymce.util.Tools.resolve('tinymce.Env');

  var fireResizeEditor = function fireResizeEditor(editor) {
    return editor.dispatch('ResizeEditor');
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;
    registerOption('autoresize_overflow_padding', {
      processor: 'number',
      "default": 1
    });
    registerOption('autoresize_bottom_margin', {
      processor: 'number',
      "default": 50
    });
  };

  var getMinHeight = option('min_height');
  var getMaxHeight = option('max_height');
  var getAutoResizeOverflowPadding = option('autoresize_overflow_padding');
  var getAutoResizeBottomMargin = option('autoresize_bottom_margin');

  var isFullscreen = function isFullscreen(editor) {
    return editor.plugins.fullscreen && editor.plugins.fullscreen.isFullscreen();
  };

  var toggleScrolling = function toggleScrolling(editor, state) {
    var body = editor.getBody();

    if (body) {
      body.style.overflowY = state ? '' : 'hidden';

      if (!state) {
        body.scrollTop = 0;
      }
    }
  };

  var parseCssValueToInt = function parseCssValueToInt(dom, elm, name, computed) {
    var value = parseInt(dom.getStyle(elm, name, computed), 10);
    return isNaN(value) ? 0 : value;
  };

  var shouldScrollIntoView = function shouldScrollIntoView(trigger) {
    if ((trigger === null || trigger === void 0 ? void 0 : trigger.type.toLowerCase()) === 'setcontent') {
      var setContentEvent = trigger;
      return setContentEvent.selection === true || setContentEvent.paste === true;
    } else {
      return false;
    }
  };

  var resize = function resize(editor, oldSize, trigger) {
    var _a;

    var dom = editor.dom;
    var doc = editor.getDoc();

    if (!doc) {
      return;
    }

    if (isFullscreen(editor)) {
      toggleScrolling(editor, true);
      return;
    }

    var docEle = doc.documentElement;
    var resizeBottomMargin = getAutoResizeBottomMargin(editor);
    var minHeight = (_a = getMinHeight(editor)) !== null && _a !== void 0 ? _a : editor.getElement().offsetHeight;
    var resizeHeight = minHeight;
    var marginTop = parseCssValueToInt(dom, docEle, 'margin-top', true);
    var marginBottom = parseCssValueToInt(dom, docEle, 'margin-bottom', true);
    var contentHeight = docEle.offsetHeight + marginTop + marginBottom + resizeBottomMargin;

    if (contentHeight < 0) {
      contentHeight = 0;
    }

    var containerHeight = editor.getContainer().offsetHeight;
    var contentAreaHeight = editor.getContentAreaContainer().offsetHeight;
    var chromeHeight = containerHeight - contentAreaHeight;

    if (contentHeight + chromeHeight > minHeight) {
      resizeHeight = contentHeight + chromeHeight;
    }

    var maxHeight = getMaxHeight(editor);

    if (maxHeight && resizeHeight > maxHeight) {
      resizeHeight = maxHeight;
      toggleScrolling(editor, true);
    } else {
      toggleScrolling(editor, false);
    }

    if (resizeHeight !== oldSize.get()) {
      var deltaSize = resizeHeight - oldSize.get();
      dom.setStyle(editor.getContainer(), 'height', resizeHeight + 'px');
      oldSize.set(resizeHeight);
      fireResizeEditor(editor);

      if (global.browser.isSafari() && (global.os.isMacOS() || global.os.isiOS())) {
        var win = editor.getWin();
        win.scrollTo(win.pageXOffset, win.pageYOffset);
      }

      if (editor.hasFocus() && shouldScrollIntoView(trigger)) {
        editor.selection.scrollIntoView();
      }

      if ((global.browser.isSafari() || global.browser.isChromium()) && deltaSize < 0) {
        resize(editor, oldSize, trigger);
      }
    }
  };

  var setup = function setup(editor, oldSize) {
    editor.on('init', function () {
      var overflowPadding = getAutoResizeOverflowPadding(editor);
      var dom = editor.dom;
      dom.setStyles(editor.getDoc().documentElement, {
        height: 'auto'
      });
      dom.setStyles(editor.getBody(), {
        'paddingLeft': overflowPadding,
        'paddingRight': overflowPadding,
        'min-height': 0
      });
    });
    editor.on('NodeChange SetContent keyup FullscreenStateChanged ResizeContent', function (e) {
      resize(editor, oldSize, e);
    });
  };

  var register = function register(editor, oldSize) {
    editor.addCommand('mceAutoResize', function () {
      resize(editor, oldSize);
    });
  };

  var Plugin = function Plugin() {
    global$1.add('autoresize', function (editor) {
      register$1(editor);

      if (!editor.options.isSet('resize')) {
        editor.options.set('resize', false);
      }

      if (!editor.inline) {
        var oldSize = Cell(0);
        register(editor, oldSize);
        setup(editor, oldSize);
      }
    });
  };

  Plugin();
})();