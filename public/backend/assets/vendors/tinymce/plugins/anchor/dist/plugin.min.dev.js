"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      t = tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),
      n = tinymce.util.Tools.resolve("tinymce.util.Tools");
  var o = ("allow_html_in_named_anchor", function (e) {
    return e.options.get("allow_html_in_named_anchor");
  });

  var a = "a:not([href])",
      r = function r(e) {
    return !e;
  },
      i = function i(e) {
    return e.getAttribute("id") || e.getAttribute("name") || "";
  },
      l = function l(e) {
    return function (e) {
      return e && "a" === e.nodeName.toLowerCase();
    }(e) && !e.getAttribute("href") && "" !== i(e);
  },
      s = function s(e) {
    return e.dom.getParent(e.selection.getStart(), a);
  },
      c = function c(e, a) {
    var r = s(e);
    r ? function (e, t, n) {
      n.removeAttribute("name"), n.id = t, e.addVisual(), e.undoManager.add();
    }(e, a, r) : function (e, a) {
      e.undoManager.transact(function () {
        o(e) || e.selection.collapse(!0), e.selection.isCollapsed() ? e.insertContent(e.dom.createHTML("a", {
          id: a
        })) : (function (e) {
          var o = e.dom;
          t(o).walk(e.selection.getRng(), function (e) {
            n.each(e, function (e) {
              var t;
              l(t = e) && !t.firstChild && o.remove(e, !1);
            });
          });
        }(e), e.formatter.remove("namedAnchor", null, null, !0), e.formatter.apply("namedAnchor", {
          value: a
        }), e.addVisual());
      });
    }(e, a), e.focus();
  },
      d = function d(e) {
    return function (e) {
      return e && r(e.attr("href")) && !r(e.attr("id") || e.attr("name"));
    }(e) && !e.firstChild;
  },
      m = function m(e) {
    return function (t) {
      for (var _n = 0; _n < t.length; _n++) {
        var _o = t[_n];
        d(_o) && _o.attr("contenteditable", e);
      }
    };
  };

  e.add("anchor", function (e) {
    (function (e) {
      (0, e.options.register)("allow_html_in_named_anchor", {
        processor: "boolean",
        "default": !1
      });
    })(e), function (e) {
      e.on("PreInit", function () {
        e.parser.addNodeFilter("a", m("false")), e.serializer.addNodeFilter("a", m(null));
      });
    }(e), function (e) {
      e.addCommand("mceAnchor", function () {
        (function (e) {
          var t = function (e) {
            var t = s(e);
            return t ? i(t) : "";
          }(e);

          e.windowManager.open({
            title: "Anchor",
            size: "normal",
            body: {
              type: "panel",
              items: [{
                name: "id",
                type: "input",
                label: "ID",
                placeholder: "example"
              }]
            },
            buttons: [{
              type: "cancel",
              name: "cancel",
              text: "Cancel"
            }, {
              type: "submit",
              name: "save",
              text: "Save",
              primary: !0
            }],
            initialData: {
              id: t
            },
            onSubmit: function onSubmit(t) {
              (function (e, t) {
                return /^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t) ? (c(e, t), !0) : (e.windowManager.alert("ID should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."), !1);
              })(e, t.getData().id) && t.close();
            }
          });
        })(e);
      });
    }(e), function (e) {
      e.ui.registry.addToggleButton("anchor", {
        icon: "bookmark",
        tooltip: "Anchor",
        onAction: function onAction() {
          return e.execCommand("mceAnchor");
        },
        onSetup: function onSetup(t) {
          return e.selection.selectorChangedWithUnbind("a:not([href])", t.setActive).unbind;
        }
      }), e.ui.registry.addMenuItem("anchor", {
        icon: "bookmark",
        text: "Anchor...",
        onAction: function onAction() {
          return e.execCommand("mceAnchor");
        }
      });
    }(e), e.on("PreInit", function () {
      (function (e) {
        e.formatter.register("namedAnchor", {
          inline: "a",
          selector: a,
          remove: "all",
          split: !0,
          deep: !0,
          attributes: {
            id: "%value"
          },
          onmatch: function onmatch(e, t, n) {
            return l(e);
          }
        });
      })(e);
    });
  });
}();