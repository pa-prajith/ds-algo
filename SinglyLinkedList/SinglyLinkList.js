class LinkNode {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class SinglyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new LinkNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.nextNode = node;
    }
    this.tail = node;
    this.length = this.length + 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return this;
    }
    if (this.length === 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;
      return this;
    }
    let current = this.head;
    let prevNode = null;
    while (current.nextNode) {
      prevNode = current;
      current = current.nextNode;
    }
    this.tail = prevNode;
    this.length = this.length - 1;
    return this;
  }

  display() {
    let current = this.head;
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.nextNode;
    }
    console.log(arr.join(" --> "));
  }
}

const list = new SinglyLinklist();
list.push("hello");
list.push("how");
list.push("you");
list.push("doing");

list.display();
list.pop();
list.display();
list.push("new One");
list.display();
