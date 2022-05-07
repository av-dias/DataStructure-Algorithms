class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const depthFirstTransversal = (root) => {
  if (root == null) return;
  console.log(root);
  depthFirstTransversal(root.left);
  depthFirstTransversal(root.right);
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

depthFirstTransversal(a);
