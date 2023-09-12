let productExceptSelf = function (arr) {
  let newArr = [];

  /*    for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      continue;
    }
    product = product * arr[i];
  }
  let division = 0;
  for (let i = 0; i < arr.length; i++) {
    division = product / arr[i];
    newArr.push(division);
  }     */

  let temp;
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (j = 0; j < arr.length; j++) {
      if (i == j) {
        //j = arr.shift();
        //arr.remove(arr[j]);
        //arr.splice(i, 1);
        //temp = arr.shift();
        j++;
        console.log(j);
      } else {
        product = product * arr[j];
      }
    }
    newArr.push(product);
  }
  console.log(newArr);
};
productExceptSelf([[-1, 1, 0, -3, 3]]);
