webpackJsonp([0],[function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(24)("wks"),o=n(25),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),o=n(22);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){var r=n(4),o=n(41),i=n(56),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(24)("keys"),o=n(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(42),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(32),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(11),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0),o=n(5),i=n(39),u=n(3),c=function(t,e,n){var s,a,f,p=t&c.F,l=t&c.G,d=t&c.S,h=t&c.P,v=t&c.B,y=t&c.W,m=l?o:o[e]||(o[e]={}),w=m.prototype,x=l?r:d?r[e]:(r[e]||{}).prototype;l&&(n=e);for(s in n)(a=!p&&x&&void 0!==x[s])&&s in m||(f=a?x[s]:n[s],m[s]=l&&"function"!=typeof x[s]?n[s]:v&&a?i(f,r):y&&x[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[s]=f,t&c.R&&w&&!w[s]&&u(w,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";var r=n(45),o=n(19),i=n(51),u=n(3),c=n(6),s=n(7),a=n(43),f=n(23),p=n(48),l=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,y,m,w){a(n,e,v);var x,g,k,b=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",T="values"==y,S=!1,O=t.prototype,$=O[l]||O["@@iterator"]||y&&O[y],j=$||b(y),M=y?T?b("entries"):j:void 0,V="Array"==e?O.entries||$:$;if(V&&(k=p(V.call(new t)))!==Object.prototype&&(f(k,_,!0),r||c(k,l)||u(k,l,h)),T&&$&&"values"!==$.name&&(S=!0,j=function(){return $.call(this)}),r&&!w||!d&&!S&&O[l]||u(O,l,j),s[e]=j,s[_]=h,y)if(x={values:T?j:b("values"),keys:m?j:b("keys"),entries:M},w)for(g in x)g in O||i(O,g,x[g]);else o(o.P+o.F*(d||S),e,x);return x}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(8).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(9),o=n.n(r),i=n(28),u=n(29),c=function t(){o()(this,t),this.isTouch="ontouchstart"in window||navigator.maxTouchPoints,document.documentElement.classList.add(this.isTouch?"touch":"no-touch"),this.demo=new i.a,this.scroll=new u.a};e.a=c},function(t,e){},function(t,e,n){"use strict";var r=n(9),o=n.n(r),i=n(15),u=n.n(i),c=n(64),s=n.n(c),a=n(63),f=n.n(a),p=function(){function t(){var e=this;o()(this,t),this.step=0,this.$container=document.querySelector(".js-demo"),this.$speaker=this.$container.querySelector(".js-speaker"),this.$speakerVideo=document.createElement("video"),this.$speakerVideo.playsinline=!0,this.$speakerVideo.webkitPlaysinline=!0,this.$speakerVideo.muted=!0,this.$speakerVideo.src=s.a,this.$speakerVideo.height=300,this.$speaker.appendChild(this.$speakerVideo),this.speakerCurrentTime=0,this.$audience=this.$container.querySelector(".js-audience"),this.$audienceVideo=document.createElement("video"),this.$audienceVideo.playsinline=!0,this.$audienceVideo.webkitPlaysinline=!0,this.$audienceVideo.muted=!0,this.$audienceVideo.src=f.a,this.$audienceVideo.height=300,this.$audience.appendChild(this.$audienceVideo),this.audienceCurrentTime=0,window.setTimeout(function(){e.goStep(0)},1e3),this.$audienceVideo.addEventListener("ended",function(){window.setTimeout(function(){e.goStep(6)},2e3)}),this.setLoop()}return u()(t,[{key:"setLoop",value:function(){var t=this;!function e(){window.requestAnimationFrame(e),t.loop()}()}},{key:"loop",value:function(){this.speakerCurrentTime<7&&this.$speakerVideo.currentTime>=7&&this.goStep(2),this.audienceCurrentTime<.85&&this.$audienceVideo.currentTime>=.85&&this.goStep(3),this.speakerCurrentTime<15.5&&this.$speakerVideo.currentTime>=15.5&&this.goStep(4),this.speakerCurrentTime<17.25&&this.$speakerVideo.currentTime>=17.25&&this.goStep(5),this.speakerCurrentTime=this.$speakerVideo.currentTime,this.audienceCurrentTime=this.$audienceVideo.currentTime}},{key:"goStep",value:function(t){var e=this;switch(this.step=t,this.$container.classList.add("step-"+this.step),this.step){case 0:this.$speakerVideo.currentTime=0,this.$speakerVideo.play().then(function(){e.goStep(1)});break;case 1:break;case 2:this.$audienceVideo.play();break;case 6:window.setTimeout(function(){for(var t=0;t<7;t++)e.$container.classList.remove("step-"+t)},800),window.setTimeout(function(){e.goStep(0)},1600)}}}]),t}();e.a=p},function(t,e,n){"use strict";var r=n(31),o=n.n(r),i=n(9),u=n.n(i),c=n(15),s=n.n(c),a=function(){function t(){u()(this,t),this.parse()}return s()(t,[{key:"parse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=t||document,n=e.querySelectorAll(".js-scroll-item:not(.scroll-item-set)"),r=!0,i=!1,u=void 0;try{for(var c,s=o()(n);!(r=(c=s.next()).done);r=!0){var a=c.value;this.setItem(a)}}catch(t){i=!0,u=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw u}}}},{key:"setItem",value:function(t){var e=this;t.addEventListener("click",function(n){n.preventDefault();var r=t.getAttribute("href"),o=document.querySelector(r);o&&e.scrollTo(o.offsetTop)})}},{key:"scrollTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,n=window.scrollY||document.documentElement.scrollTop,r=0,o=Math.max(.1,Math.min(Math.abs(n-t)/e,.8)),i=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)};!function e(){r+=1/60;var u=r/o,c=i(u);u<1?(window.requestAnimationFrame(e),window.scrollTo(0,n+(t-n)*c)):window.scrollTo(0,t)}()}}]),t}();e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),o=(n.n(r),n(26));new o.a},function(t,e,n){t.exports={default:n(33),__esModule:!0}},function(t,e,n){t.exports={default:n(34),__esModule:!0}},function(t,e,n){n(62),n(61),t.exports=n(58)},function(t,e,n){n(60);var r=n(5).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(14),o=n(54),i=n(53);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(16),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=n(0).document&&document.documentElement},function(t,e,n){t.exports=!n(2)&&!n(20)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(46),o=n(22),i=n(23),u={};n(3)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=!0},function(t,e,n){var r=n(4),o=n(47),i=n(18),u=n(12)("IE_PROTO"),c=function(){},s=function(){var t,e=n(17)("iframe"),r=i.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(8),o=n(4),i=n(50);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(6),o=n(55),i=n(12)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(6),o=n(14),i=n(37)(!1),u=n(12)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(49),o=n(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){t.exports=n(3)},function(t,e,n){var r=n(13),o=n(10);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(13),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(38),o=n(1)("iterator"),i=n(7);t.exports=n(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(4),o=n(57);t.exports=n(5).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";var r=n(36),o=n(44),i=n(7),u=n(14);t.exports=n(21)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(19);r(r.S+r.F*!n(2),"Object",{defineProperty:n(8).f})},function(t,e,n){"use strict";var r=n(52)(!0);n(21)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(59);for(var r=n(0),o=n(3),i=n(7),u=n(1)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var a=c[s],f=r[a],p=f&&f.prototype;p&&!p[u]&&o(p,u,a),i[a]=i.Array}},function(t,e,n){t.exports=n.p+"static/media/audience.0c01a49.mp4"},function(t,e,n){t.exports=n.p+"static/media/speaker.68179fd.mp4"}],[30]);
//# sourceMappingURL=app.4ecde80c8554ea4fd667.js.map