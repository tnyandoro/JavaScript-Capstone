import cardList from './components/cardList';
import commentPopup from './components/commentPopup';

class Meal {
  static async getList(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const list = await response.json();
    cardList(list.meals);
  }

  static async getItem(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const mealDetails = await response.json();
    commentPopup(mealDetails.meals[0]);
  }
}

export default Meal;