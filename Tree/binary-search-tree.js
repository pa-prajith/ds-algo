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
    if (this.root === null) {
      this.root = treeNode;
    } else {
      let eleNode = this.root;
      while (true)
        if (value < eleNode.value) {
          if (eleNode.left === null) {
            eleNode.left = treeNode;
            return this;
          } else {
            eleNode = eleNode.left;
          }
        } else {
          if (eleNode.right === null) {
            eleNode.right = treeNode;
            return this;
          } else {
            eleNode = eleNode.right;
          }
        }
    }
  }

  InsertRecursion(value) {
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
}

const bst = new BinaryTree();
// bst.Insert(10);
// bst.Insert(12);
// bst.Insert(8);
// bst.Insert(15);
bst.InsertRecursion(10);
bst.InsertRecursion(12);
bst.InsertRecursion(8);
bst.InsertRecursion(15);
console.log(bst);

console.log(bst.find(8));
console.log(bst.find(15));
console.log(bst.find(25));
console.log(bst.find(10));
