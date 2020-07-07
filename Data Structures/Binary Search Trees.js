// Objectives
// Define what a tree is
// Compare and contrast trees and list
// Explain difference between trees, binary trees, binary search trees
// Implement operations on BST

// What is a Tree?
// A data structure that consist of nodes in a parent/child relationship

// List - linear
// Tress - nonlinear

// Tree terminology
// Root - The top node in a tree
// Child - A node directly connected to another node when moving away from the root
// Parent - The converse notion of a child
// Siblings - A group of nodes with the same parent
// Leaf - A node with no children
// Edge - The connection between one node and another

// Some Uses for Trees
// HTML DOM
// Network Routing
// Abstract SyntaX Trees
// Artificial Intelligence(Decision Tree)
// Folders in an operating system

// Intro to Binary Trees

// Binary Search Tree
// Each node can have at most, 2 children (can have 0,1 or 2 children)
// Sorted in a particular way
// Every node to the left of a parent is always less than the parent
// Every node to the right of the parent is always greater than the parent

// insert()
// can do iteratively or recursively
// create a new node
// starting at the new node
// check if there is a root, if not the root now becomes that new node
// if there is a root, check if the value of the new node is greater than or less than the value of the root
// if it is greater
// check to see if there is a node to the right
// if there is, move to that node and repeat these steps
// if there is not, add that node as the right property
// if it is less
// check to see if there is a node to the left
// if there is, move to that node and repeat these steps
// if there is not, add that node as the left property
// return tree at end of method

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
