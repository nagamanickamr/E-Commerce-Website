// header scroll color change 
let header = document.querySelector('header');

window.addEventListener('scroll',()=> {
    header.classList.toggle('shadow',window.scrollY > 0);
});

//menu
let menu = document.querySelector('#menu-icon');
let navber = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//remove menu on scroll

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}