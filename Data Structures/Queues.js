// Objectives
// define what a queue is
// understand use cases for a queue
// implement operations on a queue data structure

// What is a Queue
// A queue is a FIFO - first in first out - data structure
// Can built a queue using an array but not ideal because needs to be re-indexed
// Can build your own

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
}
