/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mainpage() {
  var foodList = document.getElementById('grid-container');
  foodList.classList = 'food-list';
  var foodItem = document.createElement('div');
  foodItem.classList = 'column';
  var card = document.createElement('div');
  card.classList = 'card';
  var foodImage = document.createElement('img');
  foodImage.classList = 'food-image';
  foodImage.src = '../images/food1.jpg';
  foodImage.alt = 'food-item';
  var cardBody = document.createElement('div');
  cardBody.classList = 'card-body';
  var cardHeader = document.createElement('div');
  cardHeader.classList = 'card-header';
  var foodName = document.createElement('h4');
  foodName.classList = '';
  var likeBtn = document.createElement('div');
  likeBtn.classList = 'like-btn';
  var iconBtn = document.createElement('button');
  var iconHeart = document.createElement('i');
  iconHeart.classList = 'far fa-heart';
  iconBtn.classList = 'like-food';
  var likes = document.createElement('p');
  likes.classList = 'likes';
  likes.textContent = 'likes';
  var cardBtns = document.createElement('div');
  cardBtns.classList = 'card-buttons';
  var commentsBtn = document.createElement('button');
  commentsBtn.classList = 'btn-primary';
  commentsBtn.textContent = 'Comments';
  document.body.append(foodList);
  foodList.appendChild(card);
  foodList.appendChild(foodImage);
  foodList.appendChild(cardBody);
  foodList.appendChild(cardHeader);
  foodList.appendChild(foodName);
  foodList.appendChild(likeBtn);
  foodList.appendChild(iconBtn);
  iconBtn.appendChild(iconHeart);
  foodList.appendChild(likes);
  foodList.appendChild(cardBtns);
  foodList.appendChild(commentsBtn); // };

  return foodItem; // const renderFoods = () => {
  //   // clear items HTML
  //   foodList.innerHTML = '';
  //   foodList.insertAdjacentHTML(
  //     'beforeend',
  //     `<div class="column">
  //           <div class="card">
  //             <img src="../images/food1.jpg" alt="" class="food-image" />
  //             <div class="card-body">
  //               <div class="card-header">
  //                 <h4>Potato Salad</h4>
  //                 <div class="like-button">
  //                   <button data-id="like-meal" class ="like-food">
  //                     <i class="far fa-heart"></i>
  //                   </button>
  //                   <p class="likes"><span data-id="likes">0</span> Likes</p>
  //                 </div>
  //               </div>
  //               <div class="card-buttons">
  //                 <button data-id="comments" class="btn-primary">Comments</button><br><br>
  //                 <button data-id="reservations" class="btn-primary">Reservations</button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>`,
  //   );
  // };
  // renderFoods();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainpage);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.js */ "./src/mainpage.js");
 // import commentPage from './comment.js';

(0,_mainpage_js__WEBPACK_IMPORTED_MODULE_0__.default)();
commentPage();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map