!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);Object.defineProperty(t,"ENTER_NAME",{enumerable:!0,get:function(){return r.ENTER_NAME}}),Object.defineProperty(t,"CHOOSE_TASK",{enumerable:!0,get:function(){return r.CHOOSE_TASK}}),Object.defineProperty(t,"CHECK_RESULT",{enumerable:!0,get:function(){return r.CHECK_RESULT}}),Object.defineProperty(t,"START_ROUND",{enumerable:!0,get:function(){return r.START_ROUND}}),Object.defineProperty(t,"WIN",{enumerable:!0,get:function(){return r.WIN}}),Object.defineProperty(t,"LOSS",{enumerable:!0,get:function(){return r.LOSS}}),Object.defineProperty(t,"RECORD",{enumerable:!0,get:function(){return r.RECORD}}),Object.defineProperty(t,"WRONG",{enumerable:!0,get:function(){return r.WRONG}}),Object.defineProperty(t,"RIGHT",{enumerable:!0,get:function(){return r.RIGHT}}),Object.defineProperty(t,"TRANSLITE_TITLE",{enumerable:!0,get:function(){return r.TRANSLITE_TITLE}}),Object.defineProperty(t,"ARITHMETIC_TITLE",{enumerable:!0,get:function(){return r.ARITHMETIC_TITLE}}),Object.defineProperty(t,"TIME",{enumerable:!0,get:function(){return r.TIME}}),Object.defineProperty(t,"VOLUME",{enumerable:!0,get:function(){return r.VOLUME}}),Object.defineProperty(t,"HEALTH_POINTS",{enumerable:!0,get:function(){return r.HEALTH_POINTS}}),Object.defineProperty(t,"HINT",{enumerable:!0,get:function(){return r.HINT}}),Object.defineProperty(t,"LOSS_POINTS",{enumerable:!0,get:function(){return r.LOSS_POINTS}});var o=n(11);Object.defineProperty(t,"CSS_CLASS",{enumerable:!0,get:function(){return o.CSS_CLASS}});var i=n(12);Object.defineProperty(t,"EVENT",{enumerable:!0,get:function(){return i.EVENT}});var s=n(13);Object.defineProperty(t,"ID",{enumerable:!0,get:function(){return s.ID}});var a=n(14);Object.defineProperty(t,"STATE",{enumerable:!0,get:function(){return a.STATE}})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,c=0,l=[],f=n(19);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=u||(u=m(t)),r=w.bind(null,n,s,!1),o=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var g,T=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=T(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalWindowContent=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);n(36);t.ModalWindowContent=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createModalWindow()}return r(e,[{key:"createModalWindow",value:function(){var e=document.getElementById(o.ID.MODAL);e?this.modal=e:(this.modal=document.createElement("div"),this.modal.setAttribute("id",o.ID.MODAL),this.modal.setAttribute("class",o.CSS_CLASS.MODAL),document.body.appendChild(this.modal)),this.modal.classList.add(o.CSS_CLASS.FLEX)}},{key:"createTitle",value:function(e){this.title=document.createElement("h2"),this.title.setAttribute("class",o.CSS_CLASS.TITLE),this.title.textContent=e,this.modal.appendChild(this.title)}},{key:"createButton",value:function(){var e=this;this.button=document.createElement("button"),this.button.setAttribute("id",o.ID.BUTTON),this.button.textContent=o.CHECK_RESULT,this.modal.appendChild(this.button),this.button.addEventListener("click",function(){return e.checkAnswer(event)})}},{key:"checkAnswer",value:function(e){var t=e.target;"Enter"===e.code||"click"===e.target?this.checkResult():t.id===o.ID.BUTTON&&this.checkResult()}}]),e}()},function(e,t,n){"use strict";e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LoadingImages=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sprite=new Image,this.sprite.src=t,this.sprite.onload=function(){r.height=r.sprite.height,r.windowPosition={},r.windowPosition.dx=n,r.windowPosition.dy=document.documentElement.clientWidth/2-r.height,r.spriteWidth=r.sprite.width}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Person=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);t.Person=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.context=t,this.healthPoints=100}return r(e,[{key:"animate",value:function(e){this.image=e.figureImage.sprite,this.context.clearRect(e.figureImage.windowPosition.dx,e.figureImage.windowPosition.dy,2*e.position.dWidth,2*e.position.dHeight),e.position.sx<e.figureImage.spriteWidth-e.position.sWidth?e.position.sx+=e.position.sWidth:(e.position.sx=0,this.state=o.STATE.DEFAULT),this.context.drawImage(this.image,e.position.sx,e.position.sy,e.position.sWidth,e.position.sHeight,e.figureImage.windowPosition.dx,e.figureImage.windowPosition.dy,e.position.dWidth,e.position.dHeight)}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomInteger=function(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)}},function(e,t,n){"use strict";(new(n(9).App)).init()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=n(15),a=(r=s)&&r.__esModule?r:{default:r};n(16);var u=n(20);t.App=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"init",value:function(){var e=this;this.createMusic(),this.createCanvas(),this.round=new u.Round(this.ctx),this.registerUser(),window.addEventListener("keydown",function(){return e.tabDiabke(event)})}},{key:"tabDiabke",value:function(e){e.code!==i.EVENT.TAB&&e.code!==i.EVENT.SPACE||(e.returnValue=!1)}},{key:"createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=document.documentElement.clientWidth,this.canvas.height=document.documentElement.clientHeight,document.body.appendChild(this.canvas)}},{key:"registerUser",value:function(){var e=this;this.userInputContainer=document.createElement("div"),this.userInputContainer.setAttribute("id",i.ID.USER_INPUT_CONTAINER),this.userInputContainer.textContent=i.ENTER_NAME,this.userInput=document.createElement("input"),this.userInput.setAttribute("id",i.ID.USER_INPUT),this.userInputContainer.appendChild(this.userInput),document.body.appendChild(this.userInputContainer),this.userInput.focus(),this.userInput.addEventListener("keyup",function(){return e.round.getUserName(event,e.userInputContainer,e.userInput)})}},{key:"createMusic",value:function(){this.audio=new Audio,this.audio.volume=i.VOLUME.MUSIC,this.audio.src=a.default,this.audio.play(),this.audio.autoplay=!0,this.audio.loop=!0}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHECK_RESULT="Check result!",t.CHOOSE_TASK="Choose the task!",t.ENTER_NAME="Enter your name",t.START_ROUND="Start new round",t.WIN="You win!",t.LOSS="You loss!",t.WRONG="Sorry, it is the wrong answer",t.RIGHT="Yes, you are right!",t.TRANSLITE_TITLE="Translate the word",t.ARITHMETIC_TITLE="Enter the right number",t.HEALTH_POINTS=100,t.LOSS_POINTS=50,t.HINT="Press the first letter of task name",t.RECORD={SHOW:"Record Table",CLOSE:"close"},t.VOLUME={MUSIC:.03,ATTACK:.08},t.TIME={INIT:2e3,CLOSE:1e3,TASK:200}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CSS_CLASS={SELECT:"select",HIDDEN:"hidden",FLEX:"flex",VISIBLE:"visible",TITLE:"title",MODAL:"modal"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EVENT={ENTER:"Enter",ARROW_RIGHT:"ArrArrowRightow",ARROW_LEFT:"ArrowLeft",SPACE:"Space",CLICK:"click",SUBMIT:"submit",ESCAPE:"Escape",TAB:"Tab",KEY_A:"KeyA",KEY_T:"KeyT"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ID={START_BUTTON:"start-button",RECORD_TABLE:"record-table",RECORD_BUTTON:"record-button",TRANSLATOR_EXPRESSION:"translator-expression",INPUT_TRANSLATOR:"input-translator",EXPRESSION:"expression",INPUT_EXPRESSION:"input-expression",USER_INPUT:"user-input",USER_INPUT_CONTAINER:"user-input-container",MODAL:"modal",BUTTON:"button"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STATE={DEFAULT:"default",ATTACK:"attack",LOSS:"loss"}},function(e,t,n){e.exports=n.p+"a4a2011ac1672d9b7cb0eed6bf45545c.mp3"},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(4);(e.exports=n(1)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Courier New', Courier, monospace;\n}\n\ncanvas {\n  background: url("+r(n(18))+");\n  background-size: cover;\n}\n\n#user-input-container {\n  position: absolute;\n  top: 50vh;\n  left: 0vh;\n\n  width: 300px;\n  padding: 50px;\n  margin: 0 35%;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n\n  font-size: 1.5em;\n  text-align: center;\n  color: #ffffff;\n\n  background: cornflowerblue;\n}\n\n#user-input {\n  flex-basis: 100%;\n  margin-top: 15px;\n  padding: 10px;\n\n  font-size: 1.2em;\n  text-indent: 10px;\n  color: cornflowerblue;\n\n  border: none;\n  outline: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.flex {\n  display: flex;\n}\n\n.visible {\n  display: block;\n}\n",""])},function(e,t,n){e.exports=n.p+"./images/background.jpg"},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Round=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(21);var o,i=n(23),s=(o=i)&&o.__esModule?o:{default:o},a=n(0),u=n(24),c=n(28),l=n(32);t.Round=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.context=t,this.user=new u.User(this.context),this.opponent=new c.Opponent(this.context),this.modalWindow=new l.ModalWindow,this.roundCount=0,this.speed=10,this.tickCount=0}return r(e,[{key:"start",value:function(){var e=this;this.createButton(),this.createAttackSound(),this.createRecordTable(),this.render(),window.addEventListener("getTaskResult",function(){return e.getTaskResult(event.detail.result)}),window.addEventListener("keydown",function(){return e.showHideTableOfRecords(event)}),window.addEventListener("click",function(){return e.removeButton(event)})}},{key:"createAttackSound",value:function(){this.audio=new Audio,this.audio.volume=a.VOLUME.ATTACK,this.audio.src=s.default}},{key:"createButton",value:function(){var e=this;this.startButton=document.createElement("button"),this.startButton.setAttribute("id",a.ID.START_BUTTON),this.startButton.textContent=a.START_ROUND,this.startButton.addEventListener("keydown",function(){return e.removeButton(event)}),document.body.appendChild(this.startButton),this.startButton.focus()}},{key:"showButton",value:function(){this.startButton.classList.toggle(a.CSS_CLASS.HIDDEN),this.startButton.focus()}},{key:"removeButton",value:function(e){e.code!==a.EVENT.ENTER&&e.target.id!==a.ID.START_BUTTON||(this.startButton.classList.toggle(a.CSS_CLASS.HIDDEN),this.startButton.blur(),this.modalWindow.init())}},{key:"getTaskResult",value:function(e){var t=this;e?this.changePlayerState(this.user,this.opponent):this.changePlayerState(this.opponent,this.user),this.checkHealth(),setTimeout(function(){t.modalWindow.modal.innerHTML="",t.modalWindow.modal.classList.toggle(a.CSS_CLASS.FLEX)},a.TIME.CLOSE)}},{key:"changePlayerState",value:function(e,t){e.state=a.STATE.ATTACK,t.state=a.STATE.LOSS,t.healthPoints-=a.LOSS_POINTS,this.audio.play()}},{key:"checkHealth",value:function(){var e=this;0===this.opponent.healthPoints?this.finish(!0):0===this.user.healthPoints?this.finish(!1):setTimeout(function(){return e.modalWindow.init()},a.TIME.INIT)}},{key:"render",value:function(){var e=this;this.tickCount>this.speed&&(this.checkState(this.user),this.checkState(this.opponent),this.tickCount=0),this.tickCount+=1,requestAnimationFrame(function(){return e.render()})}},{key:"checkState",value:function(e){var t=e.figureRest;switch(e.state){case a.STATE.LOSS:t=e.figureLoss;break;case a.STATE.ATTACK:t=e.figureAttack}e.animate(t)}},{key:"finish",value:function(e){var t=this;e?(this.modalWindow.modal.textContent=a.WIN,this.roundCount+=1,this.updateHealth(),setTimeout(function(){return t.showButton()},a.TIME.CLOSE)):(this.modalWindow.modal.textContent=a.LOSS,setTimeout(function(){return t.showHideTableOfRecords({key:a.EVENT.ESCAPE})},a.TIME.CLOSE))}},{key:"showHideTableOfRecords",value:function(e){e.key!==a.EVENT.ESCAPE&&e.target.id!==a.ID.RECORD_BUTTON||(this.recordTable=document.getElementById(a.ID.RECORD_TABLE),this.recordTable.className!==a.CSS_CLASS.HIDDEN?this.recordButton.textContent=a.RECORD.SHOW:this.recordButton.textContent=a.RECORD.CLOSE,this.recordTable.classList.toggle(a.CSS_CLASS.HIDDEN))}},{key:"createRecordButton",value:function(){var e=this;this.recordButton=document.createElement("button"),this.recordButton.textContent=a.RECORD.SHOW,this.recordButton.setAttribute("id",a.ID.RECORD_BUTTON),document.body.appendChild(this.recordButton),this.recordButton.addEventListener("click",function(){return e.showHideTableOfRecords(event)})}},{key:"createRecordTable",value:function(){this.recordTable=document.createElement("div"),this.recordTable.setAttribute("id",a.ID.RECORD_TABLE),this.recordTable.textContent=this.userName+"  "+this.roundCount,document.body.appendChild(this.recordTable),this.recordTable.classList.toggle(a.CSS_CLASS.HIDDEN)}},{key:"getUserName",value:function(e,t,n){e.key===a.EVENT.ENTER&&(this.userName=n.value,n.blur(),t.classList.toggle(a.CSS_CLASS.HIDDEN),this.start(),this.createRecordButton())}},{key:"updateHealth",value:function(){this.user.healthPoints=a.HEALTH_POINTS,this.opponent.healthPoints=a.HEALTH_POINTS}}]),e}()},function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"#record-table {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 45% 0;\n\n  font-size: 2em;\n  text-align: center;\n  color: #ffffff;\n\n  background: rgba(114, 108, 176, 0.831);\n\n  z-index: 10;\n}\n\n#record-button {\n  position: absolute;\n  top: 40px;\n  right: 10%;\n  padding: 20px;\n\n  font-size: 2em;\n  font-family: 'Courier New', Courier, monospace;\n  color: #ffffff;\n\n  background: rgba(114, 108, 176, 0.831);\n  border-radius: 5px;\n\n  transition-duration: 0.3s;\n\n  z-index: 100;\n  outline: none;\n}\n\n#record-button:hover {\n  background: rgba(98, 91, 177, 0.9);\n}\n\n#start-button {\n  position: absolute;\n  left: 40%;\n  top: 30vh;\n  padding: 10px 30px;\n\n  font-size: 3em;\n  font-family: 'Courier New', Courier, monospace;\n  color: #ffffff;\n\n  border: 4px solid #ffffff;\n  border-radius: 5px;\n\n  background: transparent;\n\n  outline: none;\n}\n\n#start-button:focus {\n  animation: focuseButton 1s infinite ease-out;\n  -webkit-animation: focuseButton 1s infinite ease-out;\n}\n\n@keyframes focuseButton {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n}\n  50% {\n    transform: scale(1.3);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.3);\n    -ms-transform: scale(1.3);\n    -o-transform: scale(1.3);\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n}\n",""])},function(e,t,n){e.exports=n.p+"6cf67e6eeed8a9aafcac6242f5f64bb6.mp3"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0;var r=c(n(25)),o=c(n(26)),i=c(n(27)),s=n(0),a=n(5),u=n(6);function c(e){return e&&e.__esModule?e:{default:e}}t.User=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=s.STATE.DEFAULT,n.positionInWindow=document.documentElement.clientWidth/2-400,n.figureRest={figureImage:new a.LoadingImages(r.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:36,sHeight:70,dWidth:100,dHeight:110}},n.figureAttack={figureImage:new a.LoadingImages(o.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:63,sHeight:70,dWidth:130,dHeight:130}},n.figureLoss={figureImage:new a.LoadingImages(i.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:70,sHeight:80,dWidth:130,dHeight:130}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Person),t}()},function(e,t,n){e.exports=n.p+"./images/default.png"},function(e,t,n){e.exports=n.p+"./images/attack.png"},function(e,t,n){e.exports=n.p+"./images/loss.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Opponent=void 0;var r=c(n(29)),o=c(n(30)),i=c(n(31)),s=n(0),a=n(6),u=n(5);function c(e){return e&&e.__esModule?e:{default:e}}t.Opponent=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=s.STATE.DEFAULT,n.positionInWindow=document.documentElement.clientWidth/2+300,n.figureRest={figureImage:new u.LoadingImages(r.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:36.3,sHeight:70,dWidth:100,dHeight:110}},n.figureAttack={figureImage:new u.LoadingImages(o.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:63,sHeight:70,dWidth:130,dHeight:130}},n.figureLoss={figureImage:new u.LoadingImages(i.default,n.positionInWindow),position:{sx:0,sy:0,sWidth:70,sHeight:80,dWidth:130,dHeight:130}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Person),t}()},function(e,t,n){e.exports=n.p+"./images/default-1.png"},function(e,t,n){e.exports=n.p+"./images/attack-1.png"},function(e,t,n){e.exports=n.p+"./images/loss-1.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalWindow=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=n(33);t.ModalWindow=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"init",value:function(){var e=this;this.selectTask=new i.SelectTask,this.selectTask.drawNewTask=function(){return e.drawTask()}}},{key:"drawTask",value:function(){var e=this;this.selectTask.newTask.create(),this.selectTask.newTask.showResult=function(t){return e.showTaskResult(t)}}},{key:"showTaskResult",value:function(e){this.modal=this.selectTask.newTask.modal,this.modal.textContent=e?o.RIGHT:o.WRONG;var t=new CustomEvent("getTaskResult",{detail:{result:e}});window.dispatchEvent(t)}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectTask=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);n(34);var i=n(3),s=n(39),a=n(42);var u={ARITHMETIC:"Arithmetic",TRANSLATOR:"Translator"};t.SelectTask=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.tasks=[u.ARITHMETIC,u.TRANSLATOR],e.create(),window.addEventListener("keyup",function(){return e.makeFocus(event)}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.ModalWindowContent),r(t,[{key:"create",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createTitle",this).call(this,o.CHOOSE_TASK),this.createButtons(),this.createHint()}},{key:"createHint",value:function(){this.hint=document.createElement("p"),this.hint.textContent=o.HINT,this.modal.appendChild(this.hint)}},{key:"createButtons",value:function(){var e=this;this.tasks.forEach(function(t){e.select=document.createElement("button"),e.select.setAttribute("class",o.CSS_CLASS.SELECT),e.select.setAttribute("data-name",t),e.select.textContent=t,e.modal.appendChild(e.select),e.select.addEventListener("click",function(){return e.chooseTask(event)})})}},{key:"makeFocus",value:function(e){var t=e.code,n=document.getElementById(o.ID.RECORD_TABLE);if(this.select.parentNode&&n.className===o.CSS_CLASS.HIDDEN)switch(t){case o.EVENT.KEY_A:this.showTask(new s.Arithmetic);break;case o.EVENT.KEY_T:this.showTask(new a.Translator)}}},{key:"chooseTask",value:function(e){if(e.target.className===o.CSS_CLASS.SELECT){var t=event.target.dataset.name;t===this.tasks[0]?this.showTask(new s.Arithmetic):t===this.tasks[1]&&this.showTask(new a.Translator)}}},{key:"showTask",value:function(e){this.modal.innerHTML="",this.newTask=e,this.drawNewTask()}}]),t}()},function(e,t,n){var r=n(35);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".title {\n  flex-basis: 100%;\n\n  color: #56a5fa;\n  text-align: center;\n}\n\n.select {\n  padding: 10px;\n  margin: 10px;\n\n  font-size: 1.5em;\n  color: #ffffff;\n\n  border: none;\n  background: #56a5fa;\n  \n  transition-duration: 0.5s;\n}\n\n.select:hover {\n  background: #187dec;\n}",""])},function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(4);(e.exports=n(1)(!1)).push([e.i,".modal {\n  position: absolute;\n  left: 36%;\n  top: 30vh;\n\n  display: none;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n\n  color: #187dec;\n\n  background-size: 100px 100px;\n  border: 45px dashed transparent;\n  border-radius: 5px;\n  border-image: url("+r(n(38))+") 17% 14%  round;\n  \n  -webkit-box-shadow: inset 200px 200px 0px 200px rgba(226,241,255,0.96);\n  -moz-box-shadow: inset 200px 200px 0px 200px rgba(226,241,255,0.96);\n  box-shadow: inset 200px 200px 0px 200px rgba(226,241,255,0.96);\n\n  animation: fade 1s ease-out;\n  -webkit-animation: fade 1s ease-out;\n\n}\n\n@keyframes fade {\n  0% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    -o-transform: scale(0);\n}\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n  }\n}\n\n#modal-title {\n  flex-basis: 100%;\n\n  text-align: center;\n  color: #187dec;\n}\n\n#button {\n  flex-basis: 90%;\n  padding: 10px;\n\n  font-size: 1.3em;\n  font-family: 'Courier New', Courier, monospace;\n  color: #ffffff;\n  \n  background: #56a5fa;\n}\n\n.flex {\n  display: flex;\n}\n",""])},function(e,t,n){e.exports=n.p+"./images/border.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Arithmetic=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(r):void 0},i=n(0);n(40);var s=n(7),a=n(3);var u="÷",c="×",l=function(){var e=(0,s.getRandomInteger)(0,100),t=(0,s.getRandomInteger)(1,100);return{value:e+t,text:e+" + "+t+" = "}},f=function(){var e=(0,s.getRandomInteger)(0,100),t=(0,s.getRandomInteger)(0,e);return{value:e-t,text:e+" - "+t+" = "}},d=function(){var e=(0,s.getRandomInteger)(0,10),t=(0,s.getRandomInteger)(0,10);return{value:e*t,text:e+" "+c+" "+t+" = "}};var p=function(){var e=function(e){for(var t=[],n=2;n<e;n+=1)for(var r=2;r<n;r+=1){n%r==0&&t.push(n);break}return t}(100),t=e[(0,s.getRandomInteger)(0,e.length-1)],n=function(e){for(var t=[],n=1;n<e-1;n+=1)e%n==0&&t.push(n);return t[(0,s.getRandomInteger)(0,t.length-1)]}(t);return{value:t/n,text:t+" "+u+" "+n+" = "}};t.Arithmetic=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.operators=[l,f,d,p],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.ModalWindowContent),r(t,[{key:"create",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createTitle",this).call(this,i.ARITHMETIC_TITLE),this.createExpression(),this.createUserAnswer(),o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createButton",this).call(this),this.drawExpression()}},{key:"createExpression",value:function(){this.expression=document.createElement("span"),this.expression.setAttribute("id",i.ID.EXPRESSION),this.modal.appendChild(this.expression)}},{key:"createUserAnswer",value:function(){var e=this;this.userAnswer=document.createElement("input"),this.userAnswer.setAttribute("id",i.ID.INPUT_EXPRESSION),this.modal.appendChild(this.userAnswer),this.userAnswer.focus(),this.userAnswer.addEventListener("keydown",function(){return o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"checkAnswer",e).call(e,event)})}},{key:"getTask",value:function(){return this.getRandomOperator()()}},{key:"getRandomOperator",value:function(){var e=this.operators.length-1,t=(0,s.getRandomInteger)(0,e);return this.operators[t]}},{key:"drawExpression",value:function(){this.answer=this.getTask(),this.expression.textContent=this.answer.text}},{key:"checkResult",value:function(){Number(this.userAnswer.value)===this.answer.value?this.showResult(!0):this.showResult(!1)}}]),t}()},function(e,t,n){var r=n(41);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"#result-window {\n  width: 300px;\n  height: 300px;\n  display: none;\n}\n\n#expression {\n  font-size: 2em;\n  color: #187dec;\n}\n\n#input-expression {\n  width: 60px;\n  margin-left: 5px;\n  font-size: 2em;\n  color: #187dec;\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Translator=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(r):void 0},i=n(0);n(43);var s=n(7),a=n(3),u=n(45);t.Translator=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.servises=new u.Servises,e.englishWords=["cat","dog","tiger","bear","rabbit","planet","tea","orange","nose","tail","star","spoon","monkey","hair","eyes","nail","snow","summer","winter","spring","autumn","tooth"],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.ModalWindowContent),r(t,[{key:"create",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createTitle",this).call(this,i.TRANSLITE_TITLE),this.createExpression(),this.createUserAnswer(),o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createButton",this).call(this)}},{key:"createExpression",value:function(){this.expression=document.createElement("span"),this.expression.setAttribute("id",i.ID.TRANSLATOR_EXPRESSION),this.wordToTranslate=this.englishWords[(0,s.getRandomInteger)(0,this.englishWords.length-1)],this.expression.textContent=this.wordToTranslate,this.modal.appendChild(this.expression)}},{key:"createUserAnswer",value:function(){var e=this;this.userAnswer=document.createElement("input"),this.userAnswer.setAttribute("id",i.ID.INPUT_TRANSLATOR),this.modal.appendChild(this.userAnswer),this.userAnswer.focus(),this.userAnswer.addEventListener("keydown",function(){return o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"checkAnswer",e).call(e,event)})}},{key:"checkResult",value:function(){var e=this;this.servises.translate(this.userAnswer.value).then(function(t){e.translatedWord=t,e.translatedWord===e.wordToTranslate?e.showResult(!0):e.showResult(!1)}),this.userAnswer.blur()}}]),t}()},function(e,t,n){var r=n(44);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"#translator-expression {\n  flex-basis: 100%;\n  text-align: center;\n\n  font-size: 2em;\n  color: #187dec;\n}\n\n#input-translator {\n  flex-basis: 50%;\n  padding: 10px;\n  margin: 10px;\n}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Servises=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"translate",value:function(e){return this.URLcurrent="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181226T141016Z.ad00d619f773afb4.d120473fb4d98b7a6d869207ff5e3a161ee67a1d&text="+e+"&lang=en",fetch(this.URLcurrent).then(function(e){return e.json()}).then(function(e){return e.text[0]})}}]),e}()}]);