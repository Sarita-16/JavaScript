class circularQueue {
  constructor(capacity) {
    // one parameter Capacity, represents maximum size of the Circular Queue
    this.item = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  // isFull
  isFull() {
    return this.currentLength === this.capacity;
  }

  // isEmpty
  isEmpty() {
    return this.currentLength === 0;
  }

  // Enqueue
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.item[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is Full :]");
    }
  }

  // Dequeue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty :]");
    } else {
      let ele = this.item[this.front];
      this.item[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return ele;
    }
  }

  // Peek
  peek() {
    if (!this.isEmpty()) {
      return this.item[this.front];
    }
    return null;
  }

  // Print
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty :]");
    } else {
      let i;
      let string = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += this.item[i] + "  ";
      }
      string += this.item[i];
      console.log(string);
    }
  }
}

const cQueue = new circularQueue(5);

console.log(cQueue.isEmpty());

cQueue.enqueue(9);
cQueue.enqueue(22);
cQueue.enqueue(1);
cQueue.enqueue(80);
cQueue.enqueue(3);

console.log(cQueue.isFull());

cQueue.print();

console.log(cQueue.dequeue());

console.log(cQueue.peek());

cQueue.print();
cQueue.enqueue(7);
cQueue.print();
