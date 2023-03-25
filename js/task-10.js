
const input = document.querySelector("[type='number']");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

//--------------- рандомний колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

//--------------- Слухачі для додавання і видалення елементів
create.addEventListener("click", handleSubmit);
destroy.addEventListener("click", destroyBoxes);


//---------------- Функція яка приймає число, створює <div> зі стилями 
function createBoxes(amount){
  for (let i = 1; i <= amount; i += 1){
    const addBoxes =  document.createElement("div");

    addBoxes.style.width = 30 + 10 * i + "px";
    addBoxes.style.height = 30 + 10 * i + "px";
    addBoxes.style.backgroundColor = getRandomHexColor();
    
    boxes.appendChild(addBoxes);
  }
}

//----------------функція для прийнятя числа
function handleSubmit(event) {
if(input.value){
  let value = input.value
createBoxes(value)
}
}

//--------------- функція для видалення елементів
function destroyBoxes(){
while (boxes.firstChild){
  boxes.removeChild(boxes.firstChild)
  
}
input.value = "";
}