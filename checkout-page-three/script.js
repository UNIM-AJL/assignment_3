// bag drop down functions

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


    const address = localStorage.getItem('address');
    const city = localStorage.getItem('city');
    const postcode = localStorage.getItem('postcode');
    const state = localStorage.getItem('state');
    const country = localStorage.getItem('country');

    document.getElementById('address').textContent = address;
    document.getElementById('city').textContent = city;
    document.getElementById('country').textContent = country;
    document.getElementById('postcode').textContent = postcode;
    document.getElementById('state').textContent = state;