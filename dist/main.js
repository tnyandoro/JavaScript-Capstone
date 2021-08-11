/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// export default
function commentPage() {
  var comment = document.getElementById('comment');
  var commentDiv = document.createElement('div');
  commentDiv.className = 'comment-div';
  var imageDiv = document.createElement('div');
  imageDiv.className = 'image-div';
  var image = document.createElement('img');
  image.src = '../images/food1.jpg';
  image.className = 'space-image';
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  var spaceDiv = document.createElement('div');
  spaceDiv.className = 'space-div';
  var spaceTitle = document.createElement('h2');
  spaceTitle.className = 'space-title';
  spaceTitle.textContent = 'space3';
  var spaceDesc = document.createElement('div');
  spaceDesc.className = 'space-desc';
  var spaceLeft = document.createElement('div');
  var spaceRight = document.createElement('div');
  var category = document.createElement('h2');
  category.textContent = 'Salade';
  var price = document.createElement('h2');
  price.textContent = '$5';
  var weight = document.createElement('h2');
  weight.textContent = '500';
  var ingredient = document.createElement('h2');
  ingredient.textContent = 'Olive oil, meat, eggs';
  var displayCommentDiv = document.createElement('div');
  var commentNumber = document.createElement('h2');
  commentNumber.className = 'comment-Number';
  commentNumber.textContent = 'Comment (1)'; // here we will create ul with loop to display all comment

  var comment1 = document.createElement('p');
  comment1.textContent = 'comment 1';
  var addComment = document.createElement('form');
  addComment.className = 'add-comment';
  var userNameDiv = document.createElement('div');
  var userName = document.createElement('input');
  userName.type = 'text';
  userName.id = 'name';
  userName.placeholder = 'Your name';
  var addCommentTitle = document.createElement('h2');
  addCommentTitle.className = 'add-comment-title';
  addCommentTitle.textContent = 'Add a comment';
  var commentTextDiv = document.createElement('div');
  var commentText = document.createElement('textarea');
  userName.type = 'text';
  userName.id = 'comment-text';
  userName.placeholder = 'Your insights';
  var submitBtnDiv = document.createElement('div');
  var submitBtn = document.createElement('input');
  submitBtn.type = 'button';
  submitBtn.id = 'addCommentbtn';
  submitBtn.value = 'Submit';
  commentDiv.appendChild(imageDiv);
  imageDiv.appendChild(image);
  imageDiv.appendChild(deleteBtn);
  commentDiv.appendChild(spaceDiv);
  spaceDiv.appendChild(spaceTitle);
  spaceDiv.appendChild(spaceDesc);
  spaceDesc.appendChild(spaceLeft);
  spaceDesc.appendChild(spaceRight);
  spaceLeft.appendChild(category);
  spaceLeft.appendChild(price);
  spaceRight.appendChild(weight);
  spaceRight.appendChild(ingredient);
  commentDiv.appendChild(displayCommentDiv);
  displayCommentDiv.appendChild(commentNumber);
  displayCommentDiv.appendChild(comment1);
  commentDiv.appendChild(addComment);
  addComment.appendChild(addCommentTitle);
  addComment.appendChild(userNameDiv);
  userNameDiv.appendChild(userName);
  addComment.appendChild(commentTextDiv);
  commentTextDiv.appendChild(commentText);
  addComment.appendChild(submitBtnDiv);
  addComment.appendChild(submitBtn);
  comment.appendChild(commentDiv);
  return commentDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPage);

/***/ }),

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
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ "./src/comment.js");


(0,_mainpage_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_comment_js__WEBPACK_IMPORTED_MODULE_1__.default)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map