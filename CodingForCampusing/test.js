var isValid = function (s) {
  const stack = [];
  debugger;
  const characters = { ")": "(", "}": "{", "]": "[" };
  for (const char of s) {
    if (!characters[char]) {
      stack.push(char);
    } else if (stack.pop() !== characters[char]) {
      console.log(false);
    }
  }
  console.log(stack.length === 0);
};
isValid("()[]{}");
