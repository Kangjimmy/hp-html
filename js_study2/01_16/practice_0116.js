// 1
var x = 5;
var y = 3;
var z = x + y; // x와 y의 합
console.log(z); // x와 y의 합을 출력

// 2
var x = 10;
var y = 5;
var z = x - y;
console.log(z);

// 3
var x = 2;
var y = 5;
var z = x * y;
console.log(z);

// 4
var x = 5;
var y = 2;
var z = x / y;
console.log(z);

// 5
var x = 15;
var y = 4;
var z = x % y;
console.log(z);

// 6
var x = 5;
var y = ++x;
console.log(y); // 전위라서 바로 증가하므로 6

// 7
var x = 5;
var y = --x;
console.log(y); // 전위라서 바로 감소하므로 4

// 8
var str1 = '자바스크립트';
var str2 = '첫 번째 실습';
var z = str1.concat(str2);
console.log(z);
// console.log(str1 + str2);
// console.log(`${str1}${str2}`);

// 9
var x = 'Hello';
var y = 123;
var z = x + y;
console.log(z);
// console.log(x.concat(y));
// console.log(`${x}${y}`);

// 10
var str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var str2 = str1.length; // 결과는 26
console.log(str2);

// 11
var str1 = 'Hello, Java';
var str2 = str1.replace('Java', 'JavaScript');
console.log(str2);

// 12-1 대문자로 바꾸기
console.log('hello, javascript!'.toUpperCase());

// 12-2 소문자로 바꾸기
console.log('HELLO, JAVASCRIPT!'.toLowerCase());

// 13 문자열 분리
var str = 'a,b,c,d,e,f';
const strArr = str.split(',');
console.log(strArr[1]);
