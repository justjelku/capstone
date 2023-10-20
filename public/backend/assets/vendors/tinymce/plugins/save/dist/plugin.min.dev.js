"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager");
  var n = ("function", function (e) {
    return "function" == typeof e;
  });
  var o = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      t = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var a = function a(e) {
    return function (n) {
      return n.options.get(e);
    };
  },
      c = a("save_enablewhendirty"),
      i = a("save_onsavecallback"),
      s = a("save_oncancelcallback"),
      r = function r(e, n) {
    e.notificationManager.open({
      text: n,
      type: "error"
    });
  },
      l = function l(e) {
    return function (n) {
      var o = function o() {
        n.setEnabled(!c(e) || e.isDirty());
      };

      return o(), e.on("NodeChange dirty", o), function () {
        return e.off("NodeChange dirty", o);
      };
    };
  };

  e.add("save", function (e) {
    (function (e) {
      var n = e.options.register;
      n("save_enablewhendirty", {
        processor: "boolean",
        "default": !0
      }), n("save_onsavecallback", {
        processor: "function"
      }), n("save_oncancelcallback", {
        processor: "function"
      });
    })(e), function (e) {
      e.ui.registry.addButton("save", {
        icon: "save",
        tooltip: "Save",
        enabled: !1,
        onAction: function onAction() {
          return e.execCommand("mceSave");
        },
        onSetup: l(e)
      }), e.ui.registry.addButton("cancel", {
        icon: "cancel",
        tooltip: "Cancel",
        enabled: !1,
        onAction: function onAction() {
          return e.execCommand("mceCancel");
        },
        onSetup: l(e)
      }), e.addShortcut("Meta+S", "", "mceSave");
    }(e), function (e) {
      e.addCommand("mceSave", function () {
        (function (e) {
          var t = o.DOM.getParent(e.id, "form");
          if (c(e) && !e.isDirty()) return;
          e.save();
          var a = i(e);
          if (n(a)) return a.call(e, e), void e.nodeChanged();
          t ? (e.setDirty(!1), t.onsubmit && !t.onsubmit() || ("function" == typeof t.submit ? t.submit() : r(e, "Error: Form submit field collision.")), e.nodeChanged()) : r(e, "Error: No form element found.");
        })(e);
      }), e.addCommand("mceCancel", function () {
        (function (e) {
          var o = t.trim(e.startContent),
              a = s(e);
          n(a) ? a.call(e, e) : e.resetContent(o);
        })(e);
      });
    }(e);
  });
}();