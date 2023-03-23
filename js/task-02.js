const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const addItems = document.createElement("li");
  const addClass = addItems.classList.add("item");
  const textContent = document.createTextNode(ingredient);
  addItems.appendChild(textContent);
  list.appendChild(addItems);
}
