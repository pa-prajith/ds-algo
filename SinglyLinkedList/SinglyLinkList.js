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
}

const list = new SinglyLinklist();
list.push("hello");
list.push("how");
list.push("you");
list.push("doing");

console.log(list);
