parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BqXF":[function(require,module,exports) {
module.exports=function(e){var n={keyword:"if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",literal:"true false nil",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},a="[A-Za-z$_][0-9A-Za-z$_]*",s={className:"subst",begin:/#\{/,end:/}/,keywords:n},i=[e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s]}]},{className:"built_in",begin:"@__"+e.IDENT_RE},{begin:"@"+e.IDENT_RE},{begin:e.IDENT_RE+"\\\\"+e.IDENT_RE}];s.contains=i;var t=e.inherit(e.TITLE_MODE,{begin:a}),r={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(i)}]};return{aliases:["moon"],keywords:n,illegal:/\/\*/,contains:i.concat([e.COMMENT("--","$"),{className:"function",begin:"^\\s*"+a+"\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[t,r]},{begin:/[\(,:=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\))?\\s*\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[r]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[t]},t]},{className:"name",begin:a+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}};
},{}]},{},["BqXF"], null)
//# sourceMappingURL=/moonscript.dd4bae79.js.map