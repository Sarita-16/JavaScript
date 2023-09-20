let validParentheses = function (str) {
  let stack = []; // create an empty Stack
  const objChars = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i of str) {
    // 'of' = value || 'in' = index
    if (!objChars[i]) {
      // '!' change the condition 'true' to 'false' & 'false' to 'true'
      stack.push(i);
    } else if (objChars[i] != stack.pop()) {
      console.log(false);
    }
  }
  console.log(stack.length === 0);
};
validParentheses("([])");
