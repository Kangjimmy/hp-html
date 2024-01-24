// 스프레드 연산자 spread
// ...을 쓰면 펼쳐서 보여준다.
// function에 쓰면 rest parameter라고 한다.
function add(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30, 40];
console.log(add(10, 20, 30, 40, 50));

function rest(num1, num2, ...nums) {
  console.log(nums);
}

rest(10, 20, 30, 40, 50);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const newArr = [...num1, ...num2];
console.log(newArr);

// 객체와 스프레드 연산자
const dog = {
  name: '바둑이',
  age: 5,
  color: 'brown',
};
const newDog = {
  ...dog,
  owner: 'jimmy',
};
console.log(dog);
console.log(newDog);

// 구조 분해 할당
const foo = ['one', 'two', 'three'];
[red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);
