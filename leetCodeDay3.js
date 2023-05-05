// Longest Common Prefix
let longestCommonPrefix = function (string) {
  let prefix = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i].split == string[j].split) {
        prefix = string;
      }
    }
  }
  console.log("STRING : " + prefix);
};
longestCommonPrefix("flower", "flow", "flight");

// Maximum Number of Vowels in a Substring of Given Length
let maxVowels = function (s, k) {
  let a = s.split(""); //[l,e,e,t,c,o,d,e]
  let max = 0;
  let i = 0;
  while (i < s.length) {
    let remainingCount = s.length - i;
    if (remainingCount < k) {
      i--;
    }

    let count = 0;
    for (let j = 0; j < k; j++) {
      if (
        a[i] == "a" ||
        a[i] == "e" ||
        a[i] == "i" ||
        a[i] == "o" ||
        a[i] == "u"
      ) {
        count++;
      }
      i++;
    }
    if (max < count) {
      max = count;
    }
  }

  console.log(
    "Maximum Number of Vowels in a Substring of Given Length : " + max
  );
};
maxVowels("zpuerktejfp", 3);
