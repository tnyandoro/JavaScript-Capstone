import cardList from './components/cardList';
import commentPopup from './components/commentPopup';
import commentList from './components/commentList';

class Meal {
  static async getList(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const list = await response.json();
    const likeResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/likes');
    const likes = await likeResponse.json();

    cardList(list.meals, likes, category);
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
    return commentList(comments);
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