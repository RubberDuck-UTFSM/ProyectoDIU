// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/purebasic.js":[function(require,module,exports) {
module.exports = // Base deafult colors in PB IDE: background: #FFFFDF; foreground: #000000;

function(hljs) {
  var STRINGS = { // PB IDE color: #0080FF (Azure Radiance)
    className: 'string',
    begin: '(~)?"', end: '"',
    illegal: '\\n'
  };
  var CONSTANTS = { // PB IDE color: #924B72 (Cannon Pink)
    //  "#" + a letter or underscore + letters, digits or underscores + (optional) "$"
    className: 'symbol',
    begin: '#[a-zA-Z_]\\w*\\$?'
  };

  return {
    aliases: ['pb', 'pbi'],
    keywords: // PB IDE color: #006666 (Blue Stone) + Bold
      // Keywords from all version of PureBASIC 5.00 upward ...
      'Align And Array As Break CallDebugger Case CompilerCase CompilerDefault ' +
      'CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError ' +
      'CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug ' +
      'DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default ' +
      'Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM ' +
      'EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration ' +
      'EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect ' +
      'EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends ' +
      'FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC ' +
      'IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount ' +
      'Map Module NewList NewMap Next Not Or Procedure ProcedureC ' +
      'ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim ' +
      'Read Repeat Restore Return Runtime Select Shared Static Step Structure ' +
      'StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule ' +
      'UseModule Wend While With XIncludeFile XOr',
    contains: [
      // COMMENTS | PB IDE color: #00AAAA (Persian Green)
      hljs.COMMENT(';', '$', {relevance: 0}),

      { // PROCEDURES DEFINITIONS
        className: 'function',
        begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
        end: '\\(',
        excludeEnd: true,
        returnBegin: true,
        contains: [
          { // PROCEDURE KEYWORDS | PB IDE color: #006666 (Blue Stone) + Bold
            className: 'keyword',
            begin: '(Procedure|Declare)(C|CDLL|DLL)?',
            excludeEnd: true
          },
          { // PROCEDURE RETURN TYPE SETTING | PB IDE color: #000000 (Black)
            className: 'type',
            begin: '\\.\\w*'
            // end: ' ',
          },
          hljs.UNDERSCORE_TITLE_MODE // PROCEDURE NAME | PB IDE color: #006666 (Blue Stone)
        ]
      },
      STRINGS,
      CONSTANTS
    ]
  };
}

/*  ==============================================================================
                                      CHANGELOG                                   
    ==============================================================================
    - v.1.2 (2017-05-12)
        -- BUG-FIX: Some keywords were accidentally joyned together. Now fixed.
    - v.1.1 (2017-04-30)
        -- Updated to PureBASIC 5.60.
        -- Keywords list now built by extracting them from the PureBASIC SDK's
           "SyntaxHilighting.dll" (from each PureBASIC version). Tokens from each
           version are added to the list, and renamed or removed tokens are kept
           for the sake of covering all versions of the language from PureBASIC
           v5.00 upward. (NOTE: currently, there are no renamed or deprecated
           tokens in the keywords list). For more info, see:
           -- http://www.purebasic.fr/english/viewtopic.php?&p=506269
           -- https://github.com/tajmone/purebasic-archives/tree/master/syntax-highlighting/guidelines
    - v.1.0 (April 2016)
        -- First release
        -- Keywords list taken and adapted from GuShH's (Gustavo Julio Fiorenza)
           PureBasic language file for GeSHi:
           -- https://github.com/easybook/geshi/blob/master/geshi/purebasic.php
*/;
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54424" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/purebasic.js"], null)
//# sourceMappingURL=/purebasic.069ed1c1.js.map