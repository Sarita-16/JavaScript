let validPalindrome = function (string) {
  let str = string.split(" ").join("");
  let newString = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();

  let len = newString.length;
  for (let i = 0; i < len / 2; i++) {
    if (newString[i] !== newString[len - 1 - i]) {
      console.log(string + " is not a Valid Palindrome :(");
      return 0;
    }
  }
  console.log(string + " is a Valid Palindrome :)");
  return 0;
};
validPalindrome("0P");

/*
/take input/
const string = prompt('Enter a string: ');
/call the function/h
const value = checkPalindrome(string);
*/
