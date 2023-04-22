const breadthFirstQueue = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const breadthFirstQueueRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    breadthFirstQueueRecursive(graph, neighbor);
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstQueue(graph, "a"); //abdfce
console.log("###############");
breadthFirstQueue(graph, "a"); //abdfce
