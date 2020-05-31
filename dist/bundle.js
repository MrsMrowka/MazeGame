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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin-top: 0;\n  margin-left: 0;\n  background-color: lightgrey;\n  font-family: \"Chelsea Market\", cursive;\n}\n\n.game {\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n}\n\ncanvas {\n  display: block;\n  margin: 0 auto;\n  border: 1px solid black;\n  background: white;\n}\n\nimg {\n  display: none;\n}\n\n.popUpTab {\n  position: absolute;\n  background-color: lightgrey;\n  height: 110%;\n  width: 100%;\n  z-index: 2;\n  display: none;\n}\n\n.title {\n  display: table;\n  margin: 18% auto 10%;\n  font-size: 50px;\n}\n\n.yourTime {\n  display: table;\n  margin: 2% auto;\n  font-size: 35px;\n}\n\n.restartBtn {\n  display: table;\n  margin: 0 auto;\n  padding: 20px 35px 20px 35px;\n  border-radius: 10px;\n  color: white;\n  background-color: #011627;\n  box-shadow: 0 9px #5c5b5b;\n  cursor: pointer;\n}\n.restartBtn:hover {\n  background-color: #072742;\n}\n.restartBtn:active {\n  background-color: #072742;\n  box-shadow: 0 5px #474747;\n  transform: translateY(4px);\n}\n\n@media (max-width: 1000px) {\n  .wrapper {\n    margin-top: 30%;\n  }\n}\n@media (max-width: 600px) {\n  .wrapper {\n    margin-top: 60%;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ts/drawers.ts":
/*!***************************!*\
  !*** ./src/ts/drawers.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.drawers = void 0;
class drawers {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.boardWidth = this.canvas.width = (window.innerWidth < 350 ? 250 : window.innerWidth < 450 ? 350 : window.innerWidth < 500 ? 450 : 500);
        this.boardHeight = this.canvas.height = (window.innerWidth < 350 ? 400 : window.innerWidth < 450 ? 560 : window.innerWidth < 500 ? 720 : 800);
        this.objectSize = (window.innerWidth < 350 ? 25 : window.innerWidth < 450 ? 35 : window.innerWidth < 500 ? 45 : 50);
        this.half = this.objectSize / 2;
    }
    clearBoard() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawPlayer(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.half / 2, 0, 2 * Math.PI);
        this.ctx.fillStyle = "purple";
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawHole(x, y, ready) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.half, 0, 2 * Math.PI);
        this.ctx.fillStyle = ready ? "gold" : "red";
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawWall(x, y) {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(x, y, this.objectSize, this.objectSize);
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawKey(x, y) {
        let image = document.getElementById("key");
        this.ctx.drawImage(image, x - this.half, y - this.half, this.objectSize, this.objectSize);
    }
    canMoveX(x) {
        return x >= this.half / 2 && x <= this.boardWidth - this.half / 2;
    }
    canMoveY(y) {
        return y >= this.half / 2 && y <= this.boardHeight - this.half / 2;
    }
    isOverlapping(obj1, obj2) {
        return (Math.abs(obj1.x - obj2.x) < this.objectSize / 2 &&
            Math.abs(obj1.y - obj2.y) < this.objectSize / 2);
    }
}
exports.drawers = drawers;


/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");
const units_1 = __webpack_require__(/*! ./units */ "./src/ts/units.ts");
const drawers_1 = __webpack_require__(/*! ./drawers */ "./src/ts/drawers.ts");
const maze_1 = __webpack_require__(/*! ./maze */ "./src/ts/maze.ts");
const canvasDrawers = new drawers_1.drawers();
let handleMaze = new maze_1.createMaze();
let currentXTilt = 0;
let currentYTilt = 0;
let hint = document.querySelector("#showHint");
let popUPtab = document.querySelector('.popUpTab');
let title = document.querySelector('.title');
let personalTime = document.querySelector('.yourTime');
const restartGame = document.querySelector('.restartBtn');
restartGame.onclick = () => {
    hint.innerHTML = "Hint: get the key";
    popUPtab.style.display = "none";
    handleMaze = new maze_1.createMaze();
    const game = new Game();
};
window.addEventListener("deviceorientation", handleOrientationChange, true);
function handleOrientationChange(e) {
    let y = e.beta;
    let x = e.gamma;
    if (y > 90) {
        y = 90;
    }
    if (y < -90) {
        y = -90;
    }
    if (y !== null && x !== null) {
        currentXTilt = x;
        currentYTilt = y;
    }
}
class GameObject {
    constructor(name, x = 0, y = 0) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}
