"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var applyListFormat = function applyListFormat(editor, listName, styleValue) {
    var cmd = listName === 'UL' ? 'InsertUnorderedList' : 'InsertOrderedList';
    editor.execCommand(cmd, false, styleValue === false ? null : {
      'list-style-type': styleValue
    });
  };

  var register$2 = function register$2(editor) {
    editor.addCommand('ApplyUnorderedListStyle', function (ui, value) {
      applyListFormat(editor, 'UL', value['list-style-type']);
    });
    editor.addCommand('ApplyOrderedListStyle', function (ui, value) {
      applyListFormat(editor, 'OL', value['list-style-type']);
    });
  };

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$1 = function register$1(editor) {
    var registerOption = editor.options.register;
    registerOption('advlist_number_styles', {
      processor: 'string[]',
      "default": 'default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman'.split(',')
    });
    registerOption('advlist_bullet_styles', {
      processor: 'string[]',
      "default": 'default,circle,square'.split(',')
    });
  };

  var getNumberStyles = option('advlist_number_styles');
  var getBulletStyles = option('advlist_bullet_styles');
  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
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

  var isChildOfBody = function isChildOfBody(editor, elm) {
    return editor.dom.isChildOf(elm, editor.getBody());
  };

  var isTableCellNode = function isTableCellNode(node) {
    return node && /^(TH|TD)$/.test(node.nodeName);
  };

  var isListNode = function isListNode(editor) {
    return function (node) {
      return node && /^(OL|UL|DL)$/.test(node.nodeName) && isChildOfBody(editor, node);
    };
  };

  var getSelectedStyleType = function getSelectedStyleType(editor) {
    var listElm = editor.dom.getParent(editor.selection.getNode(), 'ol,ul');
    var style = editor.dom.getStyle(listElm, 'listStyleType');
    return Optional.from(style);
  };

  var findIndex = function findIndex(list, predicate) {
    for (var index = 0; index < list.length; index++) {
      var element = list[index];

      if (predicate(element)) {
        return index;
      }
    }

    return -1;
  };

  var styleValueToText = function styleValueToText(styleValue) {
    return styleValue.replace(/\-/g, ' ').replace(/\b\w/g, function (chr) {
      return chr.toUpperCase();
    });
  };

  var isWithinList = function isWithinList(editor, e, nodeName) {
    var tableCellIndex = findIndex(e.parents, isTableCellNode);
    var parents = tableCellIndex !== -1 ? e.parents.slice(0, tableCellIndex) : e.parents;
    var lists = global.grep(parents, isListNode(editor));
    return lists.length > 0 && lists[0].nodeName === nodeName;
  };

  var makeSetupHandler = function makeSetupHandler(editor, nodeName) {
    return function (api) {
      var nodeChangeHandler = function nodeChangeHandler(e) {
        api.setActive(isWithinList(editor, e, nodeName));
      };

      editor.on('NodeChange', nodeChangeHandler);
      return function () {
        return editor.off('NodeChange', nodeChangeHandler);
      };
    };
  };

  var addSplitButton = function addSplitButton(editor, id, tooltip, cmd, nodeName, styles) {
    editor.ui.registry.addSplitButton(id, {
      tooltip: tooltip,
      icon: nodeName === 'OL' ? 'ordered-list' : 'unordered-list',
      presets: 'listpreview',
      columns: 3,
      fetch: function fetch(callback) {
        var items = global.map(styles, function (styleValue) {
          var iconStyle = nodeName === 'OL' ? 'num' : 'bull';
          var iconName = styleValue === 'disc' || styleValue === 'decimal' ? 'default' : styleValue;
          var itemValue = styleValue === 'default' ? '' : styleValue;
          var displayText = styleValueToText(styleValue);
          return {
            type: 'choiceitem',
            value: itemValue,
            icon: 'list-' + iconStyle + '-' + iconName,
            text: displayText
          };
        });
        callback(items);
      },
      onAction: function onAction() {
        return editor.execCommand(cmd);
      },
      onItemAction: function onItemAction(_splitButtonApi, value) {
        applyListFormat(editor, nodeName, value);
      },
      select: function select(value) {
        var listStyleType = getSelectedStyleType(editor);
        return listStyleType.map(function (listStyle) {
          return value === listStyle;
        }).getOr(false);
      },
      onSetup: makeSetupHandler(editor, nodeName)
    });
  };

  var addButton = function addButton(editor, id, tooltip, cmd, nodeName, _styles) {
    editor.ui.registry.addToggleButton(id, {
      active: false,
      tooltip: tooltip,
      icon: nodeName === 'OL' ? 'ordered-list' : 'unordered-list',
      onSetup: makeSetupHandler(editor, nodeName),
      onAction: function onAction() {
        return editor.execCommand(cmd);
      }
    });
  };

  var addControl = function addControl(editor, id, tooltip, cmd, nodeName, styles) {
    if (styles.length > 1) {
      addSplitButton(editor, id, tooltip, cmd, nodeName, styles);
    } else {
      addButton(editor, id, tooltip, cmd, nodeName);
    }
  };

  var register = function register(editor) {
    addControl(editor, 'numlist', 'Numbered list', 'InsertOrderedList', 'OL', getNumberStyles(editor));
    addControl(editor, 'bullist', 'Bullet list', 'InsertUnorderedList', 'UL', getBulletStyles(editor));
  };

  var Plugin = function Plugin() {
    global$1.add('advlist', function (editor) {
      if (editor.hasPlugin('lists')) {
        register$1(editor);
        register(editor);
        register$2(editor);
      } else {
        console.error('Please use the Lists plugin together with the Advanced List plugin.');
      }
    });
  };

  Plugin();
})();