'use strict';

const popupWindow = document.querySelector('.popup');
const mainContent = document.querySelector('.main');
const mainFooter = document.querySelector('.footer');
const popupOpener = document.querySelector('.section-top__button');
const popupCloser = document.querySelector('.popup__close-btn');

popupOpener.onclick = function() {
  popupWindow.style.transform = 'translateX(0)';
  popupWindow.style.position = 'relative';
  mainContent.style.display = 'none';
  mainFooter.style.display = 'none';
};

popupCloser.onclick = function() {
  popupWindow.style.transform = 'translateX(100%)';
  popupWindow.style.position = 'fixed';
  mainContent.style.display = 'unset';
  mainFooter.style.display = 'unset';
};
