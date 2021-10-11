'use strict';

const schemeSvg = document.querySelector('.scheme-svg'),
    priceTotal = document.querySelector('.price-total'),
    menuButton = document.querySelector('.m-menu'),
    menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0; 


schemeSvg.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName.toLowerCase() === 'path' && !target.classList.contains('booked')){
        target.classList.toggle('active');
        totalPrice = 0;
        totalPrice = cost * (document.querySelectorAll('.active').length-1);
        priceTotal.textContent = totalPrice;
    }
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});