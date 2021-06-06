class PriorityQueue {
  constructor() {
    this.values = [];
  }

  queueLength() {
    return this.values.length;
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  reset(node, priority) {
    this.values.forEach((n) => {
      if (n.val === node) {
        n.priority = priority;
      }
    });
    console.dir(this.values);

    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    return this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(aVertex, bVertex, weight) {
    this.adjacencyList[aVertex].push({ node: bVertex, weight });
    this.adjacencyList[bVertex].push({ node: aVertex, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const previous = {};
    const distances = {};
    const path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.queueLength) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((n) => {
          let newDistance = distances[smallest] + n.weight;
          if (newDistance < distances[n.node]) {
            nodes.reset(n.node, newDistance);
            distances[n.node] = newDistance;
            previous[n.node] = smallest;
          }
        });
      }
    }
    this.log([...path, start].reverse());
  }

  log(input = this.adjacencyList) {
    console.dir(input);
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstra("A", "E");
