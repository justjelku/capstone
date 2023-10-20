"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t();
}(void 0, function () {
  "use strict";

  var D = "SweetAlert2:",
      q = function q(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
      r = function r(e) {
    console.warn("".concat(D, " ").concat("object" == _typeof(e) ? e.join(" ") : e));
  },
      l = function l(e) {
    console.error("".concat(D, " ").concat(e));
  },
      V = [],
      N = function N(e, t) {
    e = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), V.includes(e) || (V.push(e), r(e));
  },
      R = function R(e) {
    return "function" == typeof e ? e() : e;
  },
      F = function F(e) {
    return e && "function" == typeof e.toPromise;
  },
      u = function u(e) {
    return F(e) ? e.toPromise() : Promise.resolve(e);
  },
      U = function U(e) {
    return e && Promise.resolve(e) === e;
  };

  var i = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show"
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide"
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0
  },
      W = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
      z = {},
      K = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
      _ = function _(e) {
    return Object.prototype.hasOwnProperty.call(i, e);
  },
      Y = function Y(e) {
    return -1 !== W.indexOf(e);
  },
      Z = function Z(e) {
    return z[e];
  },
      X = function X(e) {
    !e.backdrop && e.allowOutsideClick && r('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');

    for (var _n in e) {
      t = _n, _(t) || r('Unknown parameter "'.concat(t, '"')), e.toast && (t = _n, K.includes(t) && r('The parameter "'.concat(t, '" is incompatible with toasts'))), t = _n, Z(t) && N(t, Z(t));
    }

    var t;
  };

  var e = function e(_e2) {
    var t = {};

    for (var _n2 in _e2) {
      t[_e2[_n2]] = "swal2-" + _e2[_n2];
    }

    return t;
  };

  var p = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
      o = e(["success", "warning", "info", "question", "error"]),
      m = function m() {
    return document.body.querySelector(".".concat(p.container));
  },
      t = function t(e) {
    var t = m();
    return t ? t.querySelector(e) : null;
  },
      n = function n(e) {
    return t(".".concat(e));
  },
      g = function g() {
    return n(p.popup);
  },
      $ = function $() {
    return n(p.icon);
  },
      J = function J() {
    return n(p.title);
  },
      G = function G() {
    return n(p["html-container"]);
  },
      Q = function Q() {
    return n(p.image);
  },
      ee = function ee() {
    return n(p["progress-steps"]);
  },
      te = function te() {
    return n(p["validation-message"]);
  },
      h = function h() {
    return t(".".concat(p.actions, " .").concat(p.confirm));
  },
      f = function f() {
    return t(".".concat(p.actions, " .").concat(p.deny));
  };

  var d = function d() {
    return t(".".concat(p.loader));
  },
      b = function b() {
    return t(".".concat(p.actions, " .").concat(p.cancel));
  },
      ne = function ne() {
    return n(p.actions);
  },
      oe = function oe() {
    return n(p.footer);
  },
      ie = function ie() {
    return n(p["timer-progress-bar"]);
  },
      re = function re() {
    return n(p.close);
  },
      ae = function ae() {
    var e = Array.from(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
      e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex"));
      return t < e ? 1 : e < t ? -1 : 0;
    });
    var t = Array.from(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (e) {
      return "-1" !== e.getAttribute("tabindex");
    });
    return function (t) {
      var n = [];

      for (var _e3 = 0; _e3 < t.length; _e3++) {
        -1 === n.indexOf(t[_e3]) && n.push(t[_e3]);
      }

      return n;
    }(e.concat(t)).filter(function (e) {
      return P(e);
    });
  },
      se = function se() {
    return s(document.body, p.shown) && !s(document.body, p["toast-shown"]) && !s(document.body, p["no-backdrop"]);
  },
      ce = function ce() {
    return g() && s(g(), p.toast);
  };

  function le(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    var n = ie();
    P(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(function () {
      n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%";
    }, 10));
  }

  var a = {
    previousBodyPadding: null
  },
      y = function y(t, e) {
    if (t.textContent = "", e) {
      var _n3 = new DOMParser(),
          _o = _n3.parseFromString(e, "text/html");

      Array.from(_o.querySelector("head").childNodes).forEach(function (e) {
        t.appendChild(e);
      }), Array.from(_o.querySelector("body").childNodes).forEach(function (e) {
        t.appendChild(e);
      });
    }
  },
      s = function s(t, e) {
    if (!e) return !1;
    var n = e.split(/\s+/);

    for (var _e4 = 0; _e4 < n.length; _e4++) {
      if (!t.classList.contains(n[_e4])) return !1;
    }

    return !0;
  },
      ue = function ue(t, n) {
    Array.from(t.classList).forEach(function (e) {
      Object.values(p).includes(e) || Object.values(o).includes(e) || Object.values(n.showClass).includes(e) || t.classList.remove(e);
    });
  },
      v = function v(e, t, n) {
    if (ue(e, t), t.customClass && t.customClass[n]) {
      if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return r("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(_typeof(t.customClass[n]), '"'));
      w(e, t.customClass[n]);
    }
  },
      de = function de(e, t) {
    if (!t) return null;

    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return e.querySelector(".".concat(p.popup, " > .").concat(p[t]));

      case "checkbox":
        return e.querySelector(".".concat(p.popup, " > .").concat(p.checkbox, " input"));

      case "radio":
        return e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:checked")) || e.querySelector(".".concat(p.popup, " > .").concat(p.radio, " input:first-child"));

      case "range":
        return e.querySelector(".".concat(p.popup, " > .").concat(p.range, " input"));

      default:
        return e.querySelector(".".concat(p.popup, " > .").concat(p.input));
    }
  },
      pe = function pe(e) {
    var t;
    e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t);
  },
      me = function me(e, t, n) {
    e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(function (t) {
      Array.isArray(e) ? e.forEach(function (e) {
        n ? e.classList.add(t) : e.classList.remove(t);
      }) : n ? e.classList.add(t) : e.classList.remove(t);
    });
  },
      w = function w(e, t) {
    me(e, t, !0);
  },
      C = function C(e, t) {
    me(e, t, !1);
  },
      A = function A(e, t) {
    var n = Array.from(e.children);

    for (var _e5 = 0; _e5 < n.length; _e5++) {
      var o = n[_e5];
      if (o instanceof HTMLElement && s(o, t)) return o;
    }
  },
      c = function c(e, t, n) {
    (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t);
  },
      k = function k(e) {
    e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
  },
      B = function B(e) {
    e.style.display = "none";
  },
      ge = function ge(e, t, n, o) {
    var i = e.querySelector(t);
    i && (i.style[n] = o);
  },
      he = function he(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "flex";
    t ? k(e, n) : B(e);
  },
      P = function P(e) {
    return !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length));
  },
      fe = function fe() {
    return !P(h()) && !P(f()) && !P(b());
  },
      be = function be(e) {
    return !!(e.scrollHeight > e.clientHeight);
  },
      ye = function ye(e) {
    var t = window.getComputedStyle(e);
    var e = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        n = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return 0 < e || 0 < n;
  },
      ve = function ve() {
    return "undefined" == typeof window || "undefined" == typeof document;
  },
      we = 100,
      x = {},
      Ce = function Ce() {
    x.previousActiveElement instanceof HTMLElement ? (x.previousActiveElement.focus(), x.previousActiveElement = null) : document.body && document.body.focus();
  },
      Ae = function Ae(o) {
    return new Promise(function (e) {
      if (!o) return e();
      var t = window.scrollX,
          n = window.scrollY;
      x.restoreFocusTimeout = setTimeout(function () {
        Ce(), e();
      }, we), window.scrollTo(t, n);
    });
  },
      ke = '\n <div aria-labelledby="'.concat(p.title, '" aria-describedby="').concat(p["html-container"], '" class="').concat(p.popup, '" tabindex="-1">\n   <button type="button" class="').concat(p.close, '"></button>\n   <ul class="').concat(p["progress-steps"], '"></ul>\n   <div class="').concat(p.icon, '"></div>\n   <img class="').concat(p.image, '" />\n   <h2 class="').concat(p.title, '" id="').concat(p.title, '"></h2>\n   <div class="').concat(p["html-container"], '" id="').concat(p["html-container"], '"></div>\n   <input class="').concat(p.input, '" />\n   <input type="file" class="').concat(p.file, '" />\n   <div class="').concat(p.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select, '"></select>\n   <div class="').concat(p.radio, '"></div>\n   <label for="').concat(p.checkbox, '" class="').concat(p.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(p.label, '"></span>\n   </label>\n   <textarea class="').concat(p.textarea, '"></textarea>\n   <div class="').concat(p["validation-message"], '" id="').concat(p["validation-message"], '"></div>\n   <div class="').concat(p.actions, '">\n     <div class="').concat(p.loader, '"></div>\n     <button type="button" class="').concat(p.confirm, '"></button>\n     <button type="button" class="').concat(p.deny, '"></button>\n     <button type="button" class="').concat(p.cancel, '"></button>\n   </div>\n   <div class="').concat(p.footer, '"></div>\n   <div class="').concat(p["timer-progress-bar-container"], '">\n     <div class="').concat(p["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
      Be = function Be() {
    var e = m();
    return !!e && (e.remove(), C([document.documentElement, document.body], [p["no-backdrop"], p["toast-shown"], p["has-column"]]), !0);
  },
      E = function E() {
    x.currentInstance.resetValidationMessage();
  },
      Pe = function Pe() {
    var e = g(),
        t = A(e, p.input),
        n = A(e, p.file),
        o = e.querySelector(".".concat(p.range, " input")),
        i = e.querySelector(".".concat(p.range, " output")),
        r = A(e, p.select),
        a = e.querySelector(".".concat(p.checkbox, " input")),
        s = A(e, p.textarea);
    t.oninput = E, n.onchange = E, r.onchange = E, a.onchange = E, s.oninput = E, o.oninput = function () {
      E(), i.value = o.value;
    }, o.onchange = function () {
      E(), i.value = o.value;
    };
  },
      xe = function xe(e) {
    return "string" == typeof e ? document.querySelector(e) : e;
  },
      Ee = function Ee(e) {
    var t = g();
    t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
  },
      Te = function Te(e) {
    "rtl" === window.getComputedStyle(e).direction && w(m(), p.rtl);
  },
      Le = function Le(e, t) {
    if (e instanceof HTMLElement) t.appendChild(e);else if ("object" == _typeof(e)) {
      var n = e,
          o = t;
      if (n.jquery) Se(o, n);else y(o, n.toString());
    } else e && y(t, e);
  },
      Se = function Se(t, n) {
    if (t.textContent = "", 0 in n) for (var _e6 = 0; _e6 in n; _e6++) {
      t.appendChild(n[_e6].cloneNode(!0));
    } else t.appendChild(n.cloneNode(!0));
  },
      Oe = function () {
    if (!ve()) {
      var e = document.createElement("div"),
          t = {
        WebkitAnimation: "webkitAnimationEnd",
        animation: "animationend"
      };

      for (var _n4 in t) {
        if (Object.prototype.hasOwnProperty.call(t, _n4) && void 0 !== e.style[_n4]) return t[_n4];
      }
    }

    return !1;
  }(),
      Me = function Me(e, t) {
    var n,
        o,
        i,
        r,
        a,
        s = ne(),
        c = d();
    (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? k : B)(s), v(s, t, "actions"), s = s, n = c, o = t, i = h(), r = f(), a = b(), je(i, "confirm", o), je(r, "deny", o), je(a, "cancel", o), function (e, t, n, o) {
      if (!o.buttonsStyling) return C([e, t, n], p.styled);
      w([e, t, n], p.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, w(e, p["default-outline"]));
      o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, w(t, p["default-outline"]));
      o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, w(n, p["default-outline"]));
    }(i, r, a, o), o.reverseButtons && (o.toast ? (s.insertBefore(a, i), s.insertBefore(r, i)) : (s.insertBefore(a, n), s.insertBefore(r, n), s.insertBefore(i, n))), y(c, t.loaderHtml), v(c, t, "loader");
  };

  function je(e, t, n) {
    he(e, n["show".concat(q(t), "Button")], "inline-block"), y(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = p[t], v(e, n, "".concat(t, "Button")), w(e, n["".concat(t, "ButtonClass")]);
  }

  var He = function He(e, t) {
    var n,
        o,
        i = m();
    i && (o = i, "string" == typeof (n = t.backdrop) ? o.style.background = n : n || w([document.documentElement, document.body], p["no-backdrop"]), o = i, (n = t.position) in p ? w(o, p[n]) : (r('The "position" parameter is not valid, defaulting to "center"'), w(o, p.center)), n = i, (o = t.grow) && "string" == typeof o && (o = "grow-".concat(o)) in p && w(n, p[o]), v(i, t, "container"));
  };

  var T = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var Ie = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
      De = function De(e, a) {
    var s = g();
    var t,
        e = T.innerParams.get(e);
    var c = !e || a.input !== e.input;
    Ie.forEach(function (e) {
      var t = A(s, p[e]);
      {
        var n = e,
            o = a.inputAttributes;

        var _i = de(g(), n);

        if (_i) {
          qe(_i);

          for (var _r in o) {
            _i.setAttribute(_r, o[_r]);
          }
        }
      }
      t.className = p[e], c && B(t);
    }), a.input && (c && function (e) {
      if (!L[e.input]) return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
      var t = Re(e.input),
          n = L[e.input](t, e);
      k(t), setTimeout(function () {
        pe(n);
      });
    }(a), e = a, t = Re(e.input), "object" == _typeof(e.customClass) && w(t, e.customClass.input));
  },
      qe = function qe(t) {
    for (var _e7 = 0; _e7 < t.attributes.length; _e7++) {
      var n = t.attributes[_e7].name;
      ["type", "value", "style"].includes(n) || t.removeAttribute(n);
    }
  },
      Ve = function Ve(e, t) {
    e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder);
  },
      Ne = function Ne(e, t, n) {
    if (n.inputLabel) {
      e.id = p.input;

      var _i2 = document.createElement("label");

      var o = p["input-label"];
      _i2.setAttribute("for", e.id), _i2.className = o, "object" == _typeof(n.customClass) && w(_i2, n.customClass.inputLabel), _i2.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", _i2);
    }
  },
      Re = function Re(e) {
    return A(g(), p[e] || p.input);
  },
      Fe = function Fe(e, t) {
    ["string", "number"].includes(_typeof(t)) ? e.value = "".concat(t) : U(t) || r('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(t), '"'));
  },
      L = {},
      Ue = (L.text = L.email = L.password = L.number = L.tel = L.url = function (e, t) {
    return Fe(e, t.inputValue), Ne(e, e, t), Ve(e, t), e.type = t.input, e;
  }, L.file = function (e, t) {
    return Ne(e, e, t), Ve(e, t), e;
  }, L.range = function (e, t) {
    var n = e.querySelector("input");
    var o = e.querySelector("output");
    return Fe(n, t.inputValue), n.type = t.input, Fe(o, t.inputValue), Ne(n, e, t), e;
  }, L.select = function (e, t) {
    if (e.textContent = "", t.inputPlaceholder) {
      var _n5 = document.createElement("option");

      y(_n5, t.inputPlaceholder), _n5.value = "", _n5.disabled = !0, _n5.selected = !0, e.appendChild(_n5);
    }

    return Ne(e, e, t), e;
  }, L.radio = function (e) {
    return e.textContent = "", e;
  }, L.checkbox = function (e, t) {
    var n = de(g(), "checkbox");
    n.value = "1", n.id = p.checkbox, n.checked = Boolean(t.inputValue);
    e = e.querySelector("span");
    return y(e, t.inputPlaceholder), n;
  }, L.textarea = function (n, e) {
    Fe(n, e.inputValue), Ve(n, e), Ne(n, n, e);
    return setTimeout(function () {
      if ("MutationObserver" in window) {
        var _t2 = parseInt(window.getComputedStyle(g()).width);

        new MutationObserver(function () {
          var e = n.offsetWidth + (e = n, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
          e > _t2 ? g().style.width = "".concat(e, "px") : g().style.width = null;
        }).observe(n, {
          attributes: !0,
          attributeFilter: ["style"]
        });
      }
    }), n;
  }, function (e, t) {
    var n = G();
    v(n, t, "htmlContainer"), t.html ? (Le(t.html, n), k(n, "block")) : t.text ? (n.textContent = t.text, k(n, "block")) : B(n), De(e, t);
  }),
      We = function We(e, t) {
    var n = oe();
    he(n, t.footer), t.footer && Le(t.footer, n), v(n, t, "footer");
  },
      ze = function ze(e, t) {
    var n = re();
    y(n, t.closeButtonHtml), v(n, t, "closeButton"), he(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
  },
      Ke = function Ke(e, t) {
    var e = T.innerParams.get(e),
        n = $();
    e && t.icon === e.icon ? ($e(n, t), _e(n, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(o).indexOf(t.icon) ? (l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), B(n)) : (k(n), $e(n, t), _e(n, t), w(n, t.showClass.icon)) : B(n);
  },
      _e = function _e(e, t) {
    for (var _n6 in o) {
      t.icon !== _n6 && C(e, o[_n6]);
    }

    w(e, o[t.icon]), Je(e, t), Ye(), v(e, t, "icon");
  },
      Ye = function Ye() {
    var e = g();
    var t = window.getComputedStyle(e).getPropertyValue("background-color");
    var n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");

    for (var _e8 = 0; _e8 < n.length; _e8++) {
      n[_e8].style.backgroundColor = t;
    }
  },
      Ze = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
      Xe = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
      $e = function $e(e, t) {
    var n = e.innerHTML,
        o;
    var i;
    t.iconHtml ? o = Ge(t.iconHtml) : "success" === t.icon ? (o = Ze, n = n.replace(/ style=".*?"/g, "")) : o = "error" === t.icon ? Xe : (i = {
      question: "?",
      warning: "!",
      info: "i"
    }, Ge(i[t.icon])), n.trim() !== o.trim() && y(e, o);
  },
      Je = function Je(e, t) {
    if (t.iconColor) {
      e.style.color = t.iconColor, e.style.borderColor = t.iconColor;

      for (var _i3 = 0, _arr = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; _i3 < _arr.length; _i3++) {
        var _n7 = _arr[_i3];
        ge(e, _n7, "backgroundColor", t.iconColor);
      }

      ge(e, ".swal2-success-ring", "borderColor", t.iconColor);
    }
  },
      Ge = function Ge(e) {
    return '<div class="'.concat(p["icon-content"], '">').concat(e, "</div>");
  },
      Qe = function Qe(e, t) {
    var n = Q();
    if (!t.imageUrl) return B(n);
    k(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), c(n, "width", t.imageWidth), c(n, "height", t.imageHeight), n.className = p.image, v(n, t, "image");
  },
      et = function et(e, n) {
    var o = ee();
    if (!n.progressSteps || 0 === n.progressSteps.length) return B(o);
    k(o), o.textContent = "", n.currentProgressStep >= n.progressSteps.length && r("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), n.progressSteps.forEach(function (e, t) {
      var e = function (e) {
        var t = document.createElement("li");
        return w(t, p["progress-step"]), y(t, e), t;
      }(e);

      o.appendChild(e), t === n.currentProgressStep && w(e, p["active-progress-step"]), t !== n.progressSteps.length - 1 && (e = function (e) {
        var t = document.createElement("li");
        if (w(t, p["progress-step-line"]), e.progressStepsDistance) c(t, "width", e.progressStepsDistance);
        return t;
      }(n), o.appendChild(e));
    });
  },
      tt = function tt(e, t) {
    var n = J();
    he(n, t.title || t.titleText, "block"), t.title && Le(t.title, n), t.titleText && (n.innerText = t.titleText), v(n, t, "title");
  },
      nt = function nt(e, t) {
    var n = m();
    var o = g();
    t.toast ? (c(n, "width", t.width), o.style.width = "100%", o.insertBefore(d(), $())) : c(o, "width", t.width), c(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), B(te());
    n = o;
    (n.className = "".concat(p.popup, " ").concat(P(n) ? t.showClass.popup : ""), t.toast) ? (w([document.documentElement, document.body], p["toast-shown"]), w(n, p.toast)) : w(n, p.modal);
    v(n, t, "popup"), "string" == typeof t.customClass && w(n, t.customClass);
    t.icon && w(n, p["icon-".concat(t.icon)]);
  },
      ot = function ot(e, t) {
    nt(e, t), He(e, t), et(e, t), Ke(e, t), Qe(e, t), tt(e, t), ze(e, t), Ue(e, t), Me(e, t), We(e, t), "function" == typeof t.didRender && t.didRender(g());
  },
      S = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer"
  }),
      it = function it() {
    var e = Array.from(document.body.children);
    e.forEach(function (e) {
      e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"));
    });
  },
      rt = function rt() {
    var e = Array.from(document.body.children);
    e.forEach(function (e) {
      e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden");
    });
  },
      at = ["swal-title", "swal-html", "swal-footer"],
      st = function st(e) {
    var n = {},
        t = Array.from(e.querySelectorAll("swal-param"));
    return t.forEach(function (e) {
      O(e, ["name", "value"]);
      var t = e.getAttribute("name"),
          e = e.getAttribute("value");
      "boolean" == typeof i[t] && "false" === e && (n[t] = !1), "object" == _typeof(i[t]) && (n[t] = JSON.parse(e));
    }), n;
  },
      ct = function ct(e) {
    var n = {},
        t = Array.from(e.querySelectorAll("swal-button"));
    return t.forEach(function (e) {
      O(e, ["type", "color", "aria-label"]);
      var t = e.getAttribute("type");
      n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(q(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"));
    }), n;
  },
      lt = function lt(e) {
    var t = {},
        n = e.querySelector("swal-image");
    return n && (O(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
  },
      ut = function ut(e) {
    var t = {},
        n = e.querySelector("swal-icon");
    return n && (O(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
  },
      dt = function dt(e) {
    var n = {},
        t = e.querySelector("swal-input"),
        o = (t && (O(t, ["type", "label", "placeholder", "value"]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value"))), Array.from(e.querySelectorAll("swal-input-option")));
    return o.length && (n.inputOptions = {}, o.forEach(function (e) {
      O(e, ["value"]);
      var t = e.getAttribute("value"),
          e = e.innerHTML;
      n.inputOptions[t] = e;
    })), n;
  },
      pt = function pt(e, t) {
    var n = {};

    for (var _o2 in t) {
      var _i4 = t[_o2],
          _r2 = e.querySelector(_i4);

      _r2 && (O(_r2, []), n[_i4.replace(/^swal-/, "")] = _r2.innerHTML.trim());
    }

    return n;
  },
      mt = function mt(e) {
    var t = at.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
    Array.from(e.children).forEach(function (e) {
      e = e.tagName.toLowerCase();
      -1 === t.indexOf(e) && r("Unrecognized element <".concat(e, ">"));
    });
  },
      O = function O(t, n) {
    Array.from(t.attributes).forEach(function (e) {
      -1 === n.indexOf(e.name) && r(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")]);
    });
  };

  var gt = {
    email: function email(e, t) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address");
    },
    url: function url(e, t) {
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL");
    }
  };

  function ht(e) {
    (t = e).inputValidator || Object.keys(gt).forEach(function (e) {
      t.input === e && (t.inputValidator = gt[e]);
    }), e.showLoaderOnConfirm && !e.preConfirm && r("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (r('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />"));
    var t,
        n = e,
        e = Be();
    if (ve()) l("SweetAlert2 requires document to initialize");else {
      var _o3 = document.createElement("div"),
          _i5 = (_o3.className = p.container, e && w(_o3, p["no-transition"]), y(_o3, ke), xe(n.target));

      _i5.appendChild(_o3), Ee(n), Te(_i5), Pe();
    }
  }

  var ft =
  /*#__PURE__*/
  function () {
    function ft(e, t) {
      _classCallCheck(this, ft);

      this.callback = e, this.remaining = t, this.running = !1, this.start();
    }

    _createClass(ft, [{
      key: "start",
      value: function start() {
        return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(e) {
        var t = this.running;
        return t && this.stop(), this.remaining += e, t && this.start(), this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return ft;
  }();

  var bt = function bt() {
    null === a.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (a.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(a.previousBodyPadding + function () {
      var e = document.createElement("div");
      e.className = p["scrollbar-measure"], document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }(), "px"));
  },
      yt = function yt() {
    null !== a.previousBodyPadding && (document.body.style.paddingRight = "".concat(a.previousBodyPadding, "px"), a.previousBodyPadding = null);
  },
      vt = function vt() {
    if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !s(document.body, p.iosfix)) {
      var e,
          t = document.body.scrollTop;
      document.body.style.top = "".concat(-1 * t, "px"), w(document.body, p.iosfix);
      {
        var _n8 = m();

        var _t3;

        _n8.ontouchstart = function (e) {
          _t3 = wt(e);
        }, _n8.ontouchmove = function (e) {
          _t3 && (e.preventDefault(), e.stopPropagation());
        };
      }
      {
        var _o4 = navigator.userAgent,
            _i6 = !!_o4.match(/iPad/i) || !!_o4.match(/iPhone/i),
            _r3 = !!_o4.match(/WebKit/i),
            _a = _i6 && _r3 && !_o4.match(/CriOS/i);

        _a && (e = 44, g().scrollHeight > window.innerHeight - 44 && (m().style.paddingBottom = "".concat(44, "px")));
      }
    }
  },
      wt = function wt(e) {
    var t,
        n = e.target,
        o = m();
    return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (t = e).touches && 1 < t.touches.length) && (n === o || !(be(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || be(G()) && G().contains(n)));
  },
      Ct = function Ct() {
    var e;
    s(document.body, p.iosfix) && (e = parseInt(document.body.style.top, 10), C(document.body, p.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e);
  },
      At = 10,
      kt = function kt(e) {
    var t = g();

    if (e.target === t) {
      var _n9 = m();

      t.removeEventListener(Oe, kt), _n9.style.overflowY = "auto";
    }
  },
      Bt = function Bt(e, t) {
    Oe && ye(t) ? (e.style.overflowY = "hidden", t.addEventListener(Oe, kt)) : e.style.overflowY = "auto";
  },
      Pt = function Pt(e, t, n) {
    vt(), t && "hidden" !== n && bt(), setTimeout(function () {
      e.scrollTop = 0;
    });
  },
      xt = function xt(e, t, n) {
    w(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), k(t, "grid"), setTimeout(function () {
      w(t, n.showClass.popup), t.style.removeProperty("opacity");
    }, At), w([document.documentElement, document.body], p.shown), n.heightAuto && n.backdrop && !n.toast && w([document.documentElement, document.body], p["height-auto"]);
  },
      M = function M(e) {
    var t = g();
    t || new An(), t = g();
    var n = d();
    if (ce()) B($());else {
      var o = t;

      var _i7 = ne(),
          _r4 = d();

      !e && P(h()) && (e = h());
      k(_i7), e && (B(e), _r4.setAttribute("data-button-to-replace", e.className));
      _r4.parentNode.insertBefore(_r4, e), w([o, _i7], p.loading);
    }
    k(n), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus();
  },
      Et = function Et(t, n) {
    var o = g(),
        i = function i(e) {
      return Lt[n.input](o, St(e), n);
    };

    F(n.inputOptions) || U(n.inputOptions) ? (M(h()), u(n.inputOptions).then(function (e) {
      t.hideLoading(), i(e);
    })) : "object" == _typeof(n.inputOptions) ? i(n.inputOptions) : l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(n.inputOptions)));
  },
      Tt = function Tt(t, n) {
    var o = t.getInput();
    B(o), u(n.inputValue).then(function (e) {
      o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), k(o), o.focus(), t.hideLoading();
    })["catch"](function (e) {
      l("Error in inputValue promise: ".concat(e)), o.value = "", k(o), o.focus(), t.hideLoading();
    });
  },
      Lt = {
    select: function select(e, t, i) {
      var r = A(e, p.select),
          a = function a(e, t, n) {
        var o = document.createElement("option");
        o.value = n, y(o, t), o.selected = Ot(n, i.inputValue), e.appendChild(o);
      };

      t.forEach(function (e) {
        var t = e[0];
        var n = e[1];

        if (Array.isArray(n)) {
          var _o5 = document.createElement("optgroup");

          _o5.label = t, _o5.disabled = !1, r.appendChild(_o5), n.forEach(function (e) {
            return a(_o5, e[1], e[0]);
          });
        } else a(r, n, t);
      }), r.focus();
    },
    radio: function radio(e, t, r) {
      var a = A(e, p.radio),
          n = (t.forEach(function (e) {
        var t = e[0],
            e = e[1];
        var n = document.createElement("input"),
            o = document.createElement("label"),
            i = (n.type = "radio", n.name = p.radio, n.value = t, Ot(t, r.inputValue) && (n.checked = !0), document.createElement("span"));
        y(i, e), i.className = p.label, o.appendChild(n), o.appendChild(i), a.appendChild(o);
      }), a.querySelectorAll("input"));
      n.length && n[0].focus();
    }
  },
      St = function St(n) {
    var o = [];
    return "undefined" != typeof Map && n instanceof Map ? n.forEach(function (e, t) {
      var n = e;
      "object" == _typeof(n) && (n = St(n)), o.push([t, n]);
    }) : Object.keys(n).forEach(function (e) {
      var t = n[e];
      "object" == _typeof(t) && (t = St(t)), o.push([e, t]);
    }), o;
  },
      Ot = function Ot(e, t) {
    return t && t.toString() === e.toString();
  };

  function Mt() {
    var e,
        t = T.innerParams.get(this);

    if (t) {
      var _n10 = T.domCache.get(this);

      B(_n10.loader), ce() ? t.icon && k($()) : (t = _n10, (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? k(e[0], "inline-block") : fe() && B(t.actions)), C([_n10.popup, _n10.actions], p.loading), _n10.popup.removeAttribute("aria-busy"), _n10.popup.removeAttribute("data-loading"), _n10.confirmButton.disabled = !1, _n10.denyButton.disabled = !1, _n10.cancelButton.disabled = !1;
    }
  }

  var jt = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  var Ht = function Ht() {
    return h() && h().click();
  };

  var It = function It(e) {
    e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
      capture: e.keydownListenerCapture
    }), e.keydownHandlerAdded = !1);
  },
      Dt = function Dt(e, t, n) {
    var o = ae();
    if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
    g().focus();
  },
      qt = ["ArrowRight", "ArrowDown"],
      Vt = ["ArrowLeft", "ArrowUp"],
      Nt = function Nt(e, n, t) {
    var o = T.innerParams.get(e);
    if (o && !n.isComposing && 229 !== n.keyCode) if (o.stopKeydownPropagation && n.stopPropagation(), "Enter" === n.key) e = e, s = n, i = o, R(i.allowEnterKey) && s.target && e.getInput() && s.target instanceof HTMLElement && s.target.outerHTML === e.getInput().outerHTML && (["textarea", "file"].includes(i.input) || (Ht(), s.preventDefault()));else if ("Tab" === n.key) {
      e = n;
      var i = o;
      var r = e.target,
          a = ae();

      var _t4 = -1;

      for (var _e9 = 0; _e9 < a.length; _e9++) {
        if (r === a[_e9]) {
          _t4 = _e9;
          break;
        }
      }

      e.shiftKey ? Dt(i, _t4, -1) : Dt(i, _t4, 1);
      e.stopPropagation(), e.preventDefault();
    } else if ([].concat(qt, Vt).includes(n.key)) {
      var s = n.key;

      var _l = h(),
          _u = f(),
          _d = b();

      if (!(document.activeElement instanceof HTMLElement) || [_l, _u, _d].includes(document.activeElement)) {
        var c = qt.includes(s) ? "nextElementSibling" : "previousElementSibling";
        var _t5 = document.activeElement;

        for (var _e10 = 0; _e10 < ne().children.length; _e10++) {
          if (!(_t5 = _t5[c])) return;
          if (_t5 instanceof HTMLButtonElement && P(_t5)) break;
        }

        _t5 instanceof HTMLButtonElement && _t5.focus();
      }
    } else if ("Escape" === n.key) {
      e = n, n = o, o = t;

      if (R(n.allowEscapeKey)) {
        e.preventDefault();
        o(S.esc);
      }
    }
  };

  function Rt(e, t, n, o) {
    ce() ? zt(e, o) : (Ae(n).then(function () {
      return zt(e, o);
    }), It(x)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), se() && (yt(), Ct(), rt()), C([document.documentElement, document.body], [p.shown, p["height-auto"], p["no-backdrop"], p["toast-shown"]]);
  }

  function Ft(e) {
    e = void 0 !== (n = e) ? Object.assign({
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !1
    }, n) : {
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !0
    };
    var t = jt.swalPromiseResolve.get(this);

    var n = function (e) {
      var t = g();
      if (!t) return false;
      var n = T.innerParams.get(e);
      if (!n || s(t, n.hideClass.popup)) return false;
      C(t, n.showClass.popup), w(t, n.hideClass.popup);
      var o = m();
      return C(o, n.showClass.backdrop), w(o, n.hideClass.backdrop), Wt(e, t, n), true;
    }(this);

    this.isAwaitingPromise() ? e.isDismissed || (Ut(this), t(e)) : n && t(e);
  }

  var Ut = function Ut(e) {
    e.isAwaitingPromise() && (T.awaitingPromise["delete"](e), T.innerParams.get(e) || e._destroy());
  },
      Wt = function Wt(e, t, n) {
    var o,
        i,
        r,
        a = m(),
        s = Oe && ye(t);
    "function" == typeof n.willClose && n.willClose(t), s ? (s = e, o = t, t = a, i = n.returnFocus, r = n.didClose, x.swalCloseEventFinishedCallback = Rt.bind(null, s, t, i, r), o.addEventListener(Oe, function (e) {
      e.target === o && (x.swalCloseEventFinishedCallback(), delete x.swalCloseEventFinishedCallback);
    })) : Rt(e, a, n.returnFocus, n.didClose);
  },
      zt = function zt(e, t) {
    setTimeout(function () {
      "function" == typeof t && t.bind(e.params)(), e._destroy();
    });
  };

  function Kt(e, t, n) {
    var o = T.domCache.get(e);
    t.forEach(function (e) {
      o[e].disabled = n;
    });
  }

  function _t(e, t) {
    if (!e) return !1;

    if ("radio" === e.type) {
      var _n11 = e.parentNode.parentNode,
          _o6 = _n11.querySelectorAll("input");

      for (var _e11 = 0; _e11 < _o6.length; _e11++) {
        _o6[_e11].disabled = t;
      }
    } else e.disabled = t;
  }

  var Yt = function Yt(e) {
    e.isAwaitingPromise() ? (Zt(T, e), T.awaitingPromise.set(e, !0)) : (Zt(jt, e), Zt(T, e));
  },
      Zt = function Zt(e, t) {
    for (var _n12 in e) {
      e[_n12]["delete"](t);
    }
  };

  e = Object.freeze({
    hideLoading: Mt,
    disableLoading: Mt,
    getInput: function getInput(e) {
      var t = T.innerParams.get(e || this);
      return (e = T.domCache.get(e || this)) ? de(e.popup, t.input) : null;
    },
    close: Ft,
    isAwaitingPromise: function isAwaitingPromise() {
      return !!T.awaitingPromise.get(this);
    },
    rejectPromise: function rejectPromise(e) {
      var t = jt.swalPromiseReject.get(this);
      Ut(this), t && t(e);
    },
    handleAwaitingPromise: Ut,
    closePopup: Ft,
    closeModal: Ft,
    closeToast: Ft,
    enableButtons: function enableButtons() {
      Kt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    },
    disableButtons: function disableButtons() {
      Kt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    },
    enableInput: function enableInput() {
      return _t(this.getInput(), !1);
    },
    disableInput: function disableInput() {
      return _t(this.getInput(), !0);
    },
    showValidationMessage: function showValidationMessage(e) {
      var t = T.domCache.get(this);
      var n = T.innerParams.get(this);
      y(t.validationMessage, e), t.validationMessage.className = p["validation-message"], n.customClass && n.customClass.validationMessage && w(t.validationMessage, n.customClass.validationMessage), k(t.validationMessage);
      var o = this.getInput();
      o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", p["validation-message"]), pe(o), w(o, p.inputerror));
    },
    resetValidationMessage: function resetValidationMessage() {
      var e = T.domCache.get(this);
      e.validationMessage && B(e.validationMessage);
      var t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), C(t, p.inputerror));
    },
    getProgressSteps: function getProgressSteps() {
      return T.domCache.get(this).progressSteps;
    },
    update: function update(e) {
      var t = g(),
          n = T.innerParams.get(this);
      if (!t || s(t, n.hideClass.popup)) return r("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      t = function (t) {
        var n = {};
        return Object.keys(t).forEach(function (e) {
          if (Y(e)) n[e] = t[e];else r("Invalid parameter to update: ".concat(e));
        }), n;
      }(e), n = Object.assign({}, n, t), ot(this, n), T.innerParams.set(this, n), Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: !1,
          enumerable: !0
        }
      });
    },
    _destroy: function _destroy() {
      var e = T.domCache.get(this);
      var t = T.innerParams.get(this);
      t ? (e.popup && x.swalCloseEventFinishedCallback && (x.swalCloseEventFinishedCallback(), delete x.swalCloseEventFinishedCallback), "function" == typeof t.didDestroy && t.didDestroy(), e = this, Yt(e), delete e.params, delete x.keydownHandler, delete x.keydownTarget, delete x.currentInstance) : Yt(this);
    }
  });

  var Xt = function Xt(e, t) {
    var n = T.innerParams.get(e);

    if (n.input) {
      var o = function (e, t) {
        var n = e.getInput();
        if (!n) return null;

        switch (t.input) {
          case "checkbox":
            return n.checked ? 1 : 0;

          case "radio":
            return (o = n).checked ? o.value : null;

          case "file":
            return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;

          default:
            return t.inputAutoTrim ? n.value.trim() : n.value;
        }

        var o;
      }(e, n);

      if (n.inputValidator) {
        var i = e;
        var r = o;
        var a = t;

        var _s = T.innerParams.get(i),
            _c = (i.disableInput(), Promise.resolve().then(function () {
          return u(_s.inputValidator(r, _s.validationMessage));
        }));

        _c.then(function (e) {
          i.enableButtons(), i.enableInput(), e ? i.showValidationMessage(e) : ("deny" === a ? $t : Qt)(i, r);
        });
      } else e.getInput().checkValidity() ? ("deny" === t ? $t : Qt)(e, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    } else l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(q(t)));
  },
      $t = function $t(t, n) {
    var e = T.innerParams.get(t || void 0);

    if (e.showLoaderOnDeny && M(f()), e.preDeny) {
      T.awaitingPromise.set(t || void 0, !0);

      var _o7 = Promise.resolve().then(function () {
        return u(e.preDeny(n, e.validationMessage));
      });

      _o7.then(function (e) {
        !1 === e ? (t.hideLoading(), Ut(t)) : t.close({
          isDenied: !0,
          value: void 0 === e ? n : e
        });
      })["catch"](function (e) {
        return Gt(t || void 0, e);
      });
    } else t.close({
      isDenied: !0,
      value: n
    });
  },
      Jt = function Jt(e, t) {
    e.close({
      isConfirmed: !0,
      value: t
    });
  },
      Gt = function Gt(e, t) {
    e.rejectPromise(t);
  },
      Qt = function Qt(t, n) {
    var e = T.innerParams.get(t || void 0);

    if (e.showLoaderOnConfirm && M(), e.preConfirm) {
      t.resetValidationMessage(), T.awaitingPromise.set(t || void 0, !0);

      var _o8 = Promise.resolve().then(function () {
        return u(e.preConfirm(n, e.validationMessage));
      });

      _o8.then(function (e) {
        P(te()) || !1 === e ? (t.hideLoading(), Ut(t)) : Jt(t, void 0 === e ? n : e);
      })["catch"](function (e) {
        return Gt(t || void 0, e);
      });
    } else Jt(t, n);
  },
      en = function en(n, e, o) {
    e.popup.onclick = function () {
      var e,
          t = T.innerParams.get(n);
      t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o(S.close);
    };
  };

  var tn = !1;

  var nn = function nn(t) {
    t.popup.onmousedown = function () {
      t.container.onmouseup = function (e) {
        t.container.onmouseup = void 0, e.target === t.container && (tn = !0);
      };
    };
  },
      on = function on(t) {
    t.container.onmousedown = function () {
      t.popup.onmouseup = function (e) {
        t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (tn = !0);
      };
    };
  },
      rn = function rn(n, o, i) {
    o.container.onclick = function (e) {
      var t = T.innerParams.get(n);
      tn ? tn = !1 : e.target === o.container && R(t.allowOutsideClick) && i(S.backdrop);
    };
  },
      an = function an(e) {
    return "object" == _typeof(e) && e.jquery;
  },
      sn = function sn(e) {
    return e instanceof Element || an(e);
  };

  var cn = function cn() {
    if (x.timeout) {
      {
        var _n13 = ie();

        var e = parseInt(window.getComputedStyle(_n13).width),
            t = (_n13.style.removeProperty("transition"), _n13.style.width = "100%", parseInt(window.getComputedStyle(_n13).width)),
            e = e / t * 100;
        _n13.style.removeProperty("transition"), _n13.style.width = "".concat(e, "%");
      }
      return x.timeout.stop();
    }
  },
      ln = function ln() {
    var e;
    if (x.timeout) return e = x.timeout.start(), le(e), e;
  };

  var un = !1;
  var dn = {};

  var pn = function pn(t) {
    for (var _e12 = t.target; _e12 && _e12 !== document; _e12 = _e12.parentNode) {
      for (var _o9 in dn) {
        var n = _e12.getAttribute(_o9);

        if (n) return void dn[_o9].fire({
          template: n
        });
      }
    }
  };

  var mn = Object.freeze({
    isValidParameter: _,
    isUpdatableParameter: Y,
    isDeprecatedParameter: Z,
    argsToParams: function argsToParams(n) {
      var o = {};
      return "object" != _typeof(n[0]) || sn(n[0]) ? ["title", "html", "icon"].forEach(function (e, t) {
        t = n[t];
        "string" == typeof t || sn(t) ? o[e] = t : void 0 !== t && l("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(_typeof(t)));
      }) : Object.assign(o, n[0]), o;
    },
    isVisible: function isVisible() {
      return P(g());
    },
    clickConfirm: Ht,
    clickDeny: function clickDeny() {
      return f() && f().click();
    },
    clickCancel: function clickCancel() {
      return b() && b().click();
    },
    getContainer: m,
    getPopup: g,
    getTitle: J,
    getHtmlContainer: G,
    getImage: Q,
    getIcon: $,
    getInputLabel: function getInputLabel() {
      return n(p["input-label"]);
    },
    getCloseButton: re,
    getActions: ne,
    getConfirmButton: h,
    getDenyButton: f,
    getCancelButton: b,
    getLoader: d,
    getFooter: oe,
    getTimerProgressBar: ie,
    getFocusableElements: ae,
    getValidationMessage: te,
    isLoading: function isLoading() {
      return g().hasAttribute("data-loading");
    },
    fire: function fire() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }

      return _construct(this, t);
    },
    mixin: function mixin(n) {
      var e =
      /*#__PURE__*/
      function (_this) {
        _inherits(e, _this);

        function e() {
          _classCallCheck(this, e);

          return _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments));
        }

        _createClass(e, [{
          key: "_main",
          value: function _main(e, t) {
            return _get(_getPrototypeOf(e.prototype), "_main", this).call(this, e, Object.assign({}, n, t));
          }
        }]);

        return e;
      }(this);

      return e;
    },
    showLoading: M,
    enableLoading: M,
    getTimerLeft: function getTimerLeft() {
      return x.timeout && x.timeout.getTimerLeft();
    },
    stopTimer: cn,
    resumeTimer: ln,
    toggleTimer: function toggleTimer() {
      var e = x.timeout;
      return e && (e.running ? cn : ln)();
    },
    increaseTimer: function increaseTimer(e) {
      if (x.timeout) return e = x.timeout.increase(e), le(e, !0), e;
    },
    isTimerRunning: function isTimerRunning() {
      return x.timeout && x.timeout.isRunning();
    },
    bindClickHandler: function bindClickHandler() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
      dn[e] = this, un || (document.body.addEventListener("click", pn), un = !0);
    }
  });
  var j;

  var H =
  /*#__PURE__*/
  function () {
    function H() {
      _classCallCheck(this, H);

      if ("undefined" != typeof window) {
        j = this;

        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var o = Object.freeze(this.constructor.argsToParams(t)),
            o = (Object.defineProperties(this, {
          params: {
            value: o,
            writable: !1,
            enumerable: !0,
            configurable: !0
          }
        }), j._main(j.params));
        T.promise.set(this, o);
      }
    }

    _createClass(H, [{
      key: "_main",
      value: function _main(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            e = (X(Object.assign({}, t, e)), x.currentInstance && (x.currentInstance._destroy(), se() && rt()), x.currentInstance = j, hn(e, t)),
            t = (ht(e), Object.freeze(e), x.timeout && (x.timeout.stop(), delete x.timeout), clearTimeout(x.restoreFocusTimeout), fn(j));
        return ot(j, e), T.innerParams.set(j, e), gn(j, t, e);
      }
    }, {
      key: "then",
      value: function then(e) {
        var t = T.promise.get(this);
        return t.then(e);
      }
    }, {
      key: "finally",
      value: function _finally(e) {
        var t = T.promise.get(this);
        return t["finally"](e);
      }
    }]);

    return H;
  }();

  var gn = function gn(l, u, d) {
    return new Promise(function (e, t) {
      var n = function n(e) {
        l.closePopup({
          isDismissed: !0,
          dismiss: e
        });
      };

      var o, i, r;
      jt.swalPromiseResolve.set(l, e), jt.swalPromiseReject.set(l, t), u.confirmButton.onclick = function () {
        var e = l,
            t = T.innerParams.get(e);
        e.disableButtons(), t.input ? Xt(e, "confirm") : Qt(e, !0);
      }, u.denyButton.onclick = function () {
        var e = l,
            t = T.innerParams.get(e);
        e.disableButtons(), t.returnInputValueOnDeny ? Xt(e, "deny") : $t(e, !1);
      }, u.cancelButton.onclick = function () {
        var e = l,
            t = n;
        e.disableButtons(), t(S.cancel);
      }, u.closeButton.onclick = function () {
        return n(S.close);
      }, e = l, t = u, r = n, T.innerParams.get(e).toast ? en(e, t, r) : (nn(t), on(t), rn(e, t, r)), o = l, e = x, t = d, i = n, It(e), t.toast || (e.keydownHandler = function (e) {
        return Nt(o, e, i);
      }, e.keydownTarget = t.keydownListenerCapture ? window : g(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = !0), r = l, "select" === (t = d).input || "radio" === t.input ? Et(r, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (F(t.inputValue) || U(t.inputValue)) && (M(h()), Tt(r, t));
      {
        var a = d;

        var _s2 = m(),
            _c2 = g();

        "function" == typeof a.willOpen && a.willOpen(_c2), e = window.getComputedStyle(document.body).overflowY, xt(_s2, _c2, a), setTimeout(function () {
          Bt(_s2, _c2);
        }, At), se() && (Pt(_s2, a.scrollbarPadding, e), it()), ce() || x.previousActiveElement || (x.previousActiveElement = document.activeElement), "function" == typeof a.didOpen && setTimeout(function () {
          return a.didOpen(_c2);
        }), C(_s2, p["no-transition"]);
      }
      bn(x, d, n), yn(u, d), setTimeout(function () {
        u.container.scrollTop = 0;
      });
    });
  },
      hn = function hn(e, t) {
    var n = function (e) {
      e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
      if (!e) return {};
      e = e.content, mt(e), e = Object.assign(st(e), ct(e), lt(e), ut(e), dt(e), pt(e, at));
      return e;
    }(e);

    var o = Object.assign({}, i, t, n, e);
    return o.showClass = Object.assign({}, i.showClass, o.showClass), o.hideClass = Object.assign({}, i.hideClass, o.hideClass), o;
  },
      fn = function fn(e) {
    var t = {
      popup: g(),
      container: m(),
      actions: ne(),
      confirmButton: h(),
      denyButton: f(),
      cancelButton: b(),
      loader: d(),
      closeButton: re(),
      validationMessage: te(),
      progressSteps: ee()
    };
    return T.domCache.set(e, t), t;
  },
      bn = function bn(e, t, n) {
    var o = ie();
    B(o), t.timer && (e.timeout = new ft(function () {
      n("timer"), delete e.timeout;
    }, t.timer), t.timerProgressBar && (k(o), v(o, t, "timerProgressBar"), setTimeout(function () {
      e.timeout && e.timeout.running && le(t.timer);
    })));
  },
      yn = function yn(e, t) {
    if (!t.toast) return R(t.allowEnterKey) ? void (vn(e, t) || Dt(t, -1, 1)) : wn();
  },
      vn = function vn(e, t) {
    return t.focusDeny && P(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && P(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !P(e.confirmButton)) && (e.confirmButton.focus(), !0);
  },
      wn = function wn() {
    document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
  };

  if ("undefined" != typeof window && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
    var I = document.createElement("div");
    I.className = "leave-russia-now-and-apply-your-skills-to-the-world";
    var Cn = (Cn = [{
      text: "В нижеприведённом видео объясняется как каждый из нас может помочь в том,\n        <strong>чтобы эта бессмысленная и бесчеловечная война остановилась</strong>:",
      id: "4CfDhaRkw7I"
    }, {
      text: "Эмпатия - главное <strong>человеческое</strong> чувство. Способность сопереживать. <strong>Способность поставить себя на место другого.</strong>",
      id: "s-GLAIY4DXA"
    }])[Math.floor(Math.random() * Cn.length)];
    y(I, "\n      <div>\n        Если мы не остановим войну, она придет в дом <strong>каждого из нас</strong> и её последствия будут <strong>ужасающими</strong>.\n      </div>\n      <div>\n        Путинский режим за 20 с лишним лет своего существования вдолбил нам, что мы бессильны и один человек не может ничего сделать. <strong>Это не так!</strong>\n      </div>\n      <div>\n        ".concat(Cn.text, '\n      </div>\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/').concat(Cn.id, '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      <div>\n        Нет войне!\n      </div>\n      '));
    var kn = document.createElement("button");
    kn.innerHTML = "&times;", kn.onclick = function () {
      return I.remove();
    }, I.appendChild(kn), window.addEventListener("load", function () {
      setTimeout(function () {
        document.body.appendChild(I);
      }, 1e3);
    });
  }

  Object.assign(H.prototype, e), Object.assign(H, mn), Object.keys(e).forEach(function (e) {
    H[e] = function () {
      var _j;

      if (j) return (_j = j)[e].apply(_j, arguments);
    };
  }), H.DismissReason = S, H.version = "11.4.26";
  var An = H;
  return An["default"] = An;
}), void 0 !== void 0 && (void 0).Sweetalert2 && ((void 0).swal = (void 0).sweetAlert = (void 0).Swal = (void 0).SweetAlert = (void 0).Sweetalert2);