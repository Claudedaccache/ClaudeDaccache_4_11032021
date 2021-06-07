// form variables and validation
var yourName = document.getElementById ("first");
var nameErrorMessage = document.getElementById("nameErrorMessage");
var validName = /^[a-zA-ZîèéïÉÈ][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+([^0-9]*)$([-'\s][a-zA-ZÜüàÀÏÎÉÈîèéï][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+([^0-9]*)$)?/;

var lastName = document.getElementById ("last");
var lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
var validLastName = /^[a-zA-ZîèéïÉÈ][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+([^0-9]*)$([-'\s][a-zA-ZÜüàÀÏÎÉÈîèéï][a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ]+([^0-9]*)$)?/;

var email = document.getElementById ("email");
var emailErrorMessage = document.getElementById("emailErrorMessage");
var validEmail = /^[a-zàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ][a-zA-ZàâçéèêëîïùûüÜÛÙÏÎËÊÈÉÇÂÀ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/

var birthdate = document.getElementById ("birthdate");
var dateErrorMessage = document.getElementById("dateErrorMessage");

var quantity = document.getElementById ("quantity");
var validQuantityErrorMessage = /^[0-9]+([^a-zA-Z]*)$/;
var quantityErrorMessage = document.getElementById("quantityErrorMessage");

var checkboxCondition = document.getElementById("checkbox1");
var conditionErrorMessage = document.getElementById("conditionErrorMessage")

var conditionText = document.getElementsByClassName(".check_condition");
var checkboxRadio = document.getElementById("checkboxModified");
var formValidationMessage = document.getElementById ("formValidationMessage");
var content = document.querySelector(".content");
var btnSubmit = document.querySelector(".btn-submit");

var hamburgerIcon = document.getElementById("hamburgerIcon");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var mainNavbar = document.querySelector(".main-navbar");
var navList = document.querySelector(".navList");
var navListLi = document.querySelectorAll(".navList li");
var topnav = document.querySelector(".topnav");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const myForm = document.getElementById ("myForm");
const close = document.querySelector('.close');


/*function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/

//opening of hamburger menu:
hamburgerIcon.addEventListener("click", () => {
  if (navList.className === "navList") {
    navList.className += " responsive";
  } else {
    navList.className = "navList";
  }
})




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";}


// closing modal form
close.addEventListener ('click', closing);

function closing (){
  modalbg.style.display = "none";
  yourName.value = "";
  yourName.style.border = "2.5px solid transparent";
  nameErrorMessage.innerHTML = "";
  lastName.value = "";
  lastName.style.border = "2.5px solid transparent";
  lastNameErrorMessage.innerHTML = "";
  email.value = "";
  email.style.border = "2.5px solid transparent"
  emailErrorMessage.innerHTML = "";
  quantity.value = "";
  quantity.style.border = "2.5px solid transparent"
  quantity.style.marginBottom = "";
  checkboxRadio.style.display = "block";
  quantityErrorMessage.innerHTML = "";
  birthdate.style.border = "2.5px solid transparent"
  dateErrorMessage.innerHTML = "";
  birthdate.value = "";
  conditionErrorMessage.innerHTML = ""
}


//addEventListener section:
myForm.addEventListener("submit", formValidation)
yourName.addEventListener ("input", nameValidation);
lastName.addEventListener ("input", lastNameValidation);
email.addEventListener ("input", emailValidation);
quantity.addEventListener("input", quantityValidation);
date.addEventListener ("input", dateValidation); 
checkboxCondition.addEventListener ("input", conditionValidation);

//form validation:
function formValidation (e){
  e.preventDefault();
  if (nameValidation() && lastNameValidation() && emailValidation() && dateValidation() && quantityValidation() && conditionValidation() ){    
    modalBody.remove();
    content.style.width= "100%";
    content.style.height= "100%";
    content.style.padding= "8rem 3rem 0 3rem";
    formValidationMessage.style.visibility= "visible";
    return myForm.submit();
    }
}



// form functions:
function nameValidation(e){

  if (yourName.value === "" || yourName.value == null){
    // e.preventDefault();
    nameErrorMessage.innerHTML = "Veuillez renseigner votre Prénom.";
    nameErrorMessage.style.color = "red";
    yourName.style.border = "2.5px solid red";
    return false;
  }

    else if (yourName.value.length <= 2){
      // e.preventDefault();
      nameErrorMessage.innerHTML = "Le prénom renseigné est très court!";
      nameErrorMessage.style.color = "orange";
      yourName.style.border = "2.5px solid red";
      return false;
    }
    
    else if ((validName.test(yourName.value)) === false) {
      // e.preventDefault();
      nameErrorMessage.innerHTML = "Veuillez respecter le format requis!";
      nameErrorMessage.style.color = "orange";
      yourName.style.border = "2.5px solid red";
      return false;
    }
    
    else {
      nameErrorMessage.style.color = "green";
      yourName.style.border = "2.5px solid green";
      nameErrorMessage.innerHTML = "";
      return true;
    }
  }

function lastNameValidation(e){

  if (lastName.value === "" || lastName.value == null){
    // e.preventDefault();
    lastNameErrorMessage.innerHTML = "Veuillez renseigner votre Nom.";
    lastNameErrorMessage.style.color = "red";
    lastName.style.border = "2.5px solid red";
    return false;
  }

    else if (lastName.value.length <= 2){
      // e.preventDefault();
      lastNameErrorMessage.innerHTML = "Le prénom renseigné est très court!";
      lastNameErrorMessage.style.color = "orange";
      lastName.style.border = "2.5px solid red";
      return false;
    }
    
    else if ((validLastName.test(lastName.value)) === false) {
      // e.preventDefault();
      lastNameErrorMessage.innerHTML = "Veuillez respecter le format requis!";
      lastNameErrorMessage.style.color = "orange";
      lastName.style.border = "2.5px solid red";
      return false;
    }
    
    else {
      lastNameErrorMessage.style.color = "green";
      lastName.style.border = "2.5px solid green";
      lastNameErrorMessage.innerHTML = "";
      return true;
    }
    }

function emailValidation(e){

    if (email.value === "" || email.value == null){
      // e.preventDefault();
      emailErrorMessage.innerHTML = "Veuillez renseigner votre e-mail.";
      emailErrorMessage.style.color = "red";
      email.style.border = "2.5px solid red";
      return false;
    }

    else if ((validEmail.test(email.value)) === false) {
        // e.preventDefault();
        emailErrorMessage.innerHTML = "Veuillez respecter le format du e-mail! (exemple@domaine.fr)";
        emailErrorMessage.style.color = "orange";
        email.style.border = "2.5px solid red";
        return false;
      }
    
    else {
      emailErrorMessage.style.color = "green";
      email.style.border = "2.5px solid green"
      emailErrorMessage.innerHTML = "";
      return true;}
}

function quantityValidation(e){

  if (quantity.value === "" || quantity.value == null){
    // e.preventDefault();
    quantityErrorMessage.innerHTML = "Veuillez renseigner le nombre de tournois!";
    quantityErrorMessage.style.color = "red";
    quantity.style.border = "2.5px solid red";
    checkboxRadio.style.display = "block";
    return false;
  }
    
  else if ((validQuantityErrorMessage.test(quantity.value)) === false) {
      // e.preventDefault();
      quantityErrorMessage.innerHTML = "Veuillez respecter le format requis";
      quantityErrorMessage.style.color = "orange";
      quantity.style.border = "2.5px solid red";
      return false;
    }

  else if (quantity.value == 0) {
    quantityErrorMessage.style.color = "green";
    quantity.style.border = "2.5px solid green"
    quantityErrorMessage.innerHTML = "";
    checkboxRadio.style.display = "none";
    quantity.style.marginBottom = "1rem";
    return true;
  }
  else if (quantity.value >= 1) {
    quantityErrorMessage.style.color = "green";
    quantity.style.border = "2.5px solid green"
    quantityErrorMessage.innerHTML = "";
    checkboxRadio.style.display = "block";
    return true;
  }

  else {
    quantityErrorMessage.style.color = "green";
    quantity.style.border = "2.5px solid green"
    quantityErrorMessage.innerHTML = "";
    return true;}
}

function dateValidation(e){

  if (birthdate.value === "" || birthdate.value == null){
    // e.preventDefault();
    dateErrorMessage.innerHTML = "Veuillez renseigner votre date de naissance.";
    dateErrorMessage.style.color = "red";
    birthdate.style.border = "2.5px solid red";
    return false;}

  else {
    dateErrorMessage.style.color = "green";
    birthdate.style.border = "2.5px solid green"
    dateErrorMessage.innerHTML = "";
    return true;}
}

function conditionValidation(e){
  // e.preventDefault();
  if (checkboxCondition.checked == false){
    conditionErrorMessage.innerHTML = "Veuillez cocher la case pertinente.";
    conditionErrorMessage.style.color = "red";
  return false;
    }

  else {
    conditionErrorMessage.innerHTML = "";
    return true;}
}


