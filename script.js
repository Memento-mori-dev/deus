'use strict';

let btnMenuPhone = document.getElementById('btn-menu-phone');
let blockMenu = document.getElementById('block-menu');
btnMenuPhone.addEventListener('click', (e)=>{
    let button = e.currentTarget;
    let links = blockMenu.querySelectorAll('a');

    for (const link of links) {
        if (link.getAttribute('tabindex') == -1) {
            link.setAttribute('tabindex', '1');
        }else{
            link.setAttribute('tabindex', '-1');
        }
    }

    button.classList.toggle('active');
    blockMenu.classList.toggle('active');
});

// let menuHeader = document.getElementsByClassName('button-header');
// menuHeader.addEventListener('click', (e)=>{
//     console.log(e);
// })