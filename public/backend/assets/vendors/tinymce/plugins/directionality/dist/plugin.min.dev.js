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
      o = function o(t) {
    return "string" === function (t) {
      var e = _typeof(t);

      return null === t ? "null" : "object" === e && Array.isArray(t) ? "array" : "object" === e && (o = r = t, (n = String).prototype.isPrototypeOf(o) || (null === (i = r.constructor) || void 0 === i ? void 0 : i.name) === n.name) ? "string" : e;
      var o, r, n, i;
    }(t);
  },
      r = e("boolean"),
      n = function n(t) {
    return !function (t) {
      return null == t;
    }(t);
  },
      i = e("function"),
      s = e("number"),
      l = (!1, function () {
    return false;
  });

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
        return n(t) ? a.some(t) : a.none();
      }
    }]);

    return a;
  }();

  a.singletonNone = new a(!1);

  var u = function u(t, e) {
    for (var _o = 0, _r = t.length; _o < _r; _o++) {
      e(t[_o], _o);
    }
  },
      c = function c(t) {
    if (null == t) throw new Error("Node cannot be null or undefined");
    return {
      dom: t
    };
  },
      d = c,
      h = function h(t, e) {
    var o = t.dom;
    if (1 !== o.nodeType) return !1;
    {
      var _t = o;
      if (void 0 !== _t.matches) return _t.matches(e);
      if (void 0 !== _t.msMatchesSelector) return _t.msMatchesSelector(e);
      if (void 0 !== _t.webkitMatchesSelector) return _t.webkitMatchesSelector(e);
      if (void 0 !== _t.mozMatchesSelector) return _t.mozMatchesSelector(e);
      throw new Error("Browser lacks native selectors");
    }
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var m = function m(t) {
    return function (e) {
      return function (t) {
        return t.dom.nodeType;
      }(e) === t;
    };
  },
      g = m(1),
      f = m(3),
      v = m(9),
      p = m(11),
      y = function y(t, e) {
    t.dom.removeAttribute(e);
  },
      w = i(Element.prototype.attachShadow) && i(Node.prototype.getRootNode) ? function (t) {
    return d(t.dom.getRootNode());
  } : function (t) {
    return v(t) ? t : d(t.dom.ownerDocument);
  },
      N = function N(t) {
    return d(t.dom.host);
  },
      b = function b(t) {
    var e = f(t) ? t.dom.parentNode : t.dom;
    if (null == e || null === e.ownerDocument) return !1;
    var o = e.ownerDocument;
    return function (t) {
      var e = w(t);
      return p(o = e) && n(o.dom.host) ? a.some(e) : a.none();
      var o;
    }(d(e)).fold(function () {
      return o.body.contains(e);
    }, (r = b, i = N, function (t) {
      return r(i(t));
    }));
    var r, i;
  },
      S = function S(t) {
    return "rtl" === function (t, e) {
      var o = t.dom,
          r = window.getComputedStyle(o).getPropertyValue(e);
      return "" !== r || b(t) ? r : function (t, e) {
        return function (t) {
          return void 0 !== t.style && i(t.style.getPropertyValue);
        }(t) ? t.style.getPropertyValue(e) : "";
      }(o, e);
    }(t, "direction") ? "rtl" : "ltr";
  },
      A = function A(t, e) {
    return function (t, o) {
      return function (t, e) {
        var o = [];

        for (var _r2 = 0, _n = t.length; _r2 < _n; _r2++) {
          var _n2 = t[_r2];
          e(_n2, _r2) && o.push(_n2);
        }

        return o;
      }(function (t, e) {
        var o = t.length,
            r = new Array(o);

        for (var _n3 = 0; _n3 < o; _n3++) {
          var _o2 = t[_n3];
          r[_n3] = e(_o2, _n3);
        }

        return r;
      }(t.dom.childNodes, d), function (t) {
        return h(t, e);
      });
    }(t);
  },
      T = ("li", function (t) {
    return g(t) && "li" === t.dom.nodeName.toLowerCase();
  });

  var C = function C(t, e) {
    var n = t.selection.getSelectedBlocks();
    n.length > 0 && (u(n, function (t) {
      var n = d(t),
          c = T(n),
          m = function (t, e) {
        return (e ? (o = t, r = "ol,ul", function (t, e, o) {
          var n = t.dom;
          var s = i(o) ? o : l;

          for (; n.parentNode;) {
            n = n.parentNode;

            var _t2 = d(n);

            if (h(_t2, r)) return a.some(_t2);
            if (s(_t2)) break;
          }

          return a.none();
        }(o, 0, n)) : a.some(t)).getOr(t);
        var o, r, n;
      }(n, c);

      var f;
      (f = m, function (t) {
        return a.from(t.dom.parentNode).map(d);
      }(f).filter(g)).each(function (t) {
        if (S(t) !== e ? function (t, e, n) {
          (function (t, e, n) {
            if (!(o(n) || r(n) || s(n))) throw console.error("Invalid call to Attribute.set. Key ", e, ":: Value ", n, ":: Element ", t), new Error("Attribute value was not simple");
            t.setAttribute(e, n + "");
          })(t.dom, e, n);
        }(m, "dir", e) : S(m) !== e && y(m, "dir"), c) {
          var _t3 = A(m, "li[dir]");

          u(_t3, function (t) {
            return y(t, "dir");
          });
        }
      });
    }), t.nodeChanged());
  },
      D = function D(t, e) {
    return function (o) {
      var r = function r(t) {
        var r = d(t.element);
        o.setActive(S(r) === e);
      };

      return t.on("NodeChange", r), function () {
        return t.off("NodeChange", r);
      };
    };
  };

  t.add("directionality", function (t) {
    (function (t) {
      t.addCommand("mceDirectionLTR", function () {
        C(t, "ltr");
      }), t.addCommand("mceDirectionRTL", function () {
        C(t, "rtl");
      });
    })(t), function (t) {
      t.ui.registry.addToggleButton("ltr", {
        tooltip: "Left to right",
        icon: "ltr",
        onAction: function onAction() {
          return t.execCommand("mceDirectionLTR");
        },
        onSetup: D(t, "ltr")
      }), t.ui.registry.addToggleButton("rtl", {
        tooltip: "Right to left",
        icon: "rtl",
        onAction: function onAction() {
          return t.execCommand("mceDirectionRTL");
        },
        onSetup: D(t, "rtl")
      });
    }(t);
  });
}();