/**
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
 * The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
 * https://structy.net/problems/island-count
 */

const islandCount = (grid) => {
  // todo
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      //visited.add(r + "," + c);
      if (explore(grid, r, c, visited)) {
        count++;
      }
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;

  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3

const grid1 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

console.log(islandCount(grid1)); // -> 4

const grid2 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

console.log(islandCount(grid2)); // -> 1

const grid3 = [
  ["W", "W"],
  ["W", "W"],
  ["W", "W"],
];

console.log(islandCount(grid3)); // -> 0
