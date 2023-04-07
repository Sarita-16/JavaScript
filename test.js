//Taking input using readLine
//let value = readLine("Taking input using readLine : ");
//console.log(value);

// Get Grade using if-else
let getGrade = function (score) {
  let grade;
  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score >= 0 && score <= 5) {
    grade = "F";
  }
  console.log(grade);
};
getGrade(11);

//Get Letter using switch case
let getLetter = function (s) {
  let letter;
  for (let i = 0; i <= 100; i++) {
    switch (s.charAt(i)) {
      case "a" || "e" || "i" || "o" || "u":
        letter = "A";
        break;
      case "b" || "c" || "d" || "f" || "g":
        letter = "B";
        break;
      case "h" || "j" || "k" || "l" || "m":
        letter = "C";
        break;
      case "n" ||
        "p" ||
        "q" ||
        "r" ||
        "s" ||
        "t" ||
        "v" ||
        "w" ||
        "x" ||
        "y" ||
        "z":
        letter = "D";
        break;
      default:
        break;
    }
  }
  console.log(letter);
};
getLetter("sarita");

// Reverse a String Using TRY-Catch-Finally Block
let reverseString = function (s) {
  try {
    let string = s.split("").reverse().join("");
    console.log(string);
    if (typeof s !== "string") throw error;
  } catch (error) {
    console.log("Input is not a String\n", s);
  } finally {
  }
};
reverseString("sarita");

// Creating a Object & compute perimeter & area of Rectangle
let Rectangle = function (a, b) {
  let RecObj = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  console.log(RecObj);
};
Rectangle(5, 4);

// Get a Year
let date = new Date();
let year = date.getFullYear(); // getFullYear() : returns the full year (4 digits) of a date.
console.log(year);
