const categories = document.querySelectorAll("#categories");
const categoriesCount = categories.forEach(elem => {
    console.log(`Number of categories: ${elem.children.length}`);
});
const items = document.querySelectorAll(".item");
const childrenCount = items.forEach(elem => {
   console.log(`Category: ${elem.firstElementChild.textContent}`);
   console.log(`Elements: ${elem.lastElementChild.childElementCount}`);
});
