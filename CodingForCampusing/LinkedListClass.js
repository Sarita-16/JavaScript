class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // IsEmpty
  isEmpty() {
    return this.size === 0;
  }

  // size
  getSize() {
    return this.size;
  }

  // Add a node in the beginning (Append) : Time Complexity : O(1)
  prepend(value) {
    const newNode = new Node(value);
    // When list is empty
    if (this.isEmpty()) {
      this.head = newNode;
    }
    // When list is not empty
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    /*  //Short form to write the code when list is empty or not
    if (!this.isEmpty()) {
      newNode.next = this.head;
    }
    this.head = newNode;    */
    this.size++;
  }

  // Print
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty ");
    } else {
      let currentNode = this.head;
      let listValue = "";
      while (currentNode != null) {
        listValue += `${currentNode.value}  `;
        currentNode = currentNode.next;
      }
      console.log(`${listValue}`);
    }
  }

  // Add a node in the End (Append) : Time COmplexity : O(n)
  append(value) {
    const newNode = new Node(value);
    // When list is Empty
    if (this.isEmpty()) {
      this.head = newNode;
    }
    // When list is not Empty
    else {
      let lastNode = this.head;
      while (lastNode.next != null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
    this.size++;
  }
}

const list = new LinkedList();

console.log("List is Empty ? ", list.isEmpty());

console.log("List Size : ", list.getSize());

list.print();

list.prepend(74);
list.prepend(23);
list.prepend(99);

list.print();

list.append(1);
list.append(3);
list.append(5);

list.print();
