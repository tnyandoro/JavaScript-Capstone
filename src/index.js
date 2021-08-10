const row = document.createElement('div');
row.classList = 'grid-container';

const column = document.createElement('div');
column.classList = 'column';
const card = document.createElement('div');
card.classList='card';

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

const iconHeart = document.createElement('icon');
iconHeart.classList = 'icon-heart';

const likes = document.createElement('p');
likes.classList = 'likes'
