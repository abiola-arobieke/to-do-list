/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/checkbox.js":
/*!*****************************!*\
  !*** ./modules/checkbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _savetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savetask.js */ "./modules/savetask.js");


// check and cross selected item
const check = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    if (checkbox.value === 'true') {
      checkbox.setAttribute('checked', 'checked');
    }
    checkbox.addEventListener('change', (event) => {
      const btnGrandParent = event.target.parentElement.parentElement;
      const description = btnGrandParent.firstElementChild.children.item(1);
      const markedDesc = btnGrandParent.firstElementChild.children.item(2);
      const taskArrayIndex = event.target.id;

      if (event.target.checked) {
        event.target.value = true;
        markedDesc.classList.remove('false');
        markedDesc.classList.add('true');
        description.classList.remove('true');
        description.classList.add('false');

        const taskData = {
          completed: true,
        };

        _savetask_js__WEBPACK_IMPORTED_MODULE_0__.task[taskArrayIndex].completed = taskData.completed;
        (0,_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
        event.target.setAttribute('checked', 'checked');
      } else {
        event.target.value = false;
        event.target.removeAttribute('checked');

        markedDesc.classList.remove('true');
        markedDesc.classList.add('false');
        description.classList.remove('false');
        description.classList.add('true');

        const taskData = {
          completed: false,
        };

        _savetask_js__WEBPACK_IMPORTED_MODULE_0__.task[taskArrayIndex].completed = taskData.completed;
        (0,_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);

/***/ }),

/***/ "./modules/savetask.js":
/*!*****************************!*\
  !*** ./modules/savetask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "fetchTask": () => (/* binding */ fetchTask),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "saveTaskId": () => (/* binding */ saveTaskId),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "todoTask": () => (/* binding */ todoTask)
/* harmony export */ });
const task = JSON.parse(localStorage.getItem('allTask')) || [];
const todoTask = JSON.parse(localStorage.getItem('todo-id')) || {};

// save task id
const saveTaskId = () => {
  localStorage.setItem('todo-id', JSON.stringify(todoTask));
};

// update task array
const saveTask = () => {
  localStorage.setItem('allTask', JSON.stringify(task));
};

const fetchTask = () => JSON.parse(localStorage.getItem('allTask')) || [];

