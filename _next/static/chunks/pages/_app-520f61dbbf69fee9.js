(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{7544:function(e,t,n){e.exports=n(5035)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9085)}])},9085:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),s=n(7544),o=n.n(s),i=n(7294);n(8202);var c=n(9008),u=n.n(c),d=n(1218),l=n(4001),f=n(9607);let a=(0,i.forwardRef)(({theme:e,className:t,...n},s)=>{let o=(0,i.useRef)(),c=(0,l.AK)("p-toast"),u=(0,l.Fg)();(0,l.Cs)(()=>{o.current.theme=e||u},[e,u]);let d={...n,suppressHydrationWarning:!0,class:(0,l.Yf)(o,t),ref:(0,f.Lv)(o,s)};return(0,r.jsx)(c,{...d})});class m extends o(){render(){let{Component:e,pageProps:t}=this.props;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:"NextJS sample project"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"})]}),(0,r.jsxs)(d.b,{children:[(0,r.jsx)(e,{...t}),(0,r.jsx)(a,{})]})]})}}},8202:function(){},9008:function(e,t,n){e.exports=n(2636)},4001:function(e,t,n){"use strict";n.d(t,{$0:function(){return u},AK:function(){return i},Cs:function(){return l},Fg:function(){return c},Yf:function(){return d},tF:function(){return f}});var r=n(7294),s=n(1218),o=n(9607);let i=e=>{{let{prefix:t}=(0,r.useContext)(s.c);if(void 0===t)throw Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},c=()=>(0,r.useContext)(s.c).theme,u=(e,t,n)=>{(0,r.useEffect)(()=>{let{current:r}=e;if(r&&n)return r.addEventListener(t,n),()=>r?.removeEventListener(t,n)},[n])},d=(e,t)=>{let n=(0,r.useRef)();return(0,r.useMemo)(()=>{if(!t)return;let{current:r}=e,s=t;return r&&(s=(0,o.kg)(r.className,n.current,t),r.className=s),n.current=t,s},[t])},l="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,f=()=>{let e=i("p-toast");return{addMessage:t=>{let n=document.body.querySelector(e);customElements.whenDefined(e).then(()=>n.addMessage(t))}}}},1218:function(e,t,n){"use strict";n.d(t,{c:function(){return w},b:function(){return v}});var r=n(5893),s=n(7294),o={d:(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},i={};o.d(i,{l:()=>l,z:()=>d});let c="porscheDesignSystem";function u(){return document[c]||(document[c]={}),document[c]}let d=(e={})=>{let t="PORSCHE_DESIGN_SYSTEM_CDN";window[t]=e.cdn||window[t]||(window.location.origin.match(/\.cn$/)?"cn":"auto");let n="porscheDesignSystem";document[n]||(document[n]={}),document[n].cdn={url:"https://cdn.ui.porsche."+("cn"===window[t]?"cn":"com"),prefixes:[]},function({script:e,version:t,prefix:n}){let r=function(e){let t=u(),{[e]:n}=t;if(!n){let n=()=>{},r=new Promise(e=>n=e);t[e]={isInjected:!1,isReady:()=>r,readyResolve:n,prefixes:[],registerCustomElements:null}}return t[e]}(t),{isInjected:s,prefixes:o=[],registerCustomElements:i}=r,[d]=Object.entries(u()).filter(([e,r])=>e!==t&&"object"==typeof r&&r.prefixes.includes(n));if(d)throw Error(`[Porsche Design System v${t}] prefix '${n}' is already registered with version '${d[0]}' of the Porsche Design System. Please use a different one.
Take a look at document.${c} for more details.`);s||(function(e){let t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}(e),r.isInjected=!0),o.includes(n)||(o.push(n),i&&i(n))}({version:"3.10.0-rc.5",script:document[n].cdn.url+"/porsche-design-system/components/porsche-design-system.v3.10.0-rc.5.a24d41457159bf70a7b9.js",prefix:e.prefix||""})},l=(e=document.body)=>{let t;let n=new Promise(e=>t=e),r=()=>{a().then(()=>m(e,t))};if(f())r();else{let e="readystatechange",t=()=>{f()&&(document.removeEventListener(e,t),r())};document.addEventListener(e,t)}return n},f=()=>"complete"===document.readyState,a=()=>{if(document.porscheDesignSystem?.["3.10.0-rc.5"]?.isReady)return document.porscheDesignSystem["3.10.0-rc.5"].isReady();{let e;let t=new Promise(t=>e=t);return document.porscheDesignSystem=new Proxy(document.porscheDesignSystem||{},{set(t,n,r){return"3.10.0-rc.5"===n&&r.isReady().then(e),Reflect.set(...arguments)}}),t}},m=(e,t)=>{let n=p(e);Promise.all(n).then(e=>t(e.length)).catch(e=>console.error("[Porsche Design System]",e))},p=e=>{let t=[];return 1===e?.nodeType&&Array.from(e.children).forEach(e=>{y(e)&&t.push(e.componentOnReady()),t=t.concat(p(e))}),t},h=/^(.*-)?P-(.*)$/,y=e=>h.exec(e.tagName)&&"function"==typeof e.componentOnReady;i.l;var g=i.z;let w=(0,s.createContext)({prefix:void 0,theme:"light"}),v=({prefix:e="",cdn:t,theme:n="light",...o})=>((0,s.useEffect)(()=>{g({prefix:e,cdn:t})},[]),(0,r.jsx)(w.Provider,{value:{prefix:e,theme:n},...o}))},9607:function(e,t,n){"use strict";n.d(t,{Lv:function(){return o},kg:function(){return s}});let r=e=>e.split(" ").filter(e=>e),s=(e,t="",n="")=>{let s=r(t),o=r(e);s.length&&(o=o.filter(e=>!s.includes(e)));let i=r(n);return i.concat(o).join(" ")},o=(e,t)=>n=>{e.current=n,"function"==typeof t?t(n):null!==t&&(t.current=n)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);