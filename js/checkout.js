// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nombre = document.querySelector('.name');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorLastname = document.getElementById('errorLastame');

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    let checkFirstName = nombre.value;
    let lastname = document.querySelector(".lastName");
    let checkLastname = lastname.value;
    let email = document.querySelector(".email");
    let checkEmail = email.value;
    let checkPassword = password.value;
    let adress = document.querySelector(".adress");
    let checkAdress = adress.value;
    let checkPhone = phone.value;

    let regexName = /^[a-zA-Z]{3,}$/

    let regexPass = /^[a-zA-Z0-9]{4,8}$/

    let regexPhone = /^[0-9]{3,}$/

    let regexEmail = /[a-zA-Z0-9-_.ñ]+@[a-zA-Z0-9-_.ñ]+\.[a-zA-Z]{3}/


    if (!checkFirstName.match(regexName)) {
        nombre.style.borderColor = "red";
        errorName.style.display = "block";
    }

    if (!checkLastname.match(regexName)) {
        lastname.style.borderColor = "red";
        errorLastname.style.display = "block";
    }

    if (!checkEmail.match(regexEmail)) {
        email.style.borderColor = "red";
    }

    if (!checkPassword.match(regexPass)) {
        password.style.borderColor = "red";
        errorPassword.style.display = "block";
    }

    if (checkAdress == "" || checkAdress.length < 3) {
        adress.style.borderColor = "red";
    }

    if (checkPhone.match(regexPhone)) {
        phone.style.borderColor = "red";
        errorPhone.style.display = "block";
    }

}