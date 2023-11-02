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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   todoContainer: () => (/* binding */ todoContainer)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _controler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controler.js */ \"./src/controler.js\");\n\n\n\n\nconst todoName = document.getElementById(\"title\");\nconst todoDate = document.getElementById(\"dueDate\");\nconst todoDescription = document.getElementById(\"description\");\nconst todoPriority = document.getElementById(\"priority\");\nconst home =(0,_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"home\");\nconst todo1= (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Iznesi Djubre\",\"12.1.2004\",\"Blablabla\",\"High\");\nconst todo2= (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Smrsaj\",\"14.02.2015\",\"truxturc\",\"Low\");\nhome.todoList.push(todo1);\nhome.todoList.push(todo2);\n\nconst todoContainer=document.querySelector(\".todo-list\")\n\nconst todoForm=document.querySelector(\".todo-form\");\nconst newTodoBtn=document.querySelector(\".new-todo\");\nconst closeTodoBtn=document.querySelector(\"#todo-close\");\nconst deleteTodoBtn=document.querySelector(\"gg-trash\");\n\nconst projectForm=document.querySelector(\".project-form\");\nconst projectBtn=document.querySelector(\".new-project\");\nconst closeProjectBtn=document.getElementById(\"p-close\");\n\nconst homeBtn=document.getElementById(\"home\");\n\nwindow.addEventListener(\"load\",()=>{\n    (0,_controler_js__WEBPACK_IMPORTED_MODULE_2__.populateHomePage)();\n})\n\nnewTodoBtn.addEventListener(\"click\",()=>{\n    todoForm.classList.add(\"display\")\n});\ncloseTodoBtn.addEventListener(\"click\",()=>{\n        todoForm.classList.remove(\"display\");\n});\ndeleteTodoBtn.addEventListener(\"click\",()=>{\n    (0,_controler_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)();\n})\n\nprojectBtn.addEventListener(\"click\",()=>{\n    projectForm.classList.add(\"display\")\n});\ncloseProjectBtn.addEventListener(\"click\",()=>{\n    projectForm.classList.remove(\"display\")\n});\ntodoForm.addEventListener(\"submit\", (e)=>{\n    e.preventDefault();\n    let newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoName.value,todoDate.value,todoDescription.value,todoPriority.value)\n    home.todoList.push(newTodo);\n    (0,_controler_js__WEBPACK_IMPORTED_MODULE_2__.populateHomePage)();\n});\nhomeBtn.addEventListener(\"click\", ()=>{\n    (0,_controler_js__WEBPACK_IMPORTED_MODULE_2__.populateHomePage)()\n});\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/controler.js":
/*!**************************!*\
  !*** ./src/controler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   makeTodoInterface: () => (/* binding */ makeTodoInterface),\n/* harmony export */   populateHomePage: () => (/* binding */ populateHomePage)\n/* harmony export */ });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\nfunction populateHomePage(){\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoContainer.innerHTML=\"\";\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.home.todoList.forEach((todo)=>{\n            makeTodoInterface(todo);\n        })\n    }\nfunction makeTodoInterface(todo){\n        const todoInterface=document.createElement(\"div\");\n        todoInterface.classList.add(\"todo\");\n        \n        const todoTitle=document.createElement(\"div\");\n        todoTitle.innerHTML=todo.title;\n        todoTitle.classList.add(\"todo-title\")\n        todoInterface.appendChild(todoTitle);\n\n        const todoDate=document.createElement(\"div\");\n        todoDate.innerHTML=todo.dueDate;\n        todoInterface.appendChild(todoDate);\n\n        const todoDescription=document.createElement(\"div\");\n        todoDescription.innerHTML=todo.description;\n        todoInterface.appendChild(todoDescription);\n\n        const todoPriority=document.createElement(\"div\");\n        todoPriority.innerHTML=todo.priority;\n        todoInterface.appendChild(todoPriority);\n\n        const todoRemove=document.createElement(\"div\");\n        todoRemove.classList.add(\"gg-trash\");\n        todoInterface.appendChild(todoRemove)\n        \n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.todoContainer.appendChild(todoInterface);\n    };\nfunction deleteTodo(){\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__.home.todoList.forEach((todo)=>{\n            console.log(todo)\n        })\n    }\n    \n\n//# sourceURL=webpack://odin-todo-list/./src/controler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project(name){\n\n    const todoList=[]\n    return{\n        name,\n        todoList\n    }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction Todo (title,description,dueDate,priority){\n\n    return{\n       title,\n       description,\n       dueDate,\n       priority,\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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