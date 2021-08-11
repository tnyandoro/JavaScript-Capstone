/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// window.addEventListener('load', () =>  {
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
// const renderFoods = () => {
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
/******/ })()
;
//# sourceMappingURL=main.js.map