// Priority Queue
// A data structure where each element has a priority
// Elements with higher priority are served before elements with lower priorities.

// write a Min Binary Heap - lower number means higher priority
// each node has a val and a priority. Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based on its priority
// Dequeue method removes root element, returns it, and rearranges heap using priority

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  dequeue() {
    let min = this.values[0]
    let end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.bubbleDown()
    }
    return min
  }
  bubbleDown() {
    let idx = 0
    let length = this.values.length
    let element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

let PQ = new PriorityQueue()
PQ.enqueue("cold", 5)
PQ.enqueue("gun", 1)
PQ.enqueue("fever", 4)
PQ.enqueue("arm", 2)
PQ.enqueue("foot", 3)
