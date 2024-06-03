
// Tutorial was used to help create this function
// code was edit and changed to meet the demands and needs of the site 
// source code: https://www.youtube.com/watch?v=YeFzkC2awTM&t=1350s



if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var removeBagItemButtons = document.getElementsByClassName('remove-btn');

    for (var i =0; i< removeBagItemButtons.length; i++){
        var button = removeBagItemButtons[i]
        button.addEventListener('click', removeBagItem)
    }
}

var quantityInputs = document.getElementsByClassName('bag-quantity-input')
for (var i =0; i< quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}


function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value)){
        input.value = 1
    }
    updateBagTotal()
}


function removeBagItem() {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateBagTotal()
}


function updateBagTotal(){
    var bagItemContainer =document.getElementsByClassName('bag-items')[0]
    var bagRows = bagItemContainer.getElementsByClassName('bag-row')
    var total = 0;

    for (var i = 0; i< bagRows.length; i++){
        var bagRow = bagRows[i]
        var priceElement = bagRow.getElementsByClassName('bag-price')[0]
        var quantityElement = bagRow.getElementsByClassName('bag-quantity-input')[0]
        
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('bag-total-price')[0].innerText = '$' + total;
}

