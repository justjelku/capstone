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
!function () {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var t = function t(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      n = t("help_tabs"),
      a = t("forced_plugins"),
      o = (void 0, function (e) {
    return undefined === e;
  });

  var i = (!1, function () {
    return false;
  });

  var r =
  /*#__PURE__*/
  function () {
    function r(e, t) {
      _classCallCheck(this, r);

      this.tag = e, this.value = t;
    }

    _createClass(r, [{
      key: "fold",
      value: function fold(e, t) {
        return this.tag ? t(this.value) : e();
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
      value: function map(e) {
        return this.tag ? r.some(e(this.value)) : r.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : r.none();
      }
    }, {
      key: "exists",
      value: function exists(e) {
        return this.tag && e(this.value);
      }
    }, {
      key: "forall",
      value: function forall(e) {
        return !this.tag || e(this.value);
      }
    }, {
      key: "filter",
      value: function filter(e) {
        return !this.tag || e(this.value) ? this : r.none();
      }
    }, {
      key: "getOr",
      value: function getOr(e) {
        return this.tag ? this.value : e;
      }
    }, {
      key: "or",
      value: function or(e) {
        return this.tag ? this : e;
      }
    }, {
      key: "getOrThunk",
      value: function getOrThunk(e) {
        return this.tag ? this.value : e();
      }
    }, {
      key: "orThunk",
      value: function orThunk(e) {
        return this.tag ? this : e();
      }
    }, {
      key: "getOrDie",
      value: function getOrDie(e) {
        if (this.tag) return this.value;
        throw new Error(null != e ? e : "Called getOrDie on None");
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
      value: function each(e) {
        this.tag && e(this.value);
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.tag ? [this.value] : [];
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.tag ? "some(".concat(this.value, ")") : "none()";
      }
    }], [{
      key: "some",
      value: function some(e) {
        return new r(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return r.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return null == e ? r.none() : r.some(e);
      }
    }]);

    return r;
  }();

  r.singletonNone = new r(!1);

  var s = Array.prototype.indexOf,
      l = function l(e, t) {
    var n = e.length,
        a = new Array(n);

    for (var _o = 0; _o < n; _o++) {
      var _n = e[_o];
      a[_o] = t(_n, _o);
    }

    return a;
  },
      c = function c(e, t) {
    var n = [];

    for (var _a = 0, _o2 = e.length; _a < _o2; _a++) {
      var _o3 = e[_a];
      t(_o3, _a) && n.push(_o3);
    }

    return n;
  },
      u = Object.keys,
      h = Object.hasOwnProperty,
      m = function m(e, t) {
    return h.call(e, t);
  };

  var p = tinymce.util.Tools.resolve("tinymce.Env");

  var d = function d(e) {
    var t = p.os.isMacOS() || p.os.isiOS(),
        n = t ? {
      alt: "&#x2325;",
      ctrl: "&#x2303;",
      shift: "&#x21E7;",
      meta: "&#x2318;",
      access: "&#x2303;&#x2325;"
    } : {
      meta: "Ctrl ",
      access: "Shift + Alt "
    },
        a = e.split("+"),
        o = l(a, function (e) {
      var t = e.toLowerCase().trim();
      return m(n, t) ? n[t] : e;
    });
    return t ? o.join("").replace(/\s/, "") : o.join("+");
  },
      g = [{
    shortcuts: ["Meta + B"],
    action: "Bold"
  }, {
    shortcuts: ["Meta + I"],
    action: "Italic"
  }, {
    shortcuts: ["Meta + U"],
    action: "Underline"
  }, {
    shortcuts: ["Meta + A"],
    action: "Select all"
  }, {
    shortcuts: ["Meta + Y", "Meta + Shift + Z"],
    action: "Redo"
  }, {
    shortcuts: ["Meta + Z"],
    action: "Undo"
  }, {
    shortcuts: ["Access + 1"],
    action: "Heading 1"
  }, {
    shortcuts: ["Access + 2"],
    action: "Heading 2"
  }, {
    shortcuts: ["Access + 3"],
    action: "Heading 3"
  }, {
    shortcuts: ["Access + 4"],
    action: "Heading 4"
  }, {
    shortcuts: ["Access + 5"],
    action: "Heading 5"
  }, {
    shortcuts: ["Access + 6"],
    action: "Heading 6"
  }, {
    shortcuts: ["Access + 7"],
    action: "Paragraph"
  }, {
    shortcuts: ["Access + 8"],
    action: "Div"
  }, {
    shortcuts: ["Access + 9"],
    action: "Address"
  }, {
    shortcuts: ["Alt + 0"],
    action: "Open help dialog"
  }, {
    shortcuts: ["Alt + F9"],
    action: "Focus to menubar"
  }, {
    shortcuts: ["Alt + F10"],
    action: "Focus to toolbar"
  }, {
    shortcuts: ["Alt + F11"],
    action: "Focus to element path"
  }, {
    shortcuts: ["Ctrl + F9"],
    action: "Focus to contextual toolbar"
  }, {
    shortcuts: ["Shift + Enter"],
    action: "Open popup menu for split buttons"
  }, {
    shortcuts: ["Meta + K"],
    action: "Insert link (if link plugin activated)"
  }, {
    shortcuts: ["Meta + S"],
    action: "Save (if save plugin activated)"
  }, {
    shortcuts: ["Meta + F"],
    action: "Find (if searchreplace plugin activated)"
  }, {
    shortcuts: ["Meta + Shift + F"],
    action: "Switch to or from fullscreen mode"
  }],
      y = function y() {
    return {
      name: "shortcuts",
      title: "Handy Shortcuts",
      items: [{
        type: "table",
        header: ["Action", "Shortcut"],
        cells: l(g, function (e) {
          var t = l(e.shortcuts, d).join(" or ");
          return [e.action, t];
        })
      }]
    };
  };

  var b = tinymce.util.Tools.resolve("tinymce.util.I18n");

  var k = l([{
    key: "advlist",
    name: "Advanced List"
  }, {
    key: "anchor",
    name: "Anchor"
  }, {
    key: "autolink",
    name: "Autolink"
  }, {
    key: "autoresize",
    name: "Autoresize"
  }, {
    key: "autosave",
    name: "Autosave"
  }, {
    key: "charmap",
    name: "Character Map"
  }, {
    key: "code",
    name: "Code"
  }, {
    key: "codesample",
    name: "Code Sample"
  }, {
    key: "colorpicker",
    name: "Color Picker"
  }, {
    key: "directionality",
    name: "Directionality"
  }, {
    key: "emoticons",
    name: "Emoticons"
  }, {
    key: "fullscreen",
    name: "Full Screen"
  }, {
    key: "help",
    name: "Help"
  }, {
    key: "image",
    name: "Image"
  }, {
    key: "importcss",
    name: "Import CSS"
  }, {
    key: "insertdatetime",
    name: "Insert Date/Time"
  }, {
    key: "link",
    name: "Link"
  }, {
    key: "lists",
    name: "Lists"
  }, {
    key: "media",
    name: "Media"
  }, {
    key: "nonbreaking",
    name: "Nonbreaking"
  }, {
    key: "pagebreak",
    name: "Page Break"
  }, {
    key: "preview",
    name: "Preview"
  }, {
    key: "quickbars",
    name: "Quick Toolbars"
  }, {
    key: "save",
    name: "Save"
  }, {
    key: "searchreplace",
    name: "Search and Replace"
  }, {
    key: "table",
    name: "Table"
  }, {
    key: "template",
    name: "Template"
  }, {
    key: "textcolor",
    name: "Text Color"
  }, {
    key: "visualblocks",
    name: "Visual Blocks"
  }, {
    key: "visualchars",
    name: "Visual Characters"
  }, {
    key: "wordcount",
    name: "Word Count"
  }, {
    key: "a11ychecker",
    name: "Accessibility Checker",
    type: "premium"
  }, {
    key: "advcode",
    name: "Advanced Code Editor",
    type: "premium"
  }, {
    key: "advtable",
    name: "Advanced Tables",
    type: "premium"
  }, {
    key: "autocorrect",
    name: "Autocorrect",
    type: "premium"
  }, {
    key: "casechange",
    name: "Case Change",
    type: "premium"
  }, {
    key: "checklist",
    name: "Checklist",
    type: "premium"
  }, {
    key: "editimage",
    name: "Enhanced Image Editing",
    type: "premium"
  }, {
    key: "mediaembed",
    name: "Enhanced Media Embed",
    type: "premium",
    slug: "introduction-to-mediaembed"
  }, {
    key: "export",
    name: "Export",
    type: "premium"
  }, {
    key: "formatpainter",
    name: "Format Painter",
    type: "premium"
  }, {
    key: "linkchecker",
    name: "Link Checker",
    type: "premium"
  }, {
    key: "mentions",
    name: "Mentions",
    type: "premium"
  }, {
    key: "pageembed",
    name: "Page Embed",
    type: "premium"
  }, {
    key: "permanentpen",
    name: "Permanent Pen",
    type: "premium"
  }, {
    key: "powerpaste",
    name: "PowerPaste",
    type: "premium",
    slug: "introduction-to-powerpaste"
  }, {
    key: "rtc",
    name: "Real-Time Collaboration",
    type: "premium",
    slug: "rtc-introduction"
  }, {
    key: "tinymcespellchecker",
    name: "Spell Checker Pro",
    type: "premium",
    slug: "introduction-to-tiny-spellchecker"
  }, {
    key: "tinycomments",
    name: "Tiny Comments",
    type: "premium",
    slug: "introduction-to-tiny-comments"
  }, {
    key: "tinydrive",
    name: "Tiny Drive",
    type: "premium",
    slug: "tinydrive-introduction"
  }, {
    key: "tableofcontents",
    name: "Table of Contents",
    type: "premium"
  }], function (e) {
    return _objectSpread({}, e, {
      type: e.type || "opensource",
      slug: e.slug || e.key
    });
  }),
      v = function v(e) {
    var t = function t(e) {
      return "<a href=\"".concat(e.url, "\" target=\"_blank\" rel=\"noopener\">").concat(e.name, "</a>");
    },
        n = function n(e) {
      var n = function (e) {
        var t = u(e.plugins),
            n = a(e);
        return o(n) ? t : c(t, function (e) {
          return !(function (e, t) {
            return s.call(e, t);
          }(n, e) > -1);
        });
      }(e),
          h = l(n, function (n) {
        return "<li>" + function (e, n) {
          return (a = k, o = function o(e) {
            return e.key === n;
          }, function (e, t, n) {
            for (var _a2 = 0, _o4 = e.length; _a2 < _o4; _a2++) {
              var _o5 = e[_a2];
              if (t(_o5, _a2)) return r.some(_o5);
              if (n(_o5, _a2)) break;
            }

            return r.none();
          }(a, o, i)).fold(function () {
            var a = e.plugins[n].getMetadata;
            return "function" == typeof a ? t(a()) : n;
          }, function (e) {
            var n = "premium" === e.type ? "".concat(e.name, "*") : e.name;
            return t({
              name: n,
              url: "https://www.tiny.cloud/docs/tinymce/6/".concat(e.slug, "/")
            });
          });
          var a, o;
        }(e, n) + "</li>";
      }),
          m = h.length,
          p = h.join("");

      return "<p><b>" + b.translate(["Plugins installed ({0}):", m]) + "</b></p><ul>" + p + "</ul>";
    },
        h = {
      type: "htmlpanel",
      presets: "document",
      html: [function (e) {
        return null == e ? "" : '<div data-mce-tabstop="1" tabindex="-1">' + n(e) + "</div>";
      }(e), function () {
        var e = c(k, function (_ref) {
          var e = _ref.key,
              t = _ref.type;
          return "autocorrect" !== e && "premium" === t;
        }),
            t = l(e, function (e) {
          return "<li>" + b.translate(e.name) + "</li>";
        }).join("");
        return '<div data-mce-tabstop="1" tabindex="-1"><p><b>' + b.translate("Premium plugins:") + "</b></p><ul>" + t + '<li class="tox-help__more-link" "><a href="https://www.tiny.cloud/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" rel="noopener" target="_blank">' + b.translate("Learn more...") + "</a></li></ul></div>";
      }()].join("")
    };

    return {
      name: "plugins",
      title: "Plugins",
      items: [h]
    };
  };

  var f = tinymce.util.Tools.resolve("tinymce.EditorManager");

  var w = function w(e, t) {
    return function () {
      var _ref2 = function (e, t) {
        var _objectSpread2;

        var a = y(),
            o = {
          name: "keyboardnav",
          title: "Keyboard Navigation",
          items: [{
            type: "htmlpanel",
            presets: "document",
            html: "<h1>Editor UI keyboard navigation</h1>\n\n<h2>Activating keyboard navigation</h2>\n\n<p>The sections of the outer UI of the editor - the menubar, toolbar, sidebar and footer - are all keyboard navigable. As such, there are multiple ways to activate keyboard navigation:</p>\n<ul>\n  <li>Focus the menubar: Alt + F9 (Windows) or &#x2325;F9 (MacOS)</li>\n  <li>Focus the toolbar: Alt + F10 (Windows) or &#x2325;F10 (MacOS)</li>\n  <li>Focus the footer: Alt + F11 (Windows) or &#x2325;F11 (MacOS)</li>\n</ul>\n\n<p>Focusing the menubar or toolbar will start keyboard navigation at the first item in the menubar or toolbar, which will be highlighted with a gray background. Focusing the footer will start keyboard navigation at the first item in the element path, which will be highlighted with an underline. </p>\n\n<h2>Moving between UI sections</h2>\n\n<p>When keyboard navigation is active, pressing tab will move the focus to the next major section of the UI, where applicable. These sections are:</p>\n<ul>\n  <li>the menubar</li>\n  <li>each group of the toolbar </li>\n  <li>the sidebar</li>\n  <li>the element path in the footer </li>\n  <li>the wordcount toggle button in the footer </li>\n  <li>the branding link in the footer </li>\n  <li>the editor resize handle in the footer</li>\n</ul>\n\n<p>Pressing shift + tab will move backwards through the same sections, except when moving from the footer to the toolbar. Focusing the element path then pressing shift + tab will move focus to the first toolbar group, not the last.</p>\n\n<h2>Moving within UI sections</h2>\n\n<p>Keyboard navigation within UI sections can usually be achieved using the left and right arrow keys. This includes:</p>\n<ul>\n  <li>moving between menus in the menubar</li>\n  <li>moving between buttons in a toolbar group</li>\n  <li>moving between items in the element path</li>\n</ul>\n\n<p>In all these UI sections, keyboard navigation will cycle within the section. For example, focusing the last button in a toolbar group then pressing right arrow will move focus to the first item in the same toolbar group. </p>\n\n<h1>Executing buttons</h1>\n\n<p>To execute a button, navigate the selection to the desired button and hit space or enter.</p>\n\n<h1>Opening, navigating and closing menus</h1>\n\n<p>When focusing a menubar button or a toolbar button with a menu, pressing space, enter or down arrow will open the menu. When the menu opens the first item will be selected. To move up or down the menu, press the up or down arrow key respectively. This is the same for submenus, which can also be opened and closed using the left and right arrow keys.</p>\n\n<p>To close any active menu, hit the escape key. When a menu is closed the selection will be restored to its previous selection. This also works for closing submenus.</p>\n\n<h1>Context toolbars and menus</h1>\n\n<p>To focus an open context toolbar such as the table context toolbar, press Ctrl + F9 (Windows) or &#x2303;F9 (MacOS).</p>\n\n<p>Context toolbar navigation is the same as toolbar navigation, and context menu navigation is the same as standard menu navigation.</p>\n\n<h1>Dialog navigation</h1>\n\n<p>There are two types of dialog UIs in TinyMCE: tabbed dialogs and non-tabbed dialogs.</p>\n\n<p>When a non-tabbed dialog is opened, the first interactive component in the dialog will be focused. Users can navigate between interactive components by pressing tab. This includes any footer buttons. Navigation will cycle back to the first dialog component if tab is pressed while focusing the last component in the dialog. Pressing shift + tab will navigate backwards.</p>\n\n<p>When a tabbed dialog is opened, the first button in the tab menu is focused. Pressing tab will navigate to the first interactive component in that tab, and will cycle through the tab\u2019s components, the footer buttons, then back to the tab button. To switch to another tab, focus the tab button for the current tab, then use the arrow keys to cycle through the tab buttons.</p>"
          }]
        },
            i = v(e),
            s = function () {
          var e, t;
          var n = '<a href="https://www.tiny.cloud/docs/tinymce/6/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" rel="noopener" target="_blank">TinyMCE ' + (e = f.majorVersion, t = f.minorVersion, (0 === e.indexOf("@") ? "X.X.X" : e + "." + t) + "</a>");
          return {
            name: "versions",
            title: "Version",
            items: [{
              type: "htmlpanel",
              html: "<p>" + b.translate(["You are using {0}", n]) + "</p>",
              presets: "document"
            }]
          };
        }(),
            c = _objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, a.name, a), _defineProperty(_objectSpread2, o.name, o), _defineProperty(_objectSpread2, i.name, i), _defineProperty(_objectSpread2, s.name, s), _objectSpread2), t.get());

        return r.from(n(e)).fold(function () {
          return function (e) {
            var t = u(e),
                n = t.indexOf("versions");
            return -1 !== n && (t.splice(n, 1), t.push("versions")), {
              tabs: e,
              names: t
            };
          }(c);
        }, function (e) {
          return function (e, t) {
            var n = {},
                a = l(e, function (e) {
              return "string" == typeof e ? (m(t, e) && (n[e] = t[e]), e) : (n[e.name] = e, e.name);
            });
            return {
              tabs: n,
              names: a
            };
          }(e, c);
        });
      }(e, t),
          a = _ref2.tabs,
          o = _ref2.names,
          i = {
        type: "tabpanel",
        tabs: function (e) {
          var t = [],
              n = function n(e) {
            t.push(e);
          };

          for (var _t = 0; _t < e.length; _t++) {
            e[_t].each(n);
          }

          return t;
        }(l(o, function (e) {
          return m(t = a, n = e) ? r.from(t[n]) : r.none();
          var t, n;
        }))
      };

      e.windowManager.open({
        title: "Help",
        size: "medium",
        body: i,
        buttons: [{
          type: "cancel",
          name: "close",
          text: "Close",
          primary: !0
        }],
        initialData: {}
      });
    };
  };

  e.add("help", function (e) {
    var t = function (e) {
      var t = {};
      return {
        get: function get() {
          return t;
        },
        set: function set(e) {
          t = e;
        }
      };
    }(),
        n = function (e) {
      return {
        addTab: function addTab(t) {
          var n = e.get();
          n[t.name] = t, e.set(n);
        }
      };
    }(t);

    (function (e) {
      (0, e.options.register)("help_tabs", {
        processor: "array"
      });
    })(e);

    var a = w(e, t);
    return function (e, t) {
      e.ui.registry.addButton("help", {
        icon: "help",
        tooltip: "Help",
        onAction: t
      }), e.ui.registry.addMenuItem("help", {
        text: "Help",
        icon: "help",
        shortcut: "Alt+0",
        onAction: t
      });
    }(e, a), function (e, t) {
      e.addCommand("mceHelp", t);
    }(e, a), e.shortcuts.add("Alt+0", "Open help dialog", "mceHelp"), n;
  });
}();