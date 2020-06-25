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
    this.next = null
  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// do not initialize with any args, rather define with
// a pointer to head, pointer to tail and a length
class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  //  work on adding many methods to SinglyLinkedList class
  // .push()
  // takes a piece of data create a new Node and assign it to
  // the head and tail of the list. Assigned to both when list
  // is empty (80).
  // Next we take the head and have its next
  // property point to the next node and set tail to be (81)
  // then take current tail and have it point to (85), then
  // update that to be the tail.

  // adding a new Node to the end of the Linked List

  // Pseudo
  // function should accept a value
  // create a new node using the value passed into the
  // function
  // If there is no head property on the list, set the head
  // and the tail to be the newly created node
  // Otherwise set the next property on the tail to be the
  // new node and set the tail property on the list
  // to be the newly created node
  // Increment the lengtrh by one
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // popping is removing a node from the end of Linked
  // List
  // to remove tail, we must assign a new tail
  // by starting at beginning and going through list until
  // end and making the last node the new tail
  // first thing we need to be able to do is travesrse
  // the list

  // Pseudo
  // if there are no nodes in the list, return undefined
  // loop through the list until you reach the tail
  // set the next property of the 2nd to last node to be
  // null
  // set the tail to be the 2nd to last node
  // decrement the length of the list by 1
  // return the value of the node removed
  pop(val) {}
}

let list = new SinglyLinkedList()
// list.push("Hello")
// list.push("Goodbye")
