(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{644:function(e){"undefined"!=typeof self&&self,e.exports=function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){if("noModule"in HTMLScriptElement.prototype){const t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}}e.r(t),e.d(t,{componentsReady:function(){return s},load:function(){return o}});const r="porscheDesignSystem",o=(e={prefix:""})=>{!function({script:e,version:t,prefix:o}){var s;const a=null!==(s=function(e){const t=(document[r]||(document[r]={}),document[r]),{[e]:n=null}=t;if(null===n){const n={isLoaded:!1,prefixes:[],registerCustomElements:null};t[e]=n}return t[e]}(t))&&void 0!==s?s:{},{isLoaded:c,prefixes:i,registerCustomElements:u}=a;c||(n(e),a.isLoaded=!0),i.includes(o)||(i.push(o),u&&u(o))}(Object.assign(Object.assign({},{version:"2.11.0",script:("undefined"!==typeof window&&"cn"===window.PORSCHE_DESIGN_SYSTEM_CDN?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/components/porsche-design-system.v2.11.0.ff92f62c977022510d48.js"}),e))},s=(e=document.body)=>{let t;const n=new Promise((e=>t=e));if(a())c(e,t);else{const n="readystatechange",r=()=>{a()&&(document.removeEventListener(n,r),c(e,t))};document.addEventListener(n,r)}return n},a=()=>"complete"===document.readyState,c=(e,t)=>{const n=i(e);Promise.all(n).then((e=>t(e.length))).catch(console.error)},i=e=>{let t=[];return 1===(null==e?void 0:e.nodeType)&&Array.from(e.children).forEach((e=>{l(e)&&t.push(e.componentOnReady()),t=t.concat(i(e))})),t},u=/^(.*-)?P-(.*)$/,l=e=>u.exec(e.tagName)&&"function"==typeof e.componentOnReady;return t}()},8624:function(e,t,n){"use strict";n.d(t,{Eq:function(){return O},Es:function(){return C},O9:function(){return _},OV:function(){return N},Po:function(){return D},S1:function(){return v},Sn:function(){return L},Ss:function(){return I},T2:function(){return T},To:function(){return P},ZI:function(){return M},_J:function(){return R},_R:function(){return w},aC:function(){return S},bL:function(){return i},dq:function(){return y},eb:function(){return j},ow:function(){return k},qE:function(){return z},r6:function(){return E},rY:function(){return x},rp:function(){return g},tF:function(){return m},wd:function(){return b}});var r=n(644),o=n(5893),s=n(7294);const a=(0,s.createContext)({prefix:void 0,usesSkeletons:void 0}),c=()=>"undefined"!==typeof window&&!!document.querySelector("style[uses-skeleton]"),i=({prefix:e="",usesSkeletons:t=c(),...n})=>((0,s.useEffect)((()=>{(0,r.load)({prefix:e})}),[e]),(0,o.jsx)(a.Provider,{value:{prefix:e,usesSkeletons:t},...n})),u=e=>e.split(" ").filter((e=>e)),l=(e,t)=>n=>{e.current=n,"function"===typeof t?t(n):null!==t&&(t.current=n)};const f=e=>{{const{prefix:t}=(0,s.useContext)(a);if(void 0===t)throw new Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},d=(e,t,n)=>{(0,s.useEffect)((()=>{const{current:r}=e;if(r&&n)return r.addEventListener(t,n),()=>null===r||void 0===r?void 0:r.removeEventListener(t,n)}),[n])},p=(e,t)=>{const n=(0,s.useRef)();return(0,s.useMemo)((()=>{if(!t)return;const{current:r}=e;let o=t;return r&&(o=((e,t="",n="")=>{const r=u(t);let o=u(e);return r.length&&(o=o.filter((e=>!r.includes(e)))),u(n).concat(o).join(" ")})(r.className,n.current,t),r.className=o),n.current=t,o}),[t])},h="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,m=()=>{const e=f("p-toast");return{addMessage:t=>{const n=document.querySelector(e);customElements.whenDefined(e).then((()=>n.addMessage(t)))}}},g=(0,s.forwardRef)((({compact:e,heading:t,onAccordionChange:n,open:r,size:a="small",tag:c="h2",theme:i="light",className:u,...m},g)=>{const b=(0,s.useRef)();d(b,"accordionChange",n);const y=f("p-accordion"),w=[e,t,r,a,c,i];h((()=>{const{current:e}=b;["compact","heading","open","size","tag","theme"].forEach(((t,n)=>e[t]=w[n]))}),w);const v={...m,class:p(b,u),ref:l(b,g)};return(0,o.jsx)(y,{...v})})),b=(0,s.forwardRef)((({aria:e,disabled:t=!1,hideLabel:n=!1,icon:r="arrow-head-right",iconSource:a,loading:c=!1,tabbable:i=!0,theme:u="light",type:d="submit",variant:m="secondary",className:g,...b},y)=>{const w=(0,s.useRef)(),v=f("p-button"),x=[e,t,n,r,a,c,i,u,d,m];h((()=>{const{current:e}=w;["aria","disabled","hideLabel","icon","iconSource","loading","tabbable","theme","type","variant"].forEach(((t,n)=>e[t]=x[n]))}),x);const R={...b,class:p(w,g),ref:l(w,y)};return(0,o.jsx)(v,{...R})})),y=(0,s.forwardRef)((({active:e=!1,alignLabel:t="right",aria:n,disabled:r=!1,hideLabel:a=!1,icon:c="arrow-head-right",iconSource:i,loading:u=!1,size:d="small",stretch:m=!1,tabbable:g=!0,theme:b="light",type:y="submit",weight:w="regular",className:v,...x},R)=>{const j=(0,s.useRef)(),P=f("p-button-pure"),E=[e,t,n,r,a,c,i,u,d,m,g,b,y,w];h((()=>{const{current:e}=j;["active","alignLabel","aria","disabled","hideLabel","icon","iconSource","loading","size","stretch","tabbable","theme","type","weight"].forEach(((t,n)=>e[t]=E[n]))}),E);const O={...x,class:p(j,v),ref:l(j,R)};return(0,o.jsx)(P,{...O})})),w=(0,s.forwardRef)((({hideLabel:e=!1,label:t="",message:n="",state:r="none",className:a,...c},i)=>{const u=(0,s.useRef)(),d=f("p-checkbox-wrapper"),m=[e,t,n,r];h((()=>{const{current:e}=u;["hideLabel","label","message","state"].forEach(((t,n)=>e[t]=m[n]))}),m);const g={...c,class:p(u,a),ref:l(u,i)};return(0,o.jsx)(d,{...g})})),v=(0,s.forwardRef)((({color:e="neutral-contrast-low",orientation:t="horizontal",theme:n="light",className:r,...a},c)=>{const i=(0,s.useRef)(),u=f("p-divider"),d=[e,t,n];h((()=>{const{current:e}=i;["color","orientation","theme"].forEach(((t,n)=>e[t]=d[n]))}),d);const m={...a,class:p(i,r),ref:l(i,c)};return(0,o.jsx)(u,{...m})})),x=(0,s.forwardRef)((({alignContent:e="stretch",alignItems:t="stretch",direction:n="row",inline:r=!1,justifyContent:a="flex-start",wrap:c="nowrap",className:i,...u},d)=>{const m=(0,s.useRef)(),g=f("p-flex"),b=[e,t,n,r,a,c];h((()=>{const{current:e}=m;["alignContent","alignItems","direction","inline","justifyContent","wrap"].forEach(((t,n)=>e[t]=b[n]))}),b);const y={...u,class:p(m,i),ref:l(m,d)};return(0,o.jsx)(g,{...y})})),R=(0,s.forwardRef)((({alignSelf:e="auto",flex:t="initial",grow:n=0,offset:r="none",shrink:a=1,width:c="auto",className:i,...u},d)=>{const m=(0,s.useRef)(),g=f("p-flex-item"),b=[e,t,n,r,a,c];h((()=>{const{current:e}=m;["alignSelf","flex","grow","offset","shrink","width"].forEach(((t,n)=>e[t]=b[n]))}),b);const y={...u,class:p(m,i),ref:l(m,d)};return(0,o.jsx)(g,{...y})})),j=(0,s.forwardRef)((({direction:e="row",gutter:t={base:16,s:24,m:36},wrap:n="wrap",className:r,...a},c)=>{const i=(0,s.useRef)(),u=f("p-grid"),d=[e,t,n];h((()=>{const{current:e}=i;["direction","gutter","wrap"].forEach(((t,n)=>e[t]=d[n]))}),d);const m={...a,class:p(i,r),ref:l(i,c)};return(0,o.jsx)(u,{...m})})),P=(0,s.forwardRef)((({offset:e=0,size:t=1,className:n,...r},a)=>{const c=(0,s.useRef)(),i=f("p-grid-item"),u=[e,t];h((()=>{const{current:e}=c;["offset","size"].forEach(((t,n)=>e[t]=u[n]))}),u);const d={...r,class:p(c,n),ref:l(c,a)};return(0,o.jsx)(i,{...d})})),E=(0,s.forwardRef)((({align:e="left",color:t="default",ellipsis:n=!1,tag:r,theme:a="light",variant:c="headline-1",className:i,...u},d)=>{const m=(0,s.useRef)(),g=f("p-headline"),b=[e,t,n,r,a,c];h((()=>{const{current:e}=m;["align","color","ellipsis","tag","theme","variant"].forEach(((t,n)=>e[t]=b[n]))}),b);const y={...u,class:p(m,i),ref:l(m,d)};return(0,o.jsx)(g,{...y})})),O=(0,s.forwardRef)((({aria:e,color:t="default",lazy:n=!1,name:r="arrow-head-right",size:a="small",source:c,theme:i="light",className:u,...d},m)=>{const g=(0,s.useRef)(),b=f("p-icon"),y=[e,t,n,r,a,c,i];h((()=>{const{current:e}=g;["aria","color","lazy","name","size","source","theme"].forEach(((t,n)=>e[t]=y[n]))}),y);const w={...d,class:p(g,u),ref:l(g,m)};return(0,o.jsx)(b,{...w})})),L=(0,s.forwardRef)((({aria:e,download:t,hideLabel:n=!1,href:r,icon:a="arrow-head-right",iconSource:c,rel:i,target:u="_self",theme:d="light",variant:m="secondary",className:g,...b},y)=>{const w=(0,s.useRef)(),v=f("p-link"),x=[e,t,n,r,a,c,i,u,d,m];h((()=>{const{current:e}=w;["aria","download","hideLabel","href","icon","iconSource","rel","target","theme","variant"].forEach(((t,n)=>e[t]=x[n]))}),x);const R={...b,class:p(w,g),ref:l(w,y)};return(0,o.jsx)(v,{...R})})),_=(0,s.forwardRef)((({active:e=!1,alignLabel:t="right",aria:n,download:r,hideLabel:a=!1,href:c,icon:i="arrow-head-right",iconSource:u,rel:d,size:m="small",stretch:g=!1,target:b="_self",theme:y="light",weight:w="regular",className:v,...x},R)=>{const j=(0,s.useRef)(),P=f("p-link-pure"),E=[e,t,n,r,a,c,i,u,d,m,g,b,y,w];h((()=>{const{current:e}=j;["active","alignLabel","aria","download","hideLabel","href","icon","iconSource","rel","size","stretch","target","theme","weight"].forEach(((t,n)=>e[t]=E[n]))}),E);const O={...x,class:p(j,v),ref:l(j,R)};return(0,o.jsx)(P,{...O})})),S=(0,s.forwardRef)((({activePage:e=1,allyLabel:t="Pagination",allyLabelNext:n="Next page",allyLabelPage:r="Page",allyLabelPrev:a="Previous page",itemsPerPage:c=1,maxNumberOfPageLinks:i={base:5,xs:7},onPageChange:u,theme:m="light",totalItemsCount:g=1,className:b,...y},w)=>{const v=(0,s.useRef)();d(v,"pageChange",u);const x=f("p-pagination"),R=[e,t,n,r,a,c,i,m,g];h((()=>{const{current:e}=v;["activePage","allyLabel","allyLabelNext","allyLabelPage","allyLabelPrev","itemsPerPage","maxNumberOfPageLinks","theme","totalItemsCount"].forEach(((t,n)=>e[t]=R[n]))}),R);const j={...y,class:p(v,b),ref:l(v,w)};return(0,o.jsx)(x,{...j})})),N=(0,s.forwardRef)((({aria:e,description:t,direction:n="bottom",className:r,...a},c)=>{const i=(0,s.useRef)(),u=f("p-popover"),d=[e,t,n];h((()=>{const{current:e}=i;["aria","description","direction"].forEach(((t,n)=>e[t]=d[n]))}),d);const m={...a,class:p(i,r),ref:l(i,c)};return(0,o.jsx)(u,{...m})})),C=(0,s.forwardRef)((({hideLabel:e=!1,label:t="",message:n="",state:r="none",className:a,...c},i)=>{const u=(0,s.useRef)(),d=f("p-radio-button-wrapper"),m=[e,t,n,r];h((()=>{const{current:e}=u;["hideLabel","label","message","state"].forEach(((t,n)=>e[t]=m[n]))}),m);const g={...c,class:p(u,a),ref:l(u,i)};return(0,o.jsx)(d,{...g})})),k=(0,s.forwardRef)((({description:e="",dropdownDirection:t="auto",filter:n=!1,hideLabel:r=!1,label:a="",message:c="",native:i=!1,state:u="none",theme:d="light",className:m,...g},b)=>{const y=(0,s.useRef)(),w=f("p-select-wrapper"),v=[e,t,n,r,a,c,i,u,d];h((()=>{const{current:e}=y;["description","dropdownDirection","filter","hideLabel","label","message","native","state","theme"].forEach(((t,n)=>e[t]=v[n]))}),v);const x={...g,class:p(y,m),ref:l(y,b)};return(0,o.jsx)(w,{...x})})),z=(0,s.forwardRef)((({aria:e,size:t="small",theme:n="light",className:r,...a},c)=>{const i=(0,s.useRef)(),u=f("p-spinner"),d=[e,t,n];h((()=>{const{current:e}=i;["aria","size","theme"].forEach(((t,n)=>e[t]=d[n]))}),d);const m={...a,class:p(i,r),ref:l(i,c)};return(0,o.jsx)(u,{...m})})),T=(0,s.forwardRef)((({align:e="left",color:t="default",ellipsis:n=!1,size:r="small",tag:a="p",theme:c="light",weight:i="regular",className:u,...d},m)=>{const g=(0,s.useRef)(),b=f("p-text"),y=[e,t,n,r,a,c,i];h((()=>{const{current:e}=g;["align","color","ellipsis","size","tag","theme","weight"].forEach(((t,n)=>e[t]=y[n]))}),y);const w={...d,class:p(g,u),ref:l(g,m)};return(0,o.jsx)(b,{...w})})),M=(0,s.forwardRef)((({description:e="",hideLabel:t=!1,label:n="",message:r="",showCharacterCount:a=!0,state:c="none",unit:i="",unitPosition:u="prefix",className:d,...m},g)=>{const b=(0,s.useRef)(),y=f("p-text-field-wrapper"),w=[e,t,n,r,a,c,i,u];h((()=>{const{current:e}=b;["description","hideLabel","label","message","showCharacterCount","state","unit","unitPosition"].forEach(((t,n)=>e[t]=w[n]))}),w);const v={...m,class:p(b,d),ref:l(b,g)};return(0,o.jsx)(y,{...v})})),I=(0,s.forwardRef)((({description:e="",hideLabel:t=!1,label:n="",message:r="",showCharacterCount:a=!0,state:c="none",className:i,...u},d)=>{const m=(0,s.useRef)(),g=f("p-textarea-wrapper"),b=[e,t,n,r,a,c];h((()=>{const{current:e}=m;["description","hideLabel","label","message","showCharacterCount","state"].forEach(((t,n)=>e[t]=b[n]))}),b);const y={...u,class:p(m,i),ref:l(m,d)};return(0,o.jsx)(g,{...y})})),D=(0,s.forwardRef)((({theme:e="light",className:t,...n},r)=>{const a=(0,s.useRef)(),c=f("p-toast");h((()=>{a.current.theme=e}),[e]);const i={...n,class:p(a,t),ref:l(a,r)};return(0,o.jsx)(c,{...i})}))},7544:function(e,t,n){e.exports=n(4297)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3847)}])},4297:function(e,t,n){"use strict";var r,o=(r=n(4051))&&r.__esModule?r:{default:r};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.default=void 0;var d=function(e){return e&&e.__esModule?e:{default:e}}(n(7294)),p=n(670);function h(e,t,n,r,o,s,a){try{var c=e[s](a),i=c.value}catch(u){return void n(u)}c.done?t(i):Promise.resolve(i).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){h(s,r,o,a,c,"next",e)}function c(e){h(s,r,o,a,c,"throw",e)}a(void 0)}))}}function g(e){return b.apply(this,arguments)}function b(){return(b=m(o.default.mark((function e(t){var n,r,s;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,p.loadGetInitialProps(n,r);case 3:return s=e.sent,e.abrupt("return",{pageProps:s});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,r,o=f(c);function c(){return s(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return d.default.createElement(t,Object.assign({},n))}}])&&a(t.prototype,n),r&&a(t,r),c}(d.default.Component);t.default=y,y.origGetInitialProps=g,y.getInitialProps=g},3847:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),o=n(7544),s=(n(7294),n(4035),n(9008)),a=n.n(s),c=n(8624);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function d(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return n.prototype.render=function(){var e=this.props,t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"NextJS sample project"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"})]}),(0,r.jsxs)(c.bL,{usesSkeletons:!0,children:[(0,r.jsx)(t,f({},n)),(0,r.jsx)(c.Po,{})]})]})},n}(o.default)},4035:function(){},9008:function(e,t,n){e.exports=n(3121)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);