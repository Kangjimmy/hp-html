const set1 = new Set();
console.log(set1);

const set2 = new Set([1, 2, 3, 4, 5]);
console.log(set2);

// hello의 l은 중복 제거가 되서 h e l o 4개가 찍힘.
const set3 = new Set('hello');
console.log(set3);

const set4 = new Set([10, 20, 30]);
// 사이즈 확인
console.log(set4.size);

// 데이터 존재 여부
console.log(set4.has(10));
console.log(set4.has(40));

// 데이터 추가
set4.add(40);
console.log(set4);

// 데이터 순회
set4.forEach((value) => console.log(value));

// 삭제
set4.delete(20);
console.log(set4);

// 전부 삭제
set4.clear();
console.log(set4);
