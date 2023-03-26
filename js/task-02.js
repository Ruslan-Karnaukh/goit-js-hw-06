const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");


const newList = (listItem) => {
    const addItems = document.createElement("li");
    addItems.classList.add("item");
    addItems.textContent = listItem;
  return addItems
  }
const listIngridients = ingredients.map(newList);
list.append(...listIngridients);