"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{562:(e,t,r)=>{r.d(t,{DK:()=>d,DP:()=>l,Mh:()=>i,Qh:()=>c,bQ:()=>u,skipCheckForPorscheDesignSystemProviderDuringTests:()=>o,useToastManager:()=>p});var s=r(2115),n=r(7122),a=r(6937);let o=()=>{},i=e=>{{let{prefix:t}=(0,s.useContext)(n.PorscheDesignSystemContext);if(void 0===t)throw Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");return t?t+"-"+e:e}},l=()=>(0,s.useContext)(n.PorscheDesignSystemContext).theme,d=(e,t,r)=>{(0,s.useEffect)(()=>{let{current:s}=e;if(s&&r)return s.addEventListener(t,r),()=>null==s?void 0:s.removeEventListener(t,r)},[r])},c=(e,t)=>{let r=(0,s.useRef)(void 0);return(0,s.useMemo)(()=>{if(!t)return;let{current:s}=e,n=t;return s&&(n=(0,a.iZ)(s.className,r.current,t),s.className=n),r.current=t,n},[t])},u="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,p=()=>{let e=i("p-toast");return{addMessage:t=>{let r=document.body.querySelector(e);customElements.whenDefined(e).then(()=>r.addMessage(t))}}}},5228:(e,t,r)=>{r.d(t,{PButtonGroup:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{direction:r={base:"column",xs:"row"},className:i,children:l,...d}=e,c=(0,n.useRef)(void 0),u=(0,a.Mh)("p-button-group");(0,a.bQ)(()=>{c.current.direction=r},[r]);let p={...d,children:l,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(c,i),ref:(0,o.Dk)(c,t)};return(0,s.jsx)(u,{...p})})},8418:(e,t,r)=>{r.d(t,{PButton:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{aria:r,compact:i=!1,disabled:l=!1,form:d,hideLabel:c=!1,icon:u="none",iconSource:p,loading:f=!1,name:h,theme:m,type:g="submit",value:v,variant:y="primary",className:b,children:D,...w}=e,P=(0,n.useRef)(void 0),x=(0,a.Mh)("p-button"),R=[r,i,l,d,c,u,p,f,h,m||(0,a.DP)(),g,v,y];(0,a.bQ)(()=>{let{current:e}=P;["aria","compact","disabled","form","hideLabel","icon","iconSource","loading","name","theme","type","value","variant"].forEach((t,r)=>e[t]=R[r])},R);let E={...w,children:D,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(P,b),ref:(0,o.Dk)(P,t)};return(0,s.jsx)(x,{...E})})},1259:(e,t,r)=>{r.d(t,{PCheckboxWrapper:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{hideLabel:r=!1,label:i="",loading:l=!1,message:d="",state:c="none",theme:u,className:p,children:f,...h}=e,m=(0,n.useRef)(void 0),g=(0,a.Mh)("p-checkbox-wrapper"),v=[r,i,l,d,c,u||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=m;["hideLabel","label","loading","message","state","theme"].forEach((t,r)=>e[t]=v[r])},v);let y={...h,children:f,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(m,p),ref:(0,o.Dk)(m,t)};return(0,s.jsx)(g,{...y})})},2593:(e,t,r)=>{r.d(t,{PDivider:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{color:r="contrast-low",direction:i="horizontal",orientation:l,theme:d,className:c,...u}=e,p=(0,n.useRef)(void 0),f=(0,a.Mh)("p-divider"),h=[r,i,l,d||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=p;["color","direction","orientation","theme"].forEach((t,r)=>e[t]=h[r])},h);let m={...u,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(p,c),ref:(0,o.Dk)(p,t)};return(0,s.jsx)(f,{...m})})},8214:(e,t,r)=>{r.d(t,{PFlexItem:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{alignSelf:r="auto",flex:i="initial",grow:l=0,offset:d="none",shrink:c=1,width:u="auto",className:p,children:f,...h}=e,m=(0,n.useRef)(void 0),g=(0,a.Mh)("p-flex-item"),v=[r,i,l,d,c,u];(0,a.bQ)(()=>{let{current:e}=m;["alignSelf","flex","grow","offset","shrink","width"].forEach((t,r)=>e[t]=v[r])},v);let y={...h,children:f,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(m,p),ref:(0,o.Dk)(m,t)};return(0,s.jsx)(g,{...y})})},6719:(e,t,r)=>{r.d(t,{PFlex:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{alignContent:r="stretch",alignItems:i="stretch",direction:l="row",inline:d=!1,justifyContent:c="flex-start",wrap:u="nowrap",className:p,children:f,...h}=e,m=(0,n.useRef)(void 0),g=(0,a.Mh)("p-flex"),v=[r,i,l,d,c,u];(0,a.bQ)(()=>{let{current:e}=m;["alignContent","alignItems","direction","inline","justifyContent","wrap"].forEach((t,r)=>e[t]=v[r])},v);let y={...h,children:f,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(m,p),ref:(0,o.Dk)(m,t)};return(0,s.jsx)(g,{...y})})},4415:(e,t,r)=>{r.d(t,{PHeading:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{align:r="start",color:i="primary",ellipsis:l=!1,size:d="xx-large",tag:c,theme:u,className:p,children:f,...h}=e,m=(0,n.useRef)(void 0),g=(0,a.Mh)("p-heading"),v=[r,i,l,d,c,u||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=m;["align","color","ellipsis","size","tag","theme"].forEach((t,r)=>e[t]=v[r])},v);let y={...h,children:f,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(m,p),ref:(0,o.Dk)(m,t)};return(0,s.jsx)(g,{...y})})},2940:(e,t,r)=>{r.d(t,{PMultiSelectOption:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{disabled:r=!1,value:i,className:l,children:d,...c}=e,u=(0,n.useRef)(void 0),p=(0,a.Mh)("p-multi-select-option"),f=[r,i];(0,a.bQ)(()=>{let{current:e}=u;["disabled","value"].forEach((t,r)=>e[t]=f[r])},f);let h={...c,children:d,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(u,l),ref:(0,o.Dk)(u,t)};return(0,s.jsx)(p,{...h})})},2330:(e,t,r)=>{r.d(t,{PMultiSelect:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{description:r="",disabled:i=!1,dropdownDirection:l="auto",form:d,hideLabel:c=!1,label:u="",message:p="",name:f,onUpdate:h,required:m=!1,state:g="none",theme:v,value:y=[],className:b,children:D,...w}=e,P=(0,n.useRef)(void 0);(0,a.DK)(P,"update",h);let x=(0,a.Mh)("p-multi-select"),R=[r,i,l,d,c,u,p,f,m,g,v||(0,a.DP)(),y];(0,a.bQ)(()=>{let{current:e}=P;["description","disabled","dropdownDirection","form","hideLabel","label","message","name","required","state","theme","value"].forEach((t,r)=>e[t]=R[r])},R);let E={...w,children:D,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(P,b),ref:(0,o.Dk)(P,t)};return(0,s.jsx)(x,{...E})})},8323:(e,t,r)=>{r.d(t,{PPinCode:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{description:r="",disabled:i=!1,form:l,hideLabel:d=!1,label:c="",length:u=4,loading:p=!1,message:f="",name:h,onUpdate:m,required:g=!1,state:v="none",theme:y,type:b="number",value:D="",className:w,children:P,...x}=e,R=(0,n.useRef)(void 0);(0,a.DK)(R,"update",m);let E=(0,a.Mh)("p-pin-code"),Q=[r,i,l,d,c,u,p,f,h,g,v,y||(0,a.DP)(),b,D];(0,a.bQ)(()=>{let{current:e}=R;["description","disabled","form","hideLabel","label","length","loading","message","name","required","state","theme","type","value"].forEach((t,r)=>e[t]=Q[r])},Q);let k={...x,children:P,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(R,w),ref:(0,o.Dk)(R,t)};return(0,s.jsx)(E,{...k})})},7254:(e,t,r)=>{r.d(t,{PRadioButtonWrapper:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{hideLabel:r=!1,label:i="",loading:l=!1,message:d="",state:c="none",theme:u,className:p,children:f,...h}=e,m=(0,n.useRef)(void 0),g=(0,a.Mh)("p-radio-button-wrapper"),v=[r,i,l,d,c,u||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=m;["hideLabel","label","loading","message","state","theme"].forEach((t,r)=>e[t]=v[r])},v);let y={...h,children:f,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(m,p),ref:(0,o.Dk)(m,t)};return(0,s.jsx)(g,{...y})})},5418:(e,t,r)=>{r.d(t,{PSegmentedControlItem:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{aria:r,disabled:i=!1,icon:l,iconSource:d,label:c,value:u,className:p,children:f,selected:h,theme:m="light",...g}=e,v=(0,n.useRef)(void 0),y=(0,a.Mh)("p-segmented-control-item"),b=[r,i,l,d,c,u];(0,a.bQ)(()=>{let{current:e}=v;["aria","disabled","icon","iconSource","label","value"].forEach((t,r)=>e[t]=b[r])},b);let D={...g,children:f,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(v,p),ref:(0,o.Dk)(v,t)};return(0,s.jsx)(y,{...D})})},4798:(e,t,r)=>{r.d(t,{PSegmentedControl:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{backgroundColor:r,columns:i="auto",disabled:l=!1,form:d,name:c,onSegmentedControlChange:u,onUpdate:p,theme:f,value:h,className:m,children:g,...v}=e,y=(0,n.useRef)(void 0);(0,a.DK)(y,"segmentedControlChange",u),(0,a.DK)(y,"update",p);let b=(0,a.Mh)("p-segmented-control"),D=[r,i,l,d,c,f||(0,a.DP)(),h];(0,a.bQ)(()=>{let{current:e}=y;["backgroundColor","columns","disabled","form","name","theme","value"].forEach((t,r)=>e[t]=D[r])},D);let w={...v,children:g,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(y,m),ref:(0,o.Dk)(y,t)};return(0,s.jsx)(b,{...w})})},7988:(e,t,r)=>{r.d(t,{PSelectWrapper:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{description:r="",dropdownDirection:i="auto",filter:l=!1,hideLabel:d=!1,label:c="",message:u="",native:p=!1,state:f="none",theme:h,className:m,children:g,...v}=e,y=(0,n.useRef)(void 0),b=(0,a.Mh)("p-select-wrapper"),D=[r,i,l,d,c,u,p,f,h||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=y;["description","dropdownDirection","filter","hideLabel","label","message","native","state","theme"].forEach((t,r)=>e[t]=D[r])},D);let w={...v,children:g,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(y,m),ref:(0,o.Dk)(y,t)};return(0,s.jsx)(b,{...w})})},8289:(e,t,r)=>{r.d(t,{PStepperHorizontalItem:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{disabled:r=!1,state:i,className:l,children:d,theme:c="light",...u}=e,p=(0,n.useRef)(void 0),f=(0,a.Mh)("p-stepper-horizontal-item"),h=[r,i];(0,a.bQ)(()=>{let{current:e}=p;["disabled","state"].forEach((t,r)=>e[t]=h[r])},h);let m={...u,children:d,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(p,l),ref:(0,o.Dk)(p,t)};return(0,s.jsx)(f,{...m})})},4538:(e,t,r)=>{r.d(t,{PStepperHorizontal:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{onStepChange:r,onUpdate:i,size:l="small",theme:d,className:c,children:u,...p}=e,f=(0,n.useRef)(void 0);(0,a.DK)(f,"stepChange",r),(0,a.DK)(f,"update",i);let h=(0,a.Mh)("p-stepper-horizontal"),m=[l,d||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=f;["size","theme"].forEach((t,r)=>e[t]=m[r])},m);let g={...p,children:u,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(f,c),ref:(0,o.Dk)(f,t)};return(0,s.jsx)(h,{...g})})},2262:(e,t,r)=>{r.d(t,{PTextFieldWrapper:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{actionIcon:r,actionLoading:i=!1,description:l="",hideLabel:d=!1,label:c="",message:u="",onAction:p,showCharacterCount:f,showCounter:h=!0,showPasswordToggle:m=!0,state:g="none",submitButton:v=!0,theme:y,unit:b="",unitPosition:D="prefix",className:w,children:P,...x}=e,R=(0,n.useRef)(void 0);(0,a.DK)(R,"action",p);let E=(0,a.Mh)("p-text-field-wrapper"),Q=[r,i,l,d,c,u,f,h,m,g,v,y||(0,a.DP)(),b,D];(0,a.bQ)(()=>{let{current:e}=R;["actionIcon","actionLoading","description","hideLabel","label","message","showCharacterCount","showCounter","showPasswordToggle","state","submitButton","theme","unit","unitPosition"].forEach((t,r)=>e[t]=Q[r])},Q);let k={...x,children:P,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(R,w),ref:(0,o.Dk)(R,t)};return(0,s.jsx)(E,{...k})})},7347:(e,t,r)=>{r.d(t,{PText:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{align:r="start",color:i="primary",ellipsis:l=!1,size:d="small",tag:c="p",theme:u,weight:p="regular",className:f,children:h,...m}=e,g=(0,n.useRef)(void 0),v=(0,a.Mh)("p-text"),y=[r,i,l,d,c,u||(0,a.DP)(),p];(0,a.bQ)(()=>{let{current:e}=g;["align","color","ellipsis","size","tag","theme","weight"].forEach((t,r)=>e[t]=y[r])},y);let b={...m,children:h,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(g,f),ref:(0,o.Dk)(g,t)};return(0,s.jsx)(v,{...b})})},1110:(e,t,r)=>{r.d(t,{PTextareaWrapper:()=>i});var s=r(5155),n=r(2115),a=r(562),o=r(6937);let i=(0,n.forwardRef)((e,t)=>{let{description:r="",hideLabel:i=!1,label:l="",message:d="",showCharacterCount:c,showCounter:u=!0,state:p="none",theme:f,className:h,children:m,...g}=e,v=(0,n.useRef)(void 0),y=(0,a.Mh)("p-textarea-wrapper"),b=[r,i,l,d,c,u,p,f||(0,a.DP)()];(0,a.bQ)(()=>{let{current:e}=v;["description","hideLabel","label","message","showCharacterCount","showCounter","state","theme"].forEach((t,r)=>e[t]=b[r])},b);let D={...g,children:m,suppressHydrationWarning:!0,"data-ssr":"",class:(0,a.Qh)(v,h),ref:(0,o.Dk)(v,t)};return(0,s.jsx)(y,{...D})})},7122:(e,t,r)=>{r.d(t,{PorscheDesignSystemContext:()=>b,PorscheDesignSystemProvider:()=>D});var s=r(5155),n=r(2115),a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},o={};a.d(o,{O:()=>u,H:()=>d});let i="porscheDesignSystem";function l(){return document[i]||(document[i]={}),document[i]}let d=(e={})=>{let t="PORSCHE_DESIGN_SYSTEM_CDN";window[t]=e.cdn||window[t]||(window.location.origin.match(/\.cn$/)?"cn":"auto");let r="porscheDesignSystem";document[r]||(document[r]={}),document[r].cdn={url:"https://cdn.ui.porsche."+("cn"===window[t]?"cn":"com"),prefixes:[]},function({script:e,version:t,prefix:r}){let s=function(e){let t=l(),{[e]:r}=t;if(!r){let r=()=>{},s=new Promise(e=>r=e);t[e]={isInjected:!1,isReady:()=>s,readyResolve:r,prefixes:[],registerCustomElements:null}}return t[e]}(t),{isInjected:n,prefixes:a=[],registerCustomElements:o}=s,[d]=Object.entries(l()).filter(([e,s])=>e!==t&&"object"==typeof s&&s.prefixes.includes(r));if(d)throw Error(`[Porsche Design System v${t}] prefix '${r}' is already registered with version '${d[0]}' of the Porsche Design System. Please use a different one.
Take a look at document.${i} for more details.`);n||(function(e){let t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}(e),s.isInjected=!0),a.includes(r)||(a.push(r),o&&o(r))}({version:"3.27.0-rc.1",script:document[r].cdn.url+"/porsche-design-system/components/porsche-design-system.v3.27.0-rc.1.62f711906b6b331ed98b.js",prefix:e.prefix||""})},c={loading:0,interactive:1,complete:2},u=(e=document.body,t="complete")=>{let r;let s=new Promise(e=>r=e),n=()=>{f().then(()=>h(e,r))};if(p(t))n();else{let e="readystatechange",r=()=>{p(t)&&(document.removeEventListener(e,r),n())};document.addEventListener(e,r)}return s},p=e=>c[document.readyState]>=c[e],f=()=>{let e;if(document.porscheDesignSystem?.["3.27.0-rc.1"]?.isReady)return document.porscheDesignSystem["3.27.0-rc.1"].isReady();let t=new Promise(t=>e=t);return document.porscheDesignSystem=new Proxy(document.porscheDesignSystem||{},{set(t,r,s){return"3.27.0-rc.1"===r&&s.isReady().then(e),Reflect.set(...arguments)}}),t},h=(e,t)=>{Promise.all(m(e)).then(e=>t(e.length)).catch(e=>console.error("[Porsche Design System]",e))},m=e=>{let t=[],r=[e];for(;r.length>0;){let e=r.pop();e.nodeType===Node.ELEMENT_NODE&&(v(e)&&t.push(e.componentOnReady()),r.push(...Array.from(e.children)))}return t},g=/^(.*-)?P-(.*)$/,v=e=>g.test(e.tagName)&&"function"==typeof e.componentOnReady;o.O;var y=o.H;let b=(0,n.createContext)({prefix:void 0,theme:"light"}),D=e=>{let{prefix:t="",cdn:r,theme:a="light",...o}=e;return(0,n.useEffect)(()=>{y({prefix:t,cdn:r})},[]),(0,s.jsx)(b.Provider,{value:{prefix:t,theme:a},...o})}},6937:(e,t,r)=>{r.d(t,{Dk:()=>a,iZ:()=>n});let s=e=>e.split(" ").filter(e=>e),n=(e,t="",r="")=>{let n=s(t),a=s(e);return n.length&&(a=a.filter(e=>!n.includes(e))),s(r).concat(a).join(" ")},a=(e,t)=>r=>{e.current=r,"function"==typeof t?t(r):null!==t&&(t.current=r)}}}]);