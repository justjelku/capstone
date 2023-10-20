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

  var e = tinymce.util.Tools.resolve("tinymce.ModelManager");

  var t = function t(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (o = n = e, (r = String).prototype.isPrototypeOf(o) || (null === (s = n.constructor) || void 0 === s ? void 0 : s.name) === r.name) ? "string" : t;
        var o, n, r, s;
      }(t) === e;
    };
  },
      o = function o(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      n = t("string"),
      r = t("object"),
      s = t("array"),
      l = (null, function (e) {
    return null === e;
  });

  var a = o("boolean"),
      c = function c(e) {
    return !function (e) {
      return null == e;
    }(e);
  },
      i = o("function"),
      m = o("number"),
      d = function d() {},
      u = function u(e) {
    return function () {
      return e;
    };
  },
      f = function f(e) {
    return e;
  },
      g = function g(e, t) {
    return e === t;
  };

  function h(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, o = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        o[_key2] = arguments[_key2];
      }

      var n = t.concat(o);
      return e.apply(null, n);
    };
  }

  var p = function p(e) {
    return function (t) {
      return !e(t);
    };
  },
      w = function w(e) {
    return e();
  },
      b = u(!1),
      v = u(!0);

  var y =
  /*#__PURE__*/
  function () {
    function y(e, t) {
      _classCallCheck(this, y);

      this.tag = e, this.value = t;
    }

    _createClass(y, [{
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
        return this.tag ? y.some(e(this.value)) : y.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : y.none();
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
        return !this.tag || e(this.value) ? this : y.none();
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
        return new y(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return y.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return c(e) ? y.some(e) : y.none();
      }
    }]);

    return y;
  }();

  y.singletonNone = new y(!1);

  var x = Array.prototype.slice,
      C = Array.prototype.indexOf,
      S = Array.prototype.push,
      T = function T(e, t) {
    return function (e, t) {
      return C.call(e, t);
    }(e, t) > -1;
  },
      R = function R(e, t) {
    for (var _o2 = 0, _n2 = e.length; _o2 < _n2; _o2++) {
      if (t(e[_o2], _o2)) return !0;
    }

    return !1;
  },
      D = function D(e, t) {
    var o = [];

    for (var _n3 = 0; _n3 < e; _n3++) {
      o.push(t(_n3));
    }

    return o;
  },
      O = function O(e, t) {
    var o = e.length,
        n = new Array(o);

    for (var _r2 = 0; _r2 < o; _r2++) {
      var _o3 = e[_r2];
      n[_r2] = t(_o3, _r2);
    }

    return n;
  },
      k = function k(e, t) {
    for (var _o4 = 0, _n4 = e.length; _o4 < _n4; _o4++) {
      t(e[_o4], _o4);
    }
  },
      E = function E(e, t) {
    var o = [],
        n = [];

    for (var _r3 = 0, _s2 = e.length; _r3 < _s2; _r3++) {
      var _s3 = e[_r3];
      (t(_s3, _r3) ? o : n).push(_s3);
    }

    return {
      pass: o,
      fail: n
    };
  },
      N = function N(e, t) {
    var o = [];

    for (var _n5 = 0, _r4 = e.length; _n5 < _r4; _n5++) {
      var _r5 = e[_n5];
      t(_r5, _n5) && o.push(_r5);
    }

    return o;
  },
      B = function B(e, t, o) {
    return function (e, t) {
      for (var _o5 = e.length - 1; _o5 >= 0; _o5--) {
        t(e[_o5], _o5);
      }
    }(e, function (e, n) {
      o = t(o, e, n);
    }), o;
  },
      z = function z(e, t, o) {
    return k(e, function (e, n) {
      o = t(o, e, n);
    }), o;
  },
      A = function A(e, t) {
    return function (e, t, o) {
      for (var _n6 = 0, _r6 = e.length; _n6 < _r6; _n6++) {
        var _r7 = e[_n6];
        if (t(_r7, _n6)) return y.some(_r7);
        if (o(_r7, _n6)) break;
      }

      return y.none();
    }(e, t, b);
  },
      W = function W(e, t) {
    for (var _o6 = 0, _n7 = e.length; _o6 < _n7; _o6++) {
      if (t(e[_o6], _o6)) return y.some(_o6);
    }

    return y.none();
  },
      L = function L(e) {
    var t = [];

    for (var _o7 = 0, _n8 = e.length; _o7 < _n8; ++_o7) {
      if (!s(e[_o7])) throw new Error("Arr.flatten item " + _o7 + " was not an array, input: " + e);
      S.apply(t, e[_o7]);
    }

    return t;
  },
      _ = function _(e, t) {
    return L(O(e, t));
  },
      M = function M(e, t) {
    for (var _o8 = 0, _n9 = e.length; _o8 < _n9; ++_o8) {
      if (!0 !== t(e[_o8], _o8)) return !1;
    }

    return !0;
  },
      j = function j(e, t) {
    var o = {};

    for (var _n10 = 0, _r8 = e.length; _n10 < _r8; _n10++) {
      var _r9 = e[_n10];
      o[String(_r9)] = t(_r9, _n10);
    }

    return o;
  },
      I = function I(e, t) {
    return t >= 0 && t < e.length ? y.some(e[t]) : y.none();
  },
      P = function P(e) {
    return I(e, 0);
  },
      F = function F(e) {
    return I(e, e.length - 1);
  },
      H = function H(e, t) {
    for (var _o9 = 0; _o9 < e.length; _o9++) {
      var _n11 = t(e[_o9], _o9);

      if (_n11.isSome()) return _n11;
    }

    return y.none();
  },
      q = Object.keys,
      V = Object.hasOwnProperty,
      $ = function $(e, t) {
    var o = q(e);

    for (var _n12 = 0, _r10 = o.length; _n12 < _r10; _n12++) {
      var _r11 = o[_n12];
      t(e[_r11], _r11);
    }
  },
      U = function U(e, t) {
    return G(e, function (e, o) {
      return {
        k: o,
        v: t(e, o)
      };
    });
  },
      G = function G(e, t) {
    var o = {};
    return $(e, function (e, n) {
      var r = t(e, n);
      o[r.k] = r.v;
    }), o;
  },
      K = function K(e, t) {
    var o = [];
    return $(e, function (e, n) {
      o.push(t(e, n));
    }), o;
  },
      Y = function Y(e) {
    return K(e, f);
  },
      J = function J(e, t) {
    return V.call(e, t);
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var Q = function Q(e) {
    return e.dom.nodeName.toLowerCase();
  },
      X = function X(e) {
    return e.dom.nodeType;
  },
      Z = function Z(e) {
    return function (t) {
      return X(t) === e;
    };
  },
      ee = function ee(e) {
    return 8 === X(e) || "#comment" === Q(e);
  },
      te = Z(1),
      oe = Z(3),
      ne = Z(9),
      re = Z(11),
      se = function se(e) {
    return function (t) {
      return te(t) && Q(t) === e;
    };
  },
      le = function le(e, t, o) {
    if (!(n(o) || a(o) || m(o))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", o, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(t, o + "");
  },
      ae = function ae(e, t, o) {
    le(e.dom, t, o);
  },
      ce = function ce(e, t) {
    var o = e.dom;
    $(t, function (e, t) {
      le(o, t, e);
    });
  },
      ie = function ie(e, t) {
    var o = e.dom.getAttribute(t);
    return null === o ? void 0 : o;
  },
      me = function me(e, t) {
    return y.from(ie(e, t));
  },
      de = function de(e, t) {
    e.dom.removeAttribute(t);
  },
      ue = function ue(e) {
    return z(e.dom.attributes, function (e, t) {
      return e[t.name] = t.value, e;
    }, {});
  },
      fe = function fe(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      ge = {
    fromHtml: function fromHtml(e, t) {
      var o = (t || document).createElement("div");

      if (o.innerHTML = e, !o.hasChildNodes() || o.childNodes.length > 1) {
        var _t2 = "HTML does not have a single root node";
        throw console.error(_t2, e), new Error(_t2);
      }

      return fe(o.childNodes[0]);
    },
    fromTag: function fromTag(e, t) {
      var o = (t || document).createElement(e);
      return fe(o);
    },
    fromText: function fromText(e, t) {
      var o = (t || document).createTextNode(e);
      return fe(o);
    },
    fromDom: fe,
    fromPoint: function fromPoint(e, t, o) {
      return y.from(e.dom.elementFromPoint(t, o)).map(fe);
    }
  },
      he = function he(e, t) {
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
      pe = function pe(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  },
      we = function we(e, t) {
    var o = void 0 === t ? document : t.dom;
    return pe(o) ? y.none() : y.from(o.querySelector(e)).map(ge.fromDom);
  },
      be = function be(e, t) {
    return e.dom === t.dom;
  },
      ve = function ve(e, t) {
    var o = e.dom,
        n = t.dom;
    return o !== n && o.contains(n);
  },
      ye = he,
      xe = function xe(e) {
    return ge.fromDom(e.dom.ownerDocument);
  },
      Ce = function Ce(e) {
    return ne(e) ? e : xe(e);
  },
      Se = function Se(e) {
    return y.from(e.dom.parentNode).map(ge.fromDom);
  },
      Te = function Te(e, t) {
    var o = i(t) ? t : b;
    var n = e.dom;
    var r = [];

    for (; null !== n.parentNode && void 0 !== n.parentNode;) {
      var _e3 = n.parentNode,
          _t3 = ge.fromDom(_e3);

      if (r.push(_t3), !0 === o(_t3)) break;
      n = _e3;
    }

    return r;
  },
      Re = function Re(e) {
    return y.from(e.dom.previousSibling).map(ge.fromDom);
  },
      De = function De(e) {
    return y.from(e.dom.nextSibling).map(ge.fromDom);
  },
      Oe = function Oe(e) {
    return O(e.dom.childNodes, ge.fromDom);
  },
      ke = function ke(e, t) {
    var o = e.dom.childNodes;
    return y.from(o[t]).map(ge.fromDom);
  },
      Ee = function Ee(e, t) {
    Se(e).each(function (o) {
      o.dom.insertBefore(t.dom, e.dom);
    });
  },
      Ne = function Ne(e, t) {
    De(e).fold(function () {
      Se(e).each(function (e) {
        ze(e, t);
      });
    }, function (e) {
      Ee(e, t);
    });
  },
      Be = function Be(e, t) {
    var o = function (e) {
      return ke(e, 0);
    }(e);

    o.fold(function () {
      ze(e, t);
    }, function (o) {
      e.dom.insertBefore(t.dom, o.dom);
    });
  },
      ze = function ze(e, t) {
    e.dom.appendChild(t.dom);
  },
      Ae = function Ae(e, t) {
    Ee(e, t), ze(t, e);
  },
      We = function We(e, t) {
    k(t, function (o, n) {
      var r = 0 === n ? e : t[n - 1];
      Ne(r, o);
    });
  },
      Le = function Le(e, t) {
    k(t, function (t) {
      ze(e, t);
    });
  },
      _e = function _e(e) {
    e.dom.textContent = "", k(Oe(e), function (e) {
      Me(e);
    });
  },
      Me = function Me(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  },
      je = function je(e) {
    var t = Oe(e);
    t.length > 0 && We(e, t), Me(e);
  },
      Ie = function Ie(e, t) {
    return ge.fromDom(e.dom.cloneNode(t));
  },
      Pe = function Pe(e) {
    return Ie(e, !1);
  },
      Fe = function Fe(e) {
    return Ie(e, !0);
  },
      He = function He(e, t) {
    var o = ge.fromTag(t),
        n = ue(e);
    return ce(o, n), o;
  },
      qe = ["tfoot", "thead", "tbody", "colgroup"],
      Ve = function Ve(e, t, o) {
    return {
      element: e,
      rowspan: t,
      colspan: o
    };
  },
      $e = function $e(e, t, o) {
    return {
      element: e,
      cells: t,
      section: o
    };
  },
      Ue = function Ue(e, t, o) {
    return {
      element: e,
      isNew: t,
      isLocked: o
    };
  },
      Ge = function Ge(e, t, o, n) {
    return {
      element: e,
      cells: t,
      section: o,
      isNew: n
    };
  },
      Ke = i(Element.prototype.attachShadow) && i(Node.prototype.getRootNode),
      Ye = u(Ke),
      Je = Ke ? function (e) {
    return ge.fromDom(e.dom.getRootNode());
  } : Ce,
      Qe = function Qe(e) {
    return ge.fromDom(e.dom.host);
  },
      Xe = function Xe(e) {
    var t = oe(e) ? e.dom.parentNode : e.dom;
    if (null == t || null === t.ownerDocument) return !1;
    var o = t.ownerDocument;
    return function (e) {
      var t = Je(e);
      return re(o = t) && c(o.dom.host) ? y.some(t) : y.none();
      var o;
    }(ge.fromDom(t)).fold(function () {
      return o.body.contains(t);
    }, (n = Xe, r = Qe, function (e) {
      return n(r(e));
    }));
    var n, r;
  },
      Ze = function Ze(e) {
    var t = e.dom.body;
    if (null == t) throw new Error("Body is not available yet");
    return ge.fromDom(t);
  },
      et = function et(e, t) {
    var o = [];
    return k(Oe(e), function (e) {
      t(e) && (o = o.concat([e])), o = o.concat(et(e, t));
    }), o;
  },
      tt = function tt(e, t, o) {
    return function (e, o, n) {
      return N(Te(e, n), function (e) {
        return he(e, t);
      });
    }(e, 0, o);
  },
      ot = function ot(e, t) {
    return function (e, o) {
      return N(Oe(e), function (e) {
        return he(e, t);
      });
    }(e);
  },
      nt = function nt(e, t) {
    return function (e, t) {
      var o = void 0 === t ? document : t.dom;
      return pe(o) ? [] : O(o.querySelectorAll(e), ge.fromDom);
    }(t, e);
  };

  var rt = function rt(e, t, o, n, r) {
    return e(o, n) ? y.some(o) : i(r) && r(o) ? y.none() : t(o, n, r);
  };

  var st = function st(e, t, o) {
    var n = e.dom;
    var r = i(o) ? o : b;

    for (; n.parentNode;) {
      n = n.parentNode;

      var _e4 = ge.fromDom(n);

      if (t(_e4)) return y.some(_e4);
      if (r(_e4)) break;
    }

    return y.none();
  },
      lt = function lt(e, t, o) {
    return st(e, function (e) {
      return he(e, t);
    }, o);
  },
      at = function at(e, t) {
    return function (e, o) {
      return A(e.dom.childNodes, function (e) {
        return o = ge.fromDom(e), he(o, t);
        var o;
      }).map(ge.fromDom);
    }(e);
  },
      ct = function ct(e, t) {
    return we(t, e);
  },
      it = function it(e, t, o) {
    return rt(function (e, t) {
      return he(e, t);
    }, lt, e, t, o);
  },
      mt = function mt(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : g;
    return e.exists(function (e) {
      return o(e, t);
    });
  },
      dt = function dt(e) {
    var t = [],
        o = function o(e) {
      t.push(e);
    };

    for (var _t4 = 0; _t4 < e.length; _t4++) {
      e[_t4].each(o);
    }

    return t;
  },
      ut = function ut(e, t) {
    return e ? y.some(t) : y.none();
  },
      ft = function ft(e, t, o) {
    return "" === t || e.length >= t.length && e.substr(o, o + t.length) === t;
  },
      gt = function gt(e, t) {
    return -1 !== e.indexOf(t);
  },
      ht = function ht(e, t) {
    return ft(e, t, 0);
  },
      pt = function pt(e, t) {
    return ft(e, t, e.length - t.length);
  },
      wt = function (e) {
    return function (t) {
      return t.replace(e, "");
    };
  }(/^\s+|\s+$/g),
      bt = function bt(e) {
    return e.length > 0;
  },
      vt = function vt(e) {
    return void 0 !== e.style && i(e.style.getPropertyValue);
  },
      yt = function yt(e, t, o) {
    if (!n(o)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", o, ":: Element ", e), new Error("CSS value must be a string: " + o);
    vt(e) && e.style.setProperty(t, o);
  },
      xt = function xt(e, t, o) {
    var n = e.dom;
    yt(n, t, o);
  },
      Ct = function Ct(e, t) {
    var o = e.dom;
    $(t, function (e, t) {
      yt(o, t, e);
    });
  },
      St = function St(e, t) {
    var o = e.dom,
        n = window.getComputedStyle(o).getPropertyValue(t);
    return "" !== n || Xe(e) ? n : Tt(o, t);
  },
      Tt = function Tt(e, t) {
    return vt(e) ? e.style.getPropertyValue(t) : "";
  },
      Rt = function Rt(e, t) {
    var o = e.dom,
        n = Tt(o, t);
    return y.from(n).filter(function (e) {
      return e.length > 0;
    });
  },
      Dt = function Dt(e, t) {
    (function (e, t) {
      vt(e) && e.style.removeProperty(t);
    })(e.dom, t), mt(me(e, "style").map(wt), "") && de(e, "style");
  },
      Ot = function Ot(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return me(e, t).map(function (e) {
      return parseInt(e, 10);
    }).getOr(o);
  },
      kt = function kt(e, t) {
    return Ot(e, t, 1);
  },
      Et = function Et(e) {
    return se("col")(e) ? Ot(e, "span", 1) > 1 : kt(e, "colspan") > 1;
  },
      Nt = function Nt(e) {
    return kt(e, "rowspan") > 1;
  },
      Bt = function Bt(e, t) {
    return parseInt(St(e, t), 10);
  },
      zt = u(10),
      At = u(10),
      Wt = function Wt(e, t) {
    return Lt(e, t, v);
  },
      Lt = function Lt(e, t, o) {
    return _(Oe(e), function (e) {
      return he(e, t) ? o(e) ? [e] : [] : Lt(e, t, o);
    });
  },
      _t = function _t(e, t) {
    return function (e, t) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : b;
      return o(t) ? y.none() : T(e, Q(t)) ? y.some(t) : lt(t, e.join(","), function (e) {
        return he(e, "table") || o(e);
      });
    }(["td", "th"], e, t);
  },
      Mt = function Mt(e) {
    return Wt(e, "th,td");
  },
      jt = function jt(e) {
    return he(e, "colgroup") ? ot(e, "col") : _(Ft(e), function (e) {
      return ot(e, "col");
    });
  },
      It = function It(e, t) {
    return it(e, "table", t);
  },
      Pt = function Pt(e) {
    return Wt(e, "tr");
  },
      Ft = function Ft(e) {
    return It(e).fold(u([]), function (e) {
      return ot(e, "colgroup");
    });
  },
      Ht = function Ht(e, t) {
    return O(e, function (e) {
      if ("colgroup" === Q(e)) {
        var _t5 = O(jt(e), function (e) {
          var t = Ot(e, "span", 1);
          return Ve(e, 1, t);
        });

        return $e(e, _t5, "colgroup");
      }

      {
        var _o10 = O(Mt(e), function (e) {
          var t = Ot(e, "rowspan", 1),
              o = Ot(e, "colspan", 1);
          return Ve(e, t, o);
        });

        return $e(e, _o10, t(e));
      }
    });
  },
      qt = function qt(e) {
    return Se(e).map(function (e) {
      var t = Q(e);
      return function (e) {
        return T(qe, e);
      }(t) ? t : "tbody";
    }).getOr("tbody");
  },
      Vt = function Vt(e) {
    var t = Pt(e),
        o = [].concat(_toConsumableArray(Ft(e)), _toConsumableArray(t));
    return Ht(o, qt);
  },
      $t = function $t(e) {
    var t,
        o = !1;
    return function () {
      for (var _len3 = arguments.length, n = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        n[_key3] = arguments[_key3];
      }

      return o || (o = !0, t = e.apply(null, n)), t;
    };
  },
      Ut = function Ut() {
    return Gt(0, 0);
  },
      Gt = function Gt(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      Kt = {
    nu: Gt,
    detect: function detect(e, t) {
      var o = String(t).toLowerCase();
      return 0 === e.length ? Ut() : function (e, t) {
        var o = function (e, t) {
          for (var _o11 = 0; _o11 < e.length; _o11++) {
            var _n13 = e[_o11];
            if (_n13.test(t)) return _n13;
          }
        }(e, t);

        if (!o) return {
          major: 0,
          minor: 0
        };

        var n = function n(e) {
          return Number(t.replace(o, "$" + e));
        };

        return Gt(n(1), n(2));
      }(e, o);
    },
    unknown: Ut
  },
      Yt = function Yt(e, t) {
    var o = String(t).toLowerCase();
    return A(e, function (e) {
      return e.search(o);
    });
  },
      Jt = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Qt = function Qt(e) {
    return function (t) {
      return gt(t, e);
    };
  },
      Xt = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return gt(e, "edge/") && gt(e, "chrome") && gt(e, "safari") && gt(e, "applewebkit");
    }
  }, {
    name: "Chromium",
    brand: "Chromium",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Jt],
    search: function search(e) {
      return gt(e, "chrome") && !gt(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return gt(e, "msie") || gt(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [Jt, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Qt("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Qt("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Jt, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (gt(e, "safari") || gt(e, "mobile/")) && gt(e, "applewebkit");
    }
  }],
      Zt = [{
    name: "Windows",
    search: Qt("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return gt(e, "iphone") || gt(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Qt("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "macOS",
    search: Qt("mac os x"),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Qt("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Qt("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Qt("freebsd"),
    versionRegexes: []
  }, {
    name: "ChromeOS",
    search: Qt("cros"),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }],
      eo = {
    browsers: u(Xt),
    oses: u(Zt)
  },
      to = "Edge",
      oo = "Chromium",
      no = "Opera",
      ro = "Firefox",
      so = "Safari",
      lo = function lo(e) {
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
      isFirefox: n(ro),
      isSafari: n(so)
    };
  },
      ao = function ao() {
    return lo({
      current: void 0,
      version: Kt.unknown()
    });
  },
      co = lo,
      io = (u(to), u(oo), u("IE"), u(no), u(ro), u(so), "Windows"),
      mo = "Android",
      uo = "Linux",
      fo = "macOS",
      go = "Solaris",
      ho = "FreeBSD",
      po = "ChromeOS",
      wo = function wo(e) {
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
      isWindows: n(io),
      isiOS: n("iOS"),
      isAndroid: n(mo),
      isMacOS: n(fo),
      isLinux: n(uo),
      isSolaris: n(go),
      isFreeBSD: n(ho),
      isChromeOS: n(po)
    };
  },
      bo = function bo() {
    return wo({
      current: void 0,
      version: Kt.unknown()
    });
  },
      vo = wo,
      yo = (u(io), u("iOS"), u(mo), u(uo), u(fo), u(go), u(ho), u(po), function (e) {
    return window.matchMedia(e).matches;
  });

  var xo = $t(function () {
    return function (e, t, o) {
      var n = eo.browsers(),
          r = eo.oses(),
          s = t.bind(function (e) {
        return function (e, t) {
          return H(t.brands, function (t) {
            var o = t.brand.toLowerCase();
            return A(e, function (e) {
              var t;
              return o === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
            }).map(function (e) {
              return {
                current: e.name,
                version: Kt.nu(parseInt(t.version, 10), 0)
              };
            });
          });
        }(n, e);
      }).orThunk(function () {
        return function (e, t) {
          return Yt(e, t).map(function (e) {
            var o = Kt.detect(e.versionRegexes, t);
            return {
              current: e.name,
              version: o
            };
          });
        }(n, e);
      }).fold(ao, co),
          l = function (e, t) {
        return Yt(e, t).map(function (e) {
          var o = Kt.detect(e.versionRegexes, t);
          return {
            current: e.name,
            version: o
          };
        });
      }(r, e).fold(bo, vo),
          a = function (e, t, o, n) {
        var r = e.isiOS() && !0 === /ipad/i.test(o),
            s = e.isiOS() && !r,
            l = e.isiOS() || e.isAndroid(),
            a = l || n("(pointer:coarse)"),
            c = r || !s && l && n("(min-device-width:768px)"),
            i = s || l && !c,
            m = t.isSafari() && e.isiOS() && !1 === /safari/i.test(o),
            d = !i && !c && !m;
        return {
          isiPad: u(r),
          isiPhone: u(s),
          isTablet: u(c),
          isPhone: u(i),
          isTouch: u(a),
          isAndroid: e.isAndroid,
          isiOS: e.isiOS,
          isWebView: u(m),
          isDesktop: u(d)
        };
      }(l, s, e, o);

      return {
        browser: s,
        os: l,
        deviceType: a
      };
    }(navigator.userAgent, y.from(navigator.userAgentData), yo);
  });

  var Co = function Co() {
    return xo();
  },
      So = function So(e, t) {
    var o = function o(_o12) {
      var n = t(_o12);

      if (n <= 0 || null === n) {
        var _t6 = St(_o12, e);

        return parseFloat(_t6) || 0;
      }

      return n;
    },
        n = function n(e, t) {
      return z(t, function (t, o) {
        var n = St(e, o),
            r = void 0 === n ? 0 : parseInt(n, 10);
        return isNaN(r) ? t : t + r;
      }, 0);
    };

    return {
      set: function set(t, o) {
        if (!m(o) && !o.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + o);
        var n = t.dom;
        vt(n) && (n.style[e] = o + "px");
      },
      get: o,
      getOuter: o,
      aggregate: n,
      max: function max(e, t, o) {
        var r = n(e, o);
        return t > r ? t - r : 0;
      }
    };
  },
      To = function To(e, t, o) {
    return function (e, t) {
      return function (e) {
        var t = parseFloat(e);
        return isNaN(t) ? y.none() : y.some(t);
      }(e).getOr(t);
    }(St(e, t), o);
  },
      Ro = So("width", function (e) {
    return e.dom.offsetWidth;
  }),
      Do = function Do(e) {
    return Ro.get(e);
  },
      Oo = function Oo(e) {
    return Ro.getOuter(e);
  },
      ko = function ko(e) {
    return function (e, t) {
      var o = e.dom,
          n = o.getBoundingClientRect().width || o.offsetWidth;
      return "border-box" === t ? n : function (e, t, o, n) {
        return t - To(e, "padding-left", 0) - To(e, "padding-right", 0) - To(e, "border-left-width", 0) - To(e, "border-right-width", 0);
      }(e, n);
    }(e, "content-box");
  },
      Eo = function Eo(e, t, o) {
    var n = e.cells,
        r = n.slice(0, t),
        s = n.slice(t),
        l = r.concat(o).concat(s);
    return zo(e, l);
  },
      No = function No(e, t, o) {
    return Eo(e, t, [o]);
  },
      Bo = function Bo(e, t, o) {
    e.cells[t] = o;
  },
      zo = function zo(e, t) {
    return Ge(e.element, t, e.section, e.isNew);
  },
      Ao = function Ao(e, t) {
    return e.cells[t];
  },
      Wo = function Wo(e, t) {
    return Ao(e, t).element;
  },
      Lo = function Lo(e) {
    return e.cells.length;
  },
      _o = function _o(e) {
    var t = E(e, function (e) {
      return "colgroup" === e.section;
    });
    return {
      rows: t.fail,
      cols: t.pass
    };
  },
      Mo = function Mo(e, t, o) {
    var n = O(e.cells, o);
    return Ge(t(e.element), n, e.section, !0);
  },
      jo = "data-snooker-locked-cols",
      Io = function Io(e) {
    return me(e, jo).bind(function (e) {
      return y.from(e.match(/\d+/g));
    }).map(function (e) {
      return j(e, v);
    });
  },
      Po = function Po(e) {
    var t = z(_o(e).rows, function (e, t) {
      return k(t.cells, function (t, o) {
        t.isLocked && (e[o] = !0);
      }), e;
    }, {}),
        o = K(t, function (e, t) {
      return parseInt(t, 10);
    });
    return function (e, t) {
      var o = x.call(e, 0);
      return o.sort(void 0), o;
    }(o);
  },
      Fo = function Fo(e, t) {
    return e + "," + t;
  },
      Ho = function Ho(e, t) {
    var o = _(e.all, function (e) {
      return e.cells;
    });

    return N(o, t);
  },
      qo = function qo(e) {
    var t = {},
        o = [],
        n = P(e).map(function (e) {
      return e.element;
    }).bind(It).bind(Io).getOr({});
    var r = 0,
        s = 0,
        l = 0;

    var _E = E(e, function (e) {
      return "colgroup" === e.section;
    }),
        a = _E.pass,
        c = _E.fail;

    k(c, function (e) {
      var a = [];
      k(e.cells, function (e) {
        var o = 0;

        for (; void 0 !== t[Fo(l, o)];) {
          o++;
        }

        var r = function (e, t) {
          return J(e, t) && void 0 !== e[t] && null !== e[t];
        }(n, o.toString()),
            c = function (e, t, o, n, r, s) {
          return {
            element: e,
            rowspan: t,
            colspan: o,
            row: n,
            column: r,
            isLocked: s
          };
        }(e.element, e.rowspan, e.colspan, l, o, r);

        for (var _n14 = 0; _n14 < e.colspan; _n14++) {
          for (var _r12 = 0; _r12 < e.rowspan; _r12++) {
            var _e5 = o + _n14,
                _a2 = Fo(l + _r12, _e5);

            t[_a2] = c, s = Math.max(s, _e5 + 1);
          }
        }

        a.push(c);
      }), r++, o.push($e(e.element, a, e.section)), l++;
    });

    var _F$map$getOrThunk = F(a).map(function (e) {
      var t = function (e) {
        var t = {};
        var o = 0;
        return k(e.cells, function (e) {
          var n = e.colspan;
          D(n, function (r) {
            var s = o + r;

            t[s] = function (e, t, o) {
              return {
                element: e,
                colspan: t,
                column: o
              };
            }(e.element, n, s);
          }), o += n;
        }), t;
      }(e),
          o = function (e, t) {
        return {
          element: e,
          columns: t
        };
      }(e.element, Y(t));

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
        i = _F$map$getOrThunk.columns,
        m = _F$map$getOrThunk.colgroups,
        d = function (e, t) {
      return {
        rows: e,
        columns: t
      };
    }(r, s);

    return {
      grid: d,
      access: t,
      all: o,
      columns: i,
      colgroups: m
    };
  },
      Vo = function Vo(e) {
    var t = Vt(e);
    return qo(t);
  },
      $o = qo,
      Uo = function Uo(e, t, o) {
    return y.from(e.access[Fo(t, o)]);
  },
      Go = function Go(e, t, o) {
    var n = Ho(e, function (e) {
      return o(t, e.element);
    });
    return n.length > 0 ? y.some(n[0]) : y.none();
  },
      Ko = Ho,
      Yo = function Yo(e) {
    return _(e.all, function (e) {
      return e.cells;
    });
  },
      Jo = function Jo(e) {
    return Y(e.columns);
  },
      Qo = function Qo(e) {
    return q(e.columns).length > 0;
  },
      Xo = function Xo(e, t) {
    return y.from(e.columns[t]);
  },
      Zo = function Zo(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : v;
    var o = e.grid,
        n = D(o.columns, f),
        r = D(o.rows, f);
    return O(n, function (o) {
      return en(function () {
        return _(r, function (t) {
          return Uo(e, t, o).filter(function (e) {
            return e.column === o;
          }).toArray();
        });
      }, function (e) {
        return 1 === e.colspan && t(e.element);
      }, function () {
        return Uo(e, 0, o);
      });
    });
  },
      en = function en(e, t, o) {
    var n = e();
    return A(n, t).orThunk(function () {
      return y.from(n[0]).orThunk(o);
    }).map(function (e) {
      return e.element;
    });
  },
      tn = function tn(e) {
    var t = e.grid,
        o = D(t.rows, f),
        n = D(t.columns, f);
    return O(o, function (t) {
      return en(function () {
        return _(n, function (o) {
          return Uo(e, t, o).filter(function (e) {
            return e.row === t;
          }).fold(u([]), function (e) {
            return [e];
          });
        });
      }, function (e) {
        return 1 === e.rowspan;
      }, function () {
        return Uo(e, t, 0);
      });
    });
  },
      on = function on(e, t) {
    return function (o) {
      return "rtl" === nn(o) ? t : e;
    };
  },
      nn = function nn(e) {
    return "rtl" === St(e, "direction") ? "rtl" : "ltr";
  },
      rn = So("height", function (e) {
    var t = e.dom;
    return Xe(e) ? t.getBoundingClientRect().height : t.offsetHeight;
  }),
      sn = function sn(e) {
    return rn.get(e);
  },
      ln = function ln(e) {
    return rn.getOuter(e);
  },
      an = function an(e, t) {
    return {
      left: e,
      top: t,
      translate: function translate(o, n) {
        return an(e + o, t + n);
      }
    };
  },
      cn = an,
      mn = function mn(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : 0;
  },
      dn = function dn(e) {
    var t = e.dom.ownerDocument,
        o = t.body,
        n = t.defaultView,
        r = t.documentElement;
    if (o === e.dom) return cn(o.offsetLeft, o.offsetTop);
    var s = mn(null == n ? void 0 : n.pageYOffset, r.scrollTop),
        l = mn(null == n ? void 0 : n.pageXOffset, r.scrollLeft),
        a = mn(r.clientTop, o.clientTop),
        c = mn(r.clientLeft, o.clientLeft);
    return un(e).translate(l - c, s - a);
  },
      un = function un(e) {
    var t = e.dom,
        o = t.ownerDocument.body;
    return o === t ? cn(o.offsetLeft, o.offsetTop) : Xe(e) ? function (e) {
      var t = e.getBoundingClientRect();
      return cn(t.left, t.top);
    }(t) : cn(0, 0);
  },
      fn = function fn(e, t) {
    return {
      row: e,
      y: t
    };
  },
      gn = function gn(e, t) {
    return {
      col: e,
      x: t
    };
  },
      hn = function hn(e) {
    return dn(e).left + Oo(e);
  },
      pn = function pn(e) {
    return dn(e).left;
  },
      wn = function wn(e, t) {
    return gn(e, pn(t));
  },
      bn = function bn(e, t) {
    return gn(e, hn(t));
  },
      vn = function vn(e) {
    return dn(e).top;
  },
      yn = function yn(e, t) {
    return fn(e, vn(t));
  },
      xn = function xn(e, t) {
    return fn(e, vn(t) + ln(t));
  },
      Cn = function Cn(e, t, o) {
    if (0 === o.length) return [];
    var n = O(o.slice(1), function (t, o) {
      return t.map(function (t) {
        return e(o, t);
      });
    }),
        r = o[o.length - 1].map(function (e) {
      return t(o.length - 1, e);
    });
    return n.concat([r]);
  },
      Sn = {
    delta: f,
    positions: function positions(e) {
      return Cn(yn, xn, e);
    },
    edge: vn
  },
      Tn = on({
    delta: f,
    edge: pn,
    positions: function positions(e) {
      return Cn(wn, bn, e);
    }
  }, {
    delta: function delta(e) {
      return -e;
    },
    edge: hn,
    positions: function positions(e) {
      return Cn(bn, wn, e);
    }
  }),
      Rn = {
    delta: function delta(e, t) {
      return Tn(t).delta(e, t);
    },
    positions: function positions(e, t) {
      return Tn(t).positions(e, t);
    },
    edge: function edge(e) {
      return Tn(e).edge(e);
    }
  },
      Dn = {
    unsupportedLength: ["em", "ex", "cap", "ch", "ic", "rem", "lh", "rlh", "vw", "vh", "vi", "vb", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px"],
    fixed: ["px", "pt"],
    relative: ["%"],
    empty: [""]
  },
      On = function () {
    var e = "[0-9]+",
        t = "[eE][+-]?[0-9]+",
        o = function o(e) {
      return "(?:".concat(e, ")?");
    },
        n = ["Infinity", "[0-9]+\\." + o(e) + o(t), "\\.[0-9]+" + o(t), e + o(t)].join("|");

    return new RegExp("^([+-]?(?:".concat(n, "))(.*)$"));
  }(),
      kn = /(\d+(\.\d+)?)%/,
      En = /(\d+(\.\d+)?)px|em/,
      Nn = se("col"),
      Bn = function Bn(e, t, o) {
    var n = (r = e, y.from(r.dom.parentElement).map(ge.fromDom)).getOrThunk(function () {
      return Ze(xe(e));
    });
    var r;
    return t(e) / o(n) * 100;
  },
      zn = function zn(e, t) {
    xt(e, "width", t + "px");
  },
      An = function An(e, t) {
    xt(e, "width", t + "%");
  },
      Wn = function Wn(e, t) {
    xt(e, "height", t + "px");
  },
      Ln = function Ln(e) {
    var t = function (e) {
      return To(t = e, "height", t.dom.offsetHeight) + "px";
      var t;
    }(e);

    return t ? function (e, t, o, n) {
      var r = parseFloat(e);
      return pt(e, "%") && "table" !== Q(t) ? function (e, t, o, n) {
        var r = It(e).map(function (e) {
          var n = o(e);
          return Math.floor(t / 100 * n);
        }).getOr(t);
        return n(e, r), r;
      }(t, r, o, n) : r;
    }(t, e, sn, Wn) : sn(e);
  },
      _n = function _n(e, t) {
    return Rt(e, t).orThunk(function () {
      return me(e, t).map(function (e) {
        return e + "px";
      });
    });
  },
      Mn = function Mn(e) {
    return _n(e, "width");
  },
      jn = function jn(e) {
    return Bn(e, Do, ko);
  },
      In = function In(e) {
    return Nn(e) ? Do(e) : To(t = e, "width", t.dom.offsetWidth);
    var t;
  },
      Pn = function Pn(e) {
    return function (e, t, o) {
      return o(e) / kt(e, "rowspan");
    }(e, 0, Ln);
  },
      Fn = function Fn(e, t, o) {
    xt(e, "width", t + o);
  },
      Hn = function Hn(e) {
    return Bn(e, Do, ko) + "%";
  },
      qn = u(kn),
      Vn = se("col"),
      $n = function $n(e) {
    return Mn(e).getOrThunk(function () {
      return In(e) + "px";
    });
  },
      Un = function Un(e) {
    return (t = e, _n(t, "height")).getOrThunk(function () {
      return Pn(e) + "px";
    });
    var t;
  },
      Gn = function Gn(e, t, o, n, r, s) {
    return e.filter(n).fold(function () {
      return s(function (e, t) {
        if (t < 0 || t >= e.length - 1) return y.none();
        var o = e[t].fold(function () {
          var o = function (e) {
            var t = x.call(e, 0);
            return t.reverse(), t;
          }(e.slice(0, t));

          return H(o, function (e, t) {
            return e.map(function (e) {
              return {
                value: e,
                delta: t + 1
              };
            });
          });
        }, function (e) {
          return y.some({
            value: e,
            delta: 0
          });
        }),
            n = e[t + 1].fold(function () {
          var o = e.slice(t + 1);
          return H(o, function (e, t) {
            return e.map(function (e) {
              return {
                value: e,
                delta: t + 1
              };
            });
          });
        }, function (e) {
          return y.some({
            value: e,
            delta: 1
          });
        });
        return o.bind(function (e) {
          return n.map(function (t) {
            var o = t.delta + e.delta;
            return Math.abs(t.value - e.value) / o;
          });
        });
      }(o, t));
    }, function (e) {
      return r(e);
    });
  },
      Kn = function Kn(e, t, o, n) {
    var r = Zo(e),
        s = Qo(e) ? function (e) {
      return O(Jo(e), function (e) {
        return y.from(e.element);
      });
    }(e) : r,
        l = [y.some(Rn.edge(t))].concat(O(Rn.positions(r, t), function (e) {
      return e.map(function (e) {
        return e.x;
      });
    })),
        a = p(Et);
    return O(s, function (e, t) {
      return Gn(e, t, l, a, function (e) {
        if (function (e) {
          var t = Co().browser,
              o = t.isChromium() || t.isFirefox();
          return !Vn(e) || o;
        }(e)) return o(e);
        {
          var _e6 = null != (s = r[t]) ? f(s) : y.none();

          return Gn(_e6, t, l, a, function (e) {
            return n(y.some(Do(e)));
          }, n);
        }
        var s;
      }, n);
    });
  },
      Yn = function Yn(e) {
    return e.map(function (e) {
      return e + "px";
    }).getOr("");
  },
      Jn = function Jn(e, t, o) {
    return Kn(e, t, In, function (e) {
      return e.getOrThunk(o.minCellWidth);
    });
  },
      Qn = function Qn(e, t, o, n, r) {
    var s = tn(e),
        l = [y.some(o.edge(t))].concat(O(o.positions(s, t), function (e) {
      return e.map(function (e) {
        return e.y;
      });
    }));
    return O(s, function (e, t) {
      return Gn(e, t, l, p(Nt), n, r);
    });
  },
      Xn = function Xn(e, t) {
    return function () {
      return Xe(e) ? t(e) : parseFloat(Rt(e, "width").getOr("0"));
    };
  },
      Zn = function Zn(e) {
    var t = Xn(e, function (e) {
      return parseFloat(Hn(e));
    }),
        o = Xn(e, Do);
    return {
      width: t,
      pixelWidth: o,
      getWidths: function getWidths(t, o) {
        return function (e, t, o) {
          return Kn(e, t, jn, function (e) {
            return e.fold(function () {
              return o.minCellWidth();
            }, function (e) {
              return e / o.pixelWidth() * 100;
            });
          });
        }(t, e, o);
      },
      getCellDelta: function getCellDelta(e) {
        return e / o() * 100;
      },
      singleColumnWidth: function singleColumnWidth(e, t) {
        return [100 - e];
      },
      minCellWidth: function minCellWidth() {
        return zt() / o() * 100;
      },
      setElementWidth: An,
      adjustTableWidth: function adjustTableWidth(o) {
        var n = t();
        An(e, n + o / 100 * n);
      },
      isRelative: !0,
      label: "percent"
    };
  },
      er = function er(e) {
    var t = Xn(e, Do);
    return {
      width: t,
      pixelWidth: t,
      getWidths: function getWidths(t, o) {
        return Jn(t, e, o);
      },
      getCellDelta: f,
      singleColumnWidth: function singleColumnWidth(e, t) {
        return [Math.max(zt(), e + t) - e];
      },
      minCellWidth: zt,
      setElementWidth: zn,
      adjustTableWidth: function adjustTableWidth(o) {
        var n = t() + o;
        zn(e, n);
      },
      isRelative: !1,
      label: "pixel"
    };
  },
      tr = function tr(e) {
    return Mn(e).fold(function () {
      return function (e) {
        var t = Xn(e, Do),
            o = u(0);
        return {
          width: t,
          pixelWidth: t,
          getWidths: function getWidths(t, o) {
            return Jn(t, e, o);
          },
          getCellDelta: o,
          singleColumnWidth: u([0]),
          minCellWidth: o,
          setElementWidth: d,
          adjustTableWidth: d,
          isRelative: !0,
          label: "none"
        };
      }(e);
    }, function (t) {
      return function (e, t) {
        return null !== qn().exec(t) ? Zn(e) : er(e);
      }(e, t);
    });
  },
      or = er,
      nr = Zn,
      rr = function rr(e, t, o) {
    var n = e[o].element,
        r = ge.fromTag("td");
    ze(r, ge.fromTag("br")), (t ? ze : Be)(n, r);
  },
      sr = function (e, t) {
    var o = function o(t) {
      return e(t) ? y.from(t.dom.nodeValue) : y.none();
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
  }(oe),
      lr = function lr(e) {
    return sr.get(e);
  },
      ar = function ar(e) {
    return sr.getOption(e);
  },
      cr = function cr(e, t) {
    return sr.set(e, t);
  },
      ir = function ir(e) {
    return "img" === Q(e) ? 1 : ar(e).fold(function () {
      return Oe(e).length;
    }, function (e) {
      return e.length;
    });
  },
      mr = ["img", "br"],
      dr = function dr(e) {
    return ar(e).filter(function (e) {
      return 0 !== e.trim().length || e.indexOf("\xa0") > -1;
    }).isSome() || T(mr, Q(e));
  },
      ur = function ur(e) {
    return function (e, t) {
      var o = function o(e) {
        for (var _n15 = 0; _n15 < e.childNodes.length; _n15++) {
          var _r13 = ge.fromDom(e.childNodes[_n15]);

          if (t(_r13)) return y.some(_r13);

          var _s4 = o(e.childNodes[_n15]);

          if (_s4.isSome()) return _s4;
        }

        return y.none();
      };

      return o(e.dom);
    }(e, dr);
  },
      fr = function fr(e) {
    return gr(e, dr);
  },
      gr = function gr(e, t) {
    var o = function o(e) {
      var n = Oe(e);

      for (var _e7 = n.length - 1; _e7 >= 0; _e7--) {
        var _r14 = n[_e7];
        if (t(_r14)) return y.some(_r14);

        var _s5 = o(_r14);

        if (_s5.isSome()) return _s5;
      }

      return y.none();
    };

    return o(e);
  },
      hr = {
    scope: ["row", "col"]
  },
      pr = function pr(e) {
    return function () {
      var t = ge.fromTag("td", e.dom);
      return ze(t, ge.fromTag("br", e.dom)), t;
    };
  },
      wr = function wr(e) {
    return function () {
      return ge.fromTag("col", e.dom);
    };
  },
      br = function br(e) {
    return function () {
      return ge.fromTag("colgroup", e.dom);
    };
  },
      vr = function vr(e) {
    return function () {
      return ge.fromTag("tr", e.dom);
    };
  },
      yr = function yr(e, t, o) {
    var n = function (e, t) {
      var o = He(e, t),
          n = Oe(Fe(e));
      return Le(o, n), o;
    }(e, t);

    return $(o, function (e, t) {
      null === e ? de(n, t) : ae(n, t, e);
    }), n;
  },
      xr = function xr(e) {
    return e;
  },
      Cr = function Cr(e, t, o) {
    var n = function n(e, t) {
      (function (e, t) {
        var o = e.dom,
            n = t.dom;
        vt(o) && vt(n) && (n.style.cssText = o.style.cssText);
      })(e.element, t), Dt(t, "height"), 1 !== e.colspan && Dt(t, "width");
    };

    return {
      col: function col(o) {
        var r = ge.fromTag(Q(o.element), t.dom);
        return n(o, r), e(o.element, r), r;
      },
      colgroup: br(t),
      row: vr(t),
      cell: function cell(r) {
        var s = ge.fromTag(Q(r.element), t.dom),
            l = o.getOr(["strong", "em", "b", "i", "span", "font", "h1", "h2", "h3", "h4", "h5", "h6", "p", "div"]),
            a = l.length > 0 ? function (e, t, o) {
          return ur(e).map(function (n) {
            var r = o.join(","),
                s = tt(n, r, function (t) {
              return be(t, e);
            });
            return B(s, function (e, t) {
              var o = Pe(t);
              return de(o, "contenteditable"), ze(e, o), o;
            }, t);
          }).getOr(t);
        }(r.element, s, l) : s;
        return ze(a, ge.fromTag("br")), n(r, s), function (e, t) {
          $(hr, function (o, n) {
            return me(e, n).filter(function (e) {
              return T(o, e);
            }).each(function (e) {
              return ae(t, n, e);
            });
          });
        }(r.element, s), e(r.element, s), s;
      },
      replace: yr,
      colGap: wr(t),
      gap: pr(t)
    };
  },
      Sr = function Sr(e) {
    return {
      col: wr(e),
      colgroup: br(e),
      row: vr(e),
      cell: pr(e),
      replace: xr,
      colGap: wr(e),
      gap: pr(e)
    };
  },
      Tr = function Tr(e) {
    return ge.fromDom(e.getBody());
  },
      Rr = function Rr(e) {
    return function (t) {
      return be(t, Tr(e));
    };
  },
      Dr = function Dr(e) {
    de(e, "data-mce-style");

    var t = function t(e) {
      return de(e, "data-mce-style");
    };

    k(Mt(e), t), k(jt(e), t), k(Pt(e), t);
  },
      Or = function Or(e) {
    return ge.fromDom(e.selection.getStart());
  },
      kr = function kr(e) {
    return e.getBoundingClientRect().width;
  },
      Er = function Er(e) {
    return e.getBoundingClientRect().height;
  },
      Nr = function Nr(e, t) {
    var o = t.column,
        n = t.column + t.colspan - 1,
        r = t.row,
        s = t.row + t.rowspan - 1;
    return o <= e.finishCol && n >= e.startCol && r <= e.finishRow && s >= e.startRow;
  },
      Br = function Br(e, t) {
    return t.column >= e.startCol && t.column + t.colspan - 1 <= e.finishCol && t.row >= e.startRow && t.row + t.rowspan - 1 <= e.finishRow;
  },
      zr = function zr(e, t, o) {
    var n = Go(e, t, be),
        r = Go(e, o, be);
    return n.bind(function (e) {
      return r.map(function (t) {
        return o = e, n = t, {
          startRow: Math.min(o.row, n.row),
          startCol: Math.min(o.column, n.column),
          finishRow: Math.max(o.row + o.rowspan - 1, n.row + n.rowspan - 1),
          finishCol: Math.max(o.column + o.colspan - 1, n.column + n.colspan - 1)
        };
        var o, n;
      });
    });
  },
      Ar = function Ar(e, t, o) {
    return zr(e, t, o).map(function (t) {
      var o = Ko(e, h(Nr, t));
      return O(o, function (e) {
        return e.element;
      });
    });
  },
      Wr = function Wr(e, t) {
    return Go(e, t, function (e, t) {
      return ve(t, e);
    }).map(function (e) {
      return e.element;
    });
  },
      Lr = function Lr(e, t, o) {
    var n = Mr(e);
    return Ar(n, t, o);
  },
      _r = function _r(e, t, o, n, r) {
    var s = Mr(e),
        l = be(e, o) ? y.some(t) : Wr(s, t),
        a = be(e, r) ? y.some(n) : Wr(s, n);
    return l.bind(function (e) {
      return a.bind(function (t) {
        return Ar(s, e, t);
      });
    });
  },
      Mr = Vo;

  var jr = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "li", "table", "thead", "tbody", "tfoot", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"],
      Ir = function Ir() {
    return {
      up: u({
        selector: lt,
        closest: it,
        predicate: st,
        all: Te
      }),
      down: u({
        selector: nt,
        predicate: et
      }),
      styles: u({
        get: St,
        getRaw: Rt,
        set: xt,
        remove: Dt
      }),
      attrs: u({
        get: ie,
        set: ae,
        remove: de,
        copyTo: function copyTo(e, t) {
          var o = ue(e);
          ce(t, o);
        }
      }),
      insert: u({
        before: Ee,
        after: Ne,
        afterAll: We,
        append: ze,
        appendAll: Le,
        prepend: Be,
        wrap: Ae
      }),
      remove: u({
        unwrap: je,
        remove: Me
      }),
      create: u({
        nu: ge.fromTag,
        clone: function clone(e) {
          return ge.fromDom(e.dom.cloneNode(!1));
        },
        text: ge.fromText
      }),
      query: u({
        comparePosition: function comparePosition(e, t) {
          return e.dom.compareDocumentPosition(t.dom);
        },
        prevSibling: Re,
        nextSibling: De
      }),
      property: u({
        children: Oe,
        name: Q,
        parent: Se,
        document: function document(e) {
          return Ce(e).dom;
        },
        isText: oe,
        isComment: ee,
        isElement: te,
        isSpecial: function isSpecial(e) {
          var t = Q(e);
          return T(["script", "noscript", "iframe", "noframes", "noembed", "title", "style", "textarea", "xmp"], t);
        },
        getLanguage: function getLanguage(e) {
          return te(e) ? me(e, "lang") : y.none();
        },
        getText: lr,
        setText: cr,
        isBoundary: function isBoundary(e) {
          return !!te(e) && ("body" === Q(e) || T(jr, Q(e)));
        },
        isEmptyTag: function isEmptyTag(e) {
          return !!te(e) && T(["br", "img", "hr", "input"], Q(e));
        },
        isNonEditable: function isNonEditable(e) {
          return te(e) && "false" === ie(e, "contenteditable");
        }
      }),
      eq: be,
      is: ye
    };
  };

  var Pr = function Pr(e, t, o, n) {
    var r = t(e, o);
    return B(n, function (o, n) {
      var r = t(e, n);
      return Fr(e, o, r);
    }, r);
  },
      Fr = function Fr(e, t, o) {
    return t.bind(function (t) {
      return o.filter(h(e.eq, t));
    });
  },
      Hr = Ir(),
      qr = function qr(e, t) {
    return function (e, t, o) {
      return o.length > 0 ? function (e, t, o, n) {
        return n(e, t, o[0], o.slice(1));
      }(e, t, o, Pr) : y.none();
    }(Hr, function (t, o) {
      return e(o);
    }, t);
  },
      Vr = function Vr(e) {
    return lt(e, "table");
  },
      $r = function $r(e, t, o) {
    var n = function n(e) {
      return function (t) {
        return void 0 !== o && o(t) || be(t, e);
      };
    };

    return be(e, t) ? y.some({
      boxes: y.some([e]),
      start: e,
      finish: t
    }) : Vr(e).bind(function (r) {
      return Vr(t).bind(function (s) {
        if (be(r, s)) return y.some({
          boxes: Lr(r, e, t),
          start: e,
          finish: t
        });

        if (ve(r, s)) {
          var _o13 = tt(t, "td,th", n(r)),
              _l2 = _o13.length > 0 ? _o13[_o13.length - 1] : t;

          return y.some({
            boxes: _r(r, e, r, t, s),
            start: e,
            finish: _l2
          });
        }

        if (ve(s, r)) {
          var _o14 = tt(e, "td,th", n(s)),
              _l3 = _o14.length > 0 ? _o14[_o14.length - 1] : e;

          return y.some({
            boxes: _r(s, e, r, t, s),
            start: e,
            finish: _l3
          });
        }

        return function (e, t, o) {
          return function (e, t, o) {
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : b;

            var r = [t].concat(e.up().all(t)),
                s = [o].concat(e.up().all(o)),
                l = function l(e) {
              return W(e, n).fold(function () {
                return e;
              }, function (t) {
                return e.slice(0, t + 1);
              });
            },
                a = l(r),
                c = l(s),
                i = A(a, function (t) {
              return R(c, function (e, t) {
                return h(e.eq, t);
              }(e, t));
            });

            return {
              firstpath: a,
              secondpath: c,
              shared: i
            };
          }(Hr, e, t, void 0);
        }(e, t).shared.bind(function (l) {
          return it(l, "table", o).bind(function (o) {
            var l = tt(t, "td,th", n(o)),
                a = l.length > 0 ? l[l.length - 1] : t,
                c = tt(e, "td,th", n(o)),
                i = c.length > 0 ? c[c.length - 1] : e;
            return y.some({
              boxes: _r(o, e, r, t, s),
              start: i,
              finish: a
            });
          });
        });
      });
    });
  },
      Ur = function Ur(e, t) {
    var o = nt(e, t);
    return o.length > 0 ? y.some(o) : y.none();
  },
      Gr = function Gr(e, t, o) {
    return ct(e, t).bind(function (t) {
      return ct(e, o).bind(function (e) {
        return qr(Vr, [t, e]).map(function (o) {
          return {
            first: t,
            last: e,
            table: o
          };
        });
      });
    });
  },
      Kr = function Kr(e, t, o, n, r) {
    return function (e, t) {
      return A(e, function (e) {
        return he(e, t);
      });
    }(e, r).bind(function (e) {
      return function (e, t, o) {
        return It(e).bind(function (n) {
          return function (e, t, o, n) {
            return Go(e, t, be).bind(function (t) {
              var r = o > 0 ? t.row + t.rowspan - 1 : t.row,
                  s = n > 0 ? t.column + t.colspan - 1 : t.column;
              return Uo(e, r + o, s + n).map(function (e) {
                return e.element;
              });
            });
          }(Mr(n), e, t, o);
        });
      }(e, t, o).bind(function (e) {
        return function (e, t) {
          return lt(e, "table").bind(function (o) {
            return ct(o, t).bind(function (t) {
              return $r(t, e).bind(function (e) {
                return e.boxes.map(function (t) {
                  return {
                    boxes: t,
                    start: e.start,
                    finish: e.finish
                  };
                });
              });
            });
          });
        }(e, n);
      });
    });
  },
      Yr = function Yr(e, t) {
    return Ur(e, t);
  },
      Jr = function Jr(e, t, o) {
    return Gr(e, t, o).bind(function (t) {
      var o = function o(t) {
        return be(e, t);
      },
          n = "thead,tfoot,tbody,table",
          r = lt(t.first, n, o),
          s = lt(t.last, n, o);

      return r.bind(function (e) {
        return s.bind(function (o) {
          return be(e, o) ? function (e, t, o) {
            return function (e, t, o) {
              return zr(e, t, o).bind(function (t) {
                return function (e, t) {
                  var o = !0;
                  var n = h(Br, t);

                  for (var _r15 = t.startRow; _r15 <= t.finishRow; _r15++) {
                    for (var _s6 = t.startCol; _s6 <= t.finishCol; _s6++) {
                      o = o && Uo(e, _r15, _s6).exists(n);
                    }
                  }

                  return o ? y.some(t) : y.none();
                }(e, t);
              });
            }(Mr(e), t, o);
          }(t.table, t.first, t.last) : y.none();
        });
      });
    });
  },
      Qr = f,
      Xr = function Xr(e) {
    var t = function t(e, _t7) {
      return me(e, _t7).exists(function (e) {
        return parseInt(e, 10) > 1;
      });
    };

    return e.length > 0 && M(e, function (e) {
      return t(e, "rowspan") || t(e, "colspan");
    }) ? y.some(e) : y.none();
  },
      Zr = function Zr(e, t, o) {
    return t.length <= 1 ? y.none() : Jr(e, o.firstSelectedSelector, o.lastSelectedSelector).map(function (e) {
      return {
        bounds: e,
        cells: t
      };
    });
  },
      es = {
    selected: "data-mce-selected",
    selectedSelector: "td[data-mce-selected],th[data-mce-selected]",
    firstSelected: "data-mce-first-selected",
    firstSelectedSelector: "td[data-mce-first-selected],th[data-mce-first-selected]",
    lastSelected: "data-mce-last-selected",
    lastSelectedSelector: "td[data-mce-last-selected],th[data-mce-last-selected]"
  },
      ts = function ts(e, t, o) {
    return {
      element: o,
      mergable: Zr(t, e, es),
      unmergable: Xr(e),
      selection: Qr(e)
    };
  },
      os = function os(e) {
    return function (t, o) {
      var n = Q(t),
          r = "col" === n || "colgroup" === n ? It(s = t).bind(function (e) {
        return Yr(e, es.firstSelectedSelector);
      }).fold(u(s), function (e) {
        return e[0];
      }) : t;
      var s;
      return it(r, e, o);
    };
  },
      ns = os("th,td,caption"),
      rs = os("th,td"),
      ss = function ss(e) {
    return t = e.model.table.getSelectedCells(), O(t, ge.fromDom);
    var t;
  },
      ls = function ls(e, t) {
    e.on("BeforeGetContent", function (t) {
      var o = function o(_o16) {
        t.preventDefault(), function (e) {
          return It(e[0]).map(function (e) {
            var t = function (e, t) {
              var o = function o(e) {
                return he(e.element, t);
              },
                  n = Fe(e),
                  r = Vt(n),
                  s = tr(e),
                  l = $o(r),
                  a = function (e, t) {
                var o = e.grid.columns;
                var n = e.grid.rows,
                    r = o,
                    s = 0,
                    l = 0;
                var a = [],
                    c = [];
                return $(e.access, function (e) {
                  if (a.push(e), t(e)) {
                    c.push(e);

                    var _t8 = e.row,
                        _o15 = _t8 + e.rowspan - 1,
                        _a3 = e.column,
                        _i2 = _a3 + e.colspan - 1;

                    _t8 < n ? n = _t8 : _o15 > s && (s = _o15), _a3 < r ? r = _a3 : _i2 > l && (l = _i2);
                  }
                }), function (e, t, o, n, r, s) {
                  return {
                    minRow: e,
                    minCol: t,
                    maxRow: o,
                    maxCol: n,
                    allCells: r,
                    selectedCells: s
                  };
                }(n, r, s, l, a, c);
              }(l, o),
                  c = "th:not(" + t + "),td:not(" + t + ")",
                  i = Lt(n, "th,td", function (e) {
                return he(e, c);
              });

              k(i, Me), function (e, t, o, n) {
                var r = N(e, function (e) {
                  return "colgroup" !== e.section;
                }),
                    s = t.grid.columns,
                    l = t.grid.rows;

                for (var _e8 = 0; _e8 < l; _e8++) {
                  var _l4 = !1;

                  for (var _a4 = 0; _a4 < s; _a4++) {
                    _e8 < o.minRow || _e8 > o.maxRow || _a4 < o.minCol || _a4 > o.maxCol || (Uo(t, _e8, _a4).filter(n).isNone() ? rr(r, _l4, _e8) : _l4 = !0);
                  }
                }
              }(r, l, a, o);

              var m = function (e, t, o, n) {
                if (0 === n.minCol && t.grid.columns === n.maxCol + 1) return 0;
                var r = Jn(t, e, o),
                    s = z(r, function (e, t) {
                  return e + t;
                }, 0),
                    l = z(r.slice(n.minCol, n.maxCol + 1), function (e, t) {
                  return e + t;
                }, 0),
                    a = l / s * o.pixelWidth() - o.pixelWidth();
                return o.getCellDelta(a);
              }(e, Vo(e), s, a);

              return function (e, t, o, n) {
                $(o.columns, function (e) {
                  (e.column < t.minCol || e.column > t.maxCol) && Me(e.element);
                });
                var r = N(Wt(e, "tr"), function (e) {
                  return 0 === e.dom.childElementCount;
                });
                k(r, Me), t.minCol !== t.maxCol && t.minRow !== t.maxRow || k(Wt(e, "th,td"), function (e) {
                  de(e, "rowspan"), de(e, "colspan");
                }), de(e, jo), de(e, "data-snooker-col-series"), tr(e).adjustTableWidth(n);
              }(n, a, l, m), n;
            }(e, "[data-mce-selected]");

            return Dr(t), [t];
          });
        }(_o16).each(function (o) {
          t.content = "text" === t.format ? function (e) {
            return O(e, function (e) {
              return e.dom.innerText;
            }).join("");
          }(o) : function (e, t) {
            return O(t, function (t) {
              return e.selection.serializer.serialize(t.dom, {});
            }).join("");
          }(e, o);
        });
      };

      if (!0 === t.selection) {
        var _t9 = function (e) {
          return N(ss(e), function (e) {
            return he(e, es.selectedSelector);
          });
        }(e);

        _t9.length >= 1 && o(_t9);
      }
    }), e.on("BeforeSetContent", function (o) {
      if (!0 === o.selection && !0 === o.paste) {
        var _n16 = ss(e);

        P(_n16).each(function (n) {
          It(n).each(function (r) {
            var s = N(function (e, t) {
              var o = document.createElement("div");
              return o.innerHTML = e, Oe(ge.fromDom(o));
            }(o.content), function (e) {
              return "meta" !== Q(e);
            }),
                l = se("table");

            if (1 === s.length && l(s[0])) {
              o.preventDefault();

              var _l5 = ge.fromDom(e.getDoc()),
                  _a5 = Sr(_l5),
                  _c2 = function (e, t, o) {
                return {
                  element: e,
                  clipboard: t,
                  generators: o
                };
              }(n, s[0], _a5);

              t.pasteCells(r, _c2).each(function () {
                e.focus();
              });
            }
          });
        });
      }
    });
  },
      as = function as(e, t) {
    return {
      element: e,
      offset: t
    };
  },
      cs = function cs(e, t, o) {
    return e.property().isText(t) && 0 === e.property().getText(t).trim().length || e.property().isComment(t) ? o(t).bind(function (t) {
      return cs(e, t, o).orThunk(function () {
        return y.some(t);
      });
    }) : y.none();
  },
      is = function is(e, t) {
    return e.property().isText(t) ? e.property().getText(t).length : e.property().children(t).length;
  },
      ms = function ms(e, t) {
    var o = cs(e, t, e.query().prevSibling).getOr(t);
    if (e.property().isText(o)) return as(o, is(e, o));
    var n = e.property().children(o);
    return n.length > 0 ? ms(e, n[n.length - 1]) : as(o, is(e, o));
  },
      ds = ms,
      us = Ir(),
      fs = function fs(e, t) {
    if (!Et(e)) {
      var _o17 = function (e) {
        return Mn(e).bind(function (e) {
          return t = e, o = ["fixed", "relative", "empty"], y.from(On.exec(t)).bind(function (e) {
            var t = Number(e[1]),
                n = e[2];
            return function (e, t) {
              return R(t, function (t) {
                return R(Dn[t], function (t) {
                  return e === t;
                });
              });
            }(n, o) ? y.some({
              value: t,
              unit: n
            }) : y.none();
          });
          var t, o;
        });
      }(e);

      _o17.each(function (o) {
        var n = o.value / 2;
        Fn(e, n, o.unit), Fn(t, n, o.unit);
      });
    }
  },
      gs = function gs(e) {
    return O(e, u(0));
  },
      hs = function hs(e, t, o, n, r) {
    return r(e.slice(0, t)).concat(n).concat(r(e.slice(o)));
  },
      ps = function ps(e) {
    return function (t, o, n, r) {
      if (e(n)) {
        var _e9 = Math.max(r, t[o] - Math.abs(n)),
            _s7 = Math.abs(_e9 - t[o]);

        return n >= 0 ? _s7 : -_s7;
      }

      return n;
    };
  },
      ws = ps(function (e) {
    return e < 0;
  }),
      bs = ps(v),
      vs = function vs() {
    var e = function e(_e10, t, o, n) {
      var r = (100 + o) / 100,
          s = Math.max(n, (_e10[t] + o) / r);
      return O(_e10, function (e, o) {
        return (o === t ? s : e / r) - e;
      });
    },
        t = function t(_t10, o, n, r, s, l) {
      return l ? e(_t10, o, r, s) : function (e, t, o, n, r) {
        var s = ws(e, t, n, r);
        return hs(e, t, o + 1, [s, 0], gs);
      }(_t10, o, n, r, s);
    };

    return {
      resizeTable: function resizeTable(e, t) {
        return e(t);
      },
      clampTableDelta: ws,
      calcLeftEdgeDeltas: t,
      calcMiddleDeltas: function calcMiddleDeltas(e, o, n, r, s, l, a) {
        return t(e, n, r, s, l, a);
      },
      calcRightEdgeDeltas: function calcRightEdgeDeltas(t, o, n, r, s, l) {
        if (l) return e(t, n, r, s);
        {
          var _e11 = ws(t, n, r, s);

          return gs(t.slice(0, n)).concat([_e11]);
        }
      },
      calcRedestributedWidths: function calcRedestributedWidths(e, t, o, n) {
        if (n) {
          var _n17 = (t + o) / t,
              _r16 = O(e, function (e) {
            return e / _n17;
          });

          return {
            delta: 100 * _n17 - 100,
            newSizes: _r16
          };
        }

        return {
          delta: o,
          newSizes: e
        };
      }
    };
  },
      ys = function ys() {
    var e = function e(_e12, t, o, n, r) {
      var s = bs(_e12, n >= 0 ? o : t, n, r);
      return hs(_e12, t, o + 1, [s, -s], gs);
    };

    return {
      resizeTable: function resizeTable(e, t, o) {
        o && e(t);
      },
      clampTableDelta: function clampTableDelta(e, t, o, n, r) {
        if (r) {
          if (o >= 0) return o;
          {
            var _t11 = z(e, function (e, t) {
              return e + t - n;
            }, 0);

            return Math.max(-_t11, o);
          }
        }

        return ws(e, t, o, n);
      },
      calcLeftEdgeDeltas: e,
      calcMiddleDeltas: function calcMiddleDeltas(t, o, n, r, s, l) {
        return e(t, n, r, s, l);
      },
      calcRightEdgeDeltas: function calcRightEdgeDeltas(e, t, o, n, r, s) {
        if (s) return gs(e);
        {
          var _t12 = n / e.length;

          return O(e, u(_t12));
        }
      },
      calcRedestributedWidths: function calcRedestributedWidths(e, t, o, n) {
        return {
          delta: 0,
          newSizes: e
        };
      }
    };
  },
      xs = function xs(e) {
    return Vo(e).grid;
  },
      Cs = se("th"),
      Ss = function Ss(e) {
    return M(e, function (e) {
      return Cs(e.element);
    });
  },
      Ts = function Ts(e, t) {
    return e && t ? "sectionCells" : e ? "section" : "cells";
  },
      Rs = function Rs(e) {
    var t = "thead" === e.section,
        o = mt(Ds(e.cells), "th");
    return "tfoot" === e.section ? {
      type: "footer"
    } : t || o ? {
      type: "header",
      subType: Ts(t, o)
    } : {
      type: "body"
    };
  },
      Ds = function Ds(e) {
    var t = N(e, function (e) {
      return Cs(e.element);
    });
    return 0 === t.length ? y.some("td") : t.length === e.length ? y.some("th") : y.none();
  },
      Os = function Os(e, t, o) {
    return Ue(o(e.element, t), !0, e.isLocked);
  },
      ks = function ks(e, t) {
    return e.section !== t ? Ge(e.element, e.cells, t, e.isNew) : e;
  },
      Es = function Es() {
    return {
      transformRow: ks,
      transformCell: function transformCell(e, t, o) {
        var n = o(e.element, t),
            r = "td" !== Q(n) ? function (e, t) {
          var o = He(e, "td");
          Ne(e, o);
          var n = Oe(e);
          return Le(o, n), Me(e), o;
        }(n) : n;
        return Ue(r, e.isNew, e.isLocked);
      }
    };
  },
      Ns = function Ns() {
    return {
      transformRow: ks,
      transformCell: Os
    };
  },
      Bs = function Bs() {
    return {
      transformRow: function transformRow(e, t) {
        return ks(e, "thead" === t ? "tbody" : t);
      },
      transformCell: Os
    };
  },
      zs = Es,
      As = Ns,
      Ws = Bs,
      Ls = function Ls() {
    return {
      transformRow: f,
      transformCell: Os
    };
  },
      _s = function _s(e) {
    return it(e, "[contenteditable]");
  },
      Ms = function Ms(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return Xe(e) ? e.dom.isContentEditable : _s(e).fold(u(t), function (e) {
      return "true" === js(e);
    });
  },
      js = function js(e) {
    return e.dom.contentEditable;
  },
      Is = function Is(e, t, o, n) {
    o === n ? de(e, t) : ae(e, t, o);
  },
      Ps = function Ps(e, t, o) {
    F(ot(e, t)).fold(function () {
      return Be(e, o);
    }, function (e) {
      return Ne(e, o);
    });
  },
      Fs = function Fs(e, t) {
    var o = [],
        n = [],
        r = function r(e) {
      return O(e, function (e) {
        e.isNew && o.push(e.element);
        var t = e.element;
        return _e(t), k(e.cells, function (e) {
          e.isNew && n.push(e.element), Is(e.element, "colspan", e.colspan, 1), Is(e.element, "rowspan", e.rowspan, 1), ze(t, e.element);
        }), t;
      });
    },
        s = function s(e) {
      return _(e, function (e) {
        return O(e.cells, function (e) {
          return Is(e.element, "span", e.colspan, 1), e.element;
        });
      });
    },
        l = function l(t, o) {
      var n = function (e, t) {
        var o = at(e, t).getOrThunk(function () {
          var o = ge.fromTag(t, xe(e).dom);
          return "thead" === t ? Ps(e, "caption,colgroup", o) : "colgroup" === t ? Ps(e, "caption", o) : ze(e, o), o;
        });
        return _e(o), o;
      }(e, o),
          l = ("colgroup" === o ? s : r)(t);

      Le(n, l);
    },
        a = function a(t, o) {
      t.length > 0 ? l(t, o) : function (t) {
        at(e, t).each(Me);
      }(o);
    },
        c = [],
        i = [],
        m = [],
        d = [];

    return k(t, function (e) {
      switch (e.section) {
        case "thead":
          c.push(e);
          break;

        case "tbody":
          i.push(e);
          break;

        case "tfoot":
          m.push(e);
          break;

        case "colgroup":
          d.push(e);
      }
    }), a(d, "colgroup"), a(c, "thead"), a(i, "tbody"), a(m, "tfoot"), {
      newRows: o,
      newCells: n
    };
  },
      Hs = function Hs(e, t) {
    if (0 === e.length) return 0;
    var o = e[0];
    return W(e, function (e) {
      return !t(o.element, e.element);
    }).getOr(e.length);
  },
      qs = function qs(e, t) {
    var o = O(e, function (e) {
      return O(e.cells, b);
    });
    return O(e, function (n, r) {
      var s = _(n.cells, function (n, s) {
        if (!1 === o[r][s]) {
          var _m2 = function (e, t, o, n) {
            var r = function (e, t) {
              return e[t];
            }(e, t),
                s = "colgroup" === r.section,
                l = Hs(r.cells.slice(o), n),
                a = s ? 1 : Hs(function (e, t) {
              return O(e, function (e) {
                return Ao(e, t);
              });
            }(e.slice(t), o), n);

            return {
              colspan: l,
              rowspan: a
            };
          }(e, r, s, t);

          return function (e, t, n, r) {
            for (var _s8 = e; _s8 < e + n; _s8++) {
              for (var _e13 = t; _e13 < t + r; _e13++) {
                o[_s8][_e13] = !0;
              }
            }
          }(r, s, _m2.rowspan, _m2.colspan), [(l = n.element, a = _m2.rowspan, c = _m2.colspan, i = n.isNew, {
            element: l,
            rowspan: a,
            colspan: c,
            isNew: i
          })];
        }

        return [];
        var l, a, c, i;
      });

      return function (e, t, o, n) {
        return {
          element: e,
          cells: t,
          section: o,
          isNew: n
        };
      }(n.element, s, n.section, n.isNew);
    });
  },
      Vs = function Vs(e, t, o) {
    var n = [];
    k(e.colgroups, function (r) {
      var s = [];

      for (var _n18 = 0; _n18 < e.grid.columns; _n18++) {
        var _r17 = Xo(e, _n18).map(function (e) {
          return Ue(e.element, o, !1);
        }).getOrThunk(function () {
          return Ue(t.colGap(), !0, !1);
        });

        s.push(_r17);
      }

      n.push(Ge(r.element, s, "colgroup", o));
    });

    for (var _r18 = 0; _r18 < e.grid.rows; _r18++) {
      var _s9 = [];

      for (var _n19 = 0; _n19 < e.grid.columns; _n19++) {
        var _l7 = Uo(e, _r18, _n19).map(function (e) {
          return Ue(e.element, o, e.isLocked);
        }).getOrThunk(function () {
          return Ue(t.gap(), !0, !1);
        });

        _s9.push(_l7);
      }

      var _l6 = e.all[_r18],
          _a6 = Ge(_l6.element, _s9, _l6.section, o);

      n.push(_a6);
    }

    return n;
  },
      $s = function $s(e) {
    return qs(e, be);
  },
      Us = function Us(e, t) {
    return H(e.all, function (e) {
      return A(e.cells, function (e) {
        return be(t, e.element);
      });
    });
  },
      Gs = function Gs(e, t, o) {
    var n = O(t.selection, function (t) {
      return _t(t).bind(function (t) {
        return Us(e, t);
      }).filter(o);
    }),
        r = dt(n);
    return ut(r.length > 0, r);
  },
      Ks = function Ks(e, t, o, n, r) {
    return function (s, l, a, c) {
      var i = Vo(s),
          m = y.from(null == c ? void 0 : c.section).getOrThunk(Ls);
      return t(i, l).map(function (t) {
        var o = function (e, t) {
          return Vs(e, t, !1);
        }(i, a),
            n = e(o, t, be, r(a), m),
            s = Po(n.grid);

        return {
          info: t,
          grid: $s(n.grid),
          cursor: n.cursor,
          lockedColumns: s
        };
      }).bind(function (e) {
        var t = Fs(s, e.grid),
            r = y.from(null == c ? void 0 : c.sizing).getOrThunk(function () {
          return tr(s);
        }),
            l = y.from(null == c ? void 0 : c.resize).getOrThunk(ys);
        return o(s, e.grid, e.info, {
          sizing: r,
          resize: l,
          section: m
        }), n(s), de(s, jo), e.lockedColumns.length > 0 && ae(s, jo, e.lockedColumns.join(",")), y.some({
          cursor: e.cursor,
          newRows: t.newRows,
          newCells: t.newCells
        });
      });
    };
  },
      Ys = function Ys(e, t) {
    return Gs(e, t, v).map(function (e) {
      return {
        cells: e,
        generators: t.generators,
        clipboard: t.clipboard
      };
    });
  },
      Js = function Js(e, t) {
    return Gs(e, t, v);
  },
      Qs = function Qs(e, t) {
    return Gs(e, t, function (e) {
      return !e.isLocked;
    });
  },
      Xs = function Xs(e, t) {
    return M(t, function (t) {
      return function (e, t) {
        return Us(e, t).exists(function (e) {
          return !e.isLocked;
        });
      }(e, t);
    });
  },
      Zs = function Zs(e, t, o, n) {
    var r = _o(e).rows;

    var s = !0;

    for (var _e14 = 0; _e14 < r.length; _e14++) {
      for (var _l8 = 0; _l8 < Lo(r[0]); _l8++) {
        var _a7 = r[_e14],
            _c3 = Ao(_a7, _l8),
            _i3 = o(_c3.element, t);

        _i3 && !s ? Bo(_a7, _l8, Ue(n(), !0, _c3.isLocked)) : _i3 && (s = !1);
      }
    }

    return e;
  },
      el = function el(e) {
    var t = function t(_t13) {
      return _t13(e);
    },
        o = u(e),
        n = function n() {
      return r;
    },
        r = {
      tag: !0,
      inner: e,
      fold: function fold(t, o) {
        return o(e);
      },
      isValue: v,
      isError: b,
      map: function map(t) {
        return ol.value(t(e));
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
        return y.some(e);
      }
    };

    return r;
  },
      tl = function tl(e) {
    var t = function t() {
      return o;
    },
        o = {
      tag: !1,
      inner: e,
      fold: function fold(t, o) {
        return t(e);
      },
      isValue: b,
      isError: v,
      map: t,
      mapError: function mapError(t) {
        return ol.error(t(e));
      },
      bind: t,
      exists: b,
      forall: v,
      getOr: f,
      or: f,
      getOrThunk: w,
      orThunk: w,
      getOrDie: (n = String(e), function () {
        throw new Error(n);
      }),
      each: d,
      toOptional: y.none
    };

    var n;
    return o;
  },
      ol = {
    value: el,
    error: tl,
    fromOption: function fromOption(e, t) {
      return e.fold(function () {
        return tl(t);
      }, el);
    }
  },
      nl = function nl(e, t) {
    return {
      rowDelta: 0,
      colDelta: Lo(e[0]) - Lo(t[0])
    };
  },
      rl = function rl(e, t) {
    return {
      rowDelta: e.length - t.length,
      colDelta: 0
    };
  },
      sl = function sl(e, t, o, n) {
    var r = "colgroup" === t.section ? o.col : o.cell;
    return D(e, function (e) {
      return Ue(r(), !0, n(e));
    });
  },
      ll = function ll(e, t, o, n) {
    var r = e[e.length - 1];
    return e.concat(D(t, function () {
      var e = "colgroup" === r.section ? o.colgroup : o.row,
          t = Mo(r, e, f),
          s = sl(t.cells.length, t, o, function (e) {
        return J(n, e.toString());
      });
      return zo(t, s);
    }));
  },
      al = function al(e, t, o, n) {
    return O(e, function (e) {
      var r = sl(t, e, o, b);
      return Eo(e, n, r);
    });
  },
      cl = function cl(e, t, o) {
    var n = t.colDelta < 0 ? al : f,
        r = t.rowDelta < 0 ? ll : f,
        s = Po(e),
        l = Lo(e[0]),
        a = R(s, function (e) {
      return e === l - 1;
    }),
        c = n(e, Math.abs(t.colDelta), o, a ? l - 1 : l),
        i = Po(c);
    return r(c, Math.abs(t.rowDelta), o, j(i, v));
  },
      il = function il(e, t, o, n) {
    var r = h(n, Ao(e[t], o).element),
        s = e[t];
    return e.length > 1 && Lo(s) > 1 && (o > 0 && r(Wo(s, o - 1)) || o < s.cells.length - 1 && r(Wo(s, o + 1)) || t > 0 && r(Wo(e[t - 1], o)) || t < e.length - 1 && r(Wo(e[t + 1], o)));
  },
      ml = function ml(e, t, o) {
    return N(o, function (o) {
      return o >= e.column && o <= Lo(t[0]) + e.column;
    });
  },
      dl = function dl(e, t, o, n, r) {
    (function (e, t, o, n) {
      t > 0 && t < e[0].cells.length && k(e, function (e) {
        var r = e.cells[t - 1];
        var s = 0;
        var l = n();

        for (; e.cells.length > t + s && o(r.element, e.cells[t + s].element);) {
          Bo(e, t + s, Ue(l, !0, e.cells[t + s].isLocked)), s++;
        }
      });
    })(t, e, r, n.cell);

    var s = rl(o, t),
        l = cl(o, s, n),
        a = rl(t, l),
        c = cl(t, a, n);
    return O(c, function (t, o) {
      return Eo(t, e, l[o].cells);
    });
  },
      ul = function ul(e, t, o, n, r) {
    (function (e, t, o, n) {
      var r = _o(e).rows;

      if (t > 0 && t < r.length) {
        var _e15 = function (e, t) {
          return z(e, function (e, o) {
            return R(e, function (e) {
              return t(e.element, o.element);
            }) ? e : e.concat([o]);
          }, []);
        }(r[t - 1].cells, o);

        k(_e15, function (e) {
          var s = y.none();

          for (var _l9 = t; _l9 < r.length; _l9++) {
            var _loop = function _loop(_t14) {
              var a = r[_l9],
                  c = Ao(a, _t14);
              o(c.element, e.element) && (s.isNone() && (s = y.some(n())), s.each(function (e) {
                Bo(a, _t14, Ue(e, !0, c.isLocked));
              }));
            };

            for (var _t14 = 0; _t14 < Lo(r[0]); _t14++) {
              _loop(_t14);
            }
          }
        });
      }
    })(t, e, r, n.cell);

    var s = Po(t),
        l = nl(t, o),
        a = _objectSpread({}, l, {
      colDelta: l.colDelta - s.length
    }),
        c = cl(t, a, n),
        _o18 = _o(c),
        i = _o18.cols,
        m = _o18.rows,
        d = Po(c),
        u = nl(o, t),
        f = _objectSpread({}, u, {
      colDelta: u.colDelta + d.length
    }),
        g = (p = n, w = d, O(o, function (e) {
      return z(w, function (t, o) {
        var n = sl(1, e, p, v)[0];
        return No(t, o, n);
      }, e);
    })),
        h = cl(g, f, n);

    var p, w;
    return [].concat(_toConsumableArray(i), _toConsumableArray(m.slice(0, e)), _toConsumableArray(h), _toConsumableArray(m.slice(e, m.length)));
  },
      fl = function fl(e, t, o, n, r) {
    var _o19 = _o(e),
        s = _o19.rows,
        l = _o19.cols,
        a = s.slice(0, t),
        c = s.slice(t);

    return [].concat(_toConsumableArray(l), _toConsumableArray(a), [function (e, t, o, n) {
      return Mo(e, function (e) {
        return n(e, o);
      }, t);
    }(s[o], function (e, o) {
      return t > 0 && t < s.length && n(Wo(s[t - 1], o), Wo(s[t], o)) ? Ao(s[t], o) : Ue(r(e.element, n), !0, e.isLocked);
    }, n, r)], _toConsumableArray(c));
  },
      gl = function gl(e, t, o, n, r) {
    return O(e, function (e) {
      var s = t > 0 && t < Lo(e) && n(Wo(e, t - 1), Wo(e, t)),
          l = function (e, t, o, n, r, s, l) {
        if ("colgroup" !== o && n) return Ao(e, t);
        {
          var _t15 = Ao(e, r);

          return Ue(l(_t15.element, s), !0, !1);
        }
      }(e, t, e.section, s, o, n, r);

      return No(e, t, l);
    });
  },
      hl = function hl(e, t, o, n) {
    return function (e, t, o, n) {
      return void 0 !== Wo(e[t], o) && t > 0 && n(Wo(e[t - 1], o), Wo(e[t], o));
    }(e, t, o, n) || function (e, t, o) {
      return t > 0 && o(Wo(e, t - 1), Wo(e, t));
    }(e[t], o, n);
  },
      pl = function pl(e, t, o, n) {
    var r = function r(e) {
      return function (e) {
        return "row" === e ? Nt(t) : Et(t);
      }(e) ? "".concat(e, "group") : e;
    };

    return e ? Cs(t) ? r(o) : null : n && Cs(t) ? r("row" === o ? "col" : "row") : null;
  },
      wl = function wl(e, t, o) {
    return Ue(o(e.element, t), !0, e.isLocked);
  },
      bl = function bl(e, t, o, n, r, s, l) {
    return O(e, function (e, a) {
      return function (e, c) {
        var i = e.cells,
            m = O(i, function (e, c) {
          if (function (e) {
            return R(t, function (t) {
              return o(e.element, t.element);
            });
          }(e)) {
            var _t16 = l(e, a, c) ? r(e, o, n) : e;

            return s(_t16, a, c).each(function (e) {
              var o, n;
              o = _t16.element, n = {
                scope: y.from(e)
              }, $(n, function (e, t) {
                e.fold(function () {
                  de(o, t);
                }, function (e) {
                  le(o.dom, t, e);
                });
              });
            }), _t16;
          }

          return e;
        });
        return Ge(e.element, m, e.section, e.isNew);
      }(e);
    });
  },
      vl = function vl(e, t, o) {
    return _(e, function (n, r) {
      return hl(e, r, t, o) ? [] : [Ao(n, t)];
    });
  },
      yl = function yl(e, t, o, n, r) {
    var s = _o(e).rows,
        l = _(t, function (e) {
      return vl(s, e, n);
    }),
        a = O(s, function (e) {
      return Ss(e.cells);
    }),
        c = function (e, t) {
      return M(t, f) && Ss(e) ? v : function (e, o, n) {
        return !("th" === Q(e.element) && t[o]);
      };
    }(l, a),
        i = function (e, t) {
      return function (o, n) {
        return y.some(pl(e, o.element, "row", t[n]));
      };
    }(o, a);

    return bl(e, l, n, r, wl, i, c);
  },
      xl = function xl(e, t, o, n) {
    var r = _o(e).rows,
        s = O(t, function (e) {
      return Ao(r[e.row], e.column);
    });

    return bl(e, s, o, n, wl, y.none, v);
  },
      Cl = function Cl(e) {
    if (!s(e)) throw new Error("cases must be an array");
    if (0 === e.length) throw new Error("there must be at least one case");
    var t = [],
        o = {};
    return k(e, function (n, r) {
      var l = q(n);
      if (1 !== l.length) throw new Error("one and only one name per case");
      var a = l[0],
          c = n[a];
      if (void 0 !== o[a]) throw new Error("duplicate key detected:" + a);
      if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
      if (!s(c)) throw new Error("case arguments must be an array");
      t.push(a), o[a] = function () {
        for (var _len4 = arguments.length, o = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          o[_key4] = arguments[_key4];
        }

        var n = o.length;
        if (n !== c.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + c.length + " (" + c + "), got " + n);
        return {
          fold: function fold() {
            for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              t[_key5] = arguments[_key5];
            }

            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
            return t[r].apply(null, o);
          },
          match: function match(e) {
            var n = q(e);
            if (t.length !== n.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + n.join(","));
            if (!M(t, function (e) {
              return T(n, e);
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
  },
      Sl = _objectSpread({}, Cl([{
    none: []
  }, {
    only: ["index"]
  }, {
    left: ["index", "next"]
  }, {
    middle: ["prev", "index", "next"]
  }, {
    right: ["prev", "index"]
  }])),
      Tl = function Tl(e, t, o) {
    var n = 0;

    for (var _r19 = e; _r19 < t; _r19++) {
      n += void 0 !== o[_r19] ? o[_r19] : 0;
    }

    return n;
  },
      Rl = function Rl(e, t) {
    var o = Yo(e);
    return O(o, function (e) {
      var o = Tl(e.row, e.row + e.rowspan, t);
      return {
        element: e.element,
        height: o,
        rowspan: e.rowspan
      };
    });
  },
      Dl = function Dl(e, t, o) {
    var n = function (e, t) {
      return Qo(e) ? function (e, t) {
        var o = Jo(e);
        return O(o, function (e, o) {
          return {
            element: e.element,
            width: t[o],
            colspan: e.colspan
          };
        });
      }(e, t) : function (e, t) {
        var o = Yo(e);
        return O(o, function (e) {
          var o = Tl(e.column, e.column + e.colspan, t);
          return {
            element: e.element,
            width: o,
            colspan: e.colspan
          };
        });
      }(e, t);
    }(e, t);

    k(n, function (e) {
      o.setElementWidth(e.element, e.width);
    });
  },
      Ol = function Ol(e, t, o, n, r) {
    var s = Vo(e),
        l = r.getCellDelta(t),
        a = r.getWidths(s, r),
        c = o === s.grid.columns - 1,
        i = n.clampTableDelta(a, o, l, r.minCellWidth(), c),
        m = function (e, t, o, n, r) {
      var s = e.slice(0),
          l = function (e, t) {
        return 0 === e.length ? Sl.none() : 1 === e.length ? Sl.only(0) : 0 === t ? Sl.left(0, 1) : t === e.length - 1 ? Sl.right(t - 1, t) : t > 0 && t < e.length - 1 ? Sl.middle(t - 1, t, t + 1) : Sl.none();
      }(e, t),
          a = u(O(s, u(0)));

      return l.fold(a, function (e) {
        return n.singleColumnWidth(s[e], o);
      }, function (e, t) {
        return r.calcLeftEdgeDeltas(s, e, t, o, n.minCellWidth(), n.isRelative);
      }, function (e, t, l) {
        return r.calcMiddleDeltas(s, e, t, l, o, n.minCellWidth(), n.isRelative);
      }, function (e, t) {
        return r.calcRightEdgeDeltas(s, e, t, o, n.minCellWidth(), n.isRelative);
      });
    }(a, o, i, r, n),
        d = O(m, function (e, t) {
      return e + a[t];
    });

    Dl(s, d, r), n.resizeTable(r.adjustTableWidth, i, c);
  },
      kl = function kl(e) {
    return z(e, function (e, t) {
      return R(e, function (e) {
        return e.column === t.column;
      }) ? e : e.concat([t]);
    }, []).sort(function (e, t) {
      return e.column - t.column;
    });
  },
      El = se("col"),
      Nl = se("colgroup"),
      Bl = function Bl(e) {
    return "tr" === Q(e) || Nl(e);
  },
      zl = function zl(e) {
    return {
      element: e,
      colspan: Ot(e, "colspan", 1),
      rowspan: Ot(e, "rowspan", 1)
    };
  },
      Al = function Al(e) {
    return me(e, "scope").map(function (e) {
      return e.substr(0, 3);
    });
  },
      Wl = function Wl(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : zl;

    var o = function o(_o20) {
      if (Bl(_o20)) return Nl((r = {
        element: _o20
      }).element) ? e.colgroup(r) : e.row(r);
      {
        var _r20 = _o20,
            _s10 = function (t) {
          return El(t.element) ? e.col(t) : e.cell(t);
        }(t(_r20));

        return n = y.some({
          item: _r20,
          replacement: _s10
        }), _s10;
      }
      var r;
    };

    var n = y.none();
    return {
      getOrInit: function getOrInit(e, t) {
        return n.fold(function () {
          return o(e);
        }, function (n) {
          return t(e, n.item) ? n.replacement : o(e);
        });
      }
    };
  },
      Ll = function Ll(e) {
    return function (t) {
      var o = [],
          n = function n(_n20) {
        var r = "td" === e ? {
          scope: null
        } : {},
            s = t.replace(_n20, e, r);
        return o.push({
          item: _n20,
          sub: s
        }), s;
      };

      return {
        replaceOrInit: function replaceOrInit(e, t) {
          if (Bl(e) || El(e)) return e;
          {
            var _r21 = e;
            return function (e, t) {
              return A(o, function (o) {
                return t(o.item, e);
              });
            }(_r21, t).fold(function () {
              return n(_r21);
            }, function (o) {
              return t(e, o.item) ? o.sub : n(_r21);
            });
          }
        }
      };
    };
  },
      _l = function _l(e) {
    return {
      unmerge: function unmerge(t) {
        var o = Al(t);
        return o.each(function (e) {
          return ae(t, "scope", e);
        }), function () {
          var n = e.cell({
            element: t,
            colspan: 1,
            rowspan: 1
          });
          return Dt(n, "width"), Dt(t, "width"), o.each(function (e) {
            return ae(n, "scope", e);
          }), n;
        };
      },
      merge: function merge(e) {
        return Dt(e[0], "width"), function () {
          var t = dt(O(e, Al));
          if (0 === t.length) return y.none();
          {
            var _e16 = t[0],
                _o21 = ["row", "col"];
            return R(t, function (t) {
              return t !== _e16 && T(_o21, t);
            }) ? y.none() : y.from(_e16);
          }
        }().fold(function () {
          return de(e[0], "scope");
        }, function (t) {
          return ae(e[0], "scope", t + "group");
        }), u(e[0]);
      }
    };
  },
      Ml = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "table", "thead", "tfoot", "tbody", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"],
      jl = Ir(),
      Il = function Il(e) {
    return function (e, t) {
      var o = e.property().name(t);
      return T(Ml, o);
    }(jl, e);
  },
      Pl = function Pl(e) {
    return function (e, t) {
      var o = e.property().name(t);
      return T(["ol", "ul"], o);
    }(jl, e);
  },
      Fl = function Fl(e) {
    var t = se("br"),
        o = function o(e) {
      return fr(e).bind(function (o) {
        var n = De(o).map(function (e) {
          return !!Il(e) || !!function (e, t) {
            return T(["br", "img", "hr", "input"], e.property().name(t));
          }(jl, e) && "img" !== Q(e);
        }).getOr(!1);
        return Se(o).map(function (r) {
          return !0 === n || "li" === Q(s = r) || st(s, Pl).isSome() || t(o) || Il(r) && !be(e, r) ? [] : [ge.fromTag("br")];
          var s;
        });
      }).getOr([]);
    },
        n = function () {
      var n = _(e, function (e) {
        var n = Oe(e);
        return function (e) {
          return M(e, function (e) {
            return t(e) || oe(e) && 0 === lr(e).trim().length;
          });
        }(n) ? [] : n.concat(o(e));
      });

      return 0 === n.length ? [ge.fromTag("br")] : n;
    }();

    _e(e[0]), Le(e[0], n);
  },
      Hl = function Hl(e) {
    return Ms(e, !0);
  },
      ql = function ql(e) {
    0 === Mt(e).length && Me(e);
  },
      Vl = function Vl(e, t) {
    return {
      grid: e,
      cursor: t
    };
  },
      $l = function $l(e, t, o) {
    var n = function (e, t, o) {
      var n, r;

      var s = _o(e).rows;

      return y.from(null === (r = null === (n = s[t]) || void 0 === n ? void 0 : n.cells[o]) || void 0 === r ? void 0 : r.element).filter(Hl).orThunk(function () {
        return function (e) {
          return H(e, function (e) {
            return H(e.cells, function (e) {
              var t = e.element;
              return ut(Hl(t), t);
            });
          });
        }(s);
      });
    }(e, t, o);

    return Vl(e, n);
  },
      Ul = function Ul(e) {
    return z(e, function (e, t) {
      return R(e, function (e) {
        return e.row === t.row;
      }) ? e : e.concat([t]);
    }, []).sort(function (e, t) {
      return e.row - t.row;
    });
  },
      Gl = function Gl(e, t) {
    return function (o, n, r, s, l) {
      var a = Ul(n),
          c = O(a, function (e) {
        return e.row;
      }),
          i = function (e, t, o, n, r, s, l) {
        var _o22 = _o(e),
            a = _o22.cols,
            c = _o22.rows,
            i = c[t[0]],
            m = _(t, function (e) {
          return function (e, t, o) {
            var n = e[t];
            return _(n.cells, function (n, r) {
              return hl(e, t, r, o) ? [] : [n];
            });
          }(c, e, r);
        }),
            d = O(i.cells, function (e, t) {
          return Ss(vl(c, t, r));
        }),
            u = _toConsumableArray(c);

        k(t, function (e) {
          u[e] = l.transformRow(c[e], o);
        });

        var g = [].concat(_toConsumableArray(a), u),
            h = function (e, t) {
          return M(t, f) && Ss(e.cells) ? v : function (e, o, n) {
            return !("th" === Q(e.element) && t[n]);
          };
        }(i, d),
            p = function (e, t) {
          return function (o, n, r) {
            return y.some(pl(e, o.element, "col", t[r]));
          };
        }(n, d);

        return bl(g, m, r, s, l.transformCell, p, h);
      }(o, c, e, t, r, s.replaceOrInit, l);

      return $l(i, n[0].row, n[0].column);
    };
  },
      Kl = Gl("thead", !0),
      Yl = Gl("tbody", !1),
      Jl = Gl("tfoot", !1),
      Ql = function Ql(e, t, o) {
    var n = function (e, t) {
      return Ht(e, function () {
        return t;
      });
    }(e, o.section),
        r = $o(n);

    return Vs(r, t, !0);
  },
      Xl = function Xl(e, t, o, n) {
    return function (e, t, o, n) {
      var r = $o(t),
          s = n.getWidths(r, n);
      Dl(r, s, n);
    }(0, t, 0, n.sizing);
  },
      Zl = function Zl(e, t, o, n) {
    return function (e, t, o, n, r) {
      var s = $o(t),
          l = n.getWidths(s, n),
          a = n.pixelWidth(),
          _r$calcRedestributedW = r.calcRedestributedWidths(l, a, o.pixelDelta, n.isRelative),
          c = _r$calcRedestributedW.newSizes,
          i = _r$calcRedestributedW.delta;

      Dl(s, c, n), n.adjustTableWidth(i);
    }(0, t, o, n.sizing, n.resize);
  },
      ea = function ea(e, t) {
    return R(t, function (e) {
      return 0 === e.column && e.isLocked;
    });
  },
      ta = function ta(e, t) {
    return R(t, function (t) {
      return t.column + t.colspan >= e.grid.columns && t.isLocked;
    });
  },
      oa = function oa(e, t) {
    var o = Zo(e),
        n = kl(t);
    return z(n, function (e, t) {
      return e + o[t.column].map(Oo).getOr(0);
    }, 0);
  },
      na = function na(e) {
    return function (t, o) {
      return Js(t, o).filter(function (o) {
        return !(e ? ea : ta)(t, o);
      }).map(function (e) {
        return {
          details: e,
          pixelDelta: oa(t, e)
        };
      });
    };
  },
      ra = function ra(e) {
    return function (t, o) {
      return Ys(t, o).filter(function (o) {
        return !(e ? ea : ta)(t, o.cells);
      });
    };
  },
      sa = Ll("th"),
      la = Ll("td"),
      aa = Ks(function (e, t, o, n) {
    var r = t[0].row,
        s = Ul(t),
        l = B(s, function (e, t) {
      return {
        grid: fl(e.grid, r, t.row + e.delta, o, n.getOrInit),
        delta: e.delta + 1
      };
    }, {
      grid: e,
      delta: 0
    }).grid;
    return $l(l, r, t[0].column);
  }, Js, d, d, Wl),
      ca = Ks(function (e, t, o, n) {
    var r = Ul(t),
        s = r[r.length - 1],
        l = s.row + s.rowspan,
        a = B(r, function (e, t) {
      return fl(e, l, t.row, o, n.getOrInit);
    }, e);
    return $l(a, l, t[0].column);
  }, Js, d, d, Wl),
      ia = Ks(function (e, t, o, n) {
    var r = t.details,
        s = kl(r),
        l = s[0].column,
        a = B(s, function (e, t) {
      return {
        grid: gl(e.grid, l, t.column + e.delta, o, n.getOrInit),
        delta: e.delta + 1
      };
    }, {
      grid: e,
      delta: 0
    }).grid;
    return $l(a, r[0].row, l);
  }, na(!0), Zl, d, Wl),
      ma = Ks(function (e, t, o, n) {
    var r = t.details,
        s = r[r.length - 1],
        l = s.column + s.colspan,
        a = kl(r),
        c = B(a, function (e, t) {
      return gl(e, l, t.column, o, n.getOrInit);
    }, e);
    return $l(c, r[0].row, l);
  }, na(!1), Zl, d, Wl),
      da = Ks(function (e, t, o, n) {
    var r = kl(t.details),
        s = function (e, t) {
      return _(e, function (e) {
        var o = e.cells,
            n = B(t, function (e, t) {
          return t >= 0 && t < e.length ? e.slice(0, t).concat(e.slice(t + 1)) : e;
        }, o);
        return n.length > 0 ? [Ge(e.element, n, e.section, e.isNew)] : [];
      });
    }(e, O(r, function (e) {
      return e.column;
    })),
        l = s.length > 0 ? s[0].cells.length - 1 : 0;

    return $l(s, r[0].row, Math.min(r[0].column, l));
  }, function (e, t) {
    return Qs(e, t).map(function (t) {
      return {
        details: t,
        pixelDelta: -oa(e, t)
      };
    });
  }, Zl, ql, Wl),
      ua = Ks(function (e, t, o, n) {
    var r = Ul(t),
        s = function (e, t, o) {
      var _o23 = _o(e),
          n = _o23.rows,
          r = _o23.cols;

      return [].concat(_toConsumableArray(r), _toConsumableArray(n.slice(0, t)), _toConsumableArray(n.slice(o + 1)));
    }(e, r[0].row, r[r.length - 1].row),
        l = s.length > 0 ? s.length - 1 : 0;

    return $l(s, Math.min(t[0].row, l), t[0].column);
  }, Js, d, ql, Wl),
      fa = Ks(function (e, t, o, n) {
    var r = kl(t),
        s = O(r, function (e) {
      return e.column;
    }),
        l = yl(e, s, !0, o, n.replaceOrInit);
    return $l(l, t[0].row, t[0].column);
  }, Qs, d, d, sa),
      ga = Ks(function (e, t, o, n) {
    var r = kl(t),
        s = O(r, function (e) {
      return e.column;
    }),
        l = yl(e, s, !1, o, n.replaceOrInit);
    return $l(l, t[0].row, t[0].column);
  }, Qs, d, d, la),
      ha = Ks(Kl, Qs, d, d, sa),
      pa = Ks(Yl, Qs, d, d, la),
      wa = Ks(Jl, Qs, d, d, la),
      ba = Ks(function (e, t, o, n) {
    var r = xl(e, t, o, n.replaceOrInit);
    return $l(r, t[0].row, t[0].column);
  }, Qs, d, d, sa),
      va = Ks(function (e, t, o, n) {
    var r = xl(e, t, o, n.replaceOrInit);
    return $l(r, t[0].row, t[0].column);
  }, Qs, d, d, la),
      ya = Ks(function (e, t, o, n) {
    var r = t.cells;
    Fl(r);

    var s = function (e, t, o, n) {
      var r = _o(e).rows;

      if (0 === r.length) return e;

      for (var _e17 = t.startRow; _e17 <= t.finishRow; _e17++) {
        for (var _o24 = t.startCol; _o24 <= t.finishCol; _o24++) {
          var _t17 = r[_e17],
              _s11 = Ao(_t17, _o24).isLocked;
          Bo(_t17, _o24, Ue(n(), !1, _s11));
        }
      }

      return e;
    }(e, t.bounds, 0, n.merge(r));

    return Vl(s, y.from(r[0]));
  }, function (e, t) {
    return function (e, t) {
      return t.mergable;
    }(0, t).filter(function (t) {
      return Xs(e, t.cells);
    });
  }, Xl, d, _l),
      xa = Ks(function (e, t, o, n) {
    var r = B(t, function (e, t) {
      return Zs(e, t, o, n.unmerge(t));
    }, e);
    return Vl(r, y.from(t[0]));
  }, function (e, t) {
    return function (e, t) {
      return t.unmergable;
    }(0, t).filter(function (t) {
      return Xs(e, t);
    });
  }, Xl, d, _l),
      Ca = Ks(function (e, t, o, n) {
    var r = function (e, t) {
      var o = Vo(e);
      return Vs(o, t, !0);
    }(t.clipboard, t.generators);

    var s, l;
    return function (e, t, o, n, r) {
      var s = Po(t),
          l = function (e, t, o) {
        var n = Lo(t[0]),
            r = _o(t).cols.length + e.row,
            s = D(n - e.column, function (t) {
          return t + e.column;
        });
        return {
          row: r,
          column: A(s, function (e) {
            return M(o, function (t) {
              return t !== e;
            });
          }).getOr(n - 1)
        };
      }(e, t, s),
          a = _o(o).rows,
          c = ml(l, a, s),
          i = function (e, t, o) {
        if (e.row >= t.length || e.column > Lo(t[0])) return ol.error("invalid start address out of table bounds, row: " + e.row + ", column: " + e.column);
        var n = t.slice(e.row),
            r = n[0].cells.slice(e.column),
            s = Lo(o[0]),
            l = o.length;
        return ol.value({
          rowDelta: n.length - l,
          colDelta: r.length - s
        });
      }(l, t, a);

      return i.map(function (e) {
        var o = _objectSpread({}, e, {
          colDelta: e.colDelta - c.length
        }),
            s = cl(t, o, n),
            i = Po(s),
            m = ml(l, a, i);

        return function (e, t, o, n, r, s) {
          var l = e.row,
              a = e.column,
              c = l + o.length,
              i = a + Lo(o[0]) + s.length,
              m = j(s, v);

          for (var _e18 = l; _e18 < c; _e18++) {
            var _s12 = 0;

            for (var _c4 = a; _c4 < i; _c4++) {
              if (m[_c4]) {
                _s12++;
                continue;
              }

              il(t, _e18, _c4, r) && Zs(t, Wo(t[_e18], _c4), r, n.cell);

              var _i4 = _c4 - a - _s12,
                  _d = Ao(o[_e18 - l], _i4),
                  _u = _d.element,
                  _f = n.replace(_u);

              Bo(t[_e18], _c4, Ue(_f, !0, _d.isLocked));
            }
          }

          return t;
        }(l, s, a, n, r, m);
      });
    }((s = t.row, l = t.column, {
      row: s,
      column: l
    }), e, r, t.generators, o).fold(function () {
      return Vl(e, y.some(t.element));
    }, function (e) {
      return $l(e, t.row, t.column);
    });
  }, function (e, t) {
    return _t(t.element).bind(function (o) {
      return Us(e, o).map(function (e) {
        return _objectSpread({}, e, {
          generators: t.generators,
          clipboard: t.clipboard
        });
      });
    });
  }, Xl, d, Wl),
      Sa = Ks(function (e, t, o, n) {
    var r = _o(e).rows,
        s = t.cells[0].column,
        l = r[t.cells[0].row],
        a = Ql(t.clipboard, t.generators, l),
        c = dl(s, e, a, t.generators, o);

    return $l(c, t.cells[0].row, t.cells[0].column);
  }, ra(!0), d, d, Wl),
      Ta = Ks(function (e, t, o, n) {
    var r = _o(e).rows,
        s = t.cells[t.cells.length - 1].column + t.cells[t.cells.length - 1].colspan,
        l = r[t.cells[0].row],
        a = Ql(t.clipboard, t.generators, l),
        c = dl(s, e, a, t.generators, o);

    return $l(c, t.cells[0].row, t.cells[0].column);
  }, ra(!1), d, d, Wl),
      Ra = Ks(function (e, t, o, n) {
    var r = _o(e).rows,
        s = t.cells[0].row,
        l = r[s],
        a = Ql(t.clipboard, t.generators, l),
        c = ul(s, e, a, t.generators, o);

    return $l(c, t.cells[0].row, t.cells[0].column);
  }, Ys, d, d, Wl),
      Da = Ks(function (e, t, o, n) {
    var r = _o(e).rows,
        s = t.cells[t.cells.length - 1].row + t.cells[t.cells.length - 1].rowspan,
        l = r[t.cells[0].row],
        a = Ql(t.clipboard, t.generators, l),
        c = ul(s, e, a, t.generators, o);

    return $l(c, t.cells[0].row, t.cells[0].column);
  }, Ys, d, d, Wl),
      Oa = function Oa(e, t) {
    var o = Vo(e);
    return Js(o, t).bind(function (e) {
      var t = e[e.length - 1],
          n = e[0].column,
          r = t.column + t.colspan,
          s = L(O(o.all, function (e) {
        return N(e.cells, function (e) {
          return e.column >= n && e.column < r;
        });
      }));
      return Ds(s);
    }).getOr("");
  },
      ka = function ka(e, t) {
    var o = Vo(e);
    return Js(o, t).bind(Ds).getOr("");
  },
      Ea = function Ea(e, t) {
    var o = Vo(e);
    return Js(o, t).bind(function (e) {
      var t = e[e.length - 1],
          n = e[0].row,
          r = t.row + t.rowspan;
      return function (e) {
        var t = O(e, function (e) {
          return Rs(e).type;
        }),
            o = T(t, "header"),
            n = T(t, "footer");

        if (o || n) {
          var _e19 = T(t, "body");

          return !o || _e19 || n ? o || _e19 || !n ? y.none() : y.some("footer") : y.some("header");
        }

        return y.some("body");
      }(o.all.slice(n, r));
    }).getOr("");
  },
      Na = function Na(e, t) {
    return e.dispatch("NewRow", {
      node: t
    });
  },
      Ba = function Ba(e, t) {
    return e.dispatch("NewCell", {
      node: t
    });
  },
      za = function za(e, t, o) {
    e.dispatch("TableModified", _objectSpread({}, o, {
      table: t
    }));
  },
      Aa = {
    structure: !1,
    style: !0
  },
      Wa = {
    structure: !0,
    style: !1
  },
      La = {
    structure: !0,
    style: !0
  },
      _a = function _a(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      Ma = "100%",
      ja = function ja(e) {
    var t;
    var o = e.dom,
        n = null !== (t = o.getParent(e.selection.getStart(), o.isBlock)) && void 0 !== t ? t : e.getBody();
    return ko(ge.fromDom(n)) + "px";
  },
      Ia = function Ia(e) {
    return y.from(e.options.get("table_clone_elements"));
  },
      Pa = _a("table_header_type"),
      Fa = _a("table_column_resizing"),
      Ha = function Ha(e) {
    return "preservetable" === Fa(e);
  },
      qa = function qa(e) {
    return "resizetable" === Fa(e);
  },
      Va = _a("table_sizing_mode"),
      $a = function $a(e) {
    return "relative" === Va(e);
  },
      Ua = function Ua(e) {
    return "fixed" === Va(e);
  },
      Ga = function Ga(e) {
    return "responsive" === Va(e);
  },
      Ka = _a("table_resize_bars"),
      Ya = _a("table_style_by_css"),
      Ja = function Ja(e) {
    var t = e.options,
        o = t.get("table_default_attributes");
    return t.isSet("table_default_attributes") ? o : function (e, t) {
      return Ga(e) || Ya(e) ? t : Ua(e) ? _objectSpread({}, t, {
        width: ja(e)
      }) : _objectSpread({}, t, {
        width: Ma
      });
    }(e, o);
  },
      Qa = _a("table_use_colgroups"),
      Xa = function Xa(e, t) {
    return $a(e) ? nr(t) : Ua(e) ? or(t) : tr(t);
  },
      Za = function Za(e, t, o) {
    var n = function n(e) {
      return "table" === Q(Tr(e));
    },
        r = Ia(e),
        s = qa(e) ? d : fs,
        l = function l(t) {
      switch (Pa(e)) {
        case "section":
          return zs();

        case "sectionCells":
          return As();

        case "cells":
          return Ws();

        default:
          return function (e, t) {
            var o;

            switch ((o = Vo(e), H(o.all, function (e) {
              var t = Rs(e);
              return "header" === t.type ? y.from(t.subType) : y.none();
            })).getOr(t)) {
              case "section":
                return Es();

              case "sectionCells":
                return Ns();

              case "cells":
                return Bs();
            }
          }(t, "section");
      }
    },
        a = function a(n, s, _a8, c) {
      return function (i, m) {
        var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        Dr(i);
        var u = ge.fromDom(e.getDoc()),
            f = Cr(_a8, u, r),
            g = {
          sizing: Xa(e, i),
          resize: qa(e) ? vs() : ys(),
          section: l(i)
        };
        return s(i) ? n(i, m, f, g).bind(function (n) {
          t.refresh(i.dom), k(n.newRows, function (t) {
            Na(e, t.dom);
          }), k(n.newCells, function (t) {
            Ba(e, t.dom);
          });

          var r = function (t, n) {
            return n.cursor.fold(function () {
              var n = Mt(t);
              return P(n).filter(Xe).map(function (n) {
                o.clearSelectedCells(t.dom);
                var r = e.dom.createRng();
                return r.selectNode(n.dom), e.selection.setRng(r), ae(n, "data-mce-selected", "1"), r;
              });
            }, function (n) {
              var r = ds(us, n),
                  s = e.dom.createRng();
              return s.setStart(r.element.dom, r.offset), s.setEnd(r.element.dom, r.offset), e.selection.setRng(s), o.clearSelectedCells(t.dom), y.some(s);
            });
          }(i, n);

          return Xe(i) && (Dr(i), d || za(e, i.dom, c)), r.map(function (e) {
            return {
              rng: e,
              effect: c
            };
          });
        }) : y.none();
      };
    },
        c = a(ua, function (t) {
      return !1 === n(e) || xs(t).rows > 1;
    }, d, Wa),
        i = a(da, function (t) {
      return !1 === n(e) || xs(t).columns > 1;
    }, d, Wa);

    return {
      deleteRow: c,
      deleteColumn: i,
      insertRowsBefore: a(aa, v, d, Wa),
      insertRowsAfter: a(ca, v, d, Wa),
      insertColumnsBefore: a(ia, v, s, Wa),
      insertColumnsAfter: a(ma, v, s, Wa),
      mergeCells: a(ya, v, d, Wa),
      unmergeCells: a(xa, v, d, Wa),
      pasteColsBefore: a(Sa, v, d, Wa),
      pasteColsAfter: a(Ta, v, d, Wa),
      pasteRowsBefore: a(Ra, v, d, Wa),
      pasteRowsAfter: a(Da, v, d, Wa),
      pasteCells: a(Ca, v, d, La),
      makeCellsHeader: a(ba, v, d, Wa),
      unmakeCellsHeader: a(va, v, d, Wa),
      makeColumnsHeader: a(fa, v, d, Wa),
      unmakeColumnsHeader: a(ga, v, d, Wa),
      makeRowsHeader: a(ha, v, d, Wa),
      makeRowsBody: a(pa, v, d, Wa),
      makeRowsFooter: a(wa, v, d, Wa),
      getTableRowType: Ea,
      getTableCellType: ka,
      getTableColType: Oa
    };
  },
      ec = function ec(e, t, o) {
    var n = Ot(e, t, 1);
    1 === o || n <= 1 ? de(e, t) : ae(e, t, Math.min(o, n));
  },
      tc = function tc(e, t) {
    return function (o) {
      var n = o.column + o.colspan - 1,
          r = o.column;
      return n >= e && r < t;
    };
  },
      oc = Cl([{
    invalid: ["raw"]
  }, {
    pixels: ["value"]
  }, {
    percent: ["value"]
  }]),
      nc = function nc(e, t, o) {
    var n = o.substring(0, o.length - e.length),
        r = parseFloat(n);
    return n === r.toString() ? t(r) : oc.invalid(o);
  },
      rc = _objectSpread({}, oc, {
    from: function from(e) {
      return pt(e, "%") ? nc("%", oc.percent, e) : pt(e, "px") ? nc("px", oc.pixels, e) : oc.invalid(e);
    }
  }),
      sc = function sc(e, t, o) {
    var n = rc.from(o),
        r = M(e, function (e) {
      return "0px" === e;
    }) ? function (e, t) {
      var o = e.fold(function () {
        return u("");
      }, function (e) {
        return u(e / t + "px");
      }, function () {
        return u(100 / t + "%");
      });
      return D(t, o);
    }(n, e.length) : function (e, t, o) {
      return e.fold(function () {
        return t;
      }, function (e) {
        return function (e, t, o) {
          var n = o / t;
          return O(e, function (e) {
            return rc.from(e).fold(function () {
              return e;
            }, function (e) {
              return e * n + "px";
            }, function (e) {
              return e / 100 * o + "px";
            });
          });
        }(t, o, e);
      }, function (e) {
        return function (e, t) {
          return O(e, function (e) {
            return rc.from(e).fold(function () {
              return e;
            }, function (e) {
              return e / t * 100 + "%";
            }, function (e) {
              return e + "%";
            });
          });
        }(t, o);
      });
    }(n, e, t);
    return cc(r);
  },
      lc = function lc(e, t) {
    return 0 === e.length ? t : B(e, function (e, t) {
      return rc.from(t).fold(u(0), f, f) + e;
    }, 0);
  },
      ac = function ac(e, t) {
    return rc.from(e).fold(u(e), function (e) {
      return e + t + "px";
    }, function (e) {
      return e + t + "%";
    });
  },
      cc = function cc(e) {
    if (0 === e.length) return e;
    var t = B(e, function (e, t) {
      var o = rc.from(t).fold(function () {
        return {
          value: t,
          remainder: 0
        };
      }, function (e) {
        return function (e, t) {
          var o = Math.floor(e);
          return {
            value: o + "px",
            remainder: e - o
          };
        }(e);
      }, function (e) {
        return {
          value: e + "%",
          remainder: 0
        };
      });
      return {
        output: [o.value].concat(e.output),
        remainder: e.remainder + o.remainder
      };
    }, {
      output: [],
      remainder: 0
    }),
        o = t.output;
    return o.slice(0, o.length - 1).concat([ac(o[o.length - 1], Math.round(t.remainder))]);
  },
      ic = rc.from,
      mc = function mc(e) {
    return ic(e).fold(u("px"), u("px"), u("%"));
  },
      dc = function dc(e, t, o) {
    var n = Vo(e),
        r = n.all,
        s = Yo(n),
        l = Jo(n);
    t.each(function (t) {
      var o = mc(t),
          r = Do(e),
          a = function (e, t) {
        return Kn(e, t, $n, Yn);
      }(n, e),
          c = sc(a, r, t);

      Qo(n) ? function (e, t, o) {
        k(t, function (t, n) {
          var r = lc([e[n]], zt());
          xt(t.element, "width", r + o);
        });
      }(c, l, o) : function (e, t, o) {
        k(t, function (t) {
          var n = e.slice(t.column, t.colspan + t.column),
              r = lc(n, zt());
          xt(t.element, "width", r + o);
        });
      }(c, s, o), xt(e, "width", t);
    }), o.each(function (t) {
      var o = mc(t),
          l = sn(e),
          a = function (e, t, o) {
        return Qn(e, t, o, Un, Yn);
      }(n, e, Sn);

      (function (e, t, o, n) {
        k(o, function (t) {
          var o = e.slice(t.row, t.rowspan + t.row),
              r = lc(o, At());
          xt(t.element, "height", r + n);
        }), k(t, function (t, o) {
          xt(t.element, "height", e[o]);
        });
      })(sc(a, l, t), r, s, o), xt(e, "height", t);
    });
  },
      uc = function uc(e) {
    return Mn(e).exists(function (e) {
      return kn.test(e);
    });
  },
      fc = function fc(e) {
    return Mn(e).exists(function (e) {
      return En.test(e);
    });
  },
      gc = function gc(e) {
    return Mn(e).isNone();
  },
      hc = function hc(e) {
    de(e, "width");
  },
      pc = function pc(e) {
    var t = Hn(e);
    dc(e, y.some(t), y.none()), hc(e);
  },
      wc = function wc(e) {
    var t = function (e) {
      return Do(e) + "px";
    }(e);

    dc(e, y.some(t), y.none()), hc(e);
  },
      bc = function bc(e) {
    Dt(e, "width");
    var t = jt(e),
        o = t.length > 0 ? t : Mt(e);
    k(o, function (e) {
      Dt(e, "width"), hc(e);
    }), hc(e);
  },
      vc = {
    styles: {
      "border-collapse": "collapse",
      width: "100%"
    },
    attributes: {
      border: "1"
    },
    colGroups: !1
  },
      yc = function yc(e, t, o, n) {
    return D(e, function (e) {
      return function (e, t, o, n) {
        var r = ge.fromTag("tr");

        for (var _s13 = 0; _s13 < e; _s13++) {
          var _e20 = ge.fromTag(n < t || _s13 < o ? "th" : "td");

          _s13 < o && ae(_e20, "scope", "row"), n < t && ae(_e20, "scope", "col"), ze(_e20, ge.fromTag("br")), ze(r, _e20);
        }

        return r;
      }(t, o, n, e);
    });
  },
      xc = function xc(e, t) {
    e.selection.select(t.dom, !0), e.selection.collapse(!0);
  },
      Cc = function Cc(e, t, o, r, s) {
    var l = function (e) {
      var t = e.options,
          o = t.get("table_default_styles");
      return t.isSet("table_default_styles") ? o : function (e, t) {
        return Ga(e) || !Ya(e) ? t : Ua(e) ? _objectSpread({}, t, {
          width: ja(e)
        }) : _objectSpread({}, t, {
          width: Ma
        });
      }(e, o);
    }(e),
        a = {
      styles: l,
      attributes: Ja(e),
      colGroups: Qa(e)
    };

    return e.undoManager.ignore(function () {
      var n = function (e, t, o, n, r) {
        var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : vc;
        var l = ge.fromTag("table"),
            a = "cells" !== r;
        Ct(l, s.styles), ce(l, s.attributes), s.colGroups && ze(l, function (e) {
          var t = ge.fromTag("colgroup");
          return D(e, function () {
            return ze(t, ge.fromTag("col"));
          }), t;
        }(t));
        var c = Math.min(e, o);

        if (a && o > 0) {
          var _e21 = ge.fromTag("thead");

          ze(l, _e21);

          var _s14 = yc(o, t, "sectionCells" === r ? c : 0, n);

          Le(_e21, _s14);
        }

        var i = ge.fromTag("tbody");
        ze(l, i);
        var m = yc(a ? e - c : e, t, a ? 0 : o, n);
        return Le(i, m), l;
      }(o, t, s, r, Pa(e), a);

      ae(n, "data-mce-id", "__mce");

      var l = function (e) {
        var t = ge.fromTag("div"),
            o = ge.fromDom(e.dom.cloneNode(!0));
        return ze(t, o), function (e) {
          return e.dom.innerHTML;
        }(t);
      }(n);

      e.insertContent(l), e.addVisual();
    }), ct(Tr(e), 'table[data-mce-id="__mce"]').map(function (t) {
      return Ua(e) ? wc(t) : Ga(e) ? bc(t) : ($a(e) || function (e) {
        return n(e) && -1 !== e.indexOf("%");
      }(l.width)) && pc(t), Dr(t), de(t, "data-mce-id"), function (e, t) {
        k(nt(t, "tr"), function (t) {
          Na(e, t.dom), k(nt(t, "th,td"), function (t) {
            Ba(e, t.dom);
          });
        });
      }(e, t), function (e, t) {
        ct(t, "td,th").each(h(xc, e));
      }(e, t), t.dom;
    }).getOr(null);
  };

  var Sc = tinymce.util.Tools.resolve("tinymce.FakeClipboard");

  var Tc = "x-tinymce/dom-table-",
      Rc = Tc + "rows",
      Dc = Tc + "columns",
      Oc = function Oc(e) {
    var t = Sc.FakeClipboardItem(e);
    Sc.write([t]);
  },
      kc = function kc(e) {
    var t;
    var o = null !== (t = Sc.read()) && void 0 !== t ? t : [];
    return H(o, function (t) {
      return y.from(t.getType(e));
    });
  },
      Ec = function Ec(e) {
    kc(e).isSome() && Sc.clear();
  },
      Nc = function Nc(e) {
    e.fold(zc, function (e) {
      return Oc(_defineProperty({}, Rc, e));
    });
  },
      Bc = function Bc() {
    return kc(Rc);
  },
      zc = function zc() {
    return Ec(Rc);
  },
      Ac = function Ac(e) {
    e.fold(Lc, function (e) {
      return Oc(_defineProperty({}, Dc, e));
    });
  },
      Wc = function Wc() {
    return kc(Dc);
  },
      Lc = function Lc() {
    return Ec(Dc);
  },
      _c = function _c(e) {
    return ns(Or(e), Rr(e));
  },
      Mc = function Mc(e, t) {
    var o = Rr(e),
        s = function s(e) {
      return It(e, o);
    },
        l = function l(t) {
      return function (e) {
        return rs(Or(e), Rr(e));
      }(e).bind(function (e) {
        return s(e).map(function (o) {
          return t(o, e);
        });
      });
    },
        a = function a(t) {
      e.focus();
    },
        c = function c(t) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return l(function (n, r) {
        var s = ts(ss(e), n, r);
        t(n, s, o).each(a);
      });
    },
        i = function i() {
      return l(function (t, o) {
        return function (e, t, o) {
          var n = Vo(e);
          return Js(n, t).bind(function (e) {
            var t = Vs(n, o, !1),
                r = _o(t).rows.slice(e[0].row, e[e.length - 1].row + e[e.length - 1].rowspan),
                s = _(r, function (e) {
              var t = N(e.cells, function (e) {
                return !e.isLocked;
              });
              return t.length > 0 ? [_objectSpread({}, e, {
                cells: t
              })] : [];
            }),
                l = $s(s);

            return ut(l.length > 0, l);
          }).map(function (e) {
            return O(e, function (e) {
              var t = Pe(e.element);
              return k(e.cells, function (e) {
                var o = Fe(e.element);
                Is(o, "colspan", e.colspan, 1), Is(o, "rowspan", e.rowspan, 1), ze(t, o);
              }), t;
            });
          });
        }(t, ts(ss(e), t, o), Cr(d, ge.fromDom(e.getDoc()), y.none()));
      });
    },
        u = function u() {
      return l(function (t, o) {
        return function (e, t) {
          var o = Vo(e);
          return Qs(o, t).map(function (e) {
            var t = e[e.length - 1],
                n = e[0].column,
                r = t.column + t.colspan,
                s = function (e, t, o) {
              if (Qo(e)) {
                var _n21 = N(Jo(e), tc(t, o)),
                    _r22 = O(_n21, function (e) {
                  var n = Fe(e.element);
                  return ec(n, "span", o - t), n;
                }),
                    _s15 = ge.fromTag("colgroup");

                return Le(_s15, _r22), [_s15];
              }

              return [];
            }(o, n, r),
                l = function (e, t, o) {
              return O(e.all, function (e) {
                var n = N(e.cells, tc(t, o)),
                    r = O(n, function (e) {
                  var n = Fe(e.element);
                  return ec(n, "colspan", o - t), n;
                }),
                    s = ge.fromTag("tr");
                return Le(s, r), s;
              });
            }(o, n, r);

            return [].concat(_toConsumableArray(s), _toConsumableArray(l));
          });
        }(t, ts(ss(e), t, o));
      });
    },
        f = function f(t, o) {
      return o().each(function (o) {
        var n = O(o, function (e) {
          return Fe(e);
        });
        l(function (o, r) {
          var s = Sr(ge.fromDom(e.getDoc())),
              l = function (e, t, o, n) {
            return {
              selection: Qr(e),
              clipboard: o,
              generators: n
            };
          }(ss(e), 0, n, s);

          t(o, l).each(a);
        });
      });
    },
        g = function g(e) {
      return function (t, o) {
        return function (e, t) {
          return J(e, t) ? y.from(e.type) : y.none();
        }(o, "type").each(function (t) {
          c(e(t), o.no_events);
        });
      };
    };

    $({
      mceTableSplitCells: function mceTableSplitCells() {
        return c(t.unmergeCells);
      },
      mceTableMergeCells: function mceTableMergeCells() {
        return c(t.mergeCells);
      },
      mceTableInsertRowBefore: function mceTableInsertRowBefore() {
        return c(t.insertRowsBefore);
      },
      mceTableInsertRowAfter: function mceTableInsertRowAfter() {
        return c(t.insertRowsAfter);
      },
      mceTableInsertColBefore: function mceTableInsertColBefore() {
        return c(t.insertColumnsBefore);
      },
      mceTableInsertColAfter: function mceTableInsertColAfter() {
        return c(t.insertColumnsAfter);
      },
      mceTableDeleteCol: function mceTableDeleteCol() {
        return c(t.deleteColumn);
      },
      mceTableDeleteRow: function mceTableDeleteRow() {
        return c(t.deleteRow);
      },
      mceTableCutCol: function mceTableCutCol() {
        return u().each(function (e) {
          Ac(e), c(t.deleteColumn);
        });
      },
      mceTableCutRow: function mceTableCutRow() {
        return i().each(function (e) {
          Nc(e), c(t.deleteRow);
        });
      },
      mceTableCopyCol: function mceTableCopyCol() {
        return u().each(function (e) {
          return Ac(e);
        });
      },
      mceTableCopyRow: function mceTableCopyRow() {
        return i().each(function (e) {
          return Nc(e);
        });
      },
      mceTablePasteColBefore: function mceTablePasteColBefore() {
        return f(t.pasteColsBefore, Wc);
      },
      mceTablePasteColAfter: function mceTablePasteColAfter() {
        return f(t.pasteColsAfter, Wc);
      },
      mceTablePasteRowBefore: function mceTablePasteRowBefore() {
        return f(t.pasteRowsBefore, Bc);
      },
      mceTablePasteRowAfter: function mceTablePasteRowAfter() {
        return f(t.pasteRowsAfter, Bc);
      },
      mceTableDelete: function mceTableDelete() {
        return _c(e).each(function (t) {
          It(t, o).filter(p(o)).each(function (t) {
            var o = ge.fromText("");
            if (Ne(t, o), Me(t), e.dom.isEmpty(e.getBody())) e.setContent(""), e.selection.setCursorLocation();else {
              var _t18 = e.dom.createRng();

              _t18.setStart(o.dom, 0), _t18.setEnd(o.dom, 0), e.selection.setRng(_t18), e.nodeChanged();
            }
          });
        });
      },
      mceTableCellToggleClass: function mceTableCellToggleClass(t, o) {
        l(function (t) {
          var n = ss(e),
              r = M(n, function (t) {
            return e.formatter.match("tablecellclass", {
              value: o
            }, t.dom);
          }),
              s = r ? e.formatter.remove : e.formatter.apply;
          k(n, function (e) {
            return s("tablecellclass", {
              value: o
            }, e.dom);
          }), za(e, t.dom, Aa);
        });
      },
      mceTableToggleClass: function mceTableToggleClass(t, o) {
        l(function (t) {
          e.formatter.toggle("tableclass", {
            value: o
          }, t.dom), za(e, t.dom, Aa);
        });
      },
      mceTableToggleCaption: function mceTableToggleCaption() {
        _c(e).each(function (t) {
          It(t, o).each(function (o) {
            at(o, "caption").fold(function () {
              var t = ge.fromTag("caption");
              ze(t, ge.fromText("Caption")), function (e, t, o) {
                ke(e, 0).fold(function () {
                  ze(e, t);
                }, function (e) {
                  Ee(e, t);
                });
              }(o, t), e.selection.setCursorLocation(t.dom, 0);
            }, function (n) {
              se("caption")(t) && we("td", o).each(function (t) {
                return e.selection.setCursorLocation(t.dom, 0);
              }), Me(n);
            }), za(e, o.dom, Wa);
          });
        });
      },
      mceTableSizingMode: function mceTableSizingMode(t, n) {
        return function (t) {
          return _c(e).each(function (n) {
            Ga(e) || Ua(e) || $a(e) || It(n, o).each(function (o) {
              "relative" !== t || uc(o) ? "fixed" !== t || fc(o) ? "responsive" !== t || gc(o) || bc(o) : wc(o) : pc(o), Dr(o), za(e, o.dom, Wa);
            });
          });
        }(n);
      },
      mceTableCellType: g(function (e) {
        return "th" === e ? t.makeCellsHeader : t.unmakeCellsHeader;
      }),
      mceTableColType: g(function (e) {
        return "th" === e ? t.makeColumnsHeader : t.unmakeColumnsHeader;
      }),
      mceTableRowType: g(function (e) {
        switch (e) {
          case "header":
            return t.makeRowsHeader;

          case "footer":
            return t.makeRowsFooter;

          default:
            return t.makeRowsBody;
        }
      })
    }, function (t, o) {
      return e.addCommand(o, t);
    }), e.addCommand("mceInsertTable", function (t, o) {
      (function (e, t, o) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var r = function r(e) {
          return m(e) && e > 0;
        };

        if (r(t) && r(o)) {
          var _r23 = n.headerRows || 0,
              _s16 = n.headerColumns || 0;

          return Cc(e, o, t, _s16, _r23);
        }

        console.error("Invalid values for mceInsertTable - rows and columns values are required to insert a table.");
      })(e, o.rows, o.columns, o.options);
    }), e.addCommand("mceTableApplyCellStyle", function (t, o) {
      var l = function l(e) {
        return "tablecell" + e.toLowerCase().replace("-", "");
      };

      if (!r(o)) return;
      var a = ss(e);
      if (0 === a.length) return;

      var c = function (e, t) {
        var o = {};
        return function (e, t, o, n) {
          $(e, function (e, r) {
            (t(e, r) ? o : n)(e, r);
          });
        }(e, t, function (e) {
          return function (t, o) {
            e[o] = t;
          };
        }(o), d), o;
      }(o, function (t, o) {
        return e.formatter.has(l(o)) && n(t);
      });

      (function (e) {
        for (var _t19 in e) {
          if (V.call(e, _t19)) return !1;
        }

        return !0;
      })(c) || ($(c, function (t, o) {
        var n = l(o);
        k(a, function (o) {
          "" === t ? e.formatter.remove(n, {
            value: null
          }, o.dom, !0) : e.formatter.apply(n, {
            value: t
          }, o.dom);
        });
      }), s(a[0]).each(function (t) {
        return za(e, t.dom, Aa);
      }));
    });
  },
      jc = Cl([{
    before: ["element"]
  }, {
    on: ["element", "offset"]
  }, {
    after: ["element"]
  }]),
      Ic = {
    before: jc.before,
    on: jc.on,
    after: jc.after,
    cata: function cata(e, t, o, n) {
      return e.fold(t, o, n);
    },
    getStart: function getStart(e) {
      return e.fold(f, f, f);
    }
  },
      Pc = function Pc(e, t) {
    return {
      selection: e,
      kill: t
    };
  },
      Fc = function Fc(e, t) {
    var o = e.document.createRange();
    return o.selectNode(t.dom), o;
  },
      Hc = function Hc(e, t) {
    var o = e.document.createRange();
    return qc(o, t), o;
  },
      qc = function qc(e, t) {
    return e.selectNodeContents(t.dom);
  },
      Vc = function Vc(e, t, o) {
    var n = e.document.createRange();
    var r;
    return r = n, t.fold(function (e) {
      r.setStartBefore(e.dom);
    }, function (e, t) {
      r.setStart(e.dom, t);
    }, function (e) {
      r.setStartAfter(e.dom);
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
      $c = function $c(e, t, o, n, r) {
    var s = e.document.createRange();
    return s.setStart(t.dom, o), s.setEnd(n.dom, r), s;
  },
      Uc = function Uc(e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      width: e.width,
      height: e.height
    };
  },
      Gc = Cl([{
    ltr: ["start", "soffset", "finish", "foffset"]
  }, {
    rtl: ["start", "soffset", "finish", "foffset"]
  }]),
      Kc = function Kc(e, t, o) {
    return t(ge.fromDom(o.startContainer), o.startOffset, ge.fromDom(o.endContainer), o.endOffset);
  },
      Yc = function Yc(e, t) {
    var o = function (e, t) {
      return t.match({
        domRange: function domRange(e) {
          return {
            ltr: u(e),
            rtl: y.none
          };
        },
        relative: function relative(t, o) {
          return {
            ltr: $t(function () {
              return Vc(e, t, o);
            }),
            rtl: $t(function () {
              return y.some(Vc(e, o, t));
            })
          };
        },
        exact: function exact(t, o, n, r) {
          return {
            ltr: $t(function () {
              return $c(e, t, o, n, r);
            }),
            rtl: $t(function () {
              return y.some($c(e, n, r, t, o));
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
        return Gc.rtl(ge.fromDom(e.endContainer), e.endOffset, ge.fromDom(e.startContainer), e.startOffset);
      }).getOrThunk(function () {
        return Kc(0, Gc.ltr, o);
      }) : Kc(0, Gc.ltr, o);
    }(0, o);
  },
      Jc = function Jc(e, t) {
    return Yc(e, t).match({
      ltr: function ltr(t, o, n, r) {
        var s = e.document.createRange();
        return s.setStart(t.dom, o), s.setEnd(n.dom, r), s;
      },
      rtl: function rtl(t, o, n, r) {
        var s = e.document.createRange();
        return s.setStart(n.dom, r), s.setEnd(t.dom, o), s;
      }
    });
  };

  Gc.ltr, Gc.rtl;

  var Qc = function Qc(e, t, o, n) {
    return {
      start: e,
      soffset: t,
      finish: o,
      foffset: n
    };
  },
      Xc = function Xc(e, t, o, n) {
    return {
      start: Ic.on(e, t),
      finish: Ic.on(o, n)
    };
  },
      Zc = function Zc(e, t) {
    var o = Jc(e, t);
    return Qc(ge.fromDom(o.startContainer), o.startOffset, ge.fromDom(o.endContainer), o.endOffset);
  },
      ei = Xc,
      ti = function ti(e, t, o, n, r) {
    return be(o, n) ? y.none() : $r(o, n, t).bind(function (t) {
      var n = t.boxes.getOr([]);
      return n.length > 1 ? (r(e, n, t.start, t.finish), y.some(Pc(y.some(ei(o, 0, o, ir(o))), !0))) : y.none();
    });
  },
      oi = function oi(e, t) {
    return {
      item: e,
      mode: t
    };
  },
      ni = function ni(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ri;
    return e.property().parent(t).map(function (e) {
      return oi(e, n);
    });
  },
      ri = function ri(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : si;
    return o.sibling(e, t).map(function (e) {
      return oi(e, n);
    });
  },
      si = function si(e, t, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : si;
    var r = e.property().children(t);
    return o.first(r).map(function (e) {
      return oi(e, n);
    });
  },
      li = [{
    current: ni,
    next: ri,
    fallback: y.none()
  }, {
    current: ri,
    next: si,
    fallback: y.some(ni)
  }, {
    current: si,
    next: si,
    fallback: y.some(ri)
  }],
      ai = function ai(e, t, o, n) {
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : li;
    return A(r, function (e) {
      return e.current === o;
    }).bind(function (o) {
      return o.current(e, t, n, o.next).orThunk(function () {
        return o.fallback.bind(function (o) {
          return ai(e, t, o, n);
        });
      });
    });
  },
      ci = function ci(e, t, o, n, r, s) {
    return ai(e, t, n, r).bind(function (t) {
      return s(t.item) ? y.none() : o(t.item) ? y.some(t.item) : ci(e, t.item, o, t.mode, r, s);
    });
  },
      ii = function ii(e) {
    return function (t) {
      return 0 === e.property().children(t).length;
    };
  },
      mi = function mi(e, t, o, n) {
    return ci(e, t, o, ri, {
      sibling: function sibling(e, t) {
        return e.query().prevSibling(t);
      },
      first: function first(e) {
        return e.length > 0 ? y.some(e[e.length - 1]) : y.none();
      }
    }, n);
  },
      di = function di(e, t, o, n) {
    return ci(e, t, o, ri, {
      sibling: function sibling(e, t) {
        return e.query().nextSibling(t);
      },
      first: function first(e) {
        return e.length > 0 ? y.some(e[0]) : y.none();
      }
    }, n);
  },
      ui = Ir(),
      fi = function fi(e, t) {
    return function (e, t, o) {
      return mi(e, t, ii(e), o);
    }(ui, e, t);
  },
      gi = function gi(e, t) {
    return function (e, t, o) {
      return di(e, t, ii(e), o);
    }(ui, e, t);
  },
      hi = Cl([{
    none: ["message"]
  }, {
    success: []
  }, {
    failedUp: ["cell"]
  }, {
    failedDown: ["cell"]
  }]),
      pi = function pi(e) {
    return it(e, "tr");
  },
      wi = _objectSpread({}, hi, {
    verify: function verify(e, t, o, n, r, s, l) {
      return it(n, "td,th", l).bind(function (o) {
        return it(t, "td,th", l).map(function (t) {
          return be(o, t) ? be(n, o) && ir(o) === r ? s(t) : hi.none("in same cell") : qr(pi, [o, t]).fold(function () {
            return function (e, t, o) {
              var n = e.getRect(t),
                  r = e.getRect(o);
              return r.right > n.left && r.left < n.right;
            }(e, t, o) ? hi.success() : s(t);
          }, function (e) {
            return s(t);
          });
        });
      }).getOr(hi.none("default"));
    },
    cata: function cata(e, t, o, n, r) {
      return e.fold(t, o, n, r);
    }
  }),
      bi = se("br"),
      vi = function vi(e, t, o) {
    return t(e, o).bind(function (e) {
      return oe(e) && 0 === lr(e).trim().length ? vi(e, t, o) : y.some(e);
    });
  },
      yi = function yi(e, t, o, n) {
    return function (e, t) {
      return ke(e, t).filter(bi).orThunk(function () {
        return ke(e, t - 1).filter(bi);
      });
    }(t, o).bind(function (t) {
      return n.traverse(t).fold(function () {
        return vi(t, n.gather, e).map(n.relative);
      }, function (e) {
        return function (e) {
          return Se(e).bind(function (t) {
            var o = Oe(t);
            return function (e, t) {
              return W(e, h(be, t));
            }(o, e).map(function (n) {
              return function (e, t, o, n) {
                return {
                  parent: e,
                  children: t,
                  element: o,
                  index: n
                };
              }(t, o, e, n);
            });
          });
        }(e).map(function (e) {
          return Ic.on(e.parent, e.index);
        });
      });
    });
  },
      xi = function xi(e, t) {
    return {
      left: e.left,
      top: e.top + t,
      right: e.right,
      bottom: e.bottom + t
    };
  },
      Ci = function Ci(e, t) {
    return {
      left: e.left,
      top: e.top - t,
      right: e.right,
      bottom: e.bottom - t
    };
  },
      Si = function Si(e, t, o) {
    return {
      left: e.left + t,
      top: e.top + o,
      right: e.right + t,
      bottom: e.bottom + o
    };
  },
      Ti = function Ti(e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom
    };
  },
      Ri = function Ri(e, t) {
    return y.some(e.getRect(t));
  },
      Di = function Di(e, t, o) {
    return te(t) ? Ri(e, t).map(Ti) : oe(t) ? function (e, t, o) {
      return o >= 0 && o < ir(t) ? e.getRangedRect(t, o, t, o + 1) : o > 0 ? e.getRangedRect(t, o - 1, t, o) : y.none();
    }(e, t, o).map(Ti) : y.none();
  },
      Oi = function Oi(e, t) {
    return te(t) ? Ri(e, t).map(Ti) : oe(t) ? e.getRangedRect(t, 0, t, ir(t)).map(Ti) : y.none();
  },
      ki = Cl([{
    none: []
  }, {
    retry: ["caret"]
  }]),
      Ei = function Ei(e, t, o) {
    return (n = t, r = Il, rt(function (e, t) {
      return t(e);
    }, st, n, r, undefined)).fold(b, function (t) {
      return Oi(e, t).exists(function (e) {
        return function (e, t) {
          return e.left < t.left || Math.abs(t.right - e.left) < 1 || e.left > t.right;
        }(o, e);
      });
    });
    var n, r;
  },
      Ni = {
    point: function point(e) {
      return e.bottom;
    },
    adjuster: function adjuster(e, t, o, n, r) {
      var s = xi(r, 5);
      return Math.abs(o.bottom - n.bottom) < 1 || o.top > r.bottom ? ki.retry(s) : o.top === r.bottom ? ki.retry(xi(r, 1)) : Ei(e, t, r) ? ki.retry(Si(s, 5, 0)) : ki.none();
    },
    move: xi,
    gather: gi
  },
      Bi = function Bi(e, t, o, n, r) {
    return 0 === r ? y.some(n) : function (e, t, o) {
      return e.elementFromPoint(t, o).filter(function (e) {
        return "table" === Q(e);
      }).isSome();
    }(e, n.left, t.point(n)) ? function (e, t, o, n, r) {
      return Bi(e, t, o, t.move(n, 5), r);
    }(e, t, o, n, r - 1) : e.situsFromPoint(n.left, t.point(n)).bind(function (s) {
      return s.start.fold(y.none, function (s) {
        return Oi(e, s).bind(function (l) {
          return t.adjuster(e, s, l, o, n).fold(y.none, function (n) {
            return Bi(e, t, o, n, r - 1);
          });
        }).orThunk(function () {
          return y.some(n);
        });
      }, y.none);
    });
  },
      zi = function zi(e, t, o) {
    var n = e.move(o, 5),
        r = Bi(t, e, o, n, 100).getOr(n);
    return function (e, t, o) {
      return e.point(t) > o.getInnerHeight() ? y.some(e.point(t) - o.getInnerHeight()) : e.point(t) < 0 ? y.some(-e.point(t)) : y.none();
    }(e, r, t).fold(function () {
      return t.situsFromPoint(r.left, e.point(r));
    }, function (o) {
      return t.scrollBy(0, o), t.situsFromPoint(r.left, e.point(r) - o);
    });
  },
      Ai = {
    tryUp: h(zi, {
      point: function point(e) {
        return e.top;
      },
      adjuster: function adjuster(e, t, o, n, r) {
        var s = Ci(r, 5);
        return Math.abs(o.top - n.top) < 1 || o.bottom < r.top ? ki.retry(s) : o.bottom === r.top ? ki.retry(Ci(r, 1)) : Ei(e, t, r) ? ki.retry(Si(s, 5, 0)) : ki.none();
      },
      move: Ci,
      gather: fi
    }),
    tryDown: h(zi, Ni),
    getJumpSize: u(5)
  },
      Wi = function Wi(e, t, o) {
    return e.getSelection().bind(function (n) {
      return function (e, t, o, n) {
        var r = bi(t) ? function (e, t, o) {
          return o.traverse(t).orThunk(function () {
            return vi(t, o.gather, e);
          }).map(o.relative);
        }(e, t, n) : yi(e, t, o, n);
        return r.map(function (e) {
          return {
            start: e,
            finish: e
          };
        });
      }(t, n.finish, n.foffset, o).fold(function () {
        return y.some(as(n.finish, n.foffset));
      }, function (r) {
        var s = e.fromSitus(r);
        return l = wi.verify(e, n.finish, n.foffset, s.finish, s.foffset, o.failure, t), wi.cata(l, function (e) {
          return y.none();
        }, function () {
          return y.none();
        }, function (e) {
          return y.some(as(e, 0));
        }, function (e) {
          return y.some(as(e, ir(e)));
        });
        var l;
      });
    });
  },
      Li = function Li(e, t, o, n, r, s) {
    return 0 === s ? y.none() : ji(e, t, o, n, r).bind(function (l) {
      var a = e.fromSitus(l),
          c = wi.verify(e, o, n, a.finish, a.foffset, r.failure, t);
      return wi.cata(c, function () {
        return y.none();
      }, function () {
        return y.some(l);
      }, function (l) {
        return be(o, l) && 0 === n ? _i(e, o, n, Ci, r) : Li(e, t, l, 0, r, s - 1);
      }, function (l) {
        return be(o, l) && n === ir(l) ? _i(e, o, n, xi, r) : Li(e, t, l, ir(l), r, s - 1);
      });
    });
  },
      _i = function _i(e, t, o, n, r) {
    return Di(e, t, o).bind(function (t) {
      return Mi(e, r, n(t, Ai.getJumpSize()));
    });
  },
      Mi = function Mi(e, t, o) {
    var n = Co().browser;
    return n.isChromium() || n.isSafari() || n.isFirefox() ? t.retry(e, o) : y.none();
  },
      ji = function ji(e, t, o, n, r) {
    return Di(e, o, n).bind(function (t) {
      return Mi(e, r, t);
    });
  },
      Ii = function Ii(e, t, o, n, r) {
    return it(n, "td,th", t).bind(function (n) {
      return it(n, "table", t).bind(function (s) {
        return function (e, t) {
          return st(e, function (e) {
            return Se(e).exists(function (e) {
              return be(e, t);
            });
          }, void 0).isSome();
        }(r, s) ? function (e, t, o) {
          return Wi(e, t, o).bind(function (n) {
            return Li(e, t, n.element, n.offset, o, 20).map(e.fromSitus);
          });
        }(e, t, o).bind(function (e) {
          return it(e.finish, "td,th", t).map(function (t) {
            return {
              start: n,
              finish: t,
              range: e
            };
          });
        }) : y.none();
      });
    });
  },
      Pi = function Pi(e, t, o, n, r, s) {
    return s(n, t).orThunk(function () {
      return Ii(e, t, o, n, r).map(function (e) {
        var t = e.range;
        return Pc(y.some(ei(t.start, t.soffset, t.finish, t.foffset)), !0);
      });
    });
  },
      Fi = function Fi(e, t) {
    return it(e, "tr", t).bind(function (e) {
      return it(e, "table", t).bind(function (o) {
        var n = nt(o, "tr");
        return be(e, n[0]) ? function (e, t, o) {
          return mi(ui, e, function (e) {
            return fr(e).isSome();
          }, o);
        }(o, 0, t).map(function (e) {
          var t = ir(e);
          return Pc(y.some(ei(e, t, e, t)), !0);
        }) : y.none();
      });
    });
  },
      Hi = function Hi(e, t) {
    return it(e, "tr", t).bind(function (e) {
      return it(e, "table", t).bind(function (o) {
        var n = nt(o, "tr");
        return be(e, n[n.length - 1]) ? function (e, t, o) {
          return di(ui, e, function (e) {
            return ur(e).isSome();
          }, o);
        }(o, 0, t).map(function (e) {
          return Pc(y.some(ei(e, 0, e, 0)), !0);
        }) : y.none();
      });
    });
  },
      qi = function qi(e, t, o, n, r, s, l) {
    return Ii(e, o, n, r, s).bind(function (e) {
      return ti(t, o, e.start, e.finish, l);
    });
  },
      Vi = function Vi(e) {
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
      $i = function $i() {
    var e = function (e) {
      var t = Vi(y.none()),
          o = function o() {
        return t.get().each(e);
      };

      return {
        clear: function clear() {
          o(), t.set(y.none());
        },
        isSet: function isSet() {
          return t.get().isSome();
        },
        get: function get() {
          return t.get();
        },
        set: function set(e) {
          o(), t.set(y.some(e));
        }
      };
    }(d);

    return _objectSpread({}, e, {
      on: function on(t) {
        return e.get().each(t);
      }
    });
  },
      Ui = function Ui(e, t) {
    return it(e, "td,th", t);
  },
      Gi = {
    traverse: De,
    gather: gi,
    relative: Ic.before,
    retry: Ai.tryDown,
    failure: wi.failedDown
  },
      Ki = {
    traverse: Re,
    gather: fi,
    relative: Ic.before,
    retry: Ai.tryUp,
    failure: wi.failedUp
  },
      Yi = function Yi(e) {
    return function (t) {
      return t === e;
    };
  },
      Ji = Yi(38),
      Qi = Yi(40),
      Xi = function Xi(e) {
    return e >= 37 && e <= 40;
  },
      Zi = {
    isBackward: Yi(37),
    isForward: Yi(39)
  },
      em = {
    isBackward: Yi(39),
    isForward: Yi(37)
  },
      tm = Cl([{
    domRange: ["rng"]
  }, {
    relative: ["startSitu", "finishSitu"]
  }, {
    exact: ["start", "soffset", "finish", "foffset"]
  }]),
      om = {
    domRange: tm.domRange,
    relative: tm.relative,
    exact: tm.exact,
    exactFromRange: function exactFromRange(e) {
      return tm.exact(e.start, e.soffset, e.finish, e.foffset);
    },
    getWin: function getWin(e) {
      var t = function (e) {
        return e.match({
          domRange: function domRange(e) {
            return ge.fromDom(e.startContainer);
          },
          relative: function relative(e, t) {
            return Ic.getStart(e);
          },
          exact: function exact(e, t, o, n) {
            return e;
          }
        });
      }(e);

      return ge.fromDom(Ce(t).dom.defaultView);
    },
    range: Qc
  },
      nm = document.caretPositionFromPoint ? function (e, t, o) {
    var n, r;
    return y.from(null === (r = (n = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(n, t, o)).bind(function (t) {
      if (null === t.offsetNode) return y.none();
      var o = e.dom.createRange();
      return o.setStart(t.offsetNode, t.offset), o.collapse(), y.some(o);
    });
  } : document.caretRangeFromPoint ? function (e, t, o) {
    var n, r;
    return y.from(null === (r = (n = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(n, t, o));
  } : y.none,
      rm = function rm(e, t) {
    var o = Q(e);
    return "input" === o ? Ic.after(e) : T(["br", "img"], o) ? 0 === t ? Ic.before(e) : Ic.after(e) : Ic.on(e, t);
  },
      sm = function sm(e) {
    return y.from(e.getSelection());
  },
      lm = function lm(e, t) {
    sm(e).each(function (e) {
      e.removeAllRanges(), e.addRange(t);
    });
  },
      am = function am(e, t, o, n, r) {
    var s = $c(e, t, o, n, r);
    lm(e, s);
  },
      cm = function cm(e, t) {
    return Yc(e, t).match({
      ltr: function ltr(t, o, n, r) {
        am(e, t, o, n, r);
      },
      rtl: function rtl(t, o, n, r) {
        sm(e).each(function (s) {
          if (s.setBaseAndExtent) s.setBaseAndExtent(t.dom, o, n.dom, r);else if (s.extend) try {
            (function (e, t, o, n, r, s) {
              t.collapse(o.dom, n), t.extend(r.dom, s);
            })(0, s, t, o, n, r);
          } catch (s) {
            am(e, n, r, t, o);
          } else am(e, n, r, t, o);
        });
      }
    });
  },
      im = function im(e, t, o, n, r) {
    var s = function (e, t, o, n) {
      var r = rm(e, t),
          s = rm(o, n);
      return om.relative(r, s);
    }(t, o, n, r);

    cm(e, s);
  },
      mm = function mm(e, t, o) {
    var n = function (e, t) {
      var o = e.fold(Ic.before, rm, Ic.after),
          n = t.fold(Ic.before, rm, Ic.after);
      return om.relative(o, n);
    }(t, o);

    cm(e, n);
  },
      dm = function dm(e) {
    if (e.rangeCount > 0) {
      var _t20 = e.getRangeAt(0),
          _o25 = e.getRangeAt(e.rangeCount - 1);

      return y.some(Qc(ge.fromDom(_t20.startContainer), _t20.startOffset, ge.fromDom(_o25.endContainer), _o25.endOffset));
    }

    return y.none();
  },
      um = function um(e) {
    if (null === e.anchorNode || null === e.focusNode) return dm(e);
    {
      var _t21 = ge.fromDom(e.anchorNode),
          _o26 = ge.fromDom(e.focusNode);

      return function (e, t, o, n) {
        var r = function (e, t, o, n) {
          var r = xe(e).dom.createRange();
          return r.setStart(e.dom, t), r.setEnd(o.dom, n), r;
        }(e, t, o, n),
            s = be(e, o) && t === n;

        return r.collapsed && !s;
      }(_t21, e.anchorOffset, _o26, e.focusOffset) ? y.some(Qc(_t21, e.anchorOffset, _o26, e.focusOffset)) : dm(e);
    }
  },
      fm = function fm(e, t) {
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var n = (o ? Hc : Fc)(e, t);
    lm(e, n);
  },
      gm = function gm(e) {
    return function (e) {
      return sm(e).filter(function (e) {
        return e.rangeCount > 0;
      }).bind(um);
    }(e).map(function (e) {
      return om.exact(e.start, e.soffset, e.finish, e.foffset);
    });
  },
      hm = function hm(e) {
    return {
      elementFromPoint: function elementFromPoint(t, o) {
        return ge.fromPoint(ge.fromDom(e.document), t, o);
      },
      getRect: function getRect(e) {
        return e.dom.getBoundingClientRect();
      },
      getRangedRect: function getRangedRect(t, o, n, r) {
        var s = om.exact(t, o, n, r);
        return function (e, t) {
          return function (e) {
            var t = e.getClientRects(),
                o = t.length > 0 ? t[0] : e.getBoundingClientRect();
            return o.width > 0 || o.height > 0 ? y.some(o).map(Uc) : y.none();
          }(Jc(e, t));
        }(e, s);
      },
      getSelection: function getSelection() {
        return gm(e).map(function (t) {
          return Zc(e, t);
        });
      },
      fromSitus: function fromSitus(t) {
        var o = om.relative(t.start, t.finish);
        return Zc(e, o);
      },
      situsFromPoint: function situsFromPoint(t, o) {
        return function (e, t, o) {
          return function (e, t, o) {
            var n = ge.fromDom(e.document);
            return nm(n, t, o).map(function (e) {
              return Qc(ge.fromDom(e.startContainer), e.startOffset, ge.fromDom(e.endContainer), e.endOffset);
            });
          }(e, t, o);
        }(e, t, o).map(function (e) {
          return Xc(e.start, e.soffset, e.finish, e.foffset);
        });
      },
      clearSelection: function clearSelection() {
        (function (e) {
          sm(e).each(function (e) {
            return e.removeAllRanges();
          });
        })(e);
      },
      collapseSelection: function collapseSelection() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        gm(e).each(function (o) {
          return o.fold(function (e) {
            return e.collapse(t);
          }, function (o, n) {
            var r = t ? o : n;
            mm(e, r, r);
          }, function (o, n, r, s) {
            var l = t ? o : r,
                a = t ? n : s;
            im(e, l, a, l, a);
          });
        });
      },
      setSelection: function setSelection(t) {
        im(e, t.start, t.soffset, t.finish, t.foffset);
      },
      setRelativeSelection: function setRelativeSelection(t, o) {
        mm(e, t, o);
      },
      selectNode: function selectNode(t) {
        fm(e, t, !1);
      },
      selectContents: function selectContents(t) {
        fm(e, t);
      },
      getInnerHeight: function getInnerHeight() {
        return e.innerHeight;
      },
      getScrollY: function getScrollY() {
        return function (e) {
          var t = void 0 !== e ? e.dom : document,
              o = t.body.scrollLeft || t.documentElement.scrollLeft,
              n = t.body.scrollTop || t.documentElement.scrollTop;
          return cn(o, n);
        }(ge.fromDom(e.document)).top;
      },
      scrollBy: function scrollBy(t, o) {
        (function (e, t, o) {
          var n = (void 0 !== o ? o.dom : document).defaultView;
          n && n.scrollBy(e, t);
        })(t, o, ge.fromDom(e.document));
      }
    };
  },
      pm = function pm(e, t) {
    return {
      rows: e,
      cols: t
    };
  },
      wm = function wm(e) {
    return void 0 !== e.dom.classList;
  },
      bm = function bm(e, t) {
    return function (e, t, o) {
      var n = function (e, t) {
        var o = ie(e, t);
        return void 0 === o || "" === o ? [] : o.split(" ");
      }(e, t).concat([o]);

      return ae(e, t, n.join(" ")), !0;
    }(e, "class", t);
  },
      vm = function vm(e, t) {
    wm(e) ? e.dom.classList.add(t) : bm(e, t);
  },
      ym = function ym(e, t) {
    return wm(e) && e.dom.classList.contains(t);
  },
      xm = function xm() {
    return {
      tag: "none"
    };
  },
      Cm = function Cm(e) {
    return {
      tag: "multiple",
      elements: e
    };
  },
      Sm = function Sm(e) {
    return {
      tag: "single",
      element: e
    };
  },
      Tm = function Tm(e) {
    var t = ge.fromDom(function (e) {
      if (Ye() && c(e.target)) {
        var _t22 = ge.fromDom(e.target);

        if (te(_t22) && c(_t22.dom.shadowRoot) && e.composed && e.composedPath) {
          var _t23 = e.composedPath();

          if (_t23) return P(_t23);
        }
      }

      return y.from(e.target);
    }(e).getOr(e.target)),
        o = function o() {
      return e.stopPropagation();
    },
        n = function n() {
      return e.preventDefault();
    },
        r = (s = n, l = o, function () {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      return s(l.apply(null, e));
    });

    var s, l;
    return function (e, t, o, n, r, s, l) {
      return {
        target: e,
        x: t,
        y: o,
        stop: n,
        prevent: r,
        kill: s,
        raw: l
      };
    }(t, e.clientX, e.clientY, o, n, r, e);
  },
      Rm = function Rm(e, t, o, n) {
    e.dom.removeEventListener(t, o, n);
  },
      Dm = v,
      Om = function Om(e, t, o) {
    return function (e, t, o, n) {
      return function (e, t, o, n, r) {
        var s = function (e, t) {
          return function (o) {
            e(o) && t(Tm(o));
          };
        }(o, n);

        return e.dom.addEventListener(t, s, r), {
          unbind: h(Rm, e, t, s, r)
        };
      }(e, t, o, n, !1);
    }(e, t, Dm, o);
  },
      km = Tm,
      Em = function Em(e) {
    return !1 === ym(ge.fromDom(e.target), "ephox-snooker-resizer-bar");
  },
      Nm = function Nm(e, t) {
    var o = (r = es.selectedSelector, {
      get: function get() {
        return Yr(ge.fromDom(e.getBody()), r).fold(function () {
          return rs(Or(e), Rr(e)).fold(xm, Sm);
        }, Cm);
      }
    }),
        n = function (e, t, o) {
      var n = function n(t) {
        de(t, e.selected), de(t, e.firstSelected), de(t, e.lastSelected);
      },
          r = function r(t) {
        ae(t, e.selected, "1");
      },
          s = function s(e) {
        l(e), o();
      },
          l = function l(t) {
        var o = nt(t, "".concat(e.selectedSelector, ",").concat(e.firstSelectedSelector, ",").concat(e.lastSelectedSelector));
        k(o, n);
      };

      return {
        clearBeforeUpdate: l,
        clear: s,
        selectRange: function selectRange(o, n, l, a) {
          s(o), k(n, r), ae(l, e.firstSelected, "1"), ae(a, e.lastSelected, "1"), t(n, l, a);
        },
        selectedSelector: e.selectedSelector,
        firstSelectedSelector: e.firstSelectedSelector,
        lastSelectedSelector: e.lastSelectedSelector
      };
    }(es, function (t, o, n) {
      It(o).each(function (r) {
        var s = Ia(e),
            l = Cr(d, ge.fromDom(e.getDoc()), s),
            a = function (e, t, o) {
          var n = Vo(e);
          return Js(n, t).map(function (e) {
            var t = Vs(n, o, !1),
                _o27 = _o(t),
                r = _o27.rows,
                s = function (e, t) {
              var o = e.slice(0, t[t.length - 1].row + 1),
                  n = $s(o);
              return _(n, function (e) {
                var o = e.cells.slice(0, t[t.length - 1].column + 1);
                return O(o, function (e) {
                  return e.element;
                });
              });
            }(r, e),
                l = function (e, t) {
              var o = e.slice(t[0].row + t[0].rowspan - 1, e.length),
                  n = $s(o);
              return _(n, function (e) {
                var o = e.cells.slice(t[0].column + t[0].colspan - 1, e.cells.length);
                return O(o, function (e) {
                  return e.element;
                });
              });
            }(r, e);

            return {
              upOrLeftCells: s,
              downOrRightCells: l
            };
          });
        }(r, {
          selection: ss(e)
        }, l);

        (function (e, t, o, n, r) {
          e.dispatch("TableSelectionChange", {
            cells: t,
            start: o,
            finish: n,
            otherCells: r
          });
        })(e, t, o, n, a);
      });
    }, function () {
      return function (e) {
        e.dispatch("TableSelectionClear");
      }(e);
    });

    var r;
    return e.on("init", function (o) {
      var r = e.getWin(),
          s = Tr(e),
          l = Rr(e),
          a = function (e, t, o, n) {
        var r = function (e, t, o, n) {
          var r = $i(),
              s = r.clear,
              l = function l(s) {
            r.on(function (r) {
              n.clearBeforeUpdate(t), Ui(s.target, o).each(function (l) {
                $r(r, l, o).each(function (o) {
                  var r = o.boxes.getOr([]);

                  if (1 === r.length) {
                    var _o28 = r[0],
                        _l10 = "false" === js(_o28),
                        _a9 = mt(_s(s.target), _o28, be);

                    _l10 && _a9 && (n.selectRange(t, r, _o28, _o28), e.selectContents(_o28));
                  } else r.length > 1 && (n.selectRange(t, r, o.start, o.finish), e.selectContents(l));
                });
              });
            });
          };

          return {
            clearstate: s,
            mousedown: function mousedown(e) {
              n.clear(t), Ui(e.target, o).each(r.set);
            },
            mouseover: function mouseover(e) {
              l(e);
            },
            mouseup: function mouseup(e) {
              l(e), s();
            }
          };
        }(hm(e), t, o, n);

        return {
          clearstate: r.clearstate,
          mousedown: r.mousedown,
          mouseover: r.mouseover,
          mouseup: r.mouseup
        };
      }(r, s, l, n),
          c = function (e, t, o, n) {
        var r = hm(e),
            s = function s() {
          return n.clear(t), y.none();
        };

        return {
          keydown: function keydown(e, l, a, c, i, m) {
            var d = e.raw,
                u = d.which,
                f = !0 === d.shiftKey,
                g = Ur(t, n.selectedSelector).fold(function () {
              return Xi(u) && !f && n.clearBeforeUpdate(t), Qi(u) && f ? h(qi, r, t, o, Gi, c, l, n.selectRange) : Ji(u) && f ? h(qi, r, t, o, Ki, c, l, n.selectRange) : Qi(u) ? h(Pi, r, o, Gi, c, l, Hi) : Ji(u) ? h(Pi, r, o, Ki, c, l, Fi) : y.none;
            }, function (e) {
              var o = function o(_o29) {
                return function () {
                  var s = H(_o29, function (o) {
                    return function (e, t, o, n, r) {
                      return Kr(n, e, t, r.firstSelectedSelector, r.lastSelectedSelector).map(function (e) {
                        return r.clearBeforeUpdate(o), r.selectRange(o, e.boxes, e.start, e.finish), e.boxes;
                      });
                    }(o.rows, o.cols, t, e, n);
                  });
                  return s.fold(function () {
                    return Gr(t, n.firstSelectedSelector, n.lastSelectedSelector).map(function (e) {
                      var o = Qi(u) || m.isForward(u) ? Ic.after : Ic.before;
                      return r.setRelativeSelection(Ic.on(e.first, 0), o(e.table)), n.clear(t), Pc(y.none(), !0);
                    });
                  }, function (e) {
                    return y.some(Pc(y.none(), !0));
                  });
                };
              };

              return Qi(u) && f ? o([pm(1, 0)]) : Ji(u) && f ? o([pm(-1, 0)]) : m.isBackward(u) && f ? o([pm(0, -1), pm(-1, 0)]) : m.isForward(u) && f ? o([pm(0, 1), pm(1, 0)]) : Xi(u) && !f ? s : y.none;
            });
            return g();
          },
          keyup: function keyup(e, r, s, l, a) {
            return Ur(t, n.selectedSelector).fold(function () {
              var c = e.raw,
                  i = c.which;
              return !0 === c.shiftKey && Xi(i) ? function (e, t, o, n, r, s, l) {
                return be(o, r) && n === s ? y.none() : it(o, "td,th", t).bind(function (o) {
                  return it(r, "td,th", t).bind(function (n) {
                    return ti(e, t, o, n, l);
                  });
                });
              }(t, o, r, s, l, a, n.selectRange) : y.none();
            }, y.none);
          }
        };
      }(r, s, l, n),
          i = function (e, t, o, n) {
        var r = hm(e);
        return function (e, s) {
          n.clearBeforeUpdate(t), $r(e, s, o).each(function (e) {
            var o = e.boxes.getOr([]);
            n.selectRange(t, o, e.start, e.finish), r.selectContents(s), r.collapseSelection();
          });
        };
      }(r, s, l, n);

      e.on("TableSelectorChange", function (e) {
        return i(e.start, e.finish);
      });

      var m = function m(t, o) {
        (function (e) {
          return !0 === e.raw.shiftKey;
        })(t) && (o.kill && t.kill(), o.selection.each(function (t) {
          var o = om.relative(t.start, t.finish),
              n = Jc(r, o);
          e.selection.setRng(n);
        }));
      },
          u = function u(e) {
        return 0 === e.button;
      },
          f = function () {
        var e = Vi(ge.fromDom(s)),
            t = Vi(0);
        return {
          touchEnd: function touchEnd(o) {
            var n = ge.fromDom(o.target);

            if (se("td")(n) || se("th")(n)) {
              var _r24 = e.get(),
                  _s17 = t.get();

              be(_r24, n) && o.timeStamp - _s17 < 300 && (o.preventDefault(), i(n, n));
            }

            e.set(n), t.set(o.timeStamp);
          }
        };
      }();

      e.on("dragstart", function (e) {
        a.clearstate();
      }), e.on("mousedown", function (e) {
        u(e) && Em(e) && a.mousedown(km(e));
      }), e.on("mouseover", function (e) {
        var t;
        void 0 !== (t = e).buttons && 0 == (1 & t.buttons) || !Em(e) || a.mouseover(km(e));
      }), e.on("mouseup", function (e) {
        u(e) && Em(e) && a.mouseup(km(e));
      }), e.on("touchend", f.touchEnd), e.on("keyup", function (t) {
        var o = km(t);

        if (o.raw.shiftKey && Xi(o.raw.which)) {
          var _t24 = e.selection.getRng(),
              _n22 = ge.fromDom(_t24.startContainer),
              _r25 = ge.fromDom(_t24.endContainer);

          c.keyup(o, _n22, _t24.startOffset, _r25, _t24.endOffset).each(function (e) {
            m(o, e);
          });
        }
      }), e.on("keydown", function (o) {
        var n = km(o);
        t.hide();
        var r = e.selection.getRng(),
            s = ge.fromDom(r.startContainer),
            l = ge.fromDom(r.endContainer),
            a = on(Zi, em)(ge.fromDom(e.selection.getStart()));
        c.keydown(n, s, r.startOffset, l, r.endOffset, a).each(function (e) {
          m(n, e);
        }), t.show();
      }), e.on("NodeChange", function () {
        var t = e.selection,
            o = ge.fromDom(t.getStart()),
            r = ge.fromDom(t.getEnd());
        qr(It, [o, r]).fold(function () {
          return n.clear(s);
        }, d);
      });
    }), e.on("PreInit", function () {
      e.serializer.addTempAttr(es.firstSelected), e.serializer.addTempAttr(es.lastSelected);
    }), {
      getSelectedCells: function getSelectedCells() {
        return function (e, t, o, n) {
          switch (e.tag) {
            case "none":
              return t();

            case "single":
              return function (e) {
                return [e.dom];
              }(e.element);

            case "multiple":
              return function (e) {
                return O(e, function (e) {
                  return e.dom;
                });
              }(e.elements);
          }
        }(o.get(), u([]));
      },
      clearSelectedCells: function clearSelectedCells(e) {
        return n.clear(ge.fromDom(e));
      }
    };
  },
      Bm = function Bm(e) {
    var t = [];
    return {
      bind: function bind(e) {
        if (void 0 === e) throw new Error("Event bind error: undefined handler");
        t.push(e);
      },
      unbind: function unbind(e) {
        t = N(t, function (t) {
          return t !== e;
        });
      },
      trigger: function trigger() {
        for (var _len7 = arguments.length, o = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          o[_key7] = arguments[_key7];
        }

        var n = {};
        k(e, function (e, t) {
          n[e] = o[t];
        }), k(t, function (e) {
          e(n);
        });
      }
    };
  },
      zm = function zm(e) {
    return {
      registry: U(e, function (e) {
        return {
          bind: e.bind,
          unbind: e.unbind
        };
      }),
      trigger: U(e, function (e) {
        return e.trigger;
      })
    };
  },
      Am = function Am(e) {
    return e.slice(0).sort();
  },
      Wm = function Wm(e, t) {
    var o = N(t, function (t) {
      return !T(e, t);
    });
    o.length > 0 && function (e) {
      throw new Error("Unsupported keys for object: " + Am(e).join(", "));
    }(o);
  },
      Lm = function Lm(e) {
    return function (e, t) {
      return function (e, t, o) {
        if (0 === t.length) throw new Error("You must specify at least one required field.");
        return function (e, t) {
          if (!s(t)) throw new Error("The required fields must be an array. Was: " + t + ".");
          k(t, function (t) {
            if (!n(t)) throw new Error("The value " + t + " in the " + e + " fields was not a string.");
          });
        }("required", t), function (e) {
          var t = Am(e);
          A(t, function (e, o) {
            return o < t.length - 1 && e === t[o + 1];
          }).each(function (e) {
            throw new Error("The field: " + e + " occurs more than once in the combined fields: [" + t.join(", ") + "].");
          });
        }(t), function (n) {
          var r = q(n);
          M(t, function (e) {
            return T(r, e);
          }) || function (e, t) {
            throw new Error("All required keys (" + Am(e).join(", ") + ") were not specified. Specified keys were: " + Am(t).join(", ") + ".");
          }(t, r), e(t, r);
          var s = N(t, function (e) {
            return !o.validate(n[e], e);
          });
          return s.length > 0 && function (e, t) {
            throw new Error("All values need to be of type: " + t + ". Keys (" + Am(e).join(", ") + ") were not.");
          }(s, o.label), n;
        };
      }(e, t, {
        validate: i,
        label: "function"
      });
    }(Wm, e);
  },
      _m = Lm(["compare", "extract", "mutate", "sink"]),
      Mm = Lm(["element", "start", "stop", "destroy"]),
      jm = Lm(["forceDrop", "drop", "move", "delayDrop"]),
      Im = function Im() {
    var e = function () {
      var e = zm({
        move: Bm(["info"])
      });
      return {
        onEvent: d,
        reset: d,
        events: e.registry
      };
    }(),
        t = function () {
      var e = y.none();
      var t = zm({
        move: Bm(["info"])
      });
      return {
        onEvent: function onEvent(o, n) {
          n.extract(o).each(function (o) {
            var r = function (t, o) {
              var n = e.map(function (e) {
                return t.compare(e, o);
              });
              return e = y.some(o), n;
            }(n, o);

            r.each(function (e) {
              t.trigger.move(e);
            });
          });
        },
        reset: function reset() {
          e = y.none();
        },
        events: t.registry
      };
    }();

    var o = e;
    return {
      on: function on() {
        o.reset(), o = t;
      },
      off: function off() {
        o.reset(), o = e;
      },
      isOn: function isOn() {
        return o === t;
      },
      onEvent: function onEvent(e, t) {
        o.onEvent(e, t);
      },
      events: t.events
    };
  },
      Pm = function Pm(e) {
    var t = e.replace(/\./g, "-");
    return {
      resolve: function resolve(e) {
        return t + "-" + e;
      }
    };
  },
      Fm = Pm("ephox-dragster").resolve;

  var Hm = _m({
    compare: function compare(e, t) {
      return cn(t.left - e.left, t.top - e.top);
    },
    extract: function extract(e) {
      return y.some(cn(e.x, e.y));
    },
    sink: function sink(e, t) {
      var o = function (e) {
        var t = _objectSpread({
          layerClass: Fm("blocker")
        }, e),
            o = ge.fromTag("div");

        return ae(o, "role", "presentation"), Ct(o, {
          position: "fixed",
          left: "0px",
          top: "0px",
          width: "100%",
          height: "100%"
        }), vm(o, Fm("blocker")), vm(o, t.layerClass), {
          element: u(o),
          destroy: function destroy() {
            Me(o);
          }
        };
      }(t),
          n = Om(o.element(), "mousedown", e.forceDrop),
          r = Om(o.element(), "mouseup", e.drop),
          s = Om(o.element(), "mousemove", e.move),
          l = Om(o.element(), "mouseout", e.delayDrop);

      return Mm({
        element: o.element,
        start: function start(e) {
          ze(e, o.element());
        },
        stop: function stop() {
          Me(o.element());
        },
        destroy: function destroy() {
          o.destroy(), r.unbind(), s.unbind(), l.unbind(), n.unbind();
        }
      });
    },
    mutate: function mutate(e, t) {
      e.mutate(t.left, t.top);
    }
  });

  var qm = Pm("ephox-snooker").resolve,
      Vm = qm("resizer-bar"),
      $m = qm("resizer-rows"),
      Um = qm("resizer-cols"),
      Gm = function Gm(e) {
    var t = nt(e.parent(), "." + Vm);
    k(t, Me);
  },
      Km = function Km(e, t, o) {
    var n = e.origin();
    k(t, function (t) {
      t.each(function (t) {
        var r = o(n, t);
        vm(r, Vm), ze(e.parent(), r);
      });
    });
  },
      Ym = function Ym(e, t, o, n, r) {
    var s = dn(o),
        l = t.isResizable,
        a = n.length > 0 ? Sn.positions(n, o) : [],
        c = a.length > 0 ? function (e, t) {
      return _(e.all, function (e, o) {
        return t(e.element) ? [o] : [];
      });
    }(e, l) : [];

    (function (e, t, o, n) {
      Km(e, t, function (e, t) {
        var r = function (e, t, o, n, r) {
          var s = ge.fromTag("div");
          return Ct(s, {
            position: "absolute",
            left: t + "px",
            top: o - 3.5 + "px",
            height: "7px",
            width: n + "px"
          }), ce(s, {
            "data-row": e,
            role: "presentation"
          }), s;
        }(t.row, o.left - e.left, t.y - e.top, n);

        return vm(r, $m), r;
      });
    })(t, N(a, function (e, t) {
      return R(c, function (e) {
        return t === e;
      });
    }), s, Oo(o));

    var i = r.length > 0 ? Rn.positions(r, o) : [],
        m = i.length > 0 ? function (e, t) {
      var o = [];
      return D(e.grid.columns, function (n) {
        Xo(e, n).map(function (e) {
          return e.element;
        }).forall(t) && o.push(n);
      }), N(o, function (o) {
        var n = Ko(e, function (e) {
          return e.column === o;
        });
        return M(n, function (e) {
          return t(e.element);
        });
      });
    }(e, l) : [];

    (function (e, t, o, n) {
      Km(e, t, function (e, t) {
        var r = function (e, t, o, n, r) {
          var s = ge.fromTag("div");
          return Ct(s, {
            position: "absolute",
            left: t - 3.5 + "px",
            top: o + "px",
            height: r + "px",
            width: "7px"
          }), ce(s, {
            "data-column": e,
            role: "presentation"
          }), s;
        }(t.col, t.x - e.left, o.top - e.top, 0, n);

        return vm(r, Um), r;
      });
    })(t, N(i, function (e, t) {
      return R(m, function (e) {
        return t === e;
      });
    }), s, ln(o));
  },
      Jm = function Jm(e, t) {
    if (Gm(e), e.isResizable(t)) {
      var _o30 = Vo(t),
          _n23 = tn(_o30),
          _r26 = Zo(_o30);

      Ym(_o30, e, t, _n23, _r26);
    }
  },
      Qm = function Qm(e, t) {
    var o = nt(e.parent(), "." + Vm);
    k(o, t);
  },
      Xm = function Xm(e) {
    Qm(e, function (e) {
      xt(e, "display", "none");
    });
  },
      Zm = function Zm(e) {
    Qm(e, function (e) {
      xt(e, "display", "block");
    });
  },
      ed = qm("resizer-bar-dragging"),
      td = function td(e) {
    var t = function () {
      var e = zm({
        drag: Bm(["xDelta", "yDelta", "target"])
      });
      var t = y.none();

      var o = function () {
        var e = zm({
          drag: Bm(["xDelta", "yDelta"])
        });
        return {
          mutate: function mutate(t, o) {
            e.trigger.drag(t, o);
          },
          events: e.registry
        };
      }();

      return o.events.drag.bind(function (o) {
        t.each(function (t) {
          e.trigger.drag(o.xDelta, o.yDelta, t);
        });
      }), {
        assign: function assign(e) {
          t = y.some(e);
        },
        get: function get() {
          return t;
        },
        mutate: o.mutate,
        events: e.registry
      };
    }(),
        o = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o;
      return function (e, t, o) {
        var n = !1;

        var r = zm({
          start: Bm([]),
          stop: Bm([])
        }),
            s = Im(),
            a = function a() {
          m.stop(), s.isOn() && (s.off(), r.trigger.stop());
        },
            c = function (e, t) {
          var o = null;

          var n = function n() {
            l(o) || (clearTimeout(o), o = null);
          };

          return {
            cancel: n,
            throttle: function throttle() {
              for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                t[_key8] = arguments[_key8];
              }

              n(), o = setTimeout(function () {
                o = null, e.apply(null, t);
              }, 200);
            }
          };
        }(a);

        s.events.move.bind(function (o) {
          t.mutate(e, o.info);
        });

        var i = function i(e) {
          return function () {
            for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              t[_key9] = arguments[_key9];
            }

            n && e.apply(null, t);
          };
        },
            m = t.sink(jm({
          forceDrop: a,
          drop: i(a),
          move: i(function (e) {
            c.cancel(), s.onEvent(e, t);
          }),
          delayDrop: i(c.throttle)
        }), o);

        return {
          element: m.element,
          go: function go(e) {
            m.start(e), s.on(), r.trigger.start();
          },
          on: function on() {
            n = !0;
          },
          off: function off() {
            n = !1;
          },
          destroy: function destroy() {
            m.destroy();
          },
          events: r.registry
        };
      }(e, null !== (o = t.mode) && void 0 !== o ? o : Hm, t);
    }(t, {});

    var n = y.none();

    var r = function r(e, t) {
      return y.from(ie(e, t));
    };

    t.events.drag.bind(function (e) {
      r(e.target, "data-row").each(function (t) {
        var o = Bt(e.target, "top");
        xt(e.target, "top", o + e.yDelta + "px");
      }), r(e.target, "data-column").each(function (t) {
        var o = Bt(e.target, "left");
        xt(e.target, "left", o + e.xDelta + "px");
      });
    });

    var s = function s(e, t) {
      return Bt(e, t) - Ot(e, "data-initial-" + t, 0);
    };

    o.events.stop.bind(function () {
      t.get().each(function (t) {
        n.each(function (o) {
          r(t, "data-row").each(function (e) {
            var n = s(t, "top");
            de(t, "data-initial-top"), d.trigger.adjustHeight(o, n, parseInt(e, 10));
          }), r(t, "data-column").each(function (e) {
            var n = s(t, "left");
            de(t, "data-initial-left"), d.trigger.adjustWidth(o, n, parseInt(e, 10));
          }), Jm(e, o);
        });
      });
    });

    var a = function a(n, r) {
      d.trigger.startAdjust(), t.assign(n), ae(n, "data-initial-" + r, Bt(n, r)), vm(n, ed), xt(n, "opacity", "0.2"), o.go(e.parent());
    },
        c = Om(e.parent(), "mousedown", function (e) {
      var t;
      t = e.target, ym(t, $m) && a(e.target, "top"), function (e) {
        return ym(e, Um);
      }(e.target) && a(e.target, "left");
    }),
        i = function i(t) {
      return be(t, e.view());
    },
        m = Om(e.view(), "mouseover", function (t) {
      var o;
      (o = t.target, it(o, "table", i).filter(Ms)).fold(function () {
        Xe(t.target) && Gm(e);
      }, function (t) {
        n = y.some(t), Jm(e, t);
      });
    }),
        d = zm({
      adjustHeight: Bm(["table", "delta", "row"]),
      adjustWidth: Bm(["table", "delta", "column"]),
      startAdjust: Bm([])
    });

    return {
      destroy: function destroy() {
        c.unbind(), m.unbind(), o.destroy(), Gm(e);
      },
      refresh: function refresh(t) {
        Jm(e, t);
      },
      on: o.on,
      off: o.off,
      hideBars: h(Xm, e),
      showBars: h(Zm, e),
      events: d.registry
    };
  },
      od = function od(e, t, o) {
    var n = Sn,
        r = Rn,
        s = td(e),
        l = zm({
      beforeResize: Bm(["table", "type"]),
      afterResize: Bm(["table", "type"]),
      startDrag: Bm([])
    });
    return s.events.adjustHeight.bind(function (e) {
      var t = e.table;
      l.trigger.beforeResize(t, "row");
      (function (e, t, o, n) {
        var r = Vo(e),
            s = function (e, t, o) {
          return Qn(e, t, o, Pn, function (e) {
            return e.getOrThunk(At);
          });
        }(r, e, n),
            l = O(s, function (e, n) {
          return o === n ? Math.max(t + e, At()) : e;
        }),
            a = Rl(r, l),
            c = function (e, t) {
          return O(e.all, function (e, o) {
            return {
              element: e.element,
              height: t[o]
            };
          });
        }(r, l);

        k(c, function (e) {
          Wn(e.element, e.height);
        }), k(a, function (e) {
          Wn(e.element, e.height);
        });
        var i = B(l, function (e, t) {
          return e + t;
        }, 0);
        Wn(e, i);
      })(t, n.delta(e.delta, t), e.row, n), l.trigger.afterResize(t, "row");
    }), s.events.startAdjust.bind(function (e) {
      l.trigger.startDrag();
    }), s.events.adjustWidth.bind(function (e) {
      var n = e.table;
      l.trigger.beforeResize(n, "col");
      var s = r.delta(e.delta, n),
          a = o(n);
      Ol(n, s, e.column, t, a), l.trigger.afterResize(n, "col");
    }), {
      on: s.on,
      off: s.off,
      refreshBars: s.refresh,
      hideBars: s.hideBars,
      showBars: s.showBars,
      destroy: s.destroy,
      events: l.registry
    };
  },
      nd = function nd(e) {
    return c(e) && "TABLE" === e.tagName;
  },
      rd = "bar-",
      sd = function sd(e) {
    return "false" !== ie(e, "data-mce-resize");
  },
      ld = function ld(e) {
    var t = $i(),
        o = $i(),
        n = $i();
    var r, s;

    var l = function l(t) {
      return Xa(e, t);
    },
        a = function a() {
      return Ha(e) ? ys() : vs();
    };

    return e.on("init", function () {
      var r = function (e, t) {
        return e.inline ? function (e, t, o) {
          return {
            parent: u(t),
            view: u(e),
            origin: u(cn(0, 0)),
            isResizable: o
          };
        }(ge.fromDom(e.getBody()), function () {
          var e = ge.fromTag("div");
          return Ct(e, {
            position: "static",
            height: "0",
            width: "0",
            padding: "0",
            margin: "0",
            border: "0"
          }), ze(Ze(ge.fromDom(document)), e), e;
        }(), t) : function (e, t) {
          var o = ne(e) ? function (e) {
            return ge.fromDom(Ce(e).dom.documentElement);
          }(e) : e;
          return {
            parent: u(o),
            view: u(e),
            origin: u(cn(0, 0)),
            isResizable: t
          };
        }(ge.fromDom(e.getDoc()), t);
      }(e, sd);

      if (n.set(r), function (e) {
        var t = e.options.get("object_resizing");
        return T(t.split(","), "table");
      }(e) && Ka(e)) {
        var _n24 = a(),
            _s18 = od(r, _n24, l);

        _s18.on(), _s18.events.startDrag.bind(function (o) {
          t.set(e.selection.getRng());
        }), _s18.events.beforeResize.bind(function (t) {
          var o = t.table.dom;

          (function (e, t, o, n, r) {
            e.dispatch("ObjectResizeStart", {
              target: t,
              width: o,
              height: n,
              origin: r
            });
          })(e, o, kr(o), Er(o), rd + t.type);
        }), _s18.events.afterResize.bind(function (o) {
          var n = o.table,
              r = n.dom;
          Dr(n), t.on(function (t) {
            e.selection.setRng(t), e.focus();
          }), function (e, t, o, n, r) {
            e.dispatch("ObjectResized", {
              target: t,
              width: o,
              height: n,
              origin: r
            });
          }(e, r, kr(r), Er(r), rd + o.type), e.undoManager.add();
        }), o.set(_s18);
      }
    }), e.on("ObjectResizeStart", function (t) {
      var o = t.target;

      if (nd(o)) {
        var _n25 = ge.fromDom(o);

        k(e.dom.select(".mce-clonedresizable"), function (t) {
          e.dom.addClass(t, "mce-" + Fa(e) + "-columns");
        }), !fc(_n25) && Ua(e) ? wc(_n25) : !uc(_n25) && $a(e) && pc(_n25), gc(_n25) && ht(t.origin, rd) && pc(_n25), r = t.width, s = Ga(e) ? "" : function (e, t) {
          var o = e.dom.getStyle(t, "width") || e.dom.getAttrib(t, "width");
          return y.from(o).filter(bt);
        }(e, o).getOr("");
      }
    }), e.on("ObjectResized", function (t) {
      var o = t.target;

      if (nd(o)) {
        var _n26 = ge.fromDom(o),
            _c5 = t.origin;

        ht(_c5, "corner-") && function (t, o, n) {
          var c = pt(o, "e");

          if ("" === s && pc(t), n !== r && "" !== s) {
            xt(t, "width", s);

            var _o31 = a(),
                _i5 = l(t),
                _m3 = Ha(e) || c ? function (e) {
              return xs(e).columns;
            }(t) - 1 : 0;

            Ol(t, n - r, _m3, _o31, _i5);
          } else if (function (e) {
            return /^(\d+(\.\d+)?)%$/.test(e);
          }(s)) {
            var _e22 = parseFloat(s.replace("%", ""));

            xt(t, "width", n * _e22 / r + "%");
          }

          (function (e) {
            return /^(\d+(\.\d+)?)px$/.test(e);
          })(s) && function (e) {
            var t = Vo(e);
            Qo(t) || k(Mt(e), function (e) {
              var t = St(e, "width");
              xt(e, "width", t), de(e, "width");
            });
          }(t);
        }(_n26, _c5, t.width), Dr(_n26), za(e, _n26.dom, Aa);
      }
    }), e.on("SwitchMode", function () {
      o.on(function (t) {
        e.mode.isReadOnly() ? t.hideBars() : t.showBars();
      });
    }), e.on("remove", function () {
      o.on(function (e) {
        e.destroy();
      }), n.on(function (t) {
        (function (e, t) {
          e.inline && Me(t.parent());
        })(e, t);
      });
    }), {
      refresh: function refresh(e) {
        o.on(function (t) {
          return t.refreshBars(ge.fromDom(e));
        });
      },
      hide: function hide() {
        o.on(function (e) {
          return e.hideBars();
        });
      },
      show: function show() {
        o.on(function (e) {
          return e.showBars();
        });
      }
    };
  },
      ad = function ad(e) {
    (function (e) {
      var t = e.options.register;
      t("table_clone_elements", {
        processor: "string[]"
      }), t("table_use_colgroups", {
        processor: "boolean",
        "default": !0
      }), t("table_header_type", {
        processor: function processor(e) {
          var t = T(["section", "cells", "sectionCells", "auto"], e);
          return t ? {
            value: e,
            valid: t
          } : {
            valid: !1,
            message: "Must be one of: section, cells, sectionCells or auto."
          };
        },
        "default": "section"
      }), t("table_sizing_mode", {
        processor: "string",
        "default": "auto"
      }), t("table_default_attributes", {
        processor: "object",
        "default": {
          border: "1"
        }
      }), t("table_default_styles", {
        processor: "object",
        "default": {
          "border-collapse": "collapse"
        }
      }), t("table_column_resizing", {
        processor: function processor(e) {
          var t = T(["preservetable", "resizetable"], e);
          return t ? {
            value: e,
            valid: t
          } : {
            valid: !1,
            message: "Must be preservetable, or resizetable."
          };
        },
        "default": "preservetable"
      }), t("table_resize_bars", {
        processor: "boolean",
        "default": !0
      }), t("table_style_by_css", {
        processor: "boolean",
        "default": !0
      });
    })(e);

    var t = ld(e),
        o = Nm(e, t),
        n = Za(e, t, o);
    return Mc(e, n), function (e, t) {
      var o = Rr(e),
          n = function n(t) {
        return rs(Or(e)).bind(function (n) {
          return It(n, o).map(function (o) {
            var r = ts(ss(e), o, n);
            return t(o, r);
          });
        }).getOr("");
      };

      $({
        mceTableRowType: function mceTableRowType() {
          return n(t.getTableRowType);
        },
        mceTableCellType: function mceTableCellType() {
          return n(t.getTableCellType);
        },
        mceTableColType: function mceTableColType() {
          return n(t.getTableColType);
        }
      }, function (t, o) {
        return e.addQueryValueHandler(o, t);
      });
    }(e, n), ls(e, n), {
      getSelectedCells: o.getSelectedCells,
      clearSelectedCells: o.clearSelectedCells
    };
  };

  e.add("dom", function (e) {
    return {
      table: ad(e)
    };
  });
}();