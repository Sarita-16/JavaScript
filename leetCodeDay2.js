// A number is palindrome or not
var isPalindrome = function (value) {
  let n = value;
  let sum = 0;
  while (value != 0) {
    let r = value % 10;
    sum = r + sum * 10;
    value = ~~(value / 10);
  }
  if (sum == n) console.log("The number is Palindrome 😁");
  else console.log("The number is not Palindrome 😟");
};
isPalindrome(121);
