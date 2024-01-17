// 조건의 결과에 해당하는 값을 반환
// 조건 ? 참일때 결과 : 거짓일 때 결과

var x = 5;
var y = 3;

var big = x > y ? x : y;
console.log(big);

var name = 'kitae';
var res1 = name == 'kitae';
var res2 = name > 'park';
console.log(res1);
console.log(res2);

var 인사 = '안녕하세요';
var 내이름 = '정수아';
console.log(인사 + 내이름);
var hi = '안녀아헤쇼        ';
console.log(hi[12]);

var 암호1 = '지도 속';
var 암호2 = '희망을';
var 암호3 = '훔쳐본다';
var 암호4 = '?!';

console.log(암호1[1] + 암호2[1] + 암호3[1] + 암호4[1]);

var 긴문자열 = '이 문자열은 참 깁니다.';
console.log(긴문자열.slice(2));
console.log(긴문자열.slice(2, 5));

const obj = { name: 'jimmy' };

console.clear();

var every = 'Boys and Girls and Others';
var replace = every.replace('and', 'or');
console.log(replace);

// 문자열 분할.
var every = 'Boys and girls and Others';
var sub = every.split('and');
console.log(sub);

var 고칠문자열 = 'hELlo THERE, How ARE yOu doINg?';
var 소문자 = 고칠문자열.toLowerCase();
var 첫글자 = 소문자[0];
var 첫글자대문자 = 첫글자.toUpperCase();
var 나머지 = 소문자.slice(1);
console.log(첫글자대문자 + 나머지);

const apple = {
  display: function () {
    console.log('apple');
  },
};

apple.display();
