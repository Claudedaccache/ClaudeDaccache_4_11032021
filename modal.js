// form variables and validation
var yourName = document.getElementById ("first");
var lastName = document.getElementById ("last");
var email = document.getElementById ("email");
var birthdate = document.getElementById ("birthdate");
var quantity = document.getElementById ("quantity");
var conditionValidation = document.getElementById("checkbox1")
var checkboxRadio = document.querySelector (".checkbox-input")
var nameErrorMessage = document.getElementById("nameErrorMessage");
var validName = /^[a-zA-ZîèéïÉÈ][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+([-'\s][a-zA-ZÜüàÀÏÎÉÈîèéï][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+)?/;
var lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
var validLastName = /^[a-zA-ZîèéïÉÈ][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+([-'\s][a-zA-ZÜüàÀÏÎÉÈîèéï][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+)?/;
var emailErrorMessage = document.getElementById("emailErrorMessage");
var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/
var dateErrorMessage = document.getElementById("dateErrorMessage");
var quantityErrorMessage = document.getElementById("quantityErrorMessage");
var conditionErrorMessage = document.getElementById("conditionErrorMessage")
var validQuantityErrorMessage = /^[0-9]+/;
var btnSubmit = document.querySelector(".btn-submit");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector('.close');


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// var form = document.querySelector('form');

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// })

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  conditionValidation.checked = false;
  
}

// closing modal form
close.addEventListener ('click', closing);

function closing (){
  modalbg.style.display = "none";
  yourName.value = "";
  lastName.value = "";
  email.value = "";
  quantity.value = "";
  
}



// btnSubmit.addEventListener("click", formValidation);
yourName.addEventListener ("input", nameValidation);
lastName.addEventListener ("input", lastNameValidation);
email.addEventListener ("input", emailValidation);
quantity.addEventListener("input", quantityValidation);
conditionValidation.addEventListener("checked", conditionValide)
// date.addEventListener ("input", dateValidation);



function nameValidation(e){

  if (yourName.value === "" || yourName.value == null){
    e.preventDefault();
    nameErrorMessage.innerHTML = "Veuillez rentrer votre prenom";
    nameErrorMessage.style.color = "red";
    yourName.style.border = "2.5px solid red";}

    else if (yourName.value.length <= 2){
      e.preventDefault();
      nameErrorMessage.innerHTML = "Prenom tres court";
      nameErrorMessage.style.color = "orange";
      yourName.style.border = "2.5px solid red";}
    
    else if ((validName.test(yourName.value)) === false) {
      e.preventDefault();
      nameErrorMessage.innerHTML = "Prenon invalide";
      nameErrorMessage.style.color = "orange";
      yourName.style.border = "2.5px solid red";}
    
    else {
      nameErrorMessage.style.color = "green";
      yourName.style.border = "2.5px solid green";
      nameErrorMessage.innerHTML = "";
    }
  }

function lastNameValidation(e){

  if (lastName.value === "" || lastName.value == null){
    e.preventDefault();
    lastNameErrorMessage.innerHTML = "Veuillez rentrer votre nom";
    lastNameErrorMessage.style.color = "red";
    yourName.style.border = "2.5px solid red";}

    else if (lastName.value.length <= 2){
      e.preventDefault();
      lastNameErrorMessage.innerHTML = "Nom tres court";
      lastNameErrorMessage.style.color = "orange";
      lastName.style.border = "2.5px solid red";}
    
    else if ((validLastName.test(lastName.value)) === false) {
      e.preventDefault();
      lastNameErrorMessage.innerHTML = "Nom invalide";
      lastNameErrorMessage.style.color = "orange";
      lastName.style.border = "2.5px solid red";}
    
    else {
      lastNameErrorMessage.style.color = "green";
      lastName.style.border = "2.5px solid green";
      lastNameErrorMessage.innerHTML = "";
    }
    }

function emailValidation(e){

    if (email.value === "" || email.value == null){
      e.preventDefault();
      emailErrorMessage.innerHTML = "Veuillez rentrer votre email";
      emailErrorMessage.style.color = "red";
      email.style.border = "2.5px solid red";}

    else if ((validEmail.test(email.value)) === false) {
        e.preventDefault();
        emailErrorMessage.innerHTML = "email invalide";
        emailErrorMessage.style.color = "orange";
        email.style.border = "2.5px solid red";}
    
    else {
      emailErrorMessage.style.color = "green";
      email.style.border = "2.5px solid green"
      emailErrorMessage.innerHTML = "";}
}

function quantityValidation(e){

  if (quantity.value === "" || quantity.value == null){
    e.preventDefault();
    quantityErrorMessage.innerHTML = "Veuillez rentrer un nombre";
    quantityErrorMessage.style.color = "red";
    quantity.style.border = "2.5px solid red";}
    
  else if ((validQuantityErrorMessage.test(quantity.value)) === false) {
      e.preventDefault();
      quantityErrorMessage.innerHTML = "nombre invalide";
      quantityErrorMessage.style.color = "orange";
      quantity.style.border = "2.5px solid red";}

  else if (quantity.value === 0) {
    quantityErrorMessage.style.color = "green";
    quantity.style.border = "2.5px solid green"
    quantityErrorMessage.innerHTML = "";
    checkboxRadio.style.background = "transparent";
  }

  else {
    quantityErrorMessage.style.color = "green";
    quantity.style.border = "2.5px solid green"
    quantityErrorMessage.innerHTML = "";}
}

function conditionValide(e){

  if ((conditionValidation.disabled) = true){
    e.preventDefault();
    conditionErrorMessage.innerHTML = "valider pour continuer";
  }
  else{ }
}



// function dateValidation(e){
//   if (birthdate.value === "" || birthdate.value == null){
//     e.preventDefault();
//     dateErrorMessage.innerHTML = "Veuillez rentrer un nombre";
//     dateErrorMessage.style.color = "red";
//     birthdate.style.border = "2.5px solid red";}
    
//   else if (((birthdate.value <= validatedDate)) === false) {
//       e.preventDefault();
//       dateErrorMessage.innerHTML = "nombre invalide";
//       dateErrorMessage.style.color = "orange";
//       birthdate.style.border = "2.5px solid red";}

//   else {
//     dateErrorMessage.style.color = "green";
//     birthdate.style.border = "2.5px solid green"
//     dateErrorMessage.innerHTML = "";}
  
// }











    






