const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const h1 = document.querySelector('h1');
const arrow = document.querySelector('.arrow')


burger.addEventListener ('click', () => {
    menu.classList.toggle('hidden');
    h1.classList.toggle('hidden');
    arrow.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        h1.classList.remove('hidden');
        arrow.classList.remove('hidden')
    }
})