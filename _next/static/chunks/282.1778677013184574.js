"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282,7379],{7379:function(e,t,n){n.r(t),n.d(t,{A:function(){return m},B:function(){return T},C:function(){return N},D:function(){return f},E:function(){return ee},F:function(){return r},G:function(){return h},H:function(){return q},I:function(){return G},J:function(){return g},K:function(){return Q},L:function(){return l},M:function(){return L},N:function(){return a},O:function(){return X},P:function(){return C},Q:function(){return Y},R:function(){return b},S:function(){return E},T:function(){return j},U:function(){return I},V:function(){return _},W:function(){return d},a:function(){return D},b:function(){return H},c:function(){return R},d:function(){return p},e:function(){return A},f:function(){return u},g:function(){return U},h:function(){return Z},i:function(){return P},j:function(){return W},k:function(){return z},l:function(){return x},m:function(){return k},n:function(){return y},o:function(){return i},p:function(){return B},q:function(){return K},r:function(){return O},s:function(){return V},t:function(){return w},u:function(){return S},v:function(){return s},w:function(){return F},x:function(){return $},y:function(){return J},z:function(){return M}});var r,o,i={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},c={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},u={hero:"hero",navbar:"navbar",transparent:"transparent"},a={light:"light",dark:"dark"},s="production",p="loggedIn",l="loginOrRegister",_="3.3.0",f=0,h='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',E="nav_saved_dealer",d="by geolocation",I="by market",L=7776e6,N="porsche.com",R="auth-iframe-header-navigation",C={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},A="",m={shop:"shop",pcom:"pcom",default:"default"};(o=r||(r={})).startOpening="startOpening",o.startClosing="startClosing",o.finishOpening="finishOpening",o.finishClosing="finishClosing";var v=null;function T(){if(null===v)throw Error("No root element present");return v}function O(e){v=e}function g(e){return T().querySelector(e)}function D(e){return c[e]}function S(e,t){return e&&"object"==typeof e&&t in e}function P(e){return"string"==typeof e&&e.length>0}function U(e){return"string"==typeof e?e:""}function w(e){return e instanceof HTMLElement?e:null}function y(e){var t;null===(t=w(e))||void 0===t||t.focus()}function b(e){return e instanceof HTMLInputElement?e:null}function k(e){return 0===e.x&&0===e.y}function G(e){return"loading"!==e&&e!==l}function M(e,t){return e===p?t:e}function H(e){return Object.entries(e).filter(function(e){return void 0!==e[1]}).map(function(e){var t=e[0],n=e[1];return[t,P(n)?n:n.toString()]}).map(function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))}).join("&")}function F(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join("---")}function x(e){return e>=i.s}function Y(e){switch(e){case i.xxl:case i.xl:return 1920;case i.l:return 1360;case i.m:return 1024;case i.s:return 760;case i.xs:return 390;default:return 320}}function V(e){return Object.keys(m).includes(e)?e:m.default}function B(e,t){if((Object.keys(u).includes(e)?e:u.navbar)===u.navbar)return u.navbar;var n=Object.keys(a).includes(t)?t:a.light;return"".concat(e,"_").concat(n)}function K(e){return!!e&&"function"==typeof e.then&&"Promise"===e[Symbol.toStringTag]}function j(e,t){return"".concat(e).concat(e.includes("?")?"&":"?").concat(H(t))}function Z(e,t){for(var n=e,r=[],o=function(e){if(null==(n=n.children.find(function(t){return t.id===e})))return"break";r.push(e)},i=0;i<t.length&&"break"!==o(t[i]);i++);return r}function W(e,t){return["vehiclePurchase","shop","experience","services"].includes(t)&&void 0!==e[t]?e[t]:null}function z(e){for(var t=[e[0]],n=1;n<e.length;n++)t.push("".concat(t[n-1],"/").concat(e[n]));return t}function Q(e){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(e)}function X(e){return["718","911","macan"].includes(e.toLowerCase())}var q=function(e,t){return t===u.transparent||t===u.hero?e:"light"};function J(e){return e.replace(/([A-Z])/g,function(e){return"-".concat(e[0].toLowerCase())})}function $(e,t,n){return void 0===n&&(n=function(e,t){return e[t]}),Object.entries(t).reduce(function(t,r){var o=r[0],i=r[1],c=n(e,o);return"string"==typeof c?t[o]=c:t[o]=i,t},{})}var ee=function(e,t,n){var r=n.bubbles,o=n.detail,i=n.composed,c=new CustomEvent(t,{detail:o,bubbles:r,cancelable:n.cancelable,composed:i}),u=g(e);null==u||u.dispatchEvent(c)}},282:function(e,t,n){n.r(t),n.d(t,{C:function(){return E},D:function(){return f},E:function(){return l},N:function(){return C},a:function(){return A},b:function(){return x},c:function(){return s},d:function(){return _},e:function(){return k},f:function(){return d},g:function(){return p},h:function(){return h},i:function(){return O},j:function(){return R},k:function(){return function e(t,n){if(!(0,c.i)(n))return null;if(null!==t){if(t.id===n)return t;if(!Array.isArray(t.children))return null;for(var r=0,o=t.children;r<o.length;r++){var i=e(o[r],n);if(null!==i)return i}}return null}},l:function(){return I},m:function(){return m},n:function(){return G},o:function(){return L},p:function(){return N},s:function(){return g}});var r,o,i,c=n(7379),u=n(3743),a=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function p(e){switch(e){case s.PREVIEW.toString():return s.PREVIEW;case s.TEST.toString():return s.TEST;case s.LOCAL.toString():return s.LOCAL;case s.PRODUCTION.toString():default:return s.PRODUCTION}}var l={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_CTA_CLICK:"PAGHomeNav_ModelCTA_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",NAVIGATION_LINK_CLICK:"PAGHomeNav_NavigationLink_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click",CONTEXTUAL_BUTTON_CLICK:"PAGHomeNav_IconContextLink_Click",DRAWER_LOAD:"PAGHomeNav_Drawer_Load",PCOM_SEARCH_CLICK:"PAGHomeNav_IconGlobalLink_Click"},_="nav",f="edgecast_CDN",h={closeButton:"close-button",backdrop:"backdrop",backButton:"back-button",menuItem:"menu-item",sideDrawerItem:"side-drawer-item",doubleDrawer:"double-drawer",singleDrawer:"single-drawer",bodyTypeButton:"body-type-button",myPorscheDrawer:"my-porsche-drawer",dealerSearchForm:"dealer-search-form"},E={Link:"link",Button:"button",Image:"image"},d={SingleDrawer:"singleDrawer",DoubleDrawer:"doubleDrawer"},I="level1-mainmenu_level2-find_a_dealer",L="level1-mainmenu_level3-dealer-details",N="level2_dealer-search-form",R="level3_dealer-details",C=function(e){function t(n,r){var o=e.call(this,n)||this;return o.type=r,Object.setPrototypeOf(o,t.prototype),o}return a(t,e),t}(Error),A={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function m(e,t){if(!(t instanceof C))return e.wrong;switch(t.type){case A.NO_INPUT:return e.noInput;case A.INVALID_INPUT:return e.invalidInput;case A.NO_RESULTS:return e.noResults;case A.GENERAL:return e.wrong;case A.RETRY:return e.retry;case A.GEOLOCATION_DENIED:return e.geolocationDenied;default:return e.wrong}}var v={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},T={AP:v.ASIA_PACIFIC,CE:v.EASTERN_EUROPE,LL:v.LATIN_AMERICA,WW:v.INTERNATIONAL};function O(e){return Object.values(v).includes(e)}function g(e){if(!(0,c.i)(e))throw new C("empty locale passed",A.NO_INPUT);var t=e.substring(0,e.indexOf("-")).toLowerCase(),n=e.substring(e.indexOf("-")+1).toLowerCase();if(O(n)||(n=n.toUpperCase()),!(0,c.i)(t)||!(0,c.i)(n))throw new C("invalid locale ".concat(e," passed"),A.INVALID_INPUT);return{language:t,country:(0,c.u)(T,n)?T[n]:n}}var D=function(e,t,n){var r=e.get(t);r?r.includes(n)||r.push(n):e.set(t,[n])},S=function(e){return!("isConnected"in e)||e.isConnected},P=(o=function(e){for(var t=0,n=e.keys();t<n.length;t++){var r=n[t];e.set(r,e.get(r).filter(S))}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i&&clearTimeout(i),i=setTimeout(function(){i=0,o.apply(void 0,e)},2e3)}),U=function(){if("function"!=typeof u.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,u.a)();n&&D(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(u.f)),P(e)},reset:function(){e.forEach(function(e){return e.forEach(u.f)}),P(e)}}},w=function(e){return"function"==typeof e?e():e},y=function(e,t){void 0===t&&(t=function(e,t){return e!==t});var n=w(e),r=new Map(Object.entries(null!=n?n:{})),o={dispose:[],get:[],set:[],reset:[]},i=function(){var t;r=new Map(Object.entries(null!==(t=w(e))&&void 0!==t?t:{})),o.reset.forEach(function(e){return e()})},c=function(e){return o.get.forEach(function(t){return t(e)}),r.get(e)},u=function(e,n){var i=r.get(e);t(n,i,e)&&(r.set(e,n),o.set.forEach(function(t){return t(e,n,i)}))},a="undefined"==typeof Proxy?{}:new Proxy(n,{get:function(e,t){return c(t)},ownKeys:function(e){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return r.has(t)},set:function(e,t,n){return u(t,n),!0}}),s=function(e,t){return o[e].push(t),function(){b(o[e],t)}};return{state:a,get:c,set:u,on:s,onChange:function(t,n){var r=s("set",function(e,r){e===t&&n(r)}),o=s("reset",function(){return n(w(e)[t])});return function(){r(),o()}},use:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.reduce(function(e,t){return t.set&&e.push(s("set",t.set)),t.get&&e.push(s("get",t.get)),t.reset&&e.push(s("reset",t.reset)),t.dispose&&e.push(s("dispose",t.dispose)),e},[]);return function(){return n.forEach(function(e){return e()})}},dispose:function(){o.dispose.forEach(function(e){return e()}),i()},reset:i,forceUpdate:function(e){var t=r.get(e);o.set.forEach(function(n){return n(e,t,t)})}}},b=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},k=function(e,t){var n=y(e,t);return n.use(U()),n},G=k({loggedInState:c.L,unreadMessagesCount:c.D,userConsent:!1,env:p(c.v),app:c.A.default,usingKeyboard:!1,locale:c.e}),M={id:"",text:"",link:"",icon:"",description:""},H={id:"",text:"",description:""},F={id:"",text:"",link:"",children:[]},x=k({menu:H,crest:M,back:H,close:H,accessibilityStatement:M,countryRecommender:{statement:"",region:"",language:"",change:H},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",numberOfDealers:42,search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:H,or:"",geolocation:H,dropdown:{province:"",city:"",selectAProvince:"",selectACity:""},load:"",map:M,outboundLink:M},details:{id:"",finder:M,bookService:M,testDrive:M,backToSearch:""},openingHours:null},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:M,loginText:"",logout:M,messages:M,more:null,signup:M,signupText:"",links:[],savedSearches:null,savedVehicles:null},vehiclePurchase:F,shop:{cart:"",wishlist:null,additionalContent:[],id:"",text:"",link:"",children:[],availableLocales:[],availableLocalesOnlyForShop:[],logoLinksToShopLocales:[]},externalShop:M,experience:F,services:F,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:F,legacyShop:F})}}]);