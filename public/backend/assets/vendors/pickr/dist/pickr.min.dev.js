"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Pickr 1.8.2 MIT | https://github.com/Simonwep/pickr */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Pickr = e() : t.Pickr = e();
}(self, function () {
  return function () {
    "use strict";

    var t = {
      d: function d(e, o) {
        for (var n in o) {
          t.o(o, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: o[n]
          });
        }
      },
      o: function o(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      },
      r: function r(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }
    },
        e = {};
    t.d(e, {
      "default": function _default() {
        return L;
      }
    });
    var o = {};

    function n(t, e, o, n) {
      var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      e instanceof HTMLCollection || e instanceof NodeList ? e = Array.from(e) : Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _s = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e = _step2.value;

              _s[t](_e, n, _objectSpread({
                capture: !1
              }, i));
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

      return Array.prototype.slice.call(arguments, 1);
    }

    t.r(o), t.d(o, {
      adjustableInputNumbers: function adjustableInputNumbers() {
        return p;
      },
      createElementFromString: function createElementFromString() {
        return r;
      },
      createFromTemplate: function createFromTemplate() {
        return a;
      },
      eventPath: function eventPath() {
        return l;
      },
      off: function off() {
        return s;
      },
      on: function on() {
        return i;
      },
      resolveElement: function resolveElement() {
        return c;
      }
    });
    var i = n.bind(null, "addEventListener"),
        s = n.bind(null, "removeEventListener");

    function r(t) {
      var e = document.createElement("div");
      return e.innerHTML = t.trim(), e.firstElementChild;
    }

    function a(t) {
      var e = function e(t, _e2) {
        var o = t.getAttribute(_e2);
        return t.removeAttribute(_e2), o;
      },
          o = function o(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i = e(t, ":obj"),
            s = e(t, ":ref"),
            r = i ? n[i] = {} : n;
        s && (n[s] = t);

        for (var _i = 0, _Array$from = Array.from(t.children); _i < _Array$from.length; _i++) {
          var _n = _Array$from[_i];

          var _t = e(_n, ":arr"),
              _i2 = o(_n, _t ? {} : r);

          _t && (r[_t] || (r[_t] = [])).push(Object.keys(_i2).length ? _i2 : _n);
        }

        return n;
      };

      return o(r(t));
    }

    function l(t) {
      var e = t.path || t.composedPath && t.composedPath();
      if (e) return e;
      var o = t.target.parentElement;

      for (e = [t.target, o]; o = o.parentElement;) {
        e.push(o);
      }

      return e.push(document, window), e;
    }

    function c(t) {
      return t instanceof Element ? t : "string" == typeof t ? t.split(/>>/g).reduce(function (t, e, o, n) {
        return t = t.querySelector(e), o < n.length - 1 ? t.shadowRoot : t;
      }, document) : null;
    }

    function p(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (t) {
        return t;
      };

      function o(o) {
        var n = [.001, .01, .1][Number(o.shiftKey || 2 * o.ctrlKey)] * (o.deltaY < 0 ? 1 : -1);
        var i = 0,
            s = t.selectionStart;
        t.value = t.value.replace(/[\d.]+/g, function (t, o) {
          return o <= s && o + t.length >= s ? (s = o, e(Number(t), n, i)) : (i++, t);
        }), t.focus(), t.setSelectionRange(s, s), o.preventDefault(), t.dispatchEvent(new Event("input"));
      }

      i(t, "focus", function () {
        return i(window, "wheel", o, {
          passive: !1
        });
      }), i(t, "blur", function () {
        return s(window, "wheel", o);
      });
    }

    var u = Math.min,
        h = Math.max,
        d = Math.floor,
        m = Math.round;

    function f(t, e, o) {
      e /= 100, o /= 100;
      var n = d(t = t / 360 * 6),
          i = t - n,
          s = o * (1 - e),
          r = o * (1 - i * e),
          a = o * (1 - (1 - i) * e),
          l = n % 6;
      return [255 * [o, r, s, s, a, o][l], 255 * [a, o, o, r, s, s][l], 255 * [s, s, a, o, o, r][l]];
    }

    function v(t, e, o) {
      var n = (2 - (e /= 100)) * (o /= 100) / 2;
      return 0 !== n && (e = 1 === n ? 0 : n < .5 ? e * o / (2 * n) : e * o / (2 - 2 * n)), [t, 100 * e, 100 * n];
    }

    function b(t, e, o) {
      var n = u(t /= 255, e /= 255, o /= 255),
          i = h(t, e, o),
          s = i - n;
      var r, a;
      if (0 === s) r = a = 0;else {
        a = s / i;

        var _n2 = ((i - t) / 6 + s / 2) / s,
            _l = ((i - e) / 6 + s / 2) / s,
            _c = ((i - o) / 6 + s / 2) / s;

        t === i ? r = _c - _l : e === i ? r = 1 / 3 + _n2 - _c : o === i && (r = 2 / 3 + _l - _n2), r < 0 ? r += 1 : r > 1 && (r -= 1);
      }
      return [360 * r, 100 * a, 100 * i];
    }

    function y(t, e, o, n) {
      e /= 100, o /= 100;
      return _toConsumableArray(b(255 * (1 - u(1, (t /= 100) * (1 - (n /= 100)) + n)), 255 * (1 - u(1, e * (1 - n) + n)), 255 * (1 - u(1, o * (1 - n) + n))));
    }

    function g(t, e, o) {
      e /= 100;
      var n = 2 * (e *= (o /= 100) < .5 ? o : 1 - o) / (o + e) * 100,
          i = 100 * (o + e);
      return [t, isNaN(n) ? 0 : n, i];
    }

    function _(t) {
      return b.apply(void 0, _toConsumableArray(t.match(/.{2}/g).map(function (t) {
        return parseInt(t, 16);
      })));
    }

    function w(t) {
      t = t.match(/^[a-zA-Z]+$/) ? function (t) {
        if ("black" === t.toLowerCase()) return "#000";
        var e = document.createElement("canvas").getContext("2d");
        return e.fillStyle = t, "#000" === e.fillStyle ? null : e.fillStyle;
      }(t) : t;

      var e = {
        cmyk: /^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,
        rgba: /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
        hsla: /^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
        hsva: /^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
        hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i
      },
          o = function o(t) {
        return t.map(function (t) {
          return /^(|\d+)\.\d+|\d+$/.test(t) ? Number(t) : void 0;
        });
      };

      var n;

      t: for (var _i3 in e) {
        if (!(n = e[_i3].exec(t))) continue;

        var _s2 = function _s2(t) {
          return !!n[2] == ("number" == typeof t);
        };

        switch (_i3) {
          case "cmyk":
            {
              var _o = o(n),
                  _o2 = _slicedToArray(_o, 5),
                  _t2 = _o2[1],
                  _e3 = _o2[2],
                  _s3 = _o2[3],
                  _r = _o2[4];

              if (_t2 > 100 || _e3 > 100 || _s3 > 100 || _r > 100) break t;
              return {
                values: y(_t2, _e3, _s3, _r),
                type: _i3
              };
            }

          case "rgba":
            {
              var _o3 = o(n),
                  _o4 = _slicedToArray(_o3, 7),
                  _t3 = _o4[3],
                  _e4 = _o4[4],
                  _r2 = _o4[5],
                  _a = _o4[6];

              if (_t3 > 255 || _e4 > 255 || _r2 > 255 || _a < 0 || _a > 1 || !_s2(_a)) break t;
              return {
                values: [].concat(_toConsumableArray(b(_t3, _e4, _r2)), [_a]),
                a: _a,
                type: _i3
              };
            }

          case "hexa":
            {
              var _n3 = n,
                  _n4 = _slicedToArray(_n3, 2),
                  _t4 = _n4[1];

              4 !== _t4.length && 3 !== _t4.length || (_t4 = _t4.split("").map(function (t) {
                return t + t;
              }).join(""));

              var _e5 = _t4.substring(0, 6);

              var _o5 = _t4.substring(6);

              return _o5 = _o5 ? parseInt(_o5, 16) / 255 : void 0, {
                values: [].concat(_toConsumableArray(_(_e5)), [_o5]),
                a: _o5,
                type: _i3
              };
            }

          case "hsla":
            {
              var _o6 = o(n),
                  _o7 = _slicedToArray(_o6, 7),
                  _t5 = _o7[3],
                  _e6 = _o7[4],
                  _r3 = _o7[5],
                  _a2 = _o7[6];

              if (_t5 > 360 || _e6 > 100 || _r3 > 100 || _a2 < 0 || _a2 > 1 || !_s2(_a2)) break t;
              return {
                values: [].concat(_toConsumableArray(g(_t5, _e6, _r3)), [_a2]),
                a: _a2,
                type: _i3
              };
            }

          case "hsva":
            {
              var _o8 = o(n),
                  _o9 = _slicedToArray(_o8, 7),
                  _t6 = _o9[3],
                  _e7 = _o9[4],
                  _r4 = _o9[5],
                  _a3 = _o9[6];

              if (_t6 > 360 || _e7 > 100 || _r4 > 100 || _a3 < 0 || _a3 > 1 || !_s2(_a3)) break t;
              return {
                values: [_t6, _e7, _r4, _a3],
                a: _a3,
                type: _i3
              };
            }
        }
      }

      return {
        values: null,
        type: null
      };
    }

    function A() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      var i = function i(t, e) {
        return function () {
          var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
          return e(~o ? t.map(function (t) {
            return Number(t.toFixed(o));
          }) : t);
        };
      },
          s = {
        h: t,
        s: e,
        v: o,
        a: n,
        toHSVA: function toHSVA() {
          var t = [s.h, s.s, s.v, s.a];
          return t.toString = i(t, function (t) {
            return "hsva(".concat(t[0], ", ").concat(t[1], "%, ").concat(t[2], "%, ").concat(s.a, ")");
          }), t;
        },
        toHSLA: function toHSLA() {
          var t = [].concat(_toConsumableArray(v(s.h, s.s, s.v)), [s.a]);
          return t.toString = i(t, function (t) {
            return "hsla(".concat(t[0], ", ").concat(t[1], "%, ").concat(t[2], "%, ").concat(s.a, ")");
          }), t;
        },
        toRGBA: function toRGBA() {
          var t = [].concat(_toConsumableArray(f(s.h, s.s, s.v)), [s.a]);
          return t.toString = i(t, function (t) {
            return "rgba(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ", ").concat(s.a, ")");
          }), t;
        },
        toCMYK: function toCMYK() {
          var t = function (t, e, o) {
            var n = f(t, e, o),
                i = n[0] / 255,
                s = n[1] / 255,
                r = n[2] / 255,
                a = u(1 - i, 1 - s, 1 - r);
            return [100 * (1 === a ? 0 : (1 - i - a) / (1 - a)), 100 * (1 === a ? 0 : (1 - s - a) / (1 - a)), 100 * (1 === a ? 0 : (1 - r - a) / (1 - a)), 100 * a];
          }(s.h, s.s, s.v);

          return t.toString = i(t, function (t) {
            return "cmyk(".concat(t[0], "%, ").concat(t[1], "%, ").concat(t[2], "%, ").concat(t[3], "%)");
          }), t;
        },
        toHEXA: function toHEXA() {
          var t = function (t, e, o) {
            return f(t, e, o).map(function (t) {
              return m(t).toString(16).padStart(2, "0");
            });
          }(s.h, s.s, s.v),
              e = s.a >= 1 ? "" : Number((255 * s.a).toFixed(0)).toString(16).toUpperCase().padStart(2, "0");

          return e && t.push(e), t.toString = function () {
            return "#".concat(t.join("").toUpperCase());
          }, t;
        },
        clone: function clone() {
          return A(s.h, s.s, s.v, s.a);
        }
      };

      return s;
    }

    var C = function C(t) {
      return Math.max(Math.min(t, 1), 0);
    };

    function $(t) {
      var e = {
        options: Object.assign({
          lock: null,
          onchange: function onchange() {
            return 0;
          },
          onstop: function onstop() {
            return 0;
          }
        }, t),
        _keyboard: function _keyboard(t) {
          var o = e.options,
              n = t.type,
              i = t.key;

          if (document.activeElement === o.wrapper) {
            var _o10 = e.options.lock,
                _s4 = "ArrowUp" === i,
                _r5 = "ArrowRight" === i,
                _a4 = "ArrowDown" === i,
                _l2 = "ArrowLeft" === i;

            if ("keydown" === n && (_s4 || _r5 || _a4 || _l2)) {
              var _n5 = 0,
                  _i4 = 0;
              "v" === _o10 ? _n5 = _s4 || _r5 ? 1 : -1 : "h" === _o10 ? _n5 = _s4 || _r5 ? -1 : 1 : (_i4 = _s4 ? -1 : _a4 ? 1 : 0, _n5 = _l2 ? -1 : _r5 ? 1 : 0), e.update(C(e.cache.x + .01 * _n5), C(e.cache.y + .01 * _i4)), t.preventDefault();
            } else i.startsWith("Arrow") && (e.options.onstop(), t.preventDefault());
          }
        },
        _tapstart: function _tapstart(t) {
          i(document, ["mouseup", "touchend", "touchcancel"], e._tapstop), i(document, ["mousemove", "touchmove"], e._tapmove), t.cancelable && t.preventDefault(), e._tapmove(t);
        },
        _tapmove: function _tapmove(t) {
          var o = e.options,
              n = e.cache,
              i = o.lock,
              s = o.element,
              r = o.wrapper,
              a = r.getBoundingClientRect();
          var l = 0,
              c = 0;

          if (t) {
            var _e8 = t && t.touches && t.touches[0];

            l = t ? (_e8 || t).clientX : 0, c = t ? (_e8 || t).clientY : 0, l < a.left ? l = a.left : l > a.left + a.width && (l = a.left + a.width), c < a.top ? c = a.top : c > a.top + a.height && (c = a.top + a.height), l -= a.left, c -= a.top;
          } else n && (l = n.x * a.width, c = n.y * a.height);

          "h" !== i && (s.style.left = "calc(".concat(l / a.width * 100, "% - ").concat(s.offsetWidth / 2, "px)")), "v" !== i && (s.style.top = "calc(".concat(c / a.height * 100, "% - ").concat(s.offsetHeight / 2, "px)")), e.cache = {
            x: l / a.width,
            y: c / a.height
          };
          var p = C(l / a.width),
              u = C(c / a.height);

          switch (i) {
            case "v":
              return o.onchange(p);

            case "h":
              return o.onchange(u);

            default:
              return o.onchange(p, u);
          }
        },
        _tapstop: function _tapstop() {
          e.options.onstop(), s(document, ["mouseup", "touchend", "touchcancel"], e._tapstop), s(document, ["mousemove", "touchmove"], e._tapmove);
        },
        trigger: function trigger() {
          e._tapmove();
        },
        update: function update() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          var _e$options$wrapper$ge = e.options.wrapper.getBoundingClientRect(),
              n = _e$options$wrapper$ge.left,
              i = _e$options$wrapper$ge.top,
              s = _e$options$wrapper$ge.width,
              r = _e$options$wrapper$ge.height;

          "h" === e.options.lock && (o = t), e._tapmove({
            clientX: n + s * t,
            clientY: i + r * o
          });
        },
        destroy: function destroy() {
          var t = e.options,
              o = e._tapstart,
              n = e._keyboard;
          s(document, ["keydown", "keyup"], n), s([t.wrapper, t.element], "mousedown", o), s([t.wrapper, t.element], "touchstart", o, {
            passive: !1
          });
        }
      },
          o = e.options,
          n = e._tapstart,
          r = e._keyboard;
      return i([o.wrapper, o.element], "mousedown", n), i([o.wrapper, o.element], "touchstart", n, {
        passive: !1
      }), i(document, ["keydown", "keyup"], r), e;
    }

    function k() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      t = Object.assign({
        onchange: function onchange() {
          return 0;
        },
        className: "",
        elements: []
      }, t);
      var e = i(t.elements, "click", function (e) {
        t.elements.forEach(function (o) {
          return o.classList[e.target === o ? "add" : "remove"](t.className);
        }), t.onchange(e), e.stopPropagation();
      });
      return {
        destroy: function destroy() {
          return s.apply(void 0, _toConsumableArray(e));
        }
      };
    }

    var S = {
      variantFlipOrder: {
        start: "sme",
        middle: "mse",
        end: "ems"
      },
      positionFlipOrder: {
        top: "tbrl",
        right: "rltb",
        bottom: "btrl",
        left: "lrbt"
      },
      position: "bottom",
      margin: 8
    },
        O = function O(t, e, o) {
      var _container$S$o = _objectSpread({
        container: document.documentElement.getBoundingClientRect()
      }, S, {}, o),
          n = _container$S$o.container,
          i = _container$S$o.margin,
          s = _container$S$o.position,
          r = _container$S$o.variantFlipOrder,
          a = _container$S$o.positionFlipOrder,
          _e$style = e.style,
          l = _e$style.left,
          c = _e$style.top;

      e.style.left = "0", e.style.top = "0";

      var p = t.getBoundingClientRect(),
          u = e.getBoundingClientRect(),
          h = {
        t: p.top - u.height - i,
        b: p.bottom + i,
        r: p.right + i,
        l: p.left - u.width - i
      },
          d = {
        vs: p.left,
        vm: p.left + p.width / 2 + -u.width / 2,
        ve: p.left + p.width - u.width,
        hs: p.top,
        hm: p.bottom - p.height / 2 - u.height / 2,
        he: p.bottom - u.height
      },
          _s$split = s.split("-"),
          _s$split2 = _slicedToArray(_s$split, 2),
          m = _s$split2[0],
          _s$split2$ = _s$split2[1],
          f = _s$split2$ === void 0 ? "middle" : _s$split2$,
          v = a[m],
          b = r[f],
          y = n.top,
          g = n.left,
          _ = n.bottom,
          w = n.right;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = v[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _t7 = _step3.value;

          var _o11 = "t" === _t7 || "b" === _t7,
              _n6 = h[_t7],
              _ref = _o11 ? ["top", "left"] : ["left", "top"],
              _ref2 = _slicedToArray(_ref, 2),
              _i5 = _ref2[0],
              _s5 = _ref2[1],
              _ref3 = _o11 ? [u.height, u.width] : [u.width, u.height],
              _ref4 = _slicedToArray(_ref3, 2),
              _r6 = _ref4[0],
              _a5 = _ref4[1],
              _ref5 = _o11 ? [_, w] : [w, _],
              _ref6 = _slicedToArray(_ref5, 2),
              _l3 = _ref6[0],
              _c2 = _ref6[1],
              _ref7 = _o11 ? [y, g] : [g, y],
              _ref8 = _slicedToArray(_ref7, 2),
              _p = _ref8[0],
              _m = _ref8[1];

          if (!(_n6 < _p || _n6 + _r6 > _l3)) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = b[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _r7 = _step4.value;
                var _l4 = d[(_o11 ? "v" : "h") + _r7];
                if (!(_l4 < _m || _l4 + _a5 > _c2)) return e.style[_s5] = _l4 - u[_s5] + "px", e.style[_i5] = _n6 - u[_i5] + "px", _t7 + _r7;
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

      return e.style.left = l, e.style.top = c, null;
    };

    function E(t, e, o) {
      return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = o, t;
    }

    var L =
    /*#__PURE__*/
    function () {
      function L(t) {
        var _this = this;

        _classCallCheck(this, L);

        E(this, "_initializingActive", !0), E(this, "_recalc", !0), E(this, "_nanopop", null), E(this, "_root", null), E(this, "_color", A()), E(this, "_lastColor", A()), E(this, "_swatchColors", []), E(this, "_setupAnimationFrame", null), E(this, "_eventListener", {
          init: [],
          save: [],
          hide: [],
          show: [],
          clear: [],
          change: [],
          changestop: [],
          cancel: [],
          swatchselect: []
        }), this.options = t = Object.assign(_objectSpread({}, L.DEFAULT_OPTIONS), t);
        var _t8 = t,
            e = _t8.swatches,
            o = _t8.components,
            n = _t8.theme,
            i = _t8.sliders,
            s = _t8.lockOpacity,
            r = _t8.padding;
        ["nano", "monolith"].includes(n) && !i && (t.sliders = "h"), o.interaction || (o.interaction = {});
        var a = o.preview,
            l = o.opacity,
            c = o.hue,
            p = o.palette;
        o.opacity = !s && l, o.palette = p || a || l || c, this._preBuild(), this._buildComponents(), this._bindEvents(), this._finalBuild(), e && e.length && e.forEach(function (t) {
          return _this.addSwatch(t);
        });
        var _this$_root = this._root,
            u = _this$_root.button,
            h = _this$_root.app;
        this._nanopop = function (t, e, o) {
          var n = "object" != _typeof(t) || t instanceof HTMLElement ? _objectSpread({
            reference: t,
            popper: e
          }, o) : t;
          return {
            update: function update() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : n;

              var _Object$assign = Object.assign(n, t),
                  e = _Object$assign.reference,
                  o = _Object$assign.popper;

              if (!o || !e) throw new Error("Popper- or reference-element missing.");
              return O(e, o, n);
            }
          };
        }(u, h, {
          margin: r
        }), u.setAttribute("role", "button"), u.setAttribute("aria-label", this._t("btn:toggle"));
        var d = this;
        this._setupAnimationFrame = requestAnimationFrame(function e() {
          if (!h.offsetWidth) return requestAnimationFrame(e);
          d.setColor(t["default"]), d._rePositioningPicker(), t.defaultRepresentation && (d._representation = t.defaultRepresentation, d.setColorRepresentation(d._representation)), t.showAlways && d.show(), d._initializingActive = !1, d._emit("init");
        });
      }

      _createClass(L, [{
        key: "_preBuild",
        value: function _preBuild() {
          var t = this.options;

          for (var _i6 = 0, _arr2 = ["el", "container"]; _i6 < _arr2.length; _i6++) {
            var _e9 = _arr2[_i6];
            t[_e9] = c(t[_e9]);
          }

          this._root = function (t) {
            var _t$options = t.options,
                e = _t$options.components,
                o = _t$options.useAsButton,
                n = _t$options.inline,
                i = _t$options.appClass,
                s = _t$options.theme,
                r = _t$options.lockOpacity,
                l = function l(t) {
              return t ? "" : 'style="display:none" hidden';
            },
                c = function c(e) {
              return t._t(e);
            },
                p = a("\n      <div :ref=\"root\" class=\"pickr\">\n\n        ".concat(o ? "" : '<button type="button" :ref="button" class="pcr-button"></button>', "\n\n        <div :ref=\"app\" class=\"pcr-app ").concat(i || "", "\" data-theme=\"").concat(s, "\" ").concat(n ? 'style="position: unset"' : "", " aria-label=\"").concat(c("ui:dialog"), "\" role=\"window\">\n          <div class=\"pcr-selection\" ").concat(l(e.palette), ">\n            <div :obj=\"preview\" class=\"pcr-color-preview\" ").concat(l(e.preview), ">\n              <button type=\"button\" :ref=\"lastColor\" class=\"pcr-last-color\" aria-label=\"").concat(c("btn:last-color"), "\"></button>\n              <div :ref=\"currentColor\" class=\"pcr-current-color\"></div>\n            </div>\n\n            <div :obj=\"palette\" class=\"pcr-color-palette\">\n              <div :ref=\"picker\" class=\"pcr-picker\"></div>\n              <div :ref=\"palette\" class=\"pcr-palette\" tabindex=\"0\" aria-label=\"").concat(c("aria:palette"), "\" role=\"listbox\"></div>\n            </div>\n\n            <div :obj=\"hue\" class=\"pcr-color-chooser\" ").concat(l(e.hue), ">\n              <div :ref=\"picker\" class=\"pcr-picker\"></div>\n              <div :ref=\"slider\" class=\"pcr-hue pcr-slider\" tabindex=\"0\" aria-label=\"").concat(c("aria:hue"), "\" role=\"slider\"></div>\n            </div>\n\n            <div :obj=\"opacity\" class=\"pcr-color-opacity\" ").concat(l(e.opacity), ">\n              <div :ref=\"picker\" class=\"pcr-picker\"></div>\n              <div :ref=\"slider\" class=\"pcr-opacity pcr-slider\" tabindex=\"0\" aria-label=\"").concat(c("aria:opacity"), "\" role=\"slider\"></div>\n            </div>\n          </div>\n\n          <div class=\"pcr-swatches ").concat(e.palette ? "" : "pcr-last", "\" :ref=\"swatches\"></div>\n\n          <div :obj=\"interaction\" class=\"pcr-interaction\" ").concat(l(Object.keys(e.interaction).length), ">\n            <input :ref=\"result\" class=\"pcr-result\" type=\"text\" spellcheck=\"false\" ").concat(l(e.interaction.input), " aria-label=\"").concat(c("aria:input"), "\">\n\n            <input :arr=\"options\" class=\"pcr-type\" data-type=\"HEXA\" value=\"").concat(r ? "HEX" : "HEXA", "\" type=\"button\" ").concat(l(e.interaction.hex), ">\n            <input :arr=\"options\" class=\"pcr-type\" data-type=\"RGBA\" value=\"").concat(r ? "RGB" : "RGBA", "\" type=\"button\" ").concat(l(e.interaction.rgba), ">\n            <input :arr=\"options\" class=\"pcr-type\" data-type=\"HSLA\" value=\"").concat(r ? "HSL" : "HSLA", "\" type=\"button\" ").concat(l(e.interaction.hsla), ">\n            <input :arr=\"options\" class=\"pcr-type\" data-type=\"HSVA\" value=\"").concat(r ? "HSV" : "HSVA", "\" type=\"button\" ").concat(l(e.interaction.hsva), ">\n            <input :arr=\"options\" class=\"pcr-type\" data-type=\"CMYK\" value=\"CMYK\" type=\"button\" ").concat(l(e.interaction.cmyk), ">\n\n            <input :ref=\"save\" class=\"pcr-save\" value=\"").concat(c("btn:save"), "\" type=\"button\" ").concat(l(e.interaction.save), " aria-label=\"").concat(c("aria:btn:save"), "\">\n            <input :ref=\"cancel\" class=\"pcr-cancel\" value=\"").concat(c("btn:cancel"), "\" type=\"button\" ").concat(l(e.interaction.cancel), " aria-label=\"").concat(c("aria:btn:cancel"), "\">\n            <input :ref=\"clear\" class=\"pcr-clear\" value=\"").concat(c("btn:clear"), "\" type=\"button\" ").concat(l(e.interaction.clear), " aria-label=\"").concat(c("aria:btn:clear"), "\">\n          </div>\n        </div>\n      </div>\n    ")),
                u = p.interaction;

            return u.options.find(function (t) {
              return !t.hidden && !t.classList.add("active");
            }), u.type = function () {
              return u.options.find(function (t) {
                return t.classList.contains("active");
              });
            }, p;
          }(this), t.useAsButton && (this._root.button = t.el), t.container.appendChild(this._root.root);
        }
      }, {
        key: "_finalBuild",
        value: function _finalBuild() {
          var t = this.options,
              e = this._root;

          if (t.container.removeChild(e.root), t.inline) {
            var _o12 = t.el.parentElement;
            t.el.nextSibling ? _o12.insertBefore(e.app, t.el.nextSibling) : _o12.appendChild(e.app);
          } else t.container.appendChild(e.app);

          t.useAsButton ? t.inline && t.el.remove() : t.el.parentNode.replaceChild(e.root, t.el), t.disabled && this.disable(), t.comparison || (e.button.style.transition = "none", t.useAsButton || (e.preview.lastColor.style.transition = "none")), this.hide();
        }
      }, {
        key: "_buildComponents",
        value: function _buildComponents() {
          var _this2 = this;

          var t = this,
              e = this.options.components,
              o = (t.options.sliders || "v").repeat(2),
              _ref9 = o.match(/^[vh]+$/g) ? o : [],
              _ref10 = _slicedToArray(_ref9, 2),
              n = _ref10[0],
              i = _ref10[1],
              s = function s() {
            return _this2._color || (_this2._color = _this2._lastColor.clone());
          },
              r = {
            palette: $({
              element: t._root.palette.picker,
              wrapper: t._root.palette.palette,
              onstop: function onstop() {
                return t._emit("changestop", "slider", t);
              },
              onchange: function onchange(o, n) {
                if (!e.palette) return;
                var i = s(),
                    r = t._root,
                    a = t.options,
                    _r$preview = r.preview,
                    l = _r$preview.lastColor,
                    c = _r$preview.currentColor;
                t._recalc && (i.s = 100 * o, i.v = 100 - 100 * n, i.v < 0 && (i.v = 0), t._updateOutput("slider"));
                var p = i.toRGBA().toString(0);
                this.element.style.background = p, this.wrapper.style.background = "\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a, "), transparent),\n                        linear-gradient(to left, hsla(").concat(i.h, ", 100%, 50%, ").concat(i.a, "), rgba(255, 255, 255, ").concat(i.a, "))\n                    "), a.comparison ? a.useAsButton || t._lastColor || l.style.setProperty("--pcr-color", p) : (r.button.style.setProperty("--pcr-color", p), r.button.classList.remove("clear"));
                var u = i.toHEXA().toString();
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = t._swatchColors[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _step5$value = _step5.value,
                        _e10 = _step5$value.el,
                        _o13 = _step5$value.color;

                    _e10.classList[u === _o13.toHEXA().toString() ? "add" : "remove"]("pcr-active");
                  }
                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                      _iterator5["return"]();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }

                c.style.setProperty("--pcr-color", p);
              }
            }),
            hue: $({
              lock: "v" === i ? "h" : "v",
              element: t._root.hue.picker,
              wrapper: t._root.hue.slider,
              onstop: function onstop() {
                return t._emit("changestop", "slider", t);
              },
              onchange: function onchange(o) {
                if (!e.hue || !e.palette) return;
                var n = s();
                t._recalc && (n.h = 360 * o), this.element.style.backgroundColor = "hsl(".concat(n.h, ", 100%, 50%)"), r.palette.trigger();
              }
            }),
            opacity: $({
              lock: "v" === n ? "h" : "v",
              element: t._root.opacity.picker,
              wrapper: t._root.opacity.slider,
              onstop: function onstop() {
                return t._emit("changestop", "slider", t);
              },
              onchange: function onchange(o) {
                if (!e.opacity || !e.palette) return;
                var n = s();
                t._recalc && (n.a = Math.round(100 * o) / 100), this.element.style.background = "rgba(0, 0, 0, ".concat(n.a, ")"), r.palette.trigger();
              }
            }),
            selectable: k({
              elements: t._root.interaction.options,
              className: "active",
              onchange: function onchange(e) {
                t._representation = e.target.getAttribute("data-type").toUpperCase(), t._recalc && t._updateOutput("swatch");
              }
            })
          };

          this._components = r;
        }
      }, {
        key: "_bindEvents",
        value: function _bindEvents() {
          var _this3 = this;

          var t = this._root,
              e = this.options,
              o = [i(t.interaction.clear, "click", function () {
            return _this3._clearColor();
          }), i([t.interaction.cancel, t.preview.lastColor], "click", function () {
            _this3.setHSVA.apply(_this3, _toConsumableArray((_this3._lastColor || _this3._color).toHSVA()).concat([!0])), _this3._emit("cancel");
          }), i(t.interaction.save, "click", function () {
            !_this3.applyColor() && !e.showAlways && _this3.hide();
          }), i(t.interaction.result, ["keyup", "input"], function (t) {
            _this3.setColor(t.target.value, !0) && !_this3._initializingActive && (_this3._emit("change", _this3._color, "input", _this3), _this3._emit("changestop", "input", _this3)), t.stopImmediatePropagation();
          }), i(t.interaction.result, ["focus", "blur"], function (t) {
            _this3._recalc = "blur" === t.type, _this3._recalc && _this3._updateOutput(null);
          }), i([t.palette.palette, t.palette.picker, t.hue.slider, t.hue.picker, t.opacity.slider, t.opacity.picker], ["mousedown", "touchstart"], function () {
            return _this3._recalc = !0;
          }, {
            passive: !0
          })];

          if (!e.showAlways) {
            var _n7 = e.closeWithKey;
            o.push(i(t.button, "click", function () {
              return _this3.isOpen() ? _this3.hide() : _this3.show();
            }), i(document, "keyup", function (t) {
              return _this3.isOpen() && (t.key === _n7 || t.code === _n7) && _this3.hide();
            }), i(document, ["touchstart", "mousedown"], function (e) {
              _this3.isOpen() && !l(e).some(function (e) {
                return e === t.app || e === t.button;
              }) && _this3.hide();
            }, {
              capture: !0
            }));
          }

          if (e.adjustableNumbers) {
            var _e11 = {
              rgba: [255, 255, 255, 1],
              hsva: [360, 100, 100, 1],
              hsla: [360, 100, 100, 1],
              cmyk: [100, 100, 100, 100]
            };
            p(t.interaction.result, function (t, o, n) {
              var i = _e11[_this3.getColorRepresentation().toLowerCase()];

              if (i) {
                var _e12 = i[n],
                    _s6 = t + (_e12 >= 100 ? 1e3 * o : o);

                return _s6 <= 0 ? 0 : Number((_s6 < _e12 ? _s6 : _e12).toPrecision(3));
              }

              return t;
            });
          }

          if (e.autoReposition && !e.inline) {
            var _t9 = null;

            var _n8 = this;

            o.push(i(window, ["scroll", "resize"], function () {
              _n8.isOpen() && (e.closeOnScroll && _n8.hide(), null === _t9 ? (_t9 = setTimeout(function () {
                return _t9 = null;
              }, 100), requestAnimationFrame(function e() {
                _n8._rePositioningPicker(), null !== _t9 && requestAnimationFrame(e);
              })) : (clearTimeout(_t9), _t9 = setTimeout(function () {
                return _t9 = null;
              }, 100)));
            }, {
              capture: !0
            }));
          }

          this._eventBindings = o;
        }
      }, {
        key: "_rePositioningPicker",
        value: function _rePositioningPicker() {
          var t = this.options;

          if (!t.inline) {
            if (!this._nanopop.update({
              container: document.body.getBoundingClientRect(),
              position: t.position
            })) {
              var _t10 = this._root.app,
                  _e13 = _t10.getBoundingClientRect();

              _t10.style.top = (window.innerHeight - _e13.height) / 2 + "px", _t10.style.left = (window.innerWidth - _e13.width) / 2 + "px";
            }
          }
        }
      }, {
        key: "_updateOutput",
        value: function _updateOutput(t) {
          var e = this._root,
              o = this._color,
              n = this.options;

          if (e.interaction.type()) {
            var _t11 = "to".concat(e.interaction.type().getAttribute("data-type"));

            e.interaction.result.value = "function" == typeof o[_t11] ? o[_t11]().toString(n.outputPrecision) : "";
          }

          !this._initializingActive && this._recalc && this._emit("change", o, t, this);
        }
      }, {
        key: "_clearColor",
        value: function _clearColor() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          var e = this._root,
              o = this.options;
          o.useAsButton || e.button.style.setProperty("--pcr-color", "rgba(0, 0, 0, 0.15)"), e.button.classList.add("clear"), o.showAlways || this.hide(), this._lastColor = null, this._initializingActive || t || (this._emit("save", null), this._emit("clear"));
        }
      }, {
        key: "_parseLocalColor",
        value: function _parseLocalColor(t) {
          var _w = w(t),
              e = _w.values,
              o = _w.type,
              n = _w.a,
              i = this.options.lockOpacity,
              s = void 0 !== n && 1 !== n;

          return e && 3 === e.length && (e[3] = void 0), {
            values: !e || i && s ? null : e,
            type: o
          };
        }
      }, {
        key: "_t",
        value: function _t(t) {
          return this.options.i18n[t] || L.I18N_DEFAULTS[t];
        }
      }, {
        key: "_emit",
        value: function _emit(t) {
          var _this4 = this;

          for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            e[_key - 1] = arguments[_key];
          }

          this._eventListener[t].forEach(function (t) {
            return t.apply(void 0, e.concat([_this4]));
          });
        }
      }, {
        key: "on",
        value: function on(t, e) {
          return this._eventListener[t].push(e), this;
        }
      }, {
        key: "off",
        value: function off(t, e) {
          var o = this._eventListener[t] || [],
              n = o.indexOf(e);
          return ~n && o.splice(n, 1), this;
        }
      }, {
        key: "addSwatch",
        value: function addSwatch(t) {
          var _this5 = this;

          var _this$_parseLocalColo = this._parseLocalColor(t),
              e = _this$_parseLocalColo.values;

          if (e) {
            var _t12 = this._swatchColors,
                _o14 = this._root,
                _n9 = A.apply(void 0, _toConsumableArray(e)),
                _s7 = r("<button type=\"button\" style=\"--pcr-color: ".concat(_n9.toRGBA().toString(0), "\" aria-label=\"").concat(this._t("btn:swatch"), "\"/>"));

            return _o14.swatches.appendChild(_s7), _t12.push({
              el: _s7,
              color: _n9
            }), this._eventBindings.push(i(_s7, "click", function () {
              _this5.setHSVA.apply(_this5, _toConsumableArray(_n9.toHSVA()).concat([!0])), _this5._emit("swatchselect", _n9), _this5._emit("change", _n9, "swatch", _this5);
            })), !0;
          }

          return !1;
        }
      }, {
        key: "removeSwatch",
        value: function removeSwatch(t) {
          var e = this._swatchColors[t];

          if (e) {
            var _o15 = e.el;
            return this._root.swatches.removeChild(_o15), this._swatchColors.splice(t, 1), !0;
          }

          return !1;
        }
      }, {
        key: "applyColor",
        value: function applyColor() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

          var _this$_root2 = this._root,
              e = _this$_root2.preview,
              o = _this$_root2.button,
              n = this._color.toRGBA().toString(0);

          return e.lastColor.style.setProperty("--pcr-color", n), this.options.useAsButton || o.style.setProperty("--pcr-color", n), o.classList.remove("clear"), this._lastColor = this._color.clone(), this._initializingActive || t || this._emit("save", this._color), this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this6 = this;

          cancelAnimationFrame(this._setupAnimationFrame), this._eventBindings.forEach(function (t) {
            return s.apply(void 0, _toConsumableArray(t));
          }), Object.keys(this._components).forEach(function (t) {
            return _this6._components[t].destroy();
          });
        }
      }, {
        key: "destroyAndRemove",
        value: function destroyAndRemove() {
          var _this7 = this;

          this.destroy();
          var _this$_root3 = this._root,
              t = _this$_root3.root,
              e = _this$_root3.app;
          t.parentElement && t.parentElement.removeChild(t), e.parentElement.removeChild(e), Object.keys(this).forEach(function (t) {
            return _this7[t] = null;
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          return !!this.isOpen() && (this._root.app.classList.remove("visible"), this._emit("hide"), !0);
        }
      }, {
        key: "show",
        value: function show() {
          return !this.options.disabled && !this.isOpen() && (this._root.app.classList.add("visible"), this._rePositioningPicker(), this._emit("show", this._color), this);
        }
      }, {
        key: "isOpen",
        value: function isOpen() {
          return this._root.app.classList.contains("visible");
        }
      }, {
        key: "setHSVA",
        value: function setHSVA() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 360;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
          var s = this._recalc;
          if (this._recalc = !1, t < 0 || t > 360 || e < 0 || e > 100 || o < 0 || o > 100 || n < 0 || n > 1) return !1;
          this._color = A(t, e, o, n);
          var _this$_components = this._components,
              r = _this$_components.hue,
              a = _this$_components.opacity,
              l = _this$_components.palette;
          return r.update(t / 360), a.update(n), l.update(e / 100, 1 - o / 100), i || this.applyColor(), s && this._updateOutput(), this._recalc = s, !0;
        }
      }, {
        key: "setColor",
        value: function setColor(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          if (null === t) return this._clearColor(e), !0;

          var _this$_parseLocalColo2 = this._parseLocalColor(t),
              o = _this$_parseLocalColo2.values,
              n = _this$_parseLocalColo2.type;

          if (o) {
            var _t13 = n.toUpperCase(),
                _i7 = this._root.interaction.options,
                _s8 = _i7.find(function (e) {
              return e.getAttribute("data-type") === _t13;
            });

            if (_s8 && !_s8.hidden) {
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                for (var _iterator6 = _i7[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var _t14 = _step6.value;

                  _t14.classList[_t14 === _s8 ? "add" : "remove"]("active");
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                    _iterator6["return"]();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }
            }

            return !!this.setHSVA.apply(this, _toConsumableArray(o).concat([e])) && this.setColorRepresentation(_t13);
          }

          return !1;
        }
      }, {
        key: "setColorRepresentation",
        value: function setColorRepresentation(t) {
          return t = t.toUpperCase(), !!this._root.interaction.options.find(function (e) {
            return e.getAttribute("data-type").startsWith(t) && !e.click();
          });
        }
      }, {
        key: "getColorRepresentation",
        value: function getColorRepresentation() {
          return this._representation;
        }
      }, {
        key: "getColor",
        value: function getColor() {
          return this._color;
        }
      }, {
        key: "getSelectedColor",
        value: function getSelectedColor() {
          return this._lastColor;
        }
      }, {
        key: "getRoot",
        value: function getRoot() {
          return this._root;
        }
      }, {
        key: "disable",
        value: function disable() {
          return this.hide(), this.options.disabled = !0, this._root.button.classList.add("disabled"), this;
        }
      }, {
        key: "enable",
        value: function enable() {
          return this.options.disabled = !1, this._root.button.classList.remove("disabled"), this;
        }
      }]);

      return L;
    }();

    return E(L, "utils", o), E(L, "version", "1.8.2"), E(L, "I18N_DEFAULTS", {
      "ui:dialog": "color picker dialog",
      "btn:toggle": "toggle color picker dialog",
      "btn:swatch": "color swatch",
      "btn:last-color": "use previous color",
      "btn:save": "Save",
      "btn:cancel": "Cancel",
      "btn:clear": "Clear",
      "aria:btn:save": "save and close",
      "aria:btn:cancel": "cancel and close",
      "aria:btn:clear": "clear and close",
      "aria:input": "color input field",
      "aria:palette": "color selection area",
      "aria:hue": "hue selection slider",
      "aria:opacity": "selection slider"
    }), E(L, "DEFAULT_OPTIONS", {
      appClass: null,
      theme: "classic",
      useAsButton: !1,
      padding: 8,
      disabled: !1,
      comparison: !0,
      closeOnScroll: !1,
      outputPrecision: 0,
      lockOpacity: !1,
      autoReposition: !0,
      container: "body",
      components: {
        interaction: {}
      },
      i18n: {},
      swatches: null,
      inline: !1,
      sliders: null,
      "default": "#42445a",
      defaultRepresentation: null,
      position: "bottom-middle",
      adjustableNumbers: !0,
      showAlways: !1,
      closeWithKey: "Escape"
    }), E(L, "create", function (t) {
      return new L(t);
    }), e = e["default"];
  }();
});