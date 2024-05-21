"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3601,5056],{5056:function(t,e,r){r.r(e),r.d(e,{g:function(){return H}});var n,o,i=r(282),a=r(7379),s=(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>e.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r},p=function(t,e,r){if(r||2==arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},u=Object.defineProperty,f=function(t,e,r){var n;return(n="symbol"!=typeof e?e+"":e)in t?u(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,r},h={BEFORE_MERGE:"BEFORE_MERGE",AFTER_MERGE:"AFTER_MERGE"},m={clean:{enabled:!1,executionPlace:h.AFTER_MERGE,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},g=function(){function t(){}return t.prototype.create=function(t){return"string"!=typeof t.event||0===t.event.length?{}:{context:{eventAction:t.event}}},t}(),d=function(t,e){var r;for(r in t)if(!(!t||!t[r])&&!1===e(t[r],r))return!1;return!0},b=function(t,e){return d(t,function(r,n){for(var o in t[n])if(!1===e(r[o],o,r,n))return!1;return!0})},y=function(t){for(var e in t)return!1;return!0},w=function(t,e){if(void 0===e){var r;e=(null==(r=m.clean)?void 0:r.values)||[]}return b(t,function(r,n,o,i){e.includes(r)&&(delete o[n],y(o)&&delete t[i])}),t},k=function(t){return b(t,function(t,e,r){return"function"!=typeof t||(r[e]=t()),!0}),t},v=function(t,e){var r=e.split(".");if(2===r.length){var n=t[r[0]];if(n)return n[r[1]]}},x=function(t){if(!t)return[];var e=[];return b(t,function(t,r,n,o){e.push("".concat(o.toString(),".").concat(r.toString()))}),e},_=m.logging,E=((o=E||{})[o.error=0]="error",o[o.warn=1]="warn",o[o.log=2]="log",o),O=function(){function t(t,e){f(this,"prefix"),f(this,"settings"),this.prefix=t,this.settings=c(c({},_),e)}return t.prototype._getMergedSettings=function(t){return t?c(c({},this.settings),t):this.settings},t.prototype._isAllowed=function(e,r){if(!t.isAvailable||!r.enabled)return!1;var n=E[r.level];switch(e){case"error":case"warn":return n>=E[e];case"info":case"log":case"debug":case"dir":return n>=2;default:return!1}},t.prototype._log=function(t,e,r){void 0===e&&(e="log");var n=this._getMergedSettings(r);this._isAllowed(e,n)&&("dir"===e?(console.log("[".concat(this.prefix,"] ").concat(e,":")),console[e](t)):console[e]("[".concat(this.prefix,"] ").concat(t)))},t.prototype.log=function(t,e){this._log(t,"log",e)},t.prototype.dir=function(t,e){this._log(t,"dir",e)},t.prototype.debug=function(t,e){this._log(t,"debug",e)},t.prototype.error=function(t,e){this._log(t,"error",e)},t.prototype.info=function(t,e){this._log(t,"info",e)},t.prototype.warn=function(t,e){this._log(t,"warn",e)},t}();f(O,"isAvailable","u">typeof console);var P=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r={};return t.forEach(function(t){if(!y(t)){var e,n=c(c({},r),t);for(e in n)"object"!=typeof n[e]||Array.isArray(n[e])?r[e]=n[e]:r[e]=c(c({},r[e]),t[e])}}),r},D=function(){function t(){}return t.prototype.create=function(t){return w({context:{timestamp:t.timestamp,server:t.hostname},pageExperience:{pageId:t.url},visitor:{deviceBrowserBreakpoint:t.breakpoint,deviceBrowserHeight:t.height,deviceBrowserOrientation:t.orientation,deviceBrowserWidth:t.width,deviceType:t.deviceType,useragent:t.userAgent}},[void 0])},t}(),R=m.webProperties,N=function(){return window.location.href.replace(/[?#].*/,"")},L=function(){return window.innerHeight.toString()},S=function(){return window.innerHeight>window.innerWidth?"p":"l"},A=function(){return window.innerWidth.toString()},I=function(t){if(t.breakpoints&&!(t.breakpoints.length<1)){var e=t.breakpoints,r=function(){for(var t=window.innerWidth,r=0,n=0;n<e.length&&t>=e[n];)r=e[n],n++;return r.toString()};return t.reactiveDimensions?r:r()}},j=function(t,e){var r=c(c({},R),t),n={breakpoint:I(r),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:r.reactiveUrl?N:N(),height:r.reactiveDimensions?L:L(),orientation:r.reactiveDimensions?S:S(),width:r.reactiveDimensions?A:A(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return e?e.create(n):n},T=function(t,e){switch(e){case"string":case"number":case"boolean":return typeof t===e;case"any[]":return Array.isArray(t)&&t.length>0;case"Record<string, any>":return"object"==typeof t&&!Array.isArray(t)&&Object.keys(t).length>0;case"any":break;default:if(("boolean"==typeof t||"number"==typeof t||"string"==typeof t)&&e.indexOf("|")>0)return e.split("|").map(function(t){var e=t.trim();return/^'.*'$/.test(e)?e.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(e)?"true"===e:/^-?(\d*\.)?\d+$/.test(e)?Number.parseFloat(e):e.replace(/(^ ?'?|'? ?$)/g,"")}).includes(t)}return!0},M=function(t,e,r){var n,o,i,a={level:null,issues:[]};if(!r.enabled||!r.eventMatrix)return a;var s=r.eventMatrix,c=s.events,p=l(s,["events"]),u=c.indexOf(t);if(-1===u)return a.level="error",a.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:t,message:"'".concat(t,"': Event does not exist.")}),a;var f=x(e),h=Object.keys(p),m=f.filter(function(t){return!h.includes(t)});for(i in m.length>0&&(r.allowUnknown||(n=e,o=m,n&&b(n,function(t,e,r,i){o.includes("".concat(i.toString(),".").concat(e.toString()))&&(delete r[e],y(r)&&delete n[i])})),m.forEach(function(t){var e;a.level=null!==(e=a.level)&&void 0!==e?e:"warn",a.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:t,message:"'".concat(t,"': Property does not exist in the given Event Matrix.").concat(r.allowUnknown?"":" It was omitted from the DataLayer payload.")})})),p){var g=p[i],d="u">typeof g.e[u],w=1===g.r,k=e?v(e,i):void 0,_="u">typeof k;if(d&&w&&!_&&(a.level="error",a.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:i,message:"'".concat(i,"': The required property is missing.")}),!r.verbose)||_&&!T(k,g.t)&&(a.level="error",a.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:i,message:"'".concat(i,"': Wrong type detected. Expected '").concat(g.t,"', got '").concat(typeof k,"'.")}),!r.verbose))break}return a},C=function(t){function e(e,r,n){void 0===n&&(n="GlobalDataLayer");var o=t.call(this,e,r,n)||this;return f(o,"_eventNamePayloadFactory"),f(o,"_webPayloadFactory"),o._eventNamePayloadFactory=new g,o._webPayloadFactory=new D,o.setup(),o}return s(e,t),e.prototype.setup=function(){t.prototype.setup.call(this)},e}(function(){function t(t,e,r){void 0===r&&(r="GlobalDataLayer"),f(this,"_className"),f(this,"_settings"),f(this,"_defaultProperties"),f(this,"_logger"),f(this,"_webPropertiesHandled",!1),f(this,"_dataLayerStore"),f(this,"_extensions",new Map);var n=P(m,t||{});this._className=r,this._logger=new O(this._className,n.logging),this._settings=n,e?this._dataLayerStore=e:"u">typeof window?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return t.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(t.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),t.prototype.getRegisteredExtension=function(t){var e=new t;return this.getRegisteredExtensionByClassName(e.className)},t.prototype.getRegisteredExtensionByClassName=function(t){return this._extensions.has(t)?this._extensions.get(t):void 0},t.prototype.getRegisteredExtensions=function(){for(var t=[],e=0,r=this._extensions.values();e<r.length;e++){var n=r[e];t.push(n)}return t},t.prototype.registerExtension=function(t,e){if(void 0===e&&(e=!1),!e&&this._extensions.has(t.className)){this._logger.warn("Tried to register extension class <".concat(t.className,"> which already exists."));return}t.dataLayerInstance=this,this._extensions.set(t.className,t),e?this._logger.info("Overriden registration for extension class <".concat(t.className,">.")):this._logger.info("Registered extension class <".concat(t.className,">."))},t.prototype.removeExtension=function(t){var e=new t;if(this._extensions.has(e.className)){this._extensions.delete(e.className);return}this._logger.warn("Tried to remove not existing extension class <".concat(e.className,">."))},t.prototype.removeExtensionByClassName=function(t){if(this._extensions.has(t)){this._extensions.delete(t);return}this._logger.warn("Tried to remove not existing extension class <".concat(t,">."))},t.prototype.push=function(t,e,r){if(void 0===e&&(e=[{}]),0===t.length)return!1;var n,o,i=r&&!y(r)?P(this._settings,r):this._settings;Array.isArray(e)||(e=[e]),e.forEach(k);var a=this._eventNamePayloadFactory.create({event:t}),s=k(this.getDefaultProperties(t));i.clean.enabled&&i.clean.executionPlace===h.BEFORE_MERGE&&p([s||{}],e,!0).forEach(function(t){return w(t,i.clean.values)});var c=P.apply(void 0,p([a,s||{}],e,!1));if(i.clean.enabled&&i.clean.executionPlace===h.AFTER_MERGE&&w(c,i.clean.values),null!=(n=null==i?void 0:i.validation)&&n.enabled&&null!=(o=null==i?void 0:i.validation)&&o.eventMatrix){var l=M(t,c,i.validation),u=l.issues.sort(function(t,e){return t.level!==e.level&&"warn"===e.level?-1:0}).map(function(t){return"- [".concat(t.level,"]: ").concat(t.message)}).join("\n");switch(l.level){case"error":return this._logger.error("Validation failed for event '".concat(t,"' with errors/warnings: \n").concat(u),i.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(t,"' with warnings: \n").concat(u),i.logging);break;default:this._logger.info("Validation success for event '".concat(t,"'."),i.logging)}}return this._dataLayerStore.push(c),!0},t.prototype.getDefaultProperties=function(t){var e={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(function(r){return r.identifier===t?e.byName.push(r.data):Array.isArray(r.identifier)&&r.identifier.includes(t)?e.byArray.push(r.data):r.identifier instanceof RegExp&&r.identifier.test(t)?e.byRegex.push(r.data):void 0});var r=p(p(p([],e.byRegex,!0),e.byArray,!0),e.byName,!0);if(r.length)return P.apply(void 0,r)},t.prototype.setDefaultProperties=function(t,e){var r=this._defaultProperties.find(function(e){return e.identifier===t});if(r){r.data=P(r.data,e);return}this._defaultProperties.push({identifier:t,data:e})},t.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var t=j(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,t),this._webPropertiesHandled=!0}},t}()),H=new(function(){function t(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return t.prototype.initialise=function(){this.gdl=new C},t.prototype.pushDataLayerEvent=function(t,e){e?this.gdl.push(t,e):this.gdl.push(t)},t.prototype.setEnvironment=function(t){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:function(t){switch(t){case i.c.PRODUCTION:return"P";case i.c.PREVIEW:return"PP";default:return"K"}}(t)}})},t.prototype.setPageName=function(t){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:t}})},t.prototype.setUser=function(t,e){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:t},visitor:{loginStatus:e}})},t.prototype.setLocale=function(t){try{var e=(0,i.s)(t),r=e.country,n=e.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:r,language:n}})}catch(t){}},t.prototype.setDefaultProperties=function(t,e){var r={context:{applicationId:i.d},visitor:{loginStatus:!1}};try{var n=(0,i.s)(t),o=n.country,s=n.language;r=Object.assign(Object.assign({},r),{context:Object.assign(Object.assign({},r.context),{country:o,language:s,applicationName:i.D})})}catch(t){}(0,a.i)(e)&&(r=Object.assign(Object.assign({},r),{pageExperience:{pageName:e}})),this.gdl.setDefaultProperties(this.homeNavEventId,r)},t}())},3601:function(t,e,r){r.r(e),r.d(e,{phn_burger_button:function(){return c},phn_my_porsche_icon_button:function(){return l}});var n=r(3743),o=r(5056),i=r(282),a=r(7379),s=r(9696),c=function(){function t(t){(0,n.r)(this,t),this.hideLabel=void 0,this.alignLabel=void 0,this.isLoading=!1,this.theme=a.N.light,this.mode=a.f.navbar}return t.prototype.sendDataLayerEvent=function(t){o.g.pushDataLayerEvent(i.E.MORE_CLICK,{componentClick:{clickElementId:t.id,clickElementName:t.text,targetElement:"level1_drawer",clickElementType:i.C.Button}})},t.prototype.render=function(){var t=this,e=i.b.state.menu;return(0,n.h)(n.H,{class:"".concat((0,a.p)(this.mode,this.theme),"-theme")},(0,n.h)("phn-p-button-pure",{theme:(0,a.H)(this.theme,this.mode),onClick:function(){return t.sendDataLayerEvent(e)},aria:{"aria-haspopup":"dialog","aria-label":"open the menu"},"align-label":this.alignLabel,icon:"menu-lines",loading:this.isLoading,size:"inherit",hideLabel:this.hideLabel},e.text))},t}();c.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-burger-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-burger-button{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-burger-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-burger-button{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-burger-button{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-burger-button{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-burger-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-burger-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-burger-button{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-burger-button{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-burger-button{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-burger-button{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-burger-button-h{display:block;position:relative}.hero_light-theme.themed-background.sc-phn-burger-button-h{background:-webkit-gradient(linear, left top, left bottom, from(rgba(224, 224, 224, 0.9)), color-stop(20%, rgba(224, 224, 224, 0.9)), color-stop(26.67%, rgba(224, 224, 224, 0.852589)), color-stop(33.33%, rgba(225, 225, 225, 0.768225)), color-stop(40%, rgba(226, 226, 226, 0.668116)), color-stop(46.67%, rgba(227, 227, 227, 0.557309)), color-stop(53.33%, rgba(228, 228, 228, 0.442691)), color-stop(60%, rgba(229, 229, 229, 0.331884)), color-stop(66.67%, rgba(230, 230, 230, 0.231775)), color-stop(73.33%, rgba(231, 231, 231, 0.147411)), color-stop(80%, rgba(232, 232, 232, 0.0816599)), color-stop(86.67%, rgba(232, 232, 232, 0.03551)), color-stop(93.33%, rgba(232, 232, 232, 0.0086472)), to(rgba(232, 232, 232, 0)));background:linear-gradient(to bottom, rgba(224, 224, 224, 0.9) 0%, rgba(224, 224, 224, 0.9) 20%, rgba(224, 224, 224, 0.852589) 26.67%, rgba(225, 225, 225, 0.768225) 33.33%, rgba(226, 226, 226, 0.668116) 40%, rgba(227, 227, 227, 0.557309) 46.67%, rgba(228, 228, 228, 0.442691) 53.33%, rgba(229, 229, 229, 0.331884) 60%, rgba(230, 230, 230, 0.231775) 66.67%, rgba(231, 231, 231, 0.147411) 73.33%, rgba(232, 232, 232, 0.0816599) 80%, rgba(232, 232, 232, 0.03551) 86.67%, rgba(232, 232, 232, 0.0086472) 93.33%, rgba(232, 232, 232, 0) 100%)}@media (min-width: 0px){.hero_light-theme.themed-background.sc-phn-burger-button-h{height:72px}}@media (min-width: 760px){.hero_light-theme.themed-background.sc-phn-burger-button-h{height:148px}}.hero_light-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:black}.hero_dark-theme.themed-background.sc-phn-burger-button-h{background:-webkit-gradient(linear, left top, left bottom, from(rgba(31, 31, 31, 0.9)), color-stop(20%, rgba(31, 31, 31, 0.9)), color-stop(26.67%, rgba(31, 31, 31, 0.852589)), color-stop(33.33%, rgba(32, 32, 32, 0.768225)), color-stop(40%, rgba(33, 33, 33, 0.668116)), color-stop(46.67%, rgba(34, 34, 34, 0.557309)), color-stop(53.33%, rgba(35, 35, 35, 0.442691)), color-stop(60%, rgba(36, 36, 36, 0.331884)), color-stop(66.67%, rgba(37, 37, 37, 0.231775)), color-stop(73.33%, rgba(38, 38, 38, 0.147411)), color-stop(80%, rgba(39, 39, 39, 0.0816599)), color-stop(86.67%, rgba(39, 39, 39, 0.03551)), color-stop(93.33%, rgba(39, 39, 39, 0.0086472)), to(rgba(39, 39, 39, 0)));background:linear-gradient(to bottom, rgba(31, 31, 31, 0.9) 0%, rgba(31, 31, 31, 0.9) 20%, rgba(31, 31, 31, 0.852589) 26.67%, rgba(32, 32, 32, 0.768225) 33.33%, rgba(33, 33, 33, 0.668116) 40%, rgba(34, 34, 34, 0.557309) 46.67%, rgba(35, 35, 35, 0.442691) 53.33%, rgba(36, 36, 36, 0.331884) 60%, rgba(37, 37, 37, 0.231775) 66.67%, rgba(38, 38, 38, 0.147411) 73.33%, rgba(39, 39, 39, 0.0816599) 80%, rgba(39, 39, 39, 0.03551) 86.67%, rgba(39, 39, 39, 0.0086472) 93.33%, rgba(39, 39, 39, 0) 100%)}@media (min-width: 0px){.hero_dark-theme.themed-background.sc-phn-burger-button-h{height:72px}}@media (min-width: 760px){.hero_dark-theme.themed-background.sc-phn-burger-button-h{height:148px}}.hero_dark-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:white}.navbar-theme.themed-background.sc-phn-burger-button-h{background:white;border-bottom:1px solid #e3e4e5}.navbar-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:black}.transparent_dark-theme.themed-background.sc-phn-burger-button-h{background:transparent}.transparent_dark-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:white}.transparent_light-theme.themed-background.sc-phn-burger-button-h{background:transparent}.transparent_light-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:white}.sc-phn-burger-button-h phn-p-button-pure.sc-phn-burger-button{font-size:1rem;margin:0.375rem}@media (min-width: 760px){.sc-phn-burger-button-h phn-p-button-pure.sc-phn-burger-button{font-size:1rem;margin:0.5rem}}@media (min-width: 1000px){.sc-phn-burger-button-h phn-p-button-pure.sc-phn-burger-button{font-size:1rem}}";var l=function(){function t(t){(0,n.r)(this,t),this.mode=a.f.navbar,this.theme=a.N.light,this.isMyPorscheHoveredOn=!1}return t.prototype.sendDataLayerEvent=function(){o.g.pushDataLayerEvent(i.E.CONTEXTUAL_BUTTON_CLICK,{componentClick:{clickElementId:s.a.MY_PORSCHE,clickElementName:"open the my porsche menu",clickElementType:i.C.Button}})},t.prototype.render=function(){var t=this,e=i.n.state,r=e.unreadMessagesCount,o=e.loggedInState,c=(0,a.I)(o);return(0,n.h)(n.H,null,(0,n.h)("phn-p-button-pure",{icon:"user".concat(c?"-filled":""),"hide-label":"true",stretch:"true","data-id":"".concat(s.a.MY_PORSCHE,"-contextual-button"),aria:"{ 'aria-haspopup': 'dialog', 'aria-label' : 'open the my porsche menu' }","data-test-id":"myporsche-button",theme:(0,a.H)(this.theme,this.mode),onMouseEnter:function(){t.isMyPorscheHoveredOn=!0},onMouseLeave:function(){t.isMyPorscheHoveredOn=!1},onClick:function(){t.sendDataLayerEvent()}}),r>0?(0,n.h)("span",{class:"myporsche-unread-messages-indicator ".concat((0,a.H)(this.theme,this.mode))}):null)},t}();l.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-my-porsche-icon-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-my-porsche-icon-button{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-my-porsche-icon-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-my-porsche-icon-button{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-my-porsche-icon-button{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-my-porsche-icon-button{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-my-porsche-icon-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-my-porsche-icon-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-my-porsche-icon-button{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-my-porsche-icon-button{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-my-porsche-icon-button{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-my-porsche-icon-button{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-my-porsche-icon-button-h phn-p-button-pure.sc-phn-my-porsche-icon-button{position:relative;display:inline-block;vertical-align:top;outline:0px !important}.sc-phn-my-porsche-icon-button-h .myporsche-unread-messages-indicator.sc-phn-my-porsche-icon-button{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%}.sc-phn-my-porsche-icon-button-h .myporsche-unread-messages-indicator.light.sc-phn-my-porsche-icon-button{background-color:#2762ec}.sc-phn-my-porsche-icon-button-h .myporsche-unread-messages-indicator.dark.sc-phn-my-porsche-icon-button{background-color:#178bff}"},9696:function(t,e,r){r.r(e),r.d(e,{R:function(){return o},a:function(){return s},b:function(){return b},c:function(){return c},d:function(){return d},e:function(){return u},f:function(){return l},g:function(){return m},h:function(){return p},i:function(){return h},j:function(){return f},r:function(){return g}});var n,o,i=r(7379),a=function(t,e,r){if(r||2==arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},s={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};function c(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.reduce(function(t,e){return a(a([],t,!0),(0,i.g)(e).split("/"),!0)},[]).filter(Boolean).join("/")}function l(t){if((0,i.i)(t))return Object.values(s).find(function(e){return t.startsWith(e)})}function p(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.MODELS],t,!1))}function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.DEALER_SEARCH],t,!1))}function f(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.MY_PORSCHE],t,!1))}function h(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.VEHICLE_PURCHASE],t,!1))}function m(t){return t.split("/").slice(-1)[0]}function g(t){return t.split("/").slice(0,-1).join("/")}function d(t){switch(l(t)){case s.MAIN_MENU:return 1;case t:return 2;default:return t.split("/").length+1}}function b(t){var e=g(t);return(0,i.i)(e)?e:s.MAIN_MENU}(n=o||(o={}))[n.LEVEL_ZERO=-1]="LEVEL_ZERO",n[n.LEVEL_ONE=0]="LEVEL_ONE",n[n.LEVEL_TWO=1]="LEVEL_TWO"}}]);