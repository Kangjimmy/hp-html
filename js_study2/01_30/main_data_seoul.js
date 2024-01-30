'use strict';

const API_KEY = '71546d4870736b6137384a4b46656d';
const stationList = [];
let stationName, stationLatitude, stationLongitude;

const div2 = document.querySelector('.div2');
const map = document.querySelector('#map');

div2.addEventListener('click', () => {
  //서울시 데이터 서버에서 데이터 100개 가져오기
  fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/100/`)
    .then((response) => response.json())
    .then((data) => {
      // console.log('데이터 출력');
      // console.log(data);

      let rows = data['rentBikeStatus']['row'];
      // console.log(rows);

      rows.forEach((row) => {
        stationName = row.stationName;
        stationLatitude = row.stationLatitude;
        stationLongitude = row.stationLongitude;

        const stationInfo = {
          stationName: stationName,
          stationLatitude: stationLatitude,
          stationLongitude: stationLongitude,
        };
        map.style.width = '100%';
        map.style.height = '350px';
        // console.log(stationInfo);
        stationList.push(stationInfo);
        showMap(stationList);
      });
    });
});

function showMap(positions) {
  // console.log(positions);

  // 마커 이미지의 이미지 주소입니다
  let mapContainer = document.getElementById('map'); // 지도를 표시할 div

  let mapOption = {
    center: new kakao.maps.LatLng(37.5556488, 126.91062927), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  let map = new kakao.maps.Map(mapContainer, mapOption);
  var imageSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

  positions.forEach((item) => {
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(
        item.stationLatitude,
        item.stationLongitude
      ), // 마커를 표시할 위치
      title: item.stationName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
  });
}
