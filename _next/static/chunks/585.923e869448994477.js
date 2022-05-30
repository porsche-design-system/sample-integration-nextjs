"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585,171,503,481,846],{3171:function(n,t,e){e.r(t),e.d(t,{C:function(){return u},I:function(){return f},L:function(){return p},P:function(){return s},V:function(){return a},a:function(){return v},b:function(){return d},c:function(){return l},s:function(){return o}});var i=e(1846),r=e(6503);function o(n){if(!(0,r.i)(n))throw new Error("empty locale passed");var t=n.substring(0,n.indexOf("-")).toLowerCase(),e=n.substring(n.indexOf("-")+1);if(-1===Object.values(r.k).indexOf(e)&&(e=e.toUpperCase()),!(0,r.i)(t)||!(0,r.i)(e))throw new Error("invalid locale ".concat(n," passed"));return{language:t,country:e in r.k?r.k[e]:e}}var u,c,a,s,f,l,d,p=function(){function n(n){this.isSet=!1,(0,r.i)(n)&&this.setLocale(n)}return n.prototype.setLocale=function(n){void 0===n&&(n="");try{var t=o(n),e=t.language,i=t.country;this.language=e,this.country=i,this.isSet=!0}catch(n){this.language="",this.country="",this.isSet=!1}return this},n.prototype.toString=function(){return(0,r.i)(this.language)&&(0,r.i)(this.country)?"".concat(this.language,"-").concat(this.country):""},n.prototype.toHeaderString=function(){return this.toString().replace("-","_")},n}(),v=(0,i.c)({applicationId:r.A,locale:new p,w:window,environment:r.d,loginStatus:!1,userId:""});(c=u||(u={})).EventAction="eventAction",c.ApplicationId="applicationId",c.Language="language",c.Country="country",c.Timestamp="timestamp",c.Environment="environment",c.Server="server",function(n){n.LoginStatus="loginStatus",n.DeviceBrowserHeight="deviceBrowserHeight",n.DeviceBrowserWidth="deviceBrowserWidth",n.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",n.DeviceBrowserOrientation="deviceBrowserOrientation",n.DeviceType="deviceType"}(a||(a={})),function(n){n.PageId="pageId",n.PageName="pageName"}(s||(s={})),function(n){n.UserId="userId"}(f||(f={})),function(n){n.ModelRangeCode="modelRangeCode",n.ModelRangeName="modelRangeName",n.ModelSeriesCode="modelSeriesCode",n.ModelSeriesName="modelSeriesName",n.ModelName="modelName",n.Bodytype="bodytype"}(l||(l={})),function(n){n.ClickElementType="clickElementType",n.ClickElementId="clickElementId",n.ClickElementName="clickElementName",n.TargetUrl="targetUrl"}(d||(d={}))},6503:function(n,t,e){e.r(t),e.d(t,{A:function(){return s},B:function(){return P},C:function(){return S},D:function(){return u},E:function(){return f},F:function(){return _},G:function(){return k},H:function(){return w},I:function(){return x},J:function(){return U},K:function(){return A},L:function(){return p},M:function(){return I},N:function(){return z},O:function(){return j},R:function(){return l},V:function(){return g},a:function(){return v},b:function(){return d},c:function(){return c},d:function(){return a},e:function(){return W},f:function(){return K},g:function(){return V},h:function(){return G},i:function(){return R},j:function(){return T},k:function(){return H},l:function(){return m},m:function(){return h},n:function(){return y},o:function(){return i},p:function(){return O},q:function(){return b},r:function(){return L},s:function(){return D},t:function(){return C},u:function(){return o},v:function(){return N},w:function(){return F},x:function(){return M},y:function(){return q},z:function(){return B}});var i,r,o={PhraseId:"",Text:"",Link:"",Items:[]},u=o,c=null,a="preview",s="nav",f={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l="REDACTED",d="loggedIn",p="loginOrRegister",v="loading",g="2.16.0",h=0,m={accessibilityStatement:u,countryRecommender:c,furtherLinks:o,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};(r=i||(i={})).TEXT="Text",r.LINK="Link",r.PHRASEID="PhraseId",r.ITEMS="Items";var y,E="metafunctionalities",C="".concat(E,".finddealer"),I="".concat(E,".myporsche"),w="".concat(I,".logout"),P="".concat(I,".").concat(d),k="".concat(I,".").concat(p),x="".concat(I,".messages"),N="mainmenu",L="".concat(N,".crest"),O="".concat(N,".menu");function M(n){switch(n){case y.PRODUCTION:return"P";case y.PREVIEW:return"PP";default:return"K"}}!function(n){n.PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local"}(y||(y={}));var S,b,B,T="featureOverrideEnabled",_="HOMENAV_1590",A="HOMENAV_1599",D='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';!function(n){n.Link="link",n.Button="button",n.Image="image"}(S||(S={})),function(n){n.Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load"}(b||(b={})),function(n){n.metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",n.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.modelClick="PAGHomeNav_Model_Click"}(B||(B={}));var H={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},R=function(n){return"string"===typeof n&&n.length>0};function V(n){return"string"===typeof n?n:""}function W(n){return n instanceof HTMLElement?n:null}function U(n){return n instanceof HTMLInputElement?n:null}function F(n){return n.split(".").slice(0,-1).join(".")}function G(n){return 0===n.x&&0===n.y}function j(n){return n===v}function K(n){return!j(n)&&!function(n){return n===p}(n)}function z(n,t){return n===d?t:n}function q(n,t,e){return"".concat(t,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(e,"/auth")}},4481:function(n,t,e){e.r(t),e.d(t,{b:function(){return i}});var i={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},1846:function(n,t,e){e.r(t),e.d(t,{c:function(){return c}});var i=e(9422),r=function(n){return!("isConnected"in n)||n.isConnected},o=function(n,t){var e;return function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];e&&clearTimeout(e),e=setTimeout((function(){e=0,n.apply(void 0,i)}),t)}}((function(n){for(var t=0,e=n.keys();t<e.length;t++){var i=e[t];n.set(i,n.get(i).filter(r))}}),2e3),u=function(n,t){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.length--)},c=function(n,t){var e=function(n,t){void 0===t&&(t=function(n,t){return n!==t});var e=new Map(Object.entries(null!==n&&void 0!==n?n:{})),i={dispose:[],get:[],set:[],reset:[]},r=function(){e=new Map(Object.entries(null!==n&&void 0!==n?n:{})),i.reset.forEach((function(n){return n()}))},o=function(n){return i.get.forEach((function(t){return t(n)})),e.get(n)},c=function(n,r){var o=e.get(n);t(r,o,n)&&(e.set(n,r),i.set.forEach((function(t){return t(n,r,o)})))},a="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(n,t){return o(t)},ownKeys:function(n){return Array.from(e.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(n,t){return e.has(t)},set:function(n,t,e){return c(t,e),!0}}),s=function(n,t){return i[n].push(t),function(){u(i[n],t)}};return{state:a,get:o,set:c,on:s,onChange:function(t,e){var i=s("set",(function(n,i){n===t&&e(i)})),r=s("reset",(function(){return e(n[t])}));return function(){i(),r()}},use:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=n.reduce((function(n,t){return t.set&&n.push(s("set",t.set)),t.get&&n.push(s("get",t.get)),t.reset&&n.push(s("reset",t.reset)),t.dispose&&n.push(s("dispose",t.dispose)),n}),[]);return function(){return e.forEach((function(n){return n()}))}},dispose:function(){i.dispose.forEach((function(n){return n()})),r()},reset:r,forceUpdate:function(n){var t=e.get(n);i.set.forEach((function(e){return e(n,t,t)}))}}}(n,t);return e.use(function(){if("function"!==typeof i.a)return{};var n=new Map;return{dispose:function(){return n.clear()},get:function(t){var e=(0,i.a)();e&&function(n,t,e){var i=n.get(t);i?i.includes(e)||i.push(e):n.set(t,[e])}(n,t,e)},set:function(t){var e=n.get(t);e&&n.set(t,e.filter(i.f)),o(n)},reset:function(){n.forEach((function(n){return n.forEach(i.f)})),o(n)}}}()),e}},4585:function(n,t,e){e.r(t),e.d(t,{L:function(){return a}});var i,r,o=e(4481),u=e(6503),c=e(3171);(r=i||(i={})).Portrait="p",r.Landscape="l";var a=function(){function n(n){this.initContext(),this.initVisitor(),this.initPageExperience(),this.initIds(),this.context.applicationId=n.applicationId,this.context.country=n.locale.country,this.context.language=n.locale.language,this.context.timestamp=(new Date).toISOString(),this.context.environment=this.getEnvironmentAbreviation(n.environment),this.populateVisitor(n.w,n.loginStatus),this.populatePageExperience(window),this.populateIds(n.userId)}return n.prototype.event=function(){return{context:this.context,visitor:this.visitor,pageExperience:this.pageExperience,ids:this.ids}},n.prototype.initContext=function(){var n;this.context=((n={})[c.C.ApplicationId]=void 0,n[c.C.Language]=void 0,n[c.C.Country]=void 0,n[c.C.EventAction]=void 0,n[c.C.Timestamp]=void 0,n[c.C.Environment]=void 0,n[c.C.Server]=void 0,n)},n.prototype.initVisitor=function(){var n;this.visitor=((n={})[c.V.LoginStatus]=!1,n[c.V.DeviceBrowserWidth]="",n[c.V.DeviceBrowserHeight]="",n[c.V.DeviceBrowserBreakpoint]="",n[c.V.DeviceBrowserOrientation]="",n[c.V.DeviceType]="",n)},n.prototype.initPageExperience=function(){var n;this.pageExperience=((n={})[c.P.PageId]=void 0,n[c.P.PageName]=void 0,n)},n.prototype.initIds=function(){var n;this.ids=((n={})[c.I.UserId]="",n)},n.prototype.populateVisitor=function(t,e){var i,r;void 0===e&&(e=!1),this.visitor.loginStatus=e,this.visitor.deviceBrowserHeight=t.innerHeight.toString(),this.visitor.deviceBrowserWidth=t.innerWidth.toString(),this.visitor.deviceBrowserBreakpoint=null!==(r=null===(i=this.getLowerBreakpointForWidth(t.innerWidth))||void 0===i?void 0:i.toString())&&void 0!==r?r:"xxs",this.visitor.deviceBrowserOrientation=n.getDeviceOrientation(t)},n.prototype.populatePageExperience=function(n){this.pageExperience.pageId="".concat(n.location.protocol,"//").concat(n.location.host).concat(n.location.pathname),this.pageExperience.pageName=n.document.title.length>0?n.document.title:void 0},n.prototype.populateIds=function(n){this.ids.userId=n},n.prototype.getLowerBreakpointForWidth=function(n){return Object.values(o.b).filter((function(t){return t<=n})).reverse().shift()},n.prototype.getEnvironmentAbreviation=function(n){return n===u.n.PRODUCTION?"P":n===u.n.PREVIEW?"PP":"K"},n.getDeviceOrientation=function(n){return n.matchMedia("(orientation: landscape)").matches?i.Landscape:i.Portrait},n}()}}]);