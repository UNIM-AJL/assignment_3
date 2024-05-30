let bagHidden = document.querySelector('.bag-hidden');

let bagSection = document.querySelector('.bag-section');

let  expandBag = document.querySelector(' .expand-bag');

let  minimiseBag = document.querySelector('.minimise-bag');

bagHidden.onclick = function(){
    bagSection.classList.add('active');
    expandBag.classList.add('active');
    minimiseBag.classList.add('active');
}



minimiseBag.onclick = function(){
    bagSection.classList.remove('active');
    expandBag.classList.remove('active');
    minimiseBag.classList.remove('active');
}


// https://www.youtube.com/watch?v=x0VcigW9kN0

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

    window.location.href = "../checkout-page-two/index.html";
})



