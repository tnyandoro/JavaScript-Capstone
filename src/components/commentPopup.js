import './commentPopup.css';

const commentPopup = (meal) => {
    const mainContainer = document.getElementById('home');
    const commentPopup =document.createElement('div');
    commentPopup.className = 'popup';
    commentPopup.innerHTML =`
               <div class="row comment-container">
                    <div class="col-12 image-div text-center"> 
                      <div class="image-container"><img src=${meal.strMealThumb}></div>
                      <button type="button" class="close-btn">X</button>
                    </div>
                    <div class='col-12 text-center'> <h2>${meal.strMeal}</h2></div>
                    <div class="meal-desc row>
                       <div class="row col-12">
                          <div class="col-6">${meal.strTags}</div>
                          <div class="col-6">${meal.strIngredient1}</div>
                       </div>
                       <div  class="row col-12">
                         <div class="col-6">${meal.strMeasure1}</div>
                         <div class="col-6">${meal.dateModified}</div>
                       </div>
                    </div>
                    <div class='col-12 text-center'> <h2> Add a comment </h2></div>
                    <div class="commentForm>
                       <div><input type="text" id="name" name="name" placeholder="Your Name"></div><br>
                       <div> <textarea id="comment-text" name="comment-text" rows="4" cols="50" placeholder="Your insight">Your Insight</textarea></div>
                       <div><input type="submit" value="Submit"></div>
                    </div>
                </div>
    `;
    mainContainer.appendChild(commentPopup)
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        commentPopup.remove();
    })
}

export default commentPopup;