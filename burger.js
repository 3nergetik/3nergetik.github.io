const headerBurger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');
const pcInfo = document.querySelector('div.pcinfo');
const dropdownActions = document.querySelector('.dropdown-actions');
const close = document.querySelector('#closeadmpanel > p');
const closeSvg = document.querySelector('#closeadmpanel > p > svg');

headerBurger.onclick = function () {
    headerBurger.classList.toggle('open-menu');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}
pcInfo.appendChild(dropdownActions);

close.innerHTML = closeSvg;

console.log(closeSvg);
