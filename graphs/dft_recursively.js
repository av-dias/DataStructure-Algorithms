const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstTransversal(graph, "a");

// depth first transversal starting on node a
function depthFirstTransversal(graph, start) {
  // stack for dft temporary storage
  let stack = [];

  // current_node
  console.log(start);

  // depth next neighbord
  for (const neighbord of graph[start]) {
    depthFirstTransversal(graph, neighbord);
  }
}
