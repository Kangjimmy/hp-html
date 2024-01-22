function Animals(name, legs, address) {
  this.name = name;
  this.legs = legs;
  this.address = address;
}

let dog = new Animals('바둑이', 4, '서울');
let birds = new Animals('짹짹이', 2, '');
let panda = new Animals('푸바오', 3, '경기도 용인시');
console.log(dog);
console.log(birds);
console.log(panda);
