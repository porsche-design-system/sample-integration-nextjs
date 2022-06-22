"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594,171,503,846],{3171:function(e,n,t){t.r(n),t.d(n,{C:function(){return a},I:function(){return m},L:function(){return d},P:function(){return u},V:function(){return s},a:function(){return g},b:function(){return f},c:function(){return l},s:function(){return o}});var r=t(1846),i=t(6503);function o(e){if(!(0,i.i)(e))throw new Error("empty locale passed");var n=e.substring(0,e.indexOf("-")).toLowerCase(),t=e.substring(e.indexOf("-")+1);if(-1===Object.values(i.k).indexOf(t)&&(t=t.toUpperCase()),!(0,i.i)(n)||!(0,i.i)(t))throw new Error("invalid locale ".concat(e," passed"));return{language:n,country:t in i.k?i.k[t]:t}}var a,c,s,u,m,l,f,d=function(){function e(e){this.isSet=!1,(0,i.i)(e)&&this.setLocale(e)}return e.prototype.setLocale=function(e){void 0===e&&(e="");try{var n=o(e),t=n.language,r=n.country;this.language=t,this.country=r,this.isSet=!0}catch(e){this.language="",this.country="",this.isSet=!1}return this},e.prototype.toString=function(){return(0,i.i)(this.language)&&(0,i.i)(this.country)?"".concat(this.language,"-").concat(this.country):""},e.prototype.toHeaderString=function(){return this.toString().replace("-","_")},e}(),g=(0,r.c)({applicationId:i.A,locale:new d,w:window,environment:i.d,loginStatus:!1,userId:""});(c=a||(a={})).EventAction="eventAction",c.ApplicationId="applicationId",c.Language="language",c.Country="country",c.Timestamp="timestamp",c.Environment="environment",c.Server="server",function(e){e.LoginStatus="loginStatus",e.DeviceBrowserHeight="deviceBrowserHeight",e.DeviceBrowserWidth="deviceBrowserWidth",e.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",e.DeviceBrowserOrientation="deviceBrowserOrientation",e.DeviceType="deviceType"}(s||(s={})),function(e){e.PageId="pageId",e.PageName="pageName"}(u||(u={})),function(e){e.UserId="userId"}(m||(m={})),function(e){e.ModelRangeCode="modelRangeCode",e.ModelRangeName="modelRangeName",e.ModelSeriesCode="modelSeriesCode",e.ModelSeriesName="modelSeriesName",e.ModelName="modelName",e.Bodytype="bodytype"}(l||(l={})),function(e){e.ClickElementType="clickElementType",e.ClickElementId="clickElementId",e.ClickElementName="clickElementName",e.TargetUrl="targetUrl"}(f||(f={}))},6503:function(e,n,t){t.r(n),t.d(n,{A:function(){return u},B:function(){return L},C:function(){return N},D:function(){return a},E:function(){return m},F:function(){return B},G:function(){return w},H:function(){return b},I:function(){return T},J:function(){return F},K:function(){return R},L:function(){return d},M:function(){return P},N:function(){return K},O:function(){return z},R:function(){return l},V:function(){return h},a:function(){return g},b:function(){return f},c:function(){return c},d:function(){return s},e:function(){return H},f:function(){return V},g:function(){return j},h:function(){return W},i:function(){return G},j:function(){return S},k:function(){return D},l:function(){return I},m:function(){return p},n:function(){return y},o:function(){return r},p:function(){return E},q:function(){return _},r:function(){return C},s:function(){return A},t:function(){return v},u:function(){return o},v:function(){return x},w:function(){return U},x:function(){return O},y:function(){return Z},z:function(){return M}});var r,i,o={PhraseId:"",Text:"",Link:"",Items:[]},a=o,c=null,s="preview",u="nav",m={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l="REDACTED",f="loggedIn",d="loginOrRegister",g="loading",h="2.16.0",p=0,I={accessibilityStatement:a,countryRecommender:c,furtherLinks:o,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};(i=r||(r={})).TEXT="Text",i.LINK="Link",i.PHRASEID="PhraseId",i.ITEMS="Items";var y,k="metafunctionalities",v="".concat(k,".finddealer"),P="".concat(k,".myporsche"),b="".concat(P,".logout"),L="".concat(P,".").concat(f),w="".concat(P,".").concat(d),T="".concat(P,".messages"),x="mainmenu",C="".concat(x,".crest"),E="".concat(x,".menu");function O(e){switch(e){case y.PRODUCTION:return"P";case y.PREVIEW:return"PP";default:return"K"}}!function(e){e.PRODUCTION="production",e.PREVIEW="preview",e.TEST="test",e.LOCAL="local"}(y||(y={}));var N,_,M,S="featureOverrideEnabled",B="HOMENAV_1590",R="HOMENAV_1599",A='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';!function(e){e.Link="link",e.Button="button",e.Image="image"}(N||(N={})),function(e){e.Change="PAGHomeNav_CountryRecommenderChange_Click",e.Close="PAGHomeNav_CountryRecommenderClose_Click",e.Load="PAGHomeNav_CountryRecommender_Load"}(_||(_={})),function(e){e.metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.navigationClick="PAGHomeNav_Navigation_Click",e.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.modelClick="PAGHomeNav_Model_Click"}(M||(M={}));var D={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},G=function(e){return"string"===typeof e&&e.length>0};function j(e){return"string"===typeof e?e:""}function H(e){return e instanceof HTMLElement?e:null}function F(e){return e instanceof HTMLInputElement?e:null}function U(e){return e.split(".").slice(0,-1).join(".")}function W(e){return 0===e.x&&0===e.y}function z(e){return e===g}function V(e){return!z(e)&&!function(e){return e===d}(e)}function K(e,n){return e===f?n:e}function Z(e,n,t){return"".concat(n,"/as/authorization.oauth2?&client_id=").concat(e,"&response_type=code&redirect_uri=").concat(t,"/auth")}},1846:function(e,n,t){t.r(n),t.d(n,{c:function(){return c}});var r=t(9422),i=function(e){return!("isConnected"in e)||e.isConnected},o=function(e,n){var t;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];t&&clearTimeout(t),t=setTimeout((function(){t=0,e.apply(void 0,r)}),n)}}((function(e){for(var n=0,t=e.keys();n<t.length;n++){var r=t[n];e.set(r,e.get(r).filter(i))}}),2e3),a=function(e,n){var t=e.indexOf(n);t>=0&&(e[t]=e[e.length-1],e.length--)},c=function(e,n){var t=function(e,n){void 0===n&&(n=function(e,n){return e!==n});var t=new Map(Object.entries(null!==e&&void 0!==e?e:{})),r={dispose:[],get:[],set:[],reset:[]},i=function(){t=new Map(Object.entries(null!==e&&void 0!==e?e:{})),r.reset.forEach((function(e){return e()}))},o=function(e){return r.get.forEach((function(n){return n(e)})),t.get(e)},c=function(e,i){var o=t.get(e);n(i,o,e)&&(t.set(e,i),r.set.forEach((function(n){return n(e,i,o)})))},s="undefined"===typeof Proxy?{}:new Proxy(e,{get:function(e,n){return o(n)},ownKeys:function(e){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,n){return t.has(n)},set:function(e,n,t){return c(n,t),!0}}),u=function(e,n){return r[e].push(n),function(){a(r[e],n)}};return{state:s,get:o,set:c,on:u,onChange:function(n,t){var r=u("set",(function(e,r){e===n&&t(r)})),i=u("reset",(function(){return t(e[n])}));return function(){r(),i()}},use:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.reduce((function(e,n){return n.set&&e.push(u("set",n.set)),n.get&&e.push(u("get",n.get)),n.reset&&e.push(u("reset",n.reset)),n.dispose&&e.push(u("dispose",n.dispose)),e}),[]);return function(){return t.forEach((function(e){return e()}))}},dispose:function(){r.dispose.forEach((function(e){return e()})),i()},reset:i,forceUpdate:function(e){var n=t.get(e);r.set.forEach((function(t){return t(e,n,n)}))}}}(e,n);return t.use(function(){if("function"!==typeof r.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(n){var t=(0,r.a)();t&&function(e,n,t){var r=e.get(n);r?r.includes(t)||r.push(t):e.set(n,[t])}(e,n,t)},set:function(n){var t=e.get(n);t&&e.set(n,t.filter(r.f)),o(e)},reset:function(){e.forEach((function(e){return e.forEach(r.f)})),o(e)}}}()),t}},594:function(e,n,t){t.r(n),t.d(n,{a:function(){return c},m:function(){return a}});var r=t(3171),i=t(6503);new r.L("de-DE");var o={menuButton:{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"myporsche-menubutton-link",Items:[]},loginOrRegister:{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Text:"Login / Register",Link:"",Items:[]},login:{PhraseId:"metafunctionalities.myporsche.login",Text:"Login",Link:"myporsche-login-link",Items:[]},loggedIn:{PhraseId:"metafunctionalities.myporsche.loggedIn",Text:"Logged In",Link:"",Items:[]},logout:{PhraseId:"metafunctionalities.myporsche.logout",Text:"Log Out",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout",Items:[]},more:{PhraseId:"metafunctionalities.myporsche.more",Text:"Learn more",Link:"fake link",Items:[]},signup:{PhraseId:"metafunctionalities.myporsche.signup",Text:"Register now,",Link:"www.test-signupMyPorsche.com",Items:[]},signupText:{PhraseId:"metafunctionalities.myporsche.signupText",Text:"now now now now now now now now now now now now now now now now. please.....",Link:"",Items:[]},messages:{PhraseId:"metafunctionalities.myporsche.messages",Text:"Messages",Link:"https://inbox.porsche.com/gb/en_GB/messages",Items:[]},links:[{PhraseId:"metafunctionalities.myporsche.overview",Text:"Overview",Link:"https://my.porsche.com/core/gb/en_GB/home",Items:[]},{PhraseId:"metafunctionalities.myporsche.accountadministration",Text:"Personal Data",Link:"https://profile.porsche.com/myprofile/gb/en_GB/personal-data",Items:[]},{PhraseId:"metafunctionalities.myporsche.contact",Text:"Contact & Support",Link:"https://my.porsche.com/core/gb/en_GB/contact",Items:[]}]},a={PhraseId:"mainmenu.dealer",menuButton:{PhraseId:"mainmenu.dealer.menuButton",Text:"Dealers",Link:"",Items:[]},dealerSearch:{PhraseId:"mainmenu.dealer.dealerSearch",Text:"Find a dealer",Link:"",Items:[]},search:{PhraseId:"mainmenu.dealer.search",Text:"Search",Link:"",Items:[]},or:{PhraseId:"mainmenu.dealer.or",Text:"Or",Link:"",Items:[]},location:{PhraseId:"mainmenu.dealer.location",Text:"City or ZIP",Link:"",Items:[]},finderCars:{PhraseId:"mainmenu.dealer.finderCars",Text:"H\xe4ndlerfahrzeuge anzeigen",Link:"",Items:[]},bookService:{PhraseId:"mainmenu.dealer.bookService",Text:"Fahrzeugservice buchen",Link:"",Items:[]},backButton:{PhraseId:"mainmenu.dealer.backButton",Text:"Zur\xfcck",Link:"",Items:[]},geolocation:{PhraseId:"mainmenu.dealer.geolocation",Text:"Use current location",Link:"",Items:[]}};Object.assign(Object.assign({},i.l),{seriesList:[Object.assign(Object.assign({},i.E),{Name:"718 DE",Image:"718 DE"})],myPorsche:Object.assign({},o),dealer:a,metafunctionalities:[{PhraseId:"metafunctionalities.finddealer",Text:"Find a Centre",Link:"https://www.porsche.com/uk/dealersearch/",Items:[]},{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"https://connect-portal.porsche.com/core/gb/en_GB/home",Items:[{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Id:"metafunctionalities.myporsche.loginOrRegister",Text:"Login or register",Link:"",Items:[]},{PhraseId:"metafunctionalities.myporsche.loggedIn",Id:"metafunctionalities.myporsche.loggedIn",Text:"Logged in",Link:"",Items:[]},{PhraseId:"metafunctionalities.myporsche.logout",Id:"metafunctionalities.myporsche.logout",Text:"Logout",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout",Items:[]}]}]}),Object.assign(Object.assign({},i.l),{seriesList:[Object.assign(Object.assign({},i.E),{Name:"718 IT",Image:"718 IT"})],myPorsche:Object.assign({},o),dealer:a,countryRecommender:{statement:{Text:"You are currently viewing content for:",PhraseId:"",Link:"",Items:[]},region:{Text:"Germany",PhraseId:"",Link:"",Items:[]},language:{Text:"German",PhraseId:"",Link:"",Items:[]},change:{Text:"Change preference",PhraseId:"",Link:"",Items:[]}}}),Object.assign(Object.assign({},i.l),{accessibilityStatement:{PhraseId:"mainmenu.accessibilitystatement",Text:"Accessibility Statement",Link:"https://preview.ppn.porsche.com/usa/accessibilitystatement/"}}),Object.assign(Object.assign({},i.l),{metafunctionalities:[{PhraseId:"metafunctionalities.finddealer",Text:"Find a Centre",Link:"https://www.porsche.com/uk/dealersearch/"},{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"https://connect-portal.porsche.com/core/gb/en_GB/home",Items:[{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Id:"metafunctionalities.myporsche.loginOrRegister",Text:"Login or register"},{PhraseId:"metafunctionalities.myporsche.loggedIn",Id:"metafunctionalities.myporsche.loggedIn",Text:"Logged in"},{PhraseId:"metafunctionalities.myporsche.logout",Id:"metafunctionalities.myporsche.logout",Text:"Logout",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout"}]}]});var c=[{id:"14f3b8a2-b78d-4f96-b7b5-7b1b47b23542",name:"Niederlassungen Stuttgart",address:{street:"Porschestr. 1",postalCode:"70000",city:"Stuttgart",state:"",countryCode:"DE"},contactDetails:{phoneNumber:"+49-711-911-12345",emailAddress:"none@none.com",homePage:"www.iamahome.page"},market:""},{id:"6a6d8e8c-5b04-4a4b-a119-66021b528788",name:"Porsche Niederlassung Stuttgart GmbH",address:{street:"Porscheplatz 9",postalCode:"70435",city:"Stuttgart",state:"BW",countryCode:"DE"},contactDetails:{phoneNumber:"+49 711 91126220",emailAddress:"info@porsche-stuttgart.de",homePage:"www.iamalsoahome.page"},market:"Germany"}]}}]);