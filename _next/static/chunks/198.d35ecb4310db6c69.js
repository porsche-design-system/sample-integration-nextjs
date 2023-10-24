"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198,6633,7712,890,211],{6633:function(e,t,n){n.r(t),n.d(t,{a:function(){return p}});var r=n(8369),i=n(211),a=n(9122),o=n(1573),s=n(890),c={};function l(e){var t=c.drawerType,n=((0,o.i)(e)?(0,r.b)(e):i.r.state.routingKeyHistory[i.r.state.routingKeyPointer])||"",a=(0,r.g)(n),l=(0,r.d)(n),u=l-1;if(!(0,o.i)(n))return"level0";var f=(0,o.i)(n)?"level".concat(l,"-").concat(a):"level".concat(l-1,"-unknown");if("doubleDrawer"===t){if(""===n)return"level".concat(u,"-unknown_level").concat(l,"-unknown");var p=(0,s.g)(n);return"level".concat(u,"-").concat(p,"_").concat(f)}return f}function u(e,t,n){var i=c.drawerType,a=(0,r.d)(e);if("doubleDrawer"!==i)return(0,o.i)(e)?"level".concat(a,"_").concat(t):"level".concat(a-1,"_").concat(t);var s=a;return n&&(s-=1),"level".concat(s,"_").concat(t)}function f(){return c.drawerType}var p={setDrawerType:function(e){c.drawerType=e},getDealerResultsLoadDisplayElementId:function(e){return"doubleDrawer"===f()?e:l()},calculateDisplayElementId:l,getDealerResultsLoadDisplayElementType:function(){return"doubleDrawer"===f()?a.j:u("",a.h.dealerSearchForm)},calculateDisplayElementType:u,getModelName:function(e){var t=e.link.split("/"),n=t[t.length-1];return""===n?void 0===t[t.length-2]?"":t[t.length-2].split("-").join(" "):n.split("-").join(" ")},getModelTargetElement:function(e,t){if(e.includes("models")){var n=(0,r.d)(e);return"level".concat(n,"_").concat(t.toLowerCase())}}}},7712:function(e,t,n){n.r(t),n.d(t,{g:function(){return j}});var r,i,a=n(9122),o=n(1573),s=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},u=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},f=Object.defineProperty,p=function(e,t,n){var r;return(r="symbol"!=typeof t?t+"":t)in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,n},d={BEFORE_MERGE:"BEFORE_MERGE",AFTER_MERGE:"AFTER_MERGE"},g={clean:{enabled:!1,executionPlace:d.AFTER_MERGE,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},h=function(){function e(){}return e.prototype.create=function(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}},e}(),m=function(e,t){var n;for(n in e)if(!(!e||!e[n])&&!1===t(e[n],n))return!1;return!0},y=function(e,t){return m(e,function(n,r){for(var i in e[r])if(!1===t(n[i],i,n,r))return!1;return!0})},v=function(e){for(var t in e)return!1;return!0},E=function(e,t){if(void 0===t){var n;t=(null==(n=g.clean)?void 0:n.values)||[]}return y(e,function(n,r,i,a){t.includes(n)&&(delete i[r],v(i)&&delete e[a])}),e},b=function(e){return y(e,function(e,t,n){return"function"!=typeof e||(n[t]=e()),!0}),e},w=function(e,t){var n=t.split(".");if(2===n.length){var r=e[n[0]];if(r)return r[n[1]]}},x=function(e){if(!e)return[];var t=[];return y(e,function(e,n,r,i){t.push("".concat(i.toString(),".").concat(n.toString()))}),t},k=g.logging,_=((i=_||{})[i.error=0]="error",i[i.warn=1]="warn",i[i.log=2]="log",i),R=function(){function e(e,t){p(this,"prefix"),p(this,"settings"),this.prefix=e,this.settings=c(c({},k),t)}return e.prototype._getMergedSettings=function(e){return e?c(c({},this.settings),e):this.settings},e.prototype._isAllowed=function(t,n){if(!e.isAvailable||!n.enabled)return!1;var r=_[n.level];switch(t){case"error":case"warn":return r>=_[t];case"info":case"log":case"debug":case"dir":return r>=2;default:return!1}},e.prototype._log=function(e,t,n){void 0===t&&(t="log");var r=this._getMergedSettings(n);this._isAllowed(t,r)&&("dir"===t?(console.log("[".concat(this.prefix,"] ").concat(t,":")),console[t](e)):console[t]("[".concat(this.prefix,"] ").concat(e)))},e.prototype.log=function(e,t){this._log(e,"log",t)},e.prototype.dir=function(e,t){this._log(e,"dir",t)},e.prototype.debug=function(e,t){this._log(e,"debug",t)},e.prototype.error=function(e,t){this._log(e,"error",t)},e.prototype.info=function(e,t){this._log(e,"info",t)},e.prototype.warn=function(e,t){this._log(e,"warn",t)},e}();p(R,"isAvailable","u">typeof console);var S=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};return e.forEach(function(e){if(!v(e)){var t,r=c(c({},n),e);for(t in r)"object"!=typeof r[t]||Array.isArray(r[t])?n[t]=r[t]:n[t]=c(c({},n[t]),e[t])}}),n},P=function(){function e(){}return e.prototype.create=function(e){return E({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])},e}(),D=g.webProperties,O=function(){return window.location.href.replace(/[?#].*/,"")},I=function(){return window.innerHeight.toString()},C=function(){return window.innerHeight>window.innerWidth?"p":"l"},L=function(){return window.innerWidth.toString()},N=function(e){if(e.breakpoints&&!(e.breakpoints.length<1)){var t=e.breakpoints,n=function(){for(var e=window.innerWidth,n=0,r=0;r<t.length&&e>=t[r];)n=t[r],r++;return n.toString()};return e.reactiveDimensions?n:n()}},A=function(e,t){var n=c(c({},D),e),r={breakpoint:N(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?O:O(),height:n.reactiveDimensions?I:I(),orientation:n.reactiveDimensions?C:C(),width:n.reactiveDimensions?L:L(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return t?t.create(r):r},H=function(e,t){switch(t){case"string":case"number":case"boolean":return typeof e===t;case"any[]":return Array.isArray(e)&&e.length>0;case"Record<string, any>":return"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).length>0;case"any":break;default:if(("boolean"==typeof e||"number"==typeof e||"string"==typeof e)&&t.indexOf("|")>0)return t.split("|").map(function(e){var t=e.trim();return/^'.*'$/.test(t)?t.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(t)?"true"===t:/^-?(\d*\.)?\d+$/.test(t)?Number.parseFloat(t):t.replace(/(^ ?'?|'? ?$)/g,"")}).includes(e)}return!0},M=function(e,t,n){var r,i,a,o={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return o;var s=n.eventMatrix,c=s.events,u=l(s,["events"]),f=c.indexOf(e);if(-1===f)return o.level="error",o.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:e,message:"'".concat(e,"': Event does not exist.")}),o;var p=x(t),d=Object.keys(u),g=p.filter(function(e){return!d.includes(e)});for(a in g.length>0&&(n.allowUnknown||(r=t,i=g,r&&y(r,function(e,t,n,a){i.includes("".concat(a.toString(),".").concat(t.toString()))&&(delete n[t],v(n)&&delete r[a])})),g.forEach(function(e){var t;o.level=null!==(t=o.level)&&void 0!==t?t:"warn",o.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:e,message:"'".concat(e,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})})),u){var h=u[a],m="u">typeof h.e[f],E=1===h.r,b=t?w(t,a):void 0,k="u">typeof b;if(m&&E&&!k&&(o.level="error",o.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:a,message:"'".concat(a,"': The required property is missing.")}),!n.verbose)||k&&!H(b,h.t)&&(o.level="error",o.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:a,message:"'".concat(a,"': Wrong type detected. Expected '").concat(h.t,"', got '").concat(typeof b,"'.")}),!n.verbose))break}return o},T=function(e){function t(t,n,r){void 0===r&&(r="GlobalDataLayer");var i=e.call(this,t,n,r)||this;return p(i,"_eventNamePayloadFactory"),p(i,"_webPayloadFactory"),i._eventNamePayloadFactory=new h,i._webPayloadFactory=new P,i.setup(),i}return s(t,e),t.prototype.setup=function(){e.prototype.setup.call(this)},t}(function(){function e(e,t,n){void 0===n&&(n="GlobalDataLayer"),p(this,"_className"),p(this,"_settings"),p(this,"_defaultProperties"),p(this,"_logger"),p(this,"_webPropertiesHandled",!1),p(this,"_dataLayerStore"),p(this,"_extensions",new Map);var r=S(g,e||{});this._className=n,this._logger=new R(this._className,r.logging),this._settings=r,t?this._dataLayerStore=t:"u">typeof window?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return e.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(e.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),e.prototype.getRegisteredExtension=function(e){var t=new e;return this.getRegisteredExtensionByClassName(t.className)},e.prototype.getRegisteredExtensionByClassName=function(e){return this._extensions.has(e)?this._extensions.get(e):void 0},e.prototype.getRegisteredExtensions=function(){for(var e=[],t=0,n=this._extensions.values();t<n.length;t++){var r=n[t];e.push(r)}return e},e.prototype.registerExtension=function(e,t){if(void 0===t&&(t=!1),!t&&this._extensions.has(e.className)){this._logger.warn("Tried to register extension class <".concat(e.className,"> which already exists."));return}e.dataLayerInstance=this,this._extensions.set(e.className,e),t?this._logger.info("Overriden registration for extension class <".concat(e.className,">.")):this._logger.info("Registered extension class <".concat(e.className,">."))},e.prototype.removeExtension=function(e){var t=new e;if(this._extensions.has(t.className)){this._extensions.delete(t.className);return}this._logger.warn("Tried to remove not existing extension class <".concat(t.className,">."))},e.prototype.removeExtensionByClassName=function(e){if(this._extensions.has(e)){this._extensions.delete(e);return}this._logger.warn("Tried to remove not existing extension class <".concat(e,">."))},e.prototype.push=function(e,t,n){if(void 0===t&&(t=[{}]),0===e.length)return!1;var r,i,a=n&&!v(n)?S(this._settings,n):this._settings;Array.isArray(t)||(t=[t]),t.forEach(b);var o=this._eventNamePayloadFactory.create({event:e}),s=b(this.getDefaultProperties(e));a.clean.enabled&&a.clean.executionPlace===d.BEFORE_MERGE&&u([s||{}],t,!0).forEach(function(e){return E(e,a.clean.values)});var c=S.apply(void 0,u([o,s||{}],t,!1));if(a.clean.enabled&&a.clean.executionPlace===d.AFTER_MERGE&&E(c,a.clean.values),null!=(r=null==a?void 0:a.validation)&&r.enabled&&null!=(i=null==a?void 0:a.validation)&&i.eventMatrix){var l=M(e,c,a.validation),f=l.issues.sort(function(e,t){return e.level!==t.level&&"warn"===t.level?-1:0}).map(function(e){return"- [".concat(e.level,"]: ").concat(e.message)}).join("\n");switch(l.level){case"error":return this._logger.error("Validation failed for event '".concat(e,"' with errors/warnings: \n").concat(f),a.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(e,"' with warnings: \n").concat(f),a.logging);break;default:this._logger.info("Validation success for event '".concat(e,"'."),a.logging)}}return this._dataLayerStore.push(c),!0},e.prototype.getDefaultProperties=function(e){var t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(function(n){return n.identifier===e?t.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(e)?t.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(e)?t.byRegex.push(n.data):void 0});var n=u(u(u([],t.byRegex,!0),t.byArray,!0),t.byName,!0);if(n.length)return S.apply(void 0,n)},e.prototype.setDefaultProperties=function(e,t){var n=this._defaultProperties.find(function(t){return t.identifier===e});if(n){n.data=S(n.data,t);return}this._defaultProperties.push({identifier:e,data:t})},e.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var e=A(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}},e}()),j=new(function(){function e(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return e.prototype.initialise=function(){this.gdl=new T},e.prototype.pushDataLayerEvent=function(e,t){t?this.gdl.push(e,t):this.gdl.push(e)},e.prototype.setEnvironment=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:function(e){switch(e){case a.c.PRODUCTION:return"P";case a.c.PREVIEW:return"PP";default:return"K"}}(e)}})},e.prototype.setPageName=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})},e.prototype.setUser=function(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})},e.prototype.setLocale=function(e){try{var t=(0,a.s)(e),n=t.country,r=t.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(e){}},e.prototype.setDefaultProperties=function(e,t){var n={context:{applicationId:a.d},visitor:{loginStatus:!1}};try{var r=(0,a.s)(e),i=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:i,language:s,applicationName:a.D})})}catch(e){}(0,o.i)(t)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},e}())},890:function(e,t,n){n.r(t),n.d(t,{a:function(){return p},b:function(){return d},c:function(){return g},d:function(){return l},e:function(){return c},f:function(){return f},g:function(){return u}});var r=n(9122),i=n(8369),a=n(8363),o=n(1573),s=n(8622);function c(e,t,n,c,l,u){var f,p,d,g=e.dealer,h=e.models,m=e.myPorsche,y=e.vehiclePurchase,v=e.shop,E=e.experience,b=e.services,w=t.savedDealerCookie,x=t.ppnDealers,k=r.n.state.app,_=null!==w?x[w.id]:void 0;"en-SG"===n&&g.search.outboundLink&&(d=null===(f=g.search.outboundLink)||void 0===f?void 0:f.link);var R=[i.a.DEALER_SEARCH];void 0!==_&&(null===(p=a.d.state.results)||void 0===p?void 0:p.length)!=1&&R.push((0,i.c)(_.ppnDealer.id));var S=[{elementId:i.a.MODELS,routingKeys:[i.a.MODELS],analyticsId:h.id,text:h.text},{elementId:i.a.VEHICLE_PURCHASE,routingKeys:[i.a.VEHICLE_PURCHASE],analyticsId:y.id,text:y.text},{elementId:i.a.SERVICES,routingKeys:[i.a.SERVICES],analyticsId:b.id,text:b.text},{elementId:i.a.EXPERIENCE,routingKeys:[i.a.EXPERIENCE],analyticsId:E.id,text:E.text}],P={elementId:i.a.DEALER_SEARCH,routingKeys:R,analyticsId:g.id,text:g.text,link:d,iconRight:"en-SG"===n&&g.search.outboundLink?"external":"arrow-head-right"};if(null!==v&&""!==v.text){var D={elementId:i.a.SHOP,routingKeys:[i.a.SHOP],analyticsId:v.id,text:v.text,link:k!==o.A.shop?v.link:void 0,datalayerEventAction:r.E.NAVIGATION_LINK_CLICK,iconRight:"external"};S.splice(2,0,D)}if(function(e,t){try{var n=(0,r.s)(e).country,i=!(0,r.i)(n)&&t;return(s.f.isDealerSearchChinaEnabled()||"CN"!==n)&&i}catch(e){}return!0}(n,u)){var O="en"===(0,r.s)(n).language?null==_?void 0:_.ppnDealer.name:(0,o.i)(null==_?void 0:_.ppnDealer.nameLocalized)?null==_?void 0:_.ppnDealer.nameLocalized:null==_?void 0:_.ppnDealer.name;(0,o.i)(O)&&(P.subtext=O)}else P.link=g.search.map.link,P.onClick=void 0;if(S.push(P),null!==m){var I=(0,o.I)(c),C=I?(0,o.x)(c,m.loggedInFallback):void 0;S.push({elementId:i.a.MY_PORSCHE,routingKeys:[i.a.MY_PORSCHE],analyticsId:m.id,text:m.text,subtext:C,showIconModifier:I&&l>0})}return S}function l(e,t,n,a,o,s,l){var u=(0,i.f)(s);switch(u){case s:break;case i.a.MODELS:return e.models.series.map(function(e){return{elementId:(0,i.h)(e.id),routingKeys:[(0,i.h)(e.id)],analyticsId:e.id,text:e.name,subtext:e.tags.map(function(e){return e.text}).join(" | "),renderSignatures:!0,datalayerEventAction:r.E.MODEL_RANGE_CLICK}});case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.SERVICES:case i.a.EXPERIENCE:var p=(0,i.r)(s),d=f(e,p,u);if(null!==d)return d.children.map(function(e){return{elementId:(0,i.e)(p,e.id),routingKeys:[(0,i.e)(p,e.id)],analyticsId:e.id,text:e.text,link:e.link}})}return c(e,t,n,a,o,l)}function u(e){switch((0,i.f)(e)){case e:break;case i.a.DEALER_SEARCH:return i.a.DEALER_SEARCH;case i.a.MODELS:return i.a.MODELS;case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.SERVICES:case i.a.EXPERIENCE:var t=(0,i.r)(e);return(0,i.g)(t)}return i.a.MAIN_MENU}function f(e,t,n){var s,c=e.vehiclePurchase,l=e.experience,u=e.shop,f=e.legacyMore,p=e.services,d=((s={})[i.a.VEHICLE_PURCHASE]=c,s[i.a.EXPERIENCE]=l,s[i.a.SHOP]=u,s[i.a.MORE]=f,s[i.a.SERVICES]=p,s)[n];if(null==d)return null;(0,o.i)(d.experienceName)&&(d.children=(0,a.a)().executeContentChange(d));var g=(0,i.g)(t);return g===n?d:(0,r.k)(d,g)}function p(e,t){if(!(0,o.i)(t))return"";var n=(0,i.f)(t);switch(n){case i.a.MODELS:return e.models.text;case i.a.DEALER_SEARCH:if(1===e.dealer.numberOfDealers)break;return e.dealer.details.backToSearch;case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.MORE:case i.a.EXPERIENCE:var a=f(r.b.state,t,n);if(null!==a)return a.text}return""}function d(e,t,n){var a,o,s,c=e.dealer,l=e.myPorsche,u=e.models,f=e.vehiclePurchase,p=e.experience,d=e.shop,g=e.legacyMore,h=e.services;switch(n){case i.a.MORE:case i.a.SHOP:case i.a.EXPERIENCE:case i.a.SERVICES:case i.a.VEHICLE_PURCHASE:if(void 0===(s=((a={})[i.a.VEHICLE_PURCHASE]=f,a[i.a.EXPERIENCE]=p,a[i.a.SHOP]=d,a[i.a.MORE]=g,a[i.a.SERVICES]=h,a)[n]))break;var m=(0,i.g)(t);return m===n?null==s?void 0:s.text:null===(o=(0,r.k)(s,m))||void 0===o?void 0:o.text;case i.a.SERIES:case i.a.MODELS:var y=(0,i.g)(t);return void 0===(s=u.series.find(function(e){return y===e.id}))?u.text:null==s?void 0:s.id;case i.a.DEALER_SEARCH:return c.search.text;case i.a.MY_PORSCHE:return null==l?void 0:l.text}return""}function g(e,t,n){var s=r.b.state,c=s.myPorsche,l=s.models,u=r.n.state.loggedInState;if(e===i.a.MY_PORSCHE)return(0,o.I)(u)?(0,o.x)(u,(null==c?void 0:c.loggedInFallback)||""):"";if(e===i.a.DEALER_SEARCH){var f=a.d.state,p=f.savedDealerCookie,d=f.ppnDealers,g=null!==p?d[p.id]:void 0,h=n&&"en"===(0,r.s)(n).language?null==g?void 0:g.ppnDealer.name:(0,o.i)(null==g?void 0:g.ppnDealer.nameLocalized)?null==g?void 0:g.ppnDealer.nameLocalized:null==g?void 0:g.ppnDealer.name;return p?h:""}if(e===i.a.MODELS&&(0,o.i)(t)){var m=(0,i.g)(t),y=l.series.find(function(e){return m===e.id});if(y)return y.tags.map(function(e){return e.text}).join(" | ")}return""}},198:function(e,t,n){n.r(t),n.d(t,{phn_backdrop:function(){return c}});var r=n(9723),i=n(6633),a=n(7712),o=n(8622),s=n(9122);n(8369),n(1573),n(211),n(890),n(8363);var c=function(){function e(e){(0,r.r)(this,e),this.clickDrawerHeaderClose=(0,r.c)(this,"clickDrawerHeaderClose",7),this.backdropClosed=(0,r.c)(this,"backdropClosed",7),this.activeRoutingKey=void 0}return e.prototype.handleClick=function(){this.sendDataAnalyticsEvent(),this.clickDrawerHeaderClose.emit()},e.prototype.sendDataAnalyticsEvent=function(){i.a.setDrawerType(s.f.DoubleDrawer),a.g.pushDataLayerEvent(s.E.MENU_CLOSE_CLICK,{componentClick:{clickElementId:"mainmenu.drawer.close",clickElementName:"backdrop",clickElementType:s.C.Button,targetElement:"level-0"},componentDisplay:{displayElementType:i.a.calculateDisplayElementType(this.activeRoutingKey,s.h.backdrop),displayElementId:i.a.calculateDisplayElementId(),displayElementName:"Double Drawer"}})},e.prototype.componentWillLoad=function(){o.w.hasScrollbar()&&o.w.lockScroll()},e.prototype.disconnectedCallback=function(){o.w.hasScrollbar()&&o.w.unlockScroll()},e.prototype.render=function(){return(0,r.h)(r.H,null)},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();c.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-backdrop{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-backdrop{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-backdrop{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-backdrop{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-backdrop{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-backdrop{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-backdrop{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-backdrop{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-backdrop{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-backdrop{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-backdrop{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-backdrop{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-backdrop-h{position:fixed;z-index:300;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0);opacity:0;cursor:pointer;backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px)}.fade-in-animation.sc-phn-backdrop-h{-webkit-animation:fade-in-animation 400ms;animation:fade-in-animation 400ms}.fade-out-animation.sc-phn-backdrop-h{animation:fade-in-animation 400ms reverse}"},211:function(e,t,n){n.r(t),n.d(t,{r:function(){return r}});var r=(0,n(9122).e)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},8369:function(e,t,n){n.r(t),n.d(t,{R:function(){return i},a:function(){return s},b:function(){return y},c:function(){return f},d:function(){return m},e:function(){return c},f:function(){return l},g:function(){return g},h:function(){return u},i:function(){return d},j:function(){return p},r:function(){return h}});var r,i,a=n(1573),o=function(e,t,n){if(n||2==arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},s={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(function(e,t){return o(o([],e,!0),(0,a.g)(t).split("/"),!0)},[]).filter(Boolean).join("/")}function l(e){if((0,a.i)(e))return Object.values(s).find(function(t){return e.startsWith(t)})}function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,o([s.MODELS],e,!1))}function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,o([s.DEALER_SEARCH],e,!1))}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,o([s.MY_PORSCHE],e,!1))}function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,o([s.VEHICLE_PURCHASE],e,!1))}function g(e){return e.split("/").slice(-1)[0]}function h(e){return e.split("/").slice(0,-1).join("/")}function m(e){switch(l(e)){case s.MAIN_MENU:return 1;case e:return 2;default:return e.split("/").length+1}}function y(e){var t=h(e);return(0,a.i)(t)?t:s.MAIN_MENU}(r=i||(i={}))[r.LEVEL_ZERO=-1]="LEVEL_ZERO",r[r.LEVEL_ONE=0]="LEVEL_ONE",r[r.LEVEL_TWO=1]="LEVEL_TWO"}}]);