// Maximum Number of Vowels in a Substring of Given Length
let maxVowels = function (string, key) {
  let max = 0;
  let arr = string.split("");
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < key; j++) {
      if (
        arr[x] == "a" ||
        arr[x] == "e" ||
        arr[x] == "i" ||
        arr[x] == "o" ||
        arr[x] == "u"
      ) {
        count++;
      }
      x++;
    }
    if (max < count) {
      max = count;
    }
    x = x - (key - 1);
  }
  console.log(
    "Maximum Number of Vowels in a Substring of Given Length : " + max
  );
};
maxVowels("novowels", 1);
