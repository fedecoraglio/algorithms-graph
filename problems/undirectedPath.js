/**
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
 * The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
 * https://structy.net/problems/undirected-path
 */

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hashPath(graph, nodeA, nodeB, new Set());
};

const hashPath = (graph, source, destination, visited) => {
  // si source es igual a destination, encontramos el destino.
  if (source === destination) return true;
  // si el destino ya fue visitado, no se lo valida mas
  if (visited.has(source)) return false;
  // se agrega el actual destino
  visited.add(source);

  for (let neighbor of graph[source]) {
    if (hashPath(graph, neighbor, destination, visited)) {
      // si el neighbor tiene conexion con el destino
      // se concontro el mismo, porque source y neighbor estan conectados.
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const result = undirectedPath(edges, "j", "m");
console.log(`Puedo desde el elemento j al elemento m?: ${result}`);
