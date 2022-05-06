const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breadthFirstTransversal = (graph, start) => {
  let queue = [start];

  while (queue.length > 0) {
    let current_node = queue.shift();
    console.log(current_node);
    for (const neighbord of graph[current_node]) queue.push(neighbord);
  }
};

breadthFirstTransversal(graph, "a");
