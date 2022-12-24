const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const headerTitle = document.querySelector('.header-title');
const arrow = document.querySelector('.arrow');


burger.addEventListener ('click', () => {
    burger.classList.toggle('opac');
    menu.classList.toggle('menu-in');    
    headerTitle.classList.toggle('hidden');
    arrow.classList.toggle('hidden');
    if (menu.classList.contains('menu-in')) {
        headerTitle.classList.remove('hidden');
        arrow.classList.remove('hidden')
    }
});

