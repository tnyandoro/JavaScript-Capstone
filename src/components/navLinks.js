import navLink from './navLink.js';
import Meal from '../api1.js';

let currentCategory = '';

const navLinks = (categories) => {
  const navLinksContainer = document.getElementById('navLinks');

  navLinksContainer.innerHTML = '';

  categories.forEach((category) => {
    navLinksContainer.innerHTML += navLink(category.strCategory);
  });

  const links = navLinksContainer.querySelectorAll('.nav-link');

  links[0].classList.add('active');
  currentCategory = links[0].getAttribute('category');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const linkCategory = e.target.getAttribute('category');

      if (currentCategory === linkCategory) {
        return;
      }

      links.forEach((link) => {
        link.classList.remove('active');
      });

      e.target.classList.add('active');
      Meal.getList(linkCategory);

      currentCategory = linkCategory;
    });
  });
};

export default navLinks;