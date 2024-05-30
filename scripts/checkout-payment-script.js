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