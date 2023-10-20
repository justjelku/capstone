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

  var e = function e(_e) {
    var t = _e;
    return {
      get: function get() {
        return t;
      },
      set: function set(e) {
        t = e;
      }
    };
  };

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var n = function n(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (n = o = e, (r = String).prototype.isPrototypeOf(n) || (null === (s = o.constructor) || void 0 === s ? void 0 : s.name) === r.name) ? "string" : t;
        var n, o, r, s;
      }(t) === e;
    };
  },
      o = function o(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      r = n("string"),
      s = n("array"),
      a = o("boolean"),
      l = o("number"),
      i = function i() {},
      c = function c(e) {
    return function () {
      return e;
    };
  },
      d = c(!0),
      u = c("[!-#%-*,-\\/:;?@\\[-\\]_{}\xA1\xAB\xB7\xBB\xBF;\xB7\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1361-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u3008\u3009\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30\u2E31\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]");

  var m =
  /*#__PURE__*/
  function () {
    function m(e, t) {
      _classCallCheck(this, m);

      this.tag = e, this.value = t;
    }

    _createClass(m, [{
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
        return this.tag ? m.some(e(this.value)) : m.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : m.none();
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
        return !this.tag || e(this.value) ? this : m.none();
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
        return new m(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return m.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return null == e ? m.none() : m.some(e);
      }
    }]);

    return m;
  }();

  m.singletonNone = new m(!1);
  var h = u;
  var g = tinymce.util.Tools.resolve("tinymce.Env"),
      f = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var p = Array.prototype.slice,
      x = Array.prototype.push,
      y = function y(e, t) {
    var n = e.length,
        o = new Array(n);

    for (var _r = 0; _r < n; _r++) {
      var _n = e[_r];
      o[_r] = t(_n, _r);
    }

    return o;
  },
      w = function w(e, t) {
    for (var _n2 = 0, _o = e.length; _n2 < _o; _n2++) {
      t(e[_n2], _n2);
    }
  },
      b = function b(e, t) {
    for (var _n3 = e.length - 1; _n3 >= 0; _n3--) {
      t(e[_n3], _n3);
    }
  },
      v = function v(e, t) {
    return function (e) {
      var t = [];

      for (var _n4 = 0, _o2 = e.length; _n4 < _o2; ++_n4) {
        if (!s(e[_n4])) throw new Error("Arr.flatten item " + _n4 + " was not an array, input: " + e);
        x.apply(t, e[_n4]);
      }

      return t;
    }(y(e, t));
  },
      C = Object.hasOwnProperty,
      E = function E(e, t) {
    return C.call(e, t);
  };

  "undefined" != typeof window ? window : Function("return this;")();
  var O = (3, function (e) {
    return 3 === function (e) {
      return e.dom.nodeType;
    }(e);
  });

  var N = function N(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      k = N,
      T = function T(e, t) {
    return {
      element: e,
      offset: t
    };
  },
      A = function A(e, t) {
    (function (e, t) {
      var n = function (e) {
        return m.from(e.dom.parentNode).map(k);
      }(e);

      n.each(function (n) {
        n.dom.insertBefore(t.dom, e.dom);
      });
    })(e, t), function (e, t) {
      e.dom.appendChild(t.dom);
    }(t, e);
  },
      S = function (e, t) {
    var n = function n(t) {
      return e(t) ? m.from(t.dom.nodeValue) : m.none();
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
  }(O),
      B = function B(e) {
    return S.get(e);
  };

  var F = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker");

  var I = function I(e, t) {
    return e.isBlock(t) || E(e.schema.getVoidElements(), t.nodeName);
  },
      M = function M(e, t) {
    return "false" === e.getContentEditable(t);
  },
      R = function R(e, t) {
    return !e.isBlock(t) && E(e.schema.getWhitespaceElements(), t.nodeName);
  },
      P = function P(e, t) {
    return function (e, t) {
      var n = function (e) {
        return y(e.dom.childNodes, k);
      }(e);

      return n.length > 0 && t < n.length ? T(n[t], 0) : T(e, t);
    }(k(e), t);
  },
      D = function D(e, t, n, o, r) {
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
    var a = s ? t(!1) : n;

    for (; a;) {
      var _n5 = M(e, a);

      if (_n5 || R(e, a)) {
        if (_n5 ? o.cef(a) : o.boundary(a)) break;
        a = t(!0);
      } else {
        if (I(e, a)) {
          if (o.boundary(a)) break;
        } else 3 === a.nodeType && o.text(a);

        if (a === r) break;
        a = t(!1);
      }
    }
  },
      W = function W(e, t, n, o, r) {
    if (function (e, t) {
      return I(e, t) || M(e, t) || R(e, t) || function (e, t) {
        return "true" === e.getContentEditable(t) && "false" === e.getContentEditableParent(t.parentNode);
      }(e, t);
    }(e, n)) return;
    var s = e.getParent(o, e.isBlock),
        a = new F(n, s),
        l = r ? a.next.bind(a) : a.prev.bind(a);
    D(e, l, n, {
      boundary: d,
      cef: d,
      text: function text(e) {
        r ? t.fOffset += e.length : t.sOffset += e.length, t.elements.push(k(e));
      }
    });
  },
      V = function V(e, t, n, o, r) {
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
    var a = new F(n, t),
        l = [];
    var i = {
      sOffset: 0,
      fOffset: 0,
      elements: []
    };
    W(e, i, n, t, !1);

    var c = function c() {
      return i.elements.length > 0 && (l.push(i), i = {
        sOffset: 0,
        fOffset: 0,
        elements: []
      }), !1;
    };

    return D(e, a.next.bind(a), n, {
      boundary: c,
      cef: function cef(e) {
        return c(), r && l.push.apply(l, _toConsumableArray(r.cef(e))), !1;
      },
      text: function text(e) {
        i.elements.push(k(e)), r && r.text(e, i);
      }
    }, o, s), o && W(e, i, o, t, !0), c(), l;
  },
      $ = function $(e, t) {
    var n = P(t.startContainer, t.startOffset),
        o = n.element.dom,
        r = P(t.endContainer, t.endOffset),
        s = r.element.dom;
    return V(e, t.commonAncestorContainer, o, s, {
      text: function text(e, t) {
        e === s ? t.fOffset += e.length - r.offset : e === o && (t.sOffset += n.offset);
      },
      cef: function cef(t) {
        return function (e, t) {
          var n = p.call(e, 0);
          return n.sort(function (e, t) {
            return function (e, t) {
              return function (e, t, n) {
                return 0 != (e.compareDocumentPosition(t) & n);
              }(e, t, Node.DOCUMENT_POSITION_PRECEDING);
            }(e.elements[0].dom, t.elements[0].dom) ? 1 : -1;
          }), n;
        }(v((n = k(t), function (e, t) {
          var n = void 0 === t ? document : t.dom;
          return 1 !== (o = n).nodeType && 9 !== o.nodeType && 11 !== o.nodeType || 0 === o.childElementCount ? [] : y(n.querySelectorAll(e), k);
          var o;
        }("*[contenteditable=true]", n)), function (t) {
          var n = t.dom;
          return V(e, n, n);
        }));
        var n;
      }
    }, !1);
  },
      j = function j(e, t) {
    return t.collapsed ? [] : $(e, t);
  },
      _ = function _(e, t) {
    var n = e.createRng();
    return n.selectNode(t), j(e, n);
  },
      z = function z(e, t) {
    return v(t, function (t) {
      var n = t.elements,
          o = y(n, B).join(""),
          r = function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
        var r = t.regex;
        r.lastIndex = n;
        var s = [];
        var a;

        for (; a = r.exec(e);) {
          var _e2 = a[t.matchIndex],
              _n6 = a.index + a[0].indexOf(_e2),
              _l = _n6 + _e2.length;

          if (_l > o) break;
          s.push({
            start: _n6,
            finish: _l
          }), r.lastIndex = _l;
        }

        return s;
      }(o, e, t.sOffset, o.length - t.fOffset);

      return function (e, t) {
        var n = (o = e, r = function r(e, n) {
          var o = B(n),
              r = e.last,
              s = r + o.length,
              a = v(t, function (e, t) {
            return e.start < s && e.finish > r ? [{
              element: n,
              start: Math.max(r, e.start) - r,
              finish: Math.min(s, e.finish) - r,
              matchId: t
            }] : [];
          });
          return {
            results: e.results.concat(a),
            last: s
          };
        }, s = {
          results: [],
          last: 0
        }, w(o, function (e, t) {
          s = r(s, e);
        }), s).results;
        var o, r, s;
        return function (e, t) {
          if (0 === e.length) return [];
          {
            var _n7 = t(e[0]);

            var _o3 = [];
            var _r2 = [];

            for (var _s = 0, _a = e.length; _s < _a; _s++) {
              var _a2 = e[_s],
                  _l2 = t(_a2);

              _l2 !== _n7 && (_o3.push(_r2), _r2 = []), _n7 = _l2, _r2.push(_a2);
            }

            return 0 !== _r2.length && _o3.push(_r2), _o3;
          }
        }(n, function (e) {
          return e.matchId;
        });
      }(n, r);
    });
  },
      U = function U(e, t) {
    b(e, function (e, n) {
      b(e, function (e) {
        var o = k(t.cloneNode(!1));

        (function (e, t, n) {
          (function (e, t, n) {
            if (!(r(n) || a(n) || l(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "");
          })(e.dom, t, n);
        })(o, "data-mce-index", n);

        var s = e.element.dom;
        if (s.length === e.finish && 0 === e.start) A(e.element, o);else {
          s.length !== e.finish && s.splitText(e.finish);

          var _t = s.splitText(e.start);

          A(k(_t), o);
        }
      });
    });
  },
      q = function q(e) {
    var t = e.getAttribute("data-mce-index");
    return "number" == typeof t ? "" + t : t;
  },
      G = function G(e, t, n, o) {
    var r = e.dom.create("span", {
      "data-mce-bogus": 1
    });
    r.className = "mce-match-marker";
    var s = e.getBody();
    return te(e, t, !1), o ? function (e, t, n, o) {
      var r = n.getBookmark(),
          s = e.select("td[data-mce-selected],th[data-mce-selected]"),
          a = s.length > 0 ? function (e, t) {
        return v(t, function (t) {
          return _(e, t);
        });
      }(e, s) : j(e, n.getRng()),
          l = z(t, a);
      return U(l, o), n.moveToBookmark(r), l.length;
    }(e.dom, n, e.selection, r) : function (e, t, n, o) {
      var r = _(e, n),
          s = z(t, r);

      return U(s, o), s.length;
    }(e.dom, n, s, r);
  },
      K = function K(e) {
    var t = e.parentNode;
    e.firstChild && t.insertBefore(e.firstChild, e), e.parentNode.removeChild(e);
  },
      H = function H(e, t) {
    var n = [],
        o = f.toArray(e.getBody().getElementsByTagName("span"));
    if (o.length) for (var _e3 = 0; _e3 < o.length; _e3++) {
      var _r3 = q(o[_e3]);

      null !== _r3 && _r3.length && _r3 === t.toString() && n.push(o[_e3]);
    }
    return n;
  },
      J = function J(e, t, n) {
    var o = t.get();
    var r = o.index;
    var s = e.dom;
    (n = !1 !== n) ? r + 1 === o.count ? r = 0 : r++ : r - 1 == -1 ? r = o.count - 1 : r--, s.removeClass(H(e, o.index), "mce-match-marker-selected");
    var a = H(e, r);
    return a.length ? (s.addClass(H(e, r), "mce-match-marker-selected"), e.selection.scrollIntoView(a[0]), r) : -1;
  },
      L = function L(e, t) {
    var n = t.parentNode;
    e.remove(t), e.isEmpty(n) && e.remove(n);
  },
      Q = function Q(e, t, n, o, r, s) {
    var a = e.selection,
        l = function (e, t) {
      var n = "(" + e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(/\s/g, "[^\\S\\r\\n\\uFEFF]") + ")";
      return t ? "(?:^|\\s|".concat(h(), ")") + n + "(?=$|\\s|".concat(h(), ")") : n;
    }(n, r),
        i = a.isForward(),
        c = {
      regex: new RegExp(l, o ? "g" : "gi"),
      matchIndex: 1
    },
        d = G(e, t, c, s);

    if (g.browser.isSafari() && a.setRng(a.getRng(), i), d) {
      var _a3 = J(e, t, !0);

      t.set({
        index: _a3,
        count: d,
        text: n,
        matchCase: o,
        wholeWord: r,
        inSelection: s
      });
    }

    return d;
  },
      X = function X(e, t) {
    var n = J(e, t, !0);
    t.set(_objectSpread({}, t.get(), {
      index: n
    }));
  },
      Y = function Y(e, t) {
    var n = J(e, t, !1);
    t.set(_objectSpread({}, t.get(), {
      index: n
    }));
  },
      Z = function Z(e) {
    var t = q(e);
    return null !== t && t.length > 0;
  },
      ee = function ee(e, t, n, o, r) {
    var s = t.get(),
        a = s.index;
    var l,
        i = a;
    o = !1 !== o;
    var c = e.getBody(),
        d = f.grep(f.toArray(c.getElementsByTagName("span")), Z);

    for (var _t2 = 0; _t2 < d.length; _t2++) {
      var _c = q(d[_t2]);

      var _u = l = parseInt(_c, 10);

      if (r || _u === s.index) {
        for (n.length ? (d[_t2].firstChild.nodeValue = n, K(d[_t2])) : L(e.dom, d[_t2]); d[++_t2];) {
          if (_u = parseInt(q(d[_t2]), 10), _u !== l) {
            _t2--;
            break;
          }

          L(e.dom, d[_t2]);
        }

        o && i--;
      } else l > a && d[_t2].setAttribute("data-mce-index", String(l - 1));
    }

    return t.set(_objectSpread({}, s, {
      count: r ? 0 : s.count - 1,
      index: i
    })), o ? X(e, t) : Y(e, t), !r && t.get().count > 0;
  },
      te = function te(e, t, n) {
    var o, r;
    var s = t.get(),
        a = f.toArray(e.getBody().getElementsByTagName("span"));

    for (var _e4 = 0; _e4 < a.length; _e4++) {
      var _t3 = q(a[_e4]);

      null !== _t3 && _t3.length && (_t3 === s.index.toString() && (o || (o = a[_e4].firstChild), r = a[_e4].firstChild), K(a[_e4]));
    }

    if (t.set(_objectSpread({}, s, {
      index: -1,
      count: 0,
      text: ""
    })), o && r) {
      var _t4 = e.dom.createRng();

      return _t4.setStart(o, 0), _t4.setEnd(r, r.data.length), !1 !== n && e.selection.setRng(_t4), _t4;
    }
  },
      ne = function ne(t, n) {
    var o = function () {
      var t = function (t) {
        var n = e(m.none()),
            o = function o() {
          return n.get().each(t);
        };

        return {
          clear: function clear() {
            o(), n.set(m.none());
          },
          isSet: function isSet() {
            return n.get().isSome();
          },
          get: function get() {
            return n.get();
          },
          set: function set(e) {
            o(), n.set(m.some(e));
          }
        };
      }(i);

      return _objectSpread({}, t, {
        on: function on(e) {
          return t.get().each(e);
        }
      });
    }();

    t.undoManager.add();

    var r = f.trim(t.selection.getContent({
      format: "text"
    })),
        s = function s(e) {
      e.setEnabled("next", function (e, t) {
        return t.get().count > 1;
      }(0, n)), e.setEnabled("prev", function (e, t) {
        return t.get().count > 1;
      }(0, n));
    },
        a = function a(e, t) {
      w(["replace", "replaceall", "prev", "next"], function (n) {
        return e.setEnabled(n, !t);
      });
    },
        l = function l(e, t) {
      g.browser.isSafari() && g.deviceType.isTouch() && ("find" === t || "replace" === t || "replaceall" === t) && e.focus(t);
    },
        c = function c(e) {
      te(t, n, !1), a(e, !0), s(e);
    },
        d = function d(e) {
      var o = e.getData(),
          r = n.get();

      if (o.findtext.length) {
        if (r.text === o.findtext && r.matchCase === o.matchcase && r.wholeWord === o.wholewords) X(t, n);else {
          var _r4 = Q(t, n, o.findtext, o.matchcase, o.wholewords, o.inselection);

          _r4 <= 0 && function (e) {
            t.windowManager.alert("Could not find the specified string.", function () {
              e.focus("findtext");
            });
          }(e), a(e, 0 === _r4);
        }
        s(e);
      } else c(e);
    },
        u = n.get(),
        h = {
      title: "Find and Replace",
      size: "normal",
      body: {
        type: "panel",
        items: [{
          type: "bar",
          items: [{
            type: "input",
            name: "findtext",
            placeholder: "Find",
            maximized: !0,
            inputMode: "search"
          }, {
            type: "button",
            name: "prev",
            text: "Previous",
            icon: "action-prev",
            enabled: !1,
            borderless: !0
          }, {
            type: "button",
            name: "next",
            text: "Next",
            icon: "action-next",
            enabled: !1,
            borderless: !0
          }]
        }, {
          type: "input",
          name: "replacetext",
          placeholder: "Replace with",
          inputMode: "search"
        }]
      },
      buttons: [{
        type: "menu",
        name: "options",
        icon: "preferences",
        tooltip: "Preferences",
        align: "start",
        items: [{
          type: "togglemenuitem",
          name: "matchcase",
          text: "Match case"
        }, {
          type: "togglemenuitem",
          name: "wholewords",
          text: "Find whole words only"
        }, {
          type: "togglemenuitem",
          name: "inselection",
          text: "Find in selection"
        }]
      }, {
        type: "custom",
        name: "find",
        text: "Find",
        primary: !0
      }, {
        type: "custom",
        name: "replace",
        text: "Replace",
        enabled: !1
      }, {
        type: "custom",
        name: "replaceall",
        text: "Replace all",
        enabled: !1
      }],
      initialData: {
        findtext: r,
        replacetext: "",
        wholewords: u.wholeWord,
        matchcase: u.matchCase,
        inselection: u.inSelection
      },
      onChange: function onChange(e, t) {
        "findtext" === t.name && n.get().count > 0 && c(e);
      },
      onAction: function onAction(e, o) {
        var r = e.getData();

        switch (o.name) {
          case "find":
            d(e);
            break;

          case "replace":
            ee(t, n, r.replacetext) ? s(e) : c(e);
            break;

          case "replaceall":
            ee(t, n, r.replacetext, !0, !0), c(e);
            break;

          case "prev":
            Y(t, n), s(e);
            break;

          case "next":
            X(t, n), s(e);
            break;

          case "matchcase":
          case "wholewords":
          case "inselection":
            (function (e) {
              var t = e.getData(),
                  o = n.get();
              n.set(_objectSpread({}, o, {
                matchCase: t.matchcase,
                wholeWord: t.wholewords,
                inSelection: t.inselection
              }));
            })(e), c(e);
        }

        l(e, o.name);
      },
      onSubmit: function onSubmit(e) {
        d(e), l(e, "find");
      },
      onClose: function onClose() {
        t.focus(), te(t, n), t.undoManager.add();
      }
    };

    o.set(t.windowManager.open(h, {
      inline: "toolbar"
    }));
  },
      oe = function oe(e, t) {
    return function () {
      ne(e, t);
    };
  };

  t.add("searchreplace", function (t) {
    var n = e({
      index: -1,
      count: 0,
      text: "",
      matchCase: !1,
      wholeWord: !1,
      inSelection: !1
    });
    return function (e, t) {
      e.addCommand("SearchReplace", function () {
        ne(e, t);
      });
    }(t, n), function (e, t) {
      e.ui.registry.addMenuItem("searchreplace", {
        text: "Find and replace...",
        shortcut: "Meta+F",
        onAction: oe(e, t),
        icon: "search"
      }), e.ui.registry.addButton("searchreplace", {
        tooltip: "Find and replace",
        onAction: oe(e, t),
        icon: "search"
      }), e.shortcuts.add("Meta+F", "", oe(e, t));
    }(t, n), function (e, t) {
      return {
        done: function done(n) {
          return te(e, t, n);
        },
        find: function find(n, o, r) {
          var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
          return Q(e, t, n, o, r, s);
        },
        next: function next() {
          return X(e, t);
        },
        prev: function prev() {
          return Y(e, t);
        },
        replace: function replace(n, o, r) {
          return ee(e, t, n, o, r);
        }
      };
    }(t, n);
  });
}();