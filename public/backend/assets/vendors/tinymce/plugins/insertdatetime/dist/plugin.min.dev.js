"use strict";

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
      r = t("insertdatetime_dateformat"),
      a = t("insertdatetime_timeformat"),
      n = t("insertdatetime_formats"),
      s = t("insertdatetime_element"),
      i = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),
      o = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
      l = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      m = "January February March April May June July August September October November December".split(" "),
      c = function c(e, t) {
    if ((e = "" + e).length < t) for (var _r = 0; _r < t - e.length; _r++) {
      e = "0" + e;
    }
    return e;
  },
      d = function d(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace("%D", "%m/%d/%Y")).replace("%r", "%I:%M:%S %p")).replace("%Y", "" + r.getFullYear())).replace("%y", "" + r.getYear())).replace("%m", c(r.getMonth() + 1, 2))).replace("%d", c(r.getDate(), 2))).replace("%H", "" + c(r.getHours(), 2))).replace("%M", "" + c(r.getMinutes(), 2))).replace("%S", "" + c(r.getSeconds(), 2))).replace("%I", "" + ((r.getHours() + 11) % 12 + 1))).replace("%p", r.getHours() < 12 ? "AM" : "PM")).replace("%B", "" + e.translate(m[r.getMonth()]))).replace("%b", "" + e.translate(l[r.getMonth()]))).replace("%A", "" + e.translate(o[r.getDay()]))).replace("%a", "" + e.translate(i[r.getDay()]))).replace("%%", "%");
  },
      u = function u(e, t) {
    if (s(e)) {
      var _r2 = d(e, t);

      var _a;

      _a = /%[HMSIp]/.test(t) ? d(e, "%Y-%m-%dT%H:%M") : d(e, "%Y-%m-%d");

      var _n = e.dom.getParent(e.selection.getStart(), "time");

      _n ? function (e, t, r, a) {
        var n = e.dom.create("time", {
          datetime: r
        }, a);
        t.parentNode.insertBefore(n, t), e.dom.remove(t), e.selection.select(n, !0), e.selection.collapse(!1);
      }(e, _n, _a, _r2) : e.insertContent('<time datetime="' + _a + '">' + _r2 + "</time>");
    } else e.insertContent(d(e, t));
  };

  var p = tinymce.util.Tools.resolve("tinymce.util.Tools");
  e.add("insertdatetime", function (e) {
    (function (e) {
      var t = e.options.register;
      t("insertdatetime_dateformat", {
        processor: "string",
        "default": e.translate("%Y-%m-%d")
      }), t("insertdatetime_timeformat", {
        processor: "string",
        "default": e.translate("%H:%M:%S")
      }), t("insertdatetime_formats", {
        processor: "string[]",
        "default": ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"]
      }), t("insertdatetime_element", {
        processor: "boolean",
        "default": !1
      });
    })(e), function (e) {
      e.addCommand("mceInsertDate", function (t, a) {
        u(e, null != a ? a : r(e));
      }), e.addCommand("mceInsertTime", function (t, r) {
        u(e, null != r ? r : a(e));
      });
    }(e), function (e) {
      var t = n(e),
          r = function (e) {
        var t = e;
        return {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t = e;
          }
        };
      }(function (e) {
        var t = n(e);
        return t.length > 0 ? t[0] : a(e);
      }(e)),
          s = function s(t) {
        return e.execCommand("mceInsertDate", !1, t);
      };

      e.ui.registry.addSplitButton("insertdatetime", {
        icon: "insert-time",
        tooltip: "Insert date/time",
        select: function select(e) {
          return e === r.get();
        },
        fetch: function fetch(r) {
          r(p.map(t, function (t) {
            return {
              type: "choiceitem",
              text: d(e, t),
              value: t
            };
          }));
        },
        onAction: function onAction(e) {
          s(r.get());
        },
        onItemAction: function onItemAction(e, t) {
          r.set(t), s(t);
        }
      });

      var i = function i(e) {
        return function () {
          r.set(e), s(e);
        };
      };

      e.ui.registry.addNestedMenuItem("insertdatetime", {
        icon: "insert-time",
        text: "Date/time",
        getSubmenuItems: function getSubmenuItems() {
          return p.map(t, function (t) {
            return {
              type: "menuitem",
              text: d(e, t),
              onAction: i(t)
            };
          });
        }
      });
    }(e);
  });
}();