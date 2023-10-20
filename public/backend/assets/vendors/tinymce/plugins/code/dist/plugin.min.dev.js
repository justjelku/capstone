"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function () {
  "use strict";

  tinymce.util.Tools.resolve("tinymce.PluginManager").add("code", function (e) {
    return function (e) {
      e.addCommand("mceCodeEditor", function () {
        (function (e) {
          var o = function (e) {
            return e.getContent({
              source_view: !0
            });
          }(e);

          e.windowManager.open({
            title: "Source Code",
            size: "large",
            body: {
              type: "panel",
              items: [{
                type: "textarea",
                name: "code"
              }]
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
            initialData: {
              code: o
            },
            onSubmit: function onSubmit(o) {
              (function (e, o) {
                e.focus(), e.undoManager.transact(function () {
                  e.setContent(o);
                }), e.selection.setCursorLocation(), e.nodeChanged();
              })(e, o.getData().code), o.close();
            }
          });
        })(e);
      });
    }(e), function (e) {
      var o = function o() {
        return e.execCommand("mceCodeEditor");
      };

      e.ui.registry.addButton("code", {
        icon: "sourcecode",
        tooltip: "Source code",
        onAction: o
      }), e.ui.registry.addMenuItem("code", {
        icon: "sourcecode",
        text: "Source code",
        onAction: o
      });
    }(e), {};
  });
}();