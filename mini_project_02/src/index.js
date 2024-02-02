'use strict';

import { jsonData } from './json_data_index.js';

const filterData = jsonData.filter((value) => {
  if (value.SVCSTATNM == '접수중' || value.SVCSTATNM == '안내중') {
    return true;
  }
});

const TITLE = [
  '공원탐방',
  '교육체험',
  '농장체험',
  '문화행사',
  '산림여가',
  '서울형키즈카페',
  '전시/관람',
];

export function takeTwoSubContentsData() {
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
