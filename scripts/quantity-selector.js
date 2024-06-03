// Tutorial was used to help create this function
// code was adapted to meet the needs of the site 
// source code: https://www.youtube.com/watch?v=uliYkHK3pKg


const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");



let a = 1;

plus.addEventListener("click", ()=>{
    a++
    a = (a < 10) ? + a : a;
    num.innerText = a;
    console.log(a)

});


minus.addEventListener("click", ()=>{
    if (a > 1){
        a--;
        a = (a < 10) ?  + a : a;
        num.innerText = a;
    }
});