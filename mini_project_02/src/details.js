'use strict';
import { jsonData } from './json_data_index.js';

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('INDEX'));
let index = urlParams.get('INDEX');
console.log(jsonData[index]);

const detailsImg = document.querySelector('.details__img');

detailsImg.setAttribute('src', jsonData[index].IMGURL);