// Method for creating new task
const createTask = (taskItem) => {
  if (task.length === 0) {
    todoTask.id = 1;
    saveTaskId();
  } else {
    todoTask.id += 1;
    saveTaskId();
  }

  const taskData = {
    id: '',
    description: '',
    completed: false,
  };

  taskData.id = todoTask.id;
  taskData.description = taskItem;
  task.push(taskData);
  saveTask();
  // taskItem = '';
  // loadTask();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\n  background-color: #f6f6f6;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 15px;\n  font-weight: 300;\n}\n\nul {\n  list-style-type: none;\n  padding-inline-start: 0;\n}\n\n.container {\n  padding: 24px 12px;\n  margin: 0 auto;\n}\n\nli {\n  line-height: 20px;\n  word-wrap: break-word;\n}\n\n.clear-all {\n  padding: 15px 0;\n}\n\nbutton {\n  margin: 0 auto;\n  background-color: #e0e0e0;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.checkbox {\n  margin: 0 10px 0 2px;\n  font-weight: bold;\n}\n\n.todo-list {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);\n}\n\n.add-task-text {\n  font-style: italic;\n}\n\n.refresh {\n  margin-right: 10px;\n}\n\n.more {\n  float: right;\n}\n\ninput[type='text' i] {\n  font-size: 15px;\n}\n\n.edit-task {\n  margin-right: 8px;\n  margin-left: 2px;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.edit-input {\n  width: 75%;\n}\n\n/* utility classes */\n\n.d-flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.bg-yellow {\n  background-color: rgba(247, 247, 187, 1);\n}\n\n.align-center {\n  align-self: center;\n}\n\n.bg-light-gray {\n  background-color: #f6f6f6;\n}\n\n.justify-content-ctr {\n  justify-content: center;\n}\n\n.justify-spc-btw {\n  justify-content: space-between;\n}\n\n.px-10-py-15 {\n  padding: 15px 10px;\n}\n\n.py-15 {\n  padding: 15px 0;\n}\n\n.text-gray {\n  color: #555;\n}\n\n.border-none {\n  border: none;\n}\n\n.border-bottom {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.m-none {\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n.mr-6 {\n  margin-right: 6px;\n}\n\n.ft-20 {\n  font-size: 20px;\n}\n\n.mb-5 {\n  margin-bottom: 2px;\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.true {\n  display: initial;\n}\n\n.false {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) {\n  .container {\n    padding: 10% 20%;\n    width: 582px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,6EAA6E;EAC7E,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,gBAAgB;IAChB,YAAY;EACd;AACF","sourcesContent":["body {\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\n  background-color: #f6f6f6;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 15px;\n  font-weight: 300;\n}\n\nul {\n  list-style-type: none;\n  padding-inline-start: 0;\n}\n\n.container {\n  padding: 24px 12px;\n  margin: 0 auto;\n}\n\nli {\n  line-height: 20px;\n  word-wrap: break-word;\n}\n\n.clear-all {\n  padding: 15px 0;\n}\n\nbutton {\n  margin: 0 auto;\n  background-color: #e0e0e0;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.checkbox {\n  margin: 0 10px 0 2px;\n  font-weight: bold;\n}\n\n.todo-list {\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);\n}\n\n.add-task-text {\n  font-style: italic;\n}\n\n.refresh {\n  margin-right: 10px;\n}\n\n.more {\n  float: right;\n}\n\ninput[type='text' i] {\n  font-size: 15px;\n}\n\n.edit-task {\n  margin-right: 8px;\n  margin-left: 2px;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.edit-input {\n  width: 75%;\n}\n\n/* utility classes */\n\n.d-flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.bg-yellow {\n  background-color: rgba(247, 247, 187, 1);\n}\n\n.align-center {\n  align-self: center;\n}\n\n.bg-light-gray {\n  background-color: #f6f6f6;\n}\n\n.justify-content-ctr {\n  justify-content: center;\n}\n\n.justify-spc-btw {\n  justify-content: space-between;\n}\n\n.px-10-py-15 {\n  padding: 15px 10px;\n}\n\n.py-15 {\n  padding: 15px 0;\n}\n\n.text-gray {\n  color: #555;\n}\n\n.border-none {\n  border: none;\n}\n\n.border-bottom {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.m-none {\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n.mr-6 {\n  margin-right: 6px;\n}\n\n.ft-20 {\n  font-size: 20px;\n}\n\n.mb-5 {\n  margin-bottom: 2px;\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.true {\n  display: initial;\n}\n\n.false {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) {\n  .container {\n    padding: 10% 20%;\n    width: 582px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "delCheckedTask": () => (/* binding */ delCheckedTask)
/* harmony export */ });
/* harmony import */ var _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/savetask.js */ "./modules/savetask.js");
/* harmony import */ var _modules_checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/checkbox.js */ "./modules/checkbox.js");



const todoList = document.querySelector('#todo');
const newTask = document.getElementById('new-task');
let moreBtn;

