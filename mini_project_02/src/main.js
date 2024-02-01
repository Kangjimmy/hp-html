import { data } from './data.js';

const dataArr = data.contents;
const swiperColor = ['#FFFFF3', '#B8E5E0', '#E1F5FC', '#FFFFFF', '#F8E1B7'];
console.log(dataArr);

const swiperContents = document.querySelectorAll('.swiper__content');
swiperContents.forEach((item, index) => {
  const img = document.createElement('img');
  img.setAttribute('class', 'swiper__content__img');
  img.setAttribute('src', `${dataArr[index].IMGURL}`);
  img.setAttribute('alt', `${dataArr[index].MINCLASSNM}`);
  item.style.backgroundColor = swiperColor[index];
  item.appendChild(img);
});
