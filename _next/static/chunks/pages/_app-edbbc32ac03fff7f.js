(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{644:function(e){"undefined"!=typeof self&&self,e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){if("noModule"in HTMLScriptElement.prototype){const t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}}e.r(t),e.d(t,{componentsReady:()=>c,load:()=>o});const r="porscheDesignSystem",o=(e={prefix:""})=>{!function({script:e,version:t,prefix:o}){var c;const u=null!==(c=function(e){const t=(document[r]||(document[r]={}),document[r]),{[e]:n=null}=t;if(null===n){const n={isLoaded:!1,prefixes:[],registerCustomElements:null};t[e]=n}return t[e]}(t))&&void 0!==c?c:{},{isLoaded:i,prefixes:s,registerCustomElements:f}=u;i||(n(e),u.isLoaded=!0),s.includes(o)||(s.push(o),f&&f(o))}(Object.assign(Object.assign({},{version:"2.18.0-rc.2",script:("undefined"!==typeof window&&"cn"===window.PORSCHE_DESIGN_SYSTEM_CDN?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/components/porsche-design-system.v2.18.0-rc.2.b023454811391228ee12.js"}),e))},c=(e=document.body)=>{let t;const n=new Promise((e=>t=e));if(u())i(e,t);else{const n="readystatechange",r=()=>{u()&&(document.removeEventListener(n,r),i(e,t))};document.addEventListener(n,r)}return n},u=()=>"complete"===document.readyState,i=(e,t)=>{const n=s(e);Promise.all(n).then((e=>t(e.length))).catch(console.error)},s=e=>{let t=[];return 1===(null==e?void 0:e.nodeType)&&Array.from(e.children).forEach((e=>{a(e)&&t.push(e.componentOnReady()),t=t.concat(s(e))})),t},f=/^(.*-)?P-(.*)$/,a=e=>f.exec(e.tagName)&&"function"==typeof e.componentOnReady;return t})()},9723:function(e,t,n){"use strict";n.d(t,{$0:function(){return i},AK:function(){return u},Cs:function(){return f},Yf:function(){return s},tF:function(){return a}});var r=n(7294),o=n(2379),c=n(8937);const u=e=>{{const{prefix:t}=(0,r.useContext)(o.c);if(void 0===t)throw new Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},i=(e,t,n)=>{(0,r.useEffect)((()=>{const{current:r}=e;if(r&&n)return r.addEventListener(t,n),()=>null===r||void 0===r?void 0:r.removeEventListener(t,n)}),[n])},s=(e,t)=>{const n=(0,r.useRef)();return(0,r.useMemo)((()=>{if(!t)return;const{current:r}=e;let o=t;return r&&(o=(0,c.kg)(r.className,n.current,t),r.className=o),n.current=t,o}),[t])},f="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,a=()=>{const e=u("p-toast");return{addMessage:t=>{const n=document.querySelector(e);customElements.whenDefined(e).then((()=>n.addMessage(t)))}}}},2379:function(e,t,n){"use strict";n.d(t,{b:function(){return i},c:function(){return u}});var r=n(5893),o=n(7294),c=n(644);const u=(0,o.createContext)({prefix:void 0}),i=({prefix:e="",...t})=>((0,o.useEffect)((()=>{(0,c.load)({prefix:e})}),[e]),(0,r.jsx)(u.Provider,{value:{prefix:e},...t}))},8937:function(e,t,n){"use strict";n.d(t,{Lv:function(){return c},kg:function(){return o}});const r=e=>e.split(" ").filter((e=>e)),o=(e,t="",n="")=>{const o=r(t);let c=r(e);o.length&&(c=c.filter((e=>!o.includes(e))));return r(n).concat(c).join(" ")},c=(e,t)=>n=>{e.current=n,"function"===typeof t?t(n):null!==t&&(t.current=n)}},7544:function(e,t,n){e.exports=n(6029)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5852)}])},5852:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.r(t),n.d(t,{default:function(){return w}});var u=n(1799);function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function s(e){return i(e)}function f(e,t){return!t||"object"!==((n=t)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t;var n}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var l=n(5893),p=n(7544),d=n(7294),y=(n(8043),n(9008)),m=n.n(y),h=n(2379),v=n(9723),b=n(8937);const g=(0,d.forwardRef)((({theme:e="light",className:t,...n},r)=>{const o=(0,d.useRef)(),c=(0,v.AK)("p-toast");(0,v.Cs)((()=>{o.current.theme=e}),[e]);const u={...n,suppressHydrationWarning:!0,class:(0,v.Yf)(o,t),ref:(0,b.Lv)(o,r)};return(0,l.jsx)(c,{...u})}));var w=function(e){c(n,e);var t=a(n);function n(){return r(this,n),t.apply(this,arguments)}return n.prototype.render=function(){var e=this.props,t=e.Component,n=e.pageProps;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(m(),{children:[(0,l.jsx)("title",{children:"NextJS sample project"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"})]}),(0,l.jsxs)(h.b,{children:[(0,l.jsx)(t,(0,u.Z)({},n)),(0,l.jsx)(g,{})]})]})},n}(p.default)},8043:function(){},9008:function(e,t,n){e.exports=n(5443)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);