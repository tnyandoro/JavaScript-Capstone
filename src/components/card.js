import './card.css';

const card = (meal, likeItem, category) => `
    <div class="card">
        <img src=${meal.strMealThumb}>
        <div class="desc">
            <h3>${meal.strMeal}</h3>
            <div class="feedback"><span class="likes">${likeItem === undefined ? 0 : likeItem.likes}</span> likes <button type="button" class="like-btn" data-itemid=${meal.idMeal} data-cat=${category}><i class="fa fa-heart"></i></button></div>
            <button type="button" class="comment-btn" data-itemId=${meal.idMeal}>Comment</button>
        </div>
    </div>
    `;

export default card;