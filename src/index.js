const createElements = () => {
  const row = document.getElementById('grid-container');
  // row.classList = 'grid-container';

  const column = document.createElement('div');
  column.classList = 'column';
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

  const btn = document.createElement('button');
  btn.classList = 'like-food';

  const iconHeart = document.createElement('i');
  iconHeart.classList = 'icon-heart';

  const likes = document.createElement('p');
  likes.classList = 'likes';

  const cardBtns = document.createElement('div');
  cardBtns.classList = 'card-buttons';

  const commentsBtn = document.createElement('button');
  commentsBtn.classList = 'btn-primary';

  const reservationsBtn = document.createElement('button');
  reservationsBtn.classList = 'btn-primary';

  row.appendChild(column);
  row.appendChild(card);
  row.appendChild(foodImage);
  row.appendChild(cardBody);
  row.appendChild(cardHeader);
  row.appendChild(foodName);
  row.appendChild(likeBtn);
  row.appendChild(btn);
  row.appendChild(iconHeart);
  row.appendChild(likes);
  row.appendChild(cardBtns);
  row.appendChild(commentsBtn);
  row.appendChild(reservationsBtn);
};