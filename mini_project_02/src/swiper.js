'use strict';

import data from './swiper_data.json' assert { type: 'json' };

const dataArr = data;
const swiperColor = ['#C1C2D3', '#EBCFCC', '#E95F98', '#FFFFFF', '#000306'];

const swiperContents = document.querySelectorAll('.swiper__content');
const swiperContentDate = document.querySelectorAll('.swiper__content__date');

swiperContents.forEach((item, index) => {
  const img = document.createElement('img');
  img.setAttribute('class', 'swiper__content__img');
  img.setAttribute('src', `${dataArr[index].IMGURL}`);
  img.setAttribute('alt', `${dataArr[index].MINCLASSNM}`);
  item.style.backgroundColor = swiperColor[index];
  item.appendChild(img);

  item.addEventListener('click', () => {
    location.href = `./html/details.html?INDEX=${dataArr[index].INDEX}`;
  });

  swiperContentDate[index].innerHTML = `${dataArr[index].SVCOPNBGNDT.slice(
    0,
    11
  )} ~ ${dataArr[index].SVCOPNENDDT.slice(0, 11)}`;
});

const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
