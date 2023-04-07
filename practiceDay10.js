// 1. Class    : class are a templete for creating objects
class Human {
  constructor(givenName, givenAge, givenPosition) {
    // When we create an object then constructor will run
    this.name = givenName;
    this.age = givenAge;
    this.position = givenPosition;
  }

  description() {
    // method
    console.log(`I am ${this.name} & I'm ${this.age} years old 😊 \n\n`);
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

console.log(`Add 2 numbers using static method : ${Human.add(22, 30)} \n\n`);

/******************************************************************************************8*/

// 2. Inheritance
class Programmer extends Human {
  constructor(givenName, givenAge, givenPosition, givenLanguage) {
    super(givenName, givenAge, givenPosition);
    this.language = givenLanguage;
  }

  favouriteLanguage() {
    if (this.language == "Python") {
      console.log(`Favourit language is ${this.language} 😁 \n\n`);
    } else {
      console.log(`Favourit language is ${this.language} 😁 \n\n`);
    }
  }

  static multiplication(a, b) {
    return a * b;
  }
}
name3 = new Programmer("Sunny", 33, "Freelancer", "JavaScript");
console.log(name3);
name3.favouriteLanguage();
//console.log(name3.favouriteLanguage());
console.log(
  `Add 2 numbers using Inheritance, static method ${Programmer.add(
    25,
    50
  )} (●'◡'●) \n\n`
);
