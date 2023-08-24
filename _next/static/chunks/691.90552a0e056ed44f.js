"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{691:function(e,t,n){n.r(t),n.d(t,{g:function(){return G}});var r,i,o=n(5089),a=n(3555),s=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},u=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},p=Object.defineProperty,f=function(e,t,n){var r;return(r="symbol"!=typeof t?t+"":t)in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,n},g={BEFORE_MERGE:"BEFORE_MERGE",AFTER_MERGE:"AFTER_MERGE"},d={clean:{enabled:!1,executionPlace:g.AFTER_MERGE,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},h=function(){function e(){}return e.prototype.create=function(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}},e}(),v=function(e,t){var n;for(n in e)if(!(!e||!e[n])&&!1===t(e[n],n))return!1;return!0},y=function(e,t){return v(e,function(n,r){for(var i in e[r])if(!1===t(n[i],i,n,r))return!1;return!0})},w=function(e){for(var t in e)return!1;return!0},_=function(e,t){if(void 0===t){var n;t=(null==(n=d.clean)?void 0:n.values)||[]}return y(e,function(n,r,i,o){t.includes(n)&&(delete i[r],w(i)&&delete e[o])}),e},b=function(e){return y(e,function(e,t,n){return"function"!=typeof e||(n[t]=e()),!0}),e},m=function(e,t){var n=t.split(".");if(2===n.length){var r=e[n[0]];if(r)return r[n[1]]}},E=function(e){if(!e)return[];var t=[];return y(e,function(e,n,r,i){t.push("".concat(i.toString(),".").concat(n.toString()))}),t},P=d.logging,x=((i=x||{})[i.error=0]="error",i[i.warn=1]="warn",i[i.log=2]="log",i),O=function(){function e(e,t){f(this,"prefix"),f(this,"settings"),this.prefix=e,this.settings=c(c({},P),t)}return e.prototype._getMergedSettings=function(e){return e?c(c({},this.settings),e):this.settings},e.prototype._isAllowed=function(e,t){if(!O.isAvailable||!t.enabled)return!1;var n=x[t.level];switch(e){case"error":case"warn":return n>=x[e];case"info":case"log":case"debug":case"dir":return n>=2;default:return!1}},e.prototype._log=function(e,t,n){void 0===t&&(t="log");var r=this._getMergedSettings(n);this._isAllowed(t,r)&&("dir"===t?(console.log("[".concat(this.prefix,"] ").concat(t,":")),console[t](e)):console[t]("[".concat(this.prefix,"] ").concat(e)))},e.prototype.log=function(e,t){this._log(e,"log",t)},e.prototype.dir=function(e,t){this._log(e,"dir",t)},e.prototype.debug=function(e,t){this._log(e,"debug",t)},e.prototype.error=function(e,t){this._log(e,"error",t)},e.prototype.info=function(e,t){this._log(e,"info",t)},e.prototype.warn=function(e,t){this._log(e,"warn",t)},e}();f(O,"isAvailable","u">typeof console);var N=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};return e.forEach(function(e){if(!w(e)){var t,r=c(c({},n),e);for(t in r)"object"!=typeof r[t]||Array.isArray(r[t])?n[t]=r[t]:n[t]=c(c({},n[t]),e[t])}}),n},R=function(){function e(){}return e.prototype.create=function(e){return _({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])},e}(),D=d.webProperties,S=function(){return window.location.href.replace(/[?#].*/,"")},A=function(){return window.innerHeight.toString()},j=function(){return window.innerHeight>window.innerWidth?"p":"l"},T=function(){return window.innerWidth.toString()},k=function(e){if(e.breakpoints&&!(e.breakpoints.length<1)){var t=e.breakpoints,n=function(){for(var e=window.innerWidth,n=0,r=0;r<t.length&&e>=t[r];)n=t[r],r++;return n.toString()};return e.reactiveDimensions?n:n()}},I=function(e,t){var n=c(c({},D),e),r={breakpoint:k(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?S:S(),height:n.reactiveDimensions?A:A(),orientation:n.reactiveDimensions?j:j(),width:n.reactiveDimensions?T:T(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return t?t.create(r):r},M=function(e,t){switch(t){case"string":case"number":case"boolean":return typeof e===t;case"any[]":return Array.isArray(e)&&e.length>0;case"Record<string, any>":return"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).length>0;case"any":break;default:if(t.indexOf("|")>0){var n=t.split("|").map(function(e){return e.trim().replace(/(^ ?'?|'? ?$)/g,"")});return"string"==typeof e&&n.includes(e)}}return!0},L=function(e,t,n){var r,i,o,a={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return a;var s=n.eventMatrix,c=s.events,u=l(s,["events"]),p=c.indexOf(e);if(-1===p)return a.level="error",a.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:e,message:"'".concat(e,"': Event does not exist.")}),a;var f=E(t),g=Object.keys(u),d=f.filter(function(e){return!g.includes(e)});for(o in d.length>0&&(n.allowUnknown||(r=t,i=d,r&&y(r,function(e,t,n,o){!i.includes("".concat(o.toString(),".").concat(t.toString()))||(delete n[t],w(n)&&delete r[o])})),d.forEach(function(e){var t;a.level=null!=(t=a.level)?t:"warn",a.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:e,message:"'".concat(e,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})})),u){var h=u[o],v="u">typeof h.e[p],_=1===h.r,b=t?m(t,o):void 0,P="u">typeof b;if(v&&_&&!P&&(a.level="error",a.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:o,message:"'".concat(o,"': The required property is missing.")}),!n.verbose)||P&&!M(b,h.t)&&(a.level="error",a.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:o,message:"'".concat(o,"': Wrong type detected. Expected '").concat(h.t,"', got '").concat(typeof b,"'.")}),!n.verbose))break}return a},F=function(e){function t(t,n,r){void 0===r&&(r="GlobalDataLayer");var i=e.call(this,t,n,r)||this;return f(i,"_eventNamePayloadFactory"),f(i,"_webPayloadFactory"),i._eventNamePayloadFactory=new h,i._webPayloadFactory=new R,i.setup(),i}return s(t,e),t.prototype.setup=function(){e.prototype.setup.call(this)},t}(function(){function e(e,t,n){void 0===n&&(n="GlobalDataLayer"),f(this,"_className"),f(this,"_settings"),f(this,"_defaultProperties"),f(this,"_logger"),f(this,"_webPropertiesHandled",!1),f(this,"_dataLayerStore"),f(this,"_extensions",new Map);var r=N(d,e||{});this._className=n,this._logger=new O(this._className,r.logging),this._settings=r,t?this._dataLayerStore=t:"u">typeof window?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return e.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(e.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),e.prototype.getRegisteredExtension=function(e){var t=new e;return this.getRegisteredExtensionByClassName(t.className)},e.prototype.getRegisteredExtensionByClassName=function(e){return this._extensions.has(e)?this._extensions.get(e):void 0},e.prototype.getRegisteredExtensions=function(){for(var e=[],t=0,n=this._extensions.values();t<n.length;t++){var r=n[t];e.push(r)}return e},e.prototype.registerExtension=function(e,t){if(void 0===t&&(t=!1),!t&&this._extensions.has(e.className)){this._logger.warn("Tried to register extension class <".concat(e.className,"> which already exists."));return}e.dataLayerInstance=this,this._extensions.set(e.className,e),t?this._logger.info("Overriden registration for extension class <".concat(e.className,">.")):this._logger.info("Registered extension class <".concat(e.className,">."))},e.prototype.removeExtension=function(e){var t=new e;if(this._extensions.has(t.className)){this._extensions.delete(t.className);return}this._logger.warn("Tried to remove not existing extension class <".concat(t.className,">."))},e.prototype.removeExtensionByClassName=function(e){if(this._extensions.has(e)){this._extensions.delete(e);return}this._logger.warn("Tried to remove not existing extension class <".concat(e,">."))},e.prototype.push=function(e,t,n){if(void 0===t&&(t=[{}]),0===e.length)return!1;var r,i,o=n&&!w(n)?N(this._settings,n):this._settings;Array.isArray(t)||(t=[t]),t.forEach(b);var a=this._eventNamePayloadFactory.create({event:e}),s=b(this.getDefaultProperties(e));o.clean.enabled&&o.clean.executionPlace===g.BEFORE_MERGE&&u([s||{}],t,!0).forEach(function(e){return _(e,o.clean.values)});var c=N.apply(void 0,u([a,s||{}],t,!1));if(o.clean.enabled&&o.clean.executionPlace===g.AFTER_MERGE&&_(c,o.clean.values),(null==(r=null==o?void 0:o.validation)?void 0:r.enabled)&&(null==(i=null==o?void 0:o.validation)?void 0:i.eventMatrix)){var l=L(e,c,o.validation),p=l.issues.sort(function(e,t){return e.level!==t.level&&"warn"===t.level?-1:0}).map(function(e){return"- [".concat(e.level,"]: ").concat(e.message)}).join("\n");switch(l.level){case"error":return this._logger.error("Validation failed for event '".concat(e,"' with errors/warnings: \n").concat(p),o.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(e,"' with warnings: \n").concat(p),o.logging);break;default:this._logger.info("Validation success for event '".concat(e,"'."),o.logging)}}return this._dataLayerStore.push(c),!0},e.prototype.getDefaultProperties=function(e){var t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(function(n){return n.identifier===e?t.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(e)?t.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(e)?t.byRegex.push(n.data):void 0});var n=u(u(u([],t.byRegex,!0),t.byArray,!0),t.byName,!0);if(n.length)return N.apply(void 0,n)},e.prototype.setDefaultProperties=function(e,t){var n=this._defaultProperties.find(function(t){return t.identifier===e});if(n){n.data=N(n.data,t);return}this._defaultProperties.push({identifier:e,data:t})},e.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var e=I(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}},e}()),G=new(function(){function e(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return e.prototype.initialise=function(){this.gdl=new F},e.prototype.pushDataLayerEvent=function(e,t){t?this.gdl.push(e,t):this.gdl.push(e)},e.prototype.setEnvironment=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:function(e){switch(e){case o.b.PRODUCTION:return"P";case o.b.PREVIEW:return"PP";default:return"K"}}(e)}})},e.prototype.setPageName=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})},e.prototype.setUser=function(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})},e.prototype.setLocale=function(e){try{var t=(0,o.s)(e),n=t.country,r=t.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(e){}},e.prototype.setDefaultProperties=function(e,t){var n={context:{applicationId:o.c},visitor:{loginStatus:!1}};try{var r=(0,o.s)(e),i=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:i,language:s,applicationName:o.D})})}catch(e){}(0,a.i)(t)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},e}())}}]);