!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["React"],e):"object"==typeof exports?exports["ts-lib-starter"]=e(require("react")):t["ts-lib-starter"]=e(t.React)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"LibButton",(function(){return o}));var r=n(0),o=(n(1),function(t){var e=t.children,n=t.onCLick,o=t.isDisabled,i=void 0!==o&&o,u=t.isLoading,c=void 0!==u&&u;return r.createElement("button",{"data-testid":"lib-button",className:"".concat("lib-button"," ").concat("lib-button","--").concat(c?"is-loading":"is-not-loading"),disabled:i,onClick:n},e)})}])}));