_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,s=void 0!==a&&a;return n||o&&s}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function $(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var u=d[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var f=o.props[u],$=r[u]||new Set;"name"===u&&s||!$.has(f)?($.add(f),r[u]=$):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:$,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},VFiF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/phn-header",function(){return n("dME+")}])},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),s=(n("qXWd"),n("48fX")),i=n("tCBg"),c=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){s(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),s=n("elyg"),i=n("nOHt"),c=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,s.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,$=f.as,p=e.children,h=e.replace,m=e.shallow,v=e.scroll,y=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=a.Children.only(p),b=g&&"object"===typeof g&&g.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),j=r(w,2),O=j[0],x=j[1],k=a.default.useCallback((function(e){O(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,O]);(0,a.useEffect)((function(){var e=x&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=l[d+"%"+$+(r?"%"+r:"")];e&&!o&&u(n,d,$,{locale:r})}),[$,d,x,y,t,n]);var M={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,$,h,m,v,y)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,$,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof y?y:n&&n.locale,R=(0,s.getDomainLocale)($,E,n&&n.locales,n&&n.domainLocales);M.href=R||(0,s.addBasePath)((0,s.addLocale)($,E,n&&n.defaultLocale))}return a.default.cloneElement(g,M)};t.default=f},"dME+":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("egVW"),a=(n("q1tI"),n("dRp5")),s=n("g4pe"),i=n.n(s);var c=n("es6t");var l=function(){c.e.load({prefix:"phn"})},u=function(e,t){return"undefined"===typeof window?Promise.resolve():Object(c.m)().then((function(){return l(),Object(c.d)([["phn-back-button_32",[[1,"phn-header",{accessToken:[1537,"access-token"],locale:[1537],env:[1537],config:[32],accessTokenState:[32],accessibilityStatement:[32],countryRecommenderContent:[32],scrolledPastHeader:[32],breakpoint:[32],showCountryRecommender:[32],countryRecommenderClosed:[32]},[[9,"scroll","scrollHandler"],[9,"message","newAuthMessageReceived"],[0,"logoutEvent","handleLogout"],[9,"resize","resizeHandler"]]],[2,"phn-mobile-layout",{assetsURL:[1,"assets-u-r-l"],featureToggles:[16]},[[0,"keydown","handleKeyDown"],[0,"menuOverlayOpen","handleMenuOverlayOpen"],[0,"menuOverlayClose","handleMenuOverlayClose"],[0,"closeAllDrawers","handleCloseAllDrawers"]]],[2,"phn-menu-desktop-level-1",{assetsURL:[1,"assets-u-r-l"],scrolledPastHeader:[4,"scrolled-past-header"],breakpoint:[2],activeOverlayPhraseId:[32],previousOverlayPhraseId:[32],mouseOnOverlay:[32],mouseOnButton:[32],overlayLabelledBy:[32]},[[0,"menuItemClick","handleMenuItemClick"],[0,"menuItemMouseEnter","handleMenuItemMouseEnter"],[0,"menuItemMouseLeave","handleMenuItemMouseLeave"],[0,"overlayMouseEnter","handleOverlayMouseEnter"],[0,"overlayMouseLeave","handleOverlayMouseLeave"],[0,"myPorscheRendered","myPorscheRendered"],[9,"resize","resizeHandler"],[0,"animationend","handleAnimationEnd"]]],[2,"phn-country-recommender",{locale:[16],env:[1],assetsURL:[1,"assets-u-r-l"],countrySelectorURL:[1,"country-selector-u-r-l"],content:[16],flagURL:[32],flagExists:[32]},[[0,"animationend","handleAnimationEnd"]]],[2,"phn-crest"],[2,"phn-preview-badge",{versionString:[1,"version-string"]}],[2,"phn-menu-mobile-level-1",{assetsURL:[1,"assets-u-r-l"],breakpoint:[32]},[[9,"resize","resizeHandler"]]],[2,"phn-shops-and-more-overview",{item:[16],triggerAnalyticsEvent:[64]}],[6,"phn-menu-drawer",{mobileLayout:[16],backButton:[1,"back-button"],isTopmostDrawer:[4,"is-topmost-drawer"],featureToggles:[16],isFirstDrawer:[32]},[[0,"keydown","handleKeyDown"]]],[2,"phn-burger-button"],[6,"phn-menu-button",{isExpanded:[4,"is-expanded"],phraseId:[1,"phrase-id"]}],[2,"phn-mobile-car-series-list",{carSeries:[16],assetsURL:[1,"assets-u-r-l"],breakpoint:[2]}],[2,"phn-mobile-shops-and-more-item",{item:[16],icon:[1]}],[2,"phn-back-button",{text:[1],buttonId:[1,"button-id"]}],[2,"phn-myporsche",{myporscheLink:[1,"myporsche-link"],myporscheText:[1,"myporsche-text"],loggedInStatusTranslations:[16],navigationLoaded:[4,"navigation-loaded"],loggedInState:[1,"logged-in-state"],unreadMessagesCount:[2,"unread-messages-count"],breakpoint:[2]}],[2,"phn-dealer-search",{dealerSearchText:[1,"dealer-search-text"],dealerSearchLink:[1,"dealer-search-link"],navigationLoaded:[4,"navigation-loaded"]}],[2,"phn-myporsche-drawer",{loginStatus:[1,"login-status"],myPorscheText:[1,"my-porsche-text"],unreadMessagesCount:[2,"unread-messages-count"]}],[2,"phn-car-series-model-overview",{isMobile:[4,"is-mobile"],series:[16],assetsURL:[1,"assets-u-r-l"],isDesktop:[32]},[[9,"resize","resizeHandler"]]],[2,"phn-drawer-shops-and-more",{item:[16],headline:[1]}],[2,"phn-myporsche-flyout",{myPorscheText:[1,"my-porsche-text"],loginStatus:[1,"login-status"],unreadMessagesCount:[2,"unread-messages-count"],isActive:[32]},[[1,"mouseenter","mouseEnterHandler"],[1,"mouseleave","mouseLeaveHandler"]]],[2,"phn-car-series",{text:[1],image:[1],assetsURL:[1,"assets-u-r-l"],breakpoint:[2],navigationLoaded:[4,"navigation-loaded"]}],[2,"phn-myporsche-items-drawer",{myPorscheText:[1,"my-porsche-text"]}],[2,"phn-car-frontshot",{text:[1],image:[1],assetsURL:[1,"assets-u-r-l"]}],[2,"phn-car-further-links",{isDesktop:[32]},[[9,"resize","resizeHandler"]]],[2,"phn-car-meta-functionalities",{name:[1],modelMetaItems:[16]}],[2,"phn-car-model-list",{series:[16]}],[2,"phn-car-series-tag-list",{tags:[16]}],[2,"phn-myporsche-items",{myPorscheCloseHandler:[16],breakpoint:[8]}],[2,"phn-messages-link",{item:[16]}],[2,"phn-headline",{text:[1]}],[2,"phn-list-item",{item:[16]}],[6,"phn-button-extended",{icon:[1],cancelTabIndex:[4,"cancel-tab-index"]}]]]],t)}))};!function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),function(){var e=[];if("undefined"!==typeof window){var t=window;t.customElements&&(!t.Element||t.Element.prototype.closest&&t.Element.prototype.matches&&t.Element.prototype.remove&&t.Element.prototype.getRootNode)||e.push(n.e(15).then(n.t.bind(null,"x0Xq",7)));"function"===typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&(!t.NodeList||t.NodeList.prototype.forEach)&&t.fetch&&function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(t){return!1}}()&&"undefined"!=typeof WeakMap||e.push(n.e(14).then(n.t.bind(null,"Xr7b",7)))}return Promise.all(e)}().then((function(){u(window)}));t.default=function(){return Object(r.jsxs)("div",{className:"pageLayout",children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"NextJS sample project - PHN Header"})}),Object(r.jsx)("phn-header",{env:"preview",style:{position:"absolute",left:0,right:0}}),Object(r.jsxs)("div",{style:{paddingTop:180},children:[Object(r.jsx)(a.a,{}),Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{children:"Some PButton"})}),Object(r.jsx)("div",{children:Object(r.jsx)(o.l,{children:"Some PLinkPure"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(o.j,{name:"configurate"}),Object(r.jsx)(o.j,{name:"compare"}),Object(r.jsx)(o.j,{name:"search"})]})]})]})}},dRp5:function(e,t,n){"use strict";var r=n("nKUr"),o=n("egVW"),a=(n("q1tI"),n("rePB"));function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=n("YFqc"),c=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t,n=e.href,a=s(e,["href"]);return Object(r.jsx)(o.l,{children:Object(r.jsx)(c.a,u({href:n,as:"".concat(null!==(t="/sample-integration-nextjs")?t:"").concat(n)},a))})};t.a=function(){return Object(r.jsxs)(o.g,{children:[Object(r.jsx)(o.h,{size:12,children:Object(r.jsx)(o.i,{variant:"headline-2",align:"center",children:"Example usage of the Porsche-Design-System NextJS"})}),Object(r.jsx)(o.h,{size:12,children:Object(r.jsx)(o.d,{className:"divider"})}),Object(r.jsxs)(o.h,{size:12,children:[Object(r.jsx)(f,{href:"/collection",children:"Components Collection"}),Object(r.jsx)(f,{href:"/forms",children:"Forms"}),Object(r.jsx)(f,{href:"/utilities",children:"Utilities"}),Object(r.jsx)(f,{href:"/phn-header",children:"Phn Header"})]}),Object(r.jsx)(o.h,{size:12,children:Object(r.jsx)(o.d,{className:"divider"})})]})}},es6t:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Oe})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return je})),n.d(t,"d",(function(){return we})),n.d(t,"e",(function(){return ze})),n.d(t,"f",(function(){return re})),n.d(t,"g",(function(){return ne})),n.d(t,"h",(function(){return de})),n.d(t,"i",(function(){return ue})),n.d(t,"j",(function(){return C})),n.d(t,"k",(function(){return De})),n.d(t,"l",(function(){return Ue})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return Me}));var r,o,a,s,i,c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):o(e.value).then(s,i)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},f=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},d=!1,$=!1,p=!1,h=null,m=!1,v="undefined"!==typeof window?window:{},y=v.document||{head:{}},g={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},b=function(e){return Promise.resolve(e)},w=function(){try{return new CSSStyleSheet,"function"===typeof(new CSSStyleSheet).replace}catch(s){}return!1}(),j=function(e,t,n,r){n&&n.map((function(n){var r=n[0],o=n[1],a=n[2],s=x(e,r),i=O(t,a),c=k(r);g.ael(s,o,i,c),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return g.rel(s,o,i,c)}))}))},O=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(e){Se(e)}}},x=function(e,t){return 8&t?v:e},k=function(e){return 0!==(2&e)},M=function(e,t){return void 0===t&&(t=""),function(){}},E=new WeakMap,R=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=M(0,t.$tagName$),a=function(e,t,n,r){var o=S(t),a=Ce.get(o);if(e=11===e.nodeType?e:y,a)if("string"===typeof a){e=e.head||e;var s=E.get(e),i=void 0;s||E.set(e,s=new Set),s.has(o)||((i=y.createElement("style")).innerHTML=a,e.insertBefore(i,e.querySelector("link")),s&&s.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=f(f([],e.adoptedStyleSheets),[a]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h"),2&r&&n.classList.add(a+"-s")),o()},S=function(e,t){return"sc-"+e.$tagName$},L={},P=function(e){return"object"===(e=typeof e)||"function"===e},C=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=null,a=null,s=null,i=!1,c=!1,l=[],u=function(t){for(var n=0;n<t.length;n++)o=t[n],Array.isArray(o)?u(o):null!=o&&"boolean"!==typeof o&&((i="function"!==typeof e&&!P(o))&&(o=String(o)),i&&c?l[l.length-1].$text$+=o:l.push(i?N(null,o):o),c=i)};if(u(n),t){t.key&&(a=t.key),t.name&&(s=t.name);var f=t.className||t.class;f&&(t.class="object"!==typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"===typeof e)return e(null===t?{}:t,l,_);var d=N(e,null);return d.$attrs$=t,l.length>0&&(d.$children$=l),d.$key$=a,d.$name$=s,d},N=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null};return n},T={},_={forEach:function(e,t){return e.map(I).forEach(t)},map:function(e,t){return e.map(I).map(t).map(A)}},I=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},A=function(e){if("function"===typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),C.apply(void 0,f([e.vtag,t],e.vchildren||[]))}var n=N(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},H=function(e,t,n,r,o,a){if(n!==r){var s=Re(e,t),i=t.toLowerCase();if("class"===t){var c=e.classList,l=D(n),u=D(r);c.remove.apply(c,l.filter((function(e){return e&&!u.includes(e)}))),c.add.apply(c,u.filter((function(e){return e&&!l.includes(e)})))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var f in r)n&&r[f]===n[f]||(f.includes("-")?e.style.setProperty(f,r[f]):e.style[f]=r[f])}else if("key"===t);else if("ref"===t)r&&r(e);else if(s||"o"!==t[0]||"n"!==t[1]){var d=P(r);if((s||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var $=null==r?"":r;"list"===t?s=!1:null!=n&&e[t]==$||(e[t]=$)}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!s||4&a||o)&&!d&&(r=!0===r?"":r,e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Re(v,i)?i.slice(2):i[2]+t.slice(3),n&&g.rel(e,t,n,!1),r&&g.ael(e,t,r,!1)}},U=/\s/,D=function(e){return e?e.split(U):[]},z=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||L,s=t.$attrs$||L;for(r in a)r in s||H(o,r,a[r],void 0,n,t.$flags$);for(r in s)H(o,r,a[r],s[r],n,t.$flags$)},q=function(e,t,n,s){var i,c,l,u=t.$children$[n],f=0;if(d||(p=!0,"slot"===u.$tag$&&(r&&s.classList.add(r+"-s"),u.$flags$|=u.$children$?2:1)),null!==u.$text$)i=u.$elm$=y.createTextNode(u.$text$);else if(1&u.$flags$)i=u.$elm$=y.createTextNode("");else if(i=u.$elm$=y.createElement(2&u.$flags$?"slot-fb":u.$tag$),z(null,u,false),function(e){return null!=e}(r)&&i["s-si"]!==r&&i.classList.add(i["s-si"]=r),u.$children$)for(f=0;f<u.$children$.length;++f)(c=q(e,u,f,i))&&i.appendChild(c);return i["s-hn"]=a,3&u.$flags$&&(i["s-sr"]=!0,i["s-cr"]=o,i["s-sn"]=u.$name$||"",(l=e&&e.$children$&&e.$children$[n])&&l.$tag$===u.$tag$&&e.$elm$&&B(e.$elm$,!1)),i},B=function(e,t){g.$flags$|=1;for(var n=e.childNodes,r=n.length-1;r>=0;r--){var o=n[r];o["s-hn"]!==a&&o["s-ol"]&&(X(o).insertBefore(o,V(o)),o["s-ol"].remove(),o["s-ol"]=void 0,p=!0),t&&B(o,t)}g.$flags$&=-2},F=function(e,t,n,r,o,s){var i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===a&&(c=c.shadowRoot);o<=s;++o)r[o]&&(i=q(null,n,o,e))&&(r[o].$elm$=i,c.insertBefore(i,V(t)))},K=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,ee(r),$=!0,o["s-ol"]?o["s-ol"].remove():B(o,!0),o.remove())},W=function(e,t){return e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$)},V=function(e){return e&&e["s-ol"]||e},X=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode},G=function(e,t){var n,r=t.$elm$=e.$elm$,o=e.$children$,a=t.$children$,s=t.$tag$,i=t.$text$;null===i?("slot"===s||z(e,t,false),null!==o&&null!==a?function(e,t,n,r){for(var o,a,s=0,i=0,c=0,l=0,u=t.length-1,f=t[0],d=t[u],$=r.length-1,p=r[0],h=r[$];s<=u&&i<=$;)if(null==f)f=t[++s];else if(null==d)d=t[--u];else if(null==p)p=r[++i];else if(null==h)h=r[--$];else if(W(f,p))G(f,p),f=t[++s],p=r[++i];else if(W(d,h))G(d,h),d=t[--u],h=r[--$];else if(W(f,h))"slot"!==f.$tag$&&"slot"!==h.$tag$||B(f.$elm$.parentNode,!1),G(f,h),e.insertBefore(f.$elm$,d.$elm$.nextSibling),f=t[++s],h=r[--$];else if(W(d,p))"slot"!==f.$tag$&&"slot"!==h.$tag$||B(d.$elm$.parentNode,!1),G(d,p),e.insertBefore(d.$elm$,f.$elm$),d=t[--u],p=r[++i];else{for(c=-1,l=s;l<=u;++l)if(t[l]&&null!==t[l].$key$&&t[l].$key$===p.$key$){c=l;break}c>=0?((a=t[c]).$tag$!==p.$tag$?o=q(t&&t[i],n,c,e):(G(a,p),t[c]=void 0,o=a.$elm$),p=r[++i]):(o=q(t&&t[i],n,i,e),p=r[++i]),o&&X(f.$elm$).insertBefore(o,V(f.$elm$))}s>u?F(e,null==r[$+1]?null:r[$+1].$elm$,n,r,i,$):i>$&&K(t,s,u)}(r,o,t,a):null!==a?(null!==e.$text$&&(r.textContent=""),F(r,null,t,a,0,a.length-1)):null!==o&&K(o,0,o.length-1)):(n=r["s-cr"])?n.parentNode.textContent=i:e.$text$!==i&&(r.data=i)},J=function(e){var t,n,r,o,a,s,i=e.childNodes;for(n=0,r=i.length;n<r;n++)if(1===(t=i[n]).nodeType){if(t["s-sr"])for(a=t["s-sn"],t.hidden=!1,o=0;o<r;o++)if(s=i[o].nodeType,i[o]["s-hn"]!==t["s-hn"]||""!==a){if(1===s&&a===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===s||3===s&&""!==i[o].textContent.trim()){t.hidden=!0;break}J(t)}},Y=[],Q=function(e){for(var t,n,r,o,a,s,i=0,c=e.childNodes,l=c.length;i<l;i++){if((t=c[i])["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(r=n.parentNode.childNodes,o=t["s-sn"],s=r.length-1;s>=0;s--)(n=r[s])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(Z(n,o)?(a=Y.find((function(e){return e.$nodeToRelocate$===n})),$=!0,n["s-sn"]=n["s-sn"]||o,a?a.$slotRefNode$=t:Y.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&Y.map((function(e){Z(e.$nodeToRelocate$,n["s-sn"])&&(a=Y.find((function(e){return e.$nodeToRelocate$===n})))&&!e.$slotRefNode$&&(e.$slotRefNode$=a.$slotRefNode$)}))):Y.some((function(e){return e.$nodeToRelocate$===n}))||Y.push({$nodeToRelocate$:n}));1===t.nodeType&&Q(t)}},Z=function(e,t){return 1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t},ee=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(ee)},te=function(e,t){var n=e.$hostElement$,s=e.$cmpMeta$,i=e.$vnode$||N(null,null),c=function(e){return e&&e.$tag$===T}(t)?t:C(null,null,t);if(a=n.tagName,s.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},s.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return c.$attrs$[r]=n[t]}))),c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=i.$elm$=n.shadowRoot||n,r=n["s-sc"],o=n["s-cr"],d=0!==(1&s.$flags$),$=!1,G(i,c),g.$flags$|=1,p){Q(c.$elm$);for(var l=void 0,u=void 0,f=void 0,h=void 0,m=void 0,v=void 0,b=0;b<Y.length;b++)(u=(l=Y[b]).$nodeToRelocate$)["s-ol"]||((f=y.createTextNode(""))["s-nr"]=u,u.parentNode.insertBefore(u["s-ol"]=f,u));for(b=0;b<Y.length;b++)if(u=(l=Y[b]).$nodeToRelocate$,l.$slotRefNode$){for(h=l.$slotRefNode$.parentNode,m=l.$slotRefNode$.nextSibling,f=u["s-ol"];f=f.previousSibling;)if((v=f["s-nr"])&&v["s-sn"]===u["s-sn"]&&h===v.parentNode&&(!(v=v.nextSibling)||!v["s-nr"])){m=v;break}(!m&&h!==u.parentNode||u.nextSibling!==m)&&u!==m&&(!u["s-hn"]&&u["s-ol"]&&(u["s-hn"]=u["s-ol"].parentNode.nodeName),h.insertBefore(u,m))}else 1===u.nodeType&&(u.hidden=!0)}$&&J(c.$elm$),g.$flags$&=-2,Y.length=0},ne=function(e){return ke(e).$hostElement$},re=function(e,t,n){var r=ne(e);return{emit:function(e){return oe(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},oe=function(e,t,n){var r=g.ce(t,n);return e.dispatchEvent(r),r},ae=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},se=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ae(e,e.$ancestorComponent$);return He((function(){return ie(e,t)}))}e.$flags$|=512},ie=function(e,t){var n,r=M(0,e.$cmpMeta$.$tagName$),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return pe(o,t,n)})),e.$queuedListeners$=null),n=pe(o,"componentWillLoad")),r(),he(n,(function(){return ce(e,o,t)}))},ce=function(e,t,n){return l(void 0,void 0,void 0,(function(){var r,o,a,s,i,c;return u(this,(function(l){return r=e.$hostElement$,o=M(0,e.$cmpMeta$.$tagName$),a=r["s-rc"],n&&R(e),s=M(0,e.$cmpMeta$.$tagName$),le(e,t),a&&(a.map((function(e){return e()})),r["s-rc"]=void 0),s(),o(),i=r["s-p"],c=function(){return fe(e)},0===i.length?c():(Promise.all(i).then(c),e.$flags$|=4,i.length=0),[2]}))}))},le=function(e,t,n){try{h=t,t=t.render(),e.$flags$&=-17,e.$flags$|=2,te(e,t)}catch(t){Se(t,e.$hostElement$)}return h=null,null},ue=function(){return h},fe=function(e){var t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=M(0,t),o=e.$lazyInstance$,a=e.$ancestorComponent$;pe(o,"componentDidRender"),64&e.$flags$?(pe(o,"componentDidUpdate"),r()):(e.$flags$|=64,me(n),pe(o,"componentDidLoad"),r(),e.$onReadyResolve$(n),a||$e()),e.$onInstanceResolve$(n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ae((function(){return se(e,!1)})),e.$flags$&=-517},de=function(e){var t=ke(e),n=t.$hostElement$.isConnected;return n&&2===(18&t.$flags$)&&se(t,!1),n},$e=function(e){me(y.documentElement),Ae((function(){return oe(v,"appload",{detail:{namespace:"porsche-navigation"}})}))},pe=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(e){Se(e)}},he=function(e,t){return e&&e.then?e.then(t):t()},me=function(e){return e.classList.add("hydrated")},ve=function(e,t,n,r){var o=ke(e),a=o.$hostElement$,s=o.$instanceValues$.get(t),i=o.$flags$,c=o.$lazyInstance$;if(n=function(e,t){return null==e||P(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e}(n,r.$members$[t][0]),(!(8&i)||void 0===s)&&n!==s&&(o.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&i){var l=r.$watchers$[t];l&&l.map((function(e){try{c[e](n,s,t)}catch(e){Se(e,a)}}))}2===(18&i)&&se(o,!1)}},ye=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=e[0],a=e[1][0];31&a||2&n&&32&a?Object.defineProperty(o,r,{get:function(){return function(e,t){return ke(e).$instanceValues$.get(t)}(this,r)},set:function(e){ve(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,r,{value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ke(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;g.jmp((function(){var t=a.get(e);r.hasOwnProperty(t)&&(n=r[t],delete r[t]),r[t]=(null!==n||"boolean"!==typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var n=e[0],r=e[1],o=r[1]||n;return a.set(o,n),512&r[0]&&t.$attrsToReflect$.push([n,o]),o}))}}return e},ge=function(e,t,n,r,o){return l(void 0,void 0,void 0,(function(){var e,r,a,s,i,c,l;return u(this,(function(u){switch(u.label){case 0:return 0!==(32&t.$flags$)?[3,3]:(t.$flags$|=32,(o=Pe(n)).then?(e=function(){},[4,o]):[3,2]);case 1:o=u.sent(),e(),u.label=2;case 2:o.isProxied||(n.$watchers$=o.watchers,ye(o,n,2),o.isProxied=!0),r=M(0,n.$tagName$),t.$flags$|=8;try{new o(t)}catch(e){Se(e)}t.$flags$&=-9,t.$flags$|=128,r(),o.style&&(a=o.style,s=S(n),Ce.has(s)||(i=M(0,n.$tagName$),function(e,t,n){var r=Ce.get(e);w&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ce.set(e,r)}(s,a,!!(1&n.$flags$)),i())),u.label=3;case 3:return c=t.$ancestorComponent$,l=function(){return se(t,!0)},c&&c["s-rc"]?c["s-rc"].push(l):l(),[2]}}))}))},be=function(e){var t=e["s-cr"]=y.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},we=function(e,t){void 0===t&&(t={});var n,r=M(),o=[],a=t.exclude||[],s=v.customElements,i=y.head,l=i.querySelector("meta[charset]"),u=y.createElement("style"),f=[],d=!0;Object.assign(g,t),g.$resourcesUrl$=new URL(t.resourcesUrl||"./",y.baseURI).href,e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2],r.$listeners$=t[3],r.$attrsToReflect$=[],r.$watchers$={};var i=r.$tagName$,l=function(e){function t(t){var n=e.call(this,t)||this;return Ee(t=n,r),1&r.$flags$&&t.attachShadow({mode:"open"}),n}return c(t,e),t.prototype.connectedCallback=function(){var e=this;n&&(clearTimeout(n),n=null),d?f.push(this):g.jmp((function(){return function(e){if(0===(1&g.$flags$)){var t=ke(e),n=t.$cmpMeta$,r=M(0,n.$tagName$);if(1&t.$flags$)j(e,t,n.$listeners$);else{t.$flags$|=1,12&n.$flags$&&be(e);for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ae(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}})),ge(0,t,n)}r()}}(e)}))},t.prototype.disconnectedCallback=function(){var e=this;g.jmp((function(){return function(e){if(0===(1&g.$flags$)){var t=ke(e),n=t.$lazyInstance$;t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0),pe(n,"disconnectedCallback")}}(e)}))},t.prototype.componentOnReady=function(){return ke(this).$onReadyPromise$},t}(HTMLElement);r.$lazyBundleId$=e[0],a.includes(i)||s.get(i)||(o.push(i),s.define(i,ye(l,r,1)))}))})),u.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),i.insertBefore(u,l?l.nextSibling:i.firstChild),d=!1,f.length?f.map((function(e){return e.connectedCallback()})):g.jmp((function(){return n=setTimeout($e,30)})),r()},je=function(e){var t=new URL(e,g.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname},Oe=function(e,t){return t},xe=new WeakMap,ke=function(e){return xe.get(e)},Me=function(e,t){return xe.set(t.$lazyInstance$=e,t)},Ee=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],j(e,n,t.$listeners$),xe.set(e,n)},Re=function(e,t){return t in e},Se=function(e,t){return(0,console.error)(e,t)},Le=new Map,Pe=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,s=Le.get(a);return s?s[o]:n("v83M")("./"+a+".entry.js").then((function(e){return Le.set(a,e),e[o]}),Se)},Ce=new Map,Ne=[],Te=[],_e=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Se(e)}e.length=0},Ie=function(){_e(Ne),_e(Te),(m=Ne.length>0)&&g.raf(Ie)},Ae=function(e){return b().then(e)},He=(s=Te,i=!0,function(e){s.push(e),m||(m=!0,i&&4&g.$flags$?Ae(Ie):g.raf(Ie))}),Ue="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function De(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var ze=De((function(e,t){"undefined"!=typeof self&&self,e.exports=function(){var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){if("noModule"in HTMLScriptElement.prototype){var t=document.createElement("script");t.src=e,t.setAttribute("crossorigin",""),document.body.appendChild(t)}}e.r(t),e.d(t,{componentsReady:function(){return a},load:function(){return o}});var r="porscheDesignSystem",o=function(e){void 0===e&&(e={prefix:""}),function(e){var t,o=e.script,a=e.version,s=e.prefix,i=null!==(t=function(e){var t=(document[r]||(document[r]={}),document[r]),n=t[e];if(null===(void 0===n?null:n)){var o={isLoaded:!1,prefixes:[],registerCustomElements:null};t[e]=o}return t[e]}(a))&&void 0!==t?t:{},c=i.isLoaded,l=i.prefixes,u=i.registerCustomElements;c||(n(o),i.isLoaded=!0),l.includes(s)||(l.push(s),u&&u(s))}(Object.assign(Object.assign({},{version:"2.8.0",script:("undefined"!==typeof window&&"cn"===window.PORSCHE_DESIGN_SYSTEM_CDN?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/components/porsche-design-system.v2.8.0.a52954f90930904a315b.js"}),e))},a=function(e){var t;void 0===e&&(e=document.body);var n=new Promise((function(e){return t=e}));if(s())i(e,t);else{var r="readystatechange",o=function(){s()&&(document.removeEventListener(r,o),i(e,t))};document.addEventListener(r,o)}return n},s=function(){return"complete"===document.readyState},i=function(e,t){var n=c(e);Promise.all(n).then((function(e){return t(e.length)})).catch(console.error)},c=function(e){var t=[];return 1===(null==e?void 0:e.nodeType)&&Array.from(e.children).forEach((function(e){u(e)&&t.push(e.componentOnReady()),t=t.concat(c(e))})),t},l=/^(.*-)?P-(.*)$/,u=function(e){return l.exec(e.tagName)&&"function"==typeof e.componentOnReady};return t}()}))}).call(this,n("yLpj"))},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),s=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||s()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},v83M:function(e,t,n){var r={"./phn-back-button_32.entry.js":["ydiU",16]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="v83M",e.exports=o},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),o=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],$=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,s.default)((function(){return d(!0)}))}),[f]),[$,f]};var a=n("q1tI"),s=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var c=new Map},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["VFiF",0,2,1,3]]]);