"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (o = l = e, (n = String).prototype.isPrototypeOf(o) || (null === (r = l.constructor) || void 0 === r ? void 0 : r.name) === n.name) ? "string" : t;
        var o, l, n, r;
      }(t) === e;
    };
  },
      o = function o(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      l = t("string"),
      n = t("array"),
      r = o("boolean"),
      a = (void 0, function (e) {
    return undefined === e;
  });

  var s = function s(e) {
    return !function (e) {
      return null == e;
    }(e);
  },
      c = o("function"),
      i = o("number"),
      m = function m() {},
      d = function d(e) {
    return function () {
      return e;
    };
  },
      u = function u(e) {
    return e;
  },
      p = function p(e, t) {
    return e === t;
  };

  function b(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, o = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        o[_key2] = arguments[_key2];
      }

      var l = t.concat(o);
      return e.apply(null, l);
    };
  }

  var g = d(!1),
      h = d(!0);

  var f =
  /*#__PURE__*/
  function () {
    function f(e, t) {
      _classCallCheck(this, f);

      this.tag = e, this.value = t;
    }

    _createClass(f, [{
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
        return this.tag ? f.some(e(this.value)) : f.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : f.none();
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
        return !this.tag || e(this.value) ? this : f.none();
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
        return new f(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return f.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return s(e) ? f.some(e) : f.none();
      }
    }]);

    return f;
  }();

  f.singletonNone = new f(!1);

  var y = Object.keys,
      w = Object.hasOwnProperty,
      S = function S(e, t) {
    var o = y(e);

    for (var _l = 0, _n = o.length; _l < _n; _l++) {
      var _n2 = o[_l];
      t(e[_n2], _n2);
    }
  },
      C = function C(e, t) {
    var o = {};
    var l;
    return function (e, t, o, l) {
      S(e, function (e, n) {
        (t(e, n) ? o : l)(e, n);
      });
    }(e, t, (l = o, function (e, t) {
      l[t] = e;
    }), m), o;
  },
      v = function v(e) {
    return y(e).length;
  },
      T = function T(e, t) {
    return x(e, t) ? f.from(e[t]) : f.none();
  },
      x = function x(e, t) {
    return w.call(e, t);
  },
      A = function A(e, t) {
    return x(e, t) && void 0 !== e[t] && null !== e[t];
  },
      R = Array.prototype.indexOf,
      _ = Array.prototype.push,
      O = function O(e, t) {
    return function (e, t) {
      return R.call(e, t);
    }(e, t) > -1;
  },
      D = function D(e, t) {
    for (var _o2 = 0, _l2 = e.length; _o2 < _l2; _o2++) {
      if (t(e[_o2], _o2)) return !0;
    }

    return !1;
  },
      I = function I(e, t) {
    var o = [];

    for (var _l3 = 0; _l3 < e; _l3++) {
      o.push(t(_l3));
    }

    return o;
  },
      M = function M(e, t) {
    var o = e.length,
        l = new Array(o);

    for (var _n3 = 0; _n3 < o; _n3++) {
      var _o3 = e[_n3];
      l[_n3] = t(_o3, _n3);
    }

    return l;
  },
      N = function N(e, t) {
    for (var _o4 = 0, _l4 = e.length; _o4 < _l4; _o4++) {
      t(e[_o4], _o4);
    }
  },
      P = function P(e, t) {
    var o = [];

    for (var _l5 = 0, _n4 = e.length; _l5 < _n4; _l5++) {
      var _n5 = e[_l5];
      t(_n5, _l5) && o.push(_n5);
    }

    return o;
  },
      k = function k(e, t, o) {
    return N(e, function (e, l) {
      o = t(o, e, l);
    }), o;
  },
      B = function B(e, t) {
    return function (e, t, o) {
      for (var _l6 = 0, _n6 = e.length; _l6 < _n6; _l6++) {
        var _n7 = e[_l6];
        if (t(_n7, _l6)) return f.some(_n7);
        if (o(_n7, _l6)) break;
      }

      return f.none();
    }(e, t, g);
  },
      E = function E(e, t) {
    return function (e) {
      var t = [];

      for (var _o5 = 0, _l7 = e.length; _o5 < _l7; ++_o5) {
        if (!n(e[_o5])) throw new Error("Arr.flatten item " + _o5 + " was not an array, input: " + e);

        _.apply(t, e[_o5]);
      }

      return t;
    }(M(e, t));
  },
      F = function F(e, t) {
    for (var _o6 = 0, _l8 = e.length; _o6 < _l8; ++_o6) {
      if (!0 !== t(e[_o6], _o6)) return !1;
    }

    return !0;
  },
      q = function q(e, t) {
    return t >= 0 && t < e.length ? f.some(e[t]) : f.none();
  },
      L = function L(e, t) {
    for (var _o7 = 0; _o7 < e.length; _o7++) {
      var _l9 = t(e[_o7], _o7);

      if (_l9.isSome()) return _l9;
    }

    return f.none();
  },
      H = function H(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      j = {
    fromHtml: function fromHtml(e, t) {
      var o = (t || document).createElement("div");

      if (o.innerHTML = e, !o.hasChildNodes() || o.childNodes.length > 1) {
        var _t2 = "HTML does not have a single root node";
        throw console.error(_t2, e), new Error(_t2);
      }

      return H(o.childNodes[0]);
    },
    fromTag: function fromTag(e, t) {
      var o = (t || document).createElement(e);
      return H(o);
    },
    fromText: function fromText(e, t) {
      var o = (t || document).createTextNode(e);
      return H(o);
    },
    fromDom: H,
    fromPoint: function fromPoint(e, t, o) {
      return f.from(e.dom.elementFromPoint(t, o)).map(H);
    }
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var V = function V(e) {
    return e.dom.nodeName.toLowerCase();
  },
      z = function z(e) {
    return e.dom.nodeType;
  },
      W = function W(e) {
    return function (t) {
      return z(t) === e;
    };
  },
      $ = W(1),
      U = W(3),
      G = W(9),
      K = W(11),
      J = function J(e) {
    return function (t) {
      return $(t) && V(t) === e;
    };
  },
      Q = function Q(e, t) {
    var o = e.dom;
    if (1 !== o.nodeType) return !1;
    {
      var _e2 = o;
      if (void 0 !== _e2.matches) return _e2.matches(t);
      if (void 0 !== _e2.msMatchesSelector) return _e2.msMatchesSelector(t);
      if (void 0 !== _e2.webkitMatchesSelector) return _e2.webkitMatchesSelector(t);
      if (void 0 !== _e2.mozMatchesSelector) return _e2.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    }
  },
      X = function X(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  },
      Y = function Y(e, t) {
    return e.dom === t.dom;
  },
      Z = Q,
      ee = function ee(e) {
    return G(e) ? e : j.fromDom(e.dom.ownerDocument);
  },
      te = function te(e) {
    return f.from(e.dom.parentNode).map(j.fromDom);
  },
      oe = function oe(e) {
    return f.from(e.dom.nextSibling).map(j.fromDom);
  },
      le = function le(e) {
    return M(e.dom.childNodes, j.fromDom);
  },
      ne = c(Element.prototype.attachShadow) && c(Node.prototype.getRootNode) ? function (e) {
    return j.fromDom(e.dom.getRootNode());
  } : ee,
      re = function re(e) {
    return j.fromDom(e.dom.host);
  },
      ae = function ae(e) {
    var t = U(e) ? e.dom.parentNode : e.dom;
    if (null == t || null === t.ownerDocument) return !1;
    var o = t.ownerDocument;
    return function (e) {
      var t = ne(e);
      return K(o = t) && s(o.dom.host) ? f.some(t) : f.none();
      var o;
    }(j.fromDom(t)).fold(function () {
      return o.body.contains(t);
    }, (l = ae, n = re, function (e) {
      return l(n(e));
    }));
    var l, n;
  },
      se = function se(e, t) {
    var o = [];
    return N(le(e), function (e) {
      t(e) && (o = o.concat([e])), o = o.concat(se(e, t));
    }), o;
  },
      ce = function ce(e, t) {
    return function (e, o) {
      return P(le(e), function (e) {
        return Q(e, t);
      });
    }(e);
  },
      ie = function ie(e, t) {
    return function (e, t) {
      var o = void 0 === t ? document : t.dom;
      return X(o) ? [] : M(o.querySelectorAll(e), j.fromDom);
    }(t, e);
  },
      me = function me(e, t, o) {
    var l = e.dom;
    var n = c(o) ? o : g;

    for (; l.parentNode;) {
      l = l.parentNode;

      var _e3 = j.fromDom(l);

      if (t(_e3)) return f.some(_e3);
      if (n(_e3)) break;
    }

    return f.none();
  },
      de = function de(e, t, o) {
    return me(e, function (e) {
      return Q(e, t);
    }, o);
  },
      ue = function ue(e, t) {
    return function (e, o) {
      return B(e.dom.childNodes, function (e) {
        return o = j.fromDom(e), Q(o, t);
        var o;
      }).map(j.fromDom);
    }(e);
  },
      pe = function pe(e, t) {
    return function (e, t) {
      var o = void 0 === t ? document : t.dom;
      return X(o) ? f.none() : f.from(o.querySelector(e)).map(j.fromDom);
    }(t, e);
  },
      be = function be(e, t, o) {
    return function (e, t, o, l, n) {
      return function (e, t) {
        return Q(e, t);
      }(o, l) ? f.some(o) : c(n) && n(o) ? f.none() : t(o, l, n);
    }(0, de, e, t, o);
  },
      ge = function ge(e, t, o) {
    if (!(l(o) || r(o) || i(o))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", o, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(t, o + "");
  },
      he = function he(e, t) {
    var o = e.dom.getAttribute(t);
    return null === o ? void 0 : o;
  },
      fe = function fe(e, t) {
    return f.from(he(e, t));
  },
      ye = function ye(e, t) {
    e.dom.removeAttribute(t);
  },
      we = function we(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : p;
    return e.exists(function (e) {
      return o(e, t);
    });
  },
      Se = function Se(e, t, o) {
    return e.isSome() && t.isSome() ? f.some(o(e.getOrDie(), t.getOrDie())) : f.none();
  },
      Ce = function Ce(e, t) {
    return function (e, t, o) {
      return "" === t || e.length >= t.length && e.substr(0, 0 + t.length) === t;
    }(e, t);
  },
      ve = (Te = /^\s+|\s+$/g, function (e) {
    return e.replace(Te, "");
  });

  var Te;

  var xe = function xe(e) {
    return e.length > 0;
  },
      Ae = function Ae(e) {
    return void 0 !== e.style && c(e.style.getPropertyValue);
  },
      Re = function Re(e, t) {
    var o = e.dom,
        l = window.getComputedStyle(o).getPropertyValue(t);
    return "" !== l || ae(e) ? l : _e(o, t);
  },
      _e = function _e(e, t) {
    return Ae(e) ? e.style.getPropertyValue(t) : "";
  },
      Oe = function Oe(e, t) {
    var o = e.dom,
        l = _e(o, t);

    return f.from(l).filter(function (e) {
      return e.length > 0;
    });
  },
      De = function De(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return fe(e, t).map(function (e) {
      return parseInt(e, 10);
    }).getOr(o);
  },
      Ie = function Ie(e, t) {
    return Me(e, t, h);
  },
      Me = function Me(e, t, o) {
    return E(le(e), function (e) {
      return Q(e, t) ? o(e) ? [e] : [] : Me(e, t, o);
    });
  },
      Ne = ["tfoot", "thead", "tbody", "colgroup"],
      Pe = function Pe(e, t, o) {
    return {
      element: e,
      rowspan: t,
      colspan: o
    };
  },
      ke = function ke(e, t, o) {
    return {
      element: e,
      cells: t,
      section: o
    };
  },
      Be = function Be(e, t) {
    return be(e, "table", t);
  },
      Ee = function Ee(e) {
    return Ie(e, "tr");
  },
      Fe = function Fe(e) {
    return Be(e).fold(d([]), function (e) {
      return ce(e, "colgroup");
    });
  },
      qe = function qe(e) {
    return te(e).map(function (e) {
      var t = V(e);
      return function (e) {
        return O(Ne, e);
      }(t) ? t : "tbody";
    }).getOr("tbody");
  },
      Le = function Le(e) {
    return fe(e, "data-snooker-locked-cols").bind(function (e) {
      return f.from(e.match(/\d+/g));
    }).map(function (e) {
      return function (e, t) {
        var o = {};

        for (var _l10 = 0, _n8 = e.length; _l10 < _n8; _l10++) {
          var _n9 = e[_l10];
          o[String(_n9)] = t(_n9, _l10);
        }

        return o;
      }(e, h);
    });
  },
      He = function He(e, t) {
    return e + "," + t;
  },
      je = function je(e) {
    var t = {},
        o = [];
    var l;
    var n = (l = e, q(l, 0)).map(function (e) {
      return e.element;
    }).bind(Be).bind(Le).getOr({});
    var r = 0,
        a = 0,
        s = 0;

    var _ref = function (e, t) {
      var o = [],
          l = [];

      for (var _t3 = 0, _r = e.length; _t3 < _r; _t3++) {
        var _r2 = e[_t3];
        (n = _r2, "colgroup" === n.section ? o : l).push(_r2);
      }

      var n;
      return {
        pass: o,
        fail: l
      };
    }(e),
        c = _ref.pass,
        i = _ref.fail;

    N(i, function (e) {
      var l = [];
      N(e.cells, function (e) {
        var o = 0;

        for (; void 0 !== t[He(s, o)];) {
          o++;
        }

        var r = A(n, o.toString()),
            c = function (e, t, o, l, n, r) {
          return {
            element: e,
            rowspan: t,
            colspan: o,
            row: l,
            column: n,
            isLocked: r
          };
        }(e.element, e.rowspan, e.colspan, s, o, r);

        for (var _l11 = 0; _l11 < e.colspan; _l11++) {
          for (var _n10 = 0; _n10 < e.rowspan; _n10++) {
            var _e4 = o + _l11,
                _r3 = He(s + _n10, _e4);

            t[_r3] = c, a = Math.max(a, _e4 + 1);
          }
        }

        l.push(c);
      }), r++, o.push(ke(e.element, l, e.section)), s++;
    });

    var _map$getOrThunk = function (e) {
      return q(e, e.length - 1);
    }(c).map(function (e) {
      var t = function (e) {
        var t = {};
        var o = 0;
        return N(e.cells, function (e) {
          var l = e.colspan;
          I(l, function (n) {
            var r = o + n;

            t[r] = function (e, t, o) {
              return {
                element: e,
                colspan: t,
                column: o
              };
            }(e.element, l, r);
          }), o += l;
        }), t;
      }(e),
          o = function (e, t) {
        return {
          element: e,
          columns: t
        };
      }(e.element, function (e, t) {
        var o = [];
        return S(e, function (e, l) {
          o.push(t(e, l));
        }), o;
      }(t, u));

      return {
        colgroups: [o],
        columns: t
      };
    }).getOrThunk(function () {
      return {
        colgroups: [],
        columns: {}
      };
    }),
        m = _map$getOrThunk.columns,
        d = _map$getOrThunk.colgroups,
        p = function (e, t) {
      return {
        rows: e,
        columns: t
      };
    }(r, a);

    return {
      grid: p,
      access: t,
      all: o,
      columns: m,
      colgroups: d
    };
  },
      Ve = function Ve(e) {
    var t = function (e) {
      var t = Ee(e);
      return function (e, t) {
        return M(e, function (e) {
          if ("colgroup" === V(e)) {
            var _t4 = M(function (e) {
              return Q(e, "colgroup") ? ce(e, "col") : E(Fe(e), function (e) {
                return ce(e, "col");
              });
            }(e), function (e) {
              var t = De(e, "span", 1);
              return Pe(e, 1, t);
            });

            return ke(e, _t4, "colgroup");
          }

          {
            var _o8 = M(function (e) {
              return Ie(e, "th,td");
            }(e), function (e) {
              var t = De(e, "rowspan", 1),
                  o = De(e, "colspan", 1);
              return Pe(e, t, o);
            });

            return ke(e, _o8, t(e));
          }
        });
      }([].concat(_toConsumableArray(Fe(e)), _toConsumableArray(t)), qe);
    }(e);

    return je(t);
  },
      ze = function ze(e, t, o) {
    return f.from(e.access[He(t, o)]);
  },
      We = function We(e, t, o) {
    var l = function (e, t) {
      var o = E(e.all, function (e) {
        return e.cells;
      });
      return P(o, t);
    }(e, function (e) {
      return o(t, e.element);
    });

    return l.length > 0 ? f.some(l[0]) : f.none();
  },
      $e = function $e(e, t) {
    return f.from(e.columns[t]);
  };

  var Ue = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var Ge = function Ge(e, t, o) {
    return function (t, l) {
      for (var _n11 = 0; _n11 < l.length; _n11++) {
        var _r4 = e.getStyle(l[_n11], o);

        if (void 0 === t && (t = _r4), t !== _r4) return "";
      }

      return t;
    }(void 0, e.select("td,th", t));
  },
      Ke = function Ke(e, t, o) {
    Ue.each("left center right".split(" "), function (l) {
      l !== o && e.formatter.remove("align" + l, {}, t);
    }), o && e.formatter.apply("align" + o, {}, t);
  },
      Je = function Je(e, t, o) {
    e.dispatch("TableModified", _objectSpread({}, o, {
      table: t
    }));
  },
      Qe = function Qe(e, t, o) {
    return function (e, t) {
      return function (e) {
        var t = parseFloat(e);
        return isNaN(t) ? f.none() : f.some(t);
      }(e).getOr(t);
    }(Re(e, t), o);
  },
      Xe = function Xe(e) {
    return function (e, t) {
      var o = e.dom,
          l = o.getBoundingClientRect().width || o.offsetWidth;
      return "border-box" === t ? l : function (e, t, o, l) {
        return t - Qe(e, "padding-left", 0) - Qe(e, "padding-right", 0) - Qe(e, "border-left-width", 0) - Qe(e, "border-right-width", 0);
      }(e, l);
    }(e, "content-box");
  };

  var Ye = tinymce.util.Tools.resolve("tinymce.Env");

  var Ze = I(5, function (e) {
    var t = "".concat(e + 1, "px");
    return {
      title: t,
      value: t
    };
  }),
      et = M(["Solid", "Dotted", "Dashed", "Double", "Groove", "Ridge", "Inset", "Outset", "None", "Hidden"], function (e) {
    return {
      title: e,
      value: e.toLowerCase()
    };
  }),
      tt = "100%",
      ot = function ot(e) {
    var t;
    var o = e.dom,
        l = null !== (t = o.getParent(e.selection.getStart(), o.isBlock)) && void 0 !== t ? t : e.getBody();
    return Xe(j.fromDom(l)) + "px";
  },
      lt = function lt(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      nt = lt("table_sizing_mode"),
      rt = lt("table_border_widths"),
      at = lt("table_border_styles"),
      st = lt("table_cell_advtab"),
      ct = lt("table_row_advtab"),
      it = lt("table_advtab"),
      mt = lt("table_appearance_options"),
      dt = lt("table_grid"),
      ut = lt("table_style_by_css"),
      pt = lt("table_cell_class_list"),
      bt = lt("table_row_class_list"),
      gt = lt("table_class_list"),
      ht = lt("table_toolbar"),
      ft = lt("table_background_color_map"),
      yt = lt("table_border_color_map"),
      wt = function wt(e) {
    return "fixed" === nt(e);
  },
      St = function St(e) {
    return "responsive" === nt(e);
  },
      Ct = function Ct(e) {
    var t = e.options,
        o = t.get("table_default_styles");
    return t.isSet("table_default_styles") ? o : function (e, t) {
      return St(e) || !ut(e) ? t : wt(e) ? _objectSpread({}, t, {
        width: ot(e)
      }) : _objectSpread({}, t, {
        width: tt
      });
    }(e, o);
  },
      vt = function vt(e) {
    var t = e.options,
        o = t.get("table_default_attributes");
    return t.isSet("table_default_attributes") ? o : function (e, t) {
      return St(e) || ut(e) ? t : wt(e) ? _objectSpread({}, t, {
        width: ot(e)
      }) : _objectSpread({}, t, {
        width: tt
      });
    }(e, o);
  },
      Tt = function Tt(e) {
    return function (t) {
      return Y(t, function (e) {
        return j.fromDom(e.getBody());
      }(e));
    };
  },
      xt = function xt(e) {
    return /^\d+(\.\d+)?$/.test(e) ? e + "px" : e;
  },
      At = function At(e) {
    return j.fromDom(e.selection.getStart());
  },
      Rt = function Rt(e, t) {
    return t.column >= e.startCol && t.column + t.colspan - 1 <= e.finishCol && t.row >= e.startRow && t.row + t.rowspan - 1 <= e.finishRow;
  },
      _t = function _t(e, t, o) {
    return function (e, t, o) {
      var l = We(e, t, Y),
          n = We(e, o, Y);
      return l.bind(function (e) {
        return n.map(function (t) {
          return o = e, l = t, {
            startRow: Math.min(o.row, l.row),
            startCol: Math.min(o.column, l.column),
            finishRow: Math.max(o.row + o.rowspan - 1, l.row + l.rowspan - 1),
            finishCol: Math.max(o.column + o.colspan - 1, l.column + l.colspan - 1)
          };
          var o, l;
        });
      });
    }(e, t, o).bind(function (t) {
      return function (e, t) {
        var o = !0;
        var l = b(Rt, t);

        for (var _n12 = t.startRow; _n12 <= t.finishRow; _n12++) {
          for (var _r5 = t.startCol; _r5 <= t.finishCol; _r5++) {
            o = o && ze(e, _n12, _r5).exists(l);
          }
        }

        return o ? f.some(t) : f.none();
      }(e, t);
    });
  },
      Ot = Ve,
      Dt = function Dt(e, t) {
    te(e).each(function (o) {
      o.dom.insertBefore(t.dom, e.dom);
    });
  },
      It = function It(e, t) {
    oe(e).fold(function () {
      te(e).each(function (e) {
        Mt(e, t);
      });
    }, function (e) {
      Dt(e, t);
    });
  },
      Mt = function Mt(e, t) {
    e.dom.appendChild(t.dom);
  },
      Nt = function Nt(e, t) {
    N(t, function (o, l) {
      var n = 0 === l ? e : t[l - 1];
      It(n, o);
    });
  },
      Pt = function Pt(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  },
      kt = function (e, t) {
    var o = function o(t) {
      return e(t) ? f.from(t.dom.nodeValue) : f.none();
    };

    return {
      get: function get(t) {
        if (!e(t)) throw new Error("Can only get text value of a text node");
        return o(t).getOr("");
      },
      getOption: o,
      set: function set(t, o) {
        if (!e(t)) throw new Error("Can only set raw text value of a text node");
        t.dom.nodeValue = o;
      }
    };
  }(U);

  var Bt = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "li", "table", "thead", "tbody", "tfoot", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"];

  var Et = function Et(e, t, o, l) {
    var n = t(e, o);
    return r = function r(o, l) {
      var n = t(e, l);
      return Ft(e, o, n);
    }, a = n, function (e, t) {
      for (var _o9 = e.length - 1; _o9 >= 0; _o9--) {
        t(e[_o9], _o9);
      }
    }(l, function (e, t) {
      a = r(a, e);
    }), a;
    var r, a;
  },
      Ft = function Ft(e, t, o) {
    return t.bind(function (t) {
      return o.filter(b(e.eq, t));
    });
  },
      qt = {
    up: d({
      selector: de,
      closest: be,
      predicate: me,
      all: function all(e, t) {
        var o = c(t) ? t : g;
        var l = e.dom;
        var n = [];

        for (; null !== l.parentNode && void 0 !== l.parentNode;) {
          var _e5 = l.parentNode,
              _t5 = j.fromDom(_e5);

          if (n.push(_t5), !0 === o(_t5)) break;
          l = _e5;
        }

        return n;
      }
    }),
    down: d({
      selector: ie,
      predicate: se
    }),
    styles: d({
      get: Re,
      getRaw: Oe,
      set: function set(e, t, o) {
        (function (e, t, o) {
          if (!l(o)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", o, ":: Element ", e), new Error("CSS value must be a string: " + o);
          Ae(e) && e.style.setProperty(t, o);
        })(e.dom, t, o);
      },
      remove: function remove(e, t) {
        (function (e, t) {
          Ae(e) && e.style.removeProperty(t);
        })(e.dom, t), we(fe(e, "style").map(ve), "") && ye(e, "style");
      }
    }),
    attrs: d({
      get: he,
      set: function set(e, t, o) {
        ge(e.dom, t, o);
      },
      remove: ye,
      copyTo: function copyTo(e, t) {
        (function (e, t) {
          var o = e.dom;
          S(t, function (e, t) {
            ge(o, t, e);
          });
        })(t, k(e.dom.attributes, function (e, t) {
          return e[t.name] = t.value, e;
        }, {}));
      }
    }),
    insert: d({
      before: Dt,
      after: It,
      afterAll: Nt,
      append: Mt,
      appendAll: function appendAll(e, t) {
        N(t, function (t) {
          Mt(e, t);
        });
      },
      prepend: function prepend(e, t) {
        (function (e) {
          return function (e, t) {
            var o = e.dom.childNodes;
            return f.from(o[0]).map(j.fromDom);
          }(e);
        })(e).fold(function () {
          Mt(e, t);
        }, function (o) {
          e.dom.insertBefore(t.dom, o.dom);
        });
      },
      wrap: function wrap(e, t) {
        Dt(e, t), Mt(t, e);
      }
    }),
    remove: d({
      unwrap: function unwrap(e) {
        var t = le(e);
        t.length > 0 && Nt(e, t), Pt(e);
      },
      remove: Pt
    }),
    create: d({
      nu: j.fromTag,
      clone: function clone(e) {
        return j.fromDom(e.dom.cloneNode(!1));
      },
      text: j.fromText
    }),
    query: d({
      comparePosition: function comparePosition(e, t) {
        return e.dom.compareDocumentPosition(t.dom);
      },
      prevSibling: function prevSibling(e) {
        return f.from(e.dom.previousSibling).map(j.fromDom);
      },
      nextSibling: oe
    }),
    property: d({
      children: le,
      name: V,
      parent: te,
      document: function document(e) {
        return ee(e).dom;
      },
      isText: U,
      isComment: function isComment(e) {
        return 8 === z(e) || "#comment" === V(e);
      },
      isElement: $,
      isSpecial: function isSpecial(e) {
        var t = V(e);
        return O(["script", "noscript", "iframe", "noframes", "noembed", "title", "style", "textarea", "xmp"], t);
      },
      getLanguage: function getLanguage(e) {
        return $(e) ? fe(e, "lang") : f.none();
      },
      getText: function getText(e) {
        return kt.get(e);
      },
      setText: function setText(e, t) {
        return kt.set(e, t);
      },
      isBoundary: function isBoundary(e) {
        return !!$(e) && ("body" === V(e) || O(Bt, V(e)));
      },
      isEmptyTag: function isEmptyTag(e) {
        return !!$(e) && O(["br", "img", "hr", "input"], V(e));
      },
      isNonEditable: function isNonEditable(e) {
        return $(e) && "false" === he(e, "contenteditable");
      }
    }),
    eq: Y,
    is: Z
  },
      Lt = function Lt(e) {
    return de(e, "table");
  },
      Ht = function Ht(e, t, o) {
    return pe(e, t).bind(function (t) {
      return pe(e, o).bind(function (e) {
        return (o = Lt, l = [t, e], function (e, t, o) {
          return o.length > 0 ? function (e, t, o, l) {
            return l(e, t, o[0], o.slice(1));
          }(e, t, o, Et) : f.none();
        }(qt, function (e, t) {
          return o(t);
        }, l)).map(function (o) {
          return {
            first: t,
            last: e,
            table: o
          };
        });
        var o, l;
      });
    });
  },
      jt = function jt(e) {
    return M(e, j.fromDom);
  },
      Vt = {
    selected: "data-mce-selected",
    selectedSelector: "td[data-mce-selected],th[data-mce-selected]",
    firstSelected: "data-mce-first-selected",
    firstSelectedSelector: "td[data-mce-first-selected],th[data-mce-first-selected]",
    lastSelected: "data-mce-last-selected",
    lastSelectedSelector: "td[data-mce-last-selected],th[data-mce-last-selected]"
  },
      zt = function zt(e) {
    return function (t, o) {
      var l = V(t),
          n = "col" === l || "colgroup" === l ? Be(r = t).bind(function (e) {
        return function (e, t) {
          return function (e, t) {
            var o = ie(e, t);
            return o.length > 0 ? f.some(o) : f.none();
          }(e, t);
        }(e, Vt.firstSelectedSelector);
      }).fold(d(r), function (e) {
        return e[0];
      }) : t;
      var r;
      return be(n, e, o);
    };
  },
      Wt = zt("th,td,caption"),
      $t = zt("th,td"),
      Ut = function Ut(e) {
    return jt(e.model.table.getSelectedCells());
  },
      Gt = function Gt(e, t) {
    var o = $t(e),
        l = o.bind(function (e) {
      return Be(e);
    }).map(function (e) {
      return Ee(e);
    });
    return Se(o, l, function (e, o) {
      return P(o, function (o) {
        return D(jt(o.dom.cells), function (o) {
          return "1" === he(o, t) || Y(o, e);
        });
      });
    }).getOr([]);
  },
      Kt = [{
    text: "None",
    value: ""
  }, {
    text: "Top",
    value: "top"
  }, {
    text: "Middle",
    value: "middle"
  }, {
    text: "Bottom",
    value: "bottom"
  }],
      Jt = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      Qt = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
      Xt = function Xt(e) {
    return (t = e, "#", Ce(t, "#") ? function (e, t) {
      return e.substring(t);
    }(t, "#".length) : t).toUpperCase();
    var t;
  },
      Yt = function Yt(e) {
    var t = e.toString(16);
    return (1 === t.length ? "0" + t : t).toUpperCase();
  },
      Zt = function Zt(e) {
    return {
      value: Yt(e.red) + Yt(e.green) + Yt(e.blue)
    };
  },
      eo = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
      to = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
      oo = function oo(e, t, o, l) {
    return {
      red: e,
      green: t,
      blue: o,
      alpha: l
    };
  },
      lo = function lo(e, t, o, l) {
    var n = parseInt(e, 10),
        r = parseInt(t, 10),
        a = parseInt(o, 10),
        s = parseFloat(l);
    return oo(n, r, a, s);
  },
      no = function no(e) {
    if ("transparent" === e) return f.some(oo(0, 0, 0, 0));
    var t = eo.exec(e);
    if (null !== t) return f.some(lo(t[1], t[2], t[3], "1"));
    var o = to.exec(e);
    return null !== o ? f.some(lo(o[1], o[2], o[3], o[4])) : f.none();
  },
      ro = function ro(e) {
    var t = e;
    return {
      get: function get() {
        return t;
      },
      set: function set(e) {
        t = e;
      }
    };
  },
      ao = function ao(e, t, o) {
    return function (l) {
      var n = function (e) {
        var t = ro(f.none()),
            o = function o() {
          return t.get().each(e);
        };

        return {
          clear: function clear() {
            o(), t.set(f.none());
          },
          isSet: function isSet() {
            return t.get().isSome();
          },
          get: function get() {
            return t.get();
          },
          set: function set(e) {
            o(), t.set(f.some(e));
          }
        };
      }(function (e) {
        return e.unbind();
      }),
          r = !xe(o),
          a = function a() {
        var a = Ut(e),
            s = function s(l) {
          return e.formatter.match(t, {
            value: o
          }, l.dom, r);
        };

        r ? (l.setActive(!D(a, s)), n.set(e.formatter.formatChanged(t, function (e) {
          return l.setActive(!e);
        }, !0))) : (l.setActive(F(a, s)), n.set(e.formatter.formatChanged(t, l.setActive, !1, {
          value: o
        })));
      };

      return e.initialized ? a() : e.on("init", a), n.clear;
    };
  },
      so = function so(e) {
    return A(e, "menu");
  },
      co = function co(e) {
    return M(e, function (e) {
      var t = e.text || e.title;
      return so(e) ? {
        text: t,
        items: co(e.menu)
      } : {
        text: t,
        value: e.value
      };
    });
  },
      io = function io(e, t, o, l) {
    return M(t, function (t) {
      var n = t.text || t.title;
      return so(t) ? {
        type: "nestedmenuitem",
        text: n,
        getSubmenuItems: function getSubmenuItems() {
          return io(e, t.menu, o, l);
        }
      } : {
        text: n,
        type: "togglemenuitem",
        onAction: function onAction() {
          return l(t.value);
        },
        onSetup: ao(e, o, t.value)
      };
    });
  },
      mo = function mo(e, t) {
    return function (o) {
      e.execCommand("mceTableApplyCellStyle", !1, _defineProperty({}, t, o));
    };
  },
      uo = function uo(e) {
    return E(e, function (e) {
      return so(e) ? [_objectSpread({}, e, {
        menu: uo(e.menu)
      })] : xe(e.value) ? [e] : [];
    });
  },
      po = function po(e, t, o, l) {
    return function (n) {
      return n(io(e, t, o, l));
    };
  },
      bo = function bo(e, t, o) {
    var l = M(t, function (e) {
      return {
        text: e.title,
        value: "#" + (o = e.value, (t = o, function (e) {
          return Jt.test(e) || Qt.test(e);
        }(t) ? f.some({
          value: Xt(t)
        }) : f.none()).orThunk(function () {
          return no(o).map(Zt);
        }).getOrThunk(function () {
          var e = document.createElement("canvas");
          e.height = 1, e.width = 1;
          var t = e.getContext("2d");
          t.clearRect(0, 0, e.width, e.height), t.fillStyle = "#FFFFFF", t.fillStyle = o, t.fillRect(0, 0, 1, 1);
          var l = t.getImageData(0, 0, 1, 1).data,
              n = l[0],
              r = l[1],
              a = l[2],
              s = l[3];
          return Zt(oo(n, r, a, s));
        })).value,
        type: "choiceitem"
      };
      var t, o;
    });
    return [{
      type: "fancymenuitem",
      fancytype: "colorswatch",
      initData: {
        colors: l.length > 0 ? l : void 0,
        allowCustomColors: !1
      },
      onAction: function onAction(t) {
        var l = "remove" === t.value ? "" : t.value;
        e.execCommand("mceTableApplyCellStyle", !1, _defineProperty({}, o, l));
      }
    }];
  },
      go = function go(e) {
    return function () {
      var t = "header" === e.queryCommandValue("mceTableRowType") ? "body" : "header";
      e.execCommand("mceTableRowType", !1, {
        type: t
      });
    };
  },
      ho = function ho(e) {
    return function () {
      var t = "th" === e.queryCommandValue("mceTableColType") ? "td" : "th";
      e.execCommand("mceTableColType", !1, {
        type: t
      });
    };
  },
      fo = [{
    name: "width",
    type: "input",
    label: "Width"
  }, {
    name: "height",
    type: "input",
    label: "Height"
  }, {
    name: "celltype",
    type: "listbox",
    label: "Cell type",
    items: [{
      text: "Cell",
      value: "td"
    }, {
      text: "Header cell",
      value: "th"
    }]
  }, {
    name: "scope",
    type: "listbox",
    label: "Scope",
    items: [{
      text: "None",
      value: ""
    }, {
      text: "Row",
      value: "row"
    }, {
      text: "Column",
      value: "col"
    }, {
      text: "Row group",
      value: "rowgroup"
    }, {
      text: "Column group",
      value: "colgroup"
    }]
  }, {
    name: "halign",
    type: "listbox",
    label: "Horizontal align",
    items: [{
      text: "None",
      value: ""
    }, {
      text: "Left",
      value: "left"
    }, {
      text: "Center",
      value: "center"
    }, {
      text: "Right",
      value: "right"
    }]
  }, {
    name: "valign",
    type: "listbox",
    label: "Vertical align",
    items: Kt
  }],
      yo = function yo(e) {
    return fo.concat(function (e) {
      var t = co(pt(e));
      return t.length > 0 ? f.some({
        name: "class",
        type: "listbox",
        label: "Class",
        items: t
      }) : f.none();
    }(e).toArray());
  },
      wo = function wo(e, t) {
    var o = [{
      name: "borderstyle",
      type: "listbox",
      label: "Border style",
      items: [{
        text: "Select...",
        value: ""
      }].concat(co(at(e)))
    }, {
      name: "bordercolor",
      type: "colorinput",
      label: "Border color"
    }, {
      name: "backgroundcolor",
      type: "colorinput",
      label: "Background color"
    }];
    return {
      title: "Advanced",
      name: "advanced",
      items: "cell" === t ? [{
        name: "borderwidth",
        type: "input",
        label: "Border width"
      }].concat(o) : o
    };
  },
      So = function So(e, t) {
    var o = e.dom;
    return {
      setAttrib: function setAttrib(e, l) {
        o.setAttrib(t, e, l);
      },
      setStyle: function setStyle(e, l) {
        o.setStyle(t, e, l);
      },
      setFormat: function setFormat(o, l) {
        "" === l ? e.formatter.remove(o, {
          value: null
        }, t, !0) : e.formatter.apply(o, {
          value: l
        }, t);
      }
    };
  },
      Co = J("th"),
      vo = function vo(e, t) {
    return e && t ? "sectionCells" : e ? "section" : "cells";
  },
      To = function To(e) {
    var t = M(e, function (e) {
      return function (e) {
        var t = "thead" === e.section,
            o = we(function (e) {
          var t = P(e, function (e) {
            return Co(e.element);
          });
          return 0 === t.length ? f.some("td") : t.length === e.length ? f.some("th") : f.none();
        }(e.cells), "th");
        return "tfoot" === e.section ? {
          type: "footer"
        } : t || o ? {
          type: "header",
          subType: vo(t, o)
        } : {
          type: "body"
        };
      }(e).type;
    }),
        o = O(t, "header"),
        l = O(t, "footer");

    if (o || l) {
      var _e6 = O(t, "body");

      return !o || _e6 || l ? o || _e6 || !l ? f.none() : f.some("footer") : f.some("header");
    }

    return f.some("body");
  },
      xo = function xo(e, t) {
    return L(e.all, function (e) {
      return B(e.cells, function (e) {
        return Y(t, e.element);
      });
    });
  },
      Ao = function Ao(e, t, o) {
    var l = function (e) {
      var t = [],
          o = function o(e) {
        t.push(e);
      };

      for (var _t6 = 0; _t6 < e.length; _t6++) {
        e[_t6].each(o);
      }

      return t;
    }(M(t.selection, function (t) {
      return (l = t, function (e, t) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : g;
        return o(t) ? f.none() : O(e, V(t)) ? f.some(t) : de(t, e.join(","), function (e) {
          return Q(e, "table") || o(e);
        });
      }(["td", "th"], l, n)).bind(function (t) {
        return xo(e, t);
      }).filter(o);
      var l, n;
    }));

    return n = l, l.length > 0 ? f.some(n) : f.none();
    var n;
  },
      Ro = function Ro(e, t) {
    return Ao(e, t, h);
  },
      _o = function _o(e, t) {
    return F(t, function (t) {
      return function (e, t) {
        return xo(e, t).exists(function (e) {
          return !e.isLocked;
        });
      }(e, t);
    });
  },
      Oo = function Oo(e, t) {
    return function (e, t) {
      return t.mergable;
    }(0, t).filter(function (t) {
      return _o(e, t.cells);
    });
  },
      Do = function Do(e, t) {
    return function (e, t) {
      return t.unmergable;
    }(0, t).filter(function (t) {
      return _o(e, t);
    });
  },
      Io = (function (e) {
    if (!n(e)) throw new Error("cases must be an array");
    if (0 === e.length) throw new Error("there must be at least one case");
    var t = [],
        o = {};
    N(e, function (l, r) {
      var a = y(l);
      if (1 !== a.length) throw new Error("one and only one name per case");
      var s = a[0],
          c = l[s];
      if (void 0 !== o[s]) throw new Error("duplicate key detected:" + s);
      if ("cata" === s) throw new Error("cannot have a case named cata (sorry)");
      if (!n(c)) throw new Error("case arguments must be an array");
      t.push(s), o[s] = function () {
        for (var _len3 = arguments.length, o = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          o[_key3] = arguments[_key3];
        }

        var l = o.length;
        if (l !== c.length) throw new Error("Wrong number of arguments to case " + s + ". Expected " + c.length + " (" + c + "), got " + l);
        return {
          fold: function fold() {
            for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              t[_key4] = arguments[_key4];
            }

            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
            return t[r].apply(null, o);
          },
          match: function match(e) {
            var l = y(e);
            if (t.length !== l.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + l.join(","));
            if (!F(t, function (e) {
              return O(l, e);
            })) throw new Error("Not all branches were specified when using match. Specified: " + l.join(", ") + "\nRequired: " + t.join(", "));
            return e[s].apply(null, o);
          },
          log: function log(e) {
            console.log(e, {
              constructors: t,
              constructor: s,
              params: o
            });
          }
        };
      };
    });
  }([{
    none: []
  }, {
    only: ["index"]
  }, {
    left: ["index", "next"]
  }, {
    middle: ["prev", "index", "next"]
  }, {
    right: ["prev", "index"]
  }]), function (e, t) {
    var o = Ve(e);
    return Ro(o, t).bind(function (e) {
      var t = e[e.length - 1],
          l = e[0].row,
          n = t.row + t.rowspan,
          r = o.all.slice(l, n);
      return To(r);
    }).getOr("");
  }),
      Mo = function Mo(e) {
    return Ce(e, "rgb") ? no(t = e).map(Zt).map(function (e) {
      return "#" + e.value;
    }).getOr(t) : e;
    var t;
  },
      No = function No(e) {
    var t = j.fromDom(e);
    return {
      borderwidth: Oe(t, "border-width").getOr(""),
      borderstyle: Oe(t, "border-style").getOr(""),
      bordercolor: Oe(t, "border-color").map(Mo).getOr(""),
      backgroundcolor: Oe(t, "background-color").map(Mo).getOr("")
    };
  },
      Po = function Po(e) {
    var t = e[0],
        o = e.slice(1);
    return N(o, function (e) {
      N(y(t), function (o) {
        S(e, function (e, l) {
          var n = t[o];
          "" !== n && o === l && n !== e && (t[o] = "");
        });
      });
    }), t;
  },
      ko = function ko(e, t, o, l) {
    return B(e, function (e) {
      return !a(o.formatter.matchNode(l, t + e));
    }).getOr("");
  },
      Bo = b(ko, ["left", "center", "right"], "align"),
      Eo = b(ko, ["top", "middle", "bottom"], "valign"),
      Fo = function Fo(e) {
    return Be(j.fromDom(e)).map(function (t) {
      var o = {
        selection: jt(e.cells)
      };
      return Io(t, o);
    }).getOr("");
  },
      qo = function qo(e, t) {
    var o = Ve(e),
        l = function (e) {
      return E(e.all, function (e) {
        return e.cells;
      });
    }(o),
        n = P(l, function (e) {
      return D(t, function (t) {
        return Y(e.element, t);
      });
    });

    return M(n, function (e) {
      return {
        element: e.element.dom,
        column: $e(o, e.column).map(function (e) {
          return e.element.dom;
        })
      };
    });
  },
      Lo = function Lo(e, t, o, l) {
    var n = l.getData();
    l.close(), e.undoManager.transact(function () {
      (function (e, t, o, l) {
        var n = C(l, function (e, t) {
          return o[t] !== e;
        });
        v(n) > 0 && t.length >= 1 && Be(t[0]).each(function (o) {
          var r = qo(o, t),
              a = v(C(n, function (e, t) {
            return "scope" !== t && "celltype" !== t;
          })) > 0,
              s = x(n, "celltype");
          (a || x(n, "scope")) && function (e, t, o, l) {
            var n = 1 === t.length;
            N(t, function (t) {
              var r = t.element,
                  a = n ? h : l,
                  s = So(e, r);
              (function (e, t, o, l) {
                l("scope") && e.setAttrib("scope", o.scope), l("class") && e.setAttrib("class", o["class"]), l("height") && e.setStyle("height", xt(o.height)), l("width") && t.setStyle("width", xt(o.width));
              })(s, t.column.map(function (t) {
                return So(e, t);
              }).getOr(s), o, a), st(e) && function (e, t, o) {
                o("backgroundcolor") && e.setFormat("tablecellbackgroundcolor", t.backgroundcolor), o("bordercolor") && e.setFormat("tablecellbordercolor", t.bordercolor), o("borderstyle") && e.setFormat("tablecellborderstyle", t.borderstyle), o("borderwidth") && e.setFormat("tablecellborderwidth", xt(t.borderwidth));
              }(s, o, a), l("halign") && Ke(e, r, o.halign), l("valign") && function (e, t, o) {
                Ue.each("top middle bottom".split(" "), function (l) {
                  l !== o && e.formatter.remove("valign" + l, {}, t);
                }), o && e.formatter.apply("valign" + o, {}, t);
              }(e, r, o.valign);
            });
          }(e, r, l, b(x, n)), s && function (e, t) {
            e.execCommand("mceTableCellType", !1, {
              type: t.celltype,
              no_events: !0
            });
          }(e, l), Je(e, o.dom, {
            structure: s,
            style: a
          });
        });
      })(e, t, o, n), e.focus();
    });
  },
      Ho = function Ho(e) {
    var t = Ut(e);
    if (0 === t.length) return;

    var o = function (e, t) {
      var o = Be(t[0]).map(function (o) {
        return M(qo(o, t), function (t) {
          return function (e, t, o, l) {
            var n = e.dom,
                r = function r(e, t) {
              return n.getStyle(e, t) || n.getAttrib(e, t);
            };

            return _objectSpread({
              width: r(l.getOr(t), "width"),
              height: r(t, "height"),
              scope: n.getAttrib(t, "scope"),
              celltype: (a = t, a.nodeName.toLowerCase()),
              "class": n.getAttrib(t, "class", ""),
              halign: Bo(e, t),
              valign: Eo(e, t)
            }, o ? No(t) : {});
            var a;
          }(e, t.element, st(e), t.column);
        });
      });
      return Po(o.getOrDie());
    }(e, t),
        l = {
      type: "tabpanel",
      tabs: [{
        title: "General",
        name: "general",
        items: yo(e)
      }, wo(e, "cell")]
    },
        n = {
      type: "panel",
      items: [{
        type: "grid",
        columns: 2,
        items: yo(e)
      }]
    };

    e.windowManager.open({
      title: "Cell Properties",
      size: "normal",
      body: st(e) ? l : n,
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
      initialData: o,
      onSubmit: b(Lo, e, t, o)
    });
  },
      jo = [{
    type: "listbox",
    name: "type",
    label: "Row type",
    items: [{
      text: "Header",
      value: "header"
    }, {
      text: "Body",
      value: "body"
    }, {
      text: "Footer",
      value: "footer"
    }]
  }, {
    type: "listbox",
    name: "align",
    label: "Alignment",
    items: [{
      text: "None",
      value: ""
    }, {
      text: "Left",
      value: "left"
    }, {
      text: "Center",
      value: "center"
    }, {
      text: "Right",
      value: "right"
    }]
  }, {
    label: "Height",
    name: "height",
    type: "input"
  }],
      Vo = function Vo(e) {
    return jo.concat(function (e) {
      var t = co(bt(e));
      return t.length > 0 ? f.some({
        name: "class",
        type: "listbox",
        label: "Class",
        items: t
      }) : f.none();
    }(e).toArray());
  },
      zo = function zo(e, t, o, l) {
    var n = l.getData();
    l.close(), e.undoManager.transact(function () {
      (function (e, t, o, l) {
        var n = C(l, function (e, t) {
          return o[t] !== e;
        });

        if (v(n) > 0) {
          var _o10 = x(n, "type"),
              _r6 = !_o10 || v(n) > 1;

          _r6 && function (e, t, o, l) {
            var n = 1 === t.length ? h : l;
            N(t, function (t) {
              var r = So(e, t);
              (function (e, t, o) {
                o("class") && e.setAttrib("class", t["class"]), o("height") && e.setStyle("height", xt(t.height));
              })(r, o, n), ct(e) && function (e, t, o) {
                o("backgroundcolor") && e.setStyle("background-color", t.backgroundcolor), o("bordercolor") && e.setStyle("border-color", t.bordercolor), o("borderstyle") && e.setStyle("border-style", t.borderstyle);
              }(r, o, n), l("align") && Ke(e, t, o.align);
            });
          }(e, t, l, b(x, n)), _o10 && function (e, t) {
            e.execCommand("mceTableRowType", !1, {
              type: t.type,
              no_events: !0
            });
          }(e, l), Be(j.fromDom(t[0])).each(function (t) {
            return Je(e, t.dom, {
              structure: _o10,
              style: _r6
            });
          });
        }
      })(e, t, o, n), e.focus();
    });
  },
      Wo = function Wo(e) {
    var t = Gt(At(e), Vt.selected);
    if (0 === t.length) return;
    var o = M(t, function (t) {
      return function (e, t, o) {
        var l = e.dom;
        return _objectSpread({
          height: l.getStyle(t, "height") || l.getAttrib(t, "height"),
          "class": l.getAttrib(t, "class", ""),
          type: Fo(t),
          align: Bo(e, t)
        }, o ? No(t) : {});
      }(e, t.dom, ct(e));
    }),
        l = Po(o),
        n = {
      type: "tabpanel",
      tabs: [{
        title: "General",
        name: "general",
        items: Vo(e)
      }, wo(e, "row")]
    },
        r = {
      type: "panel",
      items: [{
        type: "grid",
        columns: 2,
        items: Vo(e)
      }]
    };
    e.windowManager.open({
      title: "Row Properties",
      size: "normal",
      body: ct(e) ? n : r,
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
      initialData: l,
      onSubmit: b(zo, e, M(t, function (e) {
        return e.dom;
      }), l)
    });
  },
      $o = function $o(e, t, o) {
    var l = o ? [{
      type: "input",
      name: "cols",
      label: "Cols",
      inputMode: "numeric"
    }, {
      type: "input",
      name: "rows",
      label: "Rows",
      inputMode: "numeric"
    }] : [],
        n = mt(e) ? [{
      type: "input",
      name: "cellspacing",
      label: "Cell spacing",
      inputMode: "numeric"
    }, {
      type: "input",
      name: "cellpadding",
      label: "Cell padding",
      inputMode: "numeric"
    }, {
      type: "input",
      name: "border",
      label: "Border width"
    }, {
      type: "label",
      label: "Caption",
      items: [{
        type: "checkbox",
        name: "caption",
        label: "Show caption"
      }]
    }] : [],
        r = t.length > 0 ? [{
      type: "listbox",
      name: "class",
      label: "Class",
      items: t
    }] : [];
    return l.concat([{
      type: "input",
      name: "width",
      label: "Width"
    }, {
      type: "input",
      name: "height",
      label: "Height"
    }]).concat(n).concat([{
      type: "listbox",
      name: "align",
      label: "Alignment",
      items: [{
        text: "None",
        value: ""
      }, {
        text: "Left",
        value: "left"
      }, {
        text: "Center",
        value: "center"
      }, {
        text: "Right",
        value: "right"
      }]
    }]).concat(r);
  },
      Uo = function Uo(e, t, o, n) {
    if ("TD" === t.tagName || "TH" === t.tagName) l(o) ? e.setStyle(t, o, n) : e.setStyles(t, o);else if (t.children) for (var _l12 = 0; _l12 < t.children.length; _l12++) {
      Uo(e, t.children[_l12], o, n);
    }
  },
      Go = function Go(e, t, o, l) {
    var n = e.dom,
        r = l.getData(),
        a = C(r, function (e, t) {
      return o[t] !== e;
    });
    l.close(), "" === r["class"] && delete r["class"], e.undoManager.transact(function () {
      if (!t) {
        var _o11 = parseInt(r.cols, 10) || 1,
            _l13 = parseInt(r.rows, 10) || 1;

        e.execCommand("mceInsertTable", !1, {
          rows: _l13,
          columns: _o11
        }), t = $t(At(e), Tt(e)).bind(function (t) {
          return Be(t, Tt(e));
        }).map(function (e) {
          return e.dom;
        }).getOrUndefined();
      }

      if (v(a) > 0) {
        (function (e, t, o) {
          var l = e.dom,
              n = {},
              r = {};
          if (n["class"] = o["class"], r.height = xt(o.height), ut(e) ? r.width = xt(o.width) : l.getAttrib(t, "width") && (n.width = function (e) {
            return e ? e.replace(/px$/, "") : "";
          }(o.width)), ut(e) ? (r["border-width"] = xt(o.border), r["border-spacing"] = xt(o.cellspacing)) : (n.border = o.border, n.cellpadding = o.cellpadding, n.cellspacing = o.cellspacing), ut(e) && t.children) for (var _n13 = 0; _n13 < t.children.length; _n13++) {
            Uo(l, t.children[_n13], {
              "border-width": xt(o.border),
              padding: xt(o.cellpadding)
            }), it(e) && Uo(l, t.children[_n13], {
              "border-color": o.bordercolor
            });
          }
          it(e) && (r["background-color"] = o.backgroundcolor, r["border-color"] = o.bordercolor, r["border-style"] = o.borderstyle), n.style = l.serializeStyle(_objectSpread({}, Ct(e), {}, r)), l.setAttribs(t, _objectSpread({}, vt(e), {}, n));
        })(e, t, r);

        var _o12 = n.select("caption", t)[0];
        (_o12 && !r.caption || !_o12 && r.caption) && e.execCommand("mceTableToggleCaption"), Ke(e, t, r.align);
      }

      if (e.focus(), e.addVisual(), v(a) > 0) {
        var _o13 = x(a, "caption"),
            _l14 = !_o13 || v(a) > 1;

        Je(e, t, {
          structure: _o13,
          style: _l14
        });
      }
    });
  },
      Ko = function Ko(e, t) {
    var o = e.dom;

    var l,
        n = function (e, t) {
      var o = Ct(e),
          l = vt(e),
          n = t ? {
        borderstyle: T(o, "border-style").getOr(""),
        bordercolor: Mo(T(o, "border-color").getOr("")),
        backgroundcolor: Mo(T(o, "background-color").getOr(""))
      } : {};
      return _objectSpread({
        height: "",
        width: "100%",
        cellspacing: "",
        cellpadding: "",
        caption: !1,
        "class": "",
        align: "",
        border: ""
      }, o, {}, l, {}, n, {}, function () {
        var t = o["border-width"];
        return ut(e) && t ? {
          border: t
        } : T(l, "border").fold(function () {
          return {};
        }, function (e) {
          return {
            border: e
          };
        });
      }(), {}, _objectSpread({}, T(o, "border-spacing").or(T(l, "cellspacing")).fold(function () {
        return {};
      }, function (e) {
        return {
          cellspacing: e
        };
      }), {}, T(o, "border-padding").or(T(l, "cellpadding")).fold(function () {
        return {};
      }, function (e) {
        return {
          cellpadding: e
        };
      })));
    }(e, it(e));

    !1 === t ? (l = o.getParent(e.selection.getStart(), "table", e.getBody()), l ? n = function (e, t, o) {
      var l = e.dom,
          n = ut(e) ? l.getStyle(t, "border-spacing") || l.getAttrib(t, "cellspacing") : l.getAttrib(t, "cellspacing") || l.getStyle(t, "border-spacing"),
          r = ut(e) ? Ge(l, t, "padding") || l.getAttrib(t, "cellpadding") : l.getAttrib(t, "cellpadding") || Ge(l, t, "padding");
      return _objectSpread({
        width: l.getStyle(t, "width") || l.getAttrib(t, "width"),
        height: l.getStyle(t, "height") || l.getAttrib(t, "height"),
        cellspacing: n,
        cellpadding: r,
        border: function (t, o) {
          var l = Oe(j.fromDom(o), "border-width");
          return ut(e) && l.isSome() ? l.getOr("") : t.getAttrib(o, "border") || Ge(e.dom, o, "border-width") || Ge(e.dom, o, "border");
        }(l, t),
        caption: !!l.select("caption", t)[0],
        "class": l.getAttrib(t, "class", ""),
        align: Bo(e, t)
      }, o ? No(t) : {});
    }(e, l, it(e)) : it(e) && (n.borderstyle = "", n.bordercolor = "", n.backgroundcolor = "")) : (n.cols = "1", n.rows = "1", it(e) && (n.borderstyle = "", n.bordercolor = "", n.backgroundcolor = ""));
    var r = co(gt(e));
    r.length > 0 && n["class"] && (n["class"] = n["class"].replace(/\s*mce\-item\-table\s*/g, ""));
    var a = {
      type: "grid",
      columns: 2,
      items: $o(e, r, t)
    },
        s = it(e) ? {
      type: "tabpanel",
      tabs: [{
        title: "General",
        name: "general",
        items: [a]
      }, wo(e, "table")]
    } : {
      type: "panel",
      items: [a]
    };
    e.windowManager.open({
      title: "Table Properties",
      size: "normal",
      body: s,
      onSubmit: b(Go, e, l, n),
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
      initialData: n
    });
  },
      Jo = u,
      Qo = function Qo(e) {
    var t = function t(e, _t7) {
      return fe(e, _t7).exists(function (e) {
        return parseInt(e, 10) > 1;
      });
    };

    return e.length > 0 && F(e, function (e) {
      return t(e, "rowspan") || t(e, "colspan");
    }) ? f.some(e) : f.none();
  },
      Xo = function Xo(e, t, o) {
    return t.length <= 1 ? f.none() : (l = e, n = o.firstSelectedSelector, r = o.lastSelectedSelector, Ht(l, n, r).bind(function (e) {
      var t = function t(e) {
        return Y(l, e);
      },
          o = "thead,tfoot,tbody,table",
          n = de(e.first, o, t),
          r = de(e.last, o, t);

      return n.bind(function (t) {
        return r.bind(function (o) {
          return Y(t, o) ? function (e, t, o) {
            var l = Ot(e);
            return _t(l, t, o);
          }(e.table, e.first, e.last) : f.none();
        });
      });
    })).map(function (e) {
      return {
        bounds: e,
        cells: t
      };
    });
    var l, n, r;
  },
      Yo = function Yo(e) {
    var t = ro(f.none()),
        o = ro([]);
    var l = f.none();

    var n = J("caption"),
        r = function r(e) {
      return l.forall(function (t) {
        return !t[e];
      });
    },
        a = function a() {
      return Wt(At(e), Tt(e)).bind(function (t) {
        return o = Se(Be(t), Wt(function (e) {
          return j.fromDom(e.selection.getEnd());
        }(e), Tt(e)).bind(Be), function (o, l) {
          return Y(o, l) ? n(t) ? f.some(function (e) {
            return {
              element: e,
              mergable: f.none(),
              unmergable: f.none(),
              selection: [e]
            };
          }(t)) : f.some(function (e, t, o) {
            return {
              element: o,
              mergable: Xo(t, e, Vt),
              unmergable: Qo(e),
              selection: Jo(e)
            };
          }(Ut(e), o, t)) : f.none();
        }), o.bind(u);
        var o;
      });
    },
        s = function s(e) {
      return Be(e.element).map(function (t) {
        var o = Ve(t),
            l = Ro(o, e).getOr([]),
            n = k(l, function (e, t) {
          return t.isLocked && (e.onAny = !0, 0 === t.column ? e.onFirst = !0 : t.column + t.colspan >= o.grid.columns && (e.onLast = !0)), e;
        }, {
          onAny: !1,
          onFirst: !1,
          onLast: !1
        });
        return {
          mergeable: Oo(o, e).isSome(),
          unmergeable: Do(o, e).isSome(),
          locked: n
        };
      });
    },
        c = function c() {
      t.set(function (e) {
        var t,
            o = !1;
        return function () {
          for (var _len5 = arguments.length, l = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            l[_key5] = arguments[_key5];
          }

          return o || (o = !0, t = e.apply(null, l)), t;
        };
      }(a)()), l = t.get().bind(s), N(o.get(), function (e) {
        return e();
      });
    },
        i = function i(e) {
      return e(), o.set(o.get().concat([e])), function () {
        o.set(P(o.get(), function (t) {
          return t !== e;
        }));
      };
    },
        m = function m(e, o) {
      return i(function () {
        return t.get().fold(function () {
          e.setEnabled(!1);
        }, function (t) {
          e.setEnabled(!o(t));
        });
      });
    },
        d = function d(e, o, l) {
      return i(function () {
        return t.get().fold(function () {
          e.setEnabled(!1), e.setActive(!1);
        }, function (t) {
          e.setEnabled(!o(t)), e.setActive(l(t));
        });
      });
    },
        p = function p(e) {
      return l.exists(function (t) {
        return t.locked[e];
      });
    },
        b = function b(t, o) {
      return function (l) {
        return d(l, function (e) {
          return n(e.element);
        }, function () {
          return e.queryCommandValue(t) === o;
        });
      };
    },
        h = b("mceTableRowType", "header"),
        y = b("mceTableColType", "th");

    return e.on("NodeChange ExecCommand TableSelectorChange", c), {
      onSetupTable: function onSetupTable(e) {
        return m(e, function (e) {
          return !1;
        });
      },
      onSetupCellOrRow: function onSetupCellOrRow(e) {
        return m(e, function (e) {
          return n(e.element);
        });
      },
      onSetupColumn: function onSetupColumn(e) {
        return function (t) {
          return m(t, function (t) {
            return n(t.element) || p(e);
          });
        };
      },
      onSetupPasteable: function onSetupPasteable(e) {
        return function (t) {
          return m(t, function (t) {
            return n(t.element) || e().isNone();
          });
        };
      },
      onSetupPasteableColumn: function onSetupPasteableColumn(e, t) {
        return function (o) {
          return m(o, function (o) {
            return n(o.element) || e().isNone() || p(t);
          });
        };
      },
      onSetupMergeable: function onSetupMergeable(e) {
        return m(e, function (e) {
          return r("mergeable");
        });
      },
      onSetupUnmergeable: function onSetupUnmergeable(e) {
        return m(e, function (e) {
          return r("unmergeable");
        });
      },
      resetTargets: c,
      onSetupTableWithCaption: function onSetupTableWithCaption(t) {
        return d(t, g, function (t) {
          return Be(t.element, Tt(e)).exists(function (e) {
            return ue(e, "caption").isSome();
          });
        });
      },
      onSetupTableRowHeaders: h,
      onSetupTableColumnHeaders: y,
      targets: t.get
    };
  };

  var Zo = tinymce.util.Tools.resolve("tinymce.FakeClipboard");

  var el = function el(e) {
    var t;
    var o = null !== (t = Zo.read()) && void 0 !== t ? t : [];
    return L(o, function (t) {
      return f.from(t.getType(e));
    });
  },
      tl = function tl() {
    return el("x-tinymce/dom-table-rows");
  },
      ol = function ol() {
    return el("x-tinymce/dom-table-columns");
  };

  e.add("table", function (e) {
    var t = Yo(e);
    (function (e) {
      var t = e.options.register;
      t("table_border_widths", {
        processor: "object[]",
        "default": Ze
      }), t("table_border_styles", {
        processor: "object[]",
        "default": et
      }), t("table_cell_advtab", {
        processor: "boolean",
        "default": !0
      }), t("table_row_advtab", {
        processor: "boolean",
        "default": !0
      }), t("table_advtab", {
        processor: "boolean",
        "default": !0
      }), t("table_appearance_options", {
        processor: "boolean",
        "default": !0
      }), t("table_grid", {
        processor: "boolean",
        "default": !Ye.deviceType.isTouch()
      }), t("table_cell_class_list", {
        processor: "object[]",
        "default": []
      }), t("table_row_class_list", {
        processor: "object[]",
        "default": []
      }), t("table_class_list", {
        processor: "object[]",
        "default": []
      }), t("table_toolbar", {
        processor: "string",
        "default": "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"
      }), t("table_background_color_map", {
        processor: "object[]",
        "default": []
      }), t("table_border_color_map", {
        processor: "object[]",
        "default": []
      });
    })(e), function (e) {
      S({
        mceTableProps: b(Ko, e, !1),
        mceTableRowProps: b(Wo, e),
        mceTableCellProps: b(Ho, e)
      }, function (t, o) {
        return e.addCommand(o, function () {
          return t();
        });
      }), e.addCommand("mceInsertTableDialog", function (t) {
        Ko(e, !0);
      });
    }(e), function (e, t) {
      var o = function o(t) {
        return function () {
          return e.execCommand(t);
        };
      },
          l = function l(t, _l15) {
        return !!e.queryCommandSupported(_l15.command) && (e.ui.registry.addMenuItem(t, _objectSpread({}, _l15, {
          onAction: c(_l15.onAction) ? _l15.onAction : o(_l15.command)
        })), !0);
      },
          n = function n(t, l) {
        e.queryCommandSupported(l.command) && e.ui.registry.addToggleMenuItem(t, _objectSpread({}, l, {
          onAction: c(l.onAction) ? l.onAction : o(l.command)
        }));
      },
          r = function r(t) {
        e.execCommand("mceInsertTable", !1, {
          rows: t.numRows,
          columns: t.numColumns
        });
      },
          a = [l("tableinsertrowbefore", {
        text: "Insert row before",
        icon: "table-insert-row-above",
        command: "mceTableInsertRowBefore",
        onSetup: t.onSetupCellOrRow
      }), l("tableinsertrowafter", {
        text: "Insert row after",
        icon: "table-insert-row-after",
        command: "mceTableInsertRowAfter",
        onSetup: t.onSetupCellOrRow
      }), l("tabledeleterow", {
        text: "Delete row",
        icon: "table-delete-row",
        command: "mceTableDeleteRow",
        onSetup: t.onSetupCellOrRow
      }), l("tablerowprops", {
        text: "Row properties",
        icon: "table-row-properties",
        command: "mceTableRowProps",
        onSetup: t.onSetupCellOrRow
      }), l("tablecutrow", {
        text: "Cut row",
        icon: "cut-row",
        command: "mceTableCutRow",
        onSetup: t.onSetupCellOrRow
      }), l("tablecopyrow", {
        text: "Copy row",
        icon: "duplicate-row",
        command: "mceTableCopyRow",
        onSetup: t.onSetupCellOrRow
      }), l("tablepasterowbefore", {
        text: "Paste row before",
        icon: "paste-row-before",
        command: "mceTablePasteRowBefore",
        onSetup: t.onSetupPasteable(tl)
      }), l("tablepasterowafter", {
        text: "Paste row after",
        icon: "paste-row-after",
        command: "mceTablePasteRowAfter",
        onSetup: t.onSetupPasteable(tl)
      })],
          s = [l("tableinsertcolumnbefore", {
        text: "Insert column before",
        icon: "table-insert-column-before",
        command: "mceTableInsertColBefore",
        onSetup: t.onSetupColumn("onFirst")
      }), l("tableinsertcolumnafter", {
        text: "Insert column after",
        icon: "table-insert-column-after",
        command: "mceTableInsertColAfter",
        onSetup: t.onSetupColumn("onLast")
      }), l("tabledeletecolumn", {
        text: "Delete column",
        icon: "table-delete-column",
        command: "mceTableDeleteCol",
        onSetup: t.onSetupColumn("onAny")
      }), l("tablecutcolumn", {
        text: "Cut column",
        icon: "cut-column",
        command: "mceTableCutCol",
        onSetup: t.onSetupColumn("onAny")
      }), l("tablecopycolumn", {
        text: "Copy column",
        icon: "duplicate-column",
        command: "mceTableCopyCol",
        onSetup: t.onSetupColumn("onAny")
      }), l("tablepastecolumnbefore", {
        text: "Paste column before",
        icon: "paste-column-before",
        command: "mceTablePasteColBefore",
        onSetup: t.onSetupPasteableColumn(ol, "onFirst")
      }), l("tablepastecolumnafter", {
        text: "Paste column after",
        icon: "paste-column-after",
        command: "mceTablePasteColAfter",
        onSetup: t.onSetupPasteableColumn(ol, "onLast")
      })],
          i = [l("tablecellprops", {
        text: "Cell properties",
        icon: "table-cell-properties",
        command: "mceTableCellProps",
        onSetup: t.onSetupCellOrRow
      }), l("tablemergecells", {
        text: "Merge cells",
        icon: "table-merge-cells",
        command: "mceTableMergeCells",
        onSetup: t.onSetupMergeable
      }), l("tablesplitcells", {
        text: "Split cell",
        icon: "table-split-cells",
        command: "mceTableSplitCells",
        onSetup: t.onSetupUnmergeable
      })];

      dt(e) ? e.ui.registry.addNestedMenuItem("inserttable", {
        text: "Table",
        icon: "table",
        getSubmenuItems: function getSubmenuItems() {
          return [{
            type: "fancymenuitem",
            fancytype: "inserttable",
            onAction: r
          }];
        }
      }) : e.ui.registry.addMenuItem("inserttable", {
        text: "Table",
        icon: "table",
        onAction: o("mceInsertTableDialog")
      }), e.ui.registry.addMenuItem("inserttabledialog", {
        text: "Insert table",
        icon: "table",
        onAction: o("mceInsertTableDialog")
      }), l("tableprops", {
        text: "Table properties",
        onSetup: t.onSetupTable,
        command: "mceTableProps"
      }), l("deletetable", {
        text: "Delete table",
        icon: "table-delete-table",
        onSetup: t.onSetupTable,
        command: "mceTableDelete"
      }), O(a, !0) && e.ui.registry.addNestedMenuItem("row", {
        type: "nestedmenuitem",
        text: "Row",
        getSubmenuItems: d("tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter")
      }), O(s, !0) && e.ui.registry.addNestedMenuItem("column", {
        type: "nestedmenuitem",
        text: "Column",
        getSubmenuItems: d("tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter")
      }), O(i, !0) && e.ui.registry.addNestedMenuItem("cell", {
        type: "nestedmenuitem",
        text: "Cell",
        getSubmenuItems: d("tablecellprops tablemergecells tablesplitcells")
      }), e.ui.registry.addContextMenu("table", {
        update: function update() {
          return t.resetTargets(), t.targets().fold(d(""), function (e) {
            return "caption" === V(e.element) ? "tableprops deletetable" : "cell row column | advtablesort | tableprops deletetable";
          });
        }
      });
      var m = uo(gt(e));
      0 !== m.length && e.queryCommandSupported("mceTableToggleClass") && e.ui.registry.addNestedMenuItem("tableclass", {
        icon: "table-classes",
        text: "Table styles",
        getSubmenuItems: function getSubmenuItems() {
          return io(e, m, "tableclass", function (t) {
            return e.execCommand("mceTableToggleClass", !1, t);
          });
        },
        onSetup: t.onSetupTable
      });
      var u = uo(pt(e));
      0 !== u.length && e.queryCommandSupported("mceTableCellToggleClass") && e.ui.registry.addNestedMenuItem("tablecellclass", {
        icon: "table-cell-classes",
        text: "Cell styles",
        getSubmenuItems: function getSubmenuItems() {
          return io(e, u, "tablecellclass", function (t) {
            return e.execCommand("mceTableCellToggleClass", !1, t);
          });
        },
        onSetup: t.onSetupCellOrRow
      }), e.queryCommandSupported("mceTableApplyCellStyle") && (e.ui.registry.addNestedMenuItem("tablecellvalign", {
        icon: "vertical-align",
        text: "Vertical align",
        getSubmenuItems: function getSubmenuItems() {
          return io(e, Kt, "tablecellverticalalign", mo(e, "vertical-align"));
        },
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addNestedMenuItem("tablecellborderwidth", {
        icon: "border-width",
        text: "Border width",
        getSubmenuItems: function getSubmenuItems() {
          return io(e, rt(e), "tablecellborderwidth", mo(e, "border-width"));
        },
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addNestedMenuItem("tablecellborderstyle", {
        icon: "border-style",
        text: "Border style",
        getSubmenuItems: function getSubmenuItems() {
          return io(e, at(e), "tablecellborderstyle", mo(e, "border-style"));
        },
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addNestedMenuItem("tablecellbackgroundcolor", {
        icon: "cell-background-color",
        text: "Background color",
        getSubmenuItems: function getSubmenuItems() {
          return bo(e, ft(e), "background-color");
        },
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addNestedMenuItem("tablecellbordercolor", {
        icon: "cell-border-color",
        text: "Border color",
        getSubmenuItems: function getSubmenuItems() {
          return bo(e, yt(e), "border-color");
        },
        onSetup: t.onSetupCellOrRow
      })), n("tablecaption", {
        icon: "table-caption",
        text: "Table caption",
        command: "mceTableToggleCaption",
        onSetup: t.onSetupTableWithCaption
      }), n("tablerowheader", {
        text: "Row header",
        icon: "table-top-header",
        command: "mceTableRowType",
        onAction: go(e),
        onSetup: t.onSetupTableRowHeaders
      }), n("tablecolheader", {
        text: "Column header",
        icon: "table-left-header",
        command: "mceTableColType",
        onAction: ho(e),
        onSetup: t.onSetupTableRowHeaders
      });
    }(e, t), function (e, t) {
      e.ui.registry.addMenuButton("table", {
        tooltip: "Table",
        icon: "table",
        fetch: function fetch(e) {
          return e("inserttable | cell row column | advtablesort | tableprops deletetable");
        }
      });

      var o = function o(t) {
        return function () {
          return e.execCommand(t);
        };
      },
          l = function l(t, _l16) {
        e.queryCommandSupported(_l16.command) && e.ui.registry.addButton(t, _objectSpread({}, _l16, {
          onAction: c(_l16.onAction) ? _l16.onAction : o(_l16.command)
        }));
      },
          n = function n(t, l) {
        e.queryCommandSupported(l.command) && e.ui.registry.addToggleButton(t, _objectSpread({}, l, {
          onAction: c(l.onAction) ? l.onAction : o(l.command)
        }));
      };

      l("tableprops", {
        tooltip: "Table properties",
        command: "mceTableProps",
        icon: "table",
        onSetup: t.onSetupTable
      }), l("tabledelete", {
        tooltip: "Delete table",
        command: "mceTableDelete",
        icon: "table-delete-table",
        onSetup: t.onSetupTable
      }), l("tablecellprops", {
        tooltip: "Cell properties",
        command: "mceTableCellProps",
        icon: "table-cell-properties",
        onSetup: t.onSetupCellOrRow
      }), l("tablemergecells", {
        tooltip: "Merge cells",
        command: "mceTableMergeCells",
        icon: "table-merge-cells",
        onSetup: t.onSetupMergeable
      }), l("tablesplitcells", {
        tooltip: "Split cell",
        command: "mceTableSplitCells",
        icon: "table-split-cells",
        onSetup: t.onSetupUnmergeable
      }), l("tableinsertrowbefore", {
        tooltip: "Insert row before",
        command: "mceTableInsertRowBefore",
        icon: "table-insert-row-above",
        onSetup: t.onSetupCellOrRow
      }), l("tableinsertrowafter", {
        tooltip: "Insert row after",
        command: "mceTableInsertRowAfter",
        icon: "table-insert-row-after",
        onSetup: t.onSetupCellOrRow
      }), l("tabledeleterow", {
        tooltip: "Delete row",
        command: "mceTableDeleteRow",
        icon: "table-delete-row",
        onSetup: t.onSetupCellOrRow
      }), l("tablerowprops", {
        tooltip: "Row properties",
        command: "mceTableRowProps",
        icon: "table-row-properties",
        onSetup: t.onSetupCellOrRow
      }), l("tableinsertcolbefore", {
        tooltip: "Insert column before",
        command: "mceTableInsertColBefore",
        icon: "table-insert-column-before",
        onSetup: t.onSetupColumn("onFirst")
      }), l("tableinsertcolafter", {
        tooltip: "Insert column after",
        command: "mceTableInsertColAfter",
        icon: "table-insert-column-after",
        onSetup: t.onSetupColumn("onLast")
      }), l("tabledeletecol", {
        tooltip: "Delete column",
        command: "mceTableDeleteCol",
        icon: "table-delete-column",
        onSetup: t.onSetupColumn("onAny")
      }), l("tablecutrow", {
        tooltip: "Cut row",
        command: "mceTableCutRow",
        icon: "cut-row",
        onSetup: t.onSetupCellOrRow
      }), l("tablecopyrow", {
        tooltip: "Copy row",
        command: "mceTableCopyRow",
        icon: "duplicate-row",
        onSetup: t.onSetupCellOrRow
      }), l("tablepasterowbefore", {
        tooltip: "Paste row before",
        command: "mceTablePasteRowBefore",
        icon: "paste-row-before",
        onSetup: t.onSetupPasteable(tl)
      }), l("tablepasterowafter", {
        tooltip: "Paste row after",
        command: "mceTablePasteRowAfter",
        icon: "paste-row-after",
        onSetup: t.onSetupPasteable(tl)
      }), l("tablecutcol", {
        tooltip: "Cut column",
        command: "mceTableCutCol",
        icon: "cut-column",
        onSetup: t.onSetupColumn("onAny")
      }), l("tablecopycol", {
        tooltip: "Copy column",
        command: "mceTableCopyCol",
        icon: "duplicate-column",
        onSetup: t.onSetupColumn("onAny")
      }), l("tablepastecolbefore", {
        tooltip: "Paste column before",
        command: "mceTablePasteColBefore",
        icon: "paste-column-before",
        onSetup: t.onSetupPasteableColumn(ol, "onFirst")
      }), l("tablepastecolafter", {
        tooltip: "Paste column after",
        command: "mceTablePasteColAfter",
        icon: "paste-column-after",
        onSetup: t.onSetupPasteableColumn(ol, "onLast")
      }), l("tableinsertdialog", {
        tooltip: "Insert table",
        command: "mceInsertTableDialog",
        icon: "table"
      });
      var r = uo(gt(e));
      0 !== r.length && e.queryCommandSupported("mceTableToggleClass") && e.ui.registry.addMenuButton("tableclass", {
        icon: "table-classes",
        tooltip: "Table styles",
        fetch: po(e, r, "tableclass", function (t) {
          return e.execCommand("mceTableToggleClass", !1, t);
        }),
        onSetup: t.onSetupTable
      });
      var a = uo(pt(e));
      0 !== a.length && e.queryCommandSupported("mceTableCellToggleClass") && e.ui.registry.addMenuButton("tablecellclass", {
        icon: "table-cell-classes",
        tooltip: "Cell styles",
        fetch: po(e, a, "tablecellclass", function (t) {
          return e.execCommand("mceTableCellToggleClass", !1, t);
        }),
        onSetup: t.onSetupCellOrRow
      }), e.queryCommandSupported("mceTableApplyCellStyle") && (e.ui.registry.addMenuButton("tablecellvalign", {
        icon: "vertical-align",
        tooltip: "Vertical align",
        fetch: po(e, Kt, "tablecellverticalalign", mo(e, "vertical-align")),
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addMenuButton("tablecellborderwidth", {
        icon: "border-width",
        tooltip: "Border width",
        fetch: po(e, rt(e), "tablecellborderwidth", mo(e, "border-width")),
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addMenuButton("tablecellborderstyle", {
        icon: "border-style",
        tooltip: "Border style",
        fetch: po(e, at(e), "tablecellborderstyle", mo(e, "border-style")),
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addMenuButton("tablecellbackgroundcolor", {
        icon: "cell-background-color",
        tooltip: "Background color",
        fetch: function fetch(t) {
          return t(bo(e, ft(e), "background-color"));
        },
        onSetup: t.onSetupCellOrRow
      }), e.ui.registry.addMenuButton("tablecellbordercolor", {
        icon: "cell-border-color",
        tooltip: "Border color",
        fetch: function fetch(t) {
          return t(bo(e, yt(e), "border-color"));
        },
        onSetup: t.onSetupCellOrRow
      })), n("tablecaption", {
        tooltip: "Table caption",
        icon: "table-caption",
        command: "mceTableToggleCaption",
        onSetup: t.onSetupTableWithCaption
      }), n("tablerowheader", {
        tooltip: "Row header",
        icon: "table-top-header",
        command: "mceTableRowType",
        onAction: go(e),
        onSetup: t.onSetupTableRowHeaders
      }), n("tablecolheader", {
        tooltip: "Column header",
        icon: "table-left-header",
        command: "mceTableColType",
        onAction: ho(e),
        onSetup: t.onSetupTableColumnHeaders
      });
    }(e, t), function (e) {
      var t = ht(e);
      t.length > 0 && e.ui.registry.addContextToolbar("table", {
        predicate: function predicate(t) {
          return e.dom.is(t, "table") && e.getBody().contains(t);
        },
        items: t,
        scope: "node",
        position: "node"
      });
    }(e);
  });
}();