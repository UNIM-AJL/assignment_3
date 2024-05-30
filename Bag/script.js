let searchBtn = document.querySelector('.searchBtn');

let searchBtnIcon = document.querySelector('.searchBtn-icon');

let searchBox = document.querySelector('.search-box');

let closeBtn = document.querySelector('.closeBtn');

let exitButton = document.querySelector('.exit-button');

let hamburgerMenu = document.querySelector('.hamburger-menu');

let dropDownMenu = document.querySelector('.drop-down-menu');




searchBtn.onclick = function(){
    searchBox.classList.add('active');
}


closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
}


searchBtnIcon.onclick = function(){
    searchBox.classList.add('active');
}

hamburgerMenu.onclick = function(){
    dropDownMenu.classList.add('active');
}

exitButton.onclick = function(){
    dropDownMenu.classList.remove('active');
}







// https://www.youtube.com/watch?v=mq6vlYmh_AE

// var productName = localStorage.getItem('product-name');
// var productCategory = localStorage.getItem('product-category');
// var productPrice = localStorage.getItem('product-price');

// document.getElementById('product-name').textContent = productName;
// document.getElementById('product-category').textContent = productCategory;
// document.getElementById('product-price').textContent = productPrice;


// var resetValue = '';

// localStorage.setItem('product-name', resetValue)
// localStorage.setItem('product-category', resetValue)
// localStorage.setItem('product-price', resetValue)




function valueSender(){
    var total = updateBagTotal();


    localStorage.setItem('product-name', productName);
    localStorage.setItem('product-category', productCategory);
    localStorage.setItem('product-price', productPrice);
    window.location.href = "../bag/index.html";
}










//https://www.youtube.com/watch?v=YeFzkC2awTM&t=1350s



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

