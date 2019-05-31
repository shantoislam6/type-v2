/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/type */ \"./src/lib/type.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function(){\r\n    const initType = Object(_lib_type__WEBPACK_IMPORTED_MODULE_0__[\"type\"])().init();\r\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/lib/core/core.js":
/*!******************************!*\
  !*** ./src/lib/core/core.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TypeWriter; });\n/* \r\n * TypeWrite Class all where go on all functionality for auto typeing \r\n*/ \r\nclass TypeWriter{\r\n\r\n    constructor(\r\n        element, \r\n        words = '[]',\r\n        speed = 300,\r\n        wait = 2000, \r\n        blinkSpeed = 500 , \r\n        blink = false,\r\n        removeSpeed,\r\n        colors,\r\n        fontWeight = '',\r\n        blinkText\r\n        ){\r\n        this.element = element;\r\n        this.words = words;\r\n        this.colors = colors;\r\n        this.colorIndex = 0;\r\n        this.text  = '';\r\n        this.wordIndex = 0;\r\n        this.targetDelete = '';\r\n        this.wait  = parseInt(wait, 10);\r\n        this.speed = parseInt(speed, 10);\r\n        this.isDeleting = false;\r\n        this.blinkSpeed = blinkSpeed;\r\n        this.isBlinkAnimate = blink;\r\n        this.removeSpeed = removeSpeed != undefined ? removeSpeed : this.speed / 2;\r\n        this.letterIndex = 0;\r\n        this.color = '';\r\n        this.typeSpeed = this.speed;\r\n        this.fontWeight = fontWeight;\r\n        this.blinkText = blinkText;\r\n        this.typeInit();\r\n    }\r\n    typeInit(){\r\n        const styleText = `\r\n        <style>\r\n            .blink-animate{\r\n                opacity: 1; \r\n            }\r\n            @keyframes blink {\r\n                0% {\r\n                    opacity: 1;\r\n                }\r\n                50% {\r\n                    opacity: 0;\r\n                }\r\n                100% {\r\n                    opacity: 1;\r\n            \r\n                }\r\n            }\r\n        </style>`; \r\n\r\n        this.element.style.fontWeight = this.fontWeight;\r\n\r\n        if(this.isBlinkAnimate){\r\n            this.element.innerHTML += styleText;\r\n        }\r\n\r\n        // add text element\r\n        this.element.innerHTML += `<span></span><span class=\"blink-animate\">${this.blinkText != null ? this.blinkText : '|'}</span>`;\r\n\r\n        // start type\r\n        this.type();\r\n    }\r\n    // type method\r\n    type(){\r\n         \r\n        // Set current word index \r\n         const currentW = this.wordIndex % this.words.length;\r\n\r\n\r\n         if(Array.isArray(this.colors)){\r\n             // Set current color index \r\n             const currentC = this.colorIndex % this.colors.length;\r\n             // Get color\r\n             this.color = this.colors[currentC];\r\n         }\r\n\r\n\r\n         // Get full text \r\n         const fullText = this.words[currentW];\r\n\r\n\r\n         // check if deleting or adding \r\n        if( !this.isDeleting && this.letterIndex <= fullText.length){\r\n            // add text\r\n            this.text = fullText.substring(0, this.letterIndex);\r\n            this.letterIndex++;\r\n\r\n            // check if ready for remove text\r\n            if(this.letterIndex > fullText.length - 1){\r\n                this.typeSpeed = this.removeSpeed;\r\n\r\n                // start blink animation\r\n                if(this.isBlinkAnimate){\r\n                    this.element.children[2].style.animation = `blink ${ this.blinkSpeed / 1000}s infinite`;\r\n                }\r\n                \r\n                // wait for remove text\r\n                setTimeout(()=>{\r\n\r\n                    this.letterIndex = fullText.length;\r\n                    this.isDeleting = true;\r\n\r\n                    // remove blink animation\r\n                    if(this.isBlinkAnimate){\r\n                        this.element.children[2].style.animation = ``;\r\n                    }\r\n\r\n                },this.wait);\r\n            }\r\n            \r\n        } else if ( this.isDeleting && this.letterIndex >= 0) {\r\n\r\n            // remove text\r\n            this.text = fullText.substring(0, this.letterIndex);\r\n            this.letterIndex--;\r\n\r\n             // check if ready for add next word text\r\n            if(this.letterIndex == 1){\r\n                this.letterIndex = 0;\r\n                this.typeSpeed = this.speed;\r\n                this.isDeleting = false;\r\n                this.wordIndex++;\r\n                this.colorIndex++;\r\n            }\r\n        }\r\n\r\n\r\n        // add text to element\r\n        this.element.children[1].innerHTML = this.text;\r\n \r\n        // add color to element\r\n        this.element.style.color = this.color;\r\n\r\n        // Run type() method interval\r\n        setTimeout(()=>this.type(), this.typeSpeed);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/lib/core/core.js?");

/***/ }),

/***/ "./src/lib/type.js":
/*!*************************!*\
  !*** ./src/lib/type.js ***!
  \*************************/
/*! exports provided: type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"type\", function() { return type; });\n/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core */ \"./src/lib/core/core.js\");\n\r\n/*\r\n * Bootstrap\r\n * @ return intit method\r\n*/\r\nfunction type(){\r\n    return {\r\n        textElements: document.querySelectorAll('.text-type'),\r\n        init(){\r\n            Array.from(this.textElements).forEach(element => {\r\n                const speed = element.getAttribute('data-type-speed');\r\n                const wait  = element.getAttribute('data-type-wait');\r\n                const words = JSON.parse(element.getAttribute('data-type-words'));\r\n                const blink = eval(element.getAttribute('data-type-blink'));\r\n                const blinkSpeed = element.getAttribute('data-type-blink-speed');\r\n                const removeSpeed = element.getAttribute('data-remove-Speed');\r\n                const colors  = JSON.parse(element.getAttribute('data-type-colors'));\r\n                const fontWeight = element.getAttribute('data-type-font-weight');\r\n                const blinkText = element.getAttribute('data-blink-text');\r\n                new _core_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n                    element,\r\n                     words, \r\n                     speed, \r\n                     wait,\r\n                     blinkSpeed,\r\n                     blink,\r\n                    removeSpeed,\r\n                    colors,\r\n                    fontWeight,\r\n                    blinkText\r\n                );\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/lib/type.js?");

/***/ })

/******/ });