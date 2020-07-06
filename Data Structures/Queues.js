// Objectives
// define what a queue is
// understand use cases for a queue
// implement operations on a queue data structure
// useful for processing tasks and are foundational for more complex data structures

// What is a Queue
// A queue is a FIFO - first in first out - data structure
// Can built a queue using an array but not ideal because needs to be re-indexed
// Can build your own

// Enqueue - Add to the end - push

// enqueue()
// accepts a value
// create a new Node using that value passed to the function
// if there are no nodes in the queue, set this node to be the first and last properties of the queue
// otherwise set the next property on the current last to be that node

// Dequeue - Remove from the beginning - shift

// dequeue()
// if there is no first property return null
// store the first property in a variable
// see if the first is the same as the last (check if there is only one node). if so set the first and last to null
// if there is more than one node, set the first property to be the next property of first
// decrement the size by 1
// return the value of the dequeued node

// Big O of Queues
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

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return null
    let temp = this.first
    if ((this.first = this.last)) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}