class Ball extends GameObject {
    constructor(x = 0, y = 0) {
        super("Ball", x, y);
        this.velocity = { vertical: 0, horizontal: 0 };
    }
}
class Game {
    constructor() {
        this.startTime = new Date().getTime();
        this.keyObtained = false;
        switch (handleMaze.pathRand) {
            case 1:
                this.randGameObjPosition(5 * canvasDrawers.objectSize, 8 * canvasDrawers.objectSize, canvasDrawers.objectSize, canvasDrawers.objectSize, 9 * canvasDrawers.objectSize, 15 * canvasDrawers.objectSize);
                break;
            case 2:
                this.randGameObjPosition(6 * canvasDrawers.objectSize, 2 * canvasDrawers.objectSize, canvasDrawers.objectSize, 11 * canvasDrawers.objectSize, 7 * canvasDrawers.objectSize, 13 * canvasDrawers.objectSize);
                break;
            case 3:
                this.randGameObjPosition(canvasDrawers.objectSize, canvasDrawers.objectSize, 6 * canvasDrawers.objectSize, 7 * canvasDrawers.objectSize, 3 * canvasDrawers.objectSize, 12 * canvasDrawers.objectSize);
                break;
            case 4:
                this.randGameObjPosition(canvasDrawers.objectSize, 15 * canvasDrawers.objectSize, 8 * canvasDrawers.objectSize, 10 * canvasDrawers.objectSize, 5 * canvasDrawers.objectSize, 2 * canvasDrawers.objectSize);
                break;
        }
        this.gameLoop = setInterval(() => this.render(), 100);
    }
    randGameObjPosition(ballX, ballY, keyX, keyY, holeX, holeY) {
        switch (Math.floor(Math.random() * 6) + 1) {
            case 1:
                this.ball = new Ball(ballX, ballY);
                this.key = new GameObject("Key", keyX, keyY);
                this.hole = new GameObject("Hole", holeX, holeY);
                break;
            case 2:
                this.ball = new Ball(ballX, ballY);
                this.key = new GameObject("Key", holeX, holeY);
                this.hole = new GameObject("Hole", keyX, keyY);
                break;
            case 3:
                this.ball = new Ball(keyX, keyY);
                this.key = new GameObject("Key", ballX, ballY);
                this.hole = new GameObject("Hole", holeX, holeY);
                break;
            case 4:
                this.ball = new Ball(holeX, holeY);
                this.key = new GameObject("Key", ballX, ballY);
                this.hole = new GameObject("Hole", keyX, keyY);
                break;
            case 5:
                this.ball = new Ball(keyX, keyY);
                this.key = new GameObject("Key", holeX, holeY);
                this.hole = new GameObject("Hole", ballX, ballY);
                break;
            case 6:
                this.ball = new Ball(holeX, holeY);
                this.key = new GameObject("Key", keyX, keyY);
                this.hole = new GameObject("Hole", ballX, ballY);
                break;
        }
    }
    calculateBallVelocity() {
        const velocity = units_1.getTiltDirection(currentXTilt, currentYTilt);
        this.ball.velocity.horizontal += velocity.horizontal;
        this.ball.velocity.vertical += velocity.vertical;
    }
    movePlayer() {
        let futureX;
        let futureY;
        if (this.ball.velocity.horizontal > -10 && this.ball.velocity.horizontal < 10) {
            futureX = this.ball.x + this.ball.velocity.horizontal / 4;
        }
        else if (this.ball.velocity.horizontal < -20 && this.ball.velocity.horizontal > 20) {
            futureX = this.ball.x + this.ball.velocity.horizontal / 2;
        }
        else {
            futureX = this.ball.x + this.ball.velocity.horizontal / 3;
        }
        if (this.ball.velocity.vertical > -10 && this.ball.velocity.vertical < 10) {
            futureY = this.ball.y + this.ball.velocity.vertical / 4;
        }
        else if (this.ball.velocity.vertical < -18 && this.ball.velocity.vertical > 18) {
            futureY = this.ball.y + this.ball.velocity.vertical / 2;
        }
        else {
            futureY = this.ball.y + this.ball.velocity.vertical / 3;
        }
        if (canvasDrawers.canMoveX(futureX) && canvasDrawers.canMoveY(futureY)) {
            this.ball.x = futureX;
            this.ball.y = futureY;
        }
        else if (canvasDrawers.canMoveX(futureX)) {
            this.ball.x = futureX;
            this.ball.velocity.vertical = 0;
        }
        else if (canvasDrawers.canMoveY(futureY)) {
            this.ball.y = futureY;
            this.ball.velocity.horizontal = 0;
        }
        else {
            this.ball.velocity.vertical = 0;
            this.ball.velocity.horizontal = 0;
        }
    }
    overlapsKey() {
        if (canvasDrawers.isOverlapping(this.ball, this.key)) {
            this.keyObtained = true;
            hint.innerHTML = "Head towards the exit";
        }
    }
    checkVictoryCondidtions() {
        const endTime = new Date(this.startTime).getTime();
        const now = new Date().getTime();
        if (canvasDrawers.isOverlapping(this.ball, this.hole) &&
            this.keyObtained) {
            clearInterval(this.gameLoop);
            popUPtab.style.display = "block";
            title.innerHTML = "You won!";
            personalTime.innerHTML = "Your Time was: " + Math.abs((endTime - now) / 1000).toFixed(1) + "s";
        }
    }
    checkGameOverCondidtions() {
        let mazeX = Math.floor((this.ball.x + this.ball.velocity.horizontal) / canvasDrawers.objectSize);
        let mazeY = Math.floor((this.ball.y + this.ball.velocity.vertical) / canvasDrawers.objectSize);
        if (this.ball.velocity.horizontal > -10 && this.ball.velocity.horizontal < 10) {
            mazeX = Math.floor((this.ball.x + (canvasDrawers.half / 10 * this.ball.velocity.horizontal)) / canvasDrawers.objectSize);
        }
        else if (this.ball.velocity.horizontal < -20 && this.ball.velocity.horizontal > 20) {
            mazeX = Math.floor((this.ball.x + (this.ball.velocity.horizontal / 4)) / canvasDrawers.objectSize);
        }
        if (this.ball.velocity.vertical > -10 && this.ball.velocity.vertical < 10) {
            mazeY = Math.floor((this.ball.y + (canvasDrawers.half / 10 * this.ball.velocity.vertical)) / canvasDrawers.objectSize);
        }
        else if (this.ball.velocity.vertical < -20 && this.ball.velocity.vertical > 20) {
            mazeY = Math.floor((this.ball.y + (this.ball.velocity.vertical / 4)) / canvasDrawers.objectSize);
        }
        if (handleMaze.maze[mazeY][mazeX] === 1) {
            clearInterval(this.gameLoop);
            popUPtab.style.display = "block";
            title.innerHTML = "Game Over!";
        }
    }
    writeTime() {
        const endTime = new Date(this.startTime).getTime() + 200 * 1000;
        const now = new Date().getTime();
        if (endTime - now > 0) {
            let timer = document.querySelector("#showTimer");
            timer.innerHTML = "Remaining time: " + ((endTime - now) / 1000).toFixed(1) + "s";
        }
        else {
            clearInterval(this.gameLoop);
            popUPtab.style.display = "block";
            title.innerHTML = "Game Over!";
        }
    }
    render() {
        canvasDrawers.clearBoard();
        this.writeTime();
        this.calculateBallVelocity();
        this.movePlayer();
        this.overlapsKey();
        canvasDrawers.drawPlayer(this.ball.x, this.ball.y);
        if (!this.keyObtained)
            canvasDrawers.drawKey(this.key.x, this.key.y);
        canvasDrawers.drawHole(this.hole.x, this.hole.y, this.keyObtained);
        handleMaze.drawMaze();
        this.checkVictoryCondidtions();
        this.checkGameOverCondidtions();
    }
}
const game = new Game();


