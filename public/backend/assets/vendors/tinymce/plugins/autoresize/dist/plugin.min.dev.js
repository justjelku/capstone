"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      t = tinymce.util.Tools.resolve("tinymce.Env");

  var o = function o(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      n = o("min_height"),
      s = o("max_height"),
      i = o("autoresize_overflow_padding"),
      r = o("autoresize_bottom_margin"),
      l = function l(e, t) {
    var o = e.getBody();
    o && (o.style.overflowY = t ? "" : "hidden", t || (o.scrollTop = 0));
  },
      a = function a(e, t, o, n) {
    var s = parseInt(e.getStyle(t, o, n), 10);
    return isNaN(s) ? 0 : s;
  },
      g = function g(e, o, i) {
    var c;
    var u = e.dom,
        d = e.getDoc();
    if (!d) return;
    if (function (e) {
      return e.plugins.fullscreen && e.plugins.fullscreen.isFullscreen();
    }(e)) return void l(e, !0);
    var f = d.documentElement,
        m = r(e),
        p = null !== (c = n(e)) && void 0 !== c ? c : e.getElement().offsetHeight;
    var h = p;
    var y = a(u, f, "margin-top", !0),
        v = a(u, f, "margin-bottom", !0);
    var C = f.offsetHeight + y + v + m;
    C < 0 && (C = 0);
    var S = e.getContainer().offsetHeight - e.getContentAreaContainer().offsetHeight;
    C + S > p && (h = C + S);
    var z = s(e);

    if (z && h > z ? (h = z, l(e, !0)) : l(e, !1), h !== o.get()) {
      var _n = h - o.get();

      if (u.setStyle(e.getContainer(), "height", h + "px"), o.set(h), function (e) {
        e.dispatch("ResizeEditor");
      }(e), t.browser.isSafari() && (t.os.isMacOS() || t.os.isiOS())) {
        var _t = e.getWin();

        _t.scrollTo(_t.pageXOffset, _t.pageYOffset);
      }

      e.hasFocus() && function (e) {
        if ("setcontent" === (null == e ? void 0 : e.type.toLowerCase())) {
          var _t2 = e;
          return !0 === _t2.selection || !0 === _t2.paste;
        }

        return !1;
      }(i) && e.selection.scrollIntoView(), (t.browser.isSafari() || t.browser.isChromium()) && _n < 0 && g(e, o, i);
    }
  };

  e.add("autoresize", function (e) {
    if (function (e) {
      var t = e.options.register;
      t("autoresize_overflow_padding", {
        processor: "number",
        "default": 1
      }), t("autoresize_bottom_margin", {
        processor: "number",
        "default": 50
      });
    }(e), e.options.isSet("resize") || e.options.set("resize", !1), !e.inline) {
      var _t3 = function (e) {
        var t = 0;
        return {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t = e;
          }
        };
      }();

      (function (e, t) {
        e.addCommand("mceAutoResize", function () {
          g(e, t);
        });
      })(e, _t3), function (e, t) {
        e.on("init", function () {
          var t = i(e),
              o = e.dom;
          o.setStyles(e.getDoc().documentElement, {
            height: "auto"
          }), o.setStyles(e.getBody(), {
            paddingLeft: t,
            paddingRight: t,
            "min-height": 0
          });
        }), e.on("NodeChange SetContent keyup FullscreenStateChanged ResizeContent", function (o) {
          g(e, t, o);
        });
      }(e, _t3);
    }
  });
}();