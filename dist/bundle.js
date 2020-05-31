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
        this.boardWidth = this.canvas.width = 500;
        this.boardHeight = this.canvas.height = 800;
        this.objectSize = 50;
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
        let futureX = this.ball.x + this.ball.velocity.horizontal / 4;
        let futureY = this.ball.y + this.ball.velocity.vertical / 4;
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
            let hint = document.querySelector("#showHint");
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
        let mazeX = Math.floor((this.ball.x + (this.ball.velocity.horizontal)) / canvasDrawers.objectSize);
        let mazeY = Math.floor((this.ball.y + (this.ball.velocity.vertical)) / canvasDrawers.objectSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZHJhd2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWF6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvdW5pdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7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LElBQUksQ0FDckIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdkIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FDckIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdEIsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FDdkIsQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUNyQixL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QUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxLQUFLLEdBQWU7WUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLEtBQUssR0FBZTtZQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksS0FBSyxHQUFlO1lBQ3BCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBR0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNuQixLQUFLLENBQUM7d0JBQ0YsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDdkI7d0JBQ0QsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDdkI7d0JBQ0QsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDdkI7d0JBQ0QsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDdkI7d0JBQ0QsTUFBTTtpQkFDYjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdEY7YUFDSjtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBOUlELGdDQThJQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25KRCxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUN6RCxNQUFNLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFKRCw0Q0FJQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9tYWluLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDaGVsc2VhIE1hcmtldFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5nYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcFVwVGFiIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGhlaWdodDogMTEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIG1hcmdpbjogMTglIGF1dG8gMTAlO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4ueW91clRpbWUge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBtYXJnaW46IDIlIGF1dG87XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5yZXN0YXJ0QnRuIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDM1cHggMjBweCAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mjc7XFxuICBib3gtc2hhZG93OiAwIDlweCAjNWM1YjViO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucmVzdGFydEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyNzQyO1xcbn1cXG4ucmVzdGFydEJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3Mjc0MjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4ICM0NzQ3NDc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiA2MCU7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY2xhc3MgZHJhd2VycyB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+dGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgYm9hcmRXaWR0aDogbnVtYmVyID0gdGhpcy5jYW52YXMud2lkdGggPSA1MDA7XHJcbiAgICBib2FyZEhlaWdodDogbnVtYmVyID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwO1xyXG4gICAgb2JqZWN0U2l6ZTogbnVtYmVyID0gNTA7XHJcbiAgICBoYWxmOiBudW1iZXIgPSB0aGlzLm9iamVjdFNpemUgLyAyO1xyXG5cclxuICAgIGNsZWFyQm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQbGF5ZXIoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgdGhpcy5oYWxmIC8gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdIb2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByZWFkeTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCB0aGlzLmhhbGYsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSByZWFkeSA/IFwiZ29sZFwiIDogXCJyZWRcIjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1dhbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5vYmplY3RTaXplLCB0aGlzLm9iamVjdFNpemUpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3S2V5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGltYWdlID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5XCIpO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgeCAtIHRoaXMuaGFsZiwgeSAtIHRoaXMuaGFsZiwgdGhpcy5vYmplY3RTaXplLCB0aGlzLm9iamVjdFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbk1vdmVYKHg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB4ID49IHRoaXMuaGFsZiAvIDIgJiYgeCA8PSB0aGlzLmJvYXJkV2lkdGggLSB0aGlzLmhhbGYgLyAyO1xyXG4gICAgfVxyXG4gICAgY2FuTW92ZVkoeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHkgPj0gdGhpcy5oYWxmIC8gMiAmJiB5IDw9IHRoaXMuYm9hcmRIZWlnaHQgLSB0aGlzLmhhbGYgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3ZlcmxhcHBpbmcob2JqMTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBvYmoyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBNYXRoLmFicyhvYmoxLnggLSBvYmoyLngpIDwgdGhpcy5vYmplY3RTaXplIC8gMiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhvYmoxLnkgLSBvYmoyLnkpIDwgdGhpcy5vYmplY3RTaXplIC8gMlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGVzLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgZ2V0VGlsdERpcmVjdGlvbiB9IGZyb20gJy4vdW5pdHMnO1xyXG5pbXBvcnQgeyBkcmF3ZXJzIH0gZnJvbSAnLi9kcmF3ZXJzJztcclxuaW1wb3J0IHsgY3JlYXRlTWF6ZSB9IGZyb20gJy4vbWF6ZSc7XHJcblxyXG5jb25zdCBjYW52YXNEcmF3ZXJzID0gbmV3IGRyYXdlcnMoKTtcclxubGV0IGhhbmRsZU1hemUgPSBuZXcgY3JlYXRlTWF6ZSgpO1xyXG5cclxuXHJcbmxldCBjdXJyZW50WFRpbHQ6IG51bWJlciA9IDA7XHJcbmxldCBjdXJyZW50WVRpbHQ6IG51bWJlciA9IDA7XHJcblxyXG5sZXQgaGludDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93SGludFwiKVxyXG5sZXQgcG9wVVB0YWI6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcFRhYicpXHJcbmxldCB0aXRsZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbmxldCBwZXJzb25hbFRpbWU6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55b3VyVGltZScpO1xyXG5jb25zdCByZXN0YXJ0R2FtZTogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnRCdG4nKTtcclxuXHJcbnJlc3RhcnRHYW1lLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBoaW50LmlubmVySFRNTCA9IFwiSGludDogZ2V0IHRoZSBrZXlcIjtcclxuICAgIHBvcFVQdGFiLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGhhbmRsZU1hemUgPSBuZXcgY3JlYXRlTWF6ZSgpO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UsIHRydWUpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UoZTogYW55KSB7XHJcbiAgICBsZXQgeTogbnVtYmVyID0gZS5iZXRhOyAvLyBJbiBkZWdyZWUgaW4gdGhlIHJhbmdlIFstMTgwLDE4MF0gRnJvbnQgQmFja1xyXG4gICAgbGV0IHg6IG51bWJlciA9IGUuZ2FtbWE7IC8vIEluIGRlZ3JlZSBpbiB0aGUgcmFuZ2UgWy05MCw5MF0gTGVmdCBSaWdodFxyXG4gICAgaWYgKHkgPiA5MCkge1xyXG4gICAgICAgIHkgPSA5MDtcclxuICAgIH1cclxuICAgIGlmICh5IDwgLTkwKSB7XHJcbiAgICAgICAgeSA9IC05MDtcclxuICAgIH1cclxuICAgIGlmICh5ICE9PSBudWxsICYmIHggIT09IG51bGwpIHtcclxuICAgICAgICBjdXJyZW50WFRpbHQgPSB4O1xyXG4gICAgICAgIGN1cnJlbnRZVGlsdCA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmFsbCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgdmVsb2NpdHk6IHsgdmVydGljYWw6IG51bWJlciwgaG9yaXpvbnRhbDogbnVtYmVyIH07XHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICBzdXBlcihcIkJhbGxcIiwgeCwgeSk7IC8vd3l3b8WCdWplIGtvbnN0cnVrdG9yIGdhbWUgb2JqZWN0XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHsgdmVydGljYWw6IDAsIGhvcml6b250YWw6IDAgfTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBzdGFydFRpbWU6IG51bWJlcjtcclxuICAgIGtleU9idGFpbmVkOiBib29sZWFuO1xyXG4gICAgYmFsbDogQmFsbDtcclxuICAgIGtleTogR2FtZU9iamVjdDtcclxuICAgIGhvbGU6IEdhbWVPYmplY3Q7XHJcbiAgICBnYW1lTG9vcDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5rZXlPYnRhaW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoaGFuZGxlTWF6ZS5wYXRoUmFuZCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRHYW1lT2JqUG9zaXRpb24oNSAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgOCAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDkgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDE1ICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRHYW1lT2JqUG9zaXRpb24oNiAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgMiAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAxMSAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgNyAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgMTMgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kR2FtZU9ialBvc2l0aW9uKGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCA2ICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCA3ICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAzICogY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAxMiAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRHYW1lT2JqUG9zaXRpb24oY2FudmFzRHJhd2Vycy5vYmplY3RTaXplLCAxNSAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgOCAqIGNhbnZhc0RyYXdlcnMub2JqZWN0U2l6ZSwgMTAgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDUgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIDIgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9IHNldEludGVydmFsKCgpID0+IHRoaXMucmVuZGVyKCksIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZEdhbWVPYmpQb3NpdGlvbihiYWxsWDogbnVtYmVyLCBiYWxsWTogbnVtYmVyLCBrZXlYOiBudW1iZXIsIGtleVk6IG51bWJlciwgaG9sZVg6IG51bWJlciwgaG9sZVk6IG51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGJhbGxYLCBiYWxsWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGtleVgsIGtleVlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgaG9sZVgsIGhvbGVZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGJhbGxYLCBiYWxsWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGhvbGVYLCBob2xlWVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9sZSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9sZVwiLCBrZXlYLCBrZXlZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGtleVgsIGtleVkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIktleVwiLCBiYWxsWCwgYmFsbFlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgaG9sZVgsIGhvbGVZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGhvbGVYLCBob2xlWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGJhbGxYLCBiYWxsWVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9sZSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9sZVwiLCBrZXlYLCBrZXlZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGtleVgsIGtleVkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIktleVwiLCBob2xlWCwgaG9sZVlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgYmFsbFgsIGJhbGxZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKGhvbGVYLCBob2xlWSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IG5ldyBHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2V5XCIsIGtleVgsIGtleVlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGUgPSBuZXcgR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbGVcIiwgYmFsbFgsIGJhbGxZXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVCYWxsVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBnZXRUaWx0RGlyZWN0aW9uKGN1cnJlbnRYVGlsdCwgY3VycmVudFlUaWx0KTtcclxuICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCArPSB2ZWxvY2l0eS5ob3Jpem9udGFsO1xyXG4gICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS52ZXJ0aWNhbCArPSB2ZWxvY2l0eS52ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUGxheWVyKCkge1xyXG4gICAgICAgIGxldCBmdXR1cmVYOiBudW1iZXIgPSB0aGlzLmJhbGwueCArIHRoaXMuYmFsbC52ZWxvY2l0eS5ob3Jpem9udGFsIC8gNDtcclxuICAgICAgICBsZXQgZnV0dXJlWTogbnVtYmVyID0gdGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwudmVsb2NpdHkudmVydGljYWwgLyA0O1xyXG4gICAgICAgIC8vY2FuIG1vdmUgaW5zaWRlIGNhbnZhc1xyXG4gICAgICAgIGlmIChjYW52YXNEcmF3ZXJzLmNhbk1vdmVYKGZ1dHVyZVgpICYmIGNhbnZhc0RyYXdlcnMuY2FuTW92ZVkoZnV0dXJlWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnggPSBmdXR1cmVYO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwueSA9IGZ1dHVyZVk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYW52YXNEcmF3ZXJzLmNhbk1vdmVYKGZ1dHVyZVgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC54ID0gZnV0dXJlWDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNhbnZhc0RyYXdlcnMuY2FuTW92ZVkoZnV0dXJlWSkpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnkgPSBmdXR1cmVZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnZlcnRpY2FsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5Lmhvcml6b250YWwgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG92ZXJsYXBzS2V5KCkge1xyXG4gICAgICAgIGlmIChjYW52YXNEcmF3ZXJzLmlzT3ZlcmxhcHBpbmcodGhpcy5iYWxsLCB0aGlzLmtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlPYnRhaW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBoaW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3dIaW50XCIpO1xyXG4gICAgICAgICAgICBoaW50LmlubmVySFRNTCA9IFwiSGVhZCB0b3dhcmRzIHRoZSBleGl0XCI7XHJcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93SGludFwiKS5pbm5lckhUTUwgPSBcIkhlYWQgdG93YXJkcyB0aGUgZXhpdFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1ZpY3RvcnlDb25kaWR0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBlbmRUaW1lOiBudW1iZXIgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0VGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnN0IG5vdzogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjYW52YXNEcmF3ZXJzLmlzT3ZlcmxhcHBpbmcodGhpcy5iYWxsLCB0aGlzLmhvbGUpICYmXHJcbiAgICAgICAgICAgIHRoaXMua2V5T2J0YWluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVMb29wKTtcclxuICAgICAgICAgICAgcG9wVVB0YWIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIllvdSB3b24hXCI7XHJcbiAgICAgICAgICAgIHBlcnNvbmFsVGltZS5pbm5lckhUTUwgPSBcIllvdXIgVGltZSB3YXM6IFwiICsgTWF0aC5hYnMoKGVuZFRpbWUgLSBub3cpIC8gMTAwMCkudG9GaXhlZCgxKSArIFwic1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dhbWVPdmVyQ29uZGlkdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IG1hemVYOiBudW1iZXIgPSBNYXRoLmZsb29yKCh0aGlzLmJhbGwueCArICh0aGlzLmJhbGwudmVsb2NpdHkuaG9yaXpvbnRhbCkpIC8gY2FudmFzRHJhd2Vycy5vYmplY3RTaXplKTtcclxuICAgICAgICBsZXQgbWF6ZVk6IG51bWJlciA9IE1hdGguZmxvb3IoKHRoaXMuYmFsbC55ICsgKHRoaXMuYmFsbC52ZWxvY2l0eS52ZXJ0aWNhbCkpIC8gY2FudmFzRHJhd2Vycy5vYmplY3RTaXplKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd5b3VyIGNvcmRzICcgKyBtYXplWCArICcgLCAnICsgbWF6ZVkpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhtYXplWSlcclxuXHJcbiAgICAgICAgaWYgKGhhbmRsZU1hemUubWF6ZVttYXplWV1bbWF6ZVhdID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcCk7XHJcbiAgICAgICAgICAgIHBvcFVQdGFiLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJHYW1lIE92ZXIhXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVGltZSgpIHtcclxuICAgICAgICBjb25zdCBlbmRUaW1lOiBudW1iZXIgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0VGltZSkuZ2V0VGltZSgpICsgMjAwICogMTAwMDtcclxuICAgICAgICBjb25zdCBub3c6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmIChlbmRUaW1lIC0gbm93ID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgdGltZXI6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvd1RpbWVyXCIpO1xyXG4gICAgICAgICAgICB0aW1lci5pbm5lckhUTUwgPSBcIlJlbWFpbmluZyB0aW1lOiBcIiArICgoZW5kVGltZSAtIG5vdykgLyAxMDAwKS50b0ZpeGVkKDEpICsgXCJzXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVMb29wKTtcclxuICAgICAgICAgICAgcG9wVVB0YWIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkdhbWUgT3ZlciFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNhbnZhc0RyYXdlcnMuY2xlYXJCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMud3JpdGVUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVCYWxsVmVsb2NpdHkoKTtcclxuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXBzS2V5KCk7XHJcbiAgICAgICAgY2FudmFzRHJhd2Vycy5kcmF3UGxheWVyKHRoaXMuYmFsbC54LCB0aGlzLmJhbGwueSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleU9idGFpbmVkKSBjYW52YXNEcmF3ZXJzLmRyYXdLZXkodGhpcy5rZXkueCwgdGhpcy5rZXkueSk7XHJcbiAgICAgICAgY2FudmFzRHJhd2Vycy5kcmF3SG9sZSh0aGlzLmhvbGUueCwgdGhpcy5ob2xlLnksIHRoaXMua2V5T2J0YWluZWQpO1xyXG4gICAgICAgIGhhbmRsZU1hemUuZHJhd01hemUoKTtcclxuICAgICAgICB0aGlzLmNoZWNrVmljdG9yeUNvbmRpZHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0dhbWVPdmVyQ29uZGlkdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7IiwiXHJcbmltcG9ydCB7IGRyYXdlcnMgfSBmcm9tICcuL2RyYXdlcnMnO1xyXG5jb25zdCBjYW52YXNEcmF3ZXJzID0gbmV3IGRyYXdlcnMoKTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgY3JlYXRlTWF6ZSB7XHJcbiAgICBtYXplOiBudW1iZXJbXVtdO1xyXG4gICAgcGF0aFJhbmQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLm1hemUgPSBuZXcgQXJyYXkoMTYpO1xyXG5cclxuICAgICAgICAvLyBsb29wIHRvIGNyZWF0ZSAyRCBhcnJheSB1c2luZyAxRCBhcnJheSBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXplW2ldID0gbmV3IEFycmF5KDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxvb3AgdG8gcmFuZG9tbHkgZmlsbCBhcnJheSBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF6ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF6ZVtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmROdW06IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZE51bSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmROdW0gPSBNYXRoLmZsb29yKHJhbmROdW0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kTnVtID0gTWF0aC5jZWlsKHJhbmROdW0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hemVbaV1bal0gPSByYW5kTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGF0aDE6IG51bWJlcltdW10gPSBbXHJcbiAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwXVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgbGV0IHBhdGgyOiBudW1iZXJbXVtdID0gW1xyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMV1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGxldCBwYXRoMzogbnVtYmVyW11bXSA9IFtcclxuICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBsZXQgcGF0aDQ6IG51bWJlcltdW10gPSBbXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgLy8gbG9vcCB0byByYW5kb21seSBhc3NpZ24gcGxheWFibGUgcGF0aFxyXG4gICAgICAgIHRoaXMucGF0aFJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXplLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXplW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGF0aFJhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRoMVtpXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hemVbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgyW2ldW2pdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF6ZVtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aDNbaV1bal0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXplW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRoNFtpXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hemVbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNYXplKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXplLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXplW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXplW2ldW2pdID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNEcmF3ZXJzLmRyYXdXYWxsKGogKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUsIGkgKiBjYW52YXNEcmF3ZXJzLm9iamVjdFNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRpbHREaXJlY3Rpb24oeFRpbHQ6IG51bWJlciwgeVRpbHQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IHhUaWx0ID4gMSA/IDEgOiB4VGlsdCA8IC0xID8gLTEgOiAwO1xyXG4gICAgY29uc3QgdmVydGljYWwgPSB5VGlsdCA+IDEgPyAxIDogeVRpbHQgPCAtMSA/IC0xIDogMDtcclxuICAgIHJldHVybiB7IGhvcml6b250YWwsIHZlcnRpY2FsIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9