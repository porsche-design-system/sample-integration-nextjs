(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{6742:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(5893),o=n(7294),a=n(9723),l=n(8937);const u=(0,o.forwardRef)((({color:e="neutral-contrast-low",orientation:t="horizontal",theme:n="light",className:u,...c},i)=>{const f=(0,o.useRef)(),s=(0,a.AK)("p-divider"),d=[e,t,n];(0,a.Cs)((()=>{const{current:e}=f;["color","orientation","theme"].forEach(((t,n)=>e[t]=d[n]))}),d);const p={...c,suppressHydrationWarning:!0,class:(0,a.Yf)(f,u),ref:(0,l.Lv)(f,i)};return(0,r.jsx)(s,{...p})}))},2295:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(5893),o=n(7294),a=n(9723),l=n(8937);const u=(0,o.forwardRef)((({align:e="left",color:t="default",ellipsis:n=!1,tag:u,theme:c="light",variant:i="headline-1",className:f,children:s,...d},p)=>{const v=(0,o.useRef)(),h=(0,a.AK)("p-headline"),y=[e,t,n,u,c,i];(0,a.Cs)((()=>{const{current:e}=v;["align","color","ellipsis","tag","theme","variant"].forEach(((t,n)=>e[t]=y[n]))}),y);const g={...d,children:s,suppressHydrationWarning:!0,class:(0,a.Yf)(v,f),ref:(0,l.Lv)(v,p)};return(0,r.jsx)(h,{...g})}))},4866:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(5893),o=n(7294),a=n(9723),l=n(8937);const u=(0,o.forwardRef)((({active:e=!1,alignLabel:t="right",aria:n,download:u,hideLabel:c=!1,href:i,icon:f="arrow-head-right",iconSource:s,rel:d,size:p="small",stretch:v=!1,target:h="_self",theme:y="light",weight:g="regular",className:b,children:m,...C},_)=>{const x=(0,o.useRef)(),L=(0,a.AK)("p-link-pure"),j=[e,t,n,u,c,i,f,s,d,p,v,h,y,g];(0,a.Cs)((()=>{const{current:e}=x;["active","alignLabel","aria","download","hideLabel","href","icon","iconSource","rel","size","stretch","target","theme","weight"].forEach(((t,n)=>e[t]=j[n]))}),j);const O={...C,children:m,suppressHydrationWarning:!0,class:(0,a.Yf)(x,b),ref:(0,l.Lv)(x,_)};return(0,r.jsx)(L,{...O})}))},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,l=o(n(7294)),u=n(6273),c=n(2725),i=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=l.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,g=e.children,b=e.prefetch,m=e.passHref,C=e.replace,_=e.shallow,x=e.scroll,L=e.locale,j=e.onClick,O=e.onMouseEnter,M=e.onTouchStart,R=e.legacyBehavior,w=void 0===R?!0!==Boolean(!1):R,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!w||"string"!==typeof n&&"number"!==typeof n||(n=l.default.createElement("a",null,n));var k=!1!==b,P=l.default.useContext(i.RouterContext),S=l.default.useContext(f.AppRouterContext);S&&(P=S);var T,I=l.default.useMemo((function(){var e=r(u.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?u.resolveHref(P,y):n||t}}),[P,o,y]),N=I.href,A=I.as,H=l.default.useRef(N),K=l.default.useRef(A);w&&(T=l.default.Children.only(n));var U=w?T&&"object"===typeof T&&T.ref:t,Z=r(s.useIntersection({rootMargin:"200px"}),3),B=Z[0],z=Z[1],D=Z[2],W=l.default.useCallback((function(e){K.current===A&&H.current===N||(D(),K.current=A,H.current=N),B(e),U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[A,U,N,D,B]);l.default.useEffect((function(){var e=z&&k&&u.isLocalURL(N),t="undefined"!==typeof L?L:P&&P.locale,n=v[N+"%"+A+(t?"%"+t:"")];e&&!n&&h(P,N,A,{locale:t})}),[A,N,z,L,k,P]);var Y={ref:W,onClick:function(e){w||"function"!==typeof j||j(e),w&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(d):d()}}(e,P,N,A,C,_,x,L,Boolean(S),k)},onMouseEnter:function(e){w||"function"!==typeof O||O(e),w&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!k&&S||u.isLocalURL(N)&&h(P,N,A,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof M||M(e),w&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!k&&S||u.isLocalURL(N)&&h(P,N,A,{priority:!0})}};if(!w||m||"a"===T.type&&!("href"in T.props)){var G="undefined"!==typeof L?L:P&&P.locale,q=P&&P.isLocaleDomain&&d.getDomainLocale(A,G,P.locales,P.domainLocales);Y.href=q||p.addBasePath(c.addLocale(A,G,P&&P.defaultLocale))}return w?l.default.cloneElement(T,Y):l.default.createElement("a",Object.assign({},E,Y),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!l,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),v=p[0],h=p[1];o.useEffect((function(){if(l){if(i||s)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),u.set(n,t),t}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[v,i,n,t,s]);var y=o.useCallback((function(){d(!1)}),[]);return[h,s,y]};var o=n(7294),a=n(9311),l="function"===typeof IntersectionObserver,u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=r.default.createContext(null);t.TemplateContext=u},1664:function(e,t,n){e.exports=n(8418)},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);