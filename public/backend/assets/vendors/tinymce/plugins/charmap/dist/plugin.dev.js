"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var fireInsertCustomChar = function fireInsertCustomChar(editor, chr) {
    return editor.dispatch('insertCustomChar', {
      chr: chr
    });
  };

  var insertChar = function insertChar(editor, chr) {
    var evtChr = fireInsertCustomChar(editor, chr).chr;
    editor.execCommand('mceInsertContent', false, evtChr);
  };

  var hasProto = function hasProto(v, constructor, predicate) {
    var _a;

    if (predicate(v, constructor.prototype)) {
      return true;
    } else {
      return ((_a = v.constructor) === null || _a === void 0 ? void 0 : _a.name) === constructor.name;
    }
  };

  var typeOf = function typeOf(x) {
    var t = _typeof(x);

    if (x === null) {
      return 'null';
    } else if (t === 'object' && Array.isArray(x)) {
      return 'array';
    } else if (t === 'object' && hasProto(x, String, function (o, proto) {
      return proto.isPrototypeOf(o);
    })) {
      return 'string';
    } else {
      return t;
    }
  };

  var isType = function isType(type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };

  var isSimpleType = function isSimpleType(type) {
    return function (value) {
      return _typeof(value) === type;
    };
  };

  var eq = function eq(t) {
    return function (a) {
      return t === a;
    };
  };

  var isArray$1 = isType('array');
  var isNull = eq(null);

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var isFunction = isSimpleType('function');

  var constant = function constant(value) {
    return function () {
      return value;
    };
  };

  var never = constant(false);

  var Optional =
  /*#__PURE__*/
  function () {
    function Optional(tag, value) {
      _classCallCheck(this, Optional);

      this.tag = tag;
      this.value = value;
    }

    _createClass(Optional, [{
      key: "fold",
      value: function fold(onNone, onSome) {
        if (this.tag) {
          return onSome(this.value);
        } else {
          return onNone();
        }
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
      value: function map(mapper) {
        if (this.tag) {
          return Optional.some(mapper(this.value));
        } else {
          return Optional.none();
        }
      }
    }, {
      key: "bind",
      value: function bind(binder) {
        if (this.tag) {
          return binder(this.value);
        } else {
          return Optional.none();
        }
      }
    }, {
      key: "exists",
      value: function exists(predicate) {
        return this.tag && predicate(this.value);
      }
    }, {
      key: "forall",
      value: function forall(predicate) {
        return !this.tag || predicate(this.value);
      }
    }, {
      key: "filter",
      value: function filter(predicate) {
        if (!this.tag || predicate(this.value)) {
          return this;
        } else {
          return Optional.none();
        }
      }
    }, {
      key: "getOr",
      value: function getOr(replacement) {
        return this.tag ? this.value : replacement;
      }
    }, {
      key: "or",
      value: function or(replacement) {
        return this.tag ? this : replacement;
      }
    }, {
      key: "getOrThunk",
      value: function getOrThunk(thunk) {
        return this.tag ? this.value : thunk();
      }
    }, {
      key: "orThunk",
      value: function orThunk(thunk) {
        return this.tag ? this : thunk();
      }
    }, {
      key: "getOrDie",
      value: function getOrDie(message) {
        if (!this.tag) {
          throw new Error(message !== null && message !== void 0 ? message : 'Called getOrDie on None');
        } else {
          return this.value;
        }
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
      value: function each(worker) {
        if (this.tag) {
          worker(this.value);
        }
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.tag ? [this.value] : [];
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.tag ? "some(".concat(this.value, ")") : 'none()';
      }
    }], [{
      key: "some",
      value: function some(value) {
        return new Optional(true, value);
      }
    }, {
      key: "none",
      value: function none() {
        return Optional.singletonNone;
      }
    }, {
      key: "from",
      value: function from(value) {
        return isNonNullable(value) ? Optional.some(value) : Optional.none();
      }
    }]);

    return Optional;
  }();

  Optional.singletonNone = new Optional(false);
  var nativePush = Array.prototype.push;

  var map = function map(xs, f) {
    var len = xs.length;
    var r = new Array(len);

    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i);
    }

    return r;
  };

  var each = function each(xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i);
    }
  };

  var findUntil = function findUntil(xs, pred, until) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        return Optional.some(x);
      } else if (until(x, i)) {
        break;
      }
    }

    return Optional.none();
  };

  var find = function find(xs, pred) {
    return findUntil(xs, pred, never);
  };

  var flatten = function flatten(xs) {
    var r = [];

    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!isArray$1(xs[i])) {
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      }

      nativePush.apply(r, xs[i]);
    }

    return r;
  };

  var bind = function bind(xs, f) {
    return flatten(map(xs, f));
  };

  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;

    var charMapProcessor = function charMapProcessor(value) {
      return isFunction(value) || isArray$1(value);
    };

    registerOption('charmap', {
      processor: charMapProcessor
    });
    registerOption('charmap_append', {
      processor: charMapProcessor
    });
  };

  var getCharMap$1 = option('charmap');
  var getCharMapAppend = option('charmap_append');
  var isArray = global.isArray;
  var UserDefined = 'User Defined';

  var getDefaultCharMap = function getDefaultCharMap() {
    return [{
      name: 'Currency',
      characters: [[36, 'dollar sign'], [162, 'cent sign'], [8364, 'euro sign'], [163, 'pound sign'], [165, 'yen sign'], [164, 'currency sign'], [8352, 'euro-currency sign'], [8353, 'colon sign'], [8354, 'cruzeiro sign'], [8355, 'french franc sign'], [8356, 'lira sign'], [8357, 'mill sign'], [8358, 'naira sign'], [8359, 'peseta sign'], [8360, 'rupee sign'], [8361, 'won sign'], [8362, 'new sheqel sign'], [8363, 'dong sign'], [8365, 'kip sign'], [8366, 'tugrik sign'], [8367, 'drachma sign'], [8368, 'german penny symbol'], [8369, 'peso sign'], [8370, 'guarani sign'], [8371, 'austral sign'], [8372, 'hryvnia sign'], [8373, 'cedi sign'], [8374, 'livre tournois sign'], [8375, 'spesmilo sign'], [8376, 'tenge sign'], [8377, 'indian rupee sign'], [8378, 'turkish lira sign'], [8379, 'nordic mark sign'], [8380, 'manat sign'], [8381, 'ruble sign'], [20870, 'yen character'], [20803, 'yuan character'], [22291, 'yuan character, in hong kong and taiwan'], [22278, 'yen/yuan character variant one']]
    }, {
      name: 'Text',
      characters: [[169, 'copyright sign'], [174, 'registered sign'], [8482, 'trade mark sign'], [8240, 'per mille sign'], [181, 'micro sign'], [183, 'middle dot'], [8226, 'bullet'], [8230, 'three dot leader'], [8242, 'minutes / feet'], [8243, 'seconds / inches'], [167, 'section sign'], [182, 'paragraph sign'], [223, 'sharp s / ess-zed']]
    }, {
      name: 'Quotations',
      characters: [[8249, 'single left-pointing angle quotation mark'], [8250, 'single right-pointing angle quotation mark'], [171, 'left pointing guillemet'], [187, 'right pointing guillemet'], [8216, 'left single quotation mark'], [8217, 'right single quotation mark'], [8220, 'left double quotation mark'], [8221, 'right double quotation mark'], [8218, 'single low-9 quotation mark'], [8222, 'double low-9 quotation mark'], [60, 'less-than sign'], [62, 'greater-than sign'], [8804, 'less-than or equal to'], [8805, 'greater-than or equal to'], [8211, 'en dash'], [8212, 'em dash'], [175, 'macron'], [8254, 'overline'], [164, 'currency sign'], [166, 'broken bar'], [168, 'diaeresis'], [161, 'inverted exclamation mark'], [191, 'turned question mark'], [710, 'circumflex accent'], [732, 'small tilde'], [176, 'degree sign'], [8722, 'minus sign'], [177, 'plus-minus sign'], [247, 'division sign'], [8260, 'fraction slash'], [215, 'multiplication sign'], [185, 'superscript one'], [178, 'superscript two'], [179, 'superscript three'], [188, 'fraction one quarter'], [189, 'fraction one half'], [190, 'fraction three quarters']]
    }, {
      name: 'Mathematical',
      characters: [[402, 'function / florin'], [8747, 'integral'], [8721, 'n-ary sumation'], [8734, 'infinity'], [8730, 'square root'], [8764, 'similar to'], [8773, 'approximately equal to'], [8776, 'almost equal to'], [8800, 'not equal to'], [8801, 'identical to'], [8712, 'element of'], [8713, 'not an element of'], [8715, 'contains as member'], [8719, 'n-ary product'], [8743, 'logical and'], [8744, 'logical or'], [172, 'not sign'], [8745, 'intersection'], [8746, 'union'], [8706, 'partial differential'], [8704, 'for all'], [8707, 'there exists'], [8709, 'diameter'], [8711, 'backward difference'], [8727, 'asterisk operator'], [8733, 'proportional to'], [8736, 'angle']]
    }, {
      name: 'Extended Latin',
      characters: [[192, 'A - grave'], [193, 'A - acute'], [194, 'A - circumflex'], [195, 'A - tilde'], [196, 'A - diaeresis'], [197, 'A - ring above'], [256, 'A - macron'], [198, 'ligature AE'], [199, 'C - cedilla'], [200, 'E - grave'], [201, 'E - acute'], [202, 'E - circumflex'], [203, 'E - diaeresis'], [274, 'E - macron'], [204, 'I - grave'], [205, 'I - acute'], [206, 'I - circumflex'], [207, 'I - diaeresis'], [298, 'I - macron'], [208, 'ETH'], [209, 'N - tilde'], [210, 'O - grave'], [211, 'O - acute'], [212, 'O - circumflex'], [213, 'O - tilde'], [214, 'O - diaeresis'], [216, 'O - slash'], [332, 'O - macron'], [338, 'ligature OE'], [352, 'S - caron'], [217, 'U - grave'], [218, 'U - acute'], [219, 'U - circumflex'], [220, 'U - diaeresis'], [362, 'U - macron'], [221, 'Y - acute'], [376, 'Y - diaeresis'], [562, 'Y - macron'], [222, 'THORN'], [224, 'a - grave'], [225, 'a - acute'], [226, 'a - circumflex'], [227, 'a - tilde'], [228, 'a - diaeresis'], [229, 'a - ring above'], [257, 'a - macron'], [230, 'ligature ae'], [231, 'c - cedilla'], [232, 'e - grave'], [233, 'e - acute'], [234, 'e - circumflex'], [235, 'e - diaeresis'], [275, 'e - macron'], [236, 'i - grave'], [237, 'i - acute'], [238, 'i - circumflex'], [239, 'i - diaeresis'], [299, 'i - macron'], [240, 'eth'], [241, 'n - tilde'], [242, 'o - grave'], [243, 'o - acute'], [244, 'o - circumflex'], [245, 'o - tilde'], [246, 'o - diaeresis'], [248, 'o slash'], [333, 'o macron'], [339, 'ligature oe'], [353, 's - caron'], [249, 'u - grave'], [250, 'u - acute'], [251, 'u - circumflex'], [252, 'u - diaeresis'], [363, 'u - macron'], [253, 'y - acute'], [254, 'thorn'], [255, 'y - diaeresis'], [563, 'y - macron'], [913, 'Alpha'], [914, 'Beta'], [915, 'Gamma'], [916, 'Delta'], [917, 'Epsilon'], [918, 'Zeta'], [919, 'Eta'], [920, 'Theta'], [921, 'Iota'], [922, 'Kappa'], [923, 'Lambda'], [924, 'Mu'], [925, 'Nu'], [926, 'Xi'], [927, 'Omicron'], [928, 'Pi'], [929, 'Rho'], [931, 'Sigma'], [932, 'Tau'], [933, 'Upsilon'], [934, 'Phi'], [935, 'Chi'], [936, 'Psi'], [937, 'Omega'], [945, 'alpha'], [946, 'beta'], [947, 'gamma'], [948, 'delta'], [949, 'epsilon'], [950, 'zeta'], [951, 'eta'], [952, 'theta'], [953, 'iota'], [954, 'kappa'], [955, 'lambda'], [956, 'mu'], [957, 'nu'], [958, 'xi'], [959, 'omicron'], [960, 'pi'], [961, 'rho'], [962, 'final sigma'], [963, 'sigma'], [964, 'tau'], [965, 'upsilon'], [966, 'phi'], [967, 'chi'], [968, 'psi'], [969, 'omega']]
    }, {
      name: 'Symbols',
      characters: [[8501, 'alef symbol'], [982, 'pi symbol'], [8476, 'real part symbol'], [978, 'upsilon - hook symbol'], [8472, 'Weierstrass p'], [8465, 'imaginary part']]
    }, {
      name: 'Arrows',
      characters: [[8592, 'leftwards arrow'], [8593, 'upwards arrow'], [8594, 'rightwards arrow'], [8595, 'downwards arrow'], [8596, 'left right arrow'], [8629, 'carriage return'], [8656, 'leftwards double arrow'], [8657, 'upwards double arrow'], [8658, 'rightwards double arrow'], [8659, 'downwards double arrow'], [8660, 'left right double arrow'], [8756, 'therefore'], [8834, 'subset of'], [8835, 'superset of'], [8836, 'not a subset of'], [8838, 'subset of or equal to'], [8839, 'superset of or equal to'], [8853, 'circled plus'], [8855, 'circled times'], [8869, 'perpendicular'], [8901, 'dot operator'], [8968, 'left ceiling'], [8969, 'right ceiling'], [8970, 'left floor'], [8971, 'right floor'], [9001, 'left-pointing angle bracket'], [9002, 'right-pointing angle bracket'], [9674, 'lozenge'], [9824, 'black spade suit'], [9827, 'black club suit'], [9829, 'black heart suit'], [9830, 'black diamond suit'], [8194, 'en space'], [8195, 'em space'], [8201, 'thin space'], [8204, 'zero width non-joiner'], [8205, 'zero width joiner'], [8206, 'left-to-right mark'], [8207, 'right-to-left mark']]
    }];
  };

  var charmapFilter = function charmapFilter(charmap) {
    return global.grep(charmap, function (item) {
      return isArray(item) && item.length === 2;
    });
  };

  var getCharsFromOption = function getCharsFromOption(optionValue) {
    if (isArray(optionValue)) {
      return charmapFilter(optionValue);
    }

    if (typeof optionValue === 'function') {
      return optionValue();
    }

    return [];
  };

  var extendCharMap = function extendCharMap(editor, charmap) {
    var userCharMap = getCharMap$1(editor);

    if (userCharMap) {
      charmap = [{
        name: UserDefined,
        characters: getCharsFromOption(userCharMap)
      }];
    }

    var userCharMapAppend = getCharMapAppend(editor);

    if (userCharMapAppend) {
      var userDefinedGroup = global.grep(charmap, function (cg) {
        return cg.name === UserDefined;
      });

      if (userDefinedGroup.length) {
        userDefinedGroup[0].characters = [].concat(userDefinedGroup[0].characters).concat(getCharsFromOption(userCharMapAppend));
        return charmap;
      }

      return charmap.concat({
        name: UserDefined,
        characters: getCharsFromOption(userCharMapAppend)
      });
    }

    return charmap;
  };

  var getCharMap = function getCharMap(editor) {
    var groups = extendCharMap(editor, getDefaultCharMap());
    return groups.length > 1 ? [{
      name: 'All',
      characters: bind(groups, function (g) {
        return g.characters;
      })
    }].concat(groups) : groups;
  };

  var get = function get(editor) {
    var getCharMap$1 = function getCharMap$1() {
      return getCharMap(editor);
    };

    var insertChar$1 = function insertChar$1(chr) {
      insertChar(editor, chr);
    };

    return {
      getCharMap: getCharMap$1,
      insertChar: insertChar$1
    };
  };

  var Cell = function Cell(initial) {
    var value = initial;

    var get = function get() {
      return value;
    };

    var set = function set(v) {
      value = v;
    };

    return {
      get: get,
      set: set
    };
  };

  var last = function last(fn, rate) {
    var timer = null;

    var cancel = function cancel() {
      if (!isNull(timer)) {
        clearTimeout(timer);
        timer = null;
      }
    };

    var throttle = function throttle() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      cancel();
      timer = setTimeout(function () {
        timer = null;
        fn.apply(null, args);
      }, rate);
    };

    return {
      cancel: cancel,
      throttle: throttle
    };
  };

  var contains = function contains(str, substr) {
    return str.indexOf(substr) !== -1;
  };

  var fromCodePoint = String.fromCodePoint;

  var charMatches = function charMatches(charCode, name, lowerCasePattern) {
    if (contains(fromCodePoint(charCode).toLowerCase(), lowerCasePattern)) {
      return true;
    } else {
      return contains(name.toLowerCase(), lowerCasePattern) || contains(name.toLowerCase().replace(/\s+/g, ''), lowerCasePattern);
    }
  };

  var scan = function scan(group, pattern) {
    var matches = [];
    var lowerCasePattern = pattern.toLowerCase();
    each(group.characters, function (g) {
      if (charMatches(g[0], g[1], lowerCasePattern)) {
        matches.push(g);
      }
    });
    return map(matches, function (m) {
      return {
        text: m[1],
        value: fromCodePoint(m[0]),
        icon: fromCodePoint(m[0])
      };
    });
  };

  var patternName = 'pattern';

  var open = function open(editor, charMap) {
    var makeGroupItems = function makeGroupItems() {
      return [{
        label: 'Search',
        type: 'input',
        name: patternName
      }, {
        type: 'collection',
        name: 'results'
      }];
    };

    var makeTabs = function makeTabs() {
      return map(charMap, function (charGroup) {
        return {
          title: charGroup.name,
          name: charGroup.name,
          items: makeGroupItems()
        };
      });
    };

    var makePanel = function makePanel() {
      return {
        type: 'panel',
        items: makeGroupItems()
      };
    };

    var makeTabPanel = function makeTabPanel() {
      return {
        type: 'tabpanel',
        tabs: makeTabs()
      };
    };

    var currentTab = charMap.length === 1 ? Cell(UserDefined) : Cell('All');

    var scanAndSet = function scanAndSet(dialogApi, pattern) {
      find(charMap, function (group) {
        return group.name === currentTab.get();
      }).each(function (f) {
        var items = scan(f, pattern);
        dialogApi.setData({
          results: items
        });
      });
    };

    var SEARCH_DELAY = 40;
    var updateFilter = last(function (dialogApi) {
      var pattern = dialogApi.getData().pattern;
      scanAndSet(dialogApi, pattern);
    }, SEARCH_DELAY);
    var body = charMap.length === 1 ? makePanel() : makeTabPanel();
    var initialData = {
      pattern: '',
      results: scan(charMap[0], '')
    };
    var bridgeSpec = {
      title: 'Special Character',
      size: 'normal',
      body: body,
      buttons: [{
        type: 'cancel',
        name: 'close',
        text: 'Close',
        primary: true
      }],
      initialData: initialData,
      onAction: function onAction(api, details) {
        if (details.name === 'results') {
          insertChar(editor, details.value);
          api.close();
        }
      },
      onTabChange: function onTabChange(dialogApi, details) {
        currentTab.set(details.newTabName);
        updateFilter.throttle(dialogApi);
      },
      onChange: function onChange(dialogApi, changeData) {
        if (changeData.name === patternName) {
          updateFilter.throttle(dialogApi);
        }
      }
    };
    var dialogApi = editor.windowManager.open(bridgeSpec);
    dialogApi.focus(patternName);
  };

  var register$1 = function register$1(editor, charMap) {
    editor.addCommand('mceShowCharmap', function () {
      open(editor, charMap);
    });
  };

  var init = function init(editor, all) {
    editor.ui.registry.addAutocompleter('charmap', {
      ch: ':',
      columns: 'auto',
      minChars: 2,
      fetch: function fetch(pattern, _maxResults) {
        return new Promise(function (resolve, _reject) {
          resolve(scan(all, pattern));
        });
      },
      onAction: function onAction(autocompleteApi, rng, value) {
        editor.selection.setRng(rng);
        editor.insertContent(value);
        autocompleteApi.hide();
      }
    });
  };

  var register = function register(editor) {
    editor.ui.registry.addButton('charmap', {
      icon: 'insert-character',
      tooltip: 'Special character',
      onAction: function onAction() {
        return editor.execCommand('mceShowCharmap');
      }
    });
    editor.ui.registry.addMenuItem('charmap', {
      icon: 'insert-character',
      text: 'Special character...',
      onAction: function onAction() {
        return editor.execCommand('mceShowCharmap');
      }
    });
  };

  var Plugin = function Plugin() {
    global$1.add('charmap', function (editor) {
      register$2(editor);
      var charMap = getCharMap(editor);
      register$1(editor, charMap);
      register(editor);
      init(editor, charMap[0]);
      return get(editor);
    });
  };

  Plugin();
})();