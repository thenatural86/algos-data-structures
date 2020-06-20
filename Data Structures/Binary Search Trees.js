// Objectives
// Define what a tree is
// Compare and contrast trees and list
// Explain difference between trees, binary trees, binary search trees

// needs to have root property that is root by default and that's it

// define a class called node
// left and right point to null at initialization
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

 
}

class BST {
  constructor() {
    this.root = null
  }

//   insert(val) {
//     let newNode = new Node(value)
//     if (this.root === null) {
//       this.root = newNode
//       return this
//     }
//     let current = this.root
//   }
// }

find(val) {}

let tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree)
