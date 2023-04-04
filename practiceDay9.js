function add() {
  let a = 5;
  let b = 6;
  let c = a + b;
  console.log(c);
}
add();

// Display the current day and time

let today = new Date();
console.log("India Standard Time : " + today);
let day = today.getDate();
console.log("Day in Number : " + day);
dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today Is : " + dayList[day]);
