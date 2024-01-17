class Cat {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  }

  printName = this.printName.bind(this);
}
class Dog {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`개의 이름을 출력한다옹: ${this.name}`);
  }
}
function Cow(name) {
  this.name = name;
}

const dog = new Dog('멍멍');
const cat = new Cat('냐옹');

dog.printName();
cat.printName();

dog.printName = cat.printName;

dog.printName();
