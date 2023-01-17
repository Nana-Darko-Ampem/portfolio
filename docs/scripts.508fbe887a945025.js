!function(f,u){"function"==typeof define&&define.amd?define([],u()):"object"==typeof exports?module.exports=u():f.iziToast=u()}(typeof global<"u"?global:window||this.window||this.global,function(f){"use strict";var u={},s="iziToast",v=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),I=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),T=typeof InstallTrigger<"u",y="ontouchstart"in document.documentElement,w=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],h=568,b={};u.children={};var C={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var E=function(i,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(i,n.bubbles,n.cancelable,n.detail),t};E.prototype=window.Event.prototype,window.CustomEvent=E}var p=function(i,n,t){if("[object Object]"===Object.prototype.toString.call(i))for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.call(t,i[e],e,i);else if(i)for(var a=0,r=i.length;r>a;a++)n.call(t,i[a],a,i)},m=function(i,n){var t={};return p(i,function(e,a){t[a]=i[a]}),p(n,function(e,a){t[a]=n[a]}),t},L=function(i){var n=document.createDocumentFragment(),t=document.createElement("div");for(t.innerHTML=i;t.firstChild;)n.appendChild(t.firstChild);return n},g={move:function(i,n,t,e){var a,r=.3,o=180;0!==e&&(i.classList.add(s+"-dragged"),i.style.transform="translateX("+e+"px)",e>0?r>(a=(o-e)/o)&&n.hide(m(t,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),i,"drag"):r>(a=(o+e)/o)&&n.hide(m(t,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),i,"drag"),i.style.opacity=a,r>a&&((I||T)&&(i.style.left=e+"px"),i.parentNode.style.opacity=r,this.stopMoving(i,null)))},startMoving:function(i,n,t,e){e=e||window.event;var a=y?e.touches[0].clientX:e.clientX,r=i.style.transform.replace("px)",""),o=a-(r=r.replace("translateX(",""));t.transitionIn&&i.classList.remove(t.transitionIn),t.transitionInMobile&&i.classList.remove(t.transitionInMobile),i.style.transition="",y?document.ontouchmove=function(l){l.preventDefault(),l=l||window.event,g.move(i,n,t,l.touches[0].clientX-o)}:document.onmousemove=function(l){l.preventDefault(),l=l||window.event,g.move(i,n,t,l.clientX-o)}},stopMoving:function(i,n){y?document.ontouchmove=function(){}:document.onmousemove=function(){},i.style.opacity="",i.style.transform="",i.classList.contains(s+"-dragged")&&(i.classList.remove(s+"-dragged"),i.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){i.style.transition=""},400))}};return u.setSetting=function(i,n,t){u.children[i][n]=t},u.getSetting=function(i,n){return u.children[i][n]},u.destroy=function(){p(document.querySelectorAll("."+s+"-overlay"),function(i,n){i.remove()}),p(document.querySelectorAll("."+s+"-wrapper"),function(i,n){i.remove()}),p(document.querySelectorAll("."+s),function(i,n){i.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),b={}},u.settings=function(i){u.destroy(),b=i,C=m(C,i||{})},p({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},function(i,n){u[n]=function(t){var e=m(b,t||{});e=m(i,e||{}),this.show(e)}}),u.progress=function(i,n,t){var e=this,a=n.getAttribute("data-iziToast-ref"),r=m(this.children[a],i||{}),o=n.querySelector("."+s+"-progressbar div");return{start:function(){typeof r.time.REMAINING>"u"&&(n.classList.remove(s+"-reseted"),null!==o&&(o.style.transition="width "+r.timeout+"ms "+r.progressBarEasing,o.style.width="0%"),r.time.START=(new Date).getTime(),r.time.END=r.time.START+r.timeout,r.time.TIMER=setTimeout(function(){clearTimeout(r.time.TIMER),n.classList.contains(s+"-closing")||(e.hide(r,n,"timeout"),"function"==typeof t&&t.apply(e))},r.timeout),e.setSetting(a,"time",r.time))},pause:function(){if(typeof r.time.START<"u"&&!n.classList.contains(s+"-paused")&&!n.classList.contains(s+"-reseted")){if(n.classList.add(s+"-paused"),r.time.REMAINING=r.time.END-(new Date).getTime(),clearTimeout(r.time.TIMER),e.setSetting(a,"time",r.time),null!==o){var d=window.getComputedStyle(o).getPropertyValue("width");o.style.transition="none",o.style.width=d}"function"==typeof t&&setTimeout(function(){t.apply(e)},10)}},resume:function(){typeof r.time.REMAINING<"u"?(n.classList.remove(s+"-paused"),null!==o&&(o.style.transition="width "+r.time.REMAINING+"ms "+r.progressBarEasing,o.style.width="0%"),r.time.END=(new Date).getTime()+r.time.REMAINING,r.time.TIMER=setTimeout(function(){clearTimeout(r.time.TIMER),n.classList.contains(s+"-closing")||(e.hide(r,n,"timeout"),"function"==typeof t&&t.apply(e))},r.time.REMAINING),e.setSetting(a,"time",r.time)):this.start()},reset:function(){clearTimeout(r.time.TIMER),delete r.time.REMAINING,e.setSetting(a,"time",r.time),n.classList.add(s+"-reseted"),n.classList.remove(s+"-paused"),null!==o&&(o.style.transition="none",o.style.width="100%"),"function"==typeof t&&setTimeout(function(){t.apply(e)},10)}}},u.hide=function(i,n,t){"object"!=typeof n&&(n=document.querySelector(n));var e=this,a=m(this.children[n.getAttribute("data-iziToast-ref")],i||{});a.closedBy=t||null,delete a.time.REMAINING,n.classList.add(s+"-closing"),function(){var l=document.querySelector("."+s+"-overlay");if(null!==l){var d=l.getAttribute("data-iziToast-ref"),c=(d=d.split(",")).indexOf(String(a.ref));-1!==c&&d.splice(c,1),l.setAttribute("data-iziToast-ref",d.join()),0===d.length&&(l.classList.remove("fadeIn"),l.classList.add("fadeOut"),setTimeout(function(){l.remove()},700))}}(),a.transitionIn&&n.classList.remove(a.transitionIn),a.transitionInMobile&&n.classList.remove(a.transitionInMobile),v||window.innerWidth<=h?a.transitionOutMobile&&n.classList.add(a.transitionOutMobile):a.transitionOut&&n.classList.add(a.transitionOut),n.parentNode.style.height=n.parentNode.offsetHeight+"px",n.style.pointerEvents="none",(!v||window.innerWidth>h)&&(n.parentNode.style.transitionDelay="0.2s");try{var o=new CustomEvent(s+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(l){console.warn(l)}setTimeout(function(){n.parentNode.style.height="0px",n.parentNode.style.overflow="",setTimeout(function(){delete e.children[a.ref],n.parentNode.remove();try{var l=new CustomEvent(s+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(d){console.warn(d)}typeof a.onClosed<"u"&&a.onClosed.apply(null,[a,n,t])},1e3)},200),typeof a.onClosing<"u"&&a.onClosing.apply(null,[a,n,t])},u.show=function(i){var n=this,t=m(b,i||{});if((t=m(C,t)).time={},null===t.id&&(t.id=function(i){return btoa(encodeURIComponent(i)).replace(/=/g,"")}(t.title+t.message+t.color)),1===t.displayMode||"once"==t.displayMode)try{if(document.querySelectorAll("."+s+"#"+t.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+t.id+". Try to set an valid id.")}if(2===t.displayMode||"replace"==t.displayMode)try{p(document.querySelectorAll("."+s+"#"+t.id),function(o,l){n.hide(t,o,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+t.id+". Try to set an valid id.")}t.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),u.children[t.ref]=t;var a,e={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:t.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};e.toast.setAttribute("data-iziToast-ref",t.ref),e.toast.appendChild(e.toastBody),e.toastCapsule.appendChild(e.toast),function(){if(e.toast.classList.add(s),e.toast.classList.add(s+"-opening"),e.toastCapsule.classList.add(s+"-capsule"),e.toastBody.classList.add(s+"-body"),e.toastTexts.classList.add(s+"-texts"),v||window.innerWidth<=h?t.transitionInMobile&&e.toast.classList.add(t.transitionInMobile):t.transitionIn&&e.toast.classList.add(t.transitionIn),t.class){var o=t.class.split(" ");p(o,function(l,d){e.toast.classList.add(l)})}t.id&&(e.toast.id=t.id),t.rtl&&(e.toast.classList.add(s+"-rtl"),e.toast.setAttribute("dir","rtl")),t.layout>1&&e.toast.classList.add(s+"-layout"+t.layout),t.balloon&&e.toast.classList.add(s+"-balloon"),t.maxWidth&&(e.toast.style.maxWidth=isNaN(t.maxWidth)?t.maxWidth:t.maxWidth+"px"),""===t.theme&&"light"===t.theme||e.toast.classList.add(s+"-theme-"+t.theme),t.color&&(function(i){return"#"==i.substring(0,1)||"rgb"==i.substring(0,3)||"hsl"==i.substring(0,3)}(t.color)?e.toast.style.background=t.color:e.toast.classList.add(s+"-color-"+t.color)),t.backgroundColor&&(e.toast.style.background=t.backgroundColor,t.balloon&&(e.toast.style.borderColor=t.backgroundColor))}(),t.image&&(e.cover.classList.add(s+"-cover"),e.cover.style.width=t.imageWidth+"px",e.cover.style.backgroundImage=function(i){try{return btoa(atob(i))==i}catch{return!1}}(t.image.replace(/ /g,""))?"url(data:image/png;base64,"+t.image.replace(/ /g,"")+")":"url("+t.image+")",t.rtl?e.toastBody.style.marginRight=t.imageWidth+10+"px":e.toastBody.style.marginLeft=t.imageWidth+10+"px",e.toast.appendChild(e.cover)),t.close?(e.buttonClose=document.createElement("button"),e.buttonClose.type="button",e.buttonClose.classList.add(s+"-close"),e.buttonClose.addEventListener("click",function(o){n.hide(t,e.toast,"button")}),e.toast.appendChild(e.buttonClose)):t.rtl?e.toast.style.paddingLeft="18px":e.toast.style.paddingRight="18px",t.progressBar&&(e.progressBar=document.createElement("div"),e.progressBarDiv=document.createElement("div"),e.progressBar.classList.add(s+"-progressbar"),e.progressBarDiv.style.background=t.progressBarColor,e.progressBar.appendChild(e.progressBarDiv),e.toast.appendChild(e.progressBar)),t.timeout&&(t.pauseOnHover&&!t.resetOnHover&&(e.toast.addEventListener("mouseenter",function(o){n.progress(t,e.toast).pause()}),e.toast.addEventListener("mouseleave",function(o){n.progress(t,e.toast).resume()})),t.resetOnHover&&(e.toast.addEventListener("mouseenter",function(o){n.progress(t,e.toast).reset()}),e.toast.addEventListener("mouseleave",function(o){n.progress(t,e.toast).start()}))),t.iconUrl?(e.icon.setAttribute("class",s+"-icon"),e.icon.setAttribute("src",t.iconUrl)):t.icon&&(e.icon.setAttribute("class",s+"-icon "+t.icon),t.iconText&&e.icon.appendChild(document.createTextNode(t.iconText)),t.iconColor&&(e.icon.style.color=t.iconColor)),(t.icon||t.iconUrl)&&(t.rtl?e.toastBody.style.paddingRight="33px":e.toastBody.style.paddingLeft="33px",e.toastBody.appendChild(e.icon)),t.title.length>0&&(e.strong=document.createElement("strong"),e.strong.classList.add(s+"-title"),e.strong.appendChild(L(t.title)),e.toastTexts.appendChild(e.strong),t.titleColor&&(e.strong.style.color=t.titleColor),t.titleSize&&(e.strong.style.fontSize=isNaN(t.titleSize)?t.titleSize:t.titleSize+"px"),t.titleLineHeight&&(e.strong.style.lineHeight=isNaN(t.titleSize)?t.titleLineHeight:t.titleLineHeight+"px")),t.message.length>0&&(e.p=document.createElement("p"),e.p.classList.add(s+"-message"),e.p.appendChild(L(t.message)),e.toastTexts.appendChild(e.p),t.messageColor&&(e.p.style.color=t.messageColor),t.messageSize&&(e.p.style.fontSize=isNaN(t.titleSize)?t.messageSize:t.messageSize+"px"),t.messageLineHeight&&(e.p.style.lineHeight=isNaN(t.titleSize)?t.messageLineHeight:t.messageLineHeight+"px")),t.title.length>0&&t.message.length>0&&(t.rtl?e.strong.style.marginLeft="10px":2===t.layout||t.rtl||(e.strong.style.marginRight="10px")),e.toastBody.appendChild(e.toastTexts),t.inputs.length>0&&(e.inputs.classList.add(s+"-inputs"),p(t.inputs,function(o,l){e.inputs.appendChild(L(o[0])),(a=e.inputs.childNodes)[l].classList.add(s+"-inputs-child"),o[3]&&setTimeout(function(){a[l].focus()},300),a[l].addEventListener(o[1],function(d){return(0,o[2])(n,e.toast,this,d)})}),e.toastBody.appendChild(e.inputs)),t.buttons.length>0&&(e.buttons.classList.add(s+"-buttons"),p(t.buttons,function(o,l){e.buttons.appendChild(L(o[0]));var d=e.buttons.childNodes;d[l].classList.add(s+"-buttons-child"),o[2]&&setTimeout(function(){d[l].focus()},300),d[l].addEventListener("click",function(c){return c.preventDefault(),(0,o[1])(n,e.toast,this,c,a)})})),e.toastBody.appendChild(e.buttons),t.message.length>0&&(t.inputs.length>0||t.buttons.length>0)&&(e.p.style.marginBottom="0"),(t.inputs.length>0||t.buttons.length>0)&&(t.rtl?e.toastTexts.style.marginLeft="10px":e.toastTexts.style.marginRight="10px",t.inputs.length>0&&t.buttons.length>0&&(t.rtl?e.inputs.style.marginLeft="8px":e.inputs.style.marginRight="8px")),e.toastCapsule.style.visibility="hidden",setTimeout(function(){var o=e.toast.offsetHeight,l=e.toast.currentStyle||window.getComputedStyle(e.toast),d=l.marginTop;d=d.split("px"),d=parseInt(d[0]);var c=l.marginBottom;c=c.split("px"),c=parseInt(c[0]),e.toastCapsule.style.visibility="",e.toastCapsule.style.height=o+c+d+"px",setTimeout(function(){e.toastCapsule.style.height="auto",t.target&&(e.toastCapsule.style.overflow="visible")},500),t.timeout&&n.progress(t,e.toast).start()},100),function(){var o=t.position;if(t.target)e.wrapper=document.querySelector(t.target),e.wrapper.classList.add(s+"-target"),t.targetFirst?e.wrapper.insertBefore(e.toastCapsule,e.wrapper.firstChild):e.wrapper.appendChild(e.toastCapsule);else{if(-1==w.indexOf(t.position))return void console.warn("["+s+"] Incorrect position.\nIt can be \u203a "+w);o=v||window.innerWidth<=h?"bottomLeft"==t.position||"bottomRight"==t.position||"bottomCenter"==t.position?s+"-wrapper-bottomCenter":"topLeft"==t.position||"topRight"==t.position||"topCenter"==t.position?s+"-wrapper-topCenter":s+"-wrapper-center":s+"-wrapper-"+o,e.wrapper=document.querySelector("."+s+"-wrapper."+o),e.wrapper||(e.wrapper=document.createElement("div"),e.wrapper.classList.add(s+"-wrapper"),e.wrapper.classList.add(o),document.body.appendChild(e.wrapper)),"topLeft"==t.position||"topCenter"==t.position||"topRight"==t.position?e.wrapper.insertBefore(e.toastCapsule,e.wrapper.firstChild):e.wrapper.appendChild(e.toastCapsule)}isNaN(t.zindex)?console.warn("["+s+"] Invalid zIndex."):e.wrapper.style.zIndex=t.zindex}(),t.overlay&&(null!==document.querySelector("."+s+"-overlay.fadeIn")?(e.overlay=document.querySelector("."+s+"-overlay"),e.overlay.setAttribute("data-iziToast-ref",e.overlay.getAttribute("data-iziToast-ref")+","+t.ref),isNaN(t.zindex)||null===t.zindex||(e.overlay.style.zIndex=t.zindex-1)):(e.overlay.classList.add(s+"-overlay"),e.overlay.classList.add("fadeIn"),e.overlay.style.background=t.overlayColor,e.overlay.setAttribute("data-iziToast-ref",t.ref),isNaN(t.zindex)||null===t.zindex||(e.overlay.style.zIndex=t.zindex-1),document.querySelector("body").appendChild(e.overlay)),t.overlayClose?(e.overlay.removeEventListener("click",{}),e.overlay.addEventListener("click",function(o){n.hide(t,e.toast,"overlay")})):e.overlay.removeEventListener("click",{})),function(){if(t.animateInside){e.toast.classList.add(s+"-animateInside");var o=[200,100,300];"bounceInLeft"!=t.transitionIn&&"bounceInRight"!=t.transitionIn||(o=[400,200,400]),t.title.length>0&&setTimeout(function(){e.strong.classList.add("slideIn")},o[0]),t.message.length>0&&setTimeout(function(){e.p.classList.add("slideIn")},o[1]),(t.icon||t.iconUrl)&&setTimeout(function(){e.icon.classList.add("revealIn")},o[2]);var l=150;t.buttons.length>0&&e.buttons&&setTimeout(function(){p(e.buttons.childNodes,function(d,c){setTimeout(function(){d.classList.add("revealIn")},l),l+=150})},t.inputs.length>0?150:0),t.inputs.length>0&&e.inputs&&(l=150,p(e.inputs.childNodes,function(d,c){setTimeout(function(){d.classList.add("revealIn")},l),l+=150}))}}(),t.onOpening.apply(null,[t,e.toast]);try{var r=new CustomEvent(s+"-opening",{detail:t,bubbles:!0,cancelable:!0});document.dispatchEvent(r)}catch(o){console.warn(o)}setTimeout(function(){e.toast.classList.remove(s+"-opening"),e.toast.classList.add(s+"-opened");try{var o=new CustomEvent(s+"-opened",{detail:t,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(l){console.warn(l)}t.onOpened.apply(null,[t,e.toast])},1e3),t.drag&&(y?(e.toast.addEventListener("touchstart",function(o){g.startMoving(this,n,t,o)},!1),e.toast.addEventListener("touchend",function(o){g.stopMoving(this,o)},!1)):(e.toast.addEventListener("mousedown",function(o){o.preventDefault(),g.startMoving(this,n,t,o)},!1),e.toast.addEventListener("mouseup",function(o){o.preventDefault(),g.stopMoving(this,o)},!1))),t.closeOnEscape&&document.addEventListener("keyup",function(o){27==(o=o||window.event).keyCode&&n.hide(t,e.toast,"esc")}),t.closeOnClick&&e.toast.addEventListener("click",function(o){n.hide(t,e.toast,"toast")}),n.toast=e.toast},u});