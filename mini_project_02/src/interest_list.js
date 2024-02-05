'use strict';

import { getManagedData } from './common.js';
const interestContainer = document.querySelector('.interest__container');
const interestListsUl = document.querySelector('.interest__lists__ul');
const jsonData = getManagedData();
let loadCount = document.querySelectorAll('.ul__div').length;

let likeArr = [];
let loadingTag = null;
const output = localStorage.getItem('likeArr');
let likeIndexArr = null;
if (output === null) {
  likeIndexArr = [];
} else {
  likeIndexArr = JSON.parse(output);
}

if (likeIndexArr.length == 0) {
  interestContainer.innerHTML = `
  <span class="interest__container__empty x">❌</span>
  <span class="interest__container__empty">목록이 없습니다</span>
  `;
} else {
  likeIndexArr.forEach((index) => {
    likeArr.push(
      jsonData.find((data) => {
        if (data.INDEX == index) {
          return true;
        }
      })
    );
  });

  likeArr.forEach((item) => {
    createUlDiv(item);
  });
  loadingTag = createLoading();
  loading(loadingTag);

  const interval = setInterval(() => {
    if (loadCount == likeIndexArr.length) {
      console.log('--interval finish--');
      if (loadingTag != null) {
        loadingTag.remove();
      }
      interestContainer.classList.add('active');
      interestListsUl.classList.add('active');
      clearInterval(interval);
    } else {
    }
  }, 100);
}

function getIndexData(dataArr, index) {
  return dataArr.find((item) => item.INDEX == index);
}

function createUlDiv(data) {
  const ulDivLiImg = document.createElement('img');
  ulDivLiImg.setAttribute('class', 'ul__div__li__img');
  ulDivLiImg.setAttribute('loading', 'lazy');
  ulDivLiImg.setAttribute('alt', `${data.MINCLASSNM} img`);
  ulDivLiImg.setAttribute('src', `${data.IMGURL}`);

  ulDivLiImg.onload = (e) => {
    loadCount++;
    console.log('loadCount: ', loadCount);
  };
  const ulDiv = document.createElement('div');
  ulDiv.setAttribute('class', 'ul__div');

  const liA = document.createElement('a');
  liA.setAttribute('class', 'li__a');
  liA.setAttribute('href', `./details.html?INDEX=${data.INDEX}`);

  const ulDivLi = document.createElement('li');
  ulDivLi.setAttribute('class', 'ul__div__li');

  const ulDivMeta = document.createElement('li');
  ulDivMeta.setAttribute('class', 'ul__div__meta');
  ulDivMeta.innerHTML = data.SVCNM;

  ulDivLi.appendChild(ulDivLiImg);
  liA.appendChild(ulDivLi);
  liA.appendChild(ulDivMeta);
  ulDiv.appendChild(liA);

  interestListsUl.appendChild(ulDiv);
}

function createLoading() {
  const section = document.createElement('section');
  section.setAttribute('class', 'dot--section');
  const loadingTag = document.createElement('div');
  loadingTag.setAttribute('class', 'dots');

  for (let i = 1; i <= 15; i++) {
    const span = document.createElement('span');
    span.setAttribute('style', `--i: ${i}`);
    loadingTag.appendChild(span);
  }
  section.appendChild(loadingTag);

  return section;
}
function loading(loadingTag) {
  interestContainer.appendChild(loadingTag);
}
