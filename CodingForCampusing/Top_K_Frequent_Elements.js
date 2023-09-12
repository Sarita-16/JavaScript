let frequentElements = function (arr, k) {
  const map = new Map();
  let arrayC = [];
  let arrayE = [];
  let arrayInd = [];
  let resultArr = [];
  let gistArr = [...new Set(arr)];
  for (let i = 0; i < gistArr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (gistArr[i] == arr[j]) {
        count++;
      }
    }

    arrayC.push(count);
    arrayInd.push(i);
  }
  for (let x = 0; x < gistArr.length; x++) {
    map.set(arrayC, arrayInd);
  }

  arrayC.sort();
  arrayC.reverse();

  for (let i = 0; i < k; i++) {
    resultArr.push(map.get(gistArr[arrayInd]));
  }
  console.log(resultArr);
};
frequentElements([1, 1, 1, 2, 2, 3], 2);
