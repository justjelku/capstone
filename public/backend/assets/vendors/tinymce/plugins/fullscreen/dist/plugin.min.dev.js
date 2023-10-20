"use strict";

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
    var t = _e2;
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

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (n = r = e, (o = String).prototype.isPrototypeOf(n) || (null === (s = r.constructor) || void 0 === s ? void 0 : s.name) === o.name) ? "string" : t;
        var n, r, o, s;
      }(t) === e;
    };
  },
      r = function r(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      o = n("string"),
      s = n("array"),
      i = (null, function (e) {
    return null === e;
  });

  var l = r("boolean"),
      a = function a(e) {
    return !function (e) {
      return null == e;
    }(e);
  },
      c = r("function"),
      u = r("number"),
      d = function d() {},
      m = function m(e) {
    return function () {
      return e;
    };
  };

  function h(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        n[_key2] = arguments[_key2];
      }

      var r = t.concat(n);
      return e.apply(null, r);
    };
  }

  var g = m(!1),
      p = m(!0);

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
        return a(e) ? f.some(e) : f.none();
      }
    }]);

    return f;
  }();

  f.singletonNone = new f(!1);

  var v = function v(t) {
    var n = e(f.none()),
        r = function r() {
      return n.get().each(t);
    };

    return {
      clear: function clear() {
        r(), n.set(f.none());
      },
      isSet: function isSet() {
        return n.get().isSome();
      },
      get: function get() {
        return n.get();
      },
      set: function set(e) {
        r(), n.set(f.some(e));
      }
    };
  },
      w = function w() {
    return v(function (e) {
      return e.unbind();
    });
  },
      y = Array.prototype.push,
      b = function b(e, t) {
    var n = e.length,
        r = new Array(n);

    for (var _o = 0; _o < n; _o++) {
      var _n = e[_o];
      r[_o] = t(_n, _o);
    }

    return r;
  },
      S = function S(e, t) {
    for (var _n2 = 0, _r = e.length; _n2 < _r; _n2++) {
      t(e[_n2], _n2);
    }
  },
      x = function x(e, t) {
    var n = [];

    for (var _r2 = 0, _o2 = e.length; _r2 < _o2; _r2++) {
      var _o3 = e[_r2];
      t(_o3, _r2) && n.push(_o3);
    }

    return n;
  },
      E = function E(e, t) {
    return function (e, t, n) {
      for (var _r3 = 0, _o4 = e.length; _r3 < _o4; _r3++) {
        var _o5 = e[_r3];
        if (t(_o5, _r3)) return f.some(_o5);
        if (n(_o5, _r3)) break;
      }

      return f.none();
    }(e, t, g);
  },
      F = Object.keys,
      O = function O(e, t) {
    return -1 !== e.indexOf(t);
  },
      T = function T(e) {
    return void 0 !== e.style && c(e.style.getPropertyValue);
  },
      k = function k(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      C = k;

  "undefined" != typeof window ? window : Function("return this;")();

  var A = function A(e) {
    return function (t) {
      return function (e) {
        return e.dom.nodeType;
      }(t) === e;
    };
  },
      R = A(1),
      L = A(3),
      M = A(9),
      N = A(11),
      P = function P(e, t) {
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
      D = function D(e) {
    return C(e.dom.ownerDocument);
  },
      W = function W(e) {
    return b(e.dom.childNodes, C);
  },
      q = c(Element.prototype.attachShadow) && c(Node.prototype.getRootNode),
      H = m(q),
      I = q ? function (e) {
    return C(e.dom.getRootNode());
  } : function (e) {
    return M(e) ? e : D(e);
  },
      B = function B(e) {
    var t = I(e);
    return N(n = t) && a(n.dom.host) ? f.some(t) : f.none();
    var n;
  },
      V = function V(e) {
    return C(e.dom.host);
  },
      _ = function _(e) {
    var t = L(e) ? e.dom.parentNode : e.dom;
    if (null == t || null === t.ownerDocument) return !1;
    var n = t.ownerDocument;
    return B(C(t)).fold(function () {
      return n.body.contains(t);
    }, (r = _, o = V, function (e) {
      return r(o(e));
    }));
    var r, o;
  },
      j = function j(e, t) {
    var n = e.dom.getAttribute(t);
    return null === n ? void 0 : n;
  },
      z = function z(e, t) {
    e.dom.removeAttribute(t);
  },
      $ = function $(e, t) {
    var n = e.dom;

    (function (e, t) {
      var n = F(e);

      for (var _r4 = 0, _o6 = n.length; _r4 < _o6; _r4++) {
        var _o7 = n[_r4];
        t(e[_o7], _o7);
      }
    })(t, function (e, t) {
      (function (e, t, n) {
        if (!o(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
        T(e) && e.style.setProperty(t, n);
      })(n, t, e);
    });
  },
      U = function U(e) {
    var t = C(function (e) {
      if (H() && a(e.target)) {
        var _t = C(e.target);

        if (R(_t) && a(_t.dom.shadowRoot) && e.composed && e.composedPath) {
          var _t2 = e.composedPath();

          if (_t2) return function (e, t) {
            return 0 < e.length ? f.some(e[0]) : f.none();
          }(_t2);
        }
      }

      return f.from(e.target);
    }(e).getOr(e.target)),
        n = function n() {
      return e.stopPropagation();
    },
        r = function r() {
      return e.preventDefault();
    },
        o = (s = r, i = n, function () {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      return s(i.apply(null, e));
    });

    var s, i;
    return function (e, t, n, r, o, s, i) {
      return {
        target: e,
        x: t,
        y: n,
        stop: r,
        prevent: o,
        kill: s,
        raw: i
      };
    }(t, e.clientX, e.clientY, n, r, o, e);
  },
      K = function K(e, t, n, r) {
    e.dom.removeEventListener(t, n, r);
  },
      X = p,
      Y = function Y(e, t, n) {
    return function (e, t, n, r) {
      return function (e, t, n, r, o) {
        var s = function (e, t) {
          return function (n) {
            e(n) && t(U(n));
          };
        }(n, r);

        return e.dom.addEventListener(t, s, o), {
          unbind: h(K, e, t, s, o)
        };
      }(e, t, n, r, !1);
    }(e, t, X, n);
  },
      G = function G() {
    return J(0, 0);
  },
      J = function J(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      Q = {
    nu: J,
    detect: function detect(e, t) {
      var n = String(t).toLowerCase();
      return 0 === e.length ? G() : function (e, t) {
        var n = function (e, t) {
          for (var _n3 = 0; _n3 < e.length; _n3++) {
            var _r5 = e[_n3];
            if (_r5.test(t)) return _r5;
          }
        }(e, t);

        if (!n) return {
          major: 0,
          minor: 0
        };

        var r = function r(e) {
          return Number(t.replace(n, "$" + e));
        };

        return J(r(1), r(2));
      }(e, n);
    },
    unknown: G
  },
      Z = function Z(e, t) {
    var n = String(t).toLowerCase();
    return E(e, function (e) {
      return e.search(n);
    });
  },
      ee = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      te = function te(e) {
    return function (t) {
      return O(t, e);
    };
  },
      ne = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return O(e, "edge/") && O(e, "chrome") && O(e, "safari") && O(e, "applewebkit");
    }
  }, {
    name: "Chromium",
    brand: "Chromium",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, ee],
    search: function search(e) {
      return O(e, "chrome") && !O(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return O(e, "msie") || O(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [ee, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: te("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: te("firefox")
  }, {
    name: "Safari",
    versionRegexes: [ee, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (O(e, "safari") || O(e, "mobile/")) && O(e, "applewebkit");
    }
  }],
      re = [{
    name: "Windows",
    search: te("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return O(e, "iphone") || O(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: te("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "macOS",
    search: te("mac os x"),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: te("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: te("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: te("freebsd"),
    versionRegexes: []
  }, {
    name: "ChromeOS",
    search: te("cros"),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }],
      oe = {
    browsers: m(ne),
    oses: m(re)
  },
      se = "Edge",
      ie = "Chromium",
      le = "Opera",
      ae = "Firefox",
      ce = "Safari",
      ue = function ue(e) {
    var t = e.current,
        n = e.version,
        r = function r(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isEdge: r(se),
      isChromium: r(ie),
      isIE: r("IE"),
      isOpera: r(le),
      isFirefox: r(ae),
      isSafari: r(ce)
    };
  },
      de = function de() {
    return ue({
      current: void 0,
      version: Q.unknown()
    });
  },
      me = ue,
      he = (m(se), m(ie), m("IE"), m(le), m(ae), m(ce), "Windows"),
      ge = "Android",
      pe = "Linux",
      fe = "macOS",
      ve = "Solaris",
      we = "FreeBSD",
      ye = "ChromeOS",
      be = function be(e) {
    var t = e.current,
        n = e.version,
        r = function r(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isWindows: r(he),
      isiOS: r("iOS"),
      isAndroid: r(ge),
      isMacOS: r(fe),
      isLinux: r(pe),
      isSolaris: r(ve),
      isFreeBSD: r(we),
      isChromeOS: r(ye)
    };
  },
      Se = function Se() {
    return be({
      current: void 0,
      version: Q.unknown()
    });
  },
      xe = be,
      Ee = (m(he), m("iOS"), m(ge), m(pe), m(fe), m(ve), m(we), m(ye), function (e, t, n) {
    var r = oe.browsers(),
        o = oe.oses(),
        s = t.bind(function (e) {
      return function (e, t) {
        return function (e, t) {
          for (var _n4 = 0; _n4 < e.length; _n4++) {
            var _r6 = t(e[_n4]);

            if (_r6.isSome()) return _r6;
          }

          return f.none();
        }(t.brands, function (t) {
          var n = t.brand.toLowerCase();
          return E(e, function (e) {
            var t;
            return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
          }).map(function (e) {
            return {
              current: e.name,
              version: Q.nu(parseInt(t.version, 10), 0)
            };
          });
        });
      }(r, e);
    }).orThunk(function () {
      return function (e, t) {
        return Z(e, t).map(function (e) {
          var n = Q.detect(e.versionRegexes, t);
          return {
            current: e.name,
            version: n
          };
        });
      }(r, e);
    }).fold(de, me),
        i = function (e, t) {
      return Z(e, t).map(function (e) {
        var n = Q.detect(e.versionRegexes, t);
        return {
          current: e.name,
          version: n
        };
      });
    }(o, e).fold(Se, xe),
        l = function (e, t, n, r) {
      var o = e.isiOS() && !0 === /ipad/i.test(n),
          s = e.isiOS() && !o,
          i = e.isiOS() || e.isAndroid(),
          l = i || r("(pointer:coarse)"),
          a = o || !s && i && r("(min-device-width:768px)"),
          c = s || i && !a,
          u = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
          d = !c && !a && !u;
      return {
        isiPad: m(o),
        isiPhone: m(s),
        isTablet: m(a),
        isPhone: m(c),
        isTouch: m(l),
        isAndroid: e.isAndroid,
        isiOS: e.isiOS,
        isWebView: m(u),
        isDesktop: m(d)
      };
    }(i, s, e, n);

    return {
      browser: s,
      os: i,
      deviceType: l
    };
  }),
      Fe = function Fe(e) {
    return window.matchMedia(e).matches;
  };

  var Oe = function (e) {
    var t,
        n = !1;
    return function () {
      for (var _len4 = arguments.length, r = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        r[_key4] = arguments[_key4];
      }

      return n || (n = !0, t = e.apply(null, r)), t;
    };
  }(function () {
    return Ee(navigator.userAgent, f.from(navigator.userAgentData), Fe);
  });

  var Te = function Te(e, t) {
    return {
      left: e,
      top: t,
      translate: function translate(n, r) {
        return Te(e + n, t + r);
      }
    };
  },
      ke = Te,
      Ce = function Ce(e) {
    var t = void 0 === e ? window : e;
    return Oe().browser.isFirefox() ? f.none() : f.from(t.visualViewport);
  },
      Ae = function Ae(e, t, n, r) {
    return {
      x: e,
      y: t,
      width: n,
      height: r,
      right: e + n,
      bottom: t + r
    };
  },
      Re = function Re(e) {
    var t = void 0 === e ? window : e,
        n = t.document,
        r = function (e) {
      var t = void 0 !== e ? e.dom : document,
          n = t.body.scrollLeft || t.documentElement.scrollLeft,
          r = t.body.scrollTop || t.documentElement.scrollTop;
      return ke(n, r);
    }(C(n));

    return Ce(t).fold(function () {
      var e = t.document.documentElement,
          n = e.clientWidth,
          o = e.clientHeight;
      return Ae(r.left, r.top, n, o);
    }, function (e) {
      return Ae(Math.max(e.pageLeft, r.left), Math.max(e.pageTop, r.top), e.width, e.height);
    });
  },
      Le = function Le(e, t, n) {
    return Ce(n).map(function (n) {
      var r = function r(e) {
        return t(U(e));
      };

      return n.addEventListener(e, r), {
        unbind: function unbind() {
          return n.removeEventListener(e, r);
        }
      };
    }).getOrThunk(function () {
      return {
        unbind: d
      };
    });
  };

  var Me = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      Ne = tinymce.util.Tools.resolve("tinymce.Env");

  var Pe = function Pe(e, t) {
    e.dispatch("FullscreenStateChanged", {
      state: t
    }), e.dispatch("ResizeEditor");
  },
      De = ("fullscreen_native", function (e) {
    return e.options.get("fullscreen_native");
  });

  var We = function We(e) {
    return e.dom === (void 0 !== (t = D(e).dom).fullscreenElement ? t.fullscreenElement : void 0 !== t.msFullscreenElement ? t.msFullscreenElement : void 0 !== t.webkitFullscreenElement ? t.webkitFullscreenElement : null);
    var t;
  },
      qe = function qe(e, t, n) {
    return function (e, t, n) {
      return x(function (e, t) {
        var n = c(t) ? t : g;
        var r = e.dom;
        var o = [];

        for (; null !== r.parentNode && void 0 !== r.parentNode;) {
          var _e4 = r.parentNode,
              _t3 = C(_e4);

          if (o.push(_t3), !0 === n(_t3)) break;
          r = _e4;
        }

        return o;
      }(e, n), t);
    }(e, function (e) {
      return P(e, t);
    }, n);
  },
      He = function He(e, t) {
    return function (e, n) {
      return x(function (e) {
        return f.from(e.dom.parentNode).map(C);
      }(r = e).map(W).map(function (e) {
        return x(e, function (e) {
          return t = e, !(r.dom === t.dom);
          var t;
        });
      }).getOr([]), function (e) {
        return P(e, t);
      });
      var r;
    }(e);
  },
      Ie = "data-ephox-mobile-fullscreen-style",
      Be = "position:absolute!important;",
      Ve = "top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",
      _e = Ne.os.isAndroid(),
      je = function je(e) {
    var t = function (e, t) {
      var n = e.dom,
          r = window.getComputedStyle(n).getPropertyValue(t);
      return "" !== r || _(e) ? r : function (e, t) {
        return T(e) ? e.style.getPropertyValue(t) : "";
      }(n, t);
    }(e, "background-color");

    return void 0 !== t && "" !== t ? "background-color:" + t + "!important" : "background-color:rgb(255,255,255)!important;";
  },
      ze = Me.DOM,
      $e = Ce().fold(function () {
    return {
      bind: d,
      unbind: d
    };
  }, function (e) {
    var t = function () {
      var e = v(d);
      return _objectSpread({}, e, {
        on: function on(t) {
          return e.get().each(t);
        }
      });
    }(),
        n = w(),
        r = w(),
        o = function (e, t) {
      var n = null;
      return {
        cancel: function cancel() {
          i(n) || (clearTimeout(n), n = null);
        },
        throttle: function throttle() {
          for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            t[_key5] = arguments[_key5];
          }

          i(n) && (n = setTimeout(function () {
            n = null, e.apply(null, t);
          }, 50));
        }
      };
    }(function () {
      document.body.scrollTop = 0, document.documentElement.scrollTop = 0, window.requestAnimationFrame(function () {
        t.on(function (t) {
          return $(t, {
            top: e.offsetTop + "px",
            left: e.offsetLeft + "px",
            height: e.height + "px",
            width: e.width + "px"
          });
        });
      });
    });

    return {
      bind: function bind(e) {
        t.set(e), o.throttle(), n.set(Le("resize", o.throttle)), r.set(Le("scroll", o.throttle));
      },
      unbind: function unbind() {
        t.on(function () {
          n.clear(), r.clear();
        }), t.clear();
      }
    };
  }),
      Ue = function Ue(e, t) {
    var n = document.body,
        r = document.documentElement,
        i = e.getContainer(),
        a = C(i),
        c = function (e) {
      var t = C(e.getElement());
      return B(t).map(V).getOrThunk(function () {
        return function (e) {
          var t = e.dom.body;
          if (null == t) throw new Error("Body is not available yet");
          return C(t);
        }(D(t));
      });
    }(e),
        d = t.get(),
        m = C(e.getBody()),
        h = Ne.deviceType.isTouch(),
        g = i.style,
        p = e.iframeElement.style,
        v = function v(e) {
      e(n, "tox-fullscreen"), e(r, "tox-fullscreen"), e(i, "tox-fullscreen"), B(a).map(function (e) {
        return V(e).dom;
      }).each(function (t) {
        e(t, "tox-fullscreen"), e(t, "tox-shadowhost");
      });
    },
        w = function w() {
      h && function (e) {
        var t = function (e, t) {
          var n = document;
          return 1 !== (r = n).nodeType && 9 !== r.nodeType && 11 !== r.nodeType || 0 === r.childElementCount ? [] : b(n.querySelectorAll(e), C);
          var r;
        }("[" + Ie + "]");

        S(t, function (t) {
          var n = j(t, Ie);
          "no-styles" !== n ? $(t, e.parseStyle(n)) : z(t, "style"), z(t, Ie);
        });
      }(e.dom), v(ze.removeClass), $e.unbind(), f.from(t.get()).each(function (e) {
        return e.fullscreenChangeHandler.unbind();
      });
    };

    if (d) d.fullscreenChangeHandler.unbind(), De(e) && We(c) && function (e) {
      var t = e.dom;
      t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.webkitCancelFullScreen && t.webkitCancelFullScreen();
    }(D(c)), p.width = d.iframeWidth, p.height = d.iframeHeight, g.width = d.containerWidth, g.height = d.containerHeight, g.top = d.containerTop, g.left = d.containerLeft, w(), x = d.scrollPos, window.scrollTo(x.x, x.y), t.set(null), Pe(e, !1), e.off("remove", w);else {
      var _n5 = Y(D(c), void 0 !== document.fullscreenElement ? "fullscreenchange" : void 0 !== document.msFullscreenElement ? "MSFullscreenChange" : void 0 !== document.webkitFullscreenElement ? "webkitfullscreenchange" : "fullscreenchange", function (n) {
        De(e) && (We(c) || null === t.get() || Ue(e, t));
      }),
          _r7 = {
        scrollPos: Re(window),
        containerWidth: g.width,
        containerHeight: g.height,
        containerTop: g.top,
        containerLeft: g.left,
        iframeWidth: p.width,
        iframeHeight: p.height,
        fullscreenChangeHandler: _n5
      };

      h && function (e, t, n) {
        var r = function r(t) {
          return function (n) {
            var r = j(n, "style"),
                s = void 0 === r ? "no-styles" : r.trim();
            s !== t && (function (e, t, n) {
              (function (e, t, n) {
                if (!(o(n) || l(n) || u(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
                e.setAttribute(t, n + "");
              })(e.dom, t, n);
            }(n, Ie, s), $(n, e.parseStyle(t)));
          };
        },
            i = qe(t, "*"),
            a = function (e) {
          var t = [];

          for (var _n6 = 0, _r8 = e.length; _n6 < _r8; ++_n6) {
            if (!s(e[_n6])) throw new Error("Arr.flatten item " + _n6 + " was not an array, input: " + e);
            y.apply(t, e[_n6]);
          }

          return t;
        }(b(i, function (e) {
          return He(e, "*:not(.tox-silver-sink)");
        })),
            c = je(n);

        S(a, r("display:none!important;")), S(i, r(Be + Ve + c)), r((!0 === _e ? "" : Be) + Ve + c)(t);
      }(e.dom, a, m), p.width = p.height = "100%", g.width = g.height = "", v(ze.addClass), $e.bind(a), e.on("remove", w), t.set(_r7), De(e) && function (e) {
        var t = e.dom;
        t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen();
      }(c), Pe(e, !0);
    }
    var x;
  },
      Ke = function Ke(e, t) {
    return function (n) {
      n.setActive(null !== t.get());

      var r = function r(e) {
        return n.setActive(e.state);
      };

      return e.on("FullscreenStateChanged", r), function () {
        return e.off("FullscreenStateChanged", r);
      };
    };
  };

  t.add("fullscreen", function (t) {
    var n = e(null);
    return t.inline || (function (e) {
      (0, e.options.register)("fullscreen_native", {
        processor: "boolean",
        "default": !1
      });
    }(t), function (e, t) {
      e.addCommand("mceFullScreen", function () {
        Ue(e, t);
      });
    }(t, n), function (e, t) {
      var n = function n() {
        return e.execCommand("mceFullScreen");
      };

      e.ui.registry.addToggleMenuItem("fullscreen", {
        text: "Fullscreen",
        icon: "fullscreen",
        shortcut: "Meta+Shift+F",
        onAction: n,
        onSetup: Ke(e, t)
      }), e.ui.registry.addToggleButton("fullscreen", {
        tooltip: "Fullscreen",
        icon: "fullscreen",
        onAction: n,
        onSetup: Ke(e, t)
      });
    }(t, n), t.addShortcut("Meta+Shift+F", "", "mceFullScreen")), function (e) {
      return {
        isFullscreen: function isFullscreen() {
          return null !== e.get();
        }
      };
    }(n);
  });
}();