class NodeElement {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    this.heap.push(new NodeElement(value, priority));
    if (this.heap.length > 1) {
      this.bubble(this.heap.length - 1);
    }
  }

  bubble(pos) {
    const parentPos = Math.floor((pos - 1) / 2);
    if (this.heap[parentPos].priority > this.heap[pos].priority) {
      return this;
    }
    [this.heap[parentPos], this.heap[pos]] = [
      this.heap[pos],
      this.heap[parentPos],
    ];

    if (parentPos === 0) {
      return this;
    }
    this.bubble(parentPos);
  }

  dequeue() {
    if (this.heap.length > 1) {
      [this.heap[0], this.heap[this.heap.length - 1]] = [
        this.heap[this.heap.length - 1],
        this.heap[0],
      ];
    }
    const maxValue = this.heap.pop();
    this.tumbledown(0);
    return maxValue;
  }

  tumbledown(pos) {
    if (this.heap.length < 2) {
      return this;
    }
    const rightChildPos = 2 * pos + 1;
    const leftChildPos = 2 * pos + 2;
    if (
      rightChildPos > this.heap.length - 1 &&
      leftChildPos > this.heap.length - 1
    ) {
      return this;
    }
    const hightValuePos =
      ((this.heap[rightChildPos] && this.heap[rightChildPos].priority) || 0) >=
      ((this.heap[leftChildPos] && this.heap[leftChildPos].priority) || 0)
        ? rightChildPos
        : leftChildPos;
    if (this.heap[pos].priority < this.heap[hightValuePos].priority) {
      [this.heap[pos], this.heap[hightValuePos]] = [
        this.heap[hightValuePos],
        this.heap[pos],
      ];
      this.tumbledown(hightValuePos);
    }
    return this;
  }

  setArray(arr) {
    this.heap = arr;
  }

  print() {
    console.table(this.heap);
  }
}

const priority = new PriorityQueue();
priority.enqueue("green", 2);
priority.enqueue("yellow", 1);
priority.enqueue("blue", 3);
priority.enqueue("orange", 7);
priority.enqueue("red", 5);

priority.print();
priority.dequeue();
priority.print();
priority.dequeue();
priority.print();
priority.dequeue();
priority.print();
priority.dequeue();
priority.print();
priority.dequeue();
priority.print();
