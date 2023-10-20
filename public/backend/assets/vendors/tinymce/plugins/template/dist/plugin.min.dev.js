"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (a = n = e, (r = String).prototype.isPrototypeOf(a) || (null === (s = n.constructor) || void 0 === s ? void 0 : s.name) === r.name) ? "string" : t;
        var a, n, r, s;
      }(t) === e;
    };
  },
      a = t("string"),
      n = t("object"),
      r = t("array"),
      s = ("function", function (e) {
    return "function" == typeof e;
  });

  var l = (!1, function () {
    return false;
  });
  var o = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var c = function c(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      i = c("template_cdate_classes"),
      u = c("template_mdate_classes"),
      m = c("template_selected_content_classes"),
      p = c("template_preview_replace_values"),
      d = c("template_replace_values"),
      h = c("templates"),
      g = c("template_cdate_format"),
      v = c("template_mdate_format"),
      f = c("content_style"),
      y = c("content_css_cors"),
      _ = c("body_class"),
      b = function b(e, t) {
    if ((e = "" + e).length < t) for (var _a = 0; _a < t - e.length; _a++) {
      e = "0" + e;
    }
    return e;
  },
      M = function M(e, t) {
    var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    var n = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),
        r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
        s = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        l = "January February March April May June July August September October November December".split(" ");
    return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace("%D", "%m/%d/%Y")).replace("%r", "%I:%M:%S %p")).replace("%Y", "" + a.getFullYear())).replace("%y", "" + a.getYear())).replace("%m", b(a.getMonth() + 1, 2))).replace("%d", b(a.getDate(), 2))).replace("%H", "" + b(a.getHours(), 2))).replace("%M", "" + b(a.getMinutes(), 2))).replace("%S", "" + b(a.getSeconds(), 2))).replace("%I", "" + ((a.getHours() + 11) % 12 + 1))).replace("%p", a.getHours() < 12 ? "AM" : "PM")).replace("%B", "" + e.translate(l[a.getMonth()]))).replace("%b", "" + e.translate(s[a.getMonth()]))).replace("%A", "" + e.translate(r[a.getDay()]))).replace("%a", "" + e.translate(n[a.getDay()]))).replace("%%", "%");
  };

  var T =
  /*#__PURE__*/
  function () {
    function T(e, t) {
      _classCallCheck(this, T);

      this.tag = e, this.value = t;
    }

    _createClass(T, [{
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
        return this.tag ? T.some(e(this.value)) : T.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : T.none();
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
        return !this.tag || e(this.value) ? this : T.none();
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
        return new T(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return T.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return null == e ? T.none() : T.some(e);
      }
    }]);

    return T;
  }();

  T.singletonNone = new T(!1);

  var x = Object.hasOwnProperty,
      S = {
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&#039;"
  },
      w = function w(e) {
    return e.replace(/["'<>&]/g, function (e) {
      return (t = S, a = e, function (e, t) {
        return x.call(e, t);
      }(t, a) ? T.from(t[a]) : T.none()).getOr(e);
      var t, a;
    });
  },
      C = function C(e, t, a) {
    return function (a, n) {
      for (var _n = 0, _s = a.length; _n < _s; _n++) {
        if (r = a[_n], e.hasClass(t, r)) return !0;
      }

      var r;
      return !1;
    }(a.split(/\s+/));
  },
      O = function O(e, t) {
    return o.each(t, function (t, a) {
      s(t) && (t = t(a)), e = e.replace(new RegExp("\\{\\$" + a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\}", "g"), t);
    }), e;
  },
      A = function A(e, t) {
    var a = e.dom,
        n = d(e);
    o.each(a.select("*", t), function (e) {
      o.each(n, function (t, n) {
        a.hasClass(e, n) && s(t) && t(e);
      });
    });
  },
      D = function D(e, t, a) {
    var n = e.dom,
        r = e.selection.getContent();
    a = O(a, d(e));
    var s = n.create("div", null, a);
    var l = n.select(".mceTmpl", s);
    l && l.length > 0 && (s = n.create("div", null), s.appendChild(l[0].cloneNode(!0))), o.each(n.select("*", s), function (t) {
      C(n, t, i(e)) && (t.innerHTML = M(e, g(e))), C(n, t, u(e)) && (t.innerHTML = M(e, v(e))), C(n, t, m(e)) && (t.innerHTML = r);
    }), A(e, s), e.execCommand("mceInsertContent", !1, s.innerHTML), e.addVisual();
  };

  var I = tinymce.util.Tools.resolve("tinymce.Env");

  var N = function N(e, t) {
    var a = function a(e, t) {
      return function (e, t, a) {
        for (var _n2 = 0, _r = e.length; _n2 < _r; _n2++) {
          var _r2 = e[_n2];
          if (t(_r2, _n2)) return T.some(_r2);
          if (a(_r2, _n2)) break;
        }

        return T.none();
      }(e, function (e) {
        return e.text === t;
      }, l);
    },
        n = function n(t) {
      e.windowManager.alert("Could not load the specified template.", function () {
        return t.focus("template");
      });
    },
        r = function r(e) {
      return e.value.url.fold(function () {
        return Promise.resolve(e.value.content.getOr(""));
      }, function (e) {
        return fetch(e).then(function (e) {
          return e.ok ? e.text() : Promise.reject();
        });
      });
    },
        s = function s(e, t) {
      return function (s, l) {
        if ("template" === l.name) {
          var _l = s.getData().template;
          a(e, _l).each(function (e) {
            s.block("Loading..."), r(e).then(function (a) {
              t(s, e, a);
            })["catch"](function () {
              t(s, e, ""), s.setEnabled("save", !1), n(s);
            });
          });
        }
      };
    },
        c = function c(t) {
      return function (s) {
        var l = s.getData();
        a(t, l.template).each(function (t) {
          r(t).then(function (t) {
            e.execCommand("mceInsertTemplate", !1, t), s.close();
          })["catch"](function () {
            s.setEnabled("save", !1), n(s);
          });
        });
      };
    };

    (function () {
      if (!t || 0 === t.length) {
        var _t = e.translate("No templates defined.");

        return e.notificationManager.open({
          text: _t,
          type: "info"
        }), T.none();
      }

      return T.from(o.map(t, function (e, t) {
        var a = function a(e) {
          return void 0 !== e.url;
        };

        return {
          selected: 0 === t,
          text: e.title,
          value: {
            url: a(e) ? T.from(e.url) : T.none(),
            content: a(e) ? T.none() : T.from(e.content),
            description: e.description
          }
        };
      }));
    })().each(function (t) {
      var a = function (e) {
        return function (e, t) {
          var a = e.length,
              n = new Array(a);

          for (var _t2 = 0; _t2 < a; _t2++) {
            var _a2 = e[_t2];
            n[_t2] = {
              text: (r = _a2).text,
              value: r.text
            };
          }

          var r;
          return n;
        }(e);
      }(t),
          l = function l(e, a) {
        return {
          title: "Insert Template",
          size: "large",
          body: {
            type: "panel",
            items: e
          },
          initialData: a,
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
          onSubmit: c(t),
          onChange: s(t, i)
        };
      },
          i = function i(t, n, r) {
        var s = function (e, t) {
          var a;

          if (-1 === t.indexOf("<html>")) {
            var _n3 = "";

            var _r3 = null !== (a = f(e)) && void 0 !== a ? a : "",
                _s2 = y(e) ? ' crossorigin="anonymous"' : "";

            o.each(e.contentCSS, function (t) {
              _n3 += '<link type="text/css" rel="stylesheet" href="' + e.documentBaseURI.toAbsolute(t) + '"' + _s2 + ">";
            }), _r3 && (_n3 += '<style type="text/css">' + _r3 + "</style>");

            var _l2 = _(e),
                _c = e.dom.encode,
                _i = '<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !(' + (I.os.isMacOS() || I.os.isiOS() ? "e.metaKey" : "e.ctrlKey && !e.altKey") + ")) {e.preventDefault();}}}, false);<\/script> ",
                _u = e.getBody().dir,
                _m = _u ? ' dir="' + _c(_u) + '"' : "";

            t = '<!DOCTYPE html><html><head><base href="' + _c(e.documentBaseURI.getURI()) + '">' + _n3 + _i + '</head><body class="' + _c(_l2) + '"' + _m + ">" + t + "</body></html>";
          }

          return O(t, p(e));
        }(e, r),
            c = [{
          type: "selectbox",
          name: "template",
          label: "Templates",
          items: a
        }, {
          type: "htmlpanel",
          html: "<p aria-live=\"polite\">".concat(w(n.value.description), "</p>")
        }, {
          label: "Preview",
          type: "iframe",
          name: "preview",
          sandboxed: !1,
          transparent: !1
        }],
            i = {
          template: n.text,
          preview: s
        };

        t.unblock(), t.redial(l(c, i)), t.focus("template");
      },
          u = e.windowManager.open(l([], {
        template: "",
        preview: ""
      }));

      u.block("Loading..."), r(t[0]).then(function (e) {
        i(u, t[0], e);
      })["catch"](function () {
        i(u, t[0], ""), u.setEnabled("save", !1), n(u);
      });
    });
  };

  e.add("template", function (e) {
    (function (e) {
      var t = e.options.register;
      t("template_cdate_classes", {
        processor: "string",
        "default": "cdate"
      }), t("template_mdate_classes", {
        processor: "string",
        "default": "mdate"
      }), t("template_selected_content_classes", {
        processor: "string",
        "default": "selcontent"
      }), t("template_preview_replace_values", {
        processor: "object"
      }), t("template_replace_values", {
        processor: "object"
      }), t("templates", {
        processor: function processor(e) {
          return a(e) || function (e, t) {
            if (r(e)) {
              for (var _a3 = 0, _n4 = e.length; _a3 < _n4; ++_a3) {
                if (!t(e[_a3])) return !1;
              }

              return !0;
            }

            return !1;
          }(e, n) || s(e);
        }
      }), t("template_cdate_format", {
        processor: "string",
        "default": e.translate("%Y-%m-%d")
      }), t("template_mdate_format", {
        processor: "string",
        "default": e.translate("%Y-%m-%d")
      });
    })(e), function (e) {
      var t = function t() {
        return e.execCommand("mceTemplate");
      };

      e.ui.registry.addButton("template", {
        icon: "template",
        tooltip: "Insert template",
        onAction: t
      }), e.ui.registry.addMenuItem("template", {
        icon: "template",
        text: "Insert template...",
        onAction: t
      });
    }(e), function (e) {
      e.addCommand("mceInsertTemplate", function (e) {
        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        return function () {
          for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            a[_key2] = arguments[_key2];
          }

          var n = t.concat(a);
          return e.apply(null, n);
        };
      }(D, e)), e.addCommand("mceTemplate", function (e, t) {
        return function () {
          var n = h(e);
          s(n) ? n(t) : a(n) ? fetch(n).then(function (e) {
            e.ok && e.json().then(t);
          }) : t(n);
        };
      }(e, function (e) {
        return function (t) {
          N(e, t);
        };
      }(e)));
    }(e), function (e) {
      e.on("PreProcess", function (t) {
        var a = e.dom,
            n = v(e);
        o.each(a.select("div", t.node), function (t) {
          a.hasClass(t, "mceTmpl") && (o.each(a.select("*", t), function (t) {
            C(a, t, u(e)) && (t.innerHTML = M(e, n));
          }), A(e, t));
        });
      });
    }(e);
  });
}();