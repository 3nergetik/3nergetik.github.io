const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');
const pcInfo = document.querySelector('div.pcinfo');
const dropdownActions = document.querySelector('.dropdown-actions');

headerBurger.onclick = function () {
    headerBurger.classList.toggle('open-menu');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}

dropdownActions.innerHTML = pcInfo.parentNode.innerHTML;
