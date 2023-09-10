let validAnagram = function (word1, word2) {
  let flag = 0;
  let lenWord2 = word2.length;
  if (word1.length == word2.length) {
    for (let i = 0; i < word1.length; i++) {
      for (let j = 0; j < lenWord2; j++) {
        if (word1[i] == word2[j]) {
          flag = 1;
          word2 = word2.replace(word2[j], "");
          break;
        } else {
          flag = 0;
        }
      }
      if (flag == 0) {
        break;
      }
    }
  }
  if (flag) {
    console.log(true);
  } else {
    console.log(false);
  }
};
validAnagram("aacc", "ccac");
