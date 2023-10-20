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

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");
  var e = (null, function (t) {
    return null === t;
  });

  var o = function o() {},
      n = function n() {
    return !1;
  };

  var s =
  /*#__PURE__*/
  function () {
    function s(t, e) {
      _classCallCheck(this, s);

      this.tag = t, this.value = e;
    }

    _createClass(s, [{
      key: "fold",
      value: function fold(t, e) {
        return this.tag ? e(this.value) : t();
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
      value: function map(t) {
        return this.tag ? s.some(t(this.value)) : s.none();
      }
    }, {
      key: "bind",
      value: function bind(t) {
        return this.tag ? t(this.value) : s.none();
      }
    }, {
      key: "exists",
      value: function exists(t) {
        return this.tag && t(this.value);
      }
    }, {
      key: "forall",
      value: function forall(t) {
        return !this.tag || t(this.value);
      }
    }, {
      key: "filter",
      value: function filter(t) {
        return !this.tag || t(this.value) ? this : s.none();
      }
    }, {
      key: "getOr",
      value: function getOr(t) {
        return this.tag ? this.value : t;
      }
    }, {
      key: "or",
      value: function or(t) {
        return this.tag ? this : t;
      }
    }, {
      key: "getOrThunk",
      value: function getOrThunk(t) {
        return this.tag ? this.value : t();
      }
    }, {
      key: "orThunk",
      value: function orThunk(t) {
        return this.tag ? this : t();
      }
    }, {
      key: "getOrDie",
      value: function getOrDie(t) {
        if (this.tag) return this.value;
        throw new Error(null != t ? t : "Called getOrDie on None");
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
      value: function each(t) {
        this.tag && t(this.value);
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
      value: function some(t) {
        return new s(!0, t);
      }
    }, {
      key: "none",
      value: function none() {
        return s.singletonNone;
      }
    }, {
      key: "from",
      value: function from(t) {
        return null == t ? s.none() : s.some(t);
      }
    }]);

    return s;
  }();

  s.singletonNone = new s(!1);

  var r = function r(t, e) {
    var o = t.length,
        n = new Array(o);

    for (var _s = 0; _s < o; _s++) {
      var _o = t[_s];
      n[_s] = e(_o, _s);
    }

    return n;
  },
      a = function a(t) {
    var e = t;
    return {
      get: function get() {
        return e;
      },
      set: function set(t) {
        e = t;
      }
    };
  },
      i = Object.keys,
      l = Object.hasOwnProperty,
      c = function c(t, e) {
    var o = i(t);

    for (var _n = 0, _s2 = o.length; _n < _s2; _n++) {
      var _s3 = o[_n];
      e(t[_s3], _s3);
    }
  },
      u = function u(t, e) {
    return l.call(t, e);
  },
      g = (m = function m(t, e) {
    return e;
  }, function () {
    if (0 === arguments.length) throw new Error("Can't merge zero objects");
    var e = {};

    for (var _o2 = 0; _o2 < arguments.length; _o2++) {
      var _n2 = _o2 < 0 || arguments.length <= _o2 ? undefined : arguments[_o2];

      for (var _t in _n2) {
        u(_n2, _t) && (e[_t] = m(e[_t], _n2[_t]));
      }
    }

    return e;
  });

  var m;

  var h = function h() {
    var t = function (t) {
      var e = a(s.none()),
          o = function o() {
        return e.get().each(t);
      };

      return {
        clear: function clear() {
          o(), e.set(s.none());
        },
        isSet: function isSet() {
          return e.get().isSome();
        },
        get: function get() {
          return e.get();
        },
        set: function set(t) {
          o(), e.set(s.some(t));
        }
      };
    }(o);

    return _objectSpread({}, t, {
      on: function on(e) {
        return t.get().each(e);
      }
    });
  },
      d = function d(t, e) {
    return -1 !== t.indexOf(e);
  };

  var p = tinymce.util.Tools.resolve("tinymce.Resource");

  var y = function y(t) {
    return function (e) {
      return e.options.get(t);
    };
  },
      v = y("emoticons_database"),
      f = y("emoticons_database_url"),
      b = y("emoticons_database_id"),
      w = y("emoticons_append"),
      _ = y("emoticons_images_url"),
      j = "All",
      C = {
    symbols: "Symbols",
    people: "People",
    animals_and_nature: "Animals and Nature",
    food_and_drink: "Food and Drink",
    activity: "Activity",
    travel_and_places: "Travel and Places",
    objects: "Objects",
    flags: "Flags",
    user: "User Defined"
  },
      k = function k(t, e) {
    return u(t, e) ? t[e] : e;
  },
      A = function A(t) {
    var e = w(t);
    return o = function o(t) {
      return _objectSpread({
        keywords: [],
        category: "user"
      }, t);
    }, function (t, e) {
      var o = {};
      return c(t, function (t, n) {
        var s = e(t, n);
        o[s.k] = s.v;
      }), o;
    }(e, function (t, e) {
      return {
        k: e,
        v: o(t)
      };
    });
    var o;
  },
      O = function O(t, e) {
    return d(t.title.toLowerCase(), e) || function (t, o) {
      for (var _o3 = 0, _s4 = t.length; _o3 < _s4; _o3++) {
        if (n = t[_o3], d(n.toLowerCase(), e)) return !0;
      }

      var n;
      return !1;
    }(t.keywords);
  },
      x = function x(t, e, o) {
    var s = [],
        r = e.toLowerCase(),
        a = o.fold(function () {
      return n;
    }, function (t) {
      return function (e) {
        return e >= t;
      };
    });

    for (var _o4 = 0; _o4 < t.length && (0 !== e.length && !O(t[_o4], r) || (s.push({
      value: t[_o4]["char"],
      text: t[_o4].title,
      icon: t[_o4]["char"]
    }), !a(s.length))); _o4++) {
      ;
    }

    return s;
  },
      L = "pattern",
      T = function T(t, o) {
    var n = {
      pattern: "",
      results: x(o.listAll(), "", s.some(300))
    },
        i = a(j),
        l = function (t, o) {
      var n = null;

      var s = function s() {
        e(n) || (clearTimeout(n), n = null);
      };

      return {
        cancel: s,
        throttle: function throttle() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          s(), n = setTimeout(function () {
            n = null, t.apply(null, e);
          }, 200);
        }
      };
    }(function (t) {
      (function (t) {
        var e = t.getData(),
            n = i.get(),
            r = o.listCategory(n),
            a = x(r, e.pattern, n === j ? s.some(300) : s.none());
        t.setData({
          results: a
        });
      })(t);
    }),
        c = {
      label: "Search",
      type: "input",
      name: L
    },
        u = {
      type: "collection",
      name: "results"
    },
        g = function g() {
      return {
        title: "Emojis",
        size: "normal",
        body: {
          type: "tabpanel",
          tabs: r(o.listCategories(), function (t) {
            return {
              title: t,
              name: t,
              items: [c, u]
            };
          })
        },
        initialData: n,
        onTabChange: function onTabChange(t, e) {
          i.set(e.newTabName), l.throttle(t);
        },
        onChange: l.throttle,
        onAction: function onAction(e, o) {
          "results" === o.name && (function (t, e) {
            t.insertContent(e);
          }(t, o.value), e.close());
        },
        buttons: [{
          type: "cancel",
          text: "Close",
          primary: !0
        }]
      };
    },
        m = t.windowManager.open(g());

    m.focus(L), o.hasLoaded() || (m.block("Loading emojis..."), o.waitForLoad().then(function () {
      m.redial(g()), l.throttle(m), m.focus(L), m.unblock();
    })["catch"](function (t) {
      m.redial({
        title: "Emojis",
        body: {
          type: "panel",
          items: [{
            type: "alertbanner",
            level: "error",
            icon: "warning",
            text: "Could not load emojis"
          }]
        },
        buttons: [{
          type: "cancel",
          text: "Close",
          primary: !0
        }],
        initialData: {
          pattern: "",
          results: []
        }
      }), m.focus(L), m.unblock();
    }));
  };

  t.add("emoticons", function (t, e) {
    (function (t, e) {
      var o = t.options.register;
      o("emoticons_database", {
        processor: "string",
        "default": "emojis"
      }), o("emoticons_database_url", {
        processor: "string",
        "default": "".concat(e, "/js/").concat(v(t)).concat(t.suffix, ".js")
      }), o("emoticons_database_id", {
        processor: "string",
        "default": "tinymce.plugins.emoticons"
      }), o("emoticons_append", {
        processor: "object",
        "default": {}
      }), o("emoticons_images_url", {
        processor: "string",
        "default": "https://twemoji.maxcdn.com/v/13.0.1/72x72/"
      });
    })(t, e);

    var o = function (t, e, o) {
      var n = h(),
          r = h(),
          a = _(t),
          l = function l(t) {
        return o = "<img", (e = t["char"]).length >= o.length && e.substr(0, 0 + o.length) === o ? t["char"].replace(/src="([^"]+)"/, function (t, e) {
          return "src=\"".concat(a).concat(e, "\"");
        }) : t["char"];
        var e, o;
      };

      t.on("init", function () {
        p.load(o, e).then(function (e) {
          var o = A(t);

          (function (t) {
            var e = {},
                o = [];
            c(t, function (t, n) {
              var s = {
                title: n,
                keywords: t.keywords,
                "char": l(t),
                category: k(C, t.category)
              },
                  r = void 0 !== e[s.category] ? e[s.category] : [];
              e[s.category] = r.concat([s]), o.push(s);
            }), n.set(e), r.set(o);
          })(g(e, o));
        }, function (t) {
          console.log("Failed to load emojis: ".concat(t)), n.set({}), r.set([]);
        });
      });

      var u = function u() {
        return r.get().getOr([]);
      },
          m = function m() {
        return n.isSet() && r.isSet();
      };

      return {
        listCategories: function listCategories() {
          return [j].concat(i(n.get().getOr({})));
        },
        hasLoaded: m,
        waitForLoad: function waitForLoad() {
          return m() ? Promise.resolve(!0) : new Promise(function (t, o) {
            var n = 15;
            var s = setInterval(function () {
              m() ? (clearInterval(s), t(!0)) : (n--, n < 0 && (console.log("Could not load emojis from url: " + e), clearInterval(s), o(!1)));
            }, 100);
          });
        },
        listAll: u,
        listCategory: function listCategory(t) {
          return t === j ? u() : n.get().bind(function (e) {
            return s.from(e[t]);
          }).getOr([]);
        }
      };
    }(t, f(t), b(t));

    (function (t, e) {
      t.addCommand("mceEmoticons", function () {
        return T(t, e);
      });
    })(t, o), function (t) {
      var e = function e() {
        return t.execCommand("mceEmoticons");
      };

      t.ui.registry.addButton("emoticons", {
        tooltip: "Emojis",
        icon: "emoji",
        onAction: e
      }), t.ui.registry.addMenuItem("emoticons", {
        text: "Emojis...",
        icon: "emoji",
        onAction: e
      });
    }(t), function (t, e) {
      t.ui.registry.addAutocompleter("emoticons", {
        ch: ":",
        columns: "auto",
        minChars: 2,
        fetch: function fetch(t, o) {
          return e.waitForLoad().then(function () {
            var n = e.listAll();
            return x(n, t, s.some(o));
          });
        },
        onAction: function onAction(e, o, n) {
          t.selection.setRng(o), t.insertContent(n), e.hide();
        }
      });
    }(t, o), function (t) {
      t.on("PreInit", function () {
        t.parser.addAttributeFilter("data-emoticon", function (t) {
          (function (t, e) {
            for (var _e = 0, _n3 = t.length; _e < _n3; _e++) {
              (o = t[_e]).attr("data-mce-resize", "false"), o.attr("data-mce-placeholder", "1");
            }

            var o;
          })(t);
        });
      });
    }(t);
  });
}();