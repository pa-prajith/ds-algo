class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  AddVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  RemoveVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.RemoveEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }

  AddEdge(aVertex, bVertex) {
    this.adjacencyList[aVertex].push(bVertex);
    this.adjacencyList[bVertex].push(aVertex);
  }

  RemoveEdge(aVertex, bVertex) {
    this.adjacencyList[aVertex] = this.adjacencyList[aVertex].filter(
      (v) => v !== bVertex
    );
    this.adjacencyList[bVertex] = this.adjacencyList[bVertex].filter(
      (v) => v !== aVertex
    );
  }

  Print() {
    console.table(this.adjacencyList);
  }
}

const g = new Graph();
g.AddVertex("a");
g.AddVertex("b");
g.AddVertex("c");
g.AddVertex("d");
g.AddVertex("e");
g.Print();

g.AddEdge("a", "c");
g.AddEdge("a", "d");
g.AddEdge("a", "e");
g.AddEdge("d", "c");
g.AddEdge("d", "e");
g.AddEdge("b", "c");
g.AddEdge("e", "c");
g.Print();
g.RemoveVertex("c");
g.Print();
