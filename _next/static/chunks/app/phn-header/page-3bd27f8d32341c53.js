(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{7134:(e,t,r)=>{Promise.resolve().then(r.bind(r,8588))},8588:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(5155),s=r(8418),o=r(2453),i=r(8321);function c(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{style:{paddingTop:180},children:[(0,n.jsx)(s.PButton,{children:"Some PButton"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(o.PLinkPure,{href:"https://porsche.com",children:"Some PLinkPure"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.PIcon,{name:"configurate"}),(0,n.jsx)(i.PIcon,{name:"compare"}),(0,n.jsx)(i.PIcon,{name:"search"})]})})}r(2115)},562:(e,t,r)=>{"use strict";r.d(t,{DK:()=>d,DP:()=>a,Mh:()=>c,Qh:()=>u,bQ:()=>l,skipCheckForPorscheDesignSystemProviderDuringTests:()=>i,useToastManager:()=>m});var n=r(2115),s=r(7122),o=r(6937);let i=()=>{},c=e=>{{let{prefix:t}=(0,n.useContext)(s.X);if(void 0===t)throw Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},a=()=>(0,n.useContext)(s.X).theme,d=(e,t,r)=>{(0,n.useEffect)(()=>{let{current:n}=e;if(n&&r)return n.addEventListener(t,r),()=>null==n?void 0:n.removeEventListener(t,r)},[r])},u=(e,t)=>{let r=(0,n.useRef)(void 0);return(0,n.useMemo)(()=>{if(!t)return;let{current:n}=e,s=t;return n&&(s=(0,o.iZ)(n.className,r.current,t),n.className=s),r.current=t,s},[t])},l="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,m=()=>{let e=c("p-toast");return{addMessage:t=>{let r=document.body.querySelector(e);customElements.whenDefined(e).then(()=>r.addMessage(t))}}}},8418:(e,t,r)=>{"use strict";r.d(t,{PButton:()=>c});var n=r(5155),s=r(2115),o=r(562),i=r(6937);let c=(0,s.forwardRef)((e,t)=>{let{aria:r,compact:c=!1,disabled:a=!1,hideLabel:d=!1,icon:u="none",iconSource:l,loading:m=!1,name:h,theme:p,type:f="submit",value:y,variant:g="primary",className:v,children:P,...w}=e,b=(0,s.useRef)(void 0),x=(0,o.Mh)("p-button"),E=[r,c,a,d,u,l,m,h,p||(0,o.DP)(),f,y,g];(0,o.bQ)(()=>{let{current:e}=b;["aria","compact","disabled","hideLabel","icon","iconSource","loading","name","theme","type","value","variant"].forEach((t,r)=>e[t]=E[r])},E);let D={...w,children:P,suppressHydrationWarning:!0,"data-ssr":"",class:(0,o.Qh)(b,v),ref:(0,i.Dk)(b,t)};return(0,n.jsx)(x,{...D})})},8321:(e,t,r)=>{"use strict";r.d(t,{PIcon:()=>c});var n=r(5155),s=r(2115),o=r(562),i=r(6937);let c=(0,s.forwardRef)((e,t)=>{let{aria:r,color:c="primary",lazy:a,name:d="arrow-right",size:u="small",source:l,theme:m,className:h,...p}=e,f=(0,s.useRef)(void 0),y=(0,o.Mh)("p-icon"),g=[r,c,a,d,u,l,m||(0,o.DP)()];(0,o.bQ)(()=>{let{current:e}=f;["aria","color","lazy","name","size","source","theme"].forEach((t,r)=>e[t]=g[r])},g);let v={...p,suppressHydrationWarning:!0,"data-ssr":"",class:(0,o.Qh)(f,h),ref:(0,i.Dk)(f,t)};return(0,n.jsx)(y,{...v})})},2453:(e,t,r)=>{"use strict";r.d(t,{PLinkPure:()=>c});var n=r(5155),s=r(2115),o=r(562),i=r(6937);let c=(0,s.forwardRef)((e,t)=>{let{active:r=!1,alignLabel:c="end",aria:a,download:d,hideLabel:u=!1,href:l,icon:m="arrow-right",iconSource:h,rel:p,size:f="small",stretch:y=!1,target:g="_self",theme:v,underline:P=!1,weight:w="regular",className:b,children:x,...E}=e,D=(0,s.useRef)(void 0),j=(0,o.Mh)("p-link-pure"),S=[r,c,a,d,u,l,m,h,p,f,y,g,v||(0,o.DP)(),P,w];(0,o.bQ)(()=>{let{current:e}=D;["active","alignLabel","aria","download","hideLabel","href","icon","iconSource","rel","size","stretch","target","theme","underline","weight"].forEach((t,r)=>e[t]=S[r])},S);let k={...E,children:x,suppressHydrationWarning:!0,"data-ssr":"",class:(0,o.Qh)(D,b),ref:(0,i.Dk)(D,t)};return(0,n.jsx)(j,{...k})})},7122:(e,t,r)=>{"use strict";r.d(t,{X:()=>P,PorscheDesignSystemProvider:()=>w});var n=r(5155),s=r(2115),o={d:(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},i={};o.d(i,{O:()=>l,H:()=>d});let c="porscheDesignSystem";function a(){return document[c]||(document[c]={}),document[c]}let d=(e={})=>{let t="PORSCHE_DESIGN_SYSTEM_CDN";window[t]=e.cdn||window[t]||(window.location.origin.match(/\.cn$/)?"cn":"auto");let r="porscheDesignSystem";document[r]||(document[r]={}),document[r].cdn={url:"https://cdn.ui.porsche."+("cn"===window[t]?"cn":"com"),prefixes:[]},function({script:e,version:t,prefix:r}){let n=function(e){let t=a(),{[e]:r}=t;if(!r){let r=()=>{},n=new Promise(e=>r=e);t[e]={isInjected:!1,isReady:()=>n,readyResolve:r,prefixes:[],registerCustomElements:null}}return t[e]}(t),{isInjected:s,prefixes:o=[],registerCustomElements:i}=n,[d]=Object.entries(a()).filter(([e,n])=>e!==t&&"object"==typeof n&&n.prefixes.includes(r));if(d)throw Error(`[Porsche Design System v${t}] prefix '${r}' is already registered with version '${d[0]}' of the Porsche Design System. Please use a different one.
Take a look at document.${c} for more details.`);s||(function(e){let t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}(e),n.isInjected=!0),o.includes(r)||(o.push(r),i&&i(r))}({version:"3.24.0",script:document[r].cdn.url+"/porsche-design-system/components/porsche-design-system.v3.24.0.c01565aed778dac3ba5b.js",prefix:e.prefix||""})},u={loading:0,interactive:1,complete:2},l=(e=document.body,t="complete")=>{let r;let n=new Promise(e=>r=e),s=()=>{h().then(()=>p(e,r))};if(m(t))s();else{let e="readystatechange",r=()=>{m(t)&&(document.removeEventListener(e,r),s())};document.addEventListener(e,r)}return n},m=e=>u[document.readyState]>=u[e],h=()=>{let e;if(document.porscheDesignSystem?.["3.24.0"]?.isReady)return document.porscheDesignSystem["3.24.0"].isReady();let t=new Promise(t=>e=t);return document.porscheDesignSystem=new Proxy(document.porscheDesignSystem||{},{set(t,r,n){return"3.24.0"===r&&n.isReady().then(e),Reflect.set(...arguments)}}),t},p=(e,t)=>{Promise.all(f(e)).then(e=>t(e.length)).catch(e=>console.error("[Porsche Design System]",e))},f=e=>{let t=[],r=[e];for(;r.length>0;){let e=r.pop();e.nodeType===Node.ELEMENT_NODE&&(g(e)&&t.push(e.componentOnReady()),r.push(...Array.from(e.children)))}return t},y=/^(.*-)?P-(.*)$/,g=e=>y.test(e.tagName)&&"function"==typeof e.componentOnReady;i.O;var v=i.H;let P=(0,s.createContext)({prefix:void 0,theme:"light"}),w=e=>{let{prefix:t="",cdn:r,theme:o="light",...i}=e;return(0,s.useEffect)(()=>{v({prefix:t,cdn:r})},[]),(0,n.jsx)(P.Provider,{value:{prefix:t,theme:o},...i})}},6937:(e,t,r)=>{"use strict";r.d(t,{Dk:()=>o,iZ:()=>s});let n=e=>e.split(" ").filter(e=>e),s=(e,t="",r="")=>{let s=n(t),o=n(e);return s.length&&(o=o.filter(e=>!s.includes(e))),n(r).concat(o).join(" ")},o=(e,t)=>r=>{e.current=r,"function"==typeof t?t(r):null!==t&&(t.current=r)}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,899,358],()=>t(7134)),_N_E=e.O()}]);