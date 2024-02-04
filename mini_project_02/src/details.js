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
const detailsBtnLink = document.querySelector('.details__btn__link > a');

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

detailsBtnLink.setAttribute('href', indexData.SVCURL);

function getIndexData(dataArr, index) {
  return dataArr.find((item) => item.INDEX == index);
}

const mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(indexData.Y, indexData.X), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
const map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
const markerPosition = new kakao.maps.LatLng(indexData.Y, indexData.X);

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
