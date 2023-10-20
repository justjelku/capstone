"use strict";

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

  var t = function t(e, _t) {
    var a = function (e, t) {
      return e.dispatch("insertCustomChar", {
        chr: t
      });
    }(e, _t).chr;

    e.execCommand("mceInsertContent", !1, a);
  },
      a = ("array", function (e) {
    return "array" === function (e) {
      var t = _typeof(e);

      return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (a = r = e, (n = String).prototype.isPrototypeOf(a) || (null === (i = r.constructor) || void 0 === i ? void 0 : i.name) === n.name) ? "string" : t;
      var a, r, n, i;
    }(e);
  });

  var r = (null, function (e) {
    return null === e;
  });

  var n = function n(e) {
    return "function" == typeof e;
  },
      i = (!1, function () {
    return false;
  });

  var o =
  /*#__PURE__*/
  function () {
    function o(e, t) {
      _classCallCheck(this, o);

      this.tag = e, this.value = t;
    }

    _createClass(o, [{
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
        return this.tag ? o.some(e(this.value)) : o.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : o.none();
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
        return !this.tag || e(this.value) ? this : o.none();
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
        return new o(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return o.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return null == e ? o.none() : o.some(e);
      }
    }]);

    return o;
  }();

  o.singletonNone = new o(!1);

  var s = Array.prototype.push,
      l = function l(e, t) {
    var a = e.length,
        r = new Array(a);

    for (var _n = 0; _n < a; _n++) {
      var _a = e[_n];
      r[_n] = t(_a, _n);
    }

    return r;
  };

  var c = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var u = function u(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      g = u("charmap"),
      h = u("charmap_append"),
      m = c.isArray,
      p = "User Defined",
      d = function d(e) {
    return m(e) ? (t = e, c.grep(t, function (e) {
      return m(e) && 2 === e.length;
    })) : "function" == typeof e ? e() : [];
    var t;
  },
      f = function f(e) {
    var t = function (e, t) {
      var a = g(e);
      a && (t = [{
        name: p,
        characters: d(a)
      }]);
      var r = h(e);

      if (r) {
        var _e = c.grep(t, function (e) {
          return e.name === p;
        });

        return _e.length ? (_e[0].characters = [].concat(_e[0].characters).concat(d(r)), t) : t.concat({
          name: p,
          characters: d(r)
        });
      }

      return t;
    }(e, [{
      name: "Currency",
      characters: [[36, "dollar sign"], [162, "cent sign"], [8364, "euro sign"], [163, "pound sign"], [165, "yen sign"], [164, "currency sign"], [8352, "euro-currency sign"], [8353, "colon sign"], [8354, "cruzeiro sign"], [8355, "french franc sign"], [8356, "lira sign"], [8357, "mill sign"], [8358, "naira sign"], [8359, "peseta sign"], [8360, "rupee sign"], [8361, "won sign"], [8362, "new sheqel sign"], [8363, "dong sign"], [8365, "kip sign"], [8366, "tugrik sign"], [8367, "drachma sign"], [8368, "german penny symbol"], [8369, "peso sign"], [8370, "guarani sign"], [8371, "austral sign"], [8372, "hryvnia sign"], [8373, "cedi sign"], [8374, "livre tournois sign"], [8375, "spesmilo sign"], [8376, "tenge sign"], [8377, "indian rupee sign"], [8378, "turkish lira sign"], [8379, "nordic mark sign"], [8380, "manat sign"], [8381, "ruble sign"], [20870, "yen character"], [20803, "yuan character"], [22291, "yuan character, in hong kong and taiwan"], [22278, "yen/yuan character variant one"]]
    }, {
      name: "Text",
      characters: [[169, "copyright sign"], [174, "registered sign"], [8482, "trade mark sign"], [8240, "per mille sign"], [181, "micro sign"], [183, "middle dot"], [8226, "bullet"], [8230, "three dot leader"], [8242, "minutes / feet"], [8243, "seconds / inches"], [167, "section sign"], [182, "paragraph sign"], [223, "sharp s / ess-zed"]]
    }, {
      name: "Quotations",
      characters: [[8249, "single left-pointing angle quotation mark"], [8250, "single right-pointing angle quotation mark"], [171, "left pointing guillemet"], [187, "right pointing guillemet"], [8216, "left single quotation mark"], [8217, "right single quotation mark"], [8220, "left double quotation mark"], [8221, "right double quotation mark"], [8218, "single low-9 quotation mark"], [8222, "double low-9 quotation mark"], [60, "less-than sign"], [62, "greater-than sign"], [8804, "less-than or equal to"], [8805, "greater-than or equal to"], [8211, "en dash"], [8212, "em dash"], [175, "macron"], [8254, "overline"], [164, "currency sign"], [166, "broken bar"], [168, "diaeresis"], [161, "inverted exclamation mark"], [191, "turned question mark"], [710, "circumflex accent"], [732, "small tilde"], [176, "degree sign"], [8722, "minus sign"], [177, "plus-minus sign"], [247, "division sign"], [8260, "fraction slash"], [215, "multiplication sign"], [185, "superscript one"], [178, "superscript two"], [179, "superscript three"], [188, "fraction one quarter"], [189, "fraction one half"], [190, "fraction three quarters"]]
    }, {
      name: "Mathematical",
      characters: [[402, "function / florin"], [8747, "integral"], [8721, "n-ary sumation"], [8734, "infinity"], [8730, "square root"], [8764, "similar to"], [8773, "approximately equal to"], [8776, "almost equal to"], [8800, "not equal to"], [8801, "identical to"], [8712, "element of"], [8713, "not an element of"], [8715, "contains as member"], [8719, "n-ary product"], [8743, "logical and"], [8744, "logical or"], [172, "not sign"], [8745, "intersection"], [8746, "union"], [8706, "partial differential"], [8704, "for all"], [8707, "there exists"], [8709, "diameter"], [8711, "backward difference"], [8727, "asterisk operator"], [8733, "proportional to"], [8736, "angle"]]
    }, {
      name: "Extended Latin",
      characters: [[192, "A - grave"], [193, "A - acute"], [194, "A - circumflex"], [195, "A - tilde"], [196, "A - diaeresis"], [197, "A - ring above"], [256, "A - macron"], [198, "ligature AE"], [199, "C - cedilla"], [200, "E - grave"], [201, "E - acute"], [202, "E - circumflex"], [203, "E - diaeresis"], [274, "E - macron"], [204, "I - grave"], [205, "I - acute"], [206, "I - circumflex"], [207, "I - diaeresis"], [298, "I - macron"], [208, "ETH"], [209, "N - tilde"], [210, "O - grave"], [211, "O - acute"], [212, "O - circumflex"], [213, "O - tilde"], [214, "O - diaeresis"], [216, "O - slash"], [332, "O - macron"], [338, "ligature OE"], [352, "S - caron"], [217, "U - grave"], [218, "U - acute"], [219, "U - circumflex"], [220, "U - diaeresis"], [362, "U - macron"], [221, "Y - acute"], [376, "Y - diaeresis"], [562, "Y - macron"], [222, "THORN"], [224, "a - grave"], [225, "a - acute"], [226, "a - circumflex"], [227, "a - tilde"], [228, "a - diaeresis"], [229, "a - ring above"], [257, "a - macron"], [230, "ligature ae"], [231, "c - cedilla"], [232, "e - grave"], [233, "e - acute"], [234, "e - circumflex"], [235, "e - diaeresis"], [275, "e - macron"], [236, "i - grave"], [237, "i - acute"], [238, "i - circumflex"], [239, "i - diaeresis"], [299, "i - macron"], [240, "eth"], [241, "n - tilde"], [242, "o - grave"], [243, "o - acute"], [244, "o - circumflex"], [245, "o - tilde"], [246, "o - diaeresis"], [248, "o slash"], [333, "o macron"], [339, "ligature oe"], [353, "s - caron"], [249, "u - grave"], [250, "u - acute"], [251, "u - circumflex"], [252, "u - diaeresis"], [363, "u - macron"], [253, "y - acute"], [254, "thorn"], [255, "y - diaeresis"], [563, "y - macron"], [913, "Alpha"], [914, "Beta"], [915, "Gamma"], [916, "Delta"], [917, "Epsilon"], [918, "Zeta"], [919, "Eta"], [920, "Theta"], [921, "Iota"], [922, "Kappa"], [923, "Lambda"], [924, "Mu"], [925, "Nu"], [926, "Xi"], [927, "Omicron"], [928, "Pi"], [929, "Rho"], [931, "Sigma"], [932, "Tau"], [933, "Upsilon"], [934, "Phi"], [935, "Chi"], [936, "Psi"], [937, "Omega"], [945, "alpha"], [946, "beta"], [947, "gamma"], [948, "delta"], [949, "epsilon"], [950, "zeta"], [951, "eta"], [952, "theta"], [953, "iota"], [954, "kappa"], [955, "lambda"], [956, "mu"], [957, "nu"], [958, "xi"], [959, "omicron"], [960, "pi"], [961, "rho"], [962, "final sigma"], [963, "sigma"], [964, "tau"], [965, "upsilon"], [966, "phi"], [967, "chi"], [968, "psi"], [969, "omega"]]
    }, {
      name: "Symbols",
      characters: [[8501, "alef symbol"], [982, "pi symbol"], [8476, "real part symbol"], [978, "upsilon - hook symbol"], [8472, "Weierstrass p"], [8465, "imaginary part"]]
    }, {
      name: "Arrows",
      characters: [[8592, "leftwards arrow"], [8593, "upwards arrow"], [8594, "rightwards arrow"], [8595, "downwards arrow"], [8596, "left right arrow"], [8629, "carriage return"], [8656, "leftwards double arrow"], [8657, "upwards double arrow"], [8658, "rightwards double arrow"], [8659, "downwards double arrow"], [8660, "left right double arrow"], [8756, "therefore"], [8834, "subset of"], [8835, "superset of"], [8836, "not a subset of"], [8838, "subset of or equal to"], [8839, "superset of or equal to"], [8853, "circled plus"], [8855, "circled times"], [8869, "perpendicular"], [8901, "dot operator"], [8968, "left ceiling"], [8969, "right ceiling"], [8970, "left floor"], [8971, "right floor"], [9001, "left-pointing angle bracket"], [9002, "right-pointing angle bracket"], [9674, "lozenge"], [9824, "black spade suit"], [9827, "black club suit"], [9829, "black heart suit"], [9830, "black diamond suit"], [8194, "en space"], [8195, "em space"], [8201, "thin space"], [8204, "zero width non-joiner"], [8205, "zero width joiner"], [8206, "left-to-right mark"], [8207, "right-to-left mark"]]
    }]);

    return t.length > 1 ? [{
      name: "All",
      characters: (r = t, n = function n(e) {
        return e.characters;
      }, function (e) {
        var t = [];

        for (var _r = 0, _n2 = e.length; _r < _n2; ++_r) {
          if (!a(e[_r])) throw new Error("Arr.flatten item " + _r + " was not an array, input: " + e);
          s.apply(t, e[_r]);
        }

        return t;
      }(l(r, n)))
    }].concat(t) : t;
    var r, n;
  },
      y = function y(e) {
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
      w = function w(e, t) {
    return -1 !== e.indexOf(t);
  },
      b = String.fromCodePoint,
      v = function v(e, t) {
    var a = [],
        r = t.toLowerCase();
    return function (e, t) {
      for (var _t2 = 0, _i = e.length; _t2 < _i; _t2++) {
        (function (e, t, a) {
          return !!w(b(e).toLowerCase(), a) || w(t.toLowerCase(), a) || w(t.toLowerCase().replace(/\s+/g, ""), a);
        })((n = e[_t2])[0], n[1], r) && a.push(n);
      }

      var n;
    }(e.characters), l(a, function (e) {
      return {
        text: e[1],
        value: b(e[0]),
        icon: b(e[0])
      };
    });
  },
      k = "pattern",
      C = function C(e, a) {
    var n = function n() {
      return [{
        label: "Search",
        type: "input",
        name: k
      }, {
        type: "collection",
        name: "results"
      }];
    },
        s = 1 === a.length ? y(p) : y("All"),
        c = function (e, t) {
      var a = null;

      var n = function n() {
        r(a) || (clearTimeout(a), a = null);
      };

      return {
        cancel: n,
        throttle: function throttle() {
          for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
            t[_key] = arguments[_key];
          }

          n(), a = setTimeout(function () {
            a = null, e.apply(null, t);
          }, 40);
        }
      };
    }(function (e) {
      var t = e.getData().pattern;

      (function (e, t) {
        var r, n;
        (r = a, n = function n(e) {
          return e.name === s.get();
        }, function (e, t, a) {
          for (var _r2 = 0, _n3 = e.length; _r2 < _n3; _r2++) {
            var _n4 = e[_r2];
            if (t(_n4, _r2)) return o.some(_n4);
            if (a(_n4, _r2)) break;
          }

          return o.none();
        }(r, n, i)).each(function (a) {
          var r = v(a, t);
          e.setData({
            results: r
          });
        });
      })(e, t);
    }),
        u = {
      title: "Special Character",
      size: "normal",
      body: 1 === a.length ? {
        type: "panel",
        items: n()
      } : {
        type: "tabpanel",
        tabs: l(a, function (e) {
          return {
            title: e.name,
            name: e.name,
            items: n()
          };
        })
      },
      buttons: [{
        type: "cancel",
        name: "close",
        text: "Close",
        primary: !0
      }],
      initialData: {
        pattern: "",
        results: v(a[0], "")
      },
      onAction: function onAction(a, r) {
        "results" === r.name && (t(e, r.value), a.close());
      },
      onTabChange: function onTabChange(e, t) {
        s.set(t.newTabName), c.throttle(e);
      },
      onChange: function onChange(e, t) {
        t.name === k && c.throttle(e);
      }
    };

    e.windowManager.open(u).focus(k);
  };

  e.add("charmap", function (e) {
    (function (e) {
      var t = e.options.register,
          r = function r(e) {
        return n(e) || a(e);
      };

      t("charmap", {
        processor: r
      }), t("charmap_append", {
        processor: r
      });
    })(e);

    var r = f(e);
    return function (e, t) {
      e.addCommand("mceShowCharmap", function () {
        C(e, t);
      });
    }(e, r), function (e) {
      e.ui.registry.addButton("charmap", {
        icon: "insert-character",
        tooltip: "Special character",
        onAction: function onAction() {
          return e.execCommand("mceShowCharmap");
        }
      }), e.ui.registry.addMenuItem("charmap", {
        icon: "insert-character",
        text: "Special character...",
        onAction: function onAction() {
          return e.execCommand("mceShowCharmap");
        }
      });
    }(e), function (e, t) {
      e.ui.registry.addAutocompleter("charmap", {
        ch: ":",
        columns: "auto",
        minChars: 2,
        fetch: function fetch(e, a) {
          return new Promise(function (a, r) {
            a(v(t, e));
          });
        },
        onAction: function onAction(t, a, r) {
          e.selection.setRng(a), e.insertContent(r), t.hide();
        }
      });
    }(e, r[0]), function (e) {
      return {
        getCharMap: function getCharMap() {
          return f(e);
        },
        insertChar: function insertChar(a) {
          t(e, a);
        }
      };
    }(e);
  });
}();