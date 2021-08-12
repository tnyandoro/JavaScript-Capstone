import './card.css';

const card = (meal) => {
    return `
    <div class="card">
        <img src=${meal.strMealThumb}>
        <div class="desc">
            <h3>${meal.strMeal}</h3>
            <div>5 likes <i class="fa fa-heart"></i></div>
            <button type="button" class="comment-btn" data-itemId=${meal.idMeal}>Comment</button>
        </div>
    </div>
    `;
}

export default card;