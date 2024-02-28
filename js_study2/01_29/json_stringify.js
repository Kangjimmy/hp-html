const obj = {
  name: 'kang',
  age: 20,
  alive: true,
  hobby: ['traveling', 'piano'],
};

// 직렬화
const json = JSON.stringify(obj);
console.log(json);

// 역직렬화
const parsed = JSON.parse(json);
console.log(parsed);

const person = [
  { id: 1, name: 'kang', age: 20 },
  { id: 2, name: 'kim', age: 30 },
  { id: 3, name: 'lee', age: 40 },
];

// 직렬화
const person_json = JSON.stringify(person);
console.log(person_json);
// 역직렬화
const person_parsed = JSON.parse(person_json);
console.log(person_parsed);
