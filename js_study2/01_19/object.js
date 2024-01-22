var 고양이 = {
  이름: '야옹이',
  나이: 6,
  색깔: '얼룩무늬',
  울음소리: '호이짜',
};

console.log(고양이.이름);
console.log(고양이.나이);
console.log(고양이.울음소리);
console.log(Object.keys(고양이));
console.log(Object.values(고양이));

// 객체에 추가

고양이['다리'] = 4;
고양이['스킬'] = '고양이의 숨결';
고양이['주인'] = '타라틸랑넴탈바르미압산타압마루탈덩컨';
고양이['나이'] = 3500;

console.log(고양이);
