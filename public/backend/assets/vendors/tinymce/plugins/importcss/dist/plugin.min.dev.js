"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var t = function t(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (s = r = e, (o = String).prototype.isPrototypeOf(s) || (null === (n = r.constructor) || void 0 === n ? void 0 : n.name) === o.name) ? "string" : t;
        var s, r, o, n;
      }(t) === e;
    };
  },
      s = t("string"),
      r = t("object"),
      o = t("array"),
      n = ("function", function (e) {
    return "function" == typeof e;
  });

  var c = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      i = tinymce.util.Tools.resolve("tinymce.EditorManager"),
      l = tinymce.util.Tools.resolve("tinymce.Env"),
      a = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var p = function p(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      u = p("importcss_merge_classes"),
      m = p("importcss_exclusive"),
      f = p("importcss_selector_converter"),
      y = p("importcss_selector_filter"),
      d = p("importcss_groups"),
      h = p("importcss_append"),
      _ = p("importcss_file_filter"),
      g = p("skin"),
      v = p("skin_url"),
      b = Array.prototype.push,
      x = /^\.(?:ephox|tiny-pageembed|mce)(?:[.-]+\w+)+$/,
      T = function T(e) {
    return s(e) ? function (t) {
      return -1 !== t.indexOf(e);
    } : e instanceof RegExp ? function (t) {
      return e.test(t);
    } : e;
  },
      S = function S(e, t) {
    var s;
    var r = /^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(t);
    if (!r) return;
    var o = r[1],
        n = r[2].substr(1).split(".").join(" "),
        c = a.makeMap("a,img");
    return r[1] ? (s = {
      title: t
    }, e.schema.getTextBlockElements()[o] ? s.block = o : e.schema.getBlockElements()[o] || c[o.toLowerCase()] ? s.selector = o : s.inline = o) : r[2] && (s = {
      inline: "span",
      title: t.substr(1),
      classes: n
    }), u(e) ? s.classes = n : s.attributes = {
      "class": n
    }, s;
  },
      k = function k(e, t) {
    return null === t || m(e);
  },
      w = function w(e) {
    e.on("init", function () {
      var t = function () {
        var e = [],
            t = [],
            s = {};
        return {
          addItemToGroup: function addItemToGroup(e, r) {
            s[e] ? s[e].push(r) : (t.push(e), s[e] = [r]);
          },
          addItem: function addItem(t) {
            e.push(t);
          },
          toFormats: function toFormats() {
            return (r = t, n = function n(e) {
              var t = s[e];
              return 0 === t.length ? [] : [{
                title: e,
                items: t
              }];
            }, function (e) {
              var t = [];

              for (var _s = 0, _r = e.length; _s < _r; ++_s) {
                if (!o(e[_s])) throw new Error("Arr.flatten item " + _s + " was not an array, input: " + e);
                b.apply(t, e[_s]);
              }

              return t;
            }(function (e, t) {
              var s = e.length,
                  r = new Array(s);

              for (var _o = 0; _o < s; _o++) {
                var _s2 = e[_o];
                r[_o] = t(_s2, _o);
              }

              return r;
            }(r, n))).concat(e);
            var r, n;
          }
        };
      }(),
          r = {},
          n = T(y(e)),
          p = function (e) {
        return a.map(e, function (e) {
          return a.extend({}, e, {
            original: e,
            selectors: {},
            filter: T(e.filter)
          });
        });
      }(d(e)),
          u = function u(t, s) {
        if (function (e, t, s, r) {
          return !(k(e, s) ? t in r : t in s.selectors);
        }(e, t, s, r)) {
          (function (e, t, s, r) {
            k(e, s) ? r[t] = !0 : s.selectors[t] = !0;
          })(e, t, s, r);

          var _o2 = function (e, t, s, r) {
            var o;
            return o = r && r.selector_converter ? r.selector_converter : f(e) ? f(e) : function () {
              return S(e, s);
            }, o.call(t, s, r);
          }(e, e.plugins.importcss, t, s);

          if (_o2) {
            var _t = _o2.name || c.DOM.uniqueId();

            return e.formatter.register(_t, _o2), {
              title: _o2.title,
              format: _t
            };
          }
        }

        return null;
      };

      a.each(function (e, t, r) {
        var o = [],
            n = {},
            c = function c(t, n) {
          var p,
              u = t.href;

          if (u = function (e) {
            var t = l.cacheSuffix;
            return s(e) && (e = e.replace("?" + t, "").replace("&" + t, "")), e;
          }(u), u && r(u, n) && !function (e, t) {
            var s = g(e);

            if (s) {
              var _r2 = v(e),
                  _o3 = _r2 ? e.documentBaseURI.toAbsolute(_r2) : i.baseURL + "/skins/ui/" + s,
                  _n = i.baseURL + "/skins/content/";

              return t === _o3 + "/content" + (e.inline ? ".inline" : "") + ".min.css" || -1 !== t.indexOf(_n);
            }

            return !1;
          }(e, u)) {
            a.each(t.imports, function (e) {
              c(e, !0);
            });

            try {
              p = t.cssRules || t.rules;
            } catch (e) {}

            a.each(p, function (e) {
              e.styleSheet ? c(e.styleSheet, !0) : e.selectorText && a.each(e.selectorText.split(","), function (e) {
                o.push(a.trim(e));
              });
            });
          }
        };

        a.each(e.contentCSS, function (e) {
          n[e] = !0;
        }), r || (r = function r(e, t) {
          return t || n[e];
        });

        try {
          a.each(t.styleSheets, function (e) {
            c(e);
          });
        } catch (e) {}

        return o;
      }(e, e.getDoc(), T(_(e))), function (e) {
        if (!x.test(e) && (!n || n(e))) {
          var _s3 = function (e, t) {
            return a.grep(e, function (e) {
              return !e.filter || e.filter(t);
            });
          }(p, e);

          if (_s3.length > 0) a.each(_s3, function (s) {
            var r = u(e, s);
            r && t.addItemToGroup(s.title, r);
          });else {
            var _s4 = u(e, null);

            _s4 && t.addItem(_s4);
          }
        }
      });
      var m = t.toFormats();
      e.dispatch("addStyleModifications", {
        items: m,
        replace: !h(e)
      });
    });
  };

  e.add("importcss", function (e) {
    return function (e) {
      var t = e.options.register,
          o = function o(e) {
        return s(e) || n(e) || r(e);
      };

      t("importcss_merge_classes", {
        processor: "boolean",
        "default": !0
      }), t("importcss_exclusive", {
        processor: "boolean",
        "default": !0
      }), t("importcss_selector_converter", {
        processor: "function"
      }), t("importcss_selector_filter", {
        processor: o
      }), t("importcss_file_filter", {
        processor: o
      }), t("importcss_groups", {
        processor: "object[]"
      }), t("importcss_append", {
        processor: "boolean",
        "default": !1
      });
    }(e), w(e), function (e) {
      return {
        convertSelectorToFormat: function convertSelectorToFormat(t) {
          return S(e, t);
        }
      };
    }(e);
  });
}();