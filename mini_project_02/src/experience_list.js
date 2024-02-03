'use strict';

import { getManagedData, filterData, FilterType } from './common.js';

const managedData = getManagedData();
const expListsUl = document.querySelector('.exp__lists__ul');
const footer = document.querySelector('.footer');
const expLists = document.querySelector('.exp__lists');

const INITIAL_LENGTH = 15;
let createIndex = 15;
let len;
let dataLength = managedData.length;

if (managedData.length < 15) {
  const ulDivArr = [];
  managedData.forEach((value) => {
    ulDivArr.push(createImg(value));
  });
  ulDivArr.forEach((item) => {
    expListsUl.appendChild(item);
  });
} else {
  const ulDivArr = [];
  footer.classList.add('disable');
  len = 15;
  for (let i = 0; i < INITIAL_LENGTH; i++) {
    const ulNode = createUlDiv(managedData[i]);
    ulDivArr.push(ulNode);
  }
  ulDivArr.forEach((item) => {
    expListsUl.appendChild(item);
  });
  startObserve();
}

function startObserve() {
  console.log('-- startObserve');

  let options = {
    root: null,
    threshold: 0.99,
  };

  // options에 따라 인스턴스 생성
  let observer = new IntersectionObserver(callback, options);

  // 타겟 요소 관찰 시작
  observer.observe(getUlDivLastItem());
}

function getUlDivLastItem() {
  const ulDiv = document.querySelectorAll('.ul__div');
  return ulDiv[ulDiv.length - 1];
}

function callback(entries, observer) {
  entries.forEach((entry) => {
    // isIntersecting을 사용

    if (entry.isIntersecting) {
      dataLength -= 15;
      if (dataLength < 15) {
        len = dataLength;
      } else {
        len = 15;
      }
      // ... 콜백 로직
      const loadingTag = createLoading();
      loading(loadingTag);

      setTimeout(() => {
        const ulDivArr = [];
        for (let i = createIndex; i < createIndex + len; i++) {
          const ulNode = createUlDiv(managedData[i]);
          ulDivArr.push(ulNode);
        }
        ulDivArr.forEach((item) => {
          expListsUl.appendChild(item);
        });
        loadingTag.remove();
        observer.unobserve(entry.target);
        createIndex += len;
        if (len > 14) {
          observer.observe(getUlDivLastItem());
        } else {
          footer.classList.remove('disable');
        }
      }, 1200);
    }
  });
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
  expLists.appendChild(loadingTag);
}

function createImg(data) {
  const ulDivLiImg = document.createElement('img');
  ulDivLiImg.setAttribute('class', 'ul__div__li__img');
  ulDivLiImg.setAttribute('loading', 'lazy');
  ulDivLiImg.setAttribute('alt', `${data.MINCLASSNM} img`);
  ulDivLiImg.setAttribute('src', `${data.IMGURL}`);
  return ulDivLiImg;
}

function createUlDiv(data) {
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
  const imgNode = createImg(data);

  ulDivLi.appendChild(imgNode);
  liA.appendChild(ulDivLi);
  liA.appendChild(ulDivMeta);
  ulDiv.appendChild(liA);

  return ulDiv;
}
