var fruits = [
  '딸기',
  '수박',
  '복숭아',
  '자몽',
  '망고',
  '귤',
  '참외',
  '키위',
  '멜론',
  '포도',
  '바나나',
];

let fr2 = ['자두'];
console.log(fruits[2]);
console.log(
  fruits.forEach((value, index) => {
    console.log(value, index);
  })
);

var 과일과숫자 = [3, '과일', ['딸기', '사과', 3627.5], 10];
console.log('사과는 과일과숫자[2][1] : (' + 과일과숫자[2][1] + ') 에 있다');

var 우유 = ['딸기', '바나나', '초코'];
for (var i = 0; i < 우유.length; i++) {
  console.log(우유[i]);
}
console.clear();

// 배열 넣는 방법 push
var 동물 = [];
console.log(동물.push('고양이'));
console.log(동물.push('강아지'));
console.log(동물.push('라마'));
console.log(동물);
console.log(동물.length);

// 배열 넣는 방법 unshift
var 동물2 = [];
console.log(동물2.unshift('고양이'));
console.log(동물2.unshift('강아지'));
console.log(동물2.unshift('라마'));
console.log(동물2.unshift('원숭이'));
console.log(동물2.unshift('북극곰'));
console.log(동물2);
console.log(동물2.length);

console.clear();
// 배열의 마지막 원소 제거 pop
console.log(동물2);
var 마지막동물 = 동물2.pop();
console.log(마지막동물);
console.log(동물2);
console.clear();
console.log(동물2.pop());
console.log(동물2);

// 배열의 첫번째 원소 제거 shift
var 첫번째동물 = 동물2.shift();
console.log(첫번째동물);
console.log(동물2);

var 포유류 = ['알파카', '원숭이', '설인'];
var 파충류 = ['보아뱀', '고질라'];
var 포유류파충류 = 포유류.concat(파충류);
console.log(포유류파충류);

var 포유류 = ['알파카', '원숭이', '설인'];
var 파충류 = ['보아뱀', '고질라'];
var 조류 = ['앵무새', '도도새'];
var 모든동물 = 포유류.concat(파충류, 조류);
console.log(모든동물);
모든동물.push('청룡');
console.log(모든동물);
