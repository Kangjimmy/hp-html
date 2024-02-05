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
const detailsBtnLink = document.querySelector('.details__btn__link');
const detailsBtnLike = document.querySelector('.details__btn__like');

let output = localStorage.getItem('likeArr');
let likeArr = null;
if (output === null) {
  likeArr = [];
} else {
  likeArr = JSON.parse(output);
}

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
drawHeart(detailsBtnLike);

detailsBtnLike.addEventListener('click', () => {
  if (likeArr.length == 0) {
    likeArr.push(indexData.INDEX);
    localStorage.setItem('likeArr', JSON.stringify(likeArr));
    fillLike();
  } else {
    let i = likeArr.indexOf(indexData.INDEX);
    if (i == -1) {
      if (likeArr.length >= 8) {
        // 목록에 추가하는데 8개이상이 등록되어있으면 등록하지 않도록
        alert('관심목록은 8개까지 등록이 가능합니다.');
      } else {
        // 목록에 없는경우 목록에 추가하고, 하트가 채워지도록
        likeArr.push(indexData.INDEX);
        localStorage.setItem('likeArr', JSON.stringify(likeArr));
        fillLike();
      }
    } else {
      // 목록에 있는경우 목록에서 삭제하고, 하트가 지워지도록
      likeArr.splice(i, 1);
      localStorage.setItem('likeArr', JSON.stringify(likeArr));
      emptyLike();
    }
  }
});

function drawHeart(node) {
  console.log('-drawHeart-');
  node.innerHTML += ' ';

  if (likeArr.length == 0) {
    node.innerHTML += `<i class="fa-regular fa-heart"></i>`;
  } else {
    if (likeArr.indexOf(indexData.INDEX) != -1) {
      node.innerHTML += `<i class="fa-solid fa-heart"></i>`;
    } else {
      node.innerHTML += `<i class="fa-regular fa-heart"></i>`;
    }
  }
}

function getIndexData(dataArr, index) {
  return dataArr.find((item) => item.INDEX == index);
}

function fillLike() {
  const likeIcon = document.querySelector('.details__btn__like > i');
  likeIcon.classList.replace('fa-regular', 'fa-solid');
}
function emptyLike() {
  const likeIcon = document.querySelector('.details__btn__like > i');
  likeIcon.classList.replace('fa-solid', 'fa-regular');
}

// --------------------
// ----- 지도 생성 ------
// --------------------
const mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(indexData.Y, indexData.X), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
const map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다
const markerPosition = new kakao.maps.LatLng(indexData.Y, indexData.X);
const coord = new kakao.maps.LatLng(indexData.Y, indexData.X);

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 주소-좌표 변환 객체를 생성합니다
const geocoder = new kakao.maps.services.Geocoder();
const detailsLocationAddress = document.querySelector(
  '.location__address__div'
);
searchDetailAddrFromCoords(coord, function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    var detailAddr = !!result[0].road_address
      ? '<div class="location__address__div__address">도로명주소 : ' +
        result[0].road_address.address_name +
        '</div>'
      : '';
    detailAddr +=
      '<div class="location__address__div__address">지번 주소 : ' +
      result[0].address.address_name +
      '</div>';

    detailsLocationAddress.innerHTML = detailAddr;
  }
});

function searchDetailAddrFromCoords(coords, callback) {
  // 좌표로 법정동 상세 주소 정보를 요청합니다
  geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}
