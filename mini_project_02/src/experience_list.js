'use strict';

import { getManagedData, filterData, FilterType } from './common.js';

const managedData = getManagedData();

const expListsUl = document.querySelector('.exp__lists__ul');
const footer = document.querySelector('.footer');
const expLists = document.querySelector('.exp__lists');
const expBtns = document.querySelectorAll('.exp__btns__btn');
const [ALL, PARK, EDU, FARM, CULTURE, FOREST, CAFE, EXHIBITION] = [
  'all',
  'park',
  'edu',
  'farm',
  'culture',
  'forest',
  'cafe',
  'exhibition',
];

let selectedData = managedData;
let observer;
let btnClassification = ALL;
const INITIAL_LENGTH = 15;
let createIndex = 15;
let len;
let dataLength = selectedData.length;

initDataList(selectedData);
// filterList(ALL);

expBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const activeBtn = document.querySelector('.active');
    activeBtn.classList.remove('active');
    event.target.classList.add('active');

    btnClassification = event.target.classList[1];
    console.log(btnClassification);
    // filterList(btnClassification);
    selectedData = getSelectedData(btnClassification);
    console.log(selectedData);
    dataLength = selectedData.length;
    createIndex = 15;
    initDataList(selectedData);
  });
});

function initDataList(selectedData) {
  expListsUl.innerHTML = '';
  if (selectedData.length < 15) {
    const ulDivArr = [];
    selectedData.forEach((value) => {
      const ulNode = createUlDiv(value);
      ulDivArr.push(ulNode);
    });
    ulDivArr.forEach((item) => {
      expListsUl.appendChild(item);
    });
    footer.classList.remove('disable');
  } else {
    const ulDivArr = [];
    footer.classList.add('disable');
    len = 15;
    for (let i = 0; i < INITIAL_LENGTH; i++) {
      const ulNode = createUlDiv(selectedData[i]);
      ulDivArr.push(ulNode);
    }
    ulDivArr.forEach((item) => {
      expListsUl.appendChild(item);
    });
    startObserve();
  }
}

function getSelectedData(btnClassification) {
  let selectedData = null;
  switch (btnClassification) {
    case PARK:
      selectedData = filterData(managedData, FilterType.park);
      break;
    case EDU:
      selectedData = filterData(managedData, FilterType.edu);
      break;
    case FARM:
      selectedData = filterData(managedData, FilterType.farm);
      break;
    case CULTURE:
      selectedData = filterData(managedData, FilterType.culture);
      break;
    case FOREST:
      selectedData = filterData(managedData, FilterType.forest);
      break;
    case CAFE:
      selectedData = filterData(managedData, FilterType.cafe);
      break;
    case EXHIBITION:
      selectedData = filterData(managedData, FilterType.exhibition);
      break;
    default:
      selectedData = managedData;
      break;
  }
  return selectedData;
}

function startObserve() {
  console.log('-- startObserve');

  let options = {
    root: null,
    threshold: 0.9,
  };

  // options에 따라 인스턴스 생성
  observer = new IntersectionObserver(callback, options);

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
      console.log(entry);
      dataLength -= 15;
      if (dataLength < 15) {
        len = dataLength;
      } else {
        len = 15;
      }
      // 콜백 로직
      // const loadingTag = createLoading();
      // loading(loadingTag);
      const ulDivArr = [];
      for (let i = createIndex; i < createIndex + len; i++) {
        const ulNode = createUlDiv(selectedData[i]);
        ulDivArr.push(ulNode);
      }
      ulDivArr.forEach((item) => {
        expListsUl.appendChild(item);
      });
      // loadingTag.remove();
      observer.unobserve(entry.target);
      createIndex += len;
      if (len > 14) {
        observer.observe(getUlDivLastItem());
      } else {
        footer.classList.remove('disable');
      }
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
  console.log(data);
  const ulDiv = document.createElement('div');
  ulDiv.setAttribute('class', 'ul__div');
  setClassification(ulDiv, data.MINCLASSNM);

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

function setClassification(ulDiv, classification) {
  let result;
  switch (classification) {
    case '공원탐방':
      result = PARK;
      break;
    case '교육체험':
      result = EDU;
      break;
    case '농장체험':
      result = FARM;
      break;
    case '문화행사':
      result = CULTURE;
      break;
    case '산림여가':
      result = FOREST;
      break;
    case '서울형키즈카페':
      result = CAFE;
      break;
    case '전시/관람':
      result = EXHIBITION;
      break;
    default:
      result = ALL;
      break;
  }
  ulDiv.classList.add(result);
}
