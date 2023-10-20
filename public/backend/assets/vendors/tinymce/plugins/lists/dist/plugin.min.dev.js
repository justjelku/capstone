"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var t = function t(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (n = r = e, (o = String).prototype.isPrototypeOf(n) || (null === (s = r.constructor) || void 0 === s ? void 0 : s.name) === o.name) ? "string" : t;
        var n, r, o, s;
      }(t) === e;
    };
  },
      n = function n(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      r = t("string"),
      o = t("object"),
      s = t("array"),
      i = n("boolean"),
      a = n("function"),
      l = n("number"),
      d = function d() {},
      c = function c(e, t) {
    return e === t;
  },
      u = function u(e) {
    return function (t) {
      return !e(t);
    };
  },
      m = (!1, function () {
    return false;
  });

  var p =
  /*#__PURE__*/
  function () {
    function p(e, t) {
      _classCallCheck(this, p);

      this.tag = e, this.value = t;
    }

    _createClass(p, [{
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
        return this.tag ? p.some(e(this.value)) : p.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : p.none();
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
        return !this.tag || e(this.value) ? this : p.none();
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
        return new p(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return p.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return null == e ? p.none() : p.some(e);
      }
    }]);

    return p;
  }();

  p.singletonNone = new p(!1);

  var g = Array.prototype.slice,
      h = Array.prototype.indexOf,
      f = Array.prototype.push,
      y = function y(e, t) {
    return n = e, r = t, h.call(n, r) > -1;
    var n, r;
  },
      C = function C(e, t) {
    for (var _n = 0, _r = e.length; _n < _r; _n++) {
      if (t(e[_n], _n)) return !0;
    }

    return !1;
  },
      v = function v(e, t) {
    var n = e.length,
        r = new Array(n);

    for (var _o = 0; _o < n; _o++) {
      var _n2 = e[_o];
      r[_o] = t(_n2, _o);
    }

    return r;
  },
      b = function b(e, t) {
    for (var _n3 = 0, _r2 = e.length; _n3 < _r2; _n3++) {
      t(e[_n3], _n3);
    }
  },
      S = function S(e, t) {
    var n = [];

    for (var _r3 = 0, _o2 = e.length; _r3 < _o2; _r3++) {
      var _o3 = e[_r3];
      t(_o3, _r3) && n.push(_o3);
    }

    return n;
  },
      N = function N(e, t, n) {
    return b(e, function (e, r) {
      n = t(n, e, r);
    }), n;
  },
      L = function L(e, t, n) {
    for (var _r4 = 0, _o4 = e.length; _r4 < _o4; _r4++) {
      var _o5 = e[_r4];
      if (t(_o5, _r4)) return p.some(_o5);
      if (n(_o5, _r4)) break;
    }

    return p.none();
  },
      O = function O(e, t) {
    return L(e, t, m);
  },
      T = function T(e, t) {
    return function (e) {
      var t = [];

      for (var _n4 = 0, _r5 = e.length; _n4 < _r5; ++_n4) {
        if (!s(e[_n4])) throw new Error("Arr.flatten item " + _n4 + " was not an array, input: " + e);
        f.apply(t, e[_n4]);
      }

      return t;
    }(v(e, t));
  },
      k = function k(e) {
    var t = g.call(e, 0);
    return t.reverse(), t;
  },
      A = function A(e, t) {
    return t >= 0 && t < e.length ? p.some(e[t]) : p.none();
  },
      w = function w(e) {
    return A(e, 0);
  },
      D = function D(e) {
    return A(e, e.length - 1);
  },
      B = function B(e, t) {
    var n = [],
        r = a(t) ? function (e) {
      return C(n, function (n) {
        return t(n, e);
      });
    } : function (e) {
      return y(n, e);
    };

    for (var _t = 0, _o6 = e.length; _t < _o6; _t++) {
      var _o7 = e[_t];
      r(_o7) || n.push(_o7);
    }

    return n;
  },
      x = function x(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : c;
    return e.exists(function (e) {
      return n(e, t);
    });
  },
      E = function E(e, t, n) {
    return e.isSome() && t.isSome() ? p.some(n(e.getOrDie(), t.getOrDie())) : p.none();
  },
      I = function I(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      M = function M(e, t) {
    var n = (t || document).createElement(e);
    return I(n);
  },
      P = I,
      R = function R(e, t) {
    return e.dom === t.dom;
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var U = function U(e) {
    return e.dom.nodeName.toLowerCase();
  },
      $ = (1, function (e) {
    return 1 === function (e) {
      return e.dom.nodeType;
    }(e);
  });

  var _ = function _(e) {
    return function (t) {
      return $(t) && U(t) === e;
    };
  },
      H = function H(e) {
    return p.from(e.dom.parentNode).map(P);
  },
      j = function j(e) {
    return v(e.dom.childNodes, P);
  },
      F = function F(e, t) {
    var n = e.dom.childNodes;
    return p.from(n[t]).map(P);
  },
      K = function K(e) {
    return F(e, 0);
  },
      V = function V(e) {
    return F(e, e.dom.childNodes.length - 1);
  },
      z = function z(e, t, n) {
    var r = e.dom;
    var o = a(n) ? n : m;

    for (; r.parentNode;) {
      r = r.parentNode;

      var _e2 = P(r);

      if (t(_e2)) return p.some(_e2);
      if (o(_e2)) break;
    }

    return p.none();
  },
      Q = function Q(e, t, n) {
    return function (e, t, n, r, o) {
      return r(n) ? p.some(n) : a(o) && o(n) ? p.none() : t(n, r, o);
    }(0, z, e, t, n);
  },
      q = function q(e, t) {
    H(e).each(function (n) {
      n.dom.insertBefore(t.dom, e.dom);
    });
  },
      W = function W(e, t) {
    e.dom.appendChild(t.dom);
  },
      Z = function Z(e, t) {
    b(t, function (t) {
      W(e, t);
    });
  },
      G = function G(e) {
    e.dom.textContent = "", b(j(e), function (e) {
      J(e);
    });
  },
      J = function J(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  };

  var X = tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),
      Y = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),
      ee = tinymce.util.Tools.resolve("tinymce.util.VK");

  var te = Object.keys,
      ne = function ne(e, t) {
    var n = te(e);

    for (var _r6 = 0, _o8 = n.length; _r6 < _o8; _r6++) {
      var _o9 = n[_r6];
      t(e[_o9], _o9);
    }
  },
      re = function re(e, t) {
    var n = e.dom;
    ne(t, function (e, t) {
      (function (e, t, n) {
        if (!(r(n) || i(n) || l(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
        e.setAttribute(t, n + "");
      })(n, t, e);
    });
  },
      oe = function oe(e) {
    return N(e.dom.attributes, function (e, t) {
      return e[t.name] = t.value, e;
    }, {});
  },
      se = function se(e) {
    return function (e, t) {
      return P(e.dom.cloneNode(!0));
    }(e);
  },
      ie = function ie(e, t) {
    var n = function (e, t) {
      var n = M(t),
          r = oe(e);
      return re(n, r), n;
    }(e, t);

    (function (e, t) {
      var n = function (e) {
        return p.from(e.dom.nextSibling).map(P);
      }(e);

      n.fold(function () {
        H(e).each(function (e) {
          W(e, t);
        });
      }, function (e) {
        q(e, t);
      });
    })(e, n);

    var r = j(e);
    return Z(n, r), J(e), n;
  };

  var ae = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      le = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var de = function de(e) {
    return function (t) {
      return t && t.nodeName.toLowerCase() === e;
    };
  },
      ce = function ce(e) {
    return function (t) {
      return t && e.test(t.nodeName);
    };
  },
      ue = function ue(e) {
    return e && 3 === e.nodeType;
  },
      me = ce(/^(OL|UL|DL)$/),
      pe = ce(/^(OL|UL)$/),
      ge = de("ol"),
      he = ce(/^(LI|DT|DD)$/),
      fe = ce(/^(DT|DD)$/),
      ye = ce(/^(TH|TD)$/),
      Ce = de("br"),
      ve = function ve(e, t) {
    return t && !!e.schema.getTextBlockElements()[t.nodeName];
  },
      be = function be(e, t) {
    return e && e.nodeName in t;
  },
      Se = function Se(e, t, n) {
    var r = e.isEmpty(t);
    return !(n && e.select("span[data-mce-type=bookmark]", t).length > 0) && r;
  },
      Ne = function Ne(e, t) {
    return e.isChildOf(t, e.getRoot());
  },
      Le = function Le(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      Oe = Le("lists_indent_on_tab"),
      Te = Le("forced_root_block"),
      ke = Le("forced_root_block_attrs"),
      Ae = function Ae(e, t) {
    var n = e.dom,
        r = e.schema.getBlockElements(),
        o = n.createFragment(),
        s = Te(e),
        i = ke(e);
    var a, l, d;

    for (l = n.create(s, i), be(t.firstChild, r) || o.appendChild(l); a = t.firstChild;) {
      var _e3 = a.nodeName;
      d || "SPAN" === _e3 && "bookmark" === a.getAttribute("data-mce-type") || (d = !0), be(a, r) ? (o.appendChild(a), l = null) : (l || (l = n.create(s, i), o.appendChild(l)), l.appendChild(a));
    }

    return d || l.appendChild(n.create("br", {
      "data-mce-bogus": "1"
    })), o;
  },
      we = ae.DOM,
      De = _("dd"),
      Be = _("dt"),
      xe = function xe(e) {
    Be(e) && ie(e, "dd");
  },
      Ee = function Ee(e, t, n) {
    b(n, "Indent" === t ? xe : function (t) {
      return function (e, t) {
        De(t) ? ie(t, "dt") : Be(t) && H(t).each(function (n) {
          return function (e, t, n) {
            var r = we.select('span[data-mce-type="bookmark"]', t),
                o = Ae(e, n),
                s = we.createRng();
            s.setStartAfter(n), s.setEndAfter(t);
            var i = s.extractContents();

            for (var _t2 = i.firstChild; _t2; _t2 = _t2.firstChild) {
              if ("LI" === _t2.nodeName && e.dom.isEmpty(_t2)) {
                we.remove(_t2);
                break;
              }
            }

            var a;
            e.dom.isEmpty(i) || we.insertAfter(i, t), we.insertAfter(o, t), Se(e.dom, n.parentNode) && (a = n.parentNode, le.each(r, function (e) {
              a.parentNode.insertBefore(e, n.parentNode);
            }), we.remove(a)), we.remove(n), Se(e.dom, t) && we.remove(t);
          }(e, n.dom, t.dom);
        });
      }(e, t);
    });
  },
      Ie = function Ie(e, t) {
    if (ue(e)) return {
      container: e,
      offset: t
    };
    var n = X.getNode(e, t);
    return ue(n) ? {
      container: n,
      offset: t >= e.childNodes.length ? n.data.length : 0
    } : n.previousSibling && ue(n.previousSibling) ? {
      container: n.previousSibling,
      offset: n.previousSibling.data.length
    } : n.nextSibling && ue(n.nextSibling) ? {
      container: n.nextSibling,
      offset: 0
    } : {
      container: e,
      offset: t
    };
  },
      Me = function Me(e) {
    var t = e.cloneRange(),
        n = Ie(e.startContainer, e.startOffset);
    t.setStart(n.container, n.offset);
    var r = Ie(e.endContainer, e.endOffset);
    return t.setEnd(r.container, r.offset), t;
  },
      Pe = ["OL", "UL", "DL"],
      Re = Pe.join(","),
      Ue = function Ue(e, t) {
    var n = t || e.selection.getStart(!0);
    return e.dom.getParent(n, Re, He(e, n));
  },
      $e = function $e(e) {
    var t = e.selection.getSelectedBlocks();
    return S(function (e, t) {
      var n = le.map(t, function (t) {
        return e.dom.getParent(t, "li,dd,dt", He(e, t)) || t;
      });
      return B(n);
    }(e, t), he);
  },
      _e = function _e(e, t) {
    var n = e.dom.getParents(t, "TD,TH");
    return n.length > 0 ? n[0] : e.getBody();
  },
      He = function He(e, t) {
    var n = e.dom.getParents(t, e.dom.isBlock),
        r = O(n, function (t) {
      return n = e.schema, !me(r = t) && !he(r) && C(Pe, function (e) {
        return n.isValidChild(r.nodeName, e);
      });
      var n, r;
    });
    return r.getOr(e.getBody());
  },
      je = function je(e, t) {
    var n = e.dom.getParents(t, "ol,ul", He(e, t));
    return D(n);
  },
      Fe = function Fe(e, t) {
    var n = v(t, function (t) {
      return je(e, t).getOr(t);
    });
    return B(n);
  },
      Ke = function Ke(e, t, n) {
    return e.dispatch("ListMutation", {
      action: t,
      element: n
    });
  },
      Ve = (ze = /^\s+|\s+$/g, function (e) {
    return e.replace(ze, "");
  });

  var ze;

  var Qe = function Qe(e, t, n) {
    (function (e, t, n) {
      if (!r(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
      (function (e) {
        return void 0 !== e.style && a(e.style.getPropertyValue);
      })(e) && e.style.setProperty(t, n);
    })(e.dom, t, n);
  },
      qe = function qe(e, t) {
    W(e.item, t.list);
  },
      We = function We(e, t) {
    var n = {
      list: M(t, e),
      item: M("li", e)
    };
    return W(n.list, n.item), n;
  },
      Ze = function Ze(e) {
    return function (e, t) {
      var n = e.dom;
      if (1 !== n.nodeType) return !1;
      {
        var _e4 = n;
        if (void 0 !== _e4.matches) return _e4.matches(t);
        if (void 0 !== _e4.msMatchesSelector) return _e4.msMatchesSelector(t);
        if (void 0 !== _e4.webkitMatchesSelector) return _e4.webkitMatchesSelector(t);
        if (void 0 !== _e4.mozMatchesSelector) return _e4.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors");
      }
    }(e, "OL,UL");
  },
      Ge = function Ge(e) {
    return K(e).exists(Ze);
  },
      Je = function Je(e) {
    return e.depth > 0;
  },
      Xe = function Xe(e) {
    return e.isSelected;
  },
      Ye = function Ye(e) {
    var t = j(e),
        n = V(e).exists(Ze) ? t.slice(0, -1) : t;
    return v(n, se);
  },
      et = function et(e) {
    return b(e, function (t, n) {
      (function (e, t) {
        var n = e[t].depth,
            r = function r(e) {
          return e.depth === n && !e.dirty;
        },
            o = function o(e) {
          return e.depth < n;
        };

        return L(k(e.slice(0, t)), r, o).orThunk(function () {
          return L(e.slice(t + 1), r, o);
        });
      })(e, n).fold(function () {
        t.dirty && function (e) {
          e.listAttributes = function (e, t) {
            var n = {};
            var r;
            return function (e, t, n, r) {
              ne(e, function (e, o) {
                (t(e, o) ? n : r)(e, o);
              });
            }(e, t, (r = n, function (e, t) {
              r[t] = e;
            }), d), n;
          }(e.listAttributes, function (e, t) {
            return "start" !== t;
          });
        }(t);
      }, function (e) {
        return r = e, (n = t).listType = r.listType, void (n.listAttributes = _objectSpread({}, r.listAttributes));
        var n, r;
      });
    }), e;
  },
      tt = function tt(e, t, n, r) {
    return K(r).filter(Ze).fold(function () {
      t.each(function (e) {
        R(e.start, r) && n.set(!0);
      });

      var o = function (e, t, n) {
        return H(e).filter($).map(function (r) {
          return {
            depth: t,
            dirty: !1,
            isSelected: n,
            content: Ye(e),
            itemAttributes: oe(e),
            listAttributes: oe(r),
            listType: U(r)
          };
        });
      }(r, e, n.get());

      t.each(function (e) {
        R(e.end, r) && n.set(!1);
      });
      var s = V(r).filter(Ze).map(function (r) {
        return nt(e, t, n, r);
      }).getOr([]);
      return o.toArray().concat(s);
    }, function (r) {
      return nt(e, t, n, r);
    });
  },
      nt = function nt(e, t, n, r) {
    return T(j(r), function (r) {
      return (Ze(r) ? nt : tt)(e + 1, t, n, r);
    });
  },
      rt = function rt(e, t) {
    var n = et(t);
    return function (e, t) {
      var n = N(t, function (t, n) {
        return n.depth > t.length ? function (e, t, n) {
          var r = function (e, t, n) {
            var r = [];

            for (var _o10 = 0; _o10 < n; _o10++) {
              r.push(We(e, t.listType));
            }

            return r;
          }(e, n, n.depth - t.length);

          var o;
          return function (e) {
            for (var _t3 = 1; _t3 < e.length; _t3++) {
              qe(e[_t3 - 1], e[_t3]);
            }
          }(r), function (e, t) {
            for (var _t4 = 0; _t4 < e.length - 1; _t4++) {
              Qe(e[_t4].item, "list-style-type", "none");
            }

            D(e).each(function (e) {
              re(e.list, t.listAttributes), re(e.item, t.itemAttributes), Z(e.item, t.content);
            });
          }(r, n), o = r, E(D(t), w(o), qe), t.concat(r);
        }(e, t, n) : function (e, t, n) {
          var r = t.slice(0, n.depth);
          return D(r).each(function (t) {
            var r = function (e, t, n) {
              var r = M("li", e);
              return re(r, t), Z(r, n), r;
            }(e, n.itemAttributes, n.content);

            (function (e, t) {
              W(e.list, t), e.item = t;
            })(t, r), function (e, t) {
              U(e.list) !== t.listType && (e.list = ie(e.list, t.listType)), re(e.list, t.listAttributes);
            }(t, n);
          }), r;
        }(e, t, n);
      }, []);
      return w(n).map(function (e) {
        return e.list;
      });
    }(e.contentDocument, n).toArray();
  },
      ot = function ot(e, t, n) {
    var r = function (e, t) {
      var n = function (e) {
        var t = !1;
        return {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t = e;
          }
        };
      }();

      return v(e, function (e) {
        return {
          sourceList: e,
          entries: nt(0, t, n, e)
        };
      });
    }(t, function (e) {
      var t = v($e(e), P);
      return E(O(t, u(Ge)), O(k(t), u(Ge)), function (e, t) {
        return {
          start: e,
          end: t
        };
      });
    }(e));

    b(r, function (t) {
      (function (e, t) {
        b(S(e, Xe), function (e) {
          return function (e, t) {
            switch (e) {
              case "Indent":
                t.depth++;
                break;

              case "Outdent":
                t.depth--;
                break;

              case "Flatten":
                t.depth = 0;
            }

            t.dirty = !0;
          }(t, e);
        });
      })(t.entries, n);

      var r = function (e, t) {
        return T(function (e, t) {
          if (0 === e.length) return [];
          {
            var _n5 = t(e[0]);

            var _r7 = [];
            var _o11 = [];

            for (var _s = 0, _i = e.length; _s < _i; _s++) {
              var _i2 = e[_s],
                  _a = t(_i2);

              _a !== _n5 && (_r7.push(_o11), _o11 = []), _n5 = _a, _o11.push(_i2);
            }

            return 0 !== _o11.length && _r7.push(_o11), _r7;
          }
        }(t, Je), function (t) {
          return w(t).exists(Je) ? rt(e, t) : function (e, t) {
            var n = et(t);
            return v(n, function (t) {
              var n = function (e, t) {
                var n = document.createDocumentFragment();
                return b(e, function (e) {
                  n.appendChild(e.dom);
                }), P(n);
              }(t.content);

              return P(Ae(e, n.dom));
            });
          }(e, t);
        });
      }(e, t.entries);

      var o;
      b(r, function (t) {
        Ke(e, "Indent" === n ? "IndentList" : "OutdentList", t.dom);
      }), o = t.sourceList, b(r, function (e) {
        q(o, e);
      }), J(t.sourceList);
    });
  },
      st = function st(e, t) {
    var n = v(function (e) {
      var t = function (e) {
        var t = je(e, e.selection.getStart()),
            n = S(e.selection.getSelectedBlocks(), pe);
        return t.toArray().concat(n);
      }(e);

      return Fe(e, t);
    }(e), P),
        r = v(function (e) {
      return S($e(e), fe);
    }(e), P);
    var o = !1;

    if (n.length || r.length) {
      var _s2 = e.selection.getBookmark();

      ot(e, n, t), Ee(e, t, r), e.selection.moveToBookmark(_s2), e.selection.setRng(Me(e.selection.getRng())), e.nodeChanged(), o = !0;
    }

    return o;
  },
      it = function it(e) {
    return st(e, "Indent");
  },
      at = function at(e) {
    return st(e, "Outdent");
  },
      lt = function lt(e) {
    return st(e, "Flatten");
  };

  var dt = tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager");

  var ct = ae.DOM,
      ut = function ut(e) {
    var t = {},
        n = function n(_n6) {
      var r = e[_n6 ? "startContainer" : "endContainer"],
          o = e[_n6 ? "startOffset" : "endOffset"];

      if (1 === r.nodeType) {
        var _e5 = ct.create("span", {
          "data-mce-type": "bookmark"
        });

        r.hasChildNodes() ? (o = Math.min(o, r.childNodes.length - 1), _n6 ? r.insertBefore(_e5, r.childNodes[o]) : ct.insertAfter(_e5, r.childNodes[o])) : r.appendChild(_e5), r = _e5, o = 0;
      }

      t[_n6 ? "startContainer" : "endContainer"] = r, t[_n6 ? "startOffset" : "endOffset"] = o;
    };

    return n(!0), e.collapsed || n(), t;
  },
      mt = function mt(e) {
    var t = function t(_t5) {
      var n,
          r = n = e[_t5 ? "startContainer" : "endContainer"],
          o = e[_t5 ? "startOffset" : "endOffset"];
      r && (1 === r.nodeType && (o = function (e) {
        var t = e.parentNode.firstChild,
            n = 0;

        for (; t;) {
          if (t === e) return n;
          1 === t.nodeType && "bookmark" === t.getAttribute("data-mce-type") || n++, t = t.nextSibling;
        }

        return -1;
      }(r), r = r.parentNode, ct.remove(n), !r.hasChildNodes() && ct.isBlock(r) && r.appendChild(ct.create("br"))), e[_t5 ? "startContainer" : "endContainer"] = r, e[_t5 ? "startOffset" : "endOffset"] = o);
    };

    t(!0), t();
    var n = ct.createRng();
    return n.setStart(e.startContainer, e.startOffset), e.endContainer && n.setEnd(e.endContainer, e.endOffset), Me(n);
  },
      pt = function pt(e) {
    switch (e) {
      case "UL":
        return "ToggleUlList";

      case "OL":
        return "ToggleOlList";

      case "DL":
        return "ToggleDLList";
    }
  },
      gt = function gt(e) {
    return /\btox\-/.test(e.className);
  },
      ht = function ht(e, t, n) {
    var r = function r(e) {
      var r = L(e.parents, me, ye).filter(function (e) {
        return e.nodeName === t && !gt(e);
      }).isSome();
      n(r);
    },
        o = e.dom.getParents(e.selection.getNode());

    return r({
      parents: o
    }), e.on("NodeChange", r), function () {
      return e.off("NodeChange", r);
    };
  },
      ft = function ft(e, t) {
    le.each(t, function (t, n) {
      e.setAttribute(n, t);
    });
  },
      yt = function yt(e, t, n) {
    (function (e, t, n) {
      var r = n["list-style-type"] ? n["list-style-type"] : null;
      e.setStyle(t, "list-style-type", r);
    })(e, t, n), function (e, t, n) {
      ft(t, n["list-attributes"]), le.each(e.select("li", t), function (e) {
        ft(e, n["list-item-attributes"]);
      });
    }(e, t, n);
  },
      Ct = function Ct(e, t, n, r) {
    var o = t[n ? "startContainer" : "endContainer"];
    var s = t[n ? "startOffset" : "endOffset"];

    for (1 === o.nodeType && (o = o.childNodes[Math.min(s, o.childNodes.length - 1)] || o), !n && Ce(o.nextSibling) && (o = o.nextSibling); o.parentNode !== r;) {
      if (ve(e, o)) return o;
      if (/^(TD|TH)$/.test(o.parentNode.nodeName)) return o;
      o = o.parentNode;
    }

    return o;
  },
      vt = function vt(e, t, n) {
    var r = e.selection.getRng();
    var o = "LI";
    var s = He(e, e.selection.getStart(!0)),
        i = e.dom;
    if ("false" === i.getContentEditable(e.selection.getNode())) return;
    "DL" === (t = t.toUpperCase()) && (o = "DT");

    var a = ut(r),
        l = function (e, t, n) {
      var r = [],
          o = e.dom,
          s = Ct(e, t, !0, n),
          i = Ct(e, t, !1, n);
      var a;
      var l = [];

      for (var _e6 = s; _e6 && (l.push(_e6), _e6 !== i); _e6 = _e6.nextSibling) {
        ;
      }

      return le.each(l, function (t) {
        if (ve(e, t)) return r.push(t), void (a = null);
        if (o.isBlock(t) || Ce(t)) return Ce(t) && o.remove(t), void (a = null);
        var s = t.nextSibling;
        dt.isBookmarkNode(t) && (me(s) || ve(e, s) || !s && t.parentNode === n) ? a = null : (a || (a = o.create("p"), t.parentNode.insertBefore(a, t), r.push(a)), a.appendChild(t));
      }), r;
    }(e, r, s);

    le.each(l, function (r) {
      var s;
      var a = r.previousSibling,
          l = r.parentNode;
      he(l) || (a && me(a) && a.nodeName === t && function (e, t, n) {
        var r = e.getStyle(t, "list-style-type");
        var o = n ? n["list-style-type"] : "";
        return o = null === o ? "" : o, r === o;
      }(i, a, n) ? (s = a, r = i.rename(r, o), a.appendChild(r)) : (s = i.create(t), r.parentNode.insertBefore(s, r), s.appendChild(r), r = i.rename(r, o)), function (e, t, n) {
        le.each(["margin", "margin-right", "margin-bottom", "margin-left", "margin-top", "padding", "padding-right", "padding-bottom", "padding-left", "padding-top"], function (n) {
          return e.setStyle(t, n, "");
        });
      }(i, r), yt(i, s, n), St(e.dom, s));
    }), e.selection.setRng(mt(a));
  },
      bt = function bt(e, t, n) {
    return function (e, t) {
      return e && t && me(e) && e.nodeName === t.nodeName;
    }(t, n) && function (e, t, n) {
      return e.getStyle(t, "list-style-type", !0) === e.getStyle(n, "list-style-type", !0);
    }(e, t, n) && (r = n, t.className === r.className);
    var r;
  },
      St = function St(e, t) {
    var n, r;

    if (n = t.nextSibling, bt(e, t, n)) {
      for (; r = n.firstChild;) {
        t.appendChild(r);
      }

      e.remove(n);
    }

    if (n = t.previousSibling, bt(e, t, n)) {
      for (; r = n.lastChild;) {
        t.insertBefore(r, t.firstChild);
      }

      e.remove(n);
    }
  },
      Nt = function Nt(e) {
    return "list-style-type" in e;
  },
      Lt = function Lt(e, t, n) {
    var r = Ue(e),
        s = function (e) {
      var t = Ue(e),
          n = e.selection.getSelectedBlocks();
      return function (e, t) {
        return e && 1 === t.length && t[0] === e;
      }(t, n) ? function (e) {
        return S(e.querySelectorAll(Re), me);
      }(t) : S(n, function (e) {
        return me(e) && t !== e;
      });
    }(e),
        i = o(n) ? n : {};

    s.length > 0 ? function (e, t, n, r, o) {
      var s = me(t);
      if (s && t.nodeName === r && !Nt(o)) lt(e);else {
        vt(e, r, o);

        var _i3 = ut(e.selection.getRng()),
            _a2 = s ? [t].concat(_toConsumableArray(n)) : n;

        le.each(_a2, function (t) {
          (function (e, t, n, r) {
            if (t.nodeName !== n) {
              var _o12 = e.dom.rename(t, n);

              yt(e.dom, _o12, r), Ke(e, pt(n), _o12);
            } else yt(e.dom, t, r), Ke(e, pt(n), t);
          })(e, t, r, o);
        }), e.selection.setRng(mt(_i3));
      }
    }(e, r, s, t, i) : function (e, t, n, r) {
      if (t !== e.getBody()) if (t) {
        if (t.nodeName !== n || Nt(r) || gt(t)) {
          var _o13 = ut(e.selection.getRng());

          yt(e.dom, t, r);

          var _s3 = e.dom.rename(t, n);

          St(e.dom, _s3), e.selection.setRng(mt(_o13)), vt(e, n, r), Ke(e, pt(n), _s3);
        } else lt(e);
      } else vt(e, n, r), Ke(e, pt(n), t);
    }(e, r, t, i);
  },
      Ot = ae.DOM,
      Tt = function Tt(e, t) {
    var n = le.grep(e.select("ol,ul", t));
    le.each(n, function (t) {
      (function (e, t) {
        var n = t.parentNode;

        if ("LI" === n.nodeName && n.firstChild === t) {
          var _r8 = n.previousSibling;
          _r8 && "LI" === _r8.nodeName ? (_r8.appendChild(t), Se(e, n) && Ot.remove(n)) : Ot.setStyle(n, "listStyleType", "none");
        }

        if (me(n)) {
          var _e7 = n.previousSibling;
          _e7 && "LI" === _e7.nodeName && _e7.appendChild(t);
        }
      })(e, t);
    });
  },
      kt = function kt(e, t, n, r) {
    var o = t.startContainer;
    var s = t.startOffset;
    if (ue(o) && (n ? s < o.data.length : s > 0)) return o;
    var i = e.schema.getNonEmptyElements();
    1 === o.nodeType && (o = X.getNode(o, s));
    var a = new Y(o, r);
    n && function (e, t) {
      return !!Ce(t) && e.isBlock(t.nextSibling) && !Ce(t.previousSibling);
    }(e.dom, o) && a.next();
    var l = n ? a.next.bind(a) : a.prev2.bind(a);

    for (; o = l();) {
      if ("LI" === o.nodeName && !o.hasChildNodes()) return o;
      if (i[o.nodeName]) return o;
      if (ue(o) && o.data.length > 0) return o;
    }
  },
      At = function At(e, t) {
    var n = t.childNodes;
    return 1 === n.length && !me(n[0]) && e.isBlock(n[0]);
  },
      wt = function wt(e, t, n) {
    var r;
    var o = t.parentNode;
    if (!Ne(e, t) || !Ne(e, n)) return;
    me(n.lastChild) && (r = n.lastChild), o === n.lastChild && Ce(o.previousSibling) && e.remove(o.previousSibling);
    var s = n.lastChild;
    s && Ce(s) && t.hasChildNodes() && e.remove(s), Se(e, n, !0) && G(P(n)), function (e, t, n) {
      var r;
      var o = At(e, n) ? n.firstChild : n;
      if (function (e, t) {
        At(e, t) && e.remove(t.firstChild, !0);
      }(e, t), !Se(e, t, !0)) for (; r = t.firstChild;) {
        o.appendChild(r);
      }
    }(e, t, n), r && n.appendChild(r);
    var i = function (e, t) {
      var n = e.dom,
          r = t.dom;
      return n !== r && n.contains(r);
    }(P(n), P(t)) ? e.getParents(t, me, n) : [];
    e.remove(t), b(i, function (t) {
      Se(e, t) && t !== e.getRoot() && e.remove(t);
    });
  },
      Dt = function Dt(e, t) {
    var n = e.dom,
        r = e.selection,
        o = r.getStart(),
        s = _e(e, o),
        i = n.getParent(r.getStart(), "LI", s);

    if (i) {
      var _o14 = i.parentNode;
      if (_o14 === e.getBody() && Se(n, _o14)) return !0;

      var _a3 = Me(r.getRng()),
          _l = n.getParent(kt(e, _a3, t, s), "LI", s);

      if (_l && _l !== i) return e.undoManager.transact(function () {
        var n;
        t ? function (e, t, n, r) {
          var o = e.dom;
          if (o.isEmpty(r)) (function (e, t, n) {
            G(P(n)), wt(e.dom, t, n), e.selection.setCursorLocation(n, 0);
          })(e, n, r);else {
            var _s4 = ut(t);

            wt(o, n, r), e.selection.setRng(mt(_s4));
          }
        }(e, _a3, _l, i) : (n = i).parentNode.firstChild === n ? at(e) : function (e, t, n, r) {
          var o = ut(t);
          wt(e.dom, n, r);
          var s = mt(o);
          e.selection.setRng(s);
        }(e, _a3, i, _l);
      }), !0;
      if (!_l && !t && 0 === _a3.startOffset && 0 === _a3.endOffset) return e.undoManager.transact(function () {
        lt(e);
      }), !0;
    }

    return !1;
  },
      Bt = function Bt(e) {
    var t = e.selection.getStart(),
        n = _e(e, t);

    return e.dom.getParent(t, "LI,DT,DD", n) || $e(e).length > 0;
  },
      xt = function xt(e, t) {
    return e.selection.isCollapsed() ? function (e, t) {
      return Dt(e, t) || function (e, t) {
        var n = e.dom,
            r = e.selection.getStart(),
            o = _e(e, r),
            s = n.getParent(r, n.isBlock, o);

        if (s && n.isEmpty(s)) {
          var _r9 = Me(e.selection.getRng()),
              _i4 = n.getParent(kt(e, _r9, t, o), "LI", o);

          if (_i4) {
            var _a4 = function _a4(e) {
              return y(["td", "th", "caption"], U(e));
            },
                _l2 = function _l2(e) {
              return e.dom === o;
            };

            return !!function (e, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : c;
              return E(e, t, n).getOr(e.isNone() && t.isNone());
            }(Q(P(_i4), _a4, _l2), Q(P(_r9.startContainer), _a4, _l2), R) && (e.undoManager.transact(function () {
              (function (e, t, n) {
                var r = e.getParent(t.parentNode, e.isBlock, n);
                e.remove(t), r && e.isEmpty(r) && e.remove(r);
              })(n, s, o), St(n, _i4.parentNode), e.selection.select(_i4, !0), e.selection.collapse(t);
            }), !0);
          }
        }

        return !1;
      }(e, t);
    }(e, t) : function (e) {
      return !!Bt(e) && (e.undoManager.transact(function () {
        e.execCommand("Delete"), Tt(e.dom, e.getBody());
      }), !0);
    }(e);
  },
      Et = function Et(e) {
    var t = k(Ve(e).split("")),
        n = v(t, function (e, t) {
      var n = e.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
      return Math.pow(26, t) * n;
    });
    return N(n, function (e, t) {
      return e + t;
    }, 0);
  },
      It = function It(e) {
    if (--e < 0) return "";
    {
      var _t6 = e % 26,
          _n7 = Math.floor(e / 26);

      return It(_n7) + String.fromCharCode("A".charCodeAt(0) + _t6);
    }
  },
      Mt = function Mt(e) {
    var t = parseInt(e.start, 10);
    return x(e.listStyleType, "upper-alpha") ? It(t) : x(e.listStyleType, "lower-alpha") ? It(t).toLowerCase() : e.start;
  },
      Pt = function Pt(e, t) {
    return function () {
      var n = Ue(e);
      return n && n.nodeName === t;
    };
  },
      Rt = function Rt(e) {
    e.addCommand("mceListProps", function () {
      (function (e) {
        var t = Ue(e);
        ge(t) && e.windowManager.open({
          title: "List Properties",
          body: {
            type: "panel",
            items: [{
              type: "input",
              name: "start",
              label: "Start list at number",
              inputMode: "numeric"
            }]
          },
          initialData: {
            start: Mt({
              start: e.dom.getAttrib(t, "start", "1"),
              listStyleType: p.some(e.dom.getStyle(t, "list-style-type"))
            })
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
          onSubmit: function onSubmit(t) {
            (function (e) {
              switch (function (e) {
                return /^[0-9]+$/.test(e) ? 2 : /^[A-Z]+$/.test(e) ? 0 : /^[a-z]+$/.test(e) ? 1 : e.length > 0 ? 4 : 3;
              }(e)) {
                case 2:
                  return p.some({
                    listStyleType: p.none(),
                    start: e
                  });

                case 0:
                  return p.some({
                    listStyleType: p.some("upper-alpha"),
                    start: Et(e).toString()
                  });

                case 1:
                  return p.some({
                    listStyleType: p.some("lower-alpha"),
                    start: Et(e).toString()
                  });

                case 3:
                  return p.some({
                    listStyleType: p.none(),
                    start: ""
                  });

                case 4:
                  return p.none();
              }
            })(t.getData().start).each(function (t) {
              e.execCommand("mceListUpdate", !1, {
                attrs: {
                  start: "1" === t.start ? "" : t.start
                },
                styles: {
                  "list-style-type": t.listStyleType.getOr("")
                }
              });
            }), t.close();
          }
        });
      })(e);
    });
  };

  e.add("lists", function (e) {
    return function (e) {
      (0, e.options.register)("lists_indent_on_tab", {
        processor: "boolean",
        "default": !0
      });
    }(e), !1 === e.hasPlugin("rtc", !0) ? (function (e) {
      Oe(e) && function (e) {
        e.on("keydown", function (t) {
          t.keyCode !== ee.TAB || ee.metaKeyPressed(t) || e.undoManager.transact(function () {
            (t.shiftKey ? at(e) : it(e)) && t.preventDefault();
          });
        });
      }(e), function (e) {
        e.on("ExecCommand", function (t) {
          var n = t.command.toLowerCase();
          "delete" !== n && "forwarddelete" !== n || !Bt(e) || Tt(e.dom, e.getBody());
        }), e.on("keydown", function (t) {
          t.keyCode === ee.BACKSPACE ? xt(e, !1) && t.preventDefault() : t.keyCode === ee.DELETE && xt(e, !0) && t.preventDefault();
        });
      }(e);
    }(e), function (e) {
      e.on("BeforeExecCommand", function (t) {
        var n = t.command.toLowerCase();
        "indent" === n ? it(e) : "outdent" === n && at(e);
      }), e.addCommand("InsertUnorderedList", function (t, n) {
        Lt(e, "UL", n);
      }), e.addCommand("InsertOrderedList", function (t, n) {
        Lt(e, "OL", n);
      }), e.addCommand("InsertDefinitionList", function (t, n) {
        Lt(e, "DL", n);
      }), e.addCommand("RemoveList", function () {
        lt(e);
      }), Rt(e), e.addCommand("mceListUpdate", function (t, n) {
        o(n) && function (e, t) {
          var n = Ue(e);
          e.undoManager.transact(function () {
            o(t.styles) && e.dom.setStyles(n, t.styles), o(t.attrs) && ne(t.attrs, function (t, r) {
              return e.dom.setAttrib(n, r, t);
            });
          });
        }(e, n);
      }), e.addQueryStateHandler("InsertUnorderedList", Pt(e, "UL")), e.addQueryStateHandler("InsertOrderedList", Pt(e, "OL")), e.addQueryStateHandler("InsertDefinitionList", Pt(e, "DL"));
    }(e)) : Rt(e), function (e) {
      var t = function t(_t7) {
        return function () {
          return e.execCommand(_t7);
        };
      };

      e.hasPlugin("advlist") || (e.ui.registry.addToggleButton("numlist", {
        icon: "ordered-list",
        active: !1,
        tooltip: "Numbered list",
        onAction: t("InsertOrderedList"),
        onSetup: function onSetup(t) {
          return ht(e, "OL", t.setActive);
        }
      }), e.ui.registry.addToggleButton("bullist", {
        icon: "unordered-list",
        active: !1,
        tooltip: "Bullet list",
        onAction: t("InsertUnorderedList"),
        onSetup: function onSetup(t) {
          return ht(e, "UL", t.setActive);
        }
      }));
    }(e), function (e) {
      var t = {
        text: "List properties...",
        icon: "ordered-list",
        onAction: function onAction() {
          return e.execCommand("mceListProps");
        },
        onSetup: function onSetup(t) {
          return ht(e, "OL", t.setEnabled);
        }
      };
      e.ui.registry.addMenuItem("listprops", t), e.ui.registry.addContextMenu("lists", {
        update: function update(t) {
          var n = Ue(e, t);
          return ge(n) ? ["listprops"] : [];
        }
      });
    }(e), function (e) {
      return {
        backspaceDelete: function backspaceDelete(t) {
          xt(e, t);
        }
      };
    }(e);
  });
}();