import './cardList.css';
import card from './card.js';
// eslint-disable-next-line import/no-cycle
import Meal from '../api1.js';

const cardList = (list, likes, category) => {
  const navLinksContainer = document.getElementById('navLinks');
  const activeLinkSpan = navLinksContainer.querySelectorAll('.nav-link.active > span')[0];
  if (activeLinkSpan) activeLinkSpan.innerHTML = `(${list.length})`;

  const listContainer = document.getElementById('meal-items');

  listContainer.innerHTML = '';
  list.forEach((meal) => {
    listContainer.innerHTML
    += card(meal, likes.find((item) => item.item_id === Number(meal.idMeal)), category);
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