class Stack {
  constructor() {
    this.items = [];
  }

  // Push
  push(ele) {
    this.items.push(ele);
  }

  // Pop
  pop() {
    return this.items.pop();
  }

  // Peek
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty
  isEmpty() {
    return this.items.length === 0;
  }

  // size
  size() {
    return this.items.length;
  }

  // print
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(0);
stack.push(5);
stack.push(8);

console.log(stack.size());

console.log(stack.print());

console.log(stack.pop());

console.log(stack.peek());
