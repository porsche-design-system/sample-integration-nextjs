"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7062,1292],{2415:function(e,t,n){n.r(t),n.d(t,{f:function(){return u},g:function(){return l}});var r=n(8338),o=n(1252),i=n(7393),c=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?n(e.value):o(e.value).then(c,a)}s((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return s([e,t])}}function s(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},s=new Map;function u(e,t){return c(this,void 0,void 0,(function(){var n,c,u,l,h,m,f;return a(this,(function(a){switch(a.label){case 0:return n=(0,o.d)(e,t),void 0!==(c=s.get(n))?[2,c]:(u=(0,r.s)(t),l=u.country,h=u.language,[4,fetch("".concat(e,"/").concat("".concat(h,"-").concat(l),".json"),{headers:{"Cache-Control":"no-cache","Content-Type":"application/json"}})]);case 1:if(404===(m=a.sent()).status)throw new i.N("No content for locale ".concat(t," found"),i.a.NO_RESULTS);if(!m.ok)throw new i.N("Could not get content for locale ".concat(t),i.a.GENERAL);return[4,m.json()];case 2:return f=a.sent(),s.set(n,f),[2,f]}}))}))}function l(e,t){return c(this,void 0,void 0,(function(){var n,o,i;return a(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),n=(0,r.s)(t).country,(o=n).includes("-")&&(o=n.split("-")[0]),i="".concat(e,"/flags/").concat(o,".svg"),[4,fetch(i)];case 1:return c.sent().ok?[2,i]:[3,3];case 2:return c.sent(),[3,3];case 3:return[2,""]}}))}))}},1292:function(e,t,n){n.r(t),n.d(t,{c:function(){return s}});var r=n(8756),o=function(e){return!("isConnected"in e)||e.isConnected},i=function(e,t){var n;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){n=0,e.apply(void 0,r)}),t)}}((function(e){for(var t=0,n=e.keys();t<n.length;t++){var r=n[t];e.set(r,e.get(r).filter(o))}}),2e3),c=function(e){return"function"===typeof e?e():e},a=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},s=function(e,t){var n=function(e,t){void 0===t&&(t=function(e,t){return e!==t});var n=c(e),r=new Map(Object.entries(null!==n&&void 0!==n?n:{})),o={dispose:[],get:[],set:[],reset:[]},i=function(){var t;r=new Map(Object.entries(null!==(t=c(e))&&void 0!==t?t:{})),o.reset.forEach((function(e){return e()}))},s=function(e){return o.get.forEach((function(t){return t(e)})),r.get(e)},u=function(e,n){var i=r.get(e);t(n,i,e)&&(r.set(e,n),o.set.forEach((function(t){return t(e,n,i)})))},l="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(e,t){return s(t)},ownKeys:function(e){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return r.has(t)},set:function(e,t,n){return u(t,n),!0}}),h=function(e,t){return o[e].push(t),function(){a(o[e],t)}};return{state:l,get:s,set:u,on:h,onChange:function(t,n){var r=h("set",(function(e,r){e===t&&n(r)})),o=h("reset",(function(){return n(c(e)[t])}));return function(){r(),o()}},use:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.reduce((function(e,t){return t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e}),[]);return function(){return n.forEach((function(e){return e()}))}},dispose:function(){o.dispose.forEach((function(e){return e()})),i()},reset:i,forceUpdate:function(e){var t=r.get(e);o.set.forEach((function(n){return n(e,t,t)}))}}}(e,t);return n.use(function(){if("function"!==typeof r.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,r.a)();n&&function(e,t,n){var r=e.get(t);r?r.includes(n)||r.push(n):e.set(t,[n])}(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(r.f)),i(e)},reset:function(){e.forEach((function(e){return e.forEach(r.f)})),i(e)}}}()),n}},8250:function(e,t,n){n.r(t),n.d(t,{n:function(){return c}});var r=n(1292),o=n(7094),i=n(1252),c=(0,r.c)({loggedInState:i.L,unreadMessagesCount:i.D,userConsent:!1,env:(0,o.g)(i.o)})},7062:function(e,t,n){n.r(t),n.d(t,{phn_country_recommender:function(){return l}});var r=n(8756),o=n(2415),i=n(5542),c=n(8250),a=n(1252),s=(n(8338),n(7393),n(7094),n(1292),function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?n(e.value):o(e.value).then(c,a)}s((r=r.apply(e,t||[])).next())}))}),u=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return s([e,t])}}function s(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},l=function(){function e(e){(0,r.r)(this,e),this.bannerClosed=(0,r.c)(this,"bannerClosed",7),this.locale=void 0,this.content=void 0,this.flagURL=""}return e.prototype.localeWatcher=function(){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.setFlagURL()];case 1:return e.sent(),[2]}}))}))},e.prototype.setFlagURL=function(){return s(this,void 0,void 0,(function(){var e,t;return u(this,(function(n){switch(n.label){case 0:return e=(0,a.f)(c.n.state.env).FOOTER_ASSETS_URL,t=this,[4,(0,o.g)(e,this.locale)];case 1:return t.flagURL=n.sent(),[2]}}))}))},e.prototype.closeCountryRecommender=function(){i.g.pushDataLayerEvent(a.E.COUNTRY_RECOMMENDER_CLOSE,{componentClick:{clickElementId:"mainmenu.banner.close",clickElementName:"close",clickElementType:a.t.Button}}),this.el.classList.remove("showing"),this.el.classList.add("hiding")},e.prototype.componentWillLoad=function(){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.setFlagURL()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentDidLoad=function(){i.g.pushDataLayerEvent(a.E.COUNTRY_RECOMMENDER_LOAD,{componentClick:{clickElementId:"mainmenu.banner",clickElementName:"Country Recommender",clickElementType:a.t.Link}})},e.prototype.handleAnimationEnd=function(e){var t,n;"slideUp"===e.animationName?(null===(t=(0,a.n)(e.target))||void 0===t||t.classList.remove("hiding"),this.bannerClosed.emit()):"slideDown"===e.animationName&&(null===(n=(0,a.n)(e.target))||void 0===n||n.classList.remove("showing"))},e.prototype.sendDataLayerEvent=function(){i.g.pushDataLayerEvent(a.E.COUNTRY_RECOMMENDER_CHANGE,{componentClick:{clickElementId:this.content.change.id,clickElementName:this.content.change.text,clickElementType:a.t.Link,targetUrl:(0,a.f)(c.n.state.env).COUNTRY_SELECTOR_URL}})},e.prototype.render=function(){var e=this,t=this.content,n=t.statement,o=t.region,i=t.language,s=t.change;return(0,r.h)(r.H,{class:"showing"},(0,r.h)("phn-p-flex",{direction:"row",class:"limit-stretch",wrap:"wrap"},(0,a.i)(n)?(0,r.h)("phn-p-text",{theme:"dark",class:"statement",size:"inherit"},n):null,(0,r.h)("phn-p-flex-item",{class:"selector"},(0,r.h)("phn-p-flex",{direction:"row",wrap:"wrap"},(0,r.h)("phn-p-flex-item",{class:"flag-region"},(0,a.i)(this.flagURL)?(0,r.h)("phn-p-icon",{source:this.flagURL,class:"flag","aria-hidden":"true",size:"inherit"}):null,(0,a.i)(o)&&(0,a.i)(i)?(0,r.h)("phn-p-text",{theme:"dark",class:"language",size:"inherit"},o," / ",i):null),(0,r.h)("phn-p-link-pure",{theme:"dark",size:"inherit",class:"change",href:(0,a.f)(c.n.state.env).COUNTRY_SELECTOR_URL,onClick:function(){return e.sendDataLayerEvent()},aria:{"aria-label":"Change Region or Language"}},s.text))),(0,r.h)("phn-p-button-pure",{theme:"dark",icon:"close",onClick:function(){return e.closeCountryRecommender()},class:"close-button","hide-label":"true",size:"inherit"},"Close dialog")))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{locale:["localeWatcher"]}},enumerable:!1,configurable:!0}),e}();l.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.sc-phn-country-recommender-h{background-color:#0e1418;display:block;width:100%;overflow:hidden;color:white;line-height:1.25rem;font-size:0.75rem}.showing.sc-phn-country-recommender-h{-webkit-animation:slideDown 1s ease-in-out 0s;animation:slideDown 1s ease-in-out 0s}.hiding.sc-phn-country-recommender-h{-webkit-animation:slideUp 1s ease-in-out 0s;animation:slideUp 1s ease-in-out 0s}@media (min-width: 760px){.sc-phn-country-recommender-h{font-size:0.875rem}}@media (min-width: 1760px){.sc-phn-country-recommender-h{font-size:1rem}}.sc-phn-country-recommender-h .limit-stretch.sc-phn-country-recommender{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 7vw;padding-top:1.625rem;padding-bottom:0.625rem}@media (min-width: 1000px){.sc-phn-country-recommender-h .limit-stretch.sc-phn-country-recommender{padding-left:var(--scrollbar-width)}}@media (min-width: 1760px){.sc-phn-country-recommender-h .limit-stretch.sc-phn-country-recommender{margin:0 10vw}}@media (min-width: 1920px){.sc-phn-country-recommender-h .limit-stretch.sc-phn-country-recommender{margin:0 auto;width:96rem}}.sc-phn-country-recommender-h .statement.sc-phn-country-recommender{-ms-flex-order:0;order:0;margin-bottom:0.75rem;padding-top:0.125rem;max-width:calc(100% - 24px)}@media (min-width: 760px){.sc-phn-country-recommender-h .statement.sc-phn-country-recommender{margin-bottom:0;margin-right:1rem}}.sc-phn-country-recommender-h .flag.sc-phn-country-recommender{margin-right:0.5rem;max-height:1.5rem;width:1.25rem;height:1.25rem;border-radius:100%;border:1px solid #626669;background-color:#626669}@media (min-width: 1000px){.sc-phn-country-recommender-h .flag.sc-phn-country-recommender{width:1.375rem;height:1.375rem}}.sc-phn-country-recommender-h .flag-region.sc-phn-country-recommender{display:inherit}.sc-phn-country-recommender-h .language.sc-phn-country-recommender{padding-right:1.5rem;padding-top:0.125rem;padding-bottom:1rem}.sc-phn-country-recommender-h .selector.sc-phn-country-recommender{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-order:2;order:2;width:100%}@media (min-width: 760px){.sc-phn-country-recommender-h .selector.sc-phn-country-recommender{-ms-flex-order:1;order:1;width:auto}}.sc-phn-country-recommender-h .change.sc-phn-country-recommender{padding-top:0.125rem;padding-bottom:1rem}.sc-phn-country-recommender-h .close-button.sc-phn-country-recommender{margin-left:auto;-ms-flex-order:1;order:1;font-size:1rem}@media (min-width: 760px){.sc-phn-country-recommender-h .close-button.sc-phn-country-recommender{-ms-flex-order:2;order:2}}"}}]);