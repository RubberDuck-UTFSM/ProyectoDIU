parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bv0j":[function(require,module,exports) {
module.exports=function(e){return{aliases:["p21","step","stp"],case_insensitive:!0,lexemes:"[A-Z_][A-Z0-9_.]*",keywords:{keyword:"HEADER ENDSEC DATA"},contains:[{className:"meta",begin:"ISO-10303-21;",relevance:10},{className:"meta",begin:"END-ISO-10303-21;",relevance:10},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*!","\\*/"),e.C_NUMBER_MODE,e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"string",begin:"'",end:"'"},{className:"symbol",variants:[{begin:"#",end:"\\d+",illegal:"\\W"}]}]}};
},{}]},{},["bv0j"], null)
//# sourceMappingURL=/step21.5fdf2d8b.js.map