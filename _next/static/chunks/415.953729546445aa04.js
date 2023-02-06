"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415,252,338,393],{2415:function(t,e,n){n.r(e),n.d(e,{f:function(){return s},g:function(){return p}});var r=n(8338),o=n(1252),c=n(7393),i=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,c){function i(t){try{u(r.next(t))}catch(t){c(t)}}function a(t){try{u(r.throw(t))}catch(t){c(t)}}function u(t){t.done?n(t.value):o(t.value).then(i,a)}u((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(t){return function(e){return u([t,e])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},u=new Map;function s(t,e){return i(this,void 0,void 0,(function(){var n,i,s,p,_,E,h;return a(this,(function(a){switch(a.label){case 0:return n=(0,o.d)(t,e),void 0!==(i=u.get(n))?[2,i]:(s=(0,r.s)(e),p=s.country,_=s.language,[4,fetch("".concat(t,"/").concat("".concat(_,"-").concat(p),".json"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json"}})]);case 1:if(404===(E=a.sent()).status)throw new c.N("No content for locale ".concat(e," found"),c.a.NO_RESULTS);if(!E.ok)throw new c.N("Could not get content for locale ".concat(e),c.a.GENERAL);return[4,E.json()];case 2:return h=a.sent(),u.set(n,h),[2,h]}}))}))}function p(t,e){return i(this,void 0,void 0,(function(){var n,o,c;return a(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=(0,r.s)(e).country,(o=n).includes("-")&&(o=n.split("-")[0]),c="".concat(t,"/flags/").concat(o,".svg"),[4,fetch(c)];case 1:return i.sent().ok?[2,c]:[3,3];case 2:return i.sent(),[3,3];case 3:return[2,""]}}))}))}},1252:function(t,e,n){n.r(e),n.d(e,{C:function(){return T},D:function(){return _},E:function(){return R},F:function(){return l},G:function(){return C},I:function(){return O},L:function(){return u},M:function(){return m},R:function(){return i},S:function(){return A},V:function(){return p},a:function(){return s},b:function(){return M},c:function(){return H},d:function(){return k},e:function(){return a},f:function(){return d},g:function(){return S},h:function(){return D},i:function(){return U},j:function(){return y},k:function(){return w},l:function(){return F},m:function(){return r},n:function(){return g},o:function(){return c},p:function(){return E},q:function(){return h},r:function(){return N},s:function(){return I},t:function(){return L},u:function(){return f},v:function(){return b},w:function(){return G},x:function(){return P},y:function(){return v},z:function(){return Y}});var r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},o={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},c="production",i="REDACTED",a="loggedIn",u="loginOrRegister",s="loading",p="2.23.2",_=0,E="featureOverrideEnabled",h="HOMENAV_1723",l="NAVI_3",f='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',I="nav",N="edgecast_CDN",R={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},L={Link:"link",Button:"button",Image:"image"},A="nav_saved_dealer",C="by geolocation",m=7776e6,T="porsche.com",O="auth-iframe-header-navigation",v={Model:"model-variant",Level1:"level1-variant"};function d(t){return o[t]}function D(t,e){return t&&"object"===typeof t&&e in t}function U(t){return"string"===typeof t&&t.length>0}function S(t){return"string"===typeof t?t:""}function g(t){return t instanceof HTMLElement?t:null}function w(t){var e;null===(e=g(t))||void 0===e||e.focus()}function P(t){return t instanceof HTMLInputElement?t:null}function y(t){return 0===t.x&&0===t.y}function G(t){return t===s}function M(t){return!G(t)&&!function(t){return t===u}(t)}function b(t,e){return t===a?e:t}function H(t){return Object.entries(t).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n))})).join("&")}function k(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.join("---")}function F(t,e){return void 0===e&&(e=!1),e?t>=r.s:t>=r.l}function Y(t){switch(t){case r.xxl:case r.xl:return 1920;case r.l:return 1366;case r.m:return 1024;case r.s:return 768;case r.xs:return 375;default:return 320}}},8338:function(t,e,n){n.r(e),n.d(e,{R:function(){return c},c:function(){return a},s:function(){return u}});var r=n(1252),o=n(7393),c={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},i={AP:c.ASIA_PACIFIC,CE:c.EASTERN_EUROPE,LL:c.LATIN_AMERICA,WW:c.INTERNATIONAL};function a(t){return Object.values(c).includes(t)}function u(t){if(!(0,r.i)(t))throw new o.N("empty locale passed",o.a.NO_INPUT);var e=t.substring(0,t.indexOf("-")).toLowerCase(),n=t.substring(t.indexOf("-")+1).toLowerCase();if(a(n)||(n=n.toUpperCase()),!(0,r.i)(e)||!(0,r.i)(n))throw new o.N("invalid locale ".concat(t," passed"),o.a.INVALID_INPUT);return{language:e,country:(0,r.h)(i,n)?i[n]:n}}},7393:function(t,e,n){n.r(e),n.d(e,{N:function(){return o},a:function(){return c},g:function(){return i}});var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(t){function e(n,r){var o=t.call(this,n)||this;return o.type=r,Object.setPrototypeOf(o,e.prototype),o}return r(e,t),e}(Error),c={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function i(t,e){if(!(e instanceof o))return t.wrong;switch(e.type){case c.NO_INPUT:return t.noInput;case c.INVALID_INPUT:return t.invalidInput;case c.NO_RESULTS:return t.noResults;case c.GENERAL:return t.wrong;case c.RETRY:return t.retry;case c.GEOLOCATION_DENIED:return t.geolocationDenied;default:return t.wrong}}}}]);