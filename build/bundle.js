!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" ",x:"x",right:"ArrowRight"},e.paddleHeight=56,e.paddleWidth=8,e.gapSize=10,e.gameHeight=256,e.gameWidth=512},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=i(6),l=n(a),u=i(7),h=n(u),c=i(5),d=n(c),f=i(8),p=n(f),b=i(9),v=n(b),y=function(){function t(e){var i=this;r(this,t),this.gameElement=document.getElementById(e),this.board=new l.default(o.gameWidth,o.gameHeight),this.end=!1,this.paddle1=new h.default(o.paddleWidth,o.paddleHeight,o.gapSize,(o.gameHeight-o.paddleHeight)/2,o.KEYS.a,o.KEYS.z),this.paddle2=new h.default(o.paddleWidth,o.paddleHeight,o.gameWidth-o.paddleWidth-o.gapSize,(o.gameHeight-o.paddleHeight)/2,o.KEYS.up,o.KEYS.down),this.ball=new d.default(8),this.score1=new p.default(o.gameWidth/2-80,30,30),this.score2=new p.default(o.gameWidth/2+40,30,30),this.balls=[],this.scoreCard=new v.default(o.gameWidth,o.gameHeight,e),this.i=-1,this.a=0,this.color="white",this.p1Color="red",this.p2Color="crimson",this.colorArray=[],this.pause=!0,document.addEventListener("keydown",function(t){switch(t.key){case o.KEYS.x:case o.KEYS.right:i.colourfulBalls()}}),document.addEventListener("keydown",function(t){switch(t.key){case o.KEYS.spaceBar:i.resume()}})}return s(t,[{key:"resume",value:function(){this.pause=!this.pause,!0===this.end&&(this.end=!1,this.pause=!this.pause)}},{key:"colourfulBalls",value:function(){this.balls.push(new d.default(10*Math.random()+3)),this.color=Math.floor(1e6*Math.random()),this.colorArray.push("#"+this.color),this.i=Math.min(this.i+1,9)}},{key:"ballArray",value:function(){if(this.i>=0)for(this.a=0;this.a<=this.i;this.a++)this.balls[this.a].x<=0?(this.balls.splice(this.a,1),this.colorArray.splice(this.a,1),this.i--,this.ball.goal(this.paddle2)):this.balls[this.a].x>=o.gameWidth&&(this.balls.splice(this.a,1),this.colorArray.splice(this.a,1),this.ball.goal(this.paddle1),this.i--)}},{key:"winner",value:function(){this.paddle1.score=0,this.paddle2.score=0,this.colorArray=[],this.i=-1,this.a=0,this.ball.reset(),this.end=!0,this.balls=[]}},{key:"render",value:function(){if(!this.pause){if(this.end)return void this.winner();this.gameElement.innerHTML="";var t=document.createElementNS(o.SVG_NS,"svg");for(t.setAttributeNS(null,"version","1.1"),t.setAttributeNS(null,"width",o.gameWidth),t.setAttributeNS(null,"height",o.gameHeight),t.setAttributeNS(null,"viewbox","0, 0, "+o.gameWidth+" "+o.gameHeight),this.gameElement.appendChild(t),this.board.render(t),this.score1.render(t,this.paddle1.score),this.score2.render(t,this.paddle2.score),20===this.paddle1.score?(this.gameElement.innerHTML="",this.scoreCard.render("Player 1",this.p1Color),this.winner()):20===this.paddle2.score&&(this.gameElement.innerHTML="",this.scoreCard.render("Player 2",this.p2Color),this.winner()),this.paddle1.render(t),this.paddle2.render(t),this.ball.render(t,this.paddle1,this.paddle2),this.ballArray(),this.a=0;this.a<=this.i;this.a++)this.balls[this.a].color=this.colorArray[this.a],this.balls[this.a].render(t,this.paddle1,this.paddle2)}}}]),t}();e.default=y},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.i,n,""]]);i(15)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";i(3);var n=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(n),s=new r.default("game");!function t(){s.render(),requestAnimationFrame(t)}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=function(){function t(e){for(n(this,t),this.radius=e,this.direction=0,this.color="white",this.pingW=new Audio("public/sounds/pong-01.wav"),this.pingP=new Audio("public/sounds/pong-03.wav"),this.pingS=new Audio("public/sounds/pong-02.wav");0===this.direction;)this.direction=Math.floor(2*Math.random()-.48);this.reset()}return s(t,[{key:"wallBounce",value:function(){(this.y<=this.radius||this.y>=o.gameHeight-this.radius)&&(this.vy=-this.vy,this.pingW.play())}},{key:"paddleBounce",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=r(i,4),s=n[0],o=n[1],a=n[2],l=n[3],u=this.x+this.radius,h=this.y-this.radius/2,c=this.y-this.radius/2;u>=s&&u<=o+this.vx+this.radius&&c<=l&&h>=a&&(this.vx=-this.vx,this.pingP.play())}else{var d=t.coordinates(t.x,t.y,t.width,t.height),f=r(d,4),p=f[0],b=f[1],v=f[2],y=f[3],g=this.x-this.radius,m=this.y-this.radius/2,w=this.y-this.radius/2;g<=b&&g>=p-this.vx-this.radius&&w<=y&&m>=v&&(this.vx=-this.vx,this.pingP.play())}}},{key:"goal",value:function(t){t.score++,this.pingS.play()}},{key:"render",value:function(t,e,i){this.x-this.radius>=o.gameWidth?(this.direction=1,this.goal(e)):this.x+this.radius<=0&&(this.direction=-1,this.goal(i)),this.x-this.radius>=o.gameWidth?this.reset():this.x+this.radius<=0&&this.reset(),this.x+=this.vx,this.y+=this.vy;var n=document.createElementNS(o.SVG_NS,"circle");n.setAttributeNS(null,"r",this.radius),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),n.setAttributeNS(null,"fill",this.color),t.appendChild(n),this.wallBounce(),this.paddleBounce(e,i)}},{key:"reset",value:function(){for(this.x=o.gameWidth/2,this.y=o.gameHeight/2,this.vx=0,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);for(;0===this.vx;)this.vx=this.direction*Math.floor(6-Math.abs(this.vy))}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","#BECAFF"),t.appendChild(e);var i=document.createElementNS(s.SVG_NS,"line");i.setAttributeNS(null,"stroke-dasharray","6, 4"),i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","whitesmoke"),i.setAttributeNS(null,"stroke-width","4"),i.setAttributeNS(null,"y1","0"),t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r,s,o,a){var l=this;n(this,t),this.width=e,this.height=i,this.x=r,this.y=s,this.speed=10,this.score=0,document.addEventListener("keydown",function(t){switch(t.key){case o:l.up();break;case a:l.down()}})}return r(t,[{key:"coordinates",value:function(t,e,i,n){return[t,t+i,e,e+n]}},{key:"up",value:function(){this.y=Math.max(this.y-this.speed,0)}},{key:"down",value:function(){this.y=Math.min(this.y+this.speed,s.gameHeight-this.height)}},{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","white"),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),t.appendChild(e)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-family","../../public/fonts/slksrc-webfont.svg"),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"fill","whitesmoke"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.width=e,this.height=i,this.gameElement=document.getElementById(r),this.win=new Audio("public/sounds/pong-04.wav")}return r(t,[{key:"render",value:function(t,e){this.win.play();var i=document.createElementNS(s.SVG_NS,"svg");i.setAttributeNS(null,"version","1.1"),i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height),i.setAttributeNS(null,"viewbox","0, 0, "+this.width+" "+this.height),this.gameElement.appendChild(i);var n=document.createElementNS(s.SVG_NS,"text");n.setAttributeNS(null,"x",46),n.setAttributeNS(null,"y",this.height/2),n.setAttributeNS(null,"font-family","../../public/fonts/slkscr-webfont.svg"),n.setAttributeNS(null,"font-size",44),n.setAttributeNS(null,"fill",e),n.textContent=t+"  Wins!!!",i.appendChild(n);var r=document.createElementNS(s.SVG_NS,"text");r.setAttributeNS(null,"x",37),r.setAttributeNS(null,"y",this.height/1.7),r.setAttributeNS(null,"font-family","../../public/fonts/slkscr-webfont.svg"),r.setAttributeNS(null,"font-size",19),r.setAttributeNS(null,"fill","black"),r.textContent="(press spacebar to start a new game)",i.appendChild(r)}}]),t}();e.default=o},function(t,e,i){e=t.exports=i(11)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(14)+') format("woff"),url('+i(13)+') format("truetype"),url('+i(12)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=d[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(l(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(l(n.parts[s],e));d[n.id]={id:n.id,refs:1,parts:o}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o=r[1],a=r[2],l=r[3],u={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(u):e.push(i[s]={id:s,parts:[u]})}return e}function r(t,e){var i=b(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var l=y++;i=v||(v=o(e)),n=u.bind(null,i,l,!1),r=u.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=a(e),n=c.bind(null,i),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=h.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function c(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var d={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var s=[],o=0;o<r.length;o++){var a=r[o],l=d[a.id];l.refs--,s.push(l)}if(t){i(n(t),e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);