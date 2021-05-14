class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  Insert(value) {
    const treeNode = new TreeNode(value);
    const recursion = (tree) => {
      if (tree === null) {
        this.root = treeNode;
        return this;
      }
      if (tree.value > value) {
        if (tree.left === null) {
          tree.left = treeNode;
          return this;
        }
        recursion(tree.left);
      } else {
        if (tree.right === null) {
          tree.right = treeNode;
          return this;
        }
        recursion(tree.right);
      }
    };
    return recursion(this.root);
  }

  find(value) {
    const findInNode = (tree) => {
      if (tree === null) {
        return undefined;
      }
      if (tree.value === value) {
        return tree;
      }

      if (tree.value > value) {
        return findInNode(tree.left);
      } else {
        return findInNode(tree.right);
      }
    };
    return findInNode(this.root);
  }

  bfs() {
    if (this.root === null) {
      return undefined;
    }
    let nodeEle = null;
    const queue = [],
      visited = [];
    queue.push(this.root);
    while (queue.length > 0) {
      nodeEle = queue.shift();
      visited.push(nodeEle.value);
      if (nodeEle.left) {
        queue.push(nodeEle.left);
      }
      if (nodeEle.right) {
        queue.push(nodeEle.right);
      }
    }
    return visited;
  }
}

const bst = new BinaryTree();
bst.Insert(10);
bst.Insert(12);
bst.Insert(8);
bst.Insert(15);

console.log(bst.bfs());
