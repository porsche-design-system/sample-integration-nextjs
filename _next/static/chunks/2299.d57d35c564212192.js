"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2299,7094,1252],{7094:function(e,t,n){n.r(t),n.d(t,{E:function(){return r},g:function(){return o}});var r={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function o(e){switch(e){case r.PREVIEW.toString():return r.PREVIEW;case r.TEST.toString():return r.TEST;case r.LOCAL.toString():return r.LOCAL;case r.PRODUCTION.toString():default:return r.PRODUCTION}}},2299:function(e,t,n){n.r(t),n.d(t,{f:function(){return a}});var r=n(7094),o=n(1252),c=function(e,t){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(c){return function(a){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},i={local:{featureOverrideEnabled:!0,HOMENAV_1723:!0,NAVI_3:!1},test:{featureOverrideEnabled:!0,HOMENAV_1723:!0,NAVI_3:!0},preview:{featureOverrideEnabled:!0,HOMENAV_1723:!1,NAVI_3:!1},production:{featureOverrideEnabled:!1,HOMENAV_1723:!1,NAVI_3:!1}},a=new(function(){function e(e,t){void 0===e&&(e=(0,r.g)(o.o)),void 0===t&&(t=i),this.featureEnvMap=t,this.features={},this.setFeatures(e)}return e.prototype.isFeatureEnabled=function(e,t){var n,r;if(void 0===this.features)return!1;if(this.features[o.p]){var c=null===(r=null===(n=t.split("?")[1])||void 0===n?void 0:n.split("&").find(function(t){return t.includes(e)}))||void 0===r?void 0:r.split("=")[1];if("true"===c)return!0;if("false"===c)return!1}return!!this.features[e]},e.prototype.setFeatures=function(e){this.features=this.featureEnvMap[e]},e.prototype.isNewIDP=function(e,t){var n,r,i,a;return n=this,r=void 0,i=void 0,a=function(){var n;return c(this,function(r){switch(r.label){case 0:if(this.isFeatureEnabled(o.q,t))return[2,!0];r.label=1;case 1:return r.trys.push([1,4,,5]),[4,fetch(e)];case 2:return[4,r.sent().json()];case 3:return n=r.sent(),[2,(0,o.i)(n.idp)&&"old"!==n.idp];case 4:return r.sent(),[2,!1];case 5:return[2]}})},new(i||(i=Promise))(function(e,t){function o(e){try{u(a.next(e))}catch(e){t(e)}}function c(e){try{u(a.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):((n=t.value)instanceof i?n:new i(function(e){e(n)})).then(o,c)}u((a=a.apply(n,r||[])).next())})},e}())},1252:function(e,t,n){n.r(t),n.d(t,{C:function(){return v},D:function(){return _},E:function(){return L},F:function(){return l},G:function(){return A},I:function(){return d},L:function(){return u},M:function(){return m},R:function(){return i},S:function(){return N},V:function(){return p},a:function(){return s},b:function(){return y},c:function(){return H},d:function(){return F},e:function(){return a},f:function(){return O},g:function(){return S},h:function(){return D},i:function(){return U},j:function(){return M},k:function(){return g},l:function(){return k},m:function(){return r},n:function(){return P},o:function(){return c},p:function(){return h},q:function(){return E},r:function(){return I},s:function(){return R},t:function(){return C},u:function(){return f},v:function(){return b},w:function(){return G},x:function(){return w},y:function(){return T},z:function(){return V}});var r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},o={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},c="production",i="REDACTED",a="loggedIn",u="loginOrRegister",s="loading",p="2.23.2",_=0,h="featureOverrideEnabled",E="HOMENAV_1723",l="NAVI_3",f='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',R="nav",I="edgecast_CDN",L={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},C={Link:"link",Button:"button",Image:"image"},N="nav_saved_dealer",A="by geolocation",m=7776e6,v="porsche.com",d="auth-iframe-header-navigation",T={Model:"model-variant",Level1:"level1-variant"};function O(e){return o[e]}function D(e,t){return e&&"object"==typeof e&&t in e}function U(e){return"string"==typeof e&&e.length>0}function S(e){return"string"==typeof e?e:""}function P(e){return e instanceof HTMLElement?e:null}function g(e){var t;null===(t=P(e))||void 0===t||t.focus()}function w(e){return e instanceof HTMLInputElement?e:null}function M(e){return 0===e.x&&0===e.y}function G(e){return e===s}function y(e){return!G(e)&&e!==u}function b(e,t){return e===a?t:e}function H(e){return Object.entries(e).map(function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))}).join("&")}function F(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join("---")}function k(e,t){return(void 0===t&&(t=!1),t)?e>=r.s:e>=r.l}function V(e){switch(e){case r.xxl:case r.xl:return 1920;case r.l:return 1366;case r.m:return 1024;case r.s:return 768;case r.xs:return 375;default:return 320}}}}]);