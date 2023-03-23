const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector("#counter button[data-action=decrement]");
const incrementBtn = document.querySelector("#counter button[data-action=increment]");
const value = document.querySelector("#value");


let counterValue = 0;

const decrementClick = event => {
    counterValue -= 1;
    value.textContent = counterValue;
    
    };


const incrementClick = event => {
    counterValue += 1;
    value.textContent = counterValue;
    
    };

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);