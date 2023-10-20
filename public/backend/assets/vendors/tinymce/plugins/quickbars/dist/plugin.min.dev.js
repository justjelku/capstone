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

  var t = function t(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      o = ("string", function (e) {
    return "string" === function (e) {
      var t = _typeof(e);

      return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && (o = n = e, (r = String).prototype.isPrototypeOf(o) || (null === (i = n.constructor) || void 0 === i ? void 0 : i.name) === r.name) ? "string" : t;
      var o, n, r, i;
    }(e);
  });

  var n = t("boolean"),
      r = t("function"),
      i = function i(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      s = i("quickbars_selection_toolbar"),
      a = i("quickbars_insert_toolbar"),
      l = i("quickbars_image_toolbar");

  var c = 0;
  var u = tinymce.util.Tools.resolve("tinymce.Env"),
      d = tinymce.util.Tools.resolve("tinymce.util.Delay");

  var m = function m(e) {
    e.ui.registry.addButton("quickimage", {
      icon: "image",
      tooltip: "Insert image",
      onAction: function onAction() {
        (function (e) {
          return new Promise(function (t) {
            var o = document.createElement("input");
            o.type = "file", o.accept = "image/*", o.style.position = "fixed", o.style.left = "0", o.style.top = "0", o.style.opacity = "0.001", document.body.appendChild(o), o.addEventListener("change", function (e) {
              t(Array.prototype.slice.call(e.target.files));
            });

            var n = function n(r) {
              var i = function i() {
                t([]), o.parentNode.removeChild(o);
              };

              u.os.isAndroid() && "remove" !== r.type ? d.setEditorTimeout(e, i, 0) : i(), e.off("focusin remove", n);
            };

            e.on("focusin remove", n), o.click();
          });
        })(e).then(function (t) {
          if (t.length > 0) {
            var _o = t[0];
            (function (e) {
              return new Promise(function (t) {
                var o = new FileReader();
                o.onloadend = function () {
                  t(o.result.split(",")[1]);
                }, o.readAsDataURL(e);
              });
            })(_o).then(function (t) {
              (function (e, t, o) {
                var n = e.editorUpload.blobCache,
                    r = n.create(function (e) {
                  var t = new Date().getTime(),
                      o = Math.floor(1e9 * Math.random());
                  return c++, "mceu_" + o + c + String(t);
                }(), o, t);
                n.add(r), e.insertContent(e.dom.createHTML("img", {
                  src: r.blobUri()
                }));
              })(e, t, _o);
            });
          }
        });
      }
    }), e.ui.registry.addButton("quicktable", {
      icon: "table",
      tooltip: "Insert table",
      onAction: function onAction() {
        (function (e, t, o) {
          e.execCommand("mceInsertTable", !1, {
            rows: 2,
            columns: 2
          });
        })(e);
      }
    });
  },
      g = (!1, function () {
    return false;
  });

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
        return null == e ? h.none() : h.some(e);
      }
    }]);

    return h;
  }();

  h.singletonNone = new h(!1);

  var b = function b(e, t, o, n, i) {
    return e(o, n) ? h.some(o) : r(i) && i(o) ? h.none() : t(o, n, i);
  };

  var p = function p(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      f = p,
      v = function v(e, t) {
    var o = e.dom;
    if (1 !== o.nodeType) return !1;
    {
      var _e = o;
      if (void 0 !== _e.matches) return _e.matches(t);
      if (void 0 !== _e.msMatchesSelector) return _e.msMatchesSelector(t);
      if (void 0 !== _e.webkitMatchesSelector) return _e.webkitMatchesSelector(t);
      if (void 0 !== _e.mozMatchesSelector) return _e.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    }
  };

  "undefined" != typeof window ? window : Function("return this;")();

  var y = function y(e, t, o) {
    var n = e.dom;
    var i = r(o) ? o : g;

    for (; n.parentNode;) {
      n = n.parentNode;

      var _e2 = f(n);

      if (t(_e2)) return h.some(_e2);
      if (i(_e2)) break;
    }

    return h.none();
  },
      k = function k(e, t, o) {
    return y(e, function (e) {
      return v(e, t);
    }, o);
  },
      w = function w(e) {
    var t = a(e);
    t.length > 0 && e.ui.registry.addContextToolbar("quickblock", {
      predicate: function predicate(t) {
        var o = f(t),
            n = e.schema.getTextBlockElements(),
            r = function r(t) {
          return t.dom === e.getBody();
        };

        return function (e, t, o) {
          return b(function (e, t) {
            return v(e, t);
          }, k, e, "table", o);
        }(o, 0, r).fold(function () {
          return function (t, o, r) {
            return b(function (e, t) {
              return t(e);
            }, y, t, function (t) {
              return t.dom.nodeName.toLowerCase() in n && e.dom.isEmpty(t.dom);
            }, r);
          }(o, 0, r).isSome();
        }, g);
      },
      items: t,
      position: "line",
      scope: "editor"
    });
  };

  e.add("quickbars", function (e) {
    (function (e) {
      var t = e.options.register,
          r = function r(e) {
        return function (t) {
          var r = n(t) || o(t);
          return r ? n(t) ? {
            value: t ? e : "",
            valid: r
          } : {
            value: t.trim(),
            valid: r
          } : {
            valid: !1,
            message: "Must be a boolean or string."
          };
        };
      },
          i = "bold italic | quicklink h2 h3 blockquote";

      t("quickbars_selection_toolbar", {
        processor: r(i),
        "default": i
      });
      var s = "quickimage quicktable";
      t("quickbars_insert_toolbar", {
        processor: r(s),
        "default": s
      });
      var a = "alignleft aligncenter alignright";
      t("quickbars_image_toolbar", {
        processor: r(a),
        "default": a
      });
    })(e), m(e), w(e), function (e) {
      var t = function t(e) {
        return "IMG" === e.nodeName || "FIGURE" === e.nodeName && /image/i.test(e.className);
      },
          o = l(e);

      o.length > 0 && e.ui.registry.addContextToolbar("imageselection", {
        predicate: t,
        items: o,
        position: "node"
      });
      var n = s(e);
      n.length > 0 && e.ui.registry.addContextToolbar("textselection", {
        predicate: function predicate(o) {
          return !t(o) && !e.selection.isCollapsed() && function (t) {
            return "false" !== e.dom.getContentEditableParent(t);
          }(o);
        },
        items: n,
        position: "selection",
        scope: "editor"
      });
    }(e);
  });
}();