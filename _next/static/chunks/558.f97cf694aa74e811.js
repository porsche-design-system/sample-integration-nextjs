"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558,171,503,481,846,585,438,489],{3171:function(e,n,t){t.r(n),t.d(n,{C:function(){return c},I:function(){return l},L:function(){return f},P:function(){return u},V:function(){return s},a:function(){return g},b:function(){return p},c:function(){return d},s:function(){return r}});var i=t(1846),o=t(6503);function r(e){if(!(0,o.i)(e))throw new Error("empty locale passed");var n=e.substring(0,e.indexOf("-")).toLowerCase(),t=e.substring(e.indexOf("-")+1);if(-1===Object.values(o.k).indexOf(t)&&(t=t.toUpperCase()),!(0,o.i)(n)||!(0,o.i)(t))throw new Error("invalid locale ".concat(e," passed"));return{language:n,country:t in o.k?o.k[t]:t}}var c,a,s,u,l,d,p,f=function(){function e(e){this.isSet=!1,(0,o.i)(e)&&this.setLocale(e)}return e.prototype.setLocale=function(e){void 0===e&&(e="");try{var n=r(e),t=n.language,i=n.country;this.language=t,this.country=i,this.isSet=!0}catch(e){this.language="",this.country="",this.isSet=!1}return this},e.prototype.toString=function(){return(0,o.i)(this.language)&&(0,o.i)(this.country)?"".concat(this.language,"-").concat(this.country):""},e.prototype.toHeaderString=function(){return this.toString().replace("-","_")},e}(),g=(0,i.c)({applicationId:o.A,locale:new f,w:window,environment:o.d,loginStatus:!1,userId:""});(a=c||(c={})).EventAction="eventAction",a.ApplicationId="applicationId",a.Language="language",a.Country="country",a.Timestamp="timestamp",a.Environment="environment",a.Server="server",function(e){e.LoginStatus="loginStatus",e.DeviceBrowserHeight="deviceBrowserHeight",e.DeviceBrowserWidth="deviceBrowserWidth",e.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",e.DeviceBrowserOrientation="deviceBrowserOrientation",e.DeviceType="deviceType"}(s||(s={})),function(e){e.PageId="pageId",e.PageName="pageName"}(u||(u={})),function(e){e.UserId="userId"}(l||(l={})),function(e){e.ModelRangeCode="modelRangeCode",e.ModelRangeName="modelRangeName",e.ModelSeriesCode="modelSeriesCode",e.ModelSeriesName="modelSeriesName",e.ModelName="modelName",e.Bodytype="bodytype"}(d||(d={})),function(e){e.ClickElementType="clickElementType",e.ClickElementId="clickElementId",e.ClickElementName="clickElementName",e.TargetUrl="targetUrl"}(p||(p={}))},6503:function(e,n,t){t.r(n),t.d(n,{A:function(){return u},B:function(){return E},C:function(){return O},D:function(){return c},E:function(){return l},F:function(){return M},G:function(){return b},H:function(){return w},I:function(){return I},J:function(){return j},K:function(){return R},L:function(){return f},M:function(){return x},N:function(){return K},O:function(){return F},R:function(){return d},V:function(){return m},a:function(){return g},b:function(){return p},c:function(){return a},d:function(){return s},e:function(){return W},f:function(){return G},g:function(){return V},h:function(){return z},i:function(){return H},j:function(){return T},k:function(){return D},l:function(){return v},m:function(){return h},n:function(){return k},o:function(){return i},p:function(){return N},q:function(){return S},r:function(){return P},s:function(){return B},t:function(){return y},u:function(){return r},v:function(){return L},w:function(){return U},x:function(){return _},y:function(){return q},z:function(){return A}});var i,o,r={PhraseId:"",Text:"",Link:"",Items:[]},c=r,a=null,s="preview",u="nav",l={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},d="REDACTED",p="loggedIn",f="loginOrRegister",g="loading",m="2.16.0",h=0,v={accessibilityStatement:c,countryRecommender:a,furtherLinks:r,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};(o=i||(i={})).TEXT="Text",o.LINK="Link",o.PHRASEID="PhraseId",o.ITEMS="Items";var k,C="metafunctionalities",y="".concat(C,".finddealer"),x="".concat(C,".myporsche"),w="".concat(x,".logout"),E="".concat(x,".").concat(p),b="".concat(x,".").concat(f),I="".concat(x,".messages"),L="mainmenu",P="".concat(L,".crest"),N="".concat(L,".menu");function _(e){switch(e){case k.PRODUCTION:return"P";case k.PREVIEW:return"PP";default:return"K"}}!function(e){e.PRODUCTION="production",e.PREVIEW="preview",e.TEST="test",e.LOCAL="local"}(k||(k={}));var O,S,A,T="featureOverrideEnabled",M="HOMENAV_1590",R="HOMENAV_1599",B='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';!function(e){e.Link="link",e.Button="button",e.Image="image"}(O||(O={})),function(e){e.Change="PAGHomeNav_CountryRecommenderChange_Click",e.Close="PAGHomeNav_CountryRecommenderClose_Click",e.Load="PAGHomeNav_CountryRecommender_Load"}(S||(S={})),function(e){e.metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.navigationClick="PAGHomeNav_Navigation_Click",e.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.modelClick="PAGHomeNav_Model_Click"}(A||(A={}));var D={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},H=function(e){return"string"===typeof e&&e.length>0};function V(e){return"string"===typeof e?e:""}function W(e){return e instanceof HTMLElement?e:null}function j(e){return e instanceof HTMLInputElement?e:null}function U(e){return e.split(".").slice(0,-1).join(".")}function z(e){return 0===e.x&&0===e.y}function F(e){return e===g}function G(e){return!F(e)&&!function(e){return e===f}(e)}function K(e,n){return e===p?n:e}function q(e,n,t){return"".concat(n,"/as/authorization.oauth2?&client_id=").concat(e,"&response_type=code&redirect_uri=").concat(t,"/auth")}},4481:function(e,n,t){t.r(n),t.d(n,{b:function(){return i}});var i={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},1846:function(e,n,t){t.r(n),t.d(n,{c:function(){return a}});var i=t(9422),o=function(e){return!("isConnected"in e)||e.isConnected},r=function(e,n){var t;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];t&&clearTimeout(t),t=setTimeout((function(){t=0,e.apply(void 0,i)}),n)}}((function(e){for(var n=0,t=e.keys();n<t.length;n++){var i=t[n];e.set(i,e.get(i).filter(o))}}),2e3),c=function(e,n){var t=e.indexOf(n);t>=0&&(e[t]=e[e.length-1],e.length--)},a=function(e,n){var t=function(e,n){void 0===n&&(n=function(e,n){return e!==n});var t=new Map(Object.entries(null!==e&&void 0!==e?e:{})),i={dispose:[],get:[],set:[],reset:[]},o=function(){t=new Map(Object.entries(null!==e&&void 0!==e?e:{})),i.reset.forEach((function(e){return e()}))},r=function(e){return i.get.forEach((function(n){return n(e)})),t.get(e)},a=function(e,o){var r=t.get(e);n(o,r,e)&&(t.set(e,o),i.set.forEach((function(n){return n(e,o,r)})))},s="undefined"===typeof Proxy?{}:new Proxy(e,{get:function(e,n){return r(n)},ownKeys:function(e){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,n){return t.has(n)},set:function(e,n,t){return a(n,t),!0}}),u=function(e,n){return i[e].push(n),function(){c(i[e],n)}};return{state:s,get:r,set:a,on:u,onChange:function(n,t){var i=u("set",(function(e,i){e===n&&t(i)})),o=u("reset",(function(){return t(e[n])}));return function(){i(),o()}},use:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.reduce((function(e,n){return n.set&&e.push(u("set",n.set)),n.get&&e.push(u("get",n.get)),n.reset&&e.push(u("reset",n.reset)),n.dispose&&e.push(u("dispose",n.dispose)),e}),[]);return function(){return t.forEach((function(e){return e()}))}},dispose:function(){i.dispose.forEach((function(e){return e()})),o()},reset:o,forceUpdate:function(e){var n=t.get(e);i.set.forEach((function(t){return t(e,n,n)}))}}}(e,n);return t.use(function(){if("function"!==typeof i.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(n){var t=(0,i.a)();t&&function(e,n,t){var i=e.get(n);i?i.includes(t)||i.push(t):e.set(n,[t])}(e,n,t)},set:function(n){var t=e.get(n);t&&e.set(n,t.filter(i.f)),r(e)},reset:function(){e.forEach((function(e){return e.forEach(i.f)})),r(e)}}}()),t}},4585:function(e,n,t){t.r(n),t.d(n,{L:function(){return s}});var i,o,r=t(4481),c=t(6503),a=t(3171);(o=i||(i={})).Portrait="p",o.Landscape="l";var s=function(){function e(e){this.initContext(),this.initVisitor(),this.initPageExperience(),this.initIds(),this.context.applicationId=e.applicationId,this.context.country=e.locale.country,this.context.language=e.locale.language,this.context.timestamp=(new Date).toISOString(),this.context.environment=this.getEnvironmentAbreviation(e.environment),this.populateVisitor(e.w,e.loginStatus),this.populatePageExperience(window),this.populateIds(e.userId)}return e.prototype.event=function(){return{context:this.context,visitor:this.visitor,pageExperience:this.pageExperience,ids:this.ids}},e.prototype.initContext=function(){var e;this.context=((e={})[a.C.ApplicationId]=void 0,e[a.C.Language]=void 0,e[a.C.Country]=void 0,e[a.C.EventAction]=void 0,e[a.C.Timestamp]=void 0,e[a.C.Environment]=void 0,e[a.C.Server]=void 0,e)},e.prototype.initVisitor=function(){var e;this.visitor=((e={})[a.V.LoginStatus]=!1,e[a.V.DeviceBrowserWidth]="",e[a.V.DeviceBrowserHeight]="",e[a.V.DeviceBrowserBreakpoint]="",e[a.V.DeviceBrowserOrientation]="",e[a.V.DeviceType]="",e)},e.prototype.initPageExperience=function(){var e;this.pageExperience=((e={})[a.P.PageId]=void 0,e[a.P.PageName]=void 0,e)},e.prototype.initIds=function(){var e;this.ids=((e={})[a.I.UserId]="",e)},e.prototype.populateVisitor=function(n,t){var i,o;void 0===t&&(t=!1),this.visitor.loginStatus=t,this.visitor.deviceBrowserHeight=n.innerHeight.toString(),this.visitor.deviceBrowserWidth=n.innerWidth.toString(),this.visitor.deviceBrowserBreakpoint=null!==(o=null===(i=this.getLowerBreakpointForWidth(n.innerWidth))||void 0===i?void 0:i.toString())&&void 0!==o?o:"xxs",this.visitor.deviceBrowserOrientation=e.getDeviceOrientation(n)},e.prototype.populatePageExperience=function(e){this.pageExperience.pageId="".concat(e.location.protocol,"//").concat(e.location.host).concat(e.location.pathname),this.pageExperience.pageName=e.document.title.length>0?e.document.title:void 0},e.prototype.populateIds=function(e){this.ids.userId=e},e.prototype.getLowerBreakpointForWidth=function(e){return Object.values(r.b).filter((function(n){return n<=e})).reverse().shift()},e.prototype.getEnvironmentAbreviation=function(e){return e===c.n.PRODUCTION?"P":e===c.n.PREVIEW?"PP":"K"},e.getDeviceOrientation=function(e){return e.matchMedia("(orientation: landscape)").matches?i.Landscape:i.Portrait},e}()},4438:function(e,n,t){t.r(n),t.d(n,{n:function(){return r}});var i=t(1846),o=t(6503),r=(0,i.c)({imagesRegistered:0,imagesRetrieved:0,imagesLoaded:!0,navigationLoaded:!1,crestLoaded:!1,loggedInState:o.L,unreadMessagesCount:o.m,applicationClientId:""});r.onChange("imagesRetrieved",(function(){r.set("imagesLoaded",r.get("imagesRetrieved")===r.get("imagesRegistered"))})),r.onChange("imagesRegistered",(function(){r.set("imagesLoaded",r.get("imagesRetrieved")===r.get("imagesRegistered"))})),r.onChange("imagesLoaded",(function(){r.set("navigationLoaded",r.get("crestLoaded")&&r.get("imagesLoaded"))})),r.onChange("crestLoaded",(function(){r.set("navigationLoaded",r.get("crestLoaded")&&r.get("imagesLoaded"))}))},9489:function(e,n,t){t.r(n),t.d(n,{N:function(){return c}});var i=t(4585),o=t(3171),r=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),c=function(e){function n(n,t){var i=e.call(this,n)||this;return i.context.eventAction="PAGHomeNav_Navigation_Click",i.initComponentClick(),i.populateComponentClickFromContentItem(t),i}return r(n,e),n.prototype.initComponentClick=function(){var e;this.componentClick=((e={})[o.b.ClickElementId]=void 0,e[o.b.ClickElementName]=void 0,e[o.b.ClickElementType]=void 0,e[o.b.TargetUrl]=void 0,e)},n.prototype.populateComponentClickFromContentItem=function(e){this.componentClick.clickElementId=e.PhraseId,this.componentClick.clickElementName=e.Text,this.componentClick.clickElementType=e.Link&&""!==e.Link?"link":"button",this.componentClick.targetUrl=""!==e.Link?e.Link:void 0},n.prototype.event=function(){var n=this.componentClick;return Object.assign(Object.assign({},e.prototype.event.call(this)),{componentClick:n})},n}(i.L)},5558:function(e,n,t){t.r(n),t.d(n,{phn_messages_link:function(){return s}});var i=t(9422),o=t(3171),r=t(6503),c=t(9489),a=t(4438),s=(t(1846),t(4585),t(4481),function(){function e(e){(0,i.r)(this,e),this.item=r.u}return e.prototype.sendNavigationClickAnalyticsEvent=function(){var e=new c.N(o.a.state,this.item);(o.a.state.w.pagData=o.a.state.w.pagData||[]).push(e.event())},e.prototype.render=function(){var e=this,n=a.n.get("unreadMessagesCount");return(0,i.h)("a",{href:this.item.Link,onClick:function(){return e.sendNavigationClickAnalyticsEvent()}},(0,i.h)("span",{class:"link-text"},this.item.Text),n>0?(0,i.h)("span",{class:"unread-messages-count"},n):null)},e}());s.style='.sc-phn-messages-link-h{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #e3e4e5}.sc-phn-messages-link-h:hover{color:#d5001c;cursor:pointer}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h{font-size:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h{border-bottom:0;padding-left:0}}.sc-phn-messages-link-h a.sc-phn-messages-link{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:400;color:inherit;text-decoration:none;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:100%;padding:1rem 0 0.875rem 0.625rem}.sc-phn-messages-link-h a.sc-phn-messages-link::-moz-focus-inner{border:0}.sc-phn-messages-link-h a.sc-phn-messages-link{outline:transparent solid 1px;outline-offset:2px}.sc-phn-messages-link-h a.sc-phn-messages-link:focus{outline-color:currentColor}.sc-phn-messages-link-h a.sc-phn-messages-link:focus:not(:focus-visible){outline-color:transparent}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h a.sc-phn-messages-link{padding-top:1.125rem;padding-bottom:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h a.sc-phn-messages-link{padding-top:0.5rem;padding-bottom:0.5rem}}.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link{height:1rem;margin-left:0.5rem;padding:0 0.3125rem;background-color:#d5001c;border-radius:8px;font-size:0.75rem;color:#fff;line-height:1rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link{height:1.125rem;font-size:0.875rem;line-height:1.125rem}}.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link:hover{color:#fff}'}}]);