(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{eEYr:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return n}));var n=function(t,e,i){t.addEventListener("click",(function(e){return p(e,t)}),!0),t.addEventListener("click",(function(n){return o(n,t,e,i)}))},o=function(t,e,i,n){var o=e.closest("form"),p=i(),r=n();o&&!r&&window.setTimeout((function(){if(!t.defaultPrevented){var e=document.createElement("button");e.type=p,e.style.display="none",o.appendChild(e),e.addEventListener("click",(function(t){t.stopPropagation()})),e.click(),e.remove()}}),1)},p=function(t,e){t.target!==e&&(t.stopPropagation(),t.preventDefault(),e.click())}},kpA7:function(t,e,i){"use strict";i.r(e),i.d(e,"p_text_field_wrapper",(function(){return a}));var n=i("zRj4"),o=i("eEYr"),p=i("NMfP"),r=(i("rAf9"),i("FKEe")),a=function(){function t(t){var e=this;Object(n.l)(this,t),this.label="",this.description="",this.state="none",this.message="",this.hideLabel=!1,this.showPassword=!1,this.searchButtonType="submit",this.setState=function(){e.disabled=e.input.disabled,e.readonly=e.input.readOnly},this.labelClick=function(){e.input.focus()},this.togglePassword=function(){e.input.type="password"===e.input.type?"text":"password",e.showPassword=!e.showPassword,e.labelClick()},this.onSubmitHandler=function(t){e.isInputTypeSearch&&Object(o.a)(t,e.host,(function(){return e.searchButtonType}),(function(){return e.disabled}))}}return t.prototype.componentWillLoad=function(){this.setInput(),this.setAriaAttributes(),this.setState(),this.updatePasswordToggleable(),this.initInputTypeSearch(),this.bindStateListener(),this.addSlottedStyles()},t.prototype.componentDidUpdate=function(){this.setAriaAttributes()},t.prototype.render=function(){var t,e,i,o,p=Object(n.f)("text-field-wrapper__container"),r=Object(n.f)("text-field-wrapper__label"),a=Object.assign(((t={})[Object(n.f)("text-field-wrapper__label-text")]=!0,t[Object(n.f)("text-field-wrapper__label-text--disabled")]=this.disabled,t),Object(n.k)("text-field-wrapper__label-text-",this.hideLabel,["hidden","visible"])),s=Object.assign(((e={})[Object(n.f)("text-field-wrapper__description-text")]=!0,e[Object(n.f)("text-field-wrapper__description-text--disabled")]=this.disabled,e),Object(n.k)("text-field-wrapper__description-text-",this.hideLabel,["hidden","visible"])),l=((i={})[Object(n.f)("text-field-wrapper__fake-input")]=!0,i[Object(n.f)("text-field-wrapper__fake-input--"+this.state)]="none"!==this.state,i[Object(n.f)("text-field-wrapper__fake-input--disabled")]=this.disabled,i[Object(n.f)("text-field-wrapper__fake-input--readonly")]=this.readonly,i),d=Object(n.f)("text-field-wrapper__button"),c=((o={})[Object(n.f)("text-field-wrapper__message")]=!0,o[Object(n.f)("text-field-wrapper__message--"+this.state)]="none"!==this.state,o);return Object(n.j)(n.b,null,Object(n.j)("div",{class:p},Object(n.j)("label",{class:r},this.isLabelVisible&&Object(n.j)("p-text",{class:a,tag:"span",color:"inherit",onClick:this.labelClick},this.label||Object(n.j)("span",null,Object(n.j)("slot",{name:"label"}))),this.isDescriptionVisible&&Object(n.j)("p-text",{class:s,tag:"span",color:"inherit",size:"x-small",onClick:this.labelClick},this.description||Object(n.j)("span",null,Object(n.j)("slot",{name:"description"}))),Object(n.j)("span",{class:l},Object(n.j)("slot",null))),this.isPasswordToggleable&&Object(n.j)("button",{type:"button",class:d,onClick:this.togglePassword,disabled:this.disabled},Object(n.j)("p-icon",{name:this.showPassword?"view-off":"view",color:"inherit"})),this.isInputTypeSearch&&Object(n.j)("button",{onClick:this.onSubmitHandler,type:"submit",class:d,disabled:this.disabled||this.readonly},Object(n.j)("p-icon",{name:"search",color:"inherit"}))),this.isMessageVisible&&Object(n.j)("p-text",{class:c,color:"inherit",role:"error"===this.state?"alert":null},this.message||Object(n.j)("span",null,Object(n.j)("slot",{name:"message"}))))},Object.defineProperty(t.prototype,"isLabelVisible",{get:function(){return!!this.label||!!this.host.querySelector('[slot="label"]')},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isDescriptionVisible",{get:function(){return!!this.description||!!this.host.querySelector('[slot="description"]')},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isMessageDefined",{get:function(){return!!this.message||!!this.host.querySelector('[slot="message"]')},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isMessageVisible",{get:function(){return["success","error"].includes(this.state)&&this.isMessageDefined},enumerable:!1,configurable:!0}),t.prototype.setInput=function(){this.input=this.host.querySelector("input")},t.prototype.setAriaAttributes=function(){this.label&&this.message?this.input.setAttribute("aria-label",this.label+". "+this.message):this.label&&this.description?this.input.setAttribute("aria-label",this.label+". "+this.description):this.label&&this.input.setAttribute("aria-label",this.label),"error"===this.state?this.input.setAttribute("aria-invalid","true"):this.input.removeAttribute("aria-invalid")},t.prototype.bindStateListener=function(){Object(r.a)(this.input,"border-top-color",this.setState)},t.prototype.updatePasswordToggleable=function(){this.isPasswordToggleable="password"===this.input.type,this.isPasswordToggleable&&(this.input.style.cssText="padding-right: 3rem !important")},t.prototype.initInputTypeSearch=function(){this.isInputTypeSearch="search"===this.input.type,this.isInputTypeSearch&&(this.input.style.cssText="padding-right: 3rem !important")},t.prototype.addSlottedStyles=function(){var t=this.host.tagName.toLowerCase(),e=t+" a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    "+t+" a:hover {\n      color: #d5001c;\n    }\n\n    "+t+" a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n\n    "+t+" input::-webkit-outer-spin-button {\n      appearance: none !important;\n      -webkit-appearance: none !important;\n    }\n\n    "+t+" input::-webkit-inner-spin-button {\n      appearance: none !important;\n      -webkit-appearance: none !important;\n    }\n\n    "+t+" input[type=password]::-webkit-contacts-auto-fill-button,\n    "+t+" input[type=password]::-webkit-credentials-auto-fill-button {\n      margin-right: 2rem;\n    }\n\n    "+t+" input[type=search]::-webkit-search-cancel-button {\n      margin-right: 2rem;\n    }\n    ";Object(p.a)(this.host,e)},Object.defineProperty(t.prototype,"host",{get:function(){return Object(n.i)(this)},enumerable:!1,configurable:!0}),t}();a.style=':host{display:block}::slotted(input){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;text-indent:0 !important;color:#000 !important;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(input:focus){outline:#00d5b9 solid 2px !important}::slotted(input:-moz-read-only:focus){outline:none !important}::slotted(input:read-only:focus){outline:none !important}::slotted(input:not(:disabled):-moz-read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(input:not(:disabled):read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(input:disabled){border-top-color:rgba(255, 255, 255, 0.02) !important;color:#96989a !important;-webkit-text-fill-color:#96989a !important;cursor:not-allowed !important}::slotted(input[type=number]){-webkit-appearance:none !important;-moz-appearance:textfield !important}::slotted(input[type=number]::-webkit-outer-spin-button),::slotted(input[type=number]::-webkit-inner-spin-button){-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;margin:0 !important}.p-text-field-wrapper__container{position:relative;display:block}.p-text-field-wrapper__label{display:block}.p-text-field-wrapper__label-text,.p-text-field-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__label-text--disabled,.p-text-field-wrapper__description-text--disabled{color:#96989a}.p-text-field-wrapper__label-text--visible,.p-text-field-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden,.p-text-field-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-text-field-wrapper__label-text--visible-xs,.p-text-field-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-xs,.p-text-field-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-text-field-wrapper__label-text--visible-s,.p-text-field-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-s,.p-text-field-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-text-field-wrapper__label-text--visible-m,.p-text-field-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-m,.p-text-field-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-text-field-wrapper__label-text--visible-l,.p-text-field-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-l,.p-text-field-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-text-field-wrapper__label-text--visible-xl,.p-text-field-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-xl,.p-text-field-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-text-field-wrapper__description-text{color:#626669}.p-text-field-wrapper__description-text--disabled{color:#96989a}.p-text-field-wrapper__label-text~.p-text-field-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-text-field-wrapper__fake-input{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-text-field-wrapper__fake-input:hover:not(.p-text-field-wrapper__fake-input--disabled):not(.p-text-field-wrapper__fake-input--readonly):not(.p-text-field-wrapper__fake-input--success):not(.p-text-field-wrapper__fake-input--error),.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input:not(.p-text-field-wrapper__fake-input--disabled):not(.p-text-field-wrapper__fake-input--readonly):not(.p-text-field-wrapper__fake-input--success):not(.p-text-field-wrapper__fake-input--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-text-field-wrapper__fake-input--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-text-field-wrapper__fake-input--readonly{-webkit-box-shadow:inset 0 0 0 1px #ebebeb;box-shadow:inset 0 0 0 1px #ebebeb;background-color:#ebebeb}.p-text-field-wrapper__fake-input--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-text-field-wrapper__fake-input--success:hover,.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-text-field-wrapper__fake-input--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-text-field-wrapper__fake-input--error:hover,.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-text-field-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__message--success{color:#018a16}.p-text-field-wrapper__message--error{color:#e00000}.p-text-field-wrapper__button{position:absolute;bottom:0;right:0;margin:0;width:3rem;height:3rem;padding:0.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;background:transparent;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__button::-moz-focus-inner{border:0}.p-text-field-wrapper__button:hover{color:#d5001c}.p-text-field-wrapper__button:active{color:#d5001c}.p-text-field-wrapper__button:focus{color:#00d5b9}.p-text-field-wrapper__button:disabled{color:#96989a;cursor:not-allowed !important}'}}]);