"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var eq = function eq(t) {
    return function (a) {
      return t === a;
    };
  };

  var isNull = eq(null);

  var isNullable = function isNullable(a) {
    return a === null || a === undefined;
  };

  var isNonNullable = function isNonNullable(a) {
    return !isNullable(a);
  };

  var noop = function noop() {};

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

  var exists = function exists(xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];

      if (pred(x, i)) {
        return true;
      }
    }

    return false;
  };

  var map$1 = function map$1(xs, f) {
    var len = xs.length;
    var r = new Array(len);

    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i);
    }

    return r;
  };

  var each$1 = function each$1(xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i);
    }
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

  var insertEmoticon = function insertEmoticon(editor, ch) {
    editor.insertContent(ch);
  };

  var keys = Object.keys;
  var hasOwnProperty = Object.hasOwnProperty;

  var each = function each(obj, f) {
    var props = keys(obj);

    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i);
    }
  };

  var map = function map(obj, f) {
    return tupleMap(obj, function (x, i) {
      return {
        k: i,
        v: f(x, i)
      };
    });
  };

  var tupleMap = function tupleMap(obj, f) {
    var r = {};
    each(obj, function (x, i) {
      var tuple = f(x, i);
      r[tuple.k] = tuple.v;
    });
    return r;
  };

  var has = function has(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  var shallow = function shallow(old, nu) {
    return nu;
  };

  var baseMerge = function baseMerge(merger) {
    return function () {
      if (arguments.length === 0) {
        throw new Error("Can't merge zero objects");
      }

      var ret = {};

      for (var j = 0; j < arguments.length; j++) {
        var curObject = j < 0 || arguments.length <= j ? undefined : arguments[j];

        for (var key in curObject) {
          if (has(curObject, key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
        }
      }

      return ret;
    };
  };

  var merge = baseMerge(shallow);

  var singleton = function singleton(doRevoke) {
    var subject = Cell(Optional.none());

    var revoke = function revoke() {
      return subject.get().each(doRevoke);
    };

    var clear = function clear() {
      revoke();
      subject.set(Optional.none());
    };

    var isSet = function isSet() {
      return subject.get().isSome();
    };

    var get = function get() {
      return subject.get();
    };

    var set = function set(s) {
      revoke();
      subject.set(Optional.some(s));
    };

    return {
      clear: clear,
      isSet: isSet,
      get: get,
      set: set
    };
  };

  var value = function value() {
    var subject = singleton(noop);

    var on = function on(f) {
      return subject.get().each(f);
    };

    return _objectSpread({}, subject, {
      on: on
    });
  };

  var checkRange = function checkRange(str, substr, start) {
    return substr === '' || str.length >= substr.length && str.substr(start, start + substr.length) === substr;
  };

  var contains = function contains(str, substr) {
    return str.indexOf(substr) !== -1;
  };

  var startsWith = function startsWith(str, prefix) {
    return checkRange(str, prefix, 0);
  };

  var global = tinymce.util.Tools.resolve('tinymce.Resource');
  var DEFAULT_ID = 'tinymce.plugins.emoticons';

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor, pluginUrl) {
    var registerOption = editor.options.register;
    registerOption('emoticons_database', {
      processor: 'string',
      "default": 'emojis'
    });
    registerOption('emoticons_database_url', {
      processor: 'string',
      "default": "".concat(pluginUrl, "/js/").concat(getEmojiDatabase(editor)).concat(editor.suffix, ".js")
    });
    registerOption('emoticons_database_id', {
      processor: 'string',
      "default": DEFAULT_ID
    });
    registerOption('emoticons_append', {
      processor: 'object',
      "default": {}
    });
    registerOption('emoticons_images_url', {
      processor: 'string',
      "default": 'https://twemoji.maxcdn.com/v/13.0.1/72x72/'
    });
  };

  var getEmojiDatabase = option('emoticons_database');
  var getEmojiDatabaseUrl = option('emoticons_database_url');
  var getEmojiDatabaseId = option('emoticons_database_id');
  var getAppendedEmoji = option('emoticons_append');
  var getEmojiImageUrl = option('emoticons_images_url');
  var ALL_CATEGORY = 'All';
  var categoryNameMap = {
    symbols: 'Symbols',
    people: 'People',
    animals_and_nature: 'Animals and Nature',
    food_and_drink: 'Food and Drink',
    activity: 'Activity',
    travel_and_places: 'Travel and Places',
    objects: 'Objects',
    flags: 'Flags',
    user: 'User Defined'
  };

  var translateCategory = function translateCategory(categories, name) {
    return has(categories, name) ? categories[name] : name;
  };

  var getUserDefinedEmoji = function getUserDefinedEmoji(editor) {
    var userDefinedEmoticons = getAppendedEmoji(editor);
    return map(userDefinedEmoticons, function (value) {
      return _objectSpread({
        keywords: [],
        category: 'user'
      }, value);
    });
  };

  var initDatabase = function initDatabase(editor, databaseUrl, databaseId) {
    var categories = value();
    var all = value();
    var emojiImagesUrl = getEmojiImageUrl(editor);

    var getEmoji = function getEmoji(lib) {
      if (startsWith(lib["char"], '<img')) {
        return lib["char"].replace(/src="([^"]+)"/, function (match, url) {
          return "src=\"".concat(emojiImagesUrl).concat(url, "\"");
        });
      } else {
        return lib["char"];
      }
    };

    var processEmojis = function processEmojis(emojis) {
      var cats = {};
      var everything = [];
      each(emojis, function (lib, title) {
        var entry = {
          title: title,
          keywords: lib.keywords,
          "char": getEmoji(lib),
          category: translateCategory(categoryNameMap, lib.category)
        };
        var current = cats[entry.category] !== undefined ? cats[entry.category] : [];
        cats[entry.category] = current.concat([entry]);
        everything.push(entry);
      });
      categories.set(cats);
      all.set(everything);
    };

    editor.on('init', function () {
      global.load(databaseId, databaseUrl).then(function (emojis) {
        var userEmojis = getUserDefinedEmoji(editor);
        processEmojis(merge(emojis, userEmojis));
      }, function (err) {
        console.log("Failed to load emojis: ".concat(err));
        categories.set({});
        all.set([]);
      });
    });

    var listCategory = function listCategory(category) {
      if (category === ALL_CATEGORY) {
        return listAll();
      }

      return categories.get().bind(function (cats) {
        return Optional.from(cats[category]);
      }).getOr([]);
    };

    var listAll = function listAll() {
      return all.get().getOr([]);
    };

    var listCategories = function listCategories() {
      return [ALL_CATEGORY].concat(keys(categories.get().getOr({})));
    };

    var waitForLoad = function waitForLoad() {
      if (hasLoaded()) {
        return Promise.resolve(true);
      } else {
        return new Promise(function (resolve, reject) {
          var numRetries = 15;
          var interval = setInterval(function () {
            if (hasLoaded()) {
              clearInterval(interval);
              resolve(true);
            } else {
              numRetries--;

              if (numRetries < 0) {
                console.log('Could not load emojis from url: ' + databaseUrl);
                clearInterval(interval);
                reject(false);
              }
            }
          }, 100);
        });
      }
    };

    var hasLoaded = function hasLoaded() {
      return categories.isSet() && all.isSet();
    };

    return {
      listCategories: listCategories,
      hasLoaded: hasLoaded,
      waitForLoad: waitForLoad,
      listAll: listAll,
      listCategory: listCategory
    };
  };

  var emojiMatches = function emojiMatches(emoji, lowerCasePattern) {
    return contains(emoji.title.toLowerCase(), lowerCasePattern) || exists(emoji.keywords, function (k) {
      return contains(k.toLowerCase(), lowerCasePattern);
    });
  };

  var emojisFrom = function emojisFrom(list, pattern, maxResults) {
    var matches = [];
    var lowerCasePattern = pattern.toLowerCase();
    var reachedLimit = maxResults.fold(function () {
      return never;
    }, function (max) {
      return function (size) {
        return size >= max;
      };
    });

    for (var i = 0; i < list.length; i++) {
      if (pattern.length === 0 || emojiMatches(list[i], lowerCasePattern)) {
        matches.push({
          value: list[i]["char"],
          text: list[i].title,
          icon: list[i]["char"]
        });

        if (reachedLimit(matches.length)) {
          break;
        }
      }
    }

    return matches;
  };

  var patternName = 'pattern';

  var open = function open(editor, database) {
    var initialState = {
      pattern: '',
      results: emojisFrom(database.listAll(), '', Optional.some(300))
    };
    var currentTab = Cell(ALL_CATEGORY);

    var scan = function scan(dialogApi) {
      var dialogData = dialogApi.getData();
      var category = currentTab.get();
      var candidates = database.listCategory(category);
      var results = emojisFrom(candidates, dialogData[patternName], category === ALL_CATEGORY ? Optional.some(300) : Optional.none());
      dialogApi.setData({
        results: results
      });
    };

    var updateFilter = last(function (dialogApi) {
      scan(dialogApi);
    }, 200);
    var searchField = {
      label: 'Search',
      type: 'input',
      name: patternName
    };
    var resultsField = {
      type: 'collection',
      name: 'results'
    };

    var getInitialState = function getInitialState() {
      var body = {
        type: 'tabpanel',
        tabs: map$1(database.listCategories(), function (cat) {
          return {
            title: cat,
            name: cat,
            items: [searchField, resultsField]
          };
        })
      };
      return {
        title: 'Emojis',
        size: 'normal',
        body: body,
        initialData: initialState,
        onTabChange: function onTabChange(dialogApi, details) {
          currentTab.set(details.newTabName);
          updateFilter.throttle(dialogApi);
        },
        onChange: updateFilter.throttle,
        onAction: function onAction(dialogApi, actionData) {
          if (actionData.name === 'results') {
            insertEmoticon(editor, actionData.value);
            dialogApi.close();
          }
        },
        buttons: [{
          type: 'cancel',
          text: 'Close',
          primary: true
        }]
      };
    };

    var dialogApi = editor.windowManager.open(getInitialState());
    dialogApi.focus(patternName);

    if (!database.hasLoaded()) {
      dialogApi.block('Loading emojis...');
      database.waitForLoad().then(function () {
        dialogApi.redial(getInitialState());
        updateFilter.throttle(dialogApi);
        dialogApi.focus(patternName);
        dialogApi.unblock();
      })["catch"](function (_err) {
        dialogApi.redial({
          title: 'Emojis',
          body: {
            type: 'panel',
            items: [{
              type: 'alertbanner',
              level: 'error',
              icon: 'warning',
              text: 'Could not load emojis'
            }]
          },
          buttons: [{
            type: 'cancel',
            text: 'Close',
            primary: true
          }],
          initialData: {
            pattern: '',
            results: []
          }
        });
        dialogApi.focus(patternName);
        dialogApi.unblock();
      });
    }
  };

  var register$1 = function register$1(editor, database) {
    editor.addCommand('mceEmoticons', function () {
      return open(editor, database);
    });
  };

  var setup = function setup(editor) {
    editor.on('PreInit', function () {
      editor.parser.addAttributeFilter('data-emoticon', function (nodes) {
        each$1(nodes, function (node) {
          node.attr('data-mce-resize', 'false');
          node.attr('data-mce-placeholder', '1');
        });
      });
    });
  };

  var init = function init(editor, database) {
    editor.ui.registry.addAutocompleter('emoticons', {
      ch: ':',
      columns: 'auto',
      minChars: 2,
      fetch: function fetch(pattern, maxResults) {
        return database.waitForLoad().then(function () {
          var candidates = database.listAll();
          return emojisFrom(candidates, pattern, Optional.some(maxResults));
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
    var onAction = function onAction() {
      return editor.execCommand('mceEmoticons');
    };

    editor.ui.registry.addButton('emoticons', {
      tooltip: 'Emojis',
      icon: 'emoji',
      onAction: onAction
    });
    editor.ui.registry.addMenuItem('emoticons', {
      text: 'Emojis...',
      icon: 'emoji',
      onAction: onAction
    });
  };

  var Plugin = function Plugin() {
    global$1.add('emoticons', function (editor, pluginUrl) {
      register$2(editor, pluginUrl);
      var databaseUrl = getEmojiDatabaseUrl(editor);
      var databaseId = getEmojiDatabaseId(editor);
      var database = initDatabase(editor, databaseUrl, databaseId);
      register$1(editor, database);
      register(editor);
      init(editor, database);
      setup(editor);
    });
  };

  Plugin();
})();