"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      a = tinymce.util.Tools.resolve("tinymce.Env");

  var t = function t(e) {
    return function (a) {
      return a.options.get(e);
    };
  },
      r = t("pagebreak_separator"),
      n = t("pagebreak_split_block"),
      o = "mce-pagebreak",
      s = function s(e) {
    var t = "<img src=\"".concat(a.transparentSrc, "\" class=\"mce-pagebreak\" data-mce-resize=\"false\" data-mce-placeholder />");
    return e ? "<p>".concat(t, "</p>") : t;
  };

  e.add("pagebreak", function (e) {
    (function (e) {
      var a = e.options.register;
      a("pagebreak_separator", {
        processor: "string",
        "default": "\x3c!-- pagebreak --\x3e"
      }), a("pagebreak_split_block", {
        processor: "boolean",
        "default": !1
      });
    })(e), function (e) {
      e.addCommand("mcePageBreak", function () {
        e.insertContent(s(n(e)));
      });
    }(e), function (e) {
      var a = function a() {
        return e.execCommand("mcePageBreak");
      };

      e.ui.registry.addButton("pagebreak", {
        icon: "page-break",
        tooltip: "Page break",
        onAction: a
      }), e.ui.registry.addMenuItem("pagebreak", {
        text: "Page break",
        icon: "page-break",
        onAction: a
      });
    }(e), function (e) {
      var a = r(e),
          t = function t() {
        return n(e);
      },
          c = new RegExp(a.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function (e) {
        return "\\" + e;
      }), "gi");

      e.on("BeforeSetContent", function (e) {
        e.content = e.content.replace(c, s(t()));
      }), e.on("PreInit", function () {
        e.serializer.addNodeFilter("img", function (r) {
          var n,
              s,
              c = r.length;

          for (; c--;) {
            if (n = r[c], s = n.attr("class"), s && -1 !== s.indexOf(o)) {
              var _r = n.parent;

              if (e.schema.getBlockElements()[_r.name] && t()) {
                _r.type = 3, _r.value = a, _r.raw = !0, n.remove();
                continue;
              }

              n.type = 3, n.value = a, n.raw = !0;
            }
          }
        });
      });
    }(e), function (e) {
      e.on("ResolveName", function (a) {
        "IMG" === a.target.nodeName && e.dom.hasClass(a.target, o) && (a.name = "pagebreak");
      });
    }(e);
  });
}();