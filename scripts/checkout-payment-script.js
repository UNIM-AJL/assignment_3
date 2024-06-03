// credit card details drop down 

let creditCard = document.querySelector('.credit-card')

let creditCardForm = document.querySelector('.credit-card-details-form')

let alternativePaymentMethod = document.querySelector('.altnerative-payment-method')

let backgroundPaymentMethod = document.querySelector('.payment-method-background')


creditCard.onclick = function(){
    creditCardForm.classList.add('active');
    backgroundPaymentMethod.classList.add('active')
}

alternativePaymentMethod.onclick = function(){
    creditCardForm.classList.remove('active')
    backgroundPaymentMethod.classList.remove('active')
}





// Tutorial was used to help create this function
// code was edit and changed to meet the demands and needs of the site 
// https://www.youtube.com/watch?v=CYlNJpltjMM

const form = document.getElementById('form');
const cardNumber = document.getElementById('card-number');
const errorMessage = document.getElementById('error');
const securityCode = document.getElementById('security-code');
const nameOnCard = document.getElementById('name-on-card');
const expirationDate = document.getElementById('expiration-date');







form.addEventListener('submit', (e)=> {
    const errors =  [];

    // regular expression from https://regex101.com/library/AFarfB
    var expirationDateCheck = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;


    // regular expression from https://regexr.com/3f8cm
    var nameCheck = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;


    if(isNaN(cardNumber.value)){
        errors.push("*Card number must be a number")
    }


    if(cardNumber.value.length != 12){
        errors.push("*card number must contain 12 digits")
    }

    
    if(isNaN(securityCode.value)){
        errors.push("*Security code must be a number")
    }

    if(securityCode.value.length != 3){
        errors.push("*Security code must contain 3 digits")
    }

    if(!expirationDate.value.match(expirationDateCheck)){
        errors.push("*Expiration date must have a / to seperate month and year")
    }

    if(expirationDate.value.length != 5){
        errors.push("*Expiration date must contain 5 characters long")
    }

    if(!isNaN(nameOnCard.value)){
        errors.push("*Name on card must not be numbers")
    }

    if(!nameOnCard.value.match(nameCheck)){
        errors.push("*Invalid Name on card")
    }


    if (errors.length >0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join('|');
    }

    else{
        window.location.href = "checkout-confirmation.html";
    }




});




