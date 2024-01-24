// Map 생성
const map = new Map();

// set() : key와 value 설정
map.set('name', 'jimmy');
map.set(1, 'number');
map.set(true, 'realTrue');

console.log(map);

// get(): map에서 keyu에 해당하는 값 가져오기
console.log(map.get(true));

map.set('age', 20);
map.set('addr', 'seoul');

// 키 값 출력
console.log(map.get('addr'));

console.log(map.size);

map.delete(1);

console.log(map);
