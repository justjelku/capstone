"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

  var global$3 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var get$1 = function get$1(customTabs) {
    var addTab = function addTab(spec) {
      var currentCustomTabs = customTabs.get();
      currentCustomTabs[spec.name] = spec;
      customTabs.set(currentCustomTabs);
    };

    return {
      addTab: addTab
    };
  };

  var register$2 = function register$2(editor, dialogOpener) {
    editor.addCommand('mceHelp', dialogOpener);
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;
    registerOption('help_tabs', {
      processor: 'array'
    });
  };

  var getHelpTabs = option('help_tabs');
  var getForcedPlugins = option('forced_plugins');

  var register = function register(editor, dialogOpener) {
    editor.ui.registry.addButton('help', {
      icon: 'help',
      tooltip: 'Help',
      onAction: dialogOpener
    });
    editor.ui.registry.addMenuItem('help', {
      text: 'Help',
      icon: 'help',
      shortcut: 'Alt+0',
      onAction: dialogOpener
    });
  };

  var eq = function eq(t) {
    return function (a) {
      return t === a;
    };
  };

  var isUndefined = eq(undefined);

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
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
  var nativeIndexOf = Array.prototype.indexOf;

  var rawIndexOf = function rawIndexOf(ts, t) {
    return nativeIndexOf.call(ts, t);
  };

  var contains = function contains(xs, x) {
    return rawIndexOf(xs, x) > -1;
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

  var filter = function filter(xs, pred) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        r.push(x);
      }
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

  var keys = Object.keys;
  var hasOwnProperty = Object.hasOwnProperty;

  var get = function get(obj, key) {
    return has(obj, key) ? Optional.from(obj[key]) : Optional.none();
  };

  var has = function has(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var cat = function cat(arr) {
    var r = [];

    var push = function push(x) {
      r.push(x);
    };

    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }

    return r;
  };

  var description = "<h1>Editor UI keyboard navigation</h1>\n\n<h2>Activating keyboard navigation</h2>\n\n<p>The sections of the outer UI of the editor - the menubar, toolbar, sidebar and footer - are all keyboard navigable. As such, there are multiple ways to activate keyboard navigation:</p>\n<ul>\n  <li>Focus the menubar: Alt + F9 (Windows) or &#x2325;F9 (MacOS)</li>\n  <li>Focus the toolbar: Alt + F10 (Windows) or &#x2325;F10 (MacOS)</li>\n  <li>Focus the footer: Alt + F11 (Windows) or &#x2325;F11 (MacOS)</li>\n</ul>\n\n<p>Focusing the menubar or toolbar will start keyboard navigation at the first item in the menubar or toolbar, which will be highlighted with a gray background. Focusing the footer will start keyboard navigation at the first item in the element path, which will be highlighted with an underline. </p>\n\n<h2>Moving between UI sections</h2>\n\n<p>When keyboard navigation is active, pressing tab will move the focus to the next major section of the UI, where applicable. These sections are:</p>\n<ul>\n  <li>the menubar</li>\n  <li>each group of the toolbar </li>\n  <li>the sidebar</li>\n  <li>the element path in the footer </li>\n  <li>the wordcount toggle button in the footer </li>\n  <li>the branding link in the footer </li>\n  <li>the editor resize handle in the footer</li>\n</ul>\n\n<p>Pressing shift + tab will move backwards through the same sections, except when moving from the footer to the toolbar. Focusing the element path then pressing shift + tab will move focus to the first toolbar group, not the last.</p>\n\n<h2>Moving within UI sections</h2>\n\n<p>Keyboard navigation within UI sections can usually be achieved using the left and right arrow keys. This includes:</p>\n<ul>\n  <li>moving between menus in the menubar</li>\n  <li>moving between buttons in a toolbar group</li>\n  <li>moving between items in the element path</li>\n</ul>\n\n<p>In all these UI sections, keyboard navigation will cycle within the section. For example, focusing the last button in a toolbar group then pressing right arrow will move focus to the first item in the same toolbar group. </p>\n\n<h1>Executing buttons</h1>\n\n<p>To execute a button, navigate the selection to the desired button and hit space or enter.</p>\n\n<h1>Opening, navigating and closing menus</h1>\n\n<p>When focusing a menubar button or a toolbar button with a menu, pressing space, enter or down arrow will open the menu. When the menu opens the first item will be selected. To move up or down the menu, press the up or down arrow key respectively. This is the same for submenus, which can also be opened and closed using the left and right arrow keys.</p>\n\n<p>To close any active menu, hit the escape key. When a menu is closed the selection will be restored to its previous selection. This also works for closing submenus.</p>\n\n<h1>Context toolbars and menus</h1>\n\n<p>To focus an open context toolbar such as the table context toolbar, press Ctrl + F9 (Windows) or &#x2303;F9 (MacOS).</p>\n\n<p>Context toolbar navigation is the same as toolbar navigation, and context menu navigation is the same as standard menu navigation.</p>\n\n<h1>Dialog navigation</h1>\n\n<p>There are two types of dialog UIs in TinyMCE: tabbed dialogs and non-tabbed dialogs.</p>\n\n<p>When a non-tabbed dialog is opened, the first interactive component in the dialog will be focused. Users can navigate between interactive components by pressing tab. This includes any footer buttons. Navigation will cycle back to the first dialog component if tab is pressed while focusing the last component in the dialog. Pressing shift + tab will navigate backwards.</p>\n\n<p>When a tabbed dialog is opened, the first button in the tab menu is focused. Pressing tab will navigate to the first interactive component in that tab, and will cycle through the tab\u2019s components, the footer buttons, then back to the tab button. To switch to another tab, focus the tab button for the current tab, then use the arrow keys to cycle through the tab buttons.</p>";

  var tab$3 = function tab$3() {
    var body = {
      type: 'htmlpanel',
      presets: 'document',
      html: description
    };
    return {
      name: 'keyboardnav',
      title: 'Keyboard Navigation',
      items: [body]
    };
  };

  var global$2 = tinymce.util.Tools.resolve('tinymce.Env');

  var convertText = function convertText(source) {
    var isMac = global$2.os.isMacOS() || global$2.os.isiOS();
    var mac = {
      alt: '&#x2325;',
      ctrl: '&#x2303;',
      shift: '&#x21E7;',
      meta: '&#x2318;',
      access: '&#x2303;&#x2325;'
    };
    var other = {
      meta: 'Ctrl ',
      access: 'Shift + Alt '
    };
    var replace = isMac ? mac : other;
    var shortcut = source.split('+');
    var updated = map(shortcut, function (segment) {
      var search = segment.toLowerCase().trim();
      return has(replace, search) ? replace[search] : segment;
    });
    return isMac ? updated.join('').replace(/\s/, '') : updated.join('+');
  };

  var shortcuts = [{
    shortcuts: ['Meta + B'],
    action: 'Bold'
  }, {
    shortcuts: ['Meta + I'],
    action: 'Italic'
  }, {
    shortcuts: ['Meta + U'],
    action: 'Underline'
  }, {
    shortcuts: ['Meta + A'],
    action: 'Select all'
  }, {
    shortcuts: ['Meta + Y', 'Meta + Shift + Z'],
    action: 'Redo'
  }, {
    shortcuts: ['Meta + Z'],
    action: 'Undo'
  }, {
    shortcuts: ['Access + 1'],
    action: 'Heading 1'
  }, {
    shortcuts: ['Access + 2'],
    action: 'Heading 2'
  }, {
    shortcuts: ['Access + 3'],
    action: 'Heading 3'
  }, {
    shortcuts: ['Access + 4'],
    action: 'Heading 4'
  }, {
    shortcuts: ['Access + 5'],
    action: 'Heading 5'
  }, {
    shortcuts: ['Access + 6'],
    action: 'Heading 6'
  }, {
    shortcuts: ['Access + 7'],
    action: 'Paragraph'
  }, {
    shortcuts: ['Access + 8'],
    action: 'Div'
  }, {
    shortcuts: ['Access + 9'],
    action: 'Address'
  }, {
    shortcuts: ['Alt + 0'],
    action: 'Open help dialog'
  }, {
    shortcuts: ['Alt + F9'],
    action: 'Focus to menubar'
  }, {
    shortcuts: ['Alt + F10'],
    action: 'Focus to toolbar'
  }, {
    shortcuts: ['Alt + F11'],
    action: 'Focus to element path'
  }, {
    shortcuts: ['Ctrl + F9'],
    action: 'Focus to contextual toolbar'
  }, {
    shortcuts: ['Shift + Enter'],
    action: 'Open popup menu for split buttons'
  }, {
    shortcuts: ['Meta + K'],
    action: 'Insert link (if link plugin activated)'
  }, {
    shortcuts: ['Meta + S'],
    action: 'Save (if save plugin activated)'
  }, {
    shortcuts: ['Meta + F'],
    action: 'Find (if searchreplace plugin activated)'
  }, {
    shortcuts: ['Meta + Shift + F'],
    action: 'Switch to or from fullscreen mode'
  }];

  var tab$2 = function tab$2() {
    var shortcutList = map(shortcuts, function (shortcut) {
      var shortcutText = map(shortcut.shortcuts, convertText).join(' or ');
      return [shortcut.action, shortcutText];
    });
    var tablePanel = {
      type: 'table',
      header: ['Action', 'Shortcut'],
      cells: shortcutList
    };
    return {
      name: 'shortcuts',
      title: 'Handy Shortcuts',
      items: [tablePanel]
    };
  };

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.I18n');
  var urls = map([{
    key: 'advlist',
    name: 'Advanced List'
  }, {
    key: 'anchor',
    name: 'Anchor'
  }, {
    key: 'autolink',
    name: 'Autolink'
  }, {
    key: 'autoresize',
    name: 'Autoresize'
  }, {
    key: 'autosave',
    name: 'Autosave'
  }, {
    key: 'charmap',
    name: 'Character Map'
  }, {
    key: 'code',
    name: 'Code'
  }, {
    key: 'codesample',
    name: 'Code Sample'
  }, {
    key: 'colorpicker',
    name: 'Color Picker'
  }, {
    key: 'directionality',
    name: 'Directionality'
  }, {
    key: 'emoticons',
    name: 'Emoticons'
  }, {
    key: 'fullscreen',
    name: 'Full Screen'
  }, {
    key: 'help',
    name: 'Help'
  }, {
    key: 'image',
    name: 'Image'
  }, {
    key: 'importcss',
    name: 'Import CSS'
  }, {
    key: 'insertdatetime',
    name: 'Insert Date/Time'
  }, {
    key: 'link',
    name: 'Link'
  }, {
    key: 'lists',
    name: 'Lists'
  }, {
    key: 'media',
    name: 'Media'
  }, {
    key: 'nonbreaking',
    name: 'Nonbreaking'
  }, {
    key: 'pagebreak',
    name: 'Page Break'
  }, {
    key: 'preview',
    name: 'Preview'
  }, {
    key: 'quickbars',
    name: 'Quick Toolbars'
  }, {
    key: 'save',
    name: 'Save'
  }, {
    key: 'searchreplace',
    name: 'Search and Replace'
  }, {
    key: 'table',
    name: 'Table'
  }, {
    key: 'template',
    name: 'Template'
  }, {
    key: 'textcolor',
    name: 'Text Color'
  }, {
    key: 'visualblocks',
    name: 'Visual Blocks'
  }, {
    key: 'visualchars',
    name: 'Visual Characters'
  }, {
    key: 'wordcount',
    name: 'Word Count'
  }, {
    key: 'a11ychecker',
    name: 'Accessibility Checker',
    type: 'premium'
  }, {
    key: 'advcode',
    name: 'Advanced Code Editor',
    type: 'premium'
  }, {
    key: 'advtable',
    name: 'Advanced Tables',
    type: 'premium'
  }, {
    key: 'autocorrect',
    name: 'Autocorrect',
    type: 'premium'
  }, {
    key: 'casechange',
    name: 'Case Change',
    type: 'premium'
  }, {
    key: 'checklist',
    name: 'Checklist',
    type: 'premium'
  }, {
    key: 'editimage',
    name: 'Enhanced Image Editing',
    type: 'premium'
  }, {
    key: 'mediaembed',
    name: 'Enhanced Media Embed',
    type: 'premium',
    slug: 'introduction-to-mediaembed'
  }, {
    key: 'export',
    name: 'Export',
    type: 'premium'
  }, {
    key: 'formatpainter',
    name: 'Format Painter',
    type: 'premium'
  }, {
    key: 'linkchecker',
    name: 'Link Checker',
    type: 'premium'
  }, {
    key: 'mentions',
    name: 'Mentions',
    type: 'premium'
  }, {
    key: 'pageembed',
    name: 'Page Embed',
    type: 'premium'
  }, {
    key: 'permanentpen',
    name: 'Permanent Pen',
    type: 'premium'
  }, {
    key: 'powerpaste',
    name: 'PowerPaste',
    type: 'premium',
    slug: 'introduction-to-powerpaste'
  }, {
    key: 'rtc',
    name: 'Real-Time Collaboration',
    type: 'premium',
    slug: 'rtc-introduction'
  }, {
    key: 'tinymcespellchecker',
    name: 'Spell Checker Pro',
    type: 'premium',
    slug: 'introduction-to-tiny-spellchecker'
  }, {
    key: 'tinycomments',
    name: 'Tiny Comments',
    type: 'premium',
    slug: 'introduction-to-tiny-comments'
  }, {
    key: 'tinydrive',
    name: 'Tiny Drive',
    type: 'premium',
    slug: 'tinydrive-introduction'
  }, {
    key: 'tableofcontents',
    name: 'Table of Contents',
    type: 'premium'
  }], function (item) {
    return _objectSpread({}, item, {
      type: item.type || 'opensource',
      slug: item.slug || item.key
    });
  });

  var tab$1 = function tab$1(editor) {
    var availablePlugins = function availablePlugins() {
      var premiumPlugins = filter(urls, function (_ref) {
        var key = _ref.key,
            type = _ref.type;
        return key !== 'autocorrect' && type === 'premium';
      });
      var premiumPluginList = map(premiumPlugins, function (plugin) {
        return '<li>' + global$1.translate(plugin.name) + '</li>';
      }).join('');
      return '<div data-mce-tabstop="1" tabindex="-1">' + '<p><b>' + global$1.translate('Premium plugins:') + '</b></p>' + '<ul>' + premiumPluginList + '<li class="tox-help__more-link" "><a href="https://www.tiny.cloud/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" rel="noopener" target="_blank">' + global$1.translate('Learn more...') + '</a></li>' + '</ul>' + '</div>';
    };

    var makeLink = function makeLink(p) {
      return "<a href=\"".concat(p.url, "\" target=\"_blank\" rel=\"noopener\">").concat(p.name, "</a>");
    };

    var maybeUrlize = function maybeUrlize(editor, key) {
      return find(urls, function (x) {
        return x.key === key;
      }).fold(function () {
        var getMetadata = editor.plugins[key].getMetadata;
        return typeof getMetadata === 'function' ? makeLink(getMetadata()) : key;
      }, function (x) {
        var name = x.type === 'premium' ? "".concat(x.name, "*") : x.name;
        return makeLink({
          name: name,
          url: "https://www.tiny.cloud/docs/tinymce/6/".concat(x.slug, "/")
        });
      });
    };

    var getPluginKeys = function getPluginKeys(editor) {
      var keys$1 = keys(editor.plugins);
      var forcedPlugins = getForcedPlugins(editor);
      return isUndefined(forcedPlugins) ? keys$1 : filter(keys$1, function (k) {
        return !contains(forcedPlugins, k);
      });
    };

    var pluginLister = function pluginLister(editor) {
      var pluginKeys = getPluginKeys(editor);
      var pluginLis = map(pluginKeys, function (key) {
        return '<li>' + maybeUrlize(editor, key) + '</li>';
      });
      var count = pluginLis.length;
      var pluginsString = pluginLis.join('');
      var html = '<p><b>' + global$1.translate(['Plugins installed ({0}):', count]) + '</b></p>' + '<ul>' + pluginsString + '</ul>';
      return html;
    };

    var installedPlugins = function installedPlugins(editor) {
      if (editor == null) {
        return '';
      }

      return '<div data-mce-tabstop="1" tabindex="-1">' + pluginLister(editor) + '</div>';
    };

    var htmlPanel = {
      type: 'htmlpanel',
      presets: 'document',
      html: [installedPlugins(editor), availablePlugins()].join('')
    };
    return {
      name: 'plugins',
      title: 'Plugins',
      items: [htmlPanel]
    };
  };

  var global = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var tab = function tab() {
    var getVersion = function getVersion(major, minor) {
      return major.indexOf('@') === 0 ? 'X.X.X' : major + '.' + minor;
    };

    var version = getVersion(global.majorVersion, global.minorVersion);
    var changeLogLink = '<a href="https://www.tiny.cloud/docs/tinymce/6/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" rel="noopener" target="_blank">TinyMCE ' + version + '</a>';
    var htmlPanel = {
      type: 'htmlpanel',
      html: '<p>' + global$1.translate(['You are using {0}', changeLogLink]) + '</p>',
      presets: 'document'
    };
    return {
      name: 'versions',
      title: 'Version',
      items: [htmlPanel]
    };
  };

  var parseHelpTabsSetting = function parseHelpTabsSetting(tabsFromSettings, tabs) {
    var newTabs = {};
    var names = map(tabsFromSettings, function (t) {
      if (typeof t === 'string') {
        if (has(tabs, t)) {
          newTabs[t] = tabs[t];
        }

        return t;
      } else {
        newTabs[t.name] = t;
        return t.name;
      }
    });
    return {
      tabs: newTabs,
      names: names
    };
  };

  var getNamesFromTabs = function getNamesFromTabs(tabs) {
    var names = keys(tabs);
    var idx = names.indexOf('versions');

    if (idx !== -1) {
      names.splice(idx, 1);
      names.push('versions');
    }

    return {
      tabs: tabs,
      names: names
    };
  };

  var parseCustomTabs = function parseCustomTabs(editor, customTabs) {
    var _objectSpread2;

    var shortcuts = tab$2();
    var nav = tab$3();
    var plugins = tab$1(editor);
    var versions = tab();

    var tabs = _objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, shortcuts.name, shortcuts), _defineProperty(_objectSpread2, nav.name, nav), _defineProperty(_objectSpread2, plugins.name, plugins), _defineProperty(_objectSpread2, versions.name, versions), _objectSpread2), customTabs.get());

    return Optional.from(getHelpTabs(editor)).fold(function () {
      return getNamesFromTabs(tabs);
    }, function (tabsFromSettings) {
      return parseHelpTabsSetting(tabsFromSettings, tabs);
    });
  };

  var init = function init(editor, customTabs) {
    return function () {
      var _parseCustomTabs = parseCustomTabs(editor, customTabs),
          tabs = _parseCustomTabs.tabs,
          names = _parseCustomTabs.names;

      var foundTabs = map(names, function (name) {
        return get(tabs, name);
      });
      var dialogTabs = cat(foundTabs);
      var body = {
        type: 'tabpanel',
        tabs: dialogTabs
      };
      editor.windowManager.open({
        title: 'Help',
        size: 'medium',
        body: body,
        buttons: [{
          type: 'cancel',
          name: 'close',
          text: 'Close',
          primary: true
        }],
        initialData: {}
      });
    };
  };

  var Plugin = function Plugin() {
    global$3.add('help', function (editor) {
      var customTabs = Cell({});
      var api = get$1(customTabs);
      register$1(editor);
      var dialogOpener = init(editor, customTabs);
      register(editor, dialogOpener);
      register$2(editor, dialogOpener);
      editor.shortcuts.add('Alt+0', 'Open help dialog', 'mceHelp');
      return api;
    });
  };

  Plugin();
})();