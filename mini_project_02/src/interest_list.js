'use strict';

import { getManagedData } from './common.js';
const output = localStorage.getItem('likeArr');
const interestContainer = document.querySelector('.interest__container');
const jsonData = getManagedData();
if (output === null) {
  interestContainer.innerHTML += `
  <span class="interest__container__empty x">❌</span>
  <span class="interest__container__empty">목록이 없습니다</span>
  `;
} else {
  const likeArr = JSON.parse(output);
}

/* <div class="ul__div">
      <li><></li>
      <li class="ul__div__meta">meta</li>
   </div> */

/* <section class="interest__container max-container">
  <ul class="interest__lists__ul"></ul>
  <span class="interest__container__empty x">❌</span>
  <span class="interest__container__empty">목록이 없습니다</span>
</section>; */

function getIndexData(dataArr, index) {
  return dataArr.find((item) => item.INDEX == index);
}
