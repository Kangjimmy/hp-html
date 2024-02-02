'use strict';

import { takeTwoSubContentsData } from './index.js';

// menu nav 햄버거
const headerNavMenu = document.querySelector('.header__nav__menu');
const headerNav = document.querySelector('.header__nav');
const headerContainer = document.querySelector('.header__container');
headerNavMenu.addEventListener('click', () => {
  headerContainer.classList.toggle('active');
  headerNav.classList.toggle('active');
});

// sub contents 뿌리기
const SUB_CONTENTS_LENGTH = 4;
const subContents = takeTwoSubContentsData();
console.log(subContents);
const subContentsTitle = document.querySelectorAll('.sub__contents__title');
const subContentsLiImgs = document.querySelectorAll('.sub__contents__li__img');
const imgMetas = document.querySelectorAll('.img__meta');
const subContentsA = document.querySelectorAll('.sub__contents__a');

for (let i = 0; i < subContents.length; i++) {
  const subContent = subContents[i];
  subContentsTitle[i].innerHTML = subContent.title;
  let k = 0;
  for (let j = 0 + i * 4; j < SUB_CONTENTS_LENGTH + i * 4; j++) {
    subContentsLiImgs[j].setAttribute('src', subContent.arr[k].IMGURL);
    subContentsLiImgs[j].setAttribute(
      'alt',
      `${subContent.arr[k].MINCLASSNM} img`
    );

    imgMetas[j].innerHTML = subContent.arr[k].SVCNM;

    subContentsA[j].setAttribute(
      'href',
      `./html/details.html?INDEX=${subContent.arr[k].INDEX}`
    );

    k++;
  }
}
