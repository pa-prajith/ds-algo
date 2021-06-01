class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfs(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    visited[start] = true;
    let nextNode;
    while (stack.length !== 0) {
      nextNode = stack.pop();
      result.push(nextNode);
      this.adjacencyList[nextNode].forEach((node) => {
        if (!visited[node]) {
          visited[node] = true;
          stack.push(node);
        }
      });
    }
    return result;
  }

  dfsRecursion(start) {
    const result = [];
    const visited = {};
    const recursion = (node) => {
      if (!this.adjacencyList[node]) {
        return undefined;
      }
      result.push(node);
      visited[node] = true;
      this.adjacencyList[node].forEach((n) => {
        if (!visited[n]) {
          return recursion(n);
        }
      });
    };
    recursion(start);
    return result;
  }

  bfsRecursion(start) {
    const result = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;
    const bfs = () => {
      if (queue.length === 0) {
        return undefined;
      }
      const node = queue.shift();
      if (!this.adjacencyList[node]) {
        return undefined;
      }
      result.push(node);
      this.adjacencyList[node].forEach((n) => {
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      });
      bfs();
    };

    bfs();

    return result;
  }

  print() {
    console.dir(this.adjacencyList);
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.print();

console.dir(g.dfs("A"));
console.dir(g.dfsRecursion("A"));
console.dir(g.dfsRecursion("U"));
console.dir(g.bfsRecursion("A"));
console.dir(g.bfsRecursion("U"));
