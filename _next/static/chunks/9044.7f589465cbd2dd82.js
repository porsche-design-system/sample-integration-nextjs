"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9044,122],{122:function(e,n,r){r.r(n),r.d(n,{a:function(){return E},b:function(){return p},c:function(){return h},d:function(){return l},e:function(){return u},f:function(){return d},g:function(){return o}});var t=r(5089),i=r(1790),a=r(9386),s=r(3555),c=r(7887);function u(e,n,r,a,u,l){var o=e.dealer,d=e.models,E=e.myPorsche,p=e.vehiclePurchase,h=e.shop,f=e.experience,v=e.services,m=e.legacyMore,S=n.savedDealerCookie,C=n.ppnDealers,I=t.n.state.app,g=null!==S?C[S.id]:void 0,R="en-SG"===r?m.children[2].children[2].link:void 0,y=[i.a.DEALER_SEARCH];void 0!==g&&y.push((0,i.c)(g.ppnDealer.id));var L=[{elementId:i.a.MODELS,routingKeys:[i.a.MODELS],analyticsId:d.id,text:d.text},{elementId:i.a.VEHICLE_PURCHASE,routingKeys:[i.a.VEHICLE_PURCHASE],analyticsId:p.id,text:p.text},{elementId:i.a.SERVICES,routingKeys:[i.a.SERVICES],analyticsId:v.id,text:v.text},{elementId:i.a.EXPERIENCE,routingKeys:[i.a.EXPERIENCE],analyticsId:f.id,text:f.text}],O={elementId:i.a.DEALER_SEARCH,routingKeys:y,analyticsId:o.id,text:o.text,link:R,iconRight:"en-SG"===r?"external":"arrow-head-right"};if(null!==h&&""!==h.text){var _={elementId:i.a.SHOP,routingKeys:[i.a.SHOP],analyticsId:h.id,text:h.text,link:I!==s.A.shop?h.link:void 0,datalayerEventAction:t.E.NAVIGATION_LINK_CLICK,iconRight:"external"};L.splice(2,0,_)}if(function(e,n){try{var r=(0,t.s)(e).country,i=!(0,t.i)(r)&&n;return(c.f.isDealerSearchChinaEnabled()||"CN"!==r)&&i}catch(e){}return!0}(r,l)){var x="en"===(0,t.s)(r).language?null==g?void 0:g.ppnDealer.name:(0,s.i)(null==g?void 0:g.ppnDealer.nameLocalized)?null==g?void 0:g.ppnDealer.nameLocalized:null==g?void 0:g.ppnDealer.name;(0,s.i)(x)&&(O.subtext=x)}else O.link=o.search.map.link,O.onClick=void 0;if(L.push(O),null!==E){var H=(0,s.I)(a),P=H?(0,s.z)(a,E.loggedInFallback):void 0;L.push({elementId:i.a.MY_PORSCHE,routingKeys:[i.a.MY_PORSCHE],analyticsId:E.id,text:E.text,subtext:P,showIconModifier:H&&u>0})}return L}function l(e,n,r,a,s,c,l){var o=(0,i.f)(c);switch(o){case c:break;case i.a.MODELS:return e.models.series.map(function(e){return{elementId:(0,i.h)(e.id),routingKeys:[(0,i.h)(e.id)],analyticsId:e.id,text:e.name,subtext:e.tags.map(function(e){return e.text}).join(" | "),renderSignatures:!0,datalayerEventAction:t.E.MODEL_RANGE_CLICK}});case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.SERVICES:case i.a.EXPERIENCE:var E=(0,i.r)(c),p=d(e,E,o);if(null!==p)return p.children.map(function(e){return{elementId:(0,i.e)(E,e.id),routingKeys:[(0,i.e)(E,e.id)],analyticsId:e.id,text:e.text,link:e.link}})}return u(e,n,r,a,s,l)}function o(e){switch((0,i.f)(e)){case e:break;case i.a.DEALER_SEARCH:return i.a.DEALER_SEARCH;case i.a.MODELS:return i.a.MODELS;case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.SERVICES:case i.a.EXPERIENCE:var n=(0,i.r)(e);return(0,i.g)(n)}return i.a.MAIN_MENU}function d(e,n,r){var c,u=e.vehiclePurchase,l=e.experience,o=e.shop,d=e.legacyMore,E=e.services,p=((c={})[i.a.VEHICLE_PURCHASE]=u,c[i.a.EXPERIENCE]=l,c[i.a.SHOP]=o,c[i.a.MORE]=d,c[i.a.SERVICES]=E,c)[r];if(null==p)return null;(0,s.i)(p.experienceName)&&(p.children=(0,a.a)().executeContentChange(p));var h=(0,i.g)(n);return h===r?p:(0,t.j)(p,h)}function E(e,n){if(!(0,s.i)(n))return"";var r=(0,i.f)(n);switch(r){case i.a.MODELS:return e.models.text;case i.a.DEALER_SEARCH:return e.dealer.details.backToSearch;case i.a.SHOP:case i.a.VEHICLE_PURCHASE:case i.a.MORE:case i.a.EXPERIENCE:var a=d(t.a.state,n,r);if(null!==a)return a.text}return""}function p(e,n,r){var a,s,c,u=e.dealer,l=e.myPorsche,o=e.models,d=e.vehiclePurchase,E=e.experience,p=e.shop,h=e.legacyMore,f=e.services;switch(r){case i.a.MORE:case i.a.SHOP:case i.a.EXPERIENCE:case i.a.SERVICES:case i.a.VEHICLE_PURCHASE:if(void 0===(c=((a={})[i.a.VEHICLE_PURCHASE]=d,a[i.a.EXPERIENCE]=E,a[i.a.SHOP]=p,a[i.a.MORE]=h,a[i.a.SERVICES]=f,a)[r]))break;var v=(0,i.g)(n);return v===r?null==c?void 0:c.text:null===(s=(0,t.j)(c,v))||void 0===s?void 0:s.text;case i.a.SERIES:case i.a.MODELS:var m=(0,i.g)(n);return void 0===(c=o.series.find(function(e){return m===e.id}))?o.text:null==c?void 0:c.id;case i.a.DEALER_SEARCH:return u.search.text;case i.a.MY_PORSCHE:return null==l?void 0:l.text}return""}function h(e,n,r){var c=t.a.state,u=c.myPorsche,l=c.models,o=t.n.state.loggedInState;if(e===i.a.MY_PORSCHE)return(0,s.I)(o)?(0,s.z)(o,(null==u?void 0:u.loggedInFallback)||""):"";if(e===i.a.DEALER_SEARCH){var d=a.d.state,E=d.savedDealerCookie,p=d.ppnDealers,h=null!==E?p[E.id]:void 0,f=r&&"en"===(0,t.s)(r).language?null==h?void 0:h.ppnDealer.name:(0,s.i)(null==h?void 0:h.ppnDealer.nameLocalized)?null==h?void 0:h.ppnDealer.nameLocalized:null==h?void 0:h.ppnDealer.name;return E?f:""}if(e===i.a.MODELS&&(0,s.i)(n)){var v=(0,i.g)(n),m=l.series.find(function(e){return v===e.id});if(m)return m.tags.map(function(e){return e.text}).join(" | ")}return""}},9044:function(e,n,r){r.r(n),r.d(n,{phn_side_drawer:function(){return l}});var t=r(6224),i=r(122),a=r(9386),s=r(5089),c=r(3555);r(1790),r(7887),r(4229);var u=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)0>n.indexOf(t[i])&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r},l=function(){function e(e){(0,t.r)(this,e),this.sideDrawerItemClick=(0,t.c)(this,"sideDrawerItemClick",7),this.activeRoutingKey=void 0,this.locale=void 0}return e.prototype.render=function(){var e=this,n=s.n.state,r=n.loggedInState,l=n.unreadMessagesCount,o=n.userConsent,d=(0,i.d)(s.a.state,a.d.state,this.locale,r,l,this.activeRoutingKey,o);return(0,t.h)("nav",null,d.map(function(n){var r=n.routingKeys,i=u(n,["routingKeys"]),a=r.includes(e.activeRoutingKey);return(0,t.h)(t.F,null,(0,t.h)("phn-side-drawer-item",Object.assign({key:i.elementId,onClick:function(){(0,c.i)(i.link)||a||e.sideDrawerItemClick.emit(r)},isActive:a,class:(0,c.G)(i.text)?"models":""},i)),a?(0,t.h)("div",{class:"item-highlight"}):null)}))},e}();l.style=".sc-phn-side-drawer-h{display:block;width:100%}.sc-phn-side-drawer-h .item-highlight.sc-phn-side-drawer{display:none}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:2.25rem}@media (min-width: 1000px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:0.85rem}}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:1rem}}.sc-phn-side-drawer-h phn-side-drawer-item.models.sc-phn-side-drawer{margin-top:0.5rem}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.models.sc-phn-side-drawer{margin-top:1rem}}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer:first-of-type{margin-top:0}"},1790:function(e,n,r){r.r(n),r.d(n,{R:function(){return i},a:function(){return c},b:function(){return m},c:function(){return d},d:function(){return v},e:function(){return u},f:function(){return l},g:function(){return h},h:function(){return o},i:function(){return p},j:function(){return E},r:function(){return f}});var t,i,a=r(3555),s=function(e,n,r){if(r||2==arguments.length)for(var t,i=0,a=n.length;i<a;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))},c={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};function u(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.reduce(function(e,n){return s(s([],e,!0),(0,a.g)(n).split("/"),!0)},[]).filter(Boolean).join("/")}function l(e){if((0,a.i)(e))return Object.values(c).find(function(n){return e.startsWith(n)})}function o(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u.apply(void 0,s([c.MODELS],e,!1))}function d(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u.apply(void 0,s([c.DEALER_SEARCH],e,!1))}function E(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u.apply(void 0,s([c.MY_PORSCHE],e,!1))}function p(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return u.apply(void 0,s([c.VEHICLE_PURCHASE],e,!1))}function h(e){return e.split("/").slice(-1)[0]}function f(e){return e.split("/").slice(0,-1).join("/")}function v(e){switch(l(e)){case c.MAIN_MENU:return 1;case e:return 2;default:return e.split("/").length+1}}function m(e){var n=f(e);return(0,a.i)(n)?n:c.MAIN_MENU}(t=i||(i={}))[t.LEVEL_ZERO=-1]="LEVEL_ZERO",t[t.LEVEL_ONE=0]="LEVEL_ONE",t[t.LEVEL_TWO=1]="LEVEL_TWO"}}]);