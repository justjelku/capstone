"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");
  var e = ("string", function (t) {
    return "string" === function (t) {
      var e = _typeof(t);

      return null === t ? "null" : "object" === e && Array.isArray(t) ? "array" : "object" === e && (r = o = t, (a = String).prototype.isPrototypeOf(r) || (null === (s = o.constructor) || void 0 === s ? void 0 : s.name) === a.name) ? "string" : e;
      var r, o, a, s;
    }(t);
  });
  var r = (void 0, function (t) {
    return undefined === t;
  });
  var o = tinymce.util.Tools.resolve("tinymce.util.Delay"),
      a = tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),
      s = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var n = function n(t) {
    var e = /^(\d+)([ms]?)$/.exec(t);
    return (e[2] ? {
      s: 1e3,
      m: 6e4
    }[e[2]] : 1) * parseInt(t, 10);
  },
      i = function i(t) {
    return function (e) {
      return e.options.get(t);
    };
  },
      u = i("autosave_ask_before_unload"),
      l = i("autosave_restore_when_empty"),
      c = i("autosave_interval"),
      m = i("autosave_retention"),
      d = function d(t) {
    var e = document.location;
    return t.options.get("autosave_prefix").replace(/{path}/g, e.pathname).replace(/{query}/g, e.search).replace(/{hash}/g, e.hash).replace(/{id}/g, t.id);
  },
      f = function f(t, e) {
    if (r(e)) return t.dom.isEmpty(t.getBody());
    {
      var _r = s.trim(e);

      if ("" === _r) return !0;
      {
        var _e = new DOMParser().parseFromString(_r, "text/html");

        return t.dom.isEmpty(_e);
      }
    }
  },
      v = function v(t) {
    var e = parseInt(a.getItem(d(t) + "time"), 10) || 0;
    return !(new Date().getTime() - e > m(t) && (p(t, !1), 1));
  },
      p = function p(t, e) {
    var r = d(t);
    a.removeItem(r + "draft"), a.removeItem(r + "time"), !1 !== e && function (t) {
      t.dispatch("RemoveDraft");
    }(t);
  },
      g = function g(t) {
    var e = d(t);
    !f(t) && t.isDirty() && (a.setItem(e + "draft", t.getContent({
      format: "raw",
      no_events: !0
    })), a.setItem(e + "time", new Date().getTime().toString()), function (t) {
      t.dispatch("StoreDraft");
    }(t));
  },
      y = function y(t) {
    var e = d(t);
    v(t) && (t.setContent(a.getItem(e + "draft"), {
      format: "raw"
    }), function (t) {
      t.dispatch("RestoreDraft");
    }(t));
  },
      D = function D(t) {
    t.undoManager.transact(function () {
      y(t), p(t);
    }), t.focus();
  };

  var h = tinymce.util.Tools.resolve("tinymce.EditorManager");

  var _ = function _(t) {
    return function (e) {
      e.setEnabled(v(t));

      var r = function r() {
        return e.setEnabled(v(t));
      };

      return t.on("StoreDraft RestoreDraft RemoveDraft", r), function () {
        return t.off("StoreDraft RestoreDraft RemoveDraft", r);
      };
    };
  };

  t.add("autosave", function (t) {
    return function (t) {
      var r = t.options.register,
          o = function o(t) {
        var r = e(t);
        return r ? {
          value: n(t),
          valid: r
        } : {
          valid: !1,
          message: "Must be a string."
        };
      };

      r("autosave_ask_before_unload", {
        processor: "boolean",
        "default": !0
      }), r("autosave_prefix", {
        processor: "string",
        "default": "tinymce-autosave-{path}{query}{hash}-{id}-"
      }), r("autosave_restore_when_empty", {
        processor: "boolean",
        "default": !1
      }), r("autosave_interval", {
        processor: o,
        "default": "30s"
      }), r("autosave_retention", {
        processor: o,
        "default": "20m"
      });
    }(t), function (t) {
      t.editorManager.on("BeforeUnload", function (t) {
        var e;
        s.each(h.get(), function (t) {
          t.plugins.autosave && t.plugins.autosave.storeDraft(), !e && t.isDirty() && u(t) && (e = t.translate("You have unsaved changes are you sure you want to navigate away?"));
        }), e && (t.preventDefault(), t.returnValue = e);
      });
    }(t), function (t) {
      (function (t) {
        var e = c(t);
        o.setEditorInterval(t, function () {
          g(t);
        }, e);
      })(t), t.ui.registry.addButton("restoredraft", {
        tooltip: "Restore last draft",
        icon: "restore-draft",
        onAction: function onAction() {
          D(t);
        },
        onSetup: _(t)
      }), t.ui.registry.addMenuItem("restoredraft", {
        text: "Restore last draft",
        icon: "restore-draft",
        onAction: function onAction() {
          D(t);
        },
        onSetup: _(t)
      });
    }(t), t.on("init", function () {
      l(t) && t.dom.isEmpty(t.getBody()) && y(t);
    }), function (t) {
      return {
        hasDraft: function hasDraft() {
          return v(t);
        },
        storeDraft: function storeDraft() {
          return g(t);
        },
        restoreDraft: function restoreDraft() {
          return y(t);
        },
        removeDraft: function removeDraft(e) {
          return p(t, e);
        },
        isEmpty: function isEmpty(e) {
          return f(t, e);
        }
      };
    }(t);
  });
}();