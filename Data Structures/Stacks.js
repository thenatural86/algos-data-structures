// Objectives
// define what a stack is
// understand use cases for a stack
// implement operations in a stack

// What is a stack?
// an abstract data structure that abides by the LIFO rules
// Last In First Out
// the last element added to the stack will be the first element removed from the stack

// Where stacks are used
// managing function invocations
// undo/redo (command z)
// routing (the history object) is treated like a stack

// Array Implementation
// can use push() and pop() or unshift() and shift()
// not efficient but push/pop are better option

// push()
// function should accept a value
// create a new node with that value
// if there are no nodes in the stack, set the first and last property to be the newly created node
// if there is at least one node,create a variable that stores the current first property on the stacks
// reset the first property to be the newly created node
// set the next property on the node to be the previously created variable
// increment the size of the stack by one

// pop()
// if there are no nodes in the stack, return null
// create a temporary variable to store the first property on the stack
// if there is only one node, set the first and last properties to null
// if there is more than one node, set the first property to be the next property on the current first
// decrement the size by one
// return the value of the node removed

// Big O of Stacks
// insertion - O(1)
// removal - O(1)
// searching - O(n)
// access - O(n)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    }
    if (this.size >= 1) {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = temp.next
    this.size--
    return temp.value
  }
}
