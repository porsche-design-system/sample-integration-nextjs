"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982,503],{6503:function(n,e,t){t.r(e),t.d(e,{A:function(){return s},B:function(){return M},C:function(){return N},D:function(){return c},E:function(){return m},F:function(){return H},G:function(){return _},H:function(){return C},I:function(){return I},J:function(){return V},K:function(){return D},L:function(){return f},M:function(){return b},N:function(){return B},O:function(){return W},R:function(){return l},V:function(){return p},a:function(){return d},b:function(){return h},c:function(){return u},d:function(){return a},e:function(){return S},f:function(){return j},g:function(){return z},h:function(){return U},i:function(){return F},j:function(){return T},k:function(){return G},l:function(){return k},m:function(){return g},n:function(){return y},o:function(){return r},p:function(){return E},q:function(){return A},r:function(){return v},s:function(){return O},t:function(){return x},u:function(){return i},v:function(){return P},w:function(){return K},x:function(){return L},y:function(){return q},z:function(){return R}});var r,o,i={PhraseId:"",Text:"",Link:"",Items:[]},c=i,u=null,a="preview",s="nav",m={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l="REDACTED",h="loggedIn",f="loginOrRegister",d="loading",p="2.16.0",g=0,k={accessibilityStatement:c,countryRecommender:u,furtherLinks:i,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};(o=r||(r={})).TEXT="Text",o.LINK="Link",o.PHRASEID="PhraseId",o.ITEMS="Items";var y,w="metafunctionalities",x="".concat(w,".finddealer"),b="".concat(w,".myporsche"),C="".concat(b,".logout"),M="".concat(b,".").concat(h),_="".concat(b,".").concat(f),I="".concat(b,".messages"),P="mainmenu",v="".concat(P,".crest"),E="".concat(P,".menu");function L(n){switch(n){case y.PRODUCTION:return"P";case y.PREVIEW:return"PP";default:return"K"}}!function(n){n.PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local"}(y||(y={}));var N,A,R,T="featureOverrideEnabled",H="HOMENAV_1590",D="HOMENAV_1599",O='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';!function(n){n.Link="link",n.Button="button",n.Image="image"}(N||(N={})),function(n){n.Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load"}(A||(A={})),function(n){n.metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",n.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.modelClick="PAGHomeNav_Model_Click"}(R||(R={}));var G={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},F=function(n){return"string"===typeof n&&n.length>0};function z(n){return"string"===typeof n?n:""}function S(n){return n instanceof HTMLElement?n:null}function V(n){return n instanceof HTMLInputElement?n:null}function K(n){return n.split(".").slice(0,-1).join(".")}function U(n){return 0===n.x&&0===n.y}function W(n){return n===d}function j(n){return!W(n)&&!function(n){return n===f}(n)}function B(n,e){return n===h?e:n}function q(n,e,t){return"".concat(e,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(t,"/auth")}},3982:function(n,e,t){t.r(e),t.d(e,{phn_myporsche_drawer:function(){return i}});var r=t(9422),o=t(6503),i=function(){function n(n){(0,r.r)(this,n),this.mobileMenuItemClick=(0,r.c)(this,"mobileMenuItemClick",6),this.unreadMessagesCount=0}return n.prototype.showDrawer=function(n){this.mobileMenuItemClick.emit({isKeyboardClick:(0,o.h)(n),phraseId:o.M})},n.prototype.render=function(){var n=this;return(0,r.h)("phn-button-extended",{class:"myporsche-drawer-trigger",icon:"arrow-head-right",phraseId:o.M,onClick:function(e){return n.showDrawer(e)}},this.unreadMessagesCount>0?(0,r.h)("span",{class:"myporsche-unread-messages-indicator"}):null,(0,r.h)("phn-p-icon",{color:"inherit",name:"user",size:"small"}),(0,r.h)("span",{class:"myporsche-drawer-trigger-label"},this.myPorscheText,(0,r.h)("phn-p-text",{class:"login-status fs-exclude",color:"inherit",size:"inherit",ellipsis:"true",align:"left"},this.loginStatus)))},n}();i.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-myporsche-drawer-h{display:block}.sc-phn-myporsche-drawer-h .login-status.sc-phn-myporsche-drawer{margin-top:-0.25rem;font-size:0.75rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-drawer-h .login-status.sc-phn-myporsche-drawer{margin-top:-0.1875rem}}@media (min-width: 1300px){.sc-phn-myporsche-drawer-h .login-status.sc-phn-myporsche-drawer{margin-top:unset}}.sc-phn-myporsche-drawer-h .myporsche-drawer-trigger.sc-phn-myporsche-drawer:focus-within{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:currentColor}.sc-phn-myporsche-drawer-h .myporsche-drawer-trigger-label.sc-phn-myporsche-drawer{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;padding-left:0.25rem}.sc-phn-myporsche-drawer-h .myporsche-unread-messages-indicator.sc-phn-myporsche-drawer{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;left:1.0625rem;top:0.0625rem}"}}]);