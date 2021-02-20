const headerBurger = document.querySelector('.headerBurger');
const headerMenu = document.querySelector('.headerMenu');
const body = document.querySelector('body');

headerBurger.onclick = function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}
