"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("ace/mode/vhdl_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (e, t, n) {
  "use strict";

  var r = e("../lib/oop"),
      i = e("./text_highlight_rules").TextHighlightRules,
      s = function s() {
    var e = "access|after|alias|all|architecture|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|context|disconnect|downto|else|elsif|end|entity|exit|file|for|force|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|of|on|or|open|others|out|package|parameter|port|postponed|procedure|process|protected|pure|range|record|register|reject|release|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with",
        t = "bit|bit_vector|boolean|character|integer|line|natural|positive|real|register|signed|std_logic|std_logic_vector|string||text|time|unsigned",
        n = "array|constant",
        r = "abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|srasrl|xnor|xor",
        i = "true|false|null",
        s = this.createKeywordMapper({
      "keyword.operator": r,
      keyword: e,
      "constant.language": i,
      "storage.modifier": n,
      "storage.type": t
    }, "identifier", !0);
    this.$rules = {
      start: [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "string",
        regex: '".*?"'
      }, {
        token: "string",
        regex: "'.*?'"
      }, {
        token: "constant.numeric",
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: "keyword",
        regex: "\\s*(?:library|package|use)\\b"
      }, {
        token: s,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"
      }, {
        token: "punctuation.operator",
        regex: "\\'|\\:|\\,|\\;|\\."
      }, {
        token: "paren.lparen",
        regex: "[[(]"
      }, {
        token: "paren.rparen",
        regex: "[\\])]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
  };

  r.inherits(s, i), t.VHDLHighlightRules = s;
}), define("ace/mode/vhdl", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/vhdl_highlight_rules"], function (e, t, n) {
  "use strict";

  var r = e("../lib/oop"),
      i = e("./text").Mode,
      s = e("./vhdl_highlight_rules").VHDLHighlightRules,
      o = function o() {
    this.HighlightRules = s, this.$behaviour = this.$defaultBehaviour;
  };

  r.inherits(o, i), function () {
    this.lineCommentStart = "--", this.$id = "ace/mode/vhdl";
  }.call(o.prototype), t.Mode = o;
});

(function () {
  window.require(["ace/mode/vhdl"], function (m) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
      module.exports = m;
    }
  });
})();