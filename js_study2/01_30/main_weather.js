'use strict';

// API KEY
const API_KEY = 'c6280b09761928352e61cf92d2a426e4';

// currentWeather
const CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?';

//
const img = document.querySelector('.img');
const temp = document.querySelector('.temp');
const temp2 = document.querySelector('.temp2');

// 장치의 현재 위치 추출
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(
      `${CURRENT_WEATHER}&appid=${API_KEY}&lat=${lat}&lon=${lon}units=metric`
    );

    fetch(
      `${CURRENT_WEATHER}&appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        img.setAttribute(
          'src',
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        temp.innerText = data.main.temp;
        temp2.innerText = data.weather[0].main + '\n';
        temp2.innerText += data.weather[0].description;
      })
      .catch((error) => console.log(error));
  },
  () => console.log('위치를 찾을 수 없습니다.')
);
