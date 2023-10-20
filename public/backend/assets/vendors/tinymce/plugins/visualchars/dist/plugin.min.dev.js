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

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var e = function e(t) {
    return function (e) {
      return _typeof(e) === t;
    };
  },
      n = function n(t) {
    return "string" === function (t) {
      var e = _typeof(t);

      return null === t ? "null" : "object" === e && Array.isArray(t) ? "array" : "object" === e && (n = o = t, (s = String).prototype.isPrototypeOf(n) || (null === (r = o.constructor) || void 0 === r ? void 0 : r.name) === s.name) ? "string" : e;
      var n, o, s, r;
    }(t);
  },
      o = (null, function (t) {
    return null === t;
  });

  var s = e("boolean"),
      r = e("number");

  var a =
  /*#__PURE__*/
  function () {
    function a(t, e) {
      _classCallCheck(this, a);

      this.tag = t, this.value = e;
    }

    _createClass(a, [{
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
        return this.tag ? a.some(t(this.value)) : a.none();
      }
    }, {
      key: "bind",
      value: function bind(t) {
        return this.tag ? t(this.value) : a.none();
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
        return !this.tag || t(this.value) ? this : a.none();
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
        return new a(!0, t);
      }
    }, {
      key: "none",
      value: function none() {
        return a.singletonNone;
      }
    }, {
      key: "from",
      value: function from(t) {
        return null == t ? a.none() : a.some(t);
      }
    }]);

    return a;
  }();

  a.singletonNone = new a(!1);

  var i = function i(t, e) {
    for (var _n = 0, _o = t.length; _n < _o; _n++) {
      e(t[_n], _n);
    }
  },
      l = Object.keys,
      u = function u(t, e) {
    var n = l(t);

    for (var _o2 = 0, _s = n.length; _o2 < _s; _o2++) {
      var _s2 = n[_o2];
      e(t[_s2], _s2);
    }
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var c = function c(t) {
    return t.dom.nodeValue;
  },
      d = function d(t) {
    return 3 === function (t) {
      return t.dom.nodeType;
    }(t);
  },
      h = function h(t, e, o) {
    (function (t, e, o) {
      if (!(n(o) || s(o) || r(o))) throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", o, ":: Element ", t), new Error("Attribute value was not simple");
      t.setAttribute(e, o + "");
    })(t.dom, e, o);
  },
      g = function g(t, e) {
    t.dom.removeAttribute(e);
  },
      m = function m(t, e) {
    var n = function (t, e) {
      var n = t.dom.getAttribute(e);
      return null === n ? void 0 : n;
    }(t, e);

    return void 0 === n || "" === n ? [] : n.split(" ");
  },
      v = function v(t) {
    return void 0 !== t.dom.classList;
  },
      p = function p(t) {
    if (null == t) throw new Error("Node cannot be null or undefined");
    return {
      dom: t
    };
  },
      f = p,
      y = {
    "\xa0": "nbsp",
    "\xad": "shy"
  },
      b = function b(t, e) {
    var n = "";
    return u(t, function (t, e) {
      n += e;
    }), new RegExp("[" + n + "]", e ? "g" : "");
  },
      w = b(y),
      A = b(y, !0),
      k = function (t) {
    var e = "";
    return u(t, function (t) {
      e && (e += ","), e += "span.mce-" + t;
    }), e;
  }(y),
      N = "mce-nbsp",
      C = function C(t) {
    return '<span data-mce-bogus="1" class="mce-' + y[t] + '">' + t + "</span>";
  },
      T = function T(t) {
    var e = c(t);
    return d(t) && void 0 !== e && w.test(e);
  },
      O = function O(t, e) {
    var n = [];

    var o = function (t, e) {
      var n = t.length,
          o = new Array(n);

      for (var _s3 = 0; _s3 < n; _s3++) {
        var _n2 = t[_s3];
        o[_s3] = e(_n2, _s3);
      }

      return o;
    }(t.dom.childNodes, f);

    return i(o, function (t) {
      e(t) && (n = n.concat([t])), n = n.concat(O(t, e));
    }), n;
  },
      B = function B(t) {
    return "span" === t.nodeName.toLowerCase() && t.classList.contains("mce-nbsp-wrap");
  },
      S = function S(t, e) {
    var n = O(f(e), T);
    i(n, function (e) {
      var n = e.dom.parentNode;
      if (B(n)) o = f(n), s = N, v(o) ? o.dom.classList.add(s) : function (t, e) {
        (function (t, e, n) {
          var o = m(t, e).concat([n]);
          h(t, e, o.join(" "));
        })(t, "class", e);
      }(o, s);else {
        var _n3 = t.dom.encode(c(e)).replace(A, C),
            _o3 = t.dom.create("div", null, _n3);

        var _s4;

        for (; _s4 = _o3.lastChild;) {
          t.dom.insertAfter(_s4, e.dom);
        }

        t.dom.remove(e.dom);
      }
      var o, s;
    });
  },
      V = function V(t, e) {
    var n = t.dom.select(k, e);
    i(n, function (e) {
      var n, o;
      B(e) ? (n = f(e), o = N, v(n) ? n.dom.classList.remove(o) : function (t, e) {
        (function (t, e, n) {
          var o = function (t, e) {
            var o = [];

            for (var _e = 0, _s5 = t.length; _e < _s5; _e++) {
              var _s6 = t[_e];
              _s6 !== n && o.push(_s6);
            }

            return o;
          }(m(t, e));

          o.length > 0 ? h(t, e, o.join(" ")) : g(t, e);
        })(t, "class", e);
      }(n, o), function (t) {
        var e = v(t) ? t.dom.classList : function (t) {
          return m(t, "class");
        }(t);
        0 === e.length && g(t, "class");
      }(n)) : t.dom.remove(e, !0);
    });
  },
      E = function E(t) {
    var e = t.getBody(),
        n = t.selection.getBookmark();

    var o = function (t, e) {
      for (; t.parentNode;) {
        if (t.parentNode === e) return t;
        t = t.parentNode;
      }
    }(t.selection.getNode(), e);

    o = void 0 !== o ? o : e, V(t, o), S(t, o), t.selection.moveToBookmark(n);
  },
      L = function L(t, e) {
    (function (t, e) {
      t.dispatch("VisualChars", {
        state: e
      });
    })(t, e.get());

    var n = t.getBody();
    !0 === e.get() ? S(t, n) : V(t, n);
  },
      _ = ("visualchars_default_state", function (t) {
    return t.options.get("visualchars_default_state");
  });

  var j = function j(t, e) {
    var n = function (t, e) {
      var n = null;
      return {
        cancel: function cancel() {
          o(n) || (clearTimeout(n), n = null);
        },
        throttle: function throttle() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          o(n) && (n = setTimeout(function () {
            n = null, t.apply(null, e);
          }, 300));
        }
      };
    }(function () {
      E(t);
    });

    t.on("keydown", function (o) {
      !0 === e.get() && (13 === o.keyCode ? E(t) : n.throttle());
    }), t.on("remove", n.cancel);
  },
      x = function x(t, e) {
    return function (n) {
      n.setActive(e.get());

      var o = function o(t) {
        return n.setActive(t.state);
      };

      return t.on("VisualChars", o), function () {
        return t.off("VisualChars", o);
      };
    };
  };

  t.add("visualchars", function (t) {
    (function (t) {
      (0, t.options.register)("visualchars_default_state", {
        processor: "boolean",
        "default": !1
      });
    })(t);

    var e = function (t) {
      var e = t;
      return {
        get: function get() {
          return e;
        },
        set: function set(t) {
          e = t;
        }
      };
    }(_(t));

    return function (t, e) {
      t.addCommand("mceVisualChars", function () {
        (function (t, e) {
          e.set(!e.get());
          var n = t.selection.getBookmark();
          L(t, e), t.selection.moveToBookmark(n);
        })(t, e);
      });
    }(t, e), function (t, e) {
      var n = function n() {
        return t.execCommand("mceVisualChars");
      };

      t.ui.registry.addToggleButton("visualchars", {
        tooltip: "Show invisible characters",
        icon: "visualchars",
        onAction: n,
        onSetup: x(t, e)
      }), t.ui.registry.addToggleMenuItem("visualchars", {
        text: "Show invisible characters",
        icon: "visualchars",
        onAction: n,
        onSetup: x(t, e)
      });
    }(t, e), j(t, e), function (t, e) {
      t.on("init", function () {
        L(t, e);
      });
    }(t, e), function (t) {
      return {
        isEnabled: function isEnabled() {
          return t.get();
        }
      };
    }(e);
  });
}();