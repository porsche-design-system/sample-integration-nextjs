"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8866,7379],{8866:function(t,e,n){n.r(e),n.d(e,{a:function(){return l},m:function(){return h}});var r=n(7379),o=function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function i(t){try{u(r.next(t))}catch(t){c(t)}}function s(t){try{u(r.throw(t))}catch(t){c(t)}}function u(t){var e;t.done?o(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(i,s)}u((r=r.apply(t,e||[])).next())})},c=function(t,e){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(s){return function(u){return function(s){if(n)throw TypeError("Generator is already executing.");for(;c&&(c=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},i={},s={};function u(t){var e=(0,r.t)(t.target);if(null===e)throw Error("".concat(t.type," event target is null"));var n=e.dataset.phnAmId;null!=n&&p(n,e)}var a=function(t,e){var n,r,o,c=Math.floor(1e7*Math.random());t.classList.add(e.className),t.dataset.phnAmId=c.toString();var s=new Promise(function(i,s){n=i,r=s,o=setTimeout(function(){console.warn("Animation with className ".concat(e.className," didn't finish after ").concat(1e3,"ms. Forcefully finishing animation and continuing with the rest of the sequence.")),p(String(c),t)},1e3)});return i[c]={animation:e,resolve:n,reject:r,promise:s,timeout:o},s};function p(t,e){var n=i[t],r=n.resolve;clearTimeout(n.timeout),delete i[t],delete e.dataset.phnAmId,r()}function h(t,e){return{steps:t.map(function(t){return t.map(function(t){return Object.assign(Object.assign({},e),t)})}),currentStepIndex:0,running:!1}}var l={initialize:function(){(0,r.B)().addEventListener("transitionend",u),(0,r.B)().addEventListener("animationend",u)},play:function(t){return o(this,void 0,void 0,function(){var e;return c(this,function(n){return void 0===(e=s[t])?[2,new Promise(function(e,n){return n(Error("Sequence ".concat(t," has not been registered")))})]:(e.running||(e.promise=new Promise(function(t,n){e.resolve=function(){e.running=!1,t()},e.reject=function(t){e.running=!1,n(t)},e.running=!0,function t(e){return o(this,void 0,void 0,function(){var n,i,s,u,p,h,l;return c(this,function(f){switch(f.label){case 0:if(e.currentStepIndex>=e.steps.length){var _;return e.currentStepIndex=0,null===(_=e.resolve)||void 0===_||_.call(e,null),e.promise=void 0,[2]}for(u=0,i=e.steps[e.currentStepIndex],s=[],p=i;u<p.length;u++)h=p[u],s.push(function(t){var e=t.onStart,n=t.onEnd,i=t.animation,s=t.elementSelector;return o(this,void 0,void 0,function(){var t,u,p,h,l,f,_;return c(this,function(d){switch(d.label){case 0:if(!e||(t=e(),!(0,r.q)(t)))return[3,2];return[4,t];case 1:d.sent(),d.label=2;case 2:for(h=0,u=Array.from((0,r.B)().querySelectorAll(s)),p=[],l=u;h<l.length;h++)f=l[h],_=(function(t){return function(e,n){return o(this,void 0,void 0,function(){var o,i,s,u;return c(this,function(c){switch(c.label){case 0:if(o=n.cleanUpBeforeAnimation,i=n.cleanUpAfterAnimation,s=t(e,n),"function"!=typeof o||(u=o(e),!(0,r.q)(u)))return[3,2];return[4,u];case 1:c.sent(),c.label=2;case 2:return[4,s];case 3:if(c.sent(),"function"!=typeof i||(u=i(e),!(0,r.q)(u)))return[3,5];return[4,u];case 4:c.sent(),c.label=5;case 5:return!1!==i&&e.classList.remove(n.className),[2]}})})}})(a)(f,i),p.push(_);return[4,Promise.all(p)];case 3:if(d.sent(),!n||(t=n(),!(0,r.q)(t)))return[3,5];return[4,t];case 4:d.sent(),d.label=5;case 5:return[2]}})})}(h));f.label=1;case 1:return f.trys.push([1,3,,4]),[4,Promise.all(s)];case 2:return f.sent(),[3,4];case 3:return l=f.sent(),null===(n=e.reject)||void 0===n||n.call(e,l),[2];case 4:return e.currentStepIndex+=1,setTimeout(function(){return t(e)},0),[2]}})})}(e)})),[2,e.promise])})})},isPlaying:function(t){var e=s[t];if(void 0===e)throw Error("Sequence ".concat(t," has not been registered"));return void 0!==e.promise},register:function(t,e){s[t]=e},reset:function(){Object.keys(s).forEach(function(t){return delete s[t]})}}},7379:function(t,e,n){n.r(e),n.d(e,{A:function(){return N},B:function(){return O},C:function(){return I},D:function(){return f},E:function(){return tt},F:function(){return r},G:function(){return _},H:function(){return W},I:function(){return F},J:function(){return U},K:function(){return J},L:function(){return h},M:function(){return v},N:function(){return u},O:function(){return X},P:function(){return L},Q:function(){return B},R:function(){return y},S:function(){return d},T:function(){return q},U:function(){return m},V:function(){return l},W:function(){return E},a:function(){return A},b:function(){return Y},c:function(){return R},d:function(){return p},e:function(){return T},f:function(){return s},g:function(){return D},h:function(){return z},i:function(){return C},j:function(){return Z},k:function(){return Q},l:function(){return G},m:function(){return x},n:function(){return P},o:function(){return c},p:function(){return H},q:function(){return V},r:function(){return S},s:function(){return j},t:function(){return b},u:function(){return w},v:function(){return a},w:function(){return k},x:function(){return $},y:function(){return K},z:function(){return M}});var r,o,c={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},i={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},s={hero:"hero",navbar:"navbar",transparent:"transparent"},u={light:"light",dark:"dark"},a="production",p="loggedIn",h="loginOrRegister",l="3.3.0",f=0,_='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',d="nav_saved_dealer",E="by geolocation",m="by market",v=7776e6,I="porsche.com",R="auth-iframe-header-navigation",L={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},T="",N={shop:"shop",pcom:"pcom",default:"default"};(o=r||(r={})).startOpening="startOpening",o.startClosing="startClosing",o.finishOpening="finishOpening",o.finishClosing="finishClosing";var g=null;function O(){if(null===g)throw Error("No root element present");return g}function S(t){g=t}function U(t){return O().querySelector(t)}function A(t){return i[t]}function w(t,e){return t&&"object"==typeof t&&e in t}function C(t){return"string"==typeof t&&t.length>0}function D(t){return"string"==typeof t?t:""}function b(t){return t instanceof HTMLElement?t:null}function P(t){var e;null===(e=b(t))||void 0===e||e.focus()}function y(t){return t instanceof HTMLInputElement?t:null}function x(t){return 0===t.x&&0===t.y}function F(t){return"loading"!==t&&t!==h}function M(t,e){return t===p?e:t}function Y(t){return Object.entries(t).filter(function(t){return void 0!==t[1]}).map(function(t){var e=t[0],n=t[1];return[e,C(n)?n:n.toString()]}).map(function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n))}).join("&")}function k(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.join("---")}function G(t){return t>=c.s}function B(t){switch(t){case c.xxl:case c.xl:return 1920;case c.l:return 1360;case c.m:return 1024;case c.s:return 760;case c.xs:return 390;default:return 320}}function j(t){return Object.keys(N).includes(t)?t:N.default}function H(t,e){if((Object.keys(s).includes(t)?t:s.navbar)===s.navbar)return s.navbar;var n=Object.keys(u).includes(e)?e:u.light;return"".concat(t,"_").concat(n)}function V(t){return!!t&&"function"==typeof t.then&&"Promise"===t[Symbol.toStringTag]}function q(t,e){return"".concat(t).concat(t.includes("?")?"&":"?").concat(Y(e))}function z(t,e){for(var n=t,r=[],o=function(t){if(null==(n=n.children.find(function(e){return e.id===t})))return"break";r.push(t)},c=0;c<e.length&&"break"!==o(e[c]);c++);return r}function Z(t,e){return["vehiclePurchase","shop","experience","services"].includes(e)&&void 0!==t[e]?t[e]:null}function Q(t){for(var e=[t[0]],n=1;n<t.length;n++)e.push("".concat(e[n-1],"/").concat(t[n]));return e}function J(t){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(t)}function X(t){return["718","911","macan"].includes(t.toLowerCase())}var W=function(t,e){return e===s.transparent||e===s.hero?t:"light"};function K(t){return t.replace(/([A-Z])/g,function(t){return"-".concat(t[0].toLowerCase())})}function $(t,e,n){return void 0===n&&(n=function(t,e){return t[e]}),Object.entries(e).reduce(function(e,r){var o=r[0],c=r[1],i=n(t,o);return"string"==typeof i?e[o]=i:e[o]=c,e},{})}var tt=function(t,e,n){var r=n.bubbles,o=n.detail,c=n.composed,i=new CustomEvent(e,{detail:o,bubbles:r,cancelable:n.cancelable,composed:c}),s=U(t);null==s||s.dispatchEvent(i)}}}]);