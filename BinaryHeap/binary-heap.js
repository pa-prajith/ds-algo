class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    if (this.heap.length > 1) {
      this.bubble(this.heap.length - 1);
    }
  }

  bubble(pos) {
    const parentPos = Math.floor((pos - 1) / 2);
    if (this.heap[parentPos] > this.heap[pos]) {
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

  extractMax() {
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
      (this.heap[rightChildPos] || 0) >= (this.heap[leftChildPos] || 0)
        ? rightChildPos
        : leftChildPos;
    if (this.heap[pos] < this.heap[hightValuePos]) {
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

const bHeap = new BinaryHeap();

bHeap.insert(40);
bHeap.insert(10);
bHeap.insert(30);
bHeap.insert(20);
bHeap.insert(50);
bHeap.insert(5);
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();

bHeap.setArray([55, 39, 41, 18, 27, 12, 33]);
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
console.log(bHeap.extractMax());
bHeap.print();
