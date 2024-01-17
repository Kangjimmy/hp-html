// 데이터 타입 : 문자열
// 값을 바꿀 수 없다.
const name = '정수아';
// name = '자바스크립트';

// 데이터 타입 : 객체, 배열, 함수 -> 값을 바꿀 수 있음.
const 객체 = { key: 2 };
객체.key = 5;
const 배열 = [1, 2, 3];
배열[2] = 5;
const 함수 = {
  func: function () {
    console.log('hi');
  },
};
함수.func = (a) => {
  console.log(`${a} 안녕하세용가리`);
};
함수.func('ㅋㅋㅋ');

// ------------------------------
// 객체 정의, 속성 값 변경, 속성 값 추가가 가능하다.
const obj1 = {
  name: 'jimmy',
  age: 20,
};
obj1.age = 30;
console.log(obj1);
obj1.address = '경기도 용인시';
console.log(obj1);

// ----------------------------
const arr1 = ['dog', 'cat'];
console.log(arr1);

// 첫번째 값 변경
arr1[0] = 'bird';
console.log(arr1);

arr1.push('monkey');
console.log(arr1);
