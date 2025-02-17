---
title: Store original and edited as one photo using Pixelmator on iOS
layout: jekyll.vto
category: tips
tags:
  - ios
css: |
  .rebox {
    background:#000;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2NkYGDYDMRkA8ZRAxhGw4BhNAyA+WAYpAMAIFgLQfO9BoEAAAAASUVORK5CYII=);
    background:rgba(0,0,0,.7);
    -webkit-filter:none!important;
    height:100%;
    left:0;
    position:fixed;
    top:0;
    width:100%;
    z-index:1000
  }
  .rebox * {
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box;
    box-sizing:border-box;
    margin:0;
    padding:0
  }
  .rebox-contents {
    height:90%;
    left:5%;
    position:absolute;
    text-align:center;
    top:5%;
    width:90%
  }
  .rebox-contents .rebox-content {
    background-color:#fff;
    border:5px solid #fff;
    border-radius:1px;
    bottom:0;
    box-shadow:0 0 20px #000;
    cursor:pointer;
    left:0;
    margin:auto;
    max-height:80%;
    max-width:100%;
    position:absolute;
    right:0;
    top:0
  }
  .rebox-loading {
    height:31px;
    margin:-16px 0 0 -16px;
    position:absolute;
    width:31px
  }
  .rebox-caption {
    background:#000;
    background:rgba(0,0,0,.7);
    bottom:0;
    display:none;
    left:0;
    position:absolute;
    text-align:center;
    width:100%;
    z-index:1000
  }
  .rebox-caption p {
    *zoom:1;
    color:#fff;
    display:inline-block;
    *display:inline;
    font-size:12px;
    line-height:18px;
    margin:0 auto;
    max-width:70%;
    padding:10px
  }
  .rebox-button {
    background:#000;
    border-radius:32px;
    color:#fff;
    font-size:24px;
    height:40px;
    line-height:40px;
    min-width:40px;
    opacity:.4;
    position:absolute;
    text-align:center;
    text-decoration:none;
    transition:all .3s;
    vertical-align:middle;
    z-index:9999
  }
  .rebox-button:focus,
  .rebox-button:hover {
    opacity:1;
    transform:scale(1.4)
  }
  .rebox-close {
    right:10px;
    top:10px
  }
  .rebox-next {
    right:10px;
    top:48%
  }
  .rebox-prev {
    left:10px;
    top:48%
  }
  .rebox-loading {
    -webkit-animation-duration:2s;
    -moz-animation-duration:2s;
    -ms-animation-duration:2s;
    animation-duration:2s;
    -webkit-animation-iteration-count:infinite;
    -moz-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
    animation-iteration-count:infinite;
    -webkit-animation-name:spin;
    -moz-animation-name:spin;
    -ms-animation-name:spin;
    animation-name:spin;
    -webkit-animation-timing-function:linear;
    -moz-animation-timing-function:linear;
    -ms-animation-timing-function:linear;
    animation-timing-function:linear;
    left:50%;
    top:48%
  }
---

