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
