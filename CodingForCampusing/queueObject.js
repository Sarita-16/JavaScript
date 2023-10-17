// Time Complexity Constant

class Queue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  // Enqueue
  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  // Dequeue
  dequeue() {
    const ele = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return ele;
  }

  // isEmpty
  isEmpty() {
    return this.rear - this.front === 0;
  }

  // Peek
  peek() {
    return this.item[this.front];
  }

  // Size
  size() {
    return this.rear - this.front;
  }

  // Print
  print() {
    console.log(this.item);
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(9);
queue.enqueue(19);
queue.enqueue(29);
queue.enqueue(39);
queue.enqueue(49);

console.log(queue.print());

console.log(queue.size());

console.log(queue.dequeue());

console.log(queue.peek());
