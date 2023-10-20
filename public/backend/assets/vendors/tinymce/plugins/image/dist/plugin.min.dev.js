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

  var t = Object.getPrototypeOf,
      a = function a(e, t, _a) {
    var i;
    return !!_a(e, t.prototype) || (null === (i = e.constructor) || void 0 === i ? void 0 : i.name) === t.name;
  },
      i = function i(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && a(e, String, function (e, t) {
          return t.isPrototypeOf(e);
        }) ? "string" : t;
      }(t) === e;
    };
  },
      s = function s(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      r = i("string"),
      o = i("object"),
      n = function n(e) {
    return function (e, i) {
      return o(e) && a(e, i, function (e, a) {
        return t(e) === a;
      });
    }(e, Object);
  },
      l = i("array"),
      c = (null, function (e) {
    return null === e;
  });

  var m = s("boolean"),
      d = function d(e) {
    return !function (e) {
      return null == e;
    }(e);
  },
      g = s("function"),
      p = s("number"),
      u = function u() {};

  var h =
  /*#__PURE__*/
  function () {
    function h(e, t) {
      _classCallCheck(this, h);

      this.tag = e, this.value = t;
    }

    _createClass(h, [{
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
        return this.tag ? h.some(e(this.value)) : h.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : h.none();
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
        return !this.tag || e(this.value) ? this : h.none();
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
        return new h(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return h.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return d(e) ? h.some(e) : h.none();
      }
    }]);

    return h;
  }();

  h.singletonNone = new h(!1);

  var b = Object.keys,
      y = Object.hasOwnProperty,
      v = function v(e, t) {
    return y.call(e, t);
  },
      f = Array.prototype.push,
      w = function w(e) {
    var t = [];

    for (var _a2 = 0, _i = e.length; _a2 < _i; ++_a2) {
      if (!l(e[_a2])) throw new Error("Arr.flatten item " + _a2 + " was not an array, input: " + e);
      f.apply(t, e[_a2]);
    }

    return t;
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var A = function A(e, t, a) {
    (function (e, t, a) {
      if (!(r(a) || m(a) || p(a))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", a, ":: Element ", e), new Error("Attribute value was not simple");
      e.setAttribute(t, a + "");
    })(e.dom, t, a);
  },
      D = function D(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      _ = D;

  var C = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      I = tinymce.util.Tools.resolve("tinymce.util.URI");

  var U = function U(e) {
    return e.length > 0;
  },
      x = function x(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      S = x("image_dimensions"),
      N = x("image_advtab"),
      T = x("image_uploadtab"),
      O = x("image_prepend_url"),
      L = x("image_class_list"),
      E = x("image_description"),
      j = x("image_title"),
      M = x("image_caption"),
      R = x("image_list"),
      k = x("a11y_advanced_options"),
      z = x("automatic_uploads"),
      P = function P(e, t) {
    return Math.max(parseInt(e, 10), parseInt(t, 10));
  },
      B = function B(e) {
    return e && (e = e.replace(/px$/, "")), e;
  },
      F = function F(e) {
    return e.length > 0 && /^[0-9]+$/.test(e) && (e += "px"), e;
  },
      H = function H(e) {
    return "IMG" === e.nodeName && (e.hasAttribute("data-mce-object") || e.hasAttribute("data-mce-placeholder"));
  },
      G = function G(e, t) {
    var a = e.options.get;
    return I.isDomSafe(t, "img", {
      allow_html_data_urls: a("allow_html_data_urls"),
      allow_script_urls: a("allow_script_urls"),
      allow_svg_data_urls: a("allow_svg_data_urls")
    });
  },
      W = C.DOM,
      $ = function $(e) {
    return e.style.marginLeft && e.style.marginRight && e.style.marginLeft === e.style.marginRight ? B(e.style.marginLeft) : "";
  },
      V = function V(e) {
    return e.style.marginTop && e.style.marginBottom && e.style.marginTop === e.style.marginBottom ? B(e.style.marginTop) : "";
  },
      K = function K(e) {
    return e.style.borderWidth ? B(e.style.borderWidth) : "";
  },
      Z = function Z(e, t) {
    return e.hasAttribute(t) ? e.getAttribute(t) : "";
  },
      q = function q(e, t) {
    return e.style[t] ? e.style[t] : "";
  },
      J = function J(e) {
    return null !== e.parentNode && "FIGURE" === e.parentNode.nodeName;
  },
      Q = function Q(e, t, a) {
    "" === a ? e.removeAttribute(t) : e.setAttribute(t, a);
  },
      X = function X(e, t) {
    var a = e.getAttribute("style"),
        i = t(null !== a ? a : "");
    i.length > 0 ? (e.setAttribute("style", i), e.setAttribute("data-mce-style", i)) : e.removeAttribute("style");
  },
      Y = function Y(e, t) {
    return function (e, a, i) {
      e.style[a] ? (e.style[a] = F(i), X(e, t)) : Q(e, a, i);
    };
  },
      ee = function ee(e, t) {
    return e.style[t] ? B(e.style[t]) : Z(e, t);
  },
      te = function te(e, t) {
    var a = F(t);
    e.style.marginLeft = a, e.style.marginRight = a;
  },
      ae = function ae(e, t) {
    var a = F(t);
    e.style.marginTop = a, e.style.marginBottom = a;
  },
      ie = function ie(e, t) {
    var a = F(t);
    e.style.borderWidth = a;
  },
      se = function se(e, t) {
    e.style.borderStyle = t;
  },
      re = function re(e) {
    return "FIGURE" === e.nodeName;
  },
      oe = function oe(e) {
    return 0 === W.getAttrib(e, "alt").length && "presentation" === W.getAttrib(e, "role");
  },
      ne = function ne(e) {
    return oe(e) ? "" : Z(e, "alt");
  },
      le = function le(e, t) {
    var a = document.createElement("img");
    return Q(a, "style", t.style), ($(a) || "" !== t.hspace) && te(a, t.hspace), (V(a) || "" !== t.vspace) && ae(a, t.vspace), (K(a) || "" !== t.border) && ie(a, t.border), (function (e) {
      return q(e, "borderStyle");
    }(a) || "" !== t.borderStyle) && se(a, t.borderStyle), e(a.getAttribute("style"));
  },
      ce = function ce(e, t) {
    return {
      src: Z(t, "src"),
      alt: ne(t),
      title: Z(t, "title"),
      width: ee(t, "width"),
      height: ee(t, "height"),
      "class": Z(t, "class"),
      style: e(Z(t, "style")),
      caption: J(t),
      hspace: $(t),
      vspace: V(t),
      border: K(t),
      borderStyle: q(t, "borderStyle"),
      isDecorative: oe(t)
    };
  },
      me = function me(e, t, a, i, s) {
    a[i] !== t[i] && s(e, i, a[i]);
  },
      de = function de(e, t, a) {
    if (a) {
      W.setAttrib(e, "role", "presentation");

      var _t = _(e);

      A(_t, "alt", "");
    } else {
      if (c(t)) {
        "alt", _(e).dom.removeAttribute("alt");
      } else {
        var _a3 = _(e);

        A(_a3, "alt", t);
      }

      "presentation" === W.getAttrib(e, "role") && W.setAttrib(e, "role", "");
    }
  },
      ge = function ge(e, t) {
    return function (a, i, s) {
      e(a, s), X(a, t);
    };
  },
      pe = function pe(e, t, a) {
    var i = ce(e, a);
    me(a, i, t, "caption", function (e, t, a) {
      return function (e) {
        J(e) ? function (e) {
          var t = e.parentNode;
          W.insertAfter(e, t), W.remove(t);
        }(e) : function (e) {
          var t = W.create("figure", {
            "class": "image"
          });
          W.insertAfter(t, e), t.appendChild(e), t.appendChild(W.create("figcaption", {
            contentEditable: "true"
          }, "Caption")), t.contentEditable = "false";
        }(e);
      }(e);
    }), me(a, i, t, "src", Q), me(a, i, t, "title", Q), me(a, i, t, "width", Y(0, e)), me(a, i, t, "height", Y(0, e)), me(a, i, t, "class", Q), me(a, i, t, "style", ge(function (e, t) {
      return Q(e, "style", t);
    }, e)), me(a, i, t, "hspace", ge(te, e)), me(a, i, t, "vspace", ge(ae, e)), me(a, i, t, "border", ge(ie, e)), me(a, i, t, "borderStyle", ge(se, e)), function (e, t, a) {
      a.alt === t.alt && a.isDecorative === t.isDecorative || de(e, a.alt, a.isDecorative);
    }(a, i, t);
  },
      ue = function ue(e, t) {
    var a = function (e) {
      if (e.margin) {
        var _t2 = String(e.margin).split(" ");

        switch (_t2.length) {
          case 1:
            e["margin-top"] = e["margin-top"] || _t2[0], e["margin-right"] = e["margin-right"] || _t2[0], e["margin-bottom"] = e["margin-bottom"] || _t2[0], e["margin-left"] = e["margin-left"] || _t2[0];
            break;

          case 2:
            e["margin-top"] = e["margin-top"] || _t2[0], e["margin-right"] = e["margin-right"] || _t2[1], e["margin-bottom"] = e["margin-bottom"] || _t2[0], e["margin-left"] = e["margin-left"] || _t2[1];
            break;

          case 3:
            e["margin-top"] = e["margin-top"] || _t2[0], e["margin-right"] = e["margin-right"] || _t2[1], e["margin-bottom"] = e["margin-bottom"] || _t2[2], e["margin-left"] = e["margin-left"] || _t2[1];
            break;

          case 4:
            e["margin-top"] = e["margin-top"] || _t2[0], e["margin-right"] = e["margin-right"] || _t2[1], e["margin-bottom"] = e["margin-bottom"] || _t2[2], e["margin-left"] = e["margin-left"] || _t2[3];
        }

        delete e.margin;
      }

      return e;
    }(e.dom.styles.parse(t)),
        i = e.dom.styles.parse(e.dom.styles.serialize(a));

    return e.dom.styles.serialize(i);
  },
      he = function he(e) {
    var t = e.selection.getNode(),
        a = e.dom.getParent(t, "figure.image");
    return a ? e.dom.select("img", a)[0] : t && ("IMG" !== t.nodeName || H(t)) ? null : t;
  },
      be = function be(e, t) {
    var a = e.dom,
        i = function (t, a) {
      var i = {};
      var s;
      return function (e, t, a, i) {
        (function (e, t) {
          var a = b(e);

          for (var _i2 = 0, _s = a.length; _i2 < _s; _i2++) {
            var _s2 = a[_i2];
            t(e[_s2], _s2);
          }
        })(e, function (e, s) {
          (t(e, s) ? a : i)(e, s);
        });
      }(t, function (t, a) {
        return !e.schema.isValidChild(a, "figure");
      }, (s = i, function (e, t) {
        s[t] = e;
      }), u), i;
    }(e.schema.getTextBlockElements()),
        s = a.getParent(t.parentNode, function (e) {
      return t = i, a = e.nodeName, v(t, a) && void 0 !== t[a] && null !== t[a];
      var t, a;
    }, e.getBody());

    return s ? a.split(s, t) : t;
  },
      ye = function ye(e, t) {
    var a = function (t, a) {
      var i = document.createElement("img");

      if (pe(function (t) {
        return ue(e, t);
      }, _objectSpread({}, a, {
        caption: !1
      }), i), de(i, a.alt, a.isDecorative), a.caption) {
        var _e2 = W.create("figure", {
          "class": "image"
        });

        return _e2.appendChild(i), _e2.appendChild(W.create("figcaption", {
          contentEditable: "true"
        }, "Caption")), _e2.contentEditable = "false", _e2;
      }

      return i;
    }(0, t);

    e.dom.setAttrib(a, "data-mce-id", "__mcenew"), e.focus(), e.selection.setContent(a.outerHTML);
    var i = e.dom.select('*[data-mce-id="__mcenew"]')[0];

    if (e.dom.setAttrib(i, "data-mce-id", null), re(i)) {
      var _t3 = be(e, i);

      e.selection.select(_t3);
    } else e.selection.select(i);
  },
      ve = function ve(e, t) {
    var a = he(e);

    if (a) {
      var _i3 = _objectSpread({}, ce(function (t) {
        return ue(e, t);
      }, a), {}, t),
          _s3 = function (e, t) {
        var a = t.src;
        return _objectSpread({}, t, {
          src: G(e, a) ? a : ""
        });
      }(e, _i3);

      _i3.src ? function (e, t) {
        var a = he(e);

        if (pe(function (t) {
          return ue(e, t);
        }, t, a), function (e, t) {
          e.dom.setAttrib(t, "src", t.getAttribute("src"));
        }(e, a), re(a.parentNode)) {
          var _t4 = a.parentNode;
          be(e, _t4), e.selection.select(a.parentNode);
        } else e.selection.select(a), function (e, t, a) {
          var i = function i() {
            a.onload = a.onerror = null, e.selection && (e.selection.select(a), e.nodeChanged());
          };

          a.onload = function () {
            t.width || t.height || !S(e) || e.dom.setAttribs(a, {
              width: String(a.clientWidth),
              height: String(a.clientHeight)
            }), i();
          }, a.onerror = i;
        }(e, t, a);
      }(e, _s3) : function (e, t) {
        if (t) {
          var _a4 = e.dom.is(t.parentNode, "figure.image") ? t.parentNode : t;

          e.dom.remove(_a4), e.focus(), e.nodeChanged(), e.dom.isEmpty(e.getBody()) && (e.setContent(""), e.selection.setCursorLocation());
        }
      }(e, a);
    } else t.src && ye(e, _objectSpread({
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      "class": "",
      style: "",
      caption: !1,
      hspace: "",
      vspace: "",
      border: "",
      borderStyle: "",
      isDecorative: !1
    }, t));
  },
      fe = (we = function we(e, t) {
    return n(e) && n(t) ? fe(e, t) : t;
  }, function () {
    if (0 === arguments.length) throw new Error("Can't merge zero objects");
    var t = {};

    for (var _a5 = 0; _a5 < arguments.length; _a5++) {
      var _i4 = _a5 < 0 || arguments.length <= _a5 ? undefined : arguments[_a5];

      for (var _e3 in _i4) {
        v(_i4, _e3) && (t[_e3] = we(t[_e3], _i4[_e3]));
      }
    }

    return t;
  });

  var we,
      Ae = tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),
      De = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var _e = function _e(e) {
    return r(e.value) ? e.value : "";
  },
      Ce = function Ce(e, t) {
    var a = [];
    return De.each(e, function (e) {
      var i = function (e) {
        return r(e.text) ? e.text : r(e.title) ? e.title : "";
      }(e);

      if (void 0 !== e.menu) {
        var _s4 = Ce(e.menu, t);

        a.push({
          text: i,
          items: _s4
        });
      } else {
        var _s5 = t(e);

        a.push({
          text: i,
          value: _s5
        });
      }
    }), a;
  },
      Ie = function Ie() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _e;
    return function (t) {
      return t ? h.from(t).map(function (t) {
        return Ce(t, e);
      }) : h.none();
    };
  },
      Ue = function Ue(e, t) {
    return function (e, a) {
      for (var _a6 = 0; _a6 < e.length; _a6++) {
        var _s6 = function (e) {
          return v(e, "items");
        }(i = e[_a6]) ? Ue(i.items, t) : i.value === t ? h.some(i) : h.none();

        if (_s6.isSome()) return _s6;
      }

      var i;
      return h.none();
    }(e);
  },
      xe = Ie,
      Se = function Se(e, t) {
    return e.bind(function (e) {
      return Ue(e, t);
    });
  },
      Ne = function Ne(e) {
    var t = xe(function (t) {
      return e.convertURL(t.value || t.url, "src");
    }),
        a = new Promise(function (a) {
      (function (e, t) {
        var a = R(e);
        r(a) ? fetch(a).then(function (e) {
          e.ok && e.json().then(t);
        }) : g(a) ? a(t) : t(a);
      })(e, function (e) {
        a(t(e).map(function (e) {
          return w([[{
            text: "None",
            value: ""
          }], e]);
        }));
      });
    }),
        i = (A = L(e), Ie(_e)(A)),
        s = N(e),
        o = T(e),
        n = function (e) {
      return U(e.options.get("images_upload_url"));
    }(e),
        l = function (e) {
      return d(e.options.get("images_upload_handler"));
    }(e),
        c = function (e) {
      var t = he(e);
      return t ? ce(function (t) {
        return ue(e, t);
      }, t) : {
        src: "",
        alt: "",
        title: "",
        width: "",
        height: "",
        "class": "",
        style: "",
        caption: !1,
        hspace: "",
        vspace: "",
        border: "",
        borderStyle: "",
        isDecorative: !1
      };
    }(e),
        m = E(e),
        p = j(e),
        u = S(e),
        b = M(e),
        y = k(e),
        v = z(e),
        f = h.some(O(e)).filter(function (e) {
      return r(e) && e.length > 0;
    });

    var A;
    return a.then(function (e) {
      return {
        image: c,
        imageList: e,
        classList: i,
        hasAdvTab: s,
        hasUploadTab: o,
        hasUploadUrl: n,
        hasUploadHandler: l,
        hasDescription: m,
        hasImageTitle: p,
        hasDimensions: u,
        hasImageCaption: b,
        prependURL: f,
        hasAccessibilityOptions: y,
        automaticUploads: v
      };
    });
  },
      Te = function Te(e) {
    var t = e.imageList.map(function (e) {
      return {
        name: "images",
        type: "listbox",
        label: "Image list",
        items: e
      };
    }),
        a = {
      name: "alt",
      type: "input",
      label: "Alternative description",
      enabled: !(e.hasAccessibilityOptions && e.image.isDecorative)
    },
        i = e.classList.map(function (e) {
      return {
        name: "classes",
        type: "listbox",
        label: "Class",
        items: e
      };
    });
    return w([[{
      name: "src",
      type: "urlinput",
      filetype: "image",
      label: "Source"
    }], t.toArray(), e.hasAccessibilityOptions && e.hasDescription ? [{
      type: "label",
      label: "Accessibility",
      items: [{
        name: "isDecorative",
        type: "checkbox",
        label: "Image is decorative"
      }]
    }] : [], e.hasDescription ? [a] : [], e.hasImageTitle ? [{
      name: "title",
      type: "input",
      label: "Image title"
    }] : [], e.hasDimensions ? [{
      name: "dimensions",
      type: "sizeinput"
    }] : [], [_objectSpread({}, (s = e.classList.isSome() && e.hasImageCaption, s ? {
      type: "grid",
      columns: 2
    } : {
      type: "panel"
    }), {
      items: w([i.toArray(), e.hasImageCaption ? [{
        type: "label",
        label: "Caption",
        items: [{
          type: "checkbox",
          name: "caption",
          label: "Show caption"
        }]
      }] : []])
    })]]);
    var s;
  },
      Oe = function Oe(e) {
    return {
      title: "General",
      name: "general",
      items: Te(e)
    };
  },
      Le = Te,
      Ee = function Ee(e) {
    return {
      src: {
        value: e.src,
        meta: {}
      },
      images: e.src,
      alt: e.alt,
      title: e.title,
      dimensions: {
        width: e.width,
        height: e.height
      },
      classes: e["class"],
      caption: e.caption,
      style: e.style,
      vspace: e.vspace,
      border: e.border,
      hspace: e.hspace,
      borderstyle: e.borderStyle,
      fileinput: [],
      isDecorative: e.isDecorative
    };
  },
      je = function je(e, t) {
    return {
      src: e.src.value,
      alt: 0 === e.alt.length && t ? null : e.alt,
      title: e.title,
      width: e.dimensions.width,
      height: e.dimensions.height,
      "class": e.classes,
      style: e.style,
      caption: e.caption,
      hspace: e.hspace,
      vspace: e.vspace,
      border: e.border,
      borderStyle: e.borderstyle,
      isDecorative: e.isDecorative
    };
  },
      Me = function Me(e, t, a, i) {
    (function (e, t) {
      var a = t.getData();
      (function (e, t) {
        return /^(?:[a-zA-Z]+:)?\/\//.test(t) ? h.none() : e.prependURL.bind(function (e) {
          return t.substring(0, e.length) !== e ? h.some(e + t) : h.none();
        });
      })(e, a.src.value).each(function (e) {
        t.setData({
          src: {
            value: e,
            meta: a.src.meta
          }
        });
      });
    })(t, i), function (e, t) {
      var a = t.getData(),
          i = a.src.meta;

      if (void 0 !== i) {
        var _s7 = fe({}, a);

        (function (e, t, a) {
          e.hasDescription && r(a.alt) && (t.alt = a.alt), e.hasAccessibilityOptions && (t.isDecorative = a.isDecorative || t.isDecorative || !1), e.hasImageTitle && r(a.title) && (t.title = a.title), e.hasDimensions && (r(a.width) && (t.dimensions.width = a.width), r(a.height) && (t.dimensions.height = a.height)), r(a["class"]) && Se(e.classList, a["class"]).each(function (e) {
            t.classes = e.value;
          }), e.hasImageCaption && m(a.caption) && (t.caption = a.caption), e.hasAdvTab && (r(a.style) && (t.style = a.style), r(a.vspace) && (t.vspace = a.vspace), r(a.border) && (t.border = a.border), r(a.hspace) && (t.hspace = a.hspace), r(a.borderstyle) && (t.borderstyle = a.borderstyle));
        })(e, _s7, i), t.setData(_s7);
      }
    }(t, i), function (e, t, a, i) {
      var s = i.getData(),
          r = s.src.value,
          o = s.src.meta || {};
      o.width || o.height || !t.hasDimensions || (U(r) ? e.imageSize(r).then(function (e) {
        a.open && i.setData({
          dimensions: e
        });
      })["catch"](function (e) {
        return console.error(e);
      }) : i.setData({
        dimensions: {
          width: "",
          height: ""
        }
      }));
    }(e, t, a, i), function (e, t, a) {
      var i = a.getData(),
          s = Se(e.imageList, i.src.value);
      t.prevImage = s, a.setData({
        images: s.map(function (e) {
          return e.value;
        }).getOr("")
      });
    }(t, a, i);
  },
      Re = function Re(e, t, a, i) {
    var s = i.getData();
    var r;
    i.block("Uploading image"), (r = s.fileinput, function (e, t) {
      return 0 < e.length ? h.some(e[0]) : h.none();
    }(r)).fold(function () {
      i.unblock();
    }, function (s) {
      var r = URL.createObjectURL(s),
          o = function o() {
        i.unblock(), URL.revokeObjectURL(r);
      },
          n = function n(s) {
        i.setData({
          src: {
            value: s,
            meta: {}
          }
        }), i.showTab("general"), Me(e, t, a, i);
      };

      var l;
      (l = s, new Promise(function (e, t) {
        var a = new FileReader();
        a.onload = function () {
          e(a.result);
        }, a.onerror = function () {
          t(a.error.message);
        }, a.readAsDataURL(l);
      })).then(function (a) {
        var l = e.createBlobCache(s, r, a);
        t.automaticUploads ? e.uploadImage(l).then(function (e) {
          n(e.url), o();
        })["catch"](function (t) {
          o(), e.alertErr(t);
        }) : (e.addToBlobCache(l), n(l.blobUri()), i.unblock());
      });
    });
  },
      ke = function ke(e, t, a) {
    return function (i, s) {
      "src" === s.name ? Me(e, t, a, i) : "images" === s.name ? function (e, t, a, i) {
        var s = i.getData(),
            r = Se(t.imageList, s.images);
        r.each(function (e) {
          var t = "" === s.alt || a.prevImage.map(function (e) {
            return e.text === s.alt;
          }).getOr(!1);
          t ? "" === e.value ? i.setData({
            src: e,
            alt: a.prevAlt
          }) : i.setData({
            src: e,
            alt: e.text
          }) : i.setData({
            src: e
          });
        }), a.prevImage = r, Me(e, t, a, i);
      }(e, t, a, i) : "alt" === s.name ? a.prevAlt = i.getData().alt : "fileinput" === s.name ? Re(e, t, a, i) : "isDecorative" === s.name && i.setEnabled("alt", !i.getData().isDecorative);
    };
  },
      ze = function ze(e) {
    return function () {
      e.open = !1;
    };
  },
      Pe = function Pe(e) {
    return e.hasAdvTab || e.hasUploadUrl || e.hasUploadHandler ? {
      type: "tabpanel",
      tabs: w([[Oe(e)], e.hasAdvTab ? [{
        title: "Advanced",
        name: "advanced",
        items: [{
          type: "grid",
          columns: 2,
          items: [{
            type: "input",
            label: "Vertical space",
            name: "vspace",
            inputMode: "numeric"
          }, {
            type: "input",
            label: "Horizontal space",
            name: "hspace",
            inputMode: "numeric"
          }, {
            type: "input",
            label: "Border width",
            name: "border",
            inputMode: "numeric"
          }, {
            type: "listbox",
            name: "borderstyle",
            label: "Border style",
            items: [{
              text: "Select...",
              value: ""
            }, {
              text: "Solid",
              value: "solid"
            }, {
              text: "Dotted",
              value: "dotted"
            }, {
              text: "Dashed",
              value: "dashed"
            }, {
              text: "Double",
              value: "double"
            }, {
              text: "Groove",
              value: "groove"
            }, {
              text: "Ridge",
              value: "ridge"
            }, {
              text: "Inset",
              value: "inset"
            }, {
              text: "Outset",
              value: "outset"
            }, {
              text: "None",
              value: "none"
            }, {
              text: "Hidden",
              value: "hidden"
            }]
          }]
        }]
      }] : [], e.hasUploadTab && (e.hasUploadUrl || e.hasUploadHandler) ? [{
        title: "Upload",
        name: "upload",
        items: [{
          type: "dropzone",
          name: "fileinput"
        }]
      }] : []])
    } : {
      type: "panel",
      items: Le(e)
    };
  },
      Be = function Be(e, t, a) {
    return function (i) {
      var s = fe(Ee(t.image), i.getData()),
          r = _objectSpread({}, s, {
        style: le(a.normalizeCss, je(s, !1))
      });

      e.execCommand("mceUpdateImage", !1, je(r, t.hasAccessibilityOptions)), e.editorUpload.uploadImagesAuto(), i.close();
    };
  },
      Fe = function Fe(e) {
    return function (t) {
      return G(e, t) ? function (e) {
        return new Promise(function (t) {
          var a = document.createElement("img"),
              i = function i(e) {
            a.onload = a.onerror = null, a.parentNode && a.parentNode.removeChild(a), t(e);
          };

          a.onload = function () {
            var e = {
              width: P(a.width, a.clientWidth),
              height: P(a.height, a.clientHeight)
            };
            i(Promise.resolve(e));
          }, a.onerror = function () {
            i(Promise.reject("Failed to get image dimensions for: ".concat(e)));
          };
          var s = a.style;
          s.visibility = "hidden", s.position = "fixed", s.bottom = s.left = "0px", s.width = s.height = "auto", document.body.appendChild(a), a.src = e;
        });
      }(e.documentBaseURI.toAbsolute(t)).then(function (e) {
        return {
          width: String(e.width),
          height: String(e.height)
        };
      }) : Promise.resolve({
        width: "",
        height: ""
      });
    };
  },
      He = function He(e) {
    return function (t, a, i) {
      return e.editorUpload.blobCache.create({
        blob: t,
        blobUri: a,
        name: t.name ? t.name.replace(/\.[^\.]+$/, "") : null,
        filename: t.name,
        base64: i.split(",")[1]
      });
    };
  },
      Ge = function Ge(e) {
    return function (t) {
      e.editorUpload.blobCache.add(t);
    };
  },
      We = function We(e) {
    return function (t) {
      e.windowManager.alert(t);
    };
  },
      $e = function $e(e) {
    return function (t) {
      return ue(e, t);
    };
  },
      Ve = function Ve(e) {
    return function (t) {
      return e.dom.parseStyle(t);
    };
  },
      Ke = function Ke(e) {
    return function (t, a) {
      return e.dom.serializeStyle(t, a);
    };
  },
      Ze = function Ze(e) {
    return function (t) {
      return Ae(e).upload([t], !1).then(function (e) {
        return 0 === e.length ? Promise.reject("Failed to upload image") : !1 === e[0].status ? Promise.reject(e[0].error.message) : e[0];
      });
    };
  },
      qe = function qe(e) {
    var t = {
      imageSize: Fe(e),
      addToBlobCache: Ge(e),
      createBlobCache: He(e),
      alertErr: We(e),
      normalizeCss: $e(e),
      parseStyle: Ve(e),
      serializeStyle: Ke(e),
      uploadImage: Ze(e)
    };
    return {
      open: function open() {
        Ne(e).then(function (a) {
          var i = function (e) {
            return {
              prevImage: Se(e.imageList, e.image.src),
              prevAlt: e.image.alt,
              open: !0
            };
          }(a);

          return {
            title: "Insert/Edit Image",
            size: "normal",
            body: Pe(a),
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
            initialData: Ee(a.image),
            onSubmit: Be(e, a, t),
            onChange: ke(t, a, i),
            onClose: ze(i)
          };
        }).then(e.windowManager.open);
      }
    };
  },
      Je = function Je(e) {
    var t = e.attr("class");
    return t && /\bimage\b/.test(t);
  },
      Qe = function Qe(e) {
    return function (t) {
      var a = t.length;

      var i = function i(t) {
        t.attr("contenteditable", e ? "true" : null);
      };

      for (; a--;) {
        var _s8 = t[a];
        Je(_s8) && (_s8.attr("contenteditable", e ? "false" : null), De.each(_s8.getAll("figcaption"), i));
      }
    };
  };

  e.add("image", function (e) {
    (function (e) {
      var t = e.options.register;
      t("image_dimensions", {
        processor: "boolean",
        "default": !0
      }), t("image_advtab", {
        processor: "boolean",
        "default": !1
      }), t("image_uploadtab", {
        processor: "boolean",
        "default": !0
      }), t("image_prepend_url", {
        processor: "string",
        "default": ""
      }), t("image_class_list", {
        processor: "object[]"
      }), t("image_description", {
        processor: "boolean",
        "default": !0
      }), t("image_title", {
        processor: "boolean",
        "default": !1
      }), t("image_caption", {
        processor: "boolean",
        "default": !1
      }), t("image_list", {
        processor: function processor(e) {
          var t = !1 === e || r(e) || function (e, t) {
            if (l(e)) {
              for (var _a7 = 0, _i5 = e.length; _a7 < _i5; ++_a7) {
                if (!t(e[_a7])) return !1;
              }

              return !0;
            }

            return !1;
          }(e, o) || g(e);

          return t ? {
            value: e,
            valid: t
          } : {
            valid: !1,
            message: "Must be false, a string, an array or a function."
          };
        },
        "default": !1
      });
    })(e), function (e) {
      e.on("PreInit", function () {
        e.parser.addNodeFilter("figure", Qe(!0)), e.serializer.addNodeFilter("figure", Qe(!1));
      });
    }(e), function (e) {
      e.ui.registry.addToggleButton("image", {
        icon: "image",
        tooltip: "Insert/edit image",
        onAction: qe(e).open,
        onSetup: function onSetup(t) {
          return t.setActive(d(he(e))), e.selection.selectorChangedWithUnbind("img:not([data-mce-object]):not([data-mce-placeholder]),figure.image", t.setActive).unbind;
        }
      }), e.ui.registry.addMenuItem("image", {
        icon: "image",
        text: "Image...",
        onAction: qe(e).open
      }), e.ui.registry.addContextMenu("image", {
        update: function update(e) {
          return re(e) || "IMG" === e.nodeName && !H(e) ? ["image"] : [];
        }
      });
    }(e), function (e) {
      e.addCommand("mceImage", qe(e).open), e.addCommand("mceUpdateImage", function (t, a) {
        e.undoManager.transact(function () {
          return ve(e, a);
        });
      });
    }(e);
  });
}();