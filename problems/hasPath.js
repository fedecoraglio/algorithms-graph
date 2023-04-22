/**
 * Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
 * The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.Hey.
 * This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
 * https://structy.net/problems/has-path
 */

const hasPath = (graph, src, dst) => {
  // todo
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (dst === current) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// g-i g-h i-k j-i

console.log(hasPath(graph, "f", "k")); // true

const graph1 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph1, "f", "j")); // false

const graph2 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph2, "i", "h")); // true

const graph3 = {
  v: ["x", "w"],
  w: [],
  x: [],
  y: ["z"],
  z: [],
};

console.log(hasPath(graph3, "v", "w")); // true

const graph4 = {
  v: ["x", "w"],
  w: [],
  x: [],
  y: ["z"],
  z: [],
};

console.log(hasPathRecursive(graph4, "v", "z")); // false
