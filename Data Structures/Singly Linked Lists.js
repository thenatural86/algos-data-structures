// Objectives
// Define what a singly linked list is
// Compare and contrast linked list with arrays
// Implement insertion, removal and traversal methods on Singly Lined Lists

// What is a linked list?

// Data structure that contains a head, tail and length property
// Each element is a node
// Consists of nodes and each node has a value and a pointer to another node or null

// A bunch of nodes that point to the next one
// Single because each note is connect in only one direction to the next node

// Comparison with Arrays

// List
// Don't have indexes
// Connected via nodes with a next pointer
// Random access is not allowed
// Main reason to use a linked list is for insertion/deletion

// Arrays
// Indexed in order
// Insertion and deletion can be expensive
// Can be quickly accessed at a specific index

// Starter Code and Push Intro
// A node:
//  stores a piece of data - val
//  stores a reference to the next node - next

class Node {
  constructor(val) {
    this.val = val
    // in the beginning there is nothing that comes after it
    this.next = null
  }
}

// define a singly linked list that will utilize Node
class SinglyLinkedList {
  constructor() {}
}

let list = new SinglyLinkedList()
