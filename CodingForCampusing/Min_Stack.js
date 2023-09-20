/*  --------------------------------------------------------------------------
                            ERROR    
------------------------------------------------------------------------    */
let MinStack = function () {
  // the 'this' keyword refers to an object
  this.minStack = [];
  this.stack = [];
};

MinStack.prototype.push = function (ele) {
  let minEle;
  if (this.stack == []) {
    this.stack.push(ele);
    this.minStack.push(ele);
    minEle = ele;
  } else {
    if (ele >= minEle) {
      this.stack.push(ele);
      this.minStack.push(minEle);
    } else {
      this.stack.push(2 * ele - minEle);
      minEle = ele;
      this.minStack.push(minEle);
    }
  }
};

MinStack.prototype.pop = function () {
  if (ele >= minEle) {
    this.minStack.pop();
  } else {
    minEle = 2 * minEle - ele;
    this.minStack.pop();
  }
  console.log(ele);
};

MinStack([[], [-2], [0], [-3], [], [], [], []]);
