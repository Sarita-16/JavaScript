/* //Taking input using readLine
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

// Dstructure
const [a, b] = [5, 25];
console.log("a --> " + a);

let s1 = b + a;
let s2 = b - a;

let result = [s1, s2];
console.log(`Sorting Numbers : ${result.sort((a, b) => a - b)}`); // sorting numbers

// Bitwise
let getMaxLessThanK = function (n, k) {
  let m = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if ((i & j) < k) {
        m = Math.max(m, i & j);
      }
    }
  }
  console.log(m);
};
getMaxLessThanK([1, 2, 3, 4, 5, 6, 7, 8], 3);

// Dates
let dayName = function (date) {
  weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let dayNumber = new Date(date);
  day = weekDays[dayNumber.getDay()];
  console.log(`The day of the date ${date} is : ${day} 📅`);
};
dayName("02/16/2001"); // MM/DD/YYYY

//Any string that begins and ends with the same vowel
let string = function (str) {
  let len = str.length;
  if (str.charAt(0) == str.charAt(len - 1)) {
    console.log("String begins and ends with the same vowel 👻");
  } else {
    console.log("String begins and ends with the different word 😟");
  }
};
string("abcdea");

//RegExp  -----> https://regexr.com/
let regex = /nice/g; // g = global
let text = "very very nice awesome nice very good girl";
console.log(
  `After replaceing word the text is : ${text.replace(regex, "NICE")}`
);
//return new RegExp(/^([aeiou]).*\1$/);

// testing

// hello world

// DSA

// making portfolio
 */

/*********************************************** Log2Base2 **********************************************************************/
// Sum of Digits
let number = function (num) {
  let sum = 0;
  while (num > 0) {
    r = num % 10;
    sum = sum + r;
    num = num / 10;
  }
  console.log("Sum of digit : " + sum);
};
number(12);

// Print Diagonals of a N X N Box
let diagonalBox = function (n) {
  let j;
  let k = n - 1;
  for (let i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      if (j == i || j == k) {
        console.log("*");
      } else "  ";
      k--;
    }
    console.log("\n");
  }
};
diagonalBox(5);
