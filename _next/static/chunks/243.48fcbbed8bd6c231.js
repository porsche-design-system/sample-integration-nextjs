"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243,292,957],{1292:function(e,t,n){n.r(t),n.d(t,{c:function(){return a}});var o=n(8756),i=function(e){return!("isConnected"in e)||e.isConnected},r=function(e,t){var n;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){n=0,e.apply(void 0,o)}),t)}}((function(e){for(var t=0,n=e.keys();t<n.length;t++){var o=n[t];e.set(o,e.get(o).filter(i))}}),2e3),s=function(e){return"function"===typeof e?e():e},l=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},a=function(e,t){var n=function(e,t){void 0===t&&(t=function(e,t){return e!==t});var n=s(e),o=new Map(Object.entries(null!==n&&void 0!==n?n:{})),i={dispose:[],get:[],set:[],reset:[]},r=function(){var t;o=new Map(Object.entries(null!==(t=s(e))&&void 0!==t?t:{})),i.reset.forEach((function(e){return e()}))},a=function(e){return i.get.forEach((function(t){return t(e)})),o.get(e)},p=function(e,n){var r=o.get(e);t(n,r,e)&&(o.set(e,n),i.set.forEach((function(t){return t(e,n,r)})))},c="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(e,t){return a(t)},ownKeys:function(e){return Array.from(o.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return o.has(t)},set:function(e,t,n){return p(t,n),!0}}),u=function(e,t){return i[e].push(t),function(){l(i[e],t)}};return{state:c,get:a,set:p,on:u,onChange:function(t,n){var o=u("set",(function(e,o){e===t&&n(o)})),i=u("reset",(function(){return n(s(e)[t])}));return function(){o(),i()}},use:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.reduce((function(e,t){return t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e}),[]);return function(){return n.forEach((function(e){return e()}))}},dispose:function(){i.dispose.forEach((function(e){return e()})),r()},reset:r,forceUpdate:function(e){var t=o.get(e);i.set.forEach((function(n){return n(e,t,t)}))}}}(e,t);return n.use(function(){if("function"!==typeof o.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,o.a)();n&&function(e,t,n){var o=e.get(t);o?o.includes(n)||o.push(n):e.set(t,[n])}(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(o.f)),r(e)},reset:function(){e.forEach((function(e){return e.forEach(o.f)})),r(e)}}}()),n}},2651:function(e,t,n){n.r(t),n.d(t,{f:function(){return p},n:function(){return c}});var o=n(1292),i=n(1252),r={id:"",text:"",link:"",icon:"",description:""},s={id:"",text:"",description:""},l={id:"",text:"",link:"",children:[]},a={menu:s,crest:r,back:s,close:s,accessibilityStatement:r,countryRecommender:{statement:"",region:"",language:"",change:s},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:s,or:"",geolocation:s,load:"",map:r},details:{id:"",finder:r,bookService:r,backToSearch:""}},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:r,loginText:"",logout:r,messages:r,more:null,signup:r,signupText:"",links:[]},vehiclePurchase:l,shop:l,experience:l,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:l,legacyShop:l};function p(e,t){if(!(0,i.i)(t))return null;if(e.id===t)return e;if(!Array.isArray(e.children))return null;for(var n=0,o=e.children;n<o.length;n++){var r=p(o[n],t);if(null!==r)return r}return null}var c=(0,o.c)(a)},8250:function(e,t,n){n.r(t),n.d(t,{n:function(){return s}});var o=n(1292),i=n(7094),r=n(1252),s=(0,o.c)({loggedInState:r.L,unreadMessagesCount:r.D,userConsent:!1,env:(0,i.g)(r.o)})},8243:function(e,t,n){n.r(t),n.d(t,{phn_menu_desktop_level_1:function(){return v}});var o=n(8756),i=n(7864),r=n(5542),s=n(2651),l=n(8250),a=n(1252),p=n(1957),c=(n(7094),n(8338),n(7393),n(1292),function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?n(e.value):i(e.value).then(s,l)}a((o=o.apply(e,t||[])).next())}))}),u=function(e,t){var n,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(e){return function(t){return a([e,t])}}function a(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};function h(e,t,n){var o=e[0],i=e[1],r=t[0],s=t[1],l=n[0],a=n[1];return Math.abs((l*(i-s)+o*(s-a)+r*(a-i))/2)}function d(e,t,n,o){var i=h(e,t,n),r=h(o,t,n);return i===h(e,o,n)+r+h(e,t,o)}function m(e){var t=e.activeRoutingKey,n=e.legacyShop,r=e.legacyMore,s=e.models;if(!(0,a.i)(t))return null;if(t===i.R.SHOP)return(0,o.h)("phn-shops-and-more-overview",{content:n,class:"overlay-content",routingKey:i.R.SHOP});if(t===i.R.MORE)return(0,o.h)("phn-shops-and-more-overview",{content:r,class:"overlay-content",routingKey:i.R.MORE});if(t.startsWith(i.R.SERIES)){var l=s.series.find((function(e){var n=e.id;return t===(0,i.d)(n)}));if(void 0!==l)return(0,o.h)("phn-car-series-overview",{series:l,allModels:s.all,class:"overlay-content"})}return null}var v=function(){function e(e){(0,o.r)(this,e),this.allCarSeriesImagesLoaded=(0,o.c)(this,"allCarSeriesImagesLoaded",7),this.carSeriesImgsLoaded=new Set,this.triggerOverlayAction=new p.T(100),this.triggerDataLayerEvent=new p.T(500),this.overlayTriangleOffsetY=50,this.overlayTriangleOffsetX=80,this.topPoint=[0,0],this.breakpoint=void 0,this.isNavigationLoaded=void 0,this.scrolledPastHeader=!1,this.activeOverlayRoutingKey="",this.previousOverlayRoutingKey="",this.mouseOnOverlay="",this.mouseOnButton="",this.overlayLabelledBy="",this.myPorscheFlyoutIsActive=!1}return Object.defineProperty(e.prototype,"leftPoint",{get:function(){return[this.el.offsetLeft+this.overlayTriangleOffsetX,this.el.offsetTop+this.el.offsetHeight+this.overlayTriangleOffsetY]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightPoint",{get:function(){return[this.el.offsetLeft+this.el.offsetWidth-this.overlayTriangleOffsetX,this.el.offsetTop+this.el.offsetHeight+this.overlayTriangleOffsetY]},enumerable:!1,configurable:!0}),e.prototype.handleMenuItemClick=function(e){var t,n,o=e.target,i=e.detail,r=null!==(n=null===(t=(0,a.n)(o))||void 0===t?void 0:t.getAttribute("id"))&&void 0!==n?n:"";this.setActiveOverlayRoutingKey(i,r)},e.prototype.handleMenuItemMouseEnter=function(e){var t=e.detail;this.mouseOnButton=t},e.prototype.handleMenuItemMouseLeave=function(e){var t=this,n=e.detail;this.mouseOnButton="",this.triggerOverlayAction.set((function(){return c(t,void 0,void 0,(function(){return u(this,(function(e){return(0,a.i)(this.mouseOnOverlay)||(0,a.i)(this.mouseOnButton)||d(this.leftPoint,this.rightPoint,this.topPoint,n)||this.setActiveOverlayRoutingKey(""),[2]}))}))}))},e.prototype.handleOverlayMouseEnter=function(){this.mouseOnOverlay=this.activeOverlayRoutingKey},e.prototype.handleOverlayMouseLeave=function(){var e=this;this.mouseOnOverlay="",this.triggerOverlayAction.set((function(){return c(e,void 0,void 0,(function(){return u(this,(function(e){return(0,a.i)(this.mouseOnOverlay)||(0,a.i)(this.mouseOnButton)||this.setActiveOverlayRoutingKey(""),[2]}))}))}))},e.prototype.carSeriesImgLoaded=function(e){var t=this,n=s.n.state.models;this.carSeriesImgsLoaded.add(e),n.series.every((function(e){var n=e.id;return t.carSeriesImgsLoaded.has(n)}))&&this.allCarSeriesImagesLoaded.emit()},e.prototype.handleMenuMouseMove=function(e){var t=this;if(!(0,a.i)(this.mouseOnOverlay)&&(0,a.i)(this.mouseOnButton)){var n=[e.clientX,e.clientY];if(this.mouseOnButton!==this.activeOverlayRoutingKey){var o="";if("function"===typeof e.composedPath){var i=e.composedPath().find((function(e){var t;return(0,a.i)(null===(t=(0,a.n)(e))||void 0===t?void 0:t.id)})),r=(0,a.n)(i);null!==r&&(o=r.id)}if((0,a.i)(this.activeOverlayRoutingKey)&&d(this.leftPoint,this.rightPoint,this.topPoint,n)){var s=this.mouseOnButton;this.triggerOverlayAction.set((function(){return c(t,void 0,void 0,(function(){var e=this;return u(this,(function(t){return this.mouseOnButton===s&&this.mouseOnButton!==this.activeOverlayRoutingKey&&(this.setActiveOverlayRoutingKey(this.mouseOnButton,o),this.topPoint=n,this.triggerDataLayerEvent.set((function(){return c(e,void 0,void 0,(function(){return u(this,(function(e){return this.mouseOnButton===this.activeOverlayRoutingKey&&this.sendDataLayerEvent(this.mouseOnButton),[2]}))}))}))),[2]}))}))}))}else this.setActiveOverlayRoutingKey(this.mouseOnButton,o),this.triggerDataLayerEvent.set((function(){return c(t,void 0,void 0,(function(){return u(this,(function(e){return this.mouseOnButton===this.activeOverlayRoutingKey&&this.sendDataLayerEvent(this.mouseOnButton),[2]}))}))})),this.topPoint=n}else d(this.leftPoint,this.rightPoint,this.topPoint,n)||(this.topPoint=n)}},e.prototype.recalculateWidths=function(){var e=(0,a.n)(this.el.querySelector(".expandable"));if(null!==e){var t=(0,a.n)(e.querySelector(".wrappable"));if(null!==t){var n=Array.from(e.querySelectorAll(".expandable-item")).reduce((function(e,t){return e+t.clientWidth}),0);e.clientWidth<=n?t.classList.add("wrapped"):t.classList.remove("wrapped")}}},e.prototype.myPorscheRendered=function(){this.recalculateWidths()},e.prototype.resizeHandler=function(){this.recalculateWidths()},e.prototype.handleAnimationEnd=function(e){var t,n;"slideUp"===e.animationName?(null===(t=(0,a.n)(e.target))||void 0===t||t.classList.remove("hiding"),this.overlayLabelledBy="",this.previousOverlayRoutingKey=""):"slideDown"===e.animationName&&(null===(n=(0,a.n)(e.target))||void 0===n||n.classList.remove("showing"))},e.prototype.componentDidLoad=function(){this.recalculateWidths()},e.prototype.disconnectedCallback=function(){this.triggerDataLayerEvent.cancel(),this.triggerOverlayAction.cancel()},e.prototype.sendDataLayerEvent=function(e){var t=s.n.state,n=t.legacyShop,o=t.legacyMore,l=t.models;if(i.R.SHOP!==e)if(i.R.MORE!==e){var p=l.series.find((function(t){var n=t.id;return(0,i.d)(n)===e}));void 0===p||r.g.pushDataLayerEvent(a.E.MODEL_OVERLAY_LOAD,{componentClick:{clickElementId:p.id,clickElementName:p.name,clickElementType:a.t.Button},car:{modelRangeName:p.name}})}else r.g.pushDataLayerEvent(a.E.NAVIGATION_LOAD,{componentClick:{clickElementId:o.id,clickElementName:o.text,clickElementType:a.t.Button}});else r.g.pushDataLayerEvent(a.E.NAVIGATION_LOAD,{componentClick:{clickElementId:n.id,clickElementName:n.text,clickElementType:a.t.Button}})},e.prototype.setActiveOverlayRoutingKey=function(e,t){if(void 0===t&&(t=""),this.overlayLabelledBy=t,this.previousOverlayRoutingKey=this.activeOverlayRoutingKey,this.activeOverlayRoutingKey=e,(0,a.i)(e));else{this.triggerDataLayerEvent.cancel();var n=this.el.querySelector(".overlay");null!==n&&(n.classList.remove("showing"),n.classList.add("hiding"))}},e.prototype.handleMenuKeyDown=function(e){var t,n,o;if("Tab"===e.key){var i=(0,a.n)(e.target);if(null!==i){var r=(0,a.n)(this.el.querySelector(".overlay-content"));if(null!==r){var s=r.querySelectorAll(a.u),l=(0,a.n)(s[0]);if(null===(t=i.parentElement)||void 0===t?void 0:t.matches("phn-menu-button.active"))(0,a.i)(this.activeOverlayRoutingKey)&&(e.shiftKey?this.setActiveOverlayRoutingKey(""):null!==l&&(e.preventDefault(),l.focus()));else{var p=(0,a.n)(null===(n=this.el.querySelector("phn-menu-button.active"))||void 0===n?void 0:n.firstElementChild);if(null!==p){if(!e.shiftKey){var c=(0,a.n)(s[s.length-1]),u=null===(o=this.el.querySelector(".menu-bar"))||void 0===o?void 0:o.querySelectorAll(a.u),h=(0,a.n)(null===u||void 0===u?void 0:u[u.length-1]);return i===c?(p!==h&&p.focus(),void this.setActiveOverlayRoutingKey("")):void 0}i===l&&(e.preventDefault(),p.focus(),this.setActiveOverlayRoutingKey(""))}}}}}},e.prototype.render=function(){var e=this,t=s.n.state,n=t.legacyShop,p=t.legacyMore,c=t.dealer,u=t.myPorsche,h=t.models,d=l.n.state,v=d.unreadMessagesCount,f=d.loggedInState,y=(0,a.i)(null===u||void 0===u?void 0:u.text),k=this.activeOverlayRoutingKey||this.previousOverlayRoutingKey;return(0,o.h)("nav",{onKeyDown:function(t){return e.handleMenuKeyDown(t)},onMouseMove:function(t){return e.handleMenuMouseMove(t)}},(0,o.h)("phn-p-flex",{direction:"row",role:"menubar",class:"menu-bar"},h.series.map((function(t){return(0,o.h)("phn-menu-button",{key:t.id,class:"car-series-menu-item".concat(e.activeOverlayRoutingKey===(0,i.d)(t.id)?" active":""),isExpanded:e.activeOverlayRoutingKey===(0,i.d)(t.id),onClick:function(){r.g.pushDataLayerEvent(a.E.MODEL_OVERLAY_LOAD,{componentClick:{clickElementId:t.id,clickElementName:t.name,clickElementType:a.t.Button},car:{modelRangeName:t.name}})},routingKey:(0,i.d)(t.id),screenReaderDescription:"Porsche Model Series ".concat(t.name)},(0,o.h)("phn-car-series",{style:e.isNavigationLoaded?{}:{display:"none"},text:t.name,image:t.image,breakpoint:e.breakpoint,onImgLoaded:function(){e.carSeriesImgLoaded(t.id)}}),e.isNavigationLoaded?null:(0,o.h)("div",{class:"car-series-skeleton"}))})),(0,o.h)("phn-p-flex",{"justify-content":"flex-end",class:"expandable"},(0,o.h)("div",{class:"spacer expandable-item"}),this.isNavigationLoaded?(0,o.h)("phn-menu-button",{class:"shops-menu-item ".concat(this.activeOverlayRoutingKey===i.R.SHOP?"active":""),isExpanded:this.activeOverlayRoutingKey===i.R.SHOP,routingKey:i.R.SHOP,role:"none",onClick:function(){r.g.pushDataLayerEvent(a.E.NAVIGATION_LOAD,{componentClick:{clickElementId:n.id,clickElementName:n.text,clickElementType:a.t.Button}})}},(0,o.h)("phn-p-flex",{class:"expandable-item"},(0,o.h)("phn-p-icon",{color:this.mouseOnButton===i.R.SHOP?"brand":"default",size:"inherit",name:"shoppingBag",class:"shops-menu-item-icon"}),(0,o.h)("phn-p-text",{class:"shops-menu-item-text",color:"inherit",size:"inherit",tag:"div"},n.text))):(0,o.h)("div",{class:"expandable-item skeleton shops-skeleton"},(0,o.h)("div",null)),(0,o.h)("phn-p-flex",{wrap:"wrap","align-items":"center",class:"wrappable"},this.isNavigationLoaded?(0,o.h)("phn-dealer-search",{class:"expandable-item metafunctionalities-item",dealerSearchText:c.text,dealerSearchLink:c.search.map.link}):(0,o.h)("div",{class:"dealer-search-skeleton"}),y?this.isNavigationLoaded?(0,o.h)("div",{class:"myporsche-container expandable-item metafunctionalities-item",onMouseEnter:function(){(0,a.b)(f)&&(e.myPorscheFlyoutIsActive=!0)},onMouseLeave:function(){return e.myPorscheFlyoutIsActive=!1}},(0,o.h)("phn-myporsche-desktop-link",{loggedInState:f,unreadMessagesCount:v,onMyPorscheFlyoutTriggered:function(t){var n=t.detail;e.myPorscheFlyoutIsActive=n}}),this.myPorscheFlyoutIsActive?(0,o.h)("div",{class:"myporsche-flyout","aria-labelledby":"myporsche-flyout"},(0,o.h)("phn-myporsche-items",{onMyporscheClose:function(){e.myPorscheFlyoutIsActive=!1}})):null):(0,o.h)("div",{class:"myporsche-skeleton"}):null),this.isNavigationLoaded?(0,o.h)("div",{class:"menu-separator expandable-item"},(0,o.h)("div",null)):null,this.isNavigationLoaded?(0,o.h)("phn-menu-button",{class:"more-menu-item  ".concat(this.activeOverlayRoutingKey===i.R.MORE?" active":""),isExpanded:this.activeOverlayRoutingKey===i.R.MORE,onClick:function(){r.g.pushDataLayerEvent(a.E.NAVIGATION_LOAD,{componentClick:{clickElementId:p.id,clickElementName:p.text,clickElementType:a.t.Button}})},routingKey:i.R.MORE,role:"none",screenReaderDescription:p.text},(0,o.h)("phn-p-icon",{class:"more-menu-item-icon expandable-item",color:this.mouseOnButton===i.R.MORE?"brand":"default",name:"menuDotsVertical"})):(0,o.h)("div",{class:"expandable-item skeleton more-skeleton"},(0,o.h)("div",null)))),(0,a.i)(k)?(0,o.h)("div",{class:"backdrop".concat(this.scrolledPastHeader?" at-top":"")}):null,(0,a.i)(k)?(0,o.h)("div",{class:"overlay showing","aria-labelledby":this.overlayLabelledBy,"aria-hidden":!(0,a.i)(k),"data-phn-test-id":k},(0,o.h)("div",{class:"content-wrapper",onMouseEnter:function(){return e.handleOverlayMouseEnter()},onMouseLeave:function(){return e.handleOverlayMouseLeave()}},(0,o.h)(m,{activeRoutingKey:k,legacyShop:n,legacyMore:p,models:h}))):null)},Object.defineProperty(e.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),e}();v.style='@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.sc-phn-menu-desktop-level-1-h{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:1.625rem 0 0 1.25rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h{padding:1.3125rem 0 0 1.9375rem}}.sc-phn-menu-desktop-level-1-h .menu-bar.sc-phn-menu-desktop-level-1{height:100%}.sc-phn-menu-desktop-level-1-h nav.sc-phn-menu-desktop-level-1{height:100%}.sc-phn-menu-desktop-level-1-h .car-series-menu-item.sc-phn-menu-desktop-level-1{padding:0 0.25rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .car-series-menu-item.sc-phn-menu-desktop-level-1{padding:0 0.5625rem}}.sc-phn-menu-desktop-level-1-h .car-series-menu-item.sc-phn-menu-desktop-level-1 .car-series-skeleton.sc-phn-menu-desktop-level-1{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;background:#e3e4e5;margin-top:1rem;height:2.6875rem;width:5.5625rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .car-series-menu-item.sc-phn-menu-desktop-level-1 .car-series-skeleton.sc-phn-menu-desktop-level-1{margin-top:1.1875rem;width:6.5625rem}}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1{display:block;position:relative}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;background:#fff;left:-3.25rem;z-index:303;width:14.625rem;top:4.375rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1{width:17.125rem;top:5rem;left:-3.5rem}}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1 phn-myporsche-items.sc-phn-menu-desktop-level-1{-webkit-box-sizing:inherit;box-sizing:inherit;border:1px solid #e3e4e5;position:relative;background:#fff;padding:0.625rem 1.5rem 2.25rem 1.5rem}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1 phn-myporsche-items.sc-phn-menu-desktop-level-1:before{content:"";width:0;height:0;position:absolute;top:-0.375rem;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);border-style:solid;border-width:0 0.3125rem 0.3125rem;border-color:transparent transparent #e3e4e5}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1 phn-myporsche-items.sc-phn-menu-desktop-level-1:after{content:"";width:0;height:0;position:absolute;top:-0.3125rem;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);border-style:solid;border-width:0 0.3125rem 0.3125rem;border-color:transparent transparent #fff}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1{-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1.3125rem 0.5625rem 0}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1{padding:1.6875rem 0.875rem 0}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.menu-separator.sc-phn-menu-desktop-level-1{padding:0.875rem 0.5625rem 2.3125rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.menu-separator.sc-phn-menu-desktop-level-1{padding:1.0625rem 0.875rem 2.3125rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.menu-separator.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:1px;height:100%;background-color:#e3e4e5}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 phn-p-flex.sc-phn-menu-desktop-level-1{height:100%}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 .shops-menu-item-text.sc-phn-menu-desktop-level-1{padding-left:0.25rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 .shops-menu-item-icon.sc-phn-menu-desktop-level-1{display:block;width:1.5rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 .shops-menu-item-icon.sc-phn-menu-desktop-level-1{width:1.75rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .myporsche-menu-item.sc-phn-menu-desktop-level-1{height:100%;padding-bottom:0.875rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-menu-item.sc-phn-menu-desktop-level-1{margin-right:-0.5625rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-menu-item.sc-phn-menu-desktop-level-1{margin-right:-0.875rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-menu-item.sc-phn-menu-desktop-level-1 .more-menu-item-icon.sc-phn-menu-desktop-level-1{display:block;height:100%}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1,.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item-text.sc-phn-menu-desktop-level-1{font-size:1rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1,.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item-text.sc-phn-menu-desktop-level-1{font-size:1.25rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{background:#e3e4e5;height:0.875rem;margin-top:0.125rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:2.8125rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:3.4375rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:1.5rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .spacer.sc-phn-menu-desktop-level-1{-webkit-box-sizing:content-box;box-sizing:content-box;width:0.9375rem;padding:0}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .spacer.sc-phn-menu-desktop-level-1{width:0.625rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.sc-phn-menu-desktop-level-1{width:auto}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1{width:-webkit-min-content;width:-moz-min-content;width:min-content;padding-bottom:1.25rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1 .metafunctionalities-item.sc-phn-menu-desktop-level-1{height:auto;padding-top:0.375rem;padding-bottom:0}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1 .metafunctionalities-item.myporsche-container.sc-phn-menu-desktop-level-1{padding-top:0.625rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1 .metafunctionalities-item.myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1{top:3.5625rem;left:-3.5rem}.sc-phn-menu-desktop-level-1-h .backdrop.sc-phn-menu-desktop-level-1{position:fixed;left:0;right:0;background:rgba(0, 0, 0, 0.5);height:100vh;margin-top:1px;z-index:300}.sc-phn-menu-desktop-level-1-h .backdrop.at-top.sc-phn-menu-desktop-level-1{top:0}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1{display:block;width:100%;position:absolute;left:0;overflow:hidden;top:100%;z-index:301}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1:focus{outline:none}.sc-phn-menu-desktop-level-1-h .overlay.showing.sc-phn-menu-desktop-level-1{-webkit-animation:slideDown 0.54s ease-in-out;animation:slideDown 0.54s ease-in-out}.sc-phn-menu-desktop-level-1-h .overlay.hiding.sc-phn-menu-desktop-level-1{-webkit-animation:slideUp 0.43s ease-in-out;animation:slideUp 0.43s ease-in-out}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1{position:relative;background-color:#fff;border-top:1px solid #e3e4e5}@media (min-width: 1300px) and (max-width: 1759px){.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1{padding-bottom:5rem}}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1{padding-bottom:6rem}}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1 phn-shops-and-more-overview.sc-phn-menu-desktop-level-1{padding-top:2.5rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1 phn-shops-and-more-overview.sc-phn-menu-desktop-level-1{padding-top:3rem}}'},7864:function(e,t,n){n.r(t),n.d(t,{R:function(){return r},a:function(){return c},b:function(){return p},c:function(){return s},d:function(){return a},e:function(){return u},f:function(){return l},g:function(){return h},r:function(){return d}});var o=n(1252),i=function(e,t,n){if(n||2===arguments.length)for(var o,i=0,r=t.length;i<r;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))},r={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",MODELS:"models"};function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return i(i([],e,!0),(0,o.g)(t).split("/"),!0)}),[]).filter(Boolean).join("/")}function l(e){if((0,o.i)(e))return Object.values(r).find((function(t){return e.startsWith(t)}))}function a(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.apply(void 0,i([r.SERIES],e,!1))}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.apply(void 0,i([r.MODELS],e,!1))}function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.apply(void 0,i([r.DEALER_SEARCH],e,!1))}function u(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.apply(void 0,i([r.MY_PORSCHE],e,!1))}function h(e){return e.split("/").slice(-1)[0]}function d(e){return e.split("/").slice(0,-1).join("/")}},1957:function(e,t,n){n.r(t),n.d(t,{T:function(){return r}});var o=function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?n(e.value):i(e.value).then(s,l)}a((o=o.apply(e,t||[])).next())}))},i=function(e,t){var n,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(e){return function(t){return a([e,t])}}function a(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},r=function(){function e(e){this.timer=null,this.resolve=null,this.promise=null,this.delay=e}return e.prototype.set=function(e){var t=this;this.cancel(),this.promise=new Promise((function(n){t.resolve=n,t.resolve.called=!1,t.timer=setTimeout((function(){return o(t,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return"function"!==typeof this.resolve||!0===this.resolve.called?[3,2]:[4,e()];case 1:t.sent(),"function"===typeof this.resolve&&(this.resolve(),this.resolve.called=!0),t.label=2;case 2:return this.cancel(),[2]}}))}))}),t.delay)}))},e.prototype.cancel=function(){null!==this.timer&&(clearTimeout(this.timer),"function"===typeof this.timer.unref&&this.timer.unref(),this.timer=null),"function"===typeof this.resolve&&(!0!==this.resolve.called&&(this.resolve(),this.resolve.called=!0),this.resolve=null),this.promise=null},e}()}}]);