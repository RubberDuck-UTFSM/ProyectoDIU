parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uoDu":[function(require,module,exports) {
"use strict";function e(e){e.languages.autoit={comment:[/;.*/,{pattern:/(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,lookbehind:!0}],url:{pattern:/(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^\s*)#\w+/m,lookbehind:!0,alias:"keyword"},function:/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,boolean:/\b(?:True|False)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,punctuation:/[\[\]().,:]/}}module.exports=e,e.displayName="autoit",e.aliases=[];
},{}]},{},["uoDu"], null)
//# sourceMappingURL=/autoit.e5dd0908.js.map