"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');
  var global = tinymce.util.Tools.resolve('tinymce.Env');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('pagebreak_separator', {
      processor: 'string',
      "default": '<!-- pagebreak -->'
    });
    registerOption('pagebreak_split_block', {
      processor: 'boolean',
      "default": false
    });
  };

  var getSeparatorHtml = option('pagebreak_separator');
  var shouldSplitBlock = option('pagebreak_split_block');
  var pageBreakClass = 'mce-pagebreak';

  var getPlaceholderHtml = function getPlaceholderHtml(shouldSplitBlock) {
    var html = "<img src=\"".concat(global.transparentSrc, "\" class=\"").concat(pageBreakClass, "\" data-mce-resize=\"false\" data-mce-placeholder />");
    return shouldSplitBlock ? "<p>".concat(html, "</p>") : html;
  };

  var setup$1 = function setup$1(editor) {
    var separatorHtml = getSeparatorHtml(editor);

    var shouldSplitBlock$1 = function shouldSplitBlock$1() {
      return shouldSplitBlock(editor);
    };

    var pageBreakSeparatorRegExp = new RegExp(separatorHtml.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function (a) {
      return '\\' + a;
    }), 'gi');
    editor.on('BeforeSetContent', function (e) {
      e.content = e.content.replace(pageBreakSeparatorRegExp, getPlaceholderHtml(shouldSplitBlock$1()));
    });
    editor.on('PreInit', function () {
      editor.serializer.addNodeFilter('img', function (nodes) {
        var i = nodes.length,
            node,
            className;

        while (i--) {
          node = nodes[i];
          className = node.attr('class');

          if (className && className.indexOf(pageBreakClass) !== -1) {
            var parentNode = node.parent;

            if (editor.schema.getBlockElements()[parentNode.name] && shouldSplitBlock$1()) {
              parentNode.type = 3;
              parentNode.value = separatorHtml;
              parentNode.raw = true;
              node.remove();
              continue;
            }

            node.type = 3;
            node.value = separatorHtml;
            node.raw = true;
          }
        }
      });
    });
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mcePageBreak', function () {
      editor.insertContent(getPlaceholderHtml(shouldSplitBlock(editor)));
    });
  };

  var setup = function setup(editor) {
    editor.on('ResolveName', function (e) {
      if (e.target.nodeName === 'IMG' && editor.dom.hasClass(e.target, pageBreakClass)) {
        e.name = 'pagebreak';
      }
    });
  };

  var register = function register(editor) {
    var onAction = function onAction() {
      return editor.execCommand('mcePageBreak');
    };

    editor.ui.registry.addButton('pagebreak', {
      icon: 'page-break',
      tooltip: 'Page break',
      onAction: onAction
    });
    editor.ui.registry.addMenuItem('pagebreak', {
      text: 'Page break',
      icon: 'page-break',
      onAction: onAction
    });
  };

  var Plugin = function Plugin() {
    global$1.add('pagebreak', function (editor) {
      register$2(editor);
      register$1(editor);
      register(editor);
      setup$1(editor);
      setup(editor);
    });
  };

  Plugin();
})();