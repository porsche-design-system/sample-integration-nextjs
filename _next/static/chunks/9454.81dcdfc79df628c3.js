"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9454,691,1359],{691:function(e,t,n){n.r(t),n.d(t,{g:function(){return C}});var r,o,i=n(5089),a=n(3555),s=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},u=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},p=Object.defineProperty,f=function(e,t,n){var r;return(r="symbol"!=typeof t?t+"":t)in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,n},h={BEFORE_MERGE:"BEFORE_MERGE",AFTER_MERGE:"AFTER_MERGE"},d={clean:{enabled:!1,executionPlace:h.AFTER_MERGE,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},g=function(){function e(){}return e.prototype.create=function(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}},e}(),y=function(e,t){var n;for(n in e)if(!(!e||!e[n])&&!1===t(e[n],n))return!1;return!0},m=function(e,t){return y(e,function(n,r){for(var o in e[r])if(!1===t(n[o],o,n,r))return!1;return!0})},v=function(e){for(var t in e)return!1;return!0},b=function(e,t){if(void 0===t){var n;t=(null==(n=d.clean)?void 0:n.values)||[]}return m(e,function(n,r,o,i){t.includes(n)&&(delete o[r],v(o)&&delete e[i])}),e},w=function(e){return m(e,function(e,t,n){return"function"!=typeof e||(n[t]=e()),!0}),e},x=function(e,t){var n=t.split(".");if(2===n.length){var r=e[n[0]];if(r)return r[n[1]]}},_=function(e){if(!e)return[];var t=[];return m(e,function(e,n,r,o){t.push("".concat(o.toString(),".").concat(n.toString()))}),t},k=d.logging,E=((o=E||{})[o.error=0]="error",o[o.warn=1]="warn",o[o.log=2]="log",o),O=function(){function e(e,t){f(this,"prefix"),f(this,"settings"),this.prefix=e,this.settings=l(l({},k),t)}return e.prototype._getMergedSettings=function(e){return e?l(l({},this.settings),e):this.settings},e.prototype._isAllowed=function(e,t){if(!O.isAvailable||!t.enabled)return!1;var n=E[t.level];switch(e){case"error":case"warn":return n>=E[e];case"info":case"log":case"debug":case"dir":return n>=2;default:return!1}},e.prototype._log=function(e,t,n){void 0===t&&(t="log");var r=this._getMergedSettings(n);this._isAllowed(t,r)&&("dir"===t?(console.log("[".concat(this.prefix,"] ").concat(t,":")),console[t](e)):console[t]("[".concat(this.prefix,"] ").concat(e)))},e.prototype.log=function(e,t){this._log(e,"log",t)},e.prototype.dir=function(e,t){this._log(e,"dir",t)},e.prototype.debug=function(e,t){this._log(e,"debug",t)},e.prototype.error=function(e,t){this._log(e,"error",t)},e.prototype.info=function(e,t){this._log(e,"info",t)},e.prototype.warn=function(e,t){this._log(e,"warn",t)},e}();f(O,"isAvailable","u">typeof console);var P=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};return e.forEach(function(e){if(!v(e)){var t,r=l(l({},n),e);for(t in r)"object"!=typeof r[t]||Array.isArray(r[t])?n[t]=r[t]:n[t]=l(l({},n[t]),e[t])}}),n},N=function(){function e(){}return e.prototype.create=function(e){return b({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])},e}(),I=d.webProperties,D=function(){return window.location.href.replace(/[?#].*/,"")},S=function(){return window.innerHeight.toString()},L=function(){return window.innerHeight>window.innerWidth?"p":"l"},R=function(){return window.innerWidth.toString()},j=function(e){if(e.breakpoints&&!(e.breakpoints.length<1)){var t=e.breakpoints,n=function(){for(var e=window.innerWidth,n=0,r=0;r<t.length&&e>=t[r];)n=t[r],r++;return n.toString()};return e.reactiveDimensions?n:n()}},A=function(e,t){var n=l(l({},I),e),r={breakpoint:j(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?D:D(),height:n.reactiveDimensions?S:S(),orientation:n.reactiveDimensions?L:L(),width:n.reactiveDimensions?R:R(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return t?t.create(r):r},T=function(e,t){switch(t){case"string":case"number":case"boolean":return typeof e===t;case"any[]":return Array.isArray(e)&&e.length>0;case"Record<string, any>":return"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).length>0;case"any":break;default:if(t.indexOf("|")>0){var n=t.split("|").map(function(e){return e.trim().replace(/(^ ?'?|'? ?$)/g,"")});return"string"==typeof e&&n.includes(e)}}return!0},F=function(e,t,n){var r,o,i,a={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return a;var s=n.eventMatrix,l=s.events,u=c(s,["events"]),p=l.indexOf(e);if(-1===p)return a.level="error",a.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:e,message:"'".concat(e,"': Event does not exist.")}),a;var f=_(t),h=Object.keys(u),d=f.filter(function(e){return!h.includes(e)});for(i in d.length>0&&(n.allowUnknown||(r=t,o=d,r&&m(r,function(e,t,n,i){!o.includes("".concat(i.toString(),".").concat(t.toString()))||(delete n[t],v(n)&&delete r[i])})),d.forEach(function(e){var t;a.level=null!=(t=a.level)?t:"warn",a.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:e,message:"'".concat(e,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})})),u){var g=u[i],y="u">typeof g.e[p],b=1===g.r,w=t?x(t,i):void 0,k="u">typeof w;if(y&&b&&!k&&(a.level="error",a.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:i,message:"'".concat(i,"': The required property is missing.")}),!n.verbose)||k&&!T(w,g.t)&&(a.level="error",a.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:i,message:"'".concat(i,"': Wrong type detected. Expected '").concat(g.t,"', got '").concat(typeof w,"'.")}),!n.verbose))break}return a},M=function(e){function t(t,n,r){void 0===r&&(r="GlobalDataLayer");var o=e.call(this,t,n,r)||this;return f(o,"_eventNamePayloadFactory"),f(o,"_webPayloadFactory"),o._eventNamePayloadFactory=new g,o._webPayloadFactory=new N,o.setup(),o}return s(t,e),t.prototype.setup=function(){e.prototype.setup.call(this)},t}(function(){function e(e,t,n){void 0===n&&(n="GlobalDataLayer"),f(this,"_className"),f(this,"_settings"),f(this,"_defaultProperties"),f(this,"_logger"),f(this,"_webPropertiesHandled",!1),f(this,"_dataLayerStore"),f(this,"_extensions",new Map);var r=P(d,e||{});this._className=n,this._logger=new O(this._className,r.logging),this._settings=r,t?this._dataLayerStore=t:"u">typeof window?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return e.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(e.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),e.prototype.getRegisteredExtension=function(e){var t=new e;return this.getRegisteredExtensionByClassName(t.className)},e.prototype.getRegisteredExtensionByClassName=function(e){return this._extensions.has(e)?this._extensions.get(e):void 0},e.prototype.getRegisteredExtensions=function(){for(var e=[],t=0,n=this._extensions.values();t<n.length;t++){var r=n[t];e.push(r)}return e},e.prototype.registerExtension=function(e,t){if(void 0===t&&(t=!1),!t&&this._extensions.has(e.className)){this._logger.warn("Tried to register extension class <".concat(e.className,"> which already exists."));return}e.dataLayerInstance=this,this._extensions.set(e.className,e),t?this._logger.info("Overriden registration for extension class <".concat(e.className,">.")):this._logger.info("Registered extension class <".concat(e.className,">."))},e.prototype.removeExtension=function(e){var t=new e;if(this._extensions.has(t.className)){this._extensions.delete(t.className);return}this._logger.warn("Tried to remove not existing extension class <".concat(t.className,">."))},e.prototype.removeExtensionByClassName=function(e){if(this._extensions.has(e)){this._extensions.delete(e);return}this._logger.warn("Tried to remove not existing extension class <".concat(e,">."))},e.prototype.push=function(e,t,n){if(void 0===t&&(t=[{}]),0===e.length)return!1;var r,o,i=n&&!v(n)?P(this._settings,n):this._settings;Array.isArray(t)||(t=[t]),t.forEach(w);var a=this._eventNamePayloadFactory.create({event:e}),s=w(this.getDefaultProperties(e));i.clean.enabled&&i.clean.executionPlace===h.BEFORE_MERGE&&u([s||{}],t,!0).forEach(function(e){return b(e,i.clean.values)});var l=P.apply(void 0,u([a,s||{}],t,!1));if(i.clean.enabled&&i.clean.executionPlace===h.AFTER_MERGE&&b(l,i.clean.values),(null==(r=null==i?void 0:i.validation)?void 0:r.enabled)&&(null==(o=null==i?void 0:i.validation)?void 0:o.eventMatrix)){var c=F(e,l,i.validation),p=c.issues.sort(function(e,t){return e.level!==t.level&&"warn"===t.level?-1:0}).map(function(e){return"- [".concat(e.level,"]: ").concat(e.message)}).join("\n");switch(c.level){case"error":return this._logger.error("Validation failed for event '".concat(e,"' with errors/warnings: \n").concat(p),i.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(e,"' with warnings: \n").concat(p),i.logging);break;default:this._logger.info("Validation success for event '".concat(e,"'."),i.logging)}}return this._dataLayerStore.push(l),!0},e.prototype.getDefaultProperties=function(e){var t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(function(n){return n.identifier===e?t.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(e)?t.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(e)?t.byRegex.push(n.data):void 0});var n=u(u(u([],t.byRegex,!0),t.byArray,!0),t.byName,!0);if(n.length)return P.apply(void 0,n)},e.prototype.setDefaultProperties=function(e,t){var n=this._defaultProperties.find(function(t){return t.identifier===e});if(n){n.data=P(n.data,t);return}this._defaultProperties.push({identifier:e,data:t})},e.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var e=A(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}},e}()),C=new(function(){function e(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return e.prototype.initialise=function(){this.gdl=new M},e.prototype.pushDataLayerEvent=function(e,t){t?this.gdl.push(e,t):this.gdl.push(e)},e.prototype.setEnvironment=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:function(e){switch(e){case i.b.PRODUCTION:return"P";case i.b.PREVIEW:return"PP";default:return"K"}}(e)}})},e.prototype.setPageName=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})},e.prototype.setUser=function(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})},e.prototype.setLocale=function(e){try{var t=(0,i.s)(e),n=t.country,r=t.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(e){}},e.prototype.setDefaultProperties=function(e,t){var n={context:{applicationId:i.c},visitor:{loginStatus:!1}};try{var r=(0,i.s)(e),o=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:o,language:s,applicationName:i.D})})}catch(e){}(0,a.i)(t)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},e}())},9454:function(e,t,n){n.r(t),n.d(t,{phn_logo:function(){return c}});var r=n(6224),o=n(691),i=n(638),a=n(5089),s=n(3555),l=n(1359),c=function(){function e(e){(0,r.r)(this,e),this.logoLoaded=(0,r.c)(this,"logoLoaded",7),this.size=void 0,this.locale=void 0,this.app=void 0,this.theme=s.h.light,this.mode=s.j.navbar,this.breakpoint=void 0}return e.prototype.sendDataLayerEvent=function(e){o.g.pushDataLayerEvent(a.E.CREST_CLICK,{componentClick:{clickElementId:e.id,clickElementName:e.text,clickElementType:a.C.Link,targetUrl:e.link}})},e.prototype.componentWillLoad=function(){var e=this;(0,i.p)(this.el).then(function(){return(0,i.p)(e.el)}).then(function(){e.logoLoaded.emit()})},e.prototype.getLogoLink=function(e,t,n,r){return(0,l.a)(e,t,r)?r.link:n.link},e.prototype.getLogoAriaLabel=function(e,t,n){return(0,l.a)(e,t,n)?"Porsche Shop Homepage":"Porsche.com Homepage"},e.prototype.render=function(){var e=this,t=a.a.state,n=t.crest,o=t.shop,i=this.getLogoLink(this.locale,this.app,n,o),l=this.getLogoAriaLabel(this.locale,this.app,o);return(0,s.n)(this.breakpoint)?(0,r.h)("phn-p-wordmark",{onClick:function(){return e.sendDataLayerEvent(n)},href:(0,s.i)(i)?i:void 0,aria:{"aria-label":l},size:"small",theme:(0,s.E)(this.theme,this.mode)}):(0,r.h)("phn-p-crest",{onClick:function(){return e.sendDataLayerEvent(n)},href:(0,s.i)(i)?i:void 0,aria:{"aria-label":l}})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();c.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-phn-logo{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-logo{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-logo{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-logo{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-logo{-ms-flex-pack:justify;justify-content:space-between}"},1359:function(e,t,n){n.r(t),n.d(t,{a:function(){return s},b:function(){return u},f:function(){return c},g:function(){return h},i:function(){return a},l:function(){return p},r:function(){return l},s:function(){return i}});var r=n(3555),o=n(5089),i=(0,o.d)({wishlistItemsNumber:0,numberOfShoppingItems:0,shopInformation:{numberOfShoppingItems:0,wishlistItemsNumber:0,subTotal:"0"}});function a(e,t){var n,i=null===(n=o.a.state.shop)||void 0===n?void 0:n.availableLocales;return void 0!==i&&i.includes(e)&&t===r.A.shop}function s(e,t,n){var r,i;return a(e,t)&&((null===(i=null===(r=o.a.state.shop)||void 0===r?void 0:r.logoLinksToShopLocales)||void 0===i?void 0:i.includes(e))||!1)&&null!==n}function l(e,t,n){var o=n.shop,i=n.externalShop;return null===o?n:i&&t!==r.A.shop?Object.assign(Object.assign({},n),{shop:Object.assign(Object.assign({},o),i)}):!(null==o?void 0:o.availableLocales.includes(e))||(null==o?void 0:o.availableLocalesOnlyForShop.includes(e))&&t!==r.A.shop?Object.assign(Object.assign({},n),{shop:Object.assign(Object.assign({},o),{text:""})}):n}function c(e,t){return null==e?void 0:e.filter(function(e){return null===e.authStatus||void 0===e.authStatus?t.includes(null):t.includes(e.authStatus)})}function u(){var e=o.a.state.myPorsche,t=o.n.state.loggedInState,n=i.state.shopInformation.wishlistItemsNumber;return 0===n&&(n=i.state.wishlistItemsNumber),{wishlistItemsNumber:n,username:(0,r.z)(t,(null==e?void 0:e.loggedInFallback)||"")}}function p(e){i.set("wishlistItemsNumber",e.wishlistItemsNumber),i.set("numberOfShoppingItems",e.numberOfShoppingItems),i.set("shopInformation",e.shopInformation)}function f(){var e=i.state.shopInformation,t=i.state.wishlistItemsNumber;return(e.wishlistItemsNumber>0?e.wishlistItemsNumber:t)>0?"heart-filled":"heart"}function h(e){var t={wishlist:f}[e];return"function"!=typeof t?null:t()}}}]);