// Question:
// Given the root of a binary tree, invert the tree, and return its root.

// solution:

var invertTree = function(root) {
    if (root == null){
        return root
    }
    let left = invertTree(root.left)
    let right = invertTree(root.right)

    let temp = []
    temp = root.right
    root.right = left
    root.left = right

    return root

};

//因為leetcode已經將r轉為binary tree, 所以可以直接得到答案，
//如果在VS code中希望得到一樣的結果，需要先將array轉為binary tree

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function arrayToBinaryTree(array) {
    if (!array || array.length === 0) {
      return null;
    }
  
    const root = new TreeNode(array[0]);
  
    for (let i = 1; i < array.length; i++) {
      insertNode(root, array[i]);
    }
  
    return root;
  }
  
  function insertNode(root, value) {
    if (value < root.value) {
      if (root.left === null) {
        root.left = new TreeNode(value);
      } else {
        insertNode(root.left, value);
      }
    } else {
      if (root.right === null) {
        root.right = new TreeNode(value);
      } else {
        insertNode(root.right, value);
      }
    }
  }
  
  // Example usage:
  const array = [2, 1, 3];
  const binaryTree = arrayToBinaryTree(array);
  console.log(invertTree(binaryTree));
  
// tree 也可以用描述的



