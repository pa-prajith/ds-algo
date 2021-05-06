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

  unshift(value) {
    const node = new LinkNode(value);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
    this.length = this.length + 1;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const oldHead = this.head;
    this.head = oldHead.nextNode;
    this.length = this.length - 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  get(index) {
    if (index < 1 || index > this.length) {
      return undefined;
    }
    let current = this.head;
    let tracker = 1;
    while (index !== tracker) {
      current = current.nextNode;
      tracker++;
    }
    return current;
  }

  set(index, value) {
    /*
    if (index < 1 || index > this.length) {
      return undefined;
    }
    let current = this.head;
    let tracker = 1;
    while (current) {
      if (index === tracker) {
        current.value = value;
        break;
      }
      current = current.nextNode;
      tracker++;
    }
    return this;
    */
    let eleNode = this.get(index);
    if (eleNode) {
      eleNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0 && index > this.length) {
      return false;
    }
    if (index === 1) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const getIndex = index - 1;
      const eleNode = this.get(getIndex);
      const newNode = new LinkNode(value);
      newNode.nextNode = eleNode.nextNode;
      eleNode.nextNode = newNode;
    }
    this.length = this.length + 1;
    return true;
  }
  remove(index) {
    if (index === 0 && index > this.length) {
      return false;
    }
    if (index === 1) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      const getIndex = index - 1;
      const prevNode = this.get(getIndex);
      const currentNode = prevNode.nextNode;
      prevNode.nextNode = currentNode.nextNode;
    }
    this.length = this.length - 1;
    return true;
  }

  reverse() {
    if (!this.head) {
      return undefined;
    }
    let node = this.head;
    this.head = this.tail;
    this.tail = this.head;
    let next;
    let prev = null;

    while (node) {
      next = node.nextNode;
      node.nextNode = prev;
      prev = node;
      node = next;
    }
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
list.push("100");
list.push("200");
list.push("300");
list.push("400");

list.display();
list.pop();
list.display();
list.push("500");
list.shift();
list.unshift("99");
list.display();
console.log(list.get(2));
console.log(list.get(1));
console.log(list.get(20));
list.set(2, "201");
list.insert(3, "302");
list.insert(1, "103");
list.display();
list.remove(2);
list.display();
list.remove(1);
list.display();
list.reverse();
list.display();
