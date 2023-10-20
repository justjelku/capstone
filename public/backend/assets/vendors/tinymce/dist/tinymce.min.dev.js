"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var e = function e(_e2) {
    if (null === _e2) return "null";
    if (void 0 === _e2) return "undefined";

    var t = _typeof(_e2);

    return "object" === t && (Array.prototype.isPrototypeOf(_e2) || _e2.constructor && "Array" === _e2.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(_e2) || _e2.constructor && "String" === _e2.constructor.name) ? "string" : t;
  },
      t = function t(e) {
    return {
      eq: e
    };
  },
      n = t(function (e, t) {
    return e === t;
  }),
      o = function o(e) {
    return t(function (t, n) {
      if (t.length !== n.length) return !1;

      for (var o = t.length, r = 0; r < o; r++) {
        if (!e.eq(t[r], n[r])) return !1;
      }

      return !0;
    });
  },
      r = function r(e) {
    return t(function (r, s) {
      var a = Object.keys(r),
          i = Object.keys(s);
      if (!function (e, n) {
        return function (e, n) {
          return t(function (t, o) {
            return e.eq(n(t), n(o));
          });
        }(o(e), function (e) {
          return function (e, t) {
            return Array.prototype.slice.call(e).sort(t);
          }(e, n);
        });
      }(n).eq(a, i)) return !1;

      for (var l = a.length, d = 0; d < l; d++) {
        var c = a[d];
        if (!e.eq(r[c], s[c])) return !1;
      }

      return !0;
    });
  },
      s = t(function (t, n) {
    if (t === n) return !0;
    var a = e(t);
    return a === e(n) && (function (e) {
      return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e);
    }(a) ? t === n : "array" === a ? o(s).eq(t, n) : "object" === a && r(s).eq(t, n));
  });

  var a = Object.getPrototypeOf,
      i = function i(e, t, n) {
    var o;
    return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name;
  },
      l = function l(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, function (e, t) {
          return t.isPrototypeOf(e);
        }) ? "string" : t;
      }(t) === e;
    };
  },
      d = function d(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      c = function c(e) {
    return function (t) {
      return e === t;
    };
  },
      u = function u(e, t) {
    return f(e) && i(e, t, function (e, t) {
      return a(e) === t;
    });
  },
      m = l("string"),
      f = l("object"),
      g = function g(e) {
    return u(e, Object);
  },
      p = l("array"),
      h = c(null),
      b = d("boolean"),
      v = c(void 0),
      y = function y(e) {
    return null == e;
  },
      C = function C(e) {
    return !y(e);
  },
      w = d("function"),
      x = d("number"),
      k = function k(e, t) {
    if (p(e)) {
      for (var _n2 = 0, _o2 = e.length; _n2 < _o2; ++_n2) {
        if (!t(e[_n2])) return !1;
      }

      return !0;
    }

    return !1;
  },
      S = function S() {},
      _ = function _(e, t) {
    return function () {
      for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
      }

      return e(t.apply(null, n));
    };
  },
      E = function E(e, t) {
    return function (n) {
      return e(t(n));
    };
  },
      N = function N(e) {
    return function () {
      return e;
    };
  },
      R = function R(e) {
    return e;
  },
      A = function A(e, t) {
    return e === t;
  };

  function O(e) {
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, n = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        n[_key3] = arguments[_key3];
      }

      var o = t.concat(n);
      return e.apply(null, o);
    };
  }

  var T = function T(e) {
    return function (t) {
      return !e(t);
    };
  },
      B = function B(e) {
    return e();
  },
      D = function D(e) {
    e();
  },
      P = N(!1),
      L = N(!0);

  var M =
  /*#__PURE__*/
  function () {
    function M(e, t) {
      _classCallCheck(this, M);

      this.tag = e, this.value = t;
    }

    _createClass(M, [{
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
        return this.tag ? M.some(e(this.value)) : M.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : M.none();
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
        return !this.tag || e(this.value) ? this : M.none();
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
        return new M(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return M.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return C(e) ? M.some(e) : M.none();
      }
    }]);

    return M;
  }();

  M.singletonNone = new M(!1);

  var I = Array.prototype.slice,
      F = Array.prototype.indexOf,
      U = Array.prototype.push,
      z = function z(e, t) {
    return F.call(e, t);
  },
      j = function j(e, t) {
    return z(e, t) > -1;
  },
      V = function V(e, t) {
    for (var _n3 = 0, _o3 = e.length; _n3 < _o3; _n3++) {
      if (t(e[_n3], _n3)) return !0;
    }

    return !1;
  },
      H = function H(e, t) {
    var n = e.length,
        o = new Array(n);

    for (var _r2 = 0; _r2 < n; _r2++) {
      var _n4 = e[_r2];
      o[_r2] = t(_n4, _r2);
    }

    return o;
  },
      $ = function $(e, t) {
    for (var _n5 = 0, _o4 = e.length; _n5 < _o4; _n5++) {
      t(e[_n5], _n5);
    }
  },
      q = function q(e, t) {
    for (var _n6 = e.length - 1; _n6 >= 0; _n6--) {
      t(e[_n6], _n6);
    }
  },
      W = function W(e, t) {
    var n = [],
        o = [];

    for (var _r3 = 0, _s2 = e.length; _r3 < _s2; _r3++) {
      var _s3 = e[_r3];
      (t(_s3, _r3) ? n : o).push(_s3);
    }

    return {
      pass: n,
      fail: o
    };
  },
      K = function K(e, t) {
    var n = [];

    for (var _o5 = 0, _r4 = e.length; _o5 < _r4; _o5++) {
      var _r5 = e[_o5];
      t(_r5, _o5) && n.push(_r5);
    }

    return n;
  },
      G = function G(e, t, n) {
    return q(e, function (e, o) {
      n = t(n, e, o);
    }), n;
  },
      Y = function Y(e, t, n) {
    return $(e, function (e, o) {
      n = t(n, e, o);
    }), n;
  },
      X = function X(e, t, n) {
    for (var _o6 = 0, _r6 = e.length; _o6 < _r6; _o6++) {
      var _r7 = e[_o6];
      if (t(_r7, _o6)) return M.some(_r7);
      if (n(_r7, _o6)) break;
    }

    return M.none();
  },
      Q = function Q(e, t) {
    return X(e, t, P);
  },
      J = function J(e, t) {
    for (var _n7 = 0, _o7 = e.length; _n7 < _o7; _n7++) {
      if (t(e[_n7], _n7)) return M.some(_n7);
    }

    return M.none();
  },
      Z = function Z(e) {
    var t = [];

    for (var _n8 = 0, _o8 = e.length; _n8 < _o8; ++_n8) {
      if (!p(e[_n8])) throw new Error("Arr.flatten item " + _n8 + " was not an array, input: " + e);
      U.apply(t, e[_n8]);
    }

    return t;
  },
      ee = function ee(e, t) {
    return Z(H(e, t));
  },
      te = function te(e, t) {
    for (var _n9 = 0, _o9 = e.length; _n9 < _o9; ++_n9) {
      if (!0 !== t(e[_n9], _n9)) return !1;
    }

    return !0;
  },
      ne = function ne(e) {
    var t = I.call(e, 0);
    return t.reverse(), t;
  },
      oe = function oe(e, t) {
    return K(e, function (e) {
      return !j(t, e);
    });
  },
      re = function re(e, t) {
    var n = {};

    for (var _o10 = 0, _r8 = e.length; _o10 < _r8; _o10++) {
      var _r9 = e[_o10];
      n[String(_r9)] = t(_r9, _o10);
    }

    return n;
  },
      se = function se(e, t) {
    var n = I.call(e, 0);
    return n.sort(t), n;
  },
      ae = function ae(e, t) {
    return t >= 0 && t < e.length ? M.some(e[t]) : M.none();
  },
      ie = function ie(e) {
    return ae(e, 0);
  },
      le = function le(e) {
    return ae(e, e.length - 1);
  },
      de = w(Array.from) ? Array.from : function (e) {
    return I.call(e);
  },
      ce = function ce(e, t) {
    for (var _n10 = 0; _n10 < e.length; _n10++) {
      var _o11 = t(e[_n10], _n10);

      if (_o11.isSome()) return _o11;
    }

    return M.none();
  },
      ue = Object.keys,
      me = Object.hasOwnProperty,
      fe = function fe(e, t) {
    var n = ue(e);

    for (var _o12 = 0, _r10 = n.length; _o12 < _r10; _o12++) {
      var _r11 = n[_o12];
      t(e[_r11], _r11);
    }
  },
      ge = function ge(e, t) {
    return pe(e, function (e, n) {
      return {
        k: n,
        v: t(e, n)
      };
    });
  },
      pe = function pe(e, t) {
    var n = {};
    return fe(e, function (e, o) {
      var r = t(e, o);
      n[r.k] = r.v;
    }), n;
  },
      he = function he(e) {
    return function (t, n) {
      e[n] = t;
    };
  },
      be = function be(e, t, n, o) {
    return fe(e, function (e, r) {
      (t(e, r) ? n : o)(e, r);
    }), {};
  },
      ve = function ve(e, t) {
    var n = {};
    return be(e, t, he(n), S), n;
  },
      ye = function ye(e, t) {
    var n = [];
    return fe(e, function (e, o) {
      n.push(t(e, o));
    }), n;
  },
      Ce = function Ce(e) {
    return ye(e, R);
  },
      we = function we(e, t) {
    return xe(e, t) ? M.from(e[t]) : M.none();
  },
      xe = function xe(e, t) {
    return me.call(e, t);
  },
      ke = function ke(e, t) {
    return xe(e, t) && void 0 !== e[t] && null !== e[t];
  },
      Se = function Se(e) {
    var t = {};
    return $(e, function (e) {
      t[e] = {};
    }), ue(t);
  },
      _e = Array.isArray,
      Ee = function Ee(e, t, n) {
    var o, r;
    if (!e) return !1;

    if (n = n || e, void 0 !== e.length) {
      for (o = 0, r = e.length; o < r; o++) {
        if (!1 === t.call(n, e[o], o, e)) return !1;
      }
    } else for (o in e) {
      if (xe(e, o) && !1 === t.call(n, e[o], o, e)) return !1;
    }

    return !0;
  },
      Ne = function Ne(e, t) {
    var n = [];
    return Ee(e, function (o, r) {
      n.push(t(o, r, e));
    }), n;
  },
      Re = function Re(e, t) {
    var n = [];
    return Ee(e, function (o, r) {
      t && !t(o, r, e) || n.push(o);
    }), n;
  },
      Ae = function Ae(e, t) {
    if (e) for (var _n11 = 0, _o13 = e.length; _n11 < _o13; _n11++) {
      if (e[_n11] === t) return _n11;
    }
    return -1;
  },
      Oe = function Oe(e, t, n, o) {
    var r = v(n) ? e[0] : n;

    for (var _n12 = 0; _n12 < e.length; _n12++) {
      r = t.call(o, r, e[_n12], _n12);
    }

    return r;
  },
      Te = function Te(e, t, n) {
    var o, r;

    for (o = 0, r = e.length; o < r; o++) {
      if (t.call(n, e[o], o, e)) return o;
    }

    return -1;
  },
      Be = function Be(e) {
    return e[e.length - 1];
  },
      De = function De(e) {
    var t,
        n = !1;
    return function () {
      for (var _len4 = arguments.length, o = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        o[_key4] = arguments[_key4];
      }

      return n || (n = !0, t = e.apply(null, o)), t;
    };
  },
      Pe = function Pe() {
    return Le(0, 0);
  },
      Le = function Le(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      Me = {
    nu: Le,
    detect: function detect(e, t) {
      var n = String(t).toLowerCase();
      return 0 === e.length ? Pe() : function (e, t) {
        var n = function (e, t) {
          for (var _n13 = 0; _n13 < e.length; _n13++) {
            var _o14 = e[_n13];
            if (_o14.test(t)) return _o14;
          }
        }(e, t);

        if (!n) return {
          major: 0,
          minor: 0
        };

        var o = function o(e) {
          return Number(t.replace(n, "$" + e));
        };

        return Le(o(1), o(2));
      }(e, n);
    },
    unknown: Pe
  },
      Ie = function Ie(e, t) {
    var n = String(t).toLowerCase();
    return Q(e, function (e) {
      return e.search(n);
    });
  },
      Fe = function Fe(e, t, n) {
    return "" === t || e.length >= t.length && e.substr(n, n + t.length) === t;
  },
      Ue = function Ue(e, t) {
    return -1 !== e.indexOf(t);
  },
      ze = function ze(e, t) {
    return Fe(e, t, 0);
  },
      je = function je(e, t) {
    return Fe(e, t, e.length - t.length);
  },
      Ve = function Ve(e) {
    return function (t) {
      return t.replace(e, "");
    };
  },
      He = Ve(/^\s+|\s+$/g),
      $e = Ve(/^\s+/g),
      qe = Ve(/\s+$/g),
      We = function We(e) {
    return e.length > 0;
  },
      Ke = function Ke(e) {
    return !We(e);
  },
      Ge = function Ge(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var n = parseInt(e, t);
    return isNaN(n) ? M.none() : M.some(n);
  },
      Ye = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Xe = function Xe(e) {
    return function (t) {
      return Ue(t, e);
    };
  },
      Qe = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return Ue(e, "edge/") && Ue(e, "chrome") && Ue(e, "safari") && Ue(e, "applewebkit");
    }
  }, {
    name: "Chromium",
    brand: "Chromium",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ye],
    search: function search(e) {
      return Ue(e, "chrome") && !Ue(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return Ue(e, "msie") || Ue(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [Ye, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Xe("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Xe("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Ye, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (Ue(e, "safari") || Ue(e, "mobile/")) && Ue(e, "applewebkit");
    }
  }],
      Je = [{
    name: "Windows",
    search: Xe("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return Ue(e, "iphone") || Ue(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Xe("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "macOS",
    search: Xe("mac os x"),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Xe("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Xe("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Xe("freebsd"),
    versionRegexes: []
  }, {
    name: "ChromeOS",
    search: Xe("cros"),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }],
      Ze = {
    browsers: N(Qe),
    oses: N(Je)
  },
      et = "Edge",
      tt = "Chromium",
      nt = "Opera",
      ot = "Firefox",
      rt = "Safari",
      st = function st(e) {
    var t = e.current,
        n = e.version,
        o = function o(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isEdge: o(et),
      isChromium: o(tt),
      isIE: o("IE"),
      isOpera: o(nt),
      isFirefox: o(ot),
      isSafari: o(rt)
    };
  },
      at = function at() {
    return st({
      current: void 0,
      version: Me.unknown()
    });
  },
      it = st,
      lt = (N(et), N(tt), N("IE"), N(nt), N(ot), N(rt), "Windows"),
      dt = "Android",
      ct = "Linux",
      ut = "macOS",
      mt = "Solaris",
      ft = "FreeBSD",
      gt = "ChromeOS",
      pt = function pt(e) {
    var t = e.current,
        n = e.version,
        o = function o(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isWindows: o(lt),
      isiOS: o("iOS"),
      isAndroid: o(dt),
      isMacOS: o(ut),
      isLinux: o(ct),
      isSolaris: o(mt),
      isFreeBSD: o(ft),
      isChromeOS: o(gt)
    };
  },
      ht = function ht() {
    return pt({
      current: void 0,
      version: Me.unknown()
    });
  },
      bt = pt,
      vt = (N(lt), N("iOS"), N(dt), N(ct), N(ut), N(mt), N(ft), N(gt), function (e) {
    return window.matchMedia(e).matches;
  });

  var yt = De(function () {
    return function (e, t, n) {
      var o = Ze.browsers(),
          r = Ze.oses(),
          s = t.bind(function (e) {
        return function (e, t) {
          return ce(t.brands, function (t) {
            var n = t.brand.toLowerCase();
            return Q(e, function (e) {
              var t;
              return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
            }).map(function (e) {
              return {
                current: e.name,
                version: Me.nu(parseInt(t.version, 10), 0)
              };
            });
          });
        }(o, e);
      }).orThunk(function () {
        return function (e, t) {
          return Ie(e, t).map(function (e) {
            var n = Me.detect(e.versionRegexes, t);
            return {
              current: e.name,
              version: n
            };
          });
        }(o, e);
      }).fold(at, it),
          a = function (e, t) {
        return Ie(e, t).map(function (e) {
          var n = Me.detect(e.versionRegexes, t);
          return {
            current: e.name,
            version: n
          };
        });
      }(r, e).fold(ht, bt),
          i = function (e, t, n, o) {
        var r = e.isiOS() && !0 === /ipad/i.test(n),
            s = e.isiOS() && !r,
            a = e.isiOS() || e.isAndroid(),
            i = a || o("(pointer:coarse)"),
            l = r || !s && a && o("(min-device-width:768px)"),
            d = s || a && !l,
            c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
            u = !d && !l && !c;
        return {
          isiPad: N(r),
          isiPhone: N(s),
          isTablet: N(l),
          isPhone: N(d),
          isTouch: N(i),
          isAndroid: e.isAndroid,
          isiOS: e.isiOS,
          isWebView: N(c),
          isDesktop: N(u)
        };
      }(a, s, e, n);

      return {
        browser: s,
        os: a,
        deviceType: i
      };
    }(navigator.userAgent, M.from(navigator.userAgentData), vt);
  });

  var Ct = function Ct() {
    return yt();
  },
      wt = navigator.userAgent,
      xt = Ct(),
      kt = xt.browser,
      St = xt.os,
      _t = xt.deviceType,
      Et = -1 !== wt.indexOf("Windows Phone"),
      Nt = {
    transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    documentMode: kt.isIE() ? document.documentMode || 7 : 10,
    cacheSuffix: null,
    container: null,
    canHaveCSP: !kt.isIE(),
    windowsPhone: Et,
    browser: {
      current: kt.current,
      version: kt.version,
      isChromium: kt.isChromium,
      isEdge: kt.isEdge,
      isFirefox: kt.isFirefox,
      isIE: kt.isIE,
      isOpera: kt.isOpera,
      isSafari: kt.isSafari
    },
    os: {
      current: St.current,
      version: St.version,
      isAndroid: St.isAndroid,
      isChromeOS: St.isChromeOS,
      isFreeBSD: St.isFreeBSD,
      isiOS: St.isiOS,
      isLinux: St.isLinux,
      isMacOS: St.isMacOS,
      isSolaris: St.isSolaris,
      isWindows: St.isWindows
    },
    deviceType: {
      isDesktop: _t.isDesktop,
      isiPad: _t.isiPad,
      isiPhone: _t.isiPhone,
      isPhone: _t.isPhone,
      isTablet: _t.isTablet,
      isTouch: _t.isTouch,
      isWebView: _t.isWebView
    }
  },
      Rt = /^\s*|\s*$/g,
      At = function At(e) {
    return null == e ? "" : ("" + e).replace(Rt, "");
  },
      Ot = function Ot(e, t) {
    return t ? !("array" !== t || !_e(e)) || _typeof(e) === t : void 0 !== e;
  },
      Tt = function Tt(e, t, n, o) {
    o = o || this, e && (n && (e = e[n]), Ee(e, function (e, r) {
      if (!1 === t.call(o, e, r, n)) return !1;
      Tt(e, t, n, o);
    }));
  },
      Bt = {
    trim: At,
    isArray: _e,
    is: Ot,
    toArray: function toArray(e) {
      if (_e(e)) return e;
      {
        var _t2 = [];

        for (var _n14 = 0, _o15 = e.length; _n14 < _o15; _n14++) {
          _t2[_n14] = e[_n14];
        }

        return _t2;
      }
    },
    makeMap: function makeMap(e, t, n) {
      var o;

      for (t = t || ",", "string" == typeof (e = e || []) && (e = e.split(t)), n = n || {}, o = e.length; o--;) {
        n[e[o]] = {};
      }

      return n;
    },
    each: Ee,
    map: Ne,
    grep: Re,
    inArray: Ae,
    hasOwn: xe,
    extend: function extend(e) {
      for (var _n15 = 0; _n15 < (arguments.length <= 1 ? 0 : arguments.length - 1); _n15++) {
        var _o16 = _n15 + 1 < 1 || arguments.length <= _n15 + 1 ? undefined : arguments[_n15 + 1];

        for (var _t3 in _o16) {
          if (xe(_o16, _t3)) {
            var _n16 = _o16[_t3];
            void 0 !== _n16 && (e[_t3] = _n16);
          }
        }
      }

      return e;
    },
    walk: Tt,
    resolve: function resolve(e, t) {
      var n, o;

      for (t = t || window, n = 0, o = (e = e.split(".")).length; n < o && (t = t[e[n]]); n++) {
        ;
      }

      return t;
    },
    explode: function explode(e, t) {
      return !e || Ot(e, "array") ? e : Ne(e.split(t || ","), At);
    },
    _addCacheSuffix: function _addCacheSuffix(e) {
      var t = Nt.cacheSuffix;
      return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
    }
  },
      Dt = function Dt(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : A;
    return e.exists(function (e) {
      return n(e, t);
    });
  },
      Pt = function Pt(e, t, n) {
    return e.isSome() && t.isSome() ? M.some(n(e.getOrDie(), t.getOrDie())) : M.none();
  },
      Lt = function Lt(e, t) {
    return e ? M.some(t) : M.none();
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var Mt = function Mt(e) {
    return e.dom.nodeName.toLowerCase();
  },
      It = function It(e) {
    return e.dom.nodeType;
  },
      Ft = function Ft(e) {
    return function (t) {
      return It(t) === e;
    };
  },
      Ut = Ft(1),
      zt = Ft(3),
      jt = Ft(9),
      Vt = Ft(11),
      Ht = function Ht(e) {
    return function (t) {
      return Ut(t) && Mt(t) === e;
    };
  },
      $t = function $t(e, t, n) {
    if (!(m(n) || b(n) || x(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(t, n + "");
  },
      qt = function qt(e, t, n) {
    $t(e.dom, t, n);
  },
      Wt = function Wt(e, t) {
    var n = e.dom;
    fe(t, function (e, t) {
      $t(n, t, e);
    });
  },
      Kt = function Kt(e, t) {
    var n = e.dom.getAttribute(t);
    return null === n ? void 0 : n;
  },
      Gt = function Gt(e, t) {
    return M.from(Kt(e, t));
  },
      Yt = function Yt(e, t) {
    var n = e.dom;
    return !(!n || !n.hasAttribute) && n.hasAttribute(t);
  },
      Xt = function Xt(e, t) {
    e.dom.removeAttribute(t);
  },
      Qt = function Qt(e) {
    return Y(e.dom.attributes, function (e, t) {
      return e[t.name] = t.value, e;
    }, {});
  },
      Jt = function Jt(e, t) {
    var n = Kt(e, t);
    return void 0 === n || "" === n ? [] : n.split(" ");
  },
      Zt = function Zt(e) {
    return void 0 !== e.dom.classList;
  },
      en = function en(e) {
    return Jt(e, "class");
  },
      tn = function tn(e, t) {
    return function (e, t, n) {
      var o = Jt(e, t).concat([n]);
      return qt(e, t, o.join(" ")), !0;
    }(e, "class", t);
  },
      nn = function nn(e, t) {
    return function (e, t, n) {
      var o = K(Jt(e, t), function (e) {
        return e !== n;
      });
      return o.length > 0 ? qt(e, t, o.join(" ")) : Xt(e, t), !1;
    }(e, "class", t);
  },
      on = function on(e, t) {
    Zt(e) ? e.dom.classList.add(t) : tn(e, t);
  },
      rn = function rn(e) {
    0 === (Zt(e) ? e.dom.classList : en(e)).length && Xt(e, "class");
  },
      sn = function sn(e, t) {
    Zt(e) ? e.dom.classList.remove(t) : nn(e, t), rn(e);
  },
      an = function an(e, t) {
    return Zt(e) && e.dom.classList.contains(t);
  },
      ln = function ln(e) {
    return void 0 !== e.style && w(e.style.getPropertyValue);
  },
      dn = function dn(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      cn = function cn(e, t) {
    var n = (t || document).createElement("div");

    if (n.innerHTML = e, !n.hasChildNodes() || n.childNodes.length > 1) {
      var _t4 = "HTML does not have a single root node";
      throw console.error(_t4, e), new Error(_t4);
    }

    return dn(n.childNodes[0]);
  },
      un = function un(e, t) {
    var n = (t || document).createElement(e);
    return dn(n);
  },
      mn = function mn(e, t) {
    var n = (t || document).createTextNode(e);
    return dn(n);
  },
      fn = dn,
      gn = function gn(e, t, n) {
    return M.from(e.dom.elementFromPoint(t, n)).map(dn);
  },
      pn = function pn(e, t) {
    var n = [],
        o = function o(e) {
      return n.push(e), t(e);
    };

    var r = t(e);

    do {
      r = r.bind(o);
    } while (r.isSome());

    return n;
  },
      hn = function hn(e, t) {
    var n = e.dom;
    if (1 !== n.nodeType) return !1;
    {
      var _e3 = n;
      if (void 0 !== _e3.matches) return _e3.matches(t);
      if (void 0 !== _e3.msMatchesSelector) return _e3.msMatchesSelector(t);
      if (void 0 !== _e3.webkitMatchesSelector) return _e3.webkitMatchesSelector(t);
      if (void 0 !== _e3.mozMatchesSelector) return _e3.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    }
  },
      bn = function bn(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  },
      vn = function vn(e, t) {
    return e.dom === t.dom;
  },
      yn = function yn(e, t) {
    var n = e.dom,
        o = t.dom;
    return n !== o && n.contains(o);
  },
      Cn = function Cn(e) {
    return fn(e.dom.ownerDocument);
  },
      wn = function wn(e) {
    return jt(e) ? e : Cn(e);
  },
      xn = function xn(e) {
    return fn(wn(e).dom.defaultView);
  },
      kn = function kn(e) {
    return M.from(e.dom.parentNode).map(fn);
  },
      Sn = function Sn(e) {
    return M.from(e.dom.previousSibling).map(fn);
  },
      _n = function _n(e) {
    return M.from(e.dom.nextSibling).map(fn);
  },
      En = function En(e) {
    return ne(pn(e, Sn));
  },
      Nn = function Nn(e) {
    return pn(e, _n);
  },
      Rn = function Rn(e) {
    return H(e.dom.childNodes, fn);
  },
      An = function An(e, t) {
    var n = e.dom.childNodes;
    return M.from(n[t]).map(fn);
  },
      On = function On(e) {
    return An(e, 0);
  },
      Tn = function Tn(e) {
    return An(e, e.dom.childNodes.length - 1);
  },
      Bn = function Bn(e) {
    return e.dom.childNodes.length;
  },
      Dn = function Dn(e) {
    return Vt(e) && C(e.dom.host);
  },
      Pn = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode),
      Ln = N(Pn),
      Mn = Pn ? function (e) {
    return fn(e.dom.getRootNode());
  } : wn,
      In = function In(e) {
    return Dn(e) ? e : function (e) {
      var t = e.dom.head;
      if (null == t) throw new Error("Head is not available yet");
      return fn(t);
    }(wn(e));
  },
      Fn = function Fn(e) {
    return fn(e.dom.host);
  },
      Un = function Un(e) {
    if (Ln() && C(e.target)) {
      var _t5 = fn(e.target);

      if (Ut(_t5) && zn(_t5) && e.composed && e.composedPath) {
        var _t6 = e.composedPath();

        if (_t6) return ie(_t6);
      }
    }

    return M.from(e.target);
  },
      zn = function zn(e) {
    return C(e.dom.shadowRoot);
  },
      jn = function jn(e) {
    var t = zt(e) ? e.dom.parentNode : e.dom;
    if (null == t || null === t.ownerDocument) return !1;
    var n = t.ownerDocument;
    return function (e) {
      var t = Mn(e);
      return Dn(t) ? M.some(t) : M.none();
    }(fn(t)).fold(function () {
      return n.body.contains(t);
    }, E(jn, Fn));
  },
      Vn = function Vn(e, t, n) {
    if (!m(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
    ln(e) && e.style.setProperty(t, n);
  },
      Hn = function Hn(e, t, n) {
    var o = e.dom;
    Vn(o, t, n);
  },
      $n = function $n(e, t) {
    var n = e.dom;
    fe(t, function (e, t) {
      Vn(n, t, e);
    });
  },
      qn = function qn(e, t) {
    var n = e.dom,
        o = window.getComputedStyle(n).getPropertyValue(t);
    return "" !== o || jn(e) ? o : Wn(n, t);
  },
      Wn = function Wn(e, t) {
    return ln(e) ? e.style.getPropertyValue(t) : "";
  },
      Kn = function Kn(e, t) {
    var n = e.dom,
        o = Wn(n, t);
    return M.from(o).filter(function (e) {
      return e.length > 0;
    });
  },
      Gn = function Gn(e) {
    var t = {},
        n = e.dom;
    if (ln(n)) for (var _e4 = 0; _e4 < n.style.length; _e4++) {
      var _o17 = n.style.item(_e4);

      t[_o17] = n.style[_o17];
    }
    return t;
  },
      Yn = function Yn(e, t) {
    (function (e, t) {
      ln(e) && e.style.removeProperty(t);
    })(e.dom, t), Dt(Gt(e, "style").map(He), "") && Xt(e, "style");
  },
      Xn = function Xn(e, t) {
    kn(e).each(function (n) {
      n.dom.insertBefore(t.dom, e.dom);
    });
  },
      Qn = function Qn(e, t) {
    _n(e).fold(function () {
      kn(e).each(function (e) {
        Zn(e, t);
      });
    }, function (e) {
      Xn(e, t);
    });
  },
      Jn = function Jn(e, t) {
    On(e).fold(function () {
      Zn(e, t);
    }, function (n) {
      e.dom.insertBefore(t.dom, n.dom);
    });
  },
      Zn = function Zn(e, t) {
    e.dom.appendChild(t.dom);
  },
      eo = function eo(e, t) {
    $(t, function (t) {
      Zn(e, t);
    });
  },
      to = function to(e) {
    e.dom.textContent = "", $(Rn(e), function (e) {
      no(e);
    });
  },
      no = function no(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  },
      oo = function oo(e) {
    var t = Rn(e);
    var n, o;
    t.length > 0 && (n = e, $(o = t, function (e, t) {
      var r = 0 === t ? n : o[t - 1];
      Qn(r, e);
    })), no(e);
  },
      ro = function ro(e) {
    return e.dom.innerHTML;
  },
      so = function so(e, t) {
    var n = Cn(e).dom,
        o = fn(n.createDocumentFragment()),
        r = function (e, t) {
      var n = (t || document).createElement("div");
      return n.innerHTML = e, Rn(fn(n));
    }(t, n);

    eo(o, r), to(e), Zn(e, o);
  },
      ao = function ao(e, t, n, o) {
    return function (e, t, n, o, r) {
      var s = function (e, t) {
        return function (n) {
          e(n) && t(function (e) {
            var t = fn(Un(e).getOr(e.target)),
                n = function n() {
              return e.stopPropagation();
            },
                o = function o() {
              return e.preventDefault();
            },
                r = _(o, n);

            return function (e, t, n, o, r, s, a) {
              return {
                target: e,
                x: t,
                y: n,
                stop: o,
                prevent: r,
                kill: s,
                raw: a
              };
            }(t, e.clientX, e.clientY, n, o, r, e);
          }(n));
        };
      }(n, o);

      return e.dom.addEventListener(t, s, false), {
        unbind: O(io, e, t, s, false)
      };
    }(e, t, n, o);
  },
      io = function io(e, t, n, o) {
    e.dom.removeEventListener(t, n, o);
  },
      lo = function lo(e, t) {
    return {
      left: e,
      top: t,
      translate: function translate(n, o) {
        return lo(e + n, t + o);
      }
    };
  },
      co = lo,
      uo = function uo(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : 0;
  },
      mo = function mo(e) {
    var t = e.dom,
        n = t.ownerDocument.body;
    return n === t ? co(n.offsetLeft, n.offsetTop) : jn(e) ? function (e) {
      var t = e.getBoundingClientRect();
      return co(t.left, t.top);
    }(t) : co(0, 0);
  },
      fo = function fo(e) {
    var t = void 0 !== e ? e.dom : document,
        n = t.body.scrollLeft || t.documentElement.scrollLeft,
        o = t.body.scrollTop || t.documentElement.scrollTop;
    return co(n, o);
  },
      go = function go(e, t, n) {
    var o = (void 0 !== n ? n.dom : document).defaultView;
    o && o.scrollTo(e, t);
  },
      po = function po(e, t) {
    Ct().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
  },
      ho = function ho(e, t, n, o) {
    return {
      x: e,
      y: t,
      width: n,
      height: o,
      right: e + n,
      bottom: t + o
    };
  },
      bo = function bo(e) {
    var t = void 0 === e ? window : e,
        n = t.document,
        o = fo(fn(n));
    return function (e) {
      var t = void 0 === e ? window : e;
      return Ct().browser.isFirefox() ? M.none() : M.from(t.visualViewport);
    }(t).fold(function () {
      var e = t.document.documentElement,
          n = e.clientWidth,
          r = e.clientHeight;
      return ho(o.left, o.top, n, r);
    }, function (e) {
      return ho(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height);
    });
  },
      vo = function vo(e) {
    return function (t) {
      return !!t && t.nodeType === e;
    };
  },
      yo = function yo(e) {
    return !!e && !Object.getPrototypeOf(e);
  },
      Co = vo(1),
      wo = function wo(e) {
    var t = e.map(function (e) {
      return e.toLowerCase();
    });
    return function (e) {
      if (e && e.nodeName) {
        var _n17 = e.nodeName.toLowerCase();

        return j(t, _n17);
      }

      return !1;
    };
  },
      xo = function xo(e, t) {
    var n = t.toLowerCase().split(" ");
    return function (t) {
      if (Co(t)) for (var _o18 = 0; _o18 < n.length; _o18++) {
        var _r12 = t.ownerDocument.defaultView.getComputedStyle(t, null);

        if ((_r12 ? _r12.getPropertyValue(e) : null) === n[_o18]) return !0;
      }
      return !1;
    };
  },
      ko = function ko(e) {
    return function (t) {
      return Co(t) && t.hasAttribute(e);
    };
  },
      So = function So(e) {
    return Co(e) && e.hasAttribute("data-mce-bogus");
  },
      _o = function _o(e) {
    return Co(e) && "TABLE" === e.tagName;
  },
      Eo = function Eo(e) {
    return function (t) {
      if (Co(t)) {
        if (t.contentEditable === e) return !0;
        if (t.getAttribute("data-mce-contenteditable") === e) return !0;
      }

      return !1;
    };
  },
      No = wo(["textarea", "input"]),
      Ro = vo(3),
      Ao = vo(4),
      Oo = vo(7),
      To = vo(8),
      Bo = vo(9),
      Do = vo(11),
      Po = wo(["br"]),
      Lo = wo(["img"]),
      Mo = Eo("true"),
      Io = Eo("false"),
      Fo = wo(["td", "th"]),
      Uo = wo(["video", "audio", "object", "embed"]),
      zo = Ct().browser,
      jo = function jo(e) {
    return Q(e, Ut);
  },
      Vo = function Vo(e, t) {
    return e.children && j(e.children, t);
  };

  var Ho = function Ho(e, t, n, o, r) {
    return e(n, o) ? M.some(n) : w(r) && r(n) ? M.none() : t(n, o, r);
  };

  var $o = function $o(e, t, n) {
    var o = e.dom;
    var r = w(n) ? n : P;

    for (; o.parentNode;) {
      o = o.parentNode;

      var _e5 = fn(o);

      if (t(_e5)) return M.some(_e5);
      if (r(_e5)) break;
    }

    return M.none();
  },
      qo = function qo(e, t, n) {
    return Ho(function (e, t) {
      return t(e);
    }, $o, e, t, n);
  },
      Wo = function Wo(e, t, n) {
    return $o(e, function (e) {
      return hn(e, t);
    }, n);
  },
      Ko = function Ko(e, t) {
    return function (e, t) {
      var n = void 0 === t ? document : t.dom;
      return bn(n) ? M.none() : M.from(n.querySelector(e)).map(fn);
    }(t, e);
  },
      Go = function Go(e, t, n) {
    return Ho(function (e, t) {
      return hn(e, t);
    }, Wo, e, t, n);
  },
      Yo = function Yo(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = 0;

    var o = {},
        r = fn(e),
        s = wn(r),
        a = t.maxLoadTime || 5e3,
        i = function i(_i2) {
      return new Promise(function (l, d) {
        var c;

        var u = Bt._addCacheSuffix(_i2),
            m = function (e) {
          return we(o, e).getOrThunk(function () {
            return {
              id: "mce-u" + n++,
              passed: [],
              failed: [],
              count: 0
            };
          });
        }(u);

        o[u] = m, m.count++;

        var f = function f(e, t) {
          $(e, D), m.status = t, m.passed = [], m.failed = [], c && (c.onload = null, c.onerror = null, c = null);
        },
            g = function g() {
          return f(m.passed, 2);
        },
            p = function p() {
          return f(m.failed, 3);
        },
            h = function h() {
          var t;
          t = h, function () {
            var t = e.styleSheets;
            var n = t.length;

            for (; n--;) {
              var _e6 = t[n].ownerNode;
              if (_e6 && _e6.id === c.id) return g(), !0;
            }

            return !1;
          }() || (Date.now() - v < a ? setTimeout(t) : p());
        };

        if (l && m.passed.push(l), d && m.failed.push(d), 1 === m.status) return;
        if (2 === m.status) return void g();
        if (3 === m.status) return void p();
        m.status = 1;
        var b = un("link", s.dom);
        Wt(b, {
          rel: "stylesheet",
          type: "text/css",
          id: m.id
        });
        var v = Date.now();
        var y;
        t.contentCssCors && qt(b, "crossOrigin", "anonymous"), t.referrerPolicy && qt(b, "referrerpolicy", t.referrerPolicy), c = b.dom, c.onload = h, c.onerror = p, y = b, Zn(In(r), y), qt(b, "href", u);
      });
    },
        l = function l(e) {
      var t = Bt._addCacheSuffix(e);

      we(o, t).each(function (e) {
        0 == --e.count && (delete o[t], function (e) {
          var t = In(r);
          Ko(t, "#" + e).each(no);
        }(e.id));
      });
    };

    return {
      load: i,
      loadAll: function loadAll(e) {
        return Promise.allSettled(H(e, function (e) {
          return i(e).then(N(e));
        })).then(function (e) {
          var t = W(e, function (e) {
            return "fulfilled" === e.status;
          });
          return t.fail.length > 0 ? Promise.reject(H(t.fail, function (e) {
            return e.reason;
          })) : H(t.pass, function (e) {
            return e.value;
          });
        });
      },
      unload: l,
      unloadAll: function unloadAll(e) {
        $(e, function (e) {
          l(e);
        });
      },
      _setReferrerPolicy: function _setReferrerPolicy(e) {
        t.referrerPolicy = e;
      }
    };
  },
      Xo = function () {
    var e = new WeakMap();
    return {
      forElement: function forElement(t, n) {
        var o = Mn(t).dom;
        return M.from(e.get(o)).getOrThunk(function () {
          var t = Yo(o, n);
          return e.set(o, t), t;
        });
      }
    };
  }();

  var Qo =
  /*#__PURE__*/
  function () {
    function Qo(e, t) {
      _classCallCheck(this, Qo);

      this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this);
    }

    _createClass(Qo, [{
      key: "current",
      value: function current() {
        return this.node;
      }
    }, {
      key: "next",
      value: function next(e) {
        return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node;
      }
    }, {
      key: "prev",
      value: function prev(e) {
        return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node;
      }
    }, {
      key: "prev2",
      value: function prev2(e) {
        return this.node = this.findPreviousNode(this.node, e), this.node;
      }
    }, {
      key: "findSibling",
      value: function findSibling(e, t, n, o) {
        var r, s;

        if (e) {
          if (!o && e[t]) return e[t];

          if (e !== this.rootNode) {
            if (r = e[n], r) return r;

            for (s = e.parentNode; s && s !== this.rootNode; s = s.parentNode) {
              if (r = s[n], r) return r;
            }
          }
        }
      }
    }, {
      key: "findPreviousNode",
      value: function findPreviousNode(e, t) {
        var n, o, r;

        if (e) {
          if (n = e.previousSibling, this.rootNode && n === this.rootNode) return;

          if (n) {
            if (!t) for (r = n.lastChild; r; r = r.lastChild) {
              if (!r.lastChild) return r;
            }
            return n;
          }

          if (o = e.parentNode, o && o !== this.rootNode) return o;
        }
      }
    }]);

    return Qo;
  }();

  var Jo = ["pre"].concat(["h1", "h2", "h3", "h4", "h5", "h6"]),
      Zo = function Zo(e) {
    var t;
    return function (n) {
      return t = t || re(e, L), xe(t, Mt(n));
    };
  },
      er = Zo(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
      tr = function tr(e) {
    return Ut(e) && !er(e);
  },
      nr = function nr(e) {
    return Ut(e) && "br" === Mt(e);
  },
      or = Zo(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
      rr = Zo(["ul", "ol", "dl"]),
      sr = Zo(["li", "dd", "dt"]),
      ar = Zo(["thead", "tbody", "tfoot"]),
      ir = Zo(["td", "th"]),
      lr = Zo(["pre", "script", "textarea", "style"]),
      dr = Zo(Jo),
      cr = function cr(e) {
    return dr(e) || tr(e);
  },
      ur = function ur(e, t, n) {
    return Wo(e, t, n).isSome();
  },
      mr = "\uFEFF",
      fr = "\xa0",
      gr = function gr(e) {
    return e === mr;
  },
      pr = function pr(e, t) {
    var n = [];
    return $(Rn(e), function (e) {
      t(e) && (n = n.concat([e])), n = n.concat(pr(e, t));
    }), n;
  },
      hr = function hr(e, t) {
    return function (e, t) {
      var n = void 0 === t ? document : t.dom;
      return bn(n) ? [] : H(n.querySelectorAll(e), fn);
    }(t, e);
  },
      br = function (e, t) {
    var n = function n(t) {
      return e(t) ? M.from(t.dom.nodeValue) : M.none();
    };

    return {
      get: function get(t) {
        if (!e(t)) throw new Error("Can only get text value of a text node");
        return n(t).getOr("");
      },
      getOption: n,
      set: function set(t, n) {
        if (!e(t)) throw new Error("Can only set raw text value of a text node");
        t.dom.nodeValue = n;
      }
    };
  }(zt),
      vr = function vr(e) {
    return br.get(e);
  },
      yr = function yr(e) {
    return br.getOption(e);
  },
      Cr = function Cr() {
    var e = un("br");
    return qt(e, "data-mce-bogus", "1"), e;
  },
      wr = function wr(e) {
    to(e), Zn(e, Cr());
  },
      xr = function xr(e) {
    Tn(e).each(function (t) {
      Sn(t).each(function (n) {
        er(e) && nr(t) && er(n) && no(t);
      });
    });
  },
      kr = mr,
      Sr = gr,
      _r = function _r(e) {
    return e.replace(/\uFEFF/g, "");
  },
      Er = Co,
      Nr = Ro,
      Rr = function Rr(e) {
    return Nr(e) && (e = e.parentNode), Er(e) && e.hasAttribute("data-mce-caret");
  },
      Ar = function Ar(e) {
    return Nr(e) && Sr(e.data);
  },
      Or = function Or(e) {
    return Rr(e) || Ar(e);
  },
      Tr = function Tr(e) {
    return e.firstChild !== e.lastChild || !Po(e.firstChild);
  },
      Br = function Br(e) {
    var t = e.container();
    return !!Ro(t) && (t.data.charAt(e.offset()) === kr || e.isAtStart() && Ar(t.previousSibling));
  },
      Dr = function Dr(e) {
    var t = e.container();
    return !!Ro(t) && (t.data.charAt(e.offset() - 1) === kr || e.isAtEnd() && Ar(t.nextSibling));
  },
      Pr = function Pr(e) {
    return Nr(e) && e.data[0] === kr;
  },
      Lr = function Lr(e) {
    return Nr(e) && e.data[e.data.length - 1] === kr;
  },
      Mr = function Mr(e) {
    return e && e.hasAttribute("data-mce-caret") ? (function (e) {
      var t = e.getElementsByTagName("br"),
          n = t[t.length - 1];
      So(n) && n.parentNode.removeChild(n);
    }(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("data-mce-style"), e.removeAttribute("_moz_abspos"), e) : null;
  },
      Ir = function Ir(e) {
    return Rr(e.startContainer);
  },
      Fr = Mo,
      Ur = Io,
      zr = Po,
      jr = Ro,
      Vr = wo(["script", "style", "textarea"]),
      Hr = wo(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
      $r = wo(["table"]),
      qr = Or,
      Wr = function Wr(e) {
    return !qr(e) && (jr(e) ? !Vr(e.parentNode) : Hr(e) || zr(e) || $r(e) || Kr(e));
  },
      Kr = function Kr(e) {
    return !1 === function (e) {
      return Co(e) && "true" === e.getAttribute("unselectable");
    }(e) && Ur(e);
  },
      Gr = function Gr(e, t) {
    return Wr(e) && function (e, t) {
      for (e = e.parentNode; e && e !== t; e = e.parentNode) {
        if (Kr(e)) return !1;
        if (Fr(e)) return !0;
      }

      return !0;
    }(e, t);
  },
      Yr = /^[ \t\r\n]*$/,
      Xr = function Xr(e) {
    return Yr.test(e);
  },
      Qr = function Qr(e) {
    return "\n" === e || "\r" === e;
  },
      Jr = function Jr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;

    var r = function (e, t) {
      return t <= 0 ? "" : new Array(t + 1).join(" ");
    }(0, t),
        s = e.replace(/\t/g, r),
        a = Y(s, function (e, t) {
      return function (e) {
        return -1 !== " \f\t\v".indexOf(e);
      }(t) || t === fr ? e.pcIsSpace || "" === e.str && n || e.str.length === s.length - 1 && o || function (e, t) {
        return t < e.length && t >= 0 && Qr(e[t]);
      }(s, e.str.length + 1) ? {
        pcIsSpace: !1,
        str: e.str + fr
      } : {
        pcIsSpace: !0,
        str: e.str + " "
      } : {
        pcIsSpace: Qr(t),
        str: e.str + t
      };
    }, {
      pcIsSpace: !1,
      str: ""
    });

    return a.str;
  },
      Zr = function Zr(e, t) {
    return Wr(e) && !1 === function (e, t) {
      return Ro(e) && Xr(e.data) && !1 === function (e, t) {
        var n = fn(t),
            o = fn(e);
        return ur(o, "pre,code", O(vn, n));
      }(e, t);
    }(e, t) || function (e) {
      return Co(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id"));
    }(e) || es(e);
  },
      es = ko("data-mce-bookmark"),
      ts = ko("data-mce-bogus"),
      ns = ("data-mce-bogus", "all", function (e) {
    return Co(e) && "all" === e.getAttribute("data-mce-bogus");
  });

  var os = function os(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    return function (e, t) {
      var n = 0;
      if (Zr(e, e)) return !1;
      {
        var _o19 = e.firstChild;
        if (!_o19) return !0;

        var _r13 = new Qo(_o19, e);

        do {
          if (t) {
            if (ns(_o19)) {
              _o19 = _r13.next(!0);
              continue;
            }

            if (ts(_o19)) {
              _o19 = _r13.next();
              continue;
            }
          }

          if (Po(_o19)) n++, _o19 = _r13.next();else {
            if (Zr(_o19, e)) return !1;
            _o19 = _r13.next();
          }
        } while (_o19);

        return n <= 1;
      }
    }(e.dom, t);
  },
      rs = function rs(e, t) {
    return C(e) && (Zr(e, t) || tr(fn(e)));
  },
      ss = function ss(e) {
    return function (e) {
      return "span" === e.nodeName.toLowerCase();
    }(e) && "bookmark" === e.getAttribute("data-mce-type");
  },
      as = function as(e, t, n) {
    var o = n || t;
    if (Co(t) && ss(t)) return t;
    var r = t.childNodes;

    for (var _t7 = r.length - 1; _t7 >= 0; _t7--) {
      as(e, r[_t7], o);
    }

    if (Co(t)) {
      var _e7 = t.childNodes;
      1 === _e7.length && ss(_e7[0]) && t.parentNode.insertBefore(_e7[0], t);
    }

    return function (e) {
      return Do(e) || Bo(e);
    }(t) || Zr(t, o) || function (e) {
      return !!Co(e) && e.childNodes.length > 0;
    }(t) || function (e, t) {
      return Ro(e) && e.data.length > 0 && function (e, t) {
        var n = new Qo(e, t).prev(!1),
            o = new Qo(e, t).next(!1),
            r = v(n) || rs(n, t),
            s = v(o) || rs(o, t);
        return r && s;
      }(e, t);
    }(t, o) || e.remove(t), t;
  },
      is = Bt.makeMap,
      ls = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      ds = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      cs = /[<>&\"\']/g,
      us = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
      ms = {
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  },
      fs = {
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "`": "&#96;"
  },
      gs = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'"
  },
      ps = function ps(e, t) {
    var n, o, r;
    var s = {};

    if (e) {
      for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) {
        o = String.fromCharCode(parseInt(e[n], t)), fs[o] || (r = "&" + e[n + 1] + ";", s[o] = r, s[r] = o);
      }

      return s;
    }
  },
      hs = ps("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
      bs = function bs(e, t) {
    return e.replace(t ? ls : ds, function (e) {
      return fs[e] || e;
    });
  },
      vs = function vs(e, t) {
    return e.replace(t ? ls : ds, function (e) {
      return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : fs[e] || "&#" + e.charCodeAt(0) + ";";
    });
  },
      ys = function ys(e, t, n) {
    return n = n || hs, e.replace(t ? ls : ds, function (e) {
      return fs[e] || n[e] || e;
    });
  },
      Cs = {
    encodeRaw: bs,
    encodeAllRaw: function encodeAllRaw(e) {
      return ("" + e).replace(cs, function (e) {
        return fs[e] || e;
      });
    },
    encodeNumeric: vs,
    encodeNamed: ys,
    getEncodeFunc: function getEncodeFunc(e, t) {
      var n = ps(t) || hs,
          o = is(e.replace(/\+/g, ","));
      return o.named && o.numeric ? function (e, t) {
        return e.replace(t ? ls : ds, function (e) {
          return void 0 !== fs[e] ? fs[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";";
        });
      } : o.named ? t ? function (e, t) {
        return ys(e, t, n);
      } : ys : o.numeric ? vs : bs;
    },
    decode: function decode(e) {
      return e.replace(us, function (e, t) {
        return t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : ms[t] || String.fromCharCode(t) : gs[e] || hs[e] || function (e) {
          var t = un("div").dom;
          return t.innerHTML = e, t.textContent || t.innerText || e;
        }(e);
      });
    }
  },
      ws = {},
      xs = {},
      ks = Bt.makeMap,
      Ss = Bt.each,
      _s = Bt.extend,
      Es = Bt.explode,
      Ns = Bt.inArray,
      Rs = function Rs(e, t) {
    return (e = Bt.trim(e)) ? e.split(t || " ") : [];
  },
      As = function As(e, t) {
    var n = ks(e, " ", ks(e.toUpperCase(), " "));
    return _s(n, t);
  },
      Os = function Os(e) {
    return As("td th li dt dd figcaption caption details summary", e.getTextBlockElements());
  },
      Ts = function Ts(e, t) {
    var n;
    return e && (n = {}, "string" == typeof e && (e = {
      "*": e
    }), Ss(e, function (e, o) {
      n[o] = n[o.toUpperCase()] = "map" === t ? ks(e, /[, ]/) : Es(e, /[, ]/);
    })), n;
  },
      Bs = function Bs(e) {
    var t;
    var n = {},
        o = {};
    var r = [];

    var s = {},
        a = {},
        i = function i(t, n, o) {
      var r = e[t];
      return r ? r = ks(r, /[, ]/, ks(r.toUpperCase(), /[, ]/)) : (r = ws[t], r || (r = As(n, o), ws[t] = r)), r;
    },
        l = null !== (t = (e = e || {}).schema) && void 0 !== t ? t : "html5",
        d = function (e) {
      var t = {};
      var n, o, r, s, a, i;

      var l = function l(e) {
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var s = Rs(r),
            a = Rs(e);
        var i = a.length;

        for (; i--;) {
          var _e8 = Rs([n, o].join(" "));

          t[a[i]] = {
            attributes: re(_e8, function () {
              return {};
            }),
            attributesOrder: _e8,
            children: re(s, N(xs))
          };
        }
      },
          d = function d(e, n) {
        var o = Rs(e),
            r = Rs(n);
        var s = o.length;

        for (; s--;) {
          var _e9 = t[o[s]];

          for (var _t8 = 0, _n18 = r.length; _t8 < _n18; _t8++) {
            _e9.attributes[r[_t8]] = {}, _e9.attributesOrder.push(r[_t8]);
          }
        }
      };

      return ws[e] ? ws[e] : (n = "id accesskey class dir lang style tabindex title role", o = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (n += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", o += " article aside details dialog figure main header footer hgroup section nav", r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (n += " xml:lang", i = "acronym applet basefont big font strike tt", r = [r, i].join(" "), Ss(Rs(i), function (e) {
        l(e, "", r);
      }), a = "center dir isindex noframes", o = [o, a].join(" "), s = [o, r].join(" "), Ss(Rs(a), function (e) {
        l(e, "", s);
      })), s = s || [o, r].join(" "), l("html", "manifest", "head body"), l("head", "", "base command link meta noscript script style title"), l("title hr noscript br"), l("base", "href target"), l("link", "href rel media hreflang type sizes hreflang"), l("meta", "name http-equiv content charset"), l("style", "media type scoped"), l("script", "src async defer type charset"), l("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", s), l("address dt dd div caption", "", s), l("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r), l("blockquote", "cite", s), l("ol", "reversed start type", "li"), l("ul", "", "li"), l("li", "value", s), l("dl", "", "dt dd"), l("a", "href target rel media hreflang type", r), l("q", "cite", r), l("ins del", "cite datetime", s), l("img", "src sizes srcset alt usemap ismap width height"), l("iframe", "src name width height", s), l("embed", "src type width height"), l("object", "data type typemustmatch name usemap form width height", [s, "param"].join(" ")), l("param", "name value"), l("map", "name", [s, "area"].join(" ")), l("area", "alt coords shape href target rel media hreflang type"), l("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), l("colgroup", "span", "col"), l("col", "span"), l("tbody thead tfoot", "", "tr"), l("tr", "", "td th"), l("td", "colspan rowspan headers", s), l("th", "colspan rowspan headers scope abbr", s), l("form", "accept-charset action autocomplete enctype method name novalidate target", s), l("fieldset", "disabled form name", [s, "legend"].join(" ")), l("label", "form for", r), l("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), l("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? s : r), l("select", "disabled form multiple name required size", "option optgroup"), l("optgroup", "disabled label", "option"), l("option", "disabled label selected value"), l("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), l("menu", "type label", [s, "li"].join(" ")), l("noscript", "", s), "html4" !== e && (l("wbr"), l("ruby", "", [r, "rt rp"].join(" ")), l("figcaption", "", s), l("mark rt rp summary bdi", "", r), l("canvas", "width height", s), l("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [s, "track source"].join(" ")), l("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [s, "track source"].join(" ")), l("picture", "", "img source"), l("source", "src srcset type media sizes"), l("track", "kind src srclang label default"), l("datalist", "", [r, "option"].join(" ")), l("article section nav aside main header footer", "", s), l("hgroup", "", "h1 h2 h3 h4 h5 h6"), l("figure", "", [s, "figcaption"].join(" ")), l("time", "datetime", r), l("dialog", "open", s), l("command", "type label icon disabled checked radiogroup command"), l("output", "for form name", r), l("progress", "value max", r), l("meter", "value min max low high optimum", r), l("details", "open", [s, "summary"].join(" ")), l("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (d("script", "language xml:space"), d("style", "xml:space"), d("object", "declare classid code codebase codetype archive standby align border hspace vspace"), d("embed", "align name hspace vspace"), d("param", "valuetype type"), d("a", "charset name rev shape coords"), d("br", "clear"), d("applet", "codebase archive code object alt name width height align hspace vspace"), d("img", "name longdesc align border hspace vspace"), d("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), d("font basefont", "size color face"), d("input", "usemap align"), d("select"), d("textarea"), d("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), d("ul", "type compact"), d("li", "type"), d("ol dl menu dir", "compact"), d("pre", "width xml:space"), d("hr", "align noshade size width"), d("isindex", "prompt"), d("table", "summary width frame rules cellspacing cellpadding align bgcolor"), d("col", "width align char charoff valign"), d("colgroup", "width align char charoff valign"), d("thead", "align char charoff valign"), d("tr", "align char charoff valign bgcolor"), d("th", "axis align char charoff valign nowrap bgcolor width height"), d("form", "accept"), d("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), d("tfoot", "align char charoff valign"), d("tbody", "align char charoff valign"), d("area", "nohref"), d("body", "background bgcolor text link vlink alink")), "html4" !== e && (d("input button select textarea", "autofocus"), d("input textarea", "placeholder"), d("a", "download"), d("link script img", "crossorigin"), d("img", "loading"), d("iframe", "sandbox seamless allowfullscreen loading")), "html4" !== e && $([t.video, t.audio], function (e) {
        delete e.children.audio, delete e.children.video;
      }), Ss(Rs("a form meter progress dfn"), function (e) {
        t[e] && delete t[e].children[e];
      }), delete t.caption.children.table, delete t.script, ws[e] = t, t);
    }(l);

    !1 === e.verify_html && (e.valid_elements = "*[*]");
    var c = Ts(e.valid_styles),
        u = Ts(e.invalid_styles, "map"),
        m = Ts(e.valid_classes, "map"),
        f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
        g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
        p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
        h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),
        b = "td th iframe video audio object script code",
        v = i("non_empty_elements", b + " pre", p),
        y = i("move_caret_before_on_enter_elements", b + " table", p),
        C = i("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
        w = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", C),
        x = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp");
    Ss("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), function (e) {
      a[e] = new RegExp("</" + e + "[^>]*>", "gi");
    });

    var k = function k(e) {
      return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
    },
        S = function S(e) {
      var t, o, s, a, i, l, d, c, u, m, f, g, p, h, b, v, y, C;
      var w = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
          x = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
          S = /[*?+]/;

      if (e) {
        var _2 = Rs(e, ",");

        for (n["@"] && (v = n["@"].attributes, y = n["@"].attributesOrder), t = 0, o = _2.length; t < o; t++) {
          if (i = w.exec(_2[t]), i) {
            if (h = i[1], u = i[2], b = i[3], c = i[5], g = {}, p = [], l = {
              attributes: g,
              attributesOrder: p
            }, "#" === h && (l.paddEmpty = !0), "-" === h && (l.removeEmpty = !0), "!" === i[4] && (l.removeEmptyAttrs = !0), v && (fe(v, function (e, t) {
              g[t] = e;
            }), p.push.apply(p, y)), c) for (c = Rs(c, "|"), s = 0, a = c.length; s < a; s++) {
              if (i = x.exec(c[s]), i) {
                if (d = {}, f = i[1], m = i[2].replace(/[\\:]:/g, ":"), h = i[3], C = i[4], "!" === f && (l.attributesRequired = l.attributesRequired || [], l.attributesRequired.push(m), d.required = !0), "-" === f) {
                  delete g[m], p.splice(Ns(p, m), 1);
                  continue;
                }

                h && ("=" === h && (l.attributesDefault = l.attributesDefault || [], l.attributesDefault.push({
                  name: m,
                  value: C
                }), d.defaultValue = C), "~" === h && (l.attributesForced = l.attributesForced || [], l.attributesForced.push({
                  name: m,
                  value: C
                }), d.forcedValue = C), "<" === h && (d.validValues = ks(C, "?"))), S.test(m) ? (l.attributePatterns = l.attributePatterns || [], d.pattern = k(m), l.attributePatterns.push(d)) : (g[m] || p.push(m), g[m] = d);
              }
            }
            v || "@" !== u || (v = g, y = p), b && (l.outputName = u, n[b] = l), S.test(u) ? (l.pattern = k(u), r.push(l)) : n[u] = l;
          }
        }
      }
    },
        _ = function _(e) {
      r = [], $(ue(n), function (e) {
        delete n[e];
      }), S(e), Ss(d, function (e, t) {
        o[t] = e.children;
      });
    },
        E = function E(e) {
      var t = /^(~)?(.+)$/;
      e && (ws.text_block_elements = ws.block_elements = null, Ss(Rs(e, ","), function (e) {
        var r = t.exec(e),
            a = "~" === r[1],
            i = a ? "span" : "div",
            l = r[2];

        if (o[l] = o[i], s[l] = i, v[l.toUpperCase()] = {}, v[l] = {}, a || (w[l.toUpperCase()] = {}, w[l] = {}), !n[l]) {
          var _e10 = n[i];
          _e10 = _s({}, _e10), delete _e10.removeEmptyAttrs, delete _e10.removeEmpty, n[l] = _e10;
        }

        Ss(o, function (e, t) {
          e[i] && (o[t] = e = _s({}, o[t]), e[l] = e[i]);
        });
      }));
    },
        R = function R(e) {
      var t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
      ws[l] = null, e && Ss(Rs(e, ","), function (e) {
        var n = t.exec(e);
        var r, s;
        n && (s = n[1], r = s ? o[n[2]] : o[n[2]] = {
          "#comment": {}
        }, r = o[n[2]], Ss(Rs(n[3], "|"), function (e) {
          "-" === s ? delete r[e] : r[e] = {};
        }));
      });
    },
        A = function A(e) {
      var t,
          o = n[e];
      if (o) return o;

      for (t = r.length; t--;) {
        if (o = r[t], o.pattern.test(e)) return o;
      }
    };

    e.valid_elements ? _(e.valid_elements) : (Ss(d, function (e, t) {
      n[t] = {
        attributes: e.attributes,
        attributesOrder: e.attributesOrder
      }, o[t] = e.children;
    }), Ss(Rs("strong/b em/i"), function (e) {
      var t = Rs(e, "/");
      n[t[1]].outputName = t[0];
    }), Ss(x, function (t, o) {
      n[o] && (e.padd_empty_block_inline_children && (n[o].paddInEmptyBlock = !0), n[o].removeEmpty = !0);
    }), Ss(Rs("ol ul blockquote a table tbody"), function (e) {
      n[e] && (n[e].removeEmpty = !0);
    }), Ss(Rs("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
      n[e].paddEmpty = !0;
    }), Ss(Rs("span"), function (e) {
      n[e].removeEmptyAttrs = !0;
    })), E(e.custom_elements), R(e.valid_children), S(e.extended_valid_elements), R("+ol[ul|ol],+ul[ul|ol]"), Ss({
      dd: "dl",
      dt: "dl",
      li: "ul ol",
      td: "tr",
      th: "tr",
      tr: "tbody thead tfoot",
      tbody: "table",
      thead: "table",
      tfoot: "table",
      legend: "fieldset",
      area: "map",
      param: "video audio object"
    }, function (e, t) {
      n[t] && (n[t].parentsRequired = Rs(e));
    }), e.invalid_elements && Ss(Es(e.invalid_elements), function (e) {
      n[e] && delete n[e];
    }), A("span") || S("span[!data-mce-type|*]");
    var O = N(c),
        T = N(u),
        B = N(m),
        D = N(h),
        P = N(w),
        L = N(C),
        M = N(x),
        I = N(Object.seal(p)),
        F = N(g),
        U = N(v),
        z = N(y),
        j = N(f),
        V = N(Object.seal(a)),
        H = N(s);
    return {
      type: l,
      children: o,
      elements: n,
      getValidStyles: O,
      getValidClasses: B,
      getBlockElements: P,
      getInvalidStyles: T,
      getVoidElements: I,
      getTextBlockElements: L,
      getTextInlineElements: M,
      getBoolAttrs: D,
      getElementRule: A,
      getSelfClosingElements: F,
      getNonEmptyElements: U,
      getMoveCaretBeforeOnEnterElements: z,
      getWhitespaceElements: j,
      getSpecialElements: V,
      isValidChild: function isValidChild(e, t) {
        var n = o[e.toLowerCase()];
        return !(!n || !n[t.toLowerCase()]);
      },
      isValid: function isValid(e, t) {
        var n, o;
        var r = A(e);

        if (r) {
          if (!t) return !0;
          if (r.attributes[t]) return !0;
          if (n = r.attributePatterns, n) for (o = n.length; o--;) {
            if (n[o].pattern.test(t)) return !0;
          }
        }

        return !1;
      },
      getCustomElements: H,
      addValidElements: S,
      setValidElements: _,
      addCustomElements: E,
      addValidChildren: R
    };
  },
      Ds = function Ds(e, t) {
    var n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
        o = /\s*([^:]+):\s*([^;]+);?/g,
        r = /\s+$/;
    var s;
    var a = {};
    var i, l;
    e = e || {}, t && (i = t.getValidStyles(), l = t.getInvalidStyles());
    var d = "\\\" \\' \\; \\: ; : \uFEFF".split(" ");

    for (s = 0; s < d.length; s++) {
      a[d[s]] = "\uFEFF" + s, a["\uFEFF" + s] = d[s];
    }

    var c = {
      parse: function parse(t) {
        var i = {};
        var l, d, u, m;

        var f = e.url_converter,
            g = e.url_converter_scope || c,
            p = function p(e, t, n) {
          var o = i[e + "-top" + t];
          if (!o) return;
          var r = i[e + "-right" + t];
          if (!r) return;
          var a = i[e + "-bottom" + t];
          if (!a) return;
          var l = i[e + "-left" + t];
          if (!l) return;
          var d = [o, r, a, l];

          for (s = d.length - 1; s-- && d[s] === d[s + 1];) {
            ;
          }

          s > -1 && n || (i[e + t] = -1 === s ? d[0] : d.join(" "), delete i[e + "-top" + t], delete i[e + "-right" + t], delete i[e + "-bottom" + t], delete i[e + "-left" + t]);
        },
            h = function h(e) {
          var t,
              n = i[e];

          if (n) {
            for (n = n.split(" "), t = n.length; t--;) {
              if (n[t] !== n[0]) return !1;
            }

            return i[e] = n[0], !0;
          }
        },
            b = function b(e) {
          return m = !0, a[e];
        },
            v = function v(e, t) {
          return m && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
            return a[e];
          })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e;
        },
            y = function y(e) {
          return String.fromCharCode(parseInt(e.slice(1), 16));
        },
            C = function C(e) {
          return e.replace(/\\[0-9a-f]+/gi, y);
        },
            w = function w(t, n, o, r, s, a) {
          if (s = s || a) return "'" + (s = v(s)).replace(/\'/g, "\\'") + "'";

          if (n = v(n || o || r), !e.allow_script_urls) {
            var _t9 = n.replace(/[\s\r\n]+/g, "");

            if (/(java|vb)script:/i.test(_t9)) return "";
            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(_t9)) return "";
          }

          return f && (n = f.call(g, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')";
        };

        if (t) {
          for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, b).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
            return e.replace(/[;:]/g, b);
          }); l = o.exec(t);) {
            if (o.lastIndex = l.index + l[0].length, d = l[1].replace(r, "").toLowerCase(), u = l[2].replace(r, ""), d && u) {
              if (d = C(d), u = C(u), -1 !== d.indexOf("\uFEFF") || -1 !== d.indexOf('"')) continue;
              if (!e.allow_script_urls && ("behavior" === d || /expression\s*\(|\/\*|\*\//.test(u))) continue;
              "font-weight" === d && "700" === u ? u = "bold" : "color" !== d && "background-color" !== d || (u = u.toLowerCase()), u = u.replace(n, w), i[d] = m ? v(u, !0) : u;
            }
          }

          p("border", "", !0), p("border", "-width"), p("border", "-color"), p("border", "-style"), p("padding", ""), p("margin", ""), "border", k = "border-style", S = "border-color", h(x = "border-width") && h(k) && h(S) && (i.border = i[x] + " " + i[k] + " " + i[S], delete i[x], delete i[k], delete i[S]), "medium none" === i.border && delete i.border, "none" === i["border-image"] && delete i["border-image"];
        }

        var x, k, S;
        return i;
      },
      serialize: function serialize(e, t) {
        var n = "";

        var o = function o(t) {
          var o;
          var r = i[t];
          if (r) for (var _s4 = 0, _a2 = r.length; _s4 < _a2; _s4++) {
            t = r[_s4], o = e[t], o && (n += (n.length > 0 ? " " : "") + t + ": " + o + ";");
          }
        };

        return t && i ? (o("*"), o(t)) : fe(e, function (e, o) {
          !e || l && !function (e, t) {
            var n = l["*"];
            return !(n && n[e] || (n = l[t], n && n[e]));
          }(o, t) || (n += (n.length > 0 ? " " : "") + o + ": " + e + ";");
        }), n;
      }
    };
    return c;
  },
      Ps = {
    keyLocation: !0,
    layerX: !0,
    layerY: !0,
    returnValue: !0,
    webkitMovementX: !0,
    webkitMovementY: !0,
    keyIdentifier: !0,
    mozPressure: !0
  },
      Ls = function Ls(e, t) {
    var n = null != t ? t : {};

    for (var _t10 in e) {
      xe(Ps, _t10) || (n[_t10] = e[_t10]);
    }

    return C(n.composedPath) && (n.composedPath = function () {
      return e.composedPath();
    }), n;
  },
      Ms = function Ms(e, t, n, o) {
    var r;
    var s = Ls(t, o);
    return s.type = e, y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n), function (e) {
      return y(e.preventDefault) || function (e) {
        return e instanceof Event || w(e.initEvent);
      }(e);
    }(t) && (s.preventDefault = function () {
      s.defaultPrevented = !0, s.isDefaultPrevented = L, w(t.preventDefault) && t.preventDefault();
    }, s.stopPropagation = function () {
      s.cancelBubble = !0, s.isPropagationStopped = L, w(t.stopPropagation) && t.stopPropagation();
    }, s.stopImmediatePropagation = function () {
      s.isImmediatePropagationStopped = L, s.stopPropagation();
    }, function (e) {
      return e.isDefaultPrevented === L || e.isDefaultPrevented === P;
    }(s) || (s.isDefaultPrevented = !0 === s.defaultPrevented ? L : P, s.isPropagationStopped = !0 === s.cancelBubble ? L : P, s.isImmediatePropagationStopped = P)), s;
  },
      Is = /^(?:mouse|contextmenu)|click/,
      Fs = function Fs(e, t, n, o) {
    e.addEventListener ? e.addEventListener(t, n, o || !1) : e.attachEvent && e.attachEvent("on" + t, n);
  },
      Us = function Us(e, t, n, o) {
    e.removeEventListener ? e.removeEventListener(t, n, o || !1) : e.detachEvent && e.detachEvent("on" + t, n);
  },
      zs = function zs(e, t) {
    var n = Ms(e.type, e, document, t);

    if (function (e) {
      return C(e) && Is.test(e.type);
    }(e) && v(e.pageX) && !v(e.clientX)) {
      var _t11 = n.target.ownerDocument || document,
          _o20 = _t11.documentElement,
          _r14 = _t11.body,
          _s5 = n;

      _s5.pageX = e.clientX + (_o20 && _o20.scrollLeft || _r14 && _r14.scrollLeft || 0) - (_o20 && _o20.clientLeft || _r14 && _r14.clientLeft || 0), _s5.pageY = e.clientY + (_o20 && _o20.scrollTop || _r14 && _r14.scrollTop || 0) - (_o20 && _o20.clientTop || _r14 && _r14.clientTop || 0);
    }

    return n;
  },
      js = function js(e, t, n) {
    var o = e.document,
        r = {
      type: "ready"
    };
    if (n.domLoaded) return void t(r);

    var s = function s() {
      Us(e, "DOMContentLoaded", s), Us(e, "load", s), n.domLoaded || (n.domLoaded = !0, t(r)), e = null;
    };

    "complete" === o.readyState || "interactive" === o.readyState && o.body ? s() : Fs(e, "DOMContentLoaded", s), n.domLoaded || Fs(e, "load", s);
  };

  var Vs =
  /*#__PURE__*/
  function () {
    function Vs() {
      _classCallCheck(this, Vs);

      this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date()).toString(32), this.hasMouseEnterLeave = "onmouseenter" in document.documentElement, this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1;
    }

    _createClass(Vs, [{
      key: "bind",
      value: function bind(e, t, n, o) {
        var r = this;
        var s, a, i, l, d, c, u;

        var m = window,
            f = function f(e) {
          r.executeHandlers(zs(e || m.event), s);
        };

        if (!e || 3 === e.nodeType || 8 === e.nodeType) return;
        e[r.expando] ? s = e[r.expando] : (s = r.count++, e[r.expando] = s, r.events[s] = {}), o = o || e;
        var g = t.split(" ");

        for (i = g.length; i--;) {
          l = g[i], c = f, d = u = !1, "DOMContentLoaded" === l && (l = "ready"), r.domLoaded && "ready" === l && "complete" === e.readyState ? n.call(o, zs({
            type: l
          })) : (r.hasMouseEnterLeave || (d = r.mouseEnterLeave[l], d && (c = function c(e) {
            var t = e.currentTarget;
            var n = e.relatedTarget;
            if (n && t.contains) n = t.contains(n);else for (; n && n !== t;) {
              n = n.parentNode;
            }
            n || ((e = zs(e || m.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, r.executeHandlers(e, s));
          })), r.hasFocusIn || "focusin" !== l && "focusout" !== l || (u = !0, d = "focusin" === l ? "focus" : "blur", c = function c(e) {
            (e = zs(e || m.event)).type = "focus" === e.type ? "focusin" : "focusout", r.executeHandlers(e, s);
          }), a = r.events[s][l], a ? "ready" === l && r.domLoaded ? n(zs({
            type: l
          })) : a.push({
            func: n,
            scope: o
          }) : (r.events[s][l] = a = [{
            func: n,
            scope: o
          }], a.fakeName = d, a.capture = u, a.nativeHandler = c, "ready" === l ? js(e, c, r) : Fs(e, d || l, c, u)));
        }

        return e = a = null, n;
      }
    }, {
      key: "unbind",
      value: function unbind(e, t, n) {
        var o, r, s, a, i;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        var l = e[this.expando];

        if (l) {
          if (i = this.events[l], t) {
            var _l2 = t.split(" ");

            for (r = _l2.length; r--;) {
              if (a = _l2[r], o = i[a], o) {
                if (n) for (s = o.length; s--;) {
                  if (o[s].func === n) {
                    var _e11 = o.nativeHandler,
                        _t12 = o.fakeName,
                        _n19 = o.capture;
                    o = o.slice(0, s).concat(o.slice(s + 1)), o.nativeHandler = _e11, o.fakeName = _t12, o.capture = _n19, i[a] = o;
                  }
                }
                n && 0 !== o.length || (delete i[a], Us(e, o.fakeName || a, o.nativeHandler, o.capture));
              }
            }
          } else fe(i, function (t, n) {
            Us(e, t.fakeName || n, t.nativeHandler, t.capture);
          }), i = {};

          for (a in i) {
            if (xe(i, a)) return this;
          }

          delete this.events[l];

          try {
            delete e[this.expando];
          } catch (t) {
            e[this.expando] = null;
          }
        }

        return this;
      }
    }, {
      key: "fire",
      value: function fire(e, t, n) {
        return this.dispatch(e, t, n);
      }
    }, {
      key: "dispatch",
      value: function dispatch(e, t, n) {
        var o;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        var r = zs({
          type: t,
          target: e
        }, n);

        do {
          o = e[this.expando], o && this.executeHandlers(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow;
        } while (e && !r.isPropagationStopped());

        return this;
      }
    }, {
      key: "clean",
      value: function clean(e) {
        var t, n;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) for (this.unbind(e), n = e.getElementsByTagName("*"), t = n.length; t--;) {
          (e = n[t])[this.expando] && this.unbind(e);
        }
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.events = {};
      }
    }, {
      key: "cancel",
      value: function cancel(e) {
        return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
      }
    }, {
      key: "executeHandlers",
      value: function executeHandlers(e, t) {
        var n = this.events[t],
            o = n && n[e.type];
        if (o) for (var _t13 = 0, _n20 = o.length; _t13 < _n20; _t13++) {
          var _n21 = o[_t13];
          if (_n21 && !1 === _n21.func.call(_n21.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return;
        }
      }
    }]);

    return Vs;
  }();

  Vs.Event = new Vs();

  var Hs = Bt.each,
      $s = Bt.grep,
      qs = "data-mce-style",
      Ws = function Ws(e, t, n) {
    y(n) || "" === n ? Xt(e, t) : qt(e, t, n);
  },
      Ks = function Ks(e, t) {
    var n = Kt(t, "style"),
        o = e.serialize(e.parse(n), Mt(t));
    Ws(t, qs, o);
  },
      Gs = function Gs(e, t) {
    var n,
        o,
        r = 0;
    if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) {
      o = e.nodeType, (!t || 3 !== o || o !== n && e.nodeValue.length) && (r++, n = o);
    }
    return r;
  },
      Ys = Bt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "),
      Xs = function Xs(e) {
    return e.replace(/[A-Z]/g, function (e) {
      return "-" + e.toLowerCase();
    });
  },
      Qs = function Qs(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = {},
        o = window,
        r = {};
    var s = 0;

    var a = Xo.forElement(fn(e), {
      contentCssCors: t.contentCssCors,
      referrerPolicy: t.referrerPolicy
    }),
        i = [],
        l = t.schema ? t.schema : Bs({}),
        d = Ds({
      url_converter: t.url_converter,
      url_converter_scope: t.url_converter_scope
    }, t.schema),
        c = t.ownEvents ? new Vs() : Vs.Event,
        u = l.getBlockElements(),
        g = function g(t) {
      return t && e && m(t) ? e.getElementById(t) : t;
    },
        h = function h(e) {
      var t = g(e);
      return C(t) ? fn(t) : null;
    },
        b = function b(e, t, n) {
      var o;
      var r = h(e);

      if (C(r) && Ut(r)) {
        var _e12 = J[t];
        o = _e12 && _e12.get ? _e12.get(r.dom, t) : Kt(r, t);
      }

      return C(o) ? o : null != n ? n : "";
    },
        v = function v(e) {
      var t = g(e);
      return y(t) ? [] : t.attributes;
    },
        k = function k(e, n, o) {
      P(e, function (e) {
        if (Co(e)) {
          var _r15 = fn(e);

          "" === o && (o = null);

          var _s6 = Kt(_r15, n),
              _a3 = J[n];

          _a3 && _a3.set ? _a3.set(_r15.dom, o, n) : Ws(_r15, n, o), _s6 !== o && t.onSetAttrib && t.onSetAttrib({
            attrElm: _r15,
            attrName: n,
            attrValue: o
          });
        }
      });
    },
        _ = function _() {
      return t.root_element || e.body;
    },
        E = function E(t, n) {
      return function (e, t, n) {
        var o = 0,
            r = 0;
        var s = e.ownerDocument;

        if (n = n || e, t) {
          if (n === e && t.getBoundingClientRect && "static" === qn(fn(e), "position")) {
            var _n22 = t.getBoundingClientRect();

            return o = _n22.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft, r = _n22.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop, {
              x: o,
              y: r
            };
          }

          var _a4 = t;

          for (; _a4 && _a4 !== n && _a4.nodeType && !Vo(_a4, n);) {
            var _e13 = _a4;
            o += _e13.offsetLeft || 0, r += _e13.offsetTop || 0, _a4 = _e13.offsetParent;
          }

          for (_a4 = t.parentNode; _a4 && _a4 !== n && _a4.nodeType && !Vo(_a4, n);) {
            o -= _a4.scrollLeft || 0, r -= _a4.scrollTop || 0, _a4 = _a4.parentNode;
          }

          r += function (e) {
            return zo.isFirefox() && "table" === Mt(e) ? jo(Rn(e)).filter(function (e) {
              return "caption" === Mt(e);
            }).bind(function (e) {
              return jo(Nn(e)).map(function (t) {
                var n = t.dom.offsetTop,
                    o = e.dom.offsetTop,
                    r = e.dom.offsetHeight;
                return n <= o ? -r : 0;
              });
            }).getOr(0) : 0;
          }(fn(t));
        }

        return {
          x: o,
          y: r
        };
      }(e.body, g(t), n);
    },
        R = function R(e, n, o) {
      var r = function r(e, t) {
        return m(e) ? e : x(e) ? xe(Ys, t) ? e + "" : e + "px" : ge(e, r);
      },
          s = function s(e, t, n) {
        var o = Xs(t);
        y(n) || "" === n ? Yn(e, o) : Hn(e, o, r(n, o));
      };

      P(e, function (e) {
        var r = fn(e);
        m(n) ? s(r, n, o) : fe(n, function (e, t) {
          s(r, t, e);
        }), t.update_styles && Ks(d, r);
      });
    },
        A = function A(e, t, n) {
      var o = g(e);
      if (!y(o) && Co(o)) return n ? qn(fn(o), Xs(t)) : ("float" === (t = t.replace(/-(\D)/g, function (e, t) {
        return t.toUpperCase();
      })) && (t = "cssFloat"), o.style ? o.style[t] : void 0);
    },
        O = function O(e) {
      var t, n;
      var o = g(e);
      return t = A(o, "width"), n = A(o, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
        w: parseInt(t, 10) || o.offsetWidth || o.clientWidth,
        h: parseInt(n, 10) || o.offsetHeight || o.clientHeight
      };
    },
        T = function T(e, t) {
      if (!e) return !1;
      var n = p(e) ? e : [e];
      return V(n, function (e) {
        return hn(fn(e), t);
      });
    },
        B = function B(e, t, n, o) {
      var r = [];
      var s,
          a = g(e);

      for (o = void 0 === o, n = n || ("BODY" !== _().nodeName ? _().parentNode : null), m(t) && (s = t, t = "*" === t ? Co : function (e) {
        return T(e, s);
      }); a && !(a === n || y(a.nodeType) || Bo(a) || Do(a));) {
        if (!t || t(a)) {
          if (!o) return [a];
          r.push(a);
        }

        a = a.parentNode;
      }

      return o ? r : null;
    },
        D = function D(e, t, n) {
      var o = t;
      if (e) for (m(t) && (o = function o(e) {
        return T(e, t);
      }), e = e[n]; e; e = e[n]) {
        if (w(o) && o(e)) return e;
      }
      return null;
    },
        P = function P(e, t, n) {
      var o = null != n ? n : this,
          r = m(e) ? g(e) : e;
      if (!r) return !1;

      if (p(r) && (r.length || 0 === r.length)) {
        var _e14 = [];
        return Hs(r, function (n, r) {
          n && _e14.push(t.call(o, m(n) ? g(n) : n, r));
        }), _e14;
      }

      return t.call(o, r);
    },
        L = function L(e, t) {
      P(e, function (e) {
        fe(t, function (t, n) {
          k(e, n, t);
        });
      });
    },
        M = function M(e, t) {
      P(e, function (e) {
        var n = fn(e);
        so(n, t);
      });
    },
        I = function I(t, n, o, r, s) {
      return P(t, function (t) {
        var a = m(n) ? e.createElement(n) : n;
        return C(o) && L(a, o), r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && M(a, r)), s ? a : t.appendChild(a);
      });
    },
        F = function F(t, n, o) {
      return I(e.createElement(t), t, n, o, !0);
    },
        U = Cs.encodeAllRaw,
        z = function z(e, t) {
      return P(e, function (e) {
        var n = fn(e);
        return t && $(Rn(n), function (e) {
          zt(e) && 0 === e.dom.length ? no(e) : Xn(n, e);
        }), no(n), n.dom;
      });
    },
        H = function H(e, t, n) {
      P(e, function (e) {
        if (Co(e)) {
          var _o21 = fn(e),
              _r16 = t.split(" ");

          $(_r16, function (e) {
            C(n) ? (n ? on : sn)(_o21, e) : function (e, t) {
              var n = Zt(e) ? e.dom.classList.toggle(t) : function (e, t) {
                return j(en(e), t) ? nn(e, t) : tn(e, t);
              }(e, t);
              rn(e);
            }(_o21, e);
          });
        }
      });
    },
        q = function q(e, t, n) {
      return P(t, function (t) {
        return p(t) && (e = e.cloneNode(!0)), n && Hs($s(t.childNodes), function (t) {
          e.appendChild(t);
        }), t.parentNode.replaceChild(e, t);
      });
    },
        W = function W(e) {
      if (Co(e)) {
        var _t14 = "a" === e.nodeName.toLowerCase() && !b(e, "href") && b(e, "id");

        if (b(e, "name") || b(e, "data-mce-bookmark") || _t14) return !0;
      }

      return !1;
    },
        K = function K() {
      return e.createRange();
    },
        G = function G(n, r, s, a) {
      if (p(n)) {
        var _e15 = n.length;
        var _t15 = [];

        for (; _e15--;) {
          _t15[_e15] = G(n[_e15], r, s, a);
        }

        return _t15;
      }

      return !t.collect || n !== e && n !== o || i.push([n, r, s, a]), c.bind(n, r, s, a || Q);
    },
        Y = function Y(t, n, r) {
      if (p(t)) {
        var _e16 = t.length;
        var _o22 = [];

        for (; _e16--;) {
          _o22[_e16] = Y(t[_e16], n, r);
        }

        return _o22;
      }

      if (i.length > 0 && (t === e || t === o)) {
        var _e17 = i.length;

        for (; _e17--;) {
          var _o23 = i[_e17];
          t !== _o23[0] || n && n !== _o23[1] || r && r !== _o23[2] || c.unbind(_o23[0], _o23[1], _o23[2]);
        }
      }

      return c.unbind(t, n, r);
    },
        X = function X(e) {
      if (e && Co(e)) {
        var _t16 = e.getAttribute("data-mce-contenteditable");

        return _t16 && "inherit" !== _t16 ? _t16 : "inherit" !== e.contentEditable ? e.contentEditable : null;
      }

      return null;
    },
        Q = {
      doc: e,
      settings: t,
      win: o,
      files: r,
      stdMode: !0,
      boxModel: !0,
      styleSheetLoader: a,
      boundEvents: i,
      styles: d,
      schema: l,
      events: c,
      isBlock: function isBlock(e) {
        return m(e) ? xe(u, e) : Co(e) && xe(u, e.nodeName);
      },
      root: null,
      clone: function clone(e, t) {
        return e.cloneNode(t);
      },
      getRoot: _,
      getViewPort: function getViewPort(e) {
        var t = bo(e);
        return {
          x: t.x,
          y: t.y,
          w: t.width,
          h: t.height
        };
      },
      getRect: function getRect(e) {
        var t = g(e),
            n = E(t),
            o = O(t);
        return {
          x: n.x,
          y: n.y,
          w: o.w,
          h: o.h
        };
      },
      getSize: O,
      getParent: function getParent(e, t, n) {
        var o = B(e, t, n, !1);
        return o && o.length > 0 ? o[0] : null;
      },
      getParents: B,
      get: g,
      getNext: function getNext(e, t) {
        return D(e, t, "nextSibling");
      },
      getPrev: function getPrev(e, t) {
        return D(e, t, "previousSibling");
      },
      select: function select(n, o) {
        var r, s;
        var a = null !== (s = null !== (r = g(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e;
        return de(a.querySelectorAll(n));
      },
      is: T,
      add: I,
      create: F,
      createHTML: function createHTML(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var o,
            r = "";

        for (o in r += "<" + e, t) {
          ke(t, o) && (r += " " + o + '="' + U(t[o]) + '"');
        }

        return Ke(n) && xe(l.getVoidElements(), e) ? r + " />" : r + ">" + n + "</" + e + ">";
      },
      createFragment: function createFragment(t) {
        var n;
        var o = e.createElement("div"),
            r = e.createDocumentFragment();

        for (r.appendChild(o), t && (o.innerHTML = t); n = o.firstChild;) {
          r.appendChild(n);
        }

        return r.removeChild(o), r;
      },
      remove: z,
      setStyle: R,
      getStyle: A,
      setStyles: function setStyles(e, t) {
        R(e, t);
      },
      removeAllAttribs: function removeAllAttribs(e) {
        return P(e, function (e) {
          var t = e.attributes;

          for (var _n23 = t.length - 1; _n23 >= 0; _n23--) {
            e.removeAttributeNode(t.item(_n23));
          }
        });
      },
      setAttrib: k,
      setAttribs: L,
      getAttrib: b,
      getPos: E,
      parseStyle: function parseStyle(e) {
        return d.parse(e);
      },
      serializeStyle: function serializeStyle(e, t) {
        return d.serialize(e, t);
      },
      addStyle: function addStyle(t) {
        var o, r;

        if (Q !== Qs.DOM && e === document) {
          if (n[t]) return;
          n[t] = !0;
        }

        r = e.getElementById("mceDefaultStyles"), r || (r = e.createElement("style"), r.id = "mceDefaultStyles", r.type = "text/css", o = e.getElementsByTagName("head")[0], o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r)), r.styleSheet ? r.styleSheet.cssText += t : r.appendChild(e.createTextNode(t));
      },
      loadCSS: function loadCSS(e) {
        e || (e = ""), $(e.split(","), function (e) {
          r[e] = !0, a.load(e)["catch"](S);
        });
      },
      addClass: function addClass(e, t) {
        H(e, t, !0);
      },
      removeClass: function removeClass(e, t) {
        H(e, t, !1);
      },
      hasClass: function hasClass(e, t) {
        var n = h(e),
            o = t.split(" ");
        return te(o, function (e) {
          return an(n, e);
        });
      },
      toggleClass: H,
      show: function show(e) {
        P(e, function (e) {
          return Yn(fn(e), "display");
        });
      },
      hide: function hide(e) {
        P(e, function (e) {
          return Hn(fn(e), "display", "none");
        });
      },
      isHidden: function isHidden(e) {
        var t = h(e);
        return Dt(Kn(t, "display"), "none");
      },
      uniqueId: function uniqueId(e) {
        return (e || "mce_") + s++;
      },
      setHTML: M,
      getOuterHTML: function getOuterHTML(e) {
        var t = h(e);
        return Co(t.dom) ? t.dom.outerHTML : function (e) {
          var t = un("div"),
              n = fn(e.dom.cloneNode(!0));
          return Zn(t, n), ro(t);
        }(t);
      },
      setOuterHTML: function setOuterHTML(e, t) {
        P(e, function (e) {
          Co(e) && (e.outerHTML = t);
        });
      },
      decode: Cs.decode,
      encode: U,
      insertAfter: function insertAfter(e, t) {
        var n = g(t);
        return P(e, function (e) {
          var t = n.parentNode,
              o = n.nextSibling;
          return o ? t.insertBefore(e, o) : t.appendChild(e), e;
        });
      },
      replace: q,
      rename: function rename(e, t) {
        var n;
        return e.nodeName !== t.toUpperCase() && (n = F(t), Hs(v(e), function (t) {
          k(n, t.nodeName, b(e, t.nodeName));
        }), q(n, e, !0)), n || e;
      },
      findCommonAncestor: function findCommonAncestor(e, t) {
        var n,
            o = e;

        for (; o;) {
          for (n = t; n && o !== n;) {
            n = n.parentNode;
          }

          if (o === n) break;
          o = o.parentNode;
        }

        return !o && e.ownerDocument ? e.ownerDocument.documentElement : o;
      },
      run: P,
      getAttribs: v,
      isEmpty: function isEmpty(e, t) {
        var n,
            o,
            r = 0;
        if (W(e)) return !1;

        if (e = e.firstChild) {
          var _s7 = new Qo(e, e.parentNode),
              _a5 = l ? l.getWhitespaceElements() : {};

          t = t || (l ? l.getNonEmptyElements() : null);

          do {
            if (n = e.nodeType, Co(e)) {
              var _n24 = e.getAttribute("data-mce-bogus");

              if (_n24) {
                e = _s7.next("all" === _n24);
                continue;
              }

              if (o = e.nodeName.toLowerCase(), t && t[o]) {
                if ("br" === o) {
                  r++, e = _s7.next();
                  continue;
                }

                return !1;
              }

              if (W(e)) return !1;
            }

            if (8 === n) return !1;
            if (3 === n && !Xr(e.nodeValue)) return !1;
            if (3 === n && e.parentNode && _a5[e.parentNode.nodeName] && Xr(e.nodeValue)) return !1;
            e = _s7.next();
          } while (e);
        }

        return r <= 1;
      },
      createRng: K,
      nodeIndex: Gs,
      split: function split(e, t, n) {
        var o,
            r,
            s,
            a = K();
        if (e && t) return a.setStart(e.parentNode, Gs(e)), a.setEnd(t.parentNode, Gs(t)), o = a.extractContents(), a = K(), a.setStart(t.parentNode, Gs(t) + 1), a.setEnd(e.parentNode, Gs(e) + 1), r = a.extractContents(), s = e.parentNode, s.insertBefore(as(Q, o), e), n ? s.insertBefore(n, e) : s.insertBefore(t, e), s.insertBefore(as(Q, r), e), z(e), n || t;
      },
      bind: G,
      unbind: Y,
      fire: function fire(e, t, n) {
        return c.dispatch(e, t, n);
      },
      dispatch: function dispatch(e, t, n) {
        return c.dispatch(e, t, n);
      },
      getContentEditable: X,
      getContentEditableParent: function getContentEditableParent(e) {
        var t = _();

        var n = null;

        for (; e && e !== t && (n = X(e), null === n); e = e.parentNode) {
          ;
        }

        return n;
      },
      destroy: function destroy() {
        if (i.length > 0) {
          var _e18 = i.length;

          for (; _e18--;) {
            var _t17 = i[_e18];
            c.unbind(_t17[0], _t17[1], _t17[2]);
          }
        }

        fe(r, function (e, t) {
          a.unload(t), delete r[t];
        });
      },
      isChildOf: function isChildOf(e, t) {
        return e === t || t.contains(e);
      },
      dumpRng: function dumpRng(e) {
        return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
      }
    },
        J = function (e, t, n) {
      var o = t.keep_values,
          r = {
        set: function set(e, o, r) {
          var s = fn(e);
          w(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), o, r, e[0])), Ws(s, "data-mce-" + r, o), Ws(s, r, o);
        },
        get: function get(e, t) {
          var n = fn(e);
          return Kt(n, "data-mce-" + t) || Kt(n, t);
        }
      },
          s = {
        style: {
          set: function set(t, n) {
            var r = fn(t);
            f(n) ? $n(r, n) : (o && Ws(r, qs, n), Xt(r, "style"), m(n) && $n(r, e.parse(n)));
          },
          get: function get(t) {
            var n = fn(t),
                o = Kt(n, qs) || Kt(n, "style");
            return e.serialize(e.parse(o), Mt(n));
          }
        }
      };
      return o && (s.href = s.src = r), s;
    }(d, t, N(Q));

    return Q;
  };

  Qs.DOM = Qs(document), Qs.nodeIndex = Gs;
  var Js = Qs.DOM;

  var Zs =
  /*#__PURE__*/
  function () {
    function Zs() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Zs);

      this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = !1, this.settings = e;
    }

    _createClass(Zs, [{
      key: "_setReferrerPolicy",
      value: function _setReferrerPolicy(e) {
        this.settings.referrerPolicy = e;
      }
    }, {
      key: "loadScript",
      value: function loadScript(e) {
        var _this = this;

        return new Promise(function (t, n) {
          var o = Js;
          var r;

          var s = function s() {
            o.remove(a), r && (r.onerror = r.onload = r = null);
          },
              a = o.uniqueId();

          r = document.createElement("script"), r.id = a, r.type = "text/javascript", r.src = Bt._addCacheSuffix(e), _this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", _this.settings.referrerPolicy), r.onload = function () {
            s(), t();
          }, r.onerror = function () {
            s(), n("Failed to load script: " + e);
          }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r);
        });
      }
    }, {
      key: "isDone",
      value: function isDone(e) {
        return 2 === this.states[e];
      }
    }, {
      key: "markDone",
      value: function markDone(e) {
        this.states[e] = 2;
      }
    }, {
      key: "add",
      value: function add(e) {
        var t = this;
        return t.queue.push(e), void 0 === t.states[e] && (t.states[e] = 0), new Promise(function (n, o) {
          t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []), t.scriptLoadedCallbacks[e].push({
            resolve: n,
            reject: o
          });
        });
      }
    }, {
      key: "load",
      value: function load(e) {
        return this.add(e);
      }
    }, {
      key: "remove",
      value: function remove(e) {
        delete this.states[e], delete this.scriptLoadedCallbacks[e];
      }
    }, {
      key: "loadQueue",
      value: function loadQueue() {
        var e = this.queue;
        return this.queue = [], this.loadScripts(e);
      }
    }, {
      key: "loadScripts",
      value: function loadScripts(e) {
        var t = this,
            n = function n(e, _n25) {
          we(t.scriptLoadedCallbacks, _n25).each(function (t) {
            $(t, function (t) {
              return t[e](_n25);
            });
          }), delete t.scriptLoadedCallbacks[_n25];
        },
            o = function o(e) {
          var t = K(e, function (e) {
            return "rejected" === e.status;
          });
          return t.length > 0 ? Promise.reject(ee(t, function (_ref) {
            var e = _ref.reason;
            return p(e) ? e : [e];
          })) : Promise.resolve();
        },
            r = function r(e) {
          return Promise.allSettled(H(e, function (e) {
            return 2 === t.states[e] ? (n("resolve", e), Promise.resolve()) : 3 === t.states[e] ? (n("reject", e), Promise.reject(e)) : (t.states[e] = 1, t.loadScript(e).then(function () {
              t.states[e] = 2, n("resolve", e);
              var s = t.queue;
              if (s.length > 0) return t.queue = [], r(s).then(o);
            }, function () {
              return t.states[e] = 3, n("reject", e), Promise.reject(e);
            }));
          }));
        },
            s = function s(e) {
          return t.loading = !0, r(e).then(function (e) {
            t.loading = !1;
            var n = t.queueLoadedCallbacks.shift();
            return M.from(n).each(D), o(e);
          });
        },
            a = Se(e);

        return t.loading ? new Promise(function (e, n) {
          t.queueLoadedCallbacks.push(function () {
            return s(a).then(e, n);
          });
        }) : s(a);
      }
    }]);

    return Zs;
  }();

  Zs.ScriptLoader = new Zs();

  var ea = function ea(e) {
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
      ta = {},
      na = ea("en"),
      oa = function oa() {
    return we(ta, na.get());
  },
      ra = {
    getData: function getData() {
      return ge(ta, function (e) {
        return _objectSpread({}, e);
      });
    },
    setCode: function setCode(e) {
      e && na.set(e);
    },
    getCode: function getCode() {
      return na.get();
    },
    add: function add(e, t) {
      var n = ta[e];
      n || (ta[e] = n = {}), fe(t, function (e, t) {
        n[t.toLowerCase()] = e;
      });
    },
    translate: function translate(e) {
      var t = oa().getOr({}),
          n = function n(e) {
        return w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e;
      },
          o = function o(e) {
        return "" === e || null == e;
      },
          r = function r(e) {
        var o = n(e);
        return we(t, o.toLowerCase()).map(n).getOr(o);
      },
          s = function s(e) {
        return e.replace(/{context:\w+}$/, "");
      };

      if (o(e)) return "";
      if (f(a = e) && xe(a, "raw")) return n(e.raw);
      var a;

      if (function (e) {
        return p(e) && e.length > 1;
      }(e)) {
        var _t18 = e.slice(1);

        return s(r(e[0]).replace(/\{([0-9]+)\}/g, function (e, o) {
          return xe(_t18, o) ? n(_t18[o]) : e;
        }));
      }

      return s(r(e));
    },
    isRtl: function isRtl() {
      return oa().bind(function (e) {
        return we(e, "_dir");
      }).exists(function (e) {
        return "rtl" === e;
      });
    },
    hasCode: function hasCode(e) {
      return xe(ta, e);
    }
  },
      sa = function sa() {
    var e = [],
        t = {},
        n = {},
        o = [],
        r = function r(e, t) {
      var n = K(o, function (n) {
        return n.name === e && n.state === t;
      });
      $(n, function (e) {
        return e.resolve();
      });
    },
        s = function s(e) {
      return xe(t, e);
    },
        a = function a(e, n) {
      var o = ra.getCode();
      !o || n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",") || Zs.ScriptLoader.add(t[e] + "/langs/" + o + ".js");
    },
        i = function i(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "added";
      return "added" === t && function (e) {
        return xe(n, e);
      }(e) || "loaded" === t && s(e) ? Promise.resolve() : new Promise(function (n) {
        o.push({
          name: e,
          state: t,
          resolve: n
        });
      });
    };

    return {
      items: e,
      urls: t,
      lookup: n,
      get: function get(e) {
        if (n[e]) return n[e].instance;
      },
      requireLangPack: function requireLangPack(e, t) {
        !1 !== sa.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then(function () {
          return a(e, t);
        }));
      },
      add: function add(t, o) {
        return e.push(o), n[t] = {
          instance: o
        }, r(t, "added"), o;
      },
      remove: function remove(e) {
        delete t[e], delete n[e];
      },
      createUrl: function createUrl(e, t) {
        return m(t) ? m(e) ? {
          prefix: "",
          resource: t,
          suffix: ""
        } : {
          prefix: e.prefix,
          resource: t,
          suffix: e.suffix
        } : t;
      },
      load: function load(e, o) {
        if (t[e]) return Promise.resolve();
        var s = m(o) ? o : o.prefix + o.resource + o.suffix;
        0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = sa.baseURL + "/" + s), t[e] = s.substring(0, s.lastIndexOf("/"));

        var a = function a() {
          return r(e, "loaded"), Promise.resolve();
        };

        return n[e] ? a() : Zs.ScriptLoader.add(s).then(a);
      },
      waitFor: i
    };
  };

  sa.languageLoad = !0, sa.baseURL = "", sa.PluginManager = sa(), sa.ThemeManager = sa(), sa.ModelManager = sa();

  var aa = function aa() {
    var e = function (e) {
      var t = ea(M.none()),
          n = function n() {
        return t.get().each(e);
      };

      return {
        clear: function clear() {
          n(), t.set(M.none());
        },
        isSet: function isSet() {
          return t.get().isSome();
        },
        get: function get() {
          return t.get();
        },
        set: function set(e) {
          n(), t.set(M.some(e));
        }
      };
    }(S);

    return _objectSpread({}, e, {
      on: function on(t) {
        return e.get().each(t);
      }
    });
  },
      ia = function ia(e, t) {
    var n = null;
    return {
      cancel: function cancel() {
        h(n) || (clearTimeout(n), n = null);
      },
      throttle: function throttle() {
        for (var _len5 = arguments.length, o = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          o[_key5] = arguments[_key5];
        }

        h(n) && (n = setTimeout(function () {
          n = null, e.apply(null, o);
        }, t));
      }
    };
  },
      la = function la(e, t) {
    var n = null;

    var o = function o() {
      h(n) || (clearTimeout(n), n = null);
    };

    return {
      cancel: o,
      throttle: function throttle() {
        for (var _len6 = arguments.length, r = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          r[_key6] = arguments[_key6];
        }

        o(), n = setTimeout(function () {
          n = null, e.apply(null, r);
        }, t);
      }
    };
  },
      da = N("mce-annotation"),
      ca = N("data-mce-annotation"),
      ua = N("data-mce-annotation-uid"),
      ma = N("data-mce-annotation-active"),
      fa = N("data-mce-annotation-classes"),
      ga = N("data-mce-annotation-attrs"),
      pa = function pa(e) {
    return function (t) {
      return vn(t, e);
    };
  },
      ha = function ha(e, t) {
    var n = e.selection.getRng(),
        o = fn(n.startContainer),
        r = fn(e.getBody()),
        s = t.fold(function () {
      return "." + da();
    }, function (e) {
      return "[".concat(ca(), "=\"").concat(e, "\"]");
    }),
        a = An(o, n.startOffset).getOr(o),
        i = Go(a, s, pa(r)),
        l = function l(e, t) {
      return Yt(e, t) ? M.some(Kt(e, t)) : M.none();
    };

    return i.bind(function (t) {
      return l(t, "".concat(ua())).bind(function (n) {
        return l(t, "".concat(ca())).map(function (t) {
          var o = va(e, n);
          return {
            uid: n,
            name: t,
            elements: o
          };
        });
      });
    });
  },
      ba = function ba(e, t) {
    return Yt(e, "data-mce-bogus") || ur(e, '[data-mce-bogus="all"]', pa(t));
  },
      va = function va(e, t) {
    var n = fn(e.getBody()),
        o = hr(n, "[".concat(ua(), "=\"").concat(t, "\"]"));
    return K(o, function (e) {
      return !ba(e, n);
    });
  },
      ya = function ya(e, t) {
    var n = fn(e.getBody()),
        o = hr(n, "[".concat(ca(), "=\"").concat(t, "\"]")),
        r = {};
    return $(o, function (e) {
      if (!ba(e, n)) {
        var _t19 = Kt(e, ua()),
            _n26 = we(r, _t19).getOr([]);

        r[_t19] = _n26.concat([e]);
      }
    }), r;
  };

  var Ca = 0;

  var wa = function wa(e) {
    var t = new Date().getTime(),
        n = Math.floor(1e9 * Math.random());
    return Ca++, e + "_" + n + Ca + String(t);
  },
      xa = function xa(e, t) {
    return fn(e.dom.cloneNode(t));
  },
      ka = function ka(e) {
    return xa(e, !1);
  },
      Sa = function Sa(e) {
    return xa(e, !0);
  },
      _a = function _a(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : P;

    var o = new Qo(e, t),
        r = function r(e) {
      var t;

      do {
        t = o[e]();
      } while (t && !Ro(t) && !n(t));

      return M.from(t).filter(Ro);
    };

    return {
      current: function current() {
        return M.from(o.current()).filter(Ro);
      },
      next: function next() {
        return r("next");
      },
      prev: function prev() {
        return r("prev");
      },
      prev2: function prev2() {
        return r("prev2");
      }
    };
  },
      Ea = function Ea(e, t) {
    var n = t || function (t) {
      return e.isBlock(t) || Po(t) || Io(t);
    },
        o = function o(e, t, n, r) {
      if (Ro(e)) {
        var _n27 = r(e, t, e.data);

        if (-1 !== _n27) return M.some({
          container: e,
          offset: _n27
        });
      }

      return n().bind(function (e) {
        return o(e.container, e.offset, n, r);
      });
    };

    return {
      backwards: function backwards(e, t, r, s) {
        var a = _a(e, s, n);

        return o(e, t, function () {
          return a.prev().map(function (e) {
            return {
              container: e,
              offset: e.length
            };
          });
        }, r).getOrNull();
      },
      forwards: function forwards(e, t, r, s) {
        var a = _a(e, s, n);

        return o(e, t, function () {
          return a.next().map(function (e) {
            return {
              container: e,
              offset: 0
            };
          });
        }, r).getOrNull();
      }
    };
  },
      Na = Math.round,
      Ra = function Ra(e) {
    return e ? {
      left: Na(e.left),
      top: Na(e.top),
      bottom: Na(e.bottom),
      right: Na(e.right),
      width: Na(e.width),
      height: Na(e.height)
    } : {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0
    };
  },
      Aa = function Aa(e, t) {
    return e = Ra(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e;
  },
      Oa = function Oa(e, t, n) {
    return e >= 0 && e <= Math.min(t.height, n.height) / 2;
  },
      Ta = function Ta(e, t) {
    var n = Math.min(t.height / 2, e.height / 2);
    return e.bottom - n < t.top || !(e.top > t.bottom) && Oa(t.top - e.bottom, e, t);
  },
      Ba = function Ba(e, t) {
    return e.top > t.bottom || !(e.bottom < t.top) && Oa(t.bottom - e.top, e, t);
  },
      Da = function Da(e, t, n) {
    var o = Math.max(Math.min(t, e.left + e.width), e.left),
        r = Math.max(Math.min(n, e.top + e.height), e.top);
    return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r));
  },
      Pa = function Pa(e) {
    var t = e.startContainer,
        n = e.startOffset;
    return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
  },
      La = function La(e, t) {
    if (Co(e) && e.hasChildNodes()) {
      var _n28 = e.childNodes,
          _o24 = function (e, t, n) {
        return Math.min(Math.max(e, 0), n);
      }(t, 0, _n28.length - 1);

      return _n28[_o24];
    }

    return e;
  },
      Ma = new RegExp("[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2-\u09E3\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B57\u0B62-\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC-\u0CCD\u0CD5-\u0CD6\u0CE2-\u0CE3\u0D01\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62-\u0D63\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u200C-\u200D\u20D0-\u20DC\u20DD-\u20E0\u20E1\u20E2-\u20E4\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u302E-\u302F\u3099-\u309A\uA66F\uA670-\uA672\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E-\uFF9F]"),
      Ia = function Ia(e) {
    return "string" == typeof e && e.charCodeAt(0) >= 768 && Ma.test(e);
  },
      Fa = Co,
      Ua = Wr,
      za = xo("display", "block table"),
      ja = xo("float", "left right"),
      Va = function () {
    for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      e[_key7] = arguments[_key7];
    }

    return function (t) {
      for (var _n29 = 0; _n29 < e.length; _n29++) {
        if (!e[_n29](t)) return !1;
      }

      return !0;
    };
  }(Fa, Ua, T(ja)),
      Ha = T(xo("white-space", "pre pre-line pre-wrap")),
      $a = Ro,
      qa = Po,
      Wa = Qs.nodeIndex,
      Ka = function Ka(e, t) {
    return t < 0 && Co(e) && e.hasChildNodes() ? void 0 : La(e, t);
  },
      Ga = function Ga(e) {
    return "createRange" in e ? e.createRange() : Qs.DOM.createRng();
  },
      Ya = function Ya(e) {
    return e && /[\r\n\t ]/.test(e);
  },
      Xa = function Xa(e) {
    return !!e.setStart && !!e.setEnd;
  },
      Qa = function Qa(e) {
    var t = e.startContainer,
        n = e.startOffset;

    if (Ya(e.toString()) && Ha(t.parentNode) && Ro(t)) {
      var _e19 = t.data;
      if (Ya(_e19[n - 1]) || Ya(_e19[n + 1])) return !0;
    }

    return !1;
  },
      Ja = function Ja(e) {
    return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
  },
      Za = function Za(e) {
    var t;
    var n = e.getClientRects();
    return t = n.length > 0 ? Ra(n[0]) : Ra(e.getBoundingClientRect()), !Xa(e) && qa(e) && Ja(t) ? function (e) {
      var t = e.ownerDocument,
          n = Ga(t),
          o = t.createTextNode(fr),
          r = e.parentNode;
      r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
      var s = Ra(n.getBoundingClientRect());
      return r.removeChild(o), s;
    }(e) : Ja(t) && Xa(e) ? function (e) {
      var t = e.startContainer,
          n = e.endContainer,
          o = e.startOffset,
          r = e.endOffset;

      if (t === n && Ro(n) && 0 === o && 1 === r) {
        var _t20 = e.cloneRange();

        return _t20.setEndAfter(n), Za(_t20);
      }

      return null;
    }(e) : t;
  },
      ei = function ei(e, t) {
    var n = Aa(e, t);
    return n.width = 1, n.right = n.left + 1, n;
  },
      ti = function ti(e, t, n) {
    var o = function o() {
      return n || (n = function (e) {
        var t = [],
            n = function n(e) {
          var n, o;
          0 !== e.height && (t.length > 0 && (n = e, o = t[t.length - 1], n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right) || t.push(e));
        },
            o = function o(e, _o25) {
          var r = Ga(e.ownerDocument);

          if (_o25 < e.data.length) {
            if (Ia(e.data[_o25])) return t;
            if (Ia(e.data[_o25 - 1]) && (r.setStart(e, _o25), r.setEnd(e, _o25 + 1), !Qa(r))) return n(ei(Za(r), !1)), t;
          }

          _o25 > 0 && (r.setStart(e, _o25 - 1), r.setEnd(e, _o25), Qa(r) || n(ei(Za(r), !1))), _o25 < e.data.length && (r.setStart(e, _o25), r.setEnd(e, _o25 + 1), Qa(r) || n(ei(Za(r), !0)));
        },
            r = e.container(),
            s = e.offset();

        if ($a(r)) return o(r, s), t;
        if (Fa(r)) if (e.isAtEnd()) {
          var _e20 = Ka(r, s);

          $a(_e20) && o(_e20, _e20.data.length), Va(_e20) && !qa(_e20) && n(ei(Za(_e20), !1));
        } else {
          var _a6 = Ka(r, s);

          if ($a(_a6) && o(_a6, 0), Va(_a6) && e.isAtEnd()) return n(ei(Za(_a6), !1)), t;

          var _i3 = Ka(e.container(), e.offset() - 1);

          Va(_i3) && !qa(_i3) && (za(_i3) || za(_a6) || !Va(_a6)) && n(ei(Za(_i3), !1)), Va(_a6) && n(ei(Za(_a6), !0));
        }
        return t;
      }(ti(e, t))), n;
    };

    return {
      container: N(e),
      offset: N(t),
      toRange: function toRange() {
        var n = Ga(e.ownerDocument);
        return n.setStart(e, t), n.setEnd(e, t), n;
      },
      getClientRects: o,
      isVisible: function isVisible() {
        return o().length > 0;
      },
      isAtStart: function isAtStart() {
        return $a(e), 0 === t;
      },
      isAtEnd: function isAtEnd() {
        return $a(e) ? t >= e.data.length : t >= e.childNodes.length;
      },
      isEqual: function isEqual(n) {
        return n && e === n.container() && t === n.offset();
      },
      getNode: function getNode(n) {
        return Ka(e, n ? t - 1 : t);
      }
    };
  };

  ti.fromRangeStart = function (e) {
    return ti(e.startContainer, e.startOffset);
  }, ti.fromRangeEnd = function (e) {
    return ti(e.endContainer, e.endOffset);
  }, ti.after = function (e) {
    return ti(e.parentNode, Wa(e) + 1);
  }, ti.before = function (e) {
    return ti(e.parentNode, Wa(e));
  }, ti.isAbove = function (e, t) {
    return Pt(ie(t.getClientRects()), le(e.getClientRects()), Ta).getOr(!1);
  }, ti.isBelow = function (e, t) {
    return Pt(le(t.getClientRects()), ie(e.getClientRects()), Ba).getOr(!1);
  }, ti.isAtStart = function (e) {
    return !!e && e.isAtStart();
  }, ti.isAtEnd = function (e) {
    return !!e && e.isAtEnd();
  }, ti.isTextPosition = function (e) {
    return !!e && Ro(e.container());
  }, ti.isElementPosition = function (e) {
    return !1 === ti.isTextPosition(e);
  };

  var ni = function ni(e, t) {
    Ro(t) && 0 === t.data.length && e.remove(t);
  },
      oi = function oi(e, t, n) {
    Do(n) ? function (e, t, n) {
      var o = M.from(n.firstChild),
          r = M.from(n.lastChild);
      t.insertNode(n), o.each(function (t) {
        return ni(e, t.previousSibling);
      }), r.each(function (t) {
        return ni(e, t.nextSibling);
      });
    }(e, t, n) : function (e, t, n) {
      t.insertNode(n), ni(e, n.previousSibling), ni(e, n.nextSibling);
    }(e, t, n);
  },
      ri = Ro,
      si = So,
      ai = Qs.nodeIndex,
      ii = function ii(e) {
    var t = e.parentNode;
    return si(t) ? ii(t) : t;
  },
      li = function li(e) {
    return e ? Oe(e.childNodes, function (e, t) {
      return si(t) && "BR" !== t.nodeName ? e = e.concat(li(t)) : e.push(t), e;
    }, []) : [];
  },
      di = function di(e) {
    return function (t) {
      return e === t;
    };
  },
      ci = function ci(e) {
    var t;
    return t = ri(e) ? "text()" : e.nodeName.toLowerCase(), t + "[" + function (e) {
      var t, n;
      t = li(ii(e)), n = Te(t, di(e), e), t = t.slice(0, n + 1);
      var o = Oe(t, function (e, n, o) {
        return ri(n) && ri(t[o - 1]) && e++, e;
      }, 0);
      return t = Re(t, wo([e.nodeName])), n = Te(t, di(e), e), n - o;
    }(e) + "]";
  },
      ui = function ui(e, t) {
    var n,
        o,
        r,
        s,
        a,
        i = [];
    return n = t.container(), o = t.offset(), ri(n) ? r = function (e, t) {
      for (; (e = e.previousSibling) && ri(e);) {
        t += e.data.length;
      }

      return t;
    }(n, o) : (s = n.childNodes, o >= s.length ? (r = "after", o = s.length - 1) : r = "before", n = s[o]), i.push(ci(n)), a = function (e, t, n) {
      var o = [];

      for (t = t.parentNode; t !== e; t = t.parentNode) {
        o.push(t);
      }

      return o;
    }(e, n), a = Re(a, T(So)), i = i.concat(Ne(a, function (e) {
      return ci(e);
    })), i.reverse().join("/") + "," + r;
  },
      mi = function mi(e, t) {
    var n;
    if (!t) return null;
    var o = t.split(","),
        r = o[0].split("/");
    n = o.length > 1 ? o[1] : "before";
    var s = Oe(r, function (e, t) {
      var n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
      return n ? ("text()" === n[1] && (n[1] = "#text"), function (e, t, n) {
        var o = li(e);
        return o = Re(o, function (e, t) {
          return !ri(e) || !ri(o[t - 1]);
        }), o = Re(o, wo([t])), o[n];
      }(e, n[1], parseInt(n[2], 10))) : null;
    }, e);
    return s ? ri(s) ? function (e, t) {
      var n,
          o = e,
          r = 0;

      for (; ri(o);) {
        if (n = o.data.length, t >= r && t <= r + n) {
          e = o, t -= r;
          break;
        }

        if (!ri(o.nextSibling)) {
          e = o, t = n;
          break;
        }

        r += n, o = o.nextSibling;
      }

      return ri(e) && t > e.data.length && (t = e.data.length), ti(e, t);
    }(s, parseInt(n, 10)) : (n = "after" === n ? ai(s) + 1 : ai(s), ti(s.parentNode, n)) : null;
  },
      fi = Io,
      gi = function gi(e, t, n, o, r) {
    var s = o[r ? "startContainer" : "endContainer"],
        a = o[r ? "startOffset" : "endOffset"];
    var i = [];
    var l,
        d = 0;
    var c = e.getRoot();

    for (Ro(s) ? i.push(n ? function (e, t, n) {
      var o, r;

      for (r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && Ro(o); o = o.previousSibling) {
        r += e(o.data).length;
      }

      return r;
    }(t, s, a) : a) : (l = s.childNodes, a >= l.length && l.length && (d = 1, a = Math.max(0, l.length - 1)), i.push(e.nodeIndex(l[a], n) + d)); s && s !== c; s = s.parentNode) {
      i.push(e.nodeIndex(s, n));
    }

    return i;
  },
      pi = function pi(e, t, n) {
    var o = 0;
    return Bt.each(e.select(t), function (e) {
      if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void o++;
    }), o;
  },
      hi = function hi(e, t) {
    var n, o;
    var r = t ? "start" : "end";

    if (n = e[r + "Container"], o = e[r + "Offset"], Co(n) && "TR" === n.nodeName) {
      var _r17 = n.childNodes;
      n = _r17[Math.min(t ? o : o - 1, _r17.length - 1)], n && (o = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, o));
    }
  },
      bi = function bi(e) {
    return hi(e, !0), hi(e, !1), e;
  },
      vi = function vi(e, t) {
    var n;
    if (Co(e) && (e = La(e, t), fi(e))) return e;

    if (Or(e)) {
      if (Ro(e) && Rr(e) && (e = e.parentNode), n = e.previousSibling, fi(n)) return n;
      if (n = e.nextSibling, fi(n)) return n;
    }
  },
      yi = function yi(e, t, n) {
    var o = n.getNode();
    var r = o ? o.nodeName : null;
    var s = n.getRng();
    if (fi(o) || "IMG" === r) return {
      name: r,
      index: pi(n.dom, r, o)
    };

    var a = function (e) {
      return vi(e.startContainer, e.startOffset) || vi(e.endContainer, e.endOffset);
    }(s);

    return a ? (r = a.tagName, {
      name: r,
      index: pi(n.dom, r, a)
    }) : function (e, t, n, o) {
      var r = t.dom,
          s = gi(r, e, n, o, !0),
          a = t.isForward(),
          i = Ir(o) ? {
        isFakeCaret: !0
      } : {};
      return t.isCollapsed() ? _objectSpread({
        start: s,
        forward: a
      }, i) : _objectSpread({
        start: s,
        end: gi(r, e, n, o, !1),
        forward: a
      }, i);
    }(e, n, t, s);
  },
      Ci = function Ci(e, t, n) {
    var o = {
      "data-mce-type": "bookmark",
      id: t,
      style: "overflow:hidden;line-height:0px"
    };
    return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o);
  },
      wi = function wi(e, t) {
    var n = e.dom;
    var o = e.getRng();
    var r = n.uniqueId(),
        s = e.isCollapsed(),
        a = e.getNode(),
        i = a.nodeName,
        l = e.isForward();
    if ("IMG" === i) return {
      name: i,
      index: pi(n, i, a)
    };
    var d = bi(o.cloneRange());

    if (!s) {
      d.collapse(!1);

      var _e21 = Ci(n, r + "_end", t);

      oi(n, d, _e21);
    }

    o = bi(o), o.collapse(!0);
    var c = Ci(n, r + "_start", t);
    return oi(n, o, c), e.moveToBookmark({
      id: r,
      keep: !0,
      forward: l
    }), {
      id: r,
      forward: l
    };
  },
      xi = O(yi, R, !0),
      ki = function ki(e) {
    var t = function t(_t21) {
      return _t21(e);
    },
        n = N(e),
        o = function o() {
      return r;
    },
        r = {
      tag: !0,
      inner: e,
      fold: function fold(t, n) {
        return n(e);
      },
      isValue: L,
      isError: P,
      map: function map(t) {
        return _i.value(t(e));
      },
      mapError: o,
      bind: t,
      exists: t,
      forall: t,
      getOr: n,
      or: o,
      getOrThunk: n,
      orThunk: o,
      getOrDie: n,
      each: function each(t) {
        t(e);
      },
      toOptional: function toOptional() {
        return M.some(e);
      }
    };

    return r;
  },
      Si = function Si(e) {
    var t = function t() {
      return n;
    },
        n = {
      tag: !1,
      inner: e,
      fold: function fold(t, n) {
        return t(e);
      },
      isValue: P,
      isError: L,
      map: t,
      mapError: function mapError(t) {
        return _i.error(t(e));
      },
      bind: t,
      exists: P,
      forall: L,
      getOr: R,
      or: R,
      getOrThunk: B,
      orThunk: B,
      getOrDie: (o = String(e), function () {
        throw new Error(o);
      }),
      each: S,
      toOptional: M.none
    };

    var o;
    return n;
  },
      _i = {
    value: ki,
    error: Si,
    fromOption: function fromOption(e, t) {
      return e.fold(function () {
        return Si(t);
      }, ki);
    }
  },
      Ei = function Ei(e) {
    if (!p(e)) throw new Error("cases must be an array");
    if (0 === e.length) throw new Error("there must be at least one case");
    var t = [],
        n = {};
    return $(e, function (o, r) {
      var s = ue(o);
      if (1 !== s.length) throw new Error("one and only one name per case");
      var a = s[0],
          i = o[a];
      if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
      if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
      if (!p(i)) throw new Error("case arguments must be an array");
      t.push(a), n[a] = function () {
        for (var _len8 = arguments.length, n = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          n[_key8] = arguments[_key8];
        }

        var o = n.length;
        if (o !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o);
        return {
          fold: function fold() {
            for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              t[_key9] = arguments[_key9];
            }

            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
            return t[r].apply(null, n);
          },
          match: function match(e) {
            var o = ue(e);
            if (t.length !== o.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(","));
            if (!te(t, function (e) {
              return j(o, e);
            })) throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", "));
            return e[a].apply(null, n);
          },
          log: function log(e) {
            console.log(e, {
              constructors: t,
              constructor: a,
              params: n
            });
          }
        };
      };
    }), n;
  };

  Ei([{
    bothErrors: ["error1", "error2"]
  }, {
    firstError: ["error1", "value2"]
  }, {
    secondError: ["value1", "error2"]
  }, {
    bothValues: ["value1", "value2"]
  }]);

  var Ni = function Ni(e) {
    return "inline-command" === e.type || "inline-format" === e.type;
  },
      Ri = function Ri(e) {
    return "block-command" === e.type || "block-format" === e.type;
  },
      Ai = function Ai(e) {
    var t = function t(_t22) {
      return _i.error({
        message: _t22,
        pattern: e
      });
    },
        n = function n(_n30, o, r) {
      if (void 0 !== e.format) {
        var _r18;

        if (p(e.format)) {
          if (!te(e.format, m)) return t(_n30 + " pattern has non-string items in the `format` array");
          _r18 = e.format;
        } else {
          if (!m(e.format)) return t(_n30 + " pattern has non-string `format` parameter");
          _r18 = [e.format];
        }

        return _i.value(o(_r18));
      }

      return void 0 !== e.cmd ? m(e.cmd) ? _i.value(r(e.cmd, e.value)) : t(_n30 + " pattern has non-string `cmd` parameter") : t(_n30 + " pattern is missing both `format` and `cmd` parameters");
    };

    if (!f(e)) return t("Raw pattern is not an object");
    if (!m(e.start)) return t("Raw pattern is missing `start` parameter");

    if (void 0 !== e.end) {
      if (!m(e.end)) return t("Inline pattern has non-string `end` parameter");
      if (0 === e.start.length && 0 === e.end.length) return t("Inline pattern has empty `start` and `end` parameters");
      var _o26 = e.start,
          _r19 = e.end;
      return 0 === _r19.length && (_r19 = _o26, _o26 = ""), n("Inline", function (e) {
        return {
          type: "inline-format",
          start: _o26,
          end: _r19,
          format: e
        };
      }, function (e, t) {
        return {
          type: "inline-command",
          start: _o26,
          end: _r19,
          cmd: e,
          value: t
        };
      });
    }

    return void 0 !== e.replacement ? m(e.replacement) ? 0 === e.start.length ? t("Replacement pattern has empty `start` parameter") : _i.value({
      type: "inline-command",
      start: "",
      end: e.start,
      cmd: "mceInsertContent",
      value: e.replacement
    }) : t("Replacement pattern has non-string `replacement` parameter") : 0 === e.start.length ? t("Block pattern has empty `start` parameter") : n("Block", function (t) {
      return {
        type: "block-format",
        start: e.start,
        format: t[0]
      };
    }, function (t, n) {
      return {
        type: "block-command",
        start: e.start,
        cmd: t,
        value: n
      };
    });
  },
      Oi = function Oi(e) {
    return function (e) {
      return se(e, function (e, t) {
        return e.start.length === t.start.length ? 0 : e.start.length > t.start.length ? -1 : 1;
      });
    }(K(e, Ri));
  },
      Ti = function Ti(e) {
    return K(e, Ni);
  },
      Bi = function Bi(e) {
    var t = function (e) {
      var t = [],
          n = [];
      return $(e, function (e) {
        e.fold(function (e) {
          t.push(e);
        }, function (e) {
          n.push(e);
        });
      }), {
        errors: t,
        values: n
      };
    }(H(e, Ai));

    return $(t.errors, function (e) {
      return console.error(e.message, e.pattern);
    }), t.values;
  },
      Di = Ct().deviceType,
      Pi = Di.isTouch(),
      Li = Qs.DOM,
      Mi = function Mi(e) {
    return u(e, RegExp);
  },
      Ii = function Ii(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      Fi = function Fi(e) {
    return m(e) || f(e);
  },
      Ui = function Ui(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return function (n) {
      var o = m(n);

      if (o) {
        if (-1 !== n.indexOf("=")) {
          var _r20 = function (e) {
            var t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
            return Y(t, function (e, t) {
              var n = t.split("="),
                  o = n[0],
                  r = n.length > 1 ? n[1] : o;
              return e[He(o)] = He(r), e;
            }, {});
          }(n);

          return {
            value: we(_r20, e.id).getOr(t),
            valid: o
          };
        }

        return {
          value: n,
          valid: o
        };
      }

      return {
        valid: !1,
        message: "Must be a string."
      };
    };
  },
      zi = Ii("iframe_attrs"),
      ji = Ii("doctype"),
      Vi = Ii("document_base_url"),
      Hi = Ii("body_id"),
      $i = Ii("body_class"),
      qi = Ii("content_security_policy"),
      Wi = Ii("br_in_pre"),
      Ki = Ii("forced_root_block"),
      Gi = Ii("forced_root_block_attrs"),
      Yi = Ii("newline_behavior"),
      Xi = Ii("br_newline_selector"),
      Qi = Ii("no_newline_selector"),
      Ji = Ii("keep_styles"),
      Zi = Ii("end_container_on_empty_block"),
      el = Ii("automatic_uploads"),
      tl = Ii("images_reuse_filename"),
      nl = Ii("images_replace_blob_uris"),
      ol = Ii("icons"),
      rl = Ii("icons_url"),
      sl = Ii("images_upload_url"),
      al = Ii("images_upload_base_path"),
      il = Ii("images_upload_credentials"),
      ll = Ii("images_upload_handler"),
      dl = Ii("content_css_cors"),
      cl = Ii("referrer_policy"),
      ul = Ii("language"),
      ml = Ii("language_url"),
      fl = Ii("indent_use_margin"),
      gl = Ii("indentation"),
      pl = Ii("content_css"),
      hl = Ii("content_style"),
      bl = Ii("font_css"),
      vl = Ii("directionality"),
      yl = Ii("inline_boundaries_selector"),
      Cl = Ii("object_resizing"),
      wl = Ii("resize_img_proportional"),
      xl = Ii("placeholder"),
      kl = Ii("event_root"),
      Sl = Ii("service_message"),
      _l = Ii("theme"),
      El = Ii("theme_url"),
      Nl = Ii("model"),
      Rl = Ii("model_url"),
      Al = Ii("inline_boundaries"),
      Ol = Ii("formats"),
      Tl = Ii("preview_styles"),
      Bl = Ii("format_empty_lines"),
      Dl = Ii("custom_ui_selector"),
      Pl = Ii("inline"),
      Ll = Ii("hidden_input"),
      Ml = Ii("submit_patch"),
      Il = Ii("add_form_submit_trigger"),
      Fl = Ii("add_unload_trigger"),
      Ul = Ii("custom_undo_redo_levels"),
      zl = Ii("disable_nodechange"),
      jl = Ii("readonly"),
      Vl = Ii("content_css_cors"),
      Hl = Ii("plugins"),
      $l = Ii("external_plugins"),
      ql = Ii("block_unsupported_drop"),
      Wl = Ii("visual"),
      Kl = Ii("visual_table_class"),
      Gl = Ii("visual_anchor_class"),
      Yl = Ii("iframe_aria_text"),
      Xl = Ii("setup"),
      Ql = Ii("init_instance_callback"),
      Jl = Ii("urlconverter_callback"),
      Zl = Ii("auto_focus"),
      ed = Ii("browser_spellcheck"),
      td = Ii("protect"),
      nd = Ii("paste_block_drop"),
      od = Ii("paste_data_images"),
      rd = Ii("paste_preprocess"),
      sd = Ii("paste_postprocess"),
      ad = Ii("paste_webkit_styles"),
      id = Ii("paste_remove_styles_if_webkit"),
      ld = Ii("paste_merge_formats"),
      dd = Ii("smart_paste"),
      cd = Ii("paste_as_text"),
      ud = Ii("paste_tab_spaces"),
      md = Ii("allow_html_data_urls"),
      fd = Ii("text_patterns"),
      gd = Ii("noneditable_class"),
      pd = Ii("editable_class"),
      hd = Ii("noneditable_regexp"),
      bd = function bd(e) {
    return Bt.explode(e.options.get("images_file_types"));
  },
      vd = Ii("table_tab_navigation"),
      yd = Co,
      Cd = Ro,
      wd = function wd(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  },
      xd = function xd(e) {
    var t = _r(e);

    return {
      count: e.length - t.length,
      text: t
    };
  },
      kd = function kd(e) {
    var t;

    for (; -1 !== (t = e.data.lastIndexOf(kr));) {
      e.deleteData(t, 1);
    }
  },
      Sd = function Sd(e, t) {
    return Ed(e), t;
  },
      _d = function _d(e, t) {
    return ti.isTextPosition(t) ? function (e, t) {
      return Cd(e) && t.container() === e ? function (e, t) {
        var n = xd(e.data.substr(0, t.offset())),
            o = xd(e.data.substr(t.offset()));
        return (n.text + o.text).length > 0 ? (kd(e), ti(e, t.offset() - n.count)) : t;
      }(e, t) : Sd(e, t);
    }(e, t) : function (e, t) {
      return t.container() === e.parentNode ? function (e, t) {
        var n = t.container(),
            o = function (e, t) {
          var n = z(e, t);
          return -1 === n ? M.none() : M.some(n);
        }(de(n.childNodes), e).map(function (e) {
          return e < t.offset() ? ti(n, t.offset() - 1) : t;
        }).getOr(t);

        return Ed(e), o;
      }(e, t) : Sd(e, t);
    }(e, t);
  },
      Ed = function Ed(e) {
    yd(e) && Or(e) && (Tr(e) ? e.removeAttribute("data-mce-caret") : wd(e)), Cd(e) && (kd(e), 0 === e.data.length && wd(e));
  },
      Nd = Io,
      Rd = Uo,
      Ad = Fo,
      Od = function Od(e, t, n) {
    var o = Aa(t.getBoundingClientRect(), n);
    var r, s;

    if ("BODY" === e.tagName) {
      var _t23 = e.ownerDocument.documentElement;
      r = e.scrollLeft || _t23.scrollLeft, s = e.scrollTop || _t23.scrollTop;
    } else {
      var _t24 = e.getBoundingClientRect();

      r = e.scrollLeft - _t24.left, s = e.scrollTop - _t24.top;
    }

    o.left += r, o.right += r, o.top += s, o.bottom += s, o.width = 1;
    var a = t.offsetWidth - t.clientWidth;
    return a > 0 && (n && (a *= -1), o.left += a, o.right += a), o;
  },
      Td = function Td(e, t, n, o) {
    var r = aa();
    var s, a;

    var i = Ki(e),
        l = e.dom,
        d = function d() {
      (function (e) {
        var t = hr(fn(e), "*[contentEditable=false],video,audio,embed,object");

        for (var _e22 = 0; _e22 < t.length; _e22++) {
          var _n31 = t[_e22].dom;
          var _o27 = _n31.previousSibling;

          if (Lr(_o27)) {
            var _e23 = _o27.data;
            1 === _e23.length ? _o27.parentNode.removeChild(_o27) : _o27.deleteData(_e23.length - 1, 1);
          }

          _o27 = _n31.nextSibling, Pr(_o27) && (1 === _o27.data.length ? _o27.parentNode.removeChild(_o27) : _o27.deleteData(0, 1));
        }
      })(t), a && (Ed(a), a = null), r.on(function (e) {
        l.remove(e.caret), r.clear();
      }), s && (clearInterval(s), s = void 0);
    };

    return {
      show: function show(e, c) {
        var u;
        if (d(), Ad(c)) return null;
        if (!n(c)) return a = function (e, t) {
          var n = e.ownerDocument.createTextNode(kr),
              o = e.parentNode;

          if (t) {
            var _t25 = e.previousSibling;

            if (Nr(_t25)) {
              if (Or(_t25)) return _t25;
              if (Lr(_t25)) return _t25.splitText(_t25.data.length - 1);
            }

            o.insertBefore(n, e);
          } else {
            var _t26 = e.nextSibling;

            if (Nr(_t26)) {
              if (Or(_t26)) return _t26;
              if (Pr(_t26)) return _t26.splitText(1), _t26;
            }

            e.nextSibling ? o.insertBefore(n, e.nextSibling) : o.appendChild(n);
          }

          return n;
        }(c, e), u = c.ownerDocument.createRange(), Dd(a.nextSibling) ? (u.setStart(a, 0), u.setEnd(a, 0)) : (u.setStart(a, 1), u.setEnd(a, 1)), u;
        {
          a = function (e, t, n) {
            var o = t.ownerDocument.createElement(e);
            o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(Cr().dom);
            var r = t.parentNode;
            return n ? r.insertBefore(o, t) : t.nextSibling ? r.insertBefore(o, t.nextSibling) : r.appendChild(o), o;
          }(i, c, e);

          var _n32 = Od(t, c, e);

          l.setStyle(a, "top", _n32.top);

          var _d2 = l.create("div", {
            "class": "mce-visual-caret",
            "data-mce-bogus": "all"
          });

          l.setStyles(_d2, _objectSpread({}, _n32)), l.add(t, _d2), r.set({
            caret: _d2,
            element: c,
            before: e
          }), e && l.addClass(_d2, "mce-visual-caret-before"), s = setInterval(function () {
            r.on(function (e) {
              o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden");
            });
          }, 500), u = c.ownerDocument.createRange(), u.setStart(a, 0), u.setEnd(a, 0);
        }
        return u;
      },
      hide: d,
      getCss: function getCss() {
        return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
      },
      reposition: function reposition() {
        r.on(function (e) {
          var n = Od(t, e.element, e.before);
          l.setStyles(e.caret, _objectSpread({}, n));
        });
      },
      destroy: function destroy() {
        return clearInterval(s);
      }
    };
  },
      Bd = function Bd() {
    return Nt.browser.isFirefox();
  },
      Dd = function Dd(e) {
    return Nd(e) || Rd(e);
  },
      Pd = function Pd(e) {
    return Dd(e) || _o(e) && Bd();
  },
      Ld = Mo,
      Md = Io,
      Id = Uo,
      Fd = xo("display", "block table table-cell table-caption list-item"),
      Ud = Or,
      zd = Rr,
      jd = Co,
      Vd = Wr,
      Hd = function Hd(e) {
    return e > 0;
  },
      $d = function $d(e) {
    return e < 0;
  },
      qd = function qd(e, t) {
    var n;

    for (; n = e(t);) {
      if (!zd(n)) return n;
    }

    return null;
  },
      Wd = function Wd(e, t, n, o, r) {
    var s = new Qo(e, o),
        a = Md(e) || zd(e);

    if ($d(t)) {
      if (a && n(e = qd(s.prev.bind(s), !0))) return e;

      for (; e = qd(s.prev.bind(s), r);) {
        if (n(e)) return e;
      }
    }

    if (Hd(t)) {
      if (a && n(e = qd(s.next.bind(s), !0))) return e;

      for (; e = qd(s.next.bind(s), r);) {
        if (n(e)) return e;
      }
    }

    return null;
  },
      Kd = function Kd(e, t) {
    for (; e && e !== t;) {
      if (Fd(e)) return e;
      e = e.parentNode;
    }

    return null;
  },
      Gd = function Gd(e, t, n) {
    return Kd(e.container(), n) === Kd(t.container(), n);
  },
      Yd = function Yd(e, t) {
    if (!t) return null;
    var n = t.container(),
        o = t.offset();
    return jd(n) ? n.childNodes[o + e] : null;
  },
      Xd = function Xd(e, t) {
    var n = t.ownerDocument.createRange();
    return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n;
  },
      Qd = function Qd(e, t, n) {
    return Kd(t, e) === Kd(n, e);
  },
      Jd = function Jd(e, t, n) {
    var o = e ? "previousSibling" : "nextSibling";

    for (; n && n !== t;) {
      var _e24 = n[o];

      if (Ud(_e24) && (_e24 = _e24[o]), Md(_e24) || Id(_e24)) {
        if (Qd(t, _e24, n)) return _e24;
        break;
      }

      if (Vd(_e24)) break;
      n = n.parentNode;
    }

    return null;
  },
      Zd = O(Xd, !0),
      ec = O(Xd, !1),
      tc = function tc(e, t, n) {
    var o;
    var r = O(Jd, !0, t),
        s = O(Jd, !1, t);
    var a = n.startContainer;
    var i = n.startOffset;

    if (Rr(a)) {
      jd(a) || (a = a.parentNode);

      var _e25 = a.getAttribute("data-mce-caret");

      if ("before" === _e25 && (o = a.nextSibling, Pd(o))) return Zd(o);
      if ("after" === _e25 && (o = a.previousSibling, Pd(o))) return ec(o);
    }

    if (!n.collapsed) return n;

    if (Ro(a)) {
      if (Ud(a)) {
        if (1 === e) {
          if (o = s(a), o) return Zd(o);
          if (o = r(a), o) return ec(o);
        }

        if (-1 === e) {
          if (o = r(a), o) return ec(o);
          if (o = s(a), o) return Zd(o);
        }

        return n;
      }

      if (Lr(a) && i >= a.data.length - 1) return 1 === e && (o = s(a), o) ? Zd(o) : n;
      if (Pr(a) && i <= 1) return -1 === e && (o = r(a), o) ? ec(o) : n;
      if (i === a.data.length) return o = s(a), o ? Zd(o) : n;
      if (0 === i) return o = r(a), o ? ec(o) : n;
    }

    return n;
  },
      nc = function nc(e, t) {
    return M.from(Yd(e ? 0 : -1, t)).filter(Md);
  },
      oc = function oc(e, t, n) {
    var o = tc(e, t, n);
    return -1 === e ? ti.fromRangeStart(o) : ti.fromRangeEnd(o);
  },
      rc = function rc(e) {
    return M.from(e.getNode()).map(fn);
  },
      sc = function sc(e, t) {
    for (; t = e(t);) {
      if (t.isVisible()) return t;
    }

    return t;
  },
      ac = function ac(e, t) {
    var n = Gd(e, t);
    return !(n || !Po(e.getNode())) || n;
  };

  var ic;
  !function (e) {
    e[e.Backwards = -1] = "Backwards", e[e.Forwards = 1] = "Forwards";
  }(ic || (ic = {}));

  var lc = Io,
      dc = Ro,
      cc = Co,
      uc = Po,
      mc = Wr,
      fc = function fc(e) {
    return Hr(e) || function (e) {
      return !!Kr(e) && !0 !== Y(de(e.getElementsByTagName("*")), function (e, t) {
        return e || Fr(t);
      }, !1);
    }(e);
  },
      gc = Gr,
      pc = function pc(e, t) {
    return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null;
  },
      hc = function hc(e, t) {
    if (Hd(e)) {
      if (mc(t.previousSibling) && !dc(t.previousSibling)) return ti.before(t);
      if (dc(t)) return ti(t, 0);
    }

    if ($d(e)) {
      if (mc(t.nextSibling) && !dc(t.nextSibling)) return ti.after(t);
      if (dc(t)) return ti(t, t.data.length);
    }

    return $d(e) ? uc(t) ? ti.before(t) : ti.after(t) : ti.before(t);
  },
      bc = function bc(e, t, n) {
    var o, r, s, a;
    if (!cc(n) || !t) return null;

    if (t.isEqual(ti.after(n)) && n.lastChild) {
      if (a = ti.after(n.lastChild), $d(e) && mc(n.lastChild) && cc(n.lastChild)) return uc(n.lastChild) ? ti.before(n.lastChild) : a;
    } else a = t;

    var i = a.container();
    var l = a.offset();

    if (dc(i)) {
      if ($d(e) && l > 0) return ti(i, --l);
      if (Hd(e) && l < i.length) return ti(i, ++l);
      o = i;
    } else {
      if ($d(e) && l > 0 && (r = pc(i, l - 1), mc(r))) return !fc(r) && (s = Wd(r, e, gc, r), s) ? dc(s) ? ti(s, s.data.length) : ti.after(s) : dc(r) ? ti(r, r.data.length) : ti.before(r);
      if (Hd(e) && l < i.childNodes.length && (r = pc(i, l), mc(r))) return uc(r) ? function (e, t) {
        var n = t.nextSibling;
        return n && mc(n) ? dc(n) ? ti(n, 0) : ti.before(n) : bc(ic.Forwards, ti.after(t), e);
      }(n, r) : !fc(r) && (s = Wd(r, e, gc, r), s) ? dc(s) ? ti(s, 0) : ti.before(s) : dc(r) ? ti(r, 0) : ti.after(r);
      o = r || a.getNode();
    }

    if ((Hd(e) && a.isAtEnd() || $d(e) && a.isAtStart()) && (o = Wd(o, e, L, n, !0), gc(o, n))) return hc(e, o);
    r = Wd(o, e, gc, n);
    var d = Be(K(function (e, t) {
      var n = [];

      for (; e && e !== t;) {
        n.push(e), e = e.parentNode;
      }

      return n;
    }(i, n), lc));
    return !d || r && d.contains(r) ? r ? hc(e, r) : null : (a = Hd(e) ? ti.after(d) : ti.before(d), a);
  },
      vc = function vc(e) {
    return {
      next: function next(t) {
        return bc(ic.Forwards, t, e);
      },
      prev: function prev(t) {
        return bc(ic.Backwards, t, e);
      }
    };
  },
      yc = function yc(e) {
    return ti.isTextPosition(e) ? 0 === e.offset() : Wr(e.getNode());
  },
      Cc = function Cc(e) {
    if (ti.isTextPosition(e)) {
      var _t27 = e.container();

      return e.offset() === _t27.data.length;
    }

    return Wr(e.getNode(!0));
  },
      wc = function wc(e, t) {
    return !ti.isTextPosition(e) && !ti.isTextPosition(t) && e.getNode() === t.getNode(!0);
  },
      xc = function xc(e, t, n) {
    var o = vc(t);
    return M.from(e ? o.next(n) : o.prev(n));
  },
      kc = function kc(e, t, n) {
    return xc(e, t, n).bind(function (o) {
      return Gd(n, o, t) && function (e, t, n) {
        return e ? !wc(t, n) && (o = t, !(!ti.isTextPosition(o) && Po(o.getNode()))) && Cc(t) && yc(n) : !wc(n, t) && yc(t) && Cc(n);
        var o;
      }(e, n, o) ? xc(e, t, o) : M.some(o);
    });
  },
      Sc = function Sc(e, t, n, o) {
    return kc(e, t, n).bind(function (n) {
      return o(n) ? Sc(e, t, n, o) : M.some(n);
    });
  },
      _c = function _c(e, t) {
    var n = e ? t.firstChild : t.lastChild;
    return Ro(n) ? M.some(ti(n, e ? 0 : n.data.length)) : n ? Wr(n) ? M.some(e ? ti.before(n) : Po(o = n) ? ti.before(o) : ti.after(o)) : function (e, t, n) {
      var o = e ? ti.before(n) : ti.after(n);
      return xc(e, t, o);
    }(e, t, n) : M.none();
    var o;
  },
      Ec = O(xc, !0),
      Nc = O(xc, !1),
      Rc = O(_c, !0),
      Ac = O(_c, !1),
      Oc = "_mce_caret",
      Tc = function Tc(e) {
    return Co(e) && e.id === Oc;
  },
      Bc = function Bc(e, t) {
    for (; t && t !== e;) {
      if (t.id === Oc) return t;
      t = t.parentNode;
    }

    return null;
  },
      Dc = function Dc(e) {
    return xe(e, "name");
  },
      Pc = function Pc(e) {
    return Bt.isArray(e.start);
  },
      Lc = function Lc(e) {
    return !(!Dc(e) && b(e.forward)) || e.forward;
  },
      Mc = function Mc(e, t) {
    return Co(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t;
  },
      Ic = function Ic(e, t) {
    return Ac(e).fold(P, function (e) {
      return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0;
    });
  },
      Fc = function Fc(e, t, n) {
    return !(!function (e) {
      return !1 === e.hasChildNodes();
    }(t) || !Bc(e, t) || (function (e, t) {
      var n = e.ownerDocument.createTextNode(kr);
      e.appendChild(n), t.setStart(n, 0), t.setEnd(n, 0);
    }(t, n), 0));
  },
      Uc = function Uc(e, t, n, o) {
    var r = n[t ? "start" : "end"];
    var s, a, i, l;
    var d = e.getRoot();

    if (r) {
      for (i = r[0], a = d, s = r.length - 1; s >= 1; s--) {
        if (l = a.childNodes, Fc(d, a, o)) return !0;
        if (r[s] > l.length - 1) return !!Fc(d, a, o) || Ic(a, o);
        a = l[r[s]];
      }

      3 === a.nodeType && (i = Math.min(r[0], a.nodeValue.length)), 1 === a.nodeType && (i = Math.min(r[0], a.childNodes.length)), t ? o.setStart(a, i) : o.setEnd(a, i);
    }

    return !0;
  },
      zc = function zc(e) {
    return Ro(e) && e.data.length > 0;
  },
      jc = function jc(e, t, n) {
    var o,
        r,
        s,
        a,
        i = e.get(n.id + "_" + t);
    var l = n.keep;
    var d, c;

    if (i) {
      if (o = i.parentNode, "start" === t ? (l ? i.hasChildNodes() ? (o = i.firstChild, r = 1) : zc(i.nextSibling) ? (o = i.nextSibling, r = 0) : zc(i.previousSibling) ? (o = i.previousSibling, r = i.previousSibling.data.length) : (o = i.parentNode, r = e.nodeIndex(i) + 1) : r = e.nodeIndex(i), d = o, c = r) : (l ? i.hasChildNodes() ? (o = i.firstChild, r = 1) : zc(i.previousSibling) ? (o = i.previousSibling, r = i.previousSibling.data.length) : (o = i.parentNode, r = e.nodeIndex(i)) : r = e.nodeIndex(i), d = o, c = r), !l) {
        for (a = i.previousSibling, s = i.nextSibling, Bt.each(Bt.grep(i.childNodes), function (e) {
          Ro(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
        }); i = e.get(n.id + "_" + t);) {
          e.remove(i, !0);
        }

        a && s && a.nodeType === s.nodeType && Ro(a) && !Nt.browser.isOpera() && (r = a.nodeValue.length, a.appendData(s.nodeValue), e.remove(s), d = a, c = r);
      }

      return M.some(ti(d, c));
    }

    return M.none();
  },
      Vc = function Vc(e, t, n) {
    return function (e, t, n) {
      return 2 === t ? yi(_r, n, e) : 3 === t ? function (e) {
        var t = e.getRng();
        return {
          start: ui(e.dom.getRoot(), ti.fromRangeStart(t)),
          end: ui(e.dom.getRoot(), ti.fromRangeEnd(t)),
          forward: e.isForward()
        };
      }(e) : t ? function (e) {
        return {
          rng: e.getRng(),
          forward: e.isForward()
        };
      }(e) : wi(e, !1);
    }(e, t, n);
  },
      Hc = function Hc(e, t) {
    (function (e, t) {
      var n = e.dom;

      if (t) {
        if (Pc(t)) return function (e, t) {
          var n = e.createRng();
          return Uc(e, !0, t, n) && Uc(e, !1, t, n) ? M.some({
            range: n,
            forward: Lc(t)
          }) : M.none();
        }(n, t);
        if (function (e) {
          return m(e.start);
        }(t)) return M.some(function (e, t) {
          var n = e.createRng(),
              o = mi(e.getRoot(), t.start);
          n.setStart(o.container(), o.offset());
          var r = mi(e.getRoot(), t.end);
          return n.setEnd(r.container(), r.offset()), {
            range: n,
            forward: Lc(t)
          };
        }(n, t));
        if (function (e) {
          return xe(e, "id");
        }(t)) return function (e, t) {
          var n = jc(e, "start", t),
              o = jc(e, "end", t);
          return Pt(n, o.or(n), function (n, o) {
            var r = e.createRng();
            return r.setStart(Mc(e, n.container()), n.offset()), r.setEnd(Mc(e, o.container()), o.offset()), {
              range: r,
              forward: Lc(t)
            };
          });
        }(n, t);
        if (Dc(t)) return function (e, t) {
          return M.from(e.select(t.name)[t.index]).map(function (t) {
            var n = e.createRng();
            return n.selectNode(t), {
              range: n,
              forward: !0
            };
          });
        }(n, t);
        if (function (e) {
          return xe(e, "rng");
        }(t)) return M.some({
          range: t.rng,
          forward: Lc(t)
        });
      }

      return M.none();
    })(e, t).each(function (_ref2) {
      var t = _ref2.range,
          n = _ref2.forward;
      e.setRng(t, n);
    });
  },
      $c = function $c(e) {
    return Co(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type");
  },
      qc = (fr, function (e) {
    return "\xa0" === e;
  });

  var Wc = function Wc(e) {
    return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e);
  },
      Kc = function Kc(e) {
    return !Wc(e) && !qc(e) && !gr(e);
  },
      Gc = function Gc(e) {
    var t = e.toString(16);
    return (1 === t.length ? "0" + t : t).toUpperCase();
  },
      Yc = function Yc(e) {
    return function (e) {
      return {
        value: e
      };
    }(Gc(e.red) + Gc(e.green) + Gc(e.blue));
  },
      Xc = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
      Qc = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
      Jc = function Jc(e, t, n, o) {
    return {
      red: e,
      green: t,
      blue: n,
      alpha: o
    };
  },
      Zc = function Zc(e, t, n, o) {
    var r = parseInt(e, 10),
        s = parseInt(t, 10),
        a = parseInt(n, 10),
        i = parseFloat(o);
    return Jc(r, s, a, i);
  },
      eu = function eu(e) {
    return function (e) {
      if ("transparent" === e) return M.some(Jc(0, 0, 0, 0));
      var t = Xc.exec(e);
      if (null !== t) return M.some(Zc(t[1], t[2], t[3], "1"));
      var n = Qc.exec(e);
      return null !== n ? M.some(Zc(n[1], n[2], n[3], n[4])) : M.none();
    }(e).map(Yc).map(function (e) {
      return "#" + e.value;
    }).getOr(e);
  },
      tu = function tu(e) {
    return !!e.nodeType;
  },
      nu = function nu(e, t, n) {
    var o = n.startOffset;
    var r = n.startContainer;
    var s;

    if ((r !== n.endContainer || !(s = r.childNodes[o]) || !/^(IMG)$/.test(s.nodeName)) && Co(r)) {
      var _s8 = r.childNodes;

      var _a7;

      o < _s8.length ? (r = _s8[o], _a7 = new Qo(r, e.getParent(r, e.isBlock))) : (r = _s8[_s8.length - 1], _a7 = new Qo(r, e.getParent(r, e.isBlock)), _a7.next(!0));

      for (var _e26 = _a7.current(); _e26; _e26 = _a7.next()) {
        if (Ro(_e26) && !au(_e26)) return n.setStart(_e26, 0), void t.setRng(n);
      }
    }
  },
      ou = function ou(e, t, n) {
    if (e) {
      var _o28 = t ? "nextSibling" : "previousSibling";

      for (e = n ? e : e[_o28]; e; e = e[_o28]) {
        if (Co(e) || !au(e)) return e;
      }
    }
  },
      ru = function ru(e, t) {
    return tu(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()];
  },
      su = function su(e, t, n) {
    return e.schema.isValidChild(t, n);
  },
      au = function au(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

    if (C(e) && Ro(e)) {
      var _n33 = t ? e.data.replace(/ /g, "\xa0") : e.data;

      return Xr(_n33);
    }

    return !1;
  },
      iu = function iu(e, t) {
    return w(e) ? e = e(t) : C(t) && (e = e.replace(/%(\w+)/g, function (e, n) {
      return t[n] || e;
    })), e;
  },
      lu = function lu(e, t) {
    return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase();
  },
      du = function du(e, t) {
    return "color" !== t && "backgroundColor" !== t || (e = eu(e)), "fontWeight" === t && 700 === e && (e = "bold"), "fontFamily" === t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e;
  },
      cu = function cu(e, t, n) {
    return du(e.getStyle(t, n), n);
  },
      uu = function uu(e, t) {
    var n;
    return e.getParent(t, function (t) {
      return n = e.getStyle(t, "text-decoration"), n && "none" !== n;
    }), n;
  },
      mu = function mu(e, t, n) {
    return e.getParents(t, n, e.getRoot());
  },
      fu = function fu(e) {
    return ke(e, "block");
  },
      gu = function gu(e) {
    return ke(e, "selector");
  },
      pu = function pu(e) {
    return ke(e, "inline");
  },
      hu = function hu(e) {
    return gu(e) && !1 !== e.expand && !pu(e);
  },
      bu = $c,
      vu = mu,
      yu = au,
      Cu = ru,
      wu = function wu(e, t) {
    var n = t;

    for (; n;) {
      if (Co(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
      n = n.parentNode;
    }

    return t;
  },
      xu = function xu(e, t, n, o) {
    var r = t.data;

    for (var _t28 = n; e ? _t28 >= 0 : _t28 < r.length; e ? _t28-- : _t28++) {
      if (o(r.charAt(_t28))) return e ? _t28 + 1 : _t28;
    }

    return -1;
  },
      ku = function ku(e, t, n) {
    return xu(e, t, n, function (e) {
      return qc(e) || Wc(e);
    });
  },
      Su = function Su(e, t, n) {
    return xu(e, t, n, Kc);
  },
      _u = function _u(e, t, n, o, r, s) {
    var a;

    var i = e.getParent(n, e.isBlock) || t,
        l = function l(t, n, o) {
      var s = Ea(e),
          l = r ? s.backwards : s.forwards;
      return M.from(l(t, n, function (e, t) {
        return bu(e.parentNode) ? -1 : (a = e, o(r, e, t));
      }, i));
    };

    return l(n, o, ku).bind(function (e) {
      return s ? l(e.container, e.offset + (r ? -1 : 0), Su) : M.some(e);
    }).orThunk(function () {
      return a ? M.some({
        container: a,
        offset: r ? 0 : a.length
      }) : M.none();
    });
  },
      Eu = function Eu(e, t, n, o, r) {
    Ro(o) && Ke(o.data) && o[r] && (o = o[r]);
    var s = vu(e, o);

    for (var _o29 = 0; _o29 < s.length; _o29++) {
      for (var _r21 = 0; _r21 < t.length; _r21++) {
        var _a8 = t[_r21];
        if ((!C(_a8.collapsed) || _a8.collapsed === n.collapsed) && gu(_a8) && e.is(s[_o29], _a8.selector)) return s[_o29];
      }
    }

    return o;
  },
      Nu = function Nu(e, t, n, o) {
    var r = n;
    var s = e.dom,
        a = s.getRoot(),
        i = t[0];

    if (fu(i) && (r = i.wrapper ? null : s.getParent(n, i.block, a)), !r) {
      var _t29 = s.getParent(n, "LI,TD,TH");

      r = s.getParent(Ro(n) ? n.parentNode : n, function (t) {
        return t !== a && Cu(e, t);
      }, _t29);
    }

    if (r && fu(i) && i.wrapper && (r = vu(s, r, "ul,ol").reverse()[0] || r), !r) for (r = n; r[o] && !s.isBlock(r[o]) && (r = r[o], !lu(r, "br"));) {
      ;
    }
    return r || n;
  },
      Ru = function Ru(e, t, n, o) {
    var r = n.parentNode;
    return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || Ru(e, t, r, o));
  },
      Au = function Au(e, t, n, o, r) {
    var s = n;
    var a = r ? "previousSibling" : "nextSibling",
        i = e.getRoot();
    if (Ro(n) && !yu(n) && (r ? o > 0 : o < n.data.length)) return n;

    for (;;) {
      if (!t[0].block_expand && e.isBlock(s)) return s;

      for (var _t30 = s[a]; _t30; _t30 = _t30[a]) {
        var _n34 = Ro(_t30) && !Ru(e, i, _t30, a);

        if (!bu(_t30) && (!Po(l = _t30) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !yu(_t30, _n34)) return s;
      }

      if (s === i || s.parentNode === i) {
        n = s;
        break;
      }

      s = s.parentNode;
    }

    var l;
    return n;
  },
      Ou = function Ou(e) {
    return bu(e.parentNode) || bu(e);
  },
      Tu = function Tu(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var r = t.startContainer,
        s = t.startOffset,
        a = t.endContainer,
        i = t.endOffset;
    var l = e.dom,
        d = n[0];
    return Co(r) && r.hasChildNodes() && (r = La(r, s), Ro(r) && (s = 0)), Co(a) && a.hasChildNodes() && (a = La(a, t.collapsed ? i : i - 1), Ro(a) && (i = a.nodeValue.length)), r = wu(l, r), a = wu(l, a), Ou(r) && (r = bu(r) ? r : r.parentNode, r = t.collapsed ? r.previousSibling || r : r.nextSibling || r, Ro(r) && (s = t.collapsed ? r.length : 0)), Ou(a) && (a = bu(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, Ro(a) && (i = t.collapsed ? 0 : a.length)), t.collapsed && (_u(l, e.getBody(), r, s, !0, o).each(function (_ref3) {
      var e = _ref3.container,
          t = _ref3.offset;
      r = e, s = t;
    }), _u(l, e.getBody(), a, i, !1, o).each(function (_ref4) {
      var e = _ref4.container,
          t = _ref4.offset;
      a = e, i = t;
    })), (pu(d) || d.block_expand) && (pu(d) && Ro(r) && 0 !== s || (r = Au(l, n, r, s, !0)), pu(d) && Ro(a) && i !== a.nodeValue.length || (a = Au(l, n, a, i, !1))), hu(d) && (r = Eu(l, n, t, r, "previousSibling"), a = Eu(l, n, t, a, "nextSibling")), (fu(d) || gu(d)) && (r = Nu(e, n, r, "previousSibling"), a = Nu(e, n, a, "nextSibling"), fu(d) && (l.isBlock(r) || (r = Au(l, n, r, s, !0)), l.isBlock(a) || (a = Au(l, n, a, i, !1)))), Co(r) && (s = l.nodeIndex(r), r = r.parentNode), Co(a) && (i = l.nodeIndex(a) + 1, a = a.parentNode), {
      startContainer: r,
      startOffset: s,
      endContainer: a,
      endOffset: i
    };
  },
      Bu = function Bu(e, t, n) {
    var o = t.startOffset,
        r = La(t.startContainer, o),
        s = t.endOffset,
        a = La(t.endContainer, s - 1),
        i = function i(e) {
      var t = e[0];
      Ro(t) && t === r && o >= t.data.length && e.splice(0, 1);
      var n = e[e.length - 1];
      return 0 === s && e.length > 0 && n === a && Ro(n) && e.splice(e.length - 1, 1), e;
    },
        l = function l(e, t, n) {
      var o = [];

      for (; e && e !== n; e = e[t]) {
        o.push(e);
      }

      return o;
    },
        d = function d(t, n) {
      return e.getParent(t, function (e) {
        return e.parentNode === n;
      }, n);
    },
        c = function c(e, t, o) {
      var r = o ? "nextSibling" : "previousSibling";

      for (var _s9 = e, _a9 = _s9.parentNode; _s9 && _s9 !== t; _s9 = _a9) {
        _a9 = _s9.parentNode;

        var _t31 = l(_s9 === e ? _s9 : _s9[r], r);

        _t31.length && (o || _t31.reverse(), n(i(_t31)));
      }
    };

    if (r === a) return n(i([r]));
    var u = e.findCommonAncestor(r, a);
    if (e.isChildOf(r, a)) return c(r, u, !0);
    if (e.isChildOf(a, r)) return c(a, u);
    var m = d(r, u) || r,
        f = d(a, u) || a;
    c(r, m, !0);
    var g = l(m === r ? m : m.nextSibling, "nextSibling", f === a ? f.nextSibling : f);
    g.length && n(i(g)), c(a, f);
  },
      Du = function Du(e) {
    var t = [];
    if (e) for (var _n35 = 0; _n35 < e.rangeCount; _n35++) {
      t.push(e.getRangeAt(_n35));
    }
    return t;
  },
      Pu = function Pu(e, t) {
    var n = hr(t, "td[data-mce-selected],th[data-mce-selected]");
    return n.length > 0 ? n : function (e) {
      return K(function (e) {
        return ee(e, function (e) {
          var t = Pa(e);
          return t ? [fn(t)] : [];
        });
      }(e), ir);
    }(e);
  },
      Lu = function Lu(e) {
    return Pu(Du(e.selection.getSel()), fn(e.getBody()));
  },
      Mu = function Mu(e, t) {
    return Wo(e, "table", t);
  },
      Iu = function Iu(e) {
    return On(e).fold(N([e]), function (t) {
      return [e].concat(Iu(t));
    });
  },
      Fu = function Fu(e) {
    return Tn(e).fold(N([e]), function (t) {
      return "br" === Mt(t) ? Sn(t).map(function (t) {
        return [e].concat(Fu(t));
      }).getOr([]) : [e].concat(Fu(t));
    });
  },
      Uu = function Uu(e, t) {
    return Pt(function (e) {
      var t = e.startContainer,
          n = e.startOffset;
      return Ro(t) ? 0 === n ? M.some(fn(t)) : M.none() : M.from(t.childNodes[n]).map(fn);
    }(t), function (e) {
      var t = e.endContainer,
          n = e.endOffset;
      return Ro(t) ? n === t.data.length ? M.some(fn(t)) : M.none() : M.from(t.childNodes[n - 1]).map(fn);
    }(t), function (t, n) {
      var o = Q(Iu(e), O(vn, t)),
          r = Q(Fu(e), O(vn, n));
      return o.isSome() && r.isSome();
    }).getOr(!1);
  },
      zu = function zu(e, t, n, o) {
    var r = n,
        s = new Qo(n, r),
        a = ve(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
      return !j(["td", "th", "table"], t.toLowerCase());
    });

    do {
      if (Ro(n) && 0 !== Bt.trim(n.nodeValue).length) return void (o ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
      if (a[n.nodeName]) return void (o ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
    } while (n = o ? s.next() : s.prev());

    "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length));
  },
      ju = function ju(e) {
    var t = e.selection.getSel();
    return t && t.rangeCount > 0;
  },
      Vu = function Vu(e, t) {
    var n = Lu(e);
    n.length > 0 ? $(n, function (n) {
      var o = n.dom,
          r = e.dom.createRng();
      r.setStartBefore(o), r.setEndAfter(o), t(r, !0);
    }) : t(e.selection.getRng(), !1);
  },
      Hu = function Hu(e, t, n) {
    var o = wi(e, t);
    n(o), e.moveToBookmark(o);
  },
      $u = ['pre[class*=language-][contenteditable="false"]', "figure.image", "div[data-ephox-embed-iri]", "div.tiny-pageembed", "div.mce-toc", "div[data-mce-toc]"],
      qu = function qu(e, t, n, o, r, s) {
    var _n$uid = n.uid,
        a = _n$uid === void 0 ? t : _n$uid,
        i = _objectWithoutProperties(n, ["uid"]);

    on(e, da()), qt(e, "".concat(ua()), a), qt(e, "".concat(ca()), o);

    var _r22 = r(a, i),
        _r22$attributes = _r22.attributes,
        l = _r22$attributes === void 0 ? {} : _r22$attributes,
        _r22$classes = _r22.classes,
        d = _r22$classes === void 0 ? [] : _r22$classes;

    if (Wt(e, l), function (e, t) {
      $(t, function (t) {
        on(e, t);
      });
    }(e, d), s) {
      d.length > 0 && qt(e, "".concat(fa()), d.join(","));

      var _t32 = ue(l);

      _t32.length > 0 && qt(e, "".concat(ga()), _t32.join(","));
    }
  },
      Wu = function Wu(e, t, n, o, r) {
    var s = un("span", e);
    return qu(s, t, n, o, r, !1), s;
  },
      Ku = function Ku(e, t, n, o, r, s) {
    var a = [],
        i = Wu(e.getDoc(), n, s, o, r),
        l = aa(),
        d = function d() {
      l.clear();
    },
        c = function c(e) {
      $(e, u);
    },
        u = function u(t) {
      switch (function (e, t, n, o) {
        return kn(t).fold(function () {
          return "skipping";
        }, function (r) {
          return "br" === o || function (e) {
            return zt(e) && vr(e) === kr;
          }(t) ? "valid" : function (e) {
            return Ut(e) && an(e, da());
          }(t) ? "existing" : Tc(t.dom) ? "caret" : V($u, function (e) {
            return hn(t, e);
          }) ? "valid-block" : su(e, n, o) && su(e, Mt(r), n) ? "valid" : "invalid-child";
        });
      }(e, t, "span", Mt(t))) {
        case "invalid-child":
          {
            d();

            var _e27 = Rn(t);

            c(_e27), d();
            break;
          }

        case "valid-block":
          d(), qu(t, n, s, o, r, !0);
          break;

        case "valid":
          {
            var _e28 = l.get().getOrThunk(function () {
              var e = ka(i);
              return a.push(e), l.set(e), e;
            });

            (function (e, t) {
              Xn(e, t), Zn(t, e);
            })(t, _e28);

            break;
          }
      }
    };

    return Bu(e.dom, t, function (e) {
      d(), function (e) {
        var t = H(e, fn);
        c(t);
      }(e);
    }), a;
  },
      Gu = function Gu(e) {
    var t = function () {
      var e = {};
      return {
        register: function register(t, n) {
          e[t] = {
            name: t,
            settings: n
          };
        },
        lookup: function lookup(t) {
          return we(e, t).map(function (e) {
            return e.settings;
          });
        },
        getNames: function getNames() {
          return ue(e);
        }
      };
    }();

    (function (e, t) {
      var n = ca(),
          o = function o(e) {
        return M.from(e.attr(n)).bind(t.lookup);
      },
          r = function r(e) {
        var t, n;
        e.attr(ua(), null), e.attr(ca(), null), e.attr(ma(), null);
        var o = M.from(e.attr(ga())).map(function (e) {
          return e.split(",");
        }).getOr([]),
            r = M.from(e.attr(fa())).map(function (e) {
          return e.split(",");
        }).getOr([]);
        $(o, function (t) {
          return e.attr(t, null);
        });
        var s = null !== (n = null === (t = e.attr("class")) || void 0 === t ? void 0 : t.split(" ")) && void 0 !== n ? n : [],
            a = oe(s, [da()].concat(r));
        e.attr("class", a.length > 0 ? a.join(" ") : null), e.attr(fa(), null), e.attr(ga(), null);
      };

      e.serializer.addTempAttr(ma()), e.serializer.addAttributeFilter(n, function (e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var t = _step.value;
            o(t).each(function (e) {
              !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t));
            });
          };

          for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
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
      });
    })(e, t);

    var n = function (e, t) {
      var n = ea({}),
          o = function o() {
        return {
          listeners: [],
          previous: aa()
        };
      },
          r = function r(e, t) {
        s(e, function (e) {
          return t(e), e;
        });
      },
          s = function s(e, t) {
        var r = n.get(),
            s = t(we(r, e).getOrThunk(o));
        r[e] = s, n.set(r);
      },
          a = function a(t, n) {
        $(va(e, t), function (e) {
          n ? qt(e, ma(), "true") : Xt(e, ma());
        });
      },
          i = la(function () {
        var n = se(t.getNames());
        $(n, function (t) {
          s(t, function (n) {
            var o = n.previous.get();
            return ha(e, M.some(t)).fold(function () {
              o.each(function (e) {
                (function (e) {
                  r(e, function (t) {
                    $(t.listeners, function (t) {
                      return t(!1, e);
                    });
                  });
                })(t), n.previous.clear(), a(e, !1);
              });
            }, function (_ref5) {
              var e = _ref5.uid,
                  t = _ref5.name,
                  s = _ref5.elements;
              Dt(o, e) || (o.each(function (e) {
                return a(e, !1);
              }), function (e, t, n) {
                r(e, function (o) {
                  $(o.listeners, function (o) {
                    return o(!0, e, {
                      uid: t,
                      nodes: H(n, function (e) {
                        return e.dom;
                      })
                    });
                  });
                });
              }(t, e, s), n.previous.set(e), a(e, !0));
            }), {
              previous: n.previous,
              listeners: n.listeners
            };
          });
        });
      }, 30);

      return e.on("remove", function () {
        i.cancel();
      }), e.on("NodeChange", function () {
        i.throttle();
      }), {
        addListener: function addListener(e, t) {
          s(e, function (e) {
            return {
              previous: e.previous,
              listeners: e.listeners.concat([t])
            };
          });
        }
      };
    }(e, t),
        o = Ht("span"),
        r = function r(e) {
      $(e, function (e) {
        o(e) ? oo(e) : function (e) {
          sn(e, da()), Xt(e, "".concat(ua())), Xt(e, "".concat(ca())), Xt(e, "".concat(ma()));
          var t = Gt(e, "".concat(ga())).map(function (e) {
            return e.split(",");
          }).getOr([]),
              n = Gt(e, "".concat(fa())).map(function (e) {
            return e.split(",");
          }).getOr([]);
          var o;
          $(t, function (t) {
            return Xt(e, t);
          }), o = e, $(n, function (e) {
            sn(o, e);
          }), Xt(e, "".concat(fa())), Xt(e, "".concat(ga()));
        }(e);
      });
    };

    return {
      register: function register(e, n) {
        t.register(e, n);
      },
      annotate: function annotate(n, o) {
        t.lookup(n).each(function (t) {
          (function (e, t, n, o) {
            e.undoManager.transact(function () {
              var r = e.selection,
                  s = r.getRng(),
                  a = Lu(e).length > 0,
                  i = wa("mce-annotation");

              if (s.collapsed && !a && function (e, t) {
                var n = Tu(e, t, [{
                  inline: "span"
                }]);
                t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t);
              }(e, s), r.getRng().collapsed && !a) {
                var _s10 = Wu(e.getDoc(), i, o, t, n.decorate);

                so(_s10, fr), r.getRng().insertNode(_s10.dom), r.select(_s10.dom);
              } else Hu(r, !1, function () {
                Vu(e, function (r) {
                  Ku(e, r, i, t, n.decorate, o);
                });
              });
            });
          })(e, n, t, o);
        });
      },
      annotationChanged: function annotationChanged(e, t) {
        n.addListener(e, t);
      },
      remove: function remove(t) {
        var n = e.selection.getBookmark();
        ha(e, M.some(t)).each(function (_ref6) {
          var e = _ref6.elements;
          r(e);
        }), e.selection.moveToBookmark(n);
      },
      removeAll: function removeAll(t) {
        var n = e.selection.getBookmark();
        fe(ya(e, t), function (e, t) {
          r(e);
        }), e.selection.moveToBookmark(n);
      },
      getAll: function getAll(t) {
        var n = ya(e, t);
        return ge(n, function (e) {
          return H(e, function (e) {
            return e.dom;
          });
        });
      }
    };
  },
      Yu = function Yu(e) {
    return {
      getBookmark: O(Vc, e),
      moveToBookmark: O(Hc, e)
    };
  };

  Yu.isBookmarkNode = $c;

  var Xu = function Xu(e, t, n) {
    return !n.collapsed && V(n.getClientRects(), function (n) {
      return function (e, t, n) {
        return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
      }(n, e, t);
    });
  },
      Qu = function Qu(e, t, n) {
    return e.dispatch(t, n);
  },
      Ju = function Ju(e, t, n, o) {
    return e.dispatch("FormatApply", {
      format: t,
      node: n,
      vars: o
    });
  },
      Zu = function Zu(e, t, n, o) {
    return e.dispatch("FormatRemove", {
      format: t,
      node: n,
      vars: o
    });
  },
      em = function em(e, t) {
    return e.dispatch("SetContent", t);
  },
      tm = function tm(e, t) {
    return e.dispatch("GetContent", t);
  },
      nm = function nm(e, t) {
    return e.dispatch("PastePlainTextToggle", {
      state: t
    });
  },
      om = {
    BACKSPACE: 8,
    DELETE: 46,
    DOWN: 40,
    ENTER: 13,
    ESC: 27,
    LEFT: 37,
    RIGHT: 39,
    SPACEBAR: 32,
    TAB: 9,
    UP: 38,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    modifierPressed: function modifierPressed(e) {
      return e.shiftKey || e.ctrlKey || e.altKey || om.metaKeyPressed(e);
    },
    metaKeyPressed: function metaKeyPressed(e) {
      return Nt.os.isMacOS() || Nt.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey;
    }
  },
      rm = "data-mce-selected",
      sm = Math.abs,
      am = Math.round,
      im = {
    nw: [0, 0, -1, -1],
    ne: [1, 0, 1, -1],
    se: [1, 1, 1, 1],
    sw: [0, 1, -1, 1]
  },
      lm = function lm(e, t) {
    var n = t.dom,
        o = t.getDoc(),
        r = document,
        s = t.getBody();
    var a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;

    var x = function x(e) {
      return C(e) && (Lo(e) || n.is(e, "figure.image"));
    },
        k = function k(e) {
      return Uo(e) || n.hasClass(e, "mce-preview-object");
    },
        S = function S(e) {
      var n = e.target;
      (function (e, t) {
        if (function (e) {
          return "longpress" === e.type || 0 === e.type.indexOf("touch");
        }(e)) {
          var _n36 = e.touches[0];
          return x(e.target) && !Xu(_n36.clientX, _n36.clientY, t);
        }

        return x(e.target) && !Xu(e.clientX, e.clientY, t);
      })(e, t.selection.getRng()) && !e.isDefaultPrevented() && t.selection.select(n);
    },
        _ = function _(e) {
      return n.is(e, "figure.image") ? [e.querySelector("img")] : n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : [e];
    },
        E = function E(e) {
      var o = Cl(t);
      return !!o && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (n.hasClass(e, "mce-preview-object") ? hn(fn(e.firstElementChild), o) : hn(fn(e), o));
    },
        N = function N(e, o, r) {
      if (C(r)) {
        var _s11 = _(e);

        $(_s11, function (e) {
          e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o) ? n.setStyle(e, o, r) : n.setAttrib(e, o, "" + r);
        });
      }
    },
        R = function R(e, t, n) {
      N(e, "width", t), N(e, "height", n);
    },
        A = function A(e) {
      var o, r, c, C, S;
      o = e.screenX - u, r = e.screenY - m, b = o * d[2] + f, v = r * d[3] + g, b = b < 5 ? 5 : b, v = v < 5 ? 5 : v, c = (x(a) || k(a)) && !1 !== wl(t) ? !om.modifierPressed(e) : om.modifierPressed(e), c && (sm(o) > sm(r) ? (v = am(b * p), b = am(v / p)) : (b = am(v / p), v = am(b * p))), R(i, b, v), C = d.startPos.x + o, S = d.startPos.y + r, C = C > 0 ? C : 0, S = S > 0 ? S : 0, n.setStyles(l, {
        left: C,
        top: S,
        display: "block"
      }), l.innerHTML = b + " &times; " + v, d[2] < 0 && i.clientWidth <= b && n.setStyle(i, "left", void 0 + (f - b)), d[3] < 0 && i.clientHeight <= v && n.setStyle(i, "top", void 0 + (g - v)), o = s.scrollWidth - y, r = s.scrollHeight - w, o + r !== 0 && n.setStyles(l, {
        left: C - o,
        top: S - r
      }), h || (function (e, t, n, o, r) {
        e.dispatch("ObjectResizeStart", {
          target: t,
          width: n,
          height: o,
          origin: r
        });
      }(t, a, f, g, "corner-" + d.name), h = !0);
    },
        O = function O() {
      var e = h;
      h = !1, e && (N(a, "width", b), N(a, "height", v)), n.unbind(o, "mousemove", A), n.unbind(o, "mouseup", O), r !== o && (n.unbind(r, "mousemove", A), n.unbind(r, "mouseup", O)), n.remove(i), n.remove(l), n.remove(c), T(a), e && (function (e, t, n, o, r) {
        e.dispatch("ObjectResized", {
          target: t,
          width: n,
          height: o,
          origin: r
        });
      }(t, a, b, v, "corner-" + d.name), n.setAttrib(a, "style", n.getAttrib(a, "style"))), t.nodeChanged();
    },
        T = function T(e) {
      M();
      var h = n.getPos(e, s),
          C = h.x,
          x = h.y,
          S = e.getBoundingClientRect(),
          N = S.width || S.right - S.left,
          T = S.height || S.bottom - S.top;
      a !== e && (D(), a = e, b = v = 0);
      var B = t.dispatch("ObjectSelected", {
        target: e
      });
      E(e) && !B.isDefaultPrevented() ? fe(im, function (e, t) {
        var h;
        h = n.get("mceResizeHandle" + t), h && n.remove(h), h = n.add(s, "div", {
          id: "mceResizeHandle" + t,
          "data-mce-bogus": "all",
          "class": "mce-resizehandle",
          unselectable: !0,
          style: "cursor:" + t + "-resize; margin:0; padding:0"
        }), n.bind(h, "mousedown", function (h) {
          h.stopImmediatePropagation(), h.preventDefault(), function (h) {
            var b = _(a)[0];

            var v;
            u = h.screenX, m = h.screenY, f = b.clientWidth, g = b.clientHeight, p = g / f, d = e, d.name = t, d.startPos = {
              x: N * e[0] + C,
              y: T * e[1] + x
            }, y = s.scrollWidth, w = s.scrollHeight, c = n.add(s, "div", {
              "class": "mce-resize-backdrop",
              "data-mce-bogus": "all"
            }), n.setStyles(c, {
              position: "fixed",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%"
            }), i = k(v = a) ? n.create("img", {
              src: Nt.transparentSrc
            }) : v.cloneNode(!0), n.addClass(i, "mce-clonedresizable"), n.setAttrib(i, "data-mce-bogus", "all"), i.contentEditable = "false", n.setStyles(i, {
              left: C,
              top: x,
              margin: 0
            }), R(i, N, T), i.removeAttribute(rm), s.appendChild(i), n.bind(o, "mousemove", A), n.bind(o, "mouseup", O), r !== o && (n.bind(r, "mousemove", A), n.bind(r, "mouseup", O)), l = n.add(s, "div", {
              "class": "mce-resize-helper",
              "data-mce-bogus": "all"
            }, f + " &times; " + g);
          }(h);
        }), e.elm = h, n.setStyles(h, {
          left: N * e[0] + C - h.offsetWidth / 2,
          top: T * e[1] + x - h.offsetHeight / 2
        });
      }) : D(!1);
    },
        B = ia(T, 0),
        D = function D() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      B.cancel(), M(), a && e && a.removeAttribute(rm), fe(im, function (e, t) {
        var o = n.get("mceResizeHandle" + t);
        o && (n.unbind(o), n.remove(o));
      });
    },
        P = function P(e, t) {
      return C(e) && n.isChildOf(e, t);
    },
        L = function L(o) {
      if (h || t.removed || t.composing) return;
      var r = "mousedown" === o.type ? o.target : e.getNode(),
          a = Go(fn(r), "table,img,figure.image,hr,video,span.mce-preview-object").map(function (e) {
        return e.dom;
      }).getOrUndefined(),
          i = C(a) ? n.getAttrib(a, rm, "1") : "1";

      if ($(n.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
        e.removeAttribute(rm);
      }), P(a, s)) {
        I();

        var _t33 = e.getStart(!0);

        if (P(_t33, a) && P(e.getEnd(!0), a)) return n.setAttrib(a, rm, i), void B.throttle(a);
      }

      D();
    },
        M = function M() {
      fe(im, function (e) {
        e.elm && (n.unbind(e.elm), delete e.elm);
      });
    },
        I = function I() {
      try {
        t.getDoc().execCommand("enableObjectResizing", !1, "false");
      } catch (e) {}
    };

    return t.on("init", function () {
      I(), t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L), t.on("keyup compositionend", function (e) {
        a && "TABLE" === a.nodeName && L(e);
      }), t.on("hide blur", D), t.on("contextmenu longpress", S, !0);
    }), t.on("remove", M), {
      isResizable: E,
      showResizeRect: T,
      hideResizeRect: D,
      updateResizeRect: L,
      destroy: function destroy() {
        B.cancel(), a = i = c = null;
      }
    };
  },
      dm = function dm(e, t, n) {
    var o = e.document.createRange();
    var r;
    return r = o, t.fold(function (e) {
      r.setStartBefore(e.dom);
    }, function (e, t) {
      r.setStart(e.dom, t);
    }, function (e) {
      r.setStartAfter(e.dom);
    }), function (e, t) {
      t.fold(function (t) {
        e.setEndBefore(t.dom);
      }, function (t, n) {
        e.setEnd(t.dom, n);
      }, function (t) {
        e.setEndAfter(t.dom);
      });
    }(o, n), o;
  },
      cm = function cm(e, t, n, o, r) {
    var s = e.document.createRange();
    return s.setStart(t.dom, n), s.setEnd(o.dom, r), s;
  },
      um = Ei([{
    ltr: ["start", "soffset", "finish", "foffset"]
  }, {
    rtl: ["start", "soffset", "finish", "foffset"]
  }]),
      mm = function mm(e, t, n) {
    return t(fn(n.startContainer), n.startOffset, fn(n.endContainer), n.endOffset);
  };

  um.ltr, um.rtl;

  var fm = function fm(e, t, n, o) {
    return {
      start: e,
      soffset: t,
      finish: n,
      foffset: o
    };
  },
      gm = document.caretPositionFromPoint ? function (e, t, n) {
    var o, r;
    return M.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind(function (t) {
      if (null === t.offsetNode) return M.none();
      var n = e.dom.createRange();
      return n.setStart(t.offsetNode, t.offset), n.collapse(), M.some(n);
    });
  } : document.caretRangeFromPoint ? function (e, t, n) {
    var o, r;
    return M.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n));
  } : M.none,
      pm = Ei([{
    before: ["element"]
  }, {
    on: ["element", "offset"]
  }, {
    after: ["element"]
  }]),
      hm = {
    before: pm.before,
    on: pm.on,
    after: pm.after,
    cata: function cata(e, t, n, o) {
      return e.fold(t, n, o);
    },
    getStart: function getStart(e) {
      return e.fold(R, R, R);
    }
  },
      bm = Ei([{
    domRange: ["rng"]
  }, {
    relative: ["startSitu", "finishSitu"]
  }, {
    exact: ["start", "soffset", "finish", "foffset"]
  }]),
      vm = {
    domRange: bm.domRange,
    relative: bm.relative,
    exact: bm.exact,
    exactFromRange: function exactFromRange(e) {
      return bm.exact(e.start, e.soffset, e.finish, e.foffset);
    },
    getWin: function getWin(e) {
      var t = function (e) {
        return e.match({
          domRange: function domRange(e) {
            return fn(e.startContainer);
          },
          relative: function relative(e, t) {
            return hm.getStart(e);
          },
          exact: function exact(e, t, n, o) {
            return e;
          }
        });
      }(e);

      return xn(t);
    },
    range: fm
  },
      ym = function ym(e, t) {
    var n = Mt(e);
    return "input" === n ? hm.after(e) : j(["br", "img"], n) ? 0 === t ? hm.before(e) : hm.after(e) : hm.on(e, t);
  },
      Cm = function Cm(e, t) {
    var n = e.fold(hm.before, ym, hm.after),
        o = t.fold(hm.before, ym, hm.after);
    return vm.relative(n, o);
  },
      wm = function wm(e, t, n, o) {
    var r = ym(e, t),
        s = ym(n, o);
    return vm.relative(r, s);
  },
      xm = function xm(e, t) {
    var n = (t || document).createDocumentFragment();
    return $(e, function (e) {
      n.appendChild(e.dom);
    }), fn(n);
  },
      km = function km(e) {
    var t = vm.getWin(e).dom,
        n = function n(e, _n37, o, r) {
      return cm(t, e, _n37, o, r);
    },
        o = function (e) {
      return e.match({
        domRange: function domRange(e) {
          var t = fn(e.startContainer),
              n = fn(e.endContainer);
          return wm(t, e.startOffset, n, e.endOffset);
        },
        relative: Cm,
        exact: wm
      });
    }(e);

    return function (e, t) {
      var n = function (e, t) {
        return t.match({
          domRange: function domRange(e) {
            return {
              ltr: N(e),
              rtl: M.none
            };
          },
          relative: function relative(t, n) {
            return {
              ltr: De(function () {
                return dm(e, t, n);
              }),
              rtl: De(function () {
                return M.some(dm(e, n, t));
              })
            };
          },
          exact: function exact(t, n, o, r) {
            return {
              ltr: De(function () {
                return cm(e, t, n, o, r);
              }),
              rtl: De(function () {
                return M.some(cm(e, o, r, t, n));
              })
            };
          }
        });
      }(e, t);

      return function (e, t) {
        var n = t.ltr();
        return n.collapsed ? t.rtl().filter(function (e) {
          return !1 === e.collapsed;
        }).map(function (e) {
          return um.rtl(fn(e.endContainer), e.endOffset, fn(e.startContainer), e.startOffset);
        }).getOrThunk(function () {
          return mm(0, um.ltr, n);
        }) : mm(0, um.ltr, n);
      }(0, n);
    }(t, o).match({
      ltr: n,
      rtl: n
    });
  },
      Sm = function Sm(e, t, n) {
    return (o = n.defaultView, r = e, s = t, function (e, t, n) {
      var o = fn(e.document);
      return gm(o, t, n).map(function (e) {
        return fm(fn(e.startContainer), e.startOffset, fn(e.endContainer), e.endOffset);
      });
    }(o, r, s)).map(function (e) {
      var t = n.createRange();
      return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), t;
    }).getOrUndefined();
    var o, r, s;
  },
      _m = function _m(e, t) {
    return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
  },
      Em = function Em(e, t, n) {
    return null !== function (e, t, n) {
      for (; e && e !== t;) {
        if (n(e)) return e;
        e = e.parentNode;
      }

      return null;
    }(e, t, n);
  },
      Nm = function Nm(e, t, n) {
    return Em(e, t, function (e) {
      return e.nodeName === n;
    });
  },
      Rm = function Rm(e) {
    return e && "TABLE" === e.nodeName;
  },
      Am = function Am(e) {
    return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
  },
      Om = function Om(e, t) {
    return Or(e) && !1 === Em(e, t, Tc);
  },
      Tm = function Tm(e, t, n) {
    var o = new Qo(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot());

    for (; t = o[n ? "prev" : "next"]();) {
      if (Po(t)) return !0;
    }
  },
      Bm = function Bm(e, t, n, o, r) {
    var s;
    var a = e.getRoot();
    var i;
    var l = e.schema.getNonEmptyElements(),
        d = e.getParent(r.parentNode, e.isBlock) || a;
    if (o && Po(r) && t && e.isEmpty(d)) return M.some(ti(r.parentNode, e.nodeIndex(r)));
    var c = new Qo(r, d);

    for (; i = c[o ? "prev" : "next"]();) {
      if ("false" === e.getContentEditableParent(i) || Om(i, a)) return M.none();
      if (Ro(i) && i.nodeValue.length > 0) return !1 === Nm(i, a, "A") ? M.some(ti(i, o ? i.nodeValue.length : 0)) : M.none();
      if (e.isBlock(i) || l[i.nodeName.toLowerCase()]) return M.none();
      s = i;
    }

    return To(s) ? M.none() : n && s ? M.some(ti(s, 0)) : M.none();
  },
      Dm = function Dm(e, t, n, o) {
    var r, s;
    var a = e.getRoot();
    var i,
        l,
        d = !1;
    r = o[(n ? "start" : "end") + "Container"], s = o[(n ? "start" : "end") + "Offset"];
    var c = Co(r) && s === r.childNodes.length,
        u = e.schema.getNonEmptyElements();
    if (l = n, Or(r)) return M.none();

    if (Co(r) && s > r.childNodes.length - 1 && (l = !1), Bo(r) && (r = a, s = 0), r === a) {
      if (l && (i = r.childNodes[s > 0 ? s - 1 : 0], i)) {
        if (Or(i)) return M.none();
        if (u[i.nodeName] || Rm(i)) return M.none();
      }

      if (r.hasChildNodes()) {
        if (s = Math.min(!l && s > 0 ? s - 1 : s, r.childNodes.length - 1), r = r.childNodes[s], s = Ro(r) && c ? r.data.length : 0, !t && r === a.lastChild && Rm(r)) return M.none();
        if (function (e, t) {
          for (; t && t !== e;) {
            if (Io(t)) return !0;
            t = t.parentNode;
          }

          return !1;
        }(a, r) || Or(r)) return M.none();

        if (r.hasChildNodes() && !1 === Rm(r)) {
          i = r;

          var _t34 = new Qo(r, a);

          do {
            if (Io(i) || Or(i)) {
              d = !1;
              break;
            }

            if (Ro(i) && i.nodeValue.length > 0) {
              s = l ? 0 : i.nodeValue.length, r = i, d = !0;
              break;
            }

            if (u[i.nodeName.toLowerCase()] && !Am(i)) {
              s = e.nodeIndex(i), r = i.parentNode, l || s++, d = !0;
              break;
            }
          } while (i = l ? _t34.next() : _t34.prev());
        }
      }
    }

    return t && (Ro(r) && 0 === s && Bm(e, c, t, !0, r).each(function (e) {
      r = e.container(), s = e.offset(), d = !0;
    }), Co(r) && (i = r.childNodes[s], i || (i = r.childNodes[s - 1]), !i || !Po(i) || function (e, t) {
      return e.previousSibling && "A" === e.previousSibling.nodeName;
    }(i) || Tm(e, i, !1) || Tm(e, i, !0) || Bm(e, c, t, !0, i).each(function (e) {
      r = e.container(), s = e.offset(), d = !0;
    }))), l && !t && Ro(r) && s === r.nodeValue.length && Bm(e, c, t, !1, r).each(function (e) {
      r = e.container(), s = e.offset(), d = !0;
    }), d ? M.some(ti(r, s)) : M.none();
  },
      Pm = function Pm(e, t) {
    var n = t.collapsed,
        o = t.cloneRange(),
        r = ti.fromRangeStart(t);
    return Dm(e, n, !0, o).each(function (e) {
      n && ti.isAbove(r, e) || o.setStart(e.container(), e.offset());
    }), n || Dm(e, n, !1, o).each(function (e) {
      o.setEnd(e.container(), e.offset());
    }), n && o.collapse(!0), _m(t, o) ? M.none() : M.some(o);
  },
      Lm = function Lm(e, t) {
    return e.splitText(t);
  },
      Mm = function Mm(e) {
    var t = e.startContainer,
        n = e.startOffset,
        o = e.endContainer,
        r = e.endOffset;
    return t === o && Ro(t) ? n > 0 && n < t.nodeValue.length && (o = Lm(t, n), t = o.previousSibling, r > n ? (r -= n, t = o = Lm(o, r).previousSibling, r = o.nodeValue.length, n = 0) : r = 0) : (Ro(t) && n > 0 && n < t.nodeValue.length && (t = Lm(t, n), n = 0), Ro(o) && r > 0 && r < o.nodeValue.length && (o = Lm(o, r).previousSibling, r = o.nodeValue.length)), {
      startContainer: t,
      startOffset: n,
      endContainer: o,
      endOffset: r
    };
  },
      Im = function Im(e) {
    return {
      walk: function walk(t, n) {
        return Bu(e, t, n);
      },
      split: Mm,
      normalize: function normalize(t) {
        return Pm(e, t).fold(P, function (e) {
          return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0;
        });
      }
    };
  };

  Im.compareRanges = _m, Im.getCaretRangeFromPoint = Sm, Im.getSelectedNode = Pa, Im.getNode = La;

  var Fm = function (e, t) {
    var n = function n(t) {
      var n = function (e) {
        var t = e.dom;
        return jn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
      }(t);

      if (n <= 0 || null === n) {
        var _n38 = qn(t, e);

        return parseFloat(_n38) || 0;
      }

      return n;
    },
        o = function o(e, t) {
      return Y(t, function (t, n) {
        var o = qn(e, n),
            r = void 0 === o ? 0 : parseInt(o, 10);
        return isNaN(r) ? t : t + r;
      }, 0);
    };

    return {
      set: function set(t, n) {
        if (!x(n) && !n.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + n);
        var o = t.dom;
        ln(o) && (o.style[e] = n + "px");
      },
      get: n,
      getOuter: n,
      aggregate: o,
      max: function max(e, t, n) {
        var r = o(e, n);
        return t > r ? t - r : 0;
      }
    };
  }("height"),
      Um = function Um() {
    return fn(document);
  },
      zm = function zm(e, t) {
    return e.view(t).fold(N([]), function (t) {
      var n = e.owner(t),
          o = zm(e, n);
      return [t].concat(o);
    });
  };

  var jm = Object.freeze({
    __proto__: null,
    view: function view(e) {
      var t;
      return (e.dom === document ? M.none() : M.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(fn);
    },
    owner: function owner(e) {
      return wn(e);
    }
  });

  var Vm = function Vm(e) {
    return "textarea" === Mt(e);
  },
      Hm = function Hm(e, t) {
    var n = function (e) {
      var t = e.dom.ownerDocument,
          n = t.body,
          o = t.defaultView,
          r = t.documentElement;
      if (n === e.dom) return co(n.offsetLeft, n.offsetTop);
      var s = uo(null == o ? void 0 : o.pageYOffset, r.scrollTop),
          a = uo(null == o ? void 0 : o.pageXOffset, r.scrollLeft),
          i = uo(r.clientTop, n.clientTop),
          l = uo(r.clientLeft, n.clientLeft);
      return mo(e).translate(a - l, s - i);
    }(e),
        o = function (e) {
      return Fm.get(e);
    }(e);

    return {
      element: e,
      bottom: n.top + o,
      height: o,
      pos: n,
      cleanup: t
    };
  },
      $m = function $m(e, t, n, o) {
    Gm(e, function (r, s) {
      return Wm(e, t, n, o);
    }, n);
  },
      qm = function qm(e, t, n, o, r) {
    var s = {
      elm: o.element.dom,
      alignToTop: r
    };
    (function (e, t) {
      return e.dispatch("ScrollIntoView", t).isDefaultPrevented();
    })(e, s) || (n(t, fo(t).top, o, r), function (e, t) {
      e.dispatch("AfterScrollIntoView", t);
    }(e, s));
  },
      Wm = function Wm(e, t, n, o) {
    var r = fn(e.getBody()),
        s = fn(e.getDoc());
    r.dom.offsetWidth;

    var a = function (e, t) {
      var n = function (e, t) {
        var n = Rn(e);
        if (0 === n.length || Vm(e)) return {
          element: e,
          offset: t
        };
        if (t < n.length && !Vm(n[t])) return {
          element: n[t],
          offset: 0
        };
        {
          var _o30 = n[n.length - 1];
          return Vm(_o30) ? {
            element: e,
            offset: t
          } : "img" === Mt(_o30) ? {
            element: _o30,
            offset: 1
          } : zt(_o30) ? {
            element: _o30,
            offset: vr(_o30).length
          } : {
            element: _o30,
            offset: Rn(_o30).length
          };
        }
      }(e, t),
          o = cn("<span data-mce-bogus=\"all\" style=\"display: inline-block;\">\uFEFF</span>");

      return Xn(n.element, o), Hm(o, function () {
        return no(o);
      });
    }(fn(n.startContainer), n.startOffset);

    qm(e, s, t, a, o), a.cleanup();
  },
      Km = function Km(e, t, n, o) {
    var r = fn(e.getDoc());
    qm(e, r, n, function (e) {
      return Hm(fn(e), S);
    }(t), o);
  },
      Gm = function Gm(e, t, n) {
    var o = n.startContainer,
        r = n.startOffset,
        s = n.endContainer,
        a = n.endOffset;
    t(fn(o), fn(s));
    var i = e.dom.createRng();
    i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n);
  },
      Ym = function Ym(e, t, n, o) {
    var r = e.pos;
    if (n) go(r.left, r.top, o);else {
      var _n39 = r.top - t + e.height;

      go(r.left, _n39, o);
    }
  },
      Xm = function Xm(e, t, n, o, r) {
    var s = n + t,
        a = o.pos.top,
        i = o.bottom,
        l = i - a >= n;
    a < t ? Ym(o, n, !1 !== r, e) : a > s ? Ym(o, n, l ? !1 !== r : !0 === r, e) : i > s && !l && Ym(o, n, !0 === r, e);
  },
      Qm = function Qm(e, t, n, o) {
    var r = e.dom.defaultView.innerHeight;
    Xm(e, t, r, n, o);
  },
      Jm = function Jm(e, t, n, o) {
    var r = e.dom.defaultView.innerHeight;
    Xm(e, t, r, n, o);

    var s = function (e) {
      var t = Um(),
          n = fo(t),
          o = function (e, t) {
        var n = t.owner(e);
        return zm(t, n);
      }(e, jm),
          r = mo(e),
          s = G(o, function (e, t) {
        var n = mo(t);
        return {
          left: e.left + n.left,
          top: e.top + n.top
        };
      }, {
        left: 0,
        top: 0
      });

      return co(s.left + r.left + n.left, s.top + r.top + n.top);
    }(n.element),
        a = bo(window);

    s.top < a.y ? po(n.element, !1 !== o) : s.top > a.bottom && po(n.element, !0 === o);
  },
      Zm = function Zm(e, t, n) {
    return $m(e, Qm, t, n);
  },
      ef = function ef(e, t, n) {
    return Km(e, t, Qm, n);
  },
      tf = function tf(e, t, n) {
    return $m(e, Jm, t, n);
  },
      nf = function nf(e, t, n) {
    return Km(e, t, Jm, n);
  },
      of = function of(e, t, n) {
    (e.inline ? Zm : tf)(e, t, n);
  },
      rf = function rf(e) {
    return e.dom.focus();
  },
      sf = function sf(e) {
    var t = Mn(e).dom;
    return e.dom === t.activeElement;
  },
      af = function af() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Um();
    return M.from(e.dom.activeElement).map(fn);
  },
      lf = function lf(e, t) {
    var n = zt(t) ? vr(t).length : Rn(t).length + 1;
    return e > n ? n : e < 0 ? 0 : e;
  },
      df = function df(e) {
    return vm.range(e.start, lf(e.soffset, e.start), e.finish, lf(e.foffset, e.finish));
  },
      cf = function cf(e, t) {
    return !yo(t.dom) && (yn(e, t) || vn(e, t));
  },
      uf = function uf(e) {
    return function (t) {
      return cf(e, t.start) && cf(e, t.finish);
    };
  },
      mf = function mf(e) {
    return vm.range(fn(e.startContainer), e.startOffset, fn(e.endContainer), e.endOffset);
  },
      ff = function ff(e) {
    var t = document.createRange();

    try {
      return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), M.some(t);
    } catch (e) {
      return M.none();
    }
  },
      gf = function gf(e) {
    var t = function (e) {
      return e.inline;
    }(e) ? (n = fn(e.getBody()), function (e) {
      var t = e.getSelection();
      return (t && 0 !== t.rangeCount ? M.from(t.getRangeAt(0)) : M.none()).map(mf);
    }(xn(n).dom).filter(uf(n))) : M.none();
    var n;
    e.bookmark = t.isSome() ? t : e.bookmark;
  },
      pf = function pf(e) {
    return (e.bookmark ? e.bookmark : M.none()).bind(function (t) {
      return n = fn(e.getBody()), o = t, M.from(o).filter(uf(n)).map(df);
      var n, o;
    }).bind(ff);
  },
      hf = {
    isEditorUIElement: function isEditorUIElement(e) {
      var t = e.className.toString();
      return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
    }
  },
      bf = {
    setEditorTimeout: function setEditorTimeout(e, t, n) {
      return function (e, t) {
        return x(t) || (t = 0), setTimeout(e, t);
      }(function () {
        e.removed || t();
      }, n);
    },
    setEditorInterval: function setEditorInterval(e, t, n) {
      var o = function (e, t) {
        return x(t) || (t = 0), setInterval(e, t);
      }(function () {
        e.removed ? clearInterval(o) : t();
      }, n);

      return o;
    }
  };

  var vf;

  var yf = Qs.DOM,
      Cf = function Cf(e, t) {
    var n = Dl(e),
        o = yf.getParent(t, function (t) {
      return function (e) {
        return hf.isEditorUIElement(e);
      }(t) || !!n && e.dom.is(t, n);
    });
    return null !== o;
  },
      wf = function wf(e, t) {
    var n = t.editor;
    (function (e) {
      var t = ia(function () {
        gf(e);
      }, 0);
      e.on("init", function () {
        e.inline && function (e, t) {
          var n = function n() {
            t.throttle();
          };

          Qs.DOM.bind(document, "mouseup", n), e.on("remove", function () {
            Qs.DOM.unbind(document, "mouseup", n);
          });
        }(e, t), function (e, t) {
          (function (e, t) {
            e.on("mouseup touchend", function (e) {
              t.throttle();
            });
          })(e, t), e.on("keyup NodeChange AfterSetSelectionRange", function (t) {
            (function (e) {
              return "nodechange" === e.type && e.selectionChange;
            })(t) || gf(e);
          });
        }(e, t);
      }), e.on("remove", function () {
        t.cancel();
      });
    })(n), n.on("focusin", function () {
      var t = e.focusedEditor;
      t !== n && (t && t.dispatch("blur", {
        focusedEditor: n
      }), e.setActive(n), e.focusedEditor = n, n.dispatch("focus", {
        blurredEditor: t
      }), n.focus(!0));
    }), n.on("focusout", function () {
      bf.setEditorTimeout(n, function () {
        var t = e.focusedEditor;
        Cf(n, function (e) {
          try {
            var _t35 = Mn(fn(e.getElement()));

            return af(_t35).fold(function () {
              return document.body;
            }, function (e) {
              return e.dom;
            });
          } catch (e) {
            return document.body;
          }
        }(n)) || t !== n || (n.dispatch("blur", {
          focusedEditor: null
        }), e.focusedEditor = null);
      });
    }), vf || (vf = function vf(t) {
      var n = e.activeEditor;
      n && Un(t).each(function (t) {
        t.ownerDocument === document && (t === document.body || Cf(n, t) || e.focusedEditor !== n || (n.dispatch("blur", {
          focusedEditor: null
        }), e.focusedEditor = null));
      });
    }, yf.bind(document, "focusin", vf));
  },
      xf = function xf(e, t) {
    e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (yf.unbind(document, "focusin", vf), vf = null);
  },
      kf = function kf(e, t) {
    (function (e, t) {
      return function (e) {
        return e.collapsed ? M.from(La(e.startContainer, e.startOffset)).map(fn) : M.none();
      }(t).bind(function (t) {
        return ar(t) ? M.some(t) : !1 === yn(e, t) ? M.some(e) : M.none();
      });
    })(fn(e.getBody()), t).bind(function (e) {
      return Rc(e.dom);
    }).fold(function () {
      e.selection.normalize();
    }, function (t) {
      return e.selection.setRng(t.toRange());
    });
  },
      Sf = function Sf(e) {
    if (e.setActive) try {
      e.setActive();
    } catch (t) {
      e.focus();
    } else e.focus();
  },
      _f = function _f(e) {
    return e.inline ? function (e) {
      var t = e.getBody();
      return t && (n = fn(t), sf(n) || (o = n, af(Mn(o)).filter(function (e) {
        return o.dom.contains(e.dom);
      })).isSome());
      var n, o;
    }(e) : function (e) {
      return e.iframeElement && sf(fn(e.iframeElement));
    }(e);
  },
      Ef = function Ef(e) {
    return e.editorManager.setActive(e);
  },
      Nf = function Nf(e, t, n, o, r) {
    var s = n ? t.startContainer : t.endContainer,
        a = n ? t.startOffset : t.endOffset;
    return M.from(s).map(fn).map(function (e) {
      return o && t.collapsed ? e : An(e, r(e, a)).getOr(e);
    }).bind(function (e) {
      return Ut(e) ? M.some(e) : kn(e).filter(Ut);
    }).map(function (e) {
      return e.dom;
    }).getOr(e);
  },
      Rf = function Rf(e, t, n) {
    return Nf(e, t, !0, n, function (e, t) {
      return Math.min(Bn(e), t);
    });
  },
      Af = function Af(e, t, n) {
    return Nf(e, t, !1, n, function (e, t) {
      return t > 0 ? t - 1 : t;
    });
  },
      Of = function Of(e, t) {
    var n = e;

    for (; e && Ro(e) && 0 === e.length;) {
      e = t ? e.nextSibling : e.previousSibling;
    }

    return e || n;
  },
      Tf = function Tf(e, t) {
    return H(t, function (t) {
      var n = e.dispatch("GetSelectionRange", {
        range: t
      });
      return n.range !== t ? n.range : t;
    });
  },
      Bf = ["img", "br"],
      Df = function Df(e) {
    var t = yr(e).filter(function (e) {
      return 0 !== e.trim().length || e.indexOf(fr) > -1;
    }).isSome();
    return t || j(Bf, Mt(e));
  },
      Pf = "[data-mce-autocompleter]",
      Lf = function Lf(e, t) {
    if (Mf(fn(e.getBody())).isNone()) {
      var _o31 = cn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());

      Zn(_o31, fn(t.extractContents())), t.insertNode(_o31.dom), kn(_o31).each(function (e) {
        return e.dom.normalize();
      }), (n = _o31, function (e, t) {
        var n = function n(e) {
          var o = Rn(e);

          for (var _e29 = o.length - 1; _e29 >= 0; _e29--) {
            var _r23 = o[_e29];
            if (t(_r23)) return M.some(_r23);

            var _s12 = n(_r23);

            if (_s12.isSome()) return _s12;
          }

          return M.none();
        };

        return n(e);
      }(n, Df)).map(function (t) {
        e.selection.setCursorLocation(t.dom, function (e) {
          return "img" === Mt(e) ? 1 : yr(e).fold(function () {
            return Rn(e).length;
          }, function (e) {
            return e.length;
          });
        }(t));
      });
    }

    var n;
  },
      Mf = function Mf(e) {
    return Ko(e, Pf);
  },
      If = {
    "#text": 3,
    "#comment": 8,
    "#cdata": 4,
    "#pi": 7,
    "#doctype": 10,
    "#document-fragment": 11
  },
      Ff = function Ff(e, t, n) {
    var o = n ? "lastChild" : "firstChild",
        r = n ? "prev" : "next";
    if (e[o]) return e[o];

    if (e !== t) {
      var _n40 = e[r];
      if (_n40) return _n40;

      for (var _o32 = e.parent; _o32 && _o32 !== t; _o32 = _o32.parent) {
        if (_n40 = _o32[r], _n40) return _n40;
      }
    }
  },
      Uf = function Uf(e) {
    if (!Xr(e.value)) return !1;
    var t = e.parent;
    return !t || "span" === t.name && !t.attr("style") || !/^[ ]+$/.test(e.value);
  },
      zf = function zf(e) {
    var t = "a" === e.name && !e.attr("href") && e.attr("id");
    return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t;
  };

  var jf =
  /*#__PURE__*/
  function () {
    function jf(e, t) {
      _classCallCheck(this, jf);

      this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {});
    }

    _createClass(jf, [{
      key: "replace",
      value: function replace(e) {
        var t = this;
        return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
      }
    }, {
      key: "attr",
      value: function attr(e, t) {
        var n = this;
        var o;
        if ("string" != typeof e) return null != e && fe(e, function (e, t) {
          n.attr(t, e);
        }), n;

        if (o = n.attributes) {
          if (void 0 !== t) {
            if (null === t) {
              if (e in o.map) {
                delete o.map[e];
                var _t36 = o.length;

                for (; _t36--;) {
                  if (o[_t36].name === e) return o.splice(_t36, 1), n;
                }
              }

              return n;
            }

            if (e in o.map) {
              var _n41 = o.length;

              for (; _n41--;) {
                if (o[_n41].name === e) {
                  o[_n41].value = t;
                  break;
                }
              }
            } else o.push({
              name: e,
              value: t
            });

            return o.map[e] = t, n;
          }

          return o.map[e];
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        var e = this,
            t = new jf(e.name, e.type);
        var n;

        if (n = e.attributes) {
          var _e30 = [];
          _e30.map = {};

          for (var _t37 = 0, _o33 = n.length; _t37 < _o33; _t37++) {
            var _o34 = n[_t37];
            "id" !== _o34.name && (_e30[_e30.length] = {
              name: _o34.name,
              value: _o34.value
            }, _e30.map[_o34.name] = _o34.value);
          }

          t.attributes = _e30;
        }

        return t.value = e.value, t;
      }
    }, {
      key: "wrap",
      value: function wrap(e) {
        var t = this;
        return t.parent.insert(e, t), e.append(t), t;
      }
    }, {
      key: "unwrap",
      value: function unwrap() {
        var e = this;

        for (var _t38 = e.firstChild; _t38;) {
          var _n42 = _t38.next;
          e.insert(_t38, e, !0), _t38 = _n42;
        }

        e.remove();
      }
    }, {
      key: "remove",
      value: function remove() {
        var e = this,
            t = e.parent,
            n = e.next,
            o = e.prev;
        return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : o.next = n, t.lastChild === e ? (t.lastChild = o, o && (o.next = null)) : n.prev = o, e.parent = e.next = e.prev = null), e;
      }
    }, {
      key: "append",
      value: function append(e) {
        var t = this;
        e.parent && e.remove();
        var n = t.lastChild;
        return n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e;
      }
    }, {
      key: "insert",
      value: function insert(e, t, n) {
        e.parent && e.remove();
        var o = t.parent || this;
        return n ? (t === o.firstChild ? o.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === o.lastChild ? o.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = o, e;
      }
    }, {
      key: "getAll",
      value: function getAll(e) {
        var t = this,
            n = [];

        for (var _o35 = t.firstChild; _o35; _o35 = Ff(_o35, t)) {
          _o35.name === e && n.push(_o35);
        }

        return n;
      }
    }, {
      key: "children",
      value: function children() {
        var e = [];

        for (var _t39 = this.firstChild; _t39; _t39 = _t39.next) {
          e.push(_t39);
        }

        return e;
      }
    }, {
      key: "empty",
      value: function empty() {
        var e = this;

        if (e.firstChild) {
          var _t40 = [];

          for (var _n44 = e.firstChild; _n44; _n44 = Ff(_n44, e)) {
            _t40.push(_n44);
          }

          var _n43 = _t40.length;

          for (; _n43--;) {
            var _e31 = _t40[_n43];
            _e31.parent = _e31.firstChild = _e31.lastChild = _e31.next = _e31.prev = null;
          }
        }

        return e.firstChild = e.lastChild = null, e;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var o = this;
        var r = o.firstChild;
        if (zf(o)) return !1;
        if (r) do {
          if (1 === r.type) {
            if (r.attr("data-mce-bogus")) continue;
            if (e[r.name]) return !1;
            if (zf(r)) return !1;
          }

          if (8 === r.type) return !1;
          if (3 === r.type && !Uf(r)) return !1;
          if (3 === r.type && r.parent && t[r.parent.name] && Xr(r.value)) return !1;
          if (n && n(r)) return !1;
        } while (r = Ff(r, o));
        return !0;
      }
    }, {
      key: "walk",
      value: function walk(e) {
        return Ff(this, null, e);
      }
    }], [{
      key: "create",
      value: function create(e, t) {
        var n = new jf(e, If[e] || 1);
        return t && fe(t, function (e, t) {
          n.attr(t, e);
        }), n;
      }
    }]);

    return jf;
  }();

  var Vf = function Vf(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = e.toLowerCase();

    if (-1 !== o.indexOf("[if ", n) && function (e, t) {
      return /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t));
    }(o, n)) {
      var _e32 = o.indexOf("[endif]", n);

      return o.indexOf(">", _e32);
    }

    if (t) {
      var _e33 = o.indexOf(">", n);

      return -1 !== _e33 ? _e33 : o.length;
    }

    {
      var _t41 = /--!?>/g;
      _t41.lastIndex = n;

      var _r24 = _t41.exec(e);

      return _r24 ? _r24.index + _r24[0].length : o.length;
    }
  },
      Hf = function Hf(e, t, n) {
    var o = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
        r = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,
        s = e.getVoidElements();
    var a = 1,
        i = n;

    for (; 0 !== a;) {
      for (o.lastIndex = i;;) {
        var _e34 = o.exec(t);

        if (null === _e34) return i;

        if ("!" === _e34[1]) {
          i = ze(_e34[2], "--") ? Vf(t, !1, _e34.index + "!--".length) : Vf(t, !0, _e34.index + 1);
          break;
        }

        {
          r.lastIndex = o.lastIndex;

          var _n45 = r.exec(t);

          if (h(_n45) || _n45.index !== o.lastIndex) continue;
          "/" === _e34[1] ? a -= 1 : xe(s, _e34[2]) || (a += 1), i = o.lastIndex + _n45[0].length;
          break;
        }
      }
    }

    return i;
  },
      $f = function $f(e, t) {
    var n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
        o = e.schema;

    var r = function (e, t) {
      var n = new RegExp(["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"), "gi");
      return t.replace(n, "");
    }(e.getTempAttrs(), t);

    var s = o.getVoidElements();
    var a;

    for (; a = n.exec(r);) {
      var _e35 = n.lastIndex,
          _t42 = a[0].length;

      var _i4 = void 0;

      _i4 = s[a[1]] ? _e35 : Hf(o, r, _e35), r = r.substring(0, _e35 - _t42) + r.substring(_i4), n.lastIndex = _e35 - _t42;
    }

    return _r(r);
  },
      qf = $f,
      Wf = Bt.each,
      Kf = function Kf(e) {
    return {
      compare: function compare(t, n) {
        if (t.nodeName !== n.nodeName) return !1;

        var o = function o(t) {
          var n = {};
          return Wf(e.getAttribs(t), function (o) {
            var r = o.nodeName.toLowerCase();
            0 !== r.indexOf("_") && "style" !== r && 0 !== r.indexOf("data-") && (n[r] = e.getAttrib(t, r));
          }), n;
        },
            r = function r(e, t) {
          var n, o;

          for (o in e) {
            if (xe(e, o)) {
              if (n = t[o], void 0 === n) return !1;
              if (e[o] !== n) return !1;
              delete t[o];
            }
          }

          for (o in t) {
            if (xe(t, o)) return !1;
          }

          return !0;
        };

        return !(!r(o(t), o(n)) || !r(e.parseStyle(e.getAttrib(t, "style")), e.parseStyle(e.getAttrib(n, "style"))) || $c(t) || $c(n));
      }
    };
  },
      Gf = Bt.makeMap,
      Yf = function Yf(e) {
    var t = [],
        n = (e = e || {}).indent,
        o = Gf(e.indent_before || ""),
        r = Gf(e.indent_after || ""),
        s = Cs.getEncodeFunc(e.entity_encoding || "raw", e.entities),
        a = "xhtml" !== e.element_format;
    return {
      start: function start(e, i, l) {
        var d, c, u, m;
        if (n && o[e] && t.length > 0 && (m = t[t.length - 1], m.length > 0 && "\n" !== m && t.push("\n")), t.push("<", e), i) for (d = 0, c = i.length; d < c; d++) {
          u = i[d], t.push(" ", u.name, '="', s(u.value, !0), '"');
        }
        t[t.length] = !l || a ? ">" : " />", l && n && r[e] && t.length > 0 && (m = t[t.length - 1], m.length > 0 && "\n" !== m && t.push("\n"));
      },
      end: function end(e) {
        var o;
        t.push("</", e, ">"), n && r[e] && t.length > 0 && (o = t[t.length - 1], o.length > 0 && "\n" !== o && t.push("\n"));
      },
      text: function text(e, n) {
        e.length > 0 && (t[t.length] = n ? e : s(e));
      },
      cdata: function cdata(e) {
        t.push("<![CDATA[", e, "]]>");
      },
      comment: function comment(e) {
        t.push("\x3c!--", e, "--\x3e");
      },
      pi: function pi(e, o) {
        o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"), n && t.push("\n");
      },
      doctype: function doctype(e) {
        t.push("<!DOCTYPE", e, ">", n ? "\n" : "");
      },
      reset: function reset() {
        t.length = 0;
      },
      getContent: function getContent() {
        return t.join("").replace(/\n$/, "");
      }
    };
  },
      Xf = function Xf(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Bs();
    var n = Yf(e);
    return (e = e || {}).validate = !("validate" in e) || e.validate, {
      serialize: function serialize(o) {
        var r = e.validate,
            s = {
          3: function _(e) {
            n.text(e.value, e.raw);
          },
          8: function _(e) {
            n.comment(e.value);
          },
          7: function _(e) {
            n.pi(e.name, e.value);
          },
          10: function _(e) {
            n.doctype(e.value);
          },
          4: function _(e) {
            n.cdata(e.value);
          },
          11: function _(e) {
            if (e = e.firstChild) do {
              a(e);
            } while (e = e.next);
          }
        };
        n.reset();

        var a = function a(e) {
          var o = s[e.type];
          if (o) o(e);else {
            var _o36 = e.name,
                _s13 = _o36 in t.getVoidElements();

            var _i5 = e.attributes;

            if (r && _i5 && _i5.length > 1) {
              var _n46 = [];
              _n46.map = {};

              var _o37 = t.getElementRule(e.name);

              if (_o37) {
                for (var _e36 = 0, _t43 = _o37.attributesOrder.length; _e36 < _t43; _e36++) {
                  var _t44 = _o37.attributesOrder[_e36];

                  if (_t44 in _i5.map) {
                    var _e37 = _i5.map[_t44];
                    _n46.map[_t44] = _e37, _n46.push({
                      name: _t44,
                      value: _e37
                    });
                  }
                }

                for (var _e38 = 0, _t45 = _i5.length; _e38 < _t45; _e38++) {
                  var _t46 = _i5[_e38].name;

                  if (!(_t46 in _n46.map)) {
                    var _e39 = _i5.map[_t46];
                    _n46.map[_t46] = _e39, _n46.push({
                      name: _t46,
                      value: _e39
                    });
                  }
                }

                _i5 = _n46;
              }
            }

            if (n.start(_o36, _i5, _s13), !_s13) {
              var _t47 = e.firstChild;

              if (_t47) {
                "pre" !== _o36 && "textarea" !== _o36 || 3 !== _t47.type || "\n" !== _t47.value[0] || n.text("\n", !0);

                do {
                  a(_t47);
                } while (_t47 = _t47.next);
              }

              n.end(_o36);
            }
          }
        };

        return 1 !== o.type || e.inner ? 3 === o.type ? s[3](o) : s[11](o) : a(o), n.getContent();
      }
    };
  },
      Qf = new Set();

  $(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], function (e) {
    Qf.add(e);
  });

  var Jf = ["font", "text-decoration", "text-emphasis"],
      Zf = function Zf(e, t) {
    return ue(e.parseStyle(e.getAttrib(t, "style")));
  },
      eg = function eg(e, t, n) {
    var o = Zf(e, t),
        r = Zf(e, n),
        s = function s(o) {
      var r, s;
      var a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
          i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
      return We(a) && We(i) && a !== i;
    };

    return V(o, function (e) {
      var t = function t(_t48) {
        return V(_t48, function (t) {
          return t === e;
        });
      };

      if (!t(r) && t(Jf)) {
        var _e40 = K(r, function (e) {
          return V(Jf, function (t) {
            return ze(e, t);
          });
        });

        return V(_e40, s);
      }

      return s(e);
    });
  },
      tg = function tg(e, t, n) {
    return M.from(n.container()).filter(Ro).exists(function (o) {
      var r = e ? 0 : -1;
      return t(o.data.charAt(n.offset() + r));
    });
  },
      ng = O(tg, !0, Wc),
      og = O(tg, !1, Wc),
      rg = function rg(e) {
    var t = e.container();
    return Ro(t) && (0 === t.data.length || Sr(t.data) && Yu.isBookmarkNode(t.parentNode));
  },
      sg = function sg(e, t) {
    return function (n) {
      return M.from(Yd(e ? 0 : -1, n)).filter(t).isSome();
    };
  },
      ag = function ag(e) {
    return Lo(e) && "block" === qn(fn(e), "display");
  },
      ig = function ig(e) {
    return Io(e) && !function (e) {
      return Co(e) && "all" === e.getAttribute("data-mce-bogus");
    }(e);
  },
      lg = sg(!0, ag),
      dg = sg(!1, ag),
      cg = sg(!0, Uo),
      ug = sg(!1, Uo),
      mg = sg(!0, _o),
      fg = sg(!1, _o),
      gg = sg(!0, ig),
      pg = sg(!1, ig),
      hg = function hg(e, t) {
    return function (e, t, n) {
      return yn(t, e) ? (o = function (e, t) {
        var n = w(t) ? t : P;
        var o = e.dom;
        var r = [];

        for (; null !== o.parentNode && void 0 !== o.parentNode;) {
          var _e41 = o.parentNode,
              _t49 = fn(_e41);

          if (r.push(_t49), !0 === n(_t49)) break;
          o = _e41;
        }

        return r;
      }(e, function (e) {
        return n(e) || vn(e, t);
      }), o.slice(0, -1)) : [];
      var o;
    }(e, t, P);
  },
      bg = function bg(e, t) {
    return [e].concat(hg(e, t));
  },
      vg = function vg(e, t, n) {
    return Sc(e, t, n, rg);
  },
      yg = function yg(e, t) {
    return Q(bg(fn(t.container()), e), er);
  },
      Cg = function Cg(e, t, n) {
    return vg(e, t.dom, n).forall(function (e) {
      return yg(t, n).fold(function () {
        return !1 === Gd(e, n, t.dom);
      }, function (o) {
        return !1 === Gd(e, n, t.dom) && yn(o, fn(e.container()));
      });
    });
  },
      wg = function wg(e, t, n) {
    return yg(t, n).fold(function () {
      return vg(e, t.dom, n).forall(function (e) {
        return !1 === Gd(e, n, t.dom);
      });
    }, function (t) {
      return vg(e, t.dom, n).isNone();
    });
  },
      xg = O(wg, !1),
      kg = O(wg, !0),
      Sg = O(Cg, !1),
      _g = O(Cg, !0),
      Eg = function Eg(e) {
    return rc(e).exists(nr);
  },
      Ng = function Ng(e, t, n) {
    var o = K(bg(fn(n.container()), t), er),
        r = ie(o).getOr(t);
    return xc(e, r.dom, n).filter(Eg);
  },
      Rg = function Rg(e, t) {
    return rc(t).exists(nr) || Ng(!0, e, t).isSome();
  },
      Ag = function Ag(e, t) {
    return function (e) {
      return M.from(e.getNode(!0)).map(fn);
    }(t).exists(nr) || Ng(!1, e, t).isSome();
  },
      Og = O(Ng, !1),
      Tg = O(Ng, !0),
      Bg = function Bg(e) {
    return ti.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
  },
      Dg = function Dg(e, t) {
    var n = K(bg(fn(t.container()), e), er);
    return ie(n).getOr(e);
  },
      Pg = function Pg(e, t) {
    return Bg(t) ? og(t) : og(t) || Nc(Dg(e, t).dom, t).exists(og);
  },
      Lg = function Lg(e, t) {
    return Bg(t) ? ng(t) : ng(t) || Ec(Dg(e, t).dom, t).exists(ng);
  },
      Mg = function Mg(e) {
    return rc(e).bind(function (e) {
      return qo(e, Ut);
    }).exists(function (e) {
      return function (e) {
        return j(["pre", "pre-wrap"], e);
      }(qn(e, "white-space"));
    });
  },
      Ig = function Ig(e, t) {
    return !Mg(t) && (xg(e, t) || Sg(e, t) || Ag(e, t) || Pg(e, t));
  },
      Fg = function Fg(e, t) {
    return !Mg(t) && (kg(e, t) || _g(e, t) || Rg(e, t) || Lg(e, t) || function (e, t) {
      var n = Ec(e.dom, t).getOr(t),
          o = function (e) {
        return function (t) {
          return n = new Qo(t, e).next(), C(n) && Io(n) && Fd(n);
          var n;
        };
      }(e.dom);

      return t.isAtEnd() && (o(t.container()) || o(n.container()));
    }(e, t));
  },
      Ug = function Ug(e, t) {
    return Ig(e, t) || Fg(e, function (e) {
      var t = e.container(),
          n = e.offset();
      return Ro(t) && n < t.data.length ? ti(t, n + 1) : e;
    }(t));
  },
      zg = function zg(e, t) {
    return qc(e.charAt(t));
  },
      jg = function jg(e) {
    var t = e.container();
    return Ro(t) && Ue(t.data, fr);
  },
      Vg = function Vg(e, t) {
    return M.some(t).filter(jg).bind(function (t) {
      var n = t.container(),
          o = function (e, t) {
        var n = t.data,
            o = ti(t, 0);
        return !(!zg(n, 0) || Ug(e, o) || (t.data = " " + n.slice(1), 0));
      }(e, n) || function (e) {
        var t = e.data,
            n = function (e) {
          var t = e.split("");
          return H(t, function (e, n) {
            return qc(e) && n > 0 && n < t.length - 1 && Kc(t[n - 1]) && Kc(t[n + 1]) ? " " : e;
          }).join("");
        }(t);

        return n !== t && (e.data = n, !0);
      }(n) || function (e, t) {
        var n = t.data,
            o = ti(t, n.length - 1);
        return !(!zg(n, n.length - 1) || Ug(e, o) || (t.data = n.slice(0, -1) + " ", 0));
      }(e, n);

      return o ? M.some(t) : M.none();
    });
  },
      Hg = function Hg(e, t, n) {
    if (0 === n) return;
    var o = fn(e),
        r = $o(o, er).getOr(o),
        s = e.data.slice(t, t + n),
        a = t + n >= e.data.length && Fg(r, ti(e, e.data.length)),
        i = 0 === t && Ig(r, ti(e, 0));
    e.replaceData(t, n, Jr(s, 4, i, a));
  },
      $g = function $g(e, t) {
    var n = e.data.slice(t),
        o = n.length - $e(n).length;
    Hg(e, t, o);
  },
      qg = function qg(e, t) {
    var n = e.data.slice(0, t),
        o = n.length - qe(n).length;
    Hg(e, t - o, o);
  },
      Wg = function Wg(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r = qe(e.data).length,
        s = o ? e : t,
        a = o ? t : e;
    return o ? s.appendData(a.data) : s.insertData(0, a.data), no(fn(a)), n && $g(s, r), s;
  },
      Kg = function Kg(e, t) {
    return function (e, t) {
      var n = e.container(),
          o = e.offset();
      return !1 === ti.isTextPosition(e) && n === t.parentNode && o > ti.before(t).offset();
    }(t, e) ? ti(t.container(), t.offset() - 1) : t;
  },
      Gg = function Gg(e) {
    return Wr(e.previousSibling) ? M.some((t = e.previousSibling, Ro(t) ? ti(t, t.data.length) : ti.after(t))) : e.previousSibling ? Ac(e.previousSibling) : M.none();
    var t;
  },
      Yg = function Yg(e) {
    return Wr(e.nextSibling) ? M.some((t = e.nextSibling, Ro(t) ? ti(t, 0) : ti.before(t))) : e.nextSibling ? Rc(e.nextSibling) : M.none();
    var t;
  },
      Xg = function Xg(e, t, n) {
    return function (e, t, n) {
      return e ? function (e, t) {
        return Yg(t).orThunk(function () {
          return Gg(t);
        }).orThunk(function () {
          return function (e, t) {
            return Ec(e, ti.after(t)).fold(function () {
              return Nc(e, ti.before(t));
            }, M.some);
          }(e, t);
        });
      }(t, n) : function (e, t) {
        return Gg(t).orThunk(function () {
          return Yg(t);
        }).orThunk(function () {
          return function (e, t) {
            var n = ti.before(t.previousSibling ? t.previousSibling : t.parentNode);
            return Nc(e, n).fold(function () {
              return Ec(e, ti.after(t));
            }, M.some);
          }(e, t);
        });
      }(t, n);
    }(e, t, n).map(O(Kg, n));
  },
      Qg = function Qg(e, t, n) {
    n.fold(function () {
      e.focus();
    }, function (n) {
      e.selection.setRng(n.toRange(), t);
    });
  },
      Jg = function Jg(e, t) {
    return t && xe(e.schema.getBlockElements(), Mt(t));
  },
      Zg = function Zg(e) {
    if (os(e)) {
      var _t50 = cn('<br data-mce-bogus="1">');

      return to(e), Zn(e, _t50), M.some(ti.before(_t50.dom));
    }

    return M.none();
  },
      ep = function ep(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r = Xg(t, e.getBody(), n.dom),
        s = $o(n, O(Jg, e), (a = e.getBody(), function (e) {
      return e.dom === a;
    }));
    var a;

    var i = function (e, t, n) {
      var o = Sn(e).filter(zt),
          r = _n(e).filter(zt);

      return no(e), (s = o, a = r, i = t, l = function l(e, t, o) {
        var r = e.dom,
            s = t.dom,
            a = r.data.length;
        return Wg(r, s, n), o.container() === s ? ti(r, a) : o;
      }, s.isSome() && a.isSome() && i.isSome() ? M.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie())) : M.none()).orThunk(function () {
        return n && (o.each(function (e) {
          return qg(e.dom, e.dom.length);
        }), r.each(function (e) {
          return $g(e.dom, 0);
        })), t;
      });
      var s, a, i, l;
    }(n, r, function (e, t) {
      return xe(e.schema.getTextInlineElements(), Mt(t));
    }(e, n));

    e.dom.isEmpty(e.getBody()) ? (e.setContent(""), e.selection.setCursorLocation()) : s.bind(Zg).fold(function () {
      o && Qg(e, t, i);
    }, function (n) {
      o && Qg(e, t, M.some(n));
    });
  },
      tp = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
      np = function np(e, t) {
    return hn(fn(t), yl(e));
  },
      op = function op(e, t, n) {
    var o = function (e, t, n) {
      return K(Qs.DOM.getParents(n.container(), "*", t), e);
    }(e, t, n);

    return M.from(o[o.length - 1]);
  },
      rp = function rp(e, t) {
    if (!t) return t;
    var n = t.container(),
        o = t.offset();
    return e ? Ar(n) ? Ro(n.nextSibling) ? ti(n.nextSibling, 0) : ti.after(n) : Br(t) ? ti(n, o + 1) : t : Ar(n) ? Ro(n.previousSibling) ? ti(n.previousSibling, n.previousSibling.data.length) : ti.before(n) : Dr(t) ? ti(n, o - 1) : t;
  },
      sp = O(rp, !0),
      ap = O(rp, !1),
      ip = function ip(e, t) {
    var n = function n(e) {
      return e.stopImmediatePropagation();
    };

    e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n);
  },
      lp = function lp(e) {
    return ip(e, "Delete");
  },
      dp = function dp(e) {
    return or(e) || sr(e);
  },
      cp = function cp(e, t) {
    return yn(e, t) ? qo(t, dp, function (e) {
      return function (t) {
        return vn(e, fn(t.dom.parentNode));
      };
    }(e)) : M.none();
  },
      up = function up(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    e.dom.isEmpty(e.getBody()) && e.setContent("", {
      no_selection: !t
    });
  },
      mp = function mp(e) {
    var t;
    return (8 === It(t = e) || "#comment" === Mt(t) ? Sn(e) : Tn(e)).bind(mp).orThunk(function () {
      return M.some(e);
    });
  },
      fp = function fp(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r;
    t.deleteContents();
    var s = mp(n).getOr(n),
        a = fn(null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r ? r : n.dom);

    if (a.dom === e.getBody() ? up(e, o) : os(a) && (wr(a), o && e.selection.setCursorLocation(a.dom, 0)), !vn(n, a)) {
      var _e42 = Dt(kn(a), n) ? [] : kn(i = a).map(Rn).map(function (e) {
        return K(e, function (e) {
          return !vn(i, e);
        });
      }).getOr([]);

      $(_e42.concat(Rn(n)), function (e) {
        vn(e, a) || yn(e, a) || !os(e) || no(e);
      });
    }

    var i;
  },
      gp = function gp(e) {
    return hr(e, "td,th");
  },
      pp = function pp(e, t) {
    return {
      start: e,
      end: t
    };
  },
      hp = Ei([{
    singleCellTable: ["rng", "cell"]
  }, {
    fullTable: ["table"]
  }, {
    partialTable: ["cells", "outsideDetails"]
  }, {
    multiTable: ["startTableCells", "endTableCells", "betweenRng"]
  }]),
      bp = function bp(e, t) {
    return Go(fn(e), "td,th", t);
  },
      vp = function vp(e) {
    return !vn(e.start, e.end);
  },
      yp = function yp(e, t) {
    return Mu(e.start, t).bind(function (n) {
      return Mu(e.end, t).bind(function (e) {
        return Lt(vn(n, e), n);
      });
    });
  },
      Cp = function Cp(e) {
    return function (t) {
      return yp(t, e).map(function (e) {
        return function (e, t, n) {
          return {
            rng: e,
            table: t,
            cells: n
          };
        }(t, e, gp(e));
      });
    };
  },
      wp = function wp(e, t, n, o) {
    if (n.collapsed || !e.forall(vp)) return M.none();

    if (t.isSameTable) {
      var _t51 = e.bind(Cp(o));

      return M.some({
        start: _t51,
        end: _t51
      });
    }

    {
      var _e43 = bp(n.startContainer, o),
          _t52 = bp(n.endContainer, o),
          _r25 = _e43.bind(function (e) {
        return function (t) {
          return Mu(t, e).bind(function (e) {
            return le(gp(e)).map(function (e) {
              return pp(t, e);
            });
          });
        };
      }(o)).bind(Cp(o)),
          _s14 = _t52.bind(function (e) {
        return function (t) {
          return Mu(t, e).bind(function (e) {
            return ie(gp(e)).map(function (e) {
              return pp(e, t);
            });
          });
        };
      }(o)).bind(Cp(o));

      return M.some({
        start: _r25,
        end: _s14
      });
    }
  },
      xp = function xp(e, t) {
    return J(e, function (e) {
      return vn(e, t);
    });
  },
      kp = function kp(e) {
    return Pt(xp(e.cells, e.rng.start), xp(e.cells, e.rng.end), function (t, n) {
      return e.cells.slice(t, n + 1);
    });
  },
      Sp = function Sp(e, t) {
    var n = t.startTable,
        o = t.endTable,
        r = e.cloneRange();
    return n.each(function (e) {
      return r.setStartAfter(e.dom);
    }), o.each(function (e) {
      return r.setEndBefore(e.dom);
    }), r;
  },
      _p = function _p(e, t) {
    var n = function (e) {
      return function (t) {
        return vn(e, t);
      };
    }(e),
        o = function (e, t) {
      var n = bp(e.startContainer, t),
          o = bp(e.endContainer, t);
      return Pt(n, o, pp);
    }(t, n),
        r = function (e, t) {
      var n = function n(e) {
        return Mu(fn(e), t);
      },
          o = n(e.startContainer),
          r = n(e.endContainer),
          s = o.isSome(),
          a = r.isSome(),
          i = Pt(o, r, vn).getOr(!1);

      return {
        startTable: o,
        endTable: r,
        isStartInTable: s,
        isEndInTable: a,
        isSameTable: i,
        isMultiTable: !i && s && a
      };
    }(t, n);

    return function (e, t, n) {
      return e.exists(function (e) {
        return function (e, t) {
          return !vp(e) && yp(e, t).exists(function (e) {
            var t = e.dom.rows;
            return 1 === t.length && 1 === t[0].cells.length;
          });
        }(e, n) && Uu(e.start, t);
      });
    }(o, t, n) ? o.map(function (e) {
      return hp.singleCellTable(t, e.start);
    }) : r.isMultiTable ? function (e, t, n, o) {
      return wp(e, t, n, o).bind(function (_ref7) {
        var e = _ref7.start,
            o = _ref7.end;
        var r = e.bind(kp).getOr([]),
            s = o.bind(kp).getOr([]);

        if (r.length > 0 && s.length > 0) {
          var _e44 = Sp(n, t);

          return M.some(hp.multiTable(r, s, _e44));
        }

        return M.none();
      });
    }(o, r, t, n) : function (e, t, n, o) {
      return wp(e, t, n, o).bind(function (_ref8) {
        var e = _ref8.start,
            t = _ref8.end;
        return e.or(t);
      }).bind(function (e) {
        var o = t.isSameTable,
            r = kp(e).getOr([]);
        if (o && e.cells.length === r.length) return M.some(hp.fullTable(e.table));

        if (r.length > 0) {
          if (o) return M.some(hp.partialTable(r, M.none()));
          {
            var _e45 = Sp(n, t);

            return M.some(hp.partialTable(r, M.some(_objectSpread({}, t, {
              rng: _e45
            }))));
          }
        }

        return M.none();
      });
    }(o, r, t, n);
  },
      Ep = function Ep(e) {
    return $(e, function (e) {
      Xt(e, "contenteditable"), wr(e);
    });
  },
      Np = function Np(e, t, n, o) {
    var r = n.cloneRange();
    o ? (r.setStart(n.startContainer, n.startOffset), r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild), r.setEnd(n.endContainer, n.endOffset)), Tp(e, r, t, !1).each(function (e) {
      return e();
    });
  },
      Rp = function Rp(e) {
    var t = Lu(e),
        n = fn(e.selection.getNode());
    Fo(n.dom) && os(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && V(t, function (e) {
      return vn(e, n);
    }) && qt(n, "data-mce-selected", "1");
  },
      Ap = function Ap(e, t, n) {
    return M.some(function () {
      var o = e.selection.getRng(),
          r = n.bind(function (_ref9) {
        var n = _ref9.rng,
            r = _ref9.isStartInTable;

        var s = function (e, t) {
          return M.from(e.dom.getParent(t, e.dom.isBlock)).map(fn);
        }(e, r ? n.endContainer : n.startContainer);

        n.deleteContents(), function (e, t, n) {
          n.each(function (n) {
            t ? no(n) : (wr(n), e.selection.setCursorLocation(n.dom, 0));
          });
        }(e, r, s.filter(os));
        var a = r ? t[0] : t[t.length - 1];
        return Np(e, a, o, r), os(a) ? M.none() : M.some(r ? t.slice(1) : t.slice(0, -1));
      }).getOr(t);
      Ep(r), Rp(e);
    });
  },
      Op = function Op(e, t, n, o) {
    return M.some(function () {
      var r = e.selection.getRng(),
          s = t[0],
          a = n[n.length - 1];
      Np(e, s, r, !0), Np(e, a, r, !1);
      var i = os(s) ? t : t.slice(1),
          l = os(a) ? n : n.slice(0, -1);
      Ep(i.concat(l)), o.deleteContents(), Rp(e);
    });
  },
      Tp = function Tp(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return M.some(function () {
      fp(e, t, n, o);
    });
  },
      Bp = function Bp(e, t) {
    return M.some(function () {
      return ep(e, !1, t);
    });
  },
      Dp = function Dp(e, t) {
    return Q(bg(t, e), ir);
  },
      Pp = function Pp(e, t) {
    return Q(bg(t, e), Ht("caption"));
  },
      Lp = function Lp(e, t) {
    return M.some(function () {
      wr(t), e.selection.setCursorLocation(t.dom, 0);
    });
  },
      Mp = function Mp(e, t) {
    return e ? mg(t) : fg(t);
  },
      Ip = function Ip(e, t, n) {
    var o = fn(e.getBody());
    return Pp(o, n).fold(function () {
      return function (e, t, n, o) {
        var r = ti.fromRangeStart(e.selection.getRng());
        return Dp(n, o).bind(function (o) {
          return os(o) ? Lp(e, o) : function (e, t, n, o, r) {
            return kc(n, e.getBody(), r).bind(function (e) {
              return Dp(t, fn(e.getNode())).bind(function (e) {
                return vn(e, o) ? M.none() : M.some(S);
              });
            });
          }(e, n, t, o, r);
        });
      }(e, t, o, n).orThunk(function () {
        return Lt(function (e, t) {
          var n = ti.fromRangeStart(e.selection.getRng());
          return Mp(t, n) || xc(t, e.getBody(), n).exists(function (e) {
            return Mp(t, e);
          });
        }(e, t), S);
      });
    }, function (n) {
      return function (e, t, n, o) {
        var r = ti.fromRangeStart(e.selection.getRng());
        return os(o) ? Lp(e, o) : function (e, t, n, o, r) {
          return kc(n, e.getBody(), r).fold(function () {
            return M.some(S);
          }, function (s) {
            return function (e, t, n, o) {
              return Rc(e.dom).bind(function (r) {
                return Ac(e.dom).map(function (e) {
                  return t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r);
                });
              }).getOr(!0);
            }(o, n, r, s) ? function (e, t) {
              return Lp(e, t);
            }(e, o) : function (e, t, n) {
              return Pp(e, fn(n.getNode())).fold(function () {
                return M.some(S);
              }, function (e) {
                return Lt(!vn(e, t), S);
              });
            }(t, o, s);
          });
        }(e, n, t, o, r);
      }(e, t, o, n);
    });
  },
      Fp = function Fp(e, t) {
    var n = fn(e.selection.getStart(!0)),
        o = Lu(e);
    return e.selection.isCollapsed() && 0 === o.length ? Ip(e, t, n) : function (e, t, n) {
      var o = fn(e.getBody()),
          r = e.selection.getRng();
      return 0 !== n.length ? Ap(e, n, M.none()) : function (e, t, n, o) {
        return Pp(t, o).fold(function () {
          return function (e, t, n) {
            return _p(t, n).bind(function (t) {
              return t.fold(O(Tp, e), O(Bp, e), O(Ap, e), O(Op, e));
            });
          }(e, t, n);
        }, function (t) {
          return function (e, t) {
            return Lp(e, t);
          }(e, t);
        });
      }(e, o, r, t);
    }(e, n, o);
  },
      Up = function Up(e, t) {
    for (; t && t !== e;) {
      if (Mo(t) || Io(t)) return t;
      t = t.parentNode;
    }

    return null;
  },
      zp = function zp(e, t) {
    t(e), e.firstChild && zp(e.firstChild, t), e.next && zp(e.next, t);
  },
      jp = function jp(e, t, n, o) {
    var r = n.name;

    for (var _t53 = 0, _s15 = e.length; _t53 < _s15; _t53++) {
      var _s16 = e[_t53];

      if (_s16.name === r) {
        var _e46 = o.nodes[r];
        _e46 ? _e46.nodes.push(n) : o.nodes[r] = {
          filter: _s16,
          nodes: [n]
        };
      }
    }

    if (n.attributes) for (var _e47 = 0, _r26 = t.length; _e47 < _r26; _e47++) {
      var _r27 = t[_e47],
          _s17 = _r27.name;

      if (_s17 in n.attributes.map) {
        var _e48 = o.attributes[_s17];
        _e48 ? _e48.nodes.push(n) : o.attributes[_s17] = {
          filter: _r27,
          nodes: [n]
        };
      }
    }
  },
      Vp = function Vp(e, t) {
    var n = function n(e) {
      fe(e, function (e) {
        var n = K(e.nodes, function (e) {
          return C(e.parent);
        });
        $(e.filter.callbacks, function (o) {
          o(n, e.filter.name, t);
        });
      });
    };

    n(e.nodes), n(e.attributes);
  },
      Hp = function Hp(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var r = function (e, t, n) {
      var o = {
        nodes: {},
        attributes: {}
      };
      return n.firstChild && zp(n.firstChild, function (n) {
        jp(e, t, n, o);
      }), o;
    }(e, t, n);

    Vp(r, o);
  },
      $p = function $p(e, t, n, o) {
    t.insert && n[o.name] ? o.empty().append(new jf("br", 1)) : o.empty().append(new jf("#text", 3)).value = fr;
  },
      qp = function qp(e, t) {
    return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t;
  },
      Wp = function Wp(e, t, n, o) {
    return o.isEmpty(t, n, function (t) {
      return function (e, t) {
        var n = e.getElementRule(t.name);
        return n && n.paddEmpty;
      }(e, t);
    });
  },
      Kp = function Kp(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.parent;
    if (t.getSpecialElements()[e.name]) e.empty().remove();else {
      var _o38 = e.children();

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _o38[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _e49 = _step2.value;
          t.isValidChild(n.name, _e49.name) || Kp(_e49, t, n);
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

      e.unwrap();
    }
  },
      Gp = function Gp(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : S;
    var o = t.getTextBlockElements(),
        r = t.getNonEmptyElements(),
        s = t.getWhitespaceElements(),
        a = Bt.makeMap("tr,td,th,tbody,thead,tfoot,table"),
        i = new Set();

    for (var _l3 = 0; _l3 < e.length; _l3++) {
      var _d3 = e[_l3];

      var _c2 = void 0,
          _u2 = void 0,
          _m2 = void 0;

      if (!_d3.parent || i.has(_d3)) continue;

      if (o[_d3.name] && "li" === _d3.parent.name) {
        var _e50 = _d3.next;

        for (; _e50 && o[_e50.name];) {
          _e50.name = "li", i.add(_e50), _d3.parent.insert(_e50, _d3.parent), _e50 = _e50.next;
        }

        _d3.unwrap();

        continue;
      }

      var _f2 = [_d3];

      for (_c2 = _d3.parent; _c2 && !t.isValidChild(_c2.name, _d3.name) && !a[_c2.name]; _c2 = _c2.parent) {
        _f2.push(_c2);
      }

      if (_c2 && _f2.length > 1) {
        if (t.isValidChild(_c2.name, _d3.name)) {
          _f2.reverse(), _u2 = _f2[0].clone(), n(_u2);
          var _e51 = _u2;

          for (var _o39 = 0; _o39 < _f2.length - 1; _o39++) {
            t.isValidChild(_e51.name, _f2[_o39].name) ? (_m2 = _f2[_o39].clone(), n(_m2), _e51.append(_m2)) : _m2 = _e51;

            for (var _e52 = _f2[_o39].firstChild; _e52 && _e52 !== _f2[_o39 + 1];) {
              var _t54 = _e52.next;
              _m2.append(_e52), _e52 = _t54;
            }

            _e51 = _m2;
          }

          Wp(t, r, s, _u2) ? _c2.insert(_d3, _f2[0], !0) : (_c2.insert(_u2, _f2[0], !0), _c2.insert(_d3, _u2)), _c2 = _f2[0], (Wp(t, r, s, _c2) || qp(_c2, "br")) && _c2.empty().remove();
        } else Kp(_d3, t);
      } else if (_d3.parent) {
        if ("li" === _d3.name) {
          var _e53 = _d3.prev;

          if (_e53 && ("ul" === _e53.name || "ol" === _e53.name)) {
            _e53.append(_d3);

            continue;
          }

          if (_e53 = _d3.next, _e53 && ("ul" === _e53.name || "ol" === _e53.name)) {
            _e53.insert(_d3, _e53.firstChild, !0);

            continue;
          }

          var _t55 = new jf("ul", 1);

          n(_t55), _d3.wrap(_t55);
          continue;
        }

        if (t.isValidChild(_d3.parent.name, "div") && t.isValidChild("div", _d3.name)) {
          var _e54 = new jf("div", 1);

          n(_e54), _d3.wrap(_e54);
        } else Kp(_d3, t);
      }
    }
  },
      Yp = function Yp(e) {
    return e.collapsed ? e : function (e) {
      var t = ti.fromRangeStart(e),
          n = ti.fromRangeEnd(e),
          o = e.commonAncestorContainer;
      return xc(!1, o, n).map(function (r) {
        return !Gd(t, n, o) && Gd(t, r, o) ? function (e, t, n, o) {
          var r = document.createRange();
          return r.setStart(e, t), r.setEnd(n, o), r;
        }(t.container(), t.offset(), r.container(), r.offset()) : e;
      }).getOr(e);
    }(e);
  },
      Xp = function Xp(e, t) {
    var n = t.firstChild,
        o = t.lastChild;
    return n && "meta" === n.name && (n = n.next), o && "mce_marker" === o.attr("id") && (o = o.prev), function (e, t) {
      var n = e.getNonEmptyElements();
      return t && (t.isEmpty(n) || function (e, t) {
        return e.getBlockElements()[t.name] && function (e) {
          return e.firstChild && e.firstChild === e.lastChild;
        }(t) && function (e) {
          return "br" === e.name || e.value === fr;
        }(t.firstChild);
      }(e, t));
    }(e, o) && (o = o.prev), !(!n || n !== o || "ul" !== n.name && "ol" !== n.name);
  },
      Qp = function Qp(e) {
    return e.length > 0 && (!(n = e[e.length - 1]).firstChild || (t = n) && t.firstChild && t.firstChild === t.lastChild && function (e) {
      return e.data === fr || Po(e);
    }(t.firstChild)) ? e.slice(0, -1) : e;
    var t, n;
  },
      Jp = function Jp(e, t) {
    var n = e.getParent(t, e.isBlock);
    return n && "LI" === n.nodeName ? n : null;
  },
      Zp = function Zp(e, t) {
    var n = ti.after(e),
        o = vc(t).prev(n);
    return o ? o.toRange() : null;
  },
      eh = function eh(e, t, n, o) {
    var r = function (e, t, n) {
      var o = t.serialize(n);
      return function (e) {
        var t = e.firstChild,
            n = e.lastChild;
        return t && "META" === t.nodeName && t.parentNode.removeChild(t), n && "mce_marker" === n.id && n.parentNode.removeChild(n), e;
      }(e.createFragment(o));
    }(t, e, o),
        s = Jp(t, n.startContainer),
        a = Qp((i = r.firstChild, K(i.childNodes, function (e) {
      return "LI" === e.nodeName;
    })));

    var i;

    var l = t.getRoot(),
        d = function d(e) {
      var o = ti.fromRangeStart(n),
          r = vc(t.getRoot()),
          a = 1 === e ? r.prev(o) : r.next(o);
      return !a || Jp(t, a.getNode()) !== s;
    };

    return d(1) ? function (e, t, n) {
      var o = e.parentNode;
      return Bt.each(t, function (t) {
        o.insertBefore(t, e);
      }), function (e, t) {
        var n = ti.before(e),
            o = vc(t).next(n);
        return o ? o.toRange() : null;
      }(e, n);
    }(s, a, l) : d(2) ? function (e, t, n, o) {
      return o.insertAfter(t.reverse(), e), Zp(t[0], n);
    }(s, a, l, t) : function (e, t, n, o) {
      var r = function (e, t) {
        var n = t.cloneRange(),
            o = t.cloneRange();
        return n.setStartBefore(e), o.setEndAfter(e), [n.cloneContents(), o.cloneContents()];
      }(e, o),
          s = e.parentNode;

      return s.insertBefore(r[0], e), Bt.each(t, function (t) {
        s.insertBefore(t, e);
      }), s.insertBefore(r[1], e), s.removeChild(e), Zp(t[t.length - 1], n);
    }(s, a, l, n);
  },
      th = ["pre"],
      nh = Fo,
      oh = function oh(e, t, n) {
    var o;
    var r, s, a;
    var i = e.selection,
        l = e.dom,
        d = e.parser,
        c = n.merge,
        u = Xf({
      validate: !0
    }, e.schema),
        m = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
    -1 === t.indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, m), s = i.getRng();
    var f = s.startContainer || (s.parentElement ? s.parentElement() : null),
        g = e.getBody();
    f === g && i.isCollapsed() && l.isBlock(g.firstChild) && function (e, t) {
      return t && !e.schema.getVoidElements()[t.nodeName];
    }(e, g.firstChild) && l.isEmpty(g.firstChild) && (s = l.createRng(), s.setStart(g.firstChild, 0), s.setEnd(g.firstChild, 0), i.setRng(s)), i.isCollapsed() || function (e) {
      var t = e.dom,
          n = Yp(e.selection.getRng());
      e.selection.setRng(n);
      var o = t.getParent(n.startContainer, nh);
      (function (e, t, n) {
        return null !== n && n === e.getParent(t.endContainer, nh) && Uu(fn(n), t);
      })(t, n, o) ? Tp(e, n, fn(o)) : e.getDoc().execCommand("Delete", !1, null);
    }(e), r = i.getNode();
    var p = {
      context: r.nodeName.toLowerCase(),
      data: n.data,
      insert: !0
    },
        h = d.parse(t, p);
    if (!0 === n.paste && Xp(e.schema, h) && function (e, t) {
      return !!Jp(e, t);
    }(l, r)) return s = eh(u, l, i.getRng(), h), i.setRng(s), t;

    if (!0 === n.paste && function (e, t, n, o) {
      var r;
      var s = t.firstChild,
          a = t.lastChild,
          i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a),
          l = j(th, s.name);

      if (i && l) {
        var _t56 = "false" !== s.attr("contenteditable"),
            _a10 = (null === (r = e.getParent(n, e.isBlock)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) === s.name,
            _i6 = M.from(Up(o, n)).forall(Mo);

        return _t56 && _a10 && _i6;
      }

      return !1;
    }(l, h, r, e.getBody()) && (null === (o = h.firstChild) || void 0 === o || o.unwrap()), function (e) {
      var t = e;

      for (; t = t.walk();) {
        1 === t.type && t.attr("data-mce-fragment", "1");
      }
    }(h), a = h.lastChild, "mce_marker" === a.attr("id")) {
      var _t57 = a;

      for (a = a.prev; a; a = a.walk(!0)) {
        if (3 === a.type || !l.isBlock(a.name)) {
          e.schema.isValidChild(a.parent.name, "span") && a.parent.insert(_t57, a, "br" === a.name);
          break;
        }
      }
    }

    if (e._selectionOverrides.showBlockCaretContainer(r), p.invalid) {
      e.selection.setContent(m), r = i.getNode();

      var _n47 = e.getBody();

      for (9 === r.nodeType ? r = a = _n47 : a = r; a !== _n47;) {
        r = a, a = a.parentNode;
      }

      t = r === _n47 ? _n47.innerHTML : l.getOuterHTML(r);

      var _o40 = d.parse(t);

      for (var _e55 = _o40; _e55; _e55 = _e55.walk()) {
        if ("mce_marker" === _e55.attr("id")) {
          _e55.replace(h);

          break;
        }
      }

      var _s18 = h.children(),
          _c3 = h.parent.name;

      h.unwrap();

      var _f3 = K(_s18, function (t) {
        return !e.schema.isValidChild(_c3, t.name);
      });

      Gp(_f3, e.schema), Hp(d.getNodeFilters(), d.getAttributeFilters(), _o40), t = u.serialize(_o40), r === _n47 ? l.setHTML(_n47, t) : l.setOuterHTML(r, t);
    } else t = u.serialize(h), function (e, t, n) {
      if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);else {
        var _o41 = n.firstChild,
            _r28 = n.lastChild;
        !_o41 || _o41 === _r28 && "BR" === _o41.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t, {
          no_events: !0
        });
      }
    }(e, t, r);

    var b;
    return function (e, t) {
      var n = e.schema.getTextInlineElements(),
          o = e.dom;

      if (t) {
        var _t58 = e.getBody(),
            _r29 = Kf(o);

        Bt.each(o.select("*[data-mce-fragment]"), function (e) {
          if (C(n[e.nodeName.toLowerCase()]) && function (e, t) {
            return te(Zf(e, t), function (e) {
              return !function (e) {
                return Qf.has(e);
              }(e);
            });
          }(o, e)) for (var _n48 = e.parentNode; C(_n48) && _n48 !== _t58 && !eg(o, e, _n48); _n48 = _n48.parentNode) {
            if (_r29.compare(_n48, e)) {
              o.remove(e, !0);
              break;
            }
          }
        });
      }
    }(e, c), function (e, t) {
      var n;
      var o = e.dom,
          r = e.selection;
      if (!t) return;
      r.scrollIntoView(t);
      var s = Up(e.getBody(), t);
      if ("false" === o.getContentEditable(s)) return o.remove(t), void r.select(s);
      var a = o.createRng();
      var i = t.previousSibling;

      if (Ro(i)) {
        a.setStart(i, i.nodeValue.length);
        var _e56 = t.nextSibling;
        Ro(_e56) && (i.appendData(_e56.data), _e56.parentNode.removeChild(_e56));
      } else a.setStartBefore(t), a.setEndBefore(t);

      var l = o.getParent(t, o.isBlock);
      o.remove(t), l && o.isEmpty(l) && (to(fn(l)), a.setStart(l, 0), a.setEnd(l, 0), nh(l) || function (e) {
        return !!e.getAttribute("data-mce-fragment");
      }(l) || !(n = function (t) {
        var n = ti.fromRangeStart(t);
        if (n = vc(e.getBody()).next(n), n) return n.toRange();
      }(a)) ? o.add(l, o.create("br", {
        "data-mce-bogus": "1"
      })) : (a = n, o.remove(l))), r.setRng(a);
    }(e, l.get("mce_marker")), b = e.getBody(), Bt.each(b.getElementsByTagName("*"), function (e) {
      e.removeAttribute("data-mce-fragment");
    }), function (e, t) {
      M.from(e.getParent(t, "td,th")).map(fn).each(xr);
    }(l, i.getStart()), t;
  },
      rh = function rh(e) {
    return e instanceof jf;
  },
      sh = function sh(e, t, n) {
    e.dom.setHTML(e.getBody(), t), !0 !== n && function (e) {
      _f(e) && Rc(e.getBody()).each(function (t) {
        var n = t.getNode(),
            o = _o(n) ? Rc(n).getOr(t) : t;
        e.selection.setRng(o.toRange());
      });
    }(e);
  },
      ah = function ah(e, t) {
    return function (e, t) {
      var n = e.dom;
      return n.parentNode ? function (e, t) {
        return Q(e.dom.childNodes, function (e) {
          return t(fn(e));
        }).map(fn);
      }(fn(n.parentNode), function (n) {
        return !vn(e, n) && t(n);
      }) : M.none();
    }(e, t).isSome();
  },
      ih = function ih(e) {
    return w(e) ? e : P;
  },
      lh = function lh(e, t, n) {
    var o = t(e),
        r = ih(n);
    return o.orThunk(function () {
      return r(e) ? M.none() : function (e, t, n) {
        var o = e.dom;
        var r = ih(n);

        for (; o.parentNode;) {
          o = o.parentNode;

          var _e57 = fn(o),
              _n49 = t(_e57);

          if (_n49.isSome()) return _n49;
          if (r(_e57)) break;
        }

        return M.none();
      }(e, t, r);
    });
  },
      dh = lu,
      ch = function ch(e, t, n) {
    var o = e.formatter.get(n);
    if (o) for (var _n50 = 0; _n50 < o.length; _n50++) {
      var _r30 = o[_n50];
      if (gu(_r30) && !1 === _r30.inherit && e.dom.is(t, _r30.selector)) return !0;
    }
    return !1;
  },
      uh = function uh(e, t, n, o, r) {
    var s = e.dom.getRoot();
    return t !== s && (t = e.dom.getParent(t, function (t) {
      return !!ch(e, t, n) || t.parentNode === s || !!gh(e, t, n, o, !0);
    }), !!gh(e, t, n, o, r));
  },
      mh = function mh(e, t, n) {
    return !(!pu(n) || !dh(t, n.inline)) || !(!fu(n) || !dh(t, n.block)) || !!gu(n) && Co(t) && e.is(t, n.selector);
  },
      fh = function fh(e, t, n, o, r, s) {
    var a = n[o];
    if (w(n.onmatch)) return n.onmatch(t, n, o);
    if (a) if (v(a.length)) {
      for (var _i7 in a) {
        if (xe(a, _i7)) {
          var _l4 = "attributes" === o ? e.getAttrib(t, _i7) : cu(e, t, _i7),
              _d4 = iu(a[_i7], s),
              _c4 = y(_l4) || Ke(_l4);

          if (_c4 && y(_d4)) continue;
          if (r && _c4 && !n.exact) return !1;
          if ((!r || n.exact) && !dh(_l4, du(_d4, _i7))) return !1;
        }
      }
    } else for (var _n51 = 0; _n51 < a.length; _n51++) {
      if ("attributes" === o ? e.getAttrib(t, a[_n51]) : cu(e, t, a[_n51])) return !0;
    }
    return !0;
  },
      gh = function gh(e, t, n, o, r) {
    var s = e.formatter.get(n),
        a = e.dom;
    if (s && t) for (var _n52 = 0; _n52 < s.length; _n52++) {
      var _i8 = s[_n52];

      if (mh(e.dom, t, _i8) && fh(a, t, _i8, "attributes", r, o) && fh(a, t, _i8, "styles", r, o)) {
        var _n53 = _i8.classes;
        if (_n53) for (var _r31 = 0; _r31 < _n53.length; _r31++) {
          if (!e.dom.hasClass(t, iu(_n53[_r31], o))) return;
        }
        return _i8;
      }
    }
  },
      ph = function ph(e, t, n, o, r) {
    if (o) return uh(e, o, t, n, r);
    if (o = e.selection.getNode(), uh(e, o, t, n, r)) return !0;
    var s = e.selection.getStart();
    return !(s === o || !uh(e, s, t, n, r));
  },
      hh = kr,
      bh = "_mce_caret",
      vh = function vh(e) {
    return function (e) {
      var t = [];

      for (; e;) {
        if (3 === e.nodeType && e.nodeValue !== hh || e.childNodes.length > 1) return [];
        1 === e.nodeType && t.push(e), e = e.firstChild;
      }

      return t;
    }(e).length > 0;
  },
      yh = function yh(e) {
    if (e) {
      var _t59 = new Qo(e, e);

      for (e = _t59.current(); e; e = _t59.next()) {
        if (Ro(e)) return e;
      }
    }

    return null;
  },
      Ch = function Ch(e) {
    var t = un("span");
    return Wt(t, {
      id: bh,
      "data-mce-bogus": "1",
      "data-mce-type": "format-caret"
    }), e && Zn(t, mn(hh)), t;
  },
      wh = function wh(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = e.dom,
        r = e.selection;
    if (vh(t)) ep(e, !1, fn(t), n);else {
      var _e58 = r.getRng(),
          _n54 = o.getParent(t, o.isBlock),
          _s19 = _e58.startContainer,
          _a11 = _e58.startOffset,
          _i9 = _e58.endContainer,
          _l5 = _e58.endOffset,
          _d5 = function (e) {
        var t = yh(e);
        return t && t.nodeValue.charAt(0) === hh && t.deleteData(0, 1), t;
      }(t);

      o.remove(t, !0), _s19 === _d5 && _a11 > 0 && _e58.setStart(_d5, _a11 - 1), _i9 === _d5 && _l5 > 0 && _e58.setEnd(_d5, _l5 - 1), _n54 && o.isEmpty(_n54) && wr(fn(_n54)), r.setRng(_e58);
    }
  },
      xh = function xh(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = e.dom,
        r = e.selection;
    if (t) wh(e, t, n);else if (!(t = Bc(e.getBody(), r.getStart()))) for (; t = o.get(bh);) {
      wh(e, t, !1);
    }
  },
      kh = function kh(e, t) {
    return e.appendChild(t), t;
  },
      Sh = function Sh(e, t) {
    var n = G(e, function (e, t) {
      return kh(e, t.cloneNode(!1));
    }, t);
    return kh(n, n.ownerDocument.createTextNode(hh));
  },
      _h = function _h(e, t, n, o) {
    var a = e.dom,
        i = e.selection;
    var l, d, c;
    var u = [],
        m = i.getRng(),
        f = m.startContainer,
        g = m.startOffset;

    for (d = f, 3 === f.nodeType && (g !== f.nodeValue.length && (l = !0), d = d.parentNode); d;) {
      if (gh(e, d, t, n, o)) {
        c = d;
        break;
      }

      d.nextSibling && (l = !0), u.push(d), d = d.parentNode;
    }

    if (c) if (l) {
      var _r32 = i.getBookmark();

      m.collapse(!0);

      var _s20 = Tu(e, m, e.formatter.get(t), !0);

      _s20 = Mm(_s20), e.formatter.remove(t, n, _s20, o), i.moveToBookmark(_r32);
    } else {
      var _l6 = Bc(e.getBody(), c),
          _d6 = Ch(!1).dom;

      (function (e, t, n) {
        var o = e.dom,
            r = o.getParent(n, O(ru, e));
        r && o.isEmpty(r) ? n.parentNode.replaceChild(t, n) : (function (e) {
          var t = hr(e, "br"),
              n = K(function (e) {
            var t = [];
            var n = e.dom;

            for (; n;) {
              t.push(fn(n)), n = n.lastChild;
            }

            return t;
          }(e).slice(-1), nr);
          t.length === n.length && $(n, no);
        }(fn(n)), o.isEmpty(n) ? n.parentNode.replaceChild(t, n) : o.insertAfter(t, n));
      })(e, _d6, null !== _l6 ? _l6 : c);

      var _m3 = function (e, t, n, o, a, i) {
        var l = e.formatter,
            d = e.dom,
            c = K(ue(l.get()), function (e) {
          return e !== o && !Ue(e, "removeformat");
        }),
            u = function (e, t, n) {
          return Y(n, function (n, o) {
            var r = function (e, t) {
              return V(e.formatter.get(t), function (e) {
                var t = function t(e) {
                  return e.length > 1 && "%" === e.charAt(0);
                };

                return V(["styles", "attributes"], function (n) {
                  return we(e, n).exists(function (e) {
                    var n = p(e) ? e : Ce(e);
                    return V(n, t);
                  });
                });
              });
            }(e, o);

            return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n;
          }, []);
        }(e, n, c);

        if (K(u, function (t) {
          return !function (e, t, n) {
            var o = ["inline", "block", "selector", "attributes", "styles", "classes"],
                a = function a(e) {
              return ve(e, function (e, t) {
                return V(o, function (e) {
                  return e === t;
                });
              });
            };

            return V(e.formatter.get(t), function (t) {
              var o = a(t);
              return V(e.formatter.get(n), function (e) {
                var t = a(e);
                return function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : s;
                  return r(n).eq(e, t);
                }(o, t);
              });
            });
          }(e, t, o);
        }).length > 0) {
          var _e59 = n.cloneNode(!1);

          return d.add(t, _e59), l.remove(o, a, _e59, i), d.remove(_e59), M.some(_e59);
        }

        return M.none();
      }(e, _d6, c, t, n, o),
          _f4 = Sh(u.concat(_m3.toArray()), _d6);

      wh(e, _l6, !1), i.setCursorLocation(_f4, 1), a.isEmpty(c) && a.remove(c);
    }
  },
      Eh = function Eh(e, t) {
    var n = e.schema.getTextInlineElements();
    return xe(n, Mt(t)) && !Tc(t.dom) && !So(t.dom);
  },
      Nh = {},
      Rh = Re,
      Ah = Ee;

  Nh.pre || (Nh.pre = []), Nh.pre.push(function (e) {
    var t = e.selection.getRng();
    var n;

    var o = function o(e) {
      return r(e.previousSibling) && -1 !== Ae(n, e.previousSibling);
    },
        r = wo(["pre"]);

    t.collapsed || (n = e.selection.getSelectedBlocks(), Ah(Rh(Rh(n, r), o), function (e) {
      (function (e, t) {
        var n = fn(t),
            o = wn(n).dom;
        no(n), eo(fn(e), [un("br", o), un("br", o)].concat(_toConsumableArray(Rn(n))));
      })(e.previousSibling, e);
    }));
  });

  var Oh = Bt.each,
      Th = function Th(e) {
    return Co(e) && !$c(e) && !Tc(e) && !So(e);
  },
      Bh = function Bh(e, t) {
    for (var _n55 = e; _n55; _n55 = _n55[t]) {
      if (Ro(_n55) && We(_n55.data)) return e;
      if (Co(_n55) && !$c(_n55)) return _n55;
    }

    return e;
  },
      Dh = function Dh(e, t, n) {
    var o = Kf(e);

    if (t && n && (t = Bh(t, "previousSibling"), n = Bh(n, "nextSibling"), o.compare(t, n))) {
      for (var _e60 = t.nextSibling; _e60 && _e60 !== n;) {
        var _n56 = _e60;
        _e60 = _e60.nextSibling, t.appendChild(_n56);
      }

      return e.remove(n), Bt.each(Bt.grep(n.childNodes), function (e) {
        t.appendChild(e);
      }), t;
    }

    return n;
  },
      Ph = function Ph(e, t, n, o) {
    if (o && !1 !== t.merge_siblings) {
      var _t60 = Dh(e, ou(o), o);

      Dh(e, _t60, ou(_t60, !0));
    }
  },
      Lh = function Lh(e, t, n) {
    Oh(e.childNodes, function (e) {
      Th(e) && (t(e) && n(e), e.hasChildNodes() && Lh(e, t, n));
    });
  },
      Mh = function Mh(e, t) {
    return function (n) {
      return !(!n || !cu(e, n, t));
    };
  },
      Ih = function Ih(e, t, n) {
    return function (o) {
      e.setStyle(o, t, n), "" === o.getAttribute("style") && o.removeAttribute("style"), function (e, t) {
        "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0);
      }(e, o);
    };
  },
      Fh = Ei([{
    keep: []
  }, {
    rename: ["name"]
  }, {
    removed: []
  }]),
      Uh = /^(src|href|style)$/,
      zh = Bt.each,
      jh = lu,
      Vh = function Vh(e, t, n) {
    return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
  },
      Hh = function Hh(e, t, n) {
    var o = t[n ? "startContainer" : "endContainer"],
        r = t[n ? "startOffset" : "endOffset"];

    if (Co(o)) {
      var _e61 = o.childNodes.length - 1;

      !n && r && r--, o = o.childNodes[r > _e61 ? _e61 : r];
    }

    return Ro(o) && n && r >= o.nodeValue.length && (o = new Qo(o, e.getBody()).next() || o), Ro(o) && !n && 0 === r && (o = new Qo(o, e.getBody()).prev() || o), o;
  },
      $h = function $h(e, t) {
    var n = t ? "firstChild" : "lastChild";

    if (function (e) {
      return /^(TR|TH|TD)$/.test(e.nodeName);
    }(e) && e[n]) {
      var _t61 = e[n];
      return "TR" === e.nodeName && _t61[n] || _t61;
    }

    return e;
  },
      qh = function qh(e, t, n, o) {
    var r = e.create(n, o);
    return t.parentNode.insertBefore(r, t), r.appendChild(t), r;
  },
      Wh = function Wh(e, t, n, o, r) {
    var s = fn(t),
        a = fn(e.create(o, r)),
        i = n ? Nn(s) : En(s);
    return eo(a, i), n ? (Xn(s, a), Jn(a, s)) : (Qn(s, a), Zn(a, s)), a.dom;
  },
      Kh = function Kh(e, t, n, o, r) {
    var s;
    var a = e.dom;
    if (!mh(a, o, t) && !function (e, t) {
      return t.links && "A" === e.nodeName;
    }(o, t)) return Fh.keep();
    var i = o;

    if (pu(t) && "all" === t.remove && p(t.preserve_attributes)) {
      var _e62 = K(a.getAttribs(i), function (e) {
        return j(t.preserve_attributes, e.name.toLowerCase());
      });

      if (a.removeAllAttribs(i), $(_e62, function (e) {
        return a.setAttrib(i, e.name, e.value);
      }), _e62.length > 0) return Fh.rename("span");
    }

    if ("all" !== t.remove) {
      zh(t.styles, function (e, o) {
        e = du(iu(e, n), o + ""), x(o) && (o = e, r = null), (t.remove_similar || !r || jh(cu(a, r, o), e)) && a.setStyle(i, o, ""), s = !0;
      }), s && "" === a.getAttrib(i, "style") && (i.removeAttribute("style"), i.removeAttribute("data-mce-style")), zh(t.attributes, function (e, o) {
        var s;

        if (e = iu(e, n), x(o) && (o = e, r = null), t.remove_similar || !r || jh(a.getAttrib(r, o), e)) {
          if ("class" === o && (e = a.getAttrib(i, o)) && (s = "", $(e.split(/\s+/), function (e) {
            /mce\-\w+/.test(e) && (s += (s ? " " : "") + e);
          }), s)) return void a.setAttrib(i, o, s);
          if (Uh.test(o) && i.removeAttribute("data-mce-" + o), "style" === o && wo(["li"])(i) && "none" === a.getStyle(i, "list-style-type")) return i.removeAttribute(o), void a.setStyle(i, "list-style-type", "none");
          "class" === o && i.removeAttribute("className"), i.removeAttribute(o);
        }
      }), zh(t.classes, function (e) {
        e = iu(e, n), r && !a.hasClass(r, e) || a.removeClass(i, e);
      });

      var _e63 = a.getAttribs(i);

      for (var _t62 = 0; _t62 < _e63.length; _t62++) {
        var _n57 = _e63[_t62].nodeName;
        if (0 !== _n57.indexOf("_") && 0 !== _n57.indexOf("data-")) return Fh.keep();
      }
    }

    return "none" !== t.remove ? (function (e, t, n) {
      var o = t.parentNode;
      var r;
      var s = e.dom,
          a = Ki(e);
      fu(n) && o === s.getRoot() && (n.list_block && jh(t, n.list_block) || $(de(t.childNodes), function (t) {
        su(e, a, t.nodeName.toLowerCase()) ? r ? r.appendChild(t) : (r = qh(s, t, a), s.setAttribs(r, Gi(e))) : r = null;
      })), function (e) {
        return gu(e) && pu(e) && Dt(we(e, "mixed"), !0);
      }(n) && !jh(n.inline, t) || s.remove(t, !0);
    }(e, i, t), Fh.removed()) : Fh.keep();
  },
      Gh = function Gh(e, t, n, o, r) {
    return Kh(e, t, n, o, r).fold(P, function (t) {
      return e.dom.rename(o, t), !0;
    }, L);
  },
      Yh = function Yh(e, t, n, o) {
    return Kh(e, t, n, o, o).fold(N(o), function (t) {
      return e.dom.createFragment().appendChild(o), e.dom.rename(o, t);
    }, N(null));
  },
      Xh = function Xh(e, t, n, o, r) {
    var s = e.formatter.get(t),
        a = s[0];
    var i = !0;

    var l = e.dom,
        d = e.selection,
        c = function c(o) {
      var i = function (e, t, n, o, r) {
        var s;
        return $(mu(e.dom, t.parentNode).reverse(), function (t) {
          if (!s && "_start" !== t.id && "_end" !== t.id) {
            var _a12 = gh(e, t, n, o, r);

            _a12 && !1 !== _a12.split && (s = t);
          }
        }), s;
      }(e, o, t, n, r);

      return function (e, t, n, o, r, s, a, i) {
        var l, d, c;
        var u = e.dom;

        if (n) {
          var _s21 = n.parentNode;

          for (var _n58 = o.parentNode; _n58 && _n58 !== _s21; _n58 = _n58.parentNode) {
            l = u.clone(_n58, !1);

            for (var _n59 = 0; _n59 < t.length && (l = Yh(e, t[_n59], i, l), null !== l); _n59++) {
              ;
            }

            l && (d && l.appendChild(d), c || (c = l), d = l);
          }

          a.mixed && u.isBlock(n) || (o = u.split(n, o)), d && (r.parentNode.insertBefore(d, r), c.appendChild(r), pu(a) && Ph(u, a, 0, d));
        }

        return o;
      }(e, s, i, o, o, 0, a, n);
    },
        u = function u(t) {
      return V(s, function (o) {
        return Gh(e, o, n, t, t);
      });
    },
        m = function m(t) {
      var n = !0,
          o = !1;
      Co(t) && l.getContentEditable(t) && (n = i, i = "true" === l.getContentEditable(t), o = !0);
      var r = de(t.childNodes);

      if (i && !o) {
        var _e64 = u(t) || V(s, function (e) {
          return mh(l, t, e);
        }),
            _n60 = t.parentNode;

        !_e64 && C(_n60) && hu(a) && u(_n60);
      }

      if (a.deep && r.length) {
        for (var _e65 = 0; _e65 < r.length; _e65++) {
          m(r[_e65]);
        }

        o && (i = n);
      }

      $(["underline", "line-through", "overline"], function (n) {
        Co(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && uu(l, t.parentNode) === n && Gh(e, {
          deep: !1,
          exact: !0,
          inline: "span",
          styles: {
            textDecoration: n
          }
        }, null, t);
      });
    },
        f = function f(e) {
      var t = l.get(e ? "_start" : "_end");
      var n = t[e ? "firstChild" : "lastChild"];
      return function (e) {
        return $c(e) && Co(e) && ("_start" === e.id || "_end" === e.id);
      }(n) && (n = n[e ? "firstChild" : "lastChild"]), Ro(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), l.remove(t, !0), n;
    },
        g = function g(t) {
      var n,
          o,
          r = Tu(e, t, s, t.collapsed);

      if (a.split) {
        if (r = Mm(r), n = Hh(e, r, !0), o = Hh(e, r), n !== o) {
          if (n = $h(n, !0), o = $h(o, !1), Vh(l, n, o)) {
            var _e67 = M.from(n.firstChild).getOr(n);

            return c(Wh(l, _e67, !0, "span", {
              id: "_start",
              "data-mce-type": "bookmark"
            })), void f(!0);
          }

          if (Vh(l, o, n)) {
            var _e68 = M.from(o.lastChild).getOr(o);

            return c(Wh(l, _e68, !1, "span", {
              id: "_end",
              "data-mce-type": "bookmark"
            })), void f(!1);
          }

          n = qh(l, n, "span", {
            id: "_start",
            "data-mce-type": "bookmark"
          }), o = qh(l, o, "span", {
            id: "_end",
            "data-mce-type": "bookmark"
          });

          var _e66 = l.createRng();

          _e66.setStartAfter(n), _e66.setEndBefore(o), Bu(l, _e66, function (e) {
            $(e, function (e) {
              $c(e) || $c(e.parentNode) || c(e);
            });
          }), c(n), c(o), n = f(!0), o = f();
        } else n = o = c(n);

        r.startContainer = n.parentNode ? n.parentNode : n, r.startOffset = l.nodeIndex(n), r.endContainer = o.parentNode ? o.parentNode : o, r.endOffset = l.nodeIndex(o) + 1;
      }

      Bu(l, r, function (e) {
        $(e, m);
      });
    };

    if (o) {
      if (tu(o)) {
        var _e69 = l.createRng();

        _e69.setStartBefore(o), _e69.setEndAfter(o), g(_e69);
      } else g(o);

      Zu(e, t, o, n);
    } else if ("false" !== l.getContentEditable(d.getNode())) d.isCollapsed() && pu(a) && !Lu(e).length ? _h(e, t, n, r) : (Hu(d, !0, function () {
      Vu(e, g);
    }), pu(a) && ph(e, t, n, d.getStart()) && nu(l, d, d.getRng()), e.nodeChanged()), Zu(e, t, o, n);else {
      o = d.getNode();

      for (var _t63 = 0; _t63 < s.length && (!s[_t63].ceFalseOverride || !Gh(e, s[_t63], n, o, o)); _t63++) {
        ;
      }

      Zu(e, t, o, n);
    }
  },
      Qh = Bt.each,
      Jh = Bt.each,
      Zh = function Zh(e) {
    return Co(e) && !$c(e) && !Tc(e) && !So(e);
  },
      eb = function eb(e, t, n, o) {
    var r = e.formatter.get(t),
        s = r[0],
        a = !o && e.selection.isCollapsed(),
        i = e.dom,
        l = e.selection,
        d = function d(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s;

      if (w(t.onformat) && t.onformat(e, t, n, o), Jh(t.styles, function (t, o) {
        i.setStyle(e, o, iu(t, n));
      }), t.styles) {
        var _t64 = i.getAttrib(e, "style");

        _t64 && i.setAttrib(e, "data-mce-style", _t64);
      }

      Jh(t.attributes, function (t, o) {
        i.setAttrib(e, o, iu(t, n));
      }), Jh(t.classes, function (t) {
        t = iu(t, n), i.hasClass(e, t) || i.addClass(e, t);
      });
    },
        c = function c(e, t) {
      var n = !1;
      return Jh(e, function (e) {
        return !!gu(e) && (C(e.collapsed) && e.collapsed !== a ? void 0 : i.is(t, e.selector) && !Tc(t) ? (d(t, e), n = !0, !1) : void 0);
      }), n;
    },
        u = function u(e) {
      if (m(e)) {
        var _t65 = i.create(e);

        return d(_t65), _t65;
      }

      return null;
    },
        f = function f(o, a, i) {
      var l = [];
      var m = !0;
      var f = s.inline || s.block,
          g = u(f);
      Bu(o, a, function (a) {
        var u;

        var p = function p(a) {
          var h = !1,
              b = m;
          var v = a.nodeName.toLowerCase(),
              y = a.parentNode,
              w = y.nodeName.toLowerCase();
          if (Co(a) && o.getContentEditable(a) && (b = m, m = "true" === o.getContentEditable(a), h = !0), Po(a) && !function (e, t, n, o) {
            if (Bl(e) && pu(t)) {
              var _t66 = Os(e.schema),
                  _r33 = ah(fn(n), function (e) {
                return Tc(e.dom);
              });

              return ke(_t66, o) && os(fn(n.parentNode), !1) && !_r33;
            }

            return !1;
          }(e, s, a, w)) return u = null, void (fu(s) && o.remove(a));
          if (fu(s) && s.wrapper && gh(e, a, t, n)) u = null;else {
            if (m && !h && fu(s) && !s.wrapper && ru(e, v) && su(e, w, f)) {
              var _e70 = o.rename(a, f);

              return d(_e70), l.push(_e70), void (u = null);
            }

            if (gu(s)) {
              var _e71 = c(r, a);

              if (!_e71 && C(y) && hu(s) && (_e71 = c(r, y)), !pu(s) || _e71) return void (u = null);
            }

            !m || h || !su(e, f, v) || !su(e, w, f) || !i && Ro(a) && Sr(a.data) || Tc(a) || pu(s) && o.isBlock(a) ? (u = null, $(de(a.childNodes), p), h && (m = b), u = null) : (u || (u = o.clone(g, !1), a.parentNode.insertBefore(u, a), l.push(u)), u.appendChild(a));
          }
        };

        $(a, p);
      }), !0 === s.links && $(l, function (e) {
        var t = function t(e) {
          "A" === e.nodeName && d(e, s), $(de(e.childNodes), t);
        };

        t(e);
      }), $(l, function (a) {
        var i = function (e) {
          var t = 0;
          return $(e.childNodes, function (e) {
            (function (e) {
              return C(e) && Ro(e) && 0 === e.length;
            })(e) || $c(e) || t++;
          }), t;
        }(a);

        !(l.length > 1) && o.isBlock(a) || 0 !== i ? (pu(s) || fu(s) && s.wrapper) && (s.exact || 1 !== i || (a = function (e) {
          var t = Q(e.childNodes, Zh).filter(function (e) {
            return mh(o, e, s);
          });
          return t.map(function (t) {
            var n = o.clone(t, !1);
            return d(n), o.replace(n, e, !0), o.remove(t, !0), n;
          }).getOr(e);
        }(a)), function (e, t, n, o) {
          Qh(t, function (t) {
            pu(t) && Qh(e.dom.select(t.inline, o), function (o) {
              Th(o) && Gh(e, t, n, o, t.exact ? o : null);
            }), function (e, t, n) {
              if (t.clear_child_styles) {
                var _o42 = t.links ? "*:not(a)" : "*";

                Oh(e.select(_o42, n), function (n) {
                  Th(n) && Oh(t.styles, function (t, o) {
                    e.setStyle(n, o, "");
                  });
                });
              }
            }(e.dom, t, o);
          });
        }(e, r, n, a), function (e, t, n, o, r) {
          gh(e, r.parentNode, n, o) && Gh(e, t, o, r) || t.merge_with_parents && e.dom.getParent(r.parentNode, function (s) {
            if (gh(e, s, n, o)) return Gh(e, t, o, r), !0;
          });
        }(e, s, t, n, a), function (e, t, n, o) {
          t.styles && t.styles.backgroundColor && Lh(o, Mh(e, "fontSize"), Ih(e, "backgroundColor", iu(t.styles.backgroundColor, n)));
        }(o, s, n, a), function (e, t, n, o) {
          var r = function r(t) {
            if (1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType) {
              var _n61 = uu(e, t.parentNode);

              e.getStyle(t, "color") && _n61 ? e.setStyle(t, "text-decoration", _n61) : e.getStyle(t, "text-decoration") === _n61 && e.setStyle(t, "text-decoration", null);
            }
          };

          t.styles && (t.styles.color || t.styles.textDecoration) && (Bt.walk(o, r, "childNodes"), r(o));
        }(o, s, 0, a), function (e, t, n, o) {
          !pu(t) || "sub" !== t.inline && "sup" !== t.inline || (Lh(o, Mh(e, "fontSize"), Ih(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", o), !0));
        }(o, s, 0, a), Ph(o, s, 0, a)) : o.remove(a, !0);
      });
    };

    if ("false" !== i.getContentEditable(l.getNode())) {
      if (s) {
        if (o) {
          if (tu(o)) {
            if (!c(r, o)) {
              var _t67 = i.createRng();

              _t67.setStartBefore(o), _t67.setEndAfter(o), f(i, Tu(e, _t67, r), !0);
            }
          } else f(i, o, !0);
        } else a && pu(s) && !Lu(e).length ? function (e, t, n) {
          var o, r;
          var s = e.selection,
              a = s.getRng();
          var i = a.startOffset;
          var l = a.startContainer.nodeValue;
          o = Bc(e.getBody(), s.getStart()), o && (r = yh(o));
          var d = /[^\s\u00a0\u00ad\u200b\ufeff]/;

          if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
            var _o43 = s.getBookmark();

            a.collapse(!0);

            var _r34 = Tu(e, a, e.formatter.get(t));

            _r34 = Mm(_r34), e.formatter.apply(t, n, _r34), s.moveToBookmark(_o43);
          } else o && r.nodeValue === hh || (c = e.getDoc(), u = Ch(!0).dom, o = c.importNode(u, !0), r = o.firstChild, a.insertNode(o), i = 1), e.formatter.apply(t, n, o), s.setCursorLocation(r, i);

          var c, u;
        }(e, t, n) : (l.setRng(Yp(l.getRng())), Hu(l, !0, function () {
          Vu(e, function (t, n) {
            var o = n ? t : Tu(e, t, r);
            f(i, o, !1);
          });
        }), nu(i, l, l.getRng()), e.nodeChanged());

        (function (e, t) {
          Ah(Nh[e], function (e) {
            e(t);
          });
        })(t, e);
      }

      Ju(e, t, o, n);
    } else {
      o = l.getNode();

      for (var _e72 = 0, _t68 = r.length; _e72 < _t68; _e72++) {
        var _t69 = r[_e72];

        if (_t69.ceFalseOverride && gu(_t69) && i.is(o, _t69.selector)) {
          d(o, _t69);
          break;
        }
      }

      Ju(e, t, o, n);
    }
  },
      tb = function tb(e) {
    return xe(e, "vars");
  },
      nb = function nb(e) {
    return e.selection.getStart();
  },
      ob = function ob(e, t, n, o, r) {
    return X(t, function (t) {
      var s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
      return !v(s);
    }, function (t) {
      return !!ch(e, t, n) || !o && C(e.formatter.matchNode(t, n, r, !0));
    });
  },
      rb = function rb(e, t) {
    var n = null != t ? t : nb(e);
    return K(mu(e.dom, n), function (e) {
      return Co(e) && !So(e);
    });
  },
      sb = function sb(e, t, n) {
    var o = rb(e, t);
    fe(n, function (n, r) {
      var s = function s(n) {
        var s = ob(e, o, r, n.similar, tb(n) ? n.vars : void 0),
            a = s.isSome();

        if (n.state.get() !== a) {
          n.state.set(a);

          var _e73 = s.getOr(t);

          tb(n) ? n.callback(a, {
            node: _e73,
            format: r,
            parents: o
          }) : $(n.callbacks, function (t) {
            return t(a, {
              node: _e73,
              format: r,
              parents: o
            });
          });
        }
      };

      $([n.withSimilar, n.withoutSimilar], s), $(n.withVars, s);
    });
  };

  function ab(e) {
    return ab = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, ab(e);
  }

  function ib(e, t) {
    return ib = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    }, ib(e, t);
  }

  function lb() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function db(e, t, n) {
    return db = lb() ? Reflect.construct : function (e, t, n) {
      var o = [null];
      o.push.apply(o, t);
      var r = new (Function.bind.apply(e, o))();
      return n && ib(r, n.prototype), r;
    }, db.apply(null, arguments);
  }

  function cb(e) {
    return function (e) {
      if (Array.isArray(e)) return ub(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return ub(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ub(e, t) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function ub(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, o = new Array(t); n < t; n++) {
      o[n] = e[n];
    }

    return o;
  }

  var mb = Object.hasOwnProperty,
      fb = Object.setPrototypeOf,
      gb = Object.isFrozen,
      pb = Object.getPrototypeOf,
      hb = Object.getOwnPropertyDescriptor,
      bb = Object.freeze,
      vb = Object.seal,
      yb = Object.create,
      Cb = "undefined" != typeof Reflect && Reflect,
      wb = Cb.apply,
      xb = Cb.construct;
  wb || (wb = function wb(e, t, n) {
    return e.apply(t, n);
  }), bb || (bb = function bb(e) {
    return e;
  }), vb || (vb = function vb(e) {
    return e;
  }), xb || (xb = function xb(e, t) {
    return db(e, cb(t));
  });

  var kb,
      Sb = Pb(Array.prototype.forEach),
      _b = Pb(Array.prototype.pop),
      Eb = Pb(Array.prototype.push),
      Nb = Pb(String.prototype.toLowerCase),
      Rb = Pb(String.prototype.match),
      Ab = Pb(String.prototype.replace),
      Ob = Pb(String.prototype.indexOf),
      Tb = Pb(String.prototype.trim),
      Bb = Pb(RegExp.prototype.test),
      Db = (kb = TypeError, function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }

    return xb(kb, t);
  });

  function Pb(e) {
    return function (t) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
        o[r - 1] = arguments[r];
      }

      return wb(e, t, o);
    };
  }

  function Lb(e, t) {
    fb && fb(e, null);

    for (var n = t.length; n--;) {
      var o = t[n];

      if ("string" == typeof o) {
        var r = Nb(o);
        r !== o && (gb(t) || (t[n] = r), o = r);
      }

      e[o] = !0;
    }

    return e;
  }

  function Mb(e) {
    var t,
        n = yb(null);

    for (t in e) {
      wb(mb, e, [t]) && (n[t] = e[t]);
    }

    return n;
  }

  function Ib(e, t) {
    for (; null !== e;) {
      var n = hb(e, t);

      if (n) {
        if (n.get) return Pb(n.get);
        if ("function" == typeof n.value) return Pb(n.value);
      }

      e = pb(e);
    }

    return function (e) {
      return console.warn("fallback value for", e), null;
    };
  }

  var Fb = bb(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
      Ub = bb(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
      zb = bb(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
      jb = bb(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
      Vb = bb(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
      Hb = bb(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
      $b = bb(["#text"]),
      qb = bb(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
      Wb = bb(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
      Kb = bb(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
      Gb = bb(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
      Yb = vb(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
      Xb = vb(/<%[\w\W]*|[\w\W]*%>/gm),
      Qb = vb(/^data-[\-\w.\u00B7-\uFFFF]/),
      Jb = vb(/^aria-[\-\w]+$/),
      Zb = vb(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
      ev = vb(/^(?:\w+script|data):/i),
      tv = vb(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      nv = vb(/^html$/i),
      ov = function ov() {
    return "undefined" == typeof window ? null : window;
  },
      rv = function rv(e, t) {
    if ("object" !== ab(e) || "function" != typeof e.createPolicy) return null;
    var n = null,
        o = "data-tt-policy-suffix";
    t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
    var r = "dompurify" + (n ? "#" + n : "");

    try {
      return e.createPolicy(r, {
        createHTML: function createHTML(e) {
          return e;
        }
      });
    } catch (e) {
      return console.warn("TrustedTypes policy " + r + " could not be created."), null;
    }
  },
      sv = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ov(),
        n = function n(t) {
      return e(t);
    };

    if (n.version = "2.3.8", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
    var o = t.document,
        r = t.document,
        s = t.DocumentFragment,
        a = t.HTMLTemplateElement,
        i = t.Node,
        l = t.Element,
        d = t.NodeFilter,
        c = t.NamedNodeMap,
        u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c,
        m = t.HTMLFormElement,
        f = t.DOMParser,
        g = t.trustedTypes,
        p = l.prototype,
        h = Ib(p, "cloneNode"),
        b = Ib(p, "nextSibling"),
        v = Ib(p, "childNodes"),
        y = Ib(p, "parentNode");

    if ("function" == typeof a) {
      var C = r.createElement("template");
      C.content && C.content.ownerDocument && (r = C.content.ownerDocument);
    }

    var w = rv(g, o),
        x = w ? w.createHTML("") : "",
        k = r,
        S = k.implementation,
        _ = k.createNodeIterator,
        E = k.createDocumentFragment,
        N = k.getElementsByTagName,
        R = o.importNode,
        A = {};

    try {
      A = Mb(r).documentMode ? r.documentMode : {};
    } catch (e) {}

    var O = {};
    n.isSupported = "function" == typeof y && S && void 0 !== S.createHTMLDocument && 9 !== A;

    var T,
        B,
        D = Yb,
        P = Xb,
        L = Qb,
        M = Jb,
        I = ev,
        F = tv,
        U = Zb,
        z = null,
        j = Lb({}, [].concat(cb(Fb), cb(Ub), cb(zb), cb(Vb), cb($b))),
        V = null,
        H = Lb({}, [].concat(cb(qb), cb(Wb), cb(Kb), cb(Gb))),
        $ = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    })),
        q = null,
        W = null,
        K = !0,
        G = !0,
        Y = !1,
        X = !1,
        Q = !1,
        J = !1,
        Z = !1,
        ee = !1,
        te = !1,
        ne = !1,
        oe = !0,
        re = !0,
        se = !1,
        ae = {},
        ie = null,
        le = Lb({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
        de = null,
        ce = Lb({}, ["audio", "video", "img", "source", "image", "track"]),
        ue = null,
        me = Lb({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        fe = "http://www.w3.org/1998/Math/MathML",
        ge = "http://www.w3.org/2000/svg",
        pe = "http://www.w3.org/1999/xhtml",
        he = pe,
        be = !1,
        ve = ["application/xhtml+xml", "text/html"],
        ye = "text/html",
        Ce = null,
        we = r.createElement("form"),
        xe = function xe(e) {
      return e instanceof RegExp || e instanceof Function;
    },
        ke = function ke(e) {
      Ce && Ce === e || (e && "object" === ab(e) || (e = {}), e = Mb(e), z = "ALLOWED_TAGS" in e ? Lb({}, e.ALLOWED_TAGS) : j, V = "ALLOWED_ATTR" in e ? Lb({}, e.ALLOWED_ATTR) : H, ue = "ADD_URI_SAFE_ATTR" in e ? Lb(Mb(me), e.ADD_URI_SAFE_ATTR) : me, de = "ADD_DATA_URI_TAGS" in e ? Lb(Mb(ce), e.ADD_DATA_URI_TAGS) : ce, ie = "FORBID_CONTENTS" in e ? Lb({}, e.FORBID_CONTENTS) : le, q = "FORBID_TAGS" in e ? Lb({}, e.FORBID_TAGS) : {}, W = "FORBID_ATTR" in e ? Lb({}, e.FORBID_ATTR) : {}, ae = "USE_PROFILES" in e && e.USE_PROFILES, K = !1 !== e.ALLOW_ARIA_ATTR, G = !1 !== e.ALLOW_DATA_ATTR, Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1, X = e.SAFE_FOR_TEMPLATES || !1, Q = e.WHOLE_DOCUMENT || !1, ee = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, ne = e.RETURN_TRUSTED_TYPE || !1, Z = e.FORCE_BODY || !1, oe = !1 !== e.SANITIZE_DOM, re = !1 !== e.KEEP_CONTENT, se = e.IN_PLACE || !1, U = e.ALLOWED_URI_REGEXP || U, he = e.NAMESPACE || pe, e.CUSTOM_ELEMENT_HANDLING && xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && ($.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), T = T = -1 === ve.indexOf(e.PARSER_MEDIA_TYPE) ? ye : e.PARSER_MEDIA_TYPE, B = "application/xhtml+xml" === T ? function (e) {
        return e;
      } : Nb, X && (G = !1), te && (ee = !0), ae && (z = Lb({}, cb($b)), V = [], !0 === ae.html && (Lb(z, Fb), Lb(V, qb)), !0 === ae.svg && (Lb(z, Ub), Lb(V, Wb), Lb(V, Gb)), !0 === ae.svgFilters && (Lb(z, zb), Lb(V, Wb), Lb(V, Gb)), !0 === ae.mathMl && (Lb(z, Vb), Lb(V, Kb), Lb(V, Gb))), e.ADD_TAGS && (z === j && (z = Mb(z)), Lb(z, e.ADD_TAGS)), e.ADD_ATTR && (V === H && (V = Mb(V)), Lb(V, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && Lb(ue, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (ie === le && (ie = Mb(ie)), Lb(ie, e.FORBID_CONTENTS)), re && (z["#text"] = !0), Q && Lb(z, ["html", "head", "body"]), z.table && (Lb(z, ["tbody"]), delete q.tbody), bb && bb(e), Ce = e);
    },
        Se = Lb({}, ["mi", "mo", "mn", "ms", "mtext"]),
        _e = Lb({}, ["foreignobject", "desc", "title", "annotation-xml"]),
        Ee = Lb({}, ["title", "style", "font", "a", "script"]),
        Ne = Lb({}, Ub);

    Lb(Ne, zb), Lb(Ne, jb);
    var Re = Lb({}, Vb);
    Lb(Re, Hb);

    var Ae = function Ae(e) {
      var t = y(e);
      t && t.tagName || (t = {
        namespaceURI: pe,
        tagName: "template"
      });
      var n = Nb(e.tagName),
          o = Nb(t.tagName);
      return e.namespaceURI === ge ? t.namespaceURI === pe ? "svg" === n : t.namespaceURI === fe ? "svg" === n && ("annotation-xml" === o || Se[o]) : Boolean(Ne[n]) : e.namespaceURI === fe ? t.namespaceURI === pe ? "math" === n : t.namespaceURI === ge ? "math" === n && _e[o] : Boolean(Re[n]) : e.namespaceURI === pe && !(t.namespaceURI === ge && !_e[o]) && !(t.namespaceURI === fe && !Se[o]) && !Re[n] && (Ee[n] || !Ne[n]);
    },
        Oe = function Oe(e) {
      Eb(n.removed, {
        element: e
      });

      try {
        e.parentNode.removeChild(e);
      } catch (t) {
        try {
          e.outerHTML = x;
        } catch (t) {
          e.remove();
        }
      }
    },
        Te = function Te(e, t) {
      try {
        Eb(n.removed, {
          attribute: t.getAttributeNode(e),
          from: t
        });
      } catch (e) {
        Eb(n.removed, {
          attribute: null,
          from: t
        });
      }

      if (t.removeAttribute(e), "is" === e && !V[e]) if (ee || te) try {
        Oe(t);
      } catch (e) {} else try {
        t.setAttribute(e, "");
      } catch (e) {}
    },
        Be = function Be(e) {
      var t, n;
      if (Z) e = "<remove></remove>" + e;else {
        var o = Rb(e, /^[\r\n\t ]+/);
        n = o && o[0];
      }
      "application/xhtml+xml" === T && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
      var s = w ? w.createHTML(e) : e;
      if (he === pe) try {
        t = new f().parseFromString(s, T);
      } catch (e) {}

      if (!t || !t.documentElement) {
        t = S.createDocument(he, "template", null);

        try {
          t.documentElement.innerHTML = be ? "" : s;
        } catch (e) {}
      }

      var a = t.body || t.documentElement;
      return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), he === pe ? N.call(t, Q ? "html" : "body")[0] : Q ? t.documentElement : a;
    },
        De = function De(e) {
      return _.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1);
    },
        Pe = function Pe(e) {
      return e instanceof m && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof u) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore);
    },
        Le = function Le(e) {
      return "object" === ab(i) ? e instanceof i : e && "object" === ab(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
    },
        Me = function Me(e, t, o) {
      O[e] && Sb(O[e], function (e) {
        e.call(n, t, o, Ce);
      });
    },
        Ie = function Ie(e) {
      var t;
      if (Me("beforeSanitizeElements", e, null), Pe(e)) return Oe(e), !0;
      if (Bb(/[\u0080-\uFFFF]/, e.nodeName)) return Oe(e), !0;
      var o = B(e.nodeName);
      if (Me("uponSanitizeElement", e, {
        tagName: o,
        allowedTags: z
      }), e.hasChildNodes() && !Le(e.firstElementChild) && (!Le(e.content) || !Le(e.content.firstElementChild)) && Bb(/<[/\w]/g, e.innerHTML) && Bb(/<[/\w]/g, e.textContent)) return Oe(e), !0;
      if ("select" === o && Bb(/<template/i, e.innerHTML)) return Oe(e), !0;

      if (!z[o] || q[o]) {
        if (!q[o] && Ue(o)) {
          if ($.tagNameCheck instanceof RegExp && Bb($.tagNameCheck, o)) return !1;
          if ($.tagNameCheck instanceof Function && $.tagNameCheck(o)) return !1;
        }

        if (re && !ie[o]) {
          var r = y(e) || e.parentNode,
              s = v(e) || e.childNodes;
          if (s && r) for (var a = s.length - 1; a >= 0; --a) {
            r.insertBefore(h(s[a], !0), b(e));
          }
        }

        return Oe(e), !0;
      }

      return e instanceof l && !Ae(e) ? (Oe(e), !0) : "noscript" !== o && "noembed" !== o || !Bb(/<\/no(script|embed)/i, e.innerHTML) ? (X && 3 === e.nodeType && (t = e.textContent, t = Ab(t, D, " "), t = Ab(t, P, " "), e.textContent !== t && (Eb(n.removed, {
        element: e.cloneNode()
      }), e.textContent = t)), Me("afterSanitizeElements", e, null), !1) : (Oe(e), !0);
    },
        Fe = function Fe(e, t, n) {
      if (oe && ("id" === t || "name" === t) && (n in r || n in we)) return !1;
      if (G && !W[t] && Bb(L, t)) ;else if (K && Bb(M, t)) ;else if (!V[t] || W[t]) {
        if (!(Ue(e) && ($.tagNameCheck instanceof RegExp && Bb($.tagNameCheck, e) || $.tagNameCheck instanceof Function && $.tagNameCheck(e)) && ($.attributeNameCheck instanceof RegExp && Bb($.attributeNameCheck, t) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(t)) || "is" === t && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && Bb($.tagNameCheck, n) || $.tagNameCheck instanceof Function && $.tagNameCheck(n)))) return !1;
      } else if (ue[t]) ;else if (Bb(U, Ab(n, F, ""))) ;else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== Ob(n, "data:") || !de[e]) if (Y && !Bb(I, Ab(n, F, ""))) ;else if (n) return !1;
      return !0;
    },
        Ue = function Ue(e) {
      return e.indexOf("-") > 0;
    },
        ze = function ze(e) {
      var t, n, o, r;
      Me("beforeSanitizeAttributes", e, null);
      var s = e.attributes;

      if (s) {
        var a = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: V
        };

        for (r = s.length; r--;) {
          var i = t = s[r],
              l = i.name,
              d = i.namespaceURI;
          n = "value" === l ? t.value : Tb(t.value), o = B(l);
          var c = n;
          if (a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, Me("uponSanitizeAttribute", e, a), n = a.attrValue, !a.forceKeepAttr) if (a.keepAttr) {
            if (Bb(/\/>/i, n)) Te(l, e);else {
              X && (n = Ab(n, D, " "), n = Ab(n, P, " "));
              var u = B(e.nodeName);

              if (Fe(u, o, n)) {
                if (n !== c) try {
                  d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n);
                } catch (t) {
                  Te(l, e);
                }
              } else Te(l, e);
            }
          } else Te(l, e);
        }

        Me("afterSanitizeAttributes", e, null);
      }
    },
        je = function e(t) {
      var n,
          o = De(t);

      for (Me("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) {
        Me("uponSanitizeShadowNode", n, null), Ie(n) || (n.content instanceof s && e(n.content), ze(n));
      }

      Me("afterSanitizeShadowDOM", t, null);
    };

    return n.sanitize = function (e, r) {
      var a, l, d, c, u;

      if ((be = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Le(e)) {
        if ("function" != typeof e.toString) throw Db("toString is not a function");
        if ("string" != typeof (e = e.toString())) throw Db("dirty is not a string, aborting");
      }

      if (!n.isSupported) {
        if ("object" === ab(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
          if ("string" == typeof e) return t.toStaticHTML(e);
          if (Le(e)) return t.toStaticHTML(e.outerHTML);
        }

        return e;
      }

      if (J || ke(r), n.removed = [], "string" == typeof e && (se = !1), se) {
        if (e.nodeName) {
          var m = B(e.nodeName);
          if (!z[m] || q[m]) throw Db("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (e instanceof i) 1 === (l = (a = Be("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? a = l : a.appendChild(l);else {
        if (!ee && !X && !Q && -1 === e.indexOf("<")) return w && ne ? w.createHTML(e) : e;
        if (!(a = Be(e))) return ee ? null : ne ? x : "";
      }

      a && Z && Oe(a.firstChild);

      for (var f = De(se ? e : a); d = f.nextNode();) {
        3 === d.nodeType && d === c || Ie(d) || (d.content instanceof s && je(d.content), ze(d), c = d);
      }

      if (c = null, se) return e;

      if (ee) {
        if (te) for (u = E.call(a.ownerDocument); a.firstChild;) {
          u.appendChild(a.firstChild);
        } else u = a;
        return V.shadowroot && (u = R.call(o, u, !0)), u;
      }

      var g = Q ? a.outerHTML : a.innerHTML;
      return Q && z["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && Bb(nv, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g), X && (g = Ab(g, D, " "), g = Ab(g, P, " ")), w && ne ? w.createHTML(g) : g;
    }, n.setConfig = function (e) {
      ke(e), J = !0;
    }, n.clearConfig = function () {
      Ce = null, J = !1;
    }, n.isValidAttribute = function (e, t, n) {
      Ce || ke({});
      var o = B(e),
          r = B(t);
      return Fe(o, r, n);
    }, n.addHook = function (e, t) {
      "function" == typeof t && (O[e] = O[e] || [], Eb(O[e], t));
    }, n.removeHook = function (e) {
      if (O[e]) return _b(O[e]);
    }, n.removeHooks = function (e) {
      O[e] && (O[e] = []);
    }, n.removeAllHooks = function () {
      O = {};
    }, n;
  }();

  var av = Bt.explode,
      iv = function iv() {
    var e = {};
    return {
      addFilter: function addFilter(t, n) {
        $(av(t), function (t) {
          xe(e, t) || (e[t] = {
            name: t,
            callbacks: []
          }), e[t].callbacks.push(n);
        });
      },
      getFilters: function getFilters() {
        return Ce(e);
      },
      removeFilter: function removeFilter(t, n) {
        $(av(t), function (t) {
          if (xe(e, t)) if (C(n)) {
            var _o44 = e[t],
                _r35 = K(_o44.callbacks, function (e) {
              return e !== n;
            });

            _r35.length > 0 ? _o44.callbacks = _r35 : delete e[t];
          } else delete e[t];
        });
      }
    };
  },
      lv = function lv(e, t, n) {
    var o = Ds();
    t.convert_fonts_to_spans && function (e, t, n) {
      e.addNodeFilter("font", function (e) {
        $(e, function (e) {
          var o = t.parse(e.attr("style")),
              r = e.attr("color"),
              s = e.attr("face"),
              a = e.attr("size");
          r && (o.color = r), s && (o["font-family"] = s), a && (o["font-size"] = n[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", t.serialize(o)), function (e, t) {
            $(["color", "face", "size"], function (t) {
              e.attr(t, null);
            });
          }(e);
        });
      });
    }(e, o, Bt.explode(t.font_size_legacy_values)), function (e, t, n) {
      e.addNodeFilter("strike", function (e) {
        var o = "html4" !== t.type;
        $(e, function (e) {
          if (o) e.name = "s";else {
            var _t70 = n.parse(e.attr("style"));

            _t70["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(_t70));
          }
        });
      });
    }(e, n, o);
  },
      dv = function dv(e) {
    var _e$split = e.split(","),
        _e$split2 = _toArray(_e$split),
        t = _e$split2[0],
        n = _e$split2.slice(1),
        o = n.join(","),
        r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);

    if (r) {
      var _e74 = ";base64" === r[2],
          _t71 = _e74 ? function (e) {
        var t = /([a-z0-9+\/=\s]+)/i.exec(e);
        return t ? t[1] : "";
      }(o) : decodeURIComponent(o);

      return M.some({
        type: r[1],
        data: _t71,
        base64Encoded: _e74
      });
    }

    return M.none();
  },
      cv = function cv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = t;
    if (n) try {
      o = atob(t);
    } catch (e) {
      return M.none();
    }
    var r = new Uint8Array(o.length);

    for (var _e75 = 0; _e75 < r.length; _e75++) {
      r[_e75] = o.charCodeAt(_e75);
    }

    return M.some(new Blob([r], {
      type: e
    }));
  },
      uv = function uv(e) {
    return new Promise(function (t, n) {
      var o = new FileReader();
      o.onloadend = function () {
        t(o.result);
      }, o.onerror = function () {
        n(o.error.message);
      }, o.readAsDataURL(e);
    });
  };

  var mv = 0;

  var fv = function fv(e, t, n) {
    return dv(e).bind(function (_ref10) {
      var e = _ref10.data,
          o = _ref10.type,
          r = _ref10.base64Encoded;
      if (t && !r) return M.none();
      {
        var _t72 = r ? e : btoa(e);

        return n(_t72, o);
      }
    });
  },
      gv = function gv(e, t, n) {
    var o = e.create("blobid" + mv++, t, n);
    return e.add(o), o;
  },
      pv = function pv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    return fv(t, n, function (t, n) {
      return M.from(e.getByData(t, n)).orThunk(function () {
        return cv(n, t).map(function (n) {
          return gv(e, n, t);
        });
      });
    });
  },
      hv = Bt.each,
      bv = Bt.trim,
      vv = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
      yv = {
    ftp: 21,
    http: 80,
    https: 443,
    mailto: 25
  },
      Cv = ["img", "video"],
      wv = function wv(e, t, n) {
    var o = function (e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return unescape(e);
      }
    }(t);

    return !e.allow_script_urls && (!!/((java|vb)script|mhtml):/i.test(o) || !e.allow_html_data_urls && (/^data:image\//i.test(o) ? function (e, t) {
      return C(e) ? !e : !C(t) || !j(Cv, t);
    }(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)));
  };

  var xv =
  /*#__PURE__*/
  function () {
    function xv(e, t) {
      _classCallCheck(this, xv);

      e = bv(e), this.settings = t || {};
      var n = this.settings.base_uri,
          o = this;
      if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void (o.source = e);
      var r = 0 === e.indexOf("//");

      if (0 !== e.indexOf("/") || r || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) {
        var _t73 = this.settings.base_uri ? this.settings.base_uri.path : new xv(document.location.href).directory;

        if (this.settings.base_uri && "" == this.settings.base_uri.protocol) e = "//mce_host" + o.toAbsPath(_t73, e);else {
          var _r36 = /([^#?]*)([#?]?.*)/.exec(e);

          e = (n && n.protocol || "http") + "://mce_host" + o.toAbsPath(_t73, _r36[1]) + _r36[2];
        }
      }

      e = e.replace(/@@/g, "(mce_at)");
      var s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
      hv(vv, function (e, t) {
        var n = s[t];
        n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n;
      }), n && (o.protocol || (o.protocol = n.protocol), o.userInfo || (o.userInfo = n.userInfo), o.port || "mce_host" !== o.host || (o.port = n.port), o.host && "mce_host" !== o.host || (o.host = n.host), o.source = ""), r && (o.protocol = "");
    }

    _createClass(xv, [{
      key: "setPath",
      value: function setPath(e) {
        var t = /^(.*?)\/?(\w+)?$/.exec(e);
        this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI();
      }
    }, {
      key: "toRelative",
      value: function toRelative(e) {
        var t;
        if ("./" === e) return e;
        var n = new xv(e, {
          base_uri: this
        });
        if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
        var o = this.getURI(),
            r = n.getURI();
        return o === r || "/" === o.charAt(o.length - 1) && o.substr(0, o.length - 1) === r ? o : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t);
      }
    }, {
      key: "toAbsolute",
      value: function toAbsolute(e, t) {
        var n = new xv(e, {
          base_uri: this
        });
        return n.getURI(t && this.isSameOrigin(n));
      }
    }, {
      key: "isSameOrigin",
      value: function isSameOrigin(e) {
        if (this.host == e.host && this.protocol == e.protocol) {
          if (this.port == e.port) return !0;
          var _t74 = yv[this.protocol];
          if (_t74 && (this.port || _t74) == (e.port || _t74)) return !0;
        }

        return !1;
      }
    }, {
      key: "toRelPath",
      value: function toRelPath(e, t) {
        var n,
            o,
            r = 0,
            s = "";
        var a = e.substring(0, e.lastIndexOf("/")).split("/"),
            i = t.split("/");
        if (a.length >= i.length) for (n = 0, o = a.length; n < o; n++) {
          if (n >= i.length || a[n] !== i[n]) {
            r = n + 1;
            break;
          }
        }
        if (a.length < i.length) for (n = 0, o = i.length; n < o; n++) {
          if (n >= a.length || a[n] !== i[n]) {
            r = n + 1;
            break;
          }
        }
        if (1 === r) return t;

        for (n = 0, o = a.length - (r - 1); n < o; n++) {
          s += "../";
        }

        for (n = r - 1, o = i.length; n < o; n++) {
          s += n !== r - 1 ? "/" + i[n] : i[n];
        }

        return s;
      }
    }, {
      key: "toAbsPath",
      value: function toAbsPath(e, t) {
        var n,
            o,
            r = 0,
            s = [];
        var a = /\/$/.test(t) ? "/" : "";
        var i = e.split("/");
        var l = t.split("/");

        for (hv(i, function (e) {
          e && s.push(e);
        }), i = s, n = l.length - 1, s = []; n >= 0; n--) {
          0 !== l[n].length && "." !== l[n] && (".." !== l[n] ? r > 0 ? r-- : s.push(l[n]) : r++);
        }

        return n = i.length - r, o = n <= 0 ? ne(s).join("/") : i.slice(0, n).join("/") + "/" + ne(s).join("/"), 0 !== o.indexOf("/") && (o = "/" + o), a && o.lastIndexOf("/") !== o.length - 1 && (o += a), o;
      }
    }, {
      key: "getURI",
      value: function getURI() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var t;
        return this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source;
      }
    }], [{
      key: "parseDataUri",
      value: function parseDataUri(e) {
        var t;
        var n = decodeURIComponent(e).split(","),
            o = /data:([^;]+)/.exec(n[0]);
        return o && (t = o[1]), {
          type: t,
          data: n[1]
        };
      }
    }, {
      key: "isDomSafe",
      value: function isDomSafe(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (n.allow_script_urls) return !0;
        {
          var _o45 = Cs.decode(e).replace(/[\s\u0000-\u001F]+/g, "");

          return !wv(n, _o45, t);
        }
      }
    }, {
      key: "getDocumentBaseUrl",
      value: function getDocumentBaseUrl(e) {
        var t;
        return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t;
      }
    }]);

    return xv;
  }();

  var kv = Bt.makeMap,
      Sv = Bt.extend,
      _v = {
    IN_PLACE: !0,
    ALLOW_UNKNOWN_PROTOCOLS: !0,
    ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
    ALLOWED_ATTR: []
  },
      Ev = Bt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),
      Nv = "data-mce-type",
      Rv = function Rv(e, t) {
    var n = sv(),
        o = t.getSpecialElements(),
        r = e.validate;
    var s = 0;
    return n.addHook("uponSanitizeElement", function (n, a) {
      var i, l;
      8 === n.nodeType && !e.allow_conditional_comments && /^\[if/i.test(n.nodeValue) && (n.nodeValue = " " + n.nodeValue);
      var d = a.tagName;
      if (1 !== n.nodeType || "body" === d) return;
      var c = fn(n),
          u = d.toLowerCase(),
          f = Yt(c, Nv),
          g = Kt(c, "data-mce-bogus");
      if (!f && m(g)) return void ("all" === g ? no(c) : oo(c));
      var p = t.getElementRule(u);

      if (!r || p) {
        if (a.allowedTags[d] = !0, r && !f) {
          if ($(null !== (i = p.attributesForced) && void 0 !== i ? i : [], function (e) {
            qt(c, e.name, "{$uid}" === e.value ? "mce_" + s++ : e.value);
          }), $(null !== (l = p.attributesDefault) && void 0 !== l ? l : [], function (e) {
            Yt(c, e.name) || qt(c, e.name, "{$uid}" === e.value ? "mce_" + s++ : e.value);
          }), p.attributesRequired && !V(p.attributesRequired, function (e) {
            return Yt(c, e);
          })) return void oo(c);
          if (p.removeEmptyAttrs && function (e) {
            var t = e.dom.attributes;
            return null == t || 0 === t.length;
          }(c)) return void oo(c);
          p.outputName && p.outputName !== u && function (e, t) {
            var n = function (e, t) {
              var n = un(t),
                  o = Qt(e);
              return Wt(n, o), n;
            }(e, t);

            Qn(e, n);
            var o = Rn(e);
            eo(n, o), no(e);
          }(c, p.outputName);
        }
      } else xe(o, u) ? no(c) : oo(c);
    }), n.addHook("uponSanitizeAttribute", function (n, o) {
      var s = n.tagName.toLowerCase(),
          a = o.attrName,
          i = o.attrValue;
      o.keepAttr = !r || t.isValid(s, a) || ze(a, "data-") || ze(a, "aria-"), a in Ev && wv(e, i, s) && (o.keepAttr = !1), o.keepAttr ? (o.allowedAttributes[a] = !0, a in t.getBoolAttrs() && (o.attrValue = a), e.allow_svg_data_urls && ze(i, "data:image/svg+xml") && (o.forceKeepAttr = !0)) : !n.hasAttribute(Nv) || "id" !== a && "class" !== a && "style" !== a || (o.forceKeepAttr = !0);
    }), n;
  },
      Av = function Av(e, t, n) {
    var o = e.name,
        r = o in n && "title" !== o && "textarea" !== o,
        s = t.childNodes;

    for (var _t75 = 0, _o46 = s.length; _t75 < _o46; _t75++) {
      var _o47 = s[_t75],
          _a13 = new jf(_o47.nodeName.toLowerCase(), _o47.nodeType);

      if (Co(_o47)) {
        var _e76 = _o47.attributes;

        for (var _t76 = 0, _n62 = _e76.length; _t76 < _n62; _t76++) {
          var _n63 = _e76[_t76];

          _a13.attr(_n63.name, _n63.value);
        }
      } else Ro(_o47) ? (_a13.value = _o47.data, r && (_a13.raw = !0)) : (To(_o47) || Ao(_o47) || Oo(_o47)) && (_a13.value = _o47.data);

      Av(_a13, _o47, n), e.append(_a13);
    }
  },
      Ov = function Ov() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Bs();

    var n = iv(),
        o = iv(),
        r = _objectSpread({
      validate: !0,
      root_name: "body"
    }, e),
        s = new DOMParser(),
        a = Rv(r, t),
        i = n.addFilter,
        l = n.getFilters,
        d = n.removeFilter,
        c = o.addFilter,
        u = o.getFilters,
        m = o.removeFilter,
        f = {
      schema: t,
      addAttributeFilter: c,
      getAttributeFilters: u,
      removeAttributeFilter: m,
      addNodeFilter: i,
      getNodeFilters: l,
      removeNodeFilter: d,
      parse: function parse(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var o;

        var i = r.validate,
            d = null !== (o = n.context) && void 0 !== o ? o : r.root_name,
            c = function (e, n) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "html";
          var i = "xhtml" === o ? "application/xhtml+xml" : "text/html",
              l = xe(t.getSpecialElements(), n.toLowerCase()),
              d = l ? "<".concat(n, ">").concat(e, "</").concat(n, ">") : e,
              c = "xhtml" === o ? "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>".concat(d, "</body></html>") : "<body>".concat(d, "</body>"),
              u = s.parseFromString(c, i).body;
          return a.sanitize(u, function (e, t) {
            var n = _objectSpread({}, _v);

            return n.PARSER_MEDIA_TYPE = t, e.allow_script_urls ? n.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), n;
          }(r, i)), a.removed = [], l ? u.firstChild : u;
        }(e, d, n.format),
            m = new jf(d, 11);

        Av(m, c, t.getSpecialElements());

        var _ref11 = function (e, t, n, o) {
          var r = n.validate,
              s = t.getNonEmptyElements(),
              a = t.getWhitespaceElements(),
              i = Sv(kv("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
              l = Os(t),
              d = /[ \t\r\n]+/g,
              c = /^[ \t\r\n]+/,
              u = /[ \t\r\n]+$/,
              m = function m(e) {
            for (e = e.parent; C(e);) {
              if (e.name in a) return !0;
              e = e.parent;
            }

            return !1;
          },
              f = function f(t, n) {
            var r = n ? t.prev : t.next;
            return !C(r) && t.parent.name in i && (t.parent !== e || o.isRootContent);
          };

          return [function (e) {
            if (3 === e.type && !m(e)) {
              var _t77 = e.value;
              _t77 = _t77.replace(d, " "), (function (e, t) {
                return e && (e.name in t || "br" === e.name);
              }(e.prev, i) || f(e, !0)) && (_t77 = _t77.replace(c, "")), 0 === _t77.length ? e.remove() : e.value = _t77;
            }
          }, function (e) {
            var n;

            if (1 === e.type) {
              var _n64 = t.getElementRule(e.name);

              if (r && _n64) {
                var _r37 = Wp(t, s, a, e);

                _n64.paddInEmptyBlock && _r37 && function (e) {
                  var n = e;

                  for (; C(n);) {
                    if (n.name in l) return Wp(t, s, a, n);
                    n = (_readOnlyError("n"), n.parent);
                  }

                  return !1;
                }(e) ? $p(0, o, i, e) : _n64.removeEmpty && _r37 ? i[e.name] ? e.remove() : e.unwrap() : _n64.paddEmpty && (_r37 || function (e) {
                  return qp(e, "#text") && e.firstChild.value === fr;
                }(e)) && $p(0, o, i, e);
              }
            } else if (3 === e.type && !m(e)) {
              var _t78 = e.value;
              (i[null === (n = e.next) || void 0 === n ? void 0 : n.name] || f(e, !1)) && (_t78 = _t78.replace(u, "")), 0 === _t78.length ? e.remove() : e.value = _t78;
            }
          }];
        }(m, t, r, n),
            _ref12 = _slicedToArray(_ref11, 2),
            f = _ref12[0],
            g = _ref12[1],
            p = [],
            h = i ? function (e) {
          return function (e, n) {
            var o = e.parent;
            o && t.children[e.name] && !t.isValidChild(o.name, e.name) && n.push(e);
          }(e, p);
        } : S,
            b = {
          nodes: {},
          attributes: {}
        },
            v = function v(e) {
          return jp(l(), u(), e, b);
        };

        if (function (e, t, n) {
          var o = [];

          var _loop2 = function _loop2(_n66, _r38) {
            $(t, function (e) {
              return e(_n66);
            }), y(_n66.parent) && _n66 !== e ? _n66 = _r38 : o.push(_n66);
            _n65 = _n66;
          };

          for (var _n65 = e, _r38 = _n65; C(_n65); _r38 = _n65, _n65 = _n65.walk()) {
            _loop2(_n65, _r38);
          }

          var _loop3 = function _loop3(_e77) {
            var t = o[_e77];
            $(n, function (e) {
              return e(t);
            });
          };

          for (var _e77 = o.length - 1; _e77 >= 0; _e77--) {
            _loop3(_e77);
          }
        }(m, [f, v], [g, h]), p.reverse(), i && p.length > 0) if (n.context) {
          var _W = W(p, function (e) {
            return e.parent === m;
          }),
              _e78 = _W.pass,
              _o48 = _W.fail;

          Gp(_o48, t, v), n.invalid = _e78.length > 0;
        } else Gp(p, t, v);

        var w = function (e, t) {
          var n;
          var o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block;
          return !1 === o ? "" : !0 === o ? "p" : o;
        }(r, n);

        return w && ("body" === m.name || n.isRootContent) && function (e, n) {
          var o = Sv(kv("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
              s = /^[ \t\r\n]+/,
              a = /[ \t\r\n]+$/;
          var i = e.firstChild,
              l = null;

          var d = function d(e) {
            e && (i = e.firstChild, i && 3 === i.type && (i.value = i.value.replace(s, "")), i = e.lastChild, i && 3 === i.type && (i.value = i.value.replace(a, "")));
          };

          if (t.isValidChild(e.name, n.toLowerCase())) {
            for (; i;) {
              var _t79 = i.next;
              3 === i.type || 1 === i.type && "p" !== i.name && !o[i.name] && !i.attr(Nv) ? (l || (l = new jf(n, 1), l.attr(r.forced_root_block_attrs), e.insert(l, i)), l.append(i)) : (d(l), l = null), i = _t79;
            }

            d(l);
          }
        }(m, w), n.invalid || Vp(b, n), m;
      }
    };

    return function (e, t) {
      var n = e.schema;
      t.remove_trailing_brs && e.addNodeFilter("br", function (e, t, o) {
        var r = Bt.extend({}, n.getBlockElements()),
            s = n.getNonEmptyElements(),
            a = n.getWhitespaceElements();
        r.body = 1;

        for (var _t80 = 0, _i10 = e.length; _t80 < _i10; _t80++) {
          var _i11 = e[_t80],
              _l7 = _i11.parent;

          if (r[_i11.parent.name] && _i11 === _l7.lastChild) {
            var _e79 = _i11.prev;

            for (; _e79;) {
              var _t81 = _e79.name;

              if ("span" !== _t81 || "bookmark" !== _e79.attr("data-mce-type")) {
                "br" === _t81 && (_i11 = null);
                break;
              }

              _e79 = _e79.prev;
            }

            if (_i11 && (_i11.remove(), Wp(n, s, a, _l7))) {
              var _e80 = n.getElementRule(_l7.name);

              _e80 && (_e80.removeEmpty ? _l7.remove() : _e80.paddEmpty && $p(0, o, r, _l7));
            }
          } else {
            var _e81 = _i11;

            for (; _l7 && _l7.firstChild === _e81 && _l7.lastChild === _e81 && (_e81 = _l7, !r[_l7.name]);) {
              _l7 = _l7.parent;
            }

            if (_e81 === _l7) {
              var _e82 = new jf("#text", 3);

              _e82.value = fr, _i11.replace(_e82);
            }
          }
        }
      }), e.addAttributeFilter("href", function (e) {
        var n = e.length;

        var o = function o(e) {
          var t = e ? Bt.trim(e) : "";
          return /\b(noopener)\b/g.test(t) ? t : function (e) {
            return e.split(" ").filter(function (e) {
              return e.length > 0;
            }).concat(["noopener"]).sort().join(" ");
          }(t);
        };

        if (!t.allow_unsafe_link_target) for (; n--;) {
          var _t82 = e[n];
          "a" === _t82.name && "_blank" === _t82.attr("target") && _t82.attr("rel", o(_t82.attr("rel")));
        }
      }), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function (e) {
        var t,
            n,
            o,
            r,
            s = e.length;

        for (; s--;) {
          if (r = e[s], "a" === r.name && r.firstChild && !r.attr("href")) {
            o = r.parent, t = r.lastChild;

            do {
              n = t.prev, o.insert(t, r), t = n;
            } while (t);
          }
        }
      }), t.fix_list_elements && e.addNodeFilter("ul,ol", function (e) {
        var t,
            n,
            o = e.length;

        for (; o--;) {
          if (t = e[o], n = t.parent, "ul" === n.name || "ol" === n.name) if (t.prev && "li" === t.prev.name) t.prev.append(t);else {
            var _e83 = new jf("li", 1);

            _e83.attr("style", "list-style-type: none"), t.wrap(_e83);
          }
        }
      }), t.validate && n.getValidClasses() && e.addAttributeFilter("class", function (e) {
        var t = n.getValidClasses();
        var o = e.length;

        for (; o--;) {
          var _n67 = e[o],
              _r39 = _n67.attr("class").split(" ");

          var _s22 = "";

          for (var _e84 = 0; _e84 < _r39.length; _e84++) {
            var _o49 = _r39[_e84];

            var _a14 = !1,
                _i12 = t["*"];

            _i12 && _i12[_o49] && (_a14 = !0), _i12 = t[_n67.name], !_a14 && _i12 && _i12[_o49] && (_a14 = !0), _a14 && (_s22 && (_s22 += " "), _s22 += _o49);
          }

          _s22.length || (_s22 = null), _n67.attr("class", _s22);
        }
      }), function (e, t) {
        var n = t.blob_cache,
            o = function o(e) {
          var t = e.attr("src");
          (function (e) {
            return e.attr("src") === Nt.transparentSrc || C(e.attr("data-mce-placeholder"));
          })(e) || function (e) {
            return C(e.attr("data-mce-bogus"));
          }(e) || pv(n, t, !0).each(function (t) {
            e.attr("src", t.blobUri());
          });
        };

        n && e.addAttributeFilter("src", function (e) {
          return $(e, o);
        });
      }(e, t);
    }(f, r), function (e, t, n) {
      t.inline_styles && lv(e, t, n);
    }(f, r, t), f;
  },
      Tv = function Tv(e, t) {
    var n = function (e) {
      return rh(e) ? Xf({
        validate: !1
      }).serialize(e) : e;
    }(e),
        o = t(n);

    if (o.isDefaultPrevented()) return o;

    if (rh(e)) {
      if (o.content !== n) {
        var _t83 = Ov({
          validate: !1,
          forced_root_block: !1
        }).parse(o.content, {
          context: e.name
        });

        return _objectSpread({}, o, {
          content: _t83
        });
      }

      return _objectSpread({}, o, {
        content: e
      });
    }

    return o;
  },
      Bv = function Bv(e, t) {
    if (t.no_events) return _i.value(t);
    {
      var _n68 = function (e, t) {
        return e.dispatch("BeforeGetContent", t);
      }(e, t);

      return _n68.isDefaultPrevented() ? _i.error(tm(e, _objectSpread({
        content: ""
      }, _n68)).content) : _i.value(_n68);
    }
  },
      Dv = function Dv(e, t, n) {
    return n.no_events ? t : Tv(t, function (t) {
      return tm(e, _objectSpread({}, n, {
        content: t
      }));
    }).content;
  },
      Pv = function Pv(e, t) {
    if (t.no_events) return _i.value(t);
    {
      var _n69 = Tv(t.content, function (n) {
        return function (e, t) {
          return e.dispatch("BeforeSetContent", t);
        }(e, _objectSpread({}, t, {
          content: n
        }));
      });

      return _n69.isDefaultPrevented() ? (em(e, _n69), _i.error(void 0)) : _i.value(_n69);
    }
  },
      Lv = function Lv(e, t, n) {
    n.no_events || em(e, _objectSpread({}, n, {
      content: t
    }));
  },
      Mv = function Mv(e, t, n) {
    return {
      element: e,
      width: t,
      rows: n
    };
  },
      Iv = function Iv(e, t) {
    return {
      element: e,
      cells: t
    };
  },
      Fv = function Fv(e, t) {
    return {
      x: e,
      y: t
    };
  },
      Uv = function Uv(e, t) {
    var n = parseInt(Kt(e, t), 10);
    return isNaN(n) ? 1 : n;
  },
      zv = function zv(e, t, n) {
    var o = e.rows;
    return !!(o[n] ? o[n].cells : [])[t];
  },
      jv = function jv(e) {
    return Y(e, function (e, t) {
      return t.cells.length > e ? t.cells.length : e;
    }, 0);
  },
      Vv = function Vv(e, t) {
    var n = e.rows;

    for (var _e85 = 0; _e85 < n.length; _e85++) {
      var _o50 = n[_e85].cells;

      for (var _n70 = 0; _n70 < _o50.length; _n70++) {
        if (vn(_o50[_n70], t)) return M.some(Fv(_n70, _e85));
      }
    }

    return M.none();
  },
      Hv = function Hv(e, t, n, o, r) {
    var s = [],
        a = e.rows;

    for (var _e86 = n; _e86 <= r; _e86++) {
      var _n71 = a[_e86].cells,
          _r40 = t < o ? _n71.slice(t, o + 1) : _n71.slice(o, t + 1);

      s.push(Iv(a[_e86].element, _r40));
    }

    return s;
  },
      $v = function $v(e) {
    return function (e, t) {
      var n = ka(e.element),
          o = un("tbody");
      return eo(o, t), Zn(n, o), n;
    }(e, function (e) {
      return H(e.rows, function (e) {
        var t = H(e.cells, function (e) {
          var t = Sa(e);
          return Xt(t, "colspan"), Xt(t, "rowspan"), t;
        }),
            n = ka(e.element);
        return eo(n, t), n;
      });
    }(e));
  },
      qv = function qv(e, t) {
    var n = fn(t.commonAncestorContainer),
        o = bg(n, e),
        r = K(o, cr),
        s = function (e, t) {
      return Q(e, function (e) {
        return "li" === Mt(e) && Uu(e, t);
      }).fold(N([]), function (t) {
        return function (e) {
          return Q(e, function (e) {
            return "ul" === Mt(e) || "ol" === Mt(e);
          });
        }(e).map(function (e) {
          var t = un(Mt(e)),
              n = ve(Gn(e), function (e, t) {
            return ze(t, "list-style");
          });
          return $n(t, n), [un("li"), t];
        }).getOr([]);
      });
    }(o, t),
        a = r.concat(s.length ? s : function (e) {
      return sr(e) ? kn(e).filter(rr).fold(N([]), function (t) {
        return [e, t];
      }) : rr(e) ? [e] : [];
    }(n));

    return H(a, ka);
  },
      Wv = function Wv() {
    return xm([]);
  },
      Kv = function Kv(e, t) {
    return function (e, t) {
      return Wo(t, "table", O(vn, e));
    }(e, t[0]).bind(function (e) {
      var n = t[0],
          o = t[t.length - 1],
          r = function (e) {
        var t = Mv(ka(e), 0, []);
        return $(hr(e, "tr"), function (e, n) {
          $(hr(e, "td,th"), function (o, r) {
            (function (e, t, n, o, r) {
              var s = Uv(r, "rowspan"),
                  a = Uv(r, "colspan"),
                  i = e.rows;

              for (var _e87 = n; _e87 < n + s; _e87++) {
                i[_e87] || (i[_e87] = Iv(Sa(o), []));

                for (var _o51 = t; _o51 < t + a; _o51++) {
                  i[_e87].cells[_o51] = _e87 === n && _o51 === t ? r : ka(r);
                }
              }
            })(t, function (e, t, n) {
              for (; zv(e, t, n);) {
                t++;
              }

              return t;
            }(t, r, n), n, e, o);
          });
        }), Mv(t.element, jv(t.rows), t.rows);
      }(e);

      return function (e, t, n) {
        return Vv(e, t).bind(function (t) {
          return Vv(e, n).map(function (n) {
            return function (e, t, n) {
              var o = t.x,
                  r = t.y,
                  s = n.x,
                  a = n.y,
                  i = r < a ? Hv(e, o, r, s, a) : Hv(e, o, a, s, r);
              return Mv(e.element, jv(i), i);
            }(e, t, n);
          });
        });
      }(r, n, o).map(function (e) {
        return xm([$v(e)]);
      });
    }).getOrThunk(Wv);
  },
      Gv = function Gv(e, t) {
    var n = Pu(t, e);
    return n.length > 0 ? Kv(e, n) : function (e, t) {
      return t.length > 0 && t[0].collapsed ? Wv() : function (e, t) {
        return function (e, t) {
          var n = Y(t, function (e, t) {
            return Zn(t, e), t;
          }, e);
          return t.length > 0 ? xm([n]) : n;
        }(fn(t.cloneContents()), qv(e, t));
      }(e, t[0]);
    }(e, t);
  },
      Yv = function Yv(e, t) {
    return t >= 0 && t < e.length && Wc(e.charAt(t));
  },
      Xv = function Xv(e) {
    return _r(e.innerText);
  },
      Qv = function Qv(e) {
    return Co(e) ? e.outerHTML : Ro(e) ? Cs.encodeRaw(e.data, !1) : To(e) ? "\x3c!--" + e.data + "--\x3e" : "";
  },
      Jv = function Jv(e, t) {
    return function (e, t) {
      var n = 0;
      $(e, function (e) {
        0 === e[0] ? n++ : 1 === e[0] ? (function (e, t, n) {
          var o = function (e) {
            var t;
            var n = document.createElement("div"),
                o = document.createDocumentFragment();

            for (e && (n.innerHTML = e); t = n.firstChild;) {
              o.appendChild(t);
            }

            return o;
          }(t);

          if (e.hasChildNodes() && n < e.childNodes.length) {
            var _t84 = e.childNodes[n];

            _t84.parentNode.insertBefore(o, _t84);
          } else e.appendChild(o);
        }(t, e[1], n), n++) : 2 === e[0] && function (e, t) {
          if (e.hasChildNodes() && t < e.childNodes.length) {
            var _n72 = e.childNodes[t];

            _n72.parentNode.removeChild(_n72);
          }
        }(t, n);
      });
    }(function (e, t) {
      var n = e.length + t.length + 2,
          o = new Array(n),
          r = new Array(n),
          s = function s(n, o, r, a, l) {
        var d = i(n, o, r, a);

        if (null === d || d.start === o && d.diag === o - a || d.end === n && d.diag === n - r) {
          var _s23 = n,
              _i13 = r;

          for (; _s23 < o || _i13 < a;) {
            _s23 < o && _i13 < a && e[_s23] === t[_i13] ? (l.push([0, e[_s23]]), ++_s23, ++_i13) : o - n > a - r ? (l.push([2, e[_s23]]), ++_s23) : (l.push([1, t[_i13]]), ++_i13);
          }
        } else {
          s(n, d.start, r, d.start - d.diag, l);

          for (var _t85 = d.start; _t85 < d.end; ++_t85) {
            l.push([0, e[_t85]]);
          }

          s(d.end, o, d.end - d.diag, a, l);
        }
      },
          a = function a(n, o, r, s) {
        var a = n;

        for (; a - o < s && a < r && e[a] === t[a - o];) {
          ++a;
        }

        return function (e, t, n) {
          return {
            start: e,
            end: t,
            diag: n
          };
        }(n, a, o);
      },
          i = function i(n, s, _i14, l) {
        var d = s - n,
            c = l - _i14;
        if (0 === d || 0 === c) return null;
        var u = d - c,
            m = c + d,
            f = (m % 2 == 0 ? m : m + 1) / 2;
        var g, p, h, b, v;

        for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) {
          for (p = -g; p <= g; p += 2) {
            for (h = p + f, p === -g || p !== g && o[h - 1] < o[h + 1] ? o[h] = o[h + 1] : o[h] = o[h - 1] + 1, b = o[h], v = b - n + _i14 - p; b < s && v < l && e[b] === t[v];) {
              o[h] = ++b, ++v;
            }

            if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h]) return a(r[h - u], p + n - _i14, s, l);
          }

          for (p = u - g; p <= u + g; p += 2) {
            for (h = p + f - u, p === u - g || p !== u + g && r[h + 1] <= r[h - 1] ? r[h] = r[h + 1] - 1 : r[h] = r[h - 1], b = r[h] - 1, v = b - n + _i14 - p; b >= n && v >= _i14 && e[b] === t[v];) {
              r[h] = b--, v--;
            }

            if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u]) return a(r[h], p + n - _i14, s, l);
          }
        }
      },
          l = [];

      return s(0, e.length, 0, t.length, l), l;
    }(H(de(t.childNodes), Qv), e), t), t;
  },
      Zv = De(function () {
    return document.implementation.createHTMLDocument("undo");
  }),
      ey = function ey(e) {
    var t = (n = e.getBody(), K(H(de(n.childNodes), Qv), function (e) {
      return e.length > 0;
    }));
    var n;
    var o = ee(t, function (t) {
      var n = $f(e.serializer, t);
      return n.length > 0 ? [n] : [];
    }),
        r = o.join("");
    return function (e) {
      return -1 !== e.indexOf("</iframe>");
    }(r) ? function (e) {
      return {
        type: "fragmented",
        fragments: e,
        content: "",
        bookmark: null,
        beforeBookmark: null
      };
    }(o) : function (e) {
      return {
        type: "complete",
        fragments: null,
        content: e,
        bookmark: null,
        beforeBookmark: null
      };
    }(r);
  },
      ty = function ty(e, t, n) {
    var o = n ? t.beforeBookmark : t.bookmark;
    "fragmented" === t.type ? Jv(t.fragments, e.getBody()) : e.setContent(t.content, {
      format: "raw",
      no_selection: !C(o) || !Pc(o) || !o.isFakeCaret
    }), e.selection.moveToBookmark(o);
  },
      ny = function ny(e) {
    return "fragmented" === e.type ? e.fragments.join("") : e.content;
  },
      oy = function oy(e) {
    var t = un("body", Zv());
    return so(t, ny(e)), $(hr(t, "*[data-mce-bogus]"), oo), ro(t);
  },
      ry = function ry(e, t) {
    return !(!e || !t) && (!!function (e, t) {
      return ny(e) === ny(t);
    }(e, t) || function (e, t) {
      return oy(e) === oy(t);
    }(e, t));
  },
      sy = function sy(e) {
    return 0 === e.get();
  },
      ay = function ay(e, t, n) {
    sy(n) && (e.typing = t);
  },
      iy = function iy(e, t) {
    e.typing && (ay(e, !1, t), e.add());
  },
      ly = function ly(e) {
    return {
      init: {
        bindEvents: S
      },
      undoManager: {
        beforeChange: function beforeChange(t, n) {
          return function (e, t, n) {
            sy(t) && n.set(xi(e.selection));
          }(e, t, n);
        },
        add: function add(t, n, o, r, s, a) {
          return function (e, t, n, o, r, s, a) {
            var i = ey(e);
            if (s = s || {}, s = Bt.extend(s, i), !1 === sy(o) || e.removed) return null;
            var l = t.data[n.get()];
            if (e.dispatch("BeforeAddUndo", {
              level: s,
              lastLevel: l,
              originalEvent: a
            }).isDefaultPrevented()) return null;
            if (l && ry(l, s)) return null;
            t.data[n.get()] && r.get().each(function (e) {
              t.data[n.get()].beforeBookmark = e;
            });
            var d = Ul(e);

            if (d && t.data.length > d) {
              for (var _e88 = 0; _e88 < t.data.length - 1; _e88++) {
                t.data[_e88] = t.data[_e88 + 1];
              }

              t.data.length--, n.set(t.data.length);
            }

            s.bookmark = xi(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(s), n.set(t.data.length - 1);
            var c = {
              level: s,
              lastLevel: l,
              originalEvent: a
            };
            return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", c), e.dispatch("change", c)) : e.dispatch("AddUndo", c), s;
          }(e, t, n, o, r, s, a);
        },
        undo: function undo(t, n, o) {
          return function (e, t, n, o) {
            var r;
            return t.typing && (t.add(), t.typing = !1, ay(t, !1, n)), o.get() > 0 && (o.set(o.get() - 1), r = t.data[o.get()], ty(e, r, !0), e.setDirty(!0), e.dispatch("Undo", {
              level: r
            })), r;
          }(e, t, n, o);
        },
        redo: function redo(t, n) {
          return function (e, t, n) {
            var o;
            return t.get() < n.length - 1 && (t.set(t.get() + 1), o = n[t.get()], ty(e, o, !1), e.setDirty(!0), e.dispatch("Redo", {
              level: o
            })), o;
          }(e, t, n);
        },
        clear: function clear(t, n) {
          return function (e, t, n) {
            t.data = [], n.set(0), t.typing = !1, e.dispatch("ClearUndos");
          }(e, t, n);
        },
        reset: function reset(e) {
          return function (e) {
            e.clear(), e.add();
          }(e);
        },
        hasUndo: function hasUndo(t, n) {
          return function (e, t, n) {
            return n.get() > 0 || t.typing && t.data[0] && !ry(ey(e), t.data[0]);
          }(e, t, n);
        },
        hasRedo: function hasRedo(e, t) {
          return function (e, t) {
            return t.get() < e.data.length - 1 && !e.typing;
          }(e, t);
        },
        transact: function transact(e, t, n) {
          return function (e, t, n) {
            return iy(e, t), e.beforeChange(), e.ignore(n), e.add();
          }(e, t, n);
        },
        ignore: function ignore(e, t) {
          return function (e, t) {
            try {
              e.set(e.get() + 1), t();
            } finally {
              e.set(e.get() - 1);
            }
          }(e, t);
        },
        extra: function extra(t, n, o, r) {
          return function (e, t, n, o, r) {
            if (t.transact(o)) {
              var _o52 = t.data[n.get()].bookmark,
                  _s24 = t.data[n.get() - 1];
              ty(e, _s24, !0), t.transact(r) && (t.data[n.get() - 1].beforeBookmark = _o52);
            }
          }(e, t, n, o, r);
        }
      },
      formatter: {
        match: function match(t, n, o, r) {
          return ph(e, t, n, o, r);
        },
        matchAll: function matchAll(t, n) {
          return function (e, t, n) {
            var o = [],
                r = {},
                s = e.selection.getStart();
            return e.dom.getParent(s, function (s) {
              for (var _a15 = 0; _a15 < t.length; _a15++) {
                var _i15 = t[_a15];
                !r[_i15] && gh(e, s, _i15, n) && (r[_i15] = !0, o.push(_i15));
              }
            }, e.dom.getRoot()), o;
          }(e, t, n);
        },
        matchNode: function matchNode(t, n, o, r) {
          return gh(e, t, n, o, r);
        },
        canApply: function canApply(t) {
          return function (e, t) {
            var n = e.formatter.get(t),
                o = e.dom;

            if (n) {
              var _t86 = e.selection.getStart(),
                  _r41 = mu(o, _t86);

              for (var _e89 = n.length - 1; _e89 >= 0; _e89--) {
                var _t87 = n[_e89];
                if (!gu(_t87)) return !0;

                for (var _e90 = _r41.length - 1; _e90 >= 0; _e90--) {
                  if (o.is(_r41[_e90], _t87.selector)) return !0;
                }
              }
            }

            return !1;
          }(e, t);
        },
        closest: function closest(t) {
          return function (e, t) {
            var n = function n(t) {
              return vn(t, fn(e.getBody()));
            };

            return M.from(e.selection.getStart(!0)).bind(function (o) {
              return lh(fn(o), function (n) {
                return ce(t, function (t) {
                  return function (t, n) {
                    return gh(e, t.dom, n) ? M.some(n) : M.none();
                  }(n, t);
                });
              }, n);
            }).getOrNull();
          }(e, t);
        },
        apply: function apply(t, n, o) {
          return eb(e, t, n, o);
        },
        remove: function remove(t, n, o, r) {
          return Xh(e, t, n, o, r);
        },
        toggle: function toggle(t, n, o) {
          return function (e, t, n, o) {
            var r = e.formatter.get(t);
            !ph(e, t, n, o) || "toggle" in r[0] && !r[0].toggle ? eb(e, t, n, o) : Xh(e, t, n, o);
          }(e, t, n, o);
        },
        formatChanged: function formatChanged(t, n, o, r, s) {
          return function (e, t, n, o, r, s) {
            return null === t.get() && function (e, t) {
              e.set({}), t.on("NodeChange", function (n) {
                sb(t, n.element, e.get());
              }), t.on("FormatApply FormatRemove", function (n) {
                var o = M.from(n.node).map(function (e) {
                  return tu(e) ? e : e.startContainer;
                }).bind(function (e) {
                  return Co(e) ? M.some(e) : M.from(e.parentElement);
                }).getOrThunk(function () {
                  return nb(t);
                });
                sb(t, o, e.get());
              });
            }(t, e), function (e, t, n, o, r, s) {
              var a = t.get();
              $(n.split(","), function (t) {
                var n = we(a, t).getOrThunk(function () {
                  var e = {
                    withSimilar: {
                      state: ea(!1),
                      similar: !0,
                      callbacks: []
                    },
                    withoutSimilar: {
                      state: ea(!1),
                      similar: !1,
                      callbacks: []
                    },
                    withVars: []
                  };
                  return a[t] = e, e;
                }),
                    i = function i() {
                  var n = rb(e);
                  return ob(e, n, t, r, s).isSome();
                };

                if (v(s)) {
                  var _e91 = r ? n.withSimilar : n.withoutSimilar;

                  _e91.callbacks.push(o), 1 === _e91.callbacks.length && _e91.state.set(i());
                } else n.withVars.push({
                  state: ea(i()),
                  similar: r,
                  vars: s,
                  callback: o
                });
              }), t.set(a);
            }(e, t, n, o, r, s), {
              unbind: function unbind() {
                return function (e, t, n) {
                  var o = e.get();
                  $(t.split(","), function (e) {
                    return we(o, e).each(function (t) {
                      o[e] = {
                        withSimilar: _objectSpread({}, t.withSimilar, {
                          callbacks: K(t.withSimilar.callbacks, function (e) {
                            return e !== n;
                          })
                        }),
                        withoutSimilar: _objectSpread({}, t.withoutSimilar, {
                          callbacks: K(t.withoutSimilar.callbacks, function (e) {
                            return e !== n;
                          })
                        }),
                        withVars: K(t.withVars, function (e) {
                          return e.callback !== n;
                        })
                      };
                    });
                  }), e.set(o);
                }(t, n, o);
              }
            };
          }(e, t, n, o, r, s);
        }
      },
      editor: {
        getContent: function getContent(t) {
          return function (e, t) {
            return M.from(e.getBody()).fold(N("tree" === t.format ? new jf("body", 11) : ""), function (n) {
              return function (e, t, n) {
                var o;
                return "raw" === t.format ? o = Bt.trim(qf(e.serializer, n.innerHTML)) : "text" === t.format ? (o = _r(n.innerText), o = "\n" === o ? "" : o) : o = "tree" === t.format ? e.serializer.serialize(n, t) : function (e, t) {
                  var n = Ki(e),
                      o = new RegExp("^(<".concat(n, "[^>]*>(&nbsp;|&#160;|\\s|\xA0|<br \\/>|)<\\/").concat(n, ">[\r\n]*|<br \\/>[\r\n]*)$"));
                  return t.replace(o, "");
                }(e, e.serializer.serialize(n, t)), "text" !== t.format && !lr(fn(n)) && m(o) ? Bt.trim(o) : o;
              }(e, t, n);
            });
          }(e, t);
        },
        setContent: function setContent(t, n) {
          return function (e, t, n) {
            return M.from(e.getBody()).map(function (o) {
              return rh(t) ? function (e, t, n, o) {
                Hp(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                var r = Xf({
                  validate: !1
                }, e.schema).serialize(n),
                    s = lr(fn(t)) ? r : Bt.trim(r);
                return sh(e, s, o.no_selection), {
                  content: n,
                  html: s
                };
              }(e, o, t, n) : function (e, t, n, o) {
                if (0 === n.length || /^\s+$/.test(n)) {
                  var _r42 = '<br data-mce-bogus="1">';
                  "TABLE" === t.nodeName ? n = "<tr><td>" + _r42 + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + _r42 + "</li>");

                  var _s25 = Ki(e);

                  return e.schema.isValidChild(t.nodeName.toLowerCase(), _s25.toLowerCase()) ? (n = _r42, n = e.dom.createHTML(_s25, Gi(e), n)) : n || (n = _r42), sh(e, n, o.no_selection), {
                    content: n,
                    html: n
                  };
                }

                {
                  "raw" !== o.format && (n = Xf({
                    validate: !1
                  }, e.schema).serialize(e.parser.parse(n, {
                    isRootContent: !0,
                    insert: !0
                  })));

                  var _r43 = lr(fn(t)) ? n : Bt.trim(n);

                  return sh(e, _r43, o.no_selection), {
                    content: _r43,
                    html: _r43
                  };
                }
              }(e, o, t, n);
            }).getOr({
              content: t,
              html: rh(n.content) ? "" : n.content
            });
          }(e, t, n);
        },
        insertContent: function insertContent(t, n) {
          return oh(e, t, n);
        },
        addVisual: function addVisual(t) {
          return function (e, t) {
            var n = e.dom,
                o = C(t) ? t : e.getBody();
            v(e.hasVisual) && (e.hasVisual = Wl(e)), $(n.select("table,a", o), function (t) {
              switch (t.nodeName) {
                case "TABLE":
                  var _o53 = Kl(e),
                      _r44 = n.getAttrib(t, "border");

                  _r44 && "0" !== _r44 || !e.hasVisual ? n.removeClass(t, _o53) : n.addClass(t, _o53);
                  break;

                case "A":
                  if (!n.getAttrib(t, "href")) {
                    var _o54 = n.getAttrib(t, "name") || t.id,
                        _r45 = Gl(e);

                    _o54 && e.hasVisual ? n.addClass(t, _r45) : n.removeClass(t, _r45);
                  }

              }
            }), e.dispatch("VisualAid", {
              element: t,
              hasVisual: e.hasVisual
            });
          }(e, t);
        }
      },
      selection: {
        getContent: function getContent(t, n) {
          return function (e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var o = function (e, t) {
              return _objectSpread({}, e, {
                format: t,
                get: !0,
                selection: !0,
                getInner: !0
              });
            }(n, t);

            return Bv(e, o).fold(R, function (t) {
              var n = function (e, t) {
                if ("text" === t.format) return function (e) {
                  return M.from(e.selection.getRng()).map(function (t) {
                    var n = M.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)),
                        o = e.getBody(),
                        r = function (e) {
                      return e.map(function (e) {
                        return e.nodeName;
                      }).getOr("div").toLowerCase();
                    }(n),
                        s = e.dom.add(o, r, {
                      "data-mce-bogus": "all",
                      style: "overflow: hidden; opacity: 0;"
                    }, t.cloneContents()),
                        a = Xv(s),
                        i = _r(s.textContent);

                    if (e.dom.remove(s), Yv(i, 0) || Yv(i, i.length - 1)) {
                      var _e92 = n.getOr(o),
                          _t88 = Xv(_e92),
                          _r46 = _t88.indexOf(a);

                      return -1 === _r46 ? a : (Yv(_t88, _r46 - 1) ? " " : "") + a + (Yv(_t88, _r46 + a.length) ? " " : "");
                    }

                    return a;
                  }).getOr("");
                }(e);
                {
                  var _n73 = function (e, t) {
                    var n = e.selection.getRng(),
                        o = e.dom.create("body"),
                        r = e.selection.getSel(),
                        s = Tf(e, Du(r)),
                        a = t.contextual ? Gv(fn(e.getBody()), s).dom : n.cloneContents();
                    return a && o.appendChild(a), e.selection.serializer.serialize(o, t);
                  }(e, t);

                  return "tree" === t.format ? _n73 : e.selection.isCollapsed() ? "" : _n73;
                }
              }(e, t);

              return Dv(e, n, t);
            });
          }(e, t, n);
        }
      },
      autocompleter: {
        addDecoration: function addDecoration(t) {
          return Lf(e, t);
        },
        removeDecoration: function removeDecoration() {
          return function (e, t) {
            return Mf(t).each(function (t) {
              var n = e.selection.getBookmark();
              oo(t), e.selection.moveToBookmark(n);
            });
          }(e, fn(e.getBody()));
        }
      },
      raw: {
        getModel: function getModel() {
          return M.none();
        }
      }
    };
  },
      dy = function dy(e) {
    return xe(e.plugins, "rtc");
  },
      cy = function cy(e) {
    return e.rtcInstance ? e.rtcInstance : ly(e);
  },
      uy = function uy(e) {
    var t = e.rtcInstance;
    if (t) return t;
    throw new Error("Failed to get RTC instance not yet initialized.");
  },
      my = function my(e) {
    return uy(e).init.bindEvents();
  },
      fy = function fy(e) {
    return 0 === e.dom.length ? (no(e), M.none()) : M.some(e);
  },
      gy = function gy(e, t, n, o) {
    e.bind(function (e) {
      return (o ? qg : $g)(e.dom, o ? e.dom.length : 0), t.filter(zt).map(function (t) {
        return function (e, t, n, o) {
          var r = e.dom,
              s = t.dom,
              a = o ? r.length : s.length;
          o ? (Wg(r, s, !1, !o), n.setStart(s, a)) : (Wg(s, r, !1, !o), n.setEnd(s, a));
        }(e, t, n, o);
      });
    }).orThunk(function () {
      var e = function (e, t) {
        return e.filter(function (e) {
          return Yu.isBookmarkNode(e.dom);
        }).bind(t ? _n : Sn);
      }(t, o).or(t).filter(zt);

      return e.map(function (e) {
        return function (e, t) {
          kn(e).each(function (n) {
            var o = e.dom;
            t && Ig(n, ti(o, 0)) ? $g(o, 0) : !t && Fg(n, ti(o, o.length)) && qg(o, o.length);
          });
        }(e, o);
      });
    });
  },
      py = function py(e, t, n) {
    if (e && xe(e, t)) {
      var _o55 = K(e[t], function (e) {
        return e !== n;
      });

      0 === _o55.length ? delete e[t] : e[t] = _o55;
    }
  },
      hy = function hy(e) {
    return !(!e || !e.ownerDocument) && yn(fn(e.ownerDocument), fn(e));
  },
      by = function by(e, t, n, o) {
    var r, s;

    var _ref13 = function (e, t) {
      var n, o;

      var r = function r(t, n) {
        return Q(n, function (n) {
          return e.is(n, t);
        });
      },
          s = function s(t) {
        return e.getParents(t, null, e.getRoot());
      };

      return {
        selectorChangedWithUnbind: function selectorChangedWithUnbind(e, a) {
          return n || (n = {}, o = {}, t.on("NodeChange", function (e) {
            var t = e.element,
                a = s(t),
                i = {};
            Bt.each(n, function (e, t) {
              r(t, a).each(function (n) {
                o[t] || ($(e, function (e) {
                  e(!0, {
                    node: n,
                    selector: t,
                    parents: a
                  });
                }), o[t] = e), i[t] = e;
              });
            }), Bt.each(o, function (e, n) {
              i[n] || (delete o[n], Bt.each(e, function (e) {
                e(!1, {
                  node: t,
                  selector: n,
                  parents: a
                });
              }));
            });
          })), n[e] || (n[e] = []), n[e].push(a), r(e, s(t.selection.getStart())).each(function () {
            o[e] = n[e];
          }), {
            unbind: function unbind() {
              py(n, e, a), py(o, e, a);
            }
          };
        }
      };
    }(e, o),
        a = _ref13.selectorChangedWithUnbind,
        i = function i(e, t) {
      return function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var o = function (e, t) {
          return _objectSpread({
            format: "html"
          }, e, {
            set: !0,
            selection: !0,
            content: t
          });
        }(n, t);

        Pv(e, o).each(function (t) {
          var n = function (e, t) {
            if ("raw" !== t.format) {
              var _n74 = e.selection.getRng(),
                  _o56 = e.dom.getParent(_n74.commonAncestorContainer, e.dom.isBlock),
                  _r47 = _o56 ? {
                context: _o56.nodeName.toLowerCase()
              } : {},
                  _s26 = e.parser.parse(t.content, _objectSpread({
                forced_root_block: !1
              }, _r47, {}, t));

              return Xf({
                validate: !1
              }, e.schema).serialize(_s26);
            }

            return t.content;
          }(e, t),
              o = e.selection.getRng();

          (function (e, t) {
            var n = M.from(t.firstChild).map(fn),
                o = M.from(t.lastChild).map(fn);
            e.deleteContents(), e.insertNode(t);
            var r = n.bind(Sn).filter(zt).bind(fy),
                s = o.bind(_n).filter(zt).bind(fy);
            gy(r, n, e, !0), gy(s, o, e, !1), e.collapse(!1);
          })(o, o.createContextualFragment(n)), e.selection.setRng(o), of(e, o), Lv(e, n, t);
        });
      }(o, e, t);
    },
        l = function l(e) {
      var t = c();
      t.collapse(!!e), u(t);
    },
        d = function d() {
      return t.getSelection ? t.getSelection() : t.document.selection;
    },
        c = function c() {
      var n, a, i;

      var l = function l(e, t, n) {
        try {
          return t.compareBoundaryPoints(e, n);
        } catch (e) {
          return -1;
        }
      },
          c = t.document;

      if (void 0 !== o.bookmark && !1 === _f(o)) {
        var _e93 = pf(o);

        if (_e93.isSome()) return _e93.map(function (e) {
          return Tf(o, [e])[0];
        }).getOr(c.createRange());
      }

      try {
        (n = d()) && !yo(n.anchorNode) && (a = n.rangeCount > 0 ? n.getRangeAt(0) : n.createRange ? n.createRange() : c.createRange(), a = Tf(o, [a])[0]);
      } catch (e) {}

      return a || (a = c.createRange()), a.setStart && 9 === a.startContainer.nodeType && a.collapsed && (i = e.getRoot(), a.setStart(i, 0), a.setEnd(i, 0)), r && s && (0 === l(a.START_TO_START, a, r) && 0 === l(a.END_TO_END, a, r) ? a = s : (r = null, s = null)), a;
    },
        u = function u(e, t) {
      var n;
      if (!function (e) {
        return !!e && hy(e.startContainer) && hy(e.endContainer);
      }(e)) return;
      var a = d();

      if (e = o.dispatch("SetSelectionRange", {
        range: e,
        forward: t
      }).range, a) {
        s = e;

        try {
          a.removeAllRanges(), a.addRange(e);
        } catch (e) {}

        !1 === t && a.extend && (a.collapse(e.endContainer, e.endOffset), a.extend(e.startContainer, e.startOffset)), r = a.rangeCount > 0 ? a.getRangeAt(0) : null;
      }

      !e.collapsed && e.startContainer === e.endContainer && a.setBaseAndExtent && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (n = e.startContainer.childNodes[e.startOffset], n && "IMG" === n.tagName && (a.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), a.anchorNode === e.startContainer && a.focusNode === e.endContainer || a.setBaseAndExtent(n, 0, n, 1))), o.dispatch("AfterSetSelectionRange", {
        range: e,
        forward: t
      });
    },
        m = function m() {
      var t = d(),
          n = null == t ? void 0 : t.anchorNode,
          o = null == t ? void 0 : t.focusNode;
      if (!t || !n || !o || yo(n) || yo(o)) return !0;
      var r = e.createRng(),
          s = e.createRng();

      try {
        r.setStart(n, t.anchorOffset), r.collapse(!0), s.setStart(o, t.focusOffset), s.collapse(!0);
      } catch (e) {
        return !0;
      }

      return r.compareBoundaryPoints(r.START_TO_START, s) <= 0;
    },
        f = {
      bookmarkManager: null,
      controlSelection: null,
      dom: e,
      win: t,
      serializer: n,
      editor: o,
      collapse: l,
      setCursorLocation: function setCursorLocation(t, n) {
        var r = e.createRng();
        C(t) && C(n) ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1)) : (zu(e, r, o.getBody(), !0), u(r));
      },
      getContent: function getContent(e) {
        return function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return function (e, t, n) {
            return uy(e).selection.getContent(t, n);
          }(e, t.format ? t.format : "html", t);
        }(o, e);
      },
      setContent: i,
      getBookmark: function getBookmark(e, t) {
        return g.getBookmark(e, t);
      },
      moveToBookmark: function moveToBookmark(e) {
        return g.moveToBookmark(e);
      },
      select: function select(t, n) {
        return function (e, t, n) {
          return M.from(t).map(function (t) {
            var o = e.nodeIndex(t),
                r = e.createRng();
            return r.setStart(t.parentNode, o), r.setEnd(t.parentNode, o + 1), n && (zu(e, r, t, !0), zu(e, r, t, !1)), r;
          });
        }(e, t, n).each(u), t;
      },
      isCollapsed: function isCollapsed() {
        var e = c(),
            t = d();
        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
      },
      isForward: m,
      setNode: function setNode(t) {
        return i(e.getOuterHTML(t)), t;
      },
      getNode: function getNode() {
        return function (e, t) {
          var n, o, r;
          if (!t) return e;
          o = t.startContainer, r = t.endContainer;
          var s = t.startOffset,
              a = t.endOffset;
          return n = t.commonAncestorContainer, !t.collapsed && (o === r && a - s < 2 && o.hasChildNodes() && (n = o.childNodes[s]), 3 === o.nodeType && 3 === r.nodeType && (o = o.length === s ? Of(o.nextSibling, !0) : o.parentNode, r = 0 === a ? Of(r.previousSibling, !1) : r.parentNode, o && o === r)) ? o : n && 3 === n.nodeType ? n.parentNode : n;
        }(o.getBody(), c());
      },
      getSel: d,
      setRng: u,
      getRng: c,
      getStart: function getStart(e) {
        return Rf(o.getBody(), c(), e);
      },
      getEnd: function getEnd(e) {
        return Af(o.getBody(), c(), e);
      },
      getSelectedBlocks: function getSelectedBlocks(t, n) {
        return function (e, t, n, o) {
          var r;
          var s = [],
              a = e.getRoot();

          if (n = e.getParent(n || Rf(a, t, t.collapsed), e.isBlock), o = e.getParent(o || Af(a, t, t.collapsed), e.isBlock), n && n !== a && s.push(n), n && o && n !== o) {
            r = n;

            var _t89 = new Qo(n, a);

            for (; (r = _t89.next()) && r !== o;) {
              e.isBlock(r) && s.push(r);
            }
          }

          return o && n !== o && o !== a && s.push(o), s;
        }(e, c(), t, n);
      },
      normalize: function normalize() {
        var t = c(),
            n = d();

        if (!(Du(n).length > 1) && ju(o)) {
          var _n75 = Pm(e, t);

          return _n75.each(function (e) {
            u(e, m());
          }), _n75.getOr(t);
        }

        return t;
      },
      selectorChanged: function selectorChanged(e, t) {
        return a(e, t), f;
      },
      selectorChangedWithUnbind: a,
      getScrollContainer: function getScrollContainer() {
        var t,
            n = e.getRoot();

        for (; n && "BODY" !== n.nodeName;) {
          if (n.scrollHeight > n.clientHeight) {
            t = n;
            break;
          }

          n = n.parentNode;
        }

        return t;
      },
      scrollIntoView: function scrollIntoView(e, t) {
        C(e) ? function (e, t, n) {
          (e.inline ? ef : nf)(e, t, n);
        }(o, e, t) : of(o, c(), t);
      },
      placeCaretAt: function placeCaretAt(e, t) {
        return u(Sm(e, t, o.getDoc()));
      },
      getBoundingClientRect: function getBoundingClientRect() {
        var e = c();
        return e.collapsed ? ti.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
      },
      destroy: function destroy() {
        t = r = s = null, p.destroy();
      }
    },
        g = Yu(f),
        p = lm(f, o);

    return f.bookmarkManager = g, f.controlSelection = p, f;
  },
      vy = function vy(e, t, n) {
    -1 === Bt.inArray(t, n) && (e.addAttributeFilter(n, function (e, t) {
      var n = e.length;

      for (; n--;) {
        e[n].attr(t, null);
      }
    }), t.push(n));
  },
      yy = function yy(e, t) {
    var n = ["data-mce-selected"],
        o = t && t.dom ? t.dom : Qs.DOM,
        r = t && t.schema ? t.schema : Bs(e);
    e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = !("remove_trailing_brs" in e) || e.remove_trailing_brs;
    var s = Ov(e, r);
    return function (e, t, n) {
      e.addAttributeFilter("data-mce-tabindex", function (e, t) {
        var n = e.length;

        for (; n--;) {
          var _o57 = e[n];
          _o57.attr("tabindex", _o57.attr("data-mce-tabindex")), _o57.attr(t, null);
        }
      }), e.addAttributeFilter("src,href,style", function (e, o) {
        var r = "data-mce-" + o,
            s = t.url_converter,
            a = t.url_converter_scope;
        var i = e.length;

        for (; i--;) {
          var _t90 = e[i];

          var _l8 = _t90.attr(r);

          void 0 !== _l8 ? (_t90.attr(o, _l8.length > 0 ? _l8 : null), _t90.attr(r, null)) : (_l8 = _t90.attr(o), "style" === o ? _l8 = n.serializeStyle(n.parseStyle(_l8), _t90.name) : s && (_l8 = s.call(a, _l8, o, _t90.name)), _t90.attr(o, _l8.length > 0 ? _l8 : null));
        }
      }), e.addAttributeFilter("class", function (e) {
        var t = e.length;

        for (; t--;) {
          var _n76 = e[t];

          var _o58 = _n76.attr("class");

          _o58 && (_o58 = _n76.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), _n76.attr("class", _o58.length > 0 ? _o58 : null));
        }
      }), e.addAttributeFilter("data-mce-type", function (e, t, n) {
        var o = e.length;

        for (; o--;) {
          var _t91 = e[o];

          if ("bookmark" === _t91.attr("data-mce-type") && !n.cleanup) {
            var _e94 = M.from(_t91.firstChild).exists(function (e) {
              return !Sr(e.value);
            });

            _e94 ? _t91.unwrap() : _t91.remove();
          }
        }
      }), e.addNodeFilter("noscript", function (e) {
        var t = e.length;

        for (; t--;) {
          var _n77 = e[t].firstChild;
          _n77 && (_n77.value = Cs.decode(_n77.value));
        }
      }), e.addNodeFilter("script,style", function (e, n) {
        var o = function o(e) {
          return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
        };

        var r = e.length;

        for (; r--;) {
          var _s27 = e[r],
              _a16 = _s27.firstChild ? _s27.firstChild.value : "";

          if ("script" === n) {
            var _e95 = _s27.attr("type");

            _e95 && _s27.attr("type", "mce-no/type" === _e95 ? null : _e95.replace(/^mce\-/, "")), "xhtml" === t.element_format && _a16.length > 0 && (_s27.firstChild.value = "// <![CDATA[\n" + o(_a16) + "\n// ]]>");
          } else "xhtml" === t.element_format && _a16.length > 0 && (_s27.firstChild.value = "\x3c!--\n" + o(_a16) + "\n--\x3e");
        }
      }), e.addNodeFilter("#comment", function (e) {
        var o = e.length;

        for (; o--;) {
          var _r48 = e[o];
          t.preserve_cdata && 0 === _r48.value.indexOf("[CDATA[") ? (_r48.name = "#cdata", _r48.type = 4, _r48.value = n.decode(_r48.value.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === _r48.value.indexOf("mce:protected ") && (_r48.name = "#text", _r48.type = 3, _r48.raw = !0, _r48.value = unescape(_r48.value).substr(14));
        }
      }), e.addNodeFilter("xml:namespace,input", function (e, t) {
        var n = e.length;

        for (; n--;) {
          var _o59 = e[n];
          7 === _o59.type ? _o59.remove() : 1 === _o59.type && ("input" !== t || _o59.attr("type") || _o59.attr("type", "text"));
        }
      }), e.addAttributeFilter("data-mce-type", function (t) {
        $(t, function (t) {
          "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap());
        });
      }), e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
        var n = e.length;

        for (; n--;) {
          e[n].attr(t, null);
        }
      });
    }(s, e, o), {
      schema: r,
      addNodeFilter: s.addNodeFilter,
      addAttributeFilter: s.addAttributeFilter,
      serialize: function serialize(n) {
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var i = _objectSpread({
          format: "html"
        }, a),
            l = function (e, t, n) {
          return function (e, t) {
            return e && e.hasEventListeners("PreProcess") && !t.no_events;
          }(e, n) ? function (e, t, n) {
            var o;
            var r = e.dom;
            var s = t.cloneNode(!0);
            var a = document.implementation;

            if (a.createHTMLDocument) {
              var _e96 = a.createHTMLDocument("");

              Bt.each("BODY" === s.nodeName ? s.childNodes : [s], function (t) {
                _e96.body.appendChild(_e96.importNode(t, !0));
              }), s = "BODY" !== s.nodeName ? _e96.body.firstChild : _e96.body, o = r.doc, r.doc = _e96;
            }

            return function (e, t) {
              e.dispatch("PreProcess", t);
            }(e, _objectSpread({}, n, {
              node: s
            })), o && (r.doc = o), s;
          }(e, t, n) : t;
        }(t, n, i),
            d = function (e, t, n) {
          var o = _r(n.getInner ? t.innerHTML : e.getOuterHTML(t));

          return n.selection || lr(fn(t)) ? o : Bt.trim(o);
        }(o, l, i),
            c = function (e, t, n) {
          var o = n.selection ? _objectSpread({
            forced_root_block: !1
          }, n) : n,
              r = e.parse(t, o);
          return function (e) {
            var t = function t(e) {
              return e && "br" === e.name;
            },
                n = e.lastChild;

            if (t(n)) {
              var _e97 = n.prev;
              t(_e97) && (n.remove(), _e97.remove());
            }
          }(r), r;
        }(s, d, i);

        return "tree" === i.format ? c : function (e, t, n, o, r) {
          var s = function (e, t, n) {
            return Xf(e, t).serialize(n);
          }(t, n, o);

          return function (e, t, n) {
            if (!t.no_events && e) {
              var _o60 = function (e, t) {
                return e.dispatch("PostProcess", t);
              }(e, _objectSpread({}, t, {
                content: n
              }));

              return _o60.content;
            }

            return n;
          }(e, r, s);
        }(t, e, r, c, i);
      },
      addRules: r.addValidElements,
      setRules: r.setValidElements,
      addTempAttr: O(vy, s, n),
      getTempAttrs: N(n),
      getNodeFilters: s.getNodeFilters,
      getAttributeFilters: s.getAttributeFilters,
      removeNodeFilter: s.removeNodeFilter,
      removeAttributeFilter: s.removeAttributeFilter
    };
  },
      Cy = function Cy(e, t) {
    var n = yy(e, t);
    return {
      schema: n.schema,
      addNodeFilter: n.addNodeFilter,
      addAttributeFilter: n.addAttributeFilter,
      serialize: n.serialize,
      addRules: n.addRules,
      setRules: n.setRules,
      addTempAttr: n.addTempAttr,
      getTempAttrs: n.getTempAttrs,
      getNodeFilters: n.getNodeFilters,
      getAttributeFilters: n.getAttributeFilters,
      removeNodeFilter: n.removeNodeFilter,
      removeAttributeFilter: n.removeAttributeFilter
    };
  },
      wy = function wy(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var o = function (e, t) {
      return _objectSpread({
        format: "html"
      }, e, {
        set: !0,
        content: t
      });
    }(n, t);

    return Pv(e, o).map(function (t) {
      var n = function (e, t, n) {
        return cy(e).editor.setContent(t, n);
      }(e, t.content, t);

      return Lv(e, n.html, t), n.content;
    }).getOr(t);
  },
      xy = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),
      ky = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
      Sy = function Sy(e) {
    var t = K(xy, function (t) {
      return xe(e, t);
    }),
        n = e.forced_root_block;
    return !1 !== n && "" !== n || t.push("forced_root_block (false only)"), se(t);
  },
      _y = function _y(e) {
    var t = Bt.makeMap(e.plugins, " "),
        n = K(ky, function (e) {
      return xe(t, e);
    });
    return se(n);
  },
      Ey = Qs.DOM,
      Ny = function Ny(e) {
    return M.from(e).each(function (e) {
      return e.destroy();
    });
  },
      Ry = function () {
    var e = {};
    return {
      add: function add(t, n) {
        e[t] = n;
      },
      get: function get(t) {
        return e[t] ? e[t] : {
          icons: {}
        };
      },
      has: function has(t) {
        return xe(e, t);
      }
    };
  }(),
      Ay = sa.ModelManager,
      Oy = function Oy(e, t) {
    return t.dom[e];
  },
      Ty = function Ty(e, t) {
    return parseInt(qn(t, e), 10);
  },
      By = O(Oy, "clientWidth"),
      Dy = O(Oy, "clientHeight"),
      Py = O(Ty, "margin-top"),
      Ly = O(Ty, "margin-left"),
      My = function My(e) {
    var t = [],
        n = function n() {
      var t = e.theme;
      return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : function () {
        var e = function e() {
          throw new Error("Theme did not provide a NotificationManager implementation.");
        };

        return {
          open: e,
          close: e,
          getArgs: e
        };
      }();
    },
        o = function o() {
      return M.from(t[0]);
    },
        r = function r() {
      $(t, function (e) {
        e.reposition();
      });
    },
        s = function s(e) {
      J(t, function (t) {
        return t === e;
      }).each(function (e) {
        t.splice(e, 1);
      });
    },
        a = function a(_a17) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      if (!e.removed && function (e) {
        return (t = e.inline ? e.getBody() : e.getContentAreaContainer(), M.from(t).map(fn)).map(jn).getOr(!1);
        var t;
      }(e)) return i && e.dispatch("BeforeOpenNotification", {
        notification: _a17
      }), Q(t, function (e) {
        return t = n().getArgs(e), o = _a17, !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout);
        var t, o;
      }).getOrThunk(function () {
        e.editorManager.setActive(e);
        var i = n().open(_a17, function () {
          s(i), r(), o().fold(function () {
            return e.focus();
          }, function (e) {
            return rf(fn(e.getEl()));
          });
        });
        return function (e) {
          t.push(e);
        }(i), r(), e.dispatch("OpenNotification", {
          notification: _objectSpread({}, i)
        }), i;
      });
    },
        i = N(t);

    return function (e) {
      e.on("SkinLoaded", function () {
        var t = Sl(e);
        t && a({
          text: t,
          type: "warning",
          timeout: 0
        }, !1), r();
      }), e.on("show ResizeEditor ResizeWindow NodeChange", function () {
        requestAnimationFrame(r);
      }), e.on("remove", function () {
        $(t.slice(), function (e) {
          n().close(e);
        });
      });
    }(e), {
      open: a,
      close: function close() {
        o().each(function (e) {
          n().close(e), s(e), r();
        });
      },
      getNotifications: i
    };
  },
      Iy = sa.PluginManager,
      Fy = sa.ThemeManager,
      Uy = function Uy(e) {
    var t = [];

    var n = function n() {
      var t = e.theme;
      return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : function () {
        var e = function e() {
          throw new Error("Theme did not provide a WindowManager implementation.");
        };

        return {
          open: e,
          openUrl: e,
          alert: e,
          confirm: e,
          close: e,
          getParams: e,
          setParams: e
        };
      }();
    },
        o = function o(e, t) {
      return function () {
        for (var _len10 = arguments.length, n = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          n[_key10] = arguments[_key10];
        }

        return t ? t.apply(e, n) : void 0;
      };
    },
        r = function r(n) {
      (function (t) {
        e.dispatch("CloseWindow", {
          dialog: t
        });
      })(n), t = K(t, function (e) {
        return e !== n;
      }), 0 === t.length && e.focus();
    },
        s = function s(n) {
      e.editorManager.setActive(e), gf(e), e.ui.show();
      var o = n();
      return function (n) {
        t.push(n), function (t) {
          e.dispatch("OpenWindow", {
            dialog: t
          });
        }(n);
      }(o), o;
    };

    return e.on("remove", function () {
      $(t, function (e) {
        n().close(e);
      });
    }), {
      open: function open(e, t) {
        return s(function () {
          return n().open(e, t, r);
        });
      },
      openUrl: function openUrl(e) {
        return s(function () {
          return n().openUrl(e, r);
        });
      },
      alert: function alert(e, t, r) {
        var s = n();
        s.alert(e, o(r || s, t));
      },
      confirm: function confirm(e, t, r) {
        var s = n();
        s.confirm(e, o(r || s, t));
      },
      close: function close() {
        M.from(t[t.length - 1]).each(function (e) {
          n().close(e), r(e);
        });
      }
    };
  },
      zy = function zy(e, t) {
    e.notificationManager.open({
      type: "error",
      text: t
    });
  },
      jy = function jy(e, t) {
    e._skinLoaded ? zy(e, t) : e.on("SkinLoaded", function () {
      zy(e, t);
    });
  },
      Vy = function Vy(e, t, n) {
    Qu(e, t, {
      message: n
    }), console.error(n);
  },
      Hy = function Hy(e, t, n) {
    return n ? "Failed to load ".concat(e, ": ").concat(n, " from url ").concat(t) : "Failed to load ".concat(e, " url: ").concat(t);
  },
      $y = function $y(e) {
    var n = window.console;

    for (var _len11 = arguments.length, t = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      t[_key11 - 1] = arguments[_key11];
    }

    n && (n.error ? n.error.apply(n, [e].concat(t)) : n.log.apply(n, [e].concat(t)));
  },
      qy = function qy(e, t) {
    var n = e.editorManager.baseURL + "/skins/content",
        o = "content".concat(e.editorManager.suffix, ".css"),
        r = !0 === e.inline;
    return H(t, function (t) {
      return function (e) {
        return /^[a-z0-9\-]+$/i.test(e);
      }(t) && !r ? "".concat(n, "/").concat(t, "/").concat(o) : e.documentBaseURI.toAbsolute(t);
    });
  },
      Wy = L,
      Ky = function Ky(e, t) {
    var n = {};
    return {
      findAll: function findAll(o) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : L;
        var s = K(function (e) {
          return e ? de(e.getElementsByTagName("img")) : [];
        }(o), function (t) {
          var n = t.src;
          return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === Nt.transparentSrc) && (ze(n, "blob:") ? !e.isUploaded(n) && r(t) : !!ze(n, "data:") && r(t));
        }),
            a = H(s, function (e) {
          var o = e.src;
          if (xe(n, o)) return n[o].then(function (t) {
            return m(t) ? t : {
              image: e,
              blobInfo: t.blobInfo
            };
          });
          {
            var _r49 = function (e, t) {
              var n = function n() {
                return Promise.reject("Invalid data URI");
              };

              if (ze(t, "blob:")) {
                var _s28 = e.getByUri(t);

                return C(_s28) ? Promise.resolve(_s28) : (o = t, ze(o, "blob:") ? function (e) {
                  return fetch(e).then(function (e) {
                    return e.ok ? e.blob() : Promise.reject();
                  })["catch"](function () {
                    return Promise.reject("Cannot convert ".concat(e, " to Blob. Resource might not exist or is inaccessible."));
                  });
                }(o) : ze(o, "data:") ? (r = o, new Promise(function (e, t) {
                  dv(r).bind(function (_ref14) {
                    var e = _ref14.type,
                        t = _ref14.data,
                        n = _ref14.base64Encoded;
                    return cv(e, t, n);
                  }).fold(function () {
                    return t("Invalid data URI");
                  }, e);
                })) : Promise.reject("Unknown URI format")).then(function (t) {
                  return uv(t).then(function (o) {
                    return fv(o, !1, function (n) {
                      return M.some(gv(e, t, n));
                    }).getOrThunk(n);
                  });
                });
              }

              var o, r;
              return ze(t, "data:") ? pv(e, t).fold(n, function (e) {
                return Promise.resolve(e);
              }) : Promise.reject("Unknown image data format");
            }(t, o).then(function (t) {
              return delete n[o], {
                image: e,
                blobInfo: t
              };
            })["catch"](function (e) {
              return delete n[o], e;
            });

            return n[o] = _r49, _r49;
          }
        });
        return Promise.all(a);
      }
    };
  },
      Gy = function Gy() {
    var e = {};

    var t = function t(e, _t92) {
      return {
        status: e,
        resultUri: _t92
      };
    },
        n = function n(t) {
      return t in e;
    };

    return {
      hasBlobUri: n,
      getResultUri: function getResultUri(t) {
        var n = e[t];
        return n ? n.resultUri : null;
      },
      isPending: function isPending(t) {
        return !!n(t) && 1 === e[t].status;
      },
      isUploaded: function isUploaded(t) {
        return !!n(t) && 2 === e[t].status;
      },
      markPending: function markPending(n) {
        e[n] = t(1, null);
      },
      markUploaded: function markUploaded(n, o) {
        e[n] = t(2, o);
      },
      removeFailed: function removeFailed(t) {
        delete e[t];
      },
      destroy: function destroy() {
        e = {};
      }
    };
  };

  var Yy = 0;

  var Xy = function Xy(e, t) {
    var n = {},
        o = function o(e, n) {
      return new Promise(function (o, r) {
        var s = new XMLHttpRequest();
        s.open("POST", t.url), s.withCredentials = t.credentials, s.upload.onprogress = function (e) {
          n(e.loaded / e.total * 100);
        }, s.onerror = function () {
          r("Image upload failed due to a XHR Transport error. Code: " + s.status);
        }, s.onload = function () {
          if (s.status < 200 || s.status >= 300) return void r("HTTP Error: " + s.status);
          var e = JSON.parse(s.responseText);
          var n, a;
          e && m(e.location) ? o((n = t.basePath, a = e.location, n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText);
        };
        var a = new FormData();
        a.append("file", e.blob(), e.filename()), s.send(a);
      });
    },
        r = function r(e, t) {
      return {
        url: t,
        blobInfo: e,
        status: !0
      };
    },
        s = function s(e, t) {
      return {
        url: "",
        blobInfo: e,
        status: !1,
        error: t
      };
    },
        a = function a(e, t) {
      Bt.each(n[e], function (e) {
        e(t);
      }), delete n[e];
    };

    return !1 === w(t.handler) && (t.handler = o), {
      upload: function upload(i, l) {
        return t.url || t.handler !== o ? function (o, i) {
          return o = Bt.grep(o, function (t) {
            return !e.isUploaded(t.blobUri());
          }), Promise.all(Bt.map(o, function (o) {
            return e.isPending(o.blobUri()) ? function (e) {
              var t = e.blobUri();
              return new Promise(function (e) {
                n[t] = n[t] || [], n[t].push(e);
              });
            }(o) : function (t, n, o) {
              return e.markPending(t.blobUri()), new Promise(function (i) {
                var l, d;

                try {
                  var _c5 = function _c5() {
                    l && (l.close(), d = S);
                  },
                      _u3 = function _u3(n) {
                    _c5(), e.markUploaded(t.blobUri(), n), a(t.blobUri(), r(t, n)), i(r(t, n));
                  },
                      _f5 = function _f5(n) {
                    _c5(), e.removeFailed(t.blobUri()), a(t.blobUri(), s(t, n)), i(s(t, n));
                  };

                  d = function d(e) {
                    e < 0 || e > 100 || M.from(l).orThunk(function () {
                      return M.from(o).map(B);
                    }).each(function (t) {
                      l = t, t.progressBar.value(e);
                    });
                  }, n(t, d).then(_u3, function (e) {
                    _f5(m(e) ? {
                      message: e
                    } : e);
                  });
                } catch (e) {
                  i(s(t, e));
                }
              });
            }(o, t.handler, i);
          }));
        }(i, l) : new Promise(function (e) {
          e([]);
        });
      }
    };
  },
      Qy = function Qy(e) {
    return function () {
      return e.notificationManager.open({
        text: e.translate("Image uploading..."),
        type: "info",
        timeout: -1,
        progressBar: !0
      });
    };
  },
      Jy = function Jy(e, t) {
    return Xy(t, {
      url: sl(e),
      basePath: al(e),
      credentials: il(e),
      handler: ll(e)
    });
  },
      Zy = function Zy(e) {
    var t = function () {
      var e = [];

      var t = function t(e) {
        if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");

        var t = e.id || "blobid" + Yy++ + function () {
          var e = function e() {
            return Math.round(4294967295 * Math.random()).toString(36);
          };

          return "s" + new Date().getTime().toString(36) + e() + e() + e();
        }(),
            n = e.name || t,
            o = e.blob;

        var r;
        return {
          id: N(t),
          name: N(n),
          filename: N(e.filename || n + "." + (r = o.type, {
            "image/jpeg": "jpg",
            "image/jpg": "jpg",
            "image/gif": "gif",
            "image/png": "png",
            "image/apng": "apng",
            "image/avif": "avif",
            "image/svg+xml": "svg",
            "image/webp": "webp",
            "image/bmp": "bmp",
            "image/tiff": "tiff"
          }[r.toLowerCase()] || "dat")),
          blob: N(o),
          base64: N(e.base64),
          blobUri: N(e.blobUri || URL.createObjectURL(o)),
          uri: N(e.uri)
        };
      },
          n = function n(t) {
        return Q(e, t).getOrUndefined();
      },
          o = function o(e) {
        return n(function (t) {
          return t.id() === e;
        });
      };

      return {
        create: function create(e, n, o, r, s) {
          if (m(e)) return t({
            id: e,
            name: r,
            filename: s,
            blob: n,
            base64: o
          });
          if (f(e)) return t(e);
          throw new Error("Unknown input type");
        },
        add: function add(t) {
          o(t.id()) || e.push(t);
        },
        get: o,
        getByUri: function getByUri(e) {
          return n(function (t) {
            return t.blobUri() === e;
          });
        },
        getByData: function getByData(e, t) {
          return n(function (n) {
            return n.base64() === e && n.blob().type === t;
          });
        },
        findFirst: n,
        removeByUri: function removeByUri(t) {
          e = K(e, function (e) {
            return e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1);
          });
        },
        destroy: function destroy() {
          $(e, function (e) {
            URL.revokeObjectURL(e.blobUri());
          }), e = [];
        }
      };
    }();

    var n, o;

    var r = Gy(),
        s = [],
        a = function a(t) {
      return function (n) {
        return e.selection ? t(n) : [];
      };
    },
        i = function i(e, t, n) {
      var o = 0;

      do {
        o = e.indexOf(t, o), -1 !== o && (e = e.substring(0, o) + n + e.substr(o + t.length), o += n.length - t.length + 1);
      } while (-1 !== o);

      return e;
    },
        l = function l(e, t, n) {
      var o = "src=\"".concat(n, "\"").concat(n === Nt.transparentSrc ? ' data-mce-placeholder="1"' : "");
      return e = i(e, "src=\"".concat(t, "\""), o), i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"');
    },
        d = function d(t, n) {
      $(e.undoManager.data, function (e) {
        "fragmented" === e.type ? e.fragments = H(e.fragments, function (e) {
          return l(e, t, n);
        }) : e.content = l(e.content, t, n);
      });
    },
        c = function c() {
      return n || (n = Jy(e, r)), p().then(a(function (o) {
        var r = H(o, function (e) {
          return e.blobInfo;
        });
        return n.upload(r, Qy(e)).then(a(function (n) {
          var r = [];
          var s = !1;
          var a = H(n, function (n, a) {
            var i = o[a].blobInfo,
                l = o[a].image;
            var c = !1;
            return n.status && nl(e) ? (n.url && !Ue(l.src, n.url) && (s = !0), t.removeByUri(l.src), dy(e) || function (t, n) {
              var o = e.convertURL(n, "src");
              var r;
              d(t.src, n), Wt(fn(t), {
                src: tl(e) ? (r = n, r + (-1 === r.indexOf("?") ? "?" : "&") + new Date().getTime()) : n,
                "data-mce-src": o
              });
            }(l, n.url)) : n.error && (n.error.remove && (d(l.getAttribute("src"), Nt.transparentSrc), r.push(l), c = !0), function (e, t) {
              jy(e, ra.translate(["Failed to upload image: {0}", t]));
            }(e, n.error.message)), {
              element: l,
              status: n.status,
              uploadUri: n.url,
              blobInfo: i,
              removed: c
            };
          });
          return r.length > 0 && !dy(e) ? e.undoManager.transact(function () {
            $(r, function (n) {
              e.dom.remove(n), t.removeByUri(n.src);
            });
          }) : s && e.undoManager.dispatchChange(), a;
        }));
      }));
    },
        u = function u() {
      return el(e) ? c() : Promise.resolve([]);
    },
        g = function g(e) {
      return te(s, function (t) {
        return t(e);
      });
    },
        p = function p() {
      return o || (o = Ky(r, t)), o.findAll(e.getBody(), g).then(a(function (t) {
        var n = K(t, function (t) {
          return !m(t) || (jy(e, t), !1);
        });
        return dy(e) || $(n, function (e) {
          d(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src");
        }), n;
      }));
    },
        h = function h(n) {
      return n.replace(/src="(blob:[^"]+)"/g, function (n, o) {
        var s = r.getResultUri(o);
        if (s) return 'src="' + s + '"';
        var a = t.getByUri(o);
        return a || (a = Y(e.editorManager.get(), function (e, t) {
          return e || t.editorUpload && t.editorUpload.blobCache.getByUri(o);
        }, null)), a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n;
      });
    };

    return e.on("SetContent", function () {
      el(e) ? u() : p();
    }), e.on("RawSaveContent", function (e) {
      e.content = h(e.content);
    }), e.on("GetContent", function (e) {
      e.source_view || "raw" === e.format || "tree" === e.format || (e.content = h(e.content));
    }), e.on("PostRender", function () {
      e.parser.addNodeFilter("img", function (e) {
        $(e, function (e) {
          var n = e.attr("src");
          if (t.getByUri(n)) return;
          var o = r.getResultUri(n);
          o && e.attr("src", o);
        });
      });
    }), {
      blobCache: t,
      addFilter: function addFilter(e) {
        s.push(e);
      },
      uploadImages: c,
      uploadImagesAuto: u,
      scanForImages: p,
      destroy: function destroy() {
        t.destroy(), r.destroy(), o = n = null;
      }
    };
  },
      eC = {
    remove_similar: !0,
    inherit: !1
  },
      tC = _objectSpread({
    selector: "td,th"
  }, eC),
      nC = {
    tablecellbackgroundcolor: _objectSpread({
      styles: {
        backgroundColor: "%value"
      }
    }, tC),
    tablecellverticalalign: _objectSpread({
      styles: {
        "vertical-align": "%value"
      }
    }, tC),
    tablecellbordercolor: _objectSpread({
      styles: {
        borderColor: "%value"
      }
    }, tC),
    tablecellclass: _objectSpread({
      classes: ["%value"]
    }, tC),
    tableclass: _objectSpread({
      selector: "table",
      classes: ["%value"]
    }, eC),
    tablecellborderstyle: _objectSpread({
      styles: {
        borderStyle: "%value"
      }
    }, tC),
    tablecellborderwidth: _objectSpread({
      styles: {
        borderWidth: "%value"
      }
    }, tC)
  },
      oC = N(nC),
      rC = Bt.each,
      sC = Qs.DOM,
      aC = function aC(e, t) {
    var n, o, r;

    var s = t && t.schema || Bs({}),
        a = function a(e) {
      o = "string" == typeof e ? {
        name: e,
        classes: [],
        attrs: {}
      } : e;
      var t = sC.create(o.name);
      return function (e, t) {
        t.classes.length && sC.addClass(e, t.classes.join(" ")), sC.setAttribs(e, t.attrs);
      }(t, o), t;
    },
        i = function i(e, t, n) {
      var o, r;

      var l = t.length > 0 && t[0],
          d = l && l.name,
          c = function (e, t) {
        var n = "string" != typeof e ? e.nodeName.toLowerCase() : e,
            o = s.getElementRule(n),
            r = o && o.parentsRequired;
        return !(!r || !r.length) && (t && -1 !== Bt.inArray(r, t) ? t : r[0]);
      }(e, d);

      if (c) d === c ? (r = t[0], t = t.slice(1)) : r = c;else if (l) r = t[0], t = t.slice(1);else if (!n) return e;
      return r && (o = a(r), o.appendChild(e)), n && (o || (o = sC.create("div"), o.appendChild(e)), Bt.each(n, function (t) {
        var n = a(t);
        o.insertBefore(n, e);
      })), i(o, t, r && r.siblings);
    };

    return e && e.length ? (o = e[0], n = a(o), r = sC.create("div"), r.appendChild(i(n, e.slice(1), o.siblings)), r) : "";
  },
      iC = function iC(e) {
    var t;
    var n = {
      classes: [],
      attrs: {}
    };
    return "*" !== (e = n.selector = Bt.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, o, r, s) {
      switch (t) {
        case "#":
          n.attrs.id = o;
          break;

        case ".":
          n.classes.push(o);
          break;

        case ":":
          -1 !== Bt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o);
      }

      if ("[" === r) {
        var _e98 = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);

        _e98 && (n.attrs[_e98[1]] = _e98[2]);
      }

      return "";
    })), n.name = t || "div", n;
  },
      lC = function lC(e, t) {
    var n,
        o,
        r,
        s = "",
        a = Tl(e);
    if ("" === a) return "";

    var i = function i(e) {
      return e.replace(/%(\w+)/g, "");
    };

    if ("string" == typeof t) {
      if (!(t = e.formatter.get(t))) return;
      t = t[0];
    }

    if ("preview" in t) {
      var _e99 = we(t, "preview");

      if (Dt(_e99, !1)) return "";
      a = _e99.getOr(a);
    }

    n = t.block || t.inline || "span";
    var l = (d = t.selector) && "string" == typeof d ? (d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Bt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
      var t = Bt.map(e.split(/(?:~\+|~|\+)/), iC),
          n = t.pop();
      return t.length && (n.siblings = t), n;
    }).reverse()) : [];
    var d;
    l.length ? (l[0].name || (l[0].name = n), n = t.selector, o = aC(l, e)) : o = aC([n], e);
    var c = sC.select(n, o)[0] || o.firstChild;
    return rC(t.styles, function (e, t) {
      var n = i(e);
      n && sC.setStyle(c, t, n);
    }), rC(t.attributes, function (e, t) {
      var n = i(e);
      n && sC.setAttrib(c, t, n);
    }), rC(t.classes, function (e) {
      var t = i(e);
      sC.hasClass(c, t) || sC.addClass(c, t);
    }), e.dispatch("PreviewFormats"), sC.setStyles(o, {
      position: "absolute",
      left: -65535
    }), e.getBody().appendChild(o), r = sC.getStyle(e.getBody(), "fontSize", !0), r = /px$/.test(r) ? parseInt(r, 10) : 0, rC(a.split(" "), function (t) {
      var n = sC.getStyle(c, t, !0);

      if (!("background-color" === t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = sC.getStyle(e.getBody(), t, !0), "#ffffff" === eu(n).toLowerCase()) || "color" === t && "#000000" === eu(n).toLowerCase())) {
        if ("font-size" === t && /em|%$/.test(n)) {
          if (0 === r) return;
          n = parseFloat(n) / (/%$/.test(n) ? 100 : 1) * r + "px";
        }

        "border" === t && n && (s += "padding:0 2px;"), s += t + ":" + n + ";";
      }
    }), e.dispatch("AfterPreviewFormats"), sC.remove(o), s;
  },
      dC = function dC(e) {
    var t = function (e) {
      var t = {},
          n = function n(e, o) {
        e && (m(e) ? (p(o) || (o = [o]), $(o, function (e) {
          v(e.deep) && (e.deep = !gu(e)), v(e.split) && (e.split = !gu(e) || pu(e)), v(e.remove) && gu(e) && !pu(e) && (e.remove = "none"), gu(e) && pu(e) && (e.mixed = !0, e.block_expand = !0), m(e.classes) && (e.classes = e.classes.split(/\s+/));
        }), t[e] = o) : fe(e, function (e, t) {
          n(t, e);
        }));
      };

      return n(function (e) {
        var t = e.dom,
            n = e.schema.type,
            o = {
          valigntop: [{
            selector: "td,th",
            styles: {
              verticalAlign: "top"
            }
          }],
          valignmiddle: [{
            selector: "td,th",
            styles: {
              verticalAlign: "middle"
            }
          }],
          valignbottom: [{
            selector: "td,th",
            styles: {
              verticalAlign: "bottom"
            }
          }],
          alignleft: [{
            selector: "figure.image",
            collapsed: !1,
            classes: "align-left",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          }, {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "left"
            },
            inherit: !1,
            preview: !1
          }, {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              "float": "left"
            },
            preview: "font-family font-size"
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "0px",
              marginRight: "auto"
            },
            onformat: function onformat(e) {
              t.setStyle(e, "float", null);
            },
            preview: "font-family font-size"
          }],
          aligncenter: [{
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "center"
            },
            inherit: !1,
            preview: "font-family font-size"
          }, {
            selector: "figure.image",
            collapsed: !1,
            classes: "align-center",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          }, {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: "font-family font-size"
          }],
          alignright: [{
            selector: "figure.image",
            collapsed: !1,
            classes: "align-right",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          }, {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "right"
            },
            inherit: !1,
            preview: "font-family font-size"
          }, {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              "float": "right"
            },
            preview: "font-family font-size"
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginRight: "0px",
              marginLeft: "auto"
            },
            onformat: function onformat(e) {
              t.setStyle(e, "float", null);
            },
            preview: "font-family font-size"
          }],
          alignjustify: [{
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "justify"
            },
            inherit: !1,
            preview: "font-family font-size"
          }],
          bold: [{
            inline: "strong",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }, {
            inline: "span",
            styles: {
              fontWeight: "bold"
            }
          }, {
            inline: "b",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }],
          italic: [{
            inline: "em",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }, {
            inline: "span",
            styles: {
              fontStyle: "italic"
            }
          }, {
            inline: "i",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }],
          underline: [{
            inline: "span",
            styles: {
              textDecoration: "underline"
            },
            exact: !0
          }, {
            inline: "u",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }],
          strikethrough: function () {
            var e = {
              inline: "span",
              styles: {
                textDecoration: "line-through"
              },
              exact: !0
            },
                t = {
              inline: "strike",
              remove: "all",
              preserve_attributes: ["class", "style"]
            },
                o = {
              inline: "s",
              remove: "all",
              preserve_attributes: ["class", "style"]
            };
            return "html4" !== n ? [o, e, t] : [e, o, t];
          }(),
          forecolor: {
            inline: "span",
            styles: {
              color: "%value"
            },
            links: !0,
            remove_similar: !0,
            clear_child_styles: !0
          },
          hilitecolor: {
            inline: "span",
            styles: {
              backgroundColor: "%value"
            },
            links: !0,
            remove_similar: !0,
            clear_child_styles: !0
          },
          fontname: {
            inline: "span",
            toggle: !1,
            styles: {
              fontFamily: "%value"
            },
            clear_child_styles: !0
          },
          fontsize: {
            inline: "span",
            toggle: !1,
            styles: {
              fontSize: "%value"
            },
            clear_child_styles: !0
          },
          lineheight: {
            selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
            styles: {
              lineHeight: "%value"
            }
          },
          fontsize_class: {
            inline: "span",
            attributes: {
              "class": "%value"
            }
          },
          blockquote: {
            block: "blockquote",
            wrapper: !0,
            remove: "all"
          },
          subscript: {
            inline: "sub"
          },
          superscript: {
            inline: "sup"
          },
          code: {
            inline: "code"
          },
          link: {
            inline: "a",
            selector: "a",
            remove: "all",
            split: !0,
            deep: !0,
            onmatch: function onmatch(e, t, n) {
              return Co(e) && e.hasAttribute("href");
            },
            onformat: function onformat(e, n, o) {
              Bt.each(o, function (n, o) {
                t.setAttrib(e, o, n);
              });
            }
          },
          lang: {
            inline: "span",
            clear_child_styles: !0,
            remove_similar: !0,
            attributes: {
              lang: "%value",
              "data-mce-lang": function dataMceLang(e) {
                var t;
                return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null;
              }
            }
          },
          removeformat: [{
            selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
            remove: "all",
            split: !0,
            expand: !1,
            block_expand: !0,
            deep: !0
          }, {
            selector: "span",
            attributes: ["style", "class"],
            remove: "empty",
            split: !0,
            expand: !1,
            deep: !0
          }, {
            selector: "*",
            attributes: ["style", "class"],
            split: !1,
            expand: !1,
            deep: !0
          }]
        };
        return Bt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), function (e) {
          o[e] = {
            block: e,
            remove: "all"
          };
        }), o;
      }(e)), n(oC()), n(Ol(e)), {
        get: function get(e) {
          return C(e) ? t[e] : t;
        },
        has: function has(e) {
          return xe(t, e);
        },
        register: n,
        unregister: function unregister(e) {
          return e && t[e] && delete t[e], t;
        }
      };
    }(e),
        n = ea(null);

    return function (e) {
      e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");

      for (var _t93 = 1; _t93 <= 6; _t93++) {
        e.addShortcut("access+" + _t93, "", ["FormatBlock", !1, "h" + _t93]);
      }

      e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
    }(e), function (e) {
      e.on("mouseup keydown", function (t) {
        (function (e, t) {
          var n = e.selection,
              o = e.getBody();
          xh(e, null, !1), 8 !== t && 46 !== t || !n.isCollapsed() || n.getStart().innerHTML !== hh || xh(e, Bc(o, n.getStart())), 37 !== t && 39 !== t || xh(e, Bc(o, n.getStart()));
        })(e, t.keyCode);
      });
    }(e), {
      get: t.get,
      has: t.has,
      register: t.register,
      unregister: t.unregister,
      apply: function apply(t, n, o) {
        (function (e, t, n, o) {
          uy(e).formatter.apply(t, n, o);
        })(e, t, n, o);
      },
      remove: function remove(t, n, o, r) {
        (function (e, t, n, o, r) {
          uy(e).formatter.remove(t, n, o, r);
        })(e, t, n, o, r);
      },
      toggle: function toggle(t, n, o) {
        (function (e, t, n, o) {
          uy(e).formatter.toggle(t, n, o);
        })(e, t, n, o);
      },
      match: function match(t, n, o, r) {
        return function (e, t, n, o, r) {
          return uy(e).formatter.match(t, n, o, r);
        }(e, t, n, o, r);
      },
      closest: function closest(t) {
        return function (e, t) {
          return uy(e).formatter.closest(t);
        }(e, t);
      },
      matchAll: function matchAll(t, n) {
        return function (e, t, n) {
          return uy(e).formatter.matchAll(t, n);
        }(e, t, n);
      },
      matchNode: function matchNode(t, n, o, r) {
        return function (e, t, n, o, r) {
          return uy(e).formatter.matchNode(t, n, o, r);
        }(e, t, n, o, r);
      },
      canApply: function canApply(t) {
        return function (e, t) {
          return uy(e).formatter.canApply(t);
        }(e, t);
      },
      formatChanged: function formatChanged(t, o, r, s) {
        return function (e, t, n, o, r, s) {
          return uy(e).formatter.formatChanged(t, n, o, r, s);
        }(e, n, t, o, r, s);
      },
      getCssText: O(lC, e)
    };
  },
      cC = function cC(e) {
    switch (e.toLowerCase()) {
      case "undo":
      case "redo":
      case "mcefocus":
        return !0;

      default:
        return !1;
    }
  },
      uC = function uC(e) {
    var t = aa(),
        n = ea(0),
        o = ea(0),
        r = {
      data: [],
      typing: !1,
      beforeChange: function beforeChange() {
        (function (e, t, n) {
          uy(e).undoManager.beforeChange(t, n);
        })(e, n, t);
      },
      add: function add(s, a) {
        return function (e, t, n, o, r, s, a) {
          return uy(e).undoManager.add(t, n, o, r, s, a);
        }(e, r, o, n, t, s, a);
      },
      dispatchChange: function dispatchChange() {
        e.setDirty(!0), e.dispatch("change", {
          level: ey(e),
          lastLevel: ae(r.data, o.get()).getOrUndefined()
        });
      },
      undo: function undo() {
        return function (e, t, n, o) {
          return uy(e).undoManager.undo(t, n, o);
        }(e, r, n, o);
      },
      redo: function redo() {
        return function (e, t, n) {
          return uy(e).undoManager.redo(t, n);
        }(e, o, r.data);
      },
      clear: function clear() {
        (function (e, t, n) {
          uy(e).undoManager.clear(t, n);
        })(e, r, o);
      },
      reset: function reset() {
        (function (e, t) {
          uy(e).undoManager.reset(t);
        })(e, r);
      },
      hasUndo: function hasUndo() {
        return function (e, t, n) {
          return uy(e).undoManager.hasUndo(t, n);
        }(e, r, o);
      },
      hasRedo: function hasRedo() {
        return function (e, t, n) {
          return uy(e).undoManager.hasRedo(t, n);
        }(e, r, o);
      },
      transact: function transact(t) {
        return function (e, t, n, o) {
          return uy(e).undoManager.transact(t, n, o);
        }(e, r, n, t);
      },
      ignore: function ignore(t) {
        (function (e, t, n) {
          uy(e).undoManager.ignore(t, n);
        })(e, n, t);
      },
      extra: function extra(t, n) {
        (function (e, t, n, o, r) {
          uy(e).undoManager.extra(t, n, o, r);
        })(e, r, o, t, n);
      }
    };
    return dy(e) || function (e, t, n) {
      var o = ea(!1),
          r = function r(e) {
        ay(t, !1, n), t.add({}, e);
      };

      e.on("init", function () {
        t.add();
      }), e.on("BeforeExecCommand", function (e) {
        var o = e.command;
        cC(o) || (iy(t, n), t.beforeChange());
      }), e.on("ExecCommand", function (e) {
        var t = e.command;
        cC(t) || r(e);
      }), e.on("ObjectResizeStart cut", function () {
        t.beforeChange();
      }), e.on("SaveContent ObjectResized blur", r), e.on("dragend", r), e.on("keyup", function (n) {
        var s = n.keyCode;
        n.isDefaultPrevented() || ((s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s || n.ctrlKey) && (r(), e.nodeChanged()), 46 !== s && 8 !== s || e.nodeChanged(), o.get() && t.typing && !1 === ry(ey(e), t.data[0]) && (!1 === e.isDirty() && e.setDirty(!0), e.dispatch("TypingUndo"), o.set(!1), e.nodeChanged()));
      }), e.on("keydown", function (e) {
        var s = e.keyCode;
        if (e.isDefaultPrevented()) return;
        if (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s) return void (t.typing && r(e));
        var a = e.ctrlKey && !e.altKey || e.metaKey;
        !(s < 16 || s > 20) || 224 === s || 91 === s || t.typing || a || (t.beforeChange(), ay(t, !0, n), t.add({}, e), o.set(!0));
      }), e.on("mousedown", function (e) {
        t.typing && r(e);
      }), e.on("input", function (e) {
        var t;
        e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data || function (e) {
          return "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType;
        }(e)) && r(e);
      }), e.on("AddUndo Undo Redo ClearUndos", function (t) {
        t.isDefaultPrevented() || e.nodeChanged();
      });
    }(e, r, n), function (e) {
      e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo");
    }(e), r;
  },
      mC = [9, 27, om.HOME, om.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, om.DOWN, om.UP, om.LEFT, om.RIGHT].concat(Nt.browser.isFirefox() ? [224] : []),
      fC = "data-mce-placeholder",
      gC = function gC(e) {
    return "keydown" === e.type || "keyup" === e.type;
  },
      pC = function pC(e) {
    var t = e.keyCode;
    return t === om.BACKSPACE || t === om.DELETE;
  },
      hC = function hC(e, t) {
    return {
      from: e,
      to: t
    };
  },
      bC = function bC(e, t) {
    var n = fn(e),
        o = fn(t.container());
    return cp(n, o).map(function (e) {
      return function (e, t) {
        return {
          block: e,
          position: t
        };
      }(e, t);
    });
  },
      vC = function vC(e) {
    var t = Rn(e);
    return J(t, er).fold(N(t), function (e) {
      return t.slice(0, e);
    });
  },
      yC = function yC(e) {
    var t = vC(e);
    return $(t, no), t;
  },
      CC = function CC(e, t) {
    var n = bg(t, e);
    return Q(n.reverse(), function (e) {
      return os(e);
    }).each(no);
  },
      wC = function wC(e, t, n, o) {
    if (os(n)) return wr(n), Rc(n.dom);
    0 === K(En(o), function (e) {
      return !os(e);
    }).length && os(t) && Xn(o, un("br"));
    var r = Nc(n.dom, ti.before(o.dom));
    return $(yC(t), function (e) {
      Xn(o, e);
    }), CC(e, t), r;
  },
      xC = function xC(e, t, n) {
    if (os(n)) return no(n), os(t) && wr(t), Rc(t.dom);
    var o = Ac(n.dom);
    return $(yC(t), function (e) {
      Zn(n, e);
    }), CC(e, t), o;
  },
      kC = function kC(e, t) {
    _c(e, t.dom).map(function (e) {
      return e.getNode();
    }).map(fn).filter(nr).each(no);
  },
      SC = function SC(e, t, n) {
    return kC(!0, t), kC(!1, n), function (e, t) {
      return yn(t, e) ? function (e, t) {
        var n = bg(t, e);
        return M.from(n[n.length - 1]);
      }(t, e) : M.none();
    }(t, n).fold(O(xC, e, t, n), O(wC, e, t, n));
  },
      _C = function _C(e, t, n, o) {
    return t ? SC(e, o, n) : SC(e, n, o);
  },
      EC = function EC(e, t) {
    var n = fn(e.getBody()),
        o = function (e, t, n) {
      return n.collapsed ? function (e, t, n) {
        var o = bC(e, ti.fromRangeStart(n)),
            r = o.bind(function (n) {
          return xc(t, e, n.position).bind(function (n) {
            return bC(e, n).map(function (n) {
              return function (e, t, n) {
                return Po(n.position.getNode()) && !1 === os(n.block) ? _c(!1, n.block.dom).bind(function (o) {
                  return o.isEqual(n.position) ? xc(t, e, o).bind(function (t) {
                    return bC(e, t);
                  }) : M.some(n);
                }).getOr(n) : n;
              }(e, t, n);
            });
          });
        });
        return Pt(o, r, hC).filter(function (e) {
          return function (e) {
            return !1 === vn(e.from.block, e.to.block);
          }(e) && function (e) {
            return kn(e.from.block).bind(function (t) {
              return kn(e.to.block).filter(function (e) {
                return vn(t, e);
              });
            }).isSome();
          }(e) && function (e) {
            return !1 === Io(e.from.block.dom) && !1 === Io(e.to.block.dom);
          }(e);
        });
      }(e, t, n) : M.none();
    }(n.dom, t, e.selection.getRng()).map(function (o) {
      return function () {
        _C(n, t, o.from.block, o.to.block).each(function (t) {
          e.selection.setRng(t.toRange());
        });
      };
    });

    return o;
  },
      NC = function NC(e, t) {
    var n = fn(t),
        o = O(vn, e);
    return $o(n, ir, o).isSome();
  },
      RC = function RC(e) {
    var t = fn(e.getBody());
    return function (e, t) {
      var n = Nc(e.dom, ti.fromRangeStart(t)).isNone(),
          o = Ec(e.dom, ti.fromRangeEnd(t)).isNone();
      return !function (e, t) {
        return NC(e, t.startContainer) || NC(e, t.endContainer);
      }(e, t) && n && o;
    }(t, e.selection.getRng()) ? function (e) {
      return M.some(function () {
        e.setContent(""), e.selection.setCursorLocation();
      });
    }(e) : function (e, t) {
      var n = t.getRng();
      return Pt(cp(e, fn(n.startContainer)), cp(e, fn(n.endContainer)), function (o, r) {
        return !1 === vn(o, r) ? M.some(function () {
          n.deleteContents(), _C(e, !0, o, r).each(function (e) {
            t.setRng(e.toRange());
          });
        }) : M.none();
      }).getOr(M.none());
    }(t, e.selection);
  },
      AC = function AC(e, t) {
    return e.selection.isCollapsed() ? M.none() : RC(e);
  },
      OC = Mo,
      TC = Io,
      BC = function BC(e, t, n, o, r) {
    return M.from(t._selectionOverrides.showCaret(e, n, o, r));
  },
      DC = function DC(e, t) {
    return e.dispatch("BeforeObjectSelected", {
      target: t
    }).isDefaultPrevented() ? M.none() : M.some(function (e) {
      var t = e.ownerDocument.createRange();
      return t.selectNode(e), t;
    }(t));
  },
      PC = function PC(e, t, n) {
    return t.collapsed ? function (e, t, n) {
      var o = tc(1, e.getBody(), t),
          r = ti.fromRangeStart(o),
          s = r.getNode();
      if (Dd(s)) return BC(1, e, s, !r.isAtEnd(), !1);
      var a = r.getNode(!0);
      if (Dd(a)) return BC(1, e, a, !1, !1);
      var i = e.dom.getParent(r.getNode(), function (e) {
        return TC(e) || OC(e);
      });
      return Dd(i) ? BC(1, e, i, !1, n) : M.none();
    }(e, t, n).getOr(t) : t;
  },
      LC = function LC(e) {
    return gg(e) || cg(e);
  },
      MC = function MC(e) {
    return pg(e) || ug(e);
  },
      IC = function IC(e, t, n, o, r, s) {
    BC(o, e, s.getNode(!r), r, !0).each(function (n) {
      if (t.collapsed) {
        var _e100 = t.cloneRange();

        r ? _e100.setEnd(n.startContainer, n.startOffset) : _e100.setStart(n.endContainer, n.endOffset), _e100.deleteContents();
      } else t.deleteContents();

      e.selection.setRng(n);
    }), function (e, t) {
      Ro(t) && 0 === t.data.length && e.remove(t);
    }(e.dom, n);
  },
      FC = function FC(e, t) {
    return function (e, t) {
      var n = e.selection.getRng();
      if (!Ro(n.commonAncestorContainer)) return M.none();
      var o = t ? ic.Forwards : ic.Backwards,
          r = vc(e.getBody()),
          s = O(sc, t ? r.next : r.prev),
          a = t ? LC : MC,
          i = oc(o, e.getBody(), n),
          l = rp(t, s(i));
      if (!l || !ac(i, l)) return M.none();
      if (a(l)) return M.some(function () {
        return IC(e, n, i.getNode(), o, t, l);
      });
      var d = s(l);
      return d && a(d) && ac(l, d) ? M.some(function () {
        return IC(e, n, i.getNode(), o, t, d);
      }) : M.none();
    }(e, t);
  },
      UC = function UC(e, t) {
    var n = e.getBody();
    return t ? Rc(n).filter(gg) : Ac(n).filter(pg);
  },
      zC = function zC(e) {
    var t = e.selection.getRng();
    return !t.collapsed && (UC(e, !0).exists(function (e) {
      return e.isEqual(ti.fromRangeStart(t));
    }) || UC(e, !1).exists(function (e) {
      return e.isEqual(ti.fromRangeEnd(t));
    }));
  },
      jC = Ei([{
    remove: ["element"]
  }, {
    moveToElement: ["element"]
  }, {
    moveToPosition: ["position"]
  }]),
      VC = function VC(e, t, n) {
    return xc(t, e, n).bind(function (o) {
      return r = o.getNode(), ir(fn(r)) || sr(fn(r)) || function (e, t, n, o) {
        var r = function r(t) {
          return tr(fn(t)) && !Gd(n, o, e);
        };

        return nc(!t, n).fold(function () {
          return nc(t, o).fold(P, r);
        }, r);
      }(e, t, n, o) ? M.none() : t && Io(o.getNode()) || !1 === t && Io(o.getNode(!0)) ? function (e, t, n, o) {
        var r = o.getNode(!1 === t);
        return cp(fn(e), fn(n.getNode())).map(function (e) {
          return os(e) ? jC.remove(e.dom) : jC.moveToElement(r);
        }).orThunk(function () {
          return M.some(jC.moveToElement(r));
        });
      }(e, t, n, o) : t && pg(n) || !1 === t && gg(n) ? M.some(jC.moveToPosition(o)) : M.none();
      var r;
    });
  },
      HC = function HC(e, t) {
    return M.from(Up(e.getBody(), t));
  },
      $C = function $C(e, t) {
    var n = e.selection.getNode();
    return HC(e, n).filter(Io).fold(function () {
      return function (e, t, n) {
        var o = tc(t ? 1 : -1, e, n),
            r = ti.fromRangeStart(o),
            s = fn(e);
        return !1 === t && pg(r) ? M.some(jC.remove(r.getNode(!0))) : t && gg(r) ? M.some(jC.remove(r.getNode())) : !1 === t && gg(r) && Ag(s, r) ? Og(s, r).map(function (e) {
          return jC.remove(e.getNode());
        }) : t && pg(r) && Rg(s, r) ? Tg(s, r).map(function (e) {
          return jC.remove(e.getNode());
        }) : function (e, t, n) {
          return function (e, t) {
            var n = t.getNode(!1 === e),
                o = e ? "after" : "before";
            return Co(n) && n.getAttribute("data-mce-caret") === o;
          }(t, n) ? function (e, t) {
            return e && Io(t.nextSibling) ? M.some(jC.moveToElement(t.nextSibling)) : !1 === e && Io(t.previousSibling) ? M.some(jC.moveToElement(t.previousSibling)) : M.none();
          }(t, n.getNode(!1 === t)).fold(function () {
            return VC(e, t, n);
          }, M.some) : VC(e, t, n).bind(function (t) {
            return function (e, t, n) {
              return n.fold(function (e) {
                return M.some(jC.remove(e));
              }, function (e) {
                return M.some(jC.moveToElement(e));
              }, function (n) {
                return Gd(t, n, e) ? M.none() : M.some(jC.moveToPosition(n));
              });
            }(e, n, t);
          });
        }(e, t, r);
      }(e.getBody(), t, e.selection.getRng()).map(function (n) {
        return function () {
          return n.fold(function (e, t) {
            return function (n) {
              return e._selectionOverrides.hideFakeCaret(), ep(e, t, fn(n)), !0;
            };
          }(e, t), function (e, t) {
            return function (n) {
              var o = t ? ti.before(n) : ti.after(n);
              return e.selection.setRng(o.toRange()), !0;
            };
          }(e, t), function (e) {
            return function (t) {
              return e.selection.setRng(t.toRange()), !0;
            };
          }(e));
        };
      });
    }, function () {
      return M.some(S);
    });
  },
      qC = function qC(e) {
    var t = e.dom,
        n = e.selection,
        o = Up(e.getBody(), n.getNode());

    if (Mo(o) && t.isBlock(o) && t.isEmpty(o)) {
      var _e101 = t.create("br", {
        "data-mce-bogus": "1"
      });

      t.setHTML(o, ""), o.appendChild(_e101), n.setRng(ti.before(_e101).toRange());
    }

    return !0;
  },
      WC = function WC(e, t) {
    return e.selection.isCollapsed() ? $C(e, t) : function (e, t) {
      var n = e.selection.getNode();
      return Io(n) && !Fo(n) ? HC(e, n.parentNode).filter(Io).fold(function () {
        return M.some(function () {
          var n;
          n = fn(e.getBody()), $(hr(n, ".mce-offscreen-selection"), no), ep(e, t, fn(e.selection.getNode())), up(e);
        });
      }, function () {
        return M.some(S);
      }) : zC(e) ? M.some(function () {
        fp(e, e.selection.getRng(), fn(e.getBody()));
      }) : M.none();
    }(e, t);
  },
      KC = function KC(e, t) {
    return e.selection.isCollapsed() ? function (e, t) {
      var n = ti.fromRangeStart(e.selection.getRng());
      return xc(t, e.getBody(), n).filter(function (e) {
        return t ? lg(e) : dg(e);
      }).bind(function (e) {
        return M.from(Yd(t ? 0 : -1, e));
      }).map(function (t) {
        return function () {
          return e.selection.select(t);
        };
      });
    }(e, t) : M.none();
  },
      GC = Ro,
      YC = function YC(e) {
    return GC(e) && e.data[0] === kr;
  },
      XC = function XC(e) {
    return GC(e) && e.data[e.data.length - 1] === kr;
  },
      QC = function QC(e) {
    return e.ownerDocument.createTextNode(kr);
  },
      JC = function JC(e, t) {
    return e ? function (e) {
      if (GC(e.previousSibling)) return XC(e.previousSibling) || e.previousSibling.appendData(kr), e.previousSibling;
      if (GC(e)) return YC(e) || e.insertData(0, kr), e;
      {
        var _t94 = QC(e);

        return e.parentNode.insertBefore(_t94, e), _t94;
      }
    }(t) : function (e) {
      if (GC(e.nextSibling)) return YC(e.nextSibling) || e.nextSibling.insertData(0, kr), e.nextSibling;
      if (GC(e)) return XC(e) || e.appendData(kr), e;
      {
        var _t95 = QC(e);

        return e.nextSibling ? e.parentNode.insertBefore(_t95, e.nextSibling) : e.parentNode.appendChild(_t95), _t95;
      }
    }(t);
  },
      ZC = O(JC, !0),
      ew = O(JC, !1),
      tw = function tw(e, t) {
    return Ro(e.container()) ? JC(t, e.container()) : JC(t, e.getNode());
  },
      nw = function nw(e, t) {
    var n = t.get();
    return n && e.container() === n && Ar(n);
  },
      ow = function ow(e, t) {
    return t.fold(function (t) {
      Ed(e.get());
      var n = ZC(t);
      return e.set(n), M.some(ti(n, n.length - 1));
    }, function (t) {
      return Rc(t).map(function (t) {
        if (nw(t, e)) return ti(e.get(), 1);
        {
          Ed(e.get());

          var _n78 = tw(t, !0);

          return e.set(_n78), ti(_n78, 1);
        }
      });
    }, function (t) {
      return Ac(t).map(function (t) {
        if (nw(t, e)) return ti(e.get(), e.get().length - 1);
        {
          Ed(e.get());

          var _n79 = tw(t, !1);

          return e.set(_n79), ti(_n79, _n79.length - 1);
        }
      });
    }, function (t) {
      Ed(e.get());
      var n = ew(t);
      return e.set(n), M.some(ti(n, 1));
    });
  },
      rw = function rw(e, t) {
    for (var _n80 = 0; _n80 < e.length; _n80++) {
      var _o61 = e[_n80].apply(null, t);

      if (_o61.isSome()) return _o61;
    }

    return M.none();
  },
      sw = Ei([{
    before: ["element"]
  }, {
    start: ["element"]
  }, {
    end: ["element"]
  }, {
    after: ["element"]
  }]),
      aw = function aw(e, t) {
    return Kd(t, e) || e;
  },
      iw = function iw(e, t, n) {
    var o = sp(n),
        r = aw(t, o.container());
    return op(e, r, o).fold(function () {
      return Ec(r, o).bind(O(op, e, r)).map(function (e) {
        return sw.before(e);
      });
    }, M.none);
  },
      lw = function lw(e, t) {
    return null === Bc(e, t);
  },
      dw = function dw(e, t, n) {
    return op(e, t, n).filter(O(lw, t));
  },
      cw = function cw(e, t, n) {
    var o = ap(n);
    return dw(e, t, o).bind(function (e) {
      return Nc(e, o).isNone() ? M.some(sw.start(e)) : M.none();
    });
  },
      uw = function uw(e, t, n) {
    var o = sp(n);
    return dw(e, t, o).bind(function (e) {
      return Ec(e, o).isNone() ? M.some(sw.end(e)) : M.none();
    });
  },
      mw = function mw(e, t, n) {
    var o = ap(n),
        r = aw(t, o.container());
    return op(e, r, o).fold(function () {
      return Nc(r, o).bind(O(op, e, r)).map(function (e) {
        return sw.after(e);
      });
    }, M.none);
  },
      fw = function fw(e) {
    return !1 === (t = pw(e), "rtl" === Qs.DOM.getStyle(t, "direction", !0) || function (e) {
      return tp.test(e);
    }(t.textContent));
    var t;
  },
      gw = function gw(e, t, n) {
    return rw([iw, cw, uw, mw], [e, t, n]).filter(fw);
  },
      pw = function pw(e) {
    return e.fold(R, R, R, R);
  },
      hw = function hw(e) {
    return e.fold(N("before"), N("start"), N("end"), N("after"));
  },
      bw = function bw(e) {
    return e.fold(sw.before, sw.before, sw.after, sw.after);
  },
      vw = function vw(e) {
    return e.fold(sw.start, sw.start, sw.end, sw.end);
  },
      yw = function yw(e, t, n, o, r, s) {
    return Pt(op(t, n, o), op(t, n, r), function (t, o) {
      return t !== o && function (e, t, n) {
        var o = Kd(t, e),
            r = Kd(n, e);
        return o && o === r;
      }(n, t, o) ? sw.after(e ? t : o) : s;
    }).getOr(s);
  },
      Cw = function Cw(e, t) {
    return e.fold(L, function (e) {
      return o = t, !(hw(n = e) === hw(o) && pw(n) === pw(o));
      var n, o;
    });
  },
      ww = function ww(e, t) {
    return e ? t.fold(_(M.some, sw.start), M.none, _(M.some, sw.after), M.none) : t.fold(M.none, _(M.some, sw.before), M.none, _(M.some, sw.end));
  },
      xw = function xw(e, t, n) {
    var o = e ? 1 : -1;
    return t.setRng(ti(n.container(), n.offset() + o).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
  };

  var kw;
  !function (e) {
    e[e.Br = 0] = "Br", e[e.Block = 1] = "Block", e[e.Wrap = 2] = "Wrap", e[e.Eol = 3] = "Eol";
  }(kw || (kw = {}));

  var Sw = function Sw(e, t) {
    return e === ic.Backwards ? ne(t) : t;
  },
      _w = function _w(e, t, n) {
    return e === ic.Forwards ? t.next(n) : t.prev(n);
  },
      Ew = function Ew(e, t, n, o) {
    return Po(o.getNode(t === ic.Forwards)) ? kw.Br : !1 === Gd(n, o) ? kw.Block : kw.Wrap;
  },
      Nw = function Nw(e, t, n, o) {
    var r = vc(n);
    var s = o;
    var a = [];

    for (; s;) {
      var _n81 = _w(t, r, s);

      if (!_n81) break;
      if (Po(_n81.getNode(!1))) return t === ic.Forwards ? {
        positions: Sw(t, a).concat([_n81]),
        breakType: kw.Br,
        breakAt: M.some(_n81)
      } : {
        positions: Sw(t, a),
        breakType: kw.Br,
        breakAt: M.some(_n81)
      };

      if (_n81.isVisible()) {
        if (e(s, _n81)) {
          var _e102 = Ew(0, t, s, _n81);

          return {
            positions: Sw(t, a),
            breakType: _e102,
            breakAt: M.some(_n81)
          };
        }

        a.push(_n81), s = _n81;
      } else s = _n81;
    }

    return {
      positions: Sw(t, a),
      breakType: kw.Eol,
      breakAt: M.none()
    };
  },
      Rw = function Rw(e, t, n, o) {
    return t(n, o).breakAt.map(function (o) {
      var r = t(n, o).positions;
      return e === ic.Backwards ? r.concat(o) : [o].concat(r);
    }).getOr([]);
  },
      Aw = function Aw(e, t) {
    return Y(e, function (e, n) {
      return e.fold(function () {
        return M.some(n);
      }, function (o) {
        return Pt(ie(o.getClientRects()), ie(n.getClientRects()), function (e, r) {
          var s = Math.abs(t - e.left);
          return Math.abs(t - r.left) <= s ? n : o;
        }).or(e);
      });
    }, M.none());
  },
      Ow = function Ow(e, t) {
    return ie(t.getClientRects()).bind(function (t) {
      return Aw(e, t.left);
    });
  },
      Tw = O(Nw, ti.isAbove, -1),
      Bw = O(Nw, ti.isBelow, 1),
      Dw = O(Rw, -1, Tw),
      Pw = O(Rw, 1, Bw),
      Lw = function Lw(e, t) {
    return Ow(Dw(e, t), t);
  },
      Mw = function Mw(e, t) {
    return Ow(Pw(e, t), t);
  },
      Iw = Io,
      Fw = function Fw(e, t) {
    return Math.abs(e.left - t);
  },
      Uw = function Uw(e, t) {
    return Math.abs(e.right - t);
  },
      zw = function zw(e, t) {
    return Oe(e, function (e, n) {
      var o = Math.min(Fw(e, t), Uw(e, t)),
          r = Math.min(Fw(n, t), Uw(n, t));
      return r === o && ke(n, "node") && Iw(n.node) || r < o ? n : e;
    });
  },
      jw = function jw(e) {
    var t = function t(_t96) {
      return H(_t96, function (t) {
        var n = Ra(t);
        return n.node = e, n;
      });
    };

    if (Co(e)) return t(e.getClientRects());

    if (Ro(e)) {
      var _n82 = e.ownerDocument.createRange();

      return _n82.setStart(e, 0), _n82.setEnd(e, e.data.length), t(_n82.getClientRects());
    }

    return [];
  },
      Vw = function Vw(e) {
    return ee(e, jw);
  };

  var Hw;
  !function (e) {
    e[e.Up = -1] = "Up", e[e.Down = 1] = "Down";
  }(Hw || (Hw = {}));

  var $w = function $w(e, t, n, o, r, s) {
    var a = 0;

    var i = [],
        l = function l(o) {
      var s = Vw([o]);
      -1 === e && (s = s.reverse());

      for (var _e103 = 0; _e103 < s.length; _e103++) {
        var _o62 = s[_e103];

        if (!n(_o62, d)) {
          if (i.length > 0 && t(_o62, Be(i)) && a++, _o62.line = a, r(_o62)) return !0;
          i.push(_o62);
        }
      }
    },
        d = Be(s.getClientRects());

    if (!d) return i;
    var c = s.getNode();
    return l(c), function (e, t, n, o) {
      for (; o = Wd(o, e, Gr, t);) {
        if (n(o)) return;
      }
    }(e, o, l, c), i;
  },
      qw = O($w, Hw.Up, Ta, Ba),
      Ww = O($w, Hw.Down, Ba, Ta),
      Kw = function Kw(e) {
    return function (t) {
      return function (e, t) {
        return t.line > e;
      }(e, t);
    };
  },
      Gw = function Gw(e) {
    return function (t) {
      return function (e, t) {
        return t.line === e;
      }(e, t);
    };
  },
      Yw = function Yw(e, t) {
    e.selection.setRng(t), of(e, e.selection.getRng());
  },
      Xw = function Xw(e, t, n) {
    return M.some(PC(e, t, n));
  },
      Qw = function Qw(e, t, n, o, r, s) {
    var a = t === ic.Forwards,
        i = vc(e.getBody()),
        l = O(sc, a ? i.next : i.prev),
        d = a ? o : r;

    if (!n.collapsed) {
      var _o63 = Pa(n);

      if (s(_o63)) return BC(t, e, _o63, t === ic.Backwards, !1);

      if (zC(e)) {
        var _e104 = n.cloneRange();

        return _e104.collapse(t === ic.Backwards), M.from(_e104);
      }
    }

    var c = oc(t, e.getBody(), n);
    if (d(c)) return DC(e, c.getNode(!a));
    var u = rp(a, l(c)),
        m = Ir(n);
    if (!u) return m ? M.some(n) : M.none();
    if (d(u)) return BC(t, e, u.getNode(!a), a, !1);
    var f = l(u);
    return f && d(f) && ac(u, f) ? BC(t, e, f.getNode(!a), a, !1) : m ? Xw(e, u.toRange(), !1) : M.none();
  },
      Jw = function Jw(e, t, n, o, r, s) {
    var a = oc(t, e.getBody(), n),
        i = Be(a.getClientRects()),
        l = t === Hw.Down,
        d = e.getBody();
    if (!i) return M.none();

    if (zC(e)) {
      var _e105 = l ? ti.fromRangeEnd(n) : ti.fromRangeStart(n);

      return (l ? Mw : Lw)(d, _e105).orThunk(function () {
        return M.from(_e105);
      }).map(function (e) {
        return e.toRange();
      });
    }

    var c = (l ? Ww : qw)(d, Kw(1), a),
        u = K(c, Gw(1)),
        m = i.left,
        f = zw(u, m);

    if (f && s(f.node)) {
      var _n83 = Math.abs(m - f.left),
          _o64 = Math.abs(m - f.right);

      return BC(t, e, f.node, _n83 < _o64, !1);
    }

    var g;

    if (g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : Pa(n), g) {
      var _n84 = function (e, t, n, o) {
        var r = vc(t);
        var s, a, i, l;
        var d = [];
        var c = 0;

        var u = function u(e) {
          return Be(e.getClientRects());
        };

        1 === e ? (s = r.next, a = Ba, i = Ta, l = ti.after(o)) : (s = r.prev, a = Ta, i = Ba, l = ti.before(o));
        var m = u(l);

        do {
          if (!l.isVisible()) continue;

          var _e106 = u(l);

          if (i(_e106, m)) continue;
          d.length > 0 && a(_e106, Be(d)) && c++;

          var _t97 = Ra(_e106);

          if (_t97.position = l, _t97.line = c, n(_t97)) return d;
          d.push(_t97);
        } while (l = s(l));

        return d;
      }(t, d, Kw(1), g);

      var _o65 = zw(K(_n84, Gw(1)), m);

      if (_o65) return Xw(e, _o65.position.toRange(), !1);
      if (_o65 = Be(K(_n84, Gw(0))), _o65) return Xw(e, _o65.position.toRange(), !1);
    }

    return 0 === u.length ? Zw(e, l).filter(l ? r : o).map(function (t) {
      return PC(e, t.toRange(), !1);
    }) : M.none();
  },
      Zw = function Zw(e, t) {
    var n = e.selection.getRng(),
        o = t ? ti.fromRangeEnd(n) : ti.fromRangeStart(n),
        r = (s = o.container(), a = e.getBody(), $o(fn(s), function (e) {
      return Ld(e.dom);
    }, function (e) {
      return e.dom === a;
    }).map(function (e) {
      return e.dom;
    }).getOr(a));
    var s, a;

    if (t) {
      var _e107 = Bw(r, o);

      return le(_e107.positions);
    }

    {
      var _e108 = Tw(r, o);

      return ie(_e108.positions);
    }
  },
      ex = function ex(e, t, n) {
    return Zw(e, t).filter(n).exists(function (t) {
      return e.selection.setRng(t.toRange()), !0;
    });
  },
      tx = function tx(e, t) {
    var n = e.dom.createRng();
    n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
  },
      nx = function nx(e, t) {
    e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
  },
      ox = function ox(e, t, n) {
    return ow(t, n).map(function (t) {
      return tx(e, t), n;
    });
  },
      rx = function rx(e, t, n) {
    var o = e.getBody(),
        r = function (e, t, n) {
      var o = ti.fromRangeStart(e);
      if (e.collapsed) return o;
      {
        var _r50 = ti.fromRangeEnd(e);

        return n ? Nc(t, _r50).getOr(_r50) : Ec(t, o).getOr(o);
      }
    }(e.selection.getRng(), o, n);

    return function (e, t, n, o) {
      var r = rp(e, o),
          s = gw(t, n, r);
      return gw(t, n, r).bind(O(ww, e)).orThunk(function () {
        return function (e, t, n, o, r) {
          var s = rp(e, r);
          return xc(e, n, s).map(O(rp, e)).fold(function () {
            return o.map(bw);
          }, function (r) {
            return gw(t, n, r).map(O(yw, e, t, n, s, r)).filter(O(Cw, o));
          }).filter(fw);
        }(e, t, n, s, o);
      });
    }(n, O(np, e), o, r).bind(function (n) {
      return ox(e, t, n);
    });
  },
      sx = function sx(e, t, n) {
    return !!Al(e) && rx(e, t, n).isSome();
  },
      ax = function ax(e, t, n) {
    return !!Al(t) && function (e, t) {
      var n = t.selection.getRng(),
          o = e ? ti.fromRangeEnd(n) : ti.fromRangeStart(n);
      return !!function (e) {
        return w(e.selection.getSel().modify);
      }(t) && (e && Br(o) ? xw(!0, t.selection, o) : !(e || !Dr(o)) && xw(!1, t.selection, o));
    }(e, t);
  },
      ix = function ix(e) {
    var t = ea(null),
        n = O(np, e);
    return e.on("NodeChange", function (o) {
      Al(e) && (function (e, t, n) {
        var o = H(hr(fn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
          return e.dom;
        }),
            r = K(o, e),
            s = K(n, e);
        $(oe(r, s), O(nx, !1)), $(oe(s, r), O(nx, !0));
      }(n, e.dom, o.parents), function (e, t) {
        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
          var _n85 = ti.fromRangeStart(e.selection.getRng());

          ti.isTextPosition(_n85) && !1 === function (e) {
            return Br(e) || Dr(e);
          }(_n85) && (tx(e, _d(t.get(), _n85)), t.set(null));
        }
      }(e, t), function (e, t, n, o) {
        if (t.selection.isCollapsed()) {
          var _r51 = K(o, e);

          $(_r51, function (o) {
            var r = ti.fromRangeStart(t.selection.getRng());
            gw(e, t.getBody(), r).bind(function (e) {
              return ox(t, n, e);
            });
          });
        }
      }(n, e, t, o.parents));
    }), t;
  },
      lx = O(ax, !0),
      dx = O(ax, !1),
      cx = function cx(e, t, n) {
    if (Al(e)) {
      var _o66 = Zw(e, t).getOrThunk(function () {
        var n = e.selection.getRng();
        return t ? ti.fromRangeEnd(n) : ti.fromRangeStart(n);
      });

      return gw(O(np, e), e.getBody(), _o66).exists(function (t) {
        var o = bw(t);
        return ow(n, o).exists(function (t) {
          return tx(e, t), !0;
        });
      });
    }

    return !1;
  },
      ux = function ux(e, t) {
    return function (n) {
      return ow(t, n).map(function (t) {
        return function () {
          return tx(e, t);
        };
      });
    };
  },
      mx = function mx(e, t, n, o) {
    var r = e.getBody(),
        s = O(np, e);
    e.undoManager.ignore(function () {
      e.selection.setRng(function (e, t) {
        var n = document.createRange();
        return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n;
      }(n, o)), lp(e), gw(s, r, ti.fromRangeStart(e.selection.getRng())).map(vw).bind(ux(e, t)).each(D);
    }), e.nodeChanged();
  },
      fx = function fx(e, t, n) {
    if (e.selection.isCollapsed() && Al(e)) {
      var _o67 = ti.fromRangeStart(e.selection.getRng());

      return function (e, t, n, o) {
        var r = function (e, t) {
          return Kd(t, e) || e;
        }(e.getBody(), o.container()),
            s = O(np, e),
            a = gw(s, r, o);

        return a.bind(function (e) {
          return n ? e.fold(N(M.some(vw(e))), M.none, N(M.some(bw(e))), M.none) : e.fold(M.none, N(M.some(bw(e))), M.none, N(M.some(vw(e))));
        }).map(ux(e, t)).getOrThunk(function () {
          var i = kc(n, r, o),
              l = i.bind(function (e) {
            return gw(s, r, e);
          });
          return Pt(a, l, function () {
            return op(s, r, o).bind(function (t) {
              return function (e) {
                return Pt(Rc(e), Ac(e), function (t, n) {
                  var o = rp(!0, t),
                      r = rp(!1, n);
                  return Ec(e, o).forall(function (e) {
                    return e.isEqual(r);
                  });
                }).getOr(!0);
              }(t) ? M.some(function () {
                ep(e, n, fn(t));
              }) : M.none();
            });
          }).getOrThunk(function () {
            return l.bind(function () {
              return i.map(function (r) {
                return function () {
                  n ? mx(e, t, o, r) : mx(e, t, r, o);
                };
              });
            });
          });
        });
      }(e, t, n, _o67);
    }

    return M.none();
  },
      gx = function gx(e) {
    return 1 === Bn(e);
  },
      px = function px(e, t) {
    var n = fn(e.getBody()),
        o = fn(e.selection.getStart()),
        r = K(function (e, t) {
      var n = bg(t, e);
      return J(n, er).fold(N(n), function (e) {
        return n.slice(0, e);
      });
    }(n, o), gx);
    return le(r).bind(function (n) {
      var o = ti.fromRangeStart(e.selection.getRng());
      return !function (e, t, n) {
        return Pt(Rc(n), Ac(n), function (o, r) {
          var s = rp(!0, o),
              a = rp(!1, r),
              i = rp(!1, t);
          return e ? Ec(n, i).exists(function (e) {
            return e.isEqual(a) && t.isEqual(s);
          }) : Nc(n, i).exists(function (e) {
            return e.isEqual(s) && t.isEqual(a);
          });
        }).getOr(!0);
      }(t, o, n.dom) || Tc((s = n).dom) && vh(s.dom) ? M.none() : M.some(function () {
        return function (e, t, n, o) {
          var r = O(Eh, t),
              s = H(K(o, r), function (e) {
            return e.dom;
          });
          if (0 === s.length) ep(t, e, n);else {
            var _e109 = function (e, t) {
              var n = Ch(!1),
                  o = Sh(t, n.dom);
              return Xn(fn(e), n), no(fn(e)), ti(o, 0);
            }(n.dom, s);

            t.selection.setRng(_e109.toRange());
          }
        }(t, e, n, r);
      });
      var s;
    });
  },
      hx = function hx(e, t) {
    return e.selection.isCollapsed() ? px(e, t) : M.none();
  },
      bx = function bx(e, t, n) {
    return M.some(function () {
      e._selectionOverrides.hideFakeCaret(), ep(e, t, fn(n));
    });
  },
      vx = function vx(e, t) {
    return e.selection.isCollapsed() ? function (e, t) {
      var n = t ? cg : ug,
          o = t ? ic.Forwards : ic.Backwards,
          r = oc(o, e.getBody(), e.selection.getRng());
      return n(r) ? bx(e, t, r.getNode(!t)) : M.from(rp(t, r)).filter(function (e) {
        return n(e) && ac(r, e);
      }).map(function (n) {
        return function () {
          return bx(e, t, n.getNode(!t));
        };
      });
    }(e, t) : function (e, t) {
      var n = e.selection.getNode();
      return Uo(n) ? bx(e, t, n) : M.none();
    }(e, t);
  },
      yx = function yx(e) {
    var t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
  },
      Cx = function Cx(e, t) {
    return (e || "table" === Mt(t) ? "margin" : "padding") + ("rtl" === qn(t, "direction") ? "-right" : "-left");
  },
      wx = function wx(e) {
    var t = kx(e);
    return !e.mode.isReadOnly() && (t.length > 1 || function (e, t) {
      return te(t, function (t) {
        var n = Cx(fl(e), t),
            o = Kn(t, n).map(yx).getOr(0);
        return "false" !== e.dom.getContentEditable(t.dom) && o > 0;
      });
    }(e, t));
  },
      xx = function xx(e) {
    return rr(e) || sr(e);
  },
      kx = function kx(e) {
    return K((t = e.selection.getSelectedBlocks(), H(t, fn)), function (e) {
      return !xx(e) && !function (e) {
        return kn(e).exists(xx);
      }(e) && qo(e, function (e) {
        return Mo(e.dom) || Io(e.dom);
      }).exists(function (e) {
        return Mo(e.dom);
      });
    });
    var t;
  },
      Sx = function Sx(e, t) {
    var n = e.dom,
        o = gl(e),
        r = /[a-z%]+$/i.exec(o)[0],
        s = parseInt(o, 10),
        a = fl(e);
    $(kx(e), function (e) {
      (function (e, t, n, o, r, s) {
        var a = Cx(n, fn(s));

        if ("outdent" === t) {
          var _t98 = Math.max(0, yx(s.style[a]) - o);

          e.setStyle(s, a, _t98 ? _t98 + r : "");
        } else {
          var _t99 = yx(s.style[a]) + o + r;

          e.setStyle(s, a, _t99);
        }
      })(n, t, a, s, r, e.dom);
    });
  },
      _x = function _x(e) {
    return Sx(e, "outdent");
  },
      Ex = function Ex(e) {
    if (e.selection.isCollapsed() && wx(e)) {
      var _t100 = e.dom,
          _n86 = e.selection.getRng(),
          _o68 = ti.fromRangeStart(_n86),
          _r52 = _t100.getParent(_n86.startContainer, _t100.isBlock);

      if (null !== _r52 && xg(fn(_r52), _o68)) return M.some(function () {
        return _x(e);
      });
    }

    return M.none();
  },
      Nx = function Nx(e, t, n) {
    return ce([Ex, WC, FC, function (e, n) {
      return fx(e, t, n);
    }, EC, Fp, KC, vx, AC, hx], function (t) {
      return t(e, n);
    });
  },
      Rx = function Rx(e, t) {
    e.addCommand("delete", function () {
      (function (e, t) {
        Nx(e, t, !1).fold(function () {
          lp(e), up(e);
        }, D);
      })(e, t);
    }), e.addCommand("forwardDelete", function () {
      (function (e, t) {
        Nx(e, t, !0).fold(function () {
          return function (e) {
            return ip(e, "ForwardDelete");
          }(e);
        }, D);
      })(e, t);
    });
  },
      Ax = function Ax(e) {
    return void 0 === e.touches || 1 !== e.touches.length ? M.none() : M.some(e.touches[0]);
  },
      Ox = function Ox(e, t) {
    return xe(e, t.nodeName);
  },
      Tx = function Tx(e, t) {
    return !!Ro(t) || !!Co(t) && !Ox(e, t) && !$c(t);
  },
      Bx = function Bx(e, t) {
    if (Ro(t)) {
      if (0 === t.nodeValue.length) return !0;
      if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || Ox(e, t.nextSibling))) return !0;
    }

    return !1;
  },
      Dx = function Dx(e) {
    return e.dom.create(Ki(e), Gi(e));
  },
      Px = function Px(e) {
    var t = e.dom,
        n = e.selection,
        o = e.schema,
        r = o.getBlockElements();
    var s = n.getStart();
    var a = e.getBody();
    var i, l, d;
    var c = Ki(e);
    if (!s || !Co(s)) return;
    var u = a.nodeName.toLowerCase();
    if (!o.isValidChild(u, c.toLowerCase()) || function (e, t, n) {
      return V(hg(fn(n), fn(t)), function (t) {
        return Ox(e, t.dom);
      });
    }(r, a, s)) return;

    var m = n.getRng(),
        f = m.startContainer,
        g = m.startOffset,
        p = m.endContainer,
        h = m.endOffset,
        b = _f(e);

    for (s = a.firstChild; s;) {
      if (Tx(r, s)) {
        if (Bx(r, s)) {
          l = s, s = s.nextSibling, t.remove(l);
          continue;
        }

        i || (i = Dx(e), s.parentNode.insertBefore(i, s), d = !0), l = s, s = s.nextSibling, i.appendChild(l);
      } else i = null, s = s.nextSibling;
    }

    d && b && (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged());
  },
      Lx = function Lx(e, t, n) {
    var o = fn(Dx(e)),
        r = Cr();
    Zn(o, r), n(t, o);
    var s = document.createRange();
    return s.setStartBefore(r.dom), s.setEndBefore(r.dom), s;
  },
      Mx = function Mx(e) {
    return function (t) {
      return -1 !== (" " + t.attr("class") + " ").indexOf(e);
    };
  },
      Ix = function Ix(e, t, n) {
    return function (o) {
      var r = arguments,
          s = r[r.length - 2],
          a = s > 0 ? t.charAt(s - 1) : "";
      if ('"' === a) return o;

      if (">" === a) {
        var _e110 = t.lastIndexOf("<", s);

        if (-1 !== _e110 && -1 !== t.substring(_e110, s).indexOf('contenteditable="false"')) return o;
      }

      return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>";
    };
  },
      Fx = function Fx(e, t) {
    t.hasAttribute("data-mce-caret") && (Mr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t));
  },
      Ux = function Ux(e, t) {
    var n = function (e) {
      return Ko(fn(e.getBody()), "*[data-mce-caret]").map(function (e) {
        return e.dom;
      }).getOrNull();
    }(e);

    if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Fx(e, n)) : void (Tr(n) && (Fx(e, n), e.undoManager.add()));
  },
      zx = Io,
      jx = function jx(e, t, n) {
    var o = vc(e.getBody()),
        r = O(sc, 1 === t ? o.next : o.prev);

    if (n.collapsed) {
      var _o69 = e.dom.getParent(n.startContainer, "PRE");

      if (!_o69) return;

      if (!r(ti.fromRangeStart(n))) {
        var _n87 = fn(function (e) {
          var t = e.dom.create(Ki(e));
          return t.innerHTML = '<br data-mce-bogus="1">', t;
        }(e));

        1 === t ? Qn(fn(_o69), _n87) : Xn(fn(_o69), _n87), e.selection.select(_n87.dom, !0), e.selection.collapse();
      }
    }
  },
      Vx = function Vx(e, t) {
    return function (e, t) {
      var n = t ? ic.Forwards : ic.Backwards,
          o = e.selection.getRng();
      return function (e, t, n) {
        return Qw(t, e, n, gg, pg, zx);
      }(n, e, o).orThunk(function () {
        return jx(e, n, o), M.none();
      });
    }(e, t).exists(function (t) {
      return Yw(e, t), !0;
    });
  },
      Hx = function Hx(e, t) {
    return function (e, t) {
      var n = t ? 1 : -1,
          o = e.selection.getRng();
      return function (e, t, n) {
        return Jw(t, e, n, function (e) {
          return gg(e) || mg(e);
        }, function (e) {
          return pg(e) || fg(e);
        }, zx);
      }(n, e, o).orThunk(function () {
        return jx(e, n, o), M.none();
      });
    }(e, t).exists(function (t) {
      return Yw(e, t), !0;
    });
  },
      $x = function $x(e, t) {
    return ex(e, t, t ? pg : gg);
  },
      qx = function qx(e, t) {
    return UC(e, !t).map(function (n) {
      var o = n.toRange(),
          r = e.selection.getRng();
      return t ? o.setStart(r.startContainer, r.startOffset) : o.setEnd(r.endContainer, r.endOffset), o;
    }).exists(function (t) {
      return Yw(e, t), !0;
    });
  },
      Wx = function Wx(e) {
    return j(["figcaption"], Mt(e));
  },
      Kx = function Kx(e, t) {
    var n = fn(e.getBody()),
        o = ti.fromRangeStart(e.selection.getRng());
    return function (e, t) {
      var n = O(vn, t);
      return qo(fn(e.container()), er, n).filter(Wx);
    }(o, n).exists(function () {
      if (function (e, t, n) {
        return t ? function (e, t) {
          return Bw(e, t).breakAt.isNone();
        }(e.dom, n) : function (e, t) {
          return Tw(e, t).breakAt.isNone();
        }(e.dom, n);
      }(n, t, o)) {
        var _o70 = Lx(e, n, t ? Zn : Jn);

        return e.selection.setRng(_o70), !0;
      }

      return !1;
    });
  },
      Gx = function Gx(e, t) {
    return !!e.selection.isCollapsed() && Kx(e, t);
  },
      Yx = {
    shiftKey: !1,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    keyCode: 0
  },
      Xx = function Xx(e, t) {
    return t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey;
  },
      Qx = function Qx(e) {
    for (var _len12 = arguments.length, t = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
      t[_key12 - 1] = arguments[_key12];
    }

    return function () {
      return e.apply(null, t);
    };
  },
      Jx = function Jx(e, t) {
    return Q(function (e, t) {
      return ee(function (e) {
        return H(e, function (e) {
          return _objectSpread({}, Yx, {
            action: S
          }, e);
        });
      }(e), function (e) {
        return Xx(e, t) ? [e] : [];
      });
    }(e, t), function (e) {
      return e.action();
    });
  },
      Zx = function Zx(e, t) {
    return ce(function (e, t) {
      return ee(function (e) {
        return H(e, function (e) {
          return _objectSpread({}, Yx, {
            action: function action() {
              return M.none();
            }
          }, e);
        });
      }(e), function (e) {
        return Xx(e, t) ? [e] : [];
      });
    }(e, t), function (e) {
      return e.action();
    });
  },
      ek = function ek(e, t) {
    var n = t ? ic.Forwards : ic.Backwards,
        o = e.selection.getRng();
    return Qw(e, n, o, cg, ug, Uo).exists(function (t) {
      return Yw(e, t), !0;
    });
  },
      tk = function tk(e, t) {
    var n = t ? 1 : -1,
        o = e.selection.getRng();
    return Jw(e, n, o, cg, ug, Uo).exists(function (t) {
      return Yw(e, t), !0;
    });
  },
      nk = function nk(e, t) {
    return ex(e, t, t ? ug : cg);
  },
      ok = Ei([{
    none: ["current"]
  }, {
    first: ["current"]
  }, {
    middle: ["current", "target"]
  }, {
    last: ["current"]
  }]),
      rk = _objectSpread({}, ok, {
    none: function none(e) {
      return ok.none(e);
    }
  }),
      sk = function sk(e, t, n) {
    return ee(Rn(e), function (e) {
      return hn(e, t) ? n(e) ? [e] : [] : sk(e, t, n);
    });
  },
      ak = function ak(e, t) {
    return Go(e, "table", t);
  },
      ik = function ik(e, t, n, o) {
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : L;
    var s = 1 === o;
    if (!s && n <= 0) return rk.first(e[0]);
    if (s && n >= e.length - 1) return rk.last(e[e.length - 1]);
    {
      var _s29 = n + o,
          _a18 = e[_s29];

      return r(_a18) ? rk.middle(t, _a18) : ik(e, t, _s29, o, r);
    }
  },
      lk = function lk(e, t) {
    return ak(e, t).bind(function (t) {
      var n = sk(t, "th,td", L);
      return J(n, function (t) {
        return vn(e, t);
      }).map(function (e) {
        return {
          index: e,
          all: n
        };
      });
    });
  },
      dk = function dk(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return jn(e) ? e.dom.isContentEditable : (n = e, Go(n, "[contenteditable]")).fold(N(t), function (e) {
      return "true" === ck(e);
    });
    var n;
  },
      ck = function ck(e) {
    return e.dom.contentEditable;
  },
      uk = function uk(e, t, n, o, r) {
    var s = hr(fn(n), "td,th,caption").map(function (e) {
      return e.dom;
    }),
        a = K(function (e, t) {
      return ee(t, function (t) {
        var n = function (e, t) {
          return {
            left: e.left - t,
            top: e.top - t,
            right: e.right + -2,
            bottom: e.bottom + -2,
            width: e.width + t,
            height: e.height + t
          };
        }(Ra(t.getBoundingClientRect()), -1);

        return [{
          x: n.left,
          y: e(n),
          cell: t
        }, {
          x: n.right,
          y: e(n),
          cell: t
        }];
      });
    }(e, s), function (e) {
      return t(e, r);
    });
    return function (e, t, n) {
      return Y(e, function (e, o) {
        return e.fold(function () {
          return M.some(o);
        }, function (e) {
          var r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
              s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
          return M.some(s < r ? o : e);
        });
      }, M.none());
    }(a, o, r).map(function (e) {
      return e.cell;
    });
  },
      mk = O(uk, function (e) {
    return e.bottom;
  }, function (e, t) {
    return e.y < t;
  }),
      fk = O(uk, function (e) {
    return e.top;
  }, function (e, t) {
    return e.y > t;
  }),
      gk = function gk(e, t, n) {
    var o = e(t, n);
    return function (e) {
      return e.breakType === kw.Wrap && 0 === e.positions.length;
    }(o) || !Po(n.getNode()) && function (e) {
      return e.breakType === kw.Br && 1 === e.positions.length;
    }(o) ? !function (e, t, n) {
      return n.breakAt.exists(function (n) {
        return e(t, n).breakAt.isSome();
      });
    }(e, t, o) : o.breakAt.isNone();
  },
      pk = O(gk, Tw),
      hk = O(gk, Bw),
      bk = function bk(e, t, n, o) {
    var r = e.selection.getRng(),
        s = t ? 1 : -1;
    return !(!Bd() || !function (e, t, n) {
      var o = ti.fromRangeStart(t);
      return _c(!e, n).exists(function (e) {
        return e.isEqual(o);
      });
    }(t, r, n) || (BC(s, e, n, !t, !1).each(function (t) {
      Yw(e, t);
    }), 0));
  },
      vk = function vk(e, t, n) {
    var o = function (e, t) {
      var n = t.getNode(e);
      return _o(n) ? M.some(n) : M.none();
    }(!!t, n),
        r = !1 === t;

    o.fold(function () {
      return Yw(e, n.toRange());
    }, function (o) {
      return _c(r, e.getBody()).filter(function (e) {
        return e.isEqual(n);
      }).fold(function () {
        return Yw(e, n.toRange());
      }, function (n) {
        return function (e, t, n) {
          t.undoManager.transact(function () {
            var o = e ? Qn : Xn,
                r = Lx(t, fn(n), o);
            Yw(t, r);
          });
        }(t, e, o);
      });
    });
  },
      yk = function yk(e, t, n, o) {
    var r = e.selection.getRng(),
        s = ti.fromRangeStart(r),
        a = e.getBody();

    if (!t && pk(o, s)) {
      var _o71 = function (e, t, n) {
        return function (e, t) {
          return ie(t.getClientRects()).bind(function (t) {
            return mk(e, t.left, t.top);
          }).bind(function (e) {
            return Ow(Ac(n = e).map(function (e) {
              return Tw(n, e).positions.concat(e);
            }).getOr([]), t);
            var n;
          });
        }(t, n).orThunk(function () {
          return ie(n.getClientRects()).bind(function (n) {
            return Aw(Dw(e, ti.before(t)), n.left);
          });
        }).getOr(ti.before(t));
      }(a, n, s);

      return vk(e, t, _o71), !0;
    }

    if (t && hk(o, s)) {
      var _o72 = function (e, t, n) {
        return function (e, t) {
          return le(t.getClientRects()).bind(function (t) {
            return fk(e, t.left, t.top);
          }).bind(function (e) {
            return Ow(Rc(n = e).map(function (e) {
              return [e].concat(Bw(n, e).positions);
            }).getOr([]), t);
            var n;
          });
        }(t, n).orThunk(function () {
          return ie(n.getClientRects()).bind(function (n) {
            return Aw(Pw(e, ti.after(t)), n.left);
          });
        }).getOr(ti.after(t));
      }(a, n, s);

      return vk(e, t, _o72), !0;
    }

    return !1;
  },
      Ck = function Ck(e, t, n) {
    return M.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind(function (o) {
      return M.from(e.dom.getParent(o, "table")).map(function (r) {
        return n(e, t, r, o);
      });
    }).getOr(!1);
  },
      wk = function wk(e, t) {
    return Ck(e, t, bk);
  },
      xk = function xk(e, t) {
    return Ck(e, t, yk);
  },
      kk = function kk(e, t, n) {
    return n.fold(M.none, M.none, function (e, t) {
      return (n = t, function (e, t) {
        var n = function n(e) {
          for (var _o73 = 0; _o73 < e.childNodes.length; _o73++) {
            var _r53 = fn(e.childNodes[_o73]);

            if (t(_r53)) return M.some(_r53);

            var _s30 = n(e.childNodes[_o73]);

            if (_s30.isSome()) return _s30;
          }

          return M.none();
        };

        return n(e.dom);
      }(n, Df)).map(function (e) {
        return function (e) {
          var t = vm.exact(e, 0, e, 0);
          return km(t);
        }(e);
      });
      var n;
    }, function (n) {
      return e.execCommand("mceTableInsertRowAfter"), Sk(e, t, n);
    });
  },
      Sk = function Sk(e, t, n) {
    return kk(e, t, (r = dk, lk(o = n, void 0).fold(function () {
      return rk.none(o);
    }, function (e) {
      return ik(e.all, o, e.index, 1, r);
    })));
    var o, r;
  },
      _k = function _k(e, t, n) {
    return kk(e, t, (r = dk, lk(o = n, void 0).fold(function () {
      return rk.none();
    }, function (e) {
      return ik(e.all, o, e.index, -1, r);
    })));
    var o, r;
  },
      Ek = function Ek(e, t) {
    var n = ["table", "li", "dl"],
        o = fn(e.getBody()),
        r = function r(e) {
      var t = Mt(e);
      return vn(e, o) || j(n, t);
    },
        s = e.selection.getRng();

    return function (e, t) {
      return function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : P;
        return n(t) ? M.none() : j(e, Mt(t)) ? M.some(t) : Wo(t, e.join(","), function (e) {
          return hn(e, "table") || n(e);
        });
      }(["td", "th"], e, t);
    }(fn(t ? s.endContainer : s.startContainer), r).map(function (n) {
      return ak(n, r).each(function (t) {
        e.model.table.clearSelectedCells(t.dom);
      }), e.selection.collapse(!t), (t ? Sk : _k)(e, r, n).each(function (t) {
        e.selection.setRng(t);
      }), !0;
    }).getOr(!1);
  },
      Nk = function Nk(e, t) {
    return {
      container: e,
      offset: t
    };
  },
      Rk = Qs.DOM,
      Ak = function Ak(e) {
    return function (t) {
      return e === t ? -1 : 0;
    };
  },
      Ok = function Ok(e, t, n) {
    if (Ro(e) && t >= 0) return M.some(Nk(e, t));
    {
      var _o74 = Ea(Rk);

      return M.from(_o74.backwards(e, t, Ak(e), n)).map(function (e) {
        return Nk(e.container, e.container.data.length);
      });
    }
  },
      Tk = function Tk(e, t, n) {
    if (!Ro(e)) return M.none();
    var o = e.textContent;
    if (t >= 0 && t <= o.length) return M.some(Nk(e, t));
    {
      var _o75 = Ea(Rk);

      return M.from(_o75.backwards(e, t, Ak(e), n)).bind(function (e) {
        var o = e.container.data;
        return Tk(e.container, t + o.length, n);
      });
    }
  },
      Bk = function Bk(e, t, n) {
    if (!Ro(e)) return M.none();
    var o = e.textContent;
    if (t <= o.length) return M.some(Nk(e, t));
    {
      var _r54 = Ea(Rk);

      return M.from(_r54.forwards(e, t, Ak(e), n)).bind(function (e) {
        return Bk(e.container, t - o.length, n);
      });
    }
  },
      Dk = function Dk(e, t, n, o, r) {
    var s = Ea(e, function (e) {
      return function (t) {
        return e.isBlock(t) || j(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t);
      };
    }(e));
    return M.from(s.backwards(t, n, o, r));
  },
      Pk = function Pk(e) {
    return e.toString().replace(/\u00A0/g, " ").replace(/\uFEFF/g, "");
  },
      Lk = function Lk(e) {
    return "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e);
  },
      Mk = function Mk(e, t) {
    return e.substring(t.length);
  },
      Ik = function Ik(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return (r = fn(t.startContainer), Go(r, Pf)).fold(function () {
      return function (e, t, n) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (!(r = t).collapsed || 3 !== r.startContainer.nodeType) return M.none();
        var r;
        var s = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
        return Dk(e, t.startContainer, t.startOffset, function (e, t, o) {
          return function (e, t, n) {
            var o;

            for (o = t - 1; o >= 0; o--) {
              var _t101 = e.charAt(o);

              if (Lk(_t101)) return M.none();
              if (_t101 === n) break;
            }

            return M.some(o);
          }(o, t, n).getOr(t);
        }, s).bind(function (e) {
          var r = t.cloneRange();
          if (r.setStart(e.container, e.offset), r.setEnd(t.endContainer, t.endOffset), r.collapsed) return M.none();
          var s = Pk(r);
          return 0 !== s.lastIndexOf(n) || Mk(s, n).length < o ? M.none() : M.some({
            text: Mk(s, n),
            range: r,
            triggerChar: n
          });
        });
      }(e, t, n, o);
    }, function (t) {
      var o = e.createRng();
      o.selectNode(t.dom);
      var r = Pk(o);
      return M.some({
        range: o,
        text: Mk(r, n),
        triggerChar: n
      });
    });
    var r;
  },
      Fk = function Fk(e) {
    if (function (e) {
      return 3 === e.nodeType;
    }(e)) return Nk(e, e.data.length);
    {
      var _t102 = e.childNodes;
      return _t102.length > 0 ? Fk(_t102[_t102.length - 1]) : Nk(e, _t102.length);
    }
  },
      Uk = function Uk(e, t) {
    var n = e.childNodes;
    return n.length > 0 && t < n.length ? Uk(n[t], 0) : n.length > 0 && function (e) {
      return 1 === e.nodeType;
    }(e) && n.length === t ? Fk(n[n.length - 1]) : Nk(e, t);
  },
      zk = function zk(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var r = t(),
        s = e.selection.getRng().startContainer.nodeValue,
        a = K(r.lookupByChar(n.triggerChar), function (t) {
      return n.text.length >= t.minChars && t.matches.getOrThunk(function () {
        return function (e) {
          return function (t) {
            var n = Uk(t.startContainer, t.startOffset);
            return !function (e, t) {
              var n = e.getParent(t.container, e.isBlock);
              return Dk(e, t.container, t.offset, function (e, t) {
                return 0 === t ? -1 : t;
              }, n).filter(function (e) {
                var t = e.container.data.charAt(e.offset - 1);
                return !Lk(t);
              }).isSome();
            }(e, n);
          };
        }(e.dom);
      })(n.range, s, n.text);
    });
    if (0 === a.length) return M.none();
    var i = Promise.all(H(a, function (e) {
      return e.fetch(n.text, e.maxResults, o).then(function (t) {
        return {
          matchText: n.text,
          items: t,
          columns: e.columns,
          onAction: e.onAction,
          highlightOn: e.highlightOn
        };
      });
    }));
    return M.some({
      lookupData: i,
      context: n
    });
  };

  var jk;
  !function (e) {
    e[e.Error = 0] = "Error", e[e.Value = 1] = "Value";
  }(jk || (jk = {}));

  var Vk = function Vk(e, t, n) {
    return e.stype === jk.Error ? t(e.serror) : n(e.svalue);
  },
      Hk = function Hk(e) {
    return {
      stype: jk.Value,
      svalue: e
    };
  },
      $k = function $k(e) {
    return {
      stype: jk.Error,
      serror: e
    };
  },
      qk = Vk,
      Wk = function Wk(e) {
    return f(e) && ue(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2);
  },
      Kk = function Kk(e, t) {
    return $k([{
      path: e,
      getErrorInfo: t
    }]);
  },
      Gk = function Gk(e, t) {
    return {
      extract: function extract(n, o) {
        return we(o, e).fold(function () {
          return function (e, t) {
            return Kk(e, function () {
              return 'Choice schema did not contain choice key: "' + t + '"';
            });
          }(n, e);
        }, function (e) {
          return function (e, t, n, o) {
            return we(n, o).fold(function () {
              return function (e, t, n) {
                return Kk(e, function () {
                  return 'The chosen schema: "' + n + '" did not exist in branches: ' + Wk(t);
                });
              }(e, n, o);
            }, function (n) {
              return n.extract(e.concat(["branch: " + o]), t);
            });
          }(n, o, t, e);
        });
      },
      toString: function toString() {
        return "chooseOn(" + e + "). Possible values: " + ue(t);
      }
    };
  },
      Yk = function Yk(e) {
    return function () {
      if (0 === arguments.length) throw new Error("Can't merge zero objects");
      var n = {};

      for (var _o76 = 0; _o76 < arguments.length; _o76++) {
        var _r55 = _o76 < 0 || arguments.length <= _o76 ? undefined : arguments[_o76];

        for (var _t103 in _r55) {
          xe(_r55, _t103) && (n[_t103] = e(n[_t103], _r55[_t103]));
        }
      }

      return n;
    };
  },
      Xk = Yk(function (e, t) {
    return g(e) && g(t) ? Xk(e, t) : t;
  }),
      Qk = (Yk(function (e, t) {
    return t;
  }), function (e) {
    return {
      tag: "defaultedThunk",
      process: N(e)
    };
  }),
      Jk = function Jk(e) {
    var t = function (e) {
      var t = [],
          n = [];
      return $(e, function (e) {
        Vk(e, function (e) {
          return n.push(e);
        }, function (e) {
          return t.push(e);
        });
      }), {
        values: t,
        errors: n
      };
    }(e);

    return t.errors.length > 0 ? (n = t.errors, _($k, Z)(n)) : Hk(t.values);
    var n;
  },
      Zk = function Zk(e, t, n) {
    switch (e.tag) {
      case "field":
        return t(e.key, e.newKey, e.presence, e.prop);

      case "custom":
        return n(e.newKey, e.instantiator);
    }
  },
      eS = function eS(e) {
    return {
      extract: function extract(t, n) {
        return o = e(n), r = function r(e) {
          return function (e, t) {
            return Kk(e, N(t));
          }(t, e);
        }, o.stype === jk.Error ? r(o.serror) : o;
        var o, r;
      },
      toString: N("val")
    };
  },
      tS = eS(Hk),
      nS = function nS(e, t, n, o) {
    return o(we(e, t).getOrThunk(function () {
      return n(e);
    }));
  },
      oS = function oS(e, t, n, o, r) {
    var s = function s(e) {
      return r.extract(t.concat([o]), e);
    },
        a = function a(e) {
      return e.fold(function () {
        return Hk(M.none());
      }, function (e) {
        var n = r.extract(t.concat([o]), e);
        return s = n, a = M.some, s.stype === jk.Value ? {
          stype: jk.Value,
          svalue: a(s.svalue)
        } : s;
        var s, a;
      });
    };

    switch (e.tag) {
      case "required":
        return function (e, t, n, o) {
          return we(t, n).fold(function () {
            return function (e, t, n) {
              return Kk(e, function () {
                return 'Could not find valid *required* value for "' + t + '" in ' + Wk(n);
              });
            }(e, n, t);
          }, o);
        }(t, n, o, s);

      case "defaultedThunk":
        return nS(n, o, e.process, s);

      case "option":
        return function (e, t, n) {
          return n(we(e, t));
        }(n, o, a);

      case "defaultedOptionThunk":
        return function (e, t, n, o) {
          return o(we(e, t).map(function (t) {
            return !0 === t ? n(e) : t;
          }));
        }(n, o, e.process, a);

      case "mergeWithThunk":
        return nS(n, o, N({}), function (t) {
          var o = Xk(e.process(n), t);
          return s(o);
        });
    }
  },
      rS = function rS(e) {
    return {
      extract: function extract(t, n) {
        return function (e, t, n) {
          var o = {},
              r = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = n[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _s31 = _step3.value;
              Zk(_s31, function (n, s, a, i) {
                var l = oS(a, e, t, n, i);
                qk(l, function (e) {
                  r.push.apply(r, _toConsumableArray(e));
                }, function (e) {
                  o[s] = e;
                });
              }, function (e, n) {
                o[e] = n(t);
              });
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return r.length > 0 ? $k(r) : Hk(o);
        }(t, n, e);
      },
      toString: function toString() {
        var t = H(e, function (e) {
          return Zk(e, function (e, t, n, o) {
            return e + " -> " + o.toString();
          }, function (e, t) {
            return "state(" + e + ")";
          });
        });
        return "obj{\n" + t.join("\n") + "}";
      }
    };
  },
      sS = function sS(e) {
    return {
      extract: function extract(t, n) {
        var o = H(n, function (n, o) {
          return e.extract(t.concat(["[" + o + "]"]), n);
        });
        return Jk(o);
      },
      toString: function toString() {
        return "array(" + e.toString() + ")";
      }
    };
  },
      aS = function aS(e, t, n) {
    return o = function (e, t, n) {
      return function (e, t) {
        return e.stype === jk.Error ? {
          stype: jk.Error,
          serror: t(e.serror)
        } : e;
      }(t.extract([e], n), function (e) {
        return {
          input: n,
          errors: e
        };
      });
    }(e, t, n), Vk(o, _i.error, _i.value);
    var o;
  },
      iS = function iS(e, t) {
    return Gk(e, ge(t, rS));
  },
      lS = N(tS),
      dS = function dS(e, t) {
    return eS(function (n) {
      var o = _typeof(n);

      return e(n) ? Hk(n) : $k("Expected type: ".concat(t, " but got: ").concat(o));
    });
  },
      cS = dS(x, "number"),
      uS = dS(m, "string"),
      mS = dS(b, "boolean"),
      fS = dS(w, "function"),
      gS = function gS(e, t, n, o) {
    return {
      tag: "field",
      key: e,
      newKey: t,
      presence: n,
      prop: o
    };
  },
      pS = function pS(e, t) {
    return {
      tag: "custom",
      newKey: e,
      instantiator: t
    };
  },
      hS = function hS(e, t) {
    return gS(e, e, {
      tag: "required",
      process: {}
    }, t);
  },
      bS = function bS(e) {
    return hS(e, uS);
  },
      vS = function vS(e) {
    return hS(e, fS);
  },
      yS = function yS(e, t) {
    return gS(e, e, {
      tag: "option",
      process: {}
    }, t);
  },
      CS = function CS(e) {
    return yS(e, uS);
  },
      wS = function wS(e, t, n) {
    return gS(e, e, Qk(t), n);
  },
      xS = function xS(e, t) {
    return wS(e, t, cS);
  },
      kS = function kS(e, t, n) {
    return wS(e, t, function (e) {
      return t = function t(_t104) {
        return j(e, _t104) ? _i.value(_t104) : _i.error("Unsupported value: \"".concat(_t104, "\", choose one of \"").concat(e.join(", "), "\"."));
      }, eS(function (e) {
        return t(e).fold($k, Hk);
      });
      var t;
    }(n));
  },
      SS = function SS(e, t) {
    return wS(e, t, mS);
  },
      _S = function _S(e, t) {
    return wS(e, t, fS);
  },
      ES = bS("type"),
      NS = vS("fetch"),
      RS = vS("onAction"),
      AS = _S("onSetup", function () {
    return S;
  }),
      OS = CS("text"),
      TS = CS("icon"),
      BS = CS("tooltip"),
      DS = CS("label"),
      PS = SS("active", !1),
      LS = SS("enabled", !0),
      MS = SS("primary", !1),
      IS = function IS(e) {
    return function (e, t) {
      return wS("type", t, uS);
    }(0, e);
  },
      FS = rS([ES, bS("ch"), xS("minChars", 1), (1, function (e, t) {
    return gS(e, e, Qk(1), lS());
  }("columns")), xS("maxResults", 10), ("matches", yS("matches", fS)), NS, RS, (US = uS, wS("highlightOn", [], sS(US)))]);

  var US;
  var zS = [LS, BS, TS, OS, AS],
      jS = [PS].concat(zS),
      VS = [_S("predicate", P), kS("scope", "node", ["node", "editor"]), kS("position", "selection", ["node", "selection", "line"])],
      HS = zS.concat([IS("contextformbutton"), MS, RS, pS("original", R)]),
      $S = jS.concat([IS("contextformbutton"), MS, RS, pS("original", R)]),
      qS = zS.concat([IS("contextformbutton")]),
      WS = jS.concat([IS("contextformtogglebutton")]),
      KS = iS("type", {
    contextformbutton: HS,
    contextformtogglebutton: $S
  });
  rS([IS("contextform"), _S("initValue", N("")), DS, function (e, t) {
    return gS(e, e, {
      tag: "required",
      process: {}
    }, sS(t));
  }("commands", KS), yS("launch", iS("type", {
    contextformbutton: qS,
    contextformtogglebutton: WS
  }))].concat(VS));

  var GS = function GS(e) {
    var t = e.ui.registry.getAll().popups,
        n = ge(t, function (e) {
      return (t = e, aS("Autocompleter", FS, t)).fold(function (e) {
        throw new Error("Errors: \n" + function (e) {
          var t = e.length > 10 ? e.slice(0, 10).concat([{
            path: [],
            getErrorInfo: N("... (only showing first ten failures)")
          }]) : e;
          return H(t, function (e) {
            return "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo();
          });
        }((t = e).errors).join("\n") + "\n\nInput object: " + Wk(t.input));
        var t;
      }, R);
      var t;
    }),
        o = Se(ye(n, function (e) {
      return e.ch;
    })),
        r = Ce(n);
    return {
      dataset: n,
      triggerChars: o,
      lookupByChar: function lookupByChar(e) {
        return K(r, function (t) {
          return t.ch === e;
        });
      }
    };
  },
      YS = function YS(e) {
    var t = aa(),
        n = ea(!1),
        o = t.isSet,
        r = function r() {
      o() && (function (e) {
        uy(e).autocompleter.removeDecoration();
      }(e), function (e) {
        e.dispatch("AutocompleterEnd");
      }(e), n.set(!1), t.clear());
    },
        s = De(function () {
      return GS(e);
    }),
        a = function a(_a19) {
      (function (n) {
        return t.get().map(function (t) {
          return Ik(e.dom, e.selection.getRng(), t.triggerChar).bind(function (t) {
            return zk(e, s, t, n);
          });
        }).getOrThunk(function () {
          return function (e, t) {
            var n = t(),
                o = e.selection.getRng();
            return function (e, t, n) {
              return ce(n.triggerChars, function (n) {
                return Ik(e, t, n);
              });
            }(e.dom, o, n).bind(function (n) {
              return zk(e, t, n);
            });
          }(e, s);
        });
      })(_a19).fold(r, function (s) {
        (function (n) {
          o() || (function (e, t) {
            uy(e).autocompleter.addDecoration(t);
          }(e, n.range), t.set({
            triggerChar: n.triggerChar,
            matchLength: n.text.length
          }));
        })(s.context), s.lookupData.then(function (o) {
          t.get().map(function (a) {
            var i = s.context;
            a.triggerChar === i.triggerChar && (i.text.length - a.matchLength >= 10 ? r() : (t.set(_objectSpread({}, a, {
              matchLength: i.text.length
            })), n.get() ? function (e, t) {
              e.dispatch("AutocompleterUpdate", t);
            }(e, {
              lookupData: o
            }) : (n.set(!0), function (e, t) {
              e.dispatch("AutocompleterStart", t);
            }(e, {
              lookupData: o
            }))));
          });
        });
      });
    };

    e.addCommand("mceAutocompleterReload", function (e, t) {
      var n = f(t) ? t.fetchOptions : {};
      a(n);
    }), e.addCommand("mceAutocompleterClose", r), function (e, t) {
      var n = la(t.load, 50);
      e.on("keypress compositionend", function (e) {
        27 !== e.which && n.throttle();
      }), e.on("keydown", function (e) {
        var o = e.which;
        8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary();
      }), e.on("remove", n.cancel);
    }(e, {
      cancelIfNecessary: r,
      load: a
    });
  },
      XS = function XS(e) {
    return function (t, n) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var r = t.getBody(),
          s = {
        bubbles: !0,
        composed: !0,
        data: null,
        isComposing: !1,
        detail: 0,
        view: null,
        target: r,
        currentTarget: r,
        eventPhase: Event.AT_TARGET,
        originalTarget: r,
        explicitOriginalTarget: r,
        isTrusted: !1,
        srcElement: r,
        cancelable: !1,
        preventDefault: S,
        inputType: n
      },
          a = Ls(new InputEvent(e));
      return t.dispatch(e, _objectSpread({}, a, {}, s, {}, o));
    };
  },
      QS = XS("input"),
      JS = XS("beforeinput"),
      ZS = function ZS(e, t) {
    var n,
        o = t;
    var r = e.dom,
        s = e.schema.getMoveCaretBeforeOnEnterElements();
    if (!t) return;

    if (/^(LI|DT|DD)$/.test(t.nodeName)) {
      var _e111 = function (e) {
        for (; e;) {
          if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
          e = e.nextSibling;
        }
      }(t.firstChild);

      _e111 && /^(UL|OL|DL)$/.test(_e111.nodeName) && t.insertBefore(r.doc.createTextNode(fr), t.firstChild);
    }

    var a = r.createRng();

    if (t.normalize(), t.hasChildNodes()) {
      var _e112 = new Qo(t, t);

      for (; n = _e112.current();) {
        if (Ro(n)) {
          a.setStart(n, 0), a.setEnd(n, 0);
          break;
        }

        if (s[n.nodeName.toLowerCase()]) {
          a.setStartBefore(n), a.setEndBefore(n);
          break;
        }

        o = n, n = _e112.next();
      }

      n || (a.setStart(o, 0), a.setEnd(o, 0));
    } else Po(t) ? t.nextSibling && r.isBlock(t.nextSibling) ? (a.setStartBefore(t), a.setEndBefore(t)) : (a.setStartAfter(t), a.setEndAfter(t)) : (a.setStart(t, 0), a.setEnd(t, 0));

    e.selection.setRng(a), of(e, a);
  },
      e_ = function e_(e) {
    return M.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
  },
      t_ = function t_(e, t) {
    return e && e.parentNode && e.parentNode.nodeName === t;
  },
      n_ = function n_(e) {
    return e && /^(OL|UL|LI)$/.test(e.nodeName);
  },
      o_ = function o_(e) {
    var t = e.parentNode;
    return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
  },
      r_ = function r_(e, t, n) {
    var o = e[n ? "firstChild" : "lastChild"];

    for (; o && !Co(o);) {
      o = o[n ? "nextSibling" : "previousSibling"];
    }

    return o === t;
  },
      s_ = function s_(e, t) {
    return t && "A" === t.nodeName && e.isEmpty(t);
  },
      a_ = function a_(e) {
    e.innerHTML = '<br data-mce-bogus="1">';
  },
      i_ = function i_(e, t) {
    return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t;
  },
      l_ = function l_(e, t) {
    return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t);
  },
      d_ = function d_(e, t, n) {
    return !1 === Ro(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === kr ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === kr ? t.data.length : n;
  },
      c_ = function c_(e, t) {
    var n = e.getRoot();
    var o, r;

    for (o = t; o !== n && "false" !== e.getContentEditable(o);) {
      "true" === e.getContentEditable(o) && (r = o), o = o.parentNode;
    }

    return o !== n ? r : n;
  },
      u_ = function u_(e, t) {
    Ki(e).toLowerCase() === t.tagName.toLowerCase() && function (e, t, n) {
      var o = e.dom;
      M.from(n.style).map(o.parseStyle).each(function (e) {
        var n = _objectSpread({}, Gn(fn(t)), {}, e);

        o.setStyles(t, n);
      });
      var r = M.from(n["class"]).map(function (e) {
        return e.split(/\s+/);
      }),
          s = M.from(t.className).map(function (e) {
        return K(e.split(/\s+/), function (e) {
          return "" !== e;
        });
      });
      Pt(r, s, function (e, n) {
        var r = K(n, function (t) {
          return !j(e, t);
        }),
            s = [].concat(_toConsumableArray(e), _toConsumableArray(r));
        o.setAttrib(t, "class", s.join(" "));
      });
      var a = ["style", "class"],
          i = ve(n, function (e, t) {
        return !j(a, t);
      });
      o.setAttribs(t, i);
    }(e, t, Gi(e));
  },
      m_ = {
    insert: function insert(e, t) {
      var n, o, r, s, a, i, l, d, c;

      var u = e.dom,
          f = e.schema,
          g = f.getNonEmptyElements(),
          p = e.selection.getRng(),
          h = Ki(e),
          b = function b(t) {
        var n,
            r,
            a,
            i = o;
        var l = f.getTextInlineElements();
        if (n = t || "TABLE" === d || "HR" === d ? u.create(t || h) : s.cloneNode(!1), a = n, !1 === Ji(e)) u.setAttrib(n, "style", null), u.setAttrib(n, "class", null);else do {
          if (l[i.nodeName]) {
            if (Tc(i) || $c(i)) continue;
            r = i.cloneNode(!1), u.setAttrib(r, "id", ""), n.hasChildNodes() ? (r.appendChild(n.firstChild), n.appendChild(r)) : (a = r, n.appendChild(r));
          }
        } while ((i = i.parentNode) && i !== k);
        return u_(e, n), a_(a), n;
      },
          v = function v(e) {
        var t, n;
        var a = d_(e, o, r);
        if (Ro(o) && (e ? a > 0 : a < o.nodeValue.length)) return !1;
        if (o.parentNode === s && c && !e) return !0;
        if (e && Co(o) && o === s.firstChild) return !0;
        if (i_(o, "TABLE") || i_(o, "HR")) return c && !e || !c && e;
        var i = new Qo(o, s);

        for (Ro(o) && (e && 0 === a ? i.prev() : e || a !== o.nodeValue.length || i.next()); t = i.current();) {
          if (Co(t)) {
            if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), g[n] && "br" !== n)) return !1;
          } else if (Ro(t) && !Xr(t.nodeValue)) return !1;

          e ? i.prev() : i.next();
        }

        return !0;
      },
          C = function C() {
        a = /^(H[1-6]|PRE|FIGURE)$/.test(d) && "HGROUP" !== S ? b(h) : b(), function (e, t) {
          var n = Zi(e);
          return !y(t) && (m(n) ? j(Bt.explode(n), t.nodeName.toLowerCase()) : n);
        }(e, l) && l_(u, l) && u.isEmpty(s) ? a = u.split(l, s) : u.insertAfter(a, s), ZS(e, a);
      };

      Pm(u, p).each(function (e) {
        p.setStart(e.startContainer, e.startOffset), p.setEnd(e.endContainer, e.endOffset);
      }), o = p.startContainer, r = p.startOffset;
      var w = !(!t || !t.shiftKey),
          x = !(!t || !t.ctrlKey);
      Co(o) && o.hasChildNodes() && (c = r > o.childNodes.length - 1, o = o.childNodes[Math.min(r, o.childNodes.length - 1)] || o, r = c && Ro(o) ? o.nodeValue.length : 0);
      var k = c_(u, o);
      if (!k) return;
      w || (o = function (e, t, n, o, r) {
        var s, a, i, l, d, c;
        var u = e.dom,
            m = c_(u, o);

        if (a = u.getParent(o, u.isBlock), !a || !l_(u, a)) {
          if (a = a || m, c = a === e.getBody() || function (e) {
            return e && /^(TD|TH|CAPTION)$/.test(e.nodeName);
          }(a) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return s = u.create(t), u_(e, s), a.appendChild(s), n.setStart(s, 0), n.setEnd(s, 0), s;

          for (l = o; l.parentNode !== a;) {
            l = l.parentNode;
          }

          for (; l && !u.isBlock(l);) {
            i = l, l = l.previousSibling;
          }

          if (i && e.schema.isValidChild(c, t.toLowerCase())) {
            for (s = u.create(t), u_(e, s), i.parentNode.insertBefore(s, i), l = i; l && !u.isBlock(l);) {
              d = l.nextSibling, s.appendChild(l), l = d;
            }

            n.setStart(o, r), n.setEnd(o, r);
          }
        }

        return o;
      }(e, h, p, o, r)), s = u.getParent(o, u.isBlock), l = s ? u.getParent(s.parentNode, u.isBlock) : null, d = s ? s.nodeName.toUpperCase() : "";
      var S = l ? l.nodeName.toUpperCase() : "";
      "LI" !== S || x || (s = l, l = l.parentNode, d = S), /^(LI|DT|DD)$/.test(d) && u.isEmpty(s) ? function (e, t, n, o, r) {
        var s = e.dom,
            a = e.selection.getRng();
        if (n === e.getBody()) return;
        var i;
        n_(i = n) && n_(i.parentNode) && (r = "LI");
        var l = t(r);
        if (r_(n, o, !0) && r_(n, o, !1)) {
          if (t_(n, "LI")) {
            var _e113 = o_(n);

            s.insertAfter(l, _e113), function (e) {
              var t;
              return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e;
            }(n) ? s.remove(_e113) : s.remove(n);
          } else s.replace(l, n);
        } else if (r_(n, o, !0)) t_(n, "LI") ? (s.insertAfter(l, o_(n)), l.appendChild(s.doc.createTextNode(" ")), l.appendChild(n)) : n.parentNode.insertBefore(l, n), s.remove(o);else if (r_(n, o, !1)) s.insertAfter(l, o_(n)), s.remove(o);else {
          n = o_(n);

          var _e114 = a.cloneRange();

          _e114.setStartAfter(o), _e114.setEndAfter(n);

          var _t105 = _e114.extractContents();

          "LI" === r && function (e, t) {
            return e.firstChild && "LI" === e.firstChild.nodeName;
          }(_t105) ? (l = _t105.firstChild, s.insertAfter(_t105, n)) : (s.insertAfter(_t105, n), s.insertAfter(l, n)), s.remove(o);
        }
        ZS(e, l);
      }(e, b, l, s, h) : s !== e.getBody() && (Rr(s) ? (a = Mr(s), u.isEmpty(s) && a_(s), u_(e, a), ZS(e, a)) : v() ? C() : v(!0) ? (a = s.parentNode.insertBefore(b(), s), ZS(e, i_(s, "HR") ? a : s)) : (n = function (e) {
        var t = e.cloneRange();
        return t.setStart(e.startContainer, d_(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, d_(!1, e.endContainer, e.endOffset)), t;
      }(p).cloneRange(), n.setEndAfter(s), i = n.extractContents(), function (e) {
        $(pr(fn(e), zt), function (e) {
          var t = e.dom;
          t.nodeValue = _r(t.nodeValue);
        });
      }(i), function (e) {
        do {
          Ro(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;
        } while (e);
      }(i), a = i.firstChild, u.insertAfter(i, s), function (e, t, n) {
        var o = n;
        var r = [];
        var s;

        if (o) {
          for (; o = o.firstChild;) {
            if (e.isBlock(o)) return;
            Co(o) && !t[o.nodeName.toLowerCase()] && r.push(o);
          }

          for (s = r.length; s--;) {
            o = r[s], (!o.hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue || s_(e, o)) && e.remove(o);
          }
        }
      }(u, g, a), function (e, t) {
        t.normalize();
        var n = t.lastChild;
        n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br");
      }(u, s), u.isEmpty(s) && a_(s), a.normalize(), u.isEmpty(a) ? (u.remove(a), C()) : (u_(e, a), ZS(e, a))), u.setAttrib(a, "id", ""), e.dispatch("NewBlock", {
        newBlock: a
      }));
    },
    fakeEventName: "insertParagraph"
  },
      f_ = function f_(e, t, n) {
    var o = e.dom.createRng();
    n ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), e.selection.setRng(o), of(e, o);
  },
      g_ = function g_(e, t) {
    var n = un("br");
    Xn(fn(t), n), e.undoManager.add();
  },
      p_ = function p_(e, t) {
    h_(e.getBody(), t) || Qn(fn(t), un("br"));
    var n = un("br");
    Qn(fn(t), n), f_(e, n.dom, !1), e.undoManager.add();
  },
      h_ = function h_(e, t) {
    return n = ti.after(t), !!Po(n.getNode()) || Ec(e, ti.after(t)).map(function (e) {
      return Po(e.getNode());
    }).getOr(!1);
    var n;
  },
      b_ = function b_(e) {
    return e && "A" === e.nodeName && "href" in e;
  },
      v_ = function v_(e) {
    return e.fold(P, b_, b_, P);
  },
      y_ = function y_(e, t) {
    t.fold(S, O(g_, e), O(p_, e), S);
  },
      C_ = {
    insert: function insert(e, t) {
      var n = function (e) {
        var t = O(np, e),
            n = ti.fromRangeStart(e.selection.getRng());
        return gw(t, e.getBody(), n).filter(v_);
      }(e);

      n.isSome() ? n.each(O(y_, e)) : function (e, t) {
        var n = e.selection,
            o = e.dom,
            r = n.getRng();
        var s, a;
        Pm(o, r).each(function (e) {
          r.setStart(e.startContainer, e.startOffset), r.setEnd(e.endContainer, e.endOffset);
        });
        var i = r.startOffset,
            l = r.startContainer;

        if (1 === l.nodeType && l.hasChildNodes()) {
          var _e115 = i > l.childNodes.length - 1;

          l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l, i = _e115 && 3 === l.nodeType ? l.nodeValue.length : 0;
        }

        var d = o.getParent(l, o.isBlock);
        var c = d ? o.getParent(d.parentNode, o.isBlock) : null,
            u = c ? c.nodeName.toUpperCase() : "",
            m = !(!t || !t.ctrlKey);
        "LI" !== u || m || (d = c), l && 3 === l.nodeType && i >= l.nodeValue.length && (function (e, t, n) {
          var o = new Qo(t, n);
          var r;
          var s = e.getNonEmptyElements();

          for (; r = o.next();) {
            if (s[r.nodeName.toLowerCase()] || r.length > 0) return !0;
          }
        }(e.schema, l, d) || (s = o.create("br"), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), a = !0)), s = o.create("br"), oi(o, r, s), f_(e, s, a), e.undoManager.add();
      }(e, t);
    },
    fakeEventName: "insertLineBreak"
  },
      w_ = function w_(e, t) {
    return e_(e).filter(function (e) {
      return t.length > 0 && hn(fn(e), t);
    }).isSome();
  },
      x_ = Ei([{
    br: []
  }, {
    block: []
  }, {
    none: []
  }]),
      k_ = function k_(e, t) {
    return function (e) {
      return w_(e, Qi(e));
    }(e);
  },
      S_ = function S_(e) {
    return function (t, n) {
      return function (e) {
        return e_(e).filter(function (e) {
          return sr(fn(e));
        }).isSome();
      }(t) === e;
    };
  },
      __ = function __(e, t) {
    return function (n, o) {
      var r = function (e) {
        return e_(e).fold(N(""), function (e) {
          return e.nodeName.toUpperCase();
        });
      }(n) === e.toUpperCase();

      return r === t;
    };
  },
      E_ = function E_(e) {
    return __("pre", e);
  },
      N_ = function N_(e) {
    return function (t, n) {
      return Wi(t) === e;
    };
  },
      R_ = function R_(e, t) {
    return function (e) {
      return w_(e, Xi(e));
    }(e);
  },
      A_ = function A_(e, t) {
    return t;
  },
      O_ = function O_(e) {
    var t = Ki(e),
        n = function (e, t) {
      var n = e.getRoot();
      var o, r;

      for (o = t; o !== n && "false" !== e.getContentEditable(o);) {
        "true" === e.getContentEditable(o) && (r = o), o = o.parentNode;
      }

      return o !== n ? r : n;
    }(e.dom, e.selection.getStart());

    return n && e.schema.isValidChild(n.nodeName, t);
  },
      T_ = function T_(e, t) {
    return function (n, o) {
      return Y(e, function (e, t) {
        return e && t(n, o);
      }, !0) ? M.some(t) : M.none();
    };
  },
      B_ = function B_(e, t, n) {
    t.selection.isCollapsed() || lp(t), C(n) && JS(t, e.fakeEventName).isDefaultPrevented() || (e.insert(t, n), C(n) && QS(t, e.fakeEventName));
  },
      D_ = function D_(e, t) {
    var n = function n() {
      return B_(C_, e, t);
    },
        o = function o() {
      return B_(m_, e, t);
    },
        r = function (e, t) {
      return rw([T_([k_], x_.none()), T_([__("summary", !0)], x_.br()), T_([E_(!0), N_(!1), A_], x_.br()), T_([E_(!0), N_(!1)], x_.block()), T_([E_(!0), N_(!0), A_], x_.block()), T_([E_(!0), N_(!0)], x_.br()), T_([S_(!0), A_], x_.br()), T_([S_(!0)], x_.block()), T_([R_], x_.br()), T_([A_], x_.br()), T_([O_], x_.block())], [e, !(!t || !t.shiftKey)]).getOr(x_.none());
    }(e, t);

    switch (Yi(e)) {
      case "linebreak":
        r.fold(n, n, S);
        break;

      case "block":
        r.fold(o, o, S);
        break;

      case "invert":
        r.fold(o, n, S);
        break;

      default:
        r.fold(n, o, S);
    }
  },
      P_ = Ct(),
      L_ = function L_(e) {
    return e.stopImmediatePropagation();
  },
      M_ = function M_(e) {
    return e.keyCode === om.PAGE_UP || e.keyCode === om.PAGE_DOWN;
  },
      I_ = function I_(e, t, n) {
    n && !e.get() ? t.on("NodeChange", L_, !0) : !n && e.get() && t.off("NodeChange", L_), e.set(n);
  },
      F_ = function F_(e, t) {
    var n = t.container(),
        o = t.offset();
    return Ro(n) ? (n.insertData(o, e), M.some(ti(n, o + e.length))) : rc(t).map(function (n) {
      var o = mn(e);
      return t.isAtEnd() ? Qn(n, o) : Xn(n, o), ti(o.dom, e.length);
    });
  },
      U_ = O(F_, fr),
      z_ = O(F_, " "),
      j_ = function j_(e, t) {
    return function (n) {
      return function (e, t) {
        return !Mg(t) && (function (e, t) {
          return function (e, t) {
            return Nc(e.dom, t).isNone();
          }(e, t) || function (e, t) {
            return Ec(e.dom, t).isNone();
          }(e, t) || xg(e, t) || kg(e, t) || Ag(e, t) || Rg(e, t);
        }(e, t) || Pg(e, t) || Lg(e, t));
      }(e, n) ? U_(t) : z_(t);
    };
  },
      V_ = function V_(e) {
    var t = ti.fromRangeStart(e.selection.getRng()),
        n = fn(e.getBody());

    if (e.selection.isCollapsed()) {
      var _o77 = O(np, e),
          _r56 = ti.fromRangeStart(e.selection.getRng());

      return gw(_o77, e.getBody(), _r56).bind(function (e) {
        return function (t) {
          return t.fold(function (t) {
            return Nc(e.dom, ti.before(t));
          }, function (e) {
            return Rc(e);
          }, function (e) {
            return Ac(e);
          }, function (t) {
            return Ec(e.dom, ti.after(t));
          });
        };
      }(n)).map(function (o) {
        return function () {
          return j_(n, t)(o).each(function (e) {
            return function (t) {
              return e.selection.setRng(t.toRange()), e.nodeChanged(), !0;
            };
          }(e));
        };
      });
    }

    return M.none();
  },
      H_ = function H_(e) {
    return vd(e) ? [{
      keyCode: om.TAB,
      action: Qx(Ek, e, !0)
    }, {
      keyCode: om.TAB,
      shiftKey: !0,
      action: Qx(Ek, e, !1)
    }] : [];
  },
      $_ = function $_(e) {
    if (e.addShortcut("Meta+P", "", "mcePrint"), YS(e), dy(e)) return ea(null);
    {
      var _t106 = ix(e);

      return function (e) {
        e.on("keyup compositionstart", O(Ux, e));
      }(e), function (e, t) {
        e.on("keydown", function (n) {
          !1 === n.isDefaultPrevented() && function (e, t, n) {
            var o = Nt.os.isMacOS() || Nt.os.isiOS();
            Jx([{
              keyCode: om.RIGHT,
              action: Qx(Vx, e, !0)
            }, {
              keyCode: om.LEFT,
              action: Qx(Vx, e, !1)
            }, {
              keyCode: om.UP,
              action: Qx(Hx, e, !1)
            }, {
              keyCode: om.DOWN,
              action: Qx(Hx, e, !0)
            }].concat(_toConsumableArray(o ? [{
              keyCode: om.UP,
              action: Qx(qx, e, !1),
              metaKey: !0,
              shiftKey: !0
            }, {
              keyCode: om.DOWN,
              action: Qx(qx, e, !0),
              metaKey: !0,
              shiftKey: !0
            }] : []), [{
              keyCode: om.RIGHT,
              action: Qx(wk, e, !0)
            }, {
              keyCode: om.LEFT,
              action: Qx(wk, e, !1)
            }, {
              keyCode: om.UP,
              action: Qx(xk, e, !1)
            }, {
              keyCode: om.DOWN,
              action: Qx(xk, e, !0)
            }, {
              keyCode: om.RIGHT,
              action: Qx(ek, e, !0)
            }, {
              keyCode: om.LEFT,
              action: Qx(ek, e, !1)
            }, {
              keyCode: om.UP,
              action: Qx(tk, e, !1)
            }, {
              keyCode: om.DOWN,
              action: Qx(tk, e, !0)
            }, {
              keyCode: om.RIGHT,
              action: Qx(sx, e, t, !0)
            }, {
              keyCode: om.LEFT,
              action: Qx(sx, e, t, !1)
            }, {
              keyCode: om.RIGHT,
              ctrlKey: !o,
              altKey: o,
              action: Qx(lx, e, t)
            }, {
              keyCode: om.LEFT,
              ctrlKey: !o,
              altKey: o,
              action: Qx(dx, e, t)
            }, {
              keyCode: om.UP,
              action: Qx(Gx, e, !1)
            }, {
              keyCode: om.DOWN,
              action: Qx(Gx, e, !0)
            }]), n).each(function (e) {
              n.preventDefault();
            });
          }(e, t, n);
        });
      }(e, _t106), function (e, t) {
        e.on("keydown", function (n) {
          !1 === n.isDefaultPrevented() && function (e, t, n) {
            var o = n.keyCode === om.BACKSPACE ? "deleteContentBackward" : "deleteContentForward";
            Zx([{
              keyCode: om.BACKSPACE,
              action: Qx(Ex, e)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(WC, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(WC, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(FC, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(FC, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(fx, e, t, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(fx, e, t, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(Fp, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(Fp, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(KC, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(KC, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(vx, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(vx, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(AC, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(AC, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(EC, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(EC, e, !0)
            }, {
              keyCode: om.BACKSPACE,
              action: Qx(hx, e, !1)
            }, {
              keyCode: om.DELETE,
              action: Qx(hx, e, !0)
            }], n).each(function (t) {
              n.preventDefault(), JS(e, o).isDefaultPrevented() || (t(), QS(e, o));
            });
          }(e, t, n);
        }), e.on("keyup", function (t) {
          !1 === t.isDefaultPrevented() && function (e, t) {
            Jx([{
              keyCode: om.BACKSPACE,
              action: Qx(qC, e)
            }, {
              keyCode: om.DELETE,
              action: Qx(qC, e)
            }], t);
          }(e, t);
        });
      }(e, _t106), function (e) {
        e.on("keydown", function (t) {
          t.keyCode === om.ENTER && function (e, t) {
            var n;
            t.isDefaultPrevented() || (t.preventDefault(), (n = e.undoManager).typing && (n.typing = !1, n.add()), e.undoManager.transact(function () {
              D_(e, t);
            }));
          }(e, t);
        });
      }(e), function (e) {
        e.on("keydown", function (t) {
          !1 === t.isDefaultPrevented() && function (e, t) {
            Zx([{
              keyCode: om.SPACEBAR,
              action: Qx(V_, e)
            }], t).each(function (n) {
              t.preventDefault(), JS(e, "insertText", {
                data: " "
              }).isDefaultPrevented() || (n(), QS(e, "insertText", {
                data: " "
              }));
            });
          }(e, t);
        });
      }(e), function (e) {
        e.on("input", function (t) {
          !1 === t.isComposing && function (e) {
            var t = fn(e.getBody());
            e.selection.isCollapsed() && Vg(t, ti.fromRangeStart(e.selection.getRng())).each(function (t) {
              e.selection.setRng(t.toRange());
            });
          }(e);
        });
      }(e), function (e) {
        e.on("keydown", function (t) {
          !1 === t.isDefaultPrevented() && function (e, t) {
            Jx(_toConsumableArray(H_(e)), t).each(function (e) {
              t.preventDefault();
            });
          }(e, t);
        });
      }(e), function (e, t) {
        e.on("keydown", function (n) {
          !1 === n.isDefaultPrevented() && function (e, t, n) {
            var o = Nt.os.isMacOS() || Nt.os.isiOS();
            Jx([{
              keyCode: om.END,
              action: Qx($x, e, !0)
            }, {
              keyCode: om.HOME,
              action: Qx($x, e, !1)
            }].concat(_toConsumableArray(o ? [] : [{
              keyCode: om.HOME,
              action: Qx(qx, e, !1),
              ctrlKey: !0,
              shiftKey: !0
            }, {
              keyCode: om.END,
              action: Qx(qx, e, !0),
              ctrlKey: !0,
              shiftKey: !0
            }]), [{
              keyCode: om.END,
              action: Qx(nk, e, !0)
            }, {
              keyCode: om.HOME,
              action: Qx(nk, e, !1)
            }, {
              keyCode: om.END,
              action: Qx(cx, e, !0, t)
            }, {
              keyCode: om.HOME,
              action: Qx(cx, e, !1, t)
            }]), n).each(function (e) {
              n.preventDefault();
            });
          }(e, t, n);
        });
      }(e, _t106), function (e, t) {
        if (P_.os.isMacOS()) return;
        var n = ea(!1);
        e.on("keydown", function (t) {
          M_(t) && I_(n, e, !0);
        }), e.on("keyup", function (o) {
          !1 === o.isDefaultPrevented() && function (e, t, n) {
            Jx([{
              keyCode: om.PAGE_UP,
              action: Qx(cx, e, !1, t)
            }, {
              keyCode: om.PAGE_DOWN,
              action: Qx(cx, e, !0, t)
            }], n);
          }(e, t, o), M_(o) && n.get() && (I_(n, e, !1), e.nodeChanged());
        });
      }(e, _t106), _t106;
    }
  };

  var q_ =
  /*#__PURE__*/
  function () {
    function q_(e) {
      _classCallCheck(this, q_);

      var t;
      this.lastPath = [], this.editor = e;
      var n = this;
      "onselectionchange" in e.getDoc() || e.on("NodeChange click mouseup keyup focus", function (n) {
        var o = e.selection.getRng(),
            r = {
          startContainer: o.startContainer,
          startOffset: o.startOffset,
          endContainer: o.endContainer,
          endOffset: o.endOffset
        };
        "nodechange" !== n.type && _m(r, t) || e.dispatch("SelectionChange"), t = r;
      }), e.on("contextmenu", function () {
        e.dispatch("SelectionChange");
      }), e.on("SelectionChange", function () {
        var t = e.selection.getStart(!0);
        t && ju(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({
          selectionChange: !0
        });
      }), e.on("mouseup", function (t) {
        !t.isDefaultPrevented() && ju(e) && ("IMG" === e.selection.getNode().nodeName ? bf.setEditorTimeout(e, function () {
          e.nodeChanged();
        }) : e.nodeChanged());
      });
    }

    _createClass(q_, [{
      key: "nodeChanged",
      value: function nodeChanged(e) {
        var t = this.editor.selection;
        var n, o, r;
        this.editor.initialized && t && !zl(this.editor) && !this.editor.mode.isReadOnly() && (r = this.editor.getBody(), n = t.getStart(!0) || r, n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, r) || (n = r), o = [], this.editor.dom.getParent(n, function (e) {
          if (e === r) return !0;
          o.push(e);
        }), (e = e || {}).element = n, e.parents = o, this.editor.dispatch("NodeChange", e));
      }
    }, {
      key: "isSameElementPath",
      value: function isSameElementPath(e) {
        var t;
        var n = this.editor,
            o = ne(n.dom.getParents(e, L, n.getBody()));

        if (o.length === this.lastPath.length) {
          for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--) {
            ;
          }

          if (-1 === t) return this.lastPath = o, !0;
        }

        return this.lastPath = o, !1;
      }
    }]);

    return q_;
  }();

  var W_ = N("x-tinymce/html"),
      K_ = "\x3c!-- x-tinymce/html --\x3e",
      G_ = function G_(e) {
    return K_ + e;
  },
      Y_ = function Y_(e) {
    return -1 !== e.indexOf(K_);
  },
      X_ = "%MCEPASTEBIN%",
      Q_ = function Q_(e) {
    return e.dom.get("mcepastebin");
  },
      J_ = function J_(e) {
    return e && "mcepastebin" === e.id;
  },
      Z_ = function Z_(e) {
    return e === X_;
  },
      eE = function eE(e, t) {
    return Bt.each(t, function (t) {
      e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1]);
    }), e;
  },
      tE = function tE(e) {
    return eE(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, function (e, t, n) {
      return t || n ? fr : " ";
    }], /<br class="Apple-interchange-newline">/g, /<br>$/i]);
  },
      nE = function nE(e, t) {
    return {
      content: e,
      cancelled: t
    };
  },
      oE = function oE(e, t) {
    return e.insertContent(t, {
      merge: ld(e),
      paste: !0
    }), !0;
  },
      rE = function rE(e) {
    return /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e);
  },
      sE = function sE(e, t, n) {
    return !(e.selection.isCollapsed() || !rE(t)) && function (e, t, n) {
      return e.undoManager.extra(function () {
        n(e, t);
      }, function () {
        e.execCommand("mceInsertLink", !1, t);
      }), !0;
    }(e, t, n);
  },
      aE = function aE(e, t, n) {
    return !!function (e, t) {
      return rE(t) && V(bd(e), function (e) {
        return je(t.toLowerCase(), ".".concat(e.toLowerCase()));
      });
    }(e, t) && function (e, t, n) {
      return e.undoManager.extra(function () {
        n(e, t);
      }, function () {
        e.insertContent('<img src="' + t + '">');
      }), !0;
    }(e, t, n);
  },
      iE = function (e) {
    var t = 0;
    return function () {
      return "mceclip" + t++;
    };
  }(),
      lE = function lE(e, t, n, o) {
    var r = function (e, t, n) {
      return function (e, t, n) {
        var o = function (e, t, n) {
          return e.dispatch("PastePreProcess", {
            content: t,
            internal: n
          });
        }(e, t, n),
            r = function (e, t) {
          var n = Ov({}, e.schema);
          n.addNodeFilter("meta", function (e) {
            Bt.each(e, function (e) {
              e.remove();
            });
          });
          var o = n.parse(t, {
            forced_root_block: !1,
            isRootContent: !0
          });
          return Xf({
            validate: !0
          }, e.schema).serialize(o);
        }(e, o.content);

        return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented() ? function (e, t, n) {
          var o = e.dom.create("div", {
            style: "display:none"
          }, t),
              r = function (e, t, n) {
            return e.dispatch("PastePostProcess", {
              node: t,
              internal: n
            });
          }(e, o, n);

          return nE(r.node.innerHTML, r.isDefaultPrevented());
        }(e, r, n) : nE(r, o.isDefaultPrevented());
      }(e, t, n);
    }(e, t, n);

    !1 === r.cancelled && function (e, t, n) {
      n || !dd(e) ? oE(e, t) : function (e, t) {
        Bt.each([sE, aE, oE], function (n) {
          return !0 !== n(e, t, oE);
        });
      }(e, t);
    }(e, r.content, o);
  },
      dE = function dE(e, t, n) {
    var o = n || Y_(t);
    lE(e, function (e) {
      return e.replace(K_, "");
    }(t), o, !1);
  },
      cE = function cE(e, t) {
    var n = e.dom.encode(t).replace(/\r\n/g, "\n"),
        o = function (e, t, n) {
      var o = e.split(/\n\n/),
          r = function (e, t) {
        var n = "<" + e;
        var o = ye(t, function (e, t) {
          return t + '="' + Cs.encodeAllRaw(e) + '"';
        });
        return o.length && (n += " " + o.join(" ")), n + ">";
      }(t, n),
          s = "</" + t + ">",
          a = H(o, function (e) {
        return e.split(/\n/).join("<br />");
      });

      return 1 === a.length ? a[0] : H(a, function (e) {
        return r + e + s;
      }).join("");
    }(Jr(n, ud(e)), Ki(e), Gi(e));

    lE(e, o, !1, !0);
  },
      uE = function uE(e) {
    var t = {};
    if (e && e.types) for (var _n88 = 0; _n88 < e.types.length; _n88++) {
      var _o78 = e.types[_n88];

      try {
        t[_o78] = e.getData(_o78);
      } catch (e) {
        t[_o78] = "";
      }
    }
    return t;
  },
      mE = function mE(e, t) {
    return t in e && e[t].length > 0;
  },
      fE = function fE(e) {
    return mE(e, "text/html") || mE(e, "text/plain");
  },
      gE = function gE(e, t, n) {
    var o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
    var r;

    if (od(e) && o) {
      var _s32 = function (e, t) {
        var n = t.items ? ee(de(t.items), function (e) {
          return "file" === e.kind ? [e.getAsFile()] : [];
        }) : [],
            o = t.files ? de(t.files) : [];
        return K(n.length > 0 ? n : o, function (e) {
          var t = bd(e);
          return function (e) {
            return ze(e.type, "image/") && V(t, function (t) {
              return function (e) {
                var t = e.toLowerCase(),
                    n = {
                  jpg: "jpeg",
                  jpe: "jpeg",
                  jfi: "jpeg",
                  jif: "jpeg",
                  jfif: "jpeg",
                  pjpeg: "jpeg",
                  pjp: "jpeg",
                  svg: "svg+xml"
                };
                return Bt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t;
              }(t) === e.type;
            });
          };
        }(e));
      }(e, o);

      if (_s32.length > 0) return t.preventDefault(), (r = _s32, Promise.all(H(r, function (e) {
        return uv(e).then(function (t) {
          return {
            file: e,
            uri: t
          };
        });
      }))).then(function (t) {
        n && e.selection.setRng(n), $(t, function (t) {
          (function (e, t) {
            dv(t.uri).each(function (_ref15) {
              var n = _ref15.data,
                  o = _ref15.type,
                  r = _ref15.base64Encoded;
              var s = r ? n : btoa(n),
                  a = t.file,
                  i = e.editorUpload.blobCache,
                  l = i.getByData(s, o),
                  d = null != l ? l : function (e, t, n, o) {
                var r = iE(),
                    s = tl(e) && C(n.name),
                    a = s ? function (e, t) {
                  var n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
                  return C(n) ? e.dom.encode(n[1]) : null;
                }(e, n.name) : r,
                    i = s ? n.name : void 0,
                    l = t.create(r, n, o, a, i);
                return t.add(l), l;
              }(e, i, a, s);
              dE(e, "<img src=\"".concat(d.blobUri(), "\">"), !1);
            });
          })(e, t);
        });
      }), !0;
    }

    return !1;
  },
      pE = function pE(e, t, n, o) {
    var r = tE(n);

    var s = mE(t, W_()) || Y_(n),
        a = !s && function (e) {
      return !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e);
    }(r),
        i = rE(r);

    (Z_(r) || !r.length || a && !i) && (o = !0), (o || i) && (r = mE(t, "text/plain") && a ? t["text/plain"] : function (e) {
      var t = Bs(),
          n = Ov({}, t);
      var o = "";

      var r = t.getVoidElements(),
          s = Bt.makeMap("script noscript style textarea video audio iframe object", " "),
          a = t.getBlockElements(),
          i = function i(e) {
        var n = e.name,
            l = e;

        if ("br" !== n) {
          if ("wbr" !== n) if (r[n] && (o += " "), s[n]) o += " ";else {
            if (3 === e.type && (o += e.value), !(e.name in t.getVoidElements()) && (e = e.firstChild)) do {
              i(e);
            } while (e = e.next);
            a[n] && l.next && (o += "\n", "p" === n && (o += "\n"));
          }
        } else o += "\n";
      };

      return e = eE(e, [/<!\[[^\]]+\]>/g]), i(n.parse(e)), o;
    }(r)), Z_(r) || (o ? cE(e, r) : dE(e, r, s));
  },
      hE = function hE(e, t, n) {
    (function (e, t, n) {
      var o;
      e.on("keydown", function (e) {
        (function (e) {
          return om.metaKeyPressed(e) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode;
        })(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode);
      }), e.on("paste", function (r) {
        if (r.isDefaultPrevented() || function (e) {
          var t, n;
          return Nt.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length);
        }(r)) return;
        var s = "text" === n.get() || o;
        o = !1;
        var a = uE(r.clipboardData);
        !fE(a) && gE(e, r, t.getLastRng() || e.selection.getRng()) || (mE(a, "text/html") ? (r.preventDefault(), pE(e, a, a["text/html"], s)) : (t.create(), bf.setEditorTimeout(e, function () {
          var n = t.getHtml();
          t.remove(), pE(e, a, n, s);
        }, 0)));
      });
    })(e, t, n), function (e) {
      var t = function t(e) {
        return ze(e, "webkit-fake-url");
      },
          n = function n(e) {
        return ze(e, "data:");
      };

      e.parser.addNodeFilter("img", function (o, r, s) {
        if (!od(e) && function (e) {
          var t;
          return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste);
        }(s)) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = o[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _r57 = _step4.value;

              var _o79 = _r57.attr("src");

              m(_o79) && !_r57.attr("data-mce-object") && _o79 !== Nt.transparentSrc && (t(_o79) || !md(e) && n(_o79)) && _r57.remove();
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      });
    }(e);
  },
      bE = function bE(e, t, n, o) {
    (function (e, t, n) {
      try {
        return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(W_(), t), !0;
      } catch (e) {
        return !1;
      }
    })(e.clipboardData, t.html, t.text) ? (e.preventDefault(), o()) : n(t.html, o);
  },
      vE = function vE(e) {
    return function (t, n) {
      var o = e.dom,
          r = e.selection,
          s = o.create("div", {
        contenteditable: "false",
        "data-mce-bogus": "all"
      }),
          a = o.create("div", {
        contenteditable: "true"
      }, t);
      o.setStyles(s, {
        position: "fixed",
        top: "0",
        left: "-3000px",
        width: "1000px",
        overflow: "hidden"
      }), s.appendChild(a), o.add(e.getBody(), s);
      var i = r.getRng();
      a.focus();
      var l = o.createRng();
      l.selectNodeContents(a), r.setRng(l), bf.setEditorTimeout(e, function () {
        r.setRng(i), o.remove(s), n();
      }, 0);
    };
  },
      yE = function yE(e) {
    return {
      html: G_(e.selection.getContent({
        contextual: !0
      })),
      text: e.selection.getContent({
        format: "text"
      })
    };
  },
      CE = function CE(e) {
    return !e.selection.isCollapsed() || function (e) {
      return !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody());
    }(e);
  },
      wE = function wE(e, t) {
    var n, o;
    return Im.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc());
  },
      xE = function xE(e, t) {
    e.focus(), t && e.selection.setRng(t);
  },
      kE = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
      SE = function SE(e) {
    return Bt.trim(e).replace(kE, eu).toLowerCase();
  },
      _E = function _E(e, t, n) {
    var o = ad(e);
    if (n || "all" === o || !id(e)) return t;
    var r = o ? o.split(/[, ]/) : [];

    if (r && "none" !== o) {
      var _n89 = e.dom,
          _o80 = e.selection.getNode();

      t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, function (e, t, s, a) {
        var i = _n89.parseStyle(_n89.decode(s)),
            l = {};

        for (var _e116 = 0; _e116 < r.length; _e116++) {
          var _t107 = i[r[_e116]];

          var _s33 = _t107,
              _a20 = _n89.getStyle(_o80, r[_e116], !0);

          /color/.test(r[_e116]) && (_s33 = SE(_s33), _a20 = SE(_a20)), _a20 !== _s33 && (l[r[_e116]] = _t107);
        }

        var d = _n89.serializeStyle(l, "span");

        return d ? t + ' style="' + d + '"' + a : t + a;
      });
    } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");

    return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, function (e, t, n, o) {
      return t + ' style="' + n + '"' + o;
    }), t;
  },
      EE = function EE(e) {
    var t = ea(!1),
        n = ea(cd(e) ? "text" : "html"),
        o = function (e) {
      var t = ea(null);
      return {
        create: function create() {
          return function (e, t) {
            var n = e.dom,
                o = e.selection,
                r = e.getBody();
            t.set(o.getRng());
            var s = n.add(e.getBody(), "div", {
              id: "mcepastebin",
              "class": "mce-pastebin",
              contentEditable: !0,
              "data-mce-bogus": "all",
              style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"
            }, X_);
            Nt.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535), n.bind(s, "beforedeactivate focusin focusout", function (e) {
              e.stopPropagation();
            }), s.focus(), o.select(s, !0);
          }(e, t);
        },
        remove: function remove() {
          return function (e, t) {
            var n = e.dom;

            if (Q_(e)) {
              var _o81;

              var _r58 = t.get();

              for (; _o81 = Q_(e);) {
                n.remove(_o81), n.unbind(_o81);
              }

              _r58 && e.selection.setRng(_r58);
            }

            t.set(null);
          }(e, t);
        },
        getEl: function getEl() {
          return Q_(e);
        },
        getHtml: function getHtml() {
          return function (e) {
            var t = e.dom,
                n = function n(e, _n90) {
              e.appendChild(_n90), t.remove(_n90, !0);
            },
                _K = K(e.getBody().childNodes, J_),
                _K2 = _toArray(_K),
                o = _K2[0],
                r = _K2.slice(1);

            $(r, function (e) {
              n(o, e);
            });
            var s = t.select("div[id=mcepastebin]", o);

            for (var _e117 = s.length - 1; _e117 >= 0; _e117--) {
              var _r59 = t.create("div");

              o.insertBefore(_r59, s[_e117]), n(_r59, s[_e117]);
            }

            return o ? o.innerHTML : "";
          }(e);
        },
        getLastRng: t.get
      };
    }(e);

    (function (e) {
      (Nt.browser.isChromium() || Nt.browser.isSafari()) && function (e, t) {
        e.on("PastePreProcess", function (n) {
          n.content = t(e, n.content, n.internal);
        });
      }(e, _E);
    })(e), function (e, t) {
      e.addCommand("mceTogglePlainTextPaste", function () {
        (function (e, t) {
          "text" === t.get() ? (t.set("html"), nm(e, !1)) : (t.set("text"), nm(e, !0)), e.focus();
        })(e, t);
      }), e.addCommand("mceInsertClipboardContent", function (t, n) {
        n.html && dE(e, n.html, n.internal), n.text && cE(e, n.text);
      });
    }(e, n), function (e) {
      var t = function t(_t108) {
        return function (n) {
          _t108(e, n);
        };
      },
          n = rd(e);

      w(n) && e.on("PastePreProcess", t(n));
      var o = sd(e);
      w(o) && e.on("PastePostProcess", t(o));
    }(e), e.on("PreInit", function () {
      (function (e) {
        e.on("cut", function (e) {
          return function (t) {
            !t.isDefaultPrevented() && CE(e) && bE(t, yE(e), vE(e), function () {
              if (Nt.browser.isChromium() || Nt.browser.isFirefox()) {
                var _t109 = e.selection.getRng();

                bf.setEditorTimeout(e, function () {
                  e.selection.setRng(_t109), e.execCommand("Delete");
                }, 0);
              } else e.execCommand("Delete");
            });
          };
        }(e)), e.on("copy", function (e) {
          return function (t) {
            !t.isDefaultPrevented() && CE(e) && bE(t, yE(e), vE(e), S);
          };
        }(e));
      })(e), function (e, t) {
        nd(e) && e.on("dragend dragover draggesture dragdrop drop drag", function (e) {
          e.preventDefault(), e.stopPropagation();
        }), od(e) || e.on("drop", function (e) {
          var t = e.dataTransfer;
          t && function (e) {
            return V(e.files, function (e) {
              return /^image\//.test(e.type);
            });
          }(t) && e.preventDefault();
        }), e.on("drop", function (n) {
          if (n.isDefaultPrevented() || t.get()) return;
          var o = wE(e, n);
          if (y(o)) return;
          var r = uE(n.dataTransfer),
              s = mE(r, W_());
          if ((!fE(r) || function (e) {
            var t = e["text/plain"];
            return !!t && 0 === t.indexOf("file://");
          }(r)) && gE(e, n, o)) return;
          var a = r[W_()],
              i = a || r["text/html"] || r["text/plain"];
          i && (n.preventDefault(), bf.setEditorTimeout(e, function () {
            e.undoManager.transact(function () {
              a && e.execCommand("Delete"), xE(e, o);
              var t = tE(i);
              r["text/html"] ? dE(e, t, s) : cE(e, t);
            });
          }));
        }), e.on("dragstart", function (e) {
          t.set(!0);
        }), e.on("dragover dragend", function (n) {
          od(e) && !1 === t.get() && (n.preventDefault(), xE(e, wE(e, n))), "dragend" === n.type && t.set(!1);
        });
      }(e, t), hE(e, o, n);
    });
  },
      NE = Po,
      RE = Ro,
      AE = function AE(e) {
    return Io(e.dom);
  },
      OE = function OE(e) {
    return function (t) {
      return vn(fn(e), t);
    };
  },
      TE = function TE(e, t) {
    return qo(fn(e), AE, OE(t));
  },
      BE = function BE(e, t, n) {
    var o = new Qo(e, t),
        r = n ? o.next.bind(o) : o.prev.bind(o);
    var s = e;

    for (var _t110 = n ? e : r(); _t110 && !NE(_t110); _t110 = r()) {
      Wr(_t110) && (s = _t110);
    }

    return s;
  },
      DE = function DE(e) {
    var t = function (e, t) {
      var n = ti.fromRangeStart(e).getNode(),
          o = function (e, t) {
        return qo(fn(e), function (e) {
          return function (e) {
            return Mo(e.dom);
          }(e) || er(e);
        }, OE(t)).getOr(fn(t)).dom;
      }(n, t),
          r = BE(n, o, !1),
          s = BE(n, o, !0),
          a = document.createRange();

      return TE(r, o).fold(function () {
        RE(r) ? a.setStart(r, 0) : a.setStartBefore(r);
      }, function (e) {
        return a.setStartBefore(e.dom);
      }), TE(s, o).fold(function () {
        RE(s) ? a.setEnd(s, s.data.length) : a.setEndAfter(s);
      }, function (e) {
        return a.setEndAfter(e.dom);
      }), a;
    }(e.selection.getRng(), e.getBody());

    e.selection.setRng(Yp(t));
  };

  var PE;
  !function (e) {
    e.Before = "before", e.After = "after";
  }(PE || (PE = {}));

  var LE = function LE(e, t) {
    return Math.abs(e.left - t);
  },
      ME = function ME(e, t) {
    return Math.abs(e.right - t);
  },
      IE = function IE(e, t) {
    return function (e) {
      return Y(e, function (e, t) {
        return e.fold(function () {
          return M.some(t);
        }, function (e) {
          var n = Math.min(t.left, e.left),
              o = Math.min(t.top, e.top),
              r = Math.max(t.right, e.right),
              s = Math.max(t.bottom, e.bottom);
          return M.some({
            top: o,
            right: r,
            bottom: s,
            left: n,
            width: r - n,
            height: s - o
          });
        });
      }, M.none());
    }(K(e, function (e) {
      return (n = t) >= (o = e).top && n <= o.bottom;
      var n, o;
    })).fold(function () {
      return [[], e];
    }, function (t) {
      var _W2 = W(e, function (e) {
        return function (e, t) {
          var n = function (e, t) {
            return Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top));
          }(e, t) / Math.min(e.height, t.height);

          return function (e, t) {
            return e.top < t.bottom && e.bottom > t.top;
          }(e, t) && n > .5;
        }(e, t);
      }),
          n = _W2.pass,
          o = _W2.fail;

      return [n, o];
    });
  },
      FE = function FE(e, t, n) {
    return t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t));
  },
      UE = function UE(e, t, n) {
    var o = function o(e) {
      return Wr(e.node) ? M.some(e) : Co(e.node) ? UE(de(e.node.childNodes), t, n) : M.none();
    },
        r = function r(e, _r60) {
      var s = se(e, function (e, o) {
        return _r60(e, t, n) - _r60(o, t, n);
      });
      return function (e, r) {
        if (e.length >= 2) {
          var _s34 = o(e[0]).getOr(e[0]),
              _a21 = o(e[1]).getOr(e[1]);

          if (Math.abs(r(_s34, t, n) - r(_a21, t, n)) < 2) {
            if (Ro(_s34.node)) return M.some(_s34);
            if (Ro(_a21.node)) return M.some(_a21);
          }
        }

        return M.none();
      }(s, _r60).orThunk(function () {
        return ce(s, o);
      });
    },
        _IE = IE(Vw(e), n),
        _IE2 = _slicedToArray(_IE, 2),
        s = _IE2[0],
        a = _IE2[1],
        _W3 = W(a, function (e) {
      return e.top < n;
    }),
        i = _W3.pass,
        l = _W3.fail;

    return r(s, FE).orThunk(function () {
      return r(l, Da);
    }).orThunk(function () {
      return r(i, Da);
    });
  },
      zE = function zE(e, t, n) {
    return function (e, t, n) {
      var o = fn(e),
          r = wn(o),
          s = gn(r, t, n).filter(function (e) {
        return yn(o, e);
      }).getOr(o);
      return function (e, t, n, o) {
        var r = function r(t, s) {
          return s.fold(function () {
            return UE(de(t.dom.childNodes), n, o);
          }, function (e) {
            var r = K(de(t.dom.childNodes), function (t) {
              return t !== e.dom;
            });
            return UE(r, n, o);
          }).orThunk(function () {
            var n;
            return (vn(t, e) ? M.none() : (n = t, M.from(n.dom.parentElement).map(fn))).bind(function (e) {
              return r(e, M.some(t));
            });
          });
        };

        return r(t, M.none());
      }(o, s, t, n);
    }(e, t, n).filter(function (e) {
      return Pd(e.node);
    }).map(function (e) {
      return function (e, t) {
        return {
          node: e.node,
          position: LE(e, t) < ME(e, t) ? PE.Before : PE.After
        };
      }(e, t);
    });
  },
      jE = function jE(e) {
    var t = e.getBoundingClientRect(),
        n = e.ownerDocument,
        o = n.documentElement,
        r = n.defaultView;
    return {
      top: t.top + r.pageYOffset - o.clientTop,
      left: t.left + r.pageXOffset - o.clientLeft
    };
  },
      VE = Io,
      HE = Mo,
      $E = function $E(e, t, n, o) {
    var r = e.dom,
        s = t.cloneNode(!0);
    r.setStyles(s, {
      width: n,
      height: o
    }), r.setAttrib(s, "data-mce-selected", null);
    var a = r.create("div", {
      "class": "mce-drag-container",
      "data-mce-bogus": "all",
      unselectable: "on",
      contenteditable: "false"
    });
    return r.setStyles(a, {
      position: "absolute",
      opacity: .5,
      overflow: "hidden",
      border: 0,
      padding: 0,
      margin: 0,
      width: n,
      height: o
    }), r.setStyles(s, {
      margin: 0,
      boxSizing: "border-box"
    }), a.appendChild(s), a;
  },
      qE = function qE(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  },
      WE = function WE(e) {
    e.on(function (e) {
      qE(e.ghost);
    }), e.clear();
  },
      KE = function KE(e) {
    var t = aa(),
        n = Qs.DOM,
        o = document,
        r = function (e, t) {
      return function (n) {
        if (function (e) {
          return 0 === e.button;
        }(n)) {
          var _s35 = Q(t.dom.getParents(n.target), function () {
            for (var _len13 = arguments.length, e = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
              e[_key13] = arguments[_key13];
            }

            return function (t) {
              for (var _n91 = 0; _n91 < e.length; _n91++) {
                if (e[_n91](t)) return !0;
              }

              return !1;
            };
          }(VE, HE)).getOr(null);

          if (o = t.getBody(), VE(r = _s35) && r !== o) {
            var _o82 = t.dom.getPos(_s35),
                _r61 = t.getBody(),
                _a22 = t.getDoc().documentElement;

            e.set({
              element: _s35,
              dragging: !1,
              screenX: n.screenX,
              screenY: n.screenY,
              maxX: (t.inline ? _r61.scrollWidth : _a22.offsetWidth) - 2,
              maxY: (t.inline ? _r61.scrollHeight : _a22.offsetHeight) - 2,
              relX: n.pageX - _o82.x,
              relY: n.pageY - _o82.y,
              width: _s35.offsetWidth,
              height: _s35.offsetHeight,
              ghost: $E(t, _s35, _s35.offsetWidth, _s35.offsetHeight)
            });
          }
        }

        var o, r;
      };
    }(t, e),
        s = function (e, t) {
      var n = ia(function (e, n) {
        t._selectionOverrides.hideFakeCaret(), t.selection.placeCaretAt(e, n);
      }, 0);
      return t.on("remove", n.cancel), function (o) {
        return e.on(function (e) {
          var r = Math.max(Math.abs(o.screenX - e.screenX), Math.abs(o.screenY - e.screenY));

          if (!e.dragging && r > 10) {
            if (t.dispatch("dragstart", {
              target: e.element
            }).isDefaultPrevented()) return;
            e.dragging = !0, t.focus();
          }

          if (e.dragging) {
            var _r62 = function (e, t) {
              return {
                pageX: t.pageX - e.relX,
                pageY: t.pageY + 5
              };
            }(e, function (e, t) {
              return n = function (e) {
                return e.inline ? jE(e.getBody()) : {
                  left: 0,
                  top: 0
                };
              }(e), o = function (e) {
                var t = e.getBody();
                return e.inline ? {
                  left: t.scrollLeft,
                  top: t.scrollTop
                } : {
                  left: 0,
                  top: 0
                };
              }(e), r = function (e, t) {
                if (t.target.ownerDocument !== e.getDoc()) {
                  var _n92 = jE(e.getContentAreaContainer()),
                      _o83 = function (e) {
                    var t = e.getBody(),
                        n = e.getDoc().documentElement,
                        o = {
                      left: t.scrollLeft,
                      top: t.scrollTop
                    },
                        r = {
                      left: t.scrollLeft || n.scrollLeft,
                      top: t.scrollTop || n.scrollTop
                    };
                    return e.inline ? o : r;
                  }(e);

                  return {
                    left: t.pageX - _n92.left + _o83.left,
                    top: t.pageY - _n92.top + _o83.top
                  };
                }

                return {
                  left: t.pageX,
                  top: t.pageY
                };
              }(e, t), {
                pageX: r.left - n.left + o.left,
                pageY: r.top - n.top + o.top
              };
              var n, o, r;
            }(t, o));

            s = e.ghost, a = t.getBody(), s.parentNode !== a && a.appendChild(s), function (e, t, n, o, r, s) {
              var a = 0,
                  i = 0;
              e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > r && (a = t.pageX + n - r), t.pageY + o > s && (i = t.pageY + o - s), e.style.width = n - a + "px", e.style.height = o - i + "px";
            }(e.ghost, _r62, e.width, e.height, e.maxX, e.maxY), n.throttle(o.clientX, o.clientY);
          }

          var s, a;
        });
      };
    }(t, e),
        a = function (e, t) {
      return function (n) {
        e.on(function (e) {
          if (e.dragging) {
            if (function (e, t, n) {
              return t !== n && !e.dom.isChildOf(t, n) && !VE(t);
            }(t, function (e) {
              var t = e.getSel().getRangeAt(0).startContainer;
              return 3 === t.nodeType ? t.parentNode : t;
            }(t.selection), e.element)) {
              var _o84 = function (e) {
                var t = e.cloneNode(!0);
                return t.removeAttribute("data-mce-selected"), t;
              }(e.element);

              t.dispatch("drop", {
                clientX: n.clientX,
                clientY: n.clientY
              }).isDefaultPrevented() || t.undoManager.transact(function () {
                qE(e.element), t.insertContent(t.dom.getOuterHTML(_o84)), t._selectionOverrides.hideFakeCaret();
              });
            }

            t.dispatch("dragend");
          }
        }), WE(e);
      };
    }(t, e),
        i = function (e, t) {
      return function () {
        e.on(function (e) {
          e.dragging && t.dispatch("dragend");
        }), WE(e);
      };
    }(t, e);

    e.on("mousedown", r), e.on("mousemove", s), e.on("mouseup", a), n.bind(o, "mousemove", s), n.bind(o, "mouseup", i), e.on("remove", function () {
      n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i);
    }), e.on("keydown", function (e) {
      e.keyCode === om.ESC && i();
    });
  },
      GE = Io,
      YE = function YE(e, t) {
    return Up(e.getBody(), t);
  },
      XE = function XE(e) {
    var t = e.selection,
        n = e.dom,
        o = n.isBlock,
        r = e.getBody(),
        s = Td(e, r, o, function () {
      return _f(e);
    }),
        a = "sel-" + n.uniqueId(),
        i = "data-mce-selected";
    var l;

    var d = function d(e) {
      return e !== r && (GE(e) || Uo(e)) && n.isChildOf(e, r);
    },
        c = function c(n, o, r) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
      return e.dispatch("ShowCaret", {
        target: o,
        direction: n,
        before: r
      }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n), s.show(r, o));
    },
        u = function u(e) {
      return Or(e) || Pr(e) || Lr(e);
    },
        m = function m(e) {
      return u(e.startContainer) || u(e.endContainer);
    },
        f = function f(t) {
      var o = e.schema.getVoidElements(),
          r = n.createRng(),
          s = t.startContainer,
          a = t.startOffset,
          i = t.endContainer,
          l = t.endOffset;
      return xe(o, s.nodeName.toLowerCase()) ? 0 === a ? r.setStartBefore(s) : r.setStartAfter(s) : r.setStart(s, a), xe(o, i.nodeName.toLowerCase()) ? 0 === l ? r.setEndBefore(i) : r.setEndAfter(i) : r.setEnd(i, l), r;
    },
        g = function g(o, s) {
      if (!o) return null;

      if (o.collapsed) {
        if (!m(o)) {
          var _e118 = s ? 1 : -1,
              _t111 = oc(_e118, r, o),
              _n93 = _t111.getNode(!s);

          if (Pd(_n93)) return c(_e118, _n93, !!s && !_t111.isAtEnd(), !1);

          var _a23 = _t111.getNode(s);

          if (Pd(_a23)) return c(_e118, _a23, !s && !_t111.isAtEnd(), !1);
        }

        return null;
      }

      var u = o.startContainer,
          f = o.startOffset;
      var g = o.endOffset;
      if (3 === u.nodeType && 0 === f && GE(u.parentNode) && (u = u.parentNode, f = n.nodeIndex(u), u = u.parentNode), 1 !== u.nodeType) return null;

      if (g === f + 1 && u === o.endContainer) {
        var _o85 = u.childNodes[f];
        if (d(_o85)) return function (o) {
          var r = o.cloneNode(!0),
              s = e.dispatch("ObjectSelected", {
            target: o,
            targetClone: r
          });
          if (s.isDefaultPrevented()) return null;

          var d = function (o, r) {
            var s = fn(e.getBody()),
                i = e.getDoc(),
                l = Ko(s, "#" + a).getOrThunk(function () {
              var e = cn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i);
              return qt(e, "id", a), Zn(s, e), e;
            }),
                d = n.createRng();
            to(l), eo(l, [mn(fr, i), fn(r), mn(fr, i)]), d.setStart(l.dom.firstChild, 1), d.setEnd(l.dom.lastChild, 0), $n(l, {
              top: n.getPos(o, e.getBody()).y + "px"
            }), rf(l);
            var c = t.getSel();
            return c.removeAllRanges(), c.addRange(d), d;
          }(o, s.targetClone),
              c = fn(o);

          return $(hr(fn(e.getBody()), "*[data-mce-selected]"), function (e) {
            vn(c, e) || Xt(e, i);
          }), n.getAttrib(o, i) || o.setAttribute(i, "1"), l = o, h(), d;
        }(_o85);
      }

      return null;
    },
        p = function p() {
      l && l.removeAttribute(i), Ko(fn(e.getBody()), "#" + a).each(no), l = null;
    },
        h = function h() {
      s.hide();
    };

    return dy(e) || (e.on("click", function (t) {
      var n = YE(e, t.target);
      n && GE(n) && (t.preventDefault(), e.focus());
    }), e.on("blur NewBlock", p), e.on("ResizeWindow FullscreenStateChanged", s.reposition), e.on("tap", function (t) {
      var n = t.target,
          o = YE(e, n);
      GE(o) ? (t.preventDefault(), DC(e, o).each(g)) : d(n) && DC(e, n).each(g);
    }, !0), e.on("mousedown", function (o) {
      var s = o.target;
      if (s !== r && "HTML" !== s.nodeName && !n.isChildOf(s, r)) return;
      if (!1 === function (e, t, n) {
        var o = fn(e.getBody()),
            r = e.inline ? o : fn(wn(o).dom.documentElement),
            s = function (e, t, n, o) {
          var r = function (e) {
            return e.dom.getBoundingClientRect();
          }(t);

          return {
            x: n - (e ? r.left + t.dom.clientLeft + Ly(t) : 0),
            y: o - (e ? r.top + t.dom.clientTop + Py(t) : 0)
          };
        }(e.inline, r, t, n);

        return function (e, t, n) {
          var o = By(e),
              r = Dy(e);
          return t >= 0 && n >= 0 && t <= o && n <= r;
        }(r, s.x, s.y);
      }(e, o.clientX, o.clientY)) return;
      p(), h();
      var a = YE(e, s);
      GE(a) ? (o.preventDefault(), DC(e, a).each(g)) : zE(r, o.clientX, o.clientY).each(function (n) {
        var r;
        o.preventDefault(), (r = c(1, n.node, n.position === PE.Before, !1)) && t.setRng(r), Co(a) ? a.focus() : e.getBody().focus();
      });
    }), e.on("keypress", function (e) {
      om.modifierPressed(e) || GE(t.getNode()) && e.preventDefault();
    }), e.on("GetSelectionRange", function (e) {
      var t = e.range;

      if (l) {
        if (!l.parentNode) return void (l = null);
        t = t.cloneRange(), t.selectNode(l), e.range = t;
      }
    }), e.on("SetSelectionRange", function (e) {
      e.range = f(e.range);
      var t = g(e.range, e.forward);
      t && (e.range = t);
    }), e.on("AfterSetSelectionRange", function (e) {
      var t = e.range,
          o = t.startContainer.parentNode;
      var r;
      m(t) || "mcepastebin" === o.id || h(), r = o, n.hasClass(r, "mce-offscreen-selection") || p();
    }), function (e) {
      KE(e), ql(e) && function (e) {
        var t = function t(_t112) {
          if (!_t112.isDefaultPrevented()) {
            var _n94 = _t112.dataTransfer;
            _n94 && (j(_n94.types, "Files") || _n94.files.length > 0) && (_t112.preventDefault(), "drop" === _t112.type && jy(e, "Dropped file type is not supported"));
          }
        },
            n = function n(_n95) {
          Cf(e, _n95.target) && t(_n95);
        },
            o = function o() {
          var o = Qs.DOM,
              r = e.dom,
              s = document,
              a = e.inline ? e.getBody() : e.getDoc(),
              i = ["drop", "dragover"];
          $(i, function (e) {
            o.bind(s, e, n), r.bind(a, e, t);
          }), e.on("remove", function () {
            $(i, function (e) {
              o.unbind(s, e, n), r.unbind(a, e, t);
            });
          });
        };

        e.on("init", function () {
          bf.setEditorTimeout(e, o, 0);
        });
      }(e);
    }(e), function (e) {
      var t = ia(function () {
        if (!e.removed && e.getBody().contains(document.activeElement)) {
          var _t113 = e.selection.getRng();

          if (_t113.collapsed) {
            var _n96 = PC(e, _t113, !1);

            e.selection.setRng(_n96);
          }
        }
      }, 0);
      e.on("focus", function () {
        t.throttle();
      }), e.on("blur", function () {
        t.cancel();
      });
    }(e), function (e) {
      e.on("init", function () {
        e.on("focusin", function (t) {
          var n = t.target;

          if (Uo(n)) {
            var _t114 = Up(e.getBody(), n),
                _o86 = Io(_t114) ? _t114 : n;

            e.selection.getNode() !== _o86 && DC(e, _o86).each(function (t) {
              return e.selection.setRng(t);
            });
          }
        });
      });
    }(e)), {
      showCaret: c,
      showBlockCaretContainer: function showBlockCaretContainer(e) {
        e.hasAttribute("data-mce-caret") && (Mr(e), t.scrollIntoView(e));
      },
      hideFakeCaret: h,
      destroy: function destroy() {
        s.destroy(), l = null;
      }
    };
  },
      QE = function QE(e, t, n) {
    if (Ro(t) && (n < 0 || n > t.data.length)) return [];
    var o = [n];
    var r = t;

    for (; r !== e && r.parentNode;) {
      var _e119 = r.parentNode;

      for (var _t115 = 0; _t115 < _e119.childNodes.length; _t115++) {
        if (_e119.childNodes[_t115] === r) {
          o.push(_t115);
          break;
        }
      }

      r = _e119;
    }

    return r === e ? o.reverse() : [];
  },
      JE = function JE(e, t, n, o, r) {
    return {
      start: QE(e, t, n),
      end: QE(e, o, r)
    };
  },
      ZE = function ZE(e, t) {
    var n = t.slice(),
        o = n.pop();
    return Y(n, function (e, t) {
      return e.bind(function (e) {
        return M.from(e.childNodes[t]);
      });
    }, M.some(e)).bind(function (e) {
      return Ro(e) && (o < 0 || o > e.data.length) ? M.none() : M.some({
        node: e,
        offset: o
      });
    });
  },
      eN = function eN(e, t) {
    return ZE(e, t.start).bind(function (_ref16) {
      var n = _ref16.node,
          o = _ref16.offset;
      return ZE(e, t.end).map(function (_ref17) {
        var e = _ref17.node,
            t = _ref17.offset;
        var r = document.createRange();
        return r.setStart(n, o), r.setEnd(e, t), r;
      });
    });
  },
      tN = function tN(e, t, n) {
    if (t && e.isEmpty(t) && !n(t)) {
      var _o87 = t.parentNode;
      e.remove(t), tN(e, _o87, n);
    }
  },
      nN = function nN(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r = t.startContainer.parentNode,
        s = t.endContainer.parentNode;
    t.deleteContents(), o && !n(t.startContainer) && (Ro(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer), Ro(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer), tN(e, r, n), r !== s && tN(e, s, n));
  },
      oN = function oN(e, t) {
    return M.from(e.dom.getParent(t.startContainer, e.dom.isBlock));
  },
      rN = function rN(e, t, n) {
    (function (e, t, n) {
      if (Ro(e) && 0 >= e.length) return M.some(Nk(e, 0));
      {
        var _t116 = Ea(Rk);

        return M.from(_t116.forwards(e, 0, Ak(e), n)).map(function (e) {
          return Nk(e.container, 0);
        });
      }
    })(t, 0, t).each(function (o) {
      var r = o.container;
      Bk(r, n.start.length, t).each(function (n) {
        var o = e.createRng();
        o.setStart(r, 0), o.setEnd(n.container, n.offset), nN(e, o, function (e) {
          return e === t;
        });
      });
    });
  },
      sN = function sN(e, t) {
    return e.create("span", {
      "data-mce-type": "bookmark",
      id: t
    });
  },
      aN = function aN(e, t) {
    var n = e.createRng();
    return n.setStartAfter(t.start), n.setEndBefore(t.end), n;
  },
      iN = function iN(e, t, n) {
    var o = eN(e.getRoot(), n).getOrDie("Unable to resolve path range"),
        r = o.startContainer,
        s = o.endContainer,
        a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
        i = 0 === o.startOffset ? r : r.splitText(o.startOffset);
    return {
      prefix: t,
      end: a.parentNode.insertBefore(sN(e, t + "-end"), a),
      start: i.parentNode.insertBefore(sN(e, t + "-start"), i)
    };
  },
      lN = function lN(e, t, n) {
    tN(e, e.get(t.prefix + "-end"), n), tN(e, e.get(t.prefix + "-start"), n);
  },
      dN = function dN(e) {
    return 0 === e.start.length;
  },
      cN = function cN(e, t, n, o) {
    var r = t.start;
    var s;
    return Dk(e, o.container, o.offset, (s = r, function (e, t) {
      var n = e.data.substring(0, t),
          o = n.lastIndexOf(s.charAt(s.length - 1)),
          r = n.lastIndexOf(s);
      return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1;
    }), n).bind(function (o) {
      if (o.offset >= r.length) {
        var _t117 = e.createRng();

        return _t117.setStart(o.container, o.offset - r.length), _t117.setEnd(o.container, o.offset), M.some(_t117);
      }

      {
        var _s36 = o.offset - r.length;

        return Tk(o.container, _s36, n).map(function (t) {
          var n = e.createRng();
          return n.setStart(t.container, t.offset), n.setEnd(o.container, o.offset), n;
        }).filter(function (e) {
          return e.toString() === r;
        }).orThunk(function () {
          return cN(e, t, n, Nk(o.container, 0));
        });
      }
    });
  },
      uN = function uN(e, t, n) {
    var o = e.dom,
        r = o.getRoot(),
        s = n.pattern,
        a = n.position.container,
        i = n.position.offset;
    return Tk(a, i - n.pattern.end.length, t).bind(function (l) {
      var d = JE(r, l.container, l.offset, a, i);
      if (dN(s)) return M.some({
        matches: [{
          pattern: s,
          startRng: d,
          endRng: d
        }],
        position: l
      });
      {
        var _a24 = mN(e, n.remainingPatterns, l.container, l.offset, t),
            _i16 = _a24.getOr({
          matches: [],
          position: l
        }),
            _c6 = _i16.position,
            _u4 = function (e, t, n, o, r) {
          var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;

          if (0 === t.start.length && !s) {
            var _t118 = e.createRng();

            return _t118.setStart(n, o), _t118.setEnd(n, o), M.some(_t118);
          }

          return Ok(n, o, r).bind(function (n) {
            return cN(e, t, r, n).bind(function (e) {
              if (s) {
                if (e.endContainer === n.container && e.endOffset === n.offset) return M.none();
                if (0 === n.offset && e.endContainer.textContent.length === e.endOffset) return M.none();
              }

              return M.some(e);
            });
          });
        }(o, s, _c6.container, _c6.offset, t, _a24.isNone());

        return _u4.map(function (e) {
          var t = function (e, t) {
            return JE(e, t.startContainer, t.startOffset, t.endContainer, t.endOffset);
          }(r, e);

          return {
            matches: _i16.matches.concat([{
              pattern: s,
              startRng: t,
              endRng: d
            }]),
            position: Nk(e.startContainer, e.startOffset)
          };
        });
      }
    });
  },
      mN = function mN(e, t, n, o, r) {
    var s = e.dom;
    return Ok(n, o, s.getRoot()).bind(function (a) {
      var i = s.createRng();
      i.setStart(r, 0), i.setEnd(n, o);
      var l = i.toString();

      for (var _n97 = 0; _n97 < t.length; _n97++) {
        var _o88 = t[_n97];
        if (!je(l, _o88.end)) continue;

        var _s37 = t.slice();

        _s37.splice(_n97, 1);

        var _i17 = uN(e, r, {
          pattern: _o88,
          remainingPatterns: _s37,
          position: a
        });

        if (_i17.isSome()) return _i17;
      }

      return M.none();
    });
  },
      fN = function fN(e, t, n) {
    e.selection.setRng(n), "inline-format" === t.type ? $(t.format, function (t) {
      e.formatter.apply(t);
    }) : e.execCommand(t.cmd, !1, t.value);
  },
      gN = function gN(e, t, n) {
    var o = e.selection.getRng();
    return !1 === o.collapsed ? [] : oN(e, o).bind(function (r) {
      var s = Math.max(0, o.startOffset - (n ? 1 : 0));
      return mN(e, t, o.startContainer, s, r);
    }).fold(function () {
      return [];
    }, function (e) {
      return e.matches;
    });
  },
      pN = function pN(e, t) {
    if (0 === t.length) return;

    var n = e.dom,
        o = e.selection.getBookmark(),
        r = function (e, t) {
      var n = wa("mce_textpattern"),
          o = G(t, function (t, o) {
        var r = iN(e, n + "_end".concat(t.length), o.endRng);
        return t.concat([_objectSpread({}, o, {
          endMarker: r
        })]);
      }, []);
      return G(o, function (t, r) {
        var s = o.length - t.length - 1,
            a = dN(r.pattern) ? r.endMarker : iN(e, n + "_start".concat(s), r.startRng);
        return t.concat([_objectSpread({}, r, {
          startMarker: a
        })]);
      }, []);
    }(n, t);

    $(r, function (t) {
      var o = n.getParent(t.startMarker.start, n.isBlock),
          r = function r(e) {
        return e === o;
      };

      dN(t.pattern) ? function (e, t, n, o) {
        var r = aN(e.dom, n);
        nN(e.dom, r, o), fN(e, t, r);
      }(e, t.pattern, t.endMarker, r) : function (e, t, n, o, r) {
        var s = e.dom,
            a = aN(s, o),
            i = aN(s, n);
        nN(s, i, r), nN(s, a, r);
        var l = {
          prefix: n.prefix,
          start: n.end,
          end: o.start
        },
            d = aN(s, l);
        fN(e, t, d);
      }(e, t.pattern, t.startMarker, t.endMarker, r), lN(n, t.endMarker, r), lN(n, t.startMarker, r);
    }), e.selection.moveToBookmark(o);
  },
      hN = function hN(e, t) {
    if (!e.selection.isCollapsed() || !function (e) {
      return e.inlinePatterns.length > 0 || e.blockPatterns.length > 0;
    }(t)) return !1;

    var n = gN(e, t.inlinePatterns, !1),
        o = function (e, t) {
      var n = e.dom,
          o = e.selection.getRng();
      return oN(e, o).filter(function (t) {
        var o = Ki(e),
            r = n.is(t, o);
        return null !== t && r;
      }).bind(function (e) {
        var o = e.textContent,
            r = function (e, t) {
          var n = t.replace(fr, " ");
          return Q(e, function (e) {
            return 0 === t.indexOf(e.start) || 0 === n.indexOf(e.start);
          });
        }(t, o);

        return r.map(function (t) {
          return Bt.trim(o).length === t.start.length ? [] : [{
            pattern: t,
            range: JE(n.getRoot(), e, 0, e, 0)
          }];
        });
      }).getOr([]);
    }(e, t.blockPatterns);

    return (o.length > 0 || n.length > 0) && (e.undoManager.add(), e.undoManager.extra(function () {
      e.execCommand("mceInsertNewLine");
    }, function () {
      e.insertContent(mr), pN(e, n), function (e, t) {
        if (0 === t.length) return;
        var n = e.selection.getBookmark();
        $(t, function (t) {
          return function (e, t) {
            var n = e.dom,
                o = t.pattern,
                r = eN(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
            return oN(e, r).each(function (t) {
              "block-format" === o.type ? function (e, t) {
                var n = t.get(e);
                return p(n) && ie(n).exists(function (e) {
                  return xe(e, "block");
                });
              }(o.format, e.formatter) && e.undoManager.transact(function () {
                rN(e.dom, t, o), e.formatter.apply(o.format);
              }) : "block-command" === o.type && e.undoManager.transact(function () {
                rN(e.dom, t, o), e.execCommand(o.cmd, !1, o.value);
              });
            }), !0;
          }(e, t);
        }), e.selection.moveToBookmark(n);
      }(e, o);
      var t = e.selection.getRng(),
          r = Ok(t.startContainer, t.startOffset, e.dom.getRoot());
      e.execCommand("mceInsertNewLine"), r.each(function (t) {
        var n = t.container;
        n.data.charAt(t.offset - 1) === mr && (n.deleteData(t.offset - 1, 1), tN(e.dom, n.parentNode, function (t) {
          return t === e.dom.getRoot();
        }));
      });
    }), !0);
  },
      bN = function bN(e, t) {
    if (t.length > 0) {
      var _n98 = gN(e, t, !0);

      _n98.length > 0 && e.undoManager.transact(function () {
        pN(e, _n98);
      });
    }
  },
      vN = function vN(e, t, n) {
    for (var _o89 = 0; _o89 < e.length; _o89++) {
      if (n(e[_o89], t)) return !0;
    }

    return !1;
  },
      yN = function yN(e) {
    var t = [",", ".", ";", ":", "!", "?"],
        n = [32],
        o = function o() {
      return Ti(fd(e));
    };

    e.on("keydown", function (t) {
      var n;
      13 !== t.keyCode || om.modifierPressed(t) || hN(e, (n = fd(e), {
        inlinePatterns: Ti(n),
        blockPatterns: Oi(n)
      })) && t.preventDefault();
    }, !0), e.on("keyup", function (t) {
      vN(n, t, function (e, t) {
        return e === t.keyCode && !1 === om.modifierPressed(t);
      }) && bN(e, o());
    }), e.on("keypress", function (n) {
      vN(t, n, function (e, t) {
        return e.charCodeAt(0) === t.charCode;
      }) && bf.setEditorTimeout(e, function () {
        bN(e, o());
      });
    });
  },
      CN = function CN(e) {
    var t = Bt.each,
        n = om.BACKSPACE,
        o = om.DELETE,
        r = e.dom,
        s = e.selection,
        a = e.parser,
        i = Nt.browser,
        l = i.isFirefox(),
        d = i.isChromium() || i.isSafari(),
        c = Nt.deviceType.isiPhone() || Nt.deviceType.isiPad(),
        u = Nt.os.isMacOS() || Nt.os.isiOS(),
        m = function m(t, n) {
      try {
        e.getDoc().execCommand(t, !1, n);
      } catch (e) {}
    },
        f = function f(e) {
      return e.isDefaultPrevented();
    },
        g = function g() {
      e.shortcuts.add("meta+a", null, "SelectAll");
    },
        p = function p() {
      e.inline || r.bind(e.getDoc(), "mousedown mouseup", function (t) {
        var n;
        if (t.target === e.getDoc().documentElement) if (n = s.getRng(), e.getBody().focus(), "mousedown" === t.type) {
          if (Or(n.startContainer)) return;
          s.placeCaretAt(t.clientX, t.clientY);
        } else s.setRng(n);
      });
    },
        h = function h() {
      Range.prototype.getClientRects || e.on("mousedown", function (t) {
        if (!f(t) && "HTML" === t.target.nodeName) {
          var _t119 = e.getBody();

          _t119.blur(), bf.setEditorTimeout(e, function () {
            _t119.focus();
          });
        }
      });
    },
        b = function b() {
      var t = Gl(e);
      e.on("click", function (n) {
        var o = n.target;
        /^(IMG|HR)$/.test(o.nodeName) && "false" !== r.getContentEditableParent(o) && (n.preventDefault(), e.selection.select(o), e.nodeChanged()), "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && (n.preventDefault(), s.select(o));
      });
    },
        v = function v() {
      e.on("keydown", function (e) {
        if (!f(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) {
          var _t120 = s.getNode().previousSibling;
          if (_t120 && _t120.nodeName && "table" === _t120.nodeName.toLowerCase()) return e.preventDefault(), !1;
        }
      });
    },
        y = function y() {
      jl(e) || e.on("BeforeExecCommand mousedown", function () {
        m("StyleWithCSS", !1), m("enableInlineTableEditing", !1), Cl(e) || m("enableObjectResizing", !1);
      });
    },
        C = function C() {
      e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
    },
        w = function w() {
      e.inline || e.on("keydown", function () {
        document.activeElement === document.body && e.getWin().focus();
      });
    },
        x = function x() {
      e.inline || (e.contentStyles.push("body {min-height: 150px}"), e.on("click", function (t) {
        var n;
        "HTML" === t.target.nodeName && (n = e.selection.getRng(), e.getBody().focus(), e.selection.setRng(n), e.selection.normalize(), e.nodeChanged());
      }));
    },
        k = function k() {
      u && e.on("keydown", function (t) {
        !om.metaKeyPressed(t) || t.shiftKey || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(), e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary"));
      });
    },
        _ = function _() {
      e.on("click", function (e) {
        var t = e.target;

        do {
          if ("A" === t.tagName) return void e.preventDefault();
        } while (t = t.parentNode);
      }), e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
    },
        E = function E() {
      e.on("init", function () {
        e.dom.bind(e.getBody(), "submit", function (e) {
          e.preventDefault();
        });
      });
    },
        N = S;

    return dy(e) ? (d && (p(), b(), E(), g(), c && (w(), x(), _())), l && (h(), y(), C(), k())) : (e.on("keydown", function (t) {
      var n, o;
      if (f(t) || t.keyCode !== om.BACKSPACE) return;
      n = s.getRng();
      var a = n.startContainer,
          i = n.startOffset,
          l = r.getRoot();

      if (o = a, n.collapsed && 0 === i) {
        for (; o && o.parentNode && o.parentNode.firstChild === o && o.parentNode !== l;) {
          o = o.parentNode;
        }

        "BLOCKQUOTE" === o.tagName && (e.formatter.toggle("blockquote", null, o), n = r.createRng(), n.setStart(a, 0), n.setEnd(a, 0), s.setRng(n));
      }
    }), function () {
      var t = function t(e) {
        var t = r.create("body"),
            n = e.cloneContents();
        return t.appendChild(n), s.serializer.serialize(t, {
          format: "html"
        });
      };

      e.on("keydown", function (s) {
        var a = s.keyCode;
        var i, l;

        if (!f(s) && (a === o || a === n)) {
          if (i = e.selection.isCollapsed(), l = e.getBody(), i && !r.isEmpty(l)) return;
          if (!i && !function (n) {
            var o = t(n),
                s = r.createRng();
            return s.selectNode(e.getBody()), o === t(s);
          }(e.selection.getRng())) return;
          s.preventDefault(), e.setContent(""), l.firstChild && r.isBlock(l.firstChild) ? e.selection.setCursorLocation(l.firstChild, 0) : e.selection.setCursorLocation(l, 0), e.nodeChanged();
        }
      });
    }(), Nt.windowsPhone || e.on("keyup focusin mouseup", function (t) {
      om.modifierPressed(t) || function (e) {
        var t = e.getBody(),
            n = e.selection.getRng();
        return n.startContainer === n.endContainer && n.startContainer === t && 0 === n.startOffset && n.endOffset === t.childNodes.length;
      }(e) || s.normalize();
    }, !0), d && (p(), b(), e.on("init", function () {
      m("DefaultParagraphSeparator", Ki(e));
    }), E(), v(), a.addNodeFilter("br", function (e) {
      var t = e.length;

      for (; t--;) {
        "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
      }
    }), c ? (w(), x(), _()) : g()), l && (e.on("keydown", function (t) {
      if (!f(t) && t.keyCode === n) {
        if (!e.getBody().getElementsByTagName("hr").length) return;

        if (s.isCollapsed() && 0 === s.getRng().startOffset) {
          var _e120 = s.getNode(),
              _n99 = _e120.previousSibling;

          if ("HR" === _e120.nodeName) return r.remove(_e120), void t.preventDefault();
          _n99 && _n99.nodeName && "hr" === _n99.nodeName.toLowerCase() && (r.remove(_n99), t.preventDefault());
        }
      }
    }), h(), function () {
      var n = function n() {
        var n = r.getAttribs(s.getStart().cloneNode(!1));
        return function () {
          var o = s.getStart();
          o !== e.getBody() && (r.setAttrib(o, "style", null), t(n, function (e) {
            o.setAttributeNode(e.cloneNode(!0));
          }));
        };
      },
          o = function o() {
        return !s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
      };

      e.on("keypress", function (t) {
        var r;
        if (!f(t) && (8 === t.keyCode || 46 === t.keyCode) && o()) return r = n(), e.getDoc().execCommand("delete", !1, null), r(), t.preventDefault(), !1;
      }), r.bind(e.getDoc(), "cut", function (t) {
        var r;
        !f(t) && o() && (r = n(), bf.setEditorTimeout(e, function () {
          r();
        }));
      });
    }(), y(), e.on("SetContent ExecCommand", function (e) {
      "setcontent" !== e.type && "mceInsertLink" !== e.command || t(r.select("a"), function (e) {
        var t = e.parentNode;
        var n = r.getRoot();

        if (t.lastChild === e) {
          for (; t && !r.isBlock(t);) {
            if (t.parentNode.lastChild !== t || t === n) return;
            t = t.parentNode;
          }

          r.add(t, "br", {
            "data-mce-bogus": 1
          });
        }
      });
    }), C(), k(), v())), {
      refreshContentEditable: N,
      isHidden: function isHidden() {
        if (!l || e.removed) return !1;
        var t = e.selection.getSel();
        return !t || !t.rangeCount || 0 === t.rangeCount;
      }
    };
  },
      wN = Qs.DOM,
      xN = function xN(e) {
    return e.inline ? e.getElement().nodeName.toLowerCase() : void 0;
  },
      kN = function kN(e) {
    return ve(e, function (e) {
      return !1 === v(e);
    });
  },
      SN = function SN(e) {
    var t = e.options.get,
        n = e.editorUpload.blobCache;
    return kN({
      allow_conditional_comments: t("allow_conditional_comments"),
      allow_html_data_urls: t("allow_html_data_urls"),
      allow_svg_data_urls: t("allow_svg_data_urls"),
      allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
      allow_script_urls: t("allow_script_urls"),
      allow_unsafe_link_target: t("allow_unsafe_link_target"),
      convert_fonts_to_spans: t("convert_fonts_to_spans"),
      fix_list_elements: t("fix_list_elements"),
      font_size_legacy_values: t("font_size_legacy_values"),
      forced_root_block: t("forced_root_block"),
      forced_root_block_attrs: t("forced_root_block_attrs"),
      preserve_cdata: t("preserve_cdata"),
      remove_trailing_brs: t("remove_trailing_brs"),
      inline_styles: t("inline_styles"),
      root_name: xN(e),
      validate: !0,
      blob_cache: n,
      document: e.getDoc()
    });
  },
      _N = function _N(e) {
    var t = e.options.get;
    return kN({
      custom_elements: t("custom_elements"),
      extended_valid_elements: t("extended_valid_elements"),
      invalid_elements: t("invalid_elements"),
      invalid_styles: t("invalid_styles"),
      schema: t("schema"),
      valid_children: t("valid_children"),
      valid_classes: t("valid_classes"),
      valid_elements: t("valid_elements"),
      valid_styles: t("valid_styles"),
      verify_html: t("verify_html"),
      padd_empty_block_inline_children: t("format_empty_lines")
    });
  },
      EN = function EN(e) {
    return e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader;
  },
      NN = function NN(e) {
    var t = EN(e),
        n = bl(e),
        o = e.contentCSS,
        r = function r() {
      t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n);
    },
        s = function s() {
      e.removed ? r() : e.on("remove", r);
    };

    if (e.contentStyles.length > 0) {
      var _t121 = "";
      Bt.each(e.contentStyles, function (e) {
        _t121 += e + "\r\n";
      }), e.dom.addStyle(_t121);
    }

    var a = Promise.all(function (e, t, n) {
      var o = [EN(e).loadAll(t)];
      return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)]);
    }(e, o, n)).then(s)["catch"](s),
        i = hl(e);
    return i && function (e, t) {
      var n = fn(e.getBody()),
          o = In(Mn(n)),
          r = un("style");
      qt(r, "type", "text/css"), Zn(r, mn(t)), Zn(o, r), e.on("remove", function () {
        no(r);
      });
    }(e, i), a;
  },
      RN = function RN(e) {
    !0 !== e.removed && (function (e) {
      dy(e) || e.load({
        initial: !0,
        format: "html"
      }), e.startContent = e.getContent({
        format: "raw"
      });
    }(e), function (e) {
      e.bindPendingEventDelegates(), e.initialized = !0, function (e) {
        e.dispatch("Init");
      }(e), e.focus(!0), function (e) {
        var t = e.dom.getRoot();
        e.inline || ju(e) && e.selection.getStart(!0) !== t || Rc(t).each(function (t) {
          var n = t.getNode(),
              o = _o(n) ? Rc(n).getOr(t) : t;
          e.selection.setRng(o.toRange());
        });
      }(e), e.nodeChanged({
        initial: !0
      });
      var t = Ql(e);
      w(t) && t.call(e, e), function (e) {
        var t = Zl(e);
        t && bf.setEditorTimeout(e, function () {
          var n;
          n = !0 === t ? e : e.editorManager.get(t), n.destroyed || n.focus();
        }, 100);
      }(e);
    }(e));
  },
      AN = function AN(e) {
    var t = e.getElement();
    var n = e.getDoc();
    e.inline && (wN.addClass(t, "mce-content-body"), e.contentDocument = n = document, e.contentWindow = window, e.bodyElement = t, e.contentAreaContainer = t);
    var o = e.getBody();
    o.disabled = !0, e.readonly = jl(e), e.readonly || (e.inline && "static" === wN.getStyle(o, "position", !0) && (o.style.position = "relative"), o.contentEditable = "true"), o.disabled = !1, e.editorUpload = Zy(e), e.schema = Bs(_N(e)), e.dom = Qs(n, {
      keep_values: !0,
      url_converter: e.convertURL,
      url_converter_scope: e,
      update_styles: !0,
      root_element: e.inline ? e.getBody() : null,
      collect: function collect() {
        return e.inline;
      },
      schema: e.schema,
      contentCssCors: dl(e),
      referrerPolicy: cl(e),
      onSetAttrib: function onSetAttrib(t) {
        e.dispatch("SetAttrib", t);
      }
    }), e.parser = function (e) {
      var t = Ov(SN(e), e.schema);
      return t.addAttributeFilter("src,href,style,tabindex", function (t, n) {
        var o,
            r,
            s = t.length;
        var a = e.dom,
            i = "data-mce-" + n;

        for (; s--;) {
          if (o = t[s], r = o.attr(n), r && !o.attr(i)) {
            if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
            "style" === n ? (r = a.serializeStyle(a.parseStyle(r), o.name), r.length || (r = null), o.attr(i, r), o.attr(n, r)) : "tabindex" === n ? (o.attr(i, r), o.attr(n, null)) : o.attr(i, e.convertURL(r, n, o.name));
          }
        }
      }), t.addNodeFilter("script", function (e) {
        var t = e.length;

        for (; t--;) {
          var _n100 = e[t],
              _o90 = _n100.attr("type") || "no/type";

          0 !== _o90.indexOf("mce-") && _n100.attr("type", "mce-" + _o90);
        }
      }), e.options.get("preserve_cdata") && t.addNodeFilter("#cdata", function (t) {
        var n = t.length;

        for (; n--;) {
          var _o91 = t[n];
          _o91.type = 8, _o91.name = "#comment", _o91.value = "[CDATA[" + e.dom.encode(_o91.value) + "]]";
        }
      }), t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (t) {
        var n = t.length;
        var o = e.schema.getNonEmptyElements();

        for (; n--;) {
          var _e121 = t[n];
          _e121.isEmpty(o) && 0 === _e121.getAll("br").length && _e121.append(new jf("br", 1));
        }
      }), t;
    }(e), e.serializer = Cy(function (e) {
      var t = e.options.get;
      return _objectSpread({}, SN(e), {}, _N(e), {}, kN({
        url_converter: t("url_converter"),
        url_converter_scope: t("url_converter_scope"),
        element_format: t("element_format"),
        entities: t("entities"),
        entity_encoding: t("entity_encoding"),
        indent: t("indent"),
        indent_after: t("indent_after"),
        indent_before: t("indent_before")
      }));
    }(e), e), e.selection = by(e.dom, e.getWin(), e.serializer, e), e.annotator = Gu(e), e.formatter = dC(e), e.undoManager = uC(e), e._nodeChangeDispatcher = new q_(e), e._selectionOverrides = XE(e), function (e) {
      var t = aa(),
          n = ea(!1),
          o = la(function (t) {
        e.dispatch("longpress", _objectSpread({}, t, {
          type: "longpress"
        })), n.set(!0);
      }, 400);
      e.on("touchstart", function (e) {
        Ax(e).each(function (r) {
          o.cancel();
          var s = {
            x: r.clientX,
            y: r.clientY,
            target: e.target
          };
          o.throttle(e), n.set(!1), t.set(s);
        });
      }, !0), e.on("touchmove", function (r) {
        o.cancel(), Ax(r).each(function (o) {
          t.on(function (r) {
            (function (e, t) {
              var n = Math.abs(e.clientX - t.x),
                  o = Math.abs(e.clientY - t.y);
              return n > 5 || o > 5;
            })(o, r) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"));
          });
        });
      }, !0), e.on("touchend touchcancel", function (r) {
        o.cancel(), "touchcancel" !== r.type && t.get().filter(function (e) {
          return e.target.isEqualNode(r.target);
        }).each(function () {
          n.get() ? r.preventDefault() : e.dispatch("tap", _objectSpread({}, r, {
            type: "tap"
          }));
        });
      }, !0);
    }(e), function (e) {
      (function (e) {
        e.on("click", function (t) {
          e.dom.getParent(t.target, "details") && t.preventDefault();
        });
      })(e), function (e) {
        e.parser.addNodeFilter("details", function (e) {
          $(e, function (e) {
            e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
          });
        }), e.serializer.addNodeFilter("details", function (e) {
          $(e, function (e) {
            var t = e.attr("data-mce-open");
            e.attr("open", m(t) ? t : null), e.attr("data-mce-open", null);
          });
        });
      }(e);
    }(e), function (e) {
      var t = "contenteditable",
          n = " " + Bt.trim(pd(e)) + " ",
          o = " " + Bt.trim(gd(e)) + " ",
          r = Mx(n),
          s = Mx(o),
          a = hd(e);
      a.length > 0 && e.on("BeforeSetContent", function (t) {
        (function (e, t, n) {
          var o = t.length,
              r = n.content;

          if ("raw" !== n.format) {
            for (; o--;) {
              r = r.replace(t[o], Ix(e, r, gd(e)));
            }

            n.content = r;
          }
        })(e, a, t);
      }), e.parser.addAttributeFilter("class", function (e) {
        var n = e.length;

        for (; n--;) {
          var _o92 = e[n];
          r(_o92) ? _o92.attr(t, "true") : s(_o92) && _o92.attr(t, "false");
        }
      }), e.serializer.addAttributeFilter(t, function (e) {
        var n = e.length;

        for (; n--;) {
          var _o93 = e[n];
          (r(_o93) || s(_o93)) && (a.length > 0 && _o93.attr("data-mce-content") ? (_o93.name = "#text", _o93.type = 3, _o93.raw = !0, _o93.value = _o93.attr("data-mce-content")) : _o93.attr(t, null));
        }
      });
    }(e), dy(e) || (function (e) {
      e.on("mousedown", function (t) {
        t.detail >= 3 && (t.preventDefault(), DE(e));
      });
    }(e), function (e) {
      yN(e);
    }(e));
    var r = $_(e);
    Rx(e, r), function (e) {
      e.on("NodeChange", O(Px, e));
    }(e), function (e) {
      var t = e.dom,
          n = Ki(e),
          o = xl(e),
          r = function r(s, a) {
        if (function (e) {
          if (gC(e)) {
            var _t122 = e.keyCode;
            return !pC(e) && (om.metaKeyPressed(e) || e.altKey || _t122 >= 112 && _t122 <= 123 || j(mC, _t122));
          }

          return !1;
        }(s)) return;

        var i = e.getBody(),
            l = !function (e) {
          return gC(e) && !(pC(e) || "keyup" === e.type && 229 === e.keyCode);
        }(s) && function (e, t, n) {
          if (os(fn(t), !1)) {
            var _o94 = t.firstElementChild;
            return !_o94 || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === _o94.nodeName.toLowerCase();
          }

          return !1;
        }(t, i, n);

        ("" !== t.getAttrib(i, fC) !== l || a) && (t.setAttrib(i, fC, l ? o : null), t.setAttrib(i, "aria-placeholder", l ? o : null), function (e, t) {
          e.dispatch("PlaceholderToggle", {
            state: t
          });
        }(e, l), e.on(l ? "keydown" : "keyup", r), e.off(l ? "keyup" : "keydown", r));
      };

      o && e.on("init", function (t) {
        r(t, !0), e.on("change SetContent ExecCommand", r), e.on("paste", function (t) {
          return bf.setEditorTimeout(e, function () {
            return r(t);
          });
        });
      });
    }(e), EE(e);

    var s = function (e) {
      var t = e;
      return function (e) {
        return we(e.plugins, "rtc").bind(function (e) {
          return M.from(e.setup);
        });
      }(e).fold(function () {
        return t.rtcInstance = ly(e), M.none();
      }, function (e) {
        return t.rtcInstance = function () {
          var e = N(null),
              t = N("");
          return {
            init: {
              bindEvents: S
            },
            undoManager: {
              beforeChange: S,
              add: e,
              undo: e,
              redo: e,
              clear: S,
              reset: S,
              hasUndo: P,
              hasRedo: P,
              transact: e,
              ignore: S,
              extra: S
            },
            formatter: {
              match: P,
              matchAll: N([]),
              matchNode: N(void 0),
              canApply: P,
              closest: t,
              apply: S,
              remove: S,
              toggle: S,
              formatChanged: N({
                unbind: S
              })
            },
            editor: {
              getContent: t,
              setContent: N({
                content: "",
                html: ""
              }),
              insertContent: N(""),
              addVisual: S
            },
            selection: {
              getContent: t
            },
            autocompleter: {
              addDecoration: S,
              removeDecoration: S
            },
            raw: {
              getModel: N(M.none())
            }
          };
        }(), M.some(function () {
          return e().then(function (e) {
            return t.rtcInstance = function (e) {
              var t = function t(e) {
                return f(e) ? e : {};
              },
                  n = e.init,
                  o = e.undoManager,
                  r = e.formatter,
                  s = e.editor,
                  a = e.selection,
                  i = e.autocompleter,
                  l = e.raw;

              return {
                init: {
                  bindEvents: n.bindEvents
                },
                undoManager: {
                  beforeChange: o.beforeChange,
                  add: o.add,
                  undo: o.undo,
                  redo: o.redo,
                  clear: o.clear,
                  reset: o.reset,
                  hasUndo: o.hasUndo,
                  hasRedo: o.hasRedo,
                  transact: function transact(e, t, n) {
                    return o.transact(n);
                  },
                  ignore: function ignore(e, t) {
                    return o.ignore(t);
                  },
                  extra: function extra(e, t, n, r) {
                    return o.extra(n, r);
                  }
                },
                formatter: {
                  match: function match(e, n, o, s) {
                    return r.match(e, t(n), s);
                  },
                  matchAll: r.matchAll,
                  matchNode: r.matchNode,
                  canApply: function canApply(e) {
                    return r.canApply(e);
                  },
                  closest: function closest(e) {
                    return r.closest(e);
                  },
                  apply: function apply(e, n, o) {
                    return r.apply(e, t(n));
                  },
                  remove: function remove(e, n, o, s) {
                    return r.remove(e, t(n));
                  },
                  toggle: function toggle(e, n, o) {
                    return r.toggle(e, t(n));
                  },
                  formatChanged: function formatChanged(e, t, n, o, s) {
                    return r.formatChanged(t, n, o, s);
                  }
                },
                editor: {
                  getContent: function getContent(e) {
                    return s.getContent(e);
                  },
                  setContent: function setContent(e, t) {
                    return {
                      content: s.setContent(e, t),
                      html: ""
                    };
                  },
                  insertContent: function insertContent(e, t) {
                    return s.insertContent(e), "";
                  },
                  addVisual: s.addVisual
                },
                selection: {
                  getContent: function getContent(e, t) {
                    return a.getContent(t);
                  }
                },
                autocompleter: {
                  addDecoration: i.addDecoration,
                  removeDecoration: i.removeDecoration
                },
                raw: {
                  getModel: function getModel() {
                    return M.some(l.getRawModel());
                  }
                }
              };
            }(e), e.rtc.isRemote;
          });
        });
      });
    }(e);

    (function (e) {
      var t = e.getDoc(),
          n = e.getBody();
      (function (e) {
        e.dispatch("PreInit");
      })(e), ed(e) || (t.body.spellcheck = !1, wN.setAttrib(n, "spellcheck", "false")), e.quirks = CN(e), function (e) {
        e.dispatch("PostRender");
      }(e);
      var o = vl(e);
      void 0 !== o && (n.dir = o);
      var r = td(e);
      r && e.on("BeforeSetContent", function (e) {
        Bt.each(r, function (t) {
          e.content = e.content.replace(t, function (e) {
            return "\x3c!--mce:protected " + escape(e) + "--\x3e";
          });
        });
      }), e.on("SetContent", function () {
        e.addVisual(e.getBody());
      }), e.on("compositionstart compositionend", function (t) {
        e.composing = "compositionstart" === t.type;
      });
    })(e), s.fold(function () {
      NN(e).then(function () {
        return RN(e);
      });
    }, function (t) {
      e.setProgressState(!0), NN(e).then(function () {
        t().then(function (t) {
          e.setProgressState(!1), RN(e), my(e);
        }, function (t) {
          e.notificationManager.open({
            type: "error",
            text: String(t)
          }), RN(e), my(e);
        });
      });
    });
  },
      ON = function ON(e, t) {
    if (e.inline || (e.getElement().style.visibility = e.orgVisibility), t || e.inline) AN(e);else {
      var _t123 = e.iframeElement,
          _o95 = (n = fn(_t123), ao(n, "load", Wy, function () {
        _o95.unbind(), e.contentDocument = _t123.contentDocument, AN(e);
      }));

      if (Nt.browser.isFirefox()) {
        var _t124 = e.getDoc();

        _t124.open(), _t124.write(e.iframeHTML), _t124.close();
      } else _t123.srcdoc = e.iframeHTML;
    }
    var n;
  },
      TN = Qs.DOM,
      BN = Qs.DOM,
      DN = function DN(e) {
    return {
      editorContainer: e,
      iframeContainer: e,
      api: {}
    };
  },
      PN = function PN(e) {
    var t = e.getElement();
    return e.orgDisplay = t.style.display, m(_l(e)) ? function (e) {
      return e.theme.renderUI();
    }(e) : w(_l(e)) ? function (e) {
      var t = e.getElement(),
          n = _l(e)(e, t);

      return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight, n;
    }(e) : function (e) {
      var t = e.getElement();
      return e.inline ? DN(null) : function (e) {
        var t = BN.create("div");
        return BN.insertAfter(t, e), DN(t);
      }(t);
    }(e);
  },
      LN = function LN(e) {
    e.dispatch("ScriptsLoaded"), function (e) {
      var t = Bt.trim(ol(e)),
          n = e.ui.registry.getAll().icons,
          o = _objectSpread({}, Ry.get("default").icons, {}, Ry.get(t).icons);

      fe(o, function (t, o) {
        xe(n, o) || e.ui.registry.addIcon(o, t);
      });
    }(e), function (e) {
      var t = _l(e);

      if (m(t)) {
        var _n101 = Fy.get(t);

        e.theme = _n101(e, Fy.urls[t]) || {}, w(e.theme.init) && e.theme.init(e, Fy.urls[t] || e.documentBaseUrl.replace(/\/$/, ""));
      } else e.theme = {};
    }(e), function (e) {
      var t = Nl(e),
          n = Ay.get(t);
      e.model = n(e, Ay.urls[t]);
    }(e), function (e) {
      var t = [];
      $(Hl(e), function (n) {
        (function (e, t, n) {
          var o = Iy.get(n),
              r = Iy.urls[n] || e.documentBaseUrl.replace(/\/$/, "");

          if (n = Bt.trim(n), o && -1 === Bt.inArray(t, n)) {
            if (e.plugins[n]) return;

            try {
              var _s38 = o(e, r) || {};

              e.plugins[n] = _s38, w(_s38.init) && (_s38.init(e, r), t.push(n));
            } catch (t) {
              (function (e, t, n) {
                var o = ra.translate(["Failed to initialize plugin: {0}", t]);
                Qu(e, "PluginLoadError", {
                  message: o
                }), $y(o, n), jy(e, o);
              })(e, n, t);
            }
          }
        })(e, t, function (e) {
          return e.replace(/^\-/, "");
        }(n));
      });
    }(e);
    var t = PN(e);

    (function (e, t) {
      var n = {
        show: M.from(t.show).getOr(S),
        hide: M.from(t.hide).getOr(S),
        isEnabled: M.from(t.isEnabled).getOr(L),
        setEnabled: function setEnabled(n) {
          e.mode.isReadOnly() || M.from(t.setEnabled).each(function (e) {
            return e(n);
          });
        }
      };
      e.ui = _objectSpread({}, e.ui, {}, n);
    })(e, M.from(t.api).getOr({}));

    var n = {
      editorContainer: t.editorContainer,
      iframeContainer: t.iframeContainer
    };
    return e.editorContainer = n.editorContainer ? n.editorContainer : null, function (e) {
      e.contentCSS = e.contentCSS.concat(function (e) {
        return qy(e, pl(e));
      }(e), function (e) {
        return qy(e, bl(e));
      }(e));
    }(e), e.inline ? ON(e) : function (e, t) {
      (function (e, t) {
        var n = e.translate("Rich Text Area"),
            o = Gt(fn(e.getElement()), "tabindex").bind(Ge),
            r = function (e, t, n, o) {
          var r = un("iframe");
          return o.each(function (e) {
            return qt(r, "tabindex", e);
          }), Wt(r, n), Wt(r, {
            id: e + "_ifr",
            frameBorder: "0",
            allowTransparency: "true",
            title: t
          }), on(r, "tox-edit-area__iframe"), r;
        }(e.id, n, zi(e), o).dom;

        r.onload = function () {
          r.onload = null, e.dispatch("load");
        }, e.contentAreaContainer = t.iframeContainer, e.iframeElement = r, e.iframeHTML = function (e) {
          var t = ji(e) + "<html><head>";
          Vi(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
          var n = Hi(e),
              o = $i(e),
              r = e.translate(Yl(e));
          return qi(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + qi(e) + '" />'), t += "</head><body id=\"".concat(n, "\" class=\"mce-content-body ").concat(o, "\" data-id=\"").concat(e.id, "\" aria-label=\"").concat(r, "\"><br></body></html>"), t;
        }(e), TN.add(t.iframeContainer, r);
      })(e, t), t.editorContainer && (TN.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = TN.isHidden(t.editorContainer)), e.getElement().style.display = "none", TN.setAttrib(e.id, "aria-hidden", "true"), ON(e);
    }(e, n);
  },
      MN = Qs.DOM,
      IN = function IN(e) {
    return "-" === e.charAt(0);
  },
      FN = function FN(e, t, n) {
    return M.from(t).filter(function (e) {
      return We(e) && !Ry.has(e);
    }).map(function (t) {
      return {
        url: "".concat(e.editorManager.baseURL, "/icons/").concat(t, "/icons").concat(n, ".js"),
        name: M.some(t)
      };
    });
  },
      UN = function UN(e, t) {
    var n = Zs.ScriptLoader,
        o = function o() {
      !e.removed && function (e) {
        var t = _l(e);

        return !m(t) || C(Fy.get(t));
      }(e) && function (e) {
        var t = Nl(e);
        return C(Ay.get(t));
      }(e) && LN(e);
    };

    (function (e, t) {
      var n = _l(e);

      if (m(n) && !IN(n) && !xe(Fy.urls, n)) {
        var _o96 = El(e),
            _r63 = _o96 ? e.documentBaseURI.toAbsolute(_o96) : "themes/".concat(n, "/theme").concat(t, ".js");

        Fy.load(n, _r63)["catch"](function () {
          (function (e, t, n) {
            Vy(e, "ThemeLoadError", Hy("theme", t, n));
          })(e, _r63, n);
        });
      }
    })(e, t), function (e, t) {
      var n = Nl(e);

      if ("plugin" !== n && !xe(Ay.urls, n)) {
        var _o97 = Rl(e),
            _r64 = m(_o97) ? e.documentBaseURI.toAbsolute(_o97) : "models/".concat(n, "/model").concat(t, ".js");

        Ay.load(n, _r64)["catch"](function () {
          (function (e, t, n) {
            Vy(e, "ModelLoadError", Hy("model", t, n));
          })(e, _r64, n);
        });
      }
    }(e, t), function (e, t) {
      var n = ul(t),
          o = ml(t);

      if (!1 === ra.hasCode(n) && "en" !== n) {
        var _r65 = We(o) ? o : "".concat(t.editorManager.baseURL, "/langs/").concat(n, ".js");

        e.add(_r65)["catch"](function () {
          (function (e, t, n) {
            Vy(e, "LanguageLoadError", Hy("language", t, n));
          })(t, _r65, n);
        });
      }
    }(n, e), function (e, t, n) {
      var o = FN(t, "default", n),
          r = function (e) {
        return M.from(rl(e)).filter(We).map(function (e) {
          return {
            url: e,
            name: M.none()
          };
        });
      }(t).orThunk(function () {
        return FN(t, ol(t), "");
      });

      $(function (e) {
        var t = [],
            n = function n(e) {
          t.push(e);
        };

        for (var _t125 = 0; _t125 < e.length; _t125++) {
          e[_t125].each(n);
        }

        return t;
      }([o, r]), function (n) {
        e.add(n.url)["catch"](function () {
          (function (e, t, n) {
            Vy(e, "IconsLoadError", Hy("icons", t, n));
          })(t, n.url, n.name.getOrUndefined());
        });
      });
    }(n, e, t), function (e, t) {
      var n = function n(t, _n102) {
        Iy.load(t, _n102)["catch"](function () {
          (function (e, t, n) {
            Vy(e, "PluginLoadError", Hy("plugin", t, n));
          })(e, _n102, t);
        });
      };

      fe($l(e), function (t, o) {
        n(o, t), e.options.set("plugins", Hl(e).concat(o));
      }), $(Hl(e), function (e) {
        !(e = Bt.trim(e)) || Iy.urls[e] || IN(e) || n(e, "plugins/".concat(e, "/plugin").concat(t, ".js"));
      });
    }(e, t), n.loadQueue().then(o, o);
  },
      zN = Ct().deviceType,
      jN = zN.isPhone(),
      VN = zN.isTablet(),
      HN = function HN(e) {
    if (y(e)) return [];
    {
      var _t126 = p(e) ? e : e.split(/[ ,]/),
          _n103 = H(_t126, He);

      return K(_n103, We);
    }
  },
      $N = function $N(e, t) {
    var n = function (t, n) {
      var o = {},
          r = {};
      return be(t, function (t, n) {
        return j(e, n);
      }, he(o), he(r)), {
        t: o,
        f: r
      };
    }(t);

    return o = n.t, r = n.f, {
      sections: N(o),
      options: N(r)
    };
    var o, r;
  },
      qN = function qN(e, t) {
    return xe(e.sections(), t);
  },
      WN = function WN(e, t) {
    return _objectSpread({
      table_grid: !1,
      object_resizing: !1,
      resize: !1,
      toolbar_mode: we(e, "toolbar_mode").getOr("scrolling"),
      toolbar_sticky: !1
    }, t ? {
      menubar: !1
    } : {});
  },
      KN = function KN(e, t) {
    var n;
    var o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
    return e && e.external_plugins ? Bt.extend({}, e.external_plugins, o) : o;
  },
      GN = function GN(e, t, n, o, r) {
    var s;
    var a = e ? {
      mobile: WN(null !== (s = r.mobile) && void 0 !== s ? s : {}, t)
    } : {},
        i = $N(["mobile"], Xk(a, r)),
        l = Bt.extend(n, o, i.options(), function (e, t) {
      return e && qN(t, "mobile");
    }(e, i) ? function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var o = e.sections(),
          r = we(o, t).getOr({});
      return Bt.extend({}, n, r);
    }(i, "mobile") : {}, {
      external_plugins: KN(o, i.options())
    });
    return function (e, t, n, o) {
      var r = HN(n.forced_plugins),
          s = HN(o.plugins),
          a = function (e, t) {
        return qN(e, t) ? e.sections()[t] : {};
      }(t, "mobile"),
          i = function (e, t, n, o) {
        return e && qN(t, "mobile") ? o : n;
      }(e, t, s, a.plugins ? HN(a.plugins) : s),
          l = function (e, t) {
        return [].concat(HN(e)).concat(HN(t));
      }(r, i);

      return Bt.extend(o, {
        forced_plugins: r,
        plugins: l
      });
    }(e, i, o, l);
  },
      YN = function YN(e) {
    (function (e) {
      var t = function t(_t127) {
        return function () {
          $("left,center,right,justify".split(","), function (n) {
            _t127 !== n && e.formatter.remove("align" + n);
          }), "none" !== _t127 && function (t, n) {
            e.formatter.toggle(t, void 0), e.nodeChanged();
          }("align" + _t127);
        };
      };

      e.editorCommands.addCommands({
        JustifyLeft: t("left"),
        JustifyCenter: t("center"),
        JustifyRight: t("right"),
        JustifyFull: t("justify"),
        JustifyNone: t("none")
      });
    })(e), function (e) {
      var t = function t(_t128) {
        return function () {
          var n = e.selection,
              o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
          return V(o, function (n) {
            return C(e.formatter.matchNode(n, _t128));
          });
        };
      };

      e.editorCommands.addCommands({
        JustifyLeft: t("alignleft"),
        JustifyCenter: t("aligncenter"),
        JustifyRight: t("alignright"),
        JustifyFull: t("alignjustify")
      }, "state");
    }(e);
  },
      XN = function XN(e, t) {
    var n = e.selection,
        o = e.dom;
    return /^ | $/.test(t) ? function (e, t, n) {
      var o = fn(e.getRoot());
      return n = Ig(o, ti.fromRangeStart(t)) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " "), Fg(o, ti.fromRangeEnd(t)) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ");
    }(o, n.getRng(), t) : t;
  },
      QN = function QN(e, t) {
    var _ref18 = function (e) {
      if ("string" != typeof e) {
        var _t129 = Bt.extend({
          paste: e.paste,
          data: {
            paste: e.paste
          }
        }, e);

        return {
          content: e.content,
          details: _t129
        };
      }

      return {
        content: e,
        details: {}
      };
    }(t),
        n = _ref18.content,
        o = _ref18.details;

    Pv(e, {
      content: XN(e, n),
      format: "html",
      set: !1,
      selection: !0,
      paste: o.paste
    }).each(function (t) {
      var n = function (e, t, n) {
        return cy(e).editor.insertContent(t, n);
      }(e, t.content, o);

      Lv(e, n, t), e.addVisual();
    });
  },
      JN = {
    "font-size": "size",
    "font-family": "face"
  },
      ZN = function ZN(e) {
    return function (t, n) {
      return M.from(n).map(fn).filter(Ut).bind(function (n) {
        return function (e, t, n) {
          return lh(fn(n), function (t) {
            return function (t) {
              return Kn(t, e).orThunk(function () {
                return "font" === Mt(t) ? we(JN, e).bind(function (e) {
                  return Gt(t, e);
                }) : M.none();
              });
            }(t);
          }, function (e) {
            return vn(fn(t), e);
          });
        }(e, t, n.dom).or(function (e, t) {
          return M.from(Qs.DOM.getStyle(t, e, !0));
        }(e, n.dom));
      }).getOr("");
    };
  },
      eR = ZN("font-size"),
      tR = _(function (e) {
    return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
  }, ZN("font-family")),
      nR = function nR(e) {
    return Rc(e.getBody()).map(function (e) {
      var t = e.container();
      return Ro(t) ? t.parentNode : t;
    });
  },
      oR = function oR(e, t) {
    return function (e, t) {
      return function (e) {
        return M.from(e.selection.getRng()).bind(function (t) {
          var n = e.getBody();
          return t.startContainer === n && 0 === t.startOffset ? M.none() : M.from(e.selection.getStart(!0));
        });
      }(e).orThunk(O(nR, e)).map(fn).filter(Ut).bind(t);
    }(e, E(M.some, t));
  },
      rR = function rR(e, t) {
    if (/^[0-9.]+$/.test(t)) {
      var _n104 = parseInt(t, 10);

      if (_n104 >= 1 && _n104 <= 7) {
        var _o98 = function (e) {
          return Bt.explode(e.options.get("font_size_style_values"));
        }(e),
            _r66 = function (e) {
          return Bt.explode(e.options.get("font_size_classes"));
        }(e);

        return _r66 ? _r66[_n104 - 1] || t : _o98[_n104 - 1] || t;
      }

      return t;
    }

    return t;
  },
      sR = function sR(e) {
    var t = e.split(/\s*,\s*/);
    return H(t, function (e) {
      return -1 === e.indexOf(" ") || ze(e, '"') || ze(e, "'") ? e : "'".concat(e, "'");
    }).join(",");
  },
      aR = function aR(e) {
    YN(e), function (e) {
      e.editorCommands.addCommands({
        "Cut,Copy,Paste": function CutCopyPaste(t) {
          var n = e.getDoc();
          var o;

          try {
            n.execCommand(t);
          } catch (e) {
            o = !0;
          }

          if ("paste" !== t || n.queryCommandEnabled(t) || (o = !0), o || !n.queryCommandSupported(t)) {
            var _t130 = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");

            (Nt.os.isMacOS() || Nt.os.isiOS()) && (_t130 = _t130.replace(/Ctrl\+/g, "\u2318+")), e.notificationManager.open({
              text: _t130,
              type: "error"
            });
          }
        }
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceAddUndoLevel: function mceAddUndoLevel() {
          e.undoManager.add();
        },
        mceEndUndoLevel: function mceEndUndoLevel() {
          e.undoManager.add();
        },
        Undo: function Undo() {
          e.undoManager.undo();
        },
        Redo: function Redo() {
          e.undoManager.redo();
        }
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceSelectNodeDepth: function mceSelectNodeDepth(t, n, o) {
          var r = 0;
          e.dom.getParent(e.selection.getNode(), function (t) {
            if (1 === t.nodeType && r++ === o) return e.selection.select(t), !1;
          }, e.getBody());
        },
        mceSelectNode: function mceSelectNode(t, n, o) {
          e.selection.select(o);
        },
        selectAll: function selectAll() {
          var t = e.dom.getParent(e.selection.getStart(), Mo);

          if (t) {
            var _n105 = e.dom.createRng();

            _n105.selectNodeContents(t), e.selection.setRng(_n105);
          }
        }
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceCleanup: function mceCleanup() {
          var t = e.selection.getBookmark();
          e.setContent(e.getContent()), e.selection.moveToBookmark(t);
        },
        insertImage: function insertImage(t, n, o) {
          QN(e, e.dom.createHTML("img", {
            src: o
          }));
        },
        insertHorizontalRule: function insertHorizontalRule() {
          e.execCommand("mceInsertContent", !1, "<hr>");
        },
        insertText: function insertText(t, n, o) {
          QN(e, e.dom.encode(o));
        },
        insertHTML: function insertHTML(t, n, o) {
          QN(e, o);
        },
        mceInsertContent: function mceInsertContent(t, n, o) {
          QN(e, o);
        },
        mceSetContent: function mceSetContent(t, n, o) {
          e.setContent(o);
        },
        mceReplaceContent: function mceReplaceContent(t, n, o) {
          e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({
            format: "text"
          })));
        },
        mceNewDocument: function mceNewDocument() {
          e.setContent("");
        }
      });
    }(e), function (e) {
      var t = function t(_t131, n, o) {
        var r = m(o) ? {
          href: o
        } : o,
            s = e.dom.getParent(e.selection.getNode(), "a");
        f(r) && m(r.href) && (r.href = r.href.replace(/ /g, "%20"), s && r.href || e.formatter.remove("link"), r.href && e.formatter.apply("link", r, s));
      };

      e.editorCommands.addCommands({
        unlink: function unlink() {
          if (e.selection.isCollapsed()) {
            var _t132 = e.dom.getParent(e.selection.getStart(), "a");

            _t132 && e.dom.remove(_t132, !0);
          } else e.formatter.remove("link");
        },
        mceInsertLink: t,
        createLink: t
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        Indent: function Indent() {
          (function (e) {
            Sx(e, "indent");
          })(e);
        },
        Outdent: function Outdent() {
          _x(e);
        }
      }), e.editorCommands.addCommands({
        Outdent: function Outdent() {
          return wx(e);
        }
      }, "state");
    }(e), function (e) {
      e.editorCommands.addCommands({
        insertParagraph: function insertParagraph() {
          B_(m_, e);
        },
        mceInsertNewLine: function mceInsertNewLine(t, n, o) {
          D_(e, o);
        },
        InsertLineBreak: function InsertLineBreak(t, n, o) {
          B_(C_, e);
        }
      });
    }(e), function (e) {
      (function (e) {
        e.editorCommands.addCommands({
          "InsertUnorderedList,InsertOrderedList": function InsertUnorderedListInsertOrderedList(t) {
            e.getDoc().execCommand(t);
            var n = e.dom.getParent(e.selection.getNode(), "ol,ul");

            if (n) {
              var _t133 = n.parentNode;

              if (/^(H[1-6]|P|ADDRESS|PRE)$/.test(_t133.nodeName)) {
                var _o99 = e.selection.getBookmark();

                e.dom.split(_t133, n), e.selection.moveToBookmark(_o99);
              }
            }
          }
        });
      })(e), function (e) {
        e.editorCommands.addCommands({
          "InsertUnorderedList,InsertOrderedList": function InsertUnorderedListInsertOrderedList(t) {
            var n = e.dom.getParent(e.selection.getNode(), "ul,ol");
            return n && ("insertunorderedlist" === t && "UL" === n.tagName || "insertorderedlist" === t && "OL" === n.tagName);
          }
        }, "state");
      }(e);
    }(e), function (e) {
      (function (e) {
        var t = function t(_t134, n) {
          e.formatter.toggle(_t134, n), e.nodeChanged();
        };

        e.editorCommands.addCommands({
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function BoldItalicUnderlineStrikethroughSuperscriptSubscript(e) {
            t(e);
          },
          "ForeColor,HiliteColor": function ForeColorHiliteColor(e, n, o) {
            t(e, {
              value: o
            });
          },
          BackColor: function BackColor(e, n, o) {
            t("hilitecolor", {
              value: o
            });
          },
          FontName: function FontName(t, n, o) {
            (function (e, t) {
              var n = rR(e, t);
              e.formatter.toggle("fontname", {
                value: sR(n)
              }), e.nodeChanged();
            })(e, o);
          },
          FontSize: function FontSize(t, n, o) {
            (function (e, t) {
              e.formatter.toggle("fontsize", {
                value: rR(e, t)
              }), e.nodeChanged();
            })(e, o);
          },
          LineHeight: function LineHeight(t, n, o) {
            (function (e, t) {
              e.formatter.toggle("lineheight", {
                value: String(t)
              }), e.nodeChanged();
            })(e, o);
          },
          Lang: function Lang(e, n, o) {
            t(e, {
              value: o.code,
              customValue: o.customCode
            });
          },
          RemoveFormat: function RemoveFormat(t) {
            e.formatter.remove(t);
          },
          mceBlockQuote: function mceBlockQuote() {
            t("blockquote");
          },
          FormatBlock: function FormatBlock(e, n, o) {
            t(m(o) ? o : "p");
          },
          mceToggleFormat: function mceToggleFormat(e, n, o) {
            t(o);
          }
        });
      })(e), function (e) {
        var t = function t(_t135) {
          return e.formatter.match(_t135);
        };

        e.editorCommands.addCommands({
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function BoldItalicUnderlineStrikethroughSuperscriptSubscript(e) {
            return t(e);
          },
          mceBlockQuote: function mceBlockQuote() {
            return t("blockquote");
          }
        }, "state"), e.editorCommands.addQueryValueHandler("FontName", function () {
          return function (e) {
            return oR(e, function (t) {
              return tR(e.getBody(), t.dom);
            }).getOr("");
          }(e);
        }), e.editorCommands.addQueryValueHandler("FontSize", function () {
          return function (e) {
            return oR(e, function (t) {
              return eR(e.getBody(), t.dom);
            }).getOr("");
          }(e);
        }), e.editorCommands.addQueryValueHandler("LineHeight", function () {
          return function (e) {
            return oR(e, function (t) {
              var n = fn(e.getBody()),
                  o = lh(t, function (e) {
                return Kn(e, "line-height");
              }, O(vn, n));
              return o.getOrThunk(function () {
                var e = parseFloat(qn(t, "line-height")),
                    n = parseFloat(qn(t, "font-size"));
                return String(e / n);
              });
            }).getOr("");
          }(e);
        });
      }(e);
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceRemoveNode: function mceRemoveNode(t, n, o) {
          var r = null != o ? o : e.selection.getNode();

          if (r !== e.getBody()) {
            var _t136 = e.selection.getBookmark();

            e.dom.remove(r, !0), e.selection.moveToBookmark(_t136);
          }
        },
        mcePrint: function mcePrint() {
          e.getWin().print();
        },
        mceFocus: function mceFocus(t, n, o) {
          (function (e, t) {
            e.removed || (t ? Ef(e) : function (e) {
              var t = e.selection,
                  n = e.getBody();
              var o = t.getRng();
              e.quirks.refreshContentEditable(), void 0 !== e.bookmark && !1 === _f(e) && pf(e).each(function (t) {
                e.selection.setRng(t), o = t;
              });

              var r = function (e, t) {
                return e.dom.getParent(t, function (t) {
                  return "true" === e.dom.getContentEditable(t);
                });
              }(e, t.getNode());

              if (e.dom.isChildOf(r, n)) return Sf(r), kf(e, o), void Ef(e);
              e.inline || (Nt.browser.isOpera() || Sf(n), e.getWin().focus()), (Nt.browser.isFirefox() || e.inline) && (Sf(n), kf(e, o)), Ef(e);
            }(e));
          })(e, o);
        },
        mceToggleVisualAid: function mceToggleVisualAid() {
          e.hasVisual = !e.hasVisual, e.addVisual();
        }
      });
    }(e);
  };

  var iR =
  /*#__PURE__*/
  function () {
    function iR(e) {
      _classCallCheck(this, iR);

      this.commands = {
        state: {},
        exec: {},
        value: {}
      }, this.editor = e;
    }

    _createClass(iR, [{
      key: "execCommand",
      value: function execCommand(e, t, n, o) {
        var r = this.editor,
            s = e.toLowerCase(),
            a = null == o ? void 0 : o.skip_focus;
        if (r.removed) return !1;
        if ("mcefocus" !== s && (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a ? function (e) {
          pf(e).each(function (t) {
            return e.selection.setRng(t);
          });
        }(r) : r.focus()), r.dispatch("BeforeExecCommand", {
          command: e,
          ui: t,
          value: n
        }).isDefaultPrevented()) return !1;
        var i = this.commands.exec[s];
        return !!w(i) && (i(s, t, n), r.dispatch("ExecCommand", {
          command: e,
          ui: t,
          value: n
        }), !0);
      }
    }, {
      key: "queryCommandState",
      value: function queryCommandState(e) {
        if (this.editor.quirks.isHidden() || this.editor.removed) return !1;
        var t = e.toLowerCase(),
            n = this.commands.state[t];
        return !!w(n) && n(t);
      }
    }, {
      key: "queryCommandValue",
      value: function queryCommandValue(e) {
        if (this.editor.quirks.isHidden() || this.editor.removed) return "";
        var t = e.toLowerCase(),
            n = this.commands.value[t];
        return w(n) ? n(t) : "";
      }
    }, {
      key: "addCommands",
      value: function addCommands(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "exec";
        var n = this.commands;
        fe(e, function (e, o) {
          $(o.toLowerCase().split(","), function (o) {
            n[t][o] = e;
          });
        });
      }
    }, {
      key: "addCommand",
      value: function addCommand(e, t, n) {
        var _this2 = this;

        var o = e.toLowerCase();

        this.commands.exec[o] = function (e, o, r) {
          return t.call(null != n ? n : _this2.editor, o, r);
        };
      }
    }, {
      key: "queryCommandSupported",
      value: function queryCommandSupported(e) {
        var t = e.toLowerCase();
        return !!this.commands.exec[t];
      }
    }, {
      key: "addQueryStateHandler",
      value: function addQueryStateHandler(e, t, n) {
        var _this3 = this;

        this.commands.state[e.toLowerCase()] = function () {
          return t.call(null != n ? n : _this3.editor);
        };
      }
    }, {
      key: "addQueryValueHandler",
      value: function addQueryValueHandler(e, t, n) {
        var _this4 = this;

        this.commands.value[e.toLowerCase()] = function () {
          return t.call(null != n ? n : _this4.editor);
        };
      }
    }]);

    return iR;
  }();

  var lR = "data-mce-contenteditable",
      dR = function dR(e, t, n) {
    try {
      e.getDoc().execCommand(t, !1, String(n));
    } catch (e) {}
  },
      cR = function cR(e, t) {
    e.dom.contentEditable = t ? "true" : "false";
  },
      uR = function uR(e, t) {
    var n = fn(e.getBody());
    (function (e, t, n) {
      an(e, t) && !1 === n ? sn(e, t) : n && on(e, t);
    })(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), function (e) {
      M.from(e.selection.getNode()).each(function (e) {
        e.removeAttribute("data-mce-selected");
      });
    }(e), e.readonly = !0, cR(n, !1), $(hr(n, '*[contenteditable="true"]'), function (e) {
      qt(e, lR, "true"), cR(e, !1);
    })) : (e.readonly = !1, cR(n, !0), $(hr(n, '*[data-mce-contenteditable="true"]'), function (e) {
      Xt(e, lR), cR(e, !0);
    }), dR(e, "StyleWithCSS", !1), dR(e, "enableInlineTableEditing", !1), dR(e, "enableObjectResizing", !1), function (e) {
      return _f(e) || function (e) {
        var t = Mn(fn(e.getElement()));
        return af(t).filter(function (t) {
          return !function (e) {
            var t = e.classList;
            return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"));
          }(t.dom) && Cf(e, t.dom);
        }).isSome();
      }(e);
    }(e) && e.focus(), function (e) {
      e.selection.setRng(e.selection.getRng());
    }(e), e.nodeChanged());
  },
      mR = function mR(e) {
    return e.readonly;
  },
      fR = function fR(e) {
    e.parser.addAttributeFilter("contenteditable", function (t) {
      mR(e) && $(t, function (e) {
        e.attr(lR, e.attr("contenteditable")), e.attr("contenteditable", "false");
      });
    }), e.serializer.addAttributeFilter(lR, function (t) {
      mR(e) && $(t, function (e) {
        e.attr("contenteditable", e.attr(lR));
      });
    }), e.serializer.addTempAttr(lR);
  },
      gR = ["copy"],
      pR = Bt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");

  var hR =
  /*#__PURE__*/
  function () {
    function hR(e) {
      _classCallCheck(this, hR);

      this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || P;
    }

    _createClass(hR, [{
      key: "fire",
      value: function fire(e, t) {
        return this.dispatch(e, t);
      }
    }, {
      key: "dispatch",
      value: function dispatch(e, t) {
        var n = e.toLowerCase(),
            o = Ms(n, null != t ? t : {}, this.scope);
        this.settings.beforeFire && this.settings.beforeFire(o);
        var r = this.bindings[n];
        if (r) for (var _e122 = 0, _t137 = r.length; _e122 < _t137; _e122++) {
          var _t138 = r[_e122];

          if (!_t138.removed) {
            if (_t138.once && this.off(n, _t138.func), o.isImmediatePropagationStopped()) return o;
            if (!1 === _t138.func.call(this.scope, o)) return o.preventDefault(), o;
          }
        }
        return o;
      }
    }, {
      key: "on",
      value: function on(e, t, n, o) {
        if (!1 === t && (t = P), t) {
          var _r67 = {
            func: t,
            removed: !1
          };
          o && Bt.extend(_r67, o);

          var _s39 = e.toLowerCase().split(" ");

          var _a25 = _s39.length;

          for (; _a25--;) {
            var _e123 = _s39[_a25];
            var _t139 = this.bindings[_e123];
            _t139 || (_t139 = [], this.toggleEvent(_e123, !0)), _t139 = n ? [_r67].concat(_toConsumableArray(_t139)) : [].concat(_toConsumableArray(_t139), [_r67]), this.bindings[_e123] = _t139;
          }
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(e, t) {
        var _this5 = this;

        if (e) {
          var _n106 = e.toLowerCase().split(" ");

          var _o100 = _n106.length;

          for (; _o100--;) {
            var _r68 = _n106[_o100];
            var _s40 = this.bindings[_r68];
            if (!_r68) return fe(this.bindings, function (e, t) {
              _this5.toggleEvent(t, !1), delete _this5.bindings[t];
            }), this;

            if (_s40) {
              if (t) {
                var _e124 = W(_s40, function (e) {
                  return e.func === t;
                });

                _s40 = _e124.fail, this.bindings[_r68] = _s40, $(_e124.pass, function (e) {
                  e.removed = !0;
                });
              } else _s40.length = 0;

              _s40.length || (this.toggleEvent(e, !1), delete this.bindings[_r68]);
            }
          }
        } else fe(this.bindings, function (e, t) {
          _this5.toggleEvent(t, !1);
        }), this.bindings = {};

        return this;
      }
    }, {
      key: "once",
      value: function once(e, t, n) {
        return this.on(e, t, n, {
          once: !0
        });
      }
    }, {
      key: "has",
      value: function has(e) {
        return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length);
      }
    }], [{
      key: "isNative",
      value: function isNative(e) {
        return !!pR[e.toLowerCase()];
      }
    }]);

    return hR;
  }();

  var bR = function bR(e) {
    return e._eventDispatcher || (e._eventDispatcher = new hR({
      scope: e,
      toggleEvent: function toggleEvent(t, n) {
        hR.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n);
      }
    })), e._eventDispatcher;
  },
      vR = {
    fire: function fire(e, t, n) {
      return this.dispatch(e, t, n);
    },
    dispatch: function dispatch(e, t, n) {
      var o = this;
      if (o.removed && "remove" !== e && "detach" !== e) return Ms(e.toLowerCase(), null != t ? t : {}, o);
      var r = bR(o).dispatch(e, t);

      if (!1 !== n && o.parent) {
        var _t140 = o.parent();

        for (; _t140 && !r.isPropagationStopped();) {
          _t140.dispatch(e, r, !1), _t140 = _t140.parent();
        }
      }

      return r;
    },
    on: function on(e, t, n) {
      return bR(this).on(e, t, n);
    },
    off: function off(e, t) {
      return bR(this).off(e, t);
    },
    once: function once(e, t) {
      return bR(this).once(e, t);
    },
    hasEventListeners: function hasEventListeners(e) {
      return bR(this).has(e);
    }
  },
      yR = Qs.DOM;

  var CR;

  var wR = function wR(e, t) {
    if ("selectionchange" === t) return e.getDoc();
    if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
    var n = kl(e);
    return n ? (e.eventRoot || (e.eventRoot = yR.select(n)[0]), e.eventRoot) : e.getBody();
  },
      xR = function xR(e, t, n) {
    (function (e) {
      return !e.hidden && !mR(e);
    })(e) ? e.dispatch(t, n) : mR(e) && function (e, t) {
      if (function (e) {
        return "click" === e.type;
      }(t) && !om.metaKeyPressed(t)) {
        var _n107 = fn(t.target);

        (function (e, t) {
          return Go(t, "a", function (t) {
            return vn(t, fn(e.getBody()));
          }).bind(function (e) {
            return Gt(e, "href");
          });
        })(e, _n107).each(function (n) {
          if (t.preventDefault(), /^#/.test(n)) {
            var _t141 = e.dom.select("".concat(n, ",[name=\"").concat((o = n, ze(o, "#") ? function (e, t) {
              return e.substring(t);
            }(o, "#".length) : o), "\"]"));

            _t141.length && e.selection.scrollIntoView(_t141[0], !0);
          } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");

          var o;
        });
      } else (function (e) {
        return j(gR, e.type);
      })(t) && e.dispatch(t.type, t);
    }(e, n);
  },
      kR = function kR(e, t) {
    var n;
    if (e.delegates || (e.delegates = {}), e.delegates[t] || e.removed) return;
    var o = wR(e, t);

    if (kl(e)) {
      if (CR || (CR = {}, e.editorManager.on("removeEditor", function () {
        e.editorManager.activeEditor || CR && (fe(CR, function (t, n) {
          e.dom.unbind(wR(e, n));
        }), CR = null);
      })), CR[t]) return;
      n = function n(_n108) {
        var o = _n108.target,
            r = e.editorManager.get();
        var s = r.length;

        for (; s--;) {
          var _e125 = r[s].getBody();

          (_e125 === o || yR.isChildOf(o, _e125)) && xR(r[s], t, _n108);
        }
      }, CR[t] = n, yR.bind(o, t, n);
    } else n = function n(_n109) {
      xR(e, t, _n109);
    }, yR.bind(o, t, n), e.delegates[t] = n;
  },
      SR = _objectSpread({}, vR, {
    bindPendingEventDelegates: function bindPendingEventDelegates() {
      var e = this;
      Bt.each(e._pendingNativeEvents, function (t) {
        kR(e, t);
      });
    },
    toggleNativeEvent: function toggleNativeEvent(e, t) {
      var n = this;
      "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? kR(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(wR(n, e), e, n.delegates[e]), delete n.delegates[e])));
    },
    unbindAllNativeEvents: function unbindAllNativeEvents() {
      var e = this,
          t = e.getBody(),
          n = e.dom;
      e.delegates && (fe(e.delegates, function (t, n) {
        e.dom.unbind(wR(e, n), n, t);
      }), delete e.delegates), !e.inline && t && n && (t.onload = null, n.unbind(e.getWin()), n.unbind(e.getDoc())), n && (n.unbind(t), n.unbind(e.getContainer()));
    }
  }),
      _R = function _R(e) {
    return m(e) ? {
      value: e.split(/[ ,]/),
      valid: !0
    } : k(e, m) ? {
      value: e,
      valid: !0
    } : {
      valid: !1,
      message: "The value must be a string[] or a comma/space separated string."
    };
  },
      ER = function ER(e, t) {
    return e + (Ke(t.message) ? "" : ". ".concat(t.message));
  },
      NR = function NR(e) {
    return e.valid;
  },
      RR = function RR(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var o = t(e);
    return b(o) ? o ? {
      value: e,
      valid: !0
    } : {
      valid: !1,
      message: n
    } : o;
  },
      AR = ["design", "readonly"],
      OR = function OR(e, t, n, o) {
    var r = n[t.get()],
        s = n[o];

    try {
      s.activate();
    } catch (e) {
      return void console.error("problem while activating editor mode ".concat(o, ":"), e);
    }

    r.deactivate(), r.editorReadOnly !== s.editorReadOnly && uR(e, s.editorReadOnly), t.set(o), function (e, t) {
      e.dispatch("SwitchMode", {
        mode: t
      });
    }(e, o);
  },
      TR = Bt.each,
      BR = Bt.explode,
      DR = {
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123
  },
      PR = Bt.makeMap("alt,ctrl,shift,meta,access"),
      LR = function LR(e) {
    var t;
    var n = {},
        o = Nt.os.isMacOS() || Nt.os.isiOS();
    TR(BR(e.toLowerCase(), "+"), function (e) {
      e in PR ? n[e] = !0 : /^[0-9]{2,}$/.test(e) ? n.keyCode = parseInt(e, 10) : (n.charCode = e.charCodeAt(0), n.keyCode = DR[e] || e.toUpperCase().charCodeAt(0));
    });
    var r = [n.keyCode];

    for (t in PR) {
      n[t] ? r.push(t) : n[t] = !1;
    }

    return n.id = r.join(","), n.access && (n.alt = !0, o ? n.ctrl = !0 : n.shift = !0), n.meta && (o ? n.meta = !0 : (n.ctrl = !0, n.meta = !1)), n;
  };

  var MR =
  /*#__PURE__*/
  function () {
    function MR(e) {
      _classCallCheck(this, MR);

      this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
      var t = this;
      e.on("keyup keypress keydown", function (e) {
        !t.hasModifier(e) && !t.isFunctionKey(e) || e.isDefaultPrevented() || (TR(t.shortcuts, function (n) {
          if (t.matchShortcut(e, n)) return t.pendingPatterns = n.subpatterns.slice(0), "keydown" === e.type && t.executeShortcutAction(n), !0;
        }), t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]), t.pendingPatterns.shift()));
      });
    }

    _createClass(MR, [{
      key: "add",
      value: function add(e, t, n, o) {
        var r = this,
            s = r.normalizeCommandFunc(n);
        return TR(BR(Bt.trim(e)), function (e) {
          var n = r.createShortcut(e, t, s, o);
          r.shortcuts[n.id] = n;
        }), !0;
      }
    }, {
      key: "remove",
      value: function remove(e) {
        var t = this.createShortcut(e);
        return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
      }
    }, {
      key: "normalizeCommandFunc",
      value: function normalizeCommandFunc(e) {
        var t = this,
            n = e;
        return "string" == typeof n ? function () {
          t.editor.execCommand(n, !1, null);
        } : Bt.isArray(n) ? function () {
          t.editor.execCommand(n[0], n[1], n[2]);
        } : n;
      }
    }, {
      key: "createShortcut",
      value: function createShortcut(e, t, n, o) {
        var r = Bt.map(BR(e, ">"), LR);
        return r[r.length - 1] = Bt.extend(r[r.length - 1], {
          func: n,
          scope: o || this.editor
        }), Bt.extend(r[0], {
          desc: this.editor.translate(t),
          subpatterns: r.slice(1)
        });
      }
    }, {
      key: "hasModifier",
      value: function hasModifier(e) {
        return e.altKey || e.ctrlKey || e.metaKey;
      }
    }, {
      key: "isFunctionKey",
      value: function isFunctionKey(e) {
        return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123;
      }
    }, {
      key: "matchShortcut",
      value: function matchShortcut(e, t) {
        return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0);
      }
    }, {
      key: "executeShortcutAction",
      value: function executeShortcutAction(e) {
        return e.func ? e.func.call(e.scope) : null;
      }
    }]);

    return MR;
  }();

  var IR = function IR() {
    var e = function () {
      var e = {},
          t = {},
          n = {},
          o = {},
          r = {},
          s = {},
          a = {},
          i = function i(e, t) {
        return function (n, o) {
          return e[n.toLowerCase()] = _objectSpread({}, o, {
            type: t
          });
        };
      };

      return {
        addButton: i(e, "button"),
        addGroupToolbarButton: i(e, "grouptoolbarbutton"),
        addToggleButton: i(e, "togglebutton"),
        addMenuButton: i(e, "menubutton"),
        addSplitButton: i(e, "splitbutton"),
        addMenuItem: i(t, "menuitem"),
        addNestedMenuItem: i(t, "nestedmenuitem"),
        addToggleMenuItem: i(t, "togglemenuitem"),
        addAutocompleter: i(n, "autocompleter"),
        addContextMenu: i(r, "contextmenu"),
        addContextToolbar: i(s, "contexttoolbar"),
        addContextForm: i(s, "contextform"),
        addSidebar: i(a, "sidebar"),
        addIcon: function addIcon(e, t) {
          return o[e.toLowerCase()] = t;
        },
        getAll: function getAll() {
          return {
            buttons: e,
            menuItems: t,
            icons: o,
            popups: n,
            contextMenus: r,
            contextToolbars: s,
            sidebars: a
          };
        }
      };
    }();

    return {
      addAutocompleter: e.addAutocompleter,
      addButton: e.addButton,
      addContextForm: e.addContextForm,
      addContextMenu: e.addContextMenu,
      addContextToolbar: e.addContextToolbar,
      addIcon: e.addIcon,
      addMenuButton: e.addMenuButton,
      addMenuItem: e.addMenuItem,
      addNestedMenuItem: e.addNestedMenuItem,
      addSidebar: e.addSidebar,
      addSplitButton: e.addSplitButton,
      addToggleButton: e.addToggleButton,
      addGroupToolbarButton: e.addGroupToolbarButton,
      addToggleMenuItem: e.addToggleMenuItem,
      getAll: e.getAll
    };
  },
      FR = Qs.DOM,
      UR = Bt.extend,
      zR = Bt.each;

  var jR =
  /*#__PURE__*/
  function () {
    function jR(e, t, n) {
      _classCallCheck(this, jR);

      this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, UR(this, SR);
      var o = this;
      this.id = e, this.hidden = !1;

      var r = function (e, t) {
        return GN(jN || VN, jN, t, e, t);
      }(n.defaultOptions, t);

      this.options = function (e, t) {
        var n = {},
            o = {},
            r = function r(e, t, n) {
          var r = RR(t, n);
          return NR(r) ? (o[e] = r.value, !0) : (console.warn(ER("Invalid value passed for the ".concat(e, " option"), r)), !1);
        },
            s = function s(e) {
          return xe(n, e);
        };

        return {
          register: function register(e, s) {
            var a = function (e) {
              return m(e.processor);
            }(s) ? function (e) {
              var t = function () {
                switch (e) {
                  case "array":
                    return p;

                  case "boolean":
                    return b;

                  case "function":
                    return w;

                  case "number":
                    return x;

                  case "object":
                    return f;

                  case "string":
                    return m;

                  case "string[]":
                    return _R;

                  case "object[]":
                    return function (e) {
                      return k(e, f);
                    };

                  case "regexp":
                    return function (e) {
                      return u(e, RegExp);
                    };
                }
              }();

              return function (n) {
                return RR(n, t, "The value must be a ".concat(e, "."));
              };
            }(s.processor) : s.processor,
                i = function (e, t, n) {
              if (!v(t)) {
                var _o101 = RR(t, n);

                if (NR(_o101)) return _o101.value;
                console.error(ER("Invalid default value passed for the \"".concat(e, "\" option"), _o101));
              }
            }(e, s["default"], a);

            n[e] = _objectSpread({}, s, {
              "default": i,
              processor: a
            }), we(o, e).orThunk(function () {
              return we(t, e);
            }).each(function (t) {
              return r(e, t, a);
            });
          },
          isRegistered: s,
          get: function get(e) {
            return we(o, e).orThunk(function () {
              return we(n, e).map(function (e) {
                return e["default"];
              });
            }).getOrUndefined();
          },
          set: function set(e, t) {
            if (s(e)) {
              var _o102 = n[e];
              return _o102.immutable ? (console.error("\"".concat(e, "\" is an immutable option and cannot be updated")), !1) : r(e, t, _o102.processor);
            }

            return console.warn("\"".concat(e, "\" is not a registered option. Ensure the option has been registered before setting a value.")), !1;
          },
          unset: function unset(e) {
            var t = s(e);
            return t && delete o[e], t;
          },
          isSet: function isSet(e) {
            return xe(o, e);
          }
        };
      }(0, r), function (e) {
        var t = e.options.register;
        t("id", {
          processor: "string",
          "default": e.id
        }), t("selector", {
          processor: "string"
        }), t("target", {
          processor: "object"
        }), t("suffix", {
          processor: "string"
        }), t("cache_suffix", {
          processor: "string"
        }), t("base_url", {
          processor: "string"
        }), t("referrer_policy", {
          processor: "string",
          "default": ""
        }), t("language_load", {
          processor: "boolean"
        }), t("inline", {
          processor: "boolean",
          "default": !1
        }), t("iframe_attrs", {
          processor: "object",
          "default": {}
        }), t("doctype", {
          processor: "string",
          "default": "<!DOCTYPE html>"
        }), t("document_base_url", {
          processor: "string",
          "default": e.documentBaseUrl
        }), t("body_id", {
          processor: Ui(e, "tinymce"),
          "default": "tinymce"
        }), t("body_class", {
          processor: Ui(e),
          "default": ""
        }), t("content_security_policy", {
          processor: "string",
          "default": ""
        }), t("br_in_pre", {
          processor: "boolean",
          "default": !0
        }), t("forced_root_block", {
          processor: function processor(e) {
            var t = m(e) && We(e);
            return t ? {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be a non-empty string."
            };
          },
          "default": "p"
        }), t("forced_root_block_attrs", {
          processor: "object",
          "default": {}
        }), t("newline_behavior", {
          processor: function processor(e) {
            var t = j(["block", "linebreak", "invert", "default"], e);
            return t ? {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be one of: block, linebreak, invert or default."
            };
          },
          "default": "default"
        }), t("br_newline_selector", {
          processor: "string",
          "default": ".mce-toc h2,figcaption,caption"
        }), t("no_newline_selector", {
          processor: "string",
          "default": ""
        }), t("keep_styles", {
          processor: "boolean",
          "default": !0
        }), t("end_container_on_empty_block", {
          processor: function processor(e) {
            return b(e) || m(e) ? {
              valid: !0,
              value: e
            } : {
              valid: !1,
              message: "Must be boolean or a string"
            };
          },
          "default": "blockquote"
        }), t("font_size_style_values", {
          processor: "string",
          "default": "xx-small,x-small,small,medium,large,x-large,xx-large"
        }), t("font_size_legacy_values", {
          processor: "string",
          "default": "xx-small,small,medium,large,x-large,xx-large,300%"
        }), t("font_size_classes", {
          processor: "string",
          "default": ""
        }), t("automatic_uploads", {
          processor: "boolean",
          "default": !0
        }), t("images_reuse_filename", {
          processor: "boolean",
          "default": !1
        }), t("images_replace_blob_uris", {
          processor: "boolean",
          "default": !0
        }), t("icons", {
          processor: "string",
          "default": ""
        }), t("icons_url", {
          processor: "string",
          "default": ""
        }), t("images_upload_url", {
          processor: "string",
          "default": ""
        }), t("images_upload_base_path", {
          processor: "string",
          "default": ""
        }), t("images_upload_base_path", {
          processor: "string",
          "default": ""
        }), t("images_upload_credentials", {
          processor: "boolean",
          "default": !1
        }), t("images_upload_handler", {
          processor: "function"
        }), t("language", {
          processor: "string",
          "default": "en"
        }), t("language_url", {
          processor: "string",
          "default": ""
        }), t("entity_encoding", {
          processor: "string",
          "default": "named"
        }), t("indent", {
          processor: "boolean",
          "default": !0
        }), t("indent_before", {
          processor: "string",
          "default": "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
        }), t("indent_after", {
          processor: "string",
          "default": "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
        }), t("indent_use_margin", {
          processor: "boolean",
          "default": !1
        }), t("indentation", {
          processor: "string",
          "default": "40px"
        }), t("content_css", {
          processor: function processor(e) {
            var t = !1 === e || m(e) || k(e, m);
            return t ? m(e) ? {
              value: H(e.split(","), He),
              valid: t
            } : p(e) ? {
              value: e,
              valid: t
            } : !1 === e ? {
              value: [],
              valid: t
            } : {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be false, a string or an array of strings."
            };
          },
          "default": Pl(e) ? [] : ["default"]
        }), t("content_style", {
          processor: "string"
        }), t("content_css_cors", {
          processor: "boolean",
          "default": !1
        }), t("font_css", {
          processor: function processor(e) {
            var t = m(e) || k(e, m);
            return t ? {
              value: p(e) ? e : H(e.split(","), He),
              valid: t
            } : {
              valid: !1,
              message: "Must be a string or an array of strings."
            };
          },
          "default": []
        }), t("inline_boundaries", {
          processor: "boolean",
          "default": !0
        }), t("inline_boundaries_selector", {
          processor: "string",
          "default": "a[href],code,span.mce-annotation"
        }), t("object_resizing", {
          processor: function processor(e) {
            var t = b(e) || m(e);
            return t ? !1 === e || Di.isiPhone() || Di.isiPad() ? {
              value: "",
              valid: t
            } : {
              value: !0 === e ? "table,img,figure.image,div,video,iframe" : e,
              valid: t
            } : {
              valid: !1,
              message: "Must be boolean or a string"
            };
          },
          "default": !Pi
        }), t("resize_img_proportional", {
          processor: "boolean",
          "default": !0
        }), t("event_root", {
          processor: "object"
        }), t("service_message", {
          processor: "string"
        }), t("theme", {
          processor: function processor(e) {
            return !1 === e || m(e) || w(e);
          },
          "default": "silver"
        }), t("theme_url", {
          processor: "string"
        }), t("formats", {
          processor: "object"
        }), t("format_empty_lines", {
          processor: "boolean",
          "default": !1
        }), t("preview_styles", {
          processor: function processor(e) {
            var t = !1 === e || m(e);
            return t ? {
              value: !1 === e ? "" : e,
              valid: t
            } : {
              valid: !1,
              message: "Must be false or a string"
            };
          },
          "default": "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
        }), t("custom_ui_selector", {
          processor: "string",
          "default": ""
        }), t("hidden_input", {
          processor: "boolean",
          "default": !0
        }), t("submit_patch", {
          processor: "boolean",
          "default": !0
        }), t("encoding", {
          processor: "string"
        }), t("add_form_submit_trigger", {
          processor: "boolean",
          "default": !0
        }), t("add_unload_trigger", {
          processor: "boolean",
          "default": !0
        }), t("custom_undo_redo_levels", {
          processor: "number",
          "default": 0
        }), t("disable_nodechange", {
          processor: "boolean",
          "default": !1
        }), t("readonly", {
          processor: "boolean",
          "default": !1
        }), t("plugins", {
          processor: "string[]",
          "default": []
        }), t("external_plugins", {
          processor: "object"
        }), t("forced_plugins", {
          processor: "string[]"
        }), t("model", {
          processor: "string",
          "default": e.hasPlugin("rtc") ? "plugin" : "dom"
        }), t("model_url", {
          processor: "string"
        }), t("block_unsupported_drop", {
          processor: "boolean",
          "default": !0
        }), t("visual", {
          processor: "boolean",
          "default": !0
        }), t("visual_table_class", {
          processor: "string",
          "default": "mce-item-table"
        }), t("visual_anchor_class", {
          processor: "string",
          "default": "mce-item-anchor"
        }), t("iframe_aria_text", {
          processor: "string",
          "default": "Rich Text Area. Press ALT-0 for help."
        }), t("setup", {
          processor: "function"
        }), t("init_instance_callback", {
          processor: "function"
        }), t("url_converter", {
          processor: "function",
          "default": e.convertURL
        }), t("url_converter_scope", {
          processor: "object",
          "default": e
        }), t("urlconverter_callback", {
          processor: "function"
        }), t("allow_conditional_comments", {
          processor: "boolean",
          "default": !1
        }), t("allow_html_data_urls", {
          processor: "boolean",
          "default": !1
        }), t("allow_svg_data_urls", {
          processor: "boolean"
        }), t("allow_html_in_named_anchor", {
          processor: "boolean",
          "default": !1
        }), t("allow_script_urls", {
          processor: "boolean",
          "default": !1
        }), t("allow_unsafe_link_target", {
          processor: "boolean",
          "default": !1
        }), t("convert_fonts_to_spans", {
          processor: "boolean",
          "default": !0,
          deprecated: !0
        }), t("fix_list_elements", {
          processor: "boolean",
          "default": !1
        }), t("preserve_cdata", {
          processor: "boolean",
          "default": !1
        }), t("remove_trailing_brs", {
          processor: "boolean"
        }), t("inline_styles", {
          processor: "boolean",
          "default": !0,
          deprecated: !0
        }), t("element_format", {
          processor: "string",
          "default": "html"
        }), t("entities", {
          processor: "string"
        }), t("schema", {
          processor: "string",
          "default": "html5"
        }), t("convert_urls", {
          processor: "boolean",
          "default": !0
        }), t("relative_urls", {
          processor: "boolean",
          "default": !0
        }), t("remove_script_host", {
          processor: "boolean",
          "default": !0
        }), t("custom_elements", {
          processor: "string"
        }), t("extended_valid_elements", {
          processor: "string"
        }), t("invalid_elements", {
          processor: "string"
        }), t("invalid_styles", {
          processor: Fi
        }), t("valid_children", {
          processor: "string"
        }), t("valid_classes", {
          processor: Fi
        }), t("valid_elements", {
          processor: "string"
        }), t("valid_styles", {
          processor: Fi
        }), t("verify_html", {
          processor: "boolean",
          "default": !0
        }), t("auto_focus", {
          processor: function processor(e) {
            return m(e) || !0 === e;
          }
        }), t("browser_spellcheck", {
          processor: "boolean",
          "default": !1
        }), t("protect", {
          processor: "array"
        }), t("images_file_types", {
          processor: "string",
          "default": "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"
        }), t("deprecation_warnings", {
          processor: "boolean",
          "default": !0
        }), t("a11y_advanced_options", {
          processor: "boolean",
          "default": !1
        }), t("api_key", {
          processor: "string"
        }), t("paste_block_drop", {
          processor: "boolean",
          "default": !1
        }), t("paste_data_images", {
          processor: "boolean",
          "default": !0
        }), t("paste_preprocess", {
          processor: "function"
        }), t("paste_postprocess", {
          processor: "function"
        }), t("paste_webkit_styles", {
          processor: "string",
          "default": "none"
        }), t("paste_remove_styles_if_webkit", {
          processor: "boolean",
          "default": !0
        }), t("paste_merge_formats", {
          processor: "boolean",
          "default": !0
        }), t("smart_paste", {
          processor: "boolean",
          "default": !0
        }), t("paste_as_text", {
          processor: "boolean",
          "default": !1
        }), t("paste_tab_spaces", {
          processor: "number",
          "default": 4
        }), t("text_patterns", {
          processor: function processor(e) {
            return k(e, f) || !1 === e ? {
              value: Bi(!1 === e ? [] : e),
              valid: !0
            } : {
              valid: !1,
              message: "Must be an array of objects or false."
            };
          },
          "default": [{
            start: "*",
            end: "*",
            format: "italic"
          }, {
            start: "**",
            end: "**",
            format: "bold"
          }, {
            start: "#",
            format: "h1"
          }, {
            start: "##",
            format: "h2"
          }, {
            start: "###",
            format: "h3"
          }, {
            start: "####",
            format: "h4"
          }, {
            start: "#####",
            format: "h5"
          }, {
            start: "######",
            format: "h6"
          }, {
            start: "1. ",
            cmd: "InsertOrderedList"
          }, {
            start: "* ",
            cmd: "InsertUnorderedList"
          }, {
            start: "- ",
            cmd: "InsertUnorderedList"
          }]
        }), t("noneditable_class", {
          processor: "string",
          "default": "mceNonEditable"
        }), t("editable_class", {
          processor: "string",
          "default": "mceEditable"
        }), t("noneditable_regexp", {
          processor: function processor(e) {
            return k(e, Mi) ? {
              value: e,
              valid: !0
            } : Mi(e) ? {
              value: [e],
              valid: !0
            } : {
              valid: !1,
              message: "Must be a RegExp or an array of RegExp."
            };
          },
          "default": []
        }), t("table_tab_navigation", {
          processor: "boolean",
          "default": !0
        }), e.on("ScriptsLoaded", function () {
          t("directionality", {
            processor: "string",
            "default": ra.isRtl() ? "rtl" : void 0
          }), t("placeholder", {
            processor: "string",
            "default": Li.getAttrib(e.getElement(), "placeholder")
          });
        });
      }(o);
      var s = this.options.get;
      s("deprecation_warnings") && function (e, t) {
        (function (e, t) {
          var n = Sy(e),
              o = _y(t),
              r = o.length > 0,
              s = n.length > 0,
              a = "mobile" === t.theme;

          if (r || s || a) {
            var _e126 = "\n- ",
                _t142 = a ? "\n\nThemes:".concat(_e126, "mobile") : "",
                _i18 = r ? "\n\nPlugins:".concat(_e126).concat(o.join(_e126)) : "",
                _l9 = s ? "\n\nOptions:".concat(_e126).concat(n.join(_e126)) : "";

            console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + _t142 + _i18 + _l9);
          }
        })(e, t);
      }(t, r);
      var a = s("suffix");
      a && (n.suffix = a), this.suffix = n.suffix;
      var i = s("base_url");
      i && n._setBaseUrl(i), this.baseUri = n.baseURI;
      var l = cl(o);
      l && (Zs.ScriptLoader._setReferrerPolicy(l), Qs.DOM.styleSheetLoader._setReferrerPolicy(l)), sa.languageLoad = s("language_load"), sa.baseURL = n.baseURL, this.setDirty(!1), this.documentBaseURI = new xv(Vi(o), {
        base_uri: this.baseUri
      }), this.baseURI = this.baseUri, this.inline = Pl(o), this.shortcuts = new MR(this), this.editorCommands = new iR(this), aR(this);
      var d = s("cache_suffix");
      d && (Nt.cacheSuffix = d.replace(/^[\?\&]+/, "")), this.ui = {
        registry: IR(),
        styleSheetLoader: void 0,
        show: S,
        hide: S,
        setEnabled: S,
        isEnabled: L
      }, this.mode = function (e) {
        var t = ea("design"),
            n = ea({
          design: {
            activate: S,
            deactivate: S,
            editorReadOnly: !1
          },
          readonly: {
            activate: S,
            deactivate: S,
            editorReadOnly: !0
          }
        });
        return function (e) {
          e.serializer ? fR(e) : e.on("PreInit", function () {
            fR(e);
          });
        }(e), function (e) {
          e.on("ShowCaret", function (t) {
            mR(e) && t.preventDefault();
          }), e.on("ObjectSelected", function (t) {
            mR(e) && t.preventDefault();
          });
        }(e), {
          isReadOnly: function isReadOnly() {
            return mR(e);
          },
          set: function set(o) {
            return function (e, t, n, o) {
              if (o !== n.get()) {
                if (!xe(t, o)) throw new Error("Editor mode '".concat(o, "' is invalid"));
                e.initialized ? OR(e, n, t, o) : e.on("init", function () {
                  return OR(e, n, t, o);
                });
              }
            }(e, n.get(), t, o);
          },
          get: function get() {
            return t.get();
          },
          register: function register(e, t) {
            n.set(function (e, t, n) {
              if (j(AR, t)) throw new Error("Cannot override default mode ".concat(t));
              return _objectSpread({}, e, _defineProperty({}, t, _objectSpread({}, n, {
                deactivate: function deactivate() {
                  try {
                    n.deactivate();
                  } catch (e) {
                    console.error("problem while deactivating editor mode ".concat(t, ":"), e);
                  }
                }
              })));
            }(n.get(), e, t));
          }
        };
      }(o), n.dispatch("SetupEditor", {
        editor: this
      });
      var c = Xl(o);
      w(c) && c.call(o, o);
    }

    _createClass(jR, [{
      key: "render",
      value: function render() {
        (function (e) {
          var t = e.id;
          ra.setCode(ul(e));

          var n = function n() {
            MN.unbind(window, "ready", n), e.render();
          };

          if (!Vs.Event.domLoaded) return void MN.bind(window, "ready", n);
          if (!e.getElement()) return;
          var o = fn(e.getElement()),
              r = Qt(o);
          e.on("remove", function () {
            q(o.dom.attributes, function (e) {
              return Xt(o, e.name);
            }), Wt(o, r);
          }), e.ui.styleSheetLoader = function (e, t) {
            return Xo.forElement(e, {
              contentCssCors: Vl(t),
              referrerPolicy: cl(t)
            });
          }(o, e), Pl(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility, e.getElement().style.visibility = "hidden");
          var s = e.getElement().form || MN.getParent(t, "form");
          s && (e.formElement = s, Ll(e) && !No(e.getElement()) && (MN.insertAfter(MN.create("input", {
            type: "hidden",
            name: t
          }), t), e.hasHiddenInput = !0), e.formEventDelegate = function (t) {
            e.dispatch(t.type, t);
          }, MN.bind(s, "submit reset", e.formEventDelegate), e.on("reset", function () {
            e.resetContent();
          }), !Ml(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || (s._mceOldSubmit = s.submit, s.submit = function () {
            return e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s);
          })), e.windowManager = Uy(e), e.notificationManager = My(e), function (e) {
            return "xml" === e.options.get("encoding");
          }(e) && e.on("GetContent", function (e) {
            e.save && (e.content = MN.encode(e.content));
          }), Il(e) && e.on("submit", function () {
            e.initialized && e.save();
          }), Fl(e) && (e._beforeUnload = function () {
            !e.initialized || e.destroyed || e.isHidden() || e.save({
              format: "raw",
              no_events: !0,
              set_dirty: !1
            });
          }, e.editorManager.on("BeforeUnload", e._beforeUnload)), e.editorManager.add(e), UN(e, e.suffix);
        })(this);
      }
    }, {
      key: "focus",
      value: function focus(e) {
        this.execCommand("mceFocus", !1, e);
      }
    }, {
      key: "hasFocus",
      value: function hasFocus() {
        return _f(this);
      }
    }, {
      key: "translate",
      value: function translate(e) {
        return ra.translate(e);
      }
    }, {
      key: "getParam",
      value: function getParam(e, t, n) {
        var o = this.options;
        return o.isRegistered(e) || (C(n) ? o.register(e, {
          processor: n,
          "default": t
        }) : o.register(e, {
          processor: L,
          "default": t
        })), o.isSet(e) || v(t) ? o.get(e) : t;
      }
    }, {
      key: "hasPlugin",
      value: function hasPlugin(e, t) {
        return !(!j(Hl(this), e) || t && void 0 === Iy.get(e));
      }
    }, {
      key: "nodeChanged",
      value: function nodeChanged(e) {
        this._nodeChangeDispatcher.nodeChanged(e);
      }
    }, {
      key: "addCommand",
      value: function addCommand(e, t, n) {
        this.editorCommands.addCommand(e, t, n);
      }
    }, {
      key: "addQueryStateHandler",
      value: function addQueryStateHandler(e, t, n) {
        this.editorCommands.addQueryStateHandler(e, t, n);
      }
    }, {
      key: "addQueryValueHandler",
      value: function addQueryValueHandler(e, t, n) {
        this.editorCommands.addQueryValueHandler(e, t, n);
      }
    }, {
      key: "addShortcut",
      value: function addShortcut(e, t, n, o) {
        this.shortcuts.add(e, t, n, o);
      }
    }, {
      key: "execCommand",
      value: function execCommand(e, t, n, o) {
        return this.editorCommands.execCommand(e, t, n, o);
      }
    }, {
      key: "queryCommandState",
      value: function queryCommandState(e) {
        return this.editorCommands.queryCommandState(e);
      }
    }, {
      key: "queryCommandValue",
      value: function queryCommandValue(e) {
        return this.editorCommands.queryCommandValue(e);
      }
    }, {
      key: "queryCommandSupported",
      value: function queryCommandSupported(e) {
        return this.editorCommands.queryCommandSupported(e);
      }
    }, {
      key: "show",
      value: function show() {
        var e = this;
        e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = "true" : (FR.show(e.getContainer()), FR.hide(e.id)), e.load(), e.dispatch("show"));
      }
    }, {
      key: "hide",
      value: function hide() {
        var e = this;
        e.hidden || (e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (FR.hide(e.getContainer()), FR.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.dispatch("hide"));
      }
    }, {
      key: "isHidden",
      value: function isHidden() {
        return this.hidden;
      }
    }, {
      key: "setProgressState",
      value: function setProgressState(e, t) {
        this.dispatch("ProgressState", {
          state: e,
          time: t
        });
      }
    }, {
      key: "load",
      value: function load(e) {
        var t = this;
        var n,
            o = t.getElement();
        if (t.removed) return "";

        if (o) {
          (e = e || {}).load = !0;

          var _r69 = No(o) ? o.value : o.innerHTML;

          return n = t.setContent(_r69, e), e.element = o, e.no_events || t.dispatch("LoadContent", e), e.element = o = null, n;
        }
      }
    }, {
      key: "save",
      value: function save(e) {
        var t = this;
        var n,
            o,
            r = t.getElement();
        if (r && t.initialized && !t.removed) return (e = e || {}).save = !0, e.element = r, n = e.content = t.getContent(e), e.no_events || t.dispatch("SaveContent", e), "raw" === e.format && t.dispatch("RawSaveContent", e), n = e.content, No(r) ? r.value = n : (!e.is_removing && t.inline || (r.innerHTML = n), (o = FR.getParent(t.id, "form")) && zR(o.elements, function (e) {
          if (e.name === t.id) return e.value = n, !1;
        })), e.element = r = null, !1 !== e.set_dirty && t.setDirty(!1), n;
      }
    }, {
      key: "setContent",
      value: function setContent(e, t) {
        return wy(this, e, t);
      }
    }, {
      key: "getContent",
      value: function getContent(e) {
        return function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var n = function (e, t) {
            return _objectSpread({}, e, {
              format: t,
              get: !0,
              getInner: !0
            });
          }(t, t.format ? t.format : "html");

          return Bv(e, n).fold(R, function (t) {
            var n = function (e, t) {
              return cy(e).editor.getContent(t);
            }(e, t);

            return Dv(e, n, t);
          });
        }(this, e);
      }
    }, {
      key: "insertContent",
      value: function insertContent(e, t) {
        t && (e = UR({
          content: e
        }, t)), this.execCommand("mceInsertContent", !1, e);
      }
    }, {
      key: "resetContent",
      value: function resetContent(e) {
        void 0 === e ? wy(this, this.startContent, {
          format: "raw"
        }) : wy(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
      }
    }, {
      key: "isDirty",
      value: function isDirty() {
        return !this.isNotDirty;
      }
    }, {
      key: "setDirty",
      value: function setDirty(e) {
        var t = !this.isNotDirty;
        this.isNotDirty = !e, e && e !== t && this.dispatch("dirty");
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var e = this;
        return e.container || (e.container = FR.get(e.editorContainer || e.id + "_parent")), e.container;
      }
    }, {
      key: "getContentAreaContainer",
      value: function getContentAreaContainer() {
        return this.contentAreaContainer;
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.targetElm || (this.targetElm = FR.get(this.id)), this.targetElm;
      }
    }, {
      key: "getWin",
      value: function getWin() {
        var e = this;
        var t;
        return e.contentWindow || (t = e.iframeElement, t && (e.contentWindow = t.contentWindow)), e.contentWindow;
      }
    }, {
      key: "getDoc",
      value: function getDoc() {
        var e = this;
        var t;
        return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument;
      }
    }, {
      key: "getBody",
      value: function getBody() {
        var e = this.getDoc();
        return this.bodyElement || (e ? e.body : null);
      }
    }, {
      key: "convertURL",
      value: function convertURL(e, t, n) {
        var o = this,
            r = o.options.get,
            s = Jl(o);
        return w(s) ? s.call(o, e, n, !0, t) : !r("convert_urls") || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r("relative_urls") ? o.documentBaseURI.toRelative(e) : e = o.documentBaseURI.toAbsolute(e, r("remove_script_host"));
      }
    }, {
      key: "addVisual",
      value: function addVisual(e) {
        (function (e, t) {
          (function (e, t) {
            uy(e).editor.addVisual(t);
          })(e, t);
        })(this, e);
      }
    }, {
      key: "remove",
      value: function remove() {
        (function (e) {
          if (!e.removed) {
            var _t143 = e._selectionOverrides,
                _n110 = e.editorUpload,
                _o103 = e.getBody(),
                _r70 = e.getElement();

            _o103 && e.save({
              is_removing: !0
            }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && _r70 && Ey.remove(_r70.nextSibling), function (e) {
              e.dispatch("remove");
            }(e), e.editorManager.remove(e), !e.inline && _o103 && function (e) {
              Ey.setStyle(e.id, "display", e.orgDisplay);
            }(e), function (e) {
              e.dispatch("detach");
            }(e), Ey.remove(e.getContainer()), Ny(_t143), Ny(_n110), e.destroy();
          }
        })(this);
      }
    }, {
      key: "destroy",
      value: function destroy(e) {
        (function (e, t) {
          var n = e.selection,
              o = e.dom;
          e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Ny(n), Ny(o)), function (e) {
            var t = e.formElement;
            t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, t._mceOldSubmit = null), Ey.unbind(t, "submit reset", e.formEventDelegate));
          }(e), function (e) {
            e.contentAreaContainer = e.formElement = e.container = e.editorContainer = null, e.bodyElement = e.contentDocument = e.contentWindow = null, e.iframeElement = e.targetElm = null, e.selection && (e.selection = e.selection.win = e.selection.dom = e.selection.dom.doc = null);
          }(e), e.destroyed = !0) : e.remove());
        })(this, e);
      }
    }, {
      key: "uploadImages",
      value: function uploadImages() {
        return this.editorUpload.uploadImages();
      }
    }, {
      key: "_scanForImages",
      value: function _scanForImages() {
        return this.editorUpload.scanForImages();
      }
    }]);

    return jR;
  }();

  var VR = Qs.DOM,
      HR = Bt.each;
  var $R,
      qR = !1,
      WR = [];

  var KR = function KR(e) {
    var t = e.type;
    HR(QR.get(), function (n) {
      switch (t) {
        case "scroll":
          n.dispatch("ScrollWindow", e);
          break;

        case "resize":
          n.dispatch("ResizeWindow", e);
      }
    });
  },
      GR = function GR(e) {
    if (e !== qR) {
      var _t144 = Qs.DOM;
      e ? (_t144.bind(window, "resize", KR), _t144.bind(window, "scroll", KR)) : (_t144.unbind(window, "resize", KR), _t144.unbind(window, "scroll", KR)), qR = e;
    }
  },
      YR = function YR(e) {
    var t = WR;
    return WR = K(WR, function (t) {
      return e !== t;
    }), QR.activeEditor === e && (QR.activeEditor = WR.length > 0 ? WR[0] : null), QR.focusedEditor === e && (QR.focusedEditor = null), t.length !== WR.length;
  },
      XR = "CSS1Compat" !== document.compatMode,
      QR = _objectSpread({}, vR, {
    baseURI: null,
    baseURL: null,
    defaultOptions: {},
    documentBaseURL: null,
    suffix: null,
    majorVersion: "6",
    minorVersion: "1.2",
    releaseDate: "2022-07-29",
    i18n: ra,
    activeEditor: null,
    focusedEditor: null,
    setup: function setup() {
      var e = this;
      var t,
          n,
          o = "";
      n = xv.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/"));
      var r = window.tinymce || window.tinyMCEPreInit;
      if (r) t = r.base || r.baseURL, o = r.suffix;else {
        var _e127 = document.getElementsByTagName("script");

        for (var _n111 = 0; _n111 < _e127.length; _n111++) {
          var _r71 = _e127[_n111].src || "";

          if ("" === _r71) continue;

          var _s41 = _r71.substring(_r71.lastIndexOf("/"));

          if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(_r71)) {
            -1 !== _s41.indexOf(".min") && (o = ".min"), t = _r71.substring(0, _r71.lastIndexOf("/"));
            break;
          }
        }

        if (!t && document.currentScript) {
          var _e128 = document.currentScript.src;
          -1 !== _e128.indexOf(".min") && (o = ".min"), t = _e128.substring(0, _e128.lastIndexOf("/"));
        }
      }
      var s;
      e.baseURL = new xv(n).toAbsolute(t), e.documentBaseURL = n, e.baseURI = new xv(e.baseURL), e.suffix = o, (s = e).on("AddEditor", O(wf, s)), s.on("RemoveEditor", O(xf, s));
    },
    overrideDefaults: function overrideDefaults(e) {
      var t = e.base_url;
      t && this._setBaseUrl(t);
      var n = e.suffix;
      e.suffix && (this.suffix = n), this.defaultOptions = e;
      var o = e.plugin_base_urls;
      void 0 !== o && fe(o, function (e, t) {
        sa.PluginManager.urls[t] = e;
      });
    },
    init: function init(e) {
      var t = this;
      var n;
      var o = Bt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");

      var r = function r(e) {
        n = e;
      };

      var s = function s() {
        var n = 0;
        var a = [];
        var i;
        VR.unbind(window, "ready", s), function (n) {
          var o = e.onpageload;
          o && o.apply(t, []);
        }(), i = function (e, t) {
          var n = [],
              o = w(t) ? function (e) {
            return V(n, function (n) {
              return t(n, e);
            });
          } : function (e) {
            return j(n, e);
          };

          for (var _t145 = 0, _r72 = e.length; _t145 < _r72; _t145++) {
            var _r73 = e[_t145];
            o(_r73) || n.push(_r73);
          }

          return n;
        }(function (e) {
          return Nt.browser.isIE() || Nt.browser.isEdge() ? ($y("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), []) : XR ? ($y("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), []) : m(e.selector) ? VR.select(e.selector) : C(e.target) ? [e.target] : [];
        }(e)), Bt.each(i, function (e) {
          var n;
          (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (YR(n), n.unbindAllNativeEvents(), n.destroy(!0), n.removed = !0, n = null);
        }), i = Bt.grep(i, function (e) {
          return !t.get(e.id);
        }), 0 === i.length ? r([]) : HR(i, function (s) {
          (function (e, t) {
            return e.inline && t.tagName.toLowerCase() in o;
          })(e, s) ? $y("Could not initialize inline editor on invalid inline target element", s) : function (e, o, s) {
            var l = new jR(e, o, t);
            a.push(l), l.on("init", function () {
              ++n === i.length && r(a);
            }), l.targetElm = l.targetElm || s, l.render();
          }(function (e) {
            var t = e.id;
            return t || (t = we(e, "name").filter(function (e) {
              return !VR.get(e);
            }).getOrThunk(VR.uniqueId), e.setAttribute("id", t)), t;
          }(s), e, s);
        });
      };

      return VR.bind(window, "ready", s), new Promise(function (e) {
        n ? e(n) : r = function r(t) {
          e(t);
        };
      });
    },
    get: function get(e) {
      return 0 === arguments.length ? WR.slice(0) : m(e) ? Q(WR, function (t) {
        return t.id === e;
      }).getOr(null) : x(e) && WR[e] ? WR[e] : null;
    },
    add: function add(e) {
      var t = this,
          n = t.get(e.id);
      return n === e || (null === n && WR.push(e), GR(!0), t.activeEditor = e, t.dispatch("AddEditor", {
        editor: e
      }), $R || ($R = function $R(e) {
        var n = t.dispatch("BeforeUnload");
        if (n.returnValue) return e.preventDefault(), e.returnValue = n.returnValue, n.returnValue;
      }, window.addEventListener("beforeunload", $R))), e;
    },
    createEditor: function createEditor(e, t) {
      return this.add(new jR(e, t, this));
    },
    remove: function remove(e) {
      var t = this;
      var n, o;

      if (e) {
        if (!m(e)) return o = e, h(t.get(o.id)) ? null : (YR(o) && t.dispatch("RemoveEditor", {
          editor: o
        }), 0 === WR.length && window.removeEventListener("beforeunload", $R), o.remove(), GR(WR.length > 0), o);
        HR(VR.select(e), function (e) {
          o = t.get(e.id), o && t.remove(o);
        });
      } else for (n = WR.length - 1; n >= 0; n--) {
        t.remove(WR[n]);
      }
    },
    execCommand: function execCommand(e, t, n) {
      var o;
      var r = this,
          s = f(n) ? null !== (o = n.id) && void 0 !== o ? o : n.index : n;

      switch (e) {
        case "mceAddEditor":
          if (!r.get(s)) {
            var _e129 = n.options;
            new jR(s, _e129, r).render();
          }

          return !0;

        case "mceRemoveEditor":
          {
            var _e130 = r.get(s);

            return _e130 && _e130.remove(), !0;
          }

        case "mceToggleEditor":
          {
            var _e131 = r.get(s);

            return _e131 ? (_e131.isHidden() ? _e131.show() : _e131.hide(), !0) : (r.execCommand("mceAddEditor", !1, n), !0);
          }
      }

      return !!r.activeEditor && r.activeEditor.execCommand(e, t, n);
    },
    triggerSave: function triggerSave() {
      HR(WR, function (e) {
        e.save();
      });
    },
    addI18n: function addI18n(e, t) {
      ra.add(e, t);
    },
    translate: function translate(e) {
      return ra.translate(e);
    },
    setActive: function setActive(e) {
      var t = this.activeEditor;
      this.activeEditor !== e && (t && t.dispatch("deactivate", {
        relatedTarget: e
      }), e.dispatch("activate", {
        relatedTarget: t
      })), this.activeEditor = e;
    },
    _setBaseUrl: function _setBaseUrl(e) {
      this.baseURL = new xv(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new xv(this.baseURL);
    }
  });

  QR.setup();

  var JR = function () {
    var e = aa();
    return {
      FakeClipboardItem: function FakeClipboardItem(e) {
        return {
          items: e,
          types: ue(e),
          getType: function getType(t) {
            return we(e, t).getOrUndefined();
          }
        };
      },
      write: function write(t) {
        e.set(t);
      },
      read: function read() {
        return e.get().getOrUndefined();
      },
      clear: e.clear
    };
  }(),
      ZR = Math.min,
      eA = Math.max,
      tA = Math.round,
      nA = function nA(e, t, n) {
    var o = t.x,
        r = t.y;
    var s = e.w,
        a = e.h,
        i = t.w,
        l = t.h,
        d = (n || "").split("");
    return "b" === d[0] && (r += l), "r" === d[1] && (o += i), "c" === d[0] && (r += tA(l / 2)), "c" === d[1] && (o += tA(i / 2)), "b" === d[3] && (r -= a), "r" === d[4] && (o -= s), "c" === d[3] && (r -= tA(a / 2)), "c" === d[4] && (o -= tA(s / 2)), oA(o, r, s, a);
  },
      oA = function oA(e, t, n, o) {
    return {
      x: e,
      y: t,
      w: n,
      h: o
    };
  },
      rA = {
    inflate: function inflate(e, t, n) {
      return oA(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
    },
    relativePosition: nA,
    findBestRelativePosition: function findBestRelativePosition(e, t, n, o) {
      var r, s;

      for (s = 0; s < o.length; s++) {
        if (r = nA(e, t, o[s]), r.x >= n.x && r.x + r.w <= n.w + n.x && r.y >= n.y && r.y + r.h <= n.h + n.y) return o[s];
      }

      return null;
    },
    intersect: function intersect(e, t) {
      var n = eA(e.x, t.x),
          o = eA(e.y, t.y),
          r = ZR(e.x + e.w, t.x + t.w),
          s = ZR(e.y + e.h, t.y + t.h);
      return r - n < 0 || s - o < 0 ? null : oA(n, o, r - n, s - o);
    },
    clamp: function clamp(e, t, n) {
      var o = e.x,
          r = e.y,
          s = e.x + e.w,
          a = e.y + e.h;
      var i = t.x + t.w,
          l = t.y + t.h,
          d = eA(0, t.x - o),
          c = eA(0, t.y - r),
          u = eA(0, s - i),
          m = eA(0, a - l);
      return o += d, r += c, n && (s += d, a += c, o -= u, r -= m), s -= u, a -= m, oA(o, r, s - o, a - r);
    },
    create: oA,
    fromClientRect: function fromClientRect(e) {
      return oA(e.left, e.top, e.width, e.height);
    }
  },
      sA = function () {
    var e = {},
        t = {};
    return {
      load: function load(n, o) {
        var r = "Script at URL \"".concat(o, "\" failed to load"),
            s = "Script at URL \"".concat(o, "\" did not call `tinymce.Resource.add('").concat(n, "', data)` within 1 second");
        if (void 0 !== e[n]) return e[n];
        {
          var _a26 = new Promise(function (e, a) {
            var i = function (e, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
              var o = !1,
                  r = null;

              var s = function s(e) {
                return function () {
                  for (var _len14 = arguments.length, t = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                    t[_key14] = arguments[_key14];
                  }

                  o || (o = !0, null !== r && (clearTimeout(r), r = null), e.apply(null, t));
                };
              },
                  a = s(e),
                  i = s(t);

              return {
                start: function start() {
                  for (var _len15 = arguments.length, e = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                    e[_key15] = arguments[_key15];
                  }

                  o || null !== r || (r = setTimeout(function () {
                    return i.apply(null, e);
                  }, n));
                },
                resolve: a,
                reject: i
              };
            }(e, a);

            t[n] = i.resolve, Zs.ScriptLoader.loadScript(o).then(function () {
              return i.start(s);
            }, function () {
              return i.reject(r);
            });
          });

          return e[n] = _a26, _a26;
        }
      },
      add: function add(n, o) {
        void 0 !== t[n] && (t[n](o), delete t[n]), e[n] = Promise.resolve(o);
      },
      unload: function unload(t) {
        delete e[t];
      }
    };
  }();

  var aA;

  try {
    var _e132 = "__storage_test__";
    aA = window.localStorage, aA.setItem(_e132, _e132), aA.removeItem(_e132);
  } catch (e) {
    aA = function () {
      var e = {},
          t = [];
      var n = {
        getItem: function getItem(t) {
          return e[t] || null;
        },
        setItem: function setItem(n, o) {
          t.push(n), e[n] = String(o);
        },
        key: function key(e) {
          return t[e];
        },
        removeItem: function removeItem(n) {
          t = t.filter(function (e) {
            return e === n;
          }), delete e[n];
        },
        clear: function clear() {
          t = [], e = {};
        },
        length: 0
      };
      return Object.defineProperty(n, "length", {
        get: function get() {
          return t.length;
        },
        configurable: !1,
        enumerable: !1
      }), n;
    }();
  }

  var iA = {
    geom: {
      Rect: rA
    },
    util: {
      Delay: bf,
      Tools: Bt,
      VK: om,
      URI: xv,
      EventDispatcher: hR,
      Observable: vR,
      I18n: ra,
      LocalStorage: aA,
      ImageUploader: function ImageUploader(e) {
        var t = Gy(),
            n = Jy(e, t);
        return {
          upload: function upload(t) {
            var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return n.upload(t, o ? Qy(e) : void 0);
          }
        };
      }
    },
    dom: {
      EventUtils: Vs,
      TreeWalker: Qo,
      TextSeeker: Ea,
      DOMUtils: Qs,
      ScriptLoader: Zs,
      RangeUtils: Im,
      Serializer: Cy,
      StyleSheetLoader: Yo,
      ControlSelection: lm,
      BookmarkManager: Yu,
      Selection: by,
      Event: Vs.Event
    },
    html: {
      Styles: Ds,
      Entities: Cs,
      Node: jf,
      Schema: Bs,
      DomParser: Ov,
      Writer: Yf,
      Serializer: Xf
    },
    Env: Nt,
    AddOnManager: sa,
    Annotator: Gu,
    Formatter: dC,
    UndoManager: uC,
    EditorCommands: iR,
    WindowManager: Uy,
    NotificationManager: My,
    EditorObservable: SR,
    Shortcuts: MR,
    Editor: jR,
    FocusManager: hf,
    EditorManager: QR,
    DOM: Qs.DOM,
    ScriptLoader: Zs.ScriptLoader,
    PluginManager: Iy,
    ThemeManager: Fy,
    ModelManager: Ay,
    IconManager: Ry,
    Resource: sA,
    FakeClipboard: JR,
    trim: Bt.trim,
    isArray: Bt.isArray,
    is: Bt.is,
    toArray: Bt.toArray,
    makeMap: Bt.makeMap,
    each: Bt.each,
    map: Bt.map,
    grep: Bt.grep,
    inArray: Bt.inArray,
    extend: Bt.extend,
    walk: Bt.walk,
    resolve: Bt.resolve,
    explode: Bt.explode,
    _addCacheSuffix: Bt._addCacheSuffix
  },
      lA = Bt.extend(QR, iA);
  (function (e) {
    window.tinymce = e, window.tinyMCE = e;
  })(lA), function (e) {
    if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) try {
      module.exports = e;
    } catch (e) {}
  }(lA);
}();