const validatorInput = document.querySelector("#validation-input");
const inputAtrib = validatorInput.getAttribute("data-length");
const attributValue = Number(inputAtrib);

validatorInput.addEventListener("blur", () => {   
    if(validatorInput.value.length !== attributValue ){
        validatorInput.classList.add("invalid");
        validatorInput.classList.remove("valid");
        
    }else{

        validatorInput.classList.remove("invalid");
        validatorInput.classList.add("valid");
    }
})

