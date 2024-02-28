'use strict';

const key = require('./key.json');

fetch(
  `http://openAPI.seoul.go.kr:8088/${key.keyDataSeoul}/json/ListPublicReservationCulture/1/1000/`
)
  .then((response) => response.json())
  .then((data) => {
    if (data.ListPublicReservationCulture.RESULT.CODE == 'INFO-000') {
      const fs = require('fs');
      const array = data.ListPublicReservationCulture.row;
      let i = 0;
      array.forEach((item) => {
        item.INDEX = i;
        i++;

        if (item.PLACENM.includes('거점 1호 우리동네키움센터')) {
          item.X = '127.0512367';
          item.Y = '37.6721954';
        } else if (item.PLACENM.includes('거점 2호 우리동네키움센터')) {
          item.X = '126.9272129';
          item.Y = '37.512403';
        } else if (item.PLACENM.includes('거점 4호 우리동네키움센터')) {
          item.X = '126.8428979';
          item.Y = '37.493493';
        } else if (item.PLACENM.includes('거점 5호 우리동네키움센터')) {
          item.X = '127.0370778';
          item.Y = '37.5921727';
        } else if (item.PLACENM.includes('거점 7호 우리동네키움센터')) {
          item.X = '126.8837612';
          item.Y = '37.5421337';
        } else if (item.PLACENM.includes('허준박물관코스')) {
          item.X = '126.8509738';
          item.Y = '37.5680242';
        } else if (item.PLACENM.includes('겸재정선미술관코스')) {
          item.X = '126.838712';
          item.Y = '37.5722318';
        } else if (item.PLACENM.includes('개화산둘레길코스')) {
          item.X = '126.8126686';
          item.Y = '37.5772589';
        } else if (item.IMGURL.includes('/cmsdata/web_upload')) {
          item.IMGURL =
            'https://cdn.pixabay.com/photo/2020/09/09/02/12/smearing-5556288_960_720.jpg';
        }
      });
      fs.writeFileSync('./dataSeoul.json', JSON.stringify(array));
    }
  })
  .catch((error) => console.log(error));

// import jd from './abc.json' assert { type: 'json' };
// const doc = readFileSync('abc.json');
// console.log(jd.row);
