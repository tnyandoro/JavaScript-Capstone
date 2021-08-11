export default function mainpage() {
    const foodList = document.getElementById('grid-container');
    foodList.classList = 'food-list';
    
    const foodItem = document.createElement('div');
    foodItem.classList = 'column';
    const card = document.createElement('div');
    card.classList = 'card';
    
    const foodImage = document.createElement('img');
    foodImage.classList = 'food-image';
    foodImage.src = '../images/food1.jpg';
    foodImage.alt = 'food-item';
    
    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    
    const cardHeader = document.createElement('div');
    cardHeader.classList = 'card-header';
    
    const foodName = document.createElement('h4');
    foodName.classList = '';
    
    const likeBtn = document.createElement('div');
    likeBtn.classList = 'like-btn';
    
    const iconBtn = document.createElement('button');
    const iconHeart = document.createElement('i');
    iconHeart.classList = 'far fa-heart';
    iconBtn.classList = 'like-food';
    
    const likes = document.createElement('p');
    likes.classList = 'likes';
    likes.textContent = 'likes';
    
    const cardBtns = document.createElement('div');
    cardBtns.classList = 'card-buttons';
    
    const commentsBtn = document.createElement('button');
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
    foodList.appendChild(commentsBtn);
    // };

    return foodItem;
    
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

}
   
