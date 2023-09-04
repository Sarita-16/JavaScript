// 1.Multiplication Table using for loop
let multiplication = function (number) {
  console.log("Multiplication Table of " + number + "--->");
  for (let i = 1; i <= 10; i++) {
    let mul = i * number;
    console.log(number + " * " + i + " = " + mul);
  }
};
multiplication(9);

// 2.Remove space from a String
let string = function (str) {
  let removeSpace1 = str.trim();
  let removeSpace2 = str.replace(/ /g, ""); //regex expression
  console.log(
    "Remove Space from a String using 'trim()' method : " + removeSpace1
  );
  console.log(
    "Remove Space from a String using 'replace()' method : " + removeSpace2
  );
};

string(" Hello World Sarita     ");
