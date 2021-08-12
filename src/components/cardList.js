import './cardList.css';
import card from './card';
import Meal from '../api1';

const cardList = (list) => {
  const listContainer = document.getElementById('meal-items');
  list.forEach((meal) => {
    listContainer.innerHTML += card(meal);
  });

  const commentBtns = document.querySelectorAll('.comment-btn');

  commentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      Meal.getItem(btn.dataset.itemid);
    });
  });
};

export default cardList;