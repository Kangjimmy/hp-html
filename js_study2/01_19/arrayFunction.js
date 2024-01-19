var colorArray = ['빨강', '초록', '파랑'];

console.log(colorArray.indexOf('파랑'));
console.log(colorArray.indexOf('빨강'));

// 배열에 존재하지 않는 배열이라서 -1을 반환
console.log(colorArray.indexOf('보라'));

// join 배열에 포함된 모든 원소를 하나의 문자열로 생성
var 착한동물 = ['원숭이', '고양이', '물고기', '도마뱀'];
console.log(착한동물.join());
console.log(착한동물.join('--'));

var 내주소 = ['경기도', '용인시', '처인구', '임원로'];
console.log(내주소.join(' '));

var 무작위단어 = ['폭발', '동굴', '공주', '펜'];
var 무작위색인 = Math.floor(Math.random() * 무작위단어.length);
console.log(무작위단어[무작위색인]);
class Dog {
  constructor(name) {
    this.name = name;
  }

  display(a) {
    console.log('강아지의 이름을 출력: ', this.name, arguments[0]);
  }
}
function Cat(name) {
  this.name = name;
}

let d1 = new Dog('강아지');
let c1 = new Cat('고양이');
// d1.display = c1.display;

d1.display('a');

const answer = [
  '좋은 생각이에요.',
  '네, 꼭 해보세요.',
  '별로 좋은 생각 같지 않아요.',
  '오늘은 안 해도 되지 않을까요?',
  '컴퓨터는 하지 말라고 하네요.',
];

console.log('숫제를 해야 할까요?');
console.log(answer[Math.floor(Math.random() * answer.length)]);
