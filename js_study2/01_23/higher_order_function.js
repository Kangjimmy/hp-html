/**
 * 고차 함수란
 *  - 인자로 함수를 받거나 함수를 반환하는 함수
 *  - 함수 안에서 다른 함수를 원하는 시점에 호출할 수 있는 권한을 가진 함수
 *  - 여기서 입력으로 들어가는 함수를 callback함수라고 한다.
 */

/**
 * callback 함수
 *  - 인자로 전달되는 시점에 바로 함수를 호출하는 것이 아닌 고차 함수 내부에서 필요한 순간에 호출되는 함수
 */

const calculator = (a, b, calc) => calc(a, b);

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

console.log(calculator(2, 5, add));
console.log(calculator(10, 8, sub));

// setTimeout 해보자.
setTimeout(() => console.log('5초후 실행됨'), 5000);

const numbers = Array.from({ length: 5 }, (_, i) => i * 10 + 10);
numbers.forEach((value) => console.log(value));

numbers.forEach((value, index) =>
  console.log(`index: ${index} value: ${value}`)
);
numbers.forEach((_, __, array) => console.log(`${array}`));

// find() - 조건에 맞는 item을 반환해 준다. 일치하는 가장 첫번째를 반환
const fruits = ['apple', 'banana', 'melon', 'orange'];

const favorite1 = fruits.find((value) => value === 'melon');
console.log(favorite1);

// findIndex() - 조건에 맞는 index를 반환해 준다. 일치하는 가장 첫번째를 반환
const index1 = fruits.findIndex((value) => value === 'melon');
console.log(index1);

// some() - 배열의 아이템들이 조건을 부분적으로 만족하는지 확인
// every() - 배열의 모든 아이템들이 조건을 만족하는지 확인
const some1 = fruits.some((value) => value === 'melon');
const every1 = fruits.every((value) => value === 'melon');
console.log(some1);
console.log(every1);

fruits.push('melon');
const filter1 = fruits.filter((value) => value === 'melon');
console.log(filter1);

// map()
const array = [10, 20, 30, 40, 50];
const map1 = array.map((value) => value * 2);
const map2 = array.map((value, index) => value * index);
console.log(map1);
console.log(map2);
