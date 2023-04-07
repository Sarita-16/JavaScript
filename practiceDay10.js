// Class    : class are a templete for creating objects
class Human {
  constructor(givenName, givenAge, givenPosition) {
    this.name = givenName;
    this.age = givenAge;
    this.position = givenPosition;
  }

  description() {
    // method
    console.log(`I am ${this.name} & I'm ${this.age} years old 😊`);
  }

  birthYear() {
    // method
    let date = new Date();
    let year = date.getFullYear();
    let lifeTime = year - this.age;
    console.log(`Birth Year of ${this.name} is ${lifeTime} 😎 \n\n`);
  }

  static add(a, b) {
    // static method, we can use it without creating a object of class
    return a + b;
  }
}
name1 = new Human("Sarita", 22, "MCA"); // name1 is an object
console.log(name1);
name1.description();
name1.birthYear();

name2 = new Human("Tania", 30, "PWC"); // name2 is an object
console.log(name2);
name2.birthYear();

console.log(`Add 2 numbers using static method : ${Human.add(22, 30)}`);
