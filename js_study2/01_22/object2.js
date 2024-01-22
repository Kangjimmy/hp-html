var 공룡 = [
  { 이름: '티라노사우루스 렉스', 연대: '백악기 후기' },
  { 이름: '스테고사우루스', 연대: '쥐라기 후기' },
  { 이름: '플라테오사우루스', 연대: '트라이아스기' },
];

console.log(공룡[0]);
console.log(공룡[1].연대);
console.log(공룡[2].이름);

var 민지 = { 이름: '민지', 나이: 11, 행운의숫자: [2, 4, 8, 16] };
var 지훈 = { 이름: '지훈', 나이: 15, 행운의숫자: [3, 9, 40] };
var 서연 = { 이름: '서연', 나이: 19, 행운의숫자: [1, 2, 30] };

var 친구 = [민지, 지훈, 서연];

console.log(친구[1]);

console.log(친구[2].이름);
console.log(친구[0].행운의숫자[1]);

var 빌려준돈 = {};

빌려준돈.지훈 = 5000;
빌려준돈['민지'] = 7000;
console.log(빌려준돈.지훈);
console.log(빌려준돈.진영);
빌려준돈.지훈 += 2000;
console.log(빌려준돈.지훈);

var 영화 = {
  '니모를 찾아서': {
    개봉연도: 2003,
    상영시간: 100,
    출연진: ['앨버트 브룩스', '엘런 드제너러스', '알렉산더 굴드'],
    형식: 'DVD',
  },
  '스타워즈에피소드6-제다이의귀환': {
    개봉연도: 1983,
    상영시간: 134,
    출연진: ['마크 해밀', '해리슨 포드', '캐리 피셔'],
    형식: 'DVD',
  },
  '해리포터와 불의 잔': {
    개봉연도: 2005,
    상영시간: 157,
    출연진: ['다니엘 레드클리프', '엠마 왓슨', '루퍼트 그린트'],
    형식: '블루레이',
  },
};
const 니모를찾아서 = 영화['니모를 찾아서'];
console.log(니모를찾아서.상영시간);
console.log(니모를찾아서.형식);
console.log(니모를찾아서.출연진[1]);

var 카 = {
  개봉연도: 2006,
  상영시간: 117,
  출연진: ['오웬 윌슨', '보니 헌트', '폴 뉴먼'],
  형식: '블루레이',
};

영화['카'] = 카;
console.log(영화);

console.log(Object.keys(영화));

// 변수명과 객체 key가 같으면 축약이 가능

let width = 100;
let height = 100;

// let area = {
//   width: width,
//   height: height,
// };
let area = { width, height };
console.log(area);

console.clear();

const dog = {
  name: '바둑이',
  legs: 4,
  color: 'brown',
  speak: function () {
    console.log('멍멍');
    console.log(this);
    console.log(this.name);
  },
  speak2: () => {
    console.log('멍멍2');
    console.log(this);
    console.log(this.name);
  },
  speak3() {
    console.log('멍멍3');
    console.log(this);
    console.log(this.name);
  },
};
const cat = {
  name: '냐옹이',
  legs: 4,
  color: 'brown',
  speak: function () {
    console.log('냐옹');
    console.log(this);
    console.log(this.name);
  },
  speak2: () => {
    console.log('냐옹');
    console.log(this);
    console.log(this.name);
  },
  speak3() {
    console.log('냐옹');
    console.log(this);
    console.log(this.name);
  },
};
// dog.speak();
// console.log('--------------');
// dog.speak2();
// console.log('--------------');
// dog.speak3();
cat.speak3 = dog.speak3;
cat.speak2 = dog.speak2;
cat.speak = dog.speak;
cat.speak2();
const a = new cat.speak3();
