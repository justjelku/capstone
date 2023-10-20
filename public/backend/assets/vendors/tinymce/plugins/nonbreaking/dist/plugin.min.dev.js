"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var n = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var e = function e(n) {
    return function (e) {
      return _typeof(e) === n;
    };
  },
      a = e("boolean"),
      o = e("number"),
      t = function t(n) {
    return function (e) {
      return e.options.get(n);
    };
  },
      i = t("nonbreaking_force_tab"),
      r = t("nonbreaking_wrap"),
      s = function s(n, e) {
    var a = "";

    for (var _o = 0; _o < e; _o++) {
      a += n;
    }

    return a;
  },
      c = function c(n, e) {
    var a = r(n) || n.plugins.visualchars ? "<span class=\"".concat(function (n) {
      return !!n.plugins.visualchars && n.plugins.visualchars.isEnabled();
    }(n) ? "mce-nbsp-wrap mce-nbsp" : "mce-nbsp-wrap", "\" contenteditable=\"false\">").concat(s("&nbsp;", e), "</span>") : s("&nbsp;", e);
    n.undoManager.transact(function () {
      return n.insertContent(a);
    });
  };

  var l = tinymce.util.Tools.resolve("tinymce.util.VK");
  n.add("nonbreaking", function (n) {
    (function (n) {
      var e = n.options.register;
      e("nonbreaking_force_tab", {
        processor: function processor(n) {
          return a(n) ? {
            value: n ? 3 : 0,
            valid: !0
          } : o(n) ? {
            value: n,
            valid: !0
          } : {
            valid: !1,
            message: "Must be a boolean or number."
          };
        },
        "default": !1
      }), e("nonbreaking_wrap", {
        processor: "boolean",
        "default": !0
      });
    })(n), function (n) {
      n.addCommand("mceNonBreaking", function () {
        c(n, 1);
      });
    }(n), function (n) {
      var e = function e() {
        return n.execCommand("mceNonBreaking");
      };

      n.ui.registry.addButton("nonbreaking", {
        icon: "non-breaking",
        tooltip: "Nonbreaking space",
        onAction: e
      }), n.ui.registry.addMenuItem("nonbreaking", {
        icon: "non-breaking",
        text: "Nonbreaking space",
        onAction: e
      });
    }(n), function (n) {
      var e = i(n);
      e > 0 && n.on("keydown", function (a) {
        if (a.keyCode === l.TAB && !a.isDefaultPrevented()) {
          if (a.shiftKey) return;
          a.preventDefault(), a.stopImmediatePropagation(), c(n, e);
        }
      });
    }(n);
  });
}();