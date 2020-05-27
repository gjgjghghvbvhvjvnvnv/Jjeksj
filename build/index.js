/*!
 * 
 *   react-simple-keyboard v2.3.45
 *   https://github.com/hodgef/react-simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("react")):"function"===typeof define&&define.amd?define("ReactSimpleKeyboard",["react"],t):"object"===typeof exports?exports.ReactSimpleKeyboard=t(require("react")):e.ReactSimpleKeyboard=t(e.React)}(window,(function(e){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(t,n){t.exports=e},function(e,t,n){(function(e){var o,i,r,s,a=n(4);window,s=function(){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===a(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t),n(1);var o=function(){function Utilities(e){var t=e.getOptions,n=e.getCaretPosition,o=e.dispatch;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Utilities),this.getOptions=t,this.getCaretPosition=n,this.dispatch=o,Utilities.bindMethods(Utilities,this)}var e,t,n;return e=Utilities,n=[{key:"bindMethods",value:function(e,t){var n,o=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"===typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}(e))){var t=0,F=function(){};return{s:F,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,r=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){r=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(r)throw o}}}}(Object.getOwnPropertyNames(e.prototype));try{for(o.s();!(n=o.n()).done;){var i=n.value;"constructor"===i||"bindMethods"===i||(t[i]=t[i].bind(t))}}catch(r){o.e(r)}finally{o.f()}}}],(t=[{key:"getButtonClass",value:function(e){var t=e.includes("{")&&e.includes("}")&&"{//}"!==e?"functionBtn":"standardBtn",n=e.replace("{","").replace("}",""),o="";return"standardBtn"!==t&&(o=" hg-button-".concat(n)),"hg-".concat(t).concat(o)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"\u2191","{arrowleft}":"\u2190","{arrowdown}":"\u2193","{arrowright}":"\u2192","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(e,t,n){return(t=n?Object.assign({},this.getDefaultDiplay(),t):t||this.getDefaultDiplay())[e]||e}},{key:"getUpdatedInput",value:function(e,t,n,o){var i=this.getOptions(),r=t;return("{bksp}"===e||"{backspace}"===e)&&r.length>0?r=this.removeAt(r,n,o):"{space}"===e?r=this.addStringAt(r," ",n,o):"{tab}"!==e||"boolean"===typeof i.tabCharOnTab&&!1===i.tabCharOnTab?"{enter}"!==e&&"{numpadenter}"!==e||!i.newLineOnEnter?e.includes("numpad")&&Number.isInteger(Number(e[e.length-2]))?r=this.addStringAt(r,e[e.length-2],n,o):"{numpaddivide}"===e?r=this.addStringAt(r,"/",n,o):"{numpadmultiply}"===e?r=this.addStringAt(r,"*",n,o):"{numpadsubtract}"===e?r=this.addStringAt(r,"-",n,o):"{numpadadd}"===e?r=this.addStringAt(r,"+",n,o):"{numpaddecimal}"===e?r=this.addStringAt(r,".",n,o):"{"===e||"}"===e?r=this.addStringAt(r,e,n,o):e.includes("{")||e.includes("}")||(r=this.addStringAt(r,e,n,o)):r=this.addStringAt(r,"\n",n,o):r=this.addStringAt(r,"\t",n,o),r}},{key:"updateCaretPos",value:function(e,t){var n=this.updateCaretPosAction(e,t);this.dispatch((function(e){e.caretPosition=n}))}},{key:"updateCaretPosAction",value:function(e,t){var n=this.getOptions(),o=this.getCaretPosition();return t?o>0&&(o-=e):o+=e,n.debug&&console.log("Caret at:",o,"(".concat(this.keyboardDOMClass,")")),o}},{key:"addStringAt",value:function(e,t,n,o){var i;return n||0===n?(i=[e.slice(0,n),t,e.slice(n)].join(""),this.isMaxLengthReached()||o&&this.updateCaretPos(t.length)):i=e+t,i}},{key:"removeAt",value:function(e,t,n){var o;if(0===this.getCaretPosition())return e;var i=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;return t&&t>=0?e.substring(t-2,t).match(i)?(o=e.substr(0,t-2)+e.substr(t),n&&this.updateCaretPos(2,!0)):(o=e.substr(0,t-1)+e.substr(t),n&&this.updateCaretPos(1,!0)):e.slice(-2).match(i)?(o=e.slice(0,-2),n&&this.updateCaretPos(2,!0)):(o=e.slice(0,-1),n&&this.updateCaretPos(1,!0)),o}},{key:"handleMaxLength",value:function(e,t){var n=this.getOptions(),o=n.maxLength,i=e[n.inputName],r=t.length-1>=o;if(t.length<=i.length)return!1;if(Number.isInteger(o))return n.debug&&console.log("maxLength (num) reached:",r),r?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===_typeof(o)){var s=i.length===o[n.inputName];return n.debug&&console.log("maxLength (obj) reached:",s),s?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return Boolean(this.maxLengthReached)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return window.PointerEvent}},{key:"camelCase",value:function(e){return!!e&&e.toLowerCase().trim().split(/[.\-_\s]/g).reduce((function(e,t){return t.length?e+t[0].toUpperCase()+t.slice(1):e}))}}])&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Utilities}();function PhysicalKeyboard_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function PhysicalKeyboard(e){var t=e.dispatch,n=e.getOptions;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PhysicalKeyboard),this.dispatch=t,this.getOptions=n,o.bindMethods(PhysicalKeyboard,this)}var e,t;return e=PhysicalKeyboard,(t=[{key:"handleHighlightKeyDown",value:function(e){var t=this.getOptions(),n=this.getSimpleKeyboardLayoutKey(e);this.dispatch((function(e){var o=e.getButtonElement(n)||e.getButtonElement("{".concat(n,"}"));o&&(o.style.backgroundColor=t.physicalKeyboardHighlightBgColor||"#9ab4d0",o.style.color=t.physicalKeyboardHighlightTextColor||"white")}))}},{key:"handleHighlightKeyUp",value:function(e){var t=this.getSimpleKeyboardLayoutKey(e);this.dispatch((function(e){var n=e.getButtonElement(t)||e.getButtonElement("{".concat(t,"}"));n&&n.removeAttribute&&n.removeAttribute("style")}))}},{key:"getSimpleKeyboardLayoutKey",value:function(e){var t;return((t=e.code.includes("Numpad")||e.code.includes("Shift")||e.code.includes("Space")||e.code.includes("Backspace")||e.code.includes("Control")||e.code.includes("Alt")||e.code.includes("Meta")?e.code:e.key)!==t.toUpperCase()||"F"===e.code[0]&&Number.isInteger(Number(e.code[1]))&&e.code.length<=3)&&(t=t.toLowerCase()),t}}])&&PhysicalKeyboard_defineProperties(e.prototype,t),PhysicalKeyboard}();function _toConsumableArray(e){return function(e){if(Array.isArray(e))return Keyboard_arrayLikeToArray(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return Keyboard_arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Keyboard_arrayLikeToArray(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Keyboard_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Keyboard_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Keyboard_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function SimpleKeyboard(){var e=this;Keyboard_classCallCheck(this,SimpleKeyboard),_defineProperty(this,"handleParams",(function(e){var t,n,o;if("string"===typeof e[0])t=e[0].split(".").join(""),n=document.querySelector(".".concat(t)),o=e[1];else if(e[0]instanceof HTMLDivElement){if(!e[0].className)throw console.warn("Any DOM element passed as parameter must have a class."),new Error("KEYBOARD_DOM_CLASS_ERROR");t=e[0].className.split(" ")[0],n=e[0],o=e[1]}else t="simple-keyboard",n=document.querySelector(".".concat(t)),o=e[0];return{keyboardDOMClass:t,keyboardDOM:n,options:o}})),_defineProperty(this,"getOptions",(function(){return e.options})),_defineProperty(this,"getCaretPosition",(function(){return e.caretPosition})),_defineProperty(this,"registerModule",(function(t,n){e.modules[t]||(e.modules[t]={}),n(e.modules[t])})),_defineProperty(this,"getKeyboardClassString",(function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=[e.keyboardDOMClass].concat(n).filter((function(e){return!!e}));return i.join(" ")}));for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=this.handleParams(n),a=s.keyboardDOMClass,u=s.keyboardDOM,c=s.options,l=void 0===c?{}:c;if(this.utilities=new o({getOptions:this.getOptions,getCaretPosition:this.getCaretPosition,dispatch:this.dispatch}),this.caretPosition=null,this.keyboardDOM=u,this.options=l,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.options.preventMouseDownDefault=this.options.preventMouseDownDefault||!1,this.keyboardPluginClasses="",o.bindMethods(SimpleKeyboard,this),this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=a,this.buttonElements={},window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),this.currentInstanceName=this.utilities.camelCase(this.keyboardDOMClass),window.SimpleKeyboardInstances[this.currentInstanceName]=this,this.allKeyboardInstances=window.SimpleKeyboardInstances,this.keyboardInstanceNames=Object.keys(window.SimpleKeyboardInstances),this.isFirstKeyboardInstance=this.keyboardInstanceNames[0]===this.currentInstanceName,this.physicalKeyboard=new i({dispatch:this.dispatch,getOptions:this.getOptions}),!this.keyboardDOM)throw console.warn('".'.concat(a,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),this.modules={},this.loadModules()}var e,t;return e=SimpleKeyboard,(t=[{key:"handleButtonClicked",value:function(e){var t=this.options.debug;if("{//}"===e)return!1;"function"===typeof this.options.onKeyPress&&this.options.onKeyPress(e),this.input[this.options.inputName]||(this.input[this.options.inputName]="");var n=this.utilities.getUpdatedInput(e,this.input[this.options.inputName],this.caretPosition);if(this.input[this.options.inputName]!==n&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(n))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,n))return!1;this.input[this.options.inputName]=this.utilities.getUpdatedInput(e,this.input[this.options.inputName],this.caretPosition,!0),t&&console.log("Input changed:",this.input),this.options.syncInstanceInputs&&this.syncInstanceInputs(),"function"===typeof this.options.onChange&&this.options.onChange(this.input[this.options.inputName]),"function"===typeof this.options.onChangeAll&&this.options.onChangeAll(this.input)}t&&console.log("Key pressed:",e)}},{key:"handleButtonMouseDown",value:function(e,t){var n=this;this.options.preventMouseDownDefault&&t.preventDefault(),this.options.stopMouseDownPropagation&&t.stopPropagation(),t&&t.target.classList.add(this.activeButtonClass),this.isMouseHold=!0,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.options.disableButtonHold||(this.holdTimeout=setTimeout((function(){(n.isMouseHold&&(!e.includes("{")&&!e.includes("}")||"{delete}"===e||"{backspace}"===e||"{bksp}"===e||"{space}"===e||"{tab}"===e)||"{arrowright}"===e||"{arrowleft}"===e||"{arrowup}"===e||"{arrowdown}"===e)&&(n.options.debug&&console.log("Button held:",e),n.handleButtonHold(e,t)),clearTimeout(n.holdTimeout)}),500))}},{key:"handleButtonMouseUp",value:function(e){var t=this;this.recurseButtons((function(e){e.classList.remove(t.activeButtonClass)})),this.isMouseHold=!1,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),e&&"function"===typeof this.options.onKeyReleased&&this.options.onKeyReleased(e)}},{key:"handleKeyboardContainerMouseDown",value:function(e){this.options.preventMouseDownDefault&&e.preventDefault()}},{key:"handleButtonHold",value:function(e){var t=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=setTimeout((function(){t.isMouseHold?(t.handleButtonClicked(e),t.handleButtonHold(e)):clearTimeout(t.holdInteractionTimeout)}),100)}},{key:"syncInstanceInputs",value:function(){var e=this;this.dispatch((function(t){t.replaceInput(e.input),t.caretPosition=e.caretPosition}))}},{key:"clearInput",value:function(e){e=e||this.options.inputName,this.input[e]="",this.caretPosition=0,this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"getInput",value:function(e){return e=e||this.options.inputName,this.options.syncInstanceInputs&&this.syncInstanceInputs(),this.input[e]}},{key:"setInput",value:function(e,t){t=t||this.options.inputName,this.input[t]=e,this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"replaceInput",value:function(e){this.input=e}},{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.changedOptions(e);this.options=Object.assign(this.options,e),t.length&&(this.options.debug&&console.log("changedOptions",t),this.onSetOptions(e),this.render())}},{key:"changedOptions",value:function(e){var t=this;return Object.keys(e).filter((function(n){return JSON.stringify(e[n])!==JSON.stringify(t.options[n])}))}},{key:"onSetOptions",value:function(e){e.inputName&&(this.options.debug&&console.log("inputName changed. caretPosition reset."),this.caretPosition=null)}},{key:"clear",value:function(){this.keyboardDOM.innerHTML="",this.keyboardDOM.className=this.keyboardDOMClass,this.buttonElements={}}},{key:"dispatch",value:function(e){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach((function(t){e(window.SimpleKeyboardInstances[t],t)}))}},{key:"addButtonTheme",value:function(e,t){var n=this;if(!t||!e)return!1;e.split(" ").forEach((function(o){t.split(" ").forEach((function(t){n.options.buttonTheme||(n.options.buttonTheme=[]);var i=!1;n.options.buttonTheme.map((function(e){if(e.class.split(" ").includes(t)){i=!0;var n=e.buttons.split(" ");n.includes(o)||(i=!0,n.push(o),e.buttons=n.join(" "))}return e})),i||n.options.buttonTheme.push({class:t,buttons:e})}))})),this.render()}},{key:"removeButtonTheme",value:function(e,t){var n=this;if(!e&&!t)return this.options.buttonTheme=[],this.render(),!1;e&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(e.split(" ").forEach((function(e){n.options.buttonTheme.map((function(o,i){if(t&&t.includes(o.class)||!t){var r=o.buttons.split(" ").filter((function(t){return t!==e}));r.length?o.buttons=r.join(" "):(n.options.buttonTheme.splice(i,1),o=null)}return o}))})),this.render())}},{key:"getButtonElement",value:function(e){var t,n=this.buttonElements[e];return n&&(t=n.length>1?n:n[0]),t}},{key:"inputPatternIsValid",value:function(e){var t,n=this.options.inputPattern;if((t=n instanceof RegExp?n:n[this.options.inputName])&&e){var o=t.test(e);return this.options.debug&&console.log('inputPattern ("'.concat(t,'"): ').concat(o?"passed":"did not pass!")),o}return!0}},{key:"setEventListeners",value:function(){!this.isFirstKeyboardInstance&&this.allKeyboardInstances||(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleTouchEnd))}},{key:"handleKeyUp",value:function(e){this.caretEventHandler(e),this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyUp(e)}},{key:"handleKeyDown",value:function(e){this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyDown(e)}},{key:"handleMouseUp",value:function(e){this.caretEventHandler(e)}},{key:"handleTouchEnd",value:function(e){this.caretEventHandler(e)}},{key:"caretEventHandler",value:function(e){var t;e.target.tagName&&(t=e.target.tagName.toLowerCase()),this.dispatch((function(n){n.isMouseHold&&(n.isMouseHold=!1),"textarea"!==t&&"input"!==t||n.options.disableCaretPositioning?n.options.disableCaretPositioning&&(n.caretPosition=null):(n.caretPosition=e.target.selectionStart,n.options.debug&&console.log("Caret at: ",e.target.selectionStart,e.target.tagName.toLowerCase(),"(".concat(n.keyboardDOMClass,")")))}))}},{key:"recurseButtons",value:function(e){var t=this;if(!e)return!1;Object.keys(this.buttonElements).forEach((function(n){return t.buttonElements[n].forEach(e)}))}},{key:"destroy",value:function(){this.options.debug&&console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleTouchEnd),document.onpointerup=null,document.ontouchend=null,document.ontouchcancel=null,document.onmouseup=null;var deleteButton=function(e){e.onpointerdown=null,e.onpointerup=null,e.onpointercancel=null,e.ontouchstart=null,e.ontouchend=null,e.ontouchcancel=null,e.onclick=null,e.onmousedown=null,e.onmouseup=null,e.remove(),e=null};this.recurseButtons(deleteButton),this.recurseButtons=null,deleteButton=null,this.keyboardDOM.onpointerdown=null,this.keyboardDOM.ontouchstart=null,this.keyboardDOM.onmousedown=null,this.clear(),window.SimpleKeyboardInstances[this.currentInstanceName]=null,delete window.SimpleKeyboardInstances[this.currentInstanceName],this.initialized=!1}},{key:"getButtonThemeClasses",value:function(e){var t=this.options.buttonTheme,n=[];return Array.isArray(t)&&t.forEach((function(t){if(t.class&&"string"===typeof t.class&&t.buttons&&"string"===typeof t.buttons){var o=t.class.split(" ");t.buttons.split(" ").includes(e)&&(n=[].concat(_toConsumableArray(n),_toConsumableArray(o)))}else console.warn('Incorrect "buttonTheme". Please check the documentation.',t)})),n}},{key:"setDOMButtonAttributes",value:function(e,t){var n=this.options.buttonAttributes;Array.isArray(n)&&n.forEach((function(n){n.attribute&&"string"===typeof n.attribute&&n.value&&"string"===typeof n.value&&n.buttons&&"string"===typeof n.buttons?n.buttons.split(" ").includes(e)&&t(n.attribute,n.value):console.warn('Incorrect "buttonAttributes". Please check the documentation.',n)}))}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(e){if(e.target.classList.contains("hg-button"))return e.preventDefault(),e.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.setEventListeners(),"function"===typeof this.options.onInit&&this.options.onInit()}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),"function"===typeof this.options.beforeFirstRender&&this.options.beforeFirstRender(),this.isFirstKeyboardInstance&&this.utilities.pointerEventsSupported()&&!this.options.useTouchEvents&&!this.options.useMouseEvents&&this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){"function"===typeof this.options.beforeRender&&this.options.beforeRender()}},{key:"onRender",value:function(){"function"===typeof this.options.onRender&&this.options.onRender()}},{key:"onModulesLoaded",value:function(){"function"===typeof this.options.onModulesLoaded&&this.options.onModulesLoaded()}},{key:"loadModules",value:function(){var e=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach((function(t){var n=new t;if(n.constructor.name&&"Function"!==n.constructor.name){var o="module-".concat(e.utilities.camelCase(n.constructor.name));e.keyboardPluginClasses=e.keyboardPluginClasses+" ".concat(o)}n.init(e)})),this.keyboardPluginClasses=this.keyboardPluginClasses+" modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(e,t){return!!this.modules[e]&&this.modules[e][t]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(e,t,n,o){var i=this,r=Array.from(e.children),s=0;return r.length&&n.forEach((function(n,a){var u=o[a];if(!u||!(u>n))return!1;var c=n-s,l=u-s,d=document.createElement("div");d.className+="hg-button-container";var p="".concat(i.options.layoutName,"-r").concat(t,"c").concat(a);d.setAttribute("data-skUID",p);var h=r.splice(c,l-c+1);s=l-c,h.forEach((function(e){return d.appendChild(e)})),r.splice(c,0,d),e.innerHTML="",r.forEach((function(t){return e.appendChild(t)})),i.options.debug&&console.log("rowDOMContainer",h,c,l,s+1)})),e}},{key:"render",value:function(){var e=this;this.clear(),this.initialized||this.beforeFirstRender(),this.beforeRender();var t="hg-layout-".concat(this.options.layoutName),n=this.options.layout||{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},o=this.options.useTouchEvents||!1,i=o?"hg-touch-events":"",r=this.options.useMouseEvents||!1,s=this.options.disableRowButtonContainers;this.keyboardDOM.className=this.getKeyboardClassString(this.options.theme,t,this.keyboardPluginClasses,i),n[this.options.layoutName].forEach((function(t,n){var i=t.split(" "),a=document.createElement("div");a.className+="hg-row";var u=[],c=[];i.forEach((function(t,i){var l,d=!s&&"string"===typeof t&&t.length>1&&0===t.indexOf("["),p=!s&&"string"===typeof t&&t.length>1&&t.indexOf("]")===t.length-1;d&&(u.push(i),t=t.replace(/\[/g,"")),p&&(c.push(i),t=t.replace(/\]/g,""));var h=e.utilities.getButtonClass(t),f=e.utilities.getButtonDisplayName(t,e.options.display,e.options.mergeDisplay),y=e.options.useButtonTag?"button":"div",b=document.createElement(y);b.className+="hg-button ".concat(h),(l=b.classList).add.apply(l,_toConsumableArray(e.getButtonThemeClasses(t))),e.setDOMButtonAttributes(t,(function(e,t){b.setAttribute(e,t)})),e.activeButtonClass="hg-activeButton",!e.utilities.pointerEventsSupported()||o||r?o?(b.ontouchstart=function(n){e.handleButtonClicked(t),e.handleButtonMouseDown(t,n)},b.ontouchend=function(){e.handleButtonMouseUp(t)},b.ontouchcancel=function(){e.handleButtonMouseUp(t)}):(b.onclick=function(){e.isMouseHold=!1,e.handleButtonClicked(t)},b.onmousedown=function(n){e.handleButtonMouseDown(t,n)},b.onmouseup=function(){e.handleButtonMouseUp(t)}):(b.onpointerdown=function(n){e.handleButtonClicked(t),e.handleButtonMouseDown(t,n)},b.onpointerup=function(){e.handleButtonMouseUp(t)},b.onpointercancel=function(){e.handleButtonMouseUp(t)}),b.setAttribute("data-skBtn",t);var m="".concat(e.options.layoutName,"-r").concat(n,"b").concat(i);b.setAttribute("data-skBtnUID",m);var g=document.createElement("span");g.innerHTML=f,b.appendChild(g),e.buttonElements[t]||(e.buttonElements[t]=[]),e.buttonElements[t].push(b),a.appendChild(b)})),a=e.parseRowDOMContainers(a,n,u,c),e.keyboardDOM.appendChild(a)})),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||o||r?o?(document.ontouchend=function(){return e.handleButtonMouseUp()},document.ontouchcancel=function(){return e.handleButtonMouseUp()},this.keyboardDOM.ontouchstart=function(t){return e.handleKeyboardContainerMouseDown(t)}):o||(document.onmouseup=function(){return e.handleButtonMouseUp()},this.keyboardDOM.onmousedown=function(t){return e.handleKeyboardContainerMouseDown(t)}):(document.onpointerup=function(){return e.handleButtonMouseUp()},this.keyboardDOM.onpointerdown=function(t){return e.handleKeyboardContainerMouseDown(t)}),this.onInit())}}])&&Keyboard_defineProperties(e.prototype,t),SimpleKeyboard}();t.default=r}])},"object"===a(t)&&"object"===a(e)?e.exports=s():(i=[],void 0===(r="function"===typeof(o=s)?o.apply(t,i):o)||(e.exports=r))}).call(this,n(3)(e))},function(e,t,n){e.exports=n(6)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){function _typeof(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=_typeof=function(e){return typeof e}:e.exports=_typeof=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(t)}e.exports=_typeof},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(1),s=n.n(r);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cleanProps=function(e){return _objectSpread(_objectSpread({},e),{},{keyboardRef:null,stateToIgnore:null})},a=(n(5),function(e){var t=e.baseClass||"react-simple-keyboard",n=Object(o.useRef)(),r=Object(o.useRef)(),a=Object(o.useRef)(e);return Object(o.useEffect)((function(){var o=function(e){return _objectSpread(_objectSpread({},e),{},{theme:"simple-keyboard ".concat(e.theme||"hg-theme-default")})}(e);n.current||(n.current=!0,o.debug&&console.log("ReactSimpleKeyboard: Init"),r.current=new s.a(".".concat(t),o),o.keyboardRef&&o.keyboardRef(r.current));var i=function(e,t){var n=cleanProps(t),o=cleanProps(e);return Object.keys(n).filter((function(e){return n[e]!==o[e]}))}(a.current,o);if(i.length){var u=r.current;a.current=o,u.setOptions(o),o.debug&&console.log("ReactSimpleKeyboard - setOptions called due to updated props:",i)}}),[n,t,a,e]),i.a.createElement("div",{className:t})});t.default=a}])}));
//# sourceMappingURL=index.js.map