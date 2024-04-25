let navbar =document.querySelector('.navbar');

document.querySelector('menu-btn').onclick=() => {
    navbar .classList.toggle('active');
}

window.constant = () =>{
    navbar.classList.remove('active');
}

let Slides=document.querySelectorAll('.home .slides-container .slide');
let index=0;

function next(){
    Slides[index].classList.remove('active');
    index=(index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    Slides[index].classList.remove('active');
    index=(index - 1  + slides.length) % slides.length;
    slides[index].classList.add('active');
}