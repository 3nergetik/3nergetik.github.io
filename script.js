const headerBurger = document.querySelector('.header-burger');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
const sideButton = document.querySelector('.side-button');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const headerMenu = document.querySelector('.header-menu');
const delay_popup = 5000;

setTimeout("popup.style.top='0'", delay_popup);


headerBurger.onclick = () => {
  nav.classList.toggle('show-menu');
  headerMenu.classList.toggle('show-menu-item');
  body.classList.toggle('lock');
  headerBurger.classList.toggle('open-menu');
}

popupClose.onclick = () => {
  popup.style.top='-100%';
  body.classList.toggle('lock');
}

sideButton.onclick = () => {
  popup.style.top='-100%';
  body.classList.toggle('lock');
}
