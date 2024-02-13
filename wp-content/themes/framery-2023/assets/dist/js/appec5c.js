(()=>{"use strict";var e,t={724:()=>{class e{constructor(){this.figcaptionId=0,this.userSettings=null}init(e,t,i){this.userSettings=i;const n=document.createElement("figure"),r=document.createElement("figcaption"),o=document.createElement("img"),a=e.querySelector("img"),s=document.createElement("div");if(n.style.opacity="0",a&&(o.alt=a.alt||""),o.setAttribute("src",""),o.setAttribute("data-src",e.href),e.hasAttribute("data-srcset")&&o.setAttribute("data-srcset",e.getAttribute("data-srcset")),n.appendChild(o),this.userSettings.captions){let t;"function"==typeof this.userSettings.captionText?t=this.userSettings.captionText(e):"self"===this.userSettings.captionsSelector&&e.getAttribute(this.userSettings.captionAttribute)?t=e.getAttribute(this.userSettings.captionAttribute):"img"===this.userSettings.captionsSelector&&a&&a.getAttribute(this.userSettings.captionAttribute)&&(t=a.getAttribute(this.userSettings.captionAttribute)),this.userSettings.captionHTML?r.innerHTML=t:r.textContent=t,t&&(r.id=`tobii-figcaption-${this.figcaptionId}`,n.appendChild(r),o.setAttribute("aria-labelledby",r.id),++this.figcaptionId)}t.appendChild(n),s.className="tobii__loader",s.setAttribute("role","progressbar"),s.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),t.appendChild(s),t.setAttribute("data-type","image"),t.classList.add("tobii-image")}onPreload(e){this.onLoad(e)}onLoad(e){const t=e.querySelector("img");if(!t.hasAttribute("data-src"))return;const i=e.querySelector("figure"),n=e.querySelector(".tobii__loader");t.addEventListener("load",(()=>{e.removeChild(n),i.style.opacity="1"})),t.addEventListener("error",(()=>{e.removeChild(n),i.style.opacity="1"})),t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src"),t.hasAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"))}onLeave(e){}onCleanup(e){}onReset(){this.figcaptionId=0}}class t{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const n=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href");t.setAttribute("data-HREF",n),e.getAttribute("data-allow")&&t.setAttribute("data-allow",e.getAttribute("data-allow")),e.hasAttribute("data-width")&&t.setAttribute("data-width",`${e.getAttribute("data-width")}`),e.hasAttribute("data-height")&&t.setAttribute("data-height",`${e.getAttribute("data-height")}`),t.setAttribute("data-type","iframe"),t.classList.add("tobii-iframe")}onPreload(e){}onLoad(e){let t=e.querySelector("iframe");const i=document.createElement("div");if(i.className="tobii__loader",i.setAttribute("role","progressbar"),i.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),e.appendChild(i),null==t){t=document.createElement("iframe");const i=e.getAttribute("data-href");t.setAttribute("frameborder","0"),t.setAttribute("src",i),t.setAttribute("allowfullscreen",""),i.indexOf("youtube.com")>-1?t.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"):i.indexOf("vimeo.com")>-1?t.setAttribute("allow","autoplay; picture-in-picture"):e.hasAttribute("data-allow")&&t.setAttribute("allow",e.getAttribute("data-allow")),e.getAttribute("data-width")&&(t.style.maxWidth=`${e.getAttribute("data-width")}`),e.getAttribute("data-height")&&(t.style.maxHeight=`${e.getAttribute("data-height")}`),t.style.opacity="0",e.appendChild(t),t.addEventListener("load",(()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)})),t.addEventListener("error",(()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)}))}else t.setAttribute("src",e.getAttribute("data-href"))}onLeave(e){}onCleanup(e){const t=e.querySelector("iframe");t.setAttribute("src",""),t.style.opacity="0"}onReset(){}}class i{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const n=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href"),r=document.querySelector(n).cloneNode(!0);if(!r)throw new Error(`Ups, I can't find the target ${n}.`);t.appendChild(r),t.setAttribute("data-type","html"),t.classList.add("tobii-html")}onPreload(e){}onLoad(e,t){const i=e.querySelector("video");i&&(i.hasAttribute("data-time")&&i.readyState>0&&(i.currentTime=i.getAttribute("data-time")),this.userSettings.autoplayVideo&&i.play());const n=e.querySelector("audio");n&&this.userSettings.autoplayAudio&&n.play(),e.classList.add("tobii-group-"+t)}onLeave(e){const t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime));const i=e.querySelector("audio");i&&(i.paused||i.pause())}onCleanup(e){const t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){const i=t.cloneNode(!0);this._removeSources(t),t.load(),t.parentNode.removeChild(t),e.appendChild(i)}}onReset(){}_removeSources(e){const t=e.querySelectorAll("src");t&&t.forEach((e=>{e.setAttribute("src","")}))}}class n{constructor(){this.playerId=0,this.PLAYER=[],this.userSettings=null}init(e,t,i){this.userSettings=i;const n=document.createElement("div");t.appendChild(n),this.PLAYER[this.playerId]=new window.YT.Player(n,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",this.playerId),t.setAttribute("data-type","youtube"),t.classList.add("tobii-youtube"),this.playerId++}onPreload(e){}onLoad(e){this.userSettings.autoplayVideo&&this.PLAYER[e.getAttribute("data-player")].playVideo()}onLeave(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onCleanup(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onReset(){}}function r(o){const a={image:new e,html:new i,iframe:new t,youtube:new n},s=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];let d={};const l=[],u={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0};let c=null,h=null,p=null,b=null,m=null,g={},v=!1,f=!1,y=!1,w=null,A=null,L=null,E=!1,x=!1,S={},O=null,_=null;const C=e=>{if(null===document.querySelector('[data-type="youtube"]')||x)k(e);else{if(null===document.getElementById("iframe_api")){const e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.id="iframe_api",e.src="https://www.youtube.com/iframe_api",t.parentNode.insertBefore(e,t)}-1===l.indexOf(e)&&l.push(e),window.onYouTubePlayerAPIReady=()=>{l.forEach((e=>{k(e)})),x=!0}}},I=e=>e.hasAttribute("data-group")?e.getAttribute("data-group"):"default",k=e=>{if(O=I(e),Object.prototype.hasOwnProperty.call(S,O)||(S[O]=JSON.parse(JSON.stringify(u)),q()),-1!==S[O].gallery.indexOf(e))throw new Error("Ups, element already added.");if(S[O].gallery.push(e),S[O].elementsLength++,d.zoom&&e.querySelector("img")&&"false"!==e.getAttribute("data-zoom")||"true"===e.getAttribute("data-zoom")){const t=document.createElement("div");t.className="tobii-zoom__icon",t.innerHTML=d.zoomText,e.classList.add("tobii-zoom"),e.appendChild(t)}e.addEventListener("click",W),P(e),ue()&&O===_&&(se(),de())},T=e=>{const t=I(e);if(-1===S[t].gallery.indexOf(e))throw new Error(`Ups, I can't find a slide for the element ${e}.`);{const i=S[t].gallery.indexOf(e),n=S[t].sliderElements[i];if(ue()&&t===_&&i===S[t].currentIndex){if(1===S[t].elementsLength)throw N(),new Error("Ups, I've closed. There are no slides more to show.");0===S[t].currentIndex?X():U(),se(),de()}if(S[t].gallery.splice(S[t].gallery.indexOf(e)),S[t].sliderElements.splice(S[t].gallery.indexOf(e)),S[t].elementsLength--,--S[t].x,d.zoom&&e.querySelector(".tobii-zoom__icon")){const t=e.querySelector(".tobii-zoom__icon");t.parentNode.classList.remove("tobii-zoom"),t.parentNode.removeChild(t)}e.removeEventListener("click",W),n.parentNode.removeChild(n)}},q=()=>{S[O].slider=document.createElement("div"),S[O].slider.className="tobii__slider",S[O].slider.setAttribute("aria-hidden","true"),c.appendChild(S[O].slider)},P=e=>{const t=Y(e),i=document.createElement("div"),n=document.createElement("div");i.className="tobii__slide",i.style.position="absolute",i.style.left=100*S[O].x+"%",i.setAttribute("aria-hidden","true"),t.init(e,n,d),i.appendChild(n),S[O].slider.appendChild(i),S[O].sliderElements.push(i),++S[O].x},Y=e=>{const t=e.getAttribute("data-type");return void 0!==a[t]?a[t]:(e.hasAttribute("data-type")&&console.log("Unknown lightbox element type: "+t),a.image)},M=e=>{if(_=null!==_?_:O,ue())throw new Error("Ups, I'm aleady open.");if(!ue()&&(e||(e=0),-1===e||e>=S[_].elementsLength))throw new Error(`Ups, I can't find slide ${e}.`);document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open-"+_),se(),d.close||(b.disabled=!1,b.setAttribute("aria-hidden","true")),w=document.activeElement;const t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),S[_].currentIndex=e,B(),oe(),z(S[_].currentIndex),S[_].slider.setAttribute("aria-hidden","false"),c.setAttribute("aria-hidden","false"),de(),H(S[_].currentIndex+1),H(S[_].currentIndex-1),S[_].slider.classList.add("tobii__slider--animate");const i=new window.CustomEvent("open",{detail:{group:_}});c.dispatchEvent(i)},N=()=>{if(!ue())throw new Error("Ups, I'm already closed.");document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open-"+_),ae(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),w.focus(),D(S[_].currentIndex),R(S[_].currentIndex),c.setAttribute("aria-hidden","true"),S[_].slider.setAttribute("aria-hidden","true"),S[_].currentIndex=0,S[_].slider.classList.remove("tobii__slider--animate");const e=new window.CustomEvent("close",{detail:{group:_}});c.dispatchEvent(e)},H=e=>{if(void 0===S[_].sliderElements[e])return;const t=S[_].sliderElements[e].querySelector("[data-type]");Y(t).onPreload(t)},z=e=>{if(void 0===S[_].sliderElements[e])return;const t=S[_].sliderElements[e].querySelector("[data-type]"),i=Y(t);S[_].sliderElements[e].classList.add("tobii__slide--is-active"),S[_].sliderElements[e].setAttribute("aria-hidden","false"),i.onLoad(t,_)},U=()=>{if(!ue())throw new Error("Ups, I'm closed.");S[_].currentIndex>0&&(D(S[_].currentIndex),z(--S[_].currentIndex),de("left"),R(S[_].currentIndex+1),H(S[_].currentIndex-1));const e=new window.CustomEvent("previous",{detail:{group:_}});c.dispatchEvent(e)},X=()=>{if(!ue())throw new Error("Ups, I'm closed.");S[_].currentIndex<S[_].elementsLength-1&&(D(S[_].currentIndex),z(++S[_].currentIndex),de("right"),R(S[_].currentIndex-1),H(S[_].currentIndex+1));const e=new window.CustomEvent("next",{detail:{group:_}});c.dispatchEvent(e)},$=e=>{if(ue())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(S,e))throw new Error(`Ups, I don't have a group called "${e}".`);_=e},D=e=>{if(void 0===S[_].sliderElements[e])return;const t=S[_].sliderElements[e].querySelector("[data-type]"),i=Y(t);S[_].sliderElements[e].classList.remove("tobii__slide--is-active"),S[_].sliderElements[e].setAttribute("aria-hidden","true"),i.onLeave(t)},R=e=>{if(void 0===S[_].sliderElements[e])return;const t=S[_].sliderElements[e].querySelector("[data-type]");Y(t).onCleanup(t)},j=()=>{_=null!==_?_:O,A=-S[_].currentIndex*c.offsetWidth,S[_].slider.style.transform=`translate3d(${A}px, 0, 0)`,L=A},B=()=>{g={startX:0,endX:0,startY:0,endY:0}},V=()=>{const e=g.endX-g.startX,t=g.endY-g.startY,i=Math.abs(e),n=Math.abs(t);e>0&&i>d.threshold&&S[_].currentIndex>0?U():e<0&&i>d.threshold&&S[_].currentIndex!==S[_].elementsLength-1?X():t<0&&n>d.threshold&&d.swipeClose?N():j()},F=()=>{E||(E=!0,window.requestAnimationFrame((()=>{j(),E=!1})))},W=e=>{e.preventDefault(),_=I(e.currentTarget),M(S[_].gallery.indexOf(e.currentTarget))},G=e=>{e.target===h?U():e.target===p?X():(e.target===b||!1===v&&!1===f&&e.target.classList.contains("tobii__slide")&&d.docClose)&&N(),e.stopPropagation()},J=e=>{const t=Array.prototype.slice.call(c.querySelectorAll(`.tobii__btn:not([disabled]), .tobii__slide--is-active ${s.join(", .tobii__slide--is-active ")}`)).filter((e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))),i=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===i?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||i!==t.length-1||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),N()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),U()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),X())},K=e=>{he(e.target)||(e.stopPropagation(),v=!1,f=!1,y=!0,g.startX=e.touches[0].pageX,g.startY=e.touches[0].pageY,ce()&&S[_].slider.classList.add("tobii__slider--is-dragging"))},Q=e=>{e.stopPropagation(),y&&(g.endX=e.touches[0].pageX,g.endY=e.touches[0].pageY,re())},Z=e=>{e.stopPropagation(),y=!1,S[_].slider.classList.remove("tobii__slider--is-dragging"),g.endX&&V(),B()},ee=e=>{he(e.target)||(e.preventDefault(),e.stopPropagation(),v=!1,f=!1,y=!0,g.startX=e.pageX,g.startY=e.pageY,ce()&&S[_].slider.classList.add("tobii__slider--is-dragging"))},te=e=>{e.preventDefault(),y&&(g.endX=e.pageX,g.endY=e.pageY,re())},ie=e=>{e.stopPropagation(),y=!1,S[_].slider.classList.remove("tobii__slider--is-dragging"),g.endX&&V(),B()},ne=()=>{y=!1},re=()=>{Math.abs(g.startX-g.endX)>0&&!f&&S[_].elementsLength>1?(S[_].slider.style.transform=`translate3d(${L-Math.round(g.startX-g.endX)}px, 0, 0)`,v=!0,f=!1):Math.abs(g.startY-g.endY)>0&&!v&&d.swipeClose&&(S[_].slider.style.transform=`translate3d(${L}px, -${Math.round(g.startY-g.endY)}px, 0)`,v=!1,f=!0)},oe=()=>{d.keyboard&&window.addEventListener("keydown",J),window.addEventListener("resize",F),window.addEventListener("popstate",N),c.addEventListener("click",G),d.draggable&&ce()&&(c.addEventListener("touchstart",K),c.addEventListener("touchmove",Q),c.addEventListener("touchend",Z),c.addEventListener("mousedown",ee),c.addEventListener("mouseup",ie),c.addEventListener("mousemove",te),c.addEventListener("contextmenu",ne))},ae=()=>{d.keyboard&&window.removeEventListener("keydown",J),window.removeEventListener("resize",F),window.removeEventListener("popstate",N),c.removeEventListener("click",G),d.draggable&&ce()&&(c.removeEventListener("touchstart",K),c.removeEventListener("touchmove",Q),c.removeEventListener("touchend",Z),c.removeEventListener("mousedown",ee),c.removeEventListener("mouseup",ie),c.removeEventListener("mousemove",te),c.removeEventListener("contextmenu",ne))},se=()=>{(d.draggable&&d.swipeClose&&ce()&&!S[_].slider.classList.contains("tobii__slider--is-draggable")||d.draggable&&S[_].elementsLength>1&&!S[_].slider.classList.contains("tobii__slider--is-draggable"))&&S[_].slider.classList.add("tobii__slider--is-draggable"),!d.nav||1===S[_].elementsLength||"auto"===d.nav&&ce()?(h.setAttribute("aria-hidden","true"),h.disabled=!0,p.setAttribute("aria-hidden","true"),p.disabled=!0):(h.setAttribute("aria-hidden","false"),h.disabled=!1,p.setAttribute("aria-hidden","false"),p.disabled=!1),m.setAttribute("aria-hidden",d.counter&&1!==S[_].elementsLength?"false":"true")},de=(e=null)=>{j(),m.textContent=`${S[_].currentIndex+1}/${S[_].elementsLength}`,(e=>{(!0===d.nav||"auto"===d.nav)&&!ce()&&S[_].elementsLength>1?(h.setAttribute("aria-hidden","true"),h.disabled=!0,p.setAttribute("aria-hidden","true"),p.disabled=!0,1===S[_].elementsLength?d.close&&b.focus():0===S[_].currentIndex?(p.setAttribute("aria-hidden","false"),p.disabled=!1,p.focus()):S[_].currentIndex===S[_].elementsLength-1?(h.setAttribute("aria-hidden","false"),h.disabled=!1,h.focus()):(h.setAttribute("aria-hidden","false"),h.disabled=!1,p.setAttribute("aria-hidden","false"),p.disabled=!1,"left"===e?h.focus():p.focus())):d.close&&b.focus()})(e)},le=()=>{ue()&&N(),Object.entries(S).forEach((e=>{e[1].gallery.forEach((e=>{T(e)}))})),S={},O=_=null;for(const e in a)a[e].onReset()},ue=()=>"false"===c.getAttribute("aria-hidden"),ce=()=>"ontouchstart"in window,he=e=>-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===h||e===p||e===b;return(e=>{if(document.querySelector("div.tobii"))return void console.log("Multiple lightbox instances not supported.");d=(e=>({selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,captionHTML:!1,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default",...e}))(e),c||(c=document.createElement("div"),c.setAttribute("role","dialog"),c.setAttribute("aria-hidden","true"),c.classList.add("tobii"),c.classList.add(d.theme),h=document.createElement("button"),h.className="tobii__btn tobii__btn--previous",h.setAttribute("type","button"),h.setAttribute("aria-label",d.navLabel[0]),h.innerHTML=d.navText[0],c.appendChild(h),p=document.createElement("button"),p.className="tobii__btn tobii__btn--next",p.setAttribute("type","button"),p.setAttribute("aria-label",d.navLabel[1]),p.innerHTML=d.navText[1],c.appendChild(p),b=document.createElement("button"),b.className="tobii__btn tobii__btn--close",b.setAttribute("type","button"),b.setAttribute("aria-label",d.closeLabel),b.innerHTML=d.closeText,c.appendChild(b),m=document.createElement("div"),m.className="tobii__counter",c.appendChild(m),document.body.appendChild(c));const t=document.querySelectorAll(d.selector);if(!t)throw new Error(`Ups, I can't find the selector ${d.selector} on this website.`);const i=[];t.forEach((e=>{const t=e.hasAttribute("data-group")?e.getAttribute("data-group"):"default";let n=e.href;e.hasAttribute("data-target")&&(n=e.getAttribute("data-target")),n+="__"+t,void 0!==i[n]?e.addEventListener("click",(e=>{$(t),M(),e.preventDefault()})):(i[n]=1,C(e))}))})(o),r.open=M,r.previous=U,r.next=X,r.close=N,r.add=C,r.remove=T,r.reset=le,r.destroy=()=>{le(),c.parentNode.removeChild(c)},r.isOpen=ue,r.slidesIndex=()=>S[_].currentIndex,r.select=e=>{const t=S[_].currentIndex;if(!ue())throw new Error("Ups, I'm closed.");if(ue()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===S[_].currentIndex)throw new Error(`Ups, slide ${e} is already selected.`);if(-1===e||e>=S[_].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`)}S[_].currentIndex=e,D(t),z(e),e<t&&(de("left"),R(t),H(e-1)),e>t&&(de("right"),R(t),H(e+1))},r.slidesCount=()=>S[_].elementsLength,r.selectGroup=$,r.currentGroup=()=>null!==_?_:O,r.on=(e,t)=>{c.addEventListener(e,t)},r.off=(e,t)=>{c.removeEventListener(e,t)},r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(r=n.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===o(a)?a:String(a)),n)}var r,a}var s=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.summary=t.querySelector("summary"),this.content=t.querySelector("summary + p, summary + div"),this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",(function(e){return i.onClick(e)}))}var t,i,n;return t=e,i=[{key:"onClick",value:function(e){e.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.open():(this.isExpanding||this.el.open)&&this.shrink()}},{key:"shrink",value:function(){var e=this;this.isClosing=!0;var t="".concat(this.el.offsetHeight,"px"),i="".concat(this.summary.offsetHeight,"px");this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[t,i]},{duration:400,easing:"ease-out"}),this.animation.onfinish=function(){return e.onAnimationFinish(!1)},this.animation.oncancel=function(){return e.isClosing=!1}}},{key:"open",value:function(){var e=this;this.el.style.height="".concat(this.el.offsetHeight,"px"),this.el.open=!0,window.requestAnimationFrame((function(){return e.expand()}))}},{key:"expand",value:function(){var e=this;this.isExpanding=!0;var t="".concat(this.el.offsetHeight,"px"),i="".concat(this.summary.offsetHeight+this.content.offsetHeight,"px");this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[t,i]},{duration:400,easing:"ease-out"}),this.animation.onfinish=function(){return e.onAnimationFinish(!0)},this.animation.oncancel=function(){return e.isExpanding=!1}}},{key:"onAnimationFinish",value:function(e){this.el.open=e,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}}],i&&a(t.prototype,i),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(){document.querySelectorAll("details").forEach((function(e){new s(e)}))}document.addEventListener("DOMContentLoaded",(function(){var e="scroll-up",t="scroll-down",i=0;window.addEventListener("scroll",(function(){var n=window.pageYOffset;n<=0?document.body.classList.remove(e):(n>i&&!document.body.classList.contains(t)?(document.body.classList.remove(e),document.body.classList.add(t)):n<i&&document.body.classList.contains(t)&&(document.body.classList.remove(t),document.body.classList.add(e)),i=n)}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('.wp-site-blocks a[target="_blank"]').forEach((function(e){if(e.classList.contains("wp-block-social-link-anchor"))e.setAttribute("aria-label",e.querySelector("span").innerHTML+" "+localizeText.newwin);else{var t=e.innerHTML.replace(/(<([^>]+)>)/gi,"");e.setAttribute("aria-label",t+" "+localizeText.newwin)}"share"===e.getAttribute("data-click-type")&&e.setAttribute("aria-label",localizeText.share+" "+e.getAttribute("data-click-event"))}))})),document.addEventListener("DOMContentLoaded",d),document.addEventListener("DOMContentLoaded",d),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".has-vimeo .wp-block-button__link").forEach((function(e){e.setAttribute("data-type","iframe"),e.setAttribute("data-group","iframe-vimeo")})),document.querySelectorAll(".has-vimeo.wp-block-button :first-child").forEach((function(e){e.classList.add("lightbox")}))})),document.addEventListener("DOMContentLoaded",(function(){new r}));var l=document.querySelector(".sticky-navigation");if(l){var u=l.offsetTop;window.onscroll=function(){window.pageYOffset>=u?l.classList.add("sticky"):l.classList.remove("sticky")}}},232:()=>{},259:()=>{},5:()=>{},188:()=>{},433:()=>{},473:()=>{},369:()=>{},7:()=>{},665:()=>{},29:()=>{},75:()=>{},516:()=>{},699:()=>{},758:()=>{},573:()=>{},590:()=>{},995:()=>{},916:()=>{},209:()=>{},432:()=>{},93:()=>{},246:()=>{},496:()=>{},689:()=>{},870:()=>{},456:()=>{},133:()=>{},866:()=>{},526:()=>{},487:()=>{},582:()=>{},442:()=>{},768:()=>{},482:()=>{},125:()=>{},309:()=>{},878:()=>{}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,i,r,o)=>{if(!i){var a=1/0;for(u=0;u<e.length;u++){for(var[i,r,o]=e[u],s=!0,d=0;d<i.length;d++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](i[d])))?i.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,r,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={773:0,826:0,468:0,54:0,170:0,521:0,649:0,71:0,196:0,928:0,156:0,380:0,113:0,662:0,626:0,735:0,64:0,552:0,742:0,352:0,974:0,992:0,184:0,665:0,417:0,634:0,405:0,294:0,963:0,384:0,329:0,372:0,98:0,664:0,783:0,438:0,433:0,257:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var r,o,[a,s,d]=i,l=0;if(a.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(d)var u=d(n)}for(t&&t(i);l<a.length;l++)o=a[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self.webpackChunkframery_theme=self.webpackChunkframery_theme||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(724))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(768))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(482))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(125))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(309))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(878))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(232))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(259))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(5))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(188))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(433))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(473))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(369))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(7))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(665))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(29))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(75))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(516))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(699))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(758))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(573))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(590))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(995))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(916))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(209))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(432))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(93))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(246))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(496))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(689))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(870))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(456))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(133))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(866))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(526))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(487))),n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(582)));var r=n.O(void 0,[826,468,54,170,521,649,71,196,928,156,380,113,662,626,735,64,552,742,352,974,992,184,665,417,634,405,294,963,384,329,372,98,664,783,438,433,257],(()=>n(442)));r=n.O(r)})();