<script type="text/javascript">
!function(a,b){"function"==typeof define&&define.amd?define(function(){return b(a)}):b(a)}(window,function(a){var b=function(){function b(a){return null==a?String(a):W[X.call(a)]||"object"}function c(a){return"function"==b(a)}function d(a){return null!=a&&a==a.window}function e(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function f(a){return"object"==b(a)}function g(a){return f(a)&&!d(a)&&Object.getPrototypeOf(a)==Object.prototype}function h(a){var b=!!a&&"length"in a&&a.length,c=z.type(a);return"function"!=c&&!d(a)&&("array"==c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function i(a){return F.call(a,function(a){return null!=a})}function j(a){return a.length>0?z.fn.concat.apply([],a):a}function k(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(a){return a in J?J[a]:J[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function m(a,b){return"number"!=typeof b||K[k(a)]?b:b+"px"}function n(a){var b,c;return I[a]||(b=H.createElement(a),H.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),I[a]=c),I[a]}function o(a){return"children"in a?G.call(a.children):z.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function p(a,b){var c,d=a?a.length:0;for(c=0;d>c;c++)this[c]=a[c];this.length=d,this.selector=b||""}function q(a,b,c){for(y in b)c&&(g(b[y])||_(b[y]))?(g(b[y])&&!g(a[y])&&(a[y]={}),_(b[y])&&!_(a[y])&&(a[y]=[]),q(a[y],b[y],c)):b[y]!==x&&(a[y]=b[y])}function r(a,b){return null==b?z(a):z(a).filter(b)}function s(a,b,d,e){return c(b)?b.call(a,d,e):b}function t(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function u(a,b){var c=a.className||"",d=c&&c.baseVal!==x;return b===x?d?c.baseVal:c:void(d?c.baseVal=b:a.className=b)}function v(a){try{return a?"true"==a||("false"==a?!1:"null"==a?null:+a+""==a?+a:/^[\[\{]/.test(a)?z.parseJSON(a):a):a}catch(b){return a}}function w(a,b){b(a);for(var c=0,d=a.childNodes.length;d>c;c++)w(a.childNodes[c],b)}var x,y,z,A,B,C,D=[],E=D.concat,F=D.filter,G=D.slice,H=a.document,I={},J={},K={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,O=/^(?:body|html)$/i,P=/([A-Z])/g,Q=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],S=H.createElement("table"),T=H.createElement("tr"),U={tr:H.createElement("tbody"),tbody:S,thead:S,tfoot:S,td:T,th:T,"*":H.createElement("div")},V=/^[\w-]*$/,W={},X=W.toString,Y={},Z=H.createElement("div"),$={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},_=Array.isArray||function(a){return a instanceof Array};return Y.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=Z).appendChild(a),d=~Y.qsa(e,b).indexOf(a),f&&Z.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return F.call(a,function(b,c){return a.indexOf(b)==c})},Y.fragment=function(a,b,c){var d,e,f;return M.test(a)&&(d=z(H.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(N,"<$1></$2>")),b===x&&(b=L.test(a)&&RegExp.$1),b in U||(b="*"),f=U[b],f.innerHTML=""+a,d=z.each(G.call(f.childNodes),function(){f.removeChild(this)})),g(c)&&(e=z(d),z.each(c,function(a,b){Q.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},Y.Z=function(a,b){return new p(a,b)},Y.isZ=function(a){return a instanceof Y.Z},Y.init=function(a,b){var d;if(!a)return Y.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&L.test(a))d=Y.fragment(a,RegExp.$1,b),a=null;else{if(b!==x)return z(b).find(a);d=Y.qsa(H,a)}else{if(c(a))return z(H).ready(a);if(Y.isZ(a))return a;if(_(a))d=i(a);else if(f(a))d=[a],a=null;else if(L.test(a))d=Y.fragment(a.trim(),RegExp.$1,b),a=null;else{if(b!==x)return z(b).find(a);d=Y.qsa(H,a)}}return Y.Z(d,a)},z=function(a,b){return Y.init(a,b)},z.extend=function(a){var b,c=G.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){q(a,c,b)}),a},Y.qsa=function(a,b){var c,d="#"==b[0],e=!d&&"."==b[0],f=d||e?b.slice(1):b,g=V.test(f);return a.getElementById&&g&&d?(c=a.getElementById(f))?[c]:[]:1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType?[]:G.call(g&&!d&&a.getElementsByClassName?e?a.getElementsByClassName(f):a.getElementsByTagName(b):a.querySelectorAll(b))},z.contains=H.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===a)return!0;return!1},z.type=b,z.isFunction=c,z.isWindow=d,z.isArray=_,z.isPlainObject=g,z.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},z.isNumeric=function(a){var b=Number(a),c=typeof a;return null!=a&&"boolean"!=c&&("string"!=c||a.length)&&!isNaN(b)&&isFinite(b)||!1},z.inArray=function(a,b,c){return D.indexOf.call(b,a,c)},z.camelCase=B,z.trim=function(a){return null==a?"":String.prototype.trim.call(a)},z.uuid=0,z.support={},z.expr={},z.noop=function(){},z.map=function(a,b){var c,d,e,f=[];if(h(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return j(f)},z.each=function(a,b){var c,d;if(h(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},z.grep=function(a,b){return F.call(a,b)},a.JSON&&(z.parseJSON=JSON.parse),z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){W["[object "+b+"]"]=b.toLowerCase()}),z.fn={constructor:Y.Z,length:0,forEach:D.forEach,reduce:D.reduce,push:D.push,sort:D.sort,splice:D.splice,indexOf:D.indexOf,concat:function(){var a,b,c=[];for(a=0;a<arguments.length;a++)b=arguments[a],c[a]=Y.isZ(b)?b.toArray():b;return E.apply(Y.isZ(this)?this.toArray():this,c)},map:function(a){return z(z.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return z(G.apply(this,arguments))},ready:function(b){if("complete"===H.readyState||"loading"!==H.readyState&&!H.documentElement.doScroll)setTimeout(function(){b(z)},0);else{var c=function(){H.removeEventListener("DOMContentLoaded",c,!1),a.removeEventListener("load",c,!1),b(z)};H.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}return this},get:function(a){return a===x?G.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return D.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return c(a)?this.not(this.not(a)):z(F.call(this,function(b){return Y.matches(b,a)}))},add:function(a,b){return z(C(this.concat(z(a,b))))},is:function(a){return"string"==typeof a?this.length>0&&Y.matches(this[0],a):a&&this.selector==a.selector},not:function(a){var b=[];if(c(a)&&a.call!==x)this.each(function(c){a.call(this,c)||b.push(this)});else{var d="string"==typeof a?this.filter(a):h(a)&&c(a.item)?G.call(a):z(a);this.forEach(function(a){d.indexOf(a)<0&&b.push(a)})}return z(b)},has:function(a){return this.filter(function(){return f(a)?z.contains(this,a):z(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!f(a)?a:z(a)},last:function(){var a=this[this.length-1];return a&&!f(a)?a:z(a)},find:function(a){var b,c=this;return b=a?"object"==typeof a?z(a).filter(function(){var a=this;return D.some.call(c,function(b){return z.contains(b,a)})}):1==this.length?z(Y.qsa(this[0],a)):this.map(function(){return Y.qsa(this,a)}):z()},closest:function(a,b){var c=[],d="object"==typeof a&&z(a);return this.each(function(f,g){for(;g&&!(d?d.indexOf(g)>=0:Y.matches(g,a));)g=g!==b&&!e(g)&&g.parentNode;g&&c.indexOf(g)<0&&c.push(g)}),z(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=z.map(c,function(a){return(a=a.parentNode)&&!e(a)&&b.indexOf(a)<0?(b.push(a),a):void 0});return r(b,a)},parent:function(a){return r(C(this.pluck("parentNode")),a)},children:function(a){return r(this.map(function(){return o(this)}),a)},contents:function(){return this.map(function(){return this.contentDocument||G.call(this.childNodes)})},siblings:function(a){return r(this.map(function(a,b){return F.call(o(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return z.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=n(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=c(a);if(this[0]&&!b)var d=z(a).get(0),e=d.parentNode||this.length>1;return this.each(function(c){z(this).wrapAll(b?a.call(this,c):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){z(this[0]).before(a=z(a));for(var b;(b=a.children()).length;)a=b.first();z(a).append(this)}return this},wrapInner:function(a){var b=c(a);return this.each(function(c){var d=z(this),e=d.contents(),f=b?a.call(this,c):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){z(this).replaceWith(z(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=z(this);(a===x?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return z(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return z(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(b){var c=this.innerHTML;z(this).empty().append(s(this,a,b,c))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){var c=s(this,a,b,this.textContent);this.textContent=null==c?"":""+c}):0 in this?this.pluck("textContent").join(""):null},attr:function(a,b){var c;return"string"!=typeof a||1 in arguments?this.each(function(c){if(1===this.nodeType)if(f(a))for(y in a)t(this,y,a[y]);else t(this,a,s(this,b,c,this.getAttribute(a)))}):0 in this&&1==this[0].nodeType&&null!=(c=this[0].getAttribute(a))?c:x},removeAttr:function(a){return this.each(function(){1===this.nodeType&&a.split(" ").forEach(function(a){t(this,a)},this)})},prop:function(a,b){return a=$[a]||a,"string"!=typeof a||1 in arguments?this.each(function(c){if(f(a))for(y in a)this[$[y]||y]=a[y];else this[a]=s(this,b,c,this[a])}):this[0]&&this[0][a]},removeProp:function(a){return a=$[a]||a,this.each(function(){delete this[a]})},data:function(a,b){var c="data-"+a.replace(P,"-$1").toLowerCase(),d=1 in arguments?this.attr(c,b):this.attr(c);return null!==d?v(d):x},val:function(a){return 0 in arguments?(null==a&&(a=""),this.each(function(b){this.value=s(this,a,b,this.value)})):this[0]&&(this[0].multiple?z(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(b){if(b)return this.each(function(a){var c=z(this),d=s(this,b,a,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(!this.length)return null;if(H.documentElement!==this[0]&&!z.contains(H.documentElement,this[0]))return{top:0,left:0};var c=this[0].getBoundingClientRect();return{left:c.left+a.pageXOffset,top:c.top+a.pageYOffset,width:Math.round(c.width),height:Math.round(c.height)}},css:function(a,c){if(arguments.length<2){var d=this[0];if("string"==typeof a){if(!d)return;return d.style[B(a)]||getComputedStyle(d,"").getPropertyValue(a)}if(_(a)){if(!d)return;var e={},f=getComputedStyle(d,"");return z.each(a,function(a,b){e[b]=d.style[B(b)]||f.getPropertyValue(b)}),e}}var g="";if("string"==b(a))c||0===c?g=k(a)+":"+m(a,c):this.each(function(){this.style.removeProperty(k(a))});else for(y in a)a[y]||0===a[y]?g+=k(y)+":"+m(y,a[y])+";":this.each(function(){this.style.removeProperty(k(y))});return this.each(function(){this.style.cssText+=";"+g})},index:function(a){return a?this.indexOf(z(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?D.some.call(this,function(a){return this.test(u(a))},l(a)):!1},addClass:function(a){return a?this.each(function(b){if("className"in this){A=[];var c=u(this),d=s(this,a,b,c);d.split(/\s+/g).forEach(function(a){z(this).hasClass(a)||A.push(a)},this),A.length&&u(this,c+(c?" ":"")+A.join(" "))}}):this},removeClass:function(a){return this.each(function(b){if("className"in this){if(a===x)return u(this,"");A=u(this),s(this,a,b,A).split(/\s+/g).forEach(function(a){A=A.replace(l(a)," ")}),u(this,A.trim())}})},toggleClass:function(a,b){return a?this.each(function(c){var d=z(this),e=s(this,a,c,u(this));e.split(/\s+/g).forEach(function(a){(b===x?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===x?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===x?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=O.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(z(a).css("margin-top"))||0,c.left-=parseFloat(z(a).css("margin-left"))||0,d.top+=parseFloat(z(b[0]).css("border-top-width"))||0,d.left+=parseFloat(z(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||H.body;a&&!O.test(a.nodeName)&&"static"==z(a).css("position");)a=a.offsetParent;return a})}},z.fn.detach=z.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});z.fn[a]=function(c){var f,g=this[0];return c===x?d(g)?g["inner"+b]:e(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=z(this),g.css(a,s(this,c,b,g[a]()))})}}),R.forEach(function(c,d){var e=d%2;z.fn[c]=function(){var c,f,g=z.map(arguments,function(a){var d=[];return c=b(a),"array"==c?(a.forEach(function(a){return a.nodeType!==x?d.push(a):z.zepto.isZ(a)?d=d.concat(a.get()):void(d=d.concat(Y.fragment(a)))}),d):"object"==c||null==a?a:Y.fragment(a)}),h=this.length>1;return g.length<1?this:this.each(function(b,c){f=e?c:c.parentNode,c=0==d?c.nextSibling:1==d?c.firstChild:2==d?c:null;var i=z.contains(H.documentElement,f);g.forEach(function(b){if(h)b=b.cloneNode(!0);else if(!f)return z(b).remove();f.insertBefore(b,c),i&&w(b,function(b){if(!(null==b.nodeName||"SCRIPT"!==b.nodeName.toUpperCase()||b.type&&"text/javascript"!==b.type||b.src)){var c=b.ownerDocument?b.ownerDocument.defaultView:a;c.eval.call(c,b.innerHTML)}})})})},z.fn[e?c+"To":"insert"+(d?"Before":"After")]=function(a){return z(a)[c](this),this}}),Y.Z.prototype=p.prototype=z.fn,Y.uniq=C,Y.deserializeValue=v,z.zepto=Y,z}();return a.Zepto=b,void 0===a.$&&(a.$=b),function(b){function c(a){return a._zid||(a._zid=n++)}function d(a,b,d,g){if(b=e(b),b.ns)var h=f(b.ns);return(r[c(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||h.test(a.ns))&&(!d||c(a.fn)===c(d))&&(!g||a.sel==g)})}function e(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function f(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function g(a,b){return a.del&&!t&&a.e in u||!!b}function h(a){return v[a]||t&&u[a]||a}function i(a,d,f,i,j,l,n){var o=c(a),p=r[o]||(r[o]=[]);d.split(/\s/).forEach(function(c){if("ready"==c)return b(document).ready(f);var d=e(c);d.fn=f,d.sel=j,d.e in v&&(f=function(a){var c=a.relatedTarget;return!c||c!==this&&!b.contains(this,c)?d.fn.apply(this,arguments):void 0}),d.del=l;var o=l||f;d.proxy=function(b){if(b=k(b),!b.isImmediatePropagationStopped()){b.data=i;var c=o.apply(a,b._args==m?[b]:[b].concat(b._args));return c===!1&&(b.preventDefault(),b.stopPropagation()),c}},d.i=p.length,p.push(d),"addEventListener"in a&&a.addEventListener(h(d.e),d.proxy,g(d,n))})}function j(a,b,e,f,i){var j=c(a);(b||"").split(/\s/).forEach(function(b){d(a,b,e,f).forEach(function(b){delete r[j][b.i],"removeEventListener"in a&&a.removeEventListener(h(b.e),b.proxy,g(b,i))})})}function k(a,c){if(c||!a.isDefaultPrevented){c||(c=a),b.each(z,function(b,d){var e=c[b];a[b]=function(){return this[d]=w,e&&e.apply(c,arguments)},a[d]=x});try{a.timeStamp||(a.timeStamp=Date.now())}catch(d){}(c.defaultPrevented!==m?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(a.isDefaultPrevented=w)}return a}function l(a){var b,c={originalEvent:a};for(b in a)y.test(b)||a[b]===m||(c[b]=a[b]);return k(c,a)}var m,n=1,o=Array.prototype.slice,p=b.isFunction,q=function(a){return"string"==typeof a},r={},s={},t="onfocusin"in a,u={focus:"focusin",blur:"focusout"},v={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",b.event={add:i,remove:j},b.proxy=function(a,d){var e=2 in arguments&&o.call(arguments,2);if(p(a)){var f=function(){return a.apply(d,e?e.concat(o.call(arguments)):arguments)};return f._zid=c(a),f}if(q(d))return e?(e.unshift(a[d],a),b.proxy.apply(null,e)):b.proxy(a[d],a);throw new TypeError("expected function")},b.fn.bind=function(a,b,c){return this.on(a,b,c)},b.fn.unbind=function(a,b){return this.off(a,b)},b.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var w=function(){return!0},x=function(){return!1},y=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,z={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};b.fn.delegate=function(a,b,c){return this.on(b,a,c)},b.fn.undelegate=function(a,b,c){return this.off(b,a,c)},b.fn.live=function(a,c){return b(document.body).delegate(this.selector,a,c),this},b.fn.die=function(a,c){return b(document.body).undelegate(this.selector,a,c),this},b.fn.on=function(a,c,d,e,f){var g,h,k=this;return a&&!q(a)?(b.each(a,function(a,b){k.on(a,c,d,b,f)}),k):(q(c)||p(e)||e===!1||(e=d,d=c,c=m),(e===m||d===!1)&&(e=d,d=m),e===!1&&(e=x),k.each(function(k,m){f&&(g=function(a){return j(m,a.type,e),e.apply(this,arguments)}),c&&(h=function(a){var d,f=b(a.target).closest(c,m).get(0);return f&&f!==m?(d=b.extend(l(a),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(o.call(arguments,1)))):void 0}),i(m,a,e,d,c,h||g)}))},b.fn.off=function(a,c,d){var e=this;return a&&!q(a)?(b.each(a,function(a,b){e.off(a,c,b)}),e):(q(c)||p(d)||d===!1||(d=c,c=m),d===!1&&(d=x),e.each(function(){j(this,a,d,c)}))},b.fn.trigger=function(a,c){return a=q(a)||b.isPlainObject(a)?b.Event(a):k(a),a._args=c,this.each(function(){a.type in u&&"function"==typeof this[a.type]?this[a.type]():"dispatchEvent"in this?this.dispatchEvent(a):b(this).triggerHandler(a,c)})},b.fn.triggerHandler=function(a,c){var e,f;return this.each(function(g,h){e=l(q(a)?b.Event(a):a),e._args=c,e.target=h,b.each(d(h,a.type||a),function(a,b){return f=b.proxy(e),e.isImmediatePropagationStopped()?!1:void 0})}),f},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a){b.fn[a]=function(b){return 0 in arguments?this.bind(a,b):this.trigger(a)}}),b.Event=function(a,b){q(a)||(b=a,a=b.type);var c=document.createEvent(s[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),k(c)}}(b),function(a,b){function c(a){return a.replace(/([A-Z])/g,"-$1").toLowerCase()}function d(a){return e?e+a:a.toLowerCase()}var e,f,g,h,i,j,k,l,m,n,o="",p={Webkit:"webkit",Moz:"",O:"o"},q=document.createElement("div"),r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,s={};q.style.transform===b&&a.each(p,function(a,c){return q.style[a+"TransitionProperty"]!==b?(o="-"+a.toLowerCase()+"-",e=c,!1):void 0}),f=o+"transform",s[g=o+"transition-property"]=s[h=o+"transition-duration"]=s[j=o+"transition-delay"]=s[i=o+"transition-timing-function"]=s[k=o+"animation-name"]=s[l=o+"animation-duration"]=s[n=o+"animation-delay"]=s[m=o+"animation-timing-function"]="",a.fx={off:e===b&&q.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:o,transitionEnd:d("TransitionEnd"),animationEnd:d("AnimationEnd")},a.fn.animate=function(c,d,e,f,g){return a.isFunction(d)&&(f=d,e=b,d=b),a.isFunction(e)&&(f=e,e=b),a.isPlainObject(d)&&(e=d.easing,f=d.complete,g=d.delay,d=d.duration),d&&(d=("number"==typeof d?d:a.fx.speeds[d]||a.fx.speeds._default)/1e3),g&&(g=parseFloat(g)/1e3),this.anim(c,d,e,f,g)},a.fn.anim=function(d,e,o,p,q){var t,u,v,w={},x="",y=this,z=a.fx.transitionEnd,A=!1;if(e===b&&(e=a.fx.speeds._default/1e3),q===b&&(q=0),a.fx.off&&(e=0),"string"==typeof d)w[k]=d,w[l]=e+"s",w[n]=q+"s",w[m]=o||"linear",z=a.fx.animationEnd;else{u=[];for(t in d)r.test(t)?x+=t+"("+d[t]+") ":(w[t]=d[t],u.push(c(t)));x&&(w[f]=x,u.push(f)),e>0&&"object"==typeof d&&(w[g]=u.join(", "),w[h]=e+"s",w[j]=q+"s",w[i]=o||"linear")}return v=function(b){if("undefined"!=typeof b){if(b.target!==b.currentTarget)return;a(b.target).unbind(z,v)}else a(this).unbind(z,v);A=!0,a(this).css(s),p&&p.call(this)},e>0&&(this.bind(z,v),setTimeout(function(){A||v.call(y)},1e3*(e+q)+25)),this.size()&&this.get(0).clientLeft,this.css(w),0>=e&&setTimeout(function(){y.each(function(){v.call(this)})},0),this},q=null}(b),function(b,c){function d(a,d,e,f,g){"function"!=typeof d||g||(g=d,d=c);var h={opacity:e};return f&&(h.scale=f,a.css(b.fx.cssPrefix+"transform-origin","0 0")),a.animate(h,d,null,g)}function e(a,c,e,f){return d(a,c,0,e,function(){g.call(b(this)),f&&f.call(this)})}var f=(a.document,b.fn.show),g=b.fn.hide,h=b.fn.toggle;b.fn.show=function(a,b){return f.call(this),a===c?a=0:this.css("opacity",0),d(this,a,1,"1,1",b)},b.fn.hide=function(a,b){return a===c?g.call(this):e(this,a,"0,0",b)},b.fn.toggle=function(a,d){return a===c||"boolean"==typeof a?h.call(this,a):this.each(function(){var c=b(this);c["none"==c.css("display")?"show":"hide"](a,d)})},b.fn.fadeTo=function(a,b,c){return d(this,a,b,null,c)},b.fn.fadeIn=function(a,b){var c=this.css("opacity");return c>0?this.css("opacity",0):c=1,f.call(this).fadeTo(a,c,b)},b.fn.fadeOut=function(a,b){return e(this,a,null,b)},b.fn.fadeToggle=function(a,c){return this.each(function(){var d=b(this);d[0==d.css("opacity")||"none"==d.css("display")?"fadeIn":"fadeOut"](a,c)})}}(b),b}),function(a){a.rebox=function(b,c){this.settings=a.extend(!0,{},a.rebox.defaults,c),this.$el=b,this.$box=null,this.$items=null,this.idx=0,this.enable()},a.rebox.defaults={theme:"rebox",selector:null,prev:"&larr;",next:"&rarr;",loading:"%",close:"&times;",speed:400,zIndex:1e3,cycle:!0,captionAttr:"title",template:"image",templates:{image:function(b,c,d){return a('<img src="'+b.attr("href")+'" class="'+c.theme+'-content" />').on("load",d)}}},a.rebox.setDefaults=function(b){a.rebox.defaults=a.extend(!0,{},a.rebox.defaults,b)},a.rebox.lookup={i:0},a.extend(a.rebox.prototype,{enable:function(){var a=this;return a.$el.on("click.rebox",a.settings.selector,function(b){b.preventDefault(),a.open(this)})},open:function(b){var c=this;return c.$items=null===c.settings.selector?c.$el:c.$el.find(c.settings.selector),isNaN(b)&&(b=c.$items.index(b)),c.$box=a('<div class="'+c.settings.theme+'" style="display:none;"><a href="#" class="'+c.settings.theme+"-close "+c.settings.theme+'-button">'+c.settings.close+'</a><a href="#" class="'+c.settings.theme+"-prev "+c.settings.theme+'-button">'+c.settings.prev+'</a><a href="#" class="'+c.settings.theme+"-next "+c.settings.theme+'-button">'+c.settings.next+'</a><div class="'+c.settings.theme+'-contents"></div><div class="'+c.settings.theme+'-caption"><p></p></div></div>').appendTo("body").css("zIndex",c.settings.zIndex).fadeIn(c.settings.speed).on("click.rebox","."+c.settings.theme+"-close",function(a){a.preventDefault(),c.close()}).on("click.rebox","."+c.settings.theme+"-next",function(a){a.preventDefault(),c.next()}).on("click.rebox","."+c.settings.theme+"-prev",function(a){a.preventDefault(),c.prev()}).on("click.rebox","."+c.settings.theme+"-contents",function(b){b.preventDefault(),a(b.target).hasClass(c.settings.theme+"-content")&&c.$items.length>1?c.next():c.close()}),a(document).on("swipeLeft.rebox",function(a){c.next()}).on("swipeRight.rebox",function(a){c.prev()}).on("keydown.rebox",function(a){a.preventDefault();var b=window.event?event.keyCode:a.keyCode;switch(b){case 27:c.close();break;case 37:c.prev();break;case 39:c.next()}}),c.$el.trigger("rebox:open",[c]),c["goto"](b),c.$el},close:function(){var b=this;return b.$box&&b.$box.length&&b.$box.fadeOut(b.settings.speed,function(a){b.$box.remove(),b.$box=null,b.$el.trigger("rebox:close",[b])}),a(document).off(".rebox"),b.$el},"goto":function(b){var c=this,d=a(c.$items[b]),e=d.attr(c.settings.captionAttr),f=(c.$box.children("."+c.settings.theme+"-caption")[e?"show":"hide"]().children("p").text(e),c.$box.children("."+c.settings.theme+"-contents")),g=null;return d.length&&(c.idx=b,f.html('<div class="'+c.settings.theme+"-loading "+c.settings.theme+'-button">'+c.settings.loading+"</div>"),g=c.settings.templates[d.data("rebox-template")||c.settings.template](d,c.settings,function(b){f.empty().append(a(this))}),1!=c.$items.length&&c.settings.cycle||(c.$box.children("."+c.settings.theme+"-prev")[0>=b?"hide":"show"](),c.$box.children("."+c.settings.theme+"-next")[b>=c.$items.length-1?"hide":"show"]()),c.$el.trigger("rebox:goto",[c,b,d,g])),c.$el},prev:function(){var a=this;return a["goto"](0===a.idx?a.$items.length-1:a.idx-1)},next:function(){var a=this;return a["goto"](a.idx===a.$items.length-1?0:a.idx+1)},disable:function(){var a=this;return a.close().off(".rebox").trigger("rebox:disable",[a])},destroy:function(){var a=this;return a.disable().removeData("rebox").trigger("rebox:destroy")},option:function(a,b){var c=this;return void 0!==b?(c.settings[a]=b,c.disable().enable()):c.settings[a]}}),a.fn.rebox=function(b){b=b||{};var c=Array.prototype.slice.call(arguments);if("string"==typeof b){if("option"==b&&"string"==typeof c[1]&&2===c.length){var d=a.rebox.lookup[a(this).data("rebox")];return d[b].apply(d,c.slice(1))}return this.each(function(){var d=a.rebox.lookup[a(this).data("rebox")];d[b].apply(d,c.slice(1))})}return this.each(function(){var c=a(this);a.rebox.lookup[++a.rebox.lookup.i]=new a.rebox(c,b),c.data("rebox",a.rebox.lookup.i)})}}(window.jQuery||window.Zepto||window.$);

Zepto(function($){
  $(".image-collection").rebox({
    selector: "img",
    captionAttr: "alt",
    cycle: false,
    template: "imageOnly",
    templates: {
      imageOnly: function(item, settings, callback) {
        var src = item.attr("src"),
          alt = item.attr("alt"),
          klass = settings.theme + "-content"

        return $("<img>", {src: src, alt: alt, class: klass}).load(callback);
      }
    }
  });
})
console.log("BOO")
</script>

_This article is for you if: you use iCloud Photo Library to store your
photos, you sometimes edit your photos with apps that store the edited
version as a separate image (instead of storing it together with the
original), you are bothered by seeing two almost-identical photos in your
library and you don't want to get rid of the original photo._

Given a certain amount of self-diagnosed OCD, it's likely that one would be
bothered by having two almost-identical images in Photo Library. I know I am.

Why would I want to keep both images? Well, I have zero confidence in my photo
editing abilities. When I look at my photos that I edited two or more years
ago, I often think: "You should've gone easier on the editing, dummy!"[^editing]

<figure class="w-screen ml-[calc(-50vw+50%)] image-collection">
  <ul class="not-prose flex list-none">
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/over-edit-example-1.jpg" alt="Terschelling, The Netherlands"></li>
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/over-edit-example-2.jpg" alt="Egmond aan Zee, The Netherlands"></li>
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/over-edit-example-3.jpg" alt="Copenhagen, Denmark"></li>
  </ul>
  <figcaption class="text-center">
    A few examples of over-edited photos. I wish I still had their originals.
  </figcaption>
</figure>

In recent versions, iCloud Photo Library will preserve the original photo
alongside the edited version, so if you edit using Photos.app or another app
that supports these iCloud APIs, your library will be neat and tidy. Sadly a
lot of the popular apps still haven't put a lot of thought in this[^vsco-rant],
so unless you are willing to get rid of the original, you are bound to live
with some duplication.

Wouldn't it be great if we could merge the two photos back together and let
Photo Library keep the original for us? Whether it's because of my poor
googling skills or lack of patience, I wasn't able to find an app that would
offer this functionality—until I remembered I already have one: [Pixelmator
for iOS][pixelmator-ios].

I love Pixelmator. On the Mac I don't need Photoshop (nor do I have the
patience to suffer Adobe's software updater and everything that comes with
it). I bought the iOS version of Pixelmator when it came out mostly because I
wanted to support its developers. However I did find it useful at times and
this allowed me to notice it has an option to save an image _in-place_.

I quickly figured out how one can take advantage of this feature to merge an
edited photo together with its original. In this example I have an original
photo and its black and white version. [^bw] I'd like them to appear as one
photo in the library.

<figure class="screenshot">
  <img src="/img/store-original-modified-photo-pixelmator-ios/photo-library-start.png" alt="We'd like these two photos to show as one">
</figure>

These are the steps: start by launching Pixelmator. You want to start a new
document based on an image from you Photo Library. Then create another layer,
again from your Photo Library (if the modified image is smaller than the
original, you will need to use the crop tool to adjust the canvas). Tap the
share icon and choose Save to Photos, then confirm by clicking Modify.

<figure class="w-screen ml-[calc(-50vw+50%)] image-collection screenshot">
  <ul class="grid sm:grid-cols-2 xl:grid-cols-4 not-prose list-none">
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/pixelmator-step-1.png" alt="Start a new Pixelmator document from a photo (the original version)"></li>
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/pixelmator-step-2.png" alt="Add a layer from a photo (the modified version)"></li>
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/pixelmator-step-3.png" alt="Tap the share icon and choose Save to Photos"></li>
    <li><img src="/img/store-original-modified-photo-pixelmator-ios/pixelmator-step-4.png" alt="Confirm"></li>
  </ul>
  <figcaption class="text-center italic">The procedure in pictures.</figcaption>
</figure>

After completing the procedure in Pixelmator, go back to Photos. Both
photos should now look the same at first sight. However if you try to Edit,
tapping and holding on the photo will reveal the original version.

<figure class="m-auto screenshot">
  <img src="/img/store-original-modified-photo-pixelmator-ios/photo-library-final.gif" alt="Final result" class="w-[500px] h-[375px] m-auto">
  <figcaption class="text-center italic">Reveal original by tapping and holding.</figcaption>
</figure>

The other photos can now be removed. Our Photo Libraries are nice and tidy
again. Thanks, Pixelmator!

[^editing]: With time I learned to choose a setting I find aesthetically pleasing and scale it back 20--30% to maximize the chance I'm still going to like the photo in a couple of years, but still…

[^vsco-rant]: How about that [iOS 8 Photo Extension][vsco-faq], VSCO?

[^bw]: I know nothing about black-and-white photography.

[vsco-faq]: https://support.vsco.co/hc/en-us/articles/203001254-VSCO-x-iOS-Where-is-the-iOS-8-Photo-Extension-
[pixelmator-ios]: http://www.pixelmator.com/ios/
