"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44,385,94,252,292,338,648,651,250,393,864,882],{4385:function(e,t,n){n.r(t),n.d(t,{d:function(){return c}});var o=n(1292),r=n(1882),i=n(1252),c=(0,o.c)({searchTerm:"",results:[],savedDealerCookie:function(){try{return JSON.parse(r.w.getCookie(i.S))}catch(e){return null}}(),ppnDealers:{}});c.onChange("savedDealerCookie",(function(e){r.w.setCookie(i.S,JSON.stringify(e))}))},7094:function(e,t,n){n.r(t),n.d(t,{E:function(){return o},g:function(){return r}});var o={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function r(e){switch(e){case o.PREVIEW.toString():return o.PREVIEW;case o.TEST.toString():return o.TEST;case o.LOCAL.toString():return o.LOCAL;case o.PRODUCTION.toString():default:return o.PRODUCTION}}},1252:function(e,t,n){n.r(t),n.d(t,{C:function(){return I},D:function(){return p},E:function(){return _},F:function(){return h},G:function(){return y},I:function(){return C},L:function(){return u},M:function(){return R},R:function(){return c},S:function(){return w},V:function(){return l},a:function(){return s},b:function(){return x},c:function(){return M},d:function(){return H},e:function(){return a},f:function(){return A},g:function(){return b},h:function(){return L},i:function(){return O},j:function(){return k},k:function(){return D},l:function(){return G},m:function(){return o},n:function(){return T},o:function(){return i},p:function(){return d},q:function(){return f},r:function(){return g},s:function(){return E},t:function(){return v},u:function(){return m},v:function(){return U},w:function(){return P},x:function(){return S},y:function(){return N},z:function(){return F}});var o={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},r={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},i="production",c="REDACTED",a="loggedIn",u="loginOrRegister",s="loading",l="2.23.2",p=0,d="featureOverrideEnabled",f="HOMENAV_1723",h="NAVI_3",m='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',E="nav",g="edgecast_CDN",_={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},v={Link:"link",Button:"button",Image:"image"},w="nav_saved_dealer",y="by geolocation",R=7776e6,I="porsche.com",C="auth-iframe-header-navigation",N={Model:"model-variant",Level1:"level1-variant"};function A(e){return r[e]}function L(e,t){return e&&"object"===typeof e&&t in e}function O(e){return"string"===typeof e&&e.length>0}function b(e){return"string"===typeof e?e:""}function T(e){return e instanceof HTMLElement?e:null}function D(e){var t;null===(t=T(e))||void 0===t||t.focus()}function S(e){return e instanceof HTMLInputElement?e:null}function k(e){return 0===e.x&&0===e.y}function P(e){return e===s}function x(e){return!P(e)&&!function(e){return e===u}(e)}function U(e,t){return e===a?t:e}function M(e){return Object.entries(e).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))})).join("&")}function H(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join("---")}function G(e,t){return void 0===t&&(t=!1),t?e>=o.s:e>=o.l}function F(e){switch(e){case o.xxl:case o.xl:return 1920;case o.l:return 1366;case o.m:return 1024;case o.s:return 768;case o.xs:return 375;default:return 320}}},1292:function(e,t,n){n.r(t),n.d(t,{c:function(){return u}});var o=n(8756),r=function(e){return!("isConnected"in e)||e.isConnected},i=function(e,t){var n;return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){n=0,e.apply(void 0,o)}),t)}}((function(e){for(var t=0,n=e.keys();t<n.length;t++){var o=n[t];e.set(o,e.get(o).filter(r))}}),2e3),c=function(e){return"function"===typeof e?e():e},a=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},u=function(e,t){var n=function(e,t){void 0===t&&(t=function(e,t){return e!==t});var n=c(e),o=new Map(Object.entries(null!==n&&void 0!==n?n:{})),r={dispose:[],get:[],set:[],reset:[]},i=function(){var t;o=new Map(Object.entries(null!==(t=c(e))&&void 0!==t?t:{})),r.reset.forEach((function(e){return e()}))},u=function(e){return r.get.forEach((function(t){return t(e)})),o.get(e)},s=function(e,n){var i=o.get(e);t(n,i,e)&&(o.set(e,n),r.set.forEach((function(t){return t(e,n,i)})))},l="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(e,t){return u(t)},ownKeys:function(e){return Array.from(o.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return o.has(t)},set:function(e,t,n){return s(t,n),!0}}),p=function(e,t){return r[e].push(t),function(){a(r[e],t)}};return{state:l,get:u,set:s,on:p,onChange:function(t,n){var o=p("set",(function(e,o){e===t&&n(o)})),r=p("reset",(function(){return n(c(e)[t])}));return function(){o(),r()}},use:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.reduce((function(e,t){return t.set&&e.push(p("set",t.set)),t.get&&e.push(p("get",t.get)),t.reset&&e.push(p("reset",t.reset)),t.dispose&&e.push(p("dispose",t.dispose)),e}),[]);return function(){return n.forEach((function(e){return e()}))}},dispose:function(){r.dispose.forEach((function(e){return e()})),i()},reset:i,forceUpdate:function(e){var t=o.get(e);r.set.forEach((function(n){return n(e,t,t)}))}}}(e,t);return n.use(function(){if("function"!==typeof o.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,o.a)();n&&function(e,t,n){var o=e.get(t);o?o.includes(n)||o.push(n):e.set(t,[n])}(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(o.f)),i(e)},reset:function(){e.forEach((function(e){return e.forEach(o.f)})),i(e)}}}()),n}},8338:function(e,t,n){n.r(t),n.d(t,{R:function(){return i},c:function(){return a},s:function(){return u}});var o=n(1252),r=n(7393),i={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},c={AP:i.ASIA_PACIFIC,CE:i.EASTERN_EUROPE,LL:i.LATIN_AMERICA,WW:i.INTERNATIONAL};function a(e){return Object.values(i).includes(e)}function u(e){if(!(0,o.i)(e))throw new r.N("empty locale passed",r.a.NO_INPUT);var t=e.substring(0,e.indexOf("-")).toLowerCase(),n=e.substring(e.indexOf("-")+1).toLowerCase();if(a(n)||(n=n.toUpperCase()),!(0,o.i)(t)||!(0,o.i)(n))throw new r.N("invalid locale ".concat(e," passed"),r.a.INVALID_INPUT);return{language:t,country:(0,o.h)(c,n)?c[n]:n}}},9648:function(e,t,n){n.r(t),n.d(t,{a:function(){return p},b:function(){return l},c:function(){return a},d:function(){return u},g:function(){return s}});var o=n(2651),r=n(8338),i=n(7864),c=n(1252);function a(e,t){try{var n=(0,r.s)(e).country;return"CN"!==n&&!(0,r.c)(n)&&t}catch(e){}return!0}function u(e,t,n,r){var c,a=e.vehiclePurchase,u=e.experience,s=e.shop,l=e.legacyMore,p=e.legacyShop,d=(c={},c[i.R.VEHICLE_PURCHASE]=a,c[i.R.EXPERIENCE]=u,c[i.R.SHOP]=r?s:p,c[i.R.MORE]=l,c)[n];if(void 0===d)return null;var f=(0,i.g)(t);return f===n?d:(0,o.f)(d,f)}function s(e,t,n){if(!(0,c.i)(t))return"";var r=(0,i.f)(t);switch(r){case i.R.MODELS:return e.models.text;case i.R.DEALER_SEARCH:return e.dealer.details.backToSearch;case i.R.SHOP:case i.R.VEHICLE_PURCHASE:case i.R.MORE:case i.R.EXPERIENCE:var a=u(o.n.state,t,r,n);if(null!==a)return a.text}return""}function l(e,t,n,o,r,u){var s=e.dealer,l=e.models,p=e.myPorsche,d=e.vehiclePurchase,f=e.shop,h=e.experience,m=t.savedDealerCookie,E=t.ppnDealers,g=null!==m?E[m.id]:void 0,_=[i.R.DEALER_SEARCH];void 0!==g&&_.push((0,i.a)(g.id));var v=[{elementId:i.R.MODELS,routingKeys:[i.R.MODELS],analyticsId:l.id,text:l.text},{elementId:i.R.VEHICLE_PURCHASE,routingKeys:[i.R.VEHICLE_PURCHASE],analyticsId:d.id,text:d.text},{elementId:i.R.SHOP,routingKeys:[i.R.SHOP],analyticsId:f.id,text:f.text},{elementId:i.R.EXPERIENCE,routingKeys:[i.R.EXPERIENCE],analyticsId:h.id,text:h.text}],w={elementId:i.R.DEALER_SEARCH,routingKeys:_,analyticsId:s.id,text:s.text};if(a(n,u)){var y=null===g||void 0===g?void 0:g.name;(0,c.i)(y)&&(w.subtext=y)}else w.link=s.search.map.link,w.onClick=void 0;if(v.push(w),null!==p){var R=(0,c.b)(o),I=R?(0,c.v)(o,p.loggedInFallback):void 0;v.push({elementId:i.R.MY_PORSCHE,routingKeys:[i.R.MY_PORSCHE],analyticsId:p.id,text:p.text,subtext:I,showIconModifier:R&&r>0})}return v}function p(e,t,n,o,r,c,a){var s=(0,i.f)(c);switch(s){case c:break;case i.R.MODELS:return e.models.series.map((function(e){return{elementId:(0,i.b)(e.id),routingKeys:[(0,i.b)(e.id)],analyticsId:e.id,text:e.name,subtext:e.tags.map((function(e){return e.text})).join(" | ")}}));case i.R.SHOP:case i.R.VEHICLE_PURCHASE:case i.R.EXPERIENCE:var p=(0,i.r)(c),d=u(e,p,s,!0);if(null!==d)return d.children.map((function(e){return{elementId:(0,i.c)(p,e.id),routingKeys:[(0,i.c)(p,e.id)],analyticsId:e.id,text:e.text,link:e.link}}))}return l(e,t,n,o,r,a)}},2651:function(e,t,n){n.r(t),n.d(t,{f:function(){return s},n:function(){return l}});var o=n(1292),r=n(1252),i={id:"",text:"",link:"",icon:"",description:""},c={id:"",text:"",description:""},a={id:"",text:"",link:"",children:[]},u={menu:c,crest:i,back:c,close:c,accessibilityStatement:i,countryRecommender:{statement:"",region:"",language:"",change:c},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:c,or:"",geolocation:c,load:"",map:i},details:{id:"",finder:i,bookService:i,backToSearch:""}},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:i,loginText:"",logout:i,messages:i,more:null,signup:i,signupText:"",links:[]},vehiclePurchase:a,shop:a,experience:a,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:a,legacyShop:a};function s(e,t){if(!(0,r.i)(t))return null;if(e.id===t)return e;if(!Array.isArray(e.children))return null;for(var n=0,o=e.children;n<o.length;n++){var i=s(o[n],t);if(null!==i)return i}return null}var l=(0,o.c)(u)},8250:function(e,t,n){n.r(t),n.d(t,{n:function(){return c}});var o=n(1292),r=n(7094),i=n(1252),c=(0,o.c)({loggedInState:i.L,unreadMessagesCount:i.D,userConsent:!1,env:(0,r.g)(i.o)})},7393:function(e,t,n){n.r(t),n.d(t,{N:function(){return r},a:function(){return i},g:function(){return c}});var o=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=function(e){function t(n,o){var r=e.call(this,n)||this;return r.type=o,Object.setPrototypeOf(r,t.prototype),r}return o(t,e),t}(Error),i={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function c(e,t){if(!(t instanceof r))return e.wrong;switch(t.type){case i.NO_INPUT:return e.noInput;case i.INVALID_INPUT:return e.invalidInput;case i.NO_RESULTS:return e.noResults;case i.GENERAL:return e.wrong;case i.RETRY:return e.retry;case i.GEOLOCATION_DENIED:return e.geolocationDenied;default:return e.wrong}}},9044:function(e,t,n){n.r(t),n.d(t,{phn_side_drawer:function(){return l}});var o=n(8756),r=n(9648),i=n(4385),c=n(2651),a=n(8250),u=n(1252),s=(n(8338),n(7393),n(7864),n(1292),n(1882),n(7094),function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}),l=function(){function e(e){(0,o.r)(this,e),this.sideDrawerItemClick=(0,o.c)(this,"sideDrawerItemClick",7),this.activeRoutingKey=void 0,this.locale=void 0,this.isAnimating=!1,this.hideHighlight=!1}return e.prototype.render=function(){var e=this,t=a.n.state,n=t.loggedInState,l=t.unreadMessagesCount,p=t.userConsent,d=(0,r.a)(c.n.state,i.d.state,this.locale,n,l,this.activeRoutingKey,p);return(0,o.h)("nav",null,d.map((function(t){var n=t.routingKeys,r=s(t,["routingKeys"]),i=n.includes(e.activeRoutingKey)&&!e.isAnimating;return(0,o.h)(o.F,null,(0,o.h)("phn-side-drawer-item",Object.assign({key:r.elementId,onClick:function(){(0,u.i)(r.link)||e.sideDrawerItemClick.emit(n)},isActive:i},r)),i?(0,o.h)("div",{class:"item-highlight ".concat(e.hideHighlight?"closing":"")}):null)})))},e}();l.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes shrinkHighlightOut{from{width:100%}to{width:0}}@keyframes shrinkHighlightOut{from{width:100%}to{width:0}}@-webkit-keyframes shrinkHighlightIn{from{width:0}to{width:100%}}@keyframes shrinkHighlightIn{from{width:0}to{width:100%}}.sc-phn-side-drawer-h{display:block;width:100%}.sc-phn-side-drawer-h .item-highlight.sc-phn-side-drawer{display:block;border-bottom:2px solid #323639;border-radius:1px;margin-bottom:-0.125rem;-webkit-animation-name:shrinkHighlightIn;animation-name:shrinkHighlightIn;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-side-drawer-h .item-highlight.closing.sc-phn-side-drawer{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-name:shrinkHighlightOut;animation-name:shrinkHighlightOut;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:2.25rem}@media (min-width: 1300px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:3rem}}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:3.375rem}}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer:first-of-type{margin-top:0}"},7864:function(e,t,n){n.r(t),n.d(t,{R:function(){return i},a:function(){return l},b:function(){return s},c:function(){return c},d:function(){return u},e:function(){return p},f:function(){return a},g:function(){return d},r:function(){return f}});var o=n(1252),r=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},i={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",MODELS:"models"};function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r([],e,!0),(0,o.g)(t).split("/"),!0)}),[]).filter(Boolean).join("/")}function a(e){if((0,o.i)(e))return Object.values(i).find((function(t){return e.startsWith(t)}))}function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,r([i.SERIES],e,!1))}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,r([i.MODELS],e,!1))}function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,r([i.DEALER_SEARCH],e,!1))}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return c.apply(void 0,r([i.MY_PORSCHE],e,!1))}function d(e){return e.split("/").slice(-1)[0]}function f(e){return e.split("/").slice(0,-1).join("/")}},1882:function(e,t,n){n.r(t),n.d(t,{w:function(){return a}});var o=n(1252),r=n(7393),i=function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{u(o.next(e))}catch(e){i(e)}}function a(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){e.done?n(e.value):r(e.value).then(c,a)}u((o=o.apply(e,t||[])).next())}))},c=function(e,t){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};var a=new(function(){function e(){}return Object.defineProperty(e.prototype,"location",{get:function(){return window.location},set:function(e){window.location=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sessionStorage",{get:function(){return window.sessionStorage},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{set:function(e){Object.assign(window,{PHN_HEADER_VERSION:e})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"navigationLoaded",{set:function(e){Object.assign(window,{PHN_NAVIGATION_LOADED:e})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bodyOverflow",{get:function(){return document.body.style.overflow},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bodyHeight",{get:function(){return document.body.style.height},enumerable:!1,configurable:!0}),e.prototype.createDiv=function(){return window.document.createElement("div")},e.prototype.getBreakpoint=function(){var e=Math.max(window.document.documentElement.clientWidth,window.innerWidth||0),t=Object.keys(o.m).reverse().find((function(t){return(0,o.h)(o.m,t)&&e>=o.m[t]}));return"string"===typeof t&&(0,o.h)(o.m,t)?o.m[t]:0},Object.defineProperty(e.prototype,"redirected",{get:function(){return!0===window.REDIRECTED},enumerable:!1,configurable:!0}),e.prototype.getIframeLocationLike=function(e){var t,n,o=window.document.createElement("iframe");return o.id=e,o.style.display="none",window.document.body.appendChild(o),null!==(n=null===(t=o.contentWindow)||void 0===t?void 0:t.location)&&void 0!==n?n:null},e.prototype.createIframe=function(e,t){var n=window.document.createElement("iframe");n.id=e,n.style.display="none",n.src=t,window.document.body.appendChild(n)},e.prototype.removeElement=function(e){var t;null===(t=window.document.getElementById(e))||void 0===t||t.remove()},e.prototype.redirectToUrl=function(e){window.location.assign(e)},e.prototype.generateRandom=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=new Uint8Array(e);window.crypto.getRandomValues(n);for(var o=[],r=0;r<n.byteLength;r+=1){var i=n[r]%t.length;o.push(t[i])}return o.join("")},e.prototype.maybeCheckMarketingConsent=function(e){var t,n,o,r,i,c,a,u,s,l,p,d={processorId:null!==(o=null===(n=null===(t=window.GlobalConsent)||void 0===t?void 0:t.Processor)||void 0===n?void 0:n.googleMaps)&&void 0!==o?o:"Google Maps",timeoutVar:{},mapContainer:"",callbacks:{success:e}};return"function"===typeof(null===(i=null===(r=window.PCOM)||void 0===r?void 0:r.globalConsent)||void 0===i?void 0:i.checkConsent)?(null===(u=null===(a=null===(c=window.PCOM)||void 0===c?void 0:c.globalConsent)||void 0===a?void 0:a.checkConsent)||void 0===u||u.call(a,d),!0):"function"===typeof(null===(s=window.ucPrivacyShield)||void 0===s?void 0:s.checkConsent)?(null===(p=null===(l=window.ucPrivacyShield)||void 0===l?void 0:l.checkConsent)||void 0===p||p.call(l,d),!0):(e(),!1)},e.prototype.deriveChallenge=function(e){return i(this,void 0,void 0,(function(){var t,n,o,i,a,u;return c(this,(function(c){switch(c.label){case 0:if(e.length<43||e.length>128)throw new r.N("invalid code length",r.a.INVALID_INPUT);for(t=new ArrayBuffer(e.length),n=new Uint8Array(t),u=0;u<e.length;u++)n[u]=e.charCodeAt(u);return[4,window.crypto.subtle.digest("SHA-256",n)];case 1:for(o=c.sent(),i=new Uint8Array(o),a="",u=0;u<i.byteLength;u++)a+=String.fromCharCode(i[u]);return[2,window.btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")]}}))}))},e.prototype.hashString=function(e){return i(this,void 0,void 0,(function(){var t,n;return c(this,(function(o){switch(o.label){case 0:return t=(new TextEncoder).encode(e),[4,window.crypto.subtle.digest("SHA-256",t)];case 1:return n=o.sent(),[2,Array.from(new Uint8Array(n)).map((function(e){return e.toString(16).padStart(2,"0")})).join("")]}}))}))},e.prototype.getScrollbarWidth=function(){var e=window.document.createElement("div");e.style.overflow="scroll",window.document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return window.document.body.removeChild(e),Number.isNaN(t)?"0px":"".concat(t,"px")},e.prototype.fetchGoogleMapsApi=function(e,t){return void 0===t&&(t="https://maps.googleapis.com/maps/api/js?key=".concat(e,"&libraries=places")),i(this,void 0,void 0,(function(){var e;return c(this,(function(n){return void 0!==window.google&&void 0!==window.google.maps&&void 0!==window.google.maps.version||document.getElementById("googleMaps")?[2,window.google]:((e=document.createElement("script")).src=t,e.id="googleMaps",document.head.appendChild(e),[2,new Promise((function(t,n){e.onerror=function(){n(new r.N("Failed to load google maps script.",r.a.GENERAL))},e.onload=function(){t(window.google)}}))])}))}))},e.prototype.getNavigatorLatLong=function(){return i(this,void 0,void 0,(function(){return c(this,(function(e){return[2,new Promise((function(e,t){window.navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,o=n.latitude,r=n.longitude;e({latitude:o,longitude:r})}),(function(e){return t(new r.N("geolocation.getCurrentPosition failed with ".concat(e.code,": ").concat(e.message),function(e){switch(e.code){case e.PERMISSION_DENIED:return r.a.GEOLOCATION_DENIED;case e.POSITION_UNAVAILABLE:case e.TIMEOUT:return r.a.RETRY;default:return r.a.GENERAL}}(e)))}))}))]}))}))},e.prototype.getCookie=function(e){var t;return(0,o.g)(null===(t=document.cookie.split("; ").find((function(t){return t.startsWith("".concat(e,"="))})))||void 0===t?void 0:t.split("=")[1])},e.prototype.setCookie=function(e,t){document.cookie="".concat(e,"=").concat(t,";domain=").concat(o.C,";expires=").concat(new Date(Date.now()+10*o.M).toUTCString(),";")},e.prototype.btoa=function(e){return window.btoa(e)},e.prototype.lockScroll=function(){window.document.body.style.overflow="hidden",window.document.body.style.height="100%"},e.prototype.unlockScroll=function(e,t){"hidden"===window.document.body.style.overflow&&(window.document.body.style.overflow=e),"100%"===window.document.body.style.height&&(window.document.body.style.height=t)},e}())}}]);