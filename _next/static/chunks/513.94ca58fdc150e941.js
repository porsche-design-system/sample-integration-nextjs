"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513,503,846,667,606],{6503:function(n,t,e){e.r(t),e.d(t,{A:function(){return f},B:function(){return E},C:function(){return T},D:function(){return i},E:function(){return s},F:function(){return R},G:function(){return C},H:function(){return w},I:function(){return _},J:function(){return U},K:function(){return O},L:function(){return m},M:function(){return x},N:function(){return B},O:function(){return W},R:function(){return l},V:function(){return p},a:function(){return h},b:function(){return d},c:function(){return c},d:function(){return a},e:function(){return K},f:function(){return z},g:function(){return F},h:function(){return j},i:function(){return S},j:function(){return H},k:function(){return G},l:function(){return k},m:function(){return g},n:function(){return y},o:function(){return r},p:function(){return I},q:function(){return A},r:function(){return P},s:function(){return D},t:function(){return b},u:function(){return u},v:function(){return M},w:function(){return V},x:function(){return L},y:function(){return X},z:function(){return N}});var r,o,u={PhraseId:"",Text:"",Link:"",Items:[]},i=u,c=null,a="preview",f="nav",s={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l="REDACTED",d="loggedIn",m="loginOrRegister",h="loading",p="2.16.0",g=0,k={accessibilityStatement:i,countryRecommender:c,furtherLinks:u,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};(o=r||(r={})).TEXT="Text",o.LINK="Link",o.PHRASEID="PhraseId",o.ITEMS="Items";var y,v="metafunctionalities",b="".concat(v,".finddealer"),x="".concat(v,".myporsche"),w="".concat(x,".logout"),E="".concat(x,".").concat(d),C="".concat(x,".").concat(m),_="".concat(x,".messages"),M="mainmenu",P="".concat(M,".crest"),I="".concat(M,".menu");function L(n){switch(n){case y.PRODUCTION:return"P";case y.PREVIEW:return"PP";default:return"K"}}!function(n){n.PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local"}(y||(y={}));var T,A,N,H="featureOverrideEnabled",R="HOMENAV_1590",O="HOMENAV_1599",D='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';!function(n){n.Link="link",n.Button="button",n.Image="image"}(T||(T={})),function(n){n.Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load"}(A||(A={})),function(n){n.metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",n.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.modelClick="PAGHomeNav_Model_Click"}(N||(N={}));var G={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},S=function(n){return"string"===typeof n&&n.length>0};function F(n){return"string"===typeof n?n:""}function K(n){return n instanceof HTMLElement?n:null}function U(n){return n instanceof HTMLInputElement?n:null}function V(n){return n.split(".").slice(0,-1).join(".")}function j(n){return 0===n.x&&0===n.y}function W(n){return n===h}function z(n){return!W(n)&&!function(n){return n===m}(n)}function B(n,t){return n===d?t:n}function X(n,t,e){return"".concat(t,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(e,"/auth")}},1846:function(n,t,e){e.r(t),e.d(t,{c:function(){return c}});var r=e(9422),o=function(n){return!("isConnected"in n)||n.isConnected},u=function(n,t){var e;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];e&&clearTimeout(e),e=setTimeout((function(){e=0,n.apply(void 0,r)}),t)}}((function(n){for(var t=0,e=n.keys();t<e.length;t++){var r=e[t];n.set(r,n.get(r).filter(o))}}),2e3),i=function(n,t){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.length--)},c=function(n,t){var e=function(n,t){void 0===t&&(t=function(n,t){return n!==t});var e=new Map(Object.entries(null!==n&&void 0!==n?n:{})),r={dispose:[],get:[],set:[],reset:[]},o=function(){e=new Map(Object.entries(null!==n&&void 0!==n?n:{})),r.reset.forEach((function(n){return n()}))},u=function(n){return r.get.forEach((function(t){return t(n)})),e.get(n)},c=function(n,o){var u=e.get(n);t(o,u,n)&&(e.set(n,o),r.set.forEach((function(t){return t(n,o,u)})))},a="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(n,t){return u(t)},ownKeys:function(n){return Array.from(e.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(n,t){return e.has(t)},set:function(n,t,e){return c(t,e),!0}}),f=function(n,t){return r[n].push(t),function(){i(r[n],t)}};return{state:a,get:u,set:c,on:f,onChange:function(t,e){var r=f("set",(function(n,r){n===t&&e(r)})),o=f("reset",(function(){return e(n[t])}));return function(){r(),o()}},use:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.reduce((function(n,t){return t.set&&n.push(f("set",t.set)),t.get&&n.push(f("get",t.get)),t.reset&&n.push(f("reset",t.reset)),t.dispose&&n.push(f("dispose",t.dispose)),n}),[]);return function(){return e.forEach((function(n){return n()}))}},dispose:function(){r.dispose.forEach((function(n){return n()})),o()},reset:o,forceUpdate:function(n){var t=e.get(n);r.set.forEach((function(e){return e(n,t,t)}))}}}(n,t);return e.use(function(){if("function"!==typeof r.a)return{};var n=new Map;return{dispose:function(){return n.clear()},get:function(t){var e=(0,r.a)();e&&function(n,t,e){var r=n.get(t);r?r.includes(e)||r.push(e):n.set(t,[e])}(n,t,e)},set:function(t){var e=n.get(t);e&&n.set(t,e.filter(r.f)),u(n)},reset:function(){n.forEach((function(n){return n.forEach(r.f)})),u(n)}}}()),e}},9667:function(n,t,e){e.r(t),e.d(t,{f:function(){return u},g:function(){return i},h:function(){return o}});var r=e(6503);function o(n){return Array.isArray(n[r.o.ITEMS])&&n[r.o.ITEMS].some((function(n){return(0,r.i)(n[r.o.LINK])}))}function u(n,t){return n.find((function(n){return n[r.o.PHRASEID]===t}))}function i(n,t,e){var r;return null===(r=u(n,t))||void 0===r?void 0:r[e]}},9606:function(n,t,e){e.r(t),e.d(t,{n:function(){return u}});var r=e(1846),o=e(6503),u=(0,r.c)(o.l)},7513:function(n,t,e){e.r(t),e.d(t,{phn_myporsche_items_drawer:function(){return c}});var r=e(9422),o=e(9667),u=e(9606),i=e(6503),c=(e(1846),function(){function n(n){(0,r.r)(this,n)}return n.prototype.render=function(){var n=u.n.state.metafunctionalities,t=(0,o.g)(n,i.M,i.o.TEXT);return(0,r.h)(r.H,null,(0,r.h)("phn-headline",{text:(0,i.g)(t),class:"drawer-headline"}),(0,r.h)("phn-myporsche-items",{breakpoint:this.breakpoint}))},n}());c.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-myporsche-items-drawer-h{padding-bottom:3.125rem}"}}]);