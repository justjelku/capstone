"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var s = function s(t, _s, o) {
    t.dom.toggleClass(t.getBody(), "mce-visualblocks"), o.set(!o.get()), function (t, s) {
      t.dispatch("VisualBlocks", {
        state: s
      });
    }(t, o.get());
  },
      o = ("visualblocks_default_state", function (t) {
    return t.options.get("visualblocks_default_state");
  });

  var e = function e(t, s) {
    return function (o) {
      o.setActive(s.get());

      var e = function e(t) {
        return o.setActive(t.state);
      };

      return t.on("VisualBlocks", e), function () {
        return t.off("VisualBlocks", e);
      };
    };
  };

  t.add("visualblocks", function (t, l) {
    (function (t) {
      (0, t.options.register)("visualblocks_default_state", {
        processor: "boolean",
        "default": !1
      });
    })(t);

    var a = function (t) {
      var s = !1;
      return {
        get: function get() {
          return s;
        },
        set: function set(t) {
          s = t;
        }
      };
    }();

    (function (t, o, e) {
      t.addCommand("mceVisualBlocks", function () {
        s(t, 0, e);
      });
    })(t, 0, a), function (t, s) {
      var o = function o() {
        return t.execCommand("mceVisualBlocks");
      };

      t.ui.registry.addToggleButton("visualblocks", {
        icon: "visualblocks",
        tooltip: "Show blocks",
        onAction: o,
        onSetup: e(t, s)
      }), t.ui.registry.addToggleMenuItem("visualblocks", {
        text: "Show blocks",
        icon: "visualblocks",
        onAction: o,
        onSetup: e(t, s)
      });
    }(t, a), function (t, e, l) {
      t.on("PreviewFormats AfterPreviewFormats", function (s) {
        l.get() && t.dom.toggleClass(t.getBody(), "mce-visualblocks", "afterpreviewformats" === s.type);
      }), t.on("init", function () {
        o(t) && s(t, 0, l);
      });
    }(t, 0, a);
  });
}();