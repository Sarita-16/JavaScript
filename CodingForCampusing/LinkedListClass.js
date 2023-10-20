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

  // Add a node in the beginning
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
}

const list = new LinkedList();

console.log("List is Empty ? ", list.isEmpty());

console.log("List Size : ", list.getSize());

list.print();

list.prepend(74);
list.prepend(23);
list.prepend(99);

list.print();
