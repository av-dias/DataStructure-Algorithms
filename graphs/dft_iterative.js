const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstTransversal(graph, "a");

// depth first transversal starting on node a
function depthFirstTransversal(graph, start) {
 let stack = [];

  //starting on node a, as referred
  stack.push(start);

  //while there are node in the stack
  while (stack.length > 0) {
    //get last stacked node
    const current_node = stack.pop();
    console.log(current_node);
    //stack its neighbords
    for (const neighbord of graph[current_node]) {
      stack.push(neighbord);
    }
  }
}
