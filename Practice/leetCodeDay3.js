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
