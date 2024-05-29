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















