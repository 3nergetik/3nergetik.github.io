const headerBurger = document.querySelector('.header-burger');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
const sideButton = document.querySelector('.side-button');
const body = document.querySelector('body');

headerBurger.onclick = () => {
  popup.classList.add('active');
  body.classList.add('lock');
}

popupClose.onclick = () => {
  popup.classList.remove('active');
  body.classList.remove('lock');
}

sideButton.onclick = () => {
  popup.classList.remove('active');
}
