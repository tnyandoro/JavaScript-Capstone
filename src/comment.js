// export default
function commentPage() {
  const comment = document.getElementById('comment');

  const commentDiv = document.createElement('div');
  commentDiv.className = 'comment-div';
  const imageDiv = document.createElement('div');
  imageDiv.className = 'image-div';
  const image = document.createElement('img');
  image.src = '../images/food1.jpg';
  image.className = 'space-image';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  const spaceDiv = document.createElement('div');
  spaceDiv.className = 'space-div';
  const spaceTitle = document.createElement('h2');
  spaceTitle.className = 'space-title';
  spaceTitle.textContent = 'space3';
  const spaceDesc = document.createElement('div');
  spaceDesc.className = 'space-desc';
  const spaceLeft = document.createElement('div');
  const spaceRight = document.createElement('div');
  const category = document.createElement('h2');
  category.textContent = 'Salade';
  const price = document.createElement('h2');
  price.textContent = '$5';
  const weight = document.createElement('h2');
  weight.textContent = '500';
  const ingredient = document.createElement('h2');
  ingredient.textContent = 'Olive oil, meat, eggs';
  const displayCommentDiv = document.createElement('div');
  const commentNumber = document.createElement('h2');
  commentNumber.className = 'comment-Number';
  commentNumber.textContent = 'Comment (1)';
  // here we will create ul with loop to display all comment
  const comment1 = document.createElement('p');
  comment1.textContent = 'comment 1';

  const addComment = document.createElement('form');
  addComment.className = 'add-comment';
  const userNameDiv = document.createElement('div');
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.id = 'name';
  userName.placeholder = 'Your name';
  const addCommentTitle = document.createElement('h2');
  addCommentTitle.className = 'add-comment-title';
  addCommentTitle.textContent = 'Add a comment';
  const commentTextDiv = document.createElement('div');
  const commentText = document.createElement('textarea');
  userName.type = 'text';
  userName.id = 'comment-text';
  userName.placeholder = 'Your insights';
  const submitBtnDiv = document.createElement('div');
  const submitBtn = document.createElement('input');
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

export default commentPage;