// create html tags and load data
const loadTask = () => {
  // remove old list item that was created
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  // Fetch data, create and insert data newly created elements
  _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task.forEach((todo, index) => {
    const htmlTemplate = `
      <div class="px-10-py-15 text-gray border-bottom">
          <input type="checkbox" class="checkbox" id="${index}" value="${
      todo.completed
    }" />
          <span class="${!todo.completed}">${todo.description}</span>
          <del class=" ${todo.completed}">
              <span>${todo.description}</span>
          </del>
          <div class="dropdown more">
              <button class="drop-btn border-none bg-white">
                  <i class="fa fa-ellipsis-v text-gray" aria-hidden="true"></i>
              </button>
          </div> 
      </div>
      <div class="edit-container px-10-py-15 text-gray border-bottom bg-yellow hide">
          <input type="checkbox" class="edit-task bg-yellow" id="${index}" 
          value="${todo.completed}"/>
          <input class="text-gray edit-input border-none bg-yellow" type="text" 
          value="${todo.description}" />
          <div class="dropdown more">
              <button class="border-none bg-yellow">
                  <i class="fa fa-trash-o ft-20 text-gray" aria-hidden="true"></i>
              </button>
          </div> 
      </div>
    `;
    const liTag = document.createElement('li');
    liTag.innerHTML = htmlTemplate;
    todoList.appendChild(liTag);
  });
  // Get all more buttons
  moreBtn = document.querySelectorAll('.drop-btn');
  moreBtn.forEach((eachMoreBtn, btnIndex) => {
    // toggle more button to edit or delete a task
    eachMoreBtn.addEventListener('click', () => {
      const grandParentElement = eachMoreBtn.parentElement.parentElement;
      const delBtnContainer = grandParentElement.parentElement.lastElementChild;
      const checkClassName = delBtnContainer.className.includes('hide');
      if (checkClassName) {
        delBtnContainer.classList.remove('hide');
        delBtnContainer.classList.add('show');
        grandParentElement.classList.add('hide');

        // Delete a task
        const taskIndex = delBtnContainer.firstElementChild.id;
        const deleteTask = delBtnContainer.lastElementChild.firstElementChild;
        deleteTask.addEventListener('click', () => {
          _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task.forEach((task, index) => {
            if (parseInt(taskIndex, 10) === index) {
              task.splice(index, 1);
              (0,_modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
              loadTask();
            }
          });
        });
        // Edit a task
        const updateTask = delBtnContainer.firstElementChild.nextElementSibling;
        updateTask.addEventListener('blur', () => {
          if (updateTask.value) {
            const taskData = {
              description: '',
              completed: false,
            };

            taskData.description = updateTask.value;
            _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task[btnIndex] = taskData;
            updateTask.value = taskData.description;
            (0,_modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
            loadTask();
          }
        });
      }
    });
  });

  (0,_modules_checkbox_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

// Add new task
const addTask = document.getElementById('new-task');

addTask.addEventListener('keyup', (event) => {
  // if (newTask.value) {
  if (event.code === 'Enter') {
    (0,_modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newTask.value);
    loadTask();
    newTask.value = '';
  }
  // }
});

// Delete completed task
const delCheckedTask = document.getElementById('clear-task');
delCheckedTask.addEventListener('click', () => {
  if (_modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task.length !== 0) {
    const selected = document.querySelectorAll('[checked=checked]');

    const selectedIds = [];
    selected.forEach((select) => {
      selectedIds.push(Number(select.id));
    });

    const newTasks = _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task.filter((t, index) => !selectedIds.includes(index));
    _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task.length = 0;
    newTasks.forEach((item) => {
      _modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.task.push(item);
    });
    (0,_modules_savetask_js__WEBPACK_IMPORTED_MODULE_0__.saveTask)();
    loadTask();
  }
});

loadTask();


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.css */ "./src/style.css");
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/index.js */ "./src/index.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL21vZHVsZXMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL21vZHVsZXMvc2F2ZXRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2svLi9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrLCBzYXZlVGFzayB9IGZyb20gJy4vc2F2ZXRhc2suanMnO1xuXG4vLyBjaGVjayBhbmQgY3Jvc3Mgc2VsZWN0ZWQgaXRlbVxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcbiAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGlmIChjaGVja2JveC52YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH1cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGJ0bkdyYW5kUGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYnRuR3JhbmRQYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4uaXRlbSgxKTtcbiAgICAgIGNvbnN0IG1hcmtlZERlc2MgPSBidG5HcmFuZFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbi5pdGVtKDIpO1xuICAgICAgY29uc3QgdGFza0FycmF5SW5kZXggPSBldmVudC50YXJnZXQuaWQ7XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0cnVlO1xuICAgICAgICBtYXJrZWREZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhbHNlJyk7XG4gICAgICAgIG1hcmtlZERlc2MuY2xhc3NMaXN0LmFkZCgndHJ1ZScpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0cnVlJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZhbHNlJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0RhdGEgPSB7XG4gICAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tbdGFza0FycmF5SW5kZXhdLmNvbXBsZXRlZCA9IHRhc2tEYXRhLmNvbXBsZXRlZDtcbiAgICAgICAgc2F2ZVRhc2soKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuXG4gICAgICAgIG1hcmtlZERlc2MuY2xhc3NMaXN0LnJlbW92ZSgndHJ1ZScpO1xuICAgICAgICBtYXJrZWREZXNjLmNsYXNzTGlzdC5hZGQoJ2ZhbHNlJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhbHNlJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RydWUnKTtcblxuICAgICAgICBjb25zdCB0YXNrRGF0YSA9IHtcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tbdGFza0FycmF5SW5kZXhdLmNvbXBsZXRlZCA9IHRhc2tEYXRhLmNvbXBsZXRlZDtcbiAgICAgICAgc2F2ZVRhc2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVjazsiLCJleHBvcnQgY29uc3QgdGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2snKSkgfHwgW107XG5leHBvcnQgY29uc3QgdG9kb1Rhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWlkJykpIHx8IHt9O1xuXG4vLyBzYXZlIHRhc2sgaWRcbmV4cG9ydCBjb25zdCBzYXZlVGFza0lkID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1pZCcsIEpTT04uc3RyaW5naWZ5KHRvZG9UYXNrKSk7XG59O1xuXG4vLyB1cGRhdGUgdGFzayBhcnJheVxuZXhwb3J0IGNvbnN0IHNhdmVUYXNrID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFzaycsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRhc2sgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrJykpIHx8IFtdO1xuXG4vLyBNZXRob2QgZm9yIGNyZWF0aW5nIG5ldyB0YXNrXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrSXRlbSkgPT4ge1xuICBpZiAodGFzay5sZW5ndGggPT09IDApIHtcbiAgICB0b2RvVGFzay5pZCA9IDE7XG4gICAgc2F2ZVRhc2tJZCgpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9UYXNrLmlkICs9IDE7XG4gICAgc2F2ZVRhc2tJZCgpO1xuICB9XG5cbiAgY29uc3QgdGFza0RhdGEgPSB7XG4gICAgaWQ6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9O1xuXG4gIHRhc2tEYXRhLmlkID0gdG9kb1Rhc2suaWQ7XG4gIHRhc2tEYXRhLmRlc2NyaXB0aW9uID0gdGFza0l0ZW07XG4gIHRhc2sucHVzaCh0YXNrRGF0YSk7XG4gIHNhdmVUYXNrKCk7XG4gIC8vIHRhc2tJdGVtID0gJyc7XG4gIC8vIGxvYWRUYXNrKCk7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdMdWNpZGEgR3JhbmRlJywgdGFob21hLCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDI0cHggMTJweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5saSB7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmNsZWFyLWFsbCB7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW46IDAgMTBweCAwIDJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uYWRkLXRhc2stdGV4dCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm1vcmUge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0JyBpXSB7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5lZGl0LXRhc2sge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJnLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAxODcsIDEpO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJnLWxpZ2h0LWdyYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1jdHIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LXNwYy1idHcge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHgtMTAtcHktMTUge1xcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcbn1cXG5cXG4ucHktMTUge1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4udGV4dC1ncmF5IHtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4uYm9yZGVyLW5vbmUge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuXFxuLm0tbm9uZSB7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4ubXItNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuLmZ0LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4ubm8tcGFkIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udHJ1ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4uZmFsc2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwJSAyMCU7XFxuICAgIHdpZHRoOiA1ODJweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDZFQUE2RTtFQUM3RSx5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnTHVjaWRhIEdyYW5kZScsIHRhaG9tYSwgdmVyZGFuYSwgYXJpYWwsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyNHB4IDEycHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxubGkge1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5jbGVhci1hbGwge1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCAycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmFkZC10YXNrLXRleHQge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tb3JlIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCcgaV0ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uZWRpdC10YXNrIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmVkaXQtaW5wdXQge1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLyogdXRpbGl0eSBjbGFzc2VzICovXFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5iZy15ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NywgMTg3LCAxKTtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iZy1saWdodC1ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtY3RyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1zcGMtYnR3IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnB4LTEwLXB5LTE1IHtcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXG59XFxuXFxuLnB5LTE1IHtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLnRleHQtZ3JheSB7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxuLmJvcmRlci1ub25lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmJvcmRlci1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxufVxcblxcbi5tLW5vbmUge1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLm1yLTYge1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5mdC0yMCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLm5vLXBhZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRydWUge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuLmZhbHNlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMCUgMjAlO1xcbiAgICB3aWR0aDogNTgycHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrLCBjcmVhdGVUYXNrLCBzYXZlVGFzayB9IGZyb20gJy4uL21vZHVsZXMvc2F2ZXRhc2suanMnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4uL21vZHVsZXMvY2hlY2tib3guanMnO1xuXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG5sZXQgbW9yZUJ0bjtcblxuLy8gY3JlYXRlIGh0bWwgdGFncyBhbmQgbG9hZCBkYXRhXG5jb25zdCBsb2FkVGFzayA9ICgpID0+IHtcbiAgLy8gcmVtb3ZlIG9sZCBsaXN0IGl0ZW0gdGhhdCB3YXMgY3JlYXRlZFxuICB3aGlsZSAodG9kb0xpc3QuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cbiAgLy8gRmV0Y2ggZGF0YSwgY3JlYXRlIGFuZCBpbnNlcnQgZGF0YSBuZXdseSBjcmVhdGVkIGVsZW1lbnRzXG4gIHRhc2suZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBodG1sVGVtcGxhdGUgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicHgtMTAtcHktMTUgdGV4dC1ncmF5IGJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIGlkPVwiJHtpbmRleH1cIiB2YWx1ZT1cIiR7XG4gICAgICB0b2RvLmNvbXBsZXRlZFxuICAgIH1cIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHshdG9kby5jb21wbGV0ZWR9XCI+JHt0b2RvLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8ZGVsIGNsYXNzPVwiICR7dG9kby5jb21wbGV0ZWR9XCI+XG4gICAgICAgICAgICAgIDxzcGFuPiR7dG9kby5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIG1vcmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3AtYnRuIGJvcmRlci1ub25lIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLXYgdGV4dC1ncmF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWNvbnRhaW5lciBweC0xMC1weS0xNSB0ZXh0LWdyYXkgYm9yZGVyLWJvdHRvbSBiZy15ZWxsb3cgaGlkZVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImVkaXQtdGFzayBiZy15ZWxsb3dcIiBpZD1cIiR7aW5kZXh9XCIgXG4gICAgICAgICAgdmFsdWU9XCIke3RvZG8uY29tcGxldGVkfVwiLz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0ZXh0LWdyYXkgZWRpdC1pbnB1dCBib3JkZXItbm9uZSBiZy15ZWxsb3dcIiB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgIHZhbHVlPVwiJHt0b2RvLmRlc2NyaXB0aW9ufVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIG1vcmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvcmRlci1ub25lIGJnLXllbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vIGZ0LTIwIHRleHQtZ3JheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb25zdCBsaVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlUYWcuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGxpVGFnKTtcbiAgfSk7XG4gIC8vIEdldCBhbGwgbW9yZSBidXR0b25zXG4gIG1vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcC1idG4nKTtcbiAgbW9yZUJ0bi5mb3JFYWNoKChlYWNoTW9yZUJ0biwgYnRuSW5kZXgpID0+IHtcbiAgICAvLyB0b2dnbGUgbW9yZSBidXR0b24gdG8gZWRpdCBvciBkZWxldGUgYSB0YXNrXG4gICAgZWFjaE1vcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBncmFuZFBhcmVudEVsZW1lbnQgPSBlYWNoTW9yZUJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBkZWxCdG5Db250YWluZXIgPSBncmFuZFBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgY29uc3QgY2hlY2tDbGFzc05hbWUgPSBkZWxCdG5Db250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdoaWRlJyk7XG4gICAgICBpZiAoY2hlY2tDbGFzc05hbWUpIHtcbiAgICAgICAgZGVsQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZGVsQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgZ3JhbmRQYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICAvLyBEZWxldGUgYSB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGRlbEJ0bkNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5pZDtcbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRlbEJ0bkNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRhc2suZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludCh0YXNrSW5kZXgsIDEwKSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgdGFzay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICBzYXZlVGFzaygpO1xuICAgICAgICAgICAgICBsb2FkVGFzaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRWRpdCBhIHRhc2tcbiAgICAgICAgY29uc3QgdXBkYXRlVGFzayA9IGRlbEJ0bkNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHVwZGF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICBpZiAodXBkYXRlVGFzay52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGEgPSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhc2tEYXRhLmRlc2NyaXB0aW9uID0gdXBkYXRlVGFzay52YWx1ZTtcbiAgICAgICAgICAgIHRhc2tbYnRuSW5kZXhdID0gdGFza0RhdGE7XG4gICAgICAgICAgICB1cGRhdGVUYXNrLnZhbHVlID0gdGFza0RhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBzYXZlVGFzaygpO1xuICAgICAgICAgICAgbG9hZFRhc2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjaGVjaygpO1xufTtcblxuLy8gQWRkIG5ldyB0YXNrXG5leHBvcnQgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gIC8vIGlmIChuZXdUYXNrLnZhbHVlKSB7XG4gIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgY3JlYXRlVGFzayhuZXdUYXNrLnZhbHVlKTtcbiAgICBsb2FkVGFzaygpO1xuICAgIG5ld1Rhc2sudmFsdWUgPSAnJztcbiAgfVxuICAvLyB9XG59KTtcblxuLy8gRGVsZXRlIGNvbXBsZXRlZCB0YXNrXG5leHBvcnQgY29uc3QgZGVsQ2hlY2tlZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItdGFzaycpO1xuZGVsQ2hlY2tlZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmICh0YXNrLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NoZWNrZWQ9Y2hlY2tlZF0nKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gW107XG4gICAgc2VsZWN0ZWQuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICBzZWxlY3RlZElkcy5wdXNoKE51bWJlcihzZWxlY3QuaWQpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFzay5maWx0ZXIoKHQsIGluZGV4KSA9PiAhc2VsZWN0ZWRJZHMuaW5jbHVkZXMoaW5kZXgpKTtcbiAgICB0YXNrLmxlbmd0aCA9IDA7XG4gICAgbmV3VGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGFzay5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIHNhdmVUYXNrKCk7XG4gICAgbG9hZFRhc2soKTtcbiAgfVxufSk7XG5cbmxvYWRUYXNrKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3JjL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3JjL2luZGV4LmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=