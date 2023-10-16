class Queue {
  constructor() {
    this.item = [];
  }

  // Enqueue
  enqueue(element) {
    this.item.push(element);
  }

  // Dequeue
  dequeue() {
    return this.item.shift();
  }

  // isEmpty
  isEmpty() {
    return this.item.length === 0;
  }

  // Peek
  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    }
    return null;
  }

  // Size
  size() {
    return this.item.length;
  }

  // Print
  print() {
    console.log(this.item.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(25);
queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(10);
queue.enqueue(5);

console.log(queue.size());

console.log(queue.print());

console.log(queue.dequeue());

console.log(queue.peek());
