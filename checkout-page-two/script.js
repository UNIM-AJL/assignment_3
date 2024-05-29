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



// credit card details drop down 

let creditCard = document.querySelector('.credit-card')

let creditCardForm = document.querySelector('.credit-card-details-form')

let alternativePaymentMethod = document.querySelector('.altnerative-payment-method')


creditCard.onclick = function(){
    creditCardForm.classList.add('active');
}

alternativePaymentMethod.onclick = function(){
    creditCardForm.classList.remove('active')
}