let searchBtn = document.querySelector('.searchBtn');

let closeBtn = document.querySelector('.closeBtn');

let searchBox = document.querySelector('.searchBox');

let navigation = document.querySelector('.navigation');

let menuToggle = document.querySelector('.menuToggle');

let header = document.querySelector('header');

let bag = document.querySelector('bag');


searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
    bag.classList.add('hide');x
}

closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
}

menuToggle.onclick = function(){
    header.classList.toggle('open');
}




const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");


    let a = 1;


    plus.addEventListener("click", ()=>{
        a++;
        num.innerText = a;
        console.log(a)
    });

    minus.addEventListener("click", ()=>{
        if(a>1){
            a--;
            num.innerText = a;
        }
    });