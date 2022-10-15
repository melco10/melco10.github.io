var fHint = document.querySelector('.fnameError');
var lNHint = document.querySelector('.lnameError');
var emailHint = document.querySelector('.mailError');
var pwdHint = document.querySelector('.passError');
const form_btn = document.querySelector('.form-btn');


const errorIcon = document.querySelectorAll('.errorIcon');
console.log(errorIcon.length)

function warnForm(warninput,i){

        errorIcon[i].style.visibility = "visible";
        warninput.classList.remove('validform');
        warninput.classList.add('warningDefault');    
}

function validForm(validInput, i){
        errorIcon[i].style.visibility = "hidden";       
        validInput.classList.remove('warningDefault');
        validInput.classList.add('validform');      
}



function validateName(){
    let fnameinput = document.getElementById('firstName');
    
    if(fnameinput.value.length == 0){
        fHint.innerHTML = "First Name cannot be empty";
        warnForm(fnameinput, 0);     
        return false;
    }
    else{
        fHint.innerHTML = "";
        validForm(fnameinput, 0);
        return true;
    }
}



function validateLName(){
    let lnameinput = document.getElementById('lastName');

    if(lnameinput.value.length == 0){
        warnForm(lnameinput, 1);
        lNHint.innerHTML = "Last Name cannot be empty";
        return false;
    }
    else{
        lNHint.innerHTML = "";
        validForm(lnameinput, 1);
        return true;
    }
}

function emailValidate(){
    let emailinput = document.getElementById('email');
    let pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9._+-]+\.[a-z]{2,}";

    if(emailinput.value.length == 0 || !email.value.match(pattern)){
        emailHint.innerHTML = 'Looks like this is not an email';
        warnForm(emailinput, 2);
        return false;
    }
    else{
        emailHint.innerHTML = ''
        validForm(emailinput,2);
        return true;
    }
}

function pwdValidate(){
    let passInput = document.getElementById('pwd');
    if(passInput.value.length == 0){
        warnForm(passInput, 3);
        pwdHint.innerHTML = "Last Name cannot be empty";
        return false;
    }
    else{
        pwdHint.innerHTML = "";
        validForm(passInput, 3);
        return true;
    }

}

function formSubmit(){
    if(!validateName && !validateLName && !emailValidate && !pwdValidate){
        return form_btn.disabled = true;
    }
    else{

        console.log(document.getElementById('firstName').value);
        console.log(document.getElementById('lastName').value);
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('pwd').value);



        return   form_btn.disabled = false; 
    }
    
}

