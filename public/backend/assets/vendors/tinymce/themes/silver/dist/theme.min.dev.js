"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var _qa;

  var e = Object.getPrototypeOf,
      t = function t(e, _t2, o) {
    var n;
    return !!o(e, _t2.prototype) || (null === (n = e.constructor) || void 0 === n ? void 0 : n.name) === _t2.name;
  },
      o = function o(e) {
    return function (o) {
      return function (e) {
        var o = _typeof(e);

        return null === e ? "null" : "object" === o && Array.isArray(e) ? "array" : "object" === o && t(e, String, function (e, t) {
          return t.isPrototypeOf(e);
        }) ? "string" : o;
      }(o) === e;
    };
  },
      n = function n(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      s = function s(e) {
    return function (t) {
      return e === t;
    };
  },
      r = o("string"),
      a = o("object"),
      i = function i(o) {
    return function (o, n) {
      return a(o) && t(o, n, function (t, o) {
        return e(t) === o;
      });
    }(o, Object);
  },
      l = o("array"),
      c = s(null),
      d = n("boolean"),
      u = s(void 0),
      m = function m(e) {
    return null == e;
  },
      g = function g(e) {
    return !m(e);
  },
      p = n("function"),
      h = n("number"),
      f = function f(e, t) {
    if (l(e)) {
      for (var _o2 = 0, _n2 = e.length; _o2 < _n2; ++_o2) {
        if (!t(e[_o2])) return !1;
      }

      return !0;
    }

    return !1;
  },
      b = function b() {},
      v = function v(e, t) {
    return function () {
      for (var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++) {
        o[_key] = arguments[_key];
      }

      return e(t.apply(null, o));
    };
  },
      y = function y(e) {
    return function () {
      return e;
    };
  },
      x = function x(e) {
    return e;
  },
      w = function w(e, t) {
    return e === t;
  };

  function S(e) {
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, o = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        o[_key3] = arguments[_key3];
      }

      var n = t.concat(o);
      return e.apply(null, n);
    };
  }

  var k = function k(e) {
    return function (t) {
      return !e(t);
    };
  },
      C = function C(e) {
    return function () {
      throw new Error(e);
    };
  },
      O = function O(e) {
    return e();
  },
      _ = y(!1),
      T = y(!0);

  var E = tinymce.util.Tools.resolve("tinymce.ThemeManager");

  var B =
  /*#__PURE__*/
  function () {
    function B(e, t) {
      _classCallCheck(this, B);

      this.tag = e, this.value = t;
    }

    _createClass(B, [{
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
        return this.tag ? B.some(e(this.value)) : B.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : B.none();
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
        return !this.tag || e(this.value) ? this : B.none();
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
        return new B(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return B.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return g(e) ? B.some(e) : B.none();
      }
    }]);

    return B;
  }();

  B.singletonNone = new B(!1);

  var M = Array.prototype.slice,
      A = Array.prototype.indexOf,
      D = Array.prototype.push,
      F = function F(e, t) {
    return A.call(e, t);
  },
      I = function I(e, t) {
    var o = F(e, t);
    return -1 === o ? B.none() : B.some(o);
  },
      R = function R(e, t) {
    return F(e, t) > -1;
  },
      V = function V(e, t) {
    for (var _o3 = 0, _n3 = e.length; _o3 < _n3; _o3++) {
      if (t(e[_o3], _o3)) return !0;
    }

    return !1;
  },
      z = function z(e, t) {
    var o = [];

    for (var _n4 = 0; _n4 < e; _n4++) {
      o.push(t(_n4));
    }

    return o;
  },
      H = function H(e, t) {
    var o = [];

    for (var _n5 = 0; _n5 < e.length; _n5 += t) {
      var _s2 = M.call(e, _n5, _n5 + t);

      o.push(_s2);
    }

    return o;
  },
      P = function P(e, t) {
    var o = e.length,
        n = new Array(o);

    for (var _s3 = 0; _s3 < o; _s3++) {
      var _o4 = e[_s3];
      n[_s3] = t(_o4, _s3);
    }

    return n;
  },
      N = function N(e, t) {
    for (var _o5 = 0, _n6 = e.length; _o5 < _n6; _o5++) {
      t(e[_o5], _o5);
    }
  },
      L = function L(e, t) {
    var o = [],
        n = [];

    for (var _s4 = 0, _r2 = e.length; _s4 < _r2; _s4++) {
      var _r3 = e[_s4];
      (t(_r3, _s4) ? o : n).push(_r3);
    }

    return {
      pass: o,
      fail: n
    };
  },
      W = function W(e, t) {
    var o = [];

    for (var _n7 = 0, _s5 = e.length; _n7 < _s5; _n7++) {
      var _s6 = e[_n7];
      t(_s6, _n7) && o.push(_s6);
    }

    return o;
  },
      U = function U(e, t, o) {
    return function (e, t) {
      for (var _o6 = e.length - 1; _o6 >= 0; _o6--) {
        t(e[_o6], _o6);
      }
    }(e, function (e, n) {
      o = t(o, e, n);
    }), o;
  },
      j = function j(e, t, o) {
    return N(e, function (e, n) {
      o = t(o, e, n);
    }), o;
  },
      G = function G(e, t) {
    return function (e, t, o) {
      for (var _n8 = 0, _s7 = e.length; _n8 < _s7; _n8++) {
        var _s8 = e[_n8];
        if (t(_s8, _n8)) return B.some(_s8);
        if (o(_s8, _n8)) break;
      }

      return B.none();
    }(e, t, _);
  },
      $ = function $(e, t) {
    for (var _o7 = 0, _n9 = e.length; _o7 < _n9; _o7++) {
      if (t(e[_o7], _o7)) return B.some(_o7);
    }

    return B.none();
  },
      q = function q(e) {
    var t = [];

    for (var _o8 = 0, _n10 = e.length; _o8 < _n10; ++_o8) {
      if (!l(e[_o8])) throw new Error("Arr.flatten item " + _o8 + " was not an array, input: " + e);
      D.apply(t, e[_o8]);
    }

    return t;
  },
      X = function X(e, t) {
    return q(P(e, t));
  },
      K = function K(e, t) {
    for (var _o9 = 0, _n11 = e.length; _o9 < _n11; ++_o9) {
      if (!0 !== t(e[_o9], _o9)) return !1;
    }

    return !0;
  },
      Y = function Y(e) {
    var t = M.call(e, 0);
    return t.reverse(), t;
  },
      J = function J(e, t) {
    return W(e, function (e) {
      return !R(t, e);
    });
  },
      Z = function Z(e, t) {
    var o = {};

    for (var _n12 = 0, _s9 = e.length; _n12 < _s9; _n12++) {
      var _s10 = e[_n12];
      o[String(_s10)] = t(_s10, _n12);
    }

    return o;
  },
      Q = function Q(e) {
    return [e];
  },
      ee = function ee(e, t) {
    var o = M.call(e, 0);
    return o.sort(t), o;
  },
      te = function te(e, t) {
    return t >= 0 && t < e.length ? B.some(e[t]) : B.none();
  },
      oe = function oe(e) {
    return te(e, 0);
  },
      ne = function ne(e) {
    return te(e, e.length - 1);
  },
      se = p(Array.from) ? Array.from : function (e) {
    return M.call(e);
  },
      re = function re(e, t) {
    for (var _o10 = 0; _o10 < e.length; _o10++) {
      var _n13 = t(e[_o10], _o10);

      if (_n13.isSome()) return _n13;
    }

    return B.none();
  },
      ae = Object.keys,
      ie = Object.hasOwnProperty,
      le = function le(e, t) {
    var o = ae(e);

    for (var _n14 = 0, _s11 = o.length; _n14 < _s11; _n14++) {
      var _s12 = o[_n14];
      t(e[_s12], _s12);
    }
  },
      ce = function ce(e, t) {
    return de(e, function (e, o) {
      return {
        k: o,
        v: t(e, o)
      };
    });
  },
      de = function de(e, t) {
    var o = {};
    return le(e, function (e, n) {
      var s = t(e, n);
      o[s.k] = s.v;
    }), o;
  },
      ue = function ue(e) {
    return function (t, o) {
      e[o] = t;
    };
  },
      me = function me(e, t, o, n) {
    return le(e, function (e, s) {
      (t(e, s) ? o : n)(e, s);
    }), {};
  },
      ge = function ge(e, t) {
    var o = {};
    return me(e, t, ue(o), b), o;
  },
      pe = function pe(e, t) {
    var o = [];
    return le(e, function (e, n) {
      o.push(t(e, n));
    }), o;
  },
      he = function he(e, t) {
    var o = ae(e);

    for (var _n15 = 0, _s13 = o.length; _n15 < _s13; _n15++) {
      var _s14 = o[_n15],
          _r4 = e[_s14];
      if (t(_r4, _s14, e)) return B.some(_r4);
    }

    return B.none();
  },
      fe = function fe(e) {
    return pe(e, x);
  },
      be = function be(e, t) {
    return ve(e, t) ? B.from(e[t]) : B.none();
  },
      ve = function ve(e, t) {
    return ie.call(e, t);
  },
      ye = function ye(e, t) {
    return ve(e, t) && void 0 !== e[t] && null !== e[t];
  },
      xe = function xe(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : w;
    return e.exists(function (e) {
      return o(e, t);
    });
  },
      we = function we(e) {
    var t = [],
        o = function o(e) {
      t.push(e);
    };

    for (var _t3 = 0; _t3 < e.length; _t3++) {
      e[_t3].each(o);
    }

    return t;
  },
      Se = function Se(e, t, o) {
    return e.isSome() && t.isSome() ? B.some(o(e.getOrDie(), t.getOrDie())) : B.none();
  },
      ke = function ke(e, t) {
    return e ? B.some(t) : B.none();
  },
      Ce = function Ce(e, t, o) {
    return "" === t || e.length >= t.length && e.substr(o, o + t.length) === t;
  },
      Oe = function Oe(e, t) {
    return -1 !== e.indexOf(t);
  },
      _e = function _e(e, t) {
    return Ce(e, t, e.length - t.length);
  },
      Te = (Re = /^\s+|\s+$/g, function (e) {
    return e.replace(Re, "");
  }),
      Ee = function Ee(e) {
    return e.length > 0;
  },
      Be = function Be(e) {
    return void 0 !== e.style && p(e.style.getPropertyValue);
  },
      Me = function Me(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      Ae = function Ae(e, t) {
    var o = (t || document).createElement("div");

    if (o.innerHTML = e, !o.hasChildNodes() || o.childNodes.length > 1) {
      var _t4 = "HTML does not have a single root node";
      throw console.error(_t4, e), new Error(_t4);
    }

    return Me(o.childNodes[0]);
  },
      De = function De(e, t) {
    var o = (t || document).createElement(e);
    return Me(o);
  },
      Fe = function Fe(e, t) {
    var o = (t || document).createTextNode(e);
    return Me(o);
  },
      Ie = Me;

  var Re;
  "undefined" != typeof window ? window : Function("return this;")();

  var Ve = function Ve(e) {
    return e.dom.nodeName.toLowerCase();
  },
      ze = function ze(e) {
    return function (t) {
      return function (e) {
        return e.dom.nodeType;
      }(t) === e;
    };
  },
      He = ze(1),
      Pe = ze(3),
      Ne = ze(9),
      Le = ze(11),
      We = function We(e) {
    return function (t) {
      return He(t) && Ve(t) === e;
    };
  },
      Ue = function Ue(e, t) {
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
      je = function je(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  },
      Ge = function Ge(e, t) {
    return e.dom === t.dom;
  },
      $e = function $e(e, t) {
    var o = e.dom,
        n = t.dom;
    return o !== n && o.contains(n);
  },
      qe = function qe(e) {
    return Ie(e.dom.ownerDocument);
  },
      Xe = function Xe(e) {
    return Ne(e) ? e : qe(e);
  },
      Ke = function Ke(e) {
    return Ie(Xe(e).dom.documentElement);
  },
      Ye = function Ye(e) {
    return Ie(Xe(e).dom.defaultView);
  },
      Je = function Je(e) {
    return B.from(e.dom.parentNode).map(Ie);
  },
      Ze = function Ze(e) {
    return B.from(e.dom.parentElement).map(Ie);
  },
      Qe = function Qe(e) {
    return B.from(e.dom.offsetParent).map(Ie);
  },
      et = function et(e) {
    return P(e.dom.childNodes, Ie);
  },
      tt = function tt(e, t) {
    var o = e.dom.childNodes;
    return B.from(o[t]).map(Ie);
  },
      ot = function ot(e, t) {
    return {
      element: e,
      offset: t
    };
  },
      nt = function nt(e, t) {
    var o = et(e);
    return o.length > 0 && t < o.length ? ot(o[t], 0) : ot(e, t);
  },
      st = function st(e) {
    return Le(e) && g(e.dom.host);
  },
      rt = p(Element.prototype.attachShadow) && p(Node.prototype.getRootNode),
      at = y(rt),
      it = rt ? function (e) {
    return Ie(e.dom.getRootNode());
  } : Xe,
      lt = function lt(e) {
    return st(e) ? e : Ie(Xe(e).dom.body);
  },
      ct = function ct(e) {
    var t = it(e);
    return st(t) ? B.some(t) : B.none();
  },
      dt = function dt(e) {
    return Ie(e.dom.host);
  },
      ut = function ut(e) {
    var t = Pe(e) ? e.dom.parentNode : e.dom;
    if (null == t || null === t.ownerDocument) return !1;
    var o = t.ownerDocument;
    return ct(Ie(t)).fold(function () {
      return o.body.contains(t);
    }, (n = ut, s = dt, function (e) {
      return n(s(e));
    }));
    var n, s;
  },
      mt = function mt() {
    return gt(Ie(document));
  },
      gt = function gt(e) {
    var t = e.dom.body;
    if (null == t) throw new Error("Body is not available yet");
    return Ie(t);
  },
      pt = function pt(e, t, o) {
    if (!(r(o) || d(o) || h(o))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", o, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(t, o + "");
  },
      ht = function ht(e, t, o) {
    pt(e.dom, t, o);
  },
      ft = function ft(e, t) {
    var o = e.dom;
    le(t, function (e, t) {
      pt(o, t, e);
    });
  },
      bt = function bt(e, t) {
    var o = e.dom.getAttribute(t);
    return null === o ? void 0 : o;
  },
      vt = function vt(e, t) {
    return B.from(bt(e, t));
  },
      yt = function yt(e, t) {
    var o = e.dom;
    return !(!o || !o.hasAttribute) && o.hasAttribute(t);
  },
      xt = function xt(e, t) {
    e.dom.removeAttribute(t);
  },
      wt = function wt(e, t, o) {
    if (!r(o)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", o, ":: Element ", e), new Error("CSS value must be a string: " + o);
    Be(e) && e.style.setProperty(t, o);
  },
      St = function St(e, t) {
    Be(e) && e.style.removeProperty(t);
  },
      kt = function kt(e, t, o) {
    var n = e.dom;
    wt(n, t, o);
  },
      Ct = function Ct(e, t) {
    var o = e.dom;
    le(t, function (e, t) {
      wt(o, t, e);
    });
  },
      Ot = function Ot(e, t) {
    var o = e.dom;
    le(t, function (e, t) {
      e.fold(function () {
        St(o, t);
      }, function (e) {
        wt(o, t, e);
      });
    });
  },
      _t = function _t(e, t) {
    var o = e.dom,
        n = window.getComputedStyle(o).getPropertyValue(t);
    return "" !== n || ut(e) ? n : Tt(o, t);
  },
      Tt = function Tt(e, t) {
    return Be(e) ? e.style.getPropertyValue(t) : "";
  },
      Et = function Et(e, t) {
    var o = e.dom,
        n = Tt(o, t);
    return B.from(n).filter(function (e) {
      return e.length > 0;
    });
  },
      Bt = function Bt(e) {
    var t = {},
        o = e.dom;
    if (Be(o)) for (var _e3 = 0; _e3 < o.style.length; _e3++) {
      var _n16 = o.style.item(_e3);

      t[_n16] = o.style[_n16];
    }
    return t;
  },
      Mt = function Mt(e, t, o) {
    var n = De(e);
    return kt(n, t, o), Et(n, t).isSome();
  },
      At = function At(e, t) {
    var o = e.dom;
    St(o, t), xe(vt(e, "style").map(Te), "") && xt(e, "style");
  },
      Dt = function Dt(e) {
    return e.dom.offsetWidth;
  },
      Ft = function Ft(e, t) {
    var o = function o(_o11) {
      var n = t(_o11);

      if (n <= 0 || null === n) {
        var _t5 = _t(_o11, e);

        return parseFloat(_t5) || 0;
      }

      return n;
    },
        n = function n(e, t) {
      return j(t, function (t, o) {
        var n = _t(e, o),
            s = void 0 === n ? 0 : parseInt(n, 10);

        return isNaN(s) ? t : t + s;
      }, 0);
    };

    return {
      set: function set(t, o) {
        if (!h(o) && !o.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + o);
        var n = t.dom;
        Be(n) && (n.style[e] = o + "px");
      },
      get: o,
      getOuter: o,
      aggregate: n,
      max: function max(e, t, o) {
        var s = n(e, o);
        return t > s ? t - s : 0;
      }
    };
  },
      It = Ft("height", function (e) {
    var t = e.dom;
    return ut(e) ? t.getBoundingClientRect().height : t.offsetHeight;
  }),
      Rt = function Rt(e) {
    return It.get(e);
  },
      Vt = function Vt(e) {
    return It.getOuter(e);
  },
      zt = function zt(e, t) {
    return {
      left: e,
      top: t,
      translate: function translate(o, n) {
        return zt(e + o, t + n);
      }
    };
  },
      Ht = zt,
      Pt = function Pt(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : 0;
  },
      Nt = function Nt(e) {
    var t = e.dom.ownerDocument,
        o = t.body,
        n = t.defaultView,
        s = t.documentElement;
    if (o === e.dom) return Ht(o.offsetLeft, o.offsetTop);
    var r = Pt(null == n ? void 0 : n.pageYOffset, s.scrollTop),
        a = Pt(null == n ? void 0 : n.pageXOffset, s.scrollLeft),
        i = Pt(s.clientTop, o.clientTop),
        l = Pt(s.clientLeft, o.clientLeft);
    return Lt(e).translate(a - l, r - i);
  },
      Lt = function Lt(e) {
    var t = e.dom,
        o = t.ownerDocument.body;
    return o === t ? Ht(o.offsetLeft, o.offsetTop) : ut(e) ? function (e) {
      var t = e.getBoundingClientRect();
      return Ht(t.left, t.top);
    }(t) : Ht(0, 0);
  },
      Wt = Ft("width", function (e) {
    return e.dom.offsetWidth;
  }),
      Ut = function Ut(e) {
    return Wt.get(e);
  },
      jt = function jt(e) {
    return Wt.getOuter(e);
  },
      Gt = function Gt(e) {
    var t,
        o = !1;
    return function () {
      for (var _len4 = arguments.length, n = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        n[_key4] = arguments[_key4];
      }

      return o || (o = !0, t = e.apply(null, n)), t;
    };
  },
      $t = function $t() {
    return qt(0, 0);
  },
      qt = function qt(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      Xt = {
    nu: qt,
    detect: function detect(e, t) {
      var o = String(t).toLowerCase();
      return 0 === e.length ? $t() : function (e, t) {
        var o = function (e, t) {
          for (var _o12 = 0; _o12 < e.length; _o12++) {
            var _n17 = e[_o12];
            if (_n17.test(t)) return _n17;
          }
        }(e, t);

        if (!o) return {
          major: 0,
          minor: 0
        };

        var n = function n(e) {
          return Number(t.replace(o, "$" + e));
        };

        return qt(n(1), n(2));
      }(e, o);
    },
    unknown: $t
  },
      Kt = function Kt(e, t) {
    var o = String(t).toLowerCase();
    return G(e, function (e) {
      return e.search(o);
    });
  },
      Yt = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Jt = function Jt(e) {
    return function (t) {
      return Oe(t, e);
    };
  },
      Zt = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return Oe(e, "edge/") && Oe(e, "chrome") && Oe(e, "safari") && Oe(e, "applewebkit");
    }
  }, {
    name: "Chromium",
    brand: "Chromium",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Yt],
    search: function search(e) {
      return Oe(e, "chrome") && !Oe(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return Oe(e, "msie") || Oe(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [Yt, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Jt("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Jt("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Yt, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (Oe(e, "safari") || Oe(e, "mobile/")) && Oe(e, "applewebkit");
    }
  }],
      Qt = [{
    name: "Windows",
    search: Jt("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return Oe(e, "iphone") || Oe(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Jt("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "macOS",
    search: Jt("mac os x"),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Jt("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Jt("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Jt("freebsd"),
    versionRegexes: []
  }, {
    name: "ChromeOS",
    search: Jt("cros"),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }],
      eo = {
    browsers: y(Zt),
    oses: y(Qt)
  },
      to = "Edge",
      oo = "Chromium",
      no = "Opera",
      so = "Firefox",
      ro = "Safari",
      ao = function ao(e) {
    var t = e.current,
        o = e.version,
        n = function n(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: o,
      isEdge: n(to),
      isChromium: n(oo),
      isIE: n("IE"),
      isOpera: n(no),
      isFirefox: n(so),
      isSafari: n(ro)
    };
  },
      io = function io() {
    return ao({
      current: void 0,
      version: Xt.unknown()
    });
  },
      lo = ao,
      co = (y(to), y(oo), y("IE"), y(no), y(so), y(ro), "Windows"),
      uo = "Android",
      mo = "Linux",
      go = "macOS",
      po = "Solaris",
      ho = "FreeBSD",
      fo = "ChromeOS",
      bo = function bo(e) {
    var t = e.current,
        o = e.version,
        n = function n(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: o,
      isWindows: n(co),
      isiOS: n("iOS"),
      isAndroid: n(uo),
      isMacOS: n(go),
      isLinux: n(mo),
      isSolaris: n(po),
      isFreeBSD: n(ho),
      isChromeOS: n(fo)
    };
  },
      vo = function vo() {
    return bo({
      current: void 0,
      version: Xt.unknown()
    });
  },
      yo = bo,
      xo = (y(co), y("iOS"), y(uo), y(mo), y(go), y(po), y(ho), y(fo), function (e) {
    return window.matchMedia(e).matches;
  });

  var wo = Gt(function () {
    return function (e, t, o) {
      var n = eo.browsers(),
          s = eo.oses(),
          r = t.bind(function (e) {
        return function (e, t) {
          return re(t.brands, function (t) {
            var o = t.brand.toLowerCase();
            return G(e, function (e) {
              var t;
              return o === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
            }).map(function (e) {
              return {
                current: e.name,
                version: Xt.nu(parseInt(t.version, 10), 0)
              };
            });
          });
        }(n, e);
      }).orThunk(function () {
        return function (e, t) {
          return Kt(e, t).map(function (e) {
            var o = Xt.detect(e.versionRegexes, t);
            return {
              current: e.name,
              version: o
            };
          });
        }(n, e);
      }).fold(io, lo),
          a = function (e, t) {
        return Kt(e, t).map(function (e) {
          var o = Xt.detect(e.versionRegexes, t);
          return {
            current: e.name,
            version: o
          };
        });
      }(s, e).fold(vo, yo),
          i = function (e, t, o, n) {
        var s = e.isiOS() && !0 === /ipad/i.test(o),
            r = e.isiOS() && !s,
            a = e.isiOS() || e.isAndroid(),
            i = a || n("(pointer:coarse)"),
            l = s || !r && a && n("(min-device-width:768px)"),
            c = r || a && !l,
            d = t.isSafari() && e.isiOS() && !1 === /safari/i.test(o),
            u = !c && !l && !d;
        return {
          isiPad: y(s),
          isiPhone: y(r),
          isTablet: y(l),
          isPhone: y(c),
          isTouch: y(i),
          isAndroid: e.isAndroid,
          isiOS: e.isiOS,
          isWebView: y(d),
          isDesktop: y(u)
        };
      }(a, r, e, o);

      return {
        browser: r,
        os: a,
        deviceType: i
      };
    }(navigator.userAgent, B.from(navigator.userAgentData), xo);
  });

  var So = function So() {
    return wo();
  },
      ko = function ko(e) {
    var t = Ie(function (e) {
      if (at() && g(e.target)) {
        var _t6 = Ie(e.target);

        if (He(_t6) && function (e) {
          return g(e.dom.shadowRoot);
        }(_t6) && e.composed && e.composedPath) {
          var _t7 = e.composedPath();

          if (_t7) return oe(_t7);
        }
      }

      return B.from(e.target);
    }(e).getOr(e.target)),
        o = function o() {
      return e.stopPropagation();
    },
        n = function n() {
      return e.preventDefault();
    },
        s = v(n, o);

    return function (e, t, o, n, s, r, a) {
      return {
        target: e,
        x: t,
        y: o,
        stop: n,
        prevent: s,
        kill: r,
        raw: a
      };
    }(t, e.clientX, e.clientY, o, n, s, e);
  },
      Co = function Co(e, t, o, n, s) {
    var r = function (e, t) {
      return function (o) {
        e(o) && t(ko(o));
      };
    }(o, n);

    return e.dom.addEventListener(t, r, s), {
      unbind: S(Oo, e, t, r, s)
    };
  },
      Oo = function Oo(e, t, o, n) {
    e.dom.removeEventListener(t, o, n);
  },
      _o = function _o(e, t) {
    Je(e).each(function (o) {
      o.dom.insertBefore(t.dom, e.dom);
    });
  },
      To = function To(e, t) {
    var o = function (e) {
      return B.from(e.dom.nextSibling).map(Ie);
    }(e);

    o.fold(function () {
      Je(e).each(function (e) {
        Bo(e, t);
      });
    }, function (e) {
      _o(e, t);
    });
  },
      Eo = function Eo(e, t) {
    var o = function (e) {
      return tt(e, 0);
    }(e);

    o.fold(function () {
      Bo(e, t);
    }, function (o) {
      e.dom.insertBefore(t.dom, o.dom);
    });
  },
      Bo = function Bo(e, t) {
    e.dom.appendChild(t.dom);
  },
      Mo = function Mo(e, t) {
    N(t, function (t) {
      Bo(e, t);
    });
  },
      Ao = function Ao(e) {
    e.dom.textContent = "", N(et(e), function (e) {
      Do(e);
    });
  },
      Do = function Do(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  },
      Fo = function Fo(e) {
    var t = void 0 !== e ? e.dom : document,
        o = t.body.scrollLeft || t.documentElement.scrollLeft,
        n = t.body.scrollTop || t.documentElement.scrollTop;
    return Ht(o, n);
  },
      Io = function Io(e, t, o) {
    var n = (void 0 !== o ? o.dom : document).defaultView;
    n && n.scrollTo(e, t);
  },
      Ro = function Ro(e, t, o, n) {
    return {
      x: e,
      y: t,
      width: o,
      height: n,
      right: e + o,
      bottom: t + n
    };
  },
      Vo = function Vo(e) {
    var t = void 0 === e ? window : e,
        o = t.document,
        n = Fo(Ie(o));
    return function (e) {
      var t = void 0 === e ? window : e;
      return So().browser.isFirefox() ? B.none() : B.from(t.visualViewport);
    }(t).fold(function () {
      var e = t.document.documentElement,
          o = e.clientWidth,
          s = e.clientHeight;
      return Ro(n.left, n.top, o, s);
    }, function (e) {
      return Ro(Math.max(e.pageLeft, n.left), Math.max(e.pageTop, n.top), e.width, e.height);
    });
  },
      zo = function zo() {
    return Ie(document);
  },
      Ho = function Ho(e, t) {
    return e.view(t).fold(y([]), function (t) {
      var o = e.owner(t),
          n = Ho(e, o);
      return [t].concat(n);
    });
  };

  var Po = Object.freeze({
    __proto__: null,
    view: function view(e) {
      var t;
      return (e.dom === document ? B.none() : B.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Ie);
    },
    owner: function owner(e) {
      return qe(e);
    }
  });

  var No = function No(e) {
    var t = zo(),
        o = Fo(t),
        n = function (e, t) {
      var o = t.owner(e),
          n = Ho(t, o);
      return B.some(n);
    }(e, Po);

    return n.fold(S(Nt, e), function (t) {
      var n = Lt(e),
          s = U(t, function (e, t) {
        var o = Lt(t);
        return {
          left: e.left + o.left,
          top: e.top + o.top
        };
      }, {
        left: 0,
        top: 0
      });
      return Ht(s.left + n.left + o.left, s.top + n.top + o.top);
    });
  },
      Lo = function Lo(e, t, o, n) {
    return {
      x: e,
      y: t,
      width: o,
      height: n,
      right: e + o,
      bottom: t + n
    };
  },
      Wo = function Wo(e) {
    var t = Nt(e),
        o = jt(e),
        n = Vt(e);
    return Lo(t.left, t.top, o, n);
  },
      Uo = function Uo(e) {
    var t = No(e),
        o = jt(e),
        n = Vt(e);
    return Lo(t.left, t.top, o, n);
  },
      jo = function jo() {
    return Vo(window);
  },
      Go = function Go(e) {
    var t = function t(_t8) {
      return _t8(e);
    },
        o = y(e),
        n = function n() {
      return s;
    },
        s = {
      tag: !0,
      inner: e,
      fold: function fold(t, o) {
        return o(e);
      },
      isValue: T,
      isError: _,
      map: function map(t) {
        return qo.value(t(e));
      },
      mapError: n,
      bind: t,
      exists: t,
      forall: t,
      getOr: o,
      or: n,
      getOrThunk: o,
      orThunk: n,
      getOrDie: o,
      each: function each(t) {
        t(e);
      },
      toOptional: function toOptional() {
        return B.some(e);
      }
    };

    return s;
  },
      $o = function $o(e) {
    var t = function t() {
      return o;
    },
        o = {
      tag: !1,
      inner: e,
      fold: function fold(t, o) {
        return t(e);
      },
      isValue: _,
      isError: T,
      map: t,
      mapError: function mapError(t) {
        return qo.error(t(e));
      },
      bind: t,
      exists: _,
      forall: T,
      getOr: x,
      or: x,
      getOrThunk: O,
      orThunk: O,
      getOrDie: C(String(e)),
      each: b,
      toOptional: B.none
    };

    return o;
  },
      qo = {
    value: Go,
    error: $o,
    fromOption: function fromOption(e, t) {
      return e.fold(function () {
        return $o(t);
      }, Go);
    }
  };

  var Xo;
  !function (e) {
    e[e.Error = 0] = "Error", e[e.Value = 1] = "Value";
  }(Xo || (Xo = {}));

  var Ko = function Ko(e, t, o) {
    return e.stype === Xo.Error ? t(e.serror) : o(e.svalue);
  },
      Yo = function Yo(e) {
    return {
      stype: Xo.Value,
      svalue: e
    };
  },
      Jo = function Jo(e) {
    return {
      stype: Xo.Error,
      serror: e
    };
  },
      Zo = Yo,
      Qo = Jo,
      en = Ko,
      tn = function tn(e, t, o, n) {
    return {
      tag: "field",
      key: e,
      newKey: t,
      presence: o,
      prop: n
    };
  },
      on = function on(e, t, o) {
    switch (e.tag) {
      case "field":
        return t(e.key, e.newKey, e.presence, e.prop);

      case "custom":
        return o(e.newKey, e.instantiator);
    }
  },
      nn = function nn(e) {
    return function () {
      if (0 === arguments.length) throw new Error("Can't merge zero objects");
      var o = {};

      for (var _n18 = 0; _n18 < arguments.length; _n18++) {
        var _s15 = _n18 < 0 || arguments.length <= _n18 ? undefined : arguments[_n18];

        for (var _t9 in _s15) {
          ve(_s15, _t9) && (o[_t9] = e(o[_t9], _s15[_t9]));
        }
      }

      return o;
    };
  },
      sn = nn(function (e, t) {
    return i(e) && i(t) ? sn(e, t) : t;
  }),
      rn = nn(function (e, t) {
    return t;
  }),
      an = function an(e) {
    return {
      tag: "defaultedThunk",
      process: e
    };
  },
      ln = function ln(e) {
    return an(y(e));
  },
      cn = function cn(e) {
    return {
      tag: "mergeWithThunk",
      process: e
    };
  },
      dn = function dn(e) {
    var t = function (e) {
      var t = [],
          o = [];
      return N(e, function (e) {
        Ko(e, function (e) {
          return o.push(e);
        }, function (e) {
          return t.push(e);
        });
      }), {
        values: t,
        errors: o
      };
    }(e);

    return t.errors.length > 0 ? (o = t.errors, v(Qo, q)(o)) : Zo(t.values);
    var o;
  },
      un = function un(e) {
    return a(e) && ae(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2);
  },
      mn = function mn(e, t) {
    return Qo([{
      path: e,
      getErrorInfo: t
    }]);
  },
      gn = function gn(e) {
    return {
      extract: function extract(t, o) {
        return n = e(o), s = function s(e) {
          return function (e, t) {
            return mn(e, y(t));
          }(t, e);
        }, n.stype === Xo.Error ? s(n.serror) : n;
        var n, s;
      },
      toString: y("val")
    };
  },
      pn = gn(Zo),
      hn = function hn(e, t, o, n) {
    return n(be(e, t).getOrThunk(function () {
      return o(e);
    }));
  },
      fn = function fn(e, t, o, n, s) {
    var r = function r(e) {
      return s.extract(t.concat([n]), e);
    },
        a = function a(e) {
      return e.fold(function () {
        return Zo(B.none());
      }, function (e) {
        var o = s.extract(t.concat([n]), e);
        return r = o, a = B.some, r.stype === Xo.Value ? {
          stype: Xo.Value,
          svalue: a(r.svalue)
        } : r;
        var r, a;
      });
    };

    switch (e.tag) {
      case "required":
        return function (e, t, o, n) {
          return be(t, o).fold(function () {
            return function (e, t, o) {
              return mn(e, function () {
                return 'Could not find valid *required* value for "' + t + '" in ' + un(o);
              });
            }(e, o, t);
          }, n);
        }(t, o, n, r);

      case "defaultedThunk":
        return hn(o, n, e.process, r);

      case "option":
        return function (e, t, o) {
          return o(be(e, t));
        }(o, n, a);

      case "defaultedOptionThunk":
        return function (e, t, o, n) {
          return n(be(e, t).map(function (t) {
            return !0 === t ? o(e) : t;
          }));
        }(o, n, e.process, a);

      case "mergeWithThunk":
        return hn(o, n, y({}), function (t) {
          var n = sn(e.process(o), t);
          return r(n);
        });
    }
  },
      bn = function bn(e) {
    return {
      extract: function extract(t, o) {
        return e().extract(t, o);
      },
      toString: function toString() {
        return e().toString();
      }
    };
  },
      vn = function vn(e) {
    return ae(ge(e, g));
  },
      yn = function yn(e) {
    var t = xn(e),
        o = U(e, function (e, t) {
      return on(t, function (t) {
        return sn(e, _defineProperty({}, t, !0));
      }, y(e));
    }, {});
    return {
      extract: function extract(e, n) {
        var s = d(n) ? [] : vn(n),
            r = W(s, function (e) {
          return !ye(o, e);
        });
        return 0 === r.length ? t.extract(e, n) : function (e, t) {
          return mn(e, function () {
            return "There are unsupported fields: [" + t.join(", ") + "] specified";
          });
        }(e, r);
      },
      toString: t.toString
    };
  },
      xn = function xn(e) {
    return {
      extract: function extract(t, o) {
        return function (e, t, o) {
          var n = {},
              s = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _r5 = _step.value;
              on(_r5, function (o, r, a, i) {
                var l = fn(a, e, t, o, i);
                en(l, function (e) {
                  s.push.apply(s, _toConsumableArray(e));
                }, function (e) {
                  n[r] = e;
                });
              }, function (e, o) {
                n[e] = o(t);
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return s.length > 0 ? Qo(s) : Zo(n);
        }(t, o, e);
      },
      toString: function toString() {
        var t = P(e, function (e) {
          return on(e, function (e, t, o, n) {
            return e + " -> " + n.toString();
          }, function (e, t) {
            return "state(" + e + ")";
          });
        });
        return "obj{\n" + t.join("\n") + "}";
      }
    };
  },
      wn = function wn(e) {
    return {
      extract: function extract(t, o) {
        var n = P(o, function (o, n) {
          return e.extract(t.concat(["[" + n + "]"]), o);
        });
        return dn(n);
      },
      toString: function toString() {
        return "array(" + e.toString() + ")";
      }
    };
  },
      Sn = function Sn(e) {
    return {
      extract: function extract(t, o) {
        var n = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _s16 = _step2.value;

            var _e4 = _s16.extract(t, o);

            if (_e4.stype === Xo.Value) return _e4;
            n.push(_e4);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return dn(n);
      },
      toString: function toString() {
        return "oneOf(" + P(e, function (e) {
          return e.toString();
        }).join(", ") + ")";
      }
    };
  },
      kn = function kn(e, t) {
    return {
      extract: function extract(o, n) {
        var s = ae(n),
            r = function (t, o) {
          return wn(gn(e)).extract(t, o);
        }(o, s);

        return i = function i(e) {
          var s = P(e, function (e) {
            return tn(e, e, {
              tag: "required",
              process: {}
            }, t);
          });
          return xn(s).extract(o, n);
        }, (a = r).stype === Xo.Value ? i(a.svalue) : a;
        var a, i;
      },
      toString: function toString() {
        return "setOf(" + t.toString() + ")";
      }
    };
  },
      Cn = v(wn, xn),
      On = y(pn),
      _n = function _n(e, t) {
    return gn(function (o) {
      var n = _typeof(o);

      return e(o) ? Zo(o) : Qo("Expected type: ".concat(t, " but got: ").concat(n));
    });
  },
      Tn = _n(h, "number"),
      En = _n(r, "string"),
      Bn = _n(d, "boolean"),
      Mn = _n(p, "function"),
      An = function An(e) {
    if (Object(e) !== e) return !0;

    switch ({}.toString.call(e).slice(8, -1)) {
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "RegExp":
      case "Blob":
      case "FileList":
      case "ImageData":
      case "ImageBitmap":
      case "ArrayBuffer":
        return !0;

      case "Array":
      case "Object":
        return Object.keys(e).every(function (t) {
          return An(e[t]);
        });

      default:
        return !1;
    }
  },
      Dn = gn(function (e) {
    return An(e) ? Zo(e) : Qo("Expected value to be acceptable for sending via postMessage");
  }),
      Fn = function Fn(e, t) {
    return {
      extract: function extract(o, n) {
        return be(n, e).fold(function () {
          return function (e, t) {
            return mn(e, function () {
              return 'Choice schema did not contain choice key: "' + t + '"';
            });
          }(o, e);
        }, function (e) {
          return function (e, t, o, n) {
            return be(o, n).fold(function () {
              return function (e, t, o) {
                return mn(e, function () {
                  return 'The chosen schema: "' + o + '" did not exist in branches: ' + un(t);
                });
              }(e, o, n);
            }, function (o) {
              return o.extract(e.concat(["branch: " + n]), t);
            });
          }(o, n, t, e);
        });
      },
      toString: function toString() {
        return "chooseOn(" + e + "). Possible values: " + ae(t);
      }
    };
  },
      In = function In(e) {
    return gn(function (t) {
      return e(t).fold(Qo, Zo);
    });
  },
      Rn = function Rn(e, t) {
    return kn(function (t) {
      return e(t).fold(Jo, Yo);
    }, t);
  },
      Vn = function Vn(e, t, o) {
    return n = function (e, t, o) {
      return function (e, t) {
        return e.stype === Xo.Error ? {
          stype: Xo.Error,
          serror: t(e.serror)
        } : e;
      }(t.extract([e], o), function (e) {
        return {
          input: o,
          errors: e
        };
      });
    }(e, t, o), Ko(n, qo.error, qo.value);
    var n;
  },
      zn = function zn(e) {
    return e.fold(function (e) {
      throw new Error(Pn(e));
    }, x);
  },
      Hn = function Hn(e, t, o) {
    return zn(Vn(e, t, o));
  },
      Pn = function Pn(e) {
    return "Errors: \n" + function (e) {
      var t = e.length > 10 ? e.slice(0, 10).concat([{
        path: [],
        getErrorInfo: y("... (only showing first ten failures)")
      }]) : e;
      return P(t, function (e) {
        return "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo();
      });
    }(e.errors).join("\n") + "\n\nInput object: " + un(e.input);
  },
      Nn = function Nn(e, t) {
    return Fn(e, ce(t, xn));
  },
      Ln = tn,
      Wn = function Wn(e, t) {
    return {
      tag: "custom",
      newKey: e,
      instantiator: t
    };
  },
      Un = function Un(e) {
    return In(function (t) {
      return R(e, t) ? qo.value(t) : qo.error("Unsupported value: \"".concat(t, "\", choose one of \"").concat(e.join(", "), "\"."));
    });
  },
      jn = function jn(e) {
    return Ln(e, e, {
      tag: "required",
      process: {}
    }, On());
  },
      Gn = function Gn(e, t) {
    return Ln(e, e, {
      tag: "required",
      process: {}
    }, t);
  },
      $n = function $n(e) {
    return Gn(e, Tn);
  },
      qn = function qn(e) {
    return Gn(e, En);
  },
      Xn = function Xn(e, t) {
    return Ln(e, e, {
      tag: "required",
      process: {}
    }, Un(t));
  },
      Kn = function Kn(e) {
    return Gn(e, Mn);
  },
      Yn = function Yn(e, t) {
    return Ln(e, e, {
      tag: "required",
      process: {}
    }, xn(t));
  },
      Jn = function Jn(e, t) {
    return Ln(e, e, {
      tag: "required",
      process: {}
    }, Cn(t));
  },
      Zn = function Zn(e, t) {
    return Ln(e, e, {
      tag: "required",
      process: {}
    }, wn(t));
  },
      Qn = function Qn(e) {
    return Ln(e, e, {
      tag: "option",
      process: {}
    }, On());
  },
      es = function es(e, t) {
    return Ln(e, e, {
      tag: "option",
      process: {}
    }, t);
  },
      ts = function ts(e) {
    return es(e, Tn);
  },
      os = function os(e) {
    return es(e, En);
  },
      ns = function ns(e, t) {
    return es(e, Un(t));
  },
      ss = function ss(e) {
    return es(e, Mn);
  },
      rs = function rs(e, t) {
    return es(e, wn(t));
  },
      as = function as(e, t) {
    return es(e, xn(t));
  },
      is = function is(e, t) {
    return Ln(e, e, ln(t), On());
  },
      ls = function ls(e, t, o) {
    return Ln(e, e, ln(t), o);
  },
      cs = function cs(e, t) {
    return ls(e, t, Tn);
  },
      ds = function ds(e, t) {
    return ls(e, t, En);
  },
      us = function us(e, t, o) {
    return ls(e, t, Un(o));
  },
      ms = function ms(e, t) {
    return ls(e, t, Bn);
  },
      gs = function gs(e, t) {
    return ls(e, t, Mn);
  },
      ps = function ps(e, t, o) {
    return ls(e, t, wn(o));
  },
      hs = function hs(e, t, o) {
    return ls(e, t, xn(o));
  },
      fs = function fs(e) {
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
      bs = function bs(e) {
    if (!l(e)) throw new Error("cases must be an array");
    if (0 === e.length) throw new Error("there must be at least one case");
    var t = [],
        o = {};
    return N(e, function (n, s) {
      var r = ae(n);
      if (1 !== r.length) throw new Error("one and only one name per case");
      var a = r[0],
          i = n[a];
      if (void 0 !== o[a]) throw new Error("duplicate key detected:" + a);
      if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
      if (!l(i)) throw new Error("case arguments must be an array");
      t.push(a), o[a] = function () {
        for (var _len5 = arguments.length, o = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          o[_key5] = arguments[_key5];
        }

        var n = o.length;
        if (n !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + n);
        return {
          fold: function fold() {
            for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              t[_key6] = arguments[_key6];
            }

            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
            return t[s].apply(null, o);
          },
          match: function match(e) {
            var n = ae(e);
            if (t.length !== n.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + n.join(","));
            if (!K(t, function (e) {
              return R(n, e);
            })) throw new Error("Not all branches were specified when using match. Specified: " + n.join(", ") + "\nRequired: " + t.join(", "));
            return e[a].apply(null, o);
          },
          log: function log(e) {
            console.log(e, {
              constructors: t,
              constructor: a,
              params: o
            });
          }
        };
      };
    }), o;
  };

  bs([{
    bothErrors: ["error1", "error2"]
  }, {
    firstError: ["error1", "value2"]
  }, {
    secondError: ["value1", "error2"]
  }, {
    bothValues: ["value1", "value2"]
  }]);

  var vs = function vs(e, t) {
    return function (e, t) {
      return _defineProperty({}, e, t);
    }(e, t);
  },
      ys = function ys(e) {
    return function (e) {
      var t = {};
      return N(e, function (e) {
        t[e.key] = e.value;
      }), t;
    }(e);
  },
      xs = function xs(e) {
    return p(e) ? e : _;
  },
      ws = function ws(e, t, o) {
    var n = e.dom;
    var s = xs(o);

    for (; n.parentNode;) {
      n = n.parentNode;

      var _e5 = Ie(n),
          _o13 = t(_e5);

      if (_o13.isSome()) return _o13;
      if (s(_e5)) break;
    }

    return B.none();
  },
      Ss = function Ss(e, t, o) {
    var n = t(e),
        s = xs(o);
    return n.orThunk(function () {
      return s(e) ? B.none() : ws(e, t, s);
    });
  },
      ks = function ks(e, t) {
    return Ge(e.element, t.event.target);
  },
      Cs = {
    can: T,
    abort: _,
    run: b
  },
      Os = function Os(e) {
    if (!ye(e, "can") && !ye(e, "abort") && !ye(e, "run")) throw new Error("EventHandler defined by: " + JSON.stringify(e, null, 2) + " does not have can, abort, or run!");
    return _objectSpread({}, Cs, {}, e);
  },
      _s = y,
      Ts = _s("touchstart"),
      Es = _s("touchmove"),
      Bs = _s("touchend"),
      Ms = _s("touchcancel"),
      As = _s("mousedown"),
      Ds = _s("mousemove"),
      Fs = _s("mouseout"),
      Is = _s("mouseup"),
      Rs = _s("mouseover"),
      Vs = _s("focusin"),
      zs = _s("focusout"),
      Hs = _s("keydown"),
      Ps = _s("keyup"),
      Ns = _s("input"),
      Ls = _s("change"),
      Ws = _s("click"),
      Us = _s("transitioncancel"),
      js = _s("transitionend"),
      Gs = _s("transitionstart"),
      $s = _s("selectstart"),
      qs = function qs(e) {
    return y("alloy." + e);
  },
      Xs = {
    tap: qs("tap")
  },
      Ks = qs("focus"),
      Ys = qs("blur.post"),
      Js = qs("paste.post"),
      Zs = qs("receive"),
      Qs = qs("execute"),
      er = qs("focus.item"),
      tr = Xs.tap,
      or = qs("longpress"),
      nr = qs("sandbox.close"),
      sr = qs("typeahead.cancel"),
      rr = qs("system.init"),
      ar = qs("system.touchmove"),
      ir = qs("system.touchend"),
      lr = qs("system.scroll"),
      cr = qs("system.resize"),
      dr = qs("system.attached"),
      ur = qs("system.detached"),
      mr = qs("system.dismissRequested"),
      gr = qs("system.repositionRequested"),
      pr = qs("focusmanager.shifted"),
      hr = qs("slotcontainer.visibility"),
      fr = qs("change.tab"),
      br = qs("dismiss.tab"),
      vr = qs("highlight"),
      yr = qs("dehighlight"),
      xr = function xr(e, t) {
    Cr(e, e.element, t, {});
  },
      wr = function wr(e, t, o) {
    Cr(e, e.element, t, o);
  },
      Sr = function Sr(e) {
    xr(e, Qs());
  },
      kr = function kr(e, t, o) {
    Cr(e, t, o, {});
  },
      Cr = function Cr(e, t, o, n) {
    var s = _objectSpread({
      target: t
    }, n);

    e.getSystem().triggerEvent(o, t, s);
  },
      Or = function Or(e, t, o, n) {
    e.getSystem().triggerEvent(o, t, n.event);
  },
      _r = function _r(e) {
    return ys(e);
  },
      Tr = function Tr(e, t) {
    return {
      key: e,
      value: Os({
        abort: t
      })
    };
  },
      Er = function Er(e) {
    return {
      key: e,
      value: Os({
        run: function run(e, t) {
          t.event.prevent();
        }
      })
    };
  },
      Br = function Br(e, t) {
    return {
      key: e,
      value: Os({
        run: t
      })
    };
  },
      Mr = function Mr(e, t, o) {
    return {
      key: e,
      value: Os({
        run: function run(e, n) {
          t.apply(void 0, [e, n].concat(o));
        }
      })
    };
  },
      Ar = function Ar(e) {
    return function (t) {
      return {
        key: e,
        value: Os({
          run: function run(e, o) {
            ks(e, o) && t(e, o);
          }
        })
      };
    };
  },
      Dr = function Dr(e, t, o) {
    return function (e, t) {
      return Br(e, function (o, n) {
        o.getSystem().getByUid(t).each(function (t) {
          Or(t, t.element, e, n);
        });
      });
    }(e, t.partUids[o]);
  },
      Fr = function Fr(e, t) {
    return Br(e, function (e, o) {
      var n = o.event,
          s = e.getSystem().getByDom(n.target).getOrThunk(function () {
        return Ss(n.target, function (t) {
          return e.getSystem().getByDom(t).toOptional();
        }, _).getOr(e);
      });
      t(e, s, o);
    });
  },
      Ir = function Ir(e) {
    return Br(e, function (e, t) {
      t.cut();
    });
  },
      Rr = function Rr(e) {
    return Br(e, function (e, t) {
      t.stop();
    });
  },
      Vr = function Vr(e, t) {
    return Ar(e)(t);
  },
      zr = Ar(dr()),
      Hr = Ar(ur()),
      Pr = Ar(rr()),
      Nr = ($r = Qs(), function (e) {
    return Br($r, e);
  }),
      Lr = function Lr(e) {
    return e.dom.innerHTML;
  },
      Wr = function Wr(e, t) {
    var o = qe(e).dom,
        n = Ie(o.createDocumentFragment()),
        s = function (e, t) {
      var o = (t || document).createElement("div");
      return o.innerHTML = e, et(Ie(o));
    }(t, o);

    Mo(n, s), Ao(e), Bo(e, n);
  },
      Ur = function Ur(e) {
    return st(e) ? "#shadow-root" : function (e) {
      var t = De("div"),
          o = Ie(e.dom.cloneNode(!0));
      return Bo(t, o), Lr(t);
    }(function (e) {
      return function (e, t) {
        return Ie(e.dom.cloneNode(!1));
      }(e);
    }(e));
  },
      jr = function jr(e) {
    return Ur(e);
  },
      Gr = _r([function (e, t) {
    return {
      key: e,
      value: Os({
        can: function can(e, t) {
          var o = t.event,
              n = o.originator,
              s = o.target;
          return !function (e, t, o) {
            return Ge(t, e.element) && !Ge(t, o);
          }(e, n, s) || (console.warn(Ks() + " did not get interpreted by the desired target. \nOriginator: " + jr(n) + "\nTarget: " + jr(s) + "\nCheck the " + Ks() + " event handlers"), !1);
        }
      })
    };
  }(Ks())]);

  var $r,
      qr = Object.freeze({
    __proto__: null,
    events: Gr
  });
  var Xr = 0;

  var Kr = function Kr(e) {
    var t = new Date().getTime(),
        o = Math.floor(1e9 * Math.random());
    return Xr++, e + "_" + o + Xr + String(t);
  },
      Yr = y("alloy-id-"),
      Jr = y("data-alloy-id"),
      Zr = Yr(),
      Qr = Jr(),
      ea = function ea(e, t) {
    Object.defineProperty(e.dom, Qr, {
      value: t,
      writable: !0
    });
  },
      ta = function ta(e) {
    var t = He(e) ? e.dom[Qr] : null;
    return B.from(t);
  },
      oa = function oa(e) {
    return Kr(e);
  },
      na = x,
      sa = function sa(e) {
    var t = function t(_t10) {
      return "The component must be in a context to execute: ".concat(_t10) + (e ? "\n" + jr(e().element) + " is not in context." : "");
    },
        o = function o(e) {
      return function () {
        throw new Error(t(e));
      };
    },
        n = function n(e) {
      return function () {
        console.warn(t(e));
      };
    };

    return {
      debugInfo: y("fake"),
      triggerEvent: n("triggerEvent"),
      triggerFocus: n("triggerFocus"),
      triggerEscape: n("triggerEscape"),
      broadcast: n("broadcast"),
      broadcastOn: n("broadcastOn"),
      broadcastEvent: n("broadcastEvent"),
      build: o("build"),
      buildOrPatch: o("buildOrPatch"),
      addToWorld: o("addToWorld"),
      removeFromWorld: o("removeFromWorld"),
      addToGui: o("addToGui"),
      removeFromGui: o("removeFromGui"),
      getByUid: o("getByUid"),
      getByDom: o("getByDom"),
      isConnected: _
    };
  },
      ra = sa(),
      aa = function aa(e) {
    return P(e, function (e) {
      return _e(e, "/*") ? e.substring(0, e.length - "/*".length) : e;
    });
  },
      ia = function ia(e, t) {
    var o = e.toString(),
        n = o.indexOf(")") + 1,
        s = o.indexOf("("),
        r = o.substring(s + 1, n - 1).split(/,\s*/);
    return e.toFunctionAnnotation = function () {
      return {
        name: t,
        parameters: aa(r)
      };
    }, e;
  },
      la = Kr("alloy-premade"),
      ca = function ca(e) {
    return Object.defineProperty(e.element.dom, la, {
      value: e.uid,
      writable: !0
    }), vs(la, e);
  },
      da = function da(e) {
    return be(e, la);
  },
      ua = function ua(e) {
    return function (e, t) {
      var o = t.toString(),
          n = o.indexOf(")") + 1,
          s = o.indexOf("("),
          r = o.substring(s + 1, n - 1).split(/,\s*/);
      return e.toFunctionAnnotation = function () {
        return {
          name: "OVERRIDE",
          parameters: aa(r.slice(1))
        };
      }, e;
    }(function (t) {
      for (var _len7 = arguments.length, o = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        o[_key7 - 1] = arguments[_key7];
      }

      return e.apply(void 0, [t.getApis(), t].concat(o));
    }, e);
  },
      ma = {
    init: function init() {
      return ga({
        readState: y("No State required")
      });
    }
  },
      ga = function ga(e) {
    return e;
  },
      pa = function pa(e, t) {
    var o = {};
    return le(e, function (e, n) {
      le(e, function (e, s) {
        var r = be(o, s).getOr([]);
        o[s] = r.concat([t(n, e)]);
      });
    }), o;
  },
      ha = function ha(e) {
    return {
      classes: u(e.classes) ? [] : e.classes,
      attributes: u(e.attributes) ? {} : e.attributes,
      styles: u(e.styles) ? {} : e.styles
    };
  },
      fa = function fa(e) {
    return e.cHandler;
  },
      ba = function ba(e, t) {
    return {
      name: e,
      handler: t
    };
  },
      va = function va(e, t) {
    var o = {};
    return N(e, function (e) {
      o[e.name()] = e.handlers(t);
    }), o;
  },
      ya = function ya(e, t, o) {
    var n = t[o];
    return n ? function (e, t, o, n) {
      try {
        var _t11 = ee(o, function (t, o) {
          var s = t.name,
              r = o.name,
              a = n.indexOf(s),
              i = n.indexOf(r);
          if (-1 === a) throw new Error("The ordering for " + e + " does not have an entry for " + s + ".\nOrder specified: " + JSON.stringify(n, null, 2));
          if (-1 === i) throw new Error("The ordering for " + e + " does not have an entry for " + r + ".\nOrder specified: " + JSON.stringify(n, null, 2));
          return a < i ? -1 : i < a ? 1 : 0;
        });

        return qo.value(_t11);
      } catch (e) {
        return qo.error([e]);
      }
    }("Event: " + o, 0, e, n).map(function (e) {
      return function (e) {
        var t = function (e, t) {
          return function () {
            for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              t[_key8] = arguments[_key8];
            }

            return j(e, function (e, o) {
              return e && function (e) {
                return e.can;
              }(o).apply(void 0, t);
            }, !0);
          };
        }(e),
            o = function (e, t) {
          return function () {
            for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              t[_key9] = arguments[_key9];
            }

            return j(e, function (e, o) {
              return e || function (e) {
                return e.abort;
              }(o).apply(void 0, t);
            }, !1);
          };
        }(e);

        return {
          can: t,
          abort: o,
          run: function run() {
            for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              t[_key10] = arguments[_key10];
            }

            N(e, function (e) {
              e.run.apply(void 0, t);
            });
          }
        };
      }(P(e, function (e) {
        return e.handler;
      }));
    }) : function (e, t) {
      return qo.error(["The event (" + e + ') has more than one behaviour that listens to it.\nWhen this occurs, you must specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that can trigger it are: ' + JSON.stringify(P(t, function (e) {
        return e.name;
      }), null, 2)]);
    }(o, e);
  },
      xa = function xa(e, t) {
    return function (e, t) {
      var o = function (e) {
        var t = [],
            o = [];
        return N(e, function (e) {
          e.fold(function (e) {
            t.push(e);
          }, function (e) {
            o.push(e);
          });
        }), {
          errors: t,
          values: o
        };
      }(e);

      return o.errors.length > 0 ? (n = o.errors, qo.error(q(n))) : function (e, t) {
        return 0 === e.length ? qo.value(t) : qo.value(sn(t, rn.apply(void 0, e)));
      }(o.values, t);
      var n;
    }(pe(e, function (e, o) {
      return (1 === e.length ? qo.value(e[0].handler) : ya(e, t, o)).map(function (n) {
        var s = function (e) {
          var t = function (e) {
            return p(e) ? {
              can: T,
              abort: _,
              run: e
            } : e;
          }(e);

          return function (e, o) {
            for (var _len11 = arguments.length, n = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
              n[_key11 - 2] = arguments[_key11];
            }

            var s = [e, o].concat(n);
            t.abort.apply(void 0, s) ? o.stop() : t.can.apply(void 0, s) && t.run.apply(void 0, s);
          };
        }(n),
            r = e.length > 1 ? W(t[o], function (t) {
          return V(e, function (e) {
            return e.name === t;
          });
        }).join(" > ") : e[0].name;

        return vs(o, function (e, t) {
          return {
            handler: e,
            purpose: t
          };
        }(s, r));
      });
    }), {});
  },
      wa = "alloy.base.behaviour",
      Sa = xn([Ln("dom", "dom", {
    tag: "required",
    process: {}
  }, xn([jn("tag"), is("styles", {}), is("classes", []), is("attributes", {}), Qn("value"), Qn("innerHtml")])), jn("components"), jn("uid"), is("events", {}), is("apis", {}), Ln("eventOrder", "eventOrder", (qa = (_qa = {}, _defineProperty(_qa, Qs(), ["disabling", wa, "toggling", "typeaheadevents"]), _defineProperty(_qa, Ks(), [wa, "focusing", "keying"]), _defineProperty(_qa, rr(), [wa, "disabling", "toggling", "representing"]), _defineProperty(_qa, Ns(), [wa, "representing", "streaming", "invalidating"]), _defineProperty(_qa, ur(), [wa, "representing", "item-events", "tooltipping"]), _defineProperty(_qa, As(), ["focusing", wa, "item-type-events"]), _defineProperty(_qa, Ts(), ["focusing", wa, "item-type-events"]), _defineProperty(_qa, Rs(), ["item-type-events", "tooltipping"]), _defineProperty(_qa, Zs(), ["receiving", "reflecting", "tooltipping"]), _qa), cn(y(qa))), On()), Qn("domModification")]),
      ka = function ka(e) {
    return e.events;
  },
      Ca = function Ca(e, t) {
    var o = bt(e, t);
    return void 0 === o || "" === o ? [] : o.split(" ");
  },
      Oa = function Oa(e) {
    return void 0 !== e.dom.classList;
  },
      _a = function _a(e) {
    return Ca(e, "class");
  },
      Ta = function Ta(e, t) {
    Oa(e) ? e.dom.classList.add(t) : function (e, t) {
      (function (e, t, o) {
        var n = Ca(e, t).concat([o]);
        ht(e, t, n.join(" "));
      })(e, "class", t);
    }(e, t);
  },
      Ea = function Ea(e, t) {
    Oa(e) ? e.dom.classList.remove(t) : function (e, t) {
      (function (e, t, o) {
        var n = W(Ca(e, t), function (e) {
          return e !== o;
        });
        n.length > 0 ? ht(e, t, n.join(" ")) : xt(e, t);
      })(e, "class", t);
    }(e, t), function (e) {
      0 === (Oa(e) ? e.dom.classList : _a(e)).length && xt(e, "class");
    }(e);
  },
      Ba = function Ba(e, t) {
    return Oa(e) && e.dom.classList.contains(t);
  },
      Ma = function Ma(e, t) {
    N(t, function (t) {
      Ta(e, t);
    });
  },
      Aa = function Aa(e, t) {
    N(t, function (t) {
      Ea(e, t);
    });
  },
      Da = function Da(e) {
    return e.dom.value;
  },
      Fa = function Fa(e, t) {
    if (void 0 === t) throw new Error("Value.set was undefined");
    e.dom.value = t;
  },
      Ia = function Ia(e, t, o) {
    o.fold(function () {
      return Bo(e, t);
    }, function (e) {
      Ge(e, t) || (_o(e, t), Do(e));
    });
  },
      Ra = function Ra(e, t, o) {
    var n = P(t, o),
        s = et(e);
    return N(s.slice(n.length), Do), n;
  },
      Va = function Va(e, t, o, n) {
    var s = tt(e, t),
        r = n(o, s),
        a = function (e, t, o) {
      return tt(e, t).map(function (e) {
        if (o.exists(function (t) {
          return !Ge(t, e);
        })) {
          var _t12 = o.map(Ve).getOr("span"),
              _n19 = De(_t12);

          return _o(e, _n19), _n19;
        }

        return e;
      });
    }(e, t, s);

    return Ia(e, r.element, a), r;
  },
      za = function za(e, t) {
    var o = ae(e),
        n = ae(t);
    return {
      toRemove: J(n, o),
      toSet: function (e, o) {
        var n = {},
            s = {};
        return me(e, function (e, o) {
          return !ve(t, o) || e !== t[o];
        }, ue(n), ue(s)), {
          t: n,
          f: s
        };
      }(e).t
    };
  },
      Ha = function Ha(e, t) {
    var _ref2 = function (e) {
      return j(e.dom.attributes, function (e, t) {
        return e[t.name] = t.value, e;
      }, {});
    }(t),
        o = _ref2["class"],
        n = _ref2.style,
        s = _objectWithoutProperties(_ref2, ["class", "style"]),
        _za = za(e.attributes, s),
        r = _za.toSet,
        a = _za.toRemove,
        i = Bt(t),
        _za2 = za(e.styles, i),
        l = _za2.toSet,
        c = _za2.toRemove,
        d = function (e) {
      return Oa(e) ? function (e) {
        var t = e.dom.classList,
            o = new Array(t.length);

        for (var _e6 = 0; _e6 < t.length; _e6++) {
          var _n20 = t.item(_e6);

          null !== _n20 && (o[_e6] = _n20);
        }

        return o;
      }(e) : _a(e);
    }(t),
        u = J(d, e.classes),
        m = J(e.classes, d);

    return N(a, function (e) {
      return xt(t, e);
    }), ft(t, r), Ma(t, m), Aa(t, u), N(c, function (e) {
      return At(t, e);
    }), Ct(t, l), e.innerHtml.fold(function () {
      var o = e.domChildren;

      (function (e, t) {
        Ra(e, t, function (t, o) {
          var n = tt(e, o);
          return Ia(e, t, n), t;
        });
      })(t, o);
    }, function (e) {
      Wr(t, e);
    }), function () {
      var o = t,
          n = e.value.getOrUndefined();
      n !== Da(o) && Fa(o, null != n ? n : "");
    }(), t;
  },
      Pa = function Pa(e) {
    var t = function (e) {
      var t = be(e, "behaviours").getOr({});
      return X(ae(t), function (e) {
        var o = t[e];
        return g(o) ? [o.me] : [];
      });
    }(e);

    return function (e, t) {
      return function (e, t) {
        var o = P(t, function (e) {
          return as(e.name(), [jn("config"), is("state", ma)]);
        }),
            n = Vn("component.behaviours", xn(o), e.behaviours).fold(function (t) {
          throw new Error(Pn(t) + "\nComplete spec:\n" + JSON.stringify(e, null, 2));
        }, x);
        return {
          list: t,
          data: ce(n, function (e) {
            var t = e.map(function (e) {
              return {
                config: e.config,
                state: e.state.init(e.config)
              };
            });
            return y(t);
          })
        };
      }(e, t);
    }(e, t);
  },
      Na = function Na(e, t) {
    var o = function o() {
      return m;
    },
        n = fs(ra),
        s = zn(function (e) {
      return Vn("custom.definition", Sa, e);
    }(e)),
        r = Pa(e),
        a = function (e) {
      return e.list;
    }(r),
        i = function (e) {
      return e.data;
    }(r),
        l = function (e, t, o) {
      var n = _objectSpread({}, (s = e).dom, {
        uid: s.uid,
        domChildren: P(s.components, function (e) {
          return e.element;
        })
      });

      var s;

      var r = function (e) {
        return e.domModification.fold(function () {
          return ha({});
        }, ha);
      }(e),
          a = {
        "alloy.base.modification": r
      },
          i = t.length > 0 ? function (e, t, o, n) {
        var s = _objectSpread({}, t);

        N(o, function (t) {
          s[t.name()] = t.exhibit(e, n);
        });

        var r = pa(s, function (e, t) {
          return {
            name: e,
            modification: t
          };
        }),
            a = function a(e) {
          return U(e, function (e, t) {
            return _objectSpread({}, t.modification, {}, e);
          }, {});
        },
            i = U(r.classes, function (e, t) {
          return t.modification.concat(e);
        }, []),
            l = a(r.attributes),
            c = a(r.styles);

        return ha({
          classes: i,
          attributes: l,
          styles: c
        });
      }(o, a, t, n) : r;

      return l = n, c = i, _objectSpread({}, l, {
        attributes: _objectSpread({}, l.attributes, {}, c.attributes),
        styles: _objectSpread({}, l.styles, {}, c.styles),
        classes: l.classes.concat(c.classes)
      });
      var l, c;
    }(s, a, i),
        c = function (e, t) {
      var o = t.filter(function (t) {
        return Ve(t) === e.tag && !function (e) {
          return e.innerHtml.isSome() && e.domChildren.length > 0;
        }(e) && !function (e) {
          return ve(e.dom, la);
        }(t);
      }).bind(function (t) {
        return function (e, t) {
          try {
            var _o14 = Ha(e, t);

            return B.some(_o14);
          } catch (e) {
            return B.none();
          }
        }(e, t);
      }).getOrThunk(function () {
        return function (e) {
          var t = De(e.tag);
          ft(t, e.attributes), Ma(t, e.classes), Ct(t, e.styles), e.innerHtml.each(function (e) {
            return Wr(t, e);
          });
          var o = e.domChildren;
          return Mo(t, o), e.value.each(function (e) {
            Fa(t, e);
          }), t;
        }(e);
      });
      return ea(o, e.uid), o;
    }(l, t),
        d = function (e, t, o) {
      var n = {
        "alloy.base.behaviour": ka(e)
      };
      return function (e, t, o, n) {
        var s = function (e, t, o) {
          var n = _objectSpread({}, o, {}, va(t, e));

          return pa(n, ba);
        }(e, o, n);

        return xa(s, t);
      }(o, e.eventOrder, t, n).getOrDie();
    }(s, a, i),
        u = fs(s.components),
        m = {
      uid: e.uid,
      getSystem: n.get,
      config: function config(t) {
        var o = i;
        return (p(o[t.name()]) ? o[t.name()] : function () {
          throw new Error("Could not find " + t.name() + " in " + JSON.stringify(e, null, 2));
        })();
      },
      hasConfigured: function hasConfigured(e) {
        return p(i[e.name()]);
      },
      spec: e,
      readState: function readState(e) {
        return i[e]().map(function (e) {
          return e.state.readState();
        }).getOr("not enabled");
      },
      getApis: function getApis() {
        return s.apis;
      },
      connect: function connect(e) {
        n.set(e);
      },
      disconnect: function disconnect() {
        n.set(sa(o));
      },
      element: c,
      syncComponents: function syncComponents() {
        var e = et(c),
            t = X(e, function (e) {
          return n.get().getByDom(e).fold(function () {
            return [];
          }, Q);
        });
        u.set(t);
      },
      components: u.get,
      events: d
    };

    return m;
  },
      La = function La(e) {
    var t = Fe(e);
    return Wa({
      element: t
    });
  },
      Wa = function Wa(e) {
    var t = Hn("external.component", yn([jn("element"), Qn("uid")]), e),
        o = fs(sa()),
        n = t.uid.getOrThunk(function () {
      return oa("external");
    });
    ea(t.element, n);
    var s = {
      uid: n,
      getSystem: o.get,
      config: B.none,
      hasConfigured: _,
      connect: function connect(e) {
        o.set(e);
      },
      disconnect: function disconnect() {
        o.set(sa(function () {
          return s;
        }));
      },
      getApis: function getApis() {
        return {};
      },
      element: t.element,
      spec: e,
      readState: y("No state"),
      syncComponents: b,
      components: y([]),
      events: {}
    };
    return ca(s);
  },
      Ua = oa,
      ja = function ja(e, t) {
    return da(e).getOrThunk(function () {
      return function (e, t) {
        var _na = na(e),
            o = _na.events,
            n = _objectWithoutProperties(_na, ["events"]),
            s = function (e, t) {
          var o = be(e, "components").getOr([]);
          return t.fold(function () {
            return P(o, Ga);
          }, function (e) {
            return P(o, function (t, o) {
              return ja(t, tt(e, o));
            });
          });
        }(n, t),
            r = _objectSpread({}, n, {
          events: _objectSpread({}, qr, {}, o),
          components: s
        });

        return qo.value(Na(r, t));
      }(function (e) {
        return ve(e, "uid");
      }(e) ? e : _objectSpread({
        uid: Ua("")
      }, e), t).getOrDie();
    });
  },
      Ga = function Ga(e) {
    return ja(e, B.none());
  },
      $a = ca;

  var qa,
      Xa = function Xa(e, t, o, n, s) {
    return e(o, n) ? B.some(o) : p(s) && s(o) ? B.none() : t(o, n, s);
  };

  var Ka = function Ka(e, t, o) {
    var n = e.dom;
    var s = p(o) ? o : _;

    for (; n.parentNode;) {
      n = n.parentNode;

      var _e7 = Ie(n);

      if (t(_e7)) return B.some(_e7);
      if (s(_e7)) break;
    }

    return B.none();
  },
      Ya = function Ya(e, t, o) {
    return Xa(function (e, t) {
      return t(e);
    }, Ka, e, t, o);
  },
      Ja = function Ja(e, t, o) {
    return Ya(e, t, o).isSome();
  },
      Za = function Za(e, t, o) {
    return Ka(e, function (e) {
      return Ue(e, t);
    }, o);
  },
      Qa = function Qa(e, t) {
    return function (e, o) {
      return G(e.dom.childNodes, function (e) {
        return o = Ie(e), Ue(o, t);
        var o;
      }).map(Ie);
    }(e);
  },
      ei = function ei(e, t) {
    return function (e, t) {
      var o = void 0 === t ? document : t.dom;
      return je(o) ? B.none() : B.from(o.querySelector(e)).map(Ie);
    }(t, e);
  },
      ti = function ti(e, t, o) {
    return Xa(function (e, t) {
      return Ue(e, t);
    }, Za, e, t, o);
  },
      oi = "aria-controls",
      ni = function ni() {
    var e = Kr(oi);
    return {
      id: e,
      link: function link(t) {
        ht(t, oi, e);
      },
      unlink: function unlink(e) {
        xt(e, oi);
      }
    };
  },
      si = function si(e, t) {
    return Ja(t, function (t) {
      return Ge(t, e.element);
    }, _) || function (e, t) {
      return function (e) {
        return Ya(e, function (e) {
          if (!He(e)) return !1;
          var t = bt(e, "id");
          return void 0 !== t && t.indexOf(oi) > -1;
        }).bind(function (e) {
          var t = bt(e, "id"),
              o = it(e);
          return ei(o, "[".concat(oi, "=\"").concat(t, "\"]"));
        });
      }(t).exists(function (t) {
        return si(e, t);
      });
    }(e, t);
  };

  var ri;
  !function (e) {
    e[e.STOP = 0] = "STOP", e[e.NORMAL = 1] = "NORMAL", e[e.LOGGING = 2] = "LOGGING";
  }(ri || (ri = {}));

  var ai = fs({}),
      ii = ["alloy/data/Fields", "alloy/debugging/Debugging"],
      li = function li(e, t, o) {
    return function (e, t, o) {
      switch (be(ai.get(), e).orThunk(function () {
        var t = ae(ai.get());
        return re(t, function (t) {
          return e.indexOf(t) > -1 ? B.some(ai.get()[t]) : B.none();
        });
      }).getOr(ri.NORMAL)) {
        case ri.NORMAL:
          return o(ci());

        case ri.LOGGING:
          {
            var _n21 = function (e, t) {
              var o = [],
                  n = new Date().getTime();
              return {
                logEventCut: function logEventCut(e, t, n) {
                  o.push({
                    outcome: "cut",
                    target: t,
                    purpose: n
                  });
                },
                logEventStopped: function logEventStopped(e, t, n) {
                  o.push({
                    outcome: "stopped",
                    target: t,
                    purpose: n
                  });
                },
                logNoParent: function logNoParent(e, t, n) {
                  o.push({
                    outcome: "no-parent",
                    target: t,
                    purpose: n
                  });
                },
                logEventNoHandlers: function logEventNoHandlers(e, t) {
                  o.push({
                    outcome: "no-handlers-left",
                    target: t
                  });
                },
                logEventResponse: function logEventResponse(e, t, n) {
                  o.push({
                    outcome: "response",
                    purpose: n,
                    target: t
                  });
                },
                write: function write() {
                  var s = new Date().getTime();
                  R(["mousemove", "mouseover", "mouseout", rr()], e) || console.log(e, {
                    event: e,
                    time: s - n,
                    target: t.dom,
                    sequence: P(o, function (e) {
                      return R(["cut", "stopped", "response"], e.outcome) ? "{" + e.purpose + "} " + e.outcome + " at (" + jr(e.target) + ")" : e.outcome;
                    })
                  });
                }
              };
            }(e, t),
                _s17 = o(_n21);

            return _n21.write(), _s17;
          }

        case ri.STOP:
          return !0;
      }
    }(e, t, o);
  },
      ci = y({
    logEventCut: b,
    logEventStopped: b,
    logNoParent: b,
    logEventNoHandlers: b,
    logEventResponse: b,
    write: b
  }),
      di = y([jn("menu"), jn("selectedMenu")]),
      ui = y([jn("item"), jn("selectedItem")]);

  y(xn(ui().concat(di())));

  var mi = y(xn(ui())),
      gi = Yn("initSize", [jn("numColumns"), jn("numRows")]),
      pi = function pi() {
    return Yn("markers", [jn("backgroundMenu")].concat(di()).concat(ui()));
  },
      hi = function hi(e) {
    return Yn("markers", P(e, jn));
  },
      fi = function fi(e, t, o) {
    return function () {
      var e = new Error();

      if (void 0 !== e.stack) {
        var _t13 = e.stack.split("\n");

        G(_t13, function (e) {
          return e.indexOf("alloy") > 0 && !V(ii, function (t) {
            return e.indexOf(t) > -1;
          });
        }).getOr("unknown");
      }
    }(), Ln(t, t, o, In(function (e) {
      return qo.value(function () {
        for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          t[_key12] = arguments[_key12];
        }

        return e.apply(void 0, t);
      });
    }));
  },
      bi = function bi(e) {
    return fi(0, e, ln(b));
  },
      vi = function vi(e) {
    return fi(0, e, ln(B.none));
  },
      yi = function yi(e) {
    return fi(0, e, {
      tag: "required",
      process: {}
    });
  },
      xi = function xi(e) {
    return fi(0, e, {
      tag: "required",
      process: {}
    });
  },
      wi = function wi(e, t) {
    return Wn(e, y(t));
  },
      Si = function Si(e) {
    return Wn(e, x);
  },
      ki = y(gi),
      Ci = function Ci(e, t, o, n, s, r, a) {
    var i = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
    return {
      x: e,
      y: t,
      bubble: o,
      direction: n,
      placement: s,
      restriction: r,
      label: "".concat(a, "-").concat(s),
      alwaysFit: i
    };
  },
      Oi = bs([{
    southeast: []
  }, {
    southwest: []
  }, {
    northeast: []
  }, {
    northwest: []
  }, {
    south: []
  }, {
    north: []
  }, {
    east: []
  }, {
    west: []
  }]),
      _i = Oi.southeast,
      Ti = Oi.southwest,
      Ei = Oi.northeast,
      Bi = Oi.northwest,
      Mi = Oi.south,
      Ai = Oi.north,
      Di = Oi.east,
      Fi = Oi.west,
      Ii = function Ii(e, t, o, n) {
    var s = e + t;
    return s > n ? o : s < o ? n : s;
  },
      Ri = function Ri(e, t, o) {
    return Math.min(Math.max(e, t), o);
  },
      Vi = function Vi(e, t) {
    return Z(["left", "right", "top", "bottom"], function (o) {
      return be(t, o).map(function (t) {
        return function (e, t) {
          switch (t) {
            case 1:
              return e.x;

            case 0:
              return e.x + e.width;

            case 2:
              return e.y;

            case 3:
              return e.y + e.height;
          }
        }(e, t);
      });
    });
  },
      zi = "layout",
      Hi = function Hi(e) {
    return e.x;
  },
      Pi = function Pi(e, t) {
    return e.x + e.width / 2 - t.width / 2;
  },
      Ni = function Ni(e, t) {
    return e.x + e.width - t.width;
  },
      Li = function Li(e, t) {
    return e.y - t.height;
  },
      Wi = function Wi(e) {
    return e.y + e.height;
  },
      Ui = function Ui(e, t) {
    return e.y + e.height / 2 - t.height / 2;
  },
      ji = function ji(e, t, o) {
    return Ci(Hi(e), Wi(e), o.southeast(), _i(), "southeast", Vi(e, {
      left: 1,
      top: 3
    }), zi);
  },
      Gi = function Gi(e, t, o) {
    return Ci(Ni(e, t), Wi(e), o.southwest(), Ti(), "southwest", Vi(e, {
      right: 0,
      top: 3
    }), zi);
  },
      $i = function $i(e, t, o) {
    return Ci(Hi(e), Li(e, t), o.northeast(), Ei(), "northeast", Vi(e, {
      left: 1,
      bottom: 2
    }), zi);
  },
      qi = function qi(e, t, o) {
    return Ci(Ni(e, t), Li(e, t), o.northwest(), Bi(), "northwest", Vi(e, {
      right: 0,
      bottom: 2
    }), zi);
  },
      Xi = function Xi(e, t, o) {
    return Ci(Pi(e, t), Li(e, t), o.north(), Ai(), "north", Vi(e, {
      bottom: 2
    }), zi);
  },
      Ki = function Ki(e, t, o) {
    return Ci(Pi(e, t), Wi(e), o.south(), Mi(), "south", Vi(e, {
      top: 3
    }), zi);
  },
      Yi = function Yi(e, t, o) {
    return Ci(function (e) {
      return e.x + e.width;
    }(e), Ui(e, t), o.east(), Di(), "east", Vi(e, {
      left: 0
    }), zi);
  },
      Ji = function Ji(e, t, o) {
    return Ci(function (e, t) {
      return e.x - t.width;
    }(e, t), Ui(e, t), o.west(), Fi(), "west", Vi(e, {
      right: 1
    }), zi);
  },
      Zi = function Zi() {
    return [ji, Gi, $i, qi, Ki, Xi, Yi, Ji];
  },
      Qi = function Qi() {
    return [Gi, ji, qi, $i, Ki, Xi, Yi, Ji];
  },
      el = function el() {
    return [$i, qi, ji, Gi, Xi, Ki];
  },
      tl = function tl() {
    return [qi, $i, Gi, ji, Xi, Ki];
  },
      ol = function ol() {
    return [ji, Gi, $i, qi, Ki, Xi];
  },
      nl = function nl() {
    return [Gi, ji, qi, $i, Ki, Xi];
  };

  var sl = Object.freeze({
    __proto__: null,
    events: function events(e) {
      return _r([Br(Zs(), function (t, o) {
        var n = e.channels,
            s = ae(n),
            r = o,
            a = function (e, t) {
          return t.universal ? e : W(e, function (e) {
            return R(t.channels, e);
          });
        }(s, r);

        N(a, function (e) {
          var o = n[e],
              s = o.schema,
              a = Hn("channel[" + e + "] data\nReceiver: " + jr(t.element), s, r.data);
          o.onReceive(t, a);
        });
      })]);
    }
  }),
      rl = [Gn("channels", Rn(qo.value, yn([yi("onReceive"), is("schema", On())])))];

  var al = function al(e, t, o) {
    return Pr(function (n, s) {
      o(n, e, t);
    });
  },
      il = function il(e) {
    return {
      key: e,
      value: void 0
    };
  },
      ll = function ll(e, t, o, n, s, r, a) {
    var i = function i(e) {
      return ye(e, o) ? e[o]() : B.none();
    },
        l = ce(s, function (e, t) {
      return function (e, t, o) {
        return function (e, t, o) {
          var n = o.toString(),
              s = n.indexOf(")") + 1,
              r = n.indexOf("("),
              a = n.substring(r + 1, s - 1).split(/,\s*/);
          return e.toFunctionAnnotation = function () {
            return {
              name: t,
              parameters: aa(a.slice(0, 1).concat(a.slice(3)))
            };
          }, e;
        }(function (n) {
          for (var _len13 = arguments.length, s = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
            s[_key13 - 1] = arguments[_key13];
          }

          var r = [n].concat(s);
          return n.config({
            name: y(e)
          }).fold(function () {
            throw new Error("We could not find any behaviour configuration for: " + e + ". Using API: " + o);
          }, function (e) {
            var o = Array.prototype.slice.call(r, 1);
            return t.apply(void 0, [n, e.config, e.state].concat(o));
          });
        }, o, t);
      }(o, e, t);
    }),
        c = _objectSpread({}, ce(r, function (e, t) {
      return ia(e, t);
    }), {}, l, {
      revoke: S(il, o),
      config: function config(t) {
        var n = Hn(o + "-config", e, t);
        return {
          key: o,
          value: {
            config: n,
            me: c,
            configAsRaw: Gt(function () {
              return Hn(o + "-config", e, t);
            }),
            initialConfig: t,
            state: a
          }
        };
      },
      schema: y(t),
      exhibit: function exhibit(e, t) {
        return Se(i(e), be(n, "exhibit"), function (e, o) {
          return o(t, e.config, e.state);
        }).getOrThunk(function () {
          return ha({});
        });
      },
      name: y(o),
      handlers: function handlers(e) {
        return i(e).map(function (e) {
          return be(n, "events").getOr(function () {
            return {};
          })(e.config, e.state);
        }).getOr({});
      }
    });

    return c;
  },
      cl = function cl(e) {
    return ys(e);
  },
      dl = yn([jn("fields"), jn("name"), is("active", {}), is("apis", {}), is("state", ma), is("extra", {})]),
      ul = function ul(e) {
    var t = Hn("Creating behaviour: " + e.name, dl, e);
    return function (e, t, o, n, s, r) {
      var a = yn(e),
          i = as(t, [("config", l = e, es("config", yn(l)))]);
      var l;
      return ll(a, i, t, o, n, s, r);
    }(t.fields, t.name, t.active, t.apis, t.extra, t.state);
  },
      ml = yn([jn("branchKey"), jn("branches"), jn("name"), is("active", {}), is("apis", {}), is("state", ma), is("extra", {})]),
      gl = function gl(e) {
    var t = Hn("Creating behaviour: " + e.name, ml, e);
    return function (e, t, o, n, s, r) {
      var a = e,
          i = as(t, [es("config", e)]);
      return ll(a, i, t, o, n, s, r);
    }(Nn(t.branchKey, t.branches), t.name, t.active, t.apis, t.extra, t.state);
  },
      pl = y(void 0),
      hl = ul({
    fields: rl,
    name: "receiving",
    active: sl
  });

  var fl = Object.freeze({
    __proto__: null,
    exhibit: function exhibit(e, t) {
      return ha({
        classes: [],
        styles: t.useFixed() ? {} : {
          position: "relative"
        }
      });
    }
  });

  var bl = function bl(e) {
    return e.dom.focus();
  },
      vl = function vl(e) {
    var t = it(e).dom;
    return e.dom === t.activeElement;
  },
      yl = function yl() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : zo();
    return B.from(e.dom.activeElement).map(Ie);
  },
      xl = function xl(e) {
    return yl(it(e)).filter(function (t) {
      return e.dom.contains(t.dom);
    });
  },
      wl = function wl(e, t) {
    var o = it(t),
        n = yl(o).bind(function (e) {
      var o = function o(t) {
        return Ge(e, t);
      };

      return o(t) ? B.some(t) : function (e, t) {
        var o = function o(e) {
          for (var _n22 = 0; _n22 < e.childNodes.length; _n22++) {
            var _s18 = Ie(e.childNodes[_n22]);

            if (t(_s18)) return B.some(_s18);

            var _r6 = o(e.childNodes[_n22]);

            if (_r6.isSome()) return _r6;
          }

          return B.none();
        };

        return o(e.dom);
      }(t, o);
    }),
        s = e(t);
    return n.each(function (e) {
      yl(o).filter(function (t) {
        return Ge(t, e);
      }).fold(function () {
        bl(e);
      }, b);
    }), s;
  },
      Sl = function Sl(e, t, o, n, s) {
    var r = function r(e) {
      return e + "px";
    };

    return {
      position: e,
      left: t.map(r),
      top: o.map(r),
      right: n.map(r),
      bottom: s.map(r)
    };
  },
      kl = function kl(e, t) {
    Ot(e, function (e) {
      return _objectSpread({}, e, {
        position: B.some(e.position)
      });
    }(t));
  },
      Cl = bs([{
    none: []
  }, {
    relative: ["x", "y", "width", "height"]
  }, {
    fixed: ["x", "y", "width", "height"]
  }]),
      Ol = function Ol(e, t, o, n, s, r) {
    var a = t.rect,
        i = a.x - o,
        l = a.y - n,
        c = s - (i + a.width),
        d = r - (l + a.height),
        u = B.some(i),
        m = B.some(l),
        g = B.some(c),
        p = B.some(d),
        h = B.none();
    return t.direction.fold(function () {
      return Sl(e, u, m, h, h);
    }, function () {
      return Sl(e, h, m, g, h);
    }, function () {
      return Sl(e, u, h, h, p);
    }, function () {
      return Sl(e, h, h, g, p);
    }, function () {
      return Sl(e, u, m, h, h);
    }, function () {
      return Sl(e, u, h, h, p);
    }, function () {
      return Sl(e, u, m, h, h);
    }, function () {
      return Sl(e, h, m, g, h);
    });
  },
      _l = function _l(e, t) {
    return e.fold(function () {
      var e = t.rect;
      return Sl("absolute", B.some(e.x), B.some(e.y), B.none(), B.none());
    }, function (e, o, n, s) {
      return Ol("absolute", t, e, o, n, s);
    }, function (e, o, n, s) {
      return Ol("fixed", t, e, o, n, s);
    });
  },
      Tl = function Tl(e, t) {
    var o = S(No, t),
        n = e.fold(o, o, function () {
      var e = Fo();
      return No(t).translate(-e.left, -e.top);
    }),
        s = jt(t),
        r = Vt(t);
    return Lo(n.left, n.top, s, r);
  },
      El = function El(e, t) {
    return t.fold(function () {
      return e.fold(jo, jo, Lo);
    }, function (t) {
      return e.fold(t, t, function () {
        var o = t(),
            n = Bl(e, o.x, o.y);
        return Lo(n.left, n.top, o.width, o.height);
      });
    });
  },
      Bl = function Bl(e, t, o) {
    var n = Ht(t, o);
    return e.fold(y(n), y(n), function () {
      var e = Fo();
      return n.translate(-e.left, -e.top);
    });
  };

  Cl.none;

  var Ml = Cl.relative,
      Al = Cl.fixed,
      Dl = "data-alloy-placement",
      Fl = function Fl(e) {
    return vt(e, Dl);
  },
      Il = bs([{
    fit: ["reposition"]
  }, {
    nofit: ["reposition", "visibleW", "visibleH", "isVisible"]
  }]),
      Rl = function Rl(e, t, o, n) {
    var s = e.bubble,
        r = s.offset,
        a = function (e, t, o) {
      var n = function n(_n23, s) {
        return t[_n23].map(function (t) {
          var r = "top" === _n23 || "bottom" === _n23,
              a = r ? o.top : o.left,
              i = ("left" === _n23 || "top" === _n23 ? Math.max : Math.min)(t, s) + a;
          return r ? Ri(i, e.y, e.bottom) : Ri(i, e.x, e.right);
        }).getOr(s);
      },
          s = n("left", e.x),
          r = n("top", e.y),
          a = n("right", e.right),
          i = n("bottom", e.bottom);

      return Lo(s, r, a - s, i - r);
    }(n, e.restriction, r),
        i = e.x + r.left,
        l = e.y + r.top,
        c = Lo(i, l, t, o),
        _ref3 = function (e, t) {
      var o = t.x,
          n = t.y,
          s = t.right,
          r = t.bottom,
          a = e.x,
          i = e.y,
          l = e.right,
          c = e.bottom,
          d = e.width,
          u = e.height;
      return {
        originInBounds: a >= o && a <= s && i >= n && i <= r,
        sizeInBounds: l <= s && l >= o && c <= r && c >= n,
        visibleW: Math.min(d, a >= o ? s - a : l - o),
        visibleH: Math.min(u, i >= n ? r - i : c - n)
      };
    }(c, a),
        d = _ref3.originInBounds,
        u = _ref3.sizeInBounds,
        m = _ref3.visibleW,
        g = _ref3.visibleH,
        p = d && u,
        h = p ? c : function (e, t) {
      var o = t.x,
          n = t.y,
          s = t.right,
          r = t.bottom,
          a = e.x,
          i = e.y,
          l = e.width,
          c = e.height,
          d = Math.max(o, s - l),
          u = Math.max(n, r - c),
          m = Ri(a, o, d),
          g = Ri(i, n, u),
          p = Math.min(m + l, s) - m,
          h = Math.min(g + c, r) - g;
      return Lo(m, g, p, h);
    }(c, a),
        f = h.width > 0 && h.height > 0,
        _ref4 = function (e, t, o) {
      var n = y(t.bottom - o.y),
          s = y(o.bottom - t.y),
          r = function (e, t, o, n) {
        return e.fold(t, t, n, n, t, n, o, o);
      }(e, s, s, n),
          a = y(t.right - o.x),
          i = y(o.right - t.x),
          l = function (e, t, o, n) {
        return e.fold(t, n, t, n, o, o, t, n);
      }(e, i, i, a);

      return {
        maxWidth: l,
        maxHeight: r
      };
    }(e.direction, h, n),
        b = _ref4.maxWidth,
        v = _ref4.maxHeight,
        x = {
      rect: h,
      maxHeight: v,
      maxWidth: b,
      direction: e.direction,
      placement: e.placement,
      classes: {
        on: s.classesOn,
        off: s.classesOff
      },
      layout: e.label,
      testY: l
    };

    return p || e.alwaysFit ? Il.fit(x) : Il.nofit(x, m, g, f);
  },
      Vl = function Vl(e) {
    var t = fs(B.none()),
        o = function o() {
      return t.get().each(e);
    };

    return {
      clear: function clear() {
        o(), t.set(B.none());
      },
      isSet: function isSet() {
        return t.get().isSome();
      },
      get: function get() {
        return t.get();
      },
      set: function set(e) {
        o(), t.set(B.some(e));
      }
    };
  },
      zl = function zl() {
    return Vl(function (e) {
      return e.unbind();
    });
  },
      Hl = function Hl() {
    var e = Vl(b);
    return _objectSpread({}, e, {
      on: function on(t) {
        return e.get().each(t);
      }
    });
  },
      Pl = T,
      Nl = function Nl(e, t, o) {
    return function (e, t, o, n) {
      return Co(e, t, o, n, !1);
    }(e, t, Pl, o);
  },
      Ll = function Ll(e, t, o) {
    return function (e, t, o, n) {
      return Co(e, t, o, n, !0);
    }(e, t, Pl, o);
  },
      Wl = ko,
      Ul = ["top", "bottom", "right", "left"],
      jl = "data-alloy-transition-timer",
      Gl = function Gl(e, t, o, n, s, a) {
    var i = function (e, t, o) {
      return o.exists(function (o) {
        var n = e.mode;
        return "all" === n || o[n] !== t[n];
      });
    }(n, s, a);

    if (i || function (e, t) {
      return function (e, t) {
        return K(t, function (t) {
          return Ba(e, t);
        });
      }(e, t.classes);
    }(e, n)) {
      kt(e, "position", o.position);

      var _a2 = Tl(t, e),
          _l2 = _l(t, _objectSpread({}, s, {
        rect: _a2
      })),
          _c2 = Z(Ul, function (e) {
        return _l2[e];
      });

      (function (e, t) {
        var o = function o(e) {
          return parseFloat(e).toFixed(3);
        };

        return he(t, function (t, n) {
          return !function (e, t) {
            var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : w;
            return Se(e, t, o).getOr(e.isNone() && t.isNone());
          }(e[n].map(o), t.map(o));
        }).isSome();
      })(o, _c2) && (Ot(e, _c2), i && function (e, t) {
        Ma(e, t.classes), vt(e, jl).each(function (t) {
          clearTimeout(parseInt(t, 10)), xt(e, jl);
        }), function (e, t) {
          var o = zl(),
              n = zl();
          var s;

          var a = function a(t) {
            var o;
            var n = null !== (o = t.raw.pseudoElement) && void 0 !== o ? o : "";
            return Ge(t.target, e) && !Ee(n) && R(Ul, t.raw.propertyName);
          },
              i = function i(r) {
            if (m(r) || a(r)) {
              o.clear(), n.clear();

              var _a3 = null == r ? void 0 : r.raw.type;

              (m(_a3) || _a3 === js()) && (clearTimeout(s), xt(e, jl), Aa(e, t.classes));
            }
          },
              l = Nl(e, Gs(), function (t) {
            a(t) && (l.unbind(), o.set(Nl(e, js(), i)), n.set(Nl(e, Us(), i)));
          }),
              c = function (e) {
            var t = function t(_t14) {
              var o = _t(e, _t14).split(/\s*,\s*/);

              return W(o, Ee);
            },
                o = function o(e) {
              if (r(e) && /^[\d.]+/.test(e)) {
                var _t15 = parseFloat(e);

                return _e(e, "ms") ? _t15 : 1e3 * _t15;
              }

              return 0;
            },
                n = t("transition-delay"),
                s = t("transition-duration");

            return j(s, function (e, t, s) {
              var r = o(n[s]) + o(t);
              return Math.max(e, r);
            }, 0);
          }(e);

          requestAnimationFrame(function () {
            s = setTimeout(i, c + 17), ht(e, jl, s);
          });
        }(e, t);
      }(e, n), Dt(e));
    } else Aa(e, n.classes);
  },
      $l = function $l(e, t) {
    (function (e, t) {
      var o = It.max(e, t, ["margin-top", "border-top-width", "padding-top", "padding-bottom", "border-bottom-width", "margin-bottom"]);
      kt(e, "max-height", o + "px");
    })(e, Math.floor(t));
  },
      ql = y(function (e, t) {
    $l(e, t), Ct(e, {
      "overflow-x": "hidden",
      "overflow-y": "auto"
    });
  }),
      Xl = y(function (e, t) {
    $l(e, t);
  }),
      Kl = function Kl(e, t, o) {
    return void 0 === e[t] ? o : e[t];
  },
      Yl = function Yl(e, t, o, n) {
    var s = function (e, t, o, n) {
      At(t, "max-height"), At(t, "max-width");
      var s = {
        width: jt(r = t),
        height: Vt(r)
      };
      var r;
      return function (e, t, o, n, s, r) {
        var a = n.width,
            i = n.height,
            l = function l(t, _l3, c, d, u) {
          var m = t(o, n, s, e, r),
              g = Rl(m, a, i, r);
          return g.fold(y(g), function (e, t, o, n) {
            return (u === n ? o > d || t > c : !u && n) ? g : Il.nofit(_l3, c, d, u);
          });
        };

        return j(t, function (e, t) {
          var o = S(l, t);
          return e.fold(y(e), o);
        }, Il.nofit({
          rect: o,
          maxHeight: n.height,
          maxWidth: n.width,
          direction: _i(),
          placement: "southeast",
          classes: {
            on: [],
            off: []
          },
          layout: "none",
          testY: o.y
        }, -1, -1, !1)).fold(x, x);
      }(t, n.preference, e, s, o, n.bounds);
    }(e, t, o, n);

    return function (e, t, o) {
      var n = _l(o.origin, t);

      o.transition.each(function (s) {
        Gl(e, o.origin, n, s, t, o.lastPlacement);
      }), kl(e, n);
    }(t, s, n), function (e, t) {
      (function (e, t) {
        ht(e, Dl, t);
      })(e, t.placement);
    }(t, s), function (e, t) {
      var o = t.classes;
      Aa(e, o.off), Ma(e, o.on);
    }(t, s), function (e, t, o) {
      (0, o.maxHeightFunction)(e, t.maxHeight);
    }(t, s, n), function (e, t, o) {
      (0, o.maxWidthFunction)(e, t.maxWidth);
    }(t, s, n), {
      layout: s.layout,
      placement: s.placement
    };
  },
      Jl = ["valignCentre", "alignLeft", "alignRight", "alignCentre", "top", "bottom", "left", "right", "inset"],
      Zl = function Zl(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    var s = e * n,
        r = t * n,
        a = function a(e) {
      return be(o, e).getOr([]);
    },
        i = function i(e, t, o) {
      var n = J(Jl, o);
      return {
        offset: Ht(e, t),
        classesOn: X(o, a),
        classesOff: X(n, a)
      };
    };

    return {
      southeast: function southeast() {
        return i(-e, t, ["top", "alignLeft"]);
      },
      southwest: function southwest() {
        return i(e, t, ["top", "alignRight"]);
      },
      south: function south() {
        return i(-e / 2, t, ["top", "alignCentre"]);
      },
      northeast: function northeast() {
        return i(-e, -t, ["bottom", "alignLeft"]);
      },
      northwest: function northwest() {
        return i(e, -t, ["bottom", "alignRight"]);
      },
      north: function north() {
        return i(-e / 2, -t, ["bottom", "alignCentre"]);
      },
      east: function east() {
        return i(e, -t / 2, ["valignCentre", "left"]);
      },
      west: function west() {
        return i(-e, -t / 2, ["valignCentre", "right"]);
      },
      insetNortheast: function insetNortheast() {
        return i(s, r, ["top", "alignLeft", "inset"]);
      },
      insetNorthwest: function insetNorthwest() {
        return i(-s, r, ["top", "alignRight", "inset"]);
      },
      insetNorth: function insetNorth() {
        return i(-s / 2, r, ["top", "alignCentre", "inset"]);
      },
      insetSoutheast: function insetSoutheast() {
        return i(s, -r, ["bottom", "alignLeft", "inset"]);
      },
      insetSouthwest: function insetSouthwest() {
        return i(-s, -r, ["bottom", "alignRight", "inset"]);
      },
      insetSouth: function insetSouth() {
        return i(-s / 2, -r, ["bottom", "alignCentre", "inset"]);
      },
      insetEast: function insetEast() {
        return i(-s, -r / 2, ["valignCentre", "right", "inset"]);
      },
      insetWest: function insetWest() {
        return i(s, -r / 2, ["valignCentre", "left", "inset"]);
      }
    };
  },
      Ql = function Ql() {
    return Zl(0, 0, {});
  },
      ec = x,
      tc = function tc(e, t) {
    return function (o) {
      return "rtl" === oc(o) ? t : e;
    };
  },
      oc = function oc(e) {
    return "rtl" === _t(e, "direction") ? "rtl" : "ltr";
  };

  var nc;
  !function (e) {
    e.TopToBottom = "toptobottom", e.BottomToTop = "bottomtotop";
  }(nc || (nc = {}));

  var sc = "data-alloy-vertical-dir",
      rc = function rc(e) {
    return Ja(e, function (e) {
      return He(e) && bt(e, "data-alloy-vertical-dir") === nc.BottomToTop;
    });
  },
      ac = function ac() {
    return as("layouts", [jn("onLtr"), jn("onRtl"), Qn("onBottomLtr"), Qn("onBottomRtl")]);
  },
      ic = function ic(e, t, o, n, s, r, a) {
    var i = a.map(rc).getOr(!1),
        l = t.layouts.map(function (t) {
      return t.onLtr(e);
    }),
        c = t.layouts.map(function (t) {
      return t.onRtl(e);
    }),
        d = i ? t.layouts.bind(function (t) {
      return t.onBottomLtr.map(function (t) {
        return t(e);
      });
    }).or(l).getOr(s) : l.getOr(o),
        u = i ? t.layouts.bind(function (t) {
      return t.onBottomRtl.map(function (t) {
        return t(e);
      });
    }).or(c).getOr(r) : c.getOr(n);
    return tc(d, u)(e);
  };

  var lc = [jn("hotspot"), Qn("bubble"), is("overrides", {}), ac(), wi("placement", function (e, t, o) {
    var n = t.hotspot,
        s = Tl(o, n.element),
        r = ic(e.element, t, ol(), nl(), el(), tl(), B.some(t.hotspot.element));
    return B.some(ec({
      anchorBox: s,
      bubble: t.bubble.getOr(Ql()),
      overrides: t.overrides,
      layouts: r,
      placer: B.none()
    }));
  })],
      cc = [jn("x"), jn("y"), is("height", 0), is("width", 0), is("bubble", Ql()), is("overrides", {}), ac(), wi("placement", function (e, t, o) {
    var n = Bl(o, t.x, t.y),
        s = Lo(n.left, n.top, t.width, t.height),
        r = ic(e.element, t, Zi(), Qi(), Zi(), Qi(), B.none());
    return B.some(ec({
      anchorBox: s,
      bubble: t.bubble,
      overrides: t.overrides,
      layouts: r,
      placer: B.none()
    }));
  })];

  var dc = bs([{
    screen: ["point"]
  }, {
    absolute: ["point", "scrollLeft", "scrollTop"]
  }]),
      uc = function uc(e) {
    return e.fold(x, function (e, t, o) {
      return e.translate(-t, -o);
    });
  },
      mc = function mc(e) {
    return e.fold(x, x);
  },
      gc = function gc(e) {
    return j(e, function (e, t) {
      return e.translate(t.left, t.top);
    }, Ht(0, 0));
  },
      pc = function pc(e) {
    var t = P(e, mc);
    return gc(t);
  },
      hc = dc.screen,
      fc = dc.absolute,
      bc = function bc(e, t, o) {
    var n = qe(e.element),
        s = Fo(n),
        r = function (e, t, o) {
      var n = Ye(o.root).dom;
      return B.from(n.frameElement).map(Ie).filter(function (t) {
        var o = qe(t),
            n = qe(e.element);
        return Ge(o, n);
      }).map(Nt);
    }(e, 0, o).getOr(s);

    return fc(r, s.left, s.top);
  },
      vc = function vc(e, t, o, n) {
    var s = hc(Ht(e, t));
    return B.some(function (e, t, o) {
      return {
        point: e,
        width: t,
        height: o
      };
    }(s, o, n));
  },
      yc = function yc(e, t, o, n, s) {
    return e.map(function (e) {
      var r = [t, e.point],
          a = (i = function i() {
        return pc(r);
      }, l = function l() {
        return pc(r);
      }, c = function c() {
        return function (e) {
          var t = P(e, uc);
          return gc(t);
        }(r);
      }, n.fold(i, l, c));
      var i, l, c;
      var d = (p = a.left, h = a.top, f = e.width, b = e.height, {
        x: p,
        y: h,
        width: f,
        height: b
      }),
          u = o.showAbove ? el() : ol(),
          m = o.showAbove ? tl() : nl(),
          g = ic(s, o, u, m, u, m, B.none());
      var p, h, f, b;
      return ec({
        anchorBox: d,
        bubble: o.bubble.getOr(Ql()),
        overrides: o.overrides,
        layouts: g,
        placer: B.none()
      });
    });
  };

  var xc = [jn("node"), jn("root"), Qn("bubble"), ac(), is("overrides", {}), is("showAbove", !1), wi("placement", function (e, t, o) {
    var n = bc(e, 0, t);
    return t.node.filter(ut).bind(function (s) {
      var r = s.dom.getBoundingClientRect(),
          a = vc(r.left, r.top, r.width, r.height),
          i = t.node.getOr(e.element);
      return yc(a, n, t, o, i);
    });
  })];

  var wc = function wc(e, t, o, n) {
    return {
      start: e,
      soffset: t,
      finish: o,
      foffset: n
    };
  },
      Sc = bs([{
    before: ["element"]
  }, {
    on: ["element", "offset"]
  }, {
    after: ["element"]
  }]),
      kc = (Sc.before, Sc.on, Sc.after, function (e) {
    return e.fold(x, x, x);
  }),
      Cc = bs([{
    domRange: ["rng"]
  }, {
    relative: ["startSitu", "finishSitu"]
  }, {
    exact: ["start", "soffset", "finish", "foffset"]
  }]),
      Oc = {
    domRange: Cc.domRange,
    relative: Cc.relative,
    exact: Cc.exact,
    exactFromRange: function exactFromRange(e) {
      return Cc.exact(e.start, e.soffset, e.finish, e.foffset);
    },
    getWin: function getWin(e) {
      var t = function (e) {
        return e.match({
          domRange: function domRange(e) {
            return Ie(e.startContainer);
          },
          relative: function relative(e, t) {
            return kc(e);
          },
          exact: function exact(e, t, o, n) {
            return e;
          }
        });
      }(e);

      return Ye(t);
    },
    range: wc
  },
      _c = function _c(e, t, o) {
    var n = e.document.createRange();
    var s;
    return s = n, t.fold(function (e) {
      s.setStartBefore(e.dom);
    }, function (e, t) {
      s.setStart(e.dom, t);
    }, function (e) {
      s.setStartAfter(e.dom);
    }), function (e, t) {
      t.fold(function (t) {
        e.setEndBefore(t.dom);
      }, function (t, o) {
        e.setEnd(t.dom, o);
      }, function (t) {
        e.setEndAfter(t.dom);
      });
    }(n, o), n;
  },
      Tc = function Tc(e, t, o, n, s) {
    var r = e.document.createRange();
    return r.setStart(t.dom, o), r.setEnd(n.dom, s), r;
  },
      Ec = function Ec(e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      width: e.width,
      height: e.height
    };
  },
      Bc = bs([{
    ltr: ["start", "soffset", "finish", "foffset"]
  }, {
    rtl: ["start", "soffset", "finish", "foffset"]
  }]),
      Mc = function Mc(e, t, o) {
    return t(Ie(o.startContainer), o.startOffset, Ie(o.endContainer), o.endOffset);
  },
      Ac = function Ac(e, t) {
    return function (e, t) {
      var o = function (e, t) {
        return t.match({
          domRange: function domRange(e) {
            return {
              ltr: y(e),
              rtl: B.none
            };
          },
          relative: function relative(t, o) {
            return {
              ltr: Gt(function () {
                return _c(e, t, o);
              }),
              rtl: Gt(function () {
                return B.some(_c(e, o, t));
              })
            };
          },
          exact: function exact(t, o, n, s) {
            return {
              ltr: Gt(function () {
                return Tc(e, t, o, n, s);
              }),
              rtl: Gt(function () {
                return B.some(Tc(e, n, s, t, o));
              })
            };
          }
        });
      }(e, t);

      return function (e, t) {
        var o = t.ltr();
        return o.collapsed ? t.rtl().filter(function (e) {
          return !1 === e.collapsed;
        }).map(function (e) {
          return Bc.rtl(Ie(e.endContainer), e.endOffset, Ie(e.startContainer), e.startOffset);
        }).getOrThunk(function () {
          return Mc(0, Bc.ltr, o);
        }) : Mc(0, Bc.ltr, o);
      }(0, o);
    }(e, t).match({
      ltr: function ltr(t, o, n, s) {
        var r = e.document.createRange();
        return r.setStart(t.dom, o), r.setEnd(n.dom, s), r;
      },
      rtl: function rtl(t, o, n, s) {
        var r = e.document.createRange();
        return r.setStart(n.dom, s), r.setEnd(t.dom, o), r;
      }
    });
  };

  Bc.ltr, Bc.rtl;

  var Dc = function Dc(e, t) {
    return function (e, t) {
      var o = void 0 === t ? document : t.dom;
      return je(o) ? [] : P(o.querySelectorAll(e), Ie);
    }(t, e);
  },
      Fc = function Fc(e) {
    if (e.rangeCount > 0) {
      var _t16 = e.getRangeAt(0),
          _o15 = e.getRangeAt(e.rangeCount - 1);

      return B.some(wc(Ie(_t16.startContainer), _t16.startOffset, Ie(_o15.endContainer), _o15.endOffset));
    }

    return B.none();
  },
      Ic = function Ic(e) {
    if (null === e.anchorNode || null === e.focusNode) return Fc(e);
    {
      var _t17 = Ie(e.anchorNode),
          _o16 = Ie(e.focusNode);

      return function (e, t, o, n) {
        var s = function (e, t, o, n) {
          var s = qe(e).dom.createRange();
          return s.setStart(e.dom, t), s.setEnd(o.dom, n), s;
        }(e, t, o, n),
            r = Ge(e, o) && t === n;

        return s.collapsed && !r;
      }(_t17, e.anchorOffset, _o16, e.focusOffset) ? B.some(wc(_t17, e.anchorOffset, _o16, e.focusOffset)) : Fc(e);
    }
  },
      Rc = function Rc(e, t) {
    return function (e) {
      var t = e.getClientRects(),
          o = t.length > 0 ? t[0] : e.getBoundingClientRect();
      return o.width > 0 || o.height > 0 ? B.some(o).map(Ec) : B.none();
    }(Ac(e, t));
  },
      Vc = function (e, t) {
    var o = function o(t) {
      return e(t) ? B.from(t.dom.nodeValue) : B.none();
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
  }(Pe),
      zc = function zc(e, t) {
    return {
      element: e,
      offset: t
    };
  },
      Hc = function Hc(e, t) {
    return Pe(e) ? zc(e, t) : function (e, t) {
      var o = et(e);
      if (0 === o.length) return zc(e, t);
      if (t < o.length) return zc(o[t], 0);
      {
        var _e8 = o[o.length - 1],
            _t18 = Pe(_e8) ? function (e) {
          return Vc.get(e);
        }(_e8).length : et(_e8).length;

        return zc(_e8, _t18);
      }
    }(e, t);
  },
      Pc = function Pc(e, t) {
    return t.getSelection.getOrThunk(function () {
      return function () {
        return function (e) {
          return function (e) {
            return B.from(e.getSelection());
          }(e).filter(function (e) {
            return e.rangeCount > 0;
          }).bind(Ic);
        }(e);
      };
    })().map(function (e) {
      var t = Hc(e.start, e.soffset),
          o = Hc(e.finish, e.foffset);
      return Oc.range(t.element, t.offset, o.element, o.offset);
    });
  };

  var Nc = [Qn("getSelection"), jn("root"), Qn("bubble"), ac(), is("overrides", {}), is("showAbove", !1), wi("placement", function (e, t, o) {
    var n = Ye(t.root).dom,
        s = bc(e, 0, t),
        r = Pc(n, t).bind(function (e) {
      var t = function (e, t) {
        return function (e) {
          var t = e.getBoundingClientRect();
          return t.width > 0 || t.height > 0 ? B.some(t).map(Ec) : B.none();
        }(Ac(e, t));
      }(n, Oc.exactFromRange(e)).orThunk(function () {
        var t = Fe("\uFEFF");

        _o(e.start, t);

        var o = Rc(n, Oc.exact(t, 0, t, 1));
        return Do(t), o;
      });

      return t.bind(function (e) {
        return vc(e.left, e.top, e.width, e.height);
      });
    }),
        a = Pc(n, t).bind(function (e) {
      return He(e.start) ? B.some(e.start) : Ze(e.start);
    }).getOr(e.element);
    return yc(r, s, t, o, a);
  })];

  var Lc = "link-layout",
      Wc = function Wc(e) {
    return e.x + e.width;
  },
      Uc = function Uc(e, t) {
    return e.x - t.width;
  },
      jc = function jc(e, t) {
    return e.y - t.height + e.height;
  },
      Gc = function Gc(e) {
    return e.y;
  },
      $c = function $c(e, t, o) {
    return Ci(Wc(e), Gc(e), o.southeast(), _i(), "southeast", Vi(e, {
      left: 0,
      top: 2
    }), Lc);
  },
      qc = function qc(e, t, o) {
    return Ci(Uc(e, t), Gc(e), o.southwest(), Ti(), "southwest", Vi(e, {
      right: 1,
      top: 2
    }), Lc);
  },
      Xc = function Xc(e, t, o) {
    return Ci(Wc(e), jc(e, t), o.northeast(), Ei(), "northeast", Vi(e, {
      left: 0,
      bottom: 3
    }), Lc);
  },
      Kc = function Kc(e, t, o) {
    return Ci(Uc(e, t), jc(e, t), o.northwest(), Bi(), "northwest", Vi(e, {
      right: 1,
      bottom: 3
    }), Lc);
  },
      Yc = function Yc() {
    return [$c, qc, Xc, Kc];
  },
      Jc = function Jc() {
    return [qc, $c, Kc, Xc];
  };

  var Zc = [jn("item"), ac(), is("overrides", {}), wi("placement", function (e, t, o) {
    var n = Tl(o, t.item.element),
        s = ic(e.element, t, Yc(), Jc(), Yc(), Jc(), B.none());
    return B.some(ec({
      anchorBox: n,
      bubble: Ql(),
      overrides: t.overrides,
      layouts: s,
      placer: B.none()
    }));
  })],
      Qc = Nn("type", {
    selection: Nc,
    node: xc,
    hotspot: lc,
    submenu: Zc,
    makeshift: cc
  });

  var ed = [Zn("classes", En), us("mode", "all", ["all", "layout", "placement"])],
      td = [is("useFixed", _), Qn("getBounds")],
      od = [Gn("anchor", Qc), as("transition", ed)],
      nd = function nd(e, t, o, n, s, r, a) {
    return function (e, t, o, n, s, r, a, i) {
      var l = Kl(a, "maxHeightFunction", ql()),
          c = Kl(a, "maxWidthFunction", b),
          d = e.anchorBox,
          u = e.origin,
          m = {
        bounds: El(u, r),
        origin: u,
        preference: n,
        maxHeightFunction: l,
        maxWidthFunction: c,
        lastPlacement: s,
        transition: i
      };
      return Yl(d, t, o, m);
    }(function (e, t) {
      return function (e, t) {
        return {
          anchorBox: e,
          origin: t
        };
      }(e, t);
    }(o.anchorBox, t), s.element, o.bubble, o.layouts, r, n, o.overrides, a);
  },
      sd = function sd(e, t, o, n, s, r) {
    var a = r.map(Wo);
    return rd(e, t, o, n, s, a);
  },
      rd = function rd(e, t, o, n, s, r) {
    var a = Hn("placement.info", xn(od), s),
        i = a.anchor,
        l = n.element,
        c = o.get(n.uid);
    wl(function () {
      kt(l, "position", "fixed");
      var s = Et(l, "visibility");
      kt(l, "visibility", "hidden");
      var d = t.useFixed() ? function () {
        var e = document.documentElement;
        return Al(0, 0, e.clientWidth, e.clientHeight);
      }() : function (e) {
        var t = Nt(e.element),
            o = e.element.dom.getBoundingClientRect();
        return Ml(t.left, t.top, o.width, o.height);
      }(e),
          u = i.placement,
          m = r.map(y).or(t.getBounds);
      u(e, i, d).each(function (t) {
        var s = t.placer.getOr(nd)(e, d, t, m, n, c, a.transition);
        o.set(n.uid, s);
      }), s.fold(function () {
        At(l, "visibility");
      }, function (e) {
        kt(l, "visibility", e);
      }), Et(l, "left").isNone() && Et(l, "top").isNone() && Et(l, "right").isNone() && Et(l, "bottom").isNone() && xe(Et(l, "position"), "fixed") && At(l, "position");
    }, l);
  };

  var ad = Object.freeze({
    __proto__: null,
    position: function position(e, t, o, n, s) {
      sd(e, t, o, n, s, B.none());
    },
    positionWithin: sd,
    positionWithinBounds: rd,
    getMode: function getMode(e, t, o) {
      return t.useFixed() ? "fixed" : "absolute";
    },
    reset: function reset(e, t, o, n) {
      var s = n.element;
      N(["position", "left", "right", "top", "bottom"], function (e) {
        return At(s, e);
      }), function (e) {
        xt(e, Dl);
      }(s), o.clear(n.uid);
    }
  });

  var id = ul({
    fields: td,
    name: "positioning",
    active: fl,
    apis: ad,
    state: Object.freeze({
      __proto__: null,
      init: function init() {
        var e = {};
        return ga({
          readState: function readState() {
            return e;
          },
          clear: function clear(t) {
            g(t) ? delete e[t] : e = {};
          },
          set: function set(t, o) {
            e[t] = o;
          },
          get: function get(t) {
            return be(e, t);
          }
        });
      }
    })
  }),
      ld = function ld(e) {
    return e.getSystem().isConnected();
  },
      cd = function cd(e) {
    xr(e, ur());
    var t = e.components();
    N(t, cd);
  },
      dd = function dd(e) {
    var t = e.components();
    N(t, dd), xr(e, dr());
  },
      ud = function ud(e, t) {
    e.getSystem().addToWorld(t), ut(e.element) && dd(t);
  },
      md = function md(e) {
    cd(e), e.getSystem().removeFromWorld(e);
  },
      gd = function gd(e, t) {
    Bo(e.element, t.element);
  },
      pd = function pd(e, t) {
    hd(e, t, Bo);
  },
      hd = function hd(e, t, o) {
    e.getSystem().addToWorld(t), o(e.element, t.element), ut(e.element) && dd(t), e.syncComponents();
  },
      fd = function fd(e) {
    cd(e), Do(e.element), e.getSystem().removeFromWorld(e);
  },
      bd = function bd(e) {
    var t = Je(e.element).bind(function (t) {
      return e.getSystem().getByDom(t).toOptional();
    });
    fd(e), t.each(function (e) {
      e.syncComponents();
    });
  },
      vd = function vd(e) {
    var t = e.components();
    N(t, fd), Ao(e.element), e.syncComponents();
  },
      yd = function yd(e, t) {
    xd(e, t, Bo);
  },
      xd = function xd(e, t, o) {
    o(e, t.element);
    var n = et(t.element);
    N(n, function (e) {
      t.getByDom(e).each(dd);
    });
  },
      wd = function wd(e) {
    var t = et(e.element);
    N(t, function (t) {
      e.getByDom(t).each(cd);
    }), Do(e.element);
  },
      Sd = function Sd(e, t, o, n) {
    o.get().each(function (t) {
      vd(e);
    });
    var s = t.getAttachPoint(e);
    pd(s, e);
    var r = e.getSystem().build(n);
    return pd(e, r), o.set(r), r;
  },
      kd = function kd(e, t, o, n) {
    var s = Sd(e, t, o, n);
    return t.onOpen(e, s), s;
  },
      Cd = function Cd(e, t, o) {
    o.get().each(function (n) {
      vd(e), bd(e), t.onClose(e, n), o.clear();
    });
  },
      Od = function Od(e, t, o) {
    return o.isOpen();
  },
      _d = function _d(e, t, o) {
    var n = t.getAttachPoint(e);
    kt(e.element, "position", id.getMode(n)), function (e, t, o, n) {
      Et(e.element, t).fold(function () {
        xt(e.element, o);
      }, function (t) {
        ht(e.element, o, t);
      }), kt(e.element, t, "hidden");
    }(e, "visibility", t.cloakVisibilityAttr);
  },
      Td = function Td(e, t, o) {
    (function (e) {
      return V(["top", "left", "right", "bottom"], function (t) {
        return Et(e, t).isSome();
      });
    })(e.element) || At(e.element, "position"), function (e, t, o) {
      vt(e.element, o).fold(function () {
        return At(e.element, t);
      }, function (o) {
        return kt(e.element, t, o);
      });
    }(e, "visibility", t.cloakVisibilityAttr);
  };

  var Ed = Object.freeze({
    __proto__: null,
    cloak: _d,
    decloak: Td,
    open: kd,
    openWhileCloaked: function openWhileCloaked(e, t, o, n, s) {
      _d(e, t), kd(e, t, o, n), s(), Td(e, t);
    },
    close: Cd,
    isOpen: Od,
    isPartOf: function isPartOf(e, t, o, n) {
      return Od(0, 0, o) && o.get().exists(function (o) {
        return t.isPartOf(e, o, n);
      });
    },
    getState: function getState(e, t, o) {
      return o.get();
    },
    setContent: function setContent(e, t, o, n) {
      return o.get().map(function () {
        return Sd(e, t, o, n);
      });
    }
  }),
      Bd = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      return _r([Br(nr(), function (o, n) {
        Cd(o, e, t);
      })]);
    }
  }),
      Md = [bi("onOpen"), bi("onClose"), jn("isPartOf"), jn("getAttachPoint"), is("cloakVisibilityAttr", "data-precloak-visibility")],
      Ad = Object.freeze({
    __proto__: null,
    init: function init() {
      var e = Hl(),
          t = y("not-implemented");
      return ga({
        readState: t,
        isOpen: e.isSet,
        clear: e.clear,
        set: e.set,
        get: e.get
      });
    }
  });

  var Dd = ul({
    fields: Md,
    name: "sandboxing",
    active: Bd,
    apis: Ed,
    state: Ad
  }),
      Fd = y("dismiss.popups"),
      Id = y("reposition.popups"),
      Rd = y("mouse.released"),
      Vd = yn([is("isExtraPart", _), as("fireEventInstead", [is("event", mr())])]),
      zd = function zd(e) {
    var t = Hn("Dismissal", Vd, e);
    return _defineProperty({}, Fd(), {
      schema: yn([jn("target")]),
      onReceive: function onReceive(e, o) {
        Dd.isOpen(e) && (Dd.isPartOf(e, o.target) || t.isExtraPart(e, o.target) || t.fireEventInstead.fold(function () {
          return Dd.close(e);
        }, function (t) {
          return xr(e, t.event);
        }));
      }
    });
  },
      Hd = yn([as("fireEventInstead", [is("event", gr())]), Kn("doReposition")]),
      Pd = function Pd(e) {
    var t = Hn("Reposition", Hd, e);
    return _defineProperty({}, Id(), {
      onReceive: function onReceive(e) {
        Dd.isOpen(e) && t.fireEventInstead.fold(function () {
          return t.doReposition(e);
        }, function (t) {
          return xr(e, t.event);
        });
      }
    });
  },
      Nd = function Nd(e, t, o) {
    t.store.manager.onLoad(e, t, o);
  },
      Ld = function Ld(e, t, o) {
    t.store.manager.onUnload(e, t, o);
  };

  var Wd = Object.freeze({
    __proto__: null,
    onLoad: Nd,
    onUnload: Ld,
    setValue: function setValue(e, t, o, n) {
      t.store.manager.setValue(e, t, o, n);
    },
    getValue: function getValue(e, t, o) {
      return t.store.manager.getValue(e, t, o);
    },
    getState: function getState(e, t, o) {
      return o;
    }
  }),
      Ud = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      var o = e.resetOnDom ? [zr(function (o, n) {
        Nd(o, e, t);
      }), Hr(function (o, n) {
        Ld(o, e, t);
      })] : [al(e, t, Nd)];
      return _r(o);
    }
  });

  var jd = function jd() {
    var e = fs(null);
    return ga({
      set: e.set,
      get: e.get,
      isNotSet: function isNotSet() {
        return null === e.get();
      },
      clear: function clear() {
        e.set(null);
      },
      readState: function readState() {
        return {
          mode: "memory",
          value: e.get()
        };
      }
    });
  },
      Gd = function Gd() {
    var e = fs({}),
        t = fs({});
    return ga({
      readState: function readState() {
        return {
          mode: "dataset",
          dataByValue: e.get(),
          dataByText: t.get()
        };
      },
      lookup: function lookup(o) {
        return be(e.get(), o).orThunk(function () {
          return be(t.get(), o);
        });
      },
      update: function update(o) {
        var n = e.get(),
            s = t.get(),
            r = {},
            a = {};
        N(o, function (e) {
          r[e.value] = e, be(e, "meta").each(function (t) {
            be(t, "text").each(function (t) {
              a[t] = e;
            });
          });
        }), e.set(_objectSpread({}, n, {}, r)), t.set(_objectSpread({}, s, {}, a));
      },
      clear: function clear() {
        e.set({}), t.set({});
      }
    });
  };

  var $d = Object.freeze({
    __proto__: null,
    memory: jd,
    dataset: Gd,
    manual: function manual() {
      return ga({
        readState: b
      });
    },
    init: function init(e) {
      return e.store.manager.state(e);
    }
  });

  var qd = function qd(e, t, o, n) {
    var s = t.store;
    o.update([n]), s.setValue(e, n), t.onSetValue(e, n);
  };

  var Xd = [Qn("initialValue"), jn("getFallbackEntry"), jn("getDataKey"), jn("setValue"), wi("manager", {
    setValue: qd,
    getValue: function getValue(e, t, o) {
      var n = t.store,
          s = n.getDataKey(e);
      return o.lookup(s).getOrThunk(function () {
        return n.getFallbackEntry(s);
      });
    },
    onLoad: function onLoad(e, t, o) {
      t.store.initialValue.each(function (n) {
        qd(e, t, o, n);
      });
    },
    onUnload: function onUnload(e, t, o) {
      o.clear();
    },
    state: Gd
  })],
      Kd = [jn("getValue"), is("setValue", b), Qn("initialValue"), wi("manager", {
    setValue: function setValue(e, t, o, n) {
      t.store.setValue(e, n), t.onSetValue(e, n);
    },
    getValue: function getValue(e, t, o) {
      return t.store.getValue(e);
    },
    onLoad: function onLoad(e, t, o) {
      t.store.initialValue.each(function (o) {
        t.store.setValue(e, o);
      });
    },
    onUnload: b,
    state: ma.init
  })],
      Yd = [Qn("initialValue"), wi("manager", {
    setValue: function setValue(e, t, o, n) {
      o.set(n), t.onSetValue(e, n);
    },
    getValue: function getValue(e, t, o) {
      return o.get();
    },
    onLoad: function onLoad(e, t, o) {
      t.store.initialValue.each(function (e) {
        o.isNotSet() && o.set(e);
      });
    },
    onUnload: function onUnload(e, t, o) {
      o.clear();
    },
    state: jd
  })],
      Jd = [ls("store", {
    mode: "memory"
  }, Nn("mode", {
    memory: Yd,
    manual: Kd,
    dataset: Xd
  })), bi("onSetValue"), is("resetOnDom", !1)];

  var Zd = ul({
    fields: Jd,
    name: "representing",
    active: Ud,
    apis: Wd,
    extra: {
      setValueFrom: function setValueFrom(e, t) {
        var o = Zd.getValue(t);
        Zd.setValue(e, o);
      }
    },
    state: $d
  }),
      Qd = function Qd(e, t) {
    return hs(e, {}, P(t, function (t) {
      return o = t.name(), n = "Cannot configure " + t.name() + " for " + e, Ln(o, o, {
        tag: "option",
        process: {}
      }, gn(function (e) {
        return Qo("The field: " + o + " is forbidden. " + n);
      }));
      var o, n;
    }).concat([Wn("dump", x)]));
  },
      eu = function eu(e) {
    return e.dump;
  },
      tu = function tu(e, t) {
    return _objectSpread({}, cl(t), {}, e.dump);
  },
      ou = Qd,
      nu = tu,
      su = "placeholder",
      ru = bs([{
    single: ["required", "valueThunk"]
  }, {
    multiple: ["required", "valueThunks"]
  }]),
      au = function au(e) {
    return ve(e, "uiType");
  },
      iu = function iu(e, t, o, n) {
    return function (e, t, o, n) {
      return au(o) && o.uiType === su ? function (e, t, o, n) {
        return e.exists(function (e) {
          return e !== o.owner;
        }) ? ru.single(!0, y(o)) : be(n, o.name).fold(function () {
          throw new Error("Unknown placeholder component: " + o.name + "\nKnown: [" + ae(n) + "]\nNamespace: " + e.getOr("none") + "\nSpec: " + JSON.stringify(o, null, 2));
        }, function (e) {
          return e.replace();
        });
      }(e, 0, o, n) : ru.single(!1, y(o));
    }(e, 0, o, n).fold(function (s, r) {
      var a = au(o) ? r(t, o.config, o.validated) : r(t),
          i = be(a, "components").getOr([]),
          l = X(i, function (o) {
        return iu(e, t, o, n);
      });
      return [_objectSpread({}, a, {
        components: l
      })];
    }, function (e, n) {
      if (au(o)) {
        var _e9 = n(t, o.config, o.validated);

        return o.validated.preprocess.getOr(x)(_e9);
      }

      return n(t);
    });
  },
      lu = ru.single,
      cu = ru.multiple,
      du = y(su),
      uu = bs([{
    required: ["data"]
  }, {
    external: ["data"]
  }, {
    optional: ["data"]
  }, {
    group: ["data"]
  }]),
      mu = is("factory", {
    sketch: x
  }),
      gu = is("schema", []),
      pu = jn("name"),
      hu = Ln("pname", "pname", an(function (e) {
    return "<alloy." + Kr(e.name) + ">";
  }), On()),
      fu = Wn("schema", function () {
    return [Qn("preprocess")];
  }),
      bu = is("defaults", y({})),
      vu = is("overrides", y({})),
      yu = xn([mu, gu, pu, hu, bu, vu]),
      xu = xn([mu, gu, pu, bu, vu]),
      wu = xn([mu, gu, pu, hu, bu, vu]),
      Su = xn([mu, fu, pu, jn("unit"), hu, bu, vu]),
      ku = function ku(e) {
    return e.fold(B.some, B.none, B.some, B.some);
  },
      Cu = function Cu(e) {
    var t = function t(e) {
      return e.name;
    };

    return e.fold(t, t, t, t);
  },
      Ou = function Ou(e, t) {
    return function (o) {
      var n = Hn("Converting part type", t, o);
      return e(n);
    };
  },
      _u = Ou(uu.required, yu),
      Tu = Ou(uu.external, xu),
      Eu = Ou(uu.optional, wu),
      Bu = Ou(uu.group, Su),
      Mu = y("entirety");

  var Au = Object.freeze({
    __proto__: null,
    required: _u,
    external: Tu,
    optional: Eu,
    group: Bu,
    asNamedPart: ku,
    name: Cu,
    asCommon: function asCommon(e) {
      return e.fold(x, x, x, x);
    },
    original: Mu
  });

  var Du = function Du(e, t, o, n) {
    return sn(t.defaults(e, o, n), o, {
      uid: e.partUids[t.name]
    }, t.overrides(e, o, n));
  },
      Fu = function Fu(e, t) {
    var o = {};
    return N(t, function (t) {
      ku(t).each(function (t) {
        var n = Iu(e, t.pname);

        o[t.name] = function (o) {
          var s = Hn("Part: " + t.name + " in " + e, xn(t.schema), o);
          return _objectSpread({}, n, {
            config: o,
            validated: s
          });
        };
      });
    }), o;
  },
      Iu = function Iu(e, t) {
    return {
      uiType: du(),
      owner: e,
      name: t
    };
  },
      Ru = function Ru(e, t, o) {
    return {
      uiType: du(),
      owner: e,
      name: t,
      config: o,
      validated: {}
    };
  },
      Vu = function Vu(e) {
    return X(e, function (e) {
      return e.fold(B.none, B.some, B.none, B.none).map(function (e) {
        return Yn(e.name, e.schema.concat([Si(Mu())]));
      }).toArray();
    });
  },
      zu = function zu(e) {
    return P(e, Cu);
  },
      Hu = function Hu(e, t, o) {
    return function (e, t, o) {
      var n = {},
          s = {};
      return N(o, function (e) {
        e.fold(function (e) {
          n[e.pname] = lu(!0, function (t, o, n) {
            return e.factory.sketch(Du(t, e, o, n));
          });
        }, function (e) {
          var o = t.parts[e.name];
          s[e.name] = y(e.factory.sketch(Du(t, e, o[Mu()]), o));
        }, function (e) {
          n[e.pname] = lu(!1, function (t, o, n) {
            return e.factory.sketch(Du(t, e, o, n));
          });
        }, function (e) {
          n[e.pname] = cu(!0, function (t, o, n) {
            var s = t[e.name];
            return P(s, function (o) {
              return e.factory.sketch(sn(e.defaults(t, o, n), o, e.overrides(t, o)));
            });
          });
        });
      }), {
        internals: y(n),
        externals: y(s)
      };
    }(0, t, o);
  },
      Pu = function Pu(e, t, o) {
    return function (e, t, o, n) {
      var s = ce(n, function (e, t) {
        return function (e, t) {
          var o = !1;
          return {
            name: y(e),
            required: function required() {
              return t.fold(function (e, t) {
                return e;
              }, function (e, t) {
                return e;
              });
            },
            used: function used() {
              return o;
            },
            replace: function replace() {
              if (o) throw new Error("Trying to use the same placeholder more than once: " + e);
              return o = !0, t;
            }
          };
        }(t, e);
      }),
          r = function (e, t, o, n) {
        return X(o, function (o) {
          return iu(e, t, o, n);
        });
      }(e, t, o, s);

      return le(s, function (o) {
        if (!1 === o.used() && o.required()) throw new Error("Placeholder: " + o.name() + " was not found in components list\nNamespace: " + e.getOr("none") + "\nComponents: " + JSON.stringify(t.components, null, 2));
      }), r;
    }(B.some(e), t, t.components, o);
  },
      Nu = function Nu(e, t, o) {
    var n = t.partUids[o];
    return e.getSystem().getByUid(n).toOptional();
  },
      Lu = function Lu(e, t, o) {
    return Nu(e, t, o).getOrDie("Could not find part: " + o);
  },
      Wu = function Wu(e, t, o) {
    var n = {},
        s = t.partUids,
        r = e.getSystem();
    return N(o, function (e) {
      n[e] = y(r.getByUid(s[e]));
    }), n;
  },
      Uu = function Uu(e, t) {
    var o = e.getSystem();
    return ce(t.partUids, function (e, t) {
      return y(o.getByUid(e));
    });
  },
      ju = function ju(e) {
    return ae(e.partUids);
  },
      Gu = function Gu(e, t, o) {
    var n = {},
        s = t.partUids,
        r = e.getSystem();
    return N(o, function (e) {
      n[e] = y(r.getByUid(s[e]).getOrDie());
    }), n;
  },
      $u = function $u(e, t) {
    var o = zu(t);
    return ys(P(o, function (t) {
      return {
        key: t,
        value: e + "-" + t
      };
    }));
  },
      qu = function qu(e) {
    return Ln("partUids", "partUids", cn(function (t) {
      return $u(t.uid, e);
    }), On());
  };

  var Xu = Object.freeze({
    __proto__: null,
    generate: Fu,
    generateOne: Ru,
    schemas: Vu,
    names: zu,
    substitutes: Hu,
    components: Pu,
    defaultUids: $u,
    defaultUidsSchema: qu,
    getAllParts: Uu,
    getAllPartNames: ju,
    getPart: Nu,
    getPartOrDie: Lu,
    getParts: Wu,
    getPartsOrDie: Gu
  });

  var Ku = function Ku(e, t, o, n, s) {
    var r = function (e, t) {
      return (e.length > 0 ? [Yn("parts", e)] : []).concat([jn("uid"), is("dom", {}), is("components", []), Si("originalSpec"), is("debug.sketcher", {})]).concat(t);
    }(n, s);

    return Hn(e + " [SpecSchema]", yn(r.concat(t)), o);
  },
      Yu = function Yu(e, t, o, n, s) {
    var r = Ju(s),
        a = Vu(o),
        i = qu(o),
        l = Ku(e, t, r, a, [i]),
        c = Hu(0, l, o);
    return n(l, Pu(e, l, c.internals()), r, c.externals());
  },
      Ju = function Ju(e) {
    return function (e) {
      return ve(e, "uid");
    }(e) ? e : _objectSpread({}, e, {
      uid: oa("uid")
    });
  },
      Zu = yn([jn("name"), jn("factory"), jn("configFields"), is("apis", {}), is("extraApis", {})]),
      Qu = yn([jn("name"), jn("factory"), jn("configFields"), jn("partFields"), is("apis", {}), is("extraApis", {})]),
      em = function em(e) {
    var t = Hn("Sketcher for " + e.name, Zu, e),
        o = ce(t.apis, ua),
        n = ce(t.extraApis, function (e, t) {
      return ia(e, t);
    });
    return _objectSpread({
      name: t.name,
      configFields: t.configFields,
      sketch: function sketch(e) {
        return function (e, t, o, n) {
          var s = Ju(n);
          return o(Ku(e, t, s, [], []), s);
        }(t.name, t.configFields, t.factory, e);
      }
    }, o, {}, n);
  },
      tm = function tm(e) {
    var t = Hn("Sketcher for " + e.name, Qu, e),
        o = Fu(t.name, t.partFields),
        n = ce(t.apis, ua),
        s = ce(t.extraApis, function (e, t) {
      return ia(e, t);
    });
    return _objectSpread({
      name: t.name,
      partFields: t.partFields,
      configFields: t.configFields,
      sketch: function sketch(e) {
        return Yu(t.name, t.configFields, t.partFields, t.factory, e);
      },
      parts: o
    }, n, {}, s);
  },
      om = function om(e) {
    return We("input")(e) && "radio" !== bt(e, "type") || We("textarea")(e);
  };

  var nm = Object.freeze({
    __proto__: null,
    getCurrent: function getCurrent(e, t, o) {
      return t.find(e);
    }
  });

  var sm = [jn("find")],
      rm = ul({
    fields: sm,
    name: "composing",
    apis: nm
  }),
      am = ["input", "button", "textarea", "select"],
      im = function im(e, t, o) {
    (t.disabled() ? gm : pm)(e, t);
  },
      lm = function lm(e, t) {
    return !0 === t.useNative && R(am, Ve(e.element));
  },
      cm = function cm(e) {
    ht(e.element, "disabled", "disabled");
  },
      dm = function dm(e) {
    xt(e.element, "disabled");
  },
      um = function um(e) {
    ht(e.element, "aria-disabled", "true");
  },
      mm = function mm(e) {
    ht(e.element, "aria-disabled", "false");
  },
      gm = function gm(e, t, o) {
    t.disableClass.each(function (t) {
      Ta(e.element, t);
    }), (lm(e, t) ? cm : um)(e), t.onDisabled(e);
  },
      pm = function pm(e, t, o) {
    t.disableClass.each(function (t) {
      Ea(e.element, t);
    }), (lm(e, t) ? dm : mm)(e), t.onEnabled(e);
  },
      hm = function hm(e, t) {
    return lm(e, t) ? function (e) {
      return yt(e.element, "disabled");
    }(e) : function (e) {
      return "true" === bt(e.element, "aria-disabled");
    }(e);
  };

  var fm = Object.freeze({
    __proto__: null,
    enable: pm,
    disable: gm,
    isDisabled: hm,
    onLoad: im,
    set: function set(e, t, o, n) {
      (n ? gm : pm)(e, t);
    }
  }),
      bm = Object.freeze({
    __proto__: null,
    exhibit: function exhibit(e, t) {
      return ha({
        classes: t.disabled() ? t.disableClass.toArray() : []
      });
    },
    events: function events(e, t) {
      return _r([Tr(Qs(), function (t, o) {
        return hm(t, e);
      }), al(e, t, im)]);
    }
  }),
      vm = [gs("disabled", _), is("useNative", !0), Qn("disableClass"), bi("onDisabled"), bi("onEnabled")];

  var ym = ul({
    fields: vm,
    name: "disabling",
    active: bm,
    apis: fm
  }),
      xm = function xm(e, t, o, n) {
    var s = Dc(e.element, "." + t.highlightClass);
    N(s, function (o) {
      V(n, function (e) {
        return e.element === o;
      }) || (Ea(o, t.highlightClass), e.getSystem().getByDom(o).each(function (o) {
        t.onDehighlight(e, o), xr(o, yr());
      }));
    });
  },
      wm = function wm(e, t, o, n) {
    xm(e, t, 0, [n]), Sm(e, t, o, n) || (Ta(n.element, t.highlightClass), t.onHighlight(e, n), xr(n, vr()));
  },
      Sm = function Sm(e, t, o, n) {
    return Ba(n.element, t.highlightClass);
  },
      km = function km(e, t, o) {
    return ei(e.element, "." + t.itemClass).bind(function (t) {
      return e.getSystem().getByDom(t).toOptional();
    });
  },
      Cm = function Cm(e, t, o) {
    var n = Dc(e.element, "." + t.itemClass);
    return (n.length > 0 ? B.some(n[n.length - 1]) : B.none()).bind(function (t) {
      return e.getSystem().getByDom(t).toOptional();
    });
  },
      Om = function Om(e, t, o, n) {
    var s = Dc(e.element, "." + t.itemClass);
    return $(s, function (e) {
      return Ba(e, t.highlightClass);
    }).bind(function (t) {
      var o = Ii(t, n, 0, s.length - 1);
      return e.getSystem().getByDom(s[o]).toOptional();
    });
  },
      _m = function _m(e, t, o) {
    var n = Dc(e.element, "." + t.itemClass);
    return we(P(n, function (t) {
      return e.getSystem().getByDom(t).toOptional();
    }));
  };

  var Tm = Object.freeze({
    __proto__: null,
    dehighlightAll: function dehighlightAll(e, t, o) {
      return xm(e, t, 0, []);
    },
    dehighlight: function dehighlight(e, t, o, n) {
      Sm(e, t, o, n) && (Ea(n.element, t.highlightClass), t.onDehighlight(e, n), xr(n, yr()));
    },
    highlight: wm,
    highlightFirst: function highlightFirst(e, t, o) {
      km(e, t).each(function (n) {
        wm(e, t, o, n);
      });
    },
    highlightLast: function highlightLast(e, t, o) {
      Cm(e, t).each(function (n) {
        wm(e, t, o, n);
      });
    },
    highlightAt: function highlightAt(e, t, o, n) {
      (function (e, t, o, n) {
        var s = Dc(e.element, "." + t.itemClass);
        return B.from(s[n]).fold(function () {
          return qo.error(new Error("No element found with index " + n));
        }, e.getSystem().getByDom);
      })(e, t, 0, n).fold(function (e) {
        throw e;
      }, function (n) {
        wm(e, t, o, n);
      });
    },
    highlightBy: function highlightBy(e, t, o, n) {
      var s = _m(e, t);

      G(s, n).each(function (n) {
        wm(e, t, o, n);
      });
    },
    isHighlighted: Sm,
    getHighlighted: function getHighlighted(e, t, o) {
      return ei(e.element, "." + t.highlightClass).bind(function (t) {
        return e.getSystem().getByDom(t).toOptional();
      });
    },
    getFirst: km,
    getLast: Cm,
    getPrevious: function getPrevious(e, t, o) {
      return Om(e, t, 0, -1);
    },
    getNext: function getNext(e, t, o) {
      return Om(e, t, 0, 1);
    },
    getCandidates: _m
  }),
      Em = [jn("highlightClass"), jn("itemClass"), bi("onHighlight"), bi("onDehighlight")];

  var Bm = ul({
    fields: Em,
    name: "highlighting",
    apis: Tm
  }),
      Mm = [8],
      Am = [9],
      Dm = [13],
      Fm = [27],
      Im = [32],
      Rm = [37],
      Vm = [38],
      zm = [39],
      Hm = [40],
      Pm = function Pm(e, t, o) {
    var n = Y(e.slice(0, t)),
        s = Y(e.slice(t + 1));
    return G(n.concat(s), o);
  },
      Nm = function Nm(e, t, o) {
    var n = Y(e.slice(0, t));
    return G(n, o);
  },
      Lm = function Lm(e, t, o) {
    var n = e.slice(0, t),
        s = e.slice(t + 1);
    return G(s.concat(n), o);
  },
      Wm = function Wm(e, t, o) {
    var n = e.slice(t + 1);
    return G(n, o);
  },
      Um = function Um(e) {
    return function (t) {
      var o = t.raw;
      return R(e, o.which);
    };
  },
      jm = function jm(e) {
    return function (t) {
      return K(e, function (e) {
        return e(t);
      });
    };
  },
      Gm = function Gm(e) {
    return !0 === e.raw.shiftKey;
  },
      $m = function $m(e) {
    return !0 === e.raw.ctrlKey;
  },
      qm = k(Gm),
      Xm = function Xm(e, t) {
    return {
      matches: e,
      classification: t
    };
  },
      Km = function Km(e, t, o) {
    t.exists(function (e) {
      return o.exists(function (t) {
        return Ge(t, e);
      });
    }) || wr(e, pr(), {
      prevFocus: t,
      newFocus: o
    });
  },
      Ym = function Ym() {
    var e = function e(_e10) {
      return xl(_e10.element);
    };

    return {
      get: e,
      set: function set(t, o) {
        var n = e(t);
        t.getSystem().triggerFocus(o, t.element);
        var s = e(t);
        Km(t, n, s);
      }
    };
  },
      Jm = function Jm() {
    var e = function e(_e11) {
      return Bm.getHighlighted(_e11).map(function (e) {
        return e.element;
      });
    };

    return {
      get: e,
      set: function set(t, o) {
        var n = e(t);
        t.getSystem().getByDom(o).fold(b, function (e) {
          Bm.highlight(t, e);
        });
        var s = e(t);
        Km(t, n, s);
      }
    };
  };

  var Zm;
  !function (e) {
    e.OnFocusMode = "onFocus", e.OnEnterOrSpaceMode = "onEnterOrSpace", e.OnApiMode = "onApi";
  }(Zm || (Zm = {}));

  var Qm = function Qm(e, t, o, n, s) {
    var r = function r(e, t, o, n, s) {
      return (r = o(e, t, n, s), a = t.event, G(r, function (e) {
        return e.matches(a);
      }).map(function (e) {
        return e.classification;
      })).bind(function (o) {
        return o(e, t, n, s);
      });
      var r, a;
    },
        a = {
      schema: function schema() {
        return e.concat([is("focusManager", Ym()), ls("focusInside", "onFocus", In(function (e) {
          return R(["onFocus", "onEnterOrSpace", "onApi"], e) ? qo.value(e) : qo.error("Invalid value for focusInside");
        })), wi("handler", a), wi("state", t), wi("sendFocusIn", s)]);
      },
      processKey: r,
      toEvents: function toEvents(e, t) {
        var a = e.focusInside !== Zm.OnFocusMode ? B.none() : s(e).map(function (o) {
          return Br(Ks(), function (n, s) {
            o(n, e, t), s.stop();
          });
        }),
            i = [Br(Hs(), function (n, a) {
          r(n, a, o, e, t).fold(function () {
            (function (o, n) {
              var r = Um(Im.concat(Dm))(n.event);
              e.focusInside === Zm.OnEnterOrSpaceMode && r && ks(o, n) && s(e).each(function (s) {
                s(o, e, t), n.stop();
              });
            })(n, a);
          }, function (e) {
            a.stop();
          });
        }), Br(Ps(), function (o, s) {
          r(o, s, n, e, t).each(function (e) {
            s.stop();
          });
        })];
        return _r(a.toArray().concat(i));
      }
    };

    return a;
  },
      eg = function eg(e) {
    var t = [Qn("onEscape"), Qn("onEnter"), is("selector", '[data-alloy-tabstop="true"]:not(:disabled)'), is("firstTabstop", 0), is("useTabstopAt", T), Qn("visibilitySelector")].concat([e]),
        o = function o(e, t) {
      var o = e.visibilitySelector.bind(function (e) {
        return ti(t, e);
      }).getOr(t);
      return Rt(o) > 0;
    },
        n = function n(e, t, _n24) {
      (function (e, t) {
        var n = Dc(e.element, t.selector),
            s = W(n, function (e) {
          return o(t, e);
        });
        return B.from(s[t.firstTabstop]);
      })(e, t).each(function (o) {
        t.focusManager.set(e, o);
      });
    },
        s = function s(e, t, n, _s19) {
      var r = Dc(e.element, n.selector);
      return function (e, t) {
        return t.focusManager.get(e).bind(function (e) {
          return ti(e, t.selector);
        });
      }(e, n).bind(function (t) {
        return $(r, S(Ge, t)).bind(function (t) {
          return function (e, t, n, s, r) {
            return r(t, n, function (e) {
              return function (e, t) {
                return o(e, t) && e.useTabstopAt(t);
              }(s, e);
            }).fold(function () {
              return s.cyclic ? B.some(!0) : B.none();
            }, function (t) {
              return s.focusManager.set(e, t), B.some(!0);
            });
          }(e, r, t, n, _s19);
        });
      });
    },
        r = y([Xm(jm([Gm, Um(Am)]), function (e, t, o) {
      var n = o.cyclic ? Pm : Nm;
      return s(e, 0, o, n);
    }), Xm(Um(Am), function (e, t, o) {
      var n = o.cyclic ? Lm : Wm;
      return s(e, 0, o, n);
    }), Xm(jm([qm, Um(Dm)]), function (e, t, o) {
      return o.onEnter.bind(function (o) {
        return o(e, t);
      });
    })]),
        a = y([Xm(Um(Fm), function (e, t, o) {
      return o.onEscape.bind(function (o) {
        return o(e, t);
      });
    })]);

    return Qm(t, ma.init, r, a, function () {
      return B.some(n);
    });
  };

  var tg = eg(Wn("cyclic", _)),
      og = eg(Wn("cyclic", T));

  var ng = function ng(e, t, o) {
    return om(o) && Um(Im)(t.event) ? B.none() : function (e, t, o) {
      return kr(e, o, Qs()), B.some(!0);
    }(e, 0, o);
  },
      sg = function sg(e, t) {
    return B.some(!0);
  },
      rg = [is("execute", ng), is("useSpace", !1), is("useEnter", !0), is("useControlEnter", !1), is("useDown", !1)],
      ag = function ag(e, t, o) {
    return o.execute(e, t, e.element);
  };

  var ig = Qm(rg, ma.init, function (e, t, o, n) {
    var s = o.useSpace && !om(e.element) ? Im : [],
        r = o.useEnter ? Dm : [],
        a = o.useDown ? Hm : [],
        i = s.concat(r).concat(a);
    return [Xm(Um(i), ag)].concat(o.useControlEnter ? [Xm(jm([$m, Um(Dm)]), ag)] : []);
  }, function (e, t, o, n) {
    return o.useSpace && !om(e.element) ? [Xm(Um(Im), sg)] : [];
  }, function () {
    return B.none();
  });

  var lg = function lg() {
    var e = Hl();
    return ga({
      readState: function readState() {
        return e.get().map(function (e) {
          return {
            numRows: String(e.numRows),
            numColumns: String(e.numColumns)
          };
        }).getOr({
          numRows: "?",
          numColumns: "?"
        });
      },
      setGridSize: function setGridSize(t, o) {
        e.set({
          numRows: t,
          numColumns: o
        });
      },
      getNumRows: function getNumRows() {
        return e.get().map(function (e) {
          return e.numRows;
        });
      },
      getNumColumns: function getNumColumns() {
        return e.get().map(function (e) {
          return e.numColumns;
        });
      }
    });
  };

  var cg = Object.freeze({
    __proto__: null,
    flatgrid: lg,
    init: function init(e) {
      return e.state(e);
    }
  });

  var dg = function dg(e) {
    return function (t, o, n, s) {
      var r = e(t.element);
      return pg(r, t, o, n, s);
    };
  },
      ug = function ug(e, t) {
    var o = tc(e, t);
    return dg(o);
  },
      mg = function mg(e, t) {
    var o = tc(t, e);
    return dg(o);
  },
      gg = function gg(e) {
    return function (t, o, n, s) {
      return pg(e, t, o, n, s);
    };
  },
      pg = function pg(e, t, o, n, s) {
    return n.focusManager.get(t).bind(function (o) {
      return e(t.element, o, n, s);
    }).map(function (e) {
      return n.focusManager.set(t, e), !0;
    });
  },
      hg = gg,
      fg = gg,
      bg = gg,
      vg = function vg(e) {
    return !function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }(e.dom);
  },
      yg = function yg(e, t, o) {
    var n = Dc(e, o);
    return function (e, o) {
      return $(e, function (e) {
        return Ge(e, t);
      }).map(function (t) {
        return {
          index: t,
          candidates: e
        };
      });
    }(W(n, vg));
  },
      xg = function xg(e, t) {
    return $(e, function (e) {
      return Ge(t, e);
    });
  },
      wg = function wg(e, t, o, n) {
    return n(Math.floor(t / o), t % o).bind(function (t) {
      var n = t.row * o + t.column;
      return n >= 0 && n < e.length ? B.some(e[n]) : B.none();
    });
  },
      Sg = function Sg(e, t, o, n, s) {
    return wg(e, t, n, function (t, r) {
      var a = t === o - 1 ? e.length - t * n : n,
          i = Ii(r, s, 0, a - 1);
      return B.some({
        row: t,
        column: i
      });
    });
  },
      kg = function kg(e, t, o, n, s) {
    return wg(e, t, n, function (t, r) {
      var a = Ii(t, s, 0, o - 1),
          i = a === o - 1 ? e.length - a * n : n,
          l = Ri(r, 0, i - 1);
      return B.some({
        row: a,
        column: l
      });
    });
  },
      Cg = [jn("selector"), is("execute", ng), vi("onEscape"), is("captureTab", !1), ki()],
      Og = function Og(e, t, o) {
    ei(e.element, t.selector).each(function (o) {
      t.focusManager.set(e, o);
    });
  },
      _g = function _g(e) {
    return function (t, o, n, s) {
      return yg(t, o, n.selector).bind(function (t) {
        return e(t.candidates, t.index, s.getNumRows().getOr(n.initSize.numRows), s.getNumColumns().getOr(n.initSize.numColumns));
      });
    };
  },
      Tg = function Tg(e, t, o) {
    return o.captureTab ? B.some(!0) : B.none();
  },
      Eg = _g(function (e, t, o, n) {
    return Sg(e, t, o, n, -1);
  }),
      Bg = _g(function (e, t, o, n) {
    return Sg(e, t, o, n, 1);
  }),
      Mg = _g(function (e, t, o, n) {
    return kg(e, t, o, n, -1);
  }),
      Ag = _g(function (e, t, o, n) {
    return kg(e, t, o, n, 1);
  }),
      Dg = y([Xm(Um(Rm), ug(Eg, Bg)), Xm(Um(zm), mg(Eg, Bg)), Xm(Um(Vm), hg(Mg)), Xm(Um(Hm), fg(Ag)), Xm(jm([Gm, Um(Am)]), Tg), Xm(jm([qm, Um(Am)]), Tg), Xm(Um(Im.concat(Dm)), function (e, t, o, n) {
    return function (e, t) {
      return t.focusManager.get(e).bind(function (e) {
        return ti(e, t.selector);
      });
    }(e, o).bind(function (n) {
      return o.execute(e, t, n);
    });
  })]),
      Fg = y([Xm(Um(Fm), function (e, t, o) {
    return o.onEscape(e, t);
  }), Xm(Um(Im), sg)]);

  var Ig = Qm(Cg, lg, Dg, Fg, function () {
    return B.some(Og);
  });

  var Rg = function Rg(e, t, o, n) {
    var s = function s(e, t, o) {
      var r = Ii(t, n, 0, o.length - 1);
      return r === e ? B.none() : (a = o[r], "button" === Ve(a) && "disabled" === bt(a, "disabled") ? s(e, r, o) : B.from(o[r]));
      var a;
    };

    return yg(e, o, t).bind(function (e) {
      var t = e.index,
          o = e.candidates;
      return s(t, t, o);
    });
  },
      Vg = [jn("selector"), is("getInitial", B.none), is("execute", ng), vi("onEscape"), is("executeOnMove", !1), is("allowVertical", !0)],
      zg = function zg(e, t, o) {
    return function (e, t) {
      return t.focusManager.get(e).bind(function (e) {
        return ti(e, t.selector);
      });
    }(e, o).bind(function (n) {
      return o.execute(e, t, n);
    });
  },
      Hg = function Hg(e, t, o) {
    t.getInitial(e).orThunk(function () {
      return ei(e.element, t.selector);
    }).each(function (o) {
      t.focusManager.set(e, o);
    });
  },
      Pg = function Pg(e, t, o) {
    return Rg(e, o.selector, t, -1);
  },
      Ng = function Ng(e, t, o) {
    return Rg(e, o.selector, t, 1);
  },
      Lg = function Lg(e) {
    return function (t, o, n, s) {
      return e(t, o, n, s).bind(function () {
        return n.executeOnMove ? zg(t, o, n) : B.some(!0);
      });
    };
  },
      Wg = y([Xm(Um(Im), sg), Xm(Um(Fm), function (e, t, o) {
    return o.onEscape(e, t);
  })]);

  var Ug = Qm(Vg, ma.init, function (e, t, o, n) {
    var s = Rm.concat(o.allowVertical ? Vm : []),
        r = zm.concat(o.allowVertical ? Hm : []);
    return [Xm(Um(s), Lg(ug(Pg, Ng))), Xm(Um(r), Lg(mg(Pg, Ng))), Xm(Um(Dm), zg), Xm(Um(Im), zg)];
  }, Wg, function () {
    return B.some(Hg);
  });

  var jg = function jg(e, t, o) {
    return B.from(e[t]).bind(function (e) {
      return B.from(e[o]).map(function (e) {
        return {
          rowIndex: t,
          columnIndex: o,
          cell: e
        };
      });
    });
  },
      Gg = function Gg(e, t, o, n) {
    var s = e[t].length,
        r = Ii(o, n, 0, s - 1);
    return jg(e, t, r);
  },
      $g = function $g(e, t, o, n) {
    var s = Ii(o, n, 0, e.length - 1),
        r = e[s].length,
        a = Ri(t, 0, r - 1);
    return jg(e, s, a);
  },
      qg = function qg(e, t, o, n) {
    var s = e[t].length,
        r = Ri(o + n, 0, s - 1);
    return jg(e, t, r);
  },
      Xg = function Xg(e, t, o, n) {
    var s = Ri(o + n, 0, e.length - 1),
        r = e[s].length,
        a = Ri(t, 0, r - 1);
    return jg(e, s, a);
  },
      Kg = [Yn("selectors", [jn("row"), jn("cell")]), is("cycles", !0), is("previousSelector", B.none), is("execute", ng)],
      Yg = function Yg(e, t, o) {
    t.previousSelector(e).orThunk(function () {
      var o = t.selectors;
      return ei(e.element, o.cell);
    }).each(function (o) {
      t.focusManager.set(e, o);
    });
  },
      Jg = function Jg(e, t) {
    return function (o, n, s) {
      var r = s.cycles ? e : t;
      return ti(n, s.selectors.row).bind(function (e) {
        var t = Dc(e, s.selectors.cell);
        return xg(t, n).bind(function (t) {
          var n = Dc(o, s.selectors.row);
          return xg(n, e).bind(function (e) {
            var o = function (e, t) {
              return P(e, function (e) {
                return Dc(e, t.selectors.cell);
              });
            }(n, s);

            return r(o, e, t).map(function (e) {
              return e.cell;
            });
          });
        });
      });
    };
  },
      Zg = Jg(function (e, t, o) {
    return Gg(e, t, o, -1);
  }, function (e, t, o) {
    return qg(e, t, o, -1);
  }),
      Qg = Jg(function (e, t, o) {
    return Gg(e, t, o, 1);
  }, function (e, t, o) {
    return qg(e, t, o, 1);
  }),
      ep = Jg(function (e, t, o) {
    return $g(e, o, t, -1);
  }, function (e, t, o) {
    return Xg(e, o, t, -1);
  }),
      tp = Jg(function (e, t, o) {
    return $g(e, o, t, 1);
  }, function (e, t, o) {
    return Xg(e, o, t, 1);
  }),
      op = y([Xm(Um(Rm), ug(Zg, Qg)), Xm(Um(zm), mg(Zg, Qg)), Xm(Um(Vm), hg(ep)), Xm(Um(Hm), fg(tp)), Xm(Um(Im.concat(Dm)), function (e, t, o) {
    return xl(e.element).bind(function (n) {
      return o.execute(e, t, n);
    });
  })]),
      np = y([Xm(Um(Im), sg)]);

  var sp = Qm(Kg, ma.init, op, np, function () {
    return B.some(Yg);
  });

  var rp = [jn("selector"), is("execute", ng), is("moveOnTab", !1)],
      ap = function ap(e, t, o) {
    return o.focusManager.get(e).bind(function (n) {
      return o.execute(e, t, n);
    });
  },
      ip = function ip(e, t, o) {
    ei(e.element, t.selector).each(function (o) {
      t.focusManager.set(e, o);
    });
  },
      lp = function lp(e, t, o) {
    return Rg(e, o.selector, t, -1);
  },
      cp = function cp(e, t, o) {
    return Rg(e, o.selector, t, 1);
  },
      dp = y([Xm(Um(Vm), bg(lp)), Xm(Um(Hm), bg(cp)), Xm(jm([Gm, Um(Am)]), function (e, t, o, n) {
    return o.moveOnTab ? bg(lp)(e, t, o, n) : B.none();
  }), Xm(jm([qm, Um(Am)]), function (e, t, o, n) {
    return o.moveOnTab ? bg(cp)(e, t, o, n) : B.none();
  }), Xm(Um(Dm), ap), Xm(Um(Im), ap)]),
      up = y([Xm(Um(Im), sg)]);

  var mp = Qm(rp, ma.init, dp, up, function () {
    return B.some(ip);
  });
  var gp = [vi("onSpace"), vi("onEnter"), vi("onShiftEnter"), vi("onLeft"), vi("onRight"), vi("onTab"), vi("onShiftTab"), vi("onUp"), vi("onDown"), vi("onEscape"), is("stopSpaceKeyup", !1), Qn("focusIn")];
  var pp = Qm(gp, ma.init, function (e, t, o) {
    return [Xm(Um(Im), o.onSpace), Xm(jm([qm, Um(Dm)]), o.onEnter), Xm(jm([Gm, Um(Dm)]), o.onShiftEnter), Xm(jm([Gm, Um(Am)]), o.onShiftTab), Xm(jm([qm, Um(Am)]), o.onTab), Xm(Um(Vm), o.onUp), Xm(Um(Hm), o.onDown), Xm(Um(Rm), o.onLeft), Xm(Um(zm), o.onRight), Xm(Um(Im), o.onSpace)];
  }, function (e, t, o) {
    return [].concat(_toConsumableArray(o.stopSpaceKeyup ? [Xm(Um(Im), sg)] : []), [Xm(Um(Fm), o.onEscape)]);
  }, function (e) {
    return e.focusIn;
  });

  var hp = tg.schema(),
      fp = og.schema(),
      bp = Ug.schema(),
      vp = Ig.schema(),
      yp = sp.schema(),
      xp = ig.schema(),
      wp = mp.schema(),
      Sp = pp.schema(),
      kp = gl({
    branchKey: "mode",
    branches: Object.freeze({
      __proto__: null,
      acyclic: hp,
      cyclic: fp,
      flow: bp,
      flatgrid: vp,
      matrix: yp,
      execution: xp,
      menu: wp,
      special: Sp
    }),
    name: "keying",
    active: {
      events: function events(e, t) {
        return e.handler.toEvents(e, t);
      }
    },
    apis: {
      focusIn: function focusIn(e, t, o) {
        t.sendFocusIn(t).fold(function () {
          e.getSystem().triggerFocus(e.element, e.element);
        }, function (n) {
          n(e, t, o);
        });
      },
      setGridSize: function setGridSize(e, t, o, n, s) {
        (function (e) {
          return ye(e, "setGridSize");
        })(o) ? o.setGridSize(n, s) : console.error("Layout does not support setGridSize");
      }
    },
    state: cg
  }),
      Cp = function Cp(e, t) {
    wl(function () {
      (function (e, t, o) {
        var n = e.components();

        (function (e) {
          N(e.components(), function (e) {
            return Do(e.element);
          }), Ao(e.element), e.syncComponents();
        })(e);

        var s = o(t),
            r = J(n, s);
        N(r, function (t) {
          cd(t), e.getSystem().removeFromWorld(t);
        }), N(s, function (t) {
          ld(t) ? gd(e, t) : (e.getSystem().addToWorld(t), gd(e, t), ut(e.element) && dd(t));
        }), e.syncComponents();
      })(e, t, function () {
        return P(t, e.getSystem().build);
      });
    }, e.element);
  },
      Op = function Op(e, t) {
    wl(function () {
      (function (o, n, s) {
        var r = o.components(),
            a = X(n, function (e) {
          return da(e).toArray();
        });
        N(r, function (e) {
          R(a, e) || md(e);
        });

        var i = function (e, t, o) {
          return Ra(e, t, function (t, n) {
            return Va(e, n, t, o);
          });
        }(e.element, t, e.getSystem().buildOrPatch),
            l = J(r, i);

        N(l, function (e) {
          ld(e) && md(e);
        }), N(i, function (e) {
          ld(e) || ud(o, e);
        }), o.syncComponents();
      })(e, t);
    }, e.element);
  },
      _p = function _p(e, t, o, n) {
    md(t);
    var s = Va(e.element, o, n, e.getSystem().buildOrPatch);
    ud(e, s), e.syncComponents();
  },
      Tp = function Tp(e, t, o) {
    var n = e.getSystem().build(o);
    hd(e, n, t);
  },
      Ep = function Ep(e, t, o, n) {
    bd(t), Tp(e, function (e, t) {
      return function (e, t, o) {
        tt(e, o).fold(function () {
          Bo(e, t);
        }, function (e) {
          _o(e, t);
        });
      }(e, t, o);
    }, n);
  },
      Bp = function Bp(e, t) {
    return e.components();
  },
      Mp = function Mp(e, t, o, n, s) {
    var r = Bp(e);
    return B.from(r[n]).map(function (o) {
      return s.fold(function () {
        return bd(o);
      }, function (s) {
        (t.reuseDom ? _p : Ep)(e, o, n, s);
      }), o;
    });
  };

  var Ap = Object.freeze({
    __proto__: null,
    append: function append(e, t, o, n) {
      Tp(e, Bo, n);
    },
    prepend: function prepend(e, t, o, n) {
      Tp(e, Eo, n);
    },
    remove: function remove(e, t, o, n) {
      var s = Bp(e),
          r = G(s, function (e) {
        return Ge(n.element, e.element);
      });
      r.each(bd);
    },
    replaceAt: Mp,
    replaceBy: function replaceBy(e, t, o, n, s) {
      var r = Bp(e);
      return $(r, n).bind(function (o) {
        return Mp(e, t, 0, o, s);
      });
    },
    set: function set(e, t, o, n) {
      return (t.reuseDom ? Op : Cp)(e, n);
    },
    contents: Bp
  });

  var Dp = ul({
    fields: [ms("reuseDom", !0)],
    name: "replacing",
    apis: Ap
  }),
      Fp = function Fp(e, t) {
    var o = function (e, t) {
      var o = _r(t);

      return ul({
        fields: [jn("enabled")],
        name: e,
        active: {
          events: y(o)
        }
      });
    }(e, t);

    return {
      key: e,
      value: {
        config: {},
        me: o,
        configAsRaw: y({}),
        initialConfig: {},
        state: ma
      }
    };
  },
      Ip = function Ip(e, t) {
    t.ignore || (bl(e.element), t.onFocus(e));
  };

  var Rp = Object.freeze({
    __proto__: null,
    focus: Ip,
    blur: function blur(e, t) {
      t.ignore || function (e) {
        e.dom.blur();
      }(e.element);
    },
    isFocused: function isFocused(e) {
      return vl(e.element);
    }
  }),
      Vp = Object.freeze({
    __proto__: null,
    exhibit: function exhibit(e, t) {
      var o = t.ignore ? {} : {
        attributes: {
          tabindex: "-1"
        }
      };
      return ha(o);
    },
    events: function events(e) {
      return _r([Br(Ks(), function (t, o) {
        Ip(t, e), o.stop();
      })].concat(e.stopMousedown ? [Br(As(), function (e, t) {
        t.event.prevent();
      })] : []));
    }
  }),
      zp = [bi("onFocus"), is("stopMousedown", !1), is("ignore", !1)];

  var Hp = ul({
    fields: zp,
    name: "focusing",
    active: Vp,
    apis: Rp
  }),
      Pp = function Pp(e, t, o, n) {
    var s = o.get();
    o.set(n), function (e, t, o) {
      t.toggleClass.each(function (t) {
        o.get() ? Ta(e.element, t) : Ea(e.element, t);
      });
    }(e, t, o), function (e, t, o) {
      var n = t.aria;
      n.update(e, n, o.get());
    }(e, t, o), s !== n && t.onToggled(e, n);
  },
      Np = function Np(e, t, o) {
    Pp(e, t, o, !o.get());
  },
      Lp = function Lp(e, t, o) {
    Pp(e, t, o, t.selected);
  };

  var Wp = Object.freeze({
    __proto__: null,
    onLoad: Lp,
    toggle: Np,
    isOn: function isOn(e, t, o) {
      return o.get();
    },
    on: function on(e, t, o) {
      Pp(e, t, o, !0);
    },
    off: function off(e, t, o) {
      Pp(e, t, o, !1);
    },
    set: Pp
  }),
      Up = Object.freeze({
    __proto__: null,
    exhibit: function exhibit() {
      return ha({});
    },
    events: function events(e, t) {
      var o = (n = e, s = t, r = Np, Nr(function (e) {
        r(e, n, s);
      }));
      var n, s, r;
      var a = al(e, t, Lp);
      return _r(q([e.toggleOnExecute ? [o] : [], [a]]));
    }
  });

  var jp = function jp(e, t, o) {
    ht(e.element, "aria-expanded", o);
  };

  var Gp = [is("selected", !1), Qn("toggleClass"), is("toggleOnExecute", !0), bi("onToggled"), ls("aria", {
    mode: "none"
  }, Nn("mode", {
    pressed: [is("syncWithExpanded", !1), wi("update", function (e, t, o) {
      ht(e.element, "aria-pressed", o), t.syncWithExpanded && jp(e, 0, o);
    })],
    checked: [wi("update", function (e, t, o) {
      ht(e.element, "aria-checked", o);
    })],
    expanded: [wi("update", jp)],
    selected: [wi("update", function (e, t, o) {
      ht(e.element, "aria-selected", o);
    })],
    none: [wi("update", b)]
  }))];
  var $p = ul({
    fields: Gp,
    name: "toggling",
    active: Up,
    apis: Wp,
    state: (!1, {
      init: function init() {
        var e = fs(false);
        return {
          get: function get() {
            return e.get();
          },
          set: function set(t) {
            return e.set(t);
          },
          clear: function clear() {
            return e.set(false);
          },
          readState: function readState() {
            return e.get();
          }
        };
      }
    })
  });

  var qp = function qp() {
    var e = function e(_e12, t) {
      t.stop(), Sr(_e12);
    };

    return [Br(Ws(), e), Br(tr(), e), Ir(Ts()), Ir(As())];
  },
      Xp = function Xp(e) {
    return _r(q([e.map(function (e) {
      return Nr(function (t, o) {
        e(t), o.stop();
      });
    }).toArray(), qp()]));
  },
      Kp = "alloy.item-hover",
      Yp = "alloy.item-focus",
      Jp = "alloy.item-toggled",
      Zp = function Zp(e) {
    (xl(e.element).isNone() || Hp.isFocused(e)) && (Hp.isFocused(e) || Hp.focus(e), wr(e, Kp, {
      item: e
    }));
  },
      Qp = function Qp(e) {
    wr(e, Yp, {
      item: e
    });
  },
      eh = y(Kp),
      th = y(Yp),
      oh = y(Jp),
      nh = function nh(e) {
    return e.toggling.map(function (e) {
      return e.exclusive ? "menuitemradio" : "menuitemcheckbox";
    }).getOr("menuitem");
  },
      sh = [jn("data"), jn("components"), jn("dom"), is("hasSubmenu", !1), Qn("toggling"), ou("itemBehaviours", [$p, Hp, kp, Zd]), is("ignoreFocus", !1), is("domModification", {}), wi("builder", function (e) {
    return {
      dom: e.dom,
      domModification: _objectSpread({}, e.domModification, {
        attributes: _objectSpread({
          role: nh(e)
        }, e.domModification.attributes, {
          "aria-haspopup": e.hasSubmenu
        }, e.hasSubmenu ? {
          "aria-expanded": !1
        } : {})
      }),
      behaviours: nu(e.itemBehaviours, [e.toggling.fold($p.revoke, function (e) {
        return $p.config(function (e) {
          return _objectSpread({
            aria: {
              mode: "checked"
            }
          }, ge(e, function (e, t) {
            return "exclusive" !== t;
          }), {
            onToggled: function onToggled(t, o) {
              p(e.onToggled) && e.onToggled(t, o), function (e, t) {
                wr(e, Jp, {
                  item: e,
                  state: t
                });
              }(t, o);
            }
          });
        }(e));
      }), Hp.config({
        ignore: e.ignoreFocus,
        stopMousedown: e.ignoreFocus,
        onFocus: function onFocus(e) {
          Qp(e);
        }
      }), kp.config({
        mode: "execution"
      }), Zd.config({
        store: {
          mode: "memory",
          initialValue: e.data
        }
      }), Fp("item-type-events", [].concat(_toConsumableArray(qp()), [Br(Rs(), Zp), Br(er(), Hp.focus)]))]),
      components: e.components,
      eventOrder: e.eventOrder
    };
  }), is("eventOrder", {})],
      rh = [jn("dom"), jn("components"), wi("builder", function (e) {
    return {
      dom: e.dom,
      components: e.components,
      events: _r([Rr(er())])
    };
  })],
      ah = y("item-widget"),
      ih = y([_u({
    name: "widget",
    overrides: function overrides(e) {
      return {
        behaviours: cl([Zd.config({
          store: {
            mode: "manual",
            getValue: function getValue(t) {
              return e.data;
            },
            setValue: b
          }
        })])
      };
    }
  })]),
      lh = [jn("uid"), jn("data"), jn("components"), jn("dom"), is("autofocus", !1), is("ignoreFocus", !1), ou("widgetBehaviours", [Zd, Hp, kp]), is("domModification", {}), qu(ih()), wi("builder", function (e) {
    var t = Hu(ah(), e, ih()),
        o = Pu(ah(), e, t.internals()),
        n = function n(t) {
      return Nu(t, e, "widget").map(function (e) {
        return kp.focusIn(e), e;
      });
    },
        s = function s(t, o) {
      return om(o.event.target) ? B.none() : e.autofocus ? (o.setSource(t.element), B.none()) : B.none();
    };

    return {
      dom: e.dom,
      components: o,
      domModification: e.domModification,
      events: _r([Nr(function (e, t) {
        n(e).each(function (e) {
          t.stop();
        });
      }), Br(Rs(), Zp), Br(er(), function (t, o) {
        e.autofocus ? n(t) : Hp.focus(t);
      })]),
      behaviours: nu(e.widgetBehaviours, [Zd.config({
        store: {
          mode: "memory",
          initialValue: e.data
        }
      }), Hp.config({
        ignore: e.ignoreFocus,
        onFocus: function onFocus(e) {
          Qp(e);
        }
      }), kp.config({
        mode: "special",
        focusIn: e.autofocus ? function (e) {
          n(e);
        } : pl(),
        onLeft: s,
        onRight: s,
        onEscape: function onEscape(t, o) {
          return Hp.isFocused(t) || e.autofocus ? e.autofocus ? (o.setSource(t.element), B.none()) : B.none() : (Hp.focus(t), B.some(!0));
        }
      })])
    };
  })],
      ch = Nn("type", {
    widget: lh,
    item: sh,
    separator: rh
  }),
      dh = y([Bu({
    factory: {
      sketch: function sketch(e) {
        var t = Hn("menu.spec item", ch, e);
        return t.builder(t);
      }
    },
    name: "items",
    unit: "item",
    defaults: function defaults(e, t) {
      return ve(t, "uid") ? t : _objectSpread({}, t, {
        uid: oa("item")
      });
    },
    overrides: function overrides(e, t) {
      return {
        type: t.type,
        ignoreFocus: e.fakeFocus,
        domModification: {
          classes: [e.markers.item]
        }
      };
    }
  })]),
      uh = y([jn("value"), jn("items"), jn("dom"), jn("components"), is("eventOrder", {}), Qd("menuBehaviours", [Bm, Zd, rm, kp]), ls("movement", {
    mode: "menu",
    moveOnTab: !0
  }, Nn("mode", {
    grid: [ki(), wi("config", function (e, t) {
      return {
        mode: "flatgrid",
        selector: "." + e.markers.item,
        initSize: {
          numColumns: t.initSize.numColumns,
          numRows: t.initSize.numRows
        },
        focusManager: e.focusManager
      };
    })],
    matrix: [wi("config", function (e, t) {
      return {
        mode: "matrix",
        selectors: {
          row: t.rowSelector,
          cell: "." + e.markers.item
        },
        focusManager: e.focusManager
      };
    }), jn("rowSelector")],
    menu: [is("moveOnTab", !0), wi("config", function (e, t) {
      return {
        mode: "menu",
        selector: "." + e.markers.item,
        moveOnTab: t.moveOnTab,
        focusManager: e.focusManager
      };
    })]
  })), Gn("markers", mi()), is("fakeFocus", !1), is("focusManager", Ym()), bi("onHighlight")]),
      mh = y("alloy.menu-focus"),
      gh = tm({
    name: "Menu",
    configFields: uh(),
    partFields: dh(),
    factory: function factory(e, t, o, n) {
      return {
        uid: e.uid,
        dom: e.dom,
        markers: e.markers,
        behaviours: tu(e.menuBehaviours, [Bm.config({
          highlightClass: e.markers.selectedItem,
          itemClass: e.markers.item,
          onHighlight: e.onHighlight
        }), Zd.config({
          store: {
            mode: "memory",
            initialValue: e.value
          }
        }), rm.config({
          find: B.some
        }), kp.config(e.movement.config(e, e.movement))]),
        events: _r([Br(th(), function (e, t) {
          var o = t.event;
          e.getSystem().getByDom(o.target).each(function (o) {
            Bm.highlight(e, o), t.stop(), wr(e, mh(), {
              menu: e,
              item: o
            });
          });
        }), Br(eh(), function (e, t) {
          var o = t.event.item;
          Bm.highlight(e, o);
        }), Br(oh(), function (e, t) {
          var _t$event = t.event,
              o = _t$event.item,
              n = _t$event.state;
          n && "menuitemradio" === bt(o.element, "role") && function (e, t) {
            var o = Dc(e.element, '[role="menuitemradio"][aria-checked="true"]');
            N(o, function (o) {
              Ge(o, t.element) || e.getSystem().getByDom(o).each(function (e) {
                $p.off(e);
              });
            });
          }(e, o);
        })]),
        components: t,
        eventOrder: e.eventOrder,
        domModification: {
          attributes: {
            role: "menu"
          }
        }
      };
    }
  }),
      ph = function ph(e, t, o, n) {
    return be(o, n).bind(function (n) {
      return be(e, n).bind(function (n) {
        var s = ph(e, t, o, n);
        return B.some([n].concat(s));
      });
    }).getOr([]);
  },
      hh = function hh(e) {
    return "prepared" === e.type ? B.some(e.menu) : B.none();
  },
      fh = function fh() {
    var e = fs({}),
        t = fs({}),
        o = fs({}),
        n = Hl(),
        s = fs({}),
        r = function r(e) {
      return a(e).bind(hh);
    },
        a = function a(e) {
      return be(t.get(), e);
    },
        i = function i(t) {
      return be(e.get(), t);
    };

    return {
      setMenuBuilt: function setMenuBuilt(e, o) {
        t.set(_objectSpread({}, t.get(), _defineProperty({}, e, {
          type: "prepared",
          menu: o
        })));
      },
      setContents: function setContents(r, a, i, l) {
        n.set(r), e.set(i), t.set(a), s.set(l);

        var c = function (e, t) {
          var o = {};
          le(e, function (e, t) {
            N(e, function (e) {
              o[e] = t;
            });
          });
          var n = t,
              s = de(t, function (e, t) {
            return {
              k: e,
              v: t
            };
          }),
              r = ce(s, function (e, t) {
            return [t].concat(ph(o, n, s, t));
          });
          return ce(o, function (e) {
            return be(r, e).getOr([e]);
          });
        }(l, i);

        o.set(c);
      },
      expand: function expand(t) {
        return be(e.get(), t).map(function (e) {
          var n = be(o.get(), t).getOr([]);
          return [e].concat(n);
        });
      },
      refresh: function refresh(e) {
        return be(o.get(), e);
      },
      collapse: function collapse(e) {
        return be(o.get(), e).bind(function (e) {
          return e.length > 1 ? B.some(e.slice(1)) : B.none();
        });
      },
      lookupMenu: a,
      lookupItem: i,
      otherMenus: function otherMenus(e) {
        var t = s.get();
        return J(ae(t), e);
      },
      getPrimary: function getPrimary() {
        return n.get().bind(r);
      },
      getMenus: function getMenus() {
        return t.get();
      },
      clear: function clear() {
        e.set({}), t.set({}), o.set({}), n.clear();
      },
      isClear: function isClear() {
        return n.get().isNone();
      },
      getTriggeringPath: function getTriggeringPath(t, s) {
        var a = W(i(t).toArray(), function (e) {
          return r(e).isSome();
        });
        return be(o.get(), t).bind(function (t) {
          var o = Y(a.concat(t));
          return function (e) {
            var t = [];

            for (var _o17 = 0; _o17 < e.length; _o17++) {
              var _n25 = e[_o17];
              if (!_n25.isSome()) return B.none();
              t.push(_n25.getOrDie());
            }

            return B.some(t);
          }(X(o, function (t, a) {
            return function (t, o, n) {
              return r(t).bind(function (s) {
                return function (t) {
                  return he(e.get(), function (e, o) {
                    return e === t;
                  });
                }(t).bind(function (e) {
                  return o(e).map(function (e) {
                    return {
                      triggeredMenu: s,
                      triggeringItem: e,
                      triggeringPath: n
                    };
                  });
                });
              });
            }(t, s, o.slice(0, a + 1)).fold(function () {
              return xe(n.get(), t) ? [] : [B.none()];
            }, function (e) {
              return [B.some(e)];
            });
          }));
        });
      }
    };
  },
      bh = hh,
      vh = y("collapse-item"),
      yh = em({
    name: "TieredMenu",
    configFields: [xi("onExecute"), xi("onEscape"), yi("onOpenMenu"), yi("onOpenSubmenu"), bi("onRepositionMenu"), bi("onCollapseMenu"), is("highlightImmediately", !0), Yn("data", [jn("primary"), jn("menus"), jn("expansions")]), is("fakeFocus", !1), bi("onHighlight"), bi("onHover"), pi(), jn("dom"), is("navigateOnHover", !0), is("stayInDom", !1), Qd("tmenuBehaviours", [kp, Bm, rm, Dp]), is("eventOrder", {})],
    apis: {
      collapseMenu: function collapseMenu(e, t) {
        e.collapseMenu(t);
      },
      highlightPrimary: function highlightPrimary(e, t) {
        e.highlightPrimary(t);
      },
      repositionMenus: function repositionMenus(e, t) {
        e.repositionMenus(t);
      }
    },
    factory: function factory(e, t) {
      var o = Hl(),
          n = fh(),
          s = function s(e) {
        return Zd.getValue(e).value;
      },
          r = function r(t) {
        return ce(e.data.menus, function (e, t) {
          return X(e.items, function (e) {
            return "separator" === e.type ? [] : [e.data.value];
          });
        });
      },
          a = function a(e, t) {
        Bm.highlight(e, t), Bm.getHighlighted(t).orThunk(function () {
          return Bm.getFirst(t);
        }).each(function (t) {
          kr(e, t.element, er());
        });
      },
          i = function i(e, t) {
        return we(P(t, function (t) {
          return e.lookupMenu(t).bind(function (e) {
            return "prepared" === e.type ? B.some(e.menu) : B.none();
          });
        }));
      },
          l = function l(t, o, n) {
        var s = i(o, o.otherMenus(n));
        N(s, function (o) {
          Aa(o.element, [e.markers.backgroundMenu]), e.stayInDom || Dp.remove(t, o);
        });
      },
          c = function c(t, n) {
        var r = function (t) {
          return o.get().getOrThunk(function () {
            var n = {},
                r = Dc(t.element, ".".concat(e.markers.item)),
                a = W(r, function (e) {
              return "true" === bt(e, "aria-haspopup");
            });
            return N(a, function (e) {
              t.getSystem().getByDom(e).each(function (e) {
                var t = s(e);
                n[t] = e;
              });
            }), o.set(n), n;
          });
        }(t);

        le(r, function (e, t) {
          var o = R(n, t);
          ht(e.element, "aria-expanded", o);
        });
      },
          d = function d(t, o, n) {
        return B.from(n[0]).bind(function (s) {
          return o.lookupMenu(s).bind(function (s) {
            if ("notbuilt" === s.type) return B.none();
            {
              var _r7 = s.menu,
                  _c3 = i(o, n.slice(1));

              return N(_c3, function (t) {
                Ta(t.element, e.markers.backgroundMenu);
              }), ut(_r7.element) || Dp.append(t, $a(_r7)), Aa(_r7.element, [e.markers.backgroundMenu]), a(t, _r7), l(t, o, n), B.some(_r7);
            }
          });
        });
      };

      var u;
      !function (e) {
        e[e.HighlightSubmenu = 0] = "HighlightSubmenu", e[e.HighlightParent = 1] = "HighlightParent";
      }(u || (u = {}));

      var m = function m(t, o) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : u.HighlightSubmenu;
        if (o.hasConfigured(ym) && ym.isDisabled(o)) return B.some(o);
        {
          var _a4 = s(o);

          return n.expand(_a4).bind(function (s) {
            return c(t, s), B.from(s[0]).bind(function (a) {
              return n.lookupMenu(a).bind(function (i) {
                var l = function (e, t, o) {
                  if ("notbuilt" === o.type) {
                    var _s20 = e.getSystem().build(o.nbMenu());

                    return n.setMenuBuilt(t, _s20), _s20;
                  }

                  return o.menu;
                }(t, a, i);

                return ut(l.element) || Dp.append(t, $a(l)), e.onOpenSubmenu(t, o, l, Y(s)), r === u.HighlightSubmenu ? (Bm.highlightFirst(l), d(t, n, s)) : (Bm.dehighlightAll(l), B.some(o));
              });
            });
          });
        }
      },
          g = function g(t, o) {
        var r = s(o);
        return n.collapse(r).bind(function (s) {
          return c(t, s), d(t, n, s).map(function (n) {
            return e.onCollapseMenu(t, o, n), n;
          });
        });
      },
          p = function p(t) {
        return function (o, n) {
          return ti(n.getSource(), "." + e.markers.item).bind(function (e) {
            return o.getSystem().getByDom(e).toOptional().bind(function (e) {
              return t(o, e).map(T);
            });
          });
        };
      },
          h = _r([Br(mh(), function (e, t) {
        var o = t.event.item;
        n.lookupItem(s(o)).each(function () {
          var o = t.event.menu;
          Bm.highlight(e, o);
          var r = s(t.event.item);
          n.refresh(r).each(function (t) {
            return l(e, n, t);
          });
        });
      }), Nr(function (t, o) {
        var n = o.event.target;
        t.getSystem().getByDom(n).each(function (o) {
          0 === s(o).indexOf("collapse-item") && g(t, o), m(t, o, u.HighlightSubmenu).fold(function () {
            e.onExecute(t, o);
          }, b);
        });
      }), zr(function (t, o) {
        (function (t) {
          var o = function (t, o, n) {
            return ce(n, function (n, s) {
              var r = function r() {
                return gh.sketch(_objectSpread({}, n, {
                  value: s,
                  markers: e.markers,
                  fakeFocus: e.fakeFocus,
                  onHighlight: e.onHighlight,
                  focusManager: e.fakeFocus ? Jm() : Ym()
                }));
              };

              return s === o ? {
                type: "prepared",
                menu: t.getSystem().build(r())
              } : {
                type: "notbuilt",
                nbMenu: r
              };
            });
          }(t, e.data.primary, e.data.menus),
              s = r();

          return n.setContents(e.data.primary, o, e.data.expansions, s), n.getPrimary();
        })(t).each(function (o) {
          Dp.append(t, $a(o)), e.onOpenMenu(t, o), e.highlightImmediately && a(t, o);
        });
      })].concat(e.navigateOnHover ? [Br(eh(), function (t, o) {
        var r = o.event.item;
        (function (e, t) {
          var o = s(t);
          n.refresh(o).bind(function (t) {
            return c(e, t), d(e, n, t);
          });
        })(t, r), m(t, r, u.HighlightParent), e.onHover(t, r);
      })] : [])),
          f = function f(e) {
        return Bm.getHighlighted(e).bind(Bm.getHighlighted);
      },
          v = {
        collapseMenu: function collapseMenu(e) {
          f(e).each(function (t) {
            g(e, t);
          });
        },
        highlightPrimary: function highlightPrimary(e) {
          n.getPrimary().each(function (t) {
            a(e, t);
          });
        },
        repositionMenus: function repositionMenus(t) {
          var o = n.getPrimary().bind(function (e) {
            return f(t).bind(function (e) {
              var t = s(e),
                  o = fe(n.getMenus()),
                  r = we(P(o, bh));
              return n.getTriggeringPath(t, function (e) {
                return function (e, t, o) {
                  return re(t, function (e) {
                    if (!e.getSystem().isConnected()) return B.none();
                    var t = Bm.getCandidates(e);
                    return G(t, function (e) {
                      return s(e) === o;
                    });
                  });
                }(0, r, e);
              });
            }).map(function (t) {
              return {
                primary: e,
                triggeringPath: t
              };
            });
          });
          o.fold(function () {
            (function (e) {
              return B.from(e.components()[0]).filter(function (e) {
                return "menu" === bt(e.element, "role");
              });
            })(t).each(function (o) {
              e.onRepositionMenu(t, o, []);
            });
          }, function (_ref7) {
            var o = _ref7.primary,
                n = _ref7.triggeringPath;
            e.onRepositionMenu(t, o, n);
          });
        }
      };

      return {
        uid: e.uid,
        dom: e.dom,
        markers: e.markers,
        behaviours: tu(e.tmenuBehaviours, [kp.config({
          mode: "special",
          onRight: p(function (e, t) {
            return om(t.element) ? B.none() : m(e, t, u.HighlightSubmenu);
          }),
          onLeft: p(function (e, t) {
            return om(t.element) ? B.none() : g(e, t);
          }),
          onEscape: p(function (t, o) {
            return g(t, o).orThunk(function () {
              return e.onEscape(t, o).map(function () {
                return t;
              });
            });
          }),
          focusIn: function focusIn(e, t) {
            n.getPrimary().each(function (t) {
              kr(e, t.element, er());
            });
          }
        }), Bm.config({
          highlightClass: e.markers.selectedMenu,
          itemClass: e.markers.menu
        }), rm.config({
          find: function find(e) {
            return Bm.getHighlighted(e);
          }
        }), Dp.config({})]),
        eventOrder: e.eventOrder,
        apis: v,
        events: h
      };
    },
    extraApis: {
      tieredData: function tieredData(e, t, o) {
        return {
          primary: e,
          menus: t,
          expansions: o
        };
      },
      singleData: function singleData(e, t) {
        return {
          primary: e,
          menus: vs(e, t),
          expansions: {}
        };
      },
      collapseItem: function collapseItem(e) {
        return {
          value: Kr(vh()),
          meta: {
            text: e
          }
        };
      }
    }
  }),
      xh = em({
    name: "InlineView",
    configFields: [jn("lazySink"), bi("onShow"), bi("onHide"), ss("onEscape"), Qd("inlineBehaviours", [Dd, Zd, hl]), as("fireDismissalEventInstead", [is("event", mr())]), as("fireRepositionEventInstead", [is("event", gr())]), is("getRelated", B.none), is("isExtraPart", _), is("eventOrder", B.none)],
    factory: function factory(e, t) {
      var o = function o(e, t, _o18, s) {
        n(e, t, _o18, function () {
          return s.map(function (e) {
            return Wo(e);
          });
        });
      },
          n = function n(t, o, _n26, s) {
        var r = e.lazySink(t).getOrDie();
        Dd.openWhileCloaked(t, o, function () {
          return id.positionWithinBounds(r, t, _n26, s());
        }), Zd.setValue(t, B.some({
          mode: "position",
          config: _n26,
          getBounds: s
        }));
      },
          s = function s(t, o, n, _s21) {
        var r = function (e, t, o, n, s) {
          var r = function r() {
            return e.lazySink(t);
          },
              a = "horizontal" === n.type ? {
            layouts: {
              onLtr: function onLtr() {
                return ol();
              },
              onRtl: function onRtl() {
                return nl();
              }
            }
          } : {},
              i = function i(e) {
            return function (e) {
              return 2 === e.length;
            }(e) ? a : {};
          };

          return yh.sketch({
            dom: {
              tag: "div"
            },
            data: n.data,
            markers: n.menu.markers,
            highlightImmediately: n.menu.highlightImmediately,
            fakeFocus: n.menu.fakeFocus,
            onEscape: function onEscape() {
              return Dd.close(t), e.onEscape.map(function (e) {
                return e(t);
              }), B.some(!0);
            },
            onExecute: function onExecute() {
              return B.some(!0);
            },
            onOpenMenu: function onOpenMenu(e, t) {
              id.positionWithinBounds(r().getOrDie(), t, o, s());
            },
            onOpenSubmenu: function onOpenSubmenu(e, t, o, n) {
              var s = r().getOrDie();
              id.position(s, o, {
                anchor: _objectSpread({
                  type: "submenu",
                  item: t
                }, i(n))
              });
            },
            onRepositionMenu: function onRepositionMenu(e, t, n) {
              var a = r().getOrDie();
              id.positionWithinBounds(a, t, o, s()), N(n, function (e) {
                var t = i(e.triggeringPath);
                id.position(a, e.triggeredMenu, {
                  anchor: _objectSpread({
                    type: "submenu",
                    item: e.triggeringItem
                  }, t)
                });
              });
            }
          });
        }(e, t, o, n, _s21);

        Dd.open(t, r), Zd.setValue(t, B.some({
          mode: "menu",
          menu: r
        }));
      },
          r = function r(t) {
        Dd.isOpen(t) && Zd.getValue(t).each(function (o) {
          switch (o.mode) {
            case "menu":
              Dd.getState(t).each(yh.repositionMenus);
              break;

            case "position":
              var _n27 = e.lazySink(t).getOrDie();

              id.positionWithinBounds(_n27, t, o.config, o.getBounds());
          }
        });
      },
          a = {
        setContent: function setContent(e, t) {
          Dd.setContent(e, t);
        },
        showAt: function showAt(e, t, n) {
          o(e, t, n, B.none());
        },
        showWithin: o,
        showWithinBounds: n,
        showMenuAt: function showMenuAt(e, t, o) {
          s(e, t, o, B.none);
        },
        showMenuWithinBounds: s,
        hide: function hide(e) {
          Dd.isOpen(e) && (Zd.setValue(e, B.none()), Dd.close(e));
        },
        getContent: function getContent(e) {
          return Dd.getState(e);
        },
        reposition: r,
        isOpen: Dd.isOpen
      };

      return {
        uid: e.uid,
        dom: e.dom,
        behaviours: tu(e.inlineBehaviours, [Dd.config({
          isPartOf: function isPartOf(t, o, n) {
            return si(o, n) || function (t, o) {
              return e.getRelated(t).exists(function (e) {
                return si(e, o);
              });
            }(t, n);
          },
          getAttachPoint: function getAttachPoint(t) {
            return e.lazySink(t).getOrDie();
          },
          onOpen: function onOpen(t) {
            e.onShow(t);
          },
          onClose: function onClose(t) {
            e.onHide(t);
          }
        }), Zd.config({
          store: {
            mode: "memory",
            initialValue: B.none()
          }
        }), hl.config({
          channels: _objectSpread({}, zd(_objectSpread({
            isExtraPart: t.isExtraPart
          }, e.fireDismissalEventInstead.map(function (e) {
            return {
              fireEventInstead: {
                event: e.event
              }
            };
          }).getOr({}))), {}, Pd(_objectSpread({}, e.fireRepositionEventInstead.map(function (e) {
            return {
              fireEventInstead: {
                event: e.event
              }
            };
          }).getOr({}), {
            doReposition: r
          })))
        })]),
        eventOrder: e.eventOrder,
        apis: a
      };
    },
    apis: {
      showAt: function showAt(e, t, o, n) {
        e.showAt(t, o, n);
      },
      showWithin: function showWithin(e, t, o, n, s) {
        e.showWithin(t, o, n, s);
      },
      showWithinBounds: function showWithinBounds(e, t, o, n, s) {
        e.showWithinBounds(t, o, n, s);
      },
      showMenuAt: function showMenuAt(e, t, o, n) {
        e.showMenuAt(t, o, n);
      },
      showMenuWithinBounds: function showMenuWithinBounds(e, t, o, n, s) {
        e.showMenuWithinBounds(t, o, n, s);
      },
      hide: function hide(e, t) {
        e.hide(t);
      },
      isOpen: function isOpen(e, t) {
        return e.isOpen(t);
      },
      getContent: function getContent(e, t) {
        return e.getContent(t);
      },
      setContent: function setContent(e, t, o) {
        e.setContent(t, o);
      },
      reposition: function reposition(e, t) {
        e.reposition(t);
      }
    }
  });

  var wh = tinymce.util.Tools.resolve("tinymce.util.Delay");

  var Sh = em({
    name: "Button",
    factory: function factory(e) {
      var t = Xp(e.action),
          o = e.dom.tag,
          n = function n(t) {
        return be(e.dom, "attributes").bind(function (e) {
          return be(e, t);
        });
      };

      return {
        uid: e.uid,
        dom: e.dom,
        components: e.components,
        events: t,
        behaviours: nu(e.buttonBehaviours, [Hp.config({}), kp.config({
          mode: "execution",
          useSpace: !0,
          useEnter: !0
        })]),
        domModification: {
          attributes: "button" === o ? _objectSpread({
            type: n("type").getOr("button")
          }, n("role").map(function (e) {
            return {
              role: e
            };
          }).getOr({})) : {
            role: n("role").getOr("button")
          }
        },
        eventOrder: e.eventOrder
      };
    },
    configFields: [is("uid", void 0), jn("dom"), is("components", []), ou("buttonBehaviours", [Hp, kp]), Qn("action"), Qn("role"), is("eventOrder", {})]
  }),
      kh = function kh(e) {
    var t = function (e) {
      return void 0 !== e.uid;
    }(e) && ye(e, "uid") ? e.uid : oa("memento");
    return {
      get: function get(e) {
        return e.getSystem().getByUid(t).getOrDie();
      },
      getOpt: function getOpt(e) {
        return e.getSystem().getByUid(t).toOptional();
      },
      asSpec: function asSpec() {
        return _objectSpread({}, e, {
          uid: t
        });
      }
    };
  };

  var Ch = tinymce.util.Tools.resolve("tinymce.util.I18n");

  var Oh = {
    indent: !0,
    outdent: !0,
    "table-insert-column-after": !0,
    "table-insert-column-before": !0,
    "paste-column-after": !0,
    "paste-column-before": !0,
    "unordered-list": !0,
    "list-bull-circle": !0,
    "list-bull-default": !0,
    "list-bull-square": !0
  },
      _h = "temporary-placeholder",
      Th = function Th(e) {
    return function () {
      return be(e, _h).getOr("!not found!");
    };
  },
      Eh = function Eh(e, t) {
    var o = e.toLowerCase();

    if (Ch.isRtl()) {
      var _e13 = function (e, t) {
        return _e(e, t) ? e : function (e, t) {
          return e + "-rtl";
        }(e);
      }(o, "-rtl");

      return ve(t, _e13) ? _e13 : o;
    }

    return o;
  },
      Bh = function Bh(e, t) {
    return be(t, Eh(e, t));
  },
      Mh = function Mh(e, t) {
    var o = t();
    return Bh(e, o).getOrThunk(Th(o));
  },
      Ah = function Ah() {
    return Fp("add-focusable", [zr(function (e) {
      Qa(e.element, "svg").each(function (e) {
        return ht(e, "focusable", "false");
      });
    })]);
  },
      Dh = function Dh(e, t, o, n) {
    var s, r;
    var a = function (e) {
      return !!Ch.isRtl() && ve(Oh, e);
    }(t) ? ["tox-icon--flip"] : [],
        i = be(o, Eh(t, o)).or(n).getOrThunk(Th(o));
    return {
      dom: {
        tag: e.tag,
        attributes: null !== (s = e.attributes) && void 0 !== s ? s : {},
        classes: e.classes.concat(a),
        innerHtml: i
      },
      behaviours: cl([].concat(_toConsumableArray(null !== (r = e.behaviours) && void 0 !== r ? r : []), [Ah()]))
    };
  },
      Fh = function Fh(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : B.none();
    return Dh(t, e, o(), n);
  },
      Ih = {
    success: "checkmark",
    error: "warning",
    err: "error",
    warning: "warning",
    warn: "warning",
    info: "info"
  },
      Rh = em({
    name: "Notification",
    factory: function factory(e) {
      var t = kh({
        dom: {
          tag: "p",
          innerHtml: e.translationProvider(e.text)
        },
        behaviours: cl([Dp.config({})])
      }),
          o = function o(e) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-bar"],
            styles: {
              width: "".concat(e, "%")
            }
          }
        };
      },
          n = function n(e) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-text"],
            innerHtml: "".concat(e, "%")
          }
        };
      },
          s = kh({
        dom: {
          tag: "div",
          classes: e.progress ? ["tox-progress-bar", "tox-progress-indicator"] : ["tox-progress-bar"]
        },
        components: [{
          dom: {
            tag: "div",
            classes: ["tox-bar-container"]
          },
          components: [o(0)]
        }, n(0)],
        behaviours: cl([Dp.config({})])
      }),
          r = {
        updateProgress: function updateProgress(e, t) {
          e.getSystem().isConnected() && s.getOpt(e).each(function (e) {
            Dp.set(e, [{
              dom: {
                tag: "div",
                classes: ["tox-bar-container"]
              },
              components: [o(t)]
            }, n(t)]);
          });
        },
        updateText: function updateText(e, o) {
          if (e.getSystem().isConnected()) {
            var _n28 = t.get(e);

            Dp.set(_n28, [La(o)]);
          }
        }
      },
          a = q([e.icon.toArray(), e.level.toArray(), e.level.bind(function (e) {
        return B.from(Ih[e]);
      }).toArray()]),
          i = kh(Sh.sketch({
        dom: {
          tag: "button",
          classes: ["tox-notification__dismiss", "tox-button", "tox-button--naked", "tox-button--icon"]
        },
        components: [Fh("close", {
          tag: "div",
          classes: ["tox-icon"],
          attributes: {
            "aria-label": e.translationProvider("Close")
          }
        }, e.iconProvider)],
        action: function action(t) {
          e.onAction(t);
        }
      })),
          l = function (e, t, o) {
        var n = o(),
            s = G(e, function (e) {
          return ve(n, Eh(e, n));
        });
        return Dh({
          tag: "div",
          classes: ["tox-notification__icon"]
        }, s.getOr(_h), n, B.none());
      }(a, 0, e.iconProvider),
          c = [l, {
        dom: {
          tag: "div",
          classes: ["tox-notification__body"]
        },
        components: [t.asSpec()],
        behaviours: cl([Dp.config({})])
      }];

      return {
        uid: e.uid,
        dom: {
          tag: "div",
          attributes: {
            role: "alert"
          },
          classes: e.level.map(function (e) {
            return ["tox-notification", "tox-notification--in", "tox-notification--".concat(e)];
          }).getOr(["tox-notification", "tox-notification--in"])
        },
        behaviours: cl([Hp.config({}), Fp("notification-events", [Br(Vs(), function (e) {
          i.getOpt(e).each(Hp.focus);
        })])]),
        components: c.concat(e.progress ? [s.asSpec()] : []).concat(e.closeButton ? [i.asSpec()] : []),
        apis: r
      };
    },
    configFields: [Qn("level"), jn("progress"), jn("icon"), jn("onAction"), jn("text"), jn("iconProvider"), jn("translationProvider"), ms("closeButton", !0)],
    apis: {
      updateProgress: function updateProgress(e, t, o) {
        e.updateProgress(t, o);
      },
      updateText: function updateText(e, t, o) {
        e.updateText(t, o);
      }
    }
  });

  var Vh,
      zh,
      Hh = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      Ph = tinymce.util.Tools.resolve("tinymce.EditorManager"),
      Nh = tinymce.util.Tools.resolve("tinymce.Env");
  !function (e) {
    e["default"] = "wrap", e.floating = "floating", e.sliding = "sliding", e.scrolling = "scrolling";
  }(Vh || (Vh = {})), function (e) {
    e.auto = "auto", e.top = "top", e.bottom = "bottom";
  }(zh || (zh = {}));

  var Lh = function Lh(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      Wh = function Wh(e) {
    return function (t) {
      return B.from(e(t));
    };
  },
      Uh = function Uh(e) {
    var t = Nh.deviceType.isPhone(),
        o = Nh.deviceType.isTablet() || t,
        n = e.options.register,
        s = function s(e) {
      return r(e) || !1 === e;
    },
        a = function a(e) {
      return r(e) || h(e);
    };

    n("skin", {
      processor: function processor(e) {
        return r(e) || !1 === e;
      },
      "default": "oxide"
    }), n("skin_url", {
      processor: "string"
    }), n("height", {
      processor: a,
      "default": Math.max(e.getElement().offsetHeight, 400)
    }), n("width", {
      processor: a,
      "default": Hh.DOM.getStyle(e.getElement(), "width")
    }), n("min_height", {
      processor: "number",
      "default": 100
    }), n("min_width", {
      processor: "number"
    }), n("max_height", {
      processor: "number"
    }), n("max_width", {
      processor: "number"
    }), n("style_formats", {
      processor: "object[]"
    }), n("style_formats_merge", {
      processor: "boolean",
      "default": !1
    }), n("style_formats_autohide", {
      processor: "boolean",
      "default": !1
    }), n("line_height_formats", {
      processor: "string",
      "default": "1 1.1 1.2 1.3 1.4 1.5 2"
    }), n("font_family_formats", {
      processor: "string",
      "default": "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats"
    }), n("font_size_formats", {
      processor: "string",
      "default": "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
    }), n("block_formats", {
      processor: "string",
      "default": "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre"
    }), n("content_langs", {
      processor: "object[]"
    }), n("removed_menuitems", {
      processor: "string",
      "default": ""
    }), n("menubar", {
      processor: function processor(e) {
        return r(e) || d(e);
      },
      "default": !t
    }), n("menu", {
      processor: "object",
      "default": {}
    }), n("toolbar", {
      processor: function processor(e) {
        return d(e) || r(e) || l(e) ? {
          value: e,
          valid: !0
        } : {
          valid: !1,
          message: "Must be a boolean, string or array."
        };
      },
      "default": !0
    }), z(9, function (e) {
      n("toolbar" + (e + 1), {
        processor: "string"
      });
    }), n("toolbar_mode", {
      processor: "string",
      "default": o ? "scrolling" : "floating"
    }), n("toolbar_groups", {
      processor: "object",
      "default": {}
    }), n("toolbar_location", {
      processor: "string",
      "default": zh.auto
    }), n("toolbar_persist", {
      processor: "boolean",
      "default": !1
    }), n("toolbar_sticky", {
      processor: "boolean",
      "default": e.inline
    }), n("toolbar_sticky_offset", {
      processor: "number",
      "default": 0
    }), n("fixed_toolbar_container", {
      processor: "string",
      "default": ""
    }), n("fixed_toolbar_container_target", {
      processor: "object"
    }), n("file_picker_callback", {
      processor: "function"
    }), n("file_picker_validator_handler", {
      processor: "function"
    }), n("file_picker_types", {
      processor: "string"
    }), n("typeahead_urls", {
      processor: "boolean",
      "default": !0
    }), n("anchor_top", {
      processor: s,
      "default": "#top"
    }), n("anchor_bottom", {
      processor: s,
      "default": "#bottom"
    }), n("draggable_modal", {
      processor: "boolean",
      "default": !1
    }), n("statusbar", {
      processor: "boolean",
      "default": !0
    }), n("elementpath", {
      processor: "boolean",
      "default": !0
    }), n("branding", {
      processor: "boolean",
      "default": !0
    }), n("resize", {
      processor: function processor(e) {
        return "both" === e || d(e);
      },
      "default": !Nh.deviceType.isTouch()
    }), n("sidebar_show", {
      processor: "string"
    });
  },
      jh = Lh("readonly"),
      Gh = Lh("height"),
      $h = Lh("width"),
      qh = Wh(Lh("min_width")),
      Xh = Wh(Lh("min_height")),
      Kh = Wh(Lh("max_width")),
      Yh = Wh(Lh("max_height")),
      Jh = Wh(Lh("style_formats")),
      Zh = Lh("style_formats_merge"),
      Qh = Lh("style_formats_autohide"),
      ef = Lh("content_langs"),
      tf = Lh("removed_menuitems"),
      of = Lh("toolbar_mode"),
      nf = Lh("toolbar_groups"),
      sf = Lh("toolbar_location"),
      rf = Lh("fixed_toolbar_container"),
      af = Lh("fixed_toolbar_container_target"),
      lf = Lh("toolbar_persist"),
      cf = Lh("toolbar_sticky_offset"),
      df = Lh("menubar"),
      uf = Lh("toolbar"),
      mf = Lh("file_picker_callback"),
      gf = Lh("file_picker_validator_handler"),
      pf = Lh("file_picker_types"),
      hf = Lh("typeahead_urls"),
      ff = Lh("anchor_top"),
      bf = Lh("anchor_bottom"),
      vf = Lh("draggable_modal"),
      yf = Lh("statusbar"),
      xf = Lh("elementpath"),
      wf = Lh("branding"),
      Sf = Lh("resize"),
      kf = Lh("paste_as_text"),
      Cf = Lh("sidebar_show"),
      Of = function Of(e) {
    return !1 === e.options.get("skin");
  },
      _f = function _f(e) {
    return !1 !== e.options.get("menubar");
  },
      Tf = function Tf(e) {
    var t = e.options.get("skin_url");
    if (Of(e)) return t;
    if (t) return e.documentBaseURI.toAbsolute(t);
    {
      var _t19 = e.options.get("skin");

      return Ph.baseURL + "/skins/ui/" + _t19;
    }
  },
      Ef = function Ef(e) {
    return e.options.get("line_height_formats").split(" ");
  },
      Bf = function Bf(e) {
    var t = uf(e),
        o = r(t),
        n = l(t) && t.length > 0;
    return !Af(e) && (n || o || !0 === t);
  },
      Mf = function Mf(e) {
    var t = z(9, function (t) {
      return e.options.get("toolbar" + (t + 1));
    }),
        o = W(t, r);
    return ke(o.length > 0, o);
  },
      Af = function Af(e) {
    return Mf(e).fold(function () {
      var t = uf(e);
      return f(t, r) && t.length > 0;
    }, T);
  },
      Df = function Df(e) {
    return sf(e) === zh.bottom;
  },
      Ff = function Ff(e) {
    if (!e.inline) return B.none();
    var t = rf(e);
    if (t.length > 0) return ei(mt(), t);
    var o = af(e);
    return g(o) ? B.some(Ie(o)) : B.none();
  },
      If = function If(e) {
    return e.inline && Ff(e).isSome();
  },
      Rf = function Rf(e) {
    return Ff(e).getOrThunk(function () {
      return lt(it(Ie(e.getElement())));
    });
  },
      Vf = function Vf(e) {
    return e.inline && !_f(e) && !Bf(e) && !Af(e);
  },
      zf = function zf(e) {
    return (e.options.get("toolbar_sticky") || e.inline) && !If(e) && !Vf(e);
  },
      Hf = function Hf(e) {
    var t = e.options.get("menu");
    return ce(t, function (e) {
      return _objectSpread({}, e, {
        items: e.items
      });
    });
  };

  var Pf = Object.freeze({
    __proto__: null,

    get ToolbarMode() {
      return Vh;
    },

    get ToolbarLocation() {
      return zh;
    },

    register: Uh,
    getSkinUrl: Tf,
    isReadOnly: jh,
    isSkinDisabled: Of,
    getHeightOption: Gh,
    getWidthOption: $h,
    getMinWidthOption: qh,
    getMinHeightOption: Xh,
    getMaxWidthOption: Kh,
    getMaxHeightOption: Yh,
    getUserStyleFormats: Jh,
    shouldMergeStyleFormats: Zh,
    shouldAutoHideStyleFormats: Qh,
    getLineHeightFormats: Ef,
    getContentLanguages: ef,
    getRemovedMenuItems: tf,
    isMenubarEnabled: _f,
    isMultipleToolbars: Af,
    isToolbarEnabled: Bf,
    isToolbarPersist: lf,
    getMultipleToolbarsOption: Mf,
    getUiContainer: Rf,
    useFixedContainer: If,
    getToolbarMode: of,
    isDraggableModal: vf,
    isDistractionFree: Vf,
    isStickyToolbar: zf,
    getStickyToolbarOffset: cf,
    getToolbarLocation: sf,
    isToolbarLocationBottom: Df,
    getToolbarGroups: nf,
    getMenus: Hf,
    getMenubar: df,
    getToolbar: uf,
    getFilePickerCallback: mf,
    getFilePickerTypes: pf,
    useTypeaheadUrls: hf,
    getAnchorTop: ff,
    getAnchorBottom: bf,
    getFilePickerValidatorHandler: gf,
    useStatusBar: yf,
    useElementPath: xf,
    useBranding: wf,
    getResize: Sf,
    getPasteAsText: kf,
    getSidebarShow: Cf
  });

  var Nf = "[data-mce-autocompleter]",
      Lf = function Lf(e) {
    return ti(e, Nf);
  };

  var Wf;
  !function (e) {
    e[e.CLOSE_ON_EXECUTE = 0] = "CLOSE_ON_EXECUTE", e[e.BUBBLE_TO_SANDBOX = 1] = "BUBBLE_TO_SANDBOX";
  }(Wf || (Wf = {}));
  var Uf = Wf;

  var jf = "tox-menu-nav__js",
      Gf = "tox-collection__item",
      $f = {
    normal: jf,
    color: "tox-swatch"
  },
      qf = "tox-collection__item--enabled",
      Xf = "tox-collection__item-icon",
      Kf = "tox-collection__item-label",
      Yf = "tox-collection__item-caret",
      Jf = "tox-collection__item--active",
      Zf = "tox-collection__item-container",
      Qf = "tox-collection__item-container--row",
      eb = function eb(e) {
    return be($f, e).getOr(jf);
  },
      tb = function tb(e) {
    return "color" === e ? "tox-swatches" : "tox-menu";
  },
      ob = function ob(e) {
    return {
      backgroundMenu: "tox-background-menu",
      selectedMenu: "tox-selected-menu",
      selectedItem: "tox-collection__item--active",
      hasIcons: "tox-menu--has-icons",
      menu: tb(e),
      tieredMenu: "tox-tiered-menu"
    };
  },
      nb = function nb(e) {
    var t = ob(e);
    return {
      backgroundMenu: t.backgroundMenu,
      selectedMenu: t.selectedMenu,
      menu: t.menu,
      selectedItem: t.selectedItem,
      item: eb(e)
    };
  },
      sb = function sb(e, t, o) {
    var n = ob(o);
    return {
      tag: "div",
      classes: q([[n.menu, "tox-menu-".concat(t, "-column")], e ? [n.hasIcons] : []])
    };
  },
      rb = [gh.parts.items({})],
      ab = function ab(e, t, o) {
    var n = ob(o);
    return {
      dom: {
        tag: "div",
        classes: q([[n.tieredMenu]])
      },
      markers: nb(o)
    };
  },
      ib = function ib(e, t) {
    return function (o) {
      var n = H(o, t);
      return P(n, function (t) {
        return {
          dom: e,
          components: t
        };
      });
    };
  },
      lb = function lb(e, t) {
    var o = [];
    var n = [];
    return N(e, function (e, s) {
      t(e, s) ? (n.length > 0 && o.push(n), n = [], (ve(e.dom, "innerHtml") || e.components.length > 0) && n.push(e)) : n.push(e);
    }), n.length > 0 && o.push(n), P(o, function (e) {
      return {
        dom: {
          tag: "div",
          classes: ["tox-collection__group"]
        },
        components: e
      };
    });
  },
      cb = function cb(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    return {
      dom: {
        tag: "div",
        classes: ["tox-menu", "tox-collection"].concat(1 === e ? ["tox-collection--list"] : ["tox-collection--grid"])
      },
      components: [gh.parts.items({
        preprocess: function preprocess(o) {
          return "auto" !== e && e > 1 ? ib({
            tag: "div",
            classes: ["tox-collection__group"]
          }, e)(o) : lb(o, function (e, o) {
            return "separator" === t[o].type;
          });
        }
      })]
    };
  },
      db = function db(e) {
    return V(e, function (e) {
      return "icon" in e && void 0 !== e.icon;
    });
  },
      ub = function ub(e) {
    return console.error(Pn(e)), console.log(e), B.none();
  },
      mb = function mb(e, t, o, n, s) {
    var r = (a = o, {
      dom: {
        tag: "div",
        classes: ["tox-collection", "tox-collection--horizontal"]
      },
      components: [gh.parts.items({
        preprocess: function preprocess(e) {
          return lb(e, function (e, t) {
            return "separator" === a[t].type;
          });
        }
      })]
    });
    var a;
    return {
      value: e,
      dom: r.dom,
      components: r.components,
      items: o
    };
  },
      gb = function gb(e, t, o, n, s) {
    if ("color" === s) {
      var _t20 = function (e) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-menu", "tox-swatches-menu"]
          },
          components: [{
            dom: {
              tag: "div",
              classes: ["tox-swatches"]
            },
            components: [gh.parts.items({
              preprocess: "auto" !== e ? ib({
                tag: "div",
                classes: ["tox-swatches__row"]
              }, e) : x
            })]
          }]
        };
      }(n);

      return {
        value: e,
        dom: _t20.dom,
        components: _t20.components,
        items: o
      };
    }

    if ("normal" === s && "auto" === n) {
      var _t21 = cb(n, o);

      return {
        value: e,
        dom: _t21.dom,
        components: _t21.components,
        items: o
      };
    }

    if ("normal" === s && 1 === n) {
      var _t22 = cb(1, o);

      return {
        value: e,
        dom: _t22.dom,
        components: _t22.components,
        items: o
      };
    }

    if ("normal" === s) {
      var _t23 = cb(n, o);

      return {
        value: e,
        dom: _t23.dom,
        components: _t23.components,
        items: o
      };
    }

    if ("listpreview" === s && "auto" !== n) {
      var _t24 = function (e) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-menu", "tox-collection", "tox-collection--toolbar", "tox-collection--toolbar-lg"]
          },
          components: [gh.parts.items({
            preprocess: ib({
              tag: "div",
              classes: ["tox-collection__group"]
            }, e)
          })]
        };
      }(n);

      return {
        value: e,
        dom: _t24.dom,
        components: _t24.components,
        items: o
      };
    }

    return {
      value: e,
      dom: sb(t, n, s),
      components: rb,
      items: o
    };
  },
      pb = qn("type"),
      hb = qn("name"),
      fb = qn("label"),
      bb = qn("text"),
      vb = qn("title"),
      yb = qn("icon"),
      xb = qn("value"),
      wb = Kn("fetch"),
      Sb = Kn("getSubmenuItems"),
      kb = Kn("onAction"),
      Cb = Kn("onItemAction"),
      Ob = gs("onSetup", function () {
    return b;
  }),
      _b = os("name"),
      Tb = os("text"),
      Eb = os("icon"),
      Bb = os("tooltip"),
      Mb = os("label"),
      Ab = os("shortcut"),
      Db = ss("select"),
      Fb = ms("active", !1),
      Ib = ms("borderless", !1),
      Rb = ms("enabled", !0),
      Vb = ms("primary", !1),
      zb = function zb(e) {
    return is("columns", e);
  },
      Hb = is("meta", {}),
      Pb = gs("onAction", b),
      Nb = function Nb(e) {
    return ds("type", e);
  },
      Lb = function Lb(e) {
    return Ln("name", "name", an(function () {
      return Kr("".concat(e, "-name"));
    }), En);
  },
      Wb = xn([pb, Tb]),
      Ub = xn([Nb("autocompleteitem"), Fb, Rb, Hb, xb, Tb, Eb]),
      jb = [Rb, Bb, Eb, Tb, Ob],
      Gb = xn([pb, kb].concat(jb)),
      $b = function $b(e) {
    return Vn("toolbarbutton", Gb, e);
  },
      qb = [Fb].concat(jb),
      Xb = xn(qb.concat([pb, kb])),
      Kb = function Kb(e) {
    return Vn("ToggleButton", Xb, e);
  },
      Yb = [gs("predicate", _), us("scope", "node", ["node", "editor"]), us("position", "selection", ["node", "selection", "line"])],
      Jb = jb.concat([Nb("contextformbutton"), Vb, kb, Wn("original", x)]),
      Zb = qb.concat([Nb("contextformbutton"), Vb, kb, Wn("original", x)]),
      Qb = jb.concat([Nb("contextformbutton")]),
      ev = qb.concat([Nb("contextformtogglebutton")]),
      tv = Nn("type", {
    contextformbutton: Jb,
    contextformtogglebutton: Zb
  }),
      ov = xn([Nb("contextform"), gs("initValue", y("")), Mb, Zn("commands", tv), es("launch", Nn("type", {
    contextformbutton: Qb,
    contextformtogglebutton: ev
  }))].concat(Yb)),
      nv = xn([Nb("contexttoolbar"), qn("items")].concat(Yb)),
      sv = [pb, qn("src"), os("alt"), ps("classes", [], En)],
      rv = xn(sv),
      av = [pb, bb, _b, ps("classes", ["tox-collection__item-label"], En)],
      iv = xn(av),
      lv = bn(function () {
    return Fn("type", {
      cardimage: rv,
      cardtext: iv,
      cardcontainer: cv
    });
  }),
      cv = xn([pb, ds("direction", "horizontal"), ds("align", "left"), ds("valign", "middle"), Zn("items", lv)]),
      dv = [Rb, Tb, Ab, ("menuitem", Ln("value", "value", an(function () {
    return Kr("menuitem-value");
  }), On())), Hb];

  var uv = xn([pb, Mb, Zn("items", lv), Ob, Pb].concat(dv)),
      mv = xn([pb, Fb, Eb].concat(dv)),
      gv = [pb, qn("fancytype"), Pb],
      pv = [is("initData", {})].concat(gv),
      hv = [hs("initData", {}, [ms("allowCustomColors", !0), rs("colors", On())])].concat(gv),
      fv = Nn("fancytype", {
    inserttable: pv,
    colorswatch: hv
  }),
      bv = xn([pb, Ob, Pb, Eb].concat(dv)),
      vv = xn([pb, Sb, Ob, Eb].concat(dv)),
      yv = xn([pb, Eb, Fb, Ob, kb].concat(dv)),
      xv = function xv(e, t, o) {
    var n = Dc(e.element, "." + o);

    if (n.length > 0) {
      var _e14 = $(n, function (e) {
        var o = e.dom.getBoundingClientRect().top,
            s = n[0].dom.getBoundingClientRect().top;
        return Math.abs(o - s) > t;
      }).getOr(n.length);

      return B.some({
        numColumns: _e14,
        numRows: Math.ceil(n.length / _e14)
      });
    }

    return B.none();
  },
      wv = function wv(e) {
    return function (e, t) {
      return cl([Fp(e, t)]);
    }(Kr("unnamed-events"), e);
  },
      Sv = Kr("tooltip.exclusive"),
      kv = Kr("tooltip.show"),
      Cv = Kr("tooltip.hide"),
      Ov = function Ov(e, t, o) {
    e.getSystem().broadcastOn([Sv], {});
  };

  var _v = Object.freeze({
    __proto__: null,
    hideAllExclusive: Ov,
    setComponents: function setComponents(e, t, o, n) {
      o.getTooltip().each(function (e) {
        e.getSystem().isConnected() && Dp.set(e, n);
      });
    }
  }),
      Tv = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      var o = function o(_o19) {
        t.getTooltip().each(function (n) {
          bd(n), e.onHide(_o19, n), t.clearTooltip();
        }), t.clearTimer();
      };

      return _r(q([[Br(kv, function (o) {
        t.resetTimer(function () {
          (function (o) {
            if (!t.isShowing()) {
              Ov(o);

              var _n29 = e.lazySink(o).getOrDie(),
                  _s22 = o.getSystem().build({
                dom: e.tooltipDom,
                components: e.tooltipComponents,
                events: _r("normal" === e.mode ? [Br(Rs(), function (e) {
                  xr(o, kv);
                }), Br(Fs(), function (e) {
                  xr(o, Cv);
                })] : []),
                behaviours: cl([Dp.config({})])
              });

              t.setTooltip(_s22), pd(_n29, _s22), e.onShow(o, _s22), id.position(_n29, _s22, {
                anchor: e.anchor(o)
              });
            }
          })(o);
        }, e.delay);
      }), Br(Cv, function (n) {
        t.resetTimer(function () {
          o(n);
        }, e.delay);
      }), Br(Zs(), function (e, t) {
        var n = t;
        n.universal || R(n.channels, Sv) && o(e);
      }), Hr(function (e) {
        o(e);
      })], "normal" === e.mode ? [Br(Vs(), function (e) {
        xr(e, kv);
      }), Br(Ys(), function (e) {
        xr(e, Cv);
      }), Br(Rs(), function (e) {
        xr(e, kv);
      }), Br(Fs(), function (e) {
        xr(e, Cv);
      })] : [Br(vr(), function (e, t) {
        xr(e, kv);
      }), Br(yr(), function (e) {
        xr(e, Cv);
      })]]));
    }
  }),
      Ev = [jn("lazySink"), jn("tooltipDom"), is("exclusive", !0), is("tooltipComponents", []), is("delay", 300), us("mode", "normal", ["normal", "follow-highlight"]), is("anchor", function (e) {
    return {
      type: "hotspot",
      hotspot: e,
      layouts: {
        onLtr: y([Ki, Xi, ji, $i, Gi, qi]),
        onRtl: y([Ki, Xi, ji, $i, Gi, qi])
      }
    };
  }), bi("onHide"), bi("onShow")];

  var Bv = ul({
    fields: Ev,
    name: "tooltipping",
    active: Tv,
    state: Object.freeze({
      __proto__: null,
      init: function init() {
        var e = Hl(),
            t = Hl(),
            o = function o() {
          e.on(clearTimeout);
        },
            n = y("not-implemented");

        return ga({
          getTooltip: t.get,
          isShowing: t.isSet,
          setTooltip: t.set,
          clearTooltip: t.clear,
          clearTimer: o,
          resetTimer: function resetTimer(t, n) {
            o(), e.set(setTimeout(t, n));
          },
          readState: n
        });
      }
    }),
    apis: _v
  }),
      Mv = "silver.readonly",
      Av = xn([("readonly", Gn("readonly", Bn))]);

  var Dv = function Dv(e, t) {
    var o = e.outerContainer.element;
    t && (e.mothership.broadcastOn([Fd()], {
      target: o
    }), e.uiMothership.broadcastOn([Fd()], {
      target: o
    })), e.mothership.broadcastOn([Mv], {
      readonly: t
    }), e.uiMothership.broadcastOn([Mv], {
      readonly: t
    });
  },
      Fv = function Fv(e, t) {
    e.on("init", function () {
      e.mode.isReadOnly() && Dv(t, !0);
    }), e.on("SwitchMode", function () {
      return Dv(t, e.mode.isReadOnly());
    }), jh(e) && e.mode.set("readonly");
  },
      Iv = function Iv() {
    return hl.config({
      channels: _defineProperty({}, Mv, {
        schema: Av,
        onReceive: function onReceive(e, t) {
          ym.set(e, t.readonly);
        }
      })
    });
  },
      Rv = function Rv(e) {
    return ym.config({
      disabled: e
    });
  },
      Vv = function Vv(e) {
    return ym.config({
      disabled: e,
      disableClass: "tox-tbtn--disabled"
    });
  },
      zv = function zv(e) {
    return ym.config({
      disabled: e,
      disableClass: "tox-tbtn--disabled",
      useNative: !1
    });
  },
      Hv = function Hv(e, t) {
    var o = e.getApi(t);
    return function (e) {
      e(o);
    };
  },
      Pv = function Pv(e, t) {
    return zr(function (o) {
      Hv(e, o)(function (o) {
        var n = e.onSetup(o);
        p(n) && t.set(n);
      });
    });
  },
      Nv = function Nv(e, t) {
    return Hr(function (o) {
      return Hv(e, o)(t.get());
    });
  },
      Lv = function Lv(e, t) {
    return Nr(function (o, n) {
      Hv(e, o)(e.onAction), e.triggersSubmenu || t !== Uf.CLOSE_ON_EXECUTE || (o.getSystem().isConnected() && xr(o, nr()), n.stop());
    });
  },
      Wv = _defineProperty({}, Qs(), ["disabling", "alloy.base.behaviour", "toggling", "item-events"]),
      Uv = we,
      jv = function jv(e, t, o, n) {
    var s = fs(b);
    return {
      type: "item",
      dom: t.dom,
      components: Uv(t.optComponents),
      data: e.data,
      eventOrder: Wv,
      hasSubmenu: e.triggersSubmenu,
      itemBehaviours: cl([Fp("item-events", [Lv(e, o), Pv(e, s), Nv(e, s)]), (r = function r() {
        return !e.enabled || n.isDisabled();
      }, ym.config({
        disabled: r,
        disableClass: "tox-collection__item--state-disabled"
      })), Iv(), Dp.config({})].concat(e.itemBehaviours))
    };
    var r;
  },
      Gv = function Gv(e) {
    return {
      value: e.value,
      meta: _objectSpread({
        text: e.text.getOr("")
      }, e.meta)
    };
  },
      $v = function $v(e) {
    var t = Nh.os.isMacOS() || Nh.os.isiOS(),
        o = t ? {
      alt: "\u2325",
      ctrl: "\u2303",
      shift: "\u21E7",
      meta: "\u2318",
      access: "\u2303\u2325"
    } : {
      meta: "Ctrl",
      access: "Shift+Alt"
    },
        n = e.split("+"),
        s = P(n, function (e) {
      var t = e.toLowerCase().trim();
      return ve(o, t) ? o[t] : e;
    });
    return t ? s.join("") : s.join("+");
  },
      qv = function qv(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [Xf];
    return Fh(e, {
      tag: "div",
      classes: o
    }, t);
  },
      Xv = function Xv(e) {
    return {
      dom: {
        tag: "div",
        classes: [Kf]
      },
      components: [La(Ch.translate(e))]
    };
  },
      Kv = function Kv(e, t) {
    return {
      dom: {
        tag: "div",
        classes: t,
        innerHtml: e
      }
    };
  },
      Yv = function Yv(e, t) {
    return {
      dom: {
        tag: "div",
        classes: [Kf]
      },
      components: [{
        dom: {
          tag: e.tag,
          styles: e.styles
        },
        components: [La(Ch.translate(t))]
      }]
    };
  },
      Jv = function Jv(e) {
    return {
      dom: {
        tag: "div",
        classes: ["tox-collection__item-accessory"]
      },
      components: [La($v(e))]
    };
  },
      Zv = function Zv(e) {
    return qv("checkmark", e, ["tox-collection__item-checkmark"]);
  },
      Qv = function Qv(e) {
    var t = e.map(function (e) {
      return {
        attributes: {
          title: Ch.translate(e)
        }
      };
    }).getOr({});
    return _objectSpread({
      tag: "div",
      classes: [jf, Gf]
    }, t);
  },
      ey = function ey(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : B.none();
    return "color" === e.presets ? function (e, t, o) {
      var n = e.ariaLabel,
          s = e.value,
          r = e.iconContent.map(function (e) {
        return function (e, t, o) {
          var n = t();
          return Bh(e, n).or(o).getOrThunk(Th(n));
        }(e, t.icons, o);
      });
      return {
        dom: function () {
          var e = r.getOr(""),
              o = n.map(function (e) {
            return {
              title: t.translate(e)
            };
          }).getOr({}),
              a = {
            tag: "div",
            attributes: o,
            classes: ["tox-swatch"]
          };
          return "custom" === s ? _objectSpread({}, a, {
            tag: "button",
            classes: [].concat(_toConsumableArray(a.classes), ["tox-swatches__picker-btn"]),
            innerHtml: e
          }) : "remove" === s ? _objectSpread({}, a, {
            classes: [].concat(_toConsumableArray(a.classes), ["tox-swatch--remove"]),
            innerHtml: e
          }) : _objectSpread({}, a, {
            attributes: _objectSpread({}, a.attributes, {
              "data-mce-color": s
            }),
            styles: {
              "background-color": s
            }
          });
        }(),
        optComponents: []
      };
    }(e, t, n) : function (e, t, o, n) {
      var s = {
        tag: "div",
        classes: [Xf]
      },
          r = o ? e.iconContent.map(function (e) {
        return Fh(e, s, t.icons, n);
      }).orThunk(function () {
        return B.some({
          dom: s
        });
      }) : B.none(),
          a = e.checkMark,
          i = B.from(e.meta).fold(function () {
        return Xv;
      }, function (e) {
        return ve(e, "style") ? S(Yv, e.style) : Xv;
      }),
          l = e.htmlContent.fold(function () {
        return e.textContent.map(i);
      }, function (e) {
        return B.some(Kv(e, [Kf]));
      });
      return {
        dom: Qv(e.ariaLabel),
        optComponents: [r, l, e.shortcutContent.map(Jv), a, e.caret]
      };
    }(e, t, o, n);
  },
      ty = function ty(e, t) {
    return be(e, "tooltipWorker").map(function (e) {
      return [Bv.config({
        lazySink: t.getSink,
        tooltipDom: {
          tag: "div",
          classes: ["tox-tooltip-worker-container"]
        },
        tooltipComponents: [],
        anchor: function anchor(e) {
          return {
            type: "submenu",
            item: e,
            overrides: {
              maxHeightFunction: Xl
            }
          };
        },
        mode: "follow-highlight",
        onShow: function onShow(t, o) {
          e(function (e) {
            Bv.setComponents(t, [Wa({
              element: Ie(e)
            })]);
          });
        }
      })];
    }).getOr([]);
  },
      oy = function oy(e, t) {
    var o = function (e) {
      return Hh.DOM.encode(e);
    }(Ch.translate(e));

    if (t.length > 0) {
      var _e15 = new RegExp(function (e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }(t), "gi");

      return o.replace(_e15, function (e) {
        return "<span class=\"tox-autocompleter-highlight\">".concat(e, "</span>");
      });
    }

    return o;
  },
      ny = function ny(e, t) {
    return P(e, function (e) {
      switch (e.type) {
        case "cardcontainer":
          return function (e, t) {
            var o = "vertical" === e.direction ? "tox-collection__item-container--column" : Qf,
                n = "left" === e.align ? "tox-collection__item-container--align-left" : "tox-collection__item-container--align-right";
            return {
              dom: {
                tag: "div",
                classes: [Zf, o, n, function () {
                  switch (e.valign) {
                    case "top":
                      return "tox-collection__item-container--valign-top";

                    case "middle":
                      return "tox-collection__item-container--valign-middle";

                    case "bottom":
                      return "tox-collection__item-container--valign-bottom";
                  }
                }()]
              },
              components: t
            };
          }(e, ny(e.items, t));

        case "cardimage":
          return function (e, t, o) {
            return {
              dom: {
                tag: "img",
                classes: t,
                attributes: {
                  src: e,
                  alt: o.getOr("")
                }
              }
            };
          }(e.src, e.classes, e.alt);

        case "cardtext":
          var _o20 = e.name.exists(function (e) {
            return R(t.cardText.highlightOn, e);
          }),
              _n30 = _o20 ? B.from(t.cardText.matchText).getOr("") : "";

          return Kv(oy(e.text, _n30), e.classes);
      }
    });
  },
      sy = Fu(ah(), ih()),
      ry = function ry(e) {
    return {
      value: e
    };
  },
      ay = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      iy = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
      ly = function ly(e) {
    return ay.test(e) || iy.test(e);
  },
      cy = function cy(e) {
    return (t = e, function (e, t) {
      return Ce(e, t, 0);
    }(t, "#") ? function (e, t) {
      return e.substring(t);
    }(t, "#".length) : t).toUpperCase();
    var t;
  },
      dy = function dy(e) {
    var t = e.toString(16);
    return (1 === t.length ? "0" + t : t).toUpperCase();
  },
      uy = function uy(e) {
    var t = dy(e.red) + dy(e.green) + dy(e.blue);
    return ry(t);
  },
      my = Math.min,
      gy = Math.max,
      py = Math.round,
      hy = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
      fy = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
      by = function by(e, t, o, n) {
    return {
      red: e,
      green: t,
      blue: o,
      alpha: n
    };
  },
      vy = function vy(e) {
    var t = parseInt(e, 10);
    return t.toString() === e && t >= 0 && t <= 255;
  },
      yy = function yy(e) {
    var t, o, n;
    var s = (e.hue || 0) % 360;
    var r = e.saturation / 100,
        a = e.value / 100;
    if (r = gy(0, my(r, 1)), a = gy(0, my(a, 1)), 0 === r) return t = o = n = py(255 * a), by(t, o, n, 1);
    var i = s / 60,
        l = a * r,
        c = l * (1 - Math.abs(i % 2 - 1)),
        d = a - l;

    switch (Math.floor(i)) {
      case 0:
        t = l, o = c, n = 0;
        break;

      case 1:
        t = c, o = l, n = 0;
        break;

      case 2:
        t = 0, o = l, n = c;
        break;

      case 3:
        t = 0, o = c, n = l;
        break;

      case 4:
        t = c, o = 0, n = l;
        break;

      case 5:
        t = l, o = 0, n = c;
        break;

      default:
        t = o = n = 0;
    }

    return t = py(255 * (t + d)), o = py(255 * (o + d)), n = py(255 * (n + d)), by(t, o, n, 1);
  },
      xy = function xy(e) {
    var t = function (e) {
      var t = function (e) {
        var t = e.value.replace(ay, function (e, t, o, n) {
          return t + t + o + o + n + n;
        });
        return {
          value: t
        };
      }(e),
          o = iy.exec(t.value);

      return null === o ? ["FFFFFF", "FF", "FF", "FF"] : o;
    }(e),
        o = parseInt(t[1], 16),
        n = parseInt(t[2], 16),
        s = parseInt(t[3], 16);

    return by(o, n, s, 1);
  },
      wy = function wy(e, t, o, n) {
    var s = parseInt(e, 10),
        r = parseInt(t, 10),
        a = parseInt(o, 10),
        i = parseFloat(n);
    return by(s, r, a, i);
  },
      Sy = function Sy(e) {
    if ("transparent" === e) return B.some(by(0, 0, 0, 0));
    var t = hy.exec(e);
    if (null !== t) return B.some(wy(t[1], t[2], t[3], "1"));
    var o = fy.exec(e);
    return null !== o ? B.some(wy(o[1], o[2], o[3], o[4])) : B.none();
  },
      ky = function ky(e) {
    return "rgba(".concat(e.red, ",").concat(e.green, ",").concat(e.blue, ",").concat(e.alpha, ")");
  },
      Cy = by(255, 0, 0, 1),
      Oy = function Oy(e, t) {
    return e.dispatch("ResizeContent", t);
  },
      _y = function _y(e, t, o) {
    return {
      hue: e,
      saturation: t,
      value: o
    };
  },
      Ty = function Ty(e) {
    var t = 0,
        o = 0,
        n = 0;
    var s = e.red / 255,
        r = e.green / 255,
        a = e.blue / 255,
        i = Math.min(s, Math.min(r, a)),
        l = Math.max(s, Math.max(r, a));
    return i === l ? (n = i, _y(0, 0, 100 * n)) : (t = s === i ? 3 : a === i ? 1 : 5, t = 60 * (t - (s === i ? r - a : a === i ? s - r : a - s) / (l - i)), o = (l - i) / l, n = l, _y(Math.round(t), Math.round(100 * o), Math.round(100 * n)));
  },
      Ey = function Ey(e) {
    return uy(yy(e));
  },
      By = function By(e) {
    return (t = e, ly(t) ? B.some({
      value: cy(t)
    }) : B.none()).orThunk(function () {
      return Sy(e).map(uy);
    }).getOrThunk(function () {
      var t = document.createElement("canvas");
      t.height = 1, t.width = 1;
      var o = t.getContext("2d");
      o.clearRect(0, 0, t.width, t.height), o.fillStyle = "#FFFFFF", o.fillStyle = e, o.fillRect(0, 0, 1, 1);
      var n = o.getImageData(0, 0, 1, 1).data,
          s = n[0],
          r = n[1],
          a = n[2],
          i = n[3];
      return uy(by(s, r, a, i));
    });
    var t;
  };

  var My = tinymce.util.Tools.resolve("tinymce.util.LocalStorage");

  var Ay = "tinymce-custom-colors",
      Dy = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var t = My.getItem(Ay),
        o = r(t) ? JSON.parse(t) : [],
        n = e - (s = o).length < 0 ? s.slice(0, e) : s;
    var s;

    var a = function a(e) {
      n.splice(e, 1);
    };

    return {
      add: function add(t) {
        I(n, t).each(a), n.unshift(t), n.length > e && n.pop(), My.setItem(Ay, JSON.stringify(n));
      },
      state: function state() {
        return n.slice(0);
      }
    };
  }(10),
      Fy = function Fy(e) {
    var t = [];

    for (var _o21 = 0; _o21 < e.length; _o21 += 2) {
      t.push({
        text: e[_o21 + 1],
        value: "#" + By(e[_o21]).value,
        type: "choiceitem"
      });
    }

    return t;
  },
      Iy = function Iy(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      Ry = Iy("color_cols"),
      Vy = Iy("custom_colors"),
      zy = Iy("color_map"),
      Hy = function Hy(e) {
    Dy.add(e);
  },
      Py = "#000000",
      Ny = function Ny(e) {
    var t = "choiceitem",
        o = {
      type: t,
      text: "Remove color",
      icon: "color-swatch-remove-color",
      value: "remove"
    };
    return e ? [o, {
      type: t,
      text: "Custom color",
      icon: "color-picker",
      value: "custom"
    }] : [o];
  },
      Ly = function Ly(e, t, o, n) {
    "custom" === o ? qy(e)(function (o) {
      o.each(function (o) {
        Hy(o), e.execCommand("mceApplyTextcolor", t, o), n(o);
      });
    }, Py) : "remove" === o ? (n(""), e.execCommand("mceRemoveTextcolor", t)) : (n(o), e.execCommand("mceApplyTextcolor", t, o));
  },
      Wy = function Wy(e, t) {
    return e.concat(P(Dy.state(), function (e) {
      return {
        type: "choiceitem",
        text: e,
        value: e
      };
    }).concat(Ny(t)));
  },
      Uy = function Uy(e, t) {
    return function (o) {
      o(Wy(e, t));
    };
  },
      jy = function jy(e, t, o) {
    var n = "forecolor" === t ? "tox-icon-text-color__color" : "tox-icon-highlight-bg-color__color";
    e.setIconFill(n, o);
  },
      Gy = function Gy(e, t, o, n, s) {
    e.ui.registry.addSplitButton(t, {
      tooltip: n,
      presets: "color",
      icon: "forecolor" === t ? "text-color" : "highlight-bg-color",
      select: function select(t) {
        var n = function (e, t) {
          var o;
          return e.dom.getParents(e.selection.getStart(), function (e) {
            var n;
            (n = e.style["forecolor" === t ? "color" : "background-color"]) && (o = o || n);
          }), B.from(o);
        }(e, o);

        return n.bind(function (e) {
          return Sy(e).map(function (e) {
            var o = uy(e).value;
            return Oe(t.toLowerCase(), o);
          });
        }).getOr(!1);
      },
      columns: Ry(e),
      fetch: Uy(zy(e), Vy(e)),
      onAction: function onAction(t) {
        Ly(e, o, s.get(), b);
      },
      onItemAction: function onItemAction(n, r) {
        Ly(e, o, r, function (o) {
          s.set(o), function (e, t) {
            e.dispatch("TextColorChange", t);
          }(e, {
            name: t,
            color: o
          });
        });
      },
      onSetup: function onSetup(o) {
        jy(o, t, s.get());

        var n = function n(e) {
          e.name === t && jy(o, e.name, e.color);
        };

        return e.on("TextColorChange", n), function () {
          e.off("TextColorChange", n);
        };
      }
    });
  },
      $y = function $y(e, t, o, n) {
    e.ui.registry.addNestedMenuItem(t, {
      text: n,
      icon: "forecolor" === t ? "text-color" : "highlight-bg-color",
      getSubmenuItems: function getSubmenuItems() {
        return [{
          type: "fancymenuitem",
          fancytype: "colorswatch",
          onAction: function onAction(t) {
            Ly(e, o, t.value, b);
          }
        }];
      }
    });
  },
      qy = function qy(e) {
    return function (t, o) {
      var n = !1;
      var s = {
        colorpicker: o
      };
      e.windowManager.open({
        title: "Color Picker",
        size: "normal",
        body: {
          type: "panel",
          items: [{
            type: "colorpicker",
            name: "colorpicker",
            label: "Color"
          }]
        },
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
        initialData: s,
        onAction: function onAction(e, t) {
          "hex-valid" === t.name && (n = t.value);
        },
        onSubmit: function onSubmit(o) {
          var s = o.getData().colorpicker;
          n ? (t(B.from(s)), o.close()) : e.windowManager.alert(e.translate(["Invalid hex color code: {0}", s]));
        },
        onClose: b,
        onCancel: function onCancel() {
          t(B.none());
        }
      });
    };
  },
      Xy = function Xy(e, t, o, n, s, r, a, i) {
    var l = db(t),
        c = Ky(t, o, n, "color" !== s ? "normal" : "color", r, a, i);
    return gb(e, l, c, n, s);
  },
      Ky = function Ky(e, t, o, n, s, r, a) {
    return we(P(e, function (i) {
      return "choiceitem" === i.type ? (l = i, Vn("choicemenuitem", mv, l)).fold(ub, function (l) {
        return B.some(function (e, t, o, n, s, r, a) {
          var i = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
          var l = ey({
            presets: o,
            textContent: t ? e.text : B.none(),
            htmlContent: B.none(),
            ariaLabel: e.text,
            iconContent: e.icon,
            shortcutContent: t ? e.shortcut : B.none(),
            checkMark: t ? B.some(Zv(a.icons)) : B.none(),
            caret: B.none(),
            value: e.value
          }, a, i);
          return sn(jv({
            data: Gv(e),
            enabled: e.enabled,
            getApi: function getApi(e) {
              return {
                setActive: function setActive(t) {
                  $p.set(e, t);
                },
                isActive: function isActive() {
                  return $p.isOn(e);
                },
                isEnabled: function isEnabled() {
                  return !ym.isDisabled(e);
                },
                setEnabled: function setEnabled(t) {
                  return ym.set(e, !t);
                }
              };
            },
            onAction: function onAction(t) {
              return n(e.value);
            },
            onSetup: function onSetup(e) {
              return e.setActive(s), b;
            },
            triggersSubmenu: !1,
            itemBehaviours: []
          }, l, r, a), {
            toggling: {
              toggleClass: qf,
              toggleOnExecute: !1,
              selected: e.active,
              exclusive: !0
            }
          });
        }(l, 1 === o, n, t, r(i.value), s, a, db(e)));
      }) : B.none();
      var l;
    }));
  },
      Yy = function Yy(e, t) {
    var o = nb(t);
    return 1 === e ? {
      mode: "menu",
      moveOnTab: !0
    } : "auto" === e ? {
      mode: "grid",
      selector: "." + o.item,
      initSize: {
        numColumns: 1,
        numRows: 1
      }
    } : {
      mode: "matrix",
      rowSelector: "." + ("color" === t ? "tox-swatches__row" : "tox-collection__group")
    };
  },
      Jy = Kr("cell-over"),
      Zy = Kr("cell-execute"),
      Qy = function Qy(e, t, o) {
    var n = function n(o) {
      return wr(o, Zy, {
        row: e,
        col: t
      });
    },
        s = function s(e, t) {
      t.stop(), n(e);
    };

    return Ga({
      dom: {
        tag: "div",
        attributes: {
          role: "button",
          "aria-labelledby": o
        }
      },
      behaviours: cl([Fp("insert-table-picker-cell", [Br(Rs(), Hp.focus), Br(Qs(), n), Br(Ws(), s), Br(tr(), s)]), $p.config({
        toggleClass: "tox-insert-table-picker__selected",
        toggleOnExecute: !1
      }), Hp.config({
        onFocus: function onFocus(o) {
          return wr(o, Jy, {
            row: e,
            col: t
          });
        }
      })])
    });
  },
      ex = function ex(e) {
    return X(e, function (e) {
      return P(e, $a);
    });
  },
      tx = function tx(e, t) {
    return La("".concat(t, "x").concat(e));
  },
      ox = {
    inserttable: function inserttable(e) {
      var t = Kr("size-label"),
          o = function (e, t, o) {
        var n = [];

        for (var _t25 = 0; _t25 < 10; _t25++) {
          var _o22 = [];

          for (var _n31 = 0; _n31 < 10; _n31++) {
            _o22.push(Qy(_t25, _n31, e));
          }

          n.push(_o22);
        }

        return n;
      }(t),
          n = tx(0, 0),
          s = kh({
        dom: {
          tag: "span",
          classes: ["tox-insert-table-picker__label"],
          attributes: {
            id: t
          }
        },
        components: [n],
        behaviours: cl([Dp.config({})])
      });

      return {
        type: "widget",
        data: {
          value: Kr("widget-id")
        },
        dom: {
          tag: "div",
          classes: ["tox-fancymenuitem"]
        },
        autofocus: !0,
        components: [sy.widget({
          dom: {
            tag: "div",
            classes: ["tox-insert-table-picker"]
          },
          components: ex(o).concat(s.asSpec()),
          behaviours: cl([Fp("insert-table-picker", [zr(function (e) {
            Dp.set(s.get(e), [n]);
          }), Fr(Jy, function (e, t, n) {
            var _n$event = n.event,
                r = _n$event.row,
                a = _n$event.col;
            (function (e, t, o, n, s) {
              for (var _n32 = 0; _n32 < 10; _n32++) {
                for (var _s23 = 0; _s23 < 10; _s23++) {
                  $p.set(e[_n32][_s23], _n32 <= t && _s23 <= o);
                }
              }
            })(o, r, a), Dp.set(s.get(e), [tx(r + 1, a + 1)]);
          }), Fr(Zy, function (t, o, n) {
            var _n$event2 = n.event,
                s = _n$event2.row,
                r = _n$event2.col;
            e.onAction({
              numRows: s + 1,
              numColumns: r + 1
            }), xr(t, nr());
          })]), kp.config({
            initSize: {
              numRows: 10,
              numColumns: 10
            },
            mode: "flatgrid",
            selector: '[role="button"]'
          })])
        })]
      };
    },
    colorswatch: function colorswatch(e, t) {
      var o = function (e, t) {
        var o = e.initData.allowCustomColors && t.colorinput.hasCustomColors();
        return e.initData.colors.fold(function () {
          return Wy(t.colorinput.getColors(), o);
        }, function (e) {
          return e.concat(Ny(o));
        });
      }(e, t),
          n = t.colorinput.getColorCols(),
          s = "color",
          r = _objectSpread({}, Xy(Kr("menu-value"), o, function (t) {
        e.onAction({
          value: t
        });
      }, n, s, Uf.CLOSE_ON_EXECUTE, _, t.shared.providers), {
        markers: nb(s),
        movement: Yy(n, s)
      });

      return {
        type: "widget",
        data: {
          value: Kr("widget-id")
        },
        dom: {
          tag: "div",
          classes: ["tox-fancymenuitem"]
        },
        autofocus: !0,
        components: [sy.widget(gh.sketch(r))]
      };
    }
  },
      nx = function nx(e) {
    return {
      type: "separator",
      dom: {
        tag: "div",
        classes: [Gf, "tox-collection__group-heading"]
      },
      components: e.text.map(La).toArray()
    };
  };

  var sx;
  !function (e) {
    e[e.ContentFocus = 0] = "ContentFocus", e[e.UiFocus = 1] = "UiFocus";
  }(sx || (sx = {}));

  var rx = function rx(e, t, o, n, s) {
    var r = o.shared.providers,
        a = function a(e) {
      return s ? _objectSpread({}, e, {
        shortcut: B.none(),
        icon: e.text.isSome() ? B.none() : e.icon
      }) : e;
    };

    switch (e.type) {
      case "menuitem":
        return (i = e, Vn("menuitem", bv, i)).fold(ub, function (e) {
          return B.some(function (e, t, o) {
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var s = ey({
              presets: "normal",
              iconContent: e.icon,
              textContent: e.text,
              htmlContent: B.none(),
              ariaLabel: e.text,
              caret: B.none(),
              checkMark: B.none(),
              shortcutContent: e.shortcut
            }, o, n);
            return jv({
              data: Gv(e),
              getApi: function getApi(e) {
                return {
                  isEnabled: function isEnabled() {
                    return !ym.isDisabled(e);
                  },
                  setEnabled: function setEnabled(t) {
                    return ym.set(e, !t);
                  }
                };
              },
              enabled: e.enabled,
              onAction: e.onAction,
              onSetup: e.onSetup,
              triggersSubmenu: !1,
              itemBehaviours: []
            }, s, t, o);
          }(a(e), t, r, n));
        });

      case "nestedmenuitem":
        return function (e) {
          return Vn("nestedmenuitem", vv, e);
        }(e).fold(ub, function (e) {
          return B.some(function (e, t, o) {
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            var r = s ? (a = o.icons, qv("chevron-down", a, [Yf])) : function (e) {
              return qv("chevron-right", e, [Yf]);
            }(o.icons);
            var a;
            var i = ey({
              presets: "normal",
              iconContent: e.icon,
              textContent: e.text,
              htmlContent: B.none(),
              ariaLabel: e.text,
              caret: B.some(r),
              checkMark: B.none(),
              shortcutContent: e.shortcut
            }, o, n);
            return jv({
              data: Gv(e),
              getApi: function getApi(e) {
                return {
                  isEnabled: function isEnabled() {
                    return !ym.isDisabled(e);
                  },
                  setEnabled: function setEnabled(t) {
                    return ym.set(e, !t);
                  }
                };
              },
              enabled: e.enabled,
              onAction: b,
              onSetup: e.onSetup,
              triggersSubmenu: !0,
              itemBehaviours: []
            }, i, t, o);
          }(a(e), t, r, n, s));
        });

      case "togglemenuitem":
        return function (e) {
          return Vn("togglemenuitem", yv, e);
        }(e).fold(ub, function (e) {
          return B.some(function (e, t, o) {
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var s = ey({
              iconContent: e.icon,
              textContent: e.text,
              htmlContent: B.none(),
              ariaLabel: e.text,
              checkMark: B.some(Zv(o.icons)),
              caret: B.none(),
              shortcutContent: e.shortcut,
              presets: "normal",
              meta: e.meta
            }, o, n);
            return sn(jv({
              data: Gv(e),
              enabled: e.enabled,
              getApi: function getApi(e) {
                return {
                  setActive: function setActive(t) {
                    $p.set(e, t);
                  },
                  isActive: function isActive() {
                    return $p.isOn(e);
                  },
                  isEnabled: function isEnabled() {
                    return !ym.isDisabled(e);
                  },
                  setEnabled: function setEnabled(t) {
                    return ym.set(e, !t);
                  }
                };
              },
              onAction: e.onAction,
              onSetup: e.onSetup,
              triggersSubmenu: !1,
              itemBehaviours: []
            }, s, t, o), {
              toggling: {
                toggleClass: qf,
                toggleOnExecute: !1,
                selected: e.active
              }
            });
          }(a(e), t, r, n));
        });

      case "separator":
        return function (e) {
          return Vn("separatormenuitem", Wb, e);
        }(e).fold(ub, function (e) {
          return B.some(nx(e));
        });

      case "fancymenuitem":
        return function (e) {
          return Vn("fancymenuitem", fv, e);
        }(e).fold(ub, function (e) {
          return function (e, t) {
            return be(ox, e.fancytype).map(function (o) {
              return o(e, t);
            });
          }(a(e), o);
        });

      default:
        return console.error("Unknown item in general menu", e), B.none();
    }

    var i;
  },
      ax = function ax(e, t, o, n, s, r, a) {
    var i = 1 === n,
        l = !i || db(e);
    return we(P(e, function (e) {
      switch (e.type) {
        case "separator":
          return (n = e, Vn("Autocompleter.Separator", Wb, n)).fold(ub, function (e) {
            return B.some(nx(e));
          });

        case "cardmenuitem":
          return function (e) {
            return Vn("cardmenuitem", uv, e);
          }(e).fold(ub, function (e) {
            return B.some(function (e, t, o, n) {
              var s = {
                dom: Qv(e.label),
                optComponents: [B.some({
                  dom: {
                    tag: "div",
                    classes: [Zf, Qf]
                  },
                  components: ny(e.items, n)
                })]
              };
              return jv({
                data: Gv(_objectSpread({
                  text: B.none()
                }, e)),
                enabled: e.enabled,
                getApi: function getApi(e) {
                  return {
                    isEnabled: function isEnabled() {
                      return !ym.isDisabled(e);
                    },
                    setEnabled: function setEnabled(t) {
                      ym.set(e, !t), N(Dc(e.element, "*"), function (o) {
                        e.getSystem().getByDom(o).each(function (e) {
                          e.hasConfigured(ym) && ym.set(e, !t);
                        });
                      });
                    }
                  };
                },
                onAction: e.onAction,
                onSetup: e.onSetup,
                triggersSubmenu: !1,
                itemBehaviours: B.from(n.itemBehaviours).getOr([])
              }, s, t, o.providers);
            }(_objectSpread({}, e, {
              onAction: function onAction(t) {
                e.onAction(t), o(e.value, e.meta);
              }
            }), s, r, {
              itemBehaviours: ty(e.meta, r),
              cardText: {
                matchText: t,
                highlightOn: a
              }
            }));
          });

        default:
          return function (e) {
            return Vn("Autocompleter.Item", Ub, e);
          }(e).fold(ub, function (e) {
            return B.some(function (e, t, o, n, s, r, a) {
              var i = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
              var l = ey({
                presets: n,
                textContent: B.none(),
                htmlContent: o ? e.text.map(function (e) {
                  return oy(e, t);
                }) : B.none(),
                ariaLabel: e.text,
                iconContent: e.icon,
                shortcutContent: B.none(),
                checkMark: B.none(),
                caret: B.none(),
                value: e.value
              }, a.providers, i, e.icon);
              return jv({
                data: Gv(e),
                enabled: e.enabled,
                getApi: y({}),
                onAction: function onAction(t) {
                  return s(e.value, e.meta);
                },
                onSetup: y(b),
                triggersSubmenu: !1,
                itemBehaviours: ty(e.meta, a)
              }, l, r, a.providers);
            }(e, t, i, "normal", o, s, r, l));
          });
      }

      var n;
    }));
  },
      ix = function ix(e, t, o, n, s) {
    var r = db(t),
        a = we(P(t, function (e) {
      var t = function t(e) {
        return rx(e, o, n, function (e) {
          return s ? !ve(e, "text") : r;
        }(e), s);
      };

      return "nestedmenuitem" === e.type && e.getSubmenuItems().length <= 0 ? t(_objectSpread({}, e, {
        enabled: !1
      })) : t(e);
    }));
    return (s ? mb : gb)(e, r, a, 1, "normal");
  },
      lx = function lx(e) {
    return yh.singleData(e.value, e);
  },
      cx = function cx(e, t) {
    var o = fs(!1),
        n = fs(!1),
        s = Ga(xh.sketch({
      dom: {
        tag: "div",
        classes: ["tox-autocompleter"]
      },
      components: [],
      fireDismissalEventInstead: {},
      inlineBehaviours: cl([Fp("dismissAutocompleter", [Br(mr(), function () {
        return c();
      })])]),
      lazySink: t.getSink
    })),
        r = function r() {
      return xh.isOpen(s);
    },
        a = n.get,
        i = function i() {
      r() && xh.hide(s);
    },
        l = function l() {
      return xh.getContent(s).bind(function (e) {
        return te(e.components(), 0);
      });
    },
        c = function c() {
      return e.execCommand("mceAutocompleterClose");
    },
        d = function d(n) {
      var r = function (n) {
        var s = re(n, function (e) {
          return B.from(e.columns);
        }).getOr(1);
        return X(n, function (n) {
          var r = n.items;
          return ax(r, n.matchText, function (t, s) {
            var r = e.selection.getRng();
            (function (e, t) {
              return Lf(Ie(t.startContainer)).map(function (t) {
                var o = e.createRng();
                return o.selectNode(t.dom), o;
              });
            })(e.dom, r).each(function (r) {
              var a = {
                hide: function hide() {
                  return c();
                },
                reload: function reload(t) {
                  i(), e.execCommand("mceAutocompleterReload", !1, {
                    fetchOptions: t
                  });
                }
              };
              o.set(!0), n.onAction(a, r, t, s), o.set(!1);
            });
          }, s, Uf.BUBBLE_TO_SANDBOX, t, n.highlightOn);
        });
      }(n);

      r.length > 0 ? function (t, o) {
        var n;
        (n = Ie(e.getBody()), ei(n, Nf)).each(function (n) {
          var r = re(t, function (e) {
            return B.from(e.columns);
          }).getOr(1);
          xh.showMenuAt(s, {
            anchor: {
              type: "node",
              root: Ie(e.getBody()),
              node: B.from(n)
            }
          }, function (e, t, o, n) {
            var s = Yy(t, n),
                r = nb(n);
            return {
              data: lx(_objectSpread({}, e, {
                movement: s,
                menuBehaviours: wv("auto" !== t ? [] : [zr(function (e, t) {
                  xv(e, 4, r.item).each(function (_ref8) {
                    var t = _ref8.numColumns,
                        o = _ref8.numRows;
                    kp.setGridSize(e, o, t);
                  });
                })])
              })),
              menu: {
                markers: nb(n),
                fakeFocus: o === sx.ContentFocus
              }
            };
          }(gb("autocompleter-value", !0, o, r, "normal"), r, sx.ContentFocus, "normal"));
        }), l().each(Bm.highlightFirst);
      }(n, r) : i();
    };

    e.on("AutocompleterStart", function (_ref9) {
      var e = _ref9.lookupData;
      n.set(!0), o.set(!1), d(e);
    }), e.on("AutocompleterUpdate", function (_ref10) {
      var e = _ref10.lookupData;
      return d(e);
    }), e.on("AutocompleterEnd", function () {
      i(), n.set(!1), o.set(!1);
    });

    (function (e, t) {
      var o = function o(e, t) {
        wr(e, Hs(), {
          raw: t
        });
      },
          n = function n() {
        return e.getMenu().bind(Bm.getHighlighted);
      };

      t.on("keydown", function (t) {
        var s = t.which;
        e.isActive() && (e.isMenuOpen() ? 13 === s ? (n().each(Sr), t.preventDefault()) : 40 === s ? (n().fold(function () {
          e.getMenu().each(Bm.highlightFirst);
        }, function (e) {
          o(e, t);
        }), t.preventDefault(), t.stopImmediatePropagation()) : 37 !== s && 38 !== s && 39 !== s || n().each(function (e) {
          o(e, t), t.preventDefault(), t.stopImmediatePropagation();
        }) : 13 !== s && 38 !== s && 40 !== s || e.cancelIfNecessary());
      }), t.on("NodeChange", function (t) {
        e.isActive() && !e.isProcessingAction() && Lf(Ie(t.element)).isNone() && e.cancelIfNecessary();
      });
    })({
      cancelIfNecessary: c,
      isMenuOpen: r,
      isActive: a,
      isProcessingAction: o.get,
      getMenu: l
    }, e);
  },
      dx = function dx(e, t, o) {
    return ti(e, t, o).isSome();
  },
      ux = function ux(e, t) {
    var o = null;
    return {
      cancel: function cancel() {
        null !== o && (clearTimeout(o), o = null);
      },
      schedule: function schedule() {
        for (var _len14 = arguments.length, n = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
          n[_key14] = arguments[_key14];
        }

        o = setTimeout(function () {
          e.apply(null, n), o = null;
        }, t);
      }
    };
  },
      mx = function mx(e) {
    var t = e.raw;
    return void 0 === t.touches || 1 !== t.touches.length ? B.none() : B.some(t.touches[0]);
  },
      gx = function gx(e, t) {
    var o = _objectSpread({
      stopBackspace: !0
    }, t),
        n = function (e) {
      var t = Hl(),
          o = fs(!1),
          n = ux(function (t) {
        e.triggerEvent(or(), t), o.set(!0);
      }, 400),
          s = ys([{
        key: Ts(),
        value: function value(e) {
          return mx(e).each(function (s) {
            n.cancel();
            var r = {
              x: s.clientX,
              y: s.clientY,
              target: e.target
            };
            n.schedule(e), o.set(!1), t.set(r);
          }), B.none();
        }
      }, {
        key: Es(),
        value: function value(e) {
          return n.cancel(), mx(e).each(function (e) {
            t.on(function (o) {
              (function (e, t) {
                var o = Math.abs(e.clientX - t.x),
                    n = Math.abs(e.clientY - t.y);
                return o > 5 || n > 5;
              })(e, o) && t.clear();
            });
          }), B.none();
        }
      }, {
        key: Bs(),
        value: function value(s) {
          return n.cancel(), t.get().filter(function (e) {
            return Ge(e.target, s.target);
          }).map(function (t) {
            return o.get() ? (s.prevent(), !1) : e.triggerEvent(tr(), s);
          });
        }
      }]);
      return {
        fireIfReady: function fireIfReady(e, t) {
          return be(s, t).bind(function (t) {
            return t(e);
          });
        }
      };
    }(o),
        s = P(["touchstart", "touchmove", "touchend", "touchcancel", "gesturestart", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout", "click"].concat(["selectstart", "input", "contextmenu", "change", "transitionend", "transitioncancel", "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop", "keyup"]), function (t) {
      return Nl(e, t, function (e) {
        n.fireIfReady(e, t).each(function (t) {
          t && e.kill();
        }), o.triggerEvent(t, e) && e.kill();
      });
    }),
        r = Hl(),
        a = Nl(e, "paste", function (e) {
      n.fireIfReady(e, "paste").each(function (t) {
        t && e.kill();
      }), o.triggerEvent("paste", e) && e.kill(), r.set(setTimeout(function () {
        o.triggerEvent(Js(), e);
      }, 0));
    }),
        i = Nl(e, "keydown", function (e) {
      o.triggerEvent("keydown", e) ? e.kill() : o.stopBackspace && function (e) {
        return e.raw.which === Mm[0] && !R(["input", "textarea"], Ve(e.target)) && !dx(e.target, '[contenteditable="true"]');
      }(e) && e.prevent();
    }),
        l = Nl(e, "focusin", function (e) {
      o.triggerEvent("focusin", e) && e.kill();
    }),
        c = Hl(),
        d = Nl(e, "focusout", function (e) {
      o.triggerEvent("focusout", e) && e.kill(), c.set(setTimeout(function () {
        o.triggerEvent(Ys(), e);
      }, 0));
    });

    return {
      unbind: function unbind() {
        N(s, function (e) {
          e.unbind();
        }), i.unbind(), l.unbind(), d.unbind(), a.unbind(), r.on(clearTimeout), c.on(clearTimeout);
      }
    };
  },
      px = function px(e, t) {
    var o = be(e, "target").getOr(t);
    return fs(o);
  },
      hx = bs([{
    stopped: []
  }, {
    resume: ["element"]
  }, {
    complete: []
  }]),
      fx = function fx(e, t, o, n, s, r) {
    var a = e(t, n),
        i = function (e, t) {
      var o = fs(!1),
          n = fs(!1);
      return {
        stop: function stop() {
          o.set(!0);
        },
        cut: function cut() {
          n.set(!0);
        },
        isStopped: o.get,
        isCut: n.get,
        event: e,
        setSource: t.set,
        getSource: t.get
      };
    }(o, s);

    return a.fold(function () {
      return r.logEventNoHandlers(t, n), hx.complete();
    }, function (e) {
      var o = e.descHandler;
      return fa(o)(i), i.isStopped() ? (r.logEventStopped(t, e.element, o.purpose), hx.stopped()) : i.isCut() ? (r.logEventCut(t, e.element, o.purpose), hx.complete()) : Je(e.element).fold(function () {
        return r.logNoParent(t, e.element, o.purpose), hx.complete();
      }, function (n) {
        return r.logEventResponse(t, e.element, o.purpose), hx.resume(n);
      });
    });
  },
      bx = function bx(e, t, o, n, s, r) {
    return fx(e, t, o, n, s, r).fold(T, function (n) {
      return bx(e, t, o, n, s, r);
    }, _);
  },
      vx = function vx(e, t, o, n, s) {
    var r = px(o, n);
    return bx(e, t, o, n, r, s);
  },
      yx = function yx() {
    var e = function () {
      var e = {};
      return {
        registerId: function registerId(t, o, n) {
          le(n, function (n, s) {
            var r = void 0 !== e[s] ? e[s] : {};
            r[o] = function (e, t) {
              return {
                cHandler: S.apply(void 0, [e.handler].concat(t)),
                purpose: e.purpose
              };
            }(n, t), e[s] = r;
          });
        },
        unregisterId: function unregisterId(t) {
          le(e, function (e, o) {
            ve(e, t) && delete e[t];
          });
        },
        filterByType: function filterByType(t) {
          return be(e, t).map(function (e) {
            return pe(e, function (e, t) {
              return function (e, t) {
                return {
                  id: e,
                  descHandler: t
                };
              }(t, e);
            });
          }).getOr([]);
        },
        find: function find(t, o, n) {
          return be(e, o).bind(function (e) {
            return Ss(n, function (t) {
              return function (e, t) {
                return ta(t).bind(function (t) {
                  return be(e, t);
                }).map(function (e) {
                  return function (e, t) {
                    return {
                      element: e,
                      descHandler: t
                    };
                  }(t, e);
                });
              }(e, t);
            }, t);
          });
        }
      };
    }(),
        t = {},
        o = function o(_o23) {
      ta(_o23.element).each(function (o) {
        delete t[o], e.unregisterId(o);
      });
    };

    return {
      find: function find(t, o, n) {
        return e.find(t, o, n);
      },
      filter: function filter(t) {
        return e.filterByType(t);
      },
      register: function register(n) {
        var s = function (e) {
          var t = e.element;
          return ta(t).getOrThunk(function () {
            return function (e, t) {
              var o = Kr(Zr + "uid-");
              return ea(t, o), o;
            }(0, e.element);
          });
        }(n);

        ye(t, s) && function (e, n) {
          var s = t[n];
          if (s !== e) throw new Error('The tagId "' + n + '" is already used by: ' + jr(s.element) + "\nCannot use it for: " + jr(e.element) + "\nThe conflicting element is" + (ut(s.element) ? " " : " not ") + "already in the DOM");
          o(e);
        }(n, s);
        var r = [n];
        e.registerId(r, s, n.events), t[s] = n;
      },
      unregister: o,
      getById: function getById(e) {
        return be(t, e);
      }
    };
  },
      xx = em({
    name: "Container",
    factory: function factory(e) {
      var _e$dom = e.dom,
          t = _e$dom.attributes,
          o = _objectWithoutProperties(_e$dom, ["attributes"]);

      return {
        uid: e.uid,
        dom: _objectSpread({
          tag: "div",
          attributes: _objectSpread({
            role: "presentation"
          }, t)
        }, o),
        components: e.components,
        behaviours: eu(e.containerBehaviours),
        events: e.events,
        domModification: e.domModification,
        eventOrder: e.eventOrder
      };
    },
    configFields: [is("components", []), Qd("containerBehaviours", []), is("events", {}), is("domModification", {}), is("eventOrder", {})]
  }),
      wx = function wx(e) {
    var t = function t(_t26) {
      return Je(e.element).fold(T, function (e) {
        return Ge(_t26, e);
      });
    },
        o = yx(),
        n = function n(e, _n33) {
      return o.find(t, e, _n33);
    },
        s = gx(e.element, {
      triggerEvent: function triggerEvent(e, t) {
        return li(e, t.target, function (o) {
          return function (e, t, o, n) {
            return vx(e, t, o, o.target, n);
          }(n, e, t, o);
        });
      }
    }),
        r = {
      debugInfo: y("real"),
      triggerEvent: function triggerEvent(e, t, o) {
        li(e, t, function (s) {
          return vx(n, e, o, t, s);
        });
      },
      triggerFocus: function triggerFocus(e, t) {
        ta(e).fold(function () {
          bl(e);
        }, function (o) {
          li(Ks(), e, function (o) {
            return function (e, t, o, n, s) {
              var r = px(o, n);
              fx(e, t, o, n, r, s);
            }(n, Ks(), {
              originator: t,
              kill: b,
              prevent: b,
              target: e
            }, e, o), !1;
          });
        });
      },
      triggerEscape: function triggerEscape(e, t) {
        r.triggerEvent("keydown", e.element, t.event);
      },
      getByUid: function getByUid(e) {
        return p(e);
      },
      getByDom: function getByDom(e) {
        return h(e);
      },
      build: Ga,
      buildOrPatch: ja,
      addToGui: function addToGui(e) {
        l(e);
      },
      removeFromGui: function removeFromGui(e) {
        c(e);
      },
      addToWorld: function addToWorld(e) {
        a(e);
      },
      removeFromWorld: function removeFromWorld(e) {
        i(e);
      },
      broadcast: function broadcast(e) {
        u(e);
      },
      broadcastOn: function broadcastOn(e, t) {
        m(e, t);
      },
      broadcastEvent: function broadcastEvent(e, t) {
        g(e, t);
      },
      isConnected: T
    },
        a = function a(e) {
      e.connect(r), Pe(e.element) || (o.register(e), N(e.components(), a), r.triggerEvent(rr(), e.element, {
        target: e.element
      }));
    },
        i = function i(e) {
      Pe(e.element) || (N(e.components(), i), o.unregister(e)), e.disconnect();
    },
        l = function l(t) {
      pd(e, t);
    },
        c = function c(e) {
      bd(e);
    },
        d = function d(e) {
      var t = o.filter(Zs());
      N(t, function (t) {
        var o = t.descHandler;
        fa(o)(e);
      });
    },
        u = function u(e) {
      d({
        universal: !0,
        data: e
      });
    },
        m = function m(e, t) {
      d({
        universal: !1,
        channels: e,
        data: t
      });
    },
        g = function g(e, t) {
      return function (e, t, o) {
        var n = function (e) {
          var t = fs(!1);
          return {
            stop: function stop() {
              t.set(!0);
            },
            cut: b,
            isStopped: t.get,
            isCut: _,
            event: e,
            setSource: C("Cannot set source of a broadcasted event"),
            getSource: C("Cannot get source of a broadcasted event")
          };
        }(t);

        return N(e, function (e) {
          var t = e.descHandler;
          fa(t)(n);
        }), n.isStopped();
      }(o.filter(e), t);
    },
        p = function p(e) {
      return o.getById(e).fold(function () {
        return qo.error(new Error('Could not find component with uid: "' + e + '" in system.'));
      }, qo.value);
    },
        h = function h(e) {
      var t = ta(e).getOr("not found");
      return p(t);
    };

    return a(e), {
      root: e,
      element: e.element,
      destroy: function destroy() {
        s.unbind(), Do(e.element);
      },
      add: l,
      remove: c,
      getByUid: p,
      getByDom: h,
      addToWorld: a,
      removeFromWorld: i,
      broadcast: u,
      broadcastOn: m,
      broadcastEvent: g
    };
  },
      Sx = y([is("prefix", "form-field"), Qd("fieldBehaviours", [rm, Zd])]),
      kx = y([Eu({
    schema: [jn("dom")],
    name: "label"
  }), Eu({
    factory: {
      sketch: function sketch(e) {
        return {
          uid: e.uid,
          dom: {
            tag: "span",
            styles: {
              display: "none"
            },
            attributes: {
              "aria-hidden": "true"
            },
            innerHtml: e.text
          }
        };
      }
    },
    schema: [jn("text")],
    name: "aria-descriptor"
  }), _u({
    factory: {
      sketch: function sketch(e) {
        var t = function (e, t) {
          var o = {};
          return le(e, function (e, n) {
            R(t, n) || (o[n] = e);
          }), o;
        }(e, ["factory"]);

        return e.factory.sketch(t);
      }
    },
    schema: [jn("factory")],
    name: "field"
  })]),
      Cx = tm({
    name: "FormField",
    configFields: Sx(),
    partFields: kx(),
    factory: function factory(e, t, o, n) {
      var s = tu(e.fieldBehaviours, [rm.config({
        find: function find(t) {
          return Nu(t, e, "field");
        }
      }), Zd.config({
        store: {
          mode: "manual",
          getValue: function getValue(e) {
            return rm.getCurrent(e).bind(Zd.getValue);
          },
          setValue: function setValue(e, t) {
            rm.getCurrent(e).each(function (e) {
              Zd.setValue(e, t);
            });
          }
        }
      })]),
          r = _r([zr(function (t, o) {
        var n = Wu(t, e, ["label", "field", "aria-descriptor"]);
        n.field().each(function (t) {
          var o = Kr(e.prefix);
          n.label().each(function (e) {
            ht(e.element, "for", o), ht(t.element, "id", o);
          }), n["aria-descriptor"]().each(function (o) {
            var n = Kr(e.prefix);
            ht(o.element, "id", n), ht(t.element, "aria-describedby", n);
          });
        });
      })]),
          a = {
        getField: function getField(t) {
          return Nu(t, e, "field");
        },
        getLabel: function getLabel(t) {
          return Nu(t, e, "label");
        }
      };

      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: s,
        events: r,
        apis: a
      };
    },
    apis: {
      getField: function getField(e, t) {
        return e.getField(t);
      },
      getLabel: function getLabel(e, t) {
        return e.getLabel(t);
      }
    }
  });

  var Ox = Object.freeze({
    __proto__: null,
    exhibit: function exhibit(e, t) {
      return ha({
        attributes: ys([{
          key: t.tabAttr,
          value: "true"
        }])
      });
    }
  }),
      _x = [is("tabAttr", "data-alloy-tabstop")];
  var Tx = ul({
    fields: _x,
    name: "tabstopping",
    active: Ox
  });
  var Ex = tinymce.util.Tools.resolve("tinymce.html.Entities");

  var Bx = function Bx(e, t, o, n) {
    var s = Mx(e, t, o, n);
    return Cx.sketch(s);
  },
      Mx = function Mx(e, t, o, n) {
    return {
      dom: Ax(o),
      components: e.toArray().concat([t]),
      fieldBehaviours: cl(n)
    };
  },
      Ax = function Ax(e) {
    return {
      tag: "div",
      classes: ["tox-form__group"].concat(e)
    };
  },
      Dx = function Dx(e, t) {
    return Cx.parts.label({
      dom: {
        tag: "label",
        classes: ["tox-label"]
      },
      components: [La(t.translate(e))]
    });
  },
      Fx = Kr("form-component-change"),
      Ix = Kr("form-close"),
      Rx = Kr("form-cancel"),
      Vx = Kr("form-action"),
      zx = Kr("form-submit"),
      Hx = Kr("form-block"),
      Px = Kr("form-unblock"),
      Nx = Kr("form-tabchange"),
      Lx = Kr("form-resize"),
      Wx = y([Qn("data"), is("inputAttributes", {}), is("inputStyles", {}), is("tag", "input"), is("inputClasses", []), bi("onSetValue"), is("styles", {}), is("eventOrder", {}), Qd("inputBehaviours", [Zd, Hp]), is("selectOnFocus", !0)]),
      Ux = function Ux(e) {
    return cl([Hp.config({
      onFocus: e.selectOnFocus ? function (e) {
        var t = e.element,
            o = Da(t);
        t.dom.setSelectionRange(0, o.length);
      } : b
    })]);
  },
      jx = function jx(e) {
    return _objectSpread({}, Ux(e), {}, tu(e.inputBehaviours, [Zd.config({
      store: _objectSpread({
        mode: "manual"
      }, e.data.map(function (e) {
        return {
          initialValue: e
        };
      }).getOr({}), {
        getValue: function getValue(e) {
          return Da(e.element);
        },
        setValue: function setValue(e, t) {
          Da(e.element) !== t && Fa(e.element, t);
        }
      }),
      onSetValue: e.onSetValue
    })]));
  },
      Gx = function Gx(e) {
    return {
      tag: e.tag,
      attributes: _objectSpread({
        type: "text"
      }, e.inputAttributes),
      styles: e.inputStyles,
      classes: e.inputClasses
    };
  },
      $x = em({
    name: "Input",
    configFields: Wx(),
    factory: function factory(e, t) {
      return {
        uid: e.uid,
        dom: Gx(e),
        components: [],
        behaviours: jx(e),
        eventOrder: e.eventOrder
      };
    }
  }),
      qx = function qx(e) {
    var t = B.none(),
        o = [];

    var n = function n(e) {
      s() ? r(e) : o.push(e);
    },
        s = function s() {
      return t.isSome();
    },
        r = function r(e) {
      t.each(function (t) {
        setTimeout(function () {
          e(t);
        }, 0);
      });
    };

    return e(function (e) {
      s() || (t = B.some(e), N(o, r), o = []);
    }), {
      get: n,
      map: function map(e) {
        return qx(function (t) {
          n(function (o) {
            t(e(o));
          });
        });
      },
      isReady: s
    };
  },
      Xx = {
    nu: qx,
    pure: function pure(e) {
      return qx(function (t) {
        t(e);
      });
    }
  },
      Kx = function Kx(e) {
    setTimeout(function () {
      throw e;
    }, 0);
  },
      Yx = function Yx(e) {
    var t = function t(_t27) {
      e().then(_t27, Kx);
    };

    return {
      map: function map(t) {
        return Yx(function () {
          return e().then(t);
        });
      },
      bind: function bind(t) {
        return Yx(function () {
          return e().then(function (e) {
            return t(e).toPromise();
          });
        });
      },
      anonBind: function anonBind(t) {
        return Yx(function () {
          return e().then(function () {
            return t.toPromise();
          });
        });
      },
      toLazy: function toLazy() {
        return Xx.nu(t);
      },
      toCached: function toCached() {
        var t = null;
        return Yx(function () {
          return null === t && (t = e()), t;
        });
      },
      toPromise: e,
      get: t
    };
  },
      Jx = function Jx(e) {
    return Yx(function () {
      return new Promise(e);
    });
  },
      Zx = function Zx(e) {
    return Yx(function () {
      return Promise.resolve(e);
    });
  },
      Qx = ["input", "textarea"],
      ew = function ew(e) {
    var t = Ve(e);
    return R(Qx, t);
  },
      tw = function tw(e, t) {
    var o = t.getRoot(e).getOr(e.element);
    Ea(o, t.invalidClass), t.notify.each(function (t) {
      ew(e.element) && ht(e.element, "aria-invalid", !1), t.getContainer(e).each(function (e) {
        Wr(e, t.validHtml);
      }), t.onValid(e);
    });
  },
      ow = function ow(e, t, o, n) {
    var s = t.getRoot(e).getOr(e.element);
    Ta(s, t.invalidClass), t.notify.each(function (t) {
      ew(e.element) && ht(e.element, "aria-invalid", !0), t.getContainer(e).each(function (e) {
        Wr(e, n);
      }), t.onInvalid(e, n);
    });
  },
      nw = function nw(e, t, o) {
    return t.validator.fold(function () {
      return Zx(qo.value(!0));
    }, function (t) {
      return t.validate(e);
    });
  },
      sw = function sw(e, t, o) {
    return t.notify.each(function (t) {
      t.onValidate(e);
    }), nw(e, t).map(function (o) {
      return e.getSystem().isConnected() ? o.fold(function (o) {
        return ow(e, t, 0, o), qo.error(o);
      }, function (o) {
        return tw(e, t), qo.value(o);
      }) : qo.error("No longer in system");
    });
  };

  var rw = Object.freeze({
    __proto__: null,
    markValid: tw,
    markInvalid: ow,
    query: nw,
    run: sw,
    isInvalid: function isInvalid(e, t) {
      var o = t.getRoot(e).getOr(e.element);
      return Ba(o, t.invalidClass);
    }
  }),
      aw = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      return e.validator.map(function (t) {
        return _r([Br(t.onEvent, function (t) {
          sw(t, e).get(x);
        })].concat(t.validateOnLoad ? [zr(function (t) {
          sw(t, e).get(b);
        })] : []));
      }).getOr({});
    }
  }),
      iw = [jn("invalidClass"), is("getRoot", B.none), as("notify", [is("aria", "alert"), is("getContainer", B.none), is("validHtml", ""), bi("onValid"), bi("onInvalid"), bi("onValidate")]), as("validator", [jn("validate"), is("onEvent", "input"), is("validateOnLoad", !0)])];
  var lw = ul({
    fields: iw,
    name: "invalidating",
    active: aw,
    apis: rw,
    extra: {
      validation: function validation(e) {
        return function (t) {
          var o = Zd.getValue(t);
          return Zx(e(o));
        };
      }
    }
  });
  var cw = Object.freeze({
    __proto__: null,
    getCoupled: function getCoupled(e, t, o, n) {
      return o.getOrCreate(e, t, n);
    }
  }),
      dw = [Gn("others", Rn(qo.value, On()))],
      uw = Object.freeze({
    __proto__: null,
    init: function init() {
      var e = {},
          t = y({});
      return ga({
        readState: t,
        getOrCreate: function getOrCreate(t, o, n) {
          var s = ae(o.others);
          if (s) return be(e, n).getOrThunk(function () {
            var s = be(o.others, n).getOrDie("No information found for coupled component: " + n)(t),
                r = t.getSystem().build(s);
            return e[n] = r, r;
          });
          throw new Error("Cannot find coupled component: " + n + ". Known coupled components: " + JSON.stringify(s, null, 2));
        }
      });
    }
  });
  var mw = ul({
    fields: dw,
    name: "coupling",
    apis: cw,
    state: uw
  }),
      gw = y("sink"),
      pw = y(Eu({
    name: gw(),
    overrides: y({
      dom: {
        tag: "div"
      },
      behaviours: cl([id.config({
        useFixed: T
      })]),
      events: _r([Ir(Hs()), Ir(As()), Ir(Ws())])
    })
  }));
  var hw;
  !function (e) {
    e[e.HighlightFirst = 0] = "HighlightFirst", e[e.HighlightNone = 1] = "HighlightNone";
  }(hw || (hw = {}));

  var fw = function fw(e, t) {
    var o = e.getHotspot(t).getOr(t),
        n = "hotspot",
        s = e.getAnchorOverrides();
    return e.layouts.fold(function () {
      return {
        type: n,
        hotspot: o,
        overrides: s
      };
    }, function (e) {
      return {
        type: n,
        hotspot: o,
        overrides: s,
        layouts: e
      };
    });
  },
      bw = function bw(e, t, o, n, s, r, a) {
    var i = function (e, t, o, n, s, r, a) {
      var i = function (e, t, o) {
        return (0, e.fetch)(o).map(t);
      }(e, t, n),
          l = xw(n, e);

      return i.map(function (e) {
        return e.bind(function (e) {
          return B.from(yh.sketch(_objectSpread({}, r.menu(), {
            uid: oa(""),
            data: e,
            highlightImmediately: a === hw.HighlightFirst,
            onOpenMenu: function onOpenMenu(e, t) {
              var n = l().getOrDie();
              id.position(n, t, {
                anchor: o
              }), Dd.decloak(s);
            },
            onOpenSubmenu: function onOpenSubmenu(e, t, o) {
              var n = l().getOrDie();
              id.position(n, o, {
                anchor: {
                  type: "submenu",
                  item: t
                }
              }), Dd.decloak(s);
            },
            onRepositionMenu: function onRepositionMenu(e, t, n) {
              var s = l().getOrDie();
              id.position(s, t, {
                anchor: o
              }), N(n, function (e) {
                id.position(s, e.triggeredMenu, {
                  anchor: {
                    type: "submenu",
                    item: e.triggeringItem
                  }
                });
              });
            },
            onEscape: function onEscape() {
              return Hp.focus(n), Dd.close(s), B.some(!0);
            }
          })));
        });
      });
    }(e, t, fw(e, o), o, n, s, a);

    return i.map(function (e) {
      return e.fold(function () {
        Dd.isOpen(n) && Dd.close(n);
      }, function (e) {
        Dd.cloak(n), Dd.open(n, e), r(n);
      }), n;
    });
  },
      vw = function vw(e, t, o, n, s, r, a) {
    return Dd.close(n), Zx(n);
  },
      yw = function yw(e, t, o, n, s, r) {
    var a = mw.getCoupled(o, "sandbox");
    return (Dd.isOpen(a) ? vw : bw)(e, t, o, a, n, s, r);
  },
      xw = function xw(e, t) {
    return e.getSystem().getByUid(t.uid + "-" + gw()).map(function (e) {
      return function () {
        return qo.value(e);
      };
    }).getOrThunk(function () {
      return t.lazySink.fold(function () {
        return function () {
          return qo.error(new Error("No internal sink is specified, nor could an external sink be found"));
        };
      }, function (t) {
        return function () {
          return t(e);
        };
      });
    });
  },
      ww = function ww(e) {
    Dd.getState(e).each(function (e) {
      yh.repositionMenus(e);
    });
  },
      Sw = function Sw(e, t, o) {
    var n = ni(),
        s = xw(t, e);
    return {
      dom: {
        tag: "div",
        classes: e.sandboxClasses,
        attributes: {
          id: n.id,
          role: "listbox"
        }
      },
      behaviours: nu(e.sandboxBehaviours, [Zd.config({
        store: {
          mode: "memory",
          initialValue: t
        }
      }), Dd.config({
        onOpen: function onOpen(s, r) {
          var a = fw(e, t);
          n.link(t.element), e.matchWidth && function (e, t, o) {
            var n = rm.getCurrent(t).getOr(t),
                s = Ut(e.element);
            o ? kt(n.element, "min-width", s + "px") : function (e, t) {
              Wt.set(e, t);
            }(n.element, s);
          }(a.hotspot, r, e.useMinWidth), e.onOpen(a, s, r), void 0 !== o && void 0 !== o.onOpen && o.onOpen(s, r);
        },
        onClose: function onClose(e, s) {
          n.unlink(t.element), void 0 !== o && void 0 !== o.onClose && o.onClose(e, s);
        },
        isPartOf: function isPartOf(e, o, n) {
          return si(o, n) || si(t, n);
        },
        getAttachPoint: function getAttachPoint() {
          return s().getOrDie();
        }
      }), rm.config({
        find: function find(e) {
          return Dd.getState(e).bind(function (e) {
            return rm.getCurrent(e);
          });
        }
      }), hl.config({
        channels: _objectSpread({}, zd({
          isExtraPart: _
        }), {}, Pd({
          doReposition: ww
        }))
      })])
    };
  },
      kw = function kw(e) {
    var t = mw.getCoupled(e, "sandbox");
    ww(t);
  },
      Cw = function Cw() {
    return [is("sandboxClasses", []), ou("sandboxBehaviours", [rm, hl, Dd, Zd])];
  },
      Ow = y([jn("dom"), jn("fetch"), bi("onOpen"), vi("onExecute"), is("getHotspot", B.some), is("getAnchorOverrides", y({})), ac(), Qd("dropdownBehaviours", [$p, mw, kp, Hp]), jn("toggleClass"), is("eventOrder", {}), Qn("lazySink"), is("matchWidth", !1), is("useMinWidth", !1), Qn("role")].concat(Cw())),
      _w = y([Tu({
    schema: [pi()],
    name: "menu",
    defaults: function defaults(e) {
      return {
        onExecute: e.onExecute
      };
    }
  }), pw()]),
      Tw = tm({
    name: "Dropdown",
    configFields: Ow(),
    partFields: _w(),
    factory: function factory(e, t, o, n) {
      var s = function s(e) {
        Dd.getState(e).each(function (e) {
          yh.highlightPrimary(e);
        });
      },
          r = {
        expand: function expand(t) {
          $p.isOn(t) || yw(e, x, t, n, b, hw.HighlightNone).get(b);
        },
        open: function open(t) {
          $p.isOn(t) || yw(e, x, t, n, b, hw.HighlightFirst).get(b);
        },
        isOpen: $p.isOn,
        close: function close(t) {
          $p.isOn(t) && yw(e, x, t, n, b, hw.HighlightFirst).get(b);
        },
        repositionMenus: function repositionMenus(e) {
          $p.isOn(e) && kw(e);
        }
      },
          a = function a(e, t) {
        return Sr(e), B.some(!0);
      };

      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: tu(e.dropdownBehaviours, [$p.config({
          toggleClass: e.toggleClass,
          aria: {
            mode: "expanded"
          }
        }), mw.config({
          others: {
            sandbox: function sandbox(t) {
              return Sw(e, t, {
                onOpen: function onOpen() {
                  return $p.on(t);
                },
                onClose: function onClose() {
                  return $p.off(t);
                }
              });
            }
          }
        }), kp.config({
          mode: "special",
          onSpace: a,
          onEnter: a,
          onDown: function onDown(e, t) {
            if (Tw.isOpen(e)) {
              var _t28 = mw.getCoupled(e, "sandbox");

              s(_t28);
            } else Tw.open(e);

            return B.some(!0);
          },
          onEscape: function onEscape(e, t) {
            return Tw.isOpen(e) ? (Tw.close(e), B.some(!0)) : B.none();
          }
        }), Hp.config({})]),
        events: Xp(B.some(function (t) {
          yw(e, x, t, n, s, hw.HighlightFirst).get(b);
        })),
        eventOrder: _objectSpread({}, e.eventOrder, _defineProperty({}, Qs(), ["disabling", "toggling", "alloy.base.behaviour"])),
        apis: r,
        domModification: {
          attributes: _objectSpread({
            "aria-haspopup": "true"
          }, e.role.fold(function () {
            return {};
          }, function (e) {
            return {
              role: e
            };
          }), {}, "button" === e.dom.tag ? {
            type: ("type", be(e.dom, "attributes").bind(function (e) {
              return be(e, "type");
            })).getOr("button")
          } : {})
        }
      };
    },
    apis: {
      open: function open(e, t) {
        return e.open(t);
      },
      expand: function expand(e, t) {
        return e.expand(t);
      },
      close: function close(e, t) {
        return e.close(t);
      },
      isOpen: function isOpen(e, t) {
        return e.isOpen(t);
      },
      repositionMenus: function repositionMenus(e, t) {
        return e.repositionMenus(t);
      }
    }
  }),
      Ew = ul({
    fields: [],
    name: "unselecting",
    active: Object.freeze({
      __proto__: null,
      events: function events() {
        return _r([Tr($s(), T)]);
      },
      exhibit: function exhibit() {
        return ha({
          styles: {
            "-webkit-user-select": "none",
            "user-select": "none",
            "-ms-user-select": "none",
            "-moz-user-select": "-moz-none"
          },
          attributes: {
            unselectable: "on"
          }
        });
      }
    })
  }),
      Bw = Kr("color-input-change"),
      Mw = Kr("color-swatch-change"),
      Aw = Kr("color-picker-cancel"),
      Dw = Eu({
    schema: [jn("dom")],
    name: "label"
  }),
      Fw = function Fw(e) {
    return Eu({
      name: e + "-edge",
      overrides: function overrides(t) {
        return t.model.manager.edgeActions[e].fold(function () {
          return {};
        }, function (e) {
          return {
            events: _r([Mr(Ts(), function (t, o, n) {
              return e(t, n);
            }, [t]), Mr(As(), function (t, o, n) {
              return e(t, n);
            }, [t]), Mr(Ds(), function (t, o, n) {
              n.mouseIsDown.get() && e(t, n);
            }, [t])])
          };
        });
      }
    });
  },
      Iw = Fw("top-left"),
      Rw = Fw("top"),
      Vw = Fw("top-right"),
      zw = Fw("right"),
      Hw = Fw("bottom-right"),
      Pw = Fw("bottom"),
      Nw = Fw("bottom-left");

  var Lw = [Dw, Fw("left"), zw, Rw, Pw, Iw, Vw, Nw, Hw, _u({
    name: "thumb",
    defaults: y({
      dom: {
        styles: {
          position: "absolute"
        }
      }
    }),
    overrides: function overrides(e) {
      return {
        events: _r([Dr(Ts(), e, "spectrum"), Dr(Es(), e, "spectrum"), Dr(Bs(), e, "spectrum"), Dr(As(), e, "spectrum"), Dr(Ds(), e, "spectrum"), Dr(Is(), e, "spectrum")])
      };
    }
  }), _u({
    schema: [Wn("mouseIsDown", function () {
      return fs(!1);
    })],
    name: "spectrum",
    overrides: function overrides(e) {
      var t = e.model.manager,
          o = function o(_o24, n) {
        return t.getValueFromEvent(n).map(function (n) {
          return t.setValueFrom(_o24, e, n);
        });
      };

      return {
        behaviours: cl([kp.config({
          mode: "special",
          onLeft: function onLeft(o) {
            return t.onLeft(o, e);
          },
          onRight: function onRight(o) {
            return t.onRight(o, e);
          },
          onUp: function onUp(o) {
            return t.onUp(o, e);
          },
          onDown: function onDown(o) {
            return t.onDown(o, e);
          }
        }), Hp.config({})]),
        events: _r([Br(Ts(), o), Br(Es(), o), Br(As(), o), Br(Ds(), function (t, n) {
          e.mouseIsDown.get() && o(t, n);
        })])
      };
    }
  })];

  var Ww = y("slider.change.value"),
      Uw = function Uw(e) {
    var t = e.event.raw;

    if (function (e) {
      return -1 !== e.type.indexOf("touch");
    }(t)) {
      var _e16 = t;
      return void 0 !== _e16.touches && 1 === _e16.touches.length ? B.some(_e16.touches[0]).map(function (e) {
        return Ht(e.clientX, e.clientY);
      }) : B.none();
    }

    {
      var _e17 = t;
      return void 0 !== _e17.clientX ? B.some(_e17).map(function (e) {
        return Ht(e.clientX, e.clientY);
      }) : B.none();
    }
  },
      jw = function jw(e) {
    return e.model.minX;
  },
      Gw = function Gw(e) {
    return e.model.minY;
  },
      $w = function $w(e) {
    return e.model.minX - 1;
  },
      qw = function qw(e) {
    return e.model.minY - 1;
  },
      Xw = function Xw(e) {
    return e.model.maxX;
  },
      Kw = function Kw(e) {
    return e.model.maxY;
  },
      Yw = function Yw(e) {
    return e.model.maxX + 1;
  },
      Jw = function Jw(e) {
    return e.model.maxY + 1;
  },
      Zw = function Zw(e, t, o) {
    return t(e) - o(e);
  },
      Qw = function Qw(e) {
    return Zw(e, Xw, jw);
  },
      eS = function eS(e) {
    return Zw(e, Kw, Gw);
  },
      tS = function tS(e) {
    return Qw(e) / 2;
  },
      oS = function oS(e) {
    return eS(e) / 2;
  },
      nS = function nS(e) {
    return e.stepSize;
  },
      sS = function sS(e) {
    return e.snapToGrid;
  },
      rS = function rS(e) {
    return e.snapStart;
  },
      aS = function aS(e) {
    return e.rounded;
  },
      iS = function iS(e, t) {
    return void 0 !== e[t + "-edge"];
  },
      lS = function lS(e) {
    return iS(e, "left");
  },
      cS = function cS(e) {
    return iS(e, "right");
  },
      dS = function dS(e) {
    return iS(e, "top");
  },
      uS = function uS(e) {
    return iS(e, "bottom");
  },
      mS = function mS(e) {
    return e.model.value.get();
  },
      gS = function gS(e, t) {
    return {
      x: e,
      y: t
    };
  },
      pS = function pS(e, t) {
    wr(e, Ww(), {
      value: t
    });
  },
      hS = function hS(e, t, o, n) {
    return e < t ? e : e > o ? o : e === t ? t - 1 : Math.max(t, e - n);
  },
      fS = function fS(e, t, o, n) {
    return e > o ? e : e < t ? t : e === o ? o + 1 : Math.min(o, e + n);
  },
      bS = function bS(e, t, o) {
    return Math.max(t, Math.min(o, e));
  },
      vS = function vS(e) {
    var t = e.min,
        o = e.max,
        n = e.range,
        s = e.value,
        r = e.step,
        a = e.snap,
        i = e.snapStart,
        l = e.rounded,
        c = e.hasMinEdge,
        d = e.hasMaxEdge,
        u = e.minBound,
        m = e.maxBound,
        g = e.screenRange,
        p = c ? t - 1 : t,
        h = d ? o + 1 : o;
    if (s < u) return p;
    if (s > m) return h;
    {
      var _e18 = function (e, t, o) {
        return Math.min(o, Math.max(e, t)) - t;
      }(s, u, m),
          _c4 = bS(_e18 / g * n + t, p, h);

      return a && _c4 >= t && _c4 <= o ? function (e, t, o, n, s) {
        return s.fold(function () {
          var s = e - t,
              r = Math.round(s / n) * n;
          return bS(t + r, t - 1, o + 1);
        }, function (t) {
          var s = (e - t) % n,
              r = Math.round(s / n),
              a = Math.floor((e - t) / n),
              i = Math.floor((o - t) / n),
              l = t + Math.min(i, a + r) * n;
          return Math.max(t, l);
        });
      }(_c4, t, o, r, i) : l ? Math.round(_c4) : _c4;
    }
  },
      yS = function yS(e) {
    var t = e.min,
        o = e.max,
        n = e.range,
        s = e.value,
        r = e.hasMinEdge,
        a = e.hasMaxEdge,
        i = e.maxBound,
        l = e.maxOffset,
        c = e.centerMinEdge,
        d = e.centerMaxEdge;
    return s < t ? r ? 0 : c : s > o ? a ? i : d : (s - t) / n * l;
  },
      xS = "top",
      wS = "right",
      SS = "bottom",
      kS = "left",
      CS = function CS(e) {
    return e.element.dom.getBoundingClientRect();
  },
      OS = function OS(e, t) {
    return e[t];
  },
      _S = function _S(e) {
    var t = CS(e);
    return OS(t, kS);
  },
      TS = function TS(e) {
    var t = CS(e);
    return OS(t, wS);
  },
      ES = function ES(e) {
    var t = CS(e);
    return OS(t, xS);
  },
      BS = function BS(e) {
    var t = CS(e);
    return OS(t, SS);
  },
      MS = function MS(e) {
    var t = CS(e);
    return OS(t, "width");
  },
      AS = function AS(e) {
    var t = CS(e);
    return OS(t, "height");
  },
      DS = function DS(e, t, o) {
    return (e + t) / 2 - o;
  },
      FS = function FS(e, t) {
    var o = CS(e),
        n = CS(t),
        s = OS(o, kS),
        r = OS(o, wS),
        a = OS(n, kS);
    return DS(s, r, a);
  },
      IS = function IS(e, t) {
    var o = CS(e),
        n = CS(t),
        s = OS(o, xS),
        r = OS(o, SS),
        a = OS(n, xS);
    return DS(s, r, a);
  },
      RS = function RS(e, t) {
    wr(e, Ww(), {
      value: t
    });
  },
      VS = function VS(e, t, o) {
    var n = {
      min: jw(t),
      max: Xw(t),
      range: Qw(t),
      value: o,
      step: nS(t),
      snap: sS(t),
      snapStart: rS(t),
      rounded: aS(t),
      hasMinEdge: lS(t),
      hasMaxEdge: cS(t),
      minBound: _S(e),
      maxBound: TS(e),
      screenRange: MS(e)
    };
    return vS(n);
  },
      zS = function zS(e) {
    return function (t, o) {
      return function (e, t, o) {
        var n = (e > 0 ? fS : hS)(mS(o), jw(o), Xw(o), nS(o));
        return RS(t, n), B.some(n);
      }(e, t, o).map(T);
    };
  },
      HS = function HS(e, t, o, n, s, r) {
    var a = function (e, t, o, n, s) {
      var r = MS(e),
          a = n.bind(function (t) {
        return B.some(FS(t, e));
      }).getOr(0),
          i = s.bind(function (t) {
        return B.some(FS(t, e));
      }).getOr(r),
          l = {
        min: jw(t),
        max: Xw(t),
        range: Qw(t),
        value: o,
        hasMinEdge: lS(t),
        hasMaxEdge: cS(t),
        minBound: _S(e),
        minOffset: 0,
        maxBound: TS(e),
        maxOffset: r,
        centerMinEdge: a,
        centerMaxEdge: i
      };
      return yS(l);
    }(t, r, o, n, s);

    return _S(t) - _S(e) + a;
  },
      PS = zS(-1),
      NS = zS(1),
      LS = B.none,
      WS = B.none,
      US = {
    "top-left": B.none(),
    top: B.none(),
    "top-right": B.none(),
    right: B.some(function (e, t) {
      pS(e, Yw(t));
    }),
    "bottom-right": B.none(),
    bottom: B.none(),
    "bottom-left": B.none(),
    left: B.some(function (e, t) {
      pS(e, $w(t));
    })
  };

  var jS = Object.freeze({
    __proto__: null,
    setValueFrom: function setValueFrom(e, t, o) {
      var n = VS(e, t, o);
      return RS(e, n), n;
    },
    setToMin: function setToMin(e, t) {
      var o = jw(t);
      RS(e, o);
    },
    setToMax: function setToMax(e, t) {
      var o = Xw(t);
      RS(e, o);
    },
    findValueOfOffset: VS,
    getValueFromEvent: function getValueFromEvent(e) {
      return Uw(e).map(function (e) {
        return e.left;
      });
    },
    findPositionOfValue: HS,
    setPositionFromValue: function setPositionFromValue(e, t, o, n) {
      var s = mS(o),
          r = HS(e, n.getSpectrum(e), s, n.getLeftEdge(e), n.getRightEdge(e), o),
          a = Ut(t.element) / 2;
      kt(t.element, "left", r - a + "px");
    },
    onLeft: PS,
    onRight: NS,
    onUp: LS,
    onDown: WS,
    edgeActions: US
  });

  var GS = function GS(e, t) {
    wr(e, Ww(), {
      value: t
    });
  },
      $S = function $S(e, t, o) {
    var n = {
      min: Gw(t),
      max: Kw(t),
      range: eS(t),
      value: o,
      step: nS(t),
      snap: sS(t),
      snapStart: rS(t),
      rounded: aS(t),
      hasMinEdge: dS(t),
      hasMaxEdge: uS(t),
      minBound: ES(e),
      maxBound: BS(e),
      screenRange: AS(e)
    };
    return vS(n);
  },
      qS = function qS(e) {
    return function (t, o) {
      return function (e, t, o) {
        var n = (e > 0 ? fS : hS)(mS(o), Gw(o), Kw(o), nS(o));
        return GS(t, n), B.some(n);
      }(e, t, o).map(T);
    };
  },
      XS = function XS(e, t, o, n, s, r) {
    var a = function (e, t, o, n, s) {
      var r = AS(e),
          a = n.bind(function (t) {
        return B.some(IS(t, e));
      }).getOr(0),
          i = s.bind(function (t) {
        return B.some(IS(t, e));
      }).getOr(r),
          l = {
        min: Gw(t),
        max: Kw(t),
        range: eS(t),
        value: o,
        hasMinEdge: dS(t),
        hasMaxEdge: uS(t),
        minBound: ES(e),
        minOffset: 0,
        maxBound: BS(e),
        maxOffset: r,
        centerMinEdge: a,
        centerMaxEdge: i
      };
      return yS(l);
    }(t, r, o, n, s);

    return ES(t) - ES(e) + a;
  },
      KS = B.none,
      YS = B.none,
      JS = qS(-1),
      ZS = qS(1),
      QS = {
    "top-left": B.none(),
    top: B.some(function (e, t) {
      pS(e, qw(t));
    }),
    "top-right": B.none(),
    right: B.none(),
    "bottom-right": B.none(),
    bottom: B.some(function (e, t) {
      pS(e, Jw(t));
    }),
    "bottom-left": B.none(),
    left: B.none()
  };

  var ek = Object.freeze({
    __proto__: null,
    setValueFrom: function setValueFrom(e, t, o) {
      var n = $S(e, t, o);
      return GS(e, n), n;
    },
    setToMin: function setToMin(e, t) {
      var o = Gw(t);
      GS(e, o);
    },
    setToMax: function setToMax(e, t) {
      var o = Kw(t);
      GS(e, o);
    },
    findValueOfOffset: $S,
    getValueFromEvent: function getValueFromEvent(e) {
      return Uw(e).map(function (e) {
        return e.top;
      });
    },
    findPositionOfValue: XS,
    setPositionFromValue: function setPositionFromValue(e, t, o, n) {
      var s = mS(o),
          r = XS(e, n.getSpectrum(e), s, n.getTopEdge(e), n.getBottomEdge(e), o),
          a = Rt(t.element) / 2;
      kt(t.element, "top", r - a + "px");
    },
    onLeft: KS,
    onRight: YS,
    onUp: JS,
    onDown: ZS,
    edgeActions: QS
  });

  var tk = function tk(e, t) {
    wr(e, Ww(), {
      value: t
    });
  },
      ok = function ok(e, t) {
    return {
      x: e,
      y: t
    };
  },
      nk = function nk(e, t) {
    return function (o, n) {
      return function (e, t, o, n) {
        var s = e > 0 ? fS : hS,
            r = t ? mS(n).x : s(mS(n).x, jw(n), Xw(n), nS(n)),
            a = t ? s(mS(n).y, Gw(n), Kw(n), nS(n)) : mS(n).y;
        return tk(o, ok(r, a)), B.some(r);
      }(e, t, o, n).map(T);
    };
  },
      sk = nk(-1, !1),
      rk = nk(1, !1),
      ak = nk(-1, !0),
      ik = nk(1, !0),
      lk = {
    "top-left": B.some(function (e, t) {
      pS(e, gS($w(t), qw(t)));
    }),
    top: B.some(function (e, t) {
      pS(e, gS(tS(t), qw(t)));
    }),
    "top-right": B.some(function (e, t) {
      pS(e, gS(Yw(t), qw(t)));
    }),
    right: B.some(function (e, t) {
      pS(e, gS(Yw(t), oS(t)));
    }),
    "bottom-right": B.some(function (e, t) {
      pS(e, gS(Yw(t), Jw(t)));
    }),
    bottom: B.some(function (e, t) {
      pS(e, gS(tS(t), Jw(t)));
    }),
    "bottom-left": B.some(function (e, t) {
      pS(e, gS($w(t), Jw(t)));
    }),
    left: B.some(function (e, t) {
      pS(e, gS($w(t), oS(t)));
    })
  };

  var ck = Object.freeze({
    __proto__: null,
    setValueFrom: function setValueFrom(e, t, o) {
      var n = VS(e, t, o.left),
          s = $S(e, t, o.top),
          r = ok(n, s);
      return tk(e, r), r;
    },
    setToMin: function setToMin(e, t) {
      var o = jw(t),
          n = Gw(t);
      tk(e, ok(o, n));
    },
    setToMax: function setToMax(e, t) {
      var o = Xw(t),
          n = Kw(t);
      tk(e, ok(o, n));
    },
    getValueFromEvent: function getValueFromEvent(e) {
      return Uw(e);
    },
    setPositionFromValue: function setPositionFromValue(e, t, o, n) {
      var s = mS(o),
          r = HS(e, n.getSpectrum(e), s.x, n.getLeftEdge(e), n.getRightEdge(e), o),
          a = XS(e, n.getSpectrum(e), s.y, n.getTopEdge(e), n.getBottomEdge(e), o),
          i = Ut(t.element) / 2,
          l = Rt(t.element) / 2;
      kt(t.element, "left", r - i + "px"), kt(t.element, "top", a - l + "px");
    },
    onLeft: sk,
    onRight: rk,
    onUp: ak,
    onDown: ik,
    edgeActions: lk
  });

  var dk = tm({
    name: "Slider",
    configFields: [is("stepSize", 1), is("onChange", b), is("onChoose", b), is("onInit", b), is("onDragStart", b), is("onDragEnd", b), is("snapToGrid", !1), is("rounded", !0), Qn("snapStart"), Gn("model", Nn("mode", {
      x: [is("minX", 0), is("maxX", 100), Wn("value", function (e) {
        return fs(e.mode.minX);
      }), jn("getInitialValue"), wi("manager", jS)],
      y: [is("minY", 0), is("maxY", 100), Wn("value", function (e) {
        return fs(e.mode.minY);
      }), jn("getInitialValue"), wi("manager", ek)],
      xy: [is("minX", 0), is("maxX", 100), is("minY", 0), is("maxY", 100), Wn("value", function (e) {
        return fs({
          x: e.mode.minX,
          y: e.mode.minY
        });
      }), jn("getInitialValue"), wi("manager", ck)]
    })), Qd("sliderBehaviours", [kp, Zd]), Wn("mouseIsDown", function () {
      return fs(!1);
    })],
    partFields: Lw,
    factory: function factory(e, t, o, n) {
      var s = function s(t) {
        return Lu(t, e, "thumb");
      },
          r = function r(t) {
        return Lu(t, e, "spectrum");
      },
          a = function a(t) {
        return Nu(t, e, "left-edge");
      },
          i = function i(t) {
        return Nu(t, e, "right-edge");
      },
          l = function l(t) {
        return Nu(t, e, "top-edge");
      },
          c = function c(t) {
        return Nu(t, e, "bottom-edge");
      },
          d = e.model,
          u = d.manager,
          m = function m(t, o) {
        u.setPositionFromValue(t, o, e, {
          getLeftEdge: a,
          getRightEdge: i,
          getTopEdge: l,
          getBottomEdge: c,
          getSpectrum: r
        });
      },
          g = function g(e, t) {
        d.value.set(t);
        var o = s(e);
        m(e, o);
      },
          p = function p(t) {
        var o = e.mouseIsDown.get();
        e.mouseIsDown.set(!1), o && Nu(t, e, "thumb").each(function (o) {
          var n = d.value.get();
          e.onChoose(t, o, n);
        });
      },
          h = function h(t, o) {
        o.stop(), e.mouseIsDown.set(!0), e.onDragStart(t, s(t));
      },
          f = function f(t, o) {
        o.stop(), e.onDragEnd(t, s(t)), p(t);
      };

      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: tu(e.sliderBehaviours, [kp.config({
          mode: "special",
          focusIn: function focusIn(t) {
            return Nu(t, e, "spectrum").map(kp.focusIn).map(T);
          }
        }), Zd.config({
          store: {
            mode: "manual",
            getValue: function getValue(e) {
              return d.value.get();
            },
            setValue: g
          }
        }), hl.config({
          channels: _defineProperty({}, Rd(), {
            onReceive: p
          })
        })]),
        events: _r([Br(Ww(), function (t, o) {
          (function (t, o) {
            g(t, o);
            var n = s(t);
            e.onChange(t, n, o), B.some(!0);
          })(t, o.event.value);
        }), zr(function (t, o) {
          var n = d.getInitialValue();
          d.value.set(n);
          var a = s(t);
          m(t, a);
          var i = r(t);
          e.onInit(t, a, i, d.value.get());
        }), Br(Ts(), h), Br(Bs(), f), Br(As(), h), Br(Is(), f)]),
        apis: {
          resetToMin: function resetToMin(t) {
            u.setToMin(t, e);
          },
          resetToMax: function resetToMax(t) {
            u.setToMax(t, e);
          },
          setValue: g,
          refresh: m
        },
        domModification: {
          styles: {
            position: "relative"
          }
        }
      };
    },
    apis: {
      setValue: function setValue(e, t, o) {
        e.setValue(t, o);
      },
      resetToMin: function resetToMin(e, t) {
        e.resetToMin(t);
      },
      resetToMax: function resetToMax(e, t) {
        e.resetToMax(t);
      },
      refresh: function refresh(e, t) {
        e.refresh(t);
      }
    }
  }),
      uk = Kr("rgb-hex-update"),
      mk = Kr("slider-update"),
      gk = Kr("palette-update"),
      pk = "form",
      hk = [Qd("formBehaviours", [Zd])],
      fk = function fk(e) {
    return "<alloy.field." + e + ">";
  },
      bk = function bk(e, t) {
    return {
      uid: e.uid,
      dom: e.dom,
      components: t,
      behaviours: tu(e.formBehaviours, [Zd.config({
        store: {
          mode: "manual",
          getValue: function getValue(t) {
            var o = Uu(t, e);
            return ce(o, function (e, t) {
              return e().bind(function (e) {
                return o = rm.getCurrent(e), n = new Error("Cannot find a current component to extract the value from for form part '".concat(t, "': ") + jr(e.element)), o.fold(function () {
                  return qo.error(n);
                }, qo.value);
                var o, n;
              }).map(Zd.getValue);
            });
          },
          setValue: function setValue(t, o) {
            le(o, function (o, n) {
              Nu(t, e, n).each(function (e) {
                rm.getCurrent(e).each(function (e) {
                  Zd.setValue(e, o);
                });
              });
            });
          }
        }
      })]),
      apis: {
        getField: function getField(t, o) {
          return Nu(t, e, o).bind(rm.getCurrent);
        }
      }
    };
  },
      vk = {
    getField: ua(function (e, t, o) {
      return e.getField(t, o);
    }),
    sketch: function sketch(e) {
      var t = function () {
        var e = [];
        return {
          field: function field(t, o) {
            return e.push(t), Ru(pk, fk(t), o);
          },
          record: y(e)
        };
      }(),
          o = e(t),
          n = t.record(),
          s = P(n, function (e) {
        return _u({
          name: e,
          pname: fk(e)
        });
      });

      return Yu(pk, hk, s, bk, o);
    }
  },
      yk = Kr("valid-input"),
      xk = Kr("invalid-input"),
      wk = Kr("validating-input"),
      Sk = "colorcustom.rgb.",
      kk = function kk(e, t, o, n) {
    var s = function s(o, n) {
      return lw.config({
        invalidClass: t("invalid"),
        notify: {
          onValidate: function onValidate(e) {
            wr(e, wk, {
              type: o
            });
          },
          onValid: function onValid(e) {
            wr(e, yk, {
              type: o,
              value: Zd.getValue(e)
            });
          },
          onInvalid: function onInvalid(e) {
            wr(e, xk, {
              type: o,
              value: Zd.getValue(e)
            });
          }
        },
        validator: {
          validate: function validate(t) {
            var o = Zd.getValue(t),
                s = n(o) ? qo.value(!0) : qo.error(e("aria.input.invalid"));
            return Zx(s);
          },
          validateOnLoad: !1
        }
      });
    },
        r = function r(o, n, _r8, a, i) {
      var l = e("colorcustom.rgb.range"),
          c = Cx.parts.label({
        dom: {
          tag: "label",
          attributes: {
            "aria-label": a
          }
        },
        components: [La(_r8)]
      }),
          d = Cx.parts.field({
        data: i,
        factory: $x,
        inputAttributes: _objectSpread({
          type: "text"
        }, "hex" === n ? {
          "aria-live": "polite"
        } : {}),
        inputClasses: [t("textfield")],
        inputBehaviours: cl([s(n, o), Tx.config({})]),
        onSetValue: function onSetValue(e) {
          lw.isInvalid(e) && lw.run(e).get(b);
        }
      }),
          u = [c, d],
          m = "hex" !== n ? [Cx.parts["aria-descriptor"]({
        text: l
      })] : [];
      return {
        dom: {
          tag: "div",
          attributes: {
            role: "presentation"
          }
        },
        components: u.concat(m)
      };
    },
        a = function a(e, t) {
      var o = t.red,
          n = t.green,
          s = t.blue;
      Zd.setValue(e, {
        red: o,
        green: n,
        blue: s
      });
    },
        i = kh({
      dom: {
        tag: "div",
        classes: [t("rgba-preview")],
        styles: {
          "background-color": "white"
        },
        attributes: {
          role: "presentation"
        }
      }
    }),
        l = function l(e, t) {
      i.getOpt(e).each(function (e) {
        kt(e.element, "background-color", "#" + t.value);
      });
    },
        c = em({
      factory: function factory() {
        var s = {
          red: fs(B.some(255)),
          green: fs(B.some(255)),
          blue: fs(B.some(255)),
          hex: fs(B.some("ffffff"))
        },
            c = function c(e) {
          return s[e].get();
        },
            d = function d(e, t) {
          s[e].set(t);
        },
            u = function u(e) {
          var t = e.red,
              o = e.green,
              n = e.blue;
          d("red", B.some(t)), d("green", B.some(o)), d("blue", B.some(n));
        },
            m = function m(e, t) {
          var o = t.event;
          "hex" !== o.type ? d(o.type, B.none()) : n(e);
        },
            g = function g(e, t) {
          var n = t.event;
          (function (e) {
            return "hex" === e.type;
          })(n) ? function (e, t) {
            o(e);
            var n = ry(t);
            d("hex", B.some(t));
            var s = xy(n);
            a(e, s), u(s), wr(e, uk, {
              hex: n
            }), l(e, n);
          }(e, n.value) : function (e, t, o) {
            var n = parseInt(o, 10);
            d(t, B.some(n)), c("red").bind(function (e) {
              return c("green").bind(function (t) {
                return c("blue").map(function (o) {
                  return by(e, t, o, 1);
                });
              });
            }).each(function (t) {
              var o = function (e, t) {
                var o = uy(t);
                return vk.getField(e, "hex").each(function (t) {
                  Hp.isFocused(t) || Zd.setValue(e, {
                    hex: o.value
                  });
                }), o;
              }(e, t);

              wr(e, uk, {
                hex: o
              }), l(e, o);
            });
          }(e, n.type, n.value);
        },
            p = function p(t) {
          return {
            label: e(Sk + t + ".label"),
            description: e(Sk + t + ".description")
          };
        },
            h = p("red"),
            f = p("green"),
            b = p("blue"),
            v = p("hex");

        return sn(vk.sketch(function (o) {
          return {
            dom: {
              tag: "form",
              classes: [t("rgb-form")],
              attributes: {
                "aria-label": e("aria.color.picker")
              }
            },
            components: [o.field("red", Cx.sketch(r(vy, "red", h.label, h.description, 255))), o.field("green", Cx.sketch(r(vy, "green", f.label, f.description, 255))), o.field("blue", Cx.sketch(r(vy, "blue", b.label, b.description, 255))), o.field("hex", Cx.sketch(r(ly, "hex", v.label, v.description, "ffffff"))), i.asSpec()],
            formBehaviours: cl([lw.config({
              invalidClass: t("form-invalid")
            }), Fp("rgb-form-events", [Br(yk, g), Br(xk, m), Br(wk, m)])])
          };
        }), {
          apis: {
            updateHex: function updateHex(e, t) {
              Zd.setValue(e, {
                hex: t.value
              }), function (e, t) {
                var o = xy(t);
                a(e, o), u(o);
              }(e, t), l(e, t);
            }
          }
        });
      },
      name: "RgbForm",
      configFields: [],
      apis: {
        updateHex: function updateHex(e, t, o) {
          e.updateHex(t, o);
        }
      },
      extraApis: {}
    });

    return c;
  },
      Ck = function Ck(e, t) {
    var o = em({
      name: "ColourPicker",
      configFields: [jn("dom"), is("onValidHex", b), is("onInvalidHex", b)],
      factory: function factory(o) {
        var n = kk(e, t, o.onValidHex, o.onInvalidHex),
            s = function (e, t) {
          var o = dk.parts.spectrum({
            dom: {
              tag: "canvas",
              attributes: {
                role: "presentation"
              },
              classes: [t("sv-palette-spectrum")]
            }
          }),
              n = dk.parts.thumb({
            dom: {
              tag: "div",
              attributes: {
                role: "presentation"
              },
              classes: [t("sv-palette-thumb")],
              innerHtml: "<div class=".concat(t("sv-palette-inner-thumb"), " role=\"presentation\"></div>")
            }
          }),
              s = function s(e, t) {
            var o = e.width,
                n = e.height,
                s = e.getContext("2d");
            if (null === s) return;
            s.fillStyle = t, s.fillRect(0, 0, o, n);
            var r = s.createLinearGradient(0, 0, o, 0);
            r.addColorStop(0, "rgba(255,255,255,1)"), r.addColorStop(1, "rgba(255,255,255,0)"), s.fillStyle = r, s.fillRect(0, 0, o, n);
            var a = s.createLinearGradient(0, 0, 0, n);
            a.addColorStop(0, "rgba(0,0,0,0)"), a.addColorStop(1, "rgba(0,0,0,1)"), s.fillStyle = a, s.fillRect(0, 0, o, n);
          };

          return em({
            factory: function factory(e) {
              var r = y({
                x: 0,
                y: 0
              }),
                  a = cl([rm.config({
                find: B.some
              }), Hp.config({})]);
              return dk.sketch({
                dom: {
                  tag: "div",
                  attributes: {
                    role: "presentation"
                  },
                  classes: [t("sv-palette")]
                },
                model: {
                  mode: "xy",
                  getInitialValue: r
                },
                rounded: !1,
                components: [o, n],
                onChange: function onChange(e, t, o) {
                  wr(e, gk, {
                    value: o
                  });
                },
                onInit: function onInit(e, t, o, n) {
                  s(o.element.dom, ky(Cy));
                },
                sliderBehaviours: a
              });
            },
            name: "SaturationBrightnessPalette",
            configFields: [],
            apis: {
              setHue: function setHue(e, t, o) {
                (function (e, t) {
                  var o = e.components()[0].element.dom,
                      n = _y(t, 100, 100),
                      r = yy(n);

                  s(o, ky(r));
                })(t, o);
              },
              setThumb: function setThumb(e, t, o) {
                (function (e, t) {
                  var o = Ty(xy(t));
                  dk.setValue(e, {
                    x: o.saturation,
                    y: 100 - o.value
                  });
                })(t, o);
              }
            },
            extraApis: {}
          });
        }(0, t),
            r = {
          paletteRgba: fs(Cy),
          paletteHue: fs(0)
        },
            a = kh(function (e, t) {
          var o = dk.parts.spectrum({
            dom: {
              tag: "div",
              classes: [t("hue-slider-spectrum")],
              attributes: {
                role: "presentation"
              }
            }
          }),
              n = dk.parts.thumb({
            dom: {
              tag: "div",
              classes: [t("hue-slider-thumb")],
              attributes: {
                role: "presentation"
              }
            }
          });
          return dk.sketch({
            dom: {
              tag: "div",
              classes: [t("hue-slider")],
              attributes: {
                role: "presentation"
              }
            },
            rounded: !1,
            model: {
              mode: "y",
              getInitialValue: y(0)
            },
            components: [o, n],
            sliderBehaviours: cl([Hp.config({})]),
            onChange: function onChange(e, t, o) {
              wr(e, mk, {
                value: o
              });
            }
          });
        }(0, t)),
            i = kh(s.sketch({})),
            l = kh(n.sketch({})),
            c = function c(e, t, o) {
          i.getOpt(e).each(function (e) {
            s.setHue(e, o);
          });
        },
            d = function d(e, t) {
          l.getOpt(e).each(function (e) {
            n.updateHex(e, t);
          });
        },
            u = function u(e, t, o) {
          a.getOpt(e).each(function (e) {
            dk.setValue(e, function (e) {
              return 100 - e / 360 * 100;
            }(o));
          });
        },
            m = function m(e, t) {
          i.getOpt(e).each(function (e) {
            s.setThumb(e, t);
          });
        },
            g = function g(e, t, o, n) {
          (function (e, t) {
            var o = xy(e);
            r.paletteRgba.set(o), r.paletteHue.set(t);
          })(t, o), N(n, function (n) {
            n(e, t, o);
          });
        };

        return {
          uid: o.uid,
          dom: o.dom,
          components: [i.asSpec(), a.asSpec(), l.asSpec()],
          behaviours: cl([Fp("colour-picker-events", [Br(uk, function () {
            var e = [c, u, m];
            return function (t, o) {
              var n = o.event.hex,
                  s = function (e) {
                return Ty(xy(e));
              }(n);

              g(t, n, s.hue, e);
            };
          }()), Br(gk, function () {
            var e = [d];
            return function (t, o) {
              var n = o.event.value,
                  s = r.paletteHue.get(),
                  a = _y(s, n.x, 100 - n.y),
                  i = Ey(a);

              g(t, i, s, e);
            };
          }()), Br(mk, function () {
            var e = [c, d];
            return function (t, o) {
              var n = function (e) {
                return (100 - e) / 100 * 360;
              }(o.event.value),
                  s = r.paletteRgba.get(),
                  a = Ty(s),
                  i = _y(n, a.saturation, a.value),
                  l = Ey(i);

              g(t, l, n, e);
            };
          }())]), rm.config({
            find: function find(e) {
              return l.getOpt(e);
            }
          }), kp.config({
            mode: "acyclic"
          })])
        };
      }
    });
    return o;
  },
      Ok = function Ok() {
    return rm.config({
      find: B.some
    });
  },
      _k = function _k(e) {
    return rm.config({
      find: function find(t) {
        return tt(t.element, e).bind(function (e) {
          return t.getSystem().getByDom(e).toOptional();
        });
      }
    });
  },
      Tk = xn([is("preprocess", x), is("postprocess", x)]),
      Ek = function Ek(e, t, o) {
    return Zd.config({
      store: _objectSpread({
        mode: "manual"
      }, e.map(function (e) {
        return {
          initialValue: e
        };
      }).getOr({}), {
        getValue: t,
        setValue: o
      })
    });
  },
      Bk = function Bk(e, t, o) {
    return Ek(e, function (e) {
      return t(e.element);
    }, function (e, t) {
      return o(e.element, t);
    });
  },
      Mk = function Mk(e, t) {
    var o = Hn("RepresentingConfigs.memento processors", Tk, t);
    return Zd.config({
      store: {
        mode: "manual",
        getValue: function getValue(t) {
          var n = e.get(t),
              s = Zd.getValue(n);
          return o.postprocess(s);
        },
        setValue: function setValue(t, n) {
          var s = o.preprocess(n),
              r = e.get(t);
          Zd.setValue(r, s);
        }
      }
    });
  },
      Ak = Bk,
      Dk = Ek,
      Fk = function Fk(e) {
    return Zd.config({
      store: {
        mode: "memory",
        initialValue: e
      }
    });
  },
      Ik = {
    "colorcustom.rgb.red.label": "R",
    "colorcustom.rgb.red.description": "Red component",
    "colorcustom.rgb.green.label": "G",
    "colorcustom.rgb.green.description": "Green component",
    "colorcustom.rgb.blue.label": "B",
    "colorcustom.rgb.blue.description": "Blue component",
    "colorcustom.rgb.hex.label": "#",
    "colorcustom.rgb.hex.description": "Hex color code",
    "colorcustom.rgb.range": "Range 0 to 255",
    "aria.color.picker": "Color Picker",
    "aria.input.invalid": "Invalid input"
  };

  var Rk = tinymce.util.Tools.resolve("tinymce.Resource"),
      Vk = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var zk = Kr("alloy-fake-before-tabstop"),
      Hk = Kr("alloy-fake-after-tabstop"),
      Pk = function Pk(e) {
    return {
      dom: {
        tag: "div",
        styles: {
          width: "1px",
          height: "1px",
          outline: "none"
        },
        attributes: {
          tabindex: "0"
        },
        classes: e
      },
      behaviours: cl([Hp.config({
        ignore: !0
      }), Tx.config({})])
    };
  },
      Nk = function Nk(e) {
    return {
      dom: {
        tag: "div",
        classes: ["tox-navobj"]
      },
      components: [Pk([zk]), e, Pk([Hk])],
      behaviours: cl([_k(1)])
    };
  },
      Lk = function Lk(e, t) {
    wr(e, Hs(), {
      raw: {
        which: 9,
        shiftKey: t
      }
    });
  },
      Wk = function Wk(e, t) {
    var o = t.element;
    Ba(o, zk) ? Lk(e, !0) : Ba(o, Hk) && Lk(e, !1);
  },
      Uk = function Uk(e) {
    return dx(e, ["." + zk, "." + Hk].join(","), _);
  },
      jk = Kr("toolbar.button.execute"),
      Gk = _defineProperty({}, Qs(), ["disabling", "alloy.base.behaviour", "toggling", "toolbar-button-events"]),
      $k = function $k(e, t, o) {
    return Fh(e, {
      tag: "span",
      classes: ["tox-icon", "tox-tbtn__icon-wrap"],
      behaviours: o
    }, t);
  },
      qk = function qk(e, t) {
    return $k(e, t, []);
  },
      Xk = function Xk(e, t) {
    return $k(e, t, [Dp.config({})]);
  },
      Kk = function Kk(e, t, o) {
    return {
      dom: {
        tag: "span",
        classes: ["".concat(t, "__select-label")]
      },
      components: [La(o.translate(e))],
      behaviours: cl([Dp.config({})])
    };
  },
      Yk = Kr("update-menu-text"),
      Jk = Kr("update-menu-icon"),
      Zk = function Zk(e, t, o) {
    var n = fs(b),
        s = e.text.map(function (e) {
      return kh(Kk(e, t, o.providers));
    }),
        r = e.icon.map(function (e) {
      return kh(Xk(e, o.providers.icons));
    }),
        a = function a(e, t) {
      var o = Zd.getValue(e);
      return Hp.focus(o), wr(o, "keydown", {
        raw: t.event.raw
      }), Tw.close(o), B.some(!0);
    },
        i = e.role.fold(function () {
      return {};
    }, function (e) {
      return {
        role: e
      };
    }),
        l = e.tooltip.fold(function () {
      return {};
    }, function (e) {
      var t = o.providers.translate(e);
      return {
        title: t,
        "aria-label": t
      };
    }),
        c = Fh("chevron-down", {
      tag: "div",
      classes: ["".concat(t, "__select-chevron")]
    }, o.providers.icons);

    return kh(Tw.sketch(_objectSpread({}, e.uid ? {
      uid: e.uid
    } : {}, {}, i, {
      dom: {
        tag: "button",
        classes: [t, "".concat(t, "--select")].concat(P(e.classes, function (e) {
          return "".concat(t, "--").concat(e);
        })),
        attributes: _objectSpread({}, l)
      },
      components: Uv([r.map(function (e) {
        return e.asSpec();
      }), s.map(function (e) {
        return e.asSpec();
      }), B.some(c)]),
      matchWidth: !0,
      useMinWidth: !0,
      dropdownBehaviours: cl([].concat(_toConsumableArray(e.dropdownBehaviours), [Rv(function () {
        return e.disabled || o.providers.isDisabled();
      }), Iv(), Ew.config({}), Dp.config({}), Fp("dropdown-events", [Pv(e, n), Nv(e, n)]), Fp("menubutton-update-display-text", [Br(Yk, function (e, t) {
        s.bind(function (t) {
          return t.getOpt(e);
        }).each(function (e) {
          Dp.set(e, [La(o.providers.translate(t.event.text))]);
        });
      }), Br(Jk, function (e, t) {
        r.bind(function (t) {
          return t.getOpt(e);
        }).each(function (e) {
          Dp.set(e, [Xk(t.event.icon, o.providers.icons)]);
        });
      })])])),
      eventOrder: sn(Gk, {
        mousedown: ["focusing", "alloy.base.behaviour", "item-type-events", "normal-dropdown-events"]
      }),
      sandboxBehaviours: cl([kp.config({
        mode: "special",
        onLeft: a,
        onRight: a
      })]),
      lazySink: o.getSink,
      toggleClass: "".concat(t, "--active"),
      parts: {
        menu: ab(0, e.columns, e.presets)
      },
      fetch: function fetch(t) {
        return Jx(S(e.fetch, t));
      }
    }))).asSpec();
  },
      Qk = function Qk(e) {
    return "separator" === e.type;
  },
      eC = {
    type: "separator"
  },
      tC = function tC(e, t) {
    var o = function (e, t) {
      var o = j(e, function (e, o) {
        return function (e) {
          return r(e);
        }(o) ? "" === o ? e : "|" === o ? e.length > 0 && !Qk(e[e.length - 1]) ? e.concat([eC]) : e : ve(t, o.toLowerCase()) ? e.concat([t[o.toLowerCase()]]) : e : e.concat([o]);
      }, []);
      return o.length > 0 && Qk(o[o.length - 1]) && o.pop(), o;
    }(r(e) ? e.split(" ") : e, t);

    return U(o, function (e, o) {
      var n = function (e) {
        if (Qk(e)) return e;
        {
          var _t29 = be(e, "value").getOrThunk(function () {
            return Kr("generated-menu-item");
          });

          return sn({
            value: _t29
          }, e);
        }
      }(o),
          s = function (e, t) {
        return function (e) {
          return ve(e, "getSubmenuItems");
        }(e) ? function (e, t) {
          var o = e.getSubmenuItems(),
              n = tC(o, t);
          return {
            item: e,
            menus: sn(n.menus, vs(e.value, n.items)),
            expansions: sn(n.expansions, vs(e.value, e.value))
          };
        }(e, t) : {
          item: e,
          menus: {},
          expansions: {}
        };
      }(n, t);

      return {
        menus: sn(e.menus, s.menus),
        items: [s.item].concat(e.items),
        expansions: sn(e.expansions, s.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  },
      oC = function oC(e, t, o, n) {
    var s = Kr("primary-menu"),
        r = tC(e, o.shared.providers.menuItems());
    if (0 === r.items.length) return B.none();
    var a = ix(s, r.items, t, o, n),
        i = ce(r.menus, function (e, n) {
      return ix(n, e, t, o, !1);
    }),
        l = sn(i, vs(s, a));
    return B.from(yh.tieredData(s, l, r.expansions));
  },
      nC = function nC(e) {
    return !ve(e, "items");
  },
      sC = "data-value",
      rC = function rC(e, t, o, n) {
    return P(o, function (o) {
      return nC(o) ? {
        type: "togglemenuitem",
        text: o.text,
        value: o.value,
        active: o.value === n,
        onAction: function onAction() {
          Zd.setValue(e, o.value), wr(e, Fx, {
            name: t
          }), Hp.focus(e);
        }
      } : {
        type: "nestedmenuitem",
        text: o.text,
        getSubmenuItems: function getSubmenuItems() {
          return rC(e, t, o.items, n);
        }
      };
    });
  },
      aC = function aC(e, t) {
    return re(e, function (e) {
      return nC(e) ? ke(e.value === t, e) : aC(e.items, t);
    });
  },
      iC = em({
    name: "HtmlSelect",
    configFields: [jn("options"), Qd("selectBehaviours", [Hp, Zd]), is("selectClasses", []), is("selectAttributes", {}), Qn("data")],
    factory: function factory(e, t) {
      var o = P(e.options, function (e) {
        return {
          dom: {
            tag: "option",
            value: e.value,
            innerHtml: e.text
          }
        };
      }),
          n = e.data.map(function (e) {
        return vs("initialValue", e);
      }).getOr({});
      return {
        uid: e.uid,
        dom: {
          tag: "select",
          classes: e.selectClasses,
          attributes: e.selectAttributes
        },
        components: o,
        behaviours: tu(e.selectBehaviours, [Hp.config({}), Zd.config({
          store: _objectSpread({
            mode: "manual",
            getValue: function getValue(e) {
              return Da(e.element);
            },
            setValue: function setValue(t, o) {
              G(e.options, function (e) {
                return e.value === o;
              }).isSome() && Fa(t.element, o);
            }
          }, n)
        })])
      };
    }
  }),
      lC = y([is("field1Name", "field1"), is("field2Name", "field2"), yi("onLockedChange"), hi(["lockClass"]), is("locked", !1), ou("coupledFieldBehaviours", [rm, Zd])]),
      cC = function cC(e, t) {
    return _u({
      factory: Cx,
      name: e,
      overrides: function overrides(e) {
        return {
          fieldBehaviours: cl([Fp("coupled-input-behaviour", [Br(Ns(), function (o) {
            (function (e, t, o) {
              return Nu(e, t, o).bind(rm.getCurrent);
            })(o, e, t).each(function (t) {
              Nu(o, e, "lock").each(function (n) {
                $p.isOn(n) && e.onLockedChange(o, t, n);
              });
            });
          })])])
        };
      }
    });
  },
      dC = y([cC("field1", "field2"), cC("field2", "field1"), _u({
    factory: Sh,
    schema: [jn("dom")],
    name: "lock",
    overrides: function overrides(e) {
      return {
        buttonBehaviours: cl([$p.config({
          selected: e.locked,
          toggleClass: e.markers.lockClass,
          aria: {
            mode: "pressed"
          }
        })])
      };
    }
  })]),
      uC = tm({
    name: "FormCoupledInputs",
    configFields: lC(),
    partFields: dC(),
    factory: function factory(e, t, o, n) {
      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: nu(e.coupledFieldBehaviours, [rm.config({
          find: B.some
        }), Zd.config({
          store: {
            mode: "manual",
            getValue: function getValue(t) {
              var _ref11;

              var o = Gu(t, e, ["field1", "field2"]);
              return _ref11 = {}, _defineProperty(_ref11, e.field1Name, Zd.getValue(o.field1())), _defineProperty(_ref11, e.field2Name, Zd.getValue(o.field2())), _ref11;
            },
            setValue: function setValue(t, o) {
              var n = Gu(t, e, ["field1", "field2"]);
              ye(o, e.field1Name) && Zd.setValue(n.field1(), o[e.field1Name]), ye(o, e.field2Name) && Zd.setValue(n.field2(), o[e.field2Name]);
            }
          }
        })]),
        apis: {
          getField1: function getField1(t) {
            return Nu(t, e, "field1");
          },
          getField2: function getField2(t) {
            return Nu(t, e, "field2");
          },
          getLock: function getLock(t) {
            return Nu(t, e, "lock");
          }
        }
      };
    },
    apis: {
      getField1: function getField1(e, t) {
        return e.getField1(t);
      },
      getField2: function getField2(e, t) {
        return e.getField2(t);
      },
      getLock: function getLock(e, t) {
        return e.getLock(t);
      }
    }
  }),
      mC = function mC(e) {
    var t = /^\s*(\d+(?:\.\d+)?)\s*(|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)\s*$/.exec(e);

    if (null !== t) {
      var _e19 = parseFloat(t[1]),
          _o25 = t[2];

      return qo.value({
        value: _e19,
        unit: _o25
      });
    }

    return qo.error(e);
  },
      gC = function gC(e, t) {
    var o = {
      "": 96,
      px: 96,
      pt: 72,
      cm: 2.54,
      pc: 12,
      mm: 25.4,
      "in": 1
    },
        n = function n(e) {
      return ve(o, e);
    };

    return e.unit === t ? B.some(e.value) : n(e.unit) && n(t) ? o[e.unit] === o[t] ? B.some(e.value) : B.some(e.value / o[e.unit] * o[t]) : B.none();
  },
      pC = function pC(e) {
    return B.none();
  },
      hC = function hC(e, t) {
    var o = e.label.map(function (e) {
      return Dx(e, t);
    }),
        n = [ym.config({
      disabled: function disabled() {
        return e.disabled || t.isDisabled();
      }
    }), Iv(), kp.config({
      mode: "execution",
      useEnter: !0 !== e.multiline,
      useControlEnter: !0 === e.multiline,
      execute: function execute(e) {
        return xr(e, zx), B.some(!0);
      }
    }), Fp("textfield-change", [Br(Ns(), function (t, o) {
      wr(t, Fx, {
        name: e.name
      });
    }), Br(Js(), function (t, o) {
      wr(t, Fx, {
        name: e.name
      });
    })]), Tx.config({})],
        s = e.validation.map(function (e) {
      return lw.config({
        getRoot: function getRoot(e) {
          return Ze(e.element);
        },
        invalidClass: "tox-invalid",
        validator: {
          validate: function validate(t) {
            var o = Zd.getValue(t),
                n = e.validator(o);
            return Zx(!0 === n ? qo.value(o) : qo.error(n));
          },
          validateOnLoad: e.validateOnLoad
        }
      });
    }).toArray(),
        r = _objectSpread({}, e.placeholder.fold(y({}), function (e) {
      return {
        placeholder: t.translate(e)
      };
    }), {}, e.inputMode.fold(y({}), function (e) {
      return {
        inputmode: e
      };
    })),
        a = Cx.parts.field(_objectSpread({
      tag: !0 === e.multiline ? "textarea" : "input"
    }, e.data.map(function (e) {
      return {
        data: e
      };
    }).getOr({}), {
      inputAttributes: r,
      inputClasses: [e.classname],
      inputBehaviours: cl(q([n, s])),
      selectOnFocus: !1,
      factory: $x
    })),
        i = (e.flex ? ["tox-form__group--stretched"] : []).concat(e.maximized ? ["tox-form-group--maximize"] : []),
        l = [ym.config({
      disabled: function disabled() {
        return e.disabled || t.isDisabled();
      },
      onDisabled: function onDisabled(e) {
        Cx.getField(e).each(ym.disable);
      },
      onEnabled: function onEnabled(e) {
        Cx.getField(e).each(ym.enable);
      }
    }), Iv()];

    return Bx(o, a, i, l);
  };

  var fC = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      var o = e.stream.streams.setup(e, t);
      return _r([Br(e.event, o), Hr(function () {
        return t.cancel();
      })].concat(e.cancelEvent.map(function (e) {
        return [Br(e, function () {
          return t.cancel();
        })];
      }).getOr([])));
    }
  });

  var bC = function bC(e, t) {
    var o = null;

    var n = function n() {
      c(o) || (clearTimeout(o), o = null);
    };

    return {
      cancel: n,
      throttle: function throttle() {
        for (var _len15 = arguments.length, s = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
          s[_key15] = arguments[_key15];
        }

        n(), o = setTimeout(function () {
          o = null, e.apply(null, s);
        }, t);
      }
    };
  },
      vC = function vC(e) {
    var t = fs(null);
    return ga({
      readState: function readState() {
        return {
          timer: null !== t.get() ? "set" : "unset"
        };
      },
      setTimer: function setTimer(e) {
        t.set(e);
      },
      cancel: function cancel() {
        var e = t.get();
        null !== e && e.cancel();
      }
    });
  };

  var yC = Object.freeze({
    __proto__: null,
    throttle: vC,
    init: function init(e) {
      return e.stream.streams.state(e);
    }
  }),
      xC = [Gn("stream", Nn("mode", {
    throttle: [jn("delay"), is("stopEvent", !0), wi("streams", {
      setup: function setup(e, t) {
        var o = e.stream,
            n = bC(e.onStream, o.delay);
        return t.setTimer(n), function (e, t) {
          n.throttle(e, t), o.stopEvent && t.stop();
        };
      },
      state: vC
    })]
  })), is("event", "input"), Qn("cancelEvent"), yi("onStream")];

  var wC = ul({
    fields: xC,
    name: "streaming",
    active: fC,
    state: yC
  }),
      SC = function SC(e, t, o) {
    var n = Zd.getValue(o);
    Zd.setValue(t, n), CC(t);
  },
      kC = function kC(e, t) {
    var o = e.element,
        n = Da(o),
        s = o.dom;
    "number" !== bt(o, "type") && t(s, n);
  },
      CC = function CC(e) {
    kC(e, function (e, t) {
      return e.setSelectionRange(t.length, t.length);
    });
  },
      OC = y("alloy.typeahead.itemexecute"),
      _C = y([Qn("lazySink"), jn("fetch"), is("minChars", 5), is("responseTime", 1e3), bi("onOpen"), is("getHotspot", B.some), is("getAnchorOverrides", y({})), is("layouts", B.none()), is("eventOrder", {}), hs("model", {}, [is("getDisplayText", function (e) {
    return void 0 !== e.meta && void 0 !== e.meta.text ? e.meta.text : e.value;
  }), is("selectsOver", !0), is("populateFromBrowse", !0)]), bi("onSetValue"), vi("onExecute"), bi("onItemExecute"), is("inputClasses", []), is("inputAttributes", {}), is("inputStyles", {}), is("matchWidth", !0), is("useMinWidth", !1), is("dismissOnBlur", !0), hi(["openClass"]), Qn("initialData"), Qd("typeaheadBehaviours", [Hp, Zd, wC, kp, $p, mw]), Wn("previewing", function () {
    return fs(!0);
  })].concat(Wx()).concat(Cw())),
      TC = y([Tu({
    schema: [pi()],
    name: "menu",
    overrides: function overrides(e) {
      return {
        fakeFocus: !0,
        onHighlight: function onHighlight(t, o) {
          e.previewing.get() ? t.getSystem().getByUid(e.uid).each(function (n) {
            (function (e, t, o) {
              if (e.selectsOver) {
                var _n34 = Zd.getValue(t),
                    _s24 = e.getDisplayText(_n34),
                    _r9 = Zd.getValue(o);

                return 0 === e.getDisplayText(_r9).indexOf(_s24) ? B.some(function () {
                  SC(0, t, o), function (e, t) {
                    kC(e, function (e, o) {
                      return e.setSelectionRange(t, o.length);
                    });
                  }(t, _s24.length);
                }) : B.none();
              }

              return B.none();
            })(e.model, n, o).fold(function () {
              return Bm.dehighlight(t, o);
            }, function (e) {
              return e();
            });
          }) : t.getSystem().getByUid(e.uid).each(function (t) {
            e.model.populateFromBrowse && SC(e.model, t, o);
          }), e.previewing.set(!1);
        },
        onExecute: function onExecute(t, o) {
          return t.getSystem().getByUid(e.uid).toOptional().map(function (e) {
            return wr(e, OC(), {
              item: o
            }), !0;
          });
        },
        onHover: function onHover(t, o) {
          e.previewing.set(!1), t.getSystem().getByUid(e.uid).each(function (t) {
            e.model.populateFromBrowse && SC(e.model, t, o);
          });
        }
      };
    }
  })]),
      EC = tm({
    name: "Typeahead",
    configFields: _C(),
    partFields: TC(),
    factory: function factory(e, t, o, n) {
      var s = function s(t, o, _s25) {
        e.previewing.set(!1);
        var r = mw.getCoupled(t, "sandbox");
        if (Dd.isOpen(r)) rm.getCurrent(r).each(function (e) {
          Bm.getHighlighted(e).fold(function () {
            _s25(e);
          }, function () {
            Or(r, e.element, "keydown", o);
          });
        });else {
          var _o26 = function _o26(e) {
            rm.getCurrent(e).each(_s25);
          };

          bw(e, a(t), t, r, n, _o26, hw.HighlightFirst).get(b);
        }
      },
          r = Ux(e),
          a = function a(e) {
        return function (t) {
          return t.map(function (t) {
            var o = fe(t.menus),
                n = X(o, function (e) {
              return W(e.items, function (e) {
                return "item" === e.type;
              });
            });
            return Zd.getState(e).update(P(n, function (e) {
              return e.data;
            })), t;
          });
        };
      },
          i = [Hp.config({}), Zd.config({
        onSetValue: e.onSetValue,
        store: _objectSpread({
          mode: "dataset",
          getDataKey: function getDataKey(e) {
            return Da(e.element);
          },
          getFallbackEntry: function getFallbackEntry(e) {
            return {
              value: e,
              meta: {}
            };
          },
          setValue: function setValue(t, o) {
            Fa(t.element, e.model.getDisplayText(o));
          }
        }, e.initialData.map(function (e) {
          return vs("initialValue", e);
        }).getOr({}))
      }), wC.config({
        stream: {
          mode: "throttle",
          delay: e.responseTime,
          stopEvent: !1
        },
        onStream: function onStream(t, o) {
          var s = mw.getCoupled(t, "sandbox");

          if (Hp.isFocused(t) && Da(t.element).length >= e.minChars) {
            var _o27 = rm.getCurrent(s).bind(function (e) {
              return Bm.getHighlighted(e).map(Zd.getValue);
            });

            e.previewing.set(!0);

            var _r10 = function _r10(t) {
              rm.getCurrent(s).each(function (t) {
                _o27.fold(function () {
                  e.model.selectsOver && Bm.highlightFirst(t);
                }, function (e) {
                  Bm.highlightBy(t, function (t) {
                    return Zd.getValue(t).value === e.value;
                  }), Bm.getHighlighted(t).orThunk(function () {
                    return Bm.highlightFirst(t), B.none();
                  });
                });
              });
            };

            bw(e, a(t), t, s, n, _r10, hw.HighlightFirst).get(b);
          }
        },
        cancelEvent: sr()
      }), kp.config({
        mode: "special",
        onDown: function onDown(e, t) {
          return s(e, t, Bm.highlightFirst), B.some(!0);
        },
        onEscape: function onEscape(e) {
          var t = mw.getCoupled(e, "sandbox");
          return Dd.isOpen(t) ? (Dd.close(t), B.some(!0)) : B.none();
        },
        onUp: function onUp(e, t) {
          return s(e, t, Bm.highlightLast), B.some(!0);
        },
        onEnter: function onEnter(t) {
          var o = mw.getCoupled(t, "sandbox"),
              n = Dd.isOpen(o);
          if (n && !e.previewing.get()) return rm.getCurrent(o).bind(function (e) {
            return Bm.getHighlighted(e);
          }).map(function (e) {
            return wr(t, OC(), {
              item: e
            }), !0;
          });
          {
            var _s26 = Zd.getValue(t);

            return xr(t, sr()), e.onExecute(o, t, _s26), n && Dd.close(o), B.some(!0);
          }
        }
      }), $p.config({
        toggleClass: e.markers.openClass,
        aria: {
          mode: "expanded"
        }
      }), mw.config({
        others: {
          sandbox: function sandbox(t) {
            return Sw(e, t, {
              onOpen: function onOpen() {
                return $p.on(t);
              },
              onClose: function onClose() {
                return $p.off(t);
              }
            });
          }
        }
      }), Fp("typeaheadevents", [Nr(function (t) {
        var o = b;
        yw(e, a(t), t, n, o, hw.HighlightFirst).get(b);
      }), Br(OC(), function (t, o) {
        var n = mw.getCoupled(t, "sandbox");
        SC(e.model, t, o.event.item), xr(t, sr()), e.onItemExecute(t, n, o.event.item, Zd.getValue(t)), Dd.close(n), CC(t);
      })].concat(e.dismissOnBlur ? [Br(Ys(), function (e) {
        var t = mw.getCoupled(e, "sandbox");
        xl(t.element).isNone() && Dd.close(t);
      })] : []))];

      return {
        uid: e.uid,
        dom: Gx(sn(e, {
          inputAttributes: {
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-haspopup": "true"
          }
        })),
        behaviours: _objectSpread({}, r, {}, tu(e.typeaheadBehaviours, i)),
        eventOrder: e.eventOrder
      };
    }
  }),
      BC = function BC(e) {
    return _objectSpread({}, e, {
      toCached: function toCached() {
        return BC(e.toCached());
      },
      bindFuture: function bindFuture(t) {
        return BC(e.bind(function (e) {
          return e.fold(function (e) {
            return Zx(qo.error(e));
          }, function (e) {
            return t(e);
          });
        }));
      },
      bindResult: function bindResult(t) {
        return BC(e.map(function (e) {
          return e.bind(t);
        }));
      },
      mapResult: function mapResult(t) {
        return BC(e.map(function (e) {
          return e.map(t);
        }));
      },
      mapError: function mapError(t) {
        return BC(e.map(function (e) {
          return e.mapError(t);
        }));
      },
      foldResult: function foldResult(t, o) {
        return e.map(function (e) {
          return e.fold(t, o);
        });
      },
      withTimeout: function withTimeout(t, o) {
        return BC(Jx(function (n) {
          var s = !1;
          var r = setTimeout(function () {
            s = !0, n(qo.error(o()));
          }, t);
          e.get(function (e) {
            s || (clearTimeout(r), n(e));
          });
        }));
      }
    });
  },
      MC = function MC(e) {
    return BC(Jx(e));
  },
      AC = function AC(e) {
    return {
      isEnabled: function isEnabled() {
        return !ym.isDisabled(e);
      },
      setEnabled: function setEnabled(t) {
        return ym.set(e, !t);
      },
      setActive: function setActive(t) {
        var o = e.element;
        t ? (Ta(o, "tox-tbtn--enabled"), ht(o, "aria-pressed", !0)) : (Ea(o, "tox-tbtn--enabled"), xt(o, "aria-pressed"));
      },
      isActive: function isActive() {
        return Ba(e.element, "tox-tbtn--enabled");
      }
    };
  },
      DC = function DC(e, t, o, n) {
    return Zk({
      text: e.text,
      icon: e.icon,
      tooltip: e.tooltip,
      role: n,
      fetch: function fetch(t, n) {
        e.fetch(function (e) {
          n(oC(e, Uf.CLOSE_ON_EXECUTE, o, !1));
        });
      },
      onSetup: e.onSetup,
      getApi: AC,
      columns: 1,
      presets: "normal",
      classes: [],
      dropdownBehaviours: [Tx.config({})]
    }, t, o.shared);
  },
      FC = function FC(e, t, o) {
    var n = function n(e) {
      return function (n) {
        var s = !n.isActive();
        n.setActive(s), e.storage.set(s), o.shared.getSink().each(function (o) {
          t().getOpt(o).each(function (t) {
            bl(t.element), wr(t, Vx, {
              name: e.name,
              value: e.storage.get()
            });
          });
        });
      };
    },
        s = function s(e) {
      return function (t) {
        t.setActive(e.storage.get());
      };
    };

    return function (t) {
      t(P(e, function (e) {
        var t = e.text.fold(function () {
          return {};
        }, function (e) {
          return {
            text: e
          };
        });
        return _objectSpread({
          type: e.type,
          active: !1
        }, t, {
          onAction: n(e),
          onSetup: s(e)
        });
      }));
    };
  },
      IC = function IC(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var n = arguments.length > 3 ? arguments[3] : undefined;
    var s = arguments.length > 4 ? arguments[4] : undefined;
    var r = arguments.length > 5 ? arguments[5] : undefined;

    var a = t.fold(function () {
      return {};
    }, function (e) {
      return {
        action: e
      };
    }),
        i = _objectSpread({
      buttonBehaviours: cl([Rv(function () {
        return !e.enabled || r.isDisabled();
      }), Iv(), Tx.config({}), Fp("button press", [Er("click"), Er("mousedown")])].concat(o)),
      eventOrder: {
        click: ["button press", "alloy.base.behaviour"],
        mousedown: ["button press", "alloy.base.behaviour"]
      }
    }, a),
        l = sn(i, {
      dom: n
    });

    return sn(l, {
      components: s
    });
  },
      RC = function RC(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var s = {
      tag: "button",
      classes: ["tox-tbtn"],
      attributes: e.tooltip.map(function (e) {
        return {
          "aria-label": o.translate(e),
          title: o.translate(e)
        };
      }).getOr({})
    },
        r = e.icon.map(function (e) {
      return qk(e, o.icons);
    }),
        a = Uv([r]);
    return IC(e, t, n, s, a, o);
  },
      VC = function VC(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var r = o.translate(e.text),
        a = e.icon.map(function (e) {
      return qk(e, o.icons);
    }),
        i = [a.getOrThunk(function () {
      return La(r);
    })],
        l = [].concat(_toConsumableArray(function (e) {
      switch (e) {
        case "primary":
          return ["tox-button"];

        case "toolbar":
          return ["tox-tbtn"];

        default:
          return ["tox-button", "tox-button--secondary"];
      }
    }(e.buttonType.getOr(e.primary || e.borderless ? "primary" : "secondary"))), _toConsumableArray(a.isSome() ? ["tox-button--icon"] : []), _toConsumableArray(e.borderless ? ["tox-button--naked"] : []), _toConsumableArray(s));
    return IC(e, t, n, {
      tag: "button",
      classes: l,
      attributes: {
        title: r
      }
    }, i, o);
  },
      zC = function zC(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var r = VC(e, B.some(t), o, n, s);
    return Sh.sketch(r);
  },
      HC = function HC(e, t) {
    return function (o) {
      "custom" === t ? wr(o, Vx, {
        name: e,
        value: {}
      }) : "submit" === t ? xr(o, zx) : "cancel" === t ? xr(o, Rx) : console.error("Unknown button type: ", t);
    };
  },
      PC = function PC(e, t, o) {
    if (function (e, t) {
      return "menu" === t;
    }(0, t)) {
      var _t30 = function _t30() {
        return _r11;
      },
          _n35 = e,
          _s27 = _objectSpread({}, e, {
        onSetup: function onSetup(t) {
          return t.setEnabled(e.enabled), b;
        },
        fetch: FC(_n35.items, _t30, o)
      }),
          _r11 = kh(DC(_s27, "tox-tbtn", o, B.none()));

      return _r11.asSpec();
    }

    if (function (e, t) {
      return "custom" === t || "cancel" === t || "submit" === t;
    }(0, t)) {
      var _n36 = HC(e.name, t),
          _s28 = _objectSpread({}, e, {
        borderless: !1
      });

      return zC(_s28, _n36, o.shared.providers, []);
    }

    console.error("Unknown footer button type: ", t);
  },
      NC = {
    type: "separator"
  },
      LC = function LC(e) {
    return {
      type: "menuitem",
      value: e.url,
      text: e.title,
      meta: {
        attach: e.attach
      },
      onAction: b
    };
  },
      WC = function WC(e, t) {
    return {
      type: "menuitem",
      value: t,
      text: e,
      meta: {
        attach: void 0
      },
      onAction: b
    };
  },
      UC = function UC(e, t) {
    return function (e) {
      return P(e, LC);
    }(function (e, t) {
      return W(t, function (t) {
        return t.type === e;
      });
    }(e, t));
  },
      jC = function jC(e) {
    return UC("header", e.targets);
  },
      GC = function GC(e) {
    return UC("anchor", e.targets);
  },
      $C = function $C(e) {
    return B.from(e.anchorTop).map(function (e) {
      return WC("<top>", e);
    }).toArray();
  },
      qC = function qC(e) {
    return B.from(e.anchorBottom).map(function (e) {
      return WC("<bottom>", e);
    }).toArray();
  },
      XC = function XC(e, t) {
    var o = e.toLowerCase();
    return W(t, function (e) {
      var t = void 0 !== e.meta && void 0 !== e.meta.text ? e.meta.text : e.text;
      return Oe(t.toLowerCase(), o) || Oe(e.value.toLowerCase(), o);
    });
  },
      KC = Kr("aria-invalid"),
      YC = function YC(e, t) {
    e.dom.checked = t;
  },
      JC = function JC(e) {
    return e.dom.checked;
  },
      ZC = function ZC(e) {
    return function (t, o, n, s) {
      return be(o, "name").fold(function () {
        return e(o, s, B.none());
      }, function (r) {
        return t.field(r, e(o, s, be(n, r)));
      });
    };
  },
      QC = {
    bar: ZC(function (e, t) {
      return function (e, t) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-bar", "tox-form__controls-h-stack"]
          },
          components: P(e.items, t.interpreter)
        };
      }(e, t.shared);
    }),
    collection: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = e.label.map(function (e) {
          return Dx(e, t);
        }),
            s = function s(e) {
          return function (t, o) {
            ti(o.event.target, "[data-collection-item-value]").each(function (n) {
              e(t, o, n, bt(n, "data-collection-item-value"));
            });
          };
        },
            r = s(function (o, n, s, r) {
          n.stop(), t.isDisabled() || wr(o, Vx, {
            name: e.name,
            value: r
          });
        }),
            a = [Br(Rs(), s(function (e, t, o) {
          bl(o);
        })), Br(Ws(), r), Br(tr(), r), Br(Vs(), s(function (e, t, o) {
          ei(e.element, "." + Jf).each(function (e) {
            Ea(e, Jf);
          }), Ta(o, Jf);
        })), Br(zs(), s(function (e) {
          ei(e.element, "." + Jf).each(function (e) {
            Ea(e, Jf);
          });
        })), Nr(s(function (t, o, n, s) {
          wr(t, Vx, {
            name: e.name,
            value: s
          });
        }))],
            i = function i(e, t) {
          return P(Dc(e.element, ".tox-collection__item"), t);
        },
            l = Cx.parts.field({
          dom: {
            tag: "div",
            classes: ["tox-collection"].concat(1 !== e.columns ? ["tox-collection--grid"] : ["tox-collection--list"])
          },
          components: [],
          factory: {
            sketch: x
          },
          behaviours: cl([ym.config({
            disabled: t.isDisabled,
            onDisabled: function onDisabled(e) {
              i(e, function (e) {
                Ta(e, "tox-collection__item--state-disabled"), ht(e, "aria-disabled", !0);
              });
            },
            onEnabled: function onEnabled(e) {
              i(e, function (e) {
                Ea(e, "tox-collection__item--state-disabled"), xt(e, "aria-disabled");
              });
            }
          }), Iv(), Dp.config({}), Zd.config({
            store: {
              mode: "memory",
              initialValue: o.getOr([])
            },
            onSetValue: function onSetValue(o, n) {
              (function (o, n) {
                var s = P(n, function (o) {
                  var n = Ch.translate(o.text),
                      s = 1 === e.columns ? "<div class=\"tox-collection__item-label\">".concat(n, "</div>") : "",
                      r = "<div class=\"tox-collection__item-icon\">".concat(o.icon, "</div>"),
                      a = {
                    _: " ",
                    " - ": " ",
                    "-": " "
                  },
                      i = n.replace(/\_| \- |\-/g, function (e) {
                    return a[e];
                  });
                  return "<div class=\"tox-collection__item".concat(t.isDisabled() ? " tox-collection__item--state-disabled" : "", "\" tabindex=\"-1\" data-collection-item-value=\"").concat(Ex.encodeAllRaw(o.value), "\" title=\"").concat(i, "\" aria-label=\"").concat(i, "\">").concat(r).concat(s, "</div>");
                }),
                    r = "auto" !== e.columns && e.columns > 1 ? H(s, e.columns) : [s],
                    a = P(r, function (e) {
                  return "<div class=\"tox-collection__group\">".concat(e.join(""), "</div>");
                });
                Wr(o.element, a.join(""));
              })(o, n), "auto" === e.columns && xv(o, 5, "tox-collection__item").each(function (_ref12) {
                var e = _ref12.numRows,
                    t = _ref12.numColumns;
                kp.setGridSize(o, e, t);
              }), xr(o, Lx);
            }
          }), Tx.config({}), kp.config((c = e.columns, 1 === c ? {
            mode: "menu",
            moveOnTab: !1,
            selector: ".tox-collection__item"
          } : "auto" === c ? {
            mode: "flatgrid",
            selector: ".tox-collection__item",
            initSize: {
              numColumns: 1,
              numRows: 1
            }
          } : {
            mode: "matrix",
            selectors: {
              row: ".tox-collection__group",
              cell: ".".concat(Gf)
            }
          })), Fp("collection-events", a)]),
          eventOrder: _defineProperty({}, Qs(), ["disabling", "alloy.base.behaviour", "collection-events"])
        });

        var c;
        return Bx(n, l, ["tox-form__group--collection"], []);
      }(e, t.shared.providers, o);
    }),
    alertbanner: ZC(function (e, t) {
      return function (e, t) {
        return xx.sketch({
          dom: {
            tag: "div",
            attributes: {
              role: "alert"
            },
            classes: ["tox-notification", "tox-notification--in", "tox-notification--".concat(e.level)]
          },
          components: [{
            dom: {
              tag: "div",
              classes: ["tox-notification__icon"]
            },
            components: [Sh.sketch({
              dom: {
                tag: "button",
                classes: ["tox-button", "tox-button--naked", "tox-button--icon"],
                innerHtml: Mh(e.icon, t.icons),
                attributes: {
                  title: t.translate(e.iconTooltip)
                }
              },
              action: function action(t) {
                wr(t, Vx, {
                  name: "alert-banner",
                  value: e.url
                });
              },
              buttonBehaviours: cl([Ah()])
            })]
          }, {
            dom: {
              tag: "div",
              classes: ["tox-notification__body"],
              innerHtml: t.translate(e.text)
            }
          }]
        });
      }(e, t.shared.providers);
    }),
    input: ZC(function (e, t, o) {
      return function (e, t, o) {
        return hC({
          name: e.name,
          multiline: !1,
          label: e.label,
          inputMode: e.inputMode,
          placeholder: e.placeholder,
          flex: !1,
          disabled: !e.enabled,
          classname: "tox-textfield",
          validation: B.none(),
          maximized: e.maximized,
          data: o
        }, t);
      }(e, t.shared.providers, o);
    }),
    textarea: ZC(function (e, t, o) {
      return function (e, t, o) {
        return hC({
          name: e.name,
          multiline: !0,
          label: e.label,
          inputMode: B.none(),
          placeholder: e.placeholder,
          flex: !0,
          disabled: !e.enabled,
          classname: "tox-textarea",
          validation: B.none(),
          maximized: e.maximized,
          data: o
        }, t);
      }(e, t.shared.providers, o);
    }),
    label: ZC(function (e, t) {
      return function (e, t) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-form__group"]
          },
          components: [{
            dom: {
              tag: "label",
              classes: ["tox-label"]
            },
            components: [La(t.providers.translate(e.label))]
          }].concat(_toConsumableArray(P(e.items, t.interpreter))),
          behaviours: cl([Ok(), Dp.config({}), (o = B.none(), Bk(o, Lr, Wr)), kp.config({
            mode: "acyclic"
          })])
        };
        var o;
      }(e, t.shared);
    }),
    iframe: (C_ = function C_(e, t, o) {
      return function (e, t, o) {
        var n = e.sandboxed,
            s = e.transparent,
            r = "tox-dialog__iframe",
            a = _objectSpread({}, e.label.map(function (e) {
          return {
            title: e
          };
        }).getOr({}), {}, o.map(function (e) {
          return {
            srcdoc: e
          };
        }).getOr({}), {}, n ? {
          sandbox: "allow-scripts allow-same-origin"
        } : {}),
            i = function (e) {
          var t = fs(e.getOr(""));
          return {
            getValue: function getValue(e) {
              return t.get();
            },
            setValue: function setValue(e, o) {
              t.get() !== o && ht(e.element, "srcdoc", o), t.set(o);
            }
          };
        }(o),
            l = e.label.map(function (e) {
          return Dx(e, t);
        }),
            c = Cx.parts.field({
          factory: {
            sketch: function sketch(e) {
              return Nk({
                uid: e.uid,
                dom: {
                  tag: "iframe",
                  attributes: a,
                  classes: s ? [r] : [r, "".concat(r, "--opaque")]
                },
                behaviours: cl([Tx.config({}), Hp.config({}), Dk(o, i.getValue, i.setValue)])
              });
            }
          }
        });

        return Bx(l, c, ["tox-form__group--stretched"], []);
      }(e, t.shared.providers, o);
    }, function (e, t, o, n) {
      var s = sn(t, {
        source: "dynamic"
      });
      return ZC(C_)(e, s, o, n);
    }),
    button: ZC(function (e, t) {
      return function (e, t) {
        var o = HC(e.name, "custom");
        return n = B.none(), s = Cx.parts.field(_objectSpread({
          factory: Sh
        }, VC(e, B.some(o), t, [Fk(""), Ok()]))), Bx(n, s, [], []);
        var n, s;
      }(e, t.shared.providers);
    }),
    checkbox: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = function n(e) {
          return e.element.dom.click(), B.some(!0);
        },
            s = Cx.parts.field({
          factory: {
            sketch: x
          },
          dom: {
            tag: "input",
            classes: ["tox-checkbox__input"],
            attributes: {
              type: "checkbox"
            }
          },
          behaviours: cl([Ok(), ym.config({
            disabled: function disabled() {
              return !e.enabled || t.isDisabled();
            }
          }), Tx.config({}), Hp.config({}), Ak(o, JC, YC), kp.config({
            mode: "special",
            onEnter: n,
            onSpace: n,
            stopSpaceKeyup: !0
          }), Fp("checkbox-events", [Br(Ls(), function (t, o) {
            wr(t, Fx, {
              name: e.name
            });
          })])])
        }),
            r = Cx.parts.label({
          dom: {
            tag: "span",
            classes: ["tox-checkbox__label"]
          },
          components: [La(t.translate(e.label))],
          behaviours: cl([Ew.config({})])
        }),
            a = function a(e) {
          return Fh("checked" === e ? "selected" : "unselected", {
            tag: "span",
            classes: ["tox-icon", "tox-checkbox-icon__" + e]
          }, t.icons);
        },
            i = kh({
          dom: {
            tag: "div",
            classes: ["tox-checkbox__icons"]
          },
          components: [a("checked"), a("unchecked")]
        });

        return Cx.sketch({
          dom: {
            tag: "label",
            classes: ["tox-checkbox"]
          },
          components: [s, i.asSpec(), r],
          fieldBehaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || t.isDisabled();
            },
            disableClass: "tox-checkbox--disabled",
            onDisabled: function onDisabled(e) {
              Cx.getField(e).each(ym.disable);
            },
            onEnabled: function onEnabled(e) {
              Cx.getField(e).each(ym.enable);
            }
          }), Iv()])
        });
      }(e, t.shared.providers, o);
    }),
    colorinput: ZC(function (e, t, o) {
      return function (e, t, o, n) {
        var s = Cx.parts.field({
          factory: $x,
          inputClasses: ["tox-textfield"],
          data: n,
          onSetValue: function onSetValue(e) {
            return lw.run(e).get(b);
          },
          inputBehaviours: cl([ym.config({
            disabled: t.providers.isDisabled
          }), Iv(), Tx.config({}), lw.config({
            invalidClass: "tox-textbox-field-invalid",
            getRoot: function getRoot(e) {
              return Ze(e.element);
            },
            notify: {
              onValid: function onValid(e) {
                var t = Zd.getValue(e);
                wr(e, Bw, {
                  color: t
                });
              }
            },
            validator: {
              validateOnLoad: !1,
              validate: function validate(e) {
                var t = Zd.getValue(e);
                if (0 === t.length) return Zx(qo.value(!0));
                {
                  var _e20 = De("span");

                  kt(_e20, "background-color", t);

                  var _o28 = Et(_e20, "background-color").fold(function () {
                    return qo.error("blah");
                  }, function (e) {
                    return qo.value(t);
                  });

                  return Zx(_o28);
                }
              }
            }
          })]),
          selectOnFocus: !1
        }),
            r = e.label.map(function (e) {
          return Dx(e, t.providers);
        }),
            a = function a(e, t) {
          wr(e, Mw, {
            value: t
          });
        },
            i = kh(function (e, t) {
          return Tw.sketch({
            dom: e.dom,
            components: e.components,
            toggleClass: "mce-active",
            dropdownBehaviours: cl([Rv(t.providers.isDisabled), Iv(), Ew.config({}), Tx.config({})]),
            layouts: e.layouts,
            sandboxClasses: ["tox-dialog__popups"],
            lazySink: t.getSink,
            fetch: function fetch(o) {
              return Jx(function (t) {
                return e.fetch(t);
              }).map(function (n) {
                return B.from(lx(sn(Xy(Kr("menu-value"), n, function (t) {
                  e.onItemAction(o, t);
                }, e.columns, e.presets, Uf.CLOSE_ON_EXECUTE, _, t.providers), {
                  movement: Yy(e.columns, e.presets)
                })));
              });
            },
            parts: {
              menu: ab(0, 0, e.presets)
            }
          });
        }({
          dom: {
            tag: "span",
            attributes: {
              "aria-label": t.providers.translate("Color swatch")
            }
          },
          layouts: {
            onRtl: function onRtl() {
              return [Gi, ji, Ki];
            },
            onLtr: function onLtr() {
              return [ji, Gi, Ki];
            }
          },
          components: [],
          fetch: Uy(o.getColors(), o.hasCustomColors()),
          columns: o.getColorCols(),
          presets: "color",
          onItemAction: function onItemAction(e, t) {
            i.getOpt(e).each(function (e) {
              "custom" === t ? o.colorPicker(function (t) {
                t.fold(function () {
                  return xr(e, Aw);
                }, function (t) {
                  a(e, t), Hy(t);
                });
              }, "#ffffff") : a(e, "remove" === t ? "" : t);
            });
          }
        }, t));

        return Cx.sketch({
          dom: {
            tag: "div",
            classes: ["tox-form__group"]
          },
          components: r.toArray().concat([{
            dom: {
              tag: "div",
              classes: ["tox-color-input"]
            },
            components: [s, i.asSpec()]
          }]),
          fieldBehaviours: cl([Fp("form-field-events", [Br(Bw, function (t, o) {
            i.getOpt(t).each(function (e) {
              kt(e.element, "background-color", o.event.color);
            }), wr(t, Fx, {
              name: e.name
            });
          }), Br(Mw, function (e, t) {
            Cx.getField(e).each(function (o) {
              Zd.setValue(o, t.event.value), rm.getCurrent(e).each(Hp.focus);
            });
          }), Br(Aw, function (e, t) {
            Cx.getField(e).each(function (t) {
              rm.getCurrent(e).each(Hp.focus);
            });
          })])])
        });
      }(e, t.shared, t.colorinput, o);
    }),
    colorpicker: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = function n(e) {
          return "tox-" + e;
        },
            s = Ck(function (e) {
          return function (t) {
            return e.translate(Ik[t]);
          };
        }(t), n),
            r = kh(s.sketch({
          dom: {
            tag: "div",
            classes: [n("color-picker-container")],
            attributes: {
              role: "presentation"
            }
          },
          onValidHex: function onValidHex(e) {
            wr(e, Vx, {
              name: "hex-valid",
              value: !0
            });
          },
          onInvalidHex: function onInvalidHex(e) {
            wr(e, Vx, {
              name: "hex-valid",
              value: !1
            });
          }
        }));

        return {
          dom: {
            tag: "div"
          },
          components: [r.asSpec()],
          behaviours: cl([Dk(o, function (e) {
            var t = r.get(e);
            return rm.getCurrent(t).bind(function (e) {
              return Zd.getValue(e).hex;
            }).map(function (e) {
              return "#" + e;
            }).getOr("");
          }, function (e, t) {
            var o = /^#([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)/.exec(t),
                n = r.get(e);
            rm.getCurrent(n).fold(function () {
              console.log("Can not find form");
            }, function (e) {
              Zd.setValue(e, {
                hex: B.from(o[1]).getOr("")
              }), vk.getField(e, "hex").each(function (e) {
                xr(e, Ns());
              });
            });
          }), Ok()])
        };
      }(0, t.shared.providers, o);
    }),
    dropzone: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = function n(e, t) {
          t.stop();
        },
            s = function s(e) {
          return function (t, o) {
            N(e, function (e) {
              e(t, o);
            });
          };
        },
            r = function r(e, t) {
          if (!ym.isDisabled(e)) {
            var _o29 = t.event.raw;
            i(e, _o29.dataTransfer.files);
          }
        },
            a = function a(e, t) {
          var o = t.event.raw.target;
          i(e, o.files);
        },
            i = function i(o, n) {
          Zd.setValue(o, function (e, t) {
            var o = Vk.explode(t.getOption("images_file_types"));
            return W(se(e), function (e) {
              return V(o, function (t) {
                return _e(e.name.toLowerCase(), ".".concat(t.toLowerCase()));
              });
            });
          }(n, t)), wr(o, Fx, {
            name: e.name
          });
        },
            l = kh({
          dom: {
            tag: "input",
            attributes: {
              type: "file",
              accept: "image/*"
            },
            styles: {
              display: "none"
            }
          },
          behaviours: cl([Fp("input-file-events", [Ir(Ws()), Ir(tr())])])
        }),
            c = e.label.map(function (e) {
          return Dx(e, t);
        }),
            d = Cx.parts.field({
          factory: {
            sketch: function sketch(e) {
              return {
                uid: e.uid,
                dom: {
                  tag: "div",
                  classes: ["tox-dropzone-container"]
                },
                behaviours: cl([Fk(o.getOr([])), Ok(), ym.config({}), $p.config({
                  toggleClass: "dragenter",
                  toggleOnExecute: !1
                }), Fp("dropzone-events", [Br("dragenter", s([n, $p.toggle])), Br("dragleave", s([n, $p.toggle])), Br("dragover", n), Br("drop", s([n, r])), Br(Ls(), a)])]),
                components: [{
                  dom: {
                    tag: "div",
                    classes: ["tox-dropzone"],
                    styles: {}
                  },
                  components: [{
                    dom: {
                      tag: "p"
                    },
                    components: [La(t.translate("Drop an image here"))]
                  }, Sh.sketch({
                    dom: {
                      tag: "button",
                      styles: {
                        position: "relative"
                      },
                      classes: ["tox-button", "tox-button--secondary"]
                    },
                    components: [La(t.translate("Browse for an image")), l.asSpec()],
                    action: function action(e) {
                      l.get(e).element.dom.click();
                    },
                    buttonBehaviours: cl([Tx.config({}), Rv(t.isDisabled), Iv()])
                  })]
                }]
              };
            }
          }
        });

        return Bx(c, d, ["tox-form__group--stretched"], []);
      }(e, t.shared.providers, o);
    }),
    grid: ZC(function (e, t) {
      return function (e, t) {
        return {
          dom: {
            tag: "div",
            classes: ["tox-form__grid", "tox-form__grid--".concat(e.columns, "col")]
          },
          components: P(e.items, t.interpreter)
        };
      }(e, t.shared);
    }),
    listbox: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = t.shared.providers,
            s = o.bind(function (t) {
          return aC(e.items, t);
        }).orThunk(function () {
          return oe(e.items).filter(nC);
        }),
            r = e.label.map(function (e) {
          return Dx(e, n);
        }),
            a = Cx.parts.field({
          dom: {},
          factory: {
            sketch: function sketch(o) {
              return Zk({
                uid: o.uid,
                text: s.map(function (e) {
                  return e.text;
                }),
                icon: B.none(),
                tooltip: e.label,
                role: B.none(),
                fetch: function fetch(o, n) {
                  var s = rC(o, e.name, e.items, Zd.getValue(o));
                  n(oC(s, Uf.CLOSE_ON_EXECUTE, t, !1));
                },
                onSetup: y(b),
                getApi: y({}),
                columns: 1,
                presets: "normal",
                classes: [],
                dropdownBehaviours: [Tx.config({}), Dk(s.map(function (e) {
                  return e.value;
                }), function (e) {
                  return bt(e.element, sC);
                }, function (t, o) {
                  aC(e.items, o).each(function (e) {
                    ht(t.element, sC, e.value), wr(t, Yk, {
                      text: e.text
                    });
                  });
                })]
              }, "tox-listbox", t.shared);
            }
          }
        }),
            i = {
          dom: {
            tag: "div",
            classes: ["tox-listboxfield"]
          },
          components: [a]
        };
        return Cx.sketch({
          dom: {
            tag: "div",
            classes: ["tox-form__group"]
          },
          components: q([r.toArray(), [i]]),
          fieldBehaviours: cl([ym.config({
            disabled: y(!e.enabled),
            onDisabled: function onDisabled(e) {
              Cx.getField(e).each(ym.disable);
            },
            onEnabled: function onEnabled(e) {
              Cx.getField(e).each(ym.enable);
            }
          })])
        });
      }(e, t, o);
    }),
    selectbox: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = P(e.items, function (e) {
          return {
            text: t.translate(e.text),
            value: e.value
          };
        }),
            s = e.label.map(function (e) {
          return Dx(e, t);
        }),
            r = Cx.parts.field(_objectSpread({
          dom: {}
        }, o.map(function (e) {
          return {
            data: e
          };
        }).getOr({}), {
          selectAttributes: {
            size: e.size
          },
          options: n,
          factory: iC,
          selectBehaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || t.isDisabled();
            }
          }), Tx.config({}), Fp("selectbox-change", [Br(Ls(), function (t, o) {
            wr(t, Fx, {
              name: e.name
            });
          })])])
        })),
            a = e.size > 1 ? B.none() : B.some(Fh("chevron-down", {
          tag: "div",
          classes: ["tox-selectfield__icon-js"]
        }, t.icons)),
            i = {
          dom: {
            tag: "div",
            classes: ["tox-selectfield"]
          },
          components: q([[r], a.toArray()])
        };
        return Cx.sketch({
          dom: {
            tag: "div",
            classes: ["tox-form__group"]
          },
          components: q([s.toArray(), [i]]),
          fieldBehaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || t.isDisabled();
            },
            onDisabled: function onDisabled(e) {
              Cx.getField(e).each(ym.disable);
            },
            onEnabled: function onEnabled(e) {
              Cx.getField(e).each(ym.enable);
            }
          }), Iv()])
        });
      }(e, t.shared.providers, o);
    }),
    sizeinput: ZC(function (e, t) {
      return function (e, t) {
        var o = pC;

        var n = Kr("ratio-event"),
            s = function s(e) {
          return Fh(e, {
            tag: "span",
            classes: ["tox-icon", "tox-lock-icon__" + e]
          }, t.icons);
        },
            r = uC.parts.lock({
          dom: {
            tag: "button",
            classes: ["tox-lock", "tox-button", "tox-button--naked", "tox-button--icon"],
            attributes: {
              title: t.translate(e.label.getOr("Constrain proportions"))
            }
          },
          components: [s("lock"), s("unlock")],
          buttonBehaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || t.isDisabled();
            }
          }), Iv(), Tx.config({})])
        }),
            a = function a(e) {
          return {
            dom: {
              tag: "div",
              classes: ["tox-form__group"]
            },
            components: e
          };
        },
            i = function i(o) {
          return Cx.parts.field({
            factory: $x,
            inputClasses: ["tox-textfield"],
            inputBehaviours: cl([ym.config({
              disabled: function disabled() {
                return !e.enabled || t.isDisabled();
              }
            }), Iv(), Tx.config({}), Fp("size-input-events", [Br(Vs(), function (e, t) {
              wr(e, n, {
                isField1: o
              });
            }), Br(Ls(), function (t, o) {
              wr(t, Fx, {
                name: e.name
              });
            })])]),
            selectOnFocus: !1
          });
        },
            l = function l(e) {
          return {
            dom: {
              tag: "label",
              classes: ["tox-label"]
            },
            components: [La(t.translate(e))]
          };
        },
            c = uC.parts.field1(a([Cx.parts.label(l("Width")), i(!0)])),
            d = uC.parts.field2(a([Cx.parts.label(l("Height")), i(!1)]));

        return uC.sketch({
          dom: {
            tag: "div",
            classes: ["tox-form__group"]
          },
          components: [{
            dom: {
              tag: "div",
              classes: ["tox-form__controls-h-stack"]
            },
            components: [c, d, a([l("\xa0"), r])]
          }],
          field1Name: "width",
          field2Name: "height",
          locked: !0,
          markers: {
            lockClass: "tox-locked"
          },
          onLockedChange: function onLockedChange(e, t, n) {
            mC(Zd.getValue(e)).each(function (e) {
              o(e).each(function (e) {
                Zd.setValue(t, function (e) {
                  var t = {
                    "": 0,
                    px: 0,
                    pt: 1,
                    mm: 1,
                    pc: 2,
                    ex: 2,
                    em: 2,
                    ch: 2,
                    rem: 2,
                    cm: 3,
                    "in": 4,
                    "%": 4
                  };
                  var o = e.value.toFixed((n = e.unit) in t ? t[n] : 1);
                  var n;
                  return -1 !== o.indexOf(".") && (o = o.replace(/\.?0*$/, "")), o + e.unit;
                }(e));
              });
            });
          },
          coupledFieldBehaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || t.isDisabled();
            },
            onDisabled: function onDisabled(e) {
              uC.getField1(e).bind(Cx.getField).each(ym.disable), uC.getField2(e).bind(Cx.getField).each(ym.disable), uC.getLock(e).each(ym.disable);
            },
            onEnabled: function onEnabled(e) {
              uC.getField1(e).bind(Cx.getField).each(ym.enable), uC.getField2(e).bind(Cx.getField).each(ym.enable), uC.getLock(e).each(ym.enable);
            }
          }), Iv(), Fp("size-input-events2", [Br(n, function (e, t) {
            var n = t.event.isField1,
                s = n ? uC.getField1(e) : uC.getField2(e),
                r = n ? uC.getField2(e) : uC.getField1(e),
                a = s.map(Zd.getValue).getOr(""),
                i = r.map(Zd.getValue).getOr("");

            o = function (e, t) {
              var o = mC(e).toOptional(),
                  n = mC(t).toOptional();
              return Se(o, n, function (e, t) {
                return gC(e, t.unit).map(function (e) {
                  return t.value / e;
                }).map(function (e) {
                  return o = e, n = t.unit, function (e) {
                    return gC(e, n).map(function (e) {
                      return {
                        value: e * o,
                        unit: n
                      };
                    });
                  };
                  var o, n;
                }).getOr(pC);
              }).getOr(pC);
            }(a, i);
          })])])
        });
      }(e, t.shared.providers);
    }),
    slider: ZC(function (e, t, o) {
      return function (e, t, o) {
        var n = dk.parts.label({
          dom: {
            tag: "label",
            classes: ["tox-label"]
          },
          components: [La(t.translate(e.label))]
        }),
            s = dk.parts.spectrum({
          dom: {
            tag: "div",
            classes: ["tox-slider__rail"],
            attributes: {
              role: "presentation"
            }
          }
        }),
            r = dk.parts.thumb({
          dom: {
            tag: "div",
            classes: ["tox-slider__handle"],
            attributes: {
              role: "presentation"
            }
          }
        });
        return dk.sketch({
          dom: {
            tag: "div",
            classes: ["tox-slider"],
            attributes: {
              role: "presentation"
            }
          },
          model: {
            mode: "x",
            minX: e.min,
            maxX: e.max,
            getInitialValue: y(o.getOrThunk(function () {
              return (Math.abs(e.max) - Math.abs(e.min)) / 2;
            }))
          },
          components: [n, s, r],
          sliderBehaviours: cl([Ok(), Hp.config({})]),
          onChoose: function onChoose(t, o, n) {
            wr(t, Fx, {
              name: e.name,
              value: n
            });
          }
        });
      }(e, t.shared.providers, o);
    }),
    urlinput: ZC(function (e, t, o) {
      return function (e, t, o, n) {
        var s = t.shared.providers,
            r = function r(t) {
          var n = Zd.getValue(t);
          o.addToHistory(n.value, e.filetype);
        },
            a = Cx.parts.field(_objectSpread({
          factory: EC
        }, n.map(function (e) {
          return {
            initialData: e
          };
        }).getOr({}), {
          dismissOnBlur: !0,
          inputClasses: ["tox-textfield"],
          sandboxClasses: ["tox-dialog__popups"],
          inputAttributes: {
            "aria-errormessage": KC,
            type: "url"
          },
          minChars: 0,
          responseTime: 0,
          fetch: function fetch(n) {
            var s = function (e, t, o) {
              var n = Zd.getValue(t),
                  s = void 0 !== n.meta.text ? n.meta.text : n.value;
              return o.getLinkInformation().fold(function () {
                return [];
              }, function (t) {
                var n = XC(s, function (e) {
                  return P(e, function (e) {
                    return WC(e, e);
                  });
                }(o.getHistory(e)));
                return "file" === e ? (r = [n, XC(s, jC(t)), XC(s, q([$C(t), GC(t), qC(t)]))], j(r, function (e, t) {
                  return 0 === e.length || 0 === t.length ? e.concat(t) : e.concat(NC, t);
                }, [])) : n;
                var r;
              });
            }(e.filetype, n, o),
                r = oC(s, Uf.BUBBLE_TO_SANDBOX, t, !1);

            return Zx(r);
          },
          getHotspot: function getHotspot(e) {
            return m.getOpt(e);
          },
          onSetValue: function onSetValue(e, t) {
            e.hasConfigured(lw) && lw.run(e).get(b);
          },
          typeaheadBehaviours: cl(q([o.getValidationHandler().map(function (t) {
            return lw.config({
              getRoot: function getRoot(e) {
                return Ze(e.element);
              },
              invalidClass: "tox-control-wrap--status-invalid",
              notify: {
                onInvalid: function onInvalid(e, t) {
                  l.getOpt(e).each(function (e) {
                    ht(e.element, "title", s.translate(t));
                  });
                }
              },
              validator: {
                validate: function validate(o) {
                  var n = Zd.getValue(o);
                  return MC(function (o) {
                    t({
                      type: e.filetype,
                      url: n.value
                    }, function (e) {
                      if ("invalid" === e.status) {
                        var _t31 = qo.error(e.message);

                        o(_t31);
                      } else {
                        var _t32 = qo.value(e.message);

                        o(_t32);
                      }
                    });
                  });
                },
                validateOnLoad: !1
              }
            });
          }).toArray(), [ym.config({
            disabled: function disabled() {
              return !e.enabled || s.isDisabled();
            }
          }), Tx.config({}), Fp("urlinput-events", q(["file" === e.filetype ? [Br(Ns(), function (t) {
            wr(t, Fx, {
              name: e.name
            });
          })] : [], [Br(Ls(), function (t) {
            wr(t, Fx, {
              name: e.name
            }), r(t);
          }), Br(Js(), function (t) {
            wr(t, Fx, {
              name: e.name
            }), r(t);
          })]]))]])),
          eventOrder: _defineProperty({}, Ns(), ["streaming", "urlinput-events", "invalidating"]),
          model: {
            getDisplayText: function getDisplayText(e) {
              return e.value;
            },
            selectsOver: !1,
            populateFromBrowse: !1
          },
          markers: {
            openClass: "tox-textfield--popup-open"
          },
          lazySink: t.shared.getSink,
          parts: {
            menu: ab(0, 0, "normal")
          },
          onExecute: function onExecute(e, t, o) {
            wr(t, zx, {});
          },
          onItemExecute: function onItemExecute(t, o, n, s) {
            r(t), wr(t, Fx, {
              name: e.name
            });
          }
        })),
            i = e.label.map(function (e) {
          return Dx(e, s);
        }),
            l = kh(function (e, t) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e;
          return Fh(o, {
            tag: "div",
            classes: ["tox-icon", "tox-control-wrap__status-icon-" + e],
            attributes: _objectSpread({
              title: s.translate(n),
              "aria-live": "polite"
            }, t.fold(function () {
              return {};
            }, function (e) {
              return {
                id: e
              };
            }))
          }, s.icons);
        }("invalid", B.some(KC), "warning")),
            c = kh({
          dom: {
            tag: "div",
            classes: ["tox-control-wrap__status-icon-wrap"]
          },
          components: [l.asSpec()]
        }),
            d = o.getUrlPicker(e.filetype),
            u = Kr("browser.url.event"),
            m = kh({
          dom: {
            tag: "div",
            classes: ["tox-control-wrap"]
          },
          components: [a, c.asSpec()],
          behaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || s.isDisabled();
            }
          })])
        }),
            g = kh(zC({
          name: e.name,
          icon: B.some("browse"),
          text: e.label.getOr(""),
          enabled: e.enabled,
          primary: !1,
          buttonType: B.none(),
          borderless: !0
        }, function (e) {
          return xr(e, u);
        }, s, [], ["tox-browse-url"]));

        return Cx.sketch({
          dom: Ax([]),
          components: i.toArray().concat([{
            dom: {
              tag: "div",
              classes: ["tox-form__controls-h-stack"]
            },
            components: q([[m.asSpec()], d.map(function () {
              return g.asSpec();
            }).toArray()])
          }]),
          fieldBehaviours: cl([ym.config({
            disabled: function disabled() {
              return !e.enabled || s.isDisabled();
            },
            onDisabled: function onDisabled(e) {
              Cx.getField(e).each(ym.disable), g.getOpt(e).each(ym.disable);
            },
            onEnabled: function onEnabled(e) {
              Cx.getField(e).each(ym.enable), g.getOpt(e).each(ym.enable);
            }
          }), Iv(), Fp("url-input-events", [Br(u, function (t) {
            rm.getCurrent(t).each(function (o) {
              var n = Zd.getValue(o),
                  s = _objectSpread({
                fieldname: e.name
              }, n);

              d.each(function (n) {
                n(s).get(function (n) {
                  Zd.setValue(o, n), wr(t, Fx, {
                    name: e.name
                  });
                });
              });
            });
          })])])
        });
      }(e, t, t.urlinput, o);
    }),
    customeditor: ZC(function (e) {
      var t = Hl(),
          o = kh({
        dom: {
          tag: e.tag
        }
      }),
          n = Hl();
      return {
        dom: {
          tag: "div",
          classes: ["tox-custom-editor"]
        },
        behaviours: cl([Fp("custom-editor-events", [zr(function (s) {
          o.getOpt(s).each(function (o) {
            ((function (e) {
              return ve(e, "init");
            })(e) ? e.init(o.element.dom) : Rk.load(e.scriptId, e.scriptUrl).then(function (t) {
              return t(o.element.dom, e.settings);
            })).then(function (e) {
              n.on(function (t) {
                e.setValue(t);
              }), n.clear(), t.set(e);
            });
          });
        })]), Dk(B.none(), function () {
          return t.get().fold(function () {
            return n.get().getOr("");
          }, function (e) {
            return e.getValue();
          });
        }, function (e, o) {
          t.get().fold(function () {
            return n.set(o);
          }, function (e) {
            return e.setValue(o);
          });
        }), Ok()]),
        components: [o.asSpec()]
      };
    }),
    htmlpanel: ZC(function (e) {
      return "presentation" === e.presets ? xx.sketch({
        dom: {
          tag: "div",
          classes: ["tox-form__group"],
          innerHtml: e.html
        }
      }) : xx.sketch({
        dom: {
          tag: "div",
          classes: ["tox-form__group"],
          innerHtml: e.html,
          attributes: {
            role: "document"
          }
        },
        containerBehaviours: cl([Tx.config({}), Hp.config({})])
      });
    }),
    imagepreview: ZC(function (e, t, o) {
      return function (e, t) {
        var o = fs(t.getOr({
          url: ""
        })),
            n = kh({
          dom: {
            tag: "img",
            classes: ["tox-imagepreview__image"],
            attributes: t.map(function (e) {
              return {
                src: e.url
              };
            }).getOr({})
          }
        }),
            s = kh({
          dom: {
            tag: "div",
            classes: ["tox-imagepreview__container"],
            attributes: {
              role: "presentation"
            }
          },
          components: [n.asSpec()]
        }),
            r = {};
        e.height.each(function (e) {
          return r.height = e;
        });
        var a = t.map(function (e) {
          return {
            url: e.url,
            zoom: B.from(e.zoom),
            cachedWidth: B.from(e.cachedWidth),
            cachedHeight: B.from(e.cachedHeight)
          };
        });
        return {
          dom: {
            tag: "div",
            classes: ["tox-imagepreview"],
            styles: r,
            attributes: {
              role: "presentation"
            }
          },
          components: [s.asSpec()],
          behaviours: cl([Ok(), Dk(a, function () {
            return o.get();
          }, function (e, t) {
            var r = {
              url: t.url
            };
            t.zoom.each(function (e) {
              return r.zoom = e;
            }), t.cachedWidth.each(function (e) {
              return r.cachedWidth = e;
            }), t.cachedHeight.each(function (e) {
              return r.cachedHeight = e;
            }), o.set(r);

            var a = function a() {
              var t = r.cachedWidth,
                  o = r.cachedHeight;

              if (u(r.zoom)) {
                var _n37 = function (e, t, o) {
                  var n = Ut(e),
                      s = Rt(e);
                  return Math.min(n / t, s / o, 1);
                }(e.element, t, o);

                r.zoom = _n37;
              }

              var n = function (e, t, o, n, s) {
                var r = o * s,
                    a = n * s,
                    i = Math.max(0, e / 2 - r / 2),
                    l = Math.max(0, t / 2 - a / 2);
                return {
                  left: i.toString() + "px",
                  top: l.toString() + "px",
                  width: r.toString() + "px",
                  height: a.toString() + "px"
                };
              }(Ut(e.element), Rt(e.element), t, o, r.zoom);

              s.getOpt(e).each(function (e) {
                Ct(e.element, n);
              });
            };

            n.getOpt(e).each(function (o) {
              var n = o.element;
              var s;
              t.url !== bt(n, "src") && (ht(n, "src", t.url), Ea(e.element, "tox-imagepreview__loaded")), u(r.cachedWidth) || u(r.cachedHeight) || a(), (s = n, new Promise(function (e, t) {
                var o = function o() {
                  r(), e(s);
                },
                    n = [Nl(s, "load", o), Nl(s, "error", function () {
                  r(), t("Unable to load data from image: " + s.dom.src);
                })],
                    r = function r() {
                  return N(n, function (e) {
                    return e.unbind();
                  });
                };

                s.dom.complete && o();
              })).then(function (t) {
                e.getSystem().isConnected() && (Ta(e.element, "tox-imagepreview__loaded"), r.cachedWidth = t.dom.naturalWidth, r.cachedHeight = t.dom.naturalHeight, a());
              });
            });
          })])
        };
      }(e, o);
    }),
    table: ZC(function (e, t) {
      return function (e, t) {
        var o = function o(e) {
          return {
            dom: {
              tag: "td",
              innerHtml: t.translate(e)
            }
          };
        };

        return {
          dom: {
            tag: "table",
            classes: ["tox-dialog__table"]
          },
          components: [(s = e.header, {
            dom: {
              tag: "thead"
            },
            components: [{
              dom: {
                tag: "tr"
              },
              components: P(s, function (e) {
                return {
                  dom: {
                    tag: "th",
                    innerHtml: t.translate(e)
                  }
                };
              })
            }]
          }), (n = e.cells, {
            dom: {
              tag: "tbody"
            },
            components: P(n, function (e) {
              return {
                dom: {
                  tag: "tr"
                },
                components: P(e, o)
              };
            })
          })],
          behaviours: cl([Tx.config({}), Hp.config({})])
        };
        var n, s;
      }(e, t.shared.providers);
    }),
    panel: ZC(function (e, t) {
      return function (e, t) {
        return {
          dom: {
            tag: "div",
            classes: e.classes
          },
          components: P(e.items, t.shared.interpreter)
        };
      }(e, t);
    })
  },
      eO = {
    field: function field(e, t) {
      return t;
    },
    record: y([])
  },
      tO = function tO(e, t, o, n) {
    var s = sn(n, {
      shared: {
        interpreter: function interpreter(t) {
          return oO(e, t, o, s);
        }
      }
    });
    return oO(e, t, o, s);
  },
      oO = function oO(e, t, o, n) {
    return be(QC, t.type).fold(function () {
      return console.error("Unknown factory type \"".concat(t.type, "\", defaulting to container: "), t), t;
    }, function (s) {
      return s(e, t, o, n);
    });
  },
      nO = "layout-inset",
      sO = function sO(e) {
    return e.x;
  },
      rO = function rO(e, t) {
    return e.x + e.width / 2 - t.width / 2;
  },
      aO = function aO(e, t) {
    return e.x + e.width - t.width;
  },
      iO = function iO(e) {
    return e.y;
  },
      lO = function lO(e, t) {
    return e.y + e.height - t.height;
  },
      cO = function cO(e, t) {
    return e.y + e.height / 2 - t.height / 2;
  },
      dO = function dO(e, t, o) {
    return Ci(aO(e, t), lO(e, t), o.insetSouthwest(), Bi(), "southwest", Vi(e, {
      right: 0,
      bottom: 3
    }), nO);
  },
      uO = function uO(e, t, o) {
    return Ci(sO(e), lO(e, t), o.insetSoutheast(), Ei(), "southeast", Vi(e, {
      left: 1,
      bottom: 3
    }), nO);
  },
      mO = function mO(e, t, o) {
    return Ci(aO(e, t), iO(e), o.insetNorthwest(), Ti(), "northwest", Vi(e, {
      right: 0,
      top: 2
    }), nO);
  },
      gO = function gO(e, t, o) {
    return Ci(sO(e), iO(e), o.insetNortheast(), _i(), "northeast", Vi(e, {
      left: 1,
      top: 2
    }), nO);
  },
      pO = function pO(e, t, o) {
    return Ci(rO(e, t), iO(e), o.insetNorth(), Mi(), "north", Vi(e, {
      top: 2
    }), nO);
  },
      hO = function hO(e, t, o) {
    return Ci(rO(e, t), lO(e, t), o.insetSouth(), Ai(), "south", Vi(e, {
      bottom: 3
    }), nO);
  },
      fO = function fO(e, t, o) {
    return Ci(aO(e, t), cO(e, t), o.insetEast(), Fi(), "east", Vi(e, {
      right: 0
    }), nO);
  },
      bO = function bO(e, t, o) {
    return Ci(sO(e), cO(e, t), o.insetWest(), Di(), "west", Vi(e, {
      left: 1
    }), nO);
  },
      vO = function vO(e) {
    switch (e) {
      case "north":
        return pO;

      case "northeast":
        return gO;

      case "northwest":
        return mO;

      case "south":
        return hO;

      case "southeast":
        return uO;

      case "southwest":
        return dO;

      case "east":
        return fO;

      case "west":
        return bO;
    }
  },
      yO = function yO(e, t, o, n, s) {
    return Fl(n).map(vO).getOr(pO)(e, t, o, n, s);
  },
      xO = function xO(e) {
    switch (e) {
      case "north":
        return hO;

      case "northeast":
        return uO;

      case "northwest":
        return dO;

      case "south":
        return pO;

      case "southeast":
        return gO;

      case "southwest":
        return mO;

      case "east":
        return bO;

      case "west":
        return fO;
    }
  },
      wO = function wO(e, t, o, n, s) {
    return Fl(n).map(xO).getOr(pO)(e, t, o, n, s);
  },
      SO = {
    valignCentre: [],
    alignCentre: [],
    alignLeft: [],
    alignRight: [],
    right: [],
    left: [],
    bottom: [],
    top: []
  },
      kO = function kO(e, t, o) {
    var n = {
      maxHeightFunction: Xl()
    };
    return function () {
      return o() ? {
        type: "node",
        root: lt(e()),
        node: B.from(e()),
        bubble: Zl(12, 12, SO),
        layouts: {
          onRtl: function onRtl() {
            return [gO];
          },
          onLtr: function onLtr() {
            return [mO];
          }
        },
        overrides: n
      } : {
        type: "hotspot",
        hotspot: t(),
        bubble: Zl(-12, 12, SO),
        layouts: {
          onRtl: function onRtl() {
            return [ji];
          },
          onLtr: function onLtr() {
            return [Gi];
          }
        },
        overrides: n
      };
    };
  },
      CO = function CO(e, t, o) {
    return function () {
      return o() ? {
        type: "node",
        root: lt(e()),
        node: B.from(e()),
        layouts: {
          onRtl: function onRtl() {
            return [pO];
          },
          onLtr: function onLtr() {
            return [pO];
          }
        }
      } : {
        type: "hotspot",
        hotspot: t(),
        layouts: {
          onRtl: function onRtl() {
            return [Ki];
          },
          onLtr: function onLtr() {
            return [Ki];
          }
        }
      };
    };
  },
      OO = function OO(e, t) {
    return function () {
      return {
        type: "selection",
        root: t(),
        getSelection: function getSelection() {
          var t = e.selection.getRng();
          return B.some(Oc.range(Ie(t.startContainer), t.startOffset, Ie(t.endContainer), t.endOffset));
        }
      };
    };
  },
      _O = function _O(e) {
    return function (t) {
      return {
        type: "node",
        root: e(),
        node: t
      };
    };
  },
      TO = function TO(e, t, o) {
    var n = If(e),
        s = function s() {
      return Ie(e.getBody());
    },
        r = function r() {
      return Ie(e.getContentAreaContainer());
    },
        a = function a() {
      return n || !o();
    };

    return {
      inlineDialog: kO(r, t, a),
      banner: CO(r, t, a),
      cursor: OO(e, s),
      node: _O(s)
    };
  },
      EO = function EO(e) {
    return function (t, o) {
      qy(e)(t, o);
    };
  },
      BO = function BO(e) {
    return function () {
      return Vy(e);
    };
  },
      MO = function MO(e) {
    return function () {
      return zy(e);
    };
  },
      AO = function AO(e) {
    return function () {
      return Ry(e);
    };
  },
      DO = function DO(e) {
    return {
      colorPicker: EO(e),
      hasCustomColors: BO(e),
      getColors: MO(e),
      getColorCols: AO(e)
    };
  },
      FO = function FO(e) {
    return function () {
      return vf(e);
    };
  },
      IO = function IO(e) {
    return {
      isDraggableModal: FO(e)
    };
  },
      RO = [{
    title: "Headings",
    items: [{
      title: "Heading 1",
      format: "h1"
    }, {
      title: "Heading 2",
      format: "h2"
    }, {
      title: "Heading 3",
      format: "h3"
    }, {
      title: "Heading 4",
      format: "h4"
    }, {
      title: "Heading 5",
      format: "h5"
    }, {
      title: "Heading 6",
      format: "h6"
    }]
  }, {
    title: "Inline",
    items: [{
      title: "Bold",
      format: "bold"
    }, {
      title: "Italic",
      format: "italic"
    }, {
      title: "Underline",
      format: "underline"
    }, {
      title: "Strikethrough",
      format: "strikethrough"
    }, {
      title: "Superscript",
      format: "superscript"
    }, {
      title: "Subscript",
      format: "subscript"
    }, {
      title: "Code",
      format: "code"
    }]
  }, {
    title: "Blocks",
    items: [{
      title: "Paragraph",
      format: "p"
    }, {
      title: "Blockquote",
      format: "blockquote"
    }, {
      title: "Div",
      format: "div"
    }, {
      title: "Pre",
      format: "pre"
    }]
  }, {
    title: "Align",
    items: [{
      title: "Left",
      format: "alignleft"
    }, {
      title: "Center",
      format: "aligncenter"
    }, {
      title: "Right",
      format: "alignright"
    }, {
      title: "Justify",
      format: "alignjustify"
    }]
  }],
      VO = function VO(e) {
    return j(e, function (e, t) {
      if (ve(t, "items")) {
        var _o30 = VO(t.items);

        return {
          customFormats: e.customFormats.concat(_o30.customFormats),
          formats: e.formats.concat([{
            title: t.title,
            items: _o30.formats
          }])
        };
      }

      if (ve(t, "inline") || function (e) {
        return ve(e, "block");
      }(t) || function (e) {
        return ve(e, "selector");
      }(t)) {
        var _o31 = "custom-".concat(r(t.name) ? t.name : t.title.toLowerCase());

        return {
          customFormats: e.customFormats.concat([{
            name: _o31,
            format: t
          }]),
          formats: e.formats.concat([{
            title: t.title,
            format: _o31,
            icon: t.icon
          }])
        };
      }

      return _objectSpread({}, e, {
        formats: e.formats.concat(t)
      });
    }, {
      customFormats: [],
      formats: []
    });
  },
      zO = function zO(e) {
    return Jh(e).map(function (t) {
      var o = function (e, t) {
        var o = VO(t),
            n = function n(t) {
          N(t, function (t) {
            e.formatter.has(t.name) || e.formatter.register(t.name, t.format);
          });
        };

        return e.formatter ? n(o.customFormats) : e.on("init", function () {
          n(o.customFormats);
        }), o.formats;
      }(e, t);

      return Zh(e) ? RO.concat(o) : o;
    }).getOr(RO);
  },
      HO = function HO(e, t, o) {
    var n = {
      type: "formatter",
      isSelected: t(e.format),
      getStylePreview: o(e.format)
    };
    return sn(e, n);
  },
      PO = function PO(e, t, o, n) {
    var s = function s(t) {
      return P(t, function (t) {
        var a = ae(t);

        if (ye(t, "items")) {
          var _e21 = s(t.items);

          return sn(function (e) {
            return sn(e, {
              type: "submenu"
            });
          }(t), {
            getStyleItems: y(_e21)
          });
        }

        return ye(t, "format") ? function (e) {
          return HO(e, o, n);
        }(t) : 1 === a.length && R(a, "title") ? sn(t, {
          type: "separator"
        }) : function (t) {
          var s = r(t.name) ? t.name : Kr(t.title),
              a = "custom-".concat(s),
              i = {
            type: "formatter",
            format: a,
            isSelected: o(a),
            getStylePreview: n(a)
          },
              l = sn(t, i);
          return e.formatter.register(s, l), l;
        }(t);
      });
    };

    return s(t);
  },
      NO = function NO(e) {
    var t = function t(_t33) {
      return function () {
        return e.formatter.match(_t33);
      };
    },
        o = function o(t) {
      return function () {
        var o = e.formatter.get(t);
        return void 0 !== o ? B.some({
          tag: o.length > 0 && (o[0].inline || o[0].block) || "div",
          styles: e.dom.parseStyle(e.formatter.getCssText(t))
        }) : B.none();
      };
    },
        n = function n(e) {
      var t = e.items;
      return void 0 !== t && t.length > 0 ? X(t, n) : [e.format];
    },
        s = fs([]),
        r = fs([]),
        a = fs([]),
        i = fs([]),
        l = fs(!1);

    return e.on("PreInit", function (a) {
      var i = zO(e),
          l = PO(e, i, t, o);
      s.set(l), r.set(X(l, n));
    }), e.on("addStyleModifications", function (s) {
      var r = PO(e, s.items, t, o);
      a.set(r), l.set(s.replace), i.set(X(r, n));
    }), {
      getData: function getData() {
        var e = l.get() ? [] : s.get(),
            t = a.get();
        return e.concat(t);
      },
      getFlattenedKeys: function getFlattenedKeys() {
        var e = l.get() ? [] : r.get(),
            t = i.get();
        return e.concat(t);
      }
    };
  },
      LO = Vk.trim,
      WO = function WO(e) {
    return function (t) {
      if (function (e) {
        return g(e) && 1 === e.nodeType;
      }(t)) {
        if (t.contentEditable === e) return !0;
        if (t.getAttribute("data-mce-contenteditable") === e) return !0;
      }

      return !1;
    };
  },
      UO = WO("true"),
      jO = WO("false"),
      GO = function GO(e, t, o, n, s) {
    return {
      type: e,
      title: t,
      url: o,
      level: n,
      attach: s
    };
  },
      $O = function $O(e) {
    return e.innerText || e.textContent;
  },
      qO = function qO(e) {
    return function (e) {
      return e && "A" === e.nodeName && void 0 !== (e.id || e.name);
    }(e) && KO(e);
  },
      XO = function XO(e) {
    return e && /^(H[1-6])$/.test(e.nodeName);
  },
      KO = function KO(e) {
    return function (e) {
      for (; e = e.parentNode;) {
        var _t34 = e.contentEditable;
        if (_t34 && "inherit" !== _t34) return UO(e);
      }

      return !1;
    }(e) && !jO(e);
  },
      YO = function YO(e) {
    return XO(e) && KO(e);
  },
      JO = function JO(e) {
    var t = function (e) {
      return e.id ? e.id : Kr("h");
    }(e);

    return GO("header", $O(e), "#" + t, function (e) {
      return XO(e) ? parseInt(e.nodeName.substr(1), 10) : 0;
    }(e), function () {
      e.id = t;
    });
  },
      ZO = function ZO(e) {
    var t = e.id || e.name,
        o = $O(e);
    return GO("anchor", o || "#" + t, "#" + t, 0, b);
  },
      QO = function QO(e) {
    return LO(e.title).length > 0;
  },
      e_ = function e_(e) {
    var t = function (e) {
      var t = P(Dc(Ie(e), "h1,h2,h3,h4,h5,h6,a:not([href])"), function (e) {
        return e.dom;
      });
      return t;
    }(e);

    return W(function (e) {
      return P(W(e, YO), JO);
    }(t).concat(function (e) {
      return P(W(e, qO), ZO);
    }(t)), QO);
  },
      t_ = "tinymce-url-history",
      o_ = function o_(e) {
    return r(e) && /^https?/.test(e);
  },
      n_ = function n_(e) {
    return a(e) && he(e, function (e) {
      return !(l(t = e) && t.length <= 5 && K(t, o_));
      var t;
    }).isNone();
  },
      s_ = function s_() {
    var e = My.getItem(t_);
    if (null === e) return {};
    var t;

    try {
      t = JSON.parse(e);
    } catch (e) {
      if (e instanceof SyntaxError) return console.log("Local storage " + t_ + " was not valid JSON", e), {};
      throw e;
    }

    return n_(t) ? t : (console.log("Local storage " + t_ + " was not valid format", t), {});
  },
      r_ = function r_(e) {
    var t = s_();
    return be(t, e).getOr([]);
  },
      a_ = function a_(e, t) {
    if (!o_(e)) return;
    var o = s_(),
        n = be(o, t).getOr([]),
        s = W(n, function (t) {
      return t !== e;
    });
    o[t] = [e].concat(s).slice(0, 5), function (e) {
      if (!n_(e)) throw new Error("Bad format for history:\n" + JSON.stringify(e));
      My.setItem(t_, JSON.stringify(e));
    }(o);
  },
      i_ = function i_(e) {
    return !!e;
  },
      l_ = function l_(e) {
    return ce(Vk.makeMap(e, /[, ]/), i_);
  },
      c_ = function c_(e) {
    return B.from(mf(e));
  },
      d_ = function d_(e) {
    return B.from(e).filter(r).getOrUndefined();
  },
      u_ = function u_(e) {
    return {
      getHistory: r_,
      addToHistory: a_,
      getLinkInformation: function getLinkInformation() {
        return function (e) {
          return hf(e) ? B.some({
            targets: e_(e.getBody()),
            anchorTop: d_(ff(e)),
            anchorBottom: d_(bf(e))
          }) : B.none();
        }(e);
      },
      getValidationHandler: function getValidationHandler() {
        return function (e) {
          return B.from(gf(e));
        }(e);
      },
      getUrlPicker: function getUrlPicker(t) {
        return function (e, t) {
          return function (e, t) {
            var o = function (e) {
              var t = B.from(pf(e)).filter(i_).map(l_);
              return c_(e).fold(_, function (e) {
                return t.fold(T, function (e) {
                  return ae(e).length > 0 && e;
                });
              });
            }(e);

            return d(o) ? o ? c_(e) : B.none() : o[t] ? c_(e) : B.none();
          }(e, t).map(function (o) {
            return function (n) {
              return Jx(function (s) {
                var i = _objectSpread({
                  filetype: t,
                  fieldname: n.fieldname
                }, B.from(n.meta).getOr({}));

                o.call(e, function (e, t) {
                  if (!r(e)) throw new Error("Expected value to be string");
                  if (void 0 !== t && !a(t)) throw new Error("Expected meta to be a object");
                  s({
                    value: e,
                    meta: t
                  });
                }, n.value, i);
              });
            };
          });
        }(e, t);
      }
    };
  },
      m_ = Xu,
      g_ = Au,
      p_ = y([is("shell", !1), jn("makeItem"), is("setupItem", b), ou("listBehaviours", [Dp])]),
      h_ = Eu({
    name: "items",
    overrides: function overrides() {
      return {
        behaviours: cl([Dp.config({})])
      };
    }
  }),
      f_ = y([h_]),
      b_ = tm({
    name: y("CustomList")(),
    configFields: p_(),
    partFields: f_(),
    factory: function factory(e, t, o, n) {
      var s = e.shell ? {
        behaviours: [Dp.config({})],
        components: []
      } : {
        behaviours: [],
        components: t
      };
      return {
        uid: e.uid,
        dom: e.dom,
        components: s.components,
        behaviours: tu(e.listBehaviours, s.behaviours),
        apis: {
          setItems: function setItems(t, o) {
            var n;
            (n = t, e.shell ? B.some(n) : Nu(n, e, "items")).fold(function () {
              throw console.error("Custom List was defined to not be a shell, but no item container was specified in components"), new Error("Custom List was defined to not be a shell, but no item container was specified in components");
            }, function (n) {
              var s = Dp.contents(n),
                  r = o.length,
                  a = r - s.length,
                  i = a > 0 ? z(a, function () {
                return e.makeItem();
              }) : [],
                  l = s.slice(r);
              N(l, function (e) {
                return Dp.remove(n, e);
              }), N(i, function (e) {
                return Dp.append(n, e);
              });
              var c = Dp.contents(n);
              N(c, function (n, s) {
                e.setupItem(t, n, o[s], s);
              });
            });
          }
        }
      };
    },
    apis: {
      setItems: function setItems(e, t, o) {
        e.setItems(t, o);
      }
    }
  }),
      v_ = y([jn("dom"), is("shell", !0), Qd("toolbarBehaviours", [Dp])]),
      y_ = y([Eu({
    name: "groups",
    overrides: function overrides() {
      return {
        behaviours: cl([Dp.config({})])
      };
    }
  })]),
      x_ = tm({
    name: "Toolbar",
    configFields: v_(),
    partFields: y_(),
    factory: function factory(e, t, o, n) {
      var s = e.shell ? {
        behaviours: [Dp.config({})],
        components: []
      } : {
        behaviours: [],
        components: t
      };
      return {
        uid: e.uid,
        dom: e.dom,
        components: s.components,
        behaviours: tu(e.toolbarBehaviours, s.behaviours),
        apis: {
          setGroups: function setGroups(t, o) {
            var n;
            (n = t, e.shell ? B.some(n) : Nu(n, e, "groups")).fold(function () {
              throw console.error("Toolbar was defined to not be a shell, but no groups container was specified in components"), new Error("Toolbar was defined to not be a shell, but no groups container was specified in components");
            }, function (e) {
              Dp.set(e, o);
            });
          }
        },
        domModification: {
          attributes: {
            role: "group"
          }
        }
      };
    },
    apis: {
      setGroups: function setGroups(e, t, o) {
        e.setGroups(t, o);
      }
    }
  }),
      w_ = b,
      S_ = _,
      k_ = y([]);

  var C_,
      O_ = Object.freeze({
    __proto__: null,
    setup: w_,
    isDocked: S_,
    getBehaviours: k_
  });

  var __ = function __(e) {
    return (xe(Et(e, "position"), "fixed") ? B.none() : Qe(e)).orThunk(function () {
      var t = De("span");
      return Je(e).bind(function (e) {
        Bo(e, t);
        var o = Qe(t);
        return Do(t), o;
      });
    });
  },
      T_ = function T_(e) {
    return __(e).map(Nt).getOrThunk(function () {
      return Ht(0, 0);
    });
  },
      E_ = bs([{
    "static": []
  }, {
    absolute: ["positionCss"]
  }, {
    fixed: ["positionCss"]
  }]),
      B_ = function B_(e, t) {
    var o = e.element;
    Ta(o, t.transitionClass), Ea(o, t.fadeOutClass), Ta(o, t.fadeInClass), t.onShow(e);
  },
      M_ = function M_(e, t) {
    var o = e.element;
    Ta(o, t.transitionClass), Ea(o, t.fadeInClass), Ta(o, t.fadeOutClass), t.onHide(e);
  },
      A_ = function A_(e, t, o) {
    return K(e, function (e) {
      switch (e) {
        case "bottom":
          return function (e, t) {
            return e.bottom <= t.bottom;
          }(t, o);

        case "top":
          return function (e, t) {
            return e.y >= t.y;
          }(t, o);
      }
    });
  },
      D_ = function D_(e, t) {
    return t.getInitialPos().map(function (t) {
      return Lo(t.bounds.x, t.bounds.y, Ut(e), Rt(e));
    });
  },
      F_ = function F_(e, t, o) {
    return o.getInitialPos().bind(function (n) {
      switch (_o32.clearInitialPos(), n.position) {
        case "static":
          return B.some(E_["static"]());

        case "absolute":
          var _o32 = __(e).map(Wo).getOrThunk(function () {
            return Wo(mt());
          });

          return B.some(E_.absolute(Sl("absolute", be(n.style, "left").map(function (e) {
            return t.x - _o32.x;
          }), be(n.style, "top").map(function (e) {
            return t.y - _o32.y;
          }), be(n.style, "right").map(function (e) {
            return _o32.right - t.right;
          }), be(n.style, "bottom").map(function (e) {
            return _o32.bottom - t.bottom;
          }))));

        default:
          return B.none();
      }
    });
  },
      I_ = function I_(e, t, o) {
    var n = e.element;
    return xe(Et(n, "position"), "fixed") ? function (e, t, o) {
      return D_(e, o).filter(function (e) {
        return A_(o.getModes(), e, t);
      }).bind(function (t) {
        return F_(e, t, o);
      });
    }(n, t, o) : function (e, t, o) {
      var n = Wo(e);
      if (A_(o.getModes(), n, t)) return B.none();
      {
        (function (e, t, o) {
          o.setInitialPos({
            style: Bt(e),
            position: _t(e, "position") || "static",
            bounds: t
          });
        })(e, n, o);

        var _s29 = jo(),
            _r12 = n.x - _s29.x,
            _a5 = t.y - _s29.y,
            _i2 = _s29.bottom - t.bottom,
            _l4 = n.y <= t.y;

        return B.some(E_.fixed(Sl("fixed", B.some(_r12), _l4 ? B.some(_a5) : B.none(), B.none(), _l4 ? B.none() : B.some(_i2))));
      }
    }(n, t, o);
  },
      R_ = function R_(e, t, o) {
    o.setDocked(!1), N(["left", "right", "top", "bottom", "position"], function (t) {
      return At(e.element, t);
    }), t.onUndocked(e);
  },
      V_ = function V_(e, t, o, n) {
    var s = "fixed" === n.position;
    o.setDocked(s), kl(e.element, n), (s ? t.onDocked : t.onUndocked)(e);
  },
      z_ = function z_(e, t, o, n) {
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    t.contextual.each(function (t) {
      t.lazyContext(e).each(function (r) {
        var a = function (e, t) {
          return e.y < t.bottom && e.bottom > t.y;
        }(r, n);

        a !== o.isVisible() && (o.setVisible(a), s && !a ? (Ma(e.element, [t.fadeOutClass]), t.onHide(e)) : (a ? B_ : M_)(e, t));
      });
    });
  },
      H_ = function H_(e, t, o) {
    e.getSystem().isConnected() && function (e, t, o) {
      var n = t.lazyViewport(e);
      o.isDocked() && z_(e, t, o, n), I_(e, n, o).each(function (s) {
        s.fold(function () {
          return R_(e, t, o);
        }, function (n) {
          return V_(e, t, o, n);
        }, function (s) {
          z_(e, t, o, n, !0), V_(e, t, o, s);
        });
      });
    }(e, t, o);
  },
      P_ = function P_(e, t, o) {
    o.isDocked() && function (e, t, o) {
      var n = e.element;
      o.setDocked(!1), function (e, t) {
        var o = e.element;
        return D_(o, t).bind(function (e) {
          return F_(o, e, t);
        });
      }(e, o).each(function (n) {
        n.fold(function () {
          return R_(e, t, o);
        }, function (n) {
          return V_(e, t, o, n);
        }, b);
      }), o.setVisible(!0), t.contextual.each(function (t) {
        Aa(n, [t.fadeInClass, t.fadeOutClass, t.transitionClass]), t.onShow(e);
      }), H_(e, t, o);
    }(e, t, o);
  };

  var N_ = Object.freeze({
    __proto__: null,
    refresh: H_,
    reset: P_,
    isDocked: function isDocked(e, t, o) {
      return o.isDocked();
    },
    getModes: function getModes(e, t, o) {
      return o.getModes();
    },
    setModes: function setModes(e, t, o, n) {
      return o.setModes(n);
    }
  }),
      L_ = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      return _r([Vr(js(), function (o, n) {
        e.contextual.each(function (e) {
          Ba(o.element, e.transitionClass) && (Aa(o.element, [e.transitionClass, e.fadeInClass]), (t.isVisible() ? e.onShown : e.onHidden)(o)), n.stop();
        });
      }), Br(lr(), function (o, n) {
        H_(o, e, t);
      }), Br(cr(), function (o, n) {
        P_(o, e, t);
      })]);
    }
  }),
      W_ = [as("contextual", [qn("fadeInClass"), qn("fadeOutClass"), qn("transitionClass"), Kn("lazyContext"), bi("onShow"), bi("onShown"), bi("onHide"), bi("onHidden")]), gs("lazyViewport", jo), ps("modes", ["top", "bottom"], En), bi("onDocked"), bi("onUndocked")];

  var U_ = ul({
    fields: W_,
    name: "docking",
    active: L_,
    apis: N_,
    state: Object.freeze({
      __proto__: null,
      init: function init(e) {
        var t = fs(!1),
            o = fs(!0),
            n = Hl(),
            s = fs(e.modes);
        return ga({
          isDocked: t.get,
          setDocked: t.set,
          getInitialPos: n.get,
          setInitialPos: n.set,
          clearInitialPos: n.clear,
          isVisible: o.get,
          setVisible: o.set,
          getModes: s.get,
          setModes: s.set,
          readState: function readState() {
            return "docked:  ".concat(t.get(), ", visible: ").concat(o.get(), ", modes: ").concat(s.get().join(","));
          }
        });
      }
    })
  }),
      j_ = y(Kr("toolbar-height-change")),
      G_ = {
    fadeInClass: "tox-editor-dock-fadein",
    fadeOutClass: "tox-editor-dock-fadeout",
    transitionClass: "tox-editor-dock-transition"
  },
      $_ = "tox-tinymce--toolbar-sticky-on",
      q_ = "tox-tinymce--toolbar-sticky-off",
      X_ = function X_(e, t) {
    return R(U_.getModes(e), t);
  },
      K_ = function K_(e) {
    var t = e.element;
    Je(t).each(function (o) {
      var n = "padding-" + U_.getModes(e)[0];

      if (U_.isDocked(e)) {
        var _e22 = Ut(o);

        kt(t, "width", _e22 + "px"), kt(o, n, function (e) {
          return Vt(e) + (parseInt(_t(e, "margin-top"), 10) || 0) + (parseInt(_t(e, "margin-bottom"), 10) || 0);
        }(t) + "px");
      } else At(t, "width"), At(o, n);
    });
  },
      Y_ = function Y_(e, t) {
    t ? (Ea(e, G_.fadeOutClass), Ma(e, [G_.transitionClass, G_.fadeInClass])) : (Ea(e, G_.fadeInClass), Ma(e, [G_.fadeOutClass, G_.transitionClass]));
  },
      J_ = function J_(e, t) {
    var o = Ie(e.getContainer());
    t ? (Ta(o, $_), Ea(o, q_)) : (Ta(o, q_), Ea(o, $_));
  },
      Z_ = function Z_(e, t) {
    var o = Hl(),
        n = t.getSink,
        s = function s(e) {
      n().each(function (t) {
        return e(t.element);
      });
    },
        r = function r(t) {
      e.inline || K_(t), J_(e, U_.isDocked(t)), t.getSystem().broadcastOn([Id()], {}), n().each(function (e) {
        return e.getSystem().broadcastOn([Id()], {});
      });
    },
        a = e.inline ? [] : [hl.config({
      channels: _defineProperty({}, j_(), {
        onReceive: K_
      })
    })];

    return [Hp.config({}), U_.config({
      contextual: _objectSpread({
        lazyContext: function lazyContext(t) {
          var o = Vt(t.element),
              n = e.inline ? e.getContentAreaContainer() : e.getContainer(),
              s = Wo(Ie(n)),
              r = s.height - o,
              a = s.y + (X_(t, "top") ? 0 : o);
          return B.some(Lo(s.x, a, s.width, r));
        },
        onShow: function onShow() {
          s(function (e) {
            return Y_(e, !0);
          });
        },
        onShown: function onShown(e) {
          s(function (e) {
            return Aa(e, [G_.transitionClass, G_.fadeInClass]);
          }), o.get().each(function (t) {
            (function (e, t) {
              var o = qe(t);
              yl(o).filter(function (e) {
                return !Ge(t, e);
              }).filter(function (t) {
                return Ge(t, Ie(o.dom.body)) || $e(e, t);
              }).each(function () {
                return bl(t);
              });
            })(e.element, t), o.clear();
          });
        },
        onHide: function onHide(e) {
          (function (e, t) {
            return xl(e).orThunk(function () {
              return t().toOptional().bind(function (e) {
                return xl(e.element);
              });
            });
          })(e.element, n).fold(o.clear, o.set), s(function (e) {
            return Y_(e, !1);
          });
        },
        onHidden: function onHidden() {
          s(function (e) {
            return Aa(e, [G_.transitionClass]);
          });
        }
      }, G_),
      lazyViewport: function lazyViewport(t) {
        var o = jo(),
            n = cf(e),
            s = o.y + (X_(t, "top") ? n : 0),
            r = o.height - (X_(t, "bottom") ? n : 0);
        return Lo(o.x, s, o.width, r);
      },
      modes: [t.header.getDockingMode()],
      onDocked: r,
      onUndocked: r
    })].concat(a);
  };

  var Q_ = Object.freeze({
    __proto__: null,
    setup: function setup(e, t, o) {
      e.inline || (t.header.isPositionedAtTop() || e.on("ResizeEditor", function () {
        o().each(U_.reset);
      }), e.on("ResizeWindow ResizeEditor", function () {
        o().each(K_);
      }), e.on("SkinLoaded", function () {
        o().each(function (e) {
          U_.isDocked(e) ? U_.reset(e) : U_.refresh(e);
        });
      }), e.on("FullscreenStateChanged", function () {
        o().each(U_.reset);
      })), e.on("AfterScrollIntoView", function (e) {
        o().each(function (t) {
          U_.refresh(t);
          var o = t.element;
          vg(o) && function (e, t) {
            var o = qe(t),
                n = o.dom.defaultView.innerHeight,
                s = Fo(o),
                r = Ie(e.elm),
                a = Uo(r),
                i = Rt(r),
                l = a.y,
                c = l + i,
                d = Nt(t),
                u = Rt(t),
                m = d.top,
                g = m + u,
                p = Math.abs(m - s.top) < 2,
                h = Math.abs(g - (s.top + n)) < 2;
            if (p && l < g) Io(s.left, l - u, o);else if (h && c > m) {
              var _e23 = l - n + i + u;

              Io(s.left, _e23, o);
            }
          }(e, o);
        });
      }), e.on("PostRender", function () {
        J_(e, !1);
      });
    },
    isDocked: function isDocked(e) {
      return e().map(U_.isDocked).getOr(!1);
    },
    getBehaviours: Z_
  });

  var eT = xn([pb, Gn("items", Sn([Cn([hb, Zn("items", En)]), En]))].concat(jb)),
      tT = [os("text"), os("tooltip"), os("icon"), Kn("fetch"), gs("onSetup", function () {
    return b;
  })],
      oT = xn([pb].concat(tT)),
      nT = function nT(e) {
    return Vn("menubutton", oT, e);
  },
      sT = xn([pb, Bb, Eb, Tb, Db, wb, Ob, us("presets", "normal", ["normal", "color", "listpreview"]), zb(1), kb, Cb]);

  var rT = em({
    factory: function factory(e, t) {
      var o = {
        focus: kp.focusIn,
        setMenus: function setMenus(e, o) {
          var n = P(o, function (e) {
            var o = {
              type: "menubutton",
              text: e.text,
              fetch: function fetch(t) {
                t(e.getItems());
              }
            },
                n = nT(o).mapError(function (e) {
              return Pn(e);
            }).getOrDie();
            return DC(n, "tox-mbtn", t.backstage, B.some("menuitem"));
          });
          Dp.set(e, n);
        }
      };
      return {
        uid: e.uid,
        dom: e.dom,
        components: [],
        behaviours: cl([Dp.config({}), Fp("menubar-events", [zr(function (t) {
          e.onSetup(t);
        }), Br(Rs(), function (e, t) {
          ei(e.element, ".tox-mbtn--active").each(function (o) {
            ti(t.event.target, ".tox-mbtn").each(function (t) {
              Ge(o, t) || e.getSystem().getByDom(o).each(function (o) {
                e.getSystem().getByDom(t).each(function (e) {
                  Tw.expand(e), Tw.close(o), Hp.focus(e);
                });
              });
            });
          });
        }), Br(pr(), function (e, t) {
          t.event.prevFocus.bind(function (t) {
            return e.getSystem().getByDom(t).toOptional();
          }).each(function (o) {
            t.event.newFocus.bind(function (t) {
              return e.getSystem().getByDom(t).toOptional();
            }).each(function (e) {
              Tw.isOpen(o) && (Tw.expand(e), Tw.close(o));
            });
          });
        })]), kp.config({
          mode: "flow",
          selector: ".tox-mbtn",
          onEscape: function onEscape(t) {
            return e.onEscape(t), B.some(!0);
          }
        }), Tx.config({})]),
        apis: o,
        domModification: {
          attributes: {
            role: "menubar"
          }
        }
      };
    },
    name: "silver.Menubar",
    configFields: [jn("dom"), jn("uid"), jn("onEscape"), jn("backstage"), is("onSetup", b)],
    apis: {
      focus: function focus(e, t) {
        e.focus(t);
      },
      setMenus: function setMenus(e, t, o) {
        e.setMenus(t, o);
      }
    }
  });

  var aT = function aT(e, t) {
    return t.getAnimationRoot.fold(function () {
      return e.element;
    }, function (t) {
      return t(e);
    });
  },
      iT = function iT(e) {
    return e.dimension.property;
  },
      lT = function lT(e, t) {
    return e.dimension.getDimension(t);
  },
      cT = function cT(e, t) {
    var o = aT(e, t);
    Aa(o, [t.shrinkingClass, t.growingClass]);
  },
      dT = function dT(e, t) {
    Ea(e.element, t.openClass), Ta(e.element, t.closedClass), kt(e.element, iT(t), "0px"), Dt(e.element);
  },
      uT = function uT(e, t) {
    Ea(e.element, t.closedClass), Ta(e.element, t.openClass), At(e.element, iT(t));
  },
      mT = function mT(e, t, o, n) {
    o.setCollapsed(), kt(e.element, iT(t), lT(t, e.element)), cT(e, t), dT(e, t), t.onStartShrink(e), t.onShrunk(e);
  },
      gT = function gT(e, t, o, n) {
    var s = n.getOrThunk(function () {
      return lT(t, e.element);
    });
    o.setCollapsed(), kt(e.element, iT(t), s), Dt(e.element);
    var r = aT(e, t);
    Ea(r, t.growingClass), Ta(r, t.shrinkingClass), dT(e, t), t.onStartShrink(e);
  },
      pT = function pT(e, t, o) {
    var n = lT(t, e.element);
    ("0px" === n ? mT : gT)(e, t, o, B.some(n));
  },
      hT = function hT(e, t, o) {
    var n = aT(e, t),
        s = Ba(n, t.shrinkingClass),
        r = lT(t, e.element);
    uT(e, t);
    var a = lT(t, e.element);
    (s ? function () {
      kt(e.element, iT(t), r), Dt(e.element);
    } : function () {
      dT(e, t);
    })(), Ea(n, t.shrinkingClass), Ta(n, t.growingClass), uT(e, t), kt(e.element, iT(t), a), o.setExpanded(), t.onStartGrow(e);
  },
      fT = function fT(e, t, o) {
    var n = aT(e, t);
    return !0 === Ba(n, t.growingClass);
  },
      bT = function bT(e, t, o) {
    var n = aT(e, t);
    return !0 === Ba(n, t.shrinkingClass);
  };

  var vT = Object.freeze({
    __proto__: null,
    refresh: function refresh(e, t, o) {
      if (o.isExpanded()) {
        At(e.element, iT(t));

        var _o33 = lT(t, e.element);

        kt(e.element, iT(t), _o33);
      }
    },
    grow: function grow(e, t, o) {
      o.isExpanded() || hT(e, t, o);
    },
    shrink: function shrink(e, t, o) {
      o.isExpanded() && pT(e, t, o);
    },
    immediateShrink: function immediateShrink(e, t, o) {
      o.isExpanded() && mT(e, t, o);
    },
    hasGrown: function hasGrown(e, t, o) {
      return o.isExpanded();
    },
    hasShrunk: function hasShrunk(e, t, o) {
      return o.isCollapsed();
    },
    isGrowing: fT,
    isShrinking: bT,
    isTransitioning: function isTransitioning(e, t, o) {
      return fT(e, t) || bT(e, t);
    },
    toggleGrow: function toggleGrow(e, t, o) {
      (o.isExpanded() ? pT : hT)(e, t, o);
    },
    disableTransitions: cT,
    immediateGrow: function immediateGrow(e, t, o) {
      o.isExpanded() || (uT(e, t), kt(e.element, iT(t), lT(t, e.element)), cT(e, t), o.setExpanded(), t.onStartGrow(e), t.onGrown(e));
    }
  }),
      yT = Object.freeze({
    __proto__: null,
    exhibit: function exhibit(e, t, o) {
      var n = t.expanded;
      return ha(n ? {
        classes: [t.openClass],
        styles: {}
      } : {
        classes: [t.closedClass],
        styles: vs(t.dimension.property, "0px")
      });
    },
    events: function events(e, t) {
      return _r([Vr(js(), function (o, n) {
        n.event.raw.propertyName === e.dimension.property && (cT(o, e), t.isExpanded() && At(o.element, e.dimension.property), (t.isExpanded() ? e.onGrown : e.onShrunk)(o));
      })]);
    }
  }),
      xT = [jn("closedClass"), jn("openClass"), jn("shrinkingClass"), jn("growingClass"), Qn("getAnimationRoot"), bi("onShrunk"), bi("onStartShrink"), bi("onGrown"), bi("onStartGrow"), is("expanded", !1), Gn("dimension", Nn("property", {
    width: [wi("property", "width"), wi("getDimension", function (e) {
      return Ut(e) + "px";
    })],
    height: [wi("property", "height"), wi("getDimension", function (e) {
      return Rt(e) + "px";
    })]
  }))];

  var wT = ul({
    fields: xT,
    name: "sliding",
    active: yT,
    apis: vT,
    state: Object.freeze({
      __proto__: null,
      init: function init(e) {
        var t = fs(e.expanded);
        return ga({
          isExpanded: function isExpanded() {
            return !0 === t.get();
          },
          isCollapsed: function isCollapsed() {
            return !1 === t.get();
          },
          setCollapsed: S(t.set, !1),
          setExpanded: S(t.set, !0),
          readState: function readState() {
            return "expanded: " + t.get();
          }
        });
      }
    })
  }),
      ST = "container",
      kT = [Qd("slotBehaviours", [])],
      CT = function CT(e) {
    return "<alloy.field." + e + ">";
  },
      OT = function OT(e, t) {
    var o = function o(t) {
      return ju(e);
    },
        n = function n(t, o) {
      return function (n, s) {
        return Nu(n, e, s).map(function (e) {
          return t(e, s);
        }).getOr(o);
      };
    },
        s = function s(e, t) {
      return "true" !== bt(e.element, "aria-hidden");
    },
        r = n(s, !1),
        a = n(function (e, t) {
      if (s(e)) {
        var _o34 = e.element;
        kt(_o34, "display", "none"), ht(_o34, "aria-hidden", "true"), wr(e, hr(), {
          name: t,
          visible: !1
        });
      }
    }),
        i = (l = a, function (e, t) {
      N(t, function (t) {
        return l(e, t);
      });
    });

    var l;
    var c = n(function (e, t) {
      if (!s(e)) {
        var _o35 = e.element;
        At(_o35, "display"), xt(_o35, "aria-hidden"), wr(e, hr(), {
          name: t,
          visible: !0
        });
      }
    }),
        d = {
      getSlotNames: o,
      getSlot: function getSlot(t, o) {
        return Nu(t, e, o);
      },
      isShowing: r,
      hideSlot: a,
      hideAllSlots: function hideAllSlots(e) {
        return i(e, o());
      },
      showSlot: c
    };
    return {
      uid: e.uid,
      dom: e.dom,
      components: t,
      behaviours: eu(e.slotBehaviours),
      apis: d
    };
  },
      _T = ce({
    getSlotNames: function getSlotNames(e, t) {
      return e.getSlotNames(t);
    },
    getSlot: function getSlot(e, t, o) {
      return e.getSlot(t, o);
    },
    isShowing: function isShowing(e, t, o) {
      return e.isShowing(t, o);
    },
    hideSlot: function hideSlot(e, t, o) {
      return e.hideSlot(t, o);
    },
    hideAllSlots: function hideAllSlots(e, t) {
      return e.hideAllSlots(t);
    },
    showSlot: function showSlot(e, t, o) {
      return e.showSlot(t, o);
    }
  }, function (e) {
    return ua(e);
  }),
      TT = _objectSpread({}, _T, {
    sketch: function sketch(e) {
      var t = function () {
        var e = [];
        return {
          slot: function slot(t, o) {
            return e.push(t), Ru(ST, CT(t), o);
          },
          record: y(e)
        };
      }(),
          o = e(t),
          n = t.record(),
          s = P(n, function (e) {
        return _u({
          name: e,
          pname: CT(e)
        });
      });

      return Yu(ST, kT, s, OT, o);
    }
  }),
      ET = xn([Eb, Bb, gs("onShow", b), gs("onHide", b), Ob]),
      BT = function BT(e) {
    return {
      element: function element() {
        return e.element.dom;
      }
    };
  },
      MT = function MT(e, t) {
    var o = P(ae(t), function (e) {
      var o = t[e],
          n = zn(function (e) {
        return Vn("sidebar", ET, e);
      }(o));
      return {
        name: e,
        getApi: BT,
        onSetup: n.onSetup,
        onShow: n.onShow,
        onHide: n.onHide
      };
    });
    return P(o, function (t) {
      var n = fs(b);
      return e.slot(t.name, {
        dom: {
          tag: "div",
          classes: ["tox-sidebar__pane"]
        },
        behaviours: wv([Pv(t, n), Nv(t, n), Br(hr(), function (e, t) {
          var n = t.event,
              s = G(o, function (e) {
            return e.name === n.name;
          });
          s.each(function (t) {
            (n.visible ? t.onShow : t.onHide)(t.getApi(e));
          });
        })])
      });
    });
  },
      AT = function AT(e) {
    return TT.sketch(function (t) {
      return {
        dom: {
          tag: "div",
          classes: ["tox-sidebar__pane-container"]
        },
        components: MT(t, e),
        slotBehaviours: wv([zr(function (e) {
          return TT.hideAllSlots(e);
        })])
      };
    });
  },
      DT = function DT(e) {
    return rm.getCurrent(e).bind(function (e) {
      return wT.isGrowing(e) || wT.hasGrown(e) ? rm.getCurrent(e).bind(function (e) {
        return G(TT.getSlotNames(e), function (t) {
          return TT.isShowing(e, t);
        });
      }) : B.none();
    });
  },
      FT = Kr("FixSizeEvent"),
      IT = Kr("AutoSizeEvent");

  var RT = Object.freeze({
    __proto__: null,
    block: function block(e, t, o, n) {
      ht(e.element, "aria-busy", !0);
      var s = t.getRoot(e).getOr(e),
          r = cl([kp.config({
        mode: "special",
        onTab: function onTab() {
          return B.some(!0);
        },
        onShiftTab: function onShiftTab() {
          return B.some(!0);
        }
      }), Hp.config({})]),
          a = n(s, r),
          i = s.getSystem().build(a);
      Dp.append(s, $a(i)), i.hasConfigured(kp) && t.focus && kp.focusIn(i), o.isBlocked() || t.onBlock(e), o.blockWith(function () {
        return Dp.remove(s, i);
      });
    },
    unblock: function unblock(e, t, o) {
      xt(e.element, "aria-busy"), o.isBlocked() && t.onUnblock(e), o.clear();
    }
  }),
      VT = [gs("getRoot", B.none), ms("focus", !0), bi("onBlock"), bi("onUnblock")];

  var zT = ul({
    fields: VT,
    name: "blocking",
    apis: RT,
    state: Object.freeze({
      __proto__: null,
      init: function init() {
        var e = Vl(function (e) {
          return e.destroy();
        });
        return ga({
          readState: e.isSet,
          blockWith: function blockWith(t) {
            e.set({
              destroy: t
            });
          },
          clear: e.clear,
          isBlocked: e.isSet
        });
      }
    })
  }),
      HT = function HT(e) {
    var t = Ae(e),
        o = et(t),
        n = function (e) {
      var t = void 0 !== e.dom.attributes ? e.dom.attributes : [];
      return j(t, function (e, t) {
        return "class" === t.name ? e : _objectSpread({}, e, _defineProperty({}, t.name, t.value));
      }, {});
    }(t),
        s = function (e) {
      return Array.prototype.slice.call(e.dom.classList, 0);
    }(t),
        r = 0 === o.length ? {} : {
      innerHtml: Lr(t)
    };

    return _objectSpread({
      tag: Ve(t),
      classes: s,
      attributes: n
    }, r);
  },
      PT = function PT(e) {
    return rm.getCurrent(e).each(function (e) {
      return bl(e.element);
    });
  },
      NT = function NT(e, t, o) {
    var n = fs(!1),
        s = Hl(),
        r = function r(o) {
      var s;
      n.get() && (!function (e) {
        return "focusin" === e.type;
      }(s = o) || !(s.composed ? oe(s.composedPath()) : B.from(s.target)).map(Ie).filter(He).exists(function (e) {
        return Ba(e, "mce-pastebin");
      })) && (o.preventDefault(), PT(t()), e.editorManager.setActive(e));
    };

    e.inline || e.on("PreInit", function () {
      e.dom.bind(e.getWin(), "focusin", r), e.on("BeforeExecCommand", function (e) {
        "mcefocus" === e.command.toLowerCase() && !0 !== e.value && r(e);
      });
    });

    var a = function a(s) {
      s !== n.get() && (n.set(s), function (e, t, o, n) {
        var s = t.element;
        if (function (e, t) {
          var o = "tabindex",
              n = "data-mce-tabindex";
          B.from(e.iframeElement).map(Ie).each(function (e) {
            t ? (vt(e, o).each(function (t) {
              return ht(e, n, t);
            }), ht(e, o, -1)) : (xt(e, o), vt(e, n).each(function (t) {
              ht(e, o, t), xt(e, n);
            }));
          });
        }(e, o), o) zT.block(t, function (e) {
          return function (t, o) {
            return {
              dom: {
                tag: "div",
                attributes: {
                  "aria-label": e.translate("Loading..."),
                  tabindex: "0"
                },
                classes: ["tox-throbber__busy-spinner"]
              },
              components: [{
                dom: HT('<div class="tox-spinner"><div></div><div></div><div></div></div>')
              }]
            };
          };
        }(n)), At(s, "display"), xt(s, "aria-hidden"), e.hasFocus() && PT(t);else {
          var _o36 = rm.getCurrent(t).exists(function (e) {
            return vl(e.element);
          });

          zT.unblock(t), kt(s, "display", "none"), ht(s, "aria-hidden", "true"), _o36 && e.focus();
        }
      }(e, t(), s, o.providers), e.dispatch("AfterProgressState", {
        state: s
      }));
    };

    e.on("ProgressState", function (t) {
      if (s.on(clearTimeout), h(t.time)) {
        var _o37 = wh.setEditorTimeout(e, function () {
          return a(t.state);
        }, t.time);

        s.set(_o37);
      } else a(t.state), s.clear();
    });
  },
      LT = function LT(e, t, o) {
    return {
      within: e,
      extra: t,
      withinWidth: o
    };
  },
      WT = function WT(e, t, o) {
    var n = j(e, function (e, t) {
      return function (e, t) {
        var n = o(e);
        return B.some({
          element: e,
          start: t,
          finish: t + n,
          width: n
        });
      }(t, e.len).fold(y(e), function (t) {
        return {
          len: t.finish,
          list: e.list.concat([t])
        };
      });
    }, {
      len: 0,
      list: []
    }).list,
        s = W(n, function (e) {
      return e.finish <= t;
    }),
        r = U(s, function (e, t) {
      return e + t.width;
    }, 0);
    return {
      within: s,
      extra: n.slice(s.length),
      withinWidth: r
    };
  },
      UT = function UT(e) {
    return P(e, function (e) {
      return e.element;
    });
  },
      jT = function jT(e, t) {
    var o = P(t, function (e) {
      return $a(e);
    });
    x_.setGroups(e, o);
  },
      GT = function GT(e, t, o) {
    var n = t.builtGroups.get();
    if (0 === n.length) return;
    var s = Lu(e, t, "primary"),
        r = mw.getCoupled(e, "overflowGroup");
    kt(s.element, "visibility", "hidden");
    var a = n.concat([r]),
        i = re(a, function (e) {
      return xl(e.element).bind(function (t) {
        return e.getSystem().getByDom(t).toOptional();
      });
    });
    o([]), jT(s, a);

    var l = function (e, t, o, n) {
      var s = function (e, t, o) {
        var n = WT(t, e, o);
        return 0 === n.extra.length ? B.some(n) : B.none();
      }(e, t, o).getOrThunk(function () {
        return WT(t, e - o(n), o);
      }),
          r = s.within,
          a = s.extra,
          i = s.withinWidth;

      return 1 === a.length && a[0].width <= o(n) ? function (e, t, o) {
        var n = UT(e.concat(t));
        return LT(n, [], o);
      }(r, a, i) : a.length >= 1 ? function (e, t, o, n) {
        var s = UT(e).concat([o]);
        return LT(s, UT(t), n);
      }(r, a, n, i) : function (e, t, o) {
        return LT(UT(e), [], o);
      }(r, 0, i);
    }(Ut(s.element), t.builtGroups.get(), function (e) {
      return Ut(e.element);
    }, r);

    0 === l.extra.length ? (Dp.remove(s, r), o([])) : (jT(s, l.within), o(l.extra)), At(s.element, "visibility"), Dt(s.element), i.each(Hp.focus);
  },
      $T = y([Qd("splitToolbarBehaviours", [mw]), Wn("builtGroups", function () {
    return fs([]);
  })]),
      qT = y([hi(["overflowToggledClass"]), ss("getOverflowBounds"), jn("lazySink"), Wn("overflowGroups", function () {
    return fs([]);
  })].concat($T())),
      XT = y([_u({
    factory: x_,
    schema: v_(),
    name: "primary"
  }), Tu({
    schema: v_(),
    name: "overflow"
  }), Tu({
    name: "overflow-button"
  }), Tu({
    name: "overflow-group"
  })]),
      KT = y(function (e, t) {
    (function (e, t) {
      var o = Wt.max(e, t, ["margin-left", "border-left-width", "padding-left", "padding-right", "border-right-width", "margin-right"]);
      kt(e, "max-width", o + "px");
    })(e, Math.floor(t));
  }),
      YT = y([hi(["toggledClass"]), jn("lazySink"), Kn("fetch"), ss("getBounds"), as("fireDismissalEventInstead", [is("event", mr())]), ac()]),
      JT = y([Tu({
    name: "button",
    overrides: function overrides(e) {
      return {
        dom: {
          attributes: {
            "aria-haspopup": "true"
          }
        },
        buttonBehaviours: cl([$p.config({
          toggleClass: e.markers.toggledClass,
          aria: {
            mode: "expanded"
          },
          toggleOnExecute: !1
        })])
      };
    }
  }), Tu({
    factory: x_,
    schema: v_(),
    name: "toolbar",
    overrides: function overrides(e) {
      return {
        toolbarBehaviours: cl([kp.config({
          mode: "cyclic",
          onEscape: function onEscape(t) {
            return Nu(t, e, "button").each(Hp.focus), B.none();
          }
        })])
      };
    }
  })]),
      ZT = function ZT(e, t) {
    var o = mw.getCoupled(e, "toolbarSandbox");
    Dd.isOpen(o) ? Dd.close(o) : Dd.open(o, t.toolbar());
  },
      QT = function QT(e, t, o, n) {
    var s = o.getBounds.map(function (e) {
      return e();
    }),
        r = o.lazySink(e).getOrDie();
    id.positionWithinBounds(r, t, {
      anchor: {
        type: "hotspot",
        hotspot: e,
        layouts: n,
        overrides: {
          maxWidthFunction: KT()
        }
      }
    }, s);
  },
      eE = function eE(e, t, o, n, s) {
    x_.setGroups(t, s), QT(e, t, o, n), $p.on(e);
  },
      tE = tm({
    name: "FloatingToolbarButton",
    factory: function factory(e, t, o, n) {
      return _objectSpread({}, Sh.sketch(_objectSpread({}, n.button(), {
        action: function action(e) {
          ZT(e, n);
        },
        buttonBehaviours: nu({
          dump: n.button().buttonBehaviours
        }, [mw.config({
          others: {
            toolbarSandbox: function toolbarSandbox(t) {
              return function (e, t, o) {
                var n = ni();
                return {
                  dom: {
                    tag: "div",
                    attributes: {
                      id: n.id
                    }
                  },
                  behaviours: cl([kp.config({
                    mode: "special",
                    onEscape: function onEscape(e) {
                      return Dd.close(e), B.some(!0);
                    }
                  }), Dd.config({
                    onOpen: function onOpen(s, r) {
                      o.fetch().get(function (s) {
                        eE(e, r, o, t.layouts, s), n.link(e.element), kp.focusIn(r);
                      });
                    },
                    onClose: function onClose() {
                      $p.off(e), Hp.focus(e), n.unlink(e.element);
                    },
                    isPartOf: function isPartOf(t, o, n) {
                      return si(o, n) || si(e, n);
                    },
                    getAttachPoint: function getAttachPoint() {
                      return o.lazySink(e).getOrDie();
                    }
                  }), hl.config({
                    channels: _objectSpread({}, zd(_objectSpread({
                      isExtraPart: _
                    }, o.fireDismissalEventInstead.map(function (e) {
                      return {
                        fireEventInstead: {
                          event: e.event
                        }
                      };
                    }).getOr({}))), {}, Pd({
                      doReposition: function doReposition() {
                        Dd.getState(mw.getCoupled(e, "toolbarSandbox")).each(function (n) {
                          QT(e, n, o, t.layouts);
                        });
                      }
                    }))
                  })])
                };
              }(t, o, e);
            }
          }
        })])
      })), {
        apis: {
          setGroups: function setGroups(t, n) {
            Dd.getState(mw.getCoupled(t, "toolbarSandbox")).each(function (s) {
              eE(t, s, e, o.layouts, n);
            });
          },
          reposition: function reposition(t) {
            Dd.getState(mw.getCoupled(t, "toolbarSandbox")).each(function (n) {
              QT(t, n, e, o.layouts);
            });
          },
          toggle: function toggle(e) {
            ZT(e, n);
          },
          getToolbar: function getToolbar(e) {
            return Dd.getState(mw.getCoupled(e, "toolbarSandbox"));
          },
          isOpen: function isOpen(e) {
            return Dd.isOpen(mw.getCoupled(e, "toolbarSandbox"));
          }
        }
      });
    },
    configFields: YT(),
    partFields: JT(),
    apis: {
      setGroups: function setGroups(e, t, o) {
        e.setGroups(t, o);
      },
      reposition: function reposition(e, t) {
        e.reposition(t);
      },
      toggle: function toggle(e, t) {
        e.toggle(t);
      },
      getToolbar: function getToolbar(e, t) {
        return e.getToolbar(t);
      },
      isOpen: function isOpen(e, t) {
        return e.isOpen(t);
      }
    }
  }),
      oE = y([jn("items"), hi(["itemSelector"]), Qd("tgroupBehaviours", [kp])]),
      nE = y([Bu({
    name: "items",
    unit: "item"
  })]),
      sE = tm({
    name: "ToolbarGroup",
    configFields: oE(),
    partFields: nE(),
    factory: function factory(e, t, o, n) {
      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: tu(e.tgroupBehaviours, [kp.config({
          mode: "flow",
          selector: e.markers.itemSelector
        })]),
        domModification: {
          attributes: {
            role: "toolbar"
          }
        }
      };
    }
  }),
      rE = function rE(e) {
    return P(e, function (e) {
      return $a(e);
    });
  },
      aE = function aE(e, t, o) {
    GT(e, o, function (n) {
      o.overflowGroups.set(n), t.getOpt(e).each(function (e) {
        tE.setGroups(e, rE(n));
      });
    });
  },
      iE = tm({
    name: "SplitFloatingToolbar",
    configFields: qT(),
    partFields: XT(),
    factory: function factory(e, t, o, n) {
      var s = kh(tE.sketch({
        fetch: function fetch() {
          return Jx(function (t) {
            t(rE(e.overflowGroups.get()));
          });
        },
        layouts: {
          onLtr: function onLtr() {
            return [Gi, ji];
          },
          onRtl: function onRtl() {
            return [ji, Gi];
          },
          onBottomLtr: function onBottomLtr() {
            return [qi, $i];
          },
          onBottomRtl: function onBottomRtl() {
            return [$i, qi];
          }
        },
        getBounds: o.getOverflowBounds,
        lazySink: e.lazySink,
        fireDismissalEventInstead: {},
        markers: {
          toggledClass: e.markers.overflowToggledClass
        },
        parts: {
          button: n["overflow-button"](),
          toolbar: n.overflow()
        }
      }));
      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: tu(e.splitToolbarBehaviours, [mw.config({
          others: {
            overflowGroup: function overflowGroup() {
              return sE.sketch(_objectSpread({}, n["overflow-group"](), {
                items: [s.asSpec()]
              }));
            }
          }
        })]),
        apis: {
          setGroups: function setGroups(t, o) {
            e.builtGroups.set(P(o, t.getSystem().build)), aE(t, s, e);
          },
          refresh: function refresh(t) {
            return aE(t, s, e);
          },
          toggle: function toggle(e) {
            s.getOpt(e).each(function (e) {
              tE.toggle(e);
            });
          },
          isOpen: function isOpen(e) {
            return s.getOpt(e).map(tE.isOpen).getOr(!1);
          },
          reposition: function reposition(e) {
            s.getOpt(e).each(function (e) {
              tE.reposition(e);
            });
          },
          getOverflow: function getOverflow(e) {
            return s.getOpt(e).bind(tE.getToolbar);
          }
        },
        domModification: {
          attributes: {
            role: "group"
          }
        }
      };
    },
    apis: {
      setGroups: function setGroups(e, t, o) {
        e.setGroups(t, o);
      },
      refresh: function refresh(e, t) {
        e.refresh(t);
      },
      reposition: function reposition(e, t) {
        e.reposition(t);
      },
      toggle: function toggle(e, t) {
        e.toggle(t);
      },
      isOpen: function isOpen(e, t) {
        return e.isOpen(t);
      },
      getOverflow: function getOverflow(e, t) {
        return e.getOverflow(t);
      }
    }
  }),
      lE = y([hi(["closedClass", "openClass", "shrinkingClass", "growingClass", "overflowToggledClass"]), bi("onOpened"), bi("onClosed")].concat($T())),
      cE = y([_u({
    factory: x_,
    schema: v_(),
    name: "primary"
  }), _u({
    factory: x_,
    schema: v_(),
    name: "overflow",
    overrides: function overrides(e) {
      return {
        toolbarBehaviours: cl([wT.config({
          dimension: {
            property: "height"
          },
          closedClass: e.markers.closedClass,
          openClass: e.markers.openClass,
          shrinkingClass: e.markers.shrinkingClass,
          growingClass: e.markers.growingClass,
          onShrunk: function onShrunk(t) {
            Nu(t, e, "overflow-button").each(function (e) {
              $p.off(e), Hp.focus(e);
            }), e.onClosed(t);
          },
          onGrown: function onGrown(t) {
            kp.focusIn(t), e.onOpened(t);
          },
          onStartGrow: function onStartGrow(t) {
            Nu(t, e, "overflow-button").each($p.on);
          }
        }), kp.config({
          mode: "acyclic",
          onEscape: function onEscape(t) {
            return Nu(t, e, "overflow-button").each(Hp.focus), B.some(!0);
          }
        })])
      };
    }
  }), Tu({
    name: "overflow-button",
    overrides: function overrides(e) {
      return {
        buttonBehaviours: cl([$p.config({
          toggleClass: e.markers.overflowToggledClass,
          aria: {
            mode: "pressed"
          },
          toggleOnExecute: !1
        })])
      };
    }
  }), Tu({
    name: "overflow-group"
  })]),
      dE = function dE(e, t) {
    Nu(e, t, "overflow-button").bind(function () {
      return Nu(e, t, "overflow");
    }).each(function (o) {
      uE(e, t), wT.toggleGrow(o);
    });
  },
      uE = function uE(e, t) {
    Nu(e, t, "overflow").each(function (o) {
      GT(e, t, function (e) {
        var t = P(e, function (e) {
          return $a(e);
        });
        x_.setGroups(o, t);
      }), Nu(e, t, "overflow-button").each(function (e) {
        wT.hasGrown(o) && $p.on(e);
      }), wT.refresh(o);
    });
  },
      mE = tm({
    name: "SplitSlidingToolbar",
    configFields: lE(),
    partFields: cE(),
    factory: function factory(e, t, o, n) {
      var s = "alloy.toolbar.toggle";
      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: tu(e.splitToolbarBehaviours, [mw.config({
          others: {
            overflowGroup: function overflowGroup(e) {
              return sE.sketch(_objectSpread({}, n["overflow-group"](), {
                items: [Sh.sketch(_objectSpread({}, n["overflow-button"](), {
                  action: function action(t) {
                    xr(e, s);
                  }
                }))]
              }));
            }
          }
        }), Fp("toolbar-toggle-events", [Br(s, function (t) {
          dE(t, e);
        })])]),
        apis: {
          setGroups: function setGroups(t, o) {
            (function (t, o) {
              var n = P(o, t.getSystem().build);
              e.builtGroups.set(n);
            })(t, o), uE(t, e);
          },
          refresh: function refresh(t) {
            return uE(t, e);
          },
          toggle: function toggle(t) {
            return dE(t, e);
          },
          isOpen: function isOpen(t) {
            return function (e, t) {
              return Nu(e, t, "overflow").map(wT.hasGrown).getOr(!1);
            }(t, e);
          }
        },
        domModification: {
          attributes: {
            role: "group"
          }
        }
      };
    },
    apis: {
      setGroups: function setGroups(e, t, o) {
        e.setGroups(t, o);
      },
      refresh: function refresh(e, t) {
        e.refresh(t);
      },
      toggle: function toggle(e, t) {
        e.toggle(t);
      },
      isOpen: function isOpen(e, t) {
        return e.isOpen(t);
      }
    }
  }),
      gE = function gE(e) {
    var t = e.title.fold(function () {
      return {};
    }, function (e) {
      return {
        attributes: {
          title: e
        }
      };
    });
    return {
      dom: _objectSpread({
        tag: "div",
        classes: ["tox-toolbar__group"]
      }, t),
      components: [sE.parts.items({})],
      items: e.items,
      markers: {
        itemSelector: "*:not(.tox-split-button) > .tox-tbtn:not([disabled]), .tox-split-button:not([disabled]), .tox-toolbar-nav-js:not([disabled])"
      },
      tgroupBehaviours: cl([Tx.config({}), Hp.config({})])
    };
  },
      pE = function pE(e) {
    return sE.sketch(gE(e));
  },
      hE = function hE(e, t) {
    var o = zr(function (t) {
      var o = P(e.initGroups, pE);
      x_.setGroups(t, o);
    });
    return cl([zv(e.providers.isDisabled), Iv(), kp.config({
      mode: t,
      onEscape: e.onEscape,
      selector: ".tox-toolbar__group"
    }), Fp("toolbar-events", [o])]);
  },
      fE = function fE(e) {
    var t = e.cyclicKeying ? "cyclic" : "acyclic";
    return {
      uid: e.uid,
      dom: {
        tag: "div",
        classes: ["tox-toolbar-overlord"]
      },
      parts: {
        "overflow-group": gE({
          title: B.none(),
          items: []
        }),
        "overflow-button": RC({
          name: "more",
          icon: B.some("more-drawer"),
          enabled: !0,
          tooltip: B.some("More..."),
          primary: !1,
          buttonType: B.none(),
          borderless: !1
        }, B.none(), e.providers)
      },
      splitToolbarBehaviours: hE(e, t)
    };
  },
      bE = function bE(e) {
    var t = fE(e),
        o = iE.parts.primary({
      dom: {
        tag: "div",
        classes: ["tox-toolbar__primary"]
      }
    });
    return iE.sketch(_objectSpread({}, t, {
      lazySink: e.getSink,
      getOverflowBounds: function getOverflowBounds() {
        var t = e.moreDrawerData.lazyHeader().element,
            o = Uo(t),
            n = Ke(t),
            s = Uo(n),
            r = Math.max(n.dom.scrollHeight, s.height);
        return Lo(o.x + 4, s.y, o.width - 8, r);
      },
      parts: _objectSpread({}, t.parts, {
        overflow: {
          dom: {
            tag: "div",
            classes: ["tox-toolbar__overflow"],
            attributes: e.attributes
          }
        }
      }),
      components: [o],
      markers: {
        overflowToggledClass: "tox-tbtn--enabled"
      }
    }));
  },
      vE = function vE(e) {
    var t = mE.parts.primary({
      dom: {
        tag: "div",
        classes: ["tox-toolbar__primary"]
      }
    }),
        o = mE.parts.overflow({
      dom: {
        tag: "div",
        classes: ["tox-toolbar__overflow"]
      }
    }),
        n = fE(e);
    return mE.sketch(_objectSpread({}, n, {
      components: [t, o],
      markers: {
        openClass: "tox-toolbar__overflow--open",
        closedClass: "tox-toolbar__overflow--closed",
        growingClass: "tox-toolbar__overflow--growing",
        shrinkingClass: "tox-toolbar__overflow--shrinking",
        overflowToggledClass: "tox-tbtn--enabled"
      },
      onOpened: function onOpened(e) {
        e.getSystem().broadcastOn([j_()], {
          type: "opened"
        });
      },
      onClosed: function onClosed(e) {
        e.getSystem().broadcastOn([j_()], {
          type: "closed"
        });
      }
    }));
  },
      yE = function yE(e) {
    var t = e.cyclicKeying ? "cyclic" : "acyclic";
    return x_.sketch({
      uid: e.uid,
      dom: {
        tag: "div",
        classes: ["tox-toolbar"].concat(e.type === Vh.scrolling ? ["tox-toolbar--scrolling"] : [])
      },
      components: [x_.parts.groups({})],
      toolbarBehaviours: hE(e, t)
    });
  },
      xE = g_.optional({
    factory: rT,
    name: "menubar",
    schema: [jn("backstage")]
  }),
      wE = g_.optional({
    factory: {
      sketch: function sketch(e) {
        return b_.sketch({
          uid: e.uid,
          dom: e.dom,
          listBehaviours: cl([kp.config({
            mode: "acyclic",
            selector: ".tox-toolbar"
          })]),
          makeItem: function makeItem() {
            return yE({
              type: e.type,
              uid: Kr("multiple-toolbar-item"),
              cyclicKeying: !1,
              initGroups: [],
              providers: e.providers,
              onEscape: function onEscape() {
                return e.onEscape(), B.some(!0);
              }
            });
          },
          setupItem: function setupItem(e, t, o, n) {
            x_.setGroups(t, o);
          },
          shell: !0
        });
      }
    },
    name: "multiple-toolbar",
    schema: [jn("dom"), jn("onEscape")]
  }),
      SE = g_.optional({
    factory: {
      sketch: function sketch(e) {
        var t = function (e) {
          return e.type === Vh.sliding ? vE : e.type === Vh.floating ? bE : yE;
        }(e);

        return t({
          type: e.type,
          uid: e.uid,
          onEscape: function onEscape() {
            return e.onEscape(), B.some(!0);
          },
          cyclicKeying: !1,
          initGroups: [],
          getSink: e.getSink,
          providers: e.providers,
          moreDrawerData: {
            lazyToolbar: e.lazyToolbar,
            lazyMoreButton: e.lazyMoreButton,
            lazyHeader: e.lazyHeader
          },
          attributes: e.attributes
        });
      }
    },
    name: "toolbar",
    schema: [jn("dom"), jn("onEscape"), jn("getSink")]
  }),
      kE = g_.optional({
    factory: {
      sketch: function sketch(e) {
        var t = e.editor,
            o = e.sticky ? Z_ : k_;
        return {
          uid: e.uid,
          dom: e.dom,
          components: e.components,
          behaviours: cl(o(t, e.sharedBackstage))
        };
      }
    },
    name: "header",
    schema: [jn("dom")]
  }),
      CE = g_.optional({
    name: "socket",
    schema: [jn("dom")]
  }),
      OE = g_.optional({
    factory: {
      sketch: function sketch(e) {
        return {
          uid: e.uid,
          dom: {
            tag: "div",
            classes: ["tox-sidebar"],
            attributes: {
              role: "complementary"
            }
          },
          components: [{
            dom: {
              tag: "div",
              classes: ["tox-sidebar__slider"]
            },
            components: [],
            behaviours: cl([Tx.config({}), Hp.config({}), wT.config({
              dimension: {
                property: "width"
              },
              closedClass: "tox-sidebar--sliding-closed",
              openClass: "tox-sidebar--sliding-open",
              shrinkingClass: "tox-sidebar--sliding-shrinking",
              growingClass: "tox-sidebar--sliding-growing",
              onShrunk: function onShrunk(e) {
                rm.getCurrent(e).each(TT.hideAllSlots), xr(e, IT);
              },
              onGrown: function onGrown(e) {
                xr(e, IT);
              },
              onStartGrow: function onStartGrow(e) {
                wr(e, FT, {
                  width: Et(e.element, "width").getOr("")
                });
              },
              onStartShrink: function onStartShrink(e) {
                wr(e, FT, {
                  width: Ut(e.element) + "px"
                });
              }
            }), Dp.config({}), rm.config({
              find: function find(e) {
                var t = Dp.contents(e);
                return oe(t);
              }
            })])
          }],
          behaviours: cl([_k(0), Fp("sidebar-sliding-events", [Br(FT, function (e, t) {
            kt(e.element, "width", t.event.width);
          }), Br(IT, function (e, t) {
            At(e.element, "width");
          })])])
        };
      }
    },
    name: "sidebar",
    schema: [jn("dom")]
  }),
      _E = g_.optional({
    factory: {
      sketch: function sketch(e) {
        return {
          uid: e.uid,
          dom: {
            tag: "div",
            attributes: {
              "aria-hidden": "true"
            },
            classes: ["tox-throbber"],
            styles: {
              display: "none"
            }
          },
          behaviours: cl([Dp.config({}), zT.config({
            focus: !1
          }), rm.config({
            find: function find(e) {
              return oe(e.components());
            }
          })]),
          components: []
        };
      }
    },
    name: "throbber",
    schema: [jn("dom")]
  });

  var TE = tm({
    name: "OuterContainer",
    factory: function factory(e, t, o) {
      var n = {
        getSocket: function getSocket(t) {
          return m_.getPart(t, e, "socket");
        },
        setSidebar: function setSidebar(t, o, n) {
          m_.getPart(t, e, "sidebar").each(function (e) {
            return function (e, t, o) {
              rm.getCurrent(e).each(function (e) {
                Dp.set(e, [AT(t)]);
                var n = null == o ? void 0 : o.toLowerCase();
                r(o) && ve(t, n) && rm.getCurrent(e).each(function (t) {
                  TT.showSlot(t, n), wT.immediateGrow(e), At(e.element, "width");
                });
              });
            }(e, o, n);
          });
        },
        toggleSidebar: function toggleSidebar(t, o) {
          m_.getPart(t, e, "sidebar").each(function (e) {
            return function (e, t) {
              rm.getCurrent(e).each(function (e) {
                rm.getCurrent(e).each(function (o) {
                  wT.hasGrown(e) ? TT.isShowing(o, t) ? wT.shrink(e) : (TT.hideAllSlots(o), TT.showSlot(o, t)) : (TT.hideAllSlots(o), TT.showSlot(o, t), wT.grow(e));
                });
              });
            }(e, o);
          });
        },
        whichSidebar: function whichSidebar(t) {
          return m_.getPart(t, e, "sidebar").bind(DT).getOrNull();
        },
        getHeader: function getHeader(t) {
          return m_.getPart(t, e, "header");
        },
        getToolbar: function getToolbar(t) {
          return m_.getPart(t, e, "toolbar");
        },
        setToolbar: function setToolbar(t, o) {
          m_.getPart(t, e, "toolbar").each(function (e) {
            e.getApis().setGroups(e, o);
          });
        },
        setToolbars: function setToolbars(t, o) {
          m_.getPart(t, e, "multiple-toolbar").each(function (e) {
            b_.setItems(e, o);
          });
        },
        refreshToolbar: function refreshToolbar(t) {
          m_.getPart(t, e, "toolbar").each(function (e) {
            return e.getApis().refresh(e);
          });
        },
        toggleToolbarDrawer: function toggleToolbarDrawer(t) {
          m_.getPart(t, e, "toolbar").each(function (e) {
            var t, o;
            o = function o(t) {
              return t(e);
            }, null != (t = e.getApis().toggle) ? B.some(o(t)) : B.none();
          });
        },
        isToolbarDrawerToggled: function isToolbarDrawerToggled(t) {
          return m_.getPart(t, e, "toolbar").bind(function (e) {
            return B.from(e.getApis().isOpen).map(function (t) {
              return t(e);
            });
          }).getOr(!1);
        },
        getThrobber: function getThrobber(t) {
          return m_.getPart(t, e, "throbber");
        },
        focusToolbar: function focusToolbar(t) {
          m_.getPart(t, e, "toolbar").orThunk(function () {
            return m_.getPart(t, e, "multiple-toolbar");
          }).each(function (e) {
            kp.focusIn(e);
          });
        },
        setMenubar: function setMenubar(t, o) {
          m_.getPart(t, e, "menubar").each(function (e) {
            rT.setMenus(e, o);
          });
        },
        focusMenubar: function focusMenubar(t) {
          m_.getPart(t, e, "menubar").each(function (e) {
            rT.focus(e);
          });
        }
      };
      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        apis: n,
        behaviours: e.behaviours
      };
    },
    configFields: [jn("dom"), jn("behaviours")],
    partFields: [kE, xE, SE, wE, CE, OE, _E],
    apis: {
      getSocket: function getSocket(e, t) {
        return e.getSocket(t);
      },
      setSidebar: function setSidebar(e, t, o, n) {
        e.setSidebar(t, o, n);
      },
      toggleSidebar: function toggleSidebar(e, t, o) {
        e.toggleSidebar(t, o);
      },
      whichSidebar: function whichSidebar(e, t) {
        return e.whichSidebar(t);
      },
      getHeader: function getHeader(e, t) {
        return e.getHeader(t);
      },
      getToolbar: function getToolbar(e, t) {
        return e.getToolbar(t);
      },
      setToolbar: function setToolbar(e, t, o) {
        var n = P(o, function (e) {
          return pE(e);
        });
        e.setToolbar(t, n);
      },
      setToolbars: function setToolbars(e, t, o) {
        var n = P(o, function (e) {
          return P(e, pE);
        });
        e.setToolbars(t, n);
      },
      refreshToolbar: function refreshToolbar(e, t) {
        return e.refreshToolbar(t);
      },
      toggleToolbarDrawer: function toggleToolbarDrawer(e, t) {
        e.toggleToolbarDrawer(t);
      },
      isToolbarDrawerToggled: function isToolbarDrawerToggled(e, t) {
        return e.isToolbarDrawerToggled(t);
      },
      getThrobber: function getThrobber(e, t) {
        return e.getThrobber(t);
      },
      setMenubar: function setMenubar(e, t, o) {
        e.setMenubar(t, o);
      },
      focusMenubar: function focusMenubar(e, t) {
        e.focusMenubar(t);
      },
      focusToolbar: function focusToolbar(e, t) {
        e.focusToolbar(t);
      }
    }
  });

  var EE = {
    file: {
      title: "File",
      items: "newdocument restoredraft | preview | export print | deleteallconversations"
    },
    edit: {
      title: "Edit",
      items: "undo redo | cut copy paste pastetext | selectall | searchreplace"
    },
    view: {
      title: "View",
      items: "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
    },
    insert: {
      title: "Insert",
      items: "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime"
    },
    format: {
      title: "Format",
      items: "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat"
    },
    tools: {
      title: "Tools",
      items: "spellchecker spellcheckerlanguage | a11ycheck code wordcount"
    },
    table: {
      title: "Table",
      items: "inserttable | cell row column | advtablesort | tableprops deletetable"
    },
    help: {
      title: "Help",
      items: "help"
    }
  },
      BE = function BE(e) {
    return "string" == typeof e ? e.split(" ") : e;
  },
      ME = function ME(e, t) {
    var o = _objectSpread({}, EE, {}, t.menus),
        n = ae(t.menus).length > 0,
        s = void 0 === t.menubar || !0 === t.menubar ? BE("file edit view insert format tools table help") : BE(!1 === t.menubar ? "" : t.menubar),
        r = W(s, function (e) {
      var o = ve(EE, e);
      return n ? o || be(t.menus, e).exists(function (e) {
        return ve(e, "items");
      }) : o;
    }),
        a = P(r, function (n) {
      var s = o[n];
      return function (e, t, o) {
        var n = tf(o).split(/[ ,]/);
        return {
          text: e.title,
          getItems: function getItems() {
            return X(e.items, function (e) {
              var o = e.toLowerCase();
              return 0 === o.trim().length || V(n, function (e) {
                return e === o;
              }) ? [] : "separator" === o || "|" === o ? [{
                type: "separator"
              }] : t.menuItems[o] ? [t.menuItems[o]] : [];
            });
          }
        };
      }({
        title: s.title,
        items: BE(s.items)
      }, t, e);
    });

    return W(a, function (e) {
      return e.getItems().length > 0 && V(e.getItems(), function (e) {
        return "separator" !== e.type;
      });
    });
  },
      AE = function AE(e) {
    var t = function t() {
      e._skinLoaded = !0, function (e) {
        e.dispatch("SkinLoaded");
      }(e);
    };

    return function () {
      e.initialized ? t() : e.on("init", t);
    };
  },
      DE = function DE(e, t, o) {
    return e.on("remove", function () {
      return o.unload(t);
    }), o.load(t);
  },
      FE = function FE(e, t) {
    return DE(e, t + "/skin.min.css", e.ui.styleSheetLoader);
  },
      IE = function IE(e, t) {
    var o;
    return o = Ie(e.getElement()), ct(o).isSome() ? DE(e, t + "/skin.shadowdom.min.css", Hh.DOM.styleSheetLoader) : Promise.resolve();
  },
      RE = function RE(e, t) {
    var o = Tf(t);
    o && t.contentCSS.push(o + (e ? "/content.inline" : "/content") + ".min.css"), !Of(t) && r(o) ? Promise.all([FE(t, o), IE(t, o)]).then(AE(t), function (e, t) {
      return function () {
        return function (e, t) {
          return e.dispatch("SkinLoadError", t);
        }(e, {
          message: "Skin could not be loaded"
        });
      };
    }(t)) : AE(t)();
  },
      VE = S(RE, !1),
      zE = S(RE, !0),
      HE = function HE(e, t) {
    return function (o) {
      var n = zl(),
          s = function s() {
        o.setActive(e.formatter.match(t));
        var s = e.formatter.formatChanged(t, o.setActive);
        n.set(s);
      };

      return e.initialized ? s() : e.once("init", s), function () {
        e.off("init", s), n.clear();
      };
    };
  },
      PE = function PE(e, t, o) {
    return function (n) {
      var s = function s() {
        return o(n);
      },
          r = function r() {
        o(n), e.on(t, s);
      };

      return e.initialized ? r() : e.once("init", r), function () {
        e.off("init", r), e.off(t, s);
      };
    };
  },
      NE = function NE(e) {
    return function (t) {
      return function () {
        e.undoManager.transact(function () {
          e.focus(), e.execCommand("mceToggleFormat", !1, t.format);
        });
      };
    };
  },
      LE = function LE(e, t) {
    return function () {
      return e.execCommand(t);
    };
  },
      WE = function WE(e, t, o) {
    var n = function n(e, _n38, r, a) {
      var i = t.shared.providers.translate(e.title);
      if ("separator" === e.type) return B.some({
        type: "separator",
        text: i
      });

      if ("submenu" === e.type) {
        var _t35 = X(e.getStyleItems(), function (e) {
          return s(e, _n38, a);
        });

        return 0 === _n38 && _t35.length <= 0 ? B.none() : B.some({
          type: "nestedmenuitem",
          text: i,
          enabled: _t35.length > 0,
          getSubmenuItems: function getSubmenuItems() {
            return X(e.getStyleItems(), function (e) {
              return s(e, _n38, a);
            });
          }
        });
      }

      return B.some(_objectSpread({
        type: "togglemenuitem",
        text: i,
        icon: e.icon,
        active: e.isSelected(a),
        enabled: !r,
        onAction: o.onAction(e)
      }, e.getStylePreview().fold(function () {
        return {};
      }, function (e) {
        return {
          meta: {
            style: e
          }
        };
      })));
    },
        s = function s(e, t, _s30) {
      var r = "formatter" === e.type && o.isInvalid(e);
      return 0 === t ? r ? [] : n(e, t, !1, _s30).toArray() : n(e, t, r, _s30).toArray();
    },
        r = function r(e) {
      var t = o.getCurrentValue(),
          n = o.shouldHide ? 0 : 1;
      return X(e, function (e) {
        return s(e, n, t);
      });
    };

    return {
      validateItems: r,
      getFetch: function getFetch(e, t) {
        return function (o, n) {
          var s = t(),
              a = r(s);
          n(oC(a, Uf.CLOSE_ON_EXECUTE, e, !1));
        };
      }
    };
  },
      UE = function UE(e, t, o) {
    var n = o.dataset,
        s = "basic" === n.type ? function () {
      return P(n.data, function (e) {
        return HO(e, o.isSelectedFor, o.getPreviewFor);
      });
    } : n.getData;
    return {
      items: WE(0, t, o),
      getStyleItems: s
    };
  },
      jE = function jE(e, t, o) {
    var _UE = UE(0, t, o),
        n = _UE.items,
        s = _UE.getStyleItems,
        r = PE(e, "NodeChange", function (e) {
      var t = e.getComponent();
      o.updateText(t);
    });

    return Zk({
      text: o.icon.isSome() ? B.none() : o.text,
      icon: o.icon,
      tooltip: B.from(o.tooltip),
      role: B.none(),
      fetch: n.getFetch(t, s),
      onSetup: r,
      getApi: function getApi(e) {
        return {
          getComponent: y(e)
        };
      },
      columns: 1,
      presets: "normal",
      classes: o.icon.isSome() ? [] : ["bespoke"],
      dropdownBehaviours: []
    }, "tox-tbtn", t.shared);
  };

  var GE;
  !function (e) {
    e[e.SemiColon = 0] = "SemiColon", e[e.Space = 1] = "Space";
  }(GE || (GE = {}));

  var $E = function $E(e, t, o) {
    var n = (s = function (e, t) {
      return t === GE.SemiColon ? e.replace(/;$/, "").split(";") : e.split(" ");
    }(e.options.get(t), o), P(s, function (e) {
      var t = e,
          o = e;
      var n = e.split("=");
      return n.length > 1 && (t = n[0], o = n[1]), {
        title: t,
        format: o
      };
    }));
    var s;
    return {
      type: "basic",
      data: n
    };
  },
      qE = [{
    title: "Left",
    icon: "align-left",
    format: "alignleft",
    command: "JustifyLeft"
  }, {
    title: "Center",
    icon: "align-center",
    format: "aligncenter",
    command: "JustifyCenter"
  }, {
    title: "Right",
    icon: "align-right",
    format: "alignright",
    command: "JustifyRight"
  }, {
    title: "Justify",
    icon: "align-justify",
    format: "alignjustify",
    command: "JustifyFull"
  }],
      XE = function XE(e) {
    var t = {
      type: "basic",
      data: qE
    };
    return {
      tooltip: "Align",
      text: B.none(),
      icon: B.some("align-left"),
      isSelectedFor: function isSelectedFor(t) {
        return function () {
          return e.formatter.match(t);
        };
      },
      getCurrentValue: B.none,
      getPreviewFor: function getPreviewFor(e) {
        return B.none;
      },
      onAction: function onAction(t) {
        return function () {
          return G(qE, function (e) {
            return e.format === t.format;
          }).each(function (t) {
            return e.execCommand(t.command);
          });
        };
      },
      updateText: function updateText(t) {
        var o = G(qE, function (t) {
          return e.formatter.match(t.format);
        }).fold(y("left"), function (e) {
          return e.title.toLowerCase();
        });
        wr(t, Jk, {
          icon: "align-".concat(o)
        });
      },
      dataset: t,
      shouldHide: !1,
      isInvalid: function isInvalid(t) {
        return !e.formatter.canApply(t.format);
      }
    };
  },
      KE = function KE(e, t) {
    var o = t(),
        n = P(o, function (e) {
      return e.format;
    });
    return B.from(e.formatter.closest(n)).bind(function (e) {
      return G(o, function (t) {
        return t.format === e;
      });
    }).orThunk(function () {
      return ke(e.formatter.match("p"), {
        title: "Paragraph",
        format: "p"
      });
    });
  },
      YE = function YE(e) {
    var t = "Paragraph",
        o = $E(e, "block_formats", GE.SemiColon);
    return {
      tooltip: "Blocks",
      text: B.some(t),
      icon: B.none(),
      isSelectedFor: function isSelectedFor(t) {
        return function () {
          return e.formatter.match(t);
        };
      },
      getCurrentValue: B.none,
      getPreviewFor: function getPreviewFor(t) {
        return function () {
          var o = e.formatter.get(t);
          return B.some({
            tag: o.length > 0 && (o[0].inline || o[0].block) || "div",
            styles: e.dom.parseStyle(e.formatter.getCssText(t))
          });
        };
      },
      onAction: NE(e),
      updateText: function updateText(n) {
        var s = KE(e, function () {
          return o.data;
        }).fold(y(t), function (e) {
          return e.title;
        });
        wr(n, Yk, {
          text: s
        });
      },
      dataset: o,
      shouldHide: !1,
      isInvalid: function isInvalid(t) {
        return !e.formatter.canApply(t.format);
      }
    };
  },
      JE = ["-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
      ZE = function ZE(e) {
    var t = e.split(/\s*,\s*/);
    return P(t, function (e) {
      return e.replace(/^['"]+|['"]+$/g, "");
    });
  },
      QE = function QE(e) {
    var t = "System Font",
        o = function o() {
      var o = function o(e) {
        return e ? ZE(e)[0] : "";
      },
          s = e.queryCommandValue("FontName"),
          r = n.data,
          a = s ? s.toLowerCase() : "",
          i = G(r, function (e) {
        var t = e.format;
        return t.toLowerCase() === a || o(t).toLowerCase() === o(a).toLowerCase();
      }).orThunk(function () {
        return ke(function (e) {
          return 0 === e.indexOf("-apple-system") && function () {
            var t = ZE(e.toLowerCase());
            return K(JE, function (e) {
              return t.indexOf(e.toLowerCase()) > -1;
            });
          }();
        }(a), {
          title: t,
          format: a
        });
      });

      return {
        matchOpt: i,
        font: s
      };
    },
        n = $E(e, "font_family_formats", GE.SemiColon);

    return {
      tooltip: "Fonts",
      text: B.some(t),
      icon: B.none(),
      isSelectedFor: function isSelectedFor(e) {
        return function (t) {
          return t.exists(function (t) {
            return t.format === e;
          });
        };
      },
      getCurrentValue: function getCurrentValue() {
        var _o38 = o(),
            e = _o38.matchOpt;

        return e;
      },
      getPreviewFor: function getPreviewFor(e) {
        return function () {
          return B.some({
            tag: "div",
            styles: -1 === e.indexOf("dings") ? {
              "font-family": e
            } : {}
          });
        };
      },
      onAction: function onAction(t) {
        return function () {
          e.undoManager.transact(function () {
            e.focus(), e.execCommand("FontName", !1, t.format);
          });
        };
      },
      updateText: function updateText(e) {
        var _o39 = o(),
            t = _o39.matchOpt,
            n = _o39.font,
            s = t.fold(y(n), function (e) {
          return e.title;
        });

        wr(e, Yk, {
          text: s
        });
      },
      dataset: n,
      shouldHide: !1,
      isInvalid: _
    };
  },
      eB = {
    "8pt": "1",
    "10pt": "2",
    "12pt": "3",
    "14pt": "4",
    "18pt": "5",
    "24pt": "6",
    "36pt": "7"
  },
      tB = {
    "xx-small": "7pt",
    "x-small": "8pt",
    small: "10pt",
    medium: "12pt",
    large: "14pt",
    "x-large": "18pt",
    "xx-large": "24pt"
  },
      oB = function oB(e, t) {
    return /[0-9.]+px$/.test(e) ? function (e, t) {
      var o = Math.pow(10, t);
      return Math.round(e * o) / o;
    }(72 * parseInt(e, 10) / 96, t || 0) + "pt" : be(tB, e).getOr(e);
  },
      nB = function nB(e) {
    return be(eB, e).getOr("");
  },
      sB = function sB(e) {
    var t = function t() {
      var t = B.none();
      var o = n.data,
          s = e.queryCommandValue("FontSize");

      if (s) {
        var _loop = function _loop(_e24) {
          var n = oB(s, _e24),
              r = nB(n);
          t = G(o, function (e) {
            return e.format === s || e.format === n || e.format === r;
          });
        };

        for (var _e24 = 3; t.isNone() && _e24 >= 0; _e24--) {
          _loop(_e24);
        }
      }

      return {
        matchOpt: t,
        size: s
      };
    },
        o = y(B.none),
        n = $E(e, "font_size_formats", GE.Space);

    return {
      tooltip: "Font sizes",
      text: B.some("12pt"),
      icon: B.none(),
      isSelectedFor: function isSelectedFor(e) {
        return function (t) {
          return t.exists(function (t) {
            return t.format === e;
          });
        };
      },
      getPreviewFor: o,
      getCurrentValue: function getCurrentValue() {
        var _t36 = t(),
            e = _t36.matchOpt;

        return e;
      },
      onAction: function onAction(t) {
        return function () {
          e.undoManager.transact(function () {
            e.focus(), e.execCommand("FontSize", !1, t.format);
          });
        };
      },
      updateText: function updateText(e) {
        var _t37 = t(),
            o = _t37.matchOpt,
            n = _t37.size,
            s = o.fold(y(n), function (e) {
          return e.title;
        });

        wr(e, Yk, {
          text: s
        });
      },
      dataset: n,
      shouldHide: !1,
      isInvalid: _
    };
  },
      rB = function rB(e, t) {
    var o = "Paragraph";
    return {
      tooltip: "Formats",
      text: B.some(o),
      icon: B.none(),
      isSelectedFor: function isSelectedFor(t) {
        return function () {
          return e.formatter.match(t);
        };
      },
      getCurrentValue: B.none,
      getPreviewFor: function getPreviewFor(t) {
        return function () {
          var o = e.formatter.get(t);
          return void 0 !== o ? B.some({
            tag: o.length > 0 && (o[0].inline || o[0].block) || "div",
            styles: e.dom.parseStyle(e.formatter.getCssText(t))
          }) : B.none();
        };
      },
      onAction: NE(e),
      updateText: function updateText(t) {
        var n = function n(e) {
          var t = e.items;
          return void 0 !== t && t.length > 0 ? X(t, n) : [{
            title: e.title,
            format: e.format
          }];
        },
            s = X(zO(e), n),
            r = KE(e, y(s)).fold(y(o), function (e) {
          return e.title;
        });

        wr(t, Yk, {
          text: r
        });
      },
      shouldHide: Qh(e),
      isInvalid: function isInvalid(t) {
        return !e.formatter.canApply(t.format);
      },
      dataset: t
    };
  };

  var aB = Object.freeze({
    __proto__: null,
    events: function events(e, t) {
      var o = function o(_o40, n) {
        e.updateState.each(function (e) {
          var s = e(_o40, n);
          t.set(s);
        }), e.renderComponents.each(function (s) {
          var r = s(n, t.get());
          (e.reuseDom ? Op : Cp)(_o40, r);
        });
      };

      return _r([Br(Zs(), function (t, n) {
        var s = n;

        if (!s.universal) {
          var _n39 = e.channel;
          R(s.channels, _n39) && o(t, s.data);
        }
      }), zr(function (t, n) {
        e.initialData.each(function (e) {
          o(t, e);
        });
      })]);
    }
  }),
      iB = Object.freeze({
    __proto__: null,
    getState: function getState(e, t, o) {
      return o;
    }
  }),
      lB = [jn("channel"), Qn("renderComponents"), Qn("updateState"), Qn("initialData"), ms("reuseDom", !0)];

  var cB = ul({
    fields: lB,
    name: "reflecting",
    active: aB,
    apis: iB,
    state: Object.freeze({
      __proto__: null,
      init: function init() {
        var e = fs(B.none());
        return {
          readState: function readState() {
            return e.get().getOr("none");
          },
          get: e.get,
          set: e.set,
          clear: function clear() {
            return e.set(B.none());
          }
        };
      }
    })
  }),
      dB = y([jn("toggleClass"), jn("fetch"), yi("onExecute"), is("getHotspot", B.some), is("getAnchorOverrides", y({})), ac(), yi("onItemExecute"), Qn("lazySink"), jn("dom"), bi("onOpen"), Qd("splitDropdownBehaviours", [mw, kp, Hp]), is("matchWidth", !1), is("useMinWidth", !1), is("eventOrder", {}), Qn("role")].concat(Cw())),
      uB = _u({
    factory: Sh,
    schema: [jn("dom")],
    name: "arrow",
    defaults: function defaults() {
      return {
        buttonBehaviours: cl([Hp.revoke()])
      };
    },
    overrides: function overrides(e) {
      return {
        dom: {
          tag: "span",
          attributes: {
            role: "presentation"
          }
        },
        action: function action(t) {
          t.getSystem().getByUid(e.uid).each(Sr);
        },
        buttonBehaviours: cl([$p.config({
          toggleOnExecute: !1,
          toggleClass: e.toggleClass
        })])
      };
    }
  }),
      mB = _u({
    factory: Sh,
    schema: [jn("dom")],
    name: "button",
    defaults: function defaults() {
      return {
        buttonBehaviours: cl([Hp.revoke()])
      };
    },
    overrides: function overrides(e) {
      return {
        dom: {
          tag: "span",
          attributes: {
            role: "presentation"
          }
        },
        action: function action(t) {
          t.getSystem().getByUid(e.uid).each(function (o) {
            e.onExecute(o, t);
          });
        }
      };
    }
  }),
      gB = y([uB, mB, Eu({
    factory: {
      sketch: function sketch(e) {
        return {
          uid: e.uid,
          dom: {
            tag: "span",
            styles: {
              display: "none"
            },
            attributes: {
              "aria-hidden": "true"
            },
            innerHtml: e.text
          }
        };
      }
    },
    schema: [jn("text")],
    name: "aria-descriptor"
  }), Tu({
    schema: [pi()],
    name: "menu",
    defaults: function defaults(e) {
      return {
        onExecute: function onExecute(t, o) {
          t.getSystem().getByUid(e.uid).each(function (n) {
            e.onItemExecute(n, t, o);
          });
        }
      };
    }
  }), pw()]),
      pB = tm({
    name: "SplitDropdown",
    configFields: dB(),
    partFields: gB(),
    factory: function factory(e, t, o, n) {
      var s = function s(e) {
        rm.getCurrent(e).each(function (e) {
          Bm.highlightFirst(e), kp.focusIn(e);
        });
      },
          r = function r(t) {
        yw(e, x, t, n, s, hw.HighlightFirst).get(b);
      },
          a = function a(t) {
        var o = Lu(t, e, "button");
        return Sr(o), B.some(!0);
      },
          i = _objectSpread({}, _r([zr(function (t, o) {
        Nu(t, e, "aria-descriptor").each(function (e) {
          var o = Kr("aria");
          ht(e.element, "id", o), ht(t.element, "aria-describedby", o);
        });
      })]), {}, Xp(B.some(r))),
          l = {
        repositionMenus: function repositionMenus(e) {
          $p.isOn(e) && kw(e);
        }
      };

      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        apis: l,
        eventOrder: _objectSpread({}, e.eventOrder, _defineProperty({}, Qs(), ["disabling", "toggling", "alloy.base.behaviour"])),
        events: i,
        behaviours: tu(e.splitDropdownBehaviours, [mw.config({
          others: {
            sandbox: function sandbox(t) {
              var o = Lu(t, e, "arrow");
              return Sw(e, t, {
                onOpen: function onOpen() {
                  $p.on(o), $p.on(t);
                },
                onClose: function onClose() {
                  $p.off(o), $p.off(t);
                }
              });
            }
          }
        }), kp.config({
          mode: "special",
          onSpace: a,
          onEnter: a,
          onDown: function onDown(e) {
            return r(e), B.some(!0);
          }
        }), Hp.config({}), $p.config({
          toggleOnExecute: !1,
          aria: {
            mode: "expanded"
          }
        })]),
        domModification: {
          attributes: {
            role: e.role.getOr("button"),
            "aria-haspopup": !0
          }
        }
      };
    },
    apis: {
      repositionMenus: function repositionMenus(e, t) {
        return e.repositionMenus(t);
      }
    }
  }),
      hB = function hB(e) {
    return {
      isEnabled: function isEnabled() {
        return !ym.isDisabled(e);
      },
      setEnabled: function setEnabled(t) {
        return ym.set(e, !t);
      }
    };
  },
      fB = function fB(e) {
    return {
      setActive: function setActive(t) {
        $p.set(e, t);
      },
      isActive: function isActive() {
        return $p.isOn(e);
      },
      isEnabled: function isEnabled() {
        return !ym.isDisabled(e);
      },
      setEnabled: function setEnabled(t) {
        return ym.set(e, !t);
      }
    };
  },
      bB = function bB(e, t) {
    return e.map(function (e) {
      return {
        "aria-label": t.translate(e),
        title: t.translate(e)
      };
    }).getOr({});
  },
      vB = Kr("focus-button"),
      yB = function yB(e, t, o, n, s, r) {
    return {
      dom: {
        tag: "button",
        classes: ["tox-tbtn"].concat(t.isSome() ? ["tox-tbtn--select"] : []),
        attributes: bB(o, r)
      },
      components: Uv([e.map(function (e) {
        return qk(e, r.icons);
      }), t.map(function (e) {
        return Kk(e, "tox-tbtn", r);
      })]),
      eventOrder: _defineProperty({}, As(), ["focusing", "alloy.base.behaviour", "common-button-display-events"]),
      buttonBehaviours: cl([zv(r.isDisabled), Iv(), Fp("common-button-display-events", [Br(As(), function (e, t) {
        t.event.prevent(), xr(e, vB);
      })])].concat(n.map(function (o) {
        return cB.config({
          channel: o,
          initialData: {
            icon: e,
            text: t
          },
          renderComponents: function renderComponents(e, t) {
            return Uv([e.icon.map(function (e) {
              return qk(e, r.icons);
            }), e.text.map(function (e) {
              return Kk(e, "tox-tbtn", r);
            })]);
          }
        });
      }).toArray()).concat(s.getOr([])))
    };
  },
      xB = function xB(e, t, o) {
    var n = fs(b),
        s = yB(e.icon, e.text, e.tooltip, B.none(), B.none(), o);
    return Sh.sketch({
      dom: s.dom,
      components: s.components,
      eventOrder: Gk,
      buttonBehaviours: cl([Fp("toolbar-button-events", [(r = {
        onAction: e.onAction,
        getApi: t.getApi
      }, Nr(function (e, t) {
        Hv(r, e)(function (t) {
          wr(e, jk, {
            buttonApi: t
          }), r.onAction(t);
        });
      })), Pv(t, n), Nv(t, n)]), zv(function () {
        return !e.enabled || o.isDisabled();
      }), Iv()].concat(t.toolbarButtonBehaviours))
    });
    var r;
  },
      wB = function wB(e, t, o) {
    return xB(e, {
      toolbarButtonBehaviours: [].concat(o.length > 0 ? [Fp("toolbarButtonWith", o)] : []),
      getApi: hB,
      onSetup: e.onSetup
    }, t);
  },
      SB = function SB(e, t, o) {
    return sn(xB(e, {
      toolbarButtonBehaviours: [Dp.config({}), $p.config({
        toggleClass: "tox-tbtn--enabled",
        aria: {
          mode: "pressed"
        },
        toggleOnExecute: !1
      })].concat(o.length > 0 ? [Fp("toolbarToggleButtonWith", o)] : []),
      getApi: fB,
      onSetup: e.onSetup
    }, t));
  },
      kB = function kB(e, t, o) {
    return function (n) {
      return Jx(function (e) {
        return t.fetch(e);
      }).map(function (s) {
        return B.from(lx(sn(Xy(Kr("menu-value"), s, function (o) {
          t.onItemAction(e(n), o);
        }, t.columns, t.presets, Uf.CLOSE_ON_EXECUTE, t.select.getOr(_), o), {
          movement: Yy(t.columns, t.presets),
          menuBehaviours: wv("auto" !== t.columns ? [] : [zr(function (e, o) {
            xv(e, 4, eb(t.presets)).each(function (_ref13) {
              var t = _ref13.numRows,
                  o = _ref13.numColumns;
              kp.setGridSize(e, t, o);
            });
          })])
        })));
      });
    };
  },
      CB = [{
    name: "history",
    items: ["undo", "redo"]
  }, {
    name: "styles",
    items: ["styles"]
  }, {
    name: "formatting",
    items: ["bold", "italic"]
  }, {
    name: "alignment",
    items: ["alignleft", "aligncenter", "alignright", "alignjustify"]
  }, {
    name: "indentation",
    items: ["outdent", "indent"]
  }, {
    name: "permanent pen",
    items: ["permanentpen"]
  }, {
    name: "comments",
    items: ["addcomment"]
  }],
      OB = function OB(e, t) {
    return function (o, n, s) {
      var r = e(o).mapError(function (e) {
        return Pn(e);
      }).getOrDie();
      return t(r, n, s);
    };
  },
      _B = {
    button: OB($b, function (e, t) {
      return o = e, n = t.backstage.shared.providers, wB(o, n, []);
      var o, n;
    }),
    togglebutton: OB(Kb, function (e, t) {
      return o = e, n = t.backstage.shared.providers, SB(o, n, []);
      var o, n;
    }),
    menubutton: OB(nT, function (e, t) {
      return DC(e, "tox-tbtn", t.backstage, B.none());
    }),
    splitbutton: OB(function (e) {
      return Vn("SplitButton", sT, e);
    }, function (e, t) {
      return function (e, t) {
        var o = Kr("channel-update-split-dropdown-display"),
            n = function n(e) {
          return {
            isEnabled: function isEnabled() {
              return !ym.isDisabled(e);
            },
            setEnabled: function setEnabled(t) {
              return ym.set(e, !t);
            },
            setIconFill: function setIconFill(t, o) {
              ei(e.element, 'svg path[id="' + t + '"], rect[id="' + t + '"]').each(function (e) {
                ht(e, "fill", o);
              });
            },
            setActive: function setActive(t) {
              ht(e.element, "aria-pressed", t), ei(e.element, "span").each(function (o) {
                e.getSystem().getByDom(o).each(function (e) {
                  return $p.set(e, t);
                });
              });
            },
            isActive: function isActive() {
              return ei(e.element, "span").exists(function (t) {
                return e.getSystem().getByDom(t).exists($p.isOn);
              });
            }
          };
        },
            s = fs(b),
            r = {
          getApi: n,
          onSetup: e.onSetup
        };

        return pB.sketch({
          dom: {
            tag: "div",
            classes: ["tox-split-button"],
            attributes: _objectSpread({
              "aria-pressed": !1
            }, bB(e.tooltip, t.providers))
          },
          onExecute: function onExecute(t) {
            e.onAction(n(t));
          },
          onItemExecute: function onItemExecute(e, t, o) {},
          splitDropdownBehaviours: cl([Vv(t.providers.isDisabled), Iv(), Fp("split-dropdown-events", [Br(vB, Hp.focus), Pv(r, s), Nv(r, s)]), Ew.config({})]),
          eventOrder: _defineProperty({}, dr(), ["alloy.base.behaviour", "split-dropdown-events"]),
          toggleClass: "tox-tbtn--enabled",
          lazySink: t.getSink,
          fetch: kB(n, e, t.providers),
          parts: {
            menu: ab(0, e.columns, e.presets)
          },
          components: [pB.parts.button(yB(e.icon, e.text, B.none(), B.some(o), B.some([$p.config({
            toggleClass: "tox-tbtn--enabled",
            toggleOnExecute: !1
          })]), t.providers)), pB.parts.arrow({
            dom: {
              tag: "button",
              classes: ["tox-tbtn", "tox-split-button__chevron"],
              innerHtml: Mh("chevron-down", t.providers.icons)
            },
            buttonBehaviours: cl([Vv(t.providers.isDisabled), Iv(), Ah()])
          }), pB.parts["aria-descriptor"]({
            text: t.providers.translate("To open the popup, press Shift+Enter")
          })]
        });
      }(e, t.backstage.shared);
    }),
    grouptoolbarbutton: OB(function (e) {
      return Vn("GroupToolbarButton", eT, e);
    }, function (e, t, o) {
      var n = o.ui.registry.getAll().buttons,
          s = _defineProperty({}, sc, t.backstage.shared.header.isPositionedAtTop() ? nc.TopToBottom : nc.BottomToTop);

      if (of(o) === Vh.floating) return function (e, t, o, n) {
        var s = t.shared;
        return tE.sketch({
          lazySink: s.getSink,
          fetch: function fetch() {
            return Jx(function (t) {
              t(P(o(e.items), pE));
            });
          },
          markers: {
            toggledClass: "tox-tbtn--enabled"
          },
          parts: {
            button: yB(e.icon, e.text, e.tooltip, B.none(), B.none(), s.providers),
            toolbar: {
              dom: {
                tag: "div",
                classes: ["tox-toolbar__overflow"],
                attributes: n
              }
            }
          }
        });
      }(e, t.backstage, function (e) {
        return EB(o, {
          buttons: n,
          toolbar: e,
          allowToolbarGroups: !1
        }, t, B.none());
      }, s);
      throw new Error("Toolbar groups are only supported when using floating toolbar mode");
    }),
    styleSelectButton: function styleSelectButton(e, t) {
      return function (e, t) {
        var o = _objectSpread({
          type: "advanced"
        }, t.styles);

        return jE(e, t, rB(e, o));
      }(e, t.backstage);
    },
    fontsizeSelectButton: function fontsizeSelectButton(e, t) {
      return function (e, t) {
        return jE(e, t, sB(e));
      }(e, t.backstage);
    },
    fontSelectButton: function fontSelectButton(e, t) {
      return function (e, t) {
        return jE(e, t, QE(e));
      }(e, t.backstage);
    },
    formatButton: function formatButton(e, t) {
      return function (e, t) {
        return jE(e, t, YE(e));
      }(e, t.backstage);
    },
    alignMenuButton: function alignMenuButton(e, t) {
      return function (e, t) {
        return jE(e, t, XE(e));
      }(e, t.backstage);
    }
  },
      TB = {
    styles: _B.styleSelectButton,
    fontsize: _B.fontsizeSelectButton,
    fontfamily: _B.fontSelectButton,
    blocks: _B.formatButton,
    align: _B.alignMenuButton
  },
      EB = function EB(e, t, o, n) {
    var s = function (e) {
      var t = e.toolbar,
          o = e.buttons;
      return !1 === t ? [] : void 0 === t || !0 === t ? function (e) {
        var t = P(CB, function (t) {
          var o = W(t.items, function (t) {
            return ve(e, t) || ve(TB, t);
          });
          return {
            name: t.name,
            items: o
          };
        });
        return W(t, function (e) {
          return e.items.length > 0;
        });
      }(o) : r(t) ? function (e) {
        var t = e.split("|");
        return P(t, function (e) {
          return {
            items: e.trim().split(" ")
          };
        });
      }(t) : function (e) {
        return f(e, function (e) {
          return ve(e, "name") && ve(e, "items");
        });
      }(t) ? t : (console.error("Toolbar type should be string, string[], boolean or ToolbarGroup[]"), []);
    }(t),
        a = P(s, function (s) {
      var r = X(s.items, function (s) {
        return 0 === s.trim().length ? [] : function (e, t, o, n, s, r) {
          return be(t, o.toLowerCase()).orThunk(function () {
            return r.bind(function (e) {
              return re(e, function (e) {
                return be(t, e + o.toLowerCase());
              });
            });
          }).fold(function () {
            return be(TB, o.toLowerCase()).map(function (t) {
              return t(e, s);
            }).orThunk(function () {
              return B.none();
            });
          }, function (t) {
            return "grouptoolbarbutton" !== t.type || n ? function (e, t, o) {
              return be(_B, e.type).fold(function () {
                return console.error("skipping button defined by", e), B.none();
              }, function (n) {
                return B.some(n(e, t, o));
              });
            }(t, s, e) : (console.warn("Ignoring the '".concat(o, "' toolbar button. Group toolbar buttons are only supported when using floating toolbar mode and cannot be nested.")), B.none());
          });
        }(e, t.buttons, s, t.allowToolbarGroups, o, n).toArray();
      });
      return {
        title: B.from(e.translate(s.name)),
        items: r
      };
    });

    return W(a, function (e) {
      return e.items.length > 0;
    });
  },
      BB = function BB(e, t, o, n) {
    var s = t.outerContainer,
        a = o.toolbar,
        i = o.buttons;

    if (f(a, r)) {
      var _t38 = a.map(function (t) {
        var s = {
          toolbar: t,
          buttons: i,
          allowToolbarGroups: o.allowToolbarGroups
        };
        return EB(e, s, {
          backstage: n
        }, B.none());
      });

      TE.setToolbars(s, _t38);
    } else TE.setToolbar(s, EB(e, o, {
      backstage: n
    }, B.none()));
  },
      MB = So(),
      AB = MB.os.isiOS() && MB.os.version.major <= 12;

  var DB = Object.freeze({
    __proto__: null,
    render: function render(e, t, o, n, s) {
      var r = fs(0),
          a = t.outerContainer;
      VE(e);
      var i = Ie(s.targetNode),
          l = lt(it(i));
      (function (e, t) {
        xd(e, t, To);
      })(i, t.mothership), yd(l, t.uiMothership), e.on("PostRender", function () {
        TE.setSidebar(a, o.sidebar, Cf(e)), BB(e, t, o, n), r.set(e.getWin().innerWidth), TE.setMenubar(a, ME(e, o)), function (e, t) {
          var o = e.dom;
          var n = e.getWin();

          var s = e.getDoc().documentElement,
              r = fs(Ht(n.innerWidth, n.innerHeight)),
              a = fs(Ht(s.offsetWidth, s.offsetHeight)),
              i = function i() {
            var t = r.get();
            t.left === n.innerWidth && t.top === n.innerHeight || (r.set(Ht(n.innerWidth, n.innerHeight)), Oy(e));
          },
              l = function l() {
            var t = e.getDoc().documentElement,
                o = a.get();
            o.left === t.offsetWidth && o.top === t.offsetHeight || (a.set(Ht(t.offsetWidth, t.offsetHeight)), Oy(e));
          },
              c = function c(t) {
            return function (e, t) {
              return e.dispatch("ScrollContent", t);
            }(e, t);
          };

          o.bind(n, "resize", i), o.bind(n, "scroll", c);
          var d = Ll(Ie(e.getBody()), "load", l),
              u = t.uiMothership.element;
          e.on("hide", function () {
            kt(u, "display", "none");
          }), e.on("show", function () {
            At(u, "display");
          }), e.on("NodeChange", l), e.on("remove", function () {
            d.unbind(), o.unbind(n, "resize", i), o.unbind(n, "scroll", c), n = null;
          });
        }(e, t);
      });
      var d = TE.getSocket(a).getOrDie("Could not find expected socket element");

      if (AB) {
        Ct(d.element, {
          overflow: "scroll",
          "-webkit-overflow-scrolling": "touch"
        });

        var _t39 = function (e, t) {
          var o = null;
          return {
            cancel: function cancel() {
              c(o) || (clearTimeout(o), o = null);
            },
            throttle: function throttle() {
              for (var _len16 = arguments.length, t = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                t[_key16] = arguments[_key16];
              }

              c(o) && (o = setTimeout(function () {
                o = null, e.apply(null, t);
              }, 20));
            }
          };
        }(function () {
          e.dispatch("ScrollContent");
        }),
            _o41 = Nl(d.element, "scroll", _t39.throttle);

        e.on("remove", _o41.unbind);
      }

      Fv(e, t), e.addCommand("ToggleSidebar", function (t, o) {
        TE.toggleSidebar(a, o), e.dispatch("ToggleSidebar");
      }), e.addQueryValueHandler("ToggleSidebar", function () {
        return TE.whichSidebar(a);
      });
      var u = of(e);
      u !== Vh.sliding && u !== Vh.floating || e.on("ResizeWindow ResizeEditor ResizeContent", function () {
        var o = e.getWin().innerWidth;
        o !== r.get() && (TE.refreshToolbar(t.outerContainer), r.set(o));
      });
      var m = {
        setEnabled: function setEnabled(e) {
          Dv(t, !e);
        },
        isEnabled: function isEnabled() {
          return !ym.isDisabled(a);
        }
      };
      return {
        iframeContainer: d.element.dom,
        editorContainer: a.element.dom,
        api: m
      };
    }
  });

  var FB = function FB(e) {
    return /^[0-9\.]+(|px)$/i.test("" + e) ? B.some(parseInt("" + e, 10)) : B.none();
  },
      IB = function IB(e) {
    return h(e) ? e + "px" : e;
  },
      RB = function RB(e, t, o) {
    var n = t.filter(function (t) {
      return e < t;
    }),
        s = o.filter(function (t) {
      return e > t;
    });
    return n.or(s).getOr(e);
  },
      VB = function VB(e) {
    var t = $h(e),
        o = qh(e),
        n = Kh(e);
    return FB(t).map(function (e) {
      return RB(e, o, n);
    });
  },
      zB = Pf.ToolbarLocation,
      HB = Pf.ToolbarMode,
      PB = function PB(e, t) {
    var o = Wo(e);
    return {
      pos: t ? o.y : o.bottom,
      bounds: o
    };
  };

  var NB = Object.freeze({
    __proto__: null,
    render: function render(e, t, o, n, s) {
      var r = t.mothership,
          a = t.uiMothership,
          i = t.outerContainer,
          l = fs(null),
          c = Ie(s.targetNode),
          d = function (e, t, o, n, s) {
        var r = o.uiMothership,
            a = o.outerContainer,
            i = Hh.DOM,
            l = If(e),
            c = zf(e),
            d = Kh(e).or(VB(e)),
            u = n.shared.header,
            m = u.isPositionedAtTop,
            g = of(e),
            p = g === HB.sliding || g === HB.floating,
            h = fs(!1),
            f = function f() {
          return h.get() && !e.removed;
        },
            b = function b(e) {
          return p ? e.fold(y(0), function (e) {
            return e.components().length > 1 ? Rt(e.components()[1].element) : 0;
          }) : 0;
        },
            v = function v() {
          r.broadcastOn([Id()], {});
        },
            x = function x() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

          if (f()) {
            if (l || function () {
              var e = d.getOrThunk(function () {
                var e = FB(_t(mt(), "margin-left")).getOr(0);
                return Ut(mt()) - Nt(t).left + e;
              });
              kt(s.get().element, "max-width", e + "px");
            }(), p && TE.refreshToolbar(a), l || function () {
              var e = TE.getToolbar(a),
                  o = b(e),
                  n = Wo(t),
                  r = m() ? Math.max(n.y - Rt(s.get().element) + o, 0) : n.bottom;
              Ct(a.element, {
                position: "absolute",
                top: Math.round(r) + "px",
                left: Math.round(n.x) + "px"
              });
            }(), c) {
              var _t40 = s.get();

              e ? U_.reset(_t40) : U_.refresh(_t40);
            }

            v();
          }
        },
            w = function w() {
          var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          if (l || !c || !f()) return;

          var n = u.getDockingMode(),
              r = function (o) {
            switch (sf(_e25)) {
              case zB.auto:
                var _e25 = TE.getToolbar(a),
                    _n40 = b(_e25),
                    _s32 = Rt(o.element) - _n40,
                    _r13 = Wo(t);

                if (_r13.y > _s32) return "top";
                {
                  var _e26 = Ke(t),
                      _o42 = Math.max(_e26.dom.scrollHeight, Rt(_e26));

                  return _r13.bottom < _o42 - _s32 || jo().bottom < _r13.bottom - _s32 ? "bottom" : "top";
                }

              case zB.bottom:
                return "bottom";

              case zB.top:
              default:
                return "top";
            }
          }(s.get());

          r !== n && (function (e) {
            var t = s.get();
            U_.setModes(t, [e]), u.setDockingMode(e);
            var o = m() ? nc.TopToBottom : nc.BottomToTop;
            ht(t.element, sc, o);
          }(r), o && x(!0));
        };

        return {
          isVisible: f,
          isPositionedAtTop: m,
          show: function show() {
            h.set(!0), kt(a.element, "display", "flex"), i.addClass(e.getBody(), "mce-edit-focus"), At(r.element, "display"), w(!1), x();
          },
          hide: function hide() {
            h.set(!1), o.outerContainer && (kt(a.element, "display", "none"), i.removeClass(e.getBody(), "mce-edit-focus")), kt(r.element, "display", "none");
          },
          update: x,
          updateMode: w,
          repositionPopups: v
        };
      }(e, c, t, n, l),
          u = lf(e);

      zE(e);

      var m = function m() {
        if (l.get()) return void d.show();
        l.set(TE.getHeader(i).getOrDie());
        var s = Rf(e);
        yd(s, r), yd(s, a), BB(e, t, o, n), TE.setMenubar(i, ME(e, o)), d.show(), function (e, t, o, n) {
          var s = fs(PB(t, o.isPositionedAtTop())),
              r = function r(n) {
            var _PB = PB(t, o.isPositionedAtTop()),
                r = _PB.pos,
                a = _PB.bounds,
                _s$get = s.get(),
                i = _s$get.pos,
                l = _s$get.bounds,
                c = a.height !== l.height || a.width !== l.width;

            s.set({
              pos: r,
              bounds: a
            }), c && Oy(e, n), o.isVisible() && (i !== r ? o.update(!0) : c && (o.updateMode(), o.repositionPopups()));
          };

          n || (e.on("activate", o.show), e.on("deactivate", o.hide)), e.on("SkinLoaded ResizeWindow", function () {
            return o.update(!0);
          }), e.on("NodeChange keydown", function (e) {
            requestAnimationFrame(function () {
              return r(e);
            });
          }), e.on("ScrollWindow", function () {
            return o.updateMode();
          });
          var a = zl();
          a.set(Ll(Ie(e.getBody()), "load", r)), e.on("remove", function () {
            a.clear();
          });
        }(e, c, d, u), e.nodeChanged();
      };

      e.on("show", m), e.on("hide", d.hide), u || (e.on("focus", m), e.on("blur", d.hide)), e.on("init", function () {
        (e.hasFocus() || u) && m();
      }), Fv(e, t);
      var g = {
        show: function show() {
          m();
        },
        hide: function hide() {
          d.hide();
        },
        setEnabled: function setEnabled(e) {
          Dv(t, !e);
        },
        isEnabled: function isEnabled() {
          return !ym.isDisabled(i);
        }
      };
      return {
        editorContainer: i.element.dom,
        api: g
      };
    }
  });

  var LB = "contexttoolbar-hide",
      WB = function WB(e, t) {
    return Br(jk, function (o, n) {
      var s = function (e) {
        return {
          hide: function hide() {
            return xr(e, nr());
          },
          getValue: function getValue() {
            return Zd.getValue(e);
          }
        };
      }(e.get(o));

      t.onAction(s, n.event.buttonApi);
    });
  },
      UB = function UB(e, t) {
    var o = e.label.fold(function () {
      return {};
    }, function (e) {
      return {
        "aria-label": e
      };
    }),
        n = kh($x.sketch({
      inputClasses: ["tox-toolbar-textfield", "tox-toolbar-nav-js"],
      data: e.initValue(),
      inputAttributes: o,
      selectOnFocus: !0,
      inputBehaviours: cl([kp.config({
        mode: "special",
        onEnter: function onEnter(e) {
          return s.findPrimary(e).map(function (e) {
            return Sr(e), !0;
          });
        },
        onLeft: function onLeft(e, t) {
          return t.cut(), B.none();
        },
        onRight: function onRight(e, t) {
          return t.cut(), B.none();
        }
      })])
    })),
        s = function (e, t, o) {
      var n = P(t, function (t) {
        return kh(function (e, t, o) {
          var n = {
            backstage: {
              shared: {
                providers: o
              }
            }
          };
          return "contextformtogglebutton" === t.type ? function (e, t, o) {
            var _t$original = t.original,
                n = _t$original.primary,
                s = _objectWithoutProperties(_t$original, ["primary"]),
                r = zn(Kb(_objectSpread({}, s, {
              type: "togglebutton",
              onAction: b
            })));

            return SB(r, o.backstage.shared.providers, [WB(e, t)]);
          }(e, t, n) : function (e, t, o) {
            var _t$original2 = t.original,
                n = _t$original2.primary,
                s = _objectWithoutProperties(_t$original2, ["primary"]),
                r = zn($b(_objectSpread({}, s, {
              type: "button",
              onAction: b
            })));

            return wB(r, o.backstage.shared.providers, [WB(e, t)]);
          }(e, t, n);
        }(e, t, o));
      });
      return {
        asSpecs: function asSpecs() {
          return P(n, function (e) {
            return e.asSpec();
          });
        },
        findPrimary: function findPrimary(e) {
          return re(t, function (t, o) {
            return t.primary ? B.from(n[o]).bind(function (t) {
              return t.getOpt(e);
            }).filter(k(ym.isDisabled)) : B.none();
          });
        }
      };
    }(n, e.commands, t);

    return [{
      title: B.none(),
      items: [n.asSpec()]
    }, {
      title: B.none(),
      items: s.asSpecs()
    }];
  },
      jB = function jB(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .01;
    return t.bottom - e.y >= o && e.bottom - t.y >= o;
  },
      GB = function GB(e) {
    var t = function (e) {
      var t = e.getBoundingClientRect();

      if (t.height <= 0 && t.width <= 0) {
        var _o43 = nt(Ie(e.startContainer), e.startOffset).element;
        return (Pe(_o43) ? Je(_o43) : B.some(_o43)).filter(He).map(function (e) {
          return e.dom.getBoundingClientRect();
        }).getOr(t);
      }

      return t;
    }(e.selection.getRng());

    if (e.inline) {
      var _e27 = Fo();

      return Lo(_e27.left + t.left, _e27.top + t.top, t.width, t.height);
    }

    {
      var _o44 = Uo(Ie(e.getBody()));

      return Lo(_o44.x + t.left, _o44.y + t.top, t.width, t.height);
    }
  },
      $B = function $B(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var s = Vo(window),
        r = Wo(Ie(e.getContentAreaContainer())),
        a = _f(e) || Bf(e) || Af(e),
        _ref14 = function (e, t, o) {
      var n = Math.max(e.x + o, t.x);
      return {
        x: n,
        width: Math.min(e.right - o, t.right) - n
      };
    }(r, s, n),
        i = _ref14.x,
        l = _ref14.width;

    if (e.inline && !a) return Lo(i, s.y, l, s.height);
    {
      var _a6 = t.header.isPositionedAtTop(),
          _ref15 = function (e, t, o, n, s, r) {
        var a = Ie(e.getContainer()),
            i = ei(a, ".tox-editor-header").getOr(a),
            l = Wo(i),
            c = l.y >= t.bottom,
            d = n && !c;
        if (e.inline && d) return {
          y: Math.max(l.bottom + r, o.y),
          bottom: o.bottom
        };
        if (e.inline && !d) return {
          y: o.y,
          bottom: Math.min(l.y - r, o.bottom)
        };
        var u = "line" === s ? Wo(a) : t;
        return d ? {
          y: Math.max(l.bottom + r, o.y),
          bottom: Math.min(u.bottom - r, o.bottom)
        } : {
          y: Math.max(u.y + r, o.y),
          bottom: Math.min(l.y - r, o.bottom)
        };
      }(e, r, s, _a6, o, n),
          _c5 = _ref15.y,
          _d2 = _ref15.bottom;

      return Lo(i, _c5, l, _d2 - _c5);
    }
  },
      qB = {
    valignCentre: [],
    alignCentre: [],
    alignLeft: ["tox-pop--align-left"],
    alignRight: ["tox-pop--align-right"],
    right: ["tox-pop--right"],
    left: ["tox-pop--left"],
    bottom: ["tox-pop--bottom"],
    top: ["tox-pop--top"],
    inset: ["tox-pop--inset"]
  },
      XB = {
    maxHeightFunction: Xl(),
    maxWidthFunction: KT()
  },
      KB = function KB(e) {
    return "node" === e;
  },
      YB = function YB(e, t, o, n, s) {
    var r = GB(e),
        a = n.lastElement().exists(function (e) {
      return Ge(o, e);
    });
    return function (e, t) {
      var o = e.selection.getRng(),
          n = nt(Ie(o.startContainer), o.startOffset);
      return o.startContainer === o.endContainer && o.startOffset === o.endOffset - 1 && Ge(n.element, t);
    }(e, o) ? a ? yO : pO : a ? function (e, o, s) {
      var a = Et(e, "position");
      kt(e, "position", o);
      var i = jB(r, Wo(t)) && !n.isReposition() ? wO : yO;
      return a.each(function (t) {
        return kt(e, "position", t);
      }), i;
    }(t, n.getMode()) : ("fixed" === n.getMode() ? s.y + Fo().top : s.y) + (Rt(t) + 12) <= r.y ? pO : hO;
  },
      JB = function JB(e, t, o, n) {
    var s = function s(t) {
      return function (n, s, r, a, i) {
        return _objectSpread({}, YB(e, a, t, o, i)(_objectSpread({}, n, {
          y: i.y,
          height: i.height
        }), s, r, a, i), {
          alwaysFit: !0
        });
      };
    },
        r = function r(e) {
      return KB(n) ? [s(e)] : [];
    };

    return t ? {
      onLtr: function onLtr(e) {
        return [Ki, ji, Gi, $i, qi, Xi].concat(r(e));
      },
      onRtl: function onRtl(e) {
        return [Ki, Gi, ji, qi, $i, Xi].concat(r(e));
      }
    } : {
      onLtr: function onLtr(e) {
        return [Xi, Ki, $i, ji, qi, Gi].concat(r(e));
      },
      onRtl: function onRtl(e) {
        return [Xi, Ki, qi, Gi, $i, ji].concat(r(e));
      }
    };
  },
      ZB = function ZB(e, t) {
    var o = W(t, function (t) {
      return t.predicate(e.dom);
    }),
        _L = L(o, function (e) {
      return "contexttoolbar" === e.type;
    }),
        n = _L.pass,
        s = _L.fail;

    return {
      contextToolbars: n,
      contextForms: s
    };
  },
      QB = function QB(e, t) {
    var o = {},
        n = [],
        s = [],
        r = {},
        a = {},
        i = ae(e);
    return N(i, function (i) {
      var l = e[i];
      "contextform" === l.type ? function (e, i) {
        var l = zn(Vn("ContextForm", ov, i));
        o[e] = l, l.launch.map(function (o) {
          r["form:" + e] = _objectSpread({}, i.launch, {
            type: "contextformtogglebutton" === o.type ? "togglebutton" : "button",
            onAction: function onAction() {
              t(l);
            }
          });
        }), "editor" === l.scope ? s.push(l) : n.push(l), a[e] = l;
      }(i, l) : "contexttoolbar" === l.type && function (e, t) {
        var o;
        (o = t, Vn("ContextToolbar", nv, o)).each(function (o) {
          "editor" === t.scope ? s.push(o) : n.push(o), a[e] = o;
        });
      }(i, l);
    }), {
      forms: o,
      inNodeScope: n,
      inEditorScope: s,
      lookupTable: a,
      formNavigators: r
    };
  },
      eM = Kr("forward-slide"),
      tM = Kr("backward-slide"),
      oM = Kr("change-slide-event"),
      nM = "tox-pop--resizing",
      sM = "tox-pop--transition",
      rM = function rM(e, t, o, n) {
    var s = n.backstage,
        r = s.shared,
        a = So().deviceType.isTouch,
        i = Hl(),
        l = Hl(),
        c = Hl(),
        d = Ga(function (e) {
      var t = fs([]);
      return xh.sketch({
        dom: {
          tag: "div",
          classes: ["tox-pop"]
        },
        fireDismissalEventInstead: {
          event: "doNotDismissYet"
        },
        onShow: function onShow(e) {
          t.set([]), xh.getContent(e).each(function (e) {
            At(e.element, "visibility");
          }), Ea(e.element, nM), At(e.element, "width");
        },
        inlineBehaviours: cl([Fp("context-toolbar-events", [Vr(js(), function (e, t) {
          "width" === t.event.raw.propertyName && (Ea(e.element, nM), At(e.element, "width"));
        }), Br(oM, function (e, t) {
          var o = e.element;
          At(o, "width");
          var n = Ut(o);
          xh.setContent(e, t.event.contents), Ta(o, nM);
          var s = Ut(o);
          kt(o, "width", n + "px"), xh.getContent(e).each(function (e) {
            t.event.focus.bind(function (e) {
              return bl(e), xl(o);
            }).orThunk(function () {
              return kp.focusIn(e), yl(it(o));
            });
          }), setTimeout(function () {
            kt(e.element, "width", s + "px");
          }, 0);
        }), Br(eM, function (e, o) {
          xh.getContent(e).each(function (o) {
            t.set(t.get().concat([{
              bar: o,
              focus: yl(it(e.element))
            }]));
          }), wr(e, oM, {
            contents: o.event.forwardContents,
            focus: B.none()
          });
        }), Br(tM, function (e, o) {
          ne(t.get()).each(function (o) {
            t.set(t.get().slice(0, t.get().length - 1)), wr(e, oM, {
              contents: $a(o.bar),
              focus: o.focus
            });
          });
        })]), kp.config({
          mode: "special",
          onEscape: function onEscape(o) {
            return ne(t.get()).fold(function () {
              return e.onEscape();
            }, function (e) {
              return xr(o, tM), B.some(!0);
            });
          }
        })]),
        lazySink: function lazySink() {
          return qo.value(e.sink);
        }
      });
    }({
      sink: o,
      onEscape: function onEscape() {
        return e.focus(), B.some(!0);
      }
    })),
        u = function u() {
      var t = c.get().getOr("node"),
          o = KB(t) ? 1 : 0;
      return $B(e, r, t, o);
    },
        m = function m() {
      return !(e.removed || a() && s.isContextMenuOpen());
    },
        g = function g() {
      if (m()) {
        var _t41 = u(),
            _o45 = xe(c.get(), "node") ? function (e, t) {
          return t.filter(ut).map(Uo).getOrThunk(function () {
            return GB(e);
          });
        }(e, i.get()) : GB(e);

        return _t41.height <= 0 || !jB(_o45, _t41);
      }

      return !0;
    },
        p = function p() {
      i.clear(), l.clear(), c.clear(), xh.hide(d);
    },
        h = function h() {
      if (xh.isOpen(d)) {
        var _e28 = d.element;
        At(_e28, "display"), g() ? kt(_e28, "display", "none") : (l.set(0), xh.reposition(d));
      }
    },
        f = function f(t) {
      return {
        dom: {
          tag: "div",
          classes: ["tox-pop__dialog"]
        },
        components: [t],
        behaviours: cl([kp.config({
          mode: "acyclic"
        }), Fp("pop-dialog-wrap-events", [zr(function (t) {
          e.shortcuts.add("ctrl+F9", "focus statusbar", function () {
            return kp.focusIn(t);
          });
        }), Hr(function (t) {
          e.shortcuts.remove("ctrl+F9");
        })])])
      };
    },
        v = Gt(function () {
      return QB(t, function (e) {
        var t = y([e]);
        wr(d, eM, {
          forwardContents: f(t)
        });
      });
    }),
        y = function y(t) {
      var _e$ui$registry$getAll = e.ui.registry.getAll(),
          o = _e$ui$registry$getAll.buttons,
          s = _objectSpread({}, o, {}, v().formNavigators),
          a = of(e) === Vh.scrolling ? Vh.scrolling : Vh["default"],
          i = q(P(t, function (t) {
        return "contexttoolbar" === t.type ? function (t, o) {
          return EB(e, {
            buttons: t,
            toolbar: o.items,
            allowToolbarGroups: !1
          }, n, B.some(["form:"]));
        }(s, t) : function (e, t) {
          return UB(e, t);
        }(t, r.providers);
      }));

      return yE({
        type: a,
        uid: Kr("context-toolbar"),
        initGroups: i,
        onEscape: B.none,
        cyclicKeying: !0,
        providers: r.providers
      });
    },
        x = function x(t, n) {
      if (w.cancel(), !m()) return;

      var s = y(t),
          p = t[0].position,
          h = function (t, n) {
        var s = "node" === t ? r.anchors.node(n) : r.anchors.cursor(),
            c = function (e, t, o, n) {
          return "line" === t ? {
            bubble: Zl(12, 0, qB),
            layouts: {
              onLtr: function onLtr() {
                return [Yi];
              },
              onRtl: function onRtl() {
                return [Ji];
              }
            },
            overrides: XB
          } : {
            bubble: Zl(0, 12, qB, 1 / 12),
            layouts: JB(e, o, n, t),
            overrides: XB
          };
        }(e, t, a(), {
          lastElement: i.get,
          isReposition: function isReposition() {
            return xe(l.get(), 0);
          },
          getMode: function getMode() {
            return id.getMode(o);
          }
        });

        return sn(s, c);
      }(p, n);

      c.set(p), l.set(1);
      var b = d.element;
      At(b, "display"), function (e) {
        return xe(Se(e, i.get(), Ge), !0);
      }(n) || (Ea(b, sM), id.reset(o, d)), xh.showWithinBounds(d, f(s), {
        anchor: h,
        transition: {
          classes: [sM],
          mode: "placement"
        }
      }, function () {
        return B.some(u());
      }), n.fold(i.clear, i.set), g() && kt(b, "display", "none");
    },
        w = bC(function () {
      e.hasFocus() && !e.removed && (Ba(d.element, sM) ? w.throttle() : function (e, t) {
        var o = Ie(t.getBody()),
            n = function n(e) {
          return Ge(e, o);
        },
            s = Ie(t.selection.getNode());

        return function (e) {
          return !n(e) && !$e(o, e);
        }(s) ? B.none() : function (e, t, o) {
          var n = ZB(e, t);
          if (n.contextForms.length > 0) return B.some({
            elem: e,
            toolbars: [n.contextForms[0]]
          });
          {
            var _t42 = ZB(e, o);

            if (_t42.contextForms.length > 0) return B.some({
              elem: e,
              toolbars: [_t42.contextForms[0]]
            });

            if (n.contextToolbars.length > 0 || _t42.contextToolbars.length > 0) {
              var _o46 = function (e) {
                if (e.length <= 1) return e;
                {
                  var _t43 = function _t43(t) {
                    return V(e, function (e) {
                      return e.position === t;
                    });
                  },
                      _o47 = function _o47(t) {
                    return W(e, function (e) {
                      return e.position === t;
                    });
                  },
                      _n41 = _t43("selection"),
                      _s33 = _t43("node");

                  if (_n41 || _s33) {
                    if (_s33 && _n41) {
                      var _e29 = _o47("node"),
                          _t44 = P(_o47("selection"), function (e) {
                        return _objectSpread({}, e, {
                          position: "node"
                        });
                      });

                      return _e29.concat(_t44);
                    }

                    return _o47(_n41 ? "selection" : "node");
                  }

                  return _o47("line");
                }
              }(n.contextToolbars.concat(_t42.contextToolbars));

              return B.some({
                elem: e,
                toolbars: _o46
              });
            }

            return B.none();
          }
        }(s, e.inNodeScope, e.inEditorScope).orThunk(function () {
          return function (e, t, o) {
            return e(t) ? B.none() : ws(t, function (e) {
              if (He(e)) {
                var _ZB = ZB(e, o.inNodeScope),
                    _t45 = _ZB.contextToolbars,
                    _n42 = _ZB.contextForms,
                    _s34 = _n42.length > 0 ? _n42 : function (e) {
                  if (e.length <= 1) return e;
                  {
                    var _t46 = function _t46(t) {
                      return G(e, function (e) {
                        return e.position === t;
                      });
                    };

                    return _t46("selection").orThunk(function () {
                      return _t46("node");
                    }).orThunk(function () {
                      return _t46("line");
                    }).map(function (e) {
                      return e.position;
                    }).fold(function () {
                      return [];
                    }, function (t) {
                      return W(e, function (e) {
                        return e.position === t;
                      });
                    });
                  }
                }(_t45);

                return _s34.length > 0 ? B.some({
                  elem: e,
                  toolbars: _s34
                }) : B.none();
              }

              return B.none();
            }, e);
          }(n, s, e);
        });
      }(v(), e).fold(p, function (e) {
        x(e.toolbars, B.some(e.elem));
      }));
    }, 17);

    e.on("init", function () {
      e.on("remove", p), e.on("ScrollContent ScrollWindow ObjectResized ResizeEditor longpress", h), e.on("click keyup focus SetContent", w.throttle), e.on(LB, p), e.on("contexttoolbar-show", function (t) {
        var o = v();
        be(o.lookupTable, t.toolbarKey).each(function (o) {
          x([o], ke(t.target !== e, t.target)), xh.getContent(d).each(kp.focusIn);
        });
      }), e.on("focusout", function (t) {
        wh.setEditorTimeout(e, function () {
          xl(o.element).isNone() && xl(d.element).isNone() && p();
        }, 0);
      }), e.on("SwitchMode", function () {
        e.mode.isReadOnly() && p();
      }), e.on("AfterProgressState", function (t) {
        t.state ? p() : e.hasFocus() && w.throttle();
      }), e.on("NodeChange", function (e) {
        xl(d.element).fold(w.throttle, b);
      });
    });
  },
      aM = {
    unsupportedLength: ["em", "ex", "cap", "ch", "ic", "rem", "lh", "rlh", "vw", "vh", "vi", "vb", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px"],
    fixed: ["px", "pt"],
    relative: ["%"],
    empty: [""]
  },
      iM = function () {
    var e = "[0-9]+",
        t = "[eE][+-]?[0-9]+",
        o = function o(e) {
      return "(?:".concat(e, ")?");
    },
        n = ["Infinity", "[0-9]+\\." + o(e) + o(t), "\\.[0-9]+" + o(t), e + o(t)].join("|");

    return new RegExp("^([+-]?(?:".concat(n, "))(.*)$"));
  }(),
      lM = function lM(e, t) {
    var o = function o() {
      var o = t.getOptions(e),
          n = t.getCurrent(e).map(t.hash),
          s = Hl();
      return P(o, function (o) {
        return {
          type: "togglemenuitem",
          text: t.display(o),
          onSetup: function onSetup(r) {
            var a = function a(e) {
              e && (s.on(function (e) {
                return e.setActive(!1);
              }), s.set(r)), r.setActive(e);
            };

            a(xe(n, t.hash(o)));
            var i = t.watcher(e, o, a);
            return function () {
              s.clear(), i();
            };
          },
          onAction: function onAction() {
            return t.setCurrent(e, o);
          }
        };
      });
    };

    e.ui.registry.addMenuButton(t.name, {
      tooltip: t.text,
      icon: t.icon,
      fetch: function fetch(e) {
        return e(o());
      },
      onSetup: t.onToolbarSetup
    }), e.ui.registry.addNestedMenuItem(t.name, {
      type: "nestedmenuitem",
      text: t.text,
      getSubmenuItems: o,
      onSetup: t.onMenuSetup
    });
  },
      cM = {
    name: "lineheight",
    text: "Line height",
    icon: "line-height",
    getOptions: Ef,
    hash: function hash(e) {
      return function (e, t) {
        return function (e, t) {
          return B.from(iM.exec(e)).bind(function (e) {
            var o = Number(e[1]),
                n = e[2];
            return function (e, t) {
              return V(t, function (t) {
                return V(aM[t], function (t) {
                  return e === t;
                });
              });
            }(n, t) ? B.some({
              value: o,
              unit: n
            }) : B.none();
          });
        }(e, ["fixed", "relative", "empty"]).map(function (_ref16) {
          var e = _ref16.value,
              t = _ref16.unit;
          return e + t;
        });
      }(e).getOr(e);
    },
    display: x,
    watcher: function watcher(e, t, o) {
      return e.formatter.formatChanged("lineheight", o, !1, {
        value: t
      }).unbind;
    },
    getCurrent: function getCurrent(e) {
      return B.from(e.queryCommandValue("LineHeight"));
    },
    setCurrent: function setCurrent(e, t) {
      return e.execCommand("LineHeight", !1, t);
    }
  },
      dM = function dM(e) {
    return PE(e, "NodeChange", function (t) {
      t.setEnabled(e.queryCommandState("outdent"));
    });
  },
      uM = function uM(e, t) {
    return function (o) {
      o.setActive(t.get());

      var n = function n(e) {
        t.set(e.state), o.setActive(e.state);
      };

      return e.on("PastePlainTextToggle", n), function () {
        return e.off("PastePlainTextToggle", n);
      };
    };
  },
      mM = function mM(e, t) {
    return function () {
      e.execCommand("mceToggleFormat", !1, t);
    };
  },
      gM = function gM(e) {
    (function (e) {
      (function (e) {
        Vk.each([{
          name: "bold",
          text: "Bold",
          icon: "bold"
        }, {
          name: "italic",
          text: "Italic",
          icon: "italic"
        }, {
          name: "underline",
          text: "Underline",
          icon: "underline"
        }, {
          name: "strikethrough",
          text: "Strikethrough",
          icon: "strike-through"
        }, {
          name: "subscript",
          text: "Subscript",
          icon: "subscript"
        }, {
          name: "superscript",
          text: "Superscript",
          icon: "superscript"
        }], function (t, o) {
          e.ui.registry.addToggleButton(t.name, {
            tooltip: t.text,
            icon: t.icon,
            onSetup: HE(e, t.name),
            onAction: mM(e, t.name)
          });
        });

        for (var _t47 = 1; _t47 <= 6; _t47++) {
          var _o48 = "h" + _t47;

          e.ui.registry.addToggleButton(_o48, {
            text: _o48.toUpperCase(),
            tooltip: "Heading " + _t47,
            onSetup: HE(e, _o48),
            onAction: mM(e, _o48)
          });
        }
      })(e), function (e) {
        Vk.each([{
          name: "cut",
          text: "Cut",
          action: "Cut",
          icon: "cut"
        }, {
          name: "copy",
          text: "Copy",
          action: "Copy",
          icon: "copy"
        }, {
          name: "paste",
          text: "Paste",
          action: "Paste",
          icon: "paste"
        }, {
          name: "help",
          text: "Help",
          action: "mceHelp",
          icon: "help"
        }, {
          name: "selectall",
          text: "Select all",
          action: "SelectAll",
          icon: "select-all"
        }, {
          name: "newdocument",
          text: "New document",
          action: "mceNewDocument",
          icon: "new-document"
        }, {
          name: "removeformat",
          text: "Clear formatting",
          action: "RemoveFormat",
          icon: "remove-formatting"
        }, {
          name: "remove",
          text: "Remove",
          action: "Delete",
          icon: "remove"
        }, {
          name: "print",
          text: "Print",
          action: "mcePrint",
          icon: "print"
        }, {
          name: "hr",
          text: "Horizontal line",
          action: "InsertHorizontalRule",
          icon: "horizontal-rule"
        }], function (t) {
          e.ui.registry.addButton(t.name, {
            tooltip: t.text,
            icon: t.icon,
            onAction: LE(e, t.action)
          });
        });
      }(e), function (e) {
        Vk.each([{
          name: "blockquote",
          text: "Blockquote",
          action: "mceBlockQuote",
          icon: "quote"
        }], function (t) {
          e.ui.registry.addToggleButton(t.name, {
            tooltip: t.text,
            icon: t.icon,
            onAction: LE(e, t.action),
            onSetup: HE(e, t.name)
          });
        });
      }(e);
    })(e), function (e) {
      Vk.each([{
        name: "bold",
        text: "Bold",
        action: "Bold",
        icon: "bold",
        shortcut: "Meta+B"
      }, {
        name: "italic",
        text: "Italic",
        action: "Italic",
        icon: "italic",
        shortcut: "Meta+I"
      }, {
        name: "underline",
        text: "Underline",
        action: "Underline",
        icon: "underline",
        shortcut: "Meta+U"
      }, {
        name: "strikethrough",
        text: "Strikethrough",
        action: "Strikethrough",
        icon: "strike-through"
      }, {
        name: "subscript",
        text: "Subscript",
        action: "Subscript",
        icon: "subscript"
      }, {
        name: "superscript",
        text: "Superscript",
        action: "Superscript",
        icon: "superscript"
      }, {
        name: "removeformat",
        text: "Clear formatting",
        action: "RemoveFormat",
        icon: "remove-formatting"
      }, {
        name: "newdocument",
        text: "New document",
        action: "mceNewDocument",
        icon: "new-document"
      }, {
        name: "cut",
        text: "Cut",
        action: "Cut",
        icon: "cut",
        shortcut: "Meta+X"
      }, {
        name: "copy",
        text: "Copy",
        action: "Copy",
        icon: "copy",
        shortcut: "Meta+C"
      }, {
        name: "paste",
        text: "Paste",
        action: "Paste",
        icon: "paste",
        shortcut: "Meta+V"
      }, {
        name: "selectall",
        text: "Select all",
        action: "SelectAll",
        icon: "select-all",
        shortcut: "Meta+A"
      }, {
        name: "print",
        text: "Print...",
        action: "mcePrint",
        icon: "print",
        shortcut: "Meta+P"
      }, {
        name: "hr",
        text: "Horizontal line",
        action: "InsertHorizontalRule",
        icon: "horizontal-rule"
      }], function (t) {
        e.ui.registry.addMenuItem(t.name, {
          text: t.text,
          icon: t.icon,
          shortcut: t.shortcut,
          onAction: LE(e, t.action)
        });
      }), e.ui.registry.addMenuItem("codeformat", {
        text: "Code",
        icon: "sourcecode",
        onAction: mM(e, "code")
      });
    }(e);
  },
      pM = function pM(e, t) {
    return PE(e, "Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", function (o) {
      o.setEnabled(!e.mode.isReadOnly() && e.undoManager[t]());
    });
  },
      hM = function hM(e) {
    return PE(e, "VisualAid", function (t) {
      t.setActive(e.hasVisual);
    });
  },
      fM = function fM(e, t) {
    (function (e) {
      N([{
        name: "alignleft",
        text: "Align left",
        cmd: "JustifyLeft",
        icon: "align-left"
      }, {
        name: "aligncenter",
        text: "Align center",
        cmd: "JustifyCenter",
        icon: "align-center"
      }, {
        name: "alignright",
        text: "Align right",
        cmd: "JustifyRight",
        icon: "align-right"
      }, {
        name: "alignjustify",
        text: "Justify",
        cmd: "JustifyFull",
        icon: "align-justify"
      }], function (t) {
        e.ui.registry.addToggleButton(t.name, {
          tooltip: t.text,
          icon: t.icon,
          onAction: LE(e, t.cmd),
          onSetup: HE(e, t.name)
        });
      }), e.ui.registry.addButton("alignnone", {
        tooltip: "No alignment",
        icon: "align-none",
        onAction: LE(e, "JustifyNone")
      });
    })(e), gM(e), function (e, t) {
      (function (e, t) {
        var o = UE(0, t, XE(e));
        e.ui.registry.addNestedMenuItem("align", {
          text: t.shared.providers.translate("Align"),
          getSubmenuItems: function getSubmenuItems() {
            return o.items.validateItems(o.getStyleItems());
          }
        });
      })(e, t), function (e, t) {
        var o = UE(0, t, QE(e));
        e.ui.registry.addNestedMenuItem("fontfamily", {
          text: t.shared.providers.translate("Fonts"),
          getSubmenuItems: function getSubmenuItems() {
            return o.items.validateItems(o.getStyleItems());
          }
        });
      }(e, t), function (e, t) {
        var o = _objectSpread({
          type: "advanced"
        }, t.styles),
            n = UE(0, t, rB(e, o));

        e.ui.registry.addNestedMenuItem("styles", {
          text: "Formats",
          getSubmenuItems: function getSubmenuItems() {
            return n.items.validateItems(n.getStyleItems());
          }
        });
      }(e, t), function (e, t) {
        var o = UE(0, t, YE(e));
        e.ui.registry.addNestedMenuItem("blocks", {
          text: "Blocks",
          getSubmenuItems: function getSubmenuItems() {
            return o.items.validateItems(o.getStyleItems());
          }
        });
      }(e, t), function (e, t) {
        var o = UE(0, t, sB(e));
        e.ui.registry.addNestedMenuItem("fontsize", {
          text: "Font sizes",
          getSubmenuItems: function getSubmenuItems() {
            return o.items.validateItems(o.getStyleItems());
          }
        });
      }(e, t);
    }(e, t), function (e) {
      (function (e) {
        e.ui.registry.addMenuItem("undo", {
          text: "Undo",
          icon: "undo",
          shortcut: "Meta+Z",
          onSetup: pM(e, "hasUndo"),
          onAction: LE(e, "undo")
        }), e.ui.registry.addMenuItem("redo", {
          text: "Redo",
          icon: "redo",
          shortcut: "Meta+Y",
          onSetup: pM(e, "hasRedo"),
          onAction: LE(e, "redo")
        });
      })(e), function (e) {
        e.ui.registry.addButton("undo", {
          tooltip: "Undo",
          icon: "undo",
          enabled: !1,
          onSetup: pM(e, "hasUndo"),
          onAction: LE(e, "undo")
        }), e.ui.registry.addButton("redo", {
          tooltip: "Redo",
          icon: "redo",
          enabled: !1,
          onSetup: pM(e, "hasRedo"),
          onAction: LE(e, "redo")
        });
      }(e);
    }(e), function (e) {
      (function (e) {
        e.addCommand("mceApplyTextcolor", function (t, o) {
          (function (e, t, o) {
            e.undoManager.transact(function () {
              e.focus(), e.formatter.apply(t, {
                value: o
              }), e.nodeChanged();
            });
          })(e, t, o);
        }), e.addCommand("mceRemoveTextcolor", function (t) {
          (function (e, t) {
            e.undoManager.transact(function () {
              e.focus(), e.formatter.remove(t, {
                value: null
              }, null, !0), e.nodeChanged();
            });
          })(e, t);
        });
      })(e);

      var t = fs(Py),
          o = fs(Py);
      Gy(e, "forecolor", "forecolor", "Text color", t), Gy(e, "backcolor", "hilitecolor", "Background color", o), $y(e, "forecolor", "forecolor", "Text color"), $y(e, "backcolor", "hilitecolor", "Background color");
    }(e), function (e) {
      (function (e) {
        e.ui.registry.addButton("visualaid", {
          tooltip: "Visual aids",
          text: "Visual aids",
          onAction: LE(e, "mceToggleVisualAid")
        });
      })(e), function (e) {
        e.ui.registry.addToggleMenuItem("visualaid", {
          text: "Visual aids",
          onSetup: hM(e),
          onAction: LE(e, "mceToggleVisualAid")
        });
      }(e);
    }(e), function (e) {
      (function (e) {
        e.ui.registry.addButton("outdent", {
          tooltip: "Decrease indent",
          icon: "outdent",
          onSetup: dM(e),
          onAction: LE(e, "outdent")
        }), e.ui.registry.addButton("indent", {
          tooltip: "Increase indent",
          icon: "indent",
          onAction: LE(e, "indent")
        });
      })(e);
    }(e), function (e) {
      lM(e, cM), function (e) {
        return B.from(ef(e)).map(function (t) {
          return {
            name: "language",
            text: "Language",
            icon: "language",
            getOptions: y(t),
            hash: function hash(e) {
              return u(e.customCode) ? e.code : "".concat(e.code, "/").concat(e.customCode);
            },
            display: function display(e) {
              return e.title;
            },
            watcher: function watcher(e, t, o) {
              return e.formatter.formatChanged("lang", o, !1, {
                value: t.code,
                customValue: t.customCode
              }).unbind;
            },
            getCurrent: function getCurrent(e) {
              var t = Ie(e.selection.getNode());
              return Ss(t, function (e) {
                return B.some(e).filter(He).bind(function (e) {
                  return vt(e, "lang").map(function (t) {
                    return {
                      code: t,
                      customCode: vt(e, "data-mce-lang").getOrUndefined(),
                      title: ""
                    };
                  });
                });
              });
            },
            setCurrent: function setCurrent(e, t) {
              return e.execCommand("Lang", !1, t);
            },
            onToolbarSetup: function onToolbarSetup(t) {
              var o = zl();
              return t.setActive(e.formatter.match("lang", {}, void 0, !0)), o.set(e.formatter.formatChanged("lang", t.setActive, !0)), o.clear;
            }
          };
        });
      }(e).each(function (t) {
        return lM(e, t);
      });
    }(e), function (e) {
      var t = fs(kf(e)),
          o = function o() {
        return e.execCommand("mceTogglePlainTextPaste");
      };

      e.ui.registry.addToggleButton("pastetext", {
        active: !1,
        icon: "paste-text",
        tooltip: "Paste as text",
        onAction: o,
        onSetup: uM(e, t)
      }), e.ui.registry.addToggleMenuItem("pastetext", {
        text: "Paste as text",
        icon: "paste-text",
        onAction: o,
        onSetup: uM(e, t)
      });
    }(e);
  },
      bM = function bM(e) {
    return r(e) ? e.split(/[ ,]/) : e;
  },
      vM = function vM(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      yM = vM("contextmenu_never_use_native"),
      xM = vM("contextmenu_avoid_overlap"),
      wM = function wM(e) {
    var t = e.ui.registry.getAll().contextMenus,
        o = e.options.get("contextmenu");
    return e.options.isSet("contextmenu") ? o : W(o, function (e) {
      return ve(t, e);
    });
  },
      SM = function SM(e, t) {
    return {
      type: "makeshift",
      x: e,
      y: t
    };
  },
      kM = function kM(e) {
    return "longpress" === e.type || 0 === e.type.indexOf("touch");
  },
      CM = function CM(e, t) {
    return "contextmenu" === t.type || "longpress" === t.type ? e.inline ? function (e) {
      if (kM(e)) {
        var _t48 = e.touches[0];
        return SM(_t48.pageX, _t48.pageY);
      }

      return SM(e.pageX, e.pageY);
    }(t) : function (e, t) {
      var o = Hh.DOM.getPos(e);
      return function (e, t, o) {
        return SM(e.x + t, e.y + o);
      }(t, o.x, o.y);
    }(e.getContentAreaContainer(), function (e) {
      if (kM(e)) {
        var _t49 = e.touches[0];
        return SM(_t49.clientX, _t49.clientY);
      }

      return SM(e.clientX, e.clientY);
    }(t)) : OM(e);
  },
      OM = function OM(e) {
    return {
      type: "selection",
      root: Ie(e.selection.getNode())
    };
  },
      _M = function _M(e, t, o) {
    switch (o) {
      case "node":
        return function (e) {
          return {
            type: "node",
            node: B.some(Ie(e.selection.getNode())),
            root: Ie(e.getBody())
          };
        }(e);

      case "point":
        return CM(e, t);

      case "selection":
        return OM(e);
    }
  },
      TM = function TM(e, t, o, n, s, r) {
    var a = o(),
        i = _M(e, t, r);

    oC(a, Uf.CLOSE_ON_EXECUTE, n, !1).map(function (e) {
      t.preventDefault(), xh.showMenuAt(s, {
        anchor: i
      }, {
        menu: {
          markers: nb("normal")
        },
        data: e
      });
    });
  },
      EM = {
    onLtr: function onLtr() {
      return [Ki, ji, Gi, $i, qi, Xi, pO, hO, gO, uO, mO, dO];
    },
    onRtl: function onRtl() {
      return [Ki, Gi, ji, qi, $i, Xi, pO, hO, mO, dO, gO, uO];
    }
  },
      BM = {
    valignCentre: [],
    alignCentre: [],
    alignLeft: ["tox-pop--align-left"],
    alignRight: ["tox-pop--align-right"],
    right: ["tox-pop--right"],
    left: ["tox-pop--left"],
    bottom: ["tox-pop--bottom"],
    top: ["tox-pop--top"]
  },
      MM = function MM(e, t, o, n, s, r) {
    var a = So(),
        i = a.os.isiOS(),
        l = a.os.isMacOS(),
        c = a.os.isAndroid(),
        d = a.deviceType.isTouch(),
        u = function u() {
      var a = o();

      (function (e, t, o, n, s, r, a) {
        var i = function (e, t, o) {
          var n = _M(e, t, o);

          return _objectSpread({
            bubble: Zl(0, "point" === o ? 12 : 0, BM),
            layouts: EM,
            overrides: {
              maxWidthFunction: KT(),
              maxHeightFunction: Xl()
            }
          }, n);
        }(e, t, r);

        oC(o, Uf.CLOSE_ON_EXECUTE, n, !0).map(function (o) {
          t.preventDefault(), xh.showMenuWithinBounds(s, {
            anchor: i
          }, {
            menu: {
              markers: nb("normal"),
              highlightImmediately: a
            },
            data: o,
            type: "horizontal"
          }, function () {
            return B.some($B(e, n.shared, "node" === r ? "node" : "selection"));
          }), e.dispatch(LB);
        });
      })(e, t, a, n, s, r, !(c || i || l && d));
    };

    if ((l || i) && "node" !== r) {
      var _o49 = function _o49() {
        (function (e) {
          var t = e.selection.getRng(),
              o = function o() {
            wh.setEditorTimeout(e, function () {
              e.selection.setRng(t);
            }, 10), r();
          };

          e.once("touchend", o);

          var n = function n(e) {
            e.preventDefault(), e.stopImmediatePropagation();
          };

          e.on("mousedown", n, !0);

          var s = function s() {
            return r();
          };

          e.once("longpresscancel", s);

          var r = function r() {
            e.off("touchend", o), e.off("longpresscancel", s), e.off("mousedown", n);
          };
        })(e), u();
      };

      (function (e, t) {
        var o = e.selection;
        if (o.isCollapsed() || t.touches.length < 1) return !1;
        {
          var _n43 = t.touches[0],
              _s35 = o.getRng();

          return Rc(e.getWin(), Oc.domRange(_s35)).exists(function (e) {
            return e.left <= _n43.clientX && e.right >= _n43.clientX && e.top <= _n43.clientY && e.bottom >= _n43.clientY;
          });
        }
      })(e, t) ? _o49() : (e.once("selectionchange", _o49), e.once("touchend", function () {
        return e.off("selectionchange", _o49);
      }));
    } else u();
  },
      AM = function AM(e) {
    return r(e) ? "|" === e : "separator" === e.type;
  },
      DM = {
    type: "separator"
  },
      FM = function FM(e) {
    var t = function t(e) {
      return {
        text: e.text,
        icon: e.icon,
        enabled: e.enabled,
        shortcut: e.shortcut
      };
    };

    if (r(e)) return e;

    switch (e.type) {
      case "separator":
        return DM;

      case "submenu":
        return _objectSpread({
          type: "nestedmenuitem"
        }, t(e), {
          getSubmenuItems: function getSubmenuItems() {
            var t = e.getSubmenuItems();
            return r(t) ? t : P(t, FM);
          }
        });

      default:
        return _objectSpread({
          type: "menuitem"
        }, t(e), {
          onAction: (o = e.onAction, function () {
            return o();
          })
        });
    }

    var o;
  },
      IM = function IM(e, t) {
    if (0 === t.length) return e;
    var o = ne(e).filter(function (e) {
      return !AM(e);
    }).fold(function () {
      return [];
    }, function (e) {
      return [DM];
    });
    return e.concat(o).concat(t).concat([DM]);
  },
      RM = function RM(e, t) {
    return "longpress" !== t.type && (2 !== t.button || t.target === e.getBody() && "" === t.pointerType);
  },
      VM = function VM(e, t) {
    return RM(e, t) ? e.selection.getStart(!0) : t.target;
  },
      zM = function zM(e, t, o) {
    var n = So().deviceType.isTouch,
        s = Ga(xh.sketch({
      dom: {
        tag: "div"
      },
      lazySink: t,
      onEscape: function onEscape() {
        return e.focus();
      },
      onShow: function onShow() {
        return o.setContextMenuState(!0);
      },
      onHide: function onHide() {
        return o.setContextMenuState(!1);
      },
      fireDismissalEventInstead: {},
      inlineBehaviours: cl([Fp("dismissContextMenu", [Br(mr(), function (t, o) {
        Dd.close(t), e.focus();
      })])])
    })),
        a = function a(e) {
      return xh.hide(s);
    },
        i = function i(t) {
      if (yM(e) && t.preventDefault(), function (e, t) {
        return t.ctrlKey && !yM(e);
      }(e, t) || function (e) {
        return 0 === wM(e).length;
      }(e)) return;

      var a = function (e, t) {
        var o = xM(e),
            n = RM(e, t) ? "selection" : "point";

        if (Ee(o)) {
          var _s36 = VM(e, t);

          return dx(Ie(_s36), o) ? "node" : n;
        }

        return n;
      }(e, t);

      (n() ? MM : TM)(e, t, function () {
        var o = VM(e, t),
            n = e.ui.registry.getAll(),
            s = wM(e);
        return function (e, t, o) {
          var n = j(t, function (t, n) {
            return be(e, n.toLowerCase()).map(function (e) {
              var n = e.update(o);
              if (r(n)) return IM(t, n.split(" "));

              if (n.length > 0) {
                var _e30 = P(n, FM);

                return IM(t, _e30);
              }

              return t;
            }).getOrThunk(function () {
              return t.concat([n]);
            });
          }, []);
          return n.length > 0 && AM(n[n.length - 1]) && n.pop(), n;
        }(n.contextMenus, s, o);
      }, o, s, a);
    };

    e.on("init", function () {
      var t = "ResizeEditor ScrollContent ScrollWindow longpresscancel" + (n() ? "" : " ResizeWindow");
      e.on(t, a), e.on("longpress contextmenu", i);
    });
  },
      HM = bs([{
    offset: ["x", "y"]
  }, {
    absolute: ["x", "y"]
  }, {
    fixed: ["x", "y"]
  }]),
      PM = function PM(e) {
    return function (t) {
      return t.translate(-e.left, -e.top);
    };
  },
      NM = function NM(e) {
    return function (t) {
      return t.translate(e.left, e.top);
    };
  },
      LM = function LM(e) {
    return function (t, o) {
      return j(e, function (e, t) {
        return t(e);
      }, Ht(t, o));
    };
  },
      WM = function WM(e, t, o) {
    return e.fold(LM([NM(o), PM(t)]), LM([PM(t)]), LM([]));
  },
      UM = function UM(e, t, o) {
    return e.fold(LM([NM(o)]), LM([]), LM([NM(t)]));
  },
      jM = function jM(e, t, o) {
    return e.fold(LM([]), LM([PM(o)]), LM([NM(t), PM(o)]));
  },
      GM = function GM(e, t, o) {
    var n = e.fold(function (e, t) {
      return {
        position: B.some("absolute"),
        left: B.some(e + "px"),
        top: B.some(t + "px")
      };
    }, function (e, t) {
      return {
        position: B.some("absolute"),
        left: B.some(e - o.left + "px"),
        top: B.some(t - o.top + "px")
      };
    }, function (e, t) {
      return {
        position: B.some("fixed"),
        left: B.some(e + "px"),
        top: B.some(t + "px")
      };
    });
    return _objectSpread({
      right: B.none(),
      bottom: B.none()
    }, n);
  },
      $M = function $M(e, t, o, n) {
    var s = function s(e, _s37) {
      return function (r, a) {
        var i = e(t, o, n);
        return _s37(r.getOr(i.left), a.getOr(i.top));
      };
    };

    return e.fold(s(jM, qM), s(UM, XM), s(WM, KM));
  },
      qM = HM.offset,
      XM = HM.absolute,
      KM = HM.fixed,
      YM = function YM(e, t) {
    var o = bt(e, t);
    return u(o) ? NaN : parseInt(o, 10);
  },
      JM = function JM(e, t, o, n, s, r) {
    var a = function (e, t, o, n) {
      return function (e, t) {
        var o = e.element,
            n = YM(o, t.leftAttr),
            s = YM(o, t.topAttr);
        return isNaN(n) || isNaN(s) ? B.none() : B.some(Ht(n, s));
      }(e, t).fold(function () {
        return o;
      }, function (e) {
        return KM(e.left + n.left, e.top + n.top);
      });
    }(e, t, o, n),
        i = t.mustSnap ? QM(e, t, a, s, r) : eA(e, t, a, s, r),
        l = WM(a, s, r);

    return function (e, t, o) {
      var n = e.element;
      ht(n, t.leftAttr, o.left + "px"), ht(n, t.topAttr, o.top + "px");
    }(e, t, l), i.fold(function () {
      return {
        coord: KM(l.left, l.top),
        extra: B.none()
      };
    }, function (e) {
      return {
        coord: e.output,
        extra: e.extra
      };
    });
  },
      ZM = function ZM(e, t, o, n) {
    return re(e, function (e) {
      var s = e.sensor,
          r = function (e, t, o, n, s, r) {
        var a = UM(e, s, r),
            i = UM(t, s, r);
        return Math.abs(a.left - i.left) <= o && Math.abs(a.top - i.top) <= n;
      }(t, s, e.range.left, e.range.top, o, n);

      return r ? B.some({
        output: $M(e.output, t, o, n),
        extra: e.extra
      }) : B.none();
    });
  },
      QM = function QM(e, t, o, n, s) {
    var r = t.getSnapPoints(e);
    return ZM(r, o, n, s).orThunk(function () {
      var e = j(r, function (e, t) {
        var r = t.sensor,
            a = function (e, t, o, n, s, r) {
          var a = UM(e, s, r),
              i = UM(t, s, r),
              l = Math.abs(a.left - i.left),
              c = Math.abs(a.top - i.top);
          return Ht(l, c);
        }(o, r, t.range.left, t.range.top, n, s);

        return e.deltas.fold(function () {
          return {
            deltas: B.some(a),
            snap: B.some(t)
          };
        }, function (o) {
          return (a.left + a.top) / 2 <= (o.left + o.top) / 2 ? {
            deltas: B.some(a),
            snap: B.some(t)
          } : e;
        });
      }, {
        deltas: B.none(),
        snap: B.none()
      });
      return e.snap.map(function (e) {
        return {
          output: $M(e.output, o, n, s),
          extra: e.extra
        };
      });
    });
  },
      eA = function eA(e, t, o, n, s) {
    var r = t.getSnapPoints(e);
    return ZM(r, o, n, s);
  };

  var tA = Object.freeze({
    __proto__: null,
    snapTo: function snapTo(e, t, o, n) {
      var s = t.getTarget(e.element);

      if (t.repositionTarget) {
        var _t50 = qe(e.element),
            _o50 = Fo(_t50),
            _r14 = T_(s),
            _a7 = function (e, t, o) {
          return {
            coord: $M(e.output, e.output, t, o),
            extra: e.extra
          };
        }(n, _o50, _r14),
            _i3 = GM(_a7.coord, 0, _r14);

        Ot(s, _i3);
      }
    }
  });

  var oA = "data-initial-z-index",
      nA = function nA(e, t) {
    e.getSystem().addToGui(t), function (e) {
      Je(e.element).filter(He).each(function (t) {
        Et(t, "z-index").each(function (e) {
          ht(t, oA, e);
        }), kt(t, "z-index", _t(e.element, "z-index"));
      });
    }(t);
  },
      sA = function sA(e) {
    (function (e) {
      Je(e.element).filter(He).each(function (e) {
        vt(e, oA).fold(function () {
          return At(e, "z-index");
        }, function (t) {
          return kt(e, "z-index", t);
        }), xt(e, oA);
      });
    })(e), e.getSystem().removeFromGui(e);
  },
      rA = function rA(e, t, o) {
    return e.getSystem().build(xx.sketch({
      dom: {
        styles: {
          left: "0px",
          top: "0px",
          width: "100%",
          height: "100%",
          position: "fixed",
          "z-index": "1000000000000000"
        },
        classes: [t]
      },
      events: o
    }));
  };

  var aA = as("snaps", [jn("getSnapPoints"), bi("onSensor"), jn("leftAttr"), jn("topAttr"), is("lazyViewport", jo), is("mustSnap", !1)]);

  var iA = [is("useFixed", _), jn("blockerClass"), is("getTarget", x), is("onDrag", b), is("repositionTarget", !0), is("onDrop", b), gs("getBounds", jo), aA],
      lA = function lA(e, t) {
    return {
      bounds: e.getBounds(),
      height: Vt(t.element),
      width: jt(t.element)
    };
  },
      cA = function cA(e, t, o, n, s) {
    var r = o.update(n, s),
        a = o.getStartData().getOrThunk(function () {
      return lA(t, e);
    });
    r.each(function (o) {
      (function (e, t, o, n) {
        var s = t.getTarget(e.element);

        if (t.repositionTarget) {
          var _r15 = qe(e.element),
              _a8 = Fo(_r15),
              _i4 = T_(s),
              _l5 = function (e) {
            return (t = Et(e, "left"), o = Et(e, "top"), n = Et(e, "position"), s = function s(e, t, o) {
              return ("fixed" === o ? KM : qM)(parseInt(e, 10), parseInt(t, 10));
            }, t.isSome() && o.isSome() && n.isSome() ? B.some(s(t.getOrDie(), o.getOrDie(), n.getOrDie())) : B.none()).getOrThunk(function () {
              var t = Nt(e);
              return XM(t.left, t.top);
            });
            var t, o, n, s;
          }(s),
              _c6 = function (e, t, o, n, s, r, a) {
            return function (e, t, o, n, s) {
              var r = s.bounds,
                  a = UM(t, o, n),
                  i = Ri(a.left, r.x, r.x + r.width - s.width),
                  l = Ri(a.top, r.y, r.y + r.height - s.height),
                  c = XM(i, l);
              return t.fold(function () {
                var e = jM(c, o, n);
                return qM(e.left, e.top);
              }, y(c), function () {
                var e = WM(c, o, n);
                return KM(e.left, e.top);
              });
            }(0, t.fold(function () {
              var e = (t = o, a = r.left, i = r.top, t.fold(function (e, t) {
                return qM(e + a, t + i);
              }, function (e, t) {
                return XM(e + a, t + i);
              }, function (e, t) {
                return KM(e + a, t + i);
              }));
              var t, a, i;
              var l = WM(e, n, s);
              return KM(l.left, l.top);
            }, function (t) {
              var a = JM(e, t, o, r, n, s);
              return a.extra.each(function (o) {
                t.onSensor(e, o);
              }), a.coord;
            }), n, s, a);
          }(e, t.snaps, _l5, _a8, _i4, n, o),
              _d3 = GM(_c6, 0, _i4);

          Ot(s, _d3);
        }

        t.onDrag(e, s, n);
      })(e, t, a, o);
    });
  },
      dA = function dA(e, t, o, n) {
    t.each(sA), o.snaps.each(function (t) {
      (function (e, t) {
        (function (e, t) {
          var o = e.element;
          xt(o, t.leftAttr), xt(o, t.topAttr);
        })(e, t);
      })(e, t);
    });
    var s = o.getTarget(e.element);
    n.reset(), o.onDrop(e, s);
  },
      uA = function uA(e) {
    return function (t, o) {
      var n = function n(e) {
        o.setStartData(lA(t, e));
      };

      return _r([Br(lr(), function (e) {
        o.getStartData().each(function () {
          return n(e);
        });
      })].concat(_toConsumableArray(e(t, o, n))));
    };
  };

  var mA = Object.freeze({
    __proto__: null,
    getData: function getData(e) {
      return B.from(Ht(e.x, e.y));
    },
    getDelta: function getDelta(e, t) {
      return Ht(t.left - e.left, t.top - e.top);
    }
  });

  var gA = function gA(e, t, o) {
    return [Br(As(), function (n, s) {
      if (0 !== s.event.raw.button) return;
      s.stop();

      var r = function r() {
        return dA(n, B.some(l), e, t);
      },
          a = ux(r, 200),
          i = {
        drop: r,
        delayDrop: a.schedule,
        forceDrop: r,
        move: function move(o) {
          a.cancel(), cA(n, e, t, mA, o);
        }
      },
          l = rA(n, e.blockerClass, function (e) {
        return _r([Br(As(), e.forceDrop), Br(Is(), e.drop), Br(Ds(), function (t, o) {
          e.move(o.event);
        }), Br(Fs(), e.delayDrop)]);
      }(i));

      o(n), nA(n, l);
    })];
  },
      pA = [].concat(iA, [wi("dragger", {
    handlers: uA(gA)
  })]);

  var hA = Object.freeze({
    __proto__: null,
    getData: function getData(e) {
      var t = e.raw.touches;
      return 1 === t.length ? function (e) {
        var t = e[0];
        return B.some(Ht(t.clientX, t.clientY));
      }(t) : B.none();
    },
    getDelta: function getDelta(e, t) {
      return Ht(t.left - e.left, t.top - e.top);
    }
  });

  var fA = function fA(e, t, o) {
    var n = Hl(),
        s = function s(o) {
      dA(o, n.get(), e, t), n.clear();
    };

    return [Br(Ts(), function (r, a) {
      a.stop();

      var i = function i() {
        return s(r);
      },
          l = {
        drop: i,
        delayDrop: b,
        forceDrop: i,
        move: function move(o) {
          cA(r, e, t, hA, o);
        }
      },
          c = rA(r, e.blockerClass, function (e) {
        return _r([Br(Ts(), e.forceDrop), Br(Bs(), e.drop), Br(Ms(), e.drop), Br(Es(), function (t, o) {
          e.move(o.event);
        })]);
      }(l));

      n.set(c), o(r), nA(r, c);
    }), Br(Es(), function (o, n) {
      n.stop(), cA(o, e, t, hA, n.event);
    }), Br(Bs(), function (e, t) {
      t.stop(), s(e);
    }), Br(Ms(), s)];
  },
      bA = pA,
      vA = [].concat(iA, [wi("dragger", {
    handlers: uA(fA)
  })]),
      yA = [].concat(iA, [wi("dragger", {
    handlers: uA(function (e, t, o) {
      return [].concat(_toConsumableArray(gA(e, t, o)), _toConsumableArray(fA(e, t, o)));
    })
  })]);

  var xA = Object.freeze({
    __proto__: null,
    mouse: bA,
    touch: vA,
    mouseOrTouch: yA
  }),
      wA = Object.freeze({
    __proto__: null,
    init: function init() {
      var e = B.none(),
          t = B.none();
      var o = y({});
      return ga({
        readState: o,
        reset: function reset() {
          e = B.none(), t = B.none();
        },
        update: function update(t, o) {
          return t.getData(o).bind(function (o) {
            return function (t, o) {
              var n = e.map(function (e) {
                return t.getDelta(e, o);
              });
              return e = B.some(o), n;
            }(t, o);
          });
        },
        getStartData: function getStartData() {
          return t;
        },
        setStartData: function setStartData(e) {
          t = B.some(e);
        }
      });
    }
  });

  var SA = gl({
    branchKey: "mode",
    branches: xA,
    name: "dragging",
    active: {
      events: function events(e, t) {
        return e.dragger.handlers(e, t);
      }
    },
    extra: {
      snap: function snap(e) {
        return {
          sensor: e.sensor,
          range: e.range,
          output: e.output,
          extra: B.from(e.extra)
        };
      }
    },
    state: wA,
    apis: tA
  }),
      kA = function kA(e, t, o, n, s, r) {
    return e.fold(function () {
      return SA.snap({
        sensor: XM(o - 20, n - 20),
        range: Ht(s, r),
        output: XM(B.some(o), B.some(n)),
        extra: {
          td: t
        }
      });
    }, function (e) {
      var s = o - 20,
          r = n - 20,
          a = e.element.dom.getBoundingClientRect();
      return SA.snap({
        sensor: XM(s, r),
        range: Ht(40, 40),
        output: XM(B.some(o - a.width / 2), B.some(n - a.height / 2)),
        extra: {
          td: t
        }
      });
    });
  },
      CA = function CA(e, t, o) {
    return {
      getSnapPoints: e,
      leftAttr: "data-drag-left",
      topAttr: "data-drag-top",
      onSensor: function onSensor(e, n) {
        var s = n.td;
        (function (e, t) {
          return e.exists(function (e) {
            return Ge(e, t);
          });
        })(t.get(), s) || (t.set(s), o(s));
      },
      mustSnap: !0
    };
  },
      OA = function OA(e) {
    return kh(Sh.sketch({
      dom: {
        tag: "div",
        classes: ["tox-selector"]
      },
      buttonBehaviours: cl([SA.config({
        mode: "mouseOrTouch",
        blockerClass: "blocker",
        snaps: e
      }), Ew.config({})]),
      eventOrder: {
        mousedown: ["dragging", "alloy.base.behaviour"],
        touchstart: ["dragging", "alloy.base.behaviour"]
      }
    }));
  },
      _A = function _A(e, t) {
    var o = fs([]),
        n = fs([]),
        s = fs(!1),
        r = Hl(),
        a = Hl(),
        i = function i(e) {
      var o = Uo(e);
      return kA(u.getOpt(t), e, o.x, o.y, o.width, o.height);
    },
        l = function l(e) {
      var o = Uo(e);
      return kA(m.getOpt(t), e, o.right, o.bottom, o.width, o.height);
    },
        c = CA(function () {
      return P(o.get(), function (e) {
        return i(e);
      });
    }, r, function (t) {
      a.get().each(function (o) {
        e.dispatch("TableSelectorChange", {
          start: t,
          finish: o
        });
      });
    }),
        d = CA(function () {
      return P(n.get(), function (e) {
        return l(e);
      });
    }, a, function (t) {
      r.get().each(function (o) {
        e.dispatch("TableSelectorChange", {
          start: o,
          finish: t
        });
      });
    }),
        u = OA(c),
        m = OA(d),
        g = Ga(u.asSpec()),
        p = Ga(m.asSpec()),
        h = function h(t, o, n, s) {
      var r = n(o);
      SA.snapTo(t, r), function (t, o, n, r) {
        var a = o.dom.getBoundingClientRect();
        At(t.element, "display");

        var i = Ye(Ie(e.getBody())).dom.innerHeight,
            l = a[s] < 0,
            c = function (e, t) {
          return e[s] > t;
        }(a, i);

        (l || c) && kt(t.element, "display", "none");
      }(t, o);
    },
        f = function f(e) {
      return h(g, e, i, "top");
    },
        b = function b(e) {
      return h(p, e, l, "bottom");
    };

    So().deviceType.isTouch() && (e.on("TableSelectionChange", function (e) {
      s.get() || (pd(t, g), pd(t, p), s.set(!0)), r.set(e.start), a.set(e.finish), e.otherCells.each(function (t) {
        o.set(t.upOrLeftCells), n.set(t.downOrRightCells), f(e.start), b(e.finish);
      });
    }), e.on("ResizeEditor ResizeWindow ScrollContent", function () {
      r.get().each(f), a.get().each(b);
    }), e.on("TableSelectionClear", function () {
      s.get() && (bd(g), bd(p), s.set(!1)), r.clear(), a.clear();
    }));
  },
      TA = function TA(e, t, o) {
    var n;
    var s = null !== (n = t.delimiter) && void 0 !== n ? n : "\u203A";
    return {
      dom: {
        tag: "div",
        classes: ["tox-statusbar__path"],
        attributes: {
          role: "navigation"
        }
      },
      behaviours: cl([kp.config({
        mode: "flow",
        selector: "div[role=button]"
      }), ym.config({
        disabled: o.isDisabled
      }), Iv(), Tx.config({}), Dp.config({}), Fp("elementPathEvents", [zr(function (t, n) {
        e.shortcuts.add("alt+F11", "focus statusbar elementpath", function () {
          return kp.focusIn(t);
        }), e.on("NodeChange", function (n) {
          var r = function (t) {
            var o = [];
            var n = t.length;

            for (; n-- > 0;) {
              var _r16 = t[n];

              if (1 === _r16.nodeType && "BR" !== (s = _r16).nodeName && !s.getAttribute("data-mce-bogus") && "bookmark" !== s.getAttribute("data-mce-type")) {
                var _t51 = e.dispatch("ResolveName", {
                  name: _r16.nodeName.toLowerCase(),
                  target: _r16
                });

                if (_t51.isDefaultPrevented() || o.push({
                  name: _t51.name,
                  element: _r16
                }), _t51.isPropagationStopped()) break;
              }
            }

            var s;
            return o;
          }(n.parents),
              a = r.length > 0 ? j(r, function (t, n, r) {
            var a = function (t, n, s) {
              return Sh.sketch({
                dom: {
                  tag: "div",
                  classes: ["tox-statusbar__path-item"],
                  attributes: {
                    "data-index": s,
                    "aria-level": s + 1
                  }
                },
                components: [La(t)],
                action: function action(t) {
                  e.focus(), e.selection.select(n), e.nodeChanged();
                },
                buttonBehaviours: cl([Rv(o.isDisabled), Iv()])
              });
            }(n.name, n.element, r);

            return 0 === r ? t.concat([a]) : t.concat([{
              dom: {
                tag: "div",
                classes: ["tox-statusbar__path-divider"],
                attributes: {
                  "aria-hidden": !0
                }
              },
              components: [La(" ".concat(s, " "))]
            }, a]);
          }, []) : [];

          Dp.set(t, a);
        });
      })])]),
      components: []
    };
  };

  var EA;
  !function (e) {
    e[e.None = 0] = "None", e[e.Both = 1] = "Both", e[e.Vertical = 2] = "Vertical";
  }(EA || (EA = {}));

  var BA = function BA(e, t, o) {
    var n = Ie(e.getContainer()),
        s = function (e, t, o, n, s) {
      var r = {};
      return r.height = RB(n + t.top, Xh(e), Yh(e)), o === EA.Both && (r.width = RB(s + t.left, qh(e), Kh(e))), r;
    }(e, t, o, Rt(n), Ut(n));

    le(s, function (e, t) {
      return kt(n, t, IB(e));
    }), function (e) {
      e.dispatch("ResizeEditor");
    }(e);
  },
      MA = function MA(e, t, o, n) {
    var s = Ht(20 * o, 20 * n);
    return BA(e, s, t), B.some(!0);
  },
      AA = function AA(e, t) {
    return {
      dom: {
        tag: "div",
        classes: ["tox-statusbar"]
      },
      components: function () {
        var o = function () {
          var o = [];
          return xf(e) && o.push(TA(e, {}, t)), e.hasPlugin("wordcount") && o.push(function (e, t) {
            var o = function o(e, _o51, n) {
              return Dp.set(e, [La(t.translate(["{0} " + n, _o51[n]]))]);
            };

            return Sh.sketch({
              dom: {
                tag: "button",
                classes: ["tox-statusbar__wordcount"]
              },
              components: [],
              buttonBehaviours: cl([Rv(t.isDisabled), Iv(), Tx.config({}), Dp.config({}), Zd.config({
                store: {
                  mode: "memory",
                  initialValue: {
                    mode: "words",
                    count: {
                      words: 0,
                      characters: 0
                    }
                  }
                }
              }), Fp("wordcount-events", [Nr(function (e) {
                var t = Zd.getValue(e),
                    n = "words" === t.mode ? "characters" : "words";
                Zd.setValue(e, {
                  mode: n,
                  count: t.count
                }), o(e, t.count, n);
              }), zr(function (t) {
                e.on("wordCountUpdate", function (e) {
                  var _Zd$getValue = Zd.getValue(t),
                      n = _Zd$getValue.mode;

                  Zd.setValue(t, {
                    mode: n,
                    count: e.wordCount
                  }), o(t, e.wordCount, n);
                });
              })])]),
              eventOrder: _defineProperty({}, Qs(), ["disabling", "alloy.base.behaviour", "wordcount-events"])
            });
          }(e, t)), wf(e) && o.push({
            dom: {
              tag: "span",
              classes: ["tox-statusbar__branding"]
            },
            components: [{
              dom: {
                tag: "a",
                attributes: {
                  href: "https://www.tiny.cloud/powered-by-tiny?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v6",
                  rel: "noopener",
                  target: "_blank",
                  "aria-label": Ch.translate(["Powered by {0}", "Tiny"])
                },
                innerHtml: '<svg width="50px" height="16px" viewBox="0 0 50 16" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.143 0c2.608.015 5.186 2.178 5.186 5.331 0 0 .077 3.812-.084 4.87-.361 2.41-2.164 4.074-4.65 4.496-1.453.284-2.523.49-3.212.623-.373.071-.634.122-.785.152-.184.038-.997.145-1.35.145-2.732 0-5.21-2.04-5.248-5.33 0 0 0-3.514.03-4.442.093-2.4 1.758-4.342 4.926-4.963 0 0 3.875-.752 4.036-.782.368-.07.775-.1 1.15-.1Zm1.826 2.8L5.83 3.989v2.393l-2.455.475v5.968l6.137-1.189V9.243l2.456-.476V2.8ZM5.83 6.382l3.682-.713v3.574l-3.682.713V6.382Zm27.173-1.64-.084-1.066h-2.226v9.132h2.456V7.743c-.008-1.151.998-2.064 2.149-2.072 1.15-.008 1.987.92 1.995 2.072v5.065h2.455V7.359c-.015-2.18-1.657-3.929-3.837-3.913a3.993 3.993 0 0 0-2.908 1.296Zm-6.3-4.266L29.16 0v2.387l-2.456.475V.476Zm0 3.2v9.132h2.456V3.676h-2.456Zm18.179 11.787L49.11 3.676H46.58l-1.612 4.527-.46 1.382-.384-1.382-1.611-4.527H39.98l3.3 9.132L42.15 16l2.732-.537ZM22.867 9.738c0 .752.568 1.075.921 1.075.353 0 .668-.047.998-.154l.537 1.765c-.23.154-.92.537-2.225.537-1.305 0-2.655-.997-2.686-2.686a136.877 136.877 0 0 1 0-4.374H18.8V3.676h1.612v-1.98l2.455-.476v2.456h2.302V5.9h-2.302v3.837Z"/>\n</svg>\n'.trim()
              },
              behaviours: cl([Hp.config({})])
            }]
          }), o.length > 0 ? [{
            dom: {
              tag: "div",
              classes: ["tox-statusbar__text-container"]
            },
            components: o
          }] : [];
        }(),
            n = function (e, t) {
          var o = function (e) {
            var t = Sf(e);
            return !1 === t ? EA.None : "both" === t ? EA.Both : EA.Vertical;
          }(e);

          return o === EA.None ? B.none() : B.some(Fh("resize-handle", {
            tag: "div",
            classes: ["tox-statusbar__resize-handle"],
            attributes: {
              title: t.translate("Resize")
            },
            behaviours: [SA.config({
              mode: "mouse",
              repositionTarget: !1,
              onDrag: function onDrag(t, n, s) {
                return BA(e, s, o);
              },
              blockerClass: "tox-blocker"
            }), kp.config({
              mode: "special",
              onLeft: function onLeft() {
                return MA(e, o, -1, 0);
              },
              onRight: function onRight() {
                return MA(e, o, 1, 0);
              },
              onUp: function onUp() {
                return MA(e, o, 0, -1);
              },
              onDown: function onDown() {
                return MA(e, o, 0, 1);
              }
            }), Tx.config({}), Hp.config({})]
          }, t.icons));
        }(e, t);

        return o.concat(n.toArray());
      }()
    };
  },
      DA = function DA(e) {
    return e.get().getOrDie("UI has not been rendered");
  },
      FA = function FA(e) {
    var t = e.inline,
        o = t ? NB : DB,
        n = zf(e) ? Q_ : O_,
        s = Hl(),
        r = Hl(),
        a = Hl(),
        i = Hl(),
        l = So().deviceType.isTouch() ? ["tox-platform-touch"] : [],
        c = Df(e),
        d = of(e),
        u = kh({
      dom: {
        tag: "div",
        classes: ["tox-anchorbar"]
      }
    }),
        m = function m() {
      return r.get().bind(TE.getHeader);
    },
        g = function g() {
      return qo.fromOption(s.get(), "UI has not been rendered");
    },
        p = function p() {
      return r.get().bind(function (e) {
        return TE.getToolbar(e);
      }).getOrDie("Could not find more toolbar element");
    },
        h = function h() {
      return r.get().bind(function (e) {
        return TE.getThrobber(e);
      }).getOrDie("Could not find throbber element");
    },
        f = function (e, t, o) {
      var n = fs(!1),
          s = function (e) {
        var t = fs(Df(e) ? "bottom" : "top");
        return {
          isPositionedAtTop: function isPositionedAtTop() {
            return "top" === t.get();
          },
          getDockingMode: t.get,
          setDockingMode: t.set
        };
      }(t),
          r = {
        shared: {
          providers: {
            icons: function icons() {
              return t.ui.registry.getAll().icons;
            },
            menuItems: function menuItems() {
              return t.ui.registry.getAll().menuItems;
            },
            translate: Ch.translate,
            isDisabled: function isDisabled() {
              return t.mode.isReadOnly() || !t.ui.isEnabled();
            },
            getOption: t.options.get
          },
          interpreter: function interpreter(e) {
            return function (e, t, o) {
              return oO(eO, e, {}, o);
            }(e, 0, r);
          },
          anchors: TO(t, o, s.isPositionedAtTop),
          header: s,
          getSink: e
        },
        urlinput: u_(t),
        styles: NO(t),
        colorinput: DO(t),
        dialog: IO(t),
        isContextMenuOpen: function isContextMenuOpen() {
          return n.get();
        },
        setContextMenuState: function setContextMenuState(e) {
          return n.set(e);
        }
      };

      return r;
    }(g, e, function () {
      return r.get().bind(function (e) {
        return u.getOpt(e);
      }).getOrDie("Could not find a anchor bar element");
    }),
        b = function b(t) {
      var o = IB(function (e) {
        var t = function (e) {
          var t = Gh(e),
              o = Xh(e),
              n = Yh(e);
          return FB(t).map(function (e) {
            return RB(e, o, n);
          });
        }(e);

        return t.getOr(Gh(e));
      }(e)),
          n = IB(function (e) {
        return VB(e).getOr($h(e));
      }(e));
      return e.inline || (Mt("div", "width", n) && kt(t.element, "width", n), Mt("div", "height", o) ? kt(t.element, "height", o) : kt(t.element, "height", "400px")), o;
    };

    return {
      getMothership: function getMothership() {
        return DA(a);
      },
      getUiMothership: function getUiMothership() {
        return DA(i);
      },
      backstage: f,
      renderUI: function renderUI() {
        var _ref17 = function () {
          var o = function () {
            var t = {
              attributes: _defineProperty({}, sc, c ? nc.BottomToTop : nc.TopToBottom)
            },
                o = TE.parts.menubar({
              dom: {
                tag: "div",
                classes: ["tox-menubar"]
              },
              backstage: f,
              onEscape: function onEscape() {
                e.focus();
              }
            }),
                n = TE.parts.toolbar(_objectSpread({
              dom: {
                tag: "div",
                classes: ["tox-toolbar"]
              },
              getSink: g,
              providers: f.shared.providers,
              onEscape: function onEscape() {
                e.focus();
              },
              type: d,
              lazyToolbar: p,
              lazyHeader: function lazyHeader() {
                return m().getOrDie("Could not find header element");
              }
            }, t)),
                s = TE.parts["multiple-toolbar"]({
              dom: {
                tag: "div",
                classes: ["tox-toolbar-overlord"]
              },
              providers: f.shared.providers,
              onEscape: function onEscape() {
                e.focus();
              },
              type: d
            }),
                r = Af(e),
                a = Bf(e),
                i = _f(e);

            return TE.parts.header({
              dom: _objectSpread({
                tag: "div",
                classes: ["tox-editor-header"]
              }, t),
              components: q([i ? [o] : [], r ? [s] : a ? [n] : [], If(e) ? [] : [u.asSpec()]]),
              sticky: zf(e),
              editor: e,
              sharedBackstage: f.shared
            });
          }(),
              n = {
            dom: {
              tag: "div",
              classes: ["tox-sidebar-wrap"]
            },
            components: [TE.parts.socket({
              dom: {
                tag: "div",
                classes: ["tox-edit-area"]
              }
            }), TE.parts.sidebar({
              dom: {
                tag: "div",
                classes: ["tox-sidebar"]
              }
            })]
          },
              s = TE.parts.throbber({
            dom: {
              tag: "div",
              classes: ["tox-throbber"]
            },
            backstage: f
          }),
              i = yf(e) && !t ? B.some(AA(e, f.shared.providers)) : B.none(),
              h = q([c ? [] : [o], t ? [] : [n], c ? [o] : []]),
              b = q([[{
            dom: {
              tag: "div",
              classes: ["tox-editor-container"]
            },
            components: h
          }], t ? [] : i.toArray(), [s]]),
              v = Vf(e),
              y = _objectSpread({
            role: "application"
          }, Ch.isRtl() ? {
            dir: "rtl"
          } : {}, {}, v ? {
            "aria-hidden": "true"
          } : {}),
              x = Ga(TE.sketch({
            dom: {
              tag: "div",
              classes: ["tox", "tox-tinymce"].concat(t ? ["tox-tinymce-inline"] : []).concat(c ? ["tox-tinymce--toolbar-bottom"] : []).concat(l),
              styles: _objectSpread({
                visibility: "hidden"
              }, v ? {
                opacity: "0",
                border: "0"
              } : {}),
              attributes: y
            },
            components: b,
            behaviours: cl([Iv(), ym.config({
              disableClass: "tox-tinymce--disabled"
            }), kp.config({
              mode: "cyclic",
              selector: ".tox-menubar, .tox-toolbar, .tox-toolbar__primary, .tox-toolbar__overflow--open, .tox-sidebar__overflow--open, .tox-statusbar__path, .tox-statusbar__wordcount, .tox-statusbar__branding a, .tox-statusbar__resize-handle"
            })])
          })),
              w = wx(x);

          return r.set(x), a.set(w), {
            mothership: w,
            outerContainer: x
          };
        }(),
            v = _ref17.mothership,
            y = _ref17.outerContainer,
            _ref18 = function () {
          var t = Rf(e),
              o = Ge(mt(), t) && "grid" === _t(t, "display"),
              r = {
            dom: {
              tag: "div",
              classes: ["tox", "tox-silver-sink", "tox-tinymce-aux"].concat(l),
              attributes: _objectSpread({}, Ch.isRtl() ? {
                dir: "rtl"
              } : {})
            },
            behaviours: cl([id.config({
              useFixed: function useFixed() {
                return n.isDocked(m);
              }
            })])
          },
              a = {
            dom: {
              styles: {
                width: document.body.clientWidth + "px"
              }
            },
            events: _r([Br(cr(), function (e) {
              kt(e.element, "width", document.body.clientWidth + "px");
            })])
          },
              c = Ga(sn(r, o ? a : {})),
              d = wx(c);

          return s.set(c), i.set(d), {
            sink: c,
            uiMothership: d
          };
        }(),
            x = _ref18.uiMothership,
            w = _ref18.sink;

        ce(nf(e), function (t, o) {
          e.ui.registry.addGroupToolbarButton(o, t);
        });

        var _e$ui$registry$getAll2 = e.ui.registry.getAll(),
            S = _e$ui$registry$getAll2.buttons,
            k = _e$ui$registry$getAll2.menuItems,
            C = _e$ui$registry$getAll2.contextToolbars,
            O = _e$ui$registry$getAll2.sidebars,
            _ = Mf(e),
            T = {
          menuItems: k,
          menus: Hf(e),
          menubar: df(e),
          toolbar: _.getOrThunk(function () {
            return uf(e);
          }),
          allowToolbarGroups: d === Vh.floating,
          buttons: S,
          sidebar: O
        };

        (function (t) {
          e.addShortcut("alt+F9", "focus menubar", function () {
            TE.focusMenubar(t);
          }), e.addShortcut("alt+F10", "focus toolbar", function () {
            TE.focusToolbar(t);
          }), e.addCommand("ToggleToolbarDrawer", function () {
            TE.toggleToolbarDrawer(t);
          }), e.addQueryStateHandler("ToggleToolbarDrawer", function () {
            return TE.isToolbarDrawerToggled(t);
          });
        })(y), function (e, t, o) {
          var n = function n(e, _n44) {
            N([t, o], function (t) {
              t.broadcastEvent(e, _n44);
            });
          },
              s = function s(e, n) {
            N([t, o], function (t) {
              t.broadcastOn([e], n);
            });
          },
              r = function r(e) {
            return s(Fd(), {
              target: e.target
            });
          },
              a = zo(),
              i = Nl(a, "touchstart", r),
              l = Nl(a, "touchmove", function (e) {
            return n(ar(), e);
          }),
              c = Nl(a, "touchend", function (e) {
            return n(ir(), e);
          }),
              d = Nl(a, "mousedown", r),
              u = Nl(a, "mouseup", function (e) {
            0 === e.raw.button && s(Rd(), {
              target: e.target
            });
          }),
              m = function m(e) {
            return s(Fd(), {
              target: Ie(e.target)
            });
          },
              g = function g(e) {
            0 === e.button && s(Rd(), {
              target: Ie(e.target)
            });
          },
              p = function p() {
            N(e.editorManager.get(), function (t) {
              e !== t && t.dispatch("DismissPopups", {
                relatedTarget: e
              });
            });
          },
              h = function h(e) {
            return n(lr(), Wl(e));
          },
              f = function f(e) {
            s(Id(), {}), n(cr(), Wl(e));
          },
              b = function b() {
            return s(Id(), {});
          },
              v = function v(t) {
            t.state && s(Fd(), {
              target: Ie(e.getContainer())
            });
          },
              y = function y(e) {
            s(Fd(), {
              target: Ie(e.relatedTarget.getContainer())
            });
          };

          e.on("PostRender", function () {
            e.on("click", m), e.on("tap", m), e.on("mouseup", g), e.on("mousedown", p), e.on("ScrollWindow", h), e.on("ResizeWindow", f), e.on("ResizeEditor", b), e.on("AfterProgressState", v), e.on("DismissPopups", y);
          }), e.on("remove", function () {
            e.off("click", m), e.off("tap", m), e.off("mouseup", g), e.off("mousedown", p), e.off("ScrollWindow", h), e.off("ResizeWindow", f), e.off("ResizeEditor", b), e.off("AfterProgressState", v), e.off("DismissPopups", y), d.unbind(), i.unbind(), l.unbind(), c.unbind(), u.unbind();
          }), e.on("detach", function () {
            wd(t), wd(o), t.destroy(), o.destroy();
          });
        }(e, v, x), n.setup(e, f.shared, m), fM(e, f), zM(e, g, f), function (e) {
          var _e$ui$registry$getAll3 = e.ui.registry.getAll(),
              t = _e$ui$registry$getAll3.sidebars;

          N(ae(t), function (o) {
            var n = t[o],
                s = function s() {
              return xe(B.from(e.queryCommandValue("ToggleSidebar")), o);
            };

            e.ui.registry.addToggleButton(o, {
              icon: n.icon,
              tooltip: n.tooltip,
              onAction: function onAction(t) {
                e.execCommand("ToggleSidebar", !1, o), t.setActive(s());
              },
              onSetup: function onSetup(t) {
                t.setActive(s());

                var o = function o() {
                  return t.setActive(s());
                };

                return e.on("ToggleSidebar", o), function () {
                  e.off("ToggleSidebar", o);
                };
              }
            });
          });
        }(e), NT(e, h, f.shared), rM(e, C, w, {
          backstage: f
        }), _A(e, w);
        var E = {
          mothership: v,
          uiMothership: x,
          outerContainer: y,
          sink: w
        },
            M = {
          targetNode: e.getElement(),
          height: b(y)
        };
        return o.render(e, E, T, f, M);
      }
    };
  },
      IA = y([jn("lazySink"), Qn("dragBlockClass"), gs("getBounds", jo), is("useTabstopAt", T), is("eventOrder", {}), Qd("modalBehaviours", [kp]), vi("onExecute"), xi("onEscape")]),
      RA = {
    sketch: x
  },
      VA = y([Eu({
    name: "draghandle",
    overrides: function overrides(e, t) {
      return {
        behaviours: cl([SA.config({
          mode: "mouse",
          getTarget: function getTarget(e) {
            return Za(e, '[role="dialog"]').getOr(e);
          },
          blockerClass: e.dragBlockClass.getOrDie(new Error("The drag blocker class was not specified for a dialog with a drag handle: \n" + JSON.stringify(t, null, 2)).message),
          getBounds: e.getDragBounds
        })])
      };
    }
  }), _u({
    schema: [jn("dom")],
    name: "title"
  }), _u({
    factory: RA,
    schema: [jn("dom")],
    name: "close"
  }), _u({
    factory: RA,
    schema: [jn("dom")],
    name: "body"
  }), Eu({
    factory: RA,
    schema: [jn("dom")],
    name: "footer"
  }), Tu({
    factory: {
      sketch: function sketch(e, t) {
        return _objectSpread({}, e, {
          dom: t.dom,
          components: t.components
        });
      }
    },
    schema: [is("dom", {
      tag: "div",
      styles: {
        position: "fixed",
        left: "0px",
        top: "0px",
        right: "0px",
        bottom: "0px"
      }
    }), is("components", [])],
    name: "blocker"
  })]),
      zA = tm({
    name: "ModalDialog",
    configFields: IA(),
    partFields: VA(),
    factory: function factory(e, t, o, n) {
      var s = Hl(),
          r = Kr("modal-events"),
          a = _objectSpread({}, e.eventOrder, _defineProperty({}, dr(), [r].concat(e.eventOrder["alloy.system.attached"] || [])));

      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        apis: {
          show: function show(t) {
            s.set(t);
            var o = e.lazySink(t).getOrDie(),
                r = n.blocker(),
                a = o.getSystem().build(_objectSpread({}, r, {
              components: r.components.concat([$a(t)]),
              behaviours: cl([Hp.config({}), Fp("dialog-blocker-events", [Vr(Vs(), function () {
                kp.focusIn(t);
              })])])
            }));
            pd(o, a), kp.focusIn(t);
          },
          hide: function hide(e) {
            s.clear(), Je(e.element).each(function (t) {
              e.getSystem().getByDom(t).each(function (e) {
                bd(e);
              });
            });
          },
          getBody: function getBody(t) {
            return Lu(t, e, "body");
          },
          getFooter: function getFooter(t) {
            return Lu(t, e, "footer");
          },
          setIdle: function setIdle(e) {
            zT.unblock(e);
          },
          setBusy: function setBusy(e, t) {
            zT.block(e, t);
          }
        },
        eventOrder: a,
        domModification: {
          attributes: {
            role: "dialog",
            "aria-modal": "true"
          }
        },
        behaviours: tu(e.modalBehaviours, [Dp.config({}), kp.config({
          mode: "cyclic",
          onEnter: e.onExecute,
          onEscape: e.onEscape,
          useTabstopAt: e.useTabstopAt
        }), zT.config({
          getRoot: s.get
        }), Fp(r, [zr(function (t) {
          (function (e, t) {
            var o = vt(e, "id").fold(function () {
              var e = Kr("dialog-label");
              return ht(t, "id", e), e;
            }, x);
            ht(e, "aria-labelledby", o);
          })(t.element, Lu(t, e, "title").element), function (e, t) {
            var o = B.from(bt(e, "id")).fold(function () {
              var e = Kr("dialog-describe");
              return ht(t, "id", e), e;
            }, x);
            ht(e, "aria-describedby", o);
          }(t.element, Lu(t, e, "body").element);
        })])])
      };
    },
    apis: {
      show: function show(e, t) {
        e.show(t);
      },
      hide: function hide(e, t) {
        e.hide(t);
      },
      getBody: function getBody(e, t) {
        return e.getBody(t);
      },
      getFooter: function getFooter(e, t) {
        return e.getFooter(t);
      },
      setBusy: function setBusy(e, t, o) {
        e.setBusy(t, o);
      },
      setIdle: function setIdle(e, t) {
        e.setIdle(t);
      }
    }
  }),
      HA = xn([pb, hb].concat(dv)),
      PA = Bn,
      NA = [Lb("button"), Eb, us("align", "end", ["start", "end"]), Vb, Rb, ns("buttonType", ["primary", "secondary"])],
      LA = [].concat(NA, [bb]),
      WA = [Xn("type", ["submit", "cancel", "custom"])].concat(_toConsumableArray(LA)),
      UA = [Xn("type", ["menu"]), Tb, Bb, Eb, Zn("items", HA)].concat(NA),
      jA = Nn("type", {
    submit: WA,
    cancel: WA,
    custom: WA,
    menu: UA
  }),
      GA = [pb, bb, Xn("level", ["info", "warn", "error", "success"]), yb, is("url", "")],
      $A = xn(GA),
      qA = [pb, bb, Rb, Lb("button"), Eb, Ib, ns("buttonType", ["primary", "secondary", "toolbar"]), Vb],
      XA = xn(qA),
      KA = [pb, hb],
      YA = KA.concat([Mb]),
      JA = KA.concat([fb, Rb]),
      ZA = xn(JA),
      QA = Bn,
      eD = YA.concat([zb("auto")]),
      tD = xn(eD),
      oD = Cn([xb, bb, yb]),
      nD = xn(YA),
      sD = En,
      rD = xn(YA),
      aD = En,
      iD = KA.concat([ds("tag", "textarea"), qn("scriptId"), qn("scriptUrl"), ls("settings", void 0, Dn)]),
      lD = KA.concat([ds("tag", "textarea"), Kn("init")]),
      cD = In(function (e) {
    return Vn("customeditor.old", yn(lD), e).orThunk(function () {
      return Vn("customeditor.new", yn(iD), e);
    });
  }),
      dD = En,
      uD = xn(YA),
      mD = wn(pn),
      gD = function gD(e) {
    return [pb, $n("columns"), e];
  },
      pD = [pb, qn("html"), us("presets", "presentation", ["presentation", "document"])],
      hD = xn(pD),
      fD = YA.concat([ms("sandboxed", !0), ms("transparent", !0)]),
      bD = xn(fD),
      vD = En,
      yD = xn(KA.concat([os("height")])),
      xD = xn([qn("url"), ts("zoom"), ts("cachedWidth"), ts("cachedHeight")]),
      wD = YA.concat([os("inputMode"), os("placeholder"), ms("maximized", !1), Rb]),
      SD = xn(wD),
      kD = En,
      CD = function CD(e) {
    return [pb, fb, e];
  },
      OD = [bb, xb],
      _D = [bb, Zn("items", function (e, t) {
    var o = Gt(t);
    return {
      extract: function extract(e, t) {
        return o().extract(e, t);
      },
      toString: function toString() {
        return o().toString();
      }
    };
  }(0, function () {
    return TD;
  }))],
      TD = Sn([xn(OD), xn(_D)]),
      ED = YA.concat([Zn("items", TD), Rb]),
      BD = xn(ED),
      MD = En,
      AD = YA.concat([Jn("items", [bb, xb]), cs("size", 1), Rb]),
      DD = xn(AD),
      FD = En,
      ID = YA.concat([ms("constrain", !0), Rb]),
      RD = xn(ID),
      VD = xn([qn("width"), qn("height")]),
      zD = KA.concat([fb, cs("min", 0), cs("max", 0)]),
      HD = xn(zD),
      PD = Tn,
      ND = [pb, Zn("header", En), Zn("cells", wn(En))],
      LD = xn(ND),
      WD = YA.concat([os("placeholder"), ms("maximized", !1), Rb]),
      UD = xn(WD),
      jD = En,
      GD = YA.concat([us("filetype", "file", ["image", "media", "file"]), Rb]),
      $D = xn(GD),
      qD = xn([xb, Hb]),
      XD = function XD(e) {
    return Ln("items", "items", {
      tag: "required",
      process: {}
    }, wn(In(function (t) {
      return Vn("Checking item of ".concat(e), KD, t).fold(function (e) {
        return qo.error(Pn(e));
      }, function (e) {
        return qo.value(e);
      });
    })));
  },
      KD = bn(function () {
    return Fn("type", {
      alertbanner: $A,
      bar: xn((e = XD("bar"), [pb, e])),
      button: XA,
      checkbox: ZA,
      colorinput: nD,
      colorpicker: rD,
      dropzone: uD,
      grid: xn(gD(XD("grid"))),
      iframe: bD,
      input: SD,
      listbox: BD,
      selectbox: DD,
      sizeinput: RD,
      slider: HD,
      textarea: UD,
      urlinput: $D,
      customeditor: cD,
      htmlpanel: hD,
      imagepreview: yD,
      collection: tD,
      label: xn(CD(XD("label"))),
      table: LD,
      panel: JD
    });
    var e;
  }),
      YD = [pb, is("classes", []), Zn("items", KD)],
      JD = xn(YD),
      ZD = [Lb("tab"), vb, Zn("items", KD)],
      QD = [pb, Jn("tabs", ZD)],
      eF = xn(QD),
      tF = LA,
      oF = jA,
      nF = xn([qn("title"), Gn("body", Fn("type", {
    panel: JD,
    tabpanel: eF
  })), ds("size", "normal"), Zn("buttons", oF), is("initialData", {}), gs("onAction", b), gs("onChange", b), gs("onSubmit", b), gs("onClose", b), gs("onCancel", b), gs("onTabChange", b)]),
      sF = xn([Xn("type", ["cancel", "custom"])].concat(_toConsumableArray(tF))),
      rF = xn([qn("title"), qn("url"), ts("height"), ts("width"), rs("buttons", sF), gs("onAction", b), gs("onCancel", b), gs("onClose", b), gs("onMessage", b)]),
      aF = function aF(e) {
    return a(e) ? [e].concat(X(fe(e), aF)) : l(e) ? X(e, aF) : [];
  },
      iF = function iF(e) {
    return r(e.type) && r(e.name);
  },
      lF = {
    checkbox: QA,
    colorinput: sD,
    colorpicker: aD,
    dropzone: mD,
    input: kD,
    iframe: vD,
    imagepreview: xD,
    selectbox: FD,
    sizeinput: VD,
    slider: PD,
    listbox: MD,
    size: VD,
    textarea: jD,
    urlinput: qD,
    customeditor: dD,
    collection: oD,
    togglemenuitem: PA
  },
      cF = function cF(e) {
    var t = function (e) {
      return W(aF(e), iF);
    }(e),
        o = X(t, function (e) {
      return function (e) {
        return B.from(lF[e.type]);
      }(e).fold(function () {
        return [];
      }, function (t) {
        return [Gn(e.name, t)];
      });
    });

    return xn(o);
  },
      dF = function dF(e) {
    return {
      internalDialog: zn(Vn("dialog", nF, e)),
      dataValidator: cF(e),
      initialData: e.initialData
    };
  },
      uF = {
    open: function open(e, t) {
      var o = dF(t);
      return e(o.internalDialog, o.initialData, o.dataValidator);
    },
    openUrl: function openUrl(e, t) {
      return e(zn(Vn("dialog", rF, t)));
    },
    redial: function redial(e) {
      return dF(e);
    }
  },
      mF = function mF(e) {
    var t = [],
        o = {};
    return le(e, function (e, n) {
      e.fold(function () {
        t.push(n);
      }, function (e) {
        o[n] = e;
      });
    }), t.length > 0 ? qo.error(t) : qo.value(o);
  },
      gF = function gF(e, t, o) {
    var n = kh(vk.sketch(function (n) {
      return {
        dom: {
          tag: "div",
          classes: ["tox-form"].concat(e.classes)
        },
        components: P(e.items, function (e) {
          return tO(n, e, t, o);
        })
      };
    }));
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__body"]
      },
      components: [{
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-content"]
        },
        components: [n.asSpec()]
      }],
      behaviours: cl([kp.config({
        mode: "acyclic",
        useTabstopAt: k(Uk)
      }), (s = n, rm.config({
        find: s.getOpt
      })), Mk(n, {
        postprocess: function postprocess(e) {
          return mF(e).fold(function (e) {
            return console.error(e), {};
          }, x);
        }
      })])
    };
    var s;
  },
      pF = em({
    name: "TabButton",
    configFields: [is("uid", void 0), jn("value"), Ln("dom", "dom", cn(function () {
      return {
        attributes: {
          role: "tab",
          id: Kr("aria"),
          "aria-selected": "false"
        }
      };
    }), On()), Qn("action"), is("domModification", {}), Qd("tabButtonBehaviours", [Hp, kp, Zd]), jn("view")],
    factory: function factory(e, t) {
      return {
        uid: e.uid,
        dom: e.dom,
        components: e.components,
        events: Xp(e.action),
        behaviours: tu(e.tabButtonBehaviours, [Hp.config({}), kp.config({
          mode: "execution",
          useSpace: !0,
          useEnter: !0
        }), Zd.config({
          store: {
            mode: "memory",
            initialValue: e.value
          }
        })]),
        domModification: e.domModification
      };
    }
  }),
      hF = y([jn("tabs"), jn("dom"), is("clickToDismiss", !1), Qd("tabbarBehaviours", [Bm, kp]), hi(["tabClass", "selectedClass"])]),
      fF = Bu({
    factory: pF,
    name: "tabs",
    unit: "tab",
    overrides: function overrides(e) {
      var t = function t(e, _t52) {
        Bm.dehighlight(e, _t52), wr(e, br(), {
          tabbar: e,
          button: _t52
        });
      },
          o = function o(e, t) {
        Bm.highlight(e, t), wr(e, fr(), {
          tabbar: e,
          button: t
        });
      };

      return {
        action: function action(n) {
          var s = n.getSystem().getByUid(e.uid).getOrDie(),
              r = Bm.isHighlighted(s, n);
          (r && e.clickToDismiss ? t : r ? b : o)(s, n);
        },
        domModification: {
          classes: [e.markers.tabClass]
        }
      };
    }
  }),
      bF = y([fF]),
      vF = tm({
    name: "Tabbar",
    configFields: hF(),
    partFields: bF(),
    factory: function factory(e, t, o, n) {
      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        "debug.sketcher": "Tabbar",
        domModification: {
          attributes: {
            role: "tablist"
          }
        },
        behaviours: tu(e.tabbarBehaviours, [Bm.config({
          highlightClass: e.markers.selectedClass,
          itemClass: e.markers.tabClass,
          onHighlight: function onHighlight(e, t) {
            ht(t.element, "aria-selected", "true");
          },
          onDehighlight: function onDehighlight(e, t) {
            ht(t.element, "aria-selected", "false");
          }
        }), kp.config({
          mode: "flow",
          getInitial: function getInitial(e) {
            return Bm.getHighlighted(e).map(function (e) {
              return e.element;
            });
          },
          selector: "." + e.markers.tabClass,
          executeOnMove: !0
        })])
      };
    }
  }),
      yF = em({
    name: "Tabview",
    configFields: [Qd("tabviewBehaviours", [Dp])],
    factory: function factory(e, t) {
      return {
        uid: e.uid,
        dom: e.dom,
        behaviours: tu(e.tabviewBehaviours, [Dp.config({})]),
        domModification: {
          attributes: {
            role: "tabpanel"
          }
        }
      };
    }
  }),
      xF = y([is("selectFirst", !0), bi("onChangeTab"), bi("onDismissTab"), is("tabs", []), Qd("tabSectionBehaviours", [])]),
      wF = _u({
    factory: vF,
    schema: [jn("dom"), Yn("markers", [jn("tabClass"), jn("selectedClass")])],
    name: "tabbar",
    defaults: function defaults(e) {
      return {
        tabs: e.tabs
      };
    }
  }),
      SF = _u({
    factory: yF,
    name: "tabview"
  }),
      kF = y([wF, SF]),
      CF = tm({
    name: "TabSection",
    configFields: xF(),
    partFields: kF(),
    factory: function factory(e, t, o, n) {
      var s = function s(t, o) {
        Nu(t, e, "tabbar").each(function (e) {
          o(e).each(Sr);
        });
      };

      return {
        uid: e.uid,
        dom: e.dom,
        components: t,
        behaviours: eu(e.tabSectionBehaviours),
        events: _r(q([e.selectFirst ? [zr(function (e, t) {
          s(e, Bm.getFirst);
        })] : [], [Br(fr(), function (t, o) {
          (function (t) {
            var o = Zd.getValue(t);
            Nu(t, e, "tabview").each(function (n) {
              G(e.tabs, function (e) {
                return e.value === o;
              }).each(function (o) {
                var s = o.view();
                vt(t.element, "id").each(function (e) {
                  ht(n.element, "aria-labelledby", e);
                }), Dp.set(n, s), e.onChangeTab(n, t, s);
              });
            });
          })(o.event.button);
        }), Br(br(), function (t, o) {
          var n = o.event.button;
          e.onDismissTab(t, n);
        })]])),
        apis: {
          getViewItems: function getViewItems(t) {
            return Nu(t, e, "tabview").map(function (e) {
              return Dp.contents(e);
            }).getOr([]);
          },
          showTab: function showTab(e, t) {
            s(e, function (e) {
              var o = Bm.getCandidates(e);
              return G(o, function (e) {
                return Zd.getValue(e) === t;
              }).filter(function (t) {
                return !Bm.isHighlighted(e, t);
              });
            });
          }
        }
      };
    },
    apis: {
      getViewItems: function getViewItems(e, t) {
        return e.getViewItems(t);
      },
      showTab: function showTab(e, t, o) {
        e.showTab(t, o);
      }
    }
  }),
      OF = function OF(e, t) {
    kt(e, "height", t + "px"), kt(e, "flex-basis", t + "px");
  },
      _F = function _F(e, t, o) {
    Za(e, '[role="dialog"]').each(function (e) {
      ei(e, '[role="tablist"]').each(function (n) {
        o.get().map(function (o) {
          return kt(t, "height", "0"), kt(t, "flex-basis", "0"), Math.min(o, function (e, t, o) {
            var n = Ke(e).dom,
                s = Za(e, ".tox-dialog-wrap").getOr(e);
            var r;
            r = "fixed" === _t(s, "position") ? Math.max(n.clientHeight, window.innerHeight) : Math.max(n.offsetHeight, n.scrollHeight);
            var a = Rt(t),
                i = t.dom.offsetLeft >= o.dom.offsetLeft + Ut(o) ? Math.max(Rt(o), a) : a,
                l = parseInt(_t(e, "margin-top"), 10) || 0,
                c = parseInt(_t(e, "margin-bottom"), 10) || 0;
            return r - (Rt(e) + l + c - i);
          }(e, t, n));
        }).each(function (e) {
          OF(t, e);
        });
      });
    });
  },
      TF = function TF(e) {
    return ei(e, '[role="tabpanel"]');
  },
      EF = "send-data-to-section",
      BF = "send-data-to-view",
      MF = function MF(e, t, o) {
    var n = fs({}),
        s = function s(e) {
      var t = Zd.getValue(e),
          o = mF(t).getOr({}),
          s = n.get(),
          r = sn(s, o);
      n.set(r);
    },
        r = function r(e) {
      var t = n.get();
      Zd.setValue(e, t);
    },
        a = fs(null),
        i = P(e.tabs, function (e) {
      return {
        value: e.name,
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-nav-item"]
        },
        components: [La(o.shared.providers.translate(e.title))],
        view: function view() {
          return [vk.sketch(function (n) {
            return {
              dom: {
                tag: "div",
                classes: ["tox-form"]
              },
              components: P(e.items, function (e) {
                return tO(n, e, t, o);
              }),
              formBehaviours: cl([kp.config({
                mode: "acyclic",
                useTabstopAt: k(Uk)
              }), Fp("TabView.form.events", [zr(r), Hr(s)]), hl.config({
                channels: ys([{
                  key: EF,
                  value: {
                    onReceive: s
                  }
                }, {
                  key: BF,
                  value: {
                    onReceive: r
                  }
                }])
              })])
            };
          })];
        }
      };
    }),
        l = function (e) {
      var t = function () {
        var t = Hl(),
            o = [zr(function (o) {
          var n = o.element;
          TF(n).each(function (s) {
            kt(s, "visibility", "hidden"), o.getSystem().getByDom(s).toOptional().each(function (o) {
              var n = function (e, t, o) {
                return P(e, function (n, s) {
                  Dp.set(o, e[s].view());
                  var r = t.dom.getBoundingClientRect();
                  return Dp.set(o, []), r.height;
                });
              }(e, s, o),
                  r = function (e) {
                return oe(ee(e, function (e, t) {
                  return e > t ? -1 : e < t ? 1 : 0;
                }));
              }(n);

              r.fold(t.clear, t.set);
            }), _F(n, s, t), At(s, "visibility"), function (e, t) {
              oe(e).each(function (e) {
                return CF.showTab(t, e.value);
              });
            }(e, o), requestAnimationFrame(function () {
              _F(n, s, t);
            });
          });
        }), Br(cr(), function (e) {
          var o = e.element;
          TF(o).each(function (e) {
            _F(o, e, t);
          });
        }), Br(Lx, function (e, o) {
          var n = e.element;
          TF(n).each(function (e) {
            var o = yl(it(e));
            kt(e, "visibility", "hidden");
            var s = Et(e, "height").map(function (e) {
              return parseInt(e, 10);
            });
            At(e, "height"), At(e, "flex-basis");
            var r = e.dom.getBoundingClientRect().height;
            s.forall(function (e) {
              return r > e;
            }) ? (t.set(r), _F(n, e, t)) : s.each(function (t) {
              OF(e, t);
            }), At(e, "visibility"), o.each(bl);
          });
        })];
        return {
          extraEvents: o,
          selectFirst: !1
        };
      }();

      return {
        smartTabHeight: t,
        naiveTabHeight: {
          extraEvents: [],
          selectFirst: !0
        }
      };
    }(i).smartTabHeight;

    return CF.sketch({
      dom: {
        tag: "div",
        classes: ["tox-dialog__body"]
      },
      onChangeTab: function onChangeTab(e, t, o) {
        var n = Zd.getValue(t);
        wr(e, Nx, {
          name: n,
          oldName: a.get()
        }), a.set(n);
      },
      tabs: i,
      components: [CF.parts.tabbar({
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-nav"]
        },
        components: [vF.parts.tabs({})],
        markers: {
          tabClass: "tox-tab",
          selectedClass: "tox-dialog__body-nav-item--active"
        },
        tabbarBehaviours: cl([Tx.config({})])
      }), CF.parts.tabview({
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-content"]
        }
      })],
      selectFirst: l.selectFirst,
      tabSectionBehaviours: cl([Fp("tabpanel", l.extraEvents), kp.config({
        mode: "acyclic"
      }), rm.config({
        find: function find(e) {
          return oe(CF.getViewItems(e));
        }
      }), Dk(B.none(), function (e) {
        return e.getSystem().broadcastOn([EF], {}), n.get();
      }, function (e, t) {
        n.set(t), e.getSystem().broadcastOn([BF], {});
      })])
    });
  },
      AF = Kr("update-dialog"),
      DF = Kr("update-title"),
      FF = Kr("update-body"),
      IF = Kr("update-footer"),
      RF = Kr("body-send-message"),
      VF = function VF(e, t, o, n, s) {
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__content-js"],
        attributes: _objectSpread({}, o.map(function (e) {
          return {
            id: e
          };
        }).getOr({}), {}, s ? {
          "aria-live": "polite"
        } : {})
      },
      components: [],
      behaviours: cl([_k(0), cB.config({
        channel: "".concat(FF, "-").concat(t),
        updateState: function updateState(e, t) {
          return B.some({
            isTabPanel: function isTabPanel() {
              return "tabpanel" === t.body.type;
            }
          });
        },
        renderComponents: function renderComponents(e) {
          var t = e.body;
          return "tabpanel" === t.type ? [MF(t, e.initialData, n)] : [gF(t, e.initialData, n)];
        },
        initialData: e
      })])
    };
  },
      zF = Nh.deviceType.isTouch(),
      HF = function HF(e, t) {
    return {
      dom: {
        tag: "div",
        styles: {
          display: "none"
        },
        classes: ["tox-dialog__header"]
      },
      components: [e, t]
    };
  },
      PF = function PF(e, t) {
    return zA.parts.close(Sh.sketch({
      dom: {
        tag: "button",
        classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
        attributes: {
          type: "button",
          "aria-label": t.translate("Close")
        }
      },
      action: e,
      buttonBehaviours: cl([Tx.config({})])
    }));
  },
      NF = function NF() {
    return zA.parts.title({
      dom: {
        tag: "div",
        classes: ["tox-dialog__title"],
        innerHtml: "",
        styles: {
          display: "none"
        }
      }
    });
  },
      LF = function LF(e, t) {
    return zA.parts.body({
      dom: {
        tag: "div",
        classes: ["tox-dialog__body"]
      },
      components: [{
        dom: {
          tag: "div",
          classes: ["tox-dialog__body-content"]
        },
        components: [{
          dom: HT("<p>".concat(t.translate(e), "</p>"))
        }]
      }]
    });
  },
      WF = function WF(e) {
    return zA.parts.footer({
      dom: {
        tag: "div",
        classes: ["tox-dialog__footer"]
      },
      components: e
    });
  },
      UF = function UF(e, t) {
    return [xx.sketch({
      dom: {
        tag: "div",
        classes: ["tox-dialog__footer-start"]
      },
      components: e
    }), xx.sketch({
      dom: {
        tag: "div",
        classes: ["tox-dialog__footer-end"]
      },
      components: t
    })];
  },
      jF = function jF(e) {
    var _objectSpread7;

    var t = "tox-dialog",
        o = t + "-wrap",
        n = o + "__backdrop",
        s = t + "__disable-scroll";
    return zA.sketch({
      lazySink: e.lazySink,
      onEscape: function onEscape(t) {
        return e.onEscape(t), B.some(!0);
      },
      useTabstopAt: function useTabstopAt(e) {
        return !Uk(e);
      },
      dom: {
        tag: "div",
        classes: [t].concat(e.extraClasses),
        styles: _objectSpread({
          position: "relative"
        }, e.extraStyles)
      },
      components: [e.header, e.body].concat(_toConsumableArray(e.footer.toArray())),
      parts: {
        blocker: {
          dom: HT("<div class=\"".concat(o, "\"></div>")),
          components: [{
            dom: {
              tag: "div",
              classes: zF ? [n, n + "--opaque"] : [n]
            }
          }]
        }
      },
      dragBlockClass: o,
      modalBehaviours: cl([Hp.config({}), Fp("dialog-events", e.dialogEvents.concat([Vr(Vs(), function (e, t) {
        kp.focusIn(e);
      })])), Fp("scroll-lock", [zr(function () {
        Ta(mt(), s);
      }), Hr(function () {
        Ea(mt(), s);
      })])].concat(_toConsumableArray(e.extraBehaviours))),
      eventOrder: _objectSpread((_objectSpread7 = {}, _defineProperty(_objectSpread7, Qs(), ["dialog-events"]), _defineProperty(_objectSpread7, dr(), ["scroll-lock", "dialog-events", "alloy.base.behaviour"]), _defineProperty(_objectSpread7, ur(), ["alloy.base.behaviour", "dialog-events", "scroll-lock"]), _objectSpread7), e.eventOrder)
    });
  },
      GF = function GF(e) {
    return Sh.sketch({
      dom: {
        tag: "button",
        classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
        attributes: {
          type: "button",
          "aria-label": e.translate("Close"),
          title: e.translate("Close")
        }
      },
      components: [Fh("close", {
        tag: "div",
        classes: ["tox-icon"]
      }, e.icons)],
      action: function action(e) {
        xr(e, Rx);
      }
    });
  },
      $F = function $F(e, t, o, n) {
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__title"],
        attributes: _objectSpread({}, o.map(function (e) {
          return {
            id: e
          };
        }).getOr({}))
      },
      components: [],
      behaviours: cl([cB.config({
        channel: "".concat(DF, "-").concat(t),
        initialData: e,
        renderComponents: function renderComponents(e) {
          return [La(n.translate(e.title))];
        }
      })])
    };
  },
      qF = function qF() {
    return {
      dom: HT('<div class="tox-dialog__draghandle"></div>')
    };
  },
      XF = function XF(e, t, o) {
    return function (e, t, o) {
      var n = zA.parts.title($F(e, t, B.none(), o)),
          s = zA.parts.draghandle(qF()),
          r = zA.parts.close(GF(o)),
          a = [n].concat(e.draggable ? [s] : []).concat([r]);
      return xx.sketch({
        dom: HT('<div class="tox-dialog__header"></div>'),
        components: a
      });
    }({
      title: o.shared.providers.translate(e),
      draggable: o.dialog.isDraggableModal()
    }, t, o.shared.providers);
  },
      KF = function KF(e, t, o) {
    return {
      dom: {
        tag: "div",
        classes: ["tox-dialog__busy-spinner"],
        attributes: {
          "aria-label": o.translate(e)
        },
        styles: {
          left: "0px",
          right: "0px",
          bottom: "0px",
          top: "0px",
          position: "absolute"
        }
      },
      behaviours: t,
      components: [{
        dom: HT('<div class="tox-spinner"><div></div><div></div><div></div></div>')
      }]
    };
  },
      YF = function YF(e, t, o) {
    return {
      onClose: function onClose() {
        return o.closeWindow();
      },
      onBlock: function onBlock(o) {
        zA.setBusy(e(), function (e, n) {
          return KF(o.message, n, t);
        });
      },
      onUnblock: function onUnblock() {
        zA.setIdle(e());
      }
    };
  },
      JF = function JF(e, t, o, n) {
    var _eventOrder6;

    return Ga(jF(_objectSpread({}, e, {
      lazySink: n.shared.getSink,
      extraBehaviours: [cB.config({
        channel: "".concat(AF, "-").concat(e.id),
        updateState: function updateState(e, t) {
          return B.some(t);
        },
        initialData: t
      }), Fk({})].concat(_toConsumableArray(e.extraBehaviours)),
      onEscape: function onEscape(e) {
        xr(e, Rx);
      },
      dialogEvents: o,
      eventOrder: (_eventOrder6 = {}, _defineProperty(_eventOrder6, Zs(), [cB.name(), hl.name()]), _defineProperty(_eventOrder6, dr(), ["scroll-lock", cB.name(), "messages", "dialog-events", "alloy.base.behaviour"]), _defineProperty(_eventOrder6, ur(), ["alloy.base.behaviour", "dialog-events", "messages", cB.name(), "scroll-lock"]), _eventOrder6)
    })));
  },
      ZF = function ZF(e) {
    return P(e, function (e) {
      return "menu" === e.type ? function (e) {
        var t = P(e.items, function (e) {
          return _objectSpread({}, e, {
            storage: fs(!1)
          });
        });
        return _objectSpread({}, e, {
          items: t
        });
      }(e) : e;
    });
  },
      QF = function QF(e) {
    return j(e, function (e, t) {
      return "menu" === t.type ? j(t.items, function (e, t) {
        return e[t.name] = t.storage, e;
      }, e) : e;
    }, {});
  },
      eI = function eI(e, t) {
    return [Fr(Vs(), Wk), e(Ix, function (e, o) {
      t.onClose(), o.onClose();
    }), e(Rx, function (e, t, o, n) {
      t.onCancel(e), xr(n, Ix);
    }), Br(Px, function (e, o) {
      return t.onUnblock();
    }), Br(Hx, function (e, o) {
      return t.onBlock(o.event);
    })];
  },
      tI = function tI(e, t, o) {
    var n = function n(t, o) {
      return Br(t, function (t, n) {
        s(t, function (s, r) {
          o(e(), s, n.event, t);
        });
      });
    },
        s = function s(e, t) {
      cB.getState(e).get().each(function (o) {
        t(o.internalDialog, e);
      });
    };

    return [].concat(_toConsumableArray(eI(n, t)), [n(zx, function (e, t) {
      return t.onSubmit(e);
    }), n(Fx, function (e, t, o) {
      t.onChange(e, {
        name: o.name
      });
    }), n(Vx, function (e, t, n, s) {
      var r = function r() {
        return kp.focusIn(s);
      },
          a = function a(e) {
        return yt(e, "disabled") || vt(e, "aria-disabled").exists(function (e) {
          return "true" === e;
        });
      },
          i = it(s.element),
          l = yl(i);

      t.onAction(e, {
        name: n.name,
        value: n.value
      }), yl(i).fold(r, function (e) {
        a(e) || l.exists(function (t) {
          return $e(e, t) && a(t);
        }) ? r() : o().toOptional().filter(function (t) {
          return !$e(t.element, e);
        }).each(r);
      });
    }), n(Nx, function (e, t, o) {
      t.onTabChange(e, {
        newTabName: o.name,
        oldTabName: o.oldName
      });
    }), Hr(function (t) {
      var o = e();
      Zd.setValue(t, o.getData());
    })]);
  },
      oI = function oI(e, t) {
    var o = t.map(function (e) {
      return e.footerButtons;
    }).getOr([]),
        n = L(o, function (e) {
      return "start" === e.align;
    }),
        s = function s(e, t) {
      return xx.sketch({
        dom: {
          tag: "div",
          classes: ["tox-dialog__footer-".concat(e)]
        },
        components: P(t, function (e) {
          return e.memento.asSpec();
        })
      });
    };

    return [s("start", n.pass), s("end", n.fail)];
  },
      nI = function nI(e, t, o) {
    return {
      dom: HT('<div class="tox-dialog__footer"></div>'),
      components: [],
      behaviours: cl([cB.config({
        channel: "".concat(IF, "-").concat(t),
        initialData: e,
        updateState: function updateState(e, t) {
          var n = P(t.buttons, function (e) {
            var t = kh(function (e, t) {
              return PC(e, e.type, t);
            }(e, o));
            return {
              name: e.name,
              align: e.align,
              memento: t
            };
          });
          return B.some({
            lookupByName: function lookupByName(t) {
              return function (e, t, o) {
                return G(t, function (e) {
                  return e.name === o;
                }).bind(function (t) {
                  return t.memento.getOpt(e);
                });
              }(e, n, t);
            },
            footerButtons: n
          });
        },
        renderComponents: oI
      })])
    };
  },
      sI = function sI(e, t, o) {
    return zA.parts.footer(nI(e, t, o));
  },
      rI = function rI(e, t) {
    if (e.getRoot().getSystem().isConnected()) {
      var _o52 = rm.getCurrent(e.getFormWrapper()).getOr(e.getFormWrapper());

      return vk.getField(_o52, t).orThunk(function () {
        var o = e.getFooter();
        return cB.getState(o).get().bind(function (e) {
          return e.lookupByName(t);
        });
      });
    }

    return B.none();
  },
      aI = function aI(e, t, o) {
    var n = function n(t) {
      var o = e.getRoot();
      o.getSystem().isConnected() && t(o);
    },
        s = {
      getData: function getData() {
        var t = e.getRoot(),
            n = t.getSystem().isConnected() ? e.getFormWrapper() : t;
        return _objectSpread({}, Zd.getValue(n), {}, ce(o, function (e) {
          return e.get();
        }));
      },
      setData: function setData(t) {
        n(function (n) {
          var r = s.getData(),
              a = sn(r, t),
              i = function (e, t) {
            var o = e.getRoot();
            return cB.getState(o).get().map(function (e) {
              return zn(Vn("data", e.dataValidator, t));
            }).getOr(t);
          }(e, a),
              l = e.getFormWrapper();

          Zd.setValue(l, i), le(o, function (e, t) {
            ve(a, t) && e.set(a[t]);
          });
        });
      },
      setEnabled: function setEnabled(t, o) {
        rI(e, t).each(o ? ym.enable : ym.disable);
      },
      focus: function focus(t) {
        rI(e, t).each(Hp.focus);
      },
      block: function block(e) {
        if (!r(e)) throw new Error("The dialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
        n(function (t) {
          wr(t, Hx, {
            message: e
          });
        });
      },
      unblock: function unblock() {
        n(function (e) {
          xr(e, Px);
        });
      },
      showTab: function showTab(t) {
        n(function (o) {
          var n = e.getBody();
          cB.getState(n).get().exists(function (e) {
            return e.isTabPanel();
          }) && rm.getCurrent(n).each(function (e) {
            CF.showTab(e, t);
          });
        });
      },
      redial: function redial(o) {
        n(function (n) {
          var r = e.getId(),
              a = t(o);
          n.getSystem().broadcastOn(["".concat(AF, "-").concat(r)], a), n.getSystem().broadcastOn(["".concat(DF, "-").concat(r)], a.internalDialog), n.getSystem().broadcastOn(["".concat(FF, "-").concat(r)], a.internalDialog), n.getSystem().broadcastOn(["".concat(IF, "-").concat(r)], a.internalDialog), s.setData(a.initialData);
        });
      },
      close: function close() {
        n(function (e) {
          xr(e, Ix);
        });
      }
    };

    return s;
  };

  var iI = tinymce.util.Tools.resolve("tinymce.util.URI");

  var lI = ["insertContent", "setContent", "execCommand", "close", "block", "unblock"],
      cI = function cI(e) {
    return a(e) && -1 !== lI.indexOf(e.mceAction);
  },
      dI = function dI(e, t, o, n) {
    var s = Kr("dialog"),
        i = XF(e.title, s, n),
        l = function (e) {
      var t = {
        dom: {
          tag: "div",
          classes: ["tox-dialog__content-js"]
        },
        components: [{
          dom: {
            tag: "div",
            classes: ["tox-dialog__body-iframe"]
          },
          components: [Nk({
            dom: {
              tag: "iframe",
              attributes: {
                src: e.url
              }
            },
            behaviours: cl([Tx.config({}), Hp.config({})])
          })]
        }],
        behaviours: cl([kp.config({
          mode: "acyclic",
          useTabstopAt: k(Uk)
        })])
      };
      return zA.parts.body(t);
    }(e),
        c = e.buttons.bind(function (e) {
      return 0 === e.length ? B.none() : B.some(sI({
        buttons: e
      }, s, n));
    }),
        u = function (e, t) {
      var o = function o(t, _o53) {
        return Br(t, function (t, s) {
          n(t, function (n, r) {
            _o53(e(), n, s.event, t);
          });
        });
      },
          n = function n(e, t) {
        cB.getState(e).get().each(function (o) {
          t(o, e);
        });
      };

      return [].concat(_toConsumableArray(eI(o, t)), [o(Vx, function (e, t, o) {
        t.onAction(e, {
          name: o.name
        });
      })]);
    }(function () {
      return y;
    }, YF(function () {
      return v;
    }, n.shared.providers, t)),
        m = _objectSpread({}, e.height.fold(function () {
      return {};
    }, function (e) {
      return {
        height: e + "px",
        "max-height": e + "px"
      };
    }), {}, e.width.fold(function () {
      return {};
    }, function (e) {
      return {
        width: e + "px",
        "max-width": e + "px"
      };
    })),
        g = e.width.isNone() && e.height.isNone() ? ["tox-dialog--width-lg"] : [],
        p = new iI(e.url, {
      base_uri: new iI(window.location.href)
    }),
        h = "".concat(p.protocol, "://").concat(p.host).concat(p.port ? ":" + p.port : ""),
        f = zl(),
        b = [Fp("messages", [zr(function () {
      var t = Nl(Ie(window), "message", function (t) {
        if (p.isSameOrigin(new iI(t.raw.origin))) {
          var _n45 = t.raw.data;
          cI(_n45) ? function (e, t, o) {
            switch (o.mceAction) {
              case "insertContent":
                e.insertContent(o.content);
                break;

              case "setContent":
                e.setContent(o.content);
                break;

              case "execCommand":
                var _n46 = !!d(o.ui) && o.ui;

                e.execCommand(o.cmd, _n46, o.value);
                break;

              case "close":
                t.close();
                break;

              case "block":
                t.block(o.message);
                break;

              case "unblock":
                t.unblock();
            }
          }(o, y, _n45) : function (e) {
            return !cI(e) && a(e) && ve(e, "mceAction");
          }(_n45) && e.onMessage(y, _n45);
        }
      });
      f.set(t);
    }), Hr(f.clear)]), hl.config({
      channels: _defineProperty({}, RF, {
        onReceive: function onReceive(e, t) {
          ei(e.element, "iframe").each(function (e) {
            e.dom.contentWindow.postMessage(t, h);
          });
        }
      })
    })],
        v = JF({
      id: s,
      header: i,
      body: l,
      footer: c,
      extraClasses: g,
      extraBehaviours: b,
      extraStyles: m
    }, e, u, n),
        y = function (e) {
      var t = function t(_t53) {
        e.getSystem().isConnected() && _t53(e);
      };

      return {
        block: function block(e) {
          if (!r(e)) throw new Error("The urlDialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
          t(function (t) {
            wr(t, Hx, {
              message: e
            });
          });
        },
        unblock: function unblock() {
          t(function (e) {
            xr(e, Px);
          });
        },
        close: function close() {
          t(function (e) {
            xr(e, Ix);
          });
        },
        sendMessage: function sendMessage(e) {
          t(function (t) {
            t.getSystem().broadcastOn([RF], e);
          });
        }
      };
    }(v);

    return {
      dialog: v,
      instanceApi: y
    };
  },
      uI = function uI(e, t, o) {
    return t && o ? [] : [U_.config({
      contextual: {
        lazyContext: function lazyContext() {
          return B.some(Wo(Ie(e.getContentAreaContainer())));
        },
        fadeInClass: "tox-dialog-dock-fadein",
        fadeOutClass: "tox-dialog-dock-fadeout",
        transitionClass: "tox-dialog-dock-transition"
      },
      modes: ["top"]
    })];
  },
      mI = function mI(e) {
    var t = e.backstage,
        o = e.editor,
        n = zf(o),
        s = function (e) {
      var t = e.backstage.shared;
      return {
        open: function open(o, n) {
          var s = function s() {
            zA.hide(l), n();
          },
              r = kh(PC({
            name: "close-alert",
            text: "OK",
            primary: !0,
            buttonType: B.some("primary"),
            align: "end",
            enabled: !0,
            icon: B.none()
          }, "cancel", e.backstage)),
              a = NF(),
              i = PF(s, t.providers),
              l = Ga(jF({
            lazySink: function lazySink() {
              return t.getSink();
            },
            header: HF(a, i),
            body: LF(o, t.providers),
            footer: B.some(WF(UF([], [r.asSpec()]))),
            onEscape: s,
            extraClasses: ["tox-alert-dialog"],
            extraBehaviours: [],
            extraStyles: {},
            dialogEvents: [Br(Rx, s)],
            eventOrder: {}
          }));

          zA.show(l);
          var c = r.get(l);
          Hp.focus(c);
        }
      };
    }(e),
        r = function (e) {
      var t = e.backstage.shared;
      return {
        open: function open(o, n) {
          var s = function s(e) {
            zA.hide(c), n(e);
          },
              r = kh(PC({
            name: "yes",
            text: "Yes",
            primary: !0,
            buttonType: B.some("primary"),
            align: "end",
            enabled: !0,
            icon: B.none()
          }, "submit", e.backstage)),
              a = PC({
            name: "no",
            text: "No",
            primary: !1,
            buttonType: B.some("secondary"),
            align: "end",
            enabled: !0,
            icon: B.none()
          }, "cancel", e.backstage),
              i = NF(),
              l = PF(function () {
            return s(!1);
          }, t.providers),
              c = Ga(jF({
            lazySink: function lazySink() {
              return t.getSink();
            },
            header: HF(i, l),
            body: LF(o, t.providers),
            footer: B.some(WF(UF([], [a, r.asSpec()]))),
            onEscape: function onEscape() {
              return s(!1);
            },
            extraClasses: ["tox-confirm-dialog"],
            extraBehaviours: [],
            extraStyles: {},
            dialogEvents: [Br(Rx, function () {
              return s(!1);
            }), Br(zx, function () {
              return s(!0);
            })],
            eventOrder: {}
          }));

          zA.show(c);
          var d = r.get(c);
          Hp.focus(d);
        }
      };
    }(e),
        a = function a(e, o) {
      return uF.open(function (e, n, s) {
        var r = n,
            a = function (e, t, o) {
          var n = Kr("dialog"),
              s = e.internalDialog,
              r = XF(s.title, n, o),
              a = function (e, t, o) {
            var n = VF(e, t, B.none(), o, !1);
            return zA.parts.body(n);
          }({
            body: s.body,
            initialData: s.initialData
          }, n, o),
              i = ZF(s.buttons),
              l = QF(i),
              c = sI({
            buttons: i
          }, n, o),
              d = tI(function () {
            return h;
          }, YF(function () {
            return g;
          }, o.shared.providers, t), o.shared.getSink),
              u = function (e) {
            switch (e) {
              case "large":
                return ["tox-dialog--width-lg"];

              case "medium":
                return ["tox-dialog--width-md"];

              default:
                return [];
            }
          }(s.size),
              m = {
            id: n,
            header: r,
            body: a,
            footer: B.some(c),
            extraClasses: u,
            extraBehaviours: [],
            extraStyles: {}
          },
              g = JF(m, e, d, o),
              p = {
            getId: y(n),
            getRoot: y(g),
            getBody: function getBody() {
              return zA.getBody(g);
            },
            getFooter: function getFooter() {
              return zA.getFooter(g);
            },
            getFormWrapper: function getFormWrapper() {
              var e = zA.getBody(g);
              return rm.getCurrent(e).getOr(e);
            }
          },
              h = aI(p, t.redial, l);

          return {
            dialog: g,
            instanceApi: h
          };
        }({
          dataValidator: s,
          initialData: r,
          internalDialog: e
        }, {
          redial: uF.redial,
          closeWindow: function closeWindow() {
            zA.hide(a.dialog), o(a.instanceApi);
          }
        }, t);

        return zA.show(a.dialog), a.instanceApi.setData(r), a.instanceApi;
      }, e);
    },
        i = function i(e, s, r, a) {
      return uF.open(function (e, i, l) {
        var c = zn(Vn("data", l, i)),
            d = Hl(),
            u = t.shared.header.isPositionedAtTop(),
            m = function m() {
          return d.on(function (e) {
            xh.reposition(e), U_.refresh(e);
          });
        },
            g = function (e, t, o, n) {
          var _eventOrder7;

          var s = Kr("dialog"),
              r = Kr("dialog-label"),
              a = Kr("dialog-content"),
              i = e.internalDialog,
              l = kh(function (e, t, o, n) {
            return xx.sketch({
              dom: HT('<div class="tox-dialog__header"></div>'),
              components: [$F(e, t, B.some(o), n), qF(), GF(n)],
              containerBehaviours: cl([SA.config({
                mode: "mouse",
                blockerClass: "blocker",
                getTarget: function getTarget(e) {
                  return ti(e, '[role="dialog"]').getOrDie();
                },
                snaps: {
                  getSnapPoints: function getSnapPoints() {
                    return [];
                  },
                  leftAttr: "data-drag-left",
                  topAttr: "data-drag-top"
                }
              })])
            });
          }({
            title: i.title,
            draggable: !0
          }, s, r, o.shared.providers)),
              c = kh(function (e, t, o, n, s) {
            return VF(e, t, B.some(o), n, s);
          }({
            body: i.body,
            initialData: i.initialData
          }, s, a, o, n)),
              d = ZF(i.buttons),
              u = QF(d),
              m = kh(function (e, t, o) {
            return nI(e, t, o);
          }({
            buttons: d
          }, s, o)),
              g = tI(function () {
            return h;
          }, {
            onBlock: function onBlock(e) {
              zT.block(p, function (t, n) {
                return KF(e.message, n, o.shared.providers);
              });
            },
            onUnblock: function onUnblock() {
              zT.unblock(p);
            },
            onClose: function onClose() {
              return t.closeWindow();
            }
          }, o.shared.getSink),
              p = Ga({
            dom: {
              tag: "div",
              classes: ["tox-dialog", "tox-dialog-inline"],
              attributes: {
                role: "dialog",
                "aria-labelledby": r,
                "aria-describedby": a
              }
            },
            eventOrder: (_eventOrder7 = {}, _defineProperty(_eventOrder7, Zs(), [cB.name(), hl.name()]), _defineProperty(_eventOrder7, Qs(), ["execute-on-form"]), _defineProperty(_eventOrder7, dr(), ["reflecting", "execute-on-form"]), _eventOrder7),
            behaviours: cl([kp.config({
              mode: "cyclic",
              onEscape: function onEscape(e) {
                return xr(e, Ix), B.some(!0);
              },
              useTabstopAt: function useTabstopAt(e) {
                return !Uk(e) && ("button" !== Ve(e) || "disabled" !== bt(e, "disabled"));
              }
            }), cB.config({
              channel: "".concat(AF, "-").concat(s),
              updateState: function updateState(e, t) {
                return B.some(t);
              },
              initialData: e
            }), Hp.config({}), Fp("execute-on-form", g.concat([Vr(Vs(), function (e, t) {
              kp.focusIn(e);
            })])), zT.config({
              getRoot: function getRoot() {
                return B.some(p);
              }
            }), Dp.config({}), Fk({})]),
            components: [l.asSpec(), c.asSpec(), m.asSpec()]
          }),
              h = aI({
            getId: y(s),
            getRoot: y(p),
            getFooter: function getFooter() {
              return m.get(p);
            },
            getBody: function getBody() {
              return c.get(p);
            },
            getFormWrapper: function getFormWrapper() {
              var e = c.get(p);
              return rm.getCurrent(e).getOr(e);
            }
          }, t.redial, u);
          return {
            dialog: p,
            instanceApi: h
          };
        }({
          dataValidator: l,
          initialData: c,
          internalDialog: e
        }, {
          redial: uF.redial,
          closeWindow: function closeWindow() {
            d.on(xh.hide), o.off("ResizeEditor", m), d.clear(), r(g.instanceApi);
          }
        }, t, a),
            p = Ga(xh.sketch(_objectSpread({
          lazySink: t.shared.getSink,
          dom: {
            tag: "div",
            classes: []
          },
          fireDismissalEventInstead: {}
        }, u ? {} : {
          fireRepositionEventInstead: {}
        }, {
          inlineBehaviours: cl([Fp("window-manager-inline-events", [Br(mr(), function (e, t) {
            xr(g.dialog, Rx);
          })])].concat(_toConsumableArray(uI(o, n, u)))),
          isExtraPart: function isExtraPart(e, t) {
            return function (e) {
              return dx(e, ".tox-alert-dialog") || dx(e, ".tox-confirm-dialog");
            }(t);
          }
        })));

        return d.set(p), xh.showWithin(p, $a(g.dialog), {
          anchor: s
        }, B.some(mt())), n && u || (U_.refresh(p), o.on("ResizeEditor", m)), g.instanceApi.setData(c), kp.focusIn(g.dialog), g.instanceApi;
      }, e);
    };

    return {
      open: function open(e, o, n) {
        return void 0 !== o && "toolbar" === o.inline ? i(e, t.shared.anchors.inlineDialog(), n, o.ariaAttrs) : void 0 !== o && "cursor" === o.inline ? i(e, t.shared.anchors.cursor(), n, o.ariaAttrs) : a(e, n);
      },
      openUrl: function openUrl(e, n) {
        return function (e, n) {
          return uF.openUrl(function (e) {
            var s = dI(e, {
              closeWindow: function closeWindow() {
                zA.hide(s.dialog), n(s.instanceApi);
              }
            }, o, t);
            return zA.show(s.dialog), s.instanceApi;
          }, e);
        }(e, n);
      },
      alert: function alert(e, t) {
        s.open(e, function () {
          t();
        });
      },
      close: function close(e) {
        e.close();
      },
      confirm: function confirm(e, t) {
        r.open(e, function (e) {
          t(e);
        });
      }
    };
  };

  E.add("silver", function (e) {
    (function (e) {
      Uh(e), function (e) {
        var t = e.options.register;
        var o;
        t("color_map", {
          processor: function processor(e) {
            return f(e, r) ? {
              value: Fy(e),
              valid: !0
            } : {
              valid: !1,
              message: "Must be an array of strings."
            };
          },
          "default": ["#BFEDD2", "Light Green", "#FBEEB8", "Light Yellow", "#F8CAC6", "Light Red", "#ECCAFA", "Light Purple", "#C2E0F4", "Light Blue", "#2DC26B", "Green", "#F1C40F", "Yellow", "#E03E2D", "Red", "#B96AD9", "Purple", "#3598DB", "Blue", "#169179", "Dark Turquoise", "#E67E23", "Orange", "#BA372A", "Dark Red", "#843FA1", "Dark Purple", "#236FA1", "Dark Blue", "#ECF0F1", "Light Gray", "#CED4D9", "Medium Gray", "#95A5A6", "Gray", "#7E8C8D", "Dark Gray", "#34495E", "Navy Blue", "#000000", "Black", "#ffffff", "White"]
        }), t("color_cols", {
          processor: "number",
          "default": (o = zy(e).length, Math.max(5, Math.ceil(Math.sqrt(o))))
        }), t("custom_colors", {
          processor: "boolean",
          "default": !0
        });
      }(e), function (e) {
        var t = e.options.register;
        t("contextmenu_avoid_overlap", {
          processor: "string",
          "default": ""
        }), t("contextmenu_never_use_native", {
          processor: "boolean",
          "default": !1
        }), t("contextmenu", {
          processor: function processor(e) {
            return !1 === e ? {
              value: [],
              valid: !0
            } : r(e) || f(e, r) ? {
              value: bM(e),
              valid: !0
            } : {
              valid: !1,
              message: "Must be false or a string."
            };
          },
          "default": "link linkchecker image editimage table spellchecker configurepermanentpen"
        });
      }(e);
    })(e);

    var _FA = FA(e),
        t = _FA.getUiMothership,
        o = _FA.backstage,
        n = _FA.renderUI;

    cx(e, o.shared);
    var s = mI({
      editor: e,
      backstage: o
    });
    return {
      renderUI: n,
      getWindowManagerImpl: y(s),
      getNotificationManagerImpl: function getNotificationManagerImpl() {
        return function (e, t, o) {
          var n = t.backstage.shared,
              s = function s() {
            var t = Wo(Ie(e.getContentAreaContainer())),
                o = jo(),
                n = Ri(o.x, t.x, t.right),
                s = Ri(o.y, t.y, t.bottom),
                r = Math.max(t.right, o.right),
                a = Math.max(t.bottom, o.bottom);
            return B.some(Lo(n, s, r - n, a - s));
          };

          return {
            open: function open(t, r) {
              var a = function a() {
                r(), xh.hide(l);
              },
                  i = Ga(Rh.sketch({
                text: t.text,
                level: R(["success", "error", "warning", "warn", "info"], t.type) ? t.type : void 0,
                progress: !0 === t.progressBar,
                icon: B.from(t.icon),
                closeButton: t.closeButton,
                onAction: a,
                iconProvider: n.providers.icons,
                translationProvider: n.providers.translate
              })),
                  l = Ga(xh.sketch(_objectSpread({
                dom: {
                  tag: "div",
                  classes: ["tox-notifications-container"]
                },
                lazySink: n.getSink,
                fireDismissalEventInstead: {}
              }, n.header.isPositionedAtTop() ? {} : {
                fireRepositionEventInstead: {}
              })));

              o.add(l), t.timeout > 0 && wh.setEditorTimeout(e, function () {
                a();
              }, t.timeout);
              var c = {
                close: a,
                reposition: function reposition() {
                  var t = $a(i),
                      o = {
                    maxHeightFunction: Xl()
                  },
                      r = e.notificationManager.getNotifications();

                  if (r[0] === c) {
                    var _e31 = _objectSpread({}, n.anchors.banner(), {
                      overrides: o
                    });

                    xh.showWithinBounds(l, t, {
                      anchor: _e31
                    }, s);
                  } else I(r, c).each(function (e) {
                    var n = r[e - 1].getEl(),
                        a = {
                      type: "node",
                      root: mt(),
                      node: B.some(Ie(n)),
                      overrides: o,
                      layouts: {
                        onRtl: function onRtl() {
                          return [Ki];
                        },
                        onLtr: function onLtr() {
                          return [Ki];
                        }
                      }
                    };
                    xh.showWithinBounds(l, t, {
                      anchor: a
                    }, s);
                  });
                },
                text: function text(e) {
                  Rh.updateText(i, e);
                },
                settings: t,
                getEl: function getEl() {
                  return i.element.dom;
                },
                progressBar: {
                  value: function value(e) {
                    Rh.updateProgress(i, e);
                  }
                }
              };
              return c;
            },
            close: function close(e) {
              e.close();
            },
            getArgs: function getArgs(e) {
              return e.settings;
            }
          };
        }(e, {
          backstage: o
        }, t());
      }
    };
  });
}();