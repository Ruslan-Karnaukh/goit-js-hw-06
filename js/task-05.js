const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultText = "Anonymous";
input.addEventListener("input", (event => {
    if(input.value === ''){
        output.textContent = defaultText;
    }  else{
         output.textContent = event.currentTarget.value;
        }
       
}));