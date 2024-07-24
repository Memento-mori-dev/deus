'use strict';

// меню для телефона
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

// меню для пс
let subHeader = document.getElementById('sub-header');

document.getElementById('header-nav').addEventListener('click', (e)=>{
    let button = e.target;
    let links = e.currentTarget.querySelectorAll('a');

    for (const link of links) {
        if (link.classList.contains('active') && button != link) {
            link.classList.remove('active');
            break;
        }
    }

    button.classList.toggle('active');

    if (button.classList.contains('button-header_arrow')) {
        let index = button.getAttribute('data-index');
        let elements = subHeader.querySelectorAll('.sub-header__element');
        let element = elements[index - 1];

        for (const section of elements) {
            if (section.classList.contains('active') && element != section) {
                section.classList.remove('active');
            }
        }

        element.classList.toggle('active');

        if (subHeader.querySelectorAll('.sub-header__element.active').length > 0) {
            subHeader.classList.add('active');
        } else {
            subHeader.classList.remove('active');
        }
    }
})