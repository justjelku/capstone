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

  var isSimpleType = function isSimpleType(type) {
    return function (value) {
      return _typeof(value) === type;
    };
  };

  var isString = isType('string');
  var isObject = isType('object');
  var isArray = isType('array');
  var isFunction = isSimpleType('function');
  var global$3 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');
  var global$2 = tinymce.util.Tools.resolve('tinymce.EditorManager');
  var global$1 = tinymce.util.Tools.resolve('tinymce.Env');
  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register = function register(editor) {
    var registerOption = editor.options.register;

    var filterProcessor = function filterProcessor(value) {
      return isString(value) || isFunction(value) || isObject(value);
    };

    registerOption('importcss_merge_classes', {
      processor: 'boolean',
      "default": true
    });
    registerOption('importcss_exclusive', {
      processor: 'boolean',
      "default": true
    });
    registerOption('importcss_selector_converter', {
      processor: 'function'
    });
    registerOption('importcss_selector_filter', {
      processor: filterProcessor
    });
    registerOption('importcss_file_filter', {
      processor: filterProcessor
    });
    registerOption('importcss_groups', {
      processor: 'object[]'
    });
    registerOption('importcss_append', {
      processor: 'boolean',
      "default": false
    });
  };

  var shouldMergeClasses = option('importcss_merge_classes');
  var shouldImportExclusive = option('importcss_exclusive');
  var getSelectorConverter = option('importcss_selector_converter');
  var getSelectorFilter = option('importcss_selector_filter');
  var getCssGroups = option('importcss_groups');
  var shouldAppend = option('importcss_append');
  var getFileFilter = option('importcss_file_filter');
  var getSkin = option('skin');
  var getSkinUrl = option('skin_url');
  var nativePush = Array.prototype.push;

  var map = function map(xs, f) {
    var len = xs.length;
    var r = new Array(len);

    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i);
    }

    return r;
  };

  var flatten = function flatten(xs) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!isArray(xs[i])) {
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      }

      nativePush.apply(r, xs[i]);
    }

    return r;
  };

  var bind = function bind(xs, f) {
    return flatten(map(xs, f));
  };

  var generate = function generate() {
    var ungroupedOrder = [];
    var groupOrder = [];
    var groups = {};

    var addItemToGroup = function addItemToGroup(groupTitle, itemInfo) {
      if (groups[groupTitle]) {
        groups[groupTitle].push(itemInfo);
      } else {
        groupOrder.push(groupTitle);
        groups[groupTitle] = [itemInfo];
      }
    };

    var addItem = function addItem(itemInfo) {
      ungroupedOrder.push(itemInfo);
    };

    var toFormats = function toFormats() {
      var groupItems = bind(groupOrder, function (g) {
        var items = groups[g];
        return items.length === 0 ? [] : [{
          title: g,
          items: items
        }];
      });
      return groupItems.concat(ungroupedOrder);
    };

    return {
      addItemToGroup: addItemToGroup,
      addItem: addItem,
      toFormats: toFormats
    };
  };

  var internalEditorStyle = /^\.(?:ephox|tiny-pageembed|mce)(?:[.-]+\w+)+$/;

  var removeCacheSuffix = function removeCacheSuffix(url) {
    var cacheSuffix = global$1.cacheSuffix;

    if (isString(url)) {
      url = url.replace('?' + cacheSuffix, '').replace('&' + cacheSuffix, '');
    }

    return url;
  };

  var isSkinContentCss = function isSkinContentCss(editor, href) {
    var skin = getSkin(editor);

    if (skin) {
      var skinUrlBase = getSkinUrl(editor);
      var skinUrl = skinUrlBase ? editor.documentBaseURI.toAbsolute(skinUrlBase) : global$2.baseURL + '/skins/ui/' + skin;
      var contentSkinUrlPart = global$2.baseURL + '/skins/content/';
      return href === skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css' || href.indexOf(contentSkinUrlPart) !== -1;
    }

    return false;
  };

  var compileFilter = function compileFilter(filter) {
    if (isString(filter)) {
      return function (value) {
        return value.indexOf(filter) !== -1;
      };
    } else if (filter instanceof RegExp) {
      return function (value) {
        return filter.test(value);
      };
    }

    return filter;
  };

  var isCssImportRule = function isCssImportRule(rule) {
    return rule.styleSheet;
  };

  var isCssPageRule = function isCssPageRule(rule) {
    return rule.selectorText;
  };

  var getSelectors = function getSelectors(editor, doc, fileFilter) {
    var selectors = [];
    var contentCSSUrls = {};

    var append = function append(styleSheet, imported) {
      var href = styleSheet.href,
          rules;
      href = removeCacheSuffix(href);

      if (!href || !fileFilter(href, imported) || isSkinContentCss(editor, href)) {
        return;
      }

      global.each(styleSheet.imports, function (styleSheet) {
        append(styleSheet, true);
      });

      try {
        rules = styleSheet.cssRules || styleSheet.rules;
      } catch (e) {}

      global.each(rules, function (cssRule) {
        if (isCssImportRule(cssRule)) {
          append(cssRule.styleSheet, true);
        } else if (isCssPageRule(cssRule)) {
          global.each(cssRule.selectorText.split(','), function (selector) {
            selectors.push(global.trim(selector));
          });
        }
      });
    };

    global.each(editor.contentCSS, function (url) {
      contentCSSUrls[url] = true;
    });

    if (!fileFilter) {
      fileFilter = function fileFilter(href, imported) {
        return imported || contentCSSUrls[href];
      };
    }

    try {
      global.each(doc.styleSheets, function (styleSheet) {
        append(styleSheet);
      });
    } catch (e) {}

    return selectors;
  };

  var defaultConvertSelectorToFormat = function defaultConvertSelectorToFormat(editor, selectorText) {
    var format;
    var selector = /^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(selectorText);

    if (!selector) {
      return;
    }

    var elementName = selector[1];
    var classes = selector[2].substr(1).split('.').join(' ');
    var inlineSelectorElements = global.makeMap('a,img');

    if (selector[1]) {
      format = {
        title: selectorText
      };

      if (editor.schema.getTextBlockElements()[elementName]) {
        format.block = elementName;
      } else if (editor.schema.getBlockElements()[elementName] || inlineSelectorElements[elementName.toLowerCase()]) {
        format.selector = elementName;
      } else {
        format.inline = elementName;
      }
    } else if (selector[2]) {
      format = {
        inline: 'span',
        title: selectorText.substr(1),
        classes: classes
      };
    }

    if (shouldMergeClasses(editor)) {
      format.classes = classes;
    } else {
      format.attributes = {
        "class": classes
      };
    }

    return format;
  };

  var getGroupsBySelector = function getGroupsBySelector(groups, selector) {
    return global.grep(groups, function (group) {
      return !group.filter || group.filter(selector);
    });
  };

  var compileUserDefinedGroups = function compileUserDefinedGroups(groups) {
    return global.map(groups, function (group) {
      return global.extend({}, group, {
        original: group,
        selectors: {},
        filter: compileFilter(group.filter)
      });
    });
  };

  var isExclusiveMode = function isExclusiveMode(editor, group) {
    return group === null || shouldImportExclusive(editor);
  };

  var isUniqueSelector = function isUniqueSelector(editor, selector, group, globallyUniqueSelectors) {
    return !(isExclusiveMode(editor, group) ? selector in globallyUniqueSelectors : selector in group.selectors);
  };

  var markUniqueSelector = function markUniqueSelector(editor, selector, group, globallyUniqueSelectors) {
    if (isExclusiveMode(editor, group)) {
      globallyUniqueSelectors[selector] = true;
    } else {
      group.selectors[selector] = true;
    }
  };

  var convertSelectorToFormat = function convertSelectorToFormat(editor, plugin, selector, group) {
    var selectorConverter;

    if (group && group.selector_converter) {
      selectorConverter = group.selector_converter;
    } else if (getSelectorConverter(editor)) {
      selectorConverter = getSelectorConverter(editor);
    } else {
      selectorConverter = function selectorConverter() {
        return defaultConvertSelectorToFormat(editor, selector);
      };
    }

    return selectorConverter.call(plugin, selector, group);
  };

  var setup = function setup(editor) {
    editor.on('init', function () {
      var model = generate();
      var globallyUniqueSelectors = {};
      var selectorFilter = compileFilter(getSelectorFilter(editor));
      var groups = compileUserDefinedGroups(getCssGroups(editor));

      var processSelector = function processSelector(selector, group) {
        if (isUniqueSelector(editor, selector, group, globallyUniqueSelectors)) {
          markUniqueSelector(editor, selector, group, globallyUniqueSelectors);
          var format = convertSelectorToFormat(editor, editor.plugins.importcss, selector, group);

          if (format) {
            var formatName = format.name || global$3.DOM.uniqueId();
            editor.formatter.register(formatName, format);
            return {
              title: format.title,
              format: formatName
            };
          }
        }

        return null;
      };

      global.each(getSelectors(editor, editor.getDoc(), compileFilter(getFileFilter(editor))), function (selector) {
        if (!internalEditorStyle.test(selector)) {
          if (!selectorFilter || selectorFilter(selector)) {
            var selectorGroups = getGroupsBySelector(groups, selector);

            if (selectorGroups.length > 0) {
              global.each(selectorGroups, function (group) {
                var menuItem = processSelector(selector, group);

                if (menuItem) {
                  model.addItemToGroup(group.title, menuItem);
                }
              });
            } else {
              var menuItem = processSelector(selector, null);

              if (menuItem) {
                model.addItem(menuItem);
              }
            }
          }
        }
      });
      var items = model.toFormats();
      editor.dispatch('addStyleModifications', {
        items: items,
        replace: !shouldAppend(editor)
      });
    });
  };

  var get = function get(editor) {
    var convertSelectorToFormat = function convertSelectorToFormat(selectorText) {
      return defaultConvertSelectorToFormat(editor, selectorText);
    };

    return {
      convertSelectorToFormat: convertSelectorToFormat
    };
  };

  var Plugin = function Plugin() {
    global$4.add('importcss', function (editor) {
      register(editor);
      setup(editor);
      return get(editor);
    });
  };

  Plugin();
})();