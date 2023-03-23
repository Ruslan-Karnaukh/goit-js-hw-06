const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);


function handleSubmit (event ){
    event.preventDefault();
    
    const { 
        elements: {email, password} 
    } = event.currentTarget;
    if(email.value === "" || password.value === ""){
        alert("Bсі поля повинні бути заповнені")
      } else{ console.log(`Login: ${email.value}, Password: ${password.value}`);
      alert("Welcome");
    }
      event.currentTarget.reset()
}