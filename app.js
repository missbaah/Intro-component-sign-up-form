let submitButton = document.getElementById("submit")



function validateForm(){
    
    let names = document.querySelectorAll("input[type=text]");
    let password = document.querySelectorAll('input[type= password]')
    let email = document.querySelectorAll("input[type=email]")
    let errorMgs ;
    if( names == " " || password == " " ){
        errorMgs = "Fieldname cannot be empty"
        document.querySelectorAll("err-mgs").innerHTML = errorMgs;
    }
    
}



submitButton.addEventListener("click", validateForm);
