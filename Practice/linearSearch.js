let linearSearch = function (arr, key) {
  let flag = 0;
  let location;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      flag = 1;
      location = i + 1;
      break;
    }
  }
  if (flag == 1) {
    console.log(`Search is sucessful 🪶 at the location ${location} 😊`);
  } else {
    console.log(`Search is not sucessful 😟`);
  }
};
linearSearch([8, 1, 0, 5, 7, 2, 6, 3, 9, 4], 5);
