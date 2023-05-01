(()=>{"use strict";function e(e){return new t(e)}e.create=(t,a="")=>{const s=document.createElement(t);return a&&s.classList.add(a),e(s)};class t{constructor(e){this.$el="string"==typeof e?document.querySelector(e):e}on(e,t){this.$el.addEventListener(e,t)}off(e,t){this.$el.removeEventListener(e,t)}append(e){return e instanceof t&&(e=e.$el),Element.prototype.append?this.$el.append(e):this.$el.appendChild(e),this}html(e){return"string"==typeof e?(this.$el.innerHTML=e,this):this.$el.outerHTML.trim()}find(t){return e(this.$el.querySelector(t))}findAll(e){return this.$el.querySelectorAll(e)}addClass(e){return this.$el.classList.add(e),this}removeClass(e){return this.$el.classList.remove(e),this}toggleClass(e){this.$el.classList.contains(e)?this.$el.classList.remove(e):this.$el.classList.add(e)}containClass(e){return this.$el.classList.contains(e)}get data(){return this.$el.dataset}}class a{constructor(){this.listeners={}}emit(e,...t){return!!Array.isArray(this.listeners[e])&&(this.listeners[e].forEach((e=>{e(...t)})),!0)}subscribe(e,t){return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t),()=>{this.listeners[e]=this.listeners[e].filter((e=>e!=t))}}}function s(e,t=null){if(!t)return JSON.parse(localStorage.getItem(e));localStorage.setItem(e,JSON.stringify(t))}function l(e){return"on"+("string"!=typeof(t=e)?"":t.charAt(0).toUpperCase()+t.slice(1));var t}class i{constructor(e,t=[]){if(!e)throw new Error("No $root provided for DomListener!");this.$root=e,this.listeners=t}initDOMListeners(){this.listeners.forEach((e=>{const t=l(e);if(!this[t]){const e=this.name||"";throw new Error(`Method ${t} is not implemented in ${e} Component`)}this[t]=this[t].bind(this),this.$root.on(e,this[t])}))}removeDOMListeners(){this.listeners.forEach((e=>{const t=l(e);this.$root.off(e,this[t])}))}}class o extends i{constructor(e,t={}){super(e,t.listeners),this.name=t.name||"",this.emitter=t.emitter,this.store=t.store,this.unsubscribers=[],this.storeSub=null}$dispatch(e){this.store.dispatch(e)}$subscribe(e){this.storeSub=this.store.subscribe(e)}$on(e,t){const a=this.emitter.subscribe(e,t);this.unsubscribers.push(a)}$emit(e,...t){this.emitter.emit(e,...t)}toHTML(){return""}init(){this.initDOMListeners()}destroy(){this.removeDOMListeners(),this.unsubscribers.forEach((e=>e())),this.storeSub.unsubscribers()}}const n={1:[{en:{value:"`",shiftValue:"~"},ru:{value:"ё",shiftValue:""},className:"key-alphabet key-special",code:"Backquote",type:"alphabet",location:0,keyCode:"192"},{en:{value:"1",shiftValue:"!"},ru:{value:"1",shiftValue:"!"},className:"key-alphabet key-special",code:"Digit1",type:"alphabet",location:0,keyCode:"49"},{en:{value:"2",shiftValue:"@"},ru:{value:"2",shiftValue:'"'},className:"key-alphabet key-special",code:"Digit2",type:"alphabet",location:0,keyCode:"50"},{en:{value:"3",shiftValue:"#"},ru:{value:"3",shiftValue:"№"},className:"key-alphabet key-special",code:"Digit3",type:"alphabet",location:0,keyCode:"51"},{en:{value:"4",shiftValue:"$"},ru:{value:"4",shiftValue:";"},className:"key-alphabet key-special",code:"Digit4",type:"alphabet",location:0,keyCode:"52"},{en:{value:"5",shiftValue:"%"},ru:{value:"5",shiftValue:"%"},className:"key-alphabet key-special",code:"Digit5",type:"alphabet",location:0,keyCode:"53"},{en:{value:"6",shiftValue:"^"},ru:{value:"6",shiftValue:":"},className:"key-alphabet key-special",code:"Digit6",type:"alphabet",location:0,keyCode:"54"},{en:{value:"7",shiftValue:"&"},ru:{value:"7",shiftValue:"?"},className:"key-alphabet key-special",code:"Digit7",type:"alphabet",location:0,keyCode:"55"},{en:{value:"8",shiftValue:"*"},ru:{value:"8",shiftValue:"*"},className:"key-alphabet key-special",code:"Digit8",type:"alphabet",location:0,keyCode:"56"},{en:{value:"9",shiftValue:"("},ru:{value:"9",shiftValue:"("},className:"key-alphabet key-special",code:"Digit9",type:"alphabet",location:0,keyCode:"57"},{en:{value:"0",shiftValue:")"},ru:{value:"0",shiftValue:")"},className:"key-alphabet key-special",code:"Digit0",type:"alphabet",location:0,keyCode:"48"},{en:{value:"-",shiftValue:"_"},ru:{value:"-",shiftValue:"_"},className:"key-alphabet key-special",code:"Minus",type:"alphabet",location:0,keyCode:"189"},{en:{value:"=",shiftValue:"+"},ru:{value:"=",shiftValue:"+"},className:"key-alphabet key-special",code:"Equal",type:"alphabet",location:0,keyCode:"187"},{en:{value:"Backspace",shiftValue:""},ru:{value:"Убрать",shiftValue:""},className:"backspace",code:"Backspace",type:"service",location:0,keyCode:"8"}],2:[{en:{value:"Tab",shiftValue:""},ru:{value:"Таб",shiftValue:""},className:"Tab",code:"Tab",type:"service",location:0,keyCode:"9"},{en:{value:"q",shiftValue:""},ru:{value:"й",shiftValue:""},className:"key-alphabet",code:"KeyQ",type:"alphabet",location:0,keyCode:"81"},{en:{value:"w",shiftValue:""},ru:{value:"ц",shiftValue:""},className:"key-alphabet",code:"KeyW",type:"alphabet",location:0,keyCode:"87"},{en:{value:"e",shiftValue:""},ru:{value:"у",shiftValue:""},className:"key-alphabet",code:"KeyE",type:"alphabet",location:0,keyCode:"69"},{en:{value:"r",shiftValue:""},ru:{value:"к",shiftValue:""},className:"key-alphabet",code:"KeyR",type:"alphabet",location:0,keyCode:"82"},{en:{value:"t",shiftValue:""},ru:{value:"е",shiftValue:""},className:"key-alphabet",code:"KeyT",type:"alphabet",location:0,keyCode:"84"},{en:{value:"y",shiftValue:""},ru:{value:"н",shiftValue:""},className:"key-alphabet",code:"KeyY",type:"alphabet",location:0,keyCode:"89"},{en:{value:"u",shiftValue:""},ru:{value:"г",shiftValue:""},className:"key-alphabet",code:"KeyU",type:"alphabet",location:0,keyCode:"85"},{en:{value:"i",shiftValue:""},ru:{value:"ш",shiftValue:""},className:"key-alphabet",code:"KeyI",type:"alphabet",location:0,keyCode:"73"},{en:{value:"o",shiftValue:""},ru:{value:"щ",shiftValue:""},className:"key-alphabet",code:"KeyO",type:"alphabet",location:0,keyCode:"79"},{en:{value:"p",shiftValue:""},ru:{value:"з",shiftValue:""},className:"key-alphabet",code:"KeyP",type:"alphabet",location:0,keyCode:"80"},{en:{value:"[",shiftValue:"{"},ru:{value:"х",shiftValue:""},className:"key-alphabet",code:"BracketLeft",type:"alphabet",location:0,keyCode:"219"},{en:{value:"]",shiftValue:"}"},ru:{value:"ъ",shiftValue:""},className:"key-alphabet",code:"BracketRight",type:"alphabet",location:0,keyCode:"221"},{en:{value:"\\",shiftValue:"|"},ru:{value:"\\",shiftValue:"/"},className:"key-alphabet key-special",code:"Backslash",type:"alphabet",location:0,keyCode:"220"},{en:{value:"Del",shiftValue:""},ru:{value:"Del",shiftValue:""},className:"delete",code:"Delete",type:"service",location:0,keyCode:"46"}],3:[{en:{value:"CapsLock",shiftValue:""},ru:{value:"CapsLock",shiftValue:""},className:"CapsLock",code:"CapsLock",type:"service",location:0,keyCode:"20"},{en:{value:"a",shiftValue:""},ru:{value:"ф",shiftValue:""},className:"key-alphabet",code:"KeyA",type:"alphabet",location:0,keyCode:"65"},{en:{value:"s",shiftValue:""},ru:{value:"ы",shiftValue:""},className:"key-alphabet",code:"KeyS",type:"alphabet",location:0,keyCode:"83"},{en:{value:"d",shiftValue:""},ru:{value:"в",shiftValue:""},className:"key-alphabet",code:"KeyD",type:"alphabet",location:0,keyCode:"68"},{en:{value:"f",shiftValue:""},ru:{value:"а",shiftValue:""},className:"key-alphabet",code:"KeyF",type:"alphabet",location:0,keyCode:"70"},{en:{value:"g",shiftValue:""},ru:{value:"п",shiftValue:""},className:"key-alphabet",code:"KeyG",type:"alphabet",location:0,keyCode:"71"},{en:{value:"h",shiftValue:""},ru:{value:"р",shiftValue:""},className:"key-alphabet",code:"KeyH",type:"alphabet",location:0,keyCode:"72"},{en:{value:"j",shiftValue:""},ru:{value:"о",shiftValue:""},className:"key-alphabet",code:"KeyJ",type:"alphabet",location:0,keyCode:"74"},{en:{value:"k",shiftValue:""},ru:{value:"л",shiftValue:""},className:"key-alphabet",code:"KeyK",type:"alphabet",location:0,keyCode:"75"},{en:{value:"l",shiftValue:""},ru:{value:"д",shiftValue:""},className:"key-alphabet",code:"KeyL",type:"alphabet",location:0,keyCode:"76"},{en:{value:";",shiftValue:":"},ru:{value:"ж",shiftValue:""},className:"key-alphabet key-special",code:"Semicolon",type:"alphabet",location:0,keyCode:"186"},{en:{value:"'",shiftValue:'"'},ru:{value:"э",shiftValue:""},className:"key-alphabet key-special",code:"Quote",type:"alphabet",location:0,keyCode:"222"},{en:{value:"Enter",shiftValue:""},ru:{value:"Ввод",shiftValue:""},className:"Enter",code:"Enter",type:"service",location:0,keyCode:"13"}],4:[{en:{value:"Shift",shiftValue:""},ru:{value:"Shift",shiftValue:""},className:"Shift shift-left",code:"ShiftLeft",type:"service",location:1,keyCode:"16"},{en:{value:"z",shiftValue:""},ru:{value:"я",shiftValue:""},className:"key-alphabet",code:"KeyZ",type:"alphabet",location:0,keyCode:"90"},{en:{value:"x",shiftValue:""},ru:{value:"ч",shiftValue:""},className:"key-alphabet",code:"KeyX",type:"alphabet",location:0,keyCode:"88"},{en:{value:"c",shiftValue:""},ru:{value:"с",shiftValue:""},className:"key-alphabet",code:"KeyC",type:"alphabet",location:0,keyCode:"67"},{en:{value:"v",shiftValue:""},ru:{value:"м",shiftValue:""},className:"key-alphabet",code:"KeyV",type:"alphabet",location:0,keyCode:"86"},{en:{value:"b",shiftValue:""},ru:{value:"и",shiftValue:""},className:"key-alphabet",code:"KeyB",type:"alphabet",location:0,keyCode:"66"},{en:{value:"n",shiftValue:""},ru:{value:"т",shiftValue:""},className:"key-alphabet",code:"KeyN",type:"alphabet",location:0,keyCode:"78"},{en:{value:"m",shiftValue:""},ru:{value:"ь",shiftValue:""},className:"key-alphabet",code:"KeyM",type:"alphabet",location:0,keyCode:"77"},{en:{value:",",shiftValue:"<"},ru:{value:"б",shiftValue:""},className:"key-alphabet key-special",code:"Comma",type:"alphabet",location:0,keyCode:"188"},{en:{value:".",shiftValue:">"},ru:{value:"ю",shiftValue:""},className:"key-alphabet key-special",code:"Period",type:"alphabet",location:0,keyCode:"190"},{en:{value:"/",shiftValue:"?"},ru:{value:".",shiftValue:","},className:"key-alphabet key-special",code:"Slash",type:"alphabet",location:0,keyCode:"191"},{en:{value:"&#8593;",shiftValue:""},ru:{value:"&#8593;",shiftValue:""},className:"arrow arrow-up",code:"ArrowUp",type:"service",location:0,keyCode:"38"},{en:{value:"Shift",shiftValue:""},ru:{value:"Shift",shiftValue:""},className:"Shift shift-right",code:"ShiftRight",type:"service",location:2,keyCode:"16"}],5:[{en:{value:"Ctrl",shiftValue:""},ru:{value:"Ctrl",shiftValue:""},className:"control control-left",code:"ControlLeft",type:"service",location:1,keyCode:"17"},{en:{value:"",shiftValue:""},ru:{value:"",shiftValue:""},className:"windows",code:"MetaLeft",type:"service",location:0,keyCode:"91"},{en:{value:"Alt",shiftValue:""},ru:{value:"Alt",shiftValue:""},className:"Alt",code:"AltLeft",type:"service",location:1,keyCode:"18"},{en:{value:"",shiftValue:""},ru:{value:"",shiftValue:""},className:"spacebar",code:"Space",type:"service",location:0,keyCode:"32"},{en:{value:"Alt",shiftValue:""},ru:{value:"Alt",shiftValue:""},className:"Alt",code:"AltRight",type:"service",location:2,keyCode:"18"},{en:{value:"Ctrl",shiftValue:""},ru:{value:"Ctrl",shiftValue:""},className:"control control-right",code:"ControlRight",type:"service",location:2,keyCode:"17"},{en:{value:"&#8592;",shiftValue:""},ru:{value:"&#8592;",shiftValue:""},className:"arrow arrow-left",code:"ArrowLeft",type:"service",location:0,keyCode:"37"},{en:{value:"&#8595;",shiftValue:""},ru:{value:"&#8595;",shiftValue:""},className:"arrow arrow-down",code:"ArrowDown",type:"service",location:0,keyCode:"40"},{en:{value:"&#8594;",shiftValue:""},ru:{value:"&#8594;",shiftValue:""},className:"arrow arrow-right",code:"ArrowRight",type:"service",location:0,keyCode:"39"}]},c=s("keyboard-state")?s("keyboard-state"):{lang:"en",currentText:""};s("keyboard-state",c);const u=function(e,t={}){let a=e({...t},{type:"__INIT__"}),s=[];return{subscribe:e=>(s.push(e),{unsubscribe(){s=s.filter((t=>t!==e))}}),dispatch(t){a=e(a,t),s.forEach((e=>e(a)))},getState:()=>JSON.parse(JSON.stringify(a))}}((function(e,t){let a;switch(t.type){case"LANG_CHANGE":return{...e,lang:t.value};case"INPUT_TEXT":return{...e,currentText:t.value};case"SWITCH_CAPSLOCK":return a=e.capslock,{...e,capslock:!a};default:return e}}),c);u.subscribe((e=>{s("keyboard-state",e)})),new class{constructor(t,s){this.$appContainer=e(t),this.components=s.components||[],this.store=s.store,this.emitter=new a}getRoot(){const t={emitter:this.emitter,store:this.store},a=e.create("main","board-container");return this.components=this.components.map((s=>{const l=e.create("section",s.className),i=new s(l,t),o=i.toHTML();return l.html(o),a.append(l),i})),a}render(){const e=this.$root=this.getRoot();this.$appContainer.append(e),this.components.forEach((e=>e.init()))}destroy(){this.components.forEach((e=>e.destroy()))}}("#app",{components:[class extends o{static className="section-toolbar";constructor(e,t){super(e,{listeners:["click"],...t})}toHTML(){return'<div class="section-wrapper toolbar-wrapper">\n        Windows OS, Переключение языка: Ctrl + Alt\n        <div class="lang-icons"><div class="lang" data-id="ru">RU</div>\n        <div class="lang" data-id="en">EN</div></div></div>'}init(){super.init(),this.$on("Board:ChangeLang",this.changeLang.bind(this));const{lang:e}=s("keyboard-state");this.initLang(e)}onClick(t){const a=e(t.target);a.containClass("lang")&&this.changeLang(a.data.id),this.$emit("Textarea:focus")}changeLang(e){this.initLang(e),this.$dispatch({type:"LANG_CHANGE",value:e}),this.$emit("Toolbar:ChangeLang",e)}initLang(t){const a=this.$root.find(`[data-id='${t}']`);this.$root.findAll(".lang").forEach((t=>e(t).removeClass("active"))),a&&a.addClass("active")}},class extends o{static className="section-output";constructor(e,t){super(e,{listeners:["keydown","keyup","click"],...t})}toHTML(){return'<div class="section-wrapper">\n        <textarea class="output" placeholder="Here may to be your text...">\n        </textarea></div>'}focus(){this.textarea.focus()}onClick(){this.$emit("Textarea:focus")}onKeydown(e){e.preventDefault(),this.$emit("Textarea:keydown",e),this.focus()}onKeyup(e){this.$emit("Textarea:keyup",e),this.focus()}init(){super.init(),this.textarea=this.$root.$el.querySelector(".output"),this.textarea.value=s("keyboard-state").currentText,this.$on("Board:value",this.handler.bind(this)),this.$on("Board:click",this.handler.bind(this)),this.$on("Textarea:focus",this.focus.bind(this))}handler(e){!function(e,t){function a(e,a){const s=t.selectionStart;t.value=e(s),t.selectionStart=s+a,t.selectionEnd=s+a}const s={default:e=>{a((a=>t.value.slice(0,a)+e+t.value.slice(a)),1)},Space:()=>{a((e=>t.value.slice(0,e)+" "+t.value.slice(e)),1)},Backspace:()=>{const e=t.selectionStart;if(t.value.length>0&&e>0){const e=e=>t.value.slice(0,e-1)+t.value.slice(e);a(e,-1)}},Tab:()=>{a((e=>t.value.slice(0,e)+"    "+t.value.slice(e)),4)},CapsLock:()=>{},Delete:()=>{const e=t.selectionStart;if(t.value.length>0&&e<t.value.length){const e=e=>t.value.slice(0,e)+t.value.slice(e+1);a(e,0)}},Enter:()=>{a((e=>t.value.slice(0,e)+"\n"+t.value.slice(e)),1)},MetaLeft:()=>{},ArrowLeft:()=>{const e=t.selectionStart;e>0&&(t.selectionStart=e-1,t.selectionEnd=e-1)},ArrowRight:()=>{const e=t.selectionStart;e<t.value.length&&(t.selectionStart=e+1,t.selectionEnd=e+1)},ArrowUp:()=>{const e=t.selectionStart,a=t.value.slice(0,e),s=a.lastIndexOf("\n"),l=e-s;let i=a.slice(0,s).lastIndexOf("\n")+l;s<i&&(i=s),t.selectionStart=i,t.selectionEnd=i},ArrowDown:()=>{const e=t.selectionStart,a=t.value.slice(0,e),s=t.value.slice(e),l=e-a.lastIndexOf("\n"),i=s.indexOf("\n"),o=s.split("\n")[1];if(o){let a=e+i+l;o.length<l&&(a=e+i+o.length+1),t.selectionStart=a,t.selectionEnd=a}},ShiftLeft:()=>{},ShiftRight:()=>{},ControlLeft:()=>{},ControlRight:()=>{},AltLeft:()=>{},AltRight:()=>{}};s[e]?s[e]():s.default(e)}(e,this.textarea);const t=this.textarea.value;this.$dispatch(function(e){return{type:"INPUT_TEXT",value:e}}(t)),this.textarea.focus()}},class extends o{static className="section-input";constructor(e,t){super(e,{listeners:["mousedown","mouseup"],...t}),this.isShiftPressed=!1,this.isCapsPressed=!1,this.isEn=!1,this.mode="default"}toHTML(){return function(e){function t(t){let{[e]:a,className:s,keyCode:l,code:i,type:o,location:n}=t;return s=s?"key "+s:"key",`\n        <div class="${s.toLowerCase()}" \n            data-keycode="${l}"\n            data-code="${i}"\n            data-type="${o}"\n            data-key="${i}" \n            data-location="${n}"\n            data-value="${a.value.toLowerCase()}" \n            data-shift-value='`+a.shiftValue.toLowerCase()+`'>\n            <div class="default active">${a.value}</div>\n            <div class="caps-mode">${a.value.toUpperCase()}</div>\n            <div class="shift-mode">\n              ${a.shiftValue||a.value.toUpperCase()}\n            </div>\n            <div class="shift-value">${a.shiftValue}</div>\n        </div>`}return`<div class="section-wrapper">${Object.entries(n).map((function([e,a]){return`<div class="row" data-row="${e}">${a.map(t).join("")}</div>`})).join("")}</div>`}(s("keyboard-state").lang)}render(){this.$root.html(this.toHTML())}onMousedown(e){this.keyHandler(e),this.$emit("Textarea:focus")}onMouseup(e){this.keyHandler(e),this.$emit("Textarea:focus")}init(){super.init(),this.initLanguage(),this.$on("Textarea:keydown",this.keyHandler.bind(this)),this.$on("Textarea:keyup",this.keyHandler.bind(this)),this.$on("Toolbar:ChangeLang",this.render.bind(this))}keyHandler(t){if(!t)return;const a=["mousedown","mouseup"].includes(t.type),s=["mousedown","keydown"].includes(t.type),l=a?function(t){if(t.classList.contains("key"))return e(t);const a=t.parentElement;return a.classList.contains("key")?e(a):null}(t.target):this.$root.find(`[data-code='${t.code}']`);if(!l)return;const i=l&&l.data.code;a&&(t.code=i),s?this.keyDownHandle(l,t):this.keyUpHandle(l,t),this.switchKeyBoard()}keyDownHandle(e,t){t.code.toLowerCase().includes("shift")&&(this.isShiftPressed=!0),t.code.toLowerCase().includes("shift")&&this.switchShiftMode(!0),"CapsLock"===t.code?this.switchCapsMode():e.addClass("active");const a=this.getKeyValue(e.$el,t);this.$emit("Board:value",a),this.switchLanguage(t)}keyUpHandle(e,t){t.code.toLowerCase().includes("shift")&&(this.isShiftPressed=!1),"CapsLock"!==t.code&&e.removeClass("active"),!1===this.isShiftPressed&&this.switchShiftMode(!1)}getKeyValue(e,t={}){const a=e&&e.dataset.type,s=e&&e.dataset.shiftValue;let l=e.dataset.value;return"alphabet"===a&&("shift"===this.mode&&(l=s||l.toUpperCase()),"capslock"===this.mode&&(l=l.toUpperCase())),"service"===a&&(l=e.dataset.code),l}switchShiftMode(){this.isShiftPressed?this.mode="shift":this.isCapsPressed?this.mode="capslock":this.mode="default",this.switchKeyBoard()}switchCapsMode(){this.isCapsPressed=!this.isCapsPressed;const e=this.$root.find('[data-keycode="20"');this.isCapsPressed?e.addClass("active"):e.removeClass("active"),this.isCapsPressed?this.mode="capslock":this.isShiftPressed?this.mode="shift":this.mode="default",this.switchKeyBoard()}switchKeyBoard(){"shift"===this.mode&&(this.toggleKeysMode(".key-alphabet .default",!1),this.toggleKeysMode(".key-alphabet .caps-mode",!1),this.toggleKeysMode(".key-alphabet .shift-mode",!0)),"capslock"===this.mode&&(this.toggleKeysMode(".key-alphabet .default",!1),this.toggleKeysMode(".key-alphabet .shift-mode",!1),this.toggleKeysMode(".key-alphabet .caps-mode",!0)),"default"===this.mode&&(this.toggleKeysMode(".key-alphabet .shift-mode",!1),this.toggleKeysMode(".key-alphabet .caps-mode",!1),this.toggleKeysMode(".key-alphabet .default",!0))}toggleKeysMode(e,t){this.$root.findAll(e).forEach((e=>{t?e.classList.add("active"):e.classList.remove("active")}))}switchLanguage(e){e.ctrlKey&&e.altKey&&(this.isEn?this.$emit("Board:ChangeLang","ru"):this.$emit("Board:ChangeLang","en"),this.isEn=!this.isEn)}initLanguage(){const e=s("keyboard-state").lang;this.isEn="en"===e}}],store:u}).render()})();