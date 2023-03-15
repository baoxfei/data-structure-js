/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CircularLinkedList\": () => (/* reexport safe */ _linkedList__WEBPACK_IMPORTED_MODULE_2__.CircularLinkedList),\n/* harmony export */   \"LinkedList\": () => (/* reexport default from dynamic */ _linkedList__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   \"Queue\": () => (/* reexport safe */ _queue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Stack\": () => (/* reexport safe */ _stack__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ \"./src/stack.js\");\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queue */ \"./src/queue.js\");\n/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedList */ \"./src/linkedList.ts\");\n/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_linkedList__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://data-structure/./src/index.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Queue {\n  constructor() {\n    this.queue = [];\n    this.count = 0;\n    this.lowerCount = 0;\n  }\n  /**\n   * 入队列\n   */\n  enqueue(element) {\n    this.queue[this.count] = element;\n    this.count++;\n  }\n  /**\n   * 出队列\n   */\n  denqueue() {\n    if (this.isEmpty()) return undefined;\n    const item = this.queue[this.lowerCount];\n    delete this.queue[this.lowerCount];\n    this.lowerCount++;\n    return item;\n  }\n  /**\n   * 预览 \n   */\n  peek() {\n    if (this.isEmpty()) return undefined;\n    const item = this.queue[this.lowerCount];\n    return item;\n  }\n  /**\n   * isEmpty\n   */\n  isEmpty() {\n    return this.size() === 0;\n  }\n  /**\n   * size\n   */\n  size() {\n    return this.count - this.lowerCount;\n  }\n  /**\n   * clear\n   */\n  clear() {\n    this.queue = [];\n    this.count = 0;\n    this.lowerCount = 0;\n  }\n  /**\n   * 字符化\n   */\n  toString() {\n    let s = '';\n    for (let index = this.lowerCount; index < this.count; index++) {\n      const element = array[index];\n      s = `${s},${element}`;\n    }\n    return s;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);\n\n//# sourceURL=webpack://data-structure/./src/queue.js?");

/***/ }),

/***/ "./src/stack.js":
/*!**********************!*\
  !*** ./src/stack.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Stack {\n  constructor() {\n    this.stack = [];\n    // 疑问 为什么要存在count\n    // 保证顺序性\n    this.count = 0;\n  }\n  /**\n   * 入栈\n   */\n  push(element) {\n    this.stack[this.count] = element;\n    this.count++;\n  }\n  /**\n   * 栈顶 出栈\n   */\n  pop() {\n    if (this.isEmpty()) return undefined;\n    this.count--;\n    const item = this.stack[this.count];\n    delete this.stack[this.count];\n    return item;\n  }\n  /**\n   * 预览 栈顶\n   */\n  peek() {\n    if (this.isEmpty()) return undefined;\n    const item = this.stack[this.count - 1];\n    return item;\n  }\n  /**\n   * isEmpty\n   */\n  isEmpty() {\n    return this.count === 0;\n  }\n  /**\n   * size\n   */\n  size() {\n    return this.count;\n  }\n  /**\n   * clear\n   */\n  clear() {\n    this.stack = [];\n    this.count = 0;\n  }\n  /**\n   * 字符化\n   */\n  toString() {\n    const length = this.count;\n    let s = '';\n    this.stack.forEach(n => {\n      s = `${s},${n}`;\n    });\n    return s;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);\n\n//# sourceURL=webpack://data-structure/./src/stack.js?");

/***/ }),

