const displayUI = () => {
  const ui = document.createelement('div');
  ui.classList.add('text');
  ui.innerHTML = `
    <div class ="cover"></div>
        <div class ="ui">
          <div id="ui-content></div>
          <button data-id="close" class ="ui-close-btn">
            <i class="fas fa-window-close" size:"3x">close</i>
          </button>
    </div>
  `;

  const main = document.querySelector('#main');
  main.classList.add('frost');

  ui.querySelector('[data-id=close]').addEventListener('click', () => {
    document.body.removeChild(ui);
    main.classList.remove('frost');
    document.body.classList.remove('scrolling');
  });

  document.body.classList.add('scrolling');
  document.body.appendChild(ui);
};

const card = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
  <img src = ${src} alt ="" class="food-image" />
  <div class="card-body">
      <div class="card-header">
        <h5>${name}</h5>
        <div class="like-btn">
          <button data-id="like-food">
            <i class="fas fa-thumbs-up" size: "3x">Likes</i>
          </button>
          <p><span data-id="likes">${likes}</span> Likes</p>
      </div>
    </div>
    <div class="card-buttons">
        <button data-id="comments" class="btn btn-primary">Comments</button>
        <button data-id="comments" class="btn btn-primary">Reservation</button>
    </div>
  </div>
`;
