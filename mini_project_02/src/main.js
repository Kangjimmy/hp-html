'use strict';

// menu nav 햄버거
const headerNavMenu = document.querySelector('.header__nav__menu');
const headerNav = document.querySelector('.header__nav');
const headerContainer = document.querySelector('.header__container');
headerNavMenu.addEventListener('click', () => {
  headerContainer.classList.toggle('active');
  headerNav.classList.toggle('active');
});
