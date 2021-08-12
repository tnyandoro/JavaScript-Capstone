import './cardList.css';
import card from './card';
import Meal from '../api1';

const cardList = (list, likes, category) => {
  const listContainer = document.getElementById('meal-items');
  console.log(likes);
  listContainer.innerHTML = '';
  list.forEach((meal) => {
    listContainer.innerHTML += card(meal, likes.find((item) => item.item_id === Number(meal.idMeal)), category);
  });

  const commentBtns = document.querySelectorAll('.comment-btn');

  commentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      Meal.getItem(btn.dataset.itemid);
    });
  });

  const likeBtns = document.querySelectorAll('.like-btn');

  likeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      Meal.postLike(btn.dataset.itemid, btn.dataset.cat);
    });
  });
};

export default cardList;