
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

    window.location.href = "checkout-payment.html";
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




