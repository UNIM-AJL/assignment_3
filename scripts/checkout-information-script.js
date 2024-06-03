
// Tutorial was used to help create this function
// code was edit and changed to meet the demands and needs of the site 
// source code: https://www.youtube.com/watch?v=x0VcigW9kN0

const form = document.getElementById('customer-information-form');

const country  = document.getElementById('country');

const address  = document.getElementById('address');

const city  = document.getElementById('city');

const state  = document.getElementById('state');

const postcode  = document.getElementById('postcode');



form.addEventListener('submit', function(e){
    e.preventDefault();

    const countryValue = country.value;
    const addressValue = address.value;
    const cityValue = city.value;
    const stateValue = state.value;
    const postcodeValue = postcode.value;

    localStorage.setItem('country', countryValue);
    localStorage.setItem('address', addressValue);
    localStorage.setItem('city', cityValue);
    localStorage.setItem('state', stateValue);
    localStorage.setItem('postcode', postcodeValue);

    // window.location.href = "checkout-payment.html";
})



let ship = document.querySelector('.ship-order');

let pickUp =  document.querySelector('.pickup-order');

let selected = document.querySelector('.radio-button-background')

let selectedTwo = document.querySelector('.radio-button-background2')

let standard = document.querySelector('.standard-shipping')

let express = document.querySelector('.express-shipping')



ship.onclick = function(){
    selected.classList.add('active');
}

pickUp.onclick = function(){
    selected.classList.remove('active');
}


standard.onclick = function(){
    selectedTwo.classList.add('active');
}

express.onclick = function(){
    selectedTwo.classList.remove('active');
}







// Tutorial was used to help create this function
// code was edit and changed to meet the demands and needs of the site 
// https://www.youtube.com/watch?v=CYlNJpltjMM

const errorMessage = document.getElementById('error')
const phoneNumber = document.getElementById('phone-number')
const email = document.getElementById('email')


form.addEventListener('submit', (e)=> {
    const errors =  [];

    var emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(!email.value.match(emailCheck)){
        errors.push("*Email  is incomplete")
    }

    if(postcode.value.length <4){
        errors.push("*Postcode must contain 4 characters")
    }

    if(isNaN(postcode.value)){
        errors.push("*Postcode must be a number")
    }

    if(phoneNumber.value.length != 10){
        errors.push("*Phone number must contain 10 characters")
    }

    if(isNaN(phoneNumber.value)){
        errors.push("*Phone Number must be a number")
    }


    if (errors.length >0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join('|');
    }

    else{
        window.location.href = "checkout-payment.html";
    }




});




