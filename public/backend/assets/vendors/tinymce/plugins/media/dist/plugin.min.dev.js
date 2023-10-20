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

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (r = a = e, (o = String).prototype.isPrototypeOf(r) || (null === (s = a.constructor) || void 0 === s ? void 0 : s.name) === o.name) ? "string" : t;
        var r, a, o, s;
      }(t) === e;
    };
  },
      r = t("string"),
      a = t("object"),
      o = t("array"),
      s = function s(e) {
    return !function (e) {
      return null == e;
    }(e);
  };

  var i =
  /*#__PURE__*/
  function () {
    function i(e, t) {
      _classCallCheck(this, i);

      this.tag = e, this.value = t;
    }

    _createClass(i, [{
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
        return this.tag ? i.some(e(this.value)) : i.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : i.none();
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
        return !this.tag || e(this.value) ? this : i.none();
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
        return new i(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return i.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return s(e) ? i.some(e) : i.none();
      }
    }]);

    return i;
  }();

  i.singletonNone = new i(!1);

  var c = Array.prototype.push,
      n = function n(e, t) {
    for (var _r = 0, _a = e.length; _r < _a; _r++) {
      t(e[_r], _r);
    }
  },
      l = function l(e) {
    var t = [];

    for (var _r2 = 0, _a2 = e.length; _r2 < _a2; ++_r2) {
      if (!o(e[_r2])) throw new Error("Arr.flatten item " + _r2 + " was not an array, input: " + e);
      c.apply(t, e[_r2]);
    }

    return t;
  },
      m = Object.keys,
      u = Object.hasOwnProperty,
      d = function d(e, t) {
    return h(e, t) ? i.from(e[t]) : i.none();
  },
      h = function h(e, t) {
    return u.call(e, t);
  },
      p = function p(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      g = p("audio_template_callback"),
      b = p("video_template_callback"),
      w = p("iframe_template_callback"),
      y = p("media_live_embeds"),
      f = p("media_filter_html"),
      v = p("media_url_resolver"),
      x = p("media_alt_source"),
      _ = p("media_poster"),
      j = p("media_dimensions");

  var k = tinymce.util.Tools.resolve("tinymce.util.Tools"),
      O = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      A = tinymce.util.Tools.resolve("tinymce.html.DomParser");

  var S = O.DOM,
      D = function D(e) {
    return e.replace(/px$/, "");
  },
      T = function T(e) {
    var t = e.attr("style"),
        r = t ? S.parseStyle(t) : {};
    return {
      type: "ephox-embed-iri",
      source: e.attr("data-ephox-embed-iri"),
      altsource: "",
      poster: "",
      width: d(r, "max-width").map(D).getOr(""),
      height: d(r, "max-height").map(D).getOr("")
    };
  },
      C = function C(e, t) {
    var r = {};

    for (var _a3 = A({
      validate: !1,
      forced_root_block: !1
    }, t).parse(e); _a3; _a3 = _a3.walk()) {
      if (1 === _a3.type) {
        var _e = _a3.name;

        if (_a3.attr("data-ephox-embed-iri")) {
          r = T(_a3);
          break;
        }

        r.source || "param" !== _e || (r.source = _a3.attr("movie")), "iframe" !== _e && "object" !== _e && "embed" !== _e && "video" !== _e && "audio" !== _e || (r.type || (r.type = _e), r = k.extend(_a3.attributes.map, r)), "script" === _e && (r = {
          type: "script",
          source: _a3.attr("src")
        }), "source" === _e && (r.source ? r.altsource || (r.altsource = _a3.attr("src")) : r.source = _a3.attr("src")), "img" !== _e || r.poster || (r.poster = _a3.attr("src"));
      }
    }

    return r.source = r.source || r.src || r.data, r.altsource = r.altsource || "", r.poster = r.poster || "", r;
  },
      $ = function $(e) {
    return {
      mp3: "audio/mpeg",
      m4a: "audio/x-m4a",
      wav: "audio/wav",
      mp4: "video/mp4",
      webm: "video/webm",
      ogg: "video/ogg",
      swf: "application/x-shockwave-flash"
    }[e.toLowerCase().split(".").pop()] || "";
  };

  var z = tinymce.util.Tools.resolve("tinymce.html.Node"),
      M = tinymce.util.Tools.resolve("tinymce.html.Serializer");

  var F = function F(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return A(_objectSpread({
      forced_root_block: !1,
      validate: !1,
      allow_conditional_comments: !0
    }, t), e);
  },
      N = O.DOM,
      R = function R(e) {
    return /^[0-9.]+$/.test(e) ? e + "px" : e;
  },
      U = function U(e, t) {
    var r = t.attr("style"),
        a = r ? N.parseStyle(r) : {};
    a["max-width"] = R(e.width), a["max-height"] = R(e.height), t.attr("style", N.serializeStyle(a));
  },
      P = ["source", "altsource"],
      E = function E(e, t, r, a) {
    var o = 0,
        s = 0;
    var i = F(a);
    i.addNodeFilter("source", function (e) {
      return o = e.length;
    });
    var c = i.parse(e);

    for (var _e2 = c; _e2; _e2 = _e2.walk()) {
      if (1 === _e2.type) {
        var _a4 = _e2.name;

        if (_e2.attr("data-ephox-embed-iri")) {
          U(t, _e2);
          break;
        }

        switch (_a4) {
          case "video":
          case "object":
          case "embed":
          case "img":
          case "iframe":
            void 0 !== t.height && void 0 !== t.width && (_e2.attr("width", t.width), _e2.attr("height", t.height));
        }

        if (r) switch (_a4) {
          case "video":
            _e2.attr("poster", t.poster), _e2.attr("src", null);

            for (var _r4 = o; _r4 < 2; _r4++) {
              if (t[P[_r4]]) {
                var _a5 = new z("source", 1);

                _a5.attr("src", t[P[_r4]]), _a5.attr("type", t[P[_r4] + "mime"] || null), _e2.append(_a5);
              }
            }

            break;

          case "iframe":
            _e2.attr("src", t.source);

            break;

          case "object":
            var _r3 = _e2.getAll("img").length > 0;

            if (t.poster && !_r3) {
              _e2.attr("src", t.poster);

              var _r5 = new z("img", 1);

              _r5.attr("src", t.poster), _r5.attr("width", t.width), _r5.attr("height", t.height), _e2.append(_r5);
            }

            break;

          case "source":
            if (s < 2 && (_e2.attr("src", t[P[s]]), _e2.attr("type", t[P[s] + "mime"] || null), !t[P[s]])) {
              _e2.remove();

              continue;
            }

            s++;
            break;

          case "img":
            t.poster || _e2.remove();
        }
      }
    }

    return M({}, a).serialize(c);
  },
      L = [{
    regex: /youtu\.be\/([\w\-_\?&=.]+)/i,
    type: "iframe",
    w: 560,
    h: 314,
    url: "www.youtube.com/embed/$1",
    allowFullscreen: !0
  }, {
    regex: /youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,
    type: "iframe",
    w: 560,
    h: 314,
    url: "www.youtube.com/embed/$2?$4",
    allowFullscreen: !0
  }, {
    regex: /youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,
    type: "iframe",
    w: 560,
    h: 314,
    url: "www.youtube.com/embed/$1",
    allowFullscreen: !0
  }, {
    regex: /vimeo\.com\/([0-9]+)/,
    type: "iframe",
    w: 425,
    h: 350,
    url: "player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",
    allowFullscreen: !0
  }, {
    regex: /vimeo\.com\/(.*)\/([0-9]+)/,
    type: "iframe",
    w: 425,
    h: 350,
    url: "player.vimeo.com/video/$2?title=0&amp;byline=0",
    allowFullscreen: !0
  }, {
    regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
    type: "iframe",
    w: 425,
    h: 350,
    url: 'maps.google.com/maps/ms?msid=$2&output=embed"',
    allowFullscreen: !1
  }, {
    regex: /dailymotion\.com\/video\/([^_]+)/,
    type: "iframe",
    w: 480,
    h: 270,
    url: "www.dailymotion.com/embed/video/$1",
    allowFullscreen: !0
  }, {
    regex: /dai\.ly\/([^_]+)/,
    type: "iframe",
    w: 480,
    h: 270,
    url: "www.dailymotion.com/embed/video/$1",
    allowFullscreen: !0
  }],
      I = function I(e, t) {
    var r = function (e) {
      var t = e.match(/^(https?:\/\/|www\.)(.+)$/i);
      return t && t.length > 1 ? "www." === t[1] ? "https://" : t[1] : "https://";
    }(t),
        a = e.regex.exec(t);

    var o = r + e.url;

    var _loop = function _loop(_e3) {
      o = o.replace("$" + _e3, function () {
        return a[_e3] ? a[_e3] : "";
      });
    };

    for (var _e3 = 0; _e3 < a.length; _e3++) {
      _loop(_e3);
    }

    return o.replace(/\?$/, "");
  },
      B = function B(e, t) {
    var r = k.extend({}, t);
    if (!r.source && (k.extend(r, C(r.embed, e.schema)), !r.source)) return "";
    r.altsource || (r.altsource = ""), r.poster || (r.poster = ""), r.source = e.convertURL(r.source, "source"), r.altsource = e.convertURL(r.altsource, "source"), r.sourcemime = $(r.source), r.altsourcemime = $(r.altsource), r.poster = e.convertURL(r.poster, "poster");

    var a = function (e) {
      var t = L.filter(function (t) {
        return t.regex.test(e);
      });
      return t.length > 0 ? k.extend({}, t[0], {
        url: I(t[0], e)
      }) : null;
    }(r.source);

    if (a && (r.source = a.url, r.type = a.type, r.allowfullscreen = a.allowFullscreen, r.width = r.width || String(a.w), r.height = r.height || String(a.h)), r.embed) return E(r.embed, r, !0, e.schema);
    {
      var _t = g(e),
          _a6 = b(e),
          _o = w(e);

      return r.width = r.width || "300", r.height = r.height || "150", k.each(r, function (t, a) {
        r[a] = e.dom.encode("" + t);
      }), "iframe" === r.type ? function (e, t) {
        if (t) return t(e);
        {
          var _t2 = e.allowfullscreen ? ' allowFullscreen="1"' : "";

          return '<iframe src="' + e.source + '" width="' + e.width + '" height="' + e.height + '"' + _t2 + "></iframe>";
        }
      }(r, _o) : "application/x-shockwave-flash" === r.sourcemime ? function (e) {
        var t = '<object data="' + e.source + '" width="' + e.width + '" height="' + e.height + '" type="application/x-shockwave-flash">';
        return e.poster && (t += '<img src="' + e.poster + '" width="' + e.width + '" height="' + e.height + '" />'), t += "</object>", t;
      }(r) : -1 !== r.sourcemime.indexOf("audio") ? function (e, t) {
        return t ? t(e) : '<audio controls="controls" src="' + e.source + '">' + (e.altsource ? '\n<source src="' + e.altsource + '"' + (e.altsourcemime ? ' type="' + e.altsourcemime + '"' : "") + " />\n" : "") + "</audio>";
      }(r, _t) : "script" === r.type ? function (e) {
        return '<script src="' + e.source + '"><\/script>';
      }(r) : function (e, t) {
        return t ? t(e) : '<video width="' + e.width + '" height="' + e.height + '"' + (e.poster ? ' poster="' + e.poster + '"' : "") + ' controls="controls">\n<source src="' + e.source + '"' + (e.sourcemime ? ' type="' + e.sourcemime + '"' : "") + " />\n" + (e.altsource ? '<source src="' + e.altsource + '"' + (e.altsourcemime ? ' type="' + e.altsourcemime + '"' : "") + " />\n" : "") + "</video>";
      }(r, _a6);
    }
  },
      G = function G(e) {
    return e.hasAttribute("data-mce-object") || e.hasAttribute("data-ephox-embed-iri");
  },
      W = {},
      q = function q(e) {
    return function (t) {
      return B(e, t);
    };
  },
      H = function H(e, t) {
    var r = v(e);
    return r ? function (e, t, r) {
      return new Promise(function (a, o) {
        var s = function s(r) {
          return r.html && (W[e.source] = r), a({
            url: e.source,
            html: r.html ? r.html : t(e)
          });
        };

        W[e.source] ? s(W[e.source]) : r({
          url: e.source
        }, s, o);
      });
    }(t, q(e), r) : function (e, t) {
      return Promise.resolve({
        html: t(e),
        url: e.source
      });
    }(t, q(e));
  },
      J = function J(e, t) {
    var r = {};
    return d(e, "dimensions").each(function (e) {
      n(["width", "height"], function (a) {
        d(t, a).orThunk(function () {
          return d(e, a);
        }).each(function (e) {
          return r[a] = e;
        });
      });
    }), r;
  },
      K = function K(e, t) {
    var r = t ? function (e, t) {
      return d(t, e).bind(function (e) {
        return d(e, "meta");
      });
    }(t, e).getOr({}) : {},
        o = function (e, t, r) {
      return function (o) {
        var s = function s() {
          return d(e, o);
        },
            c = function c() {
          return d(t, o);
        },
            n = function n(e) {
          return d(e, "value").bind(function (e) {
            return e.length > 0 ? i.some(e) : i.none();
          });
        };

        return _defineProperty({}, o, (o === r ? s().bind(function (e) {
          return a(e) ? n(e).orThunk(c) : c().orThunk(function () {
            return i.from(e);
          });
        }) : c().orThunk(function () {
          return s().bind(function (e) {
            return a(e) ? n(e) : i.from(e);
          });
        })).getOr(""));
      };
    }(e, r, t);

    return _objectSpread({}, o("source"), {}, o("altsource"), {}, o("poster"), {}, o("embed"), {}, J(e, r));
  },
      Q = function Q(e) {
    var t = _objectSpread({}, e, {
      source: {
        value: d(e, "source").getOr("")
      },
      altsource: {
        value: d(e, "altsource").getOr("")
      },
      poster: {
        value: d(e, "poster").getOr("")
      }
    });

    return n(["width", "height"], function (r) {
      d(e, r).each(function (e) {
        var a = t.dimensions || {};
        a[r] = e, t.dimensions = a;
      });
    }), t;
  },
      V = function V(e) {
    return function (t) {
      var r = t && t.msg ? "Media embed handler error: " + t.msg : "Media embed handler threw unknown error.";
      e.notificationManager.open({
        type: "error",
        text: r
      });
    };
  },
      X = function X(e, t) {
    return function (a) {
      if (r(a.url) && a.url.trim().length > 0) {
        var _r6 = a.html,
            _o2 = _objectSpread({}, C(_r6, t.schema), {
          source: a.url,
          embed: _r6
        });

        e.setData(Q(_o2));
      }
    };
  },
      Y = function Y(e, t) {
    var r = e.dom.select("*[data-mce-object]");
    e.insertContent(t), function (e, t) {
      var r = e.dom.select("*[data-mce-object]");

      for (var _e4 = 0; _e4 < t.length; _e4++) {
        for (var _a7 = r.length - 1; _a7 >= 0; _a7--) {
          t[_e4] === r[_a7] && r.splice(_a7, 1);
        }
      }

      e.selection.select(r[0]);
    }(e, r), e.nodeChanged();
  },
      Z = function Z(e) {
    var t = function (e) {
      var t = e.selection.getNode(),
          r = G(t) ? e.serializer.serialize(t, {
        selection: !0
      }) : "";
      return _objectSpread({
        embed: r
      }, C(r, e.schema));
    }(e),
        r = function (e) {
      var t = e;
      return {
        get: function get() {
          return t;
        },
        set: function set(e) {
          t = e;
        }
      };
    }(t),
        a = Q(t),
        o = j(e) ? [{
      type: "sizeinput",
      name: "dimensions",
      label: "Constrain proportions",
      constrain: !0
    }] : [],
        s = {
      title: "General",
      name: "general",
      items: l([[{
        name: "source",
        type: "urlinput",
        filetype: "media",
        label: "Source"
      }], o])
    },
        i = [];

    x(e) && i.push({
      name: "altsource",
      type: "urlinput",
      filetype: "media",
      label: "Alternative source URL"
    }), _(e) && i.push({
      name: "poster",
      type: "urlinput",
      filetype: "image",
      label: "Media poster (Image URL)"
    });
    var c = {
      title: "Advanced",
      name: "advanced",
      items: i
    },
        n = [s, {
      title: "Embed",
      items: [{
        type: "textarea",
        name: "embed",
        label: "Paste your embed code below:"
      }]
    }];
    i.length > 0 && n.push(c);
    var m = {
      type: "tabpanel",
      tabs: n
    },
        u = e.windowManager.open({
      title: "Insert/Edit Media",
      size: "normal",
      body: m,
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
        var a = K(t.getData());
        (function (e, t, r) {
          var a;
          t.embed = E(t.embed, t, !1, r.schema), t.embed && (e.source === t.source || (a = t.source, h(W, a))) ? Y(r, t.embed) : H(r, t).then(function (e) {
            Y(r, e.html);
          })["catch"](V(r));
        })(r.get(), a, e), t.close();
      },
      onChange: function onChange(t, a) {
        switch (a.name) {
          case "source":
            (function (t, r) {
              var a = K(r.getData(), "source");
              t.source !== a.source && (X(u, e)({
                url: a.source,
                html: ""
              }), H(e, a).then(X(u, e))["catch"](V(e)));
            })(r.get(), t);

            break;

          case "embed":
            (function (t) {
              var r = K(t.getData()),
                  a = C(r.embed, e.schema);
              t.setData(Q(a));
            })(t);

            break;

          case "dimensions":
          case "altsource":
          case "poster":
            (function (t, r) {
              var a = K(t.getData(), r),
                  o = B(e, a);
              t.setData(Q(_objectSpread({}, a, {
                embed: o
              })));
            })(t, a.name);

        }

        r.set(K(t.getData()));
      },
      initialData: a
    });
  };

  var ee = tinymce.util.Tools.resolve("tinymce.Env");

  var te = function te(e) {
    var t = e.name;
    return "iframe" === t || "video" === t || "audio" === t;
  },
      re = function re(e, t, r) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var o = e.attr(r);
    return s(o) ? o : h(t, r) ? null : a;
  },
      ae = function ae(e, t, r) {
    var a = "img" === t.name || "video" === e.name,
        o = a ? "300" : null,
        s = "audio" === e.name ? "30" : "150",
        i = a ? s : null;
    t.attr({
      width: re(e, r, "width", o),
      height: re(e, r, "height", i)
    });
  },
      oe = function oe(e, t) {
    var r = t.name,
        a = new z("img", 1);
    return ie(e, t, a), ae(t, a, {}), a.attr({
      style: t.attr("style"),
      src: ee.transparentSrc,
      "data-mce-object": r,
      "class": "mce-object mce-object-" + r
    }), a;
  },
      se = function se(e, t) {
    var r = t.name,
        a = new z("span", 1);
    a.attr({
      contentEditable: "false",
      style: t.attr("style"),
      "data-mce-object": r,
      "class": "mce-preview-object mce-object-" + r
    }), ie(e, t, a);
    var o = e.dom.parseStyle(t.attr("style")),
        i = new z(r, 1);
    if (ae(t, i, o), i.attr({
      src: t.attr("src"),
      style: t.attr("style"),
      "class": t.attr("class")
    }), "iframe" === r) i.attr({
      allowfullscreen: t.attr("allowfullscreen"),
      frameborder: "0"
    });else {
      n(["controls", "crossorigin", "currentTime", "loop", "muted", "poster", "preload"], function (e) {
        i.attr(e, t.attr(e));
      });

      var _o3 = a.attr("data-mce-html");

      s(_o3) && function (e, t, r, a) {
        var o = F(e.schema).parse(a, {
          context: t
        });

        for (; o.firstChild;) {
          r.append(o.firstChild);
        }
      }(e, r, i, unescape(_o3));
    }
    var c = new z("span", 1);
    return c.attr("class", "mce-shim"), a.append(i), a.append(c), a;
  },
      ie = function ie(e, t, r) {
    var a = t.attributes;
    var o = a.length;

    for (; o--;) {
      var _t3 = a[o].name;
      var _c = a[o].value;
      "width" === _t3 || "height" === _t3 || "style" === _t3 || (i = "data-mce-", (s = _t3).length >= i.length && s.substr(0, 0 + i.length) === i) || ("data" !== _t3 && "src" !== _t3 || (_c = e.convertURL(_c, _t3)), r.attr("data-mce-p-" + _t3, _c));
    }

    var s, i;
    var c = M({
      inner: !0
    }, e.schema),
        l = new z("div", 1);
    n(t.children(), function (e) {
      return l.append(e);
    });
    var m = c.serialize(l);
    m && (r.attr("data-mce-html", escape(m)), r.empty());
  },
      ce = function ce(e) {
    var t = e.attr("class");
    return t && /\btiny-pageembed\b/.test(t);
  },
      ne = function ne(e) {
    for (; e = e.parent;) {
      if (e.attr("data-ephox-embed-iri") || ce(e)) return !0;
    }

    return !1;
  },
      le = function le(e, t, r) {
    var a = f(e);
    return F(e.schema, {
      validate: a
    }).parse(r, {
      context: t
    });
  };

  e.add("media", function (e) {
    return function (e) {
      var t = e.options.register;
      t("audio_template_callback", {
        processor: "function"
      }), t("video_template_callback", {
        processor: "function"
      }), t("iframe_template_callback", {
        processor: "function"
      }), t("media_live_embeds", {
        processor: "boolean",
        "default": !0
      }), t("media_filter_html", {
        processor: "boolean",
        "default": !0
      }), t("media_url_resolver", {
        processor: "function"
      }), t("media_alt_source", {
        processor: "boolean",
        "default": !0
      }), t("media_poster", {
        processor: "boolean",
        "default": !0
      }), t("media_dimensions", {
        processor: "boolean",
        "default": !0
      });
    }(e), function (e) {
      e.addCommand("mceMedia", function () {
        Z(e);
      });
    }(e), function (e) {
      var t = function t() {
        return e.execCommand("mceMedia");
      };

      e.ui.registry.addToggleButton("media", {
        tooltip: "Insert/edit media",
        icon: "embed",
        onAction: t,
        onSetup: function onSetup(t) {
          var r = e.selection;
          return t.setActive(G(r.getNode())), r.selectorChangedWithUnbind("img[data-mce-object],span[data-mce-object],div[data-ephox-embed-iri]", t.setActive).unbind;
        }
      }), e.ui.registry.addMenuItem("media", {
        icon: "embed",
        text: "Media...",
        onAction: t
      });
    }(e), function (e) {
      e.on("ResolveName", function (e) {
        var t;
        1 === e.target.nodeType && (t = e.target.getAttribute("data-mce-object")) && (e.name = t);
      });
    }(e), function (e) {
      e.on("PreInit", function () {
        var t = e.schema,
            r = e.serializer,
            a = e.parser,
            o = t.getBoolAttrs();
        n("webkitallowfullscreen mozallowfullscreen".split(" "), function (e) {
          o[e] = {};
        }), function (e, t) {
          var r = m(e);

          for (var _a8 = 0, _o4 = r.length; _a8 < _o4; _a8++) {
            var _o5 = r[_a8];
            t(e[_o5], _o5);
          }
        }({
          embed: ["wmode"]
        }, function (e, r) {
          var a = t.getElementRule(r);
          n(e, function (e) {
            a.attributes[e] = {}, a.attributesOrder.push(e);
          });
        }), a.addNodeFilter("iframe,video,audio,object,embed,script", function (e) {
          return function (t) {
            var r,
                a = t.length;

            for (; a--;) {
              r = t[a], r.parent && (r.parent.attr("data-mce-object") || (te(r) && y(e) ? ne(r) || r.replace(se(e, r)) : ne(r) || r.replace(oe(e, r))));
            }
          };
        }(e)), r.addAttributeFilter("data-mce-object", function (t, r) {
          var a = t.length;

          var _loop2 = function _loop2() {
            var o = t[a];
            if (!o.parent) return "continue";
            var s = o.attr(r),
                i = new z(s, 1);

            if ("audio" !== s && "script" !== s) {
              var _e5 = o.attr("class");

              _e5 && -1 !== _e5.indexOf("mce-preview-object") ? i.attr({
                width: o.firstChild.attr("width"),
                height: o.firstChild.attr("height")
              }) : i.attr({
                width: o.attr("width"),
                height: o.attr("height")
              });
            }

            i.attr({
              style: o.attr("style")
            });
            var c = o.attributes;
            var l = c.length;

            for (; l--;) {
              var _e6 = c[l].name;
              0 === _e6.indexOf("data-mce-p-") && i.attr(_e6.substr(11), c[l].value);
            }

            "script" === s && i.attr("type", "text/javascript");
            var m = o.attr("data-mce-html");

            if (m) {
              var _t4 = le(e, s, unescape(m));

              n(_t4.children(), function (e) {
                return i.append(e);
              });
            }

            o.replace(i);
          };

          for (; a--;) {
            var _ret = _loop2();

            if (_ret === "continue") continue;
          }
        });
      }), e.on("SetContent", function () {
        var t = e.dom;
        n(t.select("span.mce-preview-object"), function (e) {
          0 === t.select("span.mce-shim", e).length && t.add(e, "span", {
            "class": "mce-shim"
          });
        });
      });
    }(e), function (e) {
      e.on("click keyup touchend", function () {
        var t = e.selection.getNode();
        t && e.dom.hasClass(t, "mce-preview-object") && e.dom.getAttrib(t, "data-mce-selected") && t.setAttribute("data-mce-selected", "2");
      }), e.on("ObjectSelected", function (e) {
        "script" === e.target.getAttribute("data-mce-object") && e.preventDefault();
      }), e.on("ObjectResized", function (t) {
        var r = t.target;

        if (r.getAttribute("data-mce-object")) {
          var _a9 = r.getAttribute("data-mce-html");

          _a9 && (_a9 = unescape(_a9), r.setAttribute("data-mce-html", escape(E(_a9, {
            width: String(t.width),
            height: String(t.height)
          }, !1, e.schema))));
        }
      });
    }(e), function (e) {
      return {
        showDialog: function showDialog() {
          Z(e);
        }
      };
    }(e);
  });
}();