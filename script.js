const headerBurger = document.querySelector('.header-burger');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
const sideButton = document.querySelector('.side-button');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const headerMenu = document.querySelector('.header-menu');
const headerBody = document.querySelector('.header-body');

const delay_popup = 5000;

const showModal = () => {
  popup.classList.add('active');
}

/* setTimeout(showModal, delay_popup); */

headerBurger.onclick = () => {
  nav.classList.toggle('show-menu');
  headerMenu.classList.toggle('show-menu-item');
  headerBurger.classList.toggle('open-menu');
  headerBody.classList.toggle('show-item');
}

popupClose.onclick = () => {
  popup.classList.remove('active');
}

sideButton.onclick = (evt) => {
  evt.preventDefault();
  popup.classList.remove('active');
}

console.log(headerBody);