/***/ }),

/***/ "./src/ts/maze.ts":
/*!************************!*\
  !*** ./src/ts/maze.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createMaze = void 0;
const drawers_1 = __webpack_require__(/*! ./drawers */ "./src/ts/drawers.ts");
const canvasDrawers = new drawers_1.drawers();
class createMaze {
    constructor() {
        this.maze = new Array(16);
        for (let i = 0; i < 16; i++) {
            this.maze[i] = new Array(10);
        }
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                let randNum = Math.random();
                if (randNum < 0.5) {
                    randNum = Math.floor(randNum);
                }
                else {
                    randNum = Math.ceil(randNum);
                }
                this.maze[i][j] = randNum;
            }
        }
        let path1 = [
            [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
        ];
        let path2 = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
            [0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 1, 1, 1]
        ];
        let path3 = [
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
        ];
        let path4 = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
        this.pathRand = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                switch (this.pathRand) {
                    case 1:
                        if (path1[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                    case 2:
                        if (path2[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                    case 3:
                        if (path3[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                    case 4:
                        if (path4[i][j] == 0) {
                            this.maze[i][j] = 0;
                        }
                        break;
                }
            }
        }
    }
    drawMaze() {
        for (let i = 0; i < this.maze.length; i++) {
            for (let j = 0; j < this.maze[i].length; j++) {
                if (this.maze[i][j] == 1) {
                    canvasDrawers.drawWall(j * canvasDrawers.objectSize, i * canvasDrawers.objectSize);
                }
            }
        }
    }
}
exports.createMaze = createMaze;


/***/ }),

