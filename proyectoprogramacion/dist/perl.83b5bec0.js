parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pAJH":[function(require,module,exports) {
"use strict";function e(e){e.languages.perl={comment:[{pattern:/(^\s*)=\w+[\s\S]*?=cut.*/m,lookbehind:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0}],string:[{pattern:/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0},{pattern:/("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0},{pattern:/'(?:[^'\\\r\n]|\\.)*'/,greedy:!0}],regex:[{pattern:/\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,greedy:!0}],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*>|\b_\b/,alias:"symbol"},vstring:{pattern:/v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,alias:"string"},function:{pattern:/sub [a-z0-9_]+/i,inside:{keyword:/sub/}},keyword:/\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,punctuation:/[{}[\];(),:]/}}module.exports=e,e.displayName="perl",e.aliases=[];
},{}]},{},["pAJH"], null)
//# sourceMappingURL=/perl.83b5bec0.js.map