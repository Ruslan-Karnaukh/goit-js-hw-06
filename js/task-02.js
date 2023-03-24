const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
addItemLi()
function addItemLi(){

  ingredients.map((ingredient) => {
    const addItems = document.createElement("li");
    addItems.classList.add("item");
    addItems.textContent = ingredient
    list.append(addItems)
  }
  ).join("")

}

