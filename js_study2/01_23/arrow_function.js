// 코드가 한 줄이면 중괄호, return 키워드 생략 가능
let adder = (a, b) => a + b;
console.log(adder(10, 24));

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 매개변수가 없으면 소괄호 생략 못함.
let sum = () => {
  console.log('안녕하세요!');
};
// 코드가 한줄인 경우 중괄호 생략 가능.
sum = () => console.log('onion하세요!!');
sum();

// 매개변수가 1개인 경우 소괄호 중괄호 생략 가능
sum = (age) => console.log(age);
sum('13');