/***/ "./src/ts/units.ts":
/*!*************************!*\
  !*** ./src/ts/units.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTiltDirection = void 0;
function getTiltDirection(xTilt, yTilt) {
    const horizontal = xTilt > 1 ? 1 : xTilt < -1 ? -1 : 0;
    const vertical = yTilt > 1 ? 1 : yTilt < -1 ? -1 : 0;
    return { horizontal, vertical };
}
exports.getTiltDirection = getTiltDirection;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZHJhd2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWF6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdW5pdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7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R0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0ksZ0JBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pKLGVBQVUsR0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZILFNBQUksR0FBVyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQWdEdkMsQ0FBQztJQTlDRyxVQUFVO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxT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QUUsS0FBYSxFQUFFLEtBQWE7UUFFdEcsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkMsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FDcEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdkIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FDckIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdkIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FDckIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdkIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FDcEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdkIsQ0FBQztnQkFDRixNQUFNO1NBRWI7SUFDTCxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLE1BQU0sUUFBUSxHQUFHLHdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksT0FBZSxDQUFDO1FBQ3BCLElBQUksT0FBZSxDQUFDO1FBR3BCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUU7WUFDM0UsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDN0Q7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFO1lBQ2xGLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUU7WUFDdkUsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDM0Q7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJ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QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUd2RyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFO1lBQzNFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1SDthQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUU7WUFDaEYsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RztRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUU7WUFDdkUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFB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Q0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksS0FBSyxHQUFlO1lBQ3BCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxLQUFLLEdBQWU7WUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLEtBQUssR0FBZTtZQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUdELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsS0FBSyxDQUFDO3dCQUNGLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3dCQUNELE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3dCQUNELE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3dCQUNELE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3dCQUNELE1BQU07aUJBQ2I7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDSixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN0QixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3RGO2FBQ0o7U0FDSjtJQUNMLENBQUM7Q0FDSjtBQTlJRCxnQ0E4SUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkQsU0FBZ0IsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDekQsTUFBTSxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsTUFBTSxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBSkQsNENBSUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvbWFpbi50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2hlbHNlYSBNYXJrZXRcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuaW1nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3BVcFRhYiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBoZWlnaHQ6IDExMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBtYXJnaW46IDE4JSBhdXRvIDEwJTtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnlvdXJUaW1lIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgbWFyZ2luOiAyJSBhdXRvO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4ucmVzdGFydEJ0biB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweCAzNXB4IDIwcHggMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjI3O1xcbiAgYm94LXNoYWRvdzogMCA5cHggIzVjNWI1YjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJlc3RhcnRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3Mjc0MjtcXG59XFxuLnJlc3RhcnRCdG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzI3NDI7XFxuICBib3gtc2hhZG93OiAwIDVweCAjNDc0NzQ3O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNjAlO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGNsYXNzIGRyYXdlcnMge1xyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGJvYXJkV2lkdGg6IG51bWJlciA9IHRoaXMuY2FudmFzLndpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgMzUwID8gMjUwIDogd2luZG93LmlubmVyV2lkdGggPCA0NTAgPyAzNTAgOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCA/IDQ1MCA6IDUwMCk7XHJcbiAgICBib2FyZEhlaWdodDogbnVtYmVyID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lcldpZHRoIDwgMzUwID8gNDAwIDogd2luZG93LmlubmVyV2lkdGggPCA0NTAgPyA1NjAgOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCA/IDcyMCA6IDgwMCk7XHJcbiAgICBvYmplY3RTaXplOiBudW1iZXIgPSAod2luZG93LmlubmVyV2lkdGggPCAzNTAgPyAyNSA6IHdpbmRvdy5pbm5lcldpZHRoIDwgNDUwID8gMzUgOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCA/IDQ1IDogNTApO1xyXG4gICAgaGFsZjogbnVtYmVyID0gdGhpcy5vYmplY3RTaXplIC8gMjtcclxuXHJcbiAgICBjbGVhckJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UGxheWVyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHRoaXMuaGFsZiAvIDIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SG9sZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmVhZHk6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgdGhpcy5oYWxmLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcmVhZHkgPyBcImdvbGRcIiA6IFwicmVkXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdXYWxsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHRoaXMub2JqZWN0U2l6ZSwgdGhpcy5vYmplY3RTaXplKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0tleSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpbWFnZSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleVwiKTtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHggLSB0aGlzLmhhbGYsIHkgLSB0aGlzLmhhbGYsIHRoaXMub2JqZWN0U2l6ZSwgdGhpcy5vYmplY3RTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5Nb3ZlWCh4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4geCA+PSB0aGlzLmhhbGYgLyAyICYmIHggPD0gdGhpcy5ib2FyZFdpZHRoIC0gdGhpcy5oYWxmIC8gMjtcclxuICAgIH1cclxuICAgIGNhbk1vdmVZKHk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB5ID49IHRoaXMuaGFsZiAvIDIgJiYgeSA8PSB0aGlzLmJvYXJkSGVpZ2h0IC0gdGhpcy5oYWxmIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBpc092ZXJsYXBwaW5nKG9iajE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgb2JqMjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgTWF0aC5hYnMob2JqMS54IC0gb2JqMi54KSA8IHRoaXMub2JqZWN0U2l6ZSAvIDIgJiZcclxuICAgICAgICAgICAgTWF0aC5hYnMob2JqMS55IC0gb2JqMi55KSA8IHRoaXMub2JqZWN0U2l6ZSAvIDJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlcy5zY3NzJztcclxuXHJcbmltcG9ydCB7IGdldFRpbHREaXJlY3Rpb24gfSBmcm9tICcuL3VuaXRzJztcclxuaW1wb3J0IHsgZHJhd2VycyB9IGZyb20gJy4vZHJhd2Vycyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1hemUgfSBmcm9tICcuL21hemUnO1xyXG5cclxuY29uc3QgY2FudmFzRHJhd2VycyA9IG5ldyBkcmF3ZXJzKCk7XHJcbmxldCBoYW5kbGVNYXplID0gbmV3IGNyZWF0ZU1hemUoKTtcclxuXHJcbmxldCBjdXJyZW50WFRpbHQ6IG51bWJlciA9IDA7XHJcbmxldCBjdXJyZW50WVRpbHQ6IG51bWJlciA9IDA7XHJcblxyXG5sZXQgaGludDogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93SGludFwiKVxyXG5sZXQgcG9wVVB0YWI6IEhUTUxEaXZFbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcFRhYicpXHJcbmxldCB0aXRsZTogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbmxldCBwZXJzb25hbFRpbWU6IEhUTUxEaXZFbGVtZW50ID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55b3VyVGltZScpO1xyXG5jb25zdCByZXN0YXJ0R2FtZTogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnRCdG4nKTtcclxuXHJcbnJlc3RhcnRHYW1lLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBoaW50LmlubmVySFRNTCA9IFwiSGludDogZ2V0IHRoZSBrZXlcIjtcclxuICAgIHBvcFVQdGFiLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGhhbmRsZU1hemUgPSBuZXcgY3JlYXRlTWF6ZSgpO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UsIHRydWUpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UoZTogYW55KSB7XHJcbiAgICBsZXQgeTogbnVtYmVyID0gZS5iZXRhOyAvLyBJbiBkZWdyZWUgaW4gdGhlIHJhbmdlIFstMTgwLDE4MF0gRnJvbnQgQmFja1xyXG4gICAgbGV0IHg6IG51bWJlciA9IGUuZ2FtbWE7IC8vIEluIGRlZ3JlZSBpbiB0aGUgcmFuZ2UgWy05MCw5MF0gTGVmdCBSaWdodFxyXG4gICAgaWYgKHkgPiA5MCkge1xyXG4gICAgICAgIHkgPSA5MDtcclxuICAgIH1cclxuICAgIGlmICh5IDwgLTkwKSB7XHJcbiAgICAgICAgeSA9IC05MDtcclxuICAgIH1cclxuICAgIGlmICh5ICE9PSBudWxsICYmIHggIT09IG51bGwpIHtcclxuICAgICAgICBjdXJyZW50WFRpbHQgPSB4O1xyXG4gICAgICAgIGN1cnJlbnRZVGlsdCA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmFsbCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgdmVsb2NpdHk6IHsgdmVydGljYWw6IG51bWJlciwgaG9yaXpvbnRhbDogbnVtYmVyIH07XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICBzdXBlcihcIkJhbGxcIiwgeCwgeSk7IC8vIENhbGxzIGdhbWUgb2JqZWN0IGNvbnN0cnVjdG9yXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHsgdmVydGljYWw6IDAsIGhvcml6b250YWw6IDAgfTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBzdGFydFRpbWU6IG51bWJlcjtcclxuICAgIGtleU9idGFpbmVkOiBib29sZWFuO1xyXG4gICAgYmFsbDogQmFsbDtcclxuICAgIGtleTogR2FtZU9iamVjdDtcclxuICAgIGhvbGU6IEdhbWVPYmplY3Q7XHJcbiAgICBnYW1lTG9vcDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5rZXlPYnRhaW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoaGFuZGxlTWF6ZS5wYXRoUmFuZCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRHYW1lT2JqUG9zaXRpb24oNSAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgOCAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDkgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDE1ICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRHYW1lT2JqUG9zaXRpb24oNiAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgMiAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAxMSAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgNyAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgMTMgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kR2FtZU9ialBvc2l0aW9uKGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCA2ICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCA3ICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAzICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAxMiAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRHYW1lT2JqUG9zaXRpb24oY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAxNSAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgOCAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgMTAgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDUgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDIgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9IHNldEludGVydmFsKCgpID0+IHRoaXMucmVuZGVyKCksIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZEdhbWVPYmpQb3NpdGlvbihiYWxsWDogbnVtYmVyLCBiYWxsWTogbnVtYmVyLCBrZXlYOiBudW1iZXIsIGtleVk6IG51bWJlciwgaG9sZVg6IG51bWJlciwgaG9sZVk6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFJhbmRvbWx5IGFzc2lnbiBwb3NpdGlvbiBvZiBiYWxsIGtleSBhbmQgaG9sZVxyXG4gICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGJhbGxYLCBiYWxsWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGtleVgsIGtleVlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgaG9sZVgsIGhvbGVZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGJhbGxYLCBiYWxsWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGhvbGVYLCBob2xlWVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9sZSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9sZVwiLCBrZXlYLCBrZXlZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGtleVgsIGtleVkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIktleVwiLCBiYWxsWCwgYmFsbFlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgaG9sZVgsIGhvbGVZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGhvbGVYLCBob2xlWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGJhbGxYLCBiYWxsWVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9sZSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9sZVwiLCBrZXlYLCBrZXlZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGtleVgsIGtleVkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIktleVwiLCBob2xlWCwgaG9sZVlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgYmFsbFgsIGJhbGxZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGhvbGVYLCBob2xlWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGtleVgsIGtleVlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgYmFsbFgsIGJhbGxZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVCYWxsVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBnZXRUaWx0RGlyZWN0aW9uKGN1cnJlbnRYVGlsdCwgY3VycmVudFlUaWx0KTtcclxuICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCArPSB2ZWxvY2l0eS5ob3Jpem9udGFsO1xyXG4gICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS52ZXJ0aWNhbCArPSB2ZWxvY2l0eS52ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUGxheWVyKCkge1xyXG4gICAgICAgIGxldCBmdXR1cmVYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGZ1dHVyZVk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLy8gQ29udHJvbGxzIGJhbGwgdmVsb2NpdHlcclxuICAgICAgICBpZiAodGhpcy5iYWxsLnZlbG9jaXR5Lmhvcml6b250YWwgPiAtMTAgJiYgdGhpcy5iYWxsLnZlbG9jaXR5Lmhvcml6b250YWwgPCAxMCkge1xyXG4gICAgICAgICAgICBmdXR1cmVYID0gdGhpcy5iYWxsLnggKyB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCAvIDQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCA8IC0yMCAmJiB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCA+IDIwKSB7XHJcbiAgICAgICAgICAgIGZ1dHVyZVggPSB0aGlzLmJhbGwueCArIHRoaXMuYmFsbC52ZWxvY2l0eS5ob3Jpem9udGFsIC8gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmdXR1cmVYID0gdGhpcy5iYWxsLnggKyB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCAvIDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID4gLTEwICYmIHRoaXMuYmFsbC52ZWxvY2l0eS52ZXJ0aWNhbCA8IDEwKSB7XHJcbiAgICAgICAgICAgIGZ1dHVyZVkgPSB0aGlzLmJhbGwueSArIHRoaXMuYmFsbC52ZWxvY2l0eS52ZXJ0aWNhbCAvIDQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwgPCAtMTggJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID4gMTgpIHtcclxuICAgICAgICAgICAgZnV0dXJlWSA9IHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsIC8gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmdXR1cmVZID0gdGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwgLyAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FuIG1vdmUgaW5zaWRlIGNhbnZhc1xyXG4gICAgICAgIGlmIChjYW52YXNEcmF3ZXJzLmNhbk1vdmVYKGZ1dHVyZVgpICYmIGNhbnZhc0RyYXdlcnMuY2FuTW92ZVkoZnV0dXJlWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSBmdXR1cmVYO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IGZ1dHVyZVk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYW52YXNEcmF3ZXJzLmNhbk1vdmVYKGZ1dHVyZVgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gZnV0dXJlWDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNhbnZhc0RyYXdlcnMuY2FuTW92ZVkoZnV0dXJlWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnkgPSBmdXR1cmVZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5Lmhvcml6b250YWwgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG92ZXJsYXBzS2V5KCkge1xyXG4gICAgICAgIGlmIChjYW52YXNEcmF3ZXJzLmlzT3ZlcmxhcHBpbmcodGhpcy5iYWxsLCB0aGlzLmtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlPYnRhaW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGhpbnQuaW5uZXJIVE1MID0gXCJIZWFkIHRvd2FyZHMgdGhlIGV4aXRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWaWN0b3J5Q29uZGlkdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgZW5kVGltZTogbnVtYmVyID0gbmV3IERhdGUodGhpcy5zdGFydFRpbWUpLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zdCBub3c6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY2FudmFzRHJhd2Vycy5pc092ZXJsYXBwaW5nKHRoaXMuYmFsbCwgdGhpcy5ob2xlKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmtleU9idGFpbmVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHBvcFVQdGFiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJZb3Ugd29uIVwiO1xyXG4gICAgICAgICAgICBwZXJzb25hbFRpbWUuaW5uZXJIVE1MID0gXCJZb3VyIFRpbWUgd2FzOiBcIiArIE1hdGguYWJzKChlbmRUaW1lIC0gbm93KSAvIDEwMDApLnRvRml4ZWQoMSkgKyBcInNcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYW1lT3ZlckNvbmRpZHRpb25zKCkge1xyXG4gICAgICAgIGxldCBtYXplWDogbnVtYmVyID0gTWF0aC5mbG9vcigodGhpcy5iYWxsLnggKyB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCkgLyBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpO1xyXG4gICAgICAgIGxldCBtYXplWTogbnVtYmVyID0gTWF0aC5mbG9vcigodGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwpIC8gY2FudmFzRHJhd2Vycy5vYmplY3RTaXplKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFsbCBpcyBpbiB3YWxsXHJcbiAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS5ob3Jpem9udGFsID4gLTEwICYmIHRoaXMuYmFsbC52ZWxvY2l0eS5ob3Jpem9udGFsIDwgMTApIHtcclxuICAgICAgICAgICAgbWF6ZVggPSBNYXRoLmZsb29yKCh0aGlzLmJhbGwueCArIChjYW52YXNEcmF3ZXJzLmhhbGYgLyAxMCAqIHRoaXMuYmFsbC52ZWxvY2l0eS5ob3Jpem9udGFsKSkgLyBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCA8IC0yMCAmJiB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCA+IDIwKSB7XHJcbiAgICAgICAgICAgIG1hemVYID0gTWF0aC5mbG9vcigodGhpcy5iYWxsLnggKyAodGhpcy5iYWxsLnZlbG9jaXR5Lmhvcml6b250YWwgLyA0KSkgLyBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS52ZXJ0aWNhbCA+IC0xMCAmJiB0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwgPCAxMCkge1xyXG4gICAgICAgICAgICBtYXplWSA9IE1hdGguZmxvb3IoKHRoaXMuYmFsbC55ICsgKGNhbnZhc0RyYXdlcnMuaGFsZiAvIDEwICogdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsKSkgLyBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwgPCAtMjAgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID4gMjApIHtcclxuICAgICAgICAgICAgbWF6ZVkgPSBNYXRoLmZsb29yKCh0aGlzLmJhbGwueSArICh0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwgLyA0KSkgLyBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhbmRsZU1hemUubWF6ZVttYXplWV1bbWF6ZVhdID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHBvcFVQdGFiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJHYW1lIE92ZXIhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVGltZSgpIHtcclxuICAgICAgICBjb25zdCBlbmRUaW1lOiBudW1iZXIgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0VGltZSkuZ2V0VGltZSgpICsgMjAwICogMTAwMDtcclxuICAgICAgICBjb25zdCBub3c6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAoZW5kVGltZSAtIG5vdyA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3dUaW1lclwiKTtcclxuICAgICAgICAgICAgdGltZXIuaW5uZXJIVE1MID0gXCJSZW1haW5pbmcgdGltZTogXCIgKyAoKGVuZFRpbWUgLSBub3cpIC8gMTAwMCkudG9GaXhlZCgxKSArIFwic1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHBvcFVQdGFiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJHYW1lIE92ZXIhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjYW52YXNEcmF3ZXJzLmNsZWFyQm9hcmQoKTtcclxuICAgICAgICB0aGlzLndyaXRlVGltZSgpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlQmFsbFZlbG9jaXR5KCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGFwc0tleSgpO1xyXG4gICAgICAgIGNhbnZhc0RyYXdlcnMuZHJhd1BsYXllcih0aGlzLmJhbGwueCwgdGhpcy5iYWxsLnkpO1xyXG4gICAgICAgIGlmICghdGhpcy5rZXlPYnRhaW5lZCkgY2FudmFzRHJhd2Vycy5kcmF3S2V5KHRoaXMua2V5LngsIHRoaXMua2V5LnkpO1xyXG4gICAgICAgIGNhbnZhc0RyYXdlcnMuZHJhd0hvbGUodGhpcy5ob2xlLngsIHRoaXMuaG9sZS55LCB0aGlzLmtleU9idGFpbmVkKTtcclxuICAgICAgICBoYW5kbGVNYXplLmRyYXdNYXplKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZpY3RvcnlDb25kaWR0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tHYW1lT3ZlckNvbmRpZHRpb25zKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyIsIlxyXG5pbXBvcnQgeyBkcmF3ZXJzIH0gZnJvbSAnLi9kcmF3ZXJzJztcclxuY29uc3QgY2FudmFzRHJhd2VycyA9IG5ldyBkcmF3ZXJzKCk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGNyZWF0ZU1hemUge1xyXG4gICAgbWF6ZTogbnVtYmVyW11bXTtcclxuICAgIHBhdGhSYW5kOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXplID0gbmV3IEFycmF5KDE2KTtcclxuXHJcbiAgICAgICAgLy8gbG9vcCB0byBjcmVhdGUgMkQgYXJyYXkgdXNpbmcgMUQgYXJyYXkgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF6ZVtpXSA9IG5ldyBBcnJheSgxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsb29wIHRvIHJhbmRvbWx5IGZpbGwgYXJyYXkgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hemUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1hemVbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kTnVtOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmROdW0gPCAwLjUpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kTnVtID0gTWF0aC5mbG9vcihyYW5kTnVtKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZE51bSA9IE1hdGguY2VpbChyYW5kTnVtKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXplW2ldW2pdID0gcmFuZE51bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhdGgxOiBudW1iZXJbXVtdID0gW1xyXG4gICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMF1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGxldCBwYXRoMjogbnVtYmVyW11bXSA9IFtcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDFdXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBsZXQgcGF0aDM6IG51bWJlcltdW10gPSBbXHJcbiAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgbGV0IHBhdGg0OiBudW1iZXJbXVtdID0gW1xyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIC8vIGxvb3AgdG8gcmFuZG9tbHkgYXNzaWduIHBsYXlhYmxlIHBhdGhcclxuICAgICAgICB0aGlzLnBhdGhSYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF6ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF6ZVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBhdGhSYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aDFbaV1bal0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXplW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRoMltpXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hemVbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgzW2ldW2pdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF6ZVtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aDRbaV1bal0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXplW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3TWF6ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF6ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF6ZVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF6ZVtpXVtqXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzRHJhd2Vycy5kcmF3V2FsbChqICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCBpICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRUaWx0RGlyZWN0aW9uKHhUaWx0OiBudW1iZXIsIHlUaWx0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGhvcml6b250YWwgPSB4VGlsdCA+IDEgPyAxIDogeFRpbHQgPCAtMSA/IC0xIDogMDtcclxuICAgIGNvbnN0IHZlcnRpY2FsID0geVRpbHQgPiAxID8gMSA6IHlUaWx0IDwgLTEgPyAtMSA6IDA7XHJcbiAgICByZXR1cm4geyBob3Jpem9udGFsLCB2ZXJ0aWNhbCB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==