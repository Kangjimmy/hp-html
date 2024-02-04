'use strict';
import { getManagedData } from './common.js';

const urlParams = new URLSearchParams(window.location.search);
const jsonData = getManagedData();
let index = urlParams.get('INDEX');
const indexData = getIndexData(jsonData, index);
console.log(indexData);

const detailsImg = document.querySelector('.details__img');
detailsImg.setAttribute('src', indexData.IMGURL);

const liSvcnm = document.querySelector('.li__svcnm');
liSvcnm.innerHTML = indexData.SVCNM;
const liSvcopn = document.querySelector('.li__svcopn');
const liPlacenm = document.querySelector('.li__placenm');
const liUsetgtinfo = document.querySelector('.li__usetgtinfo');
const liPayatnm = document.querySelector('.li__payatnm');

const [SVCOPN, PLACENM, USETGTINFO, PAYATNM] = [
  `${indexData.SVCOPNBGNDT.substr(0, 10)} ~ ${indexData.SVCOPNENDDT.substr(
    0,
    10
  )}`,
  indexData.PLACENM,
  indexData.USETGTINFO,
  indexData.PAYATNM,
];
liSvcopn.innerHTML = SVCOPN;
liPlacenm.innerHTML = PLACENM;
liUsetgtinfo.innerHTML = USETGTINFO;
liPayatnm.innerHTML = PAYATNM;

function getIndexData(dataArr, index) {
  return dataArr.find((item) => item.INDEX == index);
}
