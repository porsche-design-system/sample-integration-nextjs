(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{1937:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms",function(){return t(6291)}])},428:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r,i=t(5893),a=t(8624),s=(t(7294),t(1799)),l=t(9534),d=t(1664),c=t.n(d),o=function(e){var n=e.href,t=(0,l.Z)(e,["href"]);return(0,i.jsx)(a.O9,{children:(0,i.jsx)(c(),(0,s.Z)({href:n,as:"".concat(null!==(r="/sample-integration-nextjs")?r:"").concat(n)},t))})},h=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.r6,{variant:"headline-2",align:"center",children:"Example usage of the Porsche-Design-System NextJS"}),(0,i.jsx)(a.S1,{className:"divider"}),(0,i.jsx)(o,{href:"/collection",children:"Collection"}),(0,i.jsx)(o,{href:"/forms",children:"Forms"}),(0,i.jsx)(o,{href:"/utilities",children:"Utilities"}),(0,i.jsx)(o,{href:"/phn-header",children:"Phn Header"}),(0,i.jsx)(a.S1,{className:"divider"})]})}},6291:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{default:function(){return h}});var a=t(5893),s=t(8624),l=t(7294),d=t(428),c=t(9008),o=t.n(c),h=function(){var e=(0,l.useState)("Change this Headline by selecting"),n=e[0],t=e[1],r=(0,l.useState)(!1),c=r[0],h=r[1],u=(0,l.useState)(!1),x=u[0],j=u[1],f=(0,l.useState)("Change this Headline by typing"),p=f[0],m=f[1],v=(0,l.useState)(1),b=v[0],S=v[1],y=(0,l.useState)([{state:"current",name:"Enter personal details"},{name:"Confirm e-mail"},{name:"Set password"}]),g=y[0],_=y[1],C=(0,l.useCallback)((function(e){S(e.detail.value)}),[]),w=function(e){m(e.target.value)},N=function(e){return e.findIndex((function(e){return"current"===e.state}))},J=function(e){var n=i(g),t=N(n);"next"===e?(n[t].state="complete",n[t+1].state="current"):(delete n[t].state,n[t-1].state="current"),_(n)};return(0,a.jsxs)("div",{className:"pageLayout",children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"NextJS sample project - Forms"})}),(0,a.jsx)(d.Z,{}),(0,a.jsxs)(s.rY,{direction:"column",children:[(0,a.jsx)(s._J,{children:(0,a.jsx)(s.r6,{variant:"headline-3",children:"Form examples"})}),(0,a.jsx)(s._J,{children:(0,a.jsx)(s.S1,{className:"divider"})}),(0,a.jsxs)(s._J,{children:[(0,a.jsx)(s.r6,{variant:"headline-4",children:n}),(0,a.jsx)("form",{children:(0,a.jsx)(s.ow,{children:(0,a.jsxs)("select",{"data-testid":"select",value:n,onChange:function(e){t(e.target.value)},children:[(0,a.jsx)("option",{value:"Headline A",children:"A"}),(0,a.jsx)("option",{value:"Headline B",children:"B"}),(0,a.jsx)("option",{value:"Headline C",children:"C"})]})})})]}),(0,a.jsxs)(s._J,{children:[(0,a.jsxs)(s.eT,{style:{marginTop:"1rem"},value:b,onSegmentedControlChange:C,"aria-label":"Choose an Option",children:[(0,a.jsx)(s.QI,{value:1,children:"Option 1"}),(0,a.jsx)(s.QI,{value:2,children:"Option 2"}),(0,a.jsx)(s.QI,{value:3,children:"Option 3"}),(0,a.jsx)(s.QI,{value:4,children:"Option 4"}),(0,a.jsx)(s.QI,{value:5,children:"Option 5"})]}),(0,a.jsxs)(s.T2,{children:["Current value of segmented-control: ",b]})]}),(0,a.jsx)(s._J,{children:(0,a.jsx)(s.S1,{className:"divider"})}),(0,a.jsxs)(s._J,{children:[(0,a.jsx)(s.V5,{onStepChange:function(e){for(var n=e.detail.activeStepIndex,t=i(g),r=n+1;r<t.length;r++)delete t[r].state;t[n].state="current",_(t)},children:g.map((function(e){var n=e.state,t=e.name;return(0,a.jsx)(s.v,{state:n,children:t},t)}))}),["A form with personal details could be displayed here.","A form with a verification code input field could be displayed here.","A form with a password input field could be displayed here."].map((function(e,n){return N(g)===n&&(0,a.jsx)(s.T2,{children:e},n)})),(0,a.jsxs)(s.S5,{children:[(0,a.jsx)(s.wd,{icon:"arrow-head-left",variant:"tertiary",onClick:function(){return J("prev")},disabled:0===N(g),children:"Previous Step"}),(0,a.jsx)(s.wd,{variant:"primary",disabled:N(g)===g.length-1,onClick:function(){return J("next")},children:"Next Step"})]})]}),(0,a.jsx)(s._J,{children:(0,a.jsx)(s.S1,{className:"divider"})}),(0,a.jsxs)(s._J,{children:[c?(0,a.jsx)(s.r6,{variant:"headline-4",children:"Checkbox Works"}):"",(0,a.jsx)(s._R,{label:"Some label",hideLabel:!1,children:(0,a.jsx)("input",{"data-testid":"checkbox",type:"checkbox",name:"TestBox",onInput:function(e){h(!c)}})})]}),(0,a.jsxs)(s._J,{className:"contentWrapperSmall",children:[x?(0,a.jsx)(s.r6,{variant:"headline-4",children:"Radio Works"}):"",(0,a.jsx)(s.Es,{label:"Some label",hideLabel:!1,children:(0,a.jsx)("input",{"data-testid":"radiobutton",type:"radio",name:"RadioButton",onInput:function(e){j(!0)}})})]}),(0,a.jsx)(s._J,{children:(0,a.jsx)(s.S1,{className:"divider"})}),(0,a.jsx)(s._J,{children:(0,a.jsx)("form",{children:(0,a.jsx)(s.Ss,{label:"Test TextArea",hideLabel:!1,children:(0,a.jsx)("textarea",{name:"Testarea"})})})}),(0,a.jsxs)(s._J,{className:"contentWrapperSmall",children:[(0,a.jsx)(s.r6,{variant:"headline-4",children:p}),(0,a.jsx)(s.ZI,{label:"Test TextField",hideLabel:!1,children:(0,a.jsx)("input",{"data-testid":"input",type:"text",name:"Textfield",onChange:w})})]}),(0,a.jsx)(s._J,{className:"contentWrapperSmall",children:(0,a.jsx)("form",{children:(0,a.jsx)(s.rY,{children:(0,a.jsx)(s._J,{children:(0,a.jsxs)(s.ZI,{children:[(0,a.jsxs)("span",{slot:"label",children:["Some label with a"," ",(0,a.jsx)("a",{"data-testid":"slottedHref",href:"https://designsystem.porsche.com",children:"Slotted Link"}),"."]}),(0,a.jsx)("input",{"data-testid":"slottedInput",type:"text","aria-invalid":!0,name:"some-name",onChange:w})]})})})})})]})]})}}},function(e){e.O(0,[378,774,888,179],(function(){return n=1937,e(e.s=n);var n}));var n=e.O();_N_E=n}]);