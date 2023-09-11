let groupAnagrams = function (arr) {
  let sorttingArray = [];
  let removeduplicateArray = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    sorttingArray.push(arr[i].split("").sort().join(""));
  }
  removeduplicateArray = [...new Set(sorttingArray)];

  for (let i = 0; i < removeduplicateArray.length; i++) {
    let newArr = [];
    for (let j = 0; j < sorttingArray.length; j++) {
      if (removeduplicateArray[i] == sorttingArray[j]) {
        newArr.push(arr[j]);
      }
    }

    console.log(newArr);
    result.push(newArr);
  }
  console.log(result);
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
