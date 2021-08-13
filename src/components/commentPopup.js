/* eslint-disable import/no-cycle */
import './commentPopup.css';
import Meal from '../api1.js';

const commentPopup = (meal) => {
  const mainContainer = document.getElementById('home');
  const commentPopup = document.createElement('div');
  commentPopup.className = 'popup';
  commentPopup.innerHTML = `
                <button type="button" class="close-btn">X</button>
                <div class="row comment-container">
                      <div class="col-12 image-div text-center"> 
                        <div class="image-container"><img src=${meal.strMealThumb} class="img-fluid"></div>
                      </div>
                      <div class='col-12 text-center'> <h2>${meal.strMeal}</h2></div>
                      <div class='col-12'><b>Meal Type:</b> ${meal.strTags}</div>
                      <div class='col-12'><b>Instructions:</b> ${meal.strYoutube}</div>
                      <div class='col-12'><b> Ingredients:</b> ${meal.strIngredient1}</div>
                      <h3>Comments (<span id="commentCount"></span>)</h3>
                      <div class='comment-list'></div>
                      <div class='col-12 text-center'> <h2> Add a comment </h2></div>
                      <div class="commentForm form-group">
                        <div><input type="text" id="name" name="name" class="form-control" placeholder="Your Name"></div><br>
                        <div> <textarea id="comment-text" name="comment-text" class="form-control" rows="4" cols="50" placeholder="Your insight">Your Insight</textarea></div><br>
                        <div><button type="button" class='sub-btn btn btn-success' data-itemid=${meal.idMeal}>Submit</button></div>
                      </div>
                  </div>
    `;
  mainContainer.appendChild(commentPopup);
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    commentPopup.remove();
  });
  const subBtn = document.querySelector('.sub-btn');
  subBtn.addEventListener('click', () => {
    Meal.postComment(subBtn.dataset.itemid, document.querySelector('#name').value, document.querySelector('#comment-text').value);
  });
  Meal.getComments(meal.idMeal);
};

export default commentPopup;
