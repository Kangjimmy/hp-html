'use strict';

import * as common from './common.js';

const filterData = common.getManagedData();

const TITLE = [
  '공원탐방',
  '교육체험',
  '농장체험',
  '문화행사',
  '산림여가',
  '서울형키즈카페',
  '전시/관람',
];

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

function takeTwoSubContentsData() {
  let takeIndex = 0;
  const indexArr = [];

  while (indexArr.length < 2) {
    takeIndex = Math.floor(Math.random() * TITLE.length);
    if (!indexArr.includes(TITLE[takeIndex])) {
      indexArr.push(TITLE[takeIndex]);
    }
  }

  const titleArr1 = filterData.filter((value) => {
    if (value.MINCLASSNM == indexArr[0]) {
      return true;
    }
  });
  const titleArr2 = filterData.filter((value) => {
    if (value.MINCLASSNM == indexArr[1]) {
      return true;
    }
  });

  const resultArr = [];

  resultArr.push({
    title: indexArr[0],
    arr: titleArr1,
  });
  resultArr.push({
    title: indexArr[1],
    arr: titleArr2,
  });

  return resultArr;
}
