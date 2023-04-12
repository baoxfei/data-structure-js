// import Dictionary from "./dictionary";
class Graph {
  private vertices: (string | number)[] = []
  private adjList: Map<string | number, (string | number)[]> = new Map()
  constructor(private isDirected = false){}
  addVertex(v: string | number) {
    if (this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }
  addEdge(v: string | number, a: string | number) {
    if (!this.vertices.includes(v)) {
      this.addVertex(v)
    }
    if (!this.vertices.includes(a)) {
      this.addVertex(a)
    }
    this.adjList.get(v)?.push(a)
    if (!this.isDirected) {
      this.adjList.get(v)?.push(a);
    }
  }
  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }
  // toString() {
  //   let s = '';
  //   for (let i = 0; i < this.vertices.length; i++) {
  //     s += this.vertices[i] + ' -> ';
  //     const neighbors = this.adjList.get(this.vertices[i]);
  //     for (let j = 0; j < neighbors.length; j++) {
  //       s += neighbors[j] + ' ';
  //     }
  //     s += '\n';
  //   }
  //   return s;
  // }
}


export default Graph;