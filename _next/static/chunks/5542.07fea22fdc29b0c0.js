"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5542,7094,1252,8338,7393],{7094:function(e,t,n){n.r(t),n.d(t,{E:function(){return r},g:function(){return o}});var r={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function o(e){switch(e){case r.PREVIEW.toString():return r.PREVIEW;case r.TEST.toString():return r.TEST;case r.LOCAL.toString():return r.LOCAL;case r.PRODUCTION.toString():default:return r.PRODUCTION}}},5542:function(e,t,n){n.r(t),n.d(t,{g:function(){return F}});var r,o=n(7094),i=n(8338),a=n(1252),s=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},l=Object.defineProperty,h=function(e,t,n){return function(e,t,n){t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},f="BEFORE_MERGE",_="AFTER_MERGE",d={clean:{enabled:!1,executionPlace:_,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},E=function(){function e(){}return e.prototype.create=function(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}},e}(),v=function(e,t){return function(e,t){var n;for(n in e)if(e&&e[n]&&!1===t(e[n],n))return!1;return!0}(e,(function(n,r){for(var o in e[r])if(!1===t(n[o],o,n,r))return!1;return!0}))},g=function(e){for(var t in e)return!1;return!0},N=function(e,t){return void 0===t&&(t=function(e){return null==(e=d.clean)?void 0:e.values}()||[]),v(e,(function(n,r,o,i){t.includes(n)&&(delete o[r],g(o)&&delete e[i])})),e},m=function(e){return v(e,(function(e,t,n){return"function"!=typeof e||(n[t]=e()),!0})),e},R=function(e,t){var n=t.split(".");if(2===n.length){var r=e[n[0]];return r?r[n[1]]:void 0}},I=d.logging,y=((r=y||{})[r.error=0]="error",r[r.warn=1]="warn",r[r.log=2]="log",r),A=function(){function e(e,t){h(this,"prefix"),h(this,"settings"),this.prefix=e,this.settings=c(c({},I),t)}return e.prototype._getMergedSettings=function(e){return e?c(c({},this.settings),e):this.settings},e.prototype._isAllowed=function(e,t){if(!A.isAvailable||!t.enabled)return!1;var n=y[t.level];switch(e){case"error":case"warn":return n>=y[e];case"info":case"log":case"debug":case"dir":return n>=2;default:return!1}},e.prototype._log=function(e,t,n){void 0===t&&(t="log");var r=this._getMergedSettings(n);if(this._isAllowed(t,r))if("dir"===t)console.log("[".concat(this.prefix,"] ").concat(t,":")),console[t](e);else console[t]("[".concat(this.prefix,"] ").concat(e))},e.prototype.log=function(e,t){this._log(e,"log",t)},e.prototype.dir=function(e,t){this._log(e,"dir",t)},e.prototype.debug=function(e,t){this._log(e,"debug",t)},e.prototype.error=function(e,t){this._log(e,"error",t)},e.prototype.info=function(e,t){this._log(e,"info",t)},e.prototype.warn=function(e,t){this._log(e,"warn",t)},e}(),L=A;h(L,"isAvailable",typeof console<"u");var O=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};return e.forEach((function(e){if(!g(e)){var t,r=c(c({},n),e);for(t in r)"object"!=typeof r[t]||Array.isArray(r[t])?n[t]=r[t]:n[t]=c(c({},n[t]),e[t])}})),n},w=function(){function e(){}return e.prototype.create=function(e){return N({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])},e}(),C=d.webProperties,T=function(){return window.location.href.replace(/[?#].*/,"")},P=function(){return window.innerHeight.toString()},D=function(){return window.innerHeight>window.innerWidth?"p":"l"},S=function(){return window.innerWidth.toString()},b=function(e){if(e.breakpoints&&!(e.breakpoints.length<1)){var t=e.breakpoints,n=function(){for(var e=window.innerWidth,n=0,r=0;r<t.length&&e>=t[r];)n=t[r],r++;return n.toString()};return e.reactiveDimensions?n:n()}},U=function(e,t){switch(t){case"string":case"number":case"boolean":return typeof e===t;case"any[]":return Array.isArray(e)&&e.length>0;case"Record<string, any>":return"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).length>0;case"any":return!0;default:if(t.indexOf("|")>0){var n=t.split("|").map((function(e){return e.trim().replace(/(^ ?'?|'? ?$)/g,"")}));return"string"==typeof e&&n.includes(e)}}return!0},x=function(e,t,n){var r={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return r;var o=n.eventMatrix,i=o.events,a=u(o,["events"]),s=i.indexOf(e);if(-1===s)return r.level="error",r.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:e,message:"'".concat(e,"': Event does not exist.")}),r;var c,p=function(e){if(!e)return[];var t=[];return v(e,(function(e,n,r,o){t.push("".concat(o.toString(),".").concat(n.toString()))})),t}(t),l=Object.keys(a),h=p.filter((function(e){return!l.includes(e)}));for(c in h.length>0&&(n.allowUnknown||function(e,t){e&&v(e,(function(n,r,o,i){!t.includes("".concat(i.toString(),".").concat(r.toString()))||(delete o[r],g(o)&&delete e[i])}))}(t,h),h.forEach((function(e){var t;r.level=null!=(t=r.level)?t:"warn",r.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:e,message:"'".concat(e,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})}))),a){var f=a[c],_=typeof f.e[s]<"u",d=1===f.r,E=t?R(t,c):void 0,N=typeof E<"u";if(_&&d&&!N&&(r.level="error",r.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:c,message:"'".concat(c,"': The required property is missing.")}),!n.verbose)||N&&!U(E,f.t)&&(r.level="error",r.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:c,message:"'".concat(c,"': Wrong type detected. Expected '").concat(f.t,"', got '").concat(typeof E,"'.")}),!n.verbose))return r}return r},M=function(){function e(e,t,n){void 0===n&&(n="GlobalDataLayer"),h(this,"_className"),h(this,"_settings"),h(this,"_defaultProperties"),h(this,"_logger"),h(this,"_webPropertiesHandled",!1),h(this,"_dataLayerStore"),h(this,"_extensions",new Map);var r=O(d,e||{});this._className=n,this._logger=new L(this._className,r.logging),this._settings=r,t?this._dataLayerStore=t:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return e.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(e.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),e.prototype.getRegisteredExtension=function(e){var t=new e;return this.getRegisteredExtensionByClassName(t.className)},e.prototype.getRegisteredExtensionByClassName=function(e){return this._extensions.has(e)?this._extensions.get(e):void 0},e.prototype.getRegisteredExtensions=function(){for(var e=[],t=0,n=this._extensions.values();t<n.length;t++){var r=n[t];e.push(r)}return e},e.prototype.registerExtension=function(e,t){void 0===t&&(t=!1),t||!this._extensions.has(e.className)?(e.dataLayerInstance=this,this._extensions.set(e.className,e),t?this._logger.info("Overriden registration for extension class <".concat(e.className,">.")):this._logger.info("Registered extension class <".concat(e.className,">."))):this._logger.warn("Tried to register extension class <".concat(e.className,"> which already exists."))},e.prototype.removeExtension=function(e){var t=new e;this._extensions.has(t.className)?this._extensions.delete(t.className):this._logger.warn("Tried to remove not existing extension class <".concat(t.className,">."))},e.prototype.removeExtensionByClassName=function(e){this._extensions.has(e)?this._extensions.delete(e):this._logger.warn("Tried to remove not existing extension class <".concat(e,">."))},e.prototype.push=function(e,t,n){var r,o;if(void 0===t&&(t=[{}]),0===e.length)return!1;var i=n&&!g(n)?O(this._settings,n):this._settings;Array.isArray(t)||(t=[t]),t.forEach(m);var a=this._eventNamePayloadFactory.create({event:e}),s=m(this.getDefaultProperties(e));i.clean.enabled&&i.clean.executionPlace===f&&p([s||{}],t,!0).forEach((function(e){return N(e,i.clean.values)}));var c=O.apply(void 0,p([a,s||{}],t,!1));if(i.clean.enabled&&i.clean.executionPlace===_&&N(c,i.clean.values),(null==(r=null==i?void 0:i.validation)?void 0:r.enabled)&&(null==(o=null==i?void 0:i.validation)?void 0:o.eventMatrix)){var u=x(e,c,i.validation),l=u.issues.sort((function(e,t){return e.level!==t.level&&"warn"===t.level?-1:0})).map((function(e){return"- [".concat(e.level,"]: ").concat(e.message)})).join("\n");switch(u.level){case"error":return this._logger.error("Validation failed for event '".concat(e,"' with errors/warnings: \n").concat(l),i.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(e,"' with warnings: \n").concat(l),i.logging);break;default:this._logger.info("Validation success for event '".concat(e,"'."),i.logging)}}return this._dataLayerStore.push(c),!0},e.prototype.getDefaultProperties=function(e){var t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach((function(n){return n.identifier===e?t.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(e)?t.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(e)?t.byRegex.push(n.data):void 0}));var n=p(p(p([],t.byRegex,!0),t.byArray,!0),t.byName,!0);if(n.length)return O.apply(void 0,n)},e.prototype.setDefaultProperties=function(e,t){var n=this._defaultProperties.find((function(t){return t.identifier===e}));n?n.data=O(n.data,t):this._defaultProperties.push({identifier:e,data:t})},e.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var e=function(e,t){var n=c(c({},C),e),r={breakpoint:b(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?T:T(),height:n.reactiveDimensions?P:P(),orientation:n.reactiveDimensions?D:D(),width:n.reactiveDimensions?S:S(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return t?t.create(r):r}(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}},e}(),G=function(e){function t(t,n,r){void 0===r&&(r="GlobalDataLayer");var o=e.call(this,t,n,r)||this;return h(o,"_eventNamePayloadFactory"),h(o,"_webPayloadFactory"),o._eventNamePayloadFactory=new E,o._webPayloadFactory=new w,o.setup(),o}return s(t,e),t.prototype.setup=function(){e.prototype.setup.call(this)},t}(M);function H(e){switch(e){case o.E.PRODUCTION:return"P";case o.E.PREVIEW:return"PP";default:return"K"}}var k=function(){function e(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return e.prototype.initialise=function(){this.gdl=new G},e.prototype.pushDataLayerEvent=function(e,t){t?this.gdl.push(e,t):this.gdl.push(e)},e.prototype.setEnvironment=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:H(e)}})},e.prototype.setPageName=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})},e.prototype.setUser=function(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})},e.prototype.setLocale=function(e){try{var t=(0,i.s)(e),n=t.country,r=t.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(e){}},e.prototype.setDefaultProperties=function(e,t){var n={context:{applicationId:a.s},visitor:{loginStatus:!1}};try{var r=(0,i.s)(e),o=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:o,language:s,applicationName:a.r})})}catch(e){}(0,a.i)(t)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},e}(),F=new k},1252:function(e,t,n){n.r(t),n.d(t,{C:function(){return y},D:function(){return l},E:function(){return g},F:function(){return _},G:function(){return R},I:function(){return A},L:function(){return c},M:function(){return I},R:function(){return a},S:function(){return m},V:function(){return p},a:function(){return u},b:function(){return x},c:function(){return G},d:function(){return H},e:function(){return s},f:function(){return O},g:function(){return T},h:function(){return w},i:function(){return C},j:function(){return b},k:function(){return D},l:function(){return k},m:function(){return r},n:function(){return P},o:function(){return i},p:function(){return h},q:function(){return f},r:function(){return v},s:function(){return E},t:function(){return N},u:function(){return d},v:function(){return M},w:function(){return U},x:function(){return S},y:function(){return L},z:function(){return F}});var r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},o={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},i="production",a="REDACTED",s="loggedIn",c="loginOrRegister",u="loading",p="2.23.2",l=0,h="featureOverrideEnabled",f="HOMENAV_1723",_="NAVI_3",d='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',E="nav",v="edgecast_CDN",g={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},N={Link:"link",Button:"button",Image:"image"},m="nav_saved_dealer",R="by geolocation",I=7776e6,y="porsche.com",A="auth-iframe-header-navigation",L={Model:"model-variant",Level1:"level1-variant"};function O(e){return o[e]}function w(e,t){return e&&"object"===typeof e&&t in e}function C(e){return"string"===typeof e&&e.length>0}function T(e){return"string"===typeof e?e:""}function P(e){return e instanceof HTMLElement?e:null}function D(e){var t;null===(t=P(e))||void 0===t||t.focus()}function S(e){return e instanceof HTMLInputElement?e:null}function b(e){return 0===e.x&&0===e.y}function U(e){return e===u}function x(e){return!U(e)&&!function(e){return e===c}(e)}function M(e,t){return e===s?t:e}function G(e){return Object.entries(e).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))})).join("&")}function H(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join("---")}function k(e,t){return void 0===t&&(t=!1),t?e>=r.s:e>=r.l}function F(e){switch(e){case r.xxl:case r.xl:return 1920;case r.l:return 1366;case r.m:return 1024;case r.s:return 768;case r.xs:return 375;default:return 320}}},8338:function(e,t,n){n.r(t),n.d(t,{R:function(){return i},c:function(){return s},s:function(){return c}});var r=n(1252),o=n(7393),i={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},a={AP:i.ASIA_PACIFIC,CE:i.EASTERN_EUROPE,LL:i.LATIN_AMERICA,WW:i.INTERNATIONAL};function s(e){return Object.values(i).includes(e)}function c(e){if(!(0,r.i)(e))throw new o.N("empty locale passed",o.a.NO_INPUT);var t=e.substring(0,e.indexOf("-")).toLowerCase(),n=e.substring(e.indexOf("-")+1).toLowerCase();if(s(n)||(n=n.toUpperCase()),!(0,r.i)(t)||!(0,r.i)(n))throw new o.N("invalid locale ".concat(e," passed"),o.a.INVALID_INPUT);return{language:t,country:(0,r.h)(a,n)?a[n]:n}}},7393:function(e,t,n){n.r(t),n.d(t,{N:function(){return o},a:function(){return i},g:function(){return a}});var r=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(e){function t(n,r){var o=e.call(this,n)||this;return o.type=r,Object.setPrototypeOf(o,t.prototype),o}return r(t,e),t}(Error),i={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function a(e,t){if(!(t instanceof o))return e.wrong;switch(t.type){case i.NO_INPUT:return e.noInput;case i.INVALID_INPUT:return e.invalidInput;case i.NO_RESULTS:return e.noResults;case i.GENERAL:return e.wrong;case i.RETRY:return e.retry;case i.GEOLOCATION_DENIED:return e.geolocationDenied;default:return e.wrong}}}}]);