/***/ "./src/linkedList.ts":
/*!***************************!*\
  !*** ./src/linkedList.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CircularLinkedList = void 0;\n/**\n * head\n * insert\n * getelementat\n * size\n * empty\n * remove\n * removeAt\n * getHead\n * toString\n * clear\n * push\n */\n// import { defaultEquals, IEqualsFunction } from '../util';\nconst node_1 = __importDefault(__webpack_require__(/*! ./utils/node */ \"./src/utils/node.ts\"));\nconst defaultEquals = (a, b) => {\n    return a === b;\n};\nclass LinkedList {\n    constructor(equalsFn = defaultEquals) {\n        this.equalsFn = equalsFn;\n    }\n    push(element) {\n        const node = new node_1.default(element);\n        if (this.head === null) {\n            this.head = node;\n        }\n        else {\n            let current = this.head;\n            while (current === null || current === void 0 ? void 0 : current.next) {\n                current = current.next;\n            }\n            current.next = node;\n        }\n        this.count++;\n    }\n    insert(index, element) {\n        if (index >= 0 && index < this.count) {\n            const node = new node_1.default(element);\n            if (index === 0) {\n                node.next = this.head;\n                this.head = node;\n            }\n            else {\n                const pre = this.getElementAt(index - 1);\n                node.next = pre === null || pre === void 0 ? void 0 : pre.next;\n                pre.next = node;\n            }\n            this.count++;\n            return true;\n        }\n        return false;\n    }\n    getElementAt(index) {\n        if (index >= 0 && index < this.count) {\n            let current = 0;\n            let currentNode = this.head;\n            while (current !== index && currentNode) {\n                current++;\n                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;\n            }\n            return currentNode === null || currentNode === void 0 ? void 0 : currentNode.element;\n        }\n        return undefined;\n    }\n    removeAt(index) {\n        if (index < 0 || index >= this.count)\n            return;\n        const node = this.getElementAt(index - 1);\n        const removeNode = node.next;\n        node.next = removeNode === null || removeNode === void 0 ? void 0 : removeNode.next;\n        return removeNode;\n    }\n    size() {\n        return this.count;\n    }\n    isEmpty() {\n        return this.size() === 0;\n    }\n    getHead() {\n        return this.head;\n    }\n    clear() {\n        this.head = undefined;\n        this.count = 0;\n    }\n    indexOf(element) {\n        let current = this.head;\n        for (let i = 0; i < this.size(); i++) {\n            if (this.equalsFn(current === null || current === void 0 ? void 0 : current.element, element)) {\n                return i;\n            }\n            current = current === null || current === void 0 ? void 0 : current.next;\n        }\n        return -1;\n    }\n}\nclass CircularLinkedList extends LinkedList {\n    constructor(equalsFn) {\n        super(equalsFn);\n    }\n    push(element) {\n        const node = new node_1.default(element);\n        if (this.count = 0) {\n            this.head = node;\n            node.next = this.head;\n        }\n        else {\n            const pre = this.getElementAt(this.count - 1);\n            pre.next = node;\n            node.next = this.head;\n            this.count++;\n        }\n    }\n    removeAt(index) {\n        var _a;\n        // let pre: Node<any> | null = null\n        // // 没有考虑 this.heads\n        // if (index === 0) {\n        //   // remove index 0\n        //   pre = this.getElementAt(this.count - 1)\n        // } else {\n        //   pre = this.getElementAt(index - 1)\n        // }\n        // const element = pre?.next.element\n        // if (pre) {\n        //   pre.next = pre.next.next\n        // }\n        // return element\n        let current;\n        if (index === 0) {\n            if (this.size() === 0) {\n                this.head = undefined;\n            }\n            else {\n                const removed = this.head;\n                current = this.getElementAt(this.size() - 1);\n                this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;\n                current.next = this.head;\n                current = removed;\n            }\n        }\n        else {\n            const previous = this.getElementAt(index - 1);\n            current = previous.next;\n            previous.next = current.next;\n        }\n        this.count--;\n        return current.element;\n    }\n    insert(index, element) {\n        return false;\n    }\n}\nexports.CircularLinkedList = CircularLinkedList;\nexports[\"default\"] = LinkedList;\n\n\n//# sourceURL=webpack://data-structure/./src/linkedList.ts?");

/***/ }),

/***/ "./src/utils/node.ts":
/*!***************************!*\
  !*** ./src/utils/node.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Node {\n    constructor(element, next) {\n        this.element = element;\n        this.next = next;\n    }\n}\nexports[\"default\"] = Node;\n\n\n//# sourceURL=webpack://data-structure/./src/utils/node.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;