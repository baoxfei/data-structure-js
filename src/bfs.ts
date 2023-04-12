import Graph from './graph';
import Queue from './queue';

enum Colors {
  White = 0,
  Grey,
  Black,
}

const initColor = (vertices) => {
  const color = {}
  for (let index = 0; index < vertices.length; index++) {
    const element = vertices[index];
    color[element] = Colors.White
  }
  return color
}

export const bfs = (graph: Graph, callbackFn: Function) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initColor(vertices)
  const queue = new Queue();
  // while () {
  //   const v = vertices.unshift();
  //   const n = adjList.get(v) || [];
  //   for(let i = 0; i < n.length; i ++) {
  //     const vertice = n[i];
  //     if (color[v] === Colors.White) {
  //       color[v] = Colors.Grey
  //     }
  //     color[v] = Colors.Black;
  //     callbackFn(vertice)
  //   }
  // }
}