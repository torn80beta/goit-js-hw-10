!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,s=l||a||Function("return this")(),d=Object.prototype.toString,v=Math.max,y=Math.min,b=function(){return s.Date.now()};function p(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||f.test(e)?c(e.slice(2),l?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var o,r,i,u,f,c,l=0,a=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,l=t,u=e.apply(i,n)}function h(e){return l=e,f=setTimeout(E,t),a?g(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=i}function E(){var e=b();if(j(e))return x(e);f=setTimeout(E,function(e){var n=t-(e-c);return s?y(n,i-(e-l)):n}(e))}function x(e){return f=void 0,d&&o?g(e):(o=r=void 0,u)}function O(){var e=b(),n=j(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(E,t),g(c)}return void 0===f&&(f=setTimeout(E,t)),u}return t=m(t)||0,p(n)&&(a=!!n.leading,i=(s="maxWait"in n)?v(m(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:x(b())},O};var g={searchBoxEl:document.querySelector("#search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};g.searchBoxEl.value;console.log(g.searchBoxEl,g.countryListEl,g.countryInfoEl),g.searchBoxEl.addEventListener("input",n((function(e){console.log(e.target.value)}),300))}();
//# sourceMappingURL=index.03b582a7.js.map
