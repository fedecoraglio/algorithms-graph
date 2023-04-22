/**
 * Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
 * The function should return the length of the shortest path between A and B. Consider the length as the number of edges
 * in the path, not the number of nodes. If there is no path between A and B, then return -1.
 * https://structy.net/problems/shortest-path
 */

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
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

const edges1 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges1, "w", "z")); // -> 2

const edges2 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges2, "y", "x")); // -> 1

const edges3 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

console.log(shortestPath(edges3, "a", "e")); // -> 3

const edges4 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

console.log(shortestPath(edges4, "e", "c")); // -> 2

const edges5 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

console.log(shortestPath(edges5, "b", "g")); // -> -1

const edges6 = [
  ["c", "n"],
  ["c", "e"],
  ["c", "s"],
  ["c", "w"],
  ["w", "e"],
];

console.log(shortestPath(edges6, "w", "e")); // -> 1

const edges7 = [
  ["m", "n"],
  ["n", "o"],
  ["o", "p"],
  ["p", "q"],
  ["t", "o"],
  ["r", "q"],
  ["r", "s"],
];

console.log(shortestPath(edges7, "m", "s")); // -> 6
