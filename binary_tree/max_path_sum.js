// PROBLEM
// CALCULATE THE MAX PATH SUM FROM THE TREE

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//      5
//     / \
//    11   3
//   / \    \
//  4   2    1

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

let max = -1;

const depthFirstTransversal = (root, sum) => {
  if (root == null) return sum;
  let current = root.value + sum;
  let left = depthFirstTransversal(root.left, current);
  let right = depthFirstTransversal(root.right, current);
  return Math.max(left, right);
  //console.log(Math.max(left, right));
};

console.log(depthFirstTransversal(a, 0));
