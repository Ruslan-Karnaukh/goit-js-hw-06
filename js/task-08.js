const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);


function handleSubmit (event ){
    event.preventDefault();
    
    const { 
        elements: {email, password} 
    } = event.currentTarget;
    if(email.value === "" || password.value === ""){
       return alert("Bсі поля повинні бути заповнені")
      } else{ 
      console.dir( {email,password});  
      }
      event.currentTarget.reset()
}