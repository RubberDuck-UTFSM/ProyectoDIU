parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"awlS":[function(require,module,exports) {
"use strict";function e(e){e.languages.scheme={comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"|'[^()#'\s]+/,greedy:!0},character:{pattern:/#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,alias:"string"},keyword:{pattern:/(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,lookbehind:!0},builtin:{pattern:/(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,lookbehind:!0},number:{pattern:/([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,lookbehind:!0},boolean:/#[tf]/,operator:{pattern:/(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,lookbehind:!0},function:{pattern:/(\()[^()'\s]+(?=[()\s)]|$)/,lookbehind:!0},punctuation:/[()']/}}module.exports=e,e.displayName="scheme",e.aliases=[];
},{}]},{},["awlS"], null)
//# sourceMappingURL=/scheme.d6c52e77.js.map