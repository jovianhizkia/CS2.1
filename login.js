// alert("Test")

let form=document.getElementById("loginform");
let email=document.getElementById("email");
let password=document.getElementById("password");
let errorMessages=document.getElementById("errorMessages");

let error=[];

form.addEventListener("submit", (e)=>{
    error=[];
    errorMessages.innerText='';

    validateEmail();
    validatePassword();

    if (error.length>0){
        for (err of error){
            errorMessages.innerText+=err+'\n';
        }

        e.preventDefault();
    }

    else{
        alert("Login Successful");
    }
})

function isEmpty(value){
    if (value===''){
        return true;
    }

    return false;
}

function validateEmail(){
    let value=email.value.trim();

    if (isEmpty(value)){
        error.push("Email field cannot be empty!");
    }

    let i=0;
    let count=0;

    while (i<value.length){
        if (value[a]=='@'){
            count++;
        }

        a++;
    }

    if (count!=1){
        error.push("Wrong email format!");
    }
}

function validatePassword(){
    let value=password.value.trim();

    if (value===''){
        error.push("Password field cannot be empty!");
    }

    if (value.length<5||value.length>15){
        error.push("Password must be in range of 5 - 15");
    }
}