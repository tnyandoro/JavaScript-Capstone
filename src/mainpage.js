import Meal from './api1';

async function mainpage() {
  const categories = await Meal.getCategories();
  await Meal.getList(categories[0].strCategory);
}

export default mainpage;
