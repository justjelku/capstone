"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$2 = tinymce.util.Tools.resolve('tinymce.PluginManager');
  var global$1 = tinymce.util.Tools.resolve('tinymce.Env');
  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var getContentStyle = option('content_style');
  var shouldUseContentCssCors = option('content_css_cors');
  var getBodyClass = option('body_class');
  var getBodyId = option('body_id');

  var getPreviewHtml = function getPreviewHtml(editor) {
    var _a;

    var headHtml = '';
    var encode = editor.dom.encode;
    var contentStyle = (_a = getContentStyle(editor)) !== null && _a !== void 0 ? _a : '';
    headHtml += '<base href="' + encode(editor.documentBaseURI.getURI()) + '">';
    var cors = shouldUseContentCssCors(editor) ? ' crossorigin="anonymous"' : '';
    global.each(editor.contentCSS, function (url) {
      headHtml += '<link type="text/css" rel="stylesheet" href="' + encode(editor.documentBaseURI.toAbsolute(url)) + '"' + cors + '>';
    });

    if (contentStyle) {
      headHtml += '<style type="text/css">' + contentStyle + '</style>';
    }

    var bodyId = getBodyId(editor);
    var bodyClass = getBodyClass(editor);
    var isMetaKeyPressed = global$1.os.isMacOS() || global$1.os.isiOS() ? 'e.metaKey' : 'e.ctrlKey && !e.altKey';
    var preventClicksOnLinksScript = '<script>' + 'document.addEventListener && document.addEventListener("click", function(e) {' + 'for (var elm = e.target; elm; elm = elm.parentNode) {' + 'if (elm.nodeName === "A" && !(' + isMetaKeyPressed + ')) {' + 'e.preventDefault();' + '}' + '}' + '}, false);' + '</script> ';
    var directionality = editor.getBody().dir;
    var dirAttr = directionality ? ' dir="' + encode(directionality) + '"' : '';
    var previewHtml = '<!DOCTYPE html>' + '<html>' + '<head>' + headHtml + '</head>' + '<body id="' + encode(bodyId) + '" class="mce-content-body ' + encode(bodyClass) + '"' + dirAttr + '>' + editor.getContent() + preventClicksOnLinksScript + '</body>' + '</html>';
    return previewHtml;
  };

  var open = function open(editor) {
    var content = getPreviewHtml(editor);
    var dataApi = editor.windowManager.open({
      title: 'Preview',
      size: 'large',
      body: {
        type: 'panel',
        items: [{
          name: 'preview',
          type: 'iframe',
          sandboxed: true,
          transparent: false
        }]
      },
      buttons: [{
        type: 'cancel',
        name: 'close',
        text: 'Close',
        primary: true
      }],
      initialData: {
        preview: content
      }
    });
    dataApi.focus('close');
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mcePreview', function () {
      open(editor);
    });
  };

  var register = function register(editor) {
    var onAction = function onAction() {
      return editor.execCommand('mcePreview');
    };

    editor.ui.registry.addButton('preview', {
      icon: 'preview',
      tooltip: 'Preview',
      onAction: onAction
    });
    editor.ui.registry.addMenuItem('preview', {
      icon: 'preview',
      text: 'Preview',
      onAction: onAction
    });
  };

  var Plugin = function Plugin() {
    global$2.add('preview', function (editor) {
      register$1(editor);
      register(editor);
    });
  };

  Plugin();
})();