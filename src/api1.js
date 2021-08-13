import cardList from './components/cardList.js';
import navLinks from './components/navLinks.js';
import commentPopup from './components/commentPopup.js';
import commentList from './components/commentList.js';

class Meal {
  static async getList(category) {
    const categoryKey = `category_${category}`;
    let categoryData = localStorage.getItem(categoryKey);

    if (!categoryData) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const list = await response.json();
      categoryData = list.meals;
      localStorage.setItem(categoryKey, JSON.stringify(categoryData));
    } else {
      categoryData = JSON.parse(categoryData);
    }

    const likeResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/likes');
    const likes = await likeResponse.json();
    cardList(categoryData, likes, category);
  }

  static async getCategories() {
    let categories = localStorage.getItem('categories');

    if (!categories) {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const list = await response.json();
      categories = list.meals;
      localStorage.setItem('categories', JSON.stringify(categories));
    } else {
      categories = JSON.parse(categories);
    }

    navLinks(categories);
    return categories;
  }

  static async getItem(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const mealDetails = await response.json();
    commentPopup(mealDetails.meals[0]);
  }

  static async postComment(id, name, comment) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: Number(id),
        username: name,
        comment,
      }),
      headers: { 'content-type': 'application/json' },
    });

    if (response.status === 201) {
      this.getComments(id);
    }
  }

  static async getComments(id) {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/comments?item_id=${id}`);
    const comments = await response.json();
    return commentList(comments.error ? [] : comments);
  }

  static async postLike(id, category) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: Number(id),
      }),
      headers: { 'content-type': 'application/json' },
    });

    if (response.status === 201) {
      this.getList(category);
    }
  }
}

export default Meal;