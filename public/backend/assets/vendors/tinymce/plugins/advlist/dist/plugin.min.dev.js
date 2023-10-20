"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");

  var e = function e(t, _e, r) {
    var s = "UL" === _e ? "InsertUnorderedList" : "InsertOrderedList";
    t.execCommand(s, !1, !1 === r ? null : {
      "list-style-type": r
    });
  },
      r = function r(t) {
    return function (e) {
      return e.options.get(t);
    };
  },
      s = r("advlist_number_styles"),
      n = r("advlist_bullet_styles");

  var i = tinymce.util.Tools.resolve("tinymce.util.Tools");

  var l =
  /*#__PURE__*/
  function () {
    function l(t, e) {
      _classCallCheck(this, l);

      this.tag = t, this.value = e;
    }

    _createClass(l, [{
      key: "fold",
      value: function fold(t, e) {
        return this.tag ? e(this.value) : t();
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
      value: function map(t) {
        return this.tag ? l.some(t(this.value)) : l.none();
      }
    }, {
      key: "bind",
      value: function bind(t) {
        return this.tag ? t(this.value) : l.none();
      }
    }, {
      key: "exists",
      value: function exists(t) {
        return this.tag && t(this.value);
      }
    }, {
      key: "forall",
      value: function forall(t) {
        return !this.tag || t(this.value);
      }
    }, {
      key: "filter",
      value: function filter(t) {
        return !this.tag || t(this.value) ? this : l.none();
      }
    }, {
      key: "getOr",
      value: function getOr(t) {
        return this.tag ? this.value : t;
      }
    }, {
      key: "or",
      value: function or(t) {
        return this.tag ? this : t;
      }
    }, {
      key: "getOrThunk",
      value: function getOrThunk(t) {
        return this.tag ? this.value : t();
      }
    }, {
      key: "orThunk",
      value: function orThunk(t) {
        return this.tag ? this : t();
      }
    }, {
      key: "getOrDie",
      value: function getOrDie(t) {
        if (this.tag) return this.value;
        throw new Error(null != t ? t : "Called getOrDie on None");
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
      value: function each(t) {
        this.tag && t(this.value);
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
      value: function some(t) {
        return new l(!0, t);
      }
    }, {
      key: "none",
      value: function none() {
        return l.singletonNone;
      }
    }, {
      key: "from",
      value: function from(t) {
        return null == t ? l.none() : l.some(t);
      }
    }]);

    return l;
  }();

  l.singletonNone = new l(!1);

  var o = function o(t) {
    return t && /^(TH|TD)$/.test(t.nodeName);
  },
      a = function a(t, e) {
    return function (r) {
      var s = function s(_s) {
        r.setActive(function (t, e, r) {
          var s = function (t, e) {
            for (var _r = 0; _r < t.length; _r++) {
              if (e(t[_r])) return _r;
            }

            return -1;
          }(e.parents, o),
              n = -1 !== s ? e.parents.slice(0, s) : e.parents,
              l = i.grep(n, function (t) {
            return function (e) {
              return e && /^(OL|UL|DL)$/.test(e.nodeName) && function (t, e) {
                return t.dom.isChildOf(e, t.getBody());
              }(t, e);
            };
          }(t));

          return l.length > 0 && l[0].nodeName === r;
        }(t, _s, e));
      };

      return t.on("NodeChange", s), function () {
        return t.off("NodeChange", s);
      };
    };
  },
      u = function u(t, r, s, n, o, _u) {
    _u.length > 1 ? function (t, r, s, n, o, u) {
      t.ui.registry.addSplitButton(r, {
        tooltip: s,
        icon: "OL" === o ? "ordered-list" : "unordered-list",
        presets: "listpreview",
        columns: 3,
        fetch: function fetch(t) {
          t(i.map(u, function (t) {
            var e = "OL" === o ? "num" : "bull",
                r = "disc" === t || "decimal" === t ? "default" : t,
                s = "default" === t ? "" : t,
                n = function (t) {
              return t.replace(/\-/g, " ").replace(/\b\w/g, function (t) {
                return t.toUpperCase();
              });
            }(t);

            return {
              type: "choiceitem",
              value: s,
              icon: "list-" + e + "-" + r,
              text: n
            };
          }));
        },
        onAction: function onAction() {
          return t.execCommand(n);
        },
        onItemAction: function onItemAction(r, s) {
          e(t, o, s);
        },
        select: function select(e) {
          var r = function (t) {
            var e = t.dom.getParent(t.selection.getNode(), "ol,ul"),
                r = t.dom.getStyle(e, "listStyleType");
            return l.from(r);
          }(t);

          return r.map(function (t) {
            return e === t;
          }).getOr(!1);
        },
        onSetup: a(t, o)
      });
    }(t, r, s, n, o, _u) : function (t, e, r, s, n, i) {
      t.ui.registry.addToggleButton(e, {
        active: !1,
        tooltip: r,
        icon: "OL" === n ? "ordered-list" : "unordered-list",
        onSetup: a(t, n),
        onAction: function onAction() {
          return t.execCommand(s);
        }
      });
    }(t, r, s, n, o);
  };

  t.add("advlist", function (t) {
    t.hasPlugin("lists") ? (function (t) {
      var e = t.options.register;
      e("advlist_number_styles", {
        processor: "string[]",
        "default": "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman".split(",")
      }), e("advlist_bullet_styles", {
        processor: "string[]",
        "default": "default,circle,square".split(",")
      });
    }(t), function (t) {
      u(t, "numlist", "Numbered list", "InsertOrderedList", "OL", s(t)), u(t, "bullist", "Bullet list", "InsertUnorderedList", "UL", n(t));
    }(t), function (t) {
      t.addCommand("ApplyUnorderedListStyle", function (r, s) {
        e(t, "UL", s["list-style-type"]);
      }), t.addCommand("ApplyOrderedListStyle", function (r, s) {
        e(t, "OL", s["list-style-type"]);
      });
    }(t)) : console.error("Please use the Lists plugin together with the Advanced List plugin.");
  });
}();