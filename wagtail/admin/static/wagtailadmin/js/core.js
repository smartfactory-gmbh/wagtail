!function(){"use strict";var e,t={94639:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var a=o(n(73609));window.addMessage=function(e,t){a.default(".messages").addClass("new").empty().append('<ul><li class="'+e+'">'+t+"</li></ul>");var n=setTimeout((function(){a.default(".messages").addClass("appear"),clearTimeout(n)}),100)},window.escapeHtml=function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(function(e){return t[e]}))},window.initTagField=function(e,t,n){var o=Object.assign({autocomplete:{source:t},preprocessTag:function(e){return e&&'"'!==e[0]&&e.indexOf(" ")>-1?'"'+e+'"':e}},n);a.default("#"+e).tagit(o)},window.enableDirtyFormCheck=function(e,t){var n=a.default(e),o=t.confirmationMessage||" ",i=t.alwaysDirty||!1,s=null,r=!1;n.on("submit",(function(){r=!0})),setTimeout((function(){s=n.serialize()}),1e4),window.addEventListener("beforeunload",(function(e){var t=s&&n.serialize()!==s;if(!r&&(i||t))return e.returnValue=o,o}))},a.default((function(){a.default("body").addClass("ready"),a.default(document).on("click","#nav-toggle",(function(){a.default("body").toggleClass("nav-open"),a.default("body").hasClass("nav-open")?a.default("body").removeClass("nav-closed"):a.default("body").addClass("nav-closed")})),a.default(document).on("click","#account-settings",(function(){a.default(".nav-main").toggleClass("nav-main--open-footer"),a.default(this).find("em").toggleClass("icon-arrow-down-after icon-arrow-up-after")}));var e=function(){a.default(".nav-wrapper").css("min-height",a.default(window).height())};if(e(),a.default(window).on("resize",(function(){e()})),function(){var e=a.default("[data-animated-logo-container]"),t=0,n="",o=0;function i(){e.removeClass("logo-playful").addClass("logo-serious")}e.on("mousemove",(function(a){var i,s=a.pageX;s>t?i="r":s<t&&(i="l"),i!==n&&""!==n&&(o+=1),o>8&&e.removeClass("logo-serious").addClass("logo-playful"),t=s,n=i})),e.on("mouseleave",(function(){o=0,i()})),i()}(),a.default(document).on("focus mouseover","input,textarea,select",(function(){a.default(this).closest(".field").addClass("focused"),a.default(this).closest("fieldset").addClass("focused"),a.default(this).closest("li").addClass("focused")})),a.default(document).on("blur mouseout","input,textarea,select",(function(){a.default(this).closest(".field").removeClass("focused"),a.default(this).closest("fieldset").removeClass("focused"),a.default(this).closest("li").removeClass("focused")})),window.location.hash){var t=window.location.hash.replace(/[^\w\-#]/g,"");a.default('a[href="'+t+'"]').tab("show")}if(a.default(document).on("click",".tab-nav a",(function(e){e.preventDefault(),a.default(this).tab("show"),window.history.replaceState(null,null,a.default(this).attr("href"))})),a.default(document).on("click",".tab-toggle",(function(e){e.preventDefault(),a.default('.tab-nav a[href="'+a.default(this).attr("href")+'"]').trigger("click")})),a.default(".dropdown").each((function(){var e=a.default(this);a.default(".dropdown-toggle",e).on("click",(function(t){t.stopPropagation(),e.toggleClass("open"),e.hasClass("open")?a.default(document).on("click.dropdown.cancel",(function(t){var n=t.relatedTarget||t.toElement;a.default(n).parents().is(e)||(e.removeClass("open"),a.default(document).off("click.dropdown.cancel"))})):a.default(document).off("click.dropdown.cancel")}))})),a.default(".drop-zone").on("dragover",(function(){a.default(this).addClass("hovered")})).on("dragleave dragend drop",(function(){a.default(this).removeClass("hovered")})),window.headerSearch){var n=0,o=0,i=a.default(window.headerSearch.termInput),s=i.parent();i.on("keyup cut paste change",(function(){clearTimeout(i.data("timer")),i.data("timer",setTimeout(r,200))})),i.trigger("focus");var r=function(){var e="icon-spinner",t=i.val();if(l("q").trim()!==t.trim()){s.addClass(e);var r=++o;a.default.ajax({url:window.headerSearch.url,data:{q:t},success:function(e){r>n&&(n=r,a.default(window.headerSearch.targetOutput).html(e).slideDown(800),window.history.replaceState(null,null,"?q="+t))},complete:function(){window.wagtail.ui.initDropDowns(),s.removeClass(e)}})}},l=function(e){var t=new RegExp("[\\?&]"+e+"=([^]*)").exec(window.location.search);return t?t[1]:""}}a.default(document).on("shown.bs.tab",(function(){a.default("textarea[data-autosize-on]").each((function(){autosize.update(a.default(this).get())}))})),a.default(document).on("click","button.button-longrunning",(function(){var e=a.default(this),t=a.default("em",e),n="disabledtimeout";window.cancelSpinner=function(){e.prop("disabled","").removeData(n).removeClass("button-longrunning-active"),e.data("clicked-text")&&t.text(e.data("original-text"))};var o=e.closest("form").get(0);if(!o||!o.checkValidity||o.noValidate||o.checkValidity())var i=setTimeout((function(){e.data(n)||(e.data(n,setTimeout((function(){clearTimeout(e.data(n)),cancelSpinner()}),3e4)),e.data("clicked-text")&&t.length&&(e.data("original-text",t.text()),t.text(e.data("clicked-text"))),e.addClass("button-longrunning-active").prop("disabled","true")),clearTimeout(i)}),10)}))}));var i=window.wagtail||{};i.ui||(i.ui={});var s="listing__item--active",r="icon-arrow-down",l="icon-arrow-up",u="is-open",d="click",c="[data-dropdown-toggle]",f="aria-hidden",p=13,h=32,w={dropDowns:[],closeAllExcept:function(e){var t=this.dropDowns.indexOf(e);this.dropDowns.forEach((function(e,n){n!==t&&e.state.isOpen&&e.closeDropDown()}))},add:function(e){this.dropDowns.push(e)},get:function(){return this.dropDowns},getByIndex:function(e){return this.dropDowns[e]},getOpenDropDown:function(){var e=null;return this.dropDowns.forEach((function(t){t.state.isOpen&&(e=t)})),e}};function v(e,t){e&&t||!("error"in console)?(this.el=e,this.$parent=a.default(e).parents("[data-listing-page-title]"),this.state={isOpen:!1},this.registry=t,this.clickOutsideDropDown=this.clickOutsideDropDown.bind(this),this.closeDropDown=this.closeDropDown.bind(this),this.openDropDown=this.openDropDown.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this),e.addEventListener(d,this.handleClick),e.addEventListener("keydown",this.handleKeyEvent),this.$parent.data("close",this.closeDropDown)):console.error("A dropdown was created without an element or the DropDownController.\nMake sure to pass both to your component.")}function g(){var e=new v(this,w);w.add(e)}function m(e){if(27===e.which){var t=w.getOpenDropDown();t&&t.closeDropDown()}}function D(){a.default("[data-dropdown]").each(g),a.default(document).on("keydown",m)}function b(e,t){return[].slice.call(e.querySelectorAll(t))}v.prototype={handleKeyEvent:function(e){[h,p].indexOf(e.which)>-1&&(e.preventDefault(),this.handleClick(e))},handleClick:function(e){this.state.isOpen?this.closeDropDown(e):this.openDropDown(e)},openDropDown:function(e){e.stopPropagation(),e.preventDefault();var t=this.el,n=this.$parent,o=t.querySelector(c);this.state.isOpen=!0,this.registry.closeAllExcept(this),t.classList.add(u),t.setAttribute(f,!1),o.classList.remove(r),o.classList.add(l),document.addEventListener(d,this.clickOutsideDropDown,!1),n.addClass(s)},closeDropDown:function(){this.state.isOpen=!1;var e=this.el,t=this.$parent,n=e.querySelector(c);document.removeEventListener(d,this.clickOutsideDropDown,!1),e.classList.remove(u),n.classList.add(r),n.classList.remove(l),e.setAttribute(f,!0),t.removeClass(s)},clickOutsideDropDown:function(e){var t=this.el,n=e.relatedTarget||e.toElement;a.default(n).parents().is(t)||this.closeDropDown()}},a.default(document).ready(D),i.ui.initDropDowns=D,i.ui.DropDownController=w,a.default(document).ready((function(){b(document,".button-select").forEach((function(e){var t=e.querySelector('input[type="hidden"]');b(e,".button-select__option").forEach((function(n){n.addEventListener("click",(function(o){o.preventDefault(),t.value=n.value,b(e,".button-select__option--selected").forEach((function(e){e.classList.remove("button-select__option--selected")})),n.classList.add("button-select__option--selected")}))}))}))})),window.wagtail=i},73609:function(e){e.exports=jQuery}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(t,n,a,i){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],i=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,i<s&&(s=i));r&&(e.splice(u--,1),t=a())}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={321:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,s=n[0],r=n[1],l=n[2],u=0;for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(l)var d=l(o);for(t&&t(n);u<s.length;u++)i=s[u],o.o(e,i)&&e[i]&&e[i][0](),e[s[u]]=0;return o.O(d)},n=self.webpackChunkwagtail=self.webpackChunkwagtail||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.O(void 0,[751],(function(){return o(94639)}));var a=o.O(void 0,[751],(function(){return o(90971)}));a=o.O(a)}();
//# sourceMappingURL=core.js.map