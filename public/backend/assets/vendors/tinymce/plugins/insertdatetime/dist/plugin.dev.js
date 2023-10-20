"use strict";

/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
(function () {
  'use strict';

  var global$1 = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var option = function option(name) {
    return function (editor) {
      return editor.options.get(name);
    };
  };

  var register$2 = function register$2(editor) {
    var registerOption = editor.options.register;
    registerOption('insertdatetime_dateformat', {
      processor: 'string',
      "default": editor.translate('%Y-%m-%d')
    });
    registerOption('insertdatetime_timeformat', {
      processor: 'string',
      "default": editor.translate('%H:%M:%S')
    });
    registerOption('insertdatetime_formats', {
      processor: 'string[]',
      "default": ['%H:%M:%S', '%Y-%m-%d', '%I:%M:%S %p', '%D']
    });
    registerOption('insertdatetime_element', {
      processor: 'boolean',
      "default": false
    });
  };

  var getDateFormat = option('insertdatetime_dateformat');
  var getTimeFormat = option('insertdatetime_timeformat');
  var getFormats = option('insertdatetime_formats');
  var shouldInsertTimeElement = option('insertdatetime_element');

  var getDefaultDateTime = function getDefaultDateTime(editor) {
    var formats = getFormats(editor);
    return formats.length > 0 ? formats[0] : getTimeFormat(editor);
  };

  var daysShort = 'Sun Mon Tue Wed Thu Fri Sat Sun'.split(' ');
  var daysLong = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');
  var monthsShort = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
  var monthsLong = 'January February March April May June July August September October November December'.split(' ');

  var addZeros = function addZeros(value, len) {
    value = '' + value;

    if (value.length < len) {
      for (var i = 0; i < len - value.length; i++) {
        value = '0' + value;
      }
    }

    return value;
  };

  var getDateTime = function getDateTime(editor, fmt) {
    var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    fmt = fmt.replace('%D', '%m/%d/%Y');
    fmt = fmt.replace('%r', '%I:%M:%S %p');
    fmt = fmt.replace('%Y', '' + date.getFullYear());
    fmt = fmt.replace('%y', '' + date.getYear());
    fmt = fmt.replace('%m', addZeros(date.getMonth() + 1, 2));
    fmt = fmt.replace('%d', addZeros(date.getDate(), 2));
    fmt = fmt.replace('%H', '' + addZeros(date.getHours(), 2));
    fmt = fmt.replace('%M', '' + addZeros(date.getMinutes(), 2));
    fmt = fmt.replace('%S', '' + addZeros(date.getSeconds(), 2));
    fmt = fmt.replace('%I', '' + ((date.getHours() + 11) % 12 + 1));
    fmt = fmt.replace('%p', '' + (date.getHours() < 12 ? 'AM' : 'PM'));
    fmt = fmt.replace('%B', '' + editor.translate(monthsLong[date.getMonth()]));
    fmt = fmt.replace('%b', '' + editor.translate(monthsShort[date.getMonth()]));
    fmt = fmt.replace('%A', '' + editor.translate(daysLong[date.getDay()]));
    fmt = fmt.replace('%a', '' + editor.translate(daysShort[date.getDay()]));
    fmt = fmt.replace('%%', '%');
    return fmt;
  };

  var updateElement = function updateElement(editor, timeElm, computerTime, userTime) {
    var newTimeElm = editor.dom.create('time', {
      datetime: computerTime
    }, userTime);
    timeElm.parentNode.insertBefore(newTimeElm, timeElm);
    editor.dom.remove(timeElm);
    editor.selection.select(newTimeElm, true);
    editor.selection.collapse(false);
  };

  var insertDateTime = function insertDateTime(editor, format) {
    if (shouldInsertTimeElement(editor)) {
      var userTime = getDateTime(editor, format);
      var computerTime;

      if (/%[HMSIp]/.test(format)) {
        computerTime = getDateTime(editor, '%Y-%m-%dT%H:%M');
      } else {
        computerTime = getDateTime(editor, '%Y-%m-%d');
      }

      var timeElm = editor.dom.getParent(editor.selection.getStart(), 'time');

      if (timeElm) {
        updateElement(editor, timeElm, computerTime, userTime);
      } else {
        editor.insertContent('<time datetime="' + computerTime + '">' + userTime + '</time>');
      }
    } else {
      editor.insertContent(getDateTime(editor, format));
    }
  };

  var register$1 = function register$1(editor) {
    editor.addCommand('mceInsertDate', function (_ui, value) {
      insertDateTime(editor, value !== null && value !== void 0 ? value : getDateFormat(editor));
    });
    editor.addCommand('mceInsertTime', function (_ui, value) {
      insertDateTime(editor, value !== null && value !== void 0 ? value : getTimeFormat(editor));
    });
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

  var global = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var register = function register(editor) {
    var formats = getFormats(editor);
    var defaultFormat = Cell(getDefaultDateTime(editor));

    var insertDateTime = function insertDateTime(format) {
      return editor.execCommand('mceInsertDate', false, format);
    };

    editor.ui.registry.addSplitButton('insertdatetime', {
      icon: 'insert-time',
      tooltip: 'Insert date/time',
      select: function select(value) {
        return value === defaultFormat.get();
      },
      fetch: function fetch(done) {
        done(global.map(formats, function (format) {
          return {
            type: 'choiceitem',
            text: getDateTime(editor, format),
            value: format
          };
        }));
      },
      onAction: function onAction(_api) {
        insertDateTime(defaultFormat.get());
      },
      onItemAction: function onItemAction(_api, value) {
        defaultFormat.set(value);
        insertDateTime(value);
      }
    });

    var makeMenuItemHandler = function makeMenuItemHandler(format) {
      return function () {
        defaultFormat.set(format);
        insertDateTime(format);
      };
    };

    editor.ui.registry.addNestedMenuItem('insertdatetime', {
      icon: 'insert-time',
      text: 'Date/time',
      getSubmenuItems: function getSubmenuItems() {
        return global.map(formats, function (format) {
          return {
            type: 'menuitem',
            text: getDateTime(editor, format),
            onAction: makeMenuItemHandler(format)
          };
        });
      }
    });
  };

  var Plugin = function Plugin() {
    global$1.add('insertdatetime', function (editor) {
      register$2(editor);
      register$1(editor);
      register(editor);
    });
  };

  Plugin();
})();