"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852,171,503,481,846,585],{3171:function(t,n,e){e.r(n),e.d(n,{C:function(){return c},I:function(){return f},L:function(){return d},P:function(){return s},V:function(){return a},a:function(){return v},b:function(){return p},c:function(){return l},s:function(){return o}});var i=e(1846),r=e(6503);function o(t){if(!(0,r.i)(t))throw new Error("empty locale passed");var n=t.substring(0,t.indexOf("-")).toLowerCase(),e=t.substring(t.indexOf("-")+1);if(-1===Object.values(r.k).indexOf(e)&&(e=e.toUpperCase()),!(0,r.i)(n)||!(0,r.i)(e))throw new Error("invalid locale ".concat(t," passed"));return{language:n,country:e in r.k?r.k[e]:e}}var c,u,a,s,f,l,p,d=function(){function t(t){this.isSet=!1,(0,r.i)(t)&&this.setLocale(t)}return t.prototype.setLocale=function(t){void 0===t&&(t="");try{var n=o(t),e=n.language,i=n.country;this.language=e,this.country=i,this.isSet=!0}catch(t){this.language="",this.country="",this.isSet=!1}return this},t.prototype.toString=function(){return(0,r.i)(this.language)&&(0,r.i)(this.country)?"".concat(this.language,"-").concat(this.country):""},t.prototype.toHeaderString=function(){return this.toString().replace("-","_")},t}(),v=(0,i.c)({applicationId:r.A,locale:new d,w:window,environment:r.d,loginStatus:!1,userId:""});(u=c||(c={})).EventAction="eventAction",u.ApplicationId="applicationId",u.Language="language",u.Country="country",u.Timestamp="timestamp",u.Environment="environment",u.Server="server",function(t){t.LoginStatus="loginStatus",t.DeviceBrowserHeight="deviceBrowserHeight",t.DeviceBrowserWidth="deviceBrowserWidth",t.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",t.DeviceBrowserOrientation="deviceBrowserOrientation",t.DeviceType="deviceType"}(a||(a={})),function(t){t.PageId="pageId",t.PageName="pageName"}(s||(s={})),function(t){t.UserId="userId"}(f||(f={})),function(t){t.ModelRangeCode="modelRangeCode",t.ModelRangeName="modelRangeName",t.ModelSeriesCode="modelSeriesCode",t.ModelSeriesName="modelSeriesName",t.ModelName="modelName",t.Bodytype="bodytype"}(l||(l={})),function(t){t.ClickElementType="clickElementType",t.ClickElementId="clickElementId",t.ClickElementName="clickElementName",t.TargetUrl="targetUrl"}(p||(p={}))},6503:function(t,n,e){e.r(n),e.d(n,{A:function(){return s},B:function(){return I},C:function(){return _},D:function(){return c},E:function(){return f},F:function(){return A},G:function(){return P},H:function(){return w},I:function(){return x},J:function(){return j},K:function(){return B},L:function(){return d},M:function(){return k},N:function(){return z},O:function(){return F},R:function(){return l},V:function(){return h},a:function(){return v},b:function(){return p},c:function(){return u},d:function(){return a},e:function(){return W},f:function(){return K},g:function(){return V},h:function(){return G},i:function(){return H},j:function(){return T},k:function(){return R},l:function(){return m},m:function(){return g},n:function(){return y},o:function(){return i},p:function(){return b},q:function(){return S},r:function(){return O},s:function(){return D},t:function(){return E},u:function(){return o},v:function(){return N},w:function(){return U},x:function(){return M},y:function(){return q},z:function(){return L}});var i,r,o={PhraseId:"",Text:"",Link:"",Items:[]},c=o,u=null,a="preview",s="nav",f={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l="REDACTED",p="loggedIn",d="loginOrRegister",v="loading",h="2.16.0",g=0,m={accessibilityStatement:c,countryRecommender:u,furtherLinks:o,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};(r=i||(i={})).TEXT="Text",r.LINK="Link",r.PHRASEID="PhraseId",r.ITEMS="Items";var y,C="metafunctionalities",E="".concat(C,".finddealer"),k="".concat(C,".myporsche"),w="".concat(k,".logout"),I="".concat(k,".").concat(p),P="".concat(k,".").concat(d),x="".concat(k,".messages"),N="mainmenu",O="".concat(N,".crest"),b="".concat(N,".menu");function M(t){switch(t){case y.PRODUCTION:return"P";case y.PREVIEW:return"PP";default:return"K"}}!function(t){t.PRODUCTION="production",t.PREVIEW="preview",t.TEST="test",t.LOCAL="local"}(y||(y={}));var _,S,L,T="featureOverrideEnabled",A="HOMENAV_1590",B="HOMENAV_1599",D='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';!function(t){t.Link="link",t.Button="button",t.Image="image"}(_||(_={})),function(t){t.Change="PAGHomeNav_CountryRecommenderChange_Click",t.Close="PAGHomeNav_CountryRecommenderClose_Click",t.Load="PAGHomeNav_CountryRecommender_Load"}(S||(S={})),function(t){t.metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",t.navigationClick="PAGHomeNav_Navigation_Click",t.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",t.modelClick="PAGHomeNav_Model_Click"}(L||(L={}));var R={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},H=function(t){return"string"===typeof t&&t.length>0};function V(t){return"string"===typeof t?t:""}function W(t){return t instanceof HTMLElement?t:null}function j(t){return t instanceof HTMLInputElement?t:null}function U(t){return t.split(".").slice(0,-1).join(".")}function G(t){return 0===t.x&&0===t.y}function F(t){return t===v}function K(t){return!F(t)&&!function(t){return t===d}(t)}function z(t,n){return t===p?n:t}function q(t,n,e){return"".concat(n,"/as/authorization.oauth2?&client_id=").concat(t,"&response_type=code&redirect_uri=").concat(e,"/auth")}},4481:function(t,n,e){e.r(n),e.d(n,{b:function(){return i}});var i={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},1846:function(t,n,e){e.r(n),e.d(n,{c:function(){return u}});var i=e(9422),r=function(t){return!("isConnected"in t)||t.isConnected},o=function(t,n){var e;return function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];e&&clearTimeout(e),e=setTimeout((function(){e=0,t.apply(void 0,i)}),n)}}((function(t){for(var n=0,e=t.keys();n<e.length;n++){var i=e[n];t.set(i,t.get(i).filter(r))}}),2e3),c=function(t,n){var e=t.indexOf(n);e>=0&&(t[e]=t[t.length-1],t.length--)},u=function(t,n){var e=function(t,n){void 0===n&&(n=function(t,n){return t!==n});var e=new Map(Object.entries(null!==t&&void 0!==t?t:{})),i={dispose:[],get:[],set:[],reset:[]},r=function(){e=new Map(Object.entries(null!==t&&void 0!==t?t:{})),i.reset.forEach((function(t){return t()}))},o=function(t){return i.get.forEach((function(n){return n(t)})),e.get(t)},u=function(t,r){var o=e.get(t);n(r,o,t)&&(e.set(t,r),i.set.forEach((function(n){return n(t,r,o)})))},a="undefined"===typeof Proxy?{}:new Proxy(t,{get:function(t,n){return o(n)},ownKeys:function(t){return Array.from(e.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,n){return e.has(n)},set:function(t,n,e){return u(n,e),!0}}),s=function(t,n){return i[t].push(n),function(){c(i[t],n)}};return{state:a,get:o,set:u,on:s,onChange:function(n,e){var i=s("set",(function(t,i){t===n&&e(i)})),r=s("reset",(function(){return e(t[n])}));return function(){i(),r()}},use:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t.reduce((function(t,n){return n.set&&t.push(s("set",n.set)),n.get&&t.push(s("get",n.get)),n.reset&&t.push(s("reset",n.reset)),n.dispose&&t.push(s("dispose",n.dispose)),t}),[]);return function(){return e.forEach((function(t){return t()}))}},dispose:function(){i.dispose.forEach((function(t){return t()})),r()},reset:r,forceUpdate:function(t){var n=e.get(t);i.set.forEach((function(e){return e(t,n,n)}))}}}(t,n);return e.use(function(){if("function"!==typeof i.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(n){var e=(0,i.a)();e&&function(t,n,e){var i=t.get(n);i?i.includes(e)||i.push(e):t.set(n,[e])}(t,n,e)},set:function(n){var e=t.get(n);e&&t.set(n,e.filter(i.f)),o(t)},reset:function(){t.forEach((function(t){return t.forEach(i.f)})),o(t)}}}()),e}},4585:function(t,n,e){e.r(n),e.d(n,{L:function(){return a}});var i,r,o=e(4481),c=e(6503),u=e(3171);(r=i||(i={})).Portrait="p",r.Landscape="l";var a=function(){function t(t){this.initContext(),this.initVisitor(),this.initPageExperience(),this.initIds(),this.context.applicationId=t.applicationId,this.context.country=t.locale.country,this.context.language=t.locale.language,this.context.timestamp=(new Date).toISOString(),this.context.environment=this.getEnvironmentAbreviation(t.environment),this.populateVisitor(t.w,t.loginStatus),this.populatePageExperience(window),this.populateIds(t.userId)}return t.prototype.event=function(){return{context:this.context,visitor:this.visitor,pageExperience:this.pageExperience,ids:this.ids}},t.prototype.initContext=function(){var t;this.context=((t={})[u.C.ApplicationId]=void 0,t[u.C.Language]=void 0,t[u.C.Country]=void 0,t[u.C.EventAction]=void 0,t[u.C.Timestamp]=void 0,t[u.C.Environment]=void 0,t[u.C.Server]=void 0,t)},t.prototype.initVisitor=function(){var t;this.visitor=((t={})[u.V.LoginStatus]=!1,t[u.V.DeviceBrowserWidth]="",t[u.V.DeviceBrowserHeight]="",t[u.V.DeviceBrowserBreakpoint]="",t[u.V.DeviceBrowserOrientation]="",t[u.V.DeviceType]="",t)},t.prototype.initPageExperience=function(){var t;this.pageExperience=((t={})[u.P.PageId]=void 0,t[u.P.PageName]=void 0,t)},t.prototype.initIds=function(){var t;this.ids=((t={})[u.I.UserId]="",t)},t.prototype.populateVisitor=function(n,e){var i,r;void 0===e&&(e=!1),this.visitor.loginStatus=e,this.visitor.deviceBrowserHeight=n.innerHeight.toString(),this.visitor.deviceBrowserWidth=n.innerWidth.toString(),this.visitor.deviceBrowserBreakpoint=null!==(r=null===(i=this.getLowerBreakpointForWidth(n.innerWidth))||void 0===i?void 0:i.toString())&&void 0!==r?r:"xxs",this.visitor.deviceBrowserOrientation=t.getDeviceOrientation(n)},t.prototype.populatePageExperience=function(t){this.pageExperience.pageId="".concat(t.location.protocol,"//").concat(t.location.host).concat(t.location.pathname),this.pageExperience.pageName=t.document.title.length>0?t.document.title:void 0},t.prototype.populateIds=function(t){this.ids.userId=t},t.prototype.getLowerBreakpointForWidth=function(t){return Object.values(o.b).filter((function(n){return n<=t})).reverse().shift()},t.prototype.getEnvironmentAbreviation=function(t){return t===c.n.PRODUCTION?"P":t===c.n.PREVIEW?"PP":"K"},t.getDeviceOrientation=function(t){return t.matchMedia("(orientation: landscape)").matches?i.Landscape:i.Portrait},t}()},5852:function(t,n,e){e.r(n),e.d(n,{M:function(){return c}});var i=e(4585),r=e(3171),o=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),c=function(t){function n(n,e){var i=t.call(this,n)||this;return i.context.eventAction="PAGHomeNav_ModelSeries_Click",i.initCar(),i.initComponentClick(),i.populateCar(e),i}return o(n,t),n.prototype.initCar=function(){var t;this.car=((t={})[r.c.ModelRangeCode]=void 0,t[r.c.ModelRangeName]=void 0,t[r.c.ModelSeriesName]=void 0,t[r.c.ModelSeriesCode]=void 0,t[r.c.ModelName]=void 0,t[r.c.Bodytype]=void 0,t)},n.prototype.initComponentClick=function(){var t;this.componentClick=((t={})[r.b.ClickElementId]=void 0,t[r.b.ClickElementName]=void 0,t[r.b.ClickElementType]=void 0,t[r.b.TargetUrl]=void 0,t)},n.prototype.populateCar=function(t){this.car.modelRangeName=t},n.prototype.event=function(){var n=this.car,e=this.componentClick;return Object.assign(Object.assign({},t.prototype.event.call(this)),{car:n,componentClick:e})},n}(i.L)}}]);