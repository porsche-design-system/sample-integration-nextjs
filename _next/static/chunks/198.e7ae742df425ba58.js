"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198,234,52,679],{7700:function(t,e,n){n.r(e),n.d(e,{A:function(){return B},B:function(){return V},C:function(){return A},D:function(){return v},E:function(){return i},F:function(){return g},G:function(){return P},H:function(){return F},I:function(){return b},J:function(){return L},K:function(){return x},L:function(){return l},M:function(){return C},R:function(){return p},S:function(){return N},V:function(){return d},a:function(){return f},b:function(){return j},c:function(){return K},d:function(){return s},e:function(){return I},f:function(){return T},g:function(){return k},h:function(){return m},i:function(){return D},j:function(){return a},k:function(){return Y},l:function(){return W},m:function(){return H},n:function(){return o},o:function(){return O},p:function(){return G},q:function(){return E},r:function(){return _},s:function(){return y},t:function(){return h},u:function(){return u},v:function(){return R},w:function(){return w},x:function(){return U},y:function(){return M},z:function(){return S}});var o,r,i,c=function(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))},a={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},u="preview",p="REDACTED",s="loggedIn",l="loginOrRegister",f="loading",d="2.22.0",h=0;(r=o||(o={})).MAIN_MENU="mainmenu",r.DEALER_SEARCH="find_a_dealer",r.MORE="more",r.SHOP="shop",r.SERIES="series",r.MY_PORSCHE="my_porsche",r.VEHICLE_PURCHASE="vehicle_purchase",r.EXPERIENCE="experience",r.MODELS="models",function(t){t.PRODUCTION="production",t.PREVIEW="preview",t.TEST="test",t.LOCAL="local"}(i||(i={}));var m,E="featureOverrideEnabled",_="HOMENAV_1723",g="NAVI_3",w='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',y="nav",v="edgecast_CDN";!function(t){t.GENERAL_LOAD="PAGHomeNav_General_Load",t.COUNTRY_RECOMMENDER_LOAD="PAGHomeNav_CountryRecommender_Load",t.COUNTRY_RECOMMENDER_CHANGE="PAGHomeNav_CountryRecommenderChange_Click",t.COUNTRY_RECOMMENDER_CLOSE="PAGHomeNav_CountryRecommenderClose_Click",t.CREST_CLICK="PAGHomeNav_Crest_Click",t.NAVIGATION_LOAD="PAGHomeNav_Navigation_Load",t.MODEL_OVERLAY_LOAD="PAGHomeNav_ModelRangeOverlay_Load",t.MENU_BACK_CLICK="PAGHomeNav_MenuBack_Click",t.MENU_CLOSE_CLICK="PAGHomeNav_MenuClose_Click",t.META_FUNCTION_CLICK="PAGHomeNav_MetaFunction_Click",t.MODEL_CLICK="PAGHomeNav_Model_Click",t.MODEL_META_FUNCTION_CLICK="PAGHomeNav_ModelMetaFunction_Click",t.MODEL_RANGE_CLICK="PAGHomeNav_ModelRange_Click",t.MORE_CLICK="PAGHomeNav_More_Click",t.NAVIGATION_CLICK="PAGHomeNav_Navigation_Click",t.DEALER_SEARCH_SCREEN_LOAD="PAGHomeNav_FindADealerSearchScreen_Load",t.DEALER_RESULTS_SCREEN_LOAD="PAGHomeNav_FindADealerResultsScreen_Load",t.DEALER_SEARCH_CLICK="PAGHomeNav_FindADealerSearch_Click",t.DEALER_GEOLOCATION_CLICK="PAGHomeNav_FindADealerLocateMe_Click",t.DEALER_RESULT_CLICK="PAGHomeNav_FindADealerDealer_Click",t.DEALER_DETAILS_SCREEN_LOAD="PAGHomeNav_FindADealerDealerScreen_Load",t.DEALER_CONTACT_CLICK="PAGHomeNav_FindADealerDealerContact_Click",t.DEALER_MAP_CLICK="PAGHomeNav_FindADealerMap_Click"}(m||(m={}));var R,I={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"};!function(t){t.Link="link",t.Button="button",t.Image="image"}(R||(R={}));var N="nav_saved_dealer",L="by geolocation",C=7776e6,A="porsche.com",b="auth-iframe-header-navigation",O={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920};function T(t){return a[t]}function D(t){return"string"===typeof t&&t.length>0}function k(t){return"string"===typeof t?t:""}function S(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.reduce((function(t,e){return c(c([],t,!0),k(e).split("/"),!0)}),[]).filter(Boolean).join("/")}function U(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return S.apply(void 0,c([o.SERIES],t,!1))}function P(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return S.apply(void 0,c([o.DEALER_SEARCH],t,!1))}function M(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return S.apply(void 0,c([o.MY_PORSCHE],t,!1))}function x(t){return t.split("/").slice(-1)[0]}function G(t){return t instanceof HTMLElement?t:null}function H(t){var e;null===(e=G(t))||void 0===e||e.focus()}function F(t){return t instanceof HTMLInputElement?t:null}function Y(t){return 0===t.x&&0===t.y}function V(t){return t===f}function j(t){return!V(t)&&!function(t){return t===l}(t)}function B(t,e){return t===s?e:t}function K(t){return Object.entries(t).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n))})).join("&")}function W(t,e){return void 0===e&&(e=!1),e?t>=O.s:t>=O.l}},3052:function(t,e,n){n.r(e),n.d(e,{N:function(){return c},a:function(){return o},g:function(){return a}});var o,r,i=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(t){function e(n,o){var r=t.call(this,n)||this;return r.type=o,Object.setPrototypeOf(r,e.prototype),r}return i(e,t),e}(Error);function a(t,e){if(!(e instanceof c))return t.wrong;switch(e.type){case o.NO_INPUT:return t.noInput;case o.INVALID_INPUT:return t.invalidInput;case o.NO_RESULTS:return t.noResults;case o.GENERAL:return t.wrong;case o.RETRY:return t.retry;case o.GEOLOCATION_DENIED:return t.geolocationDenied;default:return t.wrong}}(r=o||(o={})).NO_INPUT="NO_INPUT",r.INVALID_INPUT="INVALID_INPUT",r.NO_RESULTS="NO_RESULTS",r.GENERAL="GENERAL",r.RETRY="RETRY",r.GEOLOCATION_DENIED="GEOLOCATION_DENIED",r.UNAUTHORIZED="UNAUTHORIZED"},198:function(t,e,n){n.r(e),n.d(e,{phn_backdrop:function(){return u}});var o=n(6138),r=n(2679),i=n(7700),c=(n(3052),function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function c(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?n(t.value):r(t.value).then(c,a)}u((o=o.apply(t,e||[])).next())}))}),a=function(t,e){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(e){return u([t,e])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},u=function(){function t(t){(0,o.r)(this,t),this.clickMenuDrawerHeaderClose=(0,o.c)(this,"clickMenuDrawerHeaderClose",7),this.backdropClosed=(0,o.c)(this,"backdropClosed",7),this.initialOverflow="unset",this.initialHeight="unset"}return t.prototype.handleClick=function(){this.clickMenuDrawerHeaderClose.emit()},t.prototype.handleAnimationEnd=function(t){var e;"darken"!==t.animationName?"lighten"!==t.animationName||this.backdropClosed.emit():null===(e=(0,i.p)(t.target))||void 0===e||e.classList.remove("darken")},t.prototype.closeBackdrop=function(){return c(this,void 0,void 0,(function(){return a(this,(function(t){return this.el.classList.add("lighten"),[2]}))}))},t.prototype.componentWillLoad=function(){(0,i.i)(r.w.bodyOverflow)&&(this.initialOverflow=r.w.bodyOverflow),(0,i.i)(r.w.bodyHeight)&&(this.initialHeight=r.w.bodyHeight),r.w.lockScroll()},t.prototype.disconnectedCallback=function(){r.w.unlockScroll(this.initialOverflow,this.initialHeight)},t.prototype.render=function(){return(0,o.h)(o.H,{class:"darken"})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),t}();u.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}.sc-phn-backdrop-h{position:fixed;z-index:300;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.8)}.lighten.sc-phn-backdrop-h{-webkit-animation-name:lighten;animation-name:lighten;-webkit-animation-duration:0.32s;animation-duration:0.32s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.darken.sc-phn-backdrop-h{-webkit-animation-name:darken;animation-name:darken;-webkit-animation-duration:0.24s;animation-duration:0.24s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}"},2679:function(t,e,n){n.r(e),n.d(e,{w:function(){return a}});var o=n(7700),r=n(3052),i=function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function c(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?n(t.value):r(t.value).then(c,a)}u((o=o.apply(t,e||[])).next())}))},c=function(t,e){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(e){return u([t,e])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};var a=new(function(){function t(){}return Object.defineProperty(t.prototype,"location",{get:function(){return window.location},set:function(t){window.location=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sessionStorage",{get:function(){return window.sessionStorage},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"innerWidth",{get:function(){return document.body.clientWidth},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{set:function(t){window.PHN_HEADER_VERSION=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"navigationLoaded",{set:function(t){window.PHN_NAVIGATION_LOADED=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bodyOverflow",{get:function(){return document.body.style.overflow},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bodyHeight",{get:function(){return document.body.style.height},enumerable:!1,configurable:!0}),t.prototype.createDiv=function(){return window.document.createElement("div")},t.prototype.getBreakpoint=function(){var t=this,e=Object.keys(o.o).reverse().find((function(e){return t.innerWidth>=o.o[e]}));return"string"===typeof e?o.o[e]:0},Object.defineProperty(t.prototype,"redirected",{get:function(){return!0===window.REDIRECTED},enumerable:!1,configurable:!0}),t.prototype.getIframeLocationLike=function(t){var e,n,o=window.document.createElement("iframe");return o.id=t,o.style.display="none",window.document.body.appendChild(o),null!==(n=null===(e=o.contentWindow)||void 0===e?void 0:e.location)&&void 0!==n?n:null},t.prototype.createIframe=function(t,e){var n=window.document.createElement("iframe");n.id=t,n.style.display="none",n.src=e,window.document.body.appendChild(n)},t.prototype.removeElement=function(t){var e;null===(e=window.document.getElementById(t))||void 0===e||e.remove()},t.prototype.redirectToUrl=function(t){window.location.assign(t)},t.prototype.generateRandom=function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=new Uint8Array(t);window.crypto.getRandomValues(n);for(var o=[],r=0;r<n.byteLength;r+=1){var i=n[r]%e.length;o.push(e[i])}return o.join("")},t.prototype.deriveChallenge=function(t){return i(this,void 0,void 0,(function(){var e,n,o,i,a,u;return c(this,(function(c){switch(c.label){case 0:if(t.length<43||t.length>128)throw new r.N("invalid code length",r.a.INVALID_INPUT);for(e=new ArrayBuffer(t.length),n=new Uint8Array(e),u=0;u<t.length;u++)n[u]=t.charCodeAt(u);return[4,window.crypto.subtle.digest("SHA-256",n)];case 1:for(o=c.sent(),i=new Uint8Array(o),a="",u=0;u<i.byteLength;u++)a+=String.fromCharCode(i[u]);return[2,window.btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")]}}))}))},t.prototype.hashString=function(t){return i(this,void 0,void 0,(function(){var e,n;return c(this,(function(o){switch(o.label){case 0:return e=(new TextEncoder).encode(t),[4,window.crypto.subtle.digest("SHA-256",e)];case 1:return n=o.sent(),[2,Array.from(new Uint8Array(n)).map((function(t){return t.toString(16).padStart(2,"0")})).join("")]}}))}))},t.prototype.getScrollbarWidth=function(){var t=window.document.createElement("div");t.style.overflow="scroll",window.document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return window.document.body.removeChild(t),Number.isNaN(e)?"0px":"".concat(e,"px")},t.prototype.fetchGoogleMapsApi=function(t,e){return void 0===e&&(e="https://maps.googleapis.com/maps/api/js?key=".concat(t,"&libraries=places")),i(this,void 0,void 0,(function(){var t;return c(this,(function(n){return void 0!==window.google&&void 0!==window.google.maps&&void 0!==window.google.maps.version||document.getElementById("googleMaps")?[2,window.google]:((t=document.createElement("script")).src=e,t.id="googleMaps",document.head.appendChild(t),[2,new Promise((function(e,n){t.onerror=function(){n(new r.N("Failed to load google maps script.",r.a.GENERAL))},t.onload=function(){e(window.google)}}))])}))}))},t.prototype.getNavigatorLatLong=function(){return i(this,void 0,void 0,(function(){return c(this,(function(t){return[2,new Promise((function(t,e){window.navigator.geolocation.getCurrentPosition((function(e){var n=e.coords,o=n.latitude,r=n.longitude;t({latitude:o,longitude:r})}),(function(t){return e(new r.N("geolocation.getCurrentPosition failed with ".concat(t.code,": ").concat(t.message),function(t){switch(t.code){case t.PERMISSION_DENIED:return r.a.GEOLOCATION_DENIED;case t.POSITION_UNAVAILABLE:case t.TIMEOUT:return r.a.RETRY;default:return r.a.GENERAL}}(t)))}))}))]}))}))},t.prototype.getCookie=function(t){var e;return(0,o.g)(null===(e=document.cookie.split("; ").find((function(e){return e.startsWith("".concat(t,"="))})))||void 0===e?void 0:e.split("=")[1])},t.prototype.setCookie=function(t,e){document.cookie="".concat(t,"=").concat(e,";domain=").concat(o.C,";expires=").concat(new Date(Date.now()+10*o.M).toUTCString(),";")},t.prototype.btoa=function(t){return window.btoa(t)},t.prototype.lockScroll=function(){window.document.body.style.overflow="hidden",window.document.body.style.height="100%"},t.prototype.unlockScroll=function(t,e){"hidden"===window.document.body.style.overflow&&(window.document.body.style.overflow=t),"100%"===window.document.body.style.height&&(window.document.body.style.height=e)},t}())}}]);