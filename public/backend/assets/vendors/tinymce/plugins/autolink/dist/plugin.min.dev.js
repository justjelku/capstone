"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var e = function e(t) {
    return function (e) {
      return e.options.get(t);
    };
  },
      n = e("autolink_pattern"),
      o = e("link_default_target"),
      r = e("link_default_protocol"),
      i = ("string", function (t) {
    return "string" === function (t) {
      var e = _typeof(t);

      return null === t ? "null" : "object" === e && Array.isArray(t) ? "array" : "object" === e && (n = o = t, (r = String).prototype.isPrototypeOf(n) || (null === (i = o.constructor) || void 0 === i ? void 0 : i.name) === r.name) ? "string" : e;
      var n, o, r, i;
    }(t);
  });

  var s = function s(t) {
    return !function (t) {
      return null == t;
    }(t);
  },
      l = function l(t) {
    return /^[(\[{ \u00a0]$/.test(t);
  },
      a = function a(t) {
    return 3 === t.nodeType;
  },
      d = function d(t) {
    return 1 === t.nodeType;
  },
      c = function c(t, e) {
    if (e < 0 && (e = 0), a(t)) {
      var _n = t.data.length;
      e > _n && (e = _n);
    }

    return e;
  },
      f = function f(t, e, n) {
    !d(e) || e.hasChildNodes() ? t.setStart(e, c(e, n)) : t.setStartBefore(e);
  },
      g = function g(t, e, n) {
    !d(e) || e.hasChildNodes() ? t.setEnd(e, c(e, n)) : t.setEndAfter(e);
  },
      u = function u(t, e) {
    var o, i, s, d, c, u;
    var h = n(t);
    if (null !== t.dom.getParent(t.selection.getNode(), "a[href]")) return;
    var p = t.selection.getRng().cloneRange();

    if (p.startOffset < 5) {
      if (d = p.endContainer.previousSibling, !d) {
        if (!p.endContainer.firstChild || !p.endContainer.firstChild.nextSibling) return;
        d = p.endContainer.firstChild.nextSibling;
      }

      if (c = d.length, f(p, d, c), g(p, d, c), p.endOffset < 5) return;
      o = p.endOffset, i = d;
    } else {
      if (i = p.endContainer, !a(i) && i.firstChild) {
        for (; !a(i) && i.firstChild;) {
          i = i.firstChild;
        }

        a(i) && (f(p, i, 0), g(p, i, i.nodeValue.length));
      }

      o = 1 === p.endOffset ? 2 : p.endOffset - 1 - e;
    }

    var m = o;

    do {
      f(p, i, o >= 2 ? o - 2 : 0), g(p, i, o >= 1 ? o - 1 : 0), o -= 1, u = p.toString();
    } while (!l(u) && o - 2 >= 0);

    var C;
    l(p.toString()) ? (f(p, i, o), g(p, i, m), o += 1) : 0 === p.startOffset ? (f(p, i, 0), g(p, i, m)) : (f(p, i, o), g(p, i, m)), s = p.toString(), C = s.charAt(s.length - 1), /[?!,.;:]/.test(C) && g(p, i, m - 1), s = p.toString().trim();
    var k = s.match(h),
        y = r(t);

    if (k) {
      var _t = k[0];
      return v = "www.", (w = _t).length >= v.length && w.substr(0, 0 + v.length) === v ? _t = y + "://" + _t : function (t, e) {
        return -1 !== t.indexOf("@");
      }(_t) && !function (t) {
        return /^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(t);
      }(_t) && (_t = "mailto:" + _t), {
        rng: p,
        url: _t
      };
    }

    var w, v;
    return null;
  },
      h = function h(t, e) {
    var n = o(t),
        r = e.rng,
        s = e.url,
        l = t.selection.getBookmark();
    t.selection.setRng(r);
    var a = "createlink",
        d = {
      command: a,
      ui: !1,
      value: s
    };
    t.dispatch("BeforeExecCommand", d).isDefaultPrevented() || (t.getDoc().execCommand(a, !1, s), t.dispatch("ExecCommand", d), i(n) && t.dom.setAttrib(t.selection.getNode(), "target", n)), t.selection.moveToBookmark(l), t.nodeChanged();
  },
      p = function p(t) {
    var e = u(t, 0);
    s(e) && h(t, e);
  },
      m = p;

  t.add("autolink", function (t) {
    (function (t) {
      var e = t.options.register;
      e("autolink_pattern", {
        processor: "regexp",
        "default": new RegExp("^" + /(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-.~*+=!;:'%@$(),\/\w]*[-~*+=%@$()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source + "$", "i")
      }), e("link_default_target", {
        processor: "string"
      }), e("link_default_protocol", {
        processor: "string",
        "default": "https"
      });
    })(t), function (t) {
      t.on("keydown", function (e) {
        13 !== e.keyCode || e.isDefaultPrevented() || function (t) {
          var e = u(t, -1);
          s(e) && h(t, e);
        }(t);
      }), t.on("keyup", function (e) {
        32 === e.keyCode ? p(t) : (48 === e.keyCode && e.shiftKey || 221 === e.keyCode) && m(t);
      });
    }(t);
  });
}();