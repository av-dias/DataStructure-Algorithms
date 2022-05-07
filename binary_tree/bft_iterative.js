class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

breadthFirstTransversal = (root) => {
  if (root == null) return false;

  let queue = [root];
  while (queue.length > 0) {
    let current_node = queue.shift();
    console.log(current_node.value);
    if (current_node.left) queue.push(current_node.left);
    if (current_node.right) queue.push(current_node.right);
  }
};

//      a
//     / \
//    b   c
//   / \    \
//  d   e    f

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

breadthFirstTransversal(a);
