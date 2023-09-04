/*  ----------------------------------------------------------------------------------------------
indexOf()
----------------------------------------------------------------------------------------------  */

console.log("Using INDEXOF() method ---------");
const birds = [
  "Swallow",
  "Dove",
  "Pigeon",
  "Duck",
  "Crow",
  "Parrot",
  "Hen",
  "Peacock",
];

const index1 = birds.indexOf("Dove");
const index2 = birds.indexOf("cock");

if (index1 != -1) {
  console.log(`Index of ${birds[index1]} is ` + index1);
} else {
  console.log(`Not found`); //-1 means that the element was not found in array
}

if (index2 != -1) {
  console.log(`Index of ${birds[index2]} is ` + index2);
} else {
  console.log(`Not found`); //-1 means that the element was not found in array
}

/*  ----------------------------------------------------------------------------------------------
findIndex()
----------------------------------------------------------------------------------------------  */

console.log("Using FINDINDEX() method ---------");
const flowers = [
  "Jasmine",
  "Sunflower",
  "Daisy",
  "Lavender",
  "Rose",
  "Tulip",
  "Dahlia",
];

const index = flowers.findIndex((flower) => flower === "Daisy");
console.log("The index for Daisy: ", index, "\n");

/*  ----------------------------------------------------------------------------------------------
foor loop
----------------------------------------------------------------------------------------------  */

console.log("Using FOR() LOOP ---------");
const numbers = ["50", "25", "0", "5", "15"];

const key = "1";
let flag = 1;
for (let i = 0; i < numbers.length; i++) {
  if (key == numbers[i]) {
    let index = i;
    console.log(`Index of ${numbers[i]} is `, index);
    flag = 0;
    break;
  }
}

if (flag == 1) {
  console.log("Number Not Found");
}
