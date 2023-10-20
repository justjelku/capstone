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

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var t = function t(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (n = o = e, (r = String).prototype.isPrototypeOf(n) || (null === (l = o.constructor) || void 0 === l ? void 0 : l.name) === r.name) ? "string" : t;
        var n, o, r, l;
      }(t) === e;
    };
  },
      n = function n(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      o = t("string"),
      r = t("object"),
      l = t("array"),
      a = (null, function (e) {
    return null === e;
  });

  var s = n("boolean"),
      i = n("function"),
      c = function c(e, t) {
    if (l(e)) {
      for (var _n = 0, _o = e.length; _n < _o; ++_n) {
        if (!t(e[_n])) return !1;
      }

      return !0;
    }

    return !1;
  },
      u = function u() {},
      g = function g(e, t) {
    return e === t;
  };

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

  var d = Array.prototype.indexOf,
      h = Array.prototype.push,
      p = function p(e) {
    var t = [];

    for (var _n2 = 0, _o2 = e.length; _n2 < _o2; ++_n2) {
      if (!l(e[_n2])) throw new Error("Arr.flatten item " + _n2 + " was not an array, input: " + e);
      h.apply(t, e[_n2]);
    }

    return t;
  },
      f = function f(e, t) {
    for (var _n3 = 0; _n3 < e.length; _n3++) {
      var _o3 = t(e[_n3], _n3);

      if (_o3.isSome()) return _o3;
    }

    return m.none();
  },
      k = function k(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : g;
    return e.exists(function (e) {
      return n(e, t);
    });
  },
      v = function v(e) {
    var t = [],
        n = function n(e) {
      t.push(e);
    };

    for (var _t = 0; _t < e.length; _t++) {
      e[_t].each(n);
    }

    return t;
  },
      y = function y(e, t) {
    return e ? m.some(t) : m.none();
  },
      x = function x(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      _ = x("link_assume_external_targets"),
      b = x("link_context_toolbar"),
      w = x("link_list"),
      C = x("link_default_target"),
      O = x("link_default_protocol"),
      N = x("link_target_list"),
      A = x("link_rel_list"),
      T = x("link_class_list"),
      S = x("link_title"),
      E = x("allow_unsafe_link_target"),
      P = x("link_quicklink");

  var R = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var L = function L(e) {
    return o(e.value) ? e.value : "";
  },
      M = function M(e, t) {
    var n = [];
    return R.each(e, function (e) {
      var r = function (e) {
        return o(e.text) ? e.text : o(e.title) ? e.title : "";
      }(e);

      if (void 0 !== e.menu) {
        var _o4 = M(e.menu, t);

        n.push({
          text: r,
          items: _o4
        });
      } else {
        var _o5 = t(e);

        n.push({
          text: r,
          value: _o5
        });
      }
    }), n;
  },
      D = function D() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : L;
    return function (t) {
      return m.from(t).map(function (t) {
        return M(t, e);
      });
    };
  },
      B = function B(e) {
    return D(L)(e);
  },
      I = D,
      j = function j(e, t) {
    return function (n) {
      return {
        name: e,
        type: "listbox",
        label: t,
        items: n
      };
    };
  },
      K = L,
      U = Object.keys,
      q = Object.hasOwnProperty,
      F = function F(e, t) {
    return q.call(e, t);
  };

  var V = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),
      $ = tinymce.util.Tools.resolve("tinymce.util.URI");

  var z = function z(e) {
    return e && "a" === e.nodeName.toLowerCase();
  },
      G = function G(e) {
    return z(e) && !!W(e);
  },
      H = function H(e, t) {
    if (e.collapsed) return [];
    {
      var _n4 = e.cloneContents(),
          _o6 = new V(_n4.firstChild, _n4),
          _r = [];

      var _l = _n4.firstChild;

      do {
        t(_l) && _r.push(_l);
      } while (_l = _o6.next());

      return _r;
    }
  },
      J = function J(e) {
    return /^\w+:/i.test(e);
  },
      W = function W(e) {
    return e.getAttribute("data-mce-href") || e.getAttribute("href");
  },
      Q = function Q(e, t) {
    var n = ["noopener"],
        o = e ? e.split(/\s+/) : [],
        r = function r(e) {
      return e.filter(function (e) {
        return -1 === R.inArray(n, e);
      });
    },
        l = t ? function (e) {
      return (e = r(e)).length > 0 ? e.concat(n) : n;
    }(o) : r(o);

    return l.length > 0 ? function (e) {
      return R.trim(e.sort().join(" "));
    }(l) : "";
  },
      X = function X(e, t) {
    return t = t || e.selection.getNode(), te(t) ? e.dom.select("a[href]", t)[0] : e.dom.getParent(t, "a[href]");
  },
      Y = function Y(e, t) {
    return (t ? t.innerText || t.textContent : e.getContent({
      format: "text"
    })).replace(/\uFEFF/g, "");
  },
      Z = function Z(e) {
    return R.grep(e, G).length > 0;
  },
      ee = function ee(e) {
    var t = e.schema.getTextInlineElements();
    return 0 === H(e.selection.getRng(), function (e) {
      return 1 === e.nodeType && !z(e) && !F(t, e.nodeName.toLowerCase());
    }).length;
  },
      te = function te(e) {
    return e && "FIGURE" === e.nodeName && /\bimage\b/i.test(e.className);
  },
      ne = function ne(e, t, n) {
    var o = e.selection.getNode(),
        r = X(e, o),
        l = function (e, t) {
      var n = _objectSpread({}, t);

      if (0 === A(e).length && !E(e)) {
        var _e2 = Q(n.rel, "_blank" === n.target);

        n.rel = _e2 || null;
      }

      return m.from(n.target).isNone() && !1 === N(e) && (n.target = C(e)), n.href = function (e, t) {
        return "http" !== t && "https" !== t || J(e) ? e : t + "://" + e;
      }(n.href, _(e)), n;
    }(e, function (e) {
      return t = ["title", "rel", "class", "target"], n = function n(t, _n5) {
        return e[_n5].each(function (e) {
          t[_n5] = e.length > 0 ? e : null;
        }), t;
      }, o = {
        href: e.href
      }, function (e, t) {
        for (var _n6 = 0, _o7 = e.length; _n6 < _o7; _n6++) {
          t(e[_n6], _n6);
        }
      }(t, function (e, t) {
        o = n(o, e);
      }), o;
      var t, n, o;
    }(n));

    e.undoManager.transact(function () {
      n.href === t.href && t.attach(), r ? (e.focus(), function (e, t, n, o) {
        n.each(function (e) {
          F(t, "innerText") ? t.innerText = e : t.textContent = e;
        }), e.dom.setAttribs(t, o), e.selection.select(t);
      }(e, r, n.text, l)) : function (e, t, n, o) {
        te(t) ? se(e, t, o) : n.fold(function () {
          e.execCommand("mceInsertLink", !1, o);
        }, function (t) {
          e.insertContent(e.dom.createHTML("a", o, e.dom.encode(t)));
        });
      }(e, o, n.text, l);
    });
  },
      oe = function oe(e) {
    var t = e["class"],
        n = e.href,
        o = e.rel,
        r = e.target,
        l = e.text,
        s = e.title;
    return function (e, t) {
      var n = {};
      var o;
      return function (e, t, n, o) {
        (function (e, t) {
          var n = U(e);

          for (var _o8 = 0, _r2 = n.length; _o8 < _r2; _o8++) {
            var _r3 = n[_o8];
            t(e[_r3], _r3);
          }
        })(e, function (e, r) {
          (t(e, r) ? n : o)(e, r);
        });
      }(e, function (e, t) {
        return !1 === a(e);
      }, (o = n, function (e, t) {
        o[t] = e;
      }), u), n;
    }({
      "class": t.getOrNull(),
      href: n,
      rel: o.getOrNull(),
      target: r.getOrNull(),
      text: l.getOrNull(),
      title: s.getOrNull()
    });
  },
      re = function re(e, t, n) {
    var o = function (e, t) {
      var n = e.options.get,
          o = {
        allow_html_data_urls: n("allow_html_data_urls"),
        allow_script_urls: n("allow_script_urls"),
        allow_svg_data_urls: n("allow_svg_data_urls")
      },
          r = t.href;
      return _objectSpread({}, t, {
        href: $.isDomSafe(r, "a", o) ? r : ""
      });
    }(e, n);

    e.hasPlugin("rtc", !0) ? e.execCommand("createlink", !1, oe(o)) : ne(e, t, o);
  },
      le = function le(e) {
    e.hasPlugin("rtc", !0) ? e.execCommand("unlink") : function (e) {
      e.undoManager.transact(function () {
        var t = e.selection.getNode();
        te(t) ? ae(e, t) : function (e) {
          var t = e.dom,
              n = e.selection,
              o = n.getBookmark(),
              r = n.getRng().cloneRange(),
              l = t.getParent(r.startContainer, "a[href]", e.getBody()),
              a = t.getParent(r.endContainer, "a[href]", e.getBody());
          l && r.setStartBefore(l), a && r.setEndAfter(a), n.setRng(r), e.execCommand("unlink"), n.moveToBookmark(o);
        }(e), e.focus();
      });
    }(e);
  },
      ae = function ae(e, t) {
    var n = e.dom.select("img", t)[0];

    if (n) {
      var _o9 = e.dom.getParents(n, "a[href]", t)[0];
      _o9 && (_o9.parentNode.insertBefore(n, _o9), e.dom.remove(_o9));
    }
  },
      se = function se(e, t, n) {
    var o = e.dom.select("img", t)[0];

    if (o) {
      var _t2 = e.dom.create("a", n);

      o.parentNode.insertBefore(_t2, o), _t2.appendChild(o);
    }
  },
      ie = function ie(e, t) {
    return f(t, function (t) {
      return function (e) {
        return F(t = e, n = "items") && void 0 !== t[n] && null !== t[n];
        var t, n;
      }(t) ? ie(e, t.items) : y(t.value === e, t);
    });
  },
      ce = function ce(e, t) {
    var n = {
      text: e.text,
      title: e.title
    },
        o = function o(e, _o10) {
      var r = (l = t, a = _o10.name, "link" === a ? l.link : "anchor" === a ? l.anchor : m.none()).getOr([]);
      var l, a;
      return function (e, t, n, o) {
        var r = o[t],
            l = e.length > 0;
        return void 0 !== r ? ie(r, n).map(function (t) {
          return {
            url: {
              value: t.value,
              meta: {
                text: l ? e : t.text,
                attach: u
              }
            },
            text: l ? e : t.text
          };
        }) : m.none();
      }(n.text, _o10.name, r, e);
    };

    return {
      onChange: function onChange(e, t) {
        var r = t.name;
        return "url" === r ? function (e) {
          var t = (o = e.url, y(n.text.length <= 0, m.from(o.meta.text).getOr(o.value)));
          var o;

          var r = function (e) {
            return y(n.title.length <= 0, m.from(e.meta.title).getOr(""));
          }(e.url);

          return t.isSome() || r.isSome() ? m.some(_objectSpread({}, t.map(function (e) {
            return {
              text: e
            };
          }).getOr({}), {}, r.map(function (e) {
            return {
              title: e
            };
          }).getOr({}))) : m.none();
        }(e()) : function (e, t) {
          return d.call(e, t);
        }(["anchor", "link"], r) > -1 ? o(e(), t) : "text" === r || "title" === r ? (n[r] = e()[r], m.none()) : m.none();
      }
    };
  };

  var ue = tinymce.util.Tools.resolve("tinymce.util.Delay");

  var ge = function ge(e) {
    var t = e.href;
    return t.indexOf("@") > 0 && -1 === t.indexOf("/") && -1 === t.indexOf("mailto:") ? m.some({
      message: "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",
      preprocess: function preprocess(e) {
        return _objectSpread({}, e, {
          href: "mailto:" + t
        });
      }
    }) : m.none();
  },
      me = function me(e, t) {
    return function (n) {
      var o = n.href;
      return 1 === e && !J(o) || 0 === e && /^\s*www(\.|\d\.)/i.test(o) ? m.some({
        message: "The URL you entered seems to be an external link. Do you want to add the required ".concat(t, ":// prefix?"),
        preprocess: function preprocess(e) {
          return _objectSpread({}, e, {
            href: t + "://" + o
          });
        }
      }) : m.none();
    };
  },
      de = function de(e) {
    var t = e.dom.select("a:not([href])"),
        n = p(function (e, t) {
      var n = e.length,
          o = new Array(n);

      for (var _r4 = 0; _r4 < n; _r4++) {
        var _n7 = e[_r4];
        o[_r4] = t(_n7, _r4);
      }

      return o;
    }(t, function (e) {
      var t = e.name || e.id;
      return t ? [{
        text: t,
        value: "#" + t
      }] : [];
    }));
    return n.length > 0 ? m.some([{
      text: "None",
      value: ""
    }].concat(n)) : m.none();
  },
      he = function he(e) {
    var t = T(e);
    return t.length > 0 ? B(t) : m.none();
  },
      pe = function pe(e) {
    try {
      return m.some(JSON.parse(e));
    } catch (e) {
      return m.none();
    }
  },
      fe = function fe(e, t) {
    var n = A(e);

    if (n.length > 0) {
      var _o11 = k(t, "_blank"),
          _r5 = function _r5(e) {
        return Q(K(e), _o11);
      };

      return (!1 === E(e) ? I(_r5) : B)(n);
    }

    return m.none();
  },
      ke = [{
    text: "Current window",
    value: ""
  }, {
    text: "New window",
    value: "_blank"
  }],
      ve = function ve(e) {
    var t = N(e);
    return l(t) ? B(t).orThunk(function () {
      return m.some(ke);
    }) : !1 === t ? m.none() : m.some(ke);
  },
      ye = function ye(e, t, n) {
    var o = e.getAttrib(t, n);
    return null !== o && o.length > 0 ? m.some(o) : m.none();
  },
      xe = function xe(e, t) {
    return function (e) {
      var t = function t(_t3) {
        return e.convertURL(_t3.value || _t3.url, "href");
      },
          n = w(e);

      return new Promise(function (e) {
        o(n) ? fetch(n).then(function (e) {
          return e.ok ? e.text().then(pe) : Promise.reject();
        }).then(e, function () {
          return e(m.none());
        }) : i(n) ? n(function (t) {
          return e(m.some(t));
        }) : e(m.from(n));
      }).then(function (e) {
        return e.bind(I(t)).map(function (e) {
          return e.length > 0 ? [{
            text: "None",
            value: ""
          }].concat(e) : e;
        });
      });
    }(e).then(function (n) {
      var o = function (e, t) {
        var n = e.dom,
            o = ee(e) ? m.some(Y(e.selection, t)) : m.none(),
            r = t ? m.some(n.getAttrib(t, "href")) : m.none(),
            l = t ? m.from(n.getAttrib(t, "target")) : m.none(),
            a = ye(n, t, "rel"),
            s = ye(n, t, "class");
        return {
          url: r,
          text: o,
          title: ye(n, t, "title"),
          target: l,
          rel: a,
          linkClass: s
        };
      }(e, t);

      return {
        anchor: o,
        catalogs: {
          targets: ve(e),
          rels: fe(e, o.target),
          classes: he(e),
          anchor: de(e),
          link: n
        },
        optNode: m.from(t),
        flags: {
          titleEnabled: S(e)
        }
      };
    });
  },
      _e = function _e(e) {
    var t = function (e) {
      var t = X(e);
      return xe(e, t);
    }(e);

    t.then(function (t) {
      var n = function (e, t) {
        return function (n) {
          var o = n.getData();
          if (!o.url.value) return le(e), void n.close();

          var r = function r(e) {
            return m.from(o[e]).filter(function (n) {
              return !k(t.anchor[e], n);
            });
          },
              l = {
            href: o.url.value,
            text: r("text"),
            target: r("target"),
            rel: r("rel"),
            "class": r("linkClass"),
            title: r("title")
          },
              a = {
            href: o.url.value,
            attach: void 0 !== o.url.meta && o.url.meta.attach ? o.url.meta.attach : u
          };

          (function (e, t) {
            return f([ge, me(_(e), O(e))], function (e) {
              return e(t);
            }).fold(function () {
              return Promise.resolve(t);
            }, function (n) {
              return new Promise(function (o) {
                (function (e, t, n) {
                  var o = e.selection.getRng();
                  ue.setEditorTimeout(e, function () {
                    e.windowManager.confirm(t, function (t) {
                      e.selection.setRng(o), n(t);
                    });
                  });
                })(e, n.message, function (e) {
                  o(e ? n.preprocess(t) : t);
                });
              });
            });
          })(e, l).then(function (t) {
            re(e, a, t);
          }), n.close();
        };
      }(e, t);

      return function (e, t, n) {
        var o = e.anchor.text.map(function () {
          return {
            name: "text",
            type: "input",
            label: "Text to display"
          };
        }).toArray(),
            r = e.flags.titleEnabled ? [{
          name: "title",
          type: "input",
          label: "Title"
        }] : [],
            l = function (e, t) {
          var n = e.anchor,
              o = n.url.getOr("");
          return {
            url: {
              value: o,
              meta: {
                original: {
                  value: o
                }
              }
            },
            text: n.text.getOr(""),
            title: n.title.getOr(""),
            anchor: o,
            link: o,
            rel: n.rel.getOr(""),
            target: n.target.or(t).getOr(""),
            linkClass: n.linkClass.getOr("")
          };
        }(e, m.from(C(n))),
            a = e.catalogs,
            s = ce(l, a);

        return {
          title: "Insert/Edit Link",
          size: "normal",
          body: {
            type: "panel",
            items: p([[{
              name: "url",
              type: "urlinput",
              filetype: "file",
              label: "URL"
            }], o, r, v([a.anchor.map(j("anchor", "Anchors")), a.rels.map(j("rel", "Rel")), a.targets.map(j("target", "Open link in...")), a.link.map(j("link", "Link list")), a.classes.map(j("linkClass", "Class"))])])
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
          initialData: l,
          onChange: function onChange(e, _ref) {
            var t = _ref.name;
            s.onChange(e.getData, {
              name: t
            }).each(function (t) {
              e.setData(t);
            });
          },
          onSubmit: t
        };
      }(t, n, e);
    }).then(function (t) {
      e.windowManager.open(t);
    });
  };

  var be = tinymce.util.Tools.resolve("tinymce.util.VK");

  var we = function we(e, t) {
    return e.dom.getParent(t, "a[href]");
  },
      Ce = function Ce(e) {
    return we(e, e.selection.getStart());
  },
      Oe = function Oe(e, t) {
    if (t) {
      var _n8 = W(t);

      if (/^#/.test(_n8)) {
        var _t4 = e.dom.select(_n8);

        _t4.length && e.selection.scrollIntoView(_t4[0], !0);
      } else (function (e) {
        var t = document.createElement("a");
        t.target = "_blank", t.href = e, t.rel = "noreferrer noopener";
        var n = document.createEvent("MouseEvents");
        n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), function (e, t) {
          document.body.appendChild(e), e.dispatchEvent(t), document.body.removeChild(e);
        }(t, n);
      })(t.href);
    }
  },
      Ne = function Ne(e) {
    return function () {
      e.execCommand("mceLink", !1, {
        dialog: !0
      });
    };
  },
      Ae = function Ae(e) {
    return function () {
      Oe(e, Ce(e));
    };
  },
      Te = function Te(e, t) {
    return e.on("NodeChange", t), function () {
      return e.off("NodeChange", t);
    };
  },
      Se = function Se(e) {
    return function (t) {
      var n = function n() {
        return t.setActive(!e.mode.isReadOnly() && null !== X(e, e.selection.getNode()));
      };

      return n(), Te(e, n);
    };
  },
      Ee = function Ee(e) {
    return function (t) {
      var n = function n() {
        return t.setEnabled(null !== X(e, e.selection.getNode()));
      };

      return n(), Te(e, n);
    };
  },
      Pe = function Pe(e) {
    return function (t) {
      var n = function n(t) {
        return Z(t) || (n = e.selection.getRng(), H(n, G).length > 0);
        var n;
      },
          o = e.dom.getParents(e.selection.getStart());

      return t.setEnabled(n(o)), Te(e, function (e) {
        return t.setEnabled(n(e.parents));
      });
    };
  };

  e.add("link", function (e) {
    (function (e) {
      var t = e.options.register;
      t("link_assume_external_targets", {
        processor: function processor(e) {
          var t = o(e) || s(e);
          return t ? !0 === e ? {
            value: 1,
            valid: t
          } : "http" === e || "https" === e ? {
            value: e,
            valid: t
          } : {
            value: 0,
            valid: t
          } : {
            valid: !1,
            message: "Must be a string or a boolean."
          };
        },
        "default": !1
      }), t("link_context_toolbar", {
        processor: "boolean",
        "default": !1
      }), t("link_list", {
        processor: function processor(e) {
          return o(e) || i(e) || c(e, r);
        }
      }), t("link_default_target", {
        processor: "string"
      }), t("link_default_protocol", {
        processor: "string",
        "default": "https"
      }), t("link_target_list", {
        processor: function processor(e) {
          return s(e) || c(e, r);
        },
        "default": !0
      }), t("link_rel_list", {
        processor: "object[]",
        "default": []
      }), t("link_class_list", {
        processor: "object[]",
        "default": []
      }), t("link_title", {
        processor: "boolean",
        "default": !0
      }), t("allow_unsafe_link_target", {
        processor: "boolean",
        "default": !1
      }), t("link_quicklink", {
        processor: "boolean",
        "default": !1
      });
    })(e), function (e) {
      e.ui.registry.addToggleButton("link", {
        icon: "link",
        tooltip: "Insert/edit link",
        onAction: Ne(e),
        onSetup: Se(e)
      }), e.ui.registry.addButton("openlink", {
        icon: "new-tab",
        tooltip: "Open link",
        onAction: Ae(e),
        onSetup: Ee(e)
      }), e.ui.registry.addButton("unlink", {
        icon: "unlink",
        tooltip: "Remove link",
        onAction: function onAction() {
          return le(e);
        },
        onSetup: Pe(e)
      });
    }(e), function (e) {
      e.ui.registry.addMenuItem("openlink", {
        text: "Open link",
        icon: "new-tab",
        onAction: Ae(e),
        onSetup: Ee(e)
      }), e.ui.registry.addMenuItem("link", {
        icon: "link",
        text: "Link...",
        shortcut: "Meta+K",
        onAction: Ne(e)
      }), e.ui.registry.addMenuItem("unlink", {
        icon: "unlink",
        text: "Remove link",
        onAction: function onAction() {
          return le(e);
        },
        onSetup: Pe(e)
      });
    }(e), function (e) {
      e.ui.registry.addContextMenu("link", {
        update: function update(t) {
          return Z(e.dom.getParents(t, "a")) ? "link unlink openlink" : "link";
        }
      });
    }(e), function (e) {
      var t = function t(_t5) {
        var n = e.selection.getNode();
        return _t5.setEnabled(null !== X(e, n)), u;
      };

      e.ui.registry.addContextForm("quicklink", {
        launch: {
          type: "contextformtogglebutton",
          icon: "link",
          tooltip: "Link",
          onSetup: Se(e)
        },
        label: "Link",
        predicate: function predicate(t) {
          return !!X(e, t) && b(e);
        },
        initValue: function initValue() {
          var t = X(e);
          return t ? W(t) : "";
        },
        commands: [{
          type: "contextformtogglebutton",
          icon: "link",
          tooltip: "Link",
          primary: !0,
          onSetup: function onSetup(t) {
            var n = e.selection.getNode();
            return t.setActive(!!X(e, n)), Se(e)(t);
          },
          onAction: function onAction(t) {
            var n = t.getValue(),
                o = function (t) {
              var n = X(e),
                  o = ee(e);

              if (!n && o) {
                var _o12 = Y(e.selection, n);

                return m.some(_o12.length > 0 ? _o12 : t);
              }

              return m.none();
            }(n);

            re(e, {
              href: n,
              attach: u
            }, {
              href: n,
              text: o,
              title: m.none(),
              rel: m.none(),
              target: m.none(),
              "class": m.none()
            }), function (e) {
              e.selection.collapse(!1);
            }(e), t.hide();
          }
        }, {
          type: "contextformbutton",
          icon: "unlink",
          tooltip: "Remove link",
          onSetup: t,
          onAction: function onAction(t) {
            le(e), t.hide();
          }
        }, {
          type: "contextformbutton",
          icon: "new-tab",
          tooltip: "Open link",
          onSetup: t,
          onAction: function onAction(t) {
            Ae(e)(), t.hide();
          }
        }]
      });
    }(e), function (e) {
      e.on("click", function (t) {
        var n = we(e, t.target);
        n && be.metaKeyPressed(t) && (t.preventDefault(), Oe(e, n));
      }), e.on("keydown", function (t) {
        if (!t.isDefaultPrevented() && 13 === t.keyCode && function (e) {
          return !0 === e.altKey && !1 === e.shiftKey && !1 === e.ctrlKey && !1 === e.metaKey;
        }(t)) {
          var _n9 = Ce(e);

          _n9 && (t.preventDefault(), Oe(e, _n9));
        }
      });
    }(e), function (e) {
      e.addCommand("mceLink", function (t, n) {
        !0 !== (null == n ? void 0 : n.dialog) && P(e) ? e.dispatch("contexttoolbar-show", {
          toolbarKey: "quicklink"
        }) : _e(e);
      });
    }(e), function (e) {
      e.addShortcut("Meta+K", "", function () {
        e.execCommand("mceLink");
      });
    }(e);
  });
}();