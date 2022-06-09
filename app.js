const form  = document.getElementsByTagName('form')[0];

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password")
const error1 = document.querySelector('#firstname + span.err-mgs')
const error2 = document.querySelector("#lastname + span.err-mgs")
const error3 = document.querySelector("#email + span.err-mgs")
const error4 = document.querySelector("#password + span.err-mgs")




firstName.addEventListener( "input", function(){
    if(firstName.validity.valid){
        error1.textcontent = ""
        error1.className = "err-mgs"
    } else{
        showError();
    }
})

lastName.addEventListener( "input", function(){
    if(lastName.validity.valid){
        error2.textcontent = ""
        error2.className = "err-mgs"
    } else{
        showError();
    }
})

email.addEventListener( "input", function(){
    if(email.validity.valid){
        error3.textcontent = ""
        error3.className = "err-mgs"
    } else{
        showError();
    }
})

password.addEventListener( "input", function(){
    if(password.validity.valid){
        error4.textcontent = ""
        error4.className = "err-mgs"
    } else{
        showError();
    }
})

form.addEventListener('submit', function (event) {
  
    if(!firstName.validity.valid) {
      showError();
      event.preventDefault();
    }
    if(!lastName.validity.valid) {
      showError();
      event.preventDefault();
    }
    if(!email.validity.valid) {
      showError();
      event.preventDefault();
    }
    if(!password.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {

    if(firstName.validity.valueMissing) {
      error1.textContent = 'First Name cannot be empty'
    } 
    
  
    if(email.validity.valueMissing) {
      error2.textContent = 'Last Name cannot be empty'
    } 
    

    if(email.validity.valueMissing) {
      error3.textContent = 'Looks like this is not an email';
    } else (email.validity.typeMismatch) 
    {
      email.textContent = 'name@host.tld';
    };
   

    if(password.validity.valueMissing) {
      error4.textContent = 'Password cannot be empty';
    }
    
   
}