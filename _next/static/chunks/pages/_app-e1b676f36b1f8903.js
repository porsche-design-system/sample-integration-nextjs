(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9723:function(e,t,n){"use strict";n.d(t,{$0:function(){return i},AK:function(){return s},Cs:function(){return f},Yf:function(){return u},tF:function(){return a}});var r=n(7294),o=n(4493),c=n(8937);const s=e=>{{const{prefix:t}=(0,r.useContext)(o.c);if(void 0===t)throw new Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},i=(e,t,n)=>{(0,r.useEffect)((()=>{const{current:r}=e;if(r&&n)return r.addEventListener(t,n),()=>null===r||void 0===r?void 0:r.removeEventListener(t,n)}),[n])},u=(e,t)=>{const n=(0,r.useRef)();return(0,r.useMemo)((()=>{if(!t)return;const{current:r}=e;let o=t;return r&&(o=(0,c.kg)(r.className,n.current,t),r.className=o),n.current=t,o}),[t])},f="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,a=()=>{const e=s("p-toast");return{addMessage:t=>{const n=document.body.querySelector(e);customElements.whenDefined(e).then((()=>n.addMessage(t)))}}}},4493:function(e,t,n){"use strict";n.d(t,{c:function(){return b},b:function(){return w}});var r=n(5893),o=n(7294),c={d:(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},s={};c.d(s,{l:()=>a,z:()=>f});const i="porscheDesignSystem";function u(){return document[i]||(document[i]={}),document[i]}const f=(e={prefix:""})=>{!function({script:e,version:t,prefix:n}){const r=function(e){const t=u(),{[e]:n=null}=t;if(null===n){let n=()=>{};const r=new Promise((e=>n=e)),o={isInjected:!1,isReady:()=>r,readyResolve:n,prefixes:[],registerCustomElements:null};t[e]=o}return t[e]}(t)||{},{isInjected:o,prefixes:c=[],registerCustomElements:s}=r,[f]=Object.entries(u()).filter((([e,r])=>e!==t&&r.prefixes.includes(n)));if(f)throw new Error(`Prefix '${n}' is already registered with version '${f[0]}' of the Porsche Design System. Please use a different one.\nTake a look at document.${i} for more details.`);o||(function(e){const t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}(e),r.isInjected=!0),c.includes(n)||(c.push(n),s&&s(n))}(Object.assign(Object.assign({},{version:"2.20.0-rc.1",script:("undefined"!==typeof window&&"cn"===window.PORSCHE_DESIGN_SYSTEM_CDN?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/components/porsche-design-system.v2.20.0-rc.1.9b9f5b5bef540f8dc284.js"}),e))},a=(e=document.body)=>{let t;const n=new Promise((e=>t=e)),r=()=>{p().then((()=>d(e,t)))};if(l())r();else{const e="readystatechange",t=()=>{l()&&(document.removeEventListener(e,t),r())};document.addEventListener(e,t)}return n},l=()=>"complete"===document.readyState,p=()=>{var e,t;if(null===(t=null===(e=document.porscheDesignSystem)||void 0===e?void 0:e["2.20.0-rc.1"])||void 0===t?void 0:t.isReady)return document.porscheDesignSystem["2.20.0-rc.1"].isReady();{let e;const t=new Promise((t=>e=t)),n={set(t,n,r){return"2.20.0-rc.1"===n&&r.isReady().then(e),Reflect.set(...arguments)}};return document.porscheDesignSystem=new Proxy(document.porscheDesignSystem||{},n),t}},d=(e,t)=>{const n=m(e);Promise.all(n).then((e=>t(e.length))).catch(console.error)},m=e=>{let t=[];return 1===(null==e?void 0:e.nodeType)&&Array.from(e.children).forEach((e=>{h(e)&&t.push(e.componentOnReady()),t=t.concat(m(e))})),t},y=/^(.*-)?P-(.*)$/,h=e=>y.exec(e.tagName)&&"function"==typeof e.componentOnReady;var v=s.z;const b=(0,o.createContext)({prefix:void 0}),w=({prefix:e="",...t})=>((0,o.useEffect)((()=>{v({prefix:e})}),[]),(0,r.jsx)(b.Provider,{value:{prefix:e},...t}))},8937:function(e,t,n){"use strict";n.d(t,{Lv:function(){return c},kg:function(){return o}});const r=e=>e.split(" ").filter((e=>e)),o=(e,t="",n="")=>{const o=r(t);let c=r(e);o.length&&(c=c.filter((e=>!o.includes(e))));return r(n).concat(c).join(" ")},c=(e,t)=>n=>{e.current=n,"function"===typeof t?t(n):null!==t&&(t.current=n)}},7544:function(e,t,n){e.exports=n(6029)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5852)}])},5852:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.r(t),n.d(t,{default:function(){return g}});var s=n(1799);function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function u(e){return i(e)}function f(e,t){return!t||"object"!==((n=t)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t;var n}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var l=n(5893),p=n(7544),d=n(7294),m=(n(8043),n(9008)),y=n.n(m),h=n(4493),v=n(9723),b=n(8937);const w=(0,d.forwardRef)((({theme:e="light",className:t,...n},r)=>{const o=(0,d.useRef)(),c=(0,v.AK)("p-toast");(0,v.Cs)((()=>{o.current.theme=e}),[e]);const s={...n,suppressHydrationWarning:!0,class:(0,v.Yf)(o,t),ref:(0,b.Lv)(o,r)};return(0,l.jsx)(c,{...s})}));var g=function(e){c(n,e);var t=a(n);function n(){return r(this,n),t.apply(this,arguments)}return n.prototype.render=function(){var e=this.props,t=e.Component,n=e.pageProps;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(y(),{children:[(0,l.jsx)("title",{children:"NextJS sample project"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"})]}),(0,l.jsxs)(h.b,{children:[(0,l.jsx)(t,(0,s.Z)({},n)),(0,l.jsx)(w,{})]})]})},n}(p.default)},8043:function(){},9008:function(e,t,n){e.exports=n(5443)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);