"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5584,7104,8900,9715,1608,3018],{7104:function(e,t,n){n.r(t),n.d(t,{a:function(){return d}});var r=n(427),i=n(1608),o=n(3582),a=n(2048),s=n(9715),l={};function c(e){var t=l.drawerType,n=((0,a.i)(e)?(0,r.b)(e):i.r.state.routingKeyHistory[i.r.state.routingKeyPointer])||"",o=(0,r.g)(n),c=(0,r.d)(n),u=c-1;if(!(0,a.i)(n))return"level0";var f=(0,a.i)(n)?"level".concat(c,"-").concat(o):"level".concat(c-1,"-unknown");if("doubleDrawer"===t){if(""===n)return"level".concat(u,"-unknown_level").concat(c,"-unknown");var d=(0,s.g)(n);return"level".concat(u,"-").concat(d,"_").concat(f)}return f}function u(e,t,n){var i=l.drawerType,o=(0,r.d)(e);if("doubleDrawer"!==i)return(0,a.i)(e)?"level".concat(o,"_").concat(t):"level".concat(o-1,"_").concat(t);var s=o;return n&&(s-=1),"level".concat(s,"_").concat(t)}function f(){return l.drawerType}var d={setDrawerType:function(e){l.drawerType=e},getDealerResultsLoadDisplayElementId:function(e){return"doubleDrawer"===f()?e:c()},calculateDisplayElementId:c,getDealerResultsLoadDisplayElementType:function(){return"doubleDrawer"===f()?o.h:u("",o.f.dealerSearchForm)},calculateDisplayElementType:u,getModelName:function(e){var t=e.link.split("/"),n=t[t.length-1];return""===n?void 0===t[t.length-2]?"":t[t.length-2].split("-").join(" "):n.split("-").join(" ")},getModelTargetElement:function(e,t){if(e.includes("models")){var n=(0,r.d)(e);return"level".concat(n,"_").concat(t.toLowerCase())}}}},8900:function(e,t,n){n.r(t),n.d(t,{g:function(){return j}});var r,i,o=n(3582),a=n(2048),s=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},u=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},f=Object.defineProperty,d=function(e,t,n){var r;return(r="symbol"!=typeof t?t+"":t)in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,n},p={BEFORE_MERGE:"BEFORE_MERGE",AFTER_MERGE:"AFTER_MERGE"},h={clean:{enabled:!1,executionPlace:p.AFTER_MERGE,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},y=function(){function e(){}return e.prototype.create=function(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}},e}(),g=function(e,t){var n;for(n in e)if(!(!e||!e[n])&&!1===t(e[n],n))return!1;return!0},v=function(e,t){return g(e,function(n,r){for(var i in e[r])if(!1===t(n[i],i,n,r))return!1;return!0})},m=function(e){for(var t in e)return!1;return!0},E=function(e,t){if(void 0===t){var n;t=(null==(n=h.clean)?void 0:n.values)||[]}return v(e,function(n,r,i,o){t.includes(n)&&(delete i[r],m(i)&&delete e[o])}),e},b=function(e){return v(e,function(e,t,n){return"function"!=typeof e||(n[t]=e()),!0}),e},w=function(e,t){var n=t.split(".");if(2===n.length){var r=e[n[0]];if(r)return r[n[1]]}},x=function(e){if(!e)return[];var t=[];return v(e,function(e,n,r,i){t.push("".concat(i.toString(),".").concat(n.toString()))}),t},k=h.logging,_=((i=_||{})[i.error=0]="error",i[i.warn=1]="warn",i[i.log=2]="log",i),S=function(){function e(e,t){d(this,"prefix"),d(this,"settings"),this.prefix=e,this.settings=l(l({},k),t)}return e.prototype._getMergedSettings=function(e){return e?l(l({},this.settings),e):this.settings},e.prototype._isAllowed=function(t,n){if(!e.isAvailable||!n.enabled)return!1;var r=_[n.level];switch(t){case"error":case"warn":return r>=_[t];case"info":case"log":case"debug":case"dir":return r>=2;default:return!1}},e.prototype._log=function(e,t,n){void 0===t&&(t="log");var r=this._getMergedSettings(n);this._isAllowed(t,r)&&("dir"===t?(console.log("[".concat(this.prefix,"] ").concat(t,":")),console[t](e)):console[t]("[".concat(this.prefix,"] ").concat(e)))},e.prototype.log=function(e,t){this._log(e,"log",t)},e.prototype.dir=function(e,t){this._log(e,"dir",t)},e.prototype.debug=function(e,t){this._log(e,"debug",t)},e.prototype.error=function(e,t){this._log(e,"error",t)},e.prototype.info=function(e,t){this._log(e,"info",t)},e.prototype.warn=function(e,t){this._log(e,"warn",t)},e}();d(S,"isAvailable","u">typeof console);var R=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};return e.forEach(function(e){if(!m(e)){var t,r=l(l({},n),e);for(t in r)"object"!=typeof r[t]||Array.isArray(r[t])?n[t]=r[t]:n[t]=l(l({},n[t]),e[t])}}),n},P=function(){function e(){}return e.prototype.create=function(e){return E({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])},e}(),D=h.webProperties,I=function(){return window.location.href.replace(/[?#].*/,"")},O=function(){return window.innerHeight.toString()},C=function(){return window.innerHeight>window.innerWidth?"p":"l"},L=function(){return window.innerWidth.toString()},N=function(e){if(e.breakpoints&&!(e.breakpoints.length<1)){var t=e.breakpoints,n=function(){for(var e=window.innerWidth,n=0,r=0;r<t.length&&e>=t[r];)n=t[r],r++;return n.toString()};return e.reactiveDimensions?n:n()}},A=function(e,t){var n=l(l({},D),e),r={breakpoint:N(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?I:I(),height:n.reactiveDimensions?O:O(),orientation:n.reactiveDimensions?C:C(),width:n.reactiveDimensions?L:L(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return t?t.create(r):r},H=function(e,t){switch(t){case"string":case"number":case"boolean":return typeof e===t;case"any[]":return Array.isArray(e)&&e.length>0;case"Record<string, any>":return"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).length>0;case"any":break;default:if(("boolean"==typeof e||"number"==typeof e||"string"==typeof e)&&t.indexOf("|")>0)return t.split("|").map(function(e){var t=e.trim();return/^'.*'$/.test(t)?t.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(t)?"true"===t:/^-?(\d*\.)?\d+$/.test(t)?Number.parseFloat(t):t.replace(/(^ ?'?|'? ?$)/g,"")}).includes(e)}return!0},M=function(e,t,n){var r,i,o,a={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return a;var s=n.eventMatrix,l=s.events,u=c(s,["events"]),f=l.indexOf(e);if(-1===f)return a.level="error",a.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:e,message:"'".concat(e,"': Event does not exist.")}),a;var d=x(t),p=Object.keys(u),h=d.filter(function(e){return!p.includes(e)});for(o in h.length>0&&(n.allowUnknown||(r=t,i=h,r&&v(r,function(e,t,n,o){i.includes("".concat(o.toString(),".").concat(t.toString()))&&(delete n[t],m(n)&&delete r[o])})),h.forEach(function(e){var t;a.level=null!==(t=a.level)&&void 0!==t?t:"warn",a.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:e,message:"'".concat(e,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})})),u){var y=u[o],g="u">typeof y.e[f],E=1===y.r,b=t?w(t,o):void 0,k="u">typeof b;if(g&&E&&!k&&(a.level="error",a.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:o,message:"'".concat(o,"': The required property is missing.")}),!n.verbose)||k&&!H(b,y.t)&&(a.level="error",a.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:o,message:"'".concat(o,"': Wrong type detected. Expected '").concat(y.t,"', got '").concat(typeof b,"'.")}),!n.verbose))break}return a},T=function(e){function t(t,n,r){void 0===r&&(r="GlobalDataLayer");var i=e.call(this,t,n,r)||this;return d(i,"_eventNamePayloadFactory"),d(i,"_webPayloadFactory"),i._eventNamePayloadFactory=new y,i._webPayloadFactory=new P,i.setup(),i}return s(t,e),t.prototype.setup=function(){e.prototype.setup.call(this)},t}(function(){function e(e,t,n){void 0===n&&(n="GlobalDataLayer"),d(this,"_className"),d(this,"_settings"),d(this,"_defaultProperties"),d(this,"_logger"),d(this,"_webPropertiesHandled",!1),d(this,"_dataLayerStore"),d(this,"_extensions",new Map);var r=R(h,e||{});this._className=n,this._logger=new S(this._className,r.logging),this._settings=r,t?this._dataLayerStore=t:"u">typeof window?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return e.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(e.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),e.prototype.getRegisteredExtension=function(e){var t=new e;return this.getRegisteredExtensionByClassName(t.className)},e.prototype.getRegisteredExtensionByClassName=function(e){return this._extensions.has(e)?this._extensions.get(e):void 0},e.prototype.getRegisteredExtensions=function(){for(var e=[],t=0,n=this._extensions.values();t<n.length;t++){var r=n[t];e.push(r)}return e},e.prototype.registerExtension=function(e,t){if(void 0===t&&(t=!1),!t&&this._extensions.has(e.className)){this._logger.warn("Tried to register extension class <".concat(e.className,"> which already exists."));return}e.dataLayerInstance=this,this._extensions.set(e.className,e),t?this._logger.info("Overriden registration for extension class <".concat(e.className,">.")):this._logger.info("Registered extension class <".concat(e.className,">."))},e.prototype.removeExtension=function(e){var t=new e;if(this._extensions.has(t.className)){this._extensions.delete(t.className);return}this._logger.warn("Tried to remove not existing extension class <".concat(t.className,">."))},e.prototype.removeExtensionByClassName=function(e){if(this._extensions.has(e)){this._extensions.delete(e);return}this._logger.warn("Tried to remove not existing extension class <".concat(e,">."))},e.prototype.push=function(e,t,n){if(void 0===t&&(t=[{}]),0===e.length)return!1;var r,i,o=n&&!m(n)?R(this._settings,n):this._settings;Array.isArray(t)||(t=[t]),t.forEach(b);var a=this._eventNamePayloadFactory.create({event:e}),s=b(this.getDefaultProperties(e));o.clean.enabled&&o.clean.executionPlace===p.BEFORE_MERGE&&u([s||{}],t,!0).forEach(function(e){return E(e,o.clean.values)});var l=R.apply(void 0,u([a,s||{}],t,!1));if(o.clean.enabled&&o.clean.executionPlace===p.AFTER_MERGE&&E(l,o.clean.values),null!=(r=null==o?void 0:o.validation)&&r.enabled&&null!=(i=null==o?void 0:o.validation)&&i.eventMatrix){var c=M(e,l,o.validation),f=c.issues.sort(function(e,t){return e.level!==t.level&&"warn"===t.level?-1:0}).map(function(e){return"- [".concat(e.level,"]: ").concat(e.message)}).join("\n");switch(c.level){case"error":return this._logger.error("Validation failed for event '".concat(e,"' with errors/warnings: \n").concat(f),o.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(e,"' with warnings: \n").concat(f),o.logging);break;default:this._logger.info("Validation success for event '".concat(e,"'."),o.logging)}}return this._dataLayerStore.push(l),!0},e.prototype.getDefaultProperties=function(e){var t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(function(n){return n.identifier===e?t.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(e)?t.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(e)?t.byRegex.push(n.data):void 0});var n=u(u(u([],t.byRegex,!0),t.byArray,!0),t.byName,!0);if(n.length)return R.apply(void 0,n)},e.prototype.setDefaultProperties=function(e,t){var n=this._defaultProperties.find(function(t){return t.identifier===e});if(n){n.data=R(n.data,t);return}this._defaultProperties.push({identifier:e,data:t})},e.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var e=A(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}},e}()),j=new(function(){function e(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return e.prototype.initialise=function(){this.gdl=new T},e.prototype.pushDataLayerEvent=function(e,t){t?this.gdl.push(e,t):this.gdl.push(e)},e.prototype.setEnvironment=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:function(e){switch(e){case o.b.PRODUCTION:return"P";case o.b.PREVIEW:return"PP";default:return"K"}}(e)}})},e.prototype.setPageName=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})},e.prototype.setUser=function(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})},e.prototype.setLocale=function(e){try{var t=(0,o.s)(e),n=t.country,r=t.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(e){}},e.prototype.setDefaultProperties=function(e,t){var n={context:{applicationId:o.c},visitor:{loginStatus:!1}};try{var r=(0,o.s)(e),i=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:i,language:s,applicationName:o.D})})}catch(e){}(0,a.i)(t)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},e}())},9715:function(e,t,n){n.r(t),n.d(t,{a:function(){return d},b:function(){return p},c:function(){return h},d:function(){return c},e:function(){return l},f:function(){return f},g:function(){return u}});var r=n(3582),i=n(427),o=n(8024),a=n(2048),s=n(3690);function l(e,t,n,l,c,u){var f,d,p,h=e.dealer,y=e.models,g=e.myPorsche,v=e.vehiclePurchase,m=e.shop,E=e.experience,b=e.services,w=t.savedDealerCookie,x=t.ppnDealers,k=r.n.state.app,_=null!==w?x[w.id]:void 0;"en-SG"===n&&h.search.outboundLink&&(p=null===(f=h.search.outboundLink)||void 0===f?void 0:f.link);var S=[i.a.DEALER_SEARCH];void 0!==_&&(null===(d=o.d.state.results)||void 0===d?void 0:d.length)!=1&&S.push((0,i.c)(_.ppnDealer.id));var R=[{elementId:i.a.MODELS,routingKeys:[i.a.MODELS],analyticsId:y.id,text:y.text},{elementId:i.a.VEHICLE_PURCHASE,routingKeys:[i.a.VEHICLE_PURCHASE],analyticsId:v.id,text:v.text},{elementId:i.a.SERVICES,routingKeys:[i.a.SERVICES],analyticsId:b.id,text:b.text},{elementId:i.a.EXPERIENCE,routingKeys:[i.a.EXPERIENCE],analyticsId:E.id,text:E.text}],P={elementId:i.a.DEALER_SEARCH,routingKeys:S,analyticsId:h.id,text:h.text,link:p,iconRight:"en-SG"===n&&h.search.outboundLink?"external":"arrow-head-right"};if(null!==m&&""!==m.text){var D={elementId:i.a.SHOP,routingKeys:[i.a.SHOP],analyticsId:m.id,text:m.text,link:k!==a.A.shop?m.link:void 0,datalayerEventAction:r.E.NAVIGATION_LINK_CLICK,iconRight:"external"};R.splice(2,0,D)}if(function(e,t){try{var n=(0,r.s)(e).country,i=!(0,r.i)(n)&&t;return(s.f.isDealerSearchChinaEnabled()||"CN"!==n)&&i}catch(e){}return!0}(n,u)){var I="en"===(0,r.s)(n).language?null==_?void 0:_.ppnDealer.name:(0,a.i)(null==_?void 0:_.ppnDealer.nameLocalized)?null==_?void 0:_.ppnDealer.nameLocalized:null==_?void 0:_.ppnDealer.name;(0,a.i)(I)&&(P.subtext=I)}else P.link=h.search.map.link,P.onClick=void 0;if(R.push(P),null!==g){var O=(0,a.I)(l),C=O?(0,a.z)(l,g.loggedInFallback):void 0;R.push({elementId:i.a.MY_PORSCHE,routingKeys:[i.a.MY_PORSCHE],analyticsId:g.id,text:g.text,subtext:C,showIconModifier:O&&c>0})}return R}function c(e,t,n,o,a,s,c){var u=(0,i.f)(s);switch(u){case s:break;case i.a.MODELS:return e.models.series.map(function(e){return{elementId:(0,i.h)(e.id),routingKeys:[(0,i.h)(e.id)],analyticsId:e.id,text:e.name,subtext:e.tags.map(function(e){return e.text}).join(" | "),renderSignatures:!0,datalayerEventAction:r.E.MODEL_RANGE_CLICK}});case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.SERVICES:case i.a.EXPERIENCE:var d=(0,i.r)(s),p=f(e,d,u);if(null!==p)return p.children.map(function(e){return{elementId:(0,i.e)(d,e.id),routingKeys:[(0,i.e)(d,e.id)],analyticsId:e.id,text:e.text,link:e.link}})}return l(e,t,n,o,a,c)}function u(e){switch((0,i.f)(e)){case e:break;case i.a.DEALER_SEARCH:return i.a.DEALER_SEARCH;case i.a.MODELS:return i.a.MODELS;case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.SERVICES:case i.a.EXPERIENCE:var t=(0,i.r)(e);return(0,i.g)(t)}return i.a.MAIN_MENU}function f(e,t,n){var s,l=e.vehiclePurchase,c=e.experience,u=e.shop,f=e.legacyMore,d=e.services,p=((s={})[i.a.VEHICLE_PURCHASE]=l,s[i.a.EXPERIENCE]=c,s[i.a.SHOP]=u,s[i.a.MORE]=f,s[i.a.SERVICES]=d,s)[n];if(null==p)return null;(0,a.i)(p.experienceName)&&(p.children=(0,o.a)().executeContentChange(p));var h=(0,i.g)(t);return h===n?p:(0,r.j)(p,h)}function d(e,t){if(!(0,a.i)(t))return"";var n=(0,i.f)(t);switch(n){case i.a.MODELS:return e.models.text;case i.a.DEALER_SEARCH:if(1===e.dealer.numberOfDealers)break;return e.dealer.details.backToSearch;case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.MORE:case i.a.EXPERIENCE:var o=f(r.a.state,t,n);if(null!==o)return o.text}return""}function p(e,t,n){var o,a,s,l=e.dealer,c=e.myPorsche,u=e.models,f=e.vehiclePurchase,d=e.experience,p=e.shop,h=e.legacyMore,y=e.services;switch(n){case i.a.MORE:case i.a.SHOP:case i.a.EXPERIENCE:case i.a.SERVICES:case i.a.VEHICLE_PURCHASE:if(void 0===(s=((o={})[i.a.VEHICLE_PURCHASE]=f,o[i.a.EXPERIENCE]=d,o[i.a.SHOP]=p,o[i.a.MORE]=h,o[i.a.SERVICES]=y,o)[n]))break;var g=(0,i.g)(t);return g===n?null==s?void 0:s.text:null===(a=(0,r.j)(s,g))||void 0===a?void 0:a.text;case i.a.SERIES:case i.a.MODELS:var v=(0,i.g)(t);return void 0===(s=u.series.find(function(e){return v===e.id}))?u.text:null==s?void 0:s.id;case i.a.DEALER_SEARCH:return l.search.text;case i.a.MY_PORSCHE:return null==c?void 0:c.text}return""}function h(e,t,n){var s=r.a.state,l=s.myPorsche,c=s.models,u=r.n.state.loggedInState;if(e===i.a.MY_PORSCHE)return(0,a.I)(u)?(0,a.z)(u,(null==l?void 0:l.loggedInFallback)||""):"";if(e===i.a.DEALER_SEARCH){var f=o.d.state,d=f.savedDealerCookie,p=f.ppnDealers,h=null!==d?p[d.id]:void 0,y=n&&"en"===(0,r.s)(n).language?null==h?void 0:h.ppnDealer.name:(0,a.i)(null==h?void 0:h.ppnDealer.nameLocalized)?null==h?void 0:h.ppnDealer.nameLocalized:null==h?void 0:h.ppnDealer.name;return d?y:""}if(e===i.a.MODELS&&(0,a.i)(t)){var g=(0,i.g)(t),v=c.series.find(function(e){return g===e.id});if(v)return v.tags.map(function(e){return e.text}).join(" | ")}return""}},5584:function(e,t,n){n.r(t),n.d(t,{phn_drawer_header:function(){return p}});var r=n(8457),i=n(8900),o=n(3582),a=n(7104),s=n(2048),l=n(9715),c=n(427),u=n(5626),f=n(3018);n(1608),n(8024),n(9786),n(3690);var d=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},p=function(){function e(e){(0,r.r)(this,e),this.clickDrawerHeaderBack=(0,r.c)(this,"clickDrawerHeaderBack",7),this.clickDrawerHeaderClose=(0,r.c)(this,"clickDrawerHeaderClose",7),this.backButtonText="",this.backButtonAnalyticsId=void 0,this.showBackButton=!1,this.activeRoutingKey=void 0,this.breakpoint=void 0,this.receivedContent=!1,this.locale=void 0,this.showSkeleton=!0}return e.prototype.componentWillLoad=function(){this.waitForComponentsToLoad()},e.prototype.waitForComponentsToLoad=function(){var e,t,n,r;return e=this,t=void 0,n=void 0,r=function(){return d(this,function(e){switch(e.label){case 0:return[4,(0,u.c)(this.el,new f.T(5e3))];case 1:return e.sent(),this.showSkeleton=!this.receivedContent,[2]}})},new(n||(n=Promise))(function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}l((r=r.apply(e,t||[])).next())})},e.prototype.sendDataLayerEvent=function(){i.g.pushDataLayerEvent(o.E.MENU_CLOSE_CLICK,{componentClick:{clickElementId:"mainmenu.drawer.close",clickElementName:"X",clickElementType:o.C.Button,targetElement:"level-0"},componentDisplay:{displayElementId:a.a.calculateDisplayElementId(),displayElementType:a.a.calculateDisplayElementType(this.activeRoutingKey,o.f.closeButton),displayElementName:"X"}})},e.prototype.render=function(){var e=this,t=(0,c.f)(this.activeRoutingKey),n=!(0,s.n)(this.breakpoint),i=void 0!==t?(0,l.b)(o.a.state,this.activeRoutingKey,t):"",a=i.includes("mainmenu.")?i.split("mainmenu.")[1]:"",u=(0,l.c)(t,this.activeRoutingKey,this.locale);return(0,r.h)("div",{class:"drawer-header"},this.showBackButton?(0,r.h)(r.F,null,(0,r.h)("phn-back-button",{class:"back-button",onClick:function(){e.clickDrawerHeaderBack.emit()},analyticsId:this.backButtonAnalyticsId,text:n?"":this.backButtonText,activeRoutingKey:this.activeRoutingKey,style:this.showSkeleton?{display:"none"}:{}}),this.showSkeleton?(0,r.h)("div",{class:"button-skeleton"}):null):(0,r.h)("div",{class:"spacer"}),n?""===a?(0,r.h)(r.F,null,this.showSkeleton&&this.showBackButton?(0,r.h)("div",{class:"skeleton-headline"}):null,(0,r.h)("phn-heading",{text:i,style:this.showSkeleton||!(0,s.i)(i)?{display:"none"}:{},class:"heading-items",subtext:u})):(0,r.h)(r.F,null,this.showSkeleton?(0,r.h)("div",{class:"skeleton-headline"}):null,(0,r.h)("phn-signature-heading",{text:a,subtext:u})):null,(0,r.h)(r.F,null,(0,r.h)("phn-p-button-pure",{class:"close-button",icon:"close",hideLabel:"true",aria:{"aria-label":"close dialog"},size:"small",style:this.showSkeleton?{display:"none"}:{},"data-test-id":"close-button",onClick:function(){e.sendDataLayerEvent(),e.clickDrawerHeaderClose.emit()}},"Close Dialog"),this.showSkeleton?(0,r.h)("div",{class:"button-skeleton"}):null))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();p.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-phn-drawer-header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-drawer-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-drawer-header{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-drawer-header{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-drawer-header{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-drawer-header{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-drawer-header-h{display:block}.drawer-header.sc-phn-drawer-header{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.heading-items.sc-phn-drawer-header{margin-bottom:0.25rem;-ms-flex-align:center;align-items:center}.skeleton-headline.sc-phn-drawer-header{width:9.375rem;height:1.5rem;background:#d8d8db;border-radius:4px}.button-skeleton.sc-phn-drawer-header{margin-left:0.5rem;border-radius:0.25rem;height:1.5rem;width:1.5rem;background:#d8d8db}"},5626:function(e,t,n){n.r(t),n.d(t,{c:function(){return a}});var r=n(9786),i=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,s)}l((r=r.apply(e,t||[])).next())})},o=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};function a(e,t){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];return i(this,void 0,void 0,function(){var a,s,l,c=this;return o(this,function(u){return null===e?[2,null]:(a=function(t){return i(c,void 0,void 0,function(){var n;return o(this,function(i){switch(i.label){case 0:return[4,r.w.waitForElement(e,t)];case 1:if("function"!=typeof(null==(n=i.sent())?void 0:n.componentOnReady))return[3,3];return[4,n.componentOnReady()];case 2:i.sent(),i.label=3;case 3:return[2,n]}})})},s=n.length>0?n.map(a):[a()],l=new Promise(function(e){return t.set(function(){return i(c,void 0,void 0,function(){return o(this,function(t){return[2,e(null)]})})})}),[2,Promise.race([Promise.all(s),l])])})})}},1608:function(e,t,n){n.r(t),n.d(t,{r:function(){return r}});var r=(0,n(3582).d)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},427:function(e,t,n){n.r(t),n.d(t,{R:function(){return i},a:function(){return s},b:function(){return v},c:function(){return f},d:function(){return g},e:function(){return l},f:function(){return c},g:function(){return h},h:function(){return u},i:function(){return p},j:function(){return d},r:function(){return y}});var r,i,o=n(2048),a=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},s={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(function(e,t){return a(a([],e,!0),(0,o.g)(t).split("/"),!0)},[]).filter(Boolean).join("/")}function c(e){if((0,o.i)(e))return Object.values(s).find(function(t){return e.startsWith(t)})}function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l.apply(void 0,a([s.MODELS],e,!1))}function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l.apply(void 0,a([s.DEALER_SEARCH],e,!1))}function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l.apply(void 0,a([s.MY_PORSCHE],e,!1))}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l.apply(void 0,a([s.VEHICLE_PURCHASE],e,!1))}function h(e){return e.split("/").slice(-1)[0]}function y(e){return e.split("/").slice(0,-1).join("/")}function g(e){switch(c(e)){case s.MAIN_MENU:return 1;case e:return 2;default:return e.split("/").length+1}}function v(e){var t=y(e);return(0,o.i)(t)?t:s.MAIN_MENU}(r=i||(i={}))[r.LEVEL_ZERO=-1]="LEVEL_ZERO",r[r.LEVEL_ONE=0]="LEVEL_ONE",r[r.LEVEL_TWO=1]="LEVEL_TWO"},3018:function(e,t,n){n.r(t),n.d(t,{T:function(){return i}});var r=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},i=function(){function e(e){this.delay=e,this.timer=null}return e.prototype.set=function(e){var t=this;this.cancel(),this.timer=setTimeout(function(){var n,i,o;return n=void 0,i=void 0,o=function(){return r(this,function(t){switch(t.label){case 0:return[4,e()];case 1:return t.sent(),this.cancel(),[2]}})},new(i||(i=Promise))(function(e,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):((n=t.value)instanceof i?n:new i(function(e){e(n)})).then(a,s)}l((o=o.apply(t,n||[])).next())})},this.delay)},e.prototype.cancel=function(){null!==this.timer&&(clearTimeout(this.timer),"function"==typeof this.timer.unref&&this.timer.unref(),this.timer=null)},e}()}